import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SOCIAL_IMAGE_ALT } from "@/lib/site-metadata";

export const alt = SOCIAL_IMAGE_ALT;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const mark = await readFile(
    join(process.cwd(), "public/brand/avalon-labs-mark.png")
  );
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f2f3ef",
        color: "#0d1b24",
        padding: "64px 76px",
        borderTop: "12px solid #12474b",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 30 }}
      >
        {/* ImageResponse embeds the original brand asset without a browser image loader. */}
        {/* biome-ignore lint/performance/noImgElement: next/image is not supported by ImageResponse. */}
        <img
          alt=""
          height={44}
          src={`data:image/png;base64,${mark.toString("base64")}`}
          width={48}
        />
        Avalon Labs
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            fontSize: 68,
            lineHeight: 1.08,
            maxWidth: 950,
            letterSpacing: -3,
          }}
        >
          Built for people who work with financial data.
        </div>
        <div style={{ fontSize: 28, color: "#5c676c" }}>
          Avalon Labs LLC · Research, data & trading
        </div>
        <div style={{ fontSize: 23, color: "#12474b" }}>
          Olympus Atlas · Blackfin Compass (in development)
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: 24,
          borderTop: "1px solid #cfd3d0",
          fontSize: 22,
          color: "#12474b",
        }}
      >
        <span>Research · Financial data · Trading · Crypto intelligence</span>
        <span>avalonlabs.ai</span>
      </div>
    </div>,
    size
  );
}
