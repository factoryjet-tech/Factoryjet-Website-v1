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

/* ─────────────────────────────────────────────────────────────────────────────
   /services/document-intake-ai-agents, built 2026-10-11.

   Why this page exists: US monthly searches (DataForSEO, location 2840):
   "ai document processing" 1,900 (KD 29), "document automation" 390,
   "ai document review" 260, "data entry automation" 210, "document
   processing automation" 170, "ai document management" 170, "ai data entry"
   110, "ai document automation" 90, "ai intake" 70. The only FactoryJet page
   that spoke about intake was /services/legal-ai-agents, which is for law
   firms.

   Most of that demand is people shopping for software. FactoryJet is a
   services company, so the hero, the short answer and one whole section say
   that we build and support the agent on the buyer's own documents and
   systems, and say when renting a product is the better choice.

   Truth rules for anyone editing this file:
   1. Every third-party fact (file limits, features, list prices, data
     policies) was read on that party's own page on 2026-10-11 and links to
     it through the SRC map below. The ledger with the quoted words is in the
     build notes (sources.json). Two pages we wanted did not open to a plain
     request (OpenAI's enterprise privacy page and Google's Gemini API
     document guide), so nothing from them is used.
   2. No FactoryJet prices. The dollar figures are (a) list prices of named
     rented products from each maker's own page and (b) two market ranges
     for a BUILD inside one FAQ answer (Layer3 Labs, ProductCrafters).
   3. Rule of 2026-10-11 (Bhavesh): no figure for running or looking after a
     custom agent appears here. The three cloud reading services are
     described by what they take and what they return, with no price. Care
     after launch is described only as: build and ongoing support quoted as
     fixed prices in writing, and FactoryJet can keep managing the servers, the
     AI models, the API connections and the maintenance.
   4. Nothing here says where the FactoryJet team is or is not.
   5. No delivery time is promised. The one timeline on the page is Layer3
     Labs' published market figure, named as theirs.
   6. The experience claim is Bhavesh's own statement of 2026-10-09 (Odoo,
     NetSuite, SAP Business One, ERPNext and custom ERPs; RFQ automation,
     daily bookkeeping, purchase and sales order generation) plus Xero and
     HubSpot integrations, confirmed 2026-10-11. No client is named and no
     result is claimed. No standard, law or audit status is claimed for
     FactoryJet or its work.
   7. The ten products restate each maker's own page. We sell none of them.
   8. Mirrors /services/accounts-payable-automation for components, props and
     schema. No sentence, FAQ, table row or heading is reused from it.

   Schema: WebPage + Service + FAQPage + ItemList + BreadcrumbList.
   Organization is rendered once sitewide by src/app/layout.tsx and referenced
   here by @id. The FAQPage mainEntity is generated from the exact FAQ_ITEMS
   array the visible <FAQ> component renders. There is no second array.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/document-intake-ai-agents';
const PAGE_TITLE = 'AI Document Processing Agents Built for You | FactoryJet';
const PAGE_DESC =
  'FactoryJet designs, builds and supports a document intake agent that reads your PDFs, scans and email attachments, checks each field and files the result.';
const PAGE_PUBLISHED = '2026-10-11';
const PAGE_MODIFIED = '2026-10-11';
const CHECKED_ON = '11 Oct 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/document-intake-ai-agents';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'ai document processing',
    'ai document processing services',
    'document automation',
    'ai document automation',
    'document processing automation',
    'ai document review',
    'legal document review ai',
    'data entry automation',
    'ai data entry',
    'ai document management',
    'ai intake',
    'document intake automation',
    'document intake ai agent',
    'intelligent document processing',
    'ai document extraction',
    'custom document processing agent',
  ],
  alternates: {
    canonical: CANONICAL_URL,
    languages: twinAlternates['document-intake-ai-agents'],
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
        alt: 'FactoryJet, AI document processing built as an intake agent on your own documents and systems',
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
  { name: 'Document Intake AI Agents', url: CANONICAL_URL },
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
  name: 'Document Intake AI Agents',
  serviceType:
    'AI document processing, document intake agent design and build, document sorting and splitting, field extraction from PDFs, scans and email attachments, checks against a system of record, review queue for unsure fields, filing to ERP and business systems, support after launch',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    "FactoryJet designs, builds, tests and supports a document intake agent on the client's own documents and systems. The agent collects inbound PDFs, scans and email attachments such as orders, invoices, forms, claims and applications. It sorts them, reads the fields, checks them against the client's system of record, sends unsure fields to a person and files the result. Decisions stay with the client's people. The client owns what is built.",
  url: CANONICAL_URL,
};

/* ── Sources. One map, used by every inline source link (the `short` label) AND
   by the visible "Sources" list near the foot of the page (the full `label`).
   Each URL was opened on 2026-10-11 and the supporting sentence read before the
   claim was written. The ledger with the quoted words is in the build notes. ── */
const AWS_DOCS = 'https://docs.aws.amazon.com/textract/latest/dg';
const GDOC = 'https://docs.cloud.google.com/document-ai';
const AZ_DI = 'https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence';
const AZ_RAI = 'https://learn.microsoft.com/en-us/azure/foundry/responsible-ai';

const SRC = {
  textractLimits: {
    short: 'AWS: Textract set quotas',
    label: 'Amazon Web Services: Set Quotas in Amazon Textract (file formats, sizes, languages, handwriting)',
    url: `${AWS_DOCS}/limits-document.html`,
  },
  textractBest: {
    short: 'AWS: Textract best practices',
    label: 'Amazon Web Services: Amazon Textract Best Practices (input quality and confidence scores)',
    url: `${AWS_DOCS}/textract-best-practices.html`,
  },
  textractLending: {
    short: 'AWS: Analyze Lending',
    label: 'Amazon Web Services: Amazon Textract, Analyzing Lending Documents',
    url: `${AWS_DOCS}/lending-document-classification-extraction.html`,
  },
  textractFaq: {
    short: 'AWS: Textract FAQs, data privacy',
    label: 'Amazon Web Services: Amazon Textract FAQs (data privacy section)',
    url: 'https://aws.amazon.com/textract/faqs/',
  },
  gdocLimits: {
    short: 'Google Cloud: Document AI limits',
    label: 'Google Cloud: Document AI Limits (file size and pages per processor)',
    url: `${GDOC}/limits`,
  },
  gdocOcr: {
    short: 'Google Cloud: Enterprise Document OCR',
    label: 'Google Cloud: Document AI, Enterprise Document OCR',
    url: `${GDOC}/docs/enterprise-document-ocr`,
  },
  gdocSplitters: {
    short: 'Google Cloud: splitters behavior',
    label: 'Google Cloud: Document AI, Document splitters behavior',
    url: `${GDOC}/docs/splitters`,
  },
  gdocDeprecations: {
    short: 'Google Cloud: Document AI deprecations',
    label: 'Google Cloud: Document AI deprecations (Human in the Loop)',
    url: `${GDOC}/docs/deprecation`,
  },
  azureLimits: {
    short: 'Microsoft: Document Intelligence limits',
    label: 'Microsoft Learn: Document Intelligence, Service quotas and limits',
    url: `${AZ_DI}/service-limits`,
  },
  azureRead: {
    short: 'Microsoft: Read model',
    label: 'Microsoft Learn: Document Intelligence, Read model OCR data extraction',
    url: `${AZ_DI}/prebuilt/read`,
  },
  azureConfidence: {
    short: 'Microsoft: accuracy and confidence scores',
    label: 'Microsoft Learn: Interpret and improve model accuracy and confidence scores',
    url: `${AZ_DI}/concept/accuracy-confidence`,
  },
  azureClassifier: {
    short: 'Microsoft: custom classification model',
    label: 'Microsoft Learn: Document Intelligence, Custom classification model',
    url: `${AZ_DI}/train/custom-classifier`,
  },
  azurePrivacy: {
    short: 'Microsoft: Document Intelligence data and privacy',
    label: 'Microsoft Learn: Data, privacy, and security for Document Intelligence',
    url: `${AZ_RAI}/document-intelligence/data-privacy-security`,
  },
  azureModelsData: {
    short: 'Microsoft: data and privacy for Azure-sold models',
    label: 'Microsoft Learn: Data, privacy, and security for Foundry Models sold by Azure',
    url: `${AZ_RAI}/openai/data-privacy`,
  },
  claudePdf: {
    short: 'Anthropic: PDF support',
    label: 'Anthropic: Claude Platform Docs, PDF support',
    url: 'https://platform.claude.com/docs/en/build-with-claude/pdf-support',
  },
  openaiFiles: {
    short: 'OpenAI: file inputs',
    label: 'OpenAI: API guide, File inputs',
    url: 'https://developers.openai.com/api/docs/guides/file-inputs',
  },
  openaiData: {
    short: 'OpenAI: data controls',
    label: 'OpenAI: Data controls in the OpenAI platform',
    url: 'https://developers.openai.com/api/docs/guides/your-data',
  },
  anthropicTraining: {
    short: 'Anthropic: is my data used for training',
    label: 'Anthropic Privacy Center: Is my data used for model training? (commercial products)',
    url: 'https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training',
  },
  anthropicRetention: {
    short: 'Anthropic: how long data is stored',
    label: "Anthropic Privacy Center: How long do you store my organization's data?",
    url: 'https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data',
  },
  googleRetention: {
    short: 'Google Cloud: training restriction',
    label: 'Google Cloud: Gemini Enterprise Agent Platform and zero data retention',
    url: 'https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/zero-data-retention',
  },
  gmailAttachments: {
    short: 'Google: Gmail attachment limits',
    label: 'Gmail Help: Send attachments with your Gmail message',
    url: 'https://support.google.com/mail/answer/6584',
  },
  parseur: {
    short: 'Parseur: pricing',
    label: 'Parseur: Simple volume-based pricing',
    url: 'https://parseur.com/pricing',
  },
  docparser: {
    short: 'Docparser: pricing',
    label: 'Docparser: Pricing Plans and Packages',
    url: 'https://docparser.com/pricing/',
  },
  nanonets: {
    short: 'Nanonets: pricing',
    label: 'Nanonets: Pricing',
    url: 'https://nanonets.com/pricing',
  },
  docsumo: {
    short: 'Docsumo: pricing',
    label: 'Docsumo: Pricing and Plans',
    url: 'https://www.docsumo.com/pricing',
  },
  extend: {
    short: 'Extend: pricing',
    label: 'Extend: Pricing',
    url: 'https://www.extend.ai/pricing',
  },
  landing: {
    short: 'LandingAI: pricing',
    label: 'LandingAI: Agentic APIs Pricing (Agentic Document Extraction)',
    url: 'https://landing.ai/pricing-agentic-apis',
  },
  rossum: {
    short: 'Rossum: pricing',
    label: 'Rossum: Pricing, End-to-End Document Automation Plans',
    url: 'https://rossum.ai/pricing/',
  },
  abbyy: {
    short: 'ABBYY: Vantage',
    label: 'ABBYY: Vantage, Intelligent Document Processing Software',
    url: 'https://www.abbyy.com/vantage/',
  },
  uipath: {
    short: 'UiPath: IXP',
    label: 'UiPath: Intelligent Document Processing (IDP), UiPath IXP',
    url: 'https://www.uipath.com/platform/agentic-automation/idp',
  },
  hyperscience: {
    short: 'Hyperscience',
    label: 'Hyperscience: Enterprise AI Platform (home page)',
    url: 'https://www.hyperscience.ai/',
  },
  layer3: {
    short: 'Layer3 Labs agency cost guide, 2026',
    label: 'Layer3 Labs: AI Automation Agency Cost (2026), Real Pricing Guide',
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
   The first question is a buyer question from our 9 Oct 2026 sweeps, kept in
   the buyer's words with the place and the deadline taken out. The second
   answers the timing part of it with a published market figure. Others
   come from the question boxes Google showed for the page's searches on
   2026-10-09 and 2026-10-11 (DataForSEO, US, location 2840; career and
   free-tool questions left out) and from the page's own keywords. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'buyers', label: 'Buyer questions' },
  { key: 'basics', label: 'Document processing basics' },
  { key: 'products', label: 'Rent a product or build' },
  { key: 'reading', label: 'Reading and accuracy' },
  { key: 'data', label: 'Your data' },
  { key: 'working', label: 'Working with FactoryJet' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── Buyer questions ──────────────────────────────────────────────
  {
    category: 'buyers',
    question: 'Which companies build a custom AI agent for document review and intake automation?',
    answer:
      'Two kinds of company do. AI services firms, FactoryJet among them, design and build an agent on your own documents and systems, and you own the result. Product makers such as Rossum, Docsumo and Nanonets rent you a platform that you configure. Whichever you talk to, ask for the same things: a demo on your own documents, a written list of every system that will touch your data, and the name of the team that supports the agent after launch.',
  },
  {
    category: 'buyers',
    question: 'How long does it take to build a document intake agent?',
    answer:
      "It depends on scope. Layer3 Labs' 2026 guide to US agency pricing puts a single-workflow build, with invoice intake as its example, at two to four weeks. One document type filed to one system sits at that end. Mixed packets, handwriting and several systems take longer. The pace is set by how soon a sample of real documents and a test login reach the builder. FactoryJet puts the timeline in writing with the fixed quote, and at first every document waits for a person.",
  },
  // ── Document processing basics ───────────────────────────────────
  {
    category: 'basics',
    question: 'What is AI document processing?',
    answer:
      'It is software that takes an inbound document, such as an order, invoice, form, claim or application, and does the desk work a person would do with it. It works out what the document is, pulls the fields out, checks them against your records and files the result. The reading is done by an AI model, which can take a layout nobody set up in advance. The checking and the review around the model decide whether you can trust what gets filed.',
  },
  {
    category: 'basics',
    question: 'What is IDP in AI?',
    answer:
      'IDP stands for intelligent document processing. It is the software industry name for reading documents with AI and passing the data to other systems. The term covers sorting documents by type, pulling out fields, checking them and sending exceptions to a person. ABBYY, UiPath and Hyperscience all use it for their platforms. On this page we say document intake, because the job starts when a document arrives and ends when it is filed.',
  },
  {
    category: 'basics',
    question: 'What does document automation mean?',
    answer: `It has two meanings, so check which one a seller has in mind. The first is producing documents, such as filling a contract or a letter from a template. The second is reading inbound documents and entering their data. Both showed up on page one of US Google results for the phrase on ${CHECKED_ON}. A NetDocuments page titled Legal Document Automation and Assembly Software sat near an Automation Anywhere page on processing documents at scale. This page is about the second meaning.`,
  },
  {
    category: 'basics',
    question: 'What are some examples of document automation?',
    answer:
      "Five common ones. A distributor's order desk turns emailed purchase orders into sales orders. An accounts payable team turns vendor invoices into bills. An insurance agency files loss notices and photos to the right claim. A law firm sorts an intake packet into the matter. A property manager reads a rental application along with its pay stubs and ID. Each one follows the same seven steps, which are collect, sort, read, check, score, review and file.",
  },
  {
    category: 'basics',
    question: 'What is an intake agent?',
    answer:
      'An intake agent is software that handles the first contact with something new, whether that is a document, an enquiry or a client. A document intake agent reads what arrived, works out what it is and gets it to the right record. A client intake agent, common at law firms, asks a caller or a web visitor questions and opens the matter. This page covers documents. Our page on AI for law firms covers client intake.',
  },
  {
    category: 'basics',
    question: 'What is the difference between OCR and AI document processing?',
    answer:
      'OCR, short for optical character recognition, turns a picture of text into text. It tells you which words are on the page and nothing about what they mean. AI document processing adds the steps around it. Those are naming the document, finding the fields, checking them against your records, sending doubts to a person and filing the result. Microsoft describes its Read model as the OCR engine underneath its other document models, which shows where OCR sits.',
  },
  // ── Rent a product or build ──────────────────────────────────────
  {
    category: 'products',
    question: 'What is the best document automation software?',
    answer: `The answer changes with your documents, which is why our list is grouped by kind of buyer and has no ranking. For one or two layouts with a spreadsheet at the end, look at Parseur or Docparser. For a team that wants a platform with a free start, look at Nanonets, Docsumo or Extend. For large volumes under a yearly contract, look at Rossum, ABBYY Vantage, UiPath or Hyperscience. Each entry in the list on this page restates the maker's own page as read on ${CHECKED_ON}.`,
  },
  {
    category: 'products',
    question: 'How much does AI document processing software cost?',
    answer: `Here are the list prices printed on the makers' own pages on ${CHECKED_ON}. Parseur starts at $49 a month for 100 pages and reaches $499 a month at 10,000, with larger plans above that and 20 free pages each month. Docparser runs from $39 to $159 a month, billed monthly. Nanonets is $100 a month for 100 credits after $50 in free credits. Extend's Scale plan is $500 a month. LandingAI's Team plans start from $250 a month. Rossum starts at $18,000 per year. The ABBYY, UiPath and Hyperscience pages we read print no price.`,
  },
  {
    category: 'products',
    question: 'Is FactoryJet a document processing product?',
    answer:
      'No. FactoryJet sells a service. Our team designs, builds and supports a document intake agent on your own documents and systems, and the finished agent belongs to you. There is nothing to subscribe to. The only new screen your people learn is the review queue made for them. If you would sooner have a product running this week, start with the ten named on this page, and ask us which we would try first.',
  },
  {
    category: 'products',
    question: 'When is renting a product the better choice?',
    answer:
      "When your documents come in one or two layouts, the data only has to reach a spreadsheet or a single app, and the review screen that ships with the product is enough. Speed is on the product's side too. Parseur, Nanonets, Docsumo and Extend each print a free allowance, so a trial costs an afternoon. Building makes sense once every field has to match your own records, documents arrive as mixed packets, or the result is filed in more than one system.",
  },
  {
    category: 'products',
    question: 'Who are the top IDP vendors?',
    answer: `There is no neutral ranking. As a rough guide to who invests in search, Google's AI Overview for "ai document processing" on ${CHECKED_ON} pointed to pages from Google Cloud, AWS, UiPath, Automation Anywhere, IBM, Databricks, Snowflake and LandingAI. A place in that box says little about fit. Shortlist by your document types and your monthly volume, then try two or three of them on your own files before you compare prices.`,
  },
  // ── Reading and accuracy ─────────────────────────────────────────
  {
    category: 'reading',
    question: 'Can I use AI for data entry?',
    answer:
      'Yes, where the data arrives as documents or email. An AI model reads the page and fills the fields, and software enters them in your system. Two rules keep it safe. First, check each record against what your system already holds before it is saved. Second, send any field the AI is unsure of to a person. Typed text on a clean, familiar form is where AI does best. Handwriting and poor scans need more review.',
  },
  {
    category: 'reading',
    question: 'Can I use ChatGPT to review a document?',
    answer:
      'For a single document, yes. You upload it and ask questions. For intake at volume, a chat window falls short in four ways. Someone has to upload each file. It has no login to your records, so it cannot check a policy number or an order. It keeps no log tied to those records. And nobody is told when it is unsure. Put the same model inside an agent that supplies those four things and it does the job well.',
  },
  {
    category: 'reading',
    question: 'How often does AI read a document correctly?',
    answer:
      'It depends on your documents, so we quote no single figure. Makers quote their own. ABBYY says its pre-trained skills deliver 90% accuracy at the start, and Hyperscience states accuracy rates of 99.5%. Neither number was measured on your files. What we do is measure. Ahead of go-live, documents your team has already processed are run through the agent, and we count field by field how often the two agree. Once live, any field below its bar is sent to a reviewer.',
  },
  {
    category: 'reading',
    question: 'Can it read handwriting?',
    answer:
      "Yes, with limits. Amazon says Textract reads handwriting in English only. Microsoft says its Read model extracts print and handwritten text, and Google lists handwriting among the things Enterprise Document OCR detects. ABBYY says Vantage handles handwriting, barcodes and check boxes. Neat capitals in a form box read well. A scrawled note in a margin reads worse. In our builds, handwritten fields get a stricter bar, so more of them reach a reviewer.",
  },
  {
    category: 'reading',
    question: 'Can it read scanned PDFs, faxes and phone photos?',
    answer:
      "Yes. Amazon's guidance is a scan of at least 150 DPI, and both Amazon and Microsoft put the smallest readable text at about 8 point at that sharpness. Google's OCR can return an image-quality score that flags eight defects, among them blur, glare, dark pages and cut-off text. The agent runs checks like these when a file arrives. A page too poor to read goes back to the sender or to a person. The agent does not guess at it.",
  },
  {
    category: 'reading',
    question: 'Can it handle several documents scanned into one file?',
    answer:
      'Yes, and it is one of the harder parts. The agent finds where each document starts and ends, labels each one and keeps them linked as a case. The cloud tools do less here than their names suggest. Google says its splitters identify page boundaries but do not split the file for you, and Microsoft says its current custom classifier does not split by default. So the splitting step is built and tested on your own packets.',
  },
  {
    category: 'reading',
    question: 'What happens to documents the agent is unsure about?',
    answer:
      'They go to a person, and only the doubtful part does. The reviewer sees the page, the field in question, the value the agent read and why it was flagged, such as a low score or a mismatch with your records. They correct or confirm it, and the document moves on. The correction is logged with their name and the time. No unsure field is filed until someone has looked at it.',
  },
  {
    category: 'reading',
    question: 'Does the agent need to be trained on our documents?',
    answer:
      "Not in the old sense of building a template for each layout. We still need a sample of your real documents, for two reasons. It shows how well each field is read, and it lets us set the bar between sure and unsure. Where a classifier is trained to sort document types, Microsoft's minimum is five samples per type. The same sample becomes the test set that is run again whenever a model or one of your systems changes.",
  },
  // ── Your data ────────────────────────────────────────────────────
  {
    category: 'data',
    question: 'Is AI using our data?',
    answer: `It depends on the provider and the plan, so check each one. These were read on ${CHECKED_ON}. OpenAI says data sent to its API has not been used to train its models since March 1, 2023, unless you opt in. Anthropic says it will not use inputs or outputs from its commercial products to train its models by default. Google says the same of its cloud AI platform unless you give permission. Amazon says Textract may use inputs to improve its services unless you opt out.`,
  },
  {
    category: 'data',
    question: 'Where do our documents go?',
    answer:
      "Three places. The original stays where it arrived, in your mailbox or your document store. A copy goes to the reading service or AI model that pulls the fields out. The finished record goes to your system of record. You get the list of every provider in that chain in writing before work starts, so your security lead can read each one's terms. The agent uses a login of its own, limited to the records it has to look up and create.",
  },
  {
    category: 'data',
    question: 'Can the agent approve a claim or accept an application?',
    answer:
      'No. It reads, checks and files. It can lay out what the documents say and where they disagree, and it can open a task for the person who decides. The decision stays with that person, by name, and the log shows who made it. We draw that line on purpose. A reading mistake costs a correction. A wrong decision on a claim or an application costs far more, and it is yours to make.',
  },
  // ── Working with us ──────────────────────────────────────────────
  {
    category: 'working',
    question: 'How much does a custom document intake agent cost to build?',
    answer:
      "Two published ranges give the scale. Layer3 Labs' 2026 guide puts a single-workflow build by a US agency at $5,000 to $15,000, and names invoice intake as an example. ProductCrafters' 2026 breakdown puts custom AI agents of all kinds between about $5,000 and more than $180,000. Where you land depends on how many document types the agent reads, how many systems it checks and files to, and how much handwriting is involved. FactoryJet gives you a fixed price in writing after a short scoping call.",
  },
  {
    category: 'working',
    question: 'Who maintains the agent once it is live?',
    answer:
      'We do. The build and the support that follows are each quoted as a fixed price, in writing, once a short scoping call is done. From go-live on, FactoryJet manages the servers, the AI models, the API connections and the maintenance, which keeps that load off your operations team. Part of that work is running your sample documents again every time a model or one of your systems changes, then fixing whatever the run shows.',
  },
  {
    category: 'working',
    question: 'Can we watch the agent read our documents before we sign?',
    answer:
      'Yes, and before any contract. Working software on your own documents is how we start. You pick a batch your team has already handled, an early build of the agent reads it, and you put the two sets of fields next to each other, unsure ones included. Should a rented product turn out to cover the job, you hear that from us then.',
  },
  {
    category: 'working',
    question: 'Who owns the code once the agent is built?',
    answer:
      'You do. The code, the written rules, the bars for each field and the test documents all belong to you, and you can have the agent run inside a cloud account that is yours. FactoryJet still looks after it day to day. Bring the work in-house later, or pass it to a different firm, and nothing is held back. The log of what the agent did goes along as well.',
  },
  {
    category: 'working',
    question: 'Which systems can the agent file to?',
    answer:
      'Any system that offers an API (a door for other software) or a supported import. FactoryJet has worked on Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs, and we build Xero and HubSpot integrations. In scoping we check two things about your system. It has to let outside software create the record you need, and it helps if it offers a test copy to build against. Where a system offers neither, the agent prepares the record for a person to confirm.',
  },
  {
    category: 'working',
    question: 'Will our team still be involved?',
    answer:
      'Yes. Your team writes the rules with us, reviews the fields the agent is unsure of and makes every decision. For an agreed period at the start they see every document, so they learn where the agent is strong and where it needs a tighter bar. After that, their time goes to the exceptions and to the people on the other end of the documents, who are your customers, claimants, applicants and vendors.',
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

/* ── Hero figure: what happens to one inbound document. Orange rows are the
   agent we build. The black-outline row is the client's reviewer. ── */
const HERO_FLOW: ReadonlyArray<{ n: string; t: string; b: string; who: 'agent' | 'person' }> = [
  { n: '01', t: 'Arrives.', b: 'By email, scan or upload. The agent picks it up from one shared inbox.', who: 'agent' },
  { n: '02', t: 'Sorted.', b: 'Named as an order, invoice, form, claim or application. Packets are split.', who: 'agent' },
  { n: '03', t: 'Read.', b: 'Every field you listed, plus tables and tick boxes.', who: 'agent' },
  { n: '04', t: 'Checked.', b: 'Against the customer, policy, matter or order in your system of record.', who: 'agent' },
  { n: '05', t: 'Scored.', b: 'Each field is marked sure or unsure, by bars you set.', who: 'agent' },
  { n: '06', t: 'Reviewed.', b: 'A person sees the unsure fields beside the spot on the page.', who: 'person' },
  { n: '07', t: 'Filed.', b: 'The record is written and the original is stored where your team expects it.', who: 'agent' },
];

/* ── When to rent a product and when to have an agent built. Product and
   platform facts are from each maker's own page as read on 2026-10-11. ── */
type Fit = { t: string; b: string; sources: ReadonlyArray<SrcKey> };

const RENT_WHEN: ReadonlyArray<Fit> = [
  {
    t: 'Your documents come in one or two layouts',
    b: "The same order form from the same few customers, or one supplier's statement. Parseur and Docparser are self-serve tools for that. Parseur lists plans from $49 a month for 100 pages, and Docparser from $39 a month when billed monthly.",
    sources: ['parseur', 'docparser'],
  },
  {
    t: 'The data only has to reach a spreadsheet or one app',
    b: "Docparser's Starter plan lists downloads to Excel, CSV, JSON and XML, a Google Sheets export and hundreds of other integrations. If that is where the data ends up, a product does the whole job.",
    sources: ['docparser'],
  },
  {
    t: 'A review screen that ships with the product is enough',
    b: "Rossum's Starter plan lists a validation screen for exception handling and human in the loop. Docsumo's free plan lists an AI document reviewer.",
    sources: ['rossum', 'docsumo'],
  },
  {
    t: 'Someone on your team will own a platform',
    b: 'ABBYY lists pre-trained skills for more than 150 use cases and a low-code designer for building your own. A platform like that pays off when one of your people is its owner.',
    sources: ['abbyy'],
  },
  {
    t: 'You want to try it this week',
    b: 'Parseur lists 20 free pages every month. Nanonets starts each account with $50 in credits and no card. Docsumo lists a 14-day trial with up to 1,000 free pages, and Extend lists 10,000 free credits.',
    sources: ['parseur', 'nanonets', 'docsumo', 'extend'],
  },
];

const BUILD_WHEN: ReadonlyArray<Fit> = [
  {
    t: 'A field is only right if it matches your records',
    b: 'The policy has to be in force and the customer has to exist. Those lookups run against your own system, by your own rules, and they are the larger part of the work.',
    sources: [],
  },
  {
    t: 'Documents arrive as mixed packets',
    b: "One file holds an application, two pay stubs and an ID. Google says its splitters mark page boundaries and leave the file whole, and Microsoft's current classifier does not split by default. Splitting has to be built and tested on your packets.",
    sources: ['gdocSplitters', 'azureClassifier'],
  },
  {
    t: 'The result is filed in more than one place',
    b: 'A record goes to the system of record, the original goes to the document store and a task goes to a person. A product exports to its own list of connectors. A built agent files wherever your process says.',
    sources: [],
  },
  {
    t: 'The bar for unsure differs by field',
    b: "A misread date of loss matters more than a misread fax number. Amazon's own guidance runs from 50% for archive work to 90% or higher for financial decisions. Your rules set each bar.",
    sources: ['textractBest'],
  },
  {
    t: 'Ownership matters to you',
    b: 'Everything we write for you is yours to keep, including the code, the rule book and the test documents. Take the work in-house later, or hand it to another firm, and nothing stays behind.',
    sources: [],
  },
];

/* ── What the reading tools take and return. Each card restates the maker's
   own documentation as read on 2026-10-11. No price is given for these on
   purpose (rule of 2026-10-11). Nothing here is our opinion of the tool. ── */
const READERS: ReadonlyArray<{
  name: string;
  kind: string;
  says: string;
  sources: ReadonlyArray<SrcKey>;
  span: string;
}> = [
  {
    name: 'Amazon Textract',
    kind: 'AWS · reading service',
    says: 'Amazon says Textract takes JPEG, PNG, PDF and TIFF files. A synchronous call, one that answers at once, takes up to 10 MB and a single page of PDF. An asynchronous job, one you collect later, takes PDFs up to 500 MB and 3,000 pages. It reads printed text in six languages and handwriting in English only. PDFs cannot be password protected, and XFA-based PDFs are not supported. Each element comes back with a confidence score from 0 to 100.',
    sources: ['textractLimits', 'textractBest', 'textractFaq'],
    span: 'lg:col-span-7',
  },
  {
    name: 'Google Document AI',
    kind: 'Google Cloud · reading service',
    says: 'Google lists 40 MB as the largest file for an online request and 1 GB for batch. Its Custom Extractor takes 15 pages online and 200 in batch, and 10 pages when the document has checkboxes. Enterprise Document OCR lists handwriting and can return an image-quality score. Splitters report where documents begin and end and leave the file whole. Google lists Human in the Loop, its review feature, as deprecated on January 16, 2024.',
    sources: ['gdocLimits', 'gdocOcr', 'gdocSplitters', 'gdocDeprecations'],
    span: 'lg:col-span-5',
  },
  {
    name: 'Azure Document Intelligence',
    kind: 'Microsoft · reading service',
    says: 'Microsoft lists 500 MB and 2,000 pages per document on the standard tier. The free tier takes 4 MB and analyzes the first two pages only. The Read model extracts print and handwritten text. Password locks must be removed before submission. A field can carry a confidence value between 0 and 1, though Microsoft says not all fields return one. The v4.0 custom classifier does not split documents unless you switch that on.',
    sources: ['azureLimits', 'azureRead', 'azureConfidence', 'azureClassifier'],
    span: 'lg:col-span-5',
  },
  {
    name: 'AI models that read PDFs directly',
    kind: 'Anthropic and OpenAI · general models',
    says: 'Anthropic says Claude works with any standard PDF that has no password or encryption, up to 32 MB per request and 600 pages, or 100 pages on models with the smaller context window. OpenAI says each file sent to its API must be under 50 MB, that 50 MB is also the combined limit for one request, and that PDF parsing puts both the extracted text and the page images in front of the model. These models take a document as it comes, with no template to set up first.',
    sources: ['claudePdf', 'openaiFiles'],
    span: 'lg:col-span-7',
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
    title: 'Collect: every inbound document in one queue',
    body: 'Documents reach a business through a shared mailbox, a scanner folder, a web upload and sometimes a fax number that forwards to email. The agent brings them into a single queue.',
    items: [
      'Checks the shared inbox and lifts every attached PDF, image and spreadsheet out of each message',
      'Keeps the email with the file, since the sender and the subject line often say what the document is',
      'Ignores signature images, logos and newsletters, which would otherwise be filed as junk records',
      'Stores the original untouched and works on a copy',
    ],
    note: "Gmail's help page says personal accounts have a 25 MB attachment limit, and that above the limit Gmail removes the attachment and adds it as a Google Drive link. A large scan can therefore arrive as a link with no file. The agent has to spot that and fetch the file or ask for it.",
    sources: ['gmailAttachments'],
    span: 'lg:col-span-7',
  },
  {
    n: '02',
    title: 'Sort and split: say what each page is',
    body: 'One email can hold an application, two pay stubs and a photo of an ID in a single PDF. Before anything is read, the agent names each document and finds where one ends and the next begins.',
    items: [
      'Labels each document by type, from a list you approve',
      'Splits a packet into its documents and keeps them linked as one case',
      'Sends a type it has not seen before to a person, with no label forced onto it',
    ],
    note: "Google says its splitters identify page boundaries but do not split the input document for you. Microsoft says its v4.0 custom classifier does not split documents by default. Amazon's Analyze Lending does split and classify a packet, and Amazon describes it as built for mortgage documents.",
    sources: ['gdocSplitters', 'azureClassifier', 'textractLending'],
    span: 'lg:col-span-5',
  },
  {
    n: '03',
    title: 'Read: pull the fields out',
    body: 'Reading turns a page into named fields, such as a policy number, a date of loss, a quantity or a signature that is present or missing. OCR, software that turns a picture of text into text, is one part of that. An AI model does the rest.',
    items: [
      'Reads printed text, handwriting, tables and tick boxes',
      'Returns each value with the place on the page it came from',
      'Leaves a field empty when the page does not hold it, and says so',
      'Reads the email body too, when an order is typed there with no attachment',
    ],
    note: "Amazon says Textract reads handwriting in English only and suggests scans of at least 150 DPI (dots per inch, a measure of sharpness). It also warns of inconsistent results on tables with merged cells. Google's Enterprise Document OCR and Microsoft's Read model both list handwriting. A form filled in by hand in Spanish is a reason to test more than one reader.",
    sources: ['textractLimits', 'textractBest', 'gdocOcr', 'azureRead'],
    span: 'lg:col-span-5',
  },
  {
    n: '04',
    title: 'Check: against your system of record',
    body: 'A field can be read perfectly and still be wrong for your business. The policy lapsed, or the order was entered last week. So each record is checked against your system of record, the one system your business treats as the truth.',
    items: [
      'Looks up the customer, policy, matter or order the document names',
      'Compares what the document says with what the record says, such as a name, an address or an amount',
      'Checks the arithmetic, so lines add up to totals and dates fall in a sensible order',
      'Looks for the same document already filed',
      'Checks one document against the others in its packet, such as the income on a pay stub against the application',
    ],
    note: 'Rented products list this step on their higher plans. Rossum lists master data matching and duplicate detection under Business. Docsumo lists master data lookup and cross-document validations under Enterprise. In a built agent this check is the center of the work, because the lookup rules are yours.',
    sources: ['rossum', 'docsumo'],
    span: 'lg:col-span-7',
  },
  {
    n: '05',
    title: 'Score: sure or unsure, field by field',
    body: 'The reading services return a confidence score, a number saying how likely a value is to be right. The agent turns those scores and the results of the checks into a plain answer for each field.',
    items: [
      'Sets a stricter bar for fields that move money or decide a case',
      "Treats a failed check as unsure, whatever the reader's score",
      'Applies a rule of its own to any field the reader does not score',
    ],
    note: "Amazon gives a number from 0 to 100. It says financial decisions might require thresholds of 90% or higher, while archive work might accept 50%. Microsoft gives each field a value from 0 to 1 and says not all fields return one. For a trained model's accuracy score, Microsoft recommends close to 100% on financial or medical records. One bar for every field is the wrong setup.",
    sources: ['textractBest', 'azureConfidence'],
    span: 'lg:col-span-7',
  },
  {
    n: '06',
    title: 'Review: the unsure ones go to a person',
    body: 'A reviewer opens a queue and sees the page with the doubtful field marked, the value the agent read and the reason it was flagged.',
    items: [
      'Shows only the fields that need a decision',
      'Records who changed what, and when',
      'Adds each correction to the test set, so the same mistake is caught before the next change ships',
      'Reminds a late reviewer, then passes the item to the backup you chose',
    ],
    note: "Do not count on a cloud reader to supply this screen. Google's Document AI deprecations page lists Human in the Loop as deprecated on January 16, 2024. Rossum's Starter plan and Docsumo's free plan each list a review tool. In a built agent the review queue is part of the build.",
    sources: ['gdocDeprecations', 'rossum', 'docsumo'],
    span: 'lg:col-span-5',
  },
  {
    n: '07',
    title: 'File: write the record, store the original and stop',
    body: 'Once every field is sure or corrected, the agent writes the record to your system and stores the original where your team expects to find it.',
    items: [
      "Creates or updates the record through the system's API, the door it offers to other software",
      'Saves the original document against that record, named by your convention',
      'Writes a log line for each step, from received to filed',
      'Opens a task for a person wherever a decision is due',
    ],
    note: 'The agent decides nothing. Approving a claim, accepting an application, confirming an order and releasing a payment each stay with a named person. FactoryJet has worked on Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs, so an ERP as the place a record is filed is familiar ground.',
    sources: [],
    span: 'lg:col-span-12',
  },
];

/* ── Where the documents go. Five rows are the providers' own statements, three
   we set up, two the client's team keeps. Provider facts are from the linked
   pages as read on 2026-10-11. No row says FactoryJet meets any standard. ── */
type Keeper = 'rule' | 'build' | 'person';

const KEEPER_LABEL: Record<Keeper, string> = {
  rule: 'The provider says',
  build: 'How we set it up',
  person: 'Stays with your team',
};

const DATA_NOTES: ReadonlyArray<{ rule: string; keeper: Keeper; note: string }> = [
  {
    rule: 'OpenAI API: no training unless you opt in',
    keeper: 'rule',
    note: "OpenAI's page says data sent to its API has not been used to train or improve its models since March 1, 2023, unless you explicitly opt in. It says abuse monitoring logs are kept for up to 30 days by default, and that Zero Data Retention needs prior approval.",
  },
  {
    rule: 'Anthropic API: no training by default',
    keeper: 'rule',
    note: 'Anthropic says it will not use inputs or outputs from its commercial products to train its models by default. It says API inputs and outputs are deleted from its backend within 30 days, with exceptions it lists.',
  },
  {
    rule: 'Google Cloud: no training without your instruction',
    keeper: 'rule',
    note: "Google's page for its Gemini Enterprise Agent Platform says it will not use your data to train or fine-tune any AI model without your prior permission or instruction. It says prompts may be logged to detect abuse, and that customers who want zero retention can request an exception.",
  },
  {
    rule: 'Microsoft Azure: 24 hours, then deleted',
    keeper: 'rule',
    note: 'Microsoft says Azure Document Intelligence stores submitted data and results for 24 hours after an analysis completes, then deletes both. For AI models sold through Azure, it says prompts and completions are not available to OpenAI and are not used to train foundation models without your permission.',
  },
  {
    rule: 'Amazon Textract: opt out to stop reuse',
    keeper: 'rule',
    note: "Amazon's FAQ says Textract may store and use document and image inputs to provide the service and to improve Amazon's machine-learning technologies. It says you may opt out with an AWS Organizations opt-out policy. Of the five, this is the only one where the buyer has to act to keep inputs out of service improvement.",
  },
  {
    rule: 'The provider list, in writing',
    keeper: 'build',
    note: 'Before the build you get a written list of every service that will see a document, from the reader and the AI model to the queue and the storage. Your security lead reviews it before a single real file is sent.',
  },
  {
    rule: 'A login of its own',
    keeper: 'build',
    note: 'The agent signs in to your systems as its own user, limited to the records it looks up and the records it creates. It cannot change a rule, delete a record or approve anything.',
  },
  {
    rule: 'A log of every action',
    keeper: 'build',
    note: 'Each document carries a trail that shows when it arrived, what it was sorted as, what was read, which checks passed, who reviewed it and where it was filed.',
  },
  {
    rule: 'Which laws apply to your documents',
    keeper: 'person',
    note: 'Health, lending, insurance and employment records each come with their own rules on storage and access. Your counsel or compliance lead says which apply and what each provider has to agree to. We build to the controls they set.',
  },
  {
    rule: 'Every decision',
    keeper: 'person',
    note: 'The agent reads, checks and files. Approving, declining, paying and signing stay with named people, and the log shows who did each.',
  },
];

/* ── Where document intake projects break. Each one comes from a linked page. ── */
const BREAKS: ReadonlyArray<{ t: string; b: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    t: 'A locked PDF',
    b: 'Amazon says PDFs sent to Textract cannot be password protected. Microsoft says a password lock must be removed before submission, and Anthropic lists standard PDFs with no passwords or encryption. A locked bank statement has to be opened by a person, or sent again without the lock.',
    sources: ['textractLimits', 'azureRead', 'claudePdf'],
  },
  {
    t: 'A fillable form saved as XFA',
    b: 'Amazon says Textract does not support XFA-based PDFs, a format some interactive forms use. The file opens on a desk and fails in the queue. The agent has to detect the format on arrival and send it to another reader or to a person.',
    sources: ['textractLimits'],
  },
  {
    t: 'An attachment that is only a link',
    b: "Gmail's help page says that above its attachment limit, 25 MB for personal accounts, Gmail removes the attachment and adds it as a Google Drive link. An agent that only looks for attached files files nothing and reports no error.",
    sources: ['gmailAttachments'],
  },
  {
    t: 'A long packet in the fast lane',
    b: "Textract's synchronous calls take a single page of PDF. Google's online requests stop at 15 pages for most processors, or 30 in imageless mode. A 60-page claim file goes through batch jobs, which answer later. Decide early which documents need an answer in seconds.",
    sources: ['textractLimits', 'gdocLimits'],
  },
  {
    t: 'Handwriting that is not in English',
    b: 'Amazon lists six languages for printed text and says handwriting is supported in English only. A form filled in by hand in Spanish needs a different reader, or a person.',
    sources: ['textractLimits'],
  },
  {
    t: 'A photo taken at a kitchen table',
    b: "Amazon suggests at least 150 DPI. Google's OCR scores image quality and names eight defects, among them blur, glare, dark or faint pages and text cut off at the edge. Test with the worst files you have, since those are the ones that reach a reviewer.",
    sources: ['textractBest', 'gdocOcr'],
  },
  {
    t: 'A table with merged cells',
    b: 'Amazon warns of inconsistent results where table cells span several columns, and suggests plain text detection as a workaround. Check each row total against the document total, so a shifted column is caught.',
    sources: ['textractBest'],
  },
  {
    t: 'A field with no score',
    b: 'Microsoft says not all document fields return a confidence score. A field with no score cannot be held to a bar. Give it a rule of its own, such as a format check or a lookup in your records.',
    sources: ['azureConfidence'],
  },
];

/* ── Our experience, stated plainly. No client is named on this page and no
   result is claimed. The first card is Bhavesh's own statement of 2026-10-09.
   The last is the care-after-launch wording allowed by the rule of 2026-10-11. ── */
const EXPERIENCE: ReadonlyArray<{ t: string; kind: string; what: string; href: string; cta: string; span: string }> = [
  {
    t: 'Systems we know',
    kind: 'ERP and order systems',
    what: 'FactoryJet has worked on Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs. That work covered RFQ automation, daily bookkeeping, and the generation of purchase and sales orders. Each is document work at its root, since a request for quote, a vendor invoice and a customer order all have to be read and entered.',
    href: '/services/erp-ai-agents',
    cta: 'Read about AI agents for ERP systems',
    span: 'lg:col-span-7',
  },
  {
    t: 'A demo comes first',
    kind: 'On your own documents',
    what: 'Working software on your own documents comes before a contract. You choose documents your team has already handled, an early build of the agent reads them, and you judge the result.',
    href: '/contact',
    cta: 'Request a demo on your own documents',
    span: 'lg:col-span-5',
  },
  {
    t: 'Work you can look up',
    kind: 'Case studies',
    what: 'Projects with a public write-up are on our case studies page.',
    href: '/case-studies',
    cta: 'See the case studies',
    span: 'lg:col-span-5',
  },
  {
    t: 'After launch',
    kind: 'Managed by FactoryJet',
    what: 'We quote the build, and any support you choose, as two fixed prices, in writing, after a short scoping call. Once the agent is live, FactoryJet can keep managing the servers, the AI models, the API connections and the maintenance, so your operations team does not have to.',
    href: '/services/ai-agent-monitoring',
    cta: 'How monitoring and support works',
    span: 'lg:col-span-7',
  },
];

/* ── Who this is for. Examples of the kinds of team the work suits, not a
   client list. Pictures were generated on 2026-10-11 and checked at the size
   they ship. The people in them are not FactoryJet staff or clients. ── */
const INDUSTRIES: ReadonlyArray<{ img: string; alt: string; t: string; b: string }> = [
  {
    img: `${IMG}/order-desk-paper-orders.webp`,
    alt: 'A man with short dark hair and a beard, in a navy polo shirt, lays a blank sheet of paper on a stack at a wooden counter while holding another sheet, with an orange stapler on the counter and shelves of plain cardboard cartons behind him',
    t: 'Distributors and manufacturers',
    b: 'Purchase orders and requests for quote arrive as PDFs and as typed email. Each is read, matched to the customer and the items in your ERP, and drafted as an order for a person to confirm.',
  },
  {
    img: `${IMG}/law-office-intake-folder.webp`,
    alt: 'A woman with a grey bob in a charcoal blazer sits at a dark wood table and slides blank white sheets into an open orange folder, with a stack of manila folders and a white cup on the table',
    t: 'Law firms',
    b: 'Intake packets, records and reports arrive in one long scan. Each document is named, read and filed to the matter, with the pages a lawyer should see first marked.',
  },
  {
    img: `${IMG}/claims-desk-photo-prints.webp`,
    alt: 'A man with curly brown hair in a light grey sweater sits at a pale desk looking at two small blank white prints he holds, with an open manila folder, loose blank sheets and an orange mug on the desk and a plant on the windowsill',
    t: 'Insurance agencies and claims teams',
    b: 'A loss notice, an application and a set of photos land together. Each is sorted, read and attached to the policy or the claim, and anything unclear goes to the person handling it.',
  },
  {
    img: `${IMG}/leasing-office-application-form.webp`,
    alt: 'A woman with braided hair in a mustard cardigan hands a wooden clipboard holding a blank sheet across a white counter to a man in a denim jacket seen from behind, with an orange pen pot on the counter and potted plants behind her',
    t: 'Property managers and lenders',
    b: 'An application comes with pay stubs, bank statements and an ID. The packet is split, each part is read, and the figures are laid side by side for the person who decides.',
  },
];

/* ── Process. Six steps, in the order we work. ── */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'Gather a sample of real documents',
    b: 'We ask for documents your team has already handled, the ugly ones included, along with what was entered for each. That sample becomes the test every later version has to pass.',
  },
  {
    n: '02',
    t: 'Look at the products first',
    b: 'If one of the rented products on this page already does the job, we name the one we would try first, and the project ends there.',
  },
  {
    n: '03',
    t: 'Write down the fields, the checks and the bars',
    b: 'With the people who do the work today, we list every field, the record it is checked against, what counts as unsure and who reviews it.',
  },
  {
    n: '04',
    t: 'Show an early build on your sample',
    b: 'An early build of the agent reads your sample before any contract is signed. You put its fields next to the ones your team typed and see which it marked unsure.',
  },
  {
    n: '05',
    t: 'Give it a login that can do only its job',
    b: 'The agent signs in as its own user, limited to the records it looks up and creates. If your system has a test copy, the first build runs there.',
  },
  {
    n: '06',
    t: 'Run it next to your people, then keep supporting it',
    b: 'At first a person confirms every document. Each disagreement between the agent and your reviewers is looked at, and a bar or a rule is adjusted. Once it is live, the people who built it keep watching it, run your sample again when a model or one of your systems changes, and repair what the run turns up.',
  },
];

/* ── Comparison: three ways to get documents read and filed ── */
const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: '01 A rented document product' },
  { label: '02 A cloud reader your developers wire up' },
  { label: '03 An agent built for you' },
];

const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'What it is',
    values: [
      'A subscription product such as Parseur, Docparser, Nanonets, Docsumo or Rossum',
      'A reading service from Amazon, Google or Microsoft that your own developers call',
      'A document intake agent designed around your documents and rules. It belongs to you',
    ],
  },
  {
    feature: 'Reading the document',
    values: [
      'Built in, with a setup screen for your fields',
      'Text, tables and forms, inside the file and page limits each maker lists',
      'The reader that tests best on your own sample, and more than one where needed',
    ],
  },
  {
    feature: 'Sorting and splitting packets',
    values: [
      'On some plans. Docsumo lists auto-classification and splitting under Business',
      'Partly. Google marks page boundaries and leaves the file whole. Azure does not split by default',
      'Built and tested on your own packets, with the documents kept linked as a case',
    ],
  },
  {
    feature: 'Checking against your records',
    values: [
      'On higher plans. Rossum lists master data matching under Business, Docsumo under Enterprise',
      'Not included. Your developers write it',
      'Lookups in your system of record and checks between documents, written to your rules',
    ],
  },
  {
    feature: 'Unsure fields',
    values: [
      'Rossum and Docsumo each list a review tool',
      'A confidence score per field. The review screen is yours to build',
      'A review queue built for your team, with a bar set field by field',
    ],
  },
  {
    feature: 'Filing the result',
    values: [
      'Exports and connectors. Docparser lists Excel, CSV, JSON, XML and Google Sheets',
      'Data is returned to your code. Filing is yours to build',
      'The record is written to your system and the original stored, with a log of each step',
    ],
  },
  {
    feature: 'How it is priced',
    values: [
      'A monthly or yearly plan, usually by page or credit volume',
      "By usage, on the maker's price page, plus your developers' time",
      'Two fixed prices quoted in writing, one for the build and one for ongoing support',
    ],
  },
  {
    feature: 'Who you call when it breaks',
    values: ["The product's support team", 'Your own developers', 'The team that built it'],
  },
  {
    feature: 'Right call when',
    values: [
      'A few layouts, one destination, and you want it this week',
      'You have developers and want full control of the parts',
      'Fields must match your records, documents come as packets, or filing spans several systems',
    ],
  },
];

/* ── Ten document-processing products you can rent. Each line restates the
   maker's own page as read on 2026-10-11, with its list price where that
   page gives one. Ordered from self-serve to enterprise. Not a ranking.
   Feeds the visible list AND the ItemList JSON-LD. ── */
const OTHERS: ReadonlyArray<{ name: string; focus: string; says: string; source: SrcKey }> = [
  {
    name: 'Parseur',
    focus: 'Self-serve parser · priced by pages a month',
    says: 'Its pricing page lists a free tier of 20 pages every month, then plans by monthly page count. Micro is $49 a month for 100 pages, Mini $89 for 300, Starter $129 for 1,000 and Pro $499 for 10,000. Parseur counts an email or a spreadsheet as a single page.',
    source: 'parseur',
  },
  {
    name: 'Docparser',
    focus: 'Self-serve parser · priced by parsing credits',
    says: 'Billed monthly, its pricing page lists Starter at $39 a month with 100 parsing credits, Professional at $74 with 250 and Business at $159 with 1,000. One credit is one document of up to five pages. Enterprise is by quote.',
    source: 'docparser',
  },
  {
    name: 'Nanonets',
    focus: 'Workflow product · priced per step run',
    says: 'Its pricing page says every account starts with $50 in free credits and no card, then $100 a month for 100 credits. Each step in a workflow is charged per run, from $0.02 to $0.30. Growth and Enterprise are by quote.',
    source: 'nanonets',
  },
  {
    name: 'Docsumo',
    focus: 'Document AI platform · free trial, then a quote',
    says: 'Its pricing page lists a 14-day free trial with up to 1,000 free pages and 10 user licences. Business and Enterprise are a custom quote based on volume. Business lists auto-classification and splitting, a test environment and audit logging. Enterprise lists cross-document validations and master data lookup.',
    source: 'docsumo',
  },
  {
    name: 'Extend',
    focus: 'Developer platform · priced per credit',
    says: 'Its pricing page lists Pay As You Go with 10,000 free credits and no contract, then $0.0125 per additional credit. Scale is $500 a month with 50,000 credits a month included. The page lists Parse, Extract, Classify and Split APIs on every plan. Enterprise is custom.',
    source: 'extend',
  },
  {
    name: 'LandingAI Agentic Document Extraction',
    focus: 'Developer APIs · priced per credit',
    says: 'Its pricing page says $1 buys 100 credits and that you start with 1,000 free credits. Team plans start from $250 a month and cover 25,000 to 200,000 credits a month. The page lists document splitting, classification and visual grounding with fine-grained citations. Enterprise is custom.',
    source: 'landing',
  },
  {
    name: 'Rossum',
    focus: 'Enterprise platform · yearly contract',
    says: 'Its pricing page lists a Starter plan starting at $18,000 per year, with unlimited seats, ingestion by email, API or upload, and a validation screen for exception handling. Business adds master data matching and duplicate detection. The page gives the minimum contract length as one year.',
    source: 'rossum',
  },
  {
    name: 'ABBYY Vantage',
    focus: 'Enterprise platform · price by quote',
    says: 'Its page lists pre-trained skills for more than 150 use cases and says Vantage processes handwriting, barcodes and check boxes, with skills that improve through human-in-the-loop review. No price is printed on that page.',
    source: 'abbyy',
  },
  {
    name: 'UiPath IXP',
    focus: 'Part of an automation platform · price by quote',
    says: 'Its page says Document Understanding extracts data from structured and semi-structured documents like invoices and forms, and Generative Extraction handles unstructured content like contracts and reports. That page prints no price.',
    source: 'uipath',
  },
  {
    name: 'Hyperscience',
    focus: 'Enterprise platform · price by quote',
    says: 'Its site says Hyperscience reads and processes the wide variety of documents that flow through an organization, and states accuracy rates of 99.5%. No price appears on the page we read.',
    source: 'hyperscience',
  },
];

const othersSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Document-processing products you can rent, with list prices',
  itemListElement: OTHERS.map((o, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: o.name,
    url: SRC[o.source].url,
  })),
};

const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  { href: '/services/accounts-payable-automation', t: 'Accounts payable automation', b: 'Vendor invoices read, matched to the order and the receipt, coded and routed.' },
  { href: '/services/legal-ai-agents', t: 'AI for law firms', b: 'Client intake and document work built for a law firm.' },
  { href: '/services/erp-ai-agents', t: 'AI agents for ERP systems', b: 'Quotes, orders and bookkeeping drafted inside Odoo, NetSuite, SAP Business One and ERPNext.' },
  { href: '/services/sales-order-automation-ai-agents', t: 'Sales order automation agents', b: 'Customer purchase orders turned into draft sales orders in your ERP.' },
  { href: '/services/insurance-ai-agents', t: 'AI agents for insurance', b: 'Claim calls, quote details and certificate requests for agencies, MGAs and small carriers.' },
  { href: '/services/ai-automation', t: 'AI workflow automation', b: 'The steps before and after the document, joined into one process.' },
  { href: '/services/ai-agent-development/rfq-bidding-agent', t: 'RFQ automation agent', b: 'Inbound requests for quote read, matched to your catalogue and drafted for approval.' },
  { href: '/blog/ai-agent-build-vs-buy-2026', t: 'Guide: build or buy an AI agent', b: 'The rent-or-build choice on this page, for agents of every kind.' },
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

/** One row in the "rent a product" and "have an agent built" lists. */
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

export default function DocumentIntakeAiAgentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(othersSchema) }} />
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
                    AI DOCUMENT PROCESSING &middot; UNITED STATES
                  </span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.2rem]">
                  AI document processing, built as an intake agent on your own systems.
                </h1>

                <p className={`${styles.heroLead} mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600`}>
                  FactoryJet designs, builds and supports a document intake agent on your own documents and systems.
                </p>

                <div className={`${styles.heroForm} mt-6`}>
                  <HeroInlineForm
                    region="us"
                    source="services_document_intake_ai_agents_hero"
                    service="Document Intake AI Agents"
                    submitLabel="See a demo on my data"
            trustText="Working software on your own data before you sign. Founder replies within 24 hours."
          />
                </div>

                <p className={`${styles.heroDetails} mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600`}>
                  We are a services company, and what we build is yours. The agent reads inbound PDFs, scans and email
                  attachments, such as orders, invoices, forms, claims and applications. It pulls the fields out,
                  checks them against your system of record, sends the unsure ones to a person and files the result.
                  We sell no document-processing product, and this page names ten you can rent, with the list prices
                  their makers print. Before any work starts you have a fixed quote in writing.
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
                  <span>Demo on your own documents before a contract</span>
                  <span>500+ businesses served</span>
                  <span>Founded 2014</span>
                  <span>Sources read {CHECKED_ON}</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
                  <figcaption className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                    What happens to one inbound document
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
                      Orange rows are done by the agent we build for you.
                    </li>
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-[3px] h-3 w-3 flex-shrink-0 rounded-sm border-[1.5px] border-[#14110F] bg-white" />
                      The black-outline row is your reviewer.
                    </li>
                  </ul>
                  <p className="mt-3 font-fj-body text-[13px] leading-snug text-fj-neutral-600">
                    The agent decides nothing. Approving a claim, accepting an application or releasing money stays
                    with named people.
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
                AI document processing means software reads an inbound document, such as an order, invoice, form, claim
                or application, pulls the fields out, checks them against your records and files the result.
                FactoryJet designs, builds and supports that as an agent on your own systems. When the agent is unsure
                of a field, a person looks at it.
              </p>
              <p className="mt-4 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                A search for this phrase is usually a search for software. The phrase &ldquo;ai document
                processing&rdquo; drew about 1,900 US searches a month in the figures we pulled on {CHECKED_ON}. That
                day, page one of Google held guides and tool lists from SoftKraft, FlowWright, Unstructured,
                Microsoft, PuppyGraph and Blue Prism, plus a Reddit thread and a video. FactoryJet sells no product.
                If one of the ten products on this page already fits your documents, rent it. The section below shows
                how to tell.
              </p>
            </div>
          </div>
        </section>

        {/* 3. RENT A PRODUCT OR HAVE AN AGENT BUILT */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Rent or build</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Rent a document-processing product, or have an agent built.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Read this section before you talk to anyone, us included. It gives five signs that a rented product will
              do and five signs that it will not. Every product fact comes from the maker&rsquo;s own page, read on{' '}
              {CHECKED_ON}. The ten products appear{' '}
              <a href="#document-products" className="font-semibold text-fj-ink underline underline-offset-4">
                lower on this page
              </a>{' '}
              with the prices their makers print.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <h3 className="font-fj-display text-xl font-semibold text-fj-ink">Rent a product if</h3>
                <FitList items={RENT_WHEN} accent={false} />
              </div>
              <div className="lg:col-span-6">
                <h3 className="font-fj-display text-xl font-semibold text-fj-ink">Have one built if</h3>
                <FitList items={BUILD_WHEN} accent />
              </div>
            </div>

            <p className="mt-8 max-w-3xl font-fj-body text-base leading-relaxed text-fj-ink">
              The two routes also combine. A rented reader can pull the fields out while an agent built for you does
              the checking, the review queue and the filing around it.
            </p>
          </div>
        </section>

        {/* 4. WHAT THE READING TOOLS TAKE AND RETURN */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">The readers</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              What Amazon Textract, Google Document AI, Azure and the AI models will take.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              A built agent uses one or more of these to do the reading, so their limits shape the build. The four
              cards below repeat what each maker&rsquo;s documentation said on {CHECKED_ON}. If your documents are
              vendor invoices, the page to read is{' '}
              <Link
                href="/services/accounts-payable-automation"
                className="font-semibold text-fj-ink underline underline-offset-4"
              >
                accounts payable automation
              </Link>
              .
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
              {READERS.map((c) => (
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
                Three limits in those pages that change the build.
              </h3>
              <ul className="mt-4 grid max-w-3xl gap-3 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  A password stops the reading. Amazon, Microsoft and Anthropic each say a PDF must arrive without
                  one. If your senders lock their statements or pay stubs, the agent needs a path for those files.
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  Long documents take the slow lane. Textract answers at once for a single page of PDF, and
                  Google&rsquo;s online limit is 15 pages for most processors. Anything longer runs as a batch job
                  and answers later.
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  The review screen and the splitting are yours to supply. Google lists its Human in the Loop feature
                  as deprecated since January 16, 2024, and its splitters leave the file whole. Microsoft&rsquo;s
                  current classifier does not split by default.
                </li>
              </ul>
              <SourceLinks ids={['textractLimits', 'azureRead', 'claudePdf', 'gdocLimits', 'gdocDeprecations', 'azureClassifier']} />
            </div>
          </div>
        </section>

        {/* 5. COMPARISON: three ways to get documents read and filed */}
        <ComparisonTable
          eyebrow="Side by side"
          headline="Rent a product, wire up a cloud reader, or have an agent built."
          lead="None of the three is wrong. The right one depends on your documents and on who you want to own the work. We give our view on the scoping call, including when it points to a product."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer={`Every cell that names a product or a maker restates that maker's own page, read on ${CHECKED_ON}. The sources list near the foot of this page links each one.`}
          scrollRegionLabel="Comparison of three ways to get inbound documents read and filed"
        />

        {/* 6. SEVEN JOBS */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">The work, step by step</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              What the agent does with each document, in seven steps.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              One term covers most of what follows. A field is a single piece of data on a document, such as a name, a
              date or an amount. Each card says what the agent does at that step and what the makers&rsquo; pages say
              about it. If the documents are orders bound for an ERP, the overview page is{' '}
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
                    <span className="font-semibold">Keep in mind.</span> {s.note}
                  </p>
                  <SourceLinks ids={s.sources} />
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Four things stay with your people in every build: deciding a claim or an application, accepting a new
              customer or vendor, releasing money, and changing the rules the agent follows. DataForSEO&rsquo;s US
              figures, pulled on {CHECKED_ON}, put document automation at about 390 searches a month and AI document
              review at about 260.
            </p>
            <p className="mt-3 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
              Notes taken from makers&rsquo; pages were read on {CHECKED_ON}.
            </p>
          </div>
        </section>

        <MidPageCTA
          headline="Describe what lands in your inbox and where it must be filed. You will hear back whether renting covers it."
          sub="Share the kinds of document, a rough monthly count and the system each one ends up in. Our reply names the product we would try first if we were you, outlines the agent we would build if no product fits, and gives a fixed quote where a build makes sense."
          label="Scope my intake agent"
        />

        {/* 7. WHERE THE DOCUMENTS GO: provider data statements */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Your data</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Where your documents go, and what each AI provider says it does with them.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  A document intake agent sends each page to a reading service or an AI model. Those providers publish
                  what they do with what they receive, and their answers differ.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  The list has ten points. The first five quote the providers, the next three describe how we set an
                  agent up, and the last two stay with your team.
                </p>
                <p className="mt-4 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                  Treat these as planning notes, read on {CHECKED_ON}. They are not legal advice. Providers edit these
                  pages, so read the linked page and your own contract before you rely on any of them.
                </p>
                <SourceLinks
                  ids={['openaiData', 'anthropicTraining', 'anthropicRetention', 'googleRetention', 'azurePrivacy', 'azureModelsData', 'textractFaq']}
                />
              </div>

              <ul className="grid gap-3 lg:col-span-8">
                {DATA_NOTES.map((k) => (
                  <li
                    key={k.rule}
                    className={`grid grid-cols-1 gap-2 rounded-2xl border bg-fj-cream px-5 py-4 sm:grid-cols-[190px_1fr] sm:gap-5 ${
                      k.keeper === 'build' ? 'border-[#F05A28]/45' : 'border-fj-neutral-200'
                    }`}
                  >
                    <div>
                      <div className="font-fj-display text-base font-semibold text-fj-ink">{k.rule}</div>
                      <div
                        className={`mt-1 font-fj-mono text-xs font-bold uppercase tracking-wider ${
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
            <p className="fj-eyebrow">Failure points</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Eight things that trip a document intake project.
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Each one traces to a sentence on a maker&rsquo;s page, linked beneath it. Put files like these in your
              test sample on day one.
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
            <p className="fj-eyebrow">Who you would work with</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Our experience with documents and the systems they end up in.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Founded in 2014, FactoryJet has served more than 500 businesses. Four things are useful to know before
              you ask for a quote.
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
                <p className="fj-eyebrow">Typical buyers</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Four kinds of team that retype what arrives by email.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  The document changes from trade to trade and the work stays the same. Something arrives, a person
                  reads it, checks it against a record and types it into a system.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  The four examples here are kinds of team this work suits. They are not a client list. For client
                  intake at a law firm, see{' '}
                  <Link
                    href="/services/legal-ai-agents"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    AI for law firms
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
                  Six steps from a sample of documents to a supported agent.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Six steps, in the order we take them. The first two can end the project early, which is why they
                  come first. Once the agent is live,{' '}
                  <Link
                    href="/services/ai-agent-monitoring"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    AI agent monitoring and support
                  </Link>{' '}
                  covers the watching and the re-testing. Document intake is often one step in a longer process, and{' '}
                  <Link
                    href="/services/ai-automation"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    AI workflow automation
                  </Link>{' '}
                  covers the rest of it. For other kinds of agent, see{' '}
                  <Link
                    href="/services/ai-agent-development"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    AI agent development
                  </Link>
                  .
                </p>
                <img
                  src={`${IMG}/sorting-paper-three-trays.webp`}
                  alt="A woman with short grey hair in a dark green cardigan places a blank sheet of paper into an orange wire tray that sits between two white wire trays on a long pale wood table, beside a tall stack of white paper"
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

        {/* 12. TEN DOCUMENT-PROCESSING PRODUCTS YOU CAN RENT */}
        <section id="document-products" className="border-t border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Products to rent</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Ten document-processing products you can rent, with list prices.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  FactoryJet compiled this list and sells none of the ten. Every entry was read on the maker&rsquo;s
                  own site on {CHECKED_ON}. Each line restates that page and quotes its list price if one is printed.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Six of the ten print a dollar price on the page we read. Docsumo prints a free trial and quotes the
                  rest. Three print no price. The order runs from self-serve to enterprise and is not a ranking.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  What a product cannot bring is your own rule book. A built agent starts from it, checks against the
                  records you already keep, and stays your property.
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
            <p className="fj-eyebrow">Keep reading</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Related services and one guide.
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
                <p className="fj-eyebrow">How this page was made</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Every source, opened on {CHECKED_ON}.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Every file limit, product feature, list price and data statement on this page was read on the pages
                  listed here that day. All of them answered a plain web request. These pages change often. Open the
                  link and confirm a figure before you rely on it.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Two pages returned no content to a plain request and are not used: OpenAI&rsquo;s enterprise privacy
                  page and Google&rsquo;s Gemini API guide to documents. Search volumes are DataForSEO&rsquo;s US monthly
                  averages, and the page-one results were read through DataForSEO on the same day.
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
          eyebrow="AI document processing FAQ"
          headline="Document intake questions, with straight answers."
          lead={`What operations leads, IT managers and business owners ask before putting an agent on their inbound documents. Where an answer names a product or a provider, it restates that company's own page as it stood on ${CHECKED_ON}.`}
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 16. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="AI document processing"
          headline="Every inbound document read, checked and filed. Every decision still yours."
          sub="Tell us what arrives and where it has to go. We say what a rented product already covers, let you watch an early build read your own documents, and stay on after launch."
          primaryCta={{ label: 'Scope my intake agent', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="See it read your own documents before any contract. One fixed quote, in writing. The code is yours."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
