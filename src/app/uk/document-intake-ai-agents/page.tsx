import type { Metadata } from 'next';
import styles from './visual-qa.module.css';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../ai-agents/ai-agents.css';

/* /uk/document-intake-ai-agents, built 2026-10-29.

   Why this page exists: the US twin (/services/document-intake-ai-agents)
   had no UK version. UK monthly searches (DataForSEO, location 2826, pulled
   2026-10-29): "intelligent document processing" 140, "document automation"
   90, "ai document processing" 30, "ai invoice processing" 30. The brand
   names UK finance teams already rent are far bigger: Dext 49,500, Hubdoc
   22,200, AutoEntry 9,900. So the page names those products, gives their
   list prices, and says when renting one is enough.

   Scope versus /uk/accounts-payable-automation: that page owns supplier
   invoice approval and payment. This page owns the reading step for every
   inbound document type (delivery notes, customer purchase orders, credit
   account applications, returns forms, supplier statements) and links to
   the AP page for invoice approval.

   Truth rules for anyone editing this file.
   1. Every third-party fact (list prices, plan limits, ERP features, HMRC
      rules, ICO guidance, the EU AI Act) was read on the owner's own page on
      2026-10-29 and links to it through the SRC map below.
   2. No FactoryJet price, and no figure for running or maintaining an agent.
      Money figures are list prices of named rented products and two GBP
      market ranges for a BUILD from named UK sources (Fulminous, LeverX).
   3. Client proof: GPSUK (built on Commerceflo) and Sow Easy (WooCommerce
      plus Odoo, Odoo link still in build) only, as recorded in
      src/data/case-studies/index.ts. No metric is claimed for either.
   4. Nothing here says where the FactoryJet team is.
   5. Structure mirrors /uk/shopify-xero-integration (imports, components,
      CSS module, schema). The copy is written fresh for this page.
   6. The FAQ schema is generated from FAQ_ITEMS, the same array the visible
      FAQ renders. Never add a second list of questions. */

const CANONICAL = 'https://factoryjet.com/uk/document-intake-ai-agents';
const UPDATED = '2026-10-29';
const READ_ON = '29 October 2026';
const TITLE = 'Intelligent Document Processing UK: Custom Agents | FactoryJet';
const H1 = 'Document Intake AI Agents for UK Businesses: Invoices, Delivery Notes and Forms Read Into Xero, Sage or Your ERP';
const DESCRIPTION =
  'Document intake agents for UK firms: supplier invoices, delivery notes, purchase orders and forms read, checked against your records and filed into Xero, Sage, NetSuite or Odoo.';
const IMG = '/images/us/document-intake-ai-agents';

/* Design values, copied from ../ai-agents/ai-agents.css so inline styles stay
   on-system without CSS custom property references in this file. */
const T = {
  ink: '#0F0F12',
  n200: '#E5E5E0',
  n400: '#6E6E68',
  orange: '#FF5C00',
  green: '#047857',
  small: '#B23E13',
  fm: "'Geist Mono',monospace",
  fd: "'Plus Jakarta Sans',sans-serif",
};

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Document Intake AI Agents', url: CANONICAL },
];

/* Sources. One map, used by every inline source note AND by the visible
   Sources list near the foot of the page. Each page was opened on
   2026-10-29 and the supporting words read before the claim was written. */
const SRC = {
  govRecords: { label: 'GOV.UK: Keeping VAT records', url: 'https://www.gov.uk/charge-reclaim-record-vat/keeping-vat-records' },
  govMtd: { label: 'GOV.UK: VAT Notice 700/22, Making Tax Digital for VAT', url: 'https://www.gov.uk/government/publications/vat-notice-70022-making-tax-digital-for-vat/vat-notice-70022-making-tax-digital-for-vat' },
  govEinvoice: { label: 'GOV.UK: Promoting electronic invoicing, consultation response', url: 'https://www.gov.uk/government/consultations/promoting-electronic-invoicing-across-uk-businesses-and-the-public-sector/outcome/promoting-electronic-invoicing-across-uk-businesses-and-the-public-sector-consultation-response' },
  icoDuaa: { label: 'ICO: The Data (Use and Access) Act 2025, what it means for organisations', url: 'https://ico.org.uk/about-the-ico/what-we-do/legislation-we-cover/data-use-and-access-act-2025/the-data-use-and-access-act-2025-what-does-it-mean-for-organisations/' },
  euAiAct: { label: 'European Commission AI Act Service Desk: Article 2, Scope', url: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-2' },
  xeroPricing: { label: 'Xero UK: pricing plans (Hubdoc note)', url: 'https://www.xero.com/uk/pricing-plans/' },
  dextPricing: { label: 'Dext UK: business pricing', url: 'https://dext.com/uk/business/pricing' },
  autoentryPricing: { label: 'AutoEntry: pricing', url: 'https://www.autoentry.com/pricing' },
  odooDigitise: { label: 'Odoo 18 documentation: invoice digitization', url: 'https://www.odoo.com/documentation/18.0/applications/finance/accounting/vendor_bills/invoice_digitization.html' },
  bcCopilot: { label: 'Microsoft Learn: Business Central, map e-documents to purchase order lines with Copilot', url: 'https://learn.microsoft.com/en-us/dynamics365/business-central/map-edocuments-with-copilot' },
  azureLimits: { label: 'Microsoft Learn: Document Intelligence service quotas and limits', url: 'https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/service-limits' },
  fulminous: { label: 'Fulminous: AI agent development cost UK', url: 'https://fulminous.co.uk/ai-agent-development-cost-uk' },
  leverx: { label: 'LeverX UK: AI agent development cost', url: 'https://leverx.com/en-gb/blog/ai-agent-development-cost-uk' },
} as const;

type SrcKey = keyof typeof SRC;
const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

/* FAQ source of truth (drives the visible FAQ and the FAQ schema).
   Question wording draws on the Google question boxes returned for
   "intelligent document processing", "hubdoc xero" and "ocr invoice
   processing" in the United Kingdom on 2026-10-29 (DataForSEO, location
   2826), the related searches for "dext vs autoentry", and the questions
   UK buyers put in written briefs. */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'What intake is' },
  { key: 'rent', label: 'Rent a tool or build' },
  { key: 'rules', label: 'HMRC, UK GDPR and the EU' },
  { key: 'reading', label: 'Reading the paper' },
  { key: 'working', label: 'Working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // What intake is
  {
    category: 'basics',
    question: 'Is intelligent document processing AI?',
    answer:
      'Yes, in the part that matters. Older capture tools used fixed templates: draw a box round the invoice total on one supplier’s layout and the tool reads that box. Intelligent document processing uses an AI model that finds the total on a layout it has never seen. The AI only reads. The checks against your ledger and the review screen for unsure fields are ordinary software, and they decide whether the result can be trusted.',
  },
  {
    category: 'basics',
    question: 'What’s the difference between OCR and IDP?',
    answer:
      'OCR (optical character recognition) converts a scanned or photographed page into plain text. On its own it cannot tell the VAT figure from the carriage charge. IDP, intelligent document processing, adds the next steps: it names the document, pulls out the fields you care about, checks them and passes them to the system that keeps the record. OCR is one step inside IDP.',
  },
  {
    category: 'basics',
    question: 'What is a document intake agent?',
    answer:
      'It is the software that picks up every document arriving in a shared inbox or scanner, works out what each one is, reads it, checks it against the record it belongs to and files it. A delivery note gets matched to its purchase order. A customer PO becomes a draft sales order. A credit account form becomes a customer record waiting for approval. A person reviews anything the agent is unsure of.',
  },
  {
    category: 'basics',
    question: 'Which AI is best for document processing?',
    answer:
      'The one that reads your own documents best, so test it on a sample. Cloud reading services set hard limits worth knowing first. Microsoft’s Document Intelligence, on its Standard tier, takes PDFs and JPEG, PNG, BMP, TIFF and HEIF images up to 500 MB and analyses up to 2,000 pages in one request. We pick the model per document type after the sample test, and you can swap it later.',
  },
  // Rent a tool or build
  {
    category: 'rent',
    question: 'Is Hubdoc free if you have Xero?',
    answer:
      'Yes, while you subscribe to Xero. A note on Xero’s UK pricing page includes Hubdoc in its plans, on condition the Xero subscription stays connected. The same page lists smart document capture on its paid plans from Ignite upwards, and automated bill entry from Grow upwards. For receipts and supplier bills going into one Xero organisation, that is often enough, and we will say so on the call.',
  },
  {
    category: 'rent',
    question: 'Do Dext and AutoEntry suit delivery notes, POs and forms?',
    answer:
      'Both price by the bookkeeping document: Dext at £24.17 a month billed annually (£290 a year), excluding VAT, for 250 documents a month and 5 users, and AutoEntry by credits from £15.45 a month for 50. Our UK accounts payable automation page compares them on supplier invoices. A delivery note, customer PO or credit form is a different job, because it has to be checked against an order, a price list or a credit limit that an accounts package does not hold.',
  },
  {
    category: 'rent',
    question: 'When is Dext, AutoEntry or Hubdoc enough, and when do we need a custom agent?',
    answer:
      'Rent when the documents are receipts, supplier bills and statements, and the only destination is Xero, Sage or QuickBooks. Build when the document has to be checked against something an accounts package does not hold: a purchase order and goods-in record in your ERP, a customer’s price list, a courier consignment, a credit limit. Build too when the result lands in two systems, say Sage 200 for the ledger and Linnworks for the return.',
  },
  {
    category: 'rent',
    question: 'Our ERP already reads invoices. Why would we build anything?',
    answer:
      'Check first, because it may cover you. Odoo’s invoice digitisation reads vendor bills with OCR and AI, one prepaid credit per document, and its email alias accepts only PDF and XML files. Business Central’s Payables Agent matches incoming purchase invoices to open purchase orders, and Microsoft says its older Copilot matching was validated in English only. Both centre on supplier invoices. Delivery notes, customer POs and application forms are where a custom agent usually starts.',
  },
  {
    category: 'rent',
    question: 'What does a document intake build cost in the UK?',
    answer:
      'Two published UK figures. For a back-office agent that handles data entry and invoice processing, Fulminous (page updated 23 September 2026) gives £30,000 to £90,000 before VAT. LeverX’s guide of 4 October 2026 gives £10,000 to £30,000 for a single-workflow agent, naming document triage and data extraction among its examples, and does not say whether VAT is included. These are other firms’ ranges. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  // HMRC, UK GDPR and the EU
  {
    category: 'rules',
    question: 'Can we throw away paper invoices once the agent has scanned them?',
    answer:
      'Usually, yes. In VAT Notice 700/22, HMRC describes software that scans incoming invoices and writes the details to the ledger; there the paper can go, as long as the saved image carries every VAT detail, unless you need the paper for another purpose. If a clerk keys the details in by hand instead, HMRC expects the original kept. So the agent stores the full image beside the record. Confirm your own policy with your accountant.',
  },
  {
    category: 'rules',
    question: 'Can the agent post a delivery note so we can reclaim the VAT?',
    answer:
      'No, and it should stop anyone trying. A delivery note proves goods arrived; it is not the document VAT is reclaimed on, and GOV.UK lists it alongside pro-forma invoices and statements as paperwork that will not support a claim. So the agent treats a delivery note as proof of what arrived, pairs it with the order and the goods-in count, then holds until the real VAT invoice turns up. A delivery note posted as a bill is one of the first exceptions it raises.',
  },
  {
    category: 'rules',
    question: 'Does a document intake agent meet Making Tax Digital rules?',
    answer:
      'MTD applies to your whole set of records, so no single tool settles it. What the agent can do is keep its part clean. HMRC’s notice says copy and paste is not a digital link, and accepts API transfer and CSV import. The agent posts by API. For each purchase, the notice asks for the time of supply, the value and the input tax claimed, and the agent records all three. Your accountant checks the full chain.',
  },
  {
    category: 'rules',
    question: 'How long must we keep the documents the agent reads?',
    answer:
      'GOV.UK says VAT records must be kept for at least 6 years, or 10 years for businesses using the VAT One Stop Shop or MOSS schemes. That includes every invoice you receive, as the original or an electronic copy. The agent files the image where your team already keeps records, in your own storage, with a link from the ledger entry so an inspector can trace one to the other.',
  },
  {
    category: 'rules',
    question: 'Will mandatory e-invoicing in 2029 make document reading pointless?',
    answer:
      'Not for a while, and not for every document. Under GOV.UK’s consultation response, e-invoicing becomes compulsory for every VAT invoice from 2029, which in practice means business to business and business to government sales. For that consultation it says a PDF does not count as an e-invoice. Delivery notes, customer POs, statements and forms sit outside that change, and suppliers will switch at different speeds. We build so that structured e-invoices skip the reading step.',
  },
  {
    category: 'rules',
    question: 'How do UK GDPR and the Data (Use and Access) Act 2025 affect an intake agent?',
    answer:
      'The ICO says the Act opens up the full range of lawful bases for significant automated decisions, provided you keep appropriate safeguards, and that this does not extend to special category data. Its June 2026 update says all the Act’s data protection provisions are now in force. Our design keeps a person on any decision about an individual, such as refusing a credit account. Your data protection lead decides the lawful basis.',
  },
  {
    category: 'rules',
    question: 'We sell into the EU. Does the EU AI Act apply to us?',
    answer:
      'It can. Article 2 covers providers placing AI systems on the EU market wherever they are based, and providers and deployers in a third country where the output of the AI system is used in the Union. A UK firm whose agent only reads its own supplier paperwork for its own UK ledger is a different case from one whose output reaches EU customers. Ask your legal adviser which applies to you.',
  },
  // Reading the paper
  {
    category: 'reading',
    question: 'Can it read handwritten delivery notes and phone photos from drivers?',
    answer:
      'Often, and the useful answer comes from your own paper. A printed Royal Mail, DPD or Evri proof of delivery reads well. A signed note with quantities corrected in biro, photographed in a van, is harder. We feed a batch of your old notes to the agent, score its reading against your goods-in team’s entries, and set it to flag any quantity it cannot read with confidence rather than guess.',
  },
  {
    category: 'reading',
    question: 'Can it split one scanned PDF that holds a mix of documents?',
    answer:
      'Yes. Scanners in a goods-in office often batch a day’s paper into one file: three delivery notes, an invoice, a returns form. The agent names each page, works out where one document ends and the next begins, and handles each one on its own path. Long or mixed packets go to the slower, more careful route, and any page it cannot place goes to a person.',
  },
  {
    category: 'reading',
    question: 'Can it turn customer purchase orders into sales orders in Sage 200, Business Central or NetSuite?',
    answer:
      'Yes, as drafts. The agent reads the buyer’s PO, finds the customer account, maps the buyer’s part numbers to your item codes, checks prices against that account’s price list and creates a draft sales order. Anything that does not match, such as an old price, a missing code or a delivery address you have never used, is shown to your sales office before the order is confirmed.',
  },
  {
    category: 'reading',
    question: 'What happens to a document the agent is unsure about?',
    answer:
      'It waits for a person. Each field gets a confidence score, and you set the bar per field: a VAT number or a bank detail needs a far higher bar than a delivery reference. Unsure fields appear in a review queue with the spot on the page highlighted, so the reviewer checks one box, not the whole document. At first, every document waits for review until your team is happy with the results.',
  },
  // Working with us
  {
    category: 'working',
    question: 'Can we see it working on our own documents before we sign?',
    answer:
      'Yes. Working software on your own data comes before a contract. You choose a sample your team has already processed, from the last month or quarter, with personal details removed if you prefer. An early build reads them, and you compare its output with what your team entered, field by field. If it does not read your paper well, you have lost nothing but an hour.',
  },
  {
    category: 'working',
    question: 'Who owns the agent, and who looks after it after launch?',
    answer:
      'You own the code and the repository from day one. The AI and hosting can run in your own accounts at cost, with no markup. Defects are fixed inside the build price for a cover period agreed before work starts. Support is optional: each change is quoted and approved, with no monthly minimum. If you want, FactoryJet can keep managing the servers, the AI models, the API connections and the maintenance.',
  },
  {
    category: 'working',
    question: 'What should we put in a brief or RFP for document intake?',
    answer:
      'Five things make a quote accurate. The document types and rough monthly volume of each. Ten to twenty real examples per type, redacted if needed, sent by email after the first call. The systems and versions involved, such as Sage 200 on premises or Business Central online. Who approves what today. And any date that matters, like a year end or an ERP go-live. Attach the written brief in the second step of the form and Bhavesh replies within one business day.',
  },
  {
    category: 'working',
    question: 'Have you done systems work for UK companies?',
    answer:
      'Yes. GPSUK, a UK promotional products supplier, runs its trade storefront on Commerceflo, built by FactoryJet, where business buyers see their own account prices and move from quote to order without retyping. Sow Easy, a UK wholesale distributor, is having its WooCommerce trade store built with Odoo as the source of stock, prices and SKUs; the Odoo link is being tested on staging.',
  },
];

/* Which document lands where. The checks column is the default map we
   propose on day one; each client changes it. No third-party fact here. */
const DOCS: { doc: string; from: string; check: string; lands: string }[] = [
  {
    doc: 'Supplier invoice',
    from: 'PDF attachment to the accounts inbox',
    check: 'Supplier, VAT number, purchase order and goods received',
    lands: 'A draft bill in Xero, Sage 50, Sage Intacct, QuickBooks UK or NetSuite, with the image attached',
  },
  {
    doc: 'Delivery note or proof of delivery',
    from: 'Driver photo, goods-in scan, or a Royal Mail, DPD or Evri POD',
    check: 'Purchase order lines, quantities and any shortage noted in pen',
    lands: 'A goods-received record in your ERP or Mintsoft, never a bill',
  },
  {
    doc: 'Customer purchase order',
    from: 'Email from a trade buyer, as PDF, Excel or typed text',
    check: 'Customer account, item codes, account prices and delivery address',
    lands: 'A draft sales order in Sage 200, Business Central, NetSuite, Odoo or Brightpearl',
  },
  {
    doc: 'Credit account application',
    from: 'A signed form, often scanned',
    check: 'Company name and number checked against the Companies House register, references, requested limit against your credit policy',
    lands: 'A customer record held for a person to approve the limit',
  },
  {
    doc: 'Returns form',
    from: 'Customer email or a form in the parcel',
    check: 'Original order, item, reason code and return window',
    lands: 'A return in Linnworks, Mintsoft or your ERP, with the refund held for approval',
  },
  {
    doc: 'Supplier statement',
    from: 'Monthly PDF from each supplier',
    check: 'Every line against the bills and payments already in your ledger',
    lands: 'A list of missing or mismatched invoices for your accounts team',
  },
  {
    doc: 'Marketplace and payment reports',
    from: 'Amazon.co.uk, eBay UK, OnBuy, ManoMano, B&Q, Stripe, GoCardless, Klarna, Clearpay',
    check: 'Orders, fees and refunds against the sales already recorded',
    lands: 'Summary entries for your accountant, split the way they ask',
  },
];

/* Rented products, with list prices read on 2026-10-29 (cards and ItemList). */
const TOOLS: { name: string; maker: string; price: string; reads: string; suits: string; sources: SrcKey[] }[] = [
  {
    name: 'Hubdoc',
    maker: 'Xero',
    price: 'Included in Xero’s UK plans, on condition you stay connected to a Xero subscription',
    reads: 'Xero’s pricing page lists smart document capture on its paid plans from Ignite upwards, and automated bill entry from Grow upwards.',
    suits: 'Receipts and supplier bills going into one Xero organisation.',
    sources: ['xeroPricing'],
  },
  {
    name: 'Dext',
    maker: 'Dext',
    price: '£24.17 a month billed annually (£290 a year), excluding VAT, for 250 documents a month and 5 users',
    reads: 'Document capture and data extraction, with line-item extraction, bank statements and supplier statements sold as add-ons.',
    suits: 'Bookkeeping documents for an accountant or an in-house finance team.',
    sources: ['dextPricing'],
  },
  {
    name: 'AutoEntry',
    maker: 'AutoEntry',
    price: '£15.45 a month for 50 credits up to £518.25 for 2,500 credits, excluding VAT',
    reads: 'Purchase and sales invoices (1 credit, 2 with line items), expenses, supplier statements (2 credits) and bank statements (3 credits a page).',
    suits: 'Firms whose volume swings, who want to pay by the document.',
    sources: ['autoentryPricing'],
  },
  {
    name: 'Odoo invoice digitisation',
    maker: 'Odoo',
    price: 'Prepaid in-app credits, one credit per document; XML files use none',
    reads: 'Mainly vendor bills and refunds, read with OCR and AI. Customer invoices can be set up too. The email alias takes PDF and XML only.',
    suits: 'Odoo users whose paperwork is mostly supplier bills.',
    sources: ['odooDigitise'],
  },
  {
    name: 'Business Central Payables Agent',
    maker: 'Microsoft',
    price: 'Inside Business Central; check your licence with your Microsoft partner',
    reads: 'Matches incoming purchase invoices with open purchase orders. It replaces the older Copilot line matching, which Microsoft says was validated in English only.',
    suits: 'Business Central users matching supplier invoices to POs.',
    sources: ['bcCopilot'],
  },
];

/* Comparison rows. Product cells restate the makers' own pages. */
const COMPARE: { feat: string; hubdoc: string; dext: string; autoentry: string; erp: string; fj: string }[] = [
  {
    feat: 'List price',
    hubdoc: 'Included with Xero',
    dext: '£24.17 a month billed annually (£290 a year) ex VAT, 250 documents a month, 5 users',
    autoentry: '£15.45 to £518.25 a month ex VAT, by credits',
    erp: 'Odoo: prepaid credits. Business Central: inside the product',
    fj: 'Fixed price, quoted in writing after a scoping call',
  },
  {
    feat: 'Documents described',
    hubdoc: 'Receipts and bills',
    dext: 'Receipts, invoices, statements',
    autoentry: 'Invoices, expenses, statements',
    erp: 'Mainly supplier invoices',
    fj: 'Any type in your sample, including delivery notes, POs and forms',
  },
  {
    feat: 'Checked against',
    hubdoc: 'Your Xero records',
    dext: 'Your accounts package',
    autoentry: 'Your accounts package',
    erp: 'Open purchase orders in the ERP',
    fj: 'Whatever holds the truth: ERP, WMS, price lists, courier data',
  },
  {
    feat: 'Where results go',
    hubdoc: 'Xero',
    dext: 'Accounts package',
    autoentry: 'Accounts package',
    erp: 'The same ERP',
    fj: 'One or more systems, in the order your process needs',
  },
  {
    feat: 'Who supports it',
    hubdoc: 'Xero',
    dext: 'Dext',
    autoentry: 'AutoEntry',
    erp: 'Odoo or your Microsoft partner',
    fj: 'FactoryJet. You own the code',
  },
];

/* Where intake breaks on UK paperwork. Our own build notes, no third-party fact. */
const BREAKS: { t: string; d: string }[] = [
  { t: 'Quantities corrected in biro', d: 'A driver signs for 18 cartons, not 20, and writes it over the printed number. The agent reads the printed figure, sees ink over it and sends that line to goods-in instead of trusting either value.' },
  { t: 'A delivery note filed as a bill', d: 'It looks like an invoice and carries prices. It is not a VAT invoice, so the agent holds it as a receipt of goods and waits for the real invoice.' },
  { t: 'A euro invoice from an EU supplier', d: 'No UK VAT on the face, a different number format (1.234,56) and sometimes a reverse charge note. The agent reads the currency and sends the VAT treatment to your accountant’s rule, not its own guess.' },
  { t: 'Buyer part numbers', d: 'A trade customer orders “BLU-500” and you stock it as 10045. The agent learns the mapping per customer and asks once for any code it has not seen.' },
  { t: 'One PDF, a day of paper', d: 'Goods-in scans everything at five o’clock into a single file. The agent splits it by page and document before it reads a single field.' },
  { t: 'A supplier changes bank details', d: 'A new sort code on an otherwise normal invoice is never filed automatically. It goes to a named person, every time, whatever the confidence score.' },
];

/* JSON-LD. The Organization is referenced by @id only and is defined once,
   sitewide. Never redefine it here. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Document Intake AI Agents UK',
      serviceType: 'Intelligent document processing: design, build and support of document intake agents that read supplier invoices, delivery notes, customer purchase orders, statements and forms into UK accounting and ERP systems',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'FactoryJet designs, builds, tests and supports document intake agents for established UK companies. The agent collects inbound documents, identifies each one, extracts the agreed fields, compares them with the client’s own records in Xero, Sage, QuickBooks, NetSuite, Business Central, Odoo, Brightpearl, Linnworks or Mintsoft, routes low-confidence fields to a reviewer and writes the record with the original image attached. The client owns what is built.',
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
      inLanguage: 'en-GB',
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
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#tools`,
      name: 'Document capture tools UK finance teams already rent',
      itemListElement: TOOLS.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
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
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'How UK companies get supplier invoices, delivery notes, customer POs and forms read into Xero, Sage, NetSuite or Odoo: what Dext, AutoEntry and Hubdoc cover, what HMRC asks, and when a custom agent is the better job.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: `${IMG}/order-desk-paper-orders.webp`, width: 1200, height: 800, alt: 'A man in a navy polo shirt lays a sheet of paper on a stack at a wooden counter, with shelves of plain cardboard cartons behind him' }],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 12, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;
const inlineLink = { textDecoration: 'underline', color: T.ink, fontWeight: 600 } as const;

/* Small source line. Every id comes from the SRC map above. */
function Sources({ ids, on = READ_ON }: { ids: SrcKey[]; on?: string }) {
  return (
    <p style={srcNote}>
      Sources, read on {on}:{' '}
      {ids.map((id, i) => (
        <span key={id}>
          {i > 0 ? '; ' : ''}
          <a href={SRC[id].url} target="_blank" rel="noopener noreferrer" style={srcLink}>{SRC[id].label}</a>
        </span>
      ))}
      .
    </p>
  );
}

export default function DocumentIntakeAiAgentsUKPage() {
  return (
    <>
      <script id="ld-uk-document-intake-ai-agents" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-aiagents">
      <main className={styles.page}>

        <Breadcrumbs items={crumbs} />

        {/* 1. HERO */}
        <section className={`sec-lg dot-grid ${styles.hero}`} style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div className={styles.heroCopy}>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />Document Intake AI Agents UK</span>
                  <span className="chip">Invoices, Delivery Notes, POs, Forms</span>
                  <span className="chip">Xero, Sage, NetSuite, Odoo</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  Your accounts inbox, your goods-in scanner and your sales office all retype the same paper into
                  Xero, Sage 200, NetSuite, Business Central or Odoo. FactoryJet builds an agent that reads each
                  document, checks it against your own records and files it, with a person reviewing anything it is
                  unsure of. You see it on your own documents before you sign, and you own what we build.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />{READ_ON}</div>
                </div>

                <div className={styles.heroForm} style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_document_intake_ai_agents_hero" service="Document Intake AI Agents" submitLabel="See a demo on my data" />
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 10 }}>
                    Working software on your own data before you sign. Bhavesh replies within one business day.
                  </p>
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src={`${IMG}/order-desk-paper-orders.webp`} width={1200} height={800} fetchPriority="high" decoding="async" alt="A man with short dark hair and a beard, in a navy polo shirt, lays a sheet of paper on a stack at a wooden counter, with an orange stapler on the counter and shelves of plain cardboard cartons behind him" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What happens to each document</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Named and split</div><div className="scorecard-note">invoice, delivery note, PO, form</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Sorted</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Checked against your records</div><div className="scorecard-note">PO, goods-in, price list, account</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Matched</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Unsure fields to a person</div><div className="scorecard-note">bar set per field by you</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Reviewed</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Record written, image kept</div><div className="scorecard-note">for the 6 years GOV.UK asks</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Filed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ANSWER-FIRST DEFINITION */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What does a document intake agent do for a UK business?</span>
              <p>
                It reads inbound paperwork the way a clerk would. Supplier invoices, delivery notes, customer
                purchase orders, credit account forms and returns are picked up from an inbox or scanner, named,
                read, checked against your ERP or accounts package and filed. HMRC accepts a scanned invoice in
                place of the paper original when the stored image keeps every detail needed for VAT, unless you
                need the paper for another purpose, so the agent keeps that image beside the record.
              </p>
            </div>
            <Sources ids={['govMtd']} />
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Three terms we use a lot</span>
              <p>
                A <b>system of record</b> is the software that holds the official version of a number, such as
                Sage for the ledger or Mintsoft for stock. A <b>confidence score</b> is the model’s own estimate of
                how sure it is about one field. A <b>review queue</b> is the screen where a person checks only the
                fields that fell below the bar you set.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              Reading the page is the part every vendor demos. The part that decides whether you can trust the
              result is the check: does this delivery note match the order line, is this buyer’s price the one on
              their account, has this supplier’s bank detail changed since last month? Those checks live in your
              systems, which is why we build the agent around them and not around a template.
            </p>
          </div>
        </section>

        {/* 3. FACTS BAND (each one sourced) */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '500+', t: 'businesses served by FactoryJet since it was founded in 2014', s: 'About FactoryJet', u: '/about' },
                { v: '6 years', t: 'is the minimum GOV.UK sets for keeping VAT records, including every invoice you receive', s: 'GOV.UK, Keeping VAT records', u: SRC.govRecords.url },
                { v: '2029', t: 'is when GOV.UK says mandatory e-invoicing starts for all VAT invoices', s: 'GOV.UK, e-invoicing response', u: SRC.govEinvoice.url },
                { v: '2,000', t: 'pages is the most Microsoft’s Document Intelligence analyses in one request on its Standard tier', s: 'Microsoft Learn, service limits', u: SRC.azureLimits.url },
              ].map((r) => (
                <li key={r.t}>
                  <div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.orange }}>{r.v}</div>
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p>
                  <a href={r.u} {...(r.u.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className={styles.citation} style={{ fontFamily: T.fm, fontSize: 12, color: T.n400, textDecoration: 'underline' }}>{r.s}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. WHICH DOCUMENT LANDS WHERE */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Seven kinds of paper</span>
              <h2>Which UK documents an intake agent reads, what it checks, and where each one lands</h2>
              <p className="lead mt-4">
                The supplier invoice gets the attention, but it is one document in seven. Wholesalers, distributors
                and multichannel brands handle all of these every week, and most of them are checked against
                something other than the accounts package.
              </p>
            </div>
            <div className={`card mt-10 ${styles.tableBox}`} tabIndex={0} role="region" aria-label="Documents an intake agent reads" style={{ padding: 0, overflowX: 'auto' }}><table className="cmp-table" style={{ minWidth: 900 }} data-columns={4}>
              <thead>
                <tr>
                  <th>Document</th>
                  <th>How it arrives</th>
                  <th>What the agent checks</th>
                  <th className="fj">Where it lands</th>
                </tr>
              </thead>
              <tbody>
                {DOCS.map((d) => (
                  <tr key={d.doc}>
                    <td className="feat">{d.doc}</td>
                    <td>{d.from}</td>
                    <td>{d.check}</td>
                    <td className="fj">{d.lands}</td>
                  </tr>
                ))}
              </tbody>
            </table></div>
            <p className="mt-6" style={{ maxWidth: 780 }}>
              If supplier invoices and their approval are the whole job, our page on{' '}
              <a href="/uk/accounts-payable-automation" style={inlineLink}>accounts payable automation in the UK</a>{' '}
              goes deeper on VAT invoice checks, approvals and payment runs.
            </p>
          </div>
        </section>

        {/* 5. HMRC */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">HMRC and VAT</span>
                <h2>What HMRC says about scanned documents, delivery notes and digital links</h2>
                <div className="stack mt-6">
                  <p>
                    <b>Scans can replace paper.</b> HMRC’s Making Tax Digital notice gives the case of a business
                    whose software scans received invoices and posts the details to its ledger. That business can
                    stop keeping the paper, provided the image is kept and holds every detail needed for VAT, unless the
                    paper is needed for another purpose. Where
                    someone types the details in by hand, the original invoice has to be kept.
                  </p>
                  <p>
                    <b>A delivery note is not a VAT invoice.</b> It shows what arrived, and that is all the agent uses
                    it for: proof of goods, matched to the order, held until the invoice comes. GOV.UK puts delivery
                    notes on the same list as pro-forma invoices and statements, none of which support a VAT claim.
                  </p>
                  <p>
                    <b>Copy and paste does not count.</b> The notice says HMRC does not treat copying and pasting as a
                    digital link, and names API transfer and CSV import among the accepted ones. An agent that posts
                    to Xero, Sage or NetSuite by API keeps that part of the chain digital.
                  </p>
                  <p>
                    <b>Six years of records.</b> VAT records must be kept for at least 6 years, or 10 for businesses
                    on the VAT One Stop Shop or MOSS schemes, and the list includes each invoice received, kept as the
                    original or as an electronic copy.
                  </p>
                </div>
                <Sources ids={['govMtd', 'govRecords']} />
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What the notice asks you to record for each purchase</span>
                <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Purchase record fields"><table className={styles.comparisonTable} data-comparison-layout><tbody>
                  <tr className="scorecard-row"><th><div><div className="scorecard-metric">Time of supply</div><div className="scorecard-note">usually the date on the VAT invoice</div></div></th><td><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Read</div></td></tr>
                  <tr className="scorecard-row"><th><div><div className="scorecard-metric">Value of the supply</div><div className="scorecard-note">before VAT</div></div></th><td><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Read</div></td></tr>
                  <tr className="scorecard-row"><th><div><div className="scorecard-metric">Input tax you will claim</div><div className="scorecard-note">no split by rate required for inputs</div></div></th><td><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Read</div></td></tr>
                  <tr className="scorecard-row"><th><div><div className="scorecard-metric">The stored image</div><div className="scorecard-note">kept beside the ledger entry</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>Filed</div></td></tr>
                  <tr className="scorecard-row"><th><div><div className="scorecard-metric">The VAT Return itself</div><div className="scorecard-note">stays with you and your accountant</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>Yours</div></td></tr>
                </tbody></table></div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. E-INVOICING, UK GDPR, EU AI ACT */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">Rules that change the design</span>
              <h2>E-invoicing from 2029, UK GDPR after the Data (Use and Access) Act, and the EU AI Act</h2>
            </div>
            <ul className="col-3 mt-10">
              <li className="card">
                <h3>E-invoicing from 2029</h3>
                <p className="mt-4">
                  The government’s consultation response makes e-invoicing compulsory for every VAT invoice from
                  2029, and for that consultation it does not count a PDF as an e-invoice. We build
                  so structured invoices skip the reading step and go straight to the checks. Delivery notes, POs
                  and forms still need reading.
                </p>
              </li>
              <li className="card">
                <h3>Automated decisions</h3>
                <p className="mt-4">
                  The ICO says the Data (Use and Access) Act 2025 opens up the full range of lawful bases for
                  significant automated decisions, with safeguards, and not for special category data. Its June 2026
                  update says the Act’s data protection provisions are all in force. A credit refusal still goes to a
                  person in our builds.
                </p>
              </li>
              <li className="card">
                <h3>Selling into the EU</h3>
                <p className="mt-4">
                  Article 2 of the EU AI Act covers providers and deployers outside the EU where the AI system’s
                  output is used in the Union. An agent reading your own supplier paper for a UK ledger is a
                  different case from one whose output reaches EU customers. Your legal adviser makes that call.
                </p>
              </li>
            </ul>
            <Sources ids={['govEinvoice', 'icoDuaa', 'euAiAct']} />
          </div>
        </section>

        {/* 7. WHAT YOU CAN RENT */}
        <section className="sec-lg" id="tools">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Rent first</span>
              <h2>Five document capture tools UK finance teams already pay for, with list prices read on {READ_ON}</h2>
              <p className="lead mt-4">
                Dext, Hubdoc and AutoEntry are searched for far more often in the UK than any phrase about document
                processing. If one of them, or the reader inside your ERP, covers your paperwork, use it. We sell
                none of them. For supplier invoices alone, our{' '}
                <a href="/uk/accounts-payable-automation" style={inlineLink}>UK accounts payable automation</a>{' '}
                page goes further; this section is about everything else that lands in the inbox.
              </p>
            </div>
            <ul className="col-2 mt-10">
              {TOOLS.map((c) => (
                <li key={c.name} className="plat-card">
                  <div className="plat-top">
                    <h3 className="plat-name">{c.name}</h3>
                    <span className="plat-pill">{c.maker}</span>
                  </div>
                  <p className="mt-2"><b>Price:</b> {c.price}</p>
                  <p className="mt-2">{c.reads}</p>
                  <p className="plat-best"><b>Suits:</b> {c.suits}</p>
                  <Sources ids={c.sources} />
                </li>
              ))}
            </ul>

            <h3 className="mt-12" style={{ maxWidth: 820 }}>Hubdoc, Dext, AutoEntry, the reader in your ERP and a custom agent, side by side</h3>
            <div className={`card mt-6 ${styles.tableBox}`} tabIndex={0} role="region" aria-label="Comparison table" style={{ padding: 0, overflowX: 'auto' }}><table className="cmp-table" style={{ minWidth: 980 }} data-columns={6}>
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>Hubdoc</th>
                  <th>Dext</th>
                  <th>AutoEntry</th>
                  <th>Odoo or Business Central</th>
                  <th className="fj">Custom agent built by FactoryJet</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((r) => (
                  <tr key={r.feat}>
                    <td className="feat">{r.feat}</td>
                    <td>{r.hubdoc}</td>
                    <td>{r.dext}</td>
                    <td>{r.autoentry}</td>
                    <td>{r.erp}</td>
                    <td className="fj">{r.fj}</td>
                  </tr>
                ))}
              </tbody>
            </table></div>
            <p className="mt-6" style={{ maxWidth: 780 }}>
              Prices and plan contents move. Open the maker’s page before you decide, and ask whether your
              accountant already has a practice licence for one of these tools.
            </p>
          </div>
        </section>

        <MidPageCTA
          headline={'Tell us which documents your team dreads. We show you what an agent makes of them.'}
          sub={'Name the delivery notes, purchase orders or forms that slow you down. After the first call we ask for about ten examples by email, with personal details removed if you prefer, and come back with a plain verdict (Hubdoc, Dext, AutoEntry, your ERP or a custom agent) and, where a build makes sense, a fixed price in writing.'}
          label={'See a demo on my data'}
        />

        {/* 8. RENT OR BUILD */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Rent or build</span>
                <h2>When a rented tool is enough, and when a custom intake agent is the better job</h2>
                <div className="stack mt-6">
                  <p>
                    The tools above were built for bookkeeping. They read a document and put it in the accounts
                    package, and they do that well at a low monthly price. The question is what the document has to
                    agree with before it is filed.
                  </p>
                  <p>
                    A supplier bill only has to agree with itself and the supplier record. A delivery note has to
                    agree with a purchase order line in Sage 200 and a goods-in count in Mintsoft. A customer PO has
                    to agree with that buyer’s price list and stock in Brightpearl or NetSuite. Those checks are
                    yours, and they are where a custom agent earns its build price.
                  </p>
                </div>
                <p className="mt-6" style={{ maxWidth: 600 }}>
                  For agents that go beyond paperwork, such as quoting or customer service, see{' '}
                  <a href="/uk/ai-agents" style={inlineLink}>AI agents for UK businesses</a> and{' '}
                  <a href="/uk/ai-development" style={inlineLink}>AI development in the UK</a>.
                </p>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">A rule of thumb</span>
                <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Rent or build rule of thumb"><table className={styles.comparisonTable} data-comparison-layout><tbody>
                  <tr className="scorecard-row"><th><div><div className="scorecard-metric">Receipts and bills into Xero</div><div className="scorecard-note">one organisation, one destination</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>Hubdoc</div></td></tr>
                  <tr className="scorecard-row"><th><div><div className="scorecard-metric">Bookkeeping paper for Sage or QuickBooks</div><div className="scorecard-note">your accountant may already license it</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>Dext or AutoEntry</div></td></tr>
                  <tr className="scorecard-row"><th><div><div className="scorecard-metric">Supplier invoices matched to POs</div><div className="scorecard-note">inside Odoo or Business Central</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>Your ERP</div></td></tr>
                  <tr className="scorecard-row"><th><div><div className="scorecard-metric">Delivery notes against goods-in</div><div className="scorecard-note">ERP plus warehouse system</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>Custom</div></td></tr>
                  <tr className="scorecard-row"><th><div><div className="scorecard-metric">Customer POs to sales orders</div><div className="scorecard-note">account prices and item codes</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>Custom</div></td></tr>
                  <tr className="scorecard-row"><th><div><div className="scorecard-metric">Several document types, several systems</div><div className="scorecard-note">one queue, one review screen</div></div></th><td><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Custom</div></td></tr>
                </tbody></table></div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. WHERE UK INTAKE BREAKS */}
        <section className="sec-lg" id="where-it-breaks">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Where intake breaks</span>
              <h2>Six pieces of UK paperwork that catch out a reader built on templates</h2>
              <p className="lead mt-4">
                Each one gets its own rule in the build, and each one is in the test set before anything goes
                live.
              </p>
            </div>
            <ul className="col-2 mt-10">
              {BREAKS.map((b) => (
                <li key={b.t} className="card">
                  <h3>{b.t}</h3>
                  <p className="mt-4">{b.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 10. UK PROOF */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">UK work we can name</span>
                <h2>Two UK clients whose systems work sits underneath intake</h2>
                <div className="stack mt-6">
                  <p>
                    <b>GPSUK</b> supplies promotional products to UK businesses. FactoryJet built its trade
                    storefront on Commerceflo, where business buyers log in, see their own account prices and move
                    from quote to order without anyone retyping it.{' '}
                    <a href="/case-studies/gpsuk-promotional-products" style={inlineLink}>Read the GPSUK case study</a>.
                  </p>
                  <p>
                    <b>Sow Easy</b> is a UK wholesale distributor. FactoryJet is building its WooCommerce trade
                    store with Odoo as the single source of stock, prices and SKUs. The store and the Odoo link are
                    being tested on staging before launch.{' '}
                    <a href="/case-studies/sow-easy-distributor-portal" style={inlineLink}>Read the Sow Easy case study</a>.
                  </p>
                  <p>
                    The rule both projects follow is the one an intake agent depends on: one system owns each
                    record, and every other system reads from it. Beyond these two, FactoryJet has worked on Odoo,
                    NetSuite, SAP Business One, ERPNext and custom ERPs, including request-for-quote automation,
                    daily bookkeeping and purchase and sales order generation.
                  </p>
                </div>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src={`${IMG}/sorting-paper-three-trays.webp`} width={1200} height={800} loading="lazy" decoding="async" alt="A woman with short grey hair in a dark green cardigan places a sheet of paper into an orange wire tray between two white trays on a long pale wood table, beside a tall stack of paper" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
              </div>
            </div>
          </div>
        </section>

        {/* 11. HOW WE BUILD */}
        <section className="sec-lg" id="how-we-build">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">How we work</span>
              <h2>How we build a document intake agent, in seven steps</h2>
              <p className="lead mt-4">
                Each phase is scoped, priced and signed on its own. You can stop after any of them and keep what was
                built.
              </p>
            </div>
            <figure className={styles.processFigure} data-process-flow aria-label="How we build a document intake agent, in seven steps"><ol className={`stack mt-10 ${styles.processFlow}`} style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Collect a sample of real paper', d: 'Ten to twenty recent examples of each document type, including the ugly ones: phone photos, corrected quantities, mixed scans. We also take what your team entered for each, because that is the answer key.' },
                { n: '02', t: 'Write down the fields, checks and owners', d: 'For each document type, the fields to read, what each one is checked against, which system owns it and how sure the agent must be before filing. Your finance lead and, where VAT is involved, your accountant sign the list.' },
                { n: '03', t: 'Look at what you already pay for', d: 'Hubdoc, Dext, AutoEntry, Odoo’s digitisation or Business Central’s Payables Agent may cover some document types. Custom work is quoted for whatever is left.' },
                { n: '04', t: 'Show it on your own documents', d: 'Before a contract, an early build reads your sample and you compare its output with your team’s entries, field by field. If it is not good enough, you walk away having lost an hour.' },
                { n: '05', t: 'Set up a user that can only draft', d: 'A separate user in Xero, Sage, NetSuite or Odoo that can create drafts and attach files, and cannot approve payments or change bank details.' },
                { n: '06', t: 'Run it beside your team', d: 'For the first weeks every document waits for a person, and we tune the bars per field from what reviewers change. Fields that are always right move to automatic filing first.' },
                { n: '07', t: 'Go live and stay on', d: 'Defects are fixed inside the build price for the cover period agreed before work starts. After that, support is optional, each change is quoted and approved, and there is no monthly minimum.' },
              ].map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.small, minWidth: 34 }} className={styles.stageMarker}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol></figure>
          </div>
        </section>

        {/* 12. WHO IT IS FOR */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Who this is for</span>
              <h2>Document intake for UK wholesalers, manufacturers, multichannel brands and multi-entity groups</h2>
              <p className="lead mt-4">
                Established companies with a finance team, a goods-in team and a sales office, each retyping paper
                into a different screen.
              </p>
            </div>
            <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Who this is for"><table className={styles.comparisonTable} data-comparison-layout><tbody>
              <tr className="svc-card"><th><h3>Wholesalers and distributors</h3></th><td><p className="mt-4">Supplier invoices, delivery notes and trade buyers’ POs, all against the same purchase and sales orders in Sage 200, NetSuite or Odoo.</p></td></tr>
              <tr className="svc-card"><th><h3>Manufacturers</h3></th><td><p className="mt-4">Goods-in paperwork for raw materials, certificates attached to batches, and customer schedules that arrive as spreadsheets.</p></td></tr>
              <tr className="svc-card"><th><h3>Multichannel ecommerce brands</h3></th><td><p className="mt-4">Returns forms, supplier paperwork and marketplace reports from Amazon.co.uk, eBay UK and OnBuy, landing in Linnworks, Brightpearl or Mintsoft.</p></td></tr>
              <tr className="svc-card"><th><h3>Multi-entity groups</h3></th><td><p className="mt-4">One shared inbox and several companies. The agent works out which entity a document belongs to and files it in that entity’s books.</p></td></tr>
            </tbody></table></div>
            <p className="mt-8" style={{ maxWidth: 780 }}>
              If your sales flow through Shopify into Xero, see{' '}
              <a href="/uk/shopify-xero-integration" style={inlineLink}>Shopify Xero integration</a>. For trade
              ordering portals, see <a href="/uk/b2b-ecommerce" style={inlineLink}>B2B ecommerce in the UK</a>.
              The US version of this service is at{' '}
              <a href="/services/document-intake-ai-agents" style={inlineLink}>document intake AI agents</a>.
            </p>
          </div>
        </section>

        {/* 13. TERMS, BRIEF AND MARKET RANGES */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Terms</span>
                <h2>How we price and hand over a document intake build</h2>
                <ul className="scope-list yes-list mt-6" style={{ maxWidth: 600 }}>
                  <li>You own the code and the repository from day one.</li>
                  <li>The AI and hosting can run in your own accounts, at cost, with no markup.</li>
                  <li>Defects are fixed inside the build price for a cover period agreed before work starts.</li>
                  <li>Support is optional. Each change is quoted and approved, with no monthly minimum.</li>
                  <li>Each phase is scoped, priced and signed on its own.</li>
                </ul>
                <p className="mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet quotes the build, and any support you choose, as fixed prices in writing after a short
                  scoping call. Published UK market ranges: £30,000 to £90,000 before VAT for a back-office agent
                  handling data entry and invoice processing in Fulminous’s guide, and £10,000 to £30,000 for one
                  workflow in LeverX’s, which does not state its VAT treatment. Those are their ranges, not ours.
                </p>
                <Sources ids={['leverx', 'fulminous']} />
                <div className="mt-8">
                  <ModalCTAButton label="See a demo on my data" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Send us a brief or an RFP</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Document types and monthly volumes</div><div className="scorecard-note">invoices, delivery notes, POs, forms</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>1</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Ten to twenty examples of each</div><div className="scorecard-note">redacted is fine</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>2</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Systems and versions</div><div className="scorecard-note">Sage 200 on premises, Business Central online</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>3</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Who approves what today</div><div className="scorecard-note">and any limits on that approval</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>4</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Dates that matter</div><div className="scorecard-note">year end, ERP go-live, peak season</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>5</div></div>
                <p style={{ fontSize: 13.5, color: T.ink, marginTop: 12, padding: '0 4px' }}>
                  Already written an RFP? Attach it in the second step of the form. We answer it point by point.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 14. SOURCES */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Method</span>
              <h2>Sources, read on {READ_ON}</h2>
              <p className="lead mt-4">
                Every price, plan limit, product feature and rule on this page was read on the pages below on that
                day. Search volumes are DataForSEO figures for the United Kingdom, pulled the same day. Prices move,
                and HMRC, the ICO and the EU change their guidance, so open the linked page before you act on a figure.
              </p>
            </div>
            <ul className="col-2 mt-8" style={{ gap: 10 }}>
              {SOURCE_KEYS.map((k) => (
                <li key={k} style={{ fontSize: 14 }}>
                  <a href={SRC[k].url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: T.ink }}>{SRC[k].label}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 15. FAQ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>Document intake questions from UK finance, operations and sales teams</h2>
            </div>
            <div className="faq-grid">
              <aside className="faq-sidebar">
                <span className="faq-sidebar-topics">Topics</span>
                <nav className="faq-sidebar-nav">
                  {FAQ_CATEGORIES.map((c) => (
                    <a key={c.key} href={`#faq-${c.key}`}>
                      {c.label}
                      <span className="faq-nav-count">{FAQ_ITEMS.filter((f) => f.category === c.key).length}</span>
                    </a>
                  ))}
                </nav>
                <div className="faq-sidebar-cta">
                  <ModalCTAButton label="Ask the founder a question" region="uk" modalVariant="default" btnVariant="secondary-light" />
                  <p>Bhavesh replies within one business day.</p>
                </div>
              </aside>

              <div>
                {FAQ_CATEGORIES.map((c) => (
                  <div key={c.key} id={`faq-${c.key}`} style={{ marginBottom: 40 }}>
                    <div className="faq-cat-header">
                      <span className="faq-cat-bar" />
                      <p className="faq-cat-label">{c.label}</p>
                    </div>
                    <ul className="faq-list">{FAQ_ITEMS.filter((f) => f.category === c.key).map((f) => (
                      <li key={f.question}><details className="faq-item">
                        <summary>
                          <span className="q-text">{f.question}</span>
                          <span className="chevron">
                            <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </span>
                        </summary>
                        <div className="faq-ans"><p>{f.answer}</p></div>
                      </details></li>
                    ))}</ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 16. FINAL CTA (the only dark section) */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Next step</span>
            <h2>Stop retyping the same paper into three systems</h2>
            <p className="mt-4">
              Leave a name and a work email. Within one business day Bhavesh books a short call to go through your
              document types, your systems and who checks what today. You leave knowing whether a rented tool
              or a custom agent is the right job.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="See a demo on my data" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/contact" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>Contact us</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}
