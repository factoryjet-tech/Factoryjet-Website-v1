# FactoryJet entity audit (2026-09-24)

Status: facts confirmed by Bhavesh 2026-09-24. Site fixed in the same session (see "Changes made").

## Headline finding

Gemini's "three FactoryJets" are all us, at different points in time.

- **2022:** factoryjet.com itself said "FactoryJet Pvt Ltd", a fintech marketplace for construction-materials retailers in Bangalore (AECS Layout, Kundalahalli), email connect@factoryjet.com. Source: Wayback snapshot 2022-12-02 of https://www.factoryjet.com/ (title "FactoryJet Pvt Ltd - Buy Electrical, Hardware, Plumbing & More Directly From Manufacturers").
- **2023:** factoryjet.com said "Commerce and Credit as a Service", a B2B ecommerce + BNPL SaaS; businessName "FactoryJet Pvt. Ltd." Source: Wayback snapshot 2023-09-30.
- **Now:** an ecommerce + AI services company.

So there is no unrelated "other company" in the evidence we can fetch. The problem is that old descriptions of our own past businesses were never replaced. LinkedIn specialties, SoftwareSuggest, Facebook and the directories still carry pieces of the 2022 and 2023 stories.

## Off-site profiles (fetched 2026-09-24, read only)

| Source | Name shown | HQ / location | Founded | Description today | Links to us | Verdict |
|---|---|---|---|---|---|---|
| LinkedIn /company/factoryjet | FactoryJet | New York, NY (primary) | not shown | "high-converting websites and e-commerce systems"; tagline mentions SEO/AEO/GEO + AI agents | factoryjet.com | Ours. HQ and specialties stale: "E-Commerce SaaS, BNPL, FinTech, Credit, Logistics, Distributor to Retailer" (2023 SaaS era). 648 followers, 7 employees listed |
| Clutch /profile/factoryjet-private | FactoryJet Private Limited | HQ: ITPL Road, Brookefield, Bengaluru 560037; also Fairview Street, Burlington ON, Canada. Phone 9699977699 | 2014 | Ecommerce development agency for DTC & B2B (current wording) | factoryjet.com/ | Ours. Description current; HQ says India |
| GoodFirms /company/factoryjet-private-limited | FactoryJet Private Limited | HQ: Canada | 2014 | Ecommerce Development for DTC & B2B Brands | factoryjet.com/us | Ours. HQ says Canada; links to /us (redirect hop) |
| DesignRush /agency/profile/factoryjet | FactoryJet | HQ: ITPL Road, Brookefield, Bengaluru; other: 2087 Fairview Street, Burlington, Canada | 2014 | Long "full-spectrum digital solutions agency ... WordPress ... Geographical SEO (GEO)" text | factoryjet.com | Ours. Description outdated and calls GEO "Geographical SEO". Shows "Reviews on Google 5.0 (5)", so a Google Business Profile exists |
| SoftwareSuggest /factoryjet | FactoryJet Pvt. Ltd. | Bengaluru | not shown | "AI-native web design, e-commerce, and SEO services company ... at **startup-friendly costs**"; listed as ERP / B2B ecommerce SOFTWARE | n/a | Ours. Likely source of Claude's "startup-friendly pricing". Wrong category (software, not services) |
| Facebook /factoryjetb2b | FactoryJet | Bangalore, Karnataka. Phone 096999 77699, connect@factoryjet.com | n/a | "Easiest Way To Build and Run Your Branded E-Commerce Website" (2023 SaaS era) | factoryjet.com, links LinkedIn + X | Ours (same email and phone as Clutch). Stale. 24 followers, last post Jan 2025 |
| Instagram /factoryjetb2b | **FacetoryJet** (typo) | n/a | n/a | "We build AI-native websites and e-commerce systems and optimise SEO" | factoryjet.com | Ours. Display name misspelled. 0 posts, 55 followers |
| Crunchbase /organization/factoryjet | not read | | | | | Blocked by a bot check. Bhavesh to view. Claude's "founded 2021" and "unfunded" wording most likely comes from here |
| Wikidata | none | | | | | No FactoryJet item exists |
| X /FactoryJet_Tech | not read | | | | | X blocks logged-out reads |
| commerceflo.ai | Commerceflo | n/a | n/a | "AI-native unified omnichannel commerce platform" | **No mention of FactoryJet anywhere** | All three known issues STILL TRUE: www.commerceflo.ai returns 522; canonical + og:url + schema @id point to commerceflo-website.pages.dev; footer says "© 2026 Commerceflo, Inc." |

### Phone numbers seen
- 9699977699 (Clutch, Facebook)
- +91 9819780378 (factoryjet.com in 2022)

### Addresses seen
- ITPL Road, Brookefield, Bengaluru 560037 (Clutch HQ, DesignRush HQ)
- 2087 Fairview Street, Burlington ON L7R0E5, Canada (Clutch, DesignRush)
- "Canada" (GoodFirms HQ)
- New York, NY (LinkedIn)
- AECS Layout, Kundalahalli, Bangalore (2022 site)

## What AI assistants say (from baseline-2026-09-23.json, no new spend)

- **Claude:** "AI-Native digital transformation agency ... startup-friendly pricing ... unfunded company based in Bengaluru (India), founded in 2021 by Bhavesh Barot ... 75-85% faster delivery and 55-75% lower costs". Founder correct; year, location and pricing framing wrong.
- **Gemini:** splits us into three: ecommerce agency (US), AI automation agency (US), and "Factoryjet Private Limited, Bengaluru, B2B marketplace for construction materials" (our own 2022 business).
- **Perplexity:** ecommerce agency, services not SaaS, notes mixed third-party descriptions ("AI-powered unified commerce platform", "AI-SaaS startup"), ties to Bengaluru and New York.

## In-repo findings (scan of src/ and public/)

468 schema objects describe FactoryJet. There is no shared Organization helper; every page writes its own. 250 of them reuse the sitewide `@id` (`https://factoryjet.com/#organization`), so search engines merge them into one entity that ends up with 5 names, 2 types, about 20 descriptions and 4 phone formats.

### Sitewide block (src/app/layout.tsx:154)
- name FactoryJet, **no legalName**, alternateName "FactoryJet Digital Solutions" (used nowhere else)
- description is old web-agency wording: "a leading web & eCommerce development company..."
- foundingDate 2014; founder Bhavesh Barot, Founder & CEO
- telephone +919699977699; address only `addressCountry: IN`; no contactPoint
- logo /FinalLogo.svg (other pages use /logo.png)
- sameAs: LinkedIn, Instagram, Facebook, X, Clutch, GoodFirms, DesignRush, SoftwareSuggest, Crunchbase
- areaServed UK, US, UAE, India (no Australia)

### Drift, worst first
1. **17 files bind city copy to the main @id** as ProfessionalService: `src/app/web-design/{mumbai,bangalore,visakhapatnam,kochi,ahmedabad,hyderabad,delhi,coimbatore,bhubaneswar,rajkot,thiruvananthapuram,noida,vadodara,indore,jaipur,gurgaon}/page.tsx` + `src/app/shopify-development/page.tsx`. Each adds a city description; Mumbai and Bangalore add addressLocality; Indore renames the company "FactoryJet | Web Design Indore".
2. **Name drift:** "FactoryJet Technologies" in 49 blocks (`src/app/uk/schema.ts`, UAE/UK/AU city pages, `digital-marketing/*`, `seo/*`, `web-design/page.tsx`). Legal pages say "FactoryJet Private Limited". Unused legacy footer says "FactoryJet Technologies Pvt. Ltd.".
3. **69 US city LOCAL_BUSINESS_SCHEMA blocks** (~40 cities, e.g. `src/app/detroit/web-design/page.tsx:437`) claim a local office in each city with phone +1-832-998-8422, which is not in the sitewide block.
4. **UAE pages publish a Bengaluru street address** (`src/app/uae/page.tsx:8`, `src/app/uae/ecommerce-development/page.tsx:121`: "ITPL Main Rd, Tigalarpalya, Brookefield"). Legal pages use a different one: "70/1, Willow Herbs, Tigalarpalya, Kundalahalli, Bengaluru 560037".
5. **82 provider objects with no @id** (services, replatforming, comparisons, ~50 US city pages): each is a separate unlinked "FactoryJet".
6. `src/app/uk/schema.ts`: founder shown as "Chief Technical Architect" under an invalid `author` property on Organization.
7. UK London/Manchester business schemas use Bhavesh's personal LinkedIn and GitHub as the company's sameAs.
8. Homepage, About, Commerceflo, /services/ai-seo each carry partial copies with different logos, descriptions, sameAs and areaServed (About says US only).
9. `/seo/mumbai` and `/seo/bangalore` put addressLocality Mumbai/Bangalore in schema while the page copy says "We are not based in Mumbai".

### Clean
- "Bhatt": 0 hits. "unfunded", "Commerceflo, Inc": 0 hits. All foundingDate values are 2014.
- `public/llms.txt`: current and correct (services company, founded 2014 by Bhavesh Barot, Commerceflo disambiguation).
- `startup-friendly` survives in `src/app/faq/FaqContent.tsx:125` and `src/app/uk/manchester/sections/Footer.tsx:55` (plus unused legacy files).

### Phone numbers in the repo
+1-832-998-8422 (69, US city schemas), +919699977699 (67), +91 96999 77699 (32), +91-9699-977-699 (1).

## Bhavesh's answers (2026-09-24)

1. Legal entity is FactoryJet Private Limited, 70/1, Willow Herbs, Tigalarpalya, Kundalahalli, Bengaluru, Karnataka 560037. Clutch, DesignRush and the other directory details are accurate too. Public name is "FactoryJet" only, never "FactoryJet Technologies". A US LLC ("FactoryJet AI Technologies LLC") may come later; until then, one name.
2. Social handles (LinkedIn, Instagram, Facebook, X) are all ours and correct. No changes.
3. Yes: FactoryJet started as a B2B construction-materials marketplace in India and the same brand now runs the services business. Founded 2014.
4. No phone number anywhere on the site (9699977699 draws spam). WhatsApp buttons stay. Do not add the US number (+1 650 444 2422).
5. Commerceflo is "Commerceflo", not "Commerceflo, Inc.", and its site is commerceflo.ai.

## Canonical fact sheet (now live in src/data/organization.ts)

| Field | Value |
|---|---|
| name | FactoryJet |
| legalName | FactoryJet Private Limited |
| One sentence | FactoryJet is an ecommerce and AI services company. We design, build, implement and support online stores, B2B portals, AI agents, AI search and SEO, and websites for DTC and B2B brands, and the client owns everything we build. |
| History (disambiguatingDescription) | FactoryJet started in India in 2014 as a B2B marketplace for construction materials and now runs the same brand as an ecommerce and AI services company. It is one company, not several. |
| foundingDate | 2014 (foundingLocation Bengaluru, India) |
| founder | Bhavesh Barot, Founder & CEO (`https://factoryjet.com/#bhavesh-barot`) |
| address | 70/1, Willow Herbs, Tigalarpalya, Kundalahalli, Bengaluru, Karnataka 560037, IN |
| contact | connect@factoryjet.com, https://factoryjet.com/contact. No telephone. |
| areaServed | US, UK, Australia, UAE, India |
| logo | https://factoryjet.com/logo.png |
| sameAs | LinkedIn, Instagram, Facebook, X, Clutch, GoodFirms, DesignRush, SoftwareSuggest, Crunchbase |

## Changes made (factoryjet.com repo)

- New `src/data/organization.ts`: the only full Organization definition. `src/app/layout.tsx` renders it; WebSite node now has `@id` + publisher.
- AST codemod over src/ (script kept in the session scratchpad):
  - 139 page-level copies that reused `#organization` but changed its facts (incl. the 17 India web-design city ProfessionalService blocks, homepage, About, Commerceflo, UK/UAE/AU pages) reduced to a plain reference.
  - 104 unlinked FactoryJet Organization objects (providers, publishers, legal pages) now reference `#organization`.
  - 112 city LocalBusiness/ProfessionalService blocks: telephone removed, "FactoryJet Technologies" renamed, `parentOrganization` link added.
  - 92 telephone/phone fields removed (+91 and the unused +1-832-998-8422).
- Visible phone removed: UK FAQ, old footer, refund policy, privacy + terms contact blocks, Manchester CTA, UAE WhatsApp hover label, form placeholder, llms.txt.
- "FactoryJet Technologies" renamed to "FactoryJet" in visible copy (SiteFooter copyright, UK footers, UK metadata siteName, web-design FAQ).
- "startup-friendly" wording removed (FAQ hero, Manchester footer).
- Founder jobTitle "Chief Technical Architect" standardised to "Founder & CEO" where it stood alone. "Founder & Chief Technical Architect" left as Bhavesh's personal title.
- About page: short history + legal-entity paragraph; dateModified bumped.
- Author bio (renders on every blog byline): rewritten from "web design agency, 7-day delivery" to the current services description.
- llms.txt: legal name, one-name rule and history added.
- /uk schema: the page's Organization copy replaced by a founder Person linked to the company.

Still left, not done:
- 69 US city pages each claim a local office (addressLocality = the city) in their ProfessionalService schema. They are now linked to the main entity and have no phone, but the "office in every city" claim remains. Decide whether to drop the address from them.
- `src/lib/legacy-pages/Contact/*` still shows the phone, but no live route imports it.
- Refund policy grievance-officer section no longer lists a phone. Indian e-commerce rules ask for grievance-officer contact details; email may be enough, but check with your CA/lawyer.
- The author `credentials` list still says "7-day delivery guarantee, 97% on-time delivery rate" (unverified).

## Changes made (commerceflo.ai repo, ~/Desktop/commerceflo-website)

On branch `fix/entity-name-and-domain` (worktree off origin/main, so the unfinished July work in the main folder is NOT included): SITE_URL now https://commerceflo.ai (fixes canonical, og:url, sitemap, schema @id), llms.txt URLs, and "Commerceflo, Inc." changed to "Commerceflo" in the footer and four legal pages. Not fixed by code: www.commerceflo.ai returns 522 (Cloudflare custom domain for www is missing). The legal pages still give a San Francisco mailing address (2261 Market Street, Suite 5965) that was written for the Inc.; confirm or remove.

## Off-site edits for Bhavesh (paste-ready)

**Short description (use everywhere with a one-line field):**
FactoryJet is an ecommerce and AI services company. We design, build and support online stores, B2B portals, AI agents, AI search and SEO, and websites for DTC and B2B brands, and you own everything we build.

**Long description (About fields):**
FactoryJet is an ecommerce and AI services company. We design, build, implement and support online stores and B2B portals on Shopify, Shopify Plus, Adobe Commerce (Magento), BigCommerce and WooCommerce, build AI agents for real business workflows, and help brands get found in Google and AI assistants like ChatGPT and Perplexity. The client owns everything we build. FactoryJet was founded in India in 2014 by Bhavesh Barot, first as a B2B marketplace for construction materials, and today serves brands in the US, UK, Australia, UAE and India. Legal entity: FactoryJet Private Limited.

**LinkedIn (company page > Edit page):**
- About: paste the long description.
- Specialties: replace the list with: Ecommerce Development, B2B Ecommerce, Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, AI Agent Development, AI SEO, Generative Engine Optimization, Website Design. Remove E-Commerce SaaS, BNPL, FinTech, Credit, Logistics, Distributor to Retailer (those are from the 2022 to 2023 businesses).
- Industry: IT Services and IT Consulting (not Software Development).
- Founded: 2014.
- Headquarters is New York on LinkedIn but Bengaluru everywhere else. Your call; one HQ everywhere is better for AI.

**Crunchbase:** founded 2014, founder Bhavesh Barot, short + long description above, website https://factoryjet.com, HQ Bengaluru. Remove any "SaaS", "fintech", "marketplace" categories; use IT Services, E-Commerce, Artificial Intelligence, SEO.

**SoftwareSuggest:** replace the description (it says "startup-friendly costs", which Claude repeats) with the short description. Ask them to move the listing from software categories (ERP, Order Management) to services, or delete it if they cannot.

**Clutch, GoodFirms, DesignRush:** replace the summary with the long description; keep your addresses as they are. GoodFirms' website link goes to factoryjet.com/us, which redirects; change it to https://factoryjet.com.

**Facebook page intro:** replace "Easiest Way To Build and Run Your Branded E-Commerce Website" with the short description.

**Link-back request (send from each directory's vendor dashboard or support):**
> Hi, we are FactoryJet (profile: <URL>). Please set our website link to https://factoryjet.com (not /us) and, if your plan allows it, make it a followed link. Our summary and details are updated on the profile. Thanks, Bhavesh Barot, Founder & CEO.

**Wikidata:** do not create an item yet. Wikidata items for small companies without independent coverage (press, not directories) often get deleted. Revisit after the first real press mention.

FYI only: the Instagram display name reads "FacetoryJet".
