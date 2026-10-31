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
import { twinAlternates } from '@/data/hreflangMap';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';
import '../au-hub.css';

const CANONICAL = 'https://factoryjet.com/au/ai-integration-services';
const UPDATED = '2026-10-31';
const TITLE = 'AI Integration Services Australia | Xero & MYOB | FactoryJet';
const H1 = 'AI Integration Services in Australia: AI Connected to the Systems You Run';
const DESCRIPTION =
  'AI integration services in Australia. We connect AI to Xero, MYOB, NetSuite, Cin7, Unleashed, marketplaces and couriers, and demo it on your own data first.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. Never hand-copy a
   second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'AI Integration Services', url: CANONICAL },
];

/* ─── External sources, each fetched and read 2026-10-29 ─────────────── */
// Xero Developer, Limits FAQ, per connected organisation: "Concurrent Limit: 5 calls in
// progress at one time", "Minute Limit: 60 calls per minute", "Daily Limit: 5000 calls per
// day"; across all tenants "App Minute Limit: 10,000 calls per minute".
const SRC_XERO_LIMITS = 'https://developer.xero.com/faq/limits';
// Xero Developer FAQ, Custom Connections: "it can only be connected to a single organisation";
// "organisations can purchase a Custom Connection for each app"; "Connections created from
// 29 April 2026: these use new granular scopes, which don't include journal access."
const SRC_XERO_FAQ = 'https://developer.xero.com/faq';
// XeroAPI/xero-mcp-server on GitHub: "a Model Context Protocol (MCP) server implementation for
// Xero", MIT licence, Custom Connections or Bearer Token auth, tools such as list-invoices.
const SRC_XERO_MCP = 'https://github.com/XeroAPI/xero-mcp-server';
// MYOB Developer, getting started: "Both AccountRight, Essentials and MYOB Business integrate
// with the API"; "MYOB Business will replace our MYOB Essentials and MYOB AccountRight product
// lines for new customers in Australia"; apps get "an API key, and an API secret" and use OAuth.
const SRC_MYOB_API = 'https://developer.myob.com/api/myob-business-api/api-overview/getting-started/';
// Unleashed API docs: "a subset of the functionality available in the Unleashed application";
// API ID and Key "only available to the account owner".
const SRC_UNLEASHED_API = 'https://apidocs.unleashedsoftware.com/';
// Model Context Protocol docs: "an open-source standard for connecting AI applications to
// external systems"; "Think of MCP like a USB-C port for AI applications."
const SRC_MCP = 'https://modelcontextprotocol.io/docs/getting-started/intro';
// OAIC, guidance on privacy and the use of commercially available AI products (published
// 21 Oct 2024, updated 17 Jan 2025): "Privacy obligations will apply to any personal information
// input into an AI system"; best practice: do not enter personal information into publicly
// available generative AI tools; due diligence "should not amount to a 'set and forget' approach".
const SRC_OAIC_AI =
  'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products';
// OAIC APP guidelines chapter 1, para 1.35: "From 10 December 2026, APP 1.7 requires APP
// entities to include the information outlined in APP 1.8" (computer programs that make
// decisions); footnotes cite the Privacy and Other Legislation Amendment Act 2024 (Cth).
const SRC_OAIC_APP1 =
  'https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-1-app-1-open-and-transparent-management-of-personal-information';
/* Build-only market ranges, fetched and read 2026-10-29. Flowtivity (5 March 2026, AUD):
   "$1,000 to $3,000 per integration as a rough guide"; multi-system workflow automation
   "$20,000 - $50,000+" over 6 to 12 weeks. Web Video Digital (5 August 2026): a custom AI agent
   "between AUD 15,000 and AUD 150,000", most SMB projects "AUD 30,000 to AUD 80,000"; "Every
   system the agent plugs into ... adds build and testing time". Neither says whether GST is
   included. Never add running, retainer or model-usage figures (Bhavesh, 11 Oct 2026). */
const SRC_FLOWTIVITY = 'https://flowtivity.ai/blog/ai-agent-cost-pricing-guide-australia-2026/';
const SRC_WVD = 'https://webvideodigital.com.au/custom-ai-agent-cost-in-australia/';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ───────────────
   Questions shaped by DataForSEO Australia People Also Ask for "ai integration",
   "ai integration services" and "ai integration services australia" (29 Oct 2026),
   plus the system questions Australian briefs name. */
const FAQ_CATEGORIES = [
  { key: 'basics',  label: 'AI integration basics' },
  { key: 'systems', label: 'Xero, MYOB, ERP and channels' },
  { key: 'cost',    label: 'Cost, briefs and process' },
  { key: 'data',    label: 'Privacy, control and ownership' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── Basics ──
  { category: 'basics', question: 'What is the meaning of AI integration?',
    answer: 'AI integration is the wiring between an AI model and the software your business already runs. The AI gets read access to the records it needs, such as orders in Cin7 or invoices in Xero, does one job with them, and writes its result back where your team will see it. Without that wiring, staff copy data into a chat window and paste the answer back by hand.' },
  { category: 'basics', question: 'How is AI integration different from AI development?',
    answer: 'An AI integration specialist starts from your existing stack and adds AI to it. Development can mean building a whole new application, an AI feature inside your own product, or a data platform. Most established businesses get value faster from integration, because the systems and the data are already there. If you need a new app as well, our AI development page covers that work.',
    links: [{ href: '/au/ai-development', label: 'AI development in Australia' }] },
  { category: 'basics', question: 'Which AI is best for integration?',
    answer: 'The model matters less than the connection around it. OpenAI’s GPT models (the ones behind ChatGPT), Claude and Gemini all read invoices, emails and order notes well enough for business work. We choose per job, based on accuracy on your real examples, where the provider can process data, and what your security team will approve. We keep the model behind our own integration code, so it can be swapped later without rebuilding the Xero or ERP side.' },
  { category: 'basics', question: 'Do we have to replace our current software to use AI?',
    answer: 'No. The point of integration is to leave Xero, MYOB, NetSuite or Cin7 where they are and connect AI to them through each vendor’s official API. Your team keeps the same screens. What changes is that draft bills and order matches appear inside those screens instead of being typed. If a system has no API at all, we look at exports or a different first job before suggesting any change.' },
  { category: 'basics', question: 'What is an MCP server, and do we need one?',
    answer: 'MCP, the Model Context Protocol, is an open standard for connecting AI applications to outside systems. Its own documentation compares it to a USB-C port for AI. An MCP server exposes chosen actions, such as listing invoices, to an AI assistant. Xero publishes an open-source MCP server. You need one when staff want to ask an assistant like Claude about live data. Background jobs usually call the API directly.',
    links: [{ href: SRC_MCP, label: 'Model Context Protocol: introduction' }, { href: SRC_XERO_MCP, label: 'Xero MCP server on GitHub' }] },
  { category: 'basics', question: 'What are examples of AI integration?',
    answer: 'Five examples from the jobs on this page. Supplier emails become draft bills in Xero or MYOB. Emailed purchase orders become draft sales orders in NetSuite or Odoo. Afterpay, Zip and Stripe payout reports become proposed matches for your bookkeeper. Marketplace cancellation messages get matched to the order and a reply drafted. Delivery exception emails from Australia Post become customer updates. In each one, a person approves the result.' },
  { category: 'basics', question: 'Which companies offer AI integration services in Australia?',
    answer: 'Four kinds of provider. ERP and accounting partners add AI inside the one product they resell. Automation consultancies build flows in Zapier, Make or n8n. Larger IT firms run AI programs for enterprise stacks. An AI integration company like FactoryJet connects AI across several systems at once, such as Xero, an ERP and your sales channels. Ask each one who owns the code and whether they will demo on your own data first.' },
  { category: 'basics', question: 'Can we build our own AI integration for free?',
    answer: 'You can build a test for little or no software cost. Xero’s MCP server is open source, n8n can be self-hosted, and most AI providers have free tiers. A test on sample data is a sensible way to learn. The cost appears when the integration touches live ledgers and customer records: permissions, logging, approval steps, error handling when an API is busy, and someone accountable when it stops at 2am.' },

  // ── Systems ──
  { category: 'systems', question: 'Can you connect AI to Xero?',
    answer: 'Yes. A Xero integration for one business usually runs on a Xero Custom Connection, which Xero says links to a single organisation and is purchased by that organisation for each app. Connections created from 29 April 2026 use granular scopes (narrow permissions, one per type of data) that do not include journal access, so we design around what those scopes allow. Common jobs are coding supplier bills and matching marketplace payouts to invoices, with a person approving each one.',
    links: [{ href: SRC_XERO_FAQ, label: 'Xero Developer FAQ' }] },
  { category: 'systems', question: 'What limits does the Xero API put on an AI integration?',
    answer: 'Each app connected to a Xero organisation gets 60 calls a minute and 5,000 a day. No more than 5 calls can run at once. Across all organisations using one app, the cap is 10,000 calls a minute. A business pushing several thousand marketplace orders a day into Xero can hit the daily figure. We batch writes, queue work during peaks and summarise orders where your accountant agrees that is acceptable.',
    links: [{ href: SRC_XERO_LIMITS, label: 'Xero API limits' }] },
  { category: 'systems', question: 'We run MYOB AccountRight. Does that change the integration?',
    answer: 'Not much. A MYOB integration works the same way for all three: MYOB says AccountRight, Essentials and MYOB Business all integrate through the same API, and that MYOB Business will replace Essentials and AccountRight for new customers in Australia. Apps register for an API key and secret, then sign in with OAuth, a standard way to grant an app access without sharing your password. We build against the shared API so a later move from AccountRight to MYOB Business does not mean starting again.',
    links: [{ href: SRC_MYOB_API, label: 'MYOB API: getting started' }] },
  { category: 'systems', question: 'Can AI work with NetSuite, Odoo or QuickBooks Online?',
    answer: 'Yes. We connect through the official interface each vendor provides and confirm during discovery what your edition, licence and roles allow, because that differs between accounts. Typical jobs are turning emailed purchase orders into draft sales orders, flagging pricing that breaks a customer agreement, and summarising overdue accounts. We have built a WooCommerce-to-Odoo connection for a distributor, tested against Odoo’s staging system, with the store’s launch still ahead. We are also building QuickBooks connections to Shopify.',
    links: [{ href: '/au/netsuite-ai-agents', label: 'NetSuite AI agents in Australia' }, { href: '/au/sales-order-automation-ai-agents', label: 'Sales order automation' }] },
  { category: 'systems', question: 'Can AI keep Cin7 or Unleashed stock in sync with our sales channels?',
    answer: 'It can help, with care about who is the source of truth. Inventory systems like Cin7 Core and Unleashed should own stock numbers. The AI’s job is the messy edges: reading supplier emails about late stock, drafting purchase orders from reorder points, and flagging listings where stock and price disagree. Unleashed notes that API credentials are only available to the account owner, so that person needs to be in the kick-off.',
    links: [{ href: SRC_UNLEASHED_API, label: 'Unleashed API documentation' }] },
  { category: 'systems', question: 'Can AI handle marketplace orders from Amazon.com.au or Bunnings Marketplace?',
    answer: 'Yes, as the layer that reads and drafts. It is not the system of record (the one system whose numbers count). Each marketplace has its own order format, cancellation rules and customer messages. An AI integration can read those messages, match them to the order in your ERP or Cin7, draft a reply and flag a cancellation for approval. The same pattern covers THE ICONIC, eBay Australia and Kogan. We confirm each marketplace’s seller access during discovery.' },
  { category: 'systems', question: 'Can AI match Afterpay, Zip and Stripe payouts in Xero?',
    answer: 'It can do most of the reading and leave the decision to your bookkeeper. Payout reports from buy now pay later providers and Stripe bundle many orders, fees and refunds into one bank line. The integration reads the report, links each order to its invoice, proposes the fee and refund lines, and leaves a draft match for approval. Nothing is reconciled without a person agreeing to it.' },
  { category: 'systems', question: 'Can an AI integration book Australia Post, StarTrack or Sendle shipments?',
    answer: 'It can prepare them. The safer design is for the AI to read the order and any special instructions, suggest the service and parcel details, and pass that to your existing shipping software or the carrier’s own connection for labels. The AI also reads delivery exception emails and drafts a customer update. Label creation and charges stay with the shipping tool your warehouse already trusts.' },

  // ── Cost & process ──
  { category: 'cost', question: 'How much does AI integration cost in Australia?',
    answer: 'Flowtivity’s March 2026 Australian guide budgets A$1,000 to A$3,000 per integration as a rough guide, and A$20,000 to A$50,000 or more for multi-system workflow automation. For a full custom agent, the range Web Video Digital published in August 2026 runs from A$15,000 to A$150,000. Neither guide says whether GST is included. These are market ranges, not our prices. We quote a fixed price per phase in writing after scoping.',
    links: [{ href: SRC_FLOWTIVITY, label: 'Flowtivity, Australian AI pricing guide (March 2026)' }, { href: SRC_WVD, label: 'Web Video Digital, AI agent cost in Australia (August 2026)' }] },
  { category: 'cost', question: 'How long does an AI integration project take?',
    answer: 'Flowtivity lists 6 to 12 weeks for multi-system workflow automation. A single job in one well-documented system, such as drafting bills in Xero, has fewer connections to build and test. Older ERPs and slow access approvals stretch timelines more than the AI work does. We give a dated plan after discovery, once we have seen your systems.',
    links: [{ href: SRC_FLOWTIVITY, label: 'Flowtivity, Australian AI pricing guide' }] },
  { category: 'cost', question: 'What should we put in a brief or RFP for AI integration?',
    answer: 'Name every system involved, with edition and who administers it. Describe one job in plain steps: where it starts, who touches it and where it ends. Add monthly volumes, ten to twenty real examples with personal details removed, the approval rules you want, and any data residency or security requirements. Say what success looks like as a number you already track. That is enough for a fixed-price quote.' },
  { category: 'cost', question: 'Will you show a working demo before we sign?',
    answer: 'Yes. Before you commit to a build, we connect to a test copy of one system, or to sample data you approve, and show the AI doing your chosen job on your own examples. You see the output, the approval step and the log. That is the fastest way to find out whether the job suits AI, and it gives your finance and IT people something concrete to review.' },
  { category: 'cost', question: 'What happens when Xero, MYOB or a marketplace changes its API?',
    answer: 'Integrations need looking after, because vendors change scopes, switch off old API addresses (endpoints) and adjust limits. Xero’s move to granular scopes for connections created from 29 April 2026 is one recent example. We document every connection, monitor errors, and tell you when a change is coming. Support is optional: each change is quoted and approved before work starts, with no monthly minimum, or your own team can take it over.',
    links: [{ href: SRC_XERO_FAQ, label: 'Xero Developer FAQ' }] },

  // ── Data & ownership ──
  { category: 'data', question: 'Does the Privacy Act apply when AI reads our customer records?',
    answer: 'Yes, for any business the Privacy Act 1988 covers. According to the OAIC, the obligations reach personal information that goes into an AI system as well as AI output that contains it. It also recommends, as best practice, not entering personal information into publicly available AI tools. An integration helps here, because it can pass only the fields a job needs instead of whole records.',
    links: [{ href: SRC_OAIC_AI, label: 'OAIC guidance on commercially available AI products' }] },
  { category: 'data', question: 'Does the December 2026 Privacy Act change affect AI integrations?',
    answer: 'It can. From 10 December 2026, APP 1.7 says a covered business’s privacy policy must explain software that uses personal information to make decisions with a significant effect on a person. The Privacy and Other Legislation Amendment Act 2024 made the change. An integration that helps set credit terms or account holds for a customer may need a mention. Your privacy adviser decides, using our plain list of what each integration decides.',
    links: [{ href: SRC_OAIC_APP1, label: 'OAIC APP guidelines, chapter 1' }] },
  { category: 'data', question: 'Can the AI post transactions into our ledger on its own?',
    answer: 'Only if you decide it should, and we advise against it for anything involving money. Our default is drafts: the AI creates a draft bill, a proposed payout match or a suggested credit note, and a named person approves it. Every write uses its own integration login, so your ledger history shows exactly what the AI did. Low-risk actions such as tagging can move to automatic after a pilot.' },
  { category: 'data', question: 'Who owns the integration code and the AI accounts?',
    answer: 'You do, from the first day. The code sits in your repository, the integration logins belong to your organisation, and the AI and hosting accounts can run in your name at cost, with no markup from us. If you move the work to your own team or another provider, it keeps running. Defects found after launch are fixed inside the build price for a cover period agreed before work starts.' },
];

/* ─── Systems we connect AI to (platlist rows) ─── */
const SYSTEMS: { t: string; d: string; link?: { href: string; label: string } }[] = [
  { t: 'Xero integration', d: 'Draft bills from supplier emails, payout matching for bookkeeper approval, overdue reminders, and month-end summaries. Built on a Custom Connection or an app, within Xero’s per-organisation call limits.',
    link: { href: '/au/shopify-xero-integration', label: 'Shopify and Xero integration' } },
  { t: 'MYOB integration: MYOB Business, AccountRight and Essentials', d: 'Supplier bills, customer statements and job costing notes through the shared MYOB API, designed so a move from AccountRight to MYOB Business does not break the build.' },
  { t: 'QuickBooks Online, NetSuite and Odoo', d: 'Emailed purchase orders turned into draft sales orders, contract pricing checks, credit hold summaries and approval queues inside the ERP your finance team already uses.',
    link: { href: '/au/erp-ai-agents', label: 'AI agents for ERP systems' } },
  { t: 'Cin7 Core, Cin7 Omni and Unleashed', d: 'Supplier delay emails read and matched to purchase orders, reorder drafts from stock rules, and listings flagged where stock and price disagree across channels.' },
  { t: 'Amazon.com.au, eBay, Kogan, Bunnings Marketplace, THE ICONIC', d: 'Customer messages and cancellation requests read, matched to the order in your main order system, and drafted for a person to send.',
    link: { href: '/au/ecommerce-erp-integration', label: 'Ecommerce and ERP integration' } },
  { t: 'Afterpay, Zip and Stripe', d: 'Settlement reports split into orders, fees and refunds, then proposed as matches in Xero or MYOB for approval.',
    link: { href: '/au/accounts-receivable-automation', label: 'Accounts receivable automation' } },
  { t: 'Australia Post, StarTrack and Sendle', d: 'Service and parcel details suggested from the order, passed to your shipping software, and delivery exception emails turned into drafted customer updates.' },
  { t: 'HubSpot, Salesforce, Zendesk and Microsoft 365', d: 'Account history summarised before a call, enquiries sorted into the right queue, and policy answers found in SharePoint with the source shown.' },
];

/* ─── Integration patterns (capgrid, four cards) ─── */
const PATTERNS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Direct API job', d: 'A background service reads from one system, asks the AI to do one task, and writes a draft back. Best for high-volume work such as bills or order emails, because it can queue work under each rate limit (the most calls a system accepts per minute).' },
  { n: '02', t: 'MCP server for staff', d: 'Staff ask an assistant such as Claude about live data: which invoices are overdue for a customer, what a supplier last quoted. The server exposes only the actions you approve, read-only by default.' },
  { n: '03', t: 'Workflow tool in the middle', d: 'n8n, Make or Power Automate handles triggers and simple routing, and calls AI only for the step that needs reading or judgement. Good when your team wants to adjust the flow without a developer.' },
  { n: '04', t: 'Exports where there is no API', d: 'Some older systems only offer scheduled file exports. We read those safely, keep the AI out of the write path, and record the gap so it can be closed if the system is upgraded.' },
];

/* ─── Project steps (rendered as <details> expanders) ─── */
const STEPS: { n: string; t: string; d: string; out: string }[] = [
  { n: '01', t: 'Read your brief and map the systems',
    d: 'We read your brief or RFP, then list every system involved with its edition, owner, API access and test environment. Any missing access is found at this step, before the build starts.',
    out: 'A system map and a list of the access approvals your team needs to request.' },
  { n: '02', t: 'Pick one job and agree the number',
    d: 'We choose the first job by value and risk, then agree one measure you already track, such as bills keyed per week or hours spent on payout matching, and record today’s figure.',
    out: 'A written scope for phase one with a fixed price.' },
  { n: '03', t: 'Demo on your data before you sign the build',
    d: 'Using a test copy of one system or sample records you approve, we show the AI doing the job on your real examples, including the approval step and the log.',
    out: 'A working demo your finance and IT people can question.' },
  { n: '04', t: 'Design permissions and approvals',
    d: 'Each integration gets its own login with only the scopes the job needs. We write down what the AI may draft, what needs approval and what it can never touch, and check which personal information it will see.',
    out: 'A permissions and approval sheet, plus privacy notes for your adviser.' },
  { n: '05', t: 'Build to each vendor’s published limits',
    d: 'We build the connectors with queues, retries and batching sized to each vendor’s published limits, and keep the AI model behind our own code so it can be changed later.',
    out: 'Connectors running in a test environment, in your repository.' },
  { n: '06', t: 'Test on past cases, then pilot with people checking',
    d: 'The integration runs over dozens of past records, including the odd ones. Then it handles live work while a person reviews every draft for an agreed period.',
    out: 'A test and pilot report against the number agreed in step two.' },
  { n: '07', t: 'Go live, hand over and stay available',
    d: 'We switch on monitoring, hand over documentation and access, and fix defects inside the build price for the agreed cover period. Further support is optional and quoted per change.',
    out: 'A live integration you own, with the people who built it on call.' },
];

/* ─── JSON-LD ──────────────────────────────────────────────────────
   The Organization is defined sitewide (src/data/organization.ts). This page
   references it only by @id and never redefines it. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'AI Integration Services Australia',
      serviceType: 'AI integration services, AI system integration and MCP server development',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'AI integration services for established Australian businesses: connecting AI models to Xero, MYOB, QuickBooks Online, NetSuite, Odoo, Cin7, Unleashed, Australian marketplaces, payment providers and couriers through official APIs and MCP servers, with human approval on anything involving money. Demo on your data before you sign; the client owns the code.',
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
  alternates: { canonical: CANONICAL, languages: twinAlternates['ai-integration-services'] },
  openGraph: {
    title: TITLE,
    description:
      'AI connected to Xero, MYOB, NetSuite, Cin7, Unleashed, Australian marketplaces and couriers, with approval on anything involving money. Demo on your data before you sign. You own the code.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'ai-integration-services';

/* H1 split for the Family A hero emphasis. Same string as H1 (schema headline). */
const H1_SPLIT = H1.indexOf(': ');
const H1_LEAD = H1.slice(0, H1_SPLIT + 1);
const H1_EMPHASIS = H1.slice(H1_SPLIT + 2);

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

/* Hero spec panel icons (same order as the three spec rows). */
const HERO_ICONS = [
  'M9 15 15 9M8 11l-2 2a4 4 0 0 0 6 6l2-2M16 13l2-2a4 4 0 0 0-6-6l-2 2',
  'M5 12l4 4 10-10M4 20h16',
  'm8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14',
] as const;

/* Icons for the four pattern cards (same order as PATTERNS). */
const PATTERN_ICONS = [
  'M4 12h4l3-7 3 14 3-7h3',
  'M4 5h16v10H4zM8 19h8M12 15v4',
  'M5 6h4v4H5zM15 14h4v4h-4zM9 8h3a2 2 0 0 1 2 2v4',
  'M6 3h9l4 4v14H6zM14 3v5h5M9 13h6M9 17h4',
] as const;

/* Related AU pages (agentdir). Every route checked on disk 2026-10-29. */
const RELATED: { h: string; t: string; d: string }[] = [
  { h: '/au/ai-development', t: 'AI development', d: 'New AI apps, AI inside your product and document search over your own files.' },
  { h: '/au/ai-agents', t: 'AI agents and automation', d: 'Agents that take actions across several tools within rules you set.' },
  { h: '/au/accounts-payable-automation', t: 'Accounts payable automation', d: 'Supplier invoices read, checked and drafted as bills in Xero or MYOB.' },
  { h: '/au/ai-consulting', t: 'AI consulting', d: 'Not sure which job to integrate first? Start with a ranked list of use cases.' },
  { h: '/au/ecommerce-erp-integration', t: 'Ecommerce and ERP integration', d: 'Store, marketplace and ERP orders, stock and prices kept in sync without re-keying.' },
  { h: '/au/ecommerce-development', t: 'Ecommerce development', d: 'Stores, B2B portals and the order flows an integration plugs into.' },
  { h: '/services/ai-integration-services', t: 'AI integration services (US)', d: 'The same service for US businesses on QuickBooks, Salesforce and HubSpot.' },
];

export default function AiIntegrationServicesAUPage() {
  return (
    <>
      <script id="ld-au-ai-integration-services" type="application/ld+json"
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

        {/* ═══ HERO (copy + inline form left, spec panel right) ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">AI Integration Services Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                Your business already runs on Xero or MYOB, an ERP such as NetSuite or Odoo, stock in Cin7 or
                Unleashed, and orders from your own store and marketplaces like Amazon.com.au and Bunnings
                Marketplace. We connect AI to those systems so draft bills and payout matches appear where your team
                works. People approve anything involving money, and you own the code.
              </p>
              <HeroInlineForm
                region="au"
                source="au_ai_integration_services_hero"
                submitLabel="See a demo on my data"
                trustText="Working software on your own data before you sign. Founder replies within 24 hours."
              />
            </div>

            <form
              className="specpanel"
              aria-label="What every AI integration from FactoryJet includes"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="What every AI integration includes: official API connections with their own logins, drafts that a person approves before anything posts, and code that the client owns"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · EVERY INTEGRATION</span>
                <span className="sys"><span>XERO</span><span>MYOB</span><span>ERP</span></span>
              </div>
              <div className="workflow-controls">
                <label className="workflow-toggle" title="Pause or resume the animation">
                  <input type="checkbox" className="workflow-pause" aria-label="Pause animation" />
                  <svg className="pause-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="M5 3v10M11 3v10" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                  <svg className="play-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="m5 3 8 5-8 5Z" fill="currentColor" /></svg>
                </label>
                <button type="reset" className="workflow-replay" aria-label="Replay animation" title="Replay animation">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6a5 5 0 1 1 0 4M3 2v4h4" /></svg>
                </button>
              </div>
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what every integration includes">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="integration-au-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[0]} /></svg></span>
                  <span className="idx">own login, only the access it needs</span>
                  <span className="title">Official API connections</span>
                  <span className="tag">Per system</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="integration-au-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[1]} /></svg></span>
                  <span className="idx">bills, matches, credit notes</span>
                  <span className="title">Drafts a person approves</span>
                  <span className="tag">Default</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="integration-au-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[2]} /></svg></span>
                  <span className="idx">in your repository from day one</span>
                  <span className="title">Connectors, prompts and docs</span>
                  <span className="tag">Yours</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · Nothing posts to your ledger until a named person approves it.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (verified only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '60', t: 'Xero API calls a minute per connected organisation, with 5,000 a day', s: 'Xero Developer', u: SRC_XERO_LIMITS },
              { v: '29 Apr 2026', t: 'new Xero Custom Connections switched to granular scopes without journal access', s: 'Xero Developer FAQ', u: SRC_XERO_FAQ },
              { v: '1 API', t: 'shared by MYOB AccountRight, Essentials and MYOB Business', s: 'MYOB Developer', u: SRC_MYOB_API },
              { v: '10 Dec 2026', t: 'privacy policies must start describing computer programs that make significant decisions', s: 'OAIC, APP 1', u: SRC_OAIC_APP1 },
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
          <div className="who"><b><a href="/about">Bhavesh Barot</a></b>, Founder<br /><span>500+ businesses served since 2014</span></div>
          <div className="upd">Last updated<br />31 October 2026</div>
        </div>

        {/* ═══ ANSWER-FIRST (GEO) → Family A facts ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What do AI integration services do for an established Australian business?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">AI integration services connect an AI model to the accounting, ERP, inventory
                    and sales systems a business already runs, so the AI reads real records and leaves its work inside those
                    systems for a person to approve.</span> For most Australian firms that means Xero or MYOB at the centre,
                    with an ERP, an inventory tool and several sales channels around it.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Who this page is for</div>
                    <p>
                      Wholesalers, distributors, multi-channel retailers and service firms with a finance team, several
                      connected systems and the same data being typed twice every day. If your team re-keys emailed
                      purchase orders into NetSuite, or spends Monday matching Afterpay payouts in Xero, the job is
                      already defined.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    Most of the build time goes into the access rules, limits and product changes on each system.
                    Xero caps each app connected to an organisation at 60 API calls a minute. MYOB is moving new Australian customers to MYOB
                    Business. A build that ignores either one works in the demo and fails in the first busy week.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" src="/images/au/visual-pass-2026-10-03/ai-agents/platforms-1200.webp" srcSet="/images/au/visual-pass-2026-10-03/ai-agents/platforms-640.webp 640w, /images/au/visual-pass-2026-10-03/ai-agents/platforms-1200.webp 1200w" sizes="(max-width: 820px) calc(100vw - 40px), (max-width: 1080px) 40vw, 480px" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="A bookkeeper comparing a paper supplier invoice with the draft bill an AI integration prepared in the accounting system"
                imageAlt="A bookkeeper compares a paper supplier invoice with the draft bill an AI integration prepared on his second monitor"
                caption="The integration prepares the draft bill. The bookkeeper checks it and approves. Nothing posts on its own." />
            </div>
          </div>
        </section>

        {/* ═══ SYSTEMS → head + ruled platform rows ═══ */}
        <section className="section platforms" id="systems">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Where we connect AI</div>
                <h2>The Australian systems we connect AI to, and the job it does in each</h2>
              </div>
              <p>
                These are the systems that come up in Australian briefs. In each one the AI drafts, reads or matches.
                The system itself stays the record of truth, and your team keeps the final say.
              </p>
            </div>
            <ul className="platlist" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {SYSTEMS.map((c, i) => (
                <li key={c.t} className="plat plat-2col">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{c.t}</h3></div>
                  <p className="plat-build">
                    {c.d}
                    {c.link ? <>{' '}See <a href={c.link.href}>{c.link.label}</a>.</> : null}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ PATTERNS → capgrid (four cards) ═══ */}
        <section className="section capabilities" id="patterns">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">How the connection is built</div>
              <h2>Four ways to connect AI to a business system</h2>
              <p className="lead">
                The right pattern depends on volume, who uses it and whether the system has an API. Most projects use
                two of these together.
              </p>
            </div>
            <div className="capgrid">
              {PATTERNS.map((p, i) => (
                <div key={p.n} className={`cap cap-${i + 1}`}>
                  <div className="caphead"><span className="capid">CAP‑{p.n}</span><svg {...CAP_ICON}><path d={PATTERN_ICONS[i]} /></svg></div>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </div>
              ))}
            </div>
            <p className="au-note">
              MCP is the <a href={SRC_MCP} {...extLink}>Model Context Protocol</a>, an open standard for connecting AI
              applications to outside systems. Xero publishes an <a href={SRC_XERO_MCP} {...extLink}>open-source MCP server</a>.
            </p>
          </div>
        </section>

        {/* ═══ WHERE INTEGRATIONS BREAK → facts with trigrows ═══ */}
        <section className="section facts au-top" id="limits">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What the demo hides</div>
              <h2>Where AI integrations break in Australian stacks, and how we plan for it</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Xero allows each connected organisation 60 calls a minute and 5,000 a day, with at most 5 running together.
                  A distributor syncing marketplace orders, payouts and stock adjustments can pass 5,000 calls in a
                  single sale day. The sum is short: if each order needs 3 calls (create the invoice, apply the
                  payment, update the contact), 1,700 orders use 5,100 calls and pass the daily cap. We size queues and
                  batches to those numbers before writing the first connector.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  Xero Custom Connections link to a single organisation and are bought by that organisation per app.
                  Connections created from 29 April 2026 use granular scopes that do not include journal access. A
                  design that relies on reading the general ledger journals has to change, so we check scopes in discovery.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <p>
                    MYOB says MYOB Business will replace Essentials and AccountRight for new customers in Australia, and
                    all three share one API. We build to that shared API so an upgrade does not mean a rebuild.
                    Unleashed issues API credentials only to the account owner, which decides who must attend kick-off.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_XERO_LIMITS} {...extLink}>Xero API limits</a>;{' '}
                    <a href={SRC_XERO_FAQ} {...extLink}>Xero Developer FAQ</a>;{' '}
                    <a href={SRC_MYOB_API} {...extLink}>MYOB API getting started</a>;{' '}
                    <a href={SRC_UNLEASHED_API} {...extLink}>Unleashed API documentation</a>.
                  </p>
                </div></div>
                <div className="fact"><div className="sec">§04</div><div>
                  <div className="factlabel">A typical approval split</div>
                  <ul className="trigrows">
                    <li><span className="m">Reading and tagging records</span><span className="n">orders, emails, reports</span><span className="t">Automatic</span></li>
                    <li><span className="m">Draft bills and sales orders</span><span className="n">Xero, MYOB, NetSuite, Odoo</span><span className="t">Draft only</span></li>
                    <li><span className="m">Payout and refund matches</span><span className="n">Afterpay, Zip, Stripe</span><span className="t">Approve</span></li>
                    <li><span className="m">Credit notes, price changes</span><span className="n">anything that moves money</span><span className="t">Always approve</span></li>
                    <li><span className="m">Deleting records, journals</span><span className="n">outside the integration</span><span className="t">Never</span></li>
                  </ul>
                </div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PROJECT STEPS → process timeline ═══ */}
        <section className="section process" id="how-we-work">
          <div className="wrap">
            <div className="section-head head-stack">
              <div className="eyebrow">How a project runs</div>
              <h2>AI integration in seven steps, from your brief to a live connection</h2>
              <p className="lead">
                Click a step for the detail and the deliverable. Each phase is scoped, priced and signed on its own, so
                you can pause or walk away between phases.
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
            headline={'Which system does your team re-key data into every day?'}
            sub={'Tell us the job and the systems involved. The founder will reply within 24 hours and tell you whether AI suits it, which pattern fits, and what a demo on your own data would involve.'}
            label={'See a demo on my data'}
          />
        </div>

        {/* ═══ HOUSE TERMS → ruled rows ═══ */}
        <section className="section platforms" id="terms">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Terms</div>
                <h2>What are the terms for an AI integration project?</h2>
              </div>
              <p>
                The same terms apply to every AI integration we build for Australian businesses, whatever the size of
                the first phase.
              </p>
            </div>
            <ul className="platlist" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li className="plat plat-2col"><span className="capid">01</span><div className="plat-name"><h3>Demo before you sign</h3></div><p className="plat-build">You see working software on your own data, or sample data you approve, before you commit to a build.</p></li>
              <li className="plat plat-2col"><span className="capid">02</span><div className="plat-name"><h3>Fixed price per phase</h3></div><p className="plat-build">Each phase is a fixed price, quoted in writing and signed on its own. Changes are quoted and approved per request, and there is no monthly minimum.</p></li>
              <li className="plat plat-2col"><span className="capid">03</span><div className="plat-name"><h3>You own the code</h3></div><p className="plat-build">Connectors, prompts and documentation sit in your repository from day one. AI and hosting can run in your own accounts at cost, with no markup.</p></li>
              <li className="plat plat-2col"><span className="capid">04</span><div className="plat-name"><h3>Defect cover in the build price</h3></div><p className="plat-build">Defects found after launch are fixed inside the build price for a cover period agreed before work starts.</p></li>
              <li className="plat plat-2col"><span className="capid">05</span><div className="plat-name"><h3>Support is optional</h3></div><p className="plat-build">Each change is quoted and approved before work starts, with no monthly minimum. We can keep managing the servers and APIs if you want that.</p></li>
            </ul>
          </div>
        </section>

        {/* ═══ BRIEF / RFP ASK → list + panel ═══ */}
        <section className="section au-top" id="brief">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Send us your brief</div>
              <h2>What to put in an AI integration brief or RFP</h2>
              <p className="lead">
                A one-page brief gets you a fixed-price quote faster than a long call. If you already have an RFP, send
                it as it is. After you submit your name and email, the next step lets you attach a PDF or Word file up
                to 5 MB.
              </p>
            </div>
            <div className="au-split">
              <div>
                <ol className="au-numlist">
                  <li><span><b>The systems.</b> Each one by name and edition, for example Xero, NetSuite, Cin7 Core, with who administers it.</span></li>
                  <li><span><b>One job, in steps.</b> Where it starts, who touches it, and where it ends today.</span></li>
                  <li><span><b>Volumes.</b> Orders, bills or messages a month, and the busiest week of the year.</span></li>
                  <li><span><b>Real examples.</b> Ten to twenty past cases with personal details removed, including the awkward ones.</span></li>
                  <li><span><b>Rules.</b> What must always be approved, and any data residency or security requirements.</span></li>
                  <li><span><b>The number.</b> One measure you already track that should move.</span></li>
                </ol>
                <ModalCTAButton label="Send my brief" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="au-panel">
                <div className="eyebrow">What moves the scope</div>
                <ul className="trigrows">
                  <li><span className="m">Number of systems connected: each one adds a connector to build and test</span><span className="t">Reach</span></li>
                  <li><span className="m">Test environments available: without one, testing waits for sample data you approve</span><span className="t">Speed</span></li>
                  <li><span className="m">Older systems without an API: the build reads file exports instead</span><span className="t">Effort</span></li>
                  <li><span className="m">Approval and logging rules: each approval step is a screen to design</span><span className="t">Control</span></li>
                  <li><span className="m">Personal or health information: fields are removed before the AI sees them</span><span className="t">Privacy</span></li>
                  <li><span className="m">Support after launch: quoted per change, with no monthly minimum</span><span className="t">Optional</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ COST (market ranges only) → prose ═══ */}
        <section className="section au-top" id="cost">
          <div className="wrap au-split">
            <div className="au-prose">
              <div className="eyebrow">Market ranges, not our prices</div>
              <h2>How much do AI integration services cost in Australia?</h2>
              <p>
                <a href={SRC_FLOWTIVITY} {...extLink}>Flowtivity&rsquo;s March 2026 Australian guide</a> budgets
                A$1,000 to A$3,000 per integration as a rough guide, and A$20,000 to A$50,000 or more for multi-system
                workflow automation over 6 to 12 weeks.{' '}
                For a full custom agent, <a href={SRC_WVD} {...extLink}>Web Video Digital&rsquo;s August 2026 guide</a> gives
                A$15,000 to A$150,000, says most projects for smaller and mid-sized firms fall between A$30,000 and
                A$80,000, and points out that each system the agent plugs into adds build and testing time.
              </p>
              <p>
                Neither guide says whether its figures include GST, so ask any supplier, including us, to state it on
                the quote. FactoryJet quotes each phase as a fixed price in writing after scoping.
              </p>
            </div>
            <div className="au-panel">
              <div className="eyebrow">Work we can show</div>
              <ul className="trigrows">
                <li><span className="m">Sow Easy: WooCommerce and Odoo integration (launch ahead)</span><span className="t">Odoo</span></li>
                <li><span className="m">HubSpot integrations delivered</span><span className="t">CRM</span></li>
                <li><span className="m">Salesforce integrations delivered</span><span className="t">CRM</span></li>
                <li><span className="m">Shopify to QuickBooks Online and Enterprise (in progress)</span><span className="t">Accounting</span></li>
              </ul>
              <p className="au-note">
                Read the <a href="/case-studies/sow-easy-distributor-portal">Sow Easy case study</a>. The QuickBooks
                clients are not named.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ COMPARISON TABLE ═══ */}
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head head-stack">
              <div className="eyebrow">Side by side</div>
              <h2>An off-the-shelf app vs a workflow tool vs your ERP partner vs FactoryJet</h2>
              <p className="lead">
                Each option suits a different job. If an app in the Xero or MYOB marketplace already does yours, use it.
              </p>
            </div>
            <p className="md:hidden au-note" style={{ marginBottom: 8 }}>Swipe sideways to see every column.</p>
            <div className="tablewrap" tabIndex={0} role="region" aria-label="Scrollable comparison table" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table style={{ minWidth: 760 }}>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">FactoryJet</th>
                    <th>Off-the-shelf app</th>
                    <th>Workflow tool such as Zapier or Make (DIY)</th>
                    <th>ERP partner</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Best fit</th><td className="fj">One job across several systems</td><td>A common job in one system</td><td>Simple links between two apps</td><td>Changes inside the ERP itself</td></tr>
                  <tr><th scope="row">Works across Xero, ERP and channels</th><td className="fj">Yes, designed for it</td><td>Usually one or two</td><td>If connectors exist</td><td>Mostly their own product</td></tr>
                  <tr><th scope="row">Planned around API limits</th><td className="fj">Before the build</td><td>Vendor handles it</td><td>On you</td><td>Inside their own ERP; ask about other systems</td></tr>
                  <tr><th scope="row">Approval steps on money</th><td className="fj">Every build</td><td>Depends on the app</td><td>If you add them</td><td>Ask for them in the scope</td></tr>
                  <tr><th scope="row">Demo on your data first</th><td className="fj">Yes</td><td>Often a trial</td><td>You build it</td><td>Ask for one on your data</td></tr>
                  <tr><th scope="row">Who owns it</th><td className="fj">You: code and logins</td><td>Licensed to you</td><td>You, inside the tool</td><td>Set by the partner contract; ask who holds the code</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ PRIVACY → facts ═══ */}
        <section className="section facts" id="privacy">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Privacy Act and OAIC guidance</div>
              <h2>Australian privacy rules decide which fields the AI sees</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Under OAIC guidance, privacy duties follow personal information into any AI system it enters. An
                  integration is the right place to act on that: it can send the AI an order number and a product line
                  without the customer’s name, address or phone number when the job does not need them.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  The OAIC also recommends, as best practice, not entering personal information into publicly available
                  AI tools, and says due diligence on AI products should not be set and forget. We use business AI
                  terms, log each call and review what the integration sends as your systems change.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <p>
                    The Privacy and Other Legislation Amendment Act 2024 added APP 1.7. From 10 December 2026, covered
                    businesses must describe in their privacy policy any software that uses personal information to
                    make decisions with a significant effect on people. We keep a written record of what each
                    integration decides for that policy. We are not lawyers, so your adviser signs it off.
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

        {/* ═══ RELATED → agentdir ═══ */}
        <section className="section agentdir" id="related">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Related services</div>
              <h2>Which related AI and ecommerce services do Australian businesses use?</h2>
            </div>
            <div className="agentdir-group">
              <div className="agentdir-label">
                <h3>AI and ecommerce services</h3>
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
          heading="AI integration questions Australian businesses ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ SOURCES → references ═══ */}
        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">Sources</div>
            <div className="refs">
              <a href={SRC_XERO_LIMITS} {...extLink}>Xero API limits</a>
              <a href={SRC_XERO_FAQ} {...extLink}>Xero Developer FAQ</a>
              <a href={SRC_XERO_MCP} {...extLink}>Xero MCP server</a>
              <a href={SRC_MYOB_API} {...extLink}>MYOB API getting started</a>
              <a href={SRC_UNLEASHED_API} {...extLink}>Unleashed API documentation</a>
              <a href={SRC_MCP} {...extLink}>Model Context Protocol</a>
              <a href={SRC_OAIC_AI} {...extLink}>OAIC, AI products guidance</a>
              <a href={SRC_OAIC_APP1} {...extLink}>OAIC, APP 1 guidelines</a>
              <a href={SRC_FLOWTIVITY} {...extLink}>Flowtivity, AI pricing guide</a>
              <a href={SRC_WVD} {...extLink}>Web Video Digital, AI agent cost</a>
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA (light) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>See AI working inside your own systems before you sign anything</h2>
              <p>
                Send your name and work email, then attach your brief if you have one. Within 24 hours the founder
                writes back to set up a call on your systems and the first job worth connecting. No spam, no obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="See a demo on my data" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/ai-development">See AI development</a>
            </div>
          </div>
        </section>

      </main>
      </div>

      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}
