import { ArrowUpRight } from "lucide-react";

type Brand = {
  name: string | null;
  sector: string;
  audience: string;
  status: "Live" | "In development" | "Private";
  description?: string;
  href?: string;
  domain?: string;
};

const BRANDS: Brand[] = [
  {
    name: "Olympus Atlas",
    sector: "Market intelligence",
    audience: "Researchers, analysts and investment committees",
    status: "Live",
    description:
      "A free research terminal for official economic releases. Follow CPI, NFP and FOMC publications, inspect reported figures and trace what changed — with every record linked back to its original publisher.",
    href: "https://olympusatlas.com",
    domain: "olympusatlas.com",
  },
  {
    name: null,
    sector: "Financial data",
    audience: "Institutions and developers",
    status: "In development",
  },
  {
    name: null,
    sector: "Investor tooling",
    audience: "Individual investors",
    status: "Private",
  },
];

function StatusMark({ status }: { status: Brand["status"] }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider">
      <span
        aria-hidden="true"
        className={
          status === "Live"
            ? "size-1.5 rounded-full bg-accent"
            : "size-1.5 rounded-full border border-muted-foreground"
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
              Separate brands, each built for a specific job.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground text-sm leading-relaxed">
            Some of our brands operate publicly. Others are in development or
            serve clients privately and are not listed here.
          </p>
        </div>

        <div className="border-foreground border-t">
          <div
            aria-hidden="true"
            className="hidden grid-cols-12 gap-6 border-b py-3 font-mono text-muted-foreground text-xs uppercase tracking-wider md:grid"
          >
            <span className="col-span-4">Brand</span>
            <span className="col-span-3">Sector</span>
            <span className="col-span-3">Serves</span>
            <span className="col-span-2 text-right">Status</span>
          </div>

          <ul>
            {BRANDS.map((brand) => (
              <li
                className="grid grid-cols-1 gap-4 border-b py-8 md:grid-cols-12 md:gap-6"
                key={`${brand.name ?? "undisclosed"}-${brand.sector}`}
              >
                <div className="flex flex-col gap-4 md:col-span-4">
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
                      <span className="sr-only">Undisclosed brand</span>
                    </h3>
                  )}
                  {brand.href && brand.domain ? (
                    <a
                      className="inline-flex w-fit items-center gap-1 font-mono text-primary text-sm underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
                      href={brand.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {brand.domain}
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                      <span className="sr-only">(opens in a new tab)</span>
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
                {brand.description ? (
                  <p className="max-w-2xl text-pretty text-muted-foreground leading-relaxed md:col-span-8 md:col-start-5">
                    {brand.description}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
