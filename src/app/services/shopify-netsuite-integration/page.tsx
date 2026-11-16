import type { Metadata } from 'next';
import Link from 'next/link';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';
import FinalCTA from '@/components/v2/FinalCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import ComparisonTable, { type ComparisonColumn, type ComparisonRow } from '@/components/v2/ComparisonTable';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import StickyCtaLabel from '@/components/v2/StickyCtaLabel';
import JsonLd from '@/components/JsonLd';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { ORG_ID, ORG_REF, FOUNDER_ID } from '@/data/organization';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/shopify-netsuite-integration, built 2026-11-16.

   Why this page exists: US searches measured 2026-11-16 (DataForSEO, US):
   "shopify netsuite integration" 210/mo (KD 22), "shopify erp integration"
   90/mo (KD 5). The buyer question "Which agency can integrate Shopify Plus
   with NetSuite for a wholesale distributor?" named FactoryJet 1 time in 6
   (Perplexity only). No page on the site covered Shopify + NetSuite on its
   own: /services/ecommerce-erp-integration is generic, /services/netsuite-ai-agents
   is about agents, /replatforming/netsuite-suitecommerce-to-shopify-plus is a
   migration page.

   Truth rules for anyone editing this file:
   - Every platform fact and every dollar figure links to its source through
     the SRC map. Each URL was opened on 2026-11-16 (CHECKED_ON). Prices move:
     re-open the page before changing a number.
   - No FactoryJet prices. The dollar figures are an app's list price and
     third-party market ranges, each named and linked.
   - No NetSuite client is named and no NetSuite outcome is claimed. The
     experience line restates /services/netsuite-ai-agents (approved 2026-10-09).
   - Layout and schema mirror /services/shopify-quickbooks-integration, with
     JSON-LD emitted only through <JsonLd>.

   Schema: WebPage + Service + FAQPage + BreadcrumbList. Organization is
   rendered sitewide by src/app/layout.tsx and referenced here by @id.
   FAQPage mainEntity is built from the same FAQ_ITEMS array the visible
   <FAQ> renders. Breadcrumb JSON-LD is built from BREADCRUMB_ITEMS, the same
   array the visible <Breadcrumbs> renders.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/shopify-netsuite-integration';
const PAGE_TITLE = 'Shopify NetSuite Integration Services | FactoryJet';
const PAGE_DESC =
  'Shopify NetSuite integration for DTC and B2B stores. Pick the right route (Oracle connector, Celigo or custom), decide which system owns each record, and avoid the usual sync failures.';
const PAGE_PUBLISHED = '2026-11-16';
const PAGE_MODIFIED = '2026-11-16';
const CHECKED_ON = '16 Nov 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'shopify netsuite integration',
    'netsuite shopify integration',
    'shopify plus netsuite integration',
    'shopify b2b netsuite',
    'shopify netsuite connector',
    'celigo shopify netsuite',
    'netsuite erp connector shopify',
    'shopify erp integration',
    'shopify netsuite integration cost',
    'shopify netsuite integration agency',
  ],
  alternates: {
    canonical: CANONICAL_URL,
    languages: { 'en-US': CANONICAL_URL, 'x-default': CANONICAL_URL },
  },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: CANONICAL_URL,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'FactoryJet, Shopify and NetSuite integration services for US businesses',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/** One array feeds the visible <Breadcrumbs> and the BreadcrumbList JSON-LD. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Shopify NetSuite Integration', url: CANONICAL_URL },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BREADCRUMB_ITEMS.map((b, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: b.name,
    item: b.url,
  })),
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${CANONICAL_URL}#webpage`,
  url: CANONICAL_URL,
  name: PAGE_TITLE,
  description: PAGE_DESC,
  inLanguage: 'en-US',
  datePublished: PAGE_PUBLISHED,
  dateModified: PAGE_MODIFIED,
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://factoryjet.com/#website',
    url: 'https://factoryjet.com',
    name: 'FactoryJet',
  },
  about: { '@id': `${CANONICAL_URL}#service` },
  publisher: { '@id': ORG_ID },
  reviewedBy: { '@type': 'Person', '@id': FOUNDER_ID, name: 'Bhavesh Barot' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#short-answer'] },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${CANONICAL_URL}#service`,
  name: 'Shopify NetSuite Integration',
  serviceType:
    'Shopify and Shopify Plus integration with Oracle NetSuite: products, inventory, prices and price levels, customers and B2B companies, orders, fulfillments, refunds, invoices and payment terms',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'FactoryJet plans, builds, tests and supports the connection between Shopify or Shopify Plus and Oracle NetSuite. Work covers choosing between a pre-built app, an iPaaS connector such as Celigo, or custom middleware; agreeing which system owns each record; setting up Shopify B2B company accounts, catalogs and payment terms from NetSuite; and building custom syncs when an app cannot follow the business rules.',
  url: CANONICAL_URL,
};

/* ── Sources. One map, used by inline source links (`short`) and by the
   visible Sources list (`label`). Opened on 2026-11-16 unless the label says
   otherwise. ── */
const SRC = {
  oracleApp: {
    short: 'Shopify App Store: NetSuite ERP Connector',
    label: 'Shopify App Store: NetSuite ERP Connector, by Oracle NetSuite',
    url: 'https://apps.shopify.com/oracle-netsuite',
  },
  celigoTemplate: {
    short: 'Celigo: Shopify and NetSuite template',
    label: 'Celigo: Shopify NetSuite Integration Template',
    url: 'https://www.celigo.com/integrations/shopify-netsuite/',
  },
  celigoPricing: {
    short: 'Celigo: pricing',
    label: 'Celigo: platform pricing (no dollar prices published)',
    url: 'https://www.celigo.com/platform/pricing/',
  },
  brokenrubik: {
    short: 'BrokenRubik cost guide, Aug 2026',
    label: 'BrokenRubik: Shopify NetSuite Integration guide, by Joaquin Vigna (updated Aug 12, 2026)',
    url: 'https://www.brokenrubik.com/blog/shopify-netsuite-integration-make-it-work-make-it-scalable',
  },
  houseblend: {
    short: 'Houseblend cost guide, Oct 2026',
    label: 'Houseblend: Shopify to NetSuite Integration, Connectors, Costs and Setup (updated Oct 14, 2026)',
    url: 'https://www.houseblend.io/articles/shopify-netsuite-integration-connectors-costs',
  },
  aiondata: {
    short: 'AIONDATA vendor prices, Oct 2026',
    label: 'AIONDATA: NetSuite Shopify integration (prices checked Oct 22, 2026)',
    url: 'https://www.aiondata.io/integrations/netsuite-shopify',
  },
  shopifyB2b: {
    short: 'Shopify Help: B2B',
    label: 'Shopify Help Center: B2B on Shopify',
    url: 'https://help.shopify.com/en/manual/b2b',
  },
  shopifyCatalogs: {
    short: 'Shopify Help: B2B catalogs',
    label: 'Shopify Help Center: B2B catalogs',
    url: 'https://help.shopify.com/en/manual/b2b/catalogs',
  },
  shopifyTerms: {
    short: 'Shopify Help: payment terms',
    label: 'Shopify Help Center: B2B payment terms',
    url: 'https://help.shopify.com/en/manual/b2b/payment-terms',
  },
  shopifyLimits: {
    short: 'shopify.dev: GraphQL rate limits',
    label: 'shopify.dev: GraphQL Admin API rate limits',
    url: 'https://shopify.dev/docs/apps/build/apis/graphql-admin/rate-limits',
  },
  nsPriceLevels: {
    short: 'NetSuite Help: customer price levels',
    label: 'Oracle NetSuite Help Center: Setting Up Price Levels for Customers',
    url: 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N2182485.html',
  },
  nsCustomerFinancial: {
    short: 'NetSuite Help: customer financial info',
    label: 'Oracle NetSuite Help Center: Entering Financial Information for the Customer',
    url: 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N1078064.html',
  },
} as const;

type SrcKey = keyof typeof SRC;

/* ── FAQ. One array, rendered visibly AND used for FAQPage JSON-LD. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'Connecting the two' },
  { key: 'b2b', label: 'Shopify Plus and B2B' },
  { key: 'data', label: 'Data and sync' },
  { key: 'working', label: 'Cost and working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── Connecting the two ───────────────────────────────────────────
  {
    category: 'basics',
    question: 'Does Shopify integrate with NetSuite?',
    answer:
      'Yes. Oracle NetSuite publishes the NetSuite ERP Connector on the Shopify App Store. The listing says it syncs product, pricing, inventory, sales order and fulfillment data between NetSuite and Shopify or Shopify Plus stores, including B2B storefronts and Shopify POS. iPaaS tools such as Celigo and custom middleware are the other two ways to connect them.',
  },
  {
    category: 'basics',
    question: 'What are the ways to connect Shopify and NetSuite?',
    answer:
      'There are three. A pre-built app, such as Oracle\'s NetSuite ERP Connector, is the quickest to set up. An iPaaS connector, such as Celigo, gives you ready-made flows you can change. Custom middleware is code written for your business, which you own. Most stores should start with the lightest route that follows their rules.',
  },
  {
    category: 'basics',
    question: 'What is the best Shopify NetSuite connector?',
    answer:
      'It depends on your orders and your rules. One store with standard orders often fits Oracle\'s own app. Several stores, more channels or flows you want to change often fit Celigo. Many B2B price levels per customer, several subsidiaries or custom records that no app maps well are where custom middleware earns its cost. We tell you which fits on the first call.',
  },
  {
    category: 'basics',
    question: 'What is iPaaS?',
    answer:
      'iPaaS stands for integration platform as a service. It is a hosted tool that moves data between apps using flows you set up, without writing every line of code. Celigo is the iPaaS most often named for Shopify and NetSuite. Its template lists 16 flows, such as Shopify orders to NetSuite sales orders and NetSuite item shipments to Shopify fulfillments.',
  },
  {
    category: 'basics',
    question: 'Who should do a Shopify NetSuite integration?',
    answer:
      'A team that knows both systems and starts by asking which system owns each record. Your NetSuite administrator or accounting partner decides how orders, tax and refunds should post. The integration team makes Shopify and NetSuite follow those rules, tests them with real orders, and keeps the sync running after launch.',
  },
  // ── Shopify Plus and B2B ────────────────────────────────────────
  {
    category: 'b2b',
    question: 'Can Shopify Plus B2B work with NetSuite?',
    answer:
      'Yes. Shopify B2B has company accounts, catalogs with their own prices, and payment terms. NetSuite holds the same ideas as customer records, price levels and terms. The integration maps one to the other. Oracle\'s B2B plan on the Shopify App Store lists B2B order sync, B2B customer sync and invoice posting.',
  },
  {
    category: 'b2b',
    question: 'Do I need Shopify Plus for B2B?',
    answer:
      'Not always. Shopify\'s help center says B2B is available on the Basic, Grow, Advanced and Shopify Plus plans. Plus removes the limit of 3 active catalog assignments, lets you assign catalogs straight to company locations, and adds deposits at checkout. Wholesale distributors with many price lists usually need those Plus features.',
  },
  {
    category: 'b2b',
    question: 'How do NetSuite price levels become Shopify price lists?',
    answer:
      'Each NetSuite price level, such as Wholesale or Distributor, becomes a Shopify B2B catalog. A catalog can set fixed prices or a percentage change from the store price. The integration assigns each catalog to the right company locations. Customer-specific item prices in NetSuite need extra care, because NetSuite lets them override the customer\'s price level.',
  },
  {
    category: 'b2b',
    question: 'Can Shopify show net 30 terms from NetSuite?',
    answer:
      'Yes. Shopify B2B supports net 7, 15, 30, 45, 60 and 90 terms, plus due on fulfillment. Terms are set per company location. The integration reads each customer\'s terms in NetSuite and sets the matching terms in Shopify, so a buyer on net 30 checks out without paying by card.',
  },
  {
    category: 'b2b',
    question: 'Does Shopify enforce NetSuite credit limits?',
    answer:
      'Not on its own. Shopify\'s payment terms page does not mention credit limits. NetSuite keeps the credit limit on the customer record. We keep the limit in NetSuite and have the integration check it, then hold the order or block terms checkout when a buyer is over.',
  },
  // ── Data and sync ───────────────────────────────────────────────
  {
    category: 'data',
    question: 'Which system should own inventory, Shopify or NetSuite?',
    answer:
      'NetSuite, in almost every setup we see. NetSuite knows what was received, what sits in each warehouse and what was sold through every channel. Shopify gets the available count per location. If both systems can change the same count, the next sync overwrites one of them.',
  },
  {
    category: 'data',
    question: 'How often does Shopify NetSuite sync run?',
    answer:
      'It depends on the route and on how you set it up. Oracle\'s app lists real-time options for order sync and for price and quantity sync. iPaaS flows usually run on a schedule you choose. Fast-moving stock needs a short gap, or you sell items you do not have.',
  },
  {
    category: 'data',
    question: 'Why do I get duplicate customers in NetSuite?',
    answer:
      'Because each Shopify order can create a new customer when the match rule is weak. A guest buyer, a new email address or a B2B buyer ordering for a second location can all look like a new person. We set one match rule, usually email plus company, and clean old duplicates before go-live.',
  },
  {
    category: 'data',
    question: 'How are Shopify refunds recorded in NetSuite?',
    answer:
      'Celigo\'s template sends Shopify refunds to NetSuite as cash refunds or credit memos, and NetSuite customer refunds back to Shopify. Your accountant picks which record each type of refund should become. Partial refunds, shipping refunds and refunds without a return all need their own test.',
  },
  {
    category: 'data',
    question: 'Can the integration handle several NetSuite subsidiaries?',
    answer:
      'Yes, with clear rules. Each Shopify store or market has to post to the right subsidiary, with the right currency and tax setup. Several stores feeding several subsidiaries is one of the main reasons buyers move from a pre-built app to Celigo or custom middleware.',
  },
  {
    category: 'data',
    question: 'Will Shopify API limits slow the sync down?',
    answer:
      'They can on large catalogs. Shopify\'s developer docs give the GraphQL Admin API 100 points a second on standard plans and 1,000 points a second on Shopify Plus. A full price update on thousands of items has to be paced within that limit, which is why we send only what changed.',
  },
  // ── Cost and working with us ────────────────────────────────────
  {
    category: 'working',
    question: 'How much does a Shopify NetSuite integration cost?',
    answer:
      "Oracle's NetSuite ERP Connector listed plans from $199.92 to $916.58 a month in October 2026. BrokenRubik's guide puts native connector setup at $5,000 to $15,000, a Celigo implementation at $8,000 to $25,000, and custom development at $50,000 to $150,000 or more. BrokenRubik is a Celigo partner. FactoryJet quotes a fixed price in writing after a short scoping call.",
  },
  {
    category: 'working',
    question: 'How much does Celigo cost for Shopify and NetSuite?',
    answer:
      "Celigo does not publish prices. Its pricing page says the price depends on the edition and how you use the platform. AIONDATA listed a Celigo Starting Package at $7,800 a year and a Standard Edition at $18,900 a year in October 2026. BrokenRubik's guide gives $20,000 to $60,000 a year for Celigo licensing plus support.",
  },
  {
    category: 'working',
    question: 'How long does a Shopify NetSuite integration take?',
    answer:
      'A pre-built app on one store with clean data can be live in a few weeks. A B2B setup with price levels, terms and several locations takes longer, because each rule needs testing with real orders. The timeline goes in writing with the quote.',
  },
  {
    category: 'working',
    question: 'Have you worked with NetSuite before?',
    answer:
      'Yes. FactoryJet has worked on NetSuite, Odoo, SAP Business One, ERPNext and custom ERPs, on jobs such as RFQ automation, daily bookkeeping, and purchase and sales order generation. We do not name NetSuite clients on this page. Before a contract, we show working software on your own data.',
  },
  {
    category: 'working',
    question: 'Can I see it working before I sign?',
    answer:
      'Yes. Before a contract, we show working software on your own data. For this job that means a sample of your own items, prices and orders moving between a Shopify development store and a NetSuite sandbox, so you can check the records it creates.',
  },
  {
    category: 'working',
    question: 'We are moving from SuiteCommerce to Shopify Plus. Can you keep NetSuite?',
    answer:
      'Yes. NetSuite stays as your ERP and Shopify Plus becomes the store. The integration is built and tested before the switch, so orders keep flowing into NetSuite on day one. Our page on moving from NetSuite SuiteCommerce to Shopify Plus covers the full move.',
  },
  {
    category: 'working',
    question: 'Is FactoryJet a Shopify Plus Partner or an Oracle NetSuite partner?',
    answer:
      'FactoryJet is a registered Shopify Partner, without a Plus Partner tier, and is not an Oracle NetSuite partner. We do the engineering work itself. If your procurement team requires a partner badge, tell us on the first call.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

/* ── Data ownership. The map we start from; yours is agreed in writing. ── */
type Owner = 'netsuite' | 'shopify' | 'split';

const OWNER_LABEL: Record<Owner, string> = {
  netsuite: 'NetSuite owns',
  shopify: 'Shopify owns',
  split: 'Split',
};

const OWNERSHIP: ReadonlyArray<{ data: string; owner: Owner; flow: string; note: string }> = [
  {
    data: 'Products and SKUs',
    owner: 'split',
    flow: 'NetSuite to Shopify',
    note: 'The item record, SKU and cost live in NetSuite. Titles, photos and product copy are usually written in Shopify.',
  },
  {
    data: 'Inventory',
    owner: 'netsuite',
    flow: 'NetSuite to Shopify',
    note: 'NetSuite counts stock in each warehouse. Shopify gets the number it can sell, per location.',
  },
  {
    data: 'Prices and price levels',
    owner: 'netsuite',
    flow: 'NetSuite to Shopify',
    note: 'The base price sets the store price. Each B2B price level becomes a Shopify catalog.',
  },
  {
    data: 'Customers and companies',
    owner: 'split',
    flow: 'Both ways',
    note: 'New retail buyers start in Shopify and are matched or created in NetSuite. B2B company records, set up by your sales team, start in NetSuite.',
  },
  {
    data: 'Orders',
    owner: 'shopify',
    flow: 'Shopify to NetSuite',
    note: 'The sale happens in the store and arrives in NetSuite as a sales order.',
  },
  {
    data: 'Fulfillments and tracking',
    owner: 'netsuite',
    flow: 'NetSuite to Shopify',
    note: 'The warehouse ships from NetSuite. Each item shipment becomes a Shopify fulfillment with its tracking number.',
  },
  {
    data: 'Refunds',
    owner: 'shopify',
    flow: 'Shopify to NetSuite',
    note: 'Most refunds start in Shopify and post to NetSuite as a cash refund or a credit memo.',
  },
  {
    data: 'Invoices',
    owner: 'netsuite',
    flow: 'NetSuite to Shopify',
    note: 'B2B orders on terms are invoiced in NetSuite. The paid status goes back to the Shopify order.',
  },
  {
    data: 'Payment terms and credit limits',
    owner: 'netsuite',
    flow: 'NetSuite to Shopify',
    note: 'Terms are copied to each Shopify company location. The credit limit stays in NetSuite and is checked there.',
  },
];

/* ── The three routes. ── */
const ROUTES: ReadonlyArray<{
  n: string;
  title: string;
  fits: string;
  items: ReadonlyArray<string>;
  sources: ReadonlyArray<SrcKey>;
}> = [
  {
    n: '01',
    title: 'A pre-built app: Oracle\'s NetSuite ERP Connector',
    fits: 'Fits one store, standard orders and data that already matches.',
    items: [
      'Made by Oracle NetSuite and listed on the Shopify App Store since December 2, 2014',
      'Lists order, price and quantity, fulfillment, coupon and gift certificate sync, with real-time options for orders and stock',
      'Its B2B plan adds B2B order sync, B2B customer sync and invoice posting',
      'Four plans: B2C Standard, POS, B2C Premium and B2B. The listing says Oracle may bill separately from your Shopify invoice',
    ],
    sources: ['oracleApp'],
  },
  {
    n: '02',
    title: 'An iPaaS connector: Celigo',
    fits: 'Fits higher order volume, several stores or channels, and flows you want to change.',
    items: [
      'Celigo\'s Shopify and NetSuite template lists 16 flows',
      'Covers orders to sales orders, cancellations, item shipments to fulfillments, refunds both ways, customers, items, promotions and invoices',
      'Each flow can be changed or added to, which a fixed app does not allow',
      'Celigo publishes no prices. Its page says the price depends on edition and use',
    ],
    sources: ['celigoTemplate', 'celigoPricing'],
  },
  {
    n: '03',
    title: 'Custom middleware',
    fits: 'Fits B2B price levels per customer, several subsidiaries and custom records.',
    items: [
      'Code written for your rules, running in your own hosting account, which you own',
      'Reads and writes NetSuite custom records and fields that apps do not map',
      'Sends only what changed, which keeps large catalogs inside Shopify\'s API limits',
      'Costs more to build. Worth it only when the first two routes cannot follow your rules',
    ],
    sources: ['shopifyLimits'],
  },
];

/* ── Shopify B2B to NetSuite mapping. ── */
const B2B_MAP: ReadonlyArray<{ shopify: string; netsuite: string; note: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    shopify: 'Company and company locations',
    netsuite: 'Customer record (with sub-customers or addresses)',
    note: 'One NetSuite customer can buy for several ship-to sites. Each site becomes a Shopify company location with its own buyers.',
    sources: ['shopifyB2b'],
  },
  {
    shopify: 'Catalog (price list)',
    netsuite: 'Price level',
    note: 'A catalog can set fixed prices or a percentage change. NetSuite lets you set up to 1,000 price levels, and item prices for one customer override the customer\'s price level.',
    sources: ['shopifyCatalogs', 'nsPriceLevels'],
  },
  {
    shopify: 'Payment terms',
    netsuite: 'Terms on the customer record',
    note: 'Shopify supports net 7, 15, 30, 45, 60 and 90, plus due on fulfillment, set per company location.',
    sources: ['shopifyTerms', 'nsCustomerFinancial'],
  },
  {
    shopify: 'No native credit limit',
    netsuite: 'Credit limit on the customer record',
    note: 'Shopify\'s payment terms page does not mention credit limits. The integration checks NetSuite before an order is released.',
    sources: ['shopifyTerms', 'nsCustomerFinancial'],
  },
];

/* ── Where these integrations break. ── */
const BREAKS: ReadonlyArray<{ t: string; b: string }> = [
  {
    t: 'Duplicate customers',
    b: 'A weak match rule turns every guest order into a new NetSuite customer. Pick one rule, such as email plus company, and clean old records first.',
  },
  {
    t: 'Sales tax that does not match',
    b: 'Shopify works out tax at checkout. If NetSuite works it out again, the totals can differ by a few cents and the order fails or the books drift. One system has to be the tax engine.',
  },
  {
    t: 'Partial fulfillments',
    b: 'An order shipped in two boxes needs two fulfillments in Shopify. If the sync only sends the first, the buyer never gets the second tracking number.',
  },
  {
    t: 'Kits, bundles and assemblies',
    b: 'Shopify may sell a bundle as one SKU. NetSuite may track it as a kit or an assembly made of parts. Stock has to be counted on the parts, or the store oversells.',
  },
  {
    t: 'Refunds',
    b: 'Partial refunds, shipping refunds and refunds without a return each need a rule. Otherwise they post as the wrong record or not at all.',
  },
  {
    t: 'Sync timing',
    b: 'If stock is sent every hour, a busy morning can sell items that ran out at 9:05. Shopify also caps API calls, so large updates need pacing.',
  },
  {
    t: 'Two systems editing the same field',
    b: 'If staff change a price in Shopify and in NetSuite, the next sync overwrites one of them. Each field needs one owner.',
  },
  {
    t: 'The wrong subsidiary',
    b: 'With several NetSuite subsidiaries, each store or market must post to the right one, in the right currency.',
  },
];

/* ── Market cost ranges. Every row is a third party's figure, linked. ── */
const COSTS: ReadonlyArray<{ item: string; range: string; source: SrcKey }> = [
  {
    item: 'Oracle NetSuite ERP Connector, monthly plan',
    range: '$199.92 (B2C Standard) to $916.58 (B2B) a month, as listed in October 2026',
    source: 'aiondata',
  },
  { item: 'Native connector setup', range: '$5,000 to $15,000', source: 'brokenrubik' },
  { item: 'Celigo licence', range: '$7,800 a year (Starting Package) or $18,900 a year (Standard Edition)', source: 'aiondata' },
  { item: 'Celigo licensing plus support', range: '$20,000 to $60,000 a year', source: 'brokenrubik' },
  { item: 'Celigo implementation', range: '$8,000 to $25,000', source: 'brokenrubik' },
  { item: 'Celigo, first year all in', range: '$28,000 to $85,000', source: 'brokenrubik' },
  { item: 'Custom Shopify NetSuite build', range: '$25,000 to $150,000 or more', source: 'houseblend' },
  { item: 'Custom build hosting and maintenance', range: '$1,000 to $5,000 a month or more', source: 'houseblend' },
];

/* ── Process. ── */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'List every shared record',
    b: 'Products, stock, prices, price levels, customers, orders, shipments, refunds, invoices and terms. Beside each goes the system that holds it today and who edits it.',
  },
  {
    n: '02',
    t: 'Agree the owner of each field',
    b: 'One line per field, in writing. Your team signs this page before anything is built.',
  },
  {
    n: '03',
    t: 'Pick the lightest route that works',
    b: 'Oracle\'s app before Celigo, Celigo before custom code. We quote custom work only when the first two cannot follow your rules.',
  },
  {
    n: '04',
    t: 'Clean the data first',
    b: 'SKUs are matched, duplicate customers merged and price levels checked before the systems are joined. A sync copies mistakes as fast as good data.',
  },
  {
    n: '05',
    t: 'Test with real orders in a sandbox',
    b: 'A retail sale, a B2B order on terms, a split shipment, a kit, a partial refund and a tax-exempt order go through a development store and a NetSuite sandbox first.',
  },
  {
    n: '06',
    t: 'Go live, compare totals, stay on',
    b: 'In the first weeks we compare Shopify order totals with what landed in NetSuite. The same team stays on for support after launch.',
  },
];

const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: 'Custom middleware built by FactoryJet', isFactoryJet: true },
  { label: 'Celigo (iPaaS)' },
  { label: "Oracle's NetSuite ERP Connector" },
];

const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'Best fit',
    values: [
      'B2B price levels per customer, several subsidiaries, custom records',
      'Higher volume, several stores or channels, flows you want to change',
      'One store, standard orders, clean data',
    ],
  },
  {
    feature: 'Can follow your own rules',
    values: ['Yes, field by field', 'Yes, within its flows', 'Within the app\'s settings'],
  },
  {
    feature: 'Recurring fees',
    values: [
      'No connector licence. Hosting and support quoted in writing',
      'Annual licence. Celigo publishes no prices',
      'Monthly plan listed on the Shopify App Store',
    ],
  },
  {
    feature: 'Who looks after it',
    values: ['We do, under a support plan. You own the code', 'Celigo and your implementer', 'Oracle NetSuite'],
  },
];

const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  { href: '/services/shopify-plus-b2b', t: 'Shopify Plus B2B', b: 'Company accounts, catalogs and payment terms set up on the store side.' },
  { href: '/services/ecommerce-erp-integration', t: 'Ecommerce ERP integration', b: 'The same job for QuickBooks, Odoo, SAP Business One and ERPNext.' },
  { href: '/replatforming/netsuite-suitecommerce-to-shopify-plus', t: 'NetSuite SuiteCommerce to Shopify Plus', b: 'Move the store to Shopify Plus and keep NetSuite as the ERP.' },
  { href: '/services/netsuite-ai-agents', t: 'NetSuite AI agents', b: 'Agents that draft quotes, orders and bills inside NetSuite for a person to approve.' },
  { href: '/comparisons/netsuite-vs-quickbooks', t: 'NetSuite vs QuickBooks', b: 'When a growing store should move its books to NetSuite.' },
  { href: '/services/shopify-quickbooks-integration', t: 'Shopify QuickBooks integration', b: 'The same link for stores still on QuickBooks.' },
  { href: '/services/shopify-edi-integration', t: 'Shopify EDI integration', b: 'Purchase orders from retailers brought into Shopify as orders.' },
  { href: '/b2b-ecommerce', t: 'B2B ecommerce', b: 'Wholesale portals with account pricing and reordering.' },
];

function SourceLinks({ ids }: { ids: ReadonlyArray<SrcKey> }) {
  if (ids.length === 0) return null;
  return (
    <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-0">
      {ids.map((id) => (
        <a
          key={id}
          href={SRC[id].url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-1.5 py-2 font-fj-mono text-xs font-semibold tracking-wide text-[#B23E13] hover:underline"
        >
          <svg width="10" height="10" viewBox="0 0 9 9" fill="none" aria-hidden="true" className="flex-shrink-0">
            <path d="M1.5 7.5L7.5 1.5M7.5 1.5H3M7.5 1.5V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {SRC[id].short}
        </a>
      ))}
    </p>
  );
}

const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

export default function ShopifyNetSuiteIntegrationPage() {
  return (
    <>
      <JsonLd id="shopify-netsuite-schema" data={[webPageSchema, serviceSchema, breadcrumbSchema]} />
      <JsonLd id="shopify-netsuite-faq-schema" data={faqSchema} />

      <SiteHeader />

      <main className="min-h-screen bg-fj-cream text-fj-ink">
        <StickyCtaLabel label="See a demo on my data" title="Demo first" />
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO with the direct answer */}
        <section className="relative overflow-hidden border-b border-fj-neutral-200 bg-fj-cream pt-10 pb-14 md:pt-12 md:pb-16">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
              <div className="min-w-0 lg:col-span-7">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F05A28]/30 bg-white px-3 py-1.5">
                  <span className="font-fj-mono text-xs font-bold tracking-wide text-[#B23E13]">
                    SHOPIFY NETSUITE INTEGRATION &middot; UNITED STATES
                  </span>
                </div>

                <h1 className="font-fj-display text-3xl font-extrabold leading-[1.1] tracking-[-0.03em] text-fj-ink sm:text-5xl lg:text-[3.1rem]">
                  Shopify NetSuite integration for DTC and B2B stores.
                </h1>

                <div id="short-answer" className="mt-5 max-w-2xl">
                  <p className="font-fj-body text-lg leading-relaxed text-fj-ink">
                    A Shopify NetSuite integration should be done by a team that knows both systems and decides
                    which one owns each record before connecting anything. There are three ways to connect them: a
                    pre-built app such as Oracle&rsquo;s NetSuite ERP Connector, an iPaaS connector such as Celigo,
                    or custom middleware.
                  </p>
                  <p className="mt-4 font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                    The app fits one store with standard orders. Celigo fits higher order volume and several stores
                    or channels. Custom middleware fits B2B price levels per customer, several NetSuite subsidiaries
                    and custom records that the other two cannot map.
                  </p>
                </div>

                <div className="mt-6">
                  <HeroInlineForm
                    region="us"
                    source="services_shopify_netsuite_integration_hero"
                    service="Shopify NetSuite Integration"
                    submitLabel="See a demo on my data"
                    trustText="Working software on your own data before you sign. Founder replies within 24 hours."
                  />
                </div>

                <div className="mt-5">
                  <Link
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 font-fj-body text-sm font-semibold text-fj-ink hover:opacity-70"
                  >
                    Talk to the founder
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-4 w-4">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-fj-neutral-200 pt-5 font-fj-mono text-xs text-fj-neutral-600">
                  <span>Registered Shopify Partner</span>
                  <span>500+ businesses served</span>
                  <span>Founded 2014</span>
                  <span>Sources checked {CHECKED_ON}</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
                  <figcaption className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                    Which route fits
                  </figcaption>
                  <dl className="mt-4 grid gap-4">
                    {[
                      { k: 'Pre-built app', v: 'One store, standard orders, clean data.' },
                      { k: 'Celigo (iPaaS)', v: 'More orders, more stores or channels, flows you want to change.' },
                      { k: 'Custom middleware', v: 'Price levels per customer, several subsidiaries, custom records.' },
                    ].map((r, i) => (
                      <div key={r.k} className={i > 0 ? 'border-t border-fj-neutral-200 pt-4' : ''}>
                        <dt className="font-fj-display text-base font-bold text-fj-ink">{r.k}</dt>
                        <dd className="mt-1 font-fj-body text-[15px] leading-snug text-fj-neutral-600">{r.v}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 rounded-xl bg-fj-cream px-4 py-3 font-fj-body text-[13px] leading-snug text-fj-ink">
                    Start with the lightest route that follows your rules. We say so on the first call when an app is
                    enough.
                  </p>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* 2. DATA OWNERSHIP */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">The first decision</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  Which system owns each record?
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  The owner is the one copy everyone trusts. When the same number lives in both systems, one has to
                  win, or the next sync quietly overwrites the other.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  This is the map we start from with most Shopify and NetSuite stores. Yours is agreed in writing,
                  field by field, before anything is built.
                </p>
              </div>
              <div className="min-w-0 lg:col-span-8">
                <div className="overflow-x-auto rounded-2xl border border-fj-neutral-200" tabIndex={0} role="region" aria-label="Which system owns each record">
                  <table className="w-full min-w-[560px] border-collapse text-left">
                    <thead className="bg-fj-cream">
                      <tr>
                        <th scope="col" className="px-4 py-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">Record</th>
                        <th scope="col" className="px-4 py-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">Owner</th>
                        <th scope="col" className="px-4 py-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">How it moves</th>
                      </tr>
                    </thead>
                    <tbody>
                      {OWNERSHIP.map((o) => (
                        <tr key={o.data} className="border-t border-fj-neutral-200 align-top">
                          <th scope="row" className="w-[30%] px-4 py-4 font-fj-display text-[15px] font-bold text-fj-ink">
                            {o.data}
                          </th>
                          <td className="w-[22%] px-4 py-4">
                            <span
                              className={`font-fj-mono text-xs font-bold uppercase tracking-wider ${
                                o.owner === 'netsuite' ? 'text-[#B23E13]' : 'text-fj-ink'
                              }`}
                            >
                              {OWNER_LABEL[o.owner]}
                            </span>
                            <span className="mt-1 block font-fj-body text-[13px] text-fj-neutral-600">{o.flow}</span>
                          </td>
                          <td className="px-4 py-4 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{o.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <SourceLinks ids={['celigoTemplate', 'oracleApp']} />
              </div>
            </div>
          </div>
        </section>

        {/* 3. THE THREE ROUTES */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <p className="fj-eyebrow">The three routes</p>
            <h2 className="mt-4 max-w-3xl font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
              Oracle&rsquo;s app, Celigo or custom middleware.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Each route below restates what the maker&rsquo;s own page says, as read on {CHECKED_ON}. We did not test
              these products for this page. Read each one for a single thing: can it follow the rules in your
              ownership map?
            </p>
            <ol className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
              {ROUTES.map((r, i) => (
                <li
                  key={r.n}
                  className={`rounded-2xl border border-fj-neutral-200 bg-white p-6 ${
                    i === 0 ? 'lg:col-span-7' : i === 1 ? 'lg:col-span-5' : 'lg:col-span-12'
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fj-cream font-fj-mono text-sm font-bold text-[#B23E13]">
                    {r.n}
                  </div>
                  <h3 className="mt-4 font-fj-display text-xl font-bold text-fj-ink">{r.title}</h3>
                  <p className="mt-2 font-fj-body text-[15px] font-semibold leading-relaxed text-fj-ink">{r.fits}</p>
                  <ul className="mt-4 grid gap-2">
                    {r.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                        <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <SourceLinks ids={r.sources} />
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 4. SHOPIFY PLUS B2B + NETSUITE */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">Shopify Plus B2B</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  Shopify Plus B2B with NetSuite, for wholesale distributors.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Wholesale buyers expect their own prices, their own terms and no card at checkout. NetSuite already
                  holds all three. The job is to carry them into Shopify B2B and keep them current.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Shopify B2B runs on the Basic, Grow, Advanced and Plus plans. Below Plus you get 3 active catalog
                  assignments. Plus removes that limit, lets you assign catalogs straight to company locations and
                  adds deposits at checkout. For a distributor with many price levels, that usually means Plus.
                </p>
                <SourceLinks ids={['shopifyB2b', 'shopifyCatalogs', 'shopifyTerms']} />
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  The store side is covered on our{' '}
                  <Link href="/services/shopify-plus-b2b" className="font-semibold text-fj-ink underline underline-offset-4">
                    Shopify Plus B2B
                  </Link>{' '}
                  page.
                </p>
              </div>
              <div className="min-w-0 lg:col-span-7">
                <ul className="grid gap-4">
                  {B2B_MAP.map((m) => (
                    <li key={m.shopify} className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="font-fj-display text-base font-bold text-fj-ink">{m.shopify}</span>
                        <span aria-hidden="true" className="font-fj-mono text-xs text-fj-neutral-600">from</span>
                        <span className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">{m.netsuite}</span>
                      </div>
                      <p className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{m.note}</p>
                      <SourceLinks ids={m.sources} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. FAILURE POINTS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <p className="fj-eyebrow">The traps</p>
            <h2 className="mt-4 max-w-3xl font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
              Eight places a Shopify NetSuite integration breaks.
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Every one of these can be caught in testing. Each needs a rule written down and a test order run
              through a sandbox before go-live.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
              {BREAKS.map((b, i) => (
                <li
                  key={b.t}
                  className={`rounded-2xl border border-fj-neutral-200 bg-white p-5 ${
                    i % 4 === 0 || i % 4 === 3 ? 'lg:col-span-7' : 'lg:col-span-5'
                  }`}
                >
                  <h3 className="font-fj-display text-base font-bold text-fj-ink">{b.t}</h3>
                  <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{b.b}</p>
                </li>
              ))}
            </ul>
            <SourceLinks ids={['shopifyLimits']} />
          </div>
        </section>

        <MidPageCTA
          headline="Send your ownership map, or let us draw it with you."
          sub="Tell us your Shopify plan, your NetSuite setup and what has to sync. We reply with the lightest route that follows your rules, and a fixed quote if there is work for us."
          label="See a demo on my data"
        />

        {/* 6. COST */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Market cost ranges</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  What a Shopify NetSuite integration costs, by route.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  These are other firms&rsquo; published figures, each linked. BrokenRubik says it is a Celigo partner
                  and bases its ranges on its own projects. AIONDATA and Houseblend also sell this work. Celigo
                  publishes no prices of its own.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  FactoryJet does not publish a price list. We quote each phase at a fixed price in writing after a
                  short scoping call.
                </p>
              </div>
              <div className="min-w-0 lg:col-span-8">
                <div className="overflow-x-auto rounded-2xl border border-fj-neutral-200" tabIndex={0} role="region" aria-label="Market cost ranges for Shopify NetSuite integration">
                  <table className="w-full min-w-[520px] border-collapse text-left">
                    <thead className="bg-fj-cream">
                      <tr>
                        <th scope="col" className="px-4 py-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">Item</th>
                        <th scope="col" className="px-4 py-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">Published range</th>
                        <th scope="col" className="px-4 py-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      {COSTS.map((c) => (
                        <tr key={c.item} className="border-t border-fj-neutral-200 align-top">
                          <th scope="row" className="px-4 py-4 font-fj-display text-[15px] font-bold text-fj-ink">{c.item}</th>
                          <td className="px-4 py-4 font-fj-body text-[15px] leading-relaxed text-fj-ink">{c.range}</td>
                          <td className="px-4 py-4">
                            <a
                              href={SRC[c.source].url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-fj-body text-[13px] font-semibold text-[#B23E13] underline underline-offset-2"
                            >
                              {SRC[c.source].short}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                  Oracle&rsquo;s plan prices were shown in US dollars on the Shopify App Store in October 2026. On{' '}
                  {CHECKED_ON} the listing showed the same four plans. Houseblend attributes its custom build range to
                  Uncap.
                </p>
                <SourceLinks ids={['oracleApp', 'celigoPricing']} />
              </div>
            </div>
          </div>
        </section>

        {/* 7. PROCESS */}
        <section className="bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Process</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  How we plan, build and test the connection.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Your NetSuite administrator or accountant decides how orders, tax and refunds should post. We make
                  both systems follow those rules. FactoryJet has worked on NetSuite, Odoo, SAP Business One, ERPNext
                  and custom ERPs, on jobs such as RFQ automation, daily bookkeeping and order generation.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  After launch,{' '}
                  <Link href="/services/shopify-maintenance-services" className="font-semibold text-fj-ink underline underline-offset-4">
                    Shopify maintenance and support
                  </Link>{' '}
                  keeps the store and its connections current.
                </p>
              </div>
              <ol className="grid gap-4 lg:col-span-8">
                {PROCESS.map((p) => (
                  <li key={p.n} className="flex items-start gap-4 rounded-2xl border border-fj-neutral-200 bg-white p-6">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-fj-cream font-fj-mono text-sm font-bold text-[#B23E13]">
                      {p.n}
                    </div>
                    <div>
                      <h3 className="font-fj-display text-lg font-bold text-fj-ink">{p.t}</h3>
                      <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{p.b}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 8. HOUSE TERMS */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">How we work with you</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  The code, the accounts and the data stay yours.
                </h2>
              </div>
              <ul className="grid gap-3 lg:col-span-7">
                {[
                  { t: 'Code and repository', d: 'Yours from day one.' },
                  { t: 'Accounts in your name', d: 'Your Shopify, NetSuite and hosting accounts. Hosting can run there at cost, with no markup from us.' },
                  { t: 'Fixed price per phase', d: 'Each phase is scoped, priced and signed on its own. You see working software on your own data before you sign.' },
                  { t: 'Defect cover in the build price', d: 'Defects found after launch are fixed for a cover period agreed before work starts.' },
                  { t: 'No monthly minimum', d: 'Support after launch is optional. Each change is quoted and approved before we do it.' },
                ].map((x) => (
                  <li key={x.t} className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5">
                    <p className="font-fj-display text-lg font-bold text-fj-ink">{x.t}</p>
                    <p className="mt-1 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{x.d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 9. COMPARISON */}
        <ComparisonTable
          eyebrow="How the routes compare"
          headline="Oracle's app, Celigo, or custom middleware."
          lead="Oracle's own app is often the right answer, and we will say so on the scoping call. Custom middleware earns its cost when your rules do not fit an app or a Celigo flow."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer={`Product facts are from each maker's own pages as read on ${CHECKED_ON}.`}
          scrollRegionLabel="Comparison of ways to connect Shopify and NetSuite"
        />

        {/* 10. RELATED */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <p className="fj-eyebrow">Next to this page</p>
            <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">Related NetSuite and Shopify services.</h2>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
              {RELATED.map((r, i) => (
                <li key={r.href} className={i % 4 === 0 || i % 4 === 3 ? 'lg:col-span-7' : 'lg:col-span-5'}>
                  <Link
                    href={r.href}
                    className="block h-full rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 transition-colors hover:border-[#F05A28]"
                  >
                    <span className="font-fj-display text-lg font-bold text-fj-ink">{r.t}</span>
                    <span className="mt-1.5 block font-fj-body text-sm leading-relaxed text-fj-neutral-600">{r.b}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 11. SOURCES */}
        <section className="bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Method</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  Sources, checked on {CHECKED_ON}.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Every product fact, price and range on this page was read from the pages listed here. Prices move, so
                  check the linked page before you act on one.
                </p>
                <p className="mt-6 font-fj-mono text-xs leading-relaxed text-fj-neutral-600">
                  Published {PAGE_PUBLISHED} &middot; Reviewed {PAGE_MODIFIED} &middot;{' '}
                  <Link href="/author/bhavesh-barot" className="underline underline-offset-4">
                    Bhavesh Barot
                  </Link>
                  , Founder
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2 lg:col-span-8">
                {SOURCE_KEYS.map((k) => (
                  <li key={k}>
                    <a
                      href={SRC[k].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center font-fj-body text-sm leading-snug text-fj-ink underline decoration-fj-neutral-200 underline-offset-4 hover:decoration-[#F05A28]"
                    >
                      {SRC[k].label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 12. FAQ */}
        <FAQ
          eyebrow="Shopify NetSuite integration FAQ"
          headline="Shopify and NetSuite questions, answered plainly."
          lead={`What owners, NetSuite admins and finance teams ask before connecting the two. Product answers are from the makers' own pages as read on ${CHECKED_ON}.`}
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 13. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="Shopify NetSuite integration"
          headline="One owner for every record. Orders that post the first time."
          sub="Tell us your Shopify plan, your NetSuite setup and what has to sync. We agree the owner for each field, test with your own orders in a sandbox and fix defects after launch inside the build price."
          primaryCta={{ label: 'See a demo on my data', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="Registered Shopify Partner. Fixed quote in writing before work starts. You own the code."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
