# FactoryJet AI-SEO / GEO Rulebook v1.0

**Created 2026-08-02.** Every page on factoryjet.com gets audited against this, and every new page
must pass it before publish. Revisit quarterly, or sooner if a vendor changes its published guidance.

This rulebook is built from three evidence classes, kept deliberately separate because they carry
very different weight:

- 🟢 **Primary vendor statements.** What Google, OpenAI and Anthropic publish in their own docs.
- 🟡 **Measured structure of pages that are actually cited.** n=58 pages, sampled from 232 Google AI
  Overview citations across 12 commercial e-commerce queries (`dfs_citation_anatomy.py`).
- 🔵 **Our own site's measured behaviour.** `/b2b-ecommerce` cited by ChatGPT 6/9
  (`dfs_ecom_leadgen_serp.py`).

Anything not traceable to one of those three is folklore and is marked as such.

---

## 0. The single most important finding

**Google says explicitly that no AI-specific optimisation exists.** From
[Google Search Central, AI features and your website](https://developers.google.com/search/docs/appearance/ai-features):

> "There are no additional requirements to appear in AI Overviews or AI Mode, nor other special
> optimizations necessary."

> "You don't need to create new machine readable files, AI text files, or markup to appear in these
> features."

> "There's also no special schema.org structured data that you need to add."

This contradicts most of the GEO advice in circulation, including parts of the doctrine currently
sitting in the global CLAUDE.md. Treat any consultant, tool or report claiming a proprietary "AI
ranking factor" with heavy suspicion.

**What this does not mean:** it does not mean structure is irrelevant. Google's claim is that AI
features draw on the same index and the same quality signals as normal Search. So the work is
ordinary excellent SEO plus extractability, not a separate discipline. Our measured data (§3) shows
cited pages do share structural traits, but those traits are *consequences* of being good pages, not
a secret ruleset.

---

## 1. Crawler access (🟢 primary, highest confidence, cheapest to get wrong)

This is the one place where a five-minute mistake causes total invisibility on a platform.

### OpenAI ([developers.openai.com/api/docs/bots](https://developers.openai.com/api/docs/bots))

| Bot | Purpose | Citation impact |
|---|---|---|
| **OAI-SearchBot** | Powers ChatGPT search | **This is the citation gate.** "Sites that are opted out of OAI-SearchBot will not be shown in ChatGPT search answers, though can still appear as navigational links." |
| GPTBot | **Training only** | Blocking it does **not** affect ChatGPT search eligibility |
| ChatGPT-User | User-triggered fetches | "ChatGPT-User is not used to determine whether content may appear in Search." |
| OAI-AdsBot | Ad safety validation | None |

robots.txt changes take roughly 24 hours to take effect.

### Anthropic ([support.claude.com](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler))

| Bot | Purpose |
|---|---|
| **Claude-SearchBot** | "navigates the web to improve search result quality for users" |
| **Claude-User** | user-initiated web access; disabling "may reduce your site's visibility for user-directed web search" |
| ClaudeBot | **Training only** |

Note the trap: **ClaudeBot is the training bot, not the search bot.** Naming only ClaudeBot in
robots.txt and assuming Claude citation is covered is wrong.

### Our current state (audited 2026-08-02)

Named and allowed: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot,
Google-Extended, Applebot-Extended, meta-externalagent.
Blocked (deliberate, training-only): CCBot, Cohere-ai, Bytespider, Amazonbot, Diffbot, Omgilibot,
Timpibot, ImagesiftBot, img2dataset.

**Gaps to fix:**
1. **`Claude-SearchBot` is not named.** It currently falls through to `User-agent: *` (which allows),
   so it is not blocked, but doctrine says never let a retrieval bot rely on a wildcard.
2. **`Claude-User` is not named.** Same reasoning; Anthropic explicitly ties it to search visibility.
3. **`Perplexity-User` is not named** (only PerplexityBot is).
4. **Internal contradiction:** the file declares `Content-Signal: search=yes, ai-input=yes,
   ai-train=no` while explicitly allowing GPTBot, which is OpenAI's *training* crawler. Also, GPTBot
   sits under a comment header reading "AI retrieval / search bots", which mislabels it. Decide the
   policy and make the file say one thing.

### Rule

> Name every retrieval bot explicitly. Never let one inherit from a wildcard. Keep training-bot
> policy and the `Content-Signal` line consistent with each other. Re-audit quarterly, since vendors
> add bots (Claude-SearchBot and Claude-User did not exist under those names in early 2025).

---

## 2. What actually gets cited (🟡 measured, n=58)

Sampled from 232 Google AI Overview citations across 12 commercial queries (`b2b ecommerce platform`,
`ecommerce for manufacturers`, `magento to shopify migration`, `shopify development cost`,
`hire ecommerce developer`, and 7 more). Publisher/marketplace domains excluded so the sample
reflects pages a services company could realistically compete with.

| Trait | Result | Read |
|---|---|---|
| **Median word count** | **2,813** | Not 5,000. Not 8,000. |
| Word distribution | 25 of 58 sit at 2,000-3,500; only **3 exceed 6,000** | Long does not win |
| Median H2 count | 11 | Substantial sectioning |
| **Median list items** | **110** | The strongest single signal in the dataset |
| Visible FAQ section | **72%** | Near-universal |
| FAQPage schema | **41%** | Common but clearly **not required** |
| Any `<table>` | 32% | Helpful, not necessary |
| Listicle headline ("top 10…") | **18%** | Minority pattern for commercial queries |
| `dateModified` present | 56% | Meaningful edge |
| Exactly one `<h1>` | 55/58 | Basic hygiene, near-universal |
| Zero `<h1>` | 0/58 | Nobody cited omits it |

Schema types across cited pages: Organization 42, ImageObject 38, ListItem 37, BreadcrumbList 36,
WebPage 33, WebSite 32, FAQPage 24, **Person 24**, Article 14, AggregateRating 11.

Two things worth pulling out:

- **Lists beat prose, decisively.** A median of 110 `<li>` elements per cited page is the most
  striking number here. It aligns with Google's "keep important content in textual form" and with how
  extraction works: a list item is a self-contained retrievable unit.
- **`Person` schema on 24 of 58.** Named-author attribution appears on 41% of cited pages, the same
  rate as FAQPage. This is the E-E-A-T signal we are weakest on.

### What this data does NOT support

- **FAQPage schema is not a requirement.** 59% of cited pages don't have it. Ship it because it is
  cheap and honest, not because it buys citations.
- **Listicles are not the dominant format** for commercial service queries. Yesterday's standard
  lists a listicle as mandatory on every page; the data says 18%. Recommend downgrading to
  "use where the topic genuinely enumerates," not a blanket requirement.
- **Comparison tables are not mandatory** (32%).

---

## 3. Where our own evidence adds something (🔵)

`/b2b-ecommerce` is cited by ChatGPT **6 of 9 runs** for "Which companies build B2B ecommerce portals
with ERP integration?", listed first, with a direct link. Sibling pages `/headless-commerce` and
`/omnichannel-commerce` score 0/4. The distinguishing variable we could measure was **named-capability
density**: specific capability nouns and real third-party system names per 1,000 words
(30.1 vs 18.7 vs 14.6).

**Status: promising hypothesis, not established.** n=3 pages, ~21 LLM runs, and the metric is one
I defined. It is also confounded with answer-pool competitiveness (few agencies write about ERP-synced
B2B portals; many write about headless).

**It does not license unlimited length.** At the time it earned 6/9 the page was 5,388 words. I then
took it to 6,846, which moves it from a bucket holding 14 of 58 cited pages into one holding 3.
**That was a mistake and should be partially reverted** (see §5).

---

## 4. The rules

### Tier A — non-negotiable (🟢 or near-universal in 🟡)

1. **Exactly one `<h1>`, strict H1→H2→H3 descent, no skipped levels.** 55/58 cited pages; 0 omit H1.
2. **Every retrieval bot named explicitly in robots.txt.** Never rely on the wildcard. §1.
3. **Content in real text, server-rendered.** Google: "Keep important content in textual form."
   Nothing load-bearing behind client-side JS.
4. **Structured data must match visible content.** Google states this explicitly. Our FAQ schema is
   generated from the same array the page renders; keep it that way. Never hand-write a second array.
5. **No pricing figures anywhere** (existing FactoryJet rule, unchanged).
6. **No em dashes; plain 5th-7th grade register.** Grounded in Unbounce's verified benchmark
   (5th-7th grade converts at 11.1%, ~56% above dense professional register).
7. **Internal links in and out**, and the page registered in the sitemap **in the same commit that
   creates it.** We already broke this once today.

### Tier B — strong, evidence-backed defaults (🟡)

8. **Target 2,500-3,500 words. Hard ceiling 5,000.** Median cited page is 2,813; only 3 of 58 exceed
   6,000. This supersedes any "more depth is better" instinct, including mine from earlier today.
9. **Roughly 10+ H2 sections.** Median cited page has 11.
10. **Lists are the primary structural unit. Aim for 80-120 list items.** Median 110. This is the
    highest-signal finding in the dataset and we currently under-use it.
11. **Visible FAQ section, 20+ questions, conversational phrasing.** 72% of cited pages.
12. **`dateModified` on every page, kept honest.** 56% of cited pages, and cheap.
13. **Named author with real credentials, plus `Person` schema.** 41% of cited pages carry Person
    schema. This is our biggest structural gap.
14. **2-3 external citations, each URL fetch-verified at build time.** Non-negotiable for honesty
    regardless of what it does for rankings.

### Tier C — situational, use judgement (do NOT apply blindly)

15. **Comparison table** where the topic genuinely compares (32% of cited pages).
16. **Listicle format** where the topic genuinely enumerates (18%). **Downgraded from mandatory.**
17. **FAQPage schema** (41%). Ship it, but do not treat it as a citation lever.
18. **Named-capability density, 25-30+ terms per 1k, with real third-party system names**, on
    capability and service pages. 🔵 Our own strongest signal, still unproven. Do not let it push
    word count past rule 8.

### Explicitly rejected (folklore)

- ❌ "You need special AI markup / an llms.txt to appear in AI Overviews." Google says no. (We keep
  `llms.txt` because it is harmless and cheap, not because it is required.)
- ❌ "Longer is better." The data says the opposite.
- ❌ "Every page needs a listicle."
- ❌ "FAQPage schema is required for AI citation."
- ❌ Any claim of a proprietary AI ranking factor.

---

## 4b. ⚠️ Measurement protocol (added 2026-08-02 after getting this wrong)

**Word count and term density MUST be measured on rendered HTML, never on `.tsx` source.**

Running `wc -w` on a `.tsx` file counts JSX, inline style objects, imports, metadata strings, and
JSON-LD schema. It roughly **doubles** the apparent word count. I made this mistake and it produced
three wrong conclusions in v1.0 of this document:

| Page | `wc -w` on .tsx (wrong) | Rendered HTML (correct) |
|---|---:|---:|
| `/b2b-ecommerce` | 6,883 | **3,904** |
| `/ecommerce-for-manufacturers` | 4,680 | **3,223** |

Consequences of the error: I wrongly concluded `/b2b-ecommerce` had blown past the depth ceiling and
needed a 1,800-word cut. It had not. At 3,904 rendered words it sits comfortably in the normal range
(benchmark median 2,813), and the trim was cancelled.

**Correct method** (matches `dfs_citation_anatomy.py` so figures stay comparable): fetch the live
URL, strip `<script>/<style>/<noscript>/<svg>`, strip remaining tags, then count. Stripping `<script>`
also removes JSON-LD, which is what you want, since schema terms should not inflate density.

Density re-measured correctly:

| Page | Rendered words | Capability terms/1k | `<li>` | Cited |
|---|---:|---:|---:|---|
| `/b2b-ecommerce` | 3,904 | **55.3** | 83 | 6/9 |
| `/ecommerce-for-manufacturers` | 3,223 | **48.7** | 81 | new |
| `/omnichannel-commerce` | 2,145 | 21.9 | — | 0/4 |
| `/headless-commerce` | 1,230 | 22.0 | — | 0/4 |

**Honest caveat on the density thesis:** the cited page is both denser *and* longer than the two
uncited ones. `/headless-commerce` at 1,230 rendered words is far below the 2,813 benchmark median,
so it is under-length as well as under-dense. **Length and density are confounded and this data
cannot separate them.** Do not present density as an isolated proven cause.

---

## 5. Immediate consequences for existing pages

| Page | Action | Status |
|---|---|---|
| `/b2b-ecommerce` | ~~Trim to ~5,000~~ | ❌ **Cancelled.** Based on a measurement error (§4b). Page is 3,904 rendered words, well within range. |
| `/ecommerce-for-manufacturers` | Add to `sitemap-us` | ✅ Done |
| `robots.txt` | Add Claude-SearchBot, Claude-User, Perplexity-User | ✅ Done |
| `robots.txt` | GPTBot / `ai-train=no` contradiction | ⏸️ **Left for Bhavesh.** Crawl behaviour deliberately unchanged; conflict documented inline in the file. Changing it is a rights-policy decision, not a technical fix. |
| Both new pages | Fetch-verify external stats | ✅ Done, and **all three were wrong** (see below) |
| Both new pages | Named author + `Person` schema | ✅ Done, mirroring the existing `src/app/austin/seo/page.tsx` pattern |
| Both new pages | Raise `<li>` count toward benchmark 110 (currently 83 / 81) | ⏳ Open |
| Sitewide | Audit `dateModified` coverage (~29/214 per 2026-07-31 audit) | ⏳ Open |
| Sitewide | Audit `Person` schema coverage | ⏳ Open. **Note: it already exists** in `layout.tsx`, city SEO pages, and author pages, so v1.0's "likely near zero" guess was wrong. |

### Citation verification results (2026-08-02) — all three failed

This is why rule 14 exists. Every stat on `/b2b-ecommerce` was wrong, had been live for some time,
and I copied all three onto the new page before checking them.

| Source | What we claimed | What the source says |
|---|---|---|
| Digital Commerce 360 | "$2.3T in **2024**, up **10.5%** YoY" | ~$2.28T in **2023**, up **17%** YoY |
| McKinsey B2B Pulse | "**3 to 10** channels… **most** prefer digital self-service" | Average of **ten** channels (up from five in 2016); only **one third** prefer digital self-serve at a given stage |
| Statista (US B2B digital share) | "56%, up from 45% and 32%" | **Unverifiable** — redirect loop / paywall. Removed rather than kept unverified. |

All corrected on both pages, with an inline comment warning against editing figures without
re-verifying. **Lesson: inherited stats are not pre-verified stats.** Copying a figure from an
existing page of our own carries the same risk as taking one from an AI report.

---

## 6. Known gaps in this research

Stated plainly so v2 can close them:

1. **The LLM citation-URL capture returned zero URLs this run.** The `links` array came back empty
   from both ChatGPT and Perplexity, so §2's structural analysis reflects **Google AI Overview
   citations only**, not ChatGPT or Claude. The ChatGPT/Perplexity structural profile is unmeasured.
2. **n=58, one vertical.** All queries were e-commerce/agency commercial terms. Do not assume the
   medians transfer to informational or other verticals.
3. **Sample capped at 60 most-cited URLs**, so long-tail cited pages are excluded.
4. **Correlation, not causation.** These pages are cited *and* have these traits. Nothing here proves
   the traits caused the citation.
5. **No Gemini report was supplied** for the fact-check Bhavesh asked for; nothing was pasted. The
   2026-07-31 Gemini-derived doctrine in the global CLAUDE.md was partially re-verified here (its
   robots.txt and reading-level guidance hold up; its implication that special GEO markup matters is
   contradicted by Google's own docs).
6. **Perplexity and Google AI Mode** were not separately profiled.

---

## 6b. Authority vs citation: they are NOT the same game (measured 2026-08-03)

Two pulls on the same day settled a question that had been assumed rather than tested.

### Backlink reality (`dfs_backlinks.py`, $0.385)

| Domain | Type | Referring domains |
|---|---|---:|
| outerboxdesign.com | LLM-named agency | 4,718 |
| litextension.com | migration tool | 3,028 |
| oroinc.com | B2B platform | 2,916 |
| meetanshi.com | migration agency | 2,812 |
| coalitiontechnologies.com | B2B agency | 2,772 |
| netalico.com | LLM-named agency | 557 |
| **factoryjet.com** | **us** | **53** |
| cart2cart.com | migration tool | 45 |

**We sit at 53 referring domains against a competitor median of 1,799, a 34x gap.**
This is not closable with content. Treat it as a fixed constraint, not a target.

### The finding that matters

**LLM citation does not track domain authority.** In the same day's citation sweep,
**netalico.com (557 referring domains) was cited 17 times** across nine buyer prompts, while
**outerboxdesign.com (4,718 referring domains, 8.5x more links) barely appeared** on those same
prompts. Authority buys organic position. It does not buy citation.

### Rule 19 — high-KD keywords: target them, but change the goal and the metric

The instinct to chase high-volume high-KD terms is right, and the usual reason given for it is wrong.

- ❌ **Wrong reason: "we will pick up some traffic anyway."** Our own GSC disproves this. The
  existing service and city pages already sit at **position 29-67 and produce ~0 clicks**. That
  experiment is running right now and returning nothing. CTR below position 20 is a rounding error,
  and at 53 referring domains we will not reach the top 10 on a KD 34+ term in any near timeframe.
- ✅ **Right reason: KD is an ORGANIC-ranking metric and has no bearing on LLM citation.** An LLM
  answering "which ecommerce agency should I use" does not consult Keyword Difficulty. The netalico
  vs outerboxdesign result above is direct evidence.

**So: build for the high-KD head terms, but as capability/specificity content judged on mention
rate, never on ranking position.** Judging them on rankings will produce a false failure signal,
exactly as it would for the SFCC page (§9).

High-volume high-KD US targets worth covering on those terms:

| Keyword | Vol/mo | KD | CPC |
|---|---:|---:|---:|
| shopify partners / shopify development partner | 14,800 | 36 | $27.47 |
| **ecommerce agency** | 2,400 | 34 | **$106.43** |
| shopify developers | 2,400 | 63 | $30.76 |
| ecommerce web design (variants) | 1,900 | 31-62 | $18.15 |
| shopify agency | 1,600 | 58 | $31.66 |
| ecommerce website development | 1,300 | 31 | $54.58 |

Roughly 58,800/mo combined. Do not forecast organic clicks from these. Forecast citations.

---

## 6c. AI citation baseline (2026-08-03, `dfs_citation_baseline.py`, $3.367)

Taken the day the replatforming pages deployed, so the zeros are expected and are a start line,
not a verdict. 3 runs x 2 models x 9 pages.

| Page | ChatGPT | Perplexity |
|---|---:|---:|
| `/b2b-ecommerce` **(control, was 6/9 on 2026-08-02)** | **2/3** | 0/3 |
| all 7 replatforming pages | 0/3 | 0/3 |
| `/ecommerce-for-manufacturers` | 0/3 | 0/3 |

The control at 2/3 (67%) is consistent with the earlier 6/9 (67%), but **three runs is far too few
to call it stable**. Raise the run count on the re-test before reading anything into movement.

Most-cited domains on these prompts: 1digitalagency (33), elogic (19), swankyagency (18),
scandiweb (17), netalico (17), vaimo (11), iwdagency (10), absoluteweb (10), dcxcommerce (10),
optimum7 (10).

**Re-test ~2026-08-17**: re-run the script unchanged and diff. If replatforming pages move off zero
while referring domains stay near 53, the specificity route is confirmed as independent of authority.

---

## 7. Fact-check: Gemini deep-research report (supplied 2026-08-02)

Verified against primary sources. Verdict: **directionally useful, but contains one known-fabricated
statistic, one invented mechanism, one recommendation that contradicts our own winning page, and a
set of invented performance metrics that must never be published.**

### ✅ Holds up

| Claim | Verification |
|---|---|
| Target 2,500-3,500 words | **Matches our measurement exactly** (median cited page 2,813). The report's single best call. |
| Keyword stuffing costs 8-10% AI visibility | Real. KDD 2024, arXiv:2311.09735 (Princeton/Georgia Tech/IIT Delhi). |
| Citing external sources ≈ +115% for lower-ranked pages | Real, same paper. |
| Strict H1→H2→H3 descent | Supported: 55/58 cited pages have exactly one H1; 0 omit it. |
| Median LP conversion 6.6%; B2B SaaS/software 1.1-1.7% | Verified (Unbounce Q4 2024, 464M visitors). |
| INP <200ms, LCP <1s, CLS ~0 | Correct. |
| FAQ rich results removed May 2026 | **Date is correct** (complete removal 7 May 2026; restriction began Aug 2023). |
| robots.txt allowlist incl. **Claude-SearchBot** | Correct, and **it caught a gap we have** (§1). Credit where due. |
| Mid-page CTAs; multi-step forms for high intent; fewer fields for low intent | Sound, consistent with our own doctrine. |

### ❌ Fails verification

| Claim | Reality |
|---|---|
| "Pages of 125 words or fewer convert 15% higher," attributed to Unbounce | **Fabricated.** Not in that report. This is the *second* appearance of this exact fake stat from a Gemini-authored report (the 2026-07-31 one made the identical claim). Treat as a signature of this pipeline. |
| FAQPage is "Tier 1 schema, highest direct impact on AI citation" | **Contradicted by Google**: "There's also no special schema.org structured data that you need to add." And by our data: only **41%** of cited pages have FAQPage schema. |
| "The FAQ signal was rerouted to feed Google AI Overviews and LLM grounding" | **Invented mechanism.** Google never said this. Google says unused structured data simply causes no problems. |
| "Exactly 5 to 7 FAQs; more dilutes semantic focus" | **Contradicted by our own winning page.** `/b2b-ecommerce` earned 6/9 ChatGPT citations with **20** FAQs. Our standing doctrine (15-50+) stays. |
| llms.txt is "a technical necessity," "widely adopted by 2026" | **Debunked.** John Mueller: *"no AI system currently uses llms.txt,"* and compares it to the keywords meta tag. Ahrefs: across 137,000 domains, **97% of llms.txt files got zero requests in May 2026.** Keep ours (harmless, cheap); it is not a lever. |
| Seer's 15.9% ChatGPT conversion rate, framed as a benchmark to "capture" | Real study, but **one B2B client over ~7 months**, self-reported as a case study. Not an industry benchmark. Never quote to a client. |
| Statistics +41%, quotes +28%, tone +25% | Real effects, **unreliable exact numbers** (inconsistent across secondary sources). Use directionally only. |
| "68.7% of ChatGPT-cited pages use strict hierarchy"; "44.2% of citations from first 30%" | Unverifiable, suspiciously precise. The underlying ideas are fine; the decimals are not citable. |
| "41% of B2B sites inadvertently block AI crawlers" | Unverifiable. |
| JSON-LD "must be injected into the `<head>`" | Wrong. JSON-LD is valid anywhere in the document. |

### 🚨 Do not publish — invented FactoryJet metrics

The report supplies specific performance numbers as if they were ours: **"+38% conversion lift,"
"31 seconds" inventory sync, "68% reduction in manual task time," "3.2x faster than human-only
support," "59% of retailers," "two days a week" lost to stock syncing.**

None of these trace to any FactoryJet source. Publishing them would be fabricating client results,
which is both an E-E-A-T liability and straightforwardly dishonest. **Every one requires a real
internal source before it appears on any page, or it does not appear.**

It also names **"Gemini 1.5 Pro, Claude 3.5, LangChain"** as our stack. Those model names are badly
dated for August 2026 and would make any page carrying them look stale on arrival.

### Net effect on this rulebook

Two changes only: the report's 2,500-3,500 word target **corroborates rule 8** (independently
reached), and its robots.txt table **confirms the Claude-SearchBot gap** in §1. Nothing else in it
changes our rules. Its FAQ-count and llms.txt guidance are actively wrong for us.

**Standing instruction:** no statistic from an AI-generated research report goes into client-facing
copy until traced to a primary source. Two Gemini reports have now each contained the same
fabricated Unbounce statistic.

---

## Sources

- [Google Search Central: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [OpenAI: Bots / crawlers](https://developers.openai.com/api/docs/bots)
- [Anthropic: Does Anthropic crawl data from the web?](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)
- Own measurement: `pipeline/research/dfs_citation_anatomy.py`, `data/citation_anatomy_pages.json`
- Own measurement: `pipeline/research/dfs_ecom_leadgen_serp.py`, `data/ecom_leadgen_serp.json`
