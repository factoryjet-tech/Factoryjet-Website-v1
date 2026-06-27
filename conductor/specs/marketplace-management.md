# Page spec: /us/marketplace-management

**Status:** NEW  
**SEO entity:** {p['entity']}  
**Cluster(s):** marketplace(new?)

> Build to `PAGE-SPEC.md` (the full standard) + `DESIGN.md` (visual system) + `PRODUCT.md` (positioning & hard rules). Worked example to mirror: `src/app/us/b2b-ecommerce/page.tsx`.

## Target keywords (weave 15–20 naturally into H1/H2s, body, FAQ)

| Keyword | Vol | KD | Intent |
|---|---:|---:|---|
| amazon ecommerce platform | 1600 | 45 | commercial |
| ecommerce platform amazon | 1600 | 45 | commercial |
| ecommerce website amazon | 880 | 70 | navigational |
| amazon ecommerce website | 880 | 51 | navigational |
| etsy marketplace integration app | 140 | 5 | navigational |
| marketplace integration | 110 | 31 | navigational |
| ecommerce solutions amazon | 90 | 4 | commercial |
| amazon ecommerce company | 70 | 62 | navigational |
| ecommerce marketplace development | 70 | 5 | commercial |
| etsy marketplace integration by cedcommerce | 50 | 5 | navigational |
| integration marketplace | 50 | 12 | commercial |
| amazon ecommerce agency | 50 | 15 | navigational |
| paylocity integration marketplace | 40 | 4 | navigational |
| ecommerce with amazon integration | 40 | 0 | commercial |
| amazon ecommerce integration | 40 | 0 | commercial |
| amazon web services ecommerce | 30 | 13 | commercial |
| hubspot integration marketplace | 30 | 37 | navigational |
| integration spa at river city marketplace | 30 | 0 | navigational |

## Page-specific direction

- **Hero visual (the one memorable moment):** Multi-marketplace fan-out: one catalog → Amazon, Walmart, eBay, own store, with one inventory core (new .platpage visual)
- **Sourced stats (E-E-A-T spine, 3 cited w/ external links):** Find + cite 3: US marketplace share of ecommerce, Amazon share of US ecommerce, B2B marketplace growth. VERIFY via WebSearch (Marketplace Pulse/Digital Commerce 360/eMarketer).
- **Industry / use-case sections (5–6, specific technical detail each):** DTC brands expanding to marketplaces, multi-marketplace sellers, B2B marketplaces, resellers/distributors, global sellers, brands needing inventory sync
- **Internal links (up to pillar + across to siblings):** /us/omnichannel-commerce, /us/services/ecommerce-development, /us/b2b-ecommerce, /us/best-ecommerce-platforms

## Required sections (from PAGE-SPEC)

SiteHeader · Hero+inline form+visual (single viewport) · 4-stat band · answer-first "What is X?" · 3 sourced stats · benefits bento(6) · features bento(6–8) · 5–6 industry sections · original comparison table (our row `.me`) · how-to-choose/process · real proof (Bombay Petals B2B / Belle Maison DTC) · FAQ 15–20 (FAQPage schema mirrors visible) · final CTA + internal links · SiteFooter

## Schema (JSON-LD via next/script)
Service + FAQPage + HowTo (no day counts) + Organization/AggregateRating (4.9/150) + BreadcrumbList.

## Acceptance gate (must pass before merge)

- [ ] 3,000–5,000 words of substantive copy
- [ ] Hero fits one viewport (desktop + mobile); inline `HeroInlineForm` present
- [ ] 15–20 target keywords used naturally (no stuffing)
- [ ] 3 sourced stats with real external links (verified via WebSearch — no fabricated numbers)
- [ ] 5–6 industry sections + original comparison table
- [ ] 15–20 FAQs; FAQPage schema mirrors visible Q&A exactly
- [ ] Full schema stack present
- [ ] `node scripts/validate-build.mjs` passes
- [ ] No em dashes, no AI-slop verbs, no pricing numbers, no geo-cheap framing, no fabricated metrics
- [ ] On Node ≥24: `npx impeccable detect src/app/us/<slug>/page.tsx` clean

## Brand reminders
White bg + orange `#F05A28` only · fonts Plus Jakarta/Inter/Geist Mono (never swap) · decade-plus (never 25 yrs) · client owns what we build · no dark rooms.
