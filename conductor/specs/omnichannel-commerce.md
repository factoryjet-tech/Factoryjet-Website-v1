# Page spec: /us/omnichannel-commerce

**Status:** REBUILD  
**SEO entity:** {p['entity']}  
**Cluster(s):** omnichannel-commerce

> Build to `PAGE-SPEC.md` (the full standard) + `DESIGN.md` (visual system) + `PRODUCT.md` (positioning & hard rules). Worked example to mirror: `src/app/us/b2b-ecommerce/page.tsx`.

## Target keywords (weave 15–20 naturally into H1/H2s, body, FAQ)

| Keyword | Vol | KD | Intent |
|---|---:|---:|---|
| omnichannel ecommerce | 320 | 7 | informational |
| ecommerce and omnichannel | 320 | 8 | informational |
| ecommerce omnichannel | 320 | 23 | informational |
| e commerce omnichannel | 320 | 12 | informational |
| e-commerce omnichannel | 320 |  | informational |
| omnichannel e-commerce | 320 | 12 | informational |
| omnichannel e commerce | 320 | 12 | informational |
| omnichannel commerce | 210 | 22 | informational |
| omnichannel ecommerce solutions | 140 | 5 | commercial |
| omni channel ecommerce solutions | 140 | 13 | commercial |
| ecommerce multichannel software | 140 | 22 | commercial |
| ecommerce multichannel | 140 | 16 | informational |
| omnichannel commerce solution | 140 | 22 | commercial |
| omnichannel commerce platform | 110 | 12 | commercial |
| omnichannel commerce platforms | 110 | 6 | commercial |
| omnichannel ecommerce platform | 90 | 0 | commercial |
| omnichannel ecommerce fulfillment | 90 | 0 | commercial |
| omnichannel e commerce platform | 90 | 9 | commercial |

## Page-specific direction

- **Hero visual (the one memorable moment):** Channel→engine constellation (reuse HeroOmnichannel motif as a .platpage CSS visual): web, POS, marketplace, social all wired to one core
- **Sourced stats (E-E-A-T spine, 3 cited w/ external links):** Find + cite 3: omnichannel retail share of sales, omnichannel vs single-channel customer value/retention, share of shoppers using multiple channels (McKinsey/Harvard Business Review/Salesforce State of Commerce). VERIFY via WebSearch before use.
- **Industry / use-case sections (5–6, specific technical detail each):** Retail+DTC, multi-location/franchise, wholesale+DTC hybrid, marketplace sellers, subscription, B2B+B2C
- **Internal links (up to pillar + across to siblings):** /us/b2b-ecommerce, /us/services/ecommerce-development, /us/headless-commerce, /us/commerceflo

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
