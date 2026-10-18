# BayouDry Restoration — SEO

## Intent map

| Intent | Page |
|---|---|
| brand / metro ("bayoudry", "water damage restoration houston") | home |
| "water damage {city}" / "flood cleanup {city}" | city page |
| service ("burst pipe repair houston", "mold remediation houston") | service page |
| problem ("ceiling water stain", "musty smell after leak") | guide / problem finder |
| cost ("water damage restoration cost") | cost-factors section on service pages + cost guide (factors only, never dollar figures) |
| commercial | commercial-water-damage service page |
| paid | /lp/[slug] PPC pages (noindexed, not in sitemaps) |

The homepage targets "water damage restoration Houston TX" and must not
compete with the Houston city page — the city page targets "{city}-specific"
modifiers and local issues (bayou overflow, Harvey/Imelda/Beryl, clay soil,
slab-on-grade, 2021 Uri freeze).

## Indexation

- Quality gate (`src/lib/quality.ts`): deep city pages need local copy,
  local issues, ZIPs, services, nearby links. Bulk programmatic city pages
  (591 Texas cities from the real LeadSmart dataset) must pass the gate or
  they are not generated (`dynamicParams = false` → 404).
- Sitemaps: `/sitemap.xml` index → pages/services/locations/guides.
  `lastmod` from content dates, never build time.
- robots.ts: production allows all except `/api/`, `/thank-you/`, tracking
  params; sitemap at `https://bayoudry.com/sitemap.xml`. Non-production
  disallows all.

## Schema graph

- Sitewide: `Organization` (NOT a restoration contractor — BayouDry is a
  referral/call brand connecting property owners with independent
  restoration contractors) + `WebSite` + city `Place` nodes + `Service`
  catalog entries with `broker` → org.
- Per page: `WebPage` (+ `FAQPage` when visible FAQs), `BreadcrumbList`,
  `about`/`mainEntity`, local `Service` nodes with `broker`.
- Every `@id` referenced must be defined on the page. The temporary 555
  phone number is excluded from all schema — replace with the LeadSmart
  number before launch.

## Linking

- Hierarchy: breadcrumbs, mega menus, hubs. Sideways: related services,
  nearby towns, town chips, guides, state link on city pages.
- Contextual: `createLinker(path)` — water-specific topic table in
  `src/lib/linker.tsx`, first mention only, no self-links, max 6/page.
- Target click depth ≤ 2.

## AEO / GEO

- Every service/guide opens with a direct answer; FAQs answer in sentence
  one and render in HTML even when collapsed.
- One H1, logical H2/H3. "At a glance" `<dl>` blocks. `/llms.txt` from
  indexable URLs, with the referral-brand disclosure included.

## Faster indexing

- Canonical apex (`https://bayoudry.com`), single-hop www 308s
  (host-level). Honest sitemap lastmod.
- IndexNow after deploy (`npm run indexnow`); Search Console Domain
  property + sitemap + URL Inspection for key pages. Google doesn't use
  IndexNow.
