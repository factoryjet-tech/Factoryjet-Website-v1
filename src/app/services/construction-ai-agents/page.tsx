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

/* ─────────────────────────────────────────────────────────────────────────────
   /services/construction-ai-agents, built 2026-10-11.

   Why this page exists: US monthly searches measured 2026-10-11 (DataForSEO,
   location 2840): "ai for construction" 2,400 (KD 17), "ai estimating
   software" 390, "ai takeoff software" 320, "ai construction estimating
   software" 260, "ai construction estimating" 210, "ai for construction
   estimating" 170, "ai for contractors" 140, "construction estimating ai" 90,
   "ai for construction management" 70, "ai agents for construction" 40, "ai
   for general contractors" 30, "ai for electrical contractors" 30, "ai
   receptionist for contractors" 20. Two buyer questions from the 9 Oct 2026
   assistant runs are answered first in the FAQ. FactoryJet had no construction
   page.

   Truth rules for anyone editing this file:
   - Every fact about another company (feature names, limits, prices, numbers)
     was read on that company's own page on 2026-10-11 and links to it through
     the SRC map below. procore.com, kreo.net, togal.ai, ibeam.ai, the voice
     pricing pages, census.gov and docs.fcc.gov answered a plain request.
     sage.com, quickbooks.intuit.com and developer.intuit.com were read in a
     browser. Procore's developer documentation was read on its public
     documentation site, procore.github.io. If you change a fact, re-fetch the
     page first and update CHECKED_ON.
   - buildertrend.com returned 403 to every request that day. Buildertrend is
     named once, where QuickBooks' own page lists it as a connected app.
     Nothing else on this page rests on it.
   - No client is named and no construction client is claimed. The experience
     statement is Bhavesh's own of 2026-10-09 and 2026-10-11: work on Odoo,
     NetSuite, SAP Business One, ERPNext and custom ERPs, on RFQ automation and
     quoting, daily bookkeeping, and purchase and sales order generation, plus
     AI voice agents for call centres and small offices, and EDI, punchout
     catalog, Xero, HubSpot and WhatsApp integrations. Do not add a client, a
     result or a partner title.
   - No FactoryJet prices. No figure anywhere for what a custom agent costs to
     run or maintain (rule of 2026-10-11). The dollar figures on the page are:
     the ProductCrafters market range for a BUILD in one FAQ answer, list
     prices of two named ready-made phone products in one FAQ answer, and the
     Census Bureau's construction spending estimate.
   - Nothing on this page says where the FactoryJet team is.
   - Accuracy figures for takeoff products are each vendor's own claim.
   - Mirrors /services/netsuite-ai-agents for components, props and schema.

   Schema: WebPage + Service + FAQPage + ItemList + BreadcrumbList.
   Organization is rendered once sitewide by src/app/layout.tsx and referenced
   here by @id. The FAQPage mainEntity is generated from the exact FAQ_ITEMS
   array the visible <FAQ> component renders. There is no second array.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/construction-ai-agents';
const PAGE_TITLE = 'AI for Construction: Custom Agents for Contractors | FactoryJet';
const PAGE_DESC =
  'We design, build and support AI agents for US contractors: quotes from your price book, bid intake, submittals, phone answering and purchase orders.';
const PAGE_PUBLISHED = '2026-10-11';
const PAGE_MODIFIED = '2026-10-11';
const CHECKED_ON = '11 Oct 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/construction-ai-agents';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'ai for construction',
    'ai agents for construction',
    'ai for contractors',
    'ai estimating software',
    'ai construction estimating software',
    'ai construction estimating',
    'ai for construction estimating',
    'construction estimating ai',
    'ai takeoff software',
    'ai for construction management',
    'ai for general contractors',
    'ai for electrical contractors',
    'ai receptionist for contractors',
    'ai sales agent for construction companies',
    'construction ai agents',
    'custom ai agent for contractors',
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
        alt: 'FactoryJet, AI agents for US construction companies and contractors',
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
  { name: 'Construction AI Agents', url: CANONICAL_URL },
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
  name: 'AI Agent Development for Construction Companies and Contractors',
  serviceType:
    'AI agents for construction companies, estimating and quoting automation, bid and RFP intake, submittal and document handling, AI voice agents for contractor phone lines, purchase order automation, vendor bill matching and job cost coding',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'FactoryJet designs, builds, tests and supports AI agents for US general contractors, specialty contractors, home builders and building suppliers. An agent reads what arrives, such as a request for a quote, an invitation to bid, a submittal, a supplier invoice or a phone call, looks up the price book and job records, and saves a draft for a person to approve. Work covers checking what the contractor already owns, building with read-only access first, a period of running beside the team, launch and support after launch.',
  url: CANONICAL_URL,
};

/* ── Sources. One map, used by every inline source link (the `short` label) AND
   by the visible "Sources" list near the foot of the page (the full `label`).
   Each URL was opened on 2026-10-11 and the supporting sentence read before the
   claim was written. The ledger with the quoted words is in the build notes. ── */
const PROCORE_DOCS = 'https://procore.github.io/documentation';
const INTUIT_API = 'https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities';

const SRC = {
  procoreAi: {
    short: 'Procore: Procore AI',
    label: 'Procore: AI Construction Software (Procore AI overview)',
    url: 'https://www.procore.com/ai',
  },
  procoreAgents: {
    short: 'Procore: agent library',
    label: 'Procore: Procore AI Agent Library',
    url: 'https://www.procore.com/ai/agents',
  },
  procoreSubmittal: {
    short: 'Procore: what is a submittal',
    label: 'Procore Support: What is a submittal?',
    url: 'https://support.procore.com/faq/what-is-a-submittal',
  },
  procoreApi: {
    short: 'Procore developers: start here',
    label: 'Procore developer documentation: Start Here (REST APIs, custom apps, Agentic APIs)',
    url: `${PROCORE_DOCS}/introduction`,
  },
  procoreDmsa: {
    short: 'Procore developers: service accounts',
    label: 'Procore developer documentation: Developer Managed Service Accounts (DMSA)',
    url: `${PROCORE_DOCS}/developer-managed-service-accounts`,
  },
  procoreRate: {
    short: 'Procore developers: rate limiting',
    label: 'Procore developer documentation: Rate Limiting',
    url: `${PROCORE_DOCS}/rate-limiting`,
  },
  procoreWebhooks: {
    short: 'Procore developers: webhooks',
    label: 'Procore developer documentation: How Webhooks Work',
    url: `${PROCORE_DOCS}/webhooks`,
  },
  autodeskAi: {
    short: 'Autodesk: AI for construction',
    label: 'Autodesk: AI for Construction, Autodesk Forma',
    url: 'https://construction.autodesk.com/workflows/artificial-intelligence-construction/',
  },
  sageConstruction: {
    short: 'Sage: Sage for Construction',
    label: 'Sage US: Construction accounting and management software (read in a browser)',
    url: 'https://www.sage.com/en-us/sage-construction/',
  },
  sageCopilot: {
    short: 'Sage: Sage Copilot',
    label: 'Sage US: Sage Copilot, generative AI finance assistant (read in a browser)',
    url: 'https://www.sage.com/en-us/sage-copilot/',
  },
  sageDev: {
    short: 'Sage Intacct Developer',
    label: 'Sage Intacct Developer: REST API and XML API',
    url: 'https://developer.intacct.com/',
  },
  qbConstruction: {
    short: 'QuickBooks: construction',
    label: 'QuickBooks: Construction Accounting Software (read in a browser)',
    url: 'https://quickbooks.intuit.com/industry/construction/',
  },
  qbAi: {
    short: 'QuickBooks: Intuit AI',
    label: 'QuickBooks: AI-Powered Business Tools, Intuit AI (read in a browser)',
    url: 'https://quickbooks.intuit.com/ai-accounting/',
  },
  qbEstimateApi: {
    short: 'Intuit Developer: Estimate',
    label: 'Intuit Developer: QuickBooks Online API reference, Estimate (read in a browser)',
    url: `${INTUIT_API}/estimate`,
  },
  qbPoApi: {
    short: 'Intuit Developer: PurchaseOrder',
    label: 'Intuit Developer: QuickBooks Online API reference, PurchaseOrder (read in a browser)',
    url: `${INTUIT_API}/purchaseorder`,
  },
  qbWebConnector: {
    short: 'Intuit Developer: Web Connector',
    label: 'Intuit Developer: Get started with QuickBooks web connector (read in a browser)',
    url: 'https://developer.intuit.com/app/developer/qbdesktop/docs/get-started/get-started-with-quickbooks-web-connector',
  },
  togal: {
    short: 'Togal',
    label: 'Togal: Construction Takeoff Software for Estimators',
    url: 'https://www.togal.ai/',
  },
  kreo: {
    short: 'Kreo',
    label: 'Kreo: AI Takeoff and Estimating Software for Construction',
    url: 'https://www.kreo.net/',
  },
  beam: {
    short: 'Beam AI',
    label: 'Beam AI: AI Takeoff and Construction Estimating Software',
    url: 'https://www.ibeam.ai/',
  },
  stack: {
    short: 'STACK',
    label: 'STACK: Cloud-Based Construction Software Solutions',
    url: 'https://www.stackct.com/',
  },
  drawer: {
    short: 'Drawer AI',
    label: 'Drawer AI: Automated Electrical Takeoff and Estimating',
    url: 'https://drawer.ai/',
  },
  trimble: {
    short: 'Trimble: AI in estimating',
    label: 'Trimble: Transform your estimating workflow with AI',
    url: 'https://www.trimble.com/en/blog/construction/article/stop-counting-start-winning-how-ai-is-transforming-your-estimating-workflow',
  },
  goodcall: {
    short: 'Goodcall: pricing',
    label: 'Goodcall: Pricing',
    url: 'https://www.goodcall.com/pricing',
  },
  smith: {
    short: 'Smith.ai: AI Receptionist pricing',
    label: 'Smith.ai: AI Receptionist plans and pricing',
    url: 'https://smith.ai/pricing/ai-receptionist',
  },
  retell: {
    short: 'Retell AI: pricing',
    label: 'Retell AI: AI Phone Agent Pricing',
    url: 'https://www.retellai.com/pricing',
  },
  bland: {
    short: 'Bland AI: pricing',
    label: 'Bland AI: Pricing',
    url: 'https://www.bland.ai/pricing',
  },
  vapi: {
    short: 'Vapi: pricing',
    label: 'Vapi: Pricing',
    url: 'https://vapi.ai/pricing',
  },
  fcc: {
    short: 'FCC: ruling on AI voices, 8 Feb 2024',
    label: 'Federal Communications Commission: FCC Makes AI-Generated Voices in Robocalls Illegal (news release, 8 Feb 2024)',
    url: 'https://docs.fcc.gov/public/attachments/DOC-400393A1.pdf',
  },
  census: {
    short: 'US Census Bureau: construction spending',
    label: 'US Census Bureau: Monthly Construction Spending, August 2026 (release CB26-158, 1 Oct 2026)',
    url: 'https://www.census.gov/construction/c30/current/index.html',
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
   The first two questions are the buyer questions from the 9 Oct 2026
   assistant runs (US:B093 and US:N11). The rest come from People Also Ask on
   ten US Google searches pulled from DataForSEO on 2026-10-11 (location 2840,
   career questions left out) and from the page's own keywords. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'jobs', label: 'What AI does for contractors' },
  { key: 'estimating', label: 'Estimating and takeoff' },
  { key: 'software', label: 'Procore, Sage and QuickBooks' },
  { key: 'control', label: 'Control and rules' },
  { key: 'working', label: 'Working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── What AI does for contractors ─────────────────────────────────
  {
    category: 'jobs',
    question: 'Who builds an autonomous AI sales agent for construction companies?',
    answer:
      'FactoryJet builds these as custom agents. For a contractor, the agent answers inbound calls and web forms at any hour, asks about the job, books the site visit and follows up on quotes you have sent. It can draft the quote from your price book for your estimator to approve. Prices and contracts stay with your people. Before a contract, we show the agent working on your own data.',
  },
  {
    category: 'jobs',
    question: 'Which vendors offer pay-as-you-go pricing for AI voice agents suited for seasonal construction spikes?',
    answer:
      "Retell AI, Bland and Vapi bill by the minute with no monthly minimum on their entry plans, per their pricing pages on 11 Oct 2026. For a seasonal spike, compare how many calls each runs at once. Retell AI lists 20 free concurrent calls, Bland's Start plan 10 with a cap of 100 calls a day, and Vapi 4 on its usage plan. Goodcall bills per caller served and Smith.ai per call. All five are products you set up yourself. For a custom voice agent, FactoryJet quotes the build and the ongoing support as fixed prices in writing.",
  },
  {
    category: 'jobs',
    question: 'What is an AI agent for a construction company?',
    answer:
      'It is software that does one office task and stops at a draft. It reads what arrives, such as a request for a quote, an invitation to bid or a supplier invoice, looks up your price book and job records, and saves a draft for a person to approve. Unlike a chatbot, it starts work when the document arrives, with no one typing a prompt.',
  },
  {
    category: 'jobs',
    question: 'How is AI being used in construction?',
    answer:
      "Mostly for paperwork. Takeoff tools measure drawings. Procore's agent library, which listed 20 pre-built agents when we counted on 11 Oct 2026, drafts RFIs (requests for information), checks submittals against specs and turns field photos and voice notes into daily logs. Autodesk generates submittal logs and fills a bid board from forwarded bids. Custom agents cover work that crosses systems, such as quotes from your price book, phone answering and purchase orders.",
  },
  {
    category: 'jobs',
    question: "What's the best AI for construction?",
    answer:
      'There is no single best one, because each tool does a different job. For measuring drawings, look at takeoff tools such as Togal, Kreo and Beam AI. For questions about project records, use the AI inside the platform that holds them, such as Procore or Autodesk Forma. For bookkeeping, start with Sage Copilot or Intuit AI. For work that uses your own price book or crosses two systems, have an agent built.',
  },
  {
    category: 'jobs',
    question: 'Is there an AI for contractors?',
    answer:
      "Yes, several kinds. QuickBooks' AI page describes AI-drafted estimates you review and edit, and follow-ups to leads found in your inbox. Ready-made phone products such as Goodcall and Smith.ai answer calls for small offices. Takeoff tools measure plans. A custom agent is the route when the work depends on your own prices and rules, for example a quote drafted from your item list for your estimator to check.",
  },
  {
    category: 'jobs',
    question: 'What is the best AI-based construction management software?',
    answer:
      'We build agents and do not sell or rank management software. Two platforms publish what their AI does. Procore lists pre-built agents for RFIs, submittals, daily logs and bid leveling, and puts Agent Studio, for configuring your own, in its Enterprise tier. Autodesk Forma, the new name for Autodesk Construction Cloud, includes Autodesk Assistant and automatic submittal logs. Choose by where your project records already live.',
  },
  {
    category: 'jobs',
    question: 'Can an AI agent read bid invitations and tell us which jobs to bid?',
    answer:
      'It can do the reading and the sorting. The agent pulls the due date, scope, location and bonding requirements out of each invitation, checks them against rules you set, such as trade, distance and current backlog, and writes a one-page summary with a suggested go or no-go. A person makes the decision. Beam AI and Autodesk both ship bid tracking of their own, so check those first if you use them.',
  },
  {
    category: 'jobs',
    question: 'Can an AI agent handle submittals?',
    answer:
      'Parts of them. A submittal is the product data, shop drawings or samples sent for approval before material is ordered. An agent can list what each spec section requires, match manufacturer cut sheets to it, flag a mismatch and keep the log current. Review and approval stay with your project engineer and the design team. If you run Procore, its Submittal Review Agent already cross-checks submittals against specs and contracts.',
  },
  // ── Estimating and takeoff ───────────────────────────────────────
  {
    category: 'estimating',
    question: 'Can ChatGPT do construction takeoffs?',
    answer:
      'In our view a general chat assistant is the wrong tool for it, and we would not price a job from its count. Measuring to scale is what takeoff tools are made for, and they publish their accuracy. Togal states up to 98% on floor plans. Kreo says its Auto Measure 3.0 lands within 94% of the real geometry on busy plans. This question appeared on five of the ten Google searches we ran on 11 Oct 2026.',
  },
  {
    category: 'estimating',
    question: 'Can ChatGPT do construction estimates?',
    answer:
      'Not on its own. An estimate needs two things a chat window does not have: quantities measured from the drawings and your current prices. A takeoff tool supplies the first. Your price book supplies the second. An agent built for you joins the two and saves a draft estimate in your system, where your estimator checks every line before it goes out.',
  },
  {
    category: 'estimating',
    question: 'What is AI takeoff?',
    answer:
      'Takeoff is counting and measuring what a drawing calls for, such as square feet of drywall, feet of conduit and numbers of fixtures. AI takeoff means software does the detecting and measuring from the PDF. Togal describes its tool as one that automatically detects, measures and compares directly from drawings. Drawer AI says it detects power devices, lighting fixtures and panel schedules on PDF drawings. Have a person check the result before it is priced.',
  },
  {
    category: 'estimating',
    question: 'What is the best AI takeoff software?',
    answer:
      "We do not rank them. On 11 Oct 2026, Togal ranked first on Google in the US for both 'ai takeoff software' and 'ai estimating software'. Togal, Kreo, Beam AI, STACK and Trimble all sell AI takeoff, and Drawer AI is built for electrical work. Their accuracy figures are their own claims. Ask each for a trial on a drawing set you have already measured by hand, and compare.",
  },
  {
    category: 'estimating',
    question: 'How can AI help with construction estimating?',
    answer:
      'In four places. Takeoff tools measure the drawings. An agent reads the request and the spec, so nothing the customer asked for is missed. It prices each line from your own item list and flags the lines it cannot match. And it follows up after the quote goes out. The estimator keeps the judgment calls, such as scope gaps, exclusions, site conditions and margin.',
  },
  {
    category: 'estimating',
    question: 'Should I buy AI estimating software or have an agent built?',
    answer:
      'Buy software for measuring drawings. That problem is the same for every contractor, and products exist for it. Have an agent built for what is particular to you: your price book, your customer terms, the ERP or accounting system your orders live in, and the way your office follows up. The two work together, with the agent picking up from the quantities the takeoff tool exports.',
  },
  {
    category: 'estimating',
    question: 'What is the best AI tool for electricians?',
    answer:
      'For takeoff, two vendors publish electrical features. Drawer AI says it detects power devices, lighting fixtures and panel schedules on PDF drawings and generates conduit paths from each panel to every device. Trimble says its Automate Takeoff feature detects and counts outlets, switches and fire alarm systems. For the office side of an electrical contractor, such as quotes, phones and purchase orders, a custom agent fits.',
  },
  // ── Procore, Sage and QuickBooks ─────────────────────────────────
  {
    category: 'software',
    question: 'Does Procore have AI agents?',
    answer:
      "Yes. Procore's agent library listed 20 pre-built agents when we counted on 11 Oct 2026, including a Submittal Review Agent, an RFI Agent, a Bid Leveling Agent and a Daily Log Agent. Procore says more than 150 built-in actions let agents create or update records, that its AI follows your existing role-based permissions, and that agents never take action without sign-off. Agent Studio, for configuring your own agents, is listed in the Enterprise tier.",
  },
  {
    category: 'software',
    question: 'Can a custom AI agent work with Procore?',
    answer:
      "Yes. Procore's developer documentation describes REST APIs secured with OAuth 2.0, a standard sign-in method for software, for creating, reading, updating and deleting records. It says a custom app can be installed privately for one company, and a company administrator chooses which projects the app can reach. Plan for two rate limits, one hourly and one over 10 seconds. Procore also says its Agentic APIs are in a Design Partner pilot.",
  },
  {
    category: 'software',
    question: 'Can an AI agent create estimates and purchase orders in QuickBooks?',
    answer:
      "In QuickBooks Online, yes. Intuit's developer reference lists create, read, update and send operations for both the Estimate and the PurchaseOrder objects, and calls a purchase order a non-posting transaction. QuickBooks Desktop works differently. Intuit says its Web Connector is a Windows application installed on the same machine or local network as QuickBooks, so an agent exchanges data through that.",
  },
  {
    category: 'software',
    question: 'Does Sage have AI for construction?',
    answer:
      "Sage's construction page lists AI-powered takeoff tools that feed its estimates, alongside bid management and job costing with purchase orders and AIA-style billing. Sage Copilot is its AI finance assistant, shown for Sage Intacct, and Sage notes that some features shown are illustrative and vary by product and region. For custom work, Sage Intacct's developer site recommends its REST API.",
  },
  {
    category: 'software',
    question: 'Where does the agent get its prices from?',
    answer:
      'From your own item list and customer terms, read from the system that holds them. That can be an ERP such as Odoo, NetSuite, SAP Business One or ERPNext, an accounting system with an API such as QuickBooks Online, or a spreadsheet to begin with. It does not take prices from the internet. A line it cannot match to an item is flagged for your estimator.',
  },
  // ── Control and rules ────────────────────────────────────────────
  {
    category: 'control',
    question: 'Will the agent send a quote or a purchase order without approval?',
    answer:
      'No. Every quote, bid summary, submittal package and purchase order is saved as a draft, and a named person on your team approves it before it goes anywhere. The software vendors draw the same line. Procore says its agents never take action without sign-off, and Autodesk says its AI works with the expert in control.',
  },
  {
    category: 'control',
    question: 'Is it legal to use an AI voice agent to call construction leads?',
    answer:
      "Answering your own inbound line is one thing. Calling people is another. On 8 February 2024 the FCC ruled that calls made with AI-generated voices are 'artificial' under the Telephone Consumer Protection Act, and its rules require telemarketers to obtain prior express written consent before robocalling consumers. We build inbound answering and follow-up to people who asked for a quote. Ask your lawyer before any outbound campaign. This is not legal advice.",
  },
  {
    category: 'control',
    question: 'What happens when the voice agent cannot answer a caller?',
    answer:
      'It hands the call to a person. We set the rules with you before launch: which questions it answers, when it transfers to the office or a mobile, and what it does after hours, which is usually to take the details and book a call back. Every call is logged with a summary, so your office does not have to ask the caller the same questions again.',
  },
  // ── Working with us ──────────────────────────────────────────────
  {
    category: 'working',
    question: 'How much does a custom AI agent for a construction company cost?',
    answer:
      "It depends on how many systems the agent reads and whether it writes to them. Building a custom AI agent costs roughly $5,000 to more than $180,000, according to development firm ProductCrafters' 2026 breakdown. That range covers every kind of agent and is not specific to construction. FactoryJet quotes the build and the ongoing support as fixed prices in writing after a short scoping call.",
  },
  {
    category: 'working',
    question: 'How much should an AI receptionist cost?',
    answer:
      "For ready-made products, the vendors' own pages showed this on 11 Oct 2026. Goodcall lists plans at $79, $129 and $299 a month, billed by the number of different callers served. Smith.ai's AI Receptionist lists a free tier of 25 calls a month and plans at $150 and $500 a month, billed per call. A custom voice agent is a build. FactoryJet quotes that build and the ongoing support as fixed prices in writing.",
  },
  {
    category: 'working',
    question: 'How long does it take to build an AI agent for a contractor?',
    answer:
      'A pilot on one focused job, such as drafting quotes from emailed requests, usually takes two to four weeks. A production build with permissions, logging, approvals and monitoring usually takes six to twelve weeks. Access to your systems is the biggest variable. It goes fastest when you can hand over a test login and a set of past quotes at the start.',
  },
  {
    category: 'working',
    question: 'Can we see it working before we sign?',
    answer:
      'Yes. Before a contract, we show working software on your own data. For a contractor that usually means one real document, such as a request you have already quoted or a bid invitation you have already answered, run through a first version of the agent so you can compare its draft with what your team did.',
  },
  {
    category: 'working',
    question: 'Do you support the agent after launch?',
    answer:
      "Yes. Software changes. Procore's own documentation says its rate limit values can change at any time. The same team that built the agent watches its logs, re-tests it when something changes and fixes what breaks. FactoryJet keeps managing the servers, the AI models, the API connections and the upkeep, so your office does not have to.",
  },
  {
    category: 'working',
    question: 'Who owns the agent and its code?',
    answer:
      'You do. The agent is built for you and the code is yours, along with the notes that explain how it works. We still look after it day to day: the servers, the AI models, the API connections and the updates. If you later move the work in-house or to another firm, the code and its notes go with you.',
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

/* ── Hero figure. What arrives, what the agent drafts, who approves. ── */
const HERO_ROWS: ReadonlyArray<{ arrives: string; drafts: string; approves: string }> = [
  {
    arrives: 'A request for a price arrives.',
    drafts: 'The agent drafts a quote from your price book.',
    approves: 'Your estimator approves it.',
  },
  {
    arrives: 'An invitation to bid arrives.',
    drafts: 'The agent writes a one-page bid summary.',
    approves: 'You decide whether to bid.',
  },
  {
    arrives: 'The phone rings.',
    drafts: 'The agent answers, books a site visit and writes a call summary.',
    approves: 'Your office confirms the visit.',
  },
  {
    arrives: 'A job is won.',
    drafts: 'The agent drafts purchase orders, one per supplier.',
    approves: 'Your project manager approves each one.',
  },
];

/* ── What the software contractors already use ships for AI. Each card restates
   the vendor's own pages as read on 2026-10-11. Nothing here is our opinion of
   the product. ── */
const SHIPS: ReadonlyArray<{
  name: string;
  kind: string;
  says: string;
  sources: ReadonlyArray<SrcKey>;
  span: string;
}> = [
  {
    name: 'Procore AI',
    kind: 'Project management · agents built in',
    says: "Procore's agent library listed 20 pre-built agents when we counted. Among them are a Submittal Review Agent that cross-checks submittals against specs and contracts, an RFI Agent that drafts RFIs for review, a Bid Leveling Agent that compares subcontractor bids side by side, and a Daily Log Agent. Procore says more than 150 built-in actions let agents create or update records such as RFIs and daily logs, and that agents never take action without sign-off. Agent Studio, for configuring agents of your own in plain language, is listed in the Enterprise tier.",
    sources: ['procoreAi', 'procoreAgents'],
    span: 'lg:col-span-7',
  },
  {
    name: 'Autodesk Forma',
    kind: 'Formerly Autodesk Construction Cloud',
    says: "Autodesk's page says Autodesk Construction Cloud is now part of Autodesk Forma. It describes Autodesk Assistant for asking questions of project data, submittal logs generated automatically with suggested missing submittals, and bids forwarded from any source onto a bid board. On whether a person still reviews the work, Autodesk says the expert stays in control.",
    sources: ['autodeskAi'],
    span: 'lg:col-span-5',
  },
  {
    name: 'Sage for Construction',
    kind: 'Accounting, estimating and job cost',
    says: "Sage says more than 50,000 construction businesses use its software. Its construction page lists estimates tied to job cost codes, invitation to bid and bid analysis tools, AI-powered takeoff, and job costing with purchase orders and AIA-style billing. Sage Copilot is its AI finance assistant, and Sage notes that some Copilot features shown are illustrative and vary by product and region. For developers, Sage Intacct recommends its REST API and says all new objects and features will be released there.",
    sources: ['sageConstruction', 'sageCopilot', 'sageDev'],
    span: 'lg:col-span-5',
  },
  {
    name: 'QuickBooks and Intuit AI',
    kind: 'Accounting for smaller contractors',
    says: "QuickBooks' construction page covers estimates with photos, contracts and a deposit, and job costing by project. It lists Knowify, JobTread, Houzz Pro, Buildertrend and Housecall Pro as connected apps. Intuit's AI page describes a Project Management AI and a Customer AI that finds leads in your inbox and drafts follow-ups for you to edit and send. It says you review and edit AI-drafted estimates. The QuickBooks plan table marks some AI features as beta. For developers, the QuickBooks Online API has Estimate and PurchaseOrder objects.",
    sources: ['qbConstruction', 'qbAi', 'qbEstimateApi', 'qbPoApi'],
    span: 'lg:col-span-7',
  },
];

/* ── Five questions that decide the route. A numbered list on purpose. ── */
const DECIDE_STEPS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'Does the job live inside one system you already pay for?',
    b: "If the records are all in Procore or Autodesk Forma, try that platform's own AI first. Procore's library listed 20 pre-built agents when we counted, and Autodesk generates submittal logs and fills a bid board from forwarded bids.",
  },
  {
    n: '02',
    t: 'Is the job measuring drawings?',
    b: 'Buy a takeoff tool. Togal, Kreo, Beam AI, STACK, Trimble and Drawer AI each sell one. All six are in the product list further down this page, with a link to each vendor.',
  },
  {
    n: '03',
    t: 'Does it need your price book, your phone line or two systems at once?',
    b: "That is where a custom agent fits. Examples are a quote priced from the item list in your ERP, a call answered in your company's name, and a purchase order drafted from a won estimate while the bid log is updated in the same step.",
  },
  {
    n: '04',
    t: 'Can the rules be written down?',
    b: 'If your estimator can explain a price as rules, such as item, quantity, customer tier and markup, an agent can follow them. Where the price rests on judgment about a site or a client, the agent prepares the numbers and the person decides.',
  },
  {
    n: '05',
    t: 'Who approves the result?',
    b: 'Name one person for each kind of document before anything is built. An agent with no named approver has nowhere to send its drafts.',
  },
];

/* ── Six jobs. One card each. Bullets are deliberately uneven. The jobs are the
   ones Bhavesh confirmed FactoryJet builds (quoting from an ERP, voice agents,
   document work, purchase and sales orders, daily bookkeeping), applied to
   construction. No construction client is claimed. ── */
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
    title: 'Estimating and quoting',
    body: 'A customer or a general contractor asks for a price. The agent drafts the quote from your price book, and your estimator checks it before it goes out.',
    items: [
      'Reads the request and its attachments, whether the item list is typed in the email, a PDF or a spreadsheet',
      "Takes measured quantities from your takeoff tool's export. Measuring the drawings stays with that tool",
      "Matches each line to an item in your ERP or accounting system and applies that customer's pricing. A line it cannot match is flagged for a person",
      'Saves a draft estimate. Nothing reaches the customer until someone sends it',
    ],
    note: "In QuickBooks Online a quote is an Estimate. Intuit's developer reference describes it as a proposal from a business to a customer, including proposed pricing, and lists create and send among its operations. Measuring drawings is a separate job. Togal, Kreo and Beam AI sell tools for it, and the agent picks up from their quantities.",
    sources: ['qbEstimateApi', 'togal', 'kreo', 'beam'],
    span: 'lg:col-span-7',
  },
  {
    n: '02',
    title: 'Bid and RFP intake',
    body: 'Invitations to bid and RFPs (requests for proposal) arrive by email and through bid portals. The agent reads each one and writes a one-page summary, so a person can decide whether to bid.',
    items: [
      'Pulls the due date, the scope, the site address and the bonding and insurance requirements out of the documents',
      'Lists what is missing, such as a drawing sheet the invitation mentions and does not attach',
      'Puts the due date on the shared calendar and opens a bid record in your CRM or spreadsheet',
      'Watches the same thread for addenda, which are changes issued after the invitation, and flags what changed',
    ],
    note: 'Autodesk says its AI forwards bids from any source onto a bid board. Beam AI says it captures invitations to bid from your inbox and tracks due dates, RFIs and addenda. If one of those already holds your bids, start there. A custom agent fits where the go or no-go decision uses rules of your own, such as trade, distance, bond size or current backlog.',
    sources: ['autodeskAi', 'beam'],
    span: 'lg:col-span-5',
  },
  {
    n: '03',
    title: 'Submittals and document handling',
    body: 'A submittal is the product data, shop drawings or samples a contractor sends for the design team to approve before material is ordered. The agent assembles and checks the paperwork, and your project engineer signs it off.',
    items: [
      'Reads the specification section and lists each submittal it calls for',
      'Matches manufacturer cut sheets to the items listed, and flags a model number or rating that differs from the spec',
      'Builds the cover sheet and the log entry, and tracks what is still out with the reviewer',
    ],
    note: "Procore defines a submittal as written or physical information provided by a responsible contractor to the general contractor, submitted to the design team for approval before items are fabricated and delivered. Procore and Autodesk both ship AI for the reviewing side. Procore lists a Submittal Review Agent, and Autodesk generates submittal logs with suggested missing items. A custom agent earns its place on the subcontractor's side, assembling the package, or where your documents sit outside those two platforms.",
    sources: ['procoreSubmittal', 'procoreAgents', 'autodeskAi'],
    span: 'lg:col-span-5',
  },
  {
    n: '04',
    title: 'Phone and lead intake',
    body: 'Calls come in while the crew is on a roof and the office is closed. A voice agent answers, asks what the job is and books the next step.',
    items: [
      "Answers in your company's name at any hour and asks what your office would ask: the kind of job, the address, the timing and how the caller heard of you",
      'Books a site visit on your calendar or takes a message, and sends the summary to the right person',
      'Transfers to a person when the caller asks for one or the question is outside what it was set up to answer',
      'Follows up by text or email on a quote you sent, to people who asked for that quote',
    ],
    note: "The FCC ruled on 8 February 2024 that calls made with AI-generated voices are 'artificial' under the Telephone Consumer Protection Act, and its rules require telemarketers to obtain prior express written consent before robocalling consumers. Answering your own inbound line is a different case from cold calling a list, so ask your lawyer before any outbound campaign. For a small office, a ready-made product such as Goodcall or Smith.ai may be all you need.",
    sources: ['fcc', 'goodcall', 'smith'],
    span: 'lg:col-span-7',
  },
  {
    n: '05',
    title: 'Purchase orders',
    body: 'When a job is won or stock runs low, the agent drafts the purchase orders for a buyer or project manager to approve.',
    items: [
      "Reads the approved estimate or the job's material list and groups the lines by supplier",
      'Drafts each order with the vendor and price your system already holds for that item',
      'Leaves it for approval. Nothing goes to a supplier until a named person approves',
      "Reads the supplier's confirmation when it comes back and flags a changed date, quantity or price",
    ],
    note: "Intuit's developer reference calls a QuickBooks Online purchase order a non-posting transaction, a request to purchase goods or services from a third party. Sage lists job costing with purchase orders on its construction page. Some suppliers and large buyers trade by EDI (electronic data interchange, a standard format for sending orders between companies) or through punchout catalogs, where a buyer shops a supplier's catalog from inside its own purchasing system. We build those connections too.",
    sources: ['qbPoApi', 'sageConstruction'],
    span: 'lg:col-span-7',
  },
  {
    n: '06',
    title: 'Supplier invoices and job cost coding',
    body: 'Supplier invoices arrive by email as PDFs. The agent matches each one to its purchase order and suggests the job and cost code.',
    items: [
      'Reads the invoice and matches it to the purchase order and the delivery ticket',
      'Suggests the job and cost code from how your team coded that supplier before',
      'Flags a price or quantity that differs from the order, and says which line it is on',
    ],
    note: 'The agent prepares the batch, and your bookkeeper or controller approves it. Check what your accounting system already does before anyone builds. Intuit says its AI offers ways to fix anomalies while you decide the next move, and Sage says Sage Copilot helps track and manage month-end close across payables, receivables, the ledger and cash.',
    sources: ['qbAi', 'sageCopilot'],
    span: 'lg:col-span-5',
  },
];

/* ── Who keeps control. Three enforced by the software, three we set up, two
   your team keeps. Vendor facts are from the linked pages. ── */
type Keeper = 'software' | 'build' | 'person';

const KEEPER_LABEL: Record<Keeper, string> = {
  software: 'Your software enforces',
  build: 'We set up',
  person: 'Your team keeps',
};

const GUARDS: ReadonlyArray<{ rule: string; keeper: Keeper; note: string }> = [
  {
    rule: 'Permissions it cannot exceed',
    keeper: 'software',
    note: "Procore's developer documentation says a Developer Managed Service Account carries the exact company and project level tool permissions an app needs, and that a company administrator chooses which projects the app can access.",
  },
  {
    rule: 'A limit on how fast it can call',
    keeper: 'software',
    note: 'Procore says its API has two rate limits, an hourly one and a spike limit over a 10-second window, and returns a 429 Too Many Requests response when either is exceeded.',
  },
  {
    rule: 'Drafts that are only drafts',
    keeper: 'software',
    note: 'Intuit describes a QuickBooks Online purchase order as a non-posting transaction, and an estimate as a proposal for a financial transaction from a business to a customer.',
  },
  {
    rule: 'One price book',
    keeper: 'build',
    note: 'The agent prices from the item list in your ERP or accounting system and nowhere else. Where a price is missing it asks a person. It does not make one up.',
  },
  {
    rule: 'Read-only first',
    keeper: 'build',
    note: 'The first version reads your records and writes nothing. Write access is added one record type at a time, after you have seen its drafts.',
  },
  {
    rule: 'A log of every draft',
    keeper: 'build',
    note: 'Each draft is logged with the document it came from and the lookups behind each line, so a reviewer can see why a number is there.',
  },
  {
    rule: 'Approval before anything goes out',
    keeper: 'person',
    note: 'Quotes, bid summaries, submittal packages and purchase orders are saved as drafts. A named person approves each one.',
  },
  {
    rule: 'The judgment calls',
    keeper: 'person',
    note: 'Scope gaps, exclusions, site conditions and margin stay with your estimator. The agent prepares the numbers. Your estimator decides what to bid.',
  },
];

/* ── Where construction AI projects break. Five come from the linked pages.
   Three are our own advice and carry no source link. ── */
const BREAKS: ReadonlyArray<{ t: string; b: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    t: 'A price book nobody has updated',
    b: 'An agent quotes from the prices it is given. If the item list in your system is a year old, every draft quote is a year old too. Fix the list before the build starts.',
    sources: [],
  },
  {
    t: 'Asking a chat window to measure drawings',
    b: 'Takeoff vendors publish what their tools do. Togal states up to 98% accuracy on floor plans, Kreo says 94% of the real geometry on busy plans, and Beam AI says every takeoff it delivers is QA-checked first. Use a tool made for measuring.',
    sources: ['togal', 'kreo', 'beam'],
  },
  {
    t: 'QuickBooks Desktop treated like a cloud system',
    b: 'Intuit says the QuickBooks Web Connector is a Microsoft Windows application installed on the same machine as QuickBooks, or at least on the same local network, and that it starts all communication. An agent can work with QuickBooks Desktop, but only through that connector.',
    sources: ['qbWebConnector'],
  },
  {
    t: 'Failed requests that eat the Procore limit',
    b: 'Procore says every request counts against your rate limit, including requests that fail, and that a 400, 403 or 404 response consumes quota exactly like a successful call.',
    sources: ['procoreRate'],
  },
  {
    t: 'Trusting a webhook to arrive',
    b: 'A webhook is a message a system sends when something changes. Procore calls its webhooks a fast, best-effort signal and tells developers to pair them with a periodic reconciliation sync.',
    sources: ['procoreWebhooks'],
  },
  {
    t: 'Addenda that change the bid',
    b: 'A bid summary written on day one is wrong after the second addendum. The agent has to watch the thread until bid day, and the summary has to show what changed.',
    sources: [],
  },
  {
    t: 'Cold calls with an AI voice',
    b: "The FCC's ruling of 8 February 2024 treats AI-generated voices as 'artificial' under the Telephone Consumer Protection Act. FCC rules require telemarketers to obtain prior express written consent before robocalling consumers.",
    sources: ['fcc'],
  },
  {
    t: 'No named approver',
    b: 'Procore says its agents never take action without sign-off, and Autodesk says the expert stays in control. A custom agent needs the same rule, with one named person for each kind of document.',
    sources: ['procoreAi', 'autodeskAi'],
  },
];

/* ── Our experience, stated plainly. No client is named on this page, no
   construction client is claimed and no result is claimed. The first card is
   Bhavesh's own statement of 2026-10-09 and 2026-10-11. The second and fourth
   use wording he approved. The third is the company history from
   src/data/organization.ts, without the country. ── */
const EXPERIENCE: ReadonlyArray<{ t: string; kind: string; what: string; href: string; cta: string; span: string }> = [
  {
    t: 'What we have worked on',
    kind: 'Five kinds of ERP · voice · integrations',
    what: 'FactoryJet has worked on Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs. The jobs were RFQ automation and quoting, daily bookkeeping, and purchase and sales order generation. We also build AI voice agents, for call centres as well as small offices, and EDI, punchout catalog, Xero, HubSpot and WhatsApp integrations.',
    href: '/services/erp-ai-agents',
    cta: 'See AI agents for ERP systems',
    span: 'lg:col-span-7',
  },
  {
    t: 'What you see before you sign',
    kind: 'A demo on your own data',
    what: 'Before a contract, we show working software on your own data. For a contractor that means one real document of yours, such as a request you have already quoted, run through a first version so you can lay its draft beside what your team did.',
    href: '/contact',
    cta: 'Ask for a demo on your data',
    span: 'lg:col-span-5',
  },
  {
    t: 'Where we started',
    kind: 'Founded 2014',
    what: 'FactoryJet began in 2014 as a B2B marketplace for construction materials and is now an ecommerce and AI services company.',
    href: '/about',
    cta: 'Read about FactoryJet',
    span: 'lg:col-span-5',
  },
  {
    t: 'Who looks after it',
    kind: 'Managed after launch',
    what: 'FactoryJet quotes the build and the ongoing support as fixed prices in writing after a short scoping call. After launch we keep managing the servers, the AI models, the API connections and the upkeep, so your office does not have to.',
    href: '/services/ai-agent-monitoring',
    cta: 'See monitoring and support',
    span: 'lg:col-span-7',
  },
];

/* ── Who this is for. Examples of the kinds of company the work suits, not a
   client list. Pictures were generated on 2026-10-11 and checked at the size
   they ship. The people in them are not FactoryJet staff or clients. ── */
const INDUSTRIES: ReadonlyArray<{ img: string; alt: string; t: string; b: string }> = [
  {
    img: `${IMG}/general-contractor-site-walk.webp`,
    alt: 'A man in a white hard hat and a yellow safety vest walks across a concrete slab holding a clipboard, with steel columns, metal framing and an orange traffic cone behind him',
    t: 'General contractors',
    b: 'Bid invitations, subcontractor quotes and submittals arrive all week. The agent reads and summarises them and keeps the log current for your project engineer to approve.',
  },
  {
    img: `${IMG}/electrical-contractor-cable-pull.webp`,
    alt: 'A woman in safety glasses and a navy work shirt kneels beside a wooden reel of orange cable and holds the cable against a metal conduit fixed to steel wall studs',
    t: 'Electrical, mechanical and plumbing contractors',
    b: 'Requests for a price come from several general contractors at once. The agent drafts each quote from your price book and assembles the submittal package once the job is yours.',
  },
  {
    img: `${IMG}/remodeler-framing-wall.webp`,
    alt: 'Two men hold a wooden stud upright in a room stripped to bare timber framing, one in a green t-shirt with a leather tool belt and one in a black shirt, beside an orange bucket',
    t: 'Home builders and remodelers',
    b: 'Leads call while you are on site. A voice agent answers, books the walk-through and sends you the job details before you call back.',
  },
  {
    img: `${IMG}/building-supply-yard-order.webp`,
    alt: 'A woman with short silver hair in an olive jacket rests one hand on a stack of timber held by orange straps and holds a paper pad, with bundles of steel rebar beside her',
    t: 'Building material suppliers',
    b: 'Contractors email item lists and ask for a price by tomorrow. The agent drafts the quote from your ERP and turns an accepted quote into a sales order for approval.',
  },
];

/* ── Process. Six steps, in the order we work. ── */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'List the software and the paperwork',
    b: 'Which systems hold your jobs, prices and orders, and which documents arrive each week. Whether those systems have an API, which is a way for other software to read and write their records, decides what an agent can do before anyone promises anything.',
  },
  {
    n: '02',
    t: 'Check what you already own',
    b: "If Procore's agents, your takeoff tool or your accounting system's own AI already does the job, we say so, even when it means there is no work for us.",
  },
  {
    n: '03',
    t: 'Pick one job and write down its rules',
    b: 'One task, such as quotes from emailed requests or bid summaries. The rules a person follows today go on paper, along with who approves the result.',
  },
  {
    n: '04',
    t: 'Show it on your own data',
    b: 'Before a contract, we run one of your real documents through a first version, so you see a draft you can judge against what your team did.',
  },
  {
    n: '05',
    t: 'Build with read-only access first',
    b: 'The agent gets a login of its own with only the permissions the job needs. It reads before it writes, and write access is added one record type at a time.',
  },
  {
    n: '06',
    t: 'Run it beside your team, then stay on',
    b: 'For an agreed period the agent drafts while a person does the same work, and the rules are fixed where the two differ. After launch the same team reads the logs, re-tests when your software or the AI model changes, and fixes what breaks.',
  },
];

/* ── Comparison: three ways to get AI into a contractor's office ── */
const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: '01 AI inside your construction software' },
  { label: '02 A ready-made product you add' },
  { label: '03 A custom agent built for you' },
];

const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'What it is',
    values: [
      'Agents and assistants shipped inside Procore, Autodesk Forma, Sage or QuickBooks',
      'A takeoff tool or a phone answering product you subscribe to',
      'An agent designed around your rules and built for you',
    ],
  },
  {
    feature: 'What starts the work',
    values: [
      'A person on a page in that system, or an event inside it',
      'A drawing you upload, or a call to the number you forward',
      'The thing itself arriving, whether that is an email, a bid invitation or a phone call',
    ],
  },
  {
    feature: 'Who sets the rules',
    values: ['The vendor, with settings you choose', 'The vendor', 'You, in writing, before the build'],
  },
  {
    feature: 'Who approves',
    values: [
      'You. Procore says its agents never take action without sign-off',
      'You check the takeoff or the call summary',
      'A named person on your team approves each quote, summary and order',
    ],
  },
  {
    feature: 'How you pay',
    values: [
      'Inside your subscription or by plan tier. Procore lists Agent Studio in its Enterprise tier',
      'A subscription. Goodcall bills per caller served and Smith.ai per call',
      'A fixed price for the build and for ongoing support, quoted in writing after a scoping call',
    ],
  },
  {
    feature: 'Who you call when it breaks',
    values: ['The software vendor', 'The product vendor', 'The team that built it'],
  },
  {
    feature: 'Right call when',
    values: [
      'The job lives inside that one system',
      'The job is measuring drawings or answering simple calls',
      'The job uses your own price book and rules, or crosses two systems',
    ],
  },
];

/* ── Ready-made products a US search shows, grouped by job. Each line restates
   the vendor's own page as read on 2026-10-11. FactoryJet sells none of them.
   Feeds the visible list AND the ItemList JSON-LD. ── */
const OTHERS: ReadonlyArray<{ name: string; focus: string; says: string; source: SrcKey }> = [
  {
    name: 'Togal',
    focus: 'Takeoff · general and trade contractors',
    says: 'Describes itself as an AI-powered takeoff tool built by estimators that automatically detects, measures and compares directly from drawings, with up to 98% accuracy. Its page states 98% accuracy on floor plans and includes a feature for asking questions of your plans.',
    source: 'togal',
  },
  {
    name: 'Kreo',
    focus: 'Takeoff and estimating · cloud',
    says: 'Calls its product agentic AI takeoff. Its page says Auto Measure 3.0 lands within 94% of the real geometry on busy, noisy plans, and describes Caddie, an agent inside Kreo that reads drawings, runs the measurements and delivers quantities under your control.',
    source: 'kreo',
  },
  {
    name: 'Beam AI',
    focus: 'Takeoff done for you or by you',
    says: 'Offers takeoffs and estimates delivered in 24 to 72 hours, which it describes as 99%+ accurate and QA-checked before delivery, plus AI takeoffs you run yourself. Its page says it also captures invitations to bid from your inbox and tracks due dates, RFIs and addenda.',
    source: 'beam',
  },
  {
    name: 'STACK',
    focus: 'Takeoff, estimating and proposals',
    says: 'Calls itself an AI preconstruction platform where estimating teams complete takeoffs and build estimates. Its page lists measuring drawings digitally, pricing bids and sending proposals.',
    source: 'stack',
  },
  {
    name: 'Trimble',
    focus: 'Electrical estimating and takeoff',
    says: 'Says the Automate Takeoff feature in its estimating products detects and counts outlets, switches and fire alarm systems, and that an average of 95% of drawing scales are set automatically for its existing users. It names Trimble LiveCount and Trimble Estimation MEP.',
    source: 'trimble',
  },
  {
    name: 'Drawer AI',
    focus: 'Electrical takeoff',
    says: 'Says it detects power devices, lighting fixtures and panel schedules on PDF drawings, generates conduit paths from each panel to every device, and is used by more than 300 electrical subcontractors in the USA.',
    source: 'drawer',
  },
  {
    name: 'Goodcall',
    focus: 'Phone answering · billed per caller',
    says: 'An AI phone agent you set up yourself. Its pricing page says there are no per-minute charges and that you pay one price for each different customer the agent serves in a month.',
    source: 'goodcall',
  },
  {
    name: 'Smith.ai',
    focus: 'Phone answering · billed per call',
    says: 'Its AI Receptionist answers and qualifies calls and can transfer a complex call to a live receptionist. Its page says the service is month to month and billed per call.',
    source: 'smith',
  },
];

const othersSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Ready-made AI products a US search shows for contractors: takeoff, estimating and phone answering',
  itemListElement: OTHERS.map((o, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: o.name,
    url: SRC[o.source].url,
  })),
};

const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  { href: '/services/ai-agent-development/rfq-bidding-agent', t: 'RFQ automation agent', b: 'The quoting job in depth: reading requests, matching items and drafting quotes for approval.' },
  { href: '/services/ai-receptionist', t: 'AI receptionist', b: 'A custom voice agent that answers, qualifies and books.' },
  { href: '/services/erp-ai-agents', t: 'AI agents for ERP systems', b: 'Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs on one page.' },
  { href: '/services/ai-agent-development/procurement-supply-chain-agent', t: 'Procurement agent', b: 'Purchase orders, supplier confirmations and follow-up.' },
  { href: '/services/ai-agent-development', t: 'AI agent development', b: 'Custom agents for support, sales and operations, beyond construction.' },
  { href: '/services/ai-agent-monitoring', t: 'AI agent monitoring and support', b: 'Watching, re-testing and fixing an agent after launch.' },
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

const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

export default function ConstructionAiAgentsPage() {
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
                    AI FOR CONSTRUCTION &middot; UNITED STATES
                  </span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.2rem]">
                  AI agents for construction that draft the quotes, bid summaries and purchase orders your team approves.
                </h1>

                <p className={`${styles.heroLead} mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600`}>
                  We design, build and support AI agents for general contractors, specialty contractors and building
                  suppliers.
                </p>

                <div className={`${styles.heroForm} mt-6`}>
                  <HeroInlineForm
                    region="us"
                    source="services_construction_ai_agents_hero"
                    service="Construction AI Agents"
                    submitLabel="Scope my agent"
                  />
                </div>

                <p className={`${styles.heroDetails} mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600`}> Some jobs need nothing built, because Procore, Autodesk and the takeoff products already
                  ship AI of their own. Where the work runs on your price book, your phone line or your ERP (the
                  business system that holds your items, prices and orders), we build the agent, connect it to the
                  software you already use and stay on after launch. You get a fixed quote in writing before work
                  starts.
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
                  <span>Demo on your own data before a contract</span>
                  <span>500+ businesses served</span>
                  <span>Founded 2014</span>
                  <span>Vendor pages read {CHECKED_ON}</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white">
                  <img
                    src={`${IMG}/hero-estimator-plan-table.webp`}
                    alt="A woman in a grey work shirt leans over a large sheet of floor plan drawings on a wooden table and holds a scale ruler against it, with an orange hard hat on the corner of the table"
                    width={1200}
                    height={800}
                    fetchPriority="high"
                    decoding="async"
                    className="aspect-[3/2] w-full object-cover"
                  />
                  <figcaption className="p-5 sm:p-6">
                    <div className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                      What arrives, what the agent drafts, who approves
                    </div>
                    <ul className="mt-3 grid gap-2.5 font-fj-body text-[13px] leading-snug text-fj-ink">
                      {HERO_ROWS.map((r) => (
                        <li key={r.arrives} className="flex items-start gap-2">
                          <span aria-hidden="true" className="mt-[5px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                          <span>
                            <span className="font-semibold">{r.arrives}</span> {r.drafts}{' '}
                            <span className="text-fj-neutral-600">{r.approves}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </figcaption>
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
                An AI agent for a construction company is software that does one office task. It reads what arrives,
                such as a request for a quote, an invitation to bid, a supplier&rsquo;s paperwork or a phone call,
                looks up your price book and job records, and drafts the quote, summary or purchase order for a person
                to approve.
              </p>
              <p className="mt-4 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                Software you may already own covers part of this. Procore&rsquo;s agent library listed 20 pre-built
                agents when we counted on {CHECKED_ON}, among them a Submittal Review Agent and an RFI Agent, and
                Procore says its agents never take action without sign-off. Takeoff products measure drawings. A custom
                agent covers work that uses your own prices or crosses two systems.
              </p>
              <SourceLinks ids={['procoreAgents', 'procoreAi', 'togal']} />
            </div>
          </div>
        </section>

        {/* 3. WHAT YOUR SOFTWARE ALREADY SHIPS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">What you already own</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              What construction software already ships for AI.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Start here. Each card restates the vendor&rsquo;s own pages, as read on {CHECKED_ON}. If one of these
              already does your job, you do not need a build, and we will tell you so. For the same work inside an
              ERP, see{' '}
              <Link href="/services/erp-ai-agents" className="font-semibold text-fj-ink underline underline-offset-4">
                AI agents for ERP systems
              </Link>
              .
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
              {SHIPS.map((c) => (
                <li key={c.name} className={`rounded-2xl border border-fj-neutral-200 bg-white p-6 ${c.span}`}>
                  <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{c.name}</h3>
                  <div className="mt-1 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">
                    {c.kind}
                  </div>
                  <p className="mt-3 font-fj-body text-[15px] leading-relaxed text-fj-ink">{c.says}</p>
                  <SourceLinks ids={c.sources} />
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border-2 border-[#F05A28]/25 bg-white p-6 sm:p-8">
              <div className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                What we found on {CHECKED_ON}
              </div>
              <h3 className="mt-3 font-fj-display text-xl font-semibold text-fj-ink">
                Four things we measured before writing this page.
              </h3>
              <ul className="mt-4 grid max-w-3xl gap-3 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  We ran ten US Google searches about AI for construction. All ten showed an AI Overview at the top.
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  The question &ldquo;Can ChatGPT do construction takeoffs?&rdquo; appeared in Google&rsquo;s question
                  box on five of the ten.
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  Togal ranked first for both &ldquo;ai estimating software&rdquo; and &ldquo;ai takeoff
                  software&rdquo;. Seven of the first ten results for the estimating search were the sites of takeoff or
                  estimating vendors.
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  Procore&rsquo;s agent library listed 20 pre-built agents. Two of them, Bid Analyzer and Bid Leveling,
                  review bids that come in. None of the 20 descriptions mentions drafting your own quote from a price
                  book.
                </li>
              </ul>
              <SourceLinks ids={['procoreAgents', 'togal']} />
            </div>
          </div>
        </section>

        {/* 4. FIVE QUESTIONS THAT DECIDE THE ROUTE */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Buy, switch on or build</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Five questions that decide whether to buy, switch on or build.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Ask them in this order. The first two often end the conversation, because the answer is a feature
                  you already pay for or a product you can subscribe to this week.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  Where we come in is question three onward: work that depends on your own prices, your own rules or
                  more than one system.
                </p>
                <SourceLinks ids={['procoreAgents', 'autodeskAi']} />
              </div>
              <ol className="grid gap-4 lg:col-span-8">
                {DECIDE_STEPS.map((p) => (
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

        {/* 5. COMPARISON: three routes */}
        <ComparisonTable
          eyebrow="Three routes compared"
          headline="AI inside your software, a ready-made product, or an agent built for you."
          lead="Each route is the right one for somebody. On the scoping call we say which we would choose for you and why, even when it means there is no work for us."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer={`Vendor facts are from each vendor's own pages as read on ${CHECKED_ON}.`}
          scrollRegionLabel="Comparison of three ways a contractor can add AI"
        />

        {/* 6. SIX JOBS */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Six jobs</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Six construction office jobs an AI agent can draft for your team.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Each card says what the agent does, what your software or a ready-made product already covers, and where
              a custom build fits. Every job ends the same way, with a draft a person approves. For the build behind
              the quoting job, see our{' '}
              <Link
                href="/services/ai-agent-development/rfq-bidding-agent"
                className="font-semibold text-fj-ink underline underline-offset-4"
              >
                RFQ automation agent
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
                    <span className="font-semibold">Worth knowing.</span> {s.note}
                  </p>
                  <SourceLinks ids={s.sources} />
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              These are the jobs contractors search for. In US search data we pulled on {CHECKED_ON}, &ldquo;ai for
              construction&rdquo; drew about 2,400 searches a month, and six estimating and takeoff searches added
              about 1,440 more. The same pattern fits every card above: read what arrives, look it up, draft, approve.
            </p>
            <p className="mt-3 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
              Vendor notes are as listed on {CHECKED_ON}.
            </p>
          </div>
        </section>

        <MidPageCTA
          headline="Tell us the job. We will say if your software already does it."
          sub="Send one task that fills your office's day: quotes, bid invitations, submittals, phones or purchase orders. We reply with what your current software or a ready-made product covers, what we would build, and a fixed quote if there is work for us."
          label="Scope my agent"
        />

        {/* 7. WHO KEEPS CONTROL */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Keeping control</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Permissions, one price book and a named approver keep an agent safe.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  To your software, an agent is a user. It can do what its login allows and nothing more. Procore says
                  its own AI follows your existing role-based permissions, and a custom app is installed with the
                  permissions an administrator grants it.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  Eight controls follow. Your software enforces three, we set up three and your team keeps two.
                </p>
                <SourceLinks ids={['procoreAi', 'procoreApi', 'procoreDmsa', 'procoreRate', 'qbPoApi', 'qbEstimateApi']} />
              </div>

              <ul className="grid gap-3 lg:col-span-8">
                {GUARDS.map((k) => (
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
            <p className="fj-eyebrow">The traps</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Eight places a construction AI project breaks.
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Knowing these early saves a rebuild. Five come from the linked vendor and regulator pages. The three
              without a link are our own advice.
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
              What we bring to a contractor&rsquo;s office, stated plainly.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              FactoryJet was founded in 2014 and has served more than 500 businesses. Client projects with public
              write-ups are in our{' '}
              <Link href="/case-studies" className="font-semibold text-fj-ink underline underline-offset-4">
                case studies
              </Link>
              .
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
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Built for the offices behind the job site.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  The Census Bureau estimated US construction spending at a seasonally adjusted annual rate of
                  $2,203.1 billion in August 2026. The office work behind it looks much the same in every trade.
                  Something arrives, someone looks it up, someone types it in.
                </p>
                <SourceLinks ids={['census']} />
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  For quoting work in a fabrication shop, see{' '}
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
                  How we design, build and support an agent for a contractor.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  What you already own is checked first. Then one job is agreed, shown on your own data and built with
                  read-only access. After launch,{' '}
                  <Link
                    href="/services/ai-agent-monitoring"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    AI agent monitoring and support
                  </Link>{' '}
                  keeps it working as your software and the AI models change. For the phone line, see our{' '}
                  <Link
                    href="/services/ai-receptionist"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    AI receptionist
                  </Link>{' '}
                  page.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  A pilot on one focused job usually takes two to four weeks. A production build with permissions,
                  logging, approvals and monitoring usually takes six to twelve.
                </p>
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

        {/* 12. READY-MADE PRODUCTS A SEARCH SHOWS */}
        <section className="border-t border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Ready-made options</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Eight AI products a US search shows contractors, by job.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  We wrote this list and we sell none of these products. They came up in the US searches we ran on{' '}
                  {CHECKED_ON}, or in AI assistants&rsquo; answers to contractors&rsquo; questions. Six measure
                  drawings and two answer phones. Each line restates the vendor&rsquo;s own page, and the accuracy
                  figures are the vendors&rsquo; own claims.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  They are listed by job and in no order of merit. An agent we build works beside them. It takes the
                  quantities a takeoff tool exports, prices them from your item list and drafts the quote.
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
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Related AI agent services.
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
                  Every product name, feature, limit, price and number about another company on this page was read on
                  that company&rsquo;s own pages on that day. Sage&rsquo;s and Intuit&rsquo;s pages refused a plain
                  web request and were read in a browser. Procore&rsquo;s developer documentation was read on its
                  public documentation site. Vendors change these pages, so check the linked page before you act on
                  one.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Search figures are US monthly searches from DataForSEO, pulled the same day. The ten Google searches
                  are US desktop results pulled through the same service. Accuracy figures for takeoff products are
                  each vendor&rsquo;s own claim. Buildertrend&rsquo;s website did not open for us that day, so it
                  appears here only where QuickBooks&rsquo; page names it.
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
          eyebrow="AI for construction FAQ"
          headline="AI for construction questions, answered plainly."
          lead={`What owners, estimators and office managers ask before adding an agent. Vendor answers are from each vendor's own pages as read on ${CHECKED_ON}.`}
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 16. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="AI for construction"
          headline="Keep your estimator in charge. Add an agent that does the reading and the typing."
          sub="Tell us one job that fills your office's day. We say what your software already covers, show a first version on your own data and stay on after launch."
          primaryCta={{ label: 'Scope my agent', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="Demo on your own data before a contract. Fixed quote in writing. You own the code."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
