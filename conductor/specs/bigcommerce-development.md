# Page spec: /us/bigcommerce-development

**Status:** REBUILD  
**SEO entity:** {p['entity']}  
**Cluster(s):** bigcommerce-development

> Build to `PAGE-SPEC.md` (the full standard) + `DESIGN.md` (visual system) + `PRODUCT.md` (positioning & hard rules). Worked example to mirror: `src/app/us/b2b-ecommerce/page.tsx`.

## Target keywords (weave 15–20 naturally into H1/H2s, body, FAQ)

| Keyword | Vol | KD | Intent |
|---|---:|---:|---|
| bigcommerce austin | 1000 | 24 | commercial |
| bigcommerce ecommerce platform | 1000 | 44 | commercial |
| bigcommerce ecommerce platforms | 1000 | 28 | commercial |
| bigcommerce austin texas | 1000 | 43 | commercial |
| bigcommerce pricing | 590 | 14 | commercial |
| pricing for bigcommerce | 590 | 14 | informational |
| pricing bigcommerce | 590 | 14 | commercial |
| bigcommerce api | 390 | 14 | commercial |
| bigcommerce apis | 390 | 14 | commercial |
| api bigcommerce | 390 | 14 | commercial |
| bigcommerce dropshipping | 320 | 15 | commercial |
| bigcommerce newsletter | 320 | 1 | informational |
| apps bigcommerce | 320 | 8 | navigational |
| bigcommerce for developers | 320 | 15 | commercial |
| bigcommerce developers | 320 | 15 | commercial |
| dropship bigcommerce | 320 | 7 | commercial |
| apps for bigcommerce | 320 | 8 | commercial |
| dropshipping bigcommerce | 320 | 6 | commercial |

## Page-specific direction

- **Hero visual (the one memorable moment):** .pp-store BigCommerce tiers OR an open-SaaS API diagram; keep distinct from b2b (use a storefront+headless-API split visual)
- **Sourced stats (E-E-A-T spine, 3 cited w/ external links):** Find + cite 3: BigCommerce market share / mid-market adoption, open-SaaS TCO vs platform fees, B2B Edition adoption. VERIFY via WebSearch (BuiltWith/BigCommerce reports).
- **Industry / use-case sections (5–6, specific technical detail each):** Mid-market DTC, B2B (B2B Edition), multi-storefront/multi-currency, high-SKU catalogs, headless BigCommerce, replatformers from Magento
- **Internal links (up to pillar + across to siblings):** /us/services/ecommerce-development, /us/headless-commerce, /us/b2b-ecommerce, /us/best-ecommerce-platforms

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
