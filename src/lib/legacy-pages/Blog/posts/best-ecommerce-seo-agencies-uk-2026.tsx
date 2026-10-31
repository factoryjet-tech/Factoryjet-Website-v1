import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

const PAGE_URL = 'https://factoryjet.com/blog/best-ecommerce-seo-agencies-uk-2026';
const IMG = '/blog-images/best-ecommerce-seo-agencies-uk-2026';
const link = 'text-[#B23E13] underline';

// Every fact about every firm below was read on that firm's own website on
// 21 October 2026 (URL in `source`). The verbatim quote behind each claim is
// in the research ledgers kept outside the repo
// (docs/reports/drafts/best-ecommerce-seo-agencies-uk-2026/research/).
// Nothing here is paid placement and the order is not a ranking: firms are
// grouped by the kind of store they suit. The table, the coverage matrix,
// the profiles and the ItemList schema all map from this same array.
type Mark = 'yes' | 'no' | 'separate';
interface Firm {
  name: string;
  url: string;
  source: string;
  group: 'shopify' | 'magento' | 'catalogue' | 'links' | 'senior' | 'commerce';
  based: string;
  type: string;
  platforms: string;
  clients: string;
  what: string;
  proof?: string;
  price: string;
  bestFor: string;
  ask: string;
  // What the firm's own ecommerce SEO pages name, as read on 21 Oct 2026.
  covers: { facets: Mark; migrations: Mark; schema: Mark; merchant: Mark; ai: Mark };
}

const FIRMS: Firm[] = [
  {
    name: 'Eastside Co',
    url: 'https://eastsideco.com/',
    source: 'https://eastsideco.com/shopify-seo-experts',
    group: 'shopify',
    based: 'London (54 Poland Street), with an office in Birmingham',
    type: 'Shopify and Shopify Plus agency with an in-house SEO team',
    platforms: 'Shopify and Shopify Plus only',
    clients: 'Carex, Chelsea Football Club, Volkswagen, Unilever, Scandibørn',
    what: 'Eastside Co builds on Shopify and sells Shopify SEO services for Shopify stores only, with its SEO specialists working next to its Shopify developers. Its SEO page names the problems Shopify creates: duplicate pages from variants and filters, and the structured data a theme outputs. It also covers hreflang through Shopify Markets for stores selling abroad. It says it was one of the first three UK agencies accredited as a Shopify Plus Partner and has completed more than 60 migrations.',
    price: 'No SEO price published. The contact form shows project budgets from £5,000 to £100,000 for any type of project.',
    bestFor: 'A Shopify or Shopify Plus store that wants developers and SEO people in the same building.',
    ask: 'Which of the 60+ migrations it lists came from your current platform, and what organic traffic did that store keep in the first three months.',
    covers: { facets: 'yes', migrations: 'yes', schema: 'yes', merchant: 'yes', ai: 'yes' },
  },
  {
    name: 'StudioHawk UK',
    url: 'https://studiohawk.co.uk/',
    source: 'https://studiohawk.co.uk/seo-services/ecommerce-seo/',
    group: 'shopify',
    based: 'London (New Inn Yard, Shoreditch); sister offices in Melbourne, Sydney and Atlanta',
    type: 'SEO-only agency, UK arm founded in 2019',
    platforms: 'Dedicated Shopify SEO page; its FAQ also names WooCommerce, Magento and BigCommerce as common platforms',
    clients: 'Damson Madder, Refy, Reebok, PRESS, New Balance, GRIND, RIXO, Naturisimo',
    what: 'StudioHawk does SEO and nothing else. Its ecommerce page lists category and subcategory content, product page work, page speed, technical audits, link building and digital PR, with migrations sold as a separate service. It says it has no account managers, so you deal with the SEO people directly, and it does not use lock-in contracts. The client list leans towards fashion, beauty and food brands.',
    proof: 'GRIND: "386% increase in organic search revenue, Sep 2024 vs Sep 2022". Damson Madder: "558% increase in clicks through to product pages".',
    price: 'No price published. It says a minimum spend applies but gives no figure.',
    bestFor: 'A direct-to-consumer brand on Shopify that wants an SEO specialist with digital PR in the same team.',
    ask: 'Who on the team would run your account, given that it has no account managers, and how its digital PR links reach category pages.',
    covers: { facets: 'no', migrations: 'separate', schema: 'no', merchant: 'no', ai: 'separate' },
  },
  {
    name: 's360 UK (formerly Reload Digital)',
    url: 'https://www.reloaddigital.co.uk/',
    source: 'https://www.reloaddigital.co.uk/seo-agency/',
    group: 'shopify',
    based: 'London (The Typewriter Building, Borough High Street); part of the Danish s360 group since March 2024',
    type: 'Ecommerce marketing agency with SEO pages for Shopify, Magento and BigCommerce',
    platforms: 'Shopify Plus, Magento and BigCommerce',
    clients: 'Wrangler, Bluebella, Nuxe, Philip Kingsley, Emma Bridgewater, LuxDeco, Astrid & Miyu, Victoria Beckham',
    what: 'Reload Digital joined the s360 group in March 2024 and the site now trades as s360 UK, so search for both names. Its SEO page covers migrations to a new domain, platform or site structure, structured data, and the move to AI-generated search results. It looks at which products, collections and customer groups make the most money before choosing what to work on. It says it is a Shopify Plus Partner with over 100 Shopify brands behind it, and that its ecommerce SEO work spans 10 countries.',
    proof: 'Bluebella: "74% increase in global organic revenue (vs YOY)", with conversion rate up 42% (page heading dates it to H2 2022).',
    price: 'No price published. The enquiry form has no budget field.',
    bestFor: 'A fashion, beauty or lifestyle brand on Shopify Plus or Magento that sells in more than one country.',
    ask: 'How the s360 group changes who works on your account, and for a result newer than the 2022 Bluebella case.',
    covers: { facets: 'no', migrations: 'yes', schema: 'yes', merchant: 'no', ai: 'yes' },
  },
  {
    name: 'Envisage Digital',
    url: 'https://www.envisagedigital.co.uk/',
    source: 'https://www.envisagedigital.co.uk/magento-services/magento-seo-services/',
    group: 'magento',
    based: 'Bournemouth (Space House, Oxford Road)',
    type: 'Developer-led Magento and Adobe Commerce agency with in-house SEO',
    platforms: 'Magento, Adobe Commerce, Hyvä, Shopify, BigCommerce, WooCommerce and Laravel',
    clients: 'Specialist Crafts, Flooring Hut, FootActive, Snowbee, Cladco, Poles and Blinds, Surplus Store',
    what: 'Envisage builds Magento stores and runs SEO on them. It lists itself as a Hyvä Gold Partner and an Adobe Solution Partner (Hyvä is a faster front end for Magento). The Magento SEO page covers speed, crawling, indexing, structured data and product and category pages, and names AI Overviews and GEO. Its case studies include a UK domain change with redirects and hreflang across every Magento store view. The SEO team is small: the page says three in-house SEO specialists.',
    price: 'No SEO price published. The enquiry form, which covers builds and SEO together, offers bands from "Under £5,000" to "£100,000+".',
    bestFor: 'A Magento or Adobe Commerce store, especially a trade or B2B one, that needs SEO fixes done in the code.',
    ask: 'Whether the three SEO specialists or the developers own your redirect map during a rebuild, and what organic traffic did after the Specialist Crafts domain change.',
    covers: { facets: 'no', migrations: 'yes', schema: 'yes', merchant: 'no', ai: 'yes' },
  },
  {
    name: 'Polaris Agency',
    url: 'https://www.polarisagency.com/',
    source: 'https://www.polarisagency.com/seo/ecommerce-seo/',
    group: 'magento',
    based: 'Chalfont Park, Gerrards Cross, Buckinghamshire (listed on its site as its London office); its site also links Polaris Ireland and Polaris USA',
    type: 'SEO and GEO agency with a detailed ecommerce practice',
    platforms: 'Shopify and Shopify Plus, Salesforce Commerce Cloud, Adobe Commerce, BigCommerce and WooCommerce',
    clients: 'Dune London, Hampers.com, Paradox London, Virginia Hayward, Blitzsport',
    what: 'Polaris has the most detailed ecommerce SEO page of any firm here. It names category page (PLP) and product page (PDP) work, Google Merchant Center and organic Shopping listings, product schema and feed quality, and faceted navigation and crawl traps on Adobe Commerce. It also checks that product content and category links can be read without relying on JavaScript in the browser, which matters for AI crawlers. It scores category pages with its own 66-point checklist, which it calls the Kartessien Index.',
    proof: 'Dune London: "644% Increase in sales". The site says the Dune work won Best SEO Campaign at the 2025 European Search Awards.',
    price: 'Published: "SME campaigns range from £3,000 - £5,000 per month", "£6,500 - £10,000 per month" for the tier it describes for challenger ecommerce brands, "£12,500 - £19,500 per month" for enterprise, and projects "starting from £5,450 + VAT".',
    bestFor: 'A larger retailer on Adobe Commerce or Salesforce Commerce Cloud with a big catalogue and many filters.',
    ask: 'Which pricing tier your catalogue size falls into, and whether the person who scores your category pages also writes the fixes.',
    covers: { facets: 'yes', migrations: 'separate', schema: 'yes', merchant: 'yes', ai: 'yes' },
  },
  {
    name: 'Edge45',
    url: 'https://edge45.co.uk/',
    source: 'https://edge45.co.uk/services/search-engine-optimisation/ecommerce/',
    group: 'catalogue',
    based: 'York (The Guildhall)',
    type: 'Specialist SEO agency, formed in 2015, with an ecommerce and a Shopify SEO practice',
    platforms: 'Shopify (dedicated page), WooCommerce, BigCommerce, Adobe Commerce, Wix, Squarespace, PrestaShop and OpenCart',
    clients: 'Black Sheep Brewery, Northern Monk, Created Brilliance, Basco',
    what: 'Edge45’s ecommerce page reads like a technical checklist: product feeds, site hierarchy, discontinued products, duplicate pages, crawling, faceted navigation, canonical tags, internal links and JavaScript rendering. It supports migrations to a new platform, domain, URL structure or design. It also covers organic shopping features and AI-assisted product discovery, and says it works to get brands “recommended in LLMs”. It says 22 ecommerce SEO clients have rated it 5 out of 5.',
    proof: 'Black Sheep Brewery: "Organic revenue up 40% year on year" over six months.',
    price: 'No price published. The contact form asks for a monthly budget from £500 to £5,000+.',
    bestFor: 'A Shopify or WooCommerce store with filters, a big range or a migration coming up, on a mid-size budget.',
    ask: 'Which items on its technical list it would fix first on your store, and who writes the code for those fixes.',
    covers: { facets: 'yes', migrations: 'yes', schema: 'yes', merchant: 'yes', ai: 'yes' },
  },
  {
    name: 'Bring Digital',
    url: 'https://www.bringdigital.co.uk/',
    source: 'https://www.bringdigital.co.uk/services/organic-search/search-engine-optimisation/',
    group: 'catalogue',
    based: 'Manchester; owned by Dark Matter Commerce since 2023',
    type: 'Ecommerce-focused digital marketing agency with a team of more than 20 SEO specialists',
    platforms: 'Shopify and BigCommerce (named for technical audits); sister agencies in the group also build on Adobe',
    clients: 'Jessops, Lakeland, Cotton Traders, The Rug Company, Yours Clothing, In The Style, Victoria Health, Land of Beds',
    what: 'Bring has no separate ecommerce SEO page; ecommerce sits inside its main SEO page, which talks about sites with thousands or tens of thousands of pages and a team of ecommerce specialists. It covers technical work, migrations, high-converting categories and Shopping feed optimisation, and says its technical audit runs over 200 checks. The client list is the most retail-heavy of any firm here. It names Shopify and BigCommerce for technical audits.',
    proof: 'The Rug Company: "1,177% increase in indexed pages on the site", which it says "translated to an 88% increase in traffic".',
    price: 'No price published. The contact form has no budget field.',
    bestFor: 'An established UK retailer with a large catalogue that wants SEO next to paid media and Shopping.',
    ask: 'Who from the team of 20+ SEO specialists would be on your account, and how its Shopping feed work links to organic product listings.',
    covers: { facets: 'no', migrations: 'yes', schema: 'no', merchant: 'yes', ai: 'no' },
  },
  {
    name: 'Seed',
    url: 'https://helloseed.co.uk/',
    source: 'https://helloseed.co.uk/seo/ecommerce-seo',
    group: 'catalogue',
    based: 'Brighton (Pavilion View, New Road)',
    type: 'Performance marketing agency founded in 2015, B Corp certified, around 40 staff',
    platforms: 'None named on its ecommerce SEO page; a case study covers a move from WooCommerce to Shopify',
    clients: 'Atlas Flowers (SEO); Liforme, Gusbourne and World of Books for other channels',
    what: 'Seed’s ecommerce SEO page lists product pages at scale, category and subcategory structure, faceted navigation and crawl management, product schema and pagination. It has a section on free product listings in Merchant Centre, handles migrations with redirect maps and checks afterwards, and tracks brand mentions in ChatGPT and Claude with its own tool, Lumin. It says it is B Corp certified, with a B Impact Score of 94.4, and is moving to employee ownership. It also runs paid media and social, so SEO is one of several channels.',
    proof: 'Atlas Flowers: organic traffic and organic revenue each "up 104%" year on year after a WooCommerce to Shopify move. The same page’s headline gives a larger figure that does not match its results section, so we quote the results section.',
    price: 'No price published. The footer says "Pricing based on outcomes" and "Flexible agreements".',
    bestFor: 'A growing store that wants every item on the ecommerce SEO checklist from a B Corp agency.',
    ask: 'What "pricing based on outcomes" means in pounds for your store, and which platforms its SEO team works on most.',
    covers: { facets: 'yes', migrations: 'yes', schema: 'yes', merchant: 'yes', ai: 'yes' },
  },
  {
    name: 'Reboot Online',
    url: 'https://www.rebootonline.com/',
    source: 'https://www.rebootonline.com/services/ecommerce-seo/',
    group: 'links',
    based: 'Address in London (High Road, N12); a fully remote team across the UK',
    type: 'SEO and digital PR agency, founded in 2012, 80 staff',
    platforms: 'Platform pages for Shopify, Magento, BigCommerce, Wix and WordPress',
    clients: 'OnBuy, MattressOnline, Showers to You, Faraway Furniture, Golf Support, The Bed Slats Company',
    what: 'Reboot’s ecommerce SEO page covers product listing page and product page templates, and treats category pages as the ones that target the biggest commercial searches. Its strength is links: it runs everything from links on manufacturer websites to data-led digital PR campaigns. Its Shopify page adds site structure, speed, indexing, structured data and GEO. It says it works with online shops and marketplaces; OnBuy, a UK marketplace, is on its client list.',
    proof: 'Showers to You: "over 200 links … across 12 campaigns, with an average DR of 66" in six months (a links figure; the page gives no revenue number).',
    price: 'Published minimum: "We work with clients from £2k monthly investment upwards."',
    bestFor: 'A store whose site is in good technical shape but which lacks the links to compete for big category terms.',
    ask: 'Which of your category pages its PR links would point at, and how it reports revenue from them rather than link counts.',
    covers: { facets: 'no', migrations: 'no', schema: 'yes', merchant: 'no', ai: 'yes' },
  },
  {
    name: 'Glass Digital',
    url: 'https://glass.digital/',
    source: 'https://glass.digital/about-us/',
    group: 'senior',
    based: 'Durham (Belmont Business Park), single office',
    type: '13-person agency running SEO, GEO, PPC and affiliate for UK ecommerce brands, trading since 2014',
    platforms: 'No platform list; a Magento 1 to Magento 2 migration is named in a client testimonial',
    clients: 'Tefal, Ramsdens, H&T, Charles Clinkard, Cult Furniture, Dormeo, Boutique Camping, Sofas by Saxon',
    what: 'Glass Digital works only with UK ecommerce brands and says so plainly: it does no social, creative, email or web build. Its about page lists migrations, category architecture and GEO, with AI citations tracked in ChatGPT, Google AI Overviews and Perplexity. It says technical work and consultation come free inside its SEO service, that some clients pay a share of the revenue it generates instead of a fee, and that clients stay an average of four years. It lists past clients separately from current ones.',
    proof: 'RW4Y: "290% increase in organic revenue" from January 2019 to January 2022.',
    price: 'No price published. It says it has a minimum monthly investment and offers revenue-share terms on some accounts.',
    bestFor: 'A UK online retailer that wants a small senior team and is open to paying partly on results.',
    ask: 'How its revenue-share terms are measured in GA4, and which current client looks most like your store.',
    covers: { facets: 'no', migrations: 'yes', schema: 'yes', merchant: 'no', ai: 'yes' },
  },
  {
    name: 'FactoryJet (that is us)',
    url: 'https://factoryjet.com/uk/ecommerce-seo',
    source: 'https://factoryjet.com/uk/ecommerce-seo',
    group: 'commerce',
    based: 'Works remotely with UK clients and schedules calls in UK business hours',
    type: 'Ecommerce build and SEO team; 500+ businesses served since 2014',
    platforms: 'Shopify and Shopify Plus, WooCommerce, Magento (Adobe Commerce) and BigCommerce',
    clients: 'DTF (Shopify), Mannik (WooCommerce), Sow Easy (WooCommerce) and GPSUK (Commerceflo)',
    what: 'FactoryJet builds and supports online stores, and the same developers carry out the SEO fixes. On Shopify that means editing Liquid templates directly: canonical tags, filter pages that waste crawl budget, theme duplicates and content that only appears after JavaScript runs. Engagements cover a technical crawl and fix list in month one, category keyword mapping and copy, product structured data, Core Web Vitals, editorial links and GA4 revenue tracking. FactoryJet is a registered Shopify Partner. Marketplace listings on Amazon or eBay are scoped separately.',
    price: 'No rate card. Each phase has a fixed price, quoted in writing after a free audit call. Changes are quoted and approved per request, and there is no monthly minimum.',
    bestFor: 'A store that wants the people who write the SEO plan to also change the code.',
    ask: 'To see the fix list for your own store from the free audit before you agree to anything.',
    covers: { facets: 'yes', migrations: 'yes', schema: 'yes', merchant: 'yes', ai: 'yes' },
  },
];

const GROUPS: { key: Firm['group']; heading: string; intro: string }[] = [
  {
    key: 'shopify',
    heading: 'Best Shopify SEO agencies in the UK',
    intro: 'Shopify creates its own SEO problems: the same product at two web addresses, filter pages Google can crawl without end, and limits on what you can change in the theme. These three show Shopify work on their own sites. Eastside Co does nothing but Shopify.',
  },
  {
    key: 'magento',
    heading: 'Best Magento and Adobe Commerce SEO agencies in the UK',
    intro: 'Magento (now Adobe Commerce) and Salesforce Commerce Cloud stores tend to be bigger and more custom, so SEO fixes often need a developer. One of these two is a Magento build agency with SEO; the other is an SEO agency with deep Adobe Commerce and Salesforce pages.',
  },
  {
    key: 'catalogue',
    heading: 'Which agencies handle big catalogues, filters and migrations?',
    intro: 'If you sell thousands of products, the hard part is control: which of your filter pages Google should crawl, which category pages deserve copy, and how to move platforms without losing rankings. These three name that work on their own pages.',
  },
  {
    key: 'links',
    heading: 'Which agency focuses on links for big category terms?',
    intro: 'Some stores have a sound site but too few links from other websites to rank for the biggest category searches. Reboot Online is an 80-person SEO and digital PR agency built around that job.',
  },
  {
    key: 'senior',
    heading: 'Which agency offers a small senior team?',
    intro: 'Glass Digital has 13 people, works only with UK ecommerce brands, and offers revenue-share terms on some accounts.',
  },
  {
    key: 'commerce',
    heading: 'Which agency builds the store and does the SEO in the same team?',
    intro: 'One entry here, and it is ours, so read it with that in mind. Eastside Co and Envisage Digital above also have developers and SEO people under one roof.',
  },
];

const COVER_COLS: { key: keyof Firm['covers']; label: string }[] = [
  { key: 'facets', label: 'Faceted navigation' },
  { key: 'migrations', label: 'Migrations' },
  { key: 'schema', label: 'Product schema' },
  { key: 'merchant', label: 'Merchant Center or Shopping feeds' },
  { key: 'ai', label: 'AI search' },
];
const markText = (m: Mark) => (m === 'yes' ? 'Named' : m === 'separate' ? 'Separate page' : 'Not named');

// Firms we read on 21 Oct 2026 but did not profile. Kept so a reader can see
// what was checked, not only what made the cut.
const ALSO_CHECKED: { name: string; url: string; note: string }[] = [
  { name: 'Yellowball', url: 'https://weareyellowball.com/other-digital-marketing/seo/', note: 'London WooCommerce and WordPress build agency with an ecommerce SEO page. Publishes SEO prices on two pages that differ: "start from just £2,000 per month" on its SEO page and "start from just £1,500/month with flexible 3-month minimum terms" in its cost guide.' },
  { name: 'Victory Digital', url: 'https://victory.digital/seo-packages', note: 'Nine-person agency in Barnstaple, North Devon, with a Shopify-focused ecommerce page. Publishes general SEO packages of £980, £1,960, £2,940 and £3,920 a month on 3 or 6 month terms; the page does not say whether VAT is included.' },
  { name: 'Ceek', url: 'https://ceek.co.uk/ecommerce-seo-agency/', note: 'London marketing agency (Charing Cross Road) with Brighton and Manchester offices. Its ecommerce SEO page puts organic Google Merchant Center listings at the front of its method. No price published.' },
  { name: 'Found', url: 'https://www.found.co.uk/', note: 'London search and media agency (Hatton Garden), part of Tomorrow Group, naming Adobe Commerce, Shopify and WooCommerce SEO. Runs its own search tool, Luminr. No price published.' },
  { name: 'Propeller', url: 'https://www.propeller.co.uk/services/ecommerce-seo', note: 'London agency (Islington) mostly known for hospitality, and a Shopify Plus Partner. Its ecommerce SEO page covers faceted navigation, schema and redirects. No price published.' },
  { name: 'JDR Group', url: 'https://www.jdrgroup.co.uk/ecommerce-seo', note: 'Derby agency and HubSpot partner working with ecommerce businesses since 2004. Its ecommerce SEO page names no platform. No set packages.' },
  { name: 'Aware Digital and Studio36 Digital', url: 'https://www.awaredigital.co.uk/', note: 'Both rank on page one for "ecommerce seo agency uk", but both sites refused our requests on 21 October 2026, so we could not check them live and left them out.' },
  { name: 'Rise at Seven', url: 'https://riseatseven.com/', note: 'Named in Google UK’s AI Overview for "ecommerce seo agency uk" on 21 October 2026, but the AI Overview linked that name to a ClickSlice list page that returned HTTP 410 that day. Rise at Seven is profiled in our general list of the best SEO agencies in the UK, so we did not repeat it here.' },
  { name: 'ClickSlice', url: 'https://www.clickslice.co.uk/', note: 'London SEO agency, also named in the same AI Overview. It published one of the five lists we tallied, with itself first. That list returned HTTP 410 on 21 October 2026, so we read the archived copy of 11 May 2026 and used it as a source, not a candidate.' },
  { name: 'Absolute Digital Media', url: 'https://absolutedigitalmedia.co.uk/', note: 'Its site timed out on every request on 21 October 2026, so it is not profiled.' },
];

const FAQS: FAQItem[] = [
  {
    q: 'Which is the best ecommerce SEO agency in the UK?',
    a: 'It depends on your platform and size: Eastside Co, StudioHawk UK and s360 UK for Shopify; Envisage Digital and Polaris for Magento or Adobe Commerce; Edge45, Bring Digital and Seed for big catalogues; Reboot Online for links. FactoryJet, which wrote this list, suits stores that want the same team to plan the SEO and change the code.',
  },
  {
    q: 'What does an ecommerce SEO agency do?',
    a: 'It makes your category and product pages show up when people search for things you sell. In practice that means fixing technical problems such as duplicate product addresses and crawlable filter pages, writing copy for category pages, adding product structured data, keeping rankings through a platform move, earning links, and tracking organic revenue in GA4. Good agencies also check how your products appear in Google’s free shopping listings and in AI answers.',
  },
  {
    q: 'How much does ecommerce SEO cost in the UK?',
    a: 'Published UK guides put ecommerce SEO at roughly £1,500 to £10,000 or more a month. Ren Hao SEO lists ecommerce work at £1,500 to £8,000+ a month and Gorilla Marketing says £2,000 to £10,000+, both read on 21 October 2026. Few agencies print a price. Polaris publishes monthly bands from £3,000 to £19,500 plus projects from £5,450 + VAT, Reboot Online a £2,000 monthly minimum, and Victory Digital packages from £980 to £3,920 a month.',
  },
  {
    q: 'Is it worth paying an agency for ecommerce SEO?',
    a: 'It is worth it when organic search can carry a real share of your sales and you have the stock and margins to serve that demand. Online sales were 27.3% of UK retail in August 2026, according to the ONS, so search matters for most shops. It is not worth it when the agency cannot change your site, because a fix list nobody implements earns nothing. Ask who writes the code before you sign.',
  },
  {
    q: 'How long does ecommerce SEO take to work?',
    a: 'Expect several months. Technical fixes, such as cleaning up filter pages and duplicate product addresses, usually move rankings first. Category pages on competitive searches take longer, because they also need copy and links. Google’s own guidance says no one can guarantee a first-place ranking, so treat any agency that promises one as a warning sign, and ask for a dated plan of what goes live each month.',
  },
  {
    q: 'What is faceted navigation, and why does it matter for SEO?',
    a: 'Faceted navigation is the set of filters on a category page, such as size, colour and price. Each combination can create a new web address, so a shop can end up with far more filter pages than products. Google’s documentation says this causes overcrawling and recommends either blocking filter pages from being crawled or, if some should rank, following its rules for those addresses. Polaris, Edge45 and Seed name this work on their pages.',
  },
  {
    q: 'What is product schema, and does my store need it?',
    a: 'Product schema is code on a product page that tells Google the price, stock and reviews in a fixed format. Google offers two kinds: product snippets for pages that review products, and merchant listings for pages where people can buy. Merchant listing markup can include sizing, shipping and returns. If you sell online, you want merchant listing markup on every product page, checked in Google’s Rich Results Test.',
  },
  {
    q: 'How do I get my products on Google Shopping for free?',
    a: 'Set up a Google Merchant Center account, upload your product data and turn on free listings. Google’s help page says eligible products may show across Search, Images, Lens, YouTube, Gemini, the Shopping tab and Business Profiles. It also says the setting gives permission to show products but does not guarantee they will appear. Ceek, Polaris and Seed put organic Merchant Center work into their ecommerce SEO service.',
  },
  {
    q: 'Which agencies are best for Shopify SEO in the UK?',
    a: 'Eastside Co works only on Shopify and Shopify Plus, and says it was one of the first three UK agencies accredited as a Shopify Plus Partner. StudioHawk UK has a dedicated Shopify SEO page and a client list of fashion, beauty and food brands. s360 UK says it has worked with over 100 Shopify brands. If you are choosing a Shopify Plus build partner instead, read our separate list of Shopify Plus agencies for UK brands.',
  },
  {
    q: 'Which agency should a Magento or Adobe Commerce store use?',
    a: 'Envisage Digital in Bournemouth is a Magento build agency that lists itself as a Hyvä Gold Partner and an Adobe Solution Partner, with three in-house SEO specialists. Polaris names faceted navigation, configurable products and multi-store set-ups on Adobe Commerce. s360 UK has a Magento SEO page and says it has over 10 years of Magento SEO work. Glass Digital’s client Dormeo credits it with a Magento 1 to Magento 2 move.',
  },
  {
    q: 'Which agency suits a WooCommerce store?',
    a: 'If you want a WooCommerce SEO agency, note that none of the ten profiled here specialises in it, but several name it. Edge45, Polaris and Envisage Digital list WooCommerce among their platforms, and StudioHawk names it as a common platform. Yellowball, a London WordPress and WooCommerce build agency, has an ecommerce SEO page and publishes starting prices. On WooCommerce, much of the SEO set-up runs through a plugin such as Yoast or Rank Math, so ask who configures it.',
  },
  {
    q: 'Can an ecommerce SEO agency help with Amazon listings?',
    a: 'Mostly not. None of the ten agencies profiled here sells Amazon SEO on its ecommerce SEO page. Reboot Online says it helps online shops and marketplaces, and its clients include OnBuy, which is a marketplace in its own right. Amazon search follows different rules from Google, so treat it as a separate job with a separate specialist. FactoryJet scopes marketplace listings as their own piece of work.',
  },
  {
    q: 'How do I keep my rankings when I move ecommerce platform?',
    a: 'Map every old product, category and content address to its new one before launch, and use permanent server redirects. Google’s site move guide recommends 301 or 308 redirects, says they do not lose PageRank, and advises redirecting straight to the final address rather than through a chain. Keep the old and new properties in Search Console and watch crawl errors for weeks after launch. Eastside Co, Edge45, Seed and s360 UK all name migration work.',
  },
  {
    q: 'Will AI Overviews take traffic from my online shop?',
    a: 'Some, mostly on research searches. Ofcom’s Online Nation 2025 report found about 30% of UK searches now show an AI Overview, and 53% of adults say they see them often. On buying searches Google usually shows product listings and shopping results as well, so the effect on category pages is smaller. Google says there are no extra requirements to appear in AI Overviews beyond normal SEO, so product data and category content still do the work.',
  },
  {
    q: 'Is SEO dead now that people use AI to search?',
    a: 'No. Google says the same SEO practices apply to AI Overviews and AI Mode, with no special optimisation needed. Ofcom’s Online Nation 2025 report found 82% of UK adults use Google Search, which handles about 3 billion UK searches a month. AI assistants also read web pages, so a store with clear product data and named mentions on other sites is easier for them to recommend. What changes is measurement: track AI referrals in GA4 alongside Google.',
  },
  {
    q: 'Can ChatGPT do SEO for my store?',
    a: 'It can draft category copy, suggest product titles and explain an audit, but it cannot see your Search Console data, crawl your filter pages or change your theme. Those jobs need a person with access to the store. Use AI for drafts and checks, and keep a human in charge of redirects, canonical tags and anything that can deindex pages. Several agencies here, including Seed and Polaris, now track how AI assistants mention brands.',
  },
  {
    q: 'Can I do ecommerce SEO myself?',
    a: 'A small store can do a lot alone: unique product descriptions, category copy, sensible web addresses, product schema from a theme or app, and Merchant Center free listings. It gets hard with thousands of products, heavy filters, a platform move or a competitive category, because mistakes there can remove pages from Google. Many owners start with a one-off audit and do the fixes in-house.',
  },
  {
    q: 'What should I ask an ecommerce SEO agency before signing?',
    a: 'Google suggests asking for examples of past work, whether the agency follows Google Search Essentials, what results it expects and when, and how it will explain its recommendations. Add four ecommerce questions. Who changes the code? What happens to faceted navigation on our store? How is organic revenue measured in GA4? What is the notice period? Each profile above ends with one more question for that firm.',
  },
  {
    q: 'Should I sign a 12-month ecommerce SEO contract?',
    a: 'Only if you have seen the work first. StudioHawk UK says it does not use lock-in contracts, FactoryJet has no monthly minimum, and Victory Digital sells 3 and 6 month terms. Yellowball’s SEO terms say 3-month rolling terms with at least 60 days’ notice. A long contract makes most sense for a platform migration, where the work runs on a fixed plan. Get the notice period in writing.',
  },
  {
    q: 'Do I need a London ecommerce SEO agency?',
    a: 'No. Ecommerce SEO is national, not local, because your buyers search from anywhere in the UK. Six of the ten agencies profiled here are outside London: Edge45 in York, Bring Digital in Manchester, Seed in Brighton, Envisage Digital in Bournemouth, Glass Digital in Durham and Polaris in Buckinghamshire. Choose on platform knowledge and proof, then check the agency can meet you when you need it.',
  },
  {
    q: 'What is the difference between an ecommerce agency and an ecommerce SEO agency?',
    a: 'An ecommerce agency usually designs and builds the store. An ecommerce SEO agency works on getting that store found in search. Some firms do both: Eastside Co, Envisage Digital and FactoryJet build stores and run SEO, which means fixes can go straight into the code. Pure SEO agencies such as StudioHawk UK and Edge45 rely on your developer or theme to make some changes.',
  },
  {
    q: 'How do I know if my ecommerce SEO agency is doing a good job?',
    a: 'Check four things each month. Organic revenue in GA4 for category and product pages, against the same month last year. Clicks and indexed pages in Search Console, where a sudden drop in indexed products is an early warning. A dated list of fixes that went live, not only recommendations. And a reason for each change: Google’s guide to hiring an SEO says a good one explains its recommendations.',
  },
  {
    q: 'Should I hire a freelancer or an agency for ecommerce SEO?',
    a: 'A freelancer can suit a small store with one clear job, such as an audit or category copy, where a monthly agency minimum like Reboot Online’s £2,000 would buy more than you need. An agency suits a store that needs several skills at once: a developer for filter pages and redirects, a writer for category copy and digital PR for links. Either way, ask who changes the code and get the notice period in writing.',
  },
  {
    q: 'Why is FactoryJet on its own list?',
    a: 'Because we do this work, and leaving ourselves out would hide that from you. We put FactoryJet last, labelled it, and used the same profile format as everyone else, with facts taken from our own service page. All four agency-written lists we read put their own firm first. Read every list on this topic, ours included, knowing who wrote it.',
  },
];

export const post: BlogPost = {
  id: '798',
  slug: 'best-ecommerce-seo-agencies-uk-2026',
  title: 'Best Ecommerce SEO Agencies in the UK (2026): 10 Checked',
  excerpt:
    'Ten UK ecommerce SEO agencies for Shopify, Magento, WooCommerce and large catalogues, each checked on its own website on 21 October 2026: where it is based, the platforms it names, what its ecommerce SEO page covers, and the prices it publishes. FactoryJet wrote this list and is on it, last.',
  category: 'E-Commerce Development',
  author: 'Bhavesh Barot',
  date: 'Oct 22, 2026',
  dateModified: 'Oct 31, 2026',
  readTime: '26 min read',
  imageUrl: `${IMG}.webp`,
  imageAlt:
    'A woman in a dark green jumper sits at a monitor showing a grid of vase photos while a red-haired man in a grey hoodie holds a cream vase beside her, with shelves of vases and folded linen behind them',
  meta: {
    title: 'Best Ecommerce SEO Agencies UK (2026): 10 Compared',
    description:
      'Ten UK ecommerce SEO agencies and companies for Shopify, Magento and big catalogues, checked on their own sites on 21 Oct 2026, with published prices.',
  },
  keyTakeaways: [
    'There is no single best ecommerce SEO agency in the UK. Match the firm to your platform and size: Shopify (Eastside Co, StudioHawk UK, s360 UK), Magento and Adobe Commerce (Envisage Digital, Polaris), big catalogues and migrations (Edge45, Bring Digital, Seed), links or a small senior team (Reboot Online, Glass Digital).',
    'Every fact below was read on each firm’s own website on 21 October 2026. Nobody paid to be here, the order is not a ranking, and FactoryJet, which wrote the list, is last.',
    'We read five of the lists that rank for this search. All four written by agencies put their own firm first, and between them the five named 60 agencies, only 7 of them more than once.',
    'Published prices are rare. Polaris prints £3,000 to £19,500 a month by tier and Reboot Online a £2,000 monthly minimum. UK guides put ecommerce SEO at about £1,500 to £10,000+ a month.',
    'Three of the ten outside firms name all five ecommerce jobs on their own pages (faceted navigation, migrations, product schema, Merchant Center and AI search): Eastside Co, Edge45 and Seed. Polaris names four and sells migrations as a separate service. Only four name faceted navigation.',
  ],
  faqs: FAQS,
  hideExcerptOnPage: true,
  content: (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            '@id': `${PAGE_URL}#agencies`,
            name: 'UK ecommerce SEO agencies compared (2026)',
            itemListOrder: 'https://schema.org/ItemListUnordered',
            numberOfItems: FIRMS.filter((a) => a.group !== 'commerce').length,
            itemListElement: FIRMS.filter((a) => a.group !== 'commerce').map((a, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: a.name,
              url: a.url,
            })),
          }),
        }}
      />

      <div className="not-prose rounded-xl border border-gray-200 border-l-4 border-l-[#B23E13] bg-[#FAFAF7] p-5 mb-8">
        <p className="font-semibold text-[#0F0F12] mb-1">The short answer</p>
        <p className="text-[#3A3A38] mb-3">
          The best ecommerce SEO company in the UK is the agency that knows your platform and shows results on stores like yours. Shopify: Eastside Co, StudioHawk UK, s360 UK. Magento or Adobe Commerce: Envisage Digital, Polaris. Big catalogues or a platform move: Edge45, Bring Digital, Seed. Links: Reboot Online. A small senior team: Glass Digital.
        </p>
        <p className="text-[#3A3A38]">
          We read every firm&rsquo;s site on 21 October 2026. FactoryJet wrote this guide and is listed last.
        </p>
      </div>

      <p className="mb-4">
        Search still sells products in the UK. Online sales were <strong>27.3% of all UK retail in August 2026</strong>{' '}(<a href="https://www.ons.gov.uk/businessindustryandtrade/retailindustry/timeseries/j4mc/drsi" className={link} rel="noopener" target="_blank">ONS series J4MC</a>), and Ofcom found that <strong>about 30% of UK searches now show an AI Overview</strong>{' '}(<a href="https://www.ofcom.org.uk/media-use-and-attitudes/online-habits/from-apps-to-ai-search-how-the-uk-goes-online-in-2025" className={link} rel="noopener" target="_blank">Ofcom Online Nation 2025</a>). An ecommerce SEO agency&rsquo;s job is to get your category and product pages into both.
      </p>
      <p className="mb-4">
        Search Google UK for &ldquo;ecommerce seo agency uk&rdquo; and many of the top results are lists of agencies. We opened seven of them on 21 October 2026. One blocked us, one no longer exists (it returns HTTP 410) and one had no list, so we read the archived copy of the missing one and five in total. <strong>All four lists written by agencies put their own firm in first place.</strong>{' '}Between them the five named 60 agencies, and only 7 appeared on more than one list. Google&rsquo;s AI Overview for the same search quoted a price of &ldquo;£750 to £3,000+&rdquo; a month; the only page we found with that range was one of those self-ranking lists, which gives no source for it.
      </p>
      <p className="mb-4">
        So this guide starts from each agency&rsquo;s own website. For every firm we noted where it is based, which platforms it names, what its ecommerce SEO page actually covers, one result it publishes for an ecommerce client, and any price it prints. Every fact is dated and linked.
      </p>
      <p className="mb-4">
        <strong>A note on who wrote this.</strong>{' '}FactoryJet builds online stores and runs <a href="/uk/ecommerce-seo" className={link}>ecommerce SEO for UK stores</a>, so we are on this list, in the last group. Listing yourself is common on pages like this; it is a good reason to read every list, ours included, with care. This list shares no firm with our <a href="/blog/best-seo-agencies-uk" className={link}>list of the best SEO agencies in the UK</a>{' '}apart from us: that one covers every kind of business, this one only online stores.
      </p>
      <p className="mb-6">
        A few terms first. <strong>Category pages</strong>{' '}(also called collection or PLP pages) list products of one type, like &ldquo;women&rsquo;s trainers&rdquo;. <strong>Faceted navigation</strong>{' '}is the set of filters on those pages. A <strong>migration</strong>{' '}is moving the store to a new platform, domain or URL structure. <strong>Product schema</strong>{' '}is code that tells Google a product&rsquo;s price, stock and reviews. <strong>Google Merchant Center</strong>{' '}is where you send product data so items can appear in Google&rsquo;s shopping results. <strong>GEO</strong>{' '}(generative engine optimisation) means work aimed at AI answers such as ChatGPT and Google AI Overviews.
      </p>
      <p className="mb-6">
        A few more come up in the profiles. <strong>Crawl budget</strong>{' '}is how many of your pages Google will fetch in a given period, and filter pages can use it up. A <strong>canonical tag</strong>{' '}tells Google which of two near-identical pages is the main one. <strong>Hreflang</strong>{' '}tags tell Google which country or language version of a page to show. <strong>Liquid</strong>{' '}is the code Shopify themes are written in. <strong>Core Web Vitals</strong>{' '}are Google&rsquo;s measures of how fast and steady a page feels to load. <strong>GA4</strong>{' '}is Google Analytics 4. <strong>DR</strong>{' '}(Domain Rating) is Ahrefs&rsquo; 0 to 100 score for the strength of a site&rsquo;s links, and <strong>PageRank</strong>{' '}is Google&rsquo;s name for the value a link passes between pages.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The UK ecommerce SEO agencies at a glance</h2>
      <p className="mb-4">
        Scan this first. Find the rows that match your platform and size, then read those profiles in full.
      </p>
      <p className="md:hidden text-sm text-gray-600 mb-2">Swipe sideways to see every column.</p>
      <div className="mb-8 not-prose" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <table className="w-full border-collapse text-sm" style={{ minWidth: 760 }}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Agency</th>
              <th className="p-3 text-left border border-gray-700">Best for</th>
              <th className="p-3 text-left border border-gray-700">Where based</th>
              <th className="p-3 text-left border border-gray-700">Type</th>
              <th className="p-3 text-left border border-gray-700">Platforms named</th>
            </tr>
          </thead>
          <tbody>
            {FIRMS.map((a) => (
              <tr key={a.name} className={a.name.startsWith('FactoryJet') ? 'bg-orange-50' : 'odd:bg-white even:bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-semibold align-top">{a.name}</td>
                <td className="p-3 border border-gray-200 align-top">{a.bestFor}</td>
                <td className="p-3 border border-gray-200 align-top">{a.based}</td>
                <td className="p-3 border border-gray-200 align-top">{a.type}</td>
                <td className="p-3 border border-gray-200 align-top">{a.platforms}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">How we built this list</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Start from the search results.</strong>{' '}We pulled Google UK results and the &ldquo;People also ask&rdquo; questions for 16 ecommerce SEO searches on 21 October 2026, including &ldquo;ecommerce seo agency uk&rdquo;, &ldquo;shopify seo agency&rdquo;, &ldquo;magento seo agency&rdquo; and &ldquo;ecommerce seo cost uk&rdquo;.</li>
        <li><strong>Read the lists that rank.</strong>{' '}We counted which agencies each list names and where each publisher put itself.</li>
        <li><strong>Check each agency on its own site.</strong>{' '}We checked 19 agencies&rsquo; ecommerce SEO, about, contact and pricing pages on 21 October 2026. Every description below comes from those pages and links to them.</li>
        <li><strong>Keep only ecommerce work.</strong>{' '}A firm made the main list if its own site shows an ecommerce SEO service and named ecommerce clients. The firms we checked but did not profile are listed further down, with the reason.</li>
        <li><strong>No scores we cannot prove.</strong>{' '}We have not hired these firms, so there are no star ratings or rankings. We say who each one suits and give one question worth asking it.</li>
        <li><strong>Prices only from the firm.</strong>{' '}Where a firm prints a price, a minimum or a budget band, we copy it exactly and link the page. We never guess another company&rsquo;s price.</li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4">What each agency&rsquo;s ecommerce SEO page covers</h2>
      <p className="mb-4">
        Five jobs separate ecommerce SEO from ordinary SEO: controlling filter pages, moving platforms safely, product schema, Merchant Center product data and visibility in AI answers. This table shows which of the five each firm names on its own ecommerce SEO pages. &ldquo;Not named&rdquo; means we did not find it on the pages we read, not that the firm cannot do it, so ask.
      </p>
      <p className="md:hidden text-sm text-gray-600 mb-2">Swipe sideways to see every column.</p>
      <div className="mb-4 not-prose" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <table className="w-full border-collapse text-sm" style={{ minWidth: 720 }}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Agency</th>
              {COVER_COLS.map((c) => (
                <th key={c.key} className="p-3 text-left border border-gray-700">{c.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {FIRMS.map((a) => (
              <tr key={a.name} className={a.name.startsWith('FactoryJet') ? 'bg-orange-50' : 'odd:bg-white even:bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-semibold align-top">{a.name}</td>
                {COVER_COLS.map((c) => (
                  <td key={c.key} className="p-3 border border-gray-200 align-top">{markText(a.covers[c.key])}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        Three of the ten outside agencies name all five: Eastside Co, Edge45 and Seed. Polaris names four and sells migrations as a separate service. Eight name AI search on their own pages, but only four name faceted navigation, the job that most often wastes a large store&rsquo;s crawl budget.
      </p>

      {GROUPS.map((g) => (
        <div key={g.key}>
          <h2 className="text-2xl font-bold mt-10 mb-4">{g.heading}</h2>
          <p className="mb-6">{g.intro}</p>
          {FIRMS.filter((a) => a.group === g.key).map((a) => (
            <section key={a.name} className="mb-8">
              <h3 className="text-xl font-bold mt-6 mb-2">{a.name}</h3>
              <p className="mb-3">{a.what}</p>
              <ul className="list-disc pl-6 mb-3 space-y-1">
                <li><strong>Ecommerce clients named on its site:</strong> {a.clients}</li>
                {a.proof ? <li><strong>A result it publishes:</strong> {a.proof}</li> : null}
                <li><strong>Price:</strong> {a.price}</li>
                <li><strong>Worth asking them:</strong> {a.ask}</li>
              </ul>
              <p className="text-sm text-gray-600">
                Source, read 21 October 2026:{' '}
                <a href={a.source} className={link} rel="noopener" target={a.source.startsWith('https://factoryjet.com') ? undefined : '_blank'}>
                  {a.source.replace('https://', '')}
                </a>
              </p>
              {a.name === 'Polaris Agency' && (
                <figure className="my-8 not-prose">
                  <img
                    src={`${IMG}-filters.webp`}
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    alt="Seen over his shoulder, a man with short twists in a rust overshirt works on a laptop showing a column of filter checkboxes beside a grid of product tiles, with two plain shoe boxes on the desk"
                    className="w-full h-auto rounded-xl"
                  />
                  <figcaption className="text-sm text-gray-600 mt-2">Every tick in a filter column can create a new web address. Deciding which of them Google should crawl is most of faceted navigation SEO.</figcaption>
                </figure>
              )}
              {a.name === 'Seed' && (
                <aside aria-label="Free ecommerce SEO audit" className="not-prose my-10 rounded-xl border border-gray-200 border-l-4 border-l-[#B23E13] bg-[#FAFAF7] px-5 py-6 md:px-8">
                  <p className="font-semibold text-xl text-[#0F0F12] mb-2">Not sure which of these fits your store?</p>
                  <p className="text-[#3A3A38] mb-4">
                    Our free ecommerce SEO audit crawls your store and names the ten to twenty pages worth fixing first, whoever you hire to fix them.
                  </p>
                  <a href="/uk/ecommerce-seo" className="inline-flex items-center rounded-full bg-[#B23E13] px-6 py-3 font-semibold text-white no-underline hover:opacity-90">
                    Book a free ecommerce SEO audit
                  </a>
                </aside>
              )}
            </section>
          ))}
        </div>
      ))}

      <h2 className="text-2xl font-bold mt-10 mb-4">Other agencies we checked</h2>
      <p className="mb-4">
        These firms came up in the search results or in other lists. We read their sites on the same day and kept the notes here so you can see what was checked, not only what made the cut.
      </p>
      <div className="overflow-x-auto mb-8 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Agency</th>
              <th className="p-3 text-left border border-gray-700">What we found on 21 October 2026</th>
            </tr>
          </thead>
          <tbody>
            {ALSO_CHECKED.map((f) => (
              <tr key={f.name} className="odd:bg-white even:bg-gray-50">
                <td className="p-3 border border-gray-200 font-semibold align-top">
                  <a href={f.url} className={link} rel="noopener" target="_blank">{f.name}</a>
                </td>
                <td className="p-3 border border-gray-200 align-top">{f.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">How much does an ecommerce SEO agency cost in the UK?</h2>
      <p className="mb-4">
        Usually £1,500 to £10,000 or more a month, depending on catalogue size and competition. Two UK pricing guides we read on 21 October 2026 give ecommerce-specific ranges: <a href="https://renhaoseo.com/uk/compare/seo-pricing/" className={link} rel="noopener" target="_blank">Ren Hao SEO</a>{' '}puts ecommerce work at £1,500 to £8,000+ a month, and <a href="https://blog.gorilla.marketing/how-much-does-seo-cost/" className={link} rel="noopener" target="_blank">Gorilla Marketing</a>{' '}says monthly budgets &ldquo;range from £2,000 for smaller stores to £10,000+ for competitive retail brands&rdquo;. <a href="https://whitehat-seo.co.uk/blog/seo-package-prices" className={link} rel="noopener" target="_blank">Whitehat SEO&rsquo;s UK pricing guide</a>{' '}(updated 29 July 2026) adds that competitive sectors, ecommerce among them, carry 30 to 50% pricing premiums, and that a large legacy catalogue can need £5,000 to £15,000 of upfront fixes first.
      </p>
      <p className="mb-4">Here is what the agencies themselves print, copied exactly:</p>
      <p className="md:hidden text-sm text-gray-600 mb-2">Swipe sideways to see every column.</p>
      <div className="mb-4 not-prose" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <table className="w-full border-collapse text-sm" style={{ minWidth: 600 }}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Agency</th>
              <th className="p-3 text-left border border-gray-700">What its site says</th>
              <th className="p-3 text-left border border-gray-700">Kind of figure</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold align-top"><a href="https://www.polarisagency.com/seo/seo-pricing/" className={link} rel="noopener" target="_blank">Polaris</a></td>
              <td className="p-3 border border-gray-200 align-top">£3,000 - £5,000 per month (SME); £6,500 - £10,000 per month; £12,500 - £19,500 per month (enterprise); projects from £5,450 + VAT</td>
              <td className="p-3 border border-gray-200 align-top">Price bands</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold align-top"><a href="https://www.rebootonline.com/contact/" className={link} rel="noopener" target="_blank">Reboot Online</a></td>
              <td className="p-3 border border-gray-200 align-top">&ldquo;We work with clients from £2k monthly investment upwards.&rdquo;</td>
              <td className="p-3 border border-gray-200 align-top">Minimum</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold align-top"><a href="https://victory.digital/seo-packages" className={link} rel="noopener" target="_blank">Victory Digital</a></td>
              <td className="p-3 border border-gray-200 align-top">£980/mo, £1,960/mo, £2,940/mo, £3,920/mo (15, 30, 45 or 75 hours; 3 or 6 month terms)</td>
              <td className="p-3 border border-gray-200 align-top">General SEO packages</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold align-top"><a href="https://weareyellowball.com/other-digital-marketing/seo/" className={link} rel="noopener" target="_blank">Yellowball</a></td>
              <td className="p-3 border border-gray-200 align-top">&ldquo;start from just £2,000 per month&rdquo; (SEO page); &ldquo;start from just £1,500/month&rdquo; (cost guide)</td>
              <td className="p-3 border border-gray-200 align-top">Starting prices (two pages differ)</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold align-top"><a href="https://edge45.co.uk/contact/" className={link} rel="noopener" target="_blank">Edge45</a></td>
              <td className="p-3 border border-gray-200 align-top">Monthly budget options from £500 to £5,000+</td>
              <td className="p-3 border border-gray-200 align-top">Enquiry form bands</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold align-top"><a href="https://www.envisagedigital.co.uk/contact-us/" className={link} rel="noopener" target="_blank">Envisage Digital</a></td>
              <td className="p-3 border border-gray-200 align-top">&ldquo;Under £5,000&rdquo; to &ldquo;£100,000+&rdquo; (builds and SEO together)</td>
              <td className="p-3 border border-gray-200 align-top">Enquiry form bands</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        The other firms publish no SEO price. Glass Digital and StudioHawk UK both say a minimum applies without giving the figure. For the full picture by business type, including audits, day rates and VAT, see our <a href="/blog/seo-cost-uk-2026" className={link}>guide to SEO cost in the UK</a>.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">What an ecommerce SEO engagement should cover</h2>
      <p className="mb-4">
        Use this as a checklist when you compare proposals. Each item links to Google&rsquo;s own documentation, read on 21 October 2026.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3">Category and product pages</h3>
      <p className="mb-4">
        Category pages usually target the biggest buying searches (&ldquo;oak dining tables&rdquo;), and product pages the long, specific ones (&ldquo;6 seater extending oak table&rdquo;). Expect keyword mapping so two pages do not compete for one search, copy above or below the product grid, internal links between related categories, and unique product descriptions in place of the manufacturer&rsquo;s text. Ask which pages the agency would fix first and why.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3">Faceted navigation and crawl control</h3>
      <p className="mb-4">
        Filters build new web addresses for every combination of size, colour and price. Google&rsquo;s <a href="https://developers.google.com/search/docs/crawling-indexing/crawling-managing-faceted-navigation" className={link} rel="noopener" target="_blank">faceted navigation guide</a>{' '}(updated 18 December 2025) says these can create infinite URL spaces and lead to overcrawling. It gives two routes: block filter pages from being crawled if they do not need to rank, or follow its rules for the ones that should. A good agency crawls your store first, because there are always more filter pages than the owner expects, and keeps the filters people actually search for (&ldquo;black leather sofa&rdquo;) open to Google.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3">Migrations without losing rankings</h3>
      <p className="mb-4">
        Moving from WooCommerce or Magento to Shopify is where stores lose the most organic revenue in one go. Google&rsquo;s <a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" className={link} rel="noopener" target="_blank">site move guide</a>{' '}(updated 20 August 2026) recommends permanent server redirects such as 301 and 308, says they do not lose PageRank, and advises against redirect chains. The work is a full map of old to new addresses, tested before launch, then weeks of Search Console checks. We wrote a longer guide on <a href="/blog/ecommerce-replatforming-without-losing-seo-2026" className={link}>replatforming without losing SEO</a>, and if the move is to Shopify, see our <a href="/uk/shopify-migration" className={link}>UK Shopify migration service</a>.
      </p>
      <figure className="my-8 not-prose">
        <img
          src={`${IMG}-migration.webp`}
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          alt="An older woman with short grey hair and glasses on a cord checks boxes on white shelving with a clipboard, while a man in a black t-shirt and orange beanie holds a tablet beside her in a bright stockroom"
          className="w-full h-auto rounded-xl"
        />
        <figcaption className="text-sm text-gray-600 mt-2">A migration is a stock check for web addresses. Every product and category page needs a new home, or its rankings go with it.</figcaption>
      </figure>

      <h3 className="text-xl font-bold mt-6 mb-3">Product schema</h3>
      <p className="mb-4">
        Google&rsquo;s <a href="https://developers.google.com/search/docs/appearance/structured-data/product" className={link} rel="noopener" target="_blank">product structured data guide</a>{' '}splits it in two: product snippets for pages where people cannot buy (reviews, comparisons), and merchant listings for pages where they can. Merchant listing markup can carry sizing, shipping and returns details. On a store, that means merchant listing markup on every product page, with price and stock that match what the page shows.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3">Google Merchant Center and free listings</h3>
      <p className="mb-4">
        Products can appear in Google&rsquo;s shopping results without paying for ads. Google&rsquo;s <a href="https://support.google.com/merchants/answer/9199328" className={link} rel="noopener" target="_blank">free listings help page</a>{' '}says eligible products may show on Search, Images, Lens, YouTube, Gemini, the Shopping tab and Business Profiles. It also says turning the setting on gives permission to show products but does not guarantee they will appear, and that matching depends on the data you send. Feed quality is SEO work now, and five of the ten outside agencies above name it.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3">AI Overviews for product searches</h3>
      <p className="mb-4">
        Google&rsquo;s <a href="https://developers.google.com/search/docs/appearance/ai-features" className={link} rel="noopener" target="_blank">guide to AI features</a>{' '}says there are &ldquo;no additional requirements&rdquo; to appear in AI Overviews or AI Mode beyond normal SEO. Ofcom found about 30% of UK searches show an AI Overview. For a store, the same groundwork helps in both: accurate product data, category copy that answers buying questions (&ldquo;which oak table seats eight?&rdquo;), and your brand named on sites you do not own. Ask an agency how it measures AI referrals in GA4, not only rankings.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">How to choose an ecommerce SEO agency in the UK</h2>
      <p className="mb-4">
        Start with your platform, because SEO fixes on Shopify, Magento and WooCommerce are made in different places. Then check proof: one published result on a store like yours, with revenue or organic traffic, not only rankings. Google&rsquo;s own advice on <a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo" className={link} rel="noopener" target="_blank">hiring an SEO</a>{' '}(updated 5 June 2026) is to ask for examples of past work and how results will be explained, to give Search Console read access only at first, and to walk away from anyone who guarantees first place.
      </p>
      <p className="mb-4">
        Add four ecommerce questions. Who changes the code on our store? What will you do about our filter pages? How do you measure organic revenue in GA4? What is the notice period? The answer to the first one matters most: an SEO plan that waits months for a developer earns nothing in the meantime.
      </p>
      <p className="mb-6">
        If you run a Shopify store and are choosing a build partner as well, our list of <a href="/blog/best-shopify-plus-agencies-uk-2026" className={link}>Shopify Plus agencies for UK brands</a>{' '}covers 15 firms by buyer type, and our <a href="/uk/shopify-seo" className={link}>Shopify SEO service</a>{' '}sets out the Shopify-specific fixes.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Sources</h2>
      <p className="mb-4">
        All read on 21 October 2026: each agency&rsquo;s own pages, linked in its profile and in the tables above; <a href="https://www.ons.gov.uk/businessindustryandtrade/retailindustry/timeseries/j4mc/drsi" className={link} rel="noopener" target="_blank">ONS internet sales as a share of retail, series J4MC</a>{' '}(August 2026 value); <a href="https://www.ofcom.org.uk/media-use-and-attitudes/online-habits/from-apps-to-ai-search-how-the-uk-goes-online-in-2025" className={link} rel="noopener" target="_blank">Ofcom Online Nation 2025</a>; Google Search Central on <a href="https://developers.google.com/search/docs/crawling-indexing/crawling-managing-faceted-navigation" className={link} rel="noopener" target="_blank">faceted navigation</a>, <a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" className={link} rel="noopener" target="_blank">site moves</a>, <a href="https://developers.google.com/search/docs/appearance/structured-data/product" className={link} rel="noopener" target="_blank">product structured data</a>, <a href="https://developers.google.com/search/docs/appearance/ai-features" className={link} rel="noopener" target="_blank">AI features</a>{' '}and <a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo" className={link} rel="noopener" target="_blank">hiring an SEO</a>; <a href="https://support.google.com/merchants/answer/9199328" className={link} rel="noopener" target="_blank">Google Merchant Center free listings</a>; and the price guides from <a href="https://renhaoseo.com/uk/compare/seo-pricing/" className={link} rel="noopener" target="_blank">Ren Hao SEO</a>, <a href="https://blog.gorilla.marketing/how-much-does-seo-cost/" className={link} rel="noopener" target="_blank">Gorilla Marketing</a>{' '}and <a href="https://whitehat-seo.co.uk/blog/seo-package-prices" className={link} rel="noopener" target="_blank">Whitehat SEO</a>. The lists we tallied were published by 6S Marketers, 5MS, Charle, ClickSlice (archived copy, 11 May 2026) and RevenueBase.
      </p>

      <p className="mb-6">
        <strong>Want a second opinion on your shortlist?</strong>{' '}Send us your store through our <a href="/uk/ecommerce-seo" className={link}>free ecommerce SEO audit</a>. We crawl it, tell you what is costing you organic revenue, and quote a fixed price in writing before any work starts.
      </p>
    </>
  ),
};
