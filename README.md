# Stellar Blade Hub

A fan-made guide site for **Stellar Blade**, the action RPG by Shift Up and Sony Interactive Entertainment.

Built with Next.js 14 + Tailwind CSS + MDX. Exports a fully static `dist/` folder ready for Vercel, Cloudflare Pages, or any static host.

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env.local` and set your real URLs/analytics IDs:

```bash
cp .env.example .env.local
```

3. Build the static site:

```bash
npm run build
```

The static site will be exported to `dist/`.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What to Customize

| File / Folder | Purpose |
| --- | --- |
| `lib/site.ts` | Site name, game name, URLs, navigation, footer, hero, CTA |
| `.env.local` | Domain, game store URL, analytics IDs |
| `content/pages/*.mdx` | Guide and info pages |
| `content/*.json` | Bosses, Exospines, and Outfits database |
| `public/images/` | Hero image, screenshots, logos |
| `app/favicon.ico` | Site favicon |

## Content Tips

- Each `.mdx` file starts with frontmatter (`title`, `description`, `category`, `verified`).
- Use `category: "legal"` for About / Privacy / Affiliate pages to hide ads and CTAs.
- The database pages (`/bosses/`, `/exospines/`, `/outfits/`) read from JSON files in `content/`.
- Replace placeholder environment values before deploying.

## Deployment

See `DEPLOY.md` for detailed deployment steps.
