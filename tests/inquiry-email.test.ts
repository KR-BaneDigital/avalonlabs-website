import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import { afterEach, beforeEach, mock, test } from "node:test";
import { POST } from "../app/api/webhooks/resend/route";

const secretBytes = Buffer.from("test-only-webhook-signing-secret");
const secret = `whsec_${secretBytes.toString("base64")}`;
const previousKey = process.env.RESEND_API_KEY;
const previousSecret = process.env.RESEND_WEBHOOK_SECRET;
const emailId = "06591cd0-637b-4187-852d-9701395edb2f";

beforeEach(() => {
  process.env.RESEND_API_KEY = "re_test_only";
  process.env.RESEND_WEBHOOK_SECRET = secret;
});

afterEach(() => {
  mock.restoreAll();
  if (previousKey === undefined) {
    Reflect.deleteProperty(process.env, "RESEND_API_KEY");
  } else {
    process.env.RESEND_API_KEY = previousKey;
  }
  if (previousSecret === undefined) {
    Reflect.deleteProperty(process.env, "RESEND_WEBHOOK_SECRET");
  } else {
    process.env.RESEND_WEBHOOK_SECRET = previousSecret;
  }
});

function signedRequest(
  to = ["inquiries@avalonlabs.ai"],
  type = "email.received",
  timestamp = Math.floor(Date.now() / 1000)
) {
  const body = JSON.stringify({
    created_at: "2026-09-28T21:00:00.000Z",
    data: { email_id: emailId, from: "Visitor <visitor@example.com>", to },
    type,
  });
  const signature = createHmac("sha256", secretBytes)
    .update(`msg_test.${timestamp}.${body}`)
    .digest("base64");
  return new Request("https://www.avalonlabs.ai/api/webhooks/resend", {
    body,
    headers: {
      "svix-id": "msg_test",
      "svix-signature": `v1,${signature}`,
      "svix-timestamp": String(timestamp),
    },
    method: "POST",
  });
}

const rawEmail = [
  "From: Visitor <visitor@example.com>",
  "To: inquiries@avalonlabs.ai",
  "Reply-To: reply@example.com",
  "Subject: Partnership inquiry",
  "MIME-Version: 1.0",
  'Content-Type: multipart/mixed; boundary="test-boundary"',
  "",
  "--test-boundary",
  'Content-Type: text/html; charset="utf-8"',
  "",
  '<p>Let us talk.</p><img src="cid:logo">',
  "--test-boundary",
  'Content-Type: image/png; name="logo.png"',
  'Content-Disposition: inline; filename="logo.png"',
  "Content-ID: <logo>",
  "Content-Transfer-Encoding: base64",
  "",
  "aGVsbG8=",
  "--test-boundary--",
].join("\r\n");

function mockDelivery(
  options: { failSend?: boolean; storedTo?: string[] } = {}
) {
  const sends: { body: Record<string, unknown>; key: string | null }[] = [];
  const fetchMock = mock.method(
    globalThis,
    "fetch",
    (input: string | URL | Request, init?: RequestInit) => {
      const url = String(input);
      if (url === `https://api.resend.com/emails/receiving/${emailId}`) {
        return Promise.resolve(
          Response.json({
            from: "Visitor <visitor@example.com>",
            id: emailId,
            raw: { download_url: "https://email.example.test/raw" },
            subject: "Partnership inquiry",
            to: options.storedTo ?? ["inquiries@avalonlabs.ai"],
          })
        );
      }
      if (url === "https://email.example.test/raw") {
        return Promise.resolve(new Response(rawEmail));
      }
      if (url === "https://api.resend.com/emails") {
        sends.push({
          body: JSON.parse(String(init?.body)),
          key: new Headers(init?.headers).get("Idempotency-Key"),
        });
        return Promise.resolve(
          options.failSend
            ? Response.json(
                { message: "Unavailable", name: "application_error" },
                { status: 500 }
              )
            : Response.json({ id: "forwarded-email" })
        );
      }
      throw new Error(`Unexpected request: ${url}`);
    }
  );
  return { fetchMock, sends };
}

test("rejects unsigned requests without reading or sending mail", async () => {
  const { fetchMock } = mockDelivery();
  const response = await POST(
    new Request("https://example.test", { body: "{}", method: "POST" })
  );
  assert.equal(response.status, 400);
  assert.equal(fetchMock.mock.callCount(), 0);
});

test("rejects expired signatures", async () => {
  const { fetchMock } = mockDelivery();
  const response = await POST(signedRequest(undefined, undefined, 1));
  assert.equal(response.status, 400);
  assert.equal(fetchMock.mock.callCount(), 0);
});

test("fails closed when configuration is missing", async () => {
  Reflect.deleteProperty(process.env, "RESEND_API_KEY");
  assert.equal((await POST(signedRequest())).status, 503);
});

test("ignores other recipients and non-receiving events", async () => {
  const { fetchMock } = mockDelivery();
  const requests = [
    signedRequest(["someone@avalonlabs.ai"]),
    signedRequest(["inquiries@another-domain.ai"]),
    signedRequest(undefined, "email.delivered"),
  ];
  await Promise.all(
    requests.map(async (request) => {
      assert.deepEqual(await (await POST(request)).json(), { ignored: true });
    })
  );
  assert.equal(fetchMock.mock.callCount(), 0);
});

test("forwards only to Kyle, preserving reply address, HTML, and inline attachments", async () => {
  const { sends } = mockDelivery();
  const response = await POST(
    signedRequest(["Avalon <INQUIRIES@AVALONLABS.AI>"])
  );
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { forwarded: true });
  assert.equal(sends.length, 1);
  const sent = sends[0].body;
  assert.equal(sent.to, "kyle@banedigital.com");
  assert.equal(sent.from, "Avalon Labs Inquiries <inquiries@avalonlabs.ai>");
  assert.deepEqual(sent.reply_to, ["reply@example.com"]);
  assert.equal(sent.subject, "Partnership inquiry");
  assert.ok(String(sent.html).includes("cid:logo"));
  assert.deepEqual(sent.attachments, [
    {
      content: "aGVsbG8=",
      content_id: "logo",
      content_type: "image/png",
      filename: "logo.png",
    },
  ]);
});

test("uses the same idempotency key and payload for repeated deliveries", async () => {
  const { sends } = mockDelivery();
  await POST(signedRequest());
  await POST(signedRequest());
  assert.equal(sends[0].key, `avalon-inquiry/${emailId}`);
  assert.deepEqual(sends[0], sends[1]);
});

test("does not forward when the retrieved envelope belongs to another address", async () => {
  const { sends, fetchMock } = mockDelivery({
    storedTo: ["private@another-domain.ai"],
  });
  assert.deepEqual(await (await POST(signedRequest())).json(), {
    ignored: true,
  });
  assert.equal(sends.length, 0);
  assert.equal(fetchMock.mock.callCount(), 1);
});

test("returns a retryable error when sending fails", async () => {
  mockDelivery({ failSend: true });
  mock.method(console, "error", () => {
    // Suppress the expected upstream failure in this test.
  });
  assert.equal((await POST(signedRequest())).status, 502);
});
