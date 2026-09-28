export function SiteFooter() {
  return (
    <footer className="border-foreground border-t">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-12">
        <div className="flex flex-col gap-3 md:col-span-5">
          <p className="font-medium">Avalon Labs LLC</p>
          <p className="max-w-md text-muted-foreground text-sm leading-relaxed">
            Avalon Labs LLC is a Delaware limited liability company and the
            operator of Olympus Atlas.
          </p>
          <p className="font-mono text-muted-foreground text-xs">
            © 2026 Avalon Labs LLC
          </p>
        </div>
        <div className="flex flex-col gap-6 md:col-span-6 md:col-start-7">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <li>
                <a className="underline underline-offset-4" href="/privacy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="/terms">
                  Website Terms
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="/#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <p className="text-muted-foreground text-sm leading-relaxed">
            The information on this website is for general informational
            purposes. It does not constitute personalized investment advice or
            an offer to buy or sell securities.
          </p>
        </div>
      </div>
    </footer>
  );
}
