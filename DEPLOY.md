# Stellar Blade Hub — Deployment Checklist

This checklist covers the manual steps required to deploy the site to your domain.

## 1. Register the domain

Register your target domain through your preferred domain registrar.

## 2. Connect DNS to your hosting provider

### Option A — Vercel

1. Add the project in the Vercel dashboard (or use the Vercel CLI).
2. In the project settings, add your domain as a production domain.
3. Update the nameservers at your registrar to the ones Vercel provides, or add the CNAME / A records Vercel requests.

### Option B — Cloudflare Pages

1. Create a new Pages project in the Cloudflare dashboard.
2. Add your domain as a custom domain.
3. Update the nameservers at your registrar to Cloudflare's nameservers, or add the DNS records Cloudflare requests.

## 3. Build the site

```bash
npm install
npm run build
```

The static output is written to `dist/`.

## 4. Set environment variables

In the hosting dashboard, add the following environment variables for the production environment:

| Variable | Example value | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_GA_ID` | `G-KE3EXC9FQF` | Google Analytics measurement ID |
| `NEXT_PUBLIC_CLARITY_ID` | `xgqnuc83ih` | Microsoft Clarity project ID |
| `NEXT_PUBLIC_SITE_URL` | `https://stellarblade.site` | Canonical site URL used by sitemap and metadata |
| `NEXT_PUBLIC_GAME_URL` | `https://www.playstation.com/en-us/games/stellar-blade/` | Primary CTA link |

After adding the variables, trigger a rebuild.

## 5. Deploy the build output

### Option A — Vercel CLI

```bash
npx vercel --prod
```

### Option B — Cloudflare Pages with Wrangler

```bash
npx wrangler pages deploy dist
```

### Option C — Cloudflare Pages drag-and-drop

1. Open the Cloudflare Pages dashboard.
2. Choose **Create a project** → **Upload assets**.
3. Drag and drop the `dist/` folder.

## 6. Verify the live site

Open your domain and confirm:

- [ ] The homepage loads.
- [ ] Core guide pages load:
  - `/beginners-guide/`
  - `/combat-guide/`
  - `/best-skills-tier-list/`
  - `/all-bosses-guide/`
  - `/raven-boss-guide/`
  - `/tachy-boss-guide/`
  - `/all-endings-guide/`
  - `/new-game-plus-guide/`
  - `/fishing-guide/`
  - `/nano-suits-outfits/`
- [ ] Database pages load:
  - `/bosses/`
  - `/exospines/`
  - `/outfits/`
- [ ] Utility pages load:
  - `/about/`
  - `/privacy-policy/`
  - `/affiliate-disclosure/`
  - `/faq/`
- [ ] `/sitemap.xml` loads and returns XML.
- [ ] `/robots.txt` loads.
- [ ] The browser console has no critical errors.

## 7. Submit to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add a domain property for your domain.
3. Submit the sitemap: `https://stellarblade.site/sitemap.xml`.
4. Manually request indexing for priority pages.

## Notes

- Do not commit production secrets to the repository.
- If you switch domains later, rebuild with the new `NEXT_PUBLIC_SITE_URL` and redeploy.
