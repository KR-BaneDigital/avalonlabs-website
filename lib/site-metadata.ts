import type { Metadata } from "next";

export const SITE_URL = "https://www.avalonlabs.ai";
export const SITE_NAME = "Avalon Labs";
export const SITE_TITLE = "Avalon Labs | Financial Research, Data & Trading";
export const SITE_DESCRIPTION =
  "Avalon Labs: Olympus Atlas market research, financial data, proprietary trading, and Blackfin Compass, a crypto whale-watching system in development.";
export const SOCIAL_IMAGE_PATH = "/opengraph-image?v=20260930";
export const SOCIAL_IMAGE_ALT =
  "Avalon Labs — financial research, data and trading. Olympus Atlas and Blackfin Compass (in development).";

export function pageMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const image = {
    alt: SOCIAL_IMAGE_ALT,
    height: 630,
    url: new URL(SOCIAL_IMAGE_PATH, SITE_URL).toString(),
    width: 1200,
  };

  return {
    alternates: { canonical: url },
    description,
    openGraph: {
      description,
      images: [image],
      locale: "en_US",
      siteName: SITE_NAME,
      title,
      type: "website",
      url,
    },
    title,
    twitter: {
      card: "summary_large_image",
      description,
      images: [image],
      title,
    },
  };
}
