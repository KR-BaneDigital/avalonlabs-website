import { LegalPage, type LegalSection } from "@/components/site/legal-page";
import { CONTACT_EMAIL } from "@/lib/contact";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata = pageMetadata(
  "Website Terms | Avalon Labs",
  "Terms for using the Avalon Labs LLC corporate website, its information, materials, and links to Olympus Atlas.",
  "/terms"
);

const sections: LegalSection[] = [
  {
    id: "operator",
    title: "This website and its operator",
    content: (
      <>
        <p>
          Avalon Labs LLC is a Delaware limited liability company and the
          operator of Olympus Atlas. These Website Terms concern the corporate
          website at avalonlabs.ai and www.avalonlabs.ai.
        </p>
        <p>
          Browsing this website does not create an Olympus Atlas account or
          purchase a service. Olympus Atlas has its own{" "}
          <a href="https://www.olympusatlas.com/terms">product terms</a> and{" "}
          <a href="https://www.olympusatlas.com/privacy">privacy notice</a>.
          Those product arrangements are separate from ordinary use of this
          corporate website.
        </p>
      </>
    ),
  },
  {
    id: "use",
    title: "Using the website",
    content: (
      <p>
        You may browse and link to this website for lawful purposes. Do not
        attempt unauthorized access, introduce malicious code, disrupt its
        operation, or use company branding to imply an affiliation or
        endorsement that has not been granted.
      </p>
    ),
  },
  {
    id: "information",
    title: "General information",
    content: (
      <>
        <p>
          The information on this website is for general informational purposes.
          It does not constitute personalized investment advice or an offer to
          buy or sell securities.
        </p>
        <p>
          Portfolio descriptions are summaries, with availability shown for each
          entry. Visit Olympus Atlas for that product&apos;s current coverage
          and access options. A private or in-development listing is not an
          invitation to open an account or purchase a service. Information and
          availability can change; contact us if a detail is important to a
          decision or appears inaccurate.
        </p>
      </>
    ),
  },
  {
    id: "materials",
    title: "Website materials",
    content: (
      <>
        <p>
          Website text, designs, logos, and other materials may be protected by
          copyright, trademark, or other rights. Third-party names and materials
          remain subject to their respective owners&apos; rights and any
          applicable licenses.
        </p>
        <p>
          Except where permitted by law or an applicable license, seek
          permission before reproducing materials beyond ordinary website
          viewing or linking. Mention of a third party does not imply its
          endorsement of Avalon Labs or Olympus Atlas.
        </p>
      </>
    ),
  },
  {
    id: "links",
    title: "Product and external links",
    content: (
      <p>
        Links may take you to Olympus Atlas or to third-party websites. Review
        the terms and privacy information relevant to the destination. This
        website&apos;s corporate information does not expand product access
        rights, source-data licenses, or third-party permissions.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Updates and contact",
    content: (
      <>
        <p>
          We may update this website and these Website Terms. Updates will be
          published here with a new effective date. Nothing here limits rights
          that cannot be limited under applicable law.
        </p>
        <p>
          For company questions, corrections, or requests to use materials,
          email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. See our{" "}
          <a href="/privacy">Privacy Policy</a> for how company inquiries are
          handled.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      introduction="Terms for this corporate website and its information. Olympus Atlas product access is covered separately."
      sections={sections}
      title="Website Terms"
    />
  );
}
