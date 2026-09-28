import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site-metadata";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Avalon Labs | Research, Data & Trading",
  description:
    "Avalon Labs LLC operates Olympus Atlas and works across financial data, proprietary trading, and crypto whale watching. Explore the portfolio and product availability.",
};

export const viewport: Viewport = {
  themeColor: "#f2f3ef",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      className={`${plexSans.variable} ${plexMono.variable} bg-background`}
      lang="en"
    >
      <body className="bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
