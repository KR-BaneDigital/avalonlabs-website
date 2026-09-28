import type { Metadata } from "next";

export const SITE_URL = "https://www.avalonlabs.ai";

export function pageMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Avalon Labs",
      title,
      description,
      url: path,
      locale: "en_US",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Avalon Labs — operator of Olympus Atlas",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
