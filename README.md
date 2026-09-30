# Avalon Labs website

Corporate website for Avalon Labs LLC at https://www.avalonlabs.ai, deployed automatically from this repository's `main` branch to Vercel.

## Stack and scope

- Next.js App Router, React, TypeScript, and Tailwind CSS.
- Public homepage, Privacy Policy, and Website Terms.
- Four portfolio entries: Olympus Atlas, a financial data product, a private proprietary trading desk, and Blackfin Compass. Blackfin Compass remains in development.
- Resend receives company inquiries and forwards them to Kyle's mailbox.
- No website accounts, database, payments, chatbot, advertising pixels, or visitor analytics.

## Local development

Use Node.js 24 and pnpm 9.12.3, as declared in `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

The public pages work without secrets. To exercise the real inbound-email integration, copy `.env.example` to `.env.local` and configure the two server-only Resend values. Never commit credentials or use production credentials in fixtures.

## Validation

```sh
pnpm lint
pnpm test
pnpm build
pnpm audit
```

`pnpm test` runs email-forwarding regression tests with mocked network requests; it sends no real messages. The production build includes TypeScript validation. Use `pnpm typecheck` for a separate type check, and `pnpm format` to apply formatting.

## Website content and metadata

- `components/site/portfolio.tsx`: brands, availability, audiences, and product links.
- `components/site/hero.tsx`: homepage introduction.
- `lib/contact.ts`: public inquiry address.
- `lib/site-metadata.ts`: titles, descriptions, canonical origin, and sharing-image metadata.
- `components/site/structured-data.tsx`: company and website JSON-LD.
- `app/opengraph-image.tsx`: social sharing image.
- `app/favicon.ico`, `app/icon.png`, `app/apple-icon.png`, and `public/brand/`: Avalon branding.
- `app/manifest.ts`, `app/robots.ts`, and `app/sitemap.ts`: browser and crawler information.
- `app/privacy/page.tsx` and `app/terms/page.tsx`: corporate website policies.

Keep product availability consistent between visible copy, metadata, structured data, and sharing images. Preserve all four portfolio entries. Corporate inquiries are used for replies and follow-up only. Planned Atlas marketing must be reflected in Atlas's own notices and controls before activation.

## Email and deployment

The webhook is `POST /api/webhooks/resend`. Production requires `RESEND_API_KEY` and `RESEND_WEBHOOK_SECRET` in Vercel; incoming events must have a valid Resend signature. See [inquiry-email.md](docs/inquiry-email.md) for routing, setup, and testing details.

Push verified changes to `main` to trigger Vercel. Confirm the production build and live pages after deployment. Any email-routing change also requires the forwarding tests and an end-to-end mailbox check.

## Maintenance

Use the committed lockfile for reproducible installs. Before publishing dependency updates, run the validation commands, inspect desktop and mobile layouts, and confirm the email integration. Review audit findings against the actual application; installed packages alone do not establish exploitability.
