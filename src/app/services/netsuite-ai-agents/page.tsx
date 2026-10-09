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

import ConnectorPathDiagram from './ConnectorPathDiagram';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/netsuite-ai-agents, built 2026-10-09.

   Why this page exists: on 9 Oct 2026, asked "Which NetSuite partners
   implement AI agents for distributors?", the AI assistants we tested named
   small NetSuite firms from their own service pages (14 answers read, one
   firm's page cited 9 times). FactoryJet had /services/erp-ai-agents, which
   covers four ERPs at once, and no NetSuite page.
   US monthly searches measured 2026-10-09 (DataForSEO, location 2840):
   "netsuite mcp" 590 (KD 3), "netsuite ai" 480 (KD 4), "netsuite ai connector
   service" 320 (KD 8), "netsuite ai connector" 320 (KD 24), "netsuite
   accounts payable automation" and "netsuite ap automation" 260 each (one
   close-variant bucket, KD 0 to 6), "netsuite mcp connector" 210, "netsuite
   intelligent payment automation" 170, "netsuite mcp server" 140, "netsuite
   ai agent" and "netsuite ai agents" 70 each. An AI Overview showed on 13 of
   the first 14 SERPs. FactoryJet was in no top 20.

   Scope: NetSuite only, and deeper than the NetSuite card on the overview.
   /services/erp-ai-agents stays the page for "ERP AI" head terms, so those
   words are kept out of this title and H1, and this page links up to it.

   Truth rules for anyone editing this file:
   - Every NetSuite fact (feature names, limits, requirements, numbers) was
     read on Oracle's own pages on 2026-10-09 and links to them through the
     SRC map below. docs.oracle.com answered a plain request. netsuite.com
     returned 403 to curl that afternoon and was read in a browser instead.
     If you change a fact, re-fetch the page first and update CHECKED_ON.
   - Oracle's SuiteAnswers articles need a NetSuite login. None was read and
     nothing here rests on one.
   - Bhavesh confirmed on 2026-10-09 that FactoryJet has worked on NetSuite,
     Odoo, SAP Business One, ERPNext and custom ERPs, on RFQ automation, daily
     bookkeeping, and purchase and sales order generation. That sentence is
     the whole of the experience claim. No NetSuite client is named, no result
     is claimed, and no client appears in the hero, the meta description, the
     schema or the FAQ.
   - Partner status is left out on purpose (Bhavesh, 2026-10-09). FactoryJet
     is not a listed partner of Oracle NetSuite, so the page raises no partner
     title, ours or another firm's. The buyer question "Which NetSuite
     partners implement AI agents for distributors?" is answered under the
     wording "Who implements AI agents inside NetSuite for distributors?" for
     that reason. Do not add a partner claim.
   - No FactoryJet prices. The only dollar figures are the ProductCrafters
     market ranges inside the two cost FAQ answers. Oracle's statement that
     its connector is not a paid feature is quoted as Oracle's.
   - He also confirmed that day: the AI and hosting bills may sit in the
     client's own accounts at cost, and FactoryJet keeps managing the servers,
     the AI models, the API connections and the upkeep either way.
   - The six "other names" restate each firm's own page as read that day. We
     have not worked with them and did not test their products.
   - Mirrors /services/erp-ai-agents for components, props and schema.

   Schema: WebPage + Service + FAQPage + ItemList + BreadcrumbList.
   Organization is rendered once sitewide by src/app/layout.tsx and referenced
   here by @id. The FAQPage mainEntity is generated from the exact FAQ_ITEMS
   array the visible <FAQ> component renders. There is no second array.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/netsuite-ai-agents';
const PAGE_TITLE = 'NetSuite AI Agents, AI Connector and MCP | FactoryJet';
const PAGE_DESC =
  'We design, build and support AI agents inside Oracle NetSuite. What the free AI Connector Service and MCP tools do, and when a custom agent is the right call.';
const PAGE_PUBLISHED = '2026-10-09';
const PAGE_MODIFIED = '2026-10-09';
const CHECKED_ON = '9 Oct 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/services/netsuite-ai-agents';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'netsuite ai agents',
    'netsuite ai agent',
    'netsuite ai',
    'netsuite ai connector',
    'netsuite ai connector service',
    'netsuite mcp',
    'netsuite mcp connector',
    'netsuite mcp server',
    'netsuite accounts payable automation',
    'netsuite ap automation',
    'netsuite intelligent payment automation',
    'netsuite chatgpt integration',
    'netsuite claude connector',
    'netsuite ai integration',
    'netsuite automation',
    'custom netsuite ai agent',
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
        alt: 'FactoryJet, AI agents inside Oracle NetSuite for US businesses',
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
  { name: 'NetSuite AI Agents', url: CANONICAL_URL },
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
  name: 'NetSuite AI Agent Development',
  serviceType:
    'AI agents for Oracle NetSuite, NetSuite AI Connector Service and MCP setup, custom MCP tools, accounts payable automation, RFQ and quote automation, sales order and purchase order automation, bookkeeping automation',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'FactoryJet designs, builds, tests and supports AI agents that work inside an Oracle NetSuite account. An agent reads an incoming document such as a vendor bill, an RFQ or a customer purchase order, looks up items, prices and vendors in NetSuite, and saves a transaction for a person to approve. Work covers checking what Oracle already ships, a NetSuite role made for the agent, building in a sandbox, a period of running beside the team, launch and support after launch.',
  url: CANONICAL_URL,
};

/* ── Sources. One map, used by every inline source link (the `short` label) AND
   by the visible "Sources" list near the foot of the page (the full `label`).
   Each URL was opened on 2026-10-09 and the supporting sentence read before the
   claim was written. The ledger with the quoted words is in the build notes. ── */
const NS = 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help';

const SRC = {
  nsConnector: {
    short: 'Oracle: NetSuite AI Connector Service',
    label: 'Oracle NetSuite Help Center: NetSuite AI Connector Service',
    url: `${NS}/article_7200233106.html`,
  },
  nsGetStarted: {
    short: 'Oracle: get started with the connector',
    label: 'Oracle NetSuite Help Center: Get Started with the NetSuite AI Connector Service',
    url: `${NS}/article_3200541651.html`,
  },
  nsPerms: {
    short: 'Oracle: required features and permissions',
    label: 'Oracle NetSuite Help Center: Required Features and Permissions',
    url: `${NS}/section_0714080625.html`,
  },
  nsConnect: {
    short: 'Oracle: connect to the connector',
    label: 'Oracle NetSuite Help Center: Connect to the NetSuite AI Connector Service',
    url: `${NS}/section_0714082142.html`,
  },
  nsFaq: {
    short: 'Oracle: AI Connector Service FAQ',
    label: 'Oracle NetSuite Help Center: NetSuite AI Connector Service FAQ',
    url: `${NS}/article_4160616848.html`,
  },
  nsRisks: {
    short: 'Oracle: risks and controls',
    label: 'Oracle NetSuite Help Center: Associated Risks, Controls, and Mitigation Strategies',
    url: `${NS}/article_9002708453.html`,
  },
  nsStdTools: {
    short: 'Oracle: MCP Standard Tools SuiteApp',
    label: 'Oracle NetSuite Help Center: MCP Standard Tools SuiteApp',
    url: `${NS}/article_143403258.html`,
  },
  nsTools: {
    short: 'Oracle: available tools',
    label: 'Oracle NetSuite Help Center: Available Tools in the MCP Standard Tools SuiteApp',
    url: `${NS}/article_0902023508.html`,
  },
  nsBest: {
    short: 'Oracle: best practices for the tools',
    label: 'Oracle NetSuite Help Center: Best Practices for MCP Standard Tools SuiteApp',
    url: `${NS}/article_1017113407.html`,
  },
  nsConcurrency: {
    short: 'Oracle: concurrency governance',
    label: 'Oracle NetSuite Help Center: NetSuite AI Connector Service And Concurrency Governance',
    url: `${NS}/section_0827103226.html`,
  },
  nsCompanion: {
    short: 'Oracle: Companion SuiteApp',
    label: 'Oracle NetSuite Help Center: NetSuite AI Connector Service Companion SuiteApp',
    url: `${NS}/article_9091153093.html`,
  },
  nsCustomTools: {
    short: 'Oracle: creating custom tools',
    label: 'Oracle NetSuite Help Center: Creating Custom Tools for the NetSuite AI Connector Service',
    url: `${NS}/article_162020236.html`,
  },
  nsCustomScript: {
    short: 'Oracle: custom tool script type',
    label: 'Oracle NetSuite Help Center: SuiteScript 2.1 Custom Tool Script Type',
    url: `${NS}/article_1185045525.html`,
  },
  nsRest: {
    short: 'Oracle: SuiteTalk REST web services',
    label: 'Oracle NetSuite Help Center: Overview of SuiteTalk REST Web Services',
    url: `${NS}/chapter_1540391670.html`,
  },
  nsAiFeatures: {
    short: 'Oracle: NetSuite features that use AI',
    label: 'Oracle NetSuite Help Center: NetSuite Features That Use AI',
    url: `${NS}/article_5101751849.html`,
  },
  nsAskOracle: {
    short: 'Oracle: Ask Oracle',
    label: 'Oracle NetSuite Help Center: Ask Oracle',
    url: `${NS}/article_5100902387.html`,
  },
  nsAskMore: {
    short: 'Oracle: more Ask Oracle features',
    label: 'Oracle NetSuite Help Center: More Ask Oracle Features',
    url: `${NS}/article_0527021536.html`,
  },
  nsAgents: {
    short: 'Oracle: agents overview',
    label: 'Oracle NetSuite Help Center: Agents Overview',
    url: `${NS}/article_9160038841.html`,
  },
  nsNextFaq: {
    short: 'Oracle: NetSuite Next FAQ',
    label: 'Oracle NetSuite Help Center: NetSuite Next FAQ',
    url: `${NS}/article_7130219835.html`,
  },
  nsAiUnitsFaq: {
    short: 'Oracle: AI Units FAQ',
    label: 'Oracle NetSuite Help Center: AI Units FAQ',
    url: `${NS}/article_8144753226.html`,
  },
  nsAiUnitsUse: {
    short: 'Oracle: features that consume AI Units',
    label: 'Oracle NetSuite Help Center: Features that consume NetSuite AI Units',
    url: `${NS}/article_0914112754.html`,
  },
  nsAiUnitsEst: {
    short: 'Oracle: AI Units estimates',
    label: 'Oracle NetSuite Help Center: NetSuite AI Units and NetSuite Features',
    url: `${NS}/article_2163848930.html`,
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
  nsBillApprovals: {
    short: 'Oracle: vendor bill approvals',
    label: 'Oracle NetSuite Help Center: Vendor Bill Approvals',
    url: `${NS}/section_N2373552.html`,
  },
  ns3Way: {
    short: 'Oracle: 3 Way Match approval workflow',
    label: 'Oracle NetSuite Help Center: 3 Way Match Vendor Bill Approval Workflow',
    url: `${NS}/section_4096219721.html`,
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
  nsBankData: {
    short: 'Oracle: Enriched Bank Data',
    label: 'Oracle NetSuite Help Center: Enriched Bank Data for Transaction Matching',
    url: `${NS}/article_0305111754.html`,
  },
  nsTxMatch: {
    short: 'Oracle: Transaction Matching Assistant',
    label: 'Oracle NetSuite Help Center: Transaction Matching Assistant',
    url: `${NS}/article_40170235282.html`,
  },
  nsException: {
    short: 'Oracle: Exception Management',
    label: 'Oracle NetSuite Help Center: Exception Management Overview',
    url: `${NS}/article_5094345081.html`,
  },
  nsEstimates: {
    short: 'Oracle: estimates',
    label: 'Oracle NetSuite Help Center: Estimates',
    url: `${NS}/section_N1069662.html`,
  },
  nsRfq: {
    short: 'Oracle: Request for Quote',
    label: 'Oracle NetSuite Help Center: Request for Quote',
    url: `${NS}/chapter_4189559896.html`,
  },
  nsCpq: {
    short: 'Oracle: CPQ AI Assistant',
    label: 'Oracle NetSuite Help Center: NetSuite CPQ AI Assistant',
    url: `${NS}/article_9094751090.html`,
  },
  nsSoApprove: {
    short: 'Oracle: approving sales orders',
    label: 'Oracle NetSuite Help Center: Approving Sales Orders',
    url: `${NS}/section_N1218788.html`,
  },
  nsPoApproval: {
    short: 'Oracle: purchase order approval workflow',
    label: 'Oracle NetSuite Help Center: Purchase Order Approval Workflow SuiteApp',
    url: `${NS}/section_N2398841.html`,
  },
  nsApprovalRouting: {
    short: 'Oracle: approval routing',
    label: 'Oracle NetSuite Help Center: Using the Approval Routing Feature',
    url: `${NS}/section_N2395258.html`,
  },
  nsProduct: {
    short: 'NetSuite: AI Connector Service product page',
    label: 'NetSuite.com: NetSuite AI Connector Service (product page, read in a browser)',
    url: 'https://www.netsuite.com/portal/products/artificial-intelligence-ai/mcp-server.shtml',
  },
  mcp: {
    short: 'modelcontextprotocol.io',
    label: 'Model Context Protocol: What is the Model Context Protocol (MCP)?',
    url: 'https://modelcontextprotocol.io/introduction',
  },
  claudeListing: {
    short: 'Claude: NetSuite connector listing',
    label: 'Claude by Anthropic: NetSuite connector (connector marketplace listing)',
    url: 'https://claude.com/marketplace/connectors/oracle-netsuite',
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
  folio3: {
    short: 'Folio3: NetSuite AI services',
    label: 'Folio3: NetSuite AI services page',
    url: 'https://netsuite.folio3.com/netsuite-ai-partner/',
  },
  invitra: {
    short: 'Invitra: NetSuite AI agents',
    label: 'Invitra Technologies: NetSuite AI Services and AI Agents',
    url: 'https://invitratech.com/netsuite-ai-agents',
  },
  gurus: {
    short: 'GURUS Solutions: AI in NetSuite guide',
    label: 'GURUS Solutions: The 2026 Guide to AI in NetSuite',
    url: 'https://gurussolutions.com/blog/ai-in-netsuite-guide',
  },
  zone: {
    short: 'Zone & Co: AP automation',
    label: 'Zone & Co: P2P Automation for NetSuite',
    url: 'https://www.zoneandco.com/ap-automation',
  },
  timDietrich: {
    short: 'Tim Dietrich: AI Connector guide',
    label: 'Tim Dietrich: NetSuite AI Connector Guide, Claude and ChatGPT Integration',
    url: 'https://timdietrich.me/resources/netsuite-ai-connector-guide/',
  },
} as const;

type SrcKey = keyof typeof SRC;

/* ── FAQ. Single array, rendered visibly below AND used to build the FAQPage
   JSON-LD. Never hand-duplicate this list near the ld+json block.
   Questions come from the buyer questions measured on 2026-10-09
   (page-briefs/questions-us-netsuite.txt), People Also Ask pulled from
   DataForSEO (US, location 2840) the same day, and the page's own keywords. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'connector', label: 'The AI Connector and MCP' },
  { key: 'builtin', label: "NetSuite's own AI" },
  { key: 'agents', label: 'Custom agents and jobs' },
  { key: 'safety', label: 'Roles and safety' },
  { key: 'working', label: 'Working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── The AI Connector and MCP ─────────────────────────────────────
  {
    category: 'connector',
    question: 'What is the NetSuite AI connector?',
    answer:
      "It is Oracle's way of letting an outside AI tool work with your NetSuite account. Its full name is the NetSuite AI Connector Service. Oracle's help center says NetSuite has adopted the Model Context Protocol, and provides a SuiteApp called MCP Standard Tools for working with records, reports, saved searches and SuiteQL queries. Oracle's FAQ says the service is not a paid feature.",
  },
  {
    category: 'connector',
    question: 'What is NetSuite MCP?',
    answer:
      'MCP stands for Model Context Protocol, an open-source standard for connecting AI applications to outside systems. Its own site compares it to a USB-C port for AI applications. Oracle says NetSuite has adopted it. In practice, NetSuite MCP means the AI Connector Service plus the tools an AI client may call. Oracle supplies standard tools, and you can write your own.',
  },
  {
    category: 'connector',
    question: 'Does NetSuite have a Claude connector?',
    answer:
      "Yes. Oracle's help center gives the steps for Claude: in Claude's connector list you choose the NetSuite AI connector and paste a server address that carries your account ID. Anthropic's own connector marketplace lists a NetSuite connector too. Oracle says you need Claude's Pro plan or higher, and a NetSuite role that is not Administrator.",
  },
  {
    category: 'connector',
    question: 'How can I connect NetSuite to ChatGPT?',
    answer:
      "Oracle's steps are short. In ChatGPT, open Apps, search for NetSuite, choose Connect and sign in with your NetSuite login, picking a role that is not Administrator. Oracle's FAQ adds that some ChatGPT plans need Developer Mode switched on to use MCP connectors. Before any of that, your NetSuite administrator must enable Server SuiteScript and OAuth 2.0 and give that role the MCP Server Connection permission.",
  },
  {
    category: 'connector',
    question: 'How much does a NetSuite connector cost?',
    answer:
      "Oracle's own AI connector costs nothing extra. Its FAQ says the NetSuite AI Connector Service is not a paid feature and the MCP Standard Tools SuiteApp is free, though you may need a paid plan for your AI client. Oracle also says the connector does not use up NetSuite AI Units. Connectors sold by other companies set their own prices, which we have not checked.",
  },
  {
    category: 'connector',
    question: 'How do I connect Copilot Studio to NetSuite?',
    answer:
      "Oracle's help center says NetSuite enables any client that supports MCP, and points to a SuiteAnswers article named Connect Copilot Studio to NetSuite Using the NetSuite AI Connector. SuiteAnswers needs a NetSuite login, so we could not read that article for this page. The same account setup applies. Two features must be switched on, and the role cannot be Administrator.",
  },
  {
    category: 'connector',
    question: 'Is NetSuite open API?',
    answer:
      'NetSuite has a documented API that is open to software you authorize. Oracle calls it SuiteTalk REST web services. Its overview says you can create, read, update and delete records, read record metadata and run SuiteQL queries, without writing custom scripts. It is not open to anyone who asks. Each call has to sign in, and it runs under a NetSuite role.',
  },
  // ── NetSuite's own AI ────────────────────────────────────────────
  {
    category: 'builtin',
    question: 'Can you use AI in NetSuite?',
    answer:
      "Yes, in three ways. NetSuite has AI of its own, such as Ask Oracle, Bill Capture and Text Enhance. Oracle's free AI Connector Service lets Claude or ChatGPT work with your records. And a custom agent can be built for a job with rules of your own. Oracle notes that its AI features have not been assessed for compliance with HIPAA, the US health privacy law.",
  },
  {
    category: 'builtin',
    question: 'What is Ask Oracle?',
    answer:
      'Ask Oracle is the AI assistant inside NetSuite Next, the newer NetSuite experience Oracle is releasing to customers in phases. You ask in plain words, for example for a list of overdue invoices. Oracle says it is included with your NetSuite license, works within your role and permissions, does not browse the public internet, and uses NetSuite AI Units.',
  },
  {
    category: 'builtin',
    question: 'What are NetSuite AI Units?',
    answer:
      "They are how Oracle meters its built-in generative AI. Oracle's FAQ says each General Access user license includes 1,000 AI Units per month of term, and its estimates put a research question to Ask Oracle at 50 to 200 units. Unused units expire with the term. The AI Connector and Bill Capture do not consume them.",
  },
  {
    category: 'builtin',
    question: 'Does NetSuite have AP automation?',
    answer:
      'Yes, in two parts. Bill Capture reads emailed or uploaded vendor bills and drafts the bill for review. Oracle lists it as available only in the United States. Intelligent Payment Automation, powered by BILL, pays vendors from inside NetSuite. Between the two sit your own steps: matching each bill to its purchase order and receipt, coding it and approving it.',
  },
  {
    category: 'builtin',
    question: 'What is NetSuite Intelligent Payment Automation?',
    answer:
      "It is a SuiteApp, powered by BILL, for paying vendors from inside NetSuite by check, ACH, virtual card or wallet payment. Oracle says it is free to install and that BILL charges for the payments it processes. Oracle's limits page says it pays in US dollars only and can be used only in a production account, so it cannot be tried in a sandbox.",
  },
  // ── Custom agents and jobs ───────────────────────────────────────
  {
    category: 'agents',
    question: 'What is a NetSuite AI agent?',
    answer:
      "It is software that does one office task inside your NetSuite account. It reads something that arrives, such as a vendor bill or a customer's purchase order, looks up your items, prices and vendors, and saves a transaction for a person to approve. Oracle uses the word agents too, for helpers inside NetSuite Next and for outside AI tools that act on their own.",
  },
  {
    category: 'agents',
    question: 'When do I need a custom agent instead of the AI connector?',
    answer:
      "When the work should start without a person typing a prompt. With Claude or ChatGPT, the connector answers when someone asks in a chat window. A custom agent watches an inbox or a folder, follows rules you have written down, and saves a transaction for approval. Oracle's own FAQ says custom tools suit specialized workflows, single-step operations and custom automation.",
  },
  {
    category: 'agents',
    question: 'Which company can build an AI agent that automates RFQs and quotes from NetSuite?',
    answer:
      "FactoryJet builds these. The agent reads the buyer's request, matches each line to an item in NetSuite, applies that customer's pricing and saves an estimate, which is NetSuite's word for a quote. Your estimator checks it and sends it. We have worked on RFQ automation on NetSuite and on four other kinds of ERP. Before a contract, we show it working on a quote you have already sent.",
  },
  {
    category: 'agents',
    question: 'Can an AI agent create sales orders and purchase orders in NetSuite?',
    answer:
      'Yes, where the role you give it allows. Oracle says its standard tools can create and update records through REST Web Services, on any record that role may touch. We set the agent to save each order as pending. Oracle says a sales order that is Pending Approval must be approved by someone with the right permissions before NetSuite can process it.',
  },
  {
    category: 'agents',
    question: 'Can accounts payable be automated?',
    answer:
      "Most of the typing and matching can. Software can read a vendor bill, match it to the purchase order and the item receipt, suggest the coding and route it for approval. NetSuite's 3 Way Match workflow sends a bill with a discrepancy to a supervisor. Approving and paying stay with named people. Oracle's risk page gives making payments as its example of an action an AI agent might take without the user's intent.",
  },
  {
    category: 'agents',
    question: 'Is AI replacing accounts payable?',
    answer:
      "No. It changes what the day is spent on. Oracle's own tools are built around a person. Bill Capture puts each scanned bill on a review page, and Oracle says the Transaction Matching Assistant's recommendations are not submitted automatically. The agents we build follow the same line. They draft and flag. Your AP team reviews, approves and pays.",
  },
  {
    category: 'agents',
    question: 'Can an AI agent do daily bookkeeping in NetSuite?',
    answer:
      "Parts of it. An agent can match bank lines to open invoices and bills, pair a vendor bill with its purchase order and receipt, and suggest the account for each cost. It prepares the batch and your bookkeeper or accountant approves it. Oracle's advice for financial figures is to run NetSuite's standard reports, because they apply business rules a SuiteQL query cannot.",
  },
  // ── Roles and safety ─────────────────────────────────────────────
  {
    category: 'safety',
    question: "Why doesn't the Administrator role work with the AI connector?",
    answer:
      "Oracle blocks it on purpose. Its help center says that, to prevent unwanted results if the outside AI client's security is at risk, the connector cannot run under the Administrator role or any role with full permissions. You create a custom role, or use an existing one that is not an administrator, and add two permissions: MCP Server Connection and Log in using OAuth 2.0 Access Tokens.",
  },
  {
    category: 'safety',
    question: 'Does the AI have access to all my NetSuite data?',
    answer:
      "No. Oracle says queries through the connector respect the role's permissions, so the tools reach only what that role could see when logged in. Tools cannot run as administrators, call outside APIs or run elevated scripts. Oracle adds one warning: once data leaves NetSuite for the AI provider, NetSuite cannot control how it is handled there.",
  },
  {
    category: 'safety',
    question: 'Can I use the NetSuite AI connector with patient or health data?',
    answer:
      'Treat the answer as no until your compliance lead says otherwise. Oracle states that the AI Connector Service has not been assessed for compliance with HIPAA, the US health privacy law. It says you must not use it for electronic protected health information unless you have independently determined that such use fits your own HIPAA obligations and the law.',
  },
  {
    category: 'safety',
    question: 'How do I see what an AI agent did in NetSuite?',
    answer:
      "Open the integration record and look at its Execution Log. Oracle says the AI Connector Service tab lists each call with its date and time, duration, status, the user's email address, the HTTP status code, the method and the URL path. The log is kept for 21 days in production and 7 days in a sandbox, so plan a second log if your auditors need longer.",
  },
  // ── Working with us ──────────────────────────────────────────────
  {
    category: 'working',
    question: 'Who implements AI agents inside NetSuite for distributors?',
    answer:
      'Several firms do, and six are listed on this page with links to their own sites. FactoryJet is one option. For distributors the usual first jobs are sales orders from emailed purchase orders, purchase orders to vendors and vendor bill matching. Whoever you choose, ask to see the agent work on one of your own documents before you sign. For Odoo, SAP Business One or ERPNext, see our overview page on AI agents for ERP systems.',
  },
  {
    category: 'working',
    question: 'How much does a custom NetSuite AI agent cost?',
    answer:
      "It depends on how many kinds of record the agent touches and whether it writes to them. Building a custom AI agent costs roughly $5,000 to more than $180,000, according to development firm ProductCrafters' 2026 breakdown. That range covers every kind of agent and is not specific to NetSuite. FactoryJet quotes a fixed price in writing after a short scoping call.",
  },
  {
    category: 'working',
    question: 'What does it cost to run a NetSuite AI agent each month?',
    answer:
      "There are two bills. The AI model charges for each request, and the agent needs somewhere to run. ProductCrafters' 2026 breakdown puts monthly infrastructure for a custom-built agent at $500 to $10,000. If you prefer, both sit in your own accounts and you pay those bills directly, at cost. Whose account pays does not change who does the work. We keep managing the servers, the AI models, the API connections and the upkeep, so your team never has to.",
  },
  {
    category: 'working',
    question: 'Can I see it working before I sign?',
    answer:
      'Yes. Before a contract, we show working software on your own data. For a NetSuite agent that usually means one real document, such as a vendor bill you have already entered or an RFQ you have already quoted, run through a first version of the agent so you can compare its draft with what your team did.',
  },
  {
    category: 'working',
    question: 'Do you support the agent after launch?',
    answer:
      "Yes. NetSuite changes, and so do AI models. Oracle is releasing NetSuite Next in phases, its connector asks for one named protocol version, and model makers retire versions. The same team that built the agent watches its logs, re-tests it when something changes and fixes what breaks. Our AI agent monitoring and support page covers that service.",
  },
  {
    category: 'working',
    question: 'Who owns the agent and its code?',
    answer:
      'You do. The agent is built for you and the code is yours. It can run in your own cloud account and with your own AI key, so nothing depends on a FactoryJet login. We still look after it day to day: the servers, the AI models, the API connections and the updates. If you later move the work in-house or to another firm, the code and its notes go with you.',
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

/* ── What Oracle ships itself. Each card restates Oracle's own pages as read on
   2026-10-09. Nothing here is our opinion of the product. ── */
const SHIPS: ReadonlyArray<{
  name: string;
  kind: string;
  says: string;
  sources: ReadonlyArray<SrcKey>;
  span: string;
}> = [
  {
    name: 'NetSuite AI Connector Service',
    kind: 'Not a paid feature · for outside AI clients',
    says: "Oracle's help center says NetSuite has adopted the Model Context Protocol, or MCP, an open-source standard for connecting AI applications to outside systems. The connector lets a supported AI client work with your account. Oracle's FAQ lists Claude Pro and ChatGPT as currently supported. Oracle also says the connector does not use up NetSuite AI Units, because its requests run at the AI provider you chose.",
    sources: ['nsConnector', 'nsFaq', 'nsAiUnitsUse', 'mcp'],
    span: 'lg:col-span-7',
  },
  {
    name: 'MCP Standard Tools',
    kind: 'Free SuiteApp · the ready-made tools',
    says: 'Four sets of tools: record tools that create, retrieve and update records, report tools, saved search tools and SuiteQL tools. The record tools work through REST Web Services, and Oracle says the SuiteQL tools support read-only queries only. Every tool uses the same access controls as the NetSuite screens, so a role sees and does only what it could by hand.',
    sources: ['nsStdTools', 'nsTools', 'nsRest'],
    span: 'lg:col-span-5',
  },
  {
    name: 'The Companion SuiteApp',
    kind: 'SuiteApp · a prompt library',
    says: "A library of prompt samples grouped by business function, among them order to cash, procure to pay and record to report. Oracle's help center says it supports 23 languages. NetSuite's product page counts over 100 prompt templates and lists ready-made roles for a CFO, a controller, an AR or AP analyst and treasury.",
    sources: ['nsCompanion', 'nsProduct'],
    span: 'lg:col-span-5',
  },
  {
    name: 'Ask Oracle and NetSuite Next',
    kind: 'Built in · reaching accounts in phases',
    says: 'Ask Oracle is the assistant inside NetSuite Next. Oracle says it is included with your NetSuite license, works within your roles and permissions, and does not browse the public internet. It may pause and ask you to approve a protected action, which Oracle defines as one that can change data or continue a process that needs your review. Oracle also describes agents of its own, reached through Ask Oracle or from specific NetSuite pages, which cannot reach records or actions your role cannot. NetSuite Next is reaching customers in phases, so it may not be in your account yet.',
    sources: ['nsAskOracle', 'nsAskMore', 'nsAgents', 'nsNextFaq'],
    span: 'lg:col-span-7',
  },
  {
    name: 'Bill Capture',
    kind: 'Add-on module · vendor bills',
    says: 'You email or upload a vendor bill as a PDF, JPEG or PNG, and NetSuite drafts the bill on a review page. Its suggestions rely on matches to your vendors, items and purchase orders. Oracle says it is available only in the United States, takes PDFs of up to 30 pages and files of up to 8 MB, and leaves your 3 Way Match and approval workflows as they are.',
    sources: ['nsBillCapture', 'nsBillLimits'],
    span: 'lg:col-span-7',
  },
  {
    name: 'Intelligent Payment Automation',
    kind: 'SuiteApp · powered by BILL',
    says: 'Pays vendors from inside NetSuite by check, ACH, virtual card or wallet payment. Oracle says the SuiteApp is free to install and that BILL charges for the payments it processes. It pays in US dollars only, takes up to 600 payments in one submission, and cannot be used in a sandbox account.',
    sources: ['nsIpa', 'nsIpaLimits'],
    span: 'lg:col-span-5',
  },
  {
    name: 'Bank matching and exception checks',
    kind: 'Built in · eligibility varies',
    says: "Enriched Bank Data uses generative AI to help match imported bank lines when several candidates share the same amount. The Transaction Matching Assistant recommends the most likely match and, in Oracle's words, doesn't create matches or transactions. Exception Management reviews transactions every hour for unusual amounts and accounts. Oracle says it is not yet available to all customers.",
    sources: ['nsBankData', 'nsTxMatch', 'nsException'],
    span: 'lg:col-span-5',
  },
  {
    name: 'Custom tools',
    kind: 'For developers · SuiteScript 2.1',
    says: "Oracle lets you write your own tools for the connector as SuiteScript 2.1 custom tool scripts, deployed through the SuiteCloud Development Framework. Its FAQ says custom tools suit specialized workflows, single-step operations and custom automation. They cannot call outside systems. Oracle lists the N/http, N/https, N/llm and N/sftp modules as not supported in custom tool scripts.",
    sources: ['nsCustomTools', 'nsCustomScript', 'nsFaq'],
    span: 'lg:col-span-7',
  },
  {
    name: 'NetSuite AI Units',
    kind: 'How Oracle meters its own AI',
    says: "Oracle counts use of its built-in generative AI in AI Units. Its FAQ says each General Access user license includes 1,000 units per month of term, and that unused units expire when the term ends. Oracle's estimates put a simple question to Ask Oracle at about 10 units and a research question at 50 to 200. The AI Connector and Bill Capture do not use them.",
    sources: ['nsAiUnitsFaq', 'nsAiUnitsEst', 'nsAiUnitsUse'],
    span: 'lg:col-span-12',
  },
];

/* ── Oracle's own connection steps, restated in order. ── */
const CONNECT_STEPS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'Switch on two features',
    b: "Go to Setup, Company, Enable Features and open the SuiteCloud subtab. Enable Server SuiteScript and OAuth 2.0. Enable REST Web Services too if you want Oracle's standard tools.",
  },
  {
    n: '02',
    t: 'Give a role two permissions',
    b: 'Add MCP Server Connection and Log in using OAuth 2.0 Access Tokens to each role that should use the connector. Oracle warns not to confuse the second one with Log in using Access Tokens. The role cannot be Administrator.',
  },
  {
    n: '03',
    t: 'Install MCP Standard Tools',
    b: 'It comes from the SuiteApp Marketplace. For a role to create, retrieve and update records through it, Oracle says that role also needs the REST Web Services permission.',
  },
  {
    n: '04',
    t: 'Connect the AI client',
    b: 'In Claude, choose the NetSuite AI connector and paste the server address with your account ID in it. In ChatGPT, open Apps, search for NetSuite and sign in with a role that is not Administrator.',
  },
  {
    n: '05',
    t: 'Allow access the first time',
    b: 'On the first connection each user is asked to allow or deny access to the NetSuite account. Oracle asks you to read its risk page before you answer.',
  },
  {
    n: '06',
    t: 'Check the log',
    b: "Oracle's last check is that the Execution Log shows activity. The log sits on the integration record, which Oracle says is installed in your account after the first connection with Claude.",
  },
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
    title: 'Accounts payable: vendor bills',
    body: 'Vendor bills arrive by email as PDFs. The agent turns each one into a vendor bill in NetSuite that waits for approval.',
    items: [
      'Reads the bill, finds the vendor and matches each line to its purchase order and item receipt',
      'Flags a difference in price, quantity or terms and says which line it is on',
      'Suggests the account, department and class from how your team coded that vendor before',
      'Saves the bill as Pending Approval. Your approval workflow does the rest, and the agent pays no one',
    ],
    note: "Start with what Oracle ships. Bill Capture reads emailed or uploaded vendor bills and drafts them for review, and NetSuite's 3 Way Match workflow routes a bill with a discrepancy to a supervisor. A custom agent earns its place where Oracle's listed limits bite, such as several bills in one file or a file over 8 MB, or where a bill has to be checked against a contract that lives outside NetSuite.",
    sources: ['nsBillCapture', 'nsBillLimits', 'ns3Way'],
    span: 'lg:col-span-7',
  },
  {
    n: '02',
    title: 'Quotes and RFQs',
    body: 'A buyer emails a request for quote. The agent drafts the quote from your NetSuite items and prices, and your estimator checks it before it goes out.',
    items: [
      'Reads the email and its attachments, whether the part list is typed in the message, a PDF or a spreadsheet',
      'Matches each line to an item record. A line it cannot match is flagged for a person, not guessed',
      "Applies that customer's pricing and terms, and checks what is on hand",
      'Saves an estimate. Nothing reaches the buyer until someone sends it',
    ],
    note: "NetSuite calls a quote to a customer an estimate. Oracle says estimates have no accounting impact until they are converted to invoices or cash sales, which makes quoting a safe first job for an agent. NetSuite's own Request for Quote feature runs the other way. It is for asking your vendors for prices. For configurable products Oracle offers a CPQ AI Assistant, which requires the NetSuite CPQ Configurator SuiteApp.",
    sources: ['nsEstimates', 'nsRfq', 'nsCpq'],
    span: 'lg:col-span-5',
  },
  {
    n: '03',
    title: 'Sales orders from emailed purchase orders',
    body: "A customer's purchase order arrives as an email or a PDF. The agent turns it into a sales order that waits for approval.",
    items: [
      'Finds the customer, the ship-to address and each item in NetSuite',
      "Checks the price on the customer's purchase order against the price in NetSuite and flags a difference",
      'Sets an external ID on the order, so the same email cannot create it twice',
      'Attaches the original document, so the approver can see both',
    ],
    note: 'Oracle says a sales order that is Pending Approval needs to be approved by someone with the right permissions before NetSuite can process it. A preference named Require Re-approval on Edit of Sales Order sends an edited order back for approval. Oracle also advises always setting the External ID when a tool creates a record, to help prevent duplicates.',
    sources: ['nsSoApprove', 'nsBest', 'nsTools'],
    span: 'lg:col-span-5',
  },
  {
    n: '04',
    title: 'Purchase orders to vendors',
    body: 'When stock runs low or a job needs material, the agent drafts the purchase order for a buyer to approve.',
    items: [
      'Reads open sales orders and stock on hand from NetSuite',
      'Drafts the order with the vendor and price NetSuite already holds for that item',
      'Leaves it to your approval limits. A buyer or supervisor approves before it goes out',
      "Reads the vendor's confirmation when it comes back and flags a changed date or quantity",
    ],
    note: 'Oracle says a purchase order has no accounting impact until you receive the order, and that with approval routing a transaction is not processed until it is approved. Routing follows the purchase approval limit set for each supervisor or approver, and one request can pass through several approvers. The agent works under those limits like any other user.',
    sources: ['nsPoApproval', 'nsApprovalRouting'],
    span: 'lg:col-span-7',
  },
  {
    n: '05',
    title: 'Daily bookkeeping',
    body: 'The matching and coding work that fills a bookkeeper’s morning, prepared as a batch for that bookkeeper to approve.',
    items: [
      'Matches bank lines to open invoices and bills, and lists what it could not match with the reason',
      'Pairs a vendor bill with its purchase order and its item receipt. Accountants call this a three-way match',
      'Suggests the account for each cost, based on how your team coded the same vendor before',
    ],
    note: "NetSuite does part of this itself. Enriched Bank Data and the Transaction Matching Assistant help match bank lines, and Oracle says the assistant does not learn from past decisions or improve over time. The agent picks up what sits around that: coding, three-way matching and the list of what is still open. It drafts. Your bookkeeper or accountant approves, and nothing is filed with a tax authority.",
    sources: ['nsBankData', 'nsTxMatch', 'ns3Way'],
    span: 'lg:col-span-7',
  },
  {
    n: '06',
    title: 'Answers from live NetSuite data',
    body: 'Staff ask where an order is, what is overdue or what is in stock. This is the job that often needs no build at all.',
    items: [
      "Connect Claude or ChatGPT through Oracle's connector, under a role that can only view",
      'Point it at saved searches and standard reports before SuiteQL, which is Oracle’s own advice',
      'Call us when the answers have to appear in your help desk or website chat with no person in between',
    ],
    note: "Oracle says its SuiteQL tools support read-only queries only, and that AI clients usually handle up to about 5,000 rows per call. Its FAQ also says AI clients may still produce incorrect results, so it is best practice to verify them against NetSuite data.",
    sources: ['nsFaq', 'nsBest'],
    span: 'lg:col-span-5',
  },
];

/* ── Roles, permissions and approvals. Three enforced by NetSuite, three we set
   up, two your team keeps. Oracle facts are from the linked pages. ── */
type Keeper = 'netsuite' | 'build' | 'person';

const KEEPER_LABEL: Record<Keeper, string> = {
  netsuite: 'NetSuite enforces',
  build: 'We set up',
  person: 'Your team keeps',
};

const GUARDS: ReadonlyArray<{ rule: string; keeper: Keeper; note: string }> = [
  {
    rule: 'No Administrator role',
    keeper: 'netsuite',
    note: 'Oracle says the connector cannot run if you are logged in as Administrator or with a role that has full permissions. Its tools are never executed with those roles.',
  },
  {
    rule: 'Off until someone turns it on',
    keeper: 'netsuite',
    note: 'Oracle says that by default no users have access. The MCP permission must be explicitly granted to a role, and each user is asked for consent during sign-in.',
  },
  {
    rule: 'A log of every call',
    keeper: 'netsuite',
    note: 'Each call is logged on the integration record with its time, status, user and URL path. Oracle keeps that log for 21 days in production and 7 days in a sandbox.',
  },
  {
    rule: 'A role made for the job',
    keeper: 'build',
    note: 'Oracle advises separate roles for different tools instead of reusing broad operational roles. We create one role per agent, with only the record permissions that job needs.',
  },
  {
    rule: 'Read-only first',
    keeper: 'build',
    note: "Oracle's advice is to prefer read-only or low-impact tools during initial evaluation, and to widen permissions only after reviewing the behavior and the logs. We start every build that way.",
  },
  {
    rule: 'An external ID on every record',
    keeper: 'build',
    note: "Oracle's best practice is to always set the External ID when a tool creates a record, which helps prevent duplicates. The agent sets one each time, so the same email cannot create two orders.",
  },
  {
    rule: 'Approval before anything is processed',
    keeper: 'person',
    note: 'The agent saves a transaction as pending. Your own approval setup decides who signs it off, whether that is a vendor bill workflow, purchase approval limits or the Approve Sales Orders page.',
  },
  {
    rule: 'A person confirms high-impact actions',
    keeper: 'person',
    note: 'Oracle lists creating, modifying, deleting, approving and paying among the high-impact actions that should need explicit user confirmation. In our builds, approving and paying stay with named people.',
  },
];

/* ── Where NetSuite AI projects break. All eight come from the linked pages. ── */
const BREAKS: ReadonlyArray<{ t: string; b: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    t: 'Connecting as an administrator',
    b: 'Oracle says the AI Connector Service cannot run if you are logged in with the Administrator role, or a role with full permissions. It needs a role made for it.',
    sources: ['nsPerms'],
  },
  {
    t: 'The wrong token permission',
    b: 'The role needs Log in using OAuth 2.0 Access Tokens. Oracle warns not to confuse it with Log in using Access Tokens, and lists that mix-up among its checks for a connection that fails.',
    sources: ['nsPerms', 'nsFaq'],
  },
  {
    t: 'A server address without /all',
    b: "Oracle's FAQ says that to retrieve all available tools the address must end in /all. Without it, the connection will appear disconnected.",
    sources: ['nsFaq'],
  },
  {
    t: 'Financial reports rebuilt in SuiteQL',
    b: 'Oracle says not to use SuiteQL or build new reports for financial reports, because NetSuite standard reports use important business rules that SuiteQL cannot apply.',
    sources: ['nsBest'],
  },
  {
    t: 'Too many requests at once',
    b: 'Unless an administrator sets a limit for it, the connector draws on the same account limit for concurrent requests as your other integrations. Oracle says one prompt is usually several requests, and that going over the limit returns a Too Many Requests error.',
    sources: ['nsConcurrency', 'nsFaq'],
  },
  {
    t: 'A custom tool that needs to call out',
    b: 'Oracle says tools cannot make HTTP requests to outside destinations, and that N/http, N/https, N/llm and N/sftp are not supported in custom tool scripts. An agent that has to reach a second system must run outside NetSuite.',
    sources: ['nsRisks', 'nsCustomScript'],
  },
  {
    t: 'A PDF that carries hidden instructions',
    b: "Oracle's risk page calls this prompt injection: hidden instructions inside PDF documents, web pages or tool responses that an AI model then reads. It is the reason a person approves before anything is processed.",
    sources: ['nsRisks'],
  },
  {
    t: "Health records in NetSuite's connector",
    b: 'Oracle says the service has not been assessed for compliance with HIPAA, the US health privacy law, and must not be used for protected health information unless you have independently determined that such use fits your own obligations.',
    sources: ['nsPerms', 'nsGetStarted'],
  },
];

/* ── Our experience, stated plainly. No client is named on this page and no
   result is claimed. The first card is Bhavesh's own statement of 2026-10-09.
   The last is the wording he approved that day. ── */
const EXPERIENCE: ReadonlyArray<{ t: string; kind: string; what: string; href: string; cta: string; span: string }> = [
  {
    t: 'What we have worked on',
    kind: 'NetSuite · and four other kinds of ERP',
    what: 'FactoryJet has worked on NetSuite, Odoo, SAP Business One, ERPNext and custom ERPs. The jobs were RFQ automation, daily bookkeeping, and purchase and sales order generation.',
    href: '/services/erp-ai-agents',
    cta: 'See the overview for all four systems',
    span: 'lg:col-span-7',
  },
  {
    t: 'What you see before you sign',
    kind: 'A demo on your own data',
    what: 'Before a contract, we show working software on your own data. For NetSuite that means one real document of yours, such as a vendor bill or an RFQ, run through a first version so you can lay its draft beside what your team did.',
    href: '/contact',
    cta: 'Ask for a demo on your data',
    span: 'lg:col-span-5',
  },
  {
    t: 'What we leave out',
    kind: 'No named NetSuite client',
    what: 'This page names no NetSuite client and quotes no result. Client projects with public case studies are on the overview page and in our case studies.',
    href: '/case-studies',
    cta: 'See all case studies',
    span: 'lg:col-span-5',
  },
  {
    t: 'Who looks after it',
    kind: 'Managed after launch',
    what: 'The AI usage and hosting bills may sit in your own accounts, at cost. Either way FactoryJet keeps managing the servers, the AI models, the API connections and the upkeep, so your team never has to.',
    href: '/services/ai-agent-monitoring',
    cta: 'See monitoring and support',
    span: 'lg:col-span-7',
  },
];

/* ── Who this is for. Examples of the kinds of team the work suits, not a
   client list. Pictures were generated on 2026-10-09 and checked at the size
   they ship. The people in them are not FactoryJet staff or clients. ── */
const INDUSTRIES: ReadonlyArray<{ img: string; alt: string; t: string; b: string }> = [
  {
    img: `${IMG}/distributor-receiving-dock.webp`,
    alt: 'A man in a dark green work shirt rests one hand on a pallet of plain cardboard cartons and holds a clipboard at a warehouse receiving bay, next to an orange pallet jack',
    t: 'Wholesale distributors',
    b: 'Purchase orders arrive by email all day. Each one becomes a pending sales order, checked against that customer’s pricing and terms.',
  },
  {
    img: `${IMG}/assembly-bench-estimator.webp`,
    alt: 'A man in safety glasses and a grey work shirt measures an aluminum bracket with a caliper at a steel workbench, with three more brackets and an orange parts tray in front of him',
    t: 'Manufacturers',
    b: 'RFQs arrive as drawings and part lists. The agent drafts the estimate from the items and prices in NetSuite, and your estimator checks it.',
  },
  {
    img: `${IMG}/ap-desk-invoice-check.webp`,
    alt: 'A woman in a mustard cardigan sits at a desk holding a sheet of paper and looks at a monitor showing two columns of grey bars with one orange bar, beside an orange folder',
    t: 'Finance and AP teams',
    b: 'Vendor bills are matched to purchase orders and receipts, coded and saved for approval. Your controller keeps the sign-off.',
  },
  {
    img: `${IMG}/parts-counter-order.webp`,
    alt: 'A woman in a navy polo shirt behind a trade counter slides a small cardboard box toward a customer while holding a tablet, with an orange bin of metal fittings on the counter',
    t: 'Trade and parts sellers',
    b: 'Counter, phone and web orders all end in NetSuite. Stock and order questions are answered from the same records your staff see.',
  },
];

/* ── Process. Six steps, in the order we work. ── */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'List what your account has switched on',
    b: 'Edition, enabled features, SuiteApps and roles. Whether Server SuiteScript, OAuth 2.0 and REST Web Services are on decides what an agent can do before anyone promises anything.',
  },
  {
    n: '02',
    t: "Check Oracle's own tools first",
    b: 'If Bill Capture, Ask Oracle or the free connector already does the job, we say so, even when it means there is no work for us.',
  },
  {
    n: '03',
    t: 'Pick one job and write down its rules',
    b: 'One task, such as vendor bills or quotes from RFQs. The rules a person follows today go on paper, along with who approves the result.',
  },
  {
    n: '04',
    t: 'Show it on your own data',
    b: 'Before a contract, we run one of your real documents through a first version, so you see a draft you can judge against what your team did.',
  },
  {
    n: '05',
    t: 'Build in a sandbox, under a role of its own',
    b: 'The agent is built against your sandbox account where you have one. It gets its own role, with only the permissions the job needs, and never the Administrator role.',
  },
  {
    n: '06',
    t: 'Run it beside your team, then stay on',
    b: 'For an agreed period the agent drafts while a person does the same work, and the rules are fixed where the two differ. After launch the same team reads the logs, re-tests when NetSuite or the AI model changes, and fixes what breaks.',
  },
];

/* ── Comparison: three ways to get AI into NetSuite ── */
const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: "01 NetSuite's built-in AI" },
  { label: '02 The AI Connector with Claude or ChatGPT' },
  { label: '03 A custom agent built for you' },
];

const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'What it is',
    values: [
      'Features Oracle ships inside NetSuite, such as Ask Oracle and Bill Capture',
      "Oracle's link between an outside AI client and your account",
      'An agent designed around your rules and built for you',
    ],
  },
  {
    feature: 'What starts the work',
    values: [
      'A person on a NetSuite page, or a bill emailed to Bill Capture',
      'A person typing in a chat window',
      'The document itself, when it lands in an inbox or a folder',
    ],
  },
  {
    feature: 'Writing to NetSuite',
    values: [
      'Inside each feature, after your review',
      'Record tools create and update records. SuiteQL tools only read',
      'Saves pending transactions through REST web services or custom tools',
    ],
  },
  {
    feature: 'What the AI costs',
    values: [
      'Generative features are metered in NetSuite AI Units',
      'The connector is not a paid feature. Your AI client may need a paid plan',
      'Model usage and hosting, in your own accounts at cost if you prefer',
    ],
  },
  {
    feature: 'Who sets the rules',
    values: ['Oracle', 'Your prompts, and the role you connect with', 'You, in writing, before the build'],
  },
  {
    feature: 'Who you call when it breaks',
    values: ['Oracle', "Oracle for the connector, the AI client's maker for the rest", 'The team that built it'],
  },
  {
    feature: 'Right call when',
    values: [
      'The built-in feature already does the job',
      'People want answers and simple record work in a chat window',
      'The work should start without a prompt, follows rules of your own, or crosses two systems',
    ],
  },
];

/* ── Other names a US search shows. Each line restates the firm's own page as
   read on 2026-10-09. Feeds the visible list AND the ItemList JSON-LD. ── */
const OTHERS: ReadonlyArray<{ name: string; focus: string; says: string; source: SrcKey }> = [
  {
    name: 'RSM US',
    focus: 'Consulting firm · NetSuite AI services',
    says: 'Its NetSuite AI page describes the AI features across NetSuite, offers a complimentary NetSuite AI assessment, and says it has built a NetSuite agent for teams who prefer to work in Microsoft Copilot.',
    source: 'rsm',
  },
  {
    name: 'Folio3',
    focus: 'NetSuite AI services · ready-made agents',
    says: 'Its NetSuite AI page says it has run a dedicated AI practice since 2019 and has developed 14 production-ready NetSuite AI agents and 15 NetSuite AI and MCP connectors.',
    source: 'folio3',
  },
  {
    name: 'Invitra Technologies',
    focus: 'NetSuite AI agents and connectors',
    says: 'Offers NetSuite AI strategy, custom agent development and connectors. Its page says its agents are built for finance, sales, procurement, inventory and operations, and states 15+ years of NetSuite work and 750+ implementations.',
    source: 'invitra',
  },
  {
    name: 'GURUS Solutions',
    focus: 'A guide · and the AI4NetSuite product',
    says: 'Publishes a 2026 guide to AI in NetSuite and sells AI4NetSuite, which it describes as an AI and machine learning extension with forecasting, anomaly detection and dashboards.',
    source: 'gurus',
  },
  {
    name: 'Zone & Co',
    focus: 'Software · AP automation for NetSuite',
    says: 'A software maker. Its page lists ZoneCapture for invoice capture and coding, ZoneApprovals for routing bills, Zone AP Payments for paying vendors inside NetSuite and ZoneReconcile for matching payments to bank activity.',
    source: 'zone',
  },
  {
    name: 'Tim Dietrich',
    focus: 'A connector setup guide',
    says: 'Publishes a step-by-step guide to the AI Connector that covers Claude and ChatGPT setup, running more than one NetSuite account, troubleshooting and security practices.',
    source: 'timDietrich',
  },
];

const othersSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Other firms, products and guides a US search shows for NetSuite AI agent work',
  itemListElement: OTHERS.map((o, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: o.name,
    url: SRC[o.source].url,
  })),
};

const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  { href: '/services/erp-ai-agents', t: 'AI agents for ERP systems', b: 'The overview: Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs on one page.' },
  { href: '/services/odoo-ai-agents', t: 'Odoo AI agents', b: 'The same work inside Odoo.' },
  { href: '/services/ai-agent-development', t: 'AI agent development', b: 'Custom agents for support, sales and operations, beyond NetSuite.' },
  { href: '/services/ai-agent-monitoring', t: 'AI agent monitoring and support', b: 'Watching, re-testing and fixing an agent after launch.' },
  { href: '/blog/ai-agents-erp-netsuite-odoo-sap-business-one-2026', t: 'Guide: AI agents inside your ERP', b: 'The longer read on NetSuite, Odoo and SAP Business One.' },
  { href: '/blog/enterprise-erp-ai-agents-netsuite-sap-epicor-implementation-guide', t: 'Guide: enterprise ERP agents', b: 'Implementation notes for NetSuite, SAP and Epicor.' },
];

/** Small inline source links. Same visual pattern as /services/erp-ai-agents.
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

export default function NetSuiteAiAgentsPage() {
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
                    NETSUITE AI AGENTS &middot; UNITED STATES
                  </span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.2rem]">
                  NetSuite AI agents that draft the bills, quotes and orders your team approves.
                </h1>

                <p className="mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                  We design, build and support AI agents that work inside Oracle NetSuite. Some jobs need nothing
                  built, because Oracle&rsquo;s AI Connector Service already joins Claude or ChatGPT to your account
                  at no charge from Oracle. Where your rules go further, we build the agent, give it a NetSuite role
                  of its own and stay on after launch. You get a fixed quote in writing before work starts.
                </p>

                <div className="mt-6">
                  <HeroInlineForm
                    region="us"
                    source="services_netsuite_ai_agents_hero"
                    service="NetSuite AI Agents"
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
                  <span>Oracle pages read {CHECKED_ON}</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
                  <figcaption className="font-fj-mono text-[11px] font-bold uppercase tracking-wider text-[#B23E13]">
                    How an agent reaches your NetSuite account
                  </figcaption>
                  <ConnectorPathDiagram />
                  <ul className="mt-4 grid gap-2 font-fj-body text-[13px] leading-snug text-fj-ink">
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-[3px] h-3 w-3 flex-shrink-0 rounded-sm border-[1.5px] border-[#14110F] bg-white" />
                      Black outline: your NetSuite account. The role, the tools, the records.
                    </li>
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-[3px] h-3 w-3 flex-shrink-0 rounded-sm border-[1.5px] border-[#F05A28] bg-[#FFF4EE]" />
                      Orange: the agent we build for you.
                    </li>
                  </ul>
                  <p className="mt-3 font-fj-body text-[13px] leading-snug text-fj-neutral-600">
                    The dashed step is the one that matters most. Oracle will not let its connector run under the
                    Administrator role, so the agent gets a role of its own.
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
                A NetSuite AI agent is software that does one task inside your NetSuite account. It reads a
                vendor bill, an RFQ (request for quote) or a purchase order, looks up your records and drafts the
                transaction for someone to approve. Oracle&rsquo;s free AI Connector Service covers questions and
                simple record work. A custom agent covers jobs with your own rules.
              </p>
              <p className="mt-4 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                Oracle&rsquo;s help center says NetSuite has adopted the Model Context Protocol (MCP), an open
                standard for joining AI tools to business systems. It lists Claude Pro and ChatGPT as supported, says
                the service is not a paid feature, and says it cannot run under the Administrator role (as read on{' '}
                {CHECKED_ON}).
              </p>
              <SourceLinks ids={['nsConnector', 'nsFaq', 'nsPerms', 'mcp']} />
            </div>
          </div>
        </section>

        {/* 3. WHAT ORACLE SHIPS ITSELF */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Before anyone builds</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              What Oracle already ships for AI in NetSuite.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Start here. Each card restates Oracle&rsquo;s own pages, as read on {CHECKED_ON}. If one of these
              already does your job, you do not need a build, and we will tell you so. For Odoo, SAP Business One and
              ERPNext, see the overview page,{' '}
              <Link href="/services/erp-ai-agents" className="font-semibold text-fj-ink underline underline-offset-4">
                AI agents for ERP systems
              </Link>
              . Oracle keeps its own running list of the NetSuite features that use AI.
            </p>
            <SourceLinks ids={['nsAiFeatures']} />
            <ul className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
              {SHIPS.map((c) => (
                <li key={c.name} className={`rounded-2xl border border-fj-neutral-200 bg-white p-6 ${c.span}`}>
                  <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{c.name}</h3>
                  <div className="mt-1 font-fj-mono text-[11px] font-bold uppercase tracking-wider text-fj-neutral-600">
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
                Three limits to plan around before anyone builds.
              </h3>
              <ul className="mt-4 grid max-w-3xl gap-3 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  The connector&rsquo;s execution log is kept for 21 days in production and 7 days in a sandbox. If
                  your auditors want a longer trail, plan a second log from day one.
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  Oracle says AI clients usually handle up to about 5,000 rows per call. Unless an administrator
                  sets a limit for it, the connector draws on the same account limit for concurrent requests as your
                  other integrations.
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  The report tools take date and subsidiary filters only. Oracle says accounting periods are not
                  supported.
                </li>
              </ul>
              <SourceLinks ids={['nsConnect', 'nsFaq', 'nsConcurrency']} />
            </div>
          </div>
        </section>

        {/* 4. ORACLE'S CONNECTION STEPS */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">The free route</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Oracle&rsquo;s six steps to connect Claude or ChatGPT to NetSuite.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Your NetSuite administrator can do this without us. If answers and simple record work in a chat
                  window are all you need, stop here.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Any other AI client has to support four things Oracle&rsquo;s FAQ lists: remote MCP, protocol
                  version 2025-06-18, streamable HTTP, and OAuth 2.0 sign-in with PKCE. Ask its maker before you plan
                  around it.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  Where we come in is what follows: the role design, custom tools, and agents that start work without
                  a prompt.
                </p>
                <SourceLinks ids={['nsPerms', 'nsStdTools', 'nsConnect', 'nsFaq', 'claudeListing']} />
              </div>
              <ol className="grid gap-4 lg:col-span-8">
                {CONNECT_STEPS.map((p) => (
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

        {/* 5. COMPARISON: three ways to get AI into NetSuite */}
        <ComparisonTable
          eyebrow="Three routes compared"
          headline="NetSuite's own AI, the free connector, or an agent built for you."
          lead="Each route is the right one for somebody. On the scoping call we say which we would choose for you and why, even when it means there is no work for us."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer={`Oracle facts are from its own help center as read on ${CHECKED_ON}.`}
          scrollRegionLabel="Comparison of three ways to add AI to NetSuite"
        />

        {/* 6. SIX JOBS */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Six jobs</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Six NetSuite jobs an AI agent can draft for your team.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Two NetSuite words cover most of what follows. A vendor bill is a supplier&rsquo;s invoice once it is in
              NetSuite. An estimate is NetSuite&rsquo;s word for a quote. Each card says what NetSuite does itself and
              where an agent fits. For the build behind the quoting job, read our{' '}
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
              These are the jobs searched for most. In US search data we pulled on {CHECKED_ON}, accounts payable
              automation for NetSuite drew about 260 searches a month, more than any other job on this page. The same
              pattern fits the rest: read what arrives, look up NetSuite, draft, approve.
            </p>
            <p className="mt-3 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
              Oracle notes are as listed on {CHECKED_ON}.
            </p>
          </div>
        </section>

        <MidPageCTA
          headline="Tell us the job. We will say if Oracle's own tools already do it."
          sub="Send one task that fills your team's day in NetSuite. We reply with what the connector or a built-in feature covers, what we would build, and a fixed quote if there is work for us."
          label="Scope my agent"
        />

        {/* 7. ROLES, PERMISSIONS, APPROVALS */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Keeping it safe</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Roles, permissions and approvals keep a NetSuite agent safe.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  To NetSuite, an agent is a user. It can do what its role allows and nothing more. Oracle says its
                  tools use the same access controls as the NetSuite screens.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  So safety is mostly setup. It comes down to the role, its permissions, the approval workflow and the log.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  Eight controls follow. NetSuite enforces three, we set up three and your team keeps two.
                </p>
                <SourceLinks ids={['nsRisks', 'nsStdTools', 'nsBest', 'nsBillApprovals']} />
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
              Eight places a NetSuite AI project breaks.
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Knowing these early saves a rebuild. All eight come straight from the linked Oracle pages.
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
              What we have done on NetSuite, stated plainly.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Here is what we can say and what we leave out. No result is quoted on this page that we have not
              measured. FactoryJet was founded in 2014 and has served more than 500 businesses.
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
                  Built for teams that already run on NetSuite.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Your trade changes the documents. The job is the same in each one. Something arrives, someone looks
                  it up, someone types it into NetSuite.
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
                  How we design, build and support a NetSuite agent.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Oracle&rsquo;s own tools are checked first. Then one job is agreed, shown on your own data and built
                  in a sandbox. After launch,{' '}
                  <Link
                    href="/services/ai-agent-monitoring"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    AI agent monitoring and support
                  </Link>{' '}
                  keeps it working as NetSuite and the AI models change. For agents outside NetSuite, see{' '}
                  <Link
                    href="/services/ai-agent-development"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    AI agent development
                  </Link>
                  .
                </p>
                <img
                  src={`${IMG}/planning-roles-approvals.webp`}
                  alt="A woman in a teal blouse and a man in a charcoal sweater, seen from behind, stand at a white board with a row of blank sticky notes, and she presses the one orange note into place"
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

        {/* 12. OTHER NAMES A SEARCH SHOWS */}
        <section className="border-t border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Other options</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Six other names a US search shows for NetSuite AI work.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  We are one option, and we wrote this list. These came up in US searches for NetSuite AI terms, or in
                  AI assistants&rsquo; answers to buyer questions, on {CHECKED_ON}. Each line restates the
                  firm&rsquo;s own page. We have not worked with them and did not test their products.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Where we differ is range. FactoryJet also works on Odoo, SAP Business One, ERPNext and custom
                  systems, so the route we recommend is not tied to one vendor&rsquo;s product. A firm that works on
                  NetSuite alone will know its corners better than we do.
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
                  Every feature name, limit, requirement and number about NetSuite on this page was read from the
                  pages listed here on that day. Oracle&rsquo;s help center answered a plain web request.
                  NetSuite&rsquo;s product page refused one and was read in a browser. Oracle changes these pages, so
                  check the linked page before you act on one.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  What we did not do: read Oracle&rsquo;s SuiteAnswers articles, which need a NetSuite login, test
                  the six other firms or products named above, or measure results for any client.
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
          eyebrow="NetSuite AI agents FAQ"
          headline="NetSuite AI questions, answered plainly."
          lead={`What controllers, operations leads and NetSuite administrators ask before adding an agent. Platform answers are from Oracle's own help center as read on ${CHECKED_ON}.`}
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 16. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="NetSuite AI agents"
          headline="Keep NetSuite as the record. Add an agent your team can check."
          sub="Tell us one job that fills your team's day in NetSuite. We say what Oracle's own tools already cover, show a first version on your own data and stay on after launch."
          primaryCta={{ label: 'Scope my agent', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="Demo on your own data before a contract. Fixed quote in writing. You own the code."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
