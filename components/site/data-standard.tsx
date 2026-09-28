const PRINCIPLES = [
  {
    title: "Collected for a reason",
    body: "Each brand asks only for the information its product needs to work, and explains why it needs it.",
  },
  {
    title: "Kept within the brand",
    body: "Customer data belongs to the relationship it was given in. We do not pool it across brands or sell it to third parties.",
  },
  {
    title: "Sources stay attached",
    body: "Where our products present financial information, it stays linked to the original publisher so it can be checked before it is used.",
  },
  {
    title: "Information, not advice",
    body: "Our brands provide research inputs and tools. They do not execute trades, give personalised investment advice or promise outcomes.",
  },
];

export function DataStandard() {
  return (
    <section
      aria-labelledby="data-title"
      className="border-t bg-foreground text-background"
      id="data"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 py-20 md:py-28">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="font-mono text-background/60 text-xs uppercase tracking-widest">
            Data standard
          </p>
          <h2
            className="text-balance font-medium text-3xl tracking-tight md:text-5xl"
            id="data-title"
          >
            One standard for customer data, whichever brand holds it.
          </h2>
        </div>
        <dl className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {PRINCIPLES.map((principle) => (
            <div
              className="flex flex-col gap-3 border-background/20 border-t pt-6"
              key={principle.title}
            >
              <dt className="font-medium text-xl">{principle.title}</dt>
              <dd className="max-w-md text-background/70 leading-relaxed">
                {principle.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
