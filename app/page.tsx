import { Contact } from "@/components/site/contact";
import { DataStandard } from "@/components/site/data-standard";
import { Hero } from "@/components/site/hero";
import { OperatingModel } from "@/components/site/operating-model";
import { Portfolio } from "@/components/site/portfolio";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
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
