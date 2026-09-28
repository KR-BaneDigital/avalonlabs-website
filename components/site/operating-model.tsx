const BRAND_OWNS = [
  "Product, roadmap and pricing",
  "Its audience and how it speaks to them",
  "Its own customer relationships and accounts",
];

const GROUP_PROVIDES = [
  "Engineering and infrastructure",
  "Security, privacy and data governance",
  "Legal, compliance and financial review",
];

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-6 border-t border-foreground pt-6">
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
            Independent at the front. Shared underneath.
          </h2>
          <p className="max-w-md text-pretty text-muted-foreground leading-relaxed">
            Each brand is run as its own business with a clear purpose. The
            group carries the work that should never be done twice — or done
            differently from one brand to the next.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:col-span-7">
          <Column items={BRAND_OWNS} title="Each brand owns" />
          <Column items={GROUP_PROVIDES} title="The group provides" />
        </div>
      </div>
    </section>
  );
}
