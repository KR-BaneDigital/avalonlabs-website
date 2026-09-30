import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site-metadata";

const plexSans = IBM_Plex_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-plex-sans",
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  applicationName: SITE_NAME,
  authors: [{ name: "Avalon Labs LLC", url: SITE_URL }],
  category: "technology",
  creator: "Avalon Labs LLC",
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  publisher: "Avalon Labs LLC",
  robots: {
    follow: true,
    googleBot: { follow: true, index: true, "max-image-preview": "large" },
    index: true,
  },
  title: SITE_TITLE,
  verification: {
    google: "0o8wGDqh013iFNlOCJ0SOiLDczE7KeZI6TykBNEb_uA",
  },
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
