# Page spec: /us/best-ecommerce-platforms

**Status:** NEW (comparison hub)  
**SEO entity:** {p['entity']}  
**Cluster(s):** ecommerce-platforms

> Build to `PAGE-SPEC.md` (the full standard) + `DESIGN.md` (visual system) + `PRODUCT.md` (positioning & hard rules). Worked example to mirror: `src/app/us/b2b-ecommerce/page.tsx`.

## Target keywords (weave 15–20 naturally into H1/H2s, body, FAQ)

| Keyword | Vol | KD | Intent |
|---|---:|---:|---|
| ecommerce platform | 18100 | 31 | commercial |
| ecommerce business platform | 9900 | 48 | commercial |
| ecommerce platform for business | 9900 | 30 | commercial |
| ecommerce platform business | 9900 | 41 | commercial |
| ecommerce platform in india | 4400 | 25 | commercial |
| cloud based ecommerce platform | 4400 | 12 | commercial |
| indian ecommerce platform | 4400 | 2 | commercial |
| india ecommerce platform | 4400 | 2 | commercial |
| ecommerce platform india | 4400 | 24 | commercial |
| ecommerce platform small business | 1900 | 18 | commercial |
| ecommerce platform for small businesses | 1900 | 18 | commercial |
| ecommerce platform for small business | 1900 | 18 | commercial |
| platform for ecommerce | 1600 | 31 | commercial |
| platform ecommerce | 1600 | 31 | commercial |
| best ecommerce platform | 1300 | 29 | commercial |
| best platform for ecommerce | 1300 | 54 | commercial |
| ecommerce best platform | 1300 | 23 | commercial |
| ecommerce platform for online store | 1300 | 68 | commercial |

## Page-specific direction

- **Hero visual (the one memorable moment):** Platform comparison matrix as the hero device: a clean multi-platform scorecard (Shopify/BigCommerce/Adobe/SFCC/Woo) (new .platpage visual)
- **Sourced stats (E-E-A-T spine, 3 cited w/ external links):** Find + cite 3: platform market-share distribution (BuiltWith/Statista), SMB vs enterprise platform split, replatform frequency. VERIFY via WebSearch. This page is the comparison hub: lead with an honest, original matrix.
- **Industry / use-case sections (5–6, specific technical detail each):** (Use buyer scenarios instead of industries): first store, replatforming, DTC scaling, B2B, enterprise, headless-ready, budget-conscious
- **Internal links (up to pillar + across to siblings):** /us/services/ecommerce-development, /us/bigcommerce-development, /us/headless-commerce, /us/b2b-ecommerce, /us/salesforce-commerce-cloud-development

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
