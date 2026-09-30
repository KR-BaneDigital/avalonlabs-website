import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SOCIAL_IMAGE_ALT } from "@/lib/site-metadata";

export const alt = SOCIAL_IMAGE_ALT;
export const size = { height: 630, width: 1200 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const mark = await readFile(
    join(process.cwd(), "public/brand/avalon-labs-mark.png")
  );
  return new ImageResponse(
    <div
      style={{
        background: "#f2f3ef",
        borderTop: "12px solid #12474b",
        color: "#0d1b24",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "64px 76px",
        width: "100%",
      }}
    >
      <div
        style={{ alignItems: "center", display: "flex", fontSize: 30, gap: 18 }}
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
            letterSpacing: -3,
            lineHeight: 1.08,
            maxWidth: 950,
          }}
        >
          Built for people who work with financial data.
        </div>
        <div style={{ color: "#5c676c", fontSize: 28 }}>
          Avalon Labs LLC · Research, data & trading
        </div>
        <div style={{ color: "#12474b", fontSize: 23 }}>
          Olympus Atlas · Blackfin Compass (in development)
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid #cfd3d0",
          color: "#12474b",
          display: "flex",
          fontSize: 22,
          justifyContent: "space-between",
          paddingTop: 24,
        }}
      >
        <span>Research · Financial data · Trading · Crypto intelligence</span>
        <span>avalonlabs.ai</span>
      </div>
    </div>,
    size
  );
}
