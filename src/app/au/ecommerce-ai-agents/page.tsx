import type { Metadata } from 'next';
import { Fragment } from 'react';
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

/* ─────────────────────────────────────────────────────────────────────────────
   /au/ecommerce-ai-agents, built 2026-10-29.

   Why this page exists: /au/ai-agents is the national AI automation agency page and
   covers every industry. This page owns one job for one buyer: AI agents inside an
   established Australian online store and the AU marketplaces it sells on. The US
   twin is /services/ecommerce-ai-agents. No sentence here is copied from either.

   Demand (DataForSEO Google Ads, location 2036 Australia, pulled 2026-10-29):
   "ai automation agency" 390, "marketplace automation" 260, "ai for ecommerce" 110,
   "ecommerce ai" 110, "ai inventory management" 30, "ecommerce chatbot" 20,
   "ecommerce automation" 10. "ai agents for ecommerce" and "ecommerce ai agents"
   returned no volume. PAA for "ai agents for ecommerce" (AU) shaped FAQs 1 to 6.

   Truth rules for anyone editing this file:
   1. Every law, platform or price fact below was fetched from its primary source on
      2026-10-29 and links to it through the SRC_* constants. Re-fetch before changing.
   2. Left out on purpose because the primary source could not be fetched on
      2026-10-29: ATO e-invoicing (Peppol) and ACCC pages (HTTP 403), Xero API limits
      (page body is script-rendered). Catch closed in 2025 and the MyDeal shopfront
      closed on 30 Sep 2025, so neither is named as a live channel.
   3. Market ranges only (rule of 30 Sep 2026), from named AU sources, never our
      prices. Neither source says whether its AUD figures include GST; the page says so.
   4. No running, model, hosting or retainer figures (rule of 11 Oct 2026).
   5. No client is presented as Australian. The proof block names platform-matched
      work and says plainly that none of it is an Australian store.
   6. Nothing says where the FactoryJet team is.

   Schema: Service (areaServed Australia) + BreadcrumbList + WebPage/Article + FAQPage.
   FAQPage mainEntity is generated from the same FAQ_ITEMS array AuFaq renders.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL = 'https://factoryjet.com/au/ecommerce-ai-agents';
const UPDATED = '2026-10-29';
const TITLE = 'AI for Ecommerce Australia | Ecommerce AI Agents | FactoryJet';
const H1 = 'Ecommerce AI Agents for Australian Online Stores and Marketplaces';
const DESCRIPTION =
  'AI agents for Australian online stores: order questions, returns, marketplace listings and stock, wired into Shopify, Xero, MYOB and Australia Post.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Ecommerce AI Agents', url: CANONICAL },
];

/* ─── External sources, each fetched 2026-10-29 and the quoted claim read ─── */
// Australia Post Developer Centre, Shipping and Tracking API, tracking resource:
// "the Track Items API is rate limited at 10 requests per minute" and "You may include
// up to 10 tracking IDs in each request." Recommends showing the tracking number on the
// order and linking to the tracking page.
const SRC_AUSPOST =
  'https://developers.auspost.com.au/content/apis/shipping-and-tracking/info/api-resources/tracking.html';
// Afterpay API reference, Create Refund: "This endpoint performs a full or partial
// refund. The refund operation is idempotent if a unique requestId and
// merchantReference are provided."
const SRC_AFTERPAY = 'https://developers.cash.app/afterpay/api-reference/reference/payments/create-refund';
// Amazon Selling Partner API, Marketplace IDs: Australia listed under Far East,
// "A39IBJ37TRP1C6", country code AU.
const SRC_AMAZON = 'https://developer-docs.amazon/sp-api/docs/marketplace-ids';
// OAIC, guidance on privacy and commercially available AI products: "Privacy obligations
// will apply to any personal information input into an AI system"; avoid entering
// personal and sensitive information into publicly available generative AI tools; public
// facing AI tools (such as chatbots) should be "clearly identified as such to users".
const SRC_OAIC_AI =
  'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products';
// OAIC APP guidelines chapter 1: "From 10 December 2026, APP 1.7 requires APP entities
// to include the information outlined in APP 1.8" where a computer program makes or does
// a thing relating to a decision that "could reasonably be expected to significantly
// affect the rights or interests of an individual". Cites the Privacy and Other
// Legislation Amendment Act 2024 (Cth).
const SRC_OAIC_APP1 =
  'https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-1-app-1-open-and-transparent-management-of-personal-information';
// Flowtivity, "How Much Does an AI Agent Cost in 2026? Australian Pricing Guide",
// 5 March 2026, AUD, GST not stated: "Customer service automation $10,000 - $25,000",
// "Multi-system workflow automation $20,000 - $50,000+".
const SRC_FLOWTIVITY = 'https://flowtivity.ai/blog/ai-agent-cost-pricing-guide-australia-2026/';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',  label: 'AI for ecommerce, the basics' },
  { key: 'systems', label: 'Stores, marketplaces and back office' },
  { key: 'privacy', label: 'Privacy Act and safety' },
  { key: 'working', label: 'Cost, briefs and working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── Basics (Google People Also Ask, Australia, 29 Oct 2026) ──
  { category: 'basics', question: 'What are AI agents in ecommerce?',
    answer: 'An ecommerce AI agent is a program that reads something arriving at your store, such as a customer email, a return request or a wholesale order PDF, looks up the facts in your systems, and then does or drafts the next step. It might write the reply, raise the refund or update a marketplace listing. The difference from a chatbot is that it acts inside Shopify, Xero or your stock system, within limits you set.' },
  { category: 'basics', question: 'Which AI agents are best for e-commerce?',
    answer: 'The ones that do a single high-volume job inside the systems you already pay for. For most established Australian stores that means order status and delivery questions, returns checked against your policy, marketplace listing updates, and stock alerts with draft purchase orders. Agents sold as running the whole store tend to disappoint. Pick the job your team repeats most each week and start there.' },
  { category: 'basics', question: 'How can AI be used in e-commerce?',
    answer: 'Out front, it answers shoppers about delivery, sizing and returns at 11pm on a Sunday. Out back, it handles the office work that grows with every order: matching courier tracking to orders, checking returns, rewriting product data for Amazon.com.au or eBay, flagging stock that will run out before the next container lands, and turning emailed trade orders into draft sales orders for a person to confirm.' },
  { category: 'basics', question: 'Can AI build me an ecommerce store?',
    answer: 'It can draft parts of one: product descriptions, collection copy, a starting theme layout. It cannot decide your GST settings, payment terms, courier rules or the link to Xero, and it takes no responsibility when a checkout fails. For established brands we build the store as a separate project and add agents once orders are flowing.',
    links: [{ href: '/au/ecommerce-development', label: 'Ecommerce development in Australia' }] },
  { category: 'basics', question: 'What is marketplace automation?',
    answer: 'Marketplace automation means software keeps your listings, stock, prices and orders in step across the channels you sell on, such as Amazon.com.au, eBay, Kogan or Bunnings Marketplace, so nobody retypes them. Classic tools sync fields on a schedule. An AI agent adds the reading work: rewriting titles to each channel’s rules, fixing rejected listings, and sorting buyer messages that arrive in each seller centre.' },
  { category: 'basics', question: 'Is ecommerce being taken over by AI?',
    answer: 'No. The office work behind a store is changing fast. Shoppers still buy from brands they trust, and your team still makes the calls on price, stock and customers. What shifts is who does the reading and copying between systems. Stores that let an agent draft the routine replies and listing fixes free their people for buying, merchandising and the customers who need a person.' },

  // ── Systems ──
  { category: 'systems', question: 'Which store platforms do your agents work with?',
    answer: 'Shopify and Shopify Plus, WooCommerce, BigCommerce, Adobe Commerce (Magento) and Maropost Commerce Cloud, the platform formerly called Neto. The agent connects through each platform’s own API with a key made only for it, so it can read orders and draft changes without a staff login. If your store is headless or custom, the back-office agent works the same way because it never touches the storefront.',
    links: [{ href: '/au/shopify-development', label: 'Shopify development in Australia' }] },
  { category: 'systems', question: 'Can the agent work with Xero, MYOB or QuickBooks?',
    answer: 'Yes. Xero is the most common link we see in Australian stores, then MYOB Business, MYOB Acumatica and QuickBooks Online. Typical agent jobs are matching marketplace payouts and refunds to invoices, coding supplier bills with the right GST treatment for your bookkeeper to approve, and chasing overdue trade accounts. Nothing posts to the ledger on its own: the agent drafts and a person approves.',
    links: [{ href: '/au/accounts-payable-automation', label: 'Accounts payable automation' }] },
  { category: 'systems', question: 'Do you work with NetSuite, Odoo, Cin7 Core or Unleashed?',
    answer: 'Yes. Once a store carries thousands of SKUs or sells wholesale, stock usually lives in an inventory or ERP system such as Cin7 Core (formerly DEAR), Cin7 Omni, Unleashed, NetSuite or Odoo. We agree which system owns stock, cost price and customer pricing before the agent writes anything. Then it reads stock from that system and drafts orders back into it, so the store and the warehouse never disagree.' },
  { category: 'systems', question: 'Can an AI agent manage our Amazon.com.au and eBay listings?',
    answer: 'It can prepare and submit listing updates through each marketplace’s seller API, and it is good at the tedious part: rewriting titles and attributes to each channel’s rules and fixing listings that get rejected. Amazon’s Selling Partner API lists Australia as its own marketplace in the Far East region, so the agent works against that marketplace’s rules, not the US ones. We keep a person on any price change.',
    links: [{ href: SRC_AMAZON, label: 'Amazon SP-API marketplace IDs' }] },
  { category: 'systems', question: 'What about Kogan, Bunnings Marketplace and THE ICONIC?',
    answer: 'Each one has its own seller onboarding, product data rules and integration route, and some only accept stock and orders through an approved connector. We start by reading what the marketplace allows a seller to automate, then build the agent around that route. The common jobs are the same across all of them: listing data that passes review first time, stock kept in step, and buyer messages sorted.' },
  { category: 'systems', question: 'Can an agent answer where-is-my-order questions using Australia Post tracking?',
    answer: 'Yes, and it is usually the first job we build. Plan for one limit. Australia Post says its Track Items API allows 10 requests a minute with up to 10 tracking IDs each, so an agent cannot fetch tracking fresh for every question in a busy week. We store tracking events as they arrive and answer from that record. StarTrack and Sendle orders are handled through their own connections.',
    links: [{ href: SRC_AUSPOST, label: 'Australia Post: Track Items API limits' }] },
  { category: 'systems', question: 'Can the agent handle Afterpay, Zip and Stripe refunds?',
    answer: 'Yes. The agent reads the return, tests it against your policy and lines up the refund on the payment method the shopper used. Afterpay’s API documents one refund call for a full or partial refund, and it can be retried safely when the retry reuses the first request’s requestId and merchantReference. That matters for an agent, because a retried call must never refund twice. We build every refund path so a person approves before money moves.',
    links: [{ href: SRC_AFTERPAY, label: 'Afterpay API: create refund' }] },

  // ── Privacy and safety ──
  { category: 'privacy', question: 'Does the Privacy Act apply to an ecommerce AI agent?',
    answer: 'Yes, when your business falls under the Privacy Act 1988 and the agent handles customer names, addresses or order histories. A delivery address or a past order is personal information the moment it reaches the model, per OAIC guidance on AI products. So a where-is-my-order agent checks the shopper’s email and order number before it shares any order details, reads only the order it was asked about, and logs what it saw. We also confirm which AI provider processes the data before building.',
    links: [{ href: SRC_OAIC_AI, label: 'OAIC: privacy and commercially available AI' }] },
  { category: 'privacy', question: 'Do we have to tell shoppers they are chatting with AI?',
    answer: 'OAIC guidance asks businesses to make sure any chatbot or other AI tool facing the public is clearly identified as AI, and that privacy policies explain how the business uses AI. We label the chat as an AI assistant, show how to reach a person, and give you wording for your privacy policy. Your adviser should still review the final policy.' },
  { category: 'privacy', question: 'What changes for ecommerce agents on 10 December 2026?',
    answer: 'If your business is covered by the Privacy Act, then from 10 December 2026, under changes made by the Privacy and Other Legislation Amendment Act 2024, APP 1 requires your privacy policy to describe the kinds of personal information used and the kinds of decisions made by computer programs that could significantly affect a person’s rights or interests. Most businesses under A$3 million turnover are exempt. An agent that refuses refunds or blocks accounts by itself may fall in scope. We document what each agent decides so the policy can say so accurately.',
    links: [{ href: SRC_OAIC_APP1, label: 'OAIC: APP 1 guidelines' }] },
  { category: 'privacy', question: 'Is it safe to give an AI agent access to our store?',
    answer: 'Safety comes from the access you grant, so each agent gets its own API key with the least permission the job needs, starts read-only, and logs every action with what it saw. Refunds, price changes, discount codes and account changes stay behind a person until the logs show the agent follows your rules. There is one switch that pauses it, and you hold it.' },

  // ── Cost, briefs and working with us ──
  { category: 'working', question: 'How much does an ecommerce AI agent cost to build in Australia?',
    answer: 'For a store, the price moves with three things: how many sales channels the agent covers, whether it only reads or also writes back to your ERP or accounting system, and how much product data needs cleaning first. A support agent that reads Shopify and Australia Post sits at the low end. One that writes stock to Cin7 across four marketplaces costs more, because every write needs testing. Flowtivity’s March 2026 guide lists customer service automation at A$10,000 to A$25,000, GST not stated. That is a market range, not our price; we quote a fixed price in writing after a short scoping call.',
    links: [{ href: SRC_FLOWTIVITY, label: 'Flowtivity, AU pricing guide (March 2026)' }, { href: '/au/ai-agents#cost', label: 'More published AU agent cost ranges' }] },
  { category: 'working', question: 'Should we buy an app or have a custom agent built?',
    answer: 'If an app handles the job out of the box, use the app. Helpdesk tools such as Gorgias answer standard policy questions well. Commission a custom agent when the work depends on your own policies, spans two systems such as Shopify and Cin7, or touches money. Many stores run both: an app for front-line chat and a custom agent for returns, trade orders and marketplace listings.',
    links: [{ href: '/au/ai-customer-service', label: 'AI customer service in Australia' }] },
  { category: 'working', question: 'Can we see it working before we sign?',
    answer: 'Yes. Before any contract we run a first version on your own data: a sample of real order emails, return requests or rejected listings from last month. You see the agent’s drafts next to what your team actually sent. If the drafts are not good enough to save your team time, you have lost an hour, and we will tell you so.' },
  { category: 'working', question: 'What should our brief or RFP include?',
    answer: 'Name the job, the volume and the systems. For example: 600 delivery questions a week, Shopify Plus, Cin7 Core, Xero, Australia Post and StarTrack, replies in Gorgias. Add who approves what today, any wholesale or marketplace channels, and your timeline. A one-page brief is enough. Send it through the form and we reply with questions or a written scope.' },
  { category: 'working', question: 'How long does an ecommerce AI agent take to build?',
    answer: 'A single agent on a platform with a good API, such as a delivery-question agent on Shopify with Australia Post tracking, usually reaches a supervised pilot in a few weeks. Agents that touch an ERP, several marketplaces or messy product data take longer. We give you a timeline in writing after the mapping stage, once we have seen the real data.' },
  { category: 'working', question: 'Who owns the agent, and what happens after launch?',
    answer: 'You own the code and the repository from day one. The AI and hosting can run in your own accounts at cost, with no markup from us. Defects are fixed inside the build price for a cover period agreed before work starts. Support after that is optional: each change is quoted and approved, with no monthly minimum, and each phase is scoped, priced and signed on its own.' },
];

/* ─── Jobs an ecommerce agent does in an Australian store ─── */
const AGENT_JOBS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Delivery questions answered from tracking', d: 'Reads the order, matches it to Australia Post, StarTrack or Sendle events already stored, and replies in your helpdesk with the real status. Missed deliveries and damaged parcels go to a person with the history attached.' },
  { n: '02', t: 'Returns checked against your policy', d: 'Reads the customer’s own words and photos, checks the order date and item against your returns policy, and prepares the refund, exchange or store credit on Afterpay, Zip or Stripe for approval.' },
  { n: '03', t: 'Marketplace listings that pass review', d: 'Rewrites titles, bullet points and attributes from your master product data to the rules of Amazon.com.au, eBay, Kogan or Bunnings Marketplace, and fixes listings that bounce back rejected.' },
  { n: '04', t: 'Stock alerts with a draft purchase order', d: 'Watches stock in Shopify, Cin7 Core or Unleashed against your reorder points and supplier lead times, and drafts the purchase order for your buyer to send.' },
  { n: '05', t: 'Wholesale orders from email and PDF', d: 'Turns a stockist’s emailed order or PDF into a draft sales order at that customer’s price list, flags lines it cannot match, and waits for your sales rep to confirm.' },
  { n: '06', t: 'Payouts and refunds matched in Xero or MYOB', d: 'Lines up marketplace and payment payouts with orders, fees and refunds so the bookkeeper reconciles from a short exception list.' },
  { n: '07', t: 'Product data cleaned before launch day', d: 'Finds missing sizes, weights, barcodes and care details across the catalogue and drafts the fixes in a spreadsheet your team approves before anything changes in the store.' },
  { n: '08', t: 'Buyer messages sorted across seller centres', d: 'Collects messages from each marketplace’s seller inbox, answers the routine ones from order data, and queues the rest by urgency for your team.' },
];

const JOB_ICONS = [
  'M3 7h11v9H3V7Zm11 3h4l3 3v3h-7M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  'M4 12a8 8 0 1 0 3-6.2M4 4v4h4',
  'M4 4h16v16H4V4Zm0 5h16M9 9v11',
  'M4 19V9l8-5 8 5v10H4Zm5 0v-6h6v6',
  'M4 6h16v12H4V6Zm0 0 8 7 8-7',
  'M5 3h14v18H5V3Zm3 4h8m-8 4h2m4 0h2m-8 4h2m4 0h2',
  'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-4-4',
  'M4 5h16v11H8l-4 4V5Z',
] as const;

/* ─── Systems the agents plug into ─── */
const SYSTEMS: { t: string; d: string }[] = [
  { t: 'Store platforms', d: 'Shopify and Shopify Plus, WooCommerce, BigCommerce, Adobe Commerce (Magento) and Maropost Commerce Cloud.' },
  { t: 'Accounting', d: 'Xero, MYOB Business, MYOB Acumatica and QuickBooks Online. Drafts only; your bookkeeper approves.' },
  { t: 'Inventory and ERP', d: 'Cin7 Core (formerly DEAR), Cin7 Omni, Unleashed, NetSuite and Odoo, with one agreed owner for stock and prices.' },
  { t: 'Marketplaces', d: 'Amazon.com.au, eBay, Kogan, Bunnings Marketplace and THE ICONIC, through each channel’s seller API or approved connector.' },
  { t: 'Payments', d: 'Afterpay, Zip and Stripe, with every refund path behind a person’s approval.' },
  { t: 'Couriers', d: 'Australia Post, StarTrack and Sendle, with tracking stored as events arrive so replies stay inside the carrier’s limits.' },
  { t: 'Helpdesk and inbox', d: 'Gorgias, Zendesk, Freshdesk, Gmail and Outlook. The agent drafts where your team already replies.' },
];

/* ─── Approval split (rendered as a table) ─── */
const APPROVAL_ROWS: { job: string; alone: string; person: string }[] = [
  { job: 'Delivery questions', alone: 'Reply with tracking status', person: 'Lost, damaged or late parcels' },
  { job: 'Returns', alone: 'Check eligibility, draft the outcome', person: 'Every refund before money moves' },
  { job: 'Marketplace listings', alone: 'Fix titles, attributes, images', person: 'Any price or promotion change' },
  { job: 'Stock', alone: 'Alert and draft the purchase order', person: 'Sending the order to the supplier' },
  { job: 'Wholesale orders', alone: 'Draft the sales order at the right price list', person: 'Confirming to the stockist' },
  { job: 'Accounting', alone: 'Match payouts, suggest GST coding', person: 'Posting anything to the ledger' },
];

/* ─── Numbered project steps ─── */
const STEPS: { t: string; d: string }[] = [
  { t: '01 · Brief and a short call', d: 'You send a brief or fill in the form. On a call with the founder we confirm the job, the weekly volume and the systems involved, and say plainly if an off-the-shelf app would do.' },
  { t: '02 · Demo on your own data', d: 'We run a first version against a sample of your real tickets, returns or listings from last month. You compare its drafts with what your team sent. No contract yet.' },
  { t: '03 · Fixed-price scope for one phase', d: 'A written scope for one agent: what it may do alone, what needs approval, what it never touches, the success measure, the defect cover period and a fixed price. You sign that phase only.' },
  { t: '04 · Privacy and access check', d: 'We list the personal information the agent will see, which AI provider processes it and where, and create API keys with the least access the job needs, in your accounts.' },
  { t: '05 · Build against a test store', d: 'The agent is built and tested on a development store or sandbox, against dozens of last month’s real orders, odd ones included, while your live store keeps trading.' },
  { t: '06 · Supervised pilot', d: 'The agent works live, and a person approves every action for an agreed period. Low-risk actions move to automatic only when the logs back it up.' },
  { t: '07 · Launch, then optional support', d: 'You get the code, the repository and a handover. Defects are fixed inside the build price for the cover period. After that, support is optional and every change is quoted first.' },
];

/* ─── House terms (approved wording, 15-16 Oct 2026) ─── */
const TERMS: { t: string; d: string }[] = [
  { t: 'Demo before you sign', d: 'Working software on your own data before a contract.' },
  { t: 'You own the code', d: 'The code and the repository are yours from day one.' },
  { t: 'Your accounts, at cost', d: 'AI and hosting can run in your own accounts at cost, with no markup.' },
  { t: 'Defect cover', d: 'Defects fixed inside the build price for a cover period agreed before work starts.' },
  { t: 'Fixed price per phase', d: 'Each phase is scoped, priced and signed on its own.' },
  { t: 'No monthly minimum', d: 'Support is optional. Each change is quoted and approved.' },
];

/* ─── Related AU services (all live in src/app/sitemap-au/sitemap.ts) + US twin ─── */
const RELATED: { h: string; t: string; d: string }[] = [
  { h: '/au/ai-agents', t: 'AI agents and automation', d: 'The wider AI automation agency page: agents for finance, trades, clinics and property as well as retail.' },
  { h: '/au/ai-customer-service', t: 'AI customer service', d: 'Chat and email answers inside Gorgias, Zendesk or HubSpot, for stores that start at the front line.' },
  { h: '/au/shopify-development', t: 'Shopify development', d: 'Shopify and Shopify Plus builds, migrations and B2B, with Xero, MYOB and courier links.' },
  { h: '/au/ecommerce-development', t: 'Ecommerce development', d: 'Platform choice and full store builds for Australian brands before agents come in.' },
  { h: '/au/accounts-payable-automation', t: 'Accounts payable automation', d: 'Supplier bills read into draft Xero or MYOB entries for the finance team to approve.' },
  { h: '/services/ecommerce-ai-agents', t: 'Ecommerce AI agents (US)', d: 'The same service for US stores, with WooCommerce, BigCommerce and Adobe Commerce detail.' },
];

/* ─── JSON-LD. Organization lives sitewide and is referenced by @id only. ─── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Ecommerce AI Agent Development for Australian Online Stores',
      serviceType: 'Ecommerce AI agents: delivery and order questions, returns and refunds, marketplace listings, stock and purchase orders, wholesale order entry, payout reconciliation',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'FactoryJet designs, builds and supports AI agents for established Australian online stores, connected to Shopify, WooCommerce, BigCommerce, Maropost, Xero, MYOB, QuickBooks, Cin7, Unleashed, NetSuite, Odoo, Amazon.com.au, eBay, Kogan, Bunnings Marketplace, THE ICONIC, Afterpay, Zip, Stripe, Australia Post, StarTrack and Sendle, with human approval on refunds, prices and ledger entries. The client owns the code.',
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
      image: 'https://factoryjet.com/images/au/ai-agents/ai-agents-orders.webp',
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
  alternates: { canonical: CANONICAL, languages: { 'en-AU': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'AI agents for Australian online stores and marketplaces: delivery questions, returns, Amazon.com.au and eBay listings, stock and wholesale orders, built into Shopify, Xero, MYOB and Cin7. Demo on your data before you sign.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/images/au/ai-agents/ai-agents-orders.webp', width: 1200, height: 800, alt: 'A customer service team member in an online store back office working through an order inbox an AI agent has already sorted' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'ecommerce-ai-agents';

/* H1 split for the Family A hero emphasis. Same string as H1 (schema headline). */
const H1_EMPHASIS = 'Online Stores and Marketplaces';
const H1_LEAD = H1.slice(0, H1.lastIndexOf(H1_EMPHASIS)).trimEnd();

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

const HERO_ICONS = [
  'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-3 9 2 2 4-4',
  'M5 12l4 4 10-10M4 20h16',
  'm8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14',
] as const;

export default function EcommerceAiAgentsAUPage() {
  return (
    <>
      <script id="ld-au-ecommerce-ai-agents" type="application/ld+json"
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

        {/* ═══ HERO ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">AI for Ecommerce Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                Your store already sells on Shopify or WooCommerce, plus Amazon.com.au, eBay or Kogan. Orders land in
                Xero or MYOB, stock sits in Cin7 or Unleashed, and parcels go out with Australia Post, StarTrack or
                Sendle. We design, build and support AI agents that do the reading and drafting between those systems,
                with a person approving refunds, prices and anything that posts to the books.
              </p>
              <HeroInlineForm
                region="au"
                source="au_ecommerce_ai_agents_hero"
                service="Ecommerce AI Agents"
                submitLabel="See a demo on my data"
                trustText="Working software on your own data before you sign. Founder replies within 24 hours."
              />
            </div>

            <form
              className="specpanel"
              aria-label="What every ecommerce agent build includes"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="What every ecommerce agent build includes: a demo on your own data before you sign, a person approving refunds and price changes, and code that is yours"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · EVERY STORE AGENT</span>
                <span className="sys"><span>STORE</span><span>MARKETPLACES</span></span>
              </div>
              <div className="specpanel-body" role="radiogroup" aria-label="What every build includes">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="ecom-au-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[0]} /></svg></span>
                  <span className="idx">before any contract</span>
                  <span className="title">Demo on your own orders</span>
                  <span className="tag">First</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="ecom-au-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[1]} /></svg></span>
                  <span className="idx">refunds, prices, ledger</span>
                  <span className="title">A person approves</span>
                  <span className="tag">Built in</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="ecom-au-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[2]} /></svg></span>
                  <span className="idx">from day one</span>
                  <span className="title">Code and repository</span>
                  <span className="tag">Yours</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · The agent drafts. Your team decides what reaches customers and the books.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (each figure fetched from its primary source, 29 Oct 2026) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '10 / min', t: 'requests allowed on Australia Post’s Track Items API, with up to 10 tracking IDs each', s: 'Australia Post Developer Centre', u: SRC_AUSPOST },
              { v: 'AU', t: 'Amazon lists Australia as its own Selling Partner API marketplace, in the Far East region', s: 'Amazon SP-API', u: SRC_AMAZON },
              { v: 'Full or part', t: 'Afterpay’s refund call covers both, and is safe to retry when the retry reuses the first requestId and merchantReference', s: 'Afterpay API reference', u: SRC_AFTERPAY },
              { v: '10 Dec 2026', t: 'privacy policies of businesses covered by the Privacy Act must describe the kinds of decisions computer programs make with personal information', s: 'OAIC, APP 1', u: SRC_OAIC_APP1 },
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
          <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
          <div className="upd">Last updated<br />29 October 2026</div>
        </div>

        {/* ═══ ANSWER-FIRST (GEO) ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What does an ecommerce AI agent do for an Australian online store?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">An ecommerce AI agent reads what arrives at your store, looks up the order, stock or
                    tracking in your own systems, and drafts the next step for your team to approve.</span> In an Australian
                    store that usually means delivery questions answered from Australia Post or StarTrack events, returns
                    checked against your policy, Amazon.com.au and eBay listings fixed, and payouts matched in Xero or MYOB.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Who this is for</div>
                    <p>
                      Established brands and retailers with a team behind the store: enough orders that delivery questions,
                      returns and listing fixes take hours every week, more than one sales channel, and a back office in Xero
                      or MYOB plus an inventory system. If your store takes a handful of orders a day, an off-the-shelf app is
                      the better buy, and we will say so.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    Agents usually fail on the limits of the systems around them. Australia Post allows 10
                    tracking requests a minute on its Track Items API, so an agent that looks up tracking live for every
                    question stalls in a sale week. Ours store tracking events as they arrive and answer from that record.
                    Details like this decide whether an agent survives Click Frenzy or falls over on day two.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto" src={null}
                subject="A customer service team member in an online store back office working through an order inbox an AI agent has already sorted">
                <img src="/images/au/ai-agents/ai-agents-orders.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of a team member in an online store back office working through an order inbox that an AI agent has already sorted and drafted" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ EIGHT JOBS → capgrid ═══ */}
        <section className="section capabilities" id="jobs">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">AI agents for ecommerce, by job</div>
              <h2>Eight jobs an AI agent takes off an Australian store team</h2>
              <p className="lead">
                Each one is a job your team already does by hand, between two or more systems, many times a week. We
                build one first, prove it on your numbers, then add the next.
              </p>
            </div>
            <div className="capgrid">
              {AGENT_JOBS.map((j, i) => (
                <div key={j.n} className={`cap cap-${i + 1}`}>
                  <div className="caphead"><span className="capid">JOB‑{j.n}</span><svg {...CAP_ICON}><path d={JOB_ICONS[i]} /></svg></div>
                  <h3>{j.t}</h3>
                  <p>{j.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SYSTEMS → ruled platform rows ═══ */}
        <section className="section platforms" id="systems">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Where the agents plug in</div>
              <h2>Built into the systems Australian stores already run</h2>
              <p className="lead">
                The agent works through each system’s official API or approved connector, using its own key with only the
                access the job needs. You do not change software to use it.
              </p>
            </div>
            <div className="platlist" role="list">
              {SYSTEMS.map((c, i) => (
                <div key={c.t} className="plat plat-2col" role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{c.t}</h3></div>
                  <p className="plat-build">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ MARKETPLACES → facts ═══ */}
        <section className="section facts au-top" id="marketplaces">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Marketplace automation</div>
              <h2>Agents for Amazon.com.au, eBay, Kogan, Bunnings Marketplace and THE ICONIC</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Selling on four channels means four sets of product data rules, four seller inboxes and four places
                  where stock can drift. Most of the lost time goes into rewriting the same product to
                  each channel’s rules and chasing listings that get rejected for a missing attribute.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  The agent starts from one master record for each product, in your store or inventory system, and
                  prepares each channel’s version: title length, required attributes, images, category. Amazon’s Selling
                  Partner API treats Australia as its own marketplace in the Far East region, so Amazon.com.au listings
                  follow that marketplace’s rules rather than a copy of a US listing.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  Some marketplaces only take stock and orders through an approved connector. Where that is the case, the
                  agent works alongside the connector, fixing data before it syncs. Price and promotion changes always wait
                  for a person.
                </p></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">What the agent prepares per channel</div>
                <ul className="trigrows">
                  <li><span className="m">Titles and bullet points to channel rules</span><span className="t">Drafted</span></li>
                  <li><span className="m">Required attributes and categories</span><span className="t">Filled</span></li>
                  <li><span className="m">Rejected listings</span><span className="t">Fixed, resubmitted</span></li>
                  <li><span className="m">Stock across channels</span><span className="t">Kept in step</span></li>
                  <li><span className="m">Price and promotion changes</span><span className="t">Person approves</span></li>
                </ul>
                <p className="au-note">
                  Marketplace region: <a href={SRC_AMAZON} {...extLink}>Amazon SP-API marketplace IDs</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ APPROVAL SPLIT → table ═══ */}
        <section className="section comparison" id="approval">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Human in the loop</div>
              <h2>What the agent does alone, and what waits for a person</h2>
              <p className="lead">
                This is the starting split we propose. You can move a row to automatic once the logs show the agent gets
                it right. Refunds and ledger entries stay with a person by default.
              </p>
            </div>
            <div className="tablewrap" role="region" tabIndex={0} aria-label="Approval split for an ecommerce AI agent">
              <table>
                <thead>
                  <tr>
                    <th>Job</th>
                    <th>Agent does alone</th>
                    <th className="fj">A person approves</th>
                  </tr>
                </thead>
                <tbody>
                  {APPROVAL_ROWS.map((r) => (
                    <tr key={r.job}><th scope="row">{r.job}</th><td>{r.alone}</td><td className="fj">{r.person}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Refunds on Afterpay can be full or partial, and the <a href={SRC_AFTERPAY} {...extLink}>Afterpay refund call</a> is
              safe to retry when the retry reuses the first request’s requestId and merchantReference. We build every refund path around that, so a retry never
              pays twice.
            </p>
          </div>
        </section>

        {/* ═══ PROJECT STEPS → timeline ═══ */}
        <section className="section process" id="how-we-build">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How a project runs</div>
                <h2>From your brief to a live store agent, in seven steps</h2>
                <p className="lead">
                  Open each step to see what happens and what you get. You only sign after step two, and only for one phase.
                </p>
              </div>
              <div className="au-panel">
                <div className="eyebrow">What we need from you</div>
                <ul className="trigrows">
                  <li><span className="m">One hour with the person who owns the job</span><span className="t">Step 1</span></li>
                  <li><span className="m">A sample of last month’s real cases</span><span className="t">Step 2</span></li>
                  <li><span className="m">Read-only access to the systems involved</span><span className="t">Step 2</span></li>
                  <li><span className="m">One decision maker for the approval rules</span><span className="t">Step 3</span></li>
                </ul>
              </div>
            </div>
            <div className="timeline">
              {STEPS.map((s) => {
                const [idx, title] = s.t.split(' · ');
                return (
                  <details key={s.t} className="tnode">
                    <summary>
                      <div className="idx">{idx}</div>
                      <h3>{title}<span className="chev" aria-hidden="true">+</span></h3>
                    </summary>
                    <p>{s.d}</p>
                  </details>
                );
              })}
            </div>
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline={'Which job in your store would an agent take first?'}
            sub={'Send last month’s numbers: delivery questions, returns, rejected listings. The founder will tell you which job pays back first, and show it running on a sample of your own data before you sign anything.'}
            label={'See a demo on my data'}
          />
        </div>

        {/* ═══ BRIEF / RFP ASK → facts ═══ */}
        <section className="section facts" id="brief">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Send us your brief</div>
              <h2>Send your brief or RFP as it is</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  The quickest scopes start from a written brief. One page is enough, and an RFP from your procurement
                  team works too. We reply with questions or a written scope.
                </p></div>
                <div className="fact"><div className="sec">§02</div><div>
                  <div className="factlabel">What helps us quote it right</div>
                  <ul className="chg-list chg-list-1col">
                    <li><span>The job and its weekly volume, such as 600 delivery questions or 120 rejected listings.</span></li>
                    <li><span>Your platform and plan, such as Shopify Plus or WooCommerce.</span></li>
                    <li><span>Back office: Xero or MYOB, Cin7, Unleashed, NetSuite or Odoo.</span></li>
                    <li><span>Channels and couriers: which marketplaces, Australia Post, StarTrack or Sendle.</span></li>
                    <li><span>Who approves what today, and your timeline.</span></li>
                  </ul>
                </div></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Next step</div>
                <p>
                  Attach the brief on the second step of the form, or send it after the call. We quote the build, and any
                  support you choose, as fixed prices in writing.
                </p>
                <ModalCTAButton label="Send my brief" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ HOUSE TERMS → ruled rows ═══ */}
        <section className="section platforms" id="terms">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Terms</div>
              <h2>How we work with Australian stores</h2>
              <p className="lead">
                The same terms on every project, written into the scope before work starts.
              </p>
            </div>
            <div className="platlist" role="list">
              {TERMS.map((c, i) => (
                <div key={c.t} className="plat plat-2col" role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{c.t}</h3></div>
                  <p className="plat-build">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PROOF (platform-matched, not Australian) → ruled rows ═══ */}
        <section className="section platforms" id="work">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Work on the same platforms</div>
              <h2>Store and back-office work on the same platforms</h2>
              <p className="lead">
                None of these is an Australian client. We show them because the platforms match the stack many Australian
                stores run.
              </p>
            </div>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Sow Easy</h3></div><p className="plat-build">WooCommerce trade store reading stock, pricing and SKUs from Odoo (build in progress). <a href="/case-studies/sow-easy-distributor-portal">Read the case study</a>.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Mannik</h3></div><p className="plat-build">WooCommerce store work and an AI search project.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>DTF Virginia</h3></div><p className="plat-build">Shopify store work.</p></div>
            </div>
          </div>
        </section>

        {/* ═══ PRIVACY → facts ═══ */}
        <section className="section facts au-top" id="privacy">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Privacy Act 1988 and OAIC guidance</div>
              <h2>Customer data, AI providers and the 10 December 2026 change</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  A store agent sees names, delivery addresses, phone numbers and order histories. The OAIC says privacy
                  obligations apply to any personal information put into an AI system, and recommends against entering
                  personal or sensitive information into publicly available generative AI tools. So the agent gets only the
                  fields a job needs, through a business AI account with proper data terms, and we tell you where that data
                  is processed before anything is built.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  OAIC guidance also asks that a chatbot facing the public be clearly identified as AI. Shoppers see
                  an AI label and a way to reach a person.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  If your business is covered by the Privacy Act (most businesses under A$3 million turnover are exempt),
                  then from 10 December 2026, under the Privacy and Other Legislation Amendment Act 2024, APP 1 requires
                  privacy policies to describe the kinds of personal information used and the kinds of decisions made by
                  computer programs that could significantly affect a person’s rights or interests. An agent that refuses a refund or blocks an account by itself may be one.
                  We record what each agent decides so your policy can say so. We are not lawyers; your adviser signs off.
                </p></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">In every build</div>
                <ul className="trigrows">
                  <li><span className="m">Fields passed to the AI</span><span className="t">Only what the job needs</span></li>
                  <li><span className="m">AI provider and data location</span><span className="t">Named before build</span></li>
                  <li><span className="m">Chat labelled as AI</span><span className="t">Yes</span></li>
                  <li><span className="m">Decisions the agent makes alone</span><span className="t">Documented</span></li>
                  <li><span className="m">Action log</span><span className="t">Every action</span></li>
                </ul>
                <p className="au-note">
                  Sources: <a href={SRC_OAIC_AI} {...extLink}>OAIC, privacy and commercially available AI</a>; <a href={SRC_OAIC_APP1} {...extLink}>OAIC, APP 1 guidelines</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ COST → split ═══ */}
        <section className="section au-top" id="cost">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What it costs to build</div>
              <h2>Published Australian ranges for building an AI agent</h2>
            </div>
            <div className="au-split">
              <div>
                <p>
                  An ecommerce agent costs more when it covers more sales channels, when it writes to your ERP or accounting
                  system instead of only reading, and when product data has to be cleaned before any channel will accept it.
                  For a starting point, Flowtivity’s March 2026 guide lists customer service automation at A$10,000 to
                  A$25,000, GST not stated. The <a href="/au/ai-agents#cost">AI agents page</a> lists more published ranges.
                </p>
                <p>
                  These are market ranges, not our prices. FactoryJet quotes a fixed price in writing after a short scoping
                  call, one phase at a time.
                </p>
                <ModalCTAButton label="Get a fixed-price scope" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="au-panel">
                <div className="eyebrow">What moves the number</div>
                <ul className="trigrows">
                  <li><span className="m">Systems the agent reads from</span><span className="t">Each one adds work</span></li>
                  <li><span className="m">Systems it writes to</span><span className="t">More testing</span></li>
                  <li><span className="m">Marketplaces in scope</span><span className="t">Per channel</span></li>
                  <li><span className="m">State of your product data</span><span className="t">Clean-up first</span></li>
                  <li><span className="m">Approval steps</span><span className="t">Designed in</span></li>
                </ul>
                <p className="au-note">
                  Source: <a href={SRC_FLOWTIVITY} {...extLink}>Flowtivity (March 2026)</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ RELATED → agentdir ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Related FactoryJet services</div>
              <h2>Around the store agent</h2>
            </div>
            <ul className="agentdir-grid">
              {RELATED.map((s) => (
                <li key={s.h}>
                  <a href={s.h}>
                    <span className="agentdir-t">{s.t}</span>
                    <span className="agentdir-l">{s.d}</span>
                    <span className="agentdir-go" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ FAQ (same FAQ_ITEMS array as the FAQPage JSON-LD) ═══ */}
        <AuFaq
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          heading="Ecommerce AI agent questions Australian stores ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ SOURCES ═══ */}
        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">Sources, checked 29 October 2026</div>
            <div className="refs">
              <a href={SRC_AUSPOST} {...extLink}>Australia Post, Track Items API limits</a>
              <a href={SRC_AFTERPAY} {...extLink}>Afterpay API, create refund</a>
              <a href={SRC_AMAZON} {...extLink}>Amazon SP-API, marketplace IDs</a>
              <a href={SRC_OAIC_AI} {...extLink}>OAIC, privacy and commercially available AI</a>
              <a href={SRC_OAIC_APP1} {...extLink}>OAIC, APP 1 guidelines</a>
              <a href={SRC_FLOWTIVITY} {...extLink}>Flowtivity, AI agent cost in Australia</a>
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>See an agent work on your own orders before you sign</h2>
              <p>
                Send your name and work email, or your brief. The founder replies within 24 hours to book a short call about
                the job, your systems and the first phase.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="See a demo on my data" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/ai-agents">See all AI agent work</a>
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}
