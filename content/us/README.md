# US Content Plan — audit of the Blog Demand Map, and what to ship

**Prepared:** 25 August 2026 · **Scope:** United States only
**Source under review:** Blog Demand Map (20 Aug 2026) — 105 topics, five markets, 21 US topics, 143,320 combined US vol/mo
**Method of this audit:** the demand map was built from keyword data. This audit re-checks it against the two things keyword data cannot see — **what FactoryJet has already published** and **what pages exist to convert the traffic into**. Both were pulled live from factoryjet.com sitemaps on 25 Aug 2026.

---

## What was pulled

| Source | Count | File |
|---|---|---|
| `sitemap-us` | **161 URLs** | US landing pages (US is the root domain — no `/us` prefix; UK is `/uk`, etc.) |
| `sitemap-blog` | **120 URLs** | all blog posts, all five markets |
| Breakdown of the 161 | 55 `/services/` pages · 68 city×service pages across 34 cities · 9 replatforming pages · 3 comparison pages · 4 tools/calculators | |

The map said "US 228 pages." The live US sitemap carries 161. The direction of that claim was right — the US is by far the deepest market — but the plan below is built on the 161 that actually exist.

---

## Finding 1 — 53% of the US demand in the map is already published

The map's own guardrail was "114 existing posts checked for duplication." Checked against the live blog sitemap, two US topics collide head-on with posts that are already live, and they are the two biggest numbers on the US list.

| Map US # | Topic | Primary KW | Vol/mo | Live post | Verdict |
|---|---|---|---|---|---|
| **7** | SEO Tips That Actually Move a Small Business | `seo tips` | **74,000** | `/blog/seo-tips-small-business-2026` — published **21 Aug 2026**, the day after the map | **Already shipped. Remove from the plan.** |
| **20** | Getting a TikTok Shop, Keeping It, Getting It Back | `how to get tiktok shop` | **2,900** | `/blog/how-to-sell-on-tiktok-shop-2026` | **Already covered.** Update, don't rewrite. |

76,900 of the map's 143,320 US vol/mo — **53.7%** — is spoken for. The genuinely available US pool is **66,420/mo**, not 143,320. Every plan built off the headline number is roughly double-counting, in exactly the way the map warned about for raw DataForSEO volume.

Worth noting: the published `seo-tips` post *already anticipated this plan*. Its own body says of "what is SEO" — *"those belong on a definition page, not this one… It gets its own URL later."* The map's US #8 is not a new idea. It is the post that piece was written to hand off to.

---

## Finding 2 — the US has no page to land a Google Ads visitor on

The map's Phase 2 is "Close the Google Ads gap… the single biggest uncovered commercial pocket in the dataset: 71,740 raw US volume at $40.84 CPC." That is right about the demand and silent about the destination.

Checked live, 25 Aug 2026 — every one of these returns **404**:

- `/services/google-ads`
- `/services/ppc`
- `/services/digital-marketing`
- `/services/paid-media`

There is no paid-media service anywhere in the 161-URL US sitemap. The map applied its own "needs page first" label only to UAE and Australia. On this topic the US needs it too. The map's own principle — *"Blog traffic converts into a service page or it converts into nothing"* — was not applied to its own Phase 2.

**Consequence for sequencing:** the Google Ads post is still worth writing, and the draft is in this folder. It should not go live until `/services/google-ads-management` does. A page brief is included so the two can ship together.

---

## Finding 3 — three page clusters with real money pages and near-zero content support

The map was built keyword-line-first (SEO, Web Design, AI Agents, Marketplace…). Read asset-first instead — start from the pages that already exist and ask what content feeds them — and three clusters appear that the map does not contain a single row for.

### 3a. Replatforming — 9 pages, 0 blog posts
`/replatforming` plus `magento-to-shopify`, `woocommerce-to-shopify`, `squarespace-to-shopify`, `wix-to-shopify`, `wordpress-to-shopify`, `bigcommerce-to-shopify-plus`, `netsuite-suitecommerce-to-shopify-plus`, `salesforce-commerce-cloud-to-shopify-plus`.

Nine commercial pages aimed at the highest-intent query type in ecommerce — a business that has already decided to move — supported by zero articles. Migration queries (`magento to shopify migration cost`, `how long does a shopify migration take`, `woocommerce to shopify checklist`) are lower volume than `seo tips` and convert at a multiple of it. This is the single best volume-to-revenue ratio available in the US and it is not in the map.

### 3b. Verticals — 13 pages, ~0 blog posts
`roofing-seo`, `dental-seo`, `healthcare-seo`, `law-firm-seo`, `law-firm-website-design`, `real-estate-website-design`, `restaurant-website-design`, `nonprofit-website-design`, `saas-website-design`, `manufacturing-website-design`, `b2b-website-design`, `ai-agents-for-healthcare`, `ai-agents-for-real-estate`.

Vertical service pages are commodity pages: everyone has them, and they win on proof, not on copy. Each needs one piece of content a competitor cannot copy — a cost breakdown for that trade, a named local SERP teardown, a real engagement. The map's service-line lens cannot see these because the demand lives under trade terms, not service terms.

### 3c. Cities — 68 pages across 34 cities, 26 with no content at all
Blog support exists for Austin, Charlotte, Denver, Miami, Nashville, Raleigh, Tampa, Boise and NYC. **Nothing** for Chicago, Dallas, Los Angeles, Houston, Phoenix, Seattle, San Diego, San Francisco, Boston, Atlanta, Portland, Las Vegas, Detroit, Cleveland, St. Louis, Providence and ten more.

The template is already proven — `web-design-austin-tx-small-business-guide-2026` and its siblings exist and work. This is duplication of a working pattern, not new invention. It is the cheapest work on this page.

---

## Finding 4 — the four calculators are the most under-used assets on the site

| Tool | Feeds |
|---|---|
| `/marketplace-fee-calculator` — Amazon FBA, Walmart WFS, Target Plus DVS, Faire, Shopify DTC | every marketplace post |
| `/ecommerce-speed-calculator` | Core Web Vitals, replatforming, speed posts |
| `/ai-visibility-checker` | every GEO / AI-Overview post |
| `/website-cost` | every cost post |

A calculator is the one CTA an informational reader will click before they will talk to a founder. The map's Phase 4 worry — *"label GEO posts as citation assets so nobody measures them on sessions"* — has a better answer than relabelling: point them at a tool and measure the tool.

Also unsupported: `/target-plus-marketplace` and `/faire-wholesale-marketplace` have **no** blog posts, while Amazon, TikTok and Walmart each have one. The map's Marketplace line only ever considered Amazon, eBay and TikTok.

---

## Revised US plan

### Ship now — five posts, drafted in `content/us/blog/`

Ranked by available volume × landing-page readiness, after the duplication check.

| # | Post | Primary KW | Vol/mo | Lands on | Status |
|---|---|---|---|---|---|
| 1 | What SEO Actually Is, Explained for the Person Paying for It | `what is seo` | **27,100** | `/services/small-business-seo` | ✅ page live, handoff already written into the `seo-tips` post |
| 2 | What an AI Agent Actually Is, and What One Costs to Run | `what is an ai agent` | **14,800** | `/services/ai-agent-development` (+10 sub-pages) | ✅ deepest page cluster on the site |
| 3 | What Google Ads Actually Cost a US Small Business | `google ads cost` | **3,600** | ⛔ **nothing** | ⚠️ hold until the page ships — brief included |
| 4 | What Amazon Actually Takes From a $100 Sale | `amazon seller fees` | **1,600** | `/services/amazon-agency` + `/marketplace-fee-calculator` | ✅ best conversion path on the list |
| 5 | What a Business Website Costs to *Run* Every Month | `website hosting cost` | **1,900** | `/website-cost` | ✅ but see the cannibalisation note below |

**48,000/mo of genuinely uncontested US volume across five posts.**

On #2: four adjacent posts already exist (`what-is-agentic-ai`, `agentic-ai-vs-ai-agents`, `ai-chatbots-vs-ai-agents-business`, `ai-agents-small-business-usa-2026`) and none holds the head term. Publish this one as the **hub** and link the four into it as spokes, or it becomes a fifth competitor for the same intent.

On #5: four cost posts are already live (`how-much-does-a-website-cost-small-business-usa-2026`, `website-cost-small-business-usa-2026`, `shopify-website-cost`, `shopify-development-cost-2026`) plus the `/website-cost` page. They all answer *what it costs to build*. The draft answers *what it costs to keep running* — year two, not month one. Held to that angle it is additive; drifted an inch off it, it is a fifth duplicate. The draft carries the guardrail in its front-matter.

### Then — Google Ads page + post together
`content/us/briefs/landing-page-google-ads-management.md`. Post stays unpublished until the page is live.

### Then — the three missed clusters
`content/us/briefs/missed-clusters.md`. Replatforming first (9 pages waiting), then verticals, then cities.

### Do not do
- Re-write `seo tips` or `how to get tiktok shop`. Refresh the live posts instead.
- Chase US #5, "Pause, Deactivate or Close a Shopify Store" (1,300/mo). The searcher is *leaving* ecommerce. It is the one topic on the US list with real volume and negative commercial intent.
- Treat the map's 143,320 as the US opportunity. It is 66,420.

---

## Writing spec (applies to every draft here)

Taken from the live `seo-tips-small-business-2026` post, which is the house format:

1. **Quick Answer block** under the hero — 40–75 words, one claim, liftable verbatim by an AI Overview. AI Overviews fire on 84% of these queries; the first paragraph is the product.
2. **Key Takeaways**, five numbered, each a complete claim on its own.
3. **A live SERP pull** — who Google quotes for this query today, by name, with the date. This is the part competitors cannot copy.
4. **Real numbers with sources.** Every figure in these drafts is either cited to a live source or marked `[VERIFY]` with where to check it.
5. **One named internal link to the money page**, in the body, in a full sentence. Not a related-posts widget.
6. **15–20 FAQs**, 40–75 words each, one claim per answer, `FAQPage` schema in server HTML.
7. **Author:** Bhavesh Barot, Founder & CEO. Voice: second person, unhedged, no throat-clearing, US SMB between $500K and $5M.

---

## Files

```
content/us/
├── README.md                                        this audit
├── blog/
│   ├── what-is-seo-small-business-2026.md           27,100/mo — ship first
│   ├── what-is-an-ai-agent-cost-2026.md             14,800/mo — ship as hub
│   ├── google-ads-cost-small-business-2026.md        3,600/mo — HOLD for page
│   ├── amazon-seller-fees-100-dollar-sale-2026.md    1,600/mo — best conversion
│   └── website-running-cost-per-month-2026.md        1,900/mo — narrow angle
└── briefs/
    ├── landing-page-google-ads-management.md        the missing page
    └── missed-clusters.md                            replatforming · verticals · cities
```

Drafts are Markdown with YAML front-matter so they drop into the live site's blog pipeline (a separate codebase from this repo) without rework.
