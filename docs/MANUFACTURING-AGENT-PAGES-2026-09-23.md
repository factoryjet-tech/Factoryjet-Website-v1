# Manufacturing agent pages: overlap decision (2026-09-23)

Pages in scope:

- `/services/manufacturing-ai-agents` (industry page, "By industry" in the mega nav and the AI agent directory)
- `/services/ai-agent-development/manufacturing-operations-agent` (capability page, "By capability")
- Nearby: `/services/ai-agent-development/rfq-bidding-agent`, `/services/ai-agent-development/procurement-supply-chain-agent`

## Evidence

### Google Search Console (sc-domain:factoryjet.com, 2026-06-23 to 2026-09-21, web)

| Page | Clicks | Impressions | Avg position | Queries returned |
|---|---|---|---|---|
| /services/manufacturing-ai-agents | 0 | 0 (not in the page report at all) | n/a | none |
| /services/ai-agent-development/manufacturing-operations-agent | 0 | 20 | 10.6 | none (all anonymized) |
| /services/ai-agent-development/procurement-supply-chain-agent | 0 | 20 | 16.6 | "agent supplier" (2 impr, pos 60.5) |
| /services/ai-agent-development/rfq-bidding-agent | 0 | 1 | 5.0 | none |

Neither page has a query we can see, so there is no measured keyword cannibalization. The overlap is in page content and target keywords, not in observed rankings.

### AI assistant citations

`pipeline/research/AI-BUYER-SWEEP-RESULTS-2026-09-17.md`: none of the four pages was cited. The only manufacturing asset cited was the blog post `/blog/ai-agent-architecture-manufacturing-rfq-erp-sync-2026` (7 citations on prompt A05, "AI agent that automates RFQs and quotes from our ERP"). Nothing here needs protecting from a URL change, but nothing here is worth retiring either.

### Content comparison

- **manufacturing-ai-agents**: an industry page for manufacturers buying automation that writes back to the ERP. Sections: five sub-vertical showcases (CNC quoting, supplier PO tracking, PCBA sourcing, EDI 830/862, plastics quoting), ERP/MES/EDI coverage, architecture, 4-phase rollout, comparison vs SaaS quoting tools, 22 FAQs about RFQ parsing, BOMs, ERP sync, ITAR. Already links out to the RFQ, procurement and operations pages as spokes.
- **manufacturing-operations-agent**: a read-only information layer for plant managers and supervisors. Shift handovers, downtime reason rollups, work-order status, maintenance triage, NCR drafting, schedule questions. Explicitly never writes to ERP or machines. 23 FAQs about scope, OPC UA, MTConnect, CMMS, trust.
- **Real overlap found**: the industry page claimed shift handover synthesis (an architecture card, a Wonderware "shift handover reporting" line, and a Service schema offer "Shop Floor Shift Handover & CMMS Maintenance Intelligence"), and its meta description sold "shop-floor handovers". Keyword lists collided ("ai agents for manufacturing" vs "AI agent for manufacturing", "erp ai integration manufacturing" vs "ERP AI agent manufacturing"). The operations page did not link to the industry page at all.

## Decision: (b) differentiate, no redirect

The two pages serve different buyers and different jobs. One writes draft quotes and PO updates into the ERP for approval; the other only reads and answers. The site architecture already treats them as industry hub vs capability spoke. Merging would bury a read-only positioning that is the operations page's whole argument.

| | Industry page | Operations page |
|---|---|---|
| Primary keyword | manufacturing AI agents for quoting and ERP automation | manufacturing operations AI agent |
| Search intent | Owner or ops exec wants quoting and PO work automated with ERP write-back | Plant manager wants floor questions, handovers and downtime answered, read-only |
| Title | Manufacturing AI Agents for Quoting & ERP Automation | Manufacturing Operations AI Agent for Plant Questions |
| H1 | Manufacturing AI Agents for Quoting and ERP Automation. | A manufacturing operations AI agent that answers floor questions from the records you already keep. |

## Changes made

`src/app/services/manufacturing-ai-agents/page.tsx`
- New title, meta description, H1 (also fixes a stray double period in the old H1), hero intro, keywords.
- Removed the shift handover architecture card, the Wonderware handover line and the shift handover Service schema offer.
- Spoke 03 card renamed "Manufacturing Operations Agent" and its description now matches that page (dropped "predictive maintenance alerts", which the operations page does not offer).
- Final CTA headline no longer says "Manufacturing Operations".
- One-sentence cross-link under the definition block pointing to the operations page for read-only needs.
- `dateModified` bumped to 2026-09-23.

`src/app/services/ai-agent-development/manufacturing-operations-agent/page.tsx`
- New title (page, OG, Twitter, WebPage schema name), meta description, H1, keywords (dropped the two colliding terms).
- One-sentence cross-link after the definition block pointing to the industry page for ERP write-back needs.
- Removed a duplicate WebPage JSON-LD script that was rendered twice with the same id.
- `dateModified` bumped to 2026-09-23.

FAQ JSON-LD on both pages is still mapped from the same `FAQ_ITEMS` array the visible FAQ renders. No URL retired, so no `_redirects`, nav, directory, footer, sitemap or llms.txt change.

## Not done, worth a later look

The industry page's supplier PO and RFQ quoting sections also overlap the RFQ and procurement agent spoke pages. Those spokes carry the detail; the industry page summarises and links to them, which is the intended hub pattern. Revisit only if Search Console starts showing the hub and a spoke ranking for the same query.
