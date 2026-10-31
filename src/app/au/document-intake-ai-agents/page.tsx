import type { Metadata } from 'next';
import { Fragment, type ReactNode } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import AuFaq from '../components/AuFaq';
import VisualSlot from '../components/VisualSlot';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';
import '../au-hub.css';

/* Same engineering visuals and page-owned styles as /au/ai-agents (mirrored template).
   Both files are imported read-only; nothing in /au/ai-agents is changed by this page. */
import '../ai-agents/visual.css';
import { ExecutionPath, ExecutionJobDiagram } from '../ai-agents/ExecutionDiagram';
import { twinAlternates } from '@/data/hreflangMap';
import StickyCtaLabel from '@/components/v2/StickyCtaLabel';

/* ─────────────────────────────────────────────────────────────────────────────
   /au/document-intake-ai-agents, built 2026-10-29.

   Why this page exists and how it differs from its neighbours:
   * /services/document-intake-ai-agents is the US page on the same service. Copy is
     written fresh for Australia; shared service facts (systems worked on, house
     terms) are restated, not copied sentence by sentence.
   * /au/accounts-payable-automation already owns SUPPLIER INVOICES into Xero and
     MYOB. This page deliberately covers the other paperwork: customer purchase
     orders, delivery dockets and proof of delivery, credit and trade account
     applications, supplier certificates, remittances and forms. Supplier bills are
     routed to the AP page in the copy, so the two pages do not compete.

   Demand (DataForSEO, Google Ads search volume, location 2036 Australia, run
   2026-10-29): "ocr software" 590, "document ai" 170, "document processing" 140,
   "ai ocr" 110, "intelligent document processing" 50 (CPC A$40.58), "pdf data
   extraction" 40, "document automation" 30, "invoice ocr" 30. "hubdoc" 14,800 and
   "dext" 18,100 are brand searches for subscription capture apps. PAA (same run):
   "Is intelligent document processing AI?", "What's the difference between OCR and
   IDP?", "What is document automation software?", "Which AI is best for document
   processing?", "Can ChatGPT OCR a PDF?". Related searches surfaced "Xero Smart
   Document Capture vs Hubdoc". Total DataForSEO spend for this page: about US$0.12.

   Truth rules for anyone editing this file:
   1. Every law, platform or price fact was fetched on 2026-10-29 from the source
      linked in the SRC constants below, with the supporting words noted beside
      each. ATO pages returned HTTP 403 to every request that day, so no ATO rule
      is stated on this page. The ATO's role as Peppol Authority is taken from
      OpenPeppol's own list instead.
   2. No FactoryJet prices. The two AUD figures are build ranges published by
      Flowtivity and Web Video Digital, named in the sentence. Neither says whether
      GST is included, and the page says so.
   3. No figure for running or maintaining an agent (Bhavesh, 11 Oct 2026).
   4. Nothing here says where the FactoryJet team is.
   5. No Australian client is named or implied. The experience block restates
      Bhavesh's own statement used on the US page (Odoo, NetSuite, SAP Business
      One, ERPNext, custom ERPs; RFQ automation, daily bookkeeping, purchase and
      sales order generation; Xero and HubSpot integrations), plus Sow Easy
      (WooCommerce plus Odoo), cleared for any page on 29 Oct 2026. None of it is
      framed as Australian work.
   6. The worked example is labelled as an illustration, not a case study.

   Schema: Service (areaServed Australia) + BreadcrumbList + WebPage/Article +
   FAQPage. The FAQPage mainEntity is mapped from the exact FAQ_ITEMS array that
   <AuFaq> renders. There is no second array.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL = 'https://factoryjet.com/au/document-intake-ai-agents';
const UPDATED = '2026-10-31';
const TITLE = 'AI Document Processing Australia: Intake Agents | FactoryJet';
const H1 = 'AI Document Processing in Australia: Intake Agents for Xero, MYOB and Your ERP';
const DESCRIPTION =
  'We build AI document intake agents for Australian businesses. Orders, dockets and forms are read, checked and filed as drafts in Xero, MYOB or your ERP.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Document Intake AI Agents', url: CANONICAL },
];

/* ─── External sources, each fetched 2026-10-29 ─────────────────────── */
// Xero blog, "Faster record-keeping with smart document capture" (published
// 2 Jul 2026, updated 28 Oct 2026): built-in capture "powered by JAX" that reads
// documents sent by app, email forwarding or upload to the Files inbox; names
// receipts, bills, utility and rental statements; "available across most
// markets, and now rolling out in beta for Australia and New Zealand".
const SRC_XERO_SDC = 'https://blog.xero.com/product-updates/smart-document-capture/';
// MYOB Business API overview: apps can "connect to AccountRight, new Essentials
// and MYOB Business files".
const SRC_MYOB_API = 'https://developer.myob.com/api/myob-business-api/api-overview/';
// MYOB Business API, Sale/Order: GET | PUT | POST | DELETE; layouts Item,
// Service, Professional, TimeBilling, Miscellaneous; status Open or
// ConvertedToInvoice.
const SRC_MYOB_ORDER = 'https://developer.myob.com/api/myob-business-api/v2/sale/order/';
// ABR, ABN Lookup web services: "allow you to integrate ABN Lookup validation and
// data into your own applications"; common uses include "ABN validation and
// pre-fill on forms"; registration gives a GUID; "free of charge".
const SRC_ABN_WS = 'https://abr.business.gov.au/Tools/WebServices';
// OpenPeppol, Peppol Authorities: Australia listed as "Australian Tax Office (ATO)".
const SRC_PEPPOL_AUTH = 'https://peppol.org/members/peppol-authorities/';
// OAIC, APP guidelines chapter 11 (updated 3 Oct 2025): reasonable steps to
// protect personal information "from misuse, interference and loss" and
// "unauthorised access, modification or disclosure"; destroy or de-identify when
// no longer needed; "APP 11.3 was introduced by the Privacy and Other Legislation
// Amendment Act 2024", applies to personal information held from 11 December
// 2024; reasonable steps "include both technical and organisational measures".
const SRC_OAIC_APP11 =
  'https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-11-app-11-security-of-personal-information';
// OAIC, APP guidelines chapter 8: before disclosing overseas, take reasonable
// steps "to ensure that the overseas recipient does not breach the APPs"; under
// s 16C the entity "is accountable for an act or practice of the overseas
// recipient that would breach the APPs".
const SRC_OAIC_APP8 =
  'https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information';
// OAIC, guidance on privacy and the use of commercially available AI products
// (updated 17 Jan 2025): "Privacy obligations will apply to any personal
// information input into an AI system", and to output containing it; best
// practice: do not enter personal information "into publicly available
// generative AI tools"; due diligence should not be "set and forget".
const SRC_OAIC_AI =
  'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products';
// Flowtivity, "How Much Does an AI Agent Cost in 2026? Australian Pricing Guide"
// (5 Mar 2026): table "Use Case / Estimated Cost (AUD) / Timeline", row
// "Document processing and data entry", A$12,000 to A$30,000, 4 to 8 weeks. GST
// basis not stated.
const SRC_FLOWTIVITY = 'https://flowtivity.ai/blog/ai-agent-cost-pricing-guide-australia-2026/';
// Web Video Digital, custom AI agent cost in Australia (5 Aug 2026): "between AUD
// 15,000 and AUD 150,000"; most small-to-medium projects "AUD 30,000 to AUD
// 80,000". GST basis not stated.
const SRC_WVD = 'https://webvideodigital.com.au/custom-ai-agent-cost-in-australia/';

/* ─── Vendor sources, each read 2026-10-31 ─────────────────────────── */
// AWS: Textract "Automatically extract printed text, handwriting, layout
// elements, and data from any document" (re-read 2026-10-31).
const SRC_TEXTRACT = 'https://aws.amazon.com/textract/';
// Google Cloud: "Document AI is a document processing and understanding
// platform"; lists "Digitize: OCR", Enterprise Document OCR and Form Parser.
const SRC_GOOGLE_DOCAI = 'https://docs.cloud.google.com/document-ai/docs/overview';
// Microsoft Learn: Azure Document Intelligence "is a machine-learning based OCR
// and intelligent document processing service".
const SRC_AZURE_DI = 'https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/overview';
// Xero AU store-files page (xero.com/au/hubdoc/ 301-redirects here on
// 2026-10-31): smart document capture "is available to customers on all Xero
// small business pricing plans"; Grow plan listed as "basic extraction".
const SRC_XERO_PLANS = 'https://www.xero.com/au/accounting-software/store-files/';
// Dext AU: "an intelligent bookkeeping automation platform" that "automates the
// capture, processing and storage of receipts, invoices and business
// documents"; links to "QuickBooks Online, Xero, Sage, Zoho and more".
const SRC_DEXT = 'https://dext.com/au';
// ABBYY Vantage meta description: "Intelligent Document Processing software".
const SRC_ABBYY = 'https://www.abbyy.com/vantage/';
// Nanonets meta description: automates accounts payable, claims and order
// management "and delivers clean data to systems of record like SAP, Salesforce".
const SRC_NANONETS = 'https://nanonets.com/';

const US_PAGE = '/services/document-intake-ai-agents';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',  label: 'Document processing basics' },
  { key: 'systems', label: 'Xero, MYOB, ERPs & Peppol' },
  { key: 'checks',  label: 'Accuracy & review' },
  { key: 'privacy', label: 'Privacy & data' },
  { key: 'working', label: 'Cost, timing & working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── Basics ──
  { category: 'basics', question: 'What is AI document processing?',
    answer: 'It is software that takes a document your business receives, such as a customer purchase order, a delivery docket or an application form, works out what kind of document it is, pulls out the fields you care about and puts them into your system. The AI part is what lets it cope with layouts it has never seen and messy scans. A person still checks anything the software is unsure of.' },
  { category: 'basics', question: 'Is intelligent document processing AI?',
    answer: 'Yes. Intelligent document processing, usually shortened to IDP, is the industry name for document reading that uses AI rather than fixed templates. Older tools needed a template drawn for every supplier or customer layout. IDP uses machine learning, and now large language models, to find a PO number or a delivery address wherever it sits on the page. The name sounds grand. The job is reading paperwork accurately and saying when it is not sure.' },
  { category: 'basics', question: 'What’s the difference between OCR and IDP?',
    answer: 'Optical character recognition (OCR) converts a scanned image into characters a computer can search. It can hand you every word on a delivery docket and still have no idea which one is the PO number. IDP goes further: it decides that one number is the order total and another is an ABN, checks them, and maps them to fields in your system. Most IDP systems use OCR as their first step. OCR alone suits searchable archives. IDP suits documents that must become records.' },
  { category: 'basics', question: 'Some customers still order with old item codes. Can the agent cope?',
    answer: 'Yes, if your team keeps a mapping table of old codes to current ones. The agent looks up each code on the order, swaps in the current code it maps to, and shows both on the draft so a person can see the change. A code with no match in the table is never guessed. The order waits in the review queue, and once your team adds that code to the table, the next order with it goes through.' },
  { category: 'basics', question: 'Which AI is best for document processing?',
    answer: 'No single model wins for every document. Amazon Textract, Google Document AI and Azure AI Document Intelligence are cloud reading services built for text, forms and tables. General models from OpenAI, Anthropic and Google cope well with messy layouts and free text. We test the options against a batch of your real paperwork and choose on measured accuracy and where the data is processed. A delivery docket may need a different reader from a credit application.',
    links: [{ href: SRC_TEXTRACT, label: 'Amazon Textract' }, { href: SRC_GOOGLE_DOCAI, label: 'Google Document AI overview' }, { href: SRC_AZURE_DI, label: 'Azure AI Document Intelligence overview' }] },
  { category: 'basics', question: 'Can ChatGPT read a PDF and do our data entry?',
    answer: 'It can read many PDFs well, and it is a good way to see what AI makes of your paperwork. It is a poor home for the real job. Someone still has to upload each file, check the answer and type it into your system. The OAIC also recommends, as best practice, keeping personal information out of publicly available generative AI tools. A business intake agent runs on business terms and files into your system with a log.',
    links: [{ href: SRC_OAIC_AI, label: 'OAIC, privacy and commercially available AI products' }] },
  { category: 'basics', question: 'Can it read scanned PDFs, phone photos and handwriting?',
    answer: 'Scans and phone photos, yes, within limits: blur, glare and cut-off edges lower accuracy, so the agent scores image quality and sends poor copies to a person. Printed handwriting on forms is often readable. Joined cursive, signatures and ticks squeezed into margins are less reliable. We test your worst real examples during scoping, so you know before the build which documents the agent can take and which stay with your team.' },

  // ── Systems ──
  { category: 'systems', question: 'Doesn’t Xero already read documents by itself?',
    answer: 'Partly. Xero’s smart document capture reads documents sent to Xero by email, app or upload and has the details ready for review. Xero’s July 2026 post names receipts, bills and statements, and says the feature is rolling out in beta in Australia and New Zealand. If your documents are bills and receipts for Xero, try it first. A custom agent fits documents Xero does not handle, such as customer orders, forms or dockets.',
    links: [{ href: SRC_XERO_SDC, label: 'Xero, smart document capture' }] },
  { category: 'systems', question: 'Xero smart document capture, Hubdoc or Dext: which should we use?',
    answer: 'For bookkeeping paperwork, start with what you already pay for. Xero says smart document capture is on all its small business plans, with basic extraction on Grow. On 31 October 2026, Xero’s Australian Hubdoc page redirected to that capture page. Dext calls itself a bookkeeping automation platform for receipts, invoices and business documents, and links to Xero, QuickBooks Online and Sage. A custom agent fits orders, dockets and forms bound for an ERP.',
    links: [{ href: SRC_XERO_PLANS, label: 'Xero, smart document capture plans' }, { href: SRC_DEXT, label: 'Dext Australia' }] },
  { category: 'systems', question: 'Can an agent turn emailed purchase orders into sales orders in MYOB?',
    answer: 'Yes. MYOB’s Business API works with AccountRight, new Essentials and MYOB Business files, and its Sale Order endpoint takes new orders with a status of Open or ConvertedToInvoice. There is no draft status, so an Open order is live. The agent reads the customer’s PDF, matches the customer and each item code, checks the price against your list and holds the order in its review queue. Only when a person approves it does the agent create it in MYOB as Open.',
    links: [{ href: SRC_MYOB_ORDER, label: 'MYOB Business API, Sale Order' }] },
  { category: 'systems', question: 'Which ERPs and inventory systems can it file into?',
    answer: 'Any system that lets outside software create a record through an API or a supported import. In Australia that usually means Xero, MYOB Business or AccountRight, MYOB Acumatica, NetSuite, Odoo, QuickBooks Online, Cin7 Core or Unleashed. Our own ERP work spans Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs. Before any build we name the exact record type your system accepts from outside software, and ask whether a sandbox copy exists so testing never touches live books.' },
  { category: 'systems', question: 'Can the agent handle Peppol eInvoices?',
    answer: 'It does not need to read them. A Peppol eInvoice arrives as structured data, not a picture, so it can go straight into the system with a few checks. Australia’s Peppol Authority is the ATO, according to OpenPeppol’s list. Our agent treats Peppol documents as a clean lane and spends its reading effort on the PDFs, scans and emails that still arrive from customers and suppliers who are not on the network.',
    links: [{ href: SRC_PEPPOL_AUTH, label: 'OpenPeppol, Peppol Authorities' }] },
  { category: 'systems', question: 'Can it check an ABN on an application form?',
    answer: 'Yes. The Australian Business Register offers ABN Lookup web services so software can validate an ABN and pre-fill details on forms. Access is free after registration, which gives you a GUID key. On a trade account or credit application, the agent reads the ABN and business name, checks them against ABN Lookup and flags any mismatch for your credit team, so a typo or a wrong entity is caught before the account opens.',
    links: [{ href: SRC_ABN_WS, label: 'ABN Lookup web services' }] },

  // ── Checks ──
  { category: 'checks', question: 'How accurate is AI document processing?',
    answer: 'It depends on your documents, so ignore any vendor’s headline figure. Clean, typed orders from regular customers read close to perfectly. Faxed dockets and handwritten forms do not. We measure accuracy field by field on a batch your team has already processed, then set a bar for each field. Fields that clear the bar flow through as drafts. Fields that fall short go to a person, so a low score slows things down rather than filing a wrong record.' },
  { category: 'checks', question: 'What happens when the agent is unsure?',
    answer: 'It stops and asks. The document lands in a review queue with the unsure fields highlighted beside the original page, and a person corrects or confirms them in a few clicks. The agent also stops when a check fails: an unknown customer, an item code that does not exist, a price outside your list or a total that does not add up. Every correction is logged, which tells us where to tighten the rules.' },
  { category: 'checks', question: 'Do we have to train the AI on our paperwork first?',
    answer: 'No months-long training project is involved. Current models already read most business documents well. What the agent needs is your rules: which fields matter, what counts as a valid order, which checks to run against your system and who reviews what. We write those rules with your team and test them on a few hundred past documents. Your documents are not used to train anyone’s public model.' },

  // ── Privacy ──
  { category: 'privacy', question: 'Does the Privacy Act apply to documents the agent reads?',
    answer: 'If your business is covered by the Privacy Act 1988 and the documents hold personal information, yes. Application forms, sole trader orders and delivery details often do. APP 11 requires reasonable steps to protect that information, and since the Privacy and Other Legislation Amendment Act 2024, the OAIC says those steps include both technical and organisational measures. For example, the agent gets its own login, and that login can open only the inboxes and folders the job needs.',
    links: [{ href: SRC_OAIC_APP11, label: 'OAIC, APP 11 guidelines' }] },
  { category: 'privacy', question: 'Can our documents stay in Australia?',
    answer: 'Often, yes. The agent’s own code, storage and logs can run in an Australian cloud region in your account. Some AI models are only offered from overseas regions. Under APP 8, before personal information goes to an overseas recipient you must take reasonable steps to make sure it does not breach the APPs, and you remain accountable for what that recipient does. We show you where each document travels before the build starts.',
    links: [{ href: SRC_OAIC_APP8, label: 'OAIC, APP 8 guidelines' }] },
  { category: 'privacy', question: 'Is our data used to train AI models?',
    answer: 'Not on the setups we build. We use AI providers on business or API terms that exclude customer data from model training, and we record which provider processes which document type. The OAIC’s guidance says privacy obligations apply to personal information put into an AI system and to output that contains it, so we pass the model only the pages and fields it needs, and mask what it does not.',
    links: [{ href: SRC_OAIC_AI, label: 'OAIC, privacy and AI products' }] },

  // ── Working with us ──
  { category: 'working', question: 'How much does AI document processing cost in Australia?',
    answer: 'Flowtivity’s March 2026 Australian guide puts document processing and data entry builds at A$12,000 to A$30,000, over 4 to 8 weeks. Web Video Digital’s August 2026 guide puts custom AI agents generally at A$15,000 to A$150,000. Neither guide says whether GST is included, so ask any vendor to quote ex GST. These are market ranges, not our prices. FactoryJet quotes a fixed price in writing after a short scoping call.',
    links: [{ href: SRC_FLOWTIVITY, label: 'Flowtivity, Australian AI agent pricing (Mar 2026)' }, { href: SRC_WVD, label: 'Web Video Digital, AI agent cost (Aug 2026)' }] },
  { category: 'working', question: 'How long does it take to build a document intake agent?',
    answer: 'Flowtivity’s Australian guide puts document processing builds at 4 to 8 weeks, which matches the shape of our projects: about a week to collect samples and write rules, then building, testing on past documents and a supervised pilot. One document type into one system sits at the short end. Several document types, a review queue and an ERP with no test copy sit at the long end. We confirm the plan after scoping.' },
  { category: 'working', question: 'Can we see it working on our documents before we sign?',
    answer: 'Yes, and that is how we prefer to start. You send a batch of documents your team has already processed, an early version of the agent reads them, and you compare its fields with what your team entered, unsure fields included. If a tool you already have, such as Xero’s built-in capture, would cover your job, we tell you then. You decide whether to go ahead with real results in front of you.' },
  { category: 'working', question: 'Who owns the agent, and who looks after it?',
    answer: 'You own the code, the rules, the test documents and the logs from day one, and the AI and hosting accounts can sit in your name at cost with no markup. Defects are fixed inside the build price for a cover period agreed before work starts. Support after that is optional. Each change is quoted and approved before we do it, with no monthly minimum, and we can keep managing the servers, models and connections if you want us to.' },
  { category: 'working', question: 'What should we send you to get a quote?',
    answer: 'A short brief is enough, and an RFP is welcome. Tell us which documents arrive, roughly how many a week, where they come from (inbox, portal, scanner, courier app), which system they must end up in, and who checks them today. Attach five to ten real examples, with personal details blacked out if you prefer. From that we can say whether the job suits an agent and give you a fixed price per phase.' },
];

/* ─── What the agent does (eight cards) ─── */
const AGENT_JOBS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Collects from every place paperwork lands', d: 'A shared orders inbox, a customer portal upload, a scanner folder or a courier app export. The agent watches each one, so nobody forwards PDFs around before work can start.' },
  { n: '02', t: 'Splits and sorts the pile', d: 'One email can carry three orders and a remittance. A scanned batch can hold twenty dockets. The agent cuts files into single documents and labels each by type before anything is read.' },
  { n: '03', t: 'Reads the fields you name', d: 'Customer, PO number, delivery address, item codes, quantities, prices, ABN, signature present or missing. You choose the fields per document type; the agent reads only those.' },
  { n: '04', t: 'Checks them against your own records', d: 'Before a record is drafted, the agent confirms in your system that the customer is known, item code 40-118 exists, the price sits inside that customer’s price list and the ABN matches ABN Lookup.' },
  { n: '05', t: 'Sends unsure fields to a person', d: 'Each field carries a score. Below your bar, the document goes to a review queue with the original page beside it. A person confirms or fixes it, and the correction is logged.' },
  { n: '06', t: 'Files a draft in the right system', d: 'A sales order in NetSuite, a contact with the application attached in Xero, a receipt record in Cin7 Core or Unleashed. Where a system has a draft state, the agent uses it. MYOB sale orders have none, so they wait in the review queue until a person approves them.' },
  { n: '07', t: 'Keeps the original with the record', d: 'The source document is attached to, or linked from, the record it created, so anyone can see what arrived and what was entered, months later.' },
  { n: '08', t: 'Reports what it did and why', d: 'A daily summary: documents in, records drafted, documents held and the reason each was held. Your team sees the exceptions first and the routine work as a count.' },
];

/* ─── Documents by Australian industry ─── */
const INDUSTRIES: { t: string; d: ReactNode }[] = [
  { t: 'Wholesale and distribution', d: 'Customer purchase orders that arrive as PDFs, spreadsheets or photos of handwritten order pads, read and prepared as sales orders for approval in MYOB, NetSuite, Cin7 Core or Unleashed, with item codes and price lists checked first. Orders with an unknown code or an off-list price wait for a person.' },
  { t: 'Manufacturing', d: 'Supplier certificates of conformance, test reports and material data sheets matched to the batch or purchase order they belong to, plus customer drawings and order changes logged against the job. Expired or missing certificates are flagged before goods are released.' },
  { t: 'Freight, 3PL and warehousing', d: 'Consignment notes, signed proof of delivery and damage reports from carriers such as Australia Post, StarTrack and Sendle read and matched to the order, so disputed deliveries have their evidence attached before the customer rings.' },
  { t: 'Trade suppliers and B2B ecommerce', d: <>Trade account and credit applications read, ABNs checked against ABN Lookup, and the account drafted for the credit team to approve. For online B2B ordering itself, see our <a href="/au/ecommerce-development">ecommerce development</a> work in Australia.</> },
  { t: 'Healthcare and allied health admin', d: 'Referral letters and intake forms read into the practice system for an admin person to confirm. Admin only, never clinical judgement. Health information is sensitive information, so access limits and review steps are tighter on these builds.' },
  { t: 'Accounting and bookkeeping firms', d: <>Client source documents sorted and filed against the right client and period, and missing items requested automatically. Firms that also need the client-facing side can see <a href="/au/accountant-website-design">accountant website design</a>.</> },
];

/* ─── Where the agent files (platform rows) ─── */
const INTEGRATIONS: { t: string; d: ReactNode }[] = [
  { t: 'Xero', d: 'Contacts, quotes, draft invoices and attachments for the documents Xero’s own capture does not cover.' },
  { t: 'MYOB Business and AccountRight', d: <>Sale orders, customers and items through the MYOB Business API (sale orders have no draft status, so each waits in the review queue for approval before it is created as Open), which <a href={SRC_MYOB_API} target="_blank" rel="noopener noreferrer nofollow">works with AccountRight, new Essentials and MYOB Business files</a>.</> },
  { t: 'MYOB Acumatica and NetSuite', d: 'Sales orders, item receipts and customer records in mid-market ERPs, each through a separate login for the agent with only the access the job needs.' },
  { t: 'Odoo, Cin7 Core and Unleashed', d: 'Sales and purchase orders, stock receipts and delivery records in the inventory systems Australian wholesalers and brands run.' },
  { t: 'QuickBooks Online', d: 'Customers, estimates and invoices for businesses on QuickBooks in Australia, filed as drafts for review.' },
  { t: 'Microsoft 365 and Google Workspace', d: 'The inboxes, shared drives and SharePoint libraries where documents arrive, plus Teams or Google Chat for review alerts.' },
  { t: 'ABN Lookup', d: 'ABN and business name checks on applications and new customer orders, through the Australian Business Register’s free web services.' },
  { t: 'Your own ERP or database', d: 'If it has an API or a supported import, the agent can file to it. Without either, the agent sets the record out field by field on the review screen, ready to enter in one sitting.' },
];

/* ─── Project steps (rendered as <details>) ─── */
const BUILD_STEPS: { n: string; t: string; d: string; out: string }[] = [
  { n: '01', t: 'Collect a real sample',
    d: 'You send a batch of documents your team has already processed, including the ugly ones: faxes, phone photos, multi-order emails. We also get read-only access to the system they end up in.',
    out: 'A sample set and a list of document types ranked by volume.' },
  { n: '02', t: 'Write the field list and the rules',
    d: 'For each document type we agree which fields matter, which checks run against your records and who reviews what. This is written in plain English and signed off by the person who owns the process.',
    out: 'A one-page specification per document type.' },
  { n: '03', t: 'Show you a demo on your own documents',
    d: 'An early version of the agent reads the sample, and you see its fields next to your team’s, unsure ones marked. This happens before you sign the build.',
    out: 'A field-by-field accuracy table on your documents, and a fixed price for the build.' },
  { n: '04', t: 'Build the connections and the review queue',
    d: 'We connect the inboxes and folders, build the checks against Xero, MYOB or your ERP using a login with only the access the job needs, and set up the review screen where your team confirms unsure fields.',
    out: 'A working agent in a test environment, documented and in your accounts.' },
  { n: '05', t: 'Test on past documents',
    d: 'The agent runs on a few hundred processed documents. We compare every field with what your team entered, then tighten rules and score bars until the misses are understood.',
    out: 'A test report with accuracy per field and per document type.' },
  { n: '06', t: 'Supervised pilot on live paperwork',
    d: 'Live documents flow through, and a person reviews every draft for an agreed period. As the numbers hold, high-scoring fields move to automatic drafting. Confirming orders stays with people.',
    out: 'Pilot results and a go-live decision that you make.' },
  { n: '07', t: 'Go live with logs and optional support',
    d: 'Every document, field, check and correction is logged. Defects are fixed inside the build price for the agreed cover period. After that, support is your choice, with each change quoted before we start.',
    out: 'A live intake agent you own, with the team that built it on call if you want it.' },
];

/* ─── Related pages (agentdir) ─── */
const RELATED: { h: string; t: string; d: string }[] = [
  { h: '/au/accounts-payable-automation', t: 'Accounts payable automation', d: 'Supplier invoices read, checked against ATO tax invoice rules and drafted as bills in Xero or MYOB.' },
  { h: '/au/sales-order-automation-ai-agents', t: 'Sales order automation', d: 'Emailed customer purchase orders turned into draft sales orders in Xero, MYOB, Cin7 Core or Unleashed.' },
  { h: '/au/ai-agents', t: 'AI agents and automation', d: 'Agents for other repeated jobs across Xero, HubSpot, ServiceM8 and Microsoft 365.' },
  { h: '/au/ai-consulting', t: 'AI consulting', d: 'Not sure which paperwork to start with? A readiness assessment ranks the options.' },
  { h: '/au/ai-development', t: 'AI development', d: 'Larger builds: AI inside your product, custom apps and deeper ERP work.' },
  { h: '/au/ecommerce-development', t: 'Ecommerce development', d: 'B2B and DTC stores connected to the same ERP your orders land in.' },
  { h: US_PAGE, t: 'Document intake agents (US)', d: 'The same service for US businesses, with US platforms and sources.' },
  { h: '/uk/document-intake-ai-agents', t: 'Document intake agents (UK)', d: 'The same service for UK businesses, with UK platforms and sources.' },
];

/* ─── JSON-LD ─── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Document Intake AI Agents for Australian Businesses',
      serviceType:
        'AI document processing, intelligent document processing, document intake agent design and build, field extraction from PDFs, scans and email attachments, checks against Xero, MYOB and ERP records, review queue for unsure fields, filing drafts to business systems, support after launch',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'FactoryJet designs, builds and supports document intake agents for Australian businesses. The agent collects customer purchase orders, delivery dockets, application forms and other paperwork, reads the fields, checks them against the business’s own records and ABN Lookup, sends unsure fields to a person and files drafts in Xero, MYOB, NetSuite, Odoo, Cin7 Core, Unleashed or another ERP. The client owns what is built.',
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
      image: 'https://factoryjet.com/og-default.png',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
      about: { '@id': `${CANONICAL}#service` },
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
  alternates: { canonical: CANONICAL, languages: twinAlternates['document-intake-ai-agents'] },
  openGraph: {
    title: TITLE,
    description:
      'Document intake AI agents for Australian businesses. Customer orders, dockets and forms read, checked against your records and ABN Lookup, and filed as drafts in Xero, MYOB or your ERP. You own it.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'FactoryJet, document intake AI agents for Australian businesses' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'document-intake-ai-agents';

/* H1 split for the Family A hero emphasis. Same string as H1 (schema headline). */
const H1_SPLIT = H1.indexOf(': ');
const H1_LEAD = H1.slice(0, H1_SPLIT + 1);
const H1_EMPHASIS = H1.slice(H1_SPLIT + 2);

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

const HERO_ICONS = [
  'M4 4h10l6 6v10H4zM14 4v6h6',
  'M5 12l4 4 10-10M4 20h16',
  'm8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14',
] as const;

const JOB_ICONS = [
  'M4 6h16v12H4zM4 7l8 6 8-6',
  'M6 4h8l4 4v12H6zM9 12h6M9 16h4',
  'M4 5h16M4 10h10M4 15h12M4 20h8',
  'M12 3 4 7v5c0 5 8 9 8 9s8-4 8-9V7l-8-4Zm-3 9 2 2 4-4',
  'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM12 8v5M12 16h.01',
  'M4 19V5h16v14H4Zm4-10h8M8 13h5',
  'M9 15 15 9M8 11l-2 2a4 4 0 0 0 6 6l2-2M16 13l2-2a4 4 0 0 0-6-6l-2 2',
  'M3 12h4l3 7 4-14 3 7h4',
] as const;
const JOB_SUBJECTS = [
  'AI-generated model: a white inbox tray, a scanner and a phone feeding documents into one small agent block',
  'AI-generated model: a stack of white pages being cut into single documents, each with an orange type label',
  'AI-generated model: a white order form with five fields outlined in orange',
  'AI-generated model: a white order card passing a row of check marks against a small database block',
  'AI-generated model: a white document set aside on a tray with one field highlighted in orange, a small figure reviewing it',
  'AI-generated model: a white draft record sliding into a software window, marked draft',
  'AI-generated model: a white record card with the original page clipped to it',
  'AI-generated model: a white summary sheet with a short orange list of held documents at the top',
] as const;

export default function DocumentIntakeAiAgentsAUPage() {
  return (
    <>
      <script id="ld-au-document-intake-ai-agents" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="au" logoHref="/au" />

      <div className="aiAgentPage auPage auExecutionVisual">
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
        <StickyCtaLabel label="See a demo on my data" title="Demo first" />

        {/* ═══ HERO (copy + inline form left, spec panel right) ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Document Intake AI Agents · Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                Your team still retypes customer purchase orders, delivery dockets and credit applications from PDFs
                and phone photos into Xero, MYOB, NetSuite, Cin7 Core or Unleashed. We build an AI intake agent that
                reads each document, checks it against your own records and ABN Lookup, and files a draft for a person
                to confirm. Working software on your own documents before you sign. Founder replies within 24 hours.
              </p>
              <HeroInlineForm region="au" source="au_document_intake_ai_agents_hero" submitLabel="See a demo on my data" />
            </div>

            <form
              className="specpanel"
              aria-label="What the intake agent does with every document"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="Three stages every document passes through: read from the inbox, checked against the business's own records, then filed as a draft for a person to confirm in Xero, MYOB or the ERP"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · WHAT HAPPENS TO EVERY DOCUMENT</span>
                <span className="sys"><span>XERO</span><span>MYOB</span><span>ERP</span></span>
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
              <ExecutionPath compact />
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what the agent does">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="intake-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[0]} /></svg></span>
                  <span className="idx">orders, dockets, forms, scans</span>
                  <span className="title">Reads the document</span>
                  <span className="tag">Fields</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="intake-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[1]} /></svg></span>
                  <span className="idx">customers, item codes, prices, ABN</span>
                  <span className="title">Checks your records</span>
                  <span className="tag">Matched</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="intake-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[2]} /></svg></span>
                  <span className="idx">in Xero, MYOB or your ERP</span>
                  <span className="title">Files a draft</span>
                  <span className="tag">To a person</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · An order with an unknown item code or an off-list price never becomes a record on its own.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (verified only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: 'In beta', t: 'Xero’s built-in smart document capture for receipts, bills and statements is rolling out in Australia in beta.', s: 'Xero, July 2026', u: SRC_XERO_SDC },
              { v: 'Free', t: 'ABN Lookup web services let software validate an ABN and pre-fill forms after registration.', s: 'Australian Business Register', u: SRC_ABN_WS },
              { v: 'APP 11.3', t: 'Reasonable steps to protect personal information now include technical and organisational measures.', s: 'OAIC, APP 11', u: SRC_OAIC_APP11 },
              { v: 'Peppol', t: 'The ATO is Australia’s Peppol Authority. Peppol eInvoices arrive as structured data, with no page to read.', s: 'OpenPeppol', u: SRC_PEPPOL_AUTH },
            ].map((r) => (
              <div className="ledgercell" key={r.t}>
                <div className="k"><a href={r.u} {...extLink}>{r.s}</a></div>
                <div className="v">
                  <strong className={r.v.length > 8 ? 'ledger-number ledger-long' : 'ledger-number'}>{r.v}</strong>
                  {r.t}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap byline">
          <div className="av">BB</div>
          <div className="who"><b><a href="/about">Bhavesh Barot</a></b>, Founder<br /><span>ERP builds on Odoo, NetSuite, SAP Business One and ERPNext. 500+ businesses served.</span></div>
          <div className="upd">Last updated<br />31 October 2026</div>
        </div>

        {/* ═══ ANSWER-FIRST (GEO) ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What does a document intake agent do for an Australian business?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">A document intake agent reads the paperwork that arrives at your business, such as customer
                    purchase orders, delivery dockets and trade account applications, checks each field against your own
                    records, and files a draft in Xero, MYOB or your ERP for a person to confirm.</span> It is a form of
                    intelligent document processing (IDP). Fields it is unsure of go to a review queue with the original
                    page beside them, so a messy scan slows down instead of turning into a wrong record. FactoryJet builds
                    custom document intake agents for Australian wholesalers, manufacturers, freight firms and trade
                    suppliers, filing into Xero, MYOB, NetSuite, Odoo, Cin7 Core or Unleashed.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Four terms on this page</div>
                    <p>
                      <b>OCR</b> turns a picture of text into text. <b>Intelligent document processing</b> (IDP) works out
                      what that text means and which field it belongs in. A <b>review queue</b> is the screen where a person
                      confirms what the agent was unsure of. A <b>draft</b> is a record created in your system but not yet
                      confirmed, so nothing ships, bills or opens until someone says yes.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    Supplier invoices are their own job, with ATO tax invoice checks and approval routing, and we cover
                    them on our <a href="/au/accounts-payable-automation">accounts payable automation</a> page, which is
                    also where invoice OCR for supplier bills lives. This page
                    is about the rest of the pile: the orders, dockets, forms and certificates that never fit a bookkeeping
                    app, and usually end up retyped by the most experienced person in the office.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto"
                subject="An Adelaide bookkeeper comparing a paper document with the draft record an AI agent prepared on his second monitor">
                <img src="/images/au/visual-pass-2026-10-03/ai-agents/platforms-1200.webp" srcSet="/images/au/visual-pass-2026-10-03/ai-agents/platforms-640.webp 640w, /images/au/visual-pass-2026-10-03/ai-agents/platforms-1200.webp 1200w" sizes="(max-width: 820px) calc(100vw - 40px), 480px" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of an Adelaide bookkeeper comparing a paper document with the draft record an AI agent prepared on his second monitor" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ WHAT THE AGENT DOES → capgrid ═══ */}
        <section className="section capabilities" id="what-you-get">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The job, step by step</div>
              <h2>Eight things the intake agent does with every document</h2>
              <p className="lead">
                Reading the page is one step of eight. The checks and the review queue are what make the output safe to
                file.
              </p>
            </div>
            <div className="capgrid">
              {AGENT_JOBS.map((j, i) => (
                <div key={j.n} className={`cap cap-${i + 1}`}>
                  <div className="caphead"><span className="capid">CAP‑{j.n}</span><svg {...CAP_ICON}><path d={JOB_ICONS[i]} /></svg></div>
                  <VisualSlot src={null} page={PAGE_KEY} slot={`capability-${j.n}`} kind="diagram" ratio="11:4" className="cap-diagram" subject={JOB_SUBJECTS[i]}><ExecutionJobDiagram index={i} /></VisualSlot>
                  <h3>{j.t}</h3>
                  <p>{j.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ DOCUMENTS BY INDUSTRY → facts ═══ */}
        <section className="section facts au-top" id="industries">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Documents we are asked about</div>
              <h2>Which paperwork Australian businesses hand to an intake agent first</h2>
              <p className="lead">
                The best first document is the one that arrives often, in many layouts, and gets typed into the same
                system every time. These are the ones we hear about most from established Australian businesses.
              </p>
            </div>
            <div className="factswrap">
              <div className="factlist">
                {INDUSTRIES.map((c, i) => (
                  <div className="fact" key={c.t}>
                    <div className="sec">§{String(i + 1).padStart(2, '0')}</div>
                    <div>
                      <h3>{c.t}</h3>
                      <p>{c.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-2" src={null} kind="photo" ratio="3:2" className="factphoto"
                subject="A warehouse supervisor in a Sydney distribution centre checking a signed delivery docket against the order on a tablet" />
            </div>
          </div>
        </section>

        {/* ═══ INTEGRATIONS → platform rows ═══ */}
        <section className="section platforms" id="integrations">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">Where the agent files</div>
                <h2>Built into Xero, MYOB, NetSuite, Odoo, Cin7 Core and the ERP you already run</h2>
                <p className="lead">
                  The agent works through each system’s official connection, with its own login and only the access the
                  job needs. You do not change software to use it, and if a system offers no way in, the agent prepares
                  the record for a person instead of guessing.
                </p>
              </div>
              <VisualSlot page={PAGE_KEY} slot="platforms" src={null} kind="diagram" ratio="3:2"
                subject="AI-generated model: one small agent block joined by orange cables to white tiles for an accounting system, an ERP, an inventory system and an inbox" />
            </div>
            <div className="platlist" role="list">
              {INTEGRATIONS.map((c, i) => (
                <div key={c.t} className="plat plat-2col" role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{c.t}</h3></div>
                  <p className="plat-build">{c.d}</p>
                </div>
              ))}
            </div>
            <p className="sub-note">
              MYOB facts from the <a href={SRC_MYOB_API} {...extLink}>MYOB Business API overview</a> and{' '}
              <a href={SRC_MYOB_ORDER} {...extLink}>Sale Order reference</a>; Xero capture facts from{' '}
              <a href={SRC_XERO_SDC} {...extLink}>Xero’s smart document capture post</a>; ABN checks from{' '}
              <a href={SRC_ABN_WS} {...extLink}>ABN Lookup web services</a>. All read on 29 October 2026.
            </p>
          </div>
        </section>

        {/* ═══ REVIEW QUEUE → facts with approval split rows ═══ */}
        <section className="section facts au-top" id="approval">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Human in the loop</div>
              <h2>The agent drafts. Your people confirm orders, accounts and anything unusual.</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Every field the agent reads carries a confidence score, and every document type has a bar for each field.
                  A PO number on a clean typed order clears it easily. A quantity scrawled on a faxed order pad may not. Below
                  the bar, the document waits in the review queue with the field highlighted on the original page.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  Scores are half the safety net. The other half is checks against your records: an unknown customer, a
                  discontinued item code, a price outside the customer’s list, a delivery address that does not match the
                  account, or an ABN that does not match ABN Lookup. Any failed check holds the document, however confident
                  the reading was.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  Corrections are logged with who made them, so after a few weeks you can see exactly which customers,
                  layouts and fields cause the misses. That record is what lets you move a field to automatic drafting with
                  evidence rather than hope.
                </p></div>
                <div className="fact"><div className="sec">§04</div><div>
                  <div className="factlabel">A typical split</div>
                  <ul className="trigrows">
                    <li><span className="m">Sorting and splitting documents</span><span className="n">type labels, page splits</span><span className="t">Automatic</span></li>
                    <li><span className="m">High-scoring fields that pass every check</span><span className="n">drafted, or held for approval where there is no draft state (MYOB)</span><span className="t">Draft only</span></li>
                    <li><span className="m">Low scores or failed checks</span><span className="n">review queue, original page attached</span><span className="t">Review</span></li>
                    <li><span className="m">Confirming orders, opening credit accounts</span><span className="n">stock, credit, money</span><span className="t">Always a person</span></li>
                    <li><span className="m">Deleting records, changing prices</span><span className="n">outside the agent’s job</span><span className="t">Never</span></li>
                  </ul>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-3" src={null} kind="photo" ratio="3:2" className="factphoto"
                subject="A Brisbane customer service lead confirming a held purchase order in a review queue, the original PDF open beside the draft" />
            </div>
          </div>
        </section>

        {/* ═══ PHOTOBREAK ═══ */}
        <VisualSlot page={PAGE_KEY} slot="photobreak" kind="illustration" ratio="12:5" className="photobreak"
          subject="AI-generated model: a document record moving from inbox to rule-based draft to a person's approval to a logged record" src={null}><ExecutionPath /></VisualSlot>

        {/* ═══ PROJECT STEPS → process timeline ═══ */}
        <section className="section process" id="how-we-build">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How a project runs</div>
                <h2>A document intake project in seven steps, demo before contract</h2>
                <p className="lead">
                  Open any step to see what happens and what you hold at the end of it. Each phase is scoped, priced and
                  signed on its own, so you can stop after any of them.
                </p>
              </div>
              <VisualSlot page={PAGE_KEY} slot="process" src="/images/au/visual-pass-2026-10-03/accounts-payable-automation/process-1280.webp" srcSet="/images/au/visual-pass-2026-10-03/accounts-payable-automation/process-640.webp 640w, /images/au/visual-pass-2026-10-03/accounts-payable-automation/process-1280.webp 1280w" sizes="(max-width: 820px) calc(100vw - 40px), (max-width: 1080px) 40vw, 480px" kind="photo" ratio="3:2"
                subject="A warehouse supervisor in hi-vis workwear and a bookkeeper at an Australian trade supplier sorting printed documents into piles by type on a meeting table, laptop screen facing them, no readable text or logos"
                imageAlt="A warehouse supervisor and a bookkeeper at an Australian trade supplier sorting printed documents into piles by type" />
            </div>
            <div className="timeline timeline-4">
              {BUILD_STEPS.map((s) => (
                <details key={s.n} className="tnode">
                  <summary>
                    <div className="idx">{s.n}</div>
                    <h3>{s.t}<span className="chev" aria-hidden="true">+</span></h3>
                  </summary>
                  <p>{s.d}</p>
                  <p><b>You get:</b> {s.out}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline={'Send ten of your messiest documents and watch the agent read them'}
            sub={'Tell us which paperwork your team retypes and where it ends up. The demo runs on your own documents before you sign anything.'}
            label={'See a demo on my data'}
            note={''}
          />
        </div>

        {/* ═══ TERMS + BRIEF ASK → numbered list + panel ═══ */}
        <section className="section au-top" id="terms">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Terms</div>
              <h2>What terms apply, and what should you send for a quote?</h2>
              <p className="lead">
                These terms apply to every intake build. If you have a brief or an RFP, send it as it is. If you do not,
                the list on the right is all we need to scope the job and price it.
              </p>
            </div>
            <div className="au-split">
              <div>
                <ol className="au-numlist">
                  <li><span><b>Demo on your data before you sign.</b></span></li>
                  <li><span><b>Fixed price per phase,</b> quoted in writing. You can stop after any phase.</span></li>
                  <li><span><b>You own it from day one:</b> code, rules, test documents and logs.</span></li>
                  <li><span><b>Your AI and hosting accounts,</b> at cost, with no markup.</span></li>
                  <li><span><b>Defect cover inside the build price.</b></span></li>
                  <li><span><b>Changes quoted and approved per request,</b> with no monthly minimum.</span></li>
                </ol>
                <ModalCTAButton label="Send us your brief" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" style={{ background: '#C2440F' }} />
              </div>
              <div className="au-panel">
                <div className="eyebrow">What to put in a brief or RFP</div>
                <ul className="trigrows">
                  <li><span className="m">Which documents arrive</span><span className="t">Types</span></li>
                  <li><span className="m">Roughly how many a week</span><span className="t">Volume</span></li>
                  <li><span className="m">Where they arrive: inbox, portal, scanner</span><span className="t">Source</span></li>
                  <li><span className="m">Which system they must end up in</span><span className="t">Target</span></li>
                  <li><span className="m">Who checks them today, and how</span><span className="t">Review</span></li>
                  <li><span className="m">Five to ten real examples, redacted if you like</span><span className="t">Sample</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ COMPARISON TABLE ═══ */}
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head head-stack">
              <div className="eyebrow">Side by side</div>
              <h2>Built-in capture vs an intelligent document processing (IDP) platform vs a custom intake agent</h2>
              <p className="lead">
                Each one is the right answer for someone. Rent first when your documents are bookkeeping paperwork. Build
                when the documents, the checks or the destination are particular to your business.
              </p>
            </div>
            <p className="md:hidden" style={{ marginTop: 24, fontSize: 13, color: 'var(--body)' }}>Swipe sideways to see every column.</p>
            <div className="tablewrap" tabIndex={0} role="region" aria-label="Scrollable comparison table" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table style={{ minWidth: 1060 }}>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">Custom intake agent (FactoryJet)</th>
                    <th>Capture built into your accounting app</th>
                    <th>Rented IDP platform</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Best fit</th><td className="fj">Orders, dockets and forms that go into an ERP or inventory system</td><td>Receipts, bills and statements for bookkeeping</td><td>High volume of one standard document type</td></tr>
                  <tr><th scope="row">Checks against your own records</th><td className="fj">Customers, item codes, price lists, ABN Lookup</td><td>Duplicate and transaction matching</td><td>Usually, after you configure it</td></tr>
                  <tr><th scope="row">Destination systems</th><td className="fj">Xero, MYOB, NetSuite, Odoo, Cin7 Core, Unleashed or your own</td><td>That accounting app</td><td>The platform’s list of connectors</td></tr>
                  <tr><th scope="row">Review queue</th><td className="fj">Designed around your team and rules</td><td>The app’s own review screen</td><td>The platform’s screen</td></tr>
                  <tr><th scope="row">Time to start</th><td className="fj">A demo on your documents, then a scoped build</td><td>Same day</td><td>Days to weeks of setup</td></tr>
                  <tr><th scope="row">Who owns it</th><td className="fj">You: code, rules and logs</td><td>You subscribe</td><td>You subscribe</td></tr>
                  <tr><th scope="row">Who supports it</th><td className="fj">The team that built it, if you choose</td><td>The vendor’s help desk</td><td>The vendor, plus whoever set it up</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Built-in capture example: <a href={SRC_XERO_SDC} {...extLink}>Xero smart document capture</a>. Rented IDP
              platform examples: <a href={SRC_ABBYY} {...extLink}>ABBYY Vantage</a> and{' '}
              <a href={SRC_NANONETS} {...extLink}>Nanonets</a>.
            </p>
          </div>
        </section>

        {/* ═══ OCR SOFTWARE VS CLOUD AI VS AGENT ═══ */}
        <section className="section au-top" id="ocr-vs-agent">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Reading is one layer</div>
              <h2>OCR software, Google Document AI or a custom intake agent: which do you need?</h2>
            </div>
            <div className="au-prose" style={{ maxWidth: 760 }}>
              <p>
                Plain OCR software turns a scan into searchable text. That suits an archive of old dockets you want to
                search by PO number. It cannot tell you which number on the page is the PO number.
              </p>
              <p>
                The cloud services add AI OCR on top. AWS says <a href={SRC_TEXTRACT} {...extLink}>Amazon Textract</a>{' '}
                extracts printed text, handwriting, layout elements and data from documents. Google lists OCR and a Form
                Parser inside <a href={SRC_GOOGLE_DOCAI} {...extLink}>Document AI</a>. Microsoft describes{' '}
                <a href={SRC_AZURE_DI} {...extLink}>Azure AI Document Intelligence</a> as an OCR and intelligent document
                processing service. All three are building blocks for developers. None of them knows your customers,
                item codes or price lists.
              </p>
              <p>
                A custom intake agent uses one of these readers for the PDF data extraction step. It then adds the part
                that belongs to your business: checks against your own records, a review queue built around your team,
                and a draft in Xero, MYOB or your ERP. We test two or three readers on a batch of your documents and pick
                one on measured field accuracy.
              </p>
              <p>
                Invoice OCR for supplier bills is covered on our{' '}
                <a href="/au/accounts-payable-automation">accounts payable automation</a> page. Vendor descriptions on this
                page were read on 31 October 2026.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ FIT CHECK → vlog ═══ */}
        <section className="vlog" id="fit-check">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Which option fits you</div>
              <h2>Do you need a custom intake agent at all?</h2>
              <p>
                Open the description closest to your situation. Sometimes the answer is a tool you already pay for.
              </p>
              <VisualSlot page={PAGE_KEY} slot="proof" src={null} kind="illustration" ratio="3:2"
                subject="AI-generated model: four white signposts at a fork, one orange sign pointing to the right kind of document help" />
            </div>
            <div className="ventries">
              <details className="ventry">
                <summary><h3>Our pile is mostly receipts and supplier bills for Xero</h3><span className="chev" aria-hidden="true">+</span></summary>
                <p><b>Try built-in capture first.</b> Xero’s smart document capture, Hubdoc or Dext may cover it. If you also need approval routing and tax invoice checks, see our <a href="/au/accounts-payable-automation">accounts payable automation</a> service.</p>
              </details>
              <details className="ventry">
                <summary><h3>Customers email us purchase orders in every layout imaginable</h3><span className="chev" aria-hidden="true">+</span></summary>
                <p><b>This is what an intake agent is for.</b> Varied layouts, checks against item codes and price lists, and a sales order ready for approval in MYOB, NetSuite, Cin7 Core or Unleashed. This page is the right place.</p>
              </details>
              <details className="ventry">
                <summary><h3>Most of our orders already arrive through EDI or a marketplace connector</h3><span className="chev" aria-hidden="true">+</span></summary>
                <p><b>Keep what works.</b> Structured feeds need no reading. An intake agent only earns its place on the documents that still arrive as PDFs, emails and scans alongside them.</p>
              </details>
              <details className="ventry">
                <summary><h3>We are not sure which paperwork costs us the most time</h3><span className="chev" aria-hidden="true">+</span></summary>
                <p><b>Start with advice.</b> Our <a href="/au/ai-consulting">AI consulting service in Australia</a> maps where the hours go and ranks the options before anything is built.</p>
              </details>
            </div>
          </div>
        </section>

        {/* ═══ PRIVACY ═══ */}
        <section className="section facts" id="privacy">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Privacy Act, APPs and OAIC guidance</div>
              <h2>Application forms and delivery details are personal information. The build plans for that.</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Trade account applications carry directors’ names and addresses. Orders from sole traders and delivery
                  dockets carry names, phone numbers and home addresses. If your business is covered by the Privacy Act 1988,
                  the Australian Privacy Principles apply to all of it, including while an AI model reads it.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  APP 11 asks for reasonable steps to protect personal information, and to destroy or de-identify it once
                  it is no longer needed. Since the 2024 amendment, APP 11.3 says those steps are both technical and
                  organisational. The privacy questions in the FAQ below set out what that means for an intake agent.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <p>
                    If a document is sent to an AI model hosted overseas, that is usually a disclosure under APP 8: reasonable steps first, and your
                    business stays accountable for what the overseas recipient does under section 16C. The OAIC’s AI
                    guidance also warns against treating AI products as set and forget.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_OAIC_APP11} {...extLink}>OAIC, APP 11 guidelines</a>;{' '}
                    <a href={SRC_OAIC_APP8} {...extLink}>OAIC, APP 8 guidelines</a>;{' '}
                    <a href={SRC_OAIC_AI} {...extLink}>OAIC, privacy and commercially available AI products</a>.
                    This is general information, not legal advice.
                  </p>
                </div></div>
                <div className="fact"><div className="sec">§04</div><div>
                  <div className="factlabel">What that means in each build</div>
                  <ul className="trigrows">
                    <li><span className="m">Only the pages and fields it needs</span><span className="n">the rest masked before the model sees it</span><span className="t">APP 11</span></li>
                    <li><span className="m">Encryption and named access</span><span className="n">technical and organisational steps, written</span><span className="t">APP 11.3</span></li>
                    <li><span className="m">Deletion schedule for copies</span><span className="n">originals stay in your system</span><span className="t">APP 11</span></li>
                    <li><span className="m">Where each document is processed</span><span className="n">Australian regions where available</span><span className="t">APP 8</span></li>
                    <li><span className="m">Business AI terms</span><span className="n">no training on your documents</span><span className="t">OAIC</span></li>
                  </ul>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-4" src={null} kind="photo" ratio="3:2" className="factphoto"
                subject="Two colleagues in a Canberra meeting room marking which fields on a printed application form the AI agent may read" />
            </div>
          </div>
        </section>

        {/* ═══ COST (market ranges only) ═══ */}
        <section className="section au-top" id="cost">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Scope, not packages</div>
              <h2>How much does AI document processing cost in Australia?</h2>
              <p className="lead">
                <a href={SRC_FLOWTIVITY} {...extLink}>Flowtivity’s March 2026 Australian guide</a> puts document processing
                and data entry builds at A$12,000 to A$30,000, taking 4 to 8 weeks. That is a market range, not our price,
                and the cost question in the FAQ adds a second guide and the GST caveat. FactoryJet quotes a fixed price
                per phase in writing after a short scoping call.
              </p>
            </div>
            <div className="au-split">
              <div>
                <ol className="au-numlist">
                  <li><span><b>Demo and scoping.</b> We read a batch of your documents, show you the results and write a fixed-price plan.</span></li>
                  <li><span><b>One document type, one system.</b> For example, customer purchase orders into MYOB or NetSuite as sales orders held for approval.</span></li>
                  <li><span><b>Several document types.</b> Orders, dockets and applications sharing one review queue, one log and one set of privacy controls.</span></li>
                  <li><span><b>Optional support.</b> Changes quoted and approved one at a time, with no monthly minimum.</span></li>
                </ol>
                <ModalCTAButton label="See a demo on my data" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" style={{ background: '#C2440F' }} />
              </div>
              <div className="au-panel">
                <div className="eyebrow">What moves the scope</div>
                <ul className="trigrows">
                  <li><span className="m">Number of document types</span><span className="t">Breadth</span></li>
                  <li><span className="m">Handwriting and poor scans</span><span className="t">Reading</span></li>
                  <li><span className="m">Checks against your records</span><span className="t">Rules</span></li>
                  <li><span className="m">Systems to file into</span><span className="t">Reach</span></li>
                  <li><span className="m">Sensitive information in the documents</span><span className="t">Privacy</span></li>
                  <li><span className="m">AI and hosting accounts</span><span className="t">Yours, at cost</span></li>
                  <li><span className="m">Support after launch</span><span className="t">Optional</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ EXPERIENCE (global, platform-matched) → prose + list ═══ */}
        <section className="section au-top" id="experience">
          <div className="wrap au-split">
            <div className="au-prose">
              <div className="eyebrow">Work we have done</div>
              <h2>What ERP and document work has FactoryJet done?</h2>
              <p>
                Our ERP projects on Odoo, NetSuite, SAP Business One, ERPNext and custom systems have included RFQ
                automation, daily bookkeeping, and purchase and sales orders raised by software. Every one of them hinged on
                paperwork. A supplier quote request or a customer’s order had to be read correctly before the ERP could act on it.
              </p>
              <p>
                We build Xero and HubSpot integrations. For Sow Easy we built a WooCommerce to Odoo integration, tested
                against Odoo’s staging system, with launch still ahead. FactoryJet has served more than 500 businesses.
              </p>
              <p>
                The same service for US businesses, with US platforms and sources, is on our{' '}
                <a href={US_PAGE}>document intake AI agents</a> page.
              </p>
            </div>
            <div className="au-panel">
              <div className="eyebrow">Platforms we have built on</div>
              <ul className="trigrows">
                <li><span className="m">Odoo</span><span className="t">ERP</span></li>
                <li><span className="m">NetSuite</span><span className="t">ERP</span></li>
                <li><span className="m">SAP Business One</span><span className="t">ERP</span></li>
                <li><span className="m">ERPNext and custom ERPs</span><span className="t">ERP</span></li>
                <li><span className="m">Xero</span><span className="t">Integrations</span></li>
                <li><span className="m">HubSpot</span><span className="t">Integrations</span></li>
                <li><span className="m">WooCommerce to Odoo (Sow Easy)</span><span className="t">Integration</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ WORKED EXAMPLE → definition module ═══ */}
        <section className="definition" id="worked-example">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition" kind="photo" ratio="3:2" className="definition-image"
              subject="A customer service team member in a back office working through an order inbox an AI agent has already sorted">
              <img src="/images/au/ai-agents/ai-agents-orders.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of a customer service team member in a back office, working through an order inbox an AI agent has already sorted" />
            </VisualSlot>
          </div>
          <div className="definition-copy">
            <div className="eyebrow">What good looks like</div>
            <h2>A worked example: purchase orders at a Victorian hardware wholesaler</h2>
            <p>
              This is an illustration of the kind of build we do, not a client case study.
            </p>
            <p>
              A wholesaler supplies independent hardware stores across Victoria and southern New South Wales. Orders come
              by email as PDFs from store systems, as spreadsheets, and as phone photos of a handwritten order pad. Two
              people in customer service key them into MYOB as sale orders each morning, and both know which store uses
              old item codes.
            </p>
            <p>
              The agent reads each order, maps old codes to current ones from a table the team keeps, checks every price
              against the store’s price list and prepares the sale order. Orders that pass every check go on one approval
              list. Orders from new stores, codes it cannot map, and prices off the list wait in the review queue with the
              original page attached. MYOB has no draft status, so nothing is created there until a person approves it.
            </p>
            <p>
              The two coordinators start the day approving the checked list, which the agent then creates in MYOB as Open,
              then work through the held orders and call the stores that need a call. They still own every customer relationship. What changes is how much of the morning goes on typing.
            </p>
          </div>
        </section>

        {/* ═══ RELATED → agentdir ═══ */}
        <section className="section agentdir" id="related">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Related services</div>
              <h2>Which other FactoryJet service fits your paperwork?</h2>
            </div>
            <div className="agentdir-group">
              <div className="agentdir-label">
                <h3>Related services</h3>
                <span className="mono agentdir-count">{RELATED.length} pages</span>
              </div>
              <ul className="agentdir-grid au-grid-2">
                {RELATED.map((c) => (
                  <li key={c.h}>
                    <a href={c.h}>
                      <span className="agentdir-t">{c.t}</span>
                      <span className="agentdir-l">{c.d}</span>
                      <span className="agentdir-go" aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ FAQ (same FAQ_ITEMS array as the FAQPage JSON-LD) ═══ */}
        <AuFaq
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          heading="AI document processing: questions Australian businesses ask"
          askLabel="Still have a question? Ask the founder →"
        />

        {/* ═══ SOURCES → references ═══ */}
        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">Sources</div>
            <div className="refs">
              <a href={SRC_XERO_SDC} {...extLink}>Xero, smart document capture</a>
              <a href={SRC_MYOB_API} {...extLink}>MYOB Business API overview</a>
              <a href={SRC_MYOB_ORDER} {...extLink}>MYOB Business API, Sale Order</a>
              <a href={SRC_ABN_WS} {...extLink}>ABN Lookup web services</a>
              <a href={SRC_PEPPOL_AUTH} {...extLink}>OpenPeppol, Peppol Authorities</a>
              <a href={SRC_OAIC_APP11} {...extLink}>OAIC, APP 11 guidelines</a>
              <a href={SRC_OAIC_APP8} {...extLink}>OAIC, APP 8 guidelines</a>
              <a href={SRC_OAIC_AI} {...extLink}>OAIC, privacy and AI products</a>
              <a href={SRC_FLOWTIVITY} {...extLink}>Flowtivity, Australian AI agent pricing</a>
              <a href={SRC_WVD} {...extLink}>Web Video Digital, AI agent cost</a>
              <a href={SRC_TEXTRACT} {...extLink}>Amazon Textract</a>
              <a href={SRC_GOOGLE_DOCAI} {...extLink}>Google Document AI overview</a>
              <a href={SRC_AZURE_DI} {...extLink}>Azure AI Document Intelligence overview</a>
              <a href={SRC_XERO_PLANS} {...extLink}>Xero, smart document capture plans</a>
              <a href={SRC_DEXT} {...extLink}>Dext Australia</a>
              <a href={SRC_ABBYY} {...extLink}>ABBYY Vantage</a>
              <a href={SRC_NANONETS} {...extLink}>Nanonets</a>
              <span aria-hidden="true" />
            </div>
            <style>{'.aiAgentPage #references .refs { grid-template-columns: repeat(2, minmax(0, 1fr)); } @media (max-width: 820px) { .aiAgentPage #references .refs { grid-template-columns: 1fr; } }'}</style>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>See the agent read your own orders, dockets and forms</h2>
              <p>
                Send your name and work email. The founder replies within 24 hours to arrange a demo on a batch of your
                documents and a short call about the system they need to end up in. No spam, no obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="See a demo on my data" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" style={{ background: '#C2440F' }} />
              <a className="btn btn-ghost" href="/au/accounts-payable-automation">Supplier invoices instead</a>
            </div>
          </div>
        </section>

      </main>
      </div>

      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} />
    </>
  );
}
