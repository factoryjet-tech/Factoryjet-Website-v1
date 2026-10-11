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
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { ORG_ID, ORG_REF, FOUNDER_ID } from '@/data/organization';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/ai-inventory-management-agents, built 2026-10-11.

   Why this page exists: US monthly searches measured 2026-10-11 (DataForSEO,
   location 2840): "ai inventory management" 1,300, "ai inventory management
   software" 320, "ai inventory" 210, "ai demand forecasting" 140,
   "multichannel inventory management" 140, "inventory automation" 70,
   "ai inventory optimization" 50. The word inventory did not appear on the
   ERP agents page or the procurement agent page. Two buyer questions from the
   9 Oct sweeps open the FAQ in the buyer's own words.

   Many of those searchers want a product to switch on. FactoryJet is a
   services company, so the hero, the short answer and one whole section say
   plainly that we build and support agents on the buyer's own ERP or store,
   and say when a rented planning product is the better choice.

   Truth rules for anyone editing this file:
   1. Every third-party fact (features, defaults, formulas, list prices, the
     Census and IRS lines) was read on that party's own page on 2026-10-11
     and links to it through the SRC map below. The ledger with the quoted
     words is in the build notes (sources.json). Intuit's QuickBooks page,
     NetSuite's ABC guide and StockTrim's price selector were read in a
     browser. Zoho Inventory sent every request to a non-US price page, so
     Zoho is left out.
   2. No FactoryJet prices. The dollar figures are (a) list prices of named
     inventory products from each maker's own pricing page, (b) two market
     ranges for a BUILD inside one cost FAQ answer (Layer3 Labs,
     ProductCrafters) and (c) the Census Bureau's inventory total.
   3. Rule B of 2026-10-11 (Bhavesh): nothing on this page puts a figure on
     what a custom agent costs after it is built. Support is described only
     as: build and ongoing support quoted as fixed prices in writing, and
     FactoryJet keeps managing the servers, the AI models, the API
     connections and the maintenance. Do not add a figure for that.
   4. Nothing here says where the FactoryJet team is.
   5. What FactoryJet has confirmed (Bhavesh, 2026-10-09 and 2026-10-11): work
     on Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs; RFQs and
     quoting, daily bookkeeping, purchase and sales orders; agents that read
     stock and orders in an ERP or store and raise purchase orders; EDI,
     punchout, Xero, HubSpot and WhatsApp integrations. Demand forecasting is
     written as work we design and build. No past forecasting project, no
     accuracy figure and no stockout percentage is claimed. No client is
     named. Partner status is not raised. No standard or audit is claimed.
   6. The eight products restate each maker's own pricing page. We sell none
     of them.
   7. Mirrors /services/accounts-payable-automation for components, props and
     schema only. No sentence, FAQ, table row or heading is reused from it.

   Schema: WebPage + Service + FAQPage + ItemList + BreadcrumbList.
   Organization is rendered once sitewide by src/app/layout.tsx and referenced
   here by @id. The FAQPage mainEntity is generated from the exact FAQ_ITEMS
   array the visible <FAQ> component renders. There is no second array.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/ai-inventory-management-agents';
const PAGE_TITLE = 'AI Inventory Management Agents on Your ERP | FactoryJet';
const PAGE_DESC =
  'We design, build and support AI agents that flag low stock, draft purchase orders for approval and keep your store, warehouse and ERP on one stock count.';
const PAGE_PUBLISHED = '2026-10-11';
const PAGE_MODIFIED = '2026-10-11';
const CHECKED_ON = '11 Oct 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/ai-inventory-management-agents';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'ai inventory management',
    'ai inventory management software',
    'ai for inventory management',
    'inventory management ai',
    'ai inventory',
    'ai inventory agent',
    'ai demand forecasting',
    'ai inventory optimization',
    'inventory automation',
    'multichannel inventory management',
    'low stock alerts',
    'reorder point automation',
    'purchase order automation',
    'shopify inventory sync',
    'netsuite reorder point',
    'odoo reordering rules',
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
        alt: 'FactoryJet, AI inventory management agents built on your own ERP and store',
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
  { name: 'AI Inventory Management Agents', url: CANONICAL_URL },
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
  name: 'AI Inventory Management Agents',
  serviceType:
    'AI inventory management agent design and build, low-stock and reorder alerts, draft purchase orders for approval, stock sync between a store, a warehouse system and an ERP, slow-mover reports, stock answers for staff, demand forecast design and build, support after launch',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    "FactoryJet designs, builds, tests and supports AI agents for inventory on the client's own ERP and store. The agents read stock and orders, tell the buyer when an item reaches its reorder point, draft the purchase order in the ERP for a person to approve, keep stock figures matched between a store, a warehouse system and an ERP, list slow movers and answer stock questions from staff. Approving an order and counting stock stay with the client's people. What is built belongs to the client.",
  url: CANONICAL_URL,
};

/* ── Sources. One map, used by every inline source link (the `short` label) AND
   by the visible "Sources" list near the foot of the page (the full `label`).
   Each URL was opened on 2026-10-11 and the supporting sentence read before the
   claim was written. The ledger with the quoted words is in the build notes. ── */
const NS = 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help';
const ODOO = 'https://www.odoo.com/documentation/20.0';
const ERPNEXT = 'https://docs.frappe.io/erpnext';

const SRC = {
  census: {
    short: 'Census Bureau: inventories and sales, July 2026',
    label: 'US Census Bureau: Manufacturing and Trade Inventories and Sales, July 2026 (release CB26-154, September 16, 2026)',
    url: 'https://www.census.gov/mtis/current/index.html',
  },
  irsP538: {
    short: 'IRS: Publication 538',
    label: 'IRS: Publication 538, Accounting Periods and Methods (perpetual or book inventory)',
    url: 'https://www.irs.gov/publications/p538',
  },
  shopifyPo: {
    short: 'Shopify Help: purchase orders',
    label: 'Shopify Help Center: Purchase orders',
    url: 'https://help.shopify.com/en/manual/inventory-and-locations/purchase-orders',
  },
  shopifyTransfers: {
    short: 'Shopify Help: inventory transfers',
    label: 'Shopify Help Center: Inventory transfers and shipments',
    url: 'https://help.shopify.com/en/manual/inventory-and-locations/inventory-transfers',
  },
  shopifyStocky: {
    short: 'Shopify Help: Stocky',
    label: 'Shopify Help Center: Stocky',
    url: 'https://help.shopify.com/en/manual/sell-in-person/shopify-pos/inventory-management/stocky',
  },
  shopifyStates: {
    short: 'Shopify Dev: inventory quantities and states',
    label: 'Shopify Dev: Manage inventory quantities and states',
    url: 'https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states',
  },
  shopifySetQty: {
    short: 'Shopify Dev: inventorySetQuantities',
    label: 'Shopify Dev: GraphQL Admin API, inventorySetQuantities mutation',
    url: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorySetQuantities',
  },
  shopifyLimits: {
    short: 'Shopify Dev: API limits',
    label: 'Shopify Dev: Shopify API limits',
    url: 'https://shopify.dev/docs/api/usage/limits',
  },
  shopifyWebhooks: {
    short: 'Shopify Dev: webhooks reference',
    label: 'Shopify Dev: Webhooks reference (inventory_levels/update sample payload)',
    url: 'https://shopify.dev/docs/api/webhooks/latest',
  },
  qbInventory: {
    short: 'Intuit: QuickBooks inventory tracking',
    label: 'Intuit QuickBooks: Inventory Tracking Software for Small Businesses (read in a browser)',
    url: 'https://quickbooks.intuit.com/accounting/inventory/',
  },
  nsAim: {
    short: 'Oracle: Advanced Inventory Management',
    label: 'Oracle NetSuite Help Center: Advanced Inventory Management',
    url: `${NS}/chapter_N2285050.html`,
  },
  nsBulk: {
    short: 'Oracle: Bulk Orders',
    label: 'Oracle NetSuite Help Center: Bulk Orders (the Order Items page)',
    url: `${NS}/section_N2402825.html`,
  },
  nsPrefs: {
    short: 'Oracle: inventory management preferences',
    label: 'Oracle NetSuite Help Center: Inventory Management Preferences',
    url: `${NS}/article_162488535703.html`,
  },
  nsItemDetails: {
    short: 'Oracle: inventory management details',
    label: 'Oracle NetSuite Help Center: Entering Inventory Management Details',
    url: `${NS}/section_1504284487.html`,
  },
  nsPoApproval: {
    short: 'Oracle: purchase approvals with SuiteFlow',
    label: 'Oracle NetSuite Help Center: Switching From the Approval Routing Feature to SuiteFlow for Purchases',
    url: `${NS}/section_3960256538.html`,
  },
  nsAbc: {
    short: 'NetSuite: ABC inventory analysis',
    label: 'NetSuite: ABC Inventory Analysis and Management (article of September 6, 2023, read in a browser)',
    url: 'https://www.netsuite.com/portal/resource/articles/inventory-management/abc-inventory-analysis.shtml',
  },
  odooReorder: {
    short: 'Odoo: reordering rules',
    label: 'Odoo 20.0 documentation: Reordering rules',
    url: `${ODOO}/applications/inventory_and_mrp/inventory/warehouses_storage/replenishment/reordering_rules.html`,
  },
  odooRfq: {
    short: 'Odoo: requests for quotation',
    label: 'Odoo 20.0 documentation: Request for quotation',
    url: `${ODOO}/applications/inventory_and_mrp/purchase/manage_deals/rfq.html`,
  },
  erpnextAutoMr: {
    short: 'ERPNext: auto creation of Material Request',
    label: 'ERPNext documentation: Auto Creation of Material Request',
    url: `${ERPNEXT}/auto-creation-of-material-request`,
  },
  erpnextItem: {
    short: 'ERPNext: Item',
    label: 'ERPNext documentation: Item (reorder level, safety stock)',
    url: `${ERPNEXT}/item`,
  },
  erpnextStockSettings: {
    short: 'ERPNext: Stock Settings',
    label: 'ERPNext documentation: Stock Settings (automatic Material Request)',
    url: `${ERPNEXT}/stock-settings`,
  },
  erpnextMr: {
    short: 'ERPNext: Material Request',
    label: 'ERPNext documentation: Material Request',
    url: `${ERPNEXT}/material-request`,
  },
  sapServiceLayer: {
    short: 'SAP: Service Layer API reference',
    label: 'SAP Help Portal: SAP Business One Service Layer API Reference',
    url: 'https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html',
  },
  prediko: {
    short: 'Prediko: pricing',
    label: 'Prediko: Pricing and Plans for Shopify Inventory Management App',
    url: 'https://www.prediko.io/pricing',
  },
  stocktrim: {
    short: 'StockTrim: pricing',
    label: 'StockTrim: Pricing (price selector read in a browser)',
    url: 'https://www.stocktrim.com/pricing',
  },
  inventoryPlanner: {
    short: 'Inventory Planner: pricing',
    label: 'Inventory Planner: Pricing',
    url: 'https://www.inventory-planner.com/pricing/',
  },
  cin7Pricing: {
    short: 'Cin7: pricing',
    label: 'Cin7: Pricing for Core and Omni plans',
    url: 'https://www.cin7.com/pricing/',
  },
  cin7Ai: {
    short: 'Cin7: AI features',
    label: 'Cin7: AI-Powered Inventory Management Features',
    url: 'https://www.cin7.com/features/ai/',
  },
  linnworks: {
    short: 'Linnworks: pricing',
    label: 'Linnworks: Plans and pricing',
    url: 'https://www.linnworks.com/pricing/',
  },
  inflow: {
    short: 'inFlow: pricing',
    label: 'inFlow Inventory: Pricing',
    url: 'https://www.inflowinventory.com/software-pricing-inflow',
  },
  netstock: {
    short: 'Netstock: pricing',
    label: 'Netstock: Pricing',
    url: 'https://www.netstock.com/pricing/',
  },
  katana: {
    short: 'Katana: pricing',
    label: 'Katana: Pricing',
    url: 'https://katanamrp.com/pricing/',
  },
  layer3: {
    short: 'Layer3 Labs agency cost guide, 2026',
    label: 'Layer3 Labs: AI Automation Agency Cost, What You Actually Pay in 2026',
    url: 'https://www.layer3labs.io/roi/ai-automation-agency-cost',
  },
  productCrafters: {
    short: 'ProductCrafters cost breakdown, 2026',
    label: 'ProductCrafters: AI Agent Development Cost, $5K to $180K+ (2026 Pricing Breakdown)',
    url: 'https://productcrafters.io/blog/how-much-does-it-cost-to-build-an-ai-agent/',
  },
} as const;

type SrcKey = keyof typeof SRC;

/* ── FAQ. Single array, rendered visibly below AND used to build the FAQPage
   JSON-LD. Never hand-duplicate this list near the ld+json block.
   The first two questions are buyer questions from the 9 Oct 2026 sweeps, in
   the buyer's own words. Most of the rest are the question boxes Google showed
   for this page's searches on 2026-10-11 (DataForSEO, US, location 2840),
   with career and unrelated questions left out. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'buyers', label: 'Tools and vendors' },
  { key: 'basics', label: 'AI inventory basics' },
  { key: 'numbers', label: 'Reorder sums and ratios' },
  { key: 'software', label: 'Rent or build' },
  { key: 'systems', label: 'Shopify, NetSuite, Odoo and more' },
  { key: 'working', label: 'Working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── Tools and vendors (buyer questions, in the buyer's own words) ──
  {
    category: 'buyers',
    question: 'Which AI tools can run ecommerce operations like inventory, orders and customer messages automatically?',
    answer: `Pick by job. The products we read on ${CHECKED_ON} each lead with one of the three. For inventory planning on Shopify, Prediko lists plans from $49 a month and Inventory Planner quotes on request. For stock and orders across many sales channels, Cin7 and Linnworks are whole systems. Customer messages are a separate job, covered on our ecommerce AI agents page. FactoryJet builds agents for the work that crosses systems, such as stock in an ERP and orders in a store, with a person approving anything that spends money.`,
  },
  {
    category: 'buyers',
    question: 'Which order management and commerce vendors offer AI agents that automate order routing and customer service tasks?',
    answer: `Going by the vendors' own pages, read on ${CHECKED_ON}: Linnworks lists a Rules Engine with unlimited order routing rules, plus Spotlight AI, which finds repetitive manual work to automate. Cin7 lists an AI assistant, AI forecasting and document recognition that turns a customer's purchase order into a sales order. Shopify's help pages describe Sidekick analyzing stock balances and creating transfers. When routing rules span an ERP, a warehouse and a store, FactoryJet builds the agent around your own rules. Customer service agents are on our ecommerce AI agents page.`,
  },
  // ── AI inventory basics ──────────────────────────────────────────
  {
    category: 'basics',
    question: 'What is AI inventory management?',
    answer:
      'It is software that reads your stock, sales and purchase records and does the repeated thinking for you. It tells the buyer when an item reaches its reorder point, drafts the purchase order, keeps the store and the ERP showing the same count, and lists stock that has stopped selling. Some products add a demand forecast. People still approve orders, count the shelves and decide what to stop selling.',
  },
  {
    category: 'basics',
    question: 'How can AI be used in inventory management?',
    answer:
      'This page covers five jobs. Low-stock alerts that say why an item was flagged. Draft purchase orders for a person to approve. Stock figures kept matched between a store, a warehouse system and an ERP. Slow movers flagged for a decision. Stock questions from your own staff answered from live records. Demand forecasting is the next step, and it works best once those five have put clean history in one place.',
  },
  {
    category: 'basics',
    question: 'What is an automated inventory management system?',
    answer:
      'It is a system that updates stock counts and raises reorders without someone typing each change. The ERPs we read each do a version of it. Odoo creates a request for quotation when forecasted stock falls below a minimum. ERPNext raises a Material Request at a reorder level. NetSuite lists items below their reorder point on its Order Items page with a suggested quantity. An AI agent works across several systems at once and explains each flag in plain words.',
  },
  {
    category: 'basics',
    question: 'Which AI is best for inventory management?',
    answer: `There is no neutral ranking. On ${CHECKED_ON} the first page of US Google results for "ai inventory management" was eight guides and lists from software and services firms. Shortlist by where your stock is kept. A single Shopify store can start with a planning app such as Prediko. A business on an ERP can look at StockTrim or Netstock, which sit on top of one. If stock lives in several systems and the rules are your own, have agents built. Ask any vendor for a trial on your own data.`,
  },
  // ── Reorder sums and ratios ──────────────────────────────────────
  {
    category: 'numbers',
    question: 'What is the 80/20 rule in inventory?',
    answer:
      "It is the idea that a small share of your items brings in most of the value. NetSuite's guide to ABC analysis says the method identifies the 20% of goods that deliver about 80% of the value. In practice it tells you where to look first. Count and reorder those items with the most care, and let simple minimum and maximum rules handle the long tail.",
  },
  {
    category: 'numbers',
    question: 'What is ABC analysis in inventory management?',
    answer:
      "It sorts stock into three classes by value. NetSuite's guide puts class A at 10% to 20% of items and 70% to 80% of annual consumption value, class B at 30% of items and 15% to 20% of value, and class C at 50% of items and 5% of value. An agent can re-run the sort every week and flag items that have moved class, which is one way to spot a slow mover early.",
  },
  {
    category: 'numbers',
    question: 'What is a good ratio of inventory to sales?',
    answer:
      "It depends on your trade, so compare with your own past before anyone else's. For scale, the Census Bureau put the total US business inventories to sales ratio at 1.30 at the end of July 2026, against 1.37 a year earlier. That means businesses held about 1.3 months of sales in stock. Your own figure by product line, tracked month by month, is the more useful number.",
  },
  {
    category: 'numbers',
    question: 'How do you calculate a reorder point?',
    answer:
      "Multiply the supplier's lead time by your average daily sales, then add safety stock. Oracle's NetSuite manual gives that sum and an example, an item with a three-week lead time selling 25 a week, which needs a reorder point of at least 75. ERPNext documents the same formula. NetSuite's defaults are a 14-day lead time and 7 days of safety stock when an item has none set, so check them before trusting a suggested order.",
  },
  {
    category: 'numbers',
    question: 'What is demand forecasting and how does it work?',
    answer:
      "Demand forecasting estimates future sales so you can order before the need shows up. The simple version averages past sales. NetSuite's manual shows one, where three months of 72, 83 and 94 units average 83 a month, which it divides by 30 for a daily rate. Better forecasts add season, promotions and supplier lead times. FactoryJet designs and builds a forecast on your own history as the step after the agents, and you test it on months you have already lived through.",
  },
  // ── Rent or build ────────────────────────────────────────────────
  {
    category: 'software',
    question: 'How much does inventory software cost?',
    answer: `These are list prices from the makers' own pricing pages, read on ${CHECKED_ON}. Prediko starts at $49 a month for the smallest Shopify stores. StockTrim showed $49 a month for under $100K of revenue and $298 a month for $3M to $5M, billed annually. inFlow runs from $129 to $879 a month. Cin7 Core runs from $349 to $1,199 a month. Netstock starts at $900 a month. Katana lists a free plan and custom pricing above it. Inventory Planner and Linnworks quote on request.`,
  },
  {
    category: 'software',
    question: 'Is there a free AI tool for inventory management?',
    answer: `A few, with limits. On ${CHECKED_ON} Katana's pricing page listed a Free plan at $0 for up to 30 SKUs, a SKU being one stock item. Prediko and StockTrim each listed a 14-day free trial. Your ERP may already include reorder rules. Odoo and ERPNext both raise a draft order or a request from levels you set. Free plans suit a small catalog. Past that, price the paid tier before you move your data in.`,
  },
  {
    category: 'software',
    question: 'Can I use Excel for inventory management?',
    answer:
      'Yes, for a small catalog in one location with one person keeping the sheet. It stops working when two people edit at once, when stock sits in several places, or when the store sells while the sheet is closed. The sums on this page, such as reorder point and days of cover, are easy to set up in a spreadsheet. The next step up is usually the reorder rule inside the system you already own, and an agent comes after that.',
  },
  {
    category: 'software',
    question: 'What software is best for inventory management?',
    answer:
      'Start with what you own. Shopify has purchase orders and transfers in the admin, QuickBooks Online Plus and Advanced have low stock alerts, and Odoo, NetSuite and ERPNext have reorder rules. If that falls short, a planning product adds a forecast, and a full system such as Cin7, inFlow or Linnworks takes over from the spreadsheet. The eight products on this page are grouped by the kind of buyer each suits, with list prices from their own pages.',
  },
  {
    category: 'software',
    question: 'When is a planning product the better choice than a built agent?',
    answer:
      'When you sell through one store or one ERP, your reorder rules are a minimum and a maximum, and you want a forecast this month. Prediko and StockTrim each list a 14-day trial, so you can test on your own data before paying. Built agents earn their place when stock lives in several systems, when your rules come from supplier terms, or when purchase orders must land in your ERP in a set format.',
  },
  {
    category: 'software',
    question: 'Is FactoryJet an inventory management software product?',
    answer:
      'No. FactoryJet is a services company. We design, build and support AI agents on the ERP and the store you already run, and you own what we build. There is no FactoryJet inventory app to subscribe to. If a product you can rent this week would cover your case, we name it on the scoping call, and the eight on this page are a fair place to start looking.',
  },
  // ── Shopify, NetSuite, Odoo and more ─────────────────────────────
  {
    category: 'systems',
    question: "What happened to Shopify's Stocky app?",
    answer:
      "Shopify's help page for Stocky carries a notice that the app will no longer be available after August 31st, 2026, and tells merchants to move to Shopify's own inventory management features. Stocky tracked stock levels, forecast what you needed and suggested which products to order. Shopify's admin has purchase orders and inventory transfers. If you relied on Stocky's reorder suggestions, the choices are a planning app such as Prediko or an agent built on your own rules.",
  },
  {
    category: 'systems',
    question: 'Does NetSuite calculate reorder points automatically?',
    answer:
      'Yes, with the Advanced Inventory Management feature. Oracle says NetSuite uses past purchases and sales to calculate a reorder point and a preferred stock level for each item, and lists items below their reorder point on the Order Items page with a suggested quantity. The defaults are a 14-day lead time, 7 days of safety stock and a 6-month look back, recalculated weekly. An agent adds the alert, the reasoning and the draft purchase order for your approver.',
  },
  {
    category: 'systems',
    question: 'How do Odoo reordering rules work?',
    answer:
      "Each rule holds a minimum and a maximum for a product at a location. When forecasted stock drops below the minimum, Odoo creates a request for quotation for a bought product, using the vendor at the top of the product's list. The trigger is automatic by default, and the scheduler runs once a day by default. Set the trigger to manual and the item appears on a replenishment report for a person to order. Odoo also rounds to a pack size you set.",
  },
  {
    category: 'systems',
    question: 'Can an AI agent create purchase orders in SAP Business One or ERPNext?',
    answer:
      "Yes. SAP's Service Layer, the API for SAP Business One, lists PurchaseRequests, PurchaseOrders and Drafts, so an agent can raise a request or leave a draft for approval. In ERPNext the natural place is a Material Request with its purpose set to Purchase. FactoryJet has worked on both systems, on jobs that included purchase and sales orders. In our builds the agent drafts and a person approves.",
  },
  {
    category: 'systems',
    question: 'What is multichannel inventory management?',
    answer:
      "It means keeping one true stock count while you sell in several places, such as your own store, a marketplace and a wholesale desk. The hard part is which number to share. Shopify's developer pages show an item with 101 on hand, 29 committed to orders and 72 available. Share 101 and you can sell stock that is already promised. Linnworks and Cin7 are built for this job. An agent is the route when one of your systems is custom.",
  },
  // ── Working with us ──────────────────────────────────────────────
  {
    category: 'working',
    question: 'How much does a custom inventory agent cost to build?',
    answer:
      "It depends on how many systems the agents read and write and how many rules they follow. Layer3 Labs' 2026 guide to agency pricing gives $5,000 to $15,000 as typical for a single-workflow build and $15,000 to $50,000 for a project of several workflows. ProductCrafters, a development firm, titles its 2026 breakdown of custom AI agent builds $5K to $180K+. The count of systems and rules is what moves a project along those ranges. FactoryJet quotes a fixed price in writing after a short scoping call.",
  },
  {
    category: 'working',
    question: 'Who looks after the agents after launch?',
    answer:
      'We do. FactoryJet quotes the build and the ongoing support as fixed prices in writing after a short scoping call. After launch, the team that built the agents keeps managing the servers, the AI models, the API connections and the maintenance, so your operations team does not have to. That includes re-testing when Shopify, your ERP or the AI model changes. The service is described on our AI agent monitoring and support page.',
  },
  {
    category: 'working',
    question: 'How long does a build take?',
    answer:
      'Two to four weeks is usual for a pilot on one narrow workflow, which for inventory means low-stock alerts on one system going to one buyer. A production build, with permissions, logging, approvals and monitoring, usually takes six to twelve weeks. Stock sync between a store, a warehouse system and an ERP sits at the longer end. At first a person checks every alert and draft, so you see results on live stock before the agents are trusted with more.',
  },
  {
    category: 'working',
    question: 'Can we see it working before we sign?',
    answer:
      'Yes. Before a contract, we show working software on your own data. For inventory that means an export of your stock, open orders and supplier list, run through a first version of the agents. You check its alerts and draft purchase orders against what your buyer did in the same week. If a reorder rule in your ERP or a rented product would do the job as well, that is when we tell you.',
  },
  {
    category: 'working',
    question: 'Will the agent send purchase orders to suppliers by itself?',
    answer:
      "No. In our builds the agent drafts and a person approves. The draft sits in your ERP in its normal place, such as a request for quotation in Odoo or a purchase order pending approval in NetSuite, with the reasoning attached. Your buyer changes it, approves it or deletes it. The agent's sign-in can read stock and create drafts. It cannot approve an order or send one to a supplier.",
  },
  {
    category: 'working',
    question: 'Do you build demand forecasting too?',
    answer:
      'Yes. It is the step after the five jobs on this page, because a forecast needs clean stock, sales and lead-time history in one place, and the agents produce that. We design and build the forecast on your own records and wire it into the reorder point, so alerts move with the season. No accuracy figure is quoted here. You judge it on months you have already lived through, and your buyer can override any number.',
  },
  {
    category: 'working',
    question: 'Who owns the agents and the code?',
    answer:
      'You do. The agents are built for you, and the code, the written rules and the test data are yours. They can run in your own cloud account. We still look after them day to day. If you later change ERP, bring the work in-house or move to another firm, everything goes with you.',
  },
  {
    category: 'working',
    question: 'Where does our stock and sales data go?',
    answer:
      'It stays in your store and your ERP. To write an alert or answer a staff question, the agent sends the records it needs to an AI model. Before the build we name that provider, and every other system that touches your data, in writing, so your IT lead can review the list. Each agent signs in with a user of its own, limited to the records its job needs.',
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

/* ── Hero figure: what happens when one item runs low. Orange rows are the
   agents we build. Black-outline rows are the client's people. ── */
const HERO_FLOW: ReadonlyArray<{ n: string; t: string; b: string; who: 'agent' | 'person' }> = [
  { n: '01', t: 'Read.', b: 'On hand, committed and incoming stock, from your ERP or your store.', who: 'agent' },
  { n: '02', t: 'Compared.', b: 'Against the reorder point, the supplier lead time and open purchase orders.', who: 'agent' },
  { n: '03', t: 'Flagged.', b: 'The buyer gets the item, the days of cover left and the reason.', who: 'agent' },
  { n: '04', t: 'Drafted.', b: 'A purchase order with the supplier, quantity and price from your records.', who: 'agent' },
  { n: '05', t: 'Approved.', b: 'By the person your rules name, who can change or delete the draft.', who: 'person' },
  { n: '06', t: 'Ordered and received.', b: 'Your team sends the order and books the goods in.', who: 'person' },
  { n: '07', t: 'Kept in step.', b: 'The new count reaches the store, the warehouse system and the ERP.', who: 'agent' },
];

/* ── When to rent a planning product and when to have agents built. Product
   and platform facts are from each maker's own page as read on 2026-10-11. ── */
type Fit = { t: string; b: string; sources: ReadonlyArray<SrcKey> };

const RENT_WHEN: ReadonlyArray<Fit> = [
  {
    t: 'You sell through one Shopify store',
    b: 'Prediko says it works with Shopify stores on Basic, Advanced and Plus plans, and lists $49 a month for stores with under $100K of sales in the last 12 months. At that size a product is the sensible start.',
    sources: ['prediko'],
  },
  {
    t: 'You want a forecast this month',
    b: 'Prediko and StockTrim each list a 14-day free trial, and StockTrim asks for no credit card. Two to four weeks is the usual length of a pilot agent on one narrow workflow.',
    sources: ['prediko', 'stocktrim'],
  },
  {
    t: 'A minimum and a maximum are all the rules you have',
    b: 'Odoo and ERPNext each raise a draft order or a request from a reorder level you set, and NetSuite lists what to order with a suggested quantity. Switch that on before you pay anyone.',
    sources: ['odooReorder', 'nsBulk', 'erpnextAutoMr'],
  },
  {
    t: 'You have no system of record for stock yet',
    b: 'Cin7, inFlow and Linnworks are whole inventory and order systems. Cin7 marks its forecasting as an add-on, and Linnworks prices its forecasting as a flat fee. Start there, and add agents later if you need them.',
    sources: ['cin7Pricing', 'inflow', 'linnworks'],
  },
  {
    t: 'Nobody on your side will own the rules',
    b: 'Built agents follow rules your buyer writes down and keeps current. If the rule is to do what the app suggests, rent the app.',
    sources: [],
  },
];

const BUILD_WHEN: ReadonlyArray<Fit> = [
  {
    t: 'Stock lives in more than one system',
    b: 'The store shows one number, the warehouse system another and the ERP a third. The job is to read all three, say which is right and keep them matched.',
    sources: [],
  },
  {
    t: 'Your reorder rules are your own',
    b: 'Supplier minimums, case sizes, container loads, a price break at a set quantity, a buyer who must sign above a limit. A settings screen has few boxes for these.',
    sources: [],
  },
  {
    t: 'Orders must land in your ERP in its own format',
    b: 'A request for quotation in Odoo, a Material Request in ERPNext, a purchase order waiting for approval in NetSuite, a purchase request or a draft in SAP Business One.',
    sources: ['odooRfq', 'erpnextMr', 'nsPoApproval', 'sapServiceLayer'],
  },
  {
    t: 'Staff keep asking where the stock is',
    b: 'Sales reps, store staff and customer service ask the same thing all day. An agent answers from the live records, in a chat window or on WhatsApp.',
    sources: [],
  },
  {
    t: 'You want to own what runs your reordering',
    b: 'The agents, the written rules and the code belong to you, and they move with you if you change store platform or ERP.',
    sources: [],
  },
];

/* ── What each system already does. Each card restates the maker's own pages
   as read on 2026-10-11. Nothing here is our opinion of the product. ── */
const SYSTEMS: ReadonlyArray<{
  name: string;
  kind: string;
  says: string;
  sources: ReadonlyArray<SrcKey>;
  span: string;
}> = [
  {
    name: 'Shopify',
    kind: 'Built in · purchase orders and transfers',
    says: "Shopify's help pages say you can create purchase orders in the admin, save one as a draft or mark it as Ordered, and move stock between locations with inventory transfers. Its developer pages list eight inventory states: incoming, on hand, available, committed, reserved, damaged, safety stock and quality control. Stocky, Shopify's own app that forecast stock and suggested what to order, carries a notice that it will no longer be available after August 31st, 2026.",
    sources: ['shopifyPo', 'shopifyTransfers', 'shopifyStates', 'shopifyStocky'],
    span: 'lg:col-span-7',
  },
  {
    name: 'QuickBooks Online',
    kind: 'Built in · Plus and Advanced plans',
    says: 'Intuit says inventory tracking is available in QuickBooks Online Plus and QuickBooks Online Advanced, that quantities update automatically as you work, and that low stock alerts tell you when it is time to reorder. Once the goods arrive, QuickBooks converts the purchase order into a bill.',
    sources: ['qbInventory'],
    span: 'lg:col-span-5',
  },
  {
    name: 'Oracle NetSuite',
    kind: 'From Oracle · Advanced Inventory Management',
    says: 'Oracle says NetSuite uses past purchases and sales to calculate a reorder point and a preferred stock level for each item. Items that are backordered or below their reorder point appear on the Order Items page with a suggested quantity. The defaults Oracle lists are a 14-day lead time, 7 days of safety stock, 30 days of preferred stock and a 6-month look back.',
    sources: ['nsAim', 'nsBulk', 'nsPrefs'],
    span: 'lg:col-span-5',
  },
  {
    name: 'Odoo',
    kind: 'Built in · reordering rules',
    says: 'A reordering rule holds a minimum and a maximum. When forecasted stock drops below the minimum, Odoo creates a request for quotation for a bought product or a manufacturing order for a made one. The trigger is automatic by default. Set it to manual and the item goes on a replenishment report, where a person reviews the forecast and clicks Order.',
    sources: ['odooReorder'],
    span: 'lg:col-span-7',
  },
  {
    name: 'ERPNext',
    kind: 'Built in · automatic Material Request',
    says: "ERPNext keeps a reorder level and a reorder quantity on each item, by warehouse if you want. With the stock setting switched on, it raises a Material Request when stock reaches that level, one request per item, and emails users who hold the Purchase Manager role. Its item page gives the sum behind a suggested level: safety stock plus average daily consumption times lead time.",
    sources: ['erpnextAutoMr', 'erpnextStockSettings', 'erpnextItem'],
    span: 'lg:col-span-7',
  },
  {
    name: 'SAP Business One',
    kind: 'Service Layer · the API an agent uses',
    says: "SAP's Service Layer is the API for SAP Business One, the door other software uses to read and write its records. Its reference lists Items, PurchaseRequests, PurchaseOrders, StockTransfers, InventoryTransferRequests, InventoryCountings and SalesForecast. SAP describes a purchase request as a way for employees to start a purchasing process by submitting their needs, and a stock transfer as a record of items moved from one warehouse to another.",
    sources: ['sapServiceLayer'],
    span: 'lg:col-span-5',
  },
];

/* ── Five jobs, then the next step. One card each. Bullets are deliberately
   uneven. ── */
type Job = {
  n: string;
  title: string;
  body: string;
  items: ReadonlyArray<string>;
  note: string;
  sources: ReadonlyArray<SrcKey>;
  span: string;
};

const JOBS: ReadonlyArray<Job> = [
  {
    n: '01',
    title: 'Low-stock and reorder alerts, with the reason attached',
    body: 'A reorder point is the stock level at which you should order more. The agent checks every item against it and tells the buyer in plain words.',
    items: [
      'Reads on hand, committed and incoming stock for each item and location',
      'Works out days of cover, which is available stock divided by average daily sales',
      'Counts stock already on an open purchase order, so the same item is not flagged twice',
      'Sends one message per supplier with the items, the cover left and what changed since the last check',
    ],
    note: "Oracle's NetSuite manual gives the sum as average lead time in days times demand, plus safety stock. Its example is an item with a three-week lead time selling 25 a week, which needs a reorder point of at least 75.",
    sources: ['nsItemDetails'],
    span: 'lg:col-span-7',
  },
  {
    n: '02',
    title: 'Purchase orders drafted for a person to approve',
    body: 'A purchase order, or PO, tells a supplier what you want and at what price. The agent prepares it and your buyer decides.',
    items: [
      'Picks the supplier and the price from your own vendor records',
      "Rounds the quantity to the supplier's case size or minimum order",
      'Leaves the draft in your ERP with its reasoning attached',
      'Holds anything above a value you choose for a second sign-off',
    ],
    note: 'Each system gives a draft a different place to wait. Odoo creates a request for quotation and turns it into a purchase order when someone clicks Confirm Order. ERPNext raises a Material Request. NetSuite, when its SuiteFlow workflow tool handles purchase approvals, shows a purchase order as Pending Approval. Shopify lets you save a purchase order as a draft.',
    sources: ['odooRfq', 'erpnextMr', 'nsPoApproval', 'shopifyPo'],
    span: 'lg:col-span-5',
  },
  {
    n: '03',
    title: 'One stock count across store, warehouse and ERP',
    body: 'When three systems disagree, you sell stock you do not have or hold back stock you could have sold. The agent keeps them matched and says so when it cannot.',
    items: [
      'Names one system as the source of truth for each number, in writing',
      'Passes changes on as they happen and runs a full comparison on a schedule',
      'Shares the available figure with sales channels, never the on-hand figure',
      'Reports each mismatch with both values and waits for a rule or a person',
      'Keeps a log of every figure it changed, with the before and the after',
    ],
    note: 'Shopify is specific on this. Its call for setting quantities is meant for the system that acts as the source of truth. It compares the stored quantity with the one you expect before writing, and Shopify warns that skipping the check can lead to inaccurate quantities when requests arrive together. From API version 2026-04 the call also needs an idempotency key, a label that stops one update being applied twice.',
    sources: ['shopifySetQty'],
    span: 'lg:col-span-5',
  },
  {
    n: '04',
    title: 'Slow movers flagged before they fill a shelf',
    body: 'A slow mover is an item that sells far more slowly than the stock you hold of it. The agent lists them so someone can decide what to do.',
    items: [
      'Ranks items by value sold and by days since the last sale',
      'Marks stock with more cover than a limit you set, such as 180 days',
      'Suggests a transfer when another location is short of the same item',
      'Pauses reorder drafts for anything on the list until a person clears it',
    ],
    note: "The usual frame is ABC analysis. NetSuite's guide puts class A at 10% to 20% of items and 70% to 80% of annual consumption value, and class C at 50% of items and 5% of value. Marking down, bundling or dropping a product stays your team's call.",
    sources: ['nsAbc'],
    span: 'lg:col-span-7',
  },
  {
    n: '05',
    title: 'Stock questions from your own staff, answered',
    body: 'Is it in stock, where is it, and when is the next delivery due. Sales, store and service staff ask these all day. The agent answers from live records.',
    items: [
      'Answers in plain words, in a chat window or on WhatsApp',
      'Gives stock by location, what is committed to orders and the expected date of the next receipt',
      'Shows which record each figure came from, so the answer can be checked',
      'Reads only. It cannot change a count or an order from a chat',
    ],
    note: "Product makers are adding the same idea inside their own tools. Cin7 describes an assistant called AMA that answers questions about your sales and inventory inside Cin7 Core. Shopify's help page on transfers describes Sidekick analyzing stock balances and creating transfers. A built agent is the route when the answer needs two or three of your systems at once.",
    sources: ['cin7Ai', 'shopifyTransfers'],
    span: 'lg:col-span-7',
  },
  {
    n: '06',
    title: 'Next step: a demand forecast on your own history',
    body: 'Forecasting means estimating future sales so you order before the need shows up. It follows the five jobs above, because it needs the clean, joined-up history they produce.',
    items: [
      'We design and build the forecast on your own sales, stock and lead-time records',
      'It feeds the reorder point, so alerts and drafts move with the season',
      'Your buyer sees how each number was reached and can override it',
    ],
    note: 'The built-in versions are simple by design. NetSuite looks back over an order analysis interval that defaults to 6 months, and works out a lead time from the three most recent purchase orders. No accuracy figure is quoted here. You test the forecast on months you have already lived through.',
    sources: ['nsPrefs', 'nsItemDetails'],
    span: 'lg:col-span-5',
  },
];

/* ── Six sums behind a reorder. Every example is the maker's own, from the
   linked manual page. The worked example under the list uses made-up figures
   and says so. ── */
type Sum = { n: string; name: string; sum: string; example: string; sources: ReadonlyArray<SrcKey> };

const SUMS: ReadonlyArray<Sum> = [
  {
    n: '01',
    name: 'Available stock',
    sum: 'On hand minus committed',
    example: "Oracle's example has 90 on hand with 20 committed, which leaves 70 available. Committed means promised to customers on approved sales orders and not yet shipped.",
    sources: ['nsBulk'],
  },
  {
    n: '02',
    name: 'Reorder point',
    sum: 'Lead time in days times daily demand, plus safety stock',
    example: "Oracle's example is a three-week lead time and sales of 25 a week, for a reorder point of at least 75. ERPNext writes the same sum as safety stock plus average daily consumption times lead time.",
    sources: ['nsItemDetails', 'erpnextItem'],
  },
  {
    n: '03',
    name: 'Safety stock in units',
    sum: 'Daily demand times the days of buffer you want',
    example: "Oracle's example is 5 a day and 3 days of buffer, which is 15 units. When an item has no value of its own, NetSuite falls back on a default of 7 days.",
    sources: ['nsPrefs'],
  },
  {
    n: '04',
    name: 'Order quantity',
    sum: 'Preferred stock level minus available stock, plus any backorders',
    example: "The preferred level is the quantity you want in stock once the order has arrived. Oracle's example has a preferred level of 100 and 70 available, so the order is 30. With nothing on hand and 25 on backorder, meaning sold with no stock to fill the order, the order is 125.",
    sources: ['nsBulk'],
  },
  {
    n: '05',
    name: 'Lead time',
    sum: 'Days from order to receipt, averaged over recent orders',
    example: "NetSuite averages the three most recent purchase orders. In Oracle's example 14, 5 and 9 days add up to 28, and 28 divided by 3 is 9.3 days.",
    sources: ['nsItemDetails'],
  },
  {
    n: '06',
    name: 'Rounding to the pack',
    sum: "The quantity, rounded up to the supplier's multiple",
    example: "Odoo's example has a minimum of 10, a maximum of 40 and cans sold in sixes. With 8 forecast, 32 are needed, so Odoo orders 36 and warns that stock may pass the maximum.",
    sources: ['odooReorder'],
  },
];

/* ── Where inventory agent projects break. Each one comes from a linked page. ── */
const BREAKS: ReadonlyArray<{ t: string; b: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    t: 'Sharing on hand when the channel needs available',
    b: "Shopify's developer page shows one item with 101 on hand, 29 committed and 72 available. Push the first number to a sales channel and you can sell stock that is already promised.",
    sources: ['shopifyStates'],
  },
  {
    t: 'Two systems writing the same number',
    b: 'Shopify says its set-quantities call is for the system that acts as the source of truth, and warns that skipping the compare check can lead to inaccurate quantities when requests arrive together. Give each number one owner.',
    sources: ['shopifySetQty'],
  },
  {
    t: 'A whole catalog pushed in one call',
    b: 'Shopify caps input arrays at 250 items on every API. A store with 10,000 items in 3 locations has 30,000 stock levels, so a full refresh is at least 120 calls, paced to stay under the rate limit.',
    sources: ['shopifyLimits'],
  },
  {
    t: 'A webhook that carries one number',
    b: "A webhook is a message a system sends when something changes. Shopify's sample payload for an inventory level update holds the item, the location, the available quantity and a time. If the agent needs committed or incoming stock, it has to query for them.",
    sources: ['shopifyWebhooks', 'shopifyStates'],
  },
  {
    t: 'A zero on screen with a negative underneath',
    b: 'Oracle says the available quantity NetSuite shows is zero or higher even when the true value is negative. Its example is minus 17 on hand, shown as 0. Check which value your reorder sum reads.',
    sources: ['nsBulk'],
  },
  {
    t: 'A lead time taken from three orders',
    b: "NetSuite's automatic lead time is the average of the three most recent purchase orders, and Oracle says it is not weighted by units received. One late shipment moves it a long way.",
    sources: ['nsItemDetails'],
  },
  {
    t: 'A reorder check that runs once a night',
    b: "Odoo says its scheduler runs once a day by default, with a confirmed sales order as the other trigger. ERPNext's item page says the Material Request is created at 12 midnight. Stock that drops for another reason, such as a transfer or a count correction, waits for the next run unless something else is watching.",
    sources: ['odooReorder', 'erpnextItem'],
  },
  {
    t: 'A count in the system that has drifted from the shelf',
    b: 'No agent can see a box that was never scanned. The IRS says a business that keeps a book inventory must take a physical inventory at reasonable intervals and adjust the book amount to agree with it. Plan the counts before you trust the alerts.',
    sources: ['irsP538'],
  },
];

/* ── Our experience, stated plainly. No client is named on this page and no
   result is claimed. The first card is Bhavesh's own statement of 2026-10-09
   plus the stock and purchase order line confirmed for this page. The last
   is the support wording allowed by rule B of 2026-10-11. ── */
const EXPERIENCE: ReadonlyArray<{ t: string; kind: string; what: string; href: string; cta: string; span: string }> = [
  {
    t: 'What we have worked on',
    kind: 'ERPs and stores',
    what: 'FactoryJet has worked on Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs. The jobs included RFQs (requests for quotation) and quoting, daily bookkeeping, and purchase and sales orders. Agents that read stock and orders in an ERP or a store and raise purchase orders are part of that work.',
    href: '/services/erp-ai-agents',
    cta: 'See AI agents for ERP systems',
    span: 'lg:col-span-7',
  },
  {
    t: 'What you see before you sign',
    kind: 'A demo on your own data',
    what: 'Before a contract, we show working software on your own data. Here that means an export of your stock, open orders and supplier list, run through a first version so you can check its alerts and drafts against what your buyer did.',
    href: '/contact',
    cta: 'Ask for a demo on your stock data',
    span: 'lg:col-span-5',
  },
  {
    t: 'Connections around the stock',
    kind: 'Integrations we deliver',
    what: "We also deliver EDI integration, punchout catalogs, and Xero, HubSpot and WhatsApp integrations, so an order or a stock answer can reach the system or the person that needs it. EDI is two systems swapping orders and invoices with no PDF in between. A punchout catalog is a supplier's catalog opened from inside a buyer's purchasing system.",
    href: '/services/ai-integration-services',
    cta: 'See AI integration services',
    span: 'lg:col-span-5',
  },
  {
    t: 'Who looks after it',
    kind: 'Managed after launch',
    what: 'FactoryJet quotes the build and the ongoing support as fixed prices in writing after a short scoping call. After launch we keep managing the servers, the AI models, the API connections and the maintenance, so your operations team does not have to.',
    href: '/services/ai-agent-monitoring',
    cta: 'See monitoring and support',
    span: 'lg:col-span-7',
  },
];

/* ── Who this is for. Examples of the kinds of team the work suits, not a
   client list. Pictures were generated on 2026-10-11 and checked at full
   size. The people in them are not FactoryJet staff or clients. ── */
const INDUSTRIES: ReadonlyArray<{ img: string; alt: string; t: string; b: string }> = [
  {
    img: `${IMG}/stockroom-shelf-count.webp`,
    alt: 'A woman with dark curly hair in an olive green shirt holds a clipboard and touches a row of plain cardboard boxes on white steel shelving in a small stockroom, with an orange plastic tote on the shelf beside her',
    t: 'Ecommerce brands',
    b: 'One store or several, plus a marketplace. The available count stays matched across them, and a purchase order is drafted when a product reaches its reorder point.',
  },
  {
    img: `${IMG}/warehouse-aisle-pallet.webp`,
    alt: 'A grey-haired man in navy work clothes crouches beside a pallet of plain wrapped cartons in a warehouse aisle and rests one hand on the top carton, with an orange pallet jack next to the pallet',
    t: 'Wholesale distributors',
    b: 'Thousands of items, long supplier lead times and customers who ask about stock before they order. Alerts and drafts go to the buyer. Stock answers go to the sales desk.',
  },
  {
    img: `${IMG}/parts-bins-workshop.webp`,
    alt: 'A woman with a black ponytail in grey coveralls holds a metal bracket in front of a steel rack of grey parts bins in a workshop, with one orange bin among the grey ones',
    t: 'Manufacturers',
    b: 'Parts and raw materials with minimum order sizes. The agent watches the components your work orders need and drafts the purchase when one reaches its reorder point.',
  },
  {
    img: `${IMG}/shop-back-room-restock.webp`,
    alt: 'A young man in a white T-shirt and a dark green apron places a plain white box on a wooden shelf in the back room of a shop, with an open cardboard carton and an orange step stool on the floor',
    t: 'Retailers with several locations',
    b: 'The same item sits in a stockroom, a few shops and a warehouse. The agent suggests a transfer between locations before it suggests buying more.',
  },
];

/* ── Process. Six steps, in the order we work. ── */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'Trace one item through every system',
    b: 'With your buyer and your warehouse lead we follow real items from purchase to sale. That shows where each one is counted, where it is sold and where it is reordered.',
  },
  {
    n: '02',
    t: 'Switch on what you already own',
    b: 'If a reorder rule in your ERP or a planning product you can rent covers the job, we tell you which one and stop there.',
  },
  {
    n: '03',
    t: 'Write the rules down',
    b: 'Reorder points, supplier minimums, case sizes, approval limits, and which system wins when two disagree. Your buyer signs the list off before anything is built.',
  },
  {
    n: '04',
    t: 'Show it on your own data',
    b: 'Before a contract, we run an export of your stock and open orders through a first version, so you can compare its alerts and drafts with what your team did.',
  },
  {
    n: '05',
    t: 'Build with the least access that works',
    b: 'Each agent gets a sign-in of its own. It can read stock and orders and create a draft. It cannot approve an order or send one to a supplier, and it changes a stock figure only where a written rule says it may.',
  },
  {
    n: '06',
    t: 'Run beside your buyer, then stay on',
    b: 'For an agreed period a person checks every alert and draft, and the rules are corrected where the two differ. After launch the same team reads the logs, re-tests when your ERP, your store or the AI model changes, and fixes what breaks.',
  },
];

/* ── Comparison: three ways to automate inventory ── */
const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: '01 Built into your ERP or store' },
  { label: '02 A planning product you rent' },
  { label: '03 Agents built for you' },
];

const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'What it is',
    values: [
      'Reorder levels, low stock alerts and purchase orders that come with Shopify, QuickBooks, NetSuite, Odoo, ERPNext or SAP Business One',
      'A subscription such as Prediko, StockTrim, Inventory Planner, Netstock or Cin7',
      'AI agents designed around your rules, built for you and owned by you',
    ],
  },
  {
    feature: 'Low-stock warning',
    values: [
      "A reorder level per item, checked on the system's own schedule",
      "Alerts and buying suggestions drawn from the product's forecast",
      'Checked as often as you choose, with the reason and the days of cover in the message',
    ],
  },
  {
    feature: 'Purchase orders',
    values: [
      'A request or a draft raised from the reorder rule',
      'Created in the product, then passed to the systems it connects to',
      'Drafted inside your ERP in its own format, waiting for your approver',
    ],
  },
  {
    feature: 'Keeping systems matched',
    values: [
      'Inside the one system',
      'Between the product and the channels it integrates with',
      'Between whichever systems you run, including a custom ERP',
    ],
  },
  {
    feature: 'Forecasting',
    values: [
      'NetSuite calculates reorder points from past demand. Odoo and ERPNext work from levels you set',
      'The core of most of these products',
      'Designed and built on your own history, as the step after the agents',
    ],
  },
  {
    feature: 'How it is priced',
    values: [
      'Part of the plan you already pay for, or a higher plan',
      'A subscription, set by revenue, order volume or plan',
      'A fixed price for the build and a fixed price for ongoing support, both quoted in writing',
    ],
  },
  {
    feature: 'Who fixes it',
    values: ['The maker of your ERP or store', "The product's vendor", 'FactoryJet, the team that built it'],
  },
  {
    feature: 'Right call when',
    values: [
      'Minimum and maximum levels are enough and you run one system',
      'You sell on one or two channels and want a forecast now',
      'Stock lives in several systems, or your reorder rules do not fit a settings screen',
    ],
  },
];

/* ── Eight inventory products. Each line restates the maker's own pricing page
   as read on 2026-10-11, with its list price where that page gives one.
   Grouped by the kind of buyer each suits. Feeds the visible list AND the
   ItemList JSON-LD. ── */
const OTHERS: ReadonlyArray<{ name: string; focus: string; says: string; source: SrcKey }> = [
  {
    name: 'Prediko',
    focus: 'Planning app · Shopify stores',
    says: 'Its pricing page lists $49 a month for stores with under $100K of sales in the last 12 months, rising by sales band, with a 14-day free trial. The plan lists AI forecasting of revenue and inventory, purchase order management with buying alerts, and an AI inventory coworker called Pia. Prediko says it works with Shopify stores on Basic, Advanced and Plus plans.',
    source: 'prediko',
  },
  {
    name: 'StockTrim',
    focus: 'Forecasting · sits on your ERP or store',
    says: `Its pricing page sets the price by annual revenue. On ${CHECKED_ON} the selector showed $49 a month for under $100K and $298 a month for the $3M to $5M band, both billed annually, with a 14-day free trial and no credit card. The plan lists forecasting based on machine learning, order planning, multi-location planning and variable lead times, with unlimited users and SKUs.`,
    source: 'stocktrim',
  },
  {
    name: 'Inventory Planner',
    focus: 'Forecasting and purchasing · retail and ecommerce',
    says: 'Its pricing page gives no figure. It says pricing is based on the volume of inventory you manage, with unlimited users at no extra cost, and asks you to request a quote. The site lists demand forecasting by SKU, replenishment and purchase orders, and multi-location planning.',
    source: 'inventoryPlanner',
  },
  {
    name: 'Netstock',
    focus: 'Demand and supply planning · on top of an ERP',
    says: 'Its pricing page says pricing starts at $900 a month, on an annual subscription, and depends on the product and bundle. Netstock says it integrates with more than 60 ERP systems and that setup typically takes 6 to 10 weeks.',
    source: 'netstock',
  },
  {
    name: 'Cin7',
    focus: 'Inventory and order system · forecasting as an add-on',
    says: 'Its pricing page lists Cin7 Core Standard at $349 a month, Pro at $599 a month and Advanced at $1,199 a month, in US dollars for new customers, with Omni priced on request. Standard covers 5 users and 6,000 sales orders a year. ForesightAI forecasting is marked as an add-on.',
    source: 'cin7Pricing',
  },
  {
    name: 'inFlow',
    focus: 'Inventory and order system · small and mid-sized teams',
    says: 'Its pricing table lists four inFlow Inventory plans billed monthly, in US dollars: Lite at $129 a month, Core at $379 a month, Pro at $629 a month and Max at $879 a month. On Lite and Core, access to the inFlow API is listed as an add-on at $49 a month.',
    source: 'inflow',
  },
  {
    name: 'Linnworks',
    focus: 'Orders and inventory across many channels',
    says: 'Its pricing page gives no figure and asks you to request a quote. It says pricing is tiered on monthly orders and that Linnworks Forecasting is a flat fee. The page lists inventory sync across more than 100 channels, purchase orders, warehouse transfers and stock forecasting.',
    source: 'linnworks',
  },
  {
    name: 'Katana',
    focus: 'Inventory and production system',
    says: 'Its pricing page lists a Free plan at $0 for up to 30 SKUs and an Advantage plan with custom pricing under one annual contract. Advantage lists Katana AI and AI Replenishment, set up around your data.',
    source: 'katana',
  },
];

const othersSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Inventory planning and management products, with list prices read on 11 October 2026',
  itemListElement: OTHERS.map((o, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: o.name,
    url: SRC[o.source].url,
  })),
};

const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  { href: '/services/erp-ai-agents', t: 'AI agents for ERP systems', b: 'Agents inside the ERP where your stock and orders are kept.' },
  { href: '/services/ecommerce-ai-agents', t: 'AI agents for ecommerce stores', b: 'Orders, returns, B2B quotes and listings on any store platform.' },
  { href: '/services/manufacturing-ai-agents', t: 'Manufacturing AI agents', b: 'Quoting from RFQs and drawings, and supplier purchase orders.' },
  { href: '/services/shopify-quickbooks-integration', t: 'Shopify QuickBooks integration', b: 'Stock, prices and books matched between the store and QuickBooks.' },
  {
    href: '/services/ai-agent-development/procurement-supply-chain-agent',
    t: 'Procurement and supply chain agent',
    b: 'What happens after the order is sent: supplier replies, promised dates and delays.',
  },
  { href: '/services/accounts-payable-automation', t: 'Accounts payable automation', b: "The supplier's invoice, matched to the order and the receipt." },
  { href: '/services/sales-order-automation-ai-agents', t: 'Sales and purchase order automation', b: 'Customer orders into the ERP and purchase orders out to suppliers, each approved by a person.' },
  { href: '/services/ecommerce-erp-integration', t: 'Ecommerce ERP integration', b: 'The link between your online store and your ERP.' },
];

/** Small inline source links. Same visual pattern as the sibling service pages.
 *  Renders nothing when a claim is our own and has no source.
 *  py-1 makes each link 24.5px tall, which clears the 24px tap-target check
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
          className="inline-flex items-center gap-1.5 py-1 font-fj-mono text-[11px] font-semibold tracking-wide text-[#B23E13] hover:underline"
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

/** One row in the "rent a product" and "have agents built" lists. */
function FitList({ items, accent }: { items: ReadonlyArray<Fit>; accent: boolean }) {
  return (
    <ul className="mt-5 grid gap-3">
      {items.map((f) => (
        <li
          key={f.t}
          className={`rounded-xl border bg-white px-5 py-4 ${accent ? 'border-[#F05A28]/45' : 'border-fj-neutral-200'}`}
        >
          <div className="font-fj-display text-[15px] font-semibold text-fj-ink">{f.t}</div>
          <p className="mt-1 font-fj-body text-sm leading-relaxed text-fj-neutral-600">{f.b}</p>
          <SourceLinks ids={f.sources} />
        </li>
      ))}
    </ul>
  );
}

const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

export default function AiInventoryManagementAgentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(othersSchema) }} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <SiteHeader />

      <main className="min-h-screen bg-fj-cream text-fj-ink">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO */}
        <section className="relative overflow-hidden border-b border-fj-neutral-200 bg-fj-cream pt-12 pb-14 md:pt-14 md:pb-16">
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F05A28]/30 bg-white px-3 py-1.5">
                  <span className="font-fj-mono text-xs font-bold tracking-wide text-[#B23E13]">
                    AI INVENTORY MANAGEMENT &middot; UNITED STATES
                  </span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.2rem]">
                  AI inventory management agents, built on the stock data you already have.
                </h1>

                <p className="mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                  FactoryJet is a services company. We design, build and support AI agents that read stock and orders
                  in your ERP (the system that runs your purchasing, stock and accounts) or your store, tell the buyer
                  when an item reaches its reorder point, draft the purchase order for a person to approve, and keep
                  the store, the warehouse and the ERP on one count. The agents
                  are built for you and you own them. There is no FactoryJet inventory app to subscribe to. If a
                  planning product you can rent this week covers your case, we name it. FactoryJet quotes a fixed
                  price in writing after a short scoping call.
                </p>

                <div className="mt-6">
                  <HeroInlineForm
                    region="us"
                    source="services_ai_inventory_management_agents_hero"
                    service="AI Inventory Management Agents"
                    submitLabel="Scope my inventory agents"
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
                  <span>Demo on your own stock data before a contract</span>
                  <span>500+ businesses served</span>
                  <span>Founded 2014</span>
                  <span>Sources read {CHECKED_ON}</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
                  <figcaption className="font-fj-mono text-[11px] font-bold uppercase tracking-wider text-[#B23E13]">
                    What happens when one item runs low
                  </figcaption>
                  <ol className="mt-4 grid gap-2">
                    {HERO_FLOW.map((s) => (
                      <li
                        key={s.n}
                        className={`flex items-start gap-3 rounded-xl border-[1.5px] px-3.5 py-2.5 ${
                          s.who === 'agent' ? 'border-[#F05A28] bg-[#FFF4EE]' : 'border-[#14110F] bg-white'
                        }`}
                      >
                        <span className="mt-px font-fj-mono text-[11px] font-bold text-[#B23E13]">{s.n}</span>
                        <span className="font-fj-body text-[13px] leading-snug text-fj-ink">
                          <span className="font-semibold">{s.t}</span> {s.b}
                        </span>
                      </li>
                    ))}
                  </ol>
                  <ul className="mt-4 grid gap-2 font-fj-body text-[13px] leading-snug text-fj-ink">
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-[3px] h-3 w-3 flex-shrink-0 rounded-sm border-[1.5px] border-[#F05A28] bg-[#FFF4EE]" />
                      Orange rows are the agents we build for you.
                    </li>
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-[3px] h-3 w-3 flex-shrink-0 rounded-sm border-[1.5px] border-[#14110F] bg-white" />
                      Black-outline rows are your buyer and your warehouse team.
                    </li>
                  </ul>
                  <p className="mt-3 font-fj-body text-[13px] leading-snug text-fj-neutral-600">
                    No order reaches a supplier until a named person has approved it.
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
                AI inventory management means software reads your stock, sales and purchase records, tells the buyer
                when an item reaches its reorder point, drafts the purchase order and keeps every system showing the
                same count. FactoryJet builds that as AI agents on your own ERP or store, and supports them after
                launch. Your buyer approves every order.
              </p>
              <p className="mt-4 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                US manufacturers and trade businesses held $2,764.7 billion of inventory at the end of July 2026
                against $2,120.7 billion of sales that month, a ratio of 1.30, according to the Census Bureau. In US search data we pulled on {CHECKED_ON}, &ldquo;ai inventory management&rdquo; drew
                about 1,300 searches a month and &ldquo;ai inventory management software&rdquo; about 320. Many of
                those searchers want a product to switch on. If one fits, rent it. The next section says how to tell.
              </p>
              <SourceLinks ids={['census']} />
            </div>
          </div>
        </section>

        {/* 3. RENT A PRODUCT OR HAVE AGENTS BUILT */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Rent or build</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              When a planning product you rent is the better choice.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Read this part first. It may save you a project. Five signs point to renting and five to a build.
              Product and platform facts are from each maker&rsquo;s own page as read on {CHECKED_ON}, and the eight
              products we read are{' '}
              <a href="#inventory-products" className="font-semibold text-fj-ink underline underline-offset-4">
                listed further down
              </a>{' '}
              with their list prices.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <h3 className="font-fj-display text-xl font-semibold text-fj-ink">Rent a product when</h3>
                <FitList items={RENT_WHEN} accent={false} />
              </div>
              <div className="lg:col-span-6">
                <h3 className="font-fj-display text-xl font-semibold text-fj-ink">Have agents built when</h3>
                <FitList items={BUILD_WHEN} accent />
              </div>
            </div>

            <p className="mt-8 max-w-3xl font-fj-body text-base leading-relaxed text-fj-ink">
              Renting and building can sit side by side. A planning product produces the forecast, and an agent turns
              it into draft purchase orders inside your ERP.
            </p>
          </div>
        </section>

        {/* 4. WHAT YOUR ERP OR STORE ALREADY DOES */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Before anyone builds</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              What Shopify, QuickBooks, NetSuite, Odoo, ERPNext and SAP Business One already do.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Each card restates the maker&rsquo;s own manual or help page, as read on {CHECKED_ON}. If the feature described already does your job, switch it on and keep your money. The
              wider picture for ERPs is on{' '}
              <Link href="/services/erp-ai-agents" className="font-semibold text-fj-ink underline underline-offset-4">
                AI agents for ERP systems
              </Link>
              , and for QuickBooks stores on{' '}
              <Link
                href="/services/shopify-quickbooks-integration"
                className="font-semibold text-fj-ink underline underline-offset-4"
              >
                Shopify QuickBooks integration
              </Link>
              .
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
              {SYSTEMS.map((c) => (
                <li key={c.name} className={`rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 ${c.span}`}>
                  <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{c.name}</h3>
                  <div className="mt-1 font-fj-mono text-[11px] font-bold uppercase tracking-wider text-fj-neutral-600">
                    {c.kind}
                  </div>
                  <p className="mt-3 font-fj-body text-[15px] leading-relaxed text-fj-ink">{c.says}</p>
                  <SourceLinks ids={c.sources} />
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border-2 border-[#F05A28]/25 bg-fj-cream p-6 sm:p-8">
              <div className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                Read in the manuals on {CHECKED_ON}
              </div>
              <h3 className="mt-3 font-fj-display text-xl font-semibold text-fj-ink">
                Three things in these manuals that shape how an agent is built.
              </h3>
              <ul className="mt-4 grid max-w-3xl gap-3 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  The built-in reorder check runs on a clock. Odoo says its scheduler runs once a day by default,
                  though a confirmed sales order also triggers a rule. ERPNext creates its Material Request at 12
                  midnight. NetSuite recalculates the reorder points themselves once a week, on Sunday at midnight
                  unless you pick another day.
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  A draft order waits in a different place in each system. It is a request for quotation in Odoo, a
                  Material Request in ERPNext, a purchase order marked Pending Approval in NetSuite when approvals are
                  switched on, a draft purchase order in Shopify, and a purchase request or a draft in SAP Business
                  One. The agent writes to that place, so your approver finds it where they already look.
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  Shopify set an end date for its own planning app, and that date has passed. The help page for
                  Stocky, which forecast stock and suggested what to order, says the app will no longer be available
                  after August 31st, 2026.
                </li>
              </ul>
              <SourceLinks
                ids={['odooReorder', 'erpnextItem', 'nsPrefs', 'odooRfq', 'erpnextMr', 'nsPoApproval', 'shopifyPo', 'sapServiceLayer', 'shopifyStocky']}
              />
            </div>
          </div>
        </section>

        {/* 5. COMPARISON: three ways to automate inventory */}
        <ComparisonTable
          eyebrow="Three routes compared"
          headline="Built-in rules, a rented planning product, or agents built for you."
          lead="Each of the three is right for somebody. On the scoping call you hear which one fits your stock, and that includes the times the answer is a setting you already own or a product we do not sell."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer={`Product and platform facts are from each maker's own pages as read on ${CHECKED_ON}. Links are in the sources list below.`}
          scrollRegionLabel="Comparison of three ways to automate inventory management"
        />

        {/* 6. FIVE JOBS AND THE NEXT STEP */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Five jobs, then a sixth</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Five jobs the agents do, and the one that comes next.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Each card says what the agent does and quotes the manual of a system it works with. An agent here means
              software that uses an AI model to read records, apply your written rules and prepare a result for a
              person. Three terms come up throughout. Lead time is the number of days between placing an order and
              receiving it. Safety stock is the buffer you hold in case sales or deliveries surprise you. Committed
              stock is promised to customers on orders not yet shipped. Buying work that starts after the order is
              sent, such as supplier replies and promised dates, is on the{' '}
              <Link
                href="/services/ai-agent-development/procurement-supply-chain-agent"
                className="font-semibold text-fj-ink underline underline-offset-4"
              >
                procurement and supply chain agent
              </Link>{' '}
              page.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
              {JOBS.map((s) => (
                <div key={s.n} className={`rounded-2xl border border-fj-neutral-200 bg-fj-cream p-7 ${s.span}`}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white font-fj-mono text-sm font-bold text-[#B23E13]">
                    {s.n}
                  </div>
                  <h3 className="font-fj-display text-xl font-semibold text-fj-ink">{s.title}</h3>
                  <p className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{s.body}</p>
                  <ul className="mt-4 grid gap-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                        <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 rounded-xl border border-fj-neutral-200 bg-white px-4 py-3 font-fj-body text-sm leading-relaxed text-fj-ink">
                    <span className="font-semibold">From the manuals.</span> {s.note}
                  </p>
                  <SourceLinks ids={s.sources} />
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Three things stay with your people in every build: approving a purchase order, counting the stock and
              deciding what to stop selling. In the US search data we pulled on {CHECKED_ON}, &ldquo;ai demand
              forecasting&rdquo; and &ldquo;multichannel inventory management&rdquo; each drew about 140 searches a
              month.
            </p>
            <p className="mt-3 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
              Manual and help page notes are as published on {CHECKED_ON}.
            </p>
          </div>
        </section>

        <MidPageCTA
          headline="Tell us where your stock numbers live. We will say what to switch on, what to rent and what to build."
          sub="Name your ERP, your store and your warehouse system, and roughly how many items and locations you hold. You get back a short written view of what those systems already do, whether a planning product would cover the rest, and a fixed quote for anything worth building."
          label="Scope my inventory agents"
        />

        {/* 7. SIX SUMS BEHIND A REORDER */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">The arithmetic</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Six sums behind every reorder, with the working shown.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  An agent that flags and drafts is doing six small sums again and again. They are worth knowing,
                  because every wrong alert traces back to one of them.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Each example on the right is the software maker&rsquo;s own, from the manual page linked under it.
                </p>
                <div className="mt-6 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5">
                  <div className="font-fj-mono text-[11px] font-bold uppercase tracking-wider text-[#B23E13]">
                    One item, start to finish
                  </div>
                  <p className="mt-2 font-fj-body text-sm leading-relaxed text-fj-ink">
                    These figures are made up to show the method. An item sells 12 a day. The supplier takes 10 days
                    and you keep 5 days of buffer. Ten plus 5 is 15 days, and 15 times 12 gives a reorder point of
                    180. You have 150 available, so the item is flagged. A 30-day preferred level is 360 units. Take
                    away the 150 and the order is 210. In cases of 24 that rounds up to 9 cases, which is 216 units.
                  </p>
                </div>
              </div>

              <ol className="grid gap-3 lg:col-span-8">
                {SUMS.map((k) => (
                  <li
                    key={k.n}
                    className="grid grid-cols-1 gap-2 rounded-2xl border border-fj-neutral-200 bg-fj-cream px-5 py-4 sm:grid-cols-[190px_1fr] sm:gap-5"
                  >
                    <div>
                      <div className="font-fj-mono text-[11px] font-bold uppercase tracking-wider text-[#B23E13]">{k.n}</div>
                      <div className="mt-1 font-fj-display text-base font-semibold text-fj-ink">{k.name}</div>
                    </div>
                    <div>
                      <p className="font-fj-body text-[15px] font-semibold leading-relaxed text-fj-ink">{k.sum}</p>
                      <p className="mt-1 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{k.example}</p>
                      <SourceLinks ids={k.sources} />
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 8. WHERE IT BREAKS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">The traps</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Eight places an inventory agent project breaks.
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              We look for these on the scoping call. Every one rests on a page linked beneath it, so you can read the
              source yourself.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {BREAKS.map((l) => (
                <li key={l.t} className="rounded-xl border border-fj-neutral-200 border-l-[3px] border-l-[#F05A28] bg-white px-5 py-4">
                  <div className="font-fj-display text-[15px] font-semibold text-fj-ink">{l.t}</div>
                  <p className="mt-1 font-fj-body text-sm leading-relaxed text-fj-neutral-600">{l.b}</p>
                  <SourceLinks ids={l.sources} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 9. OUR EXPERIENCE. No client is named on this page. */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Our experience</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              What we have built on ERPs and stores, stated plainly.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Founded in 2014, FactoryJet has served more than 500 businesses. On inventory work, the first thing you
              see is a working version on your own stock data.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
              {EXPERIENCE.map((w) => (
                <li key={w.t} className={`flex flex-col rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 ${w.span}`}>
                  <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{w.t}</h3>
                  <div className="mt-1 font-fj-mono text-[11px] font-bold uppercase tracking-wider text-fj-neutral-600">
                    {w.kind}
                  </div>
                  <p className="mt-3 font-fj-body text-[15px] leading-relaxed text-fj-ink">{w.what}</p>
                  <Link
                    href={w.href}
                    className="mt-4 inline-flex items-center gap-1.5 py-1 font-fj-body text-sm font-semibold text-[#B23E13] hover:underline"
                  >
                    {w.cta}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-4 w-4">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 10. WHO THIS IS FOR */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Who this is for</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Built for teams that reorder from a spreadsheet today.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  The goods differ and the routine does not. Someone exports stock on a Monday, sorts by what looks
                  low, and types purchase orders one supplier at a time.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  For the selling side of a store, see{' '}
                  <Link
                    href="/services/ecommerce-ai-agents"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    AI agents for ecommerce stores
                  </Link>
                  . For quoting and shop-floor paperwork, see{' '}
                  <Link
                    href="/services/manufacturing-ai-agents"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    manufacturing AI agents
                  </Link>
                  .
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

        {/* 11. PROCESS */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Process</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  How we design, build and support inventory agents.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Six steps. What you already own is checked before anything is built, and the rules are on paper
                  before any code. Once the agents are live,{' '}
                  <Link
                    href="/services/ai-agent-monitoring"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    AI agent monitoring and support
                  </Link>{' '}
                  covers the watching and re-testing. Agents for other jobs are on{' '}
                  <Link
                    href="/services/ai-agent-development"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    AI agent development
                  </Link>
                  .
                </p>
                <img
                  src={`${IMG}/sorting-samples-three-groups.webp`}
                  alt="A woman with a silver bob in a navy blazer and a bearded man in a mustard sweater, seen from behind, sort small white boxes into three groups on a pale wood table"
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

        {/* 12. EIGHT INVENTORY PRODUCTS, WITH LIST PRICES */}
        <section id="inventory-products" className="border-t border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">The rent option</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Eight inventory products, with the prices their own pages list.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  FactoryJet wrote this list and sells none of these products. Every entry was read on the
                  maker&rsquo;s own pricing page on {CHECKED_ON} and restates what that page says.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Six of the eight show a price and two quote on request. The first four are planning products that
                  sit on a store or an ERP. The last four are whole inventory systems. The order is not a ranking. A
                  SKU, a word several of these pages use, is one stock item.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  Built agents differ in reach. They work across every system you already run, on rules your own
                  buyer wrote.
                </p>
              </div>
              <ol className="grid gap-4 lg:col-span-8">
                {OTHERS.map((o, i) => (
                  <li key={o.name} className="flex items-start gap-4 rounded-2xl border border-fj-neutral-200 bg-white p-6">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-fj-cream font-fj-mono text-sm font-bold text-[#B23E13]">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{o.name}</h3>
                      <div className="mt-1 font-fj-mono text-[11px] font-bold uppercase tracking-wider text-fj-neutral-600">
                        {o.focus}
                      </div>
                      <p className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-ink">{o.says}</p>
                      <SourceLinks ids={[o.source]} />
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 13. RELATED SERVICES */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Next to this page</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Related AI agent and integration services.
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

        {/* 14. SOURCES + REVIEW LINE */}
        <section className="bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Method</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Sources, read on {CHECKED_ON}.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Every product feature, list price, default setting and formula on this page comes from the{' '}
                  {SOURCE_KEYS.length} pages listed here, read that day. Most answered a plain web request.
                  Intuit&rsquo;s QuickBooks page, NetSuite&rsquo;s ABC guide and StockTrim&rsquo;s price selector
                  were read in a browser. Makers change these pages, so open the link before you act on a figure.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Search counts are DataForSEO monthly averages for the US. The Census figures are from the release
                  dated September 16, 2026, which covers July.
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

        {/* 15. FAQ */}
        <FAQ
          eyebrow="AI inventory management FAQ"
          headline="AI inventory management questions, answered plainly."
          lead={`What buyers, operations leads and store owners ask before automating stock and reordering. Product and platform answers are from each maker's own pages as read on ${CHECKED_ON}.`}
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 16. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="AI inventory management agents"
          headline="Start with the stock data you have. Add agents your buyer can check."
          sub="Send the systems you run and a rough item count. You get a written view of what to switch on, what to rent and what is worth building, then a first version on your own data."
          primaryCta={{ label: 'Scope my inventory agents', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="Demo on your own stock data before a contract. Fixed quote in writing. You own the code."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
