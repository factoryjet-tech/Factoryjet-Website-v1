# FactoryJet Page Publishing Standard

**Status:** Mandatory gate. No page (hub, service, city, or blog) is published unless it passes every item below. This applies to work done by humans, by Claude, and by any subagent. Every page design spec must reference this file and every implementation must verify against it.

**Owner:** Bhavesh Barot. **Last updated:** 2026-07-11.

---

## 0. Before you write a line

1. Run real keyword + question research for the page via the DataForSEO pipeline (`pipeline/research/`). Do not guess volumes or difficulty. Every keyword and number cited must trace to a real data file.
2. Produce a content pack for the page: keyword map, answer-first block, listicles, 20+ FAQs, E-E-A-T signals, GEO/AEO tactics, section outline. Save it under `pipeline/research/content-packs/` (or the page spec).

## 1. Search + AI-citation (the reason the page exists)

- [ ] **10 to 30 real, high-value keywords** mapped to the page and placed naturally across the copy (primary, secondary, long-tail, near-me, city, and question variants). No stuffing. Every keyword traces to DataForSEO data.
- [ ] **Answer-first block right after the hero.** The single most important question for the page, answered in 40 to 65 words, self-contained and extractable, leading with the direct answer. This is the block that wins AI citations and featured snippets.
- [ ] **Minimum 20 FAQs** written in natural, human, conversational language (how a real buyer asks), each answer 40 to 75 words and self-contained. Mirrored exactly into FAQPage JSON-LD.
- [ ] **At least 2 listicles** (numbered or labelled lists) for scannability and machine extraction.
- [ ] Built to get cited by ChatGPT, Claude, Perplexity, and Google AI Overviews: self-contained factual sentences, clear definitions, a comparison, and stat lines. This is GEO/AEO and it is first-class, not an afterthought.
- [ ] Complete on-page SEO: one `<h1>`, keyword-true title (<=60 chars) and meta description (<=155 chars), logical heading hierarchy, descriptive internal anchor text.

## 2. Structured data (server-rendered JSON-LD in the initial HTML)

- [ ] `Organization` (site-wide, already in layout) present.
- [ ] `Service` (with `OfferCatalog`) and/or `ProfessionalService` / `LocalBusiness` for local pages, with correct `areaServed`.
- [ ] `FAQPage` mirroring the on-page FAQ exactly.
- [ ] `BreadcrumbList`.
- [ ] Injected via the `JsonLd` component or an inline `<script type="application/ld+json">`. Never `next/script`. Must be in the server HTML (verifiable with view-source), because AI crawlers do not run JS.

## 3. E-E-A-T on every page

- [ ] Experience and Expertise shown with real specifics: named founder (Bhavesh Barot), real service depth, named tech, real methodology. No vague claims.
- [ ] Authoritativeness: linked case studies, proof points, recognition where real.
- [ ] Trust: transparent pricing posture, clear contact path, honest comparisons. Never invent statistics, clients, or awards.

## 4. Writing rules (see memory `factoryjet-writing-style-rules`)

- [ ] **Zero em-dash characters (U+2014 "—").** Use commas, periods, colons, or parentheses.
- [ ] No AI-slop vocabulary: unlock, elevate, leverage, seamless, robust, supercharge, game-changer, dive in, "in today's...", "it's important to note", "when it comes to", "in conclusion", "rest assured", "look no further".
- [ ] Anti-commodity: distinct point of view and India/market-specific specifics. If the copy reads interchangeably with any other agency, rewrite it.
- [ ] Human, conversational voice. Lead with the answer, then support it. Concrete over abstract.

## 5. Design + imagery (see `DESIGN.md`, `CLAUDE.md`)

- [ ] **Real-life stock photography** (authentic imagery) plus interactive elements to make the page feel alive. Optimized (width/height set, lazy where below the fold, descriptive alt).
- [ ] Never AI-generated photorealistic people, and never stock "neural network / circuit board" clip art.
- [ ] Cream `#FAFAF7` background dominates. Hero is never dark. Max 1 to 2 dark sections, mid or lower page.
- [ ] Type system: Plus Jakarta Sans (display, `.fj-display`) + Inter (body) + Geist Mono (eyebrow). No Clash Display (retired), no Roboto/Poppins/DM Sans/Manrope.
- [ ] Left-aligned, asymmetric layouts. No gradient text, glow, particles, glassmorphism over busy backgrounds, or spinning/count-up-on-scroll counters.

## 6. Launch-ready (organic traffic from day one)

- [ ] Indexable (`robots: index, follow`), canonical set, `hreflang` alternates including `x-default`.
- [ ] Added to the correct sitemap.
- [ ] Internal links IN (at least 2 real inbound links from relevant pages so the page is not orphaned) and OUT (to related service/city pages).
- [ ] Geo/locale wiring correct (for India pages: `locale="in"` chrome, geo-routing rule with a US twin, footer/nav entries).

## 7. Verification (respect the local OOM constraint)

Do not run `next dev` / `next build` / `next preview` locally (memory: `factoryjet-local-render-oom-hazard`). Verify with:

- [ ] `npx tsc --noEmit` clean for the new/edited files.
- [ ] `node scripts/test-geo-redirect.mjs` green (when geo rules change).
- [ ] JSON-LD is valid and present in server HTML.
- [ ] Manual static review against this checklist.

---

**Gate:** if any box is unchecked, the page is not done. A page that fails this standard is a liability, not an asset.
