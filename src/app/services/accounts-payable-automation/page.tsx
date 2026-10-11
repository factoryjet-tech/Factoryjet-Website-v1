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
   /services/accounts-payable-automation, built 2026-10-11.

   Why this page exists: US monthly searches measured 2026-10-11 (DataForSEO,
   location 2840): "accounts payable automation software" 3,600, "accounts
   payable automation" 1,600 (KD 27), "best ap automation software" 390,
   "invoice automation" and "invoice automation software" 320 each, "invoice
   processing automation" 260, "netsuite accounts payable automation" 260,
   "ai for accounts payable" 210, "ai invoice" 170, "accounts payable
   automation services" 110, "ai invoice processing" 110, "ai accounts
   payable" 90, "quickbooks accounts payable automation" 90. The US site did
   not use the phrase anywhere. /au/accounts-payable-automation is the
   Australian page. Nothing here is copied from it.

   Half of that demand is people shopping for software. FactoryJet is a
   services company, so the hero, the short answer and one whole section say
   plainly that we build and support the agent on the buyer's own accounting
   system, and say when an off-the-shelf AP product is the better choice.

   Truth rules for anyone editing this file:
   - Every third-party fact (features, limits, list prices, IRS and Nacha
     rules) was read on that party's own page on 2026-10-11 and links to it
     through the SRC map below. The ledger with the quoted words is in the
     build notes (sources.json). Intuit's QuickBooks pages gave no response
     to curl and were read in a browser. Xero's developer pages are drawn by
     JavaScript, so the text was read from the page-data file the site loads.
     The FBI's page on business email compromise sat behind a security check
     and was not read, so no FBI figure is used.
   - No FactoryJet prices. The dollar figures are (a) list prices of named
     AP products from each maker's own page and (b) two market ranges for a
     BUILD inside one cost FAQ answer (ProductCrafters, Layer3 Labs).
   - Rule of 2026-10-11 (Bhavesh): nothing on this page says what a custom
     agent costs to run or maintain. No model, hosting, per-invoice or
     retainer figure. Upkeep is described only as: build and ongoing support
     quoted as fixed prices in writing, and FactoryJet keeps managing the
     servers, the AI models, the API connections and the upkeep. Do not add
     a running-cost number, and do not import the monthly figure that older
     pages carry.
   - Nothing here says where the FactoryJet team is or is not.
   - The experience claim is Bhavesh's own statement of 2026-10-09 (NetSuite,
     Odoo, SAP Business One, ERPNext and custom ERPs; RFQ automation, daily
     bookkeeping, purchase and sales order generation) plus Xero
     integrations, confirmed 2026-10-11. No client is named and no result is
     claimed. Partner status is not raised. No certification is claimed.
   - The nine products restate each maker's own page. We have not tested
     them and we sell none of them.
   - Mirrors /services/netsuite-ai-agents for components, props and schema.
     That page's hero diagram is a separate component file. This page uses
     an inline list instead, so it stays one file.

   Schema: WebPage + Service + FAQPage + ItemList + BreadcrumbList.
   Organization is rendered once sitewide by src/app/layout.tsx and referenced
   here by @id. The FAQPage mainEntity is generated from the exact FAQ_ITEMS
   array the visible <FAQ> component renders. There is no second array.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/accounts-payable-automation';
const PAGE_TITLE = 'Accounts Payable Automation Built on Your Books | FactoryJet';
const PAGE_DESC =
  'We design, build and support an AI agent that reads, matches, codes and routes vendor invoices on your own QuickBooks, Xero, NetSuite, Odoo or SAP Business One.';
const PAGE_PUBLISHED = '2026-10-11';
const PAGE_MODIFIED = '2026-10-11';
const CHECKED_ON = '11 Oct 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/accounts-payable-automation';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'accounts payable automation',
    'accounts payable automation services',
    'accounts payable automation software',
    'ap automation',
    'ai accounts payable',
    'ai for accounts payable',
    'ai invoice processing',
    'invoice processing automation',
    'invoice automation',
    'quickbooks accounts payable automation',
    'xero accounts payable automation',
    'netsuite accounts payable automation',
    'odoo vendor bill automation',
    'sap business one accounts payable automation',
    'three-way matching',
    'custom ap automation agent',
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
        alt: 'FactoryJet, accounts payable automation built as an AI agent on your own accounting system',
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
  { name: 'Accounts Payable Automation', url: CANONICAL_URL },
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
  name: 'Accounts Payable Automation',
  serviceType:
    'Accounts payable automation, AI invoice processing agent design and build, purchase order and receipt matching, invoice coding, approval routing, integration with QuickBooks Online, Xero, NetSuite, Odoo and SAP Business One, support after launch',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    "FactoryJet designs, builds, tests and supports an AI agent for accounts payable on the client's own accounting system. The agent collects vendor invoices, reads them, checks for duplicates and changed bank details, matches each one to its purchase order and receipt, suggests the coding, routes it for approval and creates the bill in QuickBooks Online, Xero, NetSuite, Odoo or SAP Business One. Approving and paying stay with the client's people. The client owns what is built.",
  url: CANONICAL_URL,
};

/* ── Sources. One map, used by every inline source link (the `short` label) AND
   by the visible "Sources" list near the foot of the page (the full `label`).
   Each URL was opened on 2026-10-11 and the supporting sentence read before the
   claim was written. The ledger with the quoted words is in the build notes. ── */
const NS = 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help';
const ODOO = 'https://www.odoo.com/documentation/20.0';

const SRC = {
  irsW9: {
    short: 'IRS: about Form W-9',
    label: 'IRS: About Form W-9, Request for Taxpayer Identification Number and Certification',
    url: 'https://www.irs.gov/forms-pubs/about-form-w-9',
  },
  irs1099: {
    short: 'IRS: 1099-MISC and 1099-NEC instructions',
    label: 'IRS: Instructions for Forms 1099-MISC and 1099-NEC (revision 12/2026)',
    url: 'https://www.irs.gov/instructions/i1099mec',
  },
  irsContractors: {
    short: 'IRS: reporting payments to contractors',
    label: 'IRS: Reporting payments to independent contractors',
    url: 'https://www.irs.gov/businesses/small-businesses-self-employed/reporting-payments-to-independent-contractors',
  },
  irsBackup: {
    short: 'IRS: backup withholding',
    label: 'IRS: Backup withholding',
    url: 'https://www.irs.gov/businesses/small-businesses-self-employed/backup-withholding',
  },
  irsTin: {
    short: 'IRS: TIN Matching',
    label: 'IRS: Taxpayer Identification Number (TIN) Matching',
    url: 'https://www.irs.gov/tax-professionals/taxpayer-identification-number-tin-matching',
  },
  irsRecords: {
    short: 'IRS: how long to keep records',
    label: 'IRS: How long should I keep records?',
    url: 'https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records',
  },
  nachaPhase1: {
    short: 'Nacha: fraud monitoring rule, phase 1',
    label: 'Nacha: Risk Management Topics, Fraud Monitoring Phase 1 (rule text and FAQ)',
    url: 'https://www.nacha.org/rules/risk-management-topics-fraud-monitoring-phase-1',
  },
  nachaPhase2: {
    short: 'Nacha: fraud monitoring rule, phase 2',
    label: 'Nacha: Risk Management Topics, Fraud Monitoring Phase 2',
    url: 'https://www.nacha.org/rules/risk-management-topics-fraud-monitoring-phase-2',
  },
  afp: {
    short: 'AFP: 2026 payments fraud survey',
    label: 'Association for Financial Professionals: 2026 AFP Payments Fraud and Control Survey Report',
    url: 'https://www.financialprofessionals.org/training-resources/resources/survey-research-economic-data/Details/payments-fraud',
  },
  qbBillPay: {
    short: 'Intuit: QuickBooks Bill Pay',
    label: 'Intuit QuickBooks: Bill Pay (product and plans page, read in a browser)',
    url: 'https://quickbooks.intuit.com/bill-pay/',
  },
  qbBillApi: {
    short: 'Intuit Developer: Bill object',
    label: 'Intuit Developer: QuickBooks Online API reference, Bill (read in a browser)',
    url: 'https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/bill',
  },
  xeroPayBills: {
    short: 'Xero: pay bills',
    label: 'Xero US: Pay Bills on Time With Xero Accounts Payable Software',
    url: 'https://www.xero.com/us/accounting-software/pay-bills/',
  },
  xeroPricing: {
    short: 'Xero: US pricing plans',
    label: 'Xero US: Pricing Plans',
    url: 'https://www.xero.com/us/pricing-plans/',
  },
  xeroInvoicesApi: {
    short: 'Xero Developer: Invoices',
    label: 'Xero Developer: Accounting API, Invoices (sales invoices and purchase bills)',
    url: 'https://developer.xero.com/documentation/api/accounting/invoices',
  },
  xeroPoApi: {
    short: 'Xero Developer: Purchase Orders',
    label: 'Xero Developer: Accounting API, Purchase Orders',
    url: 'https://developer.xero.com/documentation/api/accounting/purchaseorders',
  },
  xeroApps: {
    short: 'Xero App Store: AP software',
    label: 'Xero App Store US: Accounts payable software that integrates with Xero',
    url: 'https://apps.xero.com/us/collection/accounts-payable-software',
  },
  nsBillCapture: {
    short: 'Oracle: Bill Capture',
    label: 'Oracle NetSuite Help Center: Bill Capture',
    url: `${NS}/article_164726334180.html`,
  },
  nsBillLimits: {
    short: 'Oracle: Bill Capture considerations',
    label: 'Oracle NetSuite Help Center: Bill Capture Considerations',
    url: `${NS}/article_0417034348.html`,
  },
  ns3Way: {
    short: 'Oracle: 3 Way Match approval workflow',
    label: 'Oracle NetSuite Help Center: 3 Way Match Vendor Bill Approval Workflow',
    url: `${NS}/section_4096219721.html`,
  },
  nsBillApprovals: {
    short: 'Oracle: vendor bill approvals',
    label: 'Oracle NetSuite Help Center: Vendor Bill Approvals',
    url: `${NS}/section_N2373552.html`,
  },
  nsIpa: {
    short: 'Oracle: Intelligent Payment Automation',
    label: 'Oracle NetSuite Help Center: Intelligent Payment Automation',
    url: `${NS}/article_8155141819.html`,
  },
  nsIpaLimits: {
    short: 'Oracle: payment automation limits',
    label: 'Oracle NetSuite Help Center: Intelligent Payment Automation Limitations',
    url: `${NS}/section_0530040548.html`,
  },
  odooDigit: {
    short: 'Odoo: document digitization',
    label: 'Odoo 20.0 documentation: Document digitization',
    url: `${ODOO}/applications/finance/accounting/vendor_bills/invoice_digitization.html`,
  },
  odoo3Way: {
    short: 'Odoo: control policies and 3-way matching',
    label: 'Odoo 20.0 documentation: Control policies (pay vendor bills with 3-way matching)',
    url: `${ODOO}/applications/inventory_and_mrp/purchase/manage_deals/control_bills.html`,
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
  billPricing: {
    short: 'BILL: pricing',
    label: 'BILL: Pricing and Plans',
    url: 'https://www.bill.com/product/pricing',
  },
  billAp: {
    short: 'BILL: accounts payable',
    label: 'BILL: Accounts Payable Software',
    url: 'https://www.bill.com/product/accounts-payable',
  },
  melioPricing: {
    short: 'Melio: pricing',
    label: 'Melio: Payment Platform Pricing for Businesses',
    url: 'https://melio.com/pricing/',
  },
  rampPricing: {
    short: 'Ramp: pricing',
    label: 'Ramp: Pricing and Plans',
    url: 'https://ramp.com/pricing',
  },
  rampAp: {
    short: 'Ramp: accounts payable',
    label: 'Ramp: Bill Pay, Accounts Payable Automation Software',
    url: 'https://ramp.com/accounts-payable',
  },
  tipaltiPricing: {
    short: 'Tipalti: pricing',
    label: 'Tipalti: Pricing and Plans',
    url: 'https://tipalti.com/pricing/',
  },
  stampli: {
    short: 'Stampli: AP automation',
    label: 'Stampli: AP Automation, Accounts Payable Software Powered by AI',
    url: 'https://www.stampli.com/ap-automation/',
  },
  avidxchange: {
    short: 'AvidXchange: AP automation',
    label: 'AvidXchange: Accounts Payable Automation Software',
    url: 'https://www.avidxchange.com/solutions/accounts-payable-automation/',
  },
  vicai: {
    short: 'Vic.ai',
    label: 'Vic.ai: AP Automation Software, AI-First Invoice Processing',
    url: 'https://www.vic.ai/',
  },
  zone: {
    short: 'Zone & Co: AP automation',
    label: 'Zone & Co: P2P Automation for NetSuite',
    url: 'https://www.zoneandco.com/ap-automation',
  },
  productCrafters: {
    short: 'ProductCrafters cost breakdown, 2026',
    label: 'ProductCrafters: AI Agent Development Cost, $5K to $180K+ (2026 Pricing Breakdown)',
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
   Questions come from the question boxes Google showed for the page's
   searches on 2026-10-11 (DataForSEO, US, location 2840; career questions
   left out) and from the page's own keywords. The brief held no buyer
   questions from the 9 Oct sweeps on this topic. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'AP automation basics' },
  { key: 'software', label: 'Software or a built agent' },
  { key: 'systems', label: 'QuickBooks, Xero, NetSuite and more' },
  { key: 'ai', label: 'AI and accuracy' },
  { key: 'us', label: '1099s, fraud and records' },
  { key: 'working', label: 'Working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── AP automation basics ─────────────────────────────────────────
  {
    category: 'basics',
    question: 'What does "accounts payable automation" mean?',
    answer:
      'It means software does the repeated steps of handling vendor invoices. It collects them, reads the details, checks them against the purchase order and the receipt, chooses the accounts, sends each one to the right approver and enters the bill in your accounting system. People still decide what is approved and paid. Accounts payable, or AP, is the money a business owes its vendors and the work of paying it.',
  },
  {
    category: 'basics',
    question: 'How do you automate accounts payable?',
    answer:
      'Work through the steps in order. First, send every invoice to one mailbox. Second, have software read each invoice into fields. Third, check for duplicates, an unknown vendor or changed bank details. Fourth, match the invoice to its purchase order and receipt. Fifth, set the coding rules. Sixth, set who approves what. Last, post approved bills to your accounting system. Try the tools built into that system before you buy or build anything.',
  },
  {
    category: 'basics',
    question: 'How to process an invoice for accounts payable?',
    answer:
      'There are seven steps. Receive the invoice and log it. Confirm it is from a vendor you know and has not been entered before. Match it to the purchase order and to the record of what was received. Code each line to an account. Send it to the person who can approve it. Enter the approved bill in the ledger. Pay it by its due date in your normal payment run, and keep the original file with the bill.',
  },
  {
    category: 'basics',
    question: 'What is three-way matching?',
    answer:
      "It compares three documents before a bill is approved. The purchase order says what you agreed to buy and at what price. The receipt says what arrived. The vendor's invoice says what you are being charged. If quantity and price agree within the tolerance you set, the bill moves on. If they do not, a person looks at it. A two-way match leaves out the receipt.",
  },
  // ── Software or a built agent ────────────────────────────────────
  {
    category: 'software',
    question: 'What is the best software for accounts payable automation?',
    answer:
      "It depends on your size and your accounting system, so we group by buyer and rank nothing. Small teams on QuickBooks Online or Xero can start with the bill tools built into those systems, then look at Melio or BILL. Teams that want cards and bills in one place look at Ramp. Companies with an ERP and purchase orders look at AvidXchange, Stampli or Tipalti, and NetSuite users at Zone & Co. We have not tested these products. The list on this page restates each maker's own page.",
  },
  {
    category: 'software',
    question: 'How much does AP automation software cost?',
    answer: `These are list prices from the makers' own pages, read on ${CHECKED_ON}. QuickBooks Bill Pay runs from $0 to $45 a month. Melio's first three plans run from $0 to $55 a month. BILL runs from $49 to $89 per user per month. Ramp lists a free plan and a Plus plan at $15 per user per month with a platform fee on top. Tipalti starts at $99 a month plus transaction pricing. Stampli, AvidXchange, Vic.ai and Zone & Co gave no price on the pages we read.`,
  },
  {
    category: 'software',
    question: 'Is FactoryJet an accounts payable software product?',
    answer:
      'No. FactoryJet is a services company. We design, build and support an AI agent on your own accounting system, and you own what we build. There is no FactoryJet app to log in to. If you are shopping for a product to switch on this week, the nine listed on this page are the place to start, and we are glad to tell you which one we would look at in your place.',
  },
  {
    category: 'software',
    question: 'When is an off-the-shelf AP product the better choice?',
    answer:
      'When most of your bills have no purchase order behind them, your approval rules fit a settings screen, you have one company file, and you want to pay vendors in the same tool. A product also wins on speed, since Melio and Ramp each list a free plan you can try today. A built agent earns its place when orders or receipts live in a second system, when your rules come from contracts, or when you run several ledgers.',
  },
  {
    category: 'software',
    question: 'Which companies are the top for AP automation?',
    answer: `There is no neutral ranking. On ${CHECKED_ON} the first page of US Google results for accounts payable automation software showed pages from Zone & Co, Concur, Tipalti, Medius, HighRadius, Paylocity, AvidXchange and NetSuite, plus Gartner's review page and a video. A first-page result shows who invests in search, which is a different thing from who fits your invoices. Shortlist by your accounting system and your invoice volume, then ask each maker for a trial on your own bills.`,
  },
  // ── QuickBooks, Xero, NetSuite and more ──────────────────────────
  {
    category: 'systems',
    question: 'Does QuickBooks have AP automation?',
    answer:
      'Yes, for capture and payment. Intuit says you can email or upload invoices to QuickBooks and AI creates pre-filled bills with dates, terms, category and line items for you to review. Bill Pay Basic is included with a QuickBooks subscription, and rules that require sign-off before money moves come with Bill Pay Elite. Matching each bill against a purchase order and a receipt kept in another system is the usual reason to add something to it.',
  },
  {
    category: 'systems',
    question: 'Can QuickBooks do automatic payments?',
    answer:
      "Yes. Intuit's Bill Pay page says you can pay several vendors at a time, combine several bills into one payment and set fixed monthly bills on autopay, with free standard ACH. Autopay suits rent and subscriptions, where the amount does not change. For bills that vary, keep a person on the approval. The agents we build stop at the approved bill, so the payment run stays in QuickBooks with your team.",
  },
  {
    category: 'systems',
    question: 'Does Xero have AP automation?',
    answer:
      "Partly. Xero says its AI extracts the key details from an uploaded or forwarded bill and creates a draft bill ready for approval, that it flags duplicate bills, and that standard ACH bill payments are included in its business plans. Its Early plan lists 5 bills. For approval chains and purchase order matching, Xero's App Store has a collection of AP apps. A custom agent writes to Xero through its API, which accepts bills as draft or submitted.",
  },
  {
    category: 'systems',
    question: 'Does NetSuite have AP automation?',
    answer:
      "Yes, in parts. Bill Capture reads an emailed or uploaded vendor bill and drafts it for review, and Oracle says it is available only in the United States. The 3 Way Match workflow checks a bill against its purchase order and item receipt. Intelligent Payment Automation, powered by BILL, pays vendors in US dollars. Our NetSuite AI agents page covers these in more detail, along with Oracle's AI Connector Service.",
  },
  {
    category: 'systems',
    question: 'Does Odoo read vendor bills automatically?',
    answer:
      "Yes. Odoo's documentation says it uses OCR and artificial intelligence to read a bill and fill in the record, and that each PDF emailed to the purchase journal's address becomes a draft vendor bill. Odoo describes purchase order matching after that as a manual step. With 3-way matching switched on, each bill shows a Should Be Paid field. An agent adds the matching and the vendor checks around what Odoo already reads.",
  },
  {
    category: 'systems',
    question: 'Can an AI agent post bills to SAP Business One?',
    answer:
      "Yes. SAP's Service Layer, the API for SAP Business One, lists purchase invoices, purchase orders, drafts and approval requests. It also lists PurchaseDeliveryNotes, which SAP describes as the document showing that a shipment or delivery has occurred. An agent reads the order and that document, then creates the purchase invoice or a draft of it for your approval process. FactoryJet has worked on SAP Business One.",
  },
  // ── AI and accuracy ──────────────────────────────────────────────
  {
    category: 'ai',
    question: 'Is AI replacing accounts payable?',
    answer:
      "No. It changes what the day is spent on. The built-in tools are designed around a person. QuickBooks and Xero both draft a bill for someone to review, and NetSuite's Bill Capture puts each scanned bill on a review page. The agents we build follow the same line. They read and match, and they flag what does not fit. Your AP team handles the exceptions, approves the bills, pays them and looks after the vendors.",
  },
  {
    category: 'ai',
    question: 'Can ChatGPT do accounting?',
    answer:
      'Not by itself. Out of the box, a chat app does not know your chart of accounts, your vendors or your approval rules, and it waits for someone to type. It can answer questions and draft entries, but nothing checks its work. The same kind of AI model does useful accounting work inside a proper setup, one with a limited sign-in to your books, written rules, a log of what it did and a person approving the result.',
  },
  {
    category: 'ai',
    question: 'How accurate is AI at reading invoices?',
    answer:
      'It depends on your vendors, so we do not quote one figure. Product makers quote their own. Ramp and BILL each state 99% on their pages. Clean PDF invoices read well. Phone photos, handwriting and long statements read worse. Before launch we run a sample of your own past invoices through the agent and count how often each field matches what your team entered. After launch, a person checks any field the agent is unsure of.',
  },
  // ── 1099s, fraud and records ─────────────────────────────────────
  {
    category: 'us',
    question: 'What is the 1099-NEC threshold in 2026?',
    answer:
      'It is $2,000. The IRS instructions say you file Form 1099-NEC for each person you paid at least $2,000 during the year for services in the course of your business. The threshold increased for tax years beginning after 2025 and may be adjusted for inflation from calendar year 2027. The agent keeps a running total per vendor, so the list is ready in January. Ask your CPA how the rule applies to you.',
  },
  {
    category: 'us',
    question: 'Do we need a W-9 from every vendor?',
    answer:
      'Collect one before the first payment to any vendor you may have to report, and ask your CPA which vendors are exempt. IRS Form W-9 is how a vendor gives you a correct taxpayer identification number. The IRS lists a payee who did not provide a correct number among the cases where a payer must withhold 24 percent from future payments. In our builds, the first bill from a new vendor is held until a W-9 is on file.',
  },
  {
    category: 'us',
    question: 'How do you stop fake invoices and changed bank details?',
    answer:
      'By checking the vendor record before the invoice. In the 2026 AFP survey, 76% of organizations reported attempted or actual payments fraud in 2025. Nacha, which writes the ACH rules, gives change controls on vendor payment information as an example of a fraud procedure. In our builds, a new vendor or a bill whose bank details differ from the record stops until a named person calls the vendor on a number already on file.',
  },
  {
    category: 'us',
    question: 'How long should we keep vendor invoices?',
    answer:
      'The IRS says to keep records for 3 years in the general case, for 6 years if income was under-reported by more than 25%, and for 7 years after a bad debt deduction or a loss from worthless securities. State rules and your auditors may ask for longer. The agent attaches the original invoice file to each bill and keeps its log of checks and approvals with it, so the paper and the decision sit together.',
  },
  {
    category: 'us',
    question: 'Does the agent pay our vendors?',
    answer:
      "No. It stops at the approved bill. Payments stay in your normal process, whether that is QuickBooks Bill Pay, Xero, NetSuite's payment tools, a product such as BILL or your bank portal, with your usual people releasing them. In the 2026 AFP survey, 58% of organizations reported check fraud in 2025, more than ACH or wire. Keeping payment release with a named person is one of the simplest controls there is.",
  },
  // ── Working with us ──────────────────────────────────────────────
  {
    category: 'working',
    question: 'How much does a custom AP agent cost to build?',
    answer:
      "It depends on how many systems the agent reads and writes, and how many rules it follows. US agencies typically charge $5,000 to $15,000 for a single-workflow build such as invoice intake, according to Layer3 Labs' 2026 guide. Development firm ProductCrafters puts custom AI agents of every kind at roughly $5,000 to more than $180,000. Purchase order matching, several entities and a second system move a project up that range. FactoryJet quotes a fixed price in writing after a short scoping call.",
  },
  {
    category: 'working',
    question: 'Who looks after the agent after launch?',
    answer:
      'We do. FactoryJet quotes the build and the ongoing support as fixed prices in writing after a short scoping call. After launch, the team that built the agent keeps managing the servers, the AI models, the API connections and the upkeep, so your finance team does not have to. That includes re-testing on your sample invoices when your accounting system or the AI model changes. Our AI agent monitoring and support page describes the service.',
  },
  {
    category: 'working',
    question: 'How long does it take to set up?',
    answer:
      'A pilot on one narrow workflow usually takes two to four weeks. For accounts payable that means one mailbox, your main vendors and draft bills for review. A production agent with permissions, logging, approvals and monitoring usually takes six to twelve weeks. Purchase order matching against a second system and several entities sit at the longer end. Every bill waits for a person at first, so you see results on live invoices before the agent is trusted with more.',
  },
  {
    category: 'working',
    question: 'Can we see it working before we sign?',
    answer:
      'Yes. Before a contract, we show working software on your own data. For accounts payable that means a sample of invoices you have already entered, run through a first version of the agent. You compare its drafts with what your team did, field by field, including the purchase orders it matched and the coding it suggested. If a built-in tool or a product would do the job as well, that is the moment we say so.',
  },
  {
    category: 'working',
    question: 'Who owns the agent and its code?',
    answer:
      'You do. The agent is built for you and the code is yours, along with the written rules and the test invoices. It can run in your own cloud account. We still look after it day to day, which covers the servers, the AI models, the API connections and the updates. If you later move the work in-house or to another firm, everything goes with you.',
  },
  {
    category: 'working',
    question: 'Where does our invoice data go?',
    answer:
      'The original invoices and the bills stay in your mailbox and your accounting system. To read an invoice, the agent sends it to an AI model. Before the build we name that provider, and every other system that touches your data, in writing, so your security lead can review them. The agent signs in to your accounting system with a user of its own that can create bills and cannot release payments.',
  },
  {
    category: 'working',
    question: 'Will our bookkeeper or CPA still be involved?',
    answer:
      'Yes, and they should be. We agree the account codes, classes, approval limits and hold rules with your bookkeeper, controller or CPA before the build, and they review the bills the agent flags. Year-end filing, such as Forms 1099-NEC, stays with them. If you are an accounting firm, the same setup can be built per client file, and we also do white-label work for agencies and firms.',
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

/* ── Hero figure: what happens to one vendor invoice. Orange rows are the
   agent we build. Black-outline rows are the client's people and system. ── */
const HERO_FLOW: ReadonlyArray<{ n: string; t: string; b: string; who: 'agent' | 'person' }> = [
  { n: '01', t: 'Arrives.', b: 'By email, upload or EDI, which is system to system. The agent picks it up from your AP mailbox.', who: 'agent' },
  { n: '02', t: 'Read.', b: 'Vendor, invoice number, dates, every line, tax and total.', who: 'agent' },
  { n: '03', t: 'Checked.', b: 'Known vendor, not a duplicate, bank details unchanged, W-9 on file.', who: 'agent' },
  { n: '04', t: 'Matched.', b: 'To its purchase order and the receipt for what arrived.', who: 'agent' },
  { n: '05', t: 'Coded.', b: 'Account, class, location or job, from your own history and rules.', who: 'agent' },
  { n: '06', t: 'Approved.', b: 'By the person your rules name, with the checks in front of them.', who: 'person' },
  { n: '07', t: 'Posted and paid.', b: 'The bill lands in your accounting system. Your team releases the payment.', who: 'person' },
];

/* ── When to buy a product and when to have an agent built. Product facts
   are from each maker's own page as read on 2026-10-11. ── */
type Fit = { t: string; b: string; sources: ReadonlyArray<SrcKey> };

const BUY_WHEN: ReadonlyArray<Fit> = [
  {
    t: 'Most of your bills have no purchase order',
    b: 'Rent, utilities, software and professional fees need capture, one approval and a payment. That is the whole job, and every product on this page does it.',
    sources: [],
  },
  {
    t: 'Your approval rules fit a settings screen',
    b: "Rules by amount, vendor or department are standard. Melio's Boost plan lists approval routing based on vendor, amount or user. Ramp's free plan lists configurable approval workflows.",
    sources: ['melioPricing', 'rampPricing'],
  },
  {
    t: 'You want to pay vendors in the same tool',
    b: 'BILL, Melio, Ramp and QuickBooks Bill Pay all move the money as well as the paperwork. The agents we build stop at the approved bill.',
    sources: ['billPricing', 'melioPricing', 'rampPricing', 'qbBillPay'],
  },
  {
    t: 'You are on QuickBooks Online or Xero with one company file',
    b: 'Both read an emailed or uploaded bill with AI and draft it for your review. Try that first.',
    sources: ['qbBillPay', 'xeroPayBills'],
  },
  {
    t: 'You need it this month',
    b: 'Melio and Ramp each list a free plan you can try the same day. A pilot agent on one narrow workflow usually takes two to four weeks.',
    sources: ['melioPricing', 'rampPricing'],
  },
];

const BUILD_WHEN: ReadonlyArray<Fit> = [
  {
    t: 'The purchase order or the receipt lives somewhere else',
    b: 'The order sits in a job-costing, inventory or field system and the bill sits in the ledger. Matching the two means reading both.',
    sources: [],
  },
  {
    t: 'Your rules come from contracts',
    b: 'Contract rates, freight allowances, coding split across jobs or grants, and retainage (money held back until a job is finished). A settings screen has no box for these.',
    sources: [],
  },
  {
    t: 'You run more than one ledger',
    b: 'Several entities, several QuickBooks company files, or an ERP (the system that runs purchasing and stock) with a second system for the books.',
    sources: [],
  },
  {
    t: 'The built-in limits bite',
    b: "NetSuite Bill Capture takes one bill per file and files up to 8 MB. Its 3 Way Match workflow does not support item receipts that were partly received. Odoo's journal email address takes PDF and XML only.",
    sources: ['nsBillLimits', 'ns3Way', 'odooDigit'],
  },
  {
    t: 'You want to own it',
    b: 'The agent is built for you and the code is yours. If you later move the work in-house or to another firm, it goes with you.',
    sources: [],
  },
];

/* ── What each accounting system already does. Each card restates the maker's
   own pages as read on 2026-10-11. Nothing here is our opinion of the product. ── */
const SYSTEMS: ReadonlyArray<{
  name: string;
  kind: string;
  says: string;
  sources: ReadonlyArray<SrcKey>;
  span: string;
}> = [
  {
    name: 'QuickBooks Online',
    kind: 'Built in · Bill Pay',
    says: "Intuit says you can email or upload invoices and AI creates pre-filled bills with dates, terms, category and line items for you to review. Bill Pay Basic is included with a QuickBooks subscription. Rules that require sign-off before money moves come with Bill Pay Elite, which is included with QuickBooks Advanced. Intuit's API reference, the manual for software that talks to QuickBooks, lists 22 attributes on a bill, and none of them is a draft or approval status.",
    sources: ['qbBillPay', 'qbBillApi'],
    span: 'lg:col-span-7',
  },
  {
    name: 'Xero',
    kind: 'Built in · bills read by AI',
    says: "Xero says its AI extracts the key details from an uploaded or forwarded bill and creates a draft bill ready for approval, and that it flags duplicate bills. Its Early plan lists 5 bills. In Xero's API a bill can sit as DRAFT or SUBMITTED, and neither creates journals, so nothing reaches your reports. AUTHORISED is the approved state. The API also reads and writes purchase orders. For approval chains, Xero's App Store has a collection of AP apps.",
    sources: ['xeroPayBills', 'xeroPricing', 'xeroInvoicesApi', 'xeroPoApi', 'xeroApps'],
    span: 'lg:col-span-5',
  },
  {
    name: 'Oracle NetSuite',
    kind: 'From Oracle · Bill Capture and 3 Way Match',
    says: 'Bill Capture creates a vendor bill from an emailed or uploaded PDF, JPEG or PNG and learns from user corrections. Oracle says it is available only in the United States. The 3 Way Match workflow checks a bill against its purchase order and item receipt, and sends a bill with a discrepancy to a supervisor. A bill that is Pending Approval has no accounting impact. Intelligent Payment Automation, powered by BILL, pays vendors in US dollars only.',
    sources: ['nsBillCapture', 'nsBillLimits', 'ns3Way', 'nsBillApprovals', 'nsIpa', 'nsIpaLimits'],
    span: 'lg:col-span-5',
  },
  {
    name: 'Odoo',
    kind: 'Built in · document digitization',
    says: "Odoo's documentation says it uses OCR (software that turns a scan into text) and artificial intelligence to read a vendor bill and fill in the record. Each PDF emailed to the purchase journal's address becomes a draft vendor bill. With 3-way matching switched on, each bill shows a Should Be Paid field set to Yes, No or Exception, and Odoo notes that an Exception does not block the bill. Outside software signs in to Odoo 20 with an API key.",
    sources: ['odooDigit', 'odoo3Way', 'odooApi'],
    span: 'lg:col-span-7',
  },
  {
    name: 'SAP Business One',
    kind: 'Service Layer · the API an agent uses',
    says: "SAP's Service Layer reference lists PurchaseInvoices, which it describes as a request for payment, alongside PurchaseOrders, PurchaseDeliveryNotes, Drafts and ApprovalRequests. That covers the documents a three-way match needs and gives a draft somewhere to wait. SAP says OData Version 4 is the primary protocol as of feature package 2405.",
    sources: ['sapServiceLayer'],
    span: 'lg:col-span-12',
  },
];

/* ── Seven jobs. One card each. Bullets are deliberately uneven. ── */
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
    title: 'Capture: every invoice into one queue',
    body: 'Invoices arrive in a shared mailbox, in a scanner folder or by EDI (electronic data interchange, where two systems swap documents with no PDF in between). The agent collects them in one place.',
    items: [
      'Watches the AP mailbox and pulls each PDF, image or spreadsheet out of the email',
      'Splits a file that holds several invoices into one record each',
      'Sets statements, remittance notes and marketing email aside, so they never become bills',
      'Keeps the original file and attaches it to the bill',
    ],
    note: "This is where built-in capture runs out first. Oracle lists one bill per file for NetSuite Bill Capture, with PDFs up to 30 pages and files up to 8 MB. Odoo's journal email address takes PDF and XML only, and JPEG files have to go through its Documents app.",
    sources: ['nsBillLimits', 'odooDigit'],
    span: 'lg:col-span-7',
  },
  {
    n: '02',
    title: 'Read: every line, with doubts marked',
    body: 'An AI model reads the vendor, the invoice number, the dates and terms, each line, freight, tax and the total.',
    items: [
      'Checks that lines, tax and freight add up to the total',
      'Marks any field it is unsure of for a person to look at, and says why',
    ],
    note: 'We do not quote one accuracy figure, because it depends on your vendors. Product makers quote their own, and Ramp and BILL each state 99% on their pages. Before launch we run a sample of your own past invoices through the agent and count how often each field matches what your team entered.',
    sources: ['rampAp', 'billAp'],
    span: 'lg:col-span-5',
  },
  {
    n: '03',
    title: 'Check: the vendor before the invoice',
    body: 'Payment fraud arrives looking like a normal invoice. So the first checks are about who is asking to be paid.',
    items: [
      'Matches the sender and the vendor name to a vendor already on file',
      'Holds any invoice whose bank details differ from the vendor record, and sends it to a named person to confirm by phone',
      'Looks for the same vendor, number, date and amount among bills already entered',
      "Checks that a W-9, the IRS form that carries a vendor's tax number, is on file before a new vendor's first bill moves on",
    ],
    note: "In the 2026 AFP Payments Fraud and Control Survey, 76% of organizations reported attempted or actual payments fraud in 2025. Nacha's fraud monitoring rule has covered every non-consumer Originator, its term for a business that initiates ACH payments (bank-to-bank transfers), since June 19, 2026.",
    sources: ['afp', 'nachaPhase1', 'nachaPhase2'],
    span: 'lg:col-span-5',
  },
  {
    n: '04',
    title: 'Match: the bill, the order and the receipt',
    body: "A three-way match compares the purchase order, the receipt for what arrived and the vendor's invoice. A two-way match leaves out the receipt.",
    items: [
      'Finds the purchase order from the number on the invoice, or from the vendor, items and amounts when the number is missing',
      'Compares quantity and price line by line, inside the tolerance you set, which is how far off a line may be before a person looks',
      'Handles part deliveries, such as three receipts against one order or one invoice across two orders',
      'Shows a mismatch on the line it is on, with both documents side by side',
      'Reads the order or the receipt from a second system when it is not in the ledger',
    ],
    note: "NetSuite's 3 Way Match workflow sends a bill with a discrepancy to a supervisor, and Oracle lists a limitation, which is that item receipts that have been partially received are not supported. In Odoo, a changed bill is marked Exception, and Odoo says that does not block it.",
    sources: ['ns3Way', 'odoo3Way'],
    span: 'lg:col-span-7',
  },
  {
    n: '05',
    title: 'Code: the accounts your team would have chosen',
    body: 'Coding means choosing the general ledger account for each line, plus the class, location, department or job.',
    items: [
      'Starts from how your team coded the same vendor and item before',
      'Applies written rules where history is not enough, such as splitting a utility bill across locations',
      'Leaves a line uncoded and flagged when nothing fits. It does not guess',
    ],
    note: 'A messy chart of accounts, which is your list of accounts, gives messy suggestions. We agree the coding rules with your controller or bookkeeper before the build, and they review the lines the agent flags.',
    sources: [],
    span: 'lg:col-span-7',
  },
  {
    n: '06',
    title: 'Route: to the person your rules name',
    body: 'Approval rules decide who signs off a bill before it is paid.',
    items: [
      'Routes by amount, vendor, department, job or whether a purchase order exists',
      'Sends the approver the invoice, the matched order and the checks that were run',
      'Reminds a late approver, then passes the bill to the backup you chose',
      'Records who approved, when, and what they were shown',
    ],
    note: 'A bill that matched its order inside tolerance can go straight to your normal approval step. One that did not goes to a person first. Where that line sits is your decision, and we write it down before the build.',
    sources: [],
    span: 'lg:col-span-5',
  },
  {
    n: '07',
    title: 'Post: the bill goes in, and the agent stops',
    body: 'Once approved, the bill is created in your accounting system with the original file attached. The agent pays no one.',
    items: [
      'QuickBooks Online: creates the bill after approval and links it to its purchase order',
      'Xero: saves the bill as DRAFT or SUBMITTED, and your approver authorises it in Xero',
      'NetSuite: saves the vendor bill as Pending Approval for your own workflow',
      'Odoo: creates a draft vendor bill',
      'SAP Business One: creates the purchase invoice through the Service Layer, or a draft where your approval setup calls for one',
    ],
    note: "Each system records a bill differently. Xero says a draft or submitted bill creates no journals. Oracle's table shows no accounting impact for a NetSuite bill that is Pending Approval. Intuit lists no draft status on a QuickBooks bill, which is why the QuickBooks route approves first and posts second.",
    sources: ['xeroInvoicesApi', 'nsBillApprovals', 'qbBillApi', 'odooDigit', 'sapServiceLayer'],
    span: 'lg:col-span-12',
  },
];

/* ── US checks. Three come from a rule, three we set up, two the client's team
   keeps. IRS, Nacha and AFP facts are from the linked pages. ── */
type Keeper = 'rule' | 'build' | 'person';

const KEEPER_LABEL: Record<Keeper, string> = {
  rule: 'The rule',
  build: 'We set up',
  person: 'Your team keeps',
};

const CHECKS: ReadonlyArray<{ rule: string; keeper: Keeper; note: string }> = [
  {
    rule: 'The 1099-NEC line is $2,000',
    keeper: 'rule',
    note: 'The IRS instructions say you file Form 1099-NEC for each person you paid at least $2,000 in the year for services. The threshold increased for tax years beginning after 2025 and may be adjusted for inflation from 2027. The agent keeps a running total per vendor.',
  },
  {
    rule: '24 percent backup withholding',
    keeper: 'rule',
    note: 'The IRS lists a payee who did not give the payer a correct TIN among the cases where a payer must withhold 24 percent from future payments. A Form 1099-NEC is then due whatever the amount.',
  },
  {
    rule: 'ACH fraud monitoring, since June 19, 2026',
    keeper: 'rule',
    note: "Nacha's rule now covers every non-consumer Originator, its term for a business that initiates ACH payments, whatever its volume. It asks for risk-based processes and procedures to spot payments that are unauthorized or made under false pretenses, reviewed at least once a year.",
  },
  {
    rule: 'A W-9 on file before the first bill moves',
    keeper: 'build',
    note: "IRS Form W-9 is how a vendor gives you a correct taxpayer identification number, or TIN. In our builds, the agent checks that one is on file when a new vendor's first invoice arrives, and holds the bill if it is missing.",
  },
  {
    rule: 'A hold on changed bank details',
    keeper: 'build',
    note: "Nacha's definition of false pretenses covers business email compromise and vendor impersonation, and its own example of a procedure is change controls on vendor payment information. In our builds, a bill whose bank details differ from the vendor record stops until a named person has called the vendor on a number already on file.",
  },
  {
    rule: 'The original file on every bill',
    keeper: 'build',
    note: 'The IRS says to keep records for 3 years in the general case, and for 6 or 7 years in cases it names. The agent attaches the original invoice to the bill and keeps a log of each check and approval beside it.',
  },
  {
    rule: 'TIN matching and year-end filing',
    keeper: 'person',
    note: 'The IRS TIN Matching service checks a name and TIN pair before you file, and the IRS says it is only for payers and their authorized agents. Your team or your CPA runs it and files the returns. The agent hands over the vendor totals.',
  },
  {
    rule: 'Releasing the money',
    keeper: 'person',
    note: 'In the AFP survey, 58% of organizations reported check fraud in 2025, more than ACH or wire. Whatever the method, a named person releases each payment run in your bank or payment tool.',
  },
];

/* ── Where AP automation projects break. Each one comes from a linked page. ── */
const BREAKS: ReadonlyArray<{ t: string; b: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    t: 'Several invoices in one PDF',
    b: 'Oracle lists one bill per file for NetSuite Bill Capture. A vendor that sends a week of invoices as one scan needs a step that splits the file first.',
    sources: ['nsBillLimits'],
  },
  {
    t: 'An order that arrives in parts',
    b: "Oracle says NetSuite's 3 Way Match workflow does not support item receipts that have been partially received. Decide early how part deliveries are matched.",
    sources: ['ns3Way'],
  },
  {
    t: 'The same invoice sent twice',
    b: "Intuit says QuickBooks throws an error when a duplicate document number is sent. Xero's reference calls the number on a bill non-unique. An exact-number check also misses a resend with one digit changed, so the agent compares vendor, date and amount as well.",
    sources: ['qbBillApi', 'xeroInvoicesApi'],
  },
  {
    t: 'No draft status in QuickBooks Online',
    b: "Intuit's API reference lists 22 attributes on a bill and none is a draft or approval status. Intuit calls a bill an AP transaction, so approval has to come before the bill is created.",
    sources: ['qbBillApi'],
  },
  {
    t: 'Auto-posting switched on too early',
    b: "Odoo can post a vendor's bills with no review. One of its options offers that after 3 bills are confirmed without edits. Decide which vendors earn it, and keep new vendors out.",
    sources: ['odooDigit'],
  },
  {
    t: 'A new bank account on a normal-looking invoice',
    b: "Nacha's false pretenses definition covers vendor impersonation. Reading the invoice well does not help when the pay-to account belongs to someone else. The check has to be against the vendor record.",
    sources: ['nachaPhase1'],
  },
  {
    t: 'A W-9 chased in January',
    b: 'The filing line for Form 1099-NEC is $2,000 paid in the year, and a missing TIN can mean 24 percent backup withholding. Collect the form before the first payment, while the vendor still wants something from you.',
    sources: ['irs1099', 'irsBackup'],
  },
  {
    t: 'A payment tool you cannot rehearse',
    b: "Oracle says NetSuite's Intelligent Payment Automation can be used only in a production account. Test the bill side in a sandbox, and keep the first live payment run small.",
    sources: ['nsIpaLimits'],
  },
];

/* ── Our experience, stated plainly. No client is named on this page and no
   result is claimed. The first card is Bhavesh's own statement of 2026-10-09
   plus the Xero line confirmed on 2026-10-11. The last is the upkeep wording
   allowed by the rule of 2026-10-11. ── */
const EXPERIENCE: ReadonlyArray<{ t: string; kind: string; what: string; href: string; cta: string; span: string }> = [
  {
    t: 'What we have worked on',
    kind: 'ERP and accounting systems',
    what: 'FactoryJet has worked on NetSuite, Odoo, SAP Business One, ERPNext and custom ERPs. The jobs were RFQ automation, daily bookkeeping, and purchase and sales order generation. We also build Xero integrations, and our QuickBooks work is on the Shopify QuickBooks integration page.',
    href: '/services/erp-ai-agents',
    cta: 'See AI agents for ERP systems',
    span: 'lg:col-span-7',
  },
  {
    t: 'What you see before you sign',
    kind: 'A demo on your own data',
    what: 'Before a contract, we show working software on your own data. For accounts payable that means a sample of invoices you have already entered, run through a first version so you can lay its drafts beside what your team did.',
    href: '/contact',
    cta: 'Ask for a demo on your invoices',
    span: 'lg:col-span-5',
  },
  {
    t: 'Proof you can check',
    kind: 'Public case studies',
    what: 'Client projects with public case studies are on our case studies page.',
    href: '/case-studies',
    cta: 'See all case studies',
    span: 'lg:col-span-5',
  },
  {
    t: 'Who looks after it',
    kind: 'Managed after launch',
    what: 'FactoryJet quotes the build and the ongoing support as fixed prices in writing after a short scoping call. After launch we keep managing the servers, the AI models, the API connections and the upkeep, so your finance team does not have to.',
    href: '/services/ai-agent-monitoring',
    cta: 'See monitoring and support',
    span: 'lg:col-span-7',
  },
];

/* ── Who this is for. Examples of the kinds of team the work suits, not a
   client list. Pictures were generated on 2026-10-11 and checked at the size
   they ship. The people in them are not FactoryJet staff or clients. ── */
const INDUSTRIES: ReadonlyArray<{ img: string; alt: string; t: string; b: string }> = [
  {
    img: `${IMG}/receiving-dock-packing-slip.webp`,
    alt: 'A woman in a grey T-shirt holds a clipboard and rests one hand on a pallet of plain cardboard cartons at a warehouse receiving bay, with an orange hand truck beside the pallet and a box truck outside the open door',
    t: 'Wholesale distributors',
    b: 'Hundreds of purchase orders, and deliveries that arrive in parts. Each bill is matched to its order and to what the dock received.',
  },
  {
    img: `${IMG}/contractor-site-office-bills.webp`,
    alt: 'A man with a grey beard in a navy plaid flannel shirt sorts blank sheets of paper into two wire trays at a wooden desk in a site office, with an orange hard hat on the desk and a timber house frame outside the window',
    t: 'Contractors and builders',
    b: 'Subcontractor bills and supplier invoices are coded to a job. W-9s are collected before the first payment, and year-end 1099 totals are kept as you go.',
  },
  {
    img: `${IMG}/restaurant-delivery-check.webp`,
    alt: 'A woman in a white chef jacket and dark apron holds a sheet of paper and lifts a bunch of leafy greens from a wooden crate on a steel kitchen counter, next to an orange plastic crate',
    t: 'Restaurants and multi-site operators',
    b: 'Many small invoices from many vendors, often on paper. Each one is read and checked against the delivery, then coded to its location.',
  },
  {
    img: `${IMG}/controller-approving-paper-bill.webp`,
    alt: 'A man in glasses and a light blue shirt holds a pen over a blank sheet of paper at a pale wood desk, with a stack of paper on one side and an orange folder on the other',
    t: 'Finance teams and controllers',
    b: 'Bills arrive already matched to their orders and coded. Your controller keeps the sign-off, and month-end starts with fewer open questions.',
  },
];

/* ── Process. Six steps, in the order we work. ── */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'Map how invoices reach you today',
    b: 'We follow real invoices from arrival to payment with the person who enters them. That covers the mailboxes, the vendors, the purchase orders and the approvers.',
  },
  {
    n: '02',
    t: 'Check the built-in tools and the products first',
    b: "If your accounting system's own bill capture or an AP product already does the job, we tell you which one and stop there.",
  },
  {
    n: '03',
    t: 'Write the rules down',
    b: 'With your controller or bookkeeper we write the checks, the coding rules, the matching tolerances, the approval limits and what gets held, such as a new vendor or changed bank details.',
  },
  {
    n: '04',
    t: 'Show it on your own invoices',
    b: 'Before a contract, we run a sample of invoices you have already entered through a first version, so you can compare its drafts with what your team did.',
  },
  {
    n: '05',
    t: 'Build it with the least access it needs',
    b: 'The agent gets a sign-in of its own to your accounting system, limited to reading vendors and orders and creating bills. It has no access to payments. Where your system has a sandbox or a test company, we build there first.',
  },
  {
    n: '06',
    t: 'Run it beside your team, then stay on',
    b: 'For an agreed period every bill waits for a person, and the rules are fixed where the agent and your team differ. After launch the same team reads the logs, re-tests when your accounting system or the AI model changes, and fixes what breaks.',
  },
];

/* ── Comparison: three ways to automate accounts payable ── */
const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: '01 Built into your accounting system' },
  { label: '02 An off-the-shelf AP product' },
  { label: '03 An agent built for you' },
];

const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'What it is',
    values: [
      'Bill capture and approvals that come with QuickBooks, Xero, NetSuite or Odoo',
      'A subscription product such as BILL, Melio, Ramp, Stampli or Tipalti',
      'An AI agent designed around your rules, built for you and owned by you',
    ],
  },
  {
    feature: 'Reading the invoice',
    values: [
      'AI or OCR drafts the bill for your review',
      'AI or OCR capture, with line-item coding on some plans',
      'An AI model reads every line, tested first on your own past invoices',
    ],
  },
  {
    feature: 'Matching to the order and the receipt',
    values: [
      'NetSuite and Odoo document 3-way matching, each with listed limits',
      'On higher plans or add-ons. BILL lists it under Enterprise, Ramp in its Procurement add-on',
      'Against orders and receipts wherever they are kept, including a second system',
    ],
  },
  {
    feature: 'Approval rules',
    values: [
      'By status or workflow inside the system',
      'By amount, vendor, department or user',
      'Whatever you can write down, including contract terms',
    ],
  },
  {
    feature: 'Paying vendors',
    values: [
      'QuickBooks, Xero and NetSuite each offer bill payments',
      'Yes. Paying is the core of most of these products',
      'No. The agent stops at the approved bill and your team pays',
    ],
  },
  {
    feature: 'How it is priced',
    values: [
      'Inside your subscription, or as a paid plan or add-on',
      'A monthly subscription, often per user. Some also charge per payment',
      'A fixed price for the build and a fixed price for ongoing support, both quoted in writing',
    ],
  },
  {
    feature: 'Who you call when it breaks',
    values: ['The software maker', "The product's support team", 'The team that built it'],
  },
  {
    feature: 'Right call when',
    values: [
      'Volume is low and the built-in feature already does the job',
      'Bills are simple and you want payments in the same tool',
      'Orders or receipts live in another system, or your rules do not fit a settings screen',
    ],
  },
];

/* ── Nine AP products a US search shows. Each line restates the maker's own
   page as read on 2026-10-11, with its list price where that page gives one.
   Feeds the visible list AND the ItemList JSON-LD. ── */
const OTHERS: ReadonlyArray<{ name: string; focus: string; says: string; source: SrcKey }> = [
  {
    name: 'BILL',
    focus: 'AP and AR product · priced per user',
    says: 'Its pricing page lists Essentials at $49, Team at $65 and Corporate at $89 per user per month, with custom pricing for Enterprise. Team and Corporate list AI coding of multi-line bills. Syncing purchase orders with automatic 2 and 3-way matching is listed under Enterprise. BILL says some payment types also carry per-transaction fees.',
    source: 'billPricing',
  },
  {
    name: 'QuickBooks Bill Pay',
    focus: 'Built into QuickBooks Online',
    says: 'Intuit lists Bill Pay at $0 a month as part of a QuickBooks subscription, Bill Pay Premium at $15 a month and Bill Pay Elite at $45 a month, with Elite included in QuickBooks Advanced. Its page lists AI-powered bill creation from uploaded or emailed invoices, and says sign-off rules before money moves come with Elite.',
    source: 'qbBillPay',
  },
  {
    name: 'Melio',
    focus: 'Bill pay for small businesses',
    says: 'Its pricing page lists the Go plan at $0 for one user, Core at $25 a month and Boost at $55 a month. Those are the prices when billed monthly. Go lists AI bill capture. Core adds approval workflows and unlimited sync with QuickBooks Online and Xero. Boost adds QuickBooks Desktop and approval routing by vendor, amount or user.',
    source: 'melioPricing',
  },
  {
    name: 'Ramp',
    focus: 'Corporate card with bill pay',
    says: 'Its pricing page lists a Free plan at $0 per user per month with invoice extraction, configurable approval workflows and automated fraud checks. Plus is $15 per user per month with a platform fee based on team size. Three-way match with Ramp purchase orders sits in a Procurement add-on.',
    source: 'rampPricing',
  },
  {
    name: 'Tipalti',
    focus: 'AP automation · supplier onboarding to reconciliation',
    says: 'Its pricing page lists Tipalti Accounts Payable from $99 a month, with transaction pricing per invoice and payment on top. Tipalti describes supplier onboarding, invoice processing, purchase order matching and reconciliation in one system.',
    source: 'tipaltiPricing',
  },
  {
    name: 'Stampli',
    focus: 'AP automation on top of your ERP',
    says: 'Its page says Stampli supports more than 70 ERPs and deploys in weeks, and that its AI, called Billy, handles capture, coding, routing and fraud detection. The page gives no price and says cost depends on the capabilities you want.',
    source: 'stampli',
  },
  {
    name: 'AvidXchange',
    focus: 'AP automation for mid-sized companies',
    says: 'Its page says AvidXchange is built for middle-market businesses and connects to more than 200 accounting systems. It lists purchase order automation with 2 or 3-way matching. The page we read gives no price.',
    source: 'avidxchange',
  },
  {
    name: 'Vic.ai',
    focus: 'AI-first invoice processing',
    says: 'Its site describes autonomous invoice processing, purchase order matching and an open API that connects to ERP and accounting systems. The page we read gives no price.',
    source: 'vicai',
  },
  {
    name: 'Zone & Co',
    focus: 'Software · built for NetSuite',
    says: 'A software maker for NetSuite. Its page describes procurement, invoice capture, approvals, payments and reconciliation in one built-for-NetSuite workflow, with ZoneCapture handling invoice ingestion, coding and bill creation. The page we read gives no price.',
    source: 'zone',
  },
];

const othersSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Accounts payable automation products a US search shows',
  itemListElement: OTHERS.map((o, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: o.name,
    url: SRC[o.source].url,
  })),
};

const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  { href: '/services/erp-ai-agents', t: 'AI agents for ERP systems', b: 'The overview: Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs on one page.' },
  { href: '/services/netsuite-ai-agents', t: 'NetSuite AI agents', b: "Bill Capture, Oracle's AI Connector and custom agents inside NetSuite." },
  { href: '/services/odoo-ai-agents', t: 'Odoo AI agents', b: 'The same work inside Odoo.' },
  { href: '/services/document-intake-ai-agents', t: 'Document intake AI agents', b: 'The same reading and checking for orders, forms, claims and applications.' },
  { href: '/services/sales-order-automation-ai-agents', t: 'Sales and purchase order automation', b: 'Customer purchase orders turned into draft sales orders, and purchase orders drafted for suppliers.' },
  { href: '/services/ai-inventory-management-agents', t: 'AI inventory management agents', b: 'Low-stock flags and draft purchase orders for a person to approve.' },
  { href: '/uk/accounts-payable-automation', t: 'Accounts payable automation for UK businesses', b: 'The UK page, with VAT invoice checks and UK list prices for AP products.' },
  { href: '/services/shopify-quickbooks-integration', t: 'Shopify QuickBooks integration', b: 'Stock, prices and books kept in step with the store.' },
  { href: '/services/ai-agent-monitoring', t: 'AI agent monitoring and support', b: 'Watching, re-testing and fixing an agent after launch.' },
  { href: '/blog/ai-agent-build-vs-buy-2026', t: 'Guide: build or buy an AI agent', b: 'The same choice this page covers, for agents beyond accounts payable.' },
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

/** One row in the "buy a product" and "have an agent built" lists. */
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

export default function AccountsPayableAutomationPage() {
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
                    ACCOUNTS PAYABLE AUTOMATION &middot; UNITED STATES
                  </span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.2rem]">
                  Accounts payable automation, built as an AI agent on your own books.
                </h1>

                <p className="mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                  FactoryJet is a services company. We design, build and support an AI agent that reads your vendor
                  invoices, matches them to purchase orders and receipts, codes them, sends each one to the right
                  approver and posts the bill to QuickBooks, Xero, NetSuite, Odoo or SAP Business One. It is built for
                  you and you own it. We do not sell a subscription product, and when an off-the-shelf accounts payable
                  (AP) product is the better fit we say so. You get a fixed quote in writing before work starts.
                </p>

                <div className="mt-6">
                  <HeroInlineForm
                    region="us"
                    source="services_accounts_payable_automation_hero"
                    service="Accounts Payable Automation"
                    submitLabel="Scope my AP agent"
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
                  <span>Demo on your own invoices before a contract</span>
                  <span>500+ businesses served</span>
                  <span>Founded 2014</span>
                  <span>Sources read {CHECKED_ON}</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
                  <figcaption className="font-fj-mono text-[11px] font-bold uppercase tracking-wider text-[#B23E13]">
                    What happens to one vendor invoice
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
                      Orange: the agent we build for you.
                    </li>
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-[3px] h-3 w-3 flex-shrink-0 rounded-sm border-[1.5px] border-[#14110F] bg-white" />
                      Black outline: your people and your accounting system.
                    </li>
                  </ul>
                  <p className="mt-3 font-fj-body text-[13px] leading-snug text-fj-neutral-600">
                    The agent never releases a payment. Approving and paying stay with named people.
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
                Accounts payable automation means software reads each vendor invoice, checks it against the purchase
                order and the receipt, codes it, routes it for approval and posts the bill to your accounting system.
                FactoryJet builds that as an AI agent on your own QuickBooks, Xero, NetSuite, Odoo or SAP Business
                One, and supports it after launch. Your team approves and pays.
              </p>
              <p className="mt-4 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                Many people who search this are shopping for software. In US search data we pulled on {CHECKED_ON},
                &ldquo;accounts payable automation software&rdquo; drew about 3,600 searches a month and
                &ldquo;accounts payable automation&rdquo; about 1,600. We sell no subscription product. If a product
                such as BILL or Ramp already fits your invoices and approvals, buy it. The next section says how to
                tell.
              </p>
            </div>
          </div>
        </section>

        {/* 3. PRODUCT OR BUILT AGENT */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Software or a service</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              When an off-the-shelf AP product is the better choice.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Start here, because it may save you a project. Five signs point to a product and five point to a built
              agent. Product facts are from each maker&rsquo;s own page as read on {CHECKED_ON}. The nine products we
              read are{' '}
              <a href="#ap-products" className="font-semibold text-fj-ink underline underline-offset-4">
                listed further down
              </a>
              , with their list prices.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <h3 className="font-fj-display text-xl font-semibold text-fj-ink">Buy a product when</h3>
                <FitList items={BUY_WHEN} accent={false} />
              </div>
              <div className="lg:col-span-6">
                <h3 className="font-fj-display text-xl font-semibold text-fj-ink">Have an agent built when</h3>
                <FitList items={BUILD_WHEN} accent />
              </div>
            </div>

            <p className="mt-8 max-w-3xl font-fj-body text-base leading-relaxed text-fj-ink">
              The two also work together. A payment product can move the money while an agent does the matching and
              the coding in front of it.
            </p>
          </div>
        </section>

        {/* 4. WHAT YOUR ACCOUNTING SYSTEM ALREADY DOES */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Before anyone builds</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              What QuickBooks, Xero, NetSuite, Odoo and SAP Business One already do.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Each card restates the maker&rsquo;s own pages, as read on {CHECKED_ON}. If one of these already does
              your job, you do not need a build, and we will tell you so. For more depth on two of them, see{' '}
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
                What we found on {CHECKED_ON}
              </div>
              <h3 className="mt-3 font-fj-display text-xl font-semibold text-fj-ink">
                Three differences between these systems that change the build.
              </h3>
              <ul className="mt-4 grid max-w-3xl gap-3 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  A draft has somewhere to wait in four of the five. Xero, NetSuite, Odoo and SAP Business One each
                  document a draft or pending state. Intuit&rsquo;s API reference gives a QuickBooks bill none, so on
                  QuickBooks the agent holds each bill in its own review queue until someone approves it.
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  Duplicate invoice numbers are treated differently. Intuit says QuickBooks throws an error when a
                  duplicate document number is sent. Xero&rsquo;s reference calls the number on a bill non-unique.
                  The agent runs its own duplicate check in every build.
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  Part deliveries need a rule of their own. Oracle says NetSuite&rsquo;s 3 Way Match workflow does
                  not support item receipts that have been partially received, and Bill Capture takes one bill per
                  file.
                </li>
              </ul>
              <SourceLinks ids={['qbBillApi', 'xeroInvoicesApi', 'ns3Way', 'nsBillLimits']} />
            </div>
          </div>
        </section>

        {/* 5. COMPARISON: three ways to automate accounts payable */}
        <ComparisonTable
          eyebrow="Three routes compared"
          headline="Built-in tools, an AP product, or an agent built for you."
          lead="Each route suits somebody. On the scoping call we tell you which one we would pick in your place, including when the answer is a product we do not sell."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer={`Product and platform facts are from each maker's own pages as read on ${CHECKED_ON}. Links are in the sources list below.`}
          scrollRegionLabel="Comparison of three ways to automate accounts payable"
        />

        {/* 6. SEVEN JOBS */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Seven jobs</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Seven jobs the agent does on every vendor invoice.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Two words cover most of what follows. A vendor invoice is what your supplier sends. A bill is that
              invoice once it is in your accounting system. Each card says what the agent does and what is worth
              knowing about the systems around it. If your orders start in an ERP, the overview page is{' '}
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
                    <span className="font-semibold">Worth knowing.</span> {s.note}
                  </p>
                  <SourceLinks ids={s.sources} />
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Four things stay with your people in every build: approving a bill, releasing a payment, accepting a
              new vendor or a change of bank details, and closing the month. In the US search data we pulled on{' '}
              {CHECKED_ON}, NetSuite accounts payable automation drew about 260 searches a month and the QuickBooks
              version about 90.
            </p>
            <p className="mt-3 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
              Maker notes are as listed on {CHECKED_ON}.
            </p>
          </div>
        </section>

        <MidPageCTA
          headline="Tell us how invoices reach you today. We will say if a product already does the job."
          sub="Send your accounting system and roughly how many vendor invoices you get a month. We reply with what the built-in tools cover, which AP product we would look at in your place, what we would build, and a fixed quote if there is work for us."
          label="Scope my AP agent"
        />

        {/* 7. US CHECKS: W-9s, 1099s, ACH FRAUD RULES, RECORDS */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">US rules</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  W-9s, 1099s, ACH fraud rules and records: the US checks built in.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  A US accounts payable process answers to the IRS at year end. It also answers to Nacha, the body
                  that writes the rules for ACH payments, each time money moves.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  An agent that reads every invoice is a good place to run these checks, because it sees each vendor
                  before the first payment goes out.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  Eight checks follow. Three come from a rule, we set up three and your team keeps two.
                </p>
                <p className="mt-4 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                  This is a summary for planning and is not tax advice. Your CPA decides how each rule applies to
                  you.
                </p>
                <SourceLinks
                  ids={['irsW9', 'irs1099', 'irsContractors', 'irsBackup', 'irsTin', 'irsRecords', 'nachaPhase1', 'nachaPhase2', 'afp']}
                />
              </div>

              <ul className="grid gap-3 lg:col-span-8">
                {CHECKS.map((k) => (
                  <li
                    key={k.rule}
                    className={`grid grid-cols-1 gap-2 rounded-2xl border bg-fj-cream px-5 py-4 sm:grid-cols-[190px_1fr] sm:gap-5 ${
                      k.keeper === 'build' ? 'border-[#F05A28]/45' : 'border-fj-neutral-200'
                    }`}
                  >
                    <div>
                      <div className="font-fj-display text-base font-semibold text-fj-ink">{k.rule}</div>
                      <div
                        className={`mt-1 font-fj-mono text-[11px] font-bold uppercase tracking-wider ${
                          k.keeper === 'build' ? 'text-[#B23E13]' : 'text-fj-neutral-600'
                        }`}
                      >
                        {KEEPER_LABEL[k.keeper]}
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
            <p className="fj-eyebrow">The traps</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Eight places an AP automation project breaks.
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Knowing these early saves a rebuild. Each one rests on a page linked beneath it.
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
              What we have done on accounting systems, stated plainly.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              FactoryJet was founded in 2014 and has served more than 500 businesses. You see working software on
              your own invoices before we ask you to sign anything.
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
                  Built for teams that match invoices to orders by hand today.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  The trade changes the paperwork. The job is the same in each one. An invoice arrives, someone checks
                  it against what was ordered and what turned up, and someone types it in.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  If your books are in QuickBooks and your sales are on Shopify, see{' '}
                  <Link
                    href="/services/shopify-quickbooks-integration"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    Shopify QuickBooks integration
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
                  How we design, build and support an AP agent.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Built-in tools and products are checked first. Then the rules are written down, shown on your own
                  invoices and built with limited access. After launch,{' '}
                  <Link
                    href="/services/ai-agent-monitoring"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    AI agent monitoring and support
                  </Link>{' '}
                  keeps it working as your accounting system and the AI models change. For agents beyond accounts
                  payable, see{' '}
                  <Link
                    href="/services/ai-agent-development"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    AI agent development
                  </Link>
                  .
                </p>
                <img
                  src={`${IMG}/planning-approval-rules.webp`}
                  alt="A woman in a dark green sweater and a white-haired man in a charcoal cardigan, seen from behind, stand at a long table where she sets one orange card into a row of six white cards"
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

        {/* 12. NINE AP PRODUCTS A US SEARCH SHOWS */}
        <section id="ap-products" className="border-t border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Off-the-shelf options</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Nine AP automation products a US search shows.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  We wrote this list and we sell none of these. Each one came up in US searches for accounts payable
                  automation terms on {CHECKED_ON}. Each line restates the maker&rsquo;s own page as read that day,
                  with its list price where the page gives one.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Five of the nine publish a price on the page we read, and four do not. We have not tested these
                  products, and the order is not a ranking.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  Where a built agent differs is fit. It follows the rules you wrote across the systems you already
                  have, and you own it.
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
              Related AI agent services and guides.
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
                  Sources, checked on {CHECKED_ON}.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Every product feature, list price, platform limit and rule on this page was read from the pages
                  listed here on that day. Most answered a plain web request. Intuit&rsquo;s QuickBooks pages did
                  not, so those were read in a browser. Makers change these pages, so check the linked page before
                  you act on one.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  We did not test the nine products named above, and four of them give no price on the page we read.
                  Search figures are US monthly averages from DataForSEO.
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
          eyebrow="Accounts payable automation FAQ"
          headline="Accounts payable automation questions, answered plainly."
          lead={`What controllers, AP leads and business owners ask before automating vendor invoices. Product and platform answers are from each maker's own pages as read on ${CHECKED_ON}.`}
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 16. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="Accounts payable automation"
          headline="Keep your accounting system. Add an agent your team can check."
          sub="Tell us how vendor invoices reach you today. We say what your system's own tools or an AP product already cover, show a first version on your own invoices and stay on after launch."
          primaryCta={{ label: 'Scope my AP agent', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="Demo on your own invoices before a contract. Fixed quote in writing. You own the code."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
