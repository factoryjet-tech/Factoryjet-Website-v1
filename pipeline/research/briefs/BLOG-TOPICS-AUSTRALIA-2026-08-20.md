# Australia Blog Topics, 2026-08-20

Source data: `pipeline/research/data/market-briefs/australia.json` (7 service lines, 120 deduped blog-shaped candidates each, 12 live-SERP samples each).
Existing published posts checked against: 114 slugs, of which 3 are already Australia-targeted (`best-ecommerce-agency-small-business-australia-2026`, `best-web-design-companies-small-business-australia`, `best-wordpress-development-companies-australia-2026`).

---

## Market reality

**Blog-shaped monthly volume per service line, as reported:**

| Service line | Reported volume | Honest volume | What the gap is |
|---|---|---|---|
| SEO | 1,042,930 | 37,870 + one 201,000 tools cluster | see below |
| Web Design & Development | 28,530 | ~23,000 | 5,500 is the BOM news story |
| Digital Marketing | 24,100 | ~22,500 | 1,320 is people blocking ads, 240 is AdSense money-making |
| AI Agents & Automation | 11,440 | ~10,800 | 650 is roleplay/unfiltered chatbot hunting |
| Marketplace (Amazon/TikTok) | 10,480 | ~7,000 | ~1,770 is product shopping, ~640 is "how do I contact a seller" |
| Ecommerce Development | 9,080 | ~6,850 | 2,230 is people looking for cheap clothes |
| AI SEO / GEO | 3,310 | ~1,400 | 1,840 is people trying to switch AI Overviews off |

**The SEO tools distortion, stated plainly.** The SEO line reports 1,042,930/mo. Of that, 1,005,060 comes from five keywords that are all the same cluster returning the identical 201,000 figure: `seo tools best`, `best seo marketing tools`, `best tool seo`, `best seo optimization tools`, `best seo optimization tool`. That is **one cluster worth about 201,000/mo, not five worth a million**. Anyone who adds those five columns together is inflating the market by roughly 800,000 searches that do not exist. Strip it out and real AU SEO service demand is **37,870/mo**, which is a normal, modest number. The tools cluster is also the wrong audience: it is a marketer shopping for Semrush or Ahrefs, not a business owner shopping for an agency. Top 5 is Reddit, marketermilk, morningscore, technologyadvice and Zapier, all affiliate-revenue content with far more authority than us.

The same duplicate-cluster effect is everywhere in this dataset at smaller scale (nine web design cost variants all reporting 390, five Sydney SEO agency variants all reporting 720, nine Google Ads cost variants all reporting 720). Every total below **collapses those clusters and counts each one once.** Where a cluster is collapsed I say so.

**Two more rejections worth knowing about.** The `what is seo` cluster (2,400/mo across six variants, again one cluster) reads as a student and career audience in its PAA set ("How do I learn SEO as a beginner?", "Is SEO difficult to learn?") and the top 5 is Google Developers, Wikipedia and a university. Not a buyer. And the `bom website cost` cluster (5,500/mo across seven variants) is the Bureau of Meteorology website redesign controversy, which is news intent owned by ABC, the Guardian and news.com.au. It is genuinely Australian and genuinely large, but it does not want to hire an agency.

**Is AU blogging worth the effort with only one landing page?** Mostly no, not yet, and here is the number that settles it. Across 84 live Australian SERPs sampled in this dataset, `we_rank` is **false on all 84**. We have no foothold anywhere in this market, on any term, in any service line. AI Overviews fire on 74 of those 84 SERPs (88%), and on 12 of 12 in three lines (AI SEO, AI Agents, Marketplace), so a large share of the clicks are being answered above the blue links before anyone scrolls.

What that means in practice: a blog post is a top-of-funnel asset that has to hand the reader somewhere to go. Right now the only Australian place to send them is `/au`, the homepage. If we publish 21 posts into that, we build an audience we cannot convert, and we spend the internal linking equity on a page that is not a service page. The three AU posts already live are a reasonable test bed. The honest sequencing is **landing pages first, then blogs that feed them**, with two exceptions where the blog is the asset in its own right (the TikTok Shop status piece and the Google Ads cost piece, both of which are genuine unmet questions in Australia with weak incumbents).

**Landing pages we need first, in this order:**

1. **`/au/seo`** and **`/au/sydney/seo`**. This is the single most valuable cluster in the whole Australian dataset: `best seo companies sydney` at 720/mo and **$102.72 CPC**, `best seo company` at 1,000/mo, `best seo company australia` at 390/mo and $65.79 CPC, plus 980/mo of SEO cost queries at $15 to $19. Incumbents are mid-size AU agencies (studiohawk.com.au, prosperitymedia.com.au, safaridigital.com.au, bring.au), not enterprise publishers.
2. **`/au/digital-marketing`** (or a dedicated `/au/google-ads`). 1,190/mo of Google Ads cost intent at $17 to $23 CPC, plus 790/mo of agency-shopping terms. AIO does not fire on `best digital marketing agency` or `top digital marketing companies`, so blue links still matter there.
3. **`/au/web-design`** plus city pages for **Perth, Melbourne, Brisbane, Sydney and Adelaide**. 890/mo of cost intent and 790/mo of "affordable web design {city}" at $17 to $35 CPC. These are hire-me queries that a blog post wastes.
4. **`/au/ecommerce-development`**. About 1,500/mo across the store-build, platform-choice and Shopify-vs-Woo clusters.
5. **`/au/ai-agents`**. Thin on volume (about 220/mo) but `what is ai automation` carries a $60.32 CPC and there is no Australian incumbent at all. Cheap to build, worth owning early.

**Not yet:** an `/au/ai-seo` page. Real Australian GEO and AI SEO demand is about 120 to 630/mo depending how generously you count, and most of the AI SEO line is people trying to turn AI Overviews off. Revisit in two quarters.

---

## Web Design & Development

Line total 28,530/mo reported. Strip the BOM news cluster (5,500) and the template and inspiration clusters (3,430, which want Figma and Canva, not an agency) and real hire-an-agency demand is roughly 8,700/mo, concentrated in cost and in "affordable {city}".

### 1. What a website actually costs in Australia in 2026

- **Primary keyword:** `web design cost` (390/mo, $9.76 CPC, KD 0)
- **Secondary keywords:** `how much do website cost` (210), `website design melbourne cost` (110), `web design cost australia` (90), `web design prices australia` (90)
- **Total addressable volume:** 890/mo (collapses eight further variants reporting the same 390: `price web design`, `web design fees`, `pricing web design`, `web page design cost`, `web page design price`, `website cost design`, `website designing cost`)
- **AI Overview:** yes, fires on both `price web design` and `how much do website cost`
- **Angle:** Real AUD bands by site type, with what changes the number, written against the two questions Australians actually ask. Must answer "How much does a website cost in Australia?", "What is the average cost of a 5 page website?" and "How much should I pay someone to build a website for me?". Australian specifics that no US price guide covers: GST on the invoice, .com.au registration and the auDA eligibility rule that you need an ABN, and whether the quote includes hosting.
- **Incumbents:** reddit.com, wolfiq.com.au, wpcreative.com.au, godaddy.com, forbes.com on the question form; godaddy.com, digitalnomadshq.com.au, sparkinteract.com.au, clickk.com.au, webfx.com on `price web design`
- **Verdict:** **WORTH IT.** Highest-intent web cluster in the market, incumbents are small AU agencies we can out-detail, and it is the natural feeder for `/au/web-design`.

### 2. Cheap web design in Perth, Brisbane and Melbourne: what you actually get for the money

- **Primary keyword:** `affordable web design perth` (210/mo, $17.87 CPC)
- **Secondary keywords:** `affordable web design melbourne` (210), `cheap web design brisbane` (170), `affordable web design small business` (110, $34.63 CPC), `affordable web design sydney` (90)
- **Total addressable volume:** 790/mo (a further 390/mo sits in near-identical variants: `cheap web design perth` 210, `cheap web design sydney` 90, `affordable web design adelaide` 90)
- **AI Overview:** not in the SERP-enriched subset for these terms. AIO fires on 9 of 12 enriched web design SERPs, so assume yes on the question-shaped variants and unknown here.
- **Angle:** A straight teardown of what a $1,500 site leaves out versus a $6,000 one, city by city, because the cheap-{city} searcher is price-anchoring not bargain-hunting. Grounded in the cost PAA set: "How much should it cost to have a website?", "What is the average cost of a 5 page website?" and "How much should I pay someone to build a website for me?".
- **Incumbents:** not sampled for these city terms. On the sibling cost terms the top 5 is a mix of Reddit and small AU studios (wolfiq.com.au, wpcreative.com.au, sparkinteract.com.au, clickk.com.au).
- **Verdict:** **SKIP UNLESS PAIRED WITH A LANDING PAGE.** At $17 to $35 CPC these are hire-me queries, not research queries. Sending them to a blog post wastes them. Build `/au/perth/web-design`, `/au/melbourne/web-design` and `/au/brisbane/web-design` first, then run this post as the top-of-funnel feeder.

### 3. The Bureau of Meteorology website and what big website budgets really buy

- **Primary keyword:** `bom website cost` (2,900/mo, KD 5)
- **Secondary keywords:** `bureau of meteorology website cost` (1,600), `bom website redesign cost` (390), `new bom website cost` (210), `how much did the bom website cost` (170)
- **Total addressable volume:** 5,270/mo as reported. Treat the real figure as roughly 2,900 to 3,000, since these are clearly one clustered query.
- **AI Overview:** yes, on both `bom website cost` and `bureau of meteorology website cost`
- **Angle:** The only genuinely Australian, genuinely large search story in this dataset. A build-cost teardown that explains where the money in a government-scale redesign actually goes, then contrasts it with what an SMB budget buys. It answers "Why is the BOM website so expensive?", "Who developed the BOM website?" and "What was the controversy surrounding the Bureau of Meteorology website?".
- **Incumbents:** abc.net.au, reddit.com, bom.gov.au, facebook.com, theguardian.com; news.com.au leads the `bureau of meteorology` variant
- **Verdict:** **THIN.** It will not produce a single lead. It is news intent against national broadcasters. The only reason to consider it is as a link and citation asset, since it is the one AU topic where an agency has genuine standing to comment and the newsrooms have no build-cost expertise. Treat it as PR, not pipeline.

---

## Ecommerce Development

Line total 9,080/mo reported, but 2,230 of that is people shopping for cheap clothes (`cheap online store australia` 480, `best australian online store` 480, `best online store australia` 480, `online store cheap` 320, `cheap online store` 260, `cheap as chips online store` 210). Top 5 on those is Boohoo, The Iconic, Princess Polly and Ozsale. Rejected. Real merchant-side demand is about 6,850/mo.

### 1. How to start an online store in Australia without getting the setup wrong

- **Primary keyword:** `how start online store` (170/mo, $8.46 CPC)
- **Secondary keywords:** `how create online store` (170, $14.45), `how to create shopify store` (140), `how to start shopify store` (70)
- **Total addressable volume:** 550/mo (collapses `how to open online store`, `how to begin an online store`, `how can i start online store`, `how to make an online store`, `how can i make an online store`, all reporting the same 170; and `how to build shopify store`, `how to make shopify store`, `how to set up shopify store`, all at 140)
- **AI Overview:** yes on both `how start online store` and `how create online store`
- **Angle:** The Australian-specific setup steps that every global guide skips, hung on the PAA questions "How much does it cost to start an online store?", "Can I start an online store for free?" and "How to start an online shop from home?". That means ABN before anything else, the $75,000 turnover threshold where GST registration becomes compulsory, Australia Post parcel rates and why they wreck free-shipping maths, and offering Afterpay or Zip at checkout.
- **Incumbents:** squareup.com, forbes.com, reddit.com, youtube.com, sell.amazon.com.au; the `how create` variant adds wix.com, godaddy.com and salesforce.com
- **Verdict:** **WORTH IT**, with a caveat. We already have `how-to-build-online-store-uk-smb-guide-2026`. This only earns its place if the ABN, GST, Australia Post and BNPL content is genuinely written for Australia rather than swapped currency symbols.

### 2. Shopify or WooCommerce for an Australian store

- **Primary keyword:** `woocommerce vs shopify` (170/mo, KD 0)
- **Secondary keywords:** `woocommerce price` (210), `shopify vs woocommerce` (90), `shopify versus woocommerce` (70)
- **Total addressable volume:** 540/mo (`woocommerce pricing` 210 is the same cluster as `woocommerce price`)
- **AI Overview:** yes on `woocommerce vs shopify`
- **Angle:** The cost comparison in AUD including the bits people miss, aimed at "Which is better, WooCommerce or Shopify?", "What are the disadvantages of WooCommerce?" and "How much does Shopify take from a $100 sale?". Australian hooks: GST treatment of the Shopify subscription, Shopify Payments AU transaction rates versus an Australian gateway, Afterpay and Zip support on each, and Australian hosting for WooCommerce (VentraIP already ranks in the top 5 here, which tells you the audience is thinking about AU hosting).
- **Incumbents:** reddit.com, ventraip.com.au, montonio.com, websitebuilderexpert.com, woocommerce.com
- **Verdict:** **WORTH IT**, with the same caveat as above. We already run `shopify-vs-woocommerce-india-comparison` and `shopify-vs-woocommerce-us-small-business-2026`. A third sibling is only defensible if the AUD fee maths and BNPL section carry it. Otherwise it cannibalises.

### 3. The best ecommerce platform for an Australian small business

- **Primary keyword:** `best ecommerce platform` (140/mo, $21.98 CPC)
- **Secondary keywords:** `best platform for ecommerce` (110), `best ecommerce platform australia` (70, KD 0), `best australian ecommerce platform` (70, $48.83 CPC), `which ecommerce platform is best for seo` (20)
- **Total addressable volume:** 410/mo
- **AI Overview:** not in the SERP-enriched subset. AIO fires on 8 of 12 enriched ecommerce SERPs, and the four misses are all template-shopping queries, so a comparison term like this most likely triggers it.
- **Angle:** Platform selection judged on Australian constraints rather than feature tables, answering the PAA thread that runs through this cluster: "What are the top 5 ecommerce platforms?", "Is Shopify still worth it in 2026?" and "How much does Shopify take from a $100 sale?". The Australian filter is BNPL support, Australia Post and Sendle integrations, GST-compliant tax invoices, and whether the platform can handle AU and NZ pricing.
- **Incumbents:** not sampled for these terms.
- **Verdict:** **SKIP UNLESS PAIRED WITH A LANDING PAGE.** 410/mo of genuine buying-committee research at up to $48.83 CPC is worth having, but it needs `/au/ecommerce-development` underneath it or the reader has nowhere to convert.

---

## SEO

Line total 1,042,930/mo reported. After collapsing the tools cluster: 201,000/mo of software shopping plus **37,870/mo of actual SEO service demand.** That 37,870 is the number to plan against.

### 1. The best SEO agencies in Australia (and how to pick one in Sydney or Melbourne)

- **Primary keyword:** `best seo company` (1,000/mo, $18.40 CPC)
- **Secondary keywords:** `best seo companies sydney` (720, **$102.72 CPC**), `best seo company australia` (390, $65.79), `best local seo services` (70)
- **Total addressable volume:** 2,110/mo. This collapses a lot: `best seo agency`, `best seo agencies`, `best seo optimization company`, `best seo providers` and `seo top companies` all report the same 1,000; `best seo agency sydney`, `best seo agencies sydney`, `best seo services sydney` and `best seo company sydney` all report the same 720; `best seo agencies australia` and `best seo services australia` share the 390.
- **AI Overview:** not in the SERP-enriched subset for these terms. AIO fires on 11 of 12 enriched SEO SERPs, so expect it.
- **Angle:** The listicle format we have already proven in the UK and US, cut for Australia and for Sydney specifically. The PAA set across the AU SEO SERPs keeps circling the same buyer anxieties: "Is paying someone to do SEO worth it?", "Can I do SEO myself?" and "Is SEO dead now with AI?". Answer all three inside the piece, with real retainer bands in AUD and named agencies.
- **Incumbents:** not sampled for these exact terms. Adjacent AU SEO SERPs are held by studiohawk.com.au, prosperitymedia.com.au, safaridigital.com.au, bring.au, paramark.com.au, wakeforddigital.com.au and spicyweb.com.au, all mid-size AU agencies rather than national publishers.
- **Verdict:** **WORTH IT.** Highest commercial value in the entire Australian dataset at $65 to $103 CPC, and it is a format we have shipped four times already. Pair it with `/au/seo` and `/au/sydney/seo`.

### 2. What SEO costs in Australia, in real retainer numbers

- **Primary keyword:** `seo cost` (390/mo, $18.72 CPC, KD 4)
- **Secondary keywords:** `seo cost australia` (210, KD 0), `seo packages cost` (170), `seo services cost` (140), `how much does seo cost in australia` (70)
- **Total addressable volume:** 980/mo (collapses `seo price`, `seo prices`, `seo rates`, `seo fee`, `seo fees`, `pricing seo`, `seo costs`, `seo marketing cost`, `seo optimization cost`, all reporting the same 390)
- **AI Overview:** yes, on `seo cost`, `seo price` and `seo marketing costs`
- **Angle:** Monthly retainer bands in AUD by business size and competitiveness, with what each band actually buys. Ground it in the three questions that appear on every AU SEO cost SERP: "How much does SEO cost in Australia?", "Is paying someone for SEO worth it?" and "Is SEO dead now with AI?". The last one is not a throwaway, it appears on four separate SERPs in this line and deserves a real answer.
- **Incumbents:** studiohawk.com.au, bring.au, prosperitymedia.com.au, paramark.com.au, wakeforddigital.com.au on `seo cost`; safaridigital.com.au, seocalc.com, marketing.link.com.au, spicyweb.com.au on `seo price`
- **Verdict:** **WORTH IT.** We already run `seo-cost-small-business-2026`, so this must be the AUD version with Australian retainer reality, not a rewrite. Every top-5 result is an Australian agency, which means the SERP wants a local answer and we can give one.

### 3. The SEO tools Australian marketers actually pay for

- **Primary keyword:** `seo tools best` (201,000/mo, $38.96 CPC, KD 37)
- **Secondary keywords:** `best ai seo tools` (30), `best seo audit tools` (20), `best seo tool for keyword ranking reports` (20)
- **Total addressable volume:** roughly 201,070/mo. **Not 1,005,060.** `best seo marketing tools`, `best tool seo`, `best seo optimization tools` and `best seo optimization tool` all return the identical 201,000 and are the same cluster.
- **AI Overview:** yes, on all three sampled variants
- **Angle:** If we build it, build it as an AI citation asset, not a lead asset, and give it an Australian cut nobody else has: pricing in AUD after the FX and GST hit, and which tools have usable AU support hours. PAA to answer: "What are the top 5 SEO tools?", "What is the most accurate SEO tool?" and "Can ChatGPT do SEO?".
- **Incumbents:** reddit.com, marketermilk.com, morningscore.io, technologyadvice.com, zapier.com, semrush.com, rankability.com
- **Verdict:** **THIN.** The volume is real but it is one cluster, the intent is DIY software shopping rather than agency hiring, and the incumbents are affiliate operations with far more authority than us. Only worth doing as a deliberate GEO and citation play, and only with the AUD and AU-support angle. Do not count on it for a single lead.

---

## AI SEO / GEO

Line total 3,310/mo, and 1,840 of that is people trying to switch AI Overviews off or asking meme questions about them ("how many rocks should i eat per day ai overview", 40/mo, genuinely in the data). Real commercial GEO and AI SEO demand in Australia is about 630/mo across the `ai seo` and `generative engine optimization` families, and almost every one of those keywords sits at 10/mo. **AI Overviews fire on 12 of 12 sampled SERPs in this line.** This is the thinnest line in the market and we already own a large global GEO library (`generative-engine-optimization-guide`, `aio-artificial-intelligence-optimization-guide`, `is-geo-replacing-seo-2026`, `best-geo-agencies`, `how-to-show-up-in-google-ai-overviews-small-business`), so near-duplication risk here is severe.

### 1. How to turn off Google AI Overviews, and what it means that so many Australians want to

- **Primary keyword:** `how to disable ai overview` (390/mo, KD 24)
- **Secondary keywords:** `how to turn off google ai overview` (320), `can i turn off ai overview on google` (210), `how to disable ai overview google` (90), `how to turn off ai overview on google` (70)
- **Total addressable volume:** 1,080/mo
- **AI Overview:** yes, on all three sampled variants
- **Angle:** Give the honest how-to first (the `&udm=14` trick, browser extensions, what Google does and does not let you switch off), then pivot to the business read: if this many people are actively hiding AI answers, what does that do to your traffic model. Answers "Can I turn off AI Overview?", "Why is Google forcing AI Overview?" and "Is there an extension to hide Google AI Overviews?".
- **Incumbents:** support.google.com, reddit.com, cnet.com, au.pcmag.com, tenbluelinks.org
- **Verdict:** **THIN.** It is the only real volume in this line, but the searcher is an annoyed consumer, position one is Google's own support page and will stay there, and the topic is slightly off-message for an agency selling AI search visibility. Traffic, not pipeline.

### 2. When Google's AI Overview gets your business wrong

- **Primary keyword:** `is ai overview accurate` (110/mo, KD 31)
- **Secondary keywords:** `is google ai overview accurate` (20), `is ai overview reliable` (20), `is ai overview good` (20), `why is google ai overview so inaccurate` (10)
- **Total addressable volume:** 180/mo
- **AI Overview:** not in the SERP-enriched subset for these exact terms, but AIO fires on 12 of 12 sampled SERPs in this line, so treat it as near-certain.
- **Angle:** This is the best bridge in the line from consumer curiosity to a service conversation. Start from accuracy (the failure modes, why they happen), then move to the part that matters commercially: what to do when an AI answer describes your business with the wrong prices, wrong service area or a competitor's claim, and how entity data, schema and consistent citations fix it. Draws on "Is Google AI Overview accurate?", "Does AI Overview tell the truth?" and "Is AI Overview a reliable source?".
- **Incumbents:** not sampled. Adjacent AI Overview SERPs in this line are held by support.google.com, reddit.com, cnet.com and au.pcmag.com.
- **Verdict:** **THIN**, but build this one first out of the three. The volume is small and the money is not here yet, but it is the only piece in the line that ends in a service conversation instead of a browser setting.

### 3. Can ChatGPT do your SEO?

- **Primary keyword:** `what is ai seo` (50/mo, $9.29 CPC)
- **Secondary keywords:** `ai seo strategy` (40), `seo vs ai search` (10, $14.32), `does ai seo work` (10), `chatgpt seo strategy` (10)
- **Total addressable volume:** 120/mo
- **AI Overview:** yes, on `ai seo strategy`, and on `best ai seo tools` and `generative engine optimization examples` in the same family
- **Angle:** The keyword volume is negligible, but **"Can ChatGPT do SEO?" appears as a PAA on 13 of the 84 sampled Australian SERPs across the SEO and AI SEO lines**, which is the single strongest recurring question signal in the whole dataset. Write the direct answer to it, plus "What is AI SEO called now?", "How is AI changing SEO in 2026?" and "Can AI do SEO optimization?". This is an AI Overview capture play, not a ranking play.
- **Incumbents:** salesforce.com, llmrefs.com, researchfdi.com, digitalmarketinginstitute.com, wsiworld.com
- **Verdict:** **THIN.** Real PAA ubiquity, almost no direct volume, and heavy overlap with our existing global GEO library. Worth writing once as a short, direct answer block, ideally folded into an existing page rather than shipped as a standalone AU post.

---

## AI Agents & Automation

Line total 11,440/mo. About 650 of that is roleplay and unfiltered chatbot hunting, which is not our buyer. The explainer clusters (`what is agentic ai` 2,400, `what is an ai agent` 1,300) are large but we have already published `what-is-agentic-ai`, `agentic-ai-vs-generative-ai`, `agentic-ai-vs-ai-agents` and `ai-chatbots-vs-ai-agents-business`, so those heads are closed to us without cannibalising. **AIO fires on 12 of 12 sampled SERPs in this line.**

### 1. AI agents at work: what Australian businesses are actually using them for

- **Primary keyword:** `agentic ai examples` (170/mo, $10.47 CPC)
- **Secondary keywords:** `ai agent examples` (140), `examples of agentic ai` (50), `ai chatbot examples` (40)
- **Total addressable volume:** 400/mo
- **AI Overview:** yes, on `agentic ai examples`, `ai agent examples` and `examples of agentic ai` (all three sampled, all true)
- **Angle:** A named-example listicle grounded in Australian work rather than IBM's abstractions, which also plays to how LLMs cite: concrete, named capabilities beat superlatives. Answers "What are real examples of AI agents?", "What are the top 5 AI agents?" and "Is ChatGPT an AI agent?" (that last one appears on four separate SERPs in this line). Australian examples to use: after-hours booking agents for trades, BAS and invoice chasing, Australia Post tracking enquiries, and returns handling for AU retail.
- **Incumbents:** evidentlyai.com, reddit.com, slack.com, mitsloan.mit.edu, boomi.com on `agentic ai examples`; domo.com, cloud.google.com, fme.safe.com on `ai agent examples`
- **Verdict:** **WORTH IT.** It is the only sizeable AI agent cluster we have not already published against, the format matches how we get cited, and it does not need a landing page to justify itself.

### 2. What AI automation costs an Australian small business

- **Primary keyword:** `what is ai automation` (110/mo, **$60.32 CPC**, KD 20)
- **Secondary keywords:** `best ai agent builder` (40, $25.45), `what is workflow automation` (30), `best ai agent for business` (20, $21.12), `best ai agent platforms` (20, $26.31)
- **Total addressable volume:** 220/mo
- **AI Overview:** yes, on `ai agent pricing` and `servicenow ai agent pricing` in the same family
- **Angle:** Real build-and-run numbers, because the PAA set here is entirely about money and nobody is answering it straight: "How much do AI agents cost?", "How much does it cost to run an AI agent on 24/7?" and "Are AI agents expensive?". Break out build cost versus monthly token and platform cost, and be honest about which jobs do not repay the build.
- **Incumbents:** pickaxe.co, pendula.com (Australian), chargebee.com, reddit.com, bakedwith.com on `ai agent pricing`
- **Verdict:** **SKIP UNLESS PAIRED WITH A LANDING PAGE.** $60.32 CPC on the head term with no Australian incumbent is a real opening, but 220/mo of pricing intent deserves `/au/ai-agents` to land on, not a blog post with a contact form at the bottom.

### 3. The best AI chatbots for Australian small businesses

- **Primary keyword:** `best ai chatbot` (1,000/mo, $5.16 CPC, KD 24)
- **Secondary keywords:** `best free ai chatbot` (210), `best ai chatbot app` (170), `best chatbot ai` (90), `top ai chatbot` (70)
- **Total addressable volume:** 1,540/mo
- **AI Overview:** yes, on `best ai chatbot`
- **Angle:** The head term is consumer intent (top 5 is PCMag and Zapier, and the PAA runs "Which AI is better than ChatGPT?"), so the only defensible cut is business deployment: which tools can front a customer service queue, what they cost in AUD, and the Privacy Act and Australian Privacy Principles question about where customer conversation data is stored. Answers "What are the best AI chatbots?", "What is currently the best AI chat bot?" and "Which AI is better than ChatGPT?".
- **Incumbents:** au.pcmag.com, knock-ai.com, zapier.com, chatbot.com, artificialanalysis.ai
- **Verdict:** **THIN.** The 1,540/mo is mostly consumers picking a chat app, and a meaningful slice of the wider chatbot cluster (650/mo) is roleplay and unfiltered hunting. We would be fighting PCMag for an audience that will never hire us. Only worth it if we deliberately target the long tail and treat the head term as unwinnable.

---

## Digital Marketing

Line total 24,100/mo, the second-strongest line after SEO. Deduct 1,320/mo of people trying to block or cancel Google Ads and 240/mo of AdSense money-making and you still have roughly 22,500/mo. The Google Ads cost cluster alone is worth more real, high-intent traffic than the whole AI SEO line.

### 1. What Google Ads really cost in Australia

- **Primary keyword:** `google ads cost` (720/mo, $21.94 CPC, KD 11)
- **Secondary keywords:** `how much do google ads costs` (210), `how much google ads` (140), `cost of google ads` (90), `do google ads have gst` (30)
- **Total addressable volume:** 1,190/mo (collapses `google ads pricing`, `google ads costs`, `google ads rates`, `google ads price`, `google ads prices`, `google ads price list`, `google ads fee`, `google ads fees`, all reporting the same 720)
- **AI Overview:** yes, on `google ads pricing`, `google ads cost` and `google ads costs`
- **Angle:** Answer the daily-budget question everyone actually types, in AUD: "Is $10 a day enough for Google Ads?", "Is $20 a day good for Google Ads?" and "How much do Google Ads cost in Australia?". Then cover the two things Australian advertisers get blindsided by, both of which appear as literal searches: the GST treatment of Google Ads invoices (`do google ads have gst`, 30/mo, which nobody is answering well) and the "Why did Google Ads charge me $500?" billing-threshold surprise.
- **Incumbents:** business.google.com, reddit.com, aiad.com.au, digitalnomadshq.com.au, wordstream.com
- **Verdict:** **WORTH IT.** Largest genuinely commercial cluster outside SEO, only two Australian agencies hold the SERP, and the GST angle is a real unanswered question we can own outright.

### 2. The best digital marketing agencies in Australia

- **Primary keyword:** `best digital marketing agency` (590/mo, $16.34 CPC, KD 6)
- **Secondary keywords:** `best digital marketing agency sydney` (110), `best digital marketing agency melbourne` (90), `best lead generation companies in australia` (20, $38.35)
- **Total addressable volume:** 790/mo. `top digital marketing companies` (590, $46.30) reports the same volume and is treated as the same cluster; `best digital marketing agencies melbourne` (90) and `best digital marketing companies` (590) likewise.
- **AI Overview:** **no** on both `best digital marketing agency` and `top digital marketing companies`. It does fire on `top digital marketing company`.
- **Angle:** The listicle format we have already shipped for the UK and US, cut for Australia with Sydney and Melbourne sections. Answers "What are the top 10 digital marketing agencies in Australia?", "Which agency is best for digital marketing?" and "Who are the big 6 digital marketing agencies?".
- **Incumbents:** impressive.com.au, digitalnomadshq.com.au, pwd.com.au, 23digital.com.au, reformdigital.com.au, agencies.semrush.com, builtinmelbourne.com, digitalagencynetwork.com
- **Verdict:** **WORTH IT.** AI Overviews do not fire on the two head terms, which means the ten blue links still get the clicks. That is rare in this dataset and worth exploiting.

### 3. A digital marketing plan for an Australian small business

- **Primary keyword:** `digital marketing strategy` (720/mo, $5.55 CPC, KD 40)
- **Secondary keywords:** `digital marketing strategy small business` (140, $20.53 CPC, **KD 0**), `digital marketing strategy brisbane` (110), `digital marketing strategy and planning` (70), `digital marketing strategy ecommerce` (40)
- **Total addressable volume:** 1,080/mo (`digital marketing marketing strategy`, also 720, is the same cluster)
- **AI Overview:** yes, on both `digital marketing strategy` and `digital marketing marketing strategy`
- **Angle:** A budget-first plan rather than another framework post, answering "What are the 5 main strategies of digital marketing?", "What is the best strategy for digital marketing?" and "What are the 7 pillars of digital marketing?" while actually attaching AUD numbers to each channel. Worth noting that business.qld.gov.au holds a top-three position here, which tells you this SERP rewards plain practical guidance over agency marketing.
- **Incumbents:** business.adobe.com, smartinsights.com, business.qld.gov.au, flippingbook.com, asana.com, salesforce.com, digitalmarketinginstitute.com
- **Verdict:** **THIN.** The head term is owned by Adobe, Salesforce and Smart Insights and we will not take it. The winnable part is the 250/mo in `digital marketing strategy small business` (KD 0, $20.53) and the Brisbane variant, which is a modest prize for a long piece.

---

## Marketplace (Amazon, Walmart, TikTok)

Line total 10,480/mo. Deduct roughly 1,770 of product shopping (`amazon best seller`, `top seller on amazon` and friends) and about 640 of shopper support queries ("how do I contact a seller on Amazon") and real seller-side demand is around 7,000/mo. Walmart has effectively zero Australian presence in this data. **AIO fires on 12 of 12 sampled SERPs.**

### 1. TikTok Shop in Australia: where it actually stands and how to get ready

- **Primary keyword:** `is tiktok shop available in australia` (590/mo, **KD 0**)
- **Secondary keywords:** `does australia have tiktok shop` (260, KD 0), `when is tiktok shop coming to australia` (210, KD 0), `is tiktok shop in australia` (170, KD 0), `how to access tiktok shop in australia` (70, KD 0)
- **Total addressable volume:** 1,300/mo from these five, and roughly 1,530/mo once the long tail is included (`how to get tiktok shop in australia` 50, `why is there no tiktok shop in australia` 40, `how to sell on tiktok shop australia` 30, `when will tiktok shop be available in australia` 30, plus four more at 20)
- **AI Overview:** yes
- **Angle:** A dated, factual status page for the Australian market that we keep current, plus a seller readiness checklist. It answers "Is TikTok Shop coming to Aus?", "Why doesn't TikTok Shop work in Australia?" and "How to set up a TikTok Shop in Australia?". Freshness is the moat here: this is a question whose answer changes, and `dateModified` accuracy is exactly what AI answer engines weight.
- **Incumbents:** tiktok.com (three of the top five), contentgrip.com, salesforce.com. Almost nobody credible is answering this.
- **Verdict:** **WORTH IT.** The single best keyword opportunity in the whole Australian dataset: 1,530/mo, KD 0 across the board, a clear factual question, no real incumbent, and a topic we already have global authority on through `how-to-sell-on-tiktok-shop-2026`. Build this one first regardless of the landing page situation.

### 2. Selling on Amazon Australia: ABN, GST and what the fees really take

- **Primary keyword:** `how to sell on amazon australia` (390/mo, $3.89 CPC, KD 3)
- **Secondary keywords:** `how sell on amazon` (720), `do i need an abn to sell on amazon` (20), `how to sell products on amazon australia` (20), `how to sell on amazon australia for beginners` (20)
- **Total addressable volume:** 1,170/mo (`how to sell on amazon au`, also 390, is the same cluster)
- **AI Overview:** yes, on both `how to sell on amazon australia` and `how sell on amazon`
- **Angle:** The compliance and margin questions a global Amazon guide never covers, driven by the PAA set: "Is it worth selling on Amazon Australia?", "How much does it cost to sell on Amazon Australia?", "How much does Amazon take from a $100 sale?" and "What are the downsides of selling on Amazon?". Note that `do i need an abn to sell on amazon` exists as its own search and that sprintlaw.com.au, a law firm, ranks in the top five, which confirms the compliance angle is what this SERP wants.
- **Incumbents:** sell.amazon.com.au, reddit.com, sell.amazon.com, worldfirst.com, sprintlaw.com.au
- **Verdict:** **WORTH IT**, with a duplication warning. We already run `how-to-sell-on-amazon-2026`. This must lead with ABN, GST on FBA fees and Australian fulfilment reality, or it is a rewrite and should not be published.

### 3. Amazon seller fees in Australia, worked through on a real $100 sale

- **Primary keyword:** `amazon seller fees` (90/mo, $7.48 CPC, KD 16)
- **Secondary keywords:** `sell on amazon fees` (50), `how much does it cost to sell on amazon` (40), `amazon seller fees australia` (20), `how much does it cost to sell on amazon australia` (20)
- **Total addressable volume:** 220/mo (`amazon seller price` and `amazon seller pricing`, both 90, are the same cluster as the primary)
- **AI Overview:** yes, on `amazon seller fees`, `amazon seller price` and `amazon seller pricing`
- **Angle:** One worked example, all the way through, in AUD: referral fee, FBA fee, monthly subscription, GST, returns. It answers "How much does Amazon take from a $100 sale?" (which appears on nine sampled SERPs, the second most repeated PAA in the whole dataset behind "Can ChatGPT do SEO?"), "Do you have to pay $39.99 to sell on Amazon?" and "Is it worth selling on Amazon Australia?". Worth adding the Amazon versus eBay comparison, since "Which is better for selling in Australia, Amazon or eBay?" appears twice and eBay is the bigger Australian marketplace.
- **Incumbents:** sell.amazon.com.au, sellercentral.amazon.com.au, sellercentral.amazon.com, sell.amazon.in, shipbob.com. Amazon owns four or five of the top five on every variant.
- **Verdict:** **THIN.** The most-repeated question in the market, but Amazon's own properties hold the entire SERP and an AI Overview sits above them. Fold the worked example into topic 2 above rather than shipping it standalone.
