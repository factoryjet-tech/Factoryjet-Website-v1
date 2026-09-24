# UK Wave 2 addendum (2026-09-24)

Read `UK-WAVE3-AGENT-BRIEF-2026-09-24.md` first; every rule there applies. This file adds the rules for Wave 2, which targets GATED terms: the sites on page 1 have far more links than we do, so we only win by publishing the most complete, most useful page on the results page.

Your research JSON: `pipeline/research/data/market-uk-2026-09-24/brief_<page>.json` (same shape as Wave 3).

## Beat the incumbents on substance
1. From your brief, take the head term's `serps[].top10` and `titles`. **Fetch the top 3 organic pages that are agencies or service pages** (skip directories, Reddit, shopify.com help docs). Note what they cover: sections, questions answered, proof shown, tables, process, FAQs.
2. Your page must cover everything useful they cover, plus the gaps you found. List those gaps in your final report ("they all skip X; we cover X").
3. Always target the softer twin terms alongside the head term (listed in your prompt).
4. Depth: new pages 60 to 75 KB of source. Do not pad. Depth means more answered questions, clearer tables and more specifics, not longer paragraphs.

## Scratchpad (important)
Parallel agents share the session scratchpad. Work ONLY inside your own subfolder: `/private/tmp/claude-501/-Users-bhaveshbarot-FactoryJet-website/346e5cb5-53db-429f-aabd-43b3d419a7ec/scratchpad/w2-<page>/`. Never read, rename or overwrite files outside it.

## Upgrades of existing pages (shopify-development, ecommerce-development only)
- Keep the URL, the page's own CSS file and design, and its existing component usage.
- **Protect what already ranks.** Your prompt lists the queries the page already gets impressions for. Keep those terms in the title, H1 or H2s. Do not remove sections that carry them.
- Improve rather than rewrite: tighten the hero and answer-first block, re-point the title and meta at the head term plus the twin terms, add the missing sections the incumbents cover, and bring FAQs up to 25 to 30 PAA-grounded questions. Fix anything that breaks the rules (em dashes, prices, "Technologies", labor-replacement language, unverified stats, stale years).
- Keep the FAQ schema mapped from the rendered array. If the page currently hand-writes a second FAQ list for schema, fix it.
- Keep the file under ~110 KB.
- Report a short before/after: title, meta, H1, FAQ count, sections added or removed.
