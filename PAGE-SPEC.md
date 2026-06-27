# PAGE-SPEC.md — US landing-page quality standard

Every US commerce/platform/service landing page must hit this bar. Derived from the deepest legacy pages (`/us/services/ecommerce-development`, `shopify-development`), upgraded to the current white/orange, decade-plus, no-pricing brand (see DESIGN.md + PRODUCT.md).

## Hard targets
- **Length: 3,000–5,000 words** of substantive, non-padded copy.
- **Keywords: top 15–20 highest-volume terms** for the page's cluster woven *naturally* into H2s, body, and FAQ (source: `research/us-ecommerce-keyword-master-2026-06-27.csv` + `us-keyword-targets-by-page-2026-06-27.md`). Never keyword-stuff.
- **Hero fits one viewport** on desktop and mobile (copy + inline lead form + one hero visual).
- **Every section is visually stunning and self-contained** (PlatformPage `.platpage` system: dot-grid hero, gradient-accent H1, stat band, bento, styled comparison tables, mono `//` labels, white/tint rhythm). No dark rooms.

## Required sections (in order)
1. **SiteHeader** (commerce mega menu).
2. **Hero** — mono eyebrow, H1 with one gradient-accent phrase, lead, **inline lead form** (`HeroInlineForm`), one distinctive CSS/SVG hero visual. Single viewport.
3. **Trust stat band** — 4 honest stats (decade-plus, DTC+B2B, platforms, ownership). No "25 years", no fabricated metrics.
4. **Answer-first "What is X?"** long-form (2–4 paras) for AEO/AI citation.
5. **Sourced industry statistics** — 3 cited market stats with **external authoritative source links** (eMarketer, US Census, Baymard, Statista, Gartner, McKinsey). This is the E-E-A-T spine.
6. **Benefits** bento (6).
7. **What we build / features** bento (6–8).
8. **Industry / use-case sections** — 5–6 verticals (fashion, health & beauty, food & beverage, home & furniture, B2B & wholesale, electronics — or the page's relevant set) with *specific technical detail* and an example outcome each. Major depth + expertise.
9. **Original comparison table** — keyword-rich, our row highlighted.
10. **How to choose / process** — numbered steps or decision checklist.
11. **Real testimonials / proof** — Bombay Petals (B2B), Belle Maison (DTC). Real only; qualitative if no verified metric.
12. **FAQ** — 15–20 answer-first Q&A mapping to real search queries, with FAQPage schema mirroring the visible content.
13. **Final CTA** (Calendly + audit modal) + internal links UP to the pillar and across to siblings.
14. **SiteFooter**.

## Schema stack (every page) — JSON-LD via next/script
- **Service** (serviceType, provider, areaServed US, audience).
- **FAQPage** (mirrors visible FAQ exactly).
- **HowTo** (the build process, 4–5 steps) — but NO "7 days / P7D"; use phase names without day counts.
- **Organization + AggregateRating** (4.9 / 150, the established site-wide claim).
- **BreadcrumbList**.

## E-E-A-T checklist
- Experience: real client work (named), specific technical detail in industry sections, decade-plus framing.
- Expertise: sourced statistics with links, platform comparisons, honest "when X is/ isn't right for you" guidance.
- Authoritativeness: founder-led ("Talk to the Founder"), AggregateRating, consistent entity + schema.
- Trust: no pricing, no geo-cheap, no fabricated metrics, no em dashes, no AI-slop verbs; honest comparisons that admit trade-offs.

## Run before commit
- `node scripts/validate-build.mjs` (build guard).
- Anti-slop: no em dashes, no slop verbs, no $ service prices.
- On Node ≥24: `npx impeccable detect <page>`.
