# FactoryJet — US Market Lead-Gen Plan (pages + blogs, prioritized)

**Date:** 2026-07-25
**Built from:** GSC US 90-day (2026-04-26 → 2026-07-23, country=USA) + a dedicated live DataForSEO US pull
(location 2840, run cost $1.33): 5,187-keyword universe across the 7 priority services, live SERP
competitors + People Also Ask, DataForSEO Labs competitors, factoryjet US rankings, and a backlink
authority comparison vs the ranking rivals.
**Data files:** `pipeline/research/data/us_keywords.csv`, `us_serp_competitors.csv`, `us_labs_competitors.csv`,
`us_paa.csv`, `us_backlinks.csv`, `us_our_rankings.csv`. Script: `dfs_us.py`.
**Companion:** `UK-LEAD-GEN-PLAN.md` (parallel session). This is the US twin.

---

## 1. The US situation — six hard facts

1. **The problem is traffic, not conversion, and not missing pages.** GSC US last 90 days:
   **83,450 impressions → 24 clicks** (about 10-15 real non-brand clicks). Leads are healthy relative
   to real human traffic. The lever is earning clicks, not adding conversion surface.

2. **The US service-page footprint is already comprehensive.** We run ~32 `/services/*` pages plus
   root commerce pages covering all 7 services (SEO, ecommerce, shopify/woo/magento, web design +
   niches, AI agents/automation/chatbot, AI SEO, agentic commerce). **Most winnable keywords already
   have a target page.** The gap is that those pages are young, thin, and authority-starved, not absent.

3. **Authority is the binding constraint.** Backlink profile (DataForSEO, live):

   | Domain | DFS rank | Referring domains |
   |---|---:|---:|
   | **factoryjet.com** | **84** | **44** |
   | coalitiontechnologies.com (web/ecom agency) | 361 | 2,800 |
   | designrush.com (directory) | 592 | 29,260 |
   | salesforce.com | 673 | 153,362 |
   | ibm.com | 607 | 246,158 |

   We are 60x weaker on referring domains than a mid-tier US agency and 600x weaker than the
   directories/enterprises that own the money SERPs. Thin pages cannot rank because the domain has no
   authority to lift them. This caps what any new KD 15+ page can do short-term.

4. **A `/us/*` vs root duplication bug is bleeding the authority we do have.** Both `/us/austin/seo`
   (18,823 impr, pos 22) and `/austin/seo` (12,850 impr) are live and indexed on the same city+service.
   `_redirects` 301s the `/us/{city}` hubs and old `/us/services/...` paths, but the
   `/us/{city}/seo` and `/us/{city}/ecommerce-development` pages were never redirected. Our own ranking
   data confirms Google ranks the `/us/` versions (`/us/charlotte/seo`, `/us/nashville/seo`,
   `/us/cleveland/seo`, `/us/colorado-springs/seo` all pos 17-32). Two parallel city trees split link
   equity so neither reaches page 1.

5. **The impressions are trapped on page 2-4.** ~48% of US impressions sit on programmatic city-SEO
   pages ranking pos 19-33 (`/us/austin/seo`, `/us/charlotte/seo` 10.5K, `/cleveland/seo` 7.6K,
   `/us/boise/seo` 5.4K). They rank too low to earn a click. `austin seo agency` (4,400 vol, KD 4) sits
   at pos 22 — a KD-4 term we should own, held down by authority + the split.

6. **The blog is the only healthy asset.** Blog posts rank pos 4-13 while service/city pages rank 19+:
   `/blog/how-long-does-seo-take` pos 6.9 (1,995 impr), `/blog/mobile-only-design-strategy` pos 6.8,
   `/blog/ai-adoption-us-small-businesses-2026` pos 9.7 (3,237 impr, a CTR leak), `/blog/geo-cost-small-business-2026`
   pos 13. Content is the fastest path to clicks while authority builds.

**Doctrine for the US:** (a) **Fix the cannibalization + CTR leaks first** (it unlocks the impressions
we already earn), (b) **deepen the existing service pages** for their winnable clusters rather than
building duplicates, (c) publish a **small, targeted set of genuinely new commercial pages** only where
a KD ≤ 15 pocket has no home, (d) run a **blog + GEO/AI-citation content engine** as the near-term click
driver, and (e) attack **authority** (directory listings + digital PR) because it gates everything above.

---

## 2. Winnable US keyword pockets by service (KD ≤ 30, commercial unless noted)

Volumes are US monthly search volume; KD = DataForSEO keyword difficulty (0-100). Noise
(jobs/courses/coding-tools/competitor-tool-brands) filtered out. ⭐ = KD ≤ 12, realistically winnable now.

### SEO — the biggest winnable pocket (universe: 1,131 kw / 1.59M vol)
| Keyword | Vol | KD |
|---|---:|---:|
| seo services near me | 22,200 | 1 ⭐ |
| seo agency near me | 22,200 | 11 ⭐ |
| local seo services | 8,100 | 17 |
| small business seo services (+ 5 variants) | 5,400 | 12 ⭐ |
| local seo near me | 4,400 | 4 ⭐ |
| seo agency in austin | 4,400 | 14 |
| seo consulting services (+ variants) | 3,600 | 18-26 |
| what is an seo agency | 590 | 0 (info) |

→ Target pages exist: `/services/seo`, `/services/local-seo`, `/services/small-business-seo`,
`/services/seo-audit`, `/services/ecommerce-seo`. "near me" = local/city intent (city pages).

### Website Design (universe: 885 kw / 604k vol)
| Keyword | Vol | KD |
|---|---:|---:|
| agency web design | 12,100 | 21 |
| website redesign service(s) | 8,100 | 29 |
| web design services for small business (+ 3 variants) | 4,400 | 0 ⭐⭐ |
| web design small business | 2,400 | 4 ⭐ |
| website design cost | 1,600 | 12 ⭐ |
| how much does it cost to design a website | 1,300 | 19 (info) |
| wordpress web design agency | 1,600 | 27 |
| web design company [tampa 10 / san diego 30] | 1,600 | 10-30 (city) |

→ Target pages exist: `/services/web-design`, `/services/small-business-website-design`,
`/services/website-redesign`, `/services/wordpress-development`, `/website-cost`.

### E-Commerce (universe: 998 kw / 105k vol)
| Keyword | Vol | KD |
|---|---:|---:|
| ecommerce agency | 2,400 | 0 ⭐ |
| shopify seo agency | 1,300 | 0 ⭐ |
| ecommerce seo agency | 1,000 | 4 ⭐ |
| ecommerce development company | 880 | 5 ⭐ |
| shopify development services | 880 | 10 ⭐ |
| ecommerce marketing agency | 880 | 15 |
| ecommerce app development company | 720 | 12 ⭐ |
| headless e-commerce | 720 | 23 |
| ecommerce advertising agency / ecommerce ad agency | 480 | 4-7 ⭐ (CPC ~$124) |
| shopify theme development | 480 | 4 ⭐ |

→ Mostly covered by `/services/ecommerce-development`, `/services/shopify-development`,
`/services/ecommerce-seo`, `/services/shopify-seo`, `/services/ecommerce-growth-agency`.
**Gap:** ecommerce advertising / PPC / marketing agency (see Tier 2).

### AI SEO (universe: 584 kw / 144k vol — winnable + on-brand)
| Keyword | Vol | KD |
|---|---:|---:|
| ai for seo | 8,100 | 28 (stretch) |
| ai seo tools / tool | 2,400 | 10-15 (roundup) |
| ai seo services | 1,000 | 1 ⭐⭐ |
| ai powered seo tool | 1,000 | 13 |
| best ai seo tools | 880 | 4 ⭐ (roundup) |
| generative engine optimization services / service | 590 | 2-6 ⭐⭐ |
| generative engine optimization tools | 590 | 20 (roundup) |
| ai seo company / companies | 480 | 0 ⭐⭐ |
| answer engine optimization services | 480 | 9 ⭐ |
| chatgpt seo tools | 480 | 0 ⭐ |

→ One target page: `/services/ai-seo` (absorbed GEO via 301). It earns only **17 impressions** today.
This is the single biggest deepen-not-build opportunity: real demand, KD 0-9, near-invisible page.

### AI Agent Development (universe: 409 kw / 120k vol — low vol, low KD, high value)
| Keyword | Vol | KD |
|---|---:|---:|
| ai automation agencies | 4,400 | 23 |
| ai agents for business | 1,000 | 18 |
| ai workflow automation | 1,000 | 27 |
| ai chatbot development service(s) | 880 | 0-20 ⭐ |
| ai automation services | 590 | 3 ⭐⭐ |
| ai agent development companies | 590 | 0 ⭐⭐ |
| ai agent development services | 480 | 1-2 ⭐⭐ |
| ai automation specialist | 480 | 0 ⭐ |
| ai chatbot development company | 390 | 20 |

→ Well covered: `/services/ai-agents`, `/services/ai-automation`, `/services/ai-agent-development`
(hub + 7 spokes), `/services/ai-chatbot-development`. Deepen + link, do not multiply.

### Agentic Commerce (universe: 574 kw / 385k, but mostly coding-tools + informational)
| Keyword | Vol | KD | Type |
|---|---:|---:|---|
| agentic ai vs generative ai (+ variants) | 4,400 | 5-12 | info ⭐ |
| agentic ai examples / example of agentic ai | 720-1,600 | 10-13 | info ⭐ |
| agentic commerce | ~1,300 | 20-32 | comm (stretch) |
| google/paypal agentic commerce | 480 | 22 | info |
| mastercard/paypal agentic commerce | 390 | 24 | info |
| what is agentic commerce | ~260 | 14 | info ⭐ |

→ **GEO / AI-citation play, not head-on lead-gen.** `/agentic-commerce` + `/commerceflo` exist. The
SERPs are owned by Salesforce, Stripe, Mastercard, McKinsey, IBM. We win by being the cited answer in
ChatGPT/Perplexity, not by outranking Stripe. Feed it a blog cluster.

### AI Commerce (universe inflated by generic "agency/platform" terms — real demand is thin)
| Keyword | Vol | KD |
|---|---:|---:|
| ai for ecommerce / ai ecommerce | ~300-500 | 15-25 |
| retail ai | 3,600 | 26 (info) |

→ **Not a standalone lead-gen page** (same finding as UK). Fold "AI-powered commerce" in as a
differentiator on the E-Commerce hub + one thought-leadership blog. No commercial search market yet.

---

## 3. People Also Ask (US) — bake into FAQ blocks + FAQPage schema

Pulled live from US SERPs. Use verbatim as H3s/FAQ questions on the mapped pages.

- **E-Commerce:** What does an ecommerce developer do? · What is ecommerce development? · How much does it cost to develop an ecommerce website? · What are the top 5 ecommerce companies?
- **AI Commerce:** What is the best AI for e-commerce? · What are the top AI platforms?
- **Agentic Commerce:** What is agentic commerce? · What is an example of agentic commerce? · Is agentic commerce the future? · What is the difference between e-commerce and agentic commerce? · What companies offer agentic commerce? · What are the risks of agentic commerce?
- **AI SEO / GEO:** Can AI agents do SEO? · What is the best AI SEO agency? · How much does AI SEO cost? · What is an AI SEO agency? · Is GEO replacing SEO? · Is generative engine optimization a thing? · Is SEO going away with AI?
- **SEO:** How much should SEO cost for a small business? · Is SEO worth it for small businesses? · How much does it cost to hire someone to do SEO? · What's the best SEO agency for e-commerce? · Is SEO dead or evolving in 2026?
- **Website Design:** How much does a website designer cost for a small business? · Will AI replace web designers? · What are the 7 C's of website design?
- **AI Agent Dev:** What do AI automation agencies do? · How much does an AI automation agency charge? · What are the best AI automation agencies?

---

## 4. Prioritized build plan

### TIER 0 — Fix what's already there
> **VERIFIED 2026-07-25 (post-research): most of this tier was already done, and two items are invalid.
> Do not redo them.** GSC and DataForSEO both lag deploys by weeks, which is why the research above
> still shows the pre-fix state. Always verify against the repo before acting on tier-0 findings.

1. ~~**Kill the `/us/{city}/{service}` duplication.**~~ **ALREADY DONE.** `public/_redirects` carries a
   catch-all `/us/*  /:splat  301` plus `/us  /  301`, and the `src/app/us/` tree is deleted. Root
   `/{city}/{service}` is the sole canonical. The split 18.8K + 12.9K impressions in the GSC data above
   are historical. (Related: commit `3239376` consolidated the cannibalizing `/services` twins, and
   `0c550ce` fixed the sitemap indexation gaps.)
2. ~~**Fix the two biggest CTR leaks.**~~ **INVALID — do not rewrite these titles.** Query-level GSC
   shows both are intent mismatches, not CTR problems:
   - `/blog/ai-adoption-us-small-businesses-2026` (3,237 impr, pos 9.7): impressions come entirely from
     *"2025 small business ai adoption survey official report"*, *"...u.s. chamber of commerce"*, and long
     machine-shaped strings with embedded dates. These users want an **official survey report**, not an
     agency. Heavy bot signature, consistent with the ~99%-bot finding.
   - `/blog/how-long-does-seo-take...` (1,995 impr, pos 6.9): ~100% *"ahrefs how long does seo take
     [variant]"* — people hunting **Ahrefs' study**. `TOPIC-STRATEGY.md` already flagged this exact set
     as zero-click noise.
   High impressions + good position + no clicks does **not** imply a CTR leak. Check the queries first.
3. **STILL VALID — push the KD-4 city term we nearly own:** `austin seo agency` (4,400 vol, KD 4) sits
   at pos 22. Now that the `/us/` duplication is resolved, equity consolidates automatically; the
   remaining levers are unique local proof, internal links, and authority.
4. **STILL VALID (partially done)** — the sticky blog CTA was fixed in `7e735fc`. Confirm FAQPage schema
   on the blogs already ranking pos 4-13 (`geo-cost-small-business-2026`, `mobile-only-design-strategy`,
   `generative-engine-optimization-guide`, `shopify-development-cost-2026`).

### TIER 1 — Deepen existing service pages for their winnable clusters (no new URLs)
These pages exist but are young. Where genuinely thin, rework them to target the clusters in §2, with
20-40 PAA FAQs + Service/FAQ schema + answer-first block + internal links from the blog.

> **VERIFIED 2026-07-25: `/services/ai-seo` is NOT thin — do not "deepen" it.** It is already 1,272
> lines with 27 FAQs across 5 categories, full JSON-LD (WebPage + BreadcrumbList + Service + FAQPage +
> Organization), an answer-first "What is AI SEO?" block, cited AI-search stats, and the title
> *"Best AI SEO Agency in USA — GEO + AEO Optimization [2026]"*. Its 17 impressions reflect that the
> page is **new**, not thin. The constraint on it is authority and internal links, not depth.
> **RESOLVED 2026-07-26 (Bhavesh):** the `PRICING_TIERS` grid **stays**. The rule is no actual dollar
> values, not no pricing. Pricing pages and pricing/engagement-tier sections are wanted where they help.
> `/services/ai-seo`'s grid (tier name + what is included + "Talk to the Founder", zero numbers) is the
> reference pattern for every other service page.

| # | Existing page | Deepen to target (vol · KD) |
|---|---|---|
| 1 | ~~`/services/ai-seo`~~ | **Already deep. Skip.** See note above. |
| 2 | `/services/seo` + `/services/small-business-seo` | seo services near me 22,200·1 · small business seo services 5,400·12 · local seo near me 4,400·4 |
| 3 | `/services/local-seo` | local seo services 8,100·17 · local seo near me 4,400·4 (city-linked) |
| 4 | `/services/web-design` + `/services/small-business-website-design` | web design services for small business 4,400·0 · web design small business 2,400·4 |
| 5 | `/services/ecommerce-development` + `/services/ecommerce-seo` + `/services/shopify-seo` | ecommerce agency 2,400·0 · ecommerce seo agency 1,000·4 · shopify seo agency 1,300·0 · ecommerce development company 880·5 |
| 6 | `/services/ai-agents` + `/services/ai-automation` + `/services/ai-agent-development` | ai automation services 590·3 · ai agent development companies/services 480-590·0-2 · ai chatbot development service 880·0 |

### TIER 2 — Genuinely new commercial pages (only where a KD ≤ 15 pocket has no home)
Keep this list short. Each targets a real cluster with no existing page.

| # | New page | Primary targets (vol · KD) | Why new |
|---|---|---|---|
| 1 | `/services/ecommerce-marketing-agency` (or `/services/ecommerce-ppc-agency`) | ecommerce marketing agency 880·15 · ecommerce advertising agency 480·7 · ecommerce ad agency 480·4 (CPC ~$124) | No PPC/ads page exists; highest-CPC commercial gap in the ecommerce set |
| 2 | `/services/seo-consulting` | seo consulting services 3,600·18-26 · seo consultant services | Distinct intent from agency pages; no consulting page |
| 3 | *(optional)* `/services/answer-engine-optimization` as a spoke of `/services/ai-seo` | answer engine optimization services 480·9 · aeo | Only if `/services/ai-seo` gets too broad; otherwise keep as a section (GEO was already 301'd into ai-seo — do not recreate `/services/generative-engine-optimization`) |

Do **not** add new city pages. Strengthen the existing city set (Austin, Charlotte, Cleveland,
Nashville, Colorado Springs, Boise, Tampa) with unique local proof after the Tier 0 dedup.

### TIER 3 — Blog + GEO content engine (fastest near-term clicks; publish 1-2/week, interlinked)
The blog already covers a lot of US ground (seo cost, shopify cost, GEO guide, best-geo-tools, agentic-ai
explainers, sell-on-Amazon/Walmart/TikTok). These are the **genuine gaps** from the winnable info set + PAA:

| # | New blog | Target (vol · KD) · intent | Funnels to |
|---|---|---|---|
| 1 | What is agentic commerce? (examples, how it works, who offers it) | what is agentic commerce 260·14 + PAA cluster · info/GEO | `/agentic-commerce` |
| 2 | Agentic commerce vs traditional e-commerce | difference between ecommerce and agentic commerce (PAA) · info/GEO | `/agentic-commerce`, `/commerceflo` |
| 3 | Best AI for e-commerce in 2026 (tools + use cases) | best AI for e-commerce (PAA) · retail ai 3,600·26 · info | `/services/ecommerce-development` (AI-commerce differentiator) |
| 4 | ~~Best AI SEO tools 2026~~ | **DROPPED — cannibalization.** Collides with the existing `/blog/best-geo-ai-visibility-tools-2026` and `/blog/best-ai-seo-agencies-usa`. |
| 5 | ~~Is SEO worth it for small business in 2026?~~ | **DROPPED — cannibalization.** Collides with `/blog/is-seo-dead-2026-ai-search-data` and `/blog/seo-cost-small-business-2026`. |
| 6 | What does an AI automation agency actually do? | what do AI automation agencies do (PAA) · info · US-framed (existing automation posts are UK) | `/services/ai-automation`, `/services/ai-agents` |
| 7 | Will AI replace web designers? (honest 2026 answer) | will AI replace web designers (PAA) · info · reinforces AI-native brand; none of the 21 existing web-design posts answers it | `/services/web-design` |
| 8 | ~~How much does it cost to develop an ecommerce website?~~ | **DROPPED — cannibalization.** The cost cluster already has 10 posts (`shopify-development-cost-2026`, `website-cost-small-business-usa-2026`, `shopify-website-cost`, …). |

> **Cannibalization discipline:** the UK market's biggest self-inflicted wound was ~9 near-duplicate
> posts splitting authority. Every proposed US blog above was checked against all 97 existing posts
> before approval. The AI/agentic-commerce cluster (#1-#3) is genuinely empty territory: the site has
> `what-is-agentic-ai` and `agentic-ai-vs-generative-ai` but nothing on agentic **commerce**, and
> **zero** posts on "AI for ecommerce".

Optimize (don't rebuild) the existing on-target posts: `/blog/agentic-ai-vs-generative-ai`
(targets a 4,400-vol KD-5 term — add depth + CTA), `/blog/generative-engine-optimization-guide`,
`/blog/best-geo-ai-visibility-tools-2026`, `/blog/best-ai-seo-agencies-usa`.

### NON-CONTENT LEVERS (the real lead unlock — authority)
Because 44 referring domains caps everything and directories own the head SERPs:
- **Get listed/reviewed on the directories that rank page 1** for "[service] agency" US terms:
  **Clutch, DesignRush, The Manifest, Expertise.com, GoodFirms, Semrush Agencies.** Being inside them
  captures the exact demand we cannot outrank yet.
- **Digital PR on our own data:** we already publish original "US small-business AI adoption" data
  (that blog earns 3,237 impr). Pitch it to US SMB/martech press for links. Target: 44 → 300+ ref domains.
- **Founder guest posts / podcasts** in US ecommerce + SMB communities.

---

## 5. Sequencing (leads-first)
1. **Week 1:** Tier 0 (dedup 301s + 2 CTR rewrites + Austin push) + start directory listings.
   Zero new pages, biggest measurable lift.
2. **Weeks 1-3:** Tier 1 deepen `/services/ai-seo` first (worst impr-to-demand ratio), then SEO +
   web-design + ecommerce hubs.
3. **Weeks 2-4:** Tier 2 new pages (#1 ecommerce-marketing-agency, #2 seo-consulting).
4. **Ongoing:** Tier 3 blog cadence (1-2/week, interlinked to the Tier-1 hubs) + authority/PR.

Every new/updated page must clear the FactoryJet publishing gate: E-E-A-T, answer-first block after
hero, 10-30 real keywords, 20+ human FAQs from the PAA in §3, real images, Service/FAQ/GEO schema,
`FinalCTA`, and design tokens. Verify with tsc + validate-build + geo checks (no local render — OOM hazard).
