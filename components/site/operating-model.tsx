const PRODUCT_RESPONSIBILITIES = [
  "Purpose, audience, and development roadmap",
  "Features, documentation, and support for public products",
  "Terms and privacy information for each public service",
];

const COMPANY_FUNCTIONS = [
  "Portfolio direction and development",
  "Corporate website and hosting",
  "Company inquiries and follow-up",
];

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-6 border-foreground border-t pt-6">
      <h3 className="font-mono text-xs uppercase tracking-widest">{title}</h3>
      <ul className="flex flex-col">
        {items.map((item) => (
          <li className="border-b py-4 text-lg" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function OperatingModel() {
  return (
    <section aria-labelledby="model-title" className="border-t" id="model">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-12">
        <div className="flex flex-col gap-4 lg:col-span-5">
          <p className="font-mono text-muted-foreground text-xs uppercase tracking-widest">
            How we operate
          </p>
          <h2
            className="text-balance font-medium text-3xl tracking-tight md:text-4xl"
            id="model-title"
          >
            Different work. Shared company foundations.
          </h2>
          <p className="max-w-md text-pretty text-muted-foreground leading-relaxed">
            Avalon Labs LLC is a Delaware limited liability company and the
            operator of Olympus Atlas. Our portfolio brings together a public
            research terminal, a financial data product in development, and
            private proprietary trading. Each has a distinct purpose and
            audience; its status is shown above.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:col-span-7">
          <Column
            items={PRODUCT_RESPONSIBILITIES}
            title="Product responsibilities"
          />
          <Column items={COMPANY_FUNCTIONS} title="Shared company functions" />
        </div>
      </div>
    </section>
  );
}
