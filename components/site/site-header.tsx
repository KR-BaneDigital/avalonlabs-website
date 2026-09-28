import { LogoLockup } from "./logo";

const NAV = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#model", label: "How we operate" },
  { href: "#data", label: "Data standard" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a aria-label="Avalon Labs home" href="#top">
          <LogoLockup />
        </a>
        <nav aria-label="Primary" className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="rounded-sm border border-foreground px-4 py-2 font-medium text-sm transition-colors hover:bg-foreground hover:text-background"
            href="#contact"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
