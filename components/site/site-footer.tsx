export function SiteFooter() {
  return (
    <footer className="border-foreground border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-start md:justify-between">
        <p className="font-medium">Avalon Labs</p>
        <p className="max-w-xl text-muted-foreground text-sm leading-relaxed">
          Avalon Labs and its brands provide information and research tools
          only. Nothing on this site or within our products is investment
          advice or an offer to buy or sell any security.
        </p>
        <p className="font-mono text-muted-foreground text-xs">
          {"© 2026 Avalon Labs"}
        </p>
      </div>
    </footer>
  );
}
