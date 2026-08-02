# E-Commerce Lead-Gen: which content type actually works? (2026-08-02)

Answers Bhavesh's question: to get more e-commerce project leads, do we build (a) industry
landing pages, (b) platform comparison pages, or (c) blogs?

Companion to `ECOMMERCE-SEO-GEO-PLAN.md` (2026-08-01), which measured superlative demand
("best ecommerce agency") and found FactoryJet at zero across every surface. This pull asks a
different question: not "can we rank for best-of terms" but "which content type can win at all,
given a 44-referring-domain authority constraint."

Data: `data/ecom_leadgen_demand_{us,india,uk,uae}.csv`, `data/ecom_leadgen_clean_us.json`,
`data/ecom_leadgen_serp.json`. Scripts: `dfs_ecom_leadgen.py`, `dfs_ecom_leadgen_serp.py`.
DataForSEO spend: $3.688 (demand) + $4.782 (SERP/AIO/LLM) + ~$0.6 (verification reruns) = **~$9.07**.
GSC: 2026-05-04 to 2026-08-01, `sc-domain:factoryjet.com`, e-commerce query regex, 400 rows.

---

## 1. Bottom line

**The experiment already ran on your own site and produced a winner you did not notice.**

`/b2b-ecommerce` is cited by ChatGPT in **6 of 9 runs** for "Which companies build B2B ecommerce
portals with ERP integration?", listed **first** in the answer table every time, with a direct link
to `factoryjet.com/b2b-ecommerce`. This is the only positive LLM signal ever recorded for this
domain. The 2026-08-01 audit tested superlative prompts and got 0/120.

Ranking the three options you asked about:

| Option | Verdict | Why |
|---|---|---|
| **Industry/vertical landing pages** | **Build** (reshaped) | The one page of this type already wins AI citations. Demand is B2B-shaped, not consumer-vertical-shaped. SERPs are agency-owned, not vendor-locked. |
| **Blogs** | **Keep, re-aim** | Already your only ranking asset (avg pos 10-18 vs 29-67 for service pages). You have 24 e-commerce blogs. The problem is aim, not volume. |
| **Platform comparison pages** | **Do not build** | Highest keyword count, near-zero commercial intent, Reddit ranks #1 on 4/4 tested queries, and the AI Overview cites YouTube 25 times. |

A fourth option the data surfaced that you did not ask about, **replatforming/migration**, is the
best pure-LLM play: KD 0-12, CPC $22-42, and LLMs name agencies freely there.

---

## 2. Why comparison pages lose (the clearest negative result)

US comparison demand looks seductive: 426 keywords, 27,960/mo, median KD **10**. Nearly free to rank
on paper. Three independent measurements say do not.

**Commercial intent is absent.** Of 426 cleaned comparison keywords, essentially none contain an
agency/hire/developer marker. Someone searching "shopify vs woocommerce" is picking a platform, not
hiring a builder. Compare to the `hire` bucket: 272 keywords, 69,620/mo, avg CPC **$41.33**, total
market value $2.12M/mo, which is 8.5x the comparison bucket's $249k.

**The organic SERP is closed to agencies.** Reddit ranks #1 on all four comparison queries tested.
The rest is split between the vendors' own comparison pages (shopify.com, bigcommerce.com) and
utility publishers (Zapier, WebsiteBuilderExpert, Tooltester). An agency page has no natural slot.

**The AI Overview is video-first.** Across the comparison bucket, AIO citations: youtube.com **25**,
reddit.com 6, then a long tail. Comparison AIOs cite demos, not agency pages.

**Exception worth protecting:** your comparison *blogs* already rank (`/blog/shopify-vs-woocommerce-us-small-business-2026`
at position 12.7, `/blog/bigcommerce-vs-shopify-2026-fee-change` at 15.4). Blog format survives this
SERP where a landing page would not. Keep them, do not convert them into service pages.

---

## 3. Why the B2B page wins, and what the mechanism is

Having a narrow capability page is **necessary but not sufficient**. Tested against ChatGPT, 4 runs each:

| Prompt | Page exists? | Mention rate |
|---|---|---|
| B2B ecommerce portals with ERP integration | `/b2b-ecommerce` | **6/9** |
| Headless Shopify with Hydrogen + separate CMS | `/headless-commerce` | 0/4 |
| Omnichannel with POS, inventory sync, click-and-collect | `/omnichannel-commerce` | 0/4 |
| Furniture / home-decor retailers (control) | none | 0/4 |
| Fashion / apparel brands (control) | none | 0/4 |

So what separates the winner? **Named-capability density.**

| Page | Words | Capability-term hits | Per 1,000 words | Names real third-party systems? |
|---|---:|---:|---:|---|
| `/b2b-ecommerce` | 5,388 | 162 | **30.1** | Yes: NetSuite, SAP, Dynamics, Sage |
| `/omnichannel-commerce` | 4,108 | 60 | 14.6 | No |
| `/headless-commerce` | 2,027 | 38 | 18.7 | Barely (Hydrogen only) |

ChatGPT's own summary of FactoryJet quotes the page back nearly verbatim: *"account pricing, net
terms, approvals, reordering, and ERP-synced workflows."* Those are the exact nouns the page repeats.
The retrieval match is on **specific capability vocabulary**, not on superlative claims and not on
brand authority. That is why a 44-referring-domain site beats better-linked competitors here: the
answer pool for "ERP-integrated B2B portal" is small, and the page is the most literal match in it.

Confidence: 🟡 medium-high. The mechanism is consistent across five prompts and three pages, but n is
small and LLM answer pools vary in competitiveness by topic. The B2B result itself is 🟢 verified
(9 runs, direct URL citation captured).

---

## 4. Where the SERP is actually open to an agency

Top-10 composition, US desktop, by bucket:

| Bucket | Agency-type domains in top 10 | Read |
|---|---|---|
| `vertical` "b2b website design" | **9/10** | Wide open |
| `vertical` "ecommerce for manufacturers" | **9/10** | Wide open |
| `hire` "ecommerce development services" | 8/10 | Open, but KD 20+ and authority-gated |
| `cost` "shopify development cost" | 7/10 | Open, small agencies rank (aureatelabs, ecorn, aalpha) |
| `migrate` "shopify migration services" | 7/10 | Open, but tools take AIO |
| `compare` (all four) | 4-6/10, Reddit #1 | Closed |

AI Overview owners by bucket tell the same story. `vertical` AIO cites agencies (oroinc 5,
optimizely 3, windmillstrategy 2, newmediacampaigns 2, outerboxdesign 2). `cost` AIO cites small
agencies alongside Shopify (outerboxdesign 3, itpathsolutions 2, kumohq 2, proximatesolutions 2).
`compare` AIO cites YouTube 25 times. `migrate` AIO is tool-locked (matrixify 9, apps.shopify 6).

---

## 5. Demand, cleaned and comparable

Raw Labs output was polluted by brand navigation terms ("shopify login", "alibaba"). These figures
apply a topic filter plus per-bucket intent patterns plus a brand-noise exclusion.

**US (the priority market):**

| Bucket | Keywords | Vol/mo | Median KD | Avg CPC | Vol x CPC |
|---|---:|---:|---:|---:|---:|
| hire | 272 | 69,620 | 20 | $41.33 | **$2,124,026** |
| cost | 124 | 38,960 | 17 | $11.19 | $296,465 |
| compare | 426 | 27,960 | 10 | $12.73 | $249,033 |
| howto | 95 | 9,580 | 24 | $11.23 | $91,689 |
| vertical | 57 | 6,980 | 9 | $16.80 | $141,283 |
| migrate | 125 | 5,630 | 9 | $25.32 | $65,223 |

**The vertical bucket is B2B-shaped, not consumer-vertical-shaped.** Best low-KD terms:
`b2b ecommerce platform` (1,900/mo, KD 18, $31.06), `b2b website design` (480, KD 9, $37.27),
`best b2b websites` (260, KD 0, $25.72), `ecommerce for manufacturers` (140, KD 0, $21.51),
`best b2b ecommerce platform` (70, KD 14, $36.33). Consumer verticals (furniture, fashion, jewellery)
returned almost nothing: 57 US keywords total across all industries, and the UK/UAE/India vertical
buckets are 6, 2 and 10 keywords respectively. **Do not build "ecommerce for furniture brands" pages.**

**Migration is small but rich:** `shopify migration services` (390, KD 6, $12.32),
`migration from magento to shopify` (210, KD 10, $22.14), `shopify to shopify migration` (170, KD 12,
$41.99), `bigcommerce to shopify migration` (50, KD 0, $42.76).

**Non-US markets are thin for everything except `hire`:** India 12,550/mo hire volume at $2.06 CPC;
UK 4,810 at $36.33; UAE 1,010 at $21.47. UK's `hire` CPC nearly matches the US, which supports the
existing UK doctrine (consolidate, do not expand).

---

## 6. What GSC says about page types

Averaged over the 90-day window, e-commerce queries only:

| Page type | Example | Avg position |
|---|---|---|
| Blog | `/blog/shopify-development-cost-2026` | **7-18** |
| Blog | `/blog/shopify-vs-woocommerce-us-small-business-2026` | **12.7** |
| Service page | `/us/services/shopify-development` | 51.4 |
| Service page | `/us/services/ecommerce-development` | 62.1 |
| City page | `/uk/oxford/ecommerce` | 52.4 |
| Consulting | `/ecommerce-consulting` | 36.7 |

Blogs outrank service pages by 3-5x on position. This is the authority constraint doing exactly what
it is expected to do: commercial pages need links, informational pages need relevance. **Until the
referring-domain count moves, informational and capability formats are the only ones that can place.**

**Routing leak: real, but 96% smaller than it first appears.** ⚠️ **Corrected 2026-08-02.**
`/blog/best-ai-seo-agencies-india` shows 1,731 impressions at position 3.6-10.1 for
`ai seo agency for ecommerce` variants, producing 1 click. On inspection, **1,670 of those 1,731
impressions come from just three brand-injection spam queries** containing "rankstr" / "rankstaar"
(a competitor tool's name spammed into query strings, one with an emoji in it). Those are not buyers
and no page change will convert them.

Genuine demand landing on this page is **61 impressions across 4 queries**:
`ecommerce ai seo agency` (31, pos 29.1), `best ai seo agencies for ecommerce brands` (24, pos 6.6),
`ai seo agency for ecommerce` (5, pos 10.8), `ai ecommerce seo agency` (1, pos 5.0).

The India-blog-absorbs-US-intent pattern is still real and still worth a cheap fix (an internal link
from that post to the US AI-SEO service page). It is **not** a Tier 1 priority and should not be
described as a large traffic pool. Earlier drafts of this document overstated it.

---

## 7. Recommendation

**Build capability pages, not industry pages and not comparison pages.**

The template is `/b2b-ecommerce`, and it is specific: 5,000+ words, 25-30 named-capability terms per
1,000 words, real third-party system names (ERP/POS/PIM/3PL vendors), one narrow buyer problem per
page. Not "ecommerce for X industry." Not "best ecommerce agency."

Priority order, by measured evidence:

1. **Extend the winner.** `/b2b-ecommerce` is already cited but has no siblings. Add ERP-specific
   depth (NetSuite, SAP B1, Dynamics 365, Sage) and wholesale/distributor capability language
   (punchout, RFQ, contract pricing, credit limits). Cheapest possible win: the page already ranks
   in the answer pool, deepening it defends and widens the slot.
2. **Manufacturer / distributor commerce.** `ecommerce for manufacturers` KD 0, `b2b website design`
   KD 9 at $37.27 CPC, and the SERP is 9/10 agencies. Best combination of open SERP, agency-cited
   AIO, and real CPC in the whole dataset.
3. **Magento to Shopify Plus replatforming.** KD 0-12, CPC $22-42. The organic SERP and AIO are
   tool-locked (LitExtension, Matrixify), so treat this as an **LLM-visibility play, not an SEO
   play**: LLMs name agencies freely here (netalico, bsscommerce, 1digitalagency, swanky,
   wemakewebsites) with no tool interference.
4. **Fix the two thin capability pages** rather than building new ones. `/headless-commerce` at 2,027
   words and 18.7 terms/1k is roughly half the density of the page that works. Same for
   `/omnichannel-commerce` at 14.6.
5. **Fix the routing leak** so `ai seo agency for ecommerce` resolves to an e-commerce or AI-SEO
   service page instead of the India listicle. Highest-volume single fix available.

**Do not** build platform comparison landing pages. **Do not** build consumer-industry pages
(furniture/fashion/jewellery). **Do not** add more city pages: the existing ones average position
29-67 and adding more does not change the authority constraint.

**Keep writing blogs**, but aim them at cost and capability questions where they already place
(position 7-18), not at superlative round-ups. The existing 24 e-commerce blogs are not the problem.

---

## 8. Decisions taken (Bhavesh, 2026-08-02)

1. **B2B/ERP capability is real and delivered.** Press the position, add depth rather than hedge.
2. **Replatforming is wanted**, across all volume tiers, because these are the highest-value projects.
3. **Scope approved: deepen the winner AND run the full pass.**

Broader lead-gen target stated: e-commerce, AI SEO, AI Commerce, Agentic Commerce, e-commerce SEO.

---

## 9. Replatforming space, sized (script `dfs_replatform.py`, $1.174)

230 migration keywords across US + UK: **11,600/mo**, headline market value $203,346/mo. That
headline is inflated: the largest single bucket is generic IT terms ("data migration tools" 1,600/mo,
"aws data migration services" 320/mo) that are not e-commerce. **Real e-commerce migration demand is
roughly 3,500-4,000/mo in the US.** Still worth building, but size expectations accordingly.

### Pairs that justify their own page

| Pair | Vol/mo | Value/mo | KD range | Read |
|---|---:|---:|---|---|
| `woocommerce -> shopify` | 1,120 | **$28,288** | 32-34 | Highest value, hardest |
| `magento -> shopify` | 1,320 | $19,178 | **2-10** | Best value-to-difficulty ratio |
| `shopify -> woocommerce` | 330 | $12,956 | 30-33 | $84 CPC on the head term |
| `squarespace -> shopify` | 130 | $11,676 | **0-1** | `migrate from squarespace to shopify` = 90/mo, KD 1, **$130 CPC** |
| `wordpress -> shopify` | 160 | $2,261 | **2-25** | Easy |
| `shopify -> magento` | 120 | $1,152 | **0-9** | Easy, low value |
| `wix -> shopify` | 100 | $829 | **4** | Easy, low value |
| `bigcommerce -> shopify` | 60 | $2,392 | **0** | Tiny but free |
| `magento 1 -> magento 2` | ~1,930 | $3,974 | **7** | Still real demand |

### The enterprise finding, stated plainly

**Salesforce Commerce Cloud, Demandware, SAP Hybris and NetSuite SuiteCommerce migration keywords
returned literally zero results.** Not low volume: zero. Those buyers do not use Google this way.
They arrive via RFP, systems integrators, consultants and, increasingly, LLM recommendation.

So SFCC-to-Shopify-Plus is worth covering, but as an **LLM-visibility and sales-collateral asset,
not an SEO page**. Judge it on ChatGPT/Perplexity mention rate and sales usage, never on rankings.
This matters because building it and then measuring it on organic traffic would wrongly look like
a failure.

---

## 10. Page architecture (proposed)

Core spec for every page below, derived from the `/b2b-ecommerce` mechanism in §3:
**5,000+ words, 25-30 named-capability terms per 1,000 words, real third-party system names, one
narrow buyer problem per page, 20+ FAQs, FAQPage schema generated from the same array the page
renders, mid-page CTA, `dateModified`.**

| # | Page | Type | Evidence |
|---|---|---|---|
| 1 | `/b2b-ecommerce` (deepen) | capability | Already cited 6/9 by ChatGPT; defend and widen |
| 2 | `/ecommerce-for-manufacturers` | capability | KD 0, $21.51 CPC, 9/10 agency SERP, agency-cited AIO |
| 3 | `/replatforming` (hub) | hub | 3,500-4,000/mo US, zero existing pages |
| 4 | `/replatforming/magento-to-shopify` | spoke | 1,320/mo, KD 2-10, best ratio |
| 5 | `/replatforming/woocommerce-to-shopify` | spoke | $28,288/mo, KD 33 (slow burn) |
| 6 | `/replatforming/squarespace-to-shopify` | spoke | KD 1, **$130 CPC** |
| 7 | `/replatforming/wix-to-shopify` + `/wordpress-to-shopify` | spoke | KD 2-4, cheap wins |
| 8 | `/replatforming/salesforce-commerce-cloud-to-shopify-plus` | LLM-only | Zero search demand; measured on citations |
| 9 | `/headless-commerce` (rewrite) | capability | 2,027 words, 18.7/1k density, 0/4 cited |
| 10 | `/omnichannel-commerce` (rewrite) | capability | 4,108 words, 14.6/1k density, 0/4 cited |
| 11 | `/commerceflo` (deepen) | AI Commerce | Thinnest page on site (~1,150 words); brand-query leak |
| 12 | Routing fix | technical | Downgraded: 96% of that traffic is brand-spam (see §6) |

---

## 11. Build log

### Tier 1 — complete 2026-08-02

**1. `/b2b-ecommerce` deepened.** ✅
- Title/meta rebuilt around `b2b ecommerce agency` (170/mo, **KD 0-1**, $29.12 CPC), plus wholesale
  and multi-channel commerce.
- ERP section expanded from 5 generic lines to named systems: NetSuite, SAP S/4HANA and Business One,
  Dynamics 365 Business Central, Sage Intacct and X3, Acumatica, Epicor Kinetic and Prophet 21, Infor,
  QuickBooks Enterprise, Odoo. Added what-syncs detail plus EDI 850/855/856/810 and cXML/OCI punchout
  into Coupa, Ariba, Jaggaer, Oracle.
- Two new sections: **Wholesale commerce platforms** (6 cards) and **Multi-channel commerce for B2B**
  (6 cards), the latter linking to `/omnichannel-commerce` to prevent cannibalisation.
- FAQs 20 → **29**, with two new registered categories (`wholesale`, `integrations`).
- Added `WebPage` schema with `dateModified`.
- Words 5,388 → **6,846**. Capability density 30.1 → **32.5 per 1k** (measured on the identical term
  list, so before/after is comparable). Total capability surface +38%.

**2. `/ecommerce-for-manufacturers` built.** ✅ New page, 4,680 words, **50.0 terms per 1k**, 25 FAQs
across 5 categories, 0 orphans, 0 em dashes, 0 anti-slop violations. Targets `ecommerce for
manufacturers` / `manufacturer ecommerce` / `distributor ecommerce` (140/mo each, **KD 0**),
`b2b ecommerce for manufacturers` (50, KD 0), `b2b ecommerce for distributors` (50, KD 17).
Note: below the 5,000-word guideline but well above the density bar, which is the variable the
citation mechanism actually tracks.

**3. Routing fix.** ✅ No change required. The blog already links to `/services/ai-seo` and `/ai-seo`,
and the traffic is 96% brand-spam. Editing it would have been busywork.

**Verification:** `tsc --noEmit` clean, `scripts/validate-build.mjs` passed (610 files),
`scripts/check-tracked-imports.mjs` passed. Not rendered locally, per the documented OOM hazard with
`next dev/build` on this repo.

### Tier 2 — replatforming (next)
### Tier 3 — density rewrites of `/headless-commerce`, `/omnichannel-commerce`, `/commerceflo`
