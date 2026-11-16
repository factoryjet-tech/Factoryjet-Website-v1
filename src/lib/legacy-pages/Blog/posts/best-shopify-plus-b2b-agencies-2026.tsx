import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

const SLUG = 'best-shopify-plus-b2b-agencies-2026';
const PAGE_URL = `https://factoryjet.com/blog/${SLUG}`;
const READ_ON = '16 November 2026';
const TITLE = 'Best Shopify Plus B2B Agencies for Distributors and Manufacturers (2026): 12 Compared';
const META_DESCRIPTION =
  'Compare 12 agencies that build Shopify Plus B2B wholesale stores: company accounts, customer price lists, net terms and ERP sync. Tiers, ERPs and prices checked 16 Nov 2026.';

// Every fact about every firm below was read on that firm's own website and,
// where one exists, its Shopify Partner Directory profile on 16 November 2026.
// `source` is the main page read, `hqSource` the page that gave the address,
// `directory` the Shopify profile. Nobody paid to be listed and the order is
// not a ranking. The table, the profiles and the ItemList schema all map from
// this one array, so they cannot drift apart.
interface Firm {
  name: string;
  url: string;
  source: string;
  hqSource?: string;
  directory?: string;
  extra?: { label: string; href: string }[];
  tier: string;
  based: string;
  serves: string;
  b2bShown: string;
  erps: string;
  price: string;
  what: string;
  bestFor: string;
  ask: string;
}

const FIRMS: Firm[] = [
  {
    name: 'Uncap',
    url: 'https://www.uncap.com/',
    source: 'https://www.uncap.com/shopify-agency',
    directory: 'https://www.shopify.com/partners/directory/partner/uncap',
    tier: 'Platinum',
    based: 'Chicago, Illinois (8770 West Bryn Mawr Ave)',
    serves: 'Manufacturers, distributors and wholesalers doing roughly $2 million to $50 million in revenue',
    b2bShown: 'Kooks Headers (Infor ERP sync and fitment search), ULE Group (250,000+ SKUs with Epicor sync), Canon Medical (request-for-quote buying)',
    erps: 'Epicor, Infor, Oracle, Dynamics 365 Business Central, Dynamics 365 F&O, Sage 100 and Acumatica, each tied to a named client',
    price: '$7,500 fixed-price Blueprint plan; builds typically $25,000 to $150,000',
    what: 'Uncap puts B2B at the center of everything it sells. Its page lists company profiles, buyer roles, price lists by customer, quick order, reorder lists, minimums, case packs and net terms at checkout. It names an ERP for each of seven clients, which is rare on an agency site. It sells its own apps for quotes, buyer portals, parts diagrams and vehicle fitment. Most work starts with Uncap Blueprint, a $7,500 fixed-price plan delivered in four weeks and credited toward the build. Its directory profile says it has been a Shopify partner since 2013.',
    bestFor: 'Manufacturers and distributors between about $2M and $50M whose main problem is B2B ordering tied to an ERP.',
    ask: 'Which past client ran the same ERP as you, and whether you can talk to them.',
  },
  {
    name: 'SDG (Spiegel Design Group)',
    url: 'https://www.sdg.la/',
    source: 'https://www.sdg.la/shopify-b2b/',
    directory: 'https://www.shopify.com/partners/directory/partner/sdg',
    tier: 'Platinum',
    based: 'Los Angeles, California (11693 San Vicente Blvd)',
    serves: 'Enterprise wholesale brands',
    b2bShown: 'Names Mattel, Revlon, Columbia and prAna for wholesale and multi-brand commerce',
    erps: 'NetSuite, Acumatica, Microsoft Dynamics 365',
    price: 'None published',
    what: 'SDG calls itself a B2B Shopify agency for enterprise wholesale. Its B2B page lists company accounts, customer-specific catalogs and pricing, payment terms, a self-serve buyer portal, quick bulk ordering, reorders and CSV uploads, and payment by net terms, ACH bank transfer, saved cards and deposits. It connects Shopify B2B to NetSuite, Acumatica and Microsoft Dynamics 365 so that accounts, contract prices, orders and invoices reach the ERP. Its site says "Since 2006"; its Shopify directory profile says partner since 2008.',
    bestFor: 'Large brands that want wholesale and retail on Shopify, connected to a big ERP.',
    ask: 'Which named wholesale project is closest to yours, and what SDG built for it.',
  },
  {
    name: 'Shero Commerce',
    url: 'https://sherocommerce.com/',
    source: 'https://sherocommerce.com/pages/shopify-b2b-development',
    hqSource: 'https://sherocommerce.com/pages/contact',
    directory: 'https://www.shopify.com/partners/directory/partner/shero',
    tier: 'Platinum',
    based: 'Red Hook, New York (21 Glen Pond Dr), with New York, London, Helsinki and Tirana listed',
    serves: 'B2B and DTC brands; its B2B case studies are manufacturers and dealers',
    b2bShown: 'Camera Source (Magento 2 to Shopify B2B), GEN-Y Hitch (NetSuite via Patchworks, dealer price lists), Painful Pleasures (retail, pro and wholesale prices in one store)',
    erps: 'NetSuite, SAP, Microsoft Dynamics 365, Acumatica, QuickBooks',
    price: 'None published. Paid discovery first; most B2B projects take 8 to 16 weeks',
    what: 'Shero Commerce lists company accounts, customer-specific catalogs and price lists, volume pricing, net terms, purchase orders, EDI purchase order sync and quick order lists. Its B2B page shows real cases: it moved Camera Source from Magento 2 to Shopify B2B with separate logins for retail and dealer buyers, live about four months after signing, and connected GEN-Y Hitch to NetSuite through Patchworks with dealer price lists. It says most Shopify B2B projects take 8 to 16 weeks. Beth and Gentian Shero founded it in 2010.',
    bestFor: 'Manufacturers that sell to dealers and to consumers and need both on one store.',
    ask: 'How long Camera Source took from signing to launch, and what drove that time.',
  },
  {
    name: 'BlueSwitch',
    url: 'https://www.blueswitch.com/',
    source: 'https://www.blueswitch.com/b2b/shopify-b2b-development',
    hqSource: 'https://www.blueswitch.com/contact',
    directory: 'https://www.shopify.com/partners/directory/partner/blueswitch',
    extra: [{ label: 'B2B work', href: 'https://www.blueswitch.com/b2b' }],
    tier: 'Platinum',
    based: 'New York City (29 Broadway)',
    serves: 'Large B2B businesses, including industrial and manufacturing',
    b2bShown: 'True Manufacturing (JD Edwards ERP), L&R Distributors, Sunnen Products (Optimizely to Shopify B2B), TRC Electronics, Oldach HVAC Supply',
    erps: 'JD Edwards and NetSuite, named in case studies',
    price: 'None published',
    what: 'BlueSwitch lists payment terms and invoice orders, tiered and personal pricing, nested customer accounts, spreadsheet order uploads, custom quotes, order approvals and sales rep permissions. Its B2B work page names more than ten wholesale and industrial clients. Its True Manufacturing case study says it connected Shopify to the client\'s JD Edwards ERP. It has built its own set of B2B add-ons, which it calls the Unified Commerce Suite, so a build does not start from zero.',
    bestFor: 'Industrial suppliers that want proven B2B add-ons, quotes and approvals on top of Shopify.',
    ask: 'Which Unified Commerce Suite modules your build would use, and what happens to them if you change agency.',
  },
  {
    name: 'Netalico',
    url: 'https://netalico.com/',
    source: 'https://netalico.com/pages/shopify-plus-b2b-wholesale-agency',
    hqSource: 'https://netalico.com/pages/contact',
    directory: 'https://www.shopify.com/partners/directory/partner/netalico-llc',
    tier: 'Premier',
    based: 'Miami, per its directory profile; its site lists New York, Los Angeles, San Francisco, Chicago and Miami',
    serves: 'Brands doing $2M to $50M in GMV on Shopify Plus, including manufacturers and distributors moving a wholesale portal',
    b2bShown: 'Its B2B page names no B2B case study. Its directory profile lists QEP / ROBERTS / Capitol and Big Green Egg among verified clients',
    erps: 'NetSuite, Acumatica, Fulfil, Cin7, QuickBooks',
    price: '$25,000 to $60,000 for a wholesale channel on an existing Plus store; $60,000 to $150,000 for a B2B store or replatform; $100,000 to $250,000+ for custom or headless B2B',
    what: 'Netalico publishes the clearest B2B price bands we found. Its B2B page says a wholesale channel on an existing Plus store runs $25,000 to $60,000 over 6 to 10 weeks, and a dedicated B2B store or replatform $60,000 to $150,000 over 12 to 20 weeks. It assigns catalogs and price lists per company or location, sets up quick order lists, draft orders, net terms and credit workflows, and builds custom apps for quotes, approvals and rep ordering. It was founded in 2011 by Mark W. Lewis.',
    bestFor: 'Brands already on Shopify Plus that want to add a wholesale channel at a published price.',
    ask: 'For a B2B project it has finished, since its B2B page shows logos but no B2B case study.',
  },
  {
    name: 'ECommerce Partners',
    url: 'https://ecommercepartners.com/',
    source: 'https://ecommercepartners.com/services/shopify-b2b/',
    hqSource: 'https://ecommercepartners.com/',
    directory: 'https://www.shopify.com/partners/directory/partner/ecommerce-partners4',
    extra: [
      { label: 'Prices', href: 'https://ecommercepartners.com/services/shopify-plus/' },
      { label: 'QC Supply case', href: 'https://ecommercepartners.com/case-studies/qc-supply/' },
    ],
    tier: 'Select',
    based: 'Tenafly, New Jersey (4 Washington St), per its site; its directory profile says Englewood',
    serves: 'Manufacturers, distributors and brands selling wholesale alongside retail, typically $3M or more a year',
    b2bShown: 'QC Supply (Magento to Shopify Plus with a custom B2B portal)',
    erps: 'NetSuite, SAP, Microsoft Dynamics, AS400, custom in-house systems',
    price: '$40,000 to $80,000 standard Plus builds; $80,000 to $150,000 with ERP integration, custom checkout and B2B; $150,000 to $300,000+ enterprise migrations',
    what: 'ECommerce Partners lists customer-specific price lists, volume tiers, contract pricing, quick order by SKU, CSV upload, quote requests, approval queues and net terms with credit limits. Its QC Supply case moved a distributor from Magento to Shopify Plus with a custom B2B portal; the case study says the Microsoft Dynamics NAV connector was built by a separate integration partner. It says standard B2B builds take 12 to 16 weeks. It also sells a B2B Buyer Portal app on the Shopify App Store at $39 a month. It was founded in 1998.',
    bestFor: 'Mid-sized wholesalers that want published price bands from a small senior team.',
    ask: 'Who would build your ERP connection: its own team or a partner, as on QC Supply.',
  },
  {
    name: 'Avex',
    url: 'https://www.avexdesigns.com/',
    source: 'https://www.avexdesigns.com/b2b-ecommerce-agency-services/',
    directory: 'https://www.shopify.com/partners/directory/partner/avexdesigns',
    tier: 'Platinum',
    based: 'New York, per its site and directory profile',
    serves: 'Mid-market and enterprise brands in North America, usually alongside an existing DTC business',
    b2bShown: 'UNITE Hair (gated Pro storefront for stylists), FILA (B2B data synced from Salesforce to Klaviyo)',
    erps: 'None named. It says it connects your ERP through Shopify APIs or a proven connector',
    price: 'None published',
    what: 'Avex lists companies with several locations, catalogs, quantity rules, volume pricing, net terms from 7 to 90 days, PO numbers, saved cards, quick order lists and easy reorders, plus Shopify Functions and custom apps. Its B2B work is design-led: for UNITE Hair it extended the consumer store into a gated Pro storefront for professional stylists. It says most of its B2B clients already run a DTC store. Its directory profile says partner since 2012.',
    bestFor: 'Consumer brands adding a trade or pro channel that must look as good as the retail store.',
    ask: 'Which ERP it has connected for a B2B client, since its B2B page names none.',
  },
  {
    name: 'Fyresite',
    url: 'https://www.fyresite.com/',
    source: 'https://www.fyresite.com/services/shopify-b2b/',
    tier: 'Its site says "Shopify Premier agency". We found no directory profile to confirm it',
    based: 'Tempe, Arizona (404 S Mill Ave)',
    serves: 'Enterprise B2B clients across several industries',
    b2bShown: 'NIS America (NetSuite via Celigo), Clé Tile (B2B, custom calculator app), Pooltables.com (custom ERP connector app)',
    erps: 'NetSuite, Epicor',
    price: 'No fixed price. Its quote form offers budgets of $30K+, $60K+, $90K+ and $120K+; it says timelines run 1 to 4 months',
    what: 'Fyresite lists multi-tier pricing, restricted catalogs, quote builders, deposit and payment flows, approval workflows, Avalara tax and point of sale. It names NetSuite and Epicor as common integrations, and its case list includes a two-way NetSuite connection through Celigo for NIS America and a custom ERP connector app for Pooltables.com. It says it has served clients since 2012.',
    bestFor: 'B2B sellers with tax complexity or custom product tools, such as calculators, on Shopify Plus.',
    ask: 'Its current tier in the Shopify directory, since its site uses two different labels.',
  },
  {
    name: 'Superco',
    url: 'https://superco.io/',
    source: 'https://superco.io/pages/shopify-b2b-agency',
    hqSource: 'https://superco.io/pages/contact',
    directory: 'https://www.shopify.com/partners/directory/partner/superco',
    tier: 'Platinum',
    based: 'London, United Kingdom (7 Hatchers Mews); it names UK and US brands as clients',
    serves: 'Consumer brands in food and drink, health, pet and home that also sell to trade',
    b2bShown: 'Ceva (white-label B2B store for US vets), Powder (MarketTime connector for US wholesale), Funkin Cocktails, Kopparberg',
    erps: 'None named on its B2B page',
    price: 'None published',
    what: 'Superco lists company accounts with several buyers and locations, customer-specific price lists, volume pricing, payment terms, invoicing and quick order, all inside Shopify Plus so trade and consumer orders share one admin. Two of its B2B cases are US work: a white-label B2B store for vets in the US for Ceva, and a connector that brings MarketTime orders from US retailers into Shopify for Powder. Its directory profile says partner since 2020.',
    bestFor: 'Consumer brands that sell to shops, bars or clinics and want the trade store to match the brand.',
    ask: 'Which US time zone hours its team covers, since it is based in London.',
  },
  {
    name: 'Swanky',
    url: 'https://swankyagency.com/',
    source: 'https://swankyagency.com/services/b2b-shopify-ecommerce-agency/',
    hqSource: 'https://swankyagency.com/contact-us/',
    extra: [{ label: 'ePackageSupply case', href: 'https://swankyagency.com/portfolio/epackagesupply/' }],
    tier: 'Its site says it was recognized as a Shopify Platinum Partner in 2025. We could not find its directory profile',
    based: 'Exeter, United Kingdom (19 Southernhay West), with Adelaide and Montpellier listed',
    serves: 'Offline B2B businesses moving online, and established B2B ecommerce brands',
    b2bShown: 'Saddleback (gated buyer store, credit application, CSV bulk ordering, ERP integration), ePackageSupply (a US manufacturer), Natural Instinct (B2B migration)',
    erps: 'Sage, connected through Patchworks on Natural Instinct',
    price: 'None published',
    what: 'Swanky has worked only on Shopify since 2012, its about page says. Its B2B page lists four B2B projects. For Saddleback it built a gated store for approved buyers, a custom credit application, CSV upload for bulk orders and a custom ERP integration. It calls ePackageSupply a US manufacturer. For Natural Instinct it built an endpoint so Patchworks could connect Sage ERP to Shopify.',
    bestFor: 'B2B sellers moving from phone and email orders to their first self-serve trade store.',
    ask: 'What the credit application on Saddleback does, and whether you could reuse that approach.',
  },
  {
    name: 'Kensium',
    url: 'https://www.kensium.com/',
    source: 'https://www.kensium.com/shopify',
    hqSource: 'https://www.kensium.com/contact-us',
    extra: [{ label: '3DXTECH case', href: 'https://www.kensium.com/case-study/3dxtech' }],
    tier: 'We could not find its directory profile',
    based: 'Chicago, Illinois (311 S. Wacker Dr), with Mérida and Hyderabad listed',
    serves: 'Manufacturing, industrial supply, wholesale and distribution among its listed industries',
    b2bShown: '3DXTECH (WooCommerce to Shopify Plus with Acumatica, for B2B buyers who needed their own products, prices and terms)',
    erps: 'Acumatica in its Shopify case studies; its menu also lists Dynamics, NetSuite and Sage',
    price: 'None published. It says advanced integrations take 8 to 12+ weeks',
    what: 'Kensium is the firm on this list most tied to one ERP: every Shopify case study we read pairs Shopify with Acumatica. Its 3DXTECH case moved an additive manufacturer from WooCommerce to Shopify Plus and says B2B buyers needed customer-specific products and prices, payment terms, quote approvals and easy reorders. It also sells its own POS, warehouse software and connectors. Its about page says it was founded in 2006.',
    bestFor: 'Manufacturers and distributors that run Acumatica and want one firm that knows both systems.',
    ask: 'Which parts of the Acumatica sync use the standard connector and which it builds itself.',
  },
  {
    name: 'FactoryJet (that is us)',
    url: 'https://factoryjet.com/services/shopify-plus-b2b',
    source: 'https://factoryjet.com/services/shopify-plus-b2b',
    tier: 'Registered Shopify Partner, without a higher tier',
    based: 'Works with US clients remotely; calls in US business hours',
    serves: 'Brands, wholesalers and distributors that sell to retailers and other businesses',
    b2bShown: 'Shopify B2B with company accounts, customer price lists, net terms and quantity rules, synced to an ERP',
    erps: 'NetSuite, Acumatica, Microsoft Dynamics, QuickBooks, Odoo',
    price: 'None published. Fixed price per phase, in writing, after a scoping call',
    what: 'FactoryJet sets up Shopify B2B with company accounts, a price list for each customer, net 30 or net 60 terms and quantity rules such as minimums and case packs. It connects Shopify to NetSuite, Acumatica, Microsoft Dynamics, QuickBooks or Odoo, keeps credit limits and contract prices in the ERP and syncs them to Shopify, and adds Shopify Functions for cart minimums and payment methods shown only to approved companies. Before you sign, it builds a working draft of your store with your own products and one of your price lists. Each phase is priced on its own, and the code sits in your own repository.',
    bestFor: 'Wholesalers that want the store, the ERP sync and later AI agents from one team.',
    ask: 'To see the draft store with your own price list before you sign anything.',
  },
];

// Firms we read but did not list, with the reason. About what we could check, not about the quality of their work.
const CONSIDERED: { name: string; href: string; why: string }[] = [
  { name: 'Elogic Commerce', href: 'https://elogic.co/services/shopify-plus-development-company/', why: 'Headquartered in Tallinn with a New York office. Its named Shopify B2B case, PetHQ, is a store in the UAE, and the directory link on its site returned a 404 when we checked. It publishes a Shopify Plus build range of $50,000 to $250,000+.' },
  { name: 'iWD Agency', href: 'https://www.iwdagency.com/pages/shopify-plus-b2b-services/', why: 'A Plus-tier partner in Austin. Its one Shopify B2B example, Europa Eyewear, is described as a platform "we are building", so we found no finished Shopify B2B store to point to.' },
  { name: 'Codal', href: 'https://codal.com/work/b2bindustrialdistributor/', why: 'A Platinum partner in Chicago with a large Shopify B2B case for an industrial distributor on SAP, but the client is not named and we found no Shopify B2B service page.' },
  { name: 'Anchor Group', href: 'https://anchorgroup.tech/shopify-netsuite-integration', why: 'A NetSuite partner in Sun Prairie, Wisconsin that sells Shopify B2B with NetSuite. Its directory profile says it joined the Shopify partner program in 2025, and we found no named Shopify client yet.' },
  { name: 'Craftberry', href: 'https://craftberry.co/services/shopify-b2b-agency', why: 'A Premier partner based in Varna, Bulgaria, with NetSuite and Odoo work. We found no named case labeled as B2B.' },
  { name: '1Digital Agency', href: 'https://www.1digitalagency.com/shopify-plus-agency/', why: 'A Plus-tier partner in Philadelphia that lists B2B features, but its one B2B case study is a BigCommerce build.' },
  { name: 'Charle Agency', href: 'https://www.charleagency.com/services/shopify-b2b-wholesale/', why: 'A Premier partner in London. Its B2B page names no B2B client.' },
  { name: 'We Make Websites', href: 'https://wemakewebsites.com/', why: 'Its site refused our requests, so we could not check any fact.' },
];

// Shopify Help Center pages, read 16 Nov 2026.
const HELP_PLAN = 'https://help.shopify.com/en/manual/b2b/getting-started/plan-features';
const HELP_TERMS = 'https://help.shopify.com/en/manual/b2b/payment-terms';
const HELP_COMPANIES = 'https://help.shopify.com/en/manual/b2b/companies';
const HELP_QTY = 'https://help.shopify.com/en/manual/b2b/catalogs/quantity-pricing';
const DIRECTORY_URL = 'https://www.shopify.com/partners/directory';

// From the "Shopify B2B features by plan" table on HELP_PLAN.
const NATIVE: { feature: string; lower: string; plus: string }[] = [
  { feature: 'Companies and company locations', lower: 'Yes', plus: 'Yes' },
  { feature: 'Location permissions (location admin, ordering only)', lower: 'Yes', plus: 'Yes' },
  { feature: 'Catalogs (price lists) assigned to B2B markets', lower: 'Up to 3 active assignments', plus: 'Unlimited' },
  { feature: 'Catalogs assigned straight to one company or location', lower: 'No', plus: 'Yes' },
  { feature: 'Quantity rules (minimum, maximum, increment) and price breaks', lower: 'Yes', plus: 'Yes' },
  { feature: 'Net terms and payment reminders', lower: 'Yes', plus: 'Yes' },
  { feature: 'ACH bank payments (US only) and saved cards', lower: 'Yes', plus: 'Yes' },
  { feature: 'Deposits, partial payments, payment per fulfillment', lower: 'No', plus: 'Yes' },
  { feature: 'Checkout to draft, draft order to invoice, PO numbers, easy reorders', lower: 'Yes', plus: 'Yes' },
  { feature: 'Quick order list and trade theme', lower: 'Yes', plus: 'Yes' },
  { feature: 'Sales staff permissions', lower: 'Grow and Advanced only', plus: 'Yes' },
];

const CUSTOM: { need: string; why: string }[] = [
  { need: 'ERP sync of customers, contract prices, stock and invoices', why: 'Shopify holds the store side. Your ERP usually stays the record for prices, stock and what each customer owes, so a connector or custom integration moves the data.' },
  { need: 'Credit limits', why: 'The Shopify features-by-plan table lists no credit limit feature. Agencies keep the limit in the ERP and use it to hold orders, as ECommerce Partners and FactoryJet describe.' },
  { need: 'Taking payment when terms end', why: 'Shopify\'s payment terms page says payments are not captured on their own when terms expire. Someone, or an automation, has to charge the card or record the payment.' },
  { need: 'Quotes and approval chains', why: 'Checkout to draft lets your team review an order. Multi-step quotes and approvals are built by agencies with apps or Shopify Functions; Uncap, BlueSwitch and Fyresite name this work.' },
  { need: 'Freight, case packs beyond quantity rules, payment methods by company', why: 'These are checkout rules, usually built with Shopify Functions on Plus.' },
  { need: 'EDI and punchout', why: 'Large buyers may send orders by EDI or buy from inside their own purchasing system. Shero Commerce lists EDI purchase order sync.' },
];

// Published cost sources, read 16 Nov 2026. Market ranges, not FactoryJet prices.
const RIGBY_URL = 'https://www.rigbyjs.com/guides/b2b-ecommerce-platforms/b2b-commerce-platform-pricing';
const RINGLY_URL = 'https://www.ringly.io/blog/shopify-plus-partner-agency';
const COSTS: { who: string; figure: string; href: string }[] = [
  { who: 'Rigby (B2B platform pricing guide)', figure: 'Shopify Plus implementation about $25,000 to $150,000; it says the higher end is the more common range for B2B because of ERP work, B2B setup and custom checkout logic', href: RIGBY_URL },
  { who: 'Ringly (Shopify Plus agency guide)', figure: 'Lean Plus migration with basic checkout extensions and B2B setup $25,000 to $50,000; full build with custom checkout, B2B, headless and international $50,000 to $250,000+', href: RINGLY_URL },
  { who: 'Netalico (agency on this list)', figure: '$25,000 to $60,000 to add wholesale to an existing Plus store; $60,000 to $150,000 for a B2B store or replatform', href: 'https://netalico.com/pages/shopify-plus-b2b-wholesale-agency' },
  { who: 'Uncap (agency on this list)', figure: 'Fixed-scope B2B builds and migrations typically $25,000 to $150,000, after a $7,500 Blueprint plan', href: 'https://www.uncap.com/shopify-agency' },
  { who: 'ECommerce Partners (agency on this list)', figure: '$80,000 to $150,000 for Plus builds with ERP integration, custom checkout and B2B', href: 'https://ecommercepartners.com/services/shopify-plus/' },
  { who: 'Fyresite (agency on this list)', figure: 'Quote form budget options from $30K+ to $120K+', href: 'https://www.fyresite.com/services/shopify-b2b/' },
];

// Short location for the comparison table; full detail is in `based`.
const CITY: Record<string, string> = {
  Uncap: 'Chicago, IL',
  SDG: 'Los Angeles, CA',
  'Shero Commerce': 'Red Hook, NY',
  BlueSwitch: 'New York, NY',
  Netalico: 'Miami, FL',
  'ECommerce Partners': 'Tenafly, NJ',
  Avex: 'New York, NY',
  Fyresite: 'Tempe, AZ',
  Superco: 'London, UK',
  Swanky: 'Exeter, UK',
  Kensium: 'Chicago, IL',
  FactoryJet: 'Remote, US hours',
};

const others = FIRMS.filter((f) => !f.name.startsWith('FactoryJet'));
const short = (n: string) => n.replace(' (Spiegel Design Group)', '').replace(' (that is us)', '');

const FAQS: FAQItem[] = [
  {
    q: 'Which agency can build a B2B wholesale portal on Shopify Plus?',
    a: 'Several can, and they suit different buyers. Uncap in Chicago focuses only on B2B for manufacturers and distributors doing about $2M to $50M. SDG in Los Angeles builds enterprise wholesale tied to NetSuite, Acumatica or Dynamics 365. Shero Commerce and BlueSwitch in New York show named dealer and industrial cases. Netalico publishes B2B price bands. FactoryJet builds B2B portals synced to NetSuite, Acumatica, Dynamics, QuickBooks or Odoo. We checked each on 16 November 2026.',
  },
  {
    q: 'Which agency can set up Shopify B2B with customer-specific price lists and net terms?',
    a: 'Every firm on this list says it does this. Shopify calls price lists catalogs. On Shopify Plus a catalog can be assigned straight to one company or location, which gives each customer its own prices. Net terms of 7 to 90 days are built in on every B2B plan. Uncap, Shero Commerce, SDG, Netalico, ECommerce Partners and FactoryJet all name customer price lists and net terms on their B2B pages.',
  },
  {
    q: 'What are the best Shopify Plus B2B agencies in 2026?',
    a: 'There is no neutral ranking, so match the firm to your business. For B2B-only focus, Uncap. For enterprise wholesale, SDG. For dealer and manufacturer cases, Shero Commerce and BlueSwitch. For published prices, Netalico and ECommerce Partners. For design-led trade stores, Avex and Superco. For Acumatica shops, Kensium. For first-time B2B sellers, Swanky. For NetSuite and Epicor, Fyresite. For ERP sync with AI agents later, FactoryJet.',
  },
  {
    q: 'Do I need Shopify Plus for B2B?',
    a: 'Not always. Shopify\'s help page says B2B runs on Basic, Grow, Advanced and Plus. Lower plans get companies, net terms, quantity rules, quick order and checkout to draft, with up to 3 active catalog assignments. Plus adds unlimited catalogs, catalogs assigned straight to one company or location, deposits, partial payments and payment per fulfillment. If every customer needs its own price list, you likely need Plus.',
  },
  {
    q: 'What does Shopify B2B do without custom code?',
    a: 'Shopify\'s help pages list companies with several locations, location-level buyer permissions, catalogs with their own prices, quantity rules and price breaks, net terms, payment reminders, ACH and saved cards, checkout to draft, draft order invoices, PO numbers, easy reorders, a quick order list and a trade theme. Deposits, partial payments and direct company catalogs need Plus. We read the pages on 16 November 2026.',
  },
  {
    q: 'What payment terms does Shopify B2B support?',
    a: 'Shopify\'s payment terms page lists net 7, net 15, net 30, net 45, net 60 and net 90, counted from the day the order is placed. It also offers due on fulfillment and a fixed date. Shopify says payments are not captured on their own when terms expire, so your team charges a saved card or records payment received.',
  },
  {
    q: 'Can Shopify B2B handle credit limits?',
    a: 'Not on its own. The Shopify B2B features-by-plan table lists no credit limit feature. Agencies usually keep the credit limit and open balance in your ERP, sync them to Shopify and use them to hold an order or ask for card payment when an account is over its limit. ECommerce Partners lists net terms with credit limits, and FactoryJet keeps limits in the ERP.',
  },
  {
    q: 'How much does a Shopify Plus B2B build cost?',
    a: 'Published ranges cluster between $25,000 and $150,000. Rigby puts Shopify Plus implementation at about $25,000 to $150,000 and says the higher end is more common for B2B. Netalico publishes $25,000 to $60,000 to add wholesale to an existing Plus store and $60,000 to $150,000 for a B2B store. Uncap says its builds typically run $25,000 to $150,000. The Plus plan fee is separate.',
  },
  {
    q: 'How long does a Shopify B2B project take?',
    a: 'Published timelines, read 16 November 2026: Netalico says 6 to 10 weeks to add wholesale to a Plus store and 12 to 20 weeks for a B2B store or replatform. Shero Commerce says most B2B projects take 8 to 16 weeks. ECommerce Partners says 12 to 16 weeks for standard B2B. Fyresite says 1 to 4 months. More price lists, more ERP data and custom checkout add time.',
  },
  {
    q: 'Which Shopify B2B agency works with NetSuite?',
    a: 'SDG, Shero Commerce, Netalico, ECommerce Partners, Fyresite and FactoryJet name NetSuite on their pages. Shero Commerce connected GEN-Y Hitch to NetSuite through Patchworks. Fyresite connected NIS America to NetSuite through Celigo. BlueSwitch names NetSuite in a case study. See our page on Shopify and NetSuite integration for how the data usually flows.',
  },
  {
    q: 'Which Shopify B2B agency works with Acumatica or Microsoft Dynamics?',
    a: 'For Acumatica, Kensium pairs it with Shopify in every case study we read, and Uncap, SDG, Shero Commerce, Netalico and FactoryJet also name it. For Microsoft Dynamics, Uncap names Business Central and Dynamics 365 F&O clients, and SDG, Shero Commerce, ECommerce Partners and FactoryJet name Dynamics. Ask each firm for a live store on your exact ERP version.',
  },
  {
    q: 'Which agency connects Shopify B2B to Epicor, Infor, Sage or JD Edwards?',
    a: 'Uncap names Epicor at ULE Group, Infor Visual at Kooks Headers and Sage 100 at another client. Fyresite names Epicor. Swanky connected Sage to Shopify through Patchworks for Natural Instinct. BlueSwitch connected Shopify to JD Edwards for True Manufacturing. Older ERPs often need custom work, so ask for the field map from a past project.',
  },
  {
    q: 'Which Shopify B2B agencies publish prices?',
    a: 'On 16 November 2026, Netalico published three B2B price bands, Uncap published a $7,500 planning step and a $25,000 to $150,000 build range, and ECommerce Partners published Plus build ranges by complexity. Fyresite shows budget options on its quote form. The other firms quote after a call. FactoryJet quotes a fixed price per phase in writing.',
  },
  {
    q: 'What is a Shopify B2B wholesale portal?',
    a: 'A wholesale portal is a private part of your store where business customers log in and see their own prices, products and payment terms. They can order on net terms, add a PO number, reorder past orders and use a quick order list. On Shopify it can sit inside your main store or run as a separate store just for trade.',
  },
  {
    q: 'Should B2B and DTC run on one Shopify store or two?',
    a: 'Shopify B2B lets one store show trade prices to logged-in companies and retail prices to everyone else. Shero Commerce, SDG and Superco describe running both from one admin. A separate trade store makes sense when trade buyers need a different catalog, look or checkout. Ask any agency why it would choose one or two for you.',
  },
  {
    q: 'What does a Shopify partner tier tell me about a B2B agency?',
    a: 'Shopify\'s partner tiers (Registered, Select, Plus, Premier and Platinum) mostly reflect how much Shopify business a partner brings in. A tier shows scale. It does not show whether a firm has built a B2B store with your ERP. On this list, Uncap, SDG, Shero Commerce, BlueSwitch, Avex and Superco show Platinum in the directory, Netalico Premier and ECommerce Partners Select.',
  },
  {
    q: 'How do I check an agency\'s Shopify partner tier?',
    a: 'Search for it in the Shopify partner directory at shopify.com/partners/directory. The profile shows the tier, primary location, partner-since year and team size. We could not find directory profiles for Fyresite, Swanky or Kensium on 16 November 2026, so their tier labels on this page are what their own sites say. Ask them for the link.',
  },
  {
    q: 'Do I need a B2B app like SparkLayer instead of an agency?',
    a: 'Maybe not either one at first. SparkLayer is a B2B app that adds pricing, terms and ordering to an existing store. Shopify\'s own B2B tools cover a lot on their own. An app or native B2B can be enough for a few price lists and standard terms. An agency earns its fee when you need ERP sync, custom checkout rules or a migration.',
  },
  {
    q: 'Which agencies are based in the US?',
    a: 'Uncap (Chicago), SDG (Los Angeles), Shero Commerce (Red Hook, New York), BlueSwitch (New York City), Netalico (Miami per its profile), ECommerce Partners (Tenafly, New Jersey), Avex (New York), Fyresite (Tempe, Arizona) and Kensium (Chicago). Superco and Swanky are UK firms that show US B2B work. FactoryJet works with US clients remotely and schedules calls in US hours.',
  },
  {
    q: 'What should I ask a Shopify B2B agency before I sign?',
    a: 'Ask which ERP you have connected Shopify B2B to, and can we talk to that client. Ask which system will own prices, stock and credit limits. Ask what Shopify does natively and what you will build. Ask who writes the ERP connector. Ask whether we can see our own products and price list working before we sign, and who owns the code at the end.',
  },
  {
    q: 'Can I move from Magento or WooCommerce B2B to Shopify B2B?',
    a: 'Yes. Shero Commerce moved Camera Source from Magento 2 to Shopify B2B. ECommerce Partners moved QC Supply from Magento to Shopify Plus with a B2B portal. Kensium moved 3DXTECH from WooCommerce to Shopify Plus with Acumatica. BlueSwitch moved Sunnen Products from Optimizely. Plan the move of customer accounts, price lists and order history first.',
  },
  {
    q: 'Who owns the data in a Shopify B2B and ERP setup?',
    a: 'Usually the ERP owns customers, contract prices, stock, credit limits and invoices, and Shopify owns buyer logins, carts, checkout and orders. Orders flow from Shopify to the ERP as sales orders. Prices, stock and balances flow back. Decide this before the build, or your team ends up typing prices in two places.',
  },
  {
    q: 'Does FactoryJet build Shopify Plus B2B stores?',
    a: 'Yes. FactoryJet sets up Shopify B2B with company accounts, a price list for each customer, net 30 or net 60 terms and quantity rules, and syncs them with NetSuite, Acumatica, Microsoft Dynamics, QuickBooks or Odoo. It builds a working draft with your own products and one price list before you sign. It is a registered Shopify Partner and quotes a fixed price per phase.',
  },
  {
    q: 'Why is FactoryJet on its own list?',
    a: 'Because FactoryJet builds Shopify B2B stores, leaving it off would hide a choice from readers. Nobody paid to be listed, and the order is not a ranking. FactoryJet wrote this guide and is on it. Its entry uses the same fields and the same rules as every other firm, and it is placed last.',
  },
];

const link = 'text-[#B23E13] underline';
const ext = { rel: 'noopener', target: '_blank' } as const;
const th = 'p-3 text-left border border-gray-700';
const td = 'p-3 border border-gray-200 align-top';

export const post: BlogPost = {
  id: '856',
  slug: SLUG,
  title: TITLE,
  excerpt:
    'A checked comparison of 12 agencies that build Shopify Plus B2B and wholesale stores for distributors and manufacturers: company accounts, customer price lists, net terms and ERP sync. Shopify tier, B2B work shown, ERPs named and published prices, read on each firm\'s own site on 16 November 2026. FactoryJet is on the list and says so.',
  category: 'E-Commerce Development',
  author: 'Bhavesh Barot',
  date: 'Nov 16, 2026',
  dateModified: 'Nov 16, 2026',
  readTime: '22 min read',
  imageUrl: '/og-default.png',
  imageAlt: 'FactoryJet guide comparing Shopify Plus B2B agencies',
  meta: {
    title: 'Best Shopify Plus B2B Agencies 2026: 12 Compared',
    description: META_DESCRIPTION,
  },
  keyTakeaways: [
    'No single agency is best for every wholesaler. Match the firm to your size, your ERP and whether you also sell to consumers.',
    'Every firm fact was read on that firm\'s own website and its Shopify directory profile on 16 November 2026. Nobody paid to be listed, and the order is not a ranking.',
    'Shopify B2B runs on Basic, Grow, Advanced and Plus. Plus adds unlimited catalogs, catalogs assigned straight to one company, deposits and partial payments.',
    'Credit limits, ERP sync and multi-step quotes are not native features. That is where most agency work goes.',
    'Published build ranges cluster between $25,000 and $150,000: Rigby, Netalico and Uncap all land there.',
    'Netalico, Uncap and ECommerce Partners publish B2B prices. Shero Commerce, Netalico, ECommerce Partners and Fyresite publish timelines from 6 weeks to about 4 months.',
  ],
  faqs: FAQS,
  content: (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              '@id': PAGE_URL,
              url: PAGE_URL,
              name: TITLE,
              description: META_DESCRIPTION,
              inLanguage: 'en-US',
              datePublished: '2026-11-16',
              dateModified: '2026-11-16',
              lastReviewed: '2026-11-16',
              isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com' },
              publisher: { '@id': 'https://factoryjet.com/#organization' },
              about: { '@type': 'Thing', name: 'Shopify Plus B2B and wholesale agencies' },
              speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#answer-first', 'h1', 'h2'] },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Shopify Plus B2B agencies compared (2026)',
              itemListOrder: 'https://schema.org/ItemListUnordered',
              numberOfItems: FIRMS.length,
              itemListElement: FIRMS.map((f, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: short(f.name),
                url: f.url,
              })),
            },
          ]),
        }}
      />

      <div id="answer-first" className="mb-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">The short answer</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          To build a B2B wholesale portal on Shopify Plus with customer price lists, net terms and ERP sync, start with the firm that fits your size and ERP. Uncap focuses only on B2B for $2M to $50M manufacturers and distributors. SDG suits enterprise wholesale on NetSuite, Acumatica or Dynamics 365. Shero Commerce and BlueSwitch show named dealer and industrial work. Netalico and ECommerce Partners publish B2B prices. Kensium suits Acumatica shops. Avex, Superco, Swanky and Fyresite each fit a narrower case. FactoryJet builds the store and the ERP sync together.
        </p>
        <p className="text-gray-800 leading-relaxed">
          We read all 12 on their own sites and in Shopify&rsquo;s partner directory on {READ_ON}. Nobody paid to be listed, and the order is not a ranking. FactoryJet wrote this guide and is on it.
        </p>
      </div>

      <p className="mb-4">
        In November 2026 we put buyer questions about Shopify B2B to AI assistants. Two of them were &ldquo;Which agency can build a B2B wholesale portal on Shopify Plus?&rdquo; and &ldquo;Which agency can set up Shopify B2B with customer-specific price lists and net terms?&rdquo;. The answers leaned on agency &ldquo;best of&rdquo; lists more than on any other kind of page. This page tries to be the list we wanted to find: every fact read at the source, with a link and a date.
      </p>
      <p className="mb-6">
        A few terms in plain English. <strong>B2B</strong> or wholesale means selling to other businesses. A <strong>company account</strong> is one business customer, with its own buyers and locations. A <strong>catalog</strong> is Shopify&rsquo;s word for a price list. <strong>Net terms</strong> such as net 30 let a buyer pay up to 30 days after ordering. An <strong>ERP</strong> is the system that holds orders, stock, prices and accounts, such as NetSuite or Acumatica.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The 12 agencies at a glance</h2>
      <p className="mb-4">Find the rows that match your ERP and size, then read those profiles. &ldquo;Tier&rdquo; is from Shopify&rsquo;s partner directory unless the cell says otherwise.</p>
      <div className="overflow-x-auto mb-8 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className={th}>Firm</th>
              <th className={th}>Shopify tier</th>
              <th className={th}>B2B work shown</th>
              <th className={th}>ERPs named</th>
              <th className={th}>Published price</th>
            </tr>
          </thead>
          <tbody>
            {FIRMS.map((f) => (
              <tr key={f.name} className={f.name.startsWith('FactoryJet') ? 'bg-orange-50' : 'odd:bg-white even:bg-gray-50'}>
                <td className={`${td} font-semibold`}>{short(f.name)}<br /><span className="font-normal text-gray-600">{CITY[short(f.name)]}</span></td>
                <td className={td}>{f.tier}</td>
                <td className={td}>{f.b2bShown}</td>
                <td className={td}>{f.erps}</td>
                <td className={td}>{f.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">How we chose these 12</h2>
      <ol className="list-decimal pl-6 mb-4 space-y-2">
        <li><strong>Start with who buyers are told about.</strong> We collected the agencies AI assistants named for Shopify B2B questions, and pulled Google&rsquo;s top 20 US results for &ldquo;shopify plus b2b agency&rdquo; and &ldquo;shopify b2b agency&rdquo; on {READ_ON} (DataForSEO). We added firms that list B2B on their Shopify partner profiles. That gave 19 candidates.</li>
        <li><strong>Read the firm&rsquo;s own pages.</strong> For each firm we read its B2B service page, its case studies and its contact page. We wrote down only what the firm says about itself: what it builds, named B2B clients, ERPs, prices and timelines.</li>
        <li><strong>Read the Shopify directory.</strong> Each firm&rsquo;s profile gives its tier, primary location and partner-since year. Where a firm&rsquo;s site and its profile disagree, we say so.</li>
        <li><strong>Keep firms that show finished Shopify B2B work.</strong> A firm made the list if its own pages describe at least one named or clearly described Shopify B2B project. Eight candidates did not clear that bar from what we could read; they are listed further down with the reason.</li>
        <li><strong>No scores.</strong> We have not hired these firms, so we give no star ratings. Each profile says who the firm seems to suit and one question worth asking it.</li>
        <li><strong>Prices only from the firm.</strong> We quote a price only when the firm publishes it on its own site, word for word, with the page linked.</li>
      </ol>
      <p className="mb-6">
        Client names and results on this page are each firm&rsquo;s own claims as we read them on {READ_ON}. Firms change their pages, so check the linked source before you rely on a detail.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The agencies, profiled</h2>
      <p className="mb-6">The order is not a ranking. B2B-focused firms come first, then firms that build B2B alongside retail, then us.</p>

      {FIRMS.map((f, i) => (
        <div key={f.name} className="mb-8">
          <h3 className="text-xl font-bold mt-8 mb-2">{i + 1}. {f.name}</h3>
          <p className="text-sm text-gray-600 mb-3">
            <strong>Based:</strong> {f.based}. <strong>Shopify partner tier:</strong> {f.tier}.
          </p>
          <p className="mb-3">{f.what}</p>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li><strong>Best for:</strong> {f.bestFor}</li>
            <li><strong>Who it says it serves:</strong> {f.serves}.</li>
            <li><strong>ERPs named:</strong> {f.erps}.</li>
            <li><strong>Published price:</strong> {f.price}.</li>
            <li><strong>Worth asking:</strong> {f.ask}</li>
          </ul>
          <p className="text-sm text-gray-600">
            Read {READ_ON}:{' '}
            {f.source.startsWith('https://factoryjet.com') ? (
              <a href="/services/shopify-plus-b2b" className={link}>factoryjet.com/services/shopify-plus-b2b</a>
            ) : (
              <a href={f.source} className={link} {...ext}>{f.source.replace('https://', '').replace('www.', '')}</a>
            )}
            {f.hqSource && (
              <>
                {' '}| <a href={f.hqSource} className={link} {...ext}>address</a>
              </>
            )}
            {f.directory && (
              <>
                {' '}| <a href={f.directory} className={link} {...ext}>Shopify directory profile</a>
              </>
            )}
            {f.extra?.map((x) => (
              <React.Fragment key={x.href}>
                {' '}| <a href={x.href} className={link} {...ext}>{x.label}</a>
              </React.Fragment>
            ))}
          </p>
        </div>
      ))}

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 my-8 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">If you want to see it on your own data</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Our <a href="/services/shopify-plus-b2b" className={link}>Shopify Plus B2B service</a> starts with a short scoping call. Before you sign, we build a working draft with your own products and one of your price lists, so you can see the portal first.
        </p>
        <a href="/contact" className="inline-block rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white">Talk to the Founder</a>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Firms we read but did not list</h2>
      <p className="mb-4">
        These firms came up in AI answers, Google results or the directory. We left them off because of what we could or could not check on their own pages on {READ_ON}. It is not a judgment of their work, and any of them may suit you.
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        {CONSIDERED.map((c) => (
          <li key={c.name}><a href={c.href} className={link} {...ext}>{c.name}</a>: {c.why}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Tools you may also need</h2>
      <p className="mb-6">
        Some names in AI answers are software, not agencies. <a href="https://www.sparklayer.io/" className={link} {...ext}>SparkLayer</a> is a B2B app; its site describes B2B pricing, terms and ordering on the store you already have. Connectors such as Celigo and Patchworks move data between Shopify and an ERP: Fyresite names Celigo on its NIS America work, and Shero Commerce and Swanky name Patchworks. An app or connector can cut build time. Someone still has to map your fields and test the sync.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">What Shopify B2B does on its own</h2>
      <p className="mb-4">
        Before you pay an agency, know what the platform already does. <a href={HELP_PLAN} className={link} {...ext}>Shopify&rsquo;s B2B features-by-plan page</a> says B2B runs on the Basic, Grow, Advanced and Plus plans, and not on Starter or Retail. This table comes from that page, read {READ_ON}.
      </p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className={th}>Feature</th>
              <th className={th}>Basic, Grow, Advanced</th>
              <th className={th}>Shopify Plus</th>
            </tr>
          </thead>
          <tbody>
            {NATIVE.map((r) => (
              <tr key={r.feature} className="odd:bg-white even:bg-gray-50">
                <td className={`${td} font-semibold`}>{r.feature}</td>
                <td className={td}>{r.lower}</td>
                <td className={td}>{r.plus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Companies and locations.</strong> <a href={HELP_COMPANIES} className={link} {...ext}>Shopify&rsquo;s companies page</a> says a company is the parent of one or more locations, and each location can have its own tax ID, addresses and contacts. Buyers see the prices, payment terms and checkout set for the location they buy for.</li>
        <li><strong>Payment terms.</strong> <a href={HELP_TERMS} className={link} {...ext}>Shopify&rsquo;s payment terms page</a> lists net 7, 15, 30, 45, 60 and 90, due on fulfillment, and a fixed date. Payments are not captured on their own when terms expire.</li>
        <li><strong>Quantity rules.</strong> <a href={HELP_QTY} className={link} {...ext}>Shopify&rsquo;s quantity page</a> covers increments, minimums, maximums and volume price breaks, set through catalogs.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Where agencies add custom work</h2>
      <p className="mb-4">This is the part you are paying for. Each row is a common need that the native tools above do not cover in full.</p>
      <div className="overflow-x-auto mb-6 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className={th}>Need</th>
              <th className={th}>Why it needs extra work</th>
            </tr>
          </thead>
          <tbody>
            {CUSTOM.map((r) => (
              <tr key={r.need} className="odd:bg-white even:bg-gray-50">
                <td className={`${td} font-semibold`}>{r.need}</td>
                <td className={td}>{r.why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">What a Shopify Plus B2B build costs</h2>
      <p className="mb-4">
        These are published figures from guides and from firms on this list, read {READ_ON}. They are market ranges, not FactoryJet prices. The Shopify Plus plan fee is extra.
      </p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className={th}>Source</th>
              <th className={th}>Published figure (USD)</th>
            </tr>
          </thead>
          <tbody>
            {COSTS.map((c) => (
              <tr key={c.who} className="odd:bg-white even:bg-gray-50">
                <td className={`${td} font-semibold`}><a href={c.href} className={link} {...ext}>{c.who}</a></td>
                <td className={td}>{c.figure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        Four of the six sources put the core of a B2B build between $25,000 and $150,000. What moves you up the range: the number of customer price lists, the ERP and how clean its data is, custom checkout rules, and whether you are also moving off another platform. For a line-by-line view of the integration side, read <a href="/blog/shopify-erp-integration-cost-2026" className={link}>what a Shopify ERP integration costs</a>.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Which agency fits your business</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>&ldquo;We are a $2M to $50M manufacturer or distributor and B2B is the whole point.&rdquo;</strong> Uncap.</li>
        <li><strong>&ldquo;We are a large brand with wholesale and retail and a big ERP.&rdquo;</strong> SDG, or Shero Commerce.</li>
        <li><strong>&ldquo;We sell to dealers and need quotes and approvals.&rdquo;</strong> BlueSwitch, Shero Commerce or Fyresite.</li>
        <li><strong>&ldquo;We already run Shopify Plus and want to add wholesale at a known price.&rdquo;</strong> Netalico.</li>
        <li><strong>&ldquo;We are mid-sized and want published price bands.&rdquo;</strong> ECommerce Partners or Netalico.</li>
        <li><strong>&ldquo;We run Acumatica.&rdquo;</strong> Kensium, or Uncap, SDG and FactoryJet, which also name it.</li>
        <li><strong>&ldquo;We are a consumer brand adding a trade or pro store.&rdquo;</strong> Avex or Superco.</li>
        <li><strong>&ldquo;We take orders by phone and email and this is our first online trade store.&rdquo;</strong> Swanky.</li>
        <li><strong>&ldquo;We want the store and the ERP sync from one team, and AI agents for order work later.&rdquo;</strong> FactoryJet. See <a href="/services/shopify-netsuite-integration" className={link}>Shopify and NetSuite integration</a> and our wider page on <a href="/b2b-ecommerce" className={link}>B2B ecommerce</a>.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Questions to ask before you sign</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Which ERP have you connected Shopify B2B to, and can we talk to that client?</strong> Uncap names an ERP per client. Ask everyone else for the same.</li>
        <li><strong>Which system will own prices, stock and credit limits?</strong> If nobody can say, your team will type prices into two places.</li>
        <li><strong>What does Shopify do natively, and what will you build?</strong> A good answer splits your needs into plan features, Plus features, ERP sync and custom code, like the tables above.</li>
        <li><strong>Who builds the ERP connector?</strong> On QC Supply, ECommerce Partners says a separate partner built it. That can work. You should know up front.</li>
        <li><strong>What is your tier in Shopify&rsquo;s directory today?</strong> Then check it yourself at <a href={DIRECTORY_URL} className={link} {...ext}>shopify.com/partners/directory</a>.</li>
        <li><strong>Can we see our own products and one price list working before we sign?</strong> FactoryJet builds that draft first. Ask any agency for the same.</li>
        <li><strong>Who owns the code and the app accounts at the end?</strong> The answer should be you, in writing.</li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4">What FactoryJet builds for Shopify B2B</h2>
      <p className="mb-4">
        We are FactoryJet, and we have served 500+ businesses since 2014. We are a registered Shopify Partner without a higher tier, which is why our entry says so. Our founder, Bhavesh Barot, joins the first call.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>B2B setup.</strong> Company accounts, a price list per customer from your contracts, net 30 or net 60 terms, and quantity rules such as minimums and case packs.</li>
        <li><strong>ERP sync in both directions.</strong> Orders go to NetSuite, Acumatica, Microsoft Dynamics, QuickBooks or Odoo. Prices, stock, credit limits and invoices come back to Shopify.</li>
        <li><strong>Checkout rules.</strong> Shopify Functions for cart minimums, case packs beyond Shopify&rsquo;s quantity rules, and payment methods shown only to approved companies.</li>
        <li><strong>Terms.</strong> A working draft on your own data before you sign, a fixed price per phase, and code in your own repository.</li>
      </ul>
      <p className="mb-6">
        For more on the options, read <a href="/blog/top-b2b-ecommerce-development-agencies-portals-2026" className={link}>B2B ecommerce development agencies for portals</a>, <a href="/blog/best-shopify-plus-agencies-usa-2026" className={link}>the wider list of Shopify Plus agencies for US brands</a> and <a href="/blog/best-b2b-ecommerce-platform-manufacturers-distributors-2026" className={link}>the best B2B ecommerce platforms for manufacturers and distributors</a>.
      </p>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mb-8 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">Still working out what you need?</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Send us your price lists, payment terms, ERP and how your buyers order today. On a free call the founder will tell you what Shopify does natively, what needs building and whether you need Plus at all.
        </p>
        <a href="/services/shopify-plus-b2b" className="inline-block rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white">See our Shopify B2B service</a>
      </div>

      <p className="text-sm text-gray-600 mb-2">
        {others.length} other firms and FactoryJet. Method and firm facts checked {READ_ON}. Nobody paid to be listed, and the order is not a ranking. FactoryJet wrote this guide and is on it.
      </p>
    </>
  ),
};
