# Strategy — BayouDry Restoration (Houston, TX)

## Niche & model (LeadSmart coverage data, 2026-10-13)

- **Niche:** Water Damage (water damage restoration) — **CPL**, paid on booked appointments.
- **Coverage:** 21,172 ZIPs · 12,634 cities · 45 states (site JSON API, dataset 2026-10-11).
- **Payouts:** $120.50–$507.00 per booked appointment. National median **$196.50**; national avg $237.39. $507 is the single highest ZIP payout in the whole network.
- **Pricing shape:** strongly geo-priced — buyers bid per ZIP on contractor demand, so payouts differ several-fold county to county. Market selection matters more here than in flat niches.

## Market choice: Texas → Houston metro

Top states by avg payout vs coverage (Water Damage):

| State | Avg payout | Top | ZIPs | Cities |
|---|---|---|---|---|
| AZ | $361.20 | $507 | 509 | 265 |
| VA | $331.42 | $358 | 171 | 59 |
| **TX** | **$324.08** | **$452** | **1,331** | **607** |
| WA | $305.07 | $442 | 494 | 281 |
| FL | $294.46 | $398 | 926 | 327 |
| CA | $284.39 | $394 | 1,929 | 789 |

- TX chosen: 3rd-highest avg payout nationally AND 3rd-deepest coverage. AZ/VA pay more per lead but have 2.6–7.8× fewer ZIPs — volume wins.
- **Houston** is the deepest single water-damage market in Texas: **169 covered ZIPs at $388 avg payout**, 6.2M metro population (Harris County).
- Demand drivers (real, Houston-specific): Gulf hurricanes/tropical storms, bayou/flash flooding, flat topography + clay soil (poor drainage), slab-on-grade foundations (water spreads fast under flooring), aging housing stock inside the Loop, freeze events bursting pipes (Feb 2021).
- Bulk expansion: remaining ~590 TX cities from the real dataset as programmatic pages (same generator pattern as ClearPath), minus the 16 deep Houston-metro cities.

## Brand

- **Brand:** **BayouDry Restoration** (short: BayouDry). Houston-bayou local flavor, original, no clash with majors (Servpro, ServiceMaster, BELFOR, PuroClean, Paul Davis, 1-800-WATER-DAMAGE).
- **Domain:** `bayoudry.com` — RDAP 404 (unregistered) on 2026-10-13, verified via rdap.verisign.com. **NOT purchased.** USPTO Class 37 + Texas entity checks still required before launch.
- **Business model:** call brand for LeadSmart buyers. Independent licensed water-damage restoration contractors answer and do the work. Never claim BayouDry's own crews, trucks, licenses, or offices.
- **Positioning:** urgent but calm. Water callers are mid-crisis (active leak, flooded home) — copy leads with what to do in the next 10 minutes, then the process. Plain-spoken, no scare tactics.
- **Temporary phone:** **(713) 555-0148** / +17135550148 — fictional 555-01xx range; replace with the LeadSmart number before launch.

## Design (deliberately different from ClearPath's deep teal + coral and the navy/amber sites)

- **Primary ink:** deep sea slate `#0F2B3D` (heroes, footer, text)
- **Accent:** bright aqua `#0A93B8` / deep `#076E89` / tint `#E4F4FA` (links, icon tiles)
- **CTA:** ember orange `#E05A1F` (primary buttons only — warm, urgent, distinct from coral)
- **Alert:** `#B42318` emergency only; paper `#F7F5F0`, paper-deep `#ECE7DD`, line `#DCD4C6`
- **Typography:** Space Grotesk (headings, technical/confident) + Inter (UI) — different voice from ClearPath's humanist sans.

## Content plan

- **Services (15)** in 4 categories:
  - Emergency response: emergency-water-extraction, flood-damage-cleanup, sewage-backup-cleanup, burst-pipe-water-damage
  - Drying & mitigation: structural-drying-dehumidification, hardwood-floor-drying, moisture-detection-inspection
  - Repair & restoration: drywall-ceiling-restoration, carpet-water-extraction, mold-remediation, odor-removal
  - Property & claims: commercial-water-damage, insurance-claims-documentation, roof-leak-water-damage, appliance-leak-cleanup
- **Deep cities (16, Houston metro):** Houston, Pasadena, Baytown, Sugar Land, Katy, Conroe, Spring, Pearland, League City, Missouri City, Richmond, Rosenberg, Humble, Galveston, Texas City, Friendswood.
- **Guides (10):** first-30-minutes flood response, insurance coverage, restoration process/timeline, cost factors, choosing a company, Texas freeze burst pipes, hurricane prep for Houston homes, drying hardwood floors, mold after water damage, sewage backup risks.
- **City+service deep pages (6):** Houston/flood-damage-cleanup, Houston/emergency-water-extraction, Katy/burst-pipe-water-damage, Sugar Land/sewage-backup-cleanup, Pasadena/structural-drying-dehumidification, Conroe/mold-remediation.
- **PPC landing pages (5):** emergency-water-extraction, flood-damage-cleanup, burst-pipe, mold-remediation, commercial.

## Keyword clusters

- Transactional: "water damage restoration houston", "emergency water removal houston tx", "flood cleanup company near me"
- Service: "burst pipe repair houston", "sewage backup cleanup", "mold remediation houston"
- Problem: "water leaking through ceiling", "wet carpet smell", "hardwood floor water damage"
- Local: "{service} in {city}" for the 16 deep cities
- Cost: "water damage restoration cost factors", "does insurance cover water damage" (factors only, never dollar figures)

## URL scheme

```
/  /water-damage-services/  /water-damage-services/{service}/  /emergency-water-damage/
/locations/  /locations/texas/  /locations/texas/{city}/  /locations/texas/{city}/{service}/
/resources/  /resources/{guide}/  /about/ /contact/ /faq/ /request-service/ (noindex)
/privacy/ /terms/ /accessibility/ /thank-you/ (noindex)  /lp/{campaign}/ (noindex)
```

## Internal linking

- Hubs → services/cities; every service links 3–4 related services; city pages link popular services + nearby cities; guides link owning services.
- Linker topics (water-specific): shutoff valve, water heater, washing machine hoses, slab leaks, roof leaks, sump pump, flood insurance (NFIP), mold growth timeline, dehumidifiers, hardwood floors, drywall, crawl space, attic, dishwasher leaks, AC condensate drain.

## Lead workflow

- Same 3-step LeadForm as the playbook: Step 1 = problem + "Is water actively leaking?" → Yes = call-first short path; No = ZIP + timing → contact details.
- ZIP coverage check against the TX dataset (1,331 covered ZIPs).
- Emergency pages push the call CTA first; form consent names sharing with up to three restoration contractors.

## Copy rules (beyond the playbook)

- No scare tactics, no invented timelines ("we'll be there in 30 minutes"), no dollar figures in cost content (factors only).
- Mold content: describe the remediation process; never diagnose health effects — point to professionals.
- Insurance content: explain documentation and typical process; never promise coverage.
- Same call-brand disclosure as the other sites: the contractor you choose does the work; BayouDry doesn't set prices or take payments. Disclosure in footer, form consent, Terms, Privacy, llms.txt.

## Launch blockers

- Purchase/configure bayoudry.com + DNS/HTTPS.
- Replace (713) 555-0148 with the LeadSmart number.
- Configure LEAD_WEBHOOK_URL + secret (or DB delivery); serverless rate limiting.
- USPTO Class 37 / Texas entity review for "BayouDry Restoration".
- Legal review of Privacy/Terms/SMS wording.
- GTM/GA4/Ads/Consent Mode; Search Console/Bing; sitemap submission; IndexNow.
- Real reviews only — never fabricate.
