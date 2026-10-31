import React from 'react';
import styles from './best-magento-to-shopify-plus-migration-agencies-2026.visual-qa.module.css';
import type { BlogPost, FAQItem } from '../data.types';

const SLUG = 'best-magento-to-shopify-plus-migration-agencies-2026';
const PAGE_URL = `https://factoryjet.com/blog/${SLUG}`;
const IMG = `/images/blog/${SLUG}`;
const TITLE = 'Best Magento to Shopify Plus Migration Agencies for US Brands (2026): 12 Compared, Including Us';
const META_DESCRIPTION =
  'Compare 12 Magento to Shopify Plus migration agencies for US brands: Shopify tier, timelines, SEO and redirect plans, ERP and B2B work, and published prices.';

// Every fact about every firm below was read on that firm's own website and on
// its Shopify Partner Directory profile on 23 October 2026 (URL in `source`,
// `hqSource` where the location came from another page, `directory` for the
// Shopify profile). Nothing here is paid placement. The order is NOT a ranking;
// firms are grouped by the kind of Magento store they suit.
// The ItemList schema maps from this same array, so the list and schema cannot drift.
type Group = 'Enterprise Adobe Commerce' | 'B2B and ERP-heavy stores' | 'Mid-market stores' | 'Smaller single-site stores' | 'Us';

interface Firm {
  name: string;
  url: string;
  source: string;
  hqSource?: string;
  directory?: string;
  tier: string;
  group: Group;
  based: string;
  type: string;
  clients: string;
  systems: string;
  timeline: string;
  what: string;
  seo: string;
  bestFor: string;
  ask: string;
}

const FIRMS: Firm[] = [
  {
    name: 'SDG',
    url: 'https://www.sdg.la/',
    source: 'https://www.sdg.la/magento-to-shopify-migration/',
    directory: 'https://www.shopify.com/partners/directory/partner/sdg',
    tier: 'Platinum',
    group: 'Enterprise Adobe Commerce',
    based: 'Los Angeles, California',
    type: 'Shopify engineering partner for large brands',
    clients: 'Large brands. Its migration page names Jenni Kayne, moved from Magento to Shopify Plus and Shopify POS, and Everlane',
    systems: 'Magento 1, Magento 2 Open Source, Adobe Commerce, NetSuite, SAP, Microsoft Dynamics, Acumatica, Manhattan, Salsify, Akeneo, Pimberly',
    timeline: 'Set after it inventories your store',
    what: 'SDG says it has built on Shopify since 2006 and that one senior team handles data, B2B workflows, integrations, SEO, the storefront and launch. It reviews the actual Adobe Commerce setup, extensions and business rules before it recommends a Shopify design. It moves products, customers, addresses, orders, content and media, then checks the record counts. It sets the timeline only after that inventory.',
    seo: 'It says every meaningful Magento URL is mapped to a Shopify page or deliberately retired, with canonicals, sitemaps, structured data and Search Console checks after launch.',
    bestFor: 'Enterprise Adobe Commerce stores with company accounts, negotiated prices and several back-office systems.',
    ask: 'What are your rollback rules at cutover, and who owns the last data sync on launch night?',
  },
  {
    name: 'Domaine',
    url: 'https://domaineworldwide.com/',
    source: 'https://domaineworldwide.com/services/technology/magento-migrations',
    hqSource: 'https://domaineworldwide.com/contact',
    directory: 'https://www.shopify.com/partners/directory/partner/meet-domaine',
    tier: 'Platinum',
    group: 'Enterprise Adobe Commerce',
    based: 'New York, per its Shopify profile. Its contact page also lists Los Angeles, Canada and the United Kingdom',
    type: 'Shopify-only agency for large consumer brands',
    clients: "Fashion and beauty brands. Its Magento page names Stanfield's, Moose Knuckles and Boska, and its Shopify profile names Arhaus and Laura Mercier",
    systems: 'Adobe Commerce, Salesforce Commerce Cloud, Shopify Plus, Shopify POS, Shopify B2B. No ERP is named on the pages we read',
    timeline: 'Not published',
    what: "Domaine has a separate service page for Adobe Commerce migrations and says it focuses on large migrations to Shopify. It says it has launched over 750 Shopify sites. Its Magento page shows a Stanfield's Magento to Shopify case study, and its Shopify profile lists Laura Mercier's move from Salesforce Commerce Cloud to Shopify Plus.",
    seo: 'Not described on the pages we read.',
    bestFor: 'Mid-market to enterprise fashion and beauty brands leaving Adobe Commerce or Salesforce Commerce Cloud.',
    ask: 'Who on your team owns redirect mapping, and can we see the redirect plan from a past Adobe Commerce move?',
  },
  {
    name: 'Anatta',
    url: 'https://anatta.io/',
    source: 'https://anatta.io/what-we-do/shopify-migration-services/',
    hqSource: 'https://anatta.io/about/',
    directory: 'https://www.shopify.com/partners/directory/partner/anatta1',
    tier: 'Platinum',
    group: 'Enterprise Adobe Commerce',
    based: 'Austin, Texas. Its team also works from Charleston and Bangalore',
    type: 'Shopify partner for brands with $10M or more in revenue',
    clients: 'Brands with $10M or more in revenue. It names Dorel Juvenile, buybuy BABY, Trade Coffee, AG1, Vuori and Rothy’s',
    systems: 'Magento, Salesforce Commerce Cloud, BigCommerce, WooCommerce, ERP, order, warehouse and product data systems, Recharge, Ordergroove, Stay AI',
    timeline: 'Most in three months or fewer, by its own account',
    what: 'Anatta says it has moved more than $3.14 billion in sales volume to Shopify. It says the way Magento stores product data makes the cleanup the heaviest of any source platform. It says Dorel Juvenile moved four brands off Magento in about 90 days. It quotes after a data and integration audit.',
    seo: 'It says every indexed URL goes into an inventory with a mapped redirect, structured data is rebuilt and analytics stay continuous.',
    bestFor: 'Brands with $10M or more in revenue, especially with subscriptions or several brands to bring together.',
    ask: 'If subscription payment details must move, where does the Shopify step for that sit in our timeline?',
  },
  {
    name: 'Shero Commerce',
    url: 'https://sherocommerce.com/',
    source: 'https://sherocommerce.com/pages/magento-to-shopify',
    hqSource: 'https://sherocommerce.com/pages/contact',
    directory: 'https://www.shopify.com/partners/directory/partner/shero',
    tier: 'Platinum',
    group: 'B2B and ERP-heavy stores',
    based: 'Red Hook, New York',
    type: 'Shopify agency with a large Magento migration practice',
    clients: 'Manufacturers and specialist retailers. It names STX, Benchmade, Memphis Drum Shop, Painful Pleasures, Alto Music and Justrite Safety Group',
    systems: 'Magento 1, Magento 2, Adobe Commerce, Shopify Plus B2B, NetSuite, SAP, Microsoft Dynamics 365, Acumatica, QuickBooks',
    timeline: '10 to 14 weeks standard, 14 to 20 weeks with ERP, B2B and heavy custom work',
    what: 'Shero says it has delivered more than 40 Magento to Shopify migrations across Magento 1, Magento 2 and Adobe Commerce, and has worked on Magento since 2009. It says ERP connections must be rebuilt for Shopify, not reconnected. It moves products, customers, orders and content and checks the record count after each import.',
    seo: 'It maps every product, category and filter URL to a Shopify URL, tests the redirect set with a crawl tool before go-live, and watches rankings daily for 90 days.',
    bestFor: 'Magento stores with ERP connections, B2B pricing and years of custom modules.',
    ask: 'Which of our custom Magento modules will you replace with standard Shopify, an app or a custom build, and what does each choice cost?',
  },
  {
    name: 'ECommerce Partners',
    url: 'https://ecommercepartners.com/',
    source: 'https://ecommercepartners.com/platform-migrations/magento-to-shopify/',
    hqSource: 'https://ecommercepartners.com/about-us/',
    tier: 'No profile found',
    group: 'B2B and ERP-heavy stores',
    based: 'Tenafly, New Jersey. It says it was founded in Manhattan in 1998',
    type: 'B2B and direct-to-consumer development agency',
    clients: 'B2B sellers. It names QC Supply, moved from Magento to Shopify Plus with a custom B2B Pro Portal',
    systems: 'Magento, Adobe Commerce, Shopify Plus, Shopify Markets, Shopify Functions, Shopify Flow, NetSuite, SAP, Microsoft Dynamics',
    timeline: 'Under nine months even for heavily customized Adobe Commerce stores, it says',
    what: 'ECommerce Partners says it maps Magento product attributes into Shopify fields, options and metafields before any data moves. It moves B2B data in a fixed order: companies, customers, the links between them, price lists, products, then order history. It says customer passwords do not move, and Shopify’s new customer accounts use one-time codes instead.',
    seo: 'It maps Magento URL patterns, including filters, category paths and content pages, to 301 redirects and carries metadata, structured data and canonical tags field by field.',
    bestFor: 'Magento B2B stores with company accounts, customer-specific prices and payment terms.',
    ask: 'Will real B2B buyers from our accounts test the store before launch, and when?',
  },
  {
    name: 'Fyresite',
    url: 'https://www.fyresite.com/',
    source: 'https://www.fyresite.com/services/shopify-migration-services/',
    hqSource: 'https://www.fyresite.com/about',
    directory: 'https://www.shopify.com/partners/directory/partner/fyresite3',
    tier: 'Premier',
    group: 'B2B and ERP-heavy stores',
    based: 'Tempe, Arizona',
    type: 'Shopify agency with automotive and B2B work',
    clients: 'Parts and product brands. It names Chassis Unlimited, moved from Magento to Shopify Plus, and Clé Tile, moved from Magento and WordPress',
    systems: 'Magento, Miva, BigCommerce, WooCommerce, Drupal, SAP Hybris, NetSuite, Fishbowl, SAP, Acumatica, Microsoft Dynamics',
    timeline: 'Not published',
    what: 'Fyresite says it moves products, customers, full order history, reviews, content, metafields, vehicle fitment tables and B2B price lists with its own migration tools. It runs a test migration before the full move and says there is no storefront downtime at cutover. It says customer accounts move but passwords do not, so returning customers set a new one.',
    seo: 'It crawls the old site, maps every URL to Shopify with 301 redirects and keeps titles, metadata and structured data. It plans redirects in the first project phase.',
    bestFor: 'Parts-heavy or configurable catalogs, such as vehicle fitment and kits, moving off Magento with an ERP attached.',
    ask: 'Can we see a test migration of our hardest product type before we sign the full scope?',
  },
  {
    name: 'Netalico',
    url: 'https://netalico.com/',
    source: 'https://netalico.com/pages/magento-to-shopify-plus-migration',
    hqSource: 'https://netalico.com/pages/contact',
    directory: 'https://www.shopify.com/partners/directory/partner/netalico-llc',
    tier: 'Premier',
    group: 'Mid-market stores',
    based: 'Miami, per its Shopify profile. Its contact page also lists New York, Los Angeles, San Francisco and Chicago',
    type: 'Shopify Plus agency focused on migrations',
    clients: 'Stores doing $5M to $50M. It names Oatly, Feetures, Big Green Egg, Audio Advice and Lovey & Grink',
    systems: 'Magento, Adobe Commerce, BigCommerce, WooCommerce, Salesforce Commerce Cloud, Klaviyo, Rebuy, Gorgias. ERP work is mentioned without a named system',
    timeline: '16 to 24 weeks for $5M to $50M stores, 24 to 36 weeks for enterprise Adobe Commerce with ERP work',
    what: 'Netalico says it has completed more than 50 Magento to Shopify Plus migrations with a North American team and no outsourcing. It moves products, customer profiles, purchase history, open orders, gift cards and coupons. It says it uses AI agents to check migrated pages against the Magento original.',
    seo: 'It builds a redirect map covering products, categories, filter pages, content pages and blog posts, sets 301s at launch, and checks crawl errors and rankings weekly for 90 days.',
    bestFor: 'Magento stores doing $5M to $50M that want a fixed redirect map and B2B customer groups rebuilt in Shopify Plus.',
    ask: 'Which parts of the QA do your AI agents run, and which parts does a senior engineer sign off?',
  },
  {
    name: 'Solo Media Group',
    url: 'https://solomediagroup.com/',
    source: 'https://solomediagroup.com/pages/shopify-plus-migration',
    hqSource: 'https://solomediagroup.com/pages/contact',
    directory: 'https://www.shopify.com/partners/directory/partner/solo-media-group1',
    tier: 'Platinum',
    group: 'Mid-market stores',
    based: 'New York, New York. Its contact page also lists Los Angeles, Miami, San Francisco and Chicago',
    type: 'Shopify migration and build agency',
    clients: 'No client is named on the migration pages we read. It says it has migrated more than 100 stores from Magento, BigCommerce and custom platforms',
    systems: 'Magento 1 and 2, Adobe Commerce, WooCommerce, BigCommerce, OpenCart, Stay AI, ReCharge',
    timeline: '10 to 14 weeks typical',
    what: 'Solo Media Group says Magento is the migration it is asked about most. It splits the work into data migration, URL and redirect mapping, rebuilding integrations and theme development. It moves products, customers, full order history and content, and says Magento attribute sets need remodelling for Shopify.',
    seo: 'It says nearly every URL changes on Shopify, every URL with traffic or links needs a 301, and redirects go live at cutover. It also sells a separate migration SEO audit.',
    bestFor: 'Mid-market Magento stores that want a published starting price and a fixed redirect plan before data moves.',
    ask: 'Your page gives two starting figures, $15,000 and $20,000. Which applies to our store, and what is in each line?',
  },
  {
    name: 'Command C',
    url: 'https://commandc.com/',
    source: 'https://commandc.com/enterprise-migrations/',
    hqSource: 'https://www.shopify.com/partners/directory/partner/command-c',
    directory: 'https://www.shopify.com/partners/directory/partner/command-c',
    tier: 'Premier',
    group: 'Mid-market stores',
    based: 'Carrboro, North Carolina',
    type: 'Small senior team for eight and nine figure brands',
    clients: 'Eight and nine figure brands. Its Shopify profile names Miracle Suit, moved from Magento 2 to Shopify Plus with NetSuite, and Title Nine, moved from Salesforce Commerce Cloud',
    systems: 'Magento 2, Salesforce Commerce Cloud, Shopify Plus, BigCommerce, NetSuite, Shopify POS Pro, ERP and 3PL connections',
    timeline: 'Not published',
    what: 'Command C says it treats a migration as a business transition and starts with a paid Strategic Technical Roadmap. It builds and tests the new store in staging while the old site stays live, then moves data, sets redirects and runs QA. Its most common route is a customized ready-made Shopify theme rather than a full custom build.',
    seo: 'It says it moves data, sets redirects and runs quality checks at launch, with SEO kept through the move.',
    bestFor: 'Brands that want a written roadmap first and the same team as a long-term partner after launch.',
    ask: 'What does the Strategic Technical Roadmap cost, and is it credited against the migration?',
  },
  {
    name: 'Ruby Digital Agency',
    url: 'https://rubydigitalagency.com/',
    source: 'https://rubydigitalagency.com/adobe-commerce-to-shopify-migration-guide/',
    hqSource: 'https://www.shopify.com/partners/directory/partner/ruby-digital-agency',
    directory: 'https://www.shopify.com/partners/directory/partner/ruby-digital-agency',
    tier: 'Plus',
    group: 'Smaller single-site stores',
    based: 'West Jordan, Utah',
    type: 'Shopify partner that runs migrations in house',
    clients: 'It names Urban Remains Chicago, moved from Magento 2 with 21,264 products, 7,019 customers and 4,504 orders',
    systems: 'Adobe Commerce, Magento Open Source, Salesforce Commerce Cloud, NetSuite SuiteCommerce, Business Central, NetSuite, Celigo, Epicor, Acumatica',
    timeline: '10 to 14 weeks for one website, 3 to 6 months in stages for B2B, several sites or an ERP',
    what: 'Ruby says it keeps the catalog, customers, order history with the original order numbers, content and every URL, and rebuilds the storefront, extensions and connectors. It builds in a free Shopify development store so the Adobe Commerce site keeps selling until launch.',
    seo: 'It says every indexed URL, taken from the Magento rewrite table, a full crawl and Search Console, is mapped and tested, including store-view variants.',
    bestFor: 'Single-website Adobe Commerce stores selling direct that want a fixed price after an audit.',
    ask: 'What does the audit cost, and what pushes a single-site store above the $3,500 starting price?',
  },
  {
    name: 'Black Belt Commerce',
    url: 'https://www.blackbeltcommerce.com/',
    source: 'https://www.blackbeltcommerce.com/shopify-plus-migration-experts/',
    hqSource: 'https://www.blackbeltcommerce.com/contact/',
    directory: 'https://www.shopify.com/partners/directory/partner/shopifyninjas',
    tier: 'Plus',
    group: 'Smaller single-site stores',
    based: 'New York, New York',
    type: 'Shopify development and SEO agency',
    clients: 'No client is named on the pages we read',
    systems: 'Magento, WooCommerce, BigCommerce, Salesforce Commerce Cloud, NetSuite SuiteCommerce, PrestaShop, OpenCart, SAP Commerce Cloud, Shopware',
    timeline: 'Not published',
    what: 'Black Belt Commerce says every migration follows a six-phase framework. It lists products and variants, customers (with hashed passwords or a plan for customers to sign in again) and URL mapping with 301 redirects among the items it moves.',
    seo: 'It says it crawls the site, builds a one-to-one URL map, sets 301 redirects and keeps all metadata, with a 35-point launch checklist.',
    bestFor: 'Smaller Magento stores where protecting search traffic is the main worry.',
    ask: 'How many Magento to Shopify migrations has your team finished, and can we speak to one of those clients?',
  },
  {
    name: 'FactoryJet (that is us)',
    url: 'https://factoryjet.com/',
    source: 'https://factoryjet.com/replatforming/magento-to-shopify',
    tier: 'Registered',
    group: 'Us',
    based: 'Serves US clients, with calls in US business hours',
    type: 'Commerce and AI services company',
    clients: 'Brands and wholesalers whose store must stay in step with QuickBooks or an ERP',
    systems: 'Magento, Adobe Commerce, Salesforce Commerce Cloud, BigCommerce, WooCommerce, QuickBooks, NetSuite, Odoo, SAP Business One, ERPNext, EDI',
    timeline: '5 to 8 weeks for B2B, subscriptions or heavy data cleanup; 8 to 14 weeks for headless or custom builds',
    what: 'We move Magento and Adobe Commerce stores to Shopify Plus and connect the new store to the accounting or ERP system behind it. We publish our migration runbook, the published cost ranges and Adobe’s end-of-support dates on our Magento to Shopify page. We quote a fixed price in writing after a short scoping call, and you own everything we build.',
    seo: 'Our runbook includes a URL inventory, a redirect map and checks after launch. See the runbook on our Magento to Shopify page.',
    bestFor: 'Stores that want the migration, the ERP or QuickBooks connection and AI agents for store work from one team.',
    ask: 'Can we see working software on our own data before we sign a contract?',
  },
];

const GROUPS: Group[] = ['Enterprise Adobe Commerce', 'B2B and ERP-heavy stores', 'Mid-market stores', 'Smaller single-site stores', 'Us'];

// Sub-headings use the wording buyers used in the questions we tested.
const GROUP_HEADING: Record<Group, string> = {
  'Enterprise Adobe Commerce': 'Agencies for enterprise Adobe Commerce to Shopify Plus migrations',
  'B2B and ERP-heavy stores': 'Magento to Shopify migration services for B2B and ERP-connected stores',
  'Mid-market stores': 'Magento to Shopify Plus migration agencies for mid-market brands',
  'Smaller single-site stores': 'Help with migration from Magento to Shopify for smaller, single-site stores',
  Us: 'Magento to Shopify Plus with QuickBooks, ERP and AI agents: FactoryJet',
};

const GROUP_INTRO: Record<Group, string> = {
  'Enterprise Adobe Commerce':
    'Three Platinum partners that name large brands and multi-system setups. They differ in focus: SDG leads with engineering and back-office systems, Domaine with fashion and beauty, Anatta with $10M-plus brands and subscriptions.',
  'B2B and ERP-heavy stores':
    'Firms whose migration pages lead with company accounts, price lists and ERP connections. All three name at least one ERP they have connected.',
  'Mid-market stores':
    'Firms that describe themselves around mid-market brands. Two publish timelines. They differ most in how they start: Netalico with a redirect map, Solo Media Group with a published starting price, Command C with a paid roadmap.',
  'Smaller single-site stores':
    'Two Shopify Plus tier partners whose pages suit a single Magento website selling direct. One publishes a fixed starting price.',
  Us: 'We move Magento stores to Shopify Plus, so we are on this list. Our entry uses the same format as every other firm.',
};

const GROUP_LABEL: Record<Group, string> = {
  'Enterprise Adobe Commerce': 'Enterprise Adobe Commerce',
  'B2B and ERP-heavy stores': 'B2B and ERP-heavy',
  'Mid-market stores': 'Mid-market',
  'Smaller single-site stores': 'Smaller single-site',
  Us: 'Store plus ERP and AI agents',
};

// Published prices, copied from each firm's own page on 23 Oct 2026. These are
// the firms' own figures, not FactoryJet prices. Build and audit figures only.
const PRICES: { firm: string; figure: string; source: string }[] = [
  { firm: 'Ruby Digital Agency', figure: 'From $3,500, fixed after the audit, for one Adobe Commerce website selling direct. B2B, several websites or an ERP are quoted after discovery as a fixed price', source: 'https://rubydigitalagency.com/adobe-commerce-to-shopify-migration-guide/' },
  { firm: 'Solo Media Group', figure: 'Migration projects start at approximately $20,000, says the page. The FAQ on the same page says around $15,000, quoted as a line-item estimate', source: 'https://solomediagroup.com/pages/shopify-plus-migration' },
  { firm: 'Anatta', figure: '5-Day Horizon Readiness Audit, a written answer on whether to migrate, at $2,500, credited', source: 'https://anatta.io/what-we-do/shopify-migration-services/' },
];

// Adobe Experience League, Commerce lifecycle policy. Opened 23 Oct 2026.
const ADOBE_LIFECYCLE_URL = 'https://experienceleague.adobe.com/en/docs/commerce-operations/release/planning/lifecycle-policy';
const SUPPORT: { version: string; standard: string; extended: string }[] = [
  { version: 'Adobe Commerce 2.4.6', standard: 'Ended August 11, 2026', extended: 'Ends August 31, 2027. Security-only period ends May 31, 2028' },
  { version: 'Adobe Commerce 2.4.7', standard: 'Ends May 31, 2027', extended: 'Ends May 31, 2028' },
  { version: 'Adobe Commerce 2.4.8', standard: 'Ends May 31, 2028', extended: 'Not listed' },
  { version: 'Adobe Commerce 2.4.9 (released May 12, 2026)', standard: 'Ends May 31, 2029', extended: 'Not listed' },
];

const SHOPIFY_MIGRATE_URL = 'https://help.shopify.com/en/manual/migrating-to-shopify';
const STORE_MIGRATION_APP_URL = 'https://apps.shopify.com/store-migration';
const PLUS_HELP_URL = 'https://help.shopify.com/en/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan';

const tierCount = (t: string): number => FIRMS.filter((f) => f.group !== 'Us' && f.tier === t).length;

const FAQS: FAQItem[] = [
  {
    q: 'Who should I hire to migrate from Magento to Shopify Plus?',
    a: 'Hire for the store you have. For enterprise Adobe Commerce, look at SDG, Domaine or Anatta. For B2B and ERP-heavy stores, Shero Commerce, ECommerce Partners or Fyresite. For mid-market brands, Netalico, Solo Media Group or Command C. For a single website selling direct, Ruby Digital Agency or Black Belt Commerce. For a store tied to QuickBooks or an ERP with AI agents, FactoryJet. We read every firm on its own site on 23 October 2026.',
  },
  {
    q: 'What are the best Magento to Shopify migration agencies in the US?',
    a: 'No independent body ranks them. The closest neutral record is the Shopify partner directory, which shows each firm’s tier. Of the 11 other firms on this page, five are Platinum, three Premier and two Plus, and one has no profile we could find. Match the firm to your store first: its size, B2B needs and the systems it connects to. Then check the tier.',
  },
  {
    q: 'Which partner should migrate us from Salesforce Commerce Cloud to Shopify Plus?',
    a: 'Six firms on this page name Salesforce Commerce Cloud as a source platform: Domaine, Anatta, Netalico, Command C, Ruby Digital Agency and Black Belt Commerce. Domaine names Laura Mercier and Command C names Title Nine as moves from Salesforce Commerce Cloud to Shopify Plus. FactoryJet also runs these moves. Ask each firm for a finished Salesforce Commerce Cloud project with the same order system as yours.',
  },
  {
    q: 'How much does it cost to migrate from Magento to Shopify?',
    a: 'The Magento to Shopify migration cost rises with complexity. Ruby Digital Agency starts at $3,500 for one Adobe Commerce website selling direct. Solo Media Group gives two figures on one page: projects start at about $20,000, and its FAQ says around $15,000. Anatta charges $2,500 for a migration audit, credited. Most firms quote after discovery. LitExtension, a migration tool vendor, says a Shopify Plus migration may start from around $10,000 and can exceed $200,000, and it rates Magento as a high-complexity source. Shopify Plus itself is $2,300 a month on a three-year term or $2,500 on a one-year term in the US.',
  },
  {
    q: 'How long does a Magento to Shopify migration take?',
    a: 'The firms on this page publish 10 weeks to 9 months. Shero Commerce says 10 to 14 weeks for a standard store and 14 to 20 with ERP and B2B work. Solo Media Group and Ruby Digital Agency both say 10 to 14 weeks for a simple store. Netalico says 16 to 24 weeks for $5M to $50M stores. Anatta says most of its moves take three months or fewer.',
  },
  {
    q: 'How can I migrate my Magento store to Shopify?',
    a: 'Shopify’s help page sets the order: products first, then customers, then historical orders. You can use a migration app, export and import CSV files, or hire a partner. For a Magento 2 to Shopify migration, plan four more jobs: remodel product attributes, map every old URL to a 301 redirect, rebuild extensions and integrations, and decide how customers will sign in again.',
  },
  {
    q: 'Can Shopify’s free Store Migration app import from Magento?',
    a: 'No. On 23 October 2026 the app listing named Square, WooCommerce, Etsy, Wix, Amazon, eBay, Clover and Lightspeed as source platforms, with product and customer data uploaded from CSV files. Magento and Adobe Commerce were not on the list. Magento stores usually move with a third-party tool such as Cart2Cart, LitExtension or Matrixify, custom scripts or a partner’s own tools. Each of those three publishes a Magento to Shopify page, linked in the data section below.',
  },
  {
    q: 'Will I lose search traffic when I move from Magento to Shopify?',
    a: 'Not if every old URL that has traffic or links points to the right new page with a 301 redirect. Shopify uses its own URL patterns, so nearly every Magento URL changes. Every firm on this page except Domaine describes a redirect method on its migration page. Ask for the redirect map before data moves, and check crawl errors and rankings for 90 days after launch.',
  },
  {
    q: 'Do customer passwords move from Magento to Shopify?',
    a: 'Usually not. Fyresite and ECommerce Partners both say passwords do not carry over, so returning customers set a new one or sign in with a one-time code through Shopify’s new customer accounts. Black Belt Commerce lists hashed passwords or a re-sign-in plan. Ask which method a firm will use and how it will tell your customers.',
  },
  {
    q: 'Can I keep my Magento order history on Shopify?',
    a: 'Yes. Shopify’s help page lists historical orders as data a migration app can import, after products and customers. SDG, Shero Commerce, Netalico, Solo Media Group, Fyresite and Ruby Digital Agency all say they move order history. Ruby says it keeps the original order numbers. Ask whether open orders, gift cards and store credit move too.',
  },
  {
    q: 'Is Magento outdated, and does anyone still use it?',
    a: 'Adobe still ships and supports it. Adobe released Adobe Commerce 2.4.9 on May 12, 2026, with standard support to May 31, 2029. Older versions are closer to the end: 2.4.7 loses standard support on May 31, 2027. Adobe says that from June 1, 2027 it will stop maintaining cloud environments on unsupported versions and may suspend their traffic.',
  },
  {
    q: 'Is Magento free?',
    a: 'Magento Open Source has no license fee. Adobe publishes it on GitHub under the Open Software License 3.0. Running it still costs money: hosting, extensions, developers and security patches. Adobe Commerce, the paid edition, carries a license on top. Shopify Plus folds hosting and patching into its monthly fee of $2,300 on a three-year term or $2,500 on a one-year term in the US.',
  },
  {
    q: 'What are the disadvantages of staying on Magento?',
    a: 'You keep paying for hosting, patches and extension updates, and you must upgrade on Adobe’s schedule. Standard support for 2.4.7 ends May 31, 2027, and 2.4.6 lost it on August 11, 2026. From June 1, 2027 Adobe says it will stop maintaining cloud environments on unsupported versions and may suspend their traffic. A store on 2.4.8 or 2.4.9 has support to 2028 or 2029.',
  },
  {
    q: 'What are the downsides of moving from Magento to Shopify?',
    a: 'Nearly every URL changes, so each one with traffic needs a 301 redirect. Customer passwords usually do not move. Extensions do not move either, so each becomes a Shopify feature, an app or custom code. Product attributes need remodelling. Shopify Plus costs $2,300 to $2,500 a month in the US, and some larger businesses pay a variable fee instead.',
  },
  {
    q: 'What is Magento called now?',
    a: 'Adobe sells the paid edition as Adobe Commerce. The free, self-hosted edition is Magento Open Source. Agencies use both names, so a page offering Adobe Commerce to Shopify migration covers Magento 2 stores too. Magento 1 reached its end of life years ago. For a Magento 1 to Shopify migration, Shero Commerce, SDG and Solo Media Group all say they handle Magento 1 stores.',
  },
  {
    q: 'When does Adobe Commerce 2.4.7 support end?',
    a: 'Adobe’s lifecycle page, read on 23 October 2026, says standard support for Adobe Commerce 2.4.7 ends May 31, 2027, and extended support ends May 31, 2028. Version 2.4.6 lost standard support on August 11, 2026. A store on 2.4.7 that starts a migration in 2026 can finish before May 31, 2027. A store on 2.4.6 or older is already outside standard support.',
  },
  {
    q: 'Is Shopify Plus worth it in 2026, or will a standard plan do after Magento?',
    a: 'Plus is worth it when you need checkout rules, B2B or several stores. Shopify Plus adds checkout customization, unlimited B2B catalogs and expansion stores. A store with one price list and standard checkout may not need it. Shopify lists Plus at $2,300 a month on a three-year term or $2,500 a month on a one-year term in the US, and some larger businesses pay a variable fee instead.',
  },
  {
    q: 'What does a Shopify partner tier tell me about a migration agency?',
    a: 'A tier shows how much Shopify business a partner brings in and keeps. Each profile in Shopify’s partner directory shows it, and the 10 firms here with a profile show Plus, Premier or Platinum. A tier is a fair sign of scale. It does not show whether the firm has moved a Magento store like yours, so check the tier, then ask for a finished migration with the same extensions and back-office systems.',
  },
  {
    q: 'How many Shopify partners offer store migration in the US?',
    a: 'On 23 October 2026 the Shopify partner directory showed 916 partners under its store migration service with the United States filter on, and 4,214 with no location filter. The filter may include partners that list the US as a supported location, not only firms based there. The 12 on this page all show a US base.',
  },
  {
    q: 'Should I use a migration app or hire a Magento to Shopify migration agency?',
    a: 'Use an app when the store is simple: one website, standard products, few extensions and no ERP. Hire a partner when you have custom modules, B2B pricing, configurable products, an ERP or years of URLs that bring search traffic. Anatta calls Magento product data the heaviest cleanup of any source, and Shero Commerce says ERP connections must be rebuilt, so most of the time goes there.',
  },
  {
    q: 'What happens to my Magento extensions when I move to Shopify?',
    a: 'They do not move. Each extension is replaced by a standard Shopify feature, a Shopify app or custom code. Shero Commerce asks clients to decide this module by module, and Ruby Digital Agency says extensions and connectors are rebuilt while data and URLs are kept. List every extension and what it does before you ask for quotes.',
  },
  {
    q: 'Can B2B pricing and company accounts move from Magento to Shopify Plus?',
    a: 'Yes, as data, rebuilt on Shopify’s B2B features. ECommerce Partners moves B2B data in order: companies, customers, the links between them, price lists, products, then order history. Netalico says it rebuilds Magento customer groups in Shopify Plus B2B. Ask to see your largest customer’s price list working before launch.',
  },
  {
    q: 'What happens to our ERP connection during a Magento to Shopify move?',
    a: 'It has to be rebuilt for Shopify. Shero Commerce says ERP connections must be rebuilt for Shopify’s API, not reconnected. Firms on this page name NetSuite, SAP, Microsoft Dynamics, Acumatica, Epicor and QuickBooks. Budget for the connection as its own workstream, with its own testing, because order and stock errors cost more than a slow page.',
  },
  {
    q: 'What should I ask a Magento migration agency before I sign?',
    a: 'Ask for a finished migration with the same Magento version, extensions and ERP as yours, and a call with that client. Ask for the redirect map method, how passwords will be handled, who writes the code, and the rollback plan at cutover. Ask whether you will see something working on your own data before you sign, and who owns the code and accounts afterwards.',
  },
  {
    q: 'Does FactoryJet migrate Magento stores to Shopify Plus?',
    a: 'Yes. FactoryJet moves Magento and Adobe Commerce stores to Shopify Plus, and also migrates from Salesforce Commerce Cloud, BigCommerce and WooCommerce. It connects the new store to QuickBooks, NetSuite, Odoo, SAP Business One or ERPNext and can build AI agents for store work. It quotes a fixed price in writing after a short scoping call, and the client owns everything it builds.',
  },
];

const link = 'text-[#B23E13] underline';

export const post: BlogPost = {
  id: '841',
  slug: SLUG,
  title: TITLE,
  excerpt:
    'A fact-checked guide to Magento and Adobe Commerce to Shopify Plus migration agencies for US brands, grouped by the kind of store they suit. Shopify partner tier, timelines, redirect plans, ERP and B2B work and published prices for each, read on 23 October 2026. FactoryJet is on the list and says so.',
  category: 'E-Commerce Development',
  author: 'Bhavesh Barot',
  date: 'Oct 23, 2026',
  dateModified: 'Oct 31, 2026',
  hideExcerptOnPage: true,
  readTime: '22 min read',
  imageUrl: `${IMG}/hero.webp`,
  imageAlt:
    'A woman in a rust knit sweater and a man in a denim shirt stand at a wooden table moving blank white cards from a grey tray into a white tray beside an orange stapler',
  meta: {
    title: 'Best Magento to Shopify Migration Agencies 2026 | FactoryJet',
    description: META_DESCRIPTION,
  },
  keyTakeaways: [
    'No single Magento to Shopify migration agency suits every store. Match the firm to your store: enterprise Adobe Commerce, B2B with an ERP, a mid-market brand, or one website selling direct.',
    'Every fact about every firm was read on its own website on 23 October 2026, and on its Shopify partner directory profile where one exists (10 of the 11 other firms). Nobody paid to be listed, and the order is not a ranking.',
    'Published timelines run from 10 to 14 weeks for a simple store to 24 to 36 weeks for enterprise Adobe Commerce with ERP work.',
    'Three firms publish a price: Ruby Digital Agency (from $3,500 for one website), Solo Media Group (one line says from about $20,000, its FAQ says around $15,000) and Anatta ($2,500 audit, credited).',
    'Shopify’s free Store Migration app does not list Magento as a source. Magento moves need a paid app, scripts or a partner.',
    'Adobe Commerce 2.4.7 loses standard support on May 31, 2027. Version 2.4.6 already lost it on August 11, 2026.',
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
              datePublished: '2026-10-23',
              dateModified: '2026-10-31',
              isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com' },
              publisher: { '@id': 'https://factoryjet.com/#organization' },
              about: { '@type': 'Thing', name: 'Magento to Shopify Plus migration agencies for US brands' },
              speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#answer-first', 'h1', 'h2'] },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Magento to Shopify Plus migration agencies for US brands compared (2026)',
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
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">The short answer</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          For a migration from Magento to Shopify, hire for the store you have. For enterprise Adobe Commerce, SDG, Domaine or Anatta. For B2B and ERP-heavy stores, Shero Commerce, ECommerce Partners or Fyresite. For mid-market brands, Netalico, Solo Media Group or Command C. For one website selling direct, Ruby Digital Agency or Black Belt Commerce. For a store tied to QuickBooks or an ERP with AI agents, FactoryJet.
        </p>
        <p className="text-gray-800 leading-relaxed mb-3">
          We read all 12 firms on their own websites on 23 October 2026, and 10 of the other 11 in Shopify&rsquo;s partner directory as well (ECommerce Partners has no profile we could find): where each is based, its tier, the systems it names, its timeline, how it handles redirects and any price it publishes. Nobody paid to be listed. The order is not a ranking. FactoryJet wrote this list and is on it.
        </p>
        <p className="text-gray-800 leading-relaxed">
          Short on time? <a href="/contact" className={link}>Send us your Magento version, extensions and ERP</a> and the founder will tell you which kind of firm fits your move.
        </p>
      </div>

      <p className="mb-4">
        On 22 October 2026 we asked ChatGPT, Claude, Gemini, Perplexity and Google&rsquo;s AI answers two buyer questions, each several times: &ldquo;Who should I hire to migrate from Magento to Shopify Plus?&rdquo; and &ldquo;Which partner should migrate us from Salesforce Commerce Cloud to Shopify Plus?&rdquo; We collected 56 answers. They linked to 153 different pages. Of the 546 links, 206 went to list pages like this one.
      </p>
      <p className="mb-4">
        So we did the slow part. We started from the firms those answers named, kept only those with a US base and a real Magento to Shopify service, and opened each firm&rsquo;s own migration page and, where one exists, its Shopify directory profile. We dropped nine firms. Makro Agency and Taylor Sicard are based in Canada. Superco and Unified are in London, and Swanky lists teams in the UK and Australia. Turnaround Commerce lists no US office. UncannyCS, eSEOspace and OnTap Group showed no Magento to Shopify service on the pages we read. Every profile below links to its sources.
      </p>
      <p className="mb-4">
        <strong>Who wrote this.</strong> FactoryJet moves Magento stores to Shopify Plus, so we are on this list. Nobody paid to be included, the order is not a ranking, and our entry uses the same format as every other firm. Read every agency list with its author in mind, including this one.
      </p>
      <p className="mb-6">
        A few terms in plain English. <strong>Magento</strong> is the ecommerce platform Adobe now sells as <strong>Adobe Commerce</strong>; the free edition is Magento Open Source. <strong>Shopify Plus</strong> is Shopify&rsquo;s plan for high-volume businesses. A <strong>migration</strong> or replatform moves your products, customers, orders and web addresses from one platform to another. A <strong>301 redirect</strong> sends an old web address to its new page so shoppers and search engines follow it. An <strong>ERP</strong> is the system that holds orders, stock and accounts. A <strong>metafield</strong> is an extra field Shopify adds to a product, customer or order for data its standard fields do not hold. A <strong>store view</strong> is Magento&rsquo;s way of running one store in several languages or regions. A <strong>canonical tag</strong> tells search engines which address is the main copy of a page. <strong>Cutover</strong> is the moment the old store stops taking orders and the new one starts, and <strong>rollback</strong> is the plan to switch back if launch goes wrong. <a href="https://shopify.dev/docs/apps/build/functions" className={link} rel="noopener" target="_blank">Shopify Functions</a>{' '}are small pieces of custom code that change how discounts, shipping or checkout work.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The shortlist at a glance</h2>
      <p className="mb-4">Find the rows that match your store and the systems you run, then read those profiles in full.</p>
      <p className="md:hidden text-xs text-gray-500 mb-2">Swipe sideways to see every column.</p>
      <div className="overflow-x-auto mb-8 not-prose" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <table className="w-full border-collapse text-sm" style={{ minWidth: 640 }}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Firm</th>
              <th className="p-3 text-left border border-gray-700">Suits</th>
              <th className="p-3 text-left border border-gray-700">Shopify tier</th>
              <th className="p-3 text-left border border-gray-700">Published timeline</th>
              <th className="p-3 text-left border border-gray-700">Where based</th>
            </tr>
          </thead>
          <tbody>
            {FIRMS.map((f) => (
              <tr key={f.name} className={f.group === 'Us' ? 'bg-orange-50' : 'odd:bg-white even:bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-semibold align-top">{f.name}</td>
                <td className="p-3 border border-gray-200 align-top">{GROUP_LABEL[f.group]}</td>
                <td className="p-3 border border-gray-200 align-top">{f.tier}</td>
                <td className="p-3 border border-gray-200 align-top">{f.timeline}</td>
                <td className="p-3 border border-gray-200 align-top">{f.based}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">How we built this list</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Start from buyers&rsquo; own questions.</strong> The two questions above are how buyers ask. Google showed an AI answer on all six migration searches we checked.</li>
        <li><strong>Start from the firms AI answers name.</strong> We took the agencies cited in those 56 answers, then added firms that rank on Google for the same searches.</li>
        <li><strong>Keep only US-based firms with a real migration service.</strong> Each firm shows a US base on its own site or Shopify profile, and has a page describing Magento or Adobe Commerce to Shopify work.</li>
        <li><strong>Read two sources for each firm.</strong> The firm&rsquo;s own migration page, and its Shopify partner directory profile for tier and location where one exists. Both opened on 23 October 2026.</li>
        <li><strong>Report claims as claims.</strong> Project counts, timelines and client names are each firm&rsquo;s own, and we say so.</li>
        <li><strong>No scores we cannot prove.</strong> We have not hired these firms, so there are no star ratings. We say who each suits and one question worth asking it.</li>
        <li><strong>Prices only from the firm.</strong> Where a firm publishes a migration or audit price on its own site, we quote it and link the page.</li>
      </ol>
      <p className="mb-6">
        Google&rsquo;s US first page for &ldquo;magento to shopify migration agency&rdquo; on 23 October 2026 was mostly migration guides and single-agency service pages, so this page compares 12 US firms side by side instead.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Why now: Adobe Commerce support dates</h2>
      <p className="mb-4">
        Many Magento owners start looking because of support dates. These rows come from <a href={ADOBE_LIFECYCLE_URL} className={link} rel="noopener" target="_blank">Adobe&rsquo;s Commerce lifecycle policy</a>, read on 23 October 2026. Adobe says each version gets three years of standard support from its release.
      </p>
      <p className="md:hidden text-xs text-gray-500 mb-2">Swipe sideways to see every column.</p>
      <div className="overflow-x-auto mb-4 not-prose" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <table className="w-full border-collapse text-sm" style={{ minWidth: 640 }}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Version</th>
              <th className="p-3 text-left border border-gray-700">Standard support</th>
              <th className="p-3 text-left border border-gray-700">Extended support</th>
            </tr>
          </thead>
          <tbody>
            {SUPPORT.map((s) => (
              <tr key={s.version} className="odd:bg-white even:bg-gray-50">
                <td className="p-3 border border-gray-200 font-semibold align-top">{s.version}</td>
                <td className="p-3 border border-gray-200 align-top">{s.standard}</td>
                <td className="p-3 border border-gray-200 align-top">{s.extended}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        Adobe also says that from June 1, 2027 it will stop maintaining Adobe Commerce cloud environments that run unsupported versions and may suspend their traffic. The table covers Adobe Commerce; the page says nothing about Magento Open Source. With published migration timelines of 10 to 36 weeks, a store on 2.4.7 that starts in early 2027 has little room. For the full comparison, read <a href="/comparisons/shopify-plus-vs-magento" className={link}>Shopify Plus vs Magento</a>.
      </p>
      <p className="mb-6">
        <strong>Stay or move.</strong> A store on 2.4.8 or 2.4.9 has standard support until 2028 or 2029, so it can plan a move without a deadline. A store on 2.4.7 or older, especially on Adobe Commerce cloud, should start the move now or budget for an Adobe upgrade first.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The best Magento to Shopify Plus migration agencies, profiled</h2>
      <p className="mb-6">
        The order is not a ranking. Firms are grouped by the kind of Magento store they suit: enterprise Adobe Commerce, B2B and ERP-heavy stores, mid-market brands, smaller single-site stores, then us. Of the 11 other firms, the Shopify directory listed {tierCount('Platinum')} as Platinum, {tierCount('Premier')} as Premier and {tierCount('Plus')} as Plus on 23 October 2026.
      </p>

      {GROUPS.map((g) => {
        const inGroup = FIRMS.filter((f) => f.group === g);
        return (
          <section key={g} className="mb-6">
            <h3 className="text-xl font-bold mt-8 mb-2">{GROUP_HEADING[g]}</h3>
            <p className="mb-4 text-gray-700">{GROUP_INTRO[g]}</p>
            {inGroup.map((f) => {
              const n = FIRMS.indexOf(f) + 1;
              return (
                <div key={f.name} className="mb-8">
                  <h4 className="text-lg font-bold mt-6 mb-2">{n}. {f.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Based:</strong> {f.based}. <strong>Type:</strong> {f.type}. <strong>Shopify partner tier:</strong> {f.tier}.
                  </p>
                  <p className="mb-3">{f.what}</p>
                  <table className={styles.profileFacts}><tbody><tr><th scope="row"><strong>Best for:</strong></th><td>{f.bestFor}</td></tr><tr><th scope="row"><strong>Typical client:</strong></th><td>{f.clients}.</td></tr><tr><th scope="row"><strong>Platforms and systems it names:</strong></th><td>{f.systems}.</td></tr><tr><th scope="row"><strong>Timeline it publishes:</strong></th><td>{f.timeline}.</td></tr><tr><th scope="row"><strong>Redirects and SEO:</strong></th><td>{f.seo}</td></tr><tr><th scope="row"><strong>Worth asking them:</strong></th><td>{f.ask}</td></tr></tbody></table>
                  <p className="text-sm text-gray-600 [overflow-wrap:anywhere]">
                    Source:{' '}
                    <a href={f.source} className={link} rel="noopener" target={f.source.startsWith('https://factoryjet.com') ? undefined : '_blank'}>
                      {f.source.replace('https://', '')}
                    </a>
                    {f.hqSource && f.hqSource !== f.directory && (
                      <>
                        {' '}| Location:{' '}
                        <a href={f.hqSource} className={link} rel="noopener" target="_blank">
                          {f.hqSource.replace('https://', '').split('/')[0]}
                        </a>
                      </>
                    )}
                    {f.directory && (
                      <>
                        {' '}| Shopify directory:{' '}
                        <a href={f.directory} className={link} rel="noopener" target="_blank">
                          {f.directory.replace('https://www.', '').split('/partner/')[0]}
                        </a>
                      </>
                    )}
                  </p>
                </div>
              );
            })}
            {g === 'B2B and ERP-heavy stores' && (
              <figure className="my-8 not-prose">
                <img
                  src={`${IMG}/replatform.webp`}
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  alt="A man in a green work shirt carries a plain cardboard box from old dark wooden shelves toward new pale metal shelves, with an orange tape gun on a stool"
                  className="w-full h-auto rounded-xl"
                />
                <figcaption className="text-sm text-gray-600 mt-2">A migration is a stock move for your data. Every product, price list, customer and order needs a place on the new shelf before it leaves the old one.</figcaption>
              </figure>
            )}
            {g === 'Mid-market stores' && (
              <figure className="my-8 not-prose">
                <img
                  src={`${IMG}/redirects.webp`}
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  alt="A woman with a short silver bob and a cream cardigan sits at a desk looking at a monitor showing two columns of grey boxes joined by thin lines, with an orange sticky note pad beside her"
                  className="w-full h-auto rounded-xl"
                />
                <figcaption className="text-sm text-gray-600 mt-2">A redirect map pairs every old Magento address with its new Shopify page. Ask to see it before any data moves.</figcaption>
              </figure>
            )}
          </section>
        );
      })}

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 my-8 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">If you are ready to talk to a builder</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Our <a href="/services/shopify-migration-agency" className={link}>Shopify migration service</a> starts with a short scoping call and a fixed price in writing. The founder joins the first call, and we can show working software on your own data before you sign a contract.
        </p>
        <a href="/contact" className="inline-block rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white">Talk to the Founder</a>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">What these agencies publish about price</h2>
      <p className="mb-4">
        Most firms quote after an audit or discovery call. On the pages we read on 23 October 2026, three of the 11 other firms publish a figure. We copied them exactly. They are each firm&rsquo;s own figures, not FactoryJet prices or a market survey.
      </p>
      <p className="md:hidden text-xs text-gray-500 mb-2">Swipe sideways to see every column.</p>
      <div className="overflow-x-auto mb-4 not-prose" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <table className="w-full border-collapse text-sm" style={{ minWidth: 640 }}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Firm</th>
              <th className="p-3 text-left border border-gray-700">Published figure (USD)</th>
              <th className="p-3 text-left border border-gray-700">Source (opened 23 Oct 2026)</th>
            </tr>
          </thead>
          <tbody>
            {PRICES.map((p) => (
              <tr key={p.firm} className="odd:bg-white even:bg-gray-50">
                <td className="p-3 border border-gray-200 font-semibold align-top">{p.firm}</td>
                <td className="p-3 border border-gray-200 align-top">{p.figure}</td>
                <td className="p-3 border border-gray-200 align-top">
                  <a href={p.source} className={link} rel="noopener" target="_blank">{p.source.replace('https://', '')}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-4">
        Ruby prices only the simplest case. Solo Media Group gives two figures, so ask which applies. Anatta prices the audit, not the migration. The other eight firms show no figure.
      </p>
      <p className="mb-6">
        The platform is a separate bill. <a href={PLUS_HELP_URL} className={link} rel="noopener" target="_blank">Shopify&rsquo;s Plus plan page</a> lists $2,300 a month on a three-year term or $2,500 a month on a one-year term in the US, with a variable fee for some larger businesses. For the whole migration, <a href="https://litextension.com/blog/shopify-plus-migration-cost/" className={link} rel="noopener" target="_blank">LitExtension&rsquo;s cost guide</a>{' '}says a Shopify Plus migration may start from around $10,000 and can exceed $200,000, and rates Magento and Adobe Commerce as high-complexity sources. For more published market ranges for a whole migration, see our <a href="/replatforming/magento-to-shopify" className={link}>Magento to Shopify Plus migration cost and timeline page</a> and the <a href="/tools/replatforming-cost-calculator" className={link}>replatforming cost calculator</a>.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">What moves in a Magento to Shopify data migration, and what does not</h2>
      <p className="mb-4">
        <a href={SHOPIFY_MIGRATE_URL} className={link} rel="noopener" target="_blank">Shopify&rsquo;s migration help page</a> sets the order: products, then customers, then historical orders. It lists apps as an option for products, customers, historical orders, gift cards and store credit, blogs and pages. Shopify&rsquo;s free <a href={STORE_MIGRATION_APP_URL} className={link} rel="noopener" target="_blank">Store Migration app</a>{' '}does not list Magento as a source. Magento stores move with a third-party tool such as <a href="https://www.shopping-cart-migration.com/shopping-cart-migration-options/1066-magento-to-shopify-migration" className={link} rel="noopener" target="_blank">Cart2Cart</a>,{' '}<a href="https://litextension.com/shopify-migration/magento-to-shopify-migration.html" className={link} rel="noopener" target="_blank">LitExtension</a>{' '}or <a href="https://matrixify.app/migrate-to-shopify/magento/" className={link} rel="noopener" target="_blank">Matrixify</a>, with scripts, or with a partner&rsquo;s own tools. Magento to Shopify product migration is usually the hardest part. Here is what the firms on this page say about each kind of data.
      </p>
      <p className="md:hidden text-xs text-gray-500 mb-2">Swipe sideways to see every column.</p>
      <div className="overflow-x-auto mb-4 not-prose" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <table className="w-full border-collapse text-sm" style={{ minWidth: 640 }}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Data</th>
              <th className="p-3 text-left border border-gray-700">What happens</th>
              <th className="p-3 text-left border border-gray-700">What the firms say</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50"><td className="p-3 border border-gray-200 font-semibold align-top">Products</td><td className="p-3 border border-gray-200 align-top">Move, but attributes are remodelled</td><td className="p-3 border border-gray-200 align-top">Anatta calls Magento&rsquo;s product data the heaviest cleanup of any source. ECommerce Partners maps attributes to fields, options and metafields first.</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className="p-3 border border-gray-200 font-semibold align-top">Customers</td><td className="p-3 border border-gray-200 align-top">Move</td><td className="p-3 border border-gray-200 align-top">All firms that list data say customers move.</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className="p-3 border border-gray-200 font-semibold align-top">Passwords</td><td className="p-3 border border-gray-200 align-top">Usually do not move</td><td className="p-3 border border-gray-200 align-top">Fyresite and ECommerce Partners say they do not. Black Belt Commerce lists hashed passwords or a re-sign-in plan.</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className="p-3 border border-gray-200 font-semibold align-top">Order history</td><td className="p-3 border border-gray-200 align-top">Moves</td><td className="p-3 border border-gray-200 align-top">Ruby Digital Agency keeps the original order numbers. Netalico also moves open orders, gift cards and coupons.</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className="p-3 border border-gray-200 font-semibold align-top">B2B companies and price lists</td><td className="p-3 border border-gray-200 align-top">Move, rebuilt on Shopify B2B</td><td className="p-3 border border-gray-200 align-top">ECommerce Partners moves companies, customers, links, price lists, products, then orders, in that order.</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className="p-3 border border-gray-200 font-semibold align-top">Extensions and integrations</td><td className="p-3 border border-gray-200 align-top">Do not move; rebuilt</td><td className="p-3 border border-gray-200 align-top">Shero Commerce says ERP connections are rebuilt for Shopify&rsquo;s API, not reconnected.</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className="p-3 border border-gray-200 font-semibold align-top">Web addresses</td><td className="p-3 border border-gray-200 align-top">Change; need 301 redirects</td><td className="p-3 border border-gray-200 align-top">Solo Media Group says nearly every URL changes on Shopify.</td></tr>
          </tbody>
        </table>
      </div>

      <figure className="my-8 not-prose">
        <img
          src={`${IMG}/compare.webp`}
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          alt="A woman in a white blouse opens an orange folder on an oak desk while a plain grey folder and a plain blue folder lie closed beside it"
          className="w-full h-auto rounded-xl"
        />
        <figcaption className="text-sm text-gray-600 mt-2">Send each firm the same brief, with your Magento version, extension list and ERP, so every quote covers the same scope.</figcaption>
      </figure>

      <h2 className="text-2xl font-bold mt-10 mb-4">Which Magento to Shopify migration agency fits your store</h2>
      <p className="mb-4">Find the line that sounds most like you. It points to a kind of firm first and a name second.</p>
      <table className={[styles.profileFacts, styles.choiceFacts].join(' ')}><tbody>
        <tr><th scope="row">&ldquo;We run enterprise Adobe Commerce with several back-office systems.&rdquo;</th><td>SDG, or Anatta if you have $10M or more in revenue and subscriptions.</td></tr>
        <tr><th scope="row">&ldquo;We are a fashion or beauty brand on Adobe Commerce or Salesforce Commerce Cloud.&rdquo;</th><td>Domaine.</td></tr>
        <tr><th scope="row">&ldquo;We sell wholesale on Magento with company accounts and price lists.&rdquo;</th><td>ECommerce Partners or Shero Commerce.</td></tr>
        <tr><th scope="row">&ldquo;We have a huge parts catalog with fitment data and an ERP.&rdquo;</th><td>Fyresite.</td></tr>
        <tr><th scope="row">&ldquo;We do $5M to $50M and our search traffic matters most.&rdquo;</th><td>Netalico. Solo Media Group if you want a published starting price.</td></tr>
        <tr><th scope="row">&ldquo;We want a written plan before we commit to a build.&rdquo;</th><td>Command C, or Anatta&rsquo;s paid audit.</td></tr>
        <tr><th scope="row">&ldquo;We have one Adobe Commerce website and a modest budget.&rdquo;</th><td>Ruby Digital Agency, or Black Belt Commerce for an SEO-led team.</td></tr>
        <tr><th scope="row">&ldquo;We are leaving Salesforce Commerce Cloud, not Magento.&rdquo;</th><td>Domaine and Command C name finished moves. Anatta, Netalico, Ruby Digital Agency and Black Belt Commerce also list it. See our <a href="/replatforming/salesforce-commerce-cloud-to-shopify-plus" className={link}>Salesforce Commerce Cloud to Shopify Plus guide</a>.</td></tr>
        <tr><th scope="row">&ldquo;The new store must stay in step with QuickBooks or our ERP, and we want AI agents on order work.&rdquo;</th><td>FactoryJet builds the store, the connection and the agents as one project. See <a href="/services/ecommerce-erp-integration" className={link}>ecommerce ERP integration</a> and <a href="/services/shopify-ai-agents" className={link}>Shopify AI agents</a>.</td></tr>
      </tbody></table>

      <h2 className="text-2xl font-bold mt-10 mb-4">Magento to Shopify migration steps: how to choose a partner in 7 steps</h2>
      <div className="space-y-3 mb-8 not-prose">
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">1. Write down your Magento version, extensions and systems</summary>
          <p className="mt-3 text-gray-700">List the Magento or Adobe Commerce version, every extension and what it does, the ERP, accounting and warehouse systems, the number of products and store views, and any B2B price lists. Our <a href="/blog/magento-to-shopify-plus-migration-checklist-2026" className={link}>Magento to Shopify migration checklist</a> has the full list.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">2. Check your support deadline</summary>
          <p className="mt-3 text-gray-700">Find your version in the Adobe table above. Count back from the end of standard support using the timelines firms publish: 10 to 14 weeks for a simple store, up to 36 weeks for enterprise with ERP work.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">3. Decide whether you need Shopify Plus</summary>
          <p className="mt-3 text-gray-700">Plus adds checkout customization, unlimited B2B catalogs and expansion stores. A single-price-list store with standard checkout may not need it. A good agency will say so.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">4. Shortlist by the kind of store each firm names</summary>
          <p className="mt-3 text-gray-700">Use the groups above. A $3,500 single-site move and a 36-week enterprise move are different jobs, and the firms that do one well rarely sell the other.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">5. Ask for the redirect method in writing</summary>
          <p className="mt-3 text-gray-700">Ask where the URL list comes from (crawl, Search Console, the Magento rewrite table), how filter and store-view addresses are handled, and how long rankings are watched after launch. Read our guide to <a href="/blog/ecommerce-replatforming-without-losing-seo-2026" className={link}>replatforming without losing SEO</a>.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">6. Ask for a test migration of your hardest data</summary>
          <p className="mt-3 text-gray-700">Fyresite offers a test migration before the full move. Ask every firm to run your most complex product type or largest customer&rsquo;s price list first.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">7. Agree cutover, rollback and ownership</summary>
          <p className="mt-3 text-gray-700">Agree the last data sync, who decides to roll back, and who supports the store after launch. Make sure the Shopify store, theme code and app accounts are in your company&rsquo;s name.</p>
        </details>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Six questions to ask before you sign</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Which Magento version, extensions and ERP were in your last three migrations?</strong> Ask to speak to one of those clients.</li>
        <li><strong>Where does your URL list come from, and how long do you watch rankings?</strong> Shero Commerce and Netalico both say 90 days.</li>
        <li><strong>How will customers sign in after the move?</strong> Passwords usually do not carry over.</li>
        <li><strong>Who writes the code?</strong> Netalico says nothing is outsourced. Ask every firm the same question.</li>
        <li><strong>Can we see our own data working before we sign?</strong> FactoryJet shows working software on the buyer&rsquo;s own data before a contract.</li>
        <li><strong>Who owns the theme code, the custom apps and the accounts at the end?</strong> The answer should be you, in writing.</li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4">What FactoryJet does on a Magento to Shopify Plus move</h2>
      <p className="mb-4">
        We are FactoryJet. We have served 500+ businesses, most of them in commerce: online stores, B2B ordering and the operations behind them. Our founder, Bhavesh Barot, is involved in every project. We are a registered Shopify Partner.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Migration.</strong> From Magento, Adobe Commerce, Salesforce Commerce Cloud, BigCommerce and WooCommerce. See <a href="/services/shopify-migration-agency" className={link}>Shopify migration</a> and our <a href="/replatforming/magento-to-shopify" className={link}>Magento to Shopify runbook</a>.</li>
        <li><strong>Store.</strong> Shopify Plus themes, checkout extensions and Functions. See <a href="/services/shopify-plus-agency" className={link}>Shopify Plus development</a>.</li>
        <li><strong>B2B.</strong> Companies, catalogs, payment terms and wholesale ordering. See <a href="/services/shopify-plus-b2b" className={link}>Shopify Plus B2B</a>.</li>
        <li><strong>Integrations.</strong> QuickBooks, NetSuite, Odoo, SAP Business One, ERPNext and custom ERPs, plus EDI. See <a href="/services/shopify-quickbooks-integration" className={link}>Shopify and QuickBooks integration</a> and <a href="/services/ecommerce-erp-integration" className={link}>ecommerce ERP integration</a>.</li>
        <li><strong>AI agents.</strong> Agents for order exceptions, emailed purchase orders and returns, with approval steps. See <a href="/services/shopify-ai-agents" className={link}>Shopify AI agents</a>.</li>
      </ul>
      <p className="mb-4">
        A move with B2B, subscriptions or heavy data cleanup usually takes 5 to 8 weeks. A headless or custom build usually takes 8 to 14 weeks. We quote a fixed price in writing after a short scoping call, and we can show working software on your own data before you sign. You own everything we build. If you also want to stay on Magento for now, we support that too: see <a href="/services/magento-development" className={link}>Magento development</a>.
      </p>
      <p className="mb-6">
        Related reading: <a href="/blog/best-shopify-plus-agencies-usa-2026" className={link}>the best Shopify Plus agencies for US brands</a>, <a href="/blog/shopify-plus-migration-cost-2026" className={link}>what a Shopify Plus migration costs</a> and <a href="/blog/magento-to-shopify-plus-migration-checklist-2026" className={link}>the Magento to Shopify Plus migration checklist</a>.
      </p>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mb-8 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">If you are still working out the move</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Send us your Magento version, your extension list and the systems the store must talk to. On a free call, the founder will tell you whether you need Shopify Plus, what the migration involves and which kind of firm fits. Our <a href="/replatforming/magento-to-shopify" className={link}>Magento to Shopify runbook</a>{' '}shows every step first.
        </p>
        <a href="/contact" className="inline-block rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white">Book a free call with the founder</a>
      </div>
    </>
  ),
};
