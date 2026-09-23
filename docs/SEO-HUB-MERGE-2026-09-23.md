# SEO hub merge: /services/seo into /services/ai-seo (2026-09-23)

Decision (owner): `/services/ai-seo` is the "AI Search & SEO" hub. `/services/seo` gets a
permanent 301 to it. GSC, last 90 days: `/services/ai-seo` 435 impressions, avg position 16;
`/services/seo` 186 impressions, avg position 64; 2 clicks each.

`/services/ai-seo` keeps its head terms ("ai seo agency", "ai seo services") and metadata.
`/services/generative-engine-optimization` keeps GEO, AEO and LLM SEO. Nothing below was added
to compete with either.

## Content map (old /services/seo, section by section)

| Old section | Verdict | Where it lives now | Reason |
|---|---|---|---|
| Hero (H1, inline form, proof chips) | Drop | `/services/ai-seo` hero | The ai-seo hero already promises Google rankings plus AI citations, with its own inline form. |
| Short answer block | Drop | `/services/ai-seo` AiSeoExplained | Same answer-first job, already done on the hub. |
| Trust / logo bar | Drop | Sitewide components | Generic, repeated across the site. |
| "SEO growth engine" (technical, content, authority cards) | Move (condensed) | ai-seo `ClassicSeoServices` work list | Four bullets cover the classic SEO scope without a second card grid. |
| "Explore our SEO services" link grid | Move | ai-seo `ClassicSeoServices` link cards | The pillar-to-cluster job is the main thing the old page did. Local, small business, ecommerce, Shopify SEO, SEO audit, SEO consulting. |
| 5-step process (audit, foundation, content, authority, leads) | Drop | ai-seo ServiceJourneyRow | The hub already has a 5-step process covering the same stages. |
| "Why founders choose FactoryJet" comparison table | Drop | ai-seo ComparisonTable, small-business-seo and local-seo comparisons | Three comparison tables already exist in the cluster. |
| About / team block | Drop | ai-seo TalkToFounder, `/about` | Founder-led message already on the hub. |
| Charcoal AI-citation room | Drop | ai-seo GEO/AEO + AiSeoChanges | This is the hub's core topic, covered in more depth there. |
| Affordable SEO comparison (6 named providers with prices) | Already covered elsewhere + 1 FAQ | `/blog/best-seo-agencies-usa` (same research, 31 Jul 2026) and one ported FAQ on ai-seo | Full listicle stays on the blog; the hub links to it and keeps the sourced price summary as an FAQ. No new numbers. |
| "Still comparing" link to best-seo-agencies-usa | Move | ai-seo `ClassicSeoServices` | Kept as one inline link. |
| Industry SEO links (law firm, dental, healthcare, roofing) | Move | ai-seo `ClassicSeoServices` "By industry" line | Keeps those pages linked from the hub. |
| US city SEO links (17 cities) | Move | ai-seo `ClassicSeoServices` "SEO in your city" | Now rendered from `US_SEO_CITY_PAGES` exported by `SeoCityLinksUS.tsx` (29 cities), one list instead of two. |
| Closing CTA | Drop | ai-seo TalkToFounder | Hub has its own closing CTA. |

## FAQ (30 on the old page)

Ported into the ai-seo `FAQ_ITEMS` array (the same array that feeds FAQPage JSON-LD), new
category "Classic SEO", 7 questions:

1. Do you still do traditional SEO, or only AI SEO? (new bridge question for the merge)
2. How long does SEO take to work? (30 to 90 days, month four to six, as on the old page)
3. Do you guarantee first-page Google rankings?
4. What is technical SEO, and who should run it? (merges "what is technical SEO", "Core Web Vitals" and "best technical SEO agency")
5. Can you optimize my current website, or do I need a new one? (7-day rebuild, 100/100 Lighthouse, both already on the site)
6. Should I hire an SEO agency near me or a remote one?
7. Which SEO companies publish affordable pricing? (prices as checked 31 July 2026, same figures as the blog)

Not ported, with reason:

- Cost, contracts, free audit, monthly deliverables, reporting, "what if no results", link building, content writing, AI SEO / GEO, ChatGPT and AI Overviews, who I work with: already answered on ai-seo.
- Small business SEO, affordable pricing for small business: covered on `/services/small-business-seo`.
- Local SEO / Google Business Profile, businesses outside my city: covered on `/services/local-seo`.
- Ecommerce and Shopify SEO: covered on `/services/ecommerce-seo` and `/services/shopify-seo`.
- Industries: covered by IndustriesGrid on ai-seo and the industry SEO pages.
- "Best SEO agency in USA" and "top 10 SEO companies in USA": keyword-stuffed, and the blog `/blog/best-seo-agencies-usa` owns that intent.
- "How is this different from an AI tool": ai-seo deliberately dropped DIY and tool questions as blog intent on 2026-08-06.

## Mechanics

- `public/_redirects`: `/services/seo /services/ai-seo 301`. No rule pointed to `/services/seo`, so it is one hop.
- `next.config.mjs`: dev-only mirror of the same redirect.
- `src/app/services/seo/page.tsx` deleted, following the 2026-09-17 merge (4f20990). validate-build fails on a redirect source that still has a page.
- Sitemap entry removed. `seoServicesAlternatesUS` removed (only the retired page used it).
- Geo middleware: India `/seo/*` now sends NA humans to `/services/ai-seo`; the `/services/seo` to `/seo` India mirror is removed.
- Every internal link to exactly `/services/seo` repointed to `/services/ai-seo`. Where that left two
  adjacent links or cards pointing at the hub (pricing, four website design pages, roofing SEO),
  they were merged into one.
