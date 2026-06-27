# Page spec: /us/headless-commerce

**Status:** REBUILD  
**SEO entity:** {p['entity']}  
**Cluster(s):** headless-commerce, commercetools(new?)

> Build to `PAGE-SPEC.md` (the full standard) + `DESIGN.md` (visual system) + `PRODUCT.md` (positioning & hard rules). Worked example to mirror: `src/app/us/b2b-ecommerce/page.tsx`.

## Target keywords (weave 15–20 naturally into H1/H2s, body, FAQ)

| Keyword | Vol | KD | Intent |
|---|---:|---:|---|
| headless e-commerce | 720 | 43 | commercial |
| headless commerce | 720 | 46 | informational |
| headless e commerce | 720 | 43 | navigational |
| composable commerce | 260 | 9 | informational |
| composable-commerce | 260 | 9 | commercial |
| headless ecommerce platform | 210 | 31 | commercial |
| headless e commerce platforms | 210 | 29 | commercial |
| headless commerce platforms | 210 | 23 | commercial |
| headless e commerce platform | 210 | 30 | commercial |
| headless commerce platform | 210 | 23 | navigational |
| what is headless commerce | 210 | 42 | informational |
| shopify headless commerce | 170 | 23 | commercial |
| composable commerce platform | 140 | 0 | commercial |
| composable commerce platforms | 140 | 1 | commercial |
| what is composable commerce | 110 | 8 | informational |
| headless commerce solutions | 110 | 15 | navigational |
| shopify plus headless commerce | 110 | 27 | commercial |
| headless commerce solution | 110 | 14 | navigational |

## Page-specific direction

- **Hero visual (the one memorable moment):** .pp-arch front-end→API→back-end layered diagram (already built); add edge/CDN + channels fan-out
- **Sourced stats (E-E-A-T spine, 3 cited w/ external links):** Find + cite 3: headless/composable adoption growth, performance (LCP/Core Web Vitals) conversion lift, MACH/composable market size (Gartner/commercetools/Deloitte). VERIFY via WebSearch.
- **Industry / use-case sections (5–6, specific technical detail each):** High-traffic DTC, content-heavy brands, multi-channel/IoT, enterprise replatformers, marketplaces, brands needing custom UX
- **Internal links (up to pillar + across to siblings):** /us/services/ecommerce-development, /us/bigcommerce-development, /us/commerceflo, /us/best-ecommerce-platforms

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
