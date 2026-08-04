# Perfect-Page Audit — 2026-08-04

**Scope:** all 356 live URLs in the sitemap index, every region.
**Rubric:** `docs/PERFECT-PAGE-RUBRIC.md` v1.0
**Raw data:** `pipeline/research/data/perfect-page-audit-all-2026-08-04.json`
**Re-run:** `node scripts/audit-perfect-page.mjs --region all`

Deterministic layer complete for all 356 URLs. AI-judged layer (checks S9 A3 X5 X6 X7 E3 E4 N3 W5)
run on 108 US pages in this pass; other regions pending.

---

## Where we stand, by region

| Region | n | median score | words | `<li>` in main | FAQ Qs | cap. density | dateModified | x-default | em dashes | 2+ ext. citations | mid-page CTA | visible breadcrumb |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| **US** | 126 | 78 | 3,901 | 15 | 22 | 13.9 | 17% | 48% | **52%** | 45% | 67% | **0%** |
| blog | 117 | 84 | 3,919 | 18 | 19 | 11.6 | 99% | **0%** | 54% | **18%** | 49% | **0%** |
| India | 69 | 82 | 3,985 | 7 | 22 | 14.2 | **0%** | 57% | **100%** | 100% | 100% | **0%** |
| UK | 34 | 81 | 2,642 | 53 | 22 | 5.0 | 85% | 29% | 18% | 15% | 18% | **0%** |
| case study | 7 | 69 | 1,088 | 4 | 5 | 17.7 | 86% | 0% | 100% | 0% | 0% | **0%** |
| UAE | 2 | 73 | 4,614 | 69 | 28 | 20.2 | 50% | 100% | 50% | 0% | 0% | **0%** |
| AU | 1 | 66 | 2,413 | 0 | 22 | 8.7 | 0% | 100% | 100% | 0% | 0% | **0%** |

Scores are comparable within a page-type profile, not across regions with different profile mixes.
Treat the raw columns as the actionable part.

**UAE (2 URLs) and AU (1 URL) are a build backlog, not an audit result.** Three pages cannot support
a regional assessment and nothing below should be read as one.

## Category health, sitewide

| Category | Score |
|---|---:|
| depth | 93% |
| schema | 89% |
| technical | 87% |
| media | 81% |
| architecture | 78% |
| trust | 76% |
| extractability | 66% |
| writing | 64% |
| **entity** | **52%** |

## Fix first — ranked by total weighted points lost across the site

| Check | Points lost | Pages | What it is | Shape of the fix |
|---|---:|---:|---|---|
| X1 | 1,355 | 250 | `<li>` in `<main>` below profile target | Content work, page by page |
| E2 | 816 | 204 | Fewer than 2 external citations | Content work |
| S7 | 732 | 183 | `dateModified` missing | **Template** |
| T5 | 729 | 243 | `hreflang`/`x-default` missing | **Template** |
| A6 | 710 | 355 | No visible breadcrumb | **One component** |
| W1 | 636 | 212 | Em dashes present | **Scripted** |
| X2 | 544 | 319 | Whole-page `<li>` under the 110 benchmark | Follows from X1 |
| T9 | 470 | 235 | Meta description over 160 chars | **Scripted** (median 169, marginal) |
| W3 | 447 | 214 | Reading level above grade 10 | Content work |
| N2 | 443 | 190 | Under 8 named third-party systems | Content work |
| E6 | 375 | 125 | No mid-page CTA | **Template** |
| T8 | 336 | 168 | Title over 60 chars | **Scripted** |
| A4 | 324 | 81 | Under 5 in-content internal links | Content work |
| A5 | 228 | 57 | Under 2 inbound internal links | Linking pass |

The distinction in the last column is the whole point of the ranking. Five of the top twelve are one
template edit each and would move roughly 3,000 weighted points. The rest is real content work.

## 🚨 Critical — verified in the repo, not inferred

These came out of the AI judge pass and were then confirmed directly against source and live HTML.
Each is an **E4 or S9 hard-fail** under the rubric: the page is a liability regardless of its score.
Several are honesty problems before they are SEO problems.

### C1. One client is presented as local to 13 different cities
`Belle Maison` is a real Mumbai client at `bellemaison.in`. It is rendered as
`Belle Maison · Bangalore`, `· Surat`, `· Delhi`, `· Chennai`, `· Hyderabad`, `· Pune`, `· Jaipur`,
`· Kochi`, `· Kolkata`, `· Lucknow`, `· Chandigarh`, `· Ahmedabad` and `· Mumbai` — 13 city pages,
each under a heading of the form "*{City}* brands we have launched." `Impulse Branding` and
`Formative Concepts` follow the same pattern.

On `/services/ecommerce-development/bangalore` and `/surat` the relabelling is contradicted by the
testimonial block **on the same page**, which correctly attributes both clients to Mumbai.

This is misrepresentation of client relationships, not an optimisation gap. Fix before anything else
in this document.

### C2. 13 city pages claim a physical office that does not exist
Every page under `src/app/services/ecommerce-development/*/` ships `LocalBusiness` JSON-LD with a
city postal address and city-centre coordinates (`latitude: 12.9716` for Bangalore, `21.1702` for
Surat, and so on). No office, address, or local phone number appears in the rendered page, and the
`Organization` node on the same page carries only `addressCountry: IN` with one national number.

Fabricated local-business schema is the cloaking-adjacent case Google names explicitly, and it is the
kind of signal that draws a manual action rather than a ranking dip.

### C3. Four of five author personas appear to be invented
`src/data/authors.ts` holds five authors. **Bhavesh Barot is real** — real photograph, real personal
LinkedIn (`/in/barotbhavesh/`), 116 articles that exist. The other four (Rajesh Kumar, Vikram
Malhotra, Priya Singh, Anjali Gupta) are built to an identical template:

- `image` is a `ui-avatars.com` generated initials placeholder, not a photograph
- `linkedin` points at `linkedin.com/company/factoryjet` — the company page, not a personal profile
- each carries specific credentials ("Optimized 100+ high-traffic websites", "Managed mobile
  campaigns for 60+ brands")
- each author page renders **"0 Articles Published"** directly beneath those credentials

`Person` schema ships on 100% of pages, so this is the E-E-A-T signal the site leans on hardest. Four
invented experts is the worst possible version of that.

### C4. Placeholder testimonials are live as real client results
`src/components/v2/TestimonialsSection.tsx:25` carries the note:

> "US testimonials are representative of real SMB client outcomes. Replace with verbatim client
> quotes as they are collected."

Sarah M./Lakeview Interiors, James T./Peak Trail Outfitters and Marcus R./Harborlight Group ship
under a "CLIENT RESULTS" heading with invented metrics ("Mobile checkout conversion went from 1.8% to
4.1%"). **36 pages render the US variant.** The accompanying "Live verified projects" panel prints
the literal string `Portfolio highlight` where the India variant prints real domains — directly
beneath the line "Want to verify? Every URL is live."

### C5. "25-year-old software company" on 15 files, already known to be wrong
`PRODUCT.md` fixes the experience claim at decade-plus and rules out 25 years explicitly. Two files
(`src/app/austin/seo/page.tsx:712`, `src/app/denver/seo/page.tsx:404`) carry a code comment saying
exactly that. The claim survives in 15 other files, several of which contradict themselves on the
same page by also saying "12+ years".

### C6. Schema promises a 7-day build the pages themselves deny
`HowTo` with `totalTime: P7D` ships on pages whose visible copy says 4-8 weeks
(`/services/web-application-development`), 2-6 weeks (`/charlotte/ai-automation`), and "7 to 70 days"
(`/services/shopify-development`). Separately, **52 files** put "Lighthouse 95+" in `Service` schema
while the visible page commits to "Lighthouse 90+".

### C7. A recurring unsourced statistics block
`₹400Cr+ client revenue`, `97% delivered on time or early`, `4.9 average across 500+ projects`, and a
count that appears variously as `523+`, `500+` and `120+`. No source, no method. It rides the same
component across many pages, so one fix clears all of them.

---

## Findings worth acting on directly

### 1. No visible breadcrumb exists anywhere on the site (355/356 pages)
`src/components/BreadcrumbSchema.tsx` emits `BreadcrumbList` JSON-LD and renders nothing. So the site
ships structured data describing a navigation trail a user cannot see, on 74% of pages. Google's
guidance is that structured data should represent visible content, which makes this a soft S9 issue
as well as a missing UX element. One component, sitewide effect.

### 2. 216 pages have no `hreflang` at all
Not a broken `x-default`, absent entirely. Every blog post (117) is in this set. Given four regional
variants of overlapping content, this is the single largest technical gap and it is template-level.

### 3. Em dashes on 212 pages, against a hard zero rule
100% of India pages and 100% of case studies. `/web-design/indore` alone carries 99 in visible copy.
Verified against live HTML, these are literal U+2014 in rendered content, not encoding artifacts.
Scripted fix, but it needs care: replacements must be commas, periods, colons or parentheses chosen
per sentence, not a blind swap.

### 4. `dateModified` splits cleanly by template
99% on blog, 86% on case studies, 85% on UK, and then **17% on US and 0% on India**. It ships from
some templates and not others. The benchmark is 56% and this is the cheapest schema field we have.

### 5. 48 pages exceed the 5,000-word ceiling
`/fargo/seo` at 9,942, `/sioux-falls/seo` at 8,482, `/huntington-beach/seo` at 7,795. City SEO pages
at 3.5x the benchmark median of 2,813. Rulebook rule 8 puts the ceiling at 5,000 and only 3 of 58
cited pages exceed 6,000. These are over-built, not under-built.

### 6. 69 non-hub pages have zero list items in content
Against a benchmark median of 110 whole-page list items, and X1 is the highest-weighted structural
check in the rubric. This is the same finding the 2026-08-03 audit reached by a different route, so
it is now confirmed twice.

### 7. Entity density is the weakest category at 52%
UK pages sit at a median of 5.0 capability terms per 1,000 words. `/b2b-ecommerce`, the only page
ever cited by ChatGPT, sits at 55.3. This is a 🔵 signal with a small sample behind it, so treat it
as a hypothesis worth testing, not a proven cause.

## What is already good

- **Exactly one `<h1>` on 356 of 356 pages.** Benchmark is 55/58. Clean.
- **No schema declared-but-never-rendered defects** (check S8, via `audit-rulebook.mjs`). The class of
  silent bug found on 2026-08-03 has not recurred.
- **Depth at 93%** and median words at or above the 2,813 benchmark in every region except UK.
- **`Person` schema universal**, well above the 41% benchmark, because it ships from `layout.tsx`.
- Only 25 pages have a skipped heading level.

## Corrections made to the audit itself

Recorded because each was a false finding that survived until it was checked against live HTML:

1. Same-page anchors (`#faq-start`) were being counted as internal links and collapsing to `/`,
   inflating the homepage's inbound count and inventing outbound links.
2. `₹400Cr+ client revenue` was read as a price. A magnitude suffix means the figure is a statistic.
3. `alt=""` on decorative images was scored as a missing alt. Empty alt is the correct markup.
4. The pricing check was then removed from the deterministic layer entirely and moved to the AI
   judges: a regex cannot tell FactoryJet's own price from a competitor's price in a comparison
   table, and most hits were the latter.

The first run of this audit reported all four as real. Verify anything that spans more than ~50 pages.
