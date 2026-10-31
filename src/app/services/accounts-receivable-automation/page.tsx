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
   /services/accounts-receivable-automation, built 2026-10-22.

   Why this page exists: row 28 of the 11 Oct opportunity list
   (pipeline/research/data/page-opportunities-2026-10-11/opportunities.csv).
   US monthly searches, DataForSEO, location 2840: "accounts receivable
   automation" 260 at a $274 CPC (KD 20), "ar automation software" 260,
   "ar automation" 210, "ai collections" 140, "automated collections" 140,
   "ai collections agent" 70, "ai accounts receivable" 50, "automated payment
   reminders" 50, "collections automation" 40. Before building, the live
   sitemap, src/app/** and the blog posts were searched on 2026-10-22 for
   "accounts receivable", "collections", "invoice to cash", "dunning" and
   "cash application". No page answered the topic. The nearest is the blog
   post on AI agents for finance teams, which covers AR in one table row.
   This page is the sibling of /services/accounts-payable-automation and
   mirrors its components, props and schema. Nothing is copied from it.

   Truth rules for anyone editing this file:
   - Every third-party fact (features, limits, list prices, legal text) was
     read on the maker's or regulator's own page on 2026-10-22 and links to
     it through the SRC map below. Intuit's pages and Xero's developer pages
     are drawn by JavaScript and were read in a browser. The ledger of quoted
     words is in the build notes (scratchpad ar/txt and the session log).
   - No FactoryJet prices. Dollar figures are (a) list prices of named AR
     products from each maker's own page and (b) two market ranges for a
     BUILD inside one cost FAQ (Layer3 Labs, ProductCrafters).
   - Rule of 2026-10-11 (Bhavesh): nothing here says what a custom agent costs
     to run or maintain. Terms are the house terms: fixed price per phase,
     quoted in writing; changes quoted and approved per request; no monthly
     minimum. Optional upkeep covers the servers, AI models and API connections.
   - No labour-replacement framing. The agent drafts, matches and flags; the
     client's people keep credit decisions, disputes, write-offs and calls.
   - Nothing here says where the FactoryJet team is or is not.
   - Experience claim is Bhavesh's statement of 2026-10-09 (NetSuite, Odoo,
     SAP Business One, ERPNext, custom ERPs; RFQ automation, daily
     bookkeeping, purchase and sales order generation) plus Xero work
     confirmed 2026-10-11. One client named (Sow Easy, WooCommerce + Odoo,
     store and Odoo link being tested on staging, launch still ahead; not AR work).
     No result claimed, no partner status raised. Business Central is named as a system the agent can
     connect to through Microsoft's documented API, not as past work.
   - The eight products restate each maker's own page. We have not tested
     them and we sell none of them.
   - Legal lines (FDCPA definition, Regulation F call presumption) are
     planning notes, not legal advice, and say so.

   Schema: WebPage + Service + FAQPage + ItemList + BreadcrumbList.
   Organization is rendered once sitewide by src/app/layout.tsx and referenced
   here by @id. FAQPage mainEntity is generated from the exact FAQ_ITEMS array
   the visible <FAQ> component renders. There is no second array.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/accounts-receivable-automation';
const PAGE_TITLE = 'Accounts Receivable Automation with AI | FactoryJet';
const PAGE_DESC =
  'An AI agent for accounts receivable automation: payment reminders, cash application and dispute cases on QuickBooks, Xero, NetSuite or Business Central.';
const PAGE_PUBLISHED = '2026-10-22';
const PAGE_MODIFIED = '2026-10-31';
const CHECKED_ON = '22 Oct 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/accounts-receivable-automation';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'accounts receivable automation',
    'ar automation',
    'ar automation software',
    'ai accounts receivable',
    'ai collections',
    'ai collections agent',
    'automated collections',
    'collections automation',
    'automated payment reminders',
    'cash application automation',
    'invoice to cash automation',
    'dunning automation',
    'quickbooks accounts receivable automation',
    'netsuite accounts receivable automation',
    'business central payment reconciliation',
    'custom ar automation agent',
  ],
  alternates: {
    canonical: CANONICAL_URL,
    languages: twinAlternates['accounts-receivable-automation'],
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
        alt: 'FactoryJet, accounts receivable automation built as an AI agent on your own accounting system',
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
  { name: 'Accounts Receivable Automation', url: CANONICAL_URL },
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
  name: 'Accounts Receivable Automation',
  serviceType:
    'Accounts receivable automation, AI collections agent design and build, invoice delivery, payment reminders and dunning, cash application, dispute and deduction handling, credit hold flags, AR reporting, integration with QuickBooks Online, Xero, NetSuite, Microsoft Dynamics 365 Business Central, SAP Business One, Odoo, Stripe and bank feeds, support after launch',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    "FactoryJet designs, builds, tests and supports an AI agent for accounts receivable on the client's own accounting system. The agent sends invoices and payment reminders on the client's rules, matches incoming customer payments and remittances to open invoices, gathers the papers for disputes and short payments, flags accounts for a credit hold and reports what is overdue. Credit decisions, disputes, write-offs and customer calls stay with the client's people. The client owns what is built.",
  url: CANONICAL_URL,
};

/* ── Sources. One map, used by every inline source link (the `short` label) AND
   by the visible "Sources" list near the foot of the page (the full `label`).
   Each URL was opened on 2026-10-22 and the supporting sentence read before the
   claim was written. ── */
const NS = 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help';
const BC = 'https://learn.microsoft.com/en-us/dynamics365/business-central';
const ODOO = 'https://www.odoo.com/documentation/18.0/applications/finance/accounting';

const SRC = {
  qbReminders: {
    short: 'Intuit: invoice reminders',
    label: 'Intuit QuickBooks: Send invoice reminders automatically or manually in QuickBooks Online (read in a browser)',
    url: 'https://quickbooks.intuit.com/learn-support/en-us/help-article/invoicing/send-invoice-reminders-automatically-manually/L84cQjpxo_US_en_US',
  },
  qbPaymentApi: {
    short: 'Intuit Developer: Payment object',
    label: 'Intuit Developer: QuickBooks Online API reference, Payment (read in a browser)',
    url: 'https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/payment',
  },
  xeroInvoicing: {
    short: 'Xero: send invoices',
    label: 'Xero US: Easy online invoicing software',
    url: 'https://www.xero.com/us/accounting-software/send-invoices/',
  },
  xeroBankRec: {
    short: 'Xero: bank reconciliation with JAX',
    label: 'Xero US: Reconcile bank transactions',
    url: 'https://www.xero.com/us/accounting-software/reconcile-bank-transactions/',
  },
  xeroPaymentsApi: {
    short: 'Xero Developer: Payments',
    label: 'Xero Developer: Accounting API, Payments (read in a browser)',
    url: 'https://developer.xero.com/documentation/api/accounting/payments',
  },
  nsDunning: {
    short: 'Oracle: Dunning Letters SuiteApp',
    label: 'Oracle NetSuite Help Center: Dunning Overview',
    url: `${NS}/section_4026576646.html`,
  },
  nsDunningAuto: {
    short: 'Oracle: sending dunning letters automatically',
    label: 'Oracle NetSuite Help Center: Sending Dunning Letters Automatically',
    url: `${NS}/section_4047184493.html`,
  },
  nsDunningProcs: {
    short: 'Oracle: creating dunning procedures',
    label: 'Oracle NetSuite Help Center: Creating Dunning Procedures',
    url: `${NS}/section_4023009552.html`,
  },
  bcCollect: {
    short: 'Microsoft: collect outstanding balances',
    label: 'Microsoft Learn, Business Central: Collect outstanding balances',
    url: `${BC}/receivables-collect-outstanding-balances`,
  },
  bcReminders: {
    short: 'Microsoft: reminder terms and levels',
    label: 'Microsoft Learn, Business Central: Set up reminder terms and levels',
    url: `${BC}/finance-setup-reminders`,
  },
  bcAutoApply: {
    short: 'Microsoft: apply payments automatically',
    label: 'Microsoft Learn, Business Central: Reconcile payments using automatic application',
    url: `${BC}/receivables-how-reconcile-payments-auto-application`,
  },
  bcRules: {
    short: 'Microsoft: payment application rules',
    label: 'Microsoft Learn, Business Central: Set up rules for automatic application of payments',
    url: `${BC}/receivables-how-set-up-payment-application-rules`,
  },
  bcPaymentApi: {
    short: 'Microsoft: customerPayment API',
    label: 'Microsoft Learn, Business Central API v2.0: customerPayment resource type',
    url: `${BC}/dev-itpro/api-reference/v2.0/resources/dynamics_customerpayment`,
  },
  sapServiceLayer: {
    short: 'SAP: Service Layer API reference',
    label: 'SAP Help Portal: SAP Business One Service Layer API Reference',
    url: 'https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html',
  },
  odooFollowUp: {
    short: 'Odoo: follow-up on invoices',
    label: 'Odoo 18.0 documentation: Follow-up on invoices',
    url: `${ODOO}/payments/follow_up.html`,
  },
  odooRecon: {
    short: 'Odoo: bank reconciliation',
    label: 'Odoo 18.0 documentation: Bank reconciliation',
    url: `${ODOO}/bank/reconciliation.html`,
  },
  stripeBankTransfer: {
    short: 'Stripe: bank transfer reconciliation',
    label: 'Stripe Docs: Bank transfers for invoices (automatic transfer reconciliation)',
    url: 'https://docs.stripe.com/invoicing/bank-transfer',
  },
  stripeEmails: {
    short: 'Stripe: invoice emails and reminders',
    label: 'Stripe Docs: Send customer emails for invoices',
    url: 'https://docs.stripe.com/invoicing/send-email',
  },
  stripePricing: {
    short: 'Stripe: Invoicing pricing',
    label: 'Stripe: Invoicing pricing',
    url: 'https://stripe.com/invoicing/pricing',
  },
  fdcpaDef: {
    short: '15 U.S.C. 1692a: FDCPA definitions',
    label: 'Legal Information Institute, Cornell Law School: 15 U.S. Code 1692a, Definitions (Fair Debt Collection Practices Act)',
    url: 'https://www.law.cornell.edu/uscode/text/15/1692a',
  },
  regF: {
    short: '12 CFR 1006.14: Regulation F call limits',
    label: 'eCFR: 12 CFR 1006.14, Harassing, oppressive, or abusive conduct (Regulation F)',
    url: 'https://www.ecfr.gov/current/title-12/chapter-X/part-1006/subpart-B/section-1006.14',
  },
  billPricing: {
    short: 'BILL: pricing',
    label: 'BILL: Pricing and Plans',
    url: 'https://www.bill.com/product/pricing',
  },
  versapay: {
    short: 'Versapay',
    label: 'Versapay: Unified Invoice-to-Cash Solution',
    url: 'https://www.versapay.com/',
  },
  highradius: {
    short: 'HighRadius: AR automation',
    label: 'HighRadius: Accounts Receivable Automation Software',
    url: 'https://www.highradius.com/product/accounts-receivable-automation/',
  },
  billtrust: {
    short: 'Billtrust',
    label: 'Billtrust: AI-powered Accounts Receivable (AR) Software',
    url: 'https://www.billtrust.com/',
  },
  upflow: {
    short: 'Upflow: pricing',
    label: 'Upflow: Pricing',
    url: 'https://upflow.io/pricing',
  },
  gaviti: {
    short: 'Gaviti: pricing',
    label: 'Gaviti: Pricing and Plans',
    url: 'https://gaviti.com/pricing/',
  },
  paystand: {
    short: 'Paystand: receivables',
    label: 'Paystand: Accounts Receivable Automation and AI Agents',
    url: 'https://www.paystand.com/receivables',
  },
  invoiced: {
    short: 'Invoiced',
    label: 'Invoiced (a Flywire company): Accounts Receivable Automation',
    url: 'https://www.invoiced.com/pricing',
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
   Questions come from the question boxes Google showed on 2026-10-22 for the
   page's 12 searches (DataForSEO, US, location 2840, cost $0.027; questions
   about consumer debt, phones and AI stocks left out) and from the
   opportunity row's searches. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'AR automation basics' },
  { key: 'software', label: 'Software or a built agent' },
  { key: 'systems', label: 'QuickBooks, Xero, NetSuite and more' },
  { key: 'ai', label: 'AI and collections' },
  { key: 'rules', label: 'Collection rules' },
  { key: 'working', label: 'Working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── AR automation basics ─────────────────────────────────────────
  {
    category: 'basics',
    question: 'What is accounts receivable automation?',
    answer:
      'It means software does the repeated steps of getting paid by your customers. It sends invoices, reminds customers before and after the due date, matches each incoming payment to the invoices it pays, and reports what is overdue. People still decide who gets credit, how a dispute ends and what is written off. Accounts receivable, or AR, is the money customers owe you and the work of collecting it.',
  },
  {
    category: 'basics',
    question: 'How do you automate the accounts receivable process?',
    answer:
      'Work in order. Send every invoice by email from your accounting system, so it can be tracked. Turn on the reminders your system already has. Feed your bank into the books so payments arrive as data. Write matching rules for payments that carry an invoice number. Then add a person, or an agent, for what is left: payments with no reference, short payments, disputes and the accounts that need a phone call.',
  },
  {
    category: 'basics',
    question: 'What is cash application, and how do you automate it?',
    answer:
      'Cash application is matching each customer payment to the invoices it pays and closing them in the ledger. It is slow when the remittance, the note saying what a payment covers, arrives apart from the money, by email or PDF. Automating it means reading the bank line and the remittance, finding the open invoices by number, name and amount, and leaving unclear matches for a person.',
  },
  {
    category: 'basics',
    question: 'What KPIs matter for accounts receivable?',
    answer:
      'Three cover most of it. Days sales outstanding, or DSO, is roughly how many days of sales are still unpaid. The aging report shows what is current, 1 to 30, 31 to 60, 61 to 90 and over 90 days late. Collection effectiveness compares what you collected with what you could have collected in a period. Add two working numbers: payments waiting to be matched, and disputes still open.',
  },
  {
    category: 'basics',
    question: 'What is the journal entry for accounts receivable?',
    answer:
      'When you invoice on credit, debit accounts receivable and credit revenue, plus sales tax payable if you charge it. When the customer pays, debit cash and credit accounts receivable. A short payment leaves the difference open on the invoice until a person decides whether it is a dispute, a deduction the customer is owed, or a write-off. Your accountant sets the accounts each of those goes to.',
  },
  // ── Software or a built agent ────────────────────────────────────
  {
    category: 'software',
    question: 'What is the best software for automating accounts receivable?',
    answer:
      'It depends on your size and your accounting system, so we rank nothing. Small teams on QuickBooks Online or Xero can start with the reminders built into those systems. Teams that want invoicing and payments in one place look at BILL. Mid-sized and larger companies with an ERP look at Versapay, Billtrust, HighRadius, Upflow or Gaviti. We have not tested these products. The list on this page restates each maker\'s own page.',
  },
  {
    category: 'software',
    question: 'How much does AR automation software cost?',
    answer: `These are list prices from the makers' own pages, read on ${CHECKED_ON}. BILL runs from $49 to $89 per user per month, and its plans list automated payment reminders. Stripe Invoicing charges 0.4% or 0.5% per paid invoice. Upflow and Gaviti quote on request. Versapay, Billtrust, HighRadius, Paystand and Invoiced gave no price on the pages we read.`,
  },
  {
    category: 'software',
    question: 'Is there free software for accounts receivable?',
    answer:
      'Check your accounting subscription before you pay for anything. QuickBooks Online sends up to three automatic reminders per invoice. Xero lists automated invoice reminders. Odoo has follow-up levels built in, though its letters and text messages need paid credits. NetSuite users can add Oracle\'s Dunning Letters SuiteApp. If those cover your reminders, the next thing worth paying for is usually the matching of payments, not more emails.',
  },
  {
    category: 'software',
    question: 'Is FactoryJet an accounts receivable software product?',
    answer:
      'No. FactoryJet is a services company. We design, build and support an AI agent on your own accounting system, and you own what we build. There is no FactoryJet app to log in to. If you want a product to switch on this week, the eight listed on this page are a fair place to start, and we will tell you which one we would look at in your place.',
  },
  // ── QuickBooks, Xero, NetSuite and more ──────────────────────────
  {
    category: 'systems',
    question: 'Can QuickBooks automate accounts receivable?',
    answer:
      'Partly. Intuit says QuickBooks Online can send a first, second and third reminder, each up to 90 days before or after the due date, and only for invoices you have already emailed from QuickBooks. QuickBooks Online Advanced can use workflows instead. In the API, one payment can be applied to several invoices and credit memos (notes that lower what a customer owes), or left unapplied as a credit. That is where an agent does its matching.',
  },
  {
    category: 'systems',
    question: 'Does Xero send automatic invoice reminders?',
    answer:
      "Yes. Xero says its automated reminders nudge customers before and after the due date with your own message. For matching, Xero's AI feature JAX categorizes and matches bank transactions on the Growing plan and above. Xero's API applies payments to approved invoices, and a BatchPayments endpoint pays several invoices in one transaction. An agent works through that API for the payments JAX cannot place.",
  },
  {
    category: 'systems',
    question: 'Does NetSuite have accounts receivable automation?',
    answer:
      "Yes, for reminders. Oracle's Dunning Letters SuiteApp sets up an automated dunning process and sends reminder letters by procedure and level. Oracle lists cases where a letter is not sent, such as paused dunning or no change in level. Oracle also says you have to set dunning procedures up by hand on NetSuite's screens. They cannot be imported from a file or created by code. Our NetSuite AI agents page covers the wider picture.",
  },
  {
    category: 'systems',
    question: 'How does Business Central match customer payments to invoices?',
    answer:
      "With the Payment Reconciliation Journal. Microsoft says Apply Automatically matches bank statement lines to open entries using rules you set, first by name, bank account or address, then by document number, then by amount. Each suggestion gets a Match Confidence of Low, Medium or High, and a rule can require review. Business Central also sends reminders by level, with a grace period so a paid customer is not chased.",
  },
  {
    category: 'systems',
    question: 'Can an AI agent work with SAP Business One or Odoo?',
    answer:
      "Yes. SAP's Service Layer, the API for SAP Business One, lists IncomingPayments, which it describes as payments from customers, and a DunningTermsService. Odoo's documentation describes follow-up levels by days overdue that can send an email, a letter or a text, and reconciliation models that pre-select matching entries. An agent reads and writes through those, and FactoryJet has worked on both SAP Business One and Odoo.",
  },
  {
    category: 'systems',
    question: 'Can Stripe reconcile payments to invoices automatically?',
    answer:
      "For bank transfers to Stripe invoices, yes. Stripe says it uses the transfer's reference code and amount to find matching invoices, and when several are eligible it takes them by due date. If it cannot reconcile a transfer, the money stays in the customer balance until someone does it by hand. Stripe can also email reminders for unpaid invoices. Payments outside Stripe need their own matching.",
  },
  // ── AI and collections ───────────────────────────────────────────
  {
    category: 'ai',
    question: 'Can AI do accounts receivable?',
    answer:
      'It can do the reading, matching and drafting. It should not make the decisions. In the agents we build, AI reads remittances and short-payment notes, suggests which invoices a payment belongs to, and drafts reminders in your words. Matching a payment that carries an invoice number was rule-based long before AI. The new part is reading messy emails and PDFs. A person still approves unclear matches, credit holds and disputes.',
  },
  {
    category: 'basics',
    question: 'What is invoice-to-cash, and how is it different from order-to-cash?',
    answer:
      'Invoice-to-cash is every step from sending an invoice to closing it as paid: delivery, reminders, receiving the payment, cash application and settling any dispute. Order-to-cash is wider. It starts when the customer places the order and adds the credit check, fulfilment and invoicing in front. Most AR automation sits in the invoice-to-cash part, because that is where payments and paperwork stop lining up.',
  },
  {
    category: 'ai',
    question: 'What is an AI collections agent?',
    answer:
      'It is software that does the routine follow-up on unpaid invoices. For business customers it sends reminders, answers "can you resend the invoice" emails, attaches statements and flags accounts that need a call. In our builds it sends email only, in the tone you approve, and stops as soon as a customer raises a dispute. Calls and payment plans stay with your team. Consumer debts come under extra rules.',
  },
  {
    category: 'basics',
    question: 'What is the difference between accounts receivable and accounts payable automation?',
    answer:
      'Accounts receivable is money customers owe you. Accounts payable is money you owe suppliers. AR automation sends invoices, chases payment and matches the cash coming in. AP automation reads supplier invoices, checks them against orders and routes them for approval before money goes out. Both read documents and match them to the ledger, but the controls differ. Our accounts payable automation page covers the supplier side.',
  },
  // ── Collection rules ─────────────────────────────────────────────
  {
    category: 'rules',
    question: 'Do debt collection laws apply to business invoices?',
    answer:
      'The main federal one mostly does not. The Fair Debt Collection Practices Act defines a debt as an obligation of a consumer for personal, family or household purposes, so a business invoice to another business sits outside that definition. State laws and your contracts still apply, and selling to consumers changes the picture. This is a planning note, not legal advice. Ask your counsel before automating any collection from consumers.',
  },
  {
    category: 'rules',
    question: 'What is the 7-7-7 rule for collections?',
    answer:
      'It comes from Regulation F, the federal rule for consumer debt collectors. A collector is presumed to comply on call frequency if it calls a person about a debt no more than seven times in seven days, and not within seven days after a phone conversation about that debt. It is written for consumer debt. The agents we build for business invoices send email and leave calls to your team.',
  },
  // ── Working with us ──────────────────────────────────────────────
  {
    category: 'working',
    question: 'How much does a custom AR agent cost to build?',
    answer:
      "It depends on how many systems the agent reads and writes, and how many rules it follows. US agencies typically charge $5,000 to $15,000 for a single-workflow build, according to Layer3 Labs' 2026 guide, and $15,000 to $50,000 for several workflows. ProductCrafters puts custom AI agents of every kind at roughly $5,000 to more than $180,000. FactoryJet quotes a fixed price per phase, in writing, after a short scoping call.",
  },
  {
    category: 'working',
    question: 'How long does it take to set up?',
    answer:
      'A pilot on one narrow job usually takes two to four weeks. For accounts receivable that is often cash application on one bank account, with every match waiting for a person. A production agent with reminders, disputes, permissions, logging and monitoring usually takes six to twelve weeks. Several entities, a second system for orders and lockbox files sit at the longer end.',
  },
  {
    category: 'working',
    question: 'Can we see it working before we sign?',
    answer:
      'Yes. Before a contract, we show working software on your own data. For accounts receivable that means a sample of payments and remittances your team has already applied, run through a first version of the agent. You compare its matches with what your team did, line by line. If your accounting system or a product would do the job as well, that is the moment we say so.',
  },
  {
    category: 'working',
    question: 'Who owns the agent, and who looks after it?',
    answer:
      'You own it. The code, the written rules and the test data are yours, and it can run in your own cloud account. The build is a fixed price per phase, quoted in writing. Support is optional: each change is quoted and approved before work starts, and there is no monthly minimum. If you choose support, we manage the servers, the AI models and the API connections after launch. If you move the work elsewhere, everything goes with you.',
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

/* ── Hero figure: what happens to one customer invoice. Orange rows are the
   agent we build. Black-outline rows are the client's people and system. ── */
const HERO_FLOW: ReadonlyArray<{ n: string; t: string; b: string; who: 'agent' | 'person' }> = [
  { n: '01', t: 'Sent.', b: 'The invoice goes out from your accounting system, with a pay link if you take card or ACH (a bank-to-bank transfer).', who: 'agent' },
  { n: '02', t: 'Reminded.', b: 'Before and after the due date, in your words, and never to a customer with an open dispute.', who: 'agent' },
  { n: '03', t: 'Matched.', b: 'The payment and its remittance are matched to the invoices they pay.', who: 'agent' },
  { n: '04', t: 'Flagged.', b: 'Short payments, deductions and disputes are gathered into one case with the papers attached.', who: 'agent' },
  { n: '05', t: 'Decided.', b: 'A person settles the dispute, agrees a plan or approves a write-off.', who: 'person' },
  { n: '06', t: 'Held or released.', b: 'Your credit lead decides whether new orders wait.', who: 'person' },
  { n: '07', t: 'Reported.', b: 'Aging, unmatched cash and open disputes, every morning.', who: 'agent' },
];

/* ── Six jobs. One card each. Bullets are deliberately uneven. ── */
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
    title: 'Invoicing: out on time, to the right person',
    body: 'Late invoices are paid late. The agent makes sure each one leaves your accounting system when the work is done, to the address that pays it.',
    items: [
      'Creates the invoice from a shipped order, a signed timesheet or a milestone, where those live in another system',
      'Sends it from your accounting system, so reminders and tracking work afterwards',
      "Uses the customer's AP mailbox or portal, not the buyer who placed the order",
    ],
    note: 'An invoice exported as a PDF and sent by hand usually falls outside the built-in reminder schedule. The QuickBooks card below gives Intuit\'s exact rule.',
    sources: ['qbReminders'],
    span: 'lg:col-span-7',
  },
  {
    n: '02',
    title: 'Reminders and dunning: firm, polite, and stopped when they should be',
    body: 'Automated collections starts with payment reminders that grow firmer as an invoice gets later. Most systems send them. The trouble starts when one fires at the wrong customer.',
    items: [
      'Sends reminders before and after the due date, by level, in wording you approve',
      'Skips any customer with an open dispute or a payment already in the bank',
      'Attaches the invoice and a current statement',
      'Answers simple replies, such as a request for a copy or a W-9, and passes anything else to your team',
    ],
    note: "Business Central's reminder levels set when a reminder goes, what fee or interest it adds, and a grace period so a paid customer is not chased. NetSuite's Dunning Letters SuiteApp sends letters by procedure and level, and Oracle lists when it will not send one.",
    sources: ['bcReminders', 'nsDunningAuto'],
    span: 'lg:col-span-5',
  },
  {
    n: '03',
    title: 'Cash application: every payment to its invoices',
    body: 'A payment arrives by ACH, wire, check or card. The remittance saying what it covers often arrives separately, by email or PDF, or not at all.',
    items: [
      'Reads bank lines from your bank feed and remittances from the AR mailbox',
      'Matches by invoice number first, then by customer and amount, then by combinations of open invoices',
      'Applies one payment across several invoices, or leaves it unapplied as a credit when nothing fits',
      'Shows a person every match it is unsure of, with the bank line and the remittance side by side',
    ],
    note: 'Business Central and Stripe both match by rules and leave a remainder for a person. The worked example below the six cards shows where an agent picks up.',
    sources: ['bcRules', 'stripeBankTransfer'],
    span: 'lg:col-span-5',
  },
  {
    n: '04',
    title: 'Disputes and deductions: one case per problem',
    body: 'A deduction is money a customer holds back from a payment, for a damaged delivery, a pricing difference or a promotion. Each one needs the papers before anyone can decide.',
    items: [
      'Opens a case when a payment is short or a customer replies with a complaint',
      'Pulls the order, the delivery proof, the price agreed and the email thread into the case',
      'Pauses reminders on the disputed invoice while the case is open',
      'Routes the case to sales, the warehouse or finance, and records how it ended',
    ],
    note: 'The agent never agrees a credit, a discount or a write-off. It prepares the case so the person who decides has everything in front of them.',
    sources: [],
    span: 'lg:col-span-7',
  },
  {
    n: '05',
    title: 'Credit holds: the agent flags, your credit lead decides',
    body: 'A credit hold stops new orders for a customer who is over their limit or too far behind.',
    items: [
      'Watches each balance against the limit and the age of the oldest open invoice',
      'Flags the account to your credit lead before an order ships, with the history',
      'Lifts its own flag when the payment clears',
    ],
    note: 'Whether a key customer goes on hold is a business decision. In our builds a person always makes it.',
    sources: [],
    span: 'lg:col-span-7',
  },
  {
    n: '06',
    title: 'Reporting: what is late, and why',
    body: 'An aging report says how much is late. It does not say which payments are sitting unmatched, which invoices are disputed, or who promised to pay on Friday.',
    items: [
      'Sends a short morning summary: aging by bucket, unmatched cash, open disputes and promises to pay',
      'Lists the accounts that need a call today, with the reason',
      'Keeps a log of every reminder sent and every match made',
    ],
    note: 'DSO, days sales outstanding, is the headline number. The working numbers underneath it are unmatched payments and open disputes, because those are what a person can act on this week.',
    sources: [],
    span: 'lg:col-span-5',
  },
];

/* ── What each system already does. Each card restates the maker's own pages
   as read on 2026-10-22. Nothing here is our opinion of the product. ── */
const SYSTEMS: ReadonlyArray<{
  name: string;
  kind: string;
  says: string;
  sources: ReadonlyArray<SrcKey>;
  span: string;
}> = [
  {
    name: 'QuickBooks Online',
    kind: 'Built in · invoice reminders',
    says: "Intuit says QuickBooks Online can send up to three automatic reminders, each set up to 90 days before or after the due date, and only for invoices already emailed from QuickBooks. QuickBooks Online Advanced can use workflows for reminders. In Intuit's API, a payment can be applied against several invoices and credit memos, or created unapplied and recorded as a credit.",
    sources: ['qbReminders', 'qbPaymentApi'],
    span: 'lg:col-span-7',
  },
  {
    name: 'Xero',
    kind: 'Built in · reminders and JAX',
    says: "Xero says its automated reminders nudge customers before and after the due date with your own message. Its AI feature, JAX, categorizes and matches bank transactions, on the Growing plan and above. Xero's API applies payments to approved receivable and payable invoices, and a BatchPayments endpoint covers several invoices in one transaction.",
    sources: ['xeroInvoicing', 'xeroBankRec', 'xeroPaymentsApi'],
    span: 'lg:col-span-5',
  },
  {
    name: 'Oracle NetSuite',
    kind: 'From Oracle · Dunning Letters SuiteApp',
    says: 'Oracle says the Dunning Letters SuiteApp sets up an automated dunning process and sends reminder letters before payment is due. Procedures set the levels and timing, by customer, invoice or invoice group. Letters are not sent when dunning is paused, the minimum interval is not met or the level has not changed. You have to set procedures up by hand on NetSuite\'s screens. They cannot be imported from a file or created by code.',
    sources: ['nsDunning', 'nsDunningAuto', 'nsDunningProcs'],
    span: 'lg:col-span-5',
  },
  {
    name: 'Microsoft Dynamics 365 Business Central',
    kind: 'Built in · reminders and payment matching',
    says: "Microsoft says Business Central sends statements, reminders (also called dunning letters) and finance charge memos, and that creating, issuing and posting reminders can be automated. Its Payment Reconciliation Journal applies bank lines to open entries by rules you set, with a Match Confidence of Low, Medium or High. Its API includes a customerPayment resource that outside software can create and read.",
    sources: ['bcCollect', 'bcReminders', 'bcAutoApply', 'bcPaymentApi'],
    span: 'lg:col-span-7',
  },
  {
    name: 'SAP Business One',
    kind: 'Service Layer · the API an agent uses',
    says: "SAP's Service Layer reference lists IncomingPayments, which it describes as payments from customers by cash, card, check or bank transfer, and a DunningTermsService for the dunning terms set up in the system. That gives an agent somewhere to record a matched payment and a way to read each customer's dunning setup.",
    sources: ['sapServiceLayer'],
    span: 'lg:col-span-6',
  },
  {
    name: 'Odoo',
    kind: 'Built in · follow-up levels',
    says: "Odoo's documentation describes follow-up levels by days overdue that send an email, a letter or a text message, and an Automatic option for the reminder. Odoo notes that letters and text messages need In-App Purchase credits, which are paid credits bought inside Odoo. On the bank side, Odoo's reconciliation models pre-select matching entries for each bank transaction.",
    sources: ['odooFollowUp', 'odooRecon'],
    span: 'lg:col-span-6',
  },
];

/* ── Payment rails. Stripe and bank feeds are where the money shows up. ── */
const RAILS: ReadonlyArray<{ t: string; b: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    t: 'Stripe invoices',
    b: "Stripe matches an inbound bank transfer to invoices by reference code and amount, and takes several eligible invoices by due date. A transfer it cannot reconcile stays in the customer balance for a person. Stripe can also email reminders for unpaid invoices.",
    sources: ['stripeBankTransfer', 'stripeEmails'],
  },
  {
    t: 'Bank feeds',
    b: "Business Central applies bank lines through its Payment Reconciliation Journal. Xero matches feed lines with JAX. Odoo pre-selects matches with reconciliation models. Each leaves a remainder, the payments with no usable reference, and that remainder is where an agent starts.",
    sources: ['bcAutoApply', 'xeroBankRec', 'odooRecon'],
  },
  {
    t: 'Remittances by email and PDF',
    b: 'Many business customers pay one amount for many invoices and email a spreadsheet or PDF saying which. No accounting system reads those on its own. The agent reads them from the AR mailbox and matches them to the bank line.',
    sources: [],
  },
];

/* ── What stays with a person. Five decisions, in every build. ── */
const PEOPLE_KEEP: ReadonlyArray<{ t: string; b: string }> = [
  {
    t: 'Credit limits and holds',
    b: 'The agent flags an account. Your credit lead decides whether the next order ships.',
  },
  {
    t: 'Disputes and deductions',
    b: 'The agent gathers the order, the proof of delivery and the emails. A person decides who is right and what is credited.',
  },
  {
    t: 'Write-offs and settlements',
    b: 'No balance is written off, discounted or settled without a named approver, and the approval is logged.',
  },
  {
    t: 'Payment plans',
    b: 'A customer who asks for more time talks to a person. The agent records the plan once it is agreed and reminds against it.',
  },
  {
    t: 'Phone calls',
    b: 'The agent sends email. Calls to customers stay with your team, which keeps the relationship where it belongs.',
  },
];

/* ── By company size. No invoice-count thresholds: they would be our guess. ── */
const SIZE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: 'Small business' },
  { label: 'Mid-sized company' },
  { label: 'Larger or multi-entity' },
];

const SIZE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'Typical setup',
    values: [
      'One QuickBooks Online or Xero file, a few people doing AR part time',
      'An ERP such as NetSuite, Business Central, SAP Business One or Odoo, and an AR lead',
      'Several entities or ledgers, lockbox files (the bank\'s list of checks it received for you), customer AP portals',
    ],
  },
  {
    feature: 'Start with',
    values: [
      'The reminders already in QuickBooks or Xero, and a bank feed',
      'The dunning and matching tools in your ERP',
      'An AR product built for scale, or your ERP vendor’s own module',
    ],
  },
  {
    feature: 'Where the hours go',
    values: [
      'Chasing the same few late customers, and payments with no invoice number',
      'Remittances by email, short payments and deductions',
      'Matching across entities, portal invoices and deduction volume',
    ],
  },
  {
    feature: 'What a built agent adds',
    values: [
      'Remittance reading and matching, and replies to simple customer emails',
      'Cash application across the mailbox and the bank, and dispute cases with papers attached',
      'Rules that follow your contracts across ledgers, and a second system for orders or delivery proof',
    ],
  },
  {
    feature: 'People who stay involved',
    values: ['The owner or bookkeeper', 'The controller and the AR lead', 'The credit team, the controller and sales'],
  },
  {
    feature: 'Often the better call',
    values: [
      'Built-in tools first. A product such as BILL if you want payments in the same place',
      'A built agent when remittances or deductions are the bottleneck',
      'A product and a built agent together, each doing the part it fits',
    ],
  },
];

/* ── Three routes compared ── */
const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: '01 Built into your accounting system' },
  { label: '02 An off-the-shelf AR product' },
  { label: '03 An agent built for you' },
];

const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'What it is',
    values: [
      'Reminders, dunning and bank matching that come with QuickBooks, Xero, NetSuite, Business Central or Odoo',
      'A subscription product such as BILL, Versapay, Billtrust, Upflow or HighRadius',
      'An AI agent designed around your rules, built for you and owned by you',
    ],
  },
  {
    feature: 'Payment reminders',
    values: [
      'Yes, by level or date, with limits each maker lists',
      'Yes, usually with more control over timing and wording',
      'Yes, and they stop for disputes and payments already in the bank',
    ],
  },
  {
    feature: 'Matching payments to invoices',
    values: [
      'Bank lines with clear references',
      'Bank lines and remittances, on higher plans for most',
      'Bank lines, emailed remittances and short payments, tested on your own history',
    ],
  },
  {
    feature: 'Disputes and deductions',
    values: ['Mostly by hand', 'A dispute or deduction module on some products', 'A case per problem, with your papers from every system attached'],
  },
  {
    feature: 'How it is priced',
    values: [
      'Inside your subscription, or as a paid plan or add-on',
      'A monthly subscription, often per user, or a share of each paid invoice',
      'A fixed price for the build, quoted in writing. Support is optional, each change quoted and approved, no monthly minimum',
    ],
  },
  {
    feature: 'Who you call when it breaks',
    values: ['The software maker', "The product's support team", 'The team that built it'],
  },
  {
    feature: 'Right call when',
    values: [
      'Most payments carry an invoice number and reminders are the main job',
      'You want invoicing, payments and portal in one place',
      'Remittances, deductions or a second system are where the hours go',
    ],
  },
];

/* ── Red flags when buying or building AR automation. ── */
const RED_FLAGS: ReadonlyArray<{ t: string; b: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    t: 'Reminders that cannot see disputes',
    b: 'A reminder to a customer who has already told you the delivery was short damages the relationship faster than a late payment does. Ask how a dispute pauses the sequence.',
    sources: [],
  },
  {
    t: 'Reminders that cannot see the bank',
    b: "A customer who paid yesterday should not get a reminder today. Business Central's reminder levels carry a grace period for this reason. Ask what a tool checks before it sends.",
    sources: ['bcReminders'],
  },
  {
    t: 'Invoices sent outside the system',
    b: 'A PDF sent by hand is invisible to the QuickBooks reminder schedule, as the QuickBooks card above explains. Ask how your invoices leave the system today.',
    sources: ['qbReminders'],
  },
  {
    t: 'An agent that can write off or discount',
    b: 'If the sign-in an agent uses can post a credit memo or a write-off without approval, the control is gone. Its permissions should stop at applying payments and drafting.',
    sources: [],
  },
  {
    t: 'Setup that has to be rebuilt by hand',
    b: 'NetSuite dunning procedures have to be set up by hand on its screens, as the NetSuite card above explains. Plan the levels on paper before anyone clicks.',
    sources: ['nsDunningProcs'],
  },
  {
    t: 'Unmatched cash parked as a credit',
    b: 'QuickBooks can record a payment as unapplied, and Stripe leaves an unmatched transfer in the customer balance. Both are honest. Neither shows up in an aging report as work to do unless someone reports on it.',
    sources: ['qbPaymentApi', 'stripeBankTransfer'],
  },
  {
    t: 'Collections rules copied from consumer debt',
    b: 'Regulation F and the FDCPA are written for consumer debt, as the note on collection rules explains. A vendor selling "compliant AI collections" for business invoices may be solving the wrong problem.',
    sources: ['fdcpaDef', 'regF'],
  },
  {
    t: 'No test on your own payments',
    b: 'A match rate quoted from someone else’s customers says little about yours. Ask for a run on payments your team has already applied, and count the matches.',
    sources: [],
  },
];

/* ── Our experience, stated plainly. One client is named (Sow Easy, from the
   permitted list) with its true status. No result is claimed. ── */
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
    what: 'For accounts receivable, the demo is a first version run on payments and remittances your team has already applied. You compare its matches with theirs, line by line.',
    href: '/contact',
    cta: 'Ask for a demo on your payments',
    span: 'lg:col-span-5',
  },
  {
    t: 'Proof you can check',
    kind: 'Sow Easy · WooCommerce and Odoo',
    what: "Sow Easy is a B2B distributor that runs stock, pricing and product data in Odoo. We are building its WooCommerce trade store with Odoo as the source of stock, prices and SKUs. The store and the Odoo link are being tested on a staging site, and launch is still ahead. It is ecommerce and ERP work, not an AR build.",
    href: '/case-studies/sow-easy-distributor-portal',
    cta: 'Read the Sow Easy case study',
    span: 'lg:col-span-5',
  },
  {
    t: 'Who looks after it',
    kind: 'Support you choose',
    what: 'Each build phase is a fixed price, quoted in writing after a short scoping call. Support after launch is optional. Each change is quoted and approved per request, and there is no monthly minimum.',
    href: '/services/ai-agent-monitoring',
    cta: 'See monitoring and support',
    span: 'lg:col-span-7',
  },
];

/* ── Who this is for. Examples of the kinds of team the work suits, not a
   client list. Pictures were generated on 2026-10-22 and checked at the size
   they ship. The people in them are not FactoryJet staff or clients. ── */
const INDUSTRIES: ReadonlyArray<{ img: string; alt: string; t: string; b: string }> = [
  {
    img: `${IMG}/distributor-credit-desk.webp`,
    alt: 'A man in a forest green quarter zip sweater talks on a phone at his desk while looking at a monitor, with shelves of brown cartons behind a glass wall',
    t: 'Wholesale distributors',
    b: 'Customers pay many invoices in one amount and send the remittance by email. Deductions for short deliveries need proof from the warehouse.',
  },
  {
    img: `${IMG}/manufacturer-remittance-match.webp`,
    alt: 'A woman in a mustard cardigan holds a sheet of paper and an orange pen while comparing it with a monitor at a standing desk above a factory floor',
    t: 'Manufacturers',
    b: 'Large customers pay through their own AP portals on their own terms. Each short payment is matched to the order, the shipment and the price agreed.',
  },
  {
    img: `${IMG}/agency-owner-review.webp`,
    alt: 'A man with a grey goatee and rolled sleeves reads a tablet at a pale oak table in a small studio, with an open notebook with an orange cover beside him',
    t: 'Agencies and professional services',
    b: 'Invoices go out by milestone or timesheet. The same few clients pay late, and reminders need to sound like the owner, not a system.',
  },
  {
    img: `${IMG}/controller-month-end.webp`,
    alt: 'Seen from behind, a woman with a short grey bob and a younger man in a navy polo look at a monitor on a meeting table next to an orange folder',
    t: 'Finance teams and controllers',
    b: 'Unmatched cash and open disputes are the last things to clear at month end. The agent works them down every day instead.',
  },
];

/* ── Process. Six steps, in the order we work. ── */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'Follow real payments from bank to ledger',
    b: 'With the person who applies cash today, we trace recent payments: where the money landed, where the remittance came from, and how long each took to match.',
  },
  {
    n: '02',
    t: 'Check the built-in tools and the products first',
    b: "If your accounting system's own reminders and matching, or an AR product, already do the job, we tell you which one and stop there.",
  },
  {
    n: '03',
    t: 'Write the rules down',
    b: 'With your controller and AR lead we write the reminder levels and wording, the matching rules, the credit limits, the dispute routes and who approves a write-off.',
  },
  {
    n: '04',
    t: 'Show it on your own payments',
    b: 'Before a contract, we run payments your team has already applied through a first version, so you can compare its matches with theirs.',
  },
  {
    n: '05',
    t: 'Build it with the least access it needs',
    b: 'The agent gets a sign-in of its own that can read customers and invoices, apply payments and draft emails. It cannot issue credits or write-offs. Where your system has a sandbox, we build there first.',
  },
  {
    n: '06',
    t: 'Run it beside your team, then stay on',
    b: 'For an agreed period every match and every reminder waits for a person. After launch the same team reads the logs, re-tests when your system or the AI model changes, and fixes what breaks.',
  },
];

/* ── Eight AR products a US search shows. Each line restates the maker's own
   page as read on 2026-10-22. Feeds the visible list AND the ItemList JSON-LD. ── */
const OTHERS: ReadonlyArray<{ name: string; focus: string; says: string; source: SrcKey }> = [
  {
    name: 'BILL',
    focus: 'AP and AR product · priced per user',
    says: 'Its pricing page lists Essentials at $49, Team at $65 and Corporate at $89 per user per month, with custom pricing for Enterprise. Its accounts receivable features include custom invoices, automated payment reminders, ACH and card payments, and auto-charge. Team and above list automatic two-way sync with QuickBooks Online and Xero.',
    source: 'billPricing',
  },
  {
    name: 'Versapay',
    focus: 'Invoice-to-cash for mid-sized companies',
    says: 'Its site describes cash application that matches payments to open invoices using AI and machine learning, digital invoicing with a customer portal for paying and resolving disputes, and collections management. The page we read gives no price.',
    source: 'versapay',
  },
  {
    name: 'HighRadius',
    focus: 'AR automation for enterprises and mid-market',
    says: 'Its page describes one AR platform covering collections, cash application, deductions, credit, electronic invoicing and B2B payments, connected to ERPs including SAP, Oracle, NetSuite, Microsoft Dynamics and Workday, and to lockbox files from more than 100 banks. The page gives no price.',
    source: 'highradius',
  },
  {
    name: 'Billtrust',
    focus: 'AR platform · invoicing to cash application',
    says: 'Its site lists invoicing, payments, credit, collections and cash application, and calls itself the first AR platform to connect to Claude and Copilot. The page we read gives no price.',
    source: 'billtrust',
  },
  {
    name: 'Upflow',
    focus: 'Collections software · priced by revenue band',
    says: 'Its pricing page sets plans by annual invoiced revenue, from Starter up to $10M to Accelerate up to $100M, each priced on request. It lists email, SMS, call and letter reminders on every plan, a Collections Agent from the Scale plan and a Cash Application Agent on Accelerate.',
    source: 'upflow',
  },
  {
    name: 'Gaviti',
    focus: 'AR management · priced on usage',
    says: 'Its pricing page says it offers tailored pricing based on usage, not per user, with unlimited workflows and users included. It lists cash application, disputes and credit management modules. No price is published.',
    source: 'gaviti',
  },
  {
    name: 'Paystand',
    focus: 'B2B payments and receivables',
    says: 'Its receivables page lists automatic reconciliation, collections automation, a payment portal and a smart lockbox for checks, with integrations for NetSuite, Sage, Dynamics 365, Acumatica and Xero. The page we read gives no price.',
    source: 'paystand',
  },
  {
    name: 'Invoiced',
    focus: 'AR automation · a Flywire company',
    says: 'Its page describes automated invoicing and collections for mid-sized and larger businesses, with payments run on Flywire. The page we read gives no price.',
    source: 'invoiced',
  },
];

const othersSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Accounts receivable automation products a US search shows',
  itemListElement: OTHERS.map((o, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: o.name,
    url: SRC[o.source].url,
  })),
};

const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  { href: '/services/accounts-payable-automation', t: 'Accounts payable automation', b: 'The other side of the ledger: vendor invoices read, matched to orders and receipts, coded and routed for approval.' },
  { href: '/services/erp-ai-agents', t: 'AI agents for ERP systems', b: 'The overview: Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs on one page.' },
  { href: '/services/netsuite-ai-agents', t: 'NetSuite AI agents', b: 'Agents that work inside NetSuite, next to the SuiteApps you already run.' },
  { href: '/services/odoo-ai-agents', t: 'Odoo AI agents', b: 'The same work inside Odoo.' },
  { href: '/services/shopify-quickbooks-integration', t: 'Shopify QuickBooks integration', b: 'Orders, payouts and fees kept in step between the store and the books.' },
  { href: '/services/sales-order-automation-ai-agents', t: 'Sales and purchase order automation', b: 'Customer purchase orders turned into draft sales orders, upstream of every invoice.' },
  { href: '/services/document-intake-ai-agents', t: 'Document intake AI agents', b: 'The same reading and checking for remittances, forms and claims.' },
  { href: '/services/ai-agent-monitoring', t: 'AI agent monitoring and support', b: 'Watching, re-testing and fixing an agent after launch.' },
  { href: '/blog/ai-agents-for-finance-accounting-teams-2026', t: 'Guide: AI agents for finance and accounting teams', b: 'Seven finance jobs for agents, from invoice matching to close.' },
  { href: '/blog/ai-agent-build-vs-buy-2026', t: 'Guide: build or buy an AI agent', b: 'The same choice this page covers, for agents beyond accounts receivable.' },
];

/** Small inline source links. Same visual pattern as /services/accounts-payable-automation.
 *  Renders nothing when a claim is our own and has no source. */
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

export default function AccountsReceivableAutomationPage() {
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
                    ACCOUNTS RECEIVABLE AUTOMATION &middot; UNITED STATES
                  </span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.2rem]">
                  Accounts receivable automation, built as an AI agent on your own books.
                </h1>

                <p className={`${styles.heroLead} mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600`}>
                  FactoryJet is a services company that designs, builds and supports an AI agent for your accounts
                  receivable, on the books you already keep.
                </p>

                <div className={`${styles.heroForm} mt-6`}>
                  <HeroInlineForm
                    region="us"
                    source="services_accounts_receivable_automation_hero"
                    service="Accounts Receivable Automation"
                    submitLabel="See a demo on my data"
                    trustText="Working software on your own data before you sign. Founder replies within 24 hours."
                  />
                </div>

                <p className={`${styles.heroDetails} mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600`}>
                  The agent sends your invoices and payment reminders, matches
                  each customer payment to the invoices it pays, gathers the papers for disputes and short payments,
                  and flags accounts for a credit hold. It works on QuickBooks, Xero, NetSuite, Business Central, SAP
                  Business One or Odoo, and on Stripe and your bank feed. Your team keeps every credit decision,
                  dispute and write-off. You own what we build, and each phase has a fixed price, quoted in writing
                  before work starts.
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
                  <span>Demo on your own payments before a contract</span>
                  <span>500+ businesses served</span>
                  <span>Founded 2014</span>
                  <span>Sources read {CHECKED_ON}</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
                  <figcaption className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                    What happens to one customer invoice
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
                      Orange: the agent we build for you.
                    </li>
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-[3px] h-3 w-3 flex-shrink-0 rounded-sm border-[1.5px] border-[#14110F] bg-white" />
                      Black outline: your people.
                    </li>
                  </ul>
                  <p className="mt-3 font-fj-body text-[13px] leading-snug text-fj-neutral-600">
                    The agent never grants credit, settles a dispute or writes off a balance.
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
                Accounts receivable automation means software sends invoices and payment reminders, matches each
                customer payment to the invoices it pays, and reports what is overdue. An AI agent adds the parts
                rules cannot do: reading emailed remittances, sorting short payments and disputes, and drafting
                replies. FactoryJet builds that agent on your own accounting system and supports it after launch.
                Your team decides on credit, disputes and write-offs.
              </p>
              <p className="mt-4 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                Your accounting system probably sends reminders already. QuickBooks Online, Xero, NetSuite, Business
                Central and Odoo all document them, and the cards below say what each does as of {CHECKED_ON}. The
                hours usually go somewhere else: the payment with no invoice number, the remittance in a PDF, the
                customer who paid short with no note. That is where a built agent earns its place.
              </p>
              <p className="mt-4 font-fj-mono text-xs leading-relaxed text-fj-neutral-600">
                Written by{' '}
                <Link href="/author/bhavesh-barot" className="underline underline-offset-4">
                  Bhavesh Barot
                </Link>
                , Founder of FactoryJet (founded 2014). Updated {PAGE_MODIFIED}.
              </p>
            </div>
          </div>
        </section>

        {/* 3. SIX JOBS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Six jobs</p>
            <h2 className="mt-4 font-fj-display text-3xl font-extrabold tracking-[-0.03em] text-fj-ink sm:text-4xl">
              What an AI accounts receivable agent does, from invoice to cash.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Each card says what the agent does and what is worth knowing about the systems around it. A remittance
              is the note a customer sends saying which invoices a payment covers. Dunning is the series of
              reminders that grows firmer as an invoice gets later. For the vendor side of the ledger, see{' '}
              <Link href="/services/accounts-payable-automation" className="font-semibold text-fj-ink underline underline-offset-4">
                accounts payable automation
              </Link>
              .
            </p>

            <div className="mt-12 grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
              {JOBS.map((s) => (
                <div key={s.n} className={`rounded-2xl border border-fj-neutral-200 bg-white p-7 ${s.span}`}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-fj-cream font-fj-mono text-sm font-bold text-[#B23E13]">
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
                  <p className="mt-4 rounded-xl border border-fj-neutral-200 bg-fj-cream px-4 py-3 font-fj-body text-sm leading-relaxed text-fj-ink">
                    <span className="font-semibold">Worth knowing.</span> {s.note}
                  </p>
                  <SourceLinks ids={s.sources} />
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 rounded-2xl border-2 border-[#F05A28]/25 bg-white p-6 sm:p-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                  Worked example &middot; invented figures
                </div>
                <h3 className="mt-3 font-fj-display text-xl font-semibold text-fj-ink">
                  Cash application on one payment that covers three invoices and comes up short.
                </h3>
                <p className="mt-3 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                  A customer sends one ACH payment of $9,450 and emails a PDF remittance listing invoices 1041 for
                  $4,200, 1042 for $3,150 and 1047 for $2,400. Those add up to $9,750, so the payment is $300 short.
                  The figures are made up to show the method. They are not from a client.
                </p>
              </div>
              <ol className="grid gap-3 lg:col-span-7">
                <li className="rounded-xl border border-fj-neutral-200 bg-fj-cream px-5 py-4 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                  <span className="font-semibold">1. Invoice number first.</span> All three numbers on the remittance
                  are open in the ledger, so the agent proposes those three.
                </li>
                <li className="rounded-xl border border-fj-neutral-200 bg-fj-cream px-5 py-4 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                  <span className="font-semibold">2. Customer and amount next.</span> The sender name on the bank line
                  matches the customer record, which confirms who paid.
                </li>
                <li className="rounded-xl border border-fj-neutral-200 bg-fj-cream px-5 py-4 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                  <span className="font-semibold">3. The gap.</span> $9,750 minus $9,450 leaves $300. The remittance
                  says &ldquo;damaged carton.&rdquo; The agent proposes $4,200 and $3,150 in full and $2,100 on 1047,
                  leaves $300 open on 1047, and opens a deduction case with the delivery proof attached.
                </li>
                <li className="rounded-xl border border-[#14110F] bg-white px-5 py-4 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                  <span className="font-semibold">4. A person decides.</span> Your AR lead approves the match and
                  decides whether the $300 becomes a credit or goes back to the customer. Reminders on 1047 pause
                  while the case is open.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* 4. WHAT YOUR ACCOUNTING SYSTEM ALREADY DOES */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Before anyone builds</p>
            <h2 className="mt-4 font-fj-display text-3xl font-extrabold tracking-[-0.03em] text-fj-ink sm:text-4xl">
              What QuickBooks, Xero, NetSuite, Business Central, SAP Business One and Odoo already do.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Each card restates the maker&rsquo;s own pages, as read on {CHECKED_ON}. If one of these already does
              your job, you do not need a build, and we will tell you so. Where an agent is worth building, it
              connects through the system&rsquo;s API, the documented connection other software uses to read and
              write data. Each card names it. For the ERP side in more depth, see{' '}
              <Link href="/services/erp-ai-agents" className="font-semibold text-fj-ink underline underline-offset-4">
                AI agents for ERP systems
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
                Where the money shows up
              </div>
              <h3 className="mt-3 font-fj-display text-xl font-semibold text-fj-ink">
                Stripe, bank feeds and emailed remittances.
              </h3>
              <ul className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
                {RAILS.map((r) => (
                  <li key={r.t} className="rounded-xl border border-fj-neutral-200 bg-white px-5 py-4">
                    <div className="font-fj-display text-[15px] font-semibold text-fj-ink">{r.t}</div>
                    <p className="mt-1 font-fj-body text-sm leading-relaxed text-fj-neutral-600">{r.b}</p>
                    <SourceLinks ids={r.sources} />
                  </li>
                ))}
              </ul>
              <p className="mt-5 max-w-3xl font-fj-body text-[15px] leading-relaxed text-fj-ink">
                If your sales run through Shopify and your books are in QuickBooks, payouts and fees need matching
                too. That work is on the{' '}
                <Link href="/services/shopify-quickbooks-integration" className="font-semibold text-fj-ink underline underline-offset-4">
                  Shopify QuickBooks integration
                </Link>{' '}
                page.
              </p>
            </div>
          </div>
        </section>

        {/* 5. COMPARISON: three routes */}
        <ComparisonTable
          eyebrow="Three routes compared"
          headline="Built-in tools, an AR product, or an agent built for you."
          lead="Each route suits somebody. On the scoping call we tell you which one we would pick in your place, including when the answer is a product we do not sell."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer={`Product and platform facts are from each maker's own pages as read on ${CHECKED_ON}. Links are in the sources list below.`}
          scrollRegionLabel="Comparison of three ways to automate accounts receivable"
        />

        <MidPageCTA
          headline="Tell us where your payments get stuck. We will say if your system already handles it."
          sub="Send your accounting system, how customers pay you and how remittances arrive. We reply with what the built-in tools cover, which AR product we would look at in your place, what we would build, and a fixed quote if there is work for us."
          label="Scope my AR agent"
          note="Founder replies within 24 hours."
        />

        {/* 6. WHAT STAYS WITH A PERSON + COLLECTION RULES */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">People decide</p>
                <h2 className="mt-4 font-fj-display text-3xl font-extrabold tracking-[-0.03em] text-fj-ink sm:text-4xl">
                  What AI collections automation should never decide.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Five decisions stay with your people in every build. Collecting money touches your best customers. The agent does the reading, matching and drafting,
                  and it logs every email and every match. Anything that changes what a customer owes, or how you
                  treat them, goes to a named person.
                </p>
                <div className="mt-6 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5">
                  <h3 className="font-fj-display text-lg font-semibold text-fj-ink">A note on collection rules</h3>
                  <p className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                    The Fair Debt Collection Practices Act defines a debt as a consumer&rsquo;s obligation for
                    personal, family or household purposes, so an invoice from one business to another sits outside
                    that definition. Regulation F, its rule for consumer debt collectors, presumes a collector
                    complies on call frequency at no more than seven calls in seven days. If any of your customers
                    are consumers, ask your counsel before automating collections.
                  </p>
                  <p className="mt-2 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                    A planning note, not legal advice.
                  </p>
                  <SourceLinks ids={['fdcpaDef', 'regF']} />
                </div>
              </div>
              <ul className="grid gap-3 lg:col-span-7">
                {PEOPLE_KEEP.map((k) => (
                  <li key={k.t} className="rounded-2xl border border-fj-neutral-200 bg-fj-cream px-5 py-4">
                    <div className="font-fj-display text-base font-semibold text-fj-ink">{k.t}</div>
                    <p className="mt-1 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{k.b}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 7. BY COMPANY SIZE */}
        <ComparisonTable
          eyebrow="By company size"
          headline="Where to start, by the size of your finance team."
          lead="Sizes are described by setup, not by a revenue line, because a ten-person distributor can have more remittances than a hundred-person agency."
          columns={SIZE_COLUMNS}
          rows={SIZE_ROWS}
          footer="Our own guidance from scoping AR and ERP work. Your scoping call starts from how your payments arrive today."
          scrollRegionLabel="Accounts receivable automation options by company size"
        />

        {/* 8. RED FLAGS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Red flags</p>
            <h2 className="mt-4 font-fj-display text-3xl font-extrabold tracking-[-0.03em] text-fj-ink sm:text-4xl">
              Eight red flags when you buy or build AR automation.
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Ask about each one before you sign, whoever you buy from, us included. Where a maker&rsquo;s page
              backs the point, it is linked beneath.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {RED_FLAGS.map((l) => (
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
            <h2 className="mt-4 font-fj-display text-3xl font-extrabold tracking-[-0.03em] text-fj-ink sm:text-4xl">
              Our accounting and ERP experience, stated plainly.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              FactoryJet was founded in 2014 and has served more than 500 businesses. Business Central is a system
              we connect to through Microsoft&rsquo;s documented API. It is not on our list of past work.
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
                <p className="fj-eyebrow">Who this is for</p>
                <h2 className="mt-4 font-fj-display text-3xl font-extrabold tracking-[-0.03em] text-fj-ink sm:text-4xl">
                  Which businesses need accounts receivable automation?
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  The trade changes the paperwork. The job is the same in each one. Money arrives, someone works out
                  what it pays, and someone chases what it does not.
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
              <div className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
                <p className="fj-eyebrow">Process</p>
                <h2 className="mt-4 font-fj-display text-3xl font-extrabold tracking-[-0.03em] text-fj-ink sm:text-4xl">
                  How we design, build and support an AR agent.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Built-in tools and products are checked first. Then the rules are written down, shown on your own
                  payments and built with limited access. After launch,{' '}
                  <Link href="/services/ai-agent-monitoring" className="font-semibold text-fj-ink underline underline-offset-4">
                    AI agent monitoring and support
                  </Link>{' '}
                  keeps it working as your accounting system and the AI models change. For agents beyond accounts
                  receivable, see{' '}
                  <Link href="/services/ai-agent-development" className="font-semibold text-fj-ink underline underline-offset-4">
                    AI agent development
                  </Link>
                  .
                </p>
                <img
                  src={`${IMG}/rules-whiteboard.webp`}
                  alt="A red haired woman in a teal shirt and a bald man with glasses in a tan cardigan, seen from slightly behind, line up a row of blank white cards with one orange card on a long table"
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

        {/* 12. EIGHT AR PRODUCTS A US SEARCH SHOWS */}
        <section id="ar-products" className="border-t border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
                <p className="fj-eyebrow">Off-the-shelf options</p>
                <h2 className="mt-4 font-fj-display text-3xl font-extrabold tracking-[-0.03em] text-fj-ink sm:text-4xl">
                  AR automation software: eight products a US search shows.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  We wrote this list and we sell none of these. Each one came up in US Google results for accounts
                  receivable automation searches on {CHECKED_ON}. Each line restates the maker&rsquo;s own page as
                  read that day, with its list price where the page gives one.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  One of the eight publishes a price, two quote on request and five gave none on the page we read. We
                  have not tested these products, and the order is not a ranking. Other tools buyers often compare,
                  such as Esker, Tesorio, Chaser and Quadient, were not read for this list.
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
                      <div className="mt-1 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">
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
            <h2 className="mt-4 font-fj-display text-3xl font-extrabold tracking-[-0.03em] text-fj-ink sm:text-4xl">
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
                <h2 className="mt-4 font-fj-display text-3xl font-extrabold tracking-[-0.03em] text-fj-ink sm:text-4xl">
                  Sources, checked on {CHECKED_ON}.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Every product feature, list price, platform limit and legal line on this page was read from the
                  pages listed here on that day. Intuit&rsquo;s pages and Xero&rsquo;s developer pages are drawn by
                  JavaScript, so those were read in a browser. Makers change these pages, so check the linked page
                  before you act on one.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  The FAQ questions are the ones Google showed for 12 accounts receivable searches in the US that day,
                  pulled through DataForSEO.
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
          eyebrow="Accounts receivable automation FAQ"
          headline="Accounts receivable automation questions, answered plainly."
          lead={`What controllers, AR leads and business owners ask before automating collections and cash application. Product and platform answers are from each maker's own pages as read on ${CHECKED_ON}.`}
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 16. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="Accounts receivable automation"
          headline="Keep your accounting system. Add an agent your team can check."
          sub="Tell us how customers pay you today. We say what your system's own tools or an AR product already cover, show a first version on your own payments and stay on after launch."
          primaryCta={{ label: 'Scope my AR agent', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="Demo on your own payments before a contract. Fixed quote in writing. You own the code."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
