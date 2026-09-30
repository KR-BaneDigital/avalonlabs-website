"use client";

import { Menu, X } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { LogoLockup } from "./logo";

const NAV = [
  { href: "/#portfolio", label: "Our portfolio" },
  { href: "/#model", label: "How we operate" },
  { href: "/#data", label: "Privacy & information" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);
  const closeOnEscape = useCallback((event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
      menuButton.current?.focus();
    }
  }, []);

  return (
    <header className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur">
      <a
        className="sr-only z-30 rounded-sm bg-primary p-3 text-primary-foreground focus:not-sr-only focus:absolute focus:top-2 focus:left-4"
        href="#main-content"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <a aria-label="Avalon Labs home" href="/" onClick={closeMenu}>
          <LogoLockup className="max-sm:h-7" />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          <ul className="flex items-center gap-7">
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
            href="/#contact"
          >
            Contact
          </a>
        </nav>
        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className="inline-flex min-h-11 items-center gap-2 rounded-sm border px-3 text-sm lg:hidden"
          onClick={toggleMenu}
          onKeyDown={closeOnEscape}
          ref={menuButton}
          type="button"
        >
          Menu
          {menuOpen ? (
            <X aria-hidden="true" className="size-4" />
          ) : (
            <Menu aria-hidden="true" className="size-4" />
          )}
        </button>
      </div>
      <nav
        aria-label="Mobile"
        className={`${menuOpen ? "block" : "hidden"} border-t px-6 py-4 lg:hidden`}
        id="mobile-navigation"
      >
        <ul className="flex flex-col">
          {[...NAV, { href: "/#contact", label: "Contact" }].map((item) => (
            <li key={item.href}>
              <a
                className="block py-3 text-sm"
                href={item.href}
                onClick={closeMenu}
                onKeyDown={closeOnEscape}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
