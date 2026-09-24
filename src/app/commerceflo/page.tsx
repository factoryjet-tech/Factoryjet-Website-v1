import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

/*
 * /commerceflo: identity page for Commerceflo by FactoryJet.
 *
 * Rebuilt 2026-09-17 (wave 1, item 8). AI answer engines were spelling the product
 * "CommerceFlow" and citing unrelated companies (commerceflow.ai, commerce-flow.com).
 * Every product fact below was checked against commerceflo.ai on 2026-09-17:
 * homepage (agent roster, connections, "no customer logos yet"), /platform
 * (architecture, approval threshold), /pricing (pricing model, credits, models),
 * /terms-of-service (early access), /privacy-policy (Claude API, US hosting,
 * no training on merchant data) and /use-cases/* (B2B features, migration).
 *
 * Removed claims the product site does not support: the "90-second audit", the
 * "2-second sync", "you own and run the system, not a subscription", and ERP
 * connectors that commerceflo.ai does not list. Do not add them back without a
 * primary source. No FactoryJet or Commerceflo prices appear anywhere on purpose.
 */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_URL = 'https://factoryjet.com/commerceflo';
const PAGE_MODIFIED = '2026-09-17';
const PAGE_TITLE = 'Commerceflo by FactoryJet: The Commerce AI Operator';
const PAGE_DESCRIPTION =
  'Commerceflo by FactoryJet is an AI commerce operator in early access. Eight named agents propose fixes across DTC, B2B, marketplaces and POS.';

const CF_HOME = 'https://commerceflo.ai/';
const CF_PLATFORM = 'https://commerceflo.ai/platform';
const CF_PRICING = 'https://commerceflo.ai/pricing';
const CF_TERMS = 'https://commerceflo.ai/terms-of-service';
const CF_PRIVACY = 'https://commerceflo.ai/privacy-policy';
const CF_APP = 'https://app.commerceflo.ai/';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Commerceflo by FactoryJet, the commerce AI operator' }],
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: PAGE_TITLE, description: PAGE_DESCRIPTION, images: ['https://factoryjet.com/og-default.png'] },
  alternates: {
    canonical: 'https://factoryjet.com/commerceflo',
    languages: { 'en-US': 'https://factoryjet.com/commerceflo', 'x-default': 'https://factoryjet.com/commerceflo' },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─── FAQ: one array feeds the visible accordion AND the FAQPage JSON-LD ─── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'identity', label: 'Name and maker' },
  { key: 'how', label: 'How it works' },
  { key: 'fit', label: 'Fit and alternatives' },
  { key: 'access', label: 'Pricing and access' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // Name and maker
  { category: 'identity', question: 'What is Commerceflo?', answer: 'Commerceflo by FactoryJet is an AI commerce operator in early access. It runs a direct-to-consumer store, B2B portals, marketplace listings and retail point of sale on one data model. Eight named AI agents watch inventory, pricing, content, customers and more, propose a worked fix with their reasoning, and act only after you approve or under an auto-approve rule you set.' },
  { category: 'identity', question: 'Who makes Commerceflo?', answer: 'FactoryJet makes Commerceflo. FactoryJet is an ecommerce development and AI services company founded by Bhavesh Barot, and Commerceflo is its own AI commerce operator. The product site is commerceflo.ai. FactoryJet still builds on Shopify, Shopify Plus, Adobe Commerce, BigCommerce and WooCommerce, and recommends Commerceflo only when it fits how a brand sells.' },
  { category: 'identity', question: 'Is Commerceflo the same as CommerceFlow or commerceflow.ai?', answer: 'No. Commerceflo is spelled with “flo” and is made by FactoryJet. It is not related to CommerceFlow at commerceflow.ai, a separate company offering AI agents for B2B quoting and catalog data. It is also unrelated to Commerce Flow at commerce-flow.com, an Amazon Ads automation tool from negocia, Inc., and to the CommerceFlow order management app on the Shopify App Store.' },
  { category: 'identity', question: 'Is FactoryJet a software company or a services company?', answer: 'FactoryJet is a services company. It designs, builds and implements ecommerce stores, B2B portals and AI agents, and the client owns and runs what is built. Commerceflo is the exception: it is FactoryJet’s own AI commerce operator, sold as a one-time implementation plus a monthly subscription for the platform and its agents.' },
  { category: 'identity', question: 'How do I log in to Commerceflo?', answer: 'Existing users sign in at app.commerceflo.ai with an email and password or a Google account. If you do not have an account yet, note that Commerceflo is in early access: its terms of service say evaluation accounts are set up after a scoping conversation with the team. You can request that conversation from this page.' },

  // How it works
  { category: 'how', question: 'What is a commerce AI operator?', answer: 'A commerce AI operator is software that does the operating work of running a store instead of only reporting on it. It reads live data from your channels, spots problems such as low stock or a price gap between channels, proposes the fix, and carries it out once a person approves. A dashboard shows you numbers. An operator does the task.' },
  { category: 'how', question: 'What is human-in-the-loop approval for AI agents?', answer: 'Human-in-the-loop means a person checks an AI agent’s proposed action before it runs. The agent drafts the change, a human approves or rejects it, and only then does the agent act. It is a sensible default for anything that touches prices, stock or customers, while low-risk routine actions can run on rules you set in advance.' },
  { category: 'how', question: 'Will Commerceflo change my store without asking?', answer: 'No. Every agent proposes first, and nothing runs until you click Approve. You can set an auto-approve threshold so routine changes you already trust go through on their own, while anything above that threshold waits for a person. Watcher agents, such as Financial and Compliance, flag issues for you rather than making changes.' },
  { category: 'how', question: 'What are Commerceflo’s eight agents?', answer: 'Inventory, Pricing, Content, Customer and Growth can make changes after you approve: reorders, repricing, listing rewrites, customer follow-ups and new channel launches. Fulfillment, Financial and Compliance watch and warn: faster or cheaper shipping routes, what moved in your numbers, and tax or policy changes on each channel. commerceflo.ai says more agents are on the way.' },
  { category: 'how', question: 'Which AI models does Commerceflo use?', answer: 'Commerceflo runs its AI features in part on Anthropic’s Claude API. Its pricing page says Claude Haiku handles fast, high-volume operations and Claude Sonnet handles complex analysis, with routing that picks a model for each job. Its privacy policy says your commerce data and prompts are not used to train Anthropic’s foundation models or any third-party AI models.' },
  { category: 'how', question: 'How can AI be used in inventory management?', answer: 'AI helps inventory in three practical ways: forecasting demand from sales history so you reorder on time, spotting stockout risk across every channel that shares the same stock, and drafting purchase orders or stock transfers for a person to approve. In Commerceflo, the Inventory agent predicts stockouts from live stock and recent sales, then drafts the reorder for your approval.' },
  { category: 'how', question: 'How do you manage inventory across multiple channels?', answer: 'Keep one inventory count that every channel reads, instead of a separate count inside each app. Connect every storefront and marketplace to that single source, sync changes in real time rather than in nightly batches, and hold a small buffer on your fastest sellers. Commerceflo keeps one inventory ledger across DTC, B2B, marketplace and POS sales for exactly this reason.' },
  { category: 'how', question: 'What is unified commerce?', answer: 'Unified commerce means running every sales channel, such as your online store, marketplaces, B2B portal and physical stores, on one shared set of data for products, inventory, orders and customers. Each channel reads the same records, so stock levels, prices and order status agree everywhere without someone reconciling spreadsheets at the end of the day.' },
  { category: 'how', question: 'What is the difference between unified commerce and omnichannel?', answer: 'Omnichannel describes the customer experience: shoppers move between your website, marketplaces and stores and get a consistent experience. Unified commerce describes the system behind it: one shared data layer for products, inventory, orders and customers. You can offer an omnichannel experience on top of disconnected tools, but unified commerce removes the syncing work between them.' },
  { category: 'how', question: 'Can you give an example of unified commerce?', answer: 'A brand sells the same jacket on its own website, on Amazon and in a retail store. With unified commerce, all three read one stock count. When the store sells the last medium, the website and the Amazon listing update right away, and a return taken at the store puts that jacket back on sale online without anyone typing it in.' },
  { category: 'how', question: 'What is an agentic commerce platform?', answer: 'An agentic commerce platform uses AI agents that take actions, not just answer questions. The agents plan a task, use tools such as your inventory or pricing system, and carry out steps like reordering stock or updating listings, usually with a person approving important changes. The same term also covers AI assistants that shop and check out on behalf of consumers.' },
  { category: 'how', question: 'Which platforms and systems does Commerceflo connect to?', answer: 'commerceflo.ai lists connections including Amazon, Walmart, eBay, TikTok Shop, WooCommerce, BigCommerce, Magento, Squarespace, Meta Commerce and Google Shopping, plus systems such as NetSuite, SAP, Microsoft Dynamics, QuickBooks, Salesforce, Klaviyo, ShipBob, Stripe, Linnworks and Cin7. Because the product is in early access, confirm the exact connector, and which records sync each way, for every system you run.' },
  { category: 'how', question: 'Can Commerceflo run DTC and B2B on one catalog?', answer: 'Yes. B2B runs in the same core and data model as DTC rather than as a bolt-on app. commerceflo.ai lists customer-specific pricing and catalogs, bulk and quick order forms, purchase order and CSV order intake, quote-to-order, Net 30, 60 or 90 payment terms with credit limits, and sales reps placing orders on a customer’s behalf.' },
  { category: 'how', question: 'Can shoppers buy through ChatGPT, Gemini or Claude with Commerceflo?', answer: 'Not yet. commerceflo.ai lists conversational commerce as in development and says the team is building native checkout for ChatGPT, Gemini and Claude as a real sales channel rather than a chatbot plugin. If checkout inside AI assistants matters to your plans, ask for its current status on a walkthrough before you choose a platform around it.' },

  // Fit and alternatives
  { category: 'fit', question: 'Who is Commerceflo for?', answer: 'commerceflo.ai names four groups: DTC and consumer packaged goods brands adding channels, B2B distributors and wholesalers moving orders off email and spreadsheets, manufacturers and distributors that run on an ERP, and omnichannel retailers with physical stores. It calls itself a mid-market platform, built so a small team can run DTC, B2B, marketplaces and retail without a specialist for each channel.' },
  { category: 'fit', question: 'Which AI agents are best for ecommerce?', answer: 'It depends on the job. For customer messages, helpdesk agents such as Gorgias AI Agent handle order status, returns and product questions. For rule-based automation on a Shopify store, Shopify Flow is free. For inventory and orders across marketplaces, tools such as Linnworks and Cin7 are built for the job. For several channels on one system with approval-based agents, Commerceflo, which we make, is an option.' },
  { category: 'fit', question: 'What is Shopify Flow, and is it free?', answer: 'Shopify Flow is Shopify’s own automation app. You build workflows from templates or your own logic to handle tasks such as tagging customers, flagging risky orders and reacting to inventory levels, and you can connect apps like Slack or Google Sheets. The Shopify App Store lists Flow as free. It runs the rules you write rather than deciding what needs fixing.' },
  { category: 'fit', question: 'When is Commerceflo the wrong choice?', answer: 'Skip it if you sell mainly through one store with simple rules, if you need proven results from other customers before committing, if you want the largest app ecosystem, or if you cannot change core systems this year. In those cases Shopify Flow, a focused tool such as Linnworks, Cin7 or Gorgias, or a custom agent inside your current stack will serve you better.' },
  { category: 'fit', question: 'Can Commerceflo work alongside Linnworks or Cin7?', answer: 'Yes, according to commerceflo.ai, which lists Linnworks and Cin7 among the tools it connects. That means you do not have to replace an inventory system on day one to try the agents. Before you plan a rollout, confirm which records, such as stock levels, orders and purchase orders, sync in each direction between the two systems.' },
  { category: 'fit', question: 'Should we build custom AI agents or use Commerceflo?', answer: 'Build a custom agent when one narrow, repetitive task lives inside systems you want to keep, such as reading supplier emails into your ERP. Choose a platform like Commerceflo when the pain is coordination across many channels and you are willing to run them on one data model. FactoryJet offers both, so ask us to compare them against one of your real workflows.' },
  { category: 'fit', question: 'What platform is best for B2B ecommerce?', answer: 'There is no single best B2B platform. The right one depends on catalog size, how pricing differs per account, payment terms, and which ERP (the back-office system that holds stock, orders and finance) owns your prices. Our B2B ecommerce page compares the main options. Commerceflo, which we make, fits when B2B, DTC, marketplaces and POS must share one data model.' },

  // Pricing and access
  { category: 'access', question: 'How much does Commerceflo cost?', answer: 'Commerceflo does not publish prices. Its pricing page describes two parts: a one-time implementation scoped to your channels and modules, and a monthly subscription for the platform and its agents, both sized on a short call. There is no revenue share, and AI work is metered in monthly credits. Ask for the full proposal, including credits, before you commit.' },
  { category: 'access', question: 'Is Commerceflo available now?', answer: 'Commerceflo is in early access. Its terms of service say evaluation accounts are set up by hand after a scoping conversation, and its About page says the team is building with early partners before a wider launch. FactoryJet has already built storefronts on Commerceflo for Belle Maison and GPSUK, which are described in our case studies.' },
  { category: 'access', question: 'Do we own our data on Commerceflo?', answer: 'Yes. commerceflo.ai says you own your data, and its privacy policy says content the AI generates for you, such as product descriptions, belongs to you. The same policy says your data and prompts are not used to train Anthropic’s models or other third-party AI models. The Commerceflo software itself is provided under a subscription, so you are paying to use the platform, not buying its code.' },
  { category: 'access', question: 'Can we migrate to Commerceflo from our current platform?', answer: 'Yes. commerceflo.ai says it migrates your catalog, customers and order history from your current DTC platform, including WooCommerce, on a dedicated migration path. Treat it like any replatform: map every indexed URL to a single 301 redirect, test checkout and integrations on staging, and keep the old store reachable until orders flow cleanly on the new one.' },
  { category: 'access', question: 'How do I get started with Commerceflo?', answer: 'Request a walkthrough. On the call, a store is connected, the agents read it across inventory, pricing and channels, and you see each proposal before anything changes. If it fits, the implementation and subscription are scoped to your channels and modules. If it does not fit, we will tell you which option does, including tools we do not make.' },
];

/* ─── Structured data ─── */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Commerceflo by FactoryJet', url: PAGE_URL },
];

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })),
};

// FactoryJet entity. Same @id as the sitewide node in src/app/layout.tsx so the two merge.
// sameAs = only profiles already used in the site's schema (layout.tsx, recognitionProfiles.ts,
// llms.txt "Profiles"). Checked 2026-09-17: LinkedIn, SoftwareSuggest, Facebook and X resolve to
// FactoryJet; Clutch, GoodFirms, DesignRush, Crunchbase and Instagram block bots, no contrary evidence.
const ORG_SCHEMA = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

// The product entity. No offers block: nothing is priced publicly, so any price (even "0") would be false.
const SOFTWAREAPP_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://factoryjet.com/commerceflo#software',
  name: 'Commerceflo',
  alternateName: ['Commerceflo by FactoryJet', 'Commerceflo.ai'],
  url: CF_HOME,
  sameAs: [CF_HOME],
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'AI commerce operator',
  operatingSystem: 'Web',
  description:
    'Commerceflo by FactoryJet is an AI commerce operator in early access. It runs DTC, B2B, marketplace and retail POS selling on one data model, and eight named AI agents propose changes with their reasoning and act after a person approves or under an auto-approve threshold.',
  creator: { '@id': 'https://factoryjet.com/#organization' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  mainEntityOfPage: { '@id': `${PAGE_URL}#webpage` },
  featureList: [
    'DTC storefront, B2B portal, marketplace and retail POS selling on one data model',
    'Eight named agents: Inventory, Pricing, Content, Customer, Growth, Fulfillment, Financial and Compliance',
    'Propose, approve, execute loop with optional auto-approve thresholds',
    'API-first, headless and event-driven architecture',
    'B2B features including customer-specific pricing, quote-to-order and Net 30, 60 or 90 terms',
    'AI features powered in part by the Anthropic Claude API',
  ],
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Commerceflo implementation by FactoryJet',
  serviceType: 'AI commerce platform implementation',
  description:
    'FactoryJet scopes and implements Commerceflo, its AI commerce operator, for the channels and modules a brand runs: DTC store, B2B portal, marketplaces, retail POS and back-office systems.',
  provider: { '@id': 'https://factoryjet.com/#organization' },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'DTC brands, B2B distributors and wholesalers, manufacturers, and omnichannel retailers' },
  isRelatedTo: { '@id': 'https://factoryjet.com/commerceflo#software' },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  inLanguage: 'en-US',
  dateModified: PAGE_MODIFIED,
  author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/', jobTitle: 'Founder, FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  about: { '@id': 'https://factoryjet.com/commerceflo#software' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
};

/* ─── Page content ─── */
const IDENTITY = [
  { k: 'Full name', v: 'Commerceflo by FactoryJet. Short form: Commerceflo, spelled with “flo”.' },
  { k: 'Made by', v: 'FactoryJet, the ecommerce development and AI services company founded by Bhavesh Barot.' },
  { k: 'What it is', v: 'An AI commerce operator: one platform for DTC, B2B, marketplace and retail POS selling, run with eight named AI agents.' },
  { k: 'Status', v: 'Early access as of September 2026. Evaluation accounts are set up after a scoping call.' },
  { k: 'Not to be confused with', v: 'CommerceFlow (commerceflow.ai), Commerce Flow (commerce-flow.com) or the CommerceFlow order app on the Shopify App Store.' },
];

const STATS = [
  { b: '8', s: 'named AI agents listed on commerceflo.ai today' },
  { b: '4', s: 'ways to sell on one data model: DTC, B2B, marketplace, POS' },
  { b: '1', s: 'approval, or a rule you set, before an agent acts' },
  { b: 'US', s: 'servers where Commerceflo stores and processes data' },
];

const STEPS = [
  { t: 'Connect your channels and systems', d: 'Link your store, marketplaces such as Amazon, Walmart, eBay and TikTok Shop, your B2B portal, retail POS and back-office tools such as NetSuite, QuickBooks or ShipBob. Data flows in live, with no CSV uploads or nightly sync jobs.' },
  { t: 'Get a first read on what is misaligned', d: 'Before any agent acts, Commerceflo reads the connected data and flags problems such as prices that differ between channels, products at risk of running out, and gaps in your listings.' },
  { t: 'An agent proposes a worked fix', d: 'Each proposal arrives finished and shows its reasoning: a drafted purchase order, a recalculated price or a rewritten listing. Watcher agents, such as Compliance, send warnings instead of changes.' },
  { t: 'You approve, skip, or set a threshold', d: 'Nothing runs until you click Approve. For routine moves you already trust, set an auto-approve threshold. Anything above it waits in the queue for a person.' },
  { t: 'The agent carries out the change', d: 'An approved change goes out to every channel it touches, through the same API the platform itself uses, and each decision stays visible in one feed.' },
];

const AGENTS = [
  { name: 'Inventory', job: 'Predicts stockouts, drafts the purchase order and restocks the gap', mode: 'Acts after approval' },
  { name: 'Pricing', job: 'Protects margin across channels and reprices when you agree', mode: 'Acts after approval' },
  { name: 'Content', job: 'Rewrites each listing to fit that channel’s rules', mode: 'Acts after approval' },
  { name: 'Customer', job: 'Groups buyers into segments and queues the right follow-up', mode: 'Acts after approval' },
  { name: 'Growth', job: 'Finds the next channel that fits your catalog and drafts the launch', mode: 'Acts after approval' },
  { name: 'Fulfillment', job: 'Flags a faster or cheaper shipping route for each order', mode: 'Watches and flags' },
  { name: 'Financial', job: 'Explains what moved in your numbers, and why', mode: 'Watches and flags' },
  { name: 'Compliance', job: 'Tracks tax and policy changes on each channel and warns early', mode: 'Watches and flags' },
];

const ARCHITECTURE = [
  { t: 'API-first and headless', d: 'Every function is an API endpoint, a documented way for other software to call it. You can use the built-in DTC and B2B storefronts, or point your own front end, for example one built with Next.js, React or Vue, at the same calls.' },
  { t: 'Event-driven services', d: 'Every change of state is published as an event. One order-placed event can set off many actions in parallel, and each service scales on its own instead of as one large block.' },
  { t: 'One data model under every channel', d: 'Catalog, inventory, orders and customers live in one dataset. The agents subscribe to the event stream, so a single agent can read a B2B signal and a POS signal at the same moment.' },
  { t: 'Claude models behind the agents', d: 'The privacy policy says AI features run in part on Anthropic’s Claude API. The pricing page names Claude Haiku for fast, high-volume jobs and Claude Sonnet for harder analysis. The policy also says merchant data and prompts are not used to train Anthropic’s foundation models or any third-party AI models.' },
  { t: 'Credits meter the AI work', d: 'Each AI operation, such as writing a product description or analyzing stock, uses credits from a monthly allowance. Order routing keeps running even when credits run out.' },
  { t: 'Where data lives, and who owns it', d: 'Data is stored and processed on servers in the United States and encrypted in transit and at rest. You own your data and the content the AI writes for you. The software itself is used under a subscription.' },
];

const COMPARE = [
  { name: 'Commerceflo by FactoryJet (ours)', href: '', what: 'One platform for DTC, B2B, marketplace and POS selling, with eight named agents that propose changes and act on approval', fit: 'You sell on several channels and want one system in place of a stack of apps', limits: 'Early access with no public customer results yet. Priced as a one-time implementation plus a monthly subscription. Confirm your exact connectors first.', ours: true },
  { name: 'Custom AI agents from FactoryJet (ours)', href: '/services/ai-agent-development', what: 'An agent built for one workflow inside the systems you already run', fit: 'One narrow, repetitive task lives in a stack you want to keep', limits: 'You own the agent, so someone has to monitor and maintain it after launch.', ours: true },
  { name: 'Shopify Flow', href: 'https://apps.shopify.com/flow', what: 'A free Shopify app that runs workflows you build from templates or your own logic, for jobs like tagging, fraud checks and inventory alerts', fit: 'You sell mainly on one Shopify store and can describe the rules', limits: 'It follows the rules you write. Deciding what needs fixing stays with your team.', ours: false },
  { name: 'Linnworks', href: 'https://www.linnworks.com/', what: 'Multichannel inventory, order, listing and shipping management that keeps stock in sync across marketplaces and stores such as Shopify', fit: 'You already sell on many marketplaces and want to keep your current storefront', limits: 'It runs the operations behind your channels. Your storefront and B2B portal stay in other systems.', ours: false },
  { name: 'Cin7', href: 'https://www.cin7.com/', what: 'Inventory management and small business ERP with purchasing, warehouses, a B2B portal, POS and ForesightAI demand forecasting', fit: 'Stock accuracy and purchasing are the main pain, especially with wholesale or third-party warehouses', limits: 'It covers more than inventory, so plan setup time for purchasing, warehouses and accounting links. You also choose between Cin7 Core and the more customizable Cin7 Omni.', ours: false },
  { name: 'Gorgias AI Agent', href: 'https://www.gorgias.com/ai-agent', what: 'An AI agent that answers shoppers and handles requests such as order changes, trained on your store data, with a confidence threshold you set', fit: 'Customer messages about order status, returns and products are the bottleneck', limits: 'Built for customer conversations. Inventory, pricing and listings stay in other tools.', ours: false },
];

const WRONG_CHOICE = [
  'You sell mostly through one Shopify store and your rules are simple. Shopify Flow is free and already works inside your Shopify admin.',
  'You need proven results from other customers before you commit. Commerceflo is new, and its own site says it has no customer logos or metrics to show yet.',
  'You want the largest app ecosystem and the biggest pool of outside developers. Established platforms such as Shopify and BigCommerce win there.',
  'You cannot change core systems this year. Add a focused tool for the one problem that hurts, or a custom agent inside your current stack.',
  'You need checkout inside ChatGPT, Gemini or Claude today. commerceflo.ai lists that channel as still in development.',
];

const extLink = { color: 'var(--pp-orange-dark)', textDecoration: 'underline', fontWeight: 600 } as const;

export default function CommercefloPage() {
  return (
    <>
      <script id="cf-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="cf-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="cf-software-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWAREAPP_SCHEMA) }} />
      <script id="cf-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="cf-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="cf-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* Hero */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(40px,6vh,84px)', paddingBottom: 'clamp(48px,7vh,96px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">AI commerce operator · early access</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '20ch' }}>
                  Commerceflo by FactoryJet: the commerce AI operator.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '50ch' }}>
                  Commerceflo is an AI-native commerce platform for brands that sell through a direct-to-consumer (DTC)
                  store, business-to-business (B2B) portals, marketplaces like Amazon and TikTok Shop, and retail point of
                  sale (POS). Eight named AI agents watch the business, propose fixes with their reasoning, and act only
                  after you approve.
                </p>
                <p style={{ margin: '12px 0 0', maxWidth: '54ch', fontSize: '14px', lineHeight: 1.55, color: 'var(--pp-muted)' }}>
                  Commerceflo is spelled with &ldquo;flo&rdquo; and made by FactoryJet. It is not related to CommerceFlow
                  (commerceflow.ai) or Commerce Flow (commerce-flow.com).
                </p>
                <HeroInlineForm source="us_commerceflo_hero" region="us" submitLabel="Request a walkthrough" />
              </div>
              {/* Hero visual: the operator core with selling channels around it */}
              <div className="pp-stage" role="img" aria-label="Diagram of Commerceflo by FactoryJet at the center, connected to a DTC store, Amazon, a B2B portal and retail POS.">
                <div className="pp-core" aria-hidden="true">
                  <span className="ring" />
                  <span className="ember" />
                  <span className="tag">AI commerce<br />operator<br /><b>Commerceflo</b></span>
                </div>
                <span className="pp-node" style={{ top: '6%', left: '0%' }} aria-hidden="true"><span className="d" />DTC store</span>
                <span className="pp-node" style={{ top: '8%', right: '-2%', animationDelay: '.5s' }} aria-hidden="true"><span className="d" />Amazon</span>
                <span className="pp-node" style={{ bottom: '10%', left: '-2%', animationDelay: '.9s' }} aria-hidden="true"><span className="d" />B2B portal</span>
                <span className="pp-node" style={{ bottom: '8%', right: '0%', animationDelay: '1.3s' }} aria-hidden="true"><span className="d" />Retail POS</span>
              </div>
            </div>
          </div>
        </section>

        {/* Answer first */}
        <section className="pp-sec" aria-labelledby="cf-what-h">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'start' }} className="pp-herogrid">
              <div>
                <p className="pp-mlabel">// in plain terms</p>
                <h2 id="cf-what-h" style={{ marginTop: '10px' }}>What is Commerceflo?</h2>
                <p className="pp-lead" data-speakable="true" style={{ marginTop: '16px', maxWidth: '60ch' }}>
                  Commerceflo by FactoryJet is an AI commerce operator in early access. It runs a DTC store, B2B portal,
                  marketplace listings and retail POS on one data model, and eight named AI agents propose work such as
                  reorders, price changes and listing rewrites. Nothing changes until you approve it or set a rule that does.
                </p>
                <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '60ch' }}>
                  FactoryJet builds and implements ecommerce on several platforms. Commerceflo is the one it makes itself,
                  which is why this page compares it openly with tools FactoryJet does not make. The product site is{' '}
                  <a href={CF_HOME} target="_blank" rel="noopener noreferrer" style={extLink}>commerceflo.ai</a>.
                </p>
              </div>
              <dl style={{ margin: 0, border: '1px solid var(--pp-line)', borderRadius: '18px', background: '#fff', padding: '8px 24px' }}>
                {IDENTITY.map((row, i) => (
                  <div key={row.k} style={{ padding: '14px 0', borderTop: i === 0 ? 'none' : '1px solid var(--pp-line)' }}>
                    <dt style={{ fontFamily: 'var(--pp-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--pp-orange-dark)' }}>{row.k}</dt>
                    <dd style={{ margin: '6px 0 0', fontSize: '15px', lineHeight: 1.55, color: 'var(--pp-ink)' }}>{row.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Stat band */}
        <section className="pp-sec tint" style={{ paddingTop: 'clamp(36px,5vh,60px)', paddingBottom: 'clamp(36px,5vh,60px)' }}>
          <div className="pp-wrap"><div className="pp-stats">{STATS.map((s) => (<div className="pp-stat" key={s.b}><b>{s.b}</b><span>{s.s}</span></div>))}</div></div>
        </section>

        {/* How it works */}
        <section className="pp-sec" aria-labelledby="cf-how-h">
          <div className="pp-wrap">
            <p className="pp-mlabel">// the loop</p>
            <h2 id="cf-how-h" style={{ marginTop: '10px', maxWidth: '24ch' }}>How Commerceflo works, step by step</h2>
            <div className="pp-splitband" style={{ alignItems: 'start' }}>
              <div className="pp-splitband-text">
                <p className="pp-lead">
                  Every agent runs the same loop: it watches, proposes, waits for a yes, then acts. Here is what happens
                  from the first connection to a finished change.
                </p>
                <ol style={{ listStyle: 'none', margin: '24px 0 0', padding: 0, display: 'grid', gap: '20px' }}>
                  {STEPS.map((s, i) => (
                    <li key={s.t} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                      <span aria-hidden="true" style={{ flex: 'none', width: '30px', height: '30px', borderRadius: '50%', border: '2px solid var(--pp-orange)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#fff', fontFamily: 'var(--pp-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--pp-orange-dark)' }}>{i + 1}</span>
                      <div>
                        <h3 style={{ fontSize: '17px', lineHeight: 1.3 }}>{s.t}</h3>
                        <p style={{ marginTop: '4px', fontSize: '15px', lineHeight: 1.6, color: 'var(--pp-body)' }}>{s.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="pp-splitband-note">
                  Sources:{' '}
                  <a href={CF_HOME} target="_blank" rel="noopener noreferrer" style={extLink}>commerceflo.ai</a> and its{' '}
                  <a href={CF_PLATFORM} target="_blank" rel="noopener noreferrer" style={extLink}>platform page</a>, checked
                  September 2026.
                </p>
              </div>
              <figure className="pp-splitband-fig">
                <div className="pp-shot">
                  <img src="/images/us/commerce/commerceflo-unified-engine.webp" alt="An operations manager presenting a diagram of one central engine feeding four connected channels"
                       width={1280} height={800} loading="lazy" decoding="async" />
                </div>
              </figure>
            </div>
          </div>
        </section>

        {/* The agents */}
        <section className="pp-sec tint" aria-labelledby="cf-agents-h">
          <div className="pp-wrap">
            <p className="pp-mlabel">// the agents</p>
            <h2 id="cf-agents-h" style={{ marginTop: '10px', maxWidth: '24ch' }}>The eight agents, and which ones act</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '64ch' }}>
              commerceflo.ai lists eight named agents today and says more are on the way. Five can make changes once you
              approve. Three watch the business and warn you.
            </p>
            <div style={{ marginTop: '28px', overflowX: 'auto' }}>
              <table className="pp-table">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', paddingTop: '12px', fontSize: '13px', color: 'var(--pp-muted)' }}>
                  Agent roles as described on commerceflo.ai, September 2026.
                </caption>
                <thead><tr><th scope="col">Agent</th><th scope="col">What it handles</th><th scope="col">Mode</th></tr></thead>
                <tbody>
                  {AGENTS.map((a) => (
                    <tr key={a.name}><td className="name">{a.name}</td><td>{a.job}</td><td>{a.mode}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline="Want to see what the agents would propose on your store?"
          sub="A walkthrough connects a store and shows each agent's proposals one at a time, before anything changes. Then we map where Commerceflo fits the way you sell today."
          label="Request a walkthrough"
          note="No commitment. Early access starts with a scoping call like this one."
        />

        {/* Architecture */}
        <section className="pp-sec" aria-labelledby="cf-arch-h">
          <div className="pp-wrap">
            <p className="pp-mlabel">// under the hood</p>
            <h2 id="cf-arch-h" style={{ marginTop: '10px', maxWidth: '24ch' }}>What sits under the agents</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '64ch' }}>
              For technical buyers, here is the architecture Commerceflo describes on its{' '}
              <a href={CF_PLATFORM} target="_blank" rel="noopener noreferrer" style={extLink}>platform page</a>,{' '}
              <a href={CF_PRICING} target="_blank" rel="noopener noreferrer" style={extLink}>pricing page</a> and{' '}
              <a href={CF_PRIVACY} target="_blank" rel="noopener noreferrer" style={extLink}>privacy policy</a>, in plain terms.
            </p>
            <ul className="pp-bento" style={{ marginTop: '32px', listStyle: 'none', padding: 0 }}>
              {ARCHITECTURE.map((p) => (
                <li className="pp-card" key={p.t}>
                  <h3>{p.t}</h3><p>{p.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Comparison */}
        <section className="pp-sec tint" aria-labelledby="cf-compare-h">
          <div className="pp-wrap">
            <p className="pp-mlabel">// honest comparison</p>
            <h2 id="cf-compare-h" style={{ marginTop: '10px', maxWidth: '26ch' }}>Commerceflo compared with other ways to automate store operations</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '66ch' }}>
              FactoryJet makes Commerceflo and also builds custom AI agents, so two rows in this table are ours. The other
              rows describe each product from its own website, as of September 2026. These tools are not always rivals:
              commerceflo.ai lists Linnworks and Cin7 among the systems it connects.
            </p>
            <div style={{ marginTop: '28px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead><tr><th scope="col">Option</th><th scope="col">What it does</th><th scope="col">Fits best when</th><th scope="col">Limits to weigh</th></tr></thead>
                <tbody>
                  {COMPARE.map((r) => (
                    <tr key={r.name} className={r.ours ? 'me' : ''}>
                      <td className="name">
                        {r.href.startsWith('/') ? (
                          <Link href={r.href} style={{ color: 'var(--pp-ink)', textDecoration: 'underline' }}>{r.name}</Link>
                        ) : r.href ? (
                          <a href={r.href} target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--pp-ink)', textDecoration: 'underline' }}>{r.name}</a>
                        ) : (
                          r.name
                        )}
                      </td>
                      <td>{r.what}</td>
                      <td>{r.fit}</td>
                      <td>{r.limits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Wrong choice */}
        <section className="pp-sec" aria-labelledby="cf-wrong-h">
          <div className="pp-wrap">
            <p className="pp-mlabel">// real limits</p>
            <h2 id="cf-wrong-h" style={{ marginTop: '10px', maxWidth: '24ch' }}>When Commerceflo is the wrong choice</h2>
            <div className="pp-splitband" style={{ alignItems: 'start' }}>
              <div className="pp-splitband-text">
                <p className="pp-lead">
                  We would rather lose the deal than put you on the wrong system. Pick something else if one of these is true.
                </p>
                <ul style={{ margin: '20px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: '12px' }}>
                  {WRONG_CHOICE.map((w) => (
                    <li key={w} style={{ display: 'flex', gap: '12px', fontSize: '15px', lineHeight: 1.6, color: 'var(--pp-body)' }}>
                      <span aria-hidden="true" style={{ flex: 'none', marginTop: '9px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--pp-orange)' }} />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
                <p className="pp-splitband-note">
                  If one narrow task is the real problem, a{' '}
                  <Link href="/services/ai-agent-development" style={extLink}>custom AI agent</Link> built into your current
                  stack is often the faster fix.
                </p>
              </div>
              <figure className="pp-splitband-fig">
                <div className="pp-shot">
                  <img src="/images/us/commerce/commerceflo-stock-truth.webp" alt="An operations lead holding a tablet in a bright warehouse office, with stock visible behind"
                       width={1280} height={800} loading="lazy" decoding="async" />
                </div>
              </figure>
            </div>
          </div>
        </section>

        {/* Built on Commerceflo */}
        <section className="pp-sec tint" aria-labelledby="cf-built-h">
          <div className="pp-wrap">
            <p className="pp-mlabel">// built on it</p>
            <h2 id="cf-built-h" style={{ marginTop: '10px', maxWidth: '26ch' }}>Storefronts FactoryJet has built on Commerceflo</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '64ch' }}>
              Both run trade pricing and quoting inside the platform instead of in add-on apps. Neither case study claims a
              revenue or conversion result.
            </p>
            <ul className="pp-bento n2" style={{ marginTop: '28px', listStyle: 'none', padding: 0 }}>
              <li className="pp-card">
                <p className="pp-mlabel">Belle Maison · DTC + B2B</p>
                <h3 style={{ marginTop: '8px' }}>One storefront for retail shoppers and trade buyers</h3>
                <p>
                  A storefront for a Mumbai wholesale distributor of artificial plants and decor. Retail shoppers browse the
                  catalog, while trade accounts use account-based pricing and quote-to-order workflows.
                </p>
                <p style={{ marginTop: '14px' }}>
                  <Link href="/case-studies/belle-maison-ecommerce-success" style={extLink}>Read the Belle Maison case study</Link>
                </p>
              </li>
              <li className="pp-card">
                <p className="pp-mlabel">GPSUK · B2B trade</p>
                <h3 style={{ marginTop: '8px' }}>Trade ordering for a promotional products supplier</h3>
                <p>
                  A trade storefront for a UK promotional products supplier. Trade accounts log in to their own pricing and
                  move from quote to order without retyping. FactoryJet also provides ongoing SEO and AI search work.
                </p>
                <p style={{ marginTop: '14px' }}>
                  <Link href="/case-studies/gpsuk-promotional-products" style={extLink}>Read the GPSUK case study</Link>
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Pricing and access */}
        <section className="pp-sec" aria-labelledby="cf-access-h">
          <div className="pp-wrap">
            <div className="pp-splitband reverse" style={{ marginTop: 0 }}>
              <div className="pp-splitband-text">
                <p className="pp-mlabel">// pricing and access</p>
                <h2 id="cf-access-h" style={{ marginTop: '10px' }}>How pricing and access work</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  Commerceflo is in early access. Its{' '}
                  <a href={CF_TERMS} target="_blank" rel="noopener noreferrer" style={extLink}>terms of service</a> say
                  evaluation accounts are set up by hand after a scoping conversation.
                </p>
                <p className="pp-lead">
                  The{' '}
                  <a href={CF_PRICING} target="_blank" rel="noopener noreferrer" style={extLink}>pricing page</a> describes two
                  parts: a one-time implementation scoped to your channels and modules, and a monthly subscription for the
                  platform and its agents. Both are sized on a short call, there is no revenue share, and AI work is metered
                  in monthly credits. No prices are published.
                </p>
                <p className="pp-lead">
                  Already a user? Sign in at{' '}
                  <a href={CF_APP} target="_blank" rel="noopener noreferrer" style={extLink}>app.commerceflo.ai</a>.
                </p>
                <p className="pp-splitband-note">
                  Choosing a B2B platform? Our <Link href="/b2b-ecommerce" style={extLink}>B2B ecommerce</Link> page
                  compares the main options, Commerceflo included.
                </p>
              </div>
              <figure className="pp-splitband-fig">
                <div className="pp-shot">
                  <img src="/images/us/commerce/commerceflo-channel-floor.webp" alt="A multi-channel retail team at a bright workspace with three monitors showing storefronts"
                       width={1280} height={800} loading="lazy" decoding="async" />
                </div>
              </figure>
            </div>
          </div>
        </section>

        <FAQ
          eyebrow="COMMERCEFLO FAQ"
          headline="Questions about Commerceflo."
          lead="Straight answers on the name, how the agents work, when to pick something else, and what access and pricing look like."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        <section className="pp-sec" id="final-cta">
          <div className="pp-wrap">
            <h2 style={{ maxWidth: '24ch' }}>See what the agents would propose on your store.</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '60ch' }}>
              Tell us where you sell today. On a walkthrough, a store is connected and you see each agent&apos;s proposals
              before anything changes. Then we tell you plainly whether Commerceflo, a focused tool or a custom agent fits best.
            </p>
            <div style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <ModalCTAButton label="Request a Commerceflo walkthrough" region="us" btnVariant="primary-light" />
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '13px', border: '1px solid var(--pp-line)', padding: '14px 24px', fontSize: '15px', fontWeight: 600, color: 'var(--pp-ink)', textDecoration: 'none' }}>Talk to the Founder</a>
            </div>
            <p style={{ marginTop: '28px', fontSize: '14px', color: 'var(--pp-muted)' }}>
              Related:{' '}
              <Link href="/omnichannel-commerce" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>omnichannel commerce</Link>,{' '}
              <Link href="/b2b-ecommerce" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>B2B e-commerce</Link>,{' '}
              <Link href="/agentic-commerce" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>agentic commerce</Link>,{' '}
              <Link href="/replatforming" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>replatforming</Link>, and{' '}
              <Link href="/services/ecommerce-development" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>e-commerce development</Link>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
