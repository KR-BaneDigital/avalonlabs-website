import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

export function LegalPage({
  title,
  introduction,
  sections,
}: {
  title: string;
  introduction: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <SiteHeader />
      <main
        className="mx-auto max-w-6xl px-6 py-14 md:py-20"
        id="main-content"
        tabIndex={-1}
      >
        <div className="mb-12 flex max-w-3xl flex-col gap-5">
          <p className="font-mono text-muted-foreground text-xs uppercase tracking-widest">
            Avalon Labs LLC · Corporate website
          </p>
          <h1 className="font-medium text-4xl tracking-tight md:text-6xl">
            {title}
          </h1>
          <p className="text-muted-foreground text-sm">
            Effective September 28, 2026
          </p>
          <p className="text-lg leading-relaxed">{introduction}</p>
        </div>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <nav aria-label="On this page" className="lg:col-span-3">
            <div className="border-t pt-5 lg:sticky lg:top-24">
              <p className="mb-4 font-mono text-muted-foreground text-xs uppercase tracking-widest">
                On this page
              </p>
              <ul className="flex flex-col gap-3 text-sm">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      className="underline decoration-border underline-offset-4 hover:decoration-foreground"
                      href={`#${section.id}`}
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="flex min-w-0 flex-col gap-10 lg:col-span-8">
            {sections.map((section) => (
              <section
                aria-labelledby={section.id}
                className="border-t pt-6"
                key={section.id}
              >
                <h2
                  className="mb-4 font-medium text-2xl tracking-tight"
                  id={section.id}
                >
                  {section.title}
                </h2>
                <div className="flex flex-col gap-4 break-words text-muted-foreground leading-7 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
