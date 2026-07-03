# Stellar Blade Guide Hub — Product Requirements Document (PRD)

> **Version:** 1.1  
> **Date:** 2026-07-02  
> **Game Keyword:** Stellar Blade  
> **Site Language:** English  
> **Framework:** Next.js 14 (App Router) + TypeScript + Tailwind CSS + MDX  
> **Deployment Target:** Static export (`dist/`) for Google Search + Google AdSense

---

## 1. Project Overview

### 1.1 Mission
Transform the existing cozy-game guide template into a **Stellar Blade-focused English guide hub** that ranks organically on Google for high-intent game queries and monetizes through **Google AdSense** display ads.

### 1.2 Strategic Approach
- **Reuse the existing architecture:** MDX-driven pages (`content/pages/*.mdx`), centralized site config (`lib/site.ts`), dynamic route (`app/[slug]/page.tsx`).
- **Full Static Site Generation (SSG):** `output: 'export'` with `generateStaticParams()`.
- **Healing/Clean visual direction:** Keep the template's warm cream/sage/forest palette, round cards, and generous whitespace; tune it for a sci-fi action game while preserving calm readability.
- **Search-first content:** Every page targets a validated player query and provides ≥ 500 words of original English value.

### 1.3 Success Metrics
- Organic indexation of all 18+ planned pages.
- PageSpeed Insights ≥ 90 on mobile/desktop.
- Valid semantic HTML, accessible navigation, and clear ad placements.
- Successful static build to `dist/` with no errors.

---

## 2. Phase 1 — Content Research Summary

### 2.1 Search Variants Covered
The following query sets were searched and cross-referenced against Fextralife Wiki, IGN, GameSpot, PowerPyx, Game8, RPG Site, Epic Games Store guides, and community discussions:

- `Stellar Blade guide`
- `Stellar Blade walkthrough`
- `Stellar Blade tips`
- `Stellar Blade codes`
- `Stellar Blade tier list`
- `Stellar Blade secrets`
- `Stellar Blade boss guide`

### 2.2 Verified Player Pain Points
1. **Endings confusion** — Three endings depend on Lily's hidden progress bar and the Eidos 9 secret level; players repeatedly ask how to get all endings efficiently.
2. **Skill priority** — New players do not know which skills to unlock first (Perfect Parry, Triplet, Shield Breaker, Blink, Rush).
3. **Hard boss strategies** — Raven (Naytiba form), Tachy, Behemoth, Karakuri, and Maelstrom are cited as the hardest encounters.
4. **Collectible completion** — All 49 beverage cans, all Nano Suits, all passcodes, all Memory Sticks, and all 25 fish.
5. **System mechanics** — Perfect parry vs. dodge, Beta/Burst energy, Exospines, fishing bait progression, and New Game Plus carry-overs.

### 2.3 Five Content Priorities
1. **Boss Strategy Hub** — Detailed, phase-by-phase guides for Raven, Tachy, Behemoth, Maelstrom, and the full boss roster.
2. **Endings & NG+** — Clear branching logic, Lily progress explanation, Eidos 9 unlock, and efficient save-scum route.
3. **Skills & Builds** — Tier list of skills, Exospines, and early-game build priorities.
4. **Collectibles & Codes** — Passcodes, Nano Suits, fishing, and can locations.
5. **Combat Fundamentals** — Perfect parry, perfect dodge, Beta/Burst management for new players.

---

## 3. Phase 2 — Site Architecture

### 3.1 Content Pages (18 MDX Guide Pages in `content/pages/`)

| # | Slug | SEO Title (≤ 60) | Meta Description (≤ 160) | H1 | Category |
|---|------|------------------|--------------------------|----|----------|
| 1 | `stellar-blade-guide` | Stellar Blade Guide Hub — Walkthrough, Tips & Secrets | Your complete Stellar Blade guide hub: walkthrough, boss strategies, endings, skills, codes, fishing, outfits, and New Game Plus. | Stellar Blade Complete Guide Hub | Hub |
| 2 | `beginners-guide` | Stellar Blade Beginner Tips — What to Know First | Essential Stellar Blade beginner tips: combat, camps, saves, exploration, and early mistakes to avoid. | Stellar Blade Beginner Tips | Guide |
| 3 | `combat-guide` | Stellar Blade Combat Guide — Parry, Dodge & Combos | Master Stellar Blade combat with perfect parries, dodges, Beta skills, Burst attacks, and combo strategies. | Stellar Blade Combat Guide | Guide |
| 4 | `best-skills-tier-list` | Stellar Blade Best Skills Tier List — Top Picks | The best skills to unlock first in Stellar Blade, ranked by survival, DPS, and Beta/Burst value. | Stellar Blade Best Skills Tier List | Build |
| 5 | `best-exospines` | Stellar Blade Best Exospines — Which to Equip | A ranked guide to the best Exospines in Stellar Blade for parry, dodge, damage, and exploration. | Stellar Blade Best Exospines Guide | Build |
| 6 | `all-bosses-guide` | Stellar Blade All Bosses Guide — How to Beat Every Naytiba | A complete list of every Stellar Blade boss with strategies, weaknesses, and recommended skills. | Stellar Blade All Bosses Guide | Boss |
| 7 | `raven-boss-guide` | Stellar Blade Raven Boss Guide — Naytiba Form Strategy | How to beat Raven in Stellar Blade, including her instant-kill charge, flight phase, and best skills. | How to Beat Raven in Stellar Blade | Boss |
| 8 | `tachy-boss-guide` | Stellar Blade Tachy Boss Guide — Matrix 11 Strategy | Full strategy to defeat Tachy in Stellar Blade, covering every phase and attack pattern. | How to Beat Tachy in Stellar Blade | Boss |
| 9 | `behemoth-boss-guide` | Stellar Blade Behemoth Boss Guide — Great Desert Strategy | How to defeat the Behemoth in Stellar Blade: speed, combos, and stagger tactics. | How to Beat the Behemoth in Stellar Blade | Boss |
| 10 | `all-endings-guide` | Stellar Blade All Endings Guide — Get Every Finale | How to unlock all three Stellar Blade endings: Return to Colony, Cost of Lost Memories, and Making New Memories. | Stellar Blade All Endings Guide | Story |
| 11 | `eidos-9-secret-level` | Stellar Blade Eidos 9 Secret Level — How to Unlock | How to unlock the secret Eidos 9 level in Stellar Blade by raising Lily's progress to 100%. | Stellar Blade Eidos 9 Secret Level Guide | Story |
| 12 | `new-game-plus-guide` | Stellar Blade New Game Plus Guide — What Carries Over | Everything you keep and unlock in Stellar Blade New Game Plus, including new Nano Suits and raised caps. | Stellar Blade New Game Plus Guide | Progression |
| 13 | `all-passcodes-codes` | Stellar Blade All Passcodes & Codes — Doors & Chests | Every door and chest passcode in Stellar Blade, organized by region: Eidos 7, Wasteland, Matrix 11, and more. | Stellar Blade All Passcodes & Codes | Collectible |
| 14 | `nano-suits-outfits` | Stellar Blade All Nano Suits & Outfits — Unlock Guide | How to unlock every Nano Suit and outfit for Eve in Stellar Blade, including New Game Plus variants. | Stellar Blade All Nano Suits & Outfits | Collectible |
| 15 | `fishing-guide` | Stellar Blade Fishing Guide — All Fish & Bait | Complete fishing guide for Stellar Blade: all 25 fish, bait types, spots, quests, and the Ocean Maid outfit. | Stellar Blade Fishing Guide | Collectible |
| 16 | `collectibles-guide` | Stellar Blade Collectibles Guide — Cans, Memory Sticks & More | Track every collectible in Stellar Blade: beverage cans, Memory Sticks, documents, and data logs. | Stellar Blade Collectibles Guide | Collectible |
| 17 | `farm-gold-fast` | Stellar Blade Gold Farming Guide — Fast & Easy Gold | The fastest ways to farm Gold in Stellar Blade: enemies, items, camps, and end-game farming routes. | Stellar Blade Gold Farming Guide | Progression |
| 18 | `best-settings` | Stellar Blade Best Settings — Performance & Controls | Recommended Stellar Blade settings for performance, controls, camera, accessibility, and comfort. | Stellar Blade Best Settings | Guide |

### 3.2 Database Pages (Replace Template Defaults)
The template ships with `/animals/`, `/recipes/`, and `/characters/` JSON-driven pages. These will be **replaced** with Stellar Blade-appropriate database pages:

| Route | Data File | Purpose |
|-------|-----------|---------|
| `/bosses/` | `content/bosses.json` | Sortable/filterable list of all main/optional bosses with location and difficulty. |
| `/exospines/` | `content/exospines.json` | List of Exospines with effects and recommended use cases. |
| `/outfits/` | `content/outfits.json` | List of Nano Suits/outfits with unlock requirements. |

### 3.3 Quest Walkthroughs (Retain `app/quests/[quest]/page.tsx`)
- Convert `content/quests/example-quest.mdx` into Stellar Blade region/mission walkthroughs as needed (optional Phase 2 expansion).

### 3.4 Utility Pages (Retain from Template)
- `/about/`
- `/privacy-policy/`
- `/affiliate-disclosure/`
- `/faq/` (rewritten for Stellar Blade)

---

## 4. Phase 3 — Technical Adaptation Plan

### 4.1 Stack (Already in Template)
- Next.js 14.2.35 App Router
- TypeScript
- Tailwind CSS 3.4 + `@tailwindcss/typography`
- `next-mdx-remote` + `gray-matter` + `remark-gfm`
- Static export (`output: 'export'`, `distDir: 'dist'`, `trailingSlash: true`)

### 4.2 Required Code Changes

#### A. Site Configuration — `lib/site.ts`
Update to Stellar Blade-specific values:
- `name`, `gameName`, `developerName`
- `url`, `metadata.defaultTitle`, `metadata.titleTemplate`, `metadata.description`
- `hero.tagline`, `hero.title`, `hero.description`, `hero.image`
- `cta.label`, `cta.url` (official store page)
- `nav` links to Stellar Blade categories
- `footer` tagline/disclaimer + link groups
- `homeCategories` mapped to Stellar Blade pillars
- `sitemapStaticRoutes` updated to new database/utility routes

#### B. Home Page — `app/page.tsx`
- Keep the hero gradient/card layout.
- Update copy to Stellar Blade.
- Update `homeCategories` to point to Bosses, Exospines, Outfits, FAQ.
- Optionally add a short "Why Stellar Blade" intro section.

#### C. AdSense Integration
- Add a new component `components/AdPlaceholder.tsx`.
- Insert AdSense script placeholder in `app/layout.tsx` (publisher ID configurable via env or hardcoded placeholder).
- Place ad units in `ArticleLayout.tsx`:
  - Below article header/description.
  - Mid-article (after the first H2).
  - Above the footer CTA.
- Ensure placeholders have stable dimensions to prevent CLS.

#### D. Database Pages
- Replace `app/animals/page.tsx`, `app/characters/page.tsx` (if present), and `content/animals.json`, `content/characters.json`, `content/recipes.json` with:
  - `app/bosses/page.tsx` + `content/bosses.json`
  - `app/exospines/page.tsx` + `content/exospines.json`
  - `app/outfits/page.tsx` + `content/outfits.json`
- Update `app/sitemap.ts` to include new database routes.

#### E. Dynamic Article Route — `app/[slug]/page.tsx`
- Already functional; verify it reads from `content/pages/`.
- Add `relatedSlugs` support if desired (optional enhancement in `content.ts`).

#### F. FAQ Page — `app/faq/page.tsx`
- Rewrite FAQs for Stellar Blade based on researched pain points.

#### G. Sitemap & Robots
- `app/sitemap.ts`: include pages, quests, and static database routes.
- `app/robots.ts`: allow all, point to sitemap.

### 4.3 File Inventory After Changes

```
./
├── app/
│   ├── [slug]/page.tsx
│   ├── bosses/page.tsx
│   ├── exospines/page.tsx
│   ├── outfits/page.tsx
│   ├── faq/page.tsx
│   ├── quests/[quest]/page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Accordion.tsx
│   ├── AdPlaceholder.tsx          (NEW)
│   ├── ArticleLayout.tsx          (MODIFIED for ads)
│   ├── Breadcrumbs.tsx
│   ├── CategoryCard.tsx
│   ├── CtaButton.tsx
│   ├── FAQSchema.tsx
│   ├── Footer.tsx
│   ├── GuideCard.tsx
│   ├── LatestGuides.tsx
│   ├── MdxComponents.tsx
│   ├── Navbar.tsx
│   └── PebbleStamp.tsx
├── content/
│   ├── pages/*.mdx                (18 Stellar Blade guides)
│   ├── quests/*.mdx               (Stellar Blade mission walkthroughs)
│   ├── bosses.json                (NEW)
│   ├── exospines.json             (NEW)
│   └── outfits.json               (NEW)
├── lib/
│   ├── content.ts
│   ├── site.ts                    (MODIFIED)
│   ├── slugify.ts
│   └── utils.ts
├── public/images/
├── next.config.js
├── tailwind.config.ts
├── package.json
└── tsconfig.json
```

---

## 5. Phase 4 — Content Production

### 5.1 Content Format
- Each page is a separate `.mdx` file in `content/pages/` with frontmatter:
  ```yaml
  ---
  title: "Stellar Blade Beginner Tips"
  description: "Essential Stellar Blade beginner tips..."
  category: "Guide"
  verified: "2026-07-02"
  ---
  ```
- Body uses Markdown (`##`, `###`, lists, tables, blockquotes).
- Minimum 500 words of substantive English per guide page.

### 5.2 Content Quality Rules
- **Language:** Native English.
- **Length:** ≥ 500 words per guide page.
- **Originality:** Synthesize verified facts; do not copy-paste.
- **Value:** Every H2/H3 must answer a real player question.
- **Internal links:** Link to related guide pages using relative paths (e.g., `[best skills](/best-skills-tier-list/)`).

### 5.3 Database JSON Quality
- `bosses.json`: name, location, type (main/optional), difficulty, weakness, key tip.
- `exospines.json`: name, effect, best build/use case.
- `outfits.json`: name, unlock requirement, region/quest, NG+ variant flag.

---

## 6. Design System — Healing / Clean Architecture

### 6.1 Visual Direction
- **Keep the template palette:** `cream`, `oatmeal`, `sage`, `forest`, `sun`, `terracotta`, `ink`, `mist`.
- **Preserve:** rounded cards (`rounded-2xl`), soft shadows, generous whitespace, sticky TOC.
- **Tune for action-game context:** slightly more structured tables and clearer hierarchy for boss stats/tier lists.

### 6.2 Ad Placeholder Design
- Light oatmeal/cream background.
- Subtle dashed border.
- "Advertisement" label in small muted text.
- Fixed aspect ratios: `min-h-[90px]` for in-content banners, `min-h-[250px]` for sidebar/mid-page units.

---

## 7. SEO & Monetization Strategy

### 7.1 On-Page SEO
- Unique `<title>` and `<meta name="description">` per page (from MDX frontmatter).
- Semantic HTML5: `<article>`, `<nav aria-label="breadcrumb">`, `<aside>` for TOC/ads.
- JSON-LD Article schema already in `app/[slug]/page.tsx`.
- Descriptive `h1` + logical heading order.

### 7.2 Technical SEO
- `sitemap.ts` with pages, quests, and database routes.
- `robots.ts` allowing all crawlers.
- Clean URLs with trailing slashes.
- Static export for fast delivery.

### 7.3 AdSense Integration
- Add `AdPlaceholder` components in stable positions.
- Publisher ID placeholder in `layout.tsx` head script.
- No ads overlap interactive content; maintain CLS budgets.

### 7.4 E-E-A-T Signals
- Clear site name, tagline, and disclaimer.
- `verified` date on articles.
- Factual accuracy based on verified sources.

---

## 8. Execution Milestones

| Phase | Deliverable | Status |
|-------|-------------|--------|
| 1 | PRD (this document) and template review | ✅ Done |
| 2 | Update `lib/site.ts`, `app/page.tsx`, `app/faq/page.tsx`, footer/nav metadata | ✅ Done |
| 3 | Create `AdPlaceholder.tsx` and integrate ads into `ArticleLayout.tsx` | ✅ Done |
| 4 | Replace database pages: bosses, exospines, outfits | ✅ Done |
| 5 | Write all 18 `content/pages/*.mdx` guide files (≥ 500 words each) | ✅ Done |
| 6 | Update `sitemap.ts`, `robots.ts`, build and verify | ✅ Done |
| 7 | ESLint config, deployment docs, local server smoke test | ✅ Done |

## 11. Build Verification Results

- `npm install` completed successfully.
- `npm run build` completed with 32 static pages generated.
- `npm run lint` passed with no warnings or errors.
- Local smoke test confirmed homepage, dynamic guide pages, database pages, `/sitemap.xml`, and `/robots.txt` all return HTTP 200.
- All 18 MDX guide pages exceed the 500-word minimum.

---

## 9. Risk & Compliance Notes

- **No fabricated data:** All game facts verified against public guides and official sources.
- **Copyright:** Original commentary; game names and mechanics belong to Shift Up / Sony Interactive Entertainment.
- **AdSense policy:** No deceptive placement, no clickbait, no adult content, no copyrighted material hosting.
- **Single-save warning:** Stellar Blade uses one save file; guide content will note this.

---

## 10. Next Step

Approve this updated PRD, then proceed to implement the changes in the existing template: update site config, create ad components, replace database pages, and produce all 18 Stellar Blade MDX guide pages.
