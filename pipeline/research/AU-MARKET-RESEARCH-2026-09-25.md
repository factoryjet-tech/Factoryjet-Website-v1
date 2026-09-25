# Australia market research (2026-09-25)

Same pipeline as the UK pass (`dfs_market_research.py --market au`, `analyze_market_research.py --market au`).
Spend: $7.73 (expand $3.69, SERPs $0.87, authority $0.05, LLM $3.12). Data: `data/market-au-2026-09-24/`.

## Where we stand today
- **Rankings:** FactoryJet is in the top 30 for **0 of 154** Australian buyer searches.
- **AI assistants:** named in **0 of 68** answers (ChatGPT 0/17, Claude 0/17, Gemini 0/17, Perplexity 0/17).
- **AI Overviews** appear on 68% of these searches; a **Google Maps pack** on 30%.
- **What AI cites for Australian buyers:** Clutch (20 answers), GoodFirms (9), DesignRush (9), Shopify (7), Semrush agency directory (7), plus "top 10 agencies" listicles (aitrillion, 23digital, edisonai, team400).
- **Our AU pages:** `/au` (web design home), `/au/seo`, and four city pages (Melbourne, Brisbane, Adelaide, Canberra). No AU page for AI agents, AI consulting, ecommerce or Shopify.

## Demand by topic (national monthly searches, Australia)
| Topic | Searches/mo | Median CPC (AUD) | Trend vs last year | AU page today |
|---|---|---|---|---|
| SEO agency / services (general) | 37,720 | 34 | 1.4x | /au/seo |
| Web design agency (general) | 18,480 | 14 | 1.1x | /au |
| Shopify agency / developers | 6,410 | 17 | 1.2x | none |
| AI automation agency | 6,090 | 11 | 1.2x | none |
| AI agent development + integration | 4,860 | 13 | 1.7x | none |
| Local SEO | 4,820 | 26 | 1.2x | none |
| Web development company | 4,000 | 13 | 1.0x | none |
| Ecommerce agency / development | 3,410 | 20 | 1.5x | none |
| WordPress developers | 3,380 | 23 | 0.8x | none |
| Website cost | 2,220 | 9 | 1.1x | none |
| AI consulting | 1,960 | 15 | 1.7x | none |
| Ecommerce SEO | 1,640 | 28 | 2.0x | none |
| SEO audit | 1,640 | 18 | 1.6x | none |
| AI customer service / chatbots / receptionists | 1,280 | 15 | 1.4x | none |
| AI SEO / GEO | 1,010 | 31 | 2.0x | none |
| Shopify Plus | 440 | 5 | 1.3x | none |
| Magento, WooCommerce, BigCommerce, B2B, headless | under 200 each | | | none |

Close variants are collapsed before summing (same rule as the UK and US passes).

## Winnability (weakest page-1 site's referring domains vs our ~28 earned)
- **Winnable now: 40 searches. One link cycle: 33. Gated: 32. Hard: 49.**
- **Web design and SEO city searches are Maps-pack led** (web designer, melbourne web designer, seo consultant melbourne, seo expert brisbane...). Same lesson as the UK: without an Australian address, city pages cannot win those clicks. Keep the existing city pages, do not add more.
- **AI searches are winnable and mostly have no Maps pack:** ai automation agency (390), ai development (260), build ai agent (210), ai consulting sydney / melbourne (110 each), ai automation service (90), ai strategy consulting (70), ai receptionist for small business (70), ai agent for business (70), ai phone answering service (50).
- **Ecommerce:** shopify seo agency (320) winnable; shopify development (260), shopify expert (210), shopify developer melbourne / sydney / australia one link cycle; ecommerce development winnable.
- **Cost questions are winnable:** website designing cost (320), how much does a website build cost (260), website design cost australia (90). These are AI-Overview searches.
- **AI SEO / GEO:** generative engine optimisation services / agency winnable, geo agency (170) one link cycle.

## Recommended AU build (in order)
Focus matches the market doctrine: AI agents + ecommerce first; no new city pages.

| # | Page | Main searches | Why |
|---|---|---|---|
| 1 | `/au/ai-agents` (AI automation agency Australia) | ai automation agency, ai agent for business, ai automation service, ai agent developers | 6,090/mo topic, winnable, no Maps pack |
| 2 | `/au/ai-consulting` | ai consulting (1,000), ai consulting sydney / melbourne, ai strategy consulting | 1,960/mo, growing 1.7x, winnable |
| 3 | `/au/ai-development` | ai development, ai development company in australia, custom ai development | winnable, owns the development/integration terms |
| 4 | `/au/shopify-development` | shopify agency / developer / expert (+ Sydney, Melbourne) and shopify seo agency | 6,410/mo, the biggest ecommerce pocket |
| 5 | `/au/ecommerce-development` | ecommerce agency / development / company | 3,410/mo, growing 1.5x |
| 6 | `/au/ai-receptionist` | ai receptionist for small business, ai phone answering service, customer service ai agent | 1,280/mo topic, winnable |
| 7 | `/au/ai-seo` | generative engine optimisation services / agency, geo agency, ai seo | 1,010/mo, growing 2x |
| 8 | Blog: website cost in Australia | website designing cost, how much does a website build cost | winnable AI-Overview searches; needs a decision on the no-prices rule (see below) |

Reuse the UK page template, the Wave 2/3 agent brief and the UK/US research method. AU spelling (optimisation), AU context (GST, ABN, Australian Privacy Principles / OAIC, Australian Consumer Law), AUD never quoted as prices.

## Also needed
- **AU header and footer:** AU pages use their own header (`src/app/au/components/Header.tsx`), not the four-hub mega menu. Give AU the same treatment as the UK once AU hub pages exist.
- **Directories drive AI answers in Australia even more than in the UK** (Clutch 20 of 68 answers). Our Clutch/GoodFirms/DesignRush profiles list no Australian presence or service focus. Adding AI agent and Shopify service lines there matters more than any single page.
- **Cost pages:** Australian buyers ask price questions constantly ("How much should I expect to pay for SEO?", "How much does it cost to hire a Shopify developer?"). Our rule is no currency values. A cost guide that explains drivers without numbers is weaker than competitors'. Decide whether AU cost guides may quote typical market ranges (from cited third-party sources, not our prices).
