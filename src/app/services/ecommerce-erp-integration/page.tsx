import type { Metadata } from 'next';
import styles from './visual-qa.module.css';
import Link from 'next/link';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';
import FinalCTA from '@/components/v2/FinalCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import ComparisonTable, { type ComparisonColumn, type ComparisonRow } from '@/components/v2/ComparisonTable';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { ORG_ID, ORG_REF, FOUNDER_ID } from '@/data/organization';

import OwnerMapDiagram from './OwnerMapDiagram';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/ecommerce-erp-integration, built 2026-10-11.

   Why this page exists: it is the hub for store to ERP links. Narrow pages
   already cover one pair each (Shopify and QuickBooks, WordPress and Shopify)
   and the agent side (ERP, NetSuite and Odoo AI agents). Nothing sat above
   them. US monthly searches measured 2026-10-11 (DataForSEO, location 2840):
   "erp integration" 720, "ecommerce erp" 260, "ecommerce erp integration" 210,
   "magento erp integration" 140, "shopify erp" 110, "erp integration services"
   110, "shopify erp integration" 70.

   Truth rules for anyone editing this file:
   * Every connector fact, price, plan limit and API limit was read on the
     maker's own page on 2026-10-11 and links to that page through the SRC map.
     Prices and plans move. If you change one, re-fetch the page first.
   * No FactoryJet price. The only dollar figures are list prices of named
     off-the-shelf products, each from the maker's own page.
   * No running or support cost figure of any kind.
   * Clients: on 2026-10-09 Bhavesh approved naming Sow Easy (Odoo to
     WooCommerce), GPSUK, Yadav Entrance Automation and Impulse Branding
     Solutions on this page, in ONE labelled block (the "Recent work" block).
     Each line restates that client's own case study in src/data/case-studies.
     Add no metric or scope that the case study does not state. Do not say
     where Sow Easy is based.
   * Nothing here says FactoryJet is a partner of any ERP maker or platform.
   * The owner map is the starting map FactoryJet proposes on a scoping call.
     Do not harden it into a statistic about what "most" stores do.
   * Mirrors /services/shopify-quickbooks-integration for components and schema.
     It shares no sentence with that page.

   Schema: WebPage + Service + FAQPage + BreadcrumbList. Organization is
   rendered once sitewide by src/app/layout.tsx and referenced here by @id.
   The FAQPage mainEntity is generated from the exact FAQ_ITEMS array the
   visible <FAQ> component renders. There is no second, hand-written array.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/ecommerce-erp-integration';
const PAGE_TITLE = 'Ecommerce ERP Integration Services | FactoryJet';
const PAGE_DESC =
  'Ecommerce ERP integration for Shopify, BigCommerce, WooCommerce and Adobe Commerce stores on QuickBooks, NetSuite, Odoo, SAP Business One or ERPNext.';
const PAGE_PUBLISHED = '2026-10-11';
const PAGE_MODIFIED = '2026-10-29';
const CHECKED_ON = '11 Oct 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/ecommerce-erp-integration';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'erp integration',
    'ecommerce erp integration',
    'ecommerce erp',
    'erp ecommerce integration',
    'erp integration services',
    'ecommerce integration services',
    'shopify erp integration',
    'shopify erp',
    'magento erp integration',
    'woocommerce erp',
    'bigcommerce erp integration',
    'b2b ecommerce erp integration',
  ],
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      'en-US': CANONICAL_URL,
      'x-default': CANONICAL_URL,
    },
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
        alt: 'FactoryJet, ecommerce and ERP integration services for US businesses',
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

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD, so they cannot drift. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Ecommerce ERP Integration', url: CANONICAL_URL },
];

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
  name: 'Ecommerce ERP Integration',
  serviceType:
    'Ecommerce and ERP integration: Shopify, Shopify Plus, BigCommerce, WooCommerce and Adobe Commerce stores joined to QuickBooks, NetSuite, Odoo, SAP Business One, ERPNext, Xero and custom ERPs, plus EDI',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'FactoryJet designs, builds, implements and supports the link between an online store and an ERP. Products, prices and stock move out to the store. Orders, customers, shipments, refunds and tax move back. Work covers the written owner map for each record, choosing and setting up a ready-made connector when one fits, and building a custom link when it does not.',
  url: CANONICAL_URL,
};

/* ── Sources. One map, used by every inline source link (the `short` label) AND
   by the visible "Sources" list near the foot of the page (the full `label`).
   Each URL was opened on 2026-10-11 and the supporting sentence read before the
   claim was written. Oracle's NetSuite Connector page, the A2X and MyWorks
   pricing pages and the Shopify App Store search were read in a real browser,
   because they refuse plain fetches or draw their prices with scripts. ── */
const SRC = {
  shopifyErpGuide: {
    short: 'Shopify: ERP integration guide',
    label: 'Shopify Enterprise blog: ERP integration (updated Aug 28, 2026)',
    url: 'https://www.shopify.com/enterprise/blog/erp-integration',
  },
  shopifyGqlLimits: {
    short: 'shopify.dev: GraphQL Admin API rate limits',
    label: 'shopify.dev: GraphQL Admin API rate limits, by plan',
    url: 'https://shopify.dev/docs/apps/build/apis/graphql-admin/rate-limits',
  },
  shopifyLimits: {
    short: 'shopify.dev: API limits',
    label: 'shopify.dev: Shopify API limits (rate, input and pagination limits)',
    url: 'https://shopify.dev/docs/api/usage/limits',
  },
  shopifyWebhooks: {
    short: 'shopify.dev: about webhooks',
    label: 'shopify.dev: About webhooks',
    url: 'https://shopify.dev/docs/apps/build/webhooks',
  },
  shopifyQbo: {
    short: 'Shopify App Store: QuickBooks Online',
    label: 'Shopify App Store: QuickBooks Online, by Intuit',
    url: 'https://apps.shopify.com/qbconnector',
  },
  shopifyQbd: {
    short: 'Shopify App Store: QuickBooks Desktop Connector',
    label: 'Shopify App Store: QuickBooks Desktop Connector, by LINK',
    url: 'https://apps.shopify.com/quickbooks-desktop-connector',
  },
  shopifyNetsuite: {
    short: 'Shopify App Store: NetSuite ERP Connector',
    label: 'Shopify App Store: NetSuite ERP Connector, by Oracle NetSuite',
    url: 'https://apps.shopify.com/oracle-netsuite',
  },
  shopifySearch: {
    short: 'Shopify App Store: search for netsuite',
    label: 'Shopify App Store: search results for netsuite (87 apps on 11 Oct 2026)',
    url: 'https://apps.shopify.com/search?q=netsuite',
  },
  shopifyXero: {
    short: 'Shopify App Store: Xero',
    label: 'Shopify App Store: Xero, by Xero (listing unavailable on 11 Oct 2026)',
    url: 'https://apps.shopify.com/xero',
  },
  shopifyBusinessCentral: {
    short: 'Shopify App Store: Dynamics 365 Business Central',
    label: 'Shopify App Store: Dynamics 365 Business Central, by Microsoft',
    url: 'https://apps.shopify.com/dynamics-365-business-central',
  },
  shopifyAcumatica: {
    short: 'Shopify App Store: Acumatica Cloud ERP',
    label: 'Shopify App Store: Acumatica Cloud ERP, by Acumatica',
    url: 'https://apps.shopify.com/acumatica-cloud-erp',
  },
  netsuiteConnector: {
    short: 'Oracle: NetSuite Connector',
    label: 'Oracle NetSuite: NetSuite Connector product page',
    url: 'https://www.netsuite.com/portal/products/connectors.shtml',
  },
  netsuiteRest: {
    short: 'Oracle Help: SuiteTalk REST web services',
    label: 'Oracle NetSuite Help Center: Overview of SuiteTalk REST Web Services',
    url: 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_1540391670.html',
  },
  bcNetsuite: {
    short: 'BigCommerce apps: NetSuite Connector',
    label: 'BigCommerce app marketplace: NetSuite Connector by Oracle NetSuite',
    url: 'https://www.bigcommerce.com/apps/netsuite-connector-by-oracle-netsuite/',
  },
  bcQbo: {
    short: 'BigCommerce apps: QuickBooks Online',
    label: 'BigCommerce app marketplace: QuickBooks Online',
    url: 'https://www.bigcommerce.com/apps/quickbooks-online/',
  },
  bcLimits: {
    short: 'BigCommerce docs: API rate limits',
    label: 'BigCommerce developer docs: API rate limits by plan type',
    url: 'https://docs.bigcommerce.com/developer/docs/overview/api-fundamentals/rate-limits',
  },
  bcWebhooks: {
    short: 'BigCommerce docs: webhooks',
    label: 'BigCommerce developer docs: Webhooks overview',
    url: 'https://docs.bigcommerce.com/developer/docs/integrations/webhooks/overview',
  },
  celigoTemplate: {
    short: 'Celigo: Shopify and NetSuite template',
    label: 'Celigo: Shopify and NetSuite integration template',
    url: 'https://www.celigo.com/integrations/shopify-netsuite/',
  },
  celigoPricing: {
    short: 'Celigo: pricing',
    label: 'Celigo: platform pricing',
    url: 'https://www.celigo.com/platform/pricing/',
  },
  odooShopify: {
    short: 'Odoo 19 docs: Shopify Connector',
    label: 'Odoo 19.0 documentation: Shopify Connector',
    url: 'https://www.odoo.com/documentation/19.0/applications/sales/sales/shopify_connector.html',
  },
  odooApps: {
    short: 'Odoo Apps Store: search for shopify',
    label: 'Odoo Apps Store: search results for shopify (235 apps on 11 Oct 2026)',
    url: 'https://apps.odoo.com/apps/modules/browse?search=shopify',
  },
  odooApi: {
    short: 'Odoo 20 docs: external API',
    label: 'Odoo 20.0 documentation: External JSON-2 API',
    url: 'https://www.odoo.com/documentation/20.0/developer/reference/external_api.html',
  },
  sapServiceLayer: {
    short: 'SAP Help: Service Layer reference',
    label: 'SAP Help Portal: SAP Business One Service Layer API Reference',
    url: 'https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html',
  },
  appseconnect: {
    short: 'APPSeCONNECT: pricing',
    label: 'APPSeCONNECT: pricing and plans',
    url: 'https://www.appseconnect.com/pricing',
  },
  frappeMarket: {
    short: 'Frappe Cloud Marketplace: Ecommerce Integrations',
    label: 'Frappe Cloud Marketplace: Ecommerce Integrations for ERPNext',
    url: 'https://cloud.frappe.io/marketplace/apps/ecommerce_integrations',
  },
  frappeGithub: {
    short: 'GitHub: frappe/ecommerce_integrations',
    label: 'GitHub: frappe/ecommerce_integrations, Ecommerce integrations for ERPNext',
    url: 'https://github.com/frappe/ecommerce_integrations',
  },
  frappeErpnext: {
    short: 'GitHub: frappe/erpnext',
    label: 'GitHub: frappe/erpnext, Free and Open Source Enterprise Resource Planning (ERP)',
    url: 'https://github.com/frappe/erpnext',
  },
  frappeRest: {
    short: 'Frappe docs: REST API',
    label: 'Frappe Framework documentation: REST API',
    url: 'https://docs.frappe.io/framework/user/en/api/rest',
  },
  a2xPricing: {
    short: 'A2X: pricing',
    label: 'A2X: pricing by sales channel',
    url: 'https://www.a2xaccounting.com/pricing',
  },
  webgility: {
    short: 'Webgility: pricing',
    label: 'Webgility: pricing',
    url: 'https://www.webgility.com/pricing',
  },
  myworksPricing: {
    short: 'MyWorks: plans and pricing',
    label: 'MyWorks: plans and pricing',
    url: 'https://myworks.software/pricing/',
  },
  wooMyworks: {
    short: 'WooCommerce Marketplace: QuickBooks Sync',
    label: 'WooCommerce Marketplace: QuickBooks Sync for WooCommerce, by MyWorks Software',
    url: 'https://woocommerce.com/products/quickbooks-sync-for-woocommerce/',
  },
  wooRest: {
    short: 'WooCommerce docs: REST API',
    label: 'WooCommerce documentation: WooCommerce REST API',
    url: 'https://woocommerce.com/document/woocommerce-rest-api/',
  },
  wooWebhooks: {
    short: 'WooCommerce docs: webhooks',
    label: 'WooCommerce documentation: Webhooks',
    url: 'https://woocommerce.com/document/webhooks/',
  },
  adobeWebApi: {
    short: 'Adobe: Commerce web APIs',
    label: 'Adobe Developer: Getting started with Adobe Commerce web APIs',
    url: 'https://developer.adobe.com/commerce/webapi/get-started/',
  },
  adobeBulk: {
    short: 'Adobe: bulk endpoints',
    label: 'Adobe Developer: Adobe Commerce bulk endpoints',
    url: 'https://developer.adobe.com/commerce/webapi/rest/use-rest/bulk-endpoints/',
  },
  adobeStarterKit: {
    short: 'GitHub: Adobe Commerce integration starter kit',
    label: 'GitHub: adobe/commerce-integration-starter-kit',
    url: 'https://github.com/adobe/commerce-integration-starter-kit',
  },
  x12: {
    short: 'X12: transaction sets',
    label: 'X12: list of EDI transaction sets',
    url: 'https://x12.org/products/transaction-sets',
  },
} as const;

type SrcKey = keyof typeof SRC;

/* ── FAQ. Single array, rendered visibly below AND used to build the FAQPage
   JSON-LD. Never hand-duplicate this list near the ld+json block.
   The first question is a buyer's own wording from our 9 Oct 2026 question
   sweep. Others come from Google's question boxes and related searches for
   "erp integration", "ecommerce erp integration", "shopify erp integration",
   "magento erp integration" and "woocommerce erp" (DataForSEO, US, location
   2840, 2026-10-11), and from the searches this page covers. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'What it is' },
  { key: 'systems', label: 'Stores and ERPs' },
  { key: 'choose', label: 'Connector or custom' },
  { key: 'working', label: 'Working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── What it is ───────────────────────────────────────────────────
  {
    category: 'basics',
    question: 'Where can I find a list of vendors offering enterprise resource planning (ERP) AI integration services?',
    answer:
      "Look in three places, depending on what you need built. For ready-made connectors, search your store platform's app marketplace: the Shopify App Store returned 87 apps for netsuite on 11 Oct 2026. For the ERP maker's own connector, read its product page, such as Oracle's NetSuite Connector page. For a firm that builds custom links and AI agents on ERPs, FactoryJet works on QuickBooks, NetSuite, Odoo, SAP Business One, ERPNext and custom ERPs. This page also lists connector makers by ERP, with list prices.",
  },
  {
    category: 'basics',
    question: 'What is ERP integration?',
    answer:
      "ERP integration connects an ERP (enterprise resource planning system) to other business software so data moves between them without retyping. Shopify's guide names ecommerce platforms, CRMs, warehouse systems and EDI networks as the common connections. For an online store it means products, prices and stock going out to the store, and orders, customers and refunds coming back.",
  },
  {
    category: 'basics',
    question: 'What does an ecommerce ERP integration sync?',
    answer:
      'Eight records in most stores: products, prices, stock, orders, customers, shipments, refunds and tax. Each one needs a single owner. On the map FactoryJet starts from, the ERP owns products, prices, stock and shipments. The store owns orders, refunds and the tax worked out at checkout. Customers are shared: shoppers begin in the store and trade accounts begin in the ERP.',
  },
  {
    category: 'basics',
    question: 'Can you give me an example of ERP integration?',
    answer:
      "A customer buys three units on your store. The order reaches the ERP as a sales order, the ERP lowers stock by three, and the new count goes back to the store. When the warehouse ships, the shipment returns to the order. Odoo documents this pattern for its own Shopify Connector: orders are pulled every 10 minutes by default, and stock is pushed to Shopify after each pull.",
  },
  {
    category: 'basics',
    question: 'Is Magento an ERP system?',
    answer:
      "No. Magento is an ecommerce platform, and Adobe documents it today as Adobe Commerce and Magento Open Source. It runs the catalog, the cart and the checkout. Adobe's own web API guide lists integrating with ERP back-end systems as one of the jobs its APIs are used for, which tells you the ERP is a separate system that sits behind the store.",
  },
  {
    category: 'basics',
    question: 'Which ERP system is best for e-commerce?',
    answer:
      "The one that already runs your stock and accounts well. A link can be built to any of them. If you are choosing fresh, check three things on the maker's own pages: whether it publishes a connector for your store platform, which way that connector moves products and stock, and whether your plan includes API access. Intuit, Oracle, Odoo, Frappe, Microsoft and Acumatica each publish their own Shopify connector.",
  },
  {
    category: 'basics',
    question: 'Is EDI the same as ERP integration?',
    answer:
      'No. EDI (electronic data interchange) is a fixed document format that companies use to trade with each other. X12, the standards body, numbers the documents: 850 is a purchase order, 855 a purchase order acknowledgment, 856 a ship notice and 810 an invoice. ERP integration joins your own systems together. Many wholesale sellers need both, and FactoryJet builds both.',
  },
  // ── Stores and ERPs ──────────────────────────────────────────────
  {
    category: 'systems',
    question: 'Does Shopify integrate with NetSuite?',
    answer:
      'Yes. Oracle NetSuite publishes the NetSuite ERP Connector on the Shopify App Store. The listing says it syncs product, pricing, inventory, sales order and fulfillment data between NetSuite and Shopify or Shopify Plus stores. It listed four plans on 11 Oct 2026: B2C Standard at $199.92 a month, POS and B2C Premium at $249.92 a month each, and B2B at $916.58 a month.',
  },
  {
    category: 'systems',
    question: 'Does Odoo have a Shopify connector?',
    answer:
      "Yes. The Odoo 19 documentation describes a Shopify Connector that syncs orders, products, inventory, deliveries, returns and refunds. Read its direction table first: orders, products and customers move from Shopify to Odoo, and inventory moves both ways. It does not sync in real time. Odoo says it runs on scheduled actions, with orders pulled every 10 minutes by default.",
  },
  {
    category: 'systems',
    question: 'Can Magento be integrated with SAP?',
    answer:
      "For SAP Business One, yes. Adobe Commerce exposes GraphQL, REST and SOAP APIs, and SAP Business One exposes its Service Layer, which follows the OData protocol. A link reads from one and writes to the other. Integration platforms cover the pair as well: APPSeCONNECT's pricing page names both SAP Business One and Magento among its Premium Apps. FactoryJet builds this link as a custom project.",
  },
  {
    category: 'systems',
    question: 'Does BigCommerce integrate with ERP systems?',
    answer:
      "Yes. BigCommerce's app marketplace lists NetSuite Connector by Oracle NetSuite with an upfront fee of $2,000 and a recurring fee of $83.23 a month, on a listing last updated July 17, 2023. Its QuickBooks Online listing shows $0 upfront and $0 a month. For a custom link, plan around the API quota: 150 requests every 30 seconds on Standard and Plus plans, shared by every app on the store.",
  },
  {
    category: 'systems',
    question: 'Can WooCommerce connect to an ERP?',
    answer:
      "Yes. WooCommerce has a REST API with keys you create in its settings, and webhooks that fire when orders, products or customers change. Oracle lists a NetSuite connector for WooCommerce, and the WooCommerce Marketplace lists QuickBooks Sync by MyWorks as free to download. One thing to check on older sites: the legacy REST API has been removed from WooCommerce core.",
  },
  {
    category: 'systems',
    question: 'Does ERPNext integrate with Shopify?',
    answer:
      'Yes. Frappe, the company behind ERPNext, publishes an app called Ecommerce Integrations. The Frappe Cloud Marketplace files it under Free, the code is on GitHub under the GNU GPL v3.0 license, and it supports ERPNext versions 13 to 16. For Shopify it syncs sales orders and customer details into ERPNext, with optional invoice, delivery note and periodic inventory sync.',
  },
  {
    category: 'systems',
    question: 'Does Xero connect to Shopify?',
    answer:
      "Through a third-party app or a custom link. On 11 Oct 2026 the Xero listing at apps.shopify.com/xero, whose developer is Xero, read: this app is not currently available on the Shopify App Store. A2X lists Shopify payout data to QuickBooks Online, Xero or NetSuite starting at US$29 a month. When Xero has to hold the item list and the store has to follow, FactoryJet builds the link.",
  },
  {
    category: 'systems',
    question: 'What is the Shopify Global ERP Program?',
    answer:
      "It is Shopify's program for connecting an ERP to a store through apps in the Shopify App Store. Shopify's guide, updated Aug 28, 2026, names its partners as Microsoft Dynamics 365 Business Central, Oracle NetSuite, Infor, Acumatica and Brightpearl by Sage. Shopify says apps in the program pass a 100-checkpoint review covering security and performance before listing.",
  },
  {
    category: 'systems',
    question: 'How is Shopify Plus different for ERP integration?',
    answer:
      "Mainly in how much data a link can move. Shopify gives each app a GraphQL Admin API budget by plan: 100 points a second on a standard plan, 200 on Advanced Shopify and 1,000 on Shopify Plus. That is ten times the standard budget (1,000 divided by 100), which matters for a large catalog. Connector makers also tie B2B features to Plus: LINK's QuickBooks Desktop Connector listing describes its B2B sync as for Shopify Plus.",
  },
  {
    category: 'systems',
    question: 'Can you connect a custom or in-house ERP to an online store?',
    answer:
      'Yes. A custom ERP has no app store, so the link is built against whatever the system exposes. If it has an API, we read and write through it. If it has a database and no API, we agree a safe way in with your IT team, such as a read-only view or a staging table. If it only exports files, we build the link on scheduled files.',
  },
  // ── Connector or custom ──────────────────────────────────────────
  {
    category: 'choose',
    question: 'When is a ready-made connector enough?',
    answer:
      'When it passes six checks. It moves each record in the direction your owner map says. Its sync schedule is fresh enough for your stock. Your order volume fits the plan. It has a setting for each of your pricing and warehouse rules. It exists for your exact store and ERP pair. And your ERP plan allows the access it needs. If all six pass, buy the connector.',
  },
  {
    category: 'choose',
    question: 'When is a custom ERP integration the better choice?',
    answer:
      "When one of those checks fails. The common cases: the ERP has to own products and prices and the connector moves them the other way, a ten-minute or hourly sync is too slow for fast-moving stock, your rules include customer price lists or several warehouses, or the ERP is custom. You can keep a connector for the records it handles and have a custom link built for the one it does not.",
  },
  {
    category: 'choose',
    question: 'What is an iPaaS, and do I need one?',
    answer:
      "An iPaaS (integration platform as a service) is a subscription tool that joins many systems through flows you configure. Shopify's guide lists it as one of five integration methods. Celigo prices by endpoints and flows. APPSeCONNECT lists plans starting at $99 a month. It suits a business that has several systems to join and a team that wants to manage the flows itself.",
  },
  {
    category: 'choose',
    question: 'How much does ERP integration cost?',
    answer:
      "It depends on the route. Shopify's guide says native integrations often cost nothing beyond your existing subscription, while custom builds can run into six figures. Adobe's starter kit readme says companies can spend tens of thousands of dollars building these integrations. Connector list prices on 11 Oct 2026 ran from free to install (Intuit's QuickBooks Online app) to $916.58 a month (Oracle's B2B plan on Shopify). FactoryJet quotes a fixed price in writing after a short scoping call.",
  },
  {
    category: 'choose',
    question: 'How long does an ERP integration take?',
    answer:
      'It depends on the route and on how clean the shared data is. Installing a ready-made connector is the short route. A custom link is a project with design, build, testing and a watched go-live. The number of records, the number of rules and the state of your SKU list set the length. FactoryJet puts the timeline in writing with the quote, once the owner map is agreed.',
  },
  {
    category: 'choose',
    question: 'Should the ERP or the store be the master for inventory?',
    answer:
      "The ERP, whenever it tracks stock. It sees every receipt, every sale on every channel and every adjustment, so it is the one system that can know the true count. The store holds a copy. Oracle's NetSuite Connector page describes the same split: manage product details, pricing and inventory levels within NetSuite, and receive orders and customer information from the ecommerce application.",
  },
  {
    category: 'choose',
    question: 'Does an ERP integration handle B2B price lists and trade accounts?',
    answer:
      "Yes, and it is where the owner map matters most. Customer price lists, payment terms and credit limits live in the ERP. The store reads them, so a trade buyer sees their own price after logging in. Connector makers treat this as a separate tier: Oracle's Shopify listing puts B2B order sync, invoice posting and standalone B2B customer sync in its B2B plan at $916.58 a month.",
  },
  // ── Working with us ──────────────────────────────────────────────
  {
    category: 'working',
    question: 'Which stores and ERPs does FactoryJet work with?',
    answer:
      'Stores on Shopify, Shopify Plus, BigCommerce, WooCommerce and Adobe Commerce. ERPs and accounting systems including QuickBooks, NetSuite, Odoo, SAP Business One, ERPNext, Xero and custom ERPs. We also build EDI links and punchout catalogs for sellers whose buyers require them. Founded in 2014, FactoryJet has served more than 500 businesses.',
  },
  {
    category: 'working',
    question: 'How do AI agents fit with ERP integration?',
    answer:
      'An integration moves records. An agent does a job with them, such as drafting a quote, keying a purchase order or matching a vendor bill. The link comes first, because an agent can only act on data it can reach. FactoryJet builds both. Our ERP AI agents page covers agents on Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs.',
  },
  {
    category: 'working',
    question: 'Can we see the integration working before we sign?',
    answer:
      'Yes. We show working software on your own data before a contract. For an ERP link, expect a handful of your real products and one test order passing between a development store and a test copy of your ERP. Your team checks each record it creates before anything is signed.',
  },
  {
    category: 'working',
    question: 'Can we send a field list or an RFP instead of booking a call?',
    answer:
      'Yes. Send your field list, an export of the records you sync today, or your written brief through the contact form. We map every field to its owner and its direction, then quote each phase at a fixed price in writing. If a ready-made connector already covers your list, the reply says so and names it.',
  },
  {
    category: 'working',
    question: 'We have outgrown QuickBooks. Can you move us to NetSuite without breaking the store sync?',
    answer:
      'Yes. The store keeps posting to QuickBooks while NetSuite is set up, so sales keep reaching the books. We rewrite the owner map for NetSuite, build the new link against a NetSuite sandbox and a development store, and replay your real orders through it. On the cutover date the QuickBooks link is switched off and order totals are checked in NetSuite. Our comparison at factoryjet.com/comparisons/netsuite-vs-quickbooks sets out when the move is worth making.',
  },
  {
    category: 'working',
    question: 'Who looks after the integration after launch?',
    answer:
      'FactoryJet does. We quote the build, and any support you choose, as fixed prices in writing after a short scoping call. After launch we can keep managing the servers, the APIs and the maintenance, so your team does not have to. We stay on after launch, and you own the code.',
  },
  {
    category: 'working',
    question: 'Who owns the code and the data?',
    answer:
      'You do. The code is yours. Your data stays in your own store and ERP accounts, and the link holds only what it needs to move a record from one to the other. Every action the link takes is written to a log your team can read, so a missing order can be traced to the step where it stopped.',
  },
  {
    category: 'working',
    question: 'Will you work with our ERP consultant or accountant?',
    answer:
      'Yes. They know your chart of accounts and how your ERP is set up, and that knowledge shapes the owner map. We agree with them how orders, tax and refunds should post, then build the link to match. Bring them to the scoping call.',
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

/* ── The owner map. Eight records, each with the owner FactoryJet proposes as a
   starting point. Notes restate the makers' own pages where one is linked. ── */
type Owner = 'erp' | 'store' | 'shared';

const OWNER_LABEL: Record<Owner, string> = {
  erp: 'ERP owns',
  store: 'Store owns',
  shared: 'Shared',
};

const OWNERS: ReadonlyArray<{ record: string; owner: Owner; note: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    record: 'Products and SKUs',
    owner: 'erp',
    note: "A SKU is the short code for one product. New items are created once, in the ERP, and published to the store. Oracle describes that split for its NetSuite Connector. Odoo's Shopify Connector runs the other way.",
    sources: ['netsuiteConnector', 'odooShopify'],
  },
  {
    record: 'Prices',
    owner: 'erp',
    note: "One price list, plus price levels for trade accounts. Oracle's page says pricing is managed within NetSuite.",
    sources: ['netsuiteConnector'],
  },
  {
    record: 'Stock on hand',
    owner: 'erp',
    note: "The ERP sees every receipt and every sale on every channel. Odoo's connector pushes stock to Shopify after each order pull. Frappe's ERPNext app offers a periodic inventory sync.",
    sources: ['odooShopify', 'frappeMarket'],
  },
  {
    record: 'Orders',
    owner: 'store',
    note: "The sale happens in the store and lands in the ERP as a sales order. Odoo's document says confirmed Shopify orders are created as confirmed sales orders in Odoo.",
    sources: ['odooShopify'],
  },
  {
    record: 'Customers',
    owner: 'shared',
    note: 'Shoppers create themselves at checkout and flow into the ERP. Trade accounts, with their terms and credit limits, start in the ERP and flow out to the store.',
    sources: ['netsuiteConnector'],
  },
  {
    record: 'Shipments',
    owner: 'erp',
    note: 'Whoever packs the box owns the shipment. With deliveries handled in Odoo, its document says the delivery order is validated in Odoo and the shipment is then pushed to Shopify.',
    sources: ['odooShopify'],
  },
  {
    record: 'Refunds and returns',
    owner: 'store',
    note: 'The customer asks the store. The ERP books the credit note. Odoo lists refunds and credit notes as moving from Shopify to Odoo.',
    sources: ['odooShopify'],
  },
  {
    record: 'Sales tax',
    owner: 'store',
    note: "The store works out tax at checkout and collects it. The ERP records what was collected so finance can report it. Intuit's Shopify listing says sales, taxes and fees are mapped to the right categories.",
    sources: ['shopifyQbo'],
  },
];

/* ── Ready-made connectors by ERP. Every item restates the maker's own page as
   it read on 2026-10-11. Bullets are deliberately uneven in shape and length.
   `custom` is our own view of where a custom link becomes the better job. ── */
type ErpCard = {
  n: string;
  title: string;
  body: string;
  items: ReadonlyArray<string>;
  custom: string;
  sources: ReadonlyArray<SrcKey>;
  more?: { href: string; label: string };
  span: string;
};

const ERPS: ReadonlyArray<ErpCard> = [
  {
    n: '01',
    title: 'QuickBooks',
    body: 'Intuit publishes its own Shopify connector, and third-party apps cover Desktop, BigCommerce and WooCommerce.',
    items: [
      'Shopify App Store: QuickBooks Online, made by Intuit, is free to install. The listing says the connector is included with a QuickBooks subscription and that additional charges may apply',
      'Shopify App Store: QuickBooks Desktop Connector, made by LINK, lists a free D2C plan and a B2B plan at $99 a month',
      'BigCommerce app marketplace: the QuickBooks Online listing shows an upfront fee of $0 and a recurring fee of $0 a month',
      'WooCommerce Marketplace: QuickBooks Sync for WooCommerce, by MyWorks Software, is free to download and needs a free or paid MyWorks account',
      'MyWorks lists Shopify and QuickBooks Online plans from $0 for up to 20 orders a month to $99 a month for unlimited orders on yearly billing, or $109 billed monthly',
      'Webgility lists its Pro plan for QuickBooks Online or Xero at $69 a month billed annually, or $79 billed monthly, for 300 orders a month',
    ],
    custom:
      'QuickBooks has to lead on stock and prices, and the app you would buy only brings sales into the books.',
    sources: ['shopifyQbo', 'shopifyQbd', 'bcQbo', 'wooMyworks', 'myworksPricing', 'webgility'],
    more: { href: '/services/shopify-quickbooks-integration', label: 'Shopify QuickBooks integration' },
    span: 'lg:col-span-7',
  },
  {
    n: '02',
    title: 'NetSuite',
    body: "Oracle sells its own connector for all four store platforms on this page.",
    items: [
      "Oracle's NetSuite Connector page lists ecommerce connectors for Shopify B2C and B2B, BigCommerce B2C, Adobe Commerce B2C and WooCommerce B2C. It calls the connector an add-on module and names no price",
      'Shopify App Store: NetSuite ERP Connector, by Oracle NetSuite, lists B2C Standard at $199.92 a month, POS and B2C Premium at $249.92 a month each, and B2B at $916.58 a month',
      'BigCommerce app marketplace: NetSuite Connector by Oracle NetSuite shows an upfront fee of $2,000 and a recurring fee of $83.23 a month, on a listing last updated July 17, 2023',
      'Celigo publishes a Shopify and NetSuite template that syncs customers, orders, order status, fulfillment, cancellations and refunds. Celigo prices by endpoints and flows, and its pricing page shows no dollar figure',
      'For a custom link, Oracle documents REST web services that create, read, update and delete NetSuite records',
    ],
    custom:
      'your pricing, warehouse or approval rules do not fit the plan you would buy, or you need a record the plan leaves out.',
    sources: ['netsuiteConnector', 'shopifyNetsuite', 'bcNetsuite', 'celigoTemplate', 'celigoPricing', 'netsuiteRest'],
    more: { href: '/services/netsuite-ai-agents', label: 'NetSuite AI agents' },
    span: 'lg:col-span-5',
  },
  {
    n: '03',
    title: 'Odoo',
    body: 'Odoo 19 documents its own Shopify Connector. Its direction table decides whether it fits.',
    items: [
      'Orders, products, customers, returns and refunds move from Shopify to Odoo. Inventory and deliveries move both ways',
      'It does not sync in real time. The document says it runs on scheduled actions and does not rely on webhooks. Orders are pulled every 10 minutes by default',
      'A search for shopify on the Odoo Apps Store returned 235 apps on 11 Oct 2026. The first result, Shopify Odoo Connector by Emipro Technologies, was listed at $615.10',
      "Odoo's external API is available on Custom pricing plans only. The document says it is not available on One App Free or Standard plans",
    ],
    custom: 'Odoo has to be the master for products and prices, or ten minutes is too slow for your stock.',
    sources: ['odooShopify', 'odooApps', 'odooApi'],
    more: { href: '/services/odoo-ai-agents', label: 'Odoo AI agents' },
    span: 'lg:col-span-5',
  },
  {
    n: '04',
    title: 'SAP Business One',
    body: 'Reached through the Service Layer, the interface SAP documents for reading and writing records.',
    items: [
      "SAP's reference says the Service Layer follows the OData protocol, and that as of SAP Business One FP 2405, OData Version 4 is the primary protocol",
      'APPSeCONNECT, an integration platform, lists plans starting at $99 a month. Its pricing page classes SAP Business One, Magento and Shopify Plus as Premium Apps, and its Starter plan includes one Premium App',
    ],
    custom:
      'price lists, warehouses and units of measure are set up in ways a template cannot follow. We scope a SAP Business One link as a project from the first call.',
    sources: ['sapServiceLayer', 'appseconnect'],
    more: { href: '/services/erp-ai-agents', label: 'ERP AI agents' },
    span: 'lg:col-span-7',
  },
  {
    n: '05',
    title: 'ERPNext',
    body: 'Frappe, which publishes ERPNext, also publishes a connector for it. Both are open source.',
    items: [
      'Ecommerce Integrations is filed under Free on the Frappe Cloud Marketplace and published on GitHub under the GNU GPL v3.0 license, for ERPNext versions 13 to 16',
      'It supports Shopify, Unicommerce and Zenoti. For Shopify it syncs sales orders and customer details into ERPNext, with optional invoice, delivery note and periodic inventory sync',
      "Frappe's documentation says the framework generates a REST API for every DocType out of the box. A DocType is ERPNext's name for a kind of record",
    ],
    custom: 'the store is BigCommerce, WooCommerce or Adobe Commerce, or your pricing rules need more than the app offers.',
    sources: ['frappeMarket', 'frappeGithub', 'frappeErpnext', 'frappeRest'],
    span: 'lg:col-span-7',
  },
  {
    n: '06',
    title: 'Xero',
    body: 'Accounting software more than an ERP. The same owner map applies to it.',
    items: [
      'On 11 Oct 2026 the Xero listing at apps.shopify.com/xero, whose developer is Xero, read: this app is not currently available on the Shopify App Store',
      'A2X lists Shopify payout data to QuickBooks Online, Xero or NetSuite starting at US$29 a month',
      "Adobe's web API guide names Xero as an example of a back-end system its APIs integrate with",
    ],
    custom: 'Xero has to hold the item list or the stock count and the store has to follow it.',
    sources: ['shopifyXero', 'a2xPricing', 'adobeWebApi'],
    span: 'lg:col-span-5',
  },
  {
    n: '07',
    title: 'A custom or in-house ERP',
    body: 'No app store exists for it, so every link is custom. The route depends on what the system exposes.',
    items: [
      'If it has an API, we read and write through it',
      'If it has a database and no API, we agree a safe way in with your IT team: a read-only view or a staging table',
      'If it only exports files, we build the link on files such as CSV or XML, on a schedule you choose',
      'For trading partners that require EDI, we map documents such as the 850 purchase order, the 856 ship notice and the 810 invoice, as X12 numbers them, to your store and ERP records',
    ],
    custom: 'the ERP was built for you. There is no connector to buy, so the owner map becomes the whole specification.',
    sources: ['x12'],
    more: { href: '/b2b-ecommerce', label: 'B2B ecommerce' },
    span: 'lg:col-span-12',
  },
];

/* ── Store platforms. What each one gives a link to work with, from the
   platform's own developer documentation, read 2026-10-11. ── */
const STORES: ReadonlyArray<{
  name: string;
  items: ReadonlyArray<string>;
  sources: ReadonlyArray<SrcKey>;
  more?: { href: string; label: string };
  span: string;
}> = [
  {
    name: 'Shopify and Shopify Plus',
    items: [
      'GraphQL Admin API budget by plan: 100 points a second on a standard plan, 200 on Advanced Shopify, 1,000 on Shopify Plus and 2,000 on Shopify for enterprise',
      'A single query may not cost more than 1,000 points on any plan, and array inputs are capped at 250 items on every Shopify API. For large loads Shopify points to bulk operations, which do not carry those rate limits',
      'Webhooks give an app near-real-time data about events such as a new order',
      "Shopify names the partners in its Global ERP Program as Microsoft Dynamics 365 Business Central, Oracle NetSuite, Infor, Acumatica and Brightpearl by Sage",
      'Intuit, Oracle NetSuite, Microsoft and Acumatica each have their own app on the Shopify App Store. A search there for netsuite returned 87 apps on 11 Oct 2026',
    ],
    sources: [
      'shopifyGqlLimits',
      'shopifyLimits',
      'shopifyWebhooks',
      'shopifyErpGuide',
      'shopifyBusinessCentral',
      'shopifyAcumatica',
      'shopifySearch',
    ],
    more: { href: '/services/shopify-development', label: 'Shopify development' },
    span: 'lg:col-span-7',
  },
  {
    name: 'BigCommerce',
    items: [
      'API quota by plan: 20,000 requests an hour (150 every 30 seconds) on Standard and Plus, and 60,000 an hour (450 every 30 seconds) on Pro. Enterprise is set by plan and resource',
      'Every app on the store shares that quota, so a new ERP link has to fit beside the apps already installed',
      'Webhooks notify an application when specific events occur on a store',
    ],
    sources: ['bcLimits', 'bcWebhooks'],
    more: { href: '/services/bigcommerce-b2b', label: 'BigCommerce B2B' },
    span: 'lg:col-span-5',
  },
  {
    name: 'WooCommerce',
    items: [
      'The REST API connects a store to external systems through keys you create under WooCommerce, Settings, Advanced, REST API, with Read, Write or Read/Write permission',
      'The legacy REST API has been removed from WooCommerce core. An older ERP plugin that depends on it needs the separate legacy plugin, or a rebuild',
      'Webhooks can fire each time an order, product, coupon or customer is added, edited or deleted',
    ],
    sources: ['wooRest', 'wooWebhooks'],
    more: { href: '/services/woocommerce-development', label: 'WooCommerce development' },
    span: 'lg:col-span-5',
  },
  {
    name: 'Adobe Commerce (Magento)',
    items: [
      "Adobe's web API framework supports GraphQL, REST and SOAP. Adobe's guide says the system does not currently support webhooks",
      'Bulk endpoints combine many calls of the same type into one request and pass them through a message queue',
      'Adobe publishes an integration starter kit for back-office systems, with reference integrations for orders, products and customers',
    ],
    sources: ['adobeWebApi', 'adobeBulk', 'adobeStarterKit'],
    more: { href: '/services/magento-development', label: 'Magento development' },
    span: 'lg:col-span-7',
  },
];

/* ── Six checks. The numbered list a buyer can run before paying anyone. ── */
const CHECKS: ReadonlyArray<{ n: string; t: string; b: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    n: '01',
    t: 'Direction',
    b: "Does the connector move each record the way your owner map says? Odoo's own Shopify Connector brings products from Shopify into Odoo. If Odoo is where you create products, that one line rules it out.",
    sources: ['odooShopify'],
  },
  {
    n: '02',
    t: 'Timing',
    b: "How old can a stock count be before you oversell? Odoo's connector pulls orders every 10 minutes by default. MyWorks lists a sync frequency of 1 hour on its free plan and 5 minutes from its Grow plan up.",
    sources: ['odooShopify', 'myworksPricing'],
  },
  {
    n: '03',
    t: 'Volume',
    b: "Count your orders a month. MyWorks caps its free plan at 20 and Webgility's Pro plan covers 300. Then count API calls: on BigCommerce Standard, every app shares 150 requests per 30 seconds.",
    sources: ['myworksPricing', 'webgility', 'bcLimits'],
  },
  {
    n: '04',
    t: 'Rules',
    b: 'List your rules: customer price lists, several warehouses, kits, units of measure, tax-exempt accounts. If the connector has a setting for each one, use it. If you would have to change how you sell to suit the app, go custom.',
    sources: [],
  },
  {
    n: '05',
    t: 'The exact pair',
    b: "Is there a connector for your store and your ERP together? Oracle lists Shopify, BigCommerce, Adobe Commerce and WooCommerce. Frappe's ERPNext app lists Shopify, Unicommerce and Zenoti. A custom ERP has none.",
    sources: ['netsuiteConnector', 'frappeMarket'],
  },
  {
    n: '06',
    t: 'Access',
    b: 'Can anything reach the ERP at all? Odoo opens its external API on Custom pricing plans only. Check your plan before you buy a connector or commission a build.',
    sources: ['odooApi'],
  },
];

/* ── Where these links break. The first is a rule of ours and carries no
   source. The other eight come from the linked pages. ── */
const BREAKS: ReadonlyArray<{ t: string; b: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    t: 'Two owners for one record',
    b: 'When a price can be edited in both systems, one edit silently wins and the other is lost. Give the record to one system and lock the field in the other.',
    sources: [],
  },
  {
    t: 'A connector that points the wrong way',
    b: "Odoo's Shopify Connector lists products as moving from Shopify to Odoo. A business that creates products in Odoo needs a different route.",
    sources: ['odooShopify'],
  },
  {
    t: 'Stock that is minutes or an hour old',
    b: "Odoo's connector pulls orders every 10 minutes by default. MyWorks lists a 1 hour sync on its free plan. Fast-selling items can oversell inside that gap.",
    sources: ['odooShopify', 'myworksPricing'],
  },
  {
    t: 'An ERP plan with no API access',
    b: "Odoo's document says its external API is not available on One App Free or Standard plans.",
    sources: ['odooApi'],
  },
  {
    t: 'A store plan with a small API budget',
    b: 'A standard Shopify plan gets 100 points a second and Shopify Plus gets 1,000. On BigCommerce Standard, 150 requests per 30 seconds are shared by every app.',
    sources: ['shopifyGqlLimits', 'bcLimits'],
  },
  {
    t: 'Batches bigger than the platform accepts',
    b: 'Shopify caps array inputs at 250 items on every API. A price update for 5,000 SKUs has to be split, or sent as a bulk operation.',
    sources: ['shopifyLimits'],
  },
  {
    t: 'A plugin built on an API that has gone',
    b: 'WooCommerce has removed its legacy REST API from core. Webhooks set up to use it stop working unless the legacy plugin is installed.',
    sources: ['wooRest'],
  },
  {
    t: 'A platform with no webhooks of its own',
    b: "Adobe's guide says its web API framework does not currently support webhooks. Adobe's starter kit uses Adobe I/O Events for that job.",
    sources: ['adobeWebApi', 'adobeStarterKit'],
  },
  {
    t: 'Returns that start in the wrong system',
    b: "With deliveries handled in Odoo, Odoo's document says returns initiated in Shopify do not sync automatically.",
    sources: ['odooShopify'],
  },
];

/* ── Who this is for. Examples of the kinds of business the work suits, not a
   client list. Pictures were generated on 2026-10-11 and checked at full size. ── */
const INDUSTRIES: ReadonlyArray<{ img: string; alt: string; t: string; b: string }> = [
  {
    img: `${IMG}/loading-dock-pallets.webp`,
    alt: 'A man in a grey hooded sweatshirt wraps clear film around a pallet of plain cardboard boxes at a warehouse loading dock beside an orange pallet jack',
    t: 'Distributors and wholesalers',
    b: 'Customer price lists, stock split across warehouses, and purchase orders that come in by EDI as well as through the trade portal.',
  },
  {
    img: `${IMG}/machine-shop-parts-rack.webp`,
    alt: 'A woman in safety glasses and a navy t-shirt places a machined steel part into a grey bin on a rack of finished metal parts',
    t: 'Manufacturers',
    b: 'Finished goods come off a production order, so availability changes with the schedule. Web orders need to arrive in the ERP as sales orders the planner can see.',
  },
  {
    img: `${IMG}/packing-bench-orders.webp`,
    alt: 'A man tapes a cardboard box shut while a woman lays a folded cream towel into an open box at a wooden packing bench',
    t: 'Brands selling on several channels',
    b: 'A website, marketplaces and a wholesale list all draw on the same shelves. Oversells start when each channel keeps its own count.',
  },
  {
    img: `${IMG}/trade-counter-supplies.webp`,
    alt: 'A woman in a khaki work vest hands a small cardboard box across a wooden counter to a man in a green jacket, with shelves of parts bins behind her',
    t: 'Trade suppliers with a counter and a website',
    b: 'Account customers who buy at the counter, by phone and online, and expect the same price in all three places.',
  },
];

/* ── Process. Six steps, in the order we work. ── */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'Write the owner map',
    b: 'One page lists every shared record with its owner, its direction and how fresh it has to be. Nothing is built until your team has approved it.',
  },
  {
    n: '02',
    t: 'Test the ready-made route first',
    b: "We read the connector's own documentation against your owner map. If it passes the six checks, we say so and set it up.",
  },
  {
    n: '03',
    t: 'Fix the shared data',
    b: 'Mismatched SKUs, duplicate customers and units of measure that differ between the two systems are fixed before they are joined.',
  },
  {
    n: '04',
    t: 'Build against test copies',
    b: 'The link is built against a development store and a sandbox or staging copy of your ERP, away from your live books.',
  },
  {
    n: '05',
    t: 'Run real cases through it',
    b: 'We push your awkward cases through the test link: a part shipment, a refund on a discounted order, a tax-exempt account, a price change on a trade list. Your team checks the result in both systems.',
  },
  {
    n: '06',
    t: 'Launch, check the totals, keep supporting',
    b: 'For the first weeks after launch, store order totals are checked against what reached the ERP. FactoryJet stays on to support the link.',
  },
];

/* ── Comparison: custom link vs integration platform vs ready-made connector ── */
const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: 'Custom link built by FactoryJet', isFactoryJet: true },
  { label: 'Integration platform (iPaaS)' },
  { label: 'Ready-made connector app' },
];

const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'Who decides the direction of each record',
    values: [
      'You do, record by record, in the owner map',
      'You do, inside the flows the platform offers',
      "The app's maker. Odoo's Shopify Connector brings products from Shopify into Odoo",
    ],
  },
  {
    feature: 'Store and ERP pairs covered',
    values: [
      'Any pair with an API, a database view or file exports',
      'Pairs the platform has templates for. Celigo publishes one for Shopify and NetSuite',
      'Fixed pairs. Oracle lists Shopify, BigCommerce, Adobe Commerce and WooCommerce',
    ],
  },
  {
    feature: 'How fresh the data is',
    values: [
      'Set per record: on each event, or on a schedule',
      'Set per flow',
      "Set by the app. Odoo's connector pulls orders every 10 minutes by default",
    ],
  },
  {
    feature: 'What you pay for',
    values: [
      'A build and a support plan, each quoted as a fixed price in writing',
      'A subscription. APPSeCONNECT lists plans starting at $99 a month. Celigo prices by endpoints and flows',
      "A listing price, from free to install (Intuit's QuickBooks Online app) to $916.58 a month (Oracle's B2B plan on Shopify)",
    ],
  },
  {
    feature: 'Who looks after it',
    values: ['FactoryJet, for as long as you keep the support plan. The code is yours', 'The platform runs the engine. Someone on your side owns the flows', 'Its maker'],
  },
  {
    feature: 'Best fit when',
    values: [
      'One record or one rule fits no app, or the ERP was built in-house',
      'Several systems need joining and your team wants to manage the flows',
      'The app passes all six checks',
    ],
  },
];

/* ── The pages under this hub. Every href exists as of 2026-10-11. ── */
const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  {
    href: '/services/shopify-quickbooks-integration',
    t: 'Shopify QuickBooks integration',
    b: 'QuickBooks Online, Desktop and Enterprise, one version at a time.',
  },
  {
    href: '/services/wordpress-shopify-integration',
    t: 'WordPress Shopify integration',
    b: 'A Shopify store beside, or inside, a WordPress site.',
  },
  {
    href: '/services/netsuite-ai-agents',
    t: 'NetSuite AI agents',
    b: 'Agents that work inside NetSuite once orders and stock are flowing.',
  },
  { href: '/services/odoo-ai-agents', t: 'Odoo AI agents', b: 'Agents on Odoo 19 and 20, built on your own records.' },
  {
    href: '/services/erp-ai-agents',
    t: 'ERP AI agents',
    b: 'Quotes, purchase orders and bookkeeping batches drafted inside your ERP.',
  },
  {
    href: '/services/shopify-edi-integration',
    t: 'Shopify EDI integration',
    b: 'Purchase orders from retailers brought into Shopify, with the 855, 856 and 810 sent back.',
  },
  {
    href: '/services/sales-order-automation-ai-agents',
    t: 'Sales order automation agents',
    b: 'Emailed, PDF and EDI purchase orders turned into draft sales orders for approval.',
  },
  {
    href: '/services/ai-inventory-management-agents',
    t: 'AI inventory management agents',
    b: 'Agents that flag low stock and draft purchase orders for approval.',
  },
  { href: '/b2b-ecommerce', t: 'B2B ecommerce', b: 'Trade portals with account pricing and reordering.' },
  {
    href: '/ecommerce-for-manufacturers',
    t: 'Ecommerce for manufacturers',
    b: 'Stores for companies that make what they sell.',
  },
  {
    href: '/services/ecommerce-development',
    t: 'Ecommerce development',
    b: 'New stores and rebuilds on the four platforms named above.',
  },
];

/** Small inline source links. Renders nothing when a claim is our own and has
 *  no source. py-1 keeps each link tall enough for the 24px tap-target check
 *  when links wrap onto stacked rows. */
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
          className="inline-flex min-h-11 min-w-11 items-center gap-1.5 py-2 font-fj-mono text-xs font-semibold tracking-wide text-[#B23E13] hover:underline"
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

export default function EcommerceErpIntegrationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <SiteHeader />

      <main className={`${styles.page} min-h-screen bg-fj-cream text-fj-ink`}>
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO */}
        <section className={`${styles.hero} relative overflow-hidden border-b border-fj-neutral-200 bg-fj-cream pt-12 pb-14 md:pt-14 md:pb-16`}>
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className={`${styles.heroCopy} lg:col-span-7`}>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F05A28]/30 bg-white px-3 py-1.5">
                  <span className="font-fj-mono text-xs font-bold tracking-wide text-[#B23E13]">
                    ECOMMERCE ERP INTEGRATION &middot; UNITED STATES
                  </span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.2rem]">
                  Ecommerce ERP integration with one owner for every record.
                </h1>

                <p className={`${styles.heroLead} mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600`}>
                  We design, build, implement and support the link between your online store and your ERP, the system
                  that holds your stock, purchasing and accounts.
                </p>

                <p className={`${styles.heroDetails} mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600`}> Each record gets one owner, agreed in writing before
                  anything is built. The price is fixed and in writing before work starts.
                </p>

                <p className="mt-3 max-w-2xl font-fj-body text-sm leading-relaxed text-fj-ink">
                  <span className="font-semibold">Stores:</span> Shopify, Shopify Plus, BigCommerce, WooCommerce,
                  Adobe Commerce. <span className="font-semibold">ERPs:</span> QuickBooks, NetSuite, Odoo, SAP Business
                  One, ERPNext, custom systems.
                </p>

                <div className={`${styles.heroForm} mt-6`}>
                  <HeroInlineForm
                    region="us"
                    source="services_ecommerce_erp_integration_hero"
                    service="Ecommerce ERP Integration"
                    submitLabel="See a demo on my data"
            trustText="Working software on your own data before you sign. Founder replies within 24 hours."
          />
                </div>

                <div className="mt-5">
                  <Link
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-fj-body text-sm font-semibold text-fj-ink hover:opacity-70"
                  >
                    Talk to the founder
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-4 w-4">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-fj-neutral-200 pt-5 font-fj-mono text-xs text-fj-neutral-600">
                  <span>500+ businesses served</span>
                  <span>Founded 2014</span>
                  <span>Working demo on your data before a contract</span>
                  <span>Connector prices read {CHECKED_ON}</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
                  <figcaption className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                    Who owns what, on the map we start from
                  </figcaption>
                  <OwnerMapDiagram />
                  <ul className="mt-4 grid gap-2 font-fj-body text-[13px] leading-snug text-fj-ink">
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-[3px] h-3 w-3 flex-shrink-0 rounded-full border-[1.5px] border-[#B23E13] bg-[#F05A28]" />
                      Orange dot: the ERP owns the record and the store follows.
                    </li>
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-[3px] h-3 w-3 flex-shrink-0 rounded-full border-[1.5px] border-[#14110F] bg-[#14110F]" />
                      Black dot: the store owns it and the ERP follows.
                    </li>
                  </ul>
                  <p className="mt-3 font-fj-body text-[13px] leading-snug text-fj-neutral-600">
                    A first draft for the scoping call. The final map is yours, signed off record by record before the
                    build begins.
                  </p>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ANSWER-FIRST BLOCK */}
        <section className="border-b border-fj-neutral-200 bg-white py-12">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <div id="short-answer" className="rounded-2xl border-2 border-[#F05A28]/25 bg-fj-cream p-6 sm:p-8">
              <div className="mb-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                Short answer
              </div>
              <p className="font-fj-body text-base leading-relaxed text-fj-ink sm:text-lg">
                Ecommerce ERP integration is the link that moves products, prices, stock, orders, customers,
                shipments, refunds and tax between your store and your ERP, so nobody retypes them. Start by giving
                each record one owner. A ready-made connector is enough when it moves your records in the direction
                you need. A custom link is the better job when it does not.
              </p>
              <SourceLinks ids={['shopifyErpGuide', 'netsuiteConnector', 'odooShopify']} />
            </div>
          </div>
        </section>

        {/* 3. THE OWNER MAP */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">The map</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  What moves between a store and an ERP, and which side owns it.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  An owner is the one system allowed to change a record. The other system holds a copy and follows.
                  Eight records cross the link in most stores.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  The makers do not agree on the owners. Oracle&rsquo;s NetSuite Connector page has NetSuite managing
                  product details, pricing and inventory. Odoo&rsquo;s Shopify Connector brings products the other
                  way, from Shopify into Odoo.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  So read the direction before you read the price. The owners on the right are the ones we propose
                  first on a scoping call.
                </p>
                <SourceLinks ids={['netsuiteConnector', 'odooShopify']} />
              </div>

              <div className={`${styles.factsBox} lg:col-span-8`} tabIndex={0} data-visual-facts="OWNERS">
<table className={`${styles.facts} bg-white`}><tbody>
{OWNERS.map((o) => (
<tr key={o.record}><th scope="row">
<div>
                      <div className="font-fj-display text-base font-semibold text-fj-ink">{o.record}</div>
                      <div
                        className={`mt-1 font-fj-mono text-xs font-bold uppercase tracking-wider ${
                          o.owner === 'erp' ? 'text-[#B23E13]' : 'text-fj-neutral-600'
                        }`}
                      >
                        {OWNER_LABEL[o.owner]}
                      </div>
                    </div>
</th><td>
<div>
                      <p className="font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{o.note}</p>
                      <SourceLinks ids={o.sources} />
                    </div>
</td></tr>
))}
</tbody></table>
</div>
            </div>
          </div>
        </section>

        {/* 4. READY-MADE CONNECTORS BY ERP */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Buy before you build</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Ready-made connectors by ERP, with list prices read on {CHECKED_ON}.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Look here before paying anyone to build. Every bullet is taken from the product&rsquo;s own listing or
              documentation, and each card ends with the point where a custom link becomes the better job. Treat every
              figure as a reading taken on that date.
            </p>

            <div className={`${styles.factsBox} mt-12`} tabIndex={0} data-visual-facts="ERPS">
<table className={`${styles.facts} bg-fj-cream`}><tbody>
{ERPS.map((e) => (
<tr key={e.n}><th scope="row">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white font-fj-mono text-sm font-bold text-[#B23E13]">
                    {e.n}
                  </div>
<h3 className="font-fj-display text-xl font-semibold text-fj-ink">{e.title}</h3>
</th><td>
<p className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{e.body}</p>
<ul className="mt-4 grid gap-2">
                    {e.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                        <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                        {it}
                      </li>
                    ))}
                  </ul>
<p className="mt-4 rounded-xl border border-fj-neutral-200 bg-white px-4 py-3 font-fj-body text-sm leading-relaxed text-fj-ink">
                    <span className="font-semibold">Go custom when</span> {e.custom}
                  </p>
<SourceLinks ids={e.sources} />
{e.more && (
                    <p className="mt-3 font-fj-body text-sm text-fj-ink">
                      More on this:{' '}
                      <Link href={e.more.href} className="font-semibold underline underline-offset-4">
                        {e.more.label}
                      </Link>
                    </p>
                  )}
</td></tr>
))}
</tbody></table>
</div>
          </div>
        </section>

        {/* 5. STORE PLATFORMS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">The store side</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              ERP integration on Shopify, BigCommerce, WooCommerce and Adobe Commerce.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              A link can only move data as fast as the store allows. These limits come from each platform&rsquo;s own
              developer documentation. They decide how a 5,000 SKU price update gets sent, and how quickly a new
              order can reach the ERP.
            </p>
            <div className={`${styles.factsBox} mt-10`} tabIndex={0} data-visual-facts="STORES">
<table className={`${styles.facts} bg-white`}><tbody>
{STORES.map((s) => (
<tr key={s.name}><th scope="row">
<h3 className="font-fj-display text-lg font-semibold text-fj-ink">{s.name}</h3>
</th><td>
<ul className="mt-3 grid gap-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                        <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                        {it}
                      </li>
                    ))}
                  </ul>
<SourceLinks ids={s.sources} />
{s.more && (
                    <p className="mt-3 font-fj-body text-sm text-fj-ink">
                      Building on it:{' '}
                      <Link href={s.more.href} className="font-semibold underline underline-offset-4">
                        {s.more.label}
                      </Link>
                    </p>
                  )}
</td></tr>
))}
</tbody></table>
</div>
          </div>
        </section>

        {/* 6. SIX CHECKS */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Connector or custom</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Six checks that tell you if a ready-made connector is enough.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Run them in order with the connector&rsquo;s own documentation open. If all six pass, buy the
                  connector. We will tell you the same on a scoping call.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  If one fails, you can keep the connector for the records it handles and have a custom link built
                  for the one it does not.
                </p>
              </div>
              <div className={`${styles.factsBox} lg:col-span-8`} tabIndex={0} data-visual-facts="CHECKS">
<table className={`${styles.facts} bg-fj-cream`}><tbody>
{CHECKS.map((c) => (
<tr key={c.n}><th scope="row">
<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white font-fj-mono text-sm font-bold text-[#B23E13]">
                      {c.n}
                    </div>
<h3 className="font-fj-display text-lg font-semibold text-fj-ink">{c.t}</h3>
</th><td>
<p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{c.b}</p>
<SourceLinks ids={c.sources} />
</td></tr>
))}
</tbody></table>
</div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline="Send us your store, your ERP and the record that causes the retyping."
          sub="Send your field list or brief. We map every field and quote each phase at a fixed price. If a ready-made connector covers it, we say so."
          label="Map my integration"
        />

        {/* 7. WHERE IT BREAKS */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Failure points</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Where store to ERP links fail, and the page that says so.
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Nine failure points. The first is a rule of our own. The other eight are written on the makers&rsquo;
              own pages, and each one links to the page.
            </p>
            <div className={`${styles.factsBox} mt-10`} tabIndex={0} data-visual-facts="BREAKS">
<table className={`${styles.facts} bg-fj-cream`}><tbody>
{BREAKS.map((l) => (
<tr key={l.t}><th scope="row">
<div className="font-fj-display text-[15px] font-semibold text-fj-ink">{l.t}</div>
</th><td>
<p className="mt-1 font-fj-body text-sm leading-relaxed text-fj-neutral-600">{l.b}</p>
<SourceLinks ids={l.sources} />
</td></tr>
))}
</tbody></table>
</div>
          </div>
        </section>

        {/* 8. WHO THIS IS FOR */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Who needs this</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Who joins a store to an ERP.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  A distributor, a machine shop and a consumer brand run different rules. Underneath, each needs the
                  store and the ERP to agree on what is in stock and what it sells for.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  For trade sales, our{' '}
                  <Link href="/b2b-ecommerce" className="font-semibold text-fj-ink underline underline-offset-4">
                    B2B ecommerce
                  </Link>{' '}
                  page covers account pricing and reordering, and{' '}
                  <Link
                    href="/ecommerce-for-manufacturers"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    ecommerce for manufacturers
                  </Link>{' '}
                  covers stores for companies that make what they sell. Running SuiteCommerce on NetSuite today? See{' '}
                  <Link
                    href="/replatforming/netsuite-suitecommerce-to-shopify-plus"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    NetSuite SuiteCommerce to Shopify Plus
                  </Link>
                  , which keeps NetSuite as the ERP and moves only the storefront.
                </p>
              </div>

              <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-8">
                {INDUSTRIES.map((ind) => (
                  <li key={ind.t} className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white">
                    <img
                      src={ind.img}
                      alt={ind.alt}
                      width={1200}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[3/2] w-full object-cover"
                    />
                    <div className="p-5">
                      <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{ind.t}</h3>
                      <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{ind.b}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 8b. HOUSE TERMS + RECENT WORK. The one labelled client block on this page. */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="fj-eyebrow">How we work with you</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  The code, the accounts and the data stay yours.
                </h2>
                <ul className="mt-6 grid gap-3">
                  {[
                    { t: 'Code and repository', d: 'Yours from day one.' },
                    { t: 'Accounts in your name', d: 'Your store, ERP and hosting accounts. Hosting, and any AI usage, can run there at cost, with no markup from us.' },
                    { t: 'Fixed price per phase', d: 'Each phase is scoped, priced and signed on its own. You see working software on your own data before you sign.' },
                    { t: 'Defect cover in the build price', d: 'Defects found after launch are fixed for a cover period agreed before work starts.' },
                    { t: 'No monthly minimum', d: 'Support after launch is optional. Each change is quoted and approved before we do it.' },
                  ].map((x) => (
                    <li key={x.t} className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5">
                      <p className="font-fj-display text-lg font-semibold text-fj-ink">{x.t}</p>
                      <p className="mt-1 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{x.d}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                  Weighing an ERP move before the link? Our{' '}
                  <a
                    href="/comparisons/netsuite-vs-quickbooks"
                    className="font-semibold text-[#B23E13] underline underline-offset-2"
                  >
                    NetSuite vs QuickBooks comparison
                  </a>{' '}
                  sets out when a store outgrows QuickBooks.
                </p>
              </div>
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">Recent work</p>
                <ul className="mt-4 grid gap-3">
                  {[
                    {
                      href: '/case-studies/sow-easy-distributor-portal',
                      tag: 'Odoo to WooCommerce · Build in progress',
                      name: 'Sow Easy',
                      body: 'A WooCommerce trade store that reads stock, pricing and SKUs from Odoo, with trade ordering. The store and the Odoo link are being tested on staging, and launch is still ahead.',
                    },
                    {
                      href: '/case-studies/gpsuk-promotional-products',
                      tag: 'Trade storefront · Live',
                      name: 'GPSUK',
                      body: 'A Commerceflo trade storefront where business buyers log in, see their own account pricing and move from quote to order without retyping.',
                    },
                    {
                      href: '/case-studies/yadav-entrance-automation-website-seo',
                      tag: 'Product catalog site · Live',
                      name: 'Yadav Entrance Automation',
                      body: 'A hand-built website with a page per product, and specifications and FAQs on each, for a maker of high speed doors, rolling shutters and dock levellers.',
                    },
                    {
                      href: '/case-studies/impulse-branding-migration',
                      tag: 'Website, SEO and AI search',
                      name: 'Impulse Branding Solutions',
                      body: 'A Next.js website for a commercial signage and fit-out company, with service, sector and project pages buyers can check. We run its ongoing SEO and AI search work.',
                    },
                  ].map((w) => (
                    <li key={w.href}>
                      <Link
                        href={w.href}
                        className="group flex flex-col rounded-2xl border border-fj-neutral-200 bg-white p-5 hover:border-[#F05A28]/50"
                      >
                        <span className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">{w.tag}</span>
                        <span className="mt-2 font-fj-display text-lg font-semibold text-fj-ink">{w.name}</span>
                        <span className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{w.body}</span>
                        <span className="mt-3 inline-flex items-center gap-2 font-fj-body text-sm font-semibold text-fj-ink group-hover:text-[#B23E13]">
                          Read the case study
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-4 w-4">
                            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                  Sow Easy is the ERP link. The other three show how we build product and trade pages. No results are
                  reported for a build that has not launched.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. PROCESS */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">How we work</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  From owner map to a link we support.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Your finance lead or ERP consultant decides how entries should post. We make the two systems follow
                  that decision. We show working software on your own data before a contract.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Once records flow, agents can work on them. See{' '}
                  <Link href="/services/erp-ai-agents" className="font-semibold text-fj-ink underline underline-offset-4">
                    ERP AI agents
                  </Link>{' '}
                  for quotes, purchase orders and bookkeeping drafted inside the ERP.
                </p>
                <img
                  src={`${IMG}/field-mapping-cards.webp`}
                  alt="Two people at a table join two columns of blank white cards with lengths of orange yarn"
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="mt-6 aspect-[3/2] w-full rounded-2xl border border-fj-neutral-200 object-cover"
                />
              </div>
              <ol className="grid gap-4 lg:col-span-8">
                {PROCESS.map((p) => (
                  <li key={p.n} className="flex items-start gap-4 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white font-fj-mono text-sm font-bold text-[#B23E13]">
                      {p.n}
                    </div>
                    <div>
                      <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{p.t}</h3>
                      <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{p.b}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 10. COMPARISON: custom link vs integration platform vs connector app */}
        <ComparisonTable
          eyebrow="Three routes side by side"
          headline="Connector app, integration platform or custom link."
          lead="When a connector passes the six checks, we tell you to use it. Custom work is for the record or the rule that no app covers, and for ERPs built in-house."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer={`Every app, plan and limit named in this table was read on its maker's own page on ${CHECKED_ON}.`}
          scrollRegionLabel="Comparison of ways to connect an online store and an ERP"
        />

        {/* 11. PAGES UNDER THIS HUB */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Go deeper</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Pages under this hub.
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
              {RELATED.map((r, i) => (
                <li key={r.href} className={i % 4 === 0 || i % 4 === 3 ? 'lg:col-span-7' : 'lg:col-span-5'}>
                  <Link
                    href={r.href}
                    className="block h-full rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 transition-colors hover:border-[#F05A28]"
                  >
                    <span className="font-fj-display text-lg font-semibold text-fj-ink">{r.t}</span>
                    <span className="mt-1.5 block font-fj-body text-sm leading-relaxed text-fj-neutral-600">{r.b}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 12. SOURCES + REVIEW LINE */}
        <section className="bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Where the facts come from</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  The {SOURCE_KEYS.length} pages behind this one.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  We read each of them on {CHECKED_ON}: app listings, pricing pages and developer documentation
                  from the makers themselves. Every price, plan limit and API limit above comes from one of them. A
                  listing can change the week after we read it, so treat each figure as a dated reading and open the
                  link.
                </p>
                <p className="mt-6 font-fj-mono text-xs leading-relaxed text-fj-neutral-600">
                  Reviewed and updated {PAGE_MODIFIED} &middot;{' '}
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
                      className="font-fj-body text-sm leading-snug text-fj-ink underline decoration-fj-neutral-200 underline-offset-4 hover:decoration-[#F05A28]"
                    >
                      {SRC[k].label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 13. FAQ */}
        <FAQ
          eyebrow="Ecommerce ERP integration FAQ"
          headline="Store to ERP questions, with sourced answers."
          lead={`What owners and finance teams ask before joining a store to an ERP. Each answer about a named product points to that product's own page, read on ${CHECKED_ON}.`}
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 14. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="Ecommerce ERP integration"
          headline="Give every record one owner. We build the link."
          sub="Send your store platform, your ERP and the record your team retypes most. We come back with an owner map and the shortest route to it."
          primaryCta={{ label: 'Map my integration', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="Working demo on your own data before a contract. Fixed quote in writing, and you own the code."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
