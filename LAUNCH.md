# Launch Checklist — BayouDry Restoration

## Brand & domain
- [ ] Purchase `bayoudry.com` (RDAP 404/unregistered on 2026-10-13 — not yet bought)
- [ ] USPTO Class 37 + Texas entity search for "BayouDry Restoration"
- [ ] DNS → hosting, HTTPS, apex canonical, www → apex 308

## Lead delivery
- [ ] Replace `(713) 555-0148` with the LeadSmart number (`NEXT_PUBLIC_BUSINESS_PHONE` / `_E164`)
- [ ] Set `LEAD_WEBHOOK_URL` + `LEAD_WEBHOOK_SECRET` (HMAC-signed delivery), or wire database delivery
- [ ] Serverless rate limiting (in-memory limiter is single-instance only)
- [ ] Test a live lead end-to-end; confirm 200 + delivery receipt

## Legal & compliance
- [ ] Legal review of Privacy / Terms / SMS consent wording
- [ ] Referral-brand disclosure stays accurate everywhere: BayouDry connects
      property owners with independent restoration contractors — never claim
      BayouDry owns crews, trucks, licenses, or completed jobs
- [ ] Reviews: only real, verified reviews — never fabricate
- [ ] Cost content covers factors only, never dollar figures

## Analytics & search
- [ ] GTM + GA4 + Ads conversion import + Consent Mode v2
- [ ] Search Console + Bing Webmaster Tools; submit sitemaps; IndexNow (`npm run indexnow`)
- [ ] Rich Results Test on home, one service, one city page
- [ ] PageSpeed / Core Web Vitals on live URL

## Content verification
- [ ] Human check of the 16 deep Houston-metro city ZIP lists
- [ ] Replace stock photos with real job photos if/when available (keep Unsplash credits until then)
- [ ] Never advertise 24/7 or response-time guarantees without staffing to back them
