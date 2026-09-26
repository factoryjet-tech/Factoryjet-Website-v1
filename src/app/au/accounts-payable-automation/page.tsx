import type { Metadata } from 'next';
import { Fragment } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import AuFaq from '../components/AuFaq';
import VisualSlot from '../components/VisualSlot';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';
import './page.css';

const CANONICAL = 'https://factoryjet.com/au/accounts-payable-automation';
const UPDATED = '2026-09-26';
const TITLE = 'Accounts Payable Automation Australia | Xero & MYOB';
/* Visible hero heading and schema headline are the same text. */
const HERO_H1_LEAD = 'Accounts Payable Automation for Australian Businesses';
const HERO_H1_EMPHASIS = 'on Xero and MYOB';
const H1 = `${HERO_H1_LEAD} ${HERO_H1_EMPHASIS}`;
const DESCRIPTION =
  'Accounts payable automation for Australian businesses. We build an AI agent that reads supplier invoices into Xero or MYOB, matches POs and routes approvals.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Accounts Payable Automation', url: CANONICAL },
];

/* ─── External sources, all fetch-verified 2026-09-26 ───────────────── */
// ATO, Tax invoices (last updated 18 Sep 2026): "If a customer asks for a tax
// invoice, you must provide one within 28 days, unless it is for a sale of
// $82.50 (including GST) or less." Sales under $1,000 need 7 details (intended
// to be a tax invoice, seller identity, seller ABN, date, description incl.
// quantity and price, GST amount, extent taxable). "$1,000 or more also need to
// show the buyer's identity or ABN." eInvoicing: "Australia has adopted the
// Peppol framework"; an eInvoice issued under the A-NZ Invoice Specification
// satisfies "document is intended to be a tax invoice".
const SRC_ATO_TAX_INVOICES =
  'https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/tax-invoices';
// ATO, When you can claim a GST credit (last updated 14 Sep 2026): "You must have
// a tax invoice to claim a GST credit for purchases that cost more than A$82.50
// (including GST)"; "An invoice containing incorrect or incomplete information is
// not a valid tax invoice"; if you need a tax invoice "you cannot claim your GST
// credit until you hold a tax invoice"; check suppliers' GST registration on ABN
// Lookup; 4-year time limit.
const SRC_ATO_GST_CREDITS =
  'https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/claiming-gst-credits/when-you-can-claim-a-gst-credit';
// ATO, About eInvoicing (last updated 7 Jul 2026): Peppol network, "over 400,000
// Australian businesses"; buyers "don't need to manually enter or scan invoices";
// "eInvoicing is not a compliance or revenue measure"; APA sits within the ATO.
const SRC_ATO_EINVOICING = 'https://www.ato.gov.au/businesses-and-organisations/einvoicing/about-einvoicing';
// ATO, Overview of record-keeping rules for business (last updated 18 Jun 2026):
// "You need to keep most records for 5 years"; information "must not be changed"
// and must be stored to protect it from being changed or damaged.
const SRC_ATO_RECORDS =
  'https://www.ato.gov.au/businesses-and-organisations/preparing-lodging-and-paying/record-keeping-for-business/overview-of-record-keeping-rules-for-business';
// ABN Lookup web services: "allow you to integrate ABN Lookup validation and data
// into your own applications."
const SRC_ABN_WS = 'https://abr.business.gov.au/Tools/WebServices';
// Scamwatch, Business email compromise scams: scammers "send you an invoice with
// new payee information"; contact the business "by phone using a number you have
// sourced independently".
const SRC_SCAMWATCH_BEC = 'https://www.scamwatch.gov.au/types-of-scams/business-email-compromise-scams';
// OAIC, APP 8 guidelines: reasonable steps before disclosing personal information
// to an overseas recipient; s 16C accountability.
const SRC_APP8 =
  'https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information';
// Xero Developer, Accounting API Invoices: "Create sales invoices or purchase
// bills"; "Update draft or submitted ... purchase bills"; "Attach files to sales
// invoices or purchase bills"; "Add notes to invoices and purchase bills".
const SRC_XERO_INVOICES = 'https://developer.xero.com/documentation/api/accounting/invoices';
// Xero Developer, Purchase Orders: retrieve, add or update purchase orders,
// retrieve history, add notes; PurchaseOrderNumber field; BILLED status.
const SRC_XERO_PO = 'https://developer.xero.com/documentation/api/accounting/purchaseorders';
// Xero Developer, Custom Connections: single Xero organisation, "only available
// for Xero organisations in Australia, New Zealand, the UK, and the US and require
// an additional monthly subscription"; the client purchases it and authorises it.
const SRC_XERO_CUSTOM = 'https://developer.xero.com/documentation/guides/oauth2/custom-connections';
// MYOB Business API overview: works with "AccountRight, new Essentials and MYOB
// Business files". Purchase Bill: GET, PUT, POST, DELETE; layouts Item, Service,
// Professional, Miscellaneous. Purchase Order: status Open or ConvertedToBill.
const SRC_MYOB_API = 'https://developer.myob.com/api/myob-business-api/api-overview/';
const SRC_MYOB_BILL = 'https://developer.myob.com/api/myob-business-api/v2/purchase/bill/';
const SRC_MYOB_PO = 'https://developer.myob.com/api/myob-business-api/v2/purchase/order/';
// MYOB support, Automating supplier invoices: linked suppliers (Tradelink,
// Bunnings Trade, Reece, Officeworks and others) send invoices into the file;
// other suppliers can email invoices to the In Tray.
const SRC_MYOB_SUPPLIER =
  'https://www.myob.com/au/support/myob-business/purchases/entering-purchases/automating-supplier-invoices';
// Xero, How to automate accounts payable (accountant and bookkeeper guide):
// names Hubdoc for capture, approval workflows and Xero App Store apps for PO
// matching and batch payments.
const SRC_XERO_AP_GUIDE = 'https://www.xero.com/au/accountant-bookkeeper-guides/automated-accounts-payable/';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',   label: 'AP automation basics' },
  { key: 'software', label: 'Xero, MYOB & software' },
  { key: 'ai',       label: 'AI and invoice reading' },
  { key: 'tax',      label: 'Tax invoices, GST & Peppol' },
  { key: 'build',    label: 'Setup, cost & ownership' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── Basics ──
  { category: 'basics', question: 'What does accounts payable automation mean?',
    answer: 'It means software does the repetitive parts of paying suppliers: collecting invoices, reading the details, checking them, entering them as bills in your accounting system, matching them to purchase orders and sending them to the right person to approve. People still decide what gets approved and paid. The goal is fewer typed-in bills, fewer mistakes, and a clear record of who approved what.' },
  { category: 'basics', question: 'How do you automate accounts payable?',
    answer: 'Start with where invoices arrive, usually one shared inbox. Then add, in order: reading each invoice and pulling out supplier, ABN, date, amounts and GST; checking it is a valid tax invoice and not a duplicate; coding it to the right account; matching it to a purchase order if you use them; routing it for approval by amount or cost centre; and creating the bill in Xero or MYOB ready for your normal payment run.' },
  { category: 'basics', question: 'What is invoice approval workflow?',
    answer: 'It is the set of rules that decides who must approve a supplier invoice before it is paid. A typical small business version: under a set amount, the manager who ordered it approves; above it, a director also approves; anything without a purchase order goes to finance first. Automating it means the invoice goes to the right person by itself, with reminders, and the approval is recorded against the bill.' },
  { category: 'basics', question: 'What is three-way matching?',
    answer: 'Three-way matching compares three documents before a bill is paid: the purchase order (what you ordered and at what price), the receipt or delivery record (what actually arrived), and the supplier invoice (what you are being charged). If quantities and prices agree within your tolerance, the bill can go through. If not, it is flagged for a person. Two-way matching skips the delivery check.' },
  { category: 'basics', question: 'Is AI replacing accounts payable?',
    answer: 'Not the way we build it. AI takes the typing and the first round of checks: reading invoices, spotting duplicates, suggesting account codes and matching purchase orders. Your bookkeeper or finance team still owns supplier relationships, approvals, queries, payment runs and month-end. In practice they spend less time keying bills and more time on the exceptions and cash flow decisions that need judgement.' },

  // ── Software ──
  { category: 'software', question: 'What is the best automation software for accounts payable?',
    answer: 'It depends on your size and system. Small businesses on Xero often start with Xero’s own bill capture, Hubdoc, and an approval app from the Xero App Store. MYOB users can use MYOB’s supplier invoice feeds and In Tray. Growing businesses often add dedicated AP software such as Lightyear. A custom AI agent suits you when your rules, suppliers or systems do not fit any of those well.' },
  { category: 'software', question: 'Does Xero automate invoices?',
    answer: 'Partly. Xero can repeat regular invoices and bills, and Xero’s own guide to automating accounts payable points to Hubdoc for capturing supplier bills and to App Store apps for approvals and purchase order matching. What Xero does not do on its own is apply your specific checking, coding and approval rules across every supplier. That is where an approval app or a custom agent comes in.',
    links: [{ href: SRC_XERO_AP_GUIDE, label: 'Xero: how to automate accounts payable' }] },
  { category: 'software', question: 'Can I use AI with Xero?',
    answer: 'Yes. Xero’s Accounting API lets approved software create purchase bills, update draft or submitted bills, attach the invoice file and add notes. An AI agent uses that to put checked bills into Xero for you. For a build used by one business, Xero offers Custom Connections, available to Australian organisations as an extra monthly subscription that you buy and authorise in your own Xero account.',
    links: [{ href: SRC_XERO_CUSTOM, label: 'Xero Developer: Custom Connections' }] },
  { category: 'software', question: 'Can it work with MYOB AccountRight or MYOB Business?',
    answer: 'Yes. MYOB says its Business API works with AccountRight, new Essentials and MYOB Business files. It can create purchase bills in all four layouts (item, service, professional and miscellaneous) and read purchase orders, including whether an order has been converted to a bill. We confirm your exact MYOB product and setup on the first call, because some setups need extra steps.',
    links: [{ href: SRC_MYOB_API, label: 'MYOB Business API overview' }] },

  // ── AI ──
  { category: 'ai', question: 'Can AI process accounts payable?',
    answer: 'It can process most of the paperwork. Current AI models read invoices in almost any layout, pull out supplier, ABN, line items, GST and totals, and suggest account codes from your past bills. It should not make payment decisions on its own. We build it so the AI prepares and checks, your rules decide where each bill goes, and a person approves before money moves.' },
  { category: 'ai', question: 'Can ChatGPT do my bookkeeping?',
    answer: 'Not safely on its own. The public ChatGPT app is not connected to your ledger, does not know your account codes or approval rules, and pasting supplier invoices into it sends business data to a tool outside your control. The same kind of model can do useful bookkeeping work inside a proper system, with business data terms, your chart of accounts, audit logs and a person checking the output.' },
  { category: 'ai', question: 'What are the disadvantages of using AI in accounting?',
    answer: 'Three main ones. AI can read a figure wrongly or code a bill to the wrong account with confidence, so checks and human review matter. It needs clean inputs: a messy chart of accounts produces messy suggestions. And data may be processed by providers overseas, which brings privacy obligations. We design around all three with validation rules, a review queue, and named providers you approve.' },
  { category: 'ai', question: 'How accurate is AI at reading invoices?',
    answer: 'On clear PDF invoices it is very good; on poor phone photos, handwritten dockets and long multi-page statements it is weaker. We do not quote a single accuracy figure because it depends on your suppliers. Instead we replay a sample of your real past invoices through the agent before launch, measure how often each field is right, and set the agent to flag low-confidence reads for a person.' },

  // ── Tax ──
  { category: 'tax', question: 'What must a tax invoice include in Australia?',
    answer: 'The ATO lists 7 details for taxable sales under $1,000: that it is intended to be a tax invoice, the seller’s identity, the seller’s ABN, the date issued, a brief description including quantity and price, the GST amount (or a statement that the total includes GST), and the extent each sale is taxable. Tax invoices for $1,000 or more must also show the buyer’s identity or ABN.',
    links: [{ href: SRC_ATO_TAX_INVOICES, label: 'ATO: tax invoices' }] },
  { category: 'tax', question: 'Can I claim GST credits without a tax invoice?',
    answer: 'For purchases over $82.50 including GST, no. The ATO says you must have a tax invoice to claim the GST credit, an invoice with incorrect or incomplete information is not a valid tax invoice, and you cannot claim the credit until you hold one. That is why our agent checks each invoice for the required details and flags incomplete ones so you can ask the supplier for a correct copy.',
    links: [{ href: SRC_ATO_GST_CREDITS, label: 'ATO: when you can claim a GST credit' }] },
  { category: 'tax', question: 'What is Peppol eInvoicing and does it replace AP automation?',
    answer: 'Peppol is the network Australia has adopted for eInvoicing, where invoices go straight from the supplier’s software to the buyer’s. The ATO says over 400,000 Australian businesses are on it. It removes the reading step for suppliers who use it, but many suppliers still send PDFs. You still need checking, coding, matching and approvals. A good AP setup handles eInvoices and PDFs through the same rules.',
    links: [{ href: SRC_ATO_EINVOICING, label: 'ATO: about eInvoicing' }] },
  { category: 'tax', question: 'How long do we need to keep supplier invoices?',
    answer: 'The ATO says you need to keep most business records for 5 years, stored so they cannot be changed or damaged. For AP that means the original invoice file, not just the figures typed into Xero or MYOB. Our builds attach the original PDF to each bill and keep a log of every check and approval, so the record and the decision trail sit together.',
    links: [{ href: SRC_ATO_RECORDS, label: 'ATO: record-keeping rules' }] },
  { category: 'tax', question: 'How do you stop fake invoices and bank detail scams?',
    answer: 'Scamwatch warns that scammers send invoices with new payee information to redirect real payments, and advises calling the business on a number you found independently. We build that into the process. Any change to a supplier’s bank details, a new supplier, or an invoice from a look-alike email address is held and sent to a named person to verify by phone before anything is approved.',
    links: [{ href: SRC_SCAMWATCH_BEC, label: 'Scamwatch: business email compromise scams' }] },

  // ── Build ──
  { category: 'build', question: 'How much does AP automation software cost?',
    answer: 'Off-the-shelf AP software is usually a monthly subscription, often priced by invoice volume or users, and published on each vendor’s site. A custom AI agent is a one-off build plus AI usage and support. What moves our scope: how many suppliers and invoice types, whether you use purchase orders, how many approval levels, and which systems it connects to. Our AI cost guide lists Australian market ranges.',
    links: [{ href: '/blog/ai-cost-australia-2026#ai-agent-cost', label: 'AI agent cost in Australia' }] },
  { category: 'build', question: 'How long does it take to set up?',
    answer: 'A focused first version, reading invoices from one inbox, checking them, and creating draft bills in Xero or MYOB for review, usually takes a few weeks from the first workshop. Purchase order matching, multi-level approvals and more entities add time. It runs in review mode first, where every bill waits for a person, so you see real results on live invoices before you let it do more.' },
  { category: 'build', question: 'Does the agent pay our suppliers?',
    answer: 'No. We deliberately stop at the approved bill. Payments stay in your normal process, whether that is a batch payment file from Xero, MYOB’s payment tools or your bank portal, with your usual people authorising them. Keeping payment release with a person is one of the simplest controls against fraud and mistakes, and it keeps your bank’s own approval rules in charge.' },
  { category: 'build', question: 'Will our bookkeeper or accountant still be involved?',
    answer: 'Yes, and they should be. We work with your bookkeeper or accountant to set the account codes, tax codes, tracking categories and approval rules, and they review the exceptions queue. Many find the work shifts from data entry to reviewing and advising. If your accountant looks after several clients, the same approach can be set up per client in their own Xero or MYOB file.' },
  { category: 'build', question: 'Where is our invoice data stored?',
    answer: 'The invoice files and bills live in your Xero or MYOB file and your own email. The AI model that reads each invoice is run by a provider we choose with you, on business terms that stop your data being used to train its models. Invoices from sole traders can contain personal information, and APP 8 applies if it goes overseas, so we document every provider and where it processes data.',
    links: [{ href: SRC_APP8, label: 'OAIC: APP 8 cross-border disclosure' }] },
  { category: 'build', question: 'Do we own the AP agent you build?',
    answer: 'Yes. The workflows, prompts, validation rules, integration code and documentation are yours. You hold the accounts with Xero or MYOB, the email system and the AI provider, and pay them directly with no markup through us. For single-business Xero builds, the Custom Connection sits in your own organisation. If you change bookkeepers or bring the work in-house, the agent keeps running and you keep everything.' },
];

/* ─── Named options in the Australian market (ItemList). Each note is based on
       the company’s own website, fetched 2026-09-26, with an Australian address
       confirmed on that site. ── */
const PROVIDERS: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. We design, build and support a custom AI agent that reads supplier invoices, checks them, codes them and routes approvals into your Xero or MYOB file, and you own it. We work with Australian businesses remotely and do not have an Australian office.' },
  { name: 'Lightyear', note: 'An AI accounts payable automation platform with an office in Chatswood, NSW. It says it automates invoice processing, purchase order management and approvals, and integrates with Xero, MYOB, NetSuite, QuickBooks, Sage and AccountsIQ.' },
  { name: 'Efficiency Leaders', note: 'An accounts payable automation software provider in Sydney. It says it offers AI-driven invoice processing for Australian organisations, with GST and PEPPOL support and integrations such as TechnologyOne and SAP.' },
  { name: 'Business Avengers', note: 'An outsourced accounting and bookkeeping firm in Castle Hill, NSW. It publishes a guide to AP automation in Australia and offers automated invoice processing as part of its bookkeeping and CFO services for small and medium businesses.' },
];

/* ─── JSON-LD. The Organization is referenced by @id only. ───────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Accounts Payable Automation Australia',
      serviceType: 'Accounts payable automation: AI invoice processing agent design, Xero and MYOB integration, approval workflow build and support',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'Custom AI agents for Australian accounts payable. They read supplier invoices from email, check tax invoice details and ABNs, flag duplicates and bank detail changes, code bills, match purchase orders, route approvals and create bills in Xero or MYOB. Payments stay with people. Supported after launch and owned by the client.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: c.url,
      })),
    },
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: TITLE,
      headline: H1,
      description: DESCRIPTION,
      inLanguage: 'en-AU',
      datePublished: '2026-09-26',
      dateModified: UPDATED,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Founder & CEO',
        url: 'https://factoryjet.com/about',
        sameAs: [
          'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
          'https://github.com/factoryjet-tech',
        ],
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#providers`,
      name: 'Accounts payable automation options for Australian businesses',
      itemListElement: PROVIDERS.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: FAQ_ITEMS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL, languages: { 'en-AU': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'An AI agent for Australian accounts payable: reads supplier invoices, checks tax invoice details, codes and matches bills, routes approvals into Xero or MYOB. Built, supported and owned by you.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'FactoryJet: accounts payable automation for Australian businesses on Xero and MYOB' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* The six jobs the AP agent does. */
const JOBS: { t: string; d: string }[] = [
  { t: 'Collects', d: 'Watches the accounts inbox and any Peppol eInvoices, pulls out every invoice and credit note, and ignores statements and newsletters.' },
  { t: 'Reads', d: 'Extracts supplier, ABN, invoice number, dates, line items, GST and totals, and checks the arithmetic. Low-confidence reads are flagged, never guessed.' },
  { t: 'Checks', d: 'Confirms the ATO tax invoice details are present, checks the ABN, catches duplicates, and holds any invoice with changed bank details or an unfamiliar sender.' },
  { t: 'Codes', d: 'Suggests the account, tax code and tracking category from how you coded that supplier before and from your bookkeeper’s rules.' },
  { t: 'Matches', d: 'Finds the purchase order and, if you record deliveries, the receipt. Differences outside your tolerance are shown line by line.' },
  { t: 'Routes', d: 'Sends each checked bill to the right approver by email, Teams or Slack, chases late approvals, and creates the bill in Xero or MYOB with the PDF attached.' },
];

/* Icons and visual-slot subjects for the six job cards (same order as JOBS). */
const JOB_ICONS = [
  'M4 6h16v12H4V6Zm0 0 8 6 8-6',
  'M7 3h7l4 4v14H7V3Zm7 0v4h4M10 12h5M10 16h5',
  'M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Zm-3 9 2 2 4-4',
  'M4 7h10M4 12h16M4 17h7m6-2 3 3-3 3',
  'M4 7h6v10H4V7Zm10 0h6v10h-6V7Zm-4 5h4',
  'M5 12h11m-4-5 5 5-5 5M19 5v14',
] as const;
const JOB_SUBJECTS = [
  'AI-generated model: white envelope and PDF cards dropping from an inbox tray onto a sorting belt, one orange eInvoice card among them',
  'AI-generated model: a white supplier invoice with orange highlight boxes around the ABN, date, GST and total fields',
  'AI-generated model: an invoice card passing a small checkpoint gate, one card with a changed bank account held back by an orange barrier',
  'AI-generated model: a white bill card being slotted into one of several labelled account code drawers, the chosen drawer lit orange',
  'AI-generated model: three white cards side by side, purchase order, delivery docket and invoice, joined by orange connecting lines',
  'AI-generated model: a checked bill card travelling on a track to a small human figure holding an orange approve stamp, then into a ledger book',
] as const;

/* How we build it. */
const BUILD_STEPS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Map your AP process', d: 'We trace real invoices from arrival to payment with whoever pays your bills: inboxes, suppliers, purchase orders and approvers.' },
  { n: '02', t: 'Agree the rules', d: 'With your bookkeeper we write the checks, coding rules, matching tolerances, approval limits and hold rules, including new suppliers and changed bank details.' },
  { n: '03', t: 'Tidy the foundations', d: 'We help merge duplicate suppliers, confirm ABNs, and agree account and tax codes so suggestions stay consistent.' },
  { n: '04', t: 'Connect your systems', d: 'Inbox, Xero or MYOB, your approval channel and any job or inventory system, each with the minimum access it needs. No access to payments.' },
  { n: '05', t: 'Test on past invoices', d: 'We replay a few hundred of your past invoices and compare the agent’s reads, codes and matches with what your team entered.' },
  { n: '06', t: 'Launch in review mode', d: 'The agent creates draft bills and a review queue. Correction rates show which suppliers are ready for more automation.' },
  { n: '07', t: 'Widen in stages', d: 'Suppliers that pass move to automatic routing for approval. New suppliers and exceptions stay with a person.' },
  { n: '08', t: 'Review and support', d: 'We review exceptions with you, add suppliers and rules, and keep it working as Xero, MYOB and the AI models change.' },
];

/* Integration notes. */
const INTEGRATIONS: { sys: string; reads: string; does: string }[] = [
  { sys: 'Xero', reads: 'Contacts, chart of accounts, tax rates, tracking categories, purchase orders and existing bills', does: 'Creates purchase bills as draft or submitted, attaches the invoice PDF, adds notes with the checks run, and updates draft bills after approval' },
  { sys: 'MYOB (AccountRight, Business, new Essentials)', reads: 'Suppliers, accounts, tax codes, purchase orders and their status', does: 'Creates purchase bills in item, service, professional or miscellaneous layouts, and matches bills to open purchase orders' },
  { sys: 'Email (Microsoft 365 or Google Workspace)', reads: 'The shared accounts inbox, attachments and sender details', does: 'Collects invoices, files the originals, replies to suppliers for missing details with your wording' },
  { sys: 'ABN Lookup', reads: 'The ABN on each invoice', does: 'Validates the ABN and the business name against the supplier on file' },
  { sys: 'Microsoft Teams or Slack', reads: 'Approver responses', does: 'Sends approval requests with the invoice and matched purchase order, and chases overdue approvals' },
  { sys: 'Job, inventory or trade systems', reads: 'Purchase orders and deliveries kept outside the ledger', does: 'Supplies the order and receipt side of the match, where the system has a usable API' },
];

const TAX_INVOICE_CHECKS: { t: string; d: string }[] = [
  { t: 'Intended to be a tax invoice.', d: 'The wording, or a Peppol eInvoice.' },
  { t: 'Seller’s identity.', d: 'Matched to the supplier record on file.' },
  { t: 'Seller’s ABN.', d: 'Present, valid, and the same one you have on file.' },
  { t: 'Date issued.', d: 'Read and checked against the period.' },
  { t: 'Description, quantity and price.', d: 'Line by line, so it can be matched to the order.' },
  { t: 'GST amount.', d: 'Shown, or a statement that the total includes GST.' },
  { t: 'Extent taxable.', d: 'Which items carry GST and which do not.' },
];

const SIBLINGS: { href: string; t: string; d: string }[] = [
  { href: '/au/ai-agents', t: 'AI agent development', d: 'AI agents for other back-office work: quote follow-ups, chasing unpaid invoices and order processing.' },
  { href: '/au/ai-development', t: 'AI development and integration', d: 'Custom Xero, MYOB, CRM and ERP integrations with AI built in, for work beyond accounts payable.' },
  { href: '/au/ai-consulting', t: 'AI consulting', d: 'A short assessment of where AI will pay off in your finance and operations work.' },
  { href: '/au/accountant-website-design', t: 'Websites for accountants', d: 'Websites, SEO and client portals for Australian accounting and bookkeeping practices.' },
  { href: '/au', t: 'FactoryJet Australia', d: 'Everything we build for Australian businesses: ecommerce, websites, AI agents and AI search.' },
];

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'accounts-payable-automation';

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

export default function AccountsPayableAutomationAUPage() {
  return (
    <>
      <script id="ld-au-accounts-payable-automation" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="au" logoHref="/au" />
      <div className="aiAgentPage auPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="wrap">
          {crumbs.map((item, index) => (
            <Fragment key={item.url}>
              {index > 0 && ' / '}
              {index === crumbs.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
            </Fragment>
          ))}
        </div>
      </nav>
      <main id="au-content">

        {/* ═══ HERO (copy + inline form left, spec panel right) ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">AP Automation Australia</div>
              <h1>{HERO_H1_LEAD} <span className="hero-emphasis">{HERO_H1_EMPHASIS}</span></h1>
              <p className="lead">
                FactoryJet builds an AI agent that reads your supplier invoices, checks them against the ATO’s tax
                invoice rules, codes them, matches purchase orders and routes each bill for approval in Xero or MYOB.
                Your team approves and pays as they do now. We build it, support it, and you own it.
              </p>
              <HeroInlineForm region="au" source="au_accounts_payable_automation_hero" submitLabel="Plan my AP automation" />
            </div>

            <form
              className="specpanel"
              aria-label="What the accounts payable agent does with every supplier invoice"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="The three stages every supplier invoice passes through: read from the inbox, checked and matched, then held for a person to approve before it becomes a bill in Xero or MYOB"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · WHAT HAPPENS TO EVERY INVOICE</span>
                <span className="sys"><span>XERO</span><span>MYOB</span><span>PEPPOL</span></span>
              </div>
              <div className="workflow-controls">
                <label className="workflow-toggle" title="Pause or resume the animation">
                  <input type="checkbox" className="workflow-pause" aria-label="Pause animation" />
                  <svg className="pause-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="M5 3v10M11 3v10" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                  <svg className="play-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="m5 3 8 5-8 5Z" fill="currentColor" /></svg>
                </label>
                <button type="reset" className="workflow-replay" aria-label="Replay animation" title="Replay animation">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6a5 5 0 1 1 0 4M3 2v4h4" /></svg>
                </button>
              </div>
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what it does">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="apa-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={JOB_ICONS[1]} /></svg></span>
                  <span className="idx">PDF from the inbox or Peppol eInvoice</span>
                  <span className="title">Reads the invoice</span>
                  <span className="tag">ABN, GST, lines</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="apa-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={JOB_ICONS[4]} /></svg></span>
                  <span className="idx">tax invoice details, duplicates, purchase order</span>
                  <span className="title">Checks, codes and matches</span>
                  <span className="tag">Draft bill</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="apa-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={JOB_ICONS[5]} /></svg></span>
                  <span className="idx">by amount, supplier or cost centre</span>
                  <span className="title">Routes for approval</span>
                  <span className="tag">To a person</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · A changed bank account is never approved until someone has called the supplier.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (verified only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '500+', t: 'businesses served by FactoryJet since 2014, founder-led on every project', s: 'About FactoryJet', u: '/about' },
              { v: '7', t: 'details every tax invoice under $1,000 must show, which the agent checks on every bill', s: 'ATO, tax invoices', u: SRC_ATO_TAX_INVOICES },
              { v: '$82.50', t: 'above this, including GST, you need a valid tax invoice to claim the GST credit', s: 'ATO, claiming GST credits', u: SRC_ATO_GST_CREDITS },
              { v: '400,000+', t: 'Australian businesses on the Peppol eInvoicing network', s: 'ATO, about eInvoicing', u: SRC_ATO_EINVOICING },
            ].map((r) => (
              <div className="ledgercell" key={r.t}>
                <div className="k"><a href={r.u} {...(r.u.startsWith('http') ? extLink : {})}>{r.s}</a></div>
                <div className="v">
                  <strong className={/\d/.test(r.v) ? 'ledger-number' : 'ledger-word'}>{r.v}</strong>
                  {r.t}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap byline">
          <div className="av">BB</div>
          <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
          <div className="upd">Last updated<br />26 September 2026</div>
        </div>

        {/* ═══ ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What is accounts payable automation, and what does it look like for an Australian business?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">Accounts payable automation uses software to collect supplier invoices, read and check them,
                    code them, match them to purchase orders and route them for approval, so bills reach Xero or MYOB
                    without anyone typing them in.</span> For an Australian business that also means checking each invoice
                    has the details the ATO requires for a tax invoice, so GST credits can be claimed, and keeping a
                    record of who approved what.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Four terms we use a lot</div>
                    <p>
                      <b>Accounts payable</b> (AP) is the money your business owes suppliers, and the work of paying it.
                      A <b>bill</b> is how Xero and MYOB record a supplier invoice. A <b>purchase order</b> (PO) is what
                      you agreed to buy before the invoice arrived. An <b>AI agent</b> is software that uses an AI model to
                      read documents and take actions, such as creating a draft bill, within rules you set.
                    </p>
                  </div>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto"
                subject="A bookkeeper at a small Australian wholesale business reviewing a queue of checked supplier bills on her monitor, the screen facing her, paper invoices set aside on the desk, no readable text or logos" />
            </div>
          </div>
        </section>

        {/* ═══ WHICH PAGE (scope, cross-links) ═══ */}
        <section className="section platforms" id="scope">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Built-in tools, AP software or a custom agent</div>
                <h2>Three ways Australian businesses automate accounts payable</h2>
              </div>
              <p>
                Each route is right for someone. We build the third, and we will tell you on the first call if one of
                the other two fits you better.
              </p>
            </div>
            <div className="eyebrow plat-label">Quick guide</div>
            <div className="platlist" role="list">
              <div className="plat" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Built-in capture in Xero or MYOB</h3></div><p className="plat-build">low volume, one person entering bills</p><p className="plat-build"><a href={SRC_XERO_AP_GUIDE} {...extLink}>Xero</a> · <a href={SRC_MYOB_SUPPLIER} {...extLink}>MYOB</a></p></div>
              <div className="plat" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Dedicated AP software</h3></div><p className="plat-build">standard approvals, growing volume</p><p className="plat-build"><a href="#providers">Options</a></p></div>
              <div className="plat plat-own" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Custom AI agent you own</h3></div><p className="plat-build">your rules, several systems, practices</p><p className="plat-fit">This page</p></div>
            </div>
          </div>
        </section>

        {/* ═══ SIX JOBS + WHAT STAYS WITH PEOPLE ═══ */}
        <section className="section capabilities" id="capabilities">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What the accounts payable agent actually does</div>
              <h2>Six jobs: collect, read, check, code, match and route</h2>
              <p className="lead">
                These are separate jobs, and you decide which ones the agent does for each supplier. Most businesses
                start with collecting, reading and checking, then add coding, matching and routing as the results hold up.
              </p>
            </div>
            <div className="capgrid">
              {JOBS.map((j, i) => {
                const n = String(i + 1).padStart(2, '0');
                return (
                  <div key={j.t} className={`cap cap-${i + 1}`}>
                    <div className="caphead"><span className="capid">CAP‑{n}</span><svg {...CAP_ICON}><path d={JOB_ICONS[i]} /></svg></div>
                    <VisualSlot page={PAGE_KEY} slot={`capability-${n}`} kind="diagram" ratio="11:4" className="cap-diagram" subject={JOB_SUBJECTS[i]} />
                    <h3>{j.t}</h3>
                    <p>{j.d}</p>
                  </div>
                );
              })}
            </div>
            <div className="agentdir-group chg-group">
              <div className="agentdir-label"><span className="capid">GRP‑01</span><h3>What stays with your people</h3></div>
              <ul className="chg-list">
                <li><span><b>Approving spend.</b> The agent routes; people approve.</span></li>
                <li><span><b>Releasing payments.</b> Payment runs stay in your normal process.</span></li>
                <li><span><b>Changed bank details.</b> Verified by phone on a number you already hold.</span></li>
                <li><span><b>Supplier disputes.</b> Short deliveries and wrong prices need a conversation.</span></li>
                <li><span><b>Tax judgement calls.</b> Anything your accountant should decide.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ INTEGRATIONS TABLE ═══ */}
        <section className="section integrations" id="integrations">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Works inside the tools you already use</div>
              <h2>Xero and MYOB integration for accounts payable: what the agent reads and what it does</h2>
              <p className="lead">
                Your team keeps working in Xero or MYOB. The agent connects through each product’s published API, with
                only the access each step needs, and never has access to make payments.
              </p>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>System</th>
                    <th>What the agent reads</th>
                    <th className="fj">What the agent can do (your rules)</th>
                  </tr>
                </thead>
                <tbody>
                  {INTEGRATIONS.map((r) => (
                    <tr key={r.sys}>
                      <th scope="row">{r.sys}</th>
                      <td>{r.reads}</td>
                      <td className="fj">{r.does}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Based on the published documentation for the{' '}
              <a href={SRC_XERO_INVOICES} {...extLink}>Xero Accounting API (invoices and bills)</a>,{' '}
              <a href={SRC_XERO_PO} {...extLink}>Xero purchase orders</a>,{' '}
              <a href={SRC_MYOB_BILL} {...extLink}>MYOB purchase bills</a>,{' '}
              <a href={SRC_MYOB_PO} {...extLink}>MYOB purchase orders</a> and{' '}
              <a href={SRC_ABN_WS} {...extLink}>ABN Lookup web services</a>. Single-business Xero builds can use a{' '}
              <a href={SRC_XERO_CUSTOM} {...extLink}>Custom Connection</a> bought in your own Xero organisation.
            </p>
          </div>
        </section>

        {/* ═══ TAX INVOICE RULES → facts + checklist panel ═══ */}
        <section className="section facts" id="tax-invoices">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The ATO rules, in plain English</div>
              <h2>Tax invoices, GST credits and record keeping: what AP automation has to get right in Australia</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  <b>No valid tax invoice, no GST credit.</b> The ATO says you must have a tax invoice to claim a GST
                  credit for purchases over $82.50 including GST, and that an invoice with incorrect or incomplete
                  information is not a valid tax invoice. If you need one, you cannot claim the credit until you hold it.
                  So checking every supplier invoice is not a nice extra. It is how your BAS stays right.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>Seven details, plus one over $1,000.</b> For taxable sales under $1,000 the ATO lists seven details a
                  tax invoice must show (see the checklist). From $1,000 the invoice must also show the buyer’s identity
                  or ABN. The agent checks each one, and when something is missing it drafts a request to the supplier
                  for a corrected copy. The ATO gives suppliers 28 days to provide a tax invoice once asked, and the agent
                  tracks open requests.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <p>
                    <b>Keep the original, unchanged.</b> The ATO says you need to keep most records for 5 years, stored so
                    the information cannot be changed and the record is protected from damage. We attach the original
                    invoice file to each bill in Xero or MYOB and keep a log of every check and approval, so the evidence
                    and the decision sit together if the ATO or your auditor asks.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_ATO_TAX_INVOICES} {...extLink}>ATO, tax invoices</a>;{' '}
                    <a href={SRC_ATO_GST_CREDITS} {...extLink}>ATO, when you can claim a GST credit</a>;{' '}
                    <a href={SRC_ATO_RECORDS} {...extLink}>ATO, overview of record-keeping rules for business</a>.
                    This is general information, not tax advice. Confirm your situation with your registered tax or BAS agent.
                  </p>
                </div></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">The 7 tax invoice details the agent checks</div>
                <ol className="au-numlist">
                  {TAX_INVOICE_CHECKS.map((s) => (
                    <li key={s.t}><span><b>{s.t}</b> {s.d}</span></li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PHOTOBREAK (placeholder) ═══ */}
        <VisualSlot page={PAGE_KEY} slot="photobreak" kind="illustration" ratio="12:5" className="photobreak"
          subject="AI-generated model: a long rail of white invoice cards moving left to right through read, check, match and approve stations, one orange card lifted off the rail towards a small human figure" />

        {/* ═══ HOW WE BUILD IT → process timeline ═══ */}
        <section className="section process" id="how-we-build">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How we build it</div>
                <h2>How we build your accounts payable agent, in eight steps</h2>
                <p className="lead">
                  The difference between an AP demo and an agent your bookkeeper trusts is mostly steps two, three and
                  five. Open any step to see what happens in it.
                </p>
              </div>
              <VisualSlot page={PAGE_KEY} slot="process" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="A FactoryJet engineer and the bookkeeper of an Australian trade supplier sorting printed supplier invoices into piles on a meeting table, laptop screen facing them, no readable text or logos"
                caption="Step one is tracing real invoices from arrival to payment with the person who pays your bills. The rules you sign off come from that session." />
            </div>
            <div className="timeline timeline-4">
              {BUILD_STEPS.map((s) => (
                <details key={s.n} className="tnode">
                  <summary>
                    <div className="idx">{s.n}</div>
                    <h3>{s.t}<span className="chev" aria-hidden="true">+</span></h3>
                  </summary>
                  <p>{s.d}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline={'Supplier invoices piling up before every BAS?'}
            sub={'Tell us whether you use Xero or MYOB, your monthly invoice volume and how approvals work. On a short call, the founder will tell you whether the built-in tools are enough or what a custom AP agent would add.'}
            label={'Plan my AP automation'}
          />
        </div>

        {/* ═══ FRAUD CONTROLS → definition module ═══ */}
        <section className="definition" id="fraud-controls">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition" kind="photo" ratio="3:2" className="definition-image"
              subject="A finance officer at an Australian small business on a desk phone calling a supplier to confirm bank details, a laptop open beside her with the screen facing her, no readable text or logos"
              captionClassName="figcap"
              caption="The simplest control against payment redirection scams: call the supplier on a number you already hold. The agent makes sure that call happens before approval." />
          </div>
          <div className="definition-copy">
            <div className="eyebrow">Fraud and payment controls</div>
            <h2>Invoice scams and changed bank details: controls built into the agent</h2>
            <p>
              Scamwatch describes business email compromise scams as scammers pretending to be a business you use and
              sending an invoice with new payee information, so a real payment goes to the wrong account. Its advice is
              to contact the business by phone on a number you sourced independently, never one from the email itself.
            </p>
            <p>
              Automation that pays whatever arrives makes this worse. Our agent compares every invoice’s bank details
              with the supplier record and holds the bill if they differ. It also holds new suppliers, look-alike sender
              addresses and duplicates, each with a short note to a named person.
            </p>
            <p>
              Payments stay out of the agent’s reach: your people approve and release them as they do now. Source:{' '}
              <a href={SRC_SCAMWATCH_BEC} {...extLink}>Scamwatch, business email compromise scams</a>.
            </p>
          </div>
        </section>

        {/* ═══ PEPPOL + PRIVACY → facts ═══ */}
        <section className="section facts" id="einvoicing">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">eInvoicing and your data</div>
              <h2>Peppol eInvoicing, PDF invoices and where your invoice data goes</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  <b>Peppol is Australia’s eInvoicing standard.</b> The ATO says Australia has adopted the Peppol framework
                  as the common standard and network for eInvoicing, where invoices pass directly between the supplier’s
                  and buyer’s software. Over 400,000 Australian businesses are on the network, and buyers do not need to
                  enter or scan those invoices by hand.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>An eInvoice can count as a tax invoice.</b> Some eInvoices do not say “Tax invoice”. The ATO considers
                  an eInvoice issued under the A-NZ Invoice Specification on the Peppol framework, with all the mandatory
                  data, meets the requirement that the document is intended to be a tax invoice. Plenty of suppliers will
                  still email PDFs, so the agent runs both through the same checks, coding, matching and approvals.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <p>
                    <b>Know where invoice data goes.</b> Supplier invoices from sole traders can contain personal
                    information, and most AI models run on servers overseas. Under APP 8, before personal information
                    goes to an overseas recipient, a covered business must take reasonable steps to make sure the
                    recipient will not breach the Australian Privacy Principles, and stays accountable for it. We name
                    every provider, choose business terms that stop your data being used for training, and document the
                    data flow for your privacy policy.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_ATO_EINVOICING} {...extLink}>ATO, about eInvoicing</a>;{' '}
                    <a href={SRC_ATO_TAX_INVOICES} {...extLink}>ATO, tax invoices (eInvoicing)</a>;{' '}
                    <a href={SRC_APP8} {...extLink}>OAIC, APP 8 cross-border disclosure</a>.
                    This is general information, not legal advice.
                  </p>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-2" kind="diagram" ratio="3:2" className="factphoto"
                subject="AI-generated model: two paths merging into one, a white PDF envelope path with a reading station and an orange Peppol eInvoice path that skips it, both joining one row of check, match and approve stations" />
            </div>
          </div>
        </section>

        {/* ═══ COMPARISON TABLE ═══ */}
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">Side by side</div>
              <div>
                <h2>Built-in Xero or MYOB tools vs AP software vs a custom accounts payable agent</h2>
                <p className="lead">
                  Three common routes, plus doing it by hand. This compares what changes day to day, not price.
                </p>
              </div>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">Custom AP agent (FactoryJet)</th>
                    <th>AP software</th>
                    <th>Built-in Xero or MYOB tools</th>
                    <th>Manual entry</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Reads invoices automatically</th><td className="fj">Yes, any layout, flags low confidence</td><td>Yes</td><td>Yes, via capture tools and supplier feeds</td><td>A person types them</td></tr>
                  <tr><th scope="row">Checks tax invoice details and ABN</th><td className="fj">Your rules, every invoice</td><td>Varies by product</td><td>Varies</td><td>If someone remembers</td></tr>
                  <tr><th scope="row">Purchase order matching</th><td className="fj">Against any system with an API</td><td>Usually, within the product</td><td>Through add-on apps</td><td>By hand</td></tr>
                  <tr><th scope="row">Approval routing</th><td className="fj">Designed around your structure</td><td>Configurable</td><td>Basic, or through apps</td><td>Email and chasing</td></tr>
                  <tr><th scope="row">Bank detail change holds</th><td className="fj">Built in</td><td>Varies by product</td><td>Varies</td><td>Manual</td></tr>
                  <tr><th scope="row">Who owns the setup</th><td className="fj">You do</td><td>Your config, their product</td><td>Xero or MYOB</td><td>You do</td></tr>
                  <tr><th scope="row">Support after launch</th><td className="fj">Same team, ongoing</td><td>Vendor support</td><td>Vendor support</td><td>Your bookkeeper</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Market price ranges are in our <a href="/blog/ai-cost-australia-2026#ai-agent-cost">AI cost guide for Australia (2026)</a>.
              Built-in features are described from <a href={SRC_XERO_AP_GUIDE} {...extLink}>Xero’s AP automation guide</a> and{' '}
              <a href={SRC_MYOB_SUPPLIER} {...extLink}>MYOB’s supplier invoice automation help</a>.
            </p>
          </div>
        </section>

        {/* ═══ ENGAGEMENT SHAPES + DEMAND ═══ */}
        <section className="section platforms" id="engagement">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Scope, not packages</div>
                <h2>How accounts payable automation projects are scoped</h2>
              </div>
              <p>
                Most projects start with capture and checks into draft bills, then add coding, matching and approvals.
                Every project is quoted for your scope, with the build and ongoing support priced separately.
              </p>
            </div>
            <div className="au-split">
              <div>
                <p>
                  What moves the scope: the number of suppliers and invoice types, whether you use purchase orders and
                  record deliveries, how many approval levels and entities, which systems it connects to, and your monthly
                  invoice volume (which sets the AI usage you pay providers directly). For typical Australian market
                  ranges, see our <a href="/blog/ai-cost-australia-2026">AI cost guide</a>. To compare firms, see{' '}
                  <a href="/blog/best-ai-agencies-australia-2026">the best AI agencies in Australia</a>.
                </p>
                <ModalCTAButton label="Plan my AP automation" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="demand">
                <div className="demand-head"><span>Australia · Monthly Search Demand</span><b>DataForSEO</b></div>
                <ul>
                  {[
                    { kw: 'accounts payable automation', v: '320', w: '100%', kd: 'The head term' },
                    { kw: 'xero integration', v: '90', w: '28%', kd: 'Connecting apps to Xero' },
                    { kw: 'invoice automation', v: '70', w: '22%', kd: 'Invoices without typing' },
                    { kw: 'xero api integration', v: '70', w: '22%', kd: 'Custom builds on Xero' },
                    { kw: 'myob integration', v: '20', w: '6%', kd: 'Connecting apps to MYOB' },
                    { kw: 'ai document processing', v: '10', w: '3%', kd: 'AI reading documents' },
                  ].map((r) => (
                    <li key={r.kw} className="demand-row">
                      <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<small> searches</small></span></div>
                      <div className="demand-bar"><i style={{ width: r.w }} /></div>
                      <div className="demand-kd">{r.kd}</div>
                    </li>
                  ))}
                </ul>
                <p className="demand-src">Source: DataForSEO, Australia, September 2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PROVIDER LIST (self-disclosure, ItemList from PROVIDERS) ═══ */}
        <section className="section platforms" id="providers">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">The honest landscape</div>
                <h2>Accounts payable automation options Australian businesses compare</h2>
              </div>
              <p>
                We are one option, not the only one. Besides the built-in tools in Xero and MYOB, these are Australian
                providers that show up when people search for accounts payable automation in Australia. Each note is
                based on what the company says on its own website.
              </p>
            </div>
            <div className="platlist" role="list">
              {PROVIDERS.map((p, i) => (
                <div key={p.name} className={p.name === 'FactoryJet' ? 'plat plat-2col plat-own' : 'plat plat-2col'} role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{p.name}</h3>{p.name === 'FactoryJet' && <span className="plat-flag">That is us</span>}</div>
                  <p className="plat-build">{p.note}</p>
                </div>
              ))}
            </div>
            <p className="sub-note">
              Options named from live Australian search results for accounts payable automation, September 2026. Notes and
              Australian addresses reflect each company’s own website on 26 September 2026. Listing is not endorsement.
            </p>
            <div className="au-panel au-panel-wide">
              <div className="eyebrow">Questions to ask any provider, including us</div>
              <ol className="au-numlist">
                <li><span><b>Can we test it on our own past invoices?</b> A demo on sample invoices tells you little. Ask for results on yours.</span></li>
                <li><span><b>What happens when it cannot read something?</b> The right answer is flag it for a person, never guess.</span></li>
                <li><span><b>What stops a changed bank account being paid?</b> There should be a hold and a phone check, every time.</span></li>
                <li><span><b>Which AI providers see our invoices, where, and do they train on them?</b> Get names and locations in writing.</span></li>
              </ol>
            </div>
          </div>
        </section>

        {/* ═══ SIBLING SERVICES → agentdir ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Beyond accounts payable</div>
              <h2>The rest of what we build for Australian businesses</h2>
              <p>
                Accounts payable is often the first finance process a business trusts to an AI agent. These are the
                natural next steps, built by the same team.
              </p>
            </div>
            <ul className="agentdir-grid">
              {SIBLINGS.map((s) => (
                <li key={s.href}>
                  <a href={s.href}>
                    <span className="agentdir-t">{s.t}</span>
                    <span className="agentdir-l">{s.d}</span>
                    <span className="agentdir-go" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ FAQ (same FAQ_ITEMS array as the FAQPage JSON-LD) ═══ */}
        <AuFaq
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          heading="Accounts payable automation questions Australian businesses actually ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ FINAL CTA (light) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>Fewer bills typed by hand, cleaner GST claims, approvals that do not stall</h2>
              <p>
                Send your name and work email. The founder replies within 24 hours to book a short call about your
                invoices, Xero or MYOB setup and approvals, and which route fits. No spam, no obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="Plan my AP automation" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/ai-agents">See all AI agent work</a>
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}
