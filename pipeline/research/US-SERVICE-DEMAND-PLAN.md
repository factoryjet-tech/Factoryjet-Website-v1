# US Lead-Gen Plan by Service Line — 2026-08-17

Built from three fresh pulls, all US (location 2840):

| Script | Output | What it answers |
|---|---|---|
| `dfs_us_service_demand.py` | `data/us_service_demand.json` | Real US volume per service line, long-tail included |
| `dfs_us_serp_winnability.py` | `data/us_serp_winnability.json` | Can we place? Directories? AI Overview? |
| `dfs_us_buyer_llm.py` | `data/us_buyer_llm.json` | What ChatGPT/Claude/Gemini/Perplexity tell US buyers |

---

## 1. Commercial demand by service line (deduped)

Raw totals are inflated by Google Ads clustered buckets (`web design company` and 14
variants all return 14,800/$49.15, which is one bucket, not fifteen). Deduped by
(volume, cpc). **Commercial = the buyer wants to hire someone**, not learn.

| Service line | Deduped vol | **Commercial vol** | Commercial share |
|---|---:|---:|---:|
| **Web Design & Development** | 148,450 | **148,000** | 99.7% |
| Marketplace (Amazon/Walmart/TikTok) | 9,300 | **9,300** | 100% |
| AI Automation / Workflow | 15,730 | **7,310** | 46% |
| Ecommerce Development | 9,430 | **7,270** | 77% |
| AI Agent Development | 37,980 | **3,950** | 10% |
| AI SEO | 4,720 | **3,340** | 71% |
| AI Search / GEO / AEO / AIO | 49,090 | **3,180** | 6% |
| AI Chatbot | 2,690 | **1,960** | 73% |
| B2B Ecommerce | 2,970 | 430 | 14% |
| Agentic Commerce | 14,060 | **120** | 0.9% |
| Omnichannel Commerce | 1,340 | **0** | 0% |

**Web design commercial demand is 7.5x every AI category combined (148,000 vs 19,740).**

### The AI paradox
AI categories have big *informational* demand and tiny *commercial* demand:
- `how to build an ai agent` = 2,900/mo. `ai agent development company` = 590/mo.
- `agentic commerce` = 5,400/mo. `agentic commerce services` = 10/mo.
- `ai search engine optimization` = 8,100/mo. `ai search optimization services` = 260/mo.

People want to learn AI and *buy* web design. Informational AI terms are citation
plays (blog + GEO). They are not lead pages.

---

## 2. SERP winnability (20 terms, US, top 100)

- **Directory lock: none.** Every term returned 0-1 directory results in the top 10.
  Clutch, G2 and DesignRush do **not** own these SERPs. Service pages can rank.
- **AI Overview fires on 18 of 20.** Organic clicks are worth less than the position
  suggests, and being cited *in* the AIO is the real prize.
- **FactoryJet appears nowhere in the top 100 on any of the 20 terms.**

Ranked by value (volume x CPC), directories < 3, we are absent:

| Term | Vol | CPC | KD | AIO | Top 10 is |
|---|---:|---:|---:|:--:|---|
| **website redesign services** | 8,100 | $36.69 | 29 | Y | small agencies |
| ai agent for customer service | 720 | $208.28 | 12 | - | **products (trap)** |
| **ai automation agency** | 4,400 | $17.80 | 19 | Y | reddit + tiny agencies |
| ecommerce development company | 880 | $54.45 | 28 | - | dev shops |
| tiktok shop agency | 590 | $71.07 | 0 | Y | agencies |
| ai integration services | 590 | $65.65 | 1 | Y | dev shops |
| ai agent development company | 590 | $58.21 | 9 | Y | dev agencies |
| ai chatbot development services | 880 | $38.50 | 0 | Y | dev shops |
| ai search optimization services | 260 | $108.69 | 0 | Y | agencies |
| generative engine optimization services | 590 | $39.88 | 19 | Y | agencies |
| answer engine optimization services | 480 | $36.37 | 6 | Y | agencies |
| ai voice agent for healthcare | 110 | $96.29 | 0 | Y | health AI vendors |
| custom ai agent development company | 50 | $282.50 | 0 | Y | dev agencies |

---

## 3. AI assistants: 0 out of 60

15 role-written buyer prompts x 4 assistants. **FactoryJet named in zero answers.**
ChatGPT 0/15, Claude 0/15, Gemini 0/15, Perplexity 0/15.

**But the field is wide open.** Most answers name tiny, low-authority agencies, and
each assistant names a mostly different set. There is no incumbent to displace:

- Web design: `fivedaylaunch.com`, `threedaylaunch.com`, `mainlinewebco.com`,
  `friendlywebdesigns.com`, `streamlinesites.com`. No-name shops.
- AI automation: `insidepartners.ai`, `automated.co`, `2vautomation.ai`,
  `backofficeflow.net`. Every one appeared exactly once.
- GEO/AEO: `nogood.io` (4), `ipullrank.com` (3), `webfx.com` (2). Some consolidation.
- Ecommerce: `avexdesigns.com`, `electriceye.io`, `netalico.com`, `halfhelix.com`.
  Real Shopify agencies. Hardest of the set.

This confirms `factoryjet-authority-vs-citation`: citation does not track authority.

### The one genuinely locked category
**AI agents framed by use case is product-locked, and the script under-reported it.**
The tool-share came out at 21% only because `yellow.ai`, `kore.ai`, `freshworks.com`,
`forethought.ai`, `poly.ai` and `s10.ai` were classified as agencies. They are products.
Real tool share is roughly 60-70%.

- LLM answers named: Intercom, Zendesk, Decagon, Sierra, Salesforce, Kore, Yellow.
- SERP top 10 for `ai agent for customer service`: gumloop, IBM, Salesforce, fin.ai, kore.ai.

**A buyer asking "AI agent for customer service" gets told to buy software, not hire a
builder.** Do not chase that framing despite the $208 CPC.

But `ai agent development company` top 10 is `leewayhertz`, `intuz`, `neurons-lab`,
`n-ix`, `jadasquad`, `devcom` — all dev agencies. **The development framing is winnable;
the use-case framing is not.**

---

## 4. The plan (zero ad budget, ~53 referring domains)

### Tier 1 — pages that already exist, worth the most, we rank nowhere

> ❌ **ITEM 1 RETRACTED 2026-08-17.** `website redesign services` is **not winnable** and
> should not be built for. The original reasoning was "8,100/mo, KD 29, zero directories in
> the top 10". The directory count was a bad proxy: no directories does not mean winnable,
> it means the incumbents are strong agencies rather than aggregators. Measured properly:
>
> | Term | Weakest incumbent (ref domains) | Median | Us |
> |---|---:|---:|---:|
> | `website redesign services` | **191** | ~1,200 | **63** |
> | `website redesign company` | 127 | 2,221 | 63 |
> | `affordable web design company` | 122 | 361 | 63 |
> | `cheap web design company` | 22 (subdomain of a large parent) | 1,248 | 63 |
>
> The weakest page on page one has ~3x our referring domains and ranks 9th. The whole
> cluster is authority-gated at every level, **including the qualifier layer** that works
> elsewhere on this site.
>
> Contrast: `theaiautomationagency.ai` outranks us for `ai automation agency` (4,400/mo)
> on **38** referring domains. Same site, same 63 domains, opposite outcome. **Winnability
> is set by the incumbents' authority, not by volume, KD, or directory count.**
>
> **Rule going forward: measure the top 10's referring domains before committing to any
> term.** KD and directory counts are not sufficient.
>
> Web design stays a service we sell. It is not a channel we can win organically at current
> authority.

1. ~~`/services/website-redesign` for `website redesign services`~~ — see retraction above.
2. **`/services/ai-automation`** for `ai automation agency` (4,400/mo, KD 19, top 10 is
   Reddit plus unknown shops). Already the best engagement signal on the site
   (306s average in GA4).

Those two are 12,500/mo of commercial demand at KD 19-29 on pages that already exist.

### Tier 2 — low KD, real CPC, pages exist, need depth and internal links
`ai chatbot development services` (880, KD 0) · `ecommerce development company` (880,
KD 28) · `ai agent development company/services` (1,070 combined, KD 9/2) ·
`tiktok shop agency` (590, KD 0, $71) · `ai integration services` (590, KD 1, $65) ·
GEO/AEO cluster (2,240 combined, KD 0-19)

Note: `/services/generative-engine-optimization` still returns 200 and was **not**
301'd despite `factoryjet-us-page-consolidation`. Given GEO/AEO now shows 2,240/mo of
real commercial demand at KD 0-19, keeping it is correct. Do not retire it.

### Tier 3 — ~~the one real page gap~~ WRONG, see correction

> ❌ **CORRECTED 2026-08-17.** This section said "AI voice agents. No page exists." That was
> wrong. `/services/ai-agent-development/ai-voice-agent/page.tsx` exists (811 lines, tracked,
> in the sitemap). The check that produced the error globbed `src/app/services/*voice*`, which
> only looks one level deep and misses nested children. **Glob recursively before claiming a
> page does not exist.**
>
> The recommendation was also wrong on the merits. The voice cluster is **product-locked** at
> every volume level, more thoroughly than `ai agent for customer service`:
> - `ai receptionist` (12,100/mo) → RingCentral, IONOS, Zoom, GoTo, Synthflow, Retell
> - `ai voice agent for healthcare` (110/mo, "KD 0") → assorthealth, Infinitus, Hyro, Deepgram, a PubMed paper
> - `ai voice agent agency` (140/mo) → Synthflow, Retell, voice.ai, Vellum. **Platforms rank for
>   the agency query itself**, which closes the sub-cluster.
>
> Do not chase the receptionist volume and do not build a second voice page.
>
> Retargeting the healthcare and real-estate pages to voice framing is also wrong: agent
> framing has **more** volume (real estate 390/mo vs 70/mo voice; healthcare 170 vs 110) and a
> softer SERP. Leave both on agent framing as citation assets.

### Chatbot cluster: GATED, do not invest (measured 2026-08-18)

Every commercial chatbot term is out of reach. Weakest page-1 incumbent by
referring domains, against our 63:

| Term | Vol | CPC | Weakest | Median |
|---|---:|---:|---:|---:|
| `ai chatbot development company` | 390 | $17.10 | **1,334** | 3,935 |
| `ai chatbot agency` | 390 | $32.83 | 293 | 5,719 |
| `chatbot development company` | 260 | - | 293 | 1,958 |
| `chatbot integration services` | 20 | $269.26 | 276 | 3,455 |
| `ai chatbot development services` | 880 | $58.17 | 227 | 1,888 |

Top 10s are Salesforce, Google Cloud, chatbot.com, chatbase, appinventiv,
leewayhertz, NICE. For contrast, `ai automation agency services` has a median of
164 and `agentic ai development company` a weakest of 77. Those are winnable.
This is not.

**Also note the impressions are mostly fake.** `/services/ai-chatbot-development`
takes ~130 US impressions, but 86 of them come from two queries with **zero**
measurable search volume (`custom ai chatbot development services` 60 impressions,
`ai based chatbot development company` 26). Do not read that page's impression
count as demand.

**Two pages currently split this gated cluster:**
`/services/ai-chatbot-development` (1,006 lines) and
`/services/ai-agent-development/ai-chatbot` (1,001 lines, retargeted from India
2026-08-17, zero US impressions). Consolidating them would help concentration but
will not produce rankings on gated terms, so it is housekeeping, not a growth move.

### Stop doing
- **Omnichannel Commerce** — 0 commercial demand. Not a lead page.
- **Agentic Commerce** — 120 commercial demand against 14,060 informational. Blog and
  citation only. Keep `/b2b-ecommerce` as the citation asset it already is
  (see `factoryjet-capability-density-citation-mechanism`), not as a lead page.
- **`ai agent for customer service`** — product-locked. Ignore the $208 CPC.

### The compounding move
AI Overviews fire on 18 of 20 commercial SERPs and we are cited in 0 of 60 assistant
answers. Every Tier 1 and Tier 2 page should be written to be *quotable*: named
capabilities, real system names, direct extractable answers. That is the same work as
ranking, and it is the only lever that pays on both surfaces at once.

**Timeline: 60-90 days.** None of this produces leads inside two weeks.
