# Homepage redesign: keyword, SERP, PAA map (2026-09-23)

Mockup: https://claude.ai/artifact/T9nbSTbX581xUhGkXDzBYh (v2). Design = AI Agent Development page's spec-sheet system.
Raw data: `data/homepage-redesign-2026-09-23.json` (script `dfs_homepage_redesign.py`, US 2840, cost $0.14, balance after $20.67).
FAQ source of truth for the port: `data/homepage-faqs-2026-09-23.json` (36 items, 6 categories). Render AND FAQPage schema from this one array.
Images: `public/images/home/` (3 webp, GPT Image 2 via Runware, reviewed: no text, no brands, hand OK).

## Rule: the homepage owns the ecommerce entity; other lines are summarized + linked
Stuffing "seo services" (60,500) or "web design company" (14,800) into the homepage would cannibalize the hubs
and is the keyword-stuffing pattern the GEO paper shows hurts (-8 to -10%). Each line gets one answer-first
definition + capability list on the homepage and a link to the page that owns the term.

| Term (US/mo, KD) | Owner page | Where on homepage |
|---|---|---|
| ecommerce agency 2,400 KD34 · ecommerce development company 880 KD28 · ecommerce development services 720 KD18 · ecommerce development agency 210 | **/** (homepage) | title, lead, facts §01, H2s, FAQ |
| ecommerce website design 1,600 KD19 · ecommerce website development 1,300 KD26 | /services/ecommerce-development | CAP-01, FAQ cost + definition |
| b2b ecommerce platform 1,600 KD11 · b2b ecommerce agency 170 KD1 | /b2b-ecommerce | CAP-02, FAQ |
| shopify development partner 14,800 KD36 · shopify plus agency 590 KD16 · shopify development agency 480 | /services/shopify-development, /services/shopify-plus-agency | FAQ (hire cost, pay someone to build) |
| agentic commerce 5,400 KD40 · ai for ecommerce 1,900 KD26 | /agentic-commerce | FAQ + related link |
| ecommerce consulting 720 KD6 · ecommerce migration services 140 KD0 · replatforming 110 KD0 | /ecommerce-consulting, /services/shopify-migration-agency | CAP-06 |
| ai development company 2,900 KD25 · ai development services 2,400 KD33 · ai agent development company 720 KD9 · ai integration services 720 KD1 | /services/ai-agent-development, /services/ai-integration-services | SVC-02, FAQ |
| ai seo 6,600 KD41 · ai seo agency 1,600 KD0 · ai seo services 1,300 KD2 · GEO services 720 · AEO 2,400 · ecommerce seo services 1,300 KD4 | /services/ai-seo, /services/ecommerce-seo | SVC-03, FAQ |
| web design company 14,800 KD37 · web design agency 12,100 · website redesign services 6,600 KD10 · website development company 4,400 KD24 | /services/web-design, /services/website-redesign | SVC-04, FAQ |

Not targeted: "ai agency" 49,500 (ambiguous intent), "seo services/company/agency" (authority-gated, hubs own them).

## Platforms section (added v3)
Platform index after the ecommerce capability cards: 7 rows, each links to the page that owns the platform term.
Commerceflo (/commerceflo, "early access", wording mirrors that page), Shopify (/services/shopify-development, owns "shopify development partner" 14,800 KD36),
Shopify Plus (/services/shopify-plus-agency, 590 KD16), Adobe Commerce (/services/magento-development, "magento development company" 390 KD26),
BigCommerce (/bigcommerce-development, 90 KD13), WooCommerce (/services/woocommerce-development, 140 KD50), Headless & custom (/headless-commerce).
Footer links /best-ecommerce-platforms. Answers the PAA "Which ecommerce platform is best" shape (AIO lists platform + best-for).

## SERP findings
- AI Overview fires on: shopify development agency, b2b ecommerce agency, ai development company, ai agent development company, ai seo agency, GEO services, ecommerce website development. NOT on ecommerce development company/agency, ecommerce agency, web design/development company (local pack + directories instead).
- AIO answers open with a one-sentence category definition, then a bulleted capability list (integrations, complex pricing, migrations). Our copy mirrors that: definition-first paragraphs + named-capability lists with real system names.
- Directories (clutch, designrush, semrush agencies, 50pros, selectedfirms) hold 2-4 of top 10 on agency terms: keep Clutch/DesignRush profiles current (they exist and never linked back, see referring-domains memory).
- PAA used for new FAQs: what is ecommerce development / an ecommerce agency / best ecommerce development companies; Shopify developer cost; pay someone to build Shopify store; what is a B2B ecommerce agency; will AI replace ecommerce; what is an AI SEO agency; AI SEO cost; is SEO still worth it in 2026; what does a web design company do; how much to pay for a website; is AI replacing web designers. Off-topic PAA (LLC, salaries, "big 5 AI companies") deliberately skipped.
- Price answers quote ranges already source-verified in our own cost posts (Shopify/BigCommerce cost guides, WebFX May 2026). No FactoryJet pricing.

## Port checklist (after sign-off)
- Title: `Ecommerce Development Company for DTC & B2B Brands | FactoryJet` (keeps entity, adds "company" 880/mo). Meta: mention AI development, AI SEO, web design once each.
- Schema: Organization (sameAs), WebPage dateModified, one Service per line (4) or OfferCatalog, FAQPage mapped from the same FAQ array, BreadcrumbList.
- Keep H1 unique; strict H2/H3; no em dashes; verify via tsc + validate-build + check-tracked-imports (no local render).
