import type { Metadata } from 'next';
import { Fragment } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import AuFaq from '../components/AuFaq';
import { twinAlternates } from '@/data/hreflangMap';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';
import '../au-hub.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /au/shopify-ai-agents: custom AI agents for Australian Shopify store OPERATIONS.
   Built 2026-10-29, mirroring /au/ai-agents and /au/shopify-development (same shared CSS,
   AuFaq, MidPageCTA, HeroInlineForm, SiteFooter AU columns). US twin: /services/shopify-ai-agents.

   Ownership: this page = agents for Shopify operations in Australia (order exceptions,
   stockist POs, returns, reorders, Xero/MYOB payout reconciliation, marketplace exceptions,
   catalogue). Support tickets live on /au/ai-customer-service; any-system agents on
   /au/ai-agents; store builds on /au/shopify-development.

   Demand (DataForSEO, Google Ads search_volume, location 2036 Australia, run 2026-10-29):
   shopify xero integration 260, shopify b2b 260, shopify ai 170, shopify flow 170,
   shopify inventory management 170, shopify sidekick 110, ai for ecommerce 110,
   shopify myob integration 30, shopify netsuite integration 30, shopify ai agent 20.
   PAA on "shopify ai agent" (AU): "Does Shopify have an AI agent?", "Can you use AI in Shopify?".

   Rules applied: market ranges only (never FactoryJet prices), no running or upkeep cost figures,
   no AU client named or implied (DTF Virginia and Shop Holistico are US Shopify stores and are
   labelled as such), no team location, house terms of 16 Oct 2026.

   FAQ_ITEMS feeds BOTH the visible AuFaq accordion and the FAQPage JSON-LD. AGENT_JOBS feeds
   both the rendered cards and the Service offer catalogue. crumbs feeds both the visible trail
   and the BreadcrumbList. Never hand-copy a second list.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL = 'https://factoryjet.com/au/shopify-ai-agents';
const PUBLISHED = '2026-10-29';
const UPDATED = '2026-10-31';
const TITLE = 'Shopify AI Agents Australia: Xero, MYOB & Cin7 | FactoryJet';
const H1 = 'Shopify AI Agents Australia: Custom Agents for Store Operations';
const DESCRIPTION =
  'Custom Shopify AI agents for Australian stores: order exceptions, stockist POs, returns, reorders and Xero or MYOB payout checks. Demo on your data. You own it.';

const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Shopify AI Agents', url: CANONICAL },
];

/* ─── External sources, each fetched 2026-10-29 and the claim read in the fetched body ─── */
// shopify.dev, GraphQL Admin API rate limits: Standard "100 points/second", Advanced "200",
// Plus "1000", Shopify for enterprise "2000"; a single query is capped at 1,000 points
// "regardless of plan limits". fetched 2026-10-29
const SRC_RATE_LIMITS = 'https://shopify.dev/docs/apps/build/apis/graphql-admin/rate-limits';
// Shopify Help Center: "Shopify B2B is available on the Basic, Grow, Advanced, and Shopify Plus plans";
// the feature set varies by plan. fetched 2026-10-29
const SRC_B2B = 'https://help.shopify.com/en/manual/b2b';
// shopify.dev, REST Admin API: "a legacy API as of October 1, 2024"; new public apps must use
// the GraphQL Admin API from April 1, 2025. fetched 2026-10-29
const SRC_REST_LEGACY = 'https://shopify.dev/docs/api/admin-rest';
// shopify.dev: "your app might receive the same webhook more than once"; dedupe on
// X-Shopify-Webhook-Id. fetched 2026-10-29
const SRC_WEBHOOK_DUPES = 'https://shopify.dev/docs/apps/build/webhooks/ignore-duplicates';
// Shopify Help Center: "Shopify Flow is a free app available on the Basic, Grow, Advanced, and
// Plus plans." fetched 2026-10-29
const SRC_FLOW = 'https://help.shopify.com/en/manual/shopify-flow';
// Shopify Help Center: Sidekick "works with your store's data and presents changes for your review
// before applying them." fetched 2026-10-29
const SRC_SIDEKICK = 'https://help.shopify.com/en/manual/shopify-admin/productivity-tools/sidekick';
// Shopify Help Center: draft orders are created on a customer's behalf for phone, email or
// in-person sales; "When a draft order is paid, it becomes a regular order". fetched 2026-10-29
const SRC_DRAFT_ORDERS = 'https://help.shopify.com/en/manual/fulfillment/managing-orders/create-orders';
// OAIC, privacy and commercially available AI products: "Privacy obligations will apply to any
// personal information input into an AI system", output too; best practice is not to enter personal
// information into publicly available AI tools; public-facing AI tools "clearly identified";
// not "set and forget". fetched 2026-10-29
const SRC_OAIC_AI =
  'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products';
// OAIC APP guidelines chapter 1, para 1.35: "From 10 December 2026, APP 1.7 requires APP entities
// to include the information outlined in APP 1.8" (automated decisions). fetched 2026-10-29
const SRC_OAIC_APP1 =
  'https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-1-app-1-open-and-transparent-management-of-personal-information';
// Build-only market ranges, AUD, fetched 2026-10-29. Neither source says whether GST is included.
// Flowtivity (5 March 2026): customer service automation $10,000 to $25,000; multi-system workflow
// automation $20,000 to $50,000+. Web Video Digital (5 August 2026): AUD 15,000 to AUD 150,000 overall,
// most small-to-medium projects AUD 30,000 to AUD 80,000; simple single-task $15,000 to $35,000.
// Never add running, retainer or model-usage figures (Bhavesh, 11 Oct 2026).
const SRC_FLOWTIVITY = 'https://flowtivity.ai/blog/ai-agent-cost-pricing-guide-australia-2026/';
const SRC_WVD = 'https://webvideodigital.com.au/custom-ai-agent-cost-in-australia/';
// shopify.dev, Agentic commerce: agents "Query products across all Shopify merchants with the Global
// Catalog" and "convert the cart into a checkout and refer them to the merchant storefront to complete
// payment", over the Universal Commerce Protocol (UCP). fetched 2026-10-31
const SRC_AGENTIC = 'https://shopify.dev/docs/agents';

/* ─── The agents (drives the cards AND the Service offer catalogue) ─── */
const AGENT_JOBS: { n: string; t: string; d: string; guard: string; more?: { h: string; l: string } }[] = [
  { n: '01', t: 'Order exception agent',
    d: 'Reads each new order against your rules: a PO box sent to a courier that will not deliver there, a billing and delivery state that do not match, a quantity far above that customer’s usual, a SKU your Cin7 or Unleashed stock says is gone. It tags the order with a one-line reason and puts it in the right person’s queue.',
    guard: 'Adds a tag and an order note. Cancelling or editing stays with your team.' },
  { n: '02', t: 'Stockist purchase order agent',
    d: 'A stockist emails a PDF order under a trading name that differs from the business name on their ABN. Their prices are GST-inclusive, but your trade list is ex-GST. The agent works out which account the order belongs to. It checks each line against that stockist’s trade price level in MYOB, Xero or your price sheet, and against your minimum order quantities. Then it builds a draft order for your Shopify B2B or wholesale channel. Any product code missing from your catalogue is left out of the draft and listed in a note for your wholesale team.',
    guard: 'Builds drafts. A person sends the invoice.',
    more: { h: '/au/sales-order-automation-ai-agents', l: 'Sales order automation agents' } },
  { n: '03', t: 'Returns and change-of-mind agent',
    d: 'Finds the order, reads the request and photos, checks the item against the returns policy you have written (window, condition, final-sale items), and prepares the return or exchange with a reason code. Faulty-item claims are kept apart from change-of-mind requests so your team handles them the way your policy says.',
    guard: 'Refunds above the limit you set always wait for a person.' },
  { n: '04', t: 'Reorder and stock agent',
    d: 'This agent supports Shopify inventory management for stock that comes from overseas. Imported stock can spend weeks at sea, so it plans from each supplier’s real lead time rather than a fixed reorder point. It reads what sits at your 3PL (the outside warehouse that packs your orders) in Sydney or Melbourne and on the shop floor, plus inbound shipments recorded in Cin7 Core, Unleashed, NetSuite or a spreadsheet, and drafts orders early enough to land before Christmas or the EOFY (end of financial year, 30 June) sales. A supplier confirmation that shows a new price or a later ship date raises a flag.',
    guard: 'Drafts lists. Your buyer raises every purchase order.' },
  { n: '05', t: 'Payout and ledger check agent',
    d: 'Each day it compares Shopify orders, refunds and payouts, including Afterpay, Zip and Stripe settlements, with what landed in Xero, MYOB Business, MYOB Acumatica or QuickBooks Online. When an invoice is missing or a GST line looks wrong, it writes a short note on what does not match and prepares the correction for your bookkeeper to check.',
    guard: 'Read-only in your ledger until a person approves a fix.',
    more: { h: '/au/shopify-xero-integration', l: 'Shopify and Xero integration' } },
  { n: '06', t: 'Marketplace exception agent',
    d: 'If you also sell on Amazon.com.au, eBay, Kogan, Bunnings Marketplace or THE ICONIC, orders reach Shopify or your inventory system through a connector. The agent watches for the orders that fall through: a listing mapped to the wrong SKU, stock that went negative, a cancellation that never synced back.',
    guard: 'Reports and drafts. Listing and stock changes need approval.' },
  { n: '07', t: 'Catalogue data agent',
    d: 'Turns supplier spreadsheets into Shopify product drafts: titles, descriptions, tags, size charts and metafields (extra product fields you define, such as fabric or care notes) in Australian spelling and your brand voice. It checks each draft against your rules, such as required fields and claims you never make, before anyone sees it.',
    guard: 'Saved as draft products. Nothing goes live on your storefront until someone on your team publishes it.' },
];

/* ─── Numbered project steps ─── */
const STEPS: { n: string; t: string; d: string; out: string }[] = [
  { n: '01', t: 'Read your brief and your real orders',
    d: 'You send a brief or RFP if you have one, and we look at a sample of last month’s orders, returns and stockist emails with the person who handles them. We note which system owns stock, prices and customers.',
    out: 'A one-page map of the job and the systems it touches.' },
  { n: '02', t: 'Build a demo on your data',
    d: 'Before you sign anything, we run a working version against a copy of your own orders or emails, so you see what the agent would draft or flag. Sample data only where you prefer it.',
    out: 'A demo you can poke at, and a written list of what it got right and wrong.' },
  { n: '03', t: 'Scope and price one phase',
    d: 'We list the actions the agent can take on its own, the ones a person signs off, and the ones that are off limits, then quote that phase as a fixed price. The next phase gets its own scope and its own signature.',
    out: 'A signed scope with a fixed price and the defect cover period stated.' },
  { n: '04', t: 'Connect Shopify and your back office',
    d: 'A custom app on Shopify’s GraphQL Admin API (the interface software uses to read and change your store), with only the access scopes (permissions) the job needs, plus official connections to Xero, MYOB, Cin7, Unleashed, NetSuite or Odoo. Everything is built in a test store or sandbox first.',
    out: 'Working connections in a test environment, documented in your repository.' },
  { n: '05', t: 'Test on past cases, including the awkward ones',
    d: 'The agent runs over hundreds of your past orders and messages. We compare its output with what your team actually did, and fix the gaps before it touches live work.',
    out: 'A test report showing the match rate and every hand-off reason.' },
  { n: '06', t: 'Run a supervised pilot',
    d: 'The agent works on live orders while a person reviews every action. Low-risk actions move to automatic when the numbers support it. Anything with money attached stays with a person.',
    out: 'Pilot results against the measure we agreed, and a go-live call you make.' },
  { n: '07', t: 'Go live with logs and an off switch',
    d: 'Each action goes into a log showing the input and the reason, and a single switch pauses the agent. Support afterwards is optional: you can run it yourselves or ask us to quote each change.',
    out: 'A live agent you own, with its code, prompts and logs in your accounts.' },
];

/* ─── House terms (approved wording, 16 Oct 2026) ─── */
const TERMS: { t: string; d: string }[] = [
  { t: 'Demo on your data before you sign', d: 'Working software on a copy of your own orders, emails or catalogue, so you judge the agent on your store rather than on a slide.' },
  { t: 'Fixed price per phase', d: 'Each phase is scoped, priced and signed on its own. You can stop after any phase and keep what has been built.' },
  { t: 'You own the code from day one', d: 'The repository, prompts, workflow definitions and documentation sit in your accounts. AI and hosting can run in your own accounts at cost, with no markup from us.' },
  { t: 'Defects fixed inside the build price', d: 'For a cover period agreed before work starts, anything we built that does not work as scoped is fixed at no extra charge.' },
  { t: 'Support is optional, with no monthly minimum', d: 'Ask us to keep managing the servers, AI and integrations, or run it yourselves. Each change is quoted and approved before work begins.' },
];

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─── */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Shopify and AI agents' },
  { key: 'systems', label: 'Xero, MYOB and other systems' },
  { key: 'cost', label: 'Cost, timing and terms' },
  { key: 'risk', label: 'Privacy, safety and ownership' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── Shopify and AI agents ──
  { category: 'basics', question: 'Does Shopify have an AI agent?',
    answer: 'Shopify has Sidekick, an AI assistant inside the admin. Shopify’s help centre says it works with your store’s data and presents changes for your review before applying them. It helps a person who is logged in and asking. A custom AI agent is different: it watches your inbox, orders and back-office systems on its own, follows written rules, and asks a person before anything that matters.',
    links: [{ href: SRC_SIDEKICK, label: 'Shopify Help Center: Sidekick' }] },
  { category: 'basics', question: 'Can you use AI in Shopify?',
    answer: 'You can, in three ways. Shopify’s own tools, Sidekick and the AI text features in the admin, help staff write and edit. Apps from the Shopify App Store add AI for search, support or reviews. A custom app built on Shopify’s Admin API can run an AI agent that does an operations job across Shopify and your other systems.' },
  { category: 'basics', question: 'What is the difference between a Shopify chatbot and an AI agent?',
    answer: 'A chatbot answers questions in a chat window when someone types. An AI agent does a job. It reads an email, an order or a payout report, decides what it means against your written rules, and then tags, drafts or flags something in Shopify or your back office. Many agents never talk to a customer at all.' },
  { category: 'basics', question: 'Can agentic AI shopping assistants buy from my Shopify store?',
    answer: 'Shopify is building for it. Its agentic commerce docs describe AI agents that search products across Shopify merchants through a Global Catalog, build a cart, and then usually send the buyer to the merchant’s storefront to pay. This uses the Universal Commerce Protocol (UCP). That is a separate job from the operations agents on this page. Complete product data helps either way, which is where the catalogue agent fits.',
    links: [{ href: SRC_AGENTIC, label: 'shopify.dev: agentic commerce' }] },
  { category: 'basics', question: 'What is a Shopify AI agent for an Australian store?',
    answer: 'A Shopify AI agent is software that reads something messy, such as a stockist’s emailed PDF or a return request with photos, decides what it means using a language model, and then acts in Shopify within limits you set. It might tag an order, build a draft order or prepare a return. It logs every action and passes anything outside its rules to a person.' },
  { category: 'basics', question: 'How is Shopify Flow different from an AI agent?',
    answer: 'Shopify Flow is free on the Basic, Grow, Advanced and Plus plans, according to Shopify. It runs fixed rules: when this happens and this condition is true, do that. It suits tagging orders or alerting on low stock. It cannot read a free-text email or a scanned PO and work out what the sender meant. Flow can keep the fixed steps while an agent handles only the judgement.',
    links: [{ href: SRC_FLOW, label: 'Shopify Help Center: Shopify Flow' }] },
  { category: 'basics', question: 'Which jobs should an Australian Shopify store give an AI agent first?',
    answer: 'Pick a job that happens many times a week, has written rules, and touches two systems. Three good first candidates: order exceptions before the courier cut-off, stockist purchase orders that arrive by email, or the daily check that Shopify payouts match Xero or MYOB. Start with one, measure it, then add the next.' },
  { category: 'basics', question: 'Should I buy a Shopify app or have a custom AI agent built?',
    answer: 'Buy an app when the job is the same for every store, such as product reviews or a standard chat widget, and the app’s rules match yours. Have an agent built when the job depends on your own systems and policies: your trade price lists, your Cin7 or Unleashed stock, your returns rules, your chart of accounts in Xero. A custom agent’s code sits in your accounts, while an app stays with its maker.' },
  { category: 'basics', question: 'Do I need Shopify Plus for a custom AI agent?',
    answer: 'No. Any paid Shopify plan can run a custom app with an AI agent in it. Plus matters mainly for its higher API allowance. Shopify’s documentation lists 100 points a second for GraphQL Admin API calls on the Standard plan, 200 on Advanced and 1,000 on Plus. That changes how fast an agent clears a large backlog.',
    links: [{ href: SRC_RATE_LIMITS, label: 'shopify.dev: GraphQL Admin API rate limits' }] },
  { category: 'basics', question: 'Which Shopify plans include Shopify B2B for stockist orders?',
    answer: 'Shopify’s help centre says Shopify B2B is available on the Basic, Grow, Advanced and Shopify Plus plans. The B2B features you get vary by plan, so we check yours against the job during scoping. A stockist order agent can build drafts on any of them.',
    links: [{ href: SRC_B2B, label: 'Shopify Help Center: B2B' }, { href: '/au/b2b-ecommerce', label: 'B2B ecommerce in Australia' }] },
  { category: 'basics', question: 'Can an AI agent handle customer support tickets for a Shopify store?',
    answer: 'Yes, though that is a separate service with its own page. A support agent reads tickets in Gorgias, Zendesk or your helpdesk, finds the order in Shopify, checks Australia Post, StarTrack or Sendle tracking, and drafts a reply with the facts filled in. This page covers the operations jobs behind the store; see AI customer service for the support side.',
    links: [{ href: '/au/ai-customer-service', label: 'AI customer service in Australia' }] },

  // ── Systems ──
  { category: 'systems', question: 'Can an AI agent work with the Shopify and Xero integration we already have?',
    answer: 'It works beside it and should not replace it. Your existing connector, whether Xero’s own Shopify integration, A2X or another app, keeps posting sales and payouts. The agent checks the result each day: payouts that do not match a bank line, refunds missing a credit note, Afterpay or Zip settlements booked to the wrong account. It drafts the correction for your bookkeeper to approve.',
    links: [{ href: '/au/shopify-xero-integration', label: 'Shopify and Xero integration in Australia' }] },
  { category: 'systems', question: 'Does it work with MYOB Business or MYOB Acumatica?',
    answer: 'It can connect to both through their APIs. The agent reads Shopify orders and payouts, compares them with invoices and receipts in MYOB, and flags the gaps. For wholesale, it can check that a stockist’s draft order uses the price level set against that customer. Posting anything to MYOB waits for a person’s approval.' },
  { category: 'systems', question: 'Can it connect Shopify to Cin7, Unleashed or Cin7 Core (formerly DEAR)?',
    answer: 'It connects to each through its API. Inventory systems like Cin7 Omni, Cin7 Core and Unleashed usually own stock and purchasing, while Shopify owns the storefront. We confirm which system is the source of truth for each field before building. Then the agent reads stock and open purchase orders from the inventory system, compares them with Shopify sales, and drafts reorder lists or flags stock that has drifted between the two.' },
  { category: 'systems', question: 'Can a Shopify AI agent work with NetSuite or Odoo?',
    answer: 'It connects to both through their APIs. Where NetSuite or Odoo runs behind Shopify, a connector moves orders across, and records can still go missing: a refund that never posted, an order stuck on a mapping error, a customer created twice. The agent compares both sides on a schedule, explains each gap in plain English and drafts the fix. It stays read-only on the ERP until you approve.',
    links: [{ href: '/au/netsuite-ai-agents', label: 'NetSuite AI agents in Australia' }] },
  { category: 'systems', question: 'Can an AI agent turn emailed stockist orders into Shopify orders?',
    answer: 'It can, as draft orders. Shopify describes a draft order as one your staff create on a customer’s behalf for phone, email or in-person sales, which becomes a regular order once it is paid. The agent reads the PDF or email, matches the stockist and their trade prices, and builds the draft. Your wholesale team checks it and sends the invoice.',
    links: [{ href: SRC_DRAFT_ORDERS, label: 'Shopify Help Center: draft orders' }] },
  { category: 'systems', question: 'Does it work with Amazon.com.au, eBay, Kogan or THE ICONIC orders?',
    answer: 'It works through whatever connector already brings those orders into Shopify or your inventory system. The agent does not replace the connector. It watches for orders that fall through the gaps, such as a listing mapped to the wrong SKU or a marketplace cancellation that never reached Shopify, and puts each one in front of a person with the order details attached.' },

  // ── Cost, timing and terms ──
  { category: 'cost', question: 'How much does a Shopify AI agent cost to build in Australia?',
    answer: 'Two published Australian guides give a market range, not our prices. Flowtivity (March 2026) puts multi-system workflow automation at $20,000 to $50,000 or more. Web Video Digital (August 2026) puts a simple single-task agent at $15,000 to $35,000. Both quote AUD without stating GST. We quote each phase as a fixed price after scoping.',
    links: [{ href: SRC_FLOWTIVITY, label: 'Flowtivity, Australian AI agent pricing (March 2026)' }, { href: SRC_WVD, label: 'Web Video Digital, custom AI agent cost (August 2026)' }] },
  { category: 'cost', question: 'What does it cost to run and support the agent after launch?',
    answer: 'We quote the build, and any support you choose, as fixed prices in writing after scoping. AI and hosting can run in your own accounts at cost, with no markup from us. Support is optional and has no monthly minimum: you can run the agent yourselves, or we can keep managing the servers, AI, integrations and maintenance, with each change quoted and approved first.' },
  { category: 'cost', question: 'How long does a Shopify AI agent project take?',
    answer: 'A focused agent doing one job across Shopify and one other system usually takes a few weeks from the first look at your orders to a supervised pilot. Older ERPs, product data that needs tidying, or a job shared by several teams all add time. You get a written timeline after the demo, when we have seen what your data actually looks like.' },
  { category: 'cost', question: 'Do you show a demo before we sign?',
    answer: 'Yes. Before any contract, we build a working version against a copy of your own orders, emails or catalogue, or against sample data if you prefer, and walk you through what it drafted and what it sent to a person. You see the misses as well as the hits. The demo is how you judge whether the job is worth building, and it is how we scope the fixed price.' },

  // ── Privacy, safety and ownership ──
  { category: 'risk', question: 'Can an AI agent safely make changes in our Shopify store?',
    answer: 'The custom app we install on your store can only reach what its Shopify access scopes allow, and we choose those scopes per job, so a returns agent never gets access to product prices. Agents start by tagging and drafting rather than changing live records, and refunds, discounts and price changes go to a person. Every action is logged. Shopify also warns that a webhook can arrive more than once, so each agent skips duplicates.',
    links: [{ href: SRC_WEBHOOK_DUPES, label: 'shopify.dev: duplicate webhooks' }] },
  { category: 'risk', question: 'Does the Privacy Act apply to an AI agent handling customer orders?',
    answer: 'Yes, for any business the Privacy Act 1988 covers. The OAIC states that privacy obligations attach to personal information entered into an AI system, and to generated output that includes it. Order data carries names, addresses and phone numbers, so we pass the agent only the fields each job needs and use business AI terms, not consumer chatbots, which the OAIC advises against for personal information.',
    links: [{ href: SRC_OAIC_AI, label: 'OAIC: privacy and commercially available AI products' }] },
  { category: 'risk', question: 'Does the December 2026 Privacy Act change affect Shopify order agents?',
    answer: 'It can. The OAIC’s APP 1 guidelines say that from 10 December 2026 your privacy policy must include new information about decisions made using computer programs and personal information. If an agent helps decide something that could significantly affect a customer, such as declining a refund or flagging an order as fraud, it belongs in the policy. Each agent comes with a plain record of the decisions it makes, ready for your adviser.',
    links: [{ href: SRC_OAIC_APP1, label: 'OAIC: APP guidelines chapter 1' }] },
  { category: 'risk', question: 'Who owns a Shopify agent you build for us in Australia?',
    answer: 'Your business does, from day one. The code sits in a repository in your name, along with the prompts, rules, test cases and documentation. The custom app is installed on your Shopify store under your account, and AI and hosting can run in your own accounts at cost. If you later bring the work in-house or move to another provider, nothing has to be rebuilt.' },
];

/* ─── Australian systems the agents connect to (prose rows, no platform-feature claims) ─── */
const SYSTEMS: { t: string; d: string }[] = [
  { t: 'Accounting', d: 'Xero, MYOB Business, MYOB Acumatica and QuickBooks Online. Agents check what your existing connector posted; they do not replace it.' },
  { t: 'Inventory and ERP', d: 'Cin7 Omni, Cin7 Core (formerly DEAR), Unleashed, NetSuite and Odoo. We agree which system owns stock, cost and price before any build.' },
  { t: 'Marketplaces', d: 'Amazon.com.au, eBay, Kogan, Bunnings Marketplace and THE ICONIC, through the connector you already use to bring those orders in.' },
  { t: 'Payments', d: 'Shopify Payments, Stripe, Afterpay and Zip settlements, matched against orders and refunds before they reach the ledger.' },
  { t: 'Couriers', d: 'Australia Post, StarTrack and Sendle tracking and address data, so exceptions are caught before the day’s cut-off.' },
  { t: 'Helpdesk and inbox', d: 'Gmail, Outlook, Gorgias and Zendesk, where stockist orders, return requests and supplier confirmations arrive.' },
];

/* ─── Internal links (all live AU routes, checked in src/app/au on 2026-10-29) + US twin ─── */
const RELATED: { h: string; t: string; d: string }[] = [
  { h: '/au/shopify-development', t: 'Shopify development Australia', d: 'New stores, Shopify Plus, migrations and B2B, with Xero, MYOB and shipping connected.' },
  { h: '/au/ai-agents', t: 'AI agents for Australian businesses', d: 'Agents for jobs outside the store: Xero, HubSpot, ServiceM8 and Microsoft 365.' },
  { h: '/au/ai-customer-service', t: 'AI customer service', d: 'Order status and returns answers drafted inside Gorgias, Zendesk or your helpdesk.' },
  { h: '/au/accounts-payable-automation', t: 'Accounts payable automation', d: 'Supplier invoices read into draft bills in Xero or MYOB, with approval.' },
  { h: '/au/ecommerce-ai-agents', t: 'Ecommerce AI agents', d: 'The wider ecommerce view: AI for ecommerce across order questions, returns, listings and stock.' },
  { h: '/au/sales-order-automation-ai-agents', t: 'Sales order automation', d: 'Emailed and PDF purchase orders turned into checked sales orders.' },
  { h: '/au/shopify-xero-integration', t: 'Shopify and Xero integration', d: 'Sales, payouts and fees posting cleanly from Shopify into Xero.' },
  { h: '/au/b2b-ecommerce', t: 'B2B ecommerce', d: 'Trade portals with account prices ex GST, linked to your back office.' },
  { h: '/au/shopify-plus', t: 'Shopify Plus', d: 'Plus builds, native B2B and migrations for stores that need the higher limits.' },
  { h: '/au/netsuite-ai-agents', t: 'NetSuite AI agents', d: 'Agents inside NetSuite for supplier bills, sales orders and marketplace exceptions.' },
  { h: '/au/ecommerce-development', t: 'Ecommerce development', d: 'Not on Shopify, or not sure it fits? We compare platforms for your catalogue.' },
  { h: '/services/shopify-ai-agents', t: 'Shopify AI agents (United States)', d: 'The same service for US stores, with NetSuite, SAP Business One and ShipStation.' },
];

/* ─── JSON-LD (Organization lives sitewide; referenced by @id only) ─── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Shopify AI Agent Development Australia',
      serviceType: 'Custom AI agent development for Shopify store operations',
      alternateName: ['Shopify AI agents Australia', 'Shopify AI automation Australia', 'AI agents for Shopify stores'],
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'Custom AI agents for established Australian Shopify stores, built as a custom app on the GraphQL Admin API and connected to Xero, MYOB, Cin7, Unleashed, NetSuite or Odoo: order exceptions, stockist purchase orders to draft orders, returns, reorder lists, payout and ledger checks, marketplace exceptions and catalogue drafts. Demo on the store’s own data before signing, fixed price per phase, client owns the code.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Shopify AI agents for Australian stores',
        itemListElement: AGENT_JOBS.map((j) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: j.t, description: `${j.d} ${j.guard}` },
        })),
      },
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
      datePublished: PUBLISHED,
      dateModified: UPDATED,
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
  alternates: { canonical: CANONICAL, languages: twinAlternates['shopify-ai-agents'] },
  openGraph: {
    title: TITLE,
    description:
      'AI agents for established Australian Shopify stores, connected to Xero, MYOB, Cin7, Unleashed and your couriers. Your team signs off refunds and ledger posts, each action is recorded, and the code is yours.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'FactoryJet: Shopify AI agents for Australian stores' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

const H1_SPLIT = H1.indexOf(': ');
const H1_LEAD = H1.slice(0, H1_SPLIT + 1);
const H1_EMPHASIS = H1.slice(H1_SPLIT + 2);

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

const HERO_ICONS = [
  'M4 6h16v12H4V6Zm4 4h8m-8 4h5',
  'M5 12l4 4 10-10M4 20h16',
  'm8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14',
] as const;

const JOB_ICONS = [
  'M4 4h16v16H4zM8 9h8M8 13h5',
  'M6 3h9l4 4v14H6V3Zm9 0v4h4M9 12h6M9 16h4',
  'M4 12a8 8 0 1 0 3-6.2M4 4v4h4',
  'M3 7h18M3 12h18M3 17h10',
  'M5 3h14v18H5V3Zm3 4h8m-8 4h2m4 0h2m-8 4h2m4 0h2',
  'M4 7h16l-1 12H5L4 7Zm4 0V5a4 4 0 0 1 8 0v2',
  'M4 5h16v14H4zM8 9h8M8 13h8M8 17h4',
] as const;

export default function ShopifyAiAgentsAUPage() {
  return (
    <>
      <script id="ld-au-shopify-ai-agents" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="au" logoHref="/au" />

      <div className="aiAgentPage auPage">
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

        {/* ═══ HERO: copy + inline form left, spec panel right ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Shopify AI Agents Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                Your Shopify store has outgrown the spreadsheet and the shared inbox. Stockists email PDF orders,
                payouts need matching in Xero or MYOB, stock lives in Cin7 or Unleashed, and parcels go out with
                Australia Post, StarTrack or Sendle. We design, build and support AI agents that do the reading and
                checking across those systems. Your team approves anything with money attached, and you own the code.
              </p>
              <HeroInlineForm
                region="au"
                source="au_shopify_ai_agents_hero"
                submitLabel="See a demo on my data"
                service="Shopify AI Agents"
                trustText="Working software on your own data before you sign. Founder replies within 24 hours."
              />
            </div>

            <form
              className="specpanel"
              aria-label="What every Shopify AI agent build includes"
              data-visual-slot="shopify-ai-agents:hero"
              data-visual-kind="diagram"
              data-visual-subject="What every Shopify AI agent build includes: a demo on the store's own orders, approval on refunds and prices, and code owned by the store"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · EVERY SHOPIFY AGENT</span>
                <span className="sys"><span>SHOPIFY</span><span>XERO · MYOB</span></span>
              </div>
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what every build includes">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="shopify-ai-au-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[0]} /></svg></span>
                  <span className="idx">on a copy of your own orders</span>
                  <span className="title">Demo before you sign</span>
                  <span className="tag">First</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="shopify-ai-au-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[1]} /></svg></span>
                  <span className="idx">refunds, prices, ledger posts</span>
                  <span className="title">A person approves</span>
                  <span className="tag">Always</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="shopify-ai-au-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[2]} /></svg></span>
                  <span className="idx">repository, prompts, logs</span>
                  <span className="title">Code in your accounts</span>
                  <span className="tag">Yours</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · The agent tags and drafts. Your team decides.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (verified facts only, fetched 29 Oct 2026) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '4', t: 'Shopify plans (Basic, Grow, Advanced, Plus) include Shopify Flow free, the rules engine an agent works beside', s: 'Shopify Help Center', u: SRC_FLOW },
              { v: '10x', t: 'more GraphQL Admin API allowance on Plus than the Standard plan: 1,000 points a second against 100 (Advanced gets 200)', s: 'shopify.dev', u: SRC_RATE_LIMITS },
              { v: '1 Oct 2024', t: 'the date Shopify made its REST Admin API legacy. New agents belong on GraphQL', s: 'shopify.dev', u: SRC_REST_LEGACY },
              { v: '10 Dec 2026', t: 'new APP 1 privacy policy rules start for decisions made using computer programs', s: 'OAIC, APP 1', u: SRC_OAIC_APP1 },
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
          <div className="who"><b><a href="/about">Bhavesh Barot</a></b>, Founder and CEO (<a href="https://www.linkedin.com/in/bhavesh-ai-gtm-expert/" {...extLink}>LinkedIn</a>)<br /><span>500+ businesses served since 2014</span></div>
          <div className="upd">Last updated<br />31 October 2026</div>
        </div>

        {/* ═══ ANSWER-FIRST (GEO) ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What does a Shopify AI agent do for an Australian store?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">A Shopify AI agent reads the messy inputs behind a store, such as emailed stockist orders,
                    return requests and payout reports, and prepares the next step in Shopify, Xero, MYOB or your
                    inventory system.</span> It tags orders and drafts the next step. A person approves refunds, prices and anything posted to
                    the ledger, and every action is logged.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Who this is for</div>
                    <p>
                      Established Australian brands and wholesalers on Shopify or Shopify Plus, usually selling direct and
                      to stockists, often on one or two marketplaces as well, with an operations team that spends hours a
                      week moving information between Shopify and the back office. If your store takes a handful of orders a
                      day, Shopify Flow and a good app will serve you better than a custom build. We take on stores
                      anywhere in Australia, from Sydney and Melbourne to Brisbane, Perth and Adelaide.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    <span className="stat">Shopify’s own tools come first.</span> Sidekick, Shopify’s assistant in the admin,
                    presents changes for your review before applying them, and Flow runs fixed rules for free. An agent earns
                    its place where a rule cannot work out what a stockist meant, or where the job crosses into Xero, Cin7
                    or a courier. <a href={SRC_SIDEKICK} {...extLink}>Sidekick ↗</a> <a href={SRC_FLOW} {...extLink}>Flow ↗</a>
                  </p>
                </div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Short answers first</div>
                <ul className="trigrows">
                  <li><span className="m">Does Shopify have an AI agent?</span><span className="t">Sidekick</span></li>
                  <li><span className="m">Is Shopify Flow enough?</span><span className="t">For fixed rules</span></li>
                  <li><span className="m">Does it replace my Xero connector?</span><span className="t">No</span></li>
                  <li><span className="m">Do I need Shopify Plus?</span><span className="t">No</span></li>
                  <li><span className="m">Who approves refunds?</span><span className="t">Your team</span></li>
                  <li><span className="m">Who owns the code?</span><span className="t">You</span></li>
                </ul>
                <p className="au-note">Each answer is explained in full in the questions at the end of this page.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ THE AGENTS → capgrid ═══ */}
        <section className="section capabilities" id="agents">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Seven jobs we build agents for</div>
              <h2>Shopify AI agents for Australian store operations</h2>
              <p className="lead">
                Each card is one job with one written limit. Most stores start with one of the first five and add the
                next once the first has run for a month.
              </p>
            </div>
            <div className="capgrid">
              {AGENT_JOBS.map((j, i) => (
                <div key={j.n} className={`cap cap-${i + 1}`}>
                  <div className="caphead"><span className="capid">CAP‑{j.n}</span><svg {...CAP_ICON}><path d={JOB_ICONS[i]} /></svg></div>
                  <h3>{j.t}</h3>
                  <p>{j.d}</p>
                  <p><b>Limit:</b> {j.guard}</p>
                  {j.more && <p><a href={j.more.h}>{j.more.l} →</a></p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SIDEKICK vs FLOW vs APP vs CUSTOM AGENT → comparison ═══ */}
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head head-stack">
              <div className="eyebrow">Choose the lightest tool that works</div>
              <h2>Sidekick, Shopify Flow, an App Store app or a custom agent?</h2>
              <p className="lead">
                Four tools, four different jobs. The most avoidable cost is building an agent for a job Flow already does for free.
              </p>
            </div>
            <style>{'.sai-swipe{display:none;font-size:13px;color:var(--muted);margin:0 0 8px}@media (max-width:767px){.sai-swipe{display:block}}'}</style>
            <p className="sai-swipe">Swipe sideways to see every column.</p>
            <div className="tablewrap" tabIndex={0} role="region" aria-label="Scrollable comparison of Shopify AI options" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table style={{ minWidth: 740 }}>
                <thead>
                  <tr>
                    <th>What you need</th>
                    <th className="fj">Custom agent</th>
                    <th>Sidekick</th>
                    <th>Shopify Flow</th>
                    <th>App Store app</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Best at</th><td className="fj">A job shaped by your systems and rules</td><td>Helping a person in the admin</td><td>Fixed if-this-then-that rules</td><td>A job every store shares</td></tr>
                  <tr><th scope="row">Reads emails and PDFs</th><td className="fj">Yes</td><td>No</td><td>No</td><td>Some</td></tr>
                  <tr><th scope="row">Works without someone asking</th><td className="fj">Yes, on a schedule or event</td><td>No</td><td>Yes</td><td>Yes</td></tr>
                  <tr><th scope="row">Checks Xero, MYOB or Cin7</th><td className="fj">Yes, through their APIs</td><td>No</td><td>Through connectors</td><td>If it supports them</td></tr>
                  <tr><th scope="row">Your own approval rules</th><td className="fj">Written per action, per limit</td><td>Reviews each change</td><td>Rules you write</td><td>The app’s settings</td></tr>
                  <tr><th scope="row">Who owns it</th><td className="fj">You</td><td>Shopify</td><td>Shopify</td><td>The app maker</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Sidekick and Flow facts from the Shopify Help Center (<a href={SRC_SIDEKICK} {...extLink}>Sidekick</a>, <a href={SRC_FLOW} {...extLink}>Flow</a>), checked 29 October 2026.
            </p>
          </div>
        </section>

        {/* ═══ AUSTRALIAN SYSTEMS → ruled rows ═══ */}
        <section className="section platforms" id="systems">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Where the agents plug in</div>
              <h2>Which Australian systems can a Shopify agent connect to?</h2>
              <p className="lead">
                We build each agent as a custom app on Shopify’s GraphQL Admin API. That is the interface Shopify requires
                for new public apps. The agent then connects to your back office through each vendor’s API. You keep the
                software you have.
              </p>
            </div>
            <div className="platlist" role="list">
              {SYSTEMS.map((s, i) => (
                <div key={s.t} className="plat plat-2col" role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{s.t}</h3></div>
                  <p className="plat-build">{s.d}</p>
                </div>
              ))}
            </div>
            <p className="tablenote">
              REST Admin API legacy since 1 October 2024, GraphQL required for new public apps from 1 April 2025: <a href={SRC_REST_LEGACY} {...extLink}>shopify.dev</a>.
            </p>
          </div>
        </section>

        {/* ═══ APPROVAL SPLIT → facts ═══ */}
        <section className="section facts au-top" id="approval">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Limits written before code</div>
              <h2>What the agent does alone, and what waits for your team</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Each agent comes with one page that sorts its actions into three groups: free to do, needs sign-off,
                  and forbidden. The app is granted only the Shopify access scopes that list needs, so a
                  returns agent cannot touch product prices even if someone asks it to.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  Approvals arrive where your team already works: a Slack or Teams message, an email with one-click
                  approve or send-back links, or a tag queue in the Shopify admin. A webhook is the message Shopify sends when something happens,
                  such as a new order. Shopify says a webhook can be delivered more than once, so every agent records each
                  event ID and skips repeats rather than tagging or drafting twice.{' '}
                  <a href={SRC_WEBHOOK_DUPES} {...extLink}>shopify.dev ↗</a>
                </p></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">A typical split</div>
                <ul className="trigrows">
                  <li><span className="m">Tag and note an order</span><span className="n">exceptions, fraud signals</span><span className="t">Automatic</span></li>
                  <li><span className="m">Draft orders and returns</span><span className="n">stockist POs, exchanges</span><span className="t">Draft only</span></li>
                  <li><span className="m">Reorder lists</span><span className="n">grouped by supplier</span><span className="t">Draft only</span></li>
                  <li><span className="m">Refunds, discounts, prices</span><span className="n">any money decision</span><span className="t">Always approve</span></li>
                  <li><span className="m">Posts to Xero or MYOB</span><span className="n">corrections, credit notes</span><span className="t">Always approve</span></li>
                  <li><span className="m">Delete customers or orders</span><span className="n">outside every agent’s job</span><span className="t">Never</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PROJECT STEPS → timeline ═══ */}
        <section className="section process" id="how-we-build">
          <div className="wrap">
            <div className="section-head head-stack">
              <div className="eyebrow">How a project runs</div>
              <h2>From your brief to a live Shopify agent in seven steps</h2>
              <p className="lead">
                Tap a step for the detail and the thing you hold when it ends. Steps one and two come before any
                contract.
              </p>
            </div>
            <div className="timeline timeline-4">
              {STEPS.map((s) => (
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
            headline={'Which Shopify job is eating your operations team’s week?'}
            sub={'Name the job and the systems it crosses. We build a demo against a copy of your own orders or emails, so you see what the agent would do before you sign anything.'}
            label={'See a demo on my data'}
          />
        </div>

        {/* ═══ HOUSE TERMS → ruled rows ═══ */}
        <section className="section platforms" id="terms">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">How we work</div>
              <h2>What terms come with every Shopify agent project?</h2>
              <p className="lead">
                Five terms, written into the scope you sign. They cover what you see before signing, how the price is set,
                who owns the code, and what happens after launch.
              </p>
            </div>
            <div className="platlist" role="list">
              {TERMS.map((t, i) => (
                <div key={t.t} className="plat plat-2col" role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{t.t}</h3></div>
                  <p className="plat-build">{t.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ COST (market ranges only, build only, GST basis stated) ═══ */}
        <section className="section au-top" id="cost">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Market ranges, not our prices</div>
              <h2>What a Shopify AI agent costs to build in Australia</h2>
              <p className="lead">
                <a href={SRC_FLOWTIVITY} {...extLink}>Flowtivity’s March 2026 Australian guide</a> puts multi-system workflow
                automation at $20,000 to $50,000 or more. <a href={SRC_WVD} {...extLink}>Web Video Digital’s August 2026 guide</a>{' '}
                puts a simple single-task agent at $15,000 to $35,000 and most small-to-medium projects at $30,000 to
                $80,000. All figures are AUD. Neither source says whether GST is included, so treat them as a guide and ask
                any quote to state its GST basis.
              </p>
            </div>
            <div className="au-split">
              <div>
                <p>
                  FactoryJet quotes a fixed price in writing for each phase after the demo, with the GST basis stated on
                  the quote. A store that starts with one agent across Shopify and Xero is a different job from one
                  that needs a NetSuite reconciliation and three marketplaces, which is why we do not publish a rate card.
                </p>
                <ModalCTAButton label="See a demo on my data" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="au-panel">
                <div className="eyebrow">What moves the scope</div>
                <ul className="trigrows">
                  <li><span className="m">Systems the agent reads and writes</span><span className="t">Reach</span></li>
                  <li><span className="m">How messy the inputs are</span><span className="t">Handling</span></li>
                  <li><span className="m">Product and customer data quality</span><span className="t">Clean-up</span></li>
                  <li><span className="m">Approval and logging rules</span><span className="t">Control</span></li>
                  <li><span className="m">Support after launch</span><span className="t">Optional</span></li>
                  <li><span className="m">Demo on your data</span><span className="t">Before you sign</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PRIVACY (OAIC, verified today) ═══ */}
        <section className="section facts" id="privacy">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Privacy Act and OAIC guidance</div>
              <h2>How does the Privacy Act shape a Shopify AI agent?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  The OAIC’s guidance on commercially available AI says privacy obligations reach any personal information
                  entered into an AI system, and any generated output that includes it. An order carries a name, a delivery address, a
                  phone number and often a note from the customer. Where the Privacy Act 1988 covers your
                  business, every one of those fields is in scope.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  So each agent receives only the fields its job needs. A reorder agent sees SKUs and quantities, never
                  customer names. Models run under business terms, because the OAIC recommends, as best practice, against
                  entering personal information into publicly available AI tools. It also says AI should not be treated as
                  set and forget, which is why every agent has logs someone reads.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <p>
                    From 10 December 2026, the OAIC’s APP 1 guidelines add privacy policy requirements for decisions made
                    using computer programs. If an agent helps decline a refund or hold an order as suspected fraud, we
                    document what it decides so your adviser can describe it. Legal sign-off stays with your adviser; we
                    supply the documentation they need.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_OAIC_AI} {...extLink}>OAIC, privacy and commercially available AI products</a>;{' '}
                    <a href={SRC_OAIC_APP1} {...extLink}>OAIC, APP guidelines chapter 1</a>.
                  </p>
                </div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ BRIEF / RFP ASK ═══ */}
        <section className="section au-top" id="brief">
          <div className="wrap au-split">
            <div className="au-prose">
              <div className="eyebrow">Send us your brief</div>
              <h2>Have a brief or RFP? Send it and we will quote from it</h2>
              <p>
                Serious projects usually arrive with a written brief, and that is the fastest way to a fixed price. After
                you send your name and work email, the form lets you attach a PDF or Word file up to 5 MB, kept private.
                No brief yet? Answer the five points opposite in an email and that will do.
              </p>
              <p>
                The founder reads every brief and replies within 24 hours with a proposed first job and a date for the
                demo on your data.
              </p>
              <ModalCTAButton label="Send my brief" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
            </div>
            <div className="au-panel">
              <div className="eyebrow">What a useful brief covers</div>
              <ol className="au-numlist">
                <li><span><b>The job.</b> What happens, how often, and who does it today.</span></li>
                <li><span><b>The systems.</b> Shopify plan, Xero or MYOB, Cin7, Unleashed or an ERP, couriers and marketplaces.</span></li>
                <li><span><b>The limits.</b> What the agent must never do, and who approves the rest.</span></li>
                <li><span><b>The measure.</b> How you count the job now: hours, orders per day, errors per month.</span></li>
                <li><span><b>The timing.</b> When you need it live, and any busy season to avoid, such as Black Friday or Christmas.</span></li>
              </ol>
            </div>
          </div>
        </section>

        {/* ═══ PROOF (global, platform-matched, labelled as US) ═══ */}
        <section className="section facts" id="work">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Work we have done</div>
              <h2>What Shopify work sits behind these agents?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  FactoryJet has served more than 500 businesses since 2014. Our Shopify work includes DTF Virginia, a
                  store in the United States. The agents on this page grow out of that same work: orders, stock,
                  wholesale buyers and the accounting behind them.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  Ask on the call and we will show you live Shopify work and a
                  demo of an agent running against your own data, which is the better test of whether we suit your store.
                </p></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ RELATED → agentdir ═══ */}
        <section className="section agentdir" id="related">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Related services</div>
              <h2>Which other FactoryJet services fit a Shopify store?</h2>
            </div>
            <div className="agentdir-group">
              <div className="agentdir-label">
                <h3>FactoryJet services</h3>
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
          heading="Shopify AI agent questions Australian store owners ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ SOURCES ═══ */}
        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">Sources</div>
            <div className="refs">
              <a href={SRC_SIDEKICK} {...extLink}>Shopify Help Center: Sidekick</a>
              <a href={SRC_FLOW} {...extLink}>Shopify Help Center: Shopify Flow</a>
              <a href={SRC_DRAFT_ORDERS} {...extLink}>Shopify Help Center: draft orders</a>
              <a href={SRC_B2B} {...extLink}>Shopify Help Center: B2B</a>
              <a href={SRC_RATE_LIMITS} {...extLink}>shopify.dev: GraphQL Admin API rate limits</a>
              <a href={SRC_REST_LEGACY} {...extLink}>shopify.dev: REST Admin API (legacy)</a>
              <a href={SRC_WEBHOOK_DUPES} {...extLink}>shopify.dev: duplicate webhooks</a>
              <a href={SRC_AGENTIC} {...extLink}>shopify.dev: agentic commerce</a>
              <a href={SRC_OAIC_AI} {...extLink}>OAIC: privacy and commercially available AI products</a>
              <a href={SRC_OAIC_APP1} {...extLink}>OAIC: APP guidelines chapter 1</a>
              <a href={SRC_FLOWTIVITY} {...extLink}>Flowtivity: AI agent cost in Australia (March 2026)</a>
              <a href={SRC_WVD} {...extLink}>Web Video Digital: custom AI agent cost (August 2026)</a>
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>See what an agent would do with last week’s orders</h2>
              <p>
                Send your name and work email, and your brief if you have one. The founder replies within 24 hours to book
                a short call about the job and a demo on your own data. No spam, no obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="See a demo on my data" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/shopify-development">See Shopify development</a>
            </div>
          </div>
        </section>

      </main>
      </div>

      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}
