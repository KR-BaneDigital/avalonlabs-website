export function DataStandard() {
  return (
    <section
      aria-labelledby="data-title"
      className="border-t bg-foreground text-background"
      id="data"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:py-28">
        <div className="flex max-w-3xl flex-col gap-5">
          <p className="font-mono text-background/60 text-xs uppercase tracking-widest">
            Privacy & information
          </p>
          <h2
            className="text-balance font-medium text-3xl tracking-tight md:text-5xl"
            id="data-title"
          >
            Clear about the company. Specific about the product.
          </h2>
          <p className="max-w-2xl text-background/75 leading-relaxed">
            Our Privacy Policy explains how Avalon Labs LLC handles information
            from this website and company inquiries. Each product&apos;s privacy
            notice explains its own information practices.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-4 border-background/20 border-t pt-6">
            <h3 className="font-medium text-xl">This company website</h3>
            <p className="max-w-md text-background/75 leading-relaxed">
              Company inquiries are used to respond and follow up. Read about
              website hosting, email handling, and privacy requests.
            </p>
            <a
              className="w-fit text-sm underline underline-offset-4"
              href="/privacy"
            >
              Avalon Labs Privacy Policy
            </a>
          </div>
          <div className="flex flex-col gap-4 border-background/20 border-t pt-6">
            <h3 className="font-medium text-xl">Olympus Atlas</h3>
            <p className="max-w-md text-background/75 leading-relaxed">
              Avalon Labs LLC also operates Olympus Atlas. Its customer data
              practices and privacy choices are described in the product&apos;s
              own notice, separately from company inquiries made here.
            </p>
            <a
              className="w-fit text-sm underline underline-offset-4"
              href="https://www.olympusatlas.com/privacy"
            >
              Olympus Atlas privacy information
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
