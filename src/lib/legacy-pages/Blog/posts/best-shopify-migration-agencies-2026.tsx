import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

const SLUG = 'best-shopify-migration-agencies-2026';
const PAGE_URL = `https://factoryjet.com/blog/${SLUG}`;
const READ_DATE = '16 November 2026';
const TITLE = 'Best Shopify Migration Agencies for US Brands (2026): 10 Compared by Source Platform, Including Us';
const META_DESCRIPTION =
  'Compare 10 Shopify migration agencies for US mid-market brands by source platform: WooCommerce, BigCommerce, Salesforce Commerce Cloud, Magento, Squarespace and Wix. Tiers, redirect methods, timelines and published prices.';

// Every fact about every firm below was read on that firm's own website and on
// its Shopify Partner Directory profile on 16 November 2026. The URLs are in
// `sources` and `directory`. Nobody paid to be listed. The order is NOT a ranking.
// The comparison table, the profiles and the ItemList schema all map from FIRMS.
type Mark = 'Shown' | 'Not shown';

interface Firm {
  name: string;
  url: string;
  directory?: string;
  sources: { label: string; href: string }[];
  tier: string;
  based: string;
  woo: Mark;
  bc: Mark;
  sfcc: Mark;
  magento: Mark;
  sqwix: string;
  what: string;
  seo: string;
  timeline: string;
  price: string;
  bestFor: string;
  ask: string;
}

const FIRMS: Firm[] = [
  {
    name: 'Domaine',
    url: 'https://domaineworldwide.com/',
    directory: 'https://www.shopify.com/partners/directory/partner/meet-domaine',
    sources: [
      { label: 'Platform migration hub', href: 'https://domaineworldwide.com/resources/platform-migrations/' },
      { label: 'Salesforce migrations', href: 'https://domaineworldwide.com/services/technology/sfcc-migrations' },
      { label: 'BigCommerce migrations', href: 'https://domaineworldwide.com/services/technology/bigcommerce-migrations' },
    ],
    tier: 'Platinum',
    based: 'New York, per its Shopify profile',
    woo: 'Not shown',
    bc: 'Shown',
    sfcc: 'Shown',
    magento: 'Shown',
    sqwix: 'Not shown',
    what: 'Domaine says it has completed 150+ enterprise migrations to Shopify from Salesforce Commerce Cloud, Adobe Commerce, BigCommerce, commercetools and custom platforms. It has a separate service page for each source platform. Its migration hub names Orveon (bareMinerals, Laura Mercier) as a Salesforce Commerce Cloud move and Polywood as an Adobe Commerce move.',
    seo: 'Not described on the pages we read.',
    timeline: 'Its hub lists average timelines of 39 to 52 weeks from Salesforce Commerce Cloud, 30 to 36 weeks from Adobe Commerce and 30 to 36 weeks from BigCommerce',
    price: 'Not published',
    bestFor: 'Enterprise brands leaving Salesforce Commerce Cloud with several regions or brands to move.',
    ask: 'Who owns the redirect map on your team, and can we see one from a past Salesforce Commerce Cloud move?',
  },
  {
    name: 'Anatta',
    url: 'https://anatta.io/',
    directory: 'https://www.shopify.com/partners/directory/partner/anatta1',
    sources: [{ label: 'Shopify migration services', href: 'https://anatta.io/what-we-do/shopify-migration-services/' }],
    tier: 'Platinum',
    based: 'Austin, Texas',
    woo: 'Shown',
    bc: 'Shown',
    sfcc: 'Shown',
    magento: 'Shown',
    sqwix: 'Not shown',
    what: 'Anatta works with brands at $10M+ and says it has moved $4B+ in GMV to Shopify. It says yes to migrations from all four big sources: Magento, Salesforce Commerce Cloud, BigCommerce and WooCommerce. It names buybuy BABY (31 days off Oracle ATG) and Dorel Juvenile (four brands off Magento in about 90 days). On Salesforce Commerce Cloud, it says the custom cartridges, not the data, are the hard part.',
    seo: 'Every indexed URL goes into an inventory with a mapped redirect. Structured data is rebuilt and analytics stay continuous, so the month after launch can be compared to the month before.',
    timeline: 'Most finish in 3 months or fewer, as of November 2026, by its own account',
    price: 'A 5-Day Horizon Readiness Audit, a written answer on whether to migrate, at $2,500, credited',
    bestFor: 'Brands at $10M or more with subscriptions, several brands or an ERP to bring along.',
    ask: 'If we leave Salesforce Commerce Cloud, which of our cartridges become apps, which become Shopify Functions, and which go away?',
  },
  {
    name: 'Shero Commerce',
    url: 'https://sherocommerce.com/',
    directory: 'https://www.shopify.com/partners/directory/partner/shero',
    sources: [
      { label: 'Salesforce Commerce Cloud to Shopify', href: 'https://sherocommerce.com/pages/salesforce-commerce-cloud-to-shopify' },
      { label: 'WooCommerce to Shopify', href: 'https://sherocommerce.com/pages/woocommerce-to-shopify-migration' },
      { label: 'BigCommerce to Shopify', href: 'https://sherocommerce.com/pages/bigcommerce-to-shopify-migration' },
      { label: 'Squarespace to Shopify', href: 'https://sherocommerce.com/pages/squarespace-to-shopify-migration' },
      { label: 'Wix to Shopify', href: 'https://sherocommerce.com/pages/wix-to-shopify-migration' },
    ],
    tier: 'Platinum',
    based: 'Red Hook, New York',
    woo: 'Shown',
    bc: 'Shown',
    sfcc: 'Shown',
    magento: 'Shown',
    sqwix: 'Both shown',
    what: 'Shero has a separate migration page for each source platform we checked. For Salesforce Commerce Cloud, it lists every cartridge, ISML template, controller and job, then matches each to standard Shopify, an app, a Function or custom code. For WooCommerce, it audits every plugin, moves order history, reviews, coupons and blog posts, and writes the account invite email because passwords cannot move. On BigCommerce moves it runs a delta import of the latest orders on launch day, then gives two to four weeks of support after launch.',
    seo: 'It maps the full URL set in discovery and sets 301s before DNS cutover. On WooCommerce moves, every /product/ and /product-category/ URL and blog post is redirected and crawled, and WordPress is kept as a fallback at launch. Search Console is watched through launch week.',
    timeline: '6 to 12 weeks for WooCommerce. Salesforce Commerce Cloud timelines are given in writing after a discovery audit',
    price: 'Not published',
    bestFor: 'Salesforce Commerce Cloud stores with many cartridges, and WooCommerce stores with a large plugin list.',
    ask: 'Can we see the cartridge or plugin list from a past move, with the decision you made for each line?',
  },
  {
    name: 'Netalico',
    url: 'https://netalico.com/',
    directory: 'https://www.shopify.com/partners/directory/partner/netalico-llc',
    sources: [
      { label: 'Migrations', href: 'https://netalico.com/pages/migrations' },
      { label: 'WooCommerce to Shopify', href: 'https://netalico.com/pages/woocommerce-to-shopify-migration' },
      { label: 'Salesforce Commerce Cloud to Shopify', href: 'https://netalico.com/pages/salesforce-commerce-cloud-to-shopify-migration' },
      { label: 'BigCommerce to Shopify', href: 'https://netalico.com/pages/bigcommerce-to-shopify-migration' },
      { label: 'Squarespace to Shopify', href: 'https://netalico.com/pages/squarespace-to-shopify-migration' },
    ],
    tier: 'Premier',
    based: 'Miami, per its Shopify profile. Its pages also list New York, Los Angeles, San Francisco and Chicago',
    woo: 'Shown',
    bc: 'Shown',
    sfcc: 'Shown',
    magento: 'Shown',
    sqwix: 'Both shown',
    what: 'Netalico publishes a separate page, timeline and in some cases a price for each source platform, including Volusion, Wix and Squarespace. On Salesforce Commerce Cloud moves it maps master and variant products, catalogs and price books, customer lists, order history and content assets. It says passwords cannot move, so it sets up account invitations, and stored cards are re-vaulted through Shopify Payments. It says AI builds its redirect maps from crawled URLs rather than a guessed rule.',
    seo: 'Every /s/SiteID/ product and category URL, every .html product page and every old demandware.store link is crawled and mapped to a 301. On Squarespace moves it watches rankings for 60 days after launch.',
    timeline: '12 to 20 weeks from Salesforce Commerce Cloud. 8 to 12 weeks for a clean WooCommerce store, 12 to 20 for plugin-heavy or B2B stores. 6 to 10 weeks from Squarespace. 8 to 12 weeks for a simple BigCommerce move, up to 16 to 24 for enterprise',
    price: 'Project work runs $25,000 to $250,000+, with Salesforce Commerce Cloud moves usually in the upper half. BigCommerce tiers: $15,000 to $30,000 simple, $30,000 to $60,000 mid-market, $75,000 to $150,000+ enterprise',
    bestFor: 'Mid-market brands that want a published price band and timeline for their exact source platform before the first call.',
    ask: 'Which parts of the redirect map does AI build, and who signs it off before launch?',
  },
  {
    name: 'Solo Media Group',
    url: 'https://solomediagroup.com/',
    directory: 'https://www.shopify.com/partners/directory/partner/solo-media-group1',
    sources: [{ label: 'Shopify Plus migration', href: 'https://solomediagroup.com/pages/shopify-plus-migration' }],
    tier: 'Platinum',
    based: 'New York, per its Shopify profile',
    woo: 'Shown',
    bc: 'Shown',
    sfcc: 'Not shown',
    magento: 'Shown',
    sqwix: 'Both shown',
    what: 'Solo Media Group says it moves stores from Magento, WooCommerce, BigCommerce and custom platforms to Shopify Plus, and has delivered 75+ replatforms and new builds since March 2018. Its migration page links guides for Magento, WooCommerce, BigCommerce and Squarespace, and shows price tiers for Wix stores. It says Wix customer accounts, order history and blog posts have no admin export and must be pulled out through Wix APIs or from the live pages.',
    seo: 'Its page shows the URL patterns side by side: a WooCommerce product at /product/red-shoes/ becomes /products/red-shoes on Shopify, so even a one-letter prefix change needs a redirect. The 301 map is imported in bulk before DNS cutover, with daily Search Console checks for the first two weeks.',
    timeline: 'Audit in weeks 1 to 2, data to a staging store in weeks 5 to 9. Wix tiers: 4 to 8 weeks simple, 8 to 14 mid-market, 14 to 20 enterprise',
    price: 'Projects start at approximately $20,000, says one line; its FAQ says around $15,000. Wix tiers: $15,000 to $30,000, $30,000 to $60,000 and $75,000 to $150,000+',
    bestFor: 'WooCommerce, BigCommerce and Wix stores that want a written price floor and a 30-day fix window after launch.',
    ask: 'Your page gives two starting figures, $15,000 and $20,000. Which applies to our store?',
  },
  {
    name: '1Digital Agency',
    url: 'https://www.1digitalagency.com/',
    directory: 'https://www.shopify.com/partners/directory/partner/1digitalagency',
    sources: [{ label: 'Ecommerce platform migrations', href: 'https://www.1digitalagency.com/ecommerce-platform-migrations/' }],
    tier: 'Plus',
    based: 'Philadelphia, per its Shopify profile. Its website footer gives a Miami, Florida address',
    woo: 'Shown',
    bc: 'Shown',
    sfcc: 'Shown',
    magento: 'Shown',
    sqwix: 'Not shown',
    what: '1Digital says it has run migrations since 2012 and shipped 200+ cutovers across Shopify Plus, BigCommerce, Adobe Commerce, WooCommerce, Volusion and Salesforce Commerce Cloud. It moves stores in both directions, including to BigCommerce, so it can compare the two. It lists the data it carries: profiles, addresses, wishlists, saved carts, B2B company accounts, and reviews with star ratings kept.',
    seo: 'Each old URL gets a page-level 301, the sitemap is rebuilt and Search Console is told. It carries metadata and schema and monitors crawl errors and rankings for 30+ days after launch.',
    timeline: '4 to 6 weeks simple, 8 to 12 weeks mid-complexity, 16 to 24+ weeks complex or enterprise',
    price: 'Not published for migrations',
    bestFor: 'BigCommerce and WooCommerce stores still choosing between Shopify Plus and BigCommerce.',
    ask: 'If you also build on BigCommerce, what in our store makes you recommend Shopify Plus instead?',
  },
  {
    name: 'Fyresite',
    url: 'https://www.fyresite.com/',
    directory: 'https://www.shopify.com/partners/directory/partner/fyresite3',
    sources: [{ label: 'Shopify migration services', href: 'https://www.fyresite.com/services/shopify-migration-services/' }],
    tier: 'Premier',
    based: 'Tempe, Arizona',
    woo: 'Shown',
    bc: 'Shown',
    sfcc: 'Not shown',
    magento: 'Shown',
    sqwix: 'Not shown',
    what: 'Fyresite moves established stores off Miva, Magento, BigCommerce, WooCommerce, Drupal and other platforms. It names Corbeau USA, moved from BigCommerce to Shopify Plus. It says it moves the custom data most importers skip: metafields, vehicle fitment tables, B2B price lists and configuration logic, along with products, customers, full order history, reviews and discounts.',
    seo: 'It crawls the old site, maps every URL to Shopify with 301s and keeps titles, metadata and structured data. The redirect plan is part of the first project phase.',
    timeline: 'Not published',
    price: 'Not published',
    bestFor: 'BigCommerce or WooCommerce parts catalogs with fitment data, kits or B2B price lists.',
    ask: 'Can you run a test migration of our hardest product type before we sign the full scope?',
  },
  {
    name: 'Americaneagle.com',
    url: 'https://www.americaneagle.com/',
    directory: 'https://www.shopify.com/partners/directory/partner/americaneagle-com',
    sources: [{ label: 'Shopify services (FAQ)', href: 'https://www.americaneagle.com/platforms/shopify' }],
    tier: 'Premier',
    based: 'Des Plaines, Illinois, per its Shopify profile',
    woo: 'Shown',
    bc: 'Shown',
    sfcc: 'Not shown',
    magento: 'Shown',
    sqwix: 'Not shown',
    what: 'Americaneagle.com is a large full-service web firm. Its Shopify page says it handles store moves from Magento, WooCommerce and BigCommerce, and upgrades from Shopify to Shopify Plus, moving products, customers, orders and content. Its Shopify profile lists platform migration among its top services.',
    seo: 'It says it redirects URLs to keep SEO rankings. No method is described on the page we read.',
    timeline: 'A basic store in a few weeks, a complex custom site in several months, with timelines given upfront',
    price: 'Not published',
    bestFor: 'Brands that want one large vendor for the migration plus design, hosting and marketing work.',
    ask: 'Who on the team has led a migration from our platform, and how many have they done?',
  },
  {
    name: 'Black Belt Commerce',
    url: 'https://www.blackbeltcommerce.com/',
    directory: 'https://www.shopify.com/partners/directory/partner/shopifyninjas',
    sources: [{ label: 'Shopify Plus migration experts', href: 'https://www.blackbeltcommerce.com/shopify-plus-migration-experts/' }],
    tier: 'Plus',
    based: 'New York, per its Shopify profile',
    woo: 'Shown',
    bc: 'Shown',
    sfcc: 'Shown',
    magento: 'Shown',
    sqwix: 'Not shown',
    what: 'Black Belt Commerce says it has moved stores from Magento, WooCommerce, BigCommerce, Salesforce Commerce Cloud, NetSuite SuiteCommerce, PrestaShop, OpenCart, SAP Commerce Cloud, Shopware and custom builds. It runs launch against a 35-point checklist with performance stress tests, and switches over in off-peak hours.',
    seo: 'It crawls the old site, builds a one-to-one URL map, sets 301 redirects and keeps all metadata.',
    timeline: 'Not published',
    price: 'Not published for migrations',
    bestFor: 'Smaller stores where keeping search traffic is the main worry and the catalog is simple.',
    ask: 'How many migrations from our platform has your team finished, and can we speak to one of those clients?',
  },
  {
    name: 'FactoryJet (that is us)',
    url: 'https://factoryjet.com/',
    sources: [
      { label: 'Replatforming hub', href: 'https://factoryjet.com/replatforming' },
      { label: 'WooCommerce to Shopify', href: 'https://factoryjet.com/replatforming/woocommerce-to-shopify' },
      { label: 'Salesforce Commerce Cloud to Shopify Plus', href: 'https://factoryjet.com/replatforming/salesforce-commerce-cloud-to-shopify-plus' },
    ],
    tier: 'Registered Shopify Partner',
    based: 'Serves US clients, with calls in US business hours',
    woo: 'Shown',
    bc: 'Shown',
    sfcc: 'Shown',
    magento: 'Shown',
    sqwix: 'Both shown',
    what: 'We move stores to Shopify and Shopify Plus from WooCommerce, BigCommerce, Salesforce Commerce Cloud, Magento, Squarespace and Wix, and connect the new store to QuickBooks or an ERP. On Salesforce Commerce Cloud moves we rebuild the SFRA or SiteGenesis storefront as a Shopify theme and list every cartridge before we price the work. We quote a fixed price per phase in writing after a short scoping call and build a demo on your own product data before you sign.',
    seo: 'We collect every URL from the sitemap, Search Console and backlink data, map each one-to-one as a single-hop 301 before DNS moves, keep Yoast or Rank Math titles on WooCommerce moves, and watch Search Console daily after launch.',
    timeline: 'Most WooCommerce moves take 3 to 8 weeks. Moves with data and integrations usually take 5 to 8 weeks; headless or heavy custom work 8 to 14 weeks',
    price: 'Fixed price per phase after scoping. See our replatforming pages for sourced market ranges',
    bestFor: 'Stores that want the migration and the QuickBooks or ERP connection done by one team.',
    ask: 'Can we see working software on our own data before we sign a contract?',
  },
];

const others = FIRMS.filter((f) => !f.name.startsWith('FactoryJet'));
const countShown = (k: 'woo' | 'bc' | 'sfcc' | 'magento'): number => others.filter((f) => f[k] === 'Shown').length;

const FAQS: FAQItem[] = [
  {
    q: 'What are the best Shopify migration agencies in 2026?',
    a: 'It depends on the platform you are leaving. For enterprise Salesforce Commerce Cloud moves, Domaine and Anatta. For any source platform with published prices, Netalico and Solo Media Group. For cartridge-heavy or plugin-heavy stores, Shero Commerce. For BigCommerce and WooCommerce, 1Digital Agency, Fyresite and Americaneagle.com. For smaller SEO-led moves, Black Belt Commerce. We read each firm on its own site on 16 November 2026.',
  },
  {
    q: 'Who can migrate a WooCommerce store to Shopify without losing SEO rankings?',
    a: 'Look for a firm that redirects every /product/ and /product-category/ URL and every blog post, keeps your Yoast or Rank Math titles, and watches Search Console after launch. Shero Commerce says it crawls every redirected WooCommerce URL and keeps WordPress as a fallback at launch. Netalico builds the map from real permalinks. Solo Media Group and 1Digital Agency publish their 301 and Search Console steps. FactoryJet does the same.',
  },
  {
    q: 'Which partner should migrate us from Salesforce Commerce Cloud to Shopify Plus?',
    a: 'Six of the nine other firms on this page show Salesforce Commerce Cloud work: Domaine, Anatta, Shero Commerce, Netalico, 1Digital Agency and Black Belt Commerce. Domaine names Orveon (bareMinerals, Laura Mercier). Netalico publishes a 12 to 20 week timeline. Shero lists every cartridge before it builds. Ask each firm for a finished move with the same order system and number of sites as yours.',
  },
  {
    q: 'Which ecommerce agencies are good at replatforming from Salesforce Commerce Cloud or Magento to Shopify Plus for mid-market brands?',
    a: 'For mid-market brands, Netalico, Shero Commerce and Anatta show both Salesforce Commerce Cloud and Magento work on their own sites. Netalico prices project work at $25,000 to $250,000+. Anatta works with brands at $10M+ and says most moves finish in three months or fewer. For Magento depth, read our separate list of 12 Magento to Shopify Plus agencies.',
  },
  {
    q: 'How much does a Shopify migration cost in 2026?',
    a: 'It depends on the source platform and how much custom work moves. CartCoders, a Shopify developer, lists WooCommerce to Shopify at $3,000 to $12,000. Netalico lists BigCommerce moves at $15,000 to $150,000+. Solo Media Group says projects start at about $15,000 to $20,000. Netalico says Salesforce Commerce Cloud moves usually sit in the upper half of $25,000 to $250,000+. Shopify Plus is billed on top.',
  },
  {
    q: 'How long does a migration to Shopify take?',
    a: 'Published timelines run from 4 weeks to a year. 1Digital Agency says 4 to 6 weeks for a simple store and 16 to 24+ for enterprise. Shero Commerce says 6 to 12 weeks for WooCommerce. Netalico says 6 to 10 weeks from Squarespace and 12 to 20 weeks from Salesforce Commerce Cloud. Domaine lists 39 to 52 weeks on average for enterprise Salesforce Commerce Cloud moves.',
  },
  {
    q: 'Will I lose Google rankings when I move to Shopify?',
    a: 'Some movement in the first weeks is common. Lasting loss usually comes from missing redirects. Shopify uses fixed /products/, /collections/, /pages/ and /blogs/ paths, so nearly every old URL changes. Each one with traffic or links needs a 301 to its closest new page, set before DNS moves, then checked in Search Console after launch.',
  },
  {
    q: 'What URL changes happen when moving from WooCommerce to Shopify?',
    a: 'A WooCommerce product at /product/red-shoes/ becomes /products/red-shoes on Shopify, and a category at /product-category/footwear/ becomes /collections/footwear. Solo Media Group shows these examples on its migration page. Blog posts move from WordPress permalinks to /blogs/news/ paths. Each needs a 301.',
  },
  {
    q: 'What URL changes happen when leaving Salesforce Commerce Cloud?',
    a: 'Salesforce Commerce Cloud stores often use /s/SiteID/ paths, .html product pages and old demandware.store links. Netalico says it crawls all of these and maps each to its new /products/ or /collections/ URL. If you run several sites or locales, each one needs its own map.',
  },
  {
    q: 'What URL changes happen when moving from BigCommerce, Squarespace or Wix?',
    a: 'BigCommerce paths differ by store and category depth, and Netalico says it keeps matching /products/ paths where it can. Squarespace product and blog URLs follow their own structure. Wix product pages sit under /product-page/, which Shero Commerce says it redirects to /products/. Every changed URL needs a 301.',
  },
  {
    q: 'Do customer passwords move to Shopify?',
    a: 'Usually not. Shero Commerce and Netalico both say passwords cannot move, so they send account invitations at launch. Plan the email that tells returning customers to set a new password, and send it on launch day.',
  },
  {
    q: 'Can I keep my order history after moving to Shopify?',
    a: 'Yes. Shopify’s migration help page lists historical orders as data you can import after products and customers. Shero Commerce, Netalico, Fyresite and 1Digital Agency all say they move order history. Ask whether open orders, gift cards and reviews move too.',
  },
  {
    q: 'What happens to Salesforce Commerce Cloud cartridges?',
    a: 'They do not move. Cartridges are server-side code, so each one is rebuilt as a standard Shopify feature, an app, a Shopify Function or custom code. Shero Commerce and Netalico both say they classify every cartridge this way before building. Anatta says the cartridge estate is what makes these moves hard.',
  },
  {
    q: 'What happens to WooCommerce plugins?',
    a: 'They do not move. Each plugin becomes a Shopify feature, an app, or is dropped. Shero Commerce says many plugin jobs, like SEO fields and redirects, are built into Shopify. List every plugin and what it does before asking for quotes.',
  },
  {
    q: 'Is BigCommerce to Shopify easier than Magento to Shopify?',
    a: 'Usually, yes. Anatta says a BigCommerce move tends to run faster than a comparable Magento move because BigCommerce’s features sit closer to Shopify’s. Solo Media Group calls BigCommerce the closest structural match to Shopify. The work moves to rebuilding apps, integrations and B2B catalogs.',
  },
  {
    q: 'Can Shopify’s free Store Migration app do the move for me?',
    a: 'For simple stores it can help. On 16 November 2026 the app listing said it uploads product and customer data from CSV files and connects some source accounts directly. It does not rebuild your theme, plugins, cartridges or redirects. Larger stores use tools such as LitExtension, Cart2Cart or Matrixify, or a partner.',
  },
  {
    q: 'Should I use a migration tool or hire an agency?',
    a: 'Use a tool for a small store with standard products, few apps and little search traffic. Hire a partner when you have custom checkout logic, B2B price lists, an ERP, several sites or years of URLs that bring traffic. The tool moves data. It does not decide what each plugin or cartridge becomes.',
  },
  {
    q: 'Do I need Shopify Plus after migrating?',
    a: 'Not always. Netalico says stores under about $1M a year are often well served by standard Shopify and can upgrade later. Plus adds checkout customization, B2B features and expansion stores. Solo Media Group quotes Shopify’s published Plus rate of $2,300 a month on a three-year term or $2,500 on a one-year term.',
  },
  {
    q: 'What does a Shopify partner tier tell me?',
    a: 'A tier shows how much Shopify business a partner brings in and keeps. Of the 9 other firms on this page, the Shopify directory showed four Platinum, three Premier and two Plus on 16 November 2026. A tier says nothing about whether the firm has moved a store from your platform, so ask for that separately.',
  },
  {
    q: 'Can B2B price lists and company accounts move to Shopify?',
    a: 'Yes, as data rebuilt on Shopify’s B2B features. Fyresite and 1Digital Agency both list B2B price lists or company accounts among the data they move. Anatta says BigCommerce B2B catalogs need careful mapping onto Shopify’s own B2B model. Ask to see your largest customer’s prices working before launch.',
  },
  {
    q: 'What happens to our ERP connection during the move?',
    a: 'It has to be rebuilt against Shopify’s APIs. Netalico says ERP, OMS, PIM and tax integrations are rebuilt, not reconnected, on Salesforce Commerce Cloud moves. Budget it as its own workstream with its own tests, because order and stock errors cost more than a slow page.',
  },
  {
    q: 'What should I ask a Shopify migration agency before I sign?',
    a: 'Ask for a finished move from your platform with similar apps and systems, and a call with that client. Ask where the URL list comes from, how passwords and stored cards are handled, who writes the code, and what the rollback plan is at cutover. Ask who owns the store, theme and app accounts afterwards.',
  },
  {
    q: 'Does FactoryJet migrate stores to Shopify?',
    a: 'Yes. FactoryJet moves stores to Shopify and Shopify Plus from WooCommerce, BigCommerce, Salesforce Commerce Cloud, Magento, Squarespace and Wix, and connects them to QuickBooks or an ERP. It quotes a fixed price per phase in writing after a short scoping call, and builds a demo on your own product data before you sign.',
  },
];

const link = 'text-[#B23E13] underline';
const th = 'p-3 text-left border border-gray-700 font-semibold';
const td = 'p-3 border border-gray-200 align-top';

const MARKET: { platform: string; cost: string; time: string; sources: { label: string; href: string }[] }[] = [
  {
    platform: 'WooCommerce',
    cost: '$3,000 to $12,000 (CartCoders)',
    time: '6 to 12 weeks (Shero Commerce); 8 to 12 weeks clean, 12 to 20 plugin-heavy (Netalico)',
    sources: [
      { label: 'CartCoders', href: 'https://cartcoders.com/blog/shopify-development/shopify-developer-cost-hourly-rate-project-pricing/' },
      { label: 'Shero', href: 'https://sherocommerce.com/pages/woocommerce-to-shopify-migration' },
      { label: 'Netalico', href: 'https://netalico.com/pages/woocommerce-to-shopify-migration' },
    ],
  },
  {
    platform: 'BigCommerce',
    cost: '$15,000 to $30,000 simple, $30,000 to $60,000 mid-market, $75,000 to $150,000+ enterprise (Netalico)',
    time: '8 to 12, 12 to 18 and 16 to 24 weeks for the same tiers (Netalico); 30 to 36 weeks average for enterprise (Domaine)',
    sources: [
      { label: 'Netalico', href: 'https://netalico.com/pages/bigcommerce-to-shopify-migration' },
      { label: 'Domaine', href: 'https://domaineworldwide.com/resources/platform-migrations/' },
    ],
  },
  {
    platform: 'Salesforce Commerce Cloud',
    cost: 'Upper half of $25,000 to $250,000+ (Netalico)',
    time: '12 to 20 weeks (Netalico); 39 to 52 weeks average for enterprise (Domaine)',
    sources: [
      { label: 'Netalico', href: 'https://netalico.com/pages/salesforce-commerce-cloud-to-shopify-migration' },
      { label: 'Domaine', href: 'https://domaineworldwide.com/resources/platform-migrations/' },
    ],
  },
  {
    platform: 'Magento / Adobe Commerce',
    cost: '$7,000 to $25,000 (CartCoders). See our Magento list for firm prices',
    time: '30 to 36 weeks average for enterprise (Domaine)',
    sources: [
      { label: 'CartCoders', href: 'https://cartcoders.com/blog/shopify-development/shopify-developer-cost-hourly-rate-project-pricing/' },
      { label: 'Domaine', href: 'https://domaineworldwide.com/resources/platform-migrations/' },
    ],
  },
  {
    platform: 'Squarespace',
    cost: 'Not published by the firms we read',
    time: '6 to 10 weeks; 4 to 6 for simple stores under 500 SKUs (Netalico)',
    sources: [{ label: 'Netalico', href: 'https://netalico.com/pages/squarespace-to-shopify-migration' }],
  },
  {
    platform: 'Wix',
    cost: '$15,000 to $30,000 simple, $30,000 to $60,000 mid-market, $75,000 to $150,000+ enterprise (Solo Media Group)',
    time: '4 to 8, 8 to 14 and 14 to 20 weeks for the same tiers (Solo Media Group)',
    sources: [{ label: 'Solo Media Group', href: 'https://solomediagroup.com/pages/shopify-plus-migration' }],
  },
];

export const post: BlogPost = {
  id: '856',
  slug: SLUG,
  title: TITLE,
  excerpt:
    'A fact-checked guide to Shopify migration agencies for US mid-market brands, compared by the platform you are leaving: WooCommerce, BigCommerce, Salesforce Commerce Cloud, Magento, Squarespace and Wix. Every firm read on its own site and Shopify profile on 16 November 2026. FactoryJet is on the list and says so.',
  category: 'E-Commerce Development',
  author: 'Bhavesh Barot',
  date: 'Nov 16, 2026',
  dateModified: 'Nov 16, 2026',
  hideExcerptOnPage: true,
  readTime: '20 min read',
  imageUrl: '/images/blog/best-magento-to-shopify-plus-migration-agencies-2026/hero.webp',
  imageAlt:
    'A woman in a rust knit sweater and a man in a denim shirt stand at a wooden table moving blank white cards from a grey tray into a white tray beside an orange stapler',
  meta: {
    title: 'Best Shopify Migration Agencies 2026 (by Platform) | FactoryJet',
    description: META_DESCRIPTION,
  },
  keyTakeaways: [
    'Pick the agency by the platform you are leaving. Salesforce Commerce Cloud, WooCommerce and Wix moves have different hard parts: cartridges, plugins and data with no export.',
    `Every firm was read on its own website and its Shopify partner profile on ${READ_DATE}. Nobody paid to be listed, and the order is not a ranking.`,
    'Published timelines run from 4 to 6 weeks for a simple store to 39 to 52 weeks for enterprise Salesforce Commerce Cloud.',
    'Netalico and Solo Media Group publish price tiers. Netalico lists BigCommerce moves at $15,000 to $150,000+ and puts most Salesforce Commerce Cloud moves in the upper half of $25,000 to $250,000+.',
    'Shopify uses fixed /products/ and /collections/ paths, so nearly every old URL changes and needs a 301 before DNS moves.',
  ],
  faqs: FAQS,
  content: (
    <div className="fj-shopify-migration-agencies">
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
              isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com' },
              publisher: { '@id': 'https://factoryjet.com/#organization' },
              about: { '@type': 'Thing', name: 'Shopify migration agencies for US brands' },
              speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#answer-first', 'h1', 'h2'] },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Shopify migration agencies for US brands compared by source platform (2026)',
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
          Choose a Shopify migration agency by the platform you are leaving. From Salesforce Commerce Cloud: Domaine for enterprise, Anatta or Shero Commerce for mid-market. From WooCommerce without losing rankings: Shero Commerce, Netalico or Solo Media Group. From BigCommerce: Netalico, 1Digital Agency or Fyresite. From Squarespace or Wix: Netalico, Solo Media Group or Shero Commerce. For Magento depth, see our <a href="/blog/best-magento-to-shopify-plus-migration-agencies-2026" className={link}>Magento to Shopify Plus list</a>.
        </p>
        <p className="text-gray-800 leading-relaxed">
          Nobody paid to be listed, and the order is not a ranking. FactoryJet wrote this guide and is on it.
        </p>
      </div>

      <p className="mb-4">
        We read all 10 firms on their own websites on {READ_DATE}, and the 9 others in Shopify&rsquo;s partner directory as well. For each one we noted where it is based, its Shopify tier, which source platforms it shows migration work for, how it handles redirects, and any price or timeline it publishes. Every profile links to the pages we read.
      </p>
      <p className="mb-6">
        A few terms in plain English. A <strong>migration</strong> or <strong>replatform</strong> moves your products, customers, orders and web addresses to a new platform. A <strong>301 redirect</strong> sends an old web address to its new page, so shoppers and Google follow it. A <strong>cartridge</strong> is a block of custom code on Salesforce Commerce Cloud. <strong>Cutover</strong> is the moment the old store stops taking orders and Shopify starts. <strong>Search Console</strong> is Google&rsquo;s free tool that shows which pages it has found, indexed or lost.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Which agencies show work from which platform</h2>
      <p className="mb-4">
        &ldquo;Shown&rdquo; means the firm&rsquo;s own site shows migration work or a service page for that source platform. &ldquo;Not shown&rdquo; means we did not find it on the pages we read; it does not prove the firm cannot do it. Of the 9 other firms, {countShown('woo')} show WooCommerce, {countShown('bc')} BigCommerce, {countShown('sfcc')} Salesforce Commerce Cloud and {countShown('magento')} Magento.
      </p>
      <p className="md:hidden text-xs text-gray-500 mb-2">Swipe sideways to see every column.</p>
      <div className="overflow-x-auto mb-8 not-prose" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <table className="w-full border-collapse text-sm" style={{ minWidth: 820 }}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className={th}>Firm</th>
              <th className={th}>Shopify tier</th>
              <th className={th}>WooCommerce</th>
              <th className={th}>BigCommerce</th>
              <th className={th}>Salesforce Commerce Cloud</th>
              <th className={th}>Magento</th>
              <th className={th}>Squarespace / Wix</th>
              <th className={th}>Based</th>
            </tr>
          </thead>
          <tbody>
            {FIRMS.map((f) => (
              <tr key={f.name} className={f.name.startsWith('FactoryJet') ? 'bg-orange-50' : 'odd:bg-white even:bg-gray-50'}>
                <td className={`${td} font-semibold`}>{f.name}</td>
                <td className={td}>{f.tier}</td>
                <td className={td}>{f.woo}</td>
                <td className={td}>{f.bc}</td>
                <td className={td}>{f.sfcc}</td>
                <td className={td}>{f.magento}</td>
                <td className={td}>{f.sqwix}</td>
                <td className={td}>{f.based}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Best for, by source platform</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>WooCommerce:</strong> Shero Commerce (every /product/ URL redirected and crawled, WordPress kept as a fallback), Netalico (published 8 to 20 week range), Solo Media Group (published price floor). See our <a href="/replatforming/woocommerce-to-shopify" className={link}>WooCommerce to Shopify guide</a>.</li>
        <li><strong>BigCommerce:</strong> Netalico (three published price tiers), 1Digital Agency (builds on both platforms), Fyresite (parts catalogs, names Corbeau USA).</li>
        <li><strong>Salesforce Commerce Cloud:</strong> Domaine (150+ enterprise migrations, names Orveon), Anatta ($10M+ brands), Shero Commerce (cartridge-by-cartridge list). See our <a href="/replatforming/salesforce-commerce-cloud-to-shopify-plus" className={link}>Salesforce Commerce Cloud to Shopify Plus guide</a>.</li>
        <li><strong>Magento / Adobe Commerce:</strong> covered in depth in our <a href="/blog/best-magento-to-shopify-plus-migration-agencies-2026" className={link}>12-agency Magento to Shopify Plus list</a>.</li>
        <li><strong>Squarespace and Wix:</strong> Netalico (Squarespace in 6 to 10 weeks, rankings watched 60 days), Solo Media Group (published Wix tiers), Shero Commerce (pages for both).</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">How we chose these firms</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Start from buyer searches.</strong> On {READ_DATE} we pulled Google&rsquo;s US top 10 for &ldquo;shopify migration agency&rdquo;, &ldquo;shopify migration services&rdquo;, &ldquo;salesforce commerce cloud to shopify&rdquo;, &ldquo;woocommerce to shopify migration agency&rdquo; and &ldquo;bigcommerce to shopify plus migration agency&rdquo;, and read the agency lists AI assistants cite most.</li>
        <li><strong>Keep US-based firms with a real migration service.</strong> Each firm shows a US base in its Shopify profile and a page describing migration to Shopify.</li>
        <li><strong>Read two sources for each firm.</strong> Its own migration pages and its Shopify partner directory profile, both on {READ_DATE}.</li>
        <li><strong>Report claims as claims.</strong> Project counts, timelines, prices and client names are each firm&rsquo;s own words.</li>
        <li><strong>No scores.</strong> We have not hired these firms, so there are no star ratings, only who each suits and a question worth asking.</li>
      </ol>
      <p className="mb-6">
        We left some firms out. Uptek lists a Sheridan, Wyoming address and an office in Islamabad, and we could not confirm a US operating office. Coalition Technologies has a Premier Shopify profile, but we found no Shopify migration page on its site. Command C and Ruby Digital Agency appear in our Magento list, where their work fits best. Firms based outside the US, such as Craftberry, ECORN and Swanky, were out of scope. Migration tools (LitExtension, Cart2Cart, Matrixify) are covered in the tools note below, not ranked as agencies.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The agencies, profiled</h2>
      <p className="mb-6">
        The order is not a ranking. Enterprise firms come first, then firms that cover every platform, then BigCommerce and WooCommerce specialists, then us.
      </p>
      {FIRMS.map((f, i) => (
        <section key={f.name} className="mb-10">
          <h3 className="text-xl font-bold mt-8 mb-2">{i + 1}. {f.name}</h3>
          <p className="text-sm text-gray-600 mb-3">
            <strong>Based:</strong> {f.based}. <strong>Shopify partner tier:</strong> {f.tier}.
          </p>
          <p className="mb-3">{f.what}</p>
          <table className="w-full border-collapse text-sm mb-3 not-prose">
            <tbody>
              <tr><th scope="row" className="p-2 text-left align-top border-b border-gray-200 w-48">Best for</th><td className="p-2 border-b border-gray-200">{f.bestFor}</td></tr>
              <tr><th scope="row" className="p-2 text-left align-top border-b border-gray-200">Redirects and SEO</th><td className="p-2 border-b border-gray-200">{f.seo}</td></tr>
              <tr><th scope="row" className="p-2 text-left align-top border-b border-gray-200">Timeline it publishes</th><td className="p-2 border-b border-gray-200">{f.timeline}.</td></tr>
              <tr><th scope="row" className="p-2 text-left align-top border-b border-gray-200">Price it publishes</th><td className="p-2 border-b border-gray-200">{f.price}.</td></tr>
              <tr><th scope="row" className="p-2 text-left align-top border-b border-gray-200">Worth asking them</th><td className="p-2 border-b border-gray-200">{f.ask}</td></tr>
            </tbody>
          </table>
          <p className="text-sm text-gray-600 [overflow-wrap:anywhere]">
            Read {READ_DATE}:{' '}
            {f.sources.map((s, j) => (
              <React.Fragment key={s.href}>
                {j > 0 && ' | '}
                <a href={s.href} className={link} rel="noopener" target={s.href.startsWith('https://factoryjet.com') ? undefined : '_blank'}>{s.label}</a>
              </React.Fragment>
            ))}
            {f.directory && (
              <>
                {' | '}
                <a href={f.directory} className={link} rel="noopener" target="_blank">Shopify directory profile</a>
              </>
            )}
          </p>
        </section>
      ))}

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 my-8 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">If you are ready to talk to a builder</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Our <a href="/services/shopify-migration-agency" className={link}>Shopify migration service</a> starts with a short scoping call and a fixed price per phase in writing. We build a demo on your own product data before you sign.
        </p>
        <a href="/contact" className="inline-block rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white">Talk to the Founder</a>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">What protects your rankings in a migration</h2>
      <p className="mb-4">
        Shopify uses fixed path prefixes: /products/, /collections/, /pages/ and /blogs/. You cannot change them on any plan, so nearly every old URL changes. Here is how each source platform&rsquo;s URLs differ, from the firms&rsquo; own pages.
      </p>
      <p className="md:hidden text-xs text-gray-500 mb-2">Swipe sideways to see every column.</p>
      <div className="overflow-x-auto mb-6 not-prose" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <table className="w-full border-collapse text-sm" style={{ minWidth: 640 }}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className={th}>Leaving</th>
              <th className={th}>Old URL pattern</th>
              <th className={th}>On Shopify</th>
              <th className={th}>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>WooCommerce</td><td className={td}>/product/red-shoes/ and /product-category/footwear/</td><td className={td}>/products/red-shoes and /collections/footwear</td><td className={td}><a href="https://solomediagroup.com/pages/shopify-plus-migration" className={link} rel="noopener" target="_blank">Solo Media Group</a></td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>Magento</td><td className={td}>/red-shoes.html, /catalog/product/view/id/123, /footwear/sneakers.html</td><td className={td}>/products/red-shoes and /collections/sneakers</td><td className={td}><a href="https://solomediagroup.com/pages/shopify-plus-migration" className={link} rel="noopener" target="_blank">Solo Media Group</a></td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>Salesforce Commerce Cloud</td><td className={td}>/s/SiteID/ paths, .html product pages, demandware.store links</td><td className={td}>/products/ and /collections/</td><td className={td}><a href="https://netalico.com/pages/salesforce-commerce-cloud-to-shopify-migration" className={link} rel="noopener" target="_blank">Netalico</a></td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>BigCommerce</td><td className={td}>Varies by store and category depth</td><td className={td}>Matching /products/ paths kept where possible</td><td className={td}><a href="https://netalico.com/pages/bigcommerce-to-shopify-migration" className={link} rel="noopener" target="_blank">Netalico</a></td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>Wix</td><td className={td}>/product-page/</td><td className={td}>/products/</td><td className={td}><a href="https://sherocommerce.com/pages/wix-to-shopify-migration" className={link} rel="noopener" target="_blank">Shero Commerce</a></td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>Squarespace</td><td className={td}>Its own product and blog structure</td><td className={td}>/products/ and /blogs/</td><td className={td}><a href="https://sherocommerce.com/pages/squarespace-to-shopify-migration" className={link} rel="noopener" target="_blank">Shero Commerce</a></td></tr>
          </tbody>
        </table>
      </div>
      <p className="mb-3"><strong>The ranking checklist.</strong> Ask your agency to show you each of these in writing.</p>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>A full URL list before any data moves.</strong> Pull it from three places: a crawl of the live store, your XML sitemap, and the Search Console pages report. Add URLs with backlinks.</li>
        <li><strong>A one-to-one 301 map.</strong> Every old URL with traffic or links points to its closest new page in one hop. No chains, no sending everything to the home page.</li>
        <li><strong>Titles, meta descriptions and structured data carried over.</strong> On WooCommerce, that means your Yoast or Rank Math fields.</li>
        <li><strong>Redirects loaded before DNS moves,</strong> then tested with a crawl of the new store.</li>
        <li><strong>One canonical URL per product.</strong> Solo Media Group notes Shopify themes can show the same product under /collections/.../products/, which splits signals.</li>
        <li><strong>Search Console on launch day.</strong> Submit the new sitemap, then check coverage errors, 404s and top revenue pages daily for the first two weeks.</li>
        <li><strong>Watch for 30 to 90 days.</strong> 1Digital Agency says 30+ days and Netalico says 60 days on Squarespace moves. Fix any page that drops.</li>
      </ol>
      <p className="mb-6">
        For the full method, read our guide to <a href="/blog/ecommerce-replatforming-without-losing-seo-2026" className={link}>replatforming without losing SEO</a>.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Market cost and timeline ranges by source platform</h2>
      <p className="mb-4">
        These are figures firms publish on their own sites, copied on {READ_DATE}. They are not FactoryJet prices. Shopify&rsquo;s plan fee is billed on top: Solo Media Group quotes Shopify Plus at $2,300 a month on a three-year term or $2,500 on a one-year term.
      </p>
      <p className="md:hidden text-xs text-gray-500 mb-2">Swipe sideways to see every column.</p>
      <div className="overflow-x-auto mb-4 not-prose" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <table className="w-full border-collapse text-sm" style={{ minWidth: 720 }}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className={th}>Leaving</th>
              <th className={th}>Published cost (USD)</th>
              <th className={th}>Published timeline</th>
              <th className={th}>Sources</th>
            </tr>
          </thead>
          <tbody>
            {MARKET.map((m) => (
              <tr key={m.platform} className="odd:bg-white even:bg-gray-50">
                <td className={`${td} font-semibold`}>{m.platform}</td>
                <td className={td}>{m.cost}</td>
                <td className={td}>{m.time}</td>
                <td className={td}>
                  {m.sources.map((s, j) => (
                    <React.Fragment key={s.href + j}>
                      {j > 0 && ', '}
                      <a href={s.href} className={link} rel="noopener" target="_blank">{s.label}</a>
                    </React.Fragment>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        Anatta says that, as of November 2026, published US agency ranges put a mid-market Shopify Plus migration at $15,000 to $75,000 and a custom Shopify Plus replatform at $75,000 to $250,000 or more. Solo Media Group says it will not take migrations under $15,000. For more on Plus budgets, read <a href="/blog/shopify-plus-migration-cost-2026" className={link}>what a Shopify Plus migration costs</a>.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">A note on migration tools</h2>
      <p className="mb-6">
        Tools move data. They do not rebuild your theme, plugins, cartridges or redirect logic. Shopify&rsquo;s free <a href="https://apps.shopify.com/store-migration" className={link} rel="noopener" target="_blank">Store Migration app</a>{' '}uploads product and customer data from CSV files and connects some source accounts, per its listing on {READ_DATE}. Paid tools such as <a href="https://litextension.com/" className={link} rel="noopener" target="_blank">LitExtension</a>,{' '}<a href="https://www.shopping-cart-migration.com/" className={link} rel="noopener" target="_blank">Cart2Cart</a>{' '}and <a href="https://matrixify.app/" className={link} rel="noopener" target="_blank">Matrixify</a>{' '}handle larger catalogs. Shopify&rsquo;s <a href="https://help.shopify.com/en/manual/migrating-to-shopify" className={link} rel="noopener" target="_blank">migration help page</a>{' '}sets the import order: products, then customers, then historical orders. A small store with standard products can often move with a tool alone.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Which kind of firm fits your store</h2>
      <table className="w-full border-collapse text-sm mb-8 not-prose">
        <tbody>
          <tr><th scope="row" className="p-3 text-left align-top border-b border-gray-200 w-1/2">&ldquo;We run several Salesforce Commerce Cloud sites and regions.&rdquo;</th><td className="p-3 border-b border-gray-200">Domaine, or Anatta at $10M+ revenue.</td></tr>
          <tr><th scope="row" className="p-3 text-left align-top border-b border-gray-200">&ldquo;Our Salesforce Commerce Cloud store has years of custom cartridges.&rdquo;</th><td className="p-3 border-b border-gray-200">Shero Commerce or Netalico, both of which classify every cartridge first.</td></tr>
          <tr><th scope="row" className="p-3 text-left align-top border-b border-gray-200">&ldquo;We are on WooCommerce and organic search is our biggest channel.&rdquo;</th><td className="p-3 border-b border-gray-200">Shero Commerce, Netalico or Solo Media Group. Ask each for the WooCommerce redirect map from a past move.</td></tr>
          <tr><th scope="row" className="p-3 text-left align-top border-b border-gray-200">&ldquo;We are on BigCommerce and want a price band before we call anyone.&rdquo;</th><td className="p-3 border-b border-gray-200">Netalico publishes three tiers.</td></tr>
          <tr><th scope="row" className="p-3 text-left align-top border-b border-gray-200">&ldquo;We sell parts with fitment data or B2B price lists.&rdquo;</th><td className="p-3 border-b border-gray-200">Fyresite, or 1Digital Agency.</td></tr>
          <tr><th scope="row" className="p-3 text-left align-top border-b border-gray-200">&ldquo;We are on Squarespace or Wix and have outgrown it.&rdquo;</th><td className="p-3 border-b border-gray-200">Netalico, Solo Media Group or Shero Commerce. A small store may only need a tool.</td></tr>
          <tr><th scope="row" className="p-3 text-left align-top border-b border-gray-200">&ldquo;We want one big vendor for migration, design and marketing.&rdquo;</th><td className="p-3 border-b border-gray-200">Americaneagle.com.</td></tr>
          <tr><th scope="row" className="p-3 text-left align-top border-b border-gray-200">&ldquo;The new store must stay in step with QuickBooks or our ERP.&rdquo;</th><td className="p-3 border-b border-gray-200">FactoryJet does the migration and the connection as one project. See <a href="/replatforming" className={link}>our replatforming guides</a>.</td></tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mt-10 mb-4">Seven questions to ask before you sign</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Which moves from our platform have you finished in the last year?</strong> Ask to speak to one of those clients.</li>
        <li><strong>Where does your URL list come from?</strong> The answer should name a crawl, the sitemap and Search Console.</li>
        <li><strong>What becomes of each plugin or cartridge?</strong> Ask for the list with a decision on every line.</li>
        <li><strong>How will customers sign in after launch?</strong> Passwords usually do not move. Ask to see the invite email.</li>
        <li><strong>Who writes the code?</strong> Ask whether any part of the work is handed to another firm.</li>
        <li><strong>What is the rollback plan at cutover?</strong> Ask who decides, and how late orders are synced.</li>
        <li><strong>Who owns the store, theme and app accounts at the end?</strong> The answer should be you, in writing.</li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4">What FactoryJet does on a Shopify migration</h2>
      <p className="mb-4">
        We are FactoryJet, a commerce and AI services company and a registered Shopify Partner. We move stores to Shopify from WooCommerce, BigCommerce, Salesforce Commerce Cloud, Magento, Squarespace and Wix, and connect them to QuickBooks or an ERP. Our founder, Bhavesh Barot, joins the first call.
      </p>
      <p className="mb-6">
        Most WooCommerce moves take 3 to 8 weeks. Moves with data and integrations usually take 5 to 8 weeks, and headless or heavy custom work 8 to 14 weeks. We quote a fixed price per phase in writing after a short scoping call, and build a demo on your own product data before you sign. Read our <a href="/replatforming" className={link}>replatforming guides</a>, the <a href="/replatforming/woocommerce-to-shopify" className={link}>WooCommerce to Shopify</a> and <a href="/replatforming/salesforce-commerce-cloud-to-shopify-plus" className={link}>Salesforce Commerce Cloud to Shopify Plus</a> runbooks, or our <a href="/services/shopify-migration-agency" className={link}>Shopify migration service</a>.
      </p>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mb-8 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">If you are still working out the move</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Send us your current platform, your plugin or cartridge list and the systems the store must talk to. On a free call, the founder will tell you what the move involves and which kind of firm fits.
        </p>
        <a href="/contact" className="inline-block rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white">Book a free call with the founder</a>
      </div>
    </div>
  ),
};
