import { Guilloche } from "./guilloche";
import { LogoFull } from "./logo";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-12"
      id="top"
    >
      <div className="rise flex flex-col gap-8 lg:col-span-7">
        <p className="font-mono text-muted-foreground text-xs uppercase tracking-widest">
          Research, data & trading
        </p>
        <h1
          className="text-balance font-medium text-4xl leading-tight tracking-tight md:text-6xl"
          id="hero-title"
        >
          We build and operate brands for people who work with financial data.
        </h1>
        <p className="max-w-xl text-pretty text-lg text-muted-foreground leading-relaxed">
          Avalon Labs LLC works across market intelligence, financial data, and
          proprietary trading. Our portfolio includes Olympus Atlas, a financial
          data product in development, and a private trading desk.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            className="rounded-sm bg-primary px-5 py-3 font-medium text-primary-foreground text-sm transition-opacity hover:opacity-90"
            href="#portfolio"
          >
            View the portfolio
          </a>
          <a
            className="px-1 py-3 font-medium text-sm underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            href="#contact"
          >
            Contact Avalon Labs
          </a>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
        <Guilloche className="h-auto w-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex aspect-square w-1/3 items-center justify-center rounded-full bg-background shadow-sm">
            <LogoFull className="h-auto w-3/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
