# Session carry-over: judge India, UK, UAE, AU and the blog

**Written:** 2026-08-04, end of the US pass.
**Next session's job:** run the AI-judge layer over every non-US page. The US pass is done.

---

## 1. What exists already (do not rebuild any of this)

| Thing | Path | What it does |
|---|---|---|
| The rubric | `docs/PERFECT-PAGE-RUBRIC.md` | Scoring contract. **Now the portable v1.0 edition** with a project config block in Section 2. Read it first. |
| Deterministic scorer | `scripts/audit-perfect-page.mjs` | Fetches live URLs, scores every countable check. `--region us\|india\|uk\|uae\|au\|blog\|pages\|case-studies\|all` |
| Capability vocabulary | `scripts/data/capability-terms.json` | Term list behind the entity-density metric. Editable. |
| Orchestration skill | `.claude/skills/page-audit/SKILL.md` | Scorer → judges → report. Invoke with the `page-audit` skill. |
| Latest results | `pipeline/research/data/perfect-page-audit-all-2026-08-04.json` | Every page, every check, plus `evidenceForJudge` so judges do not re-measure. |
| Findings so far | `docs/audits/2026-08-04-perfect-page-audit.md` | US findings and the corrections made to the audit itself. |
| Source-side companion | `scripts/audit-rulebook.mjs` | Finds *which file* to edit, and detects declared-but-never-rendered schema. |
| Evidence base | `docs/AI-SEO-RULEBOOK.md` | Where every 🟡 and 🔵 number comes from, with method. |

**Re-run the deterministic pass first** (it is cheap and the numbers below will be stale):

```bash
node scripts/audit-perfect-page.mjs --region all
```

Use `--region all` even when judging one region: check A5 (inbound internal links) is computed across
the crawled set, so a partial run undercounts it.

---

## 2. Where the numbers stood after the US pass (2026-08-04)

355 live URLs. Median score by profile: city 90, blog 87, service 87, commercial 77, hub 76,
case-study 72.

Category health: schema 98, depth 93, technical 88, architecture 85, writing 84, media 82,
extractability 75, trust 75, **entity 51**.

Fix-first, by weighted points lost:

| Check | Points | Pages | Note |
|---|---:|---:|---|
| X1 `<li>` in `<main>` | 907 | 180 | Was 1,355 / 250 before the component conversions |
| E2 2-3 external citations | 796 | 199 | **Largest untouched item.** Mostly non-US pages |
| T5 hreflang + x-default | 723 | 241 | **Mostly a false positive, see §5** |
| X2 whole-page `<li>` vs 110 | 466 | 319 | Follows X1 |
| T9 meta description 70-160 | 462 | 231 | Median is 169, so marginal not broken |
| N2 real third-party system names | 461 | 194 | Real. Ties to entity 51% |
| W3 reading level ≤ grade 10 | 452 | 214 | Not yet attempted |
| E6 mid-page CTA | 432 | 144 | **Went up because `<main>` was added, see §5** |

---

## 3. The job

Judge every non-US page on the 10 AI-only checks: `S9 A3 X5 X6 X7 E3 E4 N3 W4 W5`.

Scope, in this order:

1. **India** — 82 URLs. Highest priority. The fabricated-locality pattern lived here and only
   ~15 India pages have been judged.
2. **UK** — 34 URLs.
3. **Blog** — 117 URLs, entirely unjudged. Blog posts are where invented statistics hide.
4. **UAE (2) and AU (1)** — three URLs. This is a build backlog, not a region. Say so in one line
   and move on. Do not write a regional assessment off three pages.

Dispatch parallel judge agents, ~8 URLs each. The prompt template that worked is in the four judge
calls from the previous session; the essential parts are §4 and §6 below.

---

## 4. Facts confirmed by Bhavesh — do NOT let judges re-flag these

Every one of these was flagged as a defect, investigated, and confirmed true or already correct.
Re-flagging them wastes a batch and erodes trust in the audit.

- **7-day delivery is real.** They have delivered in 48 hours. Only flag it when the *same page*
  contradicts itself (schema says 7 days, visible copy says 2-6 weeks).
- **Lighthouse: 90+ guaranteed, 95+ delivered on every project.** Schema saying 95+ against a page
  promising 90+ is under-promising, not a lie. All "Lighthouse 100" delivery claims were aligned to
  95+; ~10 platform-capability statements ("headless Shopify delivers 100/100 vs 70-85") were left
  deliberately, because rewriting them would make true statements false.
- **These aggregates are real:** `97% delivered on time`, `523+ projects`, `4.9 rating`, the six
  industry percentages (+38%, 3.2×, +52%, +41%, +29%, 4.7×), and the unnamed-client results
  including the +40%, Miami, Denver and Colorado Springs ones. A source note now renders on 116
  pages via `TestimonialsSection`.
- **Clients:**
  - Belle Maison — Mumbai wholesale distributor of artificial plants, flowers, flower runners, home
    décor and LED lighting. Built on **Commerceflo, B2B quote-to-cash**. Not Shopify, not DTC luxury.
  - Impulse Branding — Mumbai **print branding and general contracting**. Not a fashion label.
  - Formative Concepts — Pune, MEP/BIM consultancy.
  - Sow Easy, Buddyburst, Seedsticks, GPSUK — real **UK** clients. Sow Easy's site is still in
    development, so `staging.soweasy.com` is deliberately not published.
  - Yadav Entrance Automation — real, website built from scratch plus ongoing SEO and AI SEO.
- **Only Bhavesh Barot is a real author.** The four persona authors were deleted and 301'd.
- **302 on `/services/*` → root is correct.** It is geo-routing, and 302 is the right status for a
  geo-redirect. `node scripts/test-geo-redirect.mjs` proves the decision logic. Do not "fix" it.

---

## 5. Two measurement traps in the current numbers

**T5 hreflang (241 pages) is mostly a false positive.** hreflang only does something when the same
page exists in another country. Single-locale pages (blog posts, US-only city pages) gain nothing.
The rubric check does not currently model that, so it over-flags. The *real* hreflang bug found and
fixed was asymmetry: `webDesignAlternates` pointed `en-GB` at `/uk` while a dedicated
`/uk/web-design` existed and emitted nothing back. **Look for that shape, not for absence.**
Consider narrowing T5 in the rubric so it only applies to pages with a known regional twin.

**E6 mid-page CTA went up (375 → 432) because things got better.** 36 pages gained a `<main>`
element, so the content region is now measured correctly and the check applies to pages where it
previously could not run. Rising numbers after a structural fix are usually scope change, not
regression. Check that before reporting it as one.

---

## 6. Rules that keep this audit honest

These were all learned by getting something wrong in the previous session.

1. **Verify before reporting.** Every large finding in the first run contained at least one false
   positive: anchor links counted as internal links, `₹400Cr+` read as a price, `alt=""` on
   decorative images counted as missing, "6-16 weeks" read as our timeline when it was what
   *traditional agencies* quote, and 5 UK pages reported as missing `<main>` when a co-located
   `*Page.tsx` had it. **Spot-check anything spanning more than ~50 pages against live HTML.**
2. **A judge may only fail a check if it can quote the proving text.** Unsupported failures are
   worse than misses.
3. **Never invent a replacement.** When a fabricated statistic is removed, either get the real
   number from Bhavesh or publish none. The rewritten Belle Maison case study carries zero metrics
   on purpose and says so on the page.
4. **A count is not a conclusion.** "231 meta descriptions over 160 chars" with a median of 169 is a
   rounding problem, not a crisis.
5. **⚪ checks never move a score.**
6. **Codemod discipline:** walk tag depth, never regex-match tag pairs; verify the RESULT, not the
   diff; if a transform goes wrong, `git checkout` the file and redo it in one clean pass rather
   than patching forward. Both component conversions in the last session needed exactly this.

---

## 7. Environment constraints

- **Never run `next dev` / `next build` / `next preview`.** It OOMs this machine (67 GB, 3 restarts).
  Verify with `npx tsc --noEmit`, `node scripts/validate-build.mjs`,
  `node scripts/check-tracked-imports.mjs` and live-URL fetches.
- **Always cache-bust when fetching live URLs.** Cloudflare serves stale HTML for up to ~20h:
  `curl -s -H 'Cache-Control: no-cache' "URL?cb=$RANDOM"`.
- **`check-tracked-imports` before every push.** A file on disk but not in git breaks the Cloudflare
  build, and `tsc` cannot catch it. It caught two real cases last session.
- **`_redirects` has an 8,192-byte rule-content cap.** Rules past it are silently dropped.
  `validate-build` guards this. ~3,100 bytes were free at last check.
- **Bhavesh runs concurrent sessions.** If files change that you did not touch, that is why. Two
  commits landed mid-session last time.
- **Git:** branch `NextJS`, auto-deploys to Cloudflare in ~90s. Give Bhavesh the full copy-paste
  series with explicit `git add` paths, never `-A`. End commit messages with
  `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>`.
- **Explain everything to Bhavesh in plain language.** Short sentences, no jargon, lead with what it
  means and what it costs him. Ask questions the same way. See memory `explain-simply-always`.

---

## 8. Known-open items (US and sitewide)

- `/blog` index: 7,618 words, **zero list items**, despite being a list of posts. Obvious fix.
- `/case-studies/yadav-entrance-automation-website-seo`: 1,000 words, 1 list item. The three new case
  studies are live but thin.
- `/glossary` says `llms.txt` helps AI cite you; our own `/ai-citation-study` says Google states no AI
  system currently uses it. Self-contradiction.
- Entity density is the weakest category at 51%. `/omnichannel-commerce`, `/seo` and `/ai-seo` were
  fixed; the rest were not. This is the one lever with measured evidence behind it: `/b2b-ecommerce`
  is the only page ever cited by ChatGPT (6/9 runs) and its distinguishing trait is naming real
  systems densely.
- E2 (external citations) on 199 pages is the largest genuinely untouched item.
- 34 utility pages still have no `dateModified`.
