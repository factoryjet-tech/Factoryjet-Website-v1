# E-Commerce SEO + GEO Audit — FactoryJet (2026-08-01)

Companion to `US-LEAD-GEN-PLAN.md` / `UK-LEAD-GEN-PLAN.md`, covering FactoryJet's core positioning
category: E-Commerce Development, Shopify, WooCommerce, Magento, BigCommerce, headless/omnichannel/B2B
commerce, and Commerceflo, across all four markets (US, UK, India, UAE).

Data: `data/ecommerce_demand_{us,uk,india,uae}.csv`, `data/ecommerce_demand_summary.json`,
`data/ecommerce_rank_matrix.json`. Scripts: `dfs_ecommerce_demand.py`, `dfs_ecommerce_rank_matrix.py`.
Live DataForSEO spend: $1.855 (demand) + $6.732 (rank matrix) = **$8.587**. GSC pulled via
`enhanced_search_analytics`/`detect_quick_wins` (2026-05-01 to 2026-07-29, site `sc-domain:factoryjet.com`).
Content audit: 7 parallel read-only agent passes across every identified e-commerce page.

---

## 1. Bottom line

- **Zero visibility on e-commerce superlative terms, everywhere.** Across 18 keyword×geo pairs
  spanning all 4 markets: **0 rank in Google top 100, 0 AI Overview citations (17/18 queries DO show
  an AIO — we're just never in it), 0/120 LLM mentions** (ChatGPT/Claude/Gemini/Perplexity, 3 runs
  each). This is not a tuning problem, it's a from-zero build.
- **The demand is real and some of it is cheap.** Several US terms sit at KD 0-5 with high commercial
  value: *best ecommerce agency* (KD 0, $178 CPC), *top ecommerce development company* (KD 0, $34
  CPC), *top shopify development company* (KD 1, $15.60 CPC), *best shopify agency* (KD 5, $22 CPC).
  These are realistic near-term targets even with FactoryJet's authority constraint (~44 referring
  domains); most other superlative terms (KD 25-85) are not, until authority grows — consistent with
  the standing US/UK/India doctrine.
- **Most of the "add superlatives" work is nearly free** because the supporting content already
  exists. All 13 US city pages and all 13 India city pages already answer "who is the best
  [service] in [city]" inside their FAQs; the India cities already carry "Most Trusted" in the H1.
  The gap is mechanical (title tags, a few H1s), not new content.
- **The bigger, more urgent problem is a pile of confirmed bugs actively suppressing citation
  eligibility** — FAQ schema showing AI crawlers less than half the real FAQ content on 6 pages, a
  shared component silently discarding authored content on 5 pages, a real rupee price embedded in
  machine-readable schema, confirmed gradient-text/glow-orb design-doctrine violations on 6 pages, a
  cross-page testimonial photo attributed to two different companies, and 6 India city pages showing
  the wrong city in their own case-study proof. Four of these are already spun into scoped fix tasks
  (chips shown separately); the testimonial issue needs your call, not an autonomous fix.
- **UAE has no dedicated e-commerce page at all** despite ~450/mo of measurable superlative demand
  and — importantly — the supporting content (a $27B market stat, a Shopify/WooCommerce case study,
  BNPL specifics) already exists, just buried inside the single UAE homepage. This is the cheapest
  "new page" opportunity in the whole audit.

---

## 2. Full e-commerce page inventory (as of 2026-08-01)

**US (root-level, no `/us` prefix):**
- Core hub cluster (`/services/*`): `ecommerce-development` (also the India-city parent hub),
  `ecommerce-growth-agency`, `ecommerce-marketing-agency`, `ecommerce-seo`, `magento-development`,
  `shopify-development`, `shopify-seo`, `woocommerce-development` — 8 pages.
- Standalone top-level: `/shopify-development` (**India-targeted**, not a US dupe — see §6),
  `/bigcommerce-development`, `/headless-commerce`, `/omnichannel-commerce`, `/b2b-ecommerce`,
  `/best-ecommerce-platforms`, `/ecommerce-consulting`, `/commerceflo`, `/wordpress-development`
  (covers WooCommerce too) — 9 pages.
- City pages (`/{city}/ecommerce-development`): austin, boise, charlotte, chattanooga, denver, fargo,
  lincoln, miami, nashville, portland, raleigh, sioux-falls, tampa — 13 pages.

**India:** 13 city pages under `/services/ecommerce-development/{city}` (ahmedabad, bangalore,
chandigarh, chennai, delhi, hyderabad, jaipur, kochi, kolkata, lucknow, mumbai, pune, surat) +
`/seo/ecommerce-seo`.

**UK:** 4 national pages (`/uk/ecommerce-development`, `/uk/ecommerce-seo`, `/uk/shopify-development`,
`/uk/shopify-seo`) **plus** a dynamic `/uk/{city}/ecommerce` route live for 15 non-bespoke cities
(Bristol, Edinburgh, Nottingham, Leicester, Cardiff, Glasgow, Newcastle, Southampton, Brighton,
Oxford, Cambridge, Derby, Coventry, Hull, Plymouth). **Manchester, Birmingham, Leeds, Liverpool, and
Sheffield — 5 of the UK's biggest cities — have no e-commerce page at all**, static or dynamic.

**UAE:** none. E-commerce is folded into 6 sections of the single `/uae` homepage (market stat,
service card, industry vertical, pricing tab, case study, FAQ) but has no dedicated URL. Magento and
Commerceflo: zero mentions.

**Australia (secondary market):** same pattern as UAE, one level shallower — a homepage section only,
CTA links out to the US-owned `/services/ecommerce-development` hub.

**Total: ~62 live e-commerce-relevant pages** (39 US, 14 India, 4 UK national + 15 UK dynamic-city =
19 UK, 0 dedicated UAE/AU).

---

## 3. Live demand data (empirically measured, not assumed)

### Superlative volume by market (monthly, e-commerce-specific seeds only)

| Market | "best" | "top" | other (affordable/leading/etc) | Total superlative |
|---|---:|---:|---:|---:|
| US | 3,400 (80 kw) | 960 (27 kw) | ~60 | ~4,420 |
| India | 2,790 (82 kw) | 660 (26 kw) | ~80 | ~3,530 |
| UK | 1,240 (52 kw) | 220 (18 kw) | ~90 | ~1,550 |
| UAE | 370 (32 kw) | 80 (8 kw) | ~20 | ~470 |

*Note: this is higher than the 610/mo India-ecommerce figure in earlier research — that pull used
narrower seeds and likely bucketed "best web design for ecommerce" under the web-design vertical
instead. Both are directionally correct; this pull is the e-commerce-specific ceiling.*

### Highest-value US targets (near-zero KD, real CPC — the realistic near-term list)

| Keyword | Vol/mo | KD | CPC | Maps to |
|---|---:|---:|---:|---|
| best ecommerce agency | 70 | **0** | $178.14 | `/services/ecommerce-development` |
| top ecommerce development company | 110 | **0** | $34.32 | `/services/ecommerce-development` |
| top shopify development company | 50 | **1** | $15.60 | `/services/shopify-development` |
| best shopify agency | 70 | 5 | $22.18 | `/services/shopify-development` |
| best magento development company | 50 | 7 | — | `/services/magento-development` |
| best shopify seo agency | 30 | 0 | — | `/services/shopify-seo` |
| best ecommerce web design | 320 | 9 | $6.30 | `/services/ecommerce-development` (biggest single term, every market) |
| best ecommerce seo company | 320 | 10 | — | `/services/ecommerce-seo` |
| best digital marketing agency for ecommerce | 50 | 12 | **$570.08** | `/services/ecommerce-marketing-agency` |

*Cross-market pattern: "best ecommerce web design" (and its word-order variants) is the single
biggest superlative term in every market (US 320, India 260, UK 140, UAE 20) — worth weaving that
exact phrase into copy/FAQs on the ecommerce-development pages, which are currently titled/organized
around "development" not "web design."*

### India — notable branded/competitor queries surfaced

"hrl infotechs pvt ltd best ecommerce marketing agency" (140/mo), "evrig top magento development
company" (110/mo), "magetornado leading magento development agency" (30/mo) — real competitors India
buyers search by name. Also: India searches include real volume for "...in dubai" ecommerce dev
queries (50/mo) — a small but real signal of India-to-UAE cross-market demand.

Full per-market top-40 lists: `data/ecommerce_demand_{geo}.csv`.

---

## 4. Rank matrix — who actually owns these surfaces

FactoryJet: 0/18 organic, 0/17 AIO (AIO present on 17/18 queries), 0/120 LLM mentions.

| Surface | Top domains (appearances across 18 e-commerce superlative targets) |
|---|---|
| Google organic top-10 | firstpagesage.com (5), clickpost.ai, agencies.semrush.com, polarisagency.com, charle.co.uk (UK), orangemantra.com (India), lusciousleopard.com |
| Google AI Overview citations | thriveagency.com (3), outerboxdesign.com (3), forbes.com, brainvire.com, sherocommerce.com, resultfirst.com, seobusiness.co.uk, seoworks.co.uk, elsner.com (India) |
| Named by LLMs (ChatGPT/Claude/Gemini/Perplexity) | **coalitiontechnologies.com (40)**, smartsites.com (35), webfx.com (33), thriveagency.com (28), **outerboxdesign.com (23)**, **absoluteweb.com (23)**, **wemakewebsites.com (20)**, **1digitalagency.com (19)**, searchbloom.com (19), **goinflow.com (15)** |

**This is a genuinely different competitor set from FactoryJet's general SEO-agency rivals** (WebFX/
Thrive/SmartSites still show up, but bolded names above are e-commerce/Shopify *specialists* —
OuterBox, AbsoluteWeb, WeMakeWebsites, 1Digital, GoInflow — that don't appear in the general "best
seo agency" competitor set from prior research). E-commerce is a distinct citation battle, not a
subset of the SEO one.

---

## 5. Current GSC reality (90-day window)

- **A blog post is the single highest-traffic e-commerce-adjacent asset on the entire site**:
  `/blog/shopify-development-cost-2026` — 1,174 impressions, pos ~9.9, **2 clicks**, pulling traffic
  from US/India/Malaysia/UK. Six of the 17 sitewide "quick win" opportunities that touch e-commerce
  point at this one post (queries like "shopify development cost," "how much do shopify developers
  charge," "shopify theme development cost" all sit at position 5-10 with zero clicks).
- **Superlative queries are ~1% of current e-commerce-page traffic** (109 of 10,450 impressions across
  the full query set) — confirms this is genuinely greenfield, not a page already halfway there.
- **Real routing leak, e-commerce flavor of a known pattern**: the query *"ai seo agency for
  ecommerce"* (763 impressions, position 8, 0 clicks) lands on `/blog/best-ai-seo-agencies-india`
  instead of any e-commerce or AI-SEO service page — same India-blog-absorbs-US-commercial-intent
  pattern already documented for plain "ai seo agency," now confirmed on an e-commerce-qualified
  version too.
- **Brand-query leak**: "commerceflo" (52 impressions, position 6.3) currently lands on the homepage,
  not `/commerceflo`. The content audit found a plausible cause: the Commerceflo page's H1 ("Your
  storefront's AI operator") never actually says "Commerceflo" — the brand name only appears in the
  eyebrow — combined with it being the thinnest page in the whole audit (~1,150 words, 12 FAQs, well
  under the 20+ standard).
- **UK's `/uk/{city}/{service}/{platform}` doorway URLs** (e.g. `/uk/nottingham/ecommerce/shopify`,
  hundreds of residual impressions) are confirmed still correctly 301-redirected in `_redirects` —
  this is stale Google index lag, not a live bug. No action needed.
- Two pages spot-checked via `index_inspect` (`/commerceflo`, `/services/ecommerce-development`) are
  both cleanly indexed (`PASS`, crawled within the last 24-48h) — the visibility gap is content/
  authority, not a technical indexing block.

---

## 6. Content audit findings by group

### 6a. US core `/services/*` cluster (8 pages)

Only `ecommerce-seo` has "Best" anywhere (Title only, not H1). Three pages already have the FAQ
groundwork for a low-risk rewrite (`ecommerce-seo`, `ecommerce-development`, `shopify-development`);
`magento-development`/`woocommerce-development`/`shopify-seo` don't yet. `ecommerce-growth-agency`
and `ecommerce-marketing-agency` deliberately avoid superlative claims in favor of named-competitor
comparison tables — that's a positioning choice to preserve, not a gap.

Confirmed bugs (now spawned as fix tasks, see §7): `IndustriesGrid` silently discards authored
platform-specific content on 5 pages; one hub FAQ item is mis-categorized and silently dropped from
the visible accordion (schema says 27, page shows 26); `magento-development`/`shopify-development`/
`woocommerce-development` share a broken "Fixed-price proposals. fixed-price, milestone-paid."
sentence fragment — a mechanical find/replace defect; `ecommerce-seo` has ~0 internal links despite
naming Shopify/WooCommerce/Magento repeatedly in its own copy; em-dash violations range 0 (the two
newest pages) to 95 (`shopify-development`); **zero of the 8 pages have `dateModified`**.

### 6b. US standalone pages (9 pages)

`best-ecommerce-platforms` already has "best" in both title and H1 (good example to point at).
`bigcommerce-development`, `headless-commerce`, `omnichannel-commerce`, `b2b-ecommerce`,
`best-ecommerce-platforms`, and `commerceflo` all render a confirmed gradient-text H1 span (`.pp-grad`
in the shared `PlatformPage.css`) — a direct CLAUDE.md violation, traced to its root cause. The same
4 platform pages (bigcommerce/headless/omnichannel/b2b) suppress primary site nav (`navLinks={[]}`)
and have zero mid-page CTA. `b2b-ecommerce`'s hero has a code comment literally reading
`{/* aurora orbs */}` above glow divs — another confirmed violation. `/shopify-development`
(top-level) turned out to be a **real, distinct India-targeted page** (₹/UPI/GST/Shiprocket content),
not a duplicate of `/services/shopify-development` — but it sits at a non-geo-prefixed URL, has a
literal ₹34,999 price baked into its `HowTo` schema, and one FAQ answer repeats "best" six times
(actual keyword stuffing, which this project's own doctrine notes measurably *hurts* AI-citation
rate). `wordpress-development` substantively covers WooCommerce (its own service line, FAQ category,
pricing tier) — real overlap with `/services/woocommerce-development` worth a side-by-side look — and
has 30+ em-dashes including inside its own H1.

### 6c. US city pages (13 pages, `/{city}/ecommerce-development`)

Zero superlatives in any title/H1, but every page already answers "who's the best Shopify developer
in [city]" in its FAQs — same low-risk-rewrite pattern as the core cluster. Three build generations
exist: Austin (prototype, and its hidden schema still cites "India-based developers" contradicting
current positioning — a real consistency risk); the "big 8" (Charlotte, Denver, Miami, Nashville,
Portland, Raleigh, Tampa + Austin structurally) with clean FAQ schema; the "small 5" (Boise,
Chattanooga, Fargo, Lincoln, Sioux Falls) where **FAQ schema shows AI crawlers under 45% of the real
content** (10-11 schema entries vs. 22-26 visible FAQs). Chattanooga's own file header logs a live GSC
signal — *"shopify chattanooga" — 68 impressions @ position 8.3* — making it the best-evidenced first
target. Sioux Falls is measurably the thinnest page overall and needs a depth pass before a title
rewrite would be well-supported. Every one of the 13 is em-dash-heavy; none have `dateModified`; none
use `LocalBusiness` schema (uses `Organization`+`Service.areaServed` instead, which is consistent with
this site's existing service-company schema choice).

### 6d. India (13 city pages + hub + `/seo/ecommerce-seo`)

The strongest-built group in the audit: uniform 2,534-2,867 words, 22 real FAQs each, genuine local
detail (named districts, not find-replace). **All 13 already have "Most Trusted" in the H1** — ahead
of every other market on this specific dimension — just missing from the `<title>` tag. Confirmed
bugs: 6 of 13 cities (Chandigarh, Jaipur, Kochi, Kolkata, Lucknow, Surat) show **wrong-city portfolio
titles** ("Belle Maison — Mumbai") — visible, user-facing copy-paste residue; the whole India
e-commerce cluster is missing `x-default` hreflang; the hub has the identical FAQ-category-drop bug
as the US cities (schema says 27, 26 render); 43-53 em-dashes and 3-5 ₹ mentions per city page, baked
into a shared template. Linking is siloed: cities link only to `/portfolio` (2 links each), never to
the hub, siblings, or `/seo/ecommerce-seo`. `/seo/ecommerce-seo` is the real depth outlier — about
half the city-page word count, no mid-page CTA, and an admitted placeholder: *"Ecommerce SEO results
are on the way."* Given known-modest India e-commerce demand, that page needs a trust/content
investment more than a superlative claim.

### 6e. UK (4 national pages + 15 dynamic city pages)

`ecommerce-development` is the best-architected of the 4 (FAQPage schema, `dateModified`, inline
hreflang) but is 2.5-3x shorter than its 3 siblings. **`ecommerce-seo`, `shopify-development`, and
`shopify-seo` ship 60 combined genuinely strong FAQs with zero FAQPage schema** — not drift, just
never implemented, even though the pattern is solved correctly one file over. Same 3 pages are also
missing `dateModified` and any hreflang signal. `shopify-seo` has a confirmed gradient-text H1.
`shopify-development` has a real pricing violation: a FAQ states UK competitors "charge
£10,000-£50,000" two sentences after claiming "we do not publish pricing." The dynamic
`/uk/{city}/ecommerce` route (separate from the flagship `/uk/ecommerce-development` — a real
naming/overlap risk) covers 15 cities but **Manchester, Birmingham, Leeds, Liverpool, and Sheffield
have no e-commerce page at all**, dynamic or static.

### 6f. UAE / Australia

UAE: not a content zero, a *page* zero. Real material already exists across 6 sections of the
`/uae` homepage — a $27B market stat, a named Shopify/WooCommerce service card, a "UAE E-Commerce
Retailer" case study with Tabby/Tamara BNPL specifics, a dedicated pricing tab. Magento and
Commerceflo: genuinely absent. The codebase's own `hreflangMap.ts` comments already admit this
("en-AE points to /uae landing until dedicated UAE service pages exist"). Building
`/uae/ecommerce-development` is a spin-out of existing material, not a from-scratch build.

Australia: same shape, homepage-only, e-commerce CTA points at the US-owned hub. Lower priority
(not one of the 4 core markets). **Worth a manual check**: the same client name ("Belle Maison")
appears as a testimonial on both a UK page and the AU page — flagged for verification, not assumed to
be wrong.

---

## 7. Confirmed bugs — fix status

Four scoped, mechanical fix tasks were spawned as background-task chips during this audit (each is
independently startable):

1. **IndustriesGrid prop-discarding bug** — 5 US `/services` pages render generic boilerplate instead
   of authored platform-specific content because the shared component ignores props without
   `variant="cards"`.
2. **FAQ schema drift on 6 US city pages + stale Austin copy** — AI crawlers see under 45% of real
   FAQ content on Boise/Chattanooga/Fargo/Lincoln/Sioux Falls; Austin's schema still contradicts
   current positioning.
3. **Anti-slop + pricing violations on 6 platform pages** — confirmed gradient-text (traced to a
   shared stylesheet), glow-orb divs, a ₹34,999 price embedded in schema, keyword-stuffed FAQ copy,
   missing nav/mid-page CTAs.
4. **India e-commerce bugs** — wrong-city portfolio titles (6 pages), missing hreflang x-default,
   hub FAQ drift, em-dash/currency template cleanup.

**Needs your judgment call, not an autonomous fix:** the same client headshot
(`vishal-impulse-branding-160.webp`) is captioned "Director of Impulse Branding" on two pages and
"Director, Bombay Petals" on a third. That's either a real client who changed companies (fine, just
needs one consistent caption) or a fabricated/reused testimonial (a genuine trust problem). An agent
can't tell which from the code — worth a 30-second check against your actual client records before
anyone touches those files.

---

## 8. Prioritized action plan

**Now (cheap, high-confidence, mostly mechanical):**
- Run the 4 spawned fix tasks (bugs above) — they're already scoped and don't require new decisions.
- Resolve the testimonial caption conflict (your call).
- Title/H1 superlative rewrites on the pages where FAQ groundwork already exists and is cited with
  evidence: US `ecommerce-seo` (H1 catch-up to its own title), `ecommerce-development`,
  `shopify-development`; the Chattanooga city page (has a live GSC position-8 signal); India's 13
  city `<title>` tags (H1 already done).
- Fix `/commerceflo`'s H1 to actually contain "Commerceflo" and deepen it past 12 FAQs — plausible
  direct fix for the brand-query GSC leak.
- Add the mid-page CTA + `dateModified` gap sitewide — near-universal finding (0 of the 8 core US
  pages, 0 of 13 city pages, 3 of 4 UK pages, all India pages lack `dateModified`).

**Next (real but bigger decisions):**
- Build `/uae/ecommerce-development` from the material already written into the UAE homepage —
  cheapest net-new page in the audit, zero-competition on-site.
- Add FAQPage schema to the 3 UK pages that already have the FAQ content (`ecommerce-seo`,
  `shopify-development`, `shopify-seo`) — mechanical once someone commits the time.
- Decide the `/shopify-development` (India) URL/positioning question — should it move under an
  `/in/` or similar geo-scoped path now that strategy is US-first, given it currently sits at a
  bare top-level URL a US visitor could land on.
- Decide whether Manchester/Birmingham/Leeds/Liverpool/Sheffield (5 major UK cities, zero e-commerce
  coverage) is an intentional gap or an oversight.

**Later / lower confidence given the authority constraint:**
- Superlative rewrites on higher-KD terms (25+) — real demand, but consistent with existing US/UK/
  India doctrine, unlikely to rank until referring-domain authority grows regardless of on-page work.
- `/seo/ecommerce-seo` (India) content/trust investment — real gap (placeholder "results coming"
  copy) but low measured demand; worth doing for completeness, not urgency.
- `/wordpress-development` vs `/services/woocommerce-development` overlap — needs a scoping decision
  before either page is rewritten, to avoid the two competing for the same intent.
