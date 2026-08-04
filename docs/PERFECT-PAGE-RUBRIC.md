# The Perfect Web Page Rubric

**Version:** 1.0 (portable edition)
**Created:** 2026-08-04
**Scope:** Any website, any client, any stack. Nothing in this file is brand-specific.
**What it is:** a scoring contract for judging whether a single web page is actually good, for
humans, for Google, and for AI answer engines. It is not a style guide and not a design system.

Copy this file into any project as `docs/PERFECT-PAGE-RUBRIC.md`, fill in the project config block
in Section 2, and it is ready to use.

---

## 1. How to read this

Every check has an **id**, an **evidence tier**, a **weight**, and a **page-type applicability**.

```
score = (earned weight / applicable weight) × 100
```

Reported per category and overall. Checks that do not apply to a page type are removed from the
denominator, never scored as zero.

**Scores are only comparable within the same page-type profile.** A utility page scoring 82 and a
service page scoring 82 do not mean the same thing.

### Evidence tiers

| Tier | Meaning | Weight multiplier |
|---|---|---|
| 🟢 **Official** | Stated in a first-party doc: Google Search Central, OpenAI, Anthropic, W3C, the platform vendor | ×1.0 |
| 🟡 **Measured** | From a real dataset of pages that win in your market, sampled by you or reused from Section 4 | ×1.0 |
| 🔵 **Own-site** | Your own measured evidence, small n, promising but unproven | ×0.5 |
| ⚪ **Unproven** | Asserted by a framework or a consultant with no evidence behind it | **×0. Reported, never scored** |

⚪ checks still get measured and recorded. If one later correlates with something real, you already
have the presence data to test it against. This is the whole point of keeping them.

### The evidence rule that matters most

> **Before any statistic goes into a client-facing page, a pitch, or this rubric, verify it against
> the primary source. If you cannot find it, cut it or reframe it as a directional trend.**

AI-written research reports mix real, load-bearing findings with oddly-precise invented statistics.
Both look identical on the page. Fact-checking one supplied report in 2026 found roughly a third of
its specific numbers were either misattributed or unfindable, sitting next to findings that
reproduced perfectly. Assume the next report is the same.

---

## 2. Project config block (fill this in per project)

Everything below is intentionally empty in the portable file. The rubric works without it, but the
house-rules category stays unscored until you fill it in.

```yaml
project: <client / site name>
primary_market: <US | UK | EU | IN | UAE | global>
site_type: <services | ecommerce | saas | publisher | local>
canonical_host: https://example.com

house_rules:            # each becomes a scored check in Category H
  - id: H1
    rule: <e.g. "No em dash characters (U+2014) anywhere in body copy">
    weight: 3
  - id: H2
    rule: <e.g. "No pricing figures on any page">
    weight: 2
  - id: H3
    rule: <e.g. "Brand name never abbreviated">
    weight: 1

benchmark:
  source: <"Section 4 default" | "own sample, n=NN, queries: ...">
  median_words: 2813
  median_h2: 11
  median_list_items: 110
  faq_presence: 0.72

extensions_enabled:     # see Section 9
  performance: false
  accessibility: false
  conversion: false
```

**When to re-derive the benchmark instead of using the default.** The Section 4 numbers come from
commercial B2B service and ecommerce queries. If the client sells something structurally different
(a consumer product, a SaaS trial, a local trade service, editorial content), sample your own. The
method is in Section 4b and takes about an hour.

---

## 3. What the primary sources actually say

All four verified live on **2026-08-04**. Quotes are verbatim. Re-verify quarterly, because vendor
docs change and bot names get added.

### Google: there is no AI-specific optimization

From [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features):

> "There are no additional requirements to appear in AI Overviews or AI Mode, nor other special
> optimizations necessary."

> "You don't need to create new machine readable files, AI text files, or markup to appear in these
> features. There's also no special schema.org structured data that you need to add."

And two things it does ask for, both of which are scored in this rubric:

> "Making sure that important content is available in textual form"

> "Making sure your structured data matches the visible text on the page"

From the [AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide):

> "There's no ideal page length."

> "There's no requirement to break your content into tiny pieces for AI."

> "Structured data isn't required for generative AI search."

Plus the guidance that most agency pages fail: provide a unique point of view, avoid commodity
content, and do not just recycle what others have already said.

**How to hold both ideas at once.** Google says there is no secret AI ruleset. Section 4 shows cited
pages nonetheless share structural traits. Both are true. The traits are *consequences* of being
genuinely good and easy to extract from, not a proprietary ranking factor. Treat the numbers as a
descriptive prior and a smell test, never as a target to hit for its own sake.

### Crawler access: name every retrieval bot explicitly

This is the cheapest catastrophic mistake on the list. A wrong line in `robots.txt` removes a site
from an entire platform's answers, silently, with no error anywhere.

| Vendor | Bot | What it does | Blocking it costs you |
|---|---|---|---|
| OpenAI | **OAI-SearchBot** | Powers ChatGPT search | **Citation eligibility.** "Sites that are opted out of OAI-SearchBot will not be shown in ChatGPT search answers, though can still appear as navigational links" |
| OpenAI | ChatGPT-User | User-triggered fetches | Live fetches, not search eligibility |
| OpenAI | GPTBot | Training only | Nothing in search |
| OpenAI | OAI-AdsBot | Ad safety validation | Nothing organic |
| Anthropic | **Claude-SearchBot** | "navigates the web to improve search result quality for users" | Visibility in Claude search results |
| Anthropic | **Claude-User** | User-initiated web access | "may reduce your site's visibility for user-directed web search" |
| Anthropic | ClaudeBot | Training only | Nothing in search |
| Perplexity | **PerplexityBot** | Surfaces and links sites in Perplexity results | Visibility in Perplexity |
| Perplexity | Perplexity-User | User-initiated fetches | Live fetches |
| Google | Google-Extended | Gemini / Vertex grounding controls | Gemini app grounding, not Search |
| Apple | Applebot-Extended | Apple AI training control | Apple Intelligence training |

**Two traps that catch experienced people:**

1. **The training bot is not the search bot.** `ClaudeBot` is training. `Claude-SearchBot` is search.
   Naming only `ClaudeBot` and assuming Claude citation is handled is wrong. Same shape of error with
   `GPTBot` versus `OAI-SearchBot`.
2. **Never let a retrieval bot inherit from `User-agent: *`.** Even when the wildcard allows, an
   over-broad rule added later silently catches it. Name each one on its own line.

Blocking training-only scrapers (`CCBot`, `Bytespider`, `Amazonbot`, `Diffbot` and similar) is a
separate, legitimate business decision. Just keep it consistent with whatever `Content-Signal` policy
line the site declares, and never let it catch a retrieval bot by accident.

`robots.txt` changes take roughly 24 hours to take effect at OpenAI. Assume similar elsewhere.

---

## 4. The reference benchmark (🟡 measured, n=58)

Sampled from 232 Google AI Overview citations across 12 commercial queries in the B2B ecommerce and
web services space. Publisher and marketplace domains were excluded so the sample reflects pages an
ordinary business could realistically compete with.

| Trait | Result | What it means |
|---|---|---|
| **Median word count** | **2,813** | Not 5,000. Not 8,000 |
| Word distribution | 25 of 58 sit at 2,000 to 3,500. Only **3 exceed 6,000** | Long does not win |
| Median H2 count | 11 | Substantial sectioning |
| **Median list items** | **110** | The strongest single structural signal in the set |
| Visible FAQ section | 72% | Near-universal |
| `FAQPage` schema | 41% | Common, clearly **not** required |
| Any `<table>` | 32% | Helpful, not necessary |
| Listicle headline | 18% | Minority pattern for commercial queries |
| `dateModified` present | 56% | Cheap edge |
| Exactly one `<h1>` | 55 of 58 | Basic hygiene |
| Zero `<h1>` | 0 of 58 | Nobody cited omits it |

Schema types across cited pages: `Organization` 42, `ImageObject` 38, `ListItem` 37,
`BreadcrumbList` 36, `WebPage` 33, `WebSite` 32, `FAQPage` 24, `Person` 24, `Article` 14,
`AggregateRating` 11. Roughly four types per page, not sixteen.

**Two findings worth pulling out.** Lists beat prose decisively: a median of 110 `<li>` elements per
cited page is the most striking number in the set, and it lines up with how extraction works, since a
list item is a self-contained retrievable unit. And `Person` schema appears on 41% of cited pages,
which is the same rate as `FAQPage`, making named-author attribution a more serious signal than most
checklists treat it as.

**What this data does not support:** that `FAQPage` schema is required (59% lack it), that listicles
are the dominant commercial format (18%), that comparison tables are mandatory (32%), or that more
words is better (the distribution says the opposite).

**Scope caveat, stated plainly.** n=58, one vertical, one point in time, Google AI Overviews only.
It is a prior, not a law. Use it until you have your own sample.

### 4b. How to re-derive this for a different vertical

1. Pick 10 to 15 commercial queries a real buyer would type.
2. Pull the AI Overview and top-10 organic citations for each (any SERP API works).
3. Drop publishers, marketplaces, and directories unless the client competes with them.
4. Fetch each unique URL's raw HTML.
5. Strip `<script>`, `<style>`, `<noscript>`, `<svg>`, then strip remaining tags, then count.
6. Report medians, not means. The distribution is skewed and the mean lies.

### 4c. ⚠️ Measurement protocol (get this wrong and every conclusion is wrong)

**Word count, list count and term density MUST be measured on rendered HTML, never on source files.**

Running `wc -w` on a `.tsx`, `.vue`, `.php` or `.jsx` file counts JSX, imports, class strings, inline
style objects, metadata and JSON-LD. In a real measured case it roughly **doubled** the apparent word
count (6,883 in source versus 3,904 rendered), which produced a decision to cut 1,800 words from a
page that was actually sitting comfortably in the normal band.

Stripping `<script>` also removes JSON-LD, which is what you want, since schema terms should never
inflate a density figure.

**Second trap: site chrome inflates list counts.** Nav menus, mega-menus and footers can contribute
25 to 65 `<li>` elements before a single word of content. Always report two numbers: `<li>` inside
`<main>` (the one you score) and whole-page `<li>` (the one that is comparable to the 110 benchmark,
which was measured whole-page). They are not interchangeable.

---

## 5. Page-type profiles

Inferred from URL path or declared per page. Thresholds differ per profile. Some checks do not apply
at all.

| Profile | What it is | Word band | H2 target | `<li>` in `<main>` | FAQ min |
|---|---|---|---|---|---|
| `service` | Service and offering pages | 2,500 to 5,000 | 10+ | 30+ | 20 |
| `local` | City, region, "near me" pages | 2,000 to 4,500 | 10+ | 25+ | 20 |
| `commercial` | Capability and topic pages that sell without being a named service | 2,500 to 5,000 | 10+ | 30+ | 15 |
| `article` | Blog, guide, editorial | 1,800 to 5,000 | 8+ | 20+ | 8 |
| `case-study` | Client work, proof pages | 900 to 2,500 | 5+ | 10+ | 0 |
| `product` | Ecommerce PDP | 400 to 1,500 | 4+ | 15+ | 5 |
| `category` | Ecommerce PLP, collection | 300 to 1,200 | 3+ | 10+ | 3 |
| `pricing` | Plans and pricing | 600 to 2,000 | 5+ | 20+ | 8 |
| `docs` | Technical documentation | no band | 5+ | 15+ | 0 |
| `utility` | Legal, contact, thank-you, index, sitemap | no band | 3+ | n/a | 0 |

`utility` pages are exempt from depth, FAQ, entity and E-E-A-T checks. They are graded on technical
foundation, schema and internal linking only.

`product` and `category` pages swap Category N (entity density) for structured-data checks specific
to commerce: `Product`, `Offer`, `AggregateRating`, `BreadcrumbList`. Score those under S in place of
S4 and S5.

---

## 6. The checks

### Category T. Technical foundation (41 weight)

| id | Check | Tier | Weight | Threshold |
|---|---|---|---|---|
| T1 | Exactly one `<h1>` | 🟡 | 5 | Exactly 1. 55 of 58 cited pages, 0 omit it |
| T2 | Heading descent, no skipped levels | 🟢 | 4 | No H2 to H4 jumps |
| T3 | Semantic landmarks present | 🟢 | 3 | `<main>` required, plus 2+ of `<header> <nav> <section> <article> <footer>` |
| T4 | Canonical set and self-referential | 🟢 | 4 | `<link rel=canonical>` matches the fetched URL |
| T5 | `hreflang` alternates including `x-default` | 🟢 | 3 | Only on regionally twinned pages |
| T6 | Indexable | 🟢 | 5 | No `noindex`, not disallowed in `robots.txt` |
| T7 | Present in a sitemap | 🟢 | 3 | URL appears in the sitemap index |
| T8 | Title 15 to 60 chars, non-empty, unique sitewide | 🟢 | 2 | Duplicates across pages fail |
| T9 | Meta description 70 to 160 chars | 🟢 | 2 | Non-empty, in band |
| T10 | Images carry `alt` | 🟢 | 3 | 90%+ of `<img>` have non-empty `alt` |
| T11 | Images carry explicit `width` and `height` | 🟢 | 2 | 90%+. CLS protection |
| T12 | Content is server-rendered text | 🟢 | 5 | Word count from the raw HTML response with no JS execution. Google: "important content available in textual form" |

### Category S. Structured data (30 weight)

| id | Check | Tier | Weight | Threshold |
|---|---|---|---|---|
| S1 | JSON-LD present in server HTML and parses | 🟢 | 4 | 1+ valid `application/ld+json` block |
| S2 | `Organization` | 🟡 | 2 | Present. 42 of 58 |
| S3 | `BreadcrumbList` | 🟡 | 3 | Present on nested pages. 36 of 58 |
| S4 | `WebPage` / `Service` / `Product` per page type | 🟡 | 2 | Present. 33 of 58 |
| S5 | `Person` with a named author | 🟡 | 4 | Present. 24 of 58, and the E-E-A-T signal most sites skip |
| S6 | `FAQPage` where a visible FAQ exists | 🟡 | 2 | Only applies if the page actually renders an FAQ |
| S7 | `dateModified` present, parses, not in the future | 🟡 | 4 | 56% of cited pages |
| S8 | **No declared-but-never-rendered schema** | 🟢 | 4 | Zero. A schema constant defined in source that never reaches a `<script>` tag. Type checks, build validation and import checks all pass while the schema silently never ships |
| S9 | Schema does not contradict visible content | 🟢 | 5 | **AI-judged.** Google states structured data must match visible text. Regex cannot verify this |
| S10 | Other types (`ImageObject`, `Review`, `VideoObject`, `HowTo`, `Speakable`) | ⚪ | 0 | Reported only |

**The single most common silent bug in this category:** an FAQ rendered from one array while the
`FAQPage` JSON-LD is hand-written as a second literal. They drift within weeks. Always generate the
schema from the exact same array the component renders. If you see a hardcoded FAQ array anywhere
near a `<script type="application/ld+json">`, treat it as a bug and go verify.

### Category A. Content architecture (22 weight)

| id | Check | Tier | Weight | Threshold |
|---|---|---|---|---|
| A1 | Answer-first block after the hero | 🔵 | 5 | 40 to 75 words, self-contained, leads with the direct answer. Found by position, graded by AI |
| A2 | H2 count meets profile target | 🟡 | 4 | Median cited page has 11 |
| A3 | Each H2 section reads as one answerable question | 🔵 | 3 | AI-judged |
| A4 | Internal links out | 🟢 | 4 | 5+ in-content internal links, excluding nav and footer chrome |
| A5 | Internal links in | 🟢 | 4 | 2+ inbound links from other pages. Cross-referenced across the crawl, not per page |
| A6 | Breadcrumb trail visible | 🟡 | 2 | Rendered on the page, not schema only |

A5 is the check that catches orphan pages, and orphan pages are the most common quiet failure on a
large site. One template change that adds contextual links can fix hundreds of them at once.

### Category D. Depth (10 weight)

| id | Check | Tier | Weight | Threshold |
|---|---|---|---|---|
| D1 | Rendered word count inside the profile band | 🟡 | 6 | Measured per Section 4c. **Never on source files** |
| D2 | Not over the ceiling | 🟡 | 4 | Full points below the band ceiling, scaled penalty above |

Google says there is no ideal length, and that is correct: length is not a ranking factor. The band
exists because pages far outside it usually have a different problem. Under-band pages are almost
always thin. Over-band pages are almost always padded. Depth should scale with the page's job in the
funnel, not with an arbitrary target.

### Category X. Extractability (23 weight)

| id | Check | Tier | Weight | Threshold |
|---|---|---|---|---|
| X1 | `<li>` inside `<main>` meets profile target | 🟡 | 7 | **Highest structural weight in the rubric.** Median cited page has 110 whole-page list items |
| X2 | Whole-page `<li>` versus the 110 benchmark | 🟡 | 0 | Reported alongside X1. Chrome contributes 25 to 65 `<li>`, so the two figures are not interchangeable |
| X3 | Visible FAQ section | 🟡 | 5 | 72% of cited pages |
| X4 | FAQ question count meets profile minimum | 🟡 | 4 | 20+ on service and local pages |
| X5 | FAQ answers self-contained, 40 to 75 words | 🔵 | 3 | AI-judged. An answer that depends on the previous one is not extractable |
| X6 | FAQ phrased the way buyers actually ask | 🔵 | 2 | AI-judged. Real questions, not marketing prompts |
| X7 | Definition sentences present | 🔵 | 2 | At least one self-contained "X is a ..." definition |

**Do not turn this into content chunking.** Google explicitly says there is no requirement to break
content into tiny pieces for AI. The goal is that a genuinely useful page states its facts in
retrievable units, not that prose gets shredded into bullet confetti. A page of 200 one-line bullets
with no argument scores well on X1 and fails W4, and W4 is the one that matters.

### Category E. Experience, expertise, authority, trust (25 weight)

| id | Check | Tier | Weight | Threshold |
|---|---|---|---|---|
| E1 | Named author with real credentials, visible on the page | 🟡 | 4 | Not schema only |
| E2 | External citations, each URL fetch-verified | 🟢 | 4 | 2 to 3 outbound links to real sources that resolve. Non-negotiable for honesty regardless of ranking effect |
| E3 | Trust signals are real, not decorative | 🟢 | 5 | **AI-judged.** Named clients, real screenshots, real numbers. A generic "500+ projects" badge scores zero |
| E4 | No invented statistics, clients, awards or testimonials | 🟢 | 6 | **AI-judged. A single violation fails the page outright**, regardless of total score |
| E5 | Clear contact path | 🟢 | 2 | A working CTA or contact link in the content body |
| E6 | Mid-page CTA | 🟢 | 3 | A CTA between hero and footer. Most traffic never reaches the bottom |
| E7 | `sameAs` links to verified profiles | 🟡 | 1 | In `Organization` schema, and each profile actually exists |

A placeholder testimonial with a specific-sounding metric is a liability the moment it ships. If a
composite example is genuinely needed, label it as illustrative in the code and in the UI, and
replace it before launch.

### Category N. Entity and capability density (10 weight)

| id | Check | Tier | Weight | Threshold |
|---|---|---|---|---|
| N1 | Named-capability term density | 🔵 | 4 | 25 to 30+ specific capability terms per 1,000 rendered words on service and commercial pages |
| N2 | Real third-party system names | 🔵 | 3 | Concrete entities (specific platforms, ERPs, payment providers, frameworks) rather than category nouns |
| N3 | Entity coverage matches the topic | 🔵 | 3 | AI-judged. Does the page name the things a knowledgeable reader would expect to see? |

**Evidence status: promising hypothesis, not established.** In one measured case a page at 55 terms
per 1,000 words was cited by ChatGPT in 6 of 9 runs while sibling pages at 22 scored 0 of 4. But n=3
pages, the metric was self-defined, and it is confounded with both page length and how crowded the
answer pool is. That is why it sits at 🔵 with a ×0.5 multiplier.

**Hard cap:** N1 can never justify pushing a page past the D2 ceiling. Density and length are
confounded in the underlying data and cannot be separated by it.

Skip Category N entirely on `product`, `category`, `article` and `utility` profiles.

### Category W. Writing quality (15 weight)

| id | Check | Tier | Weight | Threshold |
|---|---|---|---|---|
| W1 | No AI-slop vocabulary | 🟢 | 3 | unlock, elevate, leverage, seamless, robust, supercharge, game-changer, delve, "dive in", "in today's fast-paced", "it's important to note", "when it comes to", "in conclusion", "look no further" |
| W2 | Plain register, roughly 5th to 7th grade | 🟢 | 3 | Verified finding: 5th to 7th grade copy converts at 11.1%, roughly 56% above dense professional register (Unbounce Conversion Benchmark Report, 464M+ visitors) |
| W3 | Jargon explained on first use | 🟢 | 3 | Every domain term the target reader might not know |
| W4 | Not commodity content | 🔵 | 4 | **AI-judged.** If it reads interchangeably with any competitor's page on the same topic, it fails. Google: "Don't just recycle what others on the internet have already said" |
| W5 | Price figures are unambiguously framed | 🟢 | 2 | **AI-judged.** Any price the page states for its own services must be readable as what it is: an indicative range, a starting point, or a firm quote. A bare number a reader could mistake for a quote fails. Competitor pricing and third-party tool costs are not in scope |

W4 is the check most pages fail and the hardest to fake. It is also the only one Google names
directly as a differentiator for AI systems.

**W5 is a framing check, not a ban.** An earlier version of this rubric scored "no pricing figures
anywhere", which is a house rule rather than a quality signal, and it produced 40 flagged pages on a
site that had deliberately chosen to publish directional costing. Publishing indicative prices is a
legitimate strategy: it qualifies buyers before the call and it is exactly the kind of concrete
detail AI answer engines can extract and cite. What fails is ambiguity, a number with no indication
of whether it is a floor, a range, or a fixed quote, and prices that contradict a scoping-call
promise elsewhere on the same page. If a project genuinely bans pricing, express that as a house
rule in Category H instead, where it belongs.

### Category M. Rich media (4 weight)

| id | Check | Tier | Weight | Threshold |
|---|---|---|---|---|
| M1 | Comparison table where the topic genuinely compares | 🟡 | 2 | 32% of cited pages. Applies to `commercial`, `service`, `pricing` only |
| M2 | 3+ content images with real alt text | 🟢 | 2 | Excludes logos and icons |
| M3 | Custom diagram or inline SVG figure | ⚪ | 0 | Reported |
| M4 | Video, calculator, downloadable asset | ⚪ | 0 | Reported. Commonly demanded by frameworks, no evidence behind it |

### Category H. House rules (project-configurable, default 0)

Populated from the Section 2 config block. Typical entries: banned punctuation, banned words, pricing
policy, mandatory disclaimers, brand-name handling, regional spelling. Keep each one mechanically
checkable, otherwise it belongs in a style guide rather than a scored rubric.

---

## 7. Hard-fail conditions

Independent of score. Any one of these makes the page a liability that should not stay live:

1. **E4.** An invented statistic, client, award or testimonial.
2. **S9.** Structured data contradicting visible content. This is cloaking-adjacent and directly
   against Google's stated requirement.
3. **T6.** Accidentally `noindex` or `Disallow` on a page meant to rank.
4. **T12.** Load-bearing content that only exists after JS execution.
5. **S8.** Schema declared in source that never renders.
6. **Retrieval bot blocked.** `OAI-SearchBot`, `Claude-SearchBot` or `PerplexityBot` disallowed by
   accident. Sitewide, but check it on every audit because one line change causes it.

---

## 8. Scoring and reporting

Report five things, in this order:

1. **Overall score** and the profile it was scored against.
2. **Category scores**, so the failure mode is legible at a glance.
3. **Hard fails**, listed first if any exist, since they override the score.
4. **The three highest-weight failed checks**, which is the actual work list.
5. **⚪ reported values**, collected but unscored.

Do not average scores across page types into a single site number. It hides exactly the thing you
need to see, which is that one template is dragging down 90 pages.

### Grade bands

| Score | Read |
|---|---|
| 90 to 100 | Ship it. Genuinely competitive |
| 75 to 89 | Good page with a specific fixable gap |
| 60 to 74 | Structurally sound, materially under-built |
| 40 to 59 | Thin or template-filled. Needs a rewrite, not a patch |
| under 40 | Should not be indexed in this state |

Any hard fail caps the reported grade at "do not ship" regardless of the number.

---

## 9. Extension packs (scored separately, never folded into the core 100)

Enable per project in the Section 2 config. They are separate because they need different tooling and
because mixing them into one number makes the number meaningless.

### P. Performance

| id | Check | Tier | Threshold |
|---|---|---|---|
| P1 | Largest Contentful Paint | 🟢 | ≤ 2.5s good, ≤ 4.0s needs improvement (official Core Web Vitals thresholds) |
| P2 | Interaction to Next Paint | 🟢 | ≤ 200ms good |
| P3 | Cumulative Layout Shift | 🟢 | ≤ 0.1 good |
| P4 | Images optimized and correctly sized | 🟢 | Modern format, no oversized source. Watch static-export targets where the framework's image optimizer is unavailable, and hand-optimize instead |
| P5 | Below-fold interactive components lazy-loaded | 🟢 | Eagerly hydrated below-fold widgets are the most common INP regression |

Measure on the deployed URL, not locally. Field data beats lab data where available.

### C. Accessibility

| id | Check | Tier | Threshold |
|---|---|---|---|
| C1 | Text contrast | 🟢 | 4.5:1 body, 3:1 large text (WCAG 2.2 AA) |
| C2 | Visible focus indicator on every interactive element | 🟢 | Never `outline: none` without a replacement |
| C3 | Every form input has a programmatic label | 🟢 | `<label for>` or `aria-label` |
| C4 | Heading order (shares T2) | 🟢 | No skipped levels |
| C5 | `lang` attribute set on `<html>` | 🟢 | Correct locale |
| C6 | `aria-hidden` never wraps focusable content | 🟢 | Use `inert` for that instead |

### V. Conversion

| id | Check | Tier | Threshold |
|---|---|---|---|
| V1 | Field count matches intent | 🟢 | Low-intent capture: name and email, maybe company. Nothing else |
| V2 | High-intent forms are multi-step | 🟢 | Lead with an easy multiple-choice question, ask for contact details last |
| V3 | One primary CTA per page | 🟢 | Competing primary CTAs split conversion |
| V4 | Mid-page CTA present (shares E6) | 🟢 | Present on every long-form template, not just some of them |
| V5 | Realistic benchmark applied | 🟢 | Roughly 6.6% median across all landing pages, but B2B software and IT services cluster at 1.1% to 1.7%. Do not benchmark a B2B page against a B2C aggregate |

---

## 10. What this rubric deliberately does not check

- **Rankings.** A page can be excellent and rank nowhere. That is a demand and authority problem, not
  a page-quality problem, and conflating them produces bad decisions.
- **Backlinks and off-page authority.** Separate discipline, separate budget. Worth knowing:
  measured evidence shows LLM citation does **not** track referring-domain count. A site with 557
  referring domains was cited 17 times while one with 4,718 was barely cited at all. Competitor link
  counts are also partly junk, with link-farm content running as high as 38% of a profile.
- **Search demand.** Verify a keyword has real volume before rewriting a title around it. Search
  Console impressions can be synthetic and have been measured showing demand where an independent
  volume check returns zero.
- **Brand and visual design.** That belongs in the project's own design system.

---

## 11. Explicitly rejected folklore

Each of these is contradicted by a primary source or by the measured data.

- ❌ "You need an `llms.txt` or special AI markup to appear in AI answers." Google Search ignores
  these files. Keep one if you like, it is cheap and harmless, but never score it and never sell it.
- ❌ "Longer is better." The distribution says the opposite.
- ❌ "Every page needs a listicle." 18%.
- ❌ "Every page needs a comparison table." 32%.
- ❌ "`FAQPage` schema is required for AI citation." 59% of cited pages lack it.
- ❌ "Ship 16 schema types per page." Cited pages carry about four.
- ❌ "Chunk your content for AI" or "write in an AI-friendly style." Explicitly debunked by Google.
- ❌ "Follow these 42 mandatory page sections." No evidence behind any such list.
- ❌ Any claim of a proprietary AI ranking factor.

---

## 12. Implementation notes

If you automate this, three-quarters of the checks are mechanical and the rest are not.

**Mechanical (regex, DOM parse, HTTP):** all of T, S1 to S8, S10, A2, A4, A5, A6, D1, D2, X1 to X4,
X7, E2, E5, E6, E7, N1, N2, W1, M1, M2.

**Needs an AI judge:** S9, A1, A3, X5, X6, E1, E3, E4, N3, W2, W3, W4. Give the judge the rendered
text plus the specific threshold, and require it to quote the offending passage. A verdict with no
quote is not a finding.

**Cross-page, needs a full crawl:** A5 (inbound links), T7 (sitemap membership), T8 (title
uniqueness).

**Codemod discipline, learned the hard way.** If you script a fix across many pages: walk tag depth
rather than matching with regex, scan forward only, and verify the result rather than the intent. A
regex that looks right on three files will silently mangle the fourth.

**Order of operations for a real audit:** crawl and fetch rendered HTML once, cache it, run the
mechanical checks over the cache, then batch the AI-judged checks. Re-fetching per check is slow and
gives inconsistent results when a CDN serves stale HTML mid-run.

---

## 13. Sources

All verified 2026-08-04 unless noted.

- [Google, AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google, AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google, Creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [OpenAI, bots and crawlers](https://developers.openai.com/api/docs/bots)
- [Anthropic, crawler documentation](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)
- [Perplexity, bots](https://docs.perplexity.ai/guides/bots)
- [Core Web Vitals thresholds, web.dev](https://web.dev/articles/vitals)
- [WCAG 2.2, W3C](https://www.w3.org/TR/WCAG22/)
- Aggarwal et al., "GEO: Generative Engine Optimization," KDD 2024, [arXiv:2311.09735](https://arxiv.org/abs/2311.09735). Real paper. The reproducible findings are that citing external sources helps lower-ranked pages substantially and that keyword stuffing hurts. Per-tactic lift percentages quoted from secondary coverage are inconsistent and should not be cited as precise numbers
- Unbounce Conversion Benchmark Report (reading-level and median-conversion findings, verified)
- Section 4 benchmark: own sample, n=58 AI-Overview-cited pages, 12 commercial queries, 2026-08

---

## 14. Changelog

| Version | Date | Change |
|---|---|---|
| 1.0 | 2026-08-04 | Portable edition. Derived from a project-specific rubric, stripped of brand rules, extended with `product` / `category` / `pricing` / `docs` profiles, house-rules category, and performance / accessibility / conversion extension packs. All primary sources re-verified live |
