# Page spec: /us/commerceflo

**Status:** REBUILD  
**SEO entity:** {p['entity']}  
**Cluster(s):** commerceflo, ecommerce-development(solutions)

> Build to `PAGE-SPEC.md` (the full standard) + `DESIGN.md` (visual system) + `PRODUCT.md` (positioning & hard rules). Worked example to mirror: `src/app/us/b2b-ecommerce/page.tsx`.

## Target keywords (weave 15–20 naturally into H1/H2s, body, FAQ)

| Keyword | Vol | KD | Intent |
|---|---:|---:|---|
| ecommerce business solutions | 590 | 6 | commercial |
| solutions for ecommerce | 480 | 26 | commercial |
| ecommerce solutions | 480 | 25 | commercial |
| shipping solutions for ecommerce | 480 | 17 | commercial |
| ecommerce shipping solutions | 480 | 17 | commercial |
| solutions ecommerce | 480 | 22 | commercial |
| ecommerce it solutions | 480 | 25 | commercial |
| dhl ecommerce solutions | 390 | 36 | navigational |
| ecommerce fulfillment solutions | 390 | 22 | commercial |
| unified commerce | 320 | 4 | navigational |
| unified commerce platforms | 210 | 3 | commercial |
| unified commerce platform | 210 | 3 | navigational |
| payment solutions ecommerce | 170 | 55 | commercial |
| ecommerce software solutions | 170 | 41 | commercial |
| payment solutions for ecommerce | 170 | 6 | commercial |
| ecommerce payment solutions | 170 | 10 | commercial |
| dhl ecommerce solutions distribution center cak | 170 | 0 | navigational |
| advantage unified commerce | 140 | 9 | navigational |

## Page-specific direction

- **Hero visual (the one memorable moment):** .pp-core orange engine with unified catalog/inventory/orders ring (already built); keep subtle, product-led
- **Sourced stats (E-E-A-T spine, 3 cited w/ external links):** Find + cite 3: cost/fragmentation of running multiple disconnected systems, inventory-accuracy impact on sales, unified-commerce adoption (RSR/Square/Shopify reports). VERIFY via WebSearch. Keep Commerceflo as ONE engine option, never overclaim.
- **Industry / use-case sections (5–6, specific technical detail each):** Multi-channel DTC, DTC+B2B hybrid, multi-location, marketplace+own-store sellers, replatformers consolidating systems
- **Internal links (up to pillar + across to siblings):** /us/omnichannel-commerce, /us/headless-commerce, /us/b2b-ecommerce, /us/services/ecommerce-development

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
