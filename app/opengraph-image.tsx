import { ImageResponse } from "next/og";

export const alt = "Avalon Labs — research, data, and trading";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
        <div
          style={{
            display: "flex",
            width: 22,
            height: 22,
            border: "3px solid #a88b4a",
            borderRadius: "50%",
          }}
        />
        Avalon Labs
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            fontSize: 72,
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
