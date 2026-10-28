import type { Metadata } from 'next';
import Link from 'next/link';

import { usServiceAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/ai-automation

   Rebuilt 2026-10-16 for operations buyers. The old page led with "The AI
   Automation Agency Built for US Small Businesses", a 523+ websites block, a
   starter/growth/enterprise price grid, an hours-saved calculator and a
   competitor table with no sources. Search Console, 90 days to 14 Oct 2026:
   0 US clicks; "ai automation agency for small businesses" ranked about 9 on
   9 US impressions. ChatGPT sent it 5 visits in 60 days. The keyword "AI
   automation agency" stays in the title and H1.

   Market range: Layer3 Labs, "AI automation agency cost", updated 2 Jul 2026,
   read 16 Oct 2026. No FactoryJet prices, no running-cost figures.

   2026-10-29: dropped four micro-buyer and DIY FAQs (tool plan prices, "under
   $5,000" platforms, freelance setup, where to find tools). Added NetSuite
   order intake, demo inputs, code and prompt ownership, and GDPR / EU AI Act.
   AI Act dates: European Commission AI Act page, read 29 Oct 2026
   (transparency rules apply from August 2026). Title, meta and H1 unchanged
   (edited 22 Oct, re-measure due about 18 Nov).

   Schema: WebPage + Service + FAQPage (from FAQ_ITEMS, the array <FAQ>
   renders) + BreadcrumbList (from BREADCRUMB_ITEMS).
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/ai-automation';
const PAGE_TITLE = 'AI Automation Agency in the USA | FactoryJet';
const PAGE_DESC =
  'AI automation for operations teams: orders, invoices, leads and reports that move between your tools without retyping. Built in n8n, Make or Zapier. Fixed price in writing, and you own every workflow.';
const PAGE_MODIFIED = '2026-10-29';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const LAYER3_URL = 'https://www.layer3labs.io/roi/ai-automation-agency-cost';

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
    languages: usServiceAlternates['ai-automation'],
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

/* ── The six back-office chains we automate most. ───────────────────────── */
const WORKFLOWS = [
  { title: 'Order to delivery', body: 'Shopify or marketplace orders sync to inventory, shipping labels and customer updates without anyone copying order numbers between tabs.', href: '/services/sales-order-automation-ai-agents' },
  { title: 'Quote to cash', body: 'A signed quote becomes an invoice in QuickBooks or Xero, payment reminders go out on schedule, and paid invoices close the deal in your CRM.', href: '/services/shopify-quickbooks-integration' },
  { title: 'Invoice intake', body: 'Vendor invoices read, matched against purchase orders and receipts, coded and queued for approval in your accounting system.', href: '/services/accounts-payable-automation' },
  { title: 'Lead to customer', body: 'Web forms, calls and marketplace enquiries land in HubSpot or Salesforce with the source attached, get routed to the right person, and get a first reply in minutes.', href: '/services/ai-customer-support-agents' },
  { title: 'Document intake', body: 'Purchase orders, forms and scans read, checked against your records and filed, with anything unclear sent to a person to approve.', href: '/services/document-intake-ai-agents' },
  { title: 'Month-end reporting', body: 'Numbers from your accounting, ad and sales tools pulled into one report on the same day every month, with the gaps flagged instead of hidden.', href: '/services/ai-development' },
];

const TOOLS = ['n8n', 'Make', 'Zapier', 'HubSpot', 'Salesforce', 'Shopify', 'QuickBooks', 'Xero', 'NetSuite', 'Zendesk', 'Gorgias', 'Slack', 'Google Drive', 'Airtable'];

const STEPS = [
  { title: 'A scoping call with the founder', body: 'Bhavesh runs the first call himself. You tell us what starts the work, which tools it touches and how often it happens. We tell you whether it needs AI at all.' },
  { title: 'The workflow running on your own data', body: 'Before you sign, we run the workflow on a few of your real records, with names removed if you prefer, so you see what it does and where it hands off to a person.' },
  { title: 'One fixed price, paid in stages', body: 'You get the scope and one fixed price in writing, with a dated schedule. Payments are tied to milestones.' },
  { title: 'Launch, with defect cover', body: 'Defects found after launch are fixed inside the build price, for a cover period we agree before work starts. Failed steps send an alert to Slack or email.' },
  { title: 'Support only if you want it', body: 'After that, each change is quoted and approved before we do it. There is no monthly minimum.' },
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
      'An AI automation agency connects the tools you already use, so data moves between them without anyone retyping it: CRM, email, invoicing, orders and support. We build in n8n, Make or Zapier, with language models from Anthropic or OpenAI where a step has to read a document or an email. Your team sets the rules, and the workflow sends edge cases to a person.',
  },
  {
    category: 'basics',
    question: 'How is AI automation different from AI agents?',
    answer:
      'AI automation runs structured workflows: clear triggers, clear rules, the same steps every time. An AI agent reads, judges and chooses between several actions. A simple test: if the steps are the same every time, automate them. If someone has to read, judge and decide, that is agent work. Many projects start with automation and add an agent for the step that needs judgment.',
  },
  {
    category: 'basics',
    question: 'Which workflows are best suited to AI automation?',
    answer:
      'Frequent, rule-based work that crosses two or more systems. The common ones are order sync, invoice matching, lead routing, support ticket triage and month-end reporting. If the same person copies the same fields between the same tools every day, it is a good candidate.',
  },
  {
    category: 'process',
    question: 'How does a project run?',
    answer:
      'Five steps. A scoping call with the founder. The workflow running on a few of your own records before you sign. One fixed price in writing with a dated schedule, paid in milestones. Launch, with defects fixed inside the build price for an agreed cover period. Then optional support, with each change quoted and approved first.',
  },
  {
    category: 'process',
    question: 'How long does it take to automate a workflow?',
    answer:
      'A workflow between two tools is usually the shortest job. Workflows that read documents, cross several systems or need approval steps take longer. You get a dated schedule with the fixed price after the scoping call, so the timeline is in writing before you commit.',
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
    question: 'Are there ongoing costs after the automation is built?',
    answer:
      'Only the tools themselves: your Make, Zapier or n8n plan, and AI model usage, both billed to your own accounts at cost with no markup from us. Support from FactoryJet after the defect cover period is optional, quoted per change, and there is no monthly minimum.',
  },
  {
    category: 'cost',
    question: 'How do we know it is worth building?',
    answer:
      'Start with one task. Multiply how often it runs each week by the minutes it takes and what that time costs you, then compare that with the build price. We work this out with your own numbers on the scoping call, and we will tell you if the payback is too slow to be worth building.',
  },
  {
    category: 'tools',
    question: 'Which tools do you build in and connect to?',
    answer:
      'We build in n8n, Make and Zapier, with models from Anthropic and OpenAI for reading and sorting text. We connect HubSpot, Salesforce and Pipedrive; Shopify, WooCommerce and BigCommerce; QuickBooks, Xero and NetSuite; Zendesk, Gorgias, Slack, Google Drive and Airtable. Any system with a REST API or webhooks can be connected.',
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
      'You do, from day one. The workflows live in your own n8n, Make or Zapier account, and any custom code sits in a repository you own. The prompts are part of that code, written down and versioned, not hidden in our accounts. Credentials are yours, and AI usage is billed to your own Anthropic or OpenAI account with no markup from us. If you stop working with us, everything keeps running and any developer can pick it up.',
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
      'Compliance is your legal team\'s call, and we build so they can sign off. Personal data stays in accounts you control, and self-hosted n8n can run on servers in the EU. Per the European Commission\'s AI Act page (digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai), the transparency rules in Article 50 of the Act apply from August 2026: a customer talking to an AI agent must be told it is a machine. We build customer-facing agents to say so, and each step is logged.',
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

export default function UsAiAutomationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <SiteHeader />

      <main className="bg-fj-cream">
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
                  An AI automation agency for the work your team retypes every day.
                </h1>

                <p className="mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                  We connect your store, CRM, accounting and inbox so orders, invoices, leads and reports move between
                  them on their own. Built in n8n, Make or Zapier, with AI only for the steps that have to read a
                  document or an email.
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
              <div className="mb-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">Short answer</div>
              <p className="font-fj-body text-base leading-relaxed text-fj-ink sm:text-lg">
                AI automation connects the tools a business already uses, so records move between them without
                retyping. Most steps need a fixed rule, not AI. AI earns its place only where a step has to read an
                email, a PDF or a scan. FactoryJet designs, builds and supports these workflows in n8n, Make or Zapier,
                inside accounts you own.
              </p>
            </div>
          </div>
        </section>

        {/* 3. AUTOMATION OR AGENT */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
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
                <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6">
                  <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">Automate it</p>
                  <p className="mt-2 font-fj-body text-base leading-relaxed text-fj-ink">
                    The steps are the same every time. An order syncs, an invoice posts, a lead is routed.
                  </p>
                </div>
                <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6">
                  <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">Build an agent</p>
                  <p className="mt-2 font-fj-body text-base leading-relaxed text-fj-ink">
                    Someone has to read, judge and choose between several actions. A purchase order in an odd format,
                    an RFQ with drawings, a customer email that could mean three things.{' '}
                    <Link href="/services/ai-agent-development" className="font-semibold text-[#B23E13] underline underline-offset-2">
                      See AI agent development
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WHAT WE AUTOMATE */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">What we automate</p>
            <h2 className="mt-4 max-w-3xl font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Six back-office chains, built in the tools you already pay for.
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {WORKFLOWS.map((w) => (
                <li key={w.title}>
                  <Link href={w.href} className="group flex h-full flex-col rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 hover:border-[#F05A28]/50">
                    <span className="font-fj-display text-xl font-semibold text-fj-ink group-hover:text-[#B23E13]">{w.title}</span>
                    <span className="mt-2 flex-1 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{w.body}</span>
                    <span className="mt-4 text-fj-ink group-hover:text-[#B23E13]"><Arrow /></span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
              <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">Tools we build in and connect</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {TOOLS.map((t) => (
                  <li key={t} className="rounded-full border border-fj-neutral-200 bg-white px-3 py-1.5 font-fj-body text-sm text-fj-ink">{t}</li>
                ))}
              </ul>
              <p className="mt-4 font-fj-body text-sm text-fj-neutral-600">
                Choosing between a workflow tool and an agent framework? Read{' '}
                <Link href="/comparisons/n8n-vs-langchain-vs-crewai-enterprise" className="font-semibold text-[#B23E13] underline underline-offset-2">
                  n8n vs LangChain vs CrewAI
                </Link>
                . Building on n8n already? See{' '}
                <Link href="/n8n-automation" className="font-semibold text-[#B23E13] underline underline-offset-2">
                  n8n automation
                </Link>
                . Want the agent working inside NetSuite, SAP Business One, Odoo or ERPNext? See{' '}
                <Link href="/services/erp-ai-agents" className="font-semibold text-[#B23E13] underline underline-offset-2">
                  AI agents for ERP
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* 5. WHAT IT COSTS IN THE MARKET */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">What it costs</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Market ranges, and how we quote.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  We do not publish one price, because the number of workflows and tools drives the work. These are
                  published market ranges. Yours comes as one fixed figure in writing after the scoping call.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white">
                  <table className="w-full text-left font-fj-body text-[15px]">
                    <thead className="bg-fj-cream font-fj-mono text-xs uppercase tracking-wider text-fj-neutral-600">
                      <tr>
                        <th scope="col" className="p-4 font-bold">Project</th>
                        <th scope="col" className="p-4 font-bold">Typical market range</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-fj-neutral-200 text-fj-ink">
                      <tr>
                        <th scope="row" className="p-4 font-semibold">One workflow</th>
                        <td className="p-4">$5,000 to $15,000</td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-4 font-semibold">Several connected workflows</th>
                        <td className="p-4">$15,000 to $50,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 font-fj-body text-[13px] leading-snug text-fj-neutral-600">
                  Source:{' '}
                  <a href={LAYER3_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                    Layer3 Labs, AI automation agency cost
                  </a>
                  , updated 2 July 2026, read 16 October 2026. Tool subscriptions and AI usage are extra and billed to
                  your own accounts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. HOW A PROJECT RUNS */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">How a project runs</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  You see it running before you pay for it.
                </h2>
              </div>
              <ol className="grid gap-4 lg:col-span-8">
                {STEPS.map((step, i) => (
                  <li key={step.title} className="flex gap-4 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5 sm:p-6">
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

        {/* 7. MID-PAGE CTA */}
        <MidPageCTA
          headline="Tell us the one task you would automate first."
          sub="Send what starts it, which tools it touches and how often it happens. We reply with whether it needs AI at all, and what we would build."
          label="Talk to the founder"
          note="Bhavesh replies within 24 hours."
        />

        {/* 8. WHAT YOU OWN + PROOF */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
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
                    <li key={x.t} className="rounded-2xl border border-fj-neutral-200 bg-white p-5">
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
                  className="group mt-4 flex flex-col rounded-2xl border border-fj-neutral-200 bg-white p-6 hover:border-[#F05A28]/50"
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
                  Comparing suppliers first? Our list of the{' '}
                  <Link href="/blog/best-ai-automation-agencies-usa-2026" className="font-semibold text-[#B23E13] underline underline-offset-2">
                    best AI automation agencies in the US
                  </Link>{' '}
                  compares 14 firms, including us.{' '}Budgeting first? Our <Link href="/blog/ai-automation-agency-cost-2026" className="font-semibold text-[#B23E13] underline underline-offset-2">AI automation agency cost guide</Link> has project and retainer ranges by company size.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. FAQ */}
        <FAQ
          eyebrow="AI automation FAQ"
          headline="What operations teams ask before automating a workflow."
          lead="Cost ranges are sourced and dated. AI Act dates are from the European Commission's AI Act page, read 29 October 2026."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 10. FINAL CTA */}
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
