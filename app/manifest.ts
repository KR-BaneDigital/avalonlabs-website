import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site-metadata";

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: "#f2f3ef",
    description: SITE_DESCRIPTION,
    display: "browser",
    icons: [
      { sizes: "192x192", src: "/brand/icon-192.png", type: "image/png" },
      { sizes: "512x512", src: "/brand/icon-512.png", type: "image/png" },
    ],
    id: "/",
    lang: "en-US",
    name: SITE_NAME,
    scope: "/",
    short_name: SITE_NAME,
    start_url: "/",
    theme_color: "#f2f3ef",
  };
}
