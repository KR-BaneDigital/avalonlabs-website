import { LegalPage, type LegalSection } from "@/components/site/legal-page";
import { CONTACT_EMAIL } from "@/lib/contact";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata = pageMetadata(
  "Privacy Policy | Avalon Labs",
  "How Avalon Labs LLC handles information from its corporate website and company inquiries, and how to make a privacy request.",
  "/privacy"
);

const sections: LegalSection[] = [
  {
    id: "scope",
    title: "Who we are and what this notice covers",
    content: (
      <>
        <p>
          Avalon Labs LLC is a Delaware limited liability company and the
          operator of Olympus Atlas. This Privacy Policy covers visits to
          avalonlabs.ai and www.avalonlabs.ai and company inquiries sent to
          Avalon Labs.
        </p>
        <p>
          Olympus Atlas is a product operated by the same company. Its account
          information, saved workspaces, and product interactions are covered by{" "}
          <a href="https://www.olympusatlas.com/privacy">
            Olympus Atlas&apos;s privacy notice
          </a>
          . Contact{" "}
          <a href="https://www.olympusatlas.com/contact">Atlas support</a> for
          product privacy questions and choices. Different brand names do not,
          by themselves, mean separate legal operators or isolated information
          systems.
        </p>
      </>
    ),
  },
  {
    id: "information",
    title: "Information handled here",
    content: (
      <>
        <ul>
          <li>
            <strong>Website requests.</strong> Our hosting provider processes
            technical request information, which can include an IP address,
            browser or device information, requested URL, request time, and
            security or error information.
          </li>
          <li>
            <strong>Company inquiries.</strong> When you email us, we receive
            your email address, name if supplied, message, attachments, and the
            correspondence needed to respond and follow up.
          </li>
        </ul>
        <p>
          This corporate website does not offer user accounts, payments, or an
          on-site inquiry form. Its email links open your own email application.
          Please do not include passwords, financial account credentials, or
          information that is unnecessary for your inquiry.
        </p>
      </>
    ),
  },
  {
    id: "purposes",
    title: "How company-site information is used",
    content: (
      <>
        <p>
          Technical information supports website delivery, troubleshooting, and
          security. Company inquiry information is used to respond to your
          message and follow up on that conversation. Sending a company inquiry
          does not enroll you in a marketing list or CRM.
        </p>
        <p>
          This statement is limited to this corporate website and its inquiry
          channel. Marketing and advertising uses of Olympus Atlas customer
          information are planned, but are not active as of this notice&apos;s
          effective date. Any such use would need to be reflected in
          Atlas&apos;s own privacy information and applicable choices before it
          begins; this notice does not authorize that future use.
        </p>
      </>
    ),
  },
  {
    id: "providers",
    title: "Company access and service providers",
    content: (
      <>
        <p>
          Vercel hosts this website and processes the technical information
          needed to serve and protect it. Resend handles email sent to the
          company inquiry address. Company email correspondence is handled
          through Google Workspace. Email handling can involve message content,
          attachments, addressing information, and delivery records.
        </p>
        <p>
          Company personnel handling your inquiry may access that
          correspondence. Information may also be disclosed where legally
          required or needed to address fraud, abuse, or a security incident.
          Service providers may process information in the United States and
          other countries where they operate.
        </p>
        <p>
          Information about those providers is available in the{" "}
          <a href="https://vercel.com/legal/privacy-notice">
            Vercel privacy notice
          </a>
          ,{" "}
          <a href="https://resend.com/legal/privacy-policy">
            Resend privacy policy
          </a>
          , and{" "}
          <a href="https://cloud.google.com/terms/cloud-privacy-notice">
            Google Cloud Privacy Notice
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and tracking on this website",
    content: (
      <>
        <p>
          The current Avalon corporate website does not run visitor analytics
          scripts, advertising pixels, or session-recording tools. It does not
          provide an account login or set application cookies for an account.
          Hosting and security services still process technical requests.
        </p>
        <p>
          There are no optional tracking tools on this corporate website to turn
          on or off. Olympus Atlas has separate product practices and privacy
          choices. Following a link to Atlas or another website takes you to
          that site&apos;s information practices.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Retention",
    content: (
      <>
        <p>
          We retain company correspondence for responding to and following up on
          inquiries and for relevant business records or legal obligations. The
          appropriate period depends on the nature of the correspondence,
          whether the matter is still open, and applicable obligations.
          Technical logs and provider copies follow the relevant service
          settings and retention arrangements.
        </p>
        <p>
          You can request deletion of inquiry information. A request may require
          separate checks of mailbox, email-service, and backup records; this
          notice does not promise immediate removal from every system.
        </p>
      </>
    ),
  },
  {
    id: "requests",
    title: "Privacy questions and requests",
    content: (
      <>
        <p>
          Email{" "}
          <a href={`mailto:${CONTACT_EMAIL}?subject=Privacy%20request`}>
            {CONTACT_EMAIL}
          </a>{" "}
          with a privacy question or a request to access, correct, or delete
          information from a company inquiry. Tell us which correspondence or
          information your request concerns. We may need to verify your identity
          before disclosing or deleting information.
        </p>
        <p>
          Your rights and any exceptions depend on applicable law. If we cannot
          fulfill a request, you may ask us to explain and review the decision.
          For Olympus Atlas account, marketing, advertising, or product-data
          requests, contact{" "}
          <a href="https://www.olympusatlas.com/contact">Atlas support</a>.
        </p>
      </>
    ),
  },
  {
    id: "updates",
    title: "Changes to this notice",
    content: (
      <p>
        We will publish updates here with an updated effective date when this
        website&apos;s information practices change. Changes to a notice do not
        override rights or choices that apply to information already collected.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      introduction="Information about this company website, company email inquiries, and your privacy requests."
      sections={sections}
      title="Privacy Policy"
    />
  );
}
