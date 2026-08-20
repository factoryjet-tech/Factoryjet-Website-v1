# UK Blog Topic Recommendations, 2026-08-20

Source: `pipeline/research/data/market-briefs/uk.json` (120 deduped blog-shaped candidates per service line, plus live SERP enrichment on a shape-diverse subset). All volumes are real UK monthly search volume. Keyword difficulty deliberately ignored. Existing coverage checked against all 114 published slugs in `existing_blog_slugs`.

## Market reality

Total blog-shaped UK volume across the seven lines is roughly **339,100 searches a month**, split very unevenly:

| Service line | Blog-shaped volume | Verdict |
|---|---|---|
| SEO | 93,020 | Strong volume, but we already own most of the money clusters |
| Marketplace (Amazon/TikTok) | 68,300 | Strong and badly under-served: only 3 posts, none UK-specific |
| Web Design & Development | 65,370 | Strong, but the 18 existing UK/design posts crowd the obvious angles |
| Digital Marketing | 60,270 | **Strongest opportunity.** Only 2 posts exist and both are India-market |
| AI Agents & Automation | 24,950 | Decent volume, but 16 existing posts make this the highest duplication risk |
| Ecommerce Development | 20,980 | Moderate volume, 13 existing posts, narrow gaps left |
| AI SEO / GEO | 6,210 | **Genuinely weak.** See the honesty note below |

**Strong lines:** Digital Marketing and Marketplace. Both have large, buyer-shaped UK demand and almost no existing coverage. Every topic below in those two lines is a clean first-mover play for us.

**Crowded lines:** SEO, Web Design and AI Agents all have real volume, but the high-intent clusters (agency listicles, "what is X" definitions, build-cost guides, DIY-vs-agency) are already published. The picks below deliberately go around them rather than through them.

**Weak line, stated plainly: AI SEO / GEO.** Of its 6,210 monthly searches, roughly 3,000 are people trying to switch Google's AI Overview off, a few hundred are environmental-impact questions, and around 900 are nonsense or meme queries such as "is 2027 next year ai overview" (390) and "how many rocks should i eat per day ai overview" (40). The actual commercial GEO terms bottom out at 10 to 70 searches a month, and we already have ten GEO posts covering them. There is no hidden UK GEO goldmine. The three picks below are the best available, not the best imaginable, and one of them is an awareness play rather than a lead play. That is flagged in the entry itself.

**Two clusters deliberately passed over, and why:**
- **"how to sell on amazon uk"** (1,300) + "how can i sell on amazon uk" (1,300) + "how sell on amazon uk" (1,000) = 3,600/mo. This is the single biggest UK-specific marketplace cluster, but the right move is to localise the existing `how-to-sell-on-amazon-2026` post into a UK sibling, not to commission a new topic that near-duplicates it.
- **"best seo tools"** cluster (5 variants at 1,300 each = 6,500/mo). Largest untouched SEO volume in the dataset, but the intent is tool-shopping, the SERP is owned by Semrush, Ahrefs and Backlinko, and it converts poorly into agency enquiries. Worth doing eventually, not worth one of three slots.

**Walmart has zero UK demand.** There is not one Walmart keyword anywhere in the UK marketplace candidate set, which is correct because Walmart does not run a UK marketplace. The existing `how-to-sell-on-walmart-marketplace-2026` post should stay a US asset and should not be localised.

**Rejected on intent:** the "cheap online store" / "best fashion online store" / "best wine online store" cluster (B2C shoppers), the whole "how to block/stop/remove google ads" cluster (2,380/mo, consumers blocking ads), Amazon account-deletion queries (1,260/mo, churn intent), "is tiktok shop safe" (1,600, shoppers), AI chatbot roleplay and companion queries, and every "SEO salary / is SEO a good career" style PAA thread.

---

## Web Design & Development

Blog-shaped volume: 65,370/mo. Eighteen existing posts already cover UK agency pricing, London and UK agency listicles, how to choose an agency, redesign cost, redesign checklists, Webflow, React vs WordPress and B2B trust signals. The build-cost cluster is spoken for. What is not covered: what a site costs to *run*, the DIY-builder decision, and design inspiration with a conversion lens.

### 1. What a business website really costs to run each year in the UK

- **Primary keyword:** "hosting website cost" (720/mo)
- **Secondary keywords:** "host website cost" (720), "website cost uk" (590), "best website hosting for wordpress uk" (390), "how much does hosting a website cost" (320)
- **Total addressable volume:** 2,740/mo
- **AI Overview status:** Not directly measured for this keyword. Every enriched keyword in the adjacent website-cost cluster fires an AI Overview ("web design cost", "web page design cost", "how much do website cost", all `ai_overview: true`), so assume yes.
- **Angle:** Everyone writes the build-cost post; nobody writes the running-cost post, which is where SMBs actually get stung. Answer "How much should I pay someone to maintain my website?", "Can I host my own website for free?" and "Is it worth owning a domain?" with a real annual £ breakdown: hosting tiers, domain renewal, SSL, backups, plugin licences, a care plan, and VAT on all of it. Close with the comparison that lands for a UK owner: a care plan versus the loaded cost of an in-house junior at the £12.71 National Living Wage.
- **Incumbents:** reddit.com, godaddy.com, wix.com, checkatrade.com, duport.co.uk, startups.co.uk. Two builder vendors and a trades directory, none of whom want to talk honestly about ongoing cost.
- **Why it isn't a duplicate:** Closest is `uk-web-design-agency-pricing-2026-smb-guide`, which prices the *build*. This prices the twelve months after launch, which that post does not cover and which is our retainer pitch.

### 2. Wix, Squarespace or a designer: the real three-year cost for a UK small business

- **Primary keyword:** "wix website cost" (480/mo)
- **Secondary keywords:** "how much does squarespace website cost" (390), "website builder cost" (320), "how much does a website builder cost" (320), "website builder low cost" (320)
- **Total addressable volume:** 1,830/mo
- **AI Overview status:** Not directly measured. The enriched neighbours in the same cost cluster all fire AI Overviews, so treat as likely yes.
- **Angle:** The buyer is mid-decision between a £16/month builder and a designer, and the SERP is answered almost entirely by the builders themselves. Ground it in the PAA thread running through this cluster: "How much should you pay someone to do a website?", "Is there a 100% free website builder?" and "How much does it cost to have AI build a website?". Model three years of total cost including plan uplifts, transaction fees, apps, and the migration cost when the business outgrows the builder.
- **Incumbents:** wix.com, godaddy.com, reddit.com, startups.co.uk, forbes.com
- **Why it isn't a duplicate:** Closest are `webflow-vs-wordpress-us-small-business-2026` and `custom-web-development-vs-wordpress-us-small-business-2026`. Both are US-market and both compare developer platforms. Neither touches Wix or Squarespace, which is where UK SMB budget actually starts.

### 3. Twenty web design examples worth stealing from, and the rules behind them

- **Primary keyword:** "best web design websites" (1,600/mo)
- **Secondary keywords:** "best web page design" (1,600), "ideas web design" (720), "web design examples" (320), "web page design examples" (320)
- **Total addressable volume:** 4,560/mo
- **AI Overview status:** Yes on the primary (`ai_overview: true`). Mixed across the cluster: "best web design site" fires, "best web page design" does not.
- **Angle:** This SERP is pure gallery, and the PAA underneath it is quietly full of business questions. Answer "What are the five golden rules of web design?", "What is the 3 second rule in web design?" and "Can ChatGPT design a website?" by pairing each example with the commercial decision it demonstrates, not the aesthetic. Every entry gets a named pattern and a reason it converts.
- **Incumbents:** awwwards.com, pixelish.co.uk, siteinspire.com, dribbble.com, reddit.com. All inspiration galleries with no commentary, which is the gap.
- **Why it isn't a duplicate:** Closest is `b2b-web-design-trust-signals`, which is a principles post with no gallery, and `best-web-design-agencies-uk-smbs-2026`, which lists firms rather than work. This is the only piece in our library that shows work and explains it.

---

## Ecommerce Development

Blog-shaped volume: 20,980/mo, the second-weakest line. Thirteen existing posts already cover UK Shopify and WooCommerce development, UK online-store building, UK ecommerce agency selection, WooCommerce agency evaluation, headless commerce and cart abandonment. Much of the remaining volume is B2C shopping intent ("cheap online store" 880, "best fashion online store" 480, "best wine online store" 720) which is rejected outright.

**Deliberately passed over:** the generic ecommerce build-cost cluster ("ecommerce website costs" 210, "ecommerce website price" 210, "ecommerce website cost uk" 70 and about nine more, roughly 1,640/mo combined). It is high intent, but `ecommerce-development-uk-shopify-woocommerce-2026`, `shopify-website-cost` and `shopify-development-cost-2026` between them already answer it, and a fourth cost post risks cannibalising all three.

### 1. What WooCommerce actually costs a UK store per year

- **Primary keyword:** "woocommerce pricing" (390/mo)
- **Secondary keywords:** "woocommerce price" (390), "is woocommerce free" (110), "woocommerce costs" (50), "woocommerce fee" (50)
- **Total addressable volume:** 990/mo
- **AI Overview status:** No. `ai_overview: false` on the primary, which means a well-structured answer can own the top of the page outright.
- **Angle:** WooCommerce markets itself as free and it is not, and the PAA proves people know it. Answer "Is WooCommerce 100% free?", "How much does WooCommerce cost per year?" and "What are the disadvantages of WooCommerce?" with an itemised annual £ bill: managed hosting, premium theme, the four or five plugins every real store needs, payment gateway percentages, a UK VAT and Making Tax Digital plugin, and developer hours for updates.
- **Incumbents:** woocommerce.com (twice), reddit.com, elementor.com, cloudways.com. The vendor owns two of the top five, so an independent number is the differentiator.
- **Why it isn't a duplicate:** Closest is `how-uk-smbs-evaluate-woocommerce-agency-2026`, which is about choosing a supplier, and `shopify-vs-woocommerce-us-small-business-2026`, which is a platform-choice comparison. Neither prices WooCommerce ownership.

### 2. The best ecommerce platform for a UK small business in 2026

- **Primary keyword:** "ecommerce best platform" (320/mo)
- **Secondary keywords:** "best platform ecommerce" (260), "best uk ecommerce platform" (140), "best seo ecommerce platform" (90), "best ecommerce platform for small business uk" (50)
- **Total addressable volume:** 860/mo
- **AI Overview status:** Not directly measured on the primary. The adjacent enriched keyword "website ecommerce template" fires an AI Overview; "woocommerce pricing" does not. Treat as uncertain.
- **Angle:** A genuinely UK-scoped platform comparison, which does not currently exist anywhere near the top of this SERP. Use the compliance and payments questions the ecommerce PAA keeps surfacing: "Do I need a license to sell online in the UK?", "Can I run a small business without registering in the UK?" and "How much does it cost to build an eCommerce website?". Score Shopify, WooCommerce, BigCommerce, Wix and Squarespace on the things that only matter here: UK payment rails, VAT handling and Making Tax Digital, Klarna and GoCardless support, Royal Mail and Evri integrations, and Companies House-level record keeping.
- **Incumbents:** Varies by variant; the enriched neighbours are dominated by shopify.com, wix.com, squareup.com, sumup.com, forbes.com and reddit.com. Vendor-heavy, so an independent scorecard wins.
- **Why it isn't a duplicate:** Closest are `shopify-vs-woocommerce-us-small-business-2026` (two-way, US market) and `bigcommerce-vs-shopify-2026-fee-change` (two-way, fee-specific). Neither is a UK five-way comparison and neither covers VAT or UK payment rails.

### 3. Twelve UK ecommerce store designs pulled apart, and why they convert

- **Primary keyword:** "shopify store examples" (260/mo)
- **Secondary keywords:** "top ecommerce website designs" (140), "best ecommerce design website" (140), "best ecommerce website layouts" (140), "ecommerce website examples" (110)
- **Total addressable volume:** 790/mo
- **AI Overview status:** Not directly measured on the primary. In the same cluster, "website ecommerce template" fires an AI Overview and "ecommerce website design template" does not.
- **Angle:** Teardowns, not a gallery. The template SERPs surface PAA like "What are the best templates for eCommerce websites?", "How much does it cost to build an eCommerce website?" and "Will AI replace e-commerce?", which is the opening to argue that layout choices, not themes, drive revenue. Each teardown names the pattern, the metric it moves and the rough effort to copy it.
- **Incumbents:** themes.shopify.com, themeforest.net, figma.com, dribbble.com, envato, framer.com. Entirely template marketplaces, so nobody is analysing anything.
- **Why it isn't a duplicate:** Closest is `reduce-cart-abandonment-ui-ux`, which is abstract UX principle with no examples. This is twelve named UK stores with screenshots and specifics.

---

## SEO

Blog-shaped volume: 93,020/mo, the largest of any line, but heavily pre-owned. Ten existing posts cover UK SEO agency listicles, UK small-business SEO agency selection, UK local SEO and the map pack, SEO cost, SEO audit cost, SEO timelines, WooCommerce SEO for UK stores and whether SEO is dead. About 27,000 of the volume is the "what is seo" definitional cluster and about 30,000 is agency listicles we already have. The genuinely open ground is tips and strategy, UK-denominated pricing, and DIY auditing.

### 1. What SEO actually costs in the UK, and what you get for the money

- **Primary keyword:** "seo marketing cost" (590/mo)
- **Secondary keywords:** "cost seo" (590), "seo optimization cost" (590), "seo uk cost" (260), "how much does seo cost uk" (50)
- **Total addressable volume:** 2,080/mo
- **AI Overview status:** Yes on all three 590-volume variants (`ai_overview: true`), and we rank on none of them.
- **Angle:** The PAA on this cluster is one long trust problem, so answer it head on: "Is it worth paying for SEO?", "How much does SEO cost in the UK?" and "Is paying someone to do SEO worth it?". Give real UK retainer bands in £, what each band buys in hours and deliverables, and the comparison that decides it for owner-managers: a monthly retainer against hiring in-house, costed from the £12.71 National Living Wage floor upward through a real loaded salary.
- **Incumbents:** polarisagency.com, tjcreative.co.uk, seocalc.com, whitehat-seo.co.uk, rubikdigital.co.uk, redcore.digital, targetedseo.co.uk. All small UK agencies, none of them with meaningful authority, which makes this the most winnable high-volume SERP in the line.
- **Why it isn't a duplicate:** Closest is `seo-cost-small-business-2026`, which is a market-agnostic small-business piece. This is UK-denominated, retainer-banded and built around the in-house versus agency decision. If they still read too similarly at draft stage, re-scope the existing post to US and make this the UK canonical.

### 2. The 80/20 of SEO: what to do first when you have ten hours a month

- **Primary keyword:** "tips seo" (1,900/mo)
- **Secondary keywords:** "seo tips" (1,000), "seo optimisation tips" (1,000), "seo optimization tips" (1,000), "strategy seo" (880)
- **Total addressable volume:** 5,780/mo
- **AI Overview status:** Yes on "tips seo", "seo tips" and "seo optimization tips" (all `ai_overview: true`). We rank on none.
- **Angle:** The 80/20 question is the most repeated PAA in the entire SEO dataset, appearing on nine of the twelve enriched SERPs. Build the post to own it directly: "What is the 80/20 rule in SEO?", "What are the top 5 SEO strategies?" and "Can I do SEO myself?". Prioritised, time-boxed actions for an owner with ten hours a month, not a 40-item checklist. Note the British spelling split, "seo optimisation tips" (1,000) and "seo optimization tips" (1,000) are separate keywords and both need to appear naturally.
- **Incumbents:** reddit.com, developers.google.com, mtu.edu, finnpartners.com, bynder.com. A university and a B2B software vendor in the top five means the SERP is not defended by SEO specialists.
- **Why it isn't a duplicate:** We have no SEO tips, strategy or fundamentals post at all. Closest by subject is `is-seo-dead-2026-ai-search-data`, which is a data-led argument piece, and `how-long-does-seo-take-2026-month-by-month-timeline`, which is about duration. Neither tells anyone what to do.

### 3. How to run your own SEO audit, with the free tools that actually work

- **Primary keyword:** "what is seo audit" (110/mo)
- **Secondary keywords:** "best seo audit tools" (90), "seo audit report template" (90), "audit seo checklist" (70), "how to do seo audit" (50)
- **Total addressable volume:** 410/mo
- **AI Overview status:** Not directly measured on the primary. Every enriched SEO keyword in this dataset fires an AI Overview, so assume yes.
- **Angle:** Small volume, honestly stated, but the highest lead value in the line because the natural CTA is our own AI Visibility Checker and a paid audit. Answer the audit PAA thread, "Can I do SEO myself?", "What is the best way to optimize SEO?" and "What are the top 5 SEO strategies?", as a step-by-step walkthrough with a downloadable report template. Free tools only, so the reader can finish it, then a clear line on what a human audit adds that a tool cannot.
- **Incumbents:** Not enriched for this exact keyword. The neighbouring SEO SERPs are held by developers.google.com, moz.com, searchengineland.com and reddit.com.
- **Why it isn't a duplicate:** Closest is `seo-audit-cost-2026`, which prices audits and never explains how to run one. This is the how-to and the gated template, and the two should link to each other.

---

## AI SEO / GEO

Blog-shaped volume: 6,210/mo, the weakest line in the dataset by a wide margin, and the one where we already have the most coverage relative to demand: ten posts against six thousand searches. Roughly half the line's volume is people trying to switch AI Overviews off. Real GEO commercial terms in the UK bottom out at 10 to 70 searches a month, and "generative engine optimization guide" is a 10/mo keyword we already have a post for. The three picks below are the best available, and I would rate this line's incremental value well below Digital Marketing or Marketplace.

### 1. The AI SEO tools worth paying for in 2026, and what each one actually does

- **Primary keyword:** "best ai seo tool" (140/mo)
- **Secondary keywords:** "best ai seo tools" (140), "best ai seo software" (50), "top ai seo tools" (20), "best free ai seo tools" (20)
- **Total addressable volume:** 370/mo
- **AI Overview status:** Yes on "best ai seo tool", "best ai seo tools" and "best ai seo software" (all `ai_overview: true`). We rank on none.
- **Angle:** The PAA on this cluster is unusually commercial for the line: "Which AI tool is best for SEO?", "Can AI do SEO optimization?" and "How much does AI SEO cost?". Categorise by job to be done rather than by brand, keyword clustering, brief generation, internal linking, schema, and technical crawling, with UK-relevant £ pricing and an honest note on which categories are still not worth automating.
- **Incumbents:** onelittleweb.com, whatagraph.com, freddiechatt.com, rankability.com, zapier.com. Affiliate roundups and one personal blog, so the bar is low.
- **Why it isn't a duplicate:** Closest is `best-geo-ai-visibility-tools-2026`, which covers *monitoring* tools that tell you whether ChatGPT and Perplexity cite you. This covers *execution* tools that help you produce and optimise pages. The scoping line must be explicit in both posts or they will drift into each other.

### 2. Can ChatGPT do your SEO? What AI genuinely handles and where it breaks

- **Primary keyword:** "ai seo strategy" (50/mo)
- **Secondary keywords:** "what is ai seo" (50), "what is ai seo called" (50), "how to do ai seo" (20), "how does ai seo work" (10)
- **Total addressable volume:** 180/mo
- **AI Overview status:** Yes (`ai_overview: true` on "ai seo strategy"). We do not rank.
- **Angle:** "Can ChatGPT do SEO?" is the single most persistent PAA across the whole UK dataset, appearing on SEO, AI SEO and web design SERPs alike. Build the post around it plus "Can you do SEO with AI?", "What is AI SEO called now?" and "How is AI changing SEO in 2026?". Take a position: name the tasks where AI is now clearly better than a junior, the tasks where it produces confident nonsense, and the review gate in between.
- **Incumbents:** salesforce.com, llmrefs.com, brightedge.com, siteimprove.com, wsiworld.com. Enterprise platforms writing for enterprise buyers, which leaves the SMB read wide open.
- **Why it isn't a duplicate:** Closest are `ai-seo-agency-uk-geo-aeo-organic-growth` (a service and agency-positioning page) and `generative-engine-optimization-guide` (about being cited by AI engines). This is about *using* AI inside an SEO workflow, which is the opposite direction and is not covered anywhere in the library.

### 3. Why Google's AI Overview keeps getting your business wrong, and how to turn it off

- **Primary keyword:** "how to disable ai overview google" (720/mo)
- **Secondary keywords:** "how to turn off google ai overview" (480), "how to remove ai overview from google" (480), "is ai overview accurate" (110), "why is google ai overview so bad" (40)
- **Total addressable volume:** 1,830/mo
- **AI Overview status:** Yes on all three of the enriched disable-variants (`ai_overview: true`), which is a pleasing irony worth using in the copy.
- **Angle:** Stated honestly, this is an awareness play, not a lead play. The searcher is a general Google user, not a buyer, and it is the only real volume left in this line. Serve the intent properly first, answering "Can I turn off AI Overview in Google?", "How can I hide Google AI Overviews from Chrome?" and "Why is Google forcing AI Overview?", then pivot in the second half to the business question nobody is answering: what to do when the AI Overview states something false about *your* company. Google Business Profile corrections, schema, cleaning up stale third-party sources, and the realistic timeline for a change to propagate. That second half is what earns the internal link into our GEO service pages.
- **Incumbents:** support.google.com, reddit.com, cnet.com, androidauthority.com, tenbluelinks.org, chromewebstore.google.com. Consumer tech press, none of whom cover the business-correction angle at all.
- **Why it isn't a duplicate:** Closest is `how-to-show-up-in-google-ai-overviews-small-business`, which is about getting *into* AI Overviews. This is about the opposite problem, being in one and being misrepresented, and about the mechanics of switching the feature off. No overlap in substance.

---

## AI Agents & Automation

Blog-shaped volume: 24,950/mo. This is our most-published line by far, with sixteen existing posts covering UK AI agents for SMBs, AI agents in business operations, building agents DIY versus agency, agentic AI definitions, agentic versus generative AI, chatbots versus agents, AI automation agencies, AI automation tools and three separate sales-automation angles. Duplication risk here is the highest of any line, so the three picks below all sit deliberately outside the covered ground.

**Deliberately passed over:** the "how to build an ai agent" cluster (roughly 1,630/mo across twelve variants). It is genuine volume, but `build-ai-agents-small-business-diy-vs-agency-2026` and `create-ai-agents-business-uk-smb-guide-2026` already own it and a third would cannibalise both.

### 1. Agentic AI in the wild: named systems and what each one is actually doing

- **Primary keyword:** "agentic ai examples" (390/mo)
- **Secondary keywords:** "ai agent examples" (320), "examples of agentic ai" (140), "what is agentic ai example" (110), "ai automation examples" (30)
- **Total addressable volume:** 990/mo
- **AI Overview status:** Yes on "agentic ai examples", "ai agent examples" and "examples of agentic ai" (all `ai_overview: true`). We rank on none of them.
- **Angle:** A catalogue of real, named systems rather than a list of use cases, which is the thing every incumbent on this SERP avoids. Answer "What are real examples of AI agents?", "Is Siri an example of agentic AI?" and "What is the most popular agentic AI?" by naming specific products and specific capabilities, with a UK SMB deployment for each where we have one. This is also the page shape our own citation research says gets picked up: high named-capability density and real system names, not superlatives.
- **Incumbents:** evidentlyai.com, mitsloan.mit.edu, slack.com, cloud.google.com, bcn.co.uk, domo.com, automationanywhere.com
- **Why it isn't a duplicate:** Closest are `what-is-agentic-ai` (definitional) and `ai-agents-business-operations-uk-smbs-2026` (function-by-function use cases). Neither names products. This is a directory of named systems, which is a different asset and a different search intent.

### 2. Is ChatGPT an AI agent? Sorting agents from chatbots from copilots

- **Primary keyword:** "is chatgpt an ai agent" (70/mo)
- **Secondary keywords:** "is chatgpt agentic ai" (70), "is copilot agentic ai" (50), "is claude agentic ai" (50), "is claude an ai agent" (40)
- **Total addressable volume:** 280/mo
- **AI Overview status:** Not directly measured on these exact keywords. Every enriched keyword in this line fires an AI Overview, so assume yes.
- **Angle:** Low direct volume, but "Is ChatGPT an AI agent?" or "Is ChatGPT an agentic AI?" appears as a People Also Ask question on six of the twelve enriched SERPs in this line, which makes it the highest-leverage PAA target in the dataset. Answer it plainly, alongside "Is Siri an example of agentic AI?" and "Is Alexa an example of agentic AI?", using one clear test the reader can apply to any tool a vendor is selling them: does it take actions with consequences, and who authorised them.
- **Incumbents:** Not enriched for these long-tails. The parent SERPs are held by ibm.com, reddit.com, mckinsey.com, cloud.google.com and gov.uk.
- **Why it isn't a duplicate:** Closest are `agentic-ai-vs-ai-agents` and `ai-chatbots-vs-ai-agents-business`, both of which compare *categories*. This one adjudicates *named products*, which is the question people actually type, and neither existing post title-targets it.

### 3. AI chatbots for UK businesses: what to deploy and what it costs per month

- **Primary keyword:** "ai chatbot best" (1,900/mo)
- **Secondary keywords:** "what is ai chatbot" (480), "ai chatbot examples" (90), "ai chatbot pricing" (30), "ai chatbot price" (30)
- **Total addressable volume:** 2,530/mo
- **AI Overview status:** Yes on "ai chatbot best", "ai chatbot pricing" and "ai chatbot price" (all `ai_overview: true`).
- **Angle:** The headline keyword carries consumer contamination, so the post has to earn the business read fast. The pricing PAA is entirely buyer-shaped and nobody serves it well: "How much does AI cost in the UK?", "How much is chatbot AI per month?" and "Are AI agents expensive?". Give real monthly £ ranges by tier, per-conversation versus per-seat pricing, the hidden integration cost, and a straight answer on when a chatbot is the wrong tool and an agent is the right one.
- **Incumbents:** uk.pcmag.com, zapier.com, knock-ai.com, chatbot.com, artificialanalysis.ai for the roundup; chatbot.com, chatbotapp.ai, tidio.com, masterofcode.com and reddit.com for pricing.
- **Why it isn't a duplicate:** Closest is `ai-chatbots-vs-ai-agents-business`, which defines the difference between the two categories. This is a buy-side evaluation with UK pricing, which that post does not attempt. Strip any pricing that appears in the older post if there is overlap.

---

## Digital Marketing

Blog-shaped volume: 60,270/mo, and only two existing posts, both written for the India market (`digital-marketing-for-small-business-india`, `how-to-choose-digital-marketing-agency-india-2026`). This is the single best opportunity in the UK dataset: real volume, buyer-shaped intent, AI Overviews firing on nearly every enriched keyword, and effectively zero existing coverage to duplicate. All three picks are clean.

### 1. What Google Ads really costs in the UK in 2026

- **Primary keyword:** "google ads pricing" (1,000/mo)
- **Secondary keywords:** "google ads fees" (1,000), "google ads cost" (1,000), "google ads cost uk" (90), "is there vat on google ads" (90)
- **Total addressable volume:** 3,180/mo
- **AI Overview status:** Yes on "google ads fees", "google ads pricing" and "google ads price" (all `ai_overview: true`). We rank on none.
- **Angle:** The whole PAA thread is a UK buyer trying to size a budget: "How much do Google Ads cost in the UK?", "Is $20 a day good for Google Ads?" and "Is Google Ads worth it in the UK?". Answer in £ rather than $, which no incumbent does, with real UK CPC ranges by sector, minimum viable monthly spend, and management fee structures. The unmissable UK hook is "is there vat on google ads" (90/mo): Google bills UK advertisers from Ireland, so the VAT reverse charge applies and almost nobody explains it properly.
- **Incumbents:** business.google.com, support.google.com, shopline.com, candiddigital.co.uk, wordstream.com, whitehat-seo.co.uk. Google itself holds two of five, so the winning move is the honest independent number Google will not publish.
- **Why it isn't a duplicate:** We have no Google Ads or paid media post of any kind. Nothing in the 114 slugs comes close.

### 2. The top digital marketing agencies in the UK for small businesses

- **Primary keyword:** "top digital marketing agency" (880/mo)
- **Secondary keywords:** "top digital marketing company" (880), "top digital marketing companies" (880), "best digital marketing agencies" (880), "best digital marketing companies" (880)
- **Total addressable volume:** 4,400/mo
- **AI Overview status:** Mixed. "top digital marketing agency" and "top digital marketing company" fire (`ai_overview: true`), "top digital marketing companies" does not.
- **Angle:** A UK-scoped, criteria-led listicle rather than a directory dump. The PAA is asking for exactly that: "What are the top 10 digital marketing agencies in the UK?", "Which agency is best for digital marketing?" and "Who are the big 4 in marketing?". Score each firm on the things an SMB actually needs, minimum retainer in £, whether they take clients under a certain size, channel specialism and reporting cadence, and separate the enterprise networks from the firms that will genuinely take a £2k month.
- **Incumbents:** clutch.co, gartner.com, builtinlondon.uk, atomicdigitalmarketing.co.uk, iconicdigital.co.uk, agencies.semrush.com. Two directories and an analyst firm, which is beatable with real editorial.
- **Why it isn't a duplicate:** Closest is `how-to-choose-digital-marketing-agency-india-2026`, which is India-market and is a selection framework rather than a named list. Our UK listicle pattern already exists for SEO (`best-seo-agencies-uk`) and web design (`best-web-design-agencies-uk-smbs-2026`) but not for digital marketing, which is the obvious hole.

### 3. A digital marketing strategy that fits a UK small business budget

- **Primary keyword:** "strategy digital marketing" (1,300/mo)
- **Secondary keywords:** "digital marketing marketing strategy" (1,300), "digital marketing examples" (390), "digital marketing strategy small business" (260), "digital marketing strategy services" (210)
- **Total addressable volume:** 3,460/mo
- **AI Overview status:** Yes on "strategy digital marketing", "digital marketing marketing strategy" and "digital marketing examples" (all `ai_overview: true`).
- **Angle:** The PAA is full of framework questions the incumbents answer abstractly: "What are the 5 main strategies of digital marketing?", "What is the 70/20/10 rule in digital marketing?" and "What are the 7 pillars of digital marketing?". Answer each one properly, then do the thing nobody does and allocate a real monthly budget across channels at three UK spend levels, with expected cost per lead for each. Ties directly into pick 1 and gives the paid-versus-organic decision a number.
- **Incumbents:** business.gov.uk, adobe, smartinsights.com, digitalmarketinginstitute.com, londonsba.org.uk, snhu.edu. Note that two of the top five are UK government-adjacent or nonprofit resources with generic advice, which is a soft SERP for a specific, costed answer.
- **Why it isn't a duplicate:** Closest is `digital-marketing-for-small-business-india`, which is the India market in ₹ with a different channel mix (WhatsApp, JustDial, regional platforms). Nothing UK exists.

---

## Marketplace (Amazon/Walmart/TikTok)

Blog-shaped volume: 68,300/mo, the second-largest line, served by only three posts, none of which is UK-specific. Two honest caveats before the picks. First, Walmart has zero UK demand, there is not a single Walmart keyword in the UK candidate set, so `how-to-sell-on-walmart-marketplace-2026` should stay a US asset. Second, a good share of this line's volume is solo sellers and side hustlers rather than the SMB brands we normally sell to, and a meaningful slice is shoppers rather than sellers ("is tiktok shop safe" 1,600, "best seller product amazon" 1,900, the entire Amazon best-seller browsing cluster). The picks below select for seller intent specifically.

**Deliberately passed over:** "how to sell on amazon uk" (1,300) + "how can i sell on amazon uk" (1,300) + "how sell on amazon uk" (1,000) = 3,600/mo. Biggest UK-specific cluster in the line, but the correct action is to localise the existing `how-to-sell-on-amazon-2026` into a UK sibling with VAT, Companies House and Royal Mail specifics, not to brief it as a new topic.

### 1. Amazon UK seller fees in 2026, and what is actually left after them

- **Primary keyword:** "sell on amazon fees" (390/mo)
- **Secondary keywords:** "sell on amazon fees uk" (260), "amazon uk seller fees" (260), "cost to sell on amazon uk" (260), "how much does it cost to sell on amazon" (210)
- **Total addressable volume:** 1,380/mo
- **AI Overview status:** Yes on "sell on amazon fees", "sell on amazon pricing" and "sell on amazon price" (all `ai_overview: true`). We rank on none.
- **Angle:** The PAA is one long margin anxiety: "Is selling on Amazon worth it in the UK?", "How much does it cost to sell on Amazon UK?" and "What are the disadvantages of selling on Amazon?". Build a worked example that follows a £30 product all the way down: £25/month Professional plan excluding VAT, category referral fee, FBA UK fulfilment and storage, the Digital Services Fee, returns, and VAT once you cross the registration threshold. Finish with the contribution margin that is actually left, which is the number nobody publishes.
- **Incumbents:** sell.amazon.co.uk, sellercentral.amazon.co.uk, sellercentral.amazon.com, reddit.com, osome.com. Amazon owns three of the top five, so an independent worked example is the entire differentiator.
- **Why it isn't a duplicate:** Closest is `how-to-sell-on-amazon-2026`, which is a setup how-to. This is UK fee mechanics and margin maths, which that post does not attempt, and it should be the page the how-to links to on the money question.

### 2. What actually sells on Amazon UK, and how to pick a category you can win

- **Primary keyword:** "best products sell on amazon" (590/mo)
- **Secondary keywords:** "best sell product on amazon" (590), "best products to sell on amazon" (210), "best things to sell on amazon" (210), "top items to sell on amazon" (170)
- **Total addressable volume:** 1,770/mo
- **AI Overview status:** Mixed across the cluster. "best amazon seller" and "top seller on amazon" fire (`ai_overview: true`), "best seller product amazon" does not. Not directly measured on the primary.
- **Angle:** Everyone publishes a trending-products list; nobody publishes a selection method. Answer "What sells fastest on Amazon?", "Can I make £1000 a month selling on Amazon?" (the PAA text is dollar-denominated, so convert it in the copy) and "What is the most profitable item to sell on Amazon?" by teaching category selection: referral fee percentage by category, weight and dimension bands that wreck FBA economics, review-count barriers to entry, and UK-specific seasonality. Honest note, part of the parent cluster's volume is shoppers browsing best-seller lists, so expect the seller share of traffic to be lower than the headline figure.
- **Incumbents:** amazon.co.uk, marketplacepulse.com, helium10.com, amzscout.net, sellerassistant.app, reddit.com. Tool vendors selling product-research software, so an independent method piece reads differently.
- **Why it isn't a duplicate:** Nothing in the library covers product or category selection on any marketplace. `how-to-sell-on-amazon-2026` covers account setup and listing mechanics only.

### 3. TikTok Shop economics for UK brands: the fees, the margins and whether it is worth it

- **Primary keyword:** "why is tiktok shop so cheap" (260/mo)
- **Secondary keywords:** "tiktok shop fees" (210), "tiktok shop fee" (210), "tiktok shop statistics" (40), "tiktok shop stats" (40)
- **Total addressable volume:** 760/mo
- **AI Overview status:** Yes on "tiktok shop statistics" and "tiktok shop stats" (both `ai_overview: true`). Not directly measured on the primary.
- **Angle:** "Why is TikTok Shop so cheap" is the most useful question in this cluster because the honest answer is a lesson in platform economics: commission structure, platform-funded discounts, creator affiliate rates and who absorbs each one. Pair it with the PAA from the stats SERPs, "What percentage does the TikTok Shop take?", "What are the sales stats for TikTok Shops in the UK?" and "What sells really well on TikTok Shop?", and produce the margin model a UK brand needs before it commits to price-matching the platform.
- **Incumbents:** statista.com, newsroom.tiktok.com, rootdigital.co.uk, aftership.com, forbes.com, redstagfulfillment.com, sproutsocial.com. Statistics aggregators and the platform's own newsroom, so nobody is modelling seller margin.
- **Why it isn't a duplicate:** Closest is `how-to-sell-on-tiktok-shop-2026`, which is a setup and launch guide. This is the commercial case and the fee model, aimed at a brand deciding whether to be on the platform at all rather than at someone who has already decided.
