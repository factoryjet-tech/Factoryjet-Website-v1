# Page spec: /us/b2b-ecommerce

**Status:** DONE (worked example)  
**SEO entity:** {p['entity']}  
**Cluster(s):** b2b-ecommerce

> Build to `PAGE-SPEC.md` (the full standard) + `DESIGN.md` (visual system) + `PRODUCT.md` (positioning & hard rules). Worked example to mirror: `src/app/us/b2b-ecommerce/page.tsx`.

## Target keywords (weave 15–20 naturally into H1/H2s, body, FAQ)

| Keyword | Vol | KD | Intent |
|---|---:|---:|---|
| ecommerce platform b2b | 1900 | 49 | commercial |
| b2b platform ecommerce | 1900 | 18 | commercial |
| ecommerce platform for b2b | 1900 | 51 | commercial |
| b2b ecommerce platform | 1900 | 18 | commercial |
| ecommerce b2b platforms | 1900 | 18 | commercial |
| ecommerce b2b platform | 1900 | 49 | commercial |
| b2b ecommerce | 880 | 38 | commercial |
| ecommerce for b2b | 880 | 38 | commercial |
| b2b and ecommerce | 880 | 24 | commercial |
| ecommerce and b2b | 880 | 14 | commercial |
| b2b ecommerce solutions | 390 | 48 | commercial |
| b2b ecommerce solution | 390 | 53 | commercial |
| b2b-ecommerce-solutions | 390 | 52 | commercial |
| ecommerce b2b examples | 320 | 9 | commercial |
| b2b ecommerce examples | 320 | 2 | commercial |
| b2b business to business ecommerce | 320 | 37 | commercial |
| b2b ecommerce example | 320 | 0 | commercial |
| examples of b2b ecommerce | 320 | 0 | informational |

## Page-specific direction

- **Hero visual (the one memorable moment):** B2B price-tier card (.pp-store) with net-30 + reorder, "Trade portal"/"ERP synced" nodes
- **Sourced stats (E-E-A-T spine, 3 cited w/ external links):** US B2B ecommerce $2.3T 2024 +10.5% (Digital Commerce 360); 56% B2B revenue digital (Statista); 3-10 buyer channels (McKinsey)
- **Industry / use-case sections (5–6, specific technical detail each):** Manufacturers, distributors/wholesalers, industrial/MRO, food & beverage, apparel/home, health & beauty
- **Internal links (up to pillar + across to siblings):** /us/services/ecommerce-development, /us/services/magento-development, /us/bigcommerce-development, /us/omnichannel-commerce

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
