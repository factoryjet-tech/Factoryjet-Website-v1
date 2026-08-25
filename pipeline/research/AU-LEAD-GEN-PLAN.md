# Australia: demand, winnability and what to build

**Measured 2026-08-25** via DataForSEO, location_code 2036, language en.
297 keywords across the six service lines, 103 SERPs at depth 100, 483 incumbent
domains scored for referring domains.

Raw data:
- `data/au-demand-2026-08-25.json` (volume, CPC, competition, 297 terms)
- `data/au-candidates-2026-08-25.json` (103 de-duplicated candidates >= 40/mo)
- `data/au-winnability-2026-08-25.json` (SERP, AI Overview, PAA, directory share)
- `data/au-incumbent-authority-2026-08-25.json` (referring domains per top-10 domain)

Harness: `dfs_priority_markets_demand.py --loc 2036`, then
`dfs_priority_markets_winnability.py --src ... --out ...`, then
`dfs_incumbent_authority.py --src ... --out ... --ours 28`.

---

## 1. Two premises going in. One held, one did not.

**HELD: directories do not own Australian SERPs.** Across all 103 terms, directories
take at most **2 of any top 10**. 66 of 103 SERPs contain zero directories. There is no
Clutch/Yellow-Pages gatekeeper problem in Australia. A service page can place.

**DID NOT HOLD: "zero AI Overviews in Australia."** That was true of the first 20-term
sample, but that sample was 13 zero-volume terms plus 7 `seo agency {city}` terms, and
`seo agency {city}` happens to be a family that does not trigger AIO. Across a real
103-term sample, **AI Overviews fire on 35 of 103 AU terms (34%)**.

The incidence is not uniform. It tracks the service line almost perfectly:

| Service line | Terms | AIO fires | AIO-free volume | AIO volume |
|---|---:|---:|---:|---:|
| AI SEO | 4 | **100%** | 0 | 1,570 |
| B2B ecommerce | 1 | **100%** | 0 | 70 |
| Agentic commerce | 4 | **75%** | 140 | 8,620 |
| AI agents | 17 | **71%** | 440 | 2,050 |
| E-commerce build | 11 | 36% | 860 | 480 |
| SEO (baseline) | 35 | 20% | 20,150 | 4,520 |
| Web design | 31 | **13%** | 24,830 | 910 |

So the Australian AIO advantage is real, but it lives **entirely in web design and
baseline SEO**. Those two lines hold 44,980/mo of AIO-free volume. Every AI-branded line
is AIO-saturated in Australia exactly as it is in the US. Do not plan the AI lines around
"organic clicks are worth full value here." They are not.

## 2. The volume numbers are inflated ~42% by close-variant clustering

Google Ads collapses close variants into one bucket and reports the bucket volume against
every member. `web design perth`, `web designer perth`, `web development perth` and
`website design perth` all report 4,400/mo at $23.57. That is **one** 4,400/mo cluster,
not 17,600/mo.

- Naive sum of all live AU terms: **112,800/mo**
- After collapsing 37 close-variant clusters: **65,100/mo**

Every number below is the de-duplicated figure.

## 3. Demand by service line (de-duplicated)

| Line | Distinct clusters | Volume | Zero-volume terms | Verdict |
|---|---:|---:|---:|---|
| **Web design** | 33 | **25,770/mo** | 0 | BUILD |
| **SEO (baseline)** | 36 | **24,700/mo** | 3 | BUILD |
| Agentic commerce | 9 | 8,850/mo | 3 | 8,100 of it is one informational term. BLOG ONLY |
| AI agents | 24 | 2,640/mo | 33 | Thin. SECTIONS, not pages |
| AI SEO | 5 | 1,580/mo | 19 | 100% AIO. DO NOT BUILD |
| E-commerce build | 19 | 1,460/mo | 10 | Thin. ONE national page |
| B2B ecommerce | 4 | 100/mo | 9 | DEAD. DO NOT BUILD |

Detail that matters:

- **AI SEO is dead in Australia as a page target.** `ai seo australia`, `ai seo sydney`,
  `ai seo melbourne`, `ai seo brisbane`, `ai seo perth`, `ai seo adelaide`,
  `ai seo agency australia`, `ai search optimisation australia`,
  `generative engine optimisation australia`, `geo agency australia` are all **zero**.
  The only live terms are the unlocalised `ai seo` (1,000/mo) and `ai seo agency`
  (390/mo), and **both fire an AI Overview**. This repeats the UK finding exactly.
- **AI agent development is dead at city level.** `ai agent development {city}` is zero
  for all five capitals, and `ai agent development australia` is zero. The bare
  `ai agent development` is 70/mo, with AIO.
- **B2B ecommerce is dead.** 100/mo total, and 9 of 13 terms are zero, including
  `b2b ecommerce platform australia`, `wholesale ecommerce platform australia`,
  `netsuite ecommerce australia` and `customer portal development australia`.
- **Agentic commerce is a reading audience, not a buying one.** `agentic ai` is
  8,100/mo but informational and AIO-covered; `agentic commerce australia`,
  `ai commerce australia` and `conversational commerce australia` are all zero.

## 4. Winnability against 28 earned referring domains

Compared against **28 earned** RD, not the 67 the backlinks API reports
(`data/referring_domains_audit.json` splits 60 live into 28 earned / 32 scraper junk).

**41 of 103 terms are AIO-free and have a page-1 incumbent within 3x of us:
24,080/mo combined.**

Top of that list:

| Keyword | Vol/mo | CPC | Weakest page-1 | vs our 28 | Line |
|---|---:|---:|---:|---:|---|
| web design brisbane | 2,400 | $35.73 | 18 RD | 0.6x | Web design |
| seo agency brisbane | 1,900 | $25.16 | 35 RD | 1.2x | SEO |
| web design melbourne | 1,900 | $12.72 | 14 RD | 0.5x | Web design |
| seo consultant melbourne | 1,300 | $15.67 | 8 RD | 0.3x | SEO |
| seo agency adelaide | 1,300 | $39.25 | 37 RD | 1.3x | SEO |
| seo company sydney | 1,300 | $117.46 | 59 RD | 2.1x | SEO |
| website design adelaide | 1,300 | $24.41 | 59 RD | 2.1x | Web design |
| website design melbourne | 1,300 | $27.69 | 83 RD | 3.0x | Web design |
| web design adelaide | 1,000 | $16.80 | 27 RD | 1.0x | Web design |
| web design canberra | 1,000 | $10.94 | 21 RD | 0.8x | Web design |
| seo agency canberra | 880 | - | 7 RD | 0.2x | SEO |
| web design sunshine coast | 880 | $17.47 | 38 RD | 1.4x | Web design |

**Honest caveat on this table.** The weakest page-1 incumbent is the bar for *reaching*
page 1, but the **median page-1 domain across these 41 terms is 449 RD, roughly 16x our
28**. Realistic outcome is position 7-10, not position 1-3. Plan the forecast on
page-1-entry traffic, not on top-3 traffic. Separately, 7 of the 41 weakest incumbents
are exact-match-domain micro-sites (`webdesigninmelbourne.com.au`,
`melbourneseoconsultant.au`), which hold their slot partly on a signal we cannot copy.

**Do NOT target as primary:** `web design perth` (4,400/mo, weakest 92 RD),
`website design sydney` (2,400/mo, 101 RD), `seo agency perth` (1,600/mo, 125 RD),
`web design gold coast` (1,600/mo, 167 RD), `seo agency sydney` (1,300/mo, 119 RD),
`seo agency australia` (1,300/mo, 143 RD). Perth, Sydney and Gold Coast are the three
hardest AU cities, and they are exactly where the biggest headline numbers sit.

## 5. City map (best AIO-free term per city)

| City | Web design | SEO | Build? |
|---|---|---|---|
| Brisbane | 2,400 NOW (w18) | 1,900 1cyc (w35) | **YES, first** |
| Melbourne | 1,900 NOW (w14) | 1,300 NOW (w8) | **YES, first** |
| Adelaide | 1,300 1cyc (w59) | 1,300 1cyc (w37) | **YES** |
| Canberra | 1,000 NOW (w21) | 880 NOW (w7) | **YES, cheapest win** |
| Sunshine Coast | 880 1cyc (w38) | 140 HARD | Yes, web design only |
| Wollongong | 480 NOW (w20) | 50 NOW (w13) | Marginal |
| Geelong | 390 NOW (w8) | none | Marginal |
| Newcastle | 320 1cyc (w34) | 170 NOW (w1) | Marginal |
| Hobart | none AIO-free | 260 1cyc (w29) | SEO only |
| Darwin | none AIO-free | 140 NOW (w6) | SEO only |
| **Perth** | 4,400 HARD (w92) | 1,600 HARD (w125) | **NO, authority-gated** |
| **Sydney** | 2,400 HARD (w101) | 1,300 HARD (w119) | **NO, authority-gated** |
| **Gold Coast** | 1,600 HARD (w167) | 390 HARD (w136) | **NO, authority-gated** |

## 6. Open blocker before any page is written

**PAA depth is 4 questions per term.** 399 PAA questions were harvested across 100 terms,
but only **204 are unique**, averaging 4 per term. The publishing standard requires 20+
FAQs per landing page grounded in real PAA, not invented. A recursive PAA expansion pass
(`dfs_paa_expand.py`, seeding each harvested question as a new query) is required before
writing any landing page.

**Second content constraint.** 3 of the 4 PAA questions on `web design brisbane` are
price questions ("How much does it cost to design a website in Brisbane?", "How much do
website designers usually charge?"). The house rule bars pricing numbers. The pages must
answer what *drives* cost without quoting ours, or they will not satisfy the query that
Australians are actually asking.
