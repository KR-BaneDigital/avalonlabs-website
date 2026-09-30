import PostalMime, { addressParser } from "postal-mime";
import { Resend } from "resend";
import { CONTACT_EMAIL } from "@/lib/contact";

export const runtime = "nodejs";
export const maxDuration = 60;

const FORWARD_TO = "kyle@banedigital.com";

function isInquiryRecipient(recipients: string[]) {
  return recipients.some((recipient) =>
    addressParser(recipient, { flatten: true }).some(
      (address) =>
        "address" in address && address.address?.toLowerCase() === CONTACT_EMAIL
    )
  );
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const webhookSecret = process.env.RESEND_WEBHOOK_SECRET;

  if (!(apiKey && webhookSecret)) {
    return Response.json(
      { error: "Email forwarding is not configured" },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  let event: ReturnType<Resend["webhooks"]["verify"]>;
  try {
    event = resend.webhooks.verify({
      headers: {
        id: request.headers.get("svix-id") ?? "",
        signature: request.headers.get("svix-signature") ?? "",
        timestamp: request.headers.get("svix-timestamp") ?? "",
      },
      payload: await request.text(),
      webhookSecret,
    });
  } catch {
    return Response.json(
      { error: "Invalid webhook signature" },
      { status: 400 }
    );
  }

  if (event.type !== "email.received" || !isInquiryRecipient(event.data.to)) {
    return Response.json({ ignored: true });
  }

  try {
    const { data: email, error: receiveError } =
      await resend.emails.receiving.get(event.data.email_id);

    if (receiveError || !email?.raw?.download_url) {
      throw new Error("Unable to retrieve received email");
    }

    // Check the stored envelope as well as the signed event before forwarding.
    if (!isInquiryRecipient(email.to)) {
      return Response.json({ ignored: true });
    }

    const rawResponse = await fetch(email.raw.download_url, {
      signal: AbortSignal.timeout(20_000),
    });
    if (!rawResponse.ok) {
      throw new Error("Unable to retrieve raw email");
    }

    const parsed = await PostalMime.parse(await rawResponse.arrayBuffer(), {
      attachmentEncoding: "base64",
    });
    const replyTo = (parsed.replyTo ?? []).flatMap((address) =>
      "address" in address && address.address ? [address.address] : []
    );
    if (!replyTo.length && parsed.from?.address) {
      replyTo.push(parsed.from.address);
    }

    const { error: sendError } = await resend.emails.send(
      {
        attachments: parsed.attachments.map((attachment) => ({
          content:
            typeof attachment.content === "string"
              ? attachment.content
              : Buffer.from(
                  attachment.content instanceof Uint8Array
                    ? attachment.content
                    : new Uint8Array(attachment.content)
                ).toString("base64"),
          contentId: attachment.contentId?.replace(/[<>]/g, ""),
          contentType: attachment.mimeType,
          filename: attachment.filename || undefined,
        })),
        from: `Avalon Labs Inquiries <${CONTACT_EMAIL}>`,
        html: parsed.html || undefined,
        replyTo: replyTo.length ? replyTo : email.from,
        subject: email.subject || "(no subject)",
        text: parsed.text || (parsed.html ? "" : "(Empty message)"),
        to: FORWARD_TO,
      },
      // Resend deduplicates retries with the same email ID for 24 hours.
      { idempotencyKey: `avalon-inquiry/${event.data.email_id}` }
    );

    if (sendError) {
      throw new Error("Unable to send forwarded email");
    }
    return Response.json({ forwarded: true });
  } catch {
    // Do not log message content, sender addresses, or signed download URLs.
    console.error("Resend inquiry forwarding failed", event.data.email_id);
    return Response.json(
      { error: "Forwarding failed; retry delivery" },
      { status: 502 }
    );
  }
}
