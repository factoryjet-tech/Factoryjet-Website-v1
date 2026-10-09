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

import OdooRoutesDiagram from './OdooRoutesDiagram';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/odoo-ai-agents, built 2026-10-09.

   Why this page exists: on 9 Oct 2026 the question "Who can build an AI agent
   that works inside Odoo?" was read across 14 AI answers and FactoryJet was
   named in none. The assistants cited small Odoo firms' own service pages.
   /services/erp-ai-agents is the overview across four systems. This page is
   Odoo only and goes deeper. Keep "ERP AI" head terms out of its title and H1
   so the two pages do not compete.
   US monthly searches (DataForSEO, location 2840, pulled 2026-10-09):
   "odoo ai" 260 (KD 12), "odoo api" 260, "odoo mcp" 110, "odoo shopify
   connector" 90, "odoo 20" 70, "odoo mcp server" 70, "odoo quickbooks
   integration" 70, "odoo ai agent" 50 (KD 0), "odoo shopify integration" 40,
   "odoo automation" 30, "odoo woocommerce connector" 30, "odoo 19 ai" 20.
   An AI Overview showed on 12 of 14 result pages. FactoryJet was in no top 20.

   What we found that the brief did not have: Odoo 20.0 was released in
   September 2026 (Odoo's own support table). We compared the 19.0 and 20.0
   documentation on 2026-10-09. Four things changed for agents: topics are now
   skills, the built-in skills include Create Records and Update Records, a
   database can act as an MCP server, and the release notes say all AI features
   need in-app purchase credits. The 19.0 sentence "The standard Ask AI agent
   cannot make changes to the database" is not on the 20.0 page. Every claim
   below names the version it was read in.

   Truth rules for anyone editing this file:
   - Every Odoo fact (API names, dates, plans, limits) was read from Odoo's own
     page on 2026-10-09 and links to it through the SRC map below. If you
     change one, re-fetch the page first and update CHECKED_ON.
   - Bhavesh confirmed on 2026-10-09 that FactoryJet has worked on Odoo,
     NetSuite, SAP Business One, ERPNext and custom ERPs, on RFQs, daily
     bookkeeping, and purchase and sales order generation, and that FactoryJet
     runs its own customer records on ERPNext.
   - ONE client is named, in ONE block (the work section): Sow Easy, with the
     wording he approved for /services/erp-ai-agents that day. Not in the hero,
     the meta description, the schema or the FAQ. The two QuickBooks projects
     in progress stay unnamed. No results are claimed for any of them.
   - No FactoryJet prices. The only dollar figures are sourced market ranges
     inside the two cost FAQ answers. The Odoo AI credit figure is Odoo's own
     listed fee, shown to us in euros, and is labelled as such.
   - The six "other names" restate each firm's own page as read that day. We
     have not worked with them and did not test their products.
   - Partner status is left out on purpose (Bhavesh, 2026-10-09). The page
     raises no partner title, ours or another firm's. Do not add one.
   - He also confirmed that day: the AI and hosting bills may sit in the
     client's own accounts at cost, and FactoryJet keeps managing the servers,
     the AI models, the API connections and the upkeep either way.
   - Mirrors /services/erp-ai-agents for components and schema.

   Schema: WebPage + Service + FAQPage + ItemList + BreadcrumbList.
   Organization is rendered once sitewide by src/app/layout.tsx and referenced
   here by @id. The FAQPage mainEntity is generated from the exact FAQ_ITEMS
   array the visible <FAQ> component renders. There is no second array.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/odoo-ai-agents';
const PAGE_TITLE = 'Odoo AI Agent Development for Odoo 19 and 20 | FactoryJet';
const PAGE_DESC =
  'We design, build and support AI agents inside Odoo 19 and Odoo 20. They draft quotations, sales orders, purchase orders and bills for a person to approve.';
const PAGE_PUBLISHED = '2026-10-09';
const PAGE_MODIFIED = '2026-10-09';
const CHECKED_ON = '9 Oct 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/services/odoo-ai-agents';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'odoo ai agent',
    'odoo ai agents',
    'odoo ai',
    'odoo ai integration',
    'odoo ai agent development',
    'odoo 19 ai',
    'odoo 20 ai',
    'odoo mcp',
    'odoo mcp server',
    'odoo json-2 api',
    'odoo automation',
    'odoo ai chatbot',
    'odoo chatgpt integration',
    'odoo shopify connector',
    'odoo woocommerce connector',
    'odoo quickbooks integration',
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
        alt: 'FactoryJet, AI agents inside Odoo for US businesses',
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
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD, so they cannot drift.
 *  The ERP AI agents page is the overview this page sits under. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'ERP AI Agents', url: 'https://factoryjet.com/services/erp-ai-agents' },
  { name: 'Odoo AI Agents', url: CANONICAL_URL },
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
  name: 'Odoo AI Agent Development',
  serviceType:
    'AI agents for Odoo, Odoo AI integration, Odoo AI agent development, Odoo MCP server setup, quotation and RFQ automation in Odoo, sales order and purchase order automation in Odoo, bookkeeping automation in Odoo, Odoo integration with WooCommerce, Shopify and QuickBooks',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'FactoryJet designs, builds, tests and supports AI agents that work inside Odoo 19 and Odoo 20, on Odoo Online, Odoo.sh or an on-premise server. An agent reads an incoming request such as a customer request for quote, a purchase order or a vendor bill, looks up products, prices and stock in Odoo, and drafts the record for a person to confirm. Work covers reading the Odoo version, hosting and plan, checking what Odoo already ships for the job, writing down the rules, building on a test copy, a period of running beside the team, launch and support after launch.',
  url: CANONICAL_URL,
};

/* ── Sources. One map, used by every inline source link (the `short` label) AND
   by the visible "Sources" list near the foot of the page (the full `label`).
   Each URL was opened on 2026-10-09 and the supporting sentence read before the
   claim was written. The ledger with the quoted words is kept outside the repo. ── */
const SRC = {
  odooSupport: {
    short: 'Odoo docs: supported versions',
    label: 'Odoo 20.0 documentation: Standard and extended support (release dates)',
    url: 'https://www.odoo.com/documentation/20.0/administration/standard_extended_support.html',
  },
  odooRelease20: {
    short: 'Odoo 20 release notes',
    label: 'Odoo: Odoo 20 Release Notes',
    url: 'https://www.odoo.com/odoo-20-release-notes',
  },
  odooRelease19: {
    short: 'Odoo 19 release notes',
    label: 'Odoo: Odoo 19 Release Notes',
    url: 'https://www.odoo.com/odoo-19-release-notes',
  },
  odooAi19: {
    short: 'Odoo 19 docs: AI',
    label: 'Odoo 19.0 documentation: AI',
    url: 'https://www.odoo.com/documentation/19.0/applications/productivity/ai.html',
  },
  odooAi20: {
    short: 'Odoo 20 docs: AI',
    label: 'Odoo 20.0 documentation: AI',
    url: 'https://www.odoo.com/documentation/20.0/applications/productivity/ai.html',
  },
  odooAgents19: {
    short: 'Odoo 19 docs: AI agents',
    label: 'Odoo 19.0 documentation: AI agents',
    url: 'https://www.odoo.com/documentation/19.0/applications/productivity/ai/agents.html',
  },
  odooAgents20: {
    short: 'Odoo 20 docs: AI agents',
    label: 'Odoo 20.0 documentation: AI agents',
    url: 'https://www.odoo.com/documentation/20.0/applications/productivity/ai/agents.html',
  },
  odooKeys19: {
    short: 'Odoo 19 docs: AI API keys',
    label: 'Odoo 19.0 documentation: AI API keys',
    url: 'https://www.odoo.com/documentation/19.0/applications/productivity/ai/apikeys.html',
  },
  odooKeys20: {
    short: 'Odoo 20 docs: AI API keys',
    label: 'Odoo 20.0 documentation: AI API keys (under construction on the day we read it)',
    url: 'https://www.odoo.com/documentation/20.0/applications/productivity/ai/apikeys.html',
  },
  odooIap: {
    short: 'Odoo IAP: Odoo AI credits',
    label: 'Odoo In-App Services: Odoo AI (credits and packs)',
    url: 'https://iap.odoo.com/iap/in-app-services/867',
  },
  odooServerActions: {
    short: 'Odoo docs: AI server actions',
    label: 'Odoo 20.0 documentation: AI server actions',
    url: 'https://www.odoo.com/documentation/20.0/applications/productivity/ai/server-actions.html',
  },
  odooLiveChat: {
    short: 'Odoo docs: AI live chat',
    label: 'Odoo 20.0 documentation: AI live chat',
    url: 'https://www.odoo.com/documentation/20.0/applications/productivity/ai/live-chat.html',
  },
  odooMcp: {
    short: 'Odoo docs: AI MCP server',
    label: 'Odoo 20.0 documentation: AI MCP server',
    url: 'https://www.odoo.com/documentation/20.0/applications/productivity/ai/mcp_server.html',
  },
  odooMcpTools: {
    short: 'Odoo docs: MCP tools',
    label: 'Odoo 20.0 documentation: Available MCP tools',
    url: 'https://www.odoo.com/documentation/20.0/applications/productivity/ai/mcp_server/mcp_tools.html',
  },
  odooApi: {
    short: 'Odoo docs: External JSON-2 API',
    label: 'Odoo 20.0 documentation: External JSON-2 API',
    url: 'https://www.odoo.com/documentation/20.0/developer/reference/external_api.html',
  },
  odooPricing: {
    short: 'Odoo pricing',
    label: 'Odoo: Pricing and plans',
    url: 'https://www.odoo.com/pricing',
  },
  odooOnline: {
    short: 'Odoo docs: Odoo Online',
    label: 'Odoo 20.0 documentation: Odoo Online',
    url: 'https://www.odoo.com/documentation/20.0/administration/odoo_online.html',
  },
  odooHosting: {
    short: 'Odoo docs: Hosting',
    label: 'Odoo 20.0 documentation: Hosting',
    url: 'https://www.odoo.com/documentation/20.0/administration/hosting.html',
  },
  odooSh: {
    short: 'Odoo docs: Odoo.sh branches',
    label: 'Odoo 20.0 documentation: Odoo.sh branches',
    url: 'https://www.odoo.com/documentation/20.0/administration/odoo_sh/getting_started/branches.html',
  },
  odooAccess: {
    short: 'Odoo docs: Access rights',
    label: 'Odoo 20.0 documentation: Access rights',
    url: 'https://www.odoo.com/documentation/20.0/applications/general/users/access_rights.html',
  },
  odooApproval: {
    short: 'Odoo docs: Approval rules',
    label: 'Odoo 20.0 documentation: Approval rules',
    url: 'https://www.odoo.com/documentation/20.0/applications/studio/approval_rules.html',
  },
  odooAutomation: {
    short: 'Odoo docs: Automation rules',
    label: 'Odoo 20.0 documentation: Automation rules',
    url: 'https://www.odoo.com/documentation/20.0/applications/studio/automated_actions.html',
  },
  odooWebhooks: {
    short: 'Odoo docs: Webhooks',
    label: 'Odoo 20.0 documentation: Webhooks',
    url: 'https://www.odoo.com/documentation/20.0/applications/studio/automated_actions/webhooks.html',
  },
  odooQuotes: {
    short: 'Odoo docs: Create quotations',
    label: 'Odoo 20.0 documentation: Create quotations',
    url: 'https://www.odoo.com/documentation/20.0/applications/sales/sales/sales_quotations/create_quotations.html',
  },
  odooRfq: {
    short: 'Odoo docs: Requests for quotation',
    label: 'Odoo 20.0 documentation: Requests for quotation',
    url: 'https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/purchase/manage_deals/rfq.html',
  },
  odooEdi: {
    short: 'Odoo docs: Purchase order import',
    label: 'Odoo 20.0 documentation: EDI purchase-to-sales order import',
    url: 'https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/purchase/advanced/edi.html',
  },
  odooReorder: {
    short: 'Odoo docs: Reordering rules',
    label: 'Odoo 20.0 documentation: Reordering rules',
    url: 'https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/inventory/warehouses_storage/replenishment/reordering_rules.html',
  },
  odooDigitize: {
    short: 'Odoo docs: Document digitization',
    label: 'Odoo 20.0 documentation: Document digitization',
    url: 'https://www.odoo.com/documentation/20.0/applications/finance/accounting/vendor_bills/invoice_digitization.html',
  },
  odooBills: {
    short: 'Odoo docs: Vendor bills',
    label: 'Odoo 20.0 documentation: Manage vendor bills (3-way matching)',
    url: 'https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/purchase/manage_deals/manage.html',
  },
  odooReconcile: {
    short: 'Odoo docs: Bank reconciliation',
    label: 'Odoo 20.0 documentation: Bank reconciliation',
    url: 'https://www.odoo.com/documentation/20.0/applications/finance/accounting/bank/reconciliation.html',
  },
  odooSalesDocs: {
    short: 'Odoo docs: Sales and connectors',
    label: 'Odoo 20.0 documentation: Sales (Amazon, TikTok Shop, Shopee, Lazada and Gelato connectors)',
    url: 'https://www.odoo.com/documentation/20.0/applications/sales/sales.html',
  },
  odooWebsiteImport: {
    short: 'Odoo docs: Website creation',
    label: 'Odoo 20.0 documentation: Website creation (product import from Shopify and WooCommerce)',
    url: 'https://www.odoo.com/documentation/20.0/applications/websites/website/website_creation.html',
  },
  odooAppsShopify: {
    short: 'Odoo Apps Store: Shopify search',
    label: 'Odoo Apps Store: search results for Shopify',
    url: 'https://apps.odoo.com/apps/modules/browse?search=shopify',
  },
  odooAppsWoo: {
    short: 'Odoo Apps Store: WooCommerce search',
    label: 'Odoo Apps Store: search results for WooCommerce',
    url: 'https://apps.odoo.com/apps/modules/browse?search=woocommerce',
  },
  odooAppsQb: {
    short: 'Odoo Apps Store: QuickBooks search',
    label: 'Odoo Apps Store: search results for QuickBooks',
    url: 'https://apps.odoo.com/apps/modules/browse?search=quickbooks',
  },
  productCrafters: {
    short: 'ProductCrafters cost breakdown, 2026',
    label: 'ProductCrafters: AI Agent Development Cost, $5K to $180K+ (2026 Pricing Breakdown)',
    url: 'https://productcrafters.io/blog/how-much-does-it-cost-to-build-an-ai-agent/',
  },
  bista: {
    short: 'Bista Solutions: Odoo AI agents',
    label: 'Bista Solutions: Odoo AI Agent, Transforming How Businesses Operate',
    url: 'https://www.bistasolutions.com/odoo-ai-agents/',
  },
  silent: {
    short: 'Silent Infotech: Odoo AI agents',
    label: 'Silent Infotech: Odoo AI Agent Development Company',
    url: 'https://silentinfotech.com/odoo-ai-agents',
  },
  much: {
    short: 'Much Consulting: Odoo 19 agent setup',
    label: 'Much Consulting: How to set up any AI agent in Odoo 19 (19 June 2026)',
    url: 'https://muchconsulting.com/blog/odoo-2/odoo-ai-agents-164',
  },
  master: {
    short: 'Master Software Solutions: Odoo AI development',
    label: 'Master Software Solutions: Odoo AI Development, From Native AI Agents to Custom LLM Integrations (September 30, 2026)',
    url: 'https://www.mastersoftwaresolutions.com/odoo-ai-development',
  },
  certum: {
    short: 'Certum Solutions: Odoo 19 AI agents',
    label: 'Certum Solutions: Odoo 19 AI Agents, How to Set Up, Train and Use AI Automation in Your ERP',
    url: 'https://www.certumsolutions.com/library/odoo-ai-setup-your-own-agents',
  },
  synconics: {
    short: 'Synconics: Odoo AI services',
    label: 'Synconics: Odoo AI Services, Odoo AI Agents, Automation and AI Extension',
    url: 'https://www.synconics.com/odoo-ai-services',
  },
} as const;

type SrcKey = keyof typeof SRC;

/* ── FAQ. Single array, rendered visibly below AND used to build the FAQPage
   JSON-LD. Never hand-duplicate this list near the ld+json block.
   The first four questions are buyer questions from the AI answer sweep of
   2026-10-09, kept in the buyer's words (two were asked about ERPs in general
   and are worded for Odoo here). The rest come from the questions Google shows
   on US Odoo AI result pages (DataForSEO, location 2840, same day) and from
   this page's own keywords. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'hire', label: 'Who builds it' },
  { key: 'odoo', label: 'What Odoo ships' },
  { key: 'connect', label: 'Connecting to Odoo' },
  { key: 'jobs', label: 'What the agent does' },
  { key: 'working', label: 'Working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── Who builds it ────────────────────────────────────────────────
  {
    category: 'hire',
    question: 'Who can build an AI agent that works inside Odoo?',
    answer:
      'Three kinds of team. Odoo implementation firms set up the agents that ship in Odoo 19 and Odoo 20. AI agent builders such as FactoryJet design, build and support custom agents that reach Odoo through its External JSON-2 API or its MCP server. Your own developers can do either. Ask whoever you pick which Odoo version and hosting they have built on, and how a person approves each record.',
  },
  {
    category: 'hire',
    question: 'Who are the top companies adding AI agents to Odoo ERP?',
    answer:
      'No neutral ranking exists, so be wary of a list that claims one. On 9 Oct 2026 a US search for Odoo AI terms showed Bista Solutions, Silent Infotech, Much Consulting, Master Software Solutions, Certum Solutions and Synconics. Each is described from its own page further up. FactoryJet wrote this page and is one option. Pick by fit: the Odoo version you run, where it is hosted, and the job.',
  },
  {
    category: 'hire',
    question: 'Which company can build an AI agent that automates RFQs and quotes from our ERP?',
    answer:
      "FactoryJet does this work, on Odoo and on other systems. The agent reads the customer's request, matches each line to a product in Odoo, applies that customer's pricelist and checks stock. It saves a draft quotation in the Sales app. Your estimator approves it before anything is sent. Before a contract, we show this working on a quote you have already sent.",
  },
  {
    category: 'hire',
    question: 'Where can I find a list of vendors offering Odoo AI integration services?',
    answer:
      "Three places. Odoo's pricing page points larger companies to its own directory of implementation firms. The Odoo Apps Store lists ready-made modules. On 9 Oct 2026 a search there returned 235 apps for Shopify and 83 for QuickBooks. And this page lists six firms a US search showed that day, each described from its own page. FactoryJet works across Odoo and other systems, so the route we suggest is not tied to one product.",
  },
  // ── What Odoo ships ──────────────────────────────────────────────
  {
    category: 'odoo',
    question: 'Does Odoo use AI?',
    answer:
      'Yes. Odoo 19, released in September 2025, added an AI app with agents, an Ask AI assistant, AI fields and AI server actions. Odoo 20, released in September 2026, added agents that create and update records and a built-in MCP server. Older features are still there too, such as reading vendor bills with OCR, software that turns a scanned page into data.',
  },
  {
    category: 'odoo',
    question: 'Is Odoo AI free?',
    answer:
      "Not in Odoo 20. Its release notes say all AI features now need credits, bought as in-app purchases. On 9 Oct 2026 Odoo's page for the Odoo AI service listed 20 free credits, then packs of 10 to 1,000 credits, shown to us at 1.00 euro a credit. In Odoo 19 the documentation says Odoo Online needs no AI key of your own, while Odoo.sh and on-premise databases do. Odoo's pricing page also lists Agentic AI under its Custom plan.",
  },
  {
    category: 'odoo',
    question: 'What is an Odoo AI agent?',
    answer:
      "Odoo's documentation calls it a smart assistant that understands natural language and performs tasks by using Odoo tools. Each agent has a system prompt, a set of skills (called topics in Odoo 19) that carry its instructions and tools, and sources such as PDFs, web links and Knowledge articles. An agent with no skills can only give information. It cannot change the database.",
  },
  {
    category: 'odoo',
    question: 'What is new for AI agents in Odoo 20?',
    answer:
      'Four changes stood out when we compared the Odoo 19 and Odoo 20 pages on 9 Oct 2026. Topics are now called skills. The built-in skills now include Create Records and Update Records. A database can act as an MCP server, so an outside AI client can connect to it. And the release notes say all AI features now need in-app purchase credits.',
  },
  {
    category: 'odoo',
    question: 'Can the Ask AI agent change records in Odoo?',
    answer:
      "It depends on the version. Odoo's 19.0 documentation says the standard Ask AI agent cannot make changes to the database. It can open views and display reports. The 20.0 version of that page no longer carries the sentence, and Odoo 20 lists Create Records and Update Records among its built-in skills. Check which version you run before you count on either answer.",
  },
  {
    category: 'odoo',
    question: 'Does Odoo integrate with ChatGPT, Gemini or Claude?',
    answer:
      "Odoo's 19.0 documentation says the AI app supports Gemini and OpenAI, the maker of ChatGPT, as providers. The Odoo 20 release notes say you select a provider and Odoo picks the model for the task. Claude comes in through a different door. Odoo's MCP server page names Claude Code, Antigravity and Codex as examples of AI clients that can connect to an Odoo 20 database.",
  },
  // ── Connecting to Odoo ───────────────────────────────────────────
  {
    category: 'connect',
    question: 'What is the Odoo MCP server?',
    answer:
      "MCP, the Model Context Protocol, is an open standard that lets an AI model work with outside software. In Odoo 20 your database can act as an MCP server. You create an API key with the MCP scope and point an AI client at your database address plus /mcp. By default the client gets five tools, all for reading. Create Records and Update Records stay hidden until someone switches them on in Odoo's settings. Odoo documents this for version 20 and for SaaS 19.4 on Odoo Online. It has no such page for 19.0.",
  },
  {
    category: 'connect',
    question: 'What is the Odoo JSON-2 API?',
    answer:
      'It is the documented door outside software uses to read and write Odoo records. It was new in Odoo 19 and lives at /json/2 on your database address. A request names a model and a method, and carries an API key. Odoo checks every call against the access rights, record rules and field access of the user who owns that key.',
  },
  {
    category: 'connect',
    question: 'Is Odoo removing XML-RPC?',
    answer:
      "Yes. Odoo's documentation marks the XML-RPC and JSON-RPC addresses as deprecated. The 20.0 page says the common and object services are scheduled for removal in Odoo 22, due in fall 2028, and in Online 21.1, due in winter 2027. The database service is already gone in Odoo 20. An integration built today should use JSON-2, or have a rewrite planned.",
  },
  {
    category: 'connect',
    question: 'Do I need a certain Odoo plan for an agent to connect?',
    answer:
      "For the External API, yes. Odoo's documentation says access to data through the external API is only available on Custom pricing plans, and is not available on the One App Free or Standard plans. Odoo's pricing page also lists Agentic AI under Custom. Check your plan first. It decides which routes are open before anyone designs anything.",
  },
  {
    category: 'connect',
    question: 'Does this work on Odoo Online, Odoo.sh and on-premise?',
    answer:
      'Yes, with different routes. Odoo Online cannot run custom modules or Apps Store modules, so the agent lives outside Odoo and calls the API. Odoo.sh and on-premise can also carry a custom module, which helps when several steps must succeed or fail together. Odoo Online also receives in-between versions every two to three months, so an agent there needs re-testing more often.',
  },
  // ── What the agent does ──────────────────────────────────────────
  {
    category: 'jobs',
    question: 'Can an AI agent create sales orders and purchase orders in Odoo?',
    answer:
      "Yes, within the access rights of its user. In Odoo a quotation becomes a sales order when it is confirmed, and a request for quotation becomes a purchase order when someone clicks Confirm Order. We set the agent up to save the draft and stop there. A person confirms. Odoo's Studio approval rules can also put a named approver on the confirm button itself.",
  },
  {
    category: 'jobs',
    question: 'What is the difference between an Odoo automation rule and an AI agent?',
    answer:
      "An automation rule runs fixed actions when a trigger fires, such as creating an activity when a field changes. It suits a rule you can write as a condition. An agent reads untidy input, such as an emailed part list, and works out what to do with it. Odoo also offers a middle step called an AI server action, where the AI picks a tool and the tool's own code does the work.",
  },
  {
    category: 'jobs',
    question: 'Can AI do bookkeeping in Odoo?',
    answer:
      'Parts of it, and Odoo already ships some. Odoo reads vendor bills with OCR and AI, matches bank lines using default rules and reconciliation models, and has a 3-way matching setting in Purchase. A custom agent picks up what those leave behind: the bill with no purchase order, the bank line nothing matched. It prepares the batch. Your bookkeeper approves it.',
  },
  {
    category: 'jobs',
    question: 'Does Odoo have a Shopify connector?',
    answer:
      "Not in Odoo's own documentation, as far as we could find on 9 Oct 2026. The Odoo 20 pages document connectors for Amazon, TikTok Shop, Shopee, Lazada and Gelato. Shopify appears on one page, as a one-time product import when you build an Odoo website. Third-party modules exist. The Odoo Apps Store returned 235 apps for a Shopify search, though Odoo Online cannot install them.",
  },
  {
    category: 'jobs',
    question: 'Can Odoo connect to WooCommerce?',
    answer:
      "Yes, through a third-party module or a custom integration. Odoo's own documentation mentions WooCommerce on one page, for importing products into an Odoo website. The Odoo Apps Store returned 164 apps for a WooCommerce search on 9 Oct 2026, though Odoo Online cannot install Apps Store modules. FactoryJet has joined a WooCommerce trade store to Odoo, with Odoo kept as the master for stock and pricing. That join is tested against Odoo's staging system, and the store's launch is still ahead.",
  },
  {
    category: 'jobs',
    question: 'Does Odoo integrate with QuickBooks?',
    answer:
      "Odoo's documentation has no QuickBooks connector. The name appears on two pages, the United States and Canada accounting pages, as a check printing layout. The Odoo Apps Store returned 83 apps for a QuickBooks search on 9 Oct 2026. When a business keeps its books in QuickBooks and its stock in Odoo, the first decision is which system owns each number. Our Shopify QuickBooks integration page shows how we make that call.",
  },
  {
    category: 'jobs',
    question: 'Will the agent change Odoo records without anyone checking?',
    answer:
      "No. In the builds on this page the agent saves a draft and a named person confirms it. The agent has its own Odoo user with only the access the job needs, which is what Odoo's API documentation recommends. If you use Odoo's own AI server actions instead, know what the documentation says about them. A tool the AI calls will execute unconditionally unless its code prevents it.",
  },
  {
    category: 'jobs',
    question: 'Is my Odoo data safe with an AI agent?',
    answer:
      "Four controls do the work. The agent signs in as its own bot user with the fewest permissions the job needs. Its API key expires, because Odoo does not allow a key to last more than three months. Every write is a draft that a person confirms. And Odoo's access log records the bot account, so you can see what the agent did.",
  },
  // ── Working with us ──────────────────────────────────────────────
  {
    category: 'working',
    question: 'How much does an Odoo AI agent cost?',
    answer:
      "It depends on how many kinds of record the agent touches and whether it writes to them. Building a custom AI agent costs roughly $5,000 to more than $180,000, according to development firm ProductCrafters' 2026 breakdown. Setting up an agent that already ships in Odoo is a smaller job than a custom build. FactoryJet quotes a fixed price in writing after a short scoping call.",
  },
  {
    category: 'working',
    question: 'What does it cost to run an Odoo AI agent each month?',
    answer:
      "There are two bills for a custom agent. The AI model charges for each request, and the agent needs somewhere to run. ProductCrafters' 2026 breakdown puts monthly infrastructure for a custom-built agent at $500 to $10,000. If you prefer, both sit in your own accounts and you pay those bills directly, at cost. Whose account pays does not change who does the work. We keep managing the servers, the AI models, the API connections and the upkeep, so your team never has to. Odoo bills its own AI features separately, in Odoo credits.",
  },
  {
    category: 'working',
    question: 'How long does it take to build an Odoo AI agent?',
    answer:
      'It depends on the job and on your Odoo. An agent that only reads and answers is quicker than one that drafts orders. Access is often the slow part: the right pricing plan, a test copy of the database, a user for the agent, and sign-off from whoever owns Odoo. The timeline goes in writing with the quote.',
  },
  {
    category: 'working',
    question: 'Can I see it working before I sign?',
    answer:
      'Yes. Before a contract, we show working software on your own data. For an Odoo agent that usually means one real document, such as a request you have already quoted, run through a first version so you can compare its draft with what your team sent.',
  },
  {
    category: 'working',
    question: 'What happens to the agent when Odoo upgrades?',
    answer:
      "It gets re-tested. Odoo's support table shows a new major version each fall since 2022, and Odoo Online also receives in-between versions every two to three months. Names change too. Topics became skills between Odoo 19 and Odoo 20. The same team that built the agent watches its logs, renews its API key before the three-month limit and fixes what breaks. Our AI agent monitoring and support page covers that service.",
  },
  {
    category: 'working',
    question: 'Who owns the agent and its code?',
    answer:
      'You do. The agent is built for you and the code is yours. It can run in your own cloud account and with your own AI key, so nothing depends on a FactoryJet login. We still look after it day to day: the servers, the AI models, the API connections and the updates. If you later move the work in-house or to another firm, the code and its notes go with you.',
  },
  {
    category: 'working',
    question: 'Do you work with other systems besides Odoo?',
    answer:
      'Yes. FactoryJet has worked on Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs, on RFQ automation, daily bookkeeping, and purchase and sales order generation. We run our own customer records on ERPNext. Our ERP AI agents page is the overview across all of them. That range matters when a job crosses two systems, such as Odoo and an online store.',
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

/* ── What Odoo ships itself. Seven rows, each restating Odoo's own pages as
   read on 2026-10-09. The `version` tag says where we read it. ── */
const SHIPS: ReadonlyArray<{ what: string; version: string; note: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    what: 'Ask AI',
    version: 'Odoo 19 and 20',
    note: "An assistant you open from any screen. Odoo's documentation says it answers questions, opens views and improves text. The 19.0 page adds that the standard Ask AI agent cannot make changes to the database. The 20.0 page no longer carries that sentence.",
    sources: ['odooAi19', 'odooAi20'],
  },
  {
    what: 'Agents you set up in the AI app',
    version: 'Odoo 19 and 20',
    note: 'Each agent has a system prompt, sources such as PDFs and Knowledge articles, and skills. A skill holds instructions and tools, and Odoo 19 calls it a topic. Odoo says an agent with no skills can only give information. Odoo 19 ships three topics. Odoo 20 lists eight skills, with Create Records and Update Records among them.',
    sources: ['odooAgents19', 'odooAgents20'],
  },
  {
    what: 'AI server actions',
    version: 'Odoo 19 and 20',
    note: "A step inside Odoo's own automation where the AI picks a tool and the tool's code does the work. Odoo's page is plain about the split. The AI does not enforce business rules, and a tool it calls will execute unconditionally unless the code itself prevents it.",
    sources: ['odooServerActions', 'odooAutomation'],
  },
  {
    what: 'Bill reading and bank matching',
    version: 'Accounting',
    note: 'Odoo reads vendor bills with OCR, software that turns a scanned page into data, and fills in a draft bill. It matches bank lines with default rules and reconciliation models. Neither needs an agent.',
    sources: ['odooDigitize', 'odooReconcile'],
  },
  {
    what: 'An MCP server',
    version: 'Odoo 20, and Online 19.4',
    note: 'MCP, the Model Context Protocol, is an open standard that lets an AI model work with outside software. An Odoo 20 database can act as an MCP server at its own address plus /mcp. An outside AI client signs in with an API key. By default it gets five tools, all for reading.',
    sources: ['odooMcp', 'odooMcpTools'],
  },
  {
    what: 'A choice of AI model',
    version: 'Odoo 19 and 20',
    note: 'The 19.0 documentation says the AI app supports Gemini and OpenAI as providers. The Odoo 20 release notes say you select a provider and Odoo picks the model for the task. The 20.0 page on AI keys was marked under construction when we read it.',
    sources: ['odooKeys19', 'odooRelease20', 'odooKeys20'],
  },
  {
    what: 'A bill for using it',
    version: 'Changed in Odoo 20',
    note: "The Odoo 20 release notes say all AI features now need credits, bought as in-app purchases. Odoo's page for the service listed 20 free credits, then packs of 10 to 1,000. In Odoo 19, Odoo Online needs no AI key of your own, while Odoo.sh and on-premise databases do.",
    sources: ['odooRelease20', 'odooIap', 'odooKeys19'],
  },
];

/* ── Four signs a custom agent is the right call. ── */
const WHEN: ReadonlyArray<{ n: string; t: string; b: string; sources: ReadonlyArray<SrcKey>; span: string }> = [
  {
    n: '01',
    t: 'The work starts outside Odoo',
    b: "A buyer's email, a PDF purchase order, a spreadsheet of part numbers. Odoo can import an order that another Odoo database exported as an XML file. A free-form document from a customer on a different system needs something to read it first.",
    sources: ['odooEdi'],
    span: 'lg:col-span-7',
  },
  {
    n: '02',
    t: 'The job crosses two systems',
    b: 'Stock lives in Odoo and orders arrive in WooCommerce or Shopify, or the books sit in QuickBooks. Odoo describes its agents as working through Odoo tools. Something has to stand between the two systems and keep one of them as the master.',
    sources: ['odooAgents20'],
    span: 'lg:col-span-5',
  },
  {
    n: '03',
    t: 'Your rules are your own',
    b: 'Customer pricing with exceptions, a margin floor, a vendor you only use for rush jobs. Odoo says tools must enforce business rules explicitly in code. A custom agent is where those rules get written down and tested.',
    sources: ['odooServerActions'],
    span: 'lg:col-span-5',
  },
  {
    n: '04',
    t: 'You need a model or a channel Odoo does not offer',
    b: "Odoo's 19.0 documentation names Gemini and OpenAI as providers for its AI app. If your data rules call for a different model, or the agent has to answer in your help desk or your team chat, it has to live outside Odoo and connect through the API or the MCP server.",
    sources: ['odooKeys19', 'odooMcp'],
    span: 'lg:col-span-7',
  },
];

/* ── Hosting comparison. Every cell restates Odoo's documentation or pricing
   page as read on 2026-10-09. ── */
const HOSTING_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: 'Odoo Online' },
  { label: 'Odoo.sh' },
  { label: 'On-premise' },
];

const HOSTING_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'What it is',
    values: [
      'Odoo hosts and manages the database',
      "Odoo's platform with development, staging and production branches",
      'You download Odoo and host it yourself',
    ],
  },
  {
    feature: 'Custom modules',
    values: [
      'No. Odoo says it is incompatible with custom modules and Apps Store modules',
      'Yes. Odoo says it lets you develop or use custom modules',
      'Yes. Moving to Odoo Online later means uninstalling non-standard apps',
    ],
  },
  {
    feature: 'How an outside agent connects',
    values: [
      'External JSON-2 API, on the Custom plan only',
      'External JSON-2 API. Odoo.sh hosting is part of the Custom plan',
      'External JSON-2 API. On-premise hosting is part of the Custom plan',
    ],
  },
  {
    feature: "Odoo's MCP server",
    values: ['Documented for version 20 and for SaaS 19.4', 'Documented for version 20', 'Documented for version 20'],
  },
  {
    feature: 'Versions you receive',
    values: [
      'Major versions, plus in-between versions every two to three months',
      'Major versions only',
      'Major versions only',
    ],
  },
  {
    feature: 'AI keys in Odoo 19',
    values: ['Not required', 'Required', 'Required'],
  },
  {
    feature: 'A test copy',
    values: [
      'A duplicate with emails and payments switched off. It expires after 15 days, five at most',
      'A staging branch: a neutralized copy of production, deleted after one month',
      'A backup you restore on your own server',
    ],
  },
  {
    feature: 'Old XML-RPC addresses end',
    values: ['Online 21.1, due winter 2027', 'Odoo 22, due fall 2028', 'Odoo 22, due fall 2028'],
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
    title: 'Customer RFQ to quotation',
    body: 'A buyer emails a request for quote. The agent drafts a quotation in the Sales app, and your estimator checks it before it goes out.',
    items: [
      'Reads the email and its attachments, whether the part list is typed in the message, a PDF or a spreadsheet',
      'Matches each line to a product in Odoo. A line it cannot match is flagged for a person, not guessed',
      "Applies that customer's pricelist and checks stock or lead time",
      'Saves the quotation as a draft. Nothing reaches the buyer until someone sends it',
    ],
    note: 'Before a contract, we show working software on your own data. For this job that means a quote you have already sent, drafted again by the agent from your own price rules, so you can lay the two side by side.',
    sources: ['odooQuotes'],
    span: 'lg:col-span-7',
  },
  {
    n: '02',
    title: 'Sales orders from emailed purchase orders',
    body: "A customer's purchase order arrives as an email or a PDF. The agent turns it into a draft quotation, ready to confirm as a sales order.",
    items: [
      'Finds the customer, the delivery address and each product in Odoo',
      "Checks the price on the purchase order against the customer's pricelist and flags a difference",
      'Attaches the original document to the draft so the approver can see both',
    ],
    note: 'Odoo says a quotation officially turns into a sales order once it is confirmed, and its Lock Confirmed Sales setting stops edits after that. So the confirm click is the approval step, and it stays with a person.',
    sources: ['odooQuotes', 'odooEdi'],
    span: 'lg:col-span-5',
  },
  {
    n: '03',
    title: 'Purchase orders to vendors',
    body: 'When stock runs low or a job needs material, Odoo or the agent drafts the RFQ, and a buyer confirms it.',
    items: [
      "Reads the RFQs that Odoo's reordering rules have already created, and the open sales orders behind them",
      'Checks each line against the vendor pricelist Odoo holds for that product',
      "Reads the vendor's reply when it comes back and flags a changed date, price or quantity",
    ],
    note: 'Odoo already does the first half. Its documentation says a reordering rule on the Buy route creates an RFQ when it is triggered, and that clicking Confirm Order turns the RFQ into a purchase order. The agent does the reading and checking in between.',
    sources: ['odooReorder', 'odooRfq'],
    span: 'lg:col-span-5',
  },
  {
    n: '04',
    title: 'Daily bookkeeping',
    body: 'The matching and coding that fills a bookkeeper’s morning, prepared as a batch for that bookkeeper to approve.',
    items: [
      'Picks up the bills Odoo could not read cleanly, and the ones with no purchase order behind them',
      'Pairs a vendor bill with its purchase order and its receipt. Accountants call this a three-way match',
      'Suggests the account for each cost, based on how your team coded the same vendor before',
      'Lists what it could not match, with the reason, at the top of the batch',
    ],
    note: 'Switch on what Odoo ships before paying for anything custom. Odoo reads vendor bills sent to an email address on the journal, can post them automatically for vendors you choose, and has a 3-way matching setting in Purchase. The agent drafts what is left. Your bookkeeper or accountant approves, and nothing is filed with a tax authority.',
    sources: ['odooDigitize', 'odooBills', 'odooReconcile'],
    span: 'lg:col-span-7',
  },
  {
    n: '05',
    title: 'Stock and order answers',
    body: 'Staff or customers ask where an order is, or whether an item is in stock. The agent answers from live Odoo data and changes nothing.',
    items: [
      'A user with read access only, so the agent cannot alter a record even by mistake',
      'Answers in your help desk, your website chat or your team chat',
      'Hands over to a person, with the order already looked up, when the question needs a decision',
    ],
    note: "This is the lightest job on the page, and Odoo ships much of it. Ask AI answers staff inside Odoo. An agent can be attached to Odoo's Live Chat. In Odoo 20 the MCP server gives an outside AI client five reading tools by default. A custom agent earns its place when the question arrives somewhere Odoo is not.",
    sources: ['odooAi19', 'odooLiveChat', 'odooMcp'],
    span: 'lg:col-span-7',
  },
  {
    n: '06',
    title: 'Odoo and your store or QuickBooks',
    body: 'Orders arrive in WooCommerce or Shopify, stock and prices live in Odoo, and the books may sit in QuickBooks. The work is keeping them in step.',
    items: [
      'One system is named the master for each number: stock, price, product identifier, customer',
      'Orders flow from the store into Odoo as drafts, and stock flows back to the store',
      'Anything that fails to match is held in a list for a person, with the reason',
      'On Odoo Online the join lives outside Odoo and calls the API, because Odoo Online cannot install Apps Store modules',
    ],
    note: "We searched Odoo's 20.0 documentation on 9 Oct 2026. It documents connectors for Amazon, TikTok Shop, Shopee, Lazada and Gelato. Shopify and WooCommerce appear on one page, as a one-time product import for an Odoo website. QuickBooks appears as a check printing layout. The Odoo Apps Store returned 235 third-party apps for Shopify, 164 for WooCommerce and 83 for QuickBooks.",
    sources: ['odooSalesDocs', 'odooWebsiteImport', 'odooOnline', 'odooAppsShopify', 'odooAppsWoo', 'odooAppsQb'],
    span: 'lg:col-span-5',
  },
];

/* ── Seven controls. How access rights and approvals keep an agent safe.
   Each one is an Odoo feature, read on 2026-10-09, plus how we use it. ── */
const CONTROLS: ReadonlyArray<{ n: string; t: string; b: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    n: '01',
    t: 'Its own bot user',
    b: "Odoo's API documentation recommends a dedicated bot user for any integration. The bot gets the minimum permissions the job needs, and its password can be left empty so nobody can sign in as it by hand.",
    sources: ['odooApi'],
  },
  {
    n: '02',
    t: 'Access rights, record rules and field access',
    b: 'Odoo checks every API call against all three for the user behind the key. A record rule is a filter on which records a user may see or change. If the bot cannot see payroll, neither can the agent. Odoo says only an administrator can change access rights.',
    sources: ['odooApi', 'odooAccess'],
  },
  {
    n: '03',
    t: 'A key that expires',
    b: 'An API key needs a description and a duration. Odoo does not allow a key to last more than three months, so renewing it goes on the calendar from day one.',
    sources: ['odooApi'],
  },
  {
    n: '04',
    t: 'Draft first',
    b: 'The agent saves a quotation, an RFQ or a bill as a draft. In Odoo the confirm click is what turns a quotation into a sales order, and an RFQ into a purchase order. That click stays with a person.',
    sources: ['odooQuotes', 'odooRfq'],
  },
  {
    n: '05',
    t: 'An approver on the button',
    b: 'Odoo Studio approval rules put named approvers on a button such as Confirm. Odoo says that if an unauthorized user clicks it, an error message is displayed and an activity is created for the approvers. The bot is never an approver.',
    sources: ['odooApproval'],
  },
  {
    n: '06',
    t: 'One method, one transaction',
    b: 'A transaction is a set of changes that all succeed or all fail. Odoo runs every API call in its own transaction, and calls cannot be chained. Odoo calls a string of separate calls especially dangerous around reservations and payments, and says to call one method that does the whole job.',
    sources: ['odooApi'],
  },
  {
    n: '07',
    t: 'A log you can read',
    b: 'Odoo says the access log fields use the bot account. Every record the agent drafted carries its name, so you can list what it drafted last week.',
    sources: ['odooApi'],
  },
];

/* ── Where Odoo agent projects break. All eight come from the linked pages. ── */
const BREAKS: ReadonlyArray<{ t: string; b: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    t: 'The wrong pricing plan',
    b: 'Odoo says access to data through the external API is only available on Custom pricing plans. On One App Free or Standard, an outside agent has no door.',
    sources: ['odooApi', 'odooPricing'],
  },
  {
    t: 'An integration built on the old addresses',
    b: 'The XML-RPC and JSON-RPC addresses are deprecated. Odoo schedules their removal for Odoo 22 in fall 2028, and for Online 21.1 in winter 2027. Odoo Online customers reach the date first.',
    sources: ['odooApi'],
  },
  {
    t: 'A guide written for the other version',
    b: 'Odoo 19 calls them topics. Odoo 20 calls them skills, and its built-in skills and response styles changed too. Instructions written for one version name menus the other does not have.',
    sources: ['odooAgents19', 'odooAgents20'],
  },
  {
    t: 'A third-party module on Odoo Online',
    b: 'Odoo Online is incompatible with custom modules and Apps Store modules. A connector that works on another company’s Odoo.sh may not be installable on yours.',
    sources: ['odooOnline', 'odooHosting'],
  },
  {
    t: 'A tool with no rules in it',
    b: 'Odoo says a tool called by an AI server action executes unconditionally unless the code itself prevents it. The check belongs in the tool, not in the prompt.',
    sources: ['odooServerActions'],
  },
  {
    t: 'Write tools exposed over MCP',
    b: 'Create Records and Update Records are hidden from an MCP client until someone exposes them. Odoo notes that marking a tool as Readonly Tool does not hide it. It only advises the client that the tool is safe to run without asking.',
    sources: ['odooMcp', 'odooMcpTools'],
  },
  {
    t: 'Credits that run out',
    b: "Odoo's in-app purchase page says that when credits run out the feature stops, and that a warning email goes out before the balance reaches your threshold. Someone has to own that balance.",
    sources: ['odooIap', 'odooRelease20'],
  },
  {
    t: 'A webhook tested on the live database',
    b: 'Odoo warns that a badly configured webhook may disrupt the database and take time to revert, and says to test on a duplicate database first.',
    sources: ['odooWebhooks'],
  },
];

/* ── Work we can show. The ONLY place on the page where a client is named, and
   only one is: Sow Easy, in the wording Bhavesh approved on 2026-10-09 for
   /services/erp-ai-agents. The QuickBooks line is his wording too. No results
   are claimed. ── */
const WORK: ReadonlyArray<{ who: string; kind: string; what: string; href: string; cta: string; span: string }> = [
  {
    who: 'Sow Easy',
    kind: 'B2B distribution · Odoo and WooCommerce',
    what: 'A WooCommerce trade store joined to Odoo. Odoo stays the master for stock, pricing and product identifiers, and the store reads from it. The join is tested against Odoo’s staging system, and the store’s launch is still ahead.',
    href: '/case-studies/sow-easy-distributor-portal',
    cta: 'Read the case study',
    span: 'lg:col-span-7',
  },
  {
    who: 'Two QuickBooks projects, unnamed',
    kind: 'Shopify · QuickBooks Online and Enterprise',
    what: 'In progress on 9 Oct 2026: one Shopify store joined to QuickBooks Online, and one joined to QuickBooks Enterprise, the desktop edition. We cannot name either client yet. Neither is an Odoo project.',
    href: '/services/shopify-quickbooks-integration',
    cta: 'See how that work is done',
    span: 'lg:col-span-5',
  },
  {
    who: 'Range across systems',
    kind: 'Odoo · NetSuite · SAP Business One · ERPNext · custom',
    what: 'FactoryJet has worked on Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs, on RFQ automation, daily bookkeeping, and purchase and sales order generation. We run our own customer records on ERPNext.',
    href: '/services/erp-ai-agents',
    cta: 'See the overview across systems',
    span: 'lg:col-span-12',
  },
];

/* ── Who this is for. Examples of the kinds of business the work suits, not a
   client list. Pictures were generated on 2026-10-09 and checked at the size
   they ship. ── */
const INDUSTRIES: ReadonlyArray<{ img: string; alt: string; t: string; b: string }> = [
  {
    img: `${IMG}/trade-counter-order.webp`,
    alt: 'A man in a dark green work shirt slides a plain cardboard box across a wooden counter to a woman in a mustard jacket, with shelves of boxes behind him and an orange clipboard on the counter',
    t: 'Wholesale and trade distributors',
    b: 'Purchase orders come in by email all day. Each one becomes a draft in Odoo, checked against that customer’s pricelist.',
  },
  {
    img: `${IMG}/furniture-workshop-bench.webp`,
    alt: 'A woman in a navy apron tightens an orange bar clamp on an unfinished wooden chair frame at a workbench in a bright workshop',
    t: 'Manufacturers and workshops',
    b: 'Requests arrive as drawings and part lists. The agent drafts the quotation from your Odoo products and prices, and your estimator checks it.',
  },
  {
    img: `${IMG}/purchasing-sample-parts.webp`,
    alt: 'A man in a light blue shirt holds up two small steel brackets to compare them at a desk with three more brackets and an orange folder',
    t: 'Purchasing teams',
    b: 'Odoo raises the RFQs. The agent checks each one against the vendor pricelist and reads the replies, and a buyer confirms.',
  },
  {
    img: `${IMG}/bookkeeper-sorting-bills.webp`,
    alt: 'A woman in a cream cardigan, seen from behind, places a sheet of paper in a black tray at a desk with a monitor showing grey blocks and one orange block, and an orange stapler beside her',
    t: 'Finance and bookkeeping teams',
    b: 'Odoo reads the clean bills. The agent prepares the awkward ones as a draft batch, and your bookkeeper approves it.',
  },
];

/* ── Process. Six steps, in the order we work. ── */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'Read your Odoo first',
    b: 'Version, hosting, pricing plan and installed apps. Each database lists its own models and methods on its /doc page, so we read yours before promising anything.',
  },
  {
    n: '02',
    t: 'Check what Odoo already ships for the job',
    b: 'Bill reading, bank matching, reordering rules, Ask AI. If a built-in feature does the job, we say so and you switch it on.',
  },
  {
    n: '03',
    t: 'Pick one job and write down its rules',
    b: 'One task, such as quotations from customer requests. The rules a person follows today go on paper, along with who confirms the result.',
  },
  {
    n: '04',
    t: 'Show it on your own data',
    b: 'Before a contract, we run one of your real documents through a first version, so you see a draft you can judge against what your team did.',
  },
  {
    n: '05',
    t: 'Build on a test copy',
    b: 'A duplicate on Odoo Online, a staging branch on Odoo.sh, or a restored backup on your own server. The agent gets its own bot user and a key that expires.',
  },
  {
    n: '06',
    t: 'Run it beside your team, launch, stay on',
    b: 'For an agreed period the agent drafts while a person does the same work, and the two are compared. After launch the same team reads the logs, renews the key and re-tests when Odoo upgrades.',
  },
];

/* ── Comparison: three ways to get an AI agent into Odoo ── */
const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: "01 Odoo's own AI app" },
  { label: "02 Odoo's MCP server and your AI client" },
  { label: '03 A custom agent built for you' },
];

const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'What it is',
    values: [
      'Agents you set up inside Odoo from skills and sources',
      'Your database answers an outside AI client such as Claude Code or Codex',
      'An agent designed around your rules, connected through the JSON-2 API',
    ],
  },
  {
    feature: 'Where the work starts',
    values: [
      'Inside Odoo: a chat, a record, an automation',
      'In the AI client, when a person types a prompt',
      'Wherever the request arrives: an inbox, a store, a help desk',
    ],
  },
  {
    feature: 'Versions',
    values: ['Odoo 19 and 20', 'Odoo 20, and SaaS 19.4 on Odoo Online', 'Odoo 19 and 20, through the JSON-2 API'],
  },
  {
    feature: 'Who decides what it can do',
    values: [
      'Odoo, through the skills and tools it ships, plus any you add',
      'Whoever exposes tools to the client in Odoo’s settings',
      'You, in writing, before the build',
    ],
  },
  {
    feature: 'Who you call when it breaks',
    values: [
      'Odoo support or your Odoo implementation firm',
      'Whoever set up the client and the exposed tools',
      'The team that built it',
    ],
  },
  {
    feature: 'Right call when',
    values: [
      'The job starts and ends inside Odoo',
      'A person wants to ask and act on Odoo from their own AI tool',
      'The work starts outside Odoo, crosses two systems, or follows your own rules',
    ],
  },
];

/* ── Other names a US search shows. Each line restates the firm's own page as
   read on 2026-10-09. Feeds the visible list AND the ItemList JSON-LD.
   Not ranked. FactoryJet wrote this list, and the section says so. ── */
const OTHERS: ReadonlyArray<{ name: string; focus: string; says: string; source: SrcKey }> = [
  {
    name: 'Bista Solutions',
    focus: 'Agents for procurement and finance teams',
    says: 'Its Odoo AI agent page describes role-based agents for procurement and finance, and says they execute actions in draft mode first, so nothing is finalized until a user approves.',
    source: 'bista',
  },
  {
    name: 'Silent Infotech',
    focus: 'Built-in and custom agents, Odoo 17 to 19',
    says: 'Its page offers Odoo AI agents that draft the purchase order, the follow-up email or the dispatch schedule for approval, and says it covers Odoo 17, 18 and 19 on Community or Enterprise.',
    source: 'silent',
  },
  {
    name: 'Much Consulting',
    focus: 'Setting up the agents Odoo 19 ships',
    says: 'Publishes a setup guide dated 19 June 2026 that walks through the seven preconfigured agents it counts in Odoo 19 and how to create your own.',
    source: 'much',
  },
  {
    name: 'Master Software Solutions',
    focus: 'Custom integrations with outside AI models',
    says: 'Published an article on September 30, 2026 covering Odoo AI development, from the agents Odoo ships to custom integrations with outside AI models.',
    source: 'master',
  },
  {
    name: 'Certum Solutions',
    focus: 'Guide and demo video for Odoo 19',
    says: 'Publishes a guide and a demo video on setting up AI agents in Odoo 19 and training them on company documents.',
    source: 'certum',
  },
  {
    name: 'Synconics',
    focus: 'Shaping Odoo’s own agents to a business',
    says: 'Its Odoo AI services page offers use-case design, instructions, skills, knowledge, triggers and testing for Odoo’s own agents, and states delivery from Canada and India.',
    source: 'synconics',
  },
];

const othersSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Other firms a US search shows for Odoo AI agent work',
  itemListElement: OTHERS.map((o, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: o.name,
    url: SRC[o.source].url,
  })),
};

const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  { href: '/services/erp-ai-agents', t: 'ERP AI agents overview', b: 'The same work across Odoo, NetSuite, SAP Business One and ERPNext.' },
  { href: '/services/netsuite-ai-agents', t: 'NetSuite AI agents', b: 'The sister page for businesses on Oracle NetSuite.' },
  { href: '/services/ai-agent-development', t: 'AI agent development', b: 'Custom agents for support, sales and operations, beyond Odoo.' },
  { href: '/services/ai-agent-monitoring', t: 'AI agent monitoring and support', b: 'Watching, re-testing and fixing an agent after launch.' },
  { href: '/services/shopify-quickbooks-integration', t: 'Shopify QuickBooks integration', b: 'Stock, prices and books kept in step with the store.' },
  { href: '/blog/ai-agents-erp-netsuite-odoo-sap-business-one-2026', t: 'Guide: AI agents inside your ERP', b: 'The longer read on NetSuite, Odoo and SAP Business One.' },
];

/** Small inline source links. Same visual pattern as the ERP AI agents page.
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

export default function OdooAiAgentsPage() {
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
                    ODOO AI AGENTS &middot; UNITED STATES
                  </span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.2rem]">
                  AI agents inside Odoo that draft the record and wait for your approval.
                </h1>

                <p className="mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                  We design, build and support AI agents that work inside Odoo 19 and Odoo 20, on Odoo Online, Odoo.sh
                  or your own server. The agent reads the request, looks up your prices and stock, and drafts the
                  quotation, the sales order, the purchase order or the bill. Your team confirms it. You get a fixed
                  quote in writing before work starts.
                </p>

                <div className="mt-6">
                  <HeroInlineForm
                    region="us"
                    source="services_odoo_ai_agents_hero"
                    service="Odoo AI Agents"
                    submitLabel="Scope my Odoo agent"
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
                  <span>Odoo facts checked {CHECKED_ON}</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
                  <figcaption className="font-fj-mono text-[11px] font-bold uppercase tracking-wider text-[#B23E13]">
                    Three ways an agent reaches your Odoo
                  </figcaption>
                  <OdooRoutesDiagram />
                  <ul className="mt-4 grid gap-2 font-fj-body text-[13px] leading-snug text-fj-ink">
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-[3px] h-3 w-3 flex-shrink-0 rounded-sm border-[1.5px] border-[#14110F] bg-white" />
                      Black outline: what Odoo ships. Its AI app, its MCP server, your database.
                    </li>
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-[3px] h-3 w-3 flex-shrink-0 rounded-sm border-[1.5px] border-[#F05A28] bg-[#FFF4EE]" />
                      Orange: the agent we build for you.
                    </li>
                  </ul>
                  <p className="mt-3 font-fj-body text-[13px] leading-snug text-fj-neutral-600">
                    The dashed step is the one that matters most. Which user the agent signs in as, and who confirms,
                    is agreed in writing before anything is built.
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
                An Odoo AI agent is software that does one office task inside Odoo. It reads a request, looks up
                prices and stock, and drafts the record for a person to confirm. Odoo 19 and 20 ship their own agents.
                A custom agent fits when the work starts outside Odoo, crosses into a store or QuickBooks, or follows
                your own rules.
              </p>
              <SourceLinks ids={['odooAgents20', 'odooApi', 'odooMcp', 'odooSupport']} />
            </div>
          </div>
        </section>

        {/* 3. WHAT ODOO SHIPS ITSELF */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">What Odoo ships</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  What Odoo&rsquo;s own AI does in versions 19 and 20, and where it stops.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Start here, because you may not need us. Odoo 19 added an AI app in September 2025. Odoo 20 followed
                  in September 2026 and moved the line on what its agents may do.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  We read both sets of pages on {CHECKED_ON} and compared them line by line. These seven rows are what
                  we found.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  If one of them already does your job, switch it on first.
                </p>
                <SourceLinks ids={['odooSupport', 'odooRelease19', 'odooRelease20']} />
              </div>

              <ul className="grid gap-3 lg:col-span-8">
                {SHIPS.map((s) => (
                  <li
                    key={s.what}
                    className="grid grid-cols-1 gap-2 rounded-2xl border border-fj-neutral-200 bg-white px-5 py-4 sm:grid-cols-[190px_1fr] sm:gap-5"
                  >
                    <div>
                      <div className="font-fj-display text-base font-semibold text-fj-ink">{s.what}</div>
                      <div className="mt-1 font-fj-mono text-[11px] font-bold uppercase tracking-wider text-fj-neutral-600">
                        {s.version}
                      </div>
                    </div>
                    <div>
                      <p className="font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{s.note}</p>
                      <SourceLinks ids={s.sources} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-2xl border-2 border-[#F05A28]/25 bg-white p-6 sm:p-8">
              <div className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                What we found on {CHECKED_ON}
              </div>
              <h3 className="mt-3 font-fj-display text-xl font-semibold text-fj-ink">
                Four things changed for agents between Odoo 19 and Odoo 20.
              </h3>
              <ul className="mt-4 grid max-w-3xl gap-3 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  Topics are now called skills. A guide written for Odoo 19 names menus an Odoo 20 database no longer
                  has.
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  The built-in skills now include Create Records and Update Records, and the sentence saying Ask AI
                  cannot change the database is gone from the 20.0 page.
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  A database can act as an MCP server. Odoo has that page for 20.0 and for SaaS 19.4 on Odoo Online.
                  The 19.0 address returned a not-found page.
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  All AI features now need credits. In Odoo 19 that depended on where your database was hosted.
                </li>
              </ul>
              <SourceLinks ids={['odooRelease20', 'odooAgents20', 'odooAi20', 'odooMcp', 'odooIap']} />
            </div>
          </div>
        </section>

        {/* 4. WHERE A CUSTOM AGENT IS THE RIGHT CALL */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Custom or built in</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Four signs you need a custom agent in Odoo.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Odoo&rsquo;s own agents are the right start for work that begins and ends inside Odoo. These are the
              cases where they run out, and where{' '}
              <Link
                href="/services/ai-agent-development"
                className="font-semibold text-fj-ink underline underline-offset-4"
              >
                custom AI agent development
              </Link>{' '}
              takes over.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
              {WHEN.map((w) => (
                <li key={w.n} className={`rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 ${w.span}`}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white font-fj-mono text-sm font-bold text-[#B23E13]">
                    {w.n}
                  </div>
                  <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{w.t}</h3>
                  <p className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-ink">{w.b}</p>
                  <SourceLinks ids={w.sources} />
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              When none of the four applies, the right answer is often to set up what Odoo already ships. We say so on
              the scoping call.
            </p>
          </div>
        </section>

        {/* 5. HOSTING: Odoo Online, Odoo.sh, on-premise */}
        <ComparisonTable
          eyebrow="Where your Odoo runs"
          headline="Odoo Online, Odoo.sh or on-premise: the route changes with the hosting."
          lead="Ask your Odoo administrator which of the three you are on before anything else. It decides whether a custom module is allowed, which versions you receive and when the old API addresses stop."
          columns={HOSTING_COLUMNS}
          rows={HOSTING_ROWS}
          footer={
            <>
              Every cell restates Odoo&rsquo;s documentation or pricing page as listed on {CHECKED_ON}.
              <SourceLinks
                ids={['odooOnline', 'odooHosting', 'odooSh', 'odooPricing', 'odooApi', 'odooKeys19', 'odooSupport']}
              />
            </>
          }
          scrollRegionLabel="Comparison of Odoo Online, Odoo.sh and on-premise for AI agents"
        />

        {/* 6. SIX JOBS */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Six jobs</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Six Odoo jobs an agent can draft for your team.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              One word needs care first. In Odoo, an RFQ, a request for quotation, is a Purchase document that you
              send to a vendor. The request your customer sends you becomes a quotation in the Sales app. Both are
              covered here. A draft is a record saved in Odoo and not yet confirmed. For the build behind the first
              job, read our{' '}
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
              These are the jobs we are asked for most. The same pattern fits others: read what arrives, look up Odoo,
              draft, confirm. If your books sit in QuickBooks, see{' '}
              <Link
                href="/services/shopify-quickbooks-integration"
                className="font-semibold text-fj-ink underline underline-offset-4"
              >
                Shopify QuickBooks integration
              </Link>
              . For the same jobs on NetSuite, SAP Business One or ERPNext, the overview is our{' '}
              <Link href="/services/erp-ai-agents" className="font-semibold text-fj-ink underline underline-offset-4">
                ERP AI agents page
              </Link>
              .
            </p>
            <p className="mt-3 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
              Odoo notes are as listed on {CHECKED_ON}.
            </p>
          </div>
        </section>

        {/* 7. ACCESS RIGHTS AND APPROVALS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Access rights and approvals</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Seven controls that keep an agent safe inside Odoo.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  An agent is safe when it can do less than a person, and a person still confirms. Odoo already has
                  the controls. Most of the work is using them.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  Each one is an Odoo feature, with the page linked.
                </p>
              </div>
              <ol className="grid gap-4 lg:col-span-8">
                {CONTROLS.map((c) => (
                  <li key={c.n} className="flex items-start gap-4 rounded-2xl border border-fj-neutral-200 bg-white p-6">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-fj-cream font-fj-mono text-sm font-bold text-[#B23E13]">
                      {c.n}
                    </div>
                    <div>
                      <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{c.t}</h3>
                      <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{c.b}</p>
                      <SourceLinks ids={c.sources} />
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 8. WHERE IT BREAKS */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">The traps</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Eight places an Odoo AI agent project breaks.
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Knowing these early saves a rebuild. All eight come straight from the linked Odoo pages.
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
          headline="Tell us your Odoo version and the job. We will say what an agent can do there."
          sub="Send the version, where it is hosted and one task that fills your team's day. We reply with what Odoo already ships for it, what we would build, and a fixed quote if there is work for us."
          label="Scope my Odoo agent"
        />

        {/* 9. WORK WE CAN SHOW. The only place a client is named. */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Work you can check</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Odoo and order work you can look up.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Each card says what the project covered and where it stands. No result is quoted here that we have not
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

        {/* 10. WHO THIS IS FOR */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Who this is for</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Built for businesses that run their day on Odoo.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Your trade changes the documents. The job is the same in each one. Something arrives, someone looks
                  it up in Odoo, someone types it in.
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

        {/* 11. PROCESS */}
        <section className="bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Process</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  How we design, build and support an Odoo agent.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  One job is agreed first, shown on your own data, then built on a test copy of your Odoo. After
                  launch,{' '}
                  <Link
                    href="/services/ai-agent-monitoring"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    AI agent monitoring and support
                  </Link>{' '}
                  keeps it working as Odoo and the AI models change.
                </p>
                <img
                  src={`${IMG}/planning-wall-notes.webp`}
                  alt="A woman in a rust sweater and a man in a charcoal shirt, seen from behind, stand at a wall of blank yellow paper notes, and the man points at the one orange note"
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

        {/* 12. COMPARISON: three ways to get an AI agent into Odoo */}
        <ComparisonTable
          eyebrow="Three routes compared"
          headline="Odoo's own agents, Odoo's MCP server, or an agent built for you."
          lead="Each route is the right one for somebody. On the scoping call we say which we would choose for you and why, even when it means there is no work for us."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer={`Odoo facts are from Odoo's own pages as listed on ${CHECKED_ON}.`}
          scrollRegionLabel="Comparison of three ways to add an AI agent to Odoo"
        />

        {/* 13. OTHER NAMES A SEARCH SHOWS */}
        <section className="border-t border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Other options</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Six other names a US search shows for Odoo AI work.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  FactoryJet wrote this list and is one option on it. These six came up in US searches and AI answers
                  for Odoo AI terms on {CHECKED_ON}. They are not ranked, and nobody paid to be here. Each line
                  restates the firm&rsquo;s own page. We have not worked with them and did not test their work.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Where we differ is range. FactoryJet works across Odoo, NetSuite, SAP Business One, ERPNext and
                  custom systems, so the route we recommend is not tied to one product.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  A local firm is sometimes the better choice. FactoryJet works remotely with US clients and has no US office.
                  If you want someone on site in your warehouse, or a full Odoo rollout with accounting setup, pick a
                  local Odoo implementation firm.
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

        {/* 14. RELATED SERVICES */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Next to this page</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Related AI agent and integration services.
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

        {/* 15. SOURCES + REVIEW LINE */}
        <section className="bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Method</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Sources, checked on {CHECKED_ON}.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Every version, date, plan and limit on this page was read from the pages listed here on that day.
                  Where Odoo 19 and Odoo 20 differ, we opened both pages and compared them. Odoo changes these, so
                  check the linked page before you act on one.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  What we did not do: install Odoo 20 and try each feature, test the six other firms named above, or
                  measure results on the projects listed. Odoo&rsquo;s plan prices were shown to us in another
                  currency, so none is quoted. The price of an Odoo AI credit was shown in euros.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  The two cost ranges in the questions below are market figures from ProductCrafters&rsquo; 2026
                  breakdown. They are not FactoryJet prices.
                </p>
                <SourceLinks ids={['productCrafters']} />
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
          eyebrow="Odoo AI agents FAQ"
          headline="Odoo AI questions, answered plainly."
          lead={`What owners, operations leads and finance teams ask before adding an agent to Odoo. Odoo answers are from Odoo's own pages as listed on ${CHECKED_ON}.`}
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 17. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="Odoo AI agents"
          headline="Keep the Odoo you run. Add an agent your team can check."
          sub="Tell us your Odoo version, where it is hosted and one job that fills your team's day. We say what Odoo already ships for it, show a first version on your own data and stay on after launch."
          primaryCta={{ label: 'Scope my Odoo agent', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="Demo on your own data before a contract. Fixed quote in writing. You own the code."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
