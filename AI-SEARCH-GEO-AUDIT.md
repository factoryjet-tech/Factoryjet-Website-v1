# FactoryJet — AI Search / GEO Audit

**Date:** 2026-07-07 · **Branch:** NextJS · **Scope:** whole site (181 canonical routes)
**Goal:** maximise citations from ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, Copilot.
**Framework:** GEO 3 Pillars — Structure (extractable) · Authority (citable) · Presence (discoverable).
**Confidence tags:** 🟢 verified in code · 🟡 pattern-based · 🔴 assumed.

---

## Bottom line

FactoryJet is **top-decile for AI-search readiness.** The foundations that most sites lack are already here: static-HTML rendering, AI crawlers explicitly allowed, deep structured data, and a sophisticated `llms.txt`. **The gaps are refinements, not rebuilds** — and the single highest-leverage fix is not schema, it's **accuracy drift**: `llms.txt` is currently feeding AI systems three facts we already corrected on the site.

### Scorecard

| Pillar | Grade | Why |
|---|---|---|
| **1 — Structure / Extractability** | **A** | 1,038 Q&A pairs · 67 HowTo + 332 HowToStep · 167 FAQPage · 87 Speakable · definition-style "Citation-Ready Facts" in llms.txt |
| **2 — Authority / Entity** | **B−** | `sameAs` is thin and partly broken; no canonical `@id` Organization node; but Person/author E-E-A-T exists and the blog already targets GEO topics |
| **3 — Presence / Discoverability** | **A** | `output: 'export'` static HTML · robots.ts allows all major AI bots · llms.txt present · comprehensive multi-market sitemaps |

---

## What's already excellent (do not touch)

- 🟢 **Bots get real HTML.** `next.config` uses `output: 'export'` in production and only **1 of 186** `page.tsx` files is `"use client"`. AI crawlers see fully-rendered content — no JavaScript-execution barrier. This is the #1 thing most sites get wrong; FactoryJet gets it right.
- 🟢 **AI crawlers are explicitly welcomed.** [`src/app/robots.ts`](src/app/robots.ts) allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, Applebot-Extended — and *blocks* the low-value scrapers (CCBot, Cohere-ai, Bytespider, Amazonbot, Diffbot). Correct posture.
- 🟢 **Extractable content everywhere.** FAQPage on ~167 pages, HowTo step markup, BreadcrumbList, SpeakableSpecification. This is exactly the block structure AI lifts.
- 🟢 **`llms.txt` exists and is genuinely good** — 636 lines with an explicit "Citation-Ready Facts" Q&A section and a Crawl Policy. Better than 99% of B2B sites. (It just has three stale facts — see P0.)
- 🟢 **The blog already targets GEO queries** — e.g. "how to show up in Google AI Overviews", "is SEO dead 2026 AI search data", "GEO cost small business 2026". Article schema is present on blog + case studies.

---

## P0 — Fix accuracy drift (highest leverage, lowest effort)

**What:** `llms.txt` — the asset AI systems cite most directly — currently contradicts the corrected site on three facts:

1. 🟢 **Fabricated review count.** Line 616: *"4.9/5 average rating across **150+ client reviews**."* This is the exact claim removed from 57 on-site spots on 2026-07-07. `llms.txt` explicitly invites citation of it → AI will repeat "150+ reviews" as fact.
2. 🟢 **Retired pricing framing.** Lines 440/604/622: *"fixed and published upfront"* / *"publishes fixed pricing upfront without requiring a discovery call"* — the "published pricing" claim removed in `f23e97a`.
3. 🟢 **Stale `/us/*` URLs.** The URL index (lines 466–556) lists dozens of `/us/...` paths that now **301-redirect** to root (confirmed in `public/_redirects`, e.g. `/us/austin → /austin/web-design`). We're handing AI a list of redirecting URLs.

**Why:** AI systems cross-reference `llms.txt`, JSON-LD, and page copy. When they disagree, citation confidence drops *and* the model may surface the wrong (fabricated) number. `llms.txt` is the highest-trust, lowest-cost surface to get exactly right.

**How:** Correct `llms.txt` (reviews count → "4.9/5 average client rating"; pricing → quote-based, indicative ranges; URLs → canonical root paths), then build `llms-full.txt` from the corrected facts. **Owner: Claude. Status: in progress this session.**

---

## P1 — Entity consolidation (the real GEO upside)

**A. Fix the self-referential `sameAs` bug.** 🟢
13 SEO pages emit `sameAs: ['https://factoryjet.com']` — pointing the entity at *itself*, which is meaningless. Files: `src/app/seo/{bangalore,chennai,pune,mumbai,hyderabad,delhi}/page.tsx` and `src/app/services/{small-business-seo,seo-audit,ecommerce-seo,shopify-seo,ai-seo,local-seo,seo}/page.tsx`.

**B. Enrich the Organization `sameAs`.** 🟢
The canonical Organization ([`layout.tsx`](src/app/layout.tsx)) links only LinkedIn, Instagram, Facebook, Twitter. For a B2B services firm, the **directory/review profiles are the entity-disambiguation goldmine**: Clutch, GoodFirms, SoftwareSuggest, DesignRush, Crunchbase. These exist (confirmed by founder) but aren't in `sameAs`.
- **Why:** `sameAs` is *the* signal AI/knowledge-graph systems use to resolve "FactoryJet" to one trusted entity and corroborate its facts across the web. Thin `sameAs` = weak entity = fewer confident citations.
- **How:** Add the real profile URLs to a single Organization node. **Blocker: need the exact profile URLs from founder.**

**C. Consolidate to one canonical Organization node.** 🟡
Organization is redefined **168 times** across pages with divergent `sameAs` (4-profile / LinkedIn-only / self-referential). Best practice: define once with `@id: "https://factoryjet.com/#organization"` (rich sameAs, founder, contactPoint, foundingDate 2014, address) and reference it by `@id` from every Service/WebPage/Article `provider`/`publisher`. Reduces contradiction, strengthens the single entity. *Medium effort — a shared `orgSchema` constant + @id references.*

**D. Founder E-E-A-T.** 🟢
Person schema appears 30× and there's an `/author/[slug]` system + `/about`. Ensure Bhavesh's Person node has full `sameAs` (LinkedIn + X), `jobTitle`, and is wired as `founder`/`author` of the Organization `@id`. Named, credentialed authorship is a citation signal.

---

## P2 — Targeted additions

- **Commerceflo `SoftwareApplication` schema.** 🟢 `/commerceflo` is positioned as an AI commerce *product* but emits no SoftwareApplication/Product schema (only `services/healthcare-seo` uses SoftwareApplication anywhere). Add `SoftwareApplication` (name, applicationCategory: BusinessApplication, operatingSystem: Web, offers, featureList, provider→Org @id) → eligibility for "AI commerce tools / Shopify Plus alternatives / AI store operator" AI answers. Directly serves the Commerceflo positioning.
- **Glossary + `DefinedTerm` schema.** 🟢 Zero DefinedTerm markup. "What is GEO / AEO / headless commerce / Shopify Plus / unified commerce" is the highest-frequency AI-extraction pattern. A `/glossary` with `DefinedTermSet` + `DefinedTerm` per entry is a citation magnet and reinforces topical authority. *New content — scope as its own task.*
- **Statistic attribution.** 🟡 First-party facts (500+ projects, 4.9/5, 7-day delivery) are strong but read as unsourced. Where a claim *can* carry a date/source ("as of 2026", "across 500+ projects on 4 continents"), add it — attributed specifics out-cite naked ones.
- **HowTo `@id` + Speakable coverage.** 🟡 Already strong; extend Speakable to the FAQ answers on the flagship service pages that don't yet have it.

---

## Monitoring (Mode 3)

- **Weekly (~20 min):** test the top target queries on Perplexity + ChatGPT (web) — e.g. "best AI SEO agency", "AI commerce operator", "Shopify developer for SMB", "how much does a website cost 2026". Log: cited y/n, rank, which text was lifted, which competitors appear.
- **GSC:** filter Performance by Search type → **AI Overviews** to see which queries/pages already earn AI-Overview impressions.
- **Cloudflare logs:** watch GPTBot/PerplexityBot/ClaudeBot crawl frequency monthly — rising crawl = rising citation surface.

---

## Priority order

1. **P0 — llms.txt accuracy fix + `llms-full.txt` build** *(this session)*
2. **P1A/B — sameAs bug fix + profile enrichment** *(fast; needs profile URLs)*
3. **P1C — canonical Organization `@id` node** *(medium refactor)*
4. **P2 — Commerceflo SoftwareApplication; glossary + DefinedTerm** *(each its own task)*
5. **Monitoring cadence** *(ongoing)*
