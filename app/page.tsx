import { Contact } from "@/components/site/contact";
import { DataStandard } from "@/components/site/data-standard";
import { Hero } from "@/components/site/hero";
import { OperatingModel } from "@/components/site/operating-model";
import { Portfolio } from "@/components/site/portfolio";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { StructuredData } from "@/components/site/structured-data";
import {
  pageMetadata,
  SITE_DESCRIPTION,
  SITE_TITLE,
} from "@/lib/site-metadata";

export const metadata = pageMetadata(SITE_TITLE, SITE_DESCRIPTION, "/");

export default function Home() {
  return (
    <>
      <StructuredData />
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
