export const CONTACT_EMAIL = "hello@avalonlabs.com";

const REASONS = ["Partnerships", "Press", "Questions about a brand"];

export function Contact() {
  return (
    <section aria-labelledby="contact-title" className="border-t" id="contact">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:py-28 lg:grid-cols-12">
        <div className="flex flex-col gap-4 lg:col-span-7">
          <p className="font-mono text-muted-foreground text-xs uppercase tracking-widest">
            Contact
          </p>
          <h2
            className="text-balance font-medium text-3xl tracking-tight md:text-5xl"
            id="contact-title"
          >
            Talk to the group.
          </h2>
          <p className="max-w-md text-pretty text-muted-foreground leading-relaxed">
            For product support, please contact the brand directly. For
            anything that concerns the group, write to us.
          </p>
        </div>
        <div className="flex flex-col justify-end gap-6 lg:col-span-5">
          <ul className="flex flex-wrap gap-2">
            {REASONS.map((reason) => (
              <li
                className="rounded-sm border px-3 py-1 font-mono text-muted-foreground text-xs"
                key={reason}
              >
                {reason}
              </li>
            ))}
          </ul>
          <a
            className="w-fit border-primary border-b-2 pb-1 font-medium text-2xl text-primary transition-opacity hover:opacity-80 md:text-3xl"
            href={`mailto:${CONTACT_EMAIL}`}
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
