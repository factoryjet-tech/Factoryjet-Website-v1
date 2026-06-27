# Page spec: /us/salesforce-commerce-cloud-development

**Status:** NEW  
**SEO entity:** {p['entity']}  
**Cluster(s):** salesforce-commerce(new?)

> Build to `PAGE-SPEC.md` (the full standard) + `DESIGN.md` (visual system) + `PRODUCT.md` (positioning & hard rules). Worked example to mirror: `src/app/us/b2b-ecommerce/page.tsx`.

## Target keywords (weave 15–20 naturally into H1/H2s, body, FAQ)

| Keyword | Vol | KD | Intent |
|---|---:|---:|---|
| commerce cloud salesforce | 1900 | 23 | navigational |
| salesforce commerce cloud | 1900 | 20 | navigational |
| salesforce commerce cloud developers | 170 | 33 | navigational |
| salesforce commerce cloud developer | 170 | 39 | navigational |
| salesforce commerce cloud consulting | 90 | 0 | navigational |
| salesforce commerce cloud logo | 90 | 4 | navigational |
| salesforce commerce cloud consultant | 90 | 5 | navigational |
| ecommerce cloud solutions | 90 | 9 | commercial |
| hire salesforce commerce cloud developer | 70 | 0 | transactional |
| salesforce commerce cloud pricing | 70 | 8 | commercial |
| salesforce commerce cloud price | 70 | 8 | commercial |
| commerce cloud salesforce pricing | 70 | 8 | commercial |
| hire salesforce commerce cloud developers | 70 | 0 | commercial |
| commerce cloud pricing salesforce | 70 | 8 | commercial |
| what is salesforce commerce cloud | 70 | 17 | informational |
| salesforce commerce cloud implementation partners | 50 | 0 | commercial |
| salesforce commerce cloud development | 50 | 39 | navigational |
| salesforce commerce cloud implementation partner | 50 | 0 | commercial |

## Page-specific direction

- **Hero visual (the one memorable moment):** Enterprise commerce + CRM-data ring: storefront wired to customer 360 / order data (build a new .platpage visual)
- **Sourced stats (E-E-A-T spine, 3 cited w/ external links):** Find + cite 3: enterprise commerce market, Salesforce Commerce Cloud adoption among enterprise/Fortune brands, B2B Commerce on SFCC growth. VERIFY via WebSearch.
- **Industry / use-case sections (5–6, specific technical detail each):** Enterprise DTC, global multi-brand, B2B Commerce, high-AOV/considered purchase, retailers needing CRM+commerce unity, replatformers from legacy
- **Internal links (up to pillar + across to siblings):** /us/services/ecommerce-development, /us/b2b-ecommerce, /us/headless-commerce, /us/best-ecommerce-platforms

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
