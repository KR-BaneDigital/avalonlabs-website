import { ArrowUpRight } from "lucide-react";

export function Portfolio() {
  return (
    <section
      aria-labelledby="portfolio-title"
      className="border-t"
      id="portfolio"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:py-28">
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="font-mono text-muted-foreground text-xs uppercase tracking-widest">
            Our product
          </p>
          <h2
            className="text-balance font-medium text-3xl tracking-tight md:text-4xl"
            id="portfolio-title"
          >
            A clearer view of the official record.
          </h2>
        </div>
        <article className="grid gap-8 border-foreground border-t py-8 md:grid-cols-12">
          <div className="flex flex-col gap-4 md:col-span-4">
            <h3 className="font-medium text-3xl tracking-tight">
              Olympus Atlas
            </h3>
            <p className="text-muted-foreground text-sm">
              Operated by Avalon Labs LLC
            </p>
            <a
              className="inline-flex w-fit items-center gap-1 font-mono text-primary text-sm underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
              href="https://www.olympusatlas.com"
            >
              Visit Olympus Atlas
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
          <div className="flex flex-col gap-6 md:col-span-8">
            <p className="inline-flex items-center gap-2 font-mono text-primary text-xs uppercase tracking-wider">
              <span
                aria-hidden="true"
                className="size-1.5 shrink-0 rounded-full bg-accent"
              />
              Status: Free terminal available
            </p>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed">
              A free research terminal for exploring official economic releases,
              reported figures, source evidence, and available revision history.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Visit Olympus Atlas for current coverage and access options.
              Coverage and available evidence vary by release.
            </p>
            <p className="border-t pt-6 text-muted-foreground text-sm leading-relaxed">
              Olympus Atlas provides informational research tools. It does not
              execute trades for users, provide personalized investment advice,
              or guarantee investment outcomes.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
