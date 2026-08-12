# US Build Brief — 2026-08-12

**Every page-building agent MUST read this file end to end before writing a single line.**
It is the contract. If something here conflicts with your own instinct, this file wins.
If something here conflicts with `CLAUDE.md`, raise it, do not silently pick one.

Research backing this build: `pipeline/research/data/us4_*.csv`, scripts `dfs_us_highkd.py`,
`filter_us4.py`, `anatomy_us4.py`, `mechanism_us4.py`. Total DataForSEO spend $1.57.

---

## 0. What we learned that changes how you write

We measured 14 US buying queries against Google organic, Google AI Overviews, ChatGPT and
Perplexity on 2026-08-12. Three results matter to you:

1. **91% of the companies AI engines name do not rank in Google's top 10.** The citation layer
   is genuinely open to us despite our weak backlink profile. This is why we are building.
2. **Page anatomy did NOT predict citation.** We compared 26 real pages (cited-but-not-ranking
   vs ranking-but-not-cited). Cited pages were *shorter* (1,723 vs 3,107 median words) with
   *fewer* capability terms. So do not pad. Do not stuff jargon. Length is not the lever.
3. **Third-party listicle mentions did NOT predict citation either** (85% of AI-cited vendors
   were never named in the roundups ranking for their own query).

**What this means for you:** we do not know the magic formula, so do not fake one. Write the
clearest, most genuinely useful, most extractable page for the query. Answer the question
directly and early. Be specific enough that a model quoting you says something true and
concrete. That is the whole strategy.

**Google renders NO AI Overview on traditional web-design queries** but DOES on every AI-category
query we tested. If your page targets web design or SEO, your win is organic rank and human
conversion. If it targets an AI category, the AI Overview is live and worth writing for.

---

## 1. Writing rules (hard fails)

- **NO em dashes.** Not `—`, not `--`. Use commas, periods, colons, parentheses, or restructure.
  En dashes (`–`) in numeric ranges like "10–15 pages" are fine and correct.
- **No AI slop vocabulary.** Banned: "in today's fast-paced world", unlock, elevate, leverage,
  seamless, robust, supercharge, game-changer, dive in, "it's important to note", "when it comes
  to", "navigate the landscape", "at the end of the day", empty transitions, hedge-everything voice.
- **Anti-commodity.** If a competitor could paste your paragraph onto their own site unchanged,
  rewrite it. Every section needs a real number, a named tool, a concrete example, or an
  opinionated claim. Vague adjectives are a defect.
- **Human, conversational voice.** First and second person where natural. Talk to the reader like
  a knowledgeable person, not a brochure. Lead with the answer, then support it.
- **Reading level: 5th to 7th grade.** Verified benchmark: Unbounce Q4 2024 (464M+ visitors) found
  simple-register copy converts at 11.1%, about 56% better than dense professional register.
  Explain every piece of jargon the first time you use it.
- **NO CURRENCY VALUES ANYWHERE.** No `$`, `£`, `₹`, no "/mo", no numeric prices, no retainer
  figures. This includes inside generated images (see §5). Named tiers and scope descriptions
  ("one-time audit", "monthly retainer", "Starter / Growth / Scale") ARE allowed and expected.
  Route cost questions to a quote CTA and answer them qualitatively.
- **Never invent client names, testimonials, case-study numbers, or awards.** If you need social
  proof and have none, use a capability statement instead. Fabricated proof is a firing offence.

## 2. Page structure (in order)

1. `SiteHeader` (locale `us`)
2. **Hero** that fits one viewport, light background, never dark. Inline CTA form via
   `<HeroInlineForm region="us" source="us_<slug>_hero" />`. Right slot gets a visual.
3. **Answer-first block immediately after the hero.** The single most important question for this
   page, answered in 40 to 60 extractable words, in plain language, no preamble. This is the
   single highest-value block on the page for AI citation. Write it last, after you know the page.
4. Trust / proof row
5. Service explanation, built around the real buyer questions from the PAA data in your brief
6. **A listicle section** (numbered, "N things", scannable). AI extraction magnet.
7. **A comparison table.** Name real competitors from the SERP data in your brief, with open
   self-disclosure that we are one of the options. Never disparage. State what they are good at.
8. **Mid-page CTA.** Not optional. Most readers never reach the footer.
9. Max **ONE** dark section, mid-page or lower. Hero is never dark.
10. **FAQ: 20 to 40 questions**, grounded in the real People-Also-Ask data in your brief. Natural
    human phrasing, the way someone actually types. Use `<FAQ />` from `@/components/v2/FAQ`.
    Never invent a new FAQ style.
11. `FinalCTA`. **Do NOT use `GetFreeQuoteCTA`** (it hardcodes an em dash and price copy).
12. `SiteFooter` with `US_FOOTER_COLUMNS`

**Depth target: use the repo's OWN gate, `scripts/audit-perfect-page.mjs`:**

| profile | word band | soft ceiling | hard fail | FAQs |
|---|---|---|---|---|
| service (`/services/*`) | 2,500 to 5,000 | 5,000 to 6,000 scores half | above 6,000 | 20 |
| city (`/<city>/<service>`) | 2,000 to 4,500 | 5,000 to 6,000 scores half | above 6,000 | 20 |

An earlier version of this brief said "2,500 to 3,500", which is TIGHTER than the repo's own gate
and caused several Wave 2 agents to report an honest "miss" on a page that actually passes. Target
the band above. Do NOT pad to reach it, and do not exceed 6,000: our research found AI-cited pages
are SHORTER than ranking pages, so length past the band buys nothing and costs the audit score.

When you self-measure, know that a source-side counter scanning data arrays, JSX text and component
props OVERCOUNTS the rendered page, often badly. Report your raw number and say how you measured
it rather than claiming a pass or a miss you cannot prove. The authoritative check is
`audit-perfect-page.mjs` run against the LIVE url after deploy.

## 2b. Component traps found in Wave 1. Read this, it will save you an hour.

These are real, verified, and cost Wave 1 agents time. They are not hypothetical.

- **`TestimonialsSection` renders a currency value.** Its module-level `US_STATS` hardcodes
  `$50M+ client revenue`. It is NOT overridable by props. Your page-level currency grep will come
  back clean while the rendered page shows a dollar figure. Until Bhavesh rules on it, **do not
  add `TestimonialsSection` to a new page.** Build social proof another way.
- **`BigThreeTrustBlock variant="showcase"` hardcodes "7 Days / Website Delivery Guarantee".**
  On an SEO or AI page that reads as promising rankings in a week, which is a claim we cannot
  keep. Use `variant="statement"` on anything that is not a web-design build page.
- **`FinalCTA` now carries `id="final-cta"` itself** (fixed 2026-08-12 in both variants, because
  `FAQ.tsx`'s sidebar links there and the anchor was dead on 146 pages). **Do NOT wrap it in your
  own `<div id="final-cta">`.** Two Wave 1 agents did and produced duplicate IDs.
- **`check-tracked-imports.mjs` only scans git-TRACKED files.** Your brand-new page is untracked,
  so a green result does not mean your imports were checked. Say so in your report.
- **Do not import a module that is itself untracked.** If you need a component that does not exist
  yet, say so in your report and let the orchestrator wire it in the same commit. An import of an
  untracked file breaks CI with "Module not found" and `tsc` cannot catch it.
- **Mirroring conflict, already resolved:** `austin/seo` hand-rolls its FAQ in a page-local CSS
  file and skips `FinalCTA`. **This brief wins.** Use `<FAQ />` from `@/components/v2/FAQ` and
  `FinalCTA`. Mirror Austin for everything else. Three Wave 1 agents hit this and all resolved it
  correctly by flagging it rather than picking silently. Do the same with any conflict you find.
- **All agents in a wave SHARE one scratchpad directory.** Two agents both writing `biz2.html`
  or `notes.json` will silently clobber each other, and it presents as a mystery: one Wave 2 agent
  saw its word count jump 860 in a single edit and concluded a foreign Claude session was writing
  into its workspace. It was another agent in the same wave. **Prefix every temp file you write
  with a short tag unique to your page** (`hou_`, `stl_`, `b2b_`).
- **developer.android.com infinite-redirects into an OAuth flow if you send a browser User-Agent.**
  Drop the `-A` flag and plain curl works. Cost a Wave 2 agent real time.
- **Government and statistics sites block automated requests.** census.gov, bls.gov, fred.stlouisfed.org,
  ilga.gov and most state commerce sites return 403 or time out. Do not burn time retrying them.
  City and regional economic-development sites, and industry associations, usually do respond and
  are just as citable. If you cannot open it, you cannot cite it. Cut the claim.

## 3. Design system

- Background `bg-fj-cream` (#FAFAF7), text `text-fj-ink`
- Accent `#F05A28` for LARGE text and buttons only. For small text on orange use `#B23E13`.
  **Never white text on #F05A28 under ~18px** (fails contrast at 3.4:1).
- Never `text-fj-ink/60` for body copy. Use `/70` or darker.
- Fonts: `font-fj-display` (Plus Jakarta Sans), `font-fj-body` (Inter), `font-fj-mono` (Geist Mono)
- Cards `rounded-2xl`. Asymmetric, left-aligned layouts. No symmetric 3-col SaaS grids as the
  primary layout.
- **Banned:** gradient text, glow, particles, glassmorphism by default, spinning/count-up counters,
  ghost-card (1px border plus big shadow together), full-bleed video hero.
- Allowed tasteful modern: bento grids, layered depth shadows, clip-path reveals, soft scroll
  reveals (reduced-motion safe), light glass on nav chips only.
- Icons from Lucide. **Never emoji as icons.** That is an AI-slop tell.

## 4. Build method (compile-safe)

**MIRROR an existing page. Do not invent component props.**

- City page → mirror `src/app/austin/web-design/page.tsx` exactly (262 lines, known good).
- Service page → mirror `src/app/services/roofing-seo/page.tsx` or `src/app/web-design/page.tsx`.
- Use plain `<img>` for content images, **not** `next/image` (static export target).
- Hero image `fetchPriority="high"`, everything below fold `loading="lazy"`.
- Always set explicit `width` and `height` on images (CLS).

**You own ONLY your own new files plus your own images.** Do not touch:
`SiteHeader.tsx`, `posts.tsx`, any `sitemap*/sitemap.ts`, `public/_redirects`, `usFooterColumns.ts`,
or any other page. The orchestrator does all shared wiring centrally. If your page needs a link
from a hub, say so in your report and the orchestrator will add it.

## 5. Images

Use the shared script. Do not write your own Runware call.

```bash
node scripts/generate-page-images.mjs --slug <your-page-slug> --brief <path-to-your-image-brief.json>
```

Model is `openai:gpt-image@2` (won our head-to-head on hands and UI text). Dimensions must be
multiples of 16. The script handles auth, download, webp conversion and placement.

**Hard image rules, enforced by the script and by your review:**
- **No currency, no prices, no numbers on any screen in any image.** Our smoke test rendered a
  product grid with "$29 / $49 / $25" on it, which breaks the no-currency rule visually.
- **No metrics on screens.** A rendered "98" Lighthouse score reads as a claimed client result.
- **Pin the invented brand `NORVELL`.** Left free, the model renders real retailers (one test came
  back with EVERLANE across a storefront, which reads as a false client claim).
- Screens show image-led UI: product grids, big colour blocks, short labels ("Shop", "New").
  Dense paragraphs on a screen render as garbage on every model.
- Never make legible text the sharp-focus subject.
- Style axis that works: high-key bright, deep focus, populated, one burnt-orange accent object.
  The opposite (muted, shallow depth of field, unoccupied) produced our rejected v1 set.
- **You MUST view every generated image with the Read tool before you ship it.** Check hands,
  faces, garbled text. A bad image is worse than no image.
- AI-generated photoreal people ARE authorised (Bhavesh, 2026-08-03, reconfirmed 2026-08-12).
  They must not resemble an identifiable real person.

## 6. Schema (server-rendered inline JSON-LD)

Required on every page: `FAQPage`, `Service`, `WebPage` + `speakable`, `BreadcrumbList`.
City pages also get `LocalBusiness`/`ProfessionalService`.

- **Derive `FAQPage.mainEntity` from the SAME array the visible FAQ renders.**
  `mainEntity: FAQ_ITEMS.map(...)`. Never hand-write a second FAQ list. This drift bug is already
  live on ~114 existing pages and it is cloaking-adjacent. Before you mark done, grep your own file
  for a second FAQ array near the `ld+json` block.
- **Every schema const you declare must actually reach a `<script type="application/ld+json">` tag.**
  We have shipped consts that were declared and never rendered, and `tsc`, `validate-build` and
  `check-tracked-imports` all pass on that bug. Verify by eye.
- Set an accurate `dateModified` (freshness is weighted by Perplexity and AI Overviews).
- Include `canonical` in metadata.

## 7. E-E-A-T and citations

- Name the founder (Bhavesh Barot) where credentials are relevant.
- **2 to 3 authoritative EXTERNAL citations per page, and every URL must be fetch-verified**
  (actually curl it, confirm 200, confirm the claim is really on that page). Do not cite a
  statistic you have not personally opened. If you cannot verify it, cut it.
- Never cite a number that only exists in an AI summary.

## 8. Verification before you report done

Run these and report the real output, including failures:

```bash
npx tsc --noEmit
node scripts/validate-build.mjs
node scripts/check-tracked-imports.mjs
node scripts/audit-rulebook.mjs
```

**NEVER run `next dev`, `next build`, or `next preview`.** Local render OOMs this machine
(67GB, three hard restarts). There is no exception to this.

Also self-check, and state the result explicitly in your report:
- `grep -c '—' <your file>` must be 0
- `grep -cE '\$[0-9]|₹|£[0-9]' <your file>` must be 0
- FAQ count is 20 or more
- FAQPage schema is derived from the visible array, not duplicated
- every external citation URL returned 200 when you curled it

## 9. Your report back

Report honestly. If you could not verify a citation, say so. If a check failed, paste the output.
A page reported as done that fails a gate costs far more than an honest partial.

Include: file path, word count, FAQ count, target keyword and its volume/KD, the external
citations you verified, images generated and your visual review of each, verification command
output, and anything you want the orchestrator to wire centrally.
