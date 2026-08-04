# AI-judge pass: India, UK, blog, UAE, AU — 2026-08-04

**Scope:** every non-US page in the sitemap index. The US pass was completed earlier the same day.
**Rubric:** `docs/PERFECT-PAGE-RUBRIC.md` v1.0
**Checks judged:** `S9 A3 X5 X6 X7 E3 E4 N3 W4 W5` (the ten a script cannot read)
**Raw data:** `pipeline/research/data/perfect-page-audit-all-2026-08-04.json`
**Judge verdicts:** 33 batches, ~8 URLs each, one verdict per check per page, each with a quote.

Deterministic pass re-run first (`--region all`, 355 URLs). Numbers matched the previous run, so the
judged layer sits on current data.

---

## Read this first

Every finding below is quote-backed. **No verdict in this pass had to be dropped for lack of a
quote** — the honesty rule held across all 33 batches.

Anything spanning more than ~50 pages was re-verified by hand against live HTML or source before it
was written down. Three judge findings were corrected in that process; they are recorded in
§7 so the corrections are not lost.

---

## 1. Hard fails — pages that state something untrue

These are E4 (invented statistic, client, award or testimonial) or S9 (schema contradicting visible
content). Under the rubric each is a liability regardless of the page's score.

**236 pages judged. 65 hard fails. Zero verdicts dropped for want of a quote.**

| Region | Pages judged | Hard fails | Judged checks passing |
|---|---:|---:|---:|
| blog | 117 | **35** | 61% |
| UK | 34 | **17** | 59% |
| India | 82 | **12** | 68% |
| UAE | 2 | 1 | 50% |
| AU | 1 | 0 | 60% |

The blog is the worst region and it had never been judged before. India, expected to be worst
because the fabricated-locality pattern lived there, is the **best** of the three — because that
pattern was genuinely fixed. What remains in India is template leakage, not fabrication.

Scores are comparable within a page-type profile only. UAE (2 pages) and AU (1 page) are a build
backlog, not a region; nothing here should be read as a regional assessment of either.

### 1.1 UK city pages name competitor agencies that do not exist

**13 of 20 UK cities.** One data file, one fix.

The FAQ answer "Who else builds websites in {City}?" is generated from
`city.localAgencies['web-design']` in `src/data/countries/gb/cities/*.json`, rendered by
`src/lib/uk-pages/city-hub.tsx:126`. In 13 cities those names follow a mechanical template:

> "There is a real local market, and we would rather name it than pretend otherwise. **Oxford Web
> Design, Digital Oxford, Creative Solutions Oxford** all work in this city."

The proof is on the page itself. A few sections above, the same page lists real page-one agencies
pulled from live SERP data. On `/uk/leicester` the sourced block names `itseeze-leicester.co.uk`,
`poddigital.co.uk`, `dotwall.co.uk`, `kudosdesignswebsites.co.uk` and `webdesignersleicester.co.uk`
— none of which is "Leicester Digital", "Web Design East Midlands" or "Digital Fox".

Verified live by hand on Leicester, Oxford and Cardiff. Judges independently verified by web search
that several do not exist, and that "Storm Consultancy" (listed under Edinburgh) is a Bath agency
and "Digital Wales" is a Welsh Government programme.

**Template-shaped:** cambridge, cardiff, coventry, derby, glasgow, hull, leicester, newcastle,
nottingham, oxford, plymouth, sheffield, southampton.
**Real names, leave alone:** birmingham, brighton, bristol, edinburgh, leeds, london, manchester.

### 1.2 `/uae` — the worst single page on the site

Three separate contradictions, all verified by hand against live HTML:

- **Two experience claims on one page.** "combining cutting-edge artificial intelligence with **12+
  years** of human expertise" against "**25+ Years Experience**", which appears twice.
- **An unearned ranking claim.** "**#1 Rated Web Design Agency in Dubai**" — no rating body, no
  award, no source anywhere on the page.
- **S9: schema says Bengaluru, page says Dubai.** JSON-LD carries
  `"streetAddress":"ITPL Main Rd, Tigalarpalya, Brookefield"`, `"addressLocality":"Bengaluru"` while
  the visible page shows "Office / **Dubai Internet City** / Schedule a visit".

Delivery time also contradicts itself three ways on the same page: "5-7 Days Delivery" against its
own table ("2-4 Weeks"), its own FAQ ("typically takes 2-4 weeks") and its own process ("Week 12-13").

`/uae/ecommerce-development` carries the same Bengaluru street address. These are the **only two
pages on the site** with a street address in schema — the fabricated-office problem is contained
here, it did not spread.

### 1.3 The "25 years" claim is still live on 17 files

`PRODUCT.md:11` states the rule outright: *"Experience framing = decade-plus / '10+ years', NEVER 25
years."* `Organization` schema says `foundingDate: 2014`, which is 12 years.

Still claiming 25 years:

- Six India SEO pages (`/seo/bangalore|chennai|delhi|hyderabad|mumbai|pune`) — all in the same
  banner string: *"India's Trusted SEO Company, 500+ Sites Ranked, 4.9 Average Rating, 25 Years
  Building"*
- `/services/ai-agent-development`, `/shopify-development`, `/web-design`
- Three About-page components, two UAE components, two legacy city templates
- One blog post: `sell-ai-automation-services-uk-agency-playbook-2026` — whose H1 says *"25+ Years
  Refined"* while its own body says *"12+ years of agency experience"*

Several pages contradict themselves in body copy on the same screen. Fixing the shared India banner
string clears four hard fails at once.

### 1.4 Client relationships are still being re-described

The fabricated-*locality* bug was genuinely fixed (commit `b0ed1f7`) — Belle Maison reads "· Mumbai"
correctly on every India city page and the fake `LocalBusiness` lat/long is gone. Judges confirmed
this on ~60 India pages.

What survived is a different shape: the client's **business** is rewritten to fit the page.

| Page | What it says | What is true |
|---|---|---|
| `/uk/ecommerce-seo`, `/uk/shopify-seo` | "Belle Maison — Home décor ecommerce, **UK**"; "Impulse Branding — Promotional products, **UK**" | Both are Mumbai clients |
| `/blog/austin-ecommerce-checkout-optimization-2026` | "Belle Maison, a 200+ SKU **Shopify DTC** brand" with cart sizing questions | Commerceflo B2B quote-to-cash, wholesale distributor |
| `/blog/top-ecommerce-development-agencies-uk-2026` | "Belle Maison, a Mumbai-based **lighting retailer**… delivered in three weeks on **WooCommerce**" | Artificial plants/flowers/décor/LED, on Commerceflo |
| `/blog/website-redesign-cost-uk-2026…` | "Belle Maison uses **WordPress** for blog-driven traffic" | Commerceflo |

`/uk/ecommerce-seo` also introduces "Vishal; Director, **Bombay Petals** — B2B artificial plants,
London" — Belle Maison's line of business, relocated, under a name not on the confirmed client list.

### 1.5 Fabricated citations in blog posts

Blog posts are where invented statistics hide, and they did. Judges were required to separate
"unverified" from "verified wrong". These are the **verified wrong** ones:

| Page | Claim | Reality |
|---|---|---|
| `/blog/evaluate-web-design-agency-us-smbs-2026` | "**Gartner** 2025 data shows downtime costs SMBs an average of **$427 per hour**" | The $427 benchmark is *per minute* and is not Gartner's. Wrong by ~60× and misattributed |
| same page | "The **Federal Trade Commission's** 2025 guidance on digital accessibility (WCAG 2.2 AA)" | No such guidance exists. Federal rulemaking is DOJ ADA Title II, WCAG 2.1 AA |
| `/blog/seo-recruitment-agencies-uk-2026` | "increases your chance of appearing in AI answers by **47%, per Google's 2026 Search Central documentation**" | Google Search Central publishes no quantified lift figures at all |
| `/blog/how-to-build-online-store-uk-smb-guide-2026` | "The ICO issued **47 penalty notices** to UK e-commerce businesses in 2025" | ICO issued ~7 penalties in 2025 across every sector |
| same page | "fines start at **£8.7 million or 4%** of turnover" | £8.7m pairs with 2% as the standard *maximum*, not a floor |
| `/blog/best-ecommerce-agency-small-business-australia-2026` | "**IBM's** 2025 Cost of a Data Breach Report found unpatched sites face **AUD $4.2 million**" | Report is real, published in USD, has no AUD figure and no "unpatched sites" scope |
| `/blog/best-sales-automation-small-business-uk-2026` | "National Living Wage increased to **£11.44** per hour in April 2026" | £11.44 was April 2024. April 2026 is £12.71. The page's savings maths is built on it |
| `/blog/is-seo-dead-2026-ai-search-data` | "Perplexity reports ~15 million **daily** active users" | 15M was *monthly*. Misleads by ~30× against Google's daily figure |
| `/blog/woocommerce-seo-tips-uk-stores` | "'trainers' outperforms 'sneakers' **8:1 in UK Google data**" | Google publishes no such dataset |
| `/blog/world-cup-2026-ecommerce-flash-sale-store-us` | AOV table credited to "**NRF** sports merchandise category data"; $5bn from "bid documents submitted to **Congress**" | Neither publishes these. Bid books go to FIFA |
| `/blog/website-redesign-small-business-uk-2026-ai-powered` | "**68%** of UK buyers abandon sites… according to **Google's 2025 consumer research**" | Real Google/SOASTA figure is 53%, not UK-specific, predates 2017 |
| same page | "WCAG 2.2 AA became a **legal requirement** for UK businesses in October 2025" | False. FactoryJet's own web-design page states the correct position |
| `/blog/what-does-web-design-agency-do-2026` | "penalties that **start at £8.7 million or 4%** of global turnover" | Second instance of the same GDPR error. £8.7m pairs with 2%; it is a ceiling, not a floor |
| same page | "every **100ms** delay costs 7% conversions" | 10× overstatement of the real per-second figure, repeated into the FAQ |

Plus a set of **named-source citations that could not be found at all** — reported as unverified,
not invented, because absence of a search result is not proof: a Clutch "500 US small businesses"
survey, a Moz "10,000 SMB websites" analysis, a Freelancers Union client survey, a BrightLocal
600-SMB survey, an "Ahrefs 5,000 e-commerce sites" study, an "Authoritas AI Overview Content Format
Study", a "Semrush SEO Timeline Research (2024)", and an FSB "£47 million annually" figure.

Two of these are **circular citations** — the only page on the web carrying the claim is the
FactoryJet page itself (`Backlinko 2024 SEO survey`, `$1,497/month median retainer`).

### 1.6 Two Wikidata errors became six

A judge found 2 wrong `areaServed` Wikidata IDs. Sweeping all 13 India e-commerce city pages found
**6 wrong**, resolved against the live Wikidata API:

| Page | Ships | Actually resolves to | Correct ID |
|---|---|---|---|
| `/services/ecommerce-development/surat` | `Q170166` | **Martin Marietta X-24** (experimental aircraft) | needs Surat, Gujarat |
| `/services/ecommerce-development/jaipur` | `Q39654` | **EC135** (helicopter) | `Q66485` |
| `/services/ecommerce-development/kochi` | `Q131183` | **cabaret** | `Q1800` |
| `/services/ecommerce-development/lucknow` | `Q72234` | **Châtelaillon-Plage**, France | `Q47916` |
| `/services/ecommerce-development/chandigarh` | `Q43009` | **San Giacomo delle Segnate**, Italy | `Q43433` |
| `/services/ecommerce-development/bangalore` | `Q1070` | **Ahmedabad** | `Q1355` |

Correct already: ahmedabad, mumbai, hyderabad, chennai, kolkata, delhi, pune.

This is a hand-maintained city→Wikidata map. It should be resolved programmatically, not by hand.

---

## 2. The "500+" figure is claimed separately by three different markets

The confirmed-real aggregate is **523+ projects across all markets combined**. That is not what the
site says.

**70 single-market claims across 57 files** take the whole total for one market:

- **US-only: 44 claims in 33 files** — "500+ US brands served", "500+ stores across the US",
  "500+ WordPress sites for US businesses", "500+ US small businesses served"
- **India-only: 20 claims in 19 files** — "500+ India web projects", "500+ Indian brands who chose
  FactoryJet", "500+ India SMB projects"
- **UK-only: 5 claims in 4 files** — "500+ projects for real UK ecommerce brands", "500+ web
  projects delivered to UK SMBs since 2018"

A further **104 claims are correctly phrased as combined** ("500+ businesses across India, the US,
the UK and the UAE") and are fine. The fix is to make the other 70 match that phrasing.

Related, on the same badge: **"98% Client Satisfaction"** and **"ISO certified"** ride along on many
of these blocks. Neither is on the confirmed-true aggregate list, and the ISO claim names no
standard and no certifying body.

---

## 3. India: US copy renders on 54 of 82 India pages

Verified by fetching all 82 India URLs live, not inferred from source.

Every one renders this block mid-page:

> "BY THE NUMBERS · 523+ · Websites designed and built for **US small businesses**, Shopify stores,
> B2B companies, and DTC brands."

It appears on India web-design city pages, India e-commerce city pages, India digital-marketing city
pages, and the India AI-agent pages — including pages whose own delivery timeline is 2–6 weeks while
the block promises 7 days.

This is one shared component leaking US-market copy into the India tree. It is the single largest
content defect in the India set and it is one fix.

Related, smaller: `/web-design/chennai` and `/web-design/madurai` render "Trusted by 500+ businesses
across the US, UK, and UAE" — **omitting India, on an India page**.

---

## 4. Cross-cutting patterns worth one sweep each

**FAQ schema drift is mostly gone, but three pages still have it.** The 2026-08-04 fix held on the
overwhelming majority — judges verified hundreds of Q&A pairs matching verbatim. Survivors:
`/web-design/surat` (22 in schema, 16 rendered), `/web-design/madurai` (22 vs 16), and `/uk` (a 25th
schema-only question that states "we are based in Bengaluru, India" and gives a WhatsApp number
`+44 (0) 9699 977 699` that is not a valid UK format, where the visible page shows `+91`).

On Surat and Madurai the hidden six are **all the pricing and "best agency" questions** — commercial
terms a reader can never see but a machine can.

**Duplicate JSON-LD blocks** on at least six blog posts emit `Article` and `FAQPage` twice. This
inflates the deterministic FAQ counts upstream — `/blog/seo-audit-cost-2026` reads as 42 questions
when it has 21. Worth fixing before trusting FAQ-depth numbers.

**Count-up counters serve zeros to crawlers.** `/uk/manchester` and `/uk/leeds` render `0 +`,
`£ 0 B`, `0 %` in the served HTML, including a case study reading **"After FactoryJet — Lighthouse
Performance 0 / 100"**. Also a CLAUDE.md violation (spinning counters are banned).

**A price-scrub codemod left broken sentences.** On at least four pages:
> "Our pricing sits at a fixed, transparent price, and we deliver in 2–4 weeks"
> "a starting price of $1,999, about at a fixed, transparent price"
> "while charging 50% to at a fixed, transparent price"

An automated edit ran and was never proofread — and it did not remove the `$1,999`/`$2,999` figures
it was presumably meant to remove.

**Stale content that is actively wrong today:** both World Cup posts still say *"That is 27 days from
today"* and *"Publish now"*. Verified live on 2026-08-04, three weeks after the tournament ended on
July 19. `/blog/world-cup-2026-seo-small-business` also calls **Tampa a host city**; it is not, and
the same page lists the real eleven.

**Facts that have simply gone out of date:** `/uk/newcastle` lists **Northern Rock** and **British
Energy** as current major employers (defunct 2012 and 2009); a Nashville post names **SmileDirectClub**
(ceased Dec 2023); India FAQs recommend **Dunzo** for same-day delivery (ceased operations); a UK page
tells buyers to demand **FID under 100ms** (Google replaced FID with INP in March 2024).

---

## 5. What the judged checks say, in aggregate

Across 236 judged pages, weighted points lost, worst first:

| Check | Wt | Fail | Partial | Pass | Points lost |
|---|---:|---:|---:|---:|---:|
| E4 | 6 | 52 | 86 | 97 | **570** |
| E3 | 5 | 53 | 106 | 77 | **530** |
| X5 | 3 | 28 | 111 | 97 | 251 |
| W4 | 4 | 23 | 47 | 166 | 186 |
| S9 | 5 | 21 | 27 | 188 | 173 |
| A3 | 3 | 12 | 66 | 158 | 135 |
| W5 | 2 | 57 | 10 | 169 | 124 |
| N3 | 3 | 18 | 46 | 172 | 123 |
| X6 | 2 | 0 | 67 | 169 | 67 |
| X7 | 2 | 9 | 29 | 198 | 47 |

E4 and E3 together are 55% of all points lost. Both are honesty checks, not optimisation checks.
That is the headline: the non-US estate's weakest dimension is not structure or schema, it is
whether the pages tell the truth about the business.

| Check | What it is | Why it fails here |
|---|---|---|
| **E4** | No invented statistics/clients/awards | The single biggest problem. Unsourced precise numbers, misattributed real sources, and client business models rewritten per page |
| **E3** | Trust signals real, not decorative | Most pages' only proof is a generic "500+ · 98% · ISO certified" badge — which the rubric scores zero, and two-thirds of which is unconfirmed |
| **X5** | FAQ answers 40–75 words | Fails in **both** directions: UK city FAQs run 11–30 words, blog and India service FAQs run 90–140 |
| **S9** | Schema matches visible content | Mostly clean. Concentrated in the specific pages named in §1 and §4 |
| **W4** | Not commodity content | Template leakage: Gujarat comparison rows on Indore/Jaipur/Lucknow pages; 87% sentence-identical siblings |
| **A3** | Each H2 answers one question | A recurring credential banner used as an H2 with no section body under it |
| **N3** | Entity coverage matches topic | UK is worst. `/uk/london/seo` names **zero** SEO tools across 3,465 words; `/uk/ai-agents` names zero integration targets |
| **W5** | No FactoryJet pricing | See §6 — this needs a decision, not a fix |
| **X6** | FAQ phrased as buyers ask | One ungrammatical template line sitewide: *"Should I hire web designer in {City} or use an agency?"* |
| **X7** | Definition sentences present | UK city pages open definitions with a pronoun ("It means being findable…"), so they don't survive extraction |

---

## 6. One decision needed from Bhavesh

**40 of 94 blog posts publish FactoryJet's own prices.** Verified from source with a tightened
matcher that excludes competitor pricing and third-party tool costs.

The figures are consistent — `$1,999` web design, `$2,999`/`$2,499` stores, `£3,000` AI agents,
`£500/month` SEO — which reads as a deliberate content decision, not an accident.

That conflicts with the standing "no pricing" rule the rubric encodes as W5. Both cannot stand.

This is a business call, so nothing was changed. Two options:
1. **Pricing stays** — then W5 should be removed from the rubric, because a check nobody intends to
   pass is noise that hides real findings.
2. **Pricing goes** — then it is a scripted removal across 40 files, and the previous scrub's broken
   sentences (§4) need repairing at the same time.

---

## 7. Corrections made to this audit

Recorded because each was a plausible finding that did not survive verification. The rubric requires
anything spanning more than ~50 pages to be checked against live HTML first, and that is what caught
these.

1. **"~90 city pages may have fabricated office schema" — false.** A judge reasonably flagged
   `addressLocality` on `/web-design/bangalore` and suggested sweeping the rest. Sweeping all of
   `src/app` found `addressLocality` in **10 files**, and only the **two UAE pages** carry an actual
   `streetAddress`. City-only markup with no street address and no coordinates is legitimate
   service-area schema, not a fabricated office. The `/seo/mumbai` and `/seo/bangalore` cases are
   still real S9 failures, but for a different reason: the visible page says *"We are not based in
   Mumbai"* while the schema asserts opening hours.

2. **"20 files claim 25 years" — actually 17.** Three of the 20 matches are code comments
   *explaining the rule* (`austin/seo`, `denver/seo`, `authors.ts`). Counting them would have
   inflated the finding by 18%.

3. **"175 pages misuse the 500+ figure" — actually 70.** The first sweep counted every scoped
   mention. But "500+ businesses across India, the US, the UK and the UAE" is a correct combined
   claim; 104 of the 175 were fine. Only single-market scoping is the defect.

One process note for the next run: judge agents were writing temp files into a shared scratchpad
directory and two of them overwrote each other's working files mid-run. Both re-ran in isolated
directories and re-verified their quotes, so no finding was affected. Later batches were given
batch-scoped directories. **Give every judge its own scratch directory next time.**

---

## 8. Fix order

Ranked by harm per unit of work, not by points.

1. **`/uae`** — one page, four separate untrue statements, including a Dubai office that is a
   Bengaluru address in schema. Highest harm-to-effort ratio on the site.
2. **UK invented competitor agencies** — 13 pages, one JSON data file. Naming firms that do not
   exist, directly beneath a list of firms that do.
3. **The India US-copy leak** — 54 pages, one component.
4. **"25 years"** — 17 files, against an explicit written rule and the site's own schema.
5. **The scoped "500+" claims** — 70 statements in 57 files. Mechanical rephrase to the combined
   form already used correctly 104 times.
6. **The 10 verified-wrong blog citations in §1.5** — each is one sentence. Get the real number from
   Bhavesh or remove the claim. **Do not invent a replacement.**
7. **Six Wikidata IDs** — resolve programmatically against the API.
8. **FAQ schema drift on 3 pages, duplicate JSON-LD on ~6 blog posts.**
9. **Stale content** — the two World Cup posts, then the defunct-company references.

Items 1–5 are roughly 80% of the honesty exposure and are all template or data fixes rather than
page-by-page content work.
