import { Contact } from "@/components/site/contact";
import { DataStandard } from "@/components/site/data-standard";
import { Hero } from "@/components/site/hero";
import { OperatingModel } from "@/components/site/operating-model";
import { Portfolio } from "@/components/site/portfolio";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata = pageMetadata(
  "Avalon Labs | Research, Data & Trading",
  "Avalon Labs LLC works across market intelligence, financial data, and proprietary trading, including Olympus Atlas, a product in development, and a private trading desk.",
  "/"
);

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Portfolio />
        <OperatingModel />
        <DataStandard />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
