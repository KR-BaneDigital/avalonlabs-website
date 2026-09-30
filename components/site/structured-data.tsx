import { CONTACT_EMAIL } from "@/lib/contact";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site-metadata";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: "Avalon Labs LLC",
      url: `${SITE_URL}/`,
      description: SITE_DESCRIPTION,
      email: CONTACT_EMAIL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/brand/icon-512.png`,
        width: 512,
        height: 512,
      },
      brand: [
        {
          "@type": "Brand",
          name: "Olympus Atlas",
          url: "https://www.olympusatlas.com",
        },
        {
          "@type": "Brand",
          name: "Blackfin Compass",
          url: "https://blackfincompass.com",
          description: "A crypto whale-watching system in development.",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      alternateName: "Avalon Labs LLC",
      url: `${SITE_URL}/`,
      description: SITE_DESCRIPTION,
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      name: SITE_TITLE,
      url: `${SITE_URL}/`,
      description: SITE_DESCRIPTION,
      inLanguage: "en-US",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export function StructuredData() {
  return (
    <script
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Fixed site data is serialized with HTML-sensitive characters escaped.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
      type="application/ld+json"
    />
  );
}
