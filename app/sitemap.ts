import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { lastModified: "2026-09-30", path: "/" },
    { lastModified: "2026-09-28", path: "/privacy" },
    { lastModified: "2026-09-30", path: "/terms" },
  ].map(({ path, lastModified }) => ({
    lastModified,
    url: `${SITE_URL}${path}`,
  }));
}
