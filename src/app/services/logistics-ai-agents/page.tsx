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
import StickyCtaLabel from '@/components/v2/StickyCtaLabel';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/logistics-ai-agents, built 2026-11-08.

   Why this page exists: the 8 Nov 2026 industry demand research
   (docs/reports/2026-11-08-industry-demand.md). US monthly searches from
   DataForSEO (location 2840, pipeline/research/data/industry-demand-2026-11-08/
   step1.json): "warehouse ai" 3,600, "ai for logistics" / "ai in logistics" /
   "logistics ai" 1,300 ($22 CPC, KD 25), "ai in transportation" 720, "dispatch
   ai" 390, "ai for transportation" 260, "logistics automation" 170, "trucking
   ai" 170, "ai for fleet management" 140, "ai for trucking" 140, "ai for
   warehouse" 110, "ai dispatch software" 90, "ai route optimization" 90, "ai in
   logistics and supply chain" 70, "ai in warehouse" 70, "ai freight broker" 50,
   "ai in trucking" 40, "freight ai" 40, "ai agent for logistics" 40, "ai agents
   for logistics" 30, "ai for freight brokers" 30, "best ai for logistics" 30,
   "ai for warehouse management" 30, "ai solutions for logistics" 30, "ai for
   logistics companies" 20, "ai for trucking companies" 20, "logistics ai agent"
   20, "ai tools for logistics" 20, "3pl ai" 10, "dispatch ai agent" 10.

   AI assistants asked "Who builds AI agents for logistics and 3PL companies?",
   "What AI software can automate dispatch and load booking for a trucking
   company?" and "Which companies build AI agents for freight brokers?" on
   8 Nov 2026 named ready-made products (FourKites, Blue Yonder, HappyRobot,
   Pallet, Augment, Vooma, DispatchMVP, Numeo). The cost question cited
   development firms' cost guides. FactoryJet had no logistics page.

   Scope: this page owns the operations side of moving goods (3PLs,
   warehouses, freight brokers, carriers, trucking fleets, shippers' logistics
   teams). The buying side (procurement, suppliers, purchase orders) belongs to
   /services/ai-agent-development/procurement-supply-chain-agent, linked once.

   Truth rules for anyone editing this file:
   - Every fact about another company was read on that company's own page on
     2026-11-08 and links to it through the SRC map below. Each URL returned
     200 to a plain request that day.
   - Vendors are named in the systems list only where their own public
     developer pages describe an API. McLeod's API page returned 403 and
     DAT's developer portal needs a login, so neither is named. MercuryGate
     and Descartes publish no public API reference we could find.
   - No partner claim and no "not a partner" line. Say "through the API the
     vendor publishes" or "the access your account already has".
   - No logistics client is named or claimed and no result is claimed.
     FactoryJet claims on this page: 500+ businesses, 97% on-time delivery,
     4.9 / 5 average Google review rating.
   - No FactoryJet prices. No figure for what an agent costs to run. The only
     dollar figures are the three labelled market estimates for a BUILD
     (Biz4Group, RapidDev, SparkoutTech), in the cost section and one FAQ.
   - Nothing on this page says where the FactoryJet team is.
   - Mirrors /services/construction-ai-agents for components, props and schema.

   Schema: WebPage + Service + FAQPage + ItemList + BreadcrumbList.
   Organization is rendered once sitewide by src/app/layout.tsx and referenced
   here by @id. The FAQPage mainEntity is generated from the exact FAQ_ITEMS
   array the visible <FAQ> component renders. There is no second array.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/logistics-ai-agents';
const PAGE_TITLE = 'AI for Logistics: AI Agents for 3PLs & Freight | FactoryJet';
const PAGE_DESC =
  'Custom AI agents for US 3PLs, freight brokers and fleets: load tender email intake, check calls, POD and freight invoice matching, built on your TMS.';
const PAGE_PUBLISHED = '2026-11-08';
const PAGE_MODIFIED = '2026-11-08';
const CHECKED_ON = '8 Nov 2026';
/** Date of the six US Google searches and the AI assistant runs. */
const SEARCHED_ON = '8 Nov 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/logistics-ai-agents';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'ai for logistics',
    'ai agents for logistics',
    'logistics ai',
    'ai in logistics',
    'logistics ai agent',
    'ai agent for logistics',
    'dispatch ai',
    'ai dispatch software',
    'ai for trucking',
    'ai for trucking companies',
    'trucking ai',
    'ai for freight brokers',
    'ai freight broker',
    'freight ai',
    'ai for warehouse',
    'ai for warehouse management',
    'warehouse ai',
    '3pl ai',
    'ai in logistics and supply chain',
    'logistics automation',
    'ai for logistics companies',
    'ai tools for logistics',
    'ai in transportation',
    'ai for fleet management',
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
        alt: 'FactoryJet, AI agents for US 3PLs, freight brokers and trucking fleets',
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
  { name: 'Logistics AI Agents', url: CANONICAL_URL },
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
  name: 'AI Agent Development for Logistics, 3PL and Freight Companies',
  serviceType:
    'AI agents for logistics companies, load tender and rate request email intake, carrier sourcing and check calls, shipment status updates, proof of delivery and freight invoice matching, accessorial and detention claims, warehouse order exceptions and dock appointment scheduling, driver dispatch messages',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'FactoryJet designs, builds, tests and supports AI agents for US third-party logistics providers (3PLs), warehouses, freight brokers, carriers, trucking fleets and shippers\' logistics teams. The agents work alongside the TMS, WMS, ELD and visibility software a company already uses, through the API each vendor publishes or the access the account already has. An agent reads what arrives, such as a load tender, a rate request, a carrier status email or a proof of delivery, looks it up in the company\'s own systems and rules, and saves a draft for a person to approve. Work covers checking what the company already owns, building with read-only access first, a period of running beside the team, launch and support after launch.',
  url: CANONICAL_URL,
};

/* ── Sources. One map, used by every inline source link (the `short` label) AND
   by the visible "Sources" list near the foot of the page (the full `label`).
   Each URL was opened on 2026-11-08 and the supporting sentence read before the
   claim was written. ── */
const SRC = {
  samsaraDocs: {
    short: 'Samsara developers',
    label: 'Samsara developer documentation: API tokens, OAuth 2.0, webhooks, routes, MCP',
    url: 'https://developers.samsara.com/docs',
  },
  samsaraRest: {
    short: 'Samsara: REST API overview',
    label: 'Samsara developer documentation: REST API Overview (Messages API, Documents API)',
    url: 'https://developers.samsara.com/docs/rest-api-overview',
  },
  motive: {
    short: 'Motive developers',
    label: 'Motive: Developer API (Vehicles, HOS Logs, Locations, Messaging, Webhooks)',
    url: 'https://developer.gomotive.com/',
  },
  p44: {
    short: 'project44 developers',
    label: 'project44 developer portal: guides for shippers, LSPs and carriers',
    url: 'https://developers.project44.com/',
  },
  p44Ref: {
    short: 'project44: API reference',
    label: 'project44 API reference: Shipment Tracking, TL and LTL tracking, OAuth 2.0',
    url: 'https://developers.project44.com/api-reference',
  },
  truckstop: {
    short: 'Truckstop developers',
    label: 'Truckstop developer site: Load Management, Rate Insights, Carrier Monitoring APIs',
    url: 'https://developer.truckstop.com/',
  },
  fourkites: {
    short: 'FourKites',
    label: 'FourKites: the AI execution platform for supply chain',
    url: 'https://www.fourkites.ai/',
  },
  blueYonder: {
    short: 'Blue Yonder',
    label: 'Blue Yonder: supply chain platform and AI agents',
    url: 'https://blueyonder.com/',
  },
  happyrobot: {
    short: 'HappyRobot',
    label: 'HappyRobot: AI agents for communication-heavy work',
    url: 'https://www.happyrobot.ai/',
  },
  augment: {
    short: 'Augment',
    label: 'Augment: Augie for freight brokerages and 3PLs',
    url: 'https://www.goaugment.com/',
  },
  vooma: {
    short: 'Vooma',
    label: 'Vooma: AI for freight brokers and carriers',
    url: 'https://www.vooma.com/',
  },
  pallet: {
    short: 'Pallet',
    label: 'Pallet: AI agents for logistics operations',
    url: 'https://pallet.com/',
  },
  dispatchmvp: {
    short: 'DispatchMVP',
    label: 'DispatchMVP: Otto, AI dispatch for trucking',
    url: 'https://dispatchmvp.ai/',
  },
  numeo: {
    short: 'Numeo',
    label: 'Numeo: AI dispatch software for trucking carriers',
    url: 'https://numeo.ai/',
  },
  fcc: {
    short: 'FCC: ruling on AI voices, 8 Feb 2024',
    label: 'Federal Communications Commission: FCC Makes AI-Generated Voices in Robocalls Illegal (news release, 8 Feb 2024)',
    url: 'https://docs.fcc.gov/public/attachments/DOC-400393A1.pdf',
  },
  biz4group: {
    short: 'Biz4Group cost guide, updated 6 Aug 2026',
    label: 'Biz4Group: AI Agent Development Cost, 2026 Cost Guide (updated 6 Aug 2026)',
    url: 'https://www.biz4group.com/blog/ai-agent-development-cost',
  },
  rapiddev: {
    short: 'RapidDev logistics agent guide, Nov 2026',
    label: 'RapidDev: AI Agent for Logistics, Costs, Vendors and How to Build One (updated Nov 2026)',
    url: 'https://www.rapidevelopers.com/ai-agents/ai-agent-for-logistics',
  },
  sparkout: {
    short: 'SparkoutTech cost breakdown, 8 Oct 2026',
    label: 'SparkoutTech: AI Agent Development Cost in 2026, A Complete Breakdown (8 Oct 2026)',
    url: 'https://www.sparkouttech.com/development-cost-of-ai-agent/',
  },
} as const;

type SrcKey = keyof typeof SRC;

/* ── FAQ. Single array, rendered visibly below AND used to build the FAQPage
   JSON-LD. Never hand-duplicate this list near the ld+json block.
   The first questions are the buyer questions from the 8 Nov 2026 AI
   assistant runs. Others come from People Also Ask on the six US Google
   searches of the same day (career and stock questions left out) and from the
   page's own keywords. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'jobs', label: 'What AI does in logistics' },
  { key: 'systems', label: 'TMS, WMS, ELD and load boards' },
  { key: 'control', label: 'Control and rules' },
  { key: 'working', label: 'Cost and working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── What AI does in logistics ────────────────────────────────────
  {
    category: 'jobs',
    question: 'Which companies build AI agents for logistics and 3PL companies?',
    answer:
      'Three kinds of provider. Platforms you may already run ship AI of their own: FourKites names six agents, and Blue Yonder says agents on its platform monitor your network. Specialist products such as HappyRobot, Augment, Vooma, Pallet, DispatchMVP and Numeo sell agents for set jobs. FactoryJet builds custom agents for work that spans your own TMS, WMS, inbox and carrier portals and follows your rules.',
  },
  {
    category: 'jobs',
    question: 'What is an AI agent for logistics?',
    answer:
      'It is software that does one operations task and stops at a draft. It reads what arrives, such as a load tender, a rate request, a carrier status email or a proof of delivery, looks it up in your TMS or WMS, and saves the quote, update or invoice match for a person to approve. Unlike a chatbot, it starts work when the email or document arrives, with no one typing a prompt.',
  },
  {
    category: 'jobs',
    question: 'What does 3PL AI look like day to day?',
    answer:
      'For most AI for logistics companies such as a 3PL, it looks like fewer emails typed by hand. A customer sends an order change, a carrier asks for a dock slot, a POD comes back. The agent reads each one, checks it against the WMS or TMS and drafts the reply or the update. Your team approves the drafts in the tools it already uses.',
  },
  {
    category: 'jobs',
    question: 'How is AI used in logistics?',
    answer:
      'Mostly for the reading and typing between systems. Visibility platforms such as FourKites track shipments and flag delays. Specialist products answer carrier calls and quote loads. Custom agents read tenders and rate requests from email, chase check calls and PODs, match freight invoices to the load and draft accessorial claims. In each case a person approves what leaves the building.',
  },
  {
    category: 'jobs',
    question: 'What is the best AI for logistics?',
    answer:
      'There is no single best one, because each tool does a different job. For shipment visibility, look at the platform your shippers already use, such as FourKites or project44. For carrier calls and quoting in a brokerage, look at specialist products such as HappyRobot, Augment or Vooma. For work that crosses your own TMS, WMS, inbox and accounting with your own rules, have an agent built.',
  },
  {
    category: 'jobs',
    question: 'Can AI automate dispatch and load booking?',
    answer:
      'Much of the typing, yes. DispatchMVP says its agent can auto-import loads from load boards, emails, PDFs or screenshots, and Numeo calls itself AI dispatch software for trucking carriers. A custom agent reads the tender or rate confirmation, builds the load in your TMS and drafts the driver message. A dispatcher still confirms the booking, the rate and the driver.',
  },
  {
    category: 'jobs',
    question: 'What is dispatch AI?',
    answer:
      'Dispatch AI is software that helps assign loads to drivers and keep everyone updated. Ready-made dispatch AI software, such as DispatchMVP or Numeo, works through its own screens. A dispatch AI agent built for you works inside your TMS and your ELD account, reading load details and driver hours, and drafts the assignment and the driver message for your dispatcher to send.',
  },
  {
    category: 'jobs',
    question: 'Is there AI for freight brokers?',
    answer:
      'Yes. Augment says its agent, Augie, runs quoting, booking and updates for brokerages. Vooma says it helps brokers quote and build loads, schedule, cover and track. HappyRobot lists carrier sales and track and trace for logistics. People search for an AI freight broker, but in practice each product handles set parts of the work, such as quoting or tracking, alongside your brokers. A custom agent fits a brokerage whose rules, customer portals and TMS setup do not match what those products expect.',
  },
  {
    category: 'jobs',
    question: 'Is there AI for trucking companies?',
    answer:
      'Yes. Trucking AI today works in the office more than the cab. Your ELD vendor may already offer some: Samsara documents an MCP connection for AI assistants and agents. Dispatch products such as DispatchMVP and Numeo help small carriers find and book loads. A custom agent fits a fleet that wants dispatch messages, POD collection and detention claims run from its own TMS and rules.',
  },
  {
    category: 'jobs',
    question: 'How is AI used in warehouses?',
    answer:
      'Warehouse AI comes in two kinds. Physical automation, such as robots and vision, is bought from equipment and WMS vendors. Office work around the warehouse, such as order exceptions, inbound appointment requests, short-ship notices and customer emails, is where an agent helps. It reads the email or the exception, checks the WMS and drafts the reply or the change for a supervisor to approve.',
  },
  {
    category: 'jobs',
    question: 'What is the best AI for warehouse management?',
    answer:
      'Start with the AI your WMS vendor ships, because it already holds your inventory and orders. We build agents and do not rank WMS products. Where the work starts outside the WMS, in a customer email, a carrier portal or a spreadsheet, a custom agent can read it and write a draft back into the WMS through the API it publishes.',
  },
  {
    category: 'jobs',
    question: 'Can AI do route optimization?',
    answer:
      'Route optimization is a software category in its own right, sold by routing and TMS vendors, and we do not build it. An agent can work with it. Samsara says its routes API lets a company integrate route creation, assignment and progress tracking with its TMS, so an agent can pass a planned route along and draft the driver message.',
  },
  {
    category: 'jobs',
    question: 'Will logistics get taken over by AI?',
    answer:
      'Not the decisions. Agents are good at reading tenders, status emails and PODs and typing the result into the right system. Choosing a carrier for a hard lane, settling a claim with a customer and deciding what to do about a late load stay with people. Every agent we build stops at a draft that a named person approves.',
  },
  // ── TMS, WMS, ELD and load boards ────────────────────────────────
  {
    category: 'systems',
    question: 'Will an AI agent replace our TMS?',
    answer:
      'No. It works alongside your TMS and WMS. Your loads, rates and orders stay where they are. The agent signs in to each system with its own login and only the permissions its job needs, through the API the vendor publishes or the access your account already has, and writes its drafts back where your team already works. If you change TMS later, the agent is reconnected.',
  },
  {
    category: 'systems',
    question: 'Can an AI agent work with Samsara or Motive?',
    answer:
      "Yes, through each vendor's published API. Samsara's developer docs describe API tokens and OAuth 2.0, webhooks, a Messages API that sends messages to drivers on behalf of a fleet admin, and a Documents API for forms drivers fill out. Motive's developer page lists API categories for vehicles, HOS logs, locations, messaging and webhooks.",
  },
  {
    category: 'systems',
    question: 'Can an AI agent use our visibility platform, such as project44?',
    answer:
      "Yes. project44's API reference lists shipment tracking, truckload and LTL tracking and a truckload webhook, and says all its API endpoints require authentication. An agent can read a shipment's status from it and draft the customer update, so your team does not copy positions from one screen into an email.",
  },
  {
    category: 'systems',
    question: 'Can an AI agent work with a load board?',
    answer:
      "Where the load board publishes an API. Truckstop's developer site says its Load Management API helps manage the life cycle of loads on the load board, and its Carrier Monitoring API returns a carrier's details by DOT number. An agent can draft a load posting or pull a carrier's details for a person to check before booking.",
  },
  {
    category: 'systems',
    question: 'Our TMS has no open API. Can an agent still help?',
    answer:
      'Often, yes. Many TMS and WMS products exchange data by EDI (electronic data interchange, a standard format for sending tenders and status between companies), by file export or through a reporting database. An agent can also start from the email inbox, where tenders and PODs arrive anyway. We check what access your account already has before promising anything.',
  },
  {
    category: 'systems',
    question: 'Can an agent read PODs and bills of lading?',
    answer:
      'Yes. A proof of delivery (POD) and a bill of lading (BOL) arrive as photos, scans or PDFs. The agent reads the signature, date, pieces and any exception notes, matches the document to the load and flags a short, an overage or damage. A person reviews flagged documents before an invoice goes out.',
  },
  // ── Control and rules ────────────────────────────────────────────
  {
    category: 'control',
    question: 'Will the agent book a load or pay a carrier without approval?',
    answer:
      'No. Every quote, booking, carrier payment and claim is saved as a draft, and a named person on your team approves it before it goes anywhere. The agent can do the reading, the lookups and the typing. Money, rates and commitments to customers and carriers stay with your people.',
  },
  {
    category: 'control',
    question: 'Is it legal to use an AI voice agent for check calls?',
    answer:
      "Ask your lawyer about your own case. On 8 February 2024 the FCC ruled that calls made with AI-generated voices are 'artificial' under the Telephone Consumer Protection Act, and its rules require telemarketers to obtain prior express written consent before robocalling consumers. A status call to a carrier you have booked is a different case from a cold call, but we still set the rules with you before launch. This is not legal advice.",
  },
  {
    category: 'control',
    question: 'What happens when the agent is not sure?',
    answer:
      'It stops and asks a person. If a tender does not match a customer, a POD is unreadable or a rate falls outside your rules, the agent flags it with the reason and leaves the record untouched. We agree those rules with you in writing before the build.',
  },
  // ── Cost and working with us ─────────────────────────────────────
  {
    category: 'working',
    question: 'How much does it cost to build a custom AI agent for a logistics company?',
    answer:
      "Market estimates from three development firms' 2026 guides: Biz4Group puts logistics and supply chain agents at $35,000 to $55,000. RapidDev lists $13,000 to $25,000 for a standard agency build of a logistics agent, up to $35,000 for multi-system or voice work, and sells such builds itself. SparkoutTech lists $25,000 to $60,000 for an MVP agent and $60,000 to $150,000 for a business process agent. These are not FactoryJet prices. We quote a fixed price per phase in writing after a short scoping call.",
  },
  {
    category: 'working',
    question: 'How long does it take to build an AI agent for a 3PL or brokerage?',
    answer:
      'A pilot on one focused job, such as reading load tenders from one inbox, usually takes two to four weeks. A production build with permissions, logging, approvals and monitoring usually takes six to twelve weeks. Access to your TMS is the biggest variable. It goes fastest when you can hand over a test login and a month of past tenders or PODs at the start.',
  },
  {
    category: 'working',
    question: 'Can we see it working before we sign?',
    answer:
      'Yes. Before a contract, we show working software on your own data. For a logistics company that usually means a set of real tenders, rate requests or PODs you have already handled, run through a first version of the agent so you can compare its drafts with what your team did.',
  },
  {
    category: 'working',
    question: 'Do you support the agent after launch?',
    answer:
      'Yes. TMS releases, carrier portals and AI models change. The same team that built the agent watches its logs, re-tests it when something changes and fixes what breaks, with defect cover after launch. There is no monthly minimum: ongoing support is a separate fixed price you can choose.',
  },
  {
    category: 'working',
    question: 'Who owns the agent and its code?',
    answer:
      'You do. The agent is built for you and the code is yours, along with the notes that explain how it works. We can still look after it day to day: the servers, the AI models, the API connections and the updates. If you later move the work in-house or to another firm, the code and its notes go with you.',
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
    arrives: 'A load tender lands in the inbox.',
    drafts: 'The agent builds the load in your TMS.',
    approves: 'Your planner accepts it.',
  },
  {
    arrives: 'A load is due at 2 pm.',
    drafts: 'The agent checks the ELD position and drafts the customer update.',
    approves: 'Your rep sends it.',
  },
  {
    arrives: 'A POD photo comes back.',
    drafts: 'The agent matches it to the load and the carrier invoice.',
    approves: 'Billing releases it.',
  },
  {
    arrives: 'A driver waits four hours at a dock.',
    drafts: 'The agent drafts the detention claim with the timestamps.',
    approves: 'Your manager files it.',
  },
];

/* ── What logistics platforms already ship for AI. Each card restates the
   vendor's own pages as read on 2026-11-08. ── */
const SHIPS: ReadonlyArray<{
  name: string;
  kind: string;
  says: string;
  sources: ReadonlyArray<SrcKey>;
  span: string;
}> = [
  {
    name: 'FourKites',
    kind: 'Visibility · agents built in',
    says: 'FourKites describes itself as the AI execution platform for supply chain and says its agents act rather than only alert. Its home page names six agents: Tracy, Sam, Alan, Cassie, Polly and Sophie. If your shippers already track loads in FourKites, look at what those agents cover before anyone builds.',
    sources: ['fourkites'],
    span: 'lg:col-span-7',
  },
  {
    name: 'Blue Yonder',
    kind: 'Supply chain platform',
    says: 'Blue Yonder says AI agents on its platform continuously monitor your end-to-end network, and describes agentic AI that recommends, decides and acts so teams focus on exceptions. Its home page does not describe agents for warehouse or transportation work in particular.',
    sources: ['blueYonder'],
    span: 'lg:col-span-5',
  },
  {
    name: 'Samsara',
    kind: 'ELD and telematics',
    says: "Samsara's developer documentation describes an MCP connection to connect AI assistants and agents directly to your Samsara data. It also documents a routes API to integrate route creation, assignment and progress tracking with your TMS, a Messages API for driver messages and a Documents API for forms drivers fill out.",
    sources: ['samsaraDocs', 'samsaraRest'],
    span: 'lg:col-span-12',
  },
];

/* ── Five questions that decide the route. A numbered list on purpose. ── */
const DECIDE_STEPS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'Does the job live inside one platform you already pay for?',
    b: 'If the work is tracking loads that already sit in FourKites or project44, or messaging drivers inside your ELD, try that platform first. FourKites names six agents of its own.',
  },
  {
    n: '02',
    t: 'Is the job one a specialist product already sells?',
    b: 'Carrier sales calls, broker quoting and small-fleet dispatch each have products: HappyRobot, Augment, Vooma, DispatchMVP and Numeo among them. All are listed further down with a link to each vendor.',
  },
  {
    n: '03',
    t: 'Does it span your TMS, WMS, inbox, carrier portals and accounting?',
    b: 'That is where a custom agent fits. Examples are a tender read from email and built in your TMS, a POD matched to the load and the carrier invoice, and a detention claim built from ELD timestamps and your customer terms.',
  },
  {
    n: '04',
    t: 'Can the rules be written down?',
    b: 'If your team can explain the work as rules, such as which customer, which lane, which accessorial and which free time, an agent can follow them. Where it rests on judgment about a carrier or a customer, the agent prepares the facts and a person decides.',
  },
  {
    n: '05',
    t: 'Who approves the result?',
    b: 'Name one person for each kind of draft before anything is built: bookings, customer updates, invoices, claims. An agent with no named approver has nowhere to send its drafts.',
  },
];

/* ── How a custom agent sits beside the software a logistics company runs.
   Each row restates what that vendor's own developer pages say, as read on
   2026-11-08. This is "connects through the API the vendor publishes", never
   a partner claim. ── */
const CONNECTS: ReadonlyArray<{ system: string; holds: string; api: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    system: 'Samsara',
    holds: 'ELD, HOS, locations, routes, driver messages',
    api: 'Samsara documents API tokens and OAuth 2.0 for sign-in, webhooks that notify you when an event occurs in your account, a Messages API that sends messages to drivers on behalf of a fleet admin, and a Documents API that captures what drivers submit.',
    sources: ['samsaraDocs', 'samsaraRest'],
  },
  {
    system: 'Motive',
    holds: 'ELD, HOS logs, locations, messaging',
    api: 'Motive describes an open API to integrate Motive with your existing platforms, with categories for vehicles, HOS logs, locations, messaging, inspection reports and webhooks, and a free developer account.',
    sources: ['motive'],
  },
  {
    system: 'project44',
    holds: 'Shipment tracking and status',
    api: "project44's API reference lists shipment tracking, truckload and LTL tracking, a truckload webhook and push tracking, with OAuth 2.0 client applications and token generation. It says all the API endpoints require authentication.",
    sources: ['p44', 'p44Ref'],
  },
  {
    system: 'Truckstop',
    holds: 'Load board, rates, carrier checks',
    api: 'Truckstop says its Load Management API helps manage the life cycle of loads on the load board, and its Carrier Monitoring API returns a carrier\'s details by DOT number. Its REST APIs sign in with tokens.',
    sources: ['truckstop'],
  },
  {
    system: 'Your TMS and WMS',
    holds: 'Loads, rates, orders, inventory',
    api: 'The agent connects through the API the vendor publishes, or the access your account already has, such as EDI, file exports or a reporting database. We check which one before scoping a job.',
    sources: [],
  },
];

/* ── Seven jobs. One card each, with what stays with a person. The pattern is
   the one Bhavesh confirmed FactoryJet builds (document intake, order and RFQ
   agents, voice agents, ERP work), applied to logistics. No logistics client
   is claimed. ── */
type Job = {
  n: string;
  title: string;
  body: string;
  items: ReadonlyArray<string>;
  person: string;
  sources: ReadonlyArray<SrcKey>;
  span: string;
};

const JOBS: ReadonlyArray<Job> = [
  {
    n: '01',
    title: 'Load tender and rate request intake',
    body: 'Tenders and rate requests arrive by email, as PDFs, spreadsheets or a few lines of text. The agent reads each one and builds the draft in your TMS.',
    items: [
      'Pulls the shipper, consignee, pickup and delivery windows, equipment, weight and references out of the email or attachment',
      'Matches the customer and lane to your contract rates, and prices a spot request from the rate rules you give it',
      'Creates the draft load or quote in your TMS and flags anything it cannot match',
      'Watches the thread for changes and says what changed',
    ],
    person: 'Your planner or rep accepts the tender and sends the quote.',
    sources: [],
    span: 'lg:col-span-7',
  },
  {
    n: '02',
    title: 'Carrier sourcing and check calls',
    body: 'A load needs a truck, and a booked load needs updates. The agent drafts the carrier outreach and chases status.',
    items: [
      'Lists carriers who ran the lane before, from your own TMS history',
      "Pulls a carrier's details for a person to check before booking, where your load board publishes an API",
      'Sends check-call emails or texts on a schedule and reads the replies',
    ],
    person: 'A broker picks the carrier and agrees the rate.',
    sources: ['truckstop'],
    span: 'lg:col-span-5',
  },
  {
    n: '03',
    title: 'Shipment status updates to customers',
    body: 'Customers ask where their freight is. The agent reads the position and drafts the answer.',
    items: [
      'Reads location and ETA from your ELD or visibility platform',
      'Drafts the update in your house style, per customer, on the schedule they asked for',
      'Flags a load that will miss its window, with the reason',
    ],
    person: 'Your rep sends any update about a late or damaged load.',
    sources: ['samsaraDocs', 'p44Ref'],
    span: 'lg:col-span-5',
  },
  {
    n: '04',
    title: 'POD and freight invoice matching',
    body: 'PODs, BOLs and carrier invoices arrive as photos and PDFs. The agent matches them to the load before billing.',
    items: [
      'Reads the signature, date, piece count and exception notes on the POD',
      'Matches the carrier invoice to the rate confirmation and flags any line that differs',
      'Builds the customer invoice packet with the POD attached',
      'Chases a missing POD from the carrier',
    ],
    person: 'Billing releases the invoice. Payables approves the carrier payment.',
    sources: [],
    span: 'lg:col-span-7',
  },
  {
    n: '05',
    title: 'Accessorial and detention claims',
    body: 'Detention, layover and lumper charges are lost when nobody has time to write them up. The agent drafts each claim with its evidence.',
    items: [
      'Reads arrival and departure times from ELD data or check-in records',
      'Applies the free time and rates in each customer contract',
      'Drafts the claim with timestamps and the POD attached',
    ],
    person: 'A manager decides whether to file it and settles any dispute.',
    sources: [],
    span: 'lg:col-span-6',
  },
  {
    n: '06',
    title: 'Warehouse order exceptions and dock appointments',
    body: 'Short ships, bad addresses and carriers asking for a dock slot all arrive as emails. The agent reads them against the WMS.',
    items: [
      'Checks an order exception against inventory and the customer rules, and drafts the fix',
      'Reads an inbound appointment request and offers the open dock slots',
      'Keeps the customer thread updated',
    ],
    person: 'A supervisor approves inventory changes and confirms the slot.',
    sources: [],
    span: 'lg:col-span-6',
  },
  {
    n: '07',
    title: 'Driver dispatch messages',
    body: 'Every load means messages to a driver: pickup details, changes, reminders. The agent drafts them from the load.',
    items: [
      'Builds the pickup and delivery message from the TMS record',
      'Checks hours of service before suggesting a driver, where your ELD shares them',
      "Sends through your ELD's messaging, where its API allows",
    ],
    person: 'Your dispatcher chooses the driver and confirms the plan.',
    sources: ['samsaraRest', 'motive'],
    span: 'lg:col-span-12',
  },
];

/* ── Who keeps control. ── */
type Keeper = 'software' | 'build' | 'person';

const KEEPER_LABEL: Record<Keeper, string> = {
  software: 'Your software enforces',
  build: 'We set up',
  person: 'Your team keeps',
};

const GUARDS: ReadonlyArray<{ rule: string; keeper: Keeper; note: string }> = [
  {
    rule: 'A login it cannot exceed',
    keeper: 'software',
    note: 'The agent signs in with its own credentials. Samsara documents API tokens and OAuth 2.0, and project44 says all its API endpoints require authentication.',
  },
  {
    rule: 'Only the data its job needs',
    keeper: 'software',
    note: 'Access is granted per system and per job. A status agent reads positions. It does not see carrier pay.',
  },
  {
    rule: 'One rate source',
    keeper: 'build',
    note: 'The agent prices from your contract rates and rate rules and nowhere else. Where a rate is missing it asks a person. It does not make one up.',
  },
  {
    rule: 'Read-only first',
    keeper: 'build',
    note: 'The first version reads your records and writes nothing. Write access is added one record type at a time, after you have seen its drafts.',
  },
  {
    rule: 'A log of every draft',
    keeper: 'build',
    note: 'Each draft is logged with the email or document it came from and the lookups behind it, so a reviewer can see why a number is there.',
  },
  {
    rule: 'Approval before anything goes out',
    keeper: 'person',
    note: 'Quotes, bookings, customer updates about problems, invoices and claims are saved as drafts. A named person approves each one.',
  },
  {
    rule: 'The judgment calls',
    keeper: 'person',
    note: 'Carrier choice on a hard lane, rate negotiation and customer disputes stay with your team. The agent prepares the facts.',
  },
];

/* ── Where logistics AI projects break. Two come from the linked pages. The
   rest are our own advice and carry no source link. ── */
const BREAKS: ReadonlyArray<{ t: string; b: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    t: 'Contract rates nobody has loaded',
    b: 'An agent quotes from the rates it is given. If half your customer rates live in an account manager’s spreadsheet, load them before the build starts.',
    sources: [],
  },
  {
    t: 'Accessorial rules nobody wrote down',
    b: 'Free time, detention rates and lumper rules differ by customer. If they sit in people’s heads, the agent cannot apply them. Write them down first.',
    sources: [],
  },
  {
    t: 'Expecting an agent to plan routes',
    b: 'Route optimization is its own kind of software. Samsara documents a routes API for passing routes between its system and your TMS, so an agent can work with routes. It should not invent them.',
    sources: ['samsaraDocs'],
  },
  {
    t: 'Cold calls with an AI voice',
    b: "The FCC's ruling of 8 February 2024 treats AI-generated voices as 'artificial' under the Telephone Consumer Protection Act. FCC rules require telemarketers to obtain prior express written consent before robocalling consumers.",
    sources: ['fcc'],
  },
  {
    t: 'One inbox for everything',
    b: 'When tenders, PODs, invoices and spam share one inbox with no rules, the agent spends its effort sorting. A few forwarding rules on day one make every later step simpler.',
    sources: [],
  },
  {
    t: 'No named approver',
    b: 'A booking or a claim with no named owner sits in a queue. Name one person for each kind of draft before the build.',
    sources: [],
  },
];

/* ── Our experience, stated plainly. No logistics client is named or claimed
   and no result is claimed. Wording follows /services/construction-ai-agents,
   which Bhavesh approved. ── */
const EXPERIENCE: ReadonlyArray<{ t: string; kind: string; what: string; href: string; cta: string; span: string }> = [
  {
    t: 'What we have worked on',
    kind: 'ERP · order and RFQ agents · voice',
    what: 'FactoryJet has worked on Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs. The jobs were RFQ automation and quoting, daily bookkeeping, and purchase and sales order generation. We also build AI voice agents, and EDI, punchout catalog, Xero, HubSpot and WhatsApp integrations.',
    href: '/services/erp-ai-agents',
    cta: 'See AI agents for ERP systems',
    span: 'lg:col-span-7',
  },
  {
    t: 'What you see before you sign',
    kind: 'A demo on your own data',
    what: 'Before a contract, we show working software on your own data. For a logistics company that means real tenders, rate requests or PODs you have already handled, run through a first version so you can lay its drafts beside what your team did.',
    href: '/contact',
    cta: 'Ask for a demo on your data',
    span: 'lg:col-span-5',
  },
  {
    t: 'How we are rated',
    kind: '500+ businesses · 97% on time · 4.9 / 5',
    what: 'FactoryJet has served more than 500 businesses, with 97% on-time delivery and a 4.9 / 5 average Google review rating.',
    href: '/about',
    cta: 'Read about FactoryJet',
    span: 'lg:col-span-5',
  },
  {
    t: 'How we price and stay on',
    kind: 'Fixed price per phase',
    what: 'You get a fixed price per phase in writing, defect cover after launch and no monthly minimum. You own the code. After launch we can keep managing the servers, the AI models and the API connections, so your team does not have to.',
    href: '/services/ai-agent-monitoring',
    cta: 'See monitoring and support',
    span: 'lg:col-span-7',
  },
];

/* ── Who this is for. Examples of the kinds of company the work suits, not a
   client list. Pictures generated with Codex on 2026-11-08 and checked at
   full size. The people in them are not FactoryJet staff or clients. ── */
const INDUSTRIES: ReadonlyArray<{ img: string; alt: string; t: string; b: string }> = [
  {
    img: `${IMG}/warehouse-scanner-aisle.webp`,
    alt: 'A woman in an orange safety vest and grey t-shirt scans a cardboard carton with a black handheld scanner in a warehouse aisle lined with blue and orange pallet racking',
    t: '3PLs and warehouses',
    b: 'Order exceptions, appointment requests and customer emails pile up beside the WMS. The agent reads them against your inventory and drafts the fix for a supervisor.',
  },
  {
    img: `${IMG}/broker-paperwork-desk.webp`,
    alt: 'A woman with a black bob and a burgundy blouse reads a printed document with a pen in hand at a wooden desk beside a black desk phone and an orange folder',
    t: 'Freight brokers',
    b: 'Rate requests, tenders and carrier updates arrive all day. The agent builds the quote or load in your TMS and chases status, and your brokers keep the rates and relationships.',
  },
  {
    img: `${IMG}/driver-cab-yard.webp`,
    alt: 'A bearded man in an olive work shirt and jeans stands on the step of a plain white truck cab and looks at a phone, with white trailers parked behind him',
    t: 'Carriers and trucking fleets',
    b: 'Dispatch messages, PODs and detention claims eat the office day. The agent drafts them from your TMS and ELD data for your dispatcher and billing team.',
  },
  {
    img: `${IMG}/loading-dock-trailer.webp`,
    alt: 'A man in a grey knit cap, navy jacket and work gloves pulls a red pallet jack loaded with shrink wrapped boxes out of a white trailer at a loading dock',
    t: 'Shippers’ logistics teams',
    b: 'Carrier updates, freight invoices and claims land with a small team. The agent matches invoices to loads and drafts the updates your customers expect.',
  },
];

/* ── Process. Six steps, in the order we work. ── */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'List the systems and the paperwork',
    b: 'Which TMS, WMS, ELD and accounting systems you run, and which emails and documents arrive each day. Whether each system has an API, which is a way for other software to read and write its records, decides what an agent can do.',
  },
  {
    n: '02',
    t: 'Check what you already own',
    b: 'If your visibility platform, your ELD or a specialist product already does the job, we say so, even when it means there is no work for us.',
  },
  {
    n: '03',
    t: 'Pick one job and write down its rules',
    b: 'One task, such as tenders from one customer inbox or POD matching. The rules a person follows today go on paper, along with who approves the result.',
  },
  {
    n: '04',
    t: 'Show it on your own data',
    b: 'Before a contract, we run a set of your real documents through a first version, so you see drafts you can judge against what your team did.',
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

/* ── Comparison: three kinds of provider ── */
const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: '01 AI inside your TMS, WMS or platform' },
  { label: '02 A specialist logistics AI product' },
  { label: '03 A custom agent built for you' },
];

const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'What it is',
    values: [
      'Agents and assistants shipped inside software you already run, such as FourKites, Blue Yonder or your ELD',
      'A product built for one job, such as carrier calls, broker quoting or small-fleet dispatch',
      'An agent designed around your rules and built for you',
    ],
  },
  {
    feature: 'What starts the work',
    values: [
      'An event inside that platform',
      'A call, an email or a load you send to the product',
      'The thing itself arriving, whether a tender, a POD, a status email or a dock request',
    ],
  },
  {
    feature: 'Which systems it reaches',
    values: ['That platform', 'Its own screens plus the connections it offers', 'Your TMS, WMS, ELD, inbox, portals and accounting, through the access each allows'],
  },
  {
    feature: 'Who sets the rules',
    values: ['The vendor, with settings you choose', 'The vendor', 'You, in writing, before the build'],
  },
  {
    feature: 'How you pay',
    values: [
      'Inside your subscription or by plan tier',
      'A subscription or usage plan',
      'A fixed price per phase, quoted in writing after a scoping call. No monthly minimum',
    ],
  },
  {
    feature: 'Who you call when it breaks',
    values: ['The platform vendor', 'The product vendor', 'The team that built it, with defect cover after launch'],
  },
  {
    feature: 'Right call when',
    values: [
      'The job lives inside that one platform',
      'Your process matches what the product expects',
      'The job spans several of your systems and follows your own rules',
    ],
  },
];

/* ── Specialist products AI assistants named on 8 Nov 2026. Each line
   restates the vendor's own page as read that day. FactoryJet sells none of
   them. Feeds the visible list AND the ItemList JSON-LD. ── */
const OTHERS: ReadonlyArray<{ name: string; focus: string; says: string; source: SrcKey }> = [
  {
    name: 'HappyRobot',
    focus: 'Agent platform · carrier sales, track and trace',
    says: 'Says it lets you build and orchestrate agents that automate communication-heavy work at enterprise scale. Its logistics card lists carrier sales and track and trace.',
    source: 'happyrobot',
  },
  {
    name: 'Augment',
    focus: 'Freight brokerages and 3PLs',
    says: 'Says its agent, Augie, runs quoting, booking, updates and more, so a brokerage team stays focused on revenue and retention.',
    source: 'augment',
  },
  {
    name: 'Vooma',
    focus: 'Brokers and carriers',
    says: 'Says it is built for brokers to help quote and build loads, schedule, cover and track, and helps carriers build and schedule loads and keep brokers updated.',
    source: 'vooma',
  },
  {
    name: 'Pallet',
    focus: 'Logistics operations agents',
    says: 'Describes its agents product as a way to run your operations end-to-end with AI. A customer example on its home page covers warehousing, freight forwarding and transportation tasks.',
    source: 'pallet',
  },
  {
    name: 'DispatchMVP',
    focus: 'Dispatch for trucking companies',
    says: 'Says its agent, Otto, handles dispatching, updates and load intel by voice or text, and can auto-import loads from load boards, emails, PDFs or screenshots.',
    source: 'dispatchmvp',
  },
  {
    name: 'Numeo',
    focus: 'Dispatch for carriers',
    says: 'Calls itself AI dispatch software for trucking carriers that helps dispatchers find loads faster, contact brokers sooner and negotiate with AI.',
    source: 'numeo',
  },
];

const othersSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Specialist AI products for logistics, freight brokerage and trucking dispatch',
  itemListElement: OTHERS.map((o, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: o.name,
    url: SRC[o.source].url,
  })),
};

/* ── Cost: three labelled market estimates for a BUILD. Never a FactoryJet
   price and never a running cost. ── */
const COSTS: ReadonlyArray<{ firm: string; range: string; scope: string; source: SrcKey }> = [
  {
    firm: 'Biz4Group',
    range: '$35,000 to $55,000',
    scope: 'Logistics and supply chain agents, which it says depend on real-time data from warehouse, fleet and shipment systems.',
    source: 'biz4group',
  },
  {
    firm: 'RapidDev',
    range: '$13,000 to $25,000',
    scope: 'A standard agency build of a logistics agent, up to $35,000 for multi-system, voice or compliance-heavy work. RapidDev sells these builds itself.',
    source: 'rapiddev',
  },
  {
    firm: 'SparkoutTech',
    range: '$25,000 to $60,000',
    scope: 'An MVP agent, with $60,000 to $150,000 for a business process agent. Not specific to logistics.',
    source: 'sparkout',
  },
];

const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  { href: '/services/document-intake-ai-agents', t: 'Document intake AI agents', b: 'Reading PDFs, scans and photos into your systems, the core of POD and invoice work.' },
  { href: '/services/ai-agent-development/procurement-supply-chain-agent', t: 'Procurement and supply chain agent', b: 'The buying side: purchase orders, supplier confirmations and delay notices.' },
  { href: '/services/ai-receptionist', t: 'AI receptionist', b: 'A custom voice agent that answers, qualifies and routes calls.' },
  { href: '/services/erp-ai-agents', t: 'AI agents for ERP systems', b: 'Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs on one page.' },
  { href: '/services/ai-agent-development', t: 'AI agent development', b: 'Custom agents for support, sales and operations, beyond logistics.' },
  { href: '/services/ai-agent-monitoring', t: 'AI agent monitoring and support', b: 'Watching, re-testing and fixing an agent after launch.' },
];

/** Small inline source links. Same visual pattern as /services/construction-ai-agents.
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

export default function LogisticsAiAgentsPage() {
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
                    AI FOR LOGISTICS &middot; 3PL &middot; FREIGHT &middot; UNITED STATES
                  </span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.2rem]">
                  AI for logistics: agents that handle load tenders, check calls and PODs for your team to approve.
                </h1>

                <p className={`${styles.heroLead} mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600`}>
                  FactoryJet builds custom AI agents for US 3PLs, freight brokers, carriers and warehouses that read load
                  tenders and rate requests from email, chase check calls and proofs of delivery, match freight invoices
                  and draft shipment updates, working inside the TMS, WMS and ELD accounts you already use.
                </p>

                <div className={`${styles.heroForm} mt-6`}>
                  <HeroInlineForm
                    region="us"
                    source="services_logistics_ai_agents_hero"
                    service="Logistics AI Agents"
                    submitLabel="See a demo on my data"
                    trustText="Working software on your own data before you sign. Founder replies within 24 hours."
                  />
                </div>

                <p className={`${styles.heroDetails} mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600`}>
                  Some jobs need nothing built, because your visibility platform, your ELD or a specialist product
                  already does them. Where the work spans your own TMS (transportation management system), WMS
                  (warehouse management system), email inbox, carrier portals and accounting, and follows your rules,
                  we build the agent, connect it and stay on after launch. You get a fixed price per phase in writing
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
                  <span>Demo on your own data before a contract</span>
                  <span>500+ businesses served</span>
                  <span>97% on-time delivery</span>
                  <span>4.9 / 5 average Google rating</span>
                  <span>Vendor pages read {CHECKED_ON}</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white">
                  <img
                    src={`${IMG}/hero-dispatcher-desk.webp`}
                    alt="A dispatcher with a grey beard and a black headset types at a desk with two monitors showing simple blocks and a pale map, with white trailers parked outside the window"
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
                An AI agent for logistics is software that does one operations task. It reads what arrives, such as a
                load tender, a rate request, a carrier status email or a proof of delivery, looks it up in your TMS or
                WMS, and drafts the quote, load, customer update or invoice match for a person to approve.
              </p>
              <p className="mt-4 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                It works alongside your TMS rather than replacing it, and software you may already own covers part of
                this. FourKites names six agents of its own, and Samsara
                documents a way to connect AI agents to fleet data. Specialist products answer carrier calls and quote
                loads. A custom agent covers work that crosses your own systems and follows your own rules.
              </p>
              <SourceLinks ids={['fourkites', 'samsaraDocs']} />
            </div>
          </div>
        </section>

        {/* 3. WHAT YOUR PLATFORMS ALREADY SHIP */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">What you already own</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              What logistics platforms already ship for AI.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Start here. Each card restates the vendor&rsquo;s own pages, as read on {CHECKED_ON}. If one of these
              already does your job, you do not need a build, and we will tell you so.
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
                What we found on {SEARCHED_ON}
              </div>
              <h3 className="mt-3 font-fj-display text-xl font-semibold text-fj-ink">
                Four things we measured before writing this page.
              </h3>
              <ul className="mt-4 grid max-w-3xl gap-3 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  We ran six US Google searches, including &ldquo;ai for logistics&rdquo;, &ldquo;dispatch ai&rdquo;
                  and &ldquo;ai for freight brokers&rdquo;. All six showed an AI Overview at the top.
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  We asked six AI assistants &ldquo;Who builds AI agents for logistics and 3PL companies?&rdquo;. Most
                  names in the answers were ready-made products, such as FourKites, Blue Yonder, HappyRobot and Pallet.
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  Asked which software automates dispatch and load booking for a trucking company, four of the six
                  answers named DispatchMVP.
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  Asked what a custom logistics agent costs to build, the answers cited development firms&rsquo; cost
                  guides. The ranges from three of them are in the cost section below.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3b. WORKS WITH THE SOFTWARE YOU ALREADY USE */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Works with what you run</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  A custom agent works beside your TMS, WMS, ELD and load board.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Your records stay where they are. The agent gets its own login to each system, with only the
                  permissions its job needs, and connects through the API the vendor publishes or the access your
                  account already has. Drafts land in the tool your team already opens every morning.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  Most AI for fleet management starts from ELD data, so the ELD comes first. Each row says what that
                  vendor&rsquo;s own developer pages describe, as read on {CHECKED_ON}.
                </p>
              </div>

              <ul className="grid gap-3 lg:col-span-8">
                {CONNECTS.map((c) => (
                  <li
                    key={c.system}
                    className="grid grid-cols-1 gap-2 rounded-2xl border border-fj-neutral-200 bg-fj-cream px-5 py-4 sm:grid-cols-[190px_1fr] sm:gap-5"
                  >
                    <div>
                      <div className="font-fj-display text-base font-semibold text-fj-ink">{c.system}</div>
                      <div className="mt-1 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">
                        {c.holds}
                      </div>
                    </div>
                    <div>
                      <p className="font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{c.api}</p>
                      <SourceLinks ids={c.sources} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 4. FIVE QUESTIONS THAT DECIDE THE ROUTE */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Switch on, buy or build</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Five questions that decide whether to switch on, buy or build.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Ask them in this order. The first two often end the conversation, because the answer is a feature
                  you already pay for or a product you can subscribe to this week.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  Where we come in is question three onward: logistics automation that depends on your own rates, your
                  own rules or more than one system.
                </p>
                <SourceLinks ids={['fourkites']} />
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

        {/* 5. COMPARISON: three kinds of provider */}
        <ComparisonTable
          eyebrow="Three kinds of provider"
          headline="AI inside your TMS or platform, a specialist product, or an agent built for you."
          lead="Logistics AI solutions come in three kinds, and each is the right one for somebody. On the scoping call we say which we would choose for you and why, even when it means there is no work for us."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer={`Vendor facts are from each vendor's own pages as read on ${CHECKED_ON}.`}
          scrollRegionLabel="Comparison of three ways a logistics company can add AI"
        />

        {/* 6. SEVEN JOBS */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Seven jobs</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Seven logistics office jobs an AI agent can draft for your team.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Each card says what the agent does and what stays with a person. Every job ends the same way, with a
              draft a person approves. AI in logistics and supply chain work splits in two: moving goods, covered
              here, and buying them. For the paperwork side, see{' '}
              <Link href="/services/document-intake-ai-agents" className="font-semibold text-fj-ink underline underline-offset-4">
                document intake AI agents
              </Link>
              . Buying from suppliers is a different job, covered by our{' '}
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
                    <span className="font-semibold">Stays with a person.</span> {s.person}
                  </p>
                  <SourceLinks ids={s.sources} />
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              These are the jobs logistics companies search for. In US search data we pulled on 8 Nov 2026,
              &ldquo;warehouse ai&rdquo; drew about 3,600 searches a month, &ldquo;ai for logistics&rdquo; about 1,300,
              &ldquo;ai in transportation&rdquo; about 720, &ldquo;dispatch ai&rdquo; about 390 and &ldquo;ai for
              trucking&rdquo; about 140. The same pattern fits every card
              above: read what arrives, look it up, draft, approve.
            </p>
          </div>
        </section>

        <MidPageCTA
          headline="Tell us the job. We will say if your software already does it."
          sub="Send one task that fills your team's day: tenders, check calls, PODs, invoices, claims or dock requests. We reply with what your current software or a specialist product covers, what we would build, and a fixed price per phase if there is work for us."
          label="Scope my agent"
        />

        {/* 7. WHO KEEPS CONTROL */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Keeping control</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Its own login, one rate source and a named approver keep an agent safe.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  To your software, an agent is a user. It can do what its login allows and nothing more.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  Seven controls follow. Your software enforces two, we set up three and your team keeps two.
                </p>
                <SourceLinks ids={['samsaraDocs', 'p44Ref']} />
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

        {/* 8. COST */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">Cost</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  What a custom logistics AI agent costs to build: market estimates.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  These ranges come from three development firms&rsquo; published 2026 cost guides, read on{' '}
                  {CHECKED_ON}. They are market estimates, not FactoryJet prices, and each firm defines its tiers
                  differently.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  What moves the number most is how many systems the agent reads, whether it writes to them, and
                  whether it handles voice. FactoryJet quotes a fixed price per phase in writing after a short scoping
                  call, with no monthly minimum.
                </p>
              </div>
              <ul className="grid gap-4 lg:col-span-7">
                {COSTS.map((c) => (
                  <li key={c.firm} className="rounded-2xl border border-fj-neutral-200 bg-white p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{c.firm}</h3>
                      <span className="font-fj-mono text-sm font-bold text-[#B23E13]">Market estimate: {c.range}</span>
                    </div>
                    <p className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{c.scope}</p>
                    <SourceLinks ids={[c.source]} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 9. WHERE IT BREAKS */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">The traps</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Six places a logistics AI project breaks.
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Knowing these early saves a rebuild. Two come from the linked vendor and regulator pages. The four
              without a link are our own advice.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {BREAKS.map((l) => (
                <li key={l.t} className="rounded-xl border border-fj-neutral-200 border-l-[3px] border-l-[#F05A28] bg-fj-cream px-5 py-4">
                  <div className="font-fj-display text-[15px] font-semibold text-fj-ink">{l.t}</div>
                  <p className="mt-1 font-fj-body text-sm leading-relaxed text-fj-neutral-600">{l.b}</p>
                  <SourceLinks ids={l.sources} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 10. OUR EXPERIENCE. No client is named on this page. */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Our experience</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              What we bring to a logistics operations team, stated plainly.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              FactoryJet has served more than 500 businesses. Client projects with public
              write-ups are in our{' '}
              <Link href="/case-studies" className="font-semibold text-fj-ink underline underline-offset-4">
                case studies
              </Link>
              .
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
              {EXPERIENCE.map((w) => (
                <li key={w.t} className={`flex flex-col rounded-2xl border border-fj-neutral-200 bg-white p-6 ${w.span}`}>
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

        {/* 11. WHO THIS IS FOR */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Who this is for</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Built for the offices that keep freight moving.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  The office work looks much the same at a 3PL, a brokerage, a carrier and a shipper. Something
                  arrives, someone looks it up, someone types it into another system.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  For quoting and order work in a plant, see{' '}
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
                  <li key={ind.t} className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-fj-cream">
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

        {/* 12. PROCESS */}
        <section className="bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Process</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  How we design, build and support an agent for a logistics company.
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
                  keeps it working as your software and the AI models change. For a phone line, see our{' '}
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
                  <li key={p.n} className="flex items-start gap-4 rounded-2xl border border-fj-neutral-200 bg-white p-6">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-fj-cream font-fj-mono text-sm font-bold text-[#B23E13]">
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

        {/* 13. SPECIALIST PRODUCTS */}
        <section className="border-t border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Ready-made options</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Six specialist freight AI and dispatch products, and what each says it does.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  These are ready-made AI tools for logistics. We wrote this list and we sell none of them. AI assistants named them when we asked
                  logistics buyers&rsquo; questions on {SEARCHED_ON}. Each line restates the vendor&rsquo;s own page.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  They are listed in no order of merit. If your process matches what one of them expects, it may be
                  all you need.
                </p>
              </div>
              <ol className="grid gap-4 lg:col-span-8">
                {OTHERS.map((o, i) => (
                  <li key={o.name} className="flex items-start gap-4 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white font-fj-mono text-sm font-bold text-[#B23E13]">
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

        {/* 14. RELATED SERVICES */}
        <section className="border-y border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
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
                    className="block h-full rounded-2xl border border-fj-neutral-200 bg-white p-6 transition-colors hover:border-[#F05A28]"
                  >
                    <span className="font-fj-display text-lg font-semibold text-fj-ink">{r.t}</span>
                    <span className="mt-1.5 block font-fj-body text-sm leading-relaxed text-fj-neutral-600">{r.b}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 15. SOURCES + REVIEW LINE */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Method</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Sources, checked on {CHECKED_ON}.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Every product name, feature and number about another company on this page was read on that
                  company&rsquo;s own pages on {CHECKED_ON}. Vendors are named in the systems list only where their
                  own public developer pages describe an API. Vendors change these pages, so check the linked page
                  before you act on one.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Search figures are US monthly searches from DataForSEO, pulled on {SEARCHED_ON}. The six Google
                  searches and the AI assistant answers were collected through the same service on that day, one run
                  each, so treat single-answer differences as noise. Cost ranges are each firm&rsquo;s own published
                  estimate.
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

        {/* 16. FAQ */}
        <FAQ
          eyebrow="AI for logistics FAQ"
          headline="AI for logistics questions, answered plainly."
          lead={`What 3PL, brokerage, carrier and warehouse teams ask before adding an agent. Vendor answers are from each vendor's own pages as read on ${CHECKED_ON}.`}
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-fj-cream"
        />

        {/* 17. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="AI for logistics"
          headline="Keep your planners in charge. Add an agent that does the reading and the typing."
          sub="Tell us one job that fills your team's day. We say what your software already covers, show a first version on your own data and stay on after launch."
          primaryCta={{ label: 'Scope my agent', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="Demo before you sign. Fixed price per phase. Defect cover after launch. No monthly minimum. You own the code."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
