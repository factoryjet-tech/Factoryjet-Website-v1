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
import { twinAlternates } from '@/data/hreflangMap';
import StickyCtaLabel from '@/components/v2/StickyCtaLabel';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/sales-order-automation-ai-agents, built 2026-10-11.

   Why this page exists: US monthly searches measured 2026-10-11 (DataForSEO,
   location 2840): "purchase order automation" 110, "automated purchase
   orders" 110, "automated order processing" 50, "order entry automation" 40,
   "ai order processing" 40, "order automation" 40, "order management
   automation" 40, "sales order automation" 30, "sales order processing
   automation" 30, "ai order management" 30, "po automation" 30, "ai order
   entry" 20. One buyer question from the 9 Oct 2026 assistant sweep (which
   order management and commerce vendors offer AI agents for order routing and
   customer service) is the first FAQ, in the buyer's own words.

   The page covers both directions: a customer's purchase order arriving by
   email, PDF or EDI and becoming a sales order in the ERP, and the buyer's
   own purchase orders going out to suppliers.

   Truth rules for anyone editing this file:
   1. Every third-party fact (ERP behavior, product features, list prices, EDI
     document names) was read on that party's own page on 2026-10-11 and links
     to it through the SRC map below. The ledger with the quoted words is in
     the build notes (sources.json). Intuit's developer and QuickBooks pages
     gave no response to a plain web request and were read in a browser.
     Odoo's pricing page was shown in another currency, so no Odoo price is
     used.
   2. No FactoryJet prices. The dollar figures are (a) list prices of named
     off-the-shelf products from each maker's own page and (b) two market
     ranges for a BUILD inside one cost FAQ answer (ProductCrafters, Layer3
     Labs).
   3. Rule of 2026-10-11 (Bhavesh): nothing on this page says what a custom
     agent costs to run or look after. Ongoing support is described only as:
     build and ongoing support quoted as fixed prices in writing, and
     FactoryJet can keep managing the servers, the AI models, the API connections
     and the maintenance.
   4. Nothing here says where the FactoryJet team is or is not.
   5. The experience claim is Bhavesh's own statement of 2026-10-09 (Odoo,
     NetSuite, SAP Business One, ERPNext and custom ERPs; RFQ automation,
     daily bookkeeping, purchase and sales order generation) plus EDI
     integration and punchout catalogs, confirmed 2026-10-11. No client is
     named and no result is claimed. Partner status is not raised. No
     compliance status is claimed.
   6. The twelve products restate each maker's own page. We sell none of them.
   7. Mirrors /services/accounts-payable-automation for components, props and
     schema only. No sentence, FAQ, table row or heading is reused from it.

   Schema: WebPage + Service + FAQPage + ItemList + BreadcrumbList.
   Organization is rendered once sitewide by src/app/layout.tsx and referenced
   here by @id. The FAQPage mainEntity is generated from the exact FAQ_ITEMS
   array the visible <FAQ> component renders. There is no second array.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/sales-order-automation-ai-agents';
const PAGE_TITLE = 'Sales & Purchase Order Automation AI Agents | FactoryJet';
const PAGE_DESC =
  'We design, build and support AI agents that turn emailed, PDF and EDI purchase orders into ERP sales orders, and draft your purchase orders to suppliers.';
const PAGE_PUBLISHED = '2026-10-11';
const PAGE_MODIFIED = '2026-10-31';
const CHECKED_ON = '11 Oct 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/sales-order-automation-ai-agents';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'sales order automation',
    'purchase order automation',
    'automated purchase orders',
    'automated order processing',
    'order entry automation',
    'ai order processing',
    'ai order entry',
    'ai order management',
    'order automation',
    'order management automation',
    'sales order processing automation',
    'po automation',
    'netsuite sales order automation',
    'odoo purchase order automation',
    'quickbooks purchase order automation',
    'edi order automation',
  ],
  alternates: {
    canonical: CANONICAL_URL,
    languages: twinAlternates['sales-order-automation-ai-agents'],
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
        alt: 'FactoryJet, sales order and purchase order automation built as AI agents on your own ERP',
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
  { name: 'Sales and Purchase Order Automation', url: CANONICAL_URL },
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
  name: 'Sales Order and Purchase Order Automation',
  serviceType:
    'Sales order automation, purchase order automation, AI order entry agent design and build, reading customer purchase orders from email, PDF and EDI, purchase order drafting for suppliers, integration with QuickBooks, NetSuite, Odoo, SAP Business One, ERPNext and custom ERPs, EDI integration, support after launch',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    "FactoryJet designs, builds, tests and supports AI agents for sales orders and purchase orders on the client's own ERP. One agent reads each customer purchase order that arrives by email, PDF or EDI, matches the customer and the items, checks price, stock and credit terms, and drafts the sales order in QuickBooks, NetSuite, Odoo, SAP Business One, ERPNext or a custom ERP. A second agent drafts purchase orders to suppliers from stock levels and open sales orders, and follows up the confirmation. The client's people approve every order. The client owns what is built.",
  url: CANONICAL_URL,
};

/* ── Sources. One map, used by every inline source link (the `short` label) AND
   by the visible "Sources" list near the foot of the page (the full `label`).
   Each URL was opened on 2026-10-11 and the supporting sentence read before the
   claim was written. The ledger with the quoted words is in the build notes. ── */
const NS = 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help';
const ODOO = 'https://www.odoo.com/documentation/20.0';
const QBAPI = 'https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities';

const SRC = {
  x12: {
    short: 'X12: transaction sets',
    label: 'X12: Transaction Sets (850 Purchase Order, 855, 856, 810, 860 and 865)',
    url: 'https://x12.org/products/transaction-sets',
  },
  krogerEdi: {
    short: 'Kroger: EDI portal',
    label: 'The Kroger Co.: EDI Enterprise portal (requirements, guidelines and purchase order terms)',
    url: 'https://edi.kroger.com/EDIPortal/',
  },
  qbPoApi: {
    short: 'Intuit Developer: PurchaseOrder',
    label: 'Intuit Developer: QuickBooks Online API reference, PurchaseOrder (read in a browser)',
    url: `${QBAPI}/purchaseorder`,
  },
  qbEstimateApi: {
    short: 'Intuit Developer: Estimate and the entity list',
    label: 'Intuit Developer: QuickBooks Online API reference, Estimate and the list of all entities (read in a browser)',
    url: `${QBAPI}/estimate`,
  },
  qbPo: {
    short: 'Intuit: QuickBooks purchase orders',
    label: 'Intuit QuickBooks: Purchase Order Software to Track POs (read in a browser)',
    url: 'https://quickbooks.intuit.com/accounting/purchase-orders/',
  },
  qbEnterprise: {
    short: 'Intuit: QuickBooks Desktop Enterprise',
    label: 'Intuit QuickBooks: QuickBooks Desktop Enterprise (read in a browser)',
    url: 'https://quickbooks.intuit.com/desktop/enterprise/',
  },
  nsSo: {
    short: 'Oracle: sales orders',
    label: 'Oracle NetSuite Help Center: Sales Orders',
    url: `${NS}/chapter_N1215966.html`,
  },
  nsSoApprove: {
    short: 'Oracle: approving sales orders',
    label: 'Oracle NetSuite Help Center: Approving Sales Orders',
    url: `${NS}/section_N1218788.html`,
  },
  nsDropShip: {
    short: 'Oracle: drop shipment purchases',
    label: 'Oracle NetSuite Help Center: Drop Shipment and Special Order Purchases',
    url: `${NS}/section_N2409296.html`,
  },
  nsPoMgmt: {
    short: 'Oracle: purchase order management',
    label: 'Oracle NetSuite Help Center: Purchase Order Management',
    url: `${NS}/section_N2399585.html`,
  },
  nsPoApproval: {
    short: 'Oracle: purchase order approval workflow',
    label: 'Oracle NetSuite Help Center: Purchase Order Approval Workflow SuiteApp',
    url: `${NS}/section_N2398841.html`,
  },
  nsApprovalRouting: {
    short: 'Oracle: approval routing',
    label: 'Oracle NetSuite Help Center: Using the Approval Routing Feature',
    url: `${NS}/section_N2395258.html`,
  },
  odooQuotes: {
    short: 'Odoo: create quotations',
    label: 'Odoo 20.0 documentation: Create quotations',
    url: `${ODOO}/applications/sales/sales/sales_quotations/create_quotations.html`,
  },
  odooRfq: {
    short: 'Odoo: requests for quotation',
    label: 'Odoo 20.0 documentation: Requests for quotation',
    url: `${ODOO}/applications/inventory_and_mrp/purchase/manage_deals/rfq.html`,
  },
  odooReorder: {
    short: 'Odoo: reordering rules',
    label: 'Odoo 20.0 documentation: Reordering rules',
    url: `${ODOO}/applications/inventory_and_mrp/inventory/warehouses_storage/replenishment/reordering_rules.html`,
  },
  odooEdi: {
    short: 'Odoo: EDI order import',
    label: 'Odoo 20.0 documentation: EDI purchase-to-sales order import',
    url: `${ODOO}/applications/inventory_and_mrp/purchase/advanced/edi.html`,
  },
  odooApi: {
    short: 'Odoo: external JSON-2 API',
    label: 'Odoo 20.0 documentation: External JSON-2 API',
    url: `${ODOO}/developer/reference/external_api.html`,
  },
  sapServiceLayer: {
    short: 'SAP: Service Layer API reference',
    label: 'SAP Help Portal: SAP Business One Service Layer API Reference',
    url: 'https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html',
  },
  erpnextSo: {
    short: 'ERPNext manual: Sales Order',
    label: 'Frappe: ERPNext user manual, Sales Order',
    url: 'https://docs.frappe.io/erpnext/user/manual/en/sales-order',
  },
  erpnextPo: {
    short: 'ERPNext manual: Purchase Order',
    label: 'Frappe: ERPNext user manual, Purchase Order',
    url: 'https://docs.frappe.io/erpnext/user/manual/en/purchase-order',
  },
  frappeRest: {
    short: 'Frappe: REST API',
    label: 'Frappe Framework documentation: REST API',
    url: 'https://docs.frappe.io/framework/user/en/api/rest',
  },
  xeroPo: {
    short: 'Xero: purchase orders',
    label: 'Xero US: Purchase Order Software for Small Businesses',
    url: 'https://www.xero.com/us/accounting-software/purchase-orders/',
  },
  conexiom: {
    short: 'Conexiom',
    label: 'Conexiom: Intelligent Order Automation for Manufacturing and Distribution',
    url: 'https://conexiom.com/',
  },
  rossum: {
    short: 'Rossum: pricing',
    label: 'Rossum: Pricing',
    url: 'https://rossum.ai/pricing/',
  },
  parseur: {
    short: 'Parseur: pricing',
    label: 'Parseur: Plans and Prices',
    url: 'https://parseur.com/pricing',
  },
  ymeadows: {
    short: 'Y Meadows',
    label: 'Y Meadows: AI Order Entry and Customer Operations Automation',
    url: 'https://ymeadows.com/',
  },
  beamOrder: {
    short: 'Beam AI: Order Management Agent',
    label: 'Beam AI: Order Management AI Agent',
    url: 'https://beam.ai/agents/order-management-agent/',
  },
  beamPricing: {
    short: 'Beam AI: pricing',
    label: 'Beam AI: Costs and Pricing for AI Agents',
    url: 'https://beam.ai/pricing',
  },
  precoro: {
    short: 'Precoro: pricing',
    label: 'Precoro: Pricing (Procure to Pay plans)',
    url: 'https://precoro.com/pricing',
  },
  orderful: {
    short: 'Orderful: pricing',
    label: 'Orderful: Pricing',
    url: 'https://www.orderful.com/pricing',
  },
  sps: {
    short: 'SPS Commerce: Fulfillment',
    label: 'SPS Commerce: Fulfillment (EDI)',
    url: 'https://www.spscommerce.com/products/fulfillment/',
  },
  fluentNews: {
    short: 'Fluent Commerce: AI agent announcement',
    label: 'Fluent Commerce: press release of June 16, 2026, AI agent for order sourcing',
    url: 'https://fluentcommerce.com/news/fluent-commerce-introduces-ai-agent-to-make-order-sourcing-logic-easier-to-understand-configure-and-optimize/',
  },
  fluentMcp: {
    short: 'Fluent Commerce docs: MCP server',
    label: 'Fluent Commerce documentation: Fluent Order Management MCP Server (pilot)',
    url: 'https://docs.fluentcommerce.com/landing/fluent-order-management-mcp-server',
  },
  kibo: {
    short: 'Kibo: KIBO AI',
    label: 'Kibo Commerce: KIBO AI and the KIBO Agentic Framework',
    url: 'https://kibocommerce.com/kibo-ai/',
  },
  sfOm: {
    short: 'Salesforce: Order Management',
    label: 'Salesforce: Ecommerce Order Management System',
    url: 'https://www.salesforce.com/commerce/order-management/',
  },
  sfOmPricing: {
    short: 'Salesforce: Order Management pricing',
    label: 'Salesforce: Order Management Pricing',
    url: 'https://www.salesforce.com/commerce/order-management/pricing/',
  },
  pipe17: {
    short: 'Pipe17',
    label: 'Pipe17: order operations platform',
    url: 'https://pipe17.com/',
  },
  pipe17Pricing: {
    short: 'Pipe17: pricing',
    label: 'Pipe17: Plans and Pricing',
    url: 'https://pipe17.com/pricing/',
  },
  fulfillmenttools: {
    short: 'fulfillmenttools: order routing',
    label: 'fulfillmenttools: Advanced Order Routing',
    url: 'https://fulfillmenttools.com/products/advanced-order-routing',
  },
  productCrafters: {
    short: 'ProductCrafters cost guide, 2026',
    label: 'ProductCrafters: AI Agent Development Cost, $5K to $180K+ (2026)',
    url: 'https://productcrafters.io/blog/how-much-does-it-cost-to-build-an-ai-agent/',
  },
  layer3: {
    short: 'Layer3 Labs agency cost guide, 2026',
    label: 'Layer3 Labs: AI Automation Agency Cost (2026), Real Pricing Guide',
    url: 'https://www.layer3labs.io/roi/ai-automation-agency-cost',
  },
} as const;

type SrcKey = keyof typeof SRC;

/* ── FAQ. Single array, rendered visibly below AND used to build the FAQPage
   JSON-LD. Never hand-duplicate this list near the ld+json block.
   The first question is the buyer question from the 9 Oct 2026 sweep, in the
   buyer's own words. Nine more come from the question boxes Google showed for
   this page's searches on 2026-10-11 (DataForSEO, US, location 2840; career
   and general AI questions left out). The rest come from the page's own
   keywords. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'vendors', label: 'Vendors, software and cost' },
  { key: 'basics', label: 'Order automation basics' },
  { key: 'systems', label: 'QuickBooks, NetSuite, Odoo and more' },
  { key: 'edi', label: 'EDI and email orders' },
  { key: 'ai', label: 'AI and accuracy' },
  { key: 'working', label: 'Working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── Vendors, software and cost ───────────────────────────────────
  {
    category: 'vendors',
    question:
      'Which order management and commerce vendors offer AI agents that automate order routing and customer service tasks?',
    answer:
      "Several do, on their own platforms. Salesforce Order Management lists Agentic Order Routing and Agentic Order Support. Fluent Commerce announced an AI agent for order sourcing on June 16, 2026, and documents a pilot server that feeds order status to customer service agents. Kibo describes an agentic framework across commerce and order management. Pipe17 says its AI routes each order to the best fulfillment location, and fulfillmenttools says AI agents weigh every fulfillment option. Each one works inside that vendor's product. FactoryJet builds custom agents on the ERP or store you already run.",
  },
  {
    category: 'vendors',
    question: 'What is the best purchase order software?',
    answer:
      "It depends on what is broken. If you need requests, approvals and receipts, look at purchasing software. Precoro lists its Core plan from $499 a month, billed annually, with purchase orders, receipts and automated approvals. If you only need to create and send purchase orders, QuickBooks and Xero both include them. If the hard part is deciding what to buy from live sales orders and stock, that is a job for your ERP's reorder rules or a built agent. No single product is best for every firm.",
  },
  {
    category: 'vendors',
    question: 'How much does order automation software cost?',
    answer:
      'List prices we read on 11 Oct 2026 run from free tiers to five figures a year. Parseur lists $129 a month for 1,000 pages. Beam AI lists a Pro plan at $50 a month for 200 tasks. Orderful lists Web EDI at $189 a month per trading partner. Precoro starts at $499 a month, billed annually. Rossum starts at $18,000 per year. Conexiom, Kibo, Pipe17, Salesforce Order Management and SPS Commerce quote on request. Ask each maker what counts as an order, a page or a task before you compare.',
  },
  {
    category: 'vendors',
    question: 'How much does it cost to have a custom order agent built?',
    answer:
      'Published market ranges for a build are wide. ProductCrafters puts AI agent development at $5,000 to $180,000 or more in its 2026 cost guide. Layer3 Labs puts a single-workflow automation build at $5,000 to $15,000 and a multi-workflow project at $15,000 to $50,000. Both directions across two systems is a bigger job than one order mailbox on one ERP. FactoryJet gives you two fixed prices in writing after a short scoping call, one for the build and one for ongoing support.',
  },
  {
    category: 'vendors',
    question: 'Should we buy order automation software or have an agent built?',
    answer:
      'Buy when your orders arrive in a few steady layouts, when you need one job done such as purchasing approvals or warehouse routing, or when a customer requires EDI and a network solves it. Have agents built when every customer orders differently, when the checks depend on prices, stock and credit inside your ERP, or when sales orders and purchase orders need to talk to each other. The two also combine. An EDI network can carry your largest accounts while an agent handles the emailed orders.',
  },

  // ── Order automation basics ──────────────────────────────────────
  {
    category: 'basics',
    question: 'What does "order processing" mean?',
    answer:
      'Order processing is everything between a customer saying yes and the goods leaving your building. The order is received, entered as a sales order, checked for price, stock and credit, approved, picked, packed, shipped and invoiced. Order automation usually means the first half, from receiving the order to an approved sales order in the ERP. That is where the retyping happens, and it is the half an AI agent can draft for a person to approve.',
  },
  {
    category: 'basics',
    question: 'What is the difference between a PO and a sales order?',
    answer:
      "They are two views of the same deal. A purchase order, or PO, is written by the buyer and says what they want, at what price and when. A sales order is written by the seller and records the commitment to supply it. Oracle's NetSuite help describes a sales order as a transaction that records a commitment to sell items or services to a customer. Your customer's PO becomes your sales order, and your own PO becomes your supplier's sales order.",
  },
  {
    category: 'basics',
    question: 'What is sales order automation?',
    answer:
      'It is software that turns an incoming customer order into a sales order in your ERP with as little retyping as possible. Older tools read fixed templates. Current ones use AI to read any layout, then match the customer and the items, check price and stock, and write a draft. The useful measure is how many orders reach your approver needing no correction. A person still approves the order, and anything unusual goes to them first.',
  },
  {
    category: 'basics',
    question: 'How can I automate purchase orders?',
    answer:
      "In four steps. First, switch on what your ERP has. Odoo raises a request for quotation when a reordering rule is triggered, and NetSuite creates a purchase order for a drop-ship line when the sales order is approved. Second, set approval limits so each order goes to the right person. Third, send approved orders to suppliers by email or EDI from the ERP. Fourth, add an agent for what the rules miss, such as buying for a one-off job or reading the supplier's confirmation.",
  },
  {
    category: 'basics',
    question: 'Can AI do order entry?',
    answer:
      'Yes, as a first draft. An AI model can read a purchase order in almost any layout. An agent can then match the customer and the part numbers, check price and stock in your ERP and write the sales order as a draft. What it should not do is confirm an order nobody has looked at. In the agents we build, every order waits for a person at first, and you choose later which routine repeat orders can skip that step.',
  },
  {
    category: 'basics',
    question: 'What are the key components of a sales order?',
    answer:
      "The header holds the customer, their PO number, the bill-to and ship-to addresses, payment terms and the date they need the goods. Each line holds an item, a quantity, a unit and a price. Then come freight, tax and any notes, such as ship complete. ERPNext's manual lists the same parts: items, prices, quantities, delivery dates, shipping details and terms. These are the fields an agent reads from the customer's purchase order and checks before it writes the draft.",
  },
  {
    category: 'basics',
    question: 'What are the four types of purchase orders?',
    answer:
      "The usual four are standard, planned, blanket and contract. A standard purchase order is one order for known items, price and date. A planned order fixes the items and price and leaves delivery dates open. A blanket order agrees a price for repeat releases over a period. A contract order sets terms before any items are named. ERPs use their own names. NetSuite's help lists blanket purchase orders and purchase contracts, and SAP Business One's Service Layer lists BlanketAgreements.",
  },

  // ── QuickBooks, NetSuite, Odoo and more ──────────────────────────
  {
    category: 'systems',
    question: 'Can QuickBooks do purchase orders?',
    answer:
      "Yes. Intuit's own page says QuickBooks creates purchase orders with custom PO numbers and copies the items, quantities and rates into a bill once the order is complete. In the QuickBooks Online API a purchase order is a non-posting transaction with a status of Open or Closed. The gap is on the selling side. Intuit's API reference lists estimates and invoices and no sales order, so on QuickBooks Online an agent holds a customer's order as an estimate until it is ready to invoice.",
  },
  {
    category: 'systems',
    question: 'Does Xero have a PO system?',
    answer:
      "Yes. Xero's US site says you can create and send purchase orders online, then convert them into bills, and that user roles control who can approve them. A new purchase order can be saved or submitted for approval. We build Xero integrations. An agent working with Xero drafts the purchase order and leaves it for your approver, the same way it does on an ERP.",
  },
  {
    category: 'systems',
    question: 'Can an AI agent create sales orders in NetSuite?',
    answer:
      "Yes. The agent creates the sales order through NetSuite's API and saves it as Pending Approval. Oracle's help says an order in that status must be approved by someone with the right permissions before NetSuite can process it, and that a sales order does not affect your accounts until items ship. Plan for two limits. A transaction can hold up to 500 lines, and a partly fulfilled order cannot be set back to Pending Approval.",
  },
  {
    category: 'systems',
    question: 'How does order automation work on Odoo?',
    answer:
      "Odoo already models both directions. Confirming a quotation makes it a sales order, and confirming a request for quotation makes it a purchase order. Reordering rules raise RFQs when stock runs low. An agent adds the reading. It turns a customer's emailed order into a quotation with the right customer, items and prices, ready to confirm. Check your plan first. Odoo's documentation says access to data through its external API is only available on Custom plans.",
  },
  {
    category: 'systems',
    question: 'Does it work with SAP Business One?',
    answer:
      "Yes. SAP Business One has an API called the Service Layer. SAP's reference lists Orders, which it describes as a commitment from a customer or lead to buy, and PurchaseOrders, a document used to request items or services from a vendor. It also lists Drafts and ApprovalRequests. So an agent can write a sales order or a purchase order as a draft and leave it in your normal approval flow. SAP says OData Version 4 is the primary protocol as of feature package 2405.",
  },
  {
    category: 'systems',
    question: 'Can you build this on ERPNext or a custom ERP?',
    answer:
      "Yes to both. ERPNext keeps a saved sales order in Draft until someone selects Submit, which is a natural place for an agent's work to wait. Frappe's REST API reaches sales orders and purchase orders with an API key and secret. A custom ERP takes one extra step at the start. We list what it exposes, whether that is an API, a database or file imports, and build to that. FactoryJet has worked on ERPNext and on custom ERPs.",
  },

  // ── EDI and email orders ─────────────────────────────────────────
  {
    category: 'edi',
    question: 'When does an order arrive as EDI and when as an email?',
    answer:
      "It follows the customer's size and systems. Large retailers, distributors and manufacturers with many suppliers usually ask for EDI, where their system sends a structured order, the X12 850 in the US, straight to yours. Smaller customers send whatever their own software produces, such as a PDF, a spreadsheet or a typed email. Most sellers get both. EDI orders are already structured, so they skip the reading step. Email orders need an AI model to read them. Both need the same checks before they become sales orders.",
  },
  {
    category: 'edi',
    question: 'Do we still need an agent if our big customers already use EDI?',
    answer:
      'Often, yes, for two reasons. First, EDI covers only the customers who use it, and the rest still email. Second, an EDI order can still be wrong for you. The price may be out of date, the item discontinued or the date impossible. An EDI network delivers the message and leaves the decision to you. The agent applies your rules to EDI orders and email orders alike, and sends the exceptions to a person.',
  },
  {
    category: 'edi',
    question: 'Can the agent send order acknowledgments?',
    answer:
      'Yes. Once your team approves the sales order, the agent prepares the acknowledgment from it, so the customer sees the items, prices and ship date you have accepted. By email that is a confirmation with the order attached. By EDI it is the 855, which X12 titles Purchase Order Acknowledgment. Where a line differs from what the customer asked for, such as a later date, the acknowledgment says so plainly, and a person releases it.',
  },
  {
    category: 'edi',
    question: 'Can you connect EDI to our ERP?',
    answer:
      'Yes. EDI integration is work FactoryJet does. Usually an EDI network such as SPS Commerce or Orderful handles the connection to each trading partner, and we build the link between that network and your ERP, with the same checks an emailed order gets. Orderful lists an Integrated plan starting at $399 a month, and SPS Commerce quotes on request. Punchout catalogs are part of the same work.',
  },

  // ── AI and accuracy ──────────────────────────────────────────────
  {
    category: 'ai',
    question: 'How accurate is AI at reading purchase orders?',
    answer:
      "It depends on your customers' documents, so we measure it on yours. Ahead of launch the agent reads a batch of orders you have already entered, and each field is scored against what your team keyed. Clean PDFs from a customer's ERP are the easy case. Handwriting and faxes need more review. Makers publish their own figures, and Beam AI's page states 99.8%. The safer question is what happens to the fields the agent is unsure of. In our builds they are marked for a person.",
  },
  {
    category: 'ai',
    question: 'What happens when the agent is unsure, or the price on the order is wrong?',
    answer:
      'The order stops and a person sees why. An item the agent cannot place, a price that differs from your price list, a customer on credit hold or a date you cannot meet each puts the draft in a review list, with the reason beside it and the original order attached. Your team corrects it, and the correction is kept, so the same customer part number is recognized next time. Nothing is confirmed to the customer until someone approves it.',
  },
  {
    category: 'ai',
    question: 'Will the agent send purchase orders to suppliers by itself?',
    answer:
      'No, unless you decide it should for named cases. By default the agent drafts each purchase order and your buyer approves it inside the limits your ERP already holds. After the agent has run beside your team for a while, you may choose to let routine repeat orders under a set value go without review. That is your decision, it is written down, and it can be reversed. New suppliers, new items and anything over the limit always go to a person.',
  },

  // ── Working with us ──────────────────────────────────────────────
  {
    category: 'working',
    question: 'How long does it take to build an order agent?',
    answer:
      'A pilot on one narrow job, such as one order mailbox writing draft sales orders, usually takes two to four weeks. A full production agent, including permissions, logging, approvals and monitoring, usually takes six to twelve weeks. Adding the purchasing side, EDI or a second system puts a project toward the longer end. At the start a person approves every draft, which lets you judge the agent on live orders before you give it more to do.',
  },
  {
    category: 'working',
    question: 'Can we see it working on our own orders before we sign?',
    answer:
      "Yes. You see working software running on your own data before you sign anything. We take a batch of purchase orders your customers have already sent and let a first version of the agent read them. Then you put each draft next to the sales order your team entered and check the part numbers it mapped and the prices it queried. That review is also where we say so if your ERP's own tools or a rented product would cover the job.",
  },
  {
    category: 'working',
    question: 'Who owns the agents and the code?',
    answer:
      'You do. The agents are built for you, and the code, the written rules, the part-number list and the test orders are yours. You can have them run in a cloud account that belongs to you. Day to day, FactoryJet can keep managing the servers, the AI models, the API connections and the maintenance, so that work never lands on your team. Should you later bring the work in-house or hand it to another firm, all of it moves with you.',
  },
  {
    category: 'working',
    question: 'Where does our order data go?',
    answer:
      'Orders are kept where they are today, in your mailbox and your ERP. Reading one means passing it to an AI model. You get a written list of that provider and every other system your data passes through before the build starts, so your IT lead can review it. Inside the ERP the agent has a user of its own. That user can read customers, items, prices and stock and write drafts. It cannot approve an order or change a price.',
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

/* ── Hero figure: one order coming in and one going out. Orange rows are the
   agents we build. Black-outline rows are the client's people. ── */
const HERO_FLOW: ReadonlyArray<{ n: string; t: string; b: string; who: 'agent' | 'person' }> = [
  { n: '01', t: 'Arrives.', b: "A customer's purchase order by email, PDF, spreadsheet, portal or EDI.", who: 'agent' },
  { n: '02', t: 'Read.', b: 'Customer, PO number, ship-to, each line, quantity, price and the date they want it.', who: 'agent' },
  { n: '03', t: 'Checked.', b: 'Your part numbers, your price for that customer, stock on hand and credit terms.', who: 'agent' },
  { n: '04', t: 'Drafted.', b: 'A sales order in your ERP, waiting as a draft with the original attached.', who: 'agent' },
  { n: '05', t: 'Approved.', b: 'By your order desk. Anything the agent flagged sits at the top.', who: 'person' },
  { n: '06', t: 'Reordered.', b: 'When stock is short, the agent drafts the purchase order to your supplier.', who: 'agent' },
  { n: '07', t: 'Sent.', b: 'Your buyer approves it and it goes out. The agent then watches for the confirmation.', who: 'person' },
];

/* ── When to rent a product and when to have agents built. Product and ERP
   facts are from each maker's own page as read on 2026-10-11. ── */
type Fit = { t: string; b: string; sources: ReadonlyArray<SrcKey> };

const BUY_WHEN: ReadonlyArray<Fit> = [
  {
    t: 'Your orders arrive in a handful of fixed layouts',
    b: 'A document reader does well when the same few customers send the same form every time. Parseur prices by pages a month and lists a free tier of 20 pages.',
    sources: ['parseur'],
  },
  {
    t: 'You only need the purchasing side',
    b: 'Requests, approvals, purchase orders and receipts, with no customer orders involved, is what purchasing software sells. Precoro lists all four in its Core plan. QuickBooks and Xero each include plain purchase orders.',
    sources: ['precoro', 'qbPo', 'xeroPo'],
  },
  {
    t: 'Your question is which warehouse ships the order',
    b: 'Routing orders across stores and warehouses is the job of an order management platform. Fluent Commerce, Kibo, Pipe17, Salesforce and fulfillmenttools each describe AI for it on their own pages.',
    sources: ['fluentNews', 'kibo', 'pipe17', 'sfOm', 'fulfillmenttools'],
  },
  {
    t: 'A big customer has told you to trade by EDI',
    b: 'That calls for an EDI network first. Orderful lists Web EDI at $189 a month per trading partner. SPS Commerce lists more than 200 pre-built integrations for ERPs and other systems.',
    sources: ['orderful', 'sps'],
  },
  {
    t: 'Your ERP already does it',
    b: 'NetSuite creates the purchase order for a drop-ship line when the sales order is approved. Odoo raises a request for quotation when a reordering rule is triggered. Switch those on before you pay anyone.',
    sources: ['nsDropShip', 'odooReorder'],
  },
];

const BUILD_WHEN: ReadonlyArray<Fit> = [
  {
    t: 'Every customer orders in their own way',
    b: 'One sends a PDF, one pastes lines into an email, one attaches a spreadsheet with their own part numbers. The agent reads all three and maps them to your items.',
    sources: [],
  },
  {
    t: 'The checks live in your ERP',
    b: 'Customer-specific prices, credit holds, minimum quantities, pack sizes and lead times. An order is only right once it has been held against each of them.',
    sources: [],
  },
  {
    t: 'Orders in and orders out depend on each other',
    b: 'A sales order for stock you are short of should start a purchase order. A late supplier should change the date you promise. A reader that stops at the sales order cannot do either.',
    sources: [],
  },
  {
    t: 'You run QuickBooks Online',
    b: "Intuit's API reference lists estimates, invoices and purchase orders, and no sales order. Where a customer order waits before it is invoiced has to be designed.",
    sources: ['qbEstimateApi', 'qbPoApi'],
  },
  {
    t: 'You want to own it',
    b: 'The code, the written rules and the test orders are yours. They stay with you if you ever change who looks after them.',
    sources: [],
  },
];

/* ── What each ERP already does with orders. Each card restates the maker's
   own pages as read on 2026-10-11. The last card is our own process note. ── */
const SYSTEMS: ReadonlyArray<{
  name: string;
  kind: string;
  says: string;
  sources: ReadonlyArray<SrcKey>;
  span: string;
}> = [
  {
    name: 'QuickBooks',
    kind: 'Online · Desktop Enterprise',
    says: "Intuit's QuickBooks Online API reference lists a PurchaseOrder object, which it calls a non-posting transaction, with a status of Open or Closed. It lists an Estimate with a status of Accepted, Closed, Pending, Rejected or Converted, and an Invoice. It lists no sales order. Intuit's purchase order page says QuickBooks copies the items, quantities and rates from a purchase order into a bill. Its QuickBooks Desktop Enterprise page names sales order fulfillment for wholesale and distribution.",
    sources: ['qbPoApi', 'qbEstimateApi', 'qbPo', 'qbEnterprise'],
    span: 'lg:col-span-7',
  },
  {
    name: 'Oracle NetSuite',
    kind: 'Sales orders · purchase orders · approvals',
    says: "Oracle's help says a sales order records a commitment to sell and does not affect your accounts until items ship. An order that is Pending Approval must be approved before NetSuite can process it. A transaction cannot exceed 500 lines. With Drop Shipments and Special Orders in use, approving a sales order that holds a drop-ship item creates the purchase order automatically. A purchase order has no accounting impact until you receive the order.",
    sources: ['nsSo', 'nsSoApprove', 'nsDropShip', 'nsPoMgmt'],
    span: 'lg:col-span-5',
  },
  {
    name: 'Odoo',
    kind: 'Quotations · RFQs · reordering rules',
    says: "Odoo's documentation says a confirmed quotation turns into a sales order, and a confirmed request for quotation (RFQ) becomes a purchase order. When a reordering rule is triggered for a product on the Buy route, Odoo creates the RFQ itself. A purchase order can be exported as an XML file and imported as a sales order in another Odoo database. Odoo also says access to data through its external API is only available on Custom plans.",
    sources: ['odooQuotes', 'odooRfq', 'odooReorder', 'odooEdi', 'odooApi'],
    span: 'lg:col-span-5',
  },
  {
    name: 'SAP Business One',
    kind: 'Service Layer · the API an agent uses',
    says: "SAP's Service Layer reference describes Orders as a commitment from a customer or lead to buy a product or service, and PurchaseOrders as a document used to request items or services from a vendor at an agreed price. It also lists Quotations, PurchaseRequests, Drafts and ApprovalRequests, and a method that saves a draft to a document. So an order has somewhere to wait for a person.",
    sources: ['sapServiceLayer'],
    span: 'lg:col-span-7',
  },
  {
    name: 'ERPNext',
    kind: 'Draft, then Submit',
    says: "ERPNext's manual says a saved sales order stays in Draft status until someone selects Submit, and that submitting confirms the commitment. A purchase order can be created from a submitted Material Request or Supplier Quotation. After it is submitted you can enter the supplier's order confirmation number and date. Frappe's REST API reaches any record type at /api/resource, signed in with an API key and secret.",
    sources: ['erpnextSo', 'erpnextPo', 'frappeRest'],
    span: 'lg:col-span-7',
  },
  {
    name: 'Custom ERPs',
    kind: 'Whatever it exposes',
    says: 'A custom ERP has no public manual to quote, so the first job is to list what it exposes. That may be an API, a database the agent may read, or file imports and exports. The same rule holds as on the five systems above. The agent writes a draft, and a person on your team confirms it.',
    sources: [],
    span: 'lg:col-span-5',
  },
];

/* ── Eight jobs. Five on the selling side, three on the buying side. Bullets
   are deliberately uneven. ── */
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
    title: 'Capture: every order into one list',
    body: 'Orders reach you through a shared inbox, a customer portal, a spreadsheet and, from larger accounts, EDI. The agent brings them into one list.',
    items: [
      'Watches the orders mailbox and pulls out each PDF, spreadsheet or image',
      'Reads an order typed straight into the body of an email',
      'Takes in the EDI purchase orders your network delivers',
      'Sets quotes, statements and marketing email aside, so they never become orders',
      'Keeps the original and attaches it to the sales order',
    ],
    note: 'X12, which says it has been chartered by the American National Standards Institute for more than 40 years, numbers its purchase order document 850. Beam AI, one of the products listed below, says its agent captures orders from email, phone, fax, web and EDI. That list is a fair picture of the ways orders reach an order desk.',
    sources: ['x12', 'beamOrder'],
    span: 'lg:col-span-7',
  },
  {
    n: '02',
    title: 'Read: the header and every line',
    body: 'An AI model reads who is ordering, their PO number, the ship-to address, each item, quantity, unit and price, and the date they need it.',
    items: [
      'Checks that the lines add up to the total on the order',
      'Marks each field it is unsure of and says why',
      'Reads the notes too, such as ship complete or call before delivery',
    ],
    note: "Accuracy depends on how your customers write their orders, so we measure it on yours. Ahead of launch the agent reads a batch of orders you have already entered, and we score it field by field against the sales orders your team keyed. Product makers publish their own figures, and Beam AI's page states 99.8%.",
    sources: ['beamOrder'],
    span: 'lg:col-span-5',
  },
  {
    n: '03',
    title: 'Match: your customer and your part numbers',
    body: 'Customers order by their own part numbers and their own names for things. The agent turns those into the customer and the items in your ERP.',
    items: [
      'Finds the customer from the sender, the bill-to and the ship-to',
      "Maps the customer's part number to yours from a cross-reference list that grows each time your team corrects it",
      'Converts units, such as a case of 12 ordered as 1 when you sell by the each',
      'Stops and asks when it cannot place an item',
    ],
    note: 'This is the step where a plain document reader stops, because the answer is in your ERP and not on the page. Conexiom says it validates each order against your ERP, and Y Meadows says it matches orders to your products and customers.',
    sources: ['conexiom', 'ymeadows'],
    span: 'lg:col-span-5',
  },
  {
    n: '04',
    title: 'Check: price, stock, credit and dates',
    body: 'Before a draft is written, the order is held against what your ERP already knows.',
    items: [
      'Compares each price with your price for that customer and shows any difference',
      'Looks at stock on hand and what is already promised to other orders',
      'Flags a customer on credit hold or over their limit',
      'Checks minimum quantities and pack sizes',
      'Works out a ship date from stock and lead time, and flags a date you cannot meet',
    ],
    note: 'Decide who wins when the price on the purchase order is lower than yours. One common rule is to honor a small difference and query a large one. We write your rule down with your sales lead before the build, so the agent never decides it alone.',
    sources: [],
    span: 'lg:col-span-7',
  },
  {
    n: '05',
    title: 'Draft: the sales order, then the reply',
    body: 'The agent writes the sales order into your ERP as a draft and prepares the acknowledgment your customer expects.',
    items: [
      'NetSuite: a sales order saved as Pending Approval',
      'Odoo: a quotation, which becomes a sales order when your team confirms it',
      'SAP Business One: a draft through the Service Layer',
      'ERPNext: a sales order in Draft status until someone selects Submit',
      'QuickBooks Online: an estimate, because Intuit lists no sales order object',
      'Prepares the order acknowledgment, by email or as an EDI 855, for a person to release',
    ],
    note: 'Each ERP gives a draft a different place to wait. Oracle says a Pending Approval sales order must be approved before NetSuite can process it. ERPNext keeps a saved order in Draft until it is submitted. X12 titles the 855 Purchase Order Acknowledgment.',
    sources: ['nsSoApprove', 'odooQuotes', 'sapServiceLayer', 'erpnextSo', 'qbEstimateApi', 'x12'],
    span: 'lg:col-span-12',
  },
  {
    n: '06',
    title: 'Reorder: spot what needs buying',
    body: 'The second direction starts here. The agent looks at what the new sales orders need and what is on the shelf.',
    items: [
      'Reads stock levels, reorder points and open sales orders from the ERP',
      'Groups what is needed by supplier',
      'Leaves alone anything your ERP already reorders by itself',
    ],
    note: "Check what your ERP does first. Odoo creates a request for quotation when a reordering rule is triggered, using the vendor at the top of the product's vendor list. NetSuite creates a purchase order when a sales order with a drop-ship item is approved. The agent covers the gaps those rules leave, such as a job that needs a part you have never stocked.",
    sources: ['odooReorder', 'nsDropShip'],
    span: 'lg:col-span-5',
  },
  {
    n: '07',
    title: 'Buy: draft the purchase order for your buyer',
    body: 'A purchase order is your promise to a supplier, so a person signs off each one.',
    items: [
      'Fills in the supplier, the items, the quantities, your agreed price and the date you need it',
      'Sends it to the approver your limits name',
      'Emails the approved order to the supplier, or passes it to your EDI network',
      'Records who approved it and when',
    ],
    note: "Approval limits usually exist already. NetSuite's Purchase Order Approval Workflow routes by the purchase approval limit assigned to each approver, and Oracle notes that with its Approval Routing feature you can approve 25 transactions at a time. SAP Business One's Service Layer lists ApprovalRequests. The agent uses those limits and adds none of its own.",
    sources: ['nsPoApproval', 'nsApprovalRouting', 'sapServiceLayer'],
    span: 'lg:col-span-7',
  },
  {
    n: '08',
    title: 'Follow up: confirmations and changes',
    body: "Sending the order is half the job. The supplier's reply decides what you can promise your own customer.",
    items: [
      "Reads the supplier's order confirmation and compares price, quantity and date with what you asked for",
      'Updates the expected date on the purchase order and flags any sales order that now ships late',
      "Catches a customer's change email and matches it to the open sales order",
      'Reminds a supplier who has not confirmed',
    ],
    note: "ERPNext has a field for this. Its manual says you can enter the supplier's order confirmation number and date after a purchase order is submitted. In EDI the buyer's change request is the 860 and the seller's is the 865. A change that arrives after an order is approved goes to a person.",
    sources: ['erpnextPo', 'x12', 'nsSoApprove'],
    span: 'lg:col-span-12',
  },
];

/* ── EDI or email. Seven cases. X12 document names are from x12.org as read on
   2026-10-11. The punchout and EDI line is Bhavesh's confirmation of
   2026-10-11. ── */
type Door = 'edi' | 'email' | 'either';

const DOOR_LABEL: Record<Door, string> = {
  edi: 'Arrives as EDI',
  email: 'Arrives as email',
  either: 'Either one',
};

const CHANNELS: ReadonlyArray<{ rule: string; door: Door; note: string }> = [
  {
    rule: 'A large retailer or distributor orders from you',
    door: 'edi',
    note: 'Large buyers with many suppliers usually ask them to trade by EDI. The order comes as an X12 850, which X12 titles Purchase Order. An EDI network turns it into something your ERP or an agent can read.',
  },
  {
    rule: 'They expect replies in the same format',
    door: 'edi',
    note: 'X12 names the 855 Purchase Order Acknowledgment, the 856 Ship Notice/Manifest and the 810 Invoice. Each trading partner sets which ones it wants and how soon. The agent can prepare the 855 from the checked sales order.',
  },
  {
    rule: 'A contractor, a shop or a small account orders',
    door: 'email',
    note: 'They send what is easy for them. That may be a PDF from their own system, a spreadsheet, or a message that asks for the usual order plus two more. No two look alike, and this is the work an AI agent suits.',
  },
  {
    rule: 'A customer orders through a portal or a punchout catalog',
    door: 'either',
    note: 'A punchout catalog lets a buyer shop your catalog from inside their own purchasing system, and the order comes back as a structured message. Portal and punchout orders skip the reading step and go straight to the checks. We build punchout catalogs and EDI integrations as well as agents.',
  },
  {
    rule: 'The same customer uses both',
    door: 'either',
    note: "The order arrives by EDI and the change arrives as an email two days later. Or the buyer emails a PDF copy of an order their system has already sent. The agent matches on the customer's PO number, so one order is never entered twice.",
  },
  {
    rule: 'Your own purchase orders to suppliers',
    door: 'either',
    note: "Most suppliers take a PDF by email. A supplier that asks for EDI gets your 850 through the same kind of network. Odoo's documentation describes a third route, an XML file exported from the buyer's database and imported by the seller.",
  },
  {
    rule: 'An order changes after it is placed',
    door: 'either',
    note: "In EDI the buyer's change is the 860 and the seller's is the 865. By email it is a reply that says make it 40. Either way the agent finds the open order, shows the change beside it and waits for a person.",
  },
];

/* ── Where order automation projects break. Five rest on a linked maker page.
   Three come from how customers write orders. ── */
const BREAKS: ReadonlyArray<{ t: string; b: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    t: "The customer's part number is not yours",
    b: "A purchase order lists the buyer's item codes. With no cross-reference list the agent can only stop and ask. Build the list from past orders before launch, and let every correction add to it.",
    sources: [],
  },
  {
    t: 'A case ordered as an each',
    b: 'The customer writes 10 and means 10 cases of 12. Units have to be checked against how that customer has ordered before, or the pick is out by a factor of twelve.',
    sources: [],
  },
  {
    t: 'The same order entered twice',
    b: "A buyer emails a PDF copy of an order their system already sent by EDI. The check is the customer's PO number against that customer's open and recent sales orders.",
    sources: [],
  },
  {
    t: 'QuickBooks Online has no sales order',
    b: "Intuit's API reference lists estimates, invoices and purchase orders. A customer order that is accepted and not yet shipped needs a home, and on QuickBooks Online that is an estimate or the agent's own review list.",
    sources: ['qbEstimateApi'],
  },
  {
    t: 'A change that arrives after approval',
    b: 'Oracle says a partly fulfilled NetSuite sales order cannot be set back to Pending Approval. Odoo has a setting, Lock Confirmed Sales, that stops edits once an order is confirmed. Late changes go to a person.',
    sources: ['nsSoApprove', 'odooQuotes'],
  },
  {
    t: 'Two purchase orders for the same stock',
    b: 'Odoo raises an RFQ when a reordering rule is triggered, and NetSuite creates a purchase order for a drop-ship line when the sales order is approved. An agent that also drafts one doubles the order.',
    sources: ['odooReorder', 'nsDropShip'],
  },
  {
    t: 'An order longer than the system allows',
    b: "Oracle says a NetSuite transaction cannot exceed 500 lines, or 1000 for sales orders created by SOAP web services. A distributor's stock order can pass that, so the agent has to split it and say that it did.",
    sources: ['nsSo'],
  },
  {
    t: 'An Odoo plan with no API access',
    b: "Odoo's API page states that the external API is offered on Custom pricing plans only, which leaves out One App Free and Standard. Check your plan before anyone scopes an agent.",
    sources: ['odooApi'],
  },
];

/* ── Our experience, stated plainly. No client is named on this page and no
   result is claimed. The first card is Bhavesh's own statement of 2026-10-09
   plus the EDI and punchout line confirmed on 2026-10-11. The last is the
   support wording allowed by the rule of 2026-10-11. ── */
const EXPERIENCE: ReadonlyArray<{ t: string; kind: string; what: string; href: string; cta: string; span: string }> = [
  {
    t: 'The order work behind this page',
    kind: 'Orders inside ERPs',
    what: 'Purchase and sales order generation is work FactoryJet has done on Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs, along with RFQ automation and daily bookkeeping. We also build EDI integrations and punchout catalogs. Our QuickBooks work is described on the Shopify QuickBooks integration page.',
    href: '/services/erp-ai-agents',
    cta: 'Read the ERP agents overview',
    span: 'lg:col-span-7',
  },
  {
    t: 'Before any contract',
    kind: 'A first version on your own orders',
    what: 'We show you working software on your own data before any contract. For this page that is a batch of purchase orders your customers have already sent, read by a first version and set beside the sales orders your team keyed.',
    href: '/contact',
    cta: 'Ask for a demo on your orders',
    span: 'lg:col-span-5',
  },
  {
    t: 'Named client work',
    kind: 'Case studies',
    what: 'Client projects we are able to name are written up on our case studies page.',
    href: '/case-studies',
    cta: 'Read the case studies',
    span: 'lg:col-span-5',
  },
  {
    t: 'After launch',
    kind: 'Supported by the people who built it',
    what: 'After a short scoping call you get two fixed prices in writing, one for the build and one for the ongoing support. Once the agents are live, FactoryJet can keep managing the servers, the AI models, the API connections and the maintenance, so your order desk and your buyers do not have to.',
    href: '/services/ai-agent-monitoring',
    cta: 'How monitoring and support work',
    span: 'lg:col-span-7',
  },
];

/* ── Who this is for. Examples of the kinds of team the work suits, not a
   client list. Pictures were generated on 2026-10-11 and checked at the size
   they ship. The people in them are not FactoryJet staff or clients. ── */
const INDUSTRIES: ReadonlyArray<{ img: string; alt: string; t: string; b: string }> = [
  {
    img: `${IMG}/order-desk-paper-orders.webp`,
    alt: 'A woman in a navy polo shirt sorts white sheets of paper into two piles on a pale wood counter, with an orange binder beside her and steel shelves of plain brown cartons behind',
    t: 'Wholesale distributors',
    b: 'Purchase orders arrive by email all day, each customer in their own layout. Each one becomes a draft sales order, checked against your price for that customer and your stock.',
  },
  {
    img: `${IMG}/machine-shop-job-parts.webp`,
    alt: 'A woman with grey hair and clear safety glasses in a dark green work shirt places a small machined metal part into a steel tray of matching parts on a workbench, with orange ear defenders on the bench and grey machines behind',
    t: 'Manufacturers and job shops',
    b: 'A customer order names a part, a revision and a date. The agent checks all three and drafts the purchase order for any material the job is short of.',
  },
  {
    img: `${IMG}/picker-cart-warehouse-aisle.webp`,
    alt: 'A man in a grey T-shirt pushes a steel cart holding an orange plastic tote and a clipboard along a warehouse aisle and reaches into a grey bin on the shelving',
    t: 'Brands that sell to retailers',
    b: 'Large accounts order by EDI and small ones by email. Both go through the same checks, so the warehouse picks from one clean list.',
  },
  {
    img: `${IMG}/stockroom-reorder-count.webp`,
    alt: 'A man with white hair and a short white beard in a light blue shirt holds a clipboard and touches a white box on a wooden shelf in a stockroom, with an orange step stool behind him',
    t: 'Purchasing and inventory teams',
    b: 'Reorder points and open sales orders become draft purchase orders, grouped by supplier, and each confirmation is followed up until it comes back.',
  },
];

/* ── Process. Six steps, in the order we work. ── */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'Trace real orders through your day',
    b: 'With the people who key orders and the people who buy, we follow real customer orders from the inbox to the ERP, and real purchase orders from the shortage to the supplier.',
  },
  {
    n: '02',
    t: 'Switch on what your ERP already has',
    b: 'Reorder rules, drop-ship purchase orders and approval limits come first. If those and an off-the-shelf product cover the job, we name the product and stop there.',
  },
  {
    n: '03',
    t: 'Put the order rules on paper',
    b: 'With your sales lead and your buyer we write the part-number list, the price rule, the credit rule, the units, the approval limits and the cases that always go to a person.',
  },
  {
    n: '04',
    t: 'Show it on orders you have already entered',
    b: 'A first version reads a batch of your past customer orders before any contract. You put its drafts next to the sales orders your team keyed and look at where they differ.',
  },
  {
    n: '05',
    t: 'Build it with a sign-in of its own',
    b: 'The agent gets its own user in your ERP, limited to reading customers, items, prices and stock and writing drafts. If your ERP offers a sandbox or a test company, the first build happens there.',
  },
  {
    n: '06',
    t: 'Work beside your team first, then keep supporting it',
    b: 'At first a person approves every draft, for a period we agree with you, and each disagreement between the agent and your team becomes a correction to the rules. The people who built the agents then stay on to watch the logs, test again whenever your ERP or the AI model changes, and repair what fails.',
  },
];

/* ── Comparison: three ways to automate orders ── */
const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: '01 Built into your ERP' },
  { label: '02 An order automation product' },
  { label: '03 Agents built for you' },
];

const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'What you get',
    values: [
      'Sales orders, purchase orders and approval steps that come with QuickBooks, NetSuite, Odoo, SAP Business One or ERPNext',
      'A subscription product that reads orders, runs purchasing or routes orders, such as Conexiom, Parseur, Precoro or Pipe17',
      'AI agents designed around your order rules, built on your ERP and owned by you',
    ],
  },
  {
    feature: 'Orders from customers',
    values: [
      'Typed in by your team, or imported in the format the ERP expects',
      'Read from PDFs, spreadsheets and emails. Conexiom also lists handwritten notes',
      'Read from email, PDF, spreadsheet, portal export or EDI, then checked line by line',
    ],
  },
  {
    feature: 'Checks before the order is saved',
    values: [
      'Whatever your ERP enforces when a person saves the form',
      'Conexiom says it validates each order against your ERP. Y Meadows says it matches orders to your products and customers',
      'Your price for that customer, stock, credit terms, pack sizes and lead times, written down with you first',
    ],
  },
  {
    feature: 'Orders to suppliers',
    values: [
      'Reorder rules in Odoo and drop-ship purchase orders in NetSuite',
      'Purchasing software such as Precoro covers requests, approvals and receipts',
      'Drafted from stock levels and open sales orders, for your buyer to approve',
    ],
  },
  {
    feature: 'EDI',
    values: [
      'Odoo documents an XML exchange between two Odoo databases',
      'EDI networks such as SPS Commerce and Orderful connect you to trading partners',
      'The agent reads what the EDI network delivers and applies the same checks as for email',
    ],
  },
  {
    feature: 'What you pay for',
    values: [
      'Nothing extra. It is part of your ERP subscription',
      'Pages, tasks, order lines, trading partners or a plan. Six of the twelve below publish a price or a free tier',
      'One fixed price for the build and one for ongoing support, each quoted in writing',
    ],
  },
  {
    feature: 'Who fixes it',
    values: ['The ERP maker or your ERP consultant', "The product maker's support desk", 'The people who built it, who also support it'],
  },
  {
    feature: 'Best fit when',
    values: [
      'Orders are few and already arrive in a form the ERP can import',
      'Orders arrive in a few steady layouts, or you need one job done, such as purchasing or routing',
      'Every customer orders differently and the checks depend on data in your ERP',
    ],
  },
];

/* ── Twelve order automation products and platforms. Each line restates the
   maker's own page as read on 2026-10-11, with its list price where that page
   gives one. Grouped by kind, not ranked. Feeds the visible list AND the
   ItemList JSON-LD. ── */
const OTHERS: ReadonlyArray<{ name: string; focus: string; says: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    name: 'Conexiom',
    focus: 'Reads customer orders · manufacturers and distributors',
    says: 'Its site says Conexiom Relay turns orders and invoices into ERP-ready data, reads PDF, Excel, email, CSV and handwritten notes, and makes data compatible with more than 40 ERPs. It gives a 30-day average implementation timeline. The page we read gives no price.',
    sources: ['conexiom'],
  },
  {
    name: 'Y Meadows',
    focus: 'Reads customer orders · free starter tier',
    says: 'Its site says Y Meadows reads orders from PDFs, emails, Excel and handwriting, matches them to your products and customers and applies your business rules. Its Starter tier processes up to 50 orders a month at no cost and gives an export file for your ERP. Full automation is shown by demo.',
    sources: ['ymeadows'],
  },
  {
    name: 'Rossum',
    focus: 'Reads documents · priced per year',
    says: 'Its pricing page lists a Starter plan starting at $18,000 per year, with documents taken in by email, API or upload and a validation screen for exceptions. The Business plan adds matching against your master data and duplicate detection, at a quoted price. The page carries a notice that Coupa has acquired Rossum.',
    sources: ['rossum'],
  },
  {
    name: 'Parseur',
    focus: 'Reads documents · priced by pages',
    says: 'Its pricing page lists a free tier of 20 pages a month, then Starter at $129 a month for 1,000 pages and Pro at $499 a month for 10,000 pages, with other sizes between and above. Parseur describes its product as document data extraction.',
    sources: ['parseur'],
  },
  {
    name: 'Beam AI',
    focus: 'AI agent platform · priced by tasks',
    says: 'Its Order Management Agent page says the agent captures orders from email, phone, fax, web and EDI, checks inventory and credit limits and routes to fulfillment systems, with integrations to NetSuite, SAP, Shopify and others. Its pricing page lists a Free plan with 20 tasks a month, Pro at $50 a month with 200 tasks, and a Scale plan at $3,990 a month.',
    sources: ['beamOrder', 'beamPricing'],
  },
  {
    name: 'Precoro',
    focus: 'Purchasing software · priced per month',
    says: 'Its pricing page lists Core starting at $499 a month and Automation starting at $999 a month, both billed annually, with Enterprise quoted. Core lists purchase requests, purchase orders, receipts, 2 and 3-way match and automated approvals, with QuickBooks Online and Xero integrations. Automation adds AI document processing and punchouts.',
    sources: ['precoro'],
  },
  {
    name: 'Orderful',
    focus: 'EDI network · priced per trading partner',
    says: 'Its pricing page lists Web EDI Fulfillment at $189 a month per trading partner and an Integrated plan starting at $399 a month, described as an API for EDI to build integration with any system. Enterprise is quoted and is described as for more than 20 trading partners. The feature table lists X12 and EDIFACT.',
    sources: ['orderful'],
  },
  {
    name: 'SPS Commerce',
    focus: 'EDI network · quoted',
    says: 'Its Fulfillment page describes a full-service EDI product, more than 200 pre-built integrations for ERPs and other systems, and a network of over 500,000 trading connections. The page we read gives no price.',
    sources: ['sps'],
  },
  {
    name: 'Fluent Commerce',
    focus: 'Order management platform · AI agent for sourcing',
    says: "On June 16, 2026 it announced an AI agent for order sourcing, the decision about where an order ships from. Users can question and change sourcing rules in plain language, and recommended changes need a person's approval. Its documentation also describes a pilot MCP server that gives customer service AI agents order status, shipment and tracking data. Neither page gives a price.",
    sources: ['fluentNews', 'fluentMcp'],
  },
  {
    name: 'Kibo',
    focus: 'Commerce and order management · agentic framework',
    says: 'Its page says the KIBO Agentic Framework is built on five functions, Engage, Configure, Explain, Analyze and Optimize, and that an MCP server opens commerce and order data, including order routing, to any AI agent. It says KIBO AI is priced per function, based on order lines. No figure is given.',
    sources: ['kibo'],
  },
  {
    name: 'Salesforce Order Management',
    focus: 'Order management · Agentforce',
    says: 'Its page lists Agentic Order Routing, which resolves order fulfillment exceptions, and Agentic Order Support, which offers self-service order status, cancellation and returns inside Agentforce. Its pricing page shows Contact for pricing on each edition.',
    sources: ['sfOm', 'sfOmPricing'],
  },
  {
    name: 'Pipe17',
    focus: 'Order operations platform · connectors',
    says: 'Its site says its AI clears exceptions and routes each order to the best fulfillment location, and that it runs more than 300 pre-built connectors. Its pricing page says pricing is based on order volume, connections, flows and sub-accounts, with no figure.',
    sources: ['pipe17', 'pipe17Pricing'],
  },
];

const othersSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Order automation products and platforms, read on 11 October 2026',
  itemListElement: OTHERS.map((o, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: o.name,
    url: SRC[o.sources[0]].url,
  })),
};

const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  { href: '/services/erp-ai-agents', t: 'AI agents for ERP systems', b: 'The overview page: quotes, orders and bookkeeping drafted inside Odoo, NetSuite, SAP Business One, ERPNext or a custom ERP.' },
  { href: '/services/accounts-payable-automation', t: 'Accounts payable automation', b: "What comes after a purchase order: matching the supplier's invoice to the order and the receipt." },
  { href: '/services/netsuite-ai-agents', t: 'NetSuite AI agents', b: "Oracle's own AI features and custom agents inside NetSuite." },
  { href: '/services/odoo-ai-agents', t: 'Odoo AI agents', b: 'Agents inside Odoo 19 and Odoo 20 that draft quotations, orders and bills.' },
  { href: '/services/ai-inventory-management-agents', t: 'AI inventory management agents', b: 'Low-stock flags and the draft purchase orders that follow them.' },
  { href: '/services/document-intake-ai-agents', t: 'Document intake AI agents', b: 'The same reading and checking for forms, claims and applications.' },
  { href: '/services/shopify-edi-integration', t: 'Shopify EDI integration', b: 'EDI purchase orders from retailers brought into a Shopify store.' },
  { href: '/services/manufacturing-ai-agents', t: 'AI agents for manufacturers', b: 'RFQs, drawings and quotes for plants and job shops.' },
  { href: '/services/ai-agent-development/procurement-supply-chain-agent', t: 'Procurement and supply chain agent', b: 'The buying side on its own page.' },
  { href: '/services/shopify-quickbooks-integration', t: 'Shopify QuickBooks integration', b: 'Items, stock and prices kept in step between a store and QuickBooks.' },
  { href: '/services/ai-agent-monitoring', t: 'AI agent monitoring and support', b: 'What happens after launch: watching, re-testing and fixing.' },
  { href: '/uk/sales-order-automation-ai-agents', t: 'Sales order automation AI agents in the UK', b: 'The same order-reading agent, on the page written for UK buyers.' },
  { href: '/au/sales-order-automation-ai-agents', t: 'Sales order automation AI agents in Australia', b: 'The same order-reading agent, on the page written for Australian buyers.' },
];

/** Small inline source links. Same visual pattern as /services/netsuite-ai-agents.
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

export default function SalesOrderAutomationAiAgentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(othersSchema) }} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <SiteHeader />

      <main className={`${styles.page} min-h-screen bg-fj-cream text-fj-ink`}>
        <StickyCtaLabel label="See a demo on my data" title="Demo first" />
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO */}
        <section className={`${styles.hero} relative overflow-hidden border-b border-fj-neutral-200 bg-fj-cream pt-12 pb-14 md:pt-14 md:pb-16`}>
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className={`${styles.heroCopy} lg:col-span-7`}>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F05A28]/30 bg-white px-3 py-1.5">
                  <span className="font-fj-mono text-xs font-bold tracking-wide text-[#B23E13]">
                    SALES AND PURCHASE ORDER AUTOMATION &middot; UNITED STATES
                  </span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.2rem]">
                  Sales order and purchase order automation, built as AI agents on your own ERP.
                </h1>

                <p className={`${styles.heroLead} mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600`}>
                  A customer&rsquo;s purchase order lands as an email, a PDF or an EDI message, and someone retypes it
                  into the ERP as a sales order.
                </p>

                <div className={`${styles.heroForm} mt-6`}>
                  <HeroInlineForm
                    region="us"
                    source="services_sales_order_automation_ai_agents_hero"
                    service="Sales and Purchase Order Automation"
                    submitLabel="See a demo on my data"
            trustText="Working software on your own data before you sign. Founder replies within 24 hours."
          />
                </div>

                <p className={`${styles.heroDetails} mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600`}> Later someone else types your own purchase orders to suppliers.
                  FactoryJet designs, builds and supports AI agents that draft both, on QuickBooks, NetSuite, Odoo, SAP
                  Business One, ERPNext or a custom ERP. Your people approve every order, and what we build belongs
                  to you. The quote is fixed and in writing before any work begins.
                </p>

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
                  <span>First version on your own orders before a contract</span>
                  <span>Serving 500+ businesses</span>
                  <span>In business since 2014</span>
                  <span>Every source read {CHECKED_ON}</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
                  <figcaption className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                    One order in, one order out
                  </figcaption>
                  <ol className="mt-4 grid gap-2">
                    {HERO_FLOW.map((s) => (
                      <li
                        key={s.n}
                        className={`flex items-start gap-3 rounded-xl border-[1.5px] px-3.5 py-2.5 ${
                          s.who === 'agent' ? 'border-[#F05A28] bg-[#FFF4EE]' : 'border-[#14110F] bg-white'
                        }`}
                      >
                        <span className="mt-px font-fj-mono text-xs font-bold text-[#B23E13]">{s.n}</span>
                        <span className="font-fj-body text-[13px] leading-snug text-fj-ink">
                          <span className="font-semibold">{s.t}</span> {s.b}
                        </span>
                      </li>
                    ))}
                  </ol>
                  <ul className="mt-4 grid gap-2 font-fj-body text-[13px] leading-snug text-fj-ink">
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-[3px] h-3 w-3 flex-shrink-0 rounded-sm border-[1.5px] border-[#F05A28] bg-[#FFF4EE]" />
                      Orange rows are done by the agents we build.
                    </li>
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-[3px] h-3 w-3 flex-shrink-0 rounded-sm border-[1.5px] border-[#14110F] bg-white" />
                      Black-outline rows are done by your order desk and your buyer.
                    </li>
                  </ul>
                  <p className="mt-3 font-fj-body text-[13px] leading-snug text-fj-neutral-600">
                    Nothing is confirmed to a customer or sent to a supplier until a named person approves it.
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
                Sales order automation means software reads each purchase order a customer sends, by email, PDF or
                EDI, checks it against your prices, stock and terms, and drafts the sales order in your ERP. Purchase
                order automation drafts the orders you send to suppliers. FactoryJet builds both as AI agents on the
                ERP you already run, and supports them after launch.
              </p>
              <p className="mt-4 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                Two terms first. An ERP is the system that holds your orders, stock and books. EDI, short for
                electronic data interchange, is two companies&rsquo; systems swapping orders directly, with no email
                or PDF in between. Plenty of people who type these phrases into Google want software to rent. On {CHECKED_ON},
                eight of the first nine unpaid Google results in the US for &ldquo;purchase order automation&rdquo;
                were pages from software makers, and the ninth was a Reddit thread. FactoryJet has no subscription product
                to sell you. If one of the{' '}
                <a href="#order-products" className="font-semibold text-fj-ink underline underline-offset-4">
                  twelve products listed below
                </a>{' '}
                fits your orders, rent it. The section after this one shows how to judge that.
              </p>
            </div>
          </div>
        </section>

        {/* 3. PRODUCT OR BUILT AGENTS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Rent or build</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              When renting order automation software is the better choice.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Read this part before you ask anyone for a quote, us included. Below are five signs that a rented
              product will do, and five that it will not. Each product and ERP fact comes from the maker&rsquo;s own
              page, read on {CHECKED_ON}.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <h3 className="font-fj-display text-xl font-semibold text-fj-ink">Rent a product when</h3>
                <FitList items={BUY_WHEN} accent={false} />
              </div>
              <div className="lg:col-span-6">
                <h3 className="font-fj-display text-xl font-semibold text-fj-ink">Have agents built when</h3>
                <FitList items={BUILD_WHEN} accent />
              </div>
            </div>

            <p className="mt-8 max-w-3xl font-fj-body text-base leading-relaxed text-fj-ink">
              Often the answer is both. An EDI network carries the orders from your largest accounts, and an agent
              handles the emailed orders from everyone else, with the same checks on each.
            </p>
          </div>
        </section>

        {/* 4. WHAT YOUR ERP ALREADY DOES WITH ORDERS */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Your ERP first</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              How QuickBooks, NetSuite, Odoo, SAP Business One and ERPNext handle an order today.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              An agent writes into the ERP you have, so the build starts with how that ERP stores an order and where
              a draft can wait. Cards one to five repeat what the maker&rsquo;s own pages say, as we read them on{' '}
              {CHECKED_ON}. Two of the five have pages of their own here:{' '}
              <Link href="/services/netsuite-ai-agents" className="font-semibold text-fj-ink underline underline-offset-4">
                NetSuite AI agents
              </Link>{' '}
              and{' '}
              <Link href="/services/odoo-ai-agents" className="font-semibold text-fj-ink underline underline-offset-4">
                Odoo AI agents
              </Link>
              .
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
              {SYSTEMS.map((c) => (
                <li key={c.name} className={`rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 ${c.span}`}>
                  <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{c.name}</h3>
                  <div className="mt-1 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">
                    {c.kind}
                  </div>
                  <p className="mt-3 font-fj-body text-[15px] leading-relaxed text-fj-ink">{c.says}</p>
                  <SourceLinks ids={c.sources} />
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border-2 border-[#F05A28]/25 bg-fj-cream p-6 sm:p-8">
              <div className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                Read on {CHECKED_ON}
              </div>
              <h3 className="mt-3 font-fj-display text-xl font-semibold text-fj-ink">
                Three things in these manuals that change the build.
              </h3>
              <ul className="mt-4 grid max-w-3xl gap-3 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  QuickBooks Online has no sales order. Intuit&rsquo;s API reference lists Estimate, Invoice and
                  PurchaseOrder among its objects and no SalesOrder. A customer order waits as an estimate, or in the
                  agent&rsquo;s own review list, until it is ready to invoice.
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  Your ERP may already write purchase orders. NetSuite creates one when a sales order with a
                  drop-ship item is approved. Odoo creates an RFQ when a reordering rule is triggered. The agent has
                  to know that, or you get two orders for the same stock.
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  An approved order is harder to change. Oracle says a partly fulfilled NetSuite sales order cannot
                  go back to Pending Approval, and Odoo has a setting that locks confirmed sales orders. A
                  customer&rsquo;s change email has to be caught before that point or handed to a person.
                </li>
              </ul>
              <SourceLinks ids={['qbEstimateApi', 'nsDropShip', 'odooReorder', 'nsSoApprove', 'odooQuotes']} />
            </div>
          </div>
        </section>

        {/* 5. COMPARISON: three ways to automate orders */}
        <ComparisonTable
          eyebrow="Three ways to do it"
          headline="Your ERP's own tools, a product you rent, or agents built for you."
          lead="None of the three is wrong. Which one fits depends on how your orders arrive and where the checks live, and we will say so plainly even when the answer is a product from someone else."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer={`Every product and ERP fact in this table was read on the maker's own pages on ${CHECKED_ON}. The links are in the sources list further down.`}
          scrollRegionLabel="Comparison of three ways to automate sales orders and purchase orders"
        />

        {/* 6. EIGHT JOBS */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Eight jobs, two directions</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Five jobs on every order that comes in, three on every order that goes out.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Jobs 01 to 05 turn a customer&rsquo;s purchase order into a sales order. Jobs 06 to 08 turn a shortage
              into a purchase order to your supplier. Every card pairs what the agent does with one thing worth
              knowing about the systems around it. The overview of every ERP job is on{' '}
              <Link href="/services/erp-ai-agents" className="font-semibold text-fj-ink underline underline-offset-4">
                AI agents for ERP systems
              </Link>
              .
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
                    <span className="font-semibold">Good to know.</span> {s.note}
                  </p>
                  <SourceLinks ids={s.sources} />
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Whatever the build, three decisions never leave your people: approving a sales order, approving a
              purchase order, and anything about price. DataForSEO&rsquo;s US figures for {CHECKED_ON} show about 110
              searches a month for purchase order automation and about 30 for sales order automation.
            </p>
            <p className="mt-3 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
              Each note about a maker above is as we read it on {CHECKED_ON}.
            </p>
          </div>
        </section>

        <MidPageCTA
          headline="A short call tells you whether to switch on your ERP's own tools, rent a product or have agents built."
          sub="Tell us which ERP you run and about how many orders you take and place in a month. Our reply sets out what the ERP can do unaided, the one product we would shortlist, and the part worth building, with a fixed quote for that part."
          label="Scope my order agent"
        />

        {/* 7. EDI OR EMAIL */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">EDI or email</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  When an order arrives as EDI, and when it arrives as an email.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  With EDI, two companies&rsquo; systems swap orders in a fixed format, with no PDF and nobody typing.
                  In the US the usual format is X12. X12 says it has been chartered by the American National
                  Standards Institute for more than 40 years, and each of its documents has a number.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Email is everything else: a PDF, a spreadsheet, a photo of a form, or three lines typed into a
                  message. Most sellers of any size get both.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  Seven cases follow. Two are EDI, one is email and four can be either.
                </p>
                <p className="mt-4 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                  Every large buyer sets its own EDI rules. Kroger, for one, runs a public EDI portal that lists ten
                  sets of requirements and guidelines and a page of EDI purchase order terms.
                </p>
                <SourceLinks ids={['x12', 'krogerEdi', 'odooEdi', 'orderful', 'sps']} />
              </div>

              <ul className="grid gap-3 lg:col-span-8">
                {CHANNELS.map((k) => (
                  <li
                    key={k.rule}
                    className={`grid grid-cols-1 gap-2 rounded-2xl border bg-fj-cream px-5 py-4 sm:grid-cols-[190px_1fr] sm:gap-5 ${
                      k.door === 'email' ? 'border-[#F05A28]/45' : 'border-fj-neutral-200'
                    }`}
                  >
                    <div>
                      <div className="font-fj-display text-base font-semibold text-fj-ink">{k.rule}</div>
                      <div
                        className={`mt-1 font-fj-mono text-xs font-bold uppercase tracking-wider ${
                          k.door === 'email' ? 'text-[#B23E13]' : 'text-fj-neutral-600'
                        }`}
                      >
                        {DOOR_LABEL[k.door]}
                      </div>
                    </div>
                    <p className="font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{k.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 8. WHERE IT BREAKS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Where it goes wrong</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Eight places an order automation project breaks.
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Three come from how customers write orders. Five come from the makers&rsquo; own manuals, linked
              beneath each one.
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
            <p className="fj-eyebrow">Track record</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Our order work, and how you can check it.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              FactoryJet has been in business since 2014 and has served more than 500 businesses. You see a first
              version working on your own orders before you are asked to sign.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
              {EXPERIENCE.map((w) => (
                <li key={w.t} className={`flex flex-col rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 ${w.span}`}>
                  <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{w.t}</h3>
                  <div className="mt-1 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">
                    {w.kind}
                  </div>
                  <p className="mt-3 font-fj-body text-[15px] leading-relaxed text-fj-ink">{w.what}</p>
                  <Link
                    href={w.href}
                    className="mt-4 inline-flex min-h-11 min-w-11 items-center gap-1.5 py-2 font-fj-body text-sm font-semibold text-[#B23E13] hover:underline"
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
                <p className="fj-eyebrow">Who it suits</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Built for teams that retype orders between an inbox and an ERP.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Part numbers differ from trade to trade, and the routine does not. An order comes in, a person
                  checks price and stock, a person keys it, and another person buys whatever is short.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  If you make what you sell, see{' '}
                  <Link
                    href="/services/manufacturing-ai-agents"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    AI agents for manufacturers
                  </Link>
                  . If buying is the bigger problem, see the{' '}
                  <Link
                    href="/services/ai-agent-development/procurement-supply-chain-agent"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    procurement and supply chain agent
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
                <p className="fj-eyebrow">How we work</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Six steps from your inbox to a supported agent.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  The order of the steps is deliberate. Your ERP&rsquo;s own features and rented products are ruled out
                  before anything is built, and the rules are agreed on paper before any code. Once the agents are live,{' '}
                  <Link
                    href="/services/ai-agent-monitoring"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    AI agent monitoring and support
                  </Link>{' '}
                  covers the watching and the re-testing. Supplier invoices are a separate job, covered on{' '}
                  <Link
                    href="/services/accounts-payable-automation"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    accounts payable automation
                  </Link>
                  .
                </p>
                <img
                  src={`${IMG}/team-sorting-order-rules.webp`}
                  alt="A woman in a mustard sweater and a man in a charcoal shirt, seen from behind, stand at a white table where she lays out a row of white cards and he holds one orange card"
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

        {/* 12. TWELVE ORDER AUTOMATION PRODUCTS AND PLATFORMS */}
        <section id="order-products" className="border-t border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">The rent option</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Twelve order automation products and platforms, with their list prices.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  FactoryJet wrote this list and sells nothing on it. Every entry was read on the maker&rsquo;s own
                  site on 11 October 2026. Where that page shows a list price, the price is here too.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  The twelve fall into four kinds: products that read customer orders, purchasing software, EDI
                  networks, and order management platforms that now ship their own AI agents. The list is grouped by
                  kind and is not a ranking.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Six of the twelve publish a price or a free tier on the page we read. Six quote on request.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  Agents built for you differ in one way. They follow the rules you wrote, on the ERP you already
                  have, and they are yours.
                </p>
                <p className="mt-4 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                  What a build costs is a separate question. The two published market ranges quoted in the FAQ come
                  from ProductCrafters and Layer3 Labs.
                </p>
                <SourceLinks ids={['productCrafters', 'layer3']} />
              </div>
              <ol className="grid gap-4 lg:col-span-8">
                {OTHERS.map((o, i) => (
                  <li key={o.name} className="flex items-start gap-4 rounded-2xl border border-fj-neutral-200 bg-white p-6">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-fj-cream font-fj-mono text-sm font-bold text-[#B23E13]">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{o.name}</h3>
                      <div className="mt-1 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">
                        {o.focus}
                      </div>
                      <p className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-ink">{o.says}</p>
                      <SourceLinks ids={o.sources} />
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
            <p className="fj-eyebrow">Keep reading</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Related ERP and AI agent pages.
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
                <p className="fj-eyebrow">How we checked</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Sources, read on {CHECKED_ON}.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  The pages listed here are where each ERP behavior, product feature, list price and EDI document
                  name on this page came from, all read on that one day. A plain web request was enough for most of
                  them, and Intuit&rsquo;s developer and QuickBooks pages needed a browser. These pages change, so
                  follow the link and read the current version before you rely on a figure.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  The search counts are DataForSEO monthly averages for the US, and the Google results described
                  near the top were pulled the same day.
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
          eyebrow="Order automation FAQ"
          headline="Straight answers on sales order and purchase order automation."
          lead={`Twenty-nine questions from order desks, purchasing teams and owners. Where an answer names a product or an ERP, the fact was read on the maker's own page on ${CHECKED_ON}.`}
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 16. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="Sales and purchase order automation"
          headline="Keep your ERP. Give every order a first draft."
          sub="Describe how customer orders come in and how you place your own. You hear back with what to switch on, what to rent and what is worth building, and a build comes with a first version on your own orders and support after launch."
          primaryCta={{ label: 'Scope my order agent', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="A first version on your own orders before a contract. Fixed quote in writing. The code is yours."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
