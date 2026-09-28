import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacy", "/terms"].map((path) => ({
    url: `${SITE_URL}${path}`,
  }));
}
