# Perfect-Page Audit System — Design

**Date:** 2026-08-04
**Status:** Approved (Bhavesh, 2026-08-04)
**Origin:** A ChatGPT answer describing a "perfect AI-era web page" framework (8 layers, 42 sections),
supplied by Bhavesh, to be reconciled against `docs/AI-SEO-RULEBOOK.md` and turned into a repeatable
sitewide audit.

---

## 1. Problem

We have 362 live URLs across five regions and no repeatable way to answer "how good is this page,
really?" The two existing scripts each answer a slice:

- `scripts/audit-rulebook.mjs` — source-side signals, tells you *which file* to edit.
- `scripts/audit-rendered.mjs` — rendered-HTML measurement of 8 metrics against the n=58 benchmark.

Neither produces a per-page score, neither covers the qualitative half of page quality, and neither
knows that a utility hub and a service page should be graded differently.

## 2. The reconciliation problem (the reason this is not a straight port)

The supplied framework conflicts with our own measurements, and in one place with itself.

| Framework claim | Our evidence | Resolution |
|---|---|---|
| Target 3,000–7,000 words | Median cited page 2,813; only 3 of 58 exceed 6,000. Framework itself quotes Google debunking "obsessing over page length" | Band 2,000–5,000. Over 5,000 is a **penalty**, not a win |
| 16 schema types, all pages | Cited pages average ~4. `FAQPage` on 41%, absent from 59% | Score the 5 that correlate; list the rest as optional |
| 42 mandatory sections | No evidence for most. Calculators/PDFs/videos appear on a small minority | Report presence, score zero weight |
| Listicle format | 18% of cited pages | Situational, not scored as a requirement |
| Comparison table | 32% | Scored only where the page type genuinely compares |
| Semantic HTML, one H1, strict descent | 55/58 have exactly one H1, 0 omit it. Google recommends semantic HTML explicitly | Scored, high weight |
| Lists as primary structural unit | Median 110 `<li>` — strongest single signal in the dataset | Scored, highest structural weight |
| Named author / `Person` schema | 41% of cited pages | Scored |
| Entity optimisation | Our own `/b2b-ecommerce` evidence: 55 terms/1k, cited 6/9 | Scored at 🔵 weight, capped so it cannot push length past the ceiling |

**Rule: where the framework and our measurement disagree, our measurement wins, and the disagreement
is recorded in the rubric so nobody re-litigates it in six months.**

## 3. Evidence tiers

Every check carries a tier. Only the first three carry score weight.

| Tier | Meaning | Weight |
|---|---|---|
| 🟢 Official | Google Search Central / vendor documentation | Full |
| 🟡 Measured | Our n=58 AI-Overview citation anatomy | Full |
| 🔵 Own-site | Our own measured evidence, small n | Half |
| ⚪ Unproven | Framework-only, no evidence behind it | **Zero — reported, never scored** |

⚪ checks are still *reported*. If ROI calculators turn out to correlate with something later, we
will already have the sitewide presence data to test it against.

## 4. Page-type profiles

The framework only describes service pages. Grading a 6-URL case-study set or a utility hub against a
2,813-word benchmark produces noise. Six profiles, each with its own thresholds and its own set of
applicable checks:

`service` · `city` · `commercial` (capability/topic pages) · `blog` · `case-study` · `hub` (utility,
legal, thank-you)

Profile is inferred from the URL path, with an override map for the exceptions.

## 5. Architecture

Four components, each independently usable.

### 5.1 `docs/PERFECT-PAGE-RUBRIC.md`
The rubric itself. Versioned. Every check has: id, tier, category, page-type applicability, threshold,
how it is measured, and — where relevant — the framework claim it supersedes. This is the human-readable
contract; the scorer implements it and cites check ids back.

### 5.2 `scripts/audit-perfect-page.mjs`
Deterministic scorer. Fetches live URLs from the sitemap index (cache-busted, per the Cloudflare stale-edge
memo), measures every countable check, emits per-page JSON plus a ranked fix list.

- Reuses the exact `renderedWords` method from `audit-rendered.mjs` so figures stay comparable to the
  n=58 benchmark and the 2026-08-03 audit.
- `--region us|india|uk|uae|au|blog|all`, `--limit`, `--out`.
- Reports both whole-page `<li>` (benchmark-comparable) and `<main>`-only `<li>` (content-real), per the
  §8 correction.
- Output: `pipeline/research/data/perfect-page-audit-<region>-<date>.json`

### 5.3 AI judge pass
Grades what a script cannot: whether the answer-first block actually answers, whether trust signals are
real or decorative, FAQ conversationality, originality vs commodity copy, entity coverage, and
schema-vs-visible-content agreement (the cloaking check that matters most and that regex cannot do).

Runs as parallel subagents over the pages the deterministic pass has already scored, so judges spend
tokens on reading rather than measuring.

### 5.4 `page-audit` skill
Wraps the whole thing: run scorer → dispatch judges → merge → write report. So re-running the audit
after a deploy is one command, not a rebuilt conversation.

## 6. Scoring

Weighted score out of 100 per page, plus a per-category breakdown. A page's score is only comparable
within its profile. Report always carries the raw measurements next to the score, because the
measurement is the actionable thing and the score is just the sort key.

## 7. Run order

US (104) → India (82) → UK (34) → UAE (2) → AU (1), blog (117) alongside US.

**Known upfront:** UAE at 2 URLs and AU at 1 are a build backlog, not an audit target. The report will
say so in one line rather than pretending 3 URLs constitute a regional assessment.

## 8. Out of scope

- Core Web Vitals / Lighthouse. Needs PSI API runs against 362 URLs; separate job, separate budget.
- Rewriting any page. This system measures and ranks. Fixes are follow-up work chosen from its output.
- Backlinks and off-page authority. Covered by rulebook §6b/§6d, deliberately not re-litigated here.

## 9. Success criteria

1. Every one of the 362 live URLs gets a score and a raw measurement row.
2. Every check traces to a tier, and no ⚪ check can move a score.
3. Re-runnable after any deploy with one command per region.
4. Output ranks pages by "fix this first" and names the file to edit, not just the URL.
