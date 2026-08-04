# FactoryJet session carry-over

**Paste this whole file as the first message of a fresh session.**
Written 2026-08-03. Working tree clean, everything pushed, `06c86ae` live in production.

---

## READ FIRST, IN THIS ORDER

1. `docs/AI-SEO-RULEBOOK.md`, governing doctrine. Especially §4b (measurement), §6b, §6c, §6d,
   §8 (sitewide audit), Rules 19-20.
2. `PRODUCT.md` and `DESIGN.md`, positioning and the visual contract. **`CLAUDE.md` is stale on
   two points**: the display font is Plus Jakarta Sans, not Clash Display, and the founder is
   Bhavesh Barot. Trust the code and `tailwind.config.js` over CLAUDE.md.
3. `pipeline/research/ECOMMERCE-LEADGEN-PLAN.md` §11 (build log) and
   `pipeline/research/UK-DOORWAY-RETIREMENT.md`.
4. `docs/BACKLINK-OUTREACH-PLAYBOOK.md`.

---

## STATE

Branch `NextJS`. Clean tree apart from `.claude/settings.local.json`. Nothing half-finished.
Do not re-verify the push state; start on the work below.

### Shipped this session (14 commits, `358ff9c`..`06c86ae`, all live)

| Commit | What |
|---|---|
| `358ff9c` | Sitewide rendered audit of all 447 live URLs + 4 structural fixes |
| `8bdb5ac` | Replatforming added to mega menu; 27 orphan full-bleed images fixed |
| `727234b` | Footer redesign, region switcher, India-visitor geo routing |
| `ee84e82` | 27 commerce images regenerated on GPT Image 2 + split-band layout |
| `8759be7` | **90 UK doorway pages retired** (fixed a live 404 incident) |
| `f0a5e45` | Removed a real brand name ("EVERLANE") from a generated image |
| `3792326` | CONTENT→COMMERCE diagram fix; corrected the 25-year experience claim |
| `47cd9ed` | UK city hub rebuilt: real per-city content, fake testimonials + pricing tiers removed |
| `0c89608` | `--filter` added to the rendered audit |
| `79df7a5` | h2 regression fixed, `cityDepth.ts` added, everything list-marked |
| `c9afd5f` | Real DataForSEO search data, answer-first block, comparison table, SERP competitors, PAA |
| `bc8c0ef` | Final UK city audit measurements |
| `c48ffb0` | UK national hubs: div card grids + FAQ → real lists |
| `06c86ae` | Completed the FAQ conversion on the 3 literal-FAQ hubs |

### Measured state

**15 UK city roots** (`/uk/{city}`, dynamic route → `src/lib/uk-pages/city-hub.tsx`):
words 969 → **2,196**, `<li>` 23 → **121**, h2 8 → **15**, FAQ 0 → **22**, dateModified 15/15.
Four of five rulebook metrics pass. Words still under the 2,813 median.

**10 UK national hubs**: `<li>` 36 → **61-89** (median ~85 vs 110 benchmark).

**Sitewide** (from `358ff9c` audit, n=447): words 3,445 ✅, h2 11 ✅, Person schema 100% ✅,
FAQPage 93% ✅, but `<li>` 73 ❌ and dateModified 34% ❌ (both vs benchmark).

---

## NEXT, IN PRIORITY ORDER

1. **Citation re-test ~2026-08-17.** Run `pipeline/research/dfs_citation_baseline.py` UNCHANGED and
   diff against `pipeline/research/data/citation_baseline_2026-08-03.json`. Baseline: all new pages
   0/3, `/b2b-ecommerce` control 2/3. **RAISE THE RUN COUNT**. 3 runs cannot distinguish signal from
   noise. This is the decision point for whether the capability-density thesis scales.
2. **Sitewide `<li>` density.** India city pages are the weakest segment (5 `<li>` in `<main>` on
   3,858 words). The UK fix pattern is proven and scripted: `scripts/uk-hub-lists.mjs`.
3. **Sitewide `dateModified`** at 34% vs a 56% benchmark. Only where the date is honest; stamping a
   build date on unchanged pages is a freshness lie.
4. **Backlink campaigns.** Two emails drafted: kerneltech.net and vipulpore.com both name FactoryJet
   in listicles without linking. **BHAVESH SENDS THEM, never you.**
5. Optional: `/omnichannel-commerce` and `/ai-citation-study` have no imagery from the new set.

---

## HARD RULES THAT WILL BITE YOU

**Measurement**
- Measure words and density on **RENDERED HTML**, never `wc -w` on `.tsx` (source roughly doubles it).
  This error once produced a wrong "cut 1,800 words" conclusion.
- The 110 `<li>` benchmark counts the **whole document including nav chrome**, because that is what
  `dfs_citation_anatomy.py` does to competitor pages. Our chrome is 25 `<li>` on UK pages and 65 on US
  pages, so whole-page `<li>` is not comparable between our own regions. Use whole-page to compare
  against the benchmark, `<main>`-only to judge content.

**Before every push**
- `npx tsc --noEmit`
- `node scripts/validate-build.mjs`
- `node scripts/check-tracked-imports.mjs` catches imports of untracked files. tsc CANNOT.
  This fired twice this session and would have shipped "Module not found" both times.
- `node scripts/audit-rulebook.mjs` catches schema consts declared but never rendered. Exits non-zero.
- `node scripts/footer-orphan-risk.mjs` guards 61 removed footer links.
- `node scripts/test-geo-redirect.mjs`, 30 cases over the edge middleware.

**NO local render.** `next dev/build/preview` OOMs this machine (67GB, 3 restarts). Verify via the
scripts above, then curl the LIVE url with `-H 'Cache-Control: no-cache'` and a cachebuster.
Cloudflare serves stale HTML for up to 20h; `cf-cache-status: MISS` with old content means the build
has not deployed yet, not that the cache is stale.

**Deploy**
- Explicit `git add` paths, never `-A`. Repeated `-m` flags, NOT heredocs (a heredoc hung his shell
  and silently skipped a commit). Single-quote any message containing `$`.
- End commits with `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>`. Push `origin NextJS`,
  Cloudflare builds in ~90s.
- **Stage redirects and route deletions in the SAME commit.** Splitting them put 90 UK URLs on bare
  404s in production this session.
- Never link a hub to a spoke that does not exist yet; Google caches the 404 verdict.

**Other**
- Don't poll background jobs by name. `pgrep -f` matches the waiter's own command line.
- FAQ items whose category is not in `FAQ_CATEGORIES` are silently dropped at `FAQ.tsx:136`.

---

## WRITING AND PAGE-BUILD RULES

**Voice**
- **No em dashes.** Not `--` either. Commas, colons, semicolons, periods, parentheses.
- Plain 5th-7th grade register (Unbounce: converts 11.1%, ~56% above dense professional register).
- Banned verbs: seamless, streamline, empower, unlock, elevate, robust, leverage, world-class,
  supercharge, transform, revolutionise, cutting-edge, next-generation.
- No geo-cheap framing. Never "cheaper than US/UK agencies", no offshore-cost framing.
- Never say we "run" or "operate" a client's store.
- Anti-AI-slop, anti-commodity, human conversational voice. Applies to Claude's own prose too.

**Honesty (non-negotiable)**
- **No pricing anywhere.** No figures, no tiers. Market ranges and market stats are fine.
- **Real clients only.** Bombay Petals (B2B), Belle Maison (DTC). Never fabricate testimonials or
  metrics. A four-tier pricing table and three fake testimonials were found live on 15 pages this
  session; both came straight out.
- Every quantitative claim needs a fetch-verified source. Inherited stats are NOT pre-verified stats:
  all three stats copied from `/b2b-ecommerce` turned out to be wrong.
- Experience framing is **decade-plus / "10+ years", NEVER 25 years**.
- No statistic from an AI-written research report goes into copy until traced to a primary source.
  Two Gemini reports each contained the same fabricated Unbounce statistic.

**Structure (docs/AI-SEO-RULEBOOK.md)**
- Exactly one `<h1>`, strict H1→H2→H3, no skipped levels.
- Target 2,500-3,500 rendered words, hard ceiling 5,000. Median cited page is 2,813.
- ~10+ H2. Aim 80-120 `<li>`. **Lists are the highest-signal finding in the dataset.**
- Visible FAQ, 20+ questions, conversational. FAQPage schema generated from the SAME array the page
  renders. Never hand-duplicate it.
- Answer-first block directly after the hero.
- `dateModified` kept honest. Named author + `Person` schema. 2-3 fetch-verified external citations.
- Comparison table and listicle where the topic genuinely compares or enumerates. Not mandatory.
- Depth scales with the page's role. Bloating a low-intent page to hit a number is filler.
- **One template driving many pages caps how deep they can honestly go.** Shared prose duplicates
  across every page, which is the doorway shape. Add depth as DATA, not template copy.

**Design**
- Background `#FAFAF7` cream / white. **Hero is NEVER dark.** Max 1 dark section per page.
- Orange `#F05A28` for large elements only, `#B23E13` for small text (contrast).
- Fonts: `font-fj-display` (Plus Jakarta Sans), `font-fj-body` (Inter), `font-fj-mono` (Geist Mono).
  **`Clash Display` is retired and its `@font-face` was REMOVED** (`src/index.css:6`), so any raw
  `fontFamily: 'Clash Display'` renders as browser-default sans.
- `#0052CC` "Jet Blue" is retired. No second brand colour.
- Banned: gradient text, glow, particles, spinning counters, side-stripe borders (>1px coloured
  left/right border as an accent), glassmorphism over busy backgrounds.
- AI-generated photoreal PEOPLE are **ALLOWED** (ban lifted 2026-08-03, recorded in CLAUDE.md, do not
  revert). Review every generated image for hand/face artifacts.
- Default to server components. `"use client"` only when state, effects or handlers are genuinely needed.

**Images** (see `scripts/generate-commerce-images-v3.mjs`)
- Model: **`openai:gpt-image@2`**, chosen by measured bake-off. FLUX.2 max and Seedream both produce
  malformed hands; FLUX also renders pseudo-text.
- Style: high-key white, deep focus, populated, smiling, one orange accent object.
- Screens show image-led UI with short labels only. Dense paragraphs render as garbage.
- **Pin an invented brand name** or the model renders real retailers (it produced "EVERLANE" once).
- Never put a metric in an image. A rendered "98" reads as a claimed client result.
- Alt text must describe the ACTUAL image. 27 alts were describing a deleted image set this session.

---

## CODEMOD DISCIPLINE (learned by breaking production twice this session)

1. **Walk tag depth, never regex across nested markup.**
2. **Scan forward only.** Re-searching from the string start after each edit hung in an infinite loop.
3. **Verify the RESULT, not that the script ran.** A codemod converted 4 of 20 FAQ items per page and
   produced invalid HTML (a `<div>` as a direct child of a `<ul>`); it passed tsc and shipped.
   The audit caught it because 3 pages barely moved while 7 jumped.
- `--dry` first. To undo a partial conversion, `git show <sha>^:path > path` beats normalising forward.

---

## TOOLING

- **DataForSEO**: creds in `pipeline/research/.env`, ~20 scripts there. Backlinks and Content Analysis
  both on the plan. Spend to date ~$30.
- **Runware**: key in `.env.local`. `scripts/runware-model-bakeoff.mjs` compares frontier models.
- **Audits**: `scripts/audit-rendered.mjs [--filter /uk/] [--limit N] [--out path]` measures live
  URLs the same way the competitor benchmark was measured. `scripts/audit-rulebook.mjs` is the
  source-side equivalent.
- **GSC** via MCP. **GA4** via service-account key, property 516928458. Firestore is read-locked.
- Bhavesh runs multiple concurrent Claude Code sessions on this repo. If files change that you did
  not touch, check `list_sessions` before assuming corruption.

---

## STANDING CONTEXT

- Act as technical co-founder (SEO / frontend / backend / marketing). Optimise everything for LEADS.
  Decide and ship; do not over-ask.
- **US is the current priority market**, over India, on budget grounds.
- Traffic reality: Cloudflare "traffic" is ~99% bots. Real GA4 humans are ~15-25/day and leads run
  ~15-20/month, which is healthy against real traffic. **This is a traffic problem, not a conversion
  problem.**
- Authority does NOT predict AI citation: netalico.com (557 referring domains) was cited 17x while
  outerboxdesign.com (4,718) barely appeared. We sit at 53 referring domains against an inflated
  1,799 competitor median (up to 38% of some rival profiles are rank-0 link farms).
- **Never automate link building.** Proposed once, declined with data, see Rule 20.
- `/b2b-ecommerce` is the only page this domain has ever had cited by ChatGPT (6/9, listed first).
  Apparent mechanism is named-capability density. Length and density are confounded and n is tiny.
  **Do not present it as proven.**
