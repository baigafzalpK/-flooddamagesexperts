# Deploying BayouDry Restoration

This site is a Next.js app with a small Node server. The lead-capture API
(`/api/lead`), social share images (`/og/*`), and sitemaps all run
server-side — so deploy it to a **Node host, not a static-only host**.
(Drag-and-drop static hosting would silently break lead capture.)

## Option A — Vercel (recommended, ~10 minutes)

1. Push this folder to a GitHub repo (or import it directly).
2. Go to [vercel.com](https://vercel.com) → Add New → Project → import the repo.
   Framework preset: **Next.js** (auto-detected). No build settings to change.
3. Add environment variables (Project → Settings → Environment Variables).
   At minimum:
   - `NEXT_PUBLIC_SITE_URL` = `https://bayoudry.com`
   - `NEXT_PUBLIC_BUSINESS_PHONE` / `NEXT_PUBLIC_BUSINESS_PHONE_E164` = the
     LeadSmart number (replaces the temporary `(713) 555-0148`)
   - `LEAD_WEBHOOK_URL` + `LEAD_WEBHOOK_SECRET` = where leads get delivered
   - `NEXT_PUBLIC_GTM_ID` = your Google Tag Manager ID
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` / `NEXT_PUBLIC_BING_SITE_VERIFICATION`
4. Deploy. Then add your domain: Project → Settings → Domains →
   `bayoudry.com` (+ `www`). Point DNS at Vercel when prompted.
   HTTPS is automatic.

## Option B — Netlify

1. Import the repo at [netlify.com](https://netlify.com). Netlify auto-detects
   Next.js and installs its Next.js Runtime — keep it enabled.
2. Set the same environment variables as above (Site settings → Environment).
3. Add the domain under Site settings → Domain management; HTTPS is automatic.

## Option C — Any VPS (Ubuntu + Node 20+)

```bash
npm install
npm run build
# set env vars in .env.production (see .env.example), then:
npm start        # serves on port 3000
```

Put it behind Caddy/Nginx for HTTPS, or use a process manager (pm2/systemd)
to keep it running. Security headers and redirects are already configured in
`next.config.ts`.

## After deploy — finish the launch checklist

These still need a human (full list in `LAUNCH.md`):

- [ ] Buy `bayoudry.com` and point DNS to your host (RDAP 404/unregistered
      as of 2026-10-13 — do this first)
- [ ] Replace the `(713) 555-0148` placeholder with the LeadSmart number
- [ ] Set `LEAD_WEBHOOK_URL`/`LEAD_WEBHOOK_SECRET` and test a live lead
      end-to-end (the API refuses leads with no destination configured)
- [ ] Legal review of Privacy / Terms / SMS-consent wording (referral-brand
      disclosure must stay accurate)
- [ ] Google Search Console + Bing Webmaster Tools: submit the sitemap
      (`/sitemap.xml`), then request indexing
- [ ] PageSpeed / Core Web Vitals check on the live URL

## What's in this package

- Full Next.js 16 source: **~1,850 pages** (15 services, 16 deep Houston-metro
  city pages, 1,200 programmatic city pages across 43 states, 10 guides,
  6 city+service pages, 5 PPC pages, problem finder, FAQs)
- Homepage: hero with background photo, 60-second damage triage quiz,
  6 interactive before/after sliders (honestly labeled as illustrative stock
  examples), full-bleed image band, 2 licensed stock videos with play/pause
  controls, interactive emergency checklist
- Videos page (`/videos/`): 7 short BayouDry videos — 30s brand video + six
  20s tips/explainers, branded title cards + baked end cards, in the header
  nav and footer
- Lead system: validated form + HMAC-signed webhook API (`/api/lead`)
- SEO: sitemaps, Schema.org JSON-LD, OG images, quality-gated programmatic pages
- 35 locally served Unsplash photos with photographer credits
  (`public/photos/CREDITS.md`)
- Excluded: `node_modules/`, `.next/` (rebuilt by `npm run build`)
