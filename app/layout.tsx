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
  title: "Avalon Labs | Operator of Olympus Atlas",
  description:
    "Avalon Labs LLC develops and operates Olympus Atlas, a research platform for official economic releases.",
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
