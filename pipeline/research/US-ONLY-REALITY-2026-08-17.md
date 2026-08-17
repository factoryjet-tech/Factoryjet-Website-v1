# US-Only Reality Check — 2026-08-17

**Supersedes the foothold assumptions in `US-SERVICE-DEMAND-PLAN.md`.** The demand numbers
in that document are correct (they were pulled at location 2840). What was wrong was the
assumption that we have a US foothold to build on. Every GSC figure below is
`countryFilter: usa`, 07/18 to 08/14.

---

## 1. The headline number

**FactoryJet earns roughly 6 non-brand organic clicks per 28 days in the United States.**

US clicks by query, everything that earned one:

| Query | Clicks | Impr | Pos | Real? |
|---|---:|---:|---:|---|
| `factoryjet` | 9 | 14 | 2.4 | brand |
| `factory jet` | 2 | 2 | 1.0 | brand |
| `austin no contract seo` | 1 | 45 | **1.8** | yes |
| `colorado springs seo company` | 1 | 214 | 28.7 | yes |
| `sioux falls seo` | 1 | 97 | 8.6 | yes (30/mo verified) |
| `seo in boise` | 1 | 18 | 35.9 | yes |
| `ai travel agency` | 1 | 1 | 6 | irrelevant |
| `sage 50 to quickbooks conversion` | 1 | 2 | 15 | irrelevant |

11 of ~17 US clicks are our own brand name.

---

## 2. The impressions are largely not human

This is the finding that changes how every previous report should be read.

**`/blog/ai-adoption-us-small-businesses-2026`: 2,073 US impressions, position 8.4, ZERO clicks.**
Looks like the biggest CTR failure on the site. It is not. Its US queries:

```
2025 small business ai adoption automation report official      14 impr  pos 6.4
2025 2026 small business ai adoption report official             8       6.5
2025 2026 small business ai adoption survey official report      8       7.5
2025 ai agents small business adoption report official           6       7.0
2025 generative ai small business adoption survey official rep   5       9.0
2025 generative ai small business adoption survey official       3      10.0
... dozens more permutations, all ending "official" / "official report"
```

Dozens of near-identical permutations, all page 1, all zero clicks. That is the same
signature as the Fargo cluster and the `rankstr io` rows: an automated system issuing
query variants. **No humans behind it.** Rewriting that page's title would have been
wasted work.

**`/austin/seo`: 20,482 US impressions, 1 click.** Partly the same problem. Its US queries
include `[seo services austin texas]` (bracket syntax), `11829: big seo` and
`13504: big seo` (numbered), `2010 e university dr + seo company`. Those are tools.

But Austin also has genuinely real terms, and they are the useful part:

| Real Austin query | Impr | Pos |
|---|---:|---:|
| `austin no contract seo` | 45 | **1.8** (1 click) |
| `affordable seo company in austin` | 36 | 15.6 |
| `affordable austin seo` | 26 | 10.8 |
| `affordable austin seo company` | 16 | 18.0 |
| `affordable austin seo agency` | 2 | **2.0** |

**Pattern: we rank 1.8 to 2.0 on "no contract" and "affordable" qualifiers, and 10 to 19
on everything else.** Price and terms qualifiers are where we already win.

---

## 3. The four clusters, checked US-only

| Cluster | US demand (verified) | Our US presence |
|---|---:|---|
| AI SEO (`ai seo agency/services/company`) | 2,480/mo | **11 impressions total. No page ranks.** |
| AI Automation (`ai automation agency`) | 4,400/mo | **Does not appear in top 30 US pages** |
| AI Agent Development | 1,070/mo | **Does not appear** |
| GEO / AEO / AI search optimization | 1,330/mo | **Does not appear** |

`/services/ai-seo`, `/services/ai-automation` and `/services/ai-agent-development` are all
absent from the top 30 US pages by impression. The 8 clicks on `ai automation agency usa`
were **global**, not US.

The demand is real. The foothold is zero. Building these in the US is a from-scratch
project, not an optimisation.

---

## 4. What actually has a US foothold

Only the city SEO pages, and only on qualified long-tail:

| Page | US impr | Clicks | Pos |
|---|---:|---:|---:|
| `/austin/seo` | 20,482 | 1 | 19.6 |
| `/boise/seo` | 3,415 | 1 | 27.6 |
| `/sioux-falls/seo` | 1,480 | 1 | 16.3 |
| `/colorado-springs/seo` | 1,406 | 1 | 29.3 |
| `/arlington/seo` | 847 | 0 | 18.0 |

Discount the impressions heavily. What is real is the position on qualified terms:
**1.8 on `austin no contract seo`, 2.0 on `affordable austin seo agency`, 8.6 on
`sioux falls seo`, 10.8 on `affordable austin seo`.**

---

## 5. The strategic choice

**Option A: build the four AI clusters in the US from zero.**
Real demand (9,280/mo commercial, KD 0-19), open SERPs, no directory lock, and we are
absent. Correct long-term and matches the positioning. 60-90 days minimum before a click,
and the KD 0 scores have not translated into rankings so far, which should temper the
estimate.

**Option B: convert the city SEO foothold.**
Smaller demand per term, but we hold positions 1.8 to 19 on real qualified queries today.
"Affordable", "no contract" and "near me" qualifiers are where we already place top 3.
Faster, smaller ceiling.

**Recommendation: B first, A in parallel at low intensity.**
Not because B is the better strategy, but because A produces nothing for a quarter and
the business needs leads sooner. The qualifier pattern (`no contract`, `affordable`) is
also the same pattern that works everywhere else on this site: we win qualified, we lose
bare.

---

## 6. Standing corrections for future reports

1. **Always country-filter GSC before drawing a US conclusion.** Three wrong calls were
   made in one session by reading global data as US data.
2. **Check the query list before calling any zero-click cluster a CTR problem.** Permutation
   families ending in "official", bracketed queries, and numbered prefixes are tools.
3. **The weekly GSC mining loop has no demand check and no bot filter**, so it keeps
   recommending synthetic clusters (Fargo, India AI-SEO, Newcastle). Its impression-ranked
   priorities should not be actioned without running
   `dfs_verify_striking_distance.py` first.
