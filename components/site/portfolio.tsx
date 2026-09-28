import { ArrowUpRight } from "lucide-react";

type Brand = {
  name: string | null;
  sector: string;
  audience: string;
  status: "Free terminal available" | "In development" | "Private";
  description: string;
  detail?: string;
  disclaimer?: string;
  href?: string;
};

const BRANDS: Brand[] = [
  {
    name: "Olympus Atlas",
    sector: "Market intelligence",
    audience: "Researchers, analysts, and investment committees",
    status: "Free terminal available",
    description:
      "A free research terminal for exploring official economic releases, reported figures, source evidence, and available revision history.",
    detail:
      "Operated by Avalon Labs LLC. Visit Olympus Atlas for current coverage and access options. Coverage and available evidence vary by release.",
    disclaimer:
      "Olympus Atlas provides informational research tools. It does not execute trades for users, provide personalized investment advice, or guarantee investment outcomes.",
    href: "https://www.olympusatlas.com",
  },
  {
    name: null,
    sector: "Financial data",
    audience: "Institutions and developers",
    status: "In development",
    description:
      "A financial data product in development for institutions and developers. Further product details will be shared when publicly announced.",
  },
  {
    name: null,
    sector: "Proprietary trading",
    audience: "Company capital",
    status: "Private",
    description:
      "An in-house desk that develops and runs proprietary trading algorithms. Systematic strategies are researched, back-tested, and deployed using company capital. Strategy details, markets, and performance are not publicly disclosed.",
  },
  {
    name: null,
    sector: "Crypto whale watching",
    audience: "Crypto researchers and analysts",
    status: "In development",
    description:
      "A system in development for monitoring large cryptocurrency wallet movements and researching on-chain activity. Further product details will be shared when publicly announced.",
  },
];

function StatusMark({ status }: { status: Brand["status"] }) {
  return (
    <span className="inline-flex items-baseline gap-2 font-mono text-xs uppercase tracking-wider">
      <span
        aria-hidden="true"
        className={
          status === "Free terminal available"
            ? "size-1.5 shrink-0 rounded-full bg-accent"
            : "size-1.5 shrink-0 rounded-full border border-muted-foreground"
        }
      />
      {status}
    </span>
  );
}

export function Portfolio() {
  return (
    <section
      aria-labelledby="portfolio-title"
      className="border-t"
      id="portfolio"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="flex max-w-2xl flex-col gap-4">
            <p className="font-mono text-muted-foreground text-xs uppercase tracking-widest">
              The portfolio
            </p>
            <h2
              className="text-balance font-medium text-3xl tracking-tight md:text-4xl"
              id="portfolio-title"
            >
              Distinct brands. Different areas of focus.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground text-sm leading-relaxed">
            Market intelligence, financial data, proprietary trading, and crypto
            whale watching. Each entry shows its audience and current
            availability.
          </p>
        </div>
        <div className="border-foreground border-t">
          <div
            aria-hidden="true"
            className="hidden grid-cols-12 gap-6 border-b py-3 font-mono text-muted-foreground text-xs uppercase tracking-wider md:grid"
          >
            <span className="col-span-4">Brand</span>
            <span className="col-span-3">Sector</span>
            <span className="col-span-3">Audience</span>
            <span className="col-span-2 text-right">Status</span>
          </div>
          <ul>
            {BRANDS.map((brand) => (
              <li
                className="grid grid-cols-1 gap-4 border-b py-8 md:grid-cols-12 md:gap-6"
                key={brand.sector}
              >
                <div className="flex min-w-0 flex-col gap-4 md:col-span-4">
                  {brand.name ? (
                    <h3 className="font-medium text-2xl tracking-tight">
                      {brand.name}
                    </h3>
                  ) : (
                    <h3 className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="h-6 w-40 rounded-sm bg-foreground/85"
                      />
                      <span className="sr-only">
                        {brand.sector} brand — name not publicly announced
                      </span>
                    </h3>
                  )}
                  {brand.href ? (
                    <a
                      className="inline-flex w-fit items-center gap-1 font-mono text-primary text-sm underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
                      href={brand.href}
                    >
                      Visit Olympus Atlas
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </a>
                  ) : (
                    <p className="font-mono text-muted-foreground text-sm">
                      Not publicly announced
                    </p>
                  )}
                </div>
                <p className="text-sm md:col-span-3">
                  <span className="font-mono text-muted-foreground text-xs uppercase tracking-wider md:hidden">
                    Sector ·{" "}
                  </span>
                  {brand.sector}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed md:col-span-3">
                  {brand.audience}
                </p>
                <div className="md:col-span-2 md:text-right">
                  <StatusMark status={brand.status} />
                </div>
                <div className="flex max-w-2xl flex-col gap-4 md:col-span-8 md:col-start-5">
                  <p className="text-pretty text-muted-foreground leading-relaxed">
                    {brand.description}
                  </p>
                  {brand.detail && (
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {brand.detail}
                    </p>
                  )}
                  {brand.disclaimer && (
                    <p className="border-t pt-4 text-muted-foreground text-sm leading-relaxed">
                      {brand.disclaimer}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
