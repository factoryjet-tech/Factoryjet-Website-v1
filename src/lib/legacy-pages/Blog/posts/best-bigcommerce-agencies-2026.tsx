import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

const SLUG = 'best-bigcommerce-agencies-2026';
const PAGE_URL = `https://factoryjet.com/blog/${SLUG}`;
const IMG = `/images/blog/${SLUG}`;
const TITLE = 'Best BigCommerce Agencies and Developers (2026): 14 Compared by Buyer Type, Including Us';
const META_DESCRIPTION =
  'Compare 14 BigCommerce agencies and developers for 2026: B2B Edition, mid-market DTC, headless and migrations. Directory tier, base, systems and how to choose.';

// Sources for FIRMS, all opened on 11 October 2026: `source` is the page on the
// firm's own site that the profile leans on, `alsoRead` a second page on that
// site, `hqSource` the page that shows the address, and `directory` the firm's
// profile in the BigCommerce partner directory (tier and badges come from there).
// No entry is paid for. Array order carries no ranking: entries are grouped by
// buyer type. The ItemList schema is built from this array, so the visible list
// and the schema stay identical.
type Group =
  | 'B2B and wholesale'
  | 'Mid-market DTC'
  | 'Headless and composable'
  | 'Migrations'
  | 'Us';

type Tier = 'Elite' | 'Preferred' | 'Partner' | 'Enrolled';

interface Firm {
  name: string;
  url: string;
  source: string;
  alsoRead?: string;
  hqSource?: string;
  directory?: string;
  tier?: Tier;
  b2bBadge?: boolean;
  group: Group;
  base: string;
  type: string;
  clients: string;
  tools: string;
  erp?: string;
  what: string;
  bestFor: string;
  ask: string;
}

const FIRMS: Firm[] = [
  {
    name: 'Silk Commerce',
    url: 'https://www.silkcommerce.com/',
    source: 'https://www.silkcommerce.com/solutions/b2b/',
    alsoRead: 'https://www.silkcommerce.com/partners/bigcommerce/',
    hqSource: 'https://www.silkcommerce.com/about-us/contact-us/',
    directory: 'https://partners.bigcommerce.com/directory/partner/134278/silk-software',
    tier: 'Elite',
    b2bBadge: true,
    group: 'B2B and wholesale',
    base: 'Irvine, California (47 Discovery, Suite 100). Its contact page also lists Los Angeles and New York',
    type: 'B2B and B2C stores on BigCommerce, with ERP and point of sale integration',
    clients: 'Manufacturers, distributors and other B2B sellers, plus retail brands; its homepage carries client quotes from Gildan and TireHub',
    tools: 'BigCommerce, Adobe Commerce, Shopify Plus, Epicor',
    erp: 'Epicor is listed among its partners; its directory profile lists ERP and point of sale integration',
    what: 'Silk Commerce says it has delivered B2B and B2C commerce for over a decade. Its B2B page is written for manufacturers, distributors and other B2B sellers. It describes self-service tools that let dealers and retailers check order status, submit orders and quotes, see pricing and availability, and reorder online. Its BigCommerce page covers design, development, integration, customization and migration. Its directory profile says it can launch a new B2B store on BigCommerce in weeks. A Gildan executive quoted on its homepage calls Silk a long-term BigCommerce partner.',
    bestFor: 'Manufacturers and distributors that want dealers and retailers to order, reorder and check status online.',
    ask: 'Which ERP systems it has connected to BigCommerce for a business like yours, and who on its team did the work.',
  },
  {
    name: 'IntuitSolutions',
    url: 'https://www.intuitsolutions.net/',
    source: 'https://www.intuitsolutions.net/b2b-ecommerce-solutions-bigcommerce/',
    alsoRead: 'https://www.intuitsolutions.net/bigcommerce-services/migrate-to-bigcommerce/',
    hqSource: 'https://www.intuitsolutions.net/about/',
    directory: 'https://partners.bigcommerce.com/directory/partner/129603/intuitsolutions',
    tier: 'Partner',
    b2bBadge: true,
    group: 'B2B and wholesale',
    base: 'Philadelphia, Pennsylvania (124 Chestnut St)',
    type: 'BigCommerce design, development, B2B and custom checkout work',
    clients: 'Merchants from startups to enterprise brands',
    tools: 'BigCommerce and Shopify; its own checkout app, Ebizio Checkout',
    erp: 'Describes integrations with business systems; the pages we opened name no ERP',
    what: 'IntuitSolutions says it has specialized in migrating, developing and customizing BigCommerce stores since 2009, and its directory profile says its team works on BigCommerce all day, every day. Its B2B page makes a point buyers rarely hear from an agency: B2B Edition is not always required, and most merchants can start selling B2B on standard BigCommerce with the right additions. It builds account-based pricing, payment terms, quick ordering and custom checkout, and sells its own checkout app. It says its migration team is fully in-house.',
    bestFor: 'Sellers adding wholesale to a BigCommerce store who want a straight answer on whether they need B2B Edition.',
    ask: 'Whether your wholesale needs fit standard BigCommerce or B2B Edition, and what in your business decides it.',
  },
  {
    name: 'Anchor Group',
    url: 'https://www.anchorgroup.tech/',
    source: 'https://www.anchorgroup.tech/bigcommerce-netsuite-integration',
    alsoRead: 'https://www.anchorgroup.tech/bigcommerce-partner',
    hqSource: 'https://www.anchorgroup.tech/about-us',
    directory: 'https://partners.bigcommerce.com/directory/partner/1795818/anchor-group',
    tier: 'Elite',
    b2bBadge: true,
    group: 'B2B and wholesale',
    base: 'Sun Prairie, Wisconsin (121 S. Bristol St, Suite 201)',
    type: 'BigCommerce builds and BigCommerce to NetSuite integration',
    clients: 'B2B and B2C businesses that run NetSuite as their ERP',
    tools: 'BigCommerce, NetSuite, SuiteCommerce, Shopify',
    erp: 'NetSuite',
    what: 'Anchor Group works on NetSuite and on the stores connected to it. Its integration page says it builds, improves and supports BigCommerce to NetSuite connections so that orders, inventory, customers, products, fulfillment and financial data move between the two systems. It also says it helps a client decide what should sync and which system should own each piece of data. Its BigCommerce services cover implementation, development, migrations, headless builds and search optimization, and it offers a NetSuite and BigCommerce accelerator. Its homepage says it has launched Sonar, a free AI tool that works inside NetSuite.',
    bestFor: 'Businesses that run NetSuite and want the store and the ERP connection built by one firm.',
    ask: 'Which system would own prices, stock and customer records in your setup, and how often each one syncs.',
  },
  {
    name: 'Jamersan',
    url: 'https://jamersan.com/',
    source: 'https://jamersan.com/',
    alsoRead: 'https://jamersan.com/project/jamersan-constructs-a-digital-breakthrough-for-jl-building-materials-with-bigcommerce-b2b-2/',
    directory: 'https://partners.bigcommerce.com/directory/partner/457938/jamersan',
    tier: 'Preferred',
    b2bBadge: true,
    group: 'B2B and wholesale',
    base: 'Opelika, Alabama',
    type: 'BigCommerce and Shopify builds for parts sellers and trade distributors',
    clients: 'Auto parts and building materials sellers; its case studies name Lordco Auto Parts, Turn14 Powersports and J&L Building Materials',
    tools: 'BigCommerce B2B Edition, Shopify; vehicle fitment data',
    erp: 'A roofing measurement system, GAF QuickMeasure, in its J&L Building Materials case study',
    what: 'Jamersan calls itself a Shopify Plus and BigCommerce agency and dates its work to 1999. Its directory profile says it began working with BigCommerce in 2018 and lists vehicle fitment data among its skills. Its case studies lean toward parts and trade supply. For J&L Building Materials, a building materials distributor whose contractors used to phone in or visit a branch to order, it set up BigCommerce B2B Edition for online ordering and connected a roofing measurement tool that produces a materials list for a house.',
    bestFor: 'Auto parts sellers and trade distributors moving phone and counter orders online.',
    ask: 'How it would handle the fitment data or trade tools your buyers already use.',
  },
  {
    name: 'Groove Commerce',
    url: 'https://www.groovecommerce.com/',
    source: 'https://www.groovecommerce.com/bigcommerce-agency/',
    alsoRead: 'https://www.groovecommerce.com/',
    directory: 'https://partners.bigcommerce.com/directory/partner/125675/groove-commerce',
    tier: 'Preferred',
    b2bBadge: true,
    group: 'Mid-market DTC',
    base: 'Baltimore, Maryland',
    type: 'Design, development and marketing for BigCommerce stores',
    clients: 'Consumer brands; its homepage describes work for the US Open Shop and Elmhurst 1925',
    tools: 'BigCommerce, Shopify, HubSpot, Klaviyo',
    what: 'Groove Commerce designs, builds and markets ecommerce stores, and its directory profile gives 2007 as its founding year. One team covers store design, front and back-end development, search, paid ads and email. It has a framework called Velocity that it says gets a brand selling on BigCommerce in as little as 8 weeks. Its homepage says it overhauled the US Open Shop store on BigCommerce and reports a 36% lift in conversion rate. It also sets up B2B features such as purchase order forms, bulk ordering and payment terms with B2B Edition.',
    bestFor: 'Consumer brands that want one agency for the store and the marketing that feeds it.',
    ask: 'What the 8 week Velocity timeline includes, and what would push your project past it.',
  },
  {
    name: 'DigitlHaus',
    url: 'https://digitlhaus.com/',
    source: 'https://digitlhaus.com/pages/bigcommerce',
    alsoRead: 'https://digitlhaus.com/pages/about',
    hqSource: 'https://digitlhaus.com/pages/contact',
    directory: 'https://partners.bigcommerce.com/directory/partner/295422/digitlhaus-agency',
    tier: 'Preferred',
    b2bBadge: true,
    group: 'Mid-market DTC',
    base: 'Miramar Beach, Florida (495 Grand Blvd, Suite 206)',
    type: 'Custom BigCommerce design, development, replatforming and conversion work',
    clients: 'Enterprise and mid-market D2C and B2B brands',
    tools: 'BigCommerce, Shopify, Klaviyo',
    what: 'DigitlHaus describes itself as a full-service BigCommerce agency for D2C and B2B brands, working with enterprise and mid-market merchants. It says it has launched over 250 custom BigCommerce stores and completed over 150 migrations from other platforms. Its about page says it builds fully custom stores, scopes the entire project upfront so the client knows the precise cost before work starts, and tests heavily before launch. Its services include design, development, replatforming, search optimization and conversion rate work.',
    bestFor: 'Mid-market brands that want a custom-designed BigCommerce store and a full scope before work begins.',
    ask: 'To see the scope document from a past project of your size, with the client name removed.',
  },
  {
    name: 'EYStudios',
    url: 'https://eystudios.com/',
    source: 'https://eystudios.com/services/bigcommerce/',
    alsoRead: 'https://eystudios.com/',
    hqSource: 'https://eystudios.com/our-story/',
    directory: 'https://partners.bigcommerce.com/directory/partner/125713/eystudios',
    tier: 'Preferred',
    b2bBadge: true,
    group: 'Mid-market DTC',
    base: 'Kennesaw, Georgia, in metro Atlanta (114 Townpark Drive, Suite 100)',
    type: 'Brand-led custom store design, development and marketing',
    clients: 'Middle and large-sized businesses in apparel, technology, automotive and collectibles; its homepage names DLT Trading and Springfield Armory',
    tools: 'BigCommerce, Magento, Shopify, Shopware, Klaviyo',
    what: 'Eric and Gina Yonge started EYStudios in 2004 as an illustration agency, and it now builds fully custom ecommerce sites from metro Atlanta. Its site says every theme is custom, with no templates. It says it was an early adopter of BigCommerce, researches each project in depth and writes a detailed scope of work before design starts. Its homepage describes moving DLT Trading to BigCommerce and unifying the Springfield Armory store on the platform. It also sells photography, video, email and paid ad services.',
    bestFor: 'Brands with a strong visual identity that want design, build and content from one studio.',
    ask: 'Who designs and who builds, and whether both would stay on your account after launch.',
  },
  {
    name: 'Codal',
    url: 'https://codal.com/',
    source: 'https://codal.com/capabilities/unified-commerce/bigcommerce/',
    hqSource: 'https://codal.com/about-us/',
    directory: 'https://partners.bigcommerce.com/directory/partner/359336/codal',
    tier: 'Elite',
    b2bBadge: true,
    group: 'Headless and composable',
    base: 'Chicago, Illinois (433 W Van Buren St, Suite 205)',
    type: 'Headless and composable BigCommerce builds, migrations and B2B',
    clients: 'Mid-market and enterprise brands; its directory profile shows Garrett Popcorn, GOREWEAR and DEMDACO among its clients',
    tools: 'BigCommerce and Shopify; headless and composable architecture',
    what: 'Codal calls itself a global technology consultancy and says it is a two-time BigCommerce Partner of the Year. Its about page counts 270+ team members and dates the firm to 2009. On BigCommerce it offers headless builds, where the storefront is separated from the commerce engine, and composable builds, where a business picks each part of its stack. It also runs migrations, has a pre-built accelerator for faster launches and works on BigCommerce B2B, with self-service portals and customer pricing.',
    bestFor: 'Mid-market and enterprise brands that want a custom storefront on top of BigCommerce.',
    ask: 'Why your store needs a headless build, and what your team would have to look after once it is live.',
  },
  {
    name: 'Americaneagle.com',
    url: 'https://www.americaneagle.com/',
    source: 'https://www.americaneagle.com/platforms/bigcommerce',
    hqSource: 'https://www.americaneagle.com/contact-us',
    directory: 'https://partners.bigcommerce.com/directory/partner/125765/americaneagle-com',
    tier: 'Preferred',
    b2bBadge: true,
    group: 'Headless and composable',
    base: 'Des Plaines, Illinois (2600 S River Rd), with nine more US offices on its contact page',
    type: 'Large BigCommerce builds on Stencil, Catalyst and Makeswift, with integrations',
    clients: 'B2B and B2C brands; its BigCommerce page shows case studies for FKA Brands, Badgley Mischka and RDO Equipment Co',
    tools: 'BigCommerce Stencil, Catalyst and Makeswift; ERP, CRM, point of sale and product data systems',
    erp: 'Says it has experience with most major ERP, CRM and point of sale systems; none is named on the page we read',
    what: 'Americaneagle.com says it has been a full-service BigCommerce partner for more than 10 years, building for B2B and B2C brands, and counts 250+ BigCommerce projects. It offers Stencil, Catalyst and Makeswift development, which covers both standard themes and headless storefronts with a visual editor for marketing teams. It says it has experience with most major ERP, CRM and point of sale systems, builds multi-storefront setups for several brands or regions, and offers round-the-clock support.',
    bestFor: 'Larger businesses with several brands, regions or back-office systems to connect.',
    ask: 'Which office and which named team would run your project.',
  },
  {
    name: 'MoJo Active',
    url: 'https://www.mojoactive.com/',
    source: 'https://www.mojoactive.com/apps-platforms',
    alsoRead: 'https://www.mojoactive.com/services/development/ecommerce-ecosystems',
    hqSource: 'https://www.mojoactive.com/contact-us',
    directory: 'https://partners.bigcommerce.com/directory/partner/362472/mojo-active-inc',
    tier: 'Elite',
    b2bBadge: true,
    group: 'Headless and composable',
    base: 'Watsontown, Pennsylvania (116 Main Street)',
    type: 'BigCommerce builds on Catalyst or Stencil, systems integration and marketing',
    clients: 'Its site lists case studies for King Arthur Baking, Lake Champlain Chocolates and Dutch Valley Foods',
    tools: 'BigCommerce, Catalyst, Stencil, Next.js; ERP, order management and CRM systems',
    erp: 'Its directory profile lists ERP, order management, CRM and financial systems; none is named',
    what: 'MoJo Active combines ecommerce development with strategy, creative and marketing in one team. Its BigCommerce directory profile says it builds on BigCommerce with Catalyst or Stencil and Next.js, and connects stores to ERP, order management, CRM and financial systems. Its directory listing describes it as Partner of the Year for 2025 and 2026, an award its profile says covers agency partners in the Americas. Its own site covers replatforming to BigCommerce, product data, payment and shipping rules, and lists King Arthur Baking, Lake Champlain Chocolates and Dutch Valley Foods among its case studies.',
    bestFor: 'Brands that want a Catalyst storefront, back-office connections and marketing from one team.',
    ask: 'Whether it would build your store on Catalyst or Stencil, and why.',
  },
  {
    name: '1Digital Agency',
    url: 'https://www.1digitalagency.com/',
    source: 'https://www.1digitalagency.com/ecommerce-platform-migrations/',
    alsoRead: 'https://www.1digitalagency.com/bigcommerce-experts/',
    hqSource: 'https://www.1digitalagency.com/about-us/',
    directory: 'https://partners.bigcommerce.com/directory/partner/130095/1digital-agency',
    tier: 'Enrolled',
    b2bBadge: false,
    group: 'Migrations',
    base: 'Miami, Florida, per its site footer and directory profile. It was founded in Philadelphia in 2012',
    type: 'Platform migrations, BigCommerce builds and search marketing',
    clients: 'Enterprise DTC brands past $5M in sales and B2B or wholesale operations',
    tools: 'BigCommerce, Shopify Plus, Adobe Commerce, WooCommerce, Volusion, Salesforce Commerce Cloud',
    what: 'Dan Kogan started 1Digital in Philadelphia in 2012. Its migrations page says it moves stores to and from BigCommerce, Shopify Plus, Adobe Commerce, WooCommerce, Volusion and Salesforce Commerce Cloud, and has completed 200+ migrations. It says it maps, moves and verifies the catalog, customers and order history, and redirects every old web address so shoppers and search engines land in the right place on launch day. On BigCommerce it also takes on B2B Edition, multi-storefront and Catalyst headless builds, and it sells search and paid ad services.',
    bestFor: 'Stores moving to BigCommerce from Volusion, Magento or another platform that cannot afford to lose search traffic.',
    ask: 'To see the redirect map and the data check report from a past migration.',
  },
  {
    name: 'Classy Llama',
    url: 'https://classyllama.com/',
    source: 'https://classyllama.com/',
    alsoRead: 'https://classyllama.com/bigcommerce/',
    hqSource: 'https://classyllama.com/about/',
    directory: 'https://partners.bigcommerce.com/directory/partner/395672/classy-llama-studios',
    tier: 'Preferred',
    b2bBadge: true,
    group: 'Migrations',
    base: 'Springfield, Missouri (2215 W. Chesterfield Blvd, Suite 20)',
    type: 'Replatforming for mid-market ecommerce, B2B portals and integrations',
    clients: 'Mid to upper market ecommerce and B2B companies',
    tools: 'BigCommerce, Adobe Commerce, Magento, Shopify; ERP, CRM and product data integrations',
    erp: 'Lists ERP, CRM and product data integrations as a service; the pages we opened name none',
    what: 'Classy Llama calls itself the replatform agency for mid-market ecommerce and works on Adobe Commerce, Magento, Shopify and BigCommerce. It has been in business since 2007. Beyond new builds and replatforming, it takes on rescues of projects that have gone wrong, builds customer portals for ordering, invoices and tracking, and connects stores to ERP, CRM, product data and payment systems. Its BigCommerce page covers B2B and B2C builds, replatforming and ongoing support.',
    bestFor: 'Mid-market sellers changing platform, or rescuing a build that has stalled.',
    ask: 'Which platform it would recommend for you and why, since it works on four.',
  },
  {
    name: 'Forix',
    url: 'https://forixcommerce.com/',
    source: 'https://forixcommerce.com/bigcommerce-services/',
    directory: 'https://partners.bigcommerce.com/directory/partner/260190/forix',
    tier: 'Partner',
    b2bBadge: false,
    group: 'Migrations',
    base: 'Beaverton, Oregon, near Portland (9800 SW Beaverton-Hillsdale Hwy, Suite 100), with Los Angeles and New York offices',
    type: 'Migrations to BigCommerce, redesigns and conversion work',
    clients: 'B2B and B2C merchants on BigCommerce',
    tools: 'BigCommerce, Magento, Shopify, WooCommerce',
    what: 'Forix says it has a team of 100+ specialists. Its BigCommerce page lists four migration services: Magento to BigCommerce, WooCommerce to BigCommerce, Shopify to BigCommerce, and a move from a standard BigCommerce plan to BigCommerce Enterprise. It frames the first decision as migration or modernization, meaning whether to move platform or improve the store you have, and says it can guide either path. It says a full redesign usually takes 6 to 12 weeks. It also offers custom development, design, conversion rate work and support.',
    bestFor: 'Merchants on Magento, WooCommerce or Shopify weighing a move to BigCommerce against fixing the store they have.',
    ask: 'Whether it would migrate you or improve your current store, and what data that advice rests on.',
  },
  {
    name: 'FactoryJet (that is us)',
    url: 'https://factoryjet.com/bigcommerce-development',
    source: 'https://factoryjet.com/bigcommerce-development',
    group: 'Us',
    base: 'Remote delivery for US clients, with calls held in US business hours',
    type: 'BigCommerce stores, B2B Edition, integrations and migrations',
    clients: 'Wholesalers, distributors and consumer brands; FactoryJet has served 500+ businesses since 2014',
    tools: 'BigCommerce, B2B Edition, Next.js, NetSuite, Odoo, SAP Business One, ERPNext, QuickBooks, Xero',
    erp: 'NetSuite, Odoo, SAP Business One, ERPNext and custom ERPs; QuickBooks and Xero; EDI and punchout catalogs',
    what: 'FactoryJet designs, builds and supports BigCommerce stores: custom themes, B2B Edition with company accounts, price lists, quotes and payment terms, multi-storefront setups and headless storefronts on Next.js. It migrates stores to BigCommerce from Magento and WooCommerce, with a redirect for every old web address. It connects the store to ERPs including NetSuite, Odoo, SAP Business One and ERPNext, to QuickBooks and Xero, and builds EDI and punchout catalog integrations. Each project is priced as a fixed figure in writing once a short scoping call has set the scope, and the store, the code and the accounts belong to the client.',
    bestFor: 'Wholesalers and distributors whose store has to stay in step with an ERP, and who want one team accountable for both.',
    ask: 'To see working software on your own data before you sign a contract.',
  },
];

const GROUPS: Group[] = ['B2B and wholesale', 'Mid-market DTC', 'Headless and composable', 'Migrations', 'Us'];

// Group headings echo the search terms in the brief (agencies, developers, B2B, headless, migrations).
const GROUP_HEADING: Record<Group, string> = {
  'B2B and wholesale': 'BigCommerce agencies for B2B and wholesale',
  'Mid-market DTC': 'BigCommerce agencies for mid-market consumer brands',
  'Headless and composable': 'BigCommerce developers for headless and composable builds',
  Migrations: 'BigCommerce agencies for migrations and replatforming',
  Us: 'BigCommerce stores connected to an ERP: FactoryJet',
};

const GROUP_INTRO: Record<Group, string> = {
  'B2B and wholesale':
    'Firms whose own pages put B2B first. Each comes at it from a different side: dealer self-service, wholesale on standard BigCommerce, the NetSuite connection, and parts and trade supply. All four carry the B2B Specialized badge in the BigCommerce directory.',
  'Mid-market DTC':
    'Firms that lead with design and marketing for consumer brands. DTC stands for direct-to-consumer, where the brand sells to the shopper with no retailer in between. All three sit at the Preferred tier in the directory, and all three sell marketing services alongside the build.',
  'Headless and composable':
    'Three firms whose pages name headless or composable builds on BigCommerce. In a headless build the storefront is written separately from the commerce engine. In a composable one you choose each part of the stack yourself. Catalyst is the headless storefront framework BigCommerce makes, built with Next.js.',
  Migrations:
    'These three put replatforming first. They differ in the routes they name. 1Digital Agency lists six platforms it moves stores between, Forix lists three routes into BigCommerce, and Classy Llama works across four platforms.',
  Us: 'FactoryJet wrote this page and builds on BigCommerce. Our entry follows the same template as the other 13.',
};

const GROUP_LABEL: Record<Group, string> = {
  'B2B and wholesale': 'B2B and wholesale',
  'Mid-market DTC': 'Mid-market DTC',
  'Headless and composable': 'Headless and composable',
  Migrations: 'Migrations',
  Us: 'Stores connected to an ERP',
};

// BigCommerce pages, all opened on 11 Oct 2026.
const DIRECTORY_URL = 'https://partners.bigcommerce.com/directory/';
const DIRECTORY_SEARCH = 'https://partners.bigcommerce.com/directory/search';
const PARTNER_PAGE_URL = 'https://www.bigcommerce.com/partners/become-a-partner/';
const PRICING_URL = 'https://www.bigcommerce.com/pricing/';
const COST_GUIDE_URL = 'https://www.bigcommerce.com/articles/ecommerce/ecommerce-cost/';
const B2B_DOCS_URL = 'https://docs.bigcommerce.com/developer/docs/b2b-edition/getting-started/overview';
const BUYER_PORTAL_DOCS_URL = 'https://docs.bigcommerce.com/developer/docs/b2b-edition/storefront/buyer-portal/overview';
const B2B_APP_URL = 'https://www.bigcommerce.com/apps/b2b-edition/';
const B2B_PLATFORM_URL = 'https://www.bigcommerce.com/solutions/b2b-ecommerce-platform/';
const CATALYST_DOCS_URL = 'https://docs.bigcommerce.com/developer/docs/storefront/catalyst/overview';

// Counted in the BigCommerce partner directory on 11 Oct 2026. The result line
// reads "1 - 15 of N". "North America" is the directory's Regions Served filter.
const DIRECTORY_COUNTS: { tier: string; worldwide: string; northAmerica: string; source: string }[] = [
  { tier: 'Elite', worldwide: '14', northAmerica: '12', source: `${DIRECTORY_SEARCH}?f0=Partner+Tier&f0v0=Elite` },
  { tier: 'Preferred', worldwide: '12', northAmerica: '11', source: `${DIRECTORY_SEARCH}?f0=Partner+Tier&f0v0=Preferred` },
  { tier: 'Partner', worldwide: '30', northAmerica: '24', source: `${DIRECTORY_SEARCH}?f0=Partner+Tier&f0v0=Partner` },
  { tier: 'Enrolled', worldwide: '694', northAmerica: '494', source: `${DIRECTORY_SEARCH}?f0=Partner+Tier&f0v0=Enrolled` },
  { tier: 'All listings', worldwide: '755', northAmerica: '543', source: DIRECTORY_URL },
];

// BigCommerce list prices, copied from bigcommerce.com/pricing on 11 Oct 2026.
// These are the vendor's published plan prices, not FactoryJet prices.
const PLANS: { plan: string; price: string; who: string; cap: string; providerCharge: string }[] = [
  {
    plan: 'Core',
    price: '$39 a month, or $29 a month billed annually',
    who: 'New stores selling up to $30K a year',
    cap: 'Up to $30K in sales over the trailing 12 months, then the plan moves up to Growth',
    providerCharge: '2.0%',
  },
  {
    plan: 'Growth',
    price: '$105 a month, or $79 a month billed annually',
    who: 'Established stores heading toward $100K a year',
    cap: 'Up to $100K in sales over the trailing 12 months, then the plan moves up to Scale',
    providerCharge: '1.0%',
  },
  {
    plan: 'Scale',
    price: '$399 a month, or $299 a month billed annually',
    who: 'Fast-growing stores at about $1M a year',
    cap: '$33,333 a month in sales, with 0.9% charged on sales above the cap',
    providerCharge: '0.6%',
  },
  {
    plan: 'Performance',
    price: 'Custom pricing, starting at $1,499 a month billed annually',
    who: 'High-volume stores above $1M a year',
    cap: 'Custom',
    providerCharge: 'None, on contracted terms',
  },
];

// Build ranges from the BigCommerce guide "Ecommerce Website Cost (The Complete
// 2026 Guide)", opened 11 Oct 2026. The guide credits Monocubed for the table.
const BUILD_RANGES: { build: string; range: string }[] = [
  { build: 'Small to medium business', range: 'About $5,000 to $25,000' },
  { build: 'Custom or mid-enterprise', range: 'About $25,000 to $80,000 or more' },
  { build: 'Complex or enterprise', range: 'About $80,000 to $250,000 or more' },
];

const OTHERS = FIRMS.filter((f) => f.group !== 'Us');
const tierCount = (t: Tier): number => OTHERS.filter((f) => f.tier === t).length;
const badgeCount = OTHERS.filter((f) => f.b2bBadge).length;

const FAQS: FAQItem[] = [
  {
    q: 'What is the best agency for BigCommerce B2B Edition?',
    a: 'Four of the US firms here put B2B at the center of their own pitch. Silk Commerce builds self-service ordering for manufacturers and distributors. IntuitSolutions builds B2B on both B2B Edition and standard BigCommerce. Anchor Group connects BigCommerce stores to NetSuite. Jamersan set up B2B Edition for a building materials distributor. FactoryJet builds B2B Edition stores connected to an ERP. Shortlist by the ERP you run and the kind of buyers you sell to, then have each firm show you a live wholesale store close to your own.',
  },
  {
    q: 'Who are the best BigCommerce developers?',
    a: 'The right developer changes with the work. Wholesale and B2B builds point to Silk Commerce, IntuitSolutions, Anchor Group and Jamersan. A mid-market consumer brand should look at Groove Commerce, DigitlHaus and EYStudios. Headless storefronts are the ground of Codal, Americaneagle.com and MoJo Active. A move from another platform suits 1Digital Agency, Classy Llama and Forix, and a store that must stay in step with an ERP suits FactoryJet. All 14 were checked on their own sites on 11 October 2026.',
  },
  {
    q: 'Which are the best BigCommerce agencies in 2026?',
    a: 'There is no official ranking, and agencies write most of the lists you will find. Of ten lists of BigCommerce agencies that AI assistants cited when we checked, eight were published by an agency and seven of those eight put their own firm first. The nearest thing to a neutral record is the BigCommerce partner directory, which showed 14 Elite and 12 Preferred partners among 755 listings on 11 October 2026. Begin there and narrow by fit.',
  },
  {
    q: 'What is a BigCommerce partner?',
    a: 'A BigCommerce partner is a company that has joined the BigCommerce partner program. Agency partners design, build and market stores. Technology partners make apps and integrations. The BigCommerce partner page says anyone who signs up becomes an enrolled partner at once, and that each new badge brings more benefits. Agency partners appear in a public directory at partners.bigcommerce.com/directory, which showed 755 listings on 11 October 2026.',
  },
  {
    q: 'What are the BigCommerce partner tiers?',
    a: 'The BigCommerce partner directory sorts agencies into four tiers: Elite, Preferred, Partner and Enrolled. Enrolled is the starting point. On 11 October 2026 the directory showed 14 Elite, 12 Preferred, 30 Partner and 694 Enrolled agencies worldwide. The public pages we read say higher tiers bring more benefits. They do not list what an agency must do to reach each one. Use the tier as a first filter and check the work yourself.',
  },
  {
    q: 'How many BigCommerce Elite partners are there?',
    a: 'On 11 October 2026 the BigCommerce partner directory showed 14 Elite partners worldwide, and 12 of them list North America as a region they serve. It showed 12 Preferred partners, 30 at the Partner tier and 694 Enrolled. Four of the firms on this page are Elite: Silk Commerce, Anchor Group, Codal and MoJo Active. The counts change over time, so check the directory on the day you build your shortlist.',
  },
  {
    q: 'How do I check the partner tier of a BigCommerce agency?',
    a: 'Go to partners.bigcommerce.com/directory, type the agency name into the search box and open its profile. The tier badge sits under Partner details, next to badges such as B2B Specialized, the partner type, the website and the headquarters address. Trust the badge over wording on an agency site or in the profile text, because that wording can describe an earlier tier. For the 13 other firms here, the profile carries a link to the listing as it stood on 11 October 2026.',
  },
  {
    q: 'Is an Elite BigCommerce partner always the best choice?',
    a: 'No. A tier is a badge from BigCommerce, and it is silent on the things that decide a project: has the firm done your kind of build, connected your ERP, moved a catalog off your current platform? A firm whose client page is full of enterprise manufacturers may be too big a machine for a ten-person wholesaler, whatever its badge, and a firm at a lower tier can be the specialist you need. Shortlist by tier, then ask for a completed build that resembles yours.',
  },
  {
    q: 'What does B2B Specialized mean in the BigCommerce directory?',
    a: 'B2B Specialized is a badge on some BigCommerce partner profiles, and the directory lets you filter by it. On 11 October 2026, 76 partners carried it, and 60 of those list North America as a region they serve. Eleven of the 13 other firms on this page carry it. Treat the badge as a reason to ask about wholesale work, then ask to see a live B2B store the firm has built.',
  },
  {
    q: 'What is BigCommerce B2B Edition?',
    a: 'The BigCommerce developer documentation describes B2B Edition as an all-in-one set of B2B tools inside the BigCommerce control panel. It adds company accounts, sales quotes, invoice management for purchase orders paid on net terms, user roles for buyers and staff, and a Buyer Portal where business customers request quotes and pay invoices. The Buyer Portal works with Stencil themes, Catalyst and custom headless storefronts. We read the documentation on 11 October 2026.',
  },
  {
    q: 'Do I need B2B Edition to sell wholesale on BigCommerce?',
    a: 'Not always. IntuitSolutions, one of the B2B firms on this list, says B2B Edition is not always required and that most merchants can start selling B2B on standard BigCommerce with the right additions. The BigCommerce price page shows customer groups on the Growth plan and above, and price lists on the Performance plan only. Company accounts, quotes, invoices and a buyer portal are what B2B Edition adds. List what your buyers need before you choose.',
  },
  {
    q: 'How much is BigCommerce?',
    a: 'The BigCommerce price page lists four plans in US dollars. Core is $39 a month, or $29 a month billed annually. Growth is $105 a month, or $79 billed annually. Scale is $399 a month, or $299 billed annually. Performance has custom pricing starting at $1,499 a month, billed annually. Core, Growth and Scale also carry a charge of 2.0%, 1.0% or 0.6% on orders paid through a provider outside the BigCommerce embedded list. Those figures were on the page on 11 October 2026.',
  },
  {
    q: 'How much does it cost to build a BigCommerce store?',
    a: 'BigCommerce publishes build ranges of its own. Its 2026 ecommerce cost guide puts a small to medium business store at about $5,000 to $25,000, a custom or mid-enterprise store at $25,000 to $80,000 or more, and a complex or enterprise store at $80,000 to $250,000 or more. Catalog size, B2B rules and the number of systems to connect move a project up those bands. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    q: 'Which BigCommerce agencies build headless stores?',
    a: 'In a headless store the part shoppers see is built separately and pulls products, prices and carts from BigCommerce. BigCommerce makes a framework for this, Catalyst, built with Next.js. On this list, Codal offers headless and composable builds, Americaneagle.com offers Catalyst and Makeswift development, and the MoJo Active directory profile says it builds on Catalyst with Next.js. 1Digital Agency and Anchor Group also list headless work, and FactoryJet builds headless BigCommerce storefronts on Next.js. Make the firm explain what headless would fix for you.',
  },
  {
    q: 'Which BigCommerce agency is best for a migration from Magento or Shopify?',
    a: 'Three firms on this list lead with migrations. 1Digital Agency says it has completed 200+ migrations and redirects every old web address. Classy Llama calls itself the replatform agency for mid-market ecommerce. Forix lists Magento, WooCommerce and Shopify to BigCommerce as separate services. DigitlHaus reports over 150 migrations, and IntuitSolutions moves stores from Shopify, Magento, Volusion and WooCommerce. FactoryJet migrates stores to BigCommerce from Magento and WooCommerce. Ask each firm how it maps and tests redirects.',
  },
  {
    q: 'Which BigCommerce agency connects the store to NetSuite or another ERP?',
    a: 'Start with the firms that name an ERP. Anchor Group works on NetSuite itself and builds BigCommerce to NetSuite connections. Silk Commerce lists Epicor among its partners. The MoJo Active directory profile lists ERP, order management and CRM integrations, and Americaneagle.com says it has experience with most major ERP, CRM and point of sale systems. FactoryJet connects the store to ERPs including NetSuite, Odoo, SAP Business One and ERPNext. Whoever you call, have them list the records that move and which system wins a conflict.',
  },
  {
    q: 'How long does a BigCommerce build take?',
    a: 'Few firms print a timeline. On the pages we opened on 11 October 2026, Groove Commerce says its Velocity framework gets a brand selling on BigCommerce in as little as 8 weeks, and Forix says a full redesign usually takes 6 to 12 weeks. FactoryJet says a store on a custom theme usually takes 3 to 5 weeks, a B2B Edition build or a migration 5 to 8 weeks and a headless build 8 to 14 weeks. Every extra system to connect lengthens the plan.',
  },
  {
    q: 'What is BigCommerce called now?',
    a: 'The platform is still called BigCommerce. Its parent brand is now Commerce: the commerce.com site presents three products, BigCommerce, Feedonomics and Makeswift, and the BigCommerce terms page now opens on commerce.com. The BigCommerce company page lists Austin, Texas as its headquarters, 2009 as its founding year and the Nasdaq ticker CMRC. The partner directory still lives at partners.bigcommerce.com. We read all four pages on 11 October 2026.',
  },
  {
    q: 'Which is better, Shopify or BigCommerce?',
    a: 'Neither wins for every business. Compare them on the things that differ: plan prices and sales caps, payment charges, B2B features and the agencies available to you. BigCommerce updated its plans and pricing in 2026, and our separate comparison of BigCommerce and Shopify covers what that changed for small stores. Several firms on this page build on both platforms, including IntuitSolutions, Jamersan, DigitlHaus and Classy Llama, so ask them why they would put you on one or the other.',
  },
  {
    q: 'What are the downsides of BigCommerce?',
    a: 'Three points on the BigCommerce price page are worth checking before you commit. Plans have sales caps: Core covers up to $30K over the trailing 12 months and Growth up to $100K, and a store that passes its cap is moved up a plan automatically. Core, Growth and Scale carry a charge on orders paid through a provider outside the embedded list. Price lists appear on the Performance plan only. None of these is a problem if you plan for it.',
  },
  {
    q: 'What companies use BigCommerce?',
    a: 'Going by what the agencies on this page publish, BigCommerce stores include the US Open Shop (named by Groove Commerce), Gildan (Silk Commerce), DLT Trading and Springfield Armory (EYStudios) and J&L Building Materials (Jamersan). Those are the agencies own statements, seen on their sites on 11 October 2026. When a firm shows you a logo, ask what it built for that brand, on which plan and in which year.',
  },
  {
    q: 'Should I hire a freelance BigCommerce developer or an agency?',
    a: 'A freelancer is a good fit when the task is small and you can check it yourself: a theme tweak, a new product field, a shipping rule. An agency earns its fee when several things have to land together, for example moving ten years of orders, rebuilding wholesale price lists and connecting an ERP before a fixed launch date. Either way, keep the BigCommerce account, the code and each app login registered to your own company.',
  },
  {
    q: 'What should I ask a BigCommerce agency before I sign?',
    a: 'Take these seven to the first call. Which systems have you joined to BigCommerce, by name? Does our business need B2B Edition? Would you build us on Stencil or Catalyst, and what decides it? On a migration, how are redirects mapped and tested? Which tier does the BigCommerce directory show for you today? Will you demonstrate working software on our data before a contract? At the end, who holds the theme code, the custom apps and the accounts?',
  },
  {
    q: 'Which platform is best for B2B?',
    a: 'It depends on how your buyers order. BigCommerce says its B2B features cover account pricing, buyer portals, quote workflows and approval controls, and that B2B and B2C can run from the same place. The better question is which platform fits your price lists, payment terms and ERP, and which agencies you can hire for it. Our guide to Shopify Plus agencies for US brands covers the Shopify side of the same decision.',
  },
  {
    q: 'Do BigCommerce agencies also build on Shopify?',
    a: 'Many do. On the pages we read, IntuitSolutions says it specializes in BigCommerce and Shopify, Jamersan calls itself a Shopify Plus and BigCommerce agency, DigitlHaus offers Shopify and BigCommerce services, and Classy Llama works on Adobe Commerce, Magento, Shopify and BigCommerce. Groove Commerce, Codal and Silk Commerce list Shopify as well. That helps when you are still choosing a platform. Ask the firm which one it would put you on and what in your business drives that answer.',
  },
  {
    q: 'Can a BigCommerce agency add AI agents to my store?',
    a: 'Yes. An AI agent here means software that carries out a task in your store or ERP, inside rules you write. FactoryJet builds agents for order work around a BigCommerce store and its ERP, such as preparing quotes, purchase orders and sales orders, with a person approving before anything posts. On the other sites we read, Anchor Group says it has launched Sonar, a free AI tool that works inside NetSuite. Whichever firm you pick, have it run the agent on your own orders first.',
  },
  {
    q: 'Where is the official list of BigCommerce partners?',
    a: 'BigCommerce keeps it at partners.bigcommerce.com/directory. On 11 October 2026 it listed 755 agency partners. You can filter by region served, services offered, industry, badge and partner tier. Each profile shows the tier badge, a headquarters address, services, industries and client logos. The directory tells you who is in the program. It does not tell you which firm fits your project, which is what the groups on this page are for.',
  },
  {
    q: 'Does FactoryJet build on BigCommerce?',
    a: 'Yes. BigCommerce work at FactoryJet covers custom themes, B2B Edition with company accounts, price lists and quotes, multi-storefront setups, headless storefronts and migrations from Magento and WooCommerce. The team also connects the store to ERP and accounting systems and builds EDI and punchout catalog integrations. FactoryJet quotes a fixed price in writing after a short scoping call. The store, the code and the accounts belong to the client.',
  },
];

const link = 'text-[#B23E13] underline';

export const post: BlogPost = {
  id: '765',
  slug: SLUG,
  title: TITLE,
  excerpt:
    'A fact-checked guide to BigCommerce agencies and developers for 2026, grouped by buyer: B2B and wholesale, mid-market consumer brands, headless builds and migrations. Where each firm is, its tier in the BigCommerce partner directory, the systems it names and how to choose. FactoryJet wrote it and is one of the 14.',
  category: 'E-Commerce Development',
  author: 'Bhavesh Barot',
  date: 'Oct 11, 2026',
  dateModified: 'Oct 11, 2026',
  readTime: '24 min read',
  imageUrl: `${IMG}/hero.webp`,
  imageAlt:
    'A woman in a denim shirt places a plain brown parcel into one of four open wooden crates on a long table while a man in a grey sweater holds another parcel beside a roll of orange tape',
  meta: {
    title: 'Best BigCommerce Agencies 2026: 14 Compared | FactoryJet',
    description: META_DESCRIPTION,
  },
  keyTakeaways: [
    'The right BigCommerce agency depends on the job. This page sorts 14 firms into four jobs: B2B and wholesale, a mid-market consumer brand, a headless storefront and a migration.',
    'Each profile was written from two sources opened on 11 October 2026: the firm website and its BigCommerce partner directory profile. No firm paid for a place, and the order carries no ranking.',
    'The BigCommerce partner directory listed 755 agencies on 11 October 2026. Its tier filters showed 14 Elite, 12 Preferred, 30 Partner and 694 Enrolled. Elite and Preferred together are 26 listings.',
    'A tier is a first filter. The public pages we read do not list what an agency must do to reach each tier, so check the work as well as the badge.',
    'Wholesale on BigCommerce does not always call for B2B Edition. IntuitSolutions says most merchants can start B2B on standard BigCommerce, and B2B Edition adds company accounts, quotes, invoices and a buyer portal.',
    'BigCommerce lists its plans at $39, $105 and $399 a month, with Performance starting at $1,499 a month billed annually. Its 2026 cost guide puts builds at $5,000 to $250,000 or more by complexity.',
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
              datePublished: '2026-10-11',
              dateModified: '2026-10-11',
              isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com' },
              publisher: { '@id': 'https://factoryjet.com/#organization' },
              about: { '@type': 'Thing', name: 'BigCommerce agencies and developers in the United States' },
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['#answer-first', 'h1', 'h2'],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'BigCommerce agencies and developers compared (2026)',
              itemListOrder: 'https://schema.org/ItemListUnordered',
              numberOfItems: FIRMS.length,
              itemListElement: FIRMS.map((f, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: f.name.replace(' (that is us)', ''),
                url: f.url,
              })),
            },
          ]),
        }}
      />

      <div id="answer-first" className="mb-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">In short</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          The best BigCommerce agency depends on the job. B2B and wholesale: Silk Commerce, IntuitSolutions, Anchor Group or Jamersan. A mid-market consumer brand: Groove Commerce, DigitlHaus or EYStudios. A headless storefront: Codal, Americaneagle.com or MoJo Active. A migration: 1Digital Agency, Classy Llama or Forix. A store that must stay in step with an ERP: FactoryJet.
        </p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Each of the 14 was checked on its own website on 11 October 2026, and 13 of them in BigCommerce&rsquo;s partner directory as well. We recorded the address, the directory tier, the work the firm takes on and the systems it names. FactoryJet is the author and the fourteenth firm. No firm paid for a place, and the order carries no ranking.
        </p>
        <p className="text-gray-800 leading-relaxed">
          For a quick steer, <a href="/contact" className={link}>tell us what you sell and which systems you run</a>. The founder will say which of the four groups your project belongs in.
        </p>
      </div>

      <p className="mb-4">
        On 9 October 2026 we put one buyer question to five assistants (ChatGPT, Claude, Gemini, Perplexity and Google&rsquo;s AI answers): what is the best agency for BigCommerce B2B Edition? We collected 14 answers. Across that question and three related ones, 15 answers linked to a list of BigCommerce agencies, and those lists came from 12 sites.
      </p>
      <p className="mb-4">
        On 11 October we read all 12 pages. Ten are lists of BigCommerce agencies. The other two are about moving a store off BigCommerce. Eight of the ten are published by an agency, and seven of those eight put their own firm first. The other two sit on single-topic list sites from one publisher. Three of the 12 pages link to BigCommerce&rsquo;s partner directory, the one place a tier can be verified.
      </p>
      <p className="mb-4">
        So we started from the directory. We counted every tier, picked US agencies whose own sites name one of four kinds of buyer, and kept only what is written on each firm&rsquo;s site and its directory profile. Each profile ends with the links we used.
      </p>
      <p className="mb-4">
        <strong>Who wrote this.</strong> FactoryJet builds BigCommerce stores for a living, and we put ourselves on this page. No firm paid or asked to be listed. Our entry is written to the same template as the other 13. Keep the author in mind with any agency list, this one included.
      </p>
      <p className="mb-6">
        Eight terms come up on every agency site, so here they are in plain words. <strong>BigCommerce</strong> is a platform for running an online store, sold as a subscription. A <strong>BigCommerce agency</strong> or <strong>developer</strong> designs and builds stores on it. <strong>B2B</strong>, or wholesale, is selling to other companies on agreed price lists and payment terms. <strong>B2B Edition</strong> is BigCommerce&rsquo;s add-on set of tools for that kind of selling. <strong>Stencil</strong> is BigCommerce&rsquo;s standard theme system. <strong>Headless</strong> means the part shoppers see is built separately and fetches products, prices and carts from BigCommerce, and <strong>Catalyst</strong> is the framework BigCommerce makes for it. An <strong>ERP</strong> is the back-office system where orders, stock and accounts are kept.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The 14 firms in one table</h2>
      <p className="mb-4">
        Start with the Suits column. The rows that share your kind of business are the profiles to read first.
      </p>
      <div className="overflow-x-auto mb-8 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Firm</th>
              <th className="p-3 text-left border border-gray-700">Suits</th>
              <th className="p-3 text-left border border-gray-700">Focus</th>
              <th className="p-3 text-left border border-gray-700">Systems it names</th>
              <th className="p-3 text-left border border-gray-700">Base</th>
            </tr>
          </thead>
          <tbody>
            {FIRMS.map((f) => (
              <tr key={f.name} className={f.group === 'Us' ? 'bg-orange-50' : 'odd:bg-white even:bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-semibold align-top">{f.name}</td>
                <td className="p-3 border border-gray-200 align-top">{GROUP_LABEL[f.group]}</td>
                <td className="p-3 border border-gray-200 align-top">{f.type}</td>
                <td className="p-3 border border-gray-200 align-top">{f.tools}</td>
                <td className="p-3 border border-gray-200 align-top">{f.base}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">How this list was made</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Measure the demand.</strong> &ldquo;BigCommerce developers&rdquo; gets 320 US Google searches a month, and the related searches for agencies and partners bring the group to about 830 (DataForSEO, October 2026). We ran four of those searches on 11 October, and an AI answer appeared in Google&rsquo;s results for all four.</li>
        <li><strong>Open the 12 lists that assistants link to.</strong> They showed us which firms get named again and again. Nothing on this page is taken from them.</li>
        <li><strong>Start from BigCommerce&rsquo;s own directory.</strong> We filtered it by tier and by region, counted each group and opened the profile of every firm we considered.</li>
        <li><strong>Keep firms with a US head office.</strong> Each of the other 13 shows a US headquarters on its directory profile and a US address on its own site.</li>
        <li><strong>Use two sources per firm.</strong> What a firm builds, and for whom, comes from its own site. Its tier and badges come from its directory profile. Both were opened on 11 October 2026.</li>
        <li><strong>Mark a claim as a claim.</strong> When a firm states a project count, a client name or a result, the profile says the firm states it.</li>
        <li><strong>Group by buyer, with no scores.</strong> Each profile says who the firm suits and gives one question to put to it. There are no star ratings and no positions.</li>
        <li><strong>Take prices from BigCommerce.</strong> Plan prices come from its price page and build ranges from its cost guide. No agency&rsquo;s price is estimated here.</li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4">BigCommerce partner tiers, counted</h2>
      <p className="mb-4">
        <a href={DIRECTORY_URL} className={link} rel="noopener" target="_blank">BigCommerce&rsquo;s partner directory</a> listed 755 agency partners on 11 October 2026. It sorts them into four tiers: Elite, Preferred, Partner and Enrolled. Enrolled is where everyone starts. <a href={PARTNER_PAGE_URL} className={link} rel="noopener" target="_blank">BigCommerce&rsquo;s partner page</a> says you instantly become an enrolled partner when you sign up, that each new badge brings more perks, and that partners at higher tiers get a partner marketing manager.
      </p>
      <p className="mb-4">
        The table below counts each tier twice, first with no filter and then with the directory&rsquo;s North America region filter on.
      </p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Tier</th>
              <th className="p-3 text-left border border-gray-700">Partners worldwide</th>
              <th className="p-3 text-left border border-gray-700">Partners that list North America as a region served</th>
              <th className="p-3 text-left border border-gray-700">Source (opened 11 Oct 2026)</th>
            </tr>
          </thead>
          <tbody>
            {DIRECTORY_COUNTS.map((d) => (
              <tr key={d.tier} className="odd:bg-white even:bg-gray-50">
                <td className="p-3 border border-gray-200 font-semibold align-top">{d.tier}</td>
                <td className="p-3 border border-gray-200 align-top">{d.worldwide}</td>
                <td className="p-3 border border-gray-200 align-top">{d.northAmerica}</td>
                <td className="p-3 border border-gray-200 align-top">
                  <a href={d.source} className={link} rel="noopener" target="_blank">partners.bigcommerce.com/directory</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-4">
        Elite and Preferred together are 26 of the 755 listings, about 3 in every 100. The public pages we read do not say what an agency must do to reach each tier. That makes a tier a useful first filter and a poor final answer, because it cannot tell you whether the firm has done your kind of project.
      </p>
      <p className="mb-4">
        The directory also shows badges. The one that matters for wholesale is B2B Specialized. On 11 October, 76 partners carried it, and 60 of those list North America as a region they serve.
      </p>
      <p className="mb-6">
        Of the 13 other firms on this page, the directory listed {tierCount('Elite')} as Elite, {tierCount('Preferred')} as Preferred, {tierCount('Partner')} at the Partner tier and {tierCount('Enrolled')} as Enrolled, and {badgeCount} carry the B2B Specialized badge. Read the badge on the directory profile itself. Tiers move, and the wording on an agency site or in its profile text can describe an earlier tier.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The 14 BigCommerce agencies and developers, by the buyer they suit</h2>
      <p className="mb-6">
        Four groups, then us: B2B and wholesale, mid-market consumer brands, headless builds and migrations. Within a group the order means nothing.
      </p>

      {GROUPS.map((g) => {
        const inGroup = FIRMS.filter((f) => f.group === g);
        return (
          <section key={g} className="mb-6">
            <h3 className="text-xl font-bold mt-8 mb-2">{GROUP_HEADING[g]}</h3>
            <p className="mb-4 text-gray-700">{GROUP_INTRO[g]}</p>
            {inGroup.map((f) => (
              <div key={f.name} className="mb-8">
                <h4 className="text-lg font-bold mt-6 mb-2">{f.name}</h4>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Base:</strong> {f.base}. <strong>Type:</strong> {f.type}.
                  {f.tier && (
                    <>
                      {' '}<strong>BigCommerce directory tier:</strong> {f.tier}{f.b2bBadge ? ', with the B2B Specialized badge' : ''}.
                    </>
                  )}
                </p>
                <p className="mb-3">{f.what}</p>
                <ul className="list-disc pl-6 mb-3 space-y-1">
                  <li><strong>Best for:</strong> {f.bestFor}</li>
                  <li><strong>Typical client:</strong> {f.clients}.</li>
                  <li><strong>Systems it names:</strong> {f.tools}.</li>
                  <li><strong>Worth asking them:</strong> {f.ask}</li>
                </ul>
                <p className="text-sm text-gray-600">
                  Source:{' '}
                  <a href={f.source} className={link} rel="noopener" target={f.source.startsWith('https://factoryjet.com') ? undefined : '_blank'}>
                    {f.source.replace('https://', '')}
                  </a>
                  {f.alsoRead && (
                    <>
                      {' '}| Also read:{' '}
                      <a href={f.alsoRead} className={link} rel="noopener" target="_blank">
                        {f.alsoRead.replace('https://', '').split('/').slice(0, 2).join('/')}
                      </a>
                    </>
                  )}
                  {f.hqSource && (
                    <>
                      {' '}| Address:{' '}
                      <a href={f.hqSource} className={link} rel="noopener" target="_blank">
                        {f.hqSource.replace('https://', '').split('/')[0]}
                      </a>
                    </>
                  )}
                  {f.directory && (
                    <>
                      {' '}| BigCommerce directory:{' '}
                      <a href={f.directory} className={link} rel="noopener" target="_blank">
                        {f.directory.replace('https://', '').split('/partner/')[0]}
                      </a>
                    </>
                  )}
                </p>
              </div>
            ))}
            {g === 'B2B and wholesale' && (
              <figure className="my-8 not-prose">
                <img
                  src={`${IMG}/b2b-wholesale.webp`}
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  alt="A grey-haired man in a navy work jacket drops steel pipe fittings into a metal bin on a trade counter while a woman in a green polo shirt writes on a clipboard beside a pair of orange work gloves"
                  className="w-full h-auto rounded-xl"
                />
                <figcaption className="text-sm text-gray-600 mt-2">A wholesale store has to hold the account prices and terms the trade counter already uses. Ask each firm where those rules will live.</figcaption>
              </figure>
            )}
            {g === 'Mid-market DTC' && (
              <figure className="my-8 not-prose">
                <img
                  src={`${IMG}/dtc-brand.webp`}
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  alt="A woman with curly dark hair in a cream sweater wraps a white ceramic mug in tissue paper at a wooden table next to an open cardboard box and a spool of orange ribbon"
                  className="w-full h-auto rounded-xl"
                />
                <figcaption className="text-sm text-gray-600 mt-2">Shoppers judge a consumer brand on how the store looks and how fast it loads. Ask each firm to show a store it designed from a blank page.</figcaption>
              </figure>
            )}
            {g === 'Headless and composable' && (
              <figure className="my-8 not-prose">
                <img
                  src={`${IMG}/headless.webp`}
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  alt="A man in a rust-colored apron sets a potted plant on a wooden stool into a shop window display while an open doorway behind the shop floor shows stockroom shelves stacked with plain boxes"
                  className="w-full h-auto rounded-xl"
                />
                <figcaption className="text-sm text-gray-600 mt-2">The window display changes while the stockroom behind the door stays as it is. That is the idea behind a headless store.</figcaption>
              </figure>
            )}
            {g === 'Migrations' && (
              <figure className="my-8 not-prose">
                <img
                  src={`${IMG}/migration.webp`}
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  alt="A man in an olive t-shirt and a woman with silver hair in a blue shirt carry a wooden table across an empty room with white walls while cardboard boxes wait on a hand truck by the door"
                  className="w-full h-auto rounded-xl"
                />
                <figcaption className="text-sm text-gray-600 mt-2">Moving platform is like moving shop. Nothing should be left behind, and customers must still find the door. Ask for the checklist a firm uses on launch day.</figcaption>
              </figure>
            )}
          </section>
        );
      })}

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 my-8 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">Talk to a builder</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Our <a href="/services/bigcommerce-b2b" className={link}>BigCommerce B2B Edition service</a> begins with a 30-minute scoping call with the founder. You get a fixed price in writing, and you can see working software on your own data before you sign.
        </p>
        <a href="/contact" className="inline-block rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white">Talk to the Founder</a>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">What is the best agency for BigCommerce B2B Edition?</h2>
      <p className="mb-4">
        That is the question a buyer asked, word for word. Before you choose a firm, check what B2B Edition is and whether you need it. This is how BigCommerce&rsquo;s own pages describe it, in the wording we found on 11 October 2026:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>What it adds.</strong> <a href={B2B_DOCS_URL} className={link} rel="noopener" target="_blank">BigCommerce&rsquo;s developer documentation</a> lists company accounts, sales quotes, invoice management for purchase orders paid on net terms, user roles for buyers and staff, and sales staff who can act for a client.</li>
        <li><strong>The Buyer Portal.</strong> A private account area where a business customer requests quotes and pays invoices. <a href={BUYER_PORTAL_DOCS_URL} className={link} rel="noopener" target="_blank">The documentation</a> says it works with Stencil themes, Catalyst and custom headless storefronts.</li>
        <li><strong>How it is sold.</strong> <a href={B2B_APP_URL} className={link} rel="noopener" target="_blank">The app listing</a> describes B2B Edition as building on BigCommerce&rsquo;s Enterprise plan, so ask BigCommerce or your agency which of today&rsquo;s plans that means for you.</li>
        <li><strong>What standard BigCommerce already has.</strong> <a href={PRICING_URL} className={link} rel="noopener" target="_blank">The price page</a> shows customer groups on the Growth plan and above, and price lists, which set custom prices per product for a customer group, on the Performance plan only.</li>
      </ul>
      <p className="mb-4">
        IntuitSolutions makes the practical point on its own B2B page: B2B Edition is not always required, and most merchants can start selling B2B on standard BigCommerce. A seller with a few customer groups may not need it. A seller whose buyers need company accounts with several users, quotes and invoices on terms usually does. <a href={B2B_PLATFORM_URL} className={link} rel="noopener" target="_blank">BigCommerce&rsquo;s B2B page</a> says B2B and B2C can run from the same place.
      </p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Agency</th>
              <th className="p-3 text-left border border-gray-700">Who it builds for</th>
              <th className="p-3 text-left border border-gray-700">ERP and back-office systems it names</th>
            </tr>
          </thead>
          <tbody>
            {FIRMS.filter((f) => f.erp).map((f) => (
              <tr key={f.name} className={f.group === 'Us' ? 'bg-orange-50' : 'odd:bg-white even:bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-semibold align-top">{f.name}</td>
                <td className="p-3 border border-gray-200 align-top">{f.clients}</td>
                <td className="p-3 border border-gray-200 align-top">{f.erp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        Groove Commerce, Codal and 1Digital Agency also describe B2B Edition or B2B portal work on their sites. FactoryJet sets up B2B Edition with company accounts, price lists, quotes and payment terms, and connects it to whichever system is the master for prices and stock. See <a href="/services/bigcommerce-b2b" className={link}>BigCommerce B2B Edition development</a>. For portals on any platform, read <a href="/b2b-ecommerce" className={link}>B2B ecommerce</a>.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">What BigCommerce and a build cost</h2>
      <p className="mb-4">
        Two prices get mixed up: what you pay BigCommerce for the plan, and what you pay an agency to build the store. Here is the first, copied from <a href={PRICING_URL} className={link} rel="noopener" target="_blank">BigCommerce&rsquo;s price page</a> on 11 October 2026. BigCommerce can change these, so check the page before you rely on them.
      </p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Plan</th>
              <th className="p-3 text-left border border-gray-700">List price (USD)</th>
              <th className="p-3 text-left border border-gray-700">Who BigCommerce aims it at</th>
              <th className="p-3 text-left border border-gray-700">Sales cap</th>
              <th className="p-3 text-left border border-gray-700">Charge on orders through a provider outside the embedded list</th>
            </tr>
          </thead>
          <tbody>
            {PLANS.map((p) => (
              <tr key={p.plan} className="odd:bg-white even:bg-gray-50">
                <td className="p-3 border border-gray-200 font-semibold align-top">{p.plan}</td>
                <td className="p-3 border border-gray-200 align-top">{p.price}</td>
                <td className="p-3 border border-gray-200 align-top">{p.who}</td>
                <td className="p-3 border border-gray-200 align-top">{p.cap}</td>
                <td className="p-3 border border-gray-200 align-top">{p.providerCharge}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-4">
        Two notes on the table. BigCommerce measures sales for the caps as gross order value minus 10%. And the last column depends on a list BigCommerce keeps of embedded payment providers, which includes Stripe, PayPal, Adyen and Klarna. Orders paid through those carry no extra charge from BigCommerce. Orders paid through any other provider carry the percentage shown. Our post on <a href="/blog/bigcommerce-vs-shopify-2026-fee-change" className={link}>BigCommerce and Shopify after the 2026 fee change</a> works through what that means for a small store.
      </p>
      <p className="mb-4">
        For the build, BigCommerce publishes ranges of its own in its <a href={COST_GUIDE_URL} className={link} rel="noopener" target="_blank">2026 ecommerce website cost guide</a>, in a table it credits to Monocubed.
      </p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Kind of build</th>
              <th className="p-3 text-left border border-gray-700">Range in BigCommerce&rsquo;s guide (USD)</th>
            </tr>
          </thead>
          <tbody>
            {BUILD_RANGES.map((b) => (
              <tr key={b.build} className="odd:bg-white even:bg-gray-50">
                <td className="p-3 border border-gray-200 font-semibold align-top">{b.build}</td>
                <td className="p-3 border border-gray-200 align-top">{b.range}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        On the pages we read, none of the 13 other firms shows a fixed price for a BigCommerce build. DigitlHaus says it scopes the whole project upfront so the client knows the precise cost before work starts. FactoryJet gives two fixed prices in writing after a short scoping call, one for the build and one for ongoing support.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Which kind of BigCommerce agency you need</h2>
      <p className="mb-4">Each line below is something a buyer might say. Find yours, and it names the firms to call.</p>
      <div className="grid gap-3 mb-8 not-prose">
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold mb-1">&ldquo;Our dealers still phone and email their orders, and we make or distribute the goods.&rdquo;</p>
          <p className="text-gray-700 text-sm">Silk Commerce, whose B2B page is written for that case. Jamersan if you sell auto parts or building materials.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold mb-1">&ldquo;We run NetSuite, and the store has to agree with it.&rdquo;</p>
          <p className="text-gray-700 text-sm">Anchor Group, which works on NetSuite itself as well as BigCommerce.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold mb-1">&ldquo;We want to add wholesale to the store we have, and we are unsure about B2B Edition.&rdquo;</p>
          <p className="text-gray-700 text-sm">IntuitSolutions, which says on its own page that B2B Edition is not always required.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold mb-1">&ldquo;We are a consumer brand and want the store and the marketing from one agency.&rdquo;</p>
          <p className="text-gray-700 text-sm">Groove Commerce. EYStudios if brand design, photography and video matter most. DigitlHaus for a fully custom store with the scope agreed first.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold mb-1">&ldquo;We want a custom storefront that our marketing team can change without a developer.&rdquo;</p>
          <p className="text-gray-700 text-sm">Americaneagle.com, which names Catalyst and Makeswift. Codal and MoJo Active also build headless storefronts.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold mb-1">&ldquo;We are leaving Magento, WooCommerce, Volusion or Shopify, and our search rankings have to survive the move.&rdquo;</p>
          <p className="text-gray-700 text-sm">1Digital Agency or Forix. Classy Llama if the project has already stalled once.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold mb-1">&ldquo;We run several brands or regions and want one back end.&rdquo;</p>
          <p className="text-gray-700 text-sm">Americaneagle.com and 1Digital Agency both name multi-storefront builds.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold mb-1">&ldquo;We need the store joined to our ERP, with quotes and orders flowing both ways.&rdquo;</p>
          <p className="text-gray-700 text-sm">FactoryJet builds the store and the integration as one project. See <a href="/bigcommerce-development" className={link}>BigCommerce development</a>, <a href="/services/ecommerce-erp-integration" className={link}>ecommerce ERP integration</a> and <a href="/services/erp-ai-agents" className={link}>ERP AI agents</a>.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Choosing a BigCommerce developer in six steps</h2>
      <p className="mb-4">Each step opens to show the detail.</p>
      <div className="space-y-3 mb-8 not-prose">
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">1. Put your project on a single page</summary>
          <p className="mt-3 text-gray-700">List your products and your buyers, the size of the catalog, your current platform, and the ERP, accounting, warehouse and email tools the store will exchange data with. A firm that has this page in front of it can answer in specifics on the first call.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">2. Decide what wholesale means for you</summary>
          <p className="mt-3 text-gray-700">Customer groups, price lists and company accounts with quotes are three different levels. Use the B2B section above to see which you need. It decides both the BigCommerce plan and the kind of firm.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">3. Choose a theme or a headless storefront</summary>
          <p className="mt-3 text-gray-700">A Stencil theme is quicker to launch and simpler to look after. A headless storefront on <a href={CATALYST_DOCS_URL} className={link} rel="noopener" target="_blank">Catalyst</a> gives full control of design and speed, and it needs developers to change it. Ask each firm which it recommends for you and why. Our page on <a href="/headless-commerce" className={link}>headless commerce</a> explains the trade-off.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">4. Shortlist by buyer type, then check the directory</summary>
          <p className="mt-3 text-gray-700">Drop the firms whose clients are a different size or trade from yours. Then look up the rest in <a href={DIRECTORY_URL} className={link} rel="noopener" target="_blank">BigCommerce&rsquo;s partner directory</a> and read the tier and badges on each profile.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">5. Ask for a live store like yours</summary>
          <p className="mt-3 text-gray-700">A portfolio piece counts when it shares your starting point. Say you are on Magento today and run NetSuite. Ask for a store that made that exact move and still syncs with NetSuite, then ask for ten minutes with its owner.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">6. Brief three firms with the identical page</summary>
          <p className="mt-3 text-gray-700">Give all three the identical brief in the same week. The questions that come back show who read it closely, so weigh those before the quotes. Then settle in writing who supports the store after launch, and put the store, the code and every app account in your company&rsquo;s name.</p>
        </details>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Questions to put to a BigCommerce agency before you sign</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Which systems have you joined to BigCommerce, by name?</strong> Anchor Group names NetSuite on its site. Ask every firm about the system you run.</li>
        <li><strong>Do we need B2B Edition?</strong> IntuitSolutions says not always. A firm that says yes should be able to name the feature that decides it.</li>
        <li><strong>Stencil or Catalyst, and why?</strong> Americaneagle.com and MoJo Active both name the two. A good answer starts from your store and the team that will run it.</li>
        <li><strong>How are old web addresses mapped to new ones, and who tests them?</strong> 1Digital Agency says it redirects every old web address. Ask to see the sheet from a past project.</li>
        <li><strong>What is your tier in BigCommerce&rsquo;s directory today?</strong> Check the answer against the profile.</li>
        <li><strong>Will you show working software on our data before a contract?</strong> Your own catalog and price rules expose problems a prepared demo hides. FactoryJet shows working software on the buyer&rsquo;s own data before a contract.</li>
        <li><strong>When the project ends, who holds the code, the custom apps and the accounts?</strong> Get it into the contract that you do.</li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4">FactoryJet on BigCommerce: what we build</h2>
      <p className="mb-4">
        FactoryJet has built commerce systems since 2014 and has served 500+ businesses. Bhavesh Barot, the founder, takes the first call on every project himself. We work remotely with US clients and hold calls in US business hours.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Stores.</strong> Custom themes, multi-storefront setups and headless storefronts on Next.js. See <a href="/bigcommerce-development" className={link}>BigCommerce development</a>.</li>
        <li><strong>B2B Edition.</strong> Company accounts, price lists, quotes, payment terms and buyer portals. See <a href="/services/bigcommerce-b2b" className={link}>BigCommerce B2B Edition</a>.</li>
        <li><strong>Integrations.</strong> NetSuite, Odoo, SAP Business One, ERPNext and custom ERPs, plus QuickBooks, Xero, HubSpot, EDI and punchout catalogs.</li>
        <li><strong>Migrations.</strong> From Magento and WooCommerce, with products, customers, orders and content moved and a redirect for every old web address. See <a href="/replatforming" className={link}>replatforming</a>.</li>
        <li><strong>AI agents.</strong> Agents that prepare quotes, purchase orders and sales orders in the store and the ERP, with a person approving before anything posts. See <a href="/services/erp-ai-agents" className={link}>ERP AI agents</a>.</li>
      </ul>
      <p className="mb-4">
        A BigCommerce store on a custom theme usually takes 3 to 5 weeks. A B2B Edition build or a migration takes 5 to 8 weeks, and a headless build 8 to 14 weeks. You get two fixed prices in writing after a short scoping call, one for the build and one for ongoing support. Once the store is live, the integrations, the APIs, the AI and the routine maintenance stay our job, so they never land on your team. Everything we build belongs to you.
      </p>
      <p className="mb-6">
        If the platform itself is still an open question, these pages cover the choices around it: <a href="/blog/best-shopify-plus-agencies-usa-2026" className={link}>Shopify Plus agencies for US brands</a>, <a href="/blog/best-ecommerce-development-agencies-usa" className={link}>ecommerce development agencies in the USA</a>, <a href="/blog/top-b2b-ecommerce-development-agencies-portals-2026" className={link}>B2B ecommerce development agencies for portals</a> and <a href="/blog/how-to-choose-ecommerce-development-agency-2026" className={link}>how to choose an ecommerce development agency</a>.
      </p>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mb-8 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">A second opinion on your shortlist</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Email us a single page covering your products, your current platform and the systems the store has to work with. The founder will go through it with you on a free call: whether B2B Edition is needed, how big the build is and what kind of firm suits it.
        </p>
        <a href="/bigcommerce-development" className="inline-block rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white">See our BigCommerce service</a>
      </div>
    </>
  ),
};
