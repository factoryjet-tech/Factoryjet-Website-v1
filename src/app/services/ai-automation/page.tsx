import type { Metadata } from 'next';
import Link from 'next/link';

import { twinAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import StickyCtaLabel from '@/components/v2/StickyCtaLabel';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/ai-automation

   Rebuilt 2026-10-16 for operations buyers. Refreshed 2026-11-16 for the US
   keyword "ai automation agency" (4,400 US searches a month, KD 19, DataForSEO
   16 Nov 2026). Secondary terms woven in: ai automation services (720), ai
   automation company (390), business automation services (390), ai workflow
   automation (1,000), ai automation consulting (590), ai integration services
   (590), business process automation services (210), ai automation solutions
   (210). The page sat at positions 58 to 65 for these.

   What the US top 10 covered that this page did not (SERP pulled 16 Nov 2026):
   a plain list of the services an agency sells, an agency vs DIY vs freelancer
   comparison, project timelines, a how-to-choose checklist with red flags, and
   PAA answers ("Is an AI automation agency worth it?", "Can I do AI automation
   for free?", "How much does it cost to automate a business?", an example of
   business process automation). Those sections and FAQs were added.

   Sources (all fetched 16 Nov 2026):
   - Layer3 Labs, AI automation agency cost (updated 2 Jul 2026): project and
     retainer ranges, plus build timelines (2 to 4 weeks, 6 to 12 weeks,
     3 to 6 months).
   - Cofounderbase, AI automation agency cost (data updated 14 Nov 2026):
     median published starting price $2,500 across 99 of 1,002 agencies.
   - US Census Bureau, "AI use in businesses" story (26 May 2026): 17% to 20%
     of US businesses used AI; 37% of firms with 250+ employees.
   - Layer3 Labs, AI consulting rates and pricing (updated 15 Nov 2026): hourly
     rates and discovery / first workflow / enterprise ranges.
   - Zapier pricing page: free plan, 100 tasks a month.
   - n8n docs, compare editions: free self-hosted Community edition.
   - European Commission AI Act page (read 29 Oct 2026): Article 50 dates.
   No FactoryJet prices, no running-cost figures, no team location.

   Schema: WebPage + Service + FAQPage (from FAQ_ITEMS, the array <FAQ>
   renders) + BreadcrumbList (from BREADCRUMB_ITEMS).
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/ai-automation';
const PAGE_TITLE = 'AI Automation Agency & Services for US Teams | FactoryJet';
const PAGE_DESC =
  'AI automation agency for US businesses. We build n8n, Make and Zapier workflows that move orders, invoices and leads between tools. Demo on your data first.';
const PAGE_MODIFIED = '2026-11-16';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const LAYER3_URL = 'https://www.layer3labs.io/roi/ai-automation-agency-cost';
const LAYER3_RATES_URL = 'https://www.layer3labs.io/guides/ai-consulting-rates-pricing';
const COFOUNDERBASE_URL = 'https://cofounderbase.com/hire/ai-automation-agency-cost/';
const CENSUS_URL = 'https://www.census.gov/library/stories/2026/05/ai-use-businesses.html';

/* ── Typical market timelines (Layer3 Labs, updated 2 Jul 2026). ────────── */
const TIMELINES = [
  { scope: 'One workflow, one or two integrations', time: '2 to 4 weeks' },
  { scope: 'Three to six connected workflows across a department', time: '6 to 12 weeks' },
  { scope: 'A whole business function automated', time: '3 to 6 months' },
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: CANONICAL_URL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet: AI Automation Agency USA' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: CANONICAL_URL,
    languages: twinAlternates['ai-automation'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Automation', url: CANONICAL_URL },
];

/* ── What an AI automation agency sells. Numbered list for AI extraction. ── */
const SERVICES = [
  {
    title: 'Workflow automation',
    body: 'Rules that move records between your tools when something happens: a new order, a signed quote, a form fill. Built in n8n, Make or Zapier. When a language model is wired into the flow, this is what most firms sell as AI integration services.',
    example: 'A paid Shopify order creates the invoice in QuickBooks and tells the warehouse in Slack.',
  },
  {
    title: 'Document processing',
    body: 'AI reads invoices, purchase orders, forms and scans, pulls out the fields and checks them against your records before anything posts.',
    example: 'Vendor invoices matched to purchase orders and queued for approval.',
  },
  {
    title: 'AI agents for judgment steps',
    body: 'For steps where someone has to read, decide and act. The agent works inside limits you set and hands anything unclear to a person.',
    example: 'An emailed order in an odd format turned into a draft sales order in NetSuite.',
  },
  {
    title: 'Lead and support response',
    body: 'Enquiries from forms, email and chat sorted, routed and answered from your own data, with a person taking over when it matters.',
    example: 'A new web lead lands in HubSpot with its source and gets a first reply in minutes.',
  },
  {
    title: 'Data sync and reporting',
    body: 'Numbers from accounting, ads, sales and ops tools pulled into one place on a fixed day, with gaps flagged instead of hidden.',
    example: 'A month-end report built from QuickBooks, Shopify and Google Ads on the first working day.',
  },
  {
    title: 'Automation audit and consulting',
    body: 'AI automation consulting before anything is built: how work moves today, which tasks are worth automating first, and which ones do not need AI at all.',
    example: 'A ranked list of five workflows, each with the tools it touches and how often it runs.',
  },
];

/* ── The six back-office chains we automate most (use cases). ──────────── */
const WORKFLOWS = [
  { title: 'Order to delivery', body: 'Shopify or marketplace orders sync to inventory, shipping labels and customer updates without anyone copying order numbers between tabs.', href: '/services/sales-order-automation-ai-agents' },
  { title: 'Quote to cash', body: 'A signed quote becomes an invoice in QuickBooks or Xero, payment reminders go out on schedule, and paid invoices close the deal in your CRM.', href: '/services/shopify-quickbooks-integration' },
  { title: 'Invoice intake', body: 'Vendor invoices read, matched against purchase orders and receipts, coded and queued for approval in your accounting system.', href: '/services/accounts-payable-automation' },
  { title: 'Lead to customer', body: 'Web forms, calls and marketplace enquiries land in HubSpot or Salesforce with the source attached, get routed to the right person, and get a first reply in minutes.', href: '/services/ai-customer-support-agents' },
  { title: 'Document intake', body: 'Purchase orders, forms and scans read, checked against your records and filed, with anything unclear sent to a person to approve.', href: '/services/document-intake-ai-agents' },
  { title: 'Month-end reporting', body: 'Numbers from your accounting, ad and sales tools pulled into one report on the same day every month, with the gaps flagged instead of hidden.', href: '/services/ai-development' },
];

const TOOLS = ['n8n', 'Make', 'Zapier', 'HubSpot', 'Salesforce', 'Shopify', 'QuickBooks', 'Xero', 'NetSuite', 'Zendesk', 'Gorgias', 'Slack', 'Google Drive', 'Airtable'];

/* ── Who should build it. Agency vs DIY vs freelancer vs in-house. ──────── */
const OPTIONS_COLS = ['DIY in Zapier or Make', 'Freelancer', 'AI automation agency', 'In-house hire'] as const;
const OPTIONS_ROWS: ReadonlyArray<{ label: string; cells: readonly [string, string, string, string] }> = [
  {
    label: 'Best for',
    cells: [
      'One simple trigger between two apps',
      'A single, well-defined workflow',
      'Workflows that cross several systems or read documents',
      'A steady pipeline of automation work for years',
    ],
  },
  {
    label: 'Who fixes it when an app changes',
    cells: ['You', 'The freelancer, if still available', 'The agency, under a support agreement', 'Your employee'],
  },
  {
    label: 'Documentation',
    cells: ['Usually none', 'Varies', 'Should be part of the deliverable', 'Depends on the person'],
  },
  {
    label: 'Market rate',
    cells: [
      'Tool plan only (Zapier has a free plan)',
      '$75 to $150 an hour',
      '$125 to $250 an hour (boutique agency)',
      'A salary plus tools',
    ],
  },
];

const STEPS = [
  { title: 'A scoping call with the founder', body: 'Bhavesh runs the first call himself. You tell us what starts the work, which tools it touches and how often it happens. We tell you whether it needs AI at all.' },
  { title: 'The workflow running on your own data', body: 'Before you sign, we run the workflow on a few of your real records, with names removed if you prefer, so you see what it does and where it hands off to a person.' },
  { title: 'One fixed price and a dated schedule', body: 'You get the scope, one fixed price and the delivery dates in writing. Payments are tied to milestones, so you pay as each part works.' },
  { title: 'Build, test and launch', body: 'We build in your accounts, test against real edge cases from your records, and switch it on with alerts to Slack or email for any failed step.' },
  { title: 'Defect cover, then optional support', body: 'Defects found after launch are fixed inside the build price for a cover period we agree up front. After that, each change is quoted and approved first. There is no monthly minimum.' },
];

/* ── What moves the price. ──────────────────────────────────────────────── */
const COST_DRIVERS = [
  'How many workflows, and how many tools each one touches.',
  'Whether a step has to read documents or emails, which needs AI.',
  'How many exceptions there are, and who approves them.',
  'Whether your tools have clean APIs or need a workaround.',
  'Security needs, such as self-hosting inside your own servers.',
];

/* ── How to choose. Checks and red flags. ───────────────────────────────── */
const CHOOSE_CHECKS = [
  { title: 'They ask about your process before your tools', body: 'A good first call is mostly questions: what starts the work, how often, who handles the exceptions.' },
  { title: 'They will show it on your data before you sign', body: 'A short demo on a few of your real records tells you more than any slide deck or portfolio video.' },
  { title: 'They tell you what does not need AI', body: 'Most steps are fixed rules. An agency that puts AI in every step is selling the label, and you pay for it in running costs.' },
  { title: 'You own the accounts and the code', body: 'Workflows should live in your n8n, Make or Zapier account, and model usage should bill to your own OpenAI or Anthropic account.' },
  { title: 'The price is fixed and in writing', body: 'Ask for one figure for a defined scope, with dated milestones. Open-ended hourly billing moves the risk to you.' },
  { title: 'There is a plan for when an API changes', body: 'Apps change their connections without warning. Ask who gets the alert, who fixes it, and how fast.' },
  { title: 'Every step is documented', body: 'If another developer cannot follow what was built, you are tied to one supplier.' },
  { title: 'They have connected your systems before', body: 'Ask for one example with the same CRM, ERP or accounting tool you use, and what went wrong on it.' },
];

const RED_FLAGS = [
  'A monthly fee before anything is built or shown working.',
  'Workflows built in the agency\'s own accounts, not yours.',
  'Promises of a set number of hours saved before they have seen your process.',
  'No answer to "what happens when this fails at 2 a.m.?"',
  'A course or community upsell attached to the proposal.',
];

/* ── FAQ. One array: rendered by <FAQ> and used for the FAQPage JSON-LD. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'What it is' },
  { key: 'process', label: 'Process' },
  { key: 'cost', label: 'Cost' },
  { key: 'tools', label: 'Tools and data' },
  { key: 'choosing', label: 'Choosing a partner' },
  { key: 'finding', label: 'Finding an agency' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'basics',
    question: 'What is an AI automation agency?',
    answer:
      'An AI automation agency connects the tools you already use, so data moves between them without anyone retyping it: CRM, email, invoicing, orders and support. We build in n8n, Make or Zapier, with language models from Anthropic or OpenAI where a step has to read a document or an email. Your team sets the rules, and the workflow sends edge cases to a person. The agency designs these AI automation solutions, builds them in your accounts and supports them after launch.',
  },
  {
    category: 'basics',
    question: 'What does business automation actually do?',
    answer:
      'It takes a task your team repeats, such as copying an order into accounting or chasing an unpaid invoice, and has software do it the same way every time. A business process automation service designs that flow, connects the systems, handles the exceptions and supports it after launch. People still make the judgment calls.',
  },
  {
    category: 'basics',
    question: 'Can you give me an example of business process automation?',
    answer:
      'A customer emails a PDF purchase order. The workflow reads the PDF, matches each line to your SKUs and prices, checks stock and credit terms in your ERP, and drafts a sales order. A person approves it with one click. Anything unclear, such as an unknown SKU, goes to that person with the reason attached.',
  },
  {
    category: 'basics',
    question: 'How is AI automation different from AI agents?',
    answer:
      'AI automation runs structured workflows: clear triggers, clear rules, the same steps every time. An AI agent reads, judges and chooses between several actions. A simple test: if the steps are the same every time, automate them. If someone has to read, judge and decide, that is agent work. Many projects start with automation and add an agent for the step that needs judgment.',
  },
  {
    category: 'basics',
    question: 'Can you hire an AI agent?',
    answer:
      'You can hire a firm to build one for you. The agent is software that reads incoming work, such as emails or orders, and takes actions in your systems inside limits you set. FactoryJet builds agents you own outright, running in your accounts, with a person approving anything outside the rules.',
  },
  {
    category: 'basics',
    question: 'Which workflows are best suited to AI automation?',
    answer:
      'Frequent, rule-based work that crosses two or more systems. The common ones are order sync, invoice matching, lead routing, support ticket triage and month-end reporting. If the same person copies the same fields between the same tools every day, it is a good candidate.',
  },
  {
    category: 'process',
    question: 'How can I automate my business?',
    answer:
      'Start with one task, not the whole business. Write down what starts it, which tools it touches, how often it happens and who handles it today. Pick the task that runs most often and causes the most errors. Automate that, measure it for a month, then move to the next one.',
  },
  {
    category: 'process',
    question: 'How does a project run?',
    answer:
      'Five steps. A scoping call with the founder. The workflow running on a few of your own records before you sign. One fixed price and delivery dates in writing, paid in milestones. Build, test and launch in your accounts. Then defect cover for an agreed period, and optional support with each change quoted first.',
  },
  {
    category: 'process',
    question: 'How long does it take to automate a workflow?',
    answer:
      'Layer3 Labs puts a single workflow at two to four weeks and three to six connected workflows at six to twelve weeks, in its cost guide updated 2 July 2026. Workflows that read documents, cross several systems or need approval steps sit at the longer end. You get a dated schedule with the fixed price after the scoping call, so the timeline is in writing before you commit.',
  },
  {
    category: 'process',
    question: 'What do you need from us to show a demo on our data?',
    answer:
      'Three answers and a few samples. What starts the work, such as an order email, an invoice or a form. Which systems it touches, such as NetSuite, HubSpot or QuickBooks. How often it happens and who handles it today. Then a few real examples, with names removed if you prefer. A process doc or a short brief helps most: attach it at step 2 of the form and we scope each phase at a fixed price.',
  },
  {
    category: 'process',
    question: 'Do we need to be technical to work with FactoryJet?',
    answer:
      'No. You describe the current process in plain English. We build the workflow, document every step, and show your team where to see what ran and what failed.',
  },
  {
    category: 'cost',
    question: 'How much does AI automation cost?',
    answer:
      'Layer3 Labs puts a single-workflow build at $5,000 to $15,000 and a multi-workflow project at $15,000 to $50,000, in its AI automation agency cost guide updated 2 July 2026. The cost moves with the number of workflows, the tools involved and how much reading or judgment the steps need. FactoryJet quotes one fixed price in writing after the scoping call, paid in milestones.',
  },
  {
    category: 'cost',
    question: 'How much does it cost to automate a business?',
    answer:
      'Nobody automates a whole business in one go, so price it per workflow. Layer3 Labs lists a workflow discovery engagement at $2,000 to $5,000 and a first production workflow at $5,000 to $25,000 in its consulting rates guide updated 15 November 2026. Ongoing automation retainers run $3,000 to $20,000 a month, per its agency cost guide.',
  },
  {
    category: 'cost',
    question: 'How much should an AI agent cost?',
    answer:
      'It depends on how many systems the agent acts in and how much it has to judge. Layer3 Labs puts a first production AI workflow at $5,000 to $25,000 and a full enterprise AI system at $50,000 to $200,000 or more, in its consulting rates guide updated 15 November 2026. Model usage is billed on top, to your own account.',
  },
  {
    category: 'cost',
    question: 'Are there ongoing costs after the automation is built?',
    answer:
      'Only the tools themselves: your Make, Zapier or n8n plan, and AI model usage, both billed to your own accounts at cost with no markup from us. Support from FactoryJet after the defect cover period is optional, quoted per change, and there is no monthly minimum.',
  },
  {
    category: 'cost',
    question: 'Is hiring an AI automation agency worth it?',
    answer:
      'It is worth it when a task runs often, crosses several tools and causes errors when people retype it. Multiply how often it runs each week by the minutes it takes and what that time costs you, then compare that with the build price. We do this with your own numbers on the scoping call, and we will tell you if the payback is too slow to be worth building. An AI agency for a small business should be able to do this sum with you on the first call.',
  },
  {
    category: 'cost',
    question: 'Can I do AI automation for free?',
    answer:
      'For simple jobs, yes. Zapier has a free plan with 100 tasks a month, and n8n\'s Community edition is free to self-host if someone on your team can run a server. The cost shows up when a workflow crosses several systems, reads documents or breaks when an app changes. That is the point where an agency usually pays for itself.',
  },
  {
    category: 'tools',
    question: 'Which tools do you build in and connect to?',
    answer:
      'We build in n8n, Make and Zapier, with models from Anthropic and OpenAI for reading and sorting text. We connect HubSpot, Salesforce and Pipedrive; Shopify, WooCommerce and BigCommerce; QuickBooks, Xero and NetSuite; Zendesk, Gorgias, Slack, Google Drive and Airtable. Any system with a REST API or webhooks can be connected.',
  },
  {
    category: 'tools',
    question: 'Which is best for AI automation: n8n, Make or Zapier?',
    answer:
      'Zapier is the easiest for simple, low-volume triggers. Make handles branching and data shaping well at a lower price per step. n8n suits high volume, custom code and teams that need to self-host for data control. We pick per workflow and often mix them, and we tell you why on the scoping call.',
  },
  {
    category: 'tools',
    question: 'Can you automate orders and support for a Shopify store?',
    answer:
      'Yes. Common builds sync Shopify orders to inventory, shipping and QuickBooks or Xero, tag and route support tickets in Gorgias or Zendesk, and draft replies from live order data. When you want tickets resolved end to end rather than routed, that is an AI customer support agent, which we also build.',
  },
  {
    category: 'tools',
    question: 'What happens if we switch tools later?',
    answer:
      'Workflows are built from separate connectors. Swapping HubSpot for Salesforce, or QuickBooks for Xero, means replacing that connector while the business rules stay the same. Every connection is documented so the change is a scoped job, not a rebuild.',
  },
  {
    category: 'tools',
    question: 'Is our business data safe in an automated workflow?',
    answer:
      'We connect with API credentials limited to what each step needs, and no credentials are stored in plain text. For medical and financial teams we can run self-hosted n8n inside your own infrastructure, so the data never leaves it.',
  },
  {
    category: 'tools',
    question: 'Who owns the code and the prompts?',
    answer:
      'You do, from day one. The workflows live in your own n8n, Make or Zapier account, and any custom code sits in a repository you own. The prompts are part of that code, written down and versioned in your repository. Credentials are yours, and AI usage is billed to your own Anthropic or OpenAI account with no markup from us. If you stop working with us, everything keeps running and any developer can pick it up.',
  },
  {
    category: 'tools',
    question: 'Can an AI agent read our order emails and enter them into NetSuite?',
    answer:
      'Yes. The agent reads each order email or PDF attachment, matches the lines to your NetSuite items, prices and customer records, and drafts the sales order. Anything it cannot match, such as an unknown SKU or a price outside the customer\'s terms, goes to a person with the reason attached. Your team approves the draft before it posts. The same pattern works for SAP Business One, Odoo and ERPNext.',
  },
  {
    category: 'tools',
    question: 'Will this comply with GDPR and the EU AI Act if we sell into Europe?',
    answer:
      'Compliance is your legal team\'s call, and we build so they can sign off. Personal data stays in accounts you control, and self-hosted n8n can run on servers in the EU. The AI Act\'s transparency rules (Article 50) apply from August 2026, per the European Commission\'s AI Act page (digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai). Under them, a customer talking to an AI agent must be told it is a machine. We build customer-facing agents to say so, and each step is logged.',
  },
  {
    category: 'tools',
    question: 'I need AI data automation services. Who provides them?',
    answer:
      'Data automation moves records between systems and cleans them on the way, so nobody retypes or reconciles by hand. FactoryJet builds these pipelines: Shopify orders into QuickBooks or Xero, CRM records synced with an ERP, and reports pulled from several tools on a fixed day. AI is added only where a step reads a PDF, a scan or an email. Tell us which systems hold the data and we scope it on the first call.',
  },
  {
    category: 'tools',
    question: 'What do agencies offer in AI automation for digital commerce?',
    answer:
      'Most commerce automation covers the same jobs: orders and stock synced between the store, the warehouse and accounting, replies to order and returns questions drafted from live order data, abandoned cart and review follow-ups, product data clean-up, B2B quotes and scheduled sales reports. FactoryJet builds these on Shopify, WooCommerce and BigCommerce, and builds stores too, so the store and its automations can be planned together.',
  },
  {
    category: 'choosing',
    question: 'We already use Zapier. Do we still need an agency?',
    answer:
      'Simple linear zaps work well for basic triggers. An agency helps when steps need to read documents, branch on judgment or cross several databases. We can tidy an existing Zapier setup, or move high-volume tasks to n8n where per-task pricing gets expensive.',
  },
  {
    category: 'choosing',
    question: 'What should we ask an AI automation agency before hiring them?',
    answer:
      'Five questions. Which of our current tools will run this? Who owns the workflows and the accounts? What happens when a third-party API changes? Is the price fixed or hourly? Can you show it working on our own data before we sign? Our list of the best US AI automation agencies compares 14 firms, including us.',
  },
  {
    category: 'finding',
    question: 'Can you build me a list of workflow automation agencies?',
    answer:
      'Yes. Our list of the best AI automation agencies in the US compares 14 firms, FactoryJet included, grouped by the buyer each one suits: small businesses, mid-size operations teams, online stores and agencies that need white-label help. Each entry was checked on the firm\'s own site. To widen it, add the partner directories that Make and Zapier run, then send the same one-page brief to three firms and compare their questions.',
  },
  {
    category: 'finding',
    question: 'Which agency specializes in AI automation for business operations?',
    answer:
      'Look for a firm whose examples are back-office chains, not chatbots or marketing funnels. FactoryJet works on order handling, daily bookkeeping, and purchase and sales order workflows, often inside an ERP such as Odoo, NetSuite, SAP Business One or ERPNext. Ask any operations specialist which systems it has connected before, and ask to see one workflow running on your own records before you sign.',
  },
  {
    category: 'finding',
    question: 'Which workflow automation companies support large enterprises?',
    answer:
      'Company-wide programs need things a single project does not: single sign-on, change control, audit logs and a named owner for every workflow. Global consultancies such as Deloitte and IBM Consulting run programs at that scale. FactoryJet suits an enterprise team that wants one department\'s workflow designed, built and supported, such as order intake or invoice matching, with self-hosted n8n inside your own infrastructure when the data has to stay there.',
  },
  {
    category: 'finding',
    question: 'Which companies build custom AI workflow automation for mid-sized businesses?',
    answer:
      'Mid-sized firms usually outgrow single zaps first: one order or invoice now crosses a CRM, an ERP and an accounting tool. FactoryJet builds those custom workflows in n8n, Make or Zapier and connects HubSpot, Salesforce, NetSuite, QuickBooks, Xero and Shopify. Our list of US AI automation agencies names other firms that work at this size, so you can compare at least three before you choose.',
  },
  {
    category: 'finding',
    question: 'I want to build an agentic AI workflow for my business. Which development firm should I hire?',
    answer:
      'An agentic workflow is one where AI reads the situation, picks the next step and acts in your systems inside limits you set, such as drafting a sales order for a person to approve. Hire a firm that builds custom agents, not only tool connections, and ask it to show one running with its logs. FactoryJet builds both, and every workflow sends anything unclear to a person with the reason attached.',
  },
  {
    category: 'finding',
    question: 'We want to add AI automation to our business. Which agency can help?',
    answer:
      'Start with one task rather than a whole program. Write down what starts it, which tools it touches and how often it happens, then send that page to a few agencies and compare the questions they ask back. FactoryJet runs the first call with the founder, tells you whether the task needs AI at all, and shows the workflow running on your own records before you sign.',
  },
  {
    category: 'finding',
    question: 'Is there workflow automation support for digital agencies?',
    answer:
      'Yes. Agencies usually need one of two things: a partner who builds a client\'s workflow under the agency\'s name, or support for automations the agency already runs. FactoryJet takes both as projects, and white-label work is welcome. Each build has a written scope and one fixed price, and support after launch is quoted per change, and there is no monthly minimum.',
  },
  {
    category: 'finding',
    question: 'Who offers offshore workflow automation services for digital agencies?',
    answer:
      'If you are weighing offshore help, the question that matters is how the work fits your working day. FactoryJet works remotely with agencies and schedules calls in US business hours. Every build runs against a written scope with dated milestones, payments are tied to those milestones, and every workflow is documented, so your own team can follow what was built without waiting on us.',
  },
];

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL_URL}#webpage`,
      url: CANONICAL_URL,
      name: PAGE_TITLE,
      description: PAGE_DESC,
      dateModified: PAGE_MODIFIED,
      isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
    {
      '@type': 'Service',
      name: 'AI Automation Agency Services',
      serviceType: 'AI Workflow Automation',
      description: PAGE_DESC,
      provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
      areaServed: { '@type': 'Country', name: 'United States' },
      url: CANONICAL_URL,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI automation services',
        itemListElement: SERVICES.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.title, description: s.body },
        })),
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ],
};

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-4 w-4 flex-shrink-0">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const linkCls = 'font-semibold text-[#B23E13] underline underline-offset-2';

export default function UsAiAutomationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <SiteHeader />

      <main className="bg-fj-cream">
        <StickyCtaLabel label="See a demo on my data" title="Demo first" />
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO (light) */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream pt-12 pb-14 md:pt-14 md:pb-16">
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F05A28]/30 bg-white px-3 py-1.5">
                  <span className="font-fj-mono text-xs font-bold tracking-wide text-[#B23E13]">AI AUTOMATION AGENCY &middot; UNITED STATES</span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.2rem]">
                  AI automation agency for the work your team retypes every day.
                </h1>

                <p className="mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                  FactoryJet is an AI automation company that designs, builds and supports workflows for US businesses. We connect your store, CRM,
                  accounting and inbox so orders, invoices, leads and reports move between them on their own. Built in
                  n8n, Make or Zapier, with AI only for the steps that have to read a document or an email.
                </p>

                <p className="mt-4 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-ink">
                  Before you sign, you see the workflow running on your own records. The price is fixed and in writing,
                  and every workflow lives in accounts you own.
                </p>

                <div className="mt-6">
                  <HeroInlineForm
                    region="us"
                    source="us_services_ai_automation_hero"
                    service="AI Automation"
                    submitLabel="See a demo on my data"
                    trustText="Working software on your own data before you sign. Founder replies within 24 hours."
                  />
                  <p className="mt-3 max-w-xl font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                    Have a brief or a process doc? Attach it at step 2 and we scope each phase at a fixed price.
                  </p>
                </div>

                <div className="mt-5">
                  <Link
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 font-fj-body text-sm font-semibold text-fj-ink hover:opacity-70"
                  >
                    Talk to the founder
                    <Arrow />
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-fj-neutral-200 pt-5 font-fj-mono text-xs text-fj-neutral-600">
                  <span>500+ businesses served</span>
                  <span>Founded 2014</span>
                  <span>Workflows in your accounts</span>
                  <span>Fixed price in writing</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
                  <figcaption className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                    Example: one emailed purchase order
                  </figcaption>
                  <ol className="mt-4 grid gap-3">
                    {[
                      { k: 'Trigger', v: 'A PDF purchase order arrives in the orders inbox.' },
                      { k: 'Read', v: 'The PDF is read and the lines matched to your SKUs and prices.' },
                      { k: 'Check', v: 'Stock and credit terms checked in your ERP or Shopify.' },
                      { k: 'Draft', v: 'A sales order drafted for your team to approve.' },
                      { k: 'Hand off', v: 'Anything unclear goes to a person, with the reason attached.' },
                    ].map((s, i) => (
                      <li key={s.k} className="flex gap-3 rounded-xl border border-fj-neutral-200 bg-fj-cream p-3">
                        <span className="font-fj-mono text-xs font-bold text-[#B23E13]">{String(i + 1).padStart(2, '0')}</span>
                        <span className="font-fj-body text-[15px] leading-snug text-fj-ink">
                          <span className="font-semibold">{s.k}.</span> {s.v}
                        </span>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-3 font-fj-body text-[13px] leading-snug text-fj-neutral-600">
                    Illustrative. Your version is mapped to your own tools on the scoping call.
                  </p>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SHORT ANSWER */}
        <section className="border-b border-fj-neutral-200 bg-white py-12">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <div className="rounded-2xl border-2 border-[#F05A28]/25 bg-fj-cream p-6 sm:p-8">
              <h2 className="mb-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                What does an AI automation agency do?
              </h2>
              <p className="font-fj-body text-base leading-relaxed text-fj-ink sm:text-lg">
                An AI automation agency connects the tools a business already uses, so records move between them
                without retyping. It maps how work flows today, builds the workflows, adds AI only where a step has to
                read an email, a PDF or a scan, and supports the result after launch. US agencies typically charge
                $5,000 to $15,000 for one workflow, according to{' '}
                <a href={LAYER3_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                  Layer3 Labs
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* 3. SERVICES */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">AI automation services</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Six services an AI automation agency should offer.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Most business automation services combine two or three of these. A typical first build is one workflow plus document processing
                  for the step that reads a PDF.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Adoption is still early. Between 17% and 20% of US businesses used AI from December 2025 to May
                  2026, rising to 37% of firms with 250 or more employees, according to the{' '}
                  <a href={CENSUS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                    US Census Bureau
                  </a>
                  .
                </p>
              </div>
              <ol className="grid gap-4 lg:col-span-8 md:grid-cols-2">
                {SERVICES.map((s, i) => (
                  <li key={s.title} className="flex flex-col rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
                    <span className="font-fj-mono text-xs font-bold text-[#B23E13]">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="mt-2 font-fj-display text-lg font-semibold text-fj-ink">{s.title}</h3>
                    <p className="mt-1.5 flex-1 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{s.body}</p>
                    <p className="mt-3 border-t border-fj-neutral-200 pt-3 font-fj-body text-sm leading-snug text-fj-ink">
                      <span className="font-semibold">Example:</span> {s.example}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 4. AUTOMATION OR AGENT */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">Not everything needs AI</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Automation or an agent: one test decides.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  A fixed rule costs less to run and never guesses. We add AI only where a step needs it, and we say so
                  on the scoping call.
                </p>
              </div>
              <div className="grid gap-4 lg:col-span-7">
                <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                  <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">Automate it</p>
                  <p className="mt-2 font-fj-body text-base leading-relaxed text-fj-ink">
                    The steps are the same every time. An order syncs, an invoice posts, a lead is routed.
                  </p>
                </div>
                <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                  <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">Build an agent</p>
                  <p className="mt-2 font-fj-body text-base leading-relaxed text-fj-ink">
                    Someone has to read, judge and choose between several actions. A purchase order in an odd format,
                    an RFQ with drawings, a customer email that could mean three things.{' '}
                    <Link href="/services/ai-agent-development" className={linkCls}>
                      See AI agent development
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. USE CASES */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Use cases</p>
            <h2 className="mt-4 max-w-3xl font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Six back-office chains we automate, in the tools you already pay for.
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {WORKFLOWS.map((w) => (
                <li key={w.title}>
                  <Link href={w.href} className="group flex h-full flex-col rounded-2xl border border-fj-neutral-200 bg-white p-6 hover:border-[#F05A28]/50">
                    <span className="font-fj-display text-xl font-semibold text-fj-ink group-hover:text-[#B23E13]">{w.title}</span>
                    <span className="mt-2 flex-1 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{w.body}</span>
                    <span className="mt-4 text-fj-ink group-hover:text-[#B23E13]"><Arrow /></span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-2xl border border-fj-neutral-200 bg-white p-6">
              <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">Tools we build in and connect</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {TOOLS.map((t) => (
                  <li key={t} className="rounded-full border border-fj-neutral-200 bg-fj-cream px-3 py-1.5 font-fj-body text-sm text-fj-ink">{t}</li>
                ))}
              </ul>
              <p className="mt-4 font-fj-body text-sm text-fj-neutral-600">
                Choosing between a workflow tool and an agent framework? Read{' '}
                <Link href="/comparisons/n8n-vs-langchain-vs-crewai-enterprise" className={linkCls}>
                  n8n vs LangChain vs CrewAI
                </Link>
                . Building on n8n already? See{' '}
                <Link href="/n8n-automation" className={linkCls}>
                  n8n automation
                </Link>
                . Want the agent working inside NetSuite, SAP Business One, Odoo or ERPNext? See{' '}
                <Link href="/services/erp-ai-agents" className={linkCls}>
                  AI agents for ERP
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* 6. AGENCY VS DIY VS FREELANCER VS IN-HOUSE */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Agency, DIY or hire</p>
            <h2 className="mt-4 max-w-3xl font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Who should build your automation?
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              For a small business, a single trigger between two apps rarely needs an agency. A workflow that crosses your CRM, ERP and
              accounting tool, or reads documents, usually does. Here is how the four options compare.
            </p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-fj-neutral-200">
              <table className="w-full min-w-[720px] text-left font-fj-body text-[15px]">
                <caption className="sr-only">Comparison of DIY tools, freelancers, AI automation agencies and in-house hires</caption>
                <thead className="bg-fj-cream font-fj-mono text-xs uppercase tracking-wider text-fj-neutral-600">
                  <tr>
                    <th scope="col" className="p-4 font-bold"><span className="sr-only">Question</span></th>
                    {OPTIONS_COLS.map((c) => (
                      <th key={c} scope="col" className={`p-4 font-bold ${c === 'AI automation agency' ? 'text-[#B23E13]' : ''}`}>{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-fj-neutral-200 bg-white text-fj-ink">
                  {OPTIONS_ROWS.map((row) => (
                    <tr key={row.label}>
                      <th scope="row" className="p-4 align-top font-semibold">{row.label}</th>
                      {row.cells.map((cell, i) => (
                        <td key={i} className="p-4 align-top text-fj-neutral-600">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 font-fj-body text-[13px] leading-snug text-fj-neutral-600">
              Hourly rates:{' '}
              <a href={LAYER3_RATES_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                Layer3 Labs, AI consulting rates and pricing
              </a>
              , updated 15 November 2026. Free plan:{' '}
              <a href="https://zapier.com/pricing" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                Zapier pricing
              </a>
              , read 16 November 2026.
            </p>
          </div>
        </section>

        {/* 7. HOW A PROJECT RUNS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Process and timeline</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  You see it running before you pay for it.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  A workflow between two tools is the shortest job. Document reading, approval steps and extra systems
                  each add time. Your dates are in writing with the price.
                </p>
                <div className="mt-6 overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white">
                  <table className="w-full text-left font-fj-body text-[15px]">
                    <caption className="sr-only">Typical US market timelines for AI automation projects</caption>
                    <thead className="bg-fj-cream font-fj-mono text-xs uppercase tracking-wider text-fj-neutral-600">
                      <tr>
                        <th scope="col" className="p-3 font-bold">Scope</th>
                        <th scope="col" className="p-3 font-bold">Typical build</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-fj-neutral-200 text-fj-ink">
                      {TIMELINES.map((t) => (
                        <tr key={t.scope}>
                          <th scope="row" className="p-3 align-top font-normal">{t.scope}</th>
                          <td className="p-3 align-top font-semibold whitespace-nowrap">{t.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 font-fj-body text-[13px] leading-snug text-fj-neutral-600">
                  Market timelines from{' '}
                  <a href={LAYER3_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                    Layer3 Labs
                  </a>
                  , updated 2 July 2026.
                </p>
              </div>
              <ol className="grid gap-4 lg:col-span-8">
                {STEPS.map((step, i) => (
                  <li key={step.title} className="flex gap-4 rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
                    <span className="font-fj-mono text-sm font-bold text-[#B23E13]">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{step.title}</h3>
                      <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 8. MID-PAGE CTA */}
        <MidPageCTA
          headline="Tell us the one task you would automate first."
          sub="Send what starts it, which tools it touches and how often it happens. We reply with whether it needs AI at all, and what we would build."
          label="Talk to the founder"
          note="Bhavesh replies within 24 hours."
        />

        {/* 9. WHAT IT COSTS IN THE MARKET */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">What it costs</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  AI automation agency pricing: market ranges.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  We do not publish one price, because the number of workflows and tools drives the work. These are
                  published US market ranges. Yours comes as one fixed figure in writing after the scoping call.
                </p>
                <p className="mt-6 font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">What moves the price</p>
                <ol className="mt-3 grid gap-2">
                  {COST_DRIVERS.map((d, i) => (
                    <li key={d} className="flex gap-3 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                      <span className="font-fj-mono text-xs font-bold leading-7 text-[#B23E13]">{i + 1}</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="lg:col-span-7">
                <div className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white">
                  <table className="w-full text-left font-fj-body text-[15px]">
                    <caption className="sr-only">US market price ranges for AI automation projects</caption>
                    <thead className="bg-fj-cream font-fj-mono text-xs uppercase tracking-wider text-fj-neutral-600">
                      <tr>
                        <th scope="col" className="p-4 font-bold">Engagement</th>
                        <th scope="col" className="p-4 font-bold">Typical market range</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-fj-neutral-200 text-fj-ink">
                      <tr>
                        <th scope="row" className="p-4 font-semibold">Workflow discovery</th>
                        <td className="p-4">$2,000 to $5,000</td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-4 font-semibold">One workflow</th>
                        <td className="p-4">$5,000 to $15,000</td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-4 font-semibold">Several connected workflows</th>
                        <td className="p-4">$15,000 to $50,000</td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-4 font-semibold">Full enterprise AI system</th>
                        <td className="p-4">$50,000 to $200,000+</td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-4 font-semibold">Ongoing retainer</th>
                        <td className="p-4">$3,000 to $20,000 a month</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 font-fj-body text-[13px] leading-snug text-fj-neutral-600">
                  Sources:{' '}
                  <a href={LAYER3_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                    Layer3 Labs, AI automation agency cost
                  </a>{' '}
                  (updated 2 July 2026) for workflow and retainer rows;{' '}
                  <a href={LAYER3_RATES_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                    Layer3 Labs, AI consulting rates
                  </a>{' '}
                  (updated 15 November 2026) for discovery and enterprise rows. Read 16 November 2026. Tool
                  subscriptions and AI usage are extra and billed to your own accounts. FactoryJet has no monthly
                  minimum.
                </p>
                <p className="mt-4 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                  Why some agencies look far cheaper: published starting prices sit lower than finished projects. Of the
                  99 agencies out of 1,002 that publish a project price, the median is $2,500, according to{' '}
                  <a href={COFOUNDERBASE_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                    Cofounderbase
                  </a>{' '}
                  (data updated 14 November 2026). Ask what that starting price includes before you compare it with a
                  fixed quote.
                </p>
                <p className="mt-4 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                  Budgeting by company size? Our{' '}
                  <Link href="/blog/ai-automation-agency-cost-2026" className={linkCls}>
                    AI automation agency cost guide
                  </Link>{' '}
                  breaks project and retainer ranges down by job.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. HOW TO CHOOSE */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">How to choose</p>
            <h2 className="mt-4 max-w-3xl font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              How to choose an AI automation agency: 8 checks.
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
              <ol className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
                {CHOOSE_CHECKS.map((c, i) => (
                  <li key={c.title} className="rounded-2xl border border-fj-neutral-200 bg-white p-5">
                    <span className="font-fj-mono text-xs font-bold text-[#B23E13]">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="mt-2 font-fj-display text-lg font-semibold text-fj-ink">{c.title}</h3>
                    <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{c.body}</p>
                  </li>
                ))}
              </ol>
              <div className="lg:col-span-4">
                <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6">
                  <h3 className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">Five red flags</h3>
                  <ul className="mt-4 grid gap-3">
                    {RED_FLAGS.map((r) => (
                      <li key={r} className="flex gap-3 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#B23E13]" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                  Comparing suppliers? Our list of the{' '}
                  <Link href="/blog/best-ai-automation-agencies-usa-2026" className={linkCls}>
                    best AI automation agencies in the US
                  </Link>{' '}
                  compares 14 firms, including us. New to the idea? Read{' '}
                  <Link href="/blog/what-does-an-ai-automation-agency-do" className={linkCls}>
                    what an AI automation agency actually does
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 11. WHAT YOU OWN + PROOF */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="fj-eyebrow">What you own</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  The workflows, the accounts and the data stay yours.
                </h2>
                <ul className="mt-6 grid gap-3">
                  {[
                    { t: 'Workflows in your accounts', d: 'Built in your own n8n, Make or Zapier account, with your own credentials.' },
                    { t: 'AI usage at cost', d: 'Model usage billed to your own Anthropic or OpenAI account, with no markup from us.' },
                    { t: 'No monthly minimum', d: 'Support after launch is optional. Each change is quoted and approved before we do it.' },
                    { t: 'Documented', d: 'Every connection written up, so any developer can take it over.' },
                  ].map((x) => (
                    <li key={x.t} className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5">
                      <p className="font-fj-display text-lg font-semibold text-fj-ink">{x.t}</p>
                      <p className="mt-1 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{x.d}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">Case study</p>
                <Link
                  href="/case-studies/washington-law-group-accident-detection-agent"
                  className="group mt-4 flex flex-col rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 hover:border-[#F05A28]/50"
                >
                  <span className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">Legal · AI agent</span>
                  <span className="mt-3 font-fj-display text-xl font-semibold text-fj-ink">Washington Law Group</span>
                  <span className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                    An AI agent that detects and reports commercial-vehicle accidents for a personal injury law firm. It
                    reads news and police sources across all 50 states every two hours, applies the firm&apos;s rules and
                    emails each qualifying crash. Lawyers at the firm review every lead, and the code is assigned to the firm.
                  </span>
                  <span className="mt-4 inline-flex items-center gap-2 font-fj-body text-sm font-semibold text-fj-ink group-hover:text-[#B23E13]">
                    Read the case study
                    <Arrow />
                  </span>
                </Link>
                <p className="mt-6 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                  Buying in the UK? See our{' '}
                  <Link href="/uk/ai-automation" className={linkCls}>
                    AI automation services for UK businesses
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 12. FAQ */}
        <FAQ
          eyebrow="AI automation FAQ"
          headline="What buyers ask before hiring an AI automation agency."
          lead="Cost ranges are sourced and dated. AI Act dates are from the European Commission's AI Act page, read 29 October 2026."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-fj-cream"
        />

        {/* 13. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="Start here"
          headline="Pick one workflow. We will show you it running."
          sub="Send what starts the work, the tools it touches and a few real examples. We come back with the workflow running on your own records and one fixed price in writing."
          primaryCta={{ label: 'See a demo on my data', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
