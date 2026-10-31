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
import StickyCtaLabel from '@/components/v2/StickyCtaLabel';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/ecommerce-ai-agents, built 2026-10-11.

   Why this page exists: on 9 Oct 2026 three store-operations buyer questions
   ("Which AI tools can run ecommerce operations like inventory, orders and
   customer messages automatically?" and two more, the first three FAQs below)
   were answered by AI assistants from vendors' service pages. The existing
   store-agent page, /services/shopify-ai-agents, covers Shopify. This page
   covers WooCommerce, BigCommerce, Adobe Commerce and headless stores too.
   US monthly searches (DataForSEO, location 2840, pulled 2026-10-11):
   "ai for ecommerce" 1,900 (KD 26), "ecommerce chatbot" 480, "ecommerce
   automation" 260, "ai agents for ecommerce" 210, "ai chatbot for ecommerce"
   210, "ai tools for ecommerce" 170, "ai merchandising" 170, "ecommerce
   automation services" 140, "ecommerce ai agents" 90.

   Scope: every platform on one page. /services/shopify-ai-agents stays the
   page for Shopify head terms, so "Shopify AI agent" is kept out of this
   title, H1 and keyword list, and this page links to it for Shopify detail.

   Truth rules for anyone editing this file:
   1. Every platform fact (API names, limits, numbers, feature names) was read
      on that platform's own documentation on 2026-10-11 and links to it through
      the SRC map below. All of those pages answered a plain web request. If you
      change a fact, re-fetch the page first and update CHECKED_ON.
   2. No client is named on this page and no result is claimed. FactoryJet
      capability statements are limited to what Bhavesh confirmed on 9 and 11
      Oct 2026: work on Odoo, NetSuite, SAP Business One, ERPNext and custom
      ERPs (RFQs and quoting, daily bookkeeping, purchase and sales orders), and
      EDI, punchout catalog, Xero, HubSpot and WhatsApp integrations. Store
      builds on the four platforms are existing service pages on this site.
   3. Vendor programme status is left out on purpose. Do not add one.
   4. Bhavesh's rule of 11 Oct 2026: the page gives no figure for what a custom
      agent costs after it is built. The only dollar figures are in two cost
      FAQ answers: vendor list prices (Fin, Gorgias) and sourced build ranges
      (CMARIX, ProductCrafters). The one FAQ about the months after launch is
      answered with the fixed-quote and managed-service wording only.
   5. Nothing on the page says where the FactoryJet team is.
   6. The eight "other names" restate each firm's own page as read that day.
      We did not test their products.
   7. Mirrors /services/netsuite-ai-agents for components, props and schema.

   Schema: WebPage + Service + FAQPage + ItemList + BreadcrumbList.
   Organization is rendered once sitewide by src/app/layout.tsx and referenced
   here by @id. The FAQPage mainEntity is generated from the exact FAQ_ITEMS
   array the visible <FAQ> component renders. There is no second array.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/ecommerce-ai-agents';
const PAGE_TITLE = 'AI Agents for Ecommerce Stores on Any Platform | FactoryJet';
const PAGE_DESC =
  'We design, build and support AI agents for WooCommerce, BigCommerce, Adobe Commerce, Shopify and headless stores. Orders, returns, B2B quotes and listings.';
const PAGE_PUBLISHED = '2026-10-11';
const PAGE_MODIFIED = '2026-10-21';
const CHECKED_ON = '11 Oct 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/ecommerce-ai-agents';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'ai for ecommerce',
    'ecommerce ai agents',
    'ai agents for ecommerce',
    'ecommerce chatbot',
    'ai chatbot for ecommerce',
    'ecommerce automation',
    'ecommerce automation services',
    'ai tools for ecommerce',
    'ai merchandising',
    'woocommerce ai agent',
    'bigcommerce ai agent',
    'magento ai agent',
    'adobe commerce ai agent',
    'headless commerce ai agent',
    'ai order status agent',
    'ai returns agent',
  ],
  alternates: {
    canonical: CANONICAL_URL,
    languages: twinAlternates['ecommerce-ai-agents'],
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
        alt: 'FactoryJet, AI agents for online stores on any platform',
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
  { name: 'Ecommerce AI Agents', url: CANONICAL_URL },
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
  name: 'Ecommerce AI Agent Development',
  serviceType:
    'AI agents for online stores on WooCommerce, BigCommerce, Adobe Commerce, Magento Open Source, Shopify and headless builds: order status and returns, product questions, inventory and reorder, B2B quotes and reorders, marketplace listings, customer messages',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    "FactoryJet designs, builds, tests and supports AI agents that work inside an online store through the platform's own API. An agent reads an order, a return request, a customer message or a wholesale purchase order, looks up the store, and drafts the reply, refund, quote, reorder or listing update for a person to approve. Work covers checking what the platform and the helpdesk already ship, an API key made for the agent, building against a test store, a period of running beside the team, launch and support after launch.",
  url: CANONICAL_URL,
};

/* ── Sources. One map, used by every inline source link (the `short` label) AND
   by the visible "Sources" list near the foot of the page (the full `label`).
   Each URL was opened on 2026-10-11 and the supporting sentence read before the
   claim was written. The ledger with the quoted words is in the build notes. ── */
const WOO = 'https://developer.woocommerce.com/docs';
const BC = 'https://docs.bigcommerce.com/developer';
const AC = 'https://developer.adobe.com/commerce';
const SH = 'https://shopify.dev/docs';

const SRC = {
  wooRest: {
    short: 'WooCommerce: REST API',
    label: 'WooCommerce developer docs: WooCommerce REST API',
    url: `${WOO}/apis/rest-api/`,
  },
  wooRestRef: {
    short: 'WooCommerce: REST API reference',
    label: 'WooCommerce REST API reference (keys, pagination, refunds, batch updates)',
    url: 'https://woocommerce.github.io/woocommerce-rest-api-docs/',
  },
  wooWebhooks: {
    short: 'WooCommerce: webhooks',
    label: 'WooCommerce documentation: Webhooks',
    url: 'https://woocommerce.com/document/webhooks/',
  },
  wooStoreApi: {
    short: 'WooCommerce: Store API',
    label: 'WooCommerce developer docs: WooCommerce Store API',
    url: `${WOO}/apis/store-api/`,
  },
  wooStoreApiRate: {
    short: 'WooCommerce: Store API rate limiting',
    label: 'WooCommerce developer docs: Rate Limiting for Store API endpoints',
    url: `${WOO}/apis/store-api/rate-limiting/`,
  },
  wooMcp: {
    short: 'WooCommerce: MCP integration',
    label: 'WooCommerce developer docs: Model Context Protocol (MCP) Integration',
    url: `${WOO}/features/mcp/`,
  },
  bcRate: {
    short: 'BigCommerce: API rate limits',
    label: 'BigCommerce Docs: API rate limits',
    url: `${BC}/docs/overview/api-fundamentals/rate-limits`,
  },
  bcAccounts: {
    short: 'BigCommerce: API accounts',
    label: 'BigCommerce Docs: API accounts and OAuth scopes',
    url: `${BC}/docs/overview/api-fundamentals/api-accounts`,
  },
  bcWebhooks: {
    short: 'BigCommerce: webhooks',
    label: 'BigCommerce Docs: Webhooks overview',
    url: `${BC}/docs/integrations/webhooks/overview`,
  },
  bcInventory: {
    short: 'BigCommerce: inventory adjustments',
    label: 'BigCommerce Docs: Inventory adjustments',
    url: `${BC}/docs/admin/catalog-and-inventory/inventory-adjustments`,
  },
  bcMcp: {
    short: 'BigCommerce: MCP server',
    label: 'BigCommerce Docs: MCP Server Overview',
    url: `${BC}/api-reference/mcp/overview`,
  },
  bcMcpB2b: {
    short: 'BigCommerce: B2B storefront MCP tools',
    label: 'BigCommerce Docs: MCP B2B Storefront tools (shopping lists and quotes)',
    url: `${BC}/api-reference/mcp/storefront/b2b`,
  },
  bcQuotes: {
    short: 'BigCommerce: B2B Edition Quotes API',
    label: 'BigCommerce Docs: B2B Edition Quotes API',
    url: `${BC}/api-reference/rest/b2b/management/quotes`,
  },
  bcSmartEdits: {
    short: 'BigCommerce: Smart Edits',
    label: 'BigCommerce Docs: Smart Edits',
    url: `${BC}/docs/ai-tools/smart-edits`,
  },
  acRest: {
    short: 'Adobe: REST API overview',
    label: 'Adobe Commerce developer docs: REST API Overview',
    url: `${AC}/webapi/rest/`,
  },
  acTokens: {
    short: 'Adobe: token-based authentication',
    label: 'Adobe Commerce developer docs: Token-based authentication',
    url: `${AC}/webapi/get-started/authentication/gs-authentication-token`,
  },
  acInput: {
    short: 'Adobe: input limiting',
    label: 'Adobe Commerce developer docs: Input limiting',
    url: `${AC}/webapi/get-started/api-security`,
  },
  acRateLimit: {
    short: 'Adobe: rate limiting',
    label: 'Adobe Commerce developer docs: Rate limiting',
    url: `${AC}/webapi/get-started/rate-limiting`,
  },
  acNqGql: {
    short: 'Adobe: negotiable quote (GraphQL)',
    label: 'Adobe Commerce developer docs: Negotiable quote (B2B), GraphQL',
    url: `${AC}/webapi/graphql/schema/b2b/negotiable-quote/`,
  },
  acB2bRest: {
    short: 'Adobe: B2B integrations',
    label: 'Adobe Commerce developer docs: B2B integrations (REST)',
    url: `${AC}/webapi/rest/b2b/`,
  },
  acWebhooks: {
    short: 'Adobe: webhooks overview',
    label: 'Adobe Commerce developer docs: Adobe Commerce Webhooks Overview',
    url: `${AC}/extensibility/webhooks/`,
  },
  acEvents: {
    short: 'Adobe: I/O Events',
    label: 'Adobe Commerce developer docs: Adobe I/O Events for Adobe Commerce Overview',
    url: `${AC}/extensibility/events/`,
  },
  acLiveSearch: {
    short: 'Adobe: Live Search',
    label: 'Adobe Experience League: Live Search overview',
    url: 'https://experienceleague.adobe.com/en/docs/commerce/live-search/overview',
  },
  acReco: {
    short: 'Adobe: Product Recommendations',
    label: 'Adobe Experience League: Product Recommendations overview',
    url: 'https://experienceleague.adobe.com/en/docs/commerce/product-recommendations/overview',
  },
  acDevAgent: {
    short: 'Adobe: Commerce Developer Agent',
    label: 'Adobe Commerce developer docs: Commerce Developer Agent',
    url: `${AC}/extensibility/developer-agent/`,
  },
  shGqlRate: {
    short: 'Shopify: GraphQL Admin API rate limits',
    label: 'Shopify developer docs: GraphQL Admin API rate limits',
    url: `${SH}/apps/build/apis/graphql-admin/rate-limits`,
  },
  shLimits: {
    short: 'Shopify: API limits',
    label: 'Shopify developer docs: Shopify API limits',
    url: `${SH}/api/usage/limits`,
  },
  shAdmin: {
    short: 'Shopify: GraphQL Admin API',
    label: 'Shopify developer docs: GraphQL Admin API reference',
    url: `${SH}/api/admin-graphql`,
  },
  shWebhooks: {
    short: 'Shopify: webhooks',
    label: 'Shopify developer docs: About webhooks',
    url: `${SH}/apps/build/webhooks`,
  },
  shB2b: {
    short: 'Shopify: B2B',
    label: 'Shopify developer docs: About B2B',
    url: `${SH}/apps/build/b2b`,
  },
  shStorefront: {
    short: 'Shopify: Storefront API',
    label: 'Shopify developer docs: Storefront API reference',
    url: `${SH}/api/storefront`,
  },
  shStorefrontMcp: {
    short: 'Shopify: migrate from Storefront MCP',
    label: 'Shopify developer docs: Migrate from Storefront MCP',
    url: `${SH}/apps/build/storefront-mcp`,
  },
  shAgents: {
    short: 'Shopify: agents and UCP',
    label: 'Shopify developer docs: Agents and the Universal Commerce Protocol',
    url: `${SH}/agents`,
  },
  shOrders: {
    short: 'Shopify: order tracking for agents',
    label: 'Shopify developer docs: Monitor orders (Order MCP and order webhooks)',
    url: `${SH}/agents/orders`,
  },
  shSidekick: {
    short: 'Shopify Help: Sidekick',
    label: 'Shopify Help Center: Sidekick',
    url: 'https://help.shopify.com/en/manual/ai-powered-tools/sidekick',
  },
  shInbox: {
    short: 'Shopify Help: Inbox agent',
    label: 'Shopify Help Center: Shopify Inbox and the Inbox agent',
    url: 'https://help.shopify.com/en/manual/inbox',
  },
  amzListings: {
    short: 'Amazon: Listings Items API',
    label: 'Amazon Selling Partner API docs: Listings Items API',
    url: 'https://developer-docs.amazon.com/sp-api/docs/listings-items-api',
  },
  amzUsage: {
    short: 'Amazon: usage plans and rate limits',
    label: 'Amazon Selling Partner API docs: Usage Plans and Rate Limits',
    url: 'https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits',
  },
  walmartApis: {
    short: 'Walmart: Marketplace APIs',
    label: 'Walmart Developer Portal: Introduction to Marketplace APIs',
    url: 'https://developer.walmart.com/us-marketplace/docs/introduction-to-marketplace-apis',
  },
  ebayInventory: {
    short: 'eBay: Inventory API',
    label: 'eBay Developers Program: Inventory API overview',
    url: 'https://developer.ebay.com/api-docs/sell/inventory/overview.html',
  },
  gorgias: {
    short: 'Gorgias: pricing',
    label: 'Gorgias: pricing page',
    url: 'https://www.gorgias.com/pricing',
  },
  fin: {
    short: 'Fin: pricing',
    label: 'Fin by Intercom: pricing page',
    url: 'https://fin.ai/pricing',
  },
  kibo: {
    short: 'Kibo Commerce: Kibo AI',
    label: 'Kibo Commerce: Kibo AI and the Kibo Agentic Framework',
    url: 'https://kibocommerce.com/kibo-ai/',
  },
  fluentMcp: {
    short: 'Fluent Commerce: MCP server',
    label: 'Fluent Commerce docs: Fluent Order Management MCP Server',
    url: 'https://docs.fluentcommerce.com/landing/fluent-order-management-mcp-server',
  },
  fluentNews: {
    short: 'Fluent Commerce: order sourcing agent',
    label: 'Fluent Commerce: news release on its AI agent for order sourcing (16 June 2026)',
    url: 'https://fluentcommerce.com/news/fluent-commerce-introduces-ai-agent-to-make-order-sourcing-logic-easier-to-understand-configure-and-optimize/',
  },
  manhattan: {
    short: 'Manhattan: ActiveAgents',
    label: 'Manhattan Associates: AI agents for supply chain productivity',
    url: 'https://www.manh.com/solutions/manhattan-active-platform/ai-agents-for-supply-chain-productivity',
  },
  unthinkable: {
    short: 'Unthinkable: retail and ecommerce agents',
    label: 'Unthinkable: AI Agent Development for Retail and eCommerce Brands',
    url: 'https://www.unthinkable.co/ai-agent-development/retail-and-ecommerce/',
  },
  automat: {
    short: 'Automat: ecommerce and retail',
    label: 'Automat: E-Commerce Operations Automation',
    url: 'https://runautomat.com/industry/e-commerce-and-retail',
  },
  cmarix: {
    short: 'CMARIX chatbot cost guide, 2026',
    label: 'CMARIX: AI Chatbot Development Cost in 2026',
    url: 'https://www.cmarix.com/blog/ai-chatbot-development-cost/',
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
   The first three questions are the buyer questions measured on 2026-10-09,
   in the buyers' own words. The next group comes from the question boxes
   Google showed for this page's searches (DataForSEO, US, location 2840,
   pulled 2026-10-11). The rest come from the page's own keywords. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'buyers', label: 'Tools and vendors' },
  { key: 'basics', label: 'AI for ecommerce' },
  { key: 'platforms', label: 'Your platform' },
  { key: 'jobs', label: 'Store jobs' },
  { key: 'safety', label: 'Keys and safety' },
  { key: 'working', label: 'Cost and working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── Tools and vendors (buyer questions, in the buyers' words) ────
  {
    category: 'buyers',
    question: 'Which AI tools can run ecommerce operations like inventory, orders and customer messages automatically?',
    answer: `Three kinds, going by their own pages as read on ${CHECKED_ON}. Your platform ships some: Shopify has Sidekick and an Inbox agent, and BigCommerce has Smart Edits in beta. Helpdesk tools such as Gorgias and Fin answer customer messages. A custom agent, built for you, covers jobs with rules of your own, such as wholesale quotes or reorder drafts. Each one acts through the store's API, so the key you give it sets what it can change.`,
  },
  {
    category: 'buyers',
    question: 'What do agencies offer in AI automation for digital commerce and what are their capabilities?',
    answer:
      'The work falls into four parts. A customer-facing agent handles order status, returns and product questions. Back-office agents handle inventory, reorders and marketplace listings. B2B agents draft quotes and repeat orders. The fourth part is the links those agents need to your ERP, helpdesk and marketplaces. FactoryJet designs, builds and supports all four on WooCommerce, BigCommerce, Adobe Commerce, Shopify and headless stores, and shows a first version on your own data before a contract.',
  },
  {
    category: 'buyers',
    question:
      'Which order management and commerce vendors offer AI agents that automate order routing and customer service tasks?',
    answer: `Several do, going by their own pages as read on ${CHECKED_ON}. Kibo Commerce describes an agentic framework across commerce and order management, with order routing reachable by outside AI tools. Fluent Commerce announced an AI agent for order sourcing and documents a connection that gives customer service agents order status and tracking data. Manhattan lists a CSR Agent for order status and returns questions. If your store runs WooCommerce, BigCommerce or Adobe Commerce without one of those suites, a custom agent connects to the store's own API.`,
  },
  // ── AI for ecommerce (Google question boxes) ─────────────────────
  {
    category: 'basics',
    question: 'What AI should I use for ecommerce?',
    answer:
      "Start with the job, then pick the lightest tool that does it. For questions about your own store data, your platform's built-in assistant may be enough. For customer messages, a helpdesk AI tool is quick to switch on. For work that follows your own rules, such as checking returns against your policy or drafting wholesale quotes at each customer's price, a custom agent is the right call. On the scoping call we say which one we would choose for you.",
  },
  {
    category: 'basics',
    question: 'How is AI used in e-commerce?',
    answer:
      'In two places. On the storefront, AI answers shoppers: where an order is, whether a product fits, what the return policy says. Behind the storefront, it does office work. It flags low stock and drafts the reorder, turns an emailed purchase order into a draft order, or rewrites product data for a marketplace listing. The second kind is what people now call an AI agent, because it takes an action in your store as well as answering.',
  },
  {
    category: 'basics',
    question: 'What is ecommerce automation?',
    answer:
      "Ecommerce automation means software does a repeatable store task when a trigger fires. Classic automation follows fixed rules: when an order is paid, tag it and email the warehouse. An AI agent handles the tasks that need reading and judgment, such as a return request written in the customer's own words. Both act through the same doorway, which is the store's API and its webhooks, the messages a store sends when something changes.",
  },
  {
    category: 'basics',
    question: 'What is agentic commerce?',
    answer:
      "Agentic commerce means an AI agent shops on a buyer's behalf. It searches a catalog, builds a cart and hands the buyer to checkout. Platforms are building doorways for it. BigCommerce documents an MCP server that lets agents search products and manage a cart, and Shopify routes these tools through its Universal Commerce Protocol. That is a different job from the back-office agents on this page. Our agentic commerce guide covers the shopper side.",
  },
  {
    category: 'basics',
    question: 'Which AI chatbot is best for e-commerce?',
    answer:
      "It depends on what the chatbot must do. If it only answers from your policies and catalog, an off-the-shelf tool does that well. Shopify's Inbox agent answers questions about products, shipping, returns and store policies, and Gorgias and Fin plug into a helpdesk. If it must check an order, start a return or quote a wholesale price under your own rules, it needs to be wired to your store's API. That part is what we build.",
  },
  {
    category: 'basics',
    question: 'Can AI build me an ecommerce store?',
    answer:
      "AI can draft parts of one. Shopify's Sidekick can generate content such as product descriptions and images, and BigCommerce's Smart Edits turns a plain-language request into a plan of bulk product updates that you review before it applies. A full store still needs decisions that stay with you, such as the platform, payments, tax and shipping rules. FactoryJet builds stores as well as the agents that work inside them.",
  },
  {
    category: 'basics',
    question: 'How can AI help merchandising?',
    answer:
      "Merchandising is deciding which products show where, at what price and with what words. AI helps with the repetitive parts: writing product descriptions, fixing missing attributes, re-ranking search results and suggesting related products. Adobe documents AI-powered re-ranking in Live Search, and BigCommerce's Smart Edits drafts bulk product changes for review. An agent can also prepare a weekly list of products with thin data or low stock for your merchandiser to act on.",
  },
  // ── Your platform ────────────────────────────────────────────────
  {
    category: 'platforms',
    question: 'Can an AI agent work with WooCommerce?',
    answer:
      'Yes. WooCommerce has a REST API that lets software create, read, update and delete store data, using keys you generate with Read, Write or Read/Write access. Its documentation also describes built-in support for MCP, a standard that lets AI tools call a system directly, and labels it a developer preview that may change. We connect through the REST API, with a key limited to the job, and webhooks so the agent hears about new orders as they happen.',
  },
  {
    category: 'platforms',
    question: 'Can an AI agent work with BigCommerce?',
    answer:
      'Yes. BigCommerce has REST and GraphQL APIs, webhooks and, for B2B Edition stores, a Quotes API. Its documentation sets a request quota by plan: 150 requests per 30 seconds on Standard and Plus, and 450 on Pro. Every app on a store shares that quota, so an agent has to be a polite neighbor to your other apps. BigCommerce also documents an MCP server for storefronts, which a store owner switches on in settings.',
  },
  {
    category: 'platforms',
    question: 'Can an AI agent work with Magento or Adobe Commerce?',
    answer:
      "Yes. Adobe says Adobe Commerce on Cloud, Adobe Commerce on-premises and Magento Open Source all use the same REST API framework, so one approach covers all three. Adobe Commerce as a Cloud Service is different. Adobe says it has a smaller set of REST endpoints and signs requests through Adobe's identity service. With B2B for Adobe Commerce installed, REST endpoints cover the seller's side of a negotiable quote.",
  },
  {
    category: 'platforms',
    question: 'Do you build AI agents for Shopify stores?',
    answer:
      "Yes, and Shopify has its own page on our site. This page covers every platform. Our Shopify AI agents page goes deeper on the GraphQL Admin API, draft orders, Shopify Flow and Sidekick. One fact for planning: Shopify's documentation meters its Admin API by plan, from 100 points a second on standard plans to 1,000 on Shopify Plus, and a single query may not cost more than 1,000 points.",
  },
  {
    category: 'platforms',
    question: 'Will an AI agent work on a headless store?',
    answer:
      "Yes. Headless means the storefront shoppers see is custom-built and talks to the commerce platform through an API. A back-office agent does not touch the storefront at all. It uses the platform's admin API, the same as on any other store. A shopper-facing agent is the part that changes. It is built into your storefront code, because a chat widget made for a standard theme may not fit a custom front end.",
  },
  // ── Store jobs ───────────────────────────────────────────────────
  {
    category: 'jobs',
    question: 'Can an AI agent answer where-is-my-order questions?',
    answer:
      "Yes, and it is a sensible first job. The agent looks up the order and its tracking in your store, checks the carrier status and answers in the customer's own channel. It only reads, so the risk is low. The care goes into identity: the agent confirms who is asking before it shares an address or an order detail. WooCommerce's documentation warns that order and customer operations may expose personal information.",
  },
  {
    category: 'jobs',
    question: 'Can an AI agent approve returns and refunds?',
    answer:
      "It can check a return against your policy and prepare the refund. We set it so a person approves before money moves, until the logs show it follows your rules. This matters on WooCommerce, where the REST API's refund call uses the payment gateway to refund by default. A key with write access to orders can therefore send money back, so the agent's key and its approval step are designed together.",
  },
  {
    category: 'jobs',
    question: 'Can an AI agent handle B2B quotes and reorders?',
    answer:
      "Yes. The agent reads the buyer's request, matches each line to a product, applies that customer's price list and saves a draft quote for your sales rep. BigCommerce B2B Edition has a Quotes API for creating and updating sales quotes. Adobe Commerce B2B has negotiable quotes, and Adobe says its REST endpoints cover the seller's side. Reorders work the same way. The agent drafts from the last order and a person confirms.",
  },
  {
    category: 'jobs',
    question: 'Can an AI agent manage Amazon, Walmart and eBay listings?',
    answer:
      "It can draft and submit listing updates through each marketplace's own API. Amazon's Listings Items API takes listing updates one at a time and can preview errors before a listing is created. Amazon also warns that a full update replaces the listing, so attributes left out may be dropped. Walmart's Marketplace APIs cover items, inventory, orders and pricing. On eBay, a published offer is what becomes a live listing. We keep a person on price changes.",
  },
  {
    category: 'jobs',
    question: 'Can an AI agent reorder stock for my store?',
    answer:
      "It can watch stock levels and draft the purchase order. It reads on-hand quantities and recent sales from the store, compares them with the reorder points you set, and prepares the order for a buyer to approve. Where your stock lives in an ERP, the agent reads it there. BigCommerce's documentation advises absolute adjustments as the default way to update inventory, so an agent that writes stock back should use that method.",
  },
  // ── Keys and safety ──────────────────────────────────────────────
  {
    category: 'safety',
    question: 'Is it safe to give an AI agent access to my store?',
    answer:
      'It is as safe as the key you give it. Every platform limits what a key can do. WooCommerce keys are Read, Write or Read/Write, BigCommerce API accounts carry OAuth scopes, which list what the key may touch, and Shopify apps request specific access scopes. We give each agent its own key with the least access the job needs, start it read-only, log every action, and keep refunds, discounts and price changes behind a person.',
  },
  {
    category: 'safety',
    question: 'What happens when my platform changes its API?',
    answer: `It will, so plan for it. On ${CHECKED_ON}, Shopify's documentation said the catalog and cart tools on its Storefront MCP endpoint were removed in favor of its Universal Commerce Protocol, and WooCommerce's MCP page called its own integration a developer preview that may change. After launch we watch the platform's change notes, re-test the agent when something moves and fix what breaks.`,
  },
  // ── Cost and working with us ─────────────────────────────────────
  {
    category: 'working',
    question: 'How much does an ecommerce chatbot cost?',
    answer: `An off-the-shelf tool has a list price. On ${CHECKED_ON}, Fin's pricing page listed $0.99 per outcome, and Gorgias listed its Starter plan with AI Agent at $40 a month. A custom build is a project. CMARIX's 2026 guide puts a basic FAQ bot at $5,000 to $15,000 and a custom AI chatbot at $20,000 to $80,000. FactoryJet quotes a fixed price in writing after a short scoping call.`,
  },
  {
    category: 'working',
    question: 'How much does it cost to build an AI agent for an online store?',
    answer:
      "It depends on how many systems the agent touches and whether it changes data in them. Building a custom AI agent costs roughly $5,000 to more than $180,000, according to development firm ProductCrafters' 2026 breakdown. That range covers every kind of agent and is not specific to ecommerce. What moves a project up the range is the number of systems and the number of actions that change data. FactoryJet quotes a fixed price in writing after a short scoping call.",
  },
  {
    category: 'working',
    question: 'What does it cost to run an ecommerce AI agent each month?',
    answer:
      'We quote it with the build, so you see both numbers before you decide. FactoryJet quotes the build, and any support you choose, as fixed prices in writing after a short scoping call. After launch we can keep managing the servers, the AI models, the API connections and the maintenance, so your team does not have to.',
  },
  {
    category: 'working',
    question: 'Should I buy an app or have a custom agent built?',
    answer:
      "Buy the app when it does the job. A helpdesk AI tool answers policy and order questions from day one, and your platform's own assistant is already in your admin. Build when the job follows rules only your business has, crosses two systems such as your store and your ERP, or should start without a person typing a prompt. The two can sit side by side, with an app for chat and a custom agent for quotes or returns.",
  },
  {
    category: 'working',
    question: 'Can the agent connect my store to my ERP, EDI or WhatsApp?',
    answer:
      'Yes. FactoryJet builds EDI integrations (the structured order files large buyers send), punchout catalogs, and Xero, HubSpot and WhatsApp integrations. We have worked on Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs. For a store agent that usually means reading stock and customer prices from the ERP and writing draft orders back. Our ERP AI agents page covers that side.',
  },
  {
    category: 'working',
    question: 'Can I see it working before I sign?',
    answer:
      'Yes. Before a contract, we show working software on your own data. For a store agent that usually means a handful of your real orders, return requests or wholesale emails run through a first version, so you can compare its drafts with what your team did.',
  },
  {
    category: 'working',
    question: 'Do you support the agent after launch?',
    answer:
      'Yes. Platforms change their APIs and AI model makers retire versions, so an agent needs looking after. We watch its logs, re-test it when your platform or the model changes, and fix what breaks. Our AI agent monitoring and support page covers that service.',
  },
  {
    category: 'working',
    question: 'Who owns the agent and its code?',
    answer:
      'You do. The agent is built for you and the code is yours. We still look after it day to day: the servers, the AI models, the API connections and the updates. If you later move the work in-house or to another firm, the code and its notes go with you.',
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

/* ── Hero figure. Four steps, the same on every platform. ── */
const HERO_PATH: ReadonlyArray<{ n: string; t: string; b: string }> = [
  { n: '01', t: 'Something arrives', b: 'An order, a return request, a customer message or a wholesale purchase order.' },
  {
    n: '02',
    t: 'The agent reads your store',
    b: "Through the platform's API, the official doorway software uses to read and change store data.",
  },
  { n: '03', t: 'It drafts the next step', b: 'A reply, a refund, a quote, a reorder or a listing update.' },
  { n: '04', t: 'A person approves', b: 'Anything with money attached waits for a named person on your team.' },
];

/* ── What each platform gives an agent to work with. Each card restates the
   platform's own documentation as read on 2026-10-11. Nothing here is our
   opinion of the product. ── */
const PLATFORMS: ReadonlyArray<{
  name: string;
  kind: string;
  says: string;
  sources: ReadonlyArray<SrcKey>;
  span: string;
}> = [
  {
    name: 'WooCommerce',
    kind: 'Self-hosted · REST API v3',
    says: "WooCommerce's REST API lets software create, read, update and delete store data. You generate a key and choose Read, Write or Read/Write access. Lists come back 10 items at a time by default. Webhooks can fire when an order, product, coupon or customer is added, edited or deleted, and WooCommerce disables a webhook after more than five failed deliveries in a row. WooCommerce also documents built-in MCP support, which it labels a developer preview.",
    sources: ['wooRest', 'wooRestRef', 'wooWebhooks', 'wooMcp'],
    span: 'lg:col-span-7',
  },
  {
    name: 'BigCommerce',
    kind: 'Hosted · REST, GraphQL and MCP',
    says: 'BigCommerce sets a request quota that refreshes every 30 seconds: 150 requests on Standard and Plus plans, 450 on Pro, and by plan and resource on Enterprise. All apps on a store share the quota. A webhook carries a light payload, for example only the order id, so the agent makes a second call for the detail. BigCommerce documents an MCP server for storefronts, and B2B Edition adds a Quotes API.',
    sources: ['bcRate', 'bcWebhooks', 'bcMcp', 'bcQuotes'],
    span: 'lg:col-span-5',
  },
  {
    name: 'Adobe Commerce and Magento Open Source',
    kind: 'Cloud, on-premises or open source · REST and GraphQL',
    says: "Adobe says Adobe Commerce on Cloud, Adobe Commerce on-premises and Magento Open Source all use the same REST API framework. By default an admin token is valid for 4 hours and a customer token for 1 hour. Input limits are off by default, and when switched on a paged query returns at most 300 items per page. Adobe Commerce as a Cloud Service has a smaller set of REST endpoints and signs requests through Adobe's identity service. For events, Adobe points most integrations to Adobe I/O Events and keeps webhooks for calls that need an answer at once.",
    sources: ['acRest', 'acTokens', 'acInput', 'acWebhooks', 'acEvents'],
    span: 'lg:col-span-5',
  },
  {
    name: 'Shopify',
    kind: 'Hosted · GraphQL Admin API',
    says: "Shopify meters its GraphQL Admin API in points per second by plan: 100 on standard plans, 200 on Advanced and 1,000 on Shopify Plus. A single query may not cost more than 1,000 points, and any input array is capped at 250 items. Shopify ships two assistants of its own. Sidekick works inside the admin and presents changes for your review before applying them. The Inbox agent answers shoppers and is opt-in. Our Shopify AI agents page has the detail for Shopify stores.",
    sources: ['shGqlRate', 'shLimits', 'shSidekick', 'shInbox'],
    span: 'lg:col-span-7',
  },
  {
    name: 'Headless builds',
    kind: 'Custom storefront · platform back office',
    says: "On a headless store, the storefront is custom code that talks to the platform through a storefront API. Shopify's Storefront API lets customers view products, add them to a cart and check out, and Shopify says buyer traffic on it is not rate-limited. WooCommerce's Store API serves cart, checkout and product data without a key, and cannot look up other customers or orders. A back-office agent uses the admin API, as on any other store. A shopper-facing agent is built into your storefront code.",
    sources: ['shStorefront', 'shLimits', 'wooStoreApi'],
    span: 'lg:col-span-12',
  },
];

/* ── Comparison 1: the four platforms side by side. Every cell restates the
   linked documentation as read on 2026-10-11. ── */
const PLATFORM_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: 'WooCommerce' },
  { label: 'BigCommerce' },
  { label: 'Adobe Commerce and Magento' },
  { label: 'Shopify' },
];

const PLATFORM_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'How an agent signs in',
    values: [
      'API keys set to Read, Write or Read/Write access',
      'API accounts with OAuth scopes. Access tokens do not expire on a timer',
      'OAuth for outside integrations. Admin tokens last 4 hours by default',
      'An access token, limited to the access scopes the app requested',
    ],
  },
  {
    feature: 'Speed limits, as documented',
    values: [
      'Lists return 10 items a page by default. Store API rate limiting is optional and off by default',
      '150 requests per 30 seconds on Standard and Plus, 450 on Pro. Shared by every app on the store',
      'Input limits are off by default. Payment endpoints can be rate limited from version 2.4.7',
      '100 points a second on standard plans, 200 on Advanced, 1,000 on Plus',
    ],
  },
  {
    feature: 'How it hears about changes',
    values: [
      'Webhooks for orders, products, coupons and customers. Disabled after more than five failed deliveries in a row',
      'Webhooks with a light payload, such as only the order id. Deactivated after 90 days of inactivity',
      'Adobe I/O Events for most integrations. Webhooks where Commerce needs an answer at once',
      'Webhooks. Shopify says delivery is not always guaranteed and advises reconciliation jobs',
    ],
  },
  {
    feature: 'B2B quotes',
    values: [
      'No quote resource in the core REST API reference we read',
      'B2B Edition has a Quotes API for creating and updating sales quotes',
      'Negotiable quotes with B2B for Adobe Commerce. REST covers seller actions, GraphQL buyer actions',
      'B2B companies, catalogs and draft orders through the GraphQL Admin API',
    ],
  },
  {
    feature: 'AI the platform ships itself',
    values: [
      'MCP support, labelled a developer preview',
      'Smart Edits for bulk product changes, in beta, and an MCP server for storefronts',
      'AI re-ranking in Live Search, AI product recommendations, and a Developer Agent for extension code',
      'Sidekick in the admin and an opt-in Inbox agent for shoppers',
    ],
  },
  {
    feature: 'Watch out for',
    values: [
      'The refund call pays out through the payment gateway by default',
      'A token cannot be manually invalidated, so scope each one tightly',
      'The Cloud Service version has fewer REST endpoints than cloud or on-premises',
      'Any input array is capped at 250 items',
    ],
  },
];

/* ── Comparison 2: three ways to get AI into a store. ── */
const ROUTE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: "01 Your platform's own AI" },
  { label: '02 A helpdesk or app-store AI tool' },
  { label: '03 A custom agent built for you' },
];

const ROUTE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'What it is',
    values: [
      'Assistants the platform ships, such as Shopify Sidekick or BigCommerce Smart Edits',
      'A subscription tool, such as Gorgias AI Agent or Fin',
      'An agent designed around your rules and built for you',
    ],
  },
  {
    feature: 'What starts the work',
    values: [
      'A person typing in the admin, or a shopper in chat',
      'A customer message arriving in the helpdesk',
      'The event itself: an order, a return request, an emailed purchase order',
    ],
  },
  {
    feature: 'What it can change',
    values: [
      'What the platform allows, shown to you for review first',
      'What its connection to your store allows',
      'What its API key allows, and nothing else',
    ],
  },
  {
    feature: 'Who sets the rules',
    values: ['The platform', "The tool's settings and your help articles", 'You, in writing, before the build'],
  },
  {
    feature: 'Who you call when it breaks',
    values: ['The platform', "The tool's maker", 'The team that built it'],
  },
  {
    feature: 'Right call when',
    values: [
      'The built-in tool already does the job',
      'The job is answering customers from policies and order data',
      'The job follows your own rules, crosses two systems or should start without a prompt',
    ],
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
    title: 'Order status and returns',
    body: 'Where is my order, and can I send this back. The agent answers the first and prepares the second for a person to approve.',
    items: [
      "Confirms who is asking, then looks up the order, its tracking number and the carrier's status",
      "Checks a return request against your policy: the window, the item's condition and the reason given",
      'Drafts the return label request and the refund, and holds the refund for approval',
      'Hands the conversation to a person, with the order attached, when a request falls outside the policy',
    ],
    note: "On WooCommerce, the REST API's refund call has a setting named api_refund. The reference says that when it is true the payment gateway is used to generate the refund, and that the default is true. A tool holding a write key can therefore move money, so we plan the agent's key and its approval step together. For a buyer's own AI assistant, Shopify documents an Order MCP tool that reports fulfillment events, returns, refunds and exchanges.",
    sources: ['wooRestRef', 'shOrders'],
    span: 'lg:col-span-7',
  },
  {
    n: '02',
    title: 'Product questions',
    body: 'Shoppers ask whether a product fits, what it is made of and when it ships. The agent answers from your catalog and your policies, and from nothing else.',
    items: [
      "Reads product data, stock and shipping rules through the store's API",
      'Says so when the catalog does not hold the answer, and offers a person',
      'Logs the questions it could not answer, which gives you a list of product pages to fix',
    ],
    note: "Check what your platform ships before a build. Shopify's Inbox agent answers customer questions about products, shipping, returns, sizing and store policies from your catalog and published content, and Shopify calls it an opt-in feature. BigCommerce documents an MCP server through which AI agents search products and manage a cart. A store owner has to switch it on.",
    sources: ['shInbox', 'bcMcp'],
    span: 'lg:col-span-5',
  },
  {
    n: '03',
    title: 'Inventory and reorder',
    body: 'The agent watches stock against the reorder points you set and drafts the purchase order for a buyer to approve.',
    items: [
      'Reads on-hand stock and recent sales from the store, or from your ERP where stock lives there',
      'Lists what will run out first, with the numbers behind each line',
      'Drafts the purchase order with the supplier and price you already hold',
      'Flags a listing that is still live with nothing left to sell',
    ],
    note: "Write stock back with care. BigCommerce's documentation says to use absolute adjustments as the default method for updating inventory, and warns that bulk inventory operations run in parallel with bulk catalog or order operations may cause incorrect calculations. Shopify caps any input array at 250 items, and WooCommerce's batch endpoints take up to 100 objects by default.",
    sources: ['bcInventory', 'shLimits', 'wooRestRef'],
    span: 'lg:col-span-5',
  },
  {
    n: '04',
    title: 'B2B quotes and reorders',
    body: "A trade buyer emails a list of part numbers, or asks for the same order as last month. The agent drafts the quote at that customer's prices.",
    items: [
      'Reads the email and any attachment, whether a typed list, a PDF or a spreadsheet',
      'Matches each line to a product. A line it cannot match is flagged for a person and never guessed',
      "Applies the customer's price list and terms, then saves a draft quote",
      'For a repeat order, drafts from the last one and asks the buyer to confirm changes',
    ],
    note: 'BigCommerce B2B Edition has a Quotes API that creates and updates sales quotes, adds shipping methods and generates checkout links. Its MCP tools let a signed-in buyer request a quote at list price, and the sales representative applies pricing afterward. On Adobe Commerce, a negotiable quote lets a buyer and seller agree prices before an order. Adobe says its GraphQL APIs cover buyer actions only, with REST endpoints for seller actions. FactoryJet also builds EDI integrations and punchout catalogs for buyers who order through their own purchasing systems.',
    sources: ['bcQuotes', 'bcMcpB2b', 'acNqGql', 'acB2bRest'],
    span: 'lg:col-span-7',
  },
  {
    n: '05',
    title: 'Marketplace listings',
    body: 'The same product sells on your store, Amazon, Walmart and eBay, each with its own format. The agent drafts each listing update and a person approves price changes.',
    items: [
      "Rewrites titles and attributes to each marketplace's format from one source record",
      "Previews errors before submitting, where the marketplace's API allows it",
      'Sends only the fields that changed',
    ],
    note: "Amazon's Listings Items API accepts listing updates one at a time and points bulk work to its JSON listings feed. Amazon also says a full update replaces the existing content of a listing, so attributes left out of a submission may be dropped. That is why the agent sends partial updates. Each Amazon operation has its own rate and burst limits. Walmart says its Marketplace APIs cover items, inventory, orders, pricing and promotions, and that access tokens are valid for 15 minutes. On eBay, an offer becomes a live listing when it is published.",
    sources: ['amzListings', 'amzUsage', 'walmartApis', 'ebayInventory'],
    span: 'lg:col-span-7',
  },
  {
    n: '06',
    title: 'Customer messages',
    body: 'Email, chat and WhatsApp messages land in one queue. The agent sorts them, answers the ones your policies cover and drafts the rest.',
    items: [
      'Tags each message by what it is about and how urgent it is',
      'Answers policy and order questions, with the order attached',
      'Drafts replies to the rest in your tone, for a person to send',
      'Never promises a refund, a discount or a delivery date on its own',
    ],
    note: 'A helpdesk tool may already do this. Gorgias says its AI Agent is on every plan, and Fin by Intercom says it can be used with existing helpdesks such as Salesforce and Zendesk. A custom agent earns its place when replies depend on data those tools cannot reach, such as contract prices in your ERP. FactoryJet builds WhatsApp and HubSpot integrations as part of this work.',
    sources: ['gorgias', 'fin'],
    span: 'lg:col-span-5',
  },
];

/* ── Keys, scopes and approvals. Three enforced by the platform, three we set
   up, two your team keeps. Platform facts are from the linked pages. ── */
type Keeper = 'platform' | 'build' | 'person';

const KEEPER_LABEL: Record<Keeper, string> = {
  platform: 'The platform enforces',
  build: 'We set up',
  person: 'Your team keeps',
};

const GUARDS: ReadonlyArray<{ rule: string; keeper: Keeper; note: string }> = [
  {
    rule: 'A key with a permission level',
    keeper: 'platform',
    note: 'WooCommerce keys are Read, Write or Read/Write. BigCommerce API accounts carry OAuth scopes. Shopify tells app builders to request only as much data access as the app needs to work.',
  },
  {
    rule: 'A ceiling on requests',
    keeper: 'platform',
    note: "BigCommerce rejects requests once a store's quota is used, until the quota refreshes. Shopify returns a throttle error when an app's bucket is full and recommends a backoff time of one second.",
  },
  {
    rule: 'Tokens that expire',
    keeper: 'platform',
    note: 'On Adobe Commerce an admin token is valid for 4 hours by default. Adobe has also disabled, by default, the use of a never-expiring integration token on its own, citing the risk if that token is compromised.',
  },
  {
    rule: 'One key per agent',
    keeper: 'build',
    note: "BigCommerce's advice is to create separate API accounts for each app or function and limit each to the privileges it needs. We follow that on every platform, so one agent's key can be switched off without touching another.",
  },
  {
    rule: 'Read-only first',
    keeper: 'build',
    note: 'The first version reads and drafts. Write access is added one action at a time, after you have read the logs.',
  },
  {
    rule: 'The same event handled once',
    keeper: 'build',
    note: 'BigCommerce says duplicate webhook callbacks may occasionally occur, and Shopify tells apps to ignore duplicate deliveries. The agent records each event it has handled, so a repeat does not create a second refund or a second order.',
  },
  {
    rule: 'Approval before money moves',
    keeper: 'person',
    note: 'Refunds, discounts, price changes and quotes wait for a named person. On WooCommerce that matters most, because the refund call pays out through the payment gateway by default.',
  },
  {
    rule: 'Your policy, in writing',
    keeper: 'person',
    note: 'The agent follows the return window, price lists and escalation rules you give it. When a rule changes, tell us and the agent changes with it.',
  },
];

/* ── Where store agent projects break. All eight come from the linked pages. ── */
const BREAKS: ReadonlyArray<{ t: string; b: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    t: 'A refund call that pays out by default',
    b: "WooCommerce's REST reference says the api_refund setting uses the payment gateway to generate the refund when true, and that its default is true. An agent that only meant to record a refund could send the money.",
    sources: ['wooRestRef'],
  },
  {
    t: 'A webhook that switches itself off',
    b: 'WooCommerce disables a webhook after more than five consecutive delivery failures. BigCommerce deactivates a webhook subscription after 90 days of inactivity. Either way the agent stops hearing about orders until someone notices.',
    sources: ['wooWebhooks', 'bcWebhooks'],
  },
  {
    t: 'A notification with almost nothing in it',
    b: "BigCommerce's webhooks carry a light payload. Its example is an order status update that contains only the order id. The agent has to call back for the detail, and that call counts against the store's quota.",
    sources: ['bcWebhooks', 'bcRate'],
  },
  {
    t: 'A quota shared with every other app',
    b: "BigCommerce says all apps accessing a store share the store's quota. An agent that polls too often uses up the allowance your shipping and accounting apps need, and going over returns a Too Many Requests response.",
    sources: ['bcRate'],
  },
  {
    t: 'A token that never expires',
    b: 'BigCommerce says its access tokens do not expire based on time and cannot be manually invalidated. Adobe has disabled the standalone use of integration tokens by default for the same kind of risk. Scope each key to one job.',
    sources: ['bcAccounts', 'acTokens'],
  },
  {
    t: 'A full update that drops fields',
    b: "Amazon says its full listing update replaces the existing content of a listing, and that existing attributes may be dropped if they are omitted. Amazon's own example is an offer-only submission that removes the bullet points on an existing listing.",
    sources: ['amzListings'],
  },
  {
    t: 'A doorway that moves',
    b: "Shopify's documentation says the catalog and cart tools on its Storefront MCP endpoint were removed, and points developers to its Universal Commerce Protocol. WooCommerce calls its MCP integration a developer preview that may change in future releases.",
    sources: ['shStorefrontMcp', 'wooMcp'],
  },
  {
    t: 'A batch that is too big',
    b: "Shopify returns an error if an input array exceeds 250 items. WooCommerce's batch endpoints are limited to 100 objects by default. On Adobe Commerce, once input limits are enabled, a synchronous request takes 20 entities by default.",
    sources: ['shLimits', 'wooRestRef', 'acInput'],
  },
];

/* ── What FactoryJet builds and how we work. No client is named on this page
   and no result is claimed. The second card is Bhavesh's statement of 9 and
   11 Oct 2026. The last card is the wording set by the 11 Oct 2026 rules. ── */
const EXPERIENCE: ReadonlyArray<{ t: string; kind: string; what: string; href: string; cta: string; span: string }> = [
  {
    t: 'What we build',
    kind: 'Stores and the agents inside them',
    what: 'FactoryJet designs, builds and supports online stores on WooCommerce, BigCommerce, Adobe Commerce and Shopify, and the AI agents that work inside them. Shopify agents have a page of their own.',
    href: '/services/shopify-ai-agents',
    cta: 'See Shopify AI agents',
    span: 'lg:col-span-7',
  },
  {
    t: 'What connects to the store',
    kind: 'ERP, EDI and messaging',
    what: 'We build EDI integrations, punchout catalogs, and Xero, HubSpot and WhatsApp integrations. We have worked on Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs, on RFQs and quoting, daily bookkeeping, and purchase and sales orders.',
    href: '/services/erp-ai-agents',
    cta: 'See ERP AI agents',
    span: 'lg:col-span-5',
  },
  {
    t: 'What you see before you sign',
    kind: 'A demo on your own data',
    what: 'Before a contract, we show working software on your own data. For a store that means a handful of your real orders, return requests or wholesale emails run through a first version.',
    href: '/contact',
    cta: 'Ask for a demo on your data',
    span: 'lg:col-span-5',
  },
  {
    t: 'Who looks after it',
    kind: 'Managed after launch',
    what: 'We quote the build, and any support you choose, as fixed prices in writing after a short scoping call. After launch FactoryJet can keep managing the servers, the AI models, the API connections and the maintenance, so your team does not have to. You own what we build.',
    href: '/services/ai-agent-monitoring',
    cta: 'See monitoring and support',
    span: 'lg:col-span-7',
  },
];

/* ── Who this is for. Examples of the kinds of store the work suits, not a
   client list. Pictures were generated on 2026-10-11 and checked at the size
   they ship. The people in them are not FactoryJet staff or clients. ── */
const INDUSTRIES: ReadonlyArray<{ img: string; alt: string; t: string; b: string }> = [
  {
    img: `${IMG}/packing-table-order.webp`,
    alt: 'A woman with short dark curly hair in an olive green apron lowers a folded grey sweater into an open cardboard box on a wooden packing table, beside an orange tape dispenser and a roll of brown paper',
    t: 'Direct-to-consumer brands',
    b: 'Order status questions and return requests arrive every day. The agent answers the first kind and prepares the second for approval.',
  },
  {
    img: `${IMG}/wholesale-shelf-count.webp`,
    alt: 'A woman with shoulder-length silver hair in a charcoal fleece vest points a pencil at a cardboard carton on a steel warehouse shelf while holding a clipboard, next to an orange step stool',
    t: 'Wholesale and B2B sellers',
    b: "Trade buyers email part lists and repeat orders. Each one becomes a draft quote at that customer's prices, for your sales rep to check.",
  },
  {
    img: `${IMG}/label-mailer-station.webp`,
    alt: 'A man in a mustard yellow t-shirt with his black hair tied up presses a blank white label onto a small cardboard box at a wooden bench, beside a stack of grey mailer bags and an orange tape gun',
    t: 'Marketplace sellers',
    b: 'One product, four listing formats. The agent drafts each update from a single record, and a person approves price changes.',
  },
  {
    img: `${IMG}/returns-bench-inspection.webp`,
    alt: 'A man with a short grey beard in a navy sweatshirt holds up a plain canvas tote bag to inspect it at a white table, between an open cardboard box and an orange plastic crate of folded clothes',
    t: 'Stores with heavy returns',
    b: 'Each request is checked against your policy before anyone opens a box. Refunds wait for a person.',
  },
];

/* ── Process. Six steps, in the order we work. ── */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'List what your store runs on',
    b: 'Platform, plan, apps, payment gateway and any ERP or helpdesk behind it. The plan decides how fast an agent may call the store, and the apps decide what is already automated.',
  },
  {
    n: '02',
    t: "Check the platform's own tools first",
    b: "If Sidekick, an Inbox agent, Smart Edits or your helpdesk's AI already does the job, we say so, even when it means there is no work for us.",
  },
  {
    n: '03',
    t: 'Pick one job and write down its rules',
    b: 'One task, such as return requests or wholesale quotes. The rules a person follows today go on paper, along with who approves the result.',
  },
  {
    n: '04',
    t: 'Show it on your own data',
    b: 'Before a contract, we run a handful of your real orders, requests or emails through a first version, so you see drafts you can judge against what your team did.',
  },
  {
    n: '05',
    t: 'Build against a test store, under a key of its own',
    b: 'The agent is built against a staging or development copy of your store where you have one. It gets its own API key, with only the access the job needs.',
  },
  {
    n: '06',
    t: 'Run it beside your team, then stay on',
    b: 'For an agreed period the agent drafts while a person does the same work, and the rules are fixed where the two differ. After launch we read the logs, re-test when the platform or the AI model changes, and fix what breaks.',
  },
];

/* ── Other names buyers come across. Each line restates the firm's own page as
   read on 2026-10-11. Feeds the visible list AND the ItemList JSON-LD. ── */
const OTHERS: ReadonlyArray<{ name: string; focus: string; says: string; source: SrcKey }> = [
  {
    name: 'Shopify',
    focus: 'Commerce platform · its own assistants',
    says: 'Ships Sidekick, an assistant in the Shopify admin that presents changes for review before applying them, and an opt-in Inbox agent that answers shoppers from the catalog and store policies.',
    source: 'shSidekick',
  },
  {
    name: 'BigCommerce',
    focus: 'Commerce platform · MCP server and Smart Edits',
    says: 'Documents an MCP server that lets AI agents search products, manage a cart and hand off to checkout, and Smart Edits, a beta tool that drafts bulk product updates for review.',
    source: 'bcMcp',
  },
  {
    name: 'Kibo Commerce',
    focus: 'Order management and commerce · agentic framework',
    says: 'Its AI page describes an agentic framework built on five functions (Engage, Configure, Explain, Analyze and Optimize) across commerce and order management. It says order routing and checkout are reachable by outside AI tools through one authenticated connection.',
    source: 'kibo',
  },
  {
    name: 'Fluent Commerce',
    focus: 'Order management · sourcing agent and MCP server',
    says: 'Announced an AI agent for order sourcing in June 2026, with recommendations subject to human approval. Its documentation describes an MCP server that gives customer service AI agents order status, shipment and tracking data.',
    source: 'fluentMcp',
  },
  {
    name: 'Gorgias',
    focus: 'Helpdesk · AI Agent',
    says: 'A helpdesk with an AI Agent. Its pricing page says AI Agent is on every plan and that you pay only when it resolves a conversation.',
    source: 'gorgias',
  },
  {
    name: 'Fin by Intercom',
    focus: 'AI agent for customer service',
    says: 'Priced per outcome. Its pricing page counts an outcome when a customer confirms the issue is resolved, does not ask for more help, or Fin completes a workflow, and says Fin can be used with helpdesks such as Salesforce and Zendesk.',
    source: 'fin',
  },
  {
    name: 'Unthinkable',
    focus: 'Services firm · custom agents',
    says: 'Offers custom AI agent development for retail and ecommerce brands. Its page covers product discovery, customer support, order management and operational workflows.',
    source: 'unthinkable',
  },
  {
    name: 'Automat',
    focus: 'Agents for refunds and chargebacks',
    says: 'Describes agents that handle order refunds, chargebacks and account admin directly on Shopify, Amazon and other platforms, with a person approving every sensitive action before it executes.',
    source: 'automat',
  },
];

const othersSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Other platforms, tools and firms buyers come across for ecommerce AI agents',
  itemListElement: OTHERS.map((o, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: o.name,
    url: SRC[o.source].url,
  })),
};

const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  { href: '/services/shopify-ai-agents', t: 'Shopify AI agents', b: 'The Shopify page: the GraphQL Admin API, draft orders, Flow and Sidekick in detail.' },
  { href: '/services/ai-customer-support-agents', t: 'AI customer support agents', b: 'Support tickets and helpdesk work, on any platform.' },
  { href: '/services/erp-ai-agents', t: 'AI agents for ERP systems', b: 'The system behind the store: Odoo, NetSuite, SAP Business One and ERPNext.' },
  { href: '/services/ai-inventory-management-agents', t: 'Inventory agents for stores', b: 'Low-stock flags, draft purchase orders and one stock count across store, warehouse and ERP.' },
  { href: '/services/ai-agent-development', t: 'AI agent development', b: 'Custom agents for sales, support and operations beyond the store.' },
  { href: '/services/ai-agent-monitoring', t: 'AI agent monitoring and support', b: 'Watching, re-testing and fixing an agent after launch.' },
  { href: '/services/ecommerce-development', t: 'Ecommerce development', b: 'Building or rebuilding the store itself.' },
  { href: '/blog/best-ai-agents-for-ecommerce-2026', t: 'Guide: AI agents for ecommerce', b: 'The longer read on tools and use cases.' },
  { href: '/agentic-commerce', t: 'Agentic commerce explained', b: 'The shopper side: AI assistants that search, fill a cart and check out.' },
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

export default function EcommerceAiAgentsPage() {
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
                    ECOMMERCE AI AGENTS &middot; ANY PLATFORM
                  </span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.2rem]">
                  AI agents for ecommerce that draft the replies, refunds, quotes and reorders your team approves.
                </h1>

                <p className={`${styles.heroLead} mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600`}>
                  We design, build and support AI agents that work inside your online store, on WooCommerce,
                  BigCommerce, Adobe Commerce, Shopify or a headless build.
                </p>

                <div className={`${styles.heroForm} mt-6`}>
                  <HeroInlineForm
                    region="us"
                    source="services_ecommerce_ai_agents_hero"
                    service="Ecommerce AI Agents"
                    submitLabel="See a demo on my data"
            trustText="Working software on your own data before you sign. Founder replies within 24 hours."
          />
                </div>

                <p className={`${styles.heroDetails} mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600`}> Some jobs need nothing built, because your
                  platform or your helpdesk already ships a tool for them. Where your rules go further, we build the
                  agent, give it its own limited access to your store and stay on after launch. You get a fixed quote
                  in writing before work starts.
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
                  <span>Platform docs read {CHECKED_ON}</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
                  <figcaption className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                    How an agent reaches your store
                  </figcaption>
                  <ol className="mt-4 grid gap-3">
                    {HERO_PATH.map((s) => (
                      <li
                        key={s.n}
                        className={`flex items-start gap-3 rounded-xl border px-4 py-3 ${
                          s.n === '02' ? 'border-dashed border-[#F05A28] bg-[#FFF4EE]' : 'border-fj-neutral-200 bg-fj-cream'
                        }`}
                      >
                        <span className="mt-0.5 font-fj-mono text-xs font-bold text-[#B23E13]">{s.n}</span>
                        <span>
                          <span className="block font-fj-display text-[15px] font-semibold text-fj-ink">{s.t}</span>
                          <span className="mt-0.5 block font-fj-body text-[13px] leading-snug text-fj-neutral-600">
                            {s.b}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-3 font-fj-body text-[13px] leading-snug text-fj-neutral-600">
                    The dashed step is where platforms differ. Each one sets its own keys and limits, and this page
                    compares them from their own documentation.
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
                An ecommerce AI agent is software that does one store job from start to finish. It reads an order, a
                return request, a customer message or a wholesale purchase order, looks up your store through the
                platform&rsquo;s API, and drafts the next step for a person to approve. It works on WooCommerce,
                BigCommerce, Adobe Commerce, Shopify and headless stores.
              </p>
              <p className="mt-4 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                Each platform sets its own limits. Going by its own documentation (as read on {CHECKED_ON}),
                BigCommerce allows 150 requests per 30 seconds on Standard and Plus plans, Shopify meters its Admin
                API at 100 points a second on standard plans, WooCommerce returns 10 items per page by default, and an
                Adobe Commerce admin token lasts 4 hours by default.
              </p>
              <SourceLinks ids={['bcRate', 'shGqlRate', 'wooRestRef', 'acTokens']} />
            </div>
          </div>
        </section>

        {/* 3. WHAT EACH PLATFORM GIVES AN AGENT */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Before anyone builds</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              What each store platform gives an AI agent to work with.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Each card restates the platform&rsquo;s own documentation, as read on {CHECKED_ON}. Three words come up
              on every card. An API is the official doorway software uses to read and change store data. A webhook is
              a message the store sends when something changes. MCP, the Model Context Protocol, is an open standard
              that lets an AI tool connect to a system&rsquo;s data and tools. If your store runs on Shopify, our{' '}
              <Link href="/services/shopify-ai-agents" className="font-semibold text-fj-ink underline underline-offset-4">
                Shopify AI agents
              </Link>{' '}
              page goes deeper than the Shopify card here. If your content lives in WordPress and your store in
              Shopify, the two usually need joining before an agent can answer from both; that work is on our{' '}
              <Link href="/services/wordpress-shopify-integration" className="font-semibold text-fj-ink underline underline-offset-4">
                WordPress Shopify integration
              </Link>{' '}
              page.
            </p>
            <SourceLinks ids={['wooWebhooks', 'wooMcp']} />
            <ul className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
              {PLATFORMS.map((c) => (
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
                Three things to plan around before anyone builds.
              </h3>
              <ul className="mt-4 grid max-w-3xl gap-3 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  WooCommerce&rsquo;s refund call pays out through the payment gateway by default. Its reference says
                  the api_refund setting is true unless you change it.
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  BigCommerce says its access tokens do not expire based on time and cannot be manually invalidated.
                  Its advice is a separate API account for each app or function, limited to the privileges it needs.
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  Shopify&rsquo;s documentation says the catalog and cart tools on its Storefront MCP endpoint were
                  removed in favor of its Universal Commerce Protocol. Anything built on a new agent doorway needs a
                  plan for the day it moves.
                </li>
              </ul>
              <SourceLinks ids={['wooRestRef', 'bcAccounts', 'shStorefrontMcp', 'shAgents']} />
            </div>
          </div>
        </section>

        {/* 4. COMPARISON: the four platforms side by side */}
        <ComparisonTable
          eyebrow="Four platforms compared"
          headline="WooCommerce, BigCommerce, Adobe Commerce and Shopify, side by side for an AI agent."
          lead="The same six questions, asked of each platform's own documentation. A headless store answers with the row for the platform behind it."
          columns={PLATFORM_COLUMNS}
          rows={PLATFORM_ROWS}
          footer={
            <>
              Platform facts are from each platform&rsquo;s own documentation as read on {CHECKED_ON}. The pages are
              linked in the cards above and in the sources list below.
            </>
          }
          scrollRegionLabel="Comparison of four store platforms for AI agent work"
        />

        {/* 5. SIX JOBS */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Six jobs</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Six store jobs an AI agent can draft for your team.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Each card says what the agent does and what the platform&rsquo;s documentation means for that job. The
              pattern is the same in all six: read what arrives, look up the store, draft, approve. Support tickets
              have a page of their own,{' '}
              <Link
                href="/services/ai-customer-support-agents"
                className="font-semibold text-fj-ink underline underline-offset-4"
              >
                AI customer support agents
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
              These are the jobs store owners search for. In US search data we pulled on {CHECKED_ON}, &ldquo;ai for
              ecommerce&rdquo; drew about 1,900 searches a month and &ldquo;ecommerce chatbot&rdquo; about 480.
            </p>
            <p className="mt-3 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
              Platform and marketplace notes are as documented on {CHECKED_ON}.
            </p>
          </div>
        </section>

        <MidPageCTA
          headline="Tell us the job. We will say if a tool you already have does it."
          sub="Send one task that fills your team's day. We reply with what your platform or helpdesk already covers, what we would build, and a fixed quote if there is work for us."
          label="Scope my agent"
        />

        {/* 6. COMPARISON: three ways to get AI into a store */}
        <ComparisonTable
          eyebrow="Three routes compared"
          headline="Your platform's own AI, a helpdesk tool, or an agent built for you."
          lead="Each route is the right one for somebody. On the scoping call we say which we would choose for you and why, even when it means there is no work for us."
          columns={ROUTE_COLUMNS}
          rows={ROUTE_ROWS}
          footer={`Product names and behaviors are from each vendor's own pages as read on ${CHECKED_ON}.`}
          scrollRegionLabel="Comparison of three ways to add AI to an online store"
        />

        {/* 7. KEYS, SCOPES, APPROVALS */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Keeping it safe</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Keys, scopes and approvals keep a store agent safe.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  To your store, an agent is an API key. It can do what that key allows and nothing more.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  So safety is mostly setup. It comes down to the key, its scopes, the approval step and the log.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  Eight controls follow. The platform enforces three, we set up three and your team keeps two.
                </p>
                <SourceLinks ids={['wooRestRef', 'bcAccounts', 'bcRate', 'bcWebhooks', 'shAdmin', 'shLimits', 'shWebhooks', 'acTokens']} />
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
              Eight places a store agent project breaks.
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Knowing these early saves a rebuild. All eight come straight from the linked platform and marketplace
              pages.
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

        {/* 9. WHAT WE BUILD AND HOW WE WORK. No client is named on this page. */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Working with FactoryJet</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              What FactoryJet builds for online stores, stated plainly.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              FactoryJet was founded in 2014 and has served more than 500 businesses. Here are four things to know
              before a scoping call. Client projects with public write-ups are in our{' '}
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
                  Built for stores that already take orders every day.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  What you sell changes the messages. The job is the same in each store. Something arrives, someone
                  looks it up, someone types a reply or an order.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  If the store itself needs work first, see{' '}
                  <Link
                    href="/services/ecommerce-development"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    ecommerce development
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
                  How we design, build and support a store agent.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  The platform&rsquo;s own tools are checked first. Then one job is agreed, shown on your own data and
                  built against a test store. After launch,{' '}
                  <Link
                    href="/services/ai-agent-monitoring"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    AI agent monitoring and support
                  </Link>{' '}
                  keeps it working as the platform and the AI models change. For agents outside the store, see{' '}
                  <Link
                    href="/services/ai-agent-development"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    AI agent development
                  </Link>
                  .
                </p>
                <img
                  src={`${IMG}/planning-cards-table.webp`}
                  alt="A woman in a rust red cardigan and a man in a white shirt, seen from behind, stand at a wooden table with three rows of blank white cards and one orange card, and he holds two more blank cards"
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

        {/* 12. OTHER NAMES BUYERS COME ACROSS */}
        <section className="border-t border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Other options</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Eight other names buyers come across for ecommerce AI.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  We are one option, and we wrote this list. Four of these came up in AI assistants&rsquo; answers to
                  ecommerce buyer questions on 9 Oct 2026, and four in US searches for ecommerce AI terms on{' '}
                  {CHECKED_ON}. Each line restates the firm&rsquo;s own page. We did not test their products.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Where we differ is range. FactoryJet works on WooCommerce, BigCommerce, Adobe Commerce, Shopify and
                  custom stores, and on the ERP behind them, so the route we recommend is not tied to one
                  vendor&rsquo;s product.
                </p>
                <SourceLinks ids={['bcSmartEdits', 'shInbox', 'fluentNews']} />
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
                  Every platform limit, feature name and number on this page was read from the pages listed here on
                  that day. Each one answered a plain web request. Platforms change these pages, so check the linked
                  page before you act on one.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Search volumes are US monthly figures from DataForSEO, pulled the same day. The two price ranges in
                  the questions below come from the named guides, and the two list prices from each vendor&rsquo;s own
                  pricing page.
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
          eyebrow="Ecommerce AI agents FAQ"
          headline="Ecommerce AI questions, answered plainly."
          lead={`What store owners, operations leads and ecommerce managers ask before adding an agent. Platform answers are from each platform's own documentation as read on ${CHECKED_ON}.`}
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 16. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="Ecommerce AI agents"
          headline="Keep your store as the record. Add an agent your team can check."
          sub="Tell us one job that fills your team's day. We say what your platform or helpdesk already covers, show a first version on your own data and stay on after launch."
          primaryCta={{ label: 'Scope my agent', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="Demo on your own data before a contract. Fixed quote in writing. You own the code."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
