# Australia build: shared agent brief (2026-09-25)

Every builder agent reads this whole file, then `UK-WAVE3-AGENT-BRIEF-2026-09-24.md` (the base contract: safety rules, content gate, writing rules, image review, self-check and report) and `UK-WAVE2-AGENT-BRIEF-ADDENDUM-2026-09-24.md` (read the top 3 incumbents and beat them on substance; work only in your own scratch subfolder). Where this file differs, THIS FILE WINS.

## The AU site you are part of
- Hub: `/au` (FactoryJet Australia). Detail pages being built in parallel today, all of which WILL exist at deploy:
  `/au/ai-agents`, `/au/ai-consulting`, `/au/ai-development`, `/au/ai-receptionist`, `/au/ai-seo`, `/au/shopify-development`, `/au/ecommerce-development`.
  Existing: `/au/seo`, `/au/melbourne`, `/au/brisbane`, `/au/adelaide`, `/au/canberra`.
- Every page links to the hub `/au` and to at least 4 sibling AU pages where relevant, with descriptive anchor text. Link to relevant existing blog posts only after confirming the slug exists in `src/lib/legacy-pages/Blog/`.

## Page shell (exactly this, no other header or footer)
```tsx
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import '../au-service.css';            // scoped under .au-svc (a copy of the UK template CSS)
...
<SiteHeader locale="au" logoHref="/au" />   // the orchestrator is adding locale "au" + the mega menu today
<div className="au-svc"> ...page... </div>
<SiteFooter linkColumns={AU_FOOTER_COLUMNS} variant="dark" tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
```
- Mirror the section structure, class names and component usage of `src/app/uk/ai-consulting/page.tsx` (read it fully), replacing the `uk-aiagents` wrapper with `au-svc`, the UK Footer with the SiteFooter above, and adding the SiteHeader line. Use `HeroInlineForm`, `Breadcrumbs`, `ModalCTAButton`, `MidPageCTA` exactly as that page does.
- Metadata: `locale: 'en_AU'`; `alternates: { canonical: CANONICAL, languages: { 'en-AU': CANONICAL, 'x-default': CANONICAL } }`; `inLanguage: 'en-AU'` in schema; `dateModified: '2026-09-25'`.

## Research (already paid for; do not spend more on DataForSEO)
- Your brief: `pipeline/research/data/market-au-2026-09-24/brief_<page>.json` (keywords with AU volume/CPC/KD/intent; 17 to 19 live AU SERPs with top 10, titles, AI Overview citations and People Also Ask).
- Market context: `pipeline/research/AU-MARKET-RESEARCH-2026-09-25.md`; full data in `data/market-au-2026-09-24/` (`analysis.json` topics, winnability verdicts, PAA bank, question terms; `llm_calls.json` = what ChatGPT, Claude, Gemini and Perplexity answered for Australian buyers).
- Use EVERY high-volume, relevant term from your brief: primary in title, H1, first 100 words, one H2 and meta description; 20 to 35 supporting terms woven through H2s, body, tables, FAQ. Collapse close variants (one cluster, one volume). Skip navigational brand noise (other companies' names, logins, courses, jobs, salaries).
- FAQs: 25 to 35, grounded in your brief's People Also Ask and the question terms, phrased the way an Australian buyer asks.

## Depth and design
- **Minimum 3,000 words of visible copy per detail page** (FAQs count), target 3,500. **Hub: minimum 4,000.** Depth = more answered questions, tables, examples and specifics, never padding.
- **Images: 5 per page minimum**: hero (1400x933), og (1200x630 crop), and 3 in-body images placed through the page so no long stretch is text-only. Generate with Runware `openai:gpt-image@2` (the newest and best model we have measured) at 1536x1024. Australian settings (bright Sydney/Melbourne/Brisbane offices, warehouses, clinics, cafés, tradie vans; natural Australian light). AI-generated people are allowed.
- **Image review (mandatory, full size):** hands, faces, garbled text, real logos, AND SCREEN GEOMETRY: if people look at a screen, the screen must face THEM; if the screen faces the camera, the people must be beside or in front of it, never behind it. Prompt an over-the-shoulder camera when people look at a screen. Screens show no words and no numbers. Regenerate anything that fails. Record prompts and review notes in `public/images/au/<page>/IMAGE-CREDITS.txt`.
- **Alive and interactive:** keep the template's interactive FAQ (category filter) and add at least two more light interactive elements that need no new client component, such as `<details>` expanders for process steps or "which option fits you" checklists, hover-state cards linking to sibling pages, and a comparison table with a highlighted FactoryJet column. No carousels, no count-up numbers, no autoplay video.

## Australian context (use where relevant, cite where factual)
GST and ABN; the Privacy Act 1988, the Australian Privacy Principles and OAIC guidance (for AI and data); the Australian Consumer Law and ACCC (for online selling, returns, and advertising claims); ABS statistics; Australia Post / couriers; Afterpay/Zip; Xero and MYOB; the Australian Government's AI adoption and "safe and responsible AI" guidance (industry.gov.au / DISR, digital.gov.au). Australian spelling (optimisation, organisation, colour). Never quote prices in AUD or any currency; explain what drives cost and route to "Talk to the Founder".

## Report back (under 450 words)
Files; title, meta, H1; word count of visible copy; primary + top 20 keywords used; FAQ count; competitors named (verified); citations (verified URLs); the 5 images and review notes; interactive elements added; internal links out; incumbent gaps you covered; anything you were unsure about.
