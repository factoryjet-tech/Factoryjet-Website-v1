# Design Spec — Organic Lead Engine (zero ad budget)

**Date:** 2026-07-24
**Author:** Bhavesh Barot (with Claude Code, co-founder mode)
**Status:** Strategy approved (A + B, C in background). Phasing below; each build phase gets its own implementation pass.
**Sources of truth:** live GSC + GA4 (pulled 2026-07-24), `pipeline/research/TOPIC-STRATEGY.md`, and memory `factoryjet-traffic-reality-bots`.

---

## 1. The situation (what the live data proved, 2026-07-24)

- **Leads work and reach Bhavesh.** GA4 (property 516928458) last 90d: `generate_lead` 31, `Lead_Form_FactoryJet` 38, plus ~30 WhatsApp/call intents. Email + Firestore capture both confirmed. This is **not** a conversion or a form problem.
- **The "traffic" is mostly bots.** Cloudflare shows ~2,200 "visits"/day, but the report is dominated by `/wp-admin`+`/wp-login` probes, 95% "Desktop", datacenter geos, single-IP floods, and "No data" user agents. **Real humans (GA4) are ~15-25/day**, peaked at 767 sessions in June.
- **Paid was the real-traffic tap and it stopped.** Paid Search: Jun 173 sessions/18 conversions → Jul ~1. There is now **no ad budget**; organic is the only channel.
- **Why past content did not produce leads:** an intent + trust mismatch, not just low volume. The queries the site ranks for are largely (a) non-buyers (statistics researchers, students, people hunting other companies) or (b) US-local buyers who will not hire a page-2 India-based agency. The one cluster that ranks AND matches intent/trust is **India**.

## 2. Corrected target

Against real traffic the site already converts ~3% (~15-20 lead actions/mo from ~450-750 real sessions/mo). So the goal is not 30k visits/day. **At 3%, 30-40 leads/day needs ~1,000-1,300 real high-intent visits/day** (from ~15-25 today). That is a 12-24 month compounding build. Believable 90-day milestone: **150-300 real high-intent visits/day → 3-9 leads/day.** Protect the 3% (reviews/social proof) so volume converts.

## 3. Strategy (approved): A + B, C in background

- **A — India-first organic (primary lead engine).** Win the low-KD, high-volume India commercial + local terms where FactoryJet can rank *and* convert (location/trust match). Free leads + cash + reviews now, which fund everything else.
- **B — GEO / AI-search (location-agnostic reach).** Be the citable structured answer in ChatGPT / Perplexity / Google AI Overviews / Gemini. India has 100M weekly ChatGPT users; domain authority matters less than answer quality here, so a young domain can win. Bake answer-first blocks + FAQ/Service schema into every money page.
- **C — US organic (background, compounding).** Free CTR/title tuning on US pages already ranking; keep the AI Visibility Checker live; a few US GEO pages. No heavy investment until authority + cash exist.

**Why this is different from the past content push:** we target terms we can actually *rank* (low KD) and *convert* (India intent + trust), on **commercial pages** (not researcher-magnet blogs), with **GEO** so AI engines cite us. Past pages failed because they chased US/high-KD terms with no authority, or informational queries with no buyer intent.

## 4. The winnable map (from `TOPIC-STRATEGY.md` + live GSC)

| Cluster | Example terms | Vol/mo | KD | Asset |
|---|---|---:|---:|---|
| India digital marketing | best digital marketing agency in india; digital marketing agency near me | 5.4k; 12.1k | 9; 6 | Hub `/digital-marketing` |
| India SEO local | seo agency mumbai; seo company bangalore; seo agency in hyderabad | 8.1k; 4.4k; — | 8; 0-8 | City SEO pages |
| India AI-SEO | ai seo services india; ai seo agency india | 1.3k+ | 19 | Already page 1 (blog) + service page |
| India web design | web design company mumbai/noida/indore | 1.3-2.4k | 9-23 | City web-design pages |
| GEO/AEO (global) | answer engine optimization services; generative engine optimization | 480+ | 6-20 | Service pages + citable content |

## 5. Phased plan

**Phase 1 — India Digital-Marketing Hub (Sprint 1, this week).**
Build `/digital-marketing` per the existing approved spec `docs/superpowers/specs/2026-07-11-india-digital-marketing-hub-design.md` (15-section bespoke hub + 6 wiring items: hreflang w/ x-default, geo rule + test, sitemap, nav, footer, ≥2 inbound links). Bake in the B/GEO pattern (answer-first block + FAQPage/Service JSON-LD). Highest-winnability terms in the whole dataset; also an internal-link authority hub that de-orphans the India clusters.
No-regret fixes shipped alongside: add the live-but-unlisted city pages (`huntington-beach`, `providence`, `arlington`, `corpus-christi`, `lakewood-ranch`, `denver`) to `sitemap-us`; freshen the `best-ai-seo-agencies-india` blog meta.

**Phase 2 — India city/service commercial pages.** Bespoke (not thin-templated) SEO + web-design pages for Mumbai, Bangalore, Hyderabad, Pune, Noida, Indore, each GEO-optimized, interlinked from the hub. Anti-goal: no thin templated filler (that was the US city-page "impression mirage").

**Phase 3 — GEO expansion (B).** Answer-first + FAQ/Service schema on all money pages; produce "citable assets" AI engines cite (comparison / "X vs Y" / "best/alternatives" / original data), extending the proven self-listicle pattern. Dogfood the AI Visibility Checker to track FactoryJet citations per engine monthly.

**Phase 4 — US background (C).** CTR/title tune on US pages already ranking pos 3-8; keep AI Visibility Checker live; selective US GEO pages. Low effort.

**Ongoing.** Internal linking; collect + display real reviews (conversion protection); monthly measurement of real GA4 humans + `generate_lead` by channel; consolidate the messy lead-event taxonomy into one trustworthy key event.

## 6. Measurement

Monthly: real GA4 sessions + `generate_lead` by `sessionDefaultChannelGroup` (script `scratchpad/ga4_probe.py` pattern; SA key `secrets/factoryjet-seo-7fa130b491b8.json`, property 516928458). GSC weekly for new page-1 India terms + CTR. North-star: real high-intent visits/day → leads/day. Do NOT trust Cloudflare visit counts (bot-inflated).

## 7. Guardrails

Design/writing non-negotiables per `CLAUDE.md` + memory: cream `#FAFAF7` bg, `.fj-display` (Plus Jakarta Sans), inline accent `#F05A28`, ≤1 dark section, no gradient text/glow/particles/spinning counters, no em dashes, human voice, real numbers only. Every page passes `docs/PUBLISHING-STANDARD.md`. No local `next dev/build/preview` (OOM hazard); verify via `tsc --noEmit`, geo test, and static review.

## 8. References

`docs/superpowers/specs/2026-07-11-india-digital-marketing-hub-design.md` (Phase 1 build spec) · `pipeline/research/TOPIC-STRATEGY.md` · `docs/PUBLISHING-STANDARD.md` · memory `factoryjet-traffic-reality-bots`, `factoryjet-us-market-focus`, `factoryjet-seo-research-pipeline`.
