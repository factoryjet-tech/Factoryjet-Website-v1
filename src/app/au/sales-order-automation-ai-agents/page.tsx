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
import '../au-hub.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /au/sales-order-automation-ai-agents, built 2026-10-29.

   Angle: purchase orders emailed by Australian trade customers (PDF,
   spreadsheet, email body) turned into DRAFT sales orders that a person on the
   order desk approves. The US twin (/services/sales-order-automation-ai-agents)
   covers both directions; this page reuses ideas from it, never sentences.

   Demand, DataForSEO Google Ads search volume, Australia (location 2036),
   pulled 29 Oct 2026: "xero quotes" 140, "xero purchase orders" 110,
   "edi australia" 20, and 10 each for "sales order automation", "order entry
   automation", "purchase order automation", "ai order processing", "xero sales
   order", "myob sales order", "sales order processing". FAQ wording follows
   Australian People Also Ask results pulled the same day for "sales order
   processing", "automated order processing", "myob sales order" and "xero
   purchase orders".

   Truth rules for anyone editing this file:
   1. Every third-party fact was read on that party's own page or published
      spec on 29 Oct 2026 and is linked through the SRC_* constants below.
      ATO and OAIC pages refuse plain HTTP clients and were read in a browser.
   2. Xero: the published Accounting API spec (XeroAPI/Xero-OpenAPI,
      xero_accounting.yaml) was searched on 29 Oct 2026 for "sales order" and
      "SalesOrder": no match. It lists Quotes (statuses DRAFT, SENT, DECLINED,
      ACCEPTED, INVOICED, DELETED), invoices of type ACCREC with statuses
      including DRAFT, SUBMITTED and AUTHORISED, and create/update endpoints for
      quotes, invoices and purchase orders.
   3. No FactoryJet prices. The only figures are Flowtivity's AUD market ranges
      for a BUILD, and Flowtivity does not say whether they include GST. Nothing
      here says what an agent costs to run or look after (rule of 11 Oct 2026).
   4. Nothing here says where the FactoryJet team is. No client is named and no
      client is presented as Australian. The experience line is Bhavesh's own
      statement (Odoo, NetSuite, SAP Business One, ERPNext, custom ERPs; EDI
      and punchout), framed as work we have done, not Australian work.
   5. Schema: Service + BreadcrumbList + WebPage + FAQPage. FAQPage mainEntity
      is generated from the same FAQ_ITEMS array AuFaq renders. There is no
      second array.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL = 'https://factoryjet.com/au/sales-order-automation-ai-agents';
const UPDATED = '2026-10-29';
const TITLE = 'Sales Order Automation Australia | AI Order Entry for Xero & MYOB';
const HERO_H1_LEAD = 'AI Sales Order Automation for Australian Trade Suppliers:';
const HERO_H1_EMPHASIS = 'Emailed POs Into Draft Orders';
const H1 = `${HERO_H1_LEAD} ${HERO_H1_EMPHASIS}`;
const DESCRIPTION =
  'We build AI agents that turn purchase orders emailed by Australian trade customers into draft sales orders in Xero, MYOB, Cin7 Core, Unleashed or your ERP.';
const IMG = '/images/us/sales-order-automation-ai-agents';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Sales Order Automation', url: CANONICAL },
];

/* ─── External sources, all read 29 Oct 2026 ───────────────────────────── */
// Xero's published Accounting API spec. Quote statuses DRAFT, SENT, DECLINED,
// ACCEPTED, INVOICED, DELETED; "Create one or more quotes"; "Creates one or more
// sales invoices or purchase bills"; invoice Type ACCREC / ACCPAY; invoice
// Status DRAFT, SUBMITTED, DELETED, AUTHORISED, PAID, VOIDED; "Creates one or
// more purchase orders". No sales order object anywhere in the file.
const SRC_XERO_SPEC = 'https://github.com/XeroAPI/Xero-OpenAPI/blob/master/xero_accounting.yaml';
// MYOB Business API, Sale Order: "GET | PUT | POST | DELETE"; layouts Item,
// Service, Professional, TimeBilling, Miscellaneous; "Order status can consist
// of the following:" Open, ConvertedToInvoice. API access "is available to both
// AccountRight and new Essentials files". It does not say which editions or
// tiers carry the Item layout or inventory, so the page says that is checked
// on the scoping call.
const SRC_MYOB_ORDER = 'https://developer.myob.com/api/myob-business-api/v2/sale/order/';
// MYOB Business API overview: connects to "AccountRight, new Essentials and
// MYOB Business files".
const SRC_MYOB_API = 'https://developer.myob.com/api/myob-business-api/api-overview/';
// Cin7 Core developer portal, Sale Order [/sale/order]: Status "For POST only
// DRAFT and AUTHORISED values accepted".
const SRC_CIN7_CORE = 'https://dearinventory.docs.apiary.io/';
// Unleashed API, Sales Orders: resource "allows sales orders to be listed,
// viewed, and created"; POST /SalesOrders; PUT to update; OrderStatus required
// for POST and PUT; examples show Parked, Placed, Backordered, Completed.
const SRC_UNLEASHED = 'https://apidocs.unleashedsoftware.com/SalesOrders';
// ATO, Tax invoices (last updated 18 Sep 2026): 28 days unless $82.50 incl GST
// or less; 7 details under $1,000; "$1,000 or more also need to show the
// buyer's identity or ABN"; "Australia has adopted the Peppol framework as the
// common standard and network for eInvoicing."
const SRC_ATO_TAX_INVOICES =
  'https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/tax-invoices';
// ATO, About eInvoicing (last updated 7 Jul 2026): Peppol network "over
// 400,000 Australian businesses"; "buyers don't need to manually enter or scan
// invoices into their software".
const SRC_ATO_EINVOICING = 'https://www.ato.gov.au/businesses-and-organisations/einvoicing/about-einvoicing';
// OAIC, APP guidelines chapter 8 (updated 3 Oct 2025): reasonable steps before
// disclosing to an overseas recipient (APP 8.1); accountable for the overseas
// recipient's acts (s 16C).
const SRC_APP8 =
  'https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information';
// Flowtivity, "How Much Does an AI Agent Cost in 2026? Australian Pricing
// Guide" (5 March 2026): "Document processing and data entry" $12,000 to
// $30,000, 4 to 8 weeks; "Multi-system workflow automation" $20,000 to $50,000+,
// 6 to 12 weeks. AUD. GST basis not stated.
const SRC_FLOWTIVITY = 'https://flowtivity.ai/blog/ai-agent-cost-pricing-guide-australia-2026/';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',  label: 'Sales order basics' },
  { key: 'systems', label: 'Xero, MYOB, Cin7 & ERPs' },
  { key: 'tax',     label: 'GST, tax invoices & EDI' },
  { key: 'control', label: 'Accuracy & control' },
  { key: 'build',   label: 'Cost, timing & ownership' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── Basics ──
  { category: 'basics', question: 'What is sales order automation?',
    answer: 'It means software does the keying when a customer orders. A purchase order arrives by email, the software reads the customer, the PO number, each line and the delivery date, checks them against your price list and stock, and creates the sales order in your system. Done well, it leaves the order as a draft so a person on your order desk approves it before anything is picked, invoiced or confirmed.' },
  { category: 'basics', question: 'What is the difference between a purchase order and a sales order?',
    answer: 'They are two sides of one deal. Your customer raises a purchase order, or PO, to tell you what they want to buy and at what price. You raise a sales order in your own system to record that you have agreed to supply it. The PO number belongs to the customer, and a good sales order carries it, so their accounts team can match your invoice to their order later.' },
  { category: 'basics', question: 'Who prepares a sales order?',
    answer: 'The seller does. At most trade suppliers, that means a customer service or order desk person who reads the emailed PO, finds the customer, picks the right items and keys the order into Xero, MYOB, Cin7 Core, Unleashed or an ERP. An AI agent takes over the reading and keying and leaves the finished draft with that same person, who still decides whether it is right.' },
  { category: 'basics', question: 'Is a sales order the same thing as an invoice?',
    answer: 'No. A sales order records what you have agreed to supply, before anything ships. An invoice asks for payment once you have supplied it, and in Australia it usually has to be a valid tax invoice. In MYOB the link is visible: its API gives a sale order the status Open or ConvertedToInvoice. In Xero, which has no sales order record, the order often waits as a quote or a draft invoice.',
    links: [{ href: SRC_MYOB_ORDER, label: 'MYOB Business API: Sale Order' }] },
  { category: 'basics', question: 'What comes first, the order or the invoice?',
    answer: 'The order. The customer sends a purchase order, you create the sales order, you pick and dispatch the goods, and then you invoice. Some businesses invoice at the point of order for prepaid accounts, but trade customers on 30-day terms expect the invoice after delivery, quoting their PO number. Keeping that order of events is one reason the agent drafts orders and leaves invoicing to your normal process.' },
  { category: 'basics', question: 'Can AI do order entry from emailed purchase orders?',
    answer: 'Yes, for the reading and the keying. A modern AI model can read a PDF from a customer’s ERP, a spreadsheet with their own part numbers, or an email that says “same as last week plus two cartons”. What it cannot know on its own is your price for that customer, your stock or your credit terms. That is why the agent checks your system before it drafts, and why a person approves the result.' },
  { category: 'basics', question: 'What are the steps in the sales order process?',
    answer: 'Receive the purchase order. Identify the customer and their PO number. Match each line to your items and units. Check price, stock and credit. Create the sales order. Confirm it to the customer with a date. Pick, pack and dispatch with Australia Post, StarTrack or your carrier. Invoice, quoting the PO number. Our agent covers the first six steps and hands dispatch and invoicing to your existing process.' },

  // ── Systems ──
  { category: 'systems', question: 'Does Xero have sales orders?',
    answer: 'Not as a separate record. We searched Xero’s published Accounting API specification on 29 October 2026 and found no sales order object. It does have quotes, with statuses including DRAFT, ACCEPTED and INVOICED, and sales invoices that can be saved as DRAFT. So on plain Xero the agent writes an accepted quote or a draft invoice. Wholesalers who need real sales orders usually run an inventory app such as Cin7 Core or Unleashed beside Xero.',
    links: [{ href: SRC_XERO_SPEC, label: 'Xero Accounting API specification' }] },
  { category: 'systems', question: 'Can I make a purchase order in Xero?',
    answer: 'Yes. Xero’s API specification lists endpoints that retrieve, create and update purchase orders. That matters for order automation when a customer order needs stock you do not hold: the agent can draft the purchase order to your supplier in Xero at the same time as the customer’s order, and your buyer approves both. Nothing is sent to a supplier without a person signing off.',
    links: [{ href: SRC_XERO_SPEC, label: 'Xero Accounting API specification' }] },
  { category: 'systems', question: 'Does it work with MYOB?',
    answer: 'Yes, subject to your MYOB edition. MYOB’s Sale Order documentation says API access is available to AccountRight and new Essentials files, and lists reading, creating, updating and deleting orders in Item, Service, Professional, TimeBilling and Miscellaneous layouts. Whether your file has sale orders in the Item layout, with inventory, depends on the edition you run, so we check it on the scoping call. Where it does, the agent creates the order as Open and your team converts it to an invoice when the goods go out.',
    links: [{ href: SRC_MYOB_API, label: 'MYOB Business API overview' }, { href: SRC_MYOB_ORDER, label: 'MYOB Sale Order endpoint' }] },
  { category: 'systems', question: 'Does it work with Cin7 Core or Unleashed?',
    answer: 'Yes, and both suit this job. Cin7 Core’s developer documentation says a sale order created through its API can only be saved as DRAFT or AUTHORISED, so the agent saves DRAFT and your team authorises. Unleashed’s API lets sales orders be listed, viewed, created and updated, and requires an order status on each one. We set the status your team already uses for orders waiting on a check.',
    links: [{ href: SRC_CIN7_CORE, label: 'Cin7 Core API' }, { href: SRC_UNLEASHED, label: 'Unleashed API: Sales Orders' }] },
  { category: 'systems', question: 'What about NetSuite, Odoo or a custom ERP?',
    answer: 'Yes, we have built order flows on each of them. The first job on any ERP is finding where an order can wait for a person: a draft, a pending approval status or a review list we build. If a custom ERP has no API, we look at its import files or a read-only database view before anything else.' },
  { category: 'systems', question: 'What about orders from our Shopify store or marketplaces?',
    answer: 'Those usually need no reading at all. Orders from a Shopify store or from marketplaces such as Amazon.com.au, Bunnings Marketplace or Kogan reach your inventory system as structured records through the connector you already run. This page is about the orders that arrive as documents: trade customers, builders, retailers and resellers who email a PO. If your web store needs work, see our ecommerce development page.',
    links: [{ href: '/au/ecommerce-development', label: 'Ecommerce development in Australia' }] },

  // ── Tax, GST, EDI ──
  { category: 'tax', question: 'How does the agent handle GST on purchase order prices?',
    answer: 'It checks which basis each customer uses. Many trade POs show unit prices ex GST with GST added at the bottom, while others show GST-inclusive totals. If the agent compares an inc-GST line with your ex-GST price list, every line looks about 10% too high. So each customer gets a recorded basis, the agent compares like with like, and any line it cannot reconcile goes to your order desk.' },
  { category: 'tax', question: 'Will the invoice that follows be a valid tax invoice?',
    answer: 'The agent does not issue invoices, but it makes the invoice easier to get right. The ATO lists seven details for taxable sales under $1,000, including your ABN, the date, a description with quantity and price, and the GST amount. From $1,000 the invoice must also show the buyer’s identity or ABN. The agent records the customer’s legal name, ABN and PO number on the order, so they flow onto the invoice.',
    links: [{ href: SRC_ATO_TAX_INVOICES, label: 'ATO: tax invoices' }] },
  { category: 'tax', question: 'Does Peppol eInvoicing replace emailed purchase orders?',
    answer: 'Not yet for most suppliers. The ATO describes Peppol as Australia’s standard network for eInvoicing, with over 400,000 Australian businesses on it, and its pages are about invoices passing between suppliers’ and buyers’ software. Purchase orders from trade customers still mostly arrive as PDFs and emails. If you send invoices by Peppol, the PO number the agent captured is what lets your customer’s software match them.',
    links: [{ href: SRC_ATO_EINVOICING, label: 'ATO: about eInvoicing' }] },
  { category: 'tax', question: 'Our largest retail customers want EDI. Do we still need an agent?',
    answer: 'Often yes, for everyone else. EDI is a fixed electronic format for orders and replies, set by the buyer, and it needs an EDI provider or an integration into your system. We build EDI integrations and punchout catalogues as well as agents. The usual picture is a few large accounts on EDI and dozens of smaller ones emailing PDFs. The agent handles the emails and checks for an order that arrives both ways.' },

  // ── Accuracy & control ──
  { category: 'control', question: 'How accurate is AI at reading purchase orders?',
    answer: 'We hand you a scoring sheet instead of a headline percentage. Before launch the agent works through a set of your past POs, and every customer gets a row: PO number, lines, quantities, prices and delivery dates, each marked right, wrong or flagged. GST basis and unit of measure are scored as fields of their own, because a missed ex or inc switch or a carton read as an inner costs more than a typo. Anything the agent is unsure of is flagged on the draft.' },
  { category: 'control', question: 'What happens when the price on the PO does not match our price list?',
    answer: 'The agent shows the difference and stops. Your sales lead decides the rule before the build: for example, accept differences under a set amount and query anything larger. The agent applies that written rule and nothing else. It never lowers your price to match an old PO, and it never raises the customer’s price without a person approving the change.' },
  { category: 'control', question: 'Can the agent send order confirmations to customers?',
    answer: 'It can draft them, and you decide when it sends. The draft confirmation quotes the customer’s PO number, the lines you can supply, any short or back-ordered items and the dispatch date worked out from stock. At first a person releases every confirmation. Once the logs show the drafts are right for a customer, you can let routine confirmations go out on approval of the order.' },
  { category: 'control', question: 'Where does our order data go?',
    answer: 'Purchase orders carry names, phone numbers and delivery addresses, which can be personal information, and many AI models run on servers overseas. Under APP 8, a business covered by the Privacy Act must take reasonable steps before disclosing personal information to an overseas recipient, and stays accountable for it. We name every provider, use business terms that stop your data being used for training, and document the data flow.',
    links: [{ href: SRC_APP8, label: 'OAIC: APP 8 cross-border disclosure' }] },

  // ── Build ──
  { category: 'build', question: 'How much does sales order automation cost in Australia?',
    answer: 'Flowtivity’s March 2026 Australian pricing guide puts document processing and data entry agents at A$12,000 to A$30,000, and multi-system workflow automation at A$20,000 to A$50,000 or more. The guide does not say whether those include GST, so ask any provider which basis a quote uses. These are market ranges, not our prices. We quote the build, and any support you choose, as fixed prices in writing after a scoping call.',
    links: [{ href: SRC_FLOWTIVITY, label: 'Flowtivity, Australian AI agent pricing guide (March 2026)' }, { href: '/blog/ai-cost-australia-2026', label: 'AI cost guide for Australia' }] },
  { category: 'build', question: 'How long does it take to build an order entry agent?',
    answer: 'Flowtivity’s guide lists four to eight weeks for document processing agents and six to twelve weeks for multi-system workflows, and that matches the shape of this work. The time goes on three things: building the part number cross-reference from past orders, agreeing the price and credit rules, and testing on your real POs. We give you a timeline after the first mapping session, once we have seen your orders.',
    links: [{ href: SRC_FLOWTIVITY, label: 'Flowtivity, Australian AI agent pricing guide' }] },
  { category: 'build', question: 'Can we see it working on our own orders before we sign?',
    answer: 'Yes. We show you working software on your own data before you sign. Send us a sample of purchase orders your customers have already emailed, with the sales orders your team keyed from them. A first version reads them, and we put its drafts beside your team’s orders so you can judge the gap yourself. The founder replies within 24 hours to set it up.' },
  { category: 'build', question: 'Who owns the agent and the code?',
    answer: 'You do, from day one: the code, the repository, the written rules and the test orders. The AI and hosting can run in your own accounts at cost, with no markup from us. Defects are fixed inside the build price for a cover period agreed before work starts. Support after that is optional, each change is quoted and approved first, and there is no monthly minimum.' },
];

/* ─── JSON-LD. The Organization is referenced by @id only. ───────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Sales Order Automation AI Agents, Australia',
      serviceType: 'Sales order automation: AI agent design and build that turns emailed customer purchase orders into draft sales orders, with integration and support',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'Custom AI agents for Australian trade suppliers and wholesalers. They read purchase orders emailed as PDFs, spreadsheets or plain email, match customer part numbers, check price, GST basis, stock and credit, and create draft sales orders in Xero, MYOB, Cin7 Core, Unleashed or an ERP for a person to approve. Built, supported and owned by the client.',
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
      datePublished: '2026-10-29',
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
      about: { '@id': `${CANONICAL}#service` },
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
  // No x-default here: the US twin (/services/sales-order-automation-ai-agents)
  // is the global page. It still needs an en-AU alternate pointing here, which
  // is outside this folder.
  alternates: { canonical: CANONICAL, languages: { 'en-AU': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'An AI agent for Australian order desks: reads emailed purchase orders, matches part numbers, checks price, GST basis and stock, and leaves a draft sales order in Xero, MYOB, Cin7 Core or Unleashed for your team to approve.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'FactoryJet: sales order automation for Australian trade suppliers' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* Six jobs the order agent does. */
const JOBS: { t: string; d: string }[] = [
  { t: 'Collects', d: 'Watches the orders inbox and pulls out each PDF, spreadsheet or order typed into an email. Statements, quote requests and newsletters are set aside so they never become orders.' },
  { t: 'Reads', d: 'Pulls the customer, their PO number, ship-to address, delivery date and every line. It checks the lines add up to the PO total and marks any field it is unsure of.' },
  { t: 'Matches', d: 'Translates each customer’s own codes and descriptions into your item codes from a lookup table seeded with orders you have already keyed. When your team fixes a line, the fix goes into the table.' },
  { t: 'Checks', d: 'Compares price with that customer’s price on the same GST basis, then looks at stock on hand, credit limit, minimum order and pack size. Every mismatch is listed on the draft.' },
  { t: 'Drafts', d: 'Creates the sales order as a draft in Xero, MYOB, Cin7 Core, Unleashed or your ERP, with the original PO attached and the PO number in the reference field.' },
  { t: 'Replies', d: 'Prepares the order confirmation with lines you can supply, back orders and a dispatch date, and holds it until a person releases it.' },
];

const JOB_ICONS = [
  'M4 6h16v12H4V6Zm0 0 8 6 8-6',
  'M7 3h7l4 4v14H7V3Zm7 0v4h4M10 12h5M10 16h5',
  'M4 7h6v10H4V7Zm10 0h6v10h-6V7Zm-4 5h4',
  'M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Zm-3 9 2 2 4-4',
  'M4 7h10M4 12h16M4 17h7m6-2 3 3-3 3',
  'M5 12h11m-4-5 5 5-5 5M19 5v14',
] as const;

/* Where the draft lands, per system. Each row restates the maker's own
   documentation as read on 29 Oct 2026, except the ERP row (our experience). */
const SYSTEMS: { sys: string; draft: string; note: string }[] = [
  { sys: 'Xero', draft: 'An accepted quote, or a sales invoice saved as DRAFT', note: 'Xero’s API lists quotes and invoices but no sales order record, so the design decides where an order waits before dispatch.' },
  { sys: 'MYOB (AccountRight, new Essentials)', draft: 'A sale order with status Open, where your edition offers sale orders', note: 'Which layouts and inventory features your file has depends on the edition, checked on the scoping call. Your team converts the order to an invoice when goods ship.' },
  { sys: 'Cin7 Core', draft: 'A sale order saved as DRAFT', note: 'Cin7 Core accepts only DRAFT or AUTHORISED on create, so a person authorises each order.' },
  { sys: 'Unleashed', draft: 'A sales order in the status your team uses for orders on hold', note: 'Unleashed requires a status on every order it creates or updates through the API.' },
  { sys: 'NetSuite, Odoo, SAP Business One, ERPNext, custom ERPs', draft: 'A draft, pending approval order or review list, whichever the system offers', note: 'We have built order flows on each of these.' },
];

/* What goes wrong in Australian order desks, from how trade POs are written. */
const BREAKS: { t: string; d: string }[] = [
  { t: 'Ex GST against inc GST', d: 'A customer’s PO shows GST-inclusive prices and your price list is ex GST. Every line looks about 10% too high. The agent records each customer’s basis and compares like with like.' },
  { t: 'Inners against cartons', d: 'An electrical wholesaler sells cable glands in inners of 10 and cartons of 100. A contractor writes “5” and means five inners. The agent compares the quantity with that contractor’s usual order and the item’s pack sizes, and marks a line that looks ten times too big or too small.' },
  { t: 'Their part number, not yours', d: 'A plumbing merchant orders by a code from its own system that appears nowhere in your item list. A lookup table from their codes to yours, filled from orders your team has already keyed, settles it. Until a code is in the table, that line goes to a person.' },
  { t: 'The same order twice', d: 'A retailer’s head office sends an order through EDI, and the store manager emails the same PO as a PDF an hour later to be sure. Before drafting, the agent looks for that PO number among the customer’s open orders and holds any repeat.' },
  { t: 'A change after approval', d: 'A builder emails two days later to raise a site PO from 24 to 40 and move the delivery window. It opens the existing order, puts the new quantity next to the old one and holds both until someone on the desk decides.' },
];

/* How we build it. */
const BUILD_STEPS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Collect a month of real orders', d: 'You share a sample of emailed POs and the sales orders your team keyed from them. That pair is the test set for everything after it.' },
  { n: '02', t: 'Map the order desk', d: 'We sit with whoever keys orders and trace each step: the inbox, the customer lookup, the price check, the stock check and who approves what.' },
  { n: '03', t: 'Write the rules down', d: 'With your sales lead we agree price tolerances, GST basis per customer, credit holds, minimums and what must always go to a person.' },
  { n: '04', t: 'Build the cross-reference', d: 'From past orders we build the list that turns each customer’s part numbers and units into yours. Corrections add to it after launch.' },
  { n: '05', t: 'Demo on your data', d: 'A first version reads your sample POs and we set its drafts beside your team’s orders. You see it working before you sign the build.' },
  { n: '06', t: 'Connect and test', d: 'We connect the inbox and Xero, MYOB, Cin7 Core, Unleashed or your ERP with the least access the job needs, then replay your past orders.' },
  { n: '07', t: 'Launch in draft mode, then support', d: 'Every order lands as a draft for approval. As accuracy holds for a customer, you choose what to relax. We stay on to fix and adjust.' },
];

const SIBLINGS: { href: string; t: string; d: string }[] = [
  { href: '/au/accounts-payable-automation', t: 'Accounts payable automation', d: 'The other side of the same paperwork: supplier invoices read, checked and drafted as bills in Xero or MYOB.' },
  { href: '/au/ai-agents', t: 'AI agents for Australian businesses', d: 'Agents for other back-office jobs across Xero, MYOB, HubSpot and Microsoft 365.' },
  { href: '/au/ai-development', t: 'AI development and integration', d: 'Larger builds: ERP and inventory integrations with AI inside them.' },
  { href: '/au/ai-consulting', t: 'AI consulting', d: 'Not sure order entry is the right first job? A short assessment ranks the options.' },
  { href: '/au/ecommerce-development', t: 'Ecommerce development', d: 'B2B and wholesale stores where trade customers order online and skip the PDF entirely.' },
  { href: '/services/sales-order-automation-ai-agents', t: 'Sales order automation (US)', d: 'Our US page, which also covers EDI document types and purchase orders out to suppliers.' },
];

const PAGE_KEY = 'sales-order-automation-ai-agents';

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

export default function SalesOrderAutomationAUPage() {
  return (
    <>
      <script id="ld-au-sales-order-automation" type="application/ld+json"
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
              <div className="eyebrow">Sales Order Automation Australia</div>
              <h1>{HERO_H1_LEAD} <span className="hero-emphasis">{HERO_H1_EMPHASIS}</span></h1>
              <p className="lead">
                Your trade customers email purchase orders as PDFs, spreadsheets and two-line emails, and someone on
                your order desk keys each one into Xero, MYOB, Cin7 Core, Unleashed or your ERP. We build an AI agent
                that reads those orders, matches their part numbers to yours, checks price and stock, and leaves a
                draft sales order for your team to approve. We build and support it, and you own the code.
              </p>
              <HeroInlineForm region="au" source="au_sales_order_automation_hero" submitLabel="See a demo on my data" />
              <p className="au-note">Working software on your own data before you sign. Founder replies within 24 hours.</p>
            </div>

            <form
              className="specpanel"
              aria-label="What the order agent does with every emailed purchase order"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="The three stages every emailed purchase order passes through: read from the inbox, matched and checked against your system, then held as a draft sales order for a person to approve"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · WHAT HAPPENS TO EVERY PO</span>
                <span className="sys"><span>XERO</span><span>MYOB</span><span>CIN7</span></span>
              </div>
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what it does">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="soa-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={JOB_ICONS[1]} /></svg></span>
                  <span className="idx">PDF, spreadsheet or email body</span>
                  <span className="title">Reads the purchase order</span>
                  <span className="tag">PO no., lines</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="soa-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={JOB_ICONS[2]} /></svg></span>
                  <span className="idx">part numbers, GST basis, stock, credit</span>
                  <span className="title">Matches and checks</span>
                  <span className="tag">Draft order</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="soa-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={JOB_ICONS[5]} /></svg></span>
                  <span className="idx">by your order desk</span>
                  <span className="title">Approved by a person</span>
                  <span className="tag">Then it posts</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · A PO price below your list is shown to a person, never accepted quietly.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (verified only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '500+', t: 'businesses served by FactoryJet since 2014, founder-led on every project', s: 'About FactoryJet', u: '/about' },
              { v: '0', t: 'sales order objects in Xero’s published Accounting API, so Xero orders wait as quotes or draft invoices', s: 'Xero API spec, searched 29 Oct 2026', u: SRC_XERO_SPEC },
              { v: '2', t: 'statuses a Cin7 Core sale order can be created in through its API: DRAFT and AUTHORISED', s: 'Cin7 Core API', u: SRC_CIN7_CORE },
              { v: '400,000+', t: 'Australian businesses on the Peppol eInvoicing network, where your PO number helps the customer match your invoice', s: 'ATO, about eInvoicing', u: SRC_ATO_EINVOICING },
            ].map((r) => (
              <div className="ledgercell" key={r.t}>
                <div className="k"><a href={r.u} {...(r.u.startsWith('http') ? extLink : {})}>{r.s}</a></div>
                <div className="v">
                  <strong className="ledger-number">{r.v}</strong>
                  {r.t}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap byline">
          <div className="av">BB</div>
          <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
          <div className="upd">Last updated<br />29 October 2026</div>
        </div>

        {/* ═══ ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What does sales order automation look like for an Australian trade supplier?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">Sales order automation reads the purchase orders your customers email, checks
                    them against your price list, stock and credit terms, and creates the sales order in your system as a
                    draft, so nobody retypes it.</span> For an Australian supplier that also means comparing prices on the
                    right GST basis, carrying the customer&rsquo;s ABN and PO number through to the tax invoice, and
                    working with the order record your software actually has. Xero&rsquo;s API lists none, so the design matters.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Four terms we use a lot</div>
                    <p>
                      A <b>purchase order</b> (PO) is the customer&rsquo;s document saying what they want and at what
                      price. A <b>sales order</b> is your record that you have agreed to supply it. A <b>draft</b> is an
                      order saved in your system that nobody has approved yet. An <b>AI agent</b>, on this page, is a
                      program that opens each emailed PO, works out what the customer wants and keys a draft into your
                      system, stopping at any step your rules say a person must check.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    Who this suits: established wholesalers, distributors and manufacturers whose trade customers order
                    by email in volumes that keep one or more people keying all day. Electrical, plumbing and building
                    supplies, food service, industrial parts, packaging and promotional products fit the pattern. If most
                    of your orders already arrive through a portal or EDI, the reading step is done and the gain is smaller.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto" src={null}
                subject="An order desk team member sorting printed customer purchase orders into two piles on a counter in front of shelves of cartons">
                <img src={`${IMG}/order-desk-paper-orders.webp`} width={1200} height={800} loading="lazy" decoding="async" alt="An order desk team member in a navy polo shirt sorts printed purchase orders into two piles on a wooden counter, with an orange binder beside her and shelves of brown cartons behind" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ SIX JOBS + WHAT STAYS WITH PEOPLE ═══ */}
        <section className="section capabilities" id="capabilities">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What the order agent actually does</div>
              <h2>Six jobs between the orders inbox and an approved sales order</h2>
              <p className="lead">
                You decide which jobs the agent does for each customer. We suggest starting with collecting, reading
                and matching for your twenty busiest accounts, then adding checks and draft confirmations once the
                results on those accounts hold up.
              </p>
            </div>
            <div className="capgrid">
              {JOBS.map((j, i) => {
                const n = String(i + 1).padStart(2, '0');
                return (
                  <div key={j.t} className={`cap cap-${i + 1}`}>
                    <div className="caphead"><span className="capid">CAP‑{n}</span><svg {...CAP_ICON}><path d={JOB_ICONS[i]} /></svg></div>
                    <h3>{j.t}</h3>
                    <p>{j.d}</p>
                  </div>
                );
              })}
            </div>
            <div className="agentdir-group chg-group">
              <div className="agentdir-label"><span className="capid">GRP‑01</span><h3>What stays with your order desk</h3></div>
              <ul className="chg-list">
                <li><span><b>Approving each order.</b> The agent drafts; a person approves.</span></li>
                <li><span><b>Price exceptions.</b> Anything outside the tolerance your sales lead set.</span></li>
                <li><span><b>Credit holds.</b> Your accounts team decides whether an order on hold ships.</span></li>
                <li><span><b>Changes after approval.</b> Shown beside the order, decided by a person.</span></li>
                <li><span><b>The customer relationship.</b> Calls, disputes and favours stay with your team.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ SYSTEMS TABLE ═══ */}
        <section className="section integrations" id="systems">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Works inside the software you already run</div>
              <h2>Where the draft sales order lands in Xero, MYOB, Cin7 Core, Unleashed and ERPs</h2>
              <p className="lead">
                Each system gives a waiting order a different home. Before we build, we pick the one that fits how your
                team dispatches and invoices today, so nothing about their day changes except the typing.
              </p>
            </div>
            <div className="tablewrap" tabIndex={0} role="region" aria-label="Scrollable table of where draft orders land in each system">
              <table>
                <thead>
                  <tr>
                    <th>System</th>
                    <th className="fj">Where the agent leaves the order</th>
                    <th>What to know</th>
                  </tr>
                </thead>
                <tbody>
                  {SYSTEMS.map((r) => (
                    <tr key={r.sys}>
                      <th scope="row">{r.sys}</th>
                      <td className="fj">{r.draft}</td>
                      <td>{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Based on the published documentation read on 29 October 2026:{' '}
              <a href={SRC_XERO_SPEC} {...extLink}>Xero Accounting API specification</a>,{' '}
              <a href={SRC_MYOB_API} {...extLink}>MYOB Business API overview</a>,{' '}
              <a href={SRC_MYOB_ORDER} {...extLink}>MYOB Sale Order endpoint</a>,{' '}
              <a href={SRC_CIN7_CORE} {...extLink}>Cin7 Core API</a> and{' '}
              <a href={SRC_UNLEASHED} {...extLink}>Unleashed Sales Orders API</a>. QuickBooks and Acumatica files are
              scoped on the first call, once we have seen which order records your edition offers.
            </p>
          </div>
        </section>

        {/* ═══ WHERE IT BREAKS → definition module ═══ */}
        <section className="definition" id="where-it-breaks">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition" kind="photo" ratio="3:2" className="definition-image" src={null}
              subject="A stockroom worker checking a carton on a shelf against a clipboard before a reorder">
              <img src={`${IMG}/stockroom-reorder-count.webp`} width={1200} height={800} loading="lazy" decoding="async" alt="A man with white hair and a short white beard in a light blue shirt holds a clipboard and touches a white box on a wooden shelf in a stockroom, with an orange step stool behind him" />
            </VisualSlot>
          </div>
          <div className="definition-copy">
            <div className="eyebrow">Where order automation goes wrong</div>
            <h2>Five mistakes we design out before the agent sees a live order</h2>
            <p>
              Reading a PDF is the easy part. The errors that cost money come from how Australian trade customers write
              their orders. Each one needs a rule your team agrees in writing before launch.
            </p>
            <ul className="trigrows">
              {BREAKS.map((b) => (
                <li key={b.t}><span className="m">{b.t}</span><span className="n">{b.d}</span></li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ GST, TAX INVOICES, PEPPOL ═══ */}
        <section className="section facts" id="tax-invoices">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The ATO rules that touch the order</div>
              <h2>GST, tax invoices and Peppol: why the order has to carry the right details</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  <b>The order feeds the tax invoice.</b> The agent never issues invoices, but whatever it records on the
                  sales order flows onto the invoice your team sends after dispatch. The ATO lists seven details a tax
                  invoice must show for taxable sales under $1,000, and from $1,000 it must also show the buyer&rsquo;s
                  identity or ABN. Trade orders often pass $1,000, so the agent records the customer&rsquo;s legal name
                  and ABN on every order.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>Customers can ask for one within 28 days.</b> The ATO says that if a customer asks for a tax invoice
                  you must provide one within 28 days, unless the sale is $82.50 including GST or less. Orders with the
                  right customer details and PO number make that a quick reprint.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <p>
                    <b>Peppol rewards a clean PO number.</b> The ATO describes Peppol as Australia&rsquo;s common standard
                    and network for eInvoicing, with over 400,000 Australian businesses on it, and says buyers on it do
                    not need to enter or scan invoices by hand. Their software matches your invoice to their purchase
                    order, which only works if the PO number you captured is exact.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_ATO_TAX_INVOICES} {...extLink}>ATO, tax invoices (last updated 18 September 2026)</a>;{' '}
                    <a href={SRC_ATO_EINVOICING} {...extLink}>ATO, about eInvoicing (last updated 7 July 2026)</a>.
                    This is general information, not tax advice. Check how it applies to you with your registered tax or BAS agent.
                  </p>
                </div></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">What the agent puts on every draft order</div>
                <ol className="au-numlist">
                  <li><span><b>Customer&rsquo;s legal name and ABN.</b> Matched to the record on file.</span></li>
                  <li><span><b>Their PO number, exactly.</b> In the reference field your invoice prints.</span></li>
                  <li><span><b>GST basis of the PO.</b> Ex or inc, recorded per customer.</span></li>
                  <li><span><b>Delivery address and date.</b> As written, with any site notes.</span></li>
                  <li><span><b>The original PO.</b> Attached, so anyone can check the source.</span></li>
                  <li><span><b>Every flag.</b> What did not match and why, at the top of the draft.</span></li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ HOW WE BUILD IT → process timeline ═══ */}
        <section className="section process" id="how-we-build">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How we build it</div>
                <h2>Seven steps from a month of emailed orders to a live order agent</h2>
                <p className="lead">
                  Each phase is scoped, priced and signed on its own, so you can stop after the demo if the numbers on
                  your own orders do not convince you. Open a step for the detail.
                </p>
              </div>
              <VisualSlot page={PAGE_KEY} slot="process" kind="photo" ratio="3:2" captionClassName="figcap" src={null}
                subject="Two colleagues at a white table laying out a row of white rule cards, one holding an orange card"
                caption="Step three is paper first: price tolerances, GST basis and credit holds agreed with your sales lead before any code.">
                <img src={`${IMG}/team-sorting-order-rules.webp`} width={1200} height={800} loading="lazy" decoding="async" alt="A woman in a mustard sweater and a man in a charcoal shirt, seen from behind, stand at a white table where she lays out a row of white cards and he holds one orange card" />
              </VisualSlot>
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
            headline={'Send us ten purchase orders your team keyed last week'}
            sub={'Tell us which system you run (Xero, MYOB, Cin7 Core, Unleashed or an ERP) and roughly how many emailed orders arrive a day. We will read your sample with a first version and show you the drafts beside your team’s orders before you sign anything.'}
            label={'See a demo on my data'}
          />
        </div>

        {/* ═══ TERMS + BRIEF / RFP ═══ */}
        <section className="section au-top" id="terms">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">How we work</div>
              <h2>Terms for an order automation project, and how to send us a brief</h2>
            </div>
            <div className="au-split">
              <div>
                <h3>Terms</h3>
                <ul className="trigrows">
                  <li><span className="m">Demo before you sign</span><span className="n">working software on your own POs</span><span className="t">First</span></li>
                  <li><span className="m">Fixed price per phase</span><span className="n">each phase scoped and signed on its own</span><span className="t">Written</span></li>
                  <li><span className="m">You own the code and repository</span><span className="n">from day one, with the rules and test orders</span><span className="t">Yours</span></li>
                  <li><span className="m">AI and hosting in your accounts</span><span className="n">at cost, no markup from us</span><span className="t">Optional</span></li>
                  <li><span className="m">Defects fixed inside the build price</span><span className="n">for a cover period agreed before work starts</span><span className="t">Included</span></li>
                  <li><span className="m">Support after launch</span><span className="n">each change quoted and approved, no monthly minimum</span><span className="t">Optional</span></li>
                </ul>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Have a brief or an RFP?</div>
                <p>
                  Send it as it is. The most useful briefs name your accounting or inventory system, any ERP, how orders
                  arrive (email, portal, EDI), a rough daily order count and the three customers whose orders cause the
                  most rework. A PDF or Word document is fine. The founder reads it and replies within 24 hours with
                  questions or a scoping call.
                </p>
                <ModalCTAButton label="Send my brief" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ COST (market ranges only) + DEMAND ═══ */}
        <section className="section au-top" id="cost">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Scope, not packages</div>
              <h2>How much does sales order automation cost in Australia?</h2>
              <p className="lead">
                <a href={SRC_FLOWTIVITY} {...extLink}>Flowtivity&rsquo;s March 2026 Australian pricing guide</a> puts
                document processing and data entry agents at A$12,000 to A$30,000, and multi-system workflow automation
                at A$20,000 to A$50,000 or more. The guide does not say whether those figures include GST. They are
                market ranges, not our prices: we quote the build, and any support you choose, as fixed prices in
                writing after a scoping call.
              </p>
            </div>
            <div className="au-split">
              <div>
                <h3>What moves the scope</h3>
                <ol className="au-numlist">
                  <li><span><b>How many customers send their own layouts.</b> Ten busy accounts is a different job from three hundred occasional ones.</span></li>
                  <li><span><b>Part number cross-referencing.</b> How many customers order by their own codes, and how clean your past orders are.</span></li>
                  <li><span><b>Checks against your system.</b> Price, GST basis, stock, credit and minimums each add rules and tests.</span></li>
                  <li><span><b>Where the order lands.</b> Xero needs more design than a system with a real sales order record.</span></li>
                  <li><span><b>Confirmations and EDI.</b> Draft replies to customers, and any EDI accounts beside the email ones.</span></li>
                </ol>
                <ModalCTAButton label="See a demo on my data" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="demand">
                <div className="demand-head"><span>Australia · Monthly Search Demand</span><b>DataForSEO</b></div>
                <ul>
                  {[
                    { kw: 'xero quotes', v: '140', w: '100%', kd: 'Xero quote feature' },
                    { kw: 'xero purchase orders', v: '110', w: '79%', kd: 'Xero purchase order feature' },
                    { kw: 'edi australia', v: '20', w: '14%', kd: 'EDI in Australia' },
                  ].map((r) => (
                    <li key={r.kw} className="demand-row">
                      <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<small> searches</small></span></div>
                      <div className="demand-bar"><i style={{ width: r.w }} /></div>
                      <div className="demand-kd">{r.kd}</div>
                    </li>
                  ))}
                </ul>
                <p className="demand-src">Source: DataForSEO, Google Ads volume, Australia, pulled 29 October 2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ EXPERIENCE (global, framed as work we have done) ═══ */}
        <section className="section facts au-top" id="experience">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Work we have done</div>
              <h2>Order work inside ERPs, EDI and trade catalogues</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Our ERP order work covers Odoo, NetSuite, SAP Business One, ERPNext and custom systems, on both the
                  buying and the selling side, plus RFQ automation and day-to-day bookkeeping. EDI links and punchout
                  catalogues sit in the same toolkit, which suits a supplier whose big accounts trade by EDI while the
                  rest still email PDFs.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  FactoryJet has served more than 500 businesses since 2014. Australian order desk projects run on video
                  workshops and shared order samples, with calls in Australian business hours for Sydney, Melbourne,
                  Brisbane, Perth, Adelaide and regional suppliers.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  Put these to any order automation provider, us included. Will you score a trial per customer on our
                  own past POs? How do you tell an ex GST PO from an inc GST one? What happens when a customer orders in
                  inners and we sell in cartons? How do you catch a PO that arrives twice? Which AI providers see our
                  orders, and in which country? Get the answers in writing.
                </p></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-2" kind="photo" ratio="3:2" className="factphoto" src={null}
                subject="A warehouse picker pushing a cart with an orange tote along an aisle and reaching into a grey bin">
                <img src={`${IMG}/picker-cart-warehouse-aisle.webp`} width={1200} height={800} loading="lazy" decoding="async" alt="A man in a grey T-shirt pushes a steel cart holding an orange plastic tote and a clipboard along a warehouse aisle and reaches into a grey bin on the shelving" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ SIBLING SERVICES → agentdir ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Related work</div>
              <h2>Other back-office jobs we build agents for in Australia</h2>
              <p>
                Supplier invoices land on the same desk as customer orders. These pages cover that job and others.
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
          heading="Sales order automation questions Australian suppliers ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ FINAL CTA (light) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>See your own purchase orders turned into draft sales orders</h2>
              <p>
                Send your name and work email. The founder replies within 24 hours to arrange a demo on a sample of your
                emailed orders, in the system you already run. No spam, no obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="See a demo on my data" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
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
