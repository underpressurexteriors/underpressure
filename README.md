# Under Pressure Xteriors — Website

Marketing site for Under Pressure Xteriors, a licensed & insured pressure
washing company based in Zebulon, NC serving NC & VA. Built with Next.js 16
(App Router) + Tailwind CSS v4, fully statically generated (51 pages) for
fast page speed and strong SEO.

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** — design tokens in `src/app/globals.css`
- Self-hosted fonts via `@fontsource` (Oswald / Inter / IBM Plex Mono) — no
  runtime dependency on Google Fonts, keeps builds reliable anywhere
- No JS animation libraries — motion is CSS keyframes + a ~30-line vanilla
  `IntersectionObserver` scroll-reveal (`src/components/RevealInit.tsx`),
  respects `prefers-reduced-motion`
- Content-as-data: services and service-area pages are generated from
  `src/lib/services.ts` and `src/lib/locations.ts` via
  `generateStaticParams`, so **adding a new city or service is just adding
  an entry to the array** — no new page code needed

## Structure

```
src/app/
  page.tsx                       Home
  services/page.tsx               Services hub
  services/[slug]/page.tsx        9 individual service pages
  residential-pressure-washing/   Residential hub
  commercial-pressure-washing/    Commercial hub
  service-areas/page.tsx          Service area hub
  service-areas/[slug]/page.tsx   20 city/location pages (NC + VA)
  about/  contact/  gallery/  faq/
  privacy-policy/  terms-of-service/
  sitemap.ts   robots.ts   manifest.ts
src/lib/
  business.ts     NAP, phone, email, hours — single source of truth
  services.ts     all service copy, FAQs, schema content
  locations.ts    all 20 service-area entries
src/components/   Header, Footer, Hero, cards, JsonLd, ContactForm, etc.
```

## SEO / AI-search setup already in place

- Per-page metadata (title/description/canonical) on every route
- JSON-LD: `HomeAndConstructionBusiness` (home), `Service` + `FAQPage` on
  every service page, `Service` on every location page, sitewide `FAQPage`
  on `/faq`
- `sitemap.xml` and `robots.txt` generated automatically from the same data
  arrays that generate the pages (stays in sync — no manual sitemap upkeep)
- `robots.txt` explicitly allows major AI crawlers (GPTBot, ClaudeBot,
  PerplexityBot, Google-Extended, CCBot) for AI-search visibility
- All images use `next/image` with descriptive alt text; hero photo is
  `priority`-loaded, everything else lazy-loads

## Before this goes live — things to fill in

1. **Domain.** `src/lib/business.ts` has `url: "https://upxteriors.com"` as
   a placeholder — swap to the real domain once it's registered. This one
   value flows into every canonical URL, the sitemap, and all JSON-LD.
2. **Andrew's bio.** `/about` has a short, honest placeholder bio. Send
   over background (years in business, why you started the company, any
   certifications) and I'll write the full version.
3. **License number.** If you have a state contractor/business license
   number you want displayed, send it over — right now the site says
   "Licensed & Insured" without a number since none was provided.
4. **More photos.** Gallery and several service pages are ready for more
   real job photos as you get them — just drop them in and I'll wire them
   up.
5. **Contact form backend.** The form currently opens a pre-filled email
   (`mailto:`) — works with zero backend, but if you want submissions to
   land somewhere else (Gmail inbox is already the target, or GHL/CRM),
   let me know and I'll wire it to a real endpoint.
6. **Hosting.** Ready for Vercel as-is (`vercel.com/new` → import this
   repo → deploy). For GitHub Pages instead, it needs `output: "export"`
   added to `next.config.ts` and `images.unoptimized = true` — say the
   word and I'll flip that switch.

## Local development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build — currently passes clean, 51 pages
npm run lint
```
