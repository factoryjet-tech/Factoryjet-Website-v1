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

import AgentLoopDiagram from './AgentLoopDiagram';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/erp-ai-agents, built 2026-10-09.

   Why this page exists: in the AI buyer sweeps of 17 Sep and 9 Oct 2026 the
   question "Who implements AI agents inside ERP systems like NetSuite, SAP or
   Odoo?" was answered from vendor partner lists and small firms' pages, and
   FactoryJet had a blog post but no service page. Asked about one ERP at a
   time on 9 Oct, ChatGPT cited small Odoo and NetSuite firms by name.
   US monthly searches measured 2026-10-09 (DataForSEO, location 2840):
   "ai for erp" / "erp ai" / "ai erp" 1,000 each (KD 30 to 35), "netsuite ai"
   480 (KD 4), "netsuite ai connector service" 320, "odoo ai" 260 (KD 12),
   "erp ai chatbot" 170 (KD 0), "erp integration services" 110 (KD 0),
   "purchase order automation" 110, "erp automation" 90 (KD 0), "netsuite ai
   agent" 70, "odoo ai agent" 50, "sales order automation" 30. An AI Overview
   showed on 19 of the 19 SERPs that returned. FactoryJet was in no top 20.

   Scope is wide on purpose: Bhavesh asked on 2026-10-09 for one page covering
   Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs. Each system has
   its own card so a single-ERP question can still be answered from this page.

   Truth rules for anyone editing this file:
   - Every platform fact (API names, dates, requirements, limits) was read from
     the maker's own page on 2026-10-09 and links to it through the SRC map
     below. If you change one, re-fetch the page first and update CHECKED_ON.
   - Bhavesh confirmed on 2026-10-09 that FactoryJet has worked on Odoo,
     NetSuite, SAP Business One, ERPNext and custom ERPs, on RFQs, daily
     bookkeeping, and purchase and sales order generation.
   - Client names appear in ONE block (section 7) and nowhere else: not in the
     hero, the meta description, the schema or the FAQ. Named with his
     permission that day: Sow Easy, GPSUK, Impulse Branding Solutions, Yadav
     Entrance Automation. The two QuickBooks projects in progress stay unnamed.
     Each line restates the public case study or his own words. No results are
     claimed for any of them.
   - No FactoryJet prices. The only dollar figures are sourced market ranges
     inside the two cost FAQ answers.
   - The six "other names" restate each firm's own page as read that day. We
     have not worked with them and did not test their products.
   - Partner status is left out on purpose (Bhavesh, 2026-10-09). FactoryJet is
     not a listed partner of any ERP maker, so the page raises no partner
     title, ours or another firm's, and leads on range across ERPs instead.
     Do not add a partner claim.
   - He also confirmed that day: the AI and hosting bills may sit in the
     client's own accounts at cost, and FactoryJet keeps managing the servers,
     the AI models, the API connections and the upkeep either way.
   - Mirrors /services/wordpress-shopify-integration for components and schema.

   Schema: WebPage + Service + FAQPage + ItemList + BreadcrumbList.
   Organization is rendered once sitewide by src/app/layout.tsx and referenced
   here by @id. The FAQPage mainEntity is generated from the exact FAQ_ITEMS
   array the visible <FAQ> component renders. There is no second array.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/erp-ai-agents';
const PAGE_TITLE = 'AI Agents for ERP: Odoo, NetSuite, SAP Business One | FactoryJet';
const PAGE_DESC =
  'We design, build and support AI agents inside Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs. They draft quotes, orders and bookkeeping for approval.';
const PAGE_PUBLISHED = '2026-10-09';
const PAGE_MODIFIED = '2026-10-09';
const CHECKED_ON = '9 Oct 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/services/erp-ai-agents';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'ai for erp',
    'erp ai',
    'erp ai agents',
    'ai agents for erp',
    'ai erp integration',
    'erp integration services',
    'erp automation',
    'erp ai chatbot',
    'odoo ai agent',
    'netsuite ai agent',
    'netsuite ai connector service',
    'sap business one ai',
    'erpnext ai',
    'rfq automation',
    'purchase order automation',
    'sales order automation',
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
        alt: 'FactoryJet, AI agents for ERP systems for US businesses',
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
  { name: 'ERP AI Agents', url: CANONICAL_URL },
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
  name: 'ERP AI Agent Development',
  serviceType:
    'AI agents for ERP systems, ERP AI integration, AI agents for Odoo, NetSuite, SAP Business One and ERPNext, RFQ and quote automation, sales order and purchase order automation, bookkeeping automation',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'FactoryJet designs, builds, tests and supports AI agents that work inside an ERP system: Odoo, NetSuite, SAP Business One, ERPNext or a custom ERP. An agent reads an incoming request such as an RFQ, a purchase order or a supplier invoice, looks up prices, stock and terms in the ERP, and drafts the record for a person to approve. Work covers listing what the ERP exposes, writing down the rules, building on a test copy, a period of running beside the team, launch and support after launch.',
  url: CANONICAL_URL,
};

/* ── Sources. One map, used by every inline source link (the `short` label) AND
   by the visible "Sources" list near the foot of the page (the full `label`).
   Each URL was opened on 2026-10-09 and the supporting sentence read before the
   claim was written. ── */
const SRC = {
  odooApi: {
    short: 'Odoo docs: External JSON-2 API',
    label: 'Odoo 19.0 documentation: External JSON-2 API',
    url: 'https://www.odoo.com/documentation/19.0/developer/reference/external_api.html',
  },
  odooAi: {
    short: 'Odoo docs: AI',
    label: 'Odoo 19.0 documentation: AI',
    url: 'https://www.odoo.com/documentation/19.0/applications/productivity/ai.html',
  },
  odooAgents: {
    short: 'Odoo docs: AI agents',
    label: 'Odoo 19.0 documentation: AI agents',
    url: 'https://www.odoo.com/documentation/19.0/applications/productivity/ai/agents.html',
  },
  odoo20Agents: {
    short: 'Odoo 20 docs: AI agents',
    label: 'Odoo 20.0 documentation: AI agents',
    url: 'https://www.odoo.com/documentation/20.0/applications/productivity/ai/agents.html',
  },
  odoo20Api: {
    short: 'Odoo 20 docs: External API',
    label: 'Odoo 20.0 documentation: External JSON-2 API',
    url: 'https://www.odoo.com/documentation/20.0/developer/reference/external_api.html',
  },
  odooKeys: {
    short: 'Odoo docs: AI API keys',
    label: 'Odoo 19.0 documentation: AI API keys',
    url: 'https://www.odoo.com/documentation/19.0/applications/productivity/ai/apikeys.html',
  },
  nsConnector: {
    short: 'Oracle: NetSuite AI Connector Service',
    label: 'Oracle NetSuite Help Center: NetSuite AI Connector Service',
    url: 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_7200233106.html',
  },
  nsPerms: {
    short: 'Oracle: required features and permissions',
    label: 'Oracle NetSuite Help Center: Required Features and Permissions for the NetSuite AI Connector Service',
    url: 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0714080625.html',
  },
  nsStdTools: {
    short: 'Oracle: MCP Standard Tools SuiteApp',
    label: 'Oracle NetSuite Help Center: MCP Standard Tools SuiteApp',
    url: 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_143403258.html',
  },
  nsFaq: {
    short: 'Oracle: AI Connector Service FAQ',
    label: 'Oracle NetSuite Help Center: NetSuite AI Connector Service FAQ',
    url: 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_4160616848.html',
  },
  nsRisks: {
    short: 'Oracle: risks and controls',
    label: 'Oracle NetSuite Help Center: Associated Risks, Controls, and Mitigation Strategies',
    url: 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_9002708453.html',
  },
  nsRest: {
    short: 'Oracle: SuiteTalk REST web services',
    label: 'Oracle NetSuite Help Center: Overview of SuiteTalk REST Web Services',
    url: 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_1540391670.html',
  },
  sapServiceLayer: {
    short: 'SAP: Service Layer API reference',
    label: 'SAP Help Portal: SAP Business One Service Layer API Reference',
    url: 'https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html',
  },
  sapMaint: {
    short: 'SAP Support: Business One maintenance',
    label: 'SAP Support Portal: SAP Business One Maintenance and Release Family',
    url: 'https://support.sap.com/en/offerings-programs/support-small-medium-enterprises/business-one/maintenance.html',
  },
  sapJoule: {
    short: 'SAP News: Business AI highlights, Q1 2026',
    label: 'SAP News Center: SAP Business AI Release Highlights Q1 2026 (April 2026)',
    url: 'https://news.sap.com/2026/04/sap-business-ai-release-highlights-q1-2026/',
  },
  frappeRest: {
    short: 'Frappe docs: REST API',
    label: 'Frappe Framework documentation: REST API',
    url: 'https://docs.frappe.io/framework/user/en/api/rest',
  },
  erpnextRepo: {
    short: 'GitHub: frappe/erpnext',
    label: 'GitHub: frappe/erpnext, Free and Open Source Enterprise Resource Planning',
    url: 'https://github.com/frappe/erpnext',
  },
  mcp: {
    short: 'modelcontextprotocol.io',
    label: 'Model Context Protocol: What is the Model Context Protocol (MCP)?',
    url: 'https://modelcontextprotocol.io/introduction',
  },
  productCrafters: {
    short: 'ProductCrafters cost breakdown, 2026',
    label: 'ProductCrafters: AI Agent Development Cost, $5K to $180K+ (2026 Pricing Breakdown)',
    url: 'https://productcrafters.io/blog/how-much-does-it-cost-to-build-an-ai-agent/',
  },
  rsm: {
    short: 'RSM US: NetSuite AI',
    label: 'RSM US: Accelerate Productivity and Insights with RSM and NetSuite AI',
    url: 'https://rsmus.com/technologies/netsuite/services/netsuite-ai.html',
  },
  rand: {
    short: 'Rand Group: NetSuite AI guide',
    label: 'Rand Group: NetSuite AI, Features, AI agents, Ask Oracle and MCP (Aug 18, 2026)',
    url: 'https://www.randgroup.com/insights/oracle-netsuite/discover-the-powerful-ai-capabilities-embedded-in-netsuite/',
  },
  invitra: {
    short: 'Invitra: NetSuite AI agents',
    label: 'Invitra Technologies: NetSuite AI Services and AI Agents',
    url: 'https://invitratech.com/netsuite-ai-agents',
  },
  bista: {
    short: 'Bista Solutions: Odoo AI agents',
    label: 'Bista Solutions: How Bista Solutions Odoo AI Agents are helping businesses (Sep 2, 2025)',
    url: 'https://www.bistasolutions.com/resources/blogs/odoo-ai-agents/',
  },
  silent: {
    short: 'Silent Infotech: AI agents in Odoo',
    label: 'Silent Infotech: How AI Agents Are Transforming Odoo ERP',
    url: 'https://silentinfotech.com/blog/odoo-1/how-ai-agents-are-transforming-odoo-erp-477',
  },
  mywave: {
    short: 'MyWave: SAP Business One',
    label: 'MyWave: SAP-Certified AI Agents for SAP Business One',
    url: 'https://www.mywave.ai/sap-business-one',
  },
} as const;

type SrcKey = keyof typeof SRC;

/* ── FAQ. Single array, rendered visibly below AND used to build the FAQPage
   JSON-LD. Never hand-duplicate this list near the ld+json block.
   Questions come from People Also Ask pulled from DataForSEO (US, location
   2840) on 2026-10-09, prompt-style searches in Search Console, and the
   page's own keywords. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'The basics' },
  { key: 'systems', label: 'Your ERP' },
  { key: 'jobs', label: 'What the agent does' },
  { key: 'working', label: 'Working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── The basics ───────────────────────────────────────────────────
  {
    category: 'basics',
    question: 'What is an ERP AI agent?',
    answer:
      "It is software that does one office task inside your ERP, the system that holds your stock, orders and accounts. It reads a request such as an emailed RFQ or a supplier invoice, looks up prices, stock and terms in the ERP, and drafts the record. A person approves the draft. Then the agent posts it through the ERP's own API, the documented door other software uses.",
  },
  {
    category: 'basics',
    question: 'How can AI be used in ERP?',
    answer:
      'In three ways. It can answer questions from live ERP data, such as where an order is or what is in stock. It can read documents that arrive from outside, such as RFQs, purchase orders and invoices, and turn them into draft records. And it can do the matching work inside the books, such as pairing a supplier invoice with its purchase order.',
  },
  {
    category: 'basics',
    question: 'Is AI going to replace ERP systems?',
    answer:
      "Not on the evidence we read on 9 Oct 2026. The ERP makers are adding AI to their own products. Odoo 19 ships an AI app. Oracle says NetSuite has adopted the Model Context Protocol so outside AI tools can work with its records. An agent still needs one trusted record of stock, orders and accounts to read from and write to. That record is the ERP.",
  },
  {
    category: 'basics',
    question: 'Which AI is best for ERP?',
    answer:
      "Start with what your ERP supports. Odoo's documentation says its AI app supports Gemini and OpenAI as providers. Oracle's FAQ for the NetSuite AI Connector Service says Claude Pro and ChatGPT are currently supported as AI clients. For a custom agent the model is a choice we make with you, based on the task, your data rules and the running cost.",
  },
  {
    category: 'basics',
    question: 'What is the difference between an ERP chatbot and an ERP AI agent?',
    answer:
      "A chatbot answers. An agent also does. Odoo draws the same line in its own documentation. For Odoo 19 it says the standard Ask AI agent can open views and display reports, but cannot create leads or alter data. For Odoo 20, released in September 2026, it says an agent with no skills assigned can only provide information, and it lists Create Records and Update Records among the skills an agent can be given. Either way, changing records takes an agent that has been given tools for that job, and rules for when it may use them.",
  },
  {
    category: 'basics',
    question: 'What is AI ERP integration?',
    answer:
      "It means connecting an AI model to your ERP so the model can read real records and, where you allow it, create them. The connection runs through the ERP's API. For Odoo 19 that is the External JSON-2 API. For NetSuite it is REST web services or the AI Connector Service. For SAP Business One it is Service Layer. For ERPNext it is the Frappe REST API.",
  },
  {
    category: 'basics',
    question: 'What is the Model Context Protocol?',
    answer:
      "The Model Context Protocol, or MCP, is an open-source standard for connecting AI applications to outside systems. Its own site compares it to a USB-C port for AI applications. It matters for ERP work because Oracle's help center says NetSuite has adopted it. That gives an AI client a documented way to work with NetSuite records, reports and saved searches.",
  },
  // ── Your ERP ─────────────────────────────────────────────────────
  {
    category: 'systems',
    question: 'Does Odoo have AI agents?',
    answer:
      "Yes, in Odoo 19. Odoo's documentation describes an AI agent as a smart assistant that can understand natural language and perform tasks by interacting with Odoo tools. Each agent is built from topics, which carry its instructions and tools, and sources, such as PDFs, web links and Knowledge articles. Creating and customizing agents requires the AI app to be installed.",
  },
  {
    category: 'systems',
    question: 'Can an outside AI agent connect to Odoo?',
    answer:
      "Yes. Odoo 19 added the External JSON-2 API, reached at the /json/2 address and called with an API key. Odoo's documentation says the older XML-RPC and JSON-RPC addresses are scheduled for removal in Odoo 22, due in fall 2028, and its Odoo 20 pages add that Odoo Online drops them sooner, in Online 21.1, due in winter 2027. An integration built today should use the new API, or have a rewrite planned.",
  },
  {
    category: 'systems',
    question: 'What is the NetSuite AI Connector Service?',
    answer:
      "It is NetSuite's way of letting an outside AI client work with your account. Oracle's help center says NetSuite has adopted the Model Context Protocol, and provides a SuiteApp called MCP Standard Tools for working with records, reports, saved searches and SuiteQL queries. Oracle's FAQ says the service is not a paid feature and the SuiteApp is free, though your AI client may need a paid plan.",
  },
  {
    category: 'systems',
    question: 'Can ChatGPT or Claude connect to NetSuite?',
    answer:
      "Oracle's FAQ says Claude Pro and ChatGPT are currently supported, and that some ChatGPT plans need Developer Mode switched on. Your NetSuite account needs Server SuiteScript and OAuth 2.0 enabled, plus REST Web Services for the standard tools. The connection cannot run under the Administrator role. It needs a role with the MCP Server Connection permission.",
  },
  {
    category: 'systems',
    question: 'Does SAP have an AI agent?',
    answer:
      "SAP's assistant is called Joule. SAP's own news site said in April 2026 that Joule was live across 35 solutions. That article does not name SAP Business One. For Business One, an agent connects through Service Layer, the system's own API, which SAP's reference says uses OData version 4 as its primary protocol.",
  },
  {
    category: 'systems',
    question: 'Does SAP Business One still exist?',
    answer:
      "Yes. SAP's support site lists release 10.0 as in mainstream maintenance until December 31, 2028, and notes that dates are subject to change. The same page says version 11 is to follow version 10, and that extended maintenance is not offered for Business One releases. Check that page before you plan a multi-year project.",
  },
  {
    category: 'systems',
    question: 'Can AI agents work with ERPNext?',
    answer:
      "Yes. ERPNext is open source under the GPL-3.0 license. Frappe, the framework underneath it, says it generates a REST API for every DocType, its word for a record type, out of the box. An agent signs in with an API key and secret tied to one user, and Frappe says every request is logged against that user. FactoryJet runs its own customer records on ERPNext.",
  },
  {
    category: 'systems',
    question: 'Do you work with custom or older ERPs?',
    answer:
      'Yes. Many custom and older systems have no public API. We start by listing what the system does expose: a database that can be read, a file it exports, an email it sends. The agent is built around that. Where records must be written back, we use the route your IT team already trusts.',
  },
  {
    category: 'systems',
    question: 'Do you work with QuickBooks?',
    answer:
      'Yes. Many smaller distributors keep stock and books in QuickBooks instead of a full ERP. On 9 Oct 2026 we had two Shopify and QuickBooks projects in progress, one on QuickBooks Online and one on QuickBooks Enterprise. Our Shopify QuickBooks integration page covers which system keeps what.',
  },
  // ── What the agent does ──────────────────────────────────────────
  {
    category: 'jobs',
    question: 'Can AI automate RFQs and quotes?',
    answer:
      'It can draft them. The agent reads the request for quote, matches each line to an item in your ERP, applies that customer\'s price list and checks stock. Lines it cannot match are flagged for a person, not guessed. Your estimator reads the draft and sends it. Before a contract, we show this working on a quote you have already sent.',
  },
  {
    category: 'jobs',
    question: 'Can an AI agent create sales orders and purchase orders in my ERP?',
    answer:
      "Yes, where the ERP's API allows it and you approve it. Oracle says NetSuite's standard tools can create, read and update records. Odoo's External API calls the same methods its own screens use. We set the agent up to save a draft first. A person approves, and only then is the order confirmed.",
  },
  {
    category: 'jobs',
    question: 'Can bookkeeping be done by AI?',
    answer:
      'Parts of it. An agent can match bank lines to invoices, pair a supplier invoice with its purchase order and receipt, and suggest the account each cost belongs to. It prepares the batch. Your bookkeeper or accountant approves it. The agent does not replace that person and it does not file anything with a tax authority.',
  },
  {
    category: 'jobs',
    question: 'Will the agent change records without anyone checking?',
    answer:
      "No. In the builds on this page the agent saves a draft and a named person approves it before anything is posted. The agent also signs in as its own user, with only the permissions that job needs. Oracle makes the same point about NetSuite: its tools use the same access controls as the NetSuite screens, so they can only take actions the assigned role allows.",
  },
  {
    category: 'jobs',
    question: 'Is my ERP data safe with an AI agent?',
    answer:
      "Three controls matter. The agent has its own login with the fewest permissions the job needs. Every lookup and write is logged. And a person approves before anything posts. Oracle's own risk page for its NetSuite connector warns that hidden instructions can sit inside PDF documents and web pages, which is why the approval step stays. If you handle health records, note that Oracle says its connector has not been assessed for HIPAA.",
  },
  // ── Working with us ──────────────────────────────────────────────
  {
    category: 'working',
    question: 'How much does an ERP AI agent cost?',
    answer:
      "It depends on how many kinds of record the agent touches and whether it writes to them. Building a custom AI agent costs roughly $5,000 to more than $180,000, according to development firm ProductCrafters' 2026 breakdown. FactoryJet quotes a fixed price in writing after a short scoping call.",
  },
  {
    category: 'working',
    question: 'What does it cost to run an ERP AI agent each month?',
    answer:
      "There are two bills. The AI model charges for each request, and the agent needs somewhere to run. ProductCrafters' 2026 breakdown puts monthly infrastructure for a custom-built agent at $500 to $10,000. If you prefer, both sit in your own accounts and you pay those bills directly, at cost. Whose account pays does not change who does the work. We keep managing the servers, the AI models, the API connections and the upkeep, so your team never has to.",
  },
  {
    category: 'working',
    question: 'How long does it take to build an ERP AI agent?',
    answer:
      "It depends on the job and on what your ERP exposes. An agent that only reads and answers is quicker than one that writes orders. Access is often the slow part: a test copy of the ERP, a role for the agent, and sign-off from whoever owns the system. The timeline goes in writing with the quote.",
  },
  {
    category: 'working',
    question: 'Can I see it working before I sign?',
    answer:
      'Yes. Before a contract, we show working software on your own data. For an ERP agent that usually means one real document, such as an RFQ you have already quoted, run through a first version of the agent so you can compare its draft with what your team sent.',
  },
  {
    category: 'working',
    question: 'Do you support the agent after launch?',
    answer:
      'Yes. ERPs change, and so do AI models. Odoo has set a removal date for its older API addresses, and model makers retire versions. The same team that built the agent watches its logs, re-tests it when something changes and fixes what breaks. Our AI agent monitoring and support page covers that service.',
  },
  {
    category: 'working',
    question: 'Who owns the agent and its code?',
    answer:
      'You do. The agent is built for you and the code is yours. It can run in your own cloud account and with your own AI key, so nothing depends on a FactoryJet login. We still look after it day to day: the servers, the AI models, the API connections and the updates. If you later move the work in-house or to another firm, the code and its notes go with you.',
  },
  {
    category: 'working',
    question: 'Which industries do you work with?',
    answer:
      'Any business that runs on an ERP and handles a steady flow of quotes, orders or invoices: manufacturers and fabricators, wholesale distributors, online stores with an ERP behind them, and finance teams. FactoryJet was founded in 2014 and has served more than 500 businesses.',
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

/* ── Who does what. The first decision on any agent build. ── */
type Keeper = 'erp' | 'agent' | 'person' | 'both';

const KEEPER_LABEL: Record<Keeper, string> = {
  erp: 'The ERP keeps',
  agent: 'The agent does',
  person: 'A person keeps',
  both: 'Set up on both',
};

const KEEPS: ReadonlyArray<{ data: string; keeper: Keeper; note: string }> = [
  {
    data: 'Prices, stock and customer terms',
    keeper: 'erp',
    note: 'One copy, in the ERP. The agent looks them up at the moment it needs them and never keeps a list of its own.',
  },
  {
    data: 'Reading what arrives',
    keeper: 'agent',
    note: 'An emailed RFQ, a purchase order PDF, a supplier invoice. The agent pulls out the part numbers, quantities and dates.',
  },
  {
    data: 'Drafting the record',
    keeper: 'agent',
    note: 'A quote, a sales order, a purchase order or a bill, filled in from ERP data and saved as a draft.',
  },
  {
    data: 'Approval',
    keeper: 'person',
    note: "A named person reads the draft and approves, edits or rejects it. Oracle's risk page for its NetSuite connector lists hallucination, an answer that looks right and is wrong, among the key risks of language models.",
  },
  {
    data: 'Posting to the ERP',
    keeper: 'erp',
    note: "The approved record goes in through the ERP's API, under the agent's own user. Oracle says its NetSuite tools use the same access controls as the NetSuite screens.",
  },
  {
    data: 'The log',
    keeper: 'both',
    note: 'Every lookup and every write is recorded with the time and the user. Frappe says every request made with an API token is logged against that user.',
  },
];

/* ── Five jobs. One card each. Bullets are deliberately uneven. ── */
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
    title: 'RFQ to quote',
    body: 'A buyer emails a request for quote. The agent drafts the quote from your ERP, and your estimator checks it before it goes out.',
    items: [
      'Reads the email and its attachments, whether the part list is typed in the message, a PDF or a spreadsheet',
      'Matches each line to an item in the ERP. A line it cannot match is flagged for a person, not guessed',
      "Applies that customer's price list and terms, and checks stock or lead time",
      'Saves the quote as a draft in the ERP. Nothing reaches the buyer until someone approves it',
    ],
    note: 'Before a contract, we show working software on your own data. For this job that means a quote you have already sent, drafted again by the agent from your own price rules, so you can lay the two side by side.',
    sources: [],
    span: 'lg:col-span-7',
  },
  {
    n: '02',
    title: 'Sales orders from emailed purchase orders',
    body: "A customer's purchase order arrives as an email or a PDF. The agent turns it into a draft sales order.",
    items: [
      'Finds the customer, the ship-to address and each item in the ERP',
      'Checks the price on the purchase order against the price in the ERP and flags a difference',
      'Attaches the original document to the draft so the approver can see both',
    ],
    note: "Oracle says NetSuite's MCP Standard Tools can create and update records through REST Web Services, and that they use the same access controls as the NetSuite screens. So the role you give the agent decides what it can touch.",
    sources: ['nsStdTools', 'nsRest'],
    span: 'lg:col-span-5',
  },
  {
    n: '03',
    title: 'Purchase orders to suppliers',
    body: 'When stock runs low or a job needs material, the agent drafts the purchase order for a buyer to approve.',
    items: [
      'Reads reorder points and open sales orders from the ERP',
      'Picks the supplier and price your ERP already holds for that item',
      "Reads the supplier's confirmation when it comes back and flags a changed date or quantity",
    ],
    note: "SAP's reference says Service Layer, the API for SAP Business One, has used OData version 4 as its primary protocol since feature pack 2405. OData is a standard way for software to read and write business records over the web.",
    sources: ['sapServiceLayer'],
    span: 'lg:col-span-5',
  },
  {
    n: '04',
    title: 'Daily bookkeeping',
    body: 'The matching and coding work that fills a bookkeeper’s morning, prepared as a batch for that bookkeeper to approve.',
    items: [
      'Matches bank lines to open invoices and bills',
      'Pairs a supplier invoice with its purchase order and its goods receipt. Accountants call this a three-way match',
      'Suggests the account for each cost, based on how your team coded the same supplier before',
      'Lists what it could not match, with the reason, at the top of the batch',
    ],
    note: 'The agent drafts. Your bookkeeper or accountant approves. It does not replace them, and it does not file anything with a tax authority. If your books are in QuickBooks, the same pattern applies there.',
    sources: [],
    span: 'lg:col-span-7',
  },
  {
    n: '05',
    title: 'Stock and order answers',
    body: 'Staff or customers ask where an order is, or whether an item is in stock. The agent answers from live ERP data and changes nothing.',
    items: [
      'A read-only role, so the agent cannot alter a record even by mistake',
      'Answers in your help desk, your website chat or your team chat',
      'Hands over to a person, with the order already looked up, when the question needs a decision',
    ],
    note: "This is the lightest job on the page, and the ERP makers ship parts of it themselves. Odoo's version 19 documentation says its standard Ask AI agent can open views and display reports but cannot alter data. Oracle says NetSuite's SuiteQL tools support read-only queries only.",
    sources: ['odooAi', 'nsFaq'],
    span: 'lg:col-span-12',
  },
];

/* ── What each ERP gives an agent to work with. Each card restates the maker's
   own documentation as read on 2026-10-09. The last card is our own practice. ── */
const SYSTEMS: ReadonlyArray<{
  name: string;
  maker: string;
  door: string;
  says: string;
  sources: ReadonlyArray<SrcKey>;
  span: string;
}> = [
  {
    name: 'Odoo',
    maker: 'Odoo',
    door: 'External JSON-2 API, and its own AI app',
    says: "Odoo 19 has an AI app of its own. Odoo's documentation says an agent there is built from topics, which carry its instructions and tools, and sources, such as PDFs and Knowledge articles. It supports Gemini and OpenAI as providers. For an agent that lives outside Odoo, version 19 added the External JSON-2 API, called with an API key that is created with a description and a duration.",
    sources: ['odooAgents', 'odooKeys', 'odooApi'],
    span: 'lg:col-span-7',
  },
  {
    name: 'NetSuite',
    maker: 'Oracle',
    door: 'AI Connector Service and REST web services',
    says: "Oracle's help center says NetSuite has adopted the Model Context Protocol. Its AI Connector Service lets an outside AI client work with records, reports, saved searches and SuiteQL queries through a SuiteApp called MCP Standard Tools. Oracle's FAQ lists Claude Pro and ChatGPT as supported clients and says the service is not a paid feature.",
    sources: ['nsConnector', 'nsStdTools', 'nsFaq'],
    span: 'lg:col-span-5',
  },
  {
    name: 'SAP Business One',
    maker: 'SAP',
    door: 'Service Layer',
    says: "Business One exposes its records through Service Layer. SAP's reference says OData version 4 has been the primary protocol since feature pack 2405, and that version 3 is deprecated. SAP's support site lists release 10.0 in mainstream maintenance until December 31, 2028, with dates subject to change.",
    sources: ['sapServiceLayer', 'sapMaint'],
    span: 'lg:col-span-5',
  },
  {
    name: 'ERPNext',
    maker: 'Frappe',
    door: 'Frappe REST API',
    says: "ERPNext is open source under the GPL-3.0 license, with 39.9k stars on GitHub as listed on 9 Oct 2026. Frappe's documentation says the framework generates a REST API for every DocType, its word for a record type, out of the box. An agent signs in with an API key and secret tied to one user. FactoryJet runs its own customer records on ERPNext, so this is the system we know from the inside.",
    sources: ['frappeRest', 'erpnextRepo'],
    span: 'lg:col-span-7',
  },
  {
    name: 'Custom and older ERPs',
    maker: 'your own team or a past vendor',
    door: 'Whatever the system exposes',
    says: 'No public API is the common case. We start by listing what the system does expose: a database that can be read, a file it exports each night, an email it sends when an order ships. The agent is built around that. Where a record must be written back, it goes through the route your IT team already trusts, and that route is agreed in writing first.',
    sources: [],
    span: 'lg:col-span-12',
  },
];

/* ── Where ERP agent projects break. All eight come from the linked pages. ── */
const BREAKS: ReadonlyArray<{ t: string; b: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    t: 'An Odoo integration built on the old addresses',
    b: "Odoo's documentation says its XML-RPC and JSON-RPC addresses are scheduled for removal in Odoo 22, due in fall 2028, and in Odoo Online 21.1, due in winter 2027. Anything built on them has a rewrite ahead.",
    sources: ['odooApi', 'odoo20Api'],
  },
  {
    t: "Expecting Odoo's Ask AI to change records",
    b: 'In Odoo 19, Odoo says the standard Ask AI agent cannot make changes to the database. It can open views and display reports. In Odoo 19 and Odoo 20 alike, changing data takes an agent that has been given tools for it. Odoo 20 calls them skills.',
    sources: ['odooAi', 'odooAgents', 'odoo20Agents'],
  },
  {
    t: 'Odoo AI on your own server with no keys',
    b: 'Odoo says API keys are required for Odoo.sh and on-premise databases to use AI features. Someone has to own that account and its bill.',
    sources: ['odooKeys'],
  },
  {
    t: 'Connecting NetSuite as an administrator',
    b: 'Oracle says the AI Connector Service cannot run if you are logged in with the Administrator role, or a role with full permissions. It needs a role made for it.',
    sources: ['nsPerms'],
  },
  {
    t: "Health records in NetSuite's connector",
    b: 'Oracle says the service has not been assessed for compliance with HIPAA, the US health privacy law, and must not be used for protected health information unless you have determined that such use fits your own obligations.',
    sources: ['nsPerms'],
  },
  {
    t: 'A PDF that carries hidden instructions',
    b: "Oracle's risk page calls this prompt injection: hidden instructions placed inside PDF documents or web pages that an AI model then reads. It is the reason a person approves before anything posts.",
    sources: ['nsRisks'],
  },
  {
    t: "An agent that shares a person's login",
    b: 'Frappe says every request made with an API token is logged against the user it belongs to, and that user’s roles are checked. Give the agent its own user, or the log cannot tell you who did what.',
    sources: ['frappeRest'],
  },
  {
    t: 'SAP Business One code still on OData version 3',
    b: 'SAP says version 3 is deprecated as of feature pack 2405 and strongly advocates moving to version 4. Check which one an existing integration calls before you add an agent to it.',
    sources: ['sapServiceLayer'],
  },
];

/* ── Work we can show. The ONLY place on the page where a client is named.
   Each line restates the public case study or Bhavesh's own words of
   2026-10-09. No results are claimed. ── */
const WORK: ReadonlyArray<{ who: string; kind: string; what: string; href: string; cta: string; span: string }> = [
  {
    who: 'Sow Easy',
    kind: 'B2B distribution · Odoo',
    what: 'A WooCommerce trade store joined to Odoo. Odoo stays the master for stock, pricing and product identifiers, and the store reads from it. The join is tested against Odoo’s staging system, and the store’s launch is still ahead.',
    href: '/case-studies/sow-easy-distributor-portal',
    cta: 'Read the case study',
    span: 'lg:col-span-7',
  },
  {
    who: 'Two QuickBooks projects, unnamed',
    kind: 'Shopify · QuickBooks Online and Enterprise',
    what: 'In progress on 9 Oct 2026: one Shopify store joined to QuickBooks Online, and one joined to QuickBooks Enterprise, the desktop edition. We cannot name either client yet.',
    href: '/services/shopify-quickbooks-integration',
    cta: 'See how that work is done',
    span: 'lg:col-span-5',
  },
  {
    who: 'GPSUK',
    kind: 'Promotional products · quote to order',
    what: 'A B2B storefront where trade accounts see their own pricing and move from quote to order without the quote being rebuilt by hand.',
    href: '/case-studies/gpsuk-promotional-products',
    cta: 'Read the case study',
    span: 'lg:col-span-5',
  },
  {
    who: 'Impulse Branding Solutions and Yadav Entrance Automation',
    kind: 'Websites and search · long-running clients',
    what: 'Not ERP projects. Both are website and search engagements with public case studies, listed here so you can ask people who have worked with us what that is like.',
    href: '/case-studies',
    cta: 'See all case studies',
    span: 'lg:col-span-7',
  },
];

/* ── Who this is for. Examples of the kinds of business the work suits, not a
   client list. Pictures were generated on 2026-10-09 and checked at full size. ── */
const INDUSTRIES: ReadonlyArray<{ img: string; alt: string; t: string; b: string }> = [
  {
    img: `${IMG}/metal-fabrication-shop.webp`,
    alt: 'A woman in a navy work shirt and safety glasses holds a steel bracket at a workbench in a bright metal workshop, with an orange tape measure on the bench',
    t: 'Manufacturers and fabricators',
    b: 'RFQs arrive as drawings and part lists. The agent drafts the quote from the prices and stock in your ERP, and your estimator checks it.',
  },
  {
    img: `${IMG}/wholesale-warehouse-aisle.webp`,
    alt: 'A man in a green polo shirt lifts a plain cardboard box from a shelf in a warehouse aisle beside an orange hand truck',
    t: 'Wholesale distributors',
    b: 'Purchase orders come in by email all day. Each one becomes a draft sales order, checked against that customer’s terms.',
  },
  {
    img: `${IMG}/stock-room-packing-table.webp`,
    alt: 'A woman in a cream sweater tapes a plain cardboard box at a packing table with a roll of orange tape beside her',
    t: 'Online stores with an ERP behind them',
    b: 'Stock and prices live in the ERP. The store and the agent both read from that one copy, so they cannot disagree.',
  },
  {
    img: `${IMG}/finance-desk-review.webp`,
    alt: 'Two people seen from behind sit at a desk and look at a monitor showing grey bars and one orange bar, with an orange folder on the desk',
    t: 'Finance and office teams',
    b: 'Bank lines, bills and receipts are matched and coded as a draft batch. Your bookkeeper approves it.',
  },
];

/* ── Process. Six steps, in the order we work. ── */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'List what your ERP exposes',
    b: 'Version, edition, where it is hosted, which API it has and which roles exist. This decides what an agent can do before anyone promises anything.',
  },
  {
    n: '02',
    t: 'Pick one job and write down its rules',
    b: 'One task, such as quotes from RFQs. The rules a person follows today go on paper, along with who approves the result.',
  },
  {
    n: '03',
    t: 'Show it on your own data',
    b: 'Before a contract, we run one of your real documents through a first version, so you see a draft you can judge against what your team did.',
  },
  {
    n: '04',
    t: 'Build on a test copy',
    b: 'The agent is built against a sandbox or staging copy of your ERP. It gets its own user, with only the permissions the job needs.',
  },
  {
    n: '05',
    t: 'Run it beside your team',
    b: 'For an agreed period the agent drafts while a person does the same work. The two are compared, and the rules are fixed where they differ.',
  },
  {
    n: '06',
    t: 'Launch, watch, stay on',
    b: 'After launch the logs are read, the agent is re-tested when the ERP or the AI model changes, and the same team fixes what breaks.',
  },
];

/* ── Comparison: three ways to get AI into an ERP ── */
const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: "01 The ERP's own AI" },
  { label: '02 A ready-made agent product' },
  { label: '03 A custom agent built for you' },
];

const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'What it is',
    values: [
      "Features the ERP maker ships, such as Odoo's AI app or NetSuite's connector",
      'Software sold by a third party and set up for your account',
      'An agent designed around your rules and built for you',
    ],
  },
  {
    feature: 'Who decides what it can do',
    values: ['The ERP maker', "The product's maker", 'You, in writing, before the build'],
  },
  {
    feature: 'Works across more than one system',
    values: [
      'Inside that ERP',
      'Where the product has a connector',
      'Wherever there is an API, a database or a file to read',
    ],
  },
  {
    feature: 'Who you call when it breaks',
    values: ['The ERP maker or your ERP partner', "The product's support desk", 'The team that built it'],
  },
  {
    feature: 'Who owns it',
    values: ['The ERP maker', "The product's maker", 'You own the code'],
  },
  {
    feature: 'Right call when',
    values: [
      'The built-in feature already does the job',
      'Your process matches the product as it is sold',
      'Your rules are your own, or the job crosses two systems',
    ],
  },
];

/* ── Other names a US search shows. Each line restates the firm's own page as
   read on 2026-10-09. Feeds the visible list AND the ItemList JSON-LD. ── */
const OTHERS: ReadonlyArray<{ name: string; focus: string; says: string; source: SrcKey }> = [
  {
    name: 'RSM US',
    focus: 'NetSuite',
    says: 'Its NetSuite AI page offers NetSuite AI services and describes how the AI Connector Service lets tools such as Claude and ChatGPT work with NetSuite.',
    source: 'rsm',
  },
  {
    name: 'Rand Group',
    focus: 'NetSuite and Microsoft',
    says: 'Its NetSuite AI guide, published on August 18, 2026, covers NetSuite Next, Ask Oracle, AI agents and the Model Context Protocol.',
    source: 'rand',
  },
  {
    name: 'Invitra Technologies',
    focus: 'NetSuite',
    says: 'Offers NetSuite AI agents, AI services and connectors for finance, sales and operations. Its page states 15+ years and 750+ NetSuite projects delivered.',
    source: 'invitra',
  },
  {
    name: 'Bista Solutions',
    focus: 'Odoo',
    says: 'Lists offices in Plano, Texas and Fremont, California, and publishes a guide to its Odoo AI agents dated September 2, 2025.',
    source: 'bista',
  },
  {
    name: 'Silent Infotech',
    focus: 'Odoo',
    says: 'Offers Odoo consulting, development and hosting, and publishes a guide to AI agents inside Odoo written for US businesses.',
    source: 'silent',
  },
  {
    name: 'MyWave',
    focus: 'SAP Business One',
    says: 'A software product. Its page says it brings SAP-certified agentic AI to SAP Business One version 10, with no migration and no code.',
    source: 'mywave',
  },
];

const othersSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Other firms and products a US search shows for ERP AI agent work',
  itemListElement: OTHERS.map((o, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: o.name,
    url: SRC[o.source].url,
  })),
};

const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  { href: '/services/netsuite-ai-agents', t: 'NetSuite AI agents', b: 'The NetSuite page: the AI Connector Service, MCP tools and custom agents.' },
  { href: '/services/odoo-ai-agents', t: 'Odoo AI agents', b: 'The Odoo page: what Odoo 19 and 20 ship, and where a custom agent fits.' },
  { href: '/services/ai-agent-development', t: 'AI agent development', b: 'Custom agents for support, sales and operations, beyond the ERP.' },
  { href: '/services/manufacturing-ai-agents', t: 'Manufacturing AI agents', b: 'Quoting and ERP work for US manufacturers.' },
  { href: '/services/shopify-quickbooks-integration', t: 'Shopify QuickBooks integration', b: 'Stock, prices and books kept in step with the store.' },
  { href: '/services/ai-agent-monitoring', t: 'AI agent monitoring and support', b: 'Watching, re-testing and fixing an agent after launch.' },
  { href: '/blog/ai-agents-erp-netsuite-odoo-sap-business-one-2026', t: 'Guide: AI agents inside your ERP', b: 'The longer read on NetSuite, Odoo and SAP Business One.' },
  { href: '/services/ai-integration-services', t: 'AI integration services', b: 'Adding AI to the business software you already use.' },
];

/** Small inline source links. Same visual pattern as the WordPress Shopify page.
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

const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

export default function ErpAiAgentsPage() {
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
                    ERP AI AGENTS &middot; UNITED STATES
                  </span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.2rem]">
                  AI agents for your ERP, built inside the system you already run.
                </h1>

                <p className="mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                  We design, build and support AI agents that work inside Odoo, NetSuite, SAP Business One, ERPNext
                  and custom ERPs. The agent reads the RFQ, the purchase order or the invoice, looks up your ERP and
                  drafts the record. Your team approves it. You get a fixed quote in writing before work starts.
                </p>

                <div className="mt-6">
                  <HeroInlineForm
                    region="us"
                    source="services_erp_ai_agents_hero"
                    service="ERP AI Agents"
                    submitLabel="Scope my agent"
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
                  <span>Demo on your own data before a contract</span>
                  <span>500+ businesses served</span>
                  <span>Founded 2014</span>
                  <span>Platform facts checked {CHECKED_ON}</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
                  <figcaption className="font-fj-mono text-[11px] font-bold uppercase tracking-wider text-[#B23E13]">
                    How an agent works with your ERP
                  </figcaption>
                  <AgentLoopDiagram />
                  <ul className="mt-4 grid gap-2 font-fj-body text-[13px] leading-snug text-fj-ink">
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-[3px] h-3 w-3 flex-shrink-0 rounded-sm border-[1.5px] border-[#14110F] bg-white" />
                      Black outline: your side. The inbox, the person, the ERP.
                    </li>
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-[3px] h-3 w-3 flex-shrink-0 rounded-sm border-[1.5px] border-[#F05A28] bg-[#FFF4EE]" />
                      Orange: the agent we build for you.
                    </li>
                  </ul>
                  <p className="mt-3 font-fj-body text-[13px] leading-snug text-fj-neutral-600">
                    The dashed step is the one that matters most. Who approves is agreed in writing before anything is
                    built.
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
                An ERP AI agent is software that does one office task inside your ERP, the system that holds your
                stock, orders and accounts. It reads a request, such as an emailed RFQ (request for quote), a purchase
                order PDF or a supplier invoice. It looks up prices, stock and terms in the ERP and drafts the record.
                A person approves the draft, and the agent posts it through the ERP&rsquo;s own API, the documented
                door other software uses. Odoo, NetSuite, SAP Business One and ERPNext each publish one. Odoo 19 added
                a new API called JSON-2, and Oracle says NetSuite has adopted the Model Context Protocol, an open
                standard for connecting AI tools to business systems (as listed on {CHECKED_ON}).
              </p>
              <SourceLinks ids={['odooApi', 'nsConnector', 'sapServiceLayer', 'frappeRest', 'mcp']} />
            </div>
          </div>
        </section>

        {/* 3. WHO DOES WHAT */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">The first decision</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Decide who does what before anyone writes a prompt.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  AI for ERP goes wrong when the agent is asked to be the record. It should never be. The ERP stays
                  the one place where prices, stock and accounts live.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  The agent reads and drafts. A person approves. That split goes in writing first.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  Every job on this page follows it, whichever ERP you run.
                </p>
                <SourceLinks ids={['nsRisks', 'nsStdTools', 'frappeRest']} />
              </div>

              <ul className="grid gap-3 lg:col-span-8">
                {KEEPS.map((k) => (
                  <li
                    key={k.data}
                    className={`grid grid-cols-1 gap-2 rounded-2xl border bg-white px-5 py-4 sm:grid-cols-[190px_1fr] sm:gap-5 ${
                      k.keeper === 'agent' ? 'border-[#F05A28]/45' : 'border-fj-neutral-200'
                    }`}
                  >
                    <div>
                      <div className="font-fj-display text-base font-semibold text-fj-ink">{k.data}</div>
                      <div
                        className={`mt-1 font-fj-mono text-[11px] font-bold uppercase tracking-wider ${
                          k.keeper === 'agent' ? 'text-[#B23E13]' : 'text-fj-neutral-600'
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

        {/* 4. FIVE JOBS */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Five jobs</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Five ERP jobs an AI agent can draft for your team.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Two words cover most of what follows. An RFQ is a request for quote, the message a buyer sends asking
              what something will cost. A draft is a record saved in the ERP but not yet confirmed. For the build
              behind the first job, read our{' '}
              <Link
                href="/blog/ai-agent-architecture-manufacturing-rfq-erp-sync-2026"
                className="font-semibold text-fj-ink underline underline-offset-4"
              >
                guide to an RFQ quoting agent
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
              These are the jobs we are asked for most. The same pattern fits others: read what arrives, look up the
              ERP, draft, approve, post. If your books sit in QuickBooks, see{' '}
              <Link
                href="/services/shopify-quickbooks-integration"
                className="font-semibold text-fj-ink underline underline-offset-4"
              >
                Shopify QuickBooks integration
              </Link>
              .
            </p>
            <p className="mt-3 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
              Platform notes are as listed on {CHECKED_ON}.
            </p>
          </div>
        </section>

        {/* 5. WHAT EACH ERP GIVES AN AGENT */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Your ERP</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              What Odoo, NetSuite, SAP Business One and ERPNext give an agent to work with.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              An agent can only do what the ERP lets outside software do. Each card restates the maker&rsquo;s own
              documentation, as read on {CHECKED_ON}. We have built on all four, and on custom ERPs.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
              {SYSTEMS.map((c) => (
                <li key={c.name} className={`rounded-2xl border border-fj-neutral-200 bg-white p-6 ${c.span}`}>
                  <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{c.name}</h3>
                  <div className="mt-1 font-fj-mono text-[11px] font-bold uppercase tracking-wider text-fj-neutral-600">
                    Made by {c.maker} &middot; {c.door}
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
                Two dates and one rule to check before anyone builds.
              </h3>
              <ul className="mt-4 grid max-w-3xl gap-3 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  Odoo says its older XML-RPC and JSON-RPC addresses are scheduled for removal in Odoo 22, due in fall
                  2028, and in Odoo Online 21.1, due in winter 2027. An Odoo integration written against them today has
                  a rewrite ahead.
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  SAP lists Business One 10.0 in mainstream maintenance until December 31, 2028, with dates subject to
                  change, and says extended maintenance is not offered.
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  Oracle says the NetSuite AI Connector Service cannot run under the Administrator role. Plan a role
                  for the agent on day one.
                </li>
              </ul>
              <SourceLinks ids={['odooApi', 'odoo20Api', 'sapMaint', 'nsPerms']} />
            </div>
          </div>
        </section>

        {/* 6. WHERE IT BREAKS */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">The traps</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Eight places an ERP AI integration breaks.
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Knowing these early saves a rebuild. All eight come straight from the linked pages.
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

        <MidPageCTA
          headline="Tell us the ERP and the job. We will say what an agent can do there."
          sub="Send the system you run and one task that fills your team's day. We reply with what your ERP allows, what we would build, and a fixed quote if there is work for us."
          label="Scope my agent"
        />

        {/* 7. WORK WE CAN SHOW. The only place a client is named. */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Work you can check</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              ERP and order work for clients you can look up.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Each line says what the project covered and where it stands. No result is quoted here that we have not
              measured.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
              {WORK.map((w) => (
                <li key={w.who} className={`flex flex-col rounded-2xl border border-fj-neutral-200 bg-white p-6 ${w.span}`}>
                  <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{w.who}</h3>
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

        {/* 8. WHO THIS IS FOR */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Who this is for</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Built for any business that runs on an ERP.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Your trade changes the documents. The job is the same in each one. Something arrives, someone looks
                  it up, someone types it in.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  For quoting work on the shop floor, see{' '}
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

        {/* 9. PROCESS */}
        <section className="bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Process</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  How we design, build and support an ERP agent.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  One job is agreed first, shown on your own data, then built on a test copy of your ERP. After
                  launch,{' '}
                  <Link
                    href="/services/ai-agent-monitoring"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    AI agent monitoring and support
                  </Link>{' '}
                  keeps it working as your ERP and the AI models change.
                </p>
                <img
                  src={`${IMG}/planning-the-agent.webp`}
                  alt="A man in a charcoal sweater and a woman in a teal shirt look down at a row of blank index cards on a table, one of them orange"
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="mt-6 aspect-[3/2] w-full rounded-2xl border border-fj-neutral-200 object-cover"
                />
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

        {/* 10. COMPARISON: three ways to get AI into an ERP */}
        <ComparisonTable
          eyebrow="Three routes compared"
          headline="The ERP's own AI, a ready-made product, or an agent built for you."
          lead="Each route is the right one for somebody. On the scoping call we say which we would choose for you and why, even when it means there is no work for us."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer={`Vendor facts are from each maker's own pages as listed on ${CHECKED_ON}.`}
          scrollRegionLabel="Comparison of three ways to add AI to an ERP"
        />

        {/* 11. OTHER NAMES A SEARCH SHOWS */}
        <section className="border-t border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Other options</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Six other names a US search shows for this work.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  We are one option. These came up in US searches for ERP AI terms on {CHECKED_ON}. Each line restates
                  the firm&rsquo;s own page. We have not worked with them and did not test their products.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Where we differ is range. FactoryJet works across Odoo, NetSuite, SAP Business One, ERPNext and
                  custom systems, so the route we recommend is not tied to one vendor&rsquo;s product.
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

        {/* 12. RELATED SERVICES */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Next to this page</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Related AI agent and ERP integration services.
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

        {/* 13. SOURCES + REVIEW LINE */}
        <section className="bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Method</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Sources, checked on {CHECKED_ON}.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Every API name, date, requirement and limit on this page was read from the pages listed here on that
                  day. Vendors change these, so check the linked page before you act on one.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  What we did not do: test the six other firms or products named above, or measure results on the
                  client projects listed.
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

        {/* 14. FAQ */}
        <FAQ
          eyebrow="ERP AI agents FAQ"
          headline="AI and ERP questions, answered plainly."
          lead={`What owners, operations leads and finance teams ask before adding an agent to their ERP. Platform answers are from Odoo's, Oracle's, SAP's and Frappe's own pages as listed on ${CHECKED_ON}.`}
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 15. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="ERP AI agents"
          headline="Keep the ERP you run. Add an agent your team can check."
          sub="Tell us which ERP you run and one job that fills your team's day. We say what the system allows, show a first version on your own data and stay on after launch."
          primaryCta={{ label: 'Scope my agent', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="Demo on your own data before a contract. Fixed quote in writing. You own the code."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
