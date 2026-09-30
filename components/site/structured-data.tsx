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
      "@id": `${SITE_URL}/#organization`,
      "@type": "Organization",
      brand: [
        {
          "@type": "Brand",
          name: "Olympus Atlas",
          url: "https://www.olympusatlas.com",
        },
        {
          "@type": "Brand",
          description: "A crypto whale-watching system in development.",
          name: "Blackfin Compass",
          url: "https://blackfincompass.com",
        },
      ],
      description: SITE_DESCRIPTION,
      email: CONTACT_EMAIL,
      legalName: "Avalon Labs LLC",
      logo: {
        "@type": "ImageObject",
        height: 512,
        url: `${SITE_URL}/brand/icon-512.png`,
        width: 512,
      },
      name: SITE_NAME,
      url: `${SITE_URL}/`,
    },
    {
      "@id": `${SITE_URL}/#website`,
      "@type": "WebSite",
      alternateName: "Avalon Labs LLC",
      description: SITE_DESCRIPTION,
      inLanguage: "en-US",
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
      url: `${SITE_URL}/`,
    },
    {
      "@id": `${SITE_URL}/#webpage`,
      "@type": "WebPage",
      about: { "@id": `${SITE_URL}/#organization` },
      description: SITE_DESCRIPTION,
      inLanguage: "en-US",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      name: SITE_TITLE,
      url: `${SITE_URL}/`,
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
