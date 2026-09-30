import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { path: "/", lastModified: "2026-09-30" },
    { path: "/privacy", lastModified: "2026-09-28" },
    { path: "/terms", lastModified: "2026-09-30" },
  ].map(({ path, lastModified }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
  }));
}
