# Design Spec — India Digital Marketing Hub (`/digital-marketing`)

**Date:** 2026-07-11
**Author:** Bhavesh Barot (with Claude Code, co-founder mode)
**Status:** Approved direction; scope = hub page only.
**Source of truth:** `pipeline/research/TOPIC-STRATEGY.md` (DataForSEO + GSC research, 2026-07-11).

---

## 2026-07-24 UPDATE — overrides (these win over anything below)

Reviving this hub as Sprint 1 of the organic lead engine (`docs/superpowers/specs/2026-07-24-organic-growth-engine-design.md`). Bhavesh's build directives:

- **NO PRICING ANYWHERE.** Remove the `PricingTiers` section entirely (§6 item 10). Strip every pricing/INR reference from the metadata (§5), hero lead + trustItems (§6.2), and the ComparisonTable (§6.9 — replace the "INR pricing" row with a non-price differentiator such as "transparent scope / senior team ownership"). No numbers, no "affordable", no cost framing, no "starting at". Value is proven by outcomes, process, and proof — never price.
- **FAQ: 20+ minimum**, natural human conversational voice, each grounded in **real DataForSEO People-Also-Ask + related-search data** pulled for the India digital-marketing terms (not invented). Mirror all of them into `FAQPage` JSON-LD.
- **GEO / AI-citation first:** answer-first BLUF block right after the hero (the direct 2-3 sentence answer to "best digital marketing agency in India"); every H2 phrased as a real query; concise, extractable, citable answers so ChatGPT / Gemini / Claude / Perplexity / DeepSeek / Google AI Overviews quote us. Add `Organization`/`ProfessionalService` + `Service` + `FAQPage` + `BreadcrumbList` JSON-LD, server-rendered in initial HTML.
- **E-E-A-T:** real author (Bhavesh Barot) with credentials, real/defensible proof numbers only, genuine experience signals, outbound citations to authoritative sources where claims are made.
- **Anti-commodity + anti-AI-slop (critical):** no generic "in today's digital world" filler, no em dashes, no commoditized agency boilerplate. Every section must say something a competitor's page does not. Google down-ranks and LLMs skip commodity content.
- **Format for SERP features:** include a comparison table and at least one listicle-style block (both are AI-Overview and featured-snippet magnets).
- Must pass `docs/PUBLISHING-STANDARD.md` in full.

---

## 1. Why this page

The largest low-difficulty, uncovered India demand in the research is the digital-marketing category, and FactoryJet has **no page for it**:

| Keyword | Vol/mo | KD | Notes |
|---|---:|---:|---|
| digital marketing agency near me | 12,100 | 6 | partial (near-me intent) |
| best digital marketing agency in india | 5,400 | 9 | **primary national target** |
| digital marketing agency india / digital marketing services | 1k–5k | ~9–20 | secondary |

Beyond new traffic, this hub is an **internal-link authority hub**: it links down into the existing (and currently under-linked) India clusters — `/seo/*`, `/web-design/*`, `/services/ecommerce-development/*`, `/services/ai-agent-development` — addressing the orphaning/internal-linking weakness flagged in the SEO audit.

**Anti-goal (explicit):** do NOT build thin, templated city pages. The research proved FactoryJet's templated US city pages are an "impression mirage" (rank ~pos 22, 0.07% CTR). This build is a single, bespoke, content-rich hub. City pages are a separate future task, only if justified.

## 2. Scope

**In scope:** one page — the India digital-marketing hub — plus the India-integration wiring that every India page requires.
**Out of scope (future tasks):** `/digital-marketing/{city}` city pages; any US digital-marketing page; optimizing existing AI/city pages.

## 3. Architecture decision

**Static per-page (Model A)** — matches every existing India page (`/seo/*`, `/web-design/*`). Rejected Model B (dynamic `[city]`+JSON, the UK pattern) because (a) it would introduce a second pattern into India, and (b) templating is exactly the thin-content failure the research warns against. A hub is inherently one bespoke page, so static is the correct and consistent choice.

## 4. URL, file, locale

- **URL (canonical):** `https://factoryjet.com/digital-marketing`
- **File:** `src/app/digital-marketing/page.tsx` (static; `export const metadata: Metadata`, no dynamic params)
- **Locale:** India-owned. `<SiteHeader locale="in" />` and `<SiteFooter locale="in" />`; `<HeroInlineForm region="in" source="in_digital_marketing_hero" />`; OpenGraph `locale: 'en_IN'`.
- Font/design tokens: use `.fj-display` / `font-fj-display` (resolves to **Plus Jakarta Sans**, not Clash Display — the display font was pivoted). Cream `#FAFAF7` background; inline accent orange `#F05A28` (matching existing pages, not the `#FF6B35` token). Max **one** dark section. No gradient text/glow/particles/spinning counters (per CLAUDE.md non-negotiables).

## 5. Metadata

```
title:        'Digital Marketing Agency in India — SEO, Web, Ecommerce & AI | FactoryJet'
description:   references "best digital marketing agency in India", integrated growth, measurable ROI, INR pricing
openGraph:    type website, siteName FactoryJet, url .../digital-marketing, locale en_IN, image (existing OG asset)
twitter:      summary_large_image
alternates.canonical: https://factoryjet.com/digital-marketing
alternates.languages: digitalMarketingHubAlternates  (new entry in hreflangMap.ts, see §8)
robots:       index/follow true (+ googleBot block, matching sibling India pages)
```

## 6. Page composition (all server components from `src/components/v2/`)

Ordered top→bottom. Each entry: component + content intent. Copy is bespoke and India-specific; no lorem, no templated city filler.

1. **SiteHeader** — `locale="in"`.
2. **Hero** — `eyebrow="Digital Marketing Agency · India"`; `headline="A Digital Marketing Agency in India Built for Measurable Growth"` (confident plain statement, no italic emphasis); `lead` = integrated growth across SEO, web, ecommerce, and AI, priced in INR for Indian businesses; `primaryCta` modal `region:'in'` label "Get a Free Growth Plan"; `secondaryCta` → `#pricing`; `trustItems` (e.g. "500+ businesses", "12 years", "INR pricing", "In-house team"); `formSlot=<HeroInlineForm region="in" source="in_digital_marketing_hero" />`; `accent="orange"`.
3. **LogoBar** — `tagline` ("Trusted by Indian brands and SMBs").
4. **BoringStatsRow** — 3–4 proof stats (`BoringStat[]`: value/label/microcopy) — e.g. clients served, avg traffic lift, campaigns shipped, retention. Real/defensible numbers only.
5. **ServiceExplanation** — "What an integrated digital marketing agency does" — position FactoryJet as full-funnel (SEO + website + ecommerce + AI automation) vs single-channel shops. Bespoke India framing.
6. **IndustriesGrid used as the CHANNEL / INTERNAL-LINK grid** — `sectors: IndustryCard[]` where each card is a service channel that **links to the existing India cluster** (this is the internal-link hub value):
   - SEO → `/seo` · Web Design → `/web-design` · Ecommerce Development → `/services/ecommerce-development` · AI Agents & Automation → `/services/ai-agent-development` · AI SEO → `/ai-seo` · Shopify → `/shopify-development` · WordPress → `/wordpress-development` · WhatsApp/Chatbot → `/whatsapp-chatbot`
   - each with `name`, `description`, `linkLabel`, `linkHref`/`href`, `icon`.
7. **StrategicDarkSection** (the one dark break) — `pillars: Pillar[]` (3): the strategic case — measurable ROI, integrated channels beat silos, senior in-house team not juniors.
8. **ServiceJourneyRow** — engagement process stages (audit → strategy → execution → reporting/iterate).
9. **ComparisonTable** — columns: **FactoryJet** (isFactoryJet) · Traditional Agency · Freelancer · In-house; rows on transparency, integration, INR pricing, senior team, reporting, speed. Optional `pullQuote` stat.
10. **PricingTiers** — India INR tiers (Starter / Growth / Scale). Exact prop shape read from the `PricingTiers` component at implementation; anchor `id="pricing"`.
11. **India city interlink section** — inline `<section>` in this page (NOT a new shared component — keeps scope to one file): a simple token-styled grid linking to top India city pages (`/web-design/{city}` and `/seo/{city}` for mumbai, delhi, bangalore, hyderabad, pune, chennai, ahmedabad, kolkata, …). Purpose: signal city coverage + push authority into existing city pages.
12. **TestimonialsSection** — `eyebrow`/`headline`/`sub` (testimonials are hardcoded inside the component).
13. **FAQ** — `items: FAQItem[]` (native `<details>`, feeds FAQPage schema). Target real queries: "How much does digital marketing cost in India?", "What makes the best digital marketing agency in India?", "Digital marketing agency vs freelancer — which is better?", "Do you work with small businesses?", "Which channels do you cover?", "How soon will I see results?".
14. **FinalCTA** — `variant="light"`; `headline`; `primaryCta` modal `region:'in'`; `objectionHandler`.
15. **SiteFooter** — `locale="in"`.

## 7. Structured data (server-rendered JSON-LD, in initial HTML)

Match the existing India pattern (`web-design/mumbai`): inline `<script type="application/ld+json" dangerouslySetInnerHTML>` (or the `JsonLd` component). Types:
- **ProfessionalService** — name, url, `areaServed` = India (Country) + major cities, `@id` referencing `.../#organization`, `hasOfferCatalog`.
- **Service** — "Digital Marketing", provider = FactoryJet, `areaServed` India, `hasOfferCatalog` listing the channels (SEO, web, ecommerce, AI, paid).
- **FAQPage** — mirrors the on-page FAQ items exactly.
- **BreadcrumbList** — Home → Digital Marketing (via `BreadcrumbSchema` component).

## 8. India-integration wiring (all required; a page that skips these ships broken)

1. **hreflang** — `src/data/hreflangMap.ts`: add `digitalMarketingHubAlternates = { 'en-IN': 'https://factoryjet.com/digital-marketing', 'x-default': 'https://factoryjet.com/digital-marketing' }`. Note: includes **x-default** (existing India entries omit it — a known bug; we do it right for this new entry). Import + use in page metadata.
2. **Geo-routing** — `functions/_middleware.js` `INDIA_TO_US_RULES`: add rule for `/digital-marketing` (and `/digital-marketing/` prefix, forward-compatible with future city pages) → US twin **`/services`** (confirmed). Update `scripts/test-geo-redirect.mjs` with a case asserting: US/CA human → 302 `/services`; crawler → served + `no-store`; non-NA human → served.
3. **Sitemap** — `src/app/sitemap-india/sitemap.ts`: add `/digital-marketing` canonical (hub priority consistent with `/seo`, `/web-design` hubs).
4. **Nav** — `src/components/v2/SiteHeader.tsx`: add "Digital Marketing" → `/digital-marketing` into the India nav config (`LOCALE_CONFIG.in`, e.g. `IN_WEB_SERVICES` or the services group). India nav only; never surfaces to US.
5. **Footer** — `src/components/v2/SiteFooter.tsx`: add "Digital Marketing" to `IN_COLUMNS` Services column.
6. **Inbound links (de-orphan the hub itself)** — add a contextual link to `/digital-marketing` from the `/seo` hub page and the `/web-design` hub page, so the new hub receives internal links (not just emits them).

## 9. Content principles

- Bespoke, India-specific, commercially useful copy; no templated filler; substantially unique from `/seo` and `/web-design` hubs (no duplicate-content overlap).
- Confident plain headlines in `.fj-display` (Plus Jakarta Sans 700); eyebrows in Geist Mono via `.fj-eyebrow`; body Inter.
- Numbers must be real/defensible (no invented precision). Reuse stat conventions from existing India pages.
- Accessibility: semantic headings (`Heading` component with correct `as`/`size`), one `<h1>`.

## 10. Verification (no dev server — app OOMs on local render)

- **Typecheck:** `npx tsc --noEmit` (or scoped) — new page + edited data/util files compile clean.
- **Geo unit test:** `node scripts/test-geo-redirect.mjs` passes, including the new `/digital-marketing` cases.
- **Schema/build guards:** run `scripts/validate-build.mjs` schema checks if they run without a full `next build`; otherwise validate JSON-LD by hand (valid JSON, required fields) and confirm it is server-rendered inline (not `next/script`).
- **Static review:** confirm locale props, canonical, hreflang import, no forbidden design patterns, links resolve to real routes.
- Do **not** run `next dev`/`next build`/`next preview`.

## 11. Acceptance criteria

- `/digital-marketing` renders as a static India-locale page with the full section flow in §6 and JSON-LD in §7.
- Title/H1 target the digital-marketing India terms; FAQ + schema present.
- All six wiring items (§8) done: hreflang (with x-default), geo rule + passing test, sitemap, nav, footer, ≥2 inbound internal links to the hub.
- Typecheck clean; geo test green; no forbidden design/AI-slop patterns; ≤1 dark section.
- No new shared component created (city interlink is inline); no city pages created.

## 12. Risks / open notes

- **No build verification** → higher reliance on typecheck + careful static review. Accept.
- `PricingTiers`, `BoringStatsRow`, `IndustriesGrid`, `ComparisonTable` exact prop shapes to be re-read from source at implementation to avoid prop mismatches.
- Keep hub copy clearly differentiated from `/seo` and `/web-design` hubs to avoid intra-site cannibalization.
