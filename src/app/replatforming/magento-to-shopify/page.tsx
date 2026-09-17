import type { Metadata } from 'next';
import type { CSSProperties, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import HeroInlineForm from '@/components/HeroInlineForm';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import '@/components/v2/PlatformPage.css';

/*
 * Magento to Shopify Plus migration: cost, timeline and runbook.
 *
 * Rebuilt 2026-09-17 to answer three buyer questions AI engines ask:
 * who to hire, what a Shopify Plus migration costs, and how long it takes.
 * Every number on this page links to the page it came from. Market ranges are
 * attributed to the agency or vendor that published them. FactoryJet prices are
 * deliberately absent.
 *
 * Removed in this rebuild because they carried claims we could not verify:
 * the partner marquee (unconfirmed partner badges), the
 * savings and uptime stat cards, RegionalBenchmarkCard, CommerceRoiCalculator,
 * EnterpriseArchitectureBlueprint, ZeroDowntimeMigrationMatrix,
 * SeoLinkEquityChecklist, ReplatformingScopeEstimator (lives on
 * /tools/replatforming-cost-calculator) and the shared AuthorCard.
 */

const PAGE_URL = 'https://factoryjet.com/replatforming/magento-to-shopify';
const PAGE_MODIFIED = '2026-09-17';
const PAGE_TITLE = 'Magento to Shopify Plus Migration: Cost, Timeline & Runbook';
const PAGE_DESCRIPTION =
  'Magento to Shopify Plus migration cost and timeline, with sourced 2026 ranges, Adobe Commerce end-of-support dates and an 11-phase runbook.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Magento to Shopify Plus migration cost, timeline and runbook' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/replatforming/magento-to-shopify',
    languages: {
      'en-US': 'https://factoryjet.com/replatforming/magento-to-shopify',
      'x-default': 'https://factoryjet.com/replatforming/magento-to-shopify',
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* Primary and published sources. Each was fetched and read on 2026-09-17. */
const SRC = {
  plusPlan: 'https://help.shopify.com/en/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan',
  plusPricing: 'https://www.shopify.com/plus/pricing',
  shopifyPricing: 'https://www.shopify.com/pricing',
  dataMigration: 'https://www.shopify.com/enterprise/blog/shopify-plus-data-migration-service',
  magentoGuide: 'https://www.shopify.com/enterprise/blog/magento-to-shopify-migration',
  migratingHelp: 'https://help.shopify.com/en/manual/migrating-to-shopify',
  transferData: 'https://help.shopify.com/en/manual/migrating-to-shopify/transfer-data',
  importCustomers: 'https://help.shopify.com/en/manual/customers/import-export-customers',
  importProducts: 'https://help.shopify.com/en/manual/products/import-export/import-products',
  variants: 'https://help.shopify.com/en/manual/products/variants/add-variants',
  combinedListings: 'https://help.shopify.com/en/manual/products/combined-listings-app',
  redirects: 'https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect',
  filters: 'https://help.shopify.com/en/manual/online-store/search-and-discovery/filters',
  newAccounts: 'https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts',
  b2bAccounts: 'https://help.shopify.com/en/manual/b2b/customer-login-and-accounts',
  b2bPlans: 'https://help.shopify.com/en/manual/b2b/getting-started/plan-features',
  multipass: 'https://shopify.dev/docs/api/customer-authentication/multipass',
  functions: 'https://shopify.dev/docs/apps/build/functions',
  checkoutUi: 'https://shopify.dev/docs/api/checkout-ui-extensions/latest',
  storeMigrationApp: 'https://apps.shopify.com/store-migration',
  partnerDirectory: 'https://www.shopify.com/partners/directory/services/store-setup/migrate-from-another-platform',
  adobeLifecycle: 'https://experienceleague.adobe.com/en/docs/commerce-operations/release/planning/lifecycle-policy',
  adobeVersions: 'https://experienceleague.adobe.com/en/docs/commerce-operations/release/versions',
  adobeB2b: 'https://experienceleague.adobe.com/en/docs/commerce-admin/b2b/introduction',
  adobeAttributes: 'https://experienceleague.adobe.com/en/docs/commerce-admin/catalog/product-attributes/product-attributes',
  magentoRepo: 'https://github.com/magento/magento2',
  googleSiteMove: 'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes',
  googleIndexingApi: 'https://developers.google.com/search/apis/indexing-api/v3/quickstart',
  litextensionCost: 'https://litextension.com/blog/shopify-plus-migration-cost/',
  litextensionMagento: 'https://litextension.com/shopify-migration/magento-to-shopify-migration.html',
  soloMedia: 'https://solomediagroup.com/blogs/insights/shopify-migration-cost',
  presta: 'https://wearepresta.com/shopify-migration-cost-2026-the-complete-pricing-breakdown/',
  elogic: 'https://elogic.co/blog/replatforming-cost-index/',
  askPhill: 'https://askphill.com/blogs/blog/magento-to-shopify-migration',
  oneDigital: 'https://www.1digitalagency.com/blog/magento-to-shopify-plus-migration-12-week-timeline/',
  cart2cart: 'https://www.shopping-cart-migration.com/shopping-cart-migration-options/1066-magento-to-shopify-migration',
  matrixifyPricing: 'https://matrixify.app/pricing/',
  matrixifyMagento: 'https://matrixify.app/migrate-to-shopify/magento/',
} as const;

const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: '/' },
  { name: 'Replatforming', url: '/replatforming' },
  { name: 'Magento to Shopify Plus', url: '/replatforming/magento-to-shopify' },
];

/* Hero "at a glance" facts. Each links to its source. */
const GLANCE_FACTS = [
  {
    label: 'Shopify Plus plan fee (USD)',
    value: '$2,300 a month on a 3-year term, or $2,500 on a 1-year term',
    sources: [{ name: 'Shopify Help Center', url: SRC.plusPlan }],
  },
  {
    label: 'Average Shopify Plus migration',
    value: '3 to 4 months from kickoff to go-live',
    sources: [{ name: 'Shopify', url: SRC.dataMigration }],
  },
  {
    label: 'Published 2026 project ranges',
    value: 'From $20,000 for a simple port to $500,000+ for enterprise B2B',
    sources: [
      { name: 'Solo Media Group', url: SRC.soloMedia },
      { name: 'Elogic', url: SRC.elogic },
    ],
  },
  {
    label: 'Adobe Commerce 2.4.7 standard support ends',
    value: 'May 31, 2027',
    sources: [{ name: 'Adobe', url: SRC.adobeLifecycle }],
  },
];

const PROOF_POINTS = [
  'Registered Shopify Partner',
  '500+ businesses served',
  'Written by founder Bhavesh Barot',
  'Last reviewed September 17, 2026',
];

/* What published guides report. Attributed ranges only, never FactoryJet prices. */
const COST_GUIDES = [
  {
    source: 'LitExtension',
    kind: 'Migration tool vendor',
    url: SRC.litextensionCost,
    scope: 'Magento 2 or Adobe Commerce to Shopify Plus; enterprise replatforms from any platform',
    cost: '$20,000–$150,000+ (Magento 2); $80,000–$200,000+ (enterprise)',
    time: '3–6 months for most enterprise projects',
  },
  {
    source: 'Solo Media Group',
    kind: 'Shopify agency',
    url: SRC.soloMedia,
    scope: 'Simple catalog and theme port / mid-market with custom theme and ERP / enterprise Plus rebuild',
    cost: '$20,000–$30,000 / $30,000–$60,000 / $75,000–$150,000+',
    time: '8–12 / 12–18 / 16–24 weeks',
  },
  {
    source: 'Presta',
    kind: 'Shopify agency',
    url: SRC.presta,
    scope: 'Enterprise Shopify Plus migration with complex data and ERP integration',
    cost: '$80,000–$150,000+',
    time: '16–24 weeks for stores with 10,000+ SKUs',
  },
  {
    source: 'Elogic Commerce',
    kind: 'Replatforming Cost Index 2026',
    url: SRC.elogic,
    scope: 'Adobe Commerce to Shopify Plus: mid-market / enterprise with SAP or NetSuite',
    cost: '$120,000–$300,000 / $250,000–$500,000+',
    time: '5–9 months / 8–14 months',
  },
  {
    source: 'Ask Phill',
    kind: 'Shopify agency, prices in euros',
    url: SRC.askPhill,
    scope: 'Magento to Shopify: no-code / mid-market / custom enterprise',
    cost: '€20,000–€50,000 / €60,000–€200,000 / €150,000–€700,000+',
    time: '2–3 / 4–6 / 5–10 months',
  },
];

const COST_DRIVERS = [
  {
    driver: 'Catalog size and variants',
    why: 'Shopify allows 3 options and 2,048 variants per product. Magento configurable products built on more attributes need restructuring before import.',
    measure: 'Active SKUs, configurable products with 4 or more attributes, attribute sets in use',
  },
  {
    driver: 'Customer and order history',
    why: "Historical orders load through a migration app or Shopify's Order API, not an admin CSV. Shopify's migration checklist counts 100,000+ orders as one sign you may need a migration service.",
    measure: 'Customer count, years of order history you really need, loyalty and subscription data',
  },
  {
    driver: 'Custom Magento modules and extensions',
    why: 'PHP modules do not transfer. Each one becomes a native Shopify feature, an app, a custom app, or nothing. Custom apps that use Shopify Functions need Plus.',
    measure: 'Full extension list, what each one does, and whether revenue depends on it',
  },
  {
    driver: 'B2B features',
    why: "Adobe's B2B extension adds company accounts, shared catalogs, negotiable quotes and requisition lists. Shopify B2B covers catalogs, net terms and draft orders, but the Basic, Grow and Advanced plans get only 3 active B2B catalogs.",
    measure: 'Price lists, quote workflow, approval rules, payment terms',
  },
  {
    driver: 'Integrations: ERP, PIM, 3PL, tax',
    why: "Elogic's 2026 index puts prebuilt ERP connectors at $5,000 to $30,000 and custom SAP or Oracle integrations at $50,000 to $250,000+ in year one.",
    measure: 'Every system that reads or writes orders, stock, prices or customers',
  },
  {
    driver: 'Theme design',
    why: 'Presta lists $2,000 to $5,000 for a purchased theme with light changes and $30,000 to $80,000 for a from-scratch or headless design.',
    measure: 'Templates you need, product page modules, Liquid theme or headless',
  },
  {
    driver: 'Data cleanup',
    why: 'Shopify says the biggest timeline risk is discovery and data cleanup, not the transfer itself.',
    measure: 'Duplicate SKUs, empty attributes, broken images, stale customer records',
  },
  {
    driver: 'SEO redirects',
    why: 'Shopify caps stores at 100,000 URL redirects, or 20 million on Plus, and a redirect only fires when the old URL is broken.',
    measure: 'Indexed URLs in Google Search Console, size of the Magento URL rewrite table, backlinked pages',
  },
  {
    driver: 'Apps replacing extensions',
    why: 'Apps add monthly fees after launch. Matrixify, a Shopify import app, runs $20 to $200 per 30 days.',
    measure: 'Monthly app budget compared with the extension licenses you drop',
  },
  {
    driver: 'Filters and layered navigation',
    why: 'Shopify Search & Discovery supports up to 25 storefront filters, with up to 100 values each.',
    measure: 'Filterable Magento attributes that drive traffic or sales',
  },
];

const TIMELINE_ROWS = [
  { profile: 'Small store: under 1,000 SKUs, no B2B, Liquid theme', time: '8–10 weeks', source: '1Digital', url: SRC.oneDigital },
  { profile: 'Simple catalog and theme port', time: '8–12 weeks', source: 'Solo Media Group', url: SRC.soloMedia },
  { profile: 'Magento 2 store with 5,000–25,000 SKUs, one storefront, standard extensions', time: '12 weeks', source: '1Digital', url: SRC.oneDigital },
  { profile: 'Mid-market with custom theme, light B2B and ERP', time: '12–18 weeks', source: 'Solo Media Group', url: SRC.soloMedia },
  { profile: 'Larger catalogs, several storefronts, or B2B price lists', time: '16–20 weeks', source: '1Digital', url: SRC.oneDigital },
  { profile: 'Enterprise Shopify Plus rebuild', time: '16–24 weeks', source: 'Solo Media Group', url: SRC.soloMedia },
  { profile: 'Adobe Commerce enterprise with SAP or NetSuite and complex B2B', time: '8–14 months', source: 'Elogic Commerce', url: SRC.elogic },
];

const SLOWDOWNS = [
  'Discovery and data cleanup. Shopify names these, not the data transfer, as the biggest timeline risk.',
  'A late redirect map. 1Digital warns that discovery, the redirect map and data migration do not compress safely.',
  'Integration testing with your ERP, OMS or PIM, which needs sandbox runs before cutover.',
  'Products that break Shopify limits, such as configurable products with four or more buyer-facing attributes.',
  'B2B account changes, because Shopify B2B buyers must use new customer accounts.',
  'Peak season. Shopify counts a tight downtime window during peak trading as one sign you may need a migration service.',
  'Skipped rehearsals. Shopify recommends at least two migration runs: one on staging, then production.',
];

/* Adobe Commerce lifecycle dates, from Adobe's lifecycle policy and released versions pages. */
const LIFECYCLE_ROWS = [
  { version: 'Adobe Commerce 2.4.9', released: 'May 12, 2026', standard: 'May 31, 2029', extended: 'Not yet announced' },
  { version: 'Adobe Commerce 2.4.8', released: 'April 8, 2025', standard: 'May 31, 2028', extended: 'Not yet announced' },
  { version: 'Adobe Commerce 2.4.7', released: 'April 9, 2024', standard: 'May 31, 2027', extended: 'May 31, 2028' },
  { version: 'Adobe Commerce 2.4.6', released: 'March 14, 2023', standard: 'Ended August 11, 2026', extended: 'August 31, 2027' },
  { version: 'Adobe Commerce 2.4.5', released: 'August 9, 2022', standard: 'Ended August 12, 2025', extended: 'Ended August 11, 2026' },
  { version: 'Adobe Commerce 2.4.4', released: 'April 12, 2022', standard: 'Ended April 12, 2025', extended: 'Ended April 14, 2026' },
  { version: '2.4.0 to 2.4.3', released: 'From July 28, 2020', standard: 'Ended November 28, 2022', extended: 'None listed' },
  { version: '2.3 release line', released: 'Older release line', standard: 'Ended September 8, 2022', extended: 'None listed' },
];

const MOVE_SIGNALS = [
  'Your version is past standard support, and the next upgrade means rebuilding custom modules anyway.',
  'Your products fit 3 options and 2,048 variants, or can be restructured to fit.',
  'Your team spends more time on patches, hosting and dependency upgrades than on selling.',
  'Your B2B needs fit Shopify catalogs, net terms, draft orders and quantity rules.',
];

const STAY_SIGNALS = [
  'Buyers depend on negotiable quotes, requisition lists or purchase order approvals that your team has customized.',
  'Products need more than three options on a single product page.',
  'Your storefront needs more than 25 filters.',
  'An upgrade costs you less: Adobe supports 2.4.8 until May 31, 2028 and 2.4.9 until May 31, 2029.',
];

const DATA_CHANGES = [
  {
    area: 'URLs',
    magento: 'Category paths and .html endings; the URL rewrite table can hold several URLs for one product',
    shopify: 'Fixed patterns: /products/handle, /collections/handle, /pages/handle',
    action: 'Map every indexed URL to one 301. Export existing Magento redirects so you do not build chains.',
  },
  {
    area: 'Product options',
    magento: 'Configurable products built from attributes',
    shopify: 'Up to 3 options and 2,048 variants per product; on Plus, Combined Listings groups up to 60 products',
    action: 'Keep three buyer-facing options. Move the rest to metafields or split the product.',
  },
  {
    area: 'Attributes',
    magento: 'Attributes grouped into attribute sets, also used for layered navigation and promotions',
    shopify: 'Metafields and metaobjects',
    action: 'Map before import, then confirm the metafields actually filled in.',
  },
  {
    area: 'Filters',
    magento: 'Layered navigation built from filterable attributes',
    shopify: 'Search & Discovery app: up to 25 filters, 100 values each, from options, metafields or metaobjects',
    action: 'Keep the filters that earn traffic or sales.',
  },
  {
    area: 'Customer passwords',
    magento: 'Customers sign in with passwords set on Magento',
    shopify: 'CSV imports cannot carry passwords; new customer accounts use a one-time 6-digit code; Multipass needs Plus and legacy accounts',
    action: 'Choose new customer accounts, or write invite emails, before launch.',
  },
  {
    area: 'B2B',
    magento: 'Company accounts, shared catalogs, negotiable quotes, requisition lists (Adobe B2B extension)',
    shopify: 'Companies, catalogs (3 on Basic, Grow and Advanced, unlimited on Plus), net terms, draft orders, PO numbers; buyers need new customer accounts',
    action: 'Map each buyer workflow and test your quote process against draft orders.',
  },
  {
    area: 'Checkout',
    magento: 'Custom checkout code and modules',
    shopify: 'Checkout UI extensions (information, shipping and payment steps are Plus only) and Shopify Functions (custom apps are Plus only)',
    action: 'Rebuild only the checkout logic that still earns money.',
  },
  {
    area: 'Hosting and upkeep',
    magento: 'Adobe makes merchants responsible for keeping PHP, MariaDB, OpenSearch and Redis on supported versions',
    shopify: 'Shopify hosts the platform; Plus is Level 1 PCI DSS and SOC 2 certified',
    action: 'Swap the patch calendar for regular app and integration reviews.',
  },
];

const RUNBOOK = [
  {
    title: 'Discovery and audit',
    body: "Export catalog, customer and order counts, the full extension list and every integration. Pull indexed URLs from Google Search Console, crawl the site, and export Magento's URL rewrites. Then score the project against Shopify's 10-point complexity checklist: three or more yes answers, such as 10,000+ SKUs, active ERP or PIM links, or 100,000+ orders, point to a migration service.",
    done: 'A written scope with SKU, customer, order, extension, integration and URL counts.',
  },
  {
    title: 'Data mapping',
    body: 'Build a field-by-field map from Magento to Shopify. Attributes become metafields, configurable products become up to three options and 2,048 variants, customer groups become customer tags or B2B companies, and Magento order statuses map to Shopify statuses. Decide how many years of order history you really need.',
    done: 'A signed-off mapping document that marks every Magento field keep, transform or drop.',
  },
  {
    title: 'Theme build',
    body: "Build on a Shopify theme or go headless. Plus includes Hydrogen, Shopify's React framework, with up to 25 custom storefronts on its Oxygen hosting. Rebuild the product page modules and filters that earn money, not every Magento template. Shopify's own Magento guide warns against copying complexity that does not drive revenue.",
    done: 'Templates approved on a staging store loaded with real products.',
  },
  {
    title: 'App and extension mapping',
    body: 'Put each Magento extension in one of four buckets: native Shopify feature, App Store app, custom app, or retire it. Public App Store apps that use Shopify Functions work on any plan, but custom apps built with Functions need Plus. Record the monthly fee of every replacement app.',
    done: 'Every extension has an owner, a replacement and a monthly cost.',
  },
  {
    title: 'Integrations',
    body: 'Re-point your ERP, PIM, 3PL, tax and email tools to Shopify and test each one in a sandbox. Decide which system owns products, prices, stock and customers, so two systems never overwrite each other. Shopify lists ERP, OMS and PIM dependencies among the triggers that push teams toward a migration service.',
    done: 'Orders, stock and prices sync correctly on staging.',
  },
  {
    title: 'Test data migrations',
    body: "Import in Shopify's order: products, then customers, then historical orders. Run at least two migrations, staging and then production, as Shopify recommends. Reconcile record counts for every data type and check a 5% to 10% sample from each area by hand. Turn off staff new-order notifications first, or every imported order sends an email.",
    done: 'Counts match, and the business team signs off on the sampled records.',
  },
  {
    title: 'SEO redirect map and URL structure',
    body: "Map every indexed Magento URL, including .html and category-path versions, to one Shopify URL under /products/, /collections/ or /pages/. Import the map by CSV from Content > Menus > URL redirects. Shopify only redirects broken URLs and may not redirect URLs with query strings. Google recommends single-hop 301s kept for at least a year. Skip Google's Indexing API: it only supports job posting and livestream pages.",
    done: 'Your top URLs each return one 301 to a live page.',
  },
  {
    title: 'Customer accounts and passwords',
    body: "Magento passwords do not come across in Shopify's CSV import. Choose new customer accounts, where people sign in with a one-time 6-digit code and which B2B buyers must use, or legacy accounts with invite emails. Multipass only works on Plus with legacy accounts, so do not plan around it if you want Shopify B2B.",
    done: 'Sign-in tested for a retail buyer and a B2B buyer, with the activation email written.',
  },
  {
    title: 'QA and user acceptance testing',
    body: "Test flows, not screens: payments in Shopify's test mode, refunds, partial fulfillment, taxes, shipping rates, discounts and B2B payment terms. Check your top 20 revenue SKUs field by field, as Shopify suggests, and confirm metafields filled in. Then place a few real orders, fulfill them and refund them.",
    done: 'A go or no-go checklist signed by operations, finance and marketing.',
  },
  {
    title: 'Launch-day cutover',
    body: 'Lower your DNS TTL 24 to 48 hours before the switch and stage every redirect before you point the domain. Freeze catalog changes on Magento, run a final import of new orders and customers, connect the domain in a low-traffic window, and confirm SSL. Agree in advance on what triggers a rollback.',
    done: 'Test orders flow into your ERP from the live domain.',
  },
  {
    title: 'Post-launch monitoring',
    body: 'For 14 days, check Google Search Console daily, crawl for 404s within 24 hours of launch, and compare organic traffic with your baseline. Shopify calls a 5% to 10% dip in week one common, while a sustained drop over 20% needs immediate work. Keep a hypercare team on call for 2 to 4 weeks, and keep redirects live for at least a year.',
    done: 'No open 404s on top URLs, and orders syncing cleanly.',
  },
];

const WHO_OPTIONS = [
  {
    option: 'In-house team using CSV and the API',
    fits: 'Under 500 SKUs with simple pricing, per Shopify, or a team with Shopify API experience',
    cost: 'Staff time. Shopify does not charge to migrate.',
    limits: 'CSV files max 15 MB, no passwords, no historical orders through an admin CSV. You own redirects and QA.',
  },
  {
    option: 'Cart2Cart',
    fits: 'Standard Magento data you want moved fast, with custom migration options; lists support for Magento 1.1.0 to 2.4.9',
    cost: 'Free demo migration; Cart2Cart says price depends on the number of data types and extra options you select',
    limits: 'Moves data, not design or functionality. Its Magento page says it migrates no more than 99 variants and 3 options per product.',
  },
  {
    option: 'LitExtension',
    fits: 'Standard data, with an optional expert-run migration service',
    cost: 'Free for stores under 100 products, customers and orders; otherwise priced by record counts',
    limits: 'Transfers data and can create redirects. Theme, app and integration work are separate.',
  },
  {
    option: 'Matrixify',
    fits: 'Teams that want spreadsheet control and repeatable imports from Magento export files',
    cost: 'Free Demo plan; $20, $50 or $200 per 30 days',
    limits: 'You build and check the data mapping yourself.',
  },
  {
    option: 'Shopify Partner or agency, including FactoryJet',
    fits: 'Large catalogs, configurable products, tier pricing, several storefronts, B2B or ERP work, per Shopify',
    cost: 'See the published ranges in the cost table above',
    limits: 'Quality varies widely. Vet any partner with the questions below.',
  },
];

const PARTNER_QUESTIONS = [
  'How many Magento or Adobe Commerce migrations have you finished at our catalog size and order volume?',
  'What are your phases, and what document comes out of each one?',
  'How will you map Magento data Shopify does not have, such as extra attributes or tier prices?',
  'How do you validate data: record counts, sampling and business sign-off?',
  'Have you connected our ERP, PIM or OMS to Shopify before, and how do you test it?',
  'Who builds and tests the redirect map, and when?',
  'What is the cutover sequence, and what triggers a rollback?',
  'What support do we get after launch, and for how long?',
  'Is the price fixed, time and materials, or phased, and what counts as a scope change?',
];

const FAQ_CATEGORIES = [
  { key: 'cost', label: 'Cost and fees' },
  { key: 'timeline', label: 'Timeline' },
  { key: 'hiring', label: 'Who should migrate' },
  { key: 'data', label: 'Data, customers and orders' },
  { key: 'seo', label: 'SEO and redirects' },
  { key: 'magento', label: 'Magento status and fit' },
];

/* Questions grounded in live Google People Also Ask results and AI buyer prompts. */
const FAQ_ITEMS = [
  {
    category: 'cost',
    question: 'How much does it cost to migrate from Magento to Shopify?',
    answer:
      "It depends on what has to be rebuilt, and published 2026 guides give a wide range. LitExtension lists $20,000 to $150,000+ for Magento 2 or Adobe Commerce stores. Solo Media Group lists $20,000 to $30,000 for a simple catalog and theme port. Elogic's cost index puts enterprise B2B builds with SAP or NetSuite at $250,000 to $500,000+. Integrations, custom modules and B2B pricing push you up the range.",
  },
  {
    category: 'cost',
    question: 'How much does a Shopify Plus migration cost?',
    answer:
      'Plan for two separate bills. For the project, Presta lists $80,000 to $150,000+ for enterprise Shopify Plus migrations, and LitExtension lists $80,000 to $200,000+ for enterprise replatforms. For the platform, Shopify Plus costs $2,300 a month on a 3-year term or $2,500 on a 1-year term in the US. Shopify says complex, higher-volume businesses may pay a variable platform fee instead.',
  },
  {
    category: 'cost',
    question: 'How much would it cost to migrate my website to Shopify?',
    answer:
      "For a small store with simple products, a tool can be enough. Solo Media Group puts migration tools at roughly $50 to $500 one time. LitExtension migrates Magento stores with fewer than 100 products, customers and orders for free, and Matrixify's paid import plans start at $20 per 30 days. Costs climb once you need theme work, integrations and a tested redirect map.",
  },
  {
    category: 'cost',
    question: 'Why is Shopify Plus so expensive?',
    answer:
      'Plus is priced for high-volume and complex stores, and the fee buys features lower plans lack: unlimited B2B catalogs where Basic, Grow and Advanced get 3, checkout UI extensions on the information, shipping and payment steps, custom apps built with Shopify Functions, 9 expansion stores, up to 20 million URL redirects, and an exemption from the daily variant upload limit that applies to stores with 500,000+ variants. If you need none of these, a lower plan may fit.',
  },
  {
    category: 'cost',
    question: 'Is Shopify Plus worth it for a Magento store?',
    answer:
      'It is worth it when you use what only Plus offers. B2B sellers who need more than 3 catalogs, deposits or partial payments, brands that customize checkout steps, and stores that need custom Shopify Functions or Multipass usually need Plus. A single-brand store with standard products and no checkout changes may not. Price both paths before you sign a 3-year term.',
  },
  {
    category: 'cost',
    question: 'How much does Shopify take from a $100 sale?',
    answer:
      "In the US, it depends on your plan and how the customer pays. Shopify's pricing page lists online card rates of 2.9% + 30 cents on Basic and 2.25% + 30 cents on Plus with Shopify Payments, so a $100 online order costs $3.20 in card fees on Basic or $2.55 on Plus. Premium and international cards cost more. If you use another payment provider, Shopify adds 2% on Basic or 0.2% on Plus, on top of that provider's own fees.",
  },
  {
    category: 'timeline',
    question: 'How long does a Magento to Shopify migration take?',
    answer:
      "Shopify says Plus migrations average three to four months from kickoff to go-live. Agency plans line up with that. 1Digital plans 12 weeks for a Magento 2 store with 5,000 to 25,000 SKUs and one storefront, and 16 to 20 weeks for larger, multi-store or B2B stores. Enterprise builds with SAP or NetSuite run 8 to 14 months in Elogic's cost index.",
  },
  {
    category: 'timeline',
    question: 'Can a Magento to Shopify migration be done in a few weeks?',
    answer:
      'Only for small, clean stores. 1Digital says a store under 1,000 SKUs with no B2B needs, a Liquid theme and simple integrations can sometimes compress to 8 to 10 weeks. The data transfer itself is fast: LitExtension says its tool moves most small and medium stores in a few hours. 1Digital warns that discovery, the redirect map and data migration do not compress safely.',
  },
  {
    category: 'hiring',
    question: 'Who should I hire to migrate from Magento to Shopify Plus?',
    answer:
      "Match the partner to your store. Shopify's Magento guide suggests CSV import for under 500 SKUs, a migration app for medium stores with standard data, and a migration service or partner for large catalogs, configurable products, tier pricing, multi-store setups, B2B or ERP work. Shortlist partners from the Shopify Partner Directory, then ask for comparable Magento projects and a written cutover and rollback plan.",
  },
  {
    category: 'hiring',
    question: 'How can I migrate my Magento store to Shopify?',
    answer:
      "Shopify lists five ways: copy content by hand, import CSV files, use a migration app, hire a Shopify Partner, or build a custom migration with the Shopify API. Shopify's free Store Migration app does not list Magento as a source, so Magento stores usually use CSV, a third-party tool such as Cart2Cart, LitExtension or Matrixify, or a partner. Import products, then customers, then orders.",
  },
  {
    category: 'hiring',
    question: 'Can I migrate Magento to Shopify for free?',
    answer:
      "Small stores can. LitExtension offers a free migration for Magento stores with fewer than 100 products, customers and orders. Cart2Cart runs a free demo migration on a sample of your data, and Matrixify has a free Demo plan. Shopify's own CSV imports cost nothing but cap each file at 15 MB, and they cannot carry customer passwords or historical orders.",
  },
  {
    category: 'data',
    question: 'Can customer passwords be migrated from Magento to Shopify?',
    answer:
      "Not with Shopify's own tools. Shopify says you can't migrate customer passwords from another store using a CSV, so you invite imported customers to create new ones. New customer accounts avoid the problem: customers sign in with a one-time 6-digit code and no password. Some migration vendors advertise password transfer through an extra Magento module, so ask exactly how it works.",
  },
  {
    category: 'data',
    question: 'How do I import orders into Shopify using a CSV file?',
    answer:
      "You can't import historical orders with a CSV in the Shopify admin. Shopify lists migration apps and its Order API as the ways to bring orders in, and tools such as Matrixify and LitExtension handle Magento orders. Before importing, turn off new order notifications for staff, because Shopify emails every notified staff member once for each imported order.",
  },
  {
    category: 'data',
    question: 'What is the variant limit in Shopify?',
    answer:
      "Shopify allows up to 2,048 variants and three options per product. A Magento configurable product that uses four or more attributes, such as size, color, material and length, needs restructuring: keep three as options and move the rest to metafields, or split the product. Check your migration tool too, because Cart2Cart's Magento page still says it migrates no more than 99 variants per product.",
  },
  {
    category: 'data',
    question: 'How can I have more than 3 product options on Shopify?',
    answer:
      "Shopify caps each product at three options and 2,048 variants, so extra choices need a workaround. On Shopify Plus, the Combined Listings app can group up to 60 separate products into one listing, with up to 3 options on top of each product's own options. On other plans, teams usually split the product into several products or collect the extra choice through an app or custom theme code. Test cart, inventory and ERP sync on these products early.",
  },
  {
    category: 'data',
    question: 'Why is my CSV not importing correctly into Shopify?',
    answer:
      'The usual causes are file size, encoding and headers. Shopify caps product and customer CSV files at 15 MB, requires UTF-8 encoding, and treats column header names as case-sensitive. A product whose handle already exists gets its matching columns overwritten, and choosing to overwrite customers with a matching email or phone number replaces their data. Split large Magento exports into smaller files.',
  },
  {
    category: 'data',
    question: 'Is Shopify good for B2B?',
    answer:
      "For many wholesale models, yes. Shopify B2B runs on the Basic, Grow, Advanced and Plus plans, with net terms, vaulted cards, draft orders, PO numbers, quantity rules and price breaks. Basic, Grow and Advanced get 3 B2B catalogs, while Plus adds unlimited catalogs, direct catalog assignment to companies, deposits and partial payments. B2B buyers must use new customer accounts. If you rely on Adobe's negotiable quotes, test Shopify draft orders against that workflow.",
  },
  {
    category: 'seo',
    question: 'Will I lose Google rankings when I move from Magento to Shopify?',
    answer:
      "Expect movement, not a permanent loss, if the redirects are right. Google says rankings can fluctuate during a move and that medium-sized sites can take a few weeks or more to show new URLs. Shopify's Magento guide calls a 5% to 10% dip in week one common even with perfect redirects, and says a sustained drop over 20% needs investigation. Keep 301s for at least a year.",
  },
  {
    category: 'seo',
    question: 'Why is my URL redirect not working in Shopify?',
    answer:
      'Shopify only redirects from broken URLs. If the old path still loads a page on your Shopify store, the redirect will not fire, so remove that page first. URLs with query strings, such as Magento filter URLs, may not redirect as expected. Browsers also cache 301s, so test in a private window. Stores can hold 100,000 redirects, or 20 million on Plus.',
  },
  {
    category: 'seo',
    question: 'Where are URL redirects in Shopify?',
    answer:
      'In your Shopify admin, go to Content, then Menus, then View URL redirects. You can create redirects one at a time or import them from a CSV file that lists each old path and its new path, which is the practical way to load a full Magento redirect map. Import and test the map before you point your domain at Shopify.',
  },
  {
    category: 'magento',
    question: 'Is Magento end of life?',
    answer:
      'Magento is still maintained, but every version has an end date. Adobe gives each release three years of standard support. Standard support for 2.4.6 ended August 11, 2026, 2.4.7 ends May 31, 2027, 2.4.8 ends May 31, 2028, and 2.4.9 ends May 31, 2029. Adobe also says it will suspend traffic to Adobe Commerce on Cloud stores running unsupported versions, starting June 1, 2027.',
  },
  {
    category: 'magento',
    question: 'Does anyone still use Magento?',
    answer:
      'Yes. Adobe still ships new releases, including Adobe Commerce 2.4.9 on May 12, 2026, with standard support through May 31, 2029, and it recommends Adobe Commerce as a Cloud Service as the long-term path for its Cloud customers. Staying is a valid choice if you rely on deep customization or Adobe B2B features. The cost of staying is regular upgrades and dependency patching.',
  },
  {
    category: 'magento',
    question: 'What is Magento called now? Is it part of Adobe Commerce?',
    answer:
      'Adobe sells the licensed version as Adobe Commerce, and the open-source edition is still called Magento Open Source. Both follow the same 2.4.x version numbers, and Adobe publishes release notes for each. Adobe Commerce adds features such as the B2B extension, which brings company accounts, shared catalogs, negotiable quotes and requisition lists.',
  },
  {
    category: 'magento',
    question: 'Is Magento Open Source free?',
    answer:
      "There is no license fee. Adobe's Magento Open Source repository is licensed under the Open Software License 3.0, which grants a royalty-free license. Running it is not free: you pay for hosting, extensions, developers and patching. Adobe's lifecycle policy also warns that PHP 8.1 reached end of life on December 31, 2025, which puts PCI compliance at risk for stores still running it.",
  },
  {
    category: 'magento',
    question: 'Which platform is better for my business, Magento or Shopify?',
    answer:
      'Shopify usually fits if you want hosted infrastructure, standard product structures and less custom code to maintain. Magento or Adobe Commerce usually fits if you need code-level control, products with more than three options, or Adobe B2B features such as negotiable quotes and requisition lists. If a support deadline is close, compare the migration cost with an upgrade to 2.4.8 or 2.4.9 first.',
  },
  {
    category: 'magento',
    question: 'What does replatforming mean?',
    answer:
      'Replatforming means moving your online store to a different commerce platform, such as from Magento to Shopify Plus. Shopify splits it into two parts: data migration, which moves products, customers, orders and content and takes weeks, and the full replatform, which adds the storefront build, integrations and redesign and usually takes 3 to 6 months.',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Magento to Shopify Plus Migration',
  serviceType: 'Ecommerce replatforming from Magento and Adobe Commerce to Shopify Plus',
  description:
    'Migration of Magento Open Source and Adobe Commerce stores to Shopify or Shopify Plus: discovery, data mapping, theme build, app and integration mapping, test migrations, SEO redirect mapping, customer account planning, QA, cutover and post-launch monitoring.',
  url: PAGE_URL,
  provider: { '@id': 'https://factoryjet.com/#organization' },
  areaServed: { '@type': 'Country', name: 'United States' },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  inLanguage: 'en-US',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', name: 'FactoryJet', url: 'https://factoryjet.com' },
  about: { '@id': `${PAGE_URL}#service` },
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder',
    worksFor: { '@id': 'https://factoryjet.com/#organization' },
    url: 'https://factoryjet.com/about',
    sameAs: ['https://www.linkedin.com/in/bhavesh-ai-gtm-expert/'],
  },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  citation: [
    SRC.plusPlan,
    SRC.dataMigration,
    SRC.magentoGuide,
    SRC.redirects,
    SRC.variants,
    SRC.adobeLifecycle,
    SRC.adobeVersions,
    SRC.googleSiteMove,
    SRC.litextensionCost,
    SRC.soloMedia,
    SRC.elogic,
  ],
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url === '/' ? 'https://factoryjet.com/' : `https://factoryjet.com${item.url}`,
  })),
};

/* Shared inline styles, matching the rv/pp visual language of the replatforming pages. */
const H2_STYLE: CSSProperties = {
  fontSize: 'clamp(28px, 4vw, 42px)',
  fontWeight: 800,
  color: '#141414',
  letterSpacing: '-0.025em',
  lineHeight: 1.15,
  margin: '0 0 16px',
};
const H3_STYLE: CSSProperties = {
  fontSize: '21px',
  fontWeight: 700,
  color: '#141414',
  lineHeight: 1.3,
  margin: '40px 0 12px',
};
const BODY_STYLE: CSSProperties = {
  fontSize: '16.5px',
  lineHeight: 1.7,
  color: '#494852',
  margin: '0 0 16px',
  maxWidth: '74ch',
};
const SMALL_STYLE: CSSProperties = {
  fontSize: '13.5px',
  lineHeight: 1.6,
  color: '#5C5B66',
  margin: '12px 0 0',
  maxWidth: '80ch',
};
const LINK_STYLE: CSSProperties = {
  color: '#B23E13',
  textDecoration: 'underline',
  textUnderlineOffset: '2px',
  fontWeight: 600,
};
const TABLE_WRAP_STYLE: CSSProperties = {
  overflowX: 'auto',
  borderRadius: '14px',
  border: '1px solid #E6E6EC',
  background: '#FFFFFF',
  marginTop: '20px',
};
const TH_STYLE: CSSProperties = {
  color: '#141414',
  fontWeight: 700,
  padding: '14px 16px',
  background: '#F6F6F9',
  verticalAlign: 'bottom',
};
const TD_STYLE: CSSProperties = {
  padding: '14px 16px',
  fontSize: '14.5px',
  lineHeight: 1.55,
};
const TINT_SECTION_STYLE: CSSProperties = {
  backgroundColor: '#F6F6F9',
  borderTop: '1px solid #E6E6EC',
  borderBottom: '1px solid #E6E6EC',
};

function SourceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={LINK_STYLE}>
      {children}
    </a>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <div className="rv-badge" style={{ marginBottom: '14px' }}>
      <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
      </svg>
      <span>{children}</span>
    </div>
  );
}

export default function MagentoToShopifyPage() {
  return (
    <>
      <JsonLd id="magento-faq-schema" data={FAQ_SCHEMA} />
      <JsonLd id="magento-service-schema" data={SERVICE_SCHEMA} />
      <JsonLd id="magento-webpage-schema" data={WEBPAGE_SCHEMA} />
      <JsonLd id="magento-breadcrumb-schema" data={BREADCRUMB_SCHEMA} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <Breadcrumbs items={BREADCRUMB_ITEMS} />

      <main className="platpage">

        {/* 01. Hero: light, left-aligned, inline lead form */}
        <section className="pp-sec" style={{ paddingTop: 'clamp(36px, 6vh, 72px)', paddingBottom: 'clamp(44px, 6vh, 72px)', background: '#FFFFFF', borderTop: 'none' }}>
          <div className="pp-wrap">
            <div className="rv-hero-wrap" style={{ alignItems: 'start' }}>
              <div>
                <Badge>Magento and Adobe Commerce to Shopify Plus</Badge>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.1, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5vw, 54px)' }}>
                  Magento to Shopify Plus Migration: Cost, Timeline and Runbook
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '56ch', margin: '0 0 8px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  What a move off Magento or Adobe Commerce really costs, how long it takes, and the 11 phases we run to get there. Every market figure here names its source, and none of them are FactoryJet prices.
                </p>

                <HeroInlineForm source="us_magento_to_shopify_hero" region="us" submitLabel="Get a migration scope review" />

                <div className="rv-actions" style={{ marginTop: '22px', gap: '16px' }}>
                  <ModalCTAButton label="Get a Replatforming Audit" region="us" btnVariant="secondary-light" />
                  <a href="#migration-cost" style={LINK_STYLE}>See cost ranges</a>
                  <a href="#migration-runbook" style={LINK_STYLE}>See the runbook</a>
                </div>
              </div>

              <aside
                aria-label="Magento to Shopify Plus migration at a glance"
                style={{ border: '1px solid #E6E6EC', borderRadius: '20px', background: '#FFFFFF', padding: 'clamp(20px, 3vw, 28px)', boxShadow: '0 16px 40px rgba(20, 17, 15, 0.06)' }}
              >
                <p style={{ fontFamily: 'var(--pp-mono)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B23E13', margin: '0 0 6px' }}>
                  At a glance
                </p>
                <dl style={{ margin: 0 }}>
                  {GLANCE_FACTS.map((fact) => (
                    <div key={fact.label} style={{ padding: '14px 0', borderTop: '1px solid #F0F0F5' }}>
                      <dt style={{ fontSize: '13px', fontWeight: 600, color: '#5C5B66', margin: 0 }}>{fact.label}</dt>
                      <dd style={{ margin: '4px 0 0' }}>
                        <span style={{ display: 'block', fontFamily: 'var(--pp-display)', fontSize: '18px', fontWeight: 800, color: '#141414', lineHeight: 1.3 }}>
                          {fact.value}
                        </span>
                        <span style={{ display: 'block', fontSize: '12.5px', color: '#5C5B66', marginTop: '4px' }}>
                          Source:{' '}
                          {fact.sources.map((s, i) => (
                            <span key={s.url}>
                              {i > 0 ? ', ' : ''}
                              <SourceLink href={s.url}>{s.name}</SourceLink>
                            </span>
                          ))}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </div>
          </div>
        </section>

        {/* 02. Answer-first block */}
        <section id="answer" className="pp-sec" style={TINT_SECTION_STYLE}>
          <div className="pp-wrap">
            <div style={{ maxWidth: '860px', borderLeft: '4px solid #F05A28', paddingLeft: 'clamp(16px, 3vw, 28px)' }}>
              <h2 style={H2_STYLE}>The short answer: cost and timeline</h2>
              <p style={{ ...BODY_STYLE, fontSize: 'clamp(17px, 2vw, 19px)', color: '#141414', fontWeight: 500 }}>
                A Magento 2 or Adobe Commerce to Shopify Plus migration costs about $20,000 to $150,000 or more in LitExtension&apos;s 2026 guide, and Elogic&apos;s cost index puts enterprise B2B builds at $250,000 to $500,000+. Shopify says Plus migrations average three to four months. Integrations, custom modules and B2B pricing move the number more than SKU count does.
              </p>
              <p style={BODY_STYLE}>
                Budget the platform separately: Shopify Plus is $2,300 a month on a 3-year term or $2,500 a month on a 1-year term in US dollars (<SourceLink href={SRC.plusPlan}>Shopify Help Center</SourceLink>). Sources for the project ranges: <SourceLink href={SRC.litextensionCost}>LitExtension</SourceLink>, <SourceLink href={SRC.elogic}>Elogic</SourceLink> and <SourceLink href={SRC.dataMigration}>Shopify</SourceLink>.
              </p>
              <nav aria-label="On this page" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 18px', marginTop: '18px', fontSize: '14.5px' }}>
                <a href="#migration-cost" style={LINK_STYLE}>Cost</a>
                <a href="#migration-timeline" style={LINK_STYLE}>Timeline</a>
                <a href="#magento-end-of-support" style={LINK_STYLE}>End of support</a>
                <a href="#magento-vs-shopify-data" style={LINK_STYLE}>What changes</a>
                <a href="#migration-runbook" style={LINK_STYLE}>Runbook</a>
                <a href="#who-should-migrate" style={LINK_STYLE}>Who should migrate</a>
              </nav>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '36px 0 0', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {PROOF_POINTS.map((point) => (
                <li key={point} style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '999px', padding: '8px 16px', fontSize: '14px', fontWeight: 600, color: '#141414' }}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 03. Cost */}
        <section id="migration-cost" className="pp-sec" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="pp-wrap">
            <Badge>Cost</Badge>
            <h2 style={H2_STYLE}>How much does a Magento to Shopify Plus migration cost?</h2>
            <p style={BODY_STYLE}>
              You pay two separate bills: the migration project and the Shopify plan. Shopify says it does not charge to migrate and that migration is the merchant&apos;s responsibility, so the project cost is whatever your team, tool or agency charges (<SourceLink href={SRC.plusPricing}>Shopify Plus pricing</SourceLink>). Shopify does not publish project prices, so the best evidence is what agencies and tool vendors publish about their own work.
            </p>

            <h3 style={H3_STYLE}>What published 2026 guides report</h3>
            <div style={TABLE_WRAP_STYLE}>
              <table className="pp-table" style={{ margin: 0, width: '100%' }}>
                <caption style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' }}>
                  Published Magento and Shopify Plus migration cost and timeline ranges by source
                </caption>
                <thead>
                  <tr>
                    <th scope="col" style={TH_STYLE}>Source</th>
                    <th scope="col" style={TH_STYLE}>Scope they price</th>
                    <th scope="col" style={TH_STYLE}>Published cost range</th>
                    <th scope="col" style={TH_STYLE}>Timeline they give</th>
                  </tr>
                </thead>
                <tbody>
                  {COST_GUIDES.map((row) => (
                    <tr key={row.source}>
                      <td className="name" style={TD_STYLE}>
                        <SourceLink href={row.url}>{row.source}</SourceLink>
                        <span style={{ display: 'block', fontSize: '12.5px', fontWeight: 500, color: '#5C5B66', marginTop: '2px', fontFamily: 'var(--pp-font)' }}>{row.kind}</span>
                      </td>
                      <td style={TD_STYLE}>{row.scope}</td>
                      <td style={{ ...TD_STYLE, color: '#141414', fontWeight: 600 }}>{row.cost}</td>
                      <td style={TD_STYLE}>{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={SMALL_STYLE}>
              Treat these as agency and vendor estimates, not audited market data. They differ partly because they price different scopes: some include redesign and ERP work, others only move data. FactoryJet does not publish migration prices. We scope each project after discovery.
            </p>

            <h3 style={H3_STYLE}>Shopify Plus platform fees</h3>
            <p style={BODY_STYLE}>
              In the US, the Shopify Plus plan is $2,300 a month on a 3-year term or $2,500 a month on a 1-year term, for standard setups and integrations. Shopify says more complex, higher-volume businesses may pay a variable platform fee based on revenue and business model, and that it differs for B2B and direct-to-consumer orders (<SourceLink href={SRC.plusPlan}>Shopify Help Center</SourceLink>). Card rates vary by country. In the US, Shopify&apos;s pricing page lists Plus online card rates from 2.25% + 30 cents with Shopify Payments, and a 0.2% fee on each transaction when you use a third-party payment provider instead (<SourceLink href={SRC.shopifyPricing}>Shopify pricing</SourceLink>).
            </p>
            <p style={BODY_STYLE}>
              Apps, payment processing and ERP middleware are running costs, not migration costs. For the full year-by-year picture, read our breakdown of{' '}
              <Link href="/blog/the-true-cost-of-shopify-plus-2026" style={LINK_STYLE}>what Shopify Plus costs to run</Link>.
            </p>

            <h3 style={H3_STYLE}>What drives the cost of a Magento migration</h3>
            <p style={BODY_STYLE}>
              LitExtension puts it plainly: the final cost depends on what has to be rebuilt, reconnected, redesigned and validated, not on how many products you have (<SourceLink href={SRC.litextensionCost}>LitExtension</SourceLink>). Measure these ten drivers before you ask anyone for a quote.
            </p>
            <div style={TABLE_WRAP_STYLE}>
              <table className="pp-table" style={{ margin: 0, width: '100%' }}>
                <caption style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' }}>
                  Cost drivers for a Magento to Shopify Plus migration
                </caption>
                <thead>
                  <tr>
                    <th scope="col" style={TH_STYLE}>Cost driver</th>
                    <th scope="col" style={TH_STYLE}>Why it moves the price</th>
                    <th scope="col" style={TH_STYLE}>What to measure first</th>
                  </tr>
                </thead>
                <tbody>
                  {COST_DRIVERS.map((row) => (
                    <tr key={row.driver}>
                      <td className="name" style={TD_STYLE}>{row.driver}</td>
                      <td style={TD_STYLE}>{row.why}</td>
                      <td style={TD_STYLE}>{row.measure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={SMALL_STYLE}>
              Sources: <SourceLink href={SRC.variants}>Shopify variant limits</SourceLink>, <SourceLink href={SRC.transferData}>Shopify data transfer</SourceLink>, <SourceLink href={SRC.dataMigration}>Shopify migration checklist</SourceLink>, <SourceLink href={SRC.functions}>Shopify Functions</SourceLink>, <SourceLink href={SRC.adobeB2b}>Adobe B2B</SourceLink>, <SourceLink href={SRC.b2bPlans}>Shopify B2B by plan</SourceLink>, <SourceLink href={SRC.elogic}>Elogic</SourceLink>, <SourceLink href={SRC.presta}>Presta</SourceLink>, <SourceLink href={SRC.redirects}>Shopify URL redirects</SourceLink>, <SourceLink href={SRC.matrixifyPricing}>Matrixify pricing</SourceLink>, <SourceLink href={SRC.filters}>Shopify filters</SourceLink>.
            </p>
            <p style={{ ...BODY_STYLE, marginTop: '22px' }}>
              Want a first number for your own store? Run it through our{' '}
              <Link href="/tools/replatforming-cost-calculator" style={LINK_STYLE}>replatforming cost calculator</Link>, then compare it with the ranges above.
            </p>
          </div>
        </section>

        {/* 04. Mid-page CTA: shared light-band component with a real link, so it works without JavaScript */}
        <MidPageCTA
          headline="Not sure which cost tier your store is in?"
          sub="Send your Magento version, SKU count, extension list and integrations. We will tell you which tier you fall into, what would move it, and whether staying on Adobe Commerce is the smarter call."
          label="Get a migration scope review"
        />

        {/* 05. Timeline */}
        <section id="migration-timeline" className="pp-sec" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="pp-wrap">
            <Badge>Timeline</Badge>
            <h2 style={H2_STYLE}>How long does a Magento to Shopify migration take?</h2>
            <p style={BODY_STYLE}>
              Shopify says Shopify Plus migrations average three to four months from kickoff to go-live. It separates the data migration, which takes weeks, from the full replatform with storefront build and integrations, which usually takes 3 to 6 months (<SourceLink href={SRC.dataMigration}>Shopify</SourceLink>). Agency plans for Magento stores fit that shape, with enterprise B2B work running longer.
            </p>

            <div style={TABLE_WRAP_STYLE}>
              <table className="pp-table" style={{ margin: 0, width: '100%' }}>
                <caption style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' }}>
                  Magento to Shopify migration timelines by store complexity
                </caption>
                <thead>
                  <tr>
                    <th scope="col" style={TH_STYLE}>Store profile</th>
                    <th scope="col" style={TH_STYLE}>Typical timeline</th>
                    <th scope="col" style={TH_STYLE}>Source</th>
                  </tr>
                </thead>
                <tbody>
                  {TIMELINE_ROWS.map((row) => (
                    <tr key={row.profile}>
                      <td className="name" style={TD_STYLE}>{row.profile}</td>
                      <td style={{ ...TD_STYLE, color: '#141414', fontWeight: 600 }}>{row.time}</td>
                      <td style={TD_STYLE}><SourceLink href={row.url}>{row.source}</SourceLink></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 style={H3_STYLE}>What slows a migration down</h3>
            <ul style={{ margin: '0 0 16px', paddingLeft: '22px', display: 'grid', gap: '10px', maxWidth: '78ch' }}>
              {SLOWDOWNS.map((item) => (
                <li key={item} style={{ fontSize: '16px', lineHeight: 1.6, color: '#494852' }}>{item}</li>
              ))}
            </ul>
            <p style={BODY_STYLE}>
              Do not confuse transfer time with project time. LitExtension says its tool moves most small and medium stores in a few hours and larger stores in up to several days (<SourceLink href={SRC.litextensionMagento}>LitExtension</SourceLink>). The weeks go into mapping, building, testing and cutover. Sources for the list above: <SourceLink href={SRC.dataMigration}>Shopify</SourceLink>, <SourceLink href={SRC.oneDigital}>1Digital</SourceLink> and <SourceLink href={SRC.b2bAccounts}>Shopify B2B accounts</SourceLink>.
            </p>
          </div>
        </section>

        {/* 06. Magento end of support */}
        <section id="magento-end-of-support" className="pp-sec" style={TINT_SECTION_STYLE}>
          <div className="pp-wrap">
            <Badge>Migration trigger</Badge>
            <h2 style={H2_STYLE}>Magento and Adobe Commerce end of support dates</h2>
            <p style={BODY_STYLE}>
              End of support is a hard deadline for any Magento plan. Adobe gives each Adobe Commerce release three years of standard support from its release date, and added one free extra year for 2.4.6 and 2.4.7 (<SourceLink href={SRC.adobeLifecycle}>Adobe lifecycle policy</SourceLink>). Magento 1 does not appear in Adobe&apos;s current support tables at all.
            </p>

            <div style={TABLE_WRAP_STYLE}>
              <table className="pp-table" style={{ margin: 0, width: '100%' }}>
                <caption style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' }}>
                  Adobe Commerce release dates and end of support dates
                </caption>
                <thead>
                  <tr>
                    <th scope="col" style={TH_STYLE}>Version</th>
                    <th scope="col" style={TH_STYLE}>Released</th>
                    <th scope="col" style={TH_STYLE}>Standard support ends</th>
                    <th scope="col" style={TH_STYLE}>Extended support ends</th>
                  </tr>
                </thead>
                <tbody>
                  {LIFECYCLE_ROWS.map((row) => (
                    <tr key={row.version}>
                      <td className="name" style={TD_STYLE}>{row.version}</td>
                      <td style={TD_STYLE}>{row.released}</td>
                      <td style={{ ...TD_STYLE, color: '#141414', fontWeight: 600 }}>{row.standard}</td>
                      <td style={TD_STYLE}>{row.extended}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={SMALL_STYLE}>
              Sources: <SourceLink href={SRC.adobeLifecycle}>Adobe Commerce lifecycle policy</SourceLink> (updated August 19, 2026) and <SourceLink href={SRC.adobeVersions}>Adobe released versions</SourceLink>. Magento Open Source uses the same 2.4.x release numbers; check Adobe&apos;s policy for how support applies to your edition.
            </p>

            <h3 style={H3_STYLE}>Three deadlines that change the math</h3>
            <ul style={{ margin: '0 0 16px', paddingLeft: '22px', display: 'grid', gap: '10px', maxWidth: '78ch' }}>
              <li style={{ fontSize: '16px', lineHeight: 1.6, color: '#494852' }}>
                <strong style={{ color: '#141414' }}>June 1, 2027:</strong> Adobe says it will stop maintaining Adobe Commerce on Cloud environments that run unsupported versions, including suspending their traffic, which takes the storefront offline.
              </li>
              <li style={{ fontSize: '16px', lineHeight: 1.6, color: '#494852' }}>
                <strong style={{ color: '#141414' }}>December 31, 2025 and December 31, 2026:</strong> PHP 8.1 reached end of life on the first date, and PHP 8.2 reaches it on the second. Adobe warns that running either past its end-of-life date puts PCI compliance at risk.
              </li>
              <li style={{ fontSize: '16px', lineHeight: 1.6, color: '#494852' }}>
                <strong style={{ color: '#141414' }}>May 31, 2027 and May 31, 2028:</strong> the one-time, security-only period for 2.4.4 and 2.4.5 ends in 2027, and for 2.4.6 in 2028. Adobe tells merchants to treat it as migration time, not a support tier.
              </li>
            </ul>

            <h3 style={H3_STYLE}>Migrate or upgrade? An honest check</h3>
            <p style={BODY_STYLE}>
              Adobe&apos;s recommended path for Cloud customers is Adobe Commerce as a Cloud Service, and upgrading to 2.4.8 or 2.4.9 keeps you supported until 2028 or 2029. Moving to Shopify is not automatically the right answer.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '8px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', padding: '22px 24px' }}>
                <p style={{ fontSize: '16px', fontWeight: 700, color: '#141414', margin: '0 0 10px' }}>Moving to Shopify Plus usually makes sense when:</p>
                <ul style={{ margin: 0, paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                  {MOVE_SIGNALS.map((item) => (
                    <li key={item} style={{ fontSize: '15px', lineHeight: 1.55, color: '#494852' }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', padding: '22px 24px' }}>
                <p style={{ fontSize: '16px', fontWeight: 700, color: '#141414', margin: '0 0 10px' }}>Staying on Adobe Commerce is often the better call when:</p>
                <ul style={{ margin: 0, paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                  {STAY_SIGNALS.map((item) => (
                    <li key={item} style={{ fontSize: '15px', lineHeight: 1.55, color: '#494852' }}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p style={{ ...BODY_STYLE, marginTop: '20px' }}>
              For the full platform decision, see our{' '}
              <Link href="/comparisons/shopify-plus-vs-magento" style={LINK_STYLE}>Shopify Plus vs Magento comparison</Link>. If staying wins, our{' '}
              <Link href="/services/magento-development" style={LINK_STYLE}>Magento development team</Link> handles upgrades too.
            </p>
          </div>
        </section>

        {/* 07. What changes between the data models */}
        <section id="magento-vs-shopify-data" className="pp-sec" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="pp-wrap">
            <Badge>Magento vs Shopify</Badge>
            <h2 style={H2_STYLE}>What changes when Magento data moves to Shopify</h2>
            <p style={BODY_STYLE}>
              Many migration surprises come from limits that Magento never had. Shopify&apos;s own Magento guide lists passwords, configurable products, custom attributes, tier pricing and CMS blocks as data with no direct Shopify equivalent (<SourceLink href={SRC.magentoGuide}>Shopify</SourceLink>). Here is how each area translates.
            </p>
            <div style={TABLE_WRAP_STYLE}>
              <table className="pp-table" style={{ margin: 0, width: '100%' }}>
                <caption style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' }}>
                  Magento or Adobe Commerce compared with Shopify or Shopify Plus, area by area
                </caption>
                <thead>
                  <tr>
                    <th scope="col" style={TH_STYLE}>Area</th>
                    <th scope="col" style={TH_STYLE}>Magento or Adobe Commerce</th>
                    <th scope="col" style={TH_STYLE}>Shopify or Shopify Plus</th>
                    <th scope="col" style={TH_STYLE}>What to do</th>
                  </tr>
                </thead>
                <tbody>
                  {DATA_CHANGES.map((row) => (
                    <tr key={row.area}>
                      <td className="name" style={TD_STYLE}>{row.area}</td>
                      <td style={TD_STYLE}>{row.magento}</td>
                      <td style={TD_STYLE}>{row.shopify}</td>
                      <td style={{ ...TD_STYLE, color: '#141414' }}>{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={SMALL_STYLE}>
              Sources: <SourceLink href={SRC.magentoGuide}>Shopify Magento guide</SourceLink>, <SourceLink href={SRC.variants}>variants</SourceLink>, <SourceLink href={SRC.combinedListings}>Combined Listings</SourceLink>, <SourceLink href={SRC.adobeAttributes}>Adobe attributes</SourceLink>, <SourceLink href={SRC.filters}>filters</SourceLink>, <SourceLink href={SRC.importCustomers}>customer import</SourceLink>, <SourceLink href={SRC.newAccounts}>new customer accounts</SourceLink>, <SourceLink href={SRC.multipass}>Multipass</SourceLink>, <SourceLink href={SRC.adobeB2b}>Adobe B2B</SourceLink>, <SourceLink href={SRC.b2bPlans}>Shopify B2B by plan</SourceLink>, <SourceLink href={SRC.checkoutUi}>checkout UI extensions</SourceLink>, <SourceLink href={SRC.functions}>Shopify Functions</SourceLink>, <SourceLink href={SRC.adobeLifecycle}>Adobe dependencies</SourceLink>, <SourceLink href={SRC.plusPlan}>Shopify Plus security</SourceLink>.
            </p>
            <p style={{ ...BODY_STYLE, marginTop: '20px' }}>
              Selling wholesale? Our{' '}
              <Link href="/services/shopify-plus-b2b" style={LINK_STYLE}>Shopify Plus B2B service</Link> covers companies, catalogs, net terms and ERP pricing sync in more depth.
            </p>
          </div>
        </section>

        {/* 08. Runbook */}
        <section id="migration-runbook" className="pp-sec" style={TINT_SECTION_STYLE}>
          <div className="pp-wrap">
            <div className="rv-about-grid" style={{ alignItems: 'start' }}>
              <div style={{ position: 'sticky', top: '100px' }}>
                <Badge>Runbook</Badge>
                <h2 style={H2_STYLE}>The Magento to Shopify Plus migration runbook, in 11 phases</h2>
                <p style={BODY_STYLE}>
                  This is the order we work in, and each phase ends with a written exit check before the next one starts. It follows Shopify&apos;s published migration guidance, Adobe&apos;s documentation and Google&apos;s site move rules, with sources listed below the phases.
                </p>
                <p style={BODY_STYLE}>
                  Want a printable version? Use our{' '}
                  <Link href="/blog/magento-to-shopify-plus-migration-checklist-2026" style={LINK_STYLE}>Magento to Shopify Plus migration checklist</Link>.
                </p>
                <div style={{ marginTop: '12px' }}>
                  <ModalCTAButton label="Start Your Migration Audit" region="us" btnVariant="primary-dark" />
                </div>
              </div>

              <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '14px' }}>
                {RUNBOOK.map((phase, index) => (
                  <li key={phase.title} style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '14px', padding: '22px 24px' }}>
                    <p style={{ fontFamily: 'var(--pp-mono)', fontSize: '13px', fontWeight: 700, color: '#B23E13', margin: '0 0 6px' }}>
                      Phase {index + 1} of {RUNBOOK.length}
                    </p>
                    <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#141414', margin: '0 0 8px', lineHeight: 1.3 }}>
                      {phase.title}
                    </h3>
                    <p style={{ fontSize: '15px', color: '#494852', margin: '0 0 10px', lineHeight: 1.6 }}>
                      {phase.body}
                    </p>
                    <p style={{ fontSize: '14px', color: '#141414', margin: 0, lineHeight: 1.5 }}>
                      <strong>Done when:</strong> {phase.done}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
            <p style={{ ...SMALL_STYLE, marginTop: '24px' }}>
              Sources: <SourceLink href={SRC.dataMigration}>Shopify migration checklist and SOW</SourceLink>, <SourceLink href={SRC.magentoGuide}>Shopify Magento guide</SourceLink>, <SourceLink href={SRC.migratingHelp}>Shopify migration methods</SourceLink>, <SourceLink href={SRC.transferData}>Shopify data transfer</SourceLink>, <SourceLink href={SRC.plusPlan}>Shopify Plus features</SourceLink>, <SourceLink href={SRC.functions}>Shopify Functions</SourceLink>, <SourceLink href={SRC.redirects}>URL redirects</SourceLink>, <SourceLink href={SRC.googleSiteMove}>Google site moves</SourceLink>, <SourceLink href={SRC.googleIndexingApi}>Google Indexing API</SourceLink>, <SourceLink href={SRC.newAccounts}>new customer accounts</SourceLink>, <SourceLink href={SRC.b2bAccounts}>B2B accounts</SourceLink>, <SourceLink href={SRC.multipass}>Multipass</SourceLink>.
            </p>
          </div>
        </section>

        {/* 09. Who should do the migration */}
        <section id="who-should-migrate" className="pp-sec" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div className="rv-about-grid">
              <div>
                <Badge>Who should migrate</Badge>
                <h2 style={H2_STYLE}>Who should do your migration: in-house, a tool or an agency?</h2>
                <p style={BODY_STYLE}>
                  Shopify&apos;s Magento guide matches the method to the store: manual or CSV import for under 500 SKUs with simple pricing, a migration app for medium stores with standard data, and a migration service or partner for large catalogs, configurable products, tier pricing, multi-store setups, B2B pricing or ERP integrations (<SourceLink href={SRC.magentoGuide}>Shopify</SourceLink>).
                </p>
                <p style={BODY_STYLE}>
                  One detail catches Magento teams out: Shopify&apos;s free Store Migration app lists Square, WooCommerce, Etsy, Wix, Amazon, eBay, Clover and Lightspeed as sources, but not Magento (<SourceLink href={SRC.storeMigrationApp}>Shopify App Store</SourceLink>).
                </p>
              </div>
              <div className="rv-curved-frame-2">
                <Image
                  src="/images/replatforming/magento-team-architects.jpg"
                  alt="Two developers reviewing a Magento to Shopify field mapping on a monitor"
                  width={1200}
                  height={896}
                  sizes="(max-width: 991px) 100vw, 540px"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>

            <div style={TABLE_WRAP_STYLE}>
              <table className="pp-table" style={{ margin: 0, width: '100%' }}>
                <caption style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' }}>
                  Magento to Shopify migration options compared: in-house, Cart2Cart, LitExtension, Matrixify and agencies
                </caption>
                <thead>
                  <tr>
                    <th scope="col" style={TH_STYLE}>Option</th>
                    <th scope="col" style={TH_STYLE}>Fits when</th>
                    <th scope="col" style={TH_STYLE}>What it costs (published)</th>
                    <th scope="col" style={TH_STYLE}>Real limits</th>
                  </tr>
                </thead>
                <tbody>
                  {WHO_OPTIONS.map((row) => (
                    <tr key={row.option}>
                      <td className="name" style={TD_STYLE}>{row.option}</td>
                      <td style={TD_STYLE}>{row.fits}</td>
                      <td style={TD_STYLE}>{row.cost}</td>
                      <td style={TD_STYLE}>{row.limits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={SMALL_STYLE}>
              Sources: <SourceLink href={SRC.magentoGuide}>Shopify Magento guide</SourceLink>, <SourceLink href={SRC.plusPricing}>Shopify Plus pricing</SourceLink>, <SourceLink href={SRC.importProducts}>product CSV limits</SourceLink>, <SourceLink href={SRC.importCustomers}>customer CSV limits</SourceLink>, <SourceLink href={SRC.transferData}>order import</SourceLink>, <SourceLink href={SRC.cart2cart}>Cart2Cart</SourceLink>, <SourceLink href={SRC.litextensionMagento}>LitExtension</SourceLink>, <SourceLink href={SRC.matrixifyMagento}>Matrixify Magento migration</SourceLink>, <SourceLink href={SRC.matrixifyPricing}>Matrixify pricing</SourceLink>.
            </p>

            <h3 style={H3_STYLE}>Questions to ask a migration partner</h3>
            <p style={BODY_STYLE}>
              Shopify publishes ten questions for vetting migration partners (<SourceLink href={SRC.dataMigration}>Shopify</SourceLink>). Below is our Magento version of that list. Find candidates in the{' '}
              <SourceLink href={SRC.partnerDirectory}>Shopify Partner Directory store migration category</SourceLink>, where you can check ratings and reviews.
            </p>
            <ol style={{ margin: '0 0 16px', paddingLeft: '24px', display: 'grid', gap: '10px', maxWidth: '78ch' }}>
              {PARTNER_QUESTIONS.map((question) => (
                <li key={question} style={{ fontSize: '16px', lineHeight: 1.6, color: '#494852' }}>{question}</li>
              ))}
            </ol>

            <div style={{ marginTop: '28px', background: '#FFF8F5', border: '1px solid #F2D6CB', borderRadius: '14px', padding: '20px 24px', maxWidth: '860px' }}>
              <p style={{ fontSize: '15.5px', lineHeight: 1.65, color: '#141414', margin: 0 }}>
                <strong>Our interest, stated plainly:</strong> FactoryJet is a registered Shopify Partner that runs Magento to Shopify migrations, so we benefit when you hire an agency. If your store fits the in-house or tool profile above, use that route. If it does not, see how our{' '}
                <Link href="/services/shopify-migration-agency" style={LINK_STYLE}>Shopify migration agency</Link> works.
              </p>
            </div>
          </div>
        </section>

        {/* 10. FAQ: FAQPage JSON-LD is generated from the same FAQ_ITEMS array */}
        <FAQ
          eyebrow="MAGENTO TO SHOPIFY PLUS FAQ"
          headline="Magento to Shopify Plus migration questions, answered"
          lead="Real questions buyers search for, answered with the same sources used above."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#F6F6F9]"
        />

        {/* 11. About this guide, sources and related guides */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div style={{ maxWidth: '900px' }}>
              <h2 style={{ ...H2_STYLE, fontSize: 'clamp(24px, 3vw, 32px)' }}>About this guide</h2>
              <p style={BODY_STYLE}>
                Written by <Link href="/about" style={LINK_STYLE}>Bhavesh Barot</Link>, founder of FactoryJet (<SourceLink href="https://www.linkedin.com/in/bhavesh-ai-gtm-expert/">LinkedIn</SourceLink>). FactoryJet is a registered Shopify Partner and has served 500+ businesses. Last reviewed September 17, 2026, against the Shopify, Adobe and Google documentation listed below. Platform rules and prices change, so check the linked source before you sign anything.
              </p>

              <h3 style={H3_STYLE}>Sources</h3>
              <ul style={{ margin: 0, paddingLeft: '20px', display: 'grid', gap: '8px', fontSize: '15px', lineHeight: 1.55 }}>
                <li><SourceLink href={SRC.plusPlan}>Shopify Help Center: Shopify Plus plan</SourceLink></li>
                <li><SourceLink href={SRC.shopifyPricing}>Shopify: plan fees and card rates (US)</SourceLink></li>
                <li><SourceLink href={SRC.dataMigration}>Shopify: Shopify Plus data migration service</SourceLink></li>
                <li><SourceLink href={SRC.magentoGuide}>Shopify: Magento to Shopify migration guide</SourceLink></li>
                <li><SourceLink href={SRC.redirects}>Shopify Help Center: URL redirects</SourceLink></li>
                <li><SourceLink href={SRC.variants}>Shopify Help Center: adding variants</SourceLink></li>
                <li><SourceLink href={SRC.adobeLifecycle}>Adobe: Adobe Commerce lifecycle policy</SourceLink></li>
                <li><SourceLink href={SRC.adobeVersions}>Adobe: released versions</SourceLink></li>
                <li><SourceLink href={SRC.magentoRepo}>Adobe: Magento Open Source repository</SourceLink></li>
                <li><SourceLink href={SRC.googleSiteMove}>Google Search Central: site moves with URL changes</SourceLink></li>
                <li><SourceLink href={SRC.litextensionCost}>LitExtension: Shopify Plus migration cost</SourceLink></li>
                <li><SourceLink href={SRC.soloMedia}>Solo Media Group: Shopify migration cost</SourceLink></li>
                <li><SourceLink href={SRC.elogic}>Elogic: Ecommerce Replatforming Cost Index 2026</SourceLink></li>
                <li><SourceLink href={SRC.oneDigital}>1Digital: Magento to Shopify Plus 12-week timeline</SourceLink></li>
              </ul>

              <h3 style={H3_STYLE}>Related guides</h3>
              <ul style={{ margin: 0, paddingLeft: '20px', display: 'grid', gap: '8px', fontSize: '15px', lineHeight: 1.55 }}>
                <li><Link href="/blog/magento-to-shopify-plus-migration-checklist-2026" style={LINK_STYLE}>Magento to Shopify Plus migration checklist</Link></li>
                <li><Link href="/blog/the-true-cost-of-shopify-plus-2026" style={LINK_STYLE}>The true cost of Shopify Plus in 2026</Link></li>
                <li><Link href="/tools/replatforming-cost-calculator" style={LINK_STYLE}>Replatforming cost calculator</Link></li>
                <li><Link href="/comparisons/shopify-plus-vs-magento" style={LINK_STYLE}>Shopify Plus vs Magento</Link></li>
                <li><Link href="/replatforming/salesforce-commerce-cloud-to-shopify-plus" style={LINK_STYLE}>Salesforce Commerce Cloud to Shopify Plus migration</Link></li>
                <li><Link href="/services/shopify-maintenance-services" style={LINK_STYLE}>Shopify support and maintenance after launch</Link></li>
                <li><Link href="/replatforming" style={LINK_STYLE}>All replatforming guides</Link></li>
              </ul>
            </div>
          </div>
        </section>

        {/* 12. Closing CTA: the page's one dark section */}
        <section id="final-cta" className="pp-sec" style={{ backgroundColor: '#141414', color: '#FFFFFF', padding: 'clamp(64px, 10vh, 112px) 0', borderTop: 'none' }}>
          <div className="pp-wrap" style={{ maxWidth: '820px' }}>
            <h2 style={{ fontSize: 'clamp(30px, 4.6vw, 50px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Plan your Magento to Shopify Plus migration with a real scope
            </h2>
            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#C9C9D3', lineHeight: 1.6, margin: '0 0 32px', maxWidth: '62ch' }}>
              Send your store URL, Magento version, SKU count, extension list and integrations. We will give you a straight read on your cost tier, a realistic timeline, the risks in your data, and whether staying on Adobe Commerce is the better call. You talk to the founder, not a sales team.
            </p>
            <ModalCTAButton label="Schedule Architecture Discovery Call" region="us" btnVariant="primary-light" />
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
