import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { AnswerFirst, QuestionAnswers, SourceList } from '@/components/india-pages/IndiaAnswerBlocks';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
   Refreshed 24 Nov 2026. GSC India, 25 Aug to 22 Nov 2026: "n8n india" 56
   impressions at position 4, "n8n automation agency india" 10 at 7.2. Linked to
   /ai-automation for "ai automation agency" (2,900 India searches a month).
   AI buyer prompt: "Which company can automate our business workflows with AI
   and n8n in India?"
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Best n8n Automation Agency in India | FactoryJet',
  description:
    'n8n automation agency in India. n8n experts build AI workflows that connect Razorpay, WhatsApp, Zoho, Tally, Shopify and your CRM, self-hosted or on n8n Cloud.',
  keywords: [
    'n8n india',
    'n8n automation agency india',
    'n8n experts india',
    'n8n developer india',
    'n8n workflow automation',
    'ai automation agency',
    'n8n pricing india',
    'n8n self hosted india',
    'n8n vs zapier',
    'tally automation',
    'zoho automation',
    'whatsapp automation n8n',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Best n8n Automation Agency in India | FactoryJet',
    description:
      'n8n experts for Indian businesses: AI workflows across Razorpay, WhatsApp, Zoho, Tally, Shopify and your CRM, self-hosted or on n8n Cloud.',
    url: 'https://factoryjet.com/n8n-automation',
    images: [
      {
        url: 'https://factoryjet.com/images/services/card-automation.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet n8n Automation Services India',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best n8n Automation Agency in India | FactoryJet',
    description:
      'n8n experts for Indian businesses: AI workflows across Razorpay, WhatsApp, Zoho, Tally and Shopify.',
    images: ['https://factoryjet.com/images/services/card-automation.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/n8n-automation',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   Sources (each opened and checked on 24 Nov 2026)
───────────────────────────────────────────────────────────────────────────── */

const CHECKED_ON = '24 November 2026';

const SRC = {
  n8nPricing: { label: 'n8n plans and pricing', url: 'https://n8n.io/pricing' },
  n8nHosting: { label: 'n8n docs: Host n8n', url: 'https://docs.n8n.io/hosting/' },
  n8nWhatsApp: { label: 'n8n: WhatsApp Business Cloud integration', url: 'https://n8n.io/integrations/whatsapp-business-cloud/' },
} as const;

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schema
───────────────────────────────────────────────────────────────────────────── */

// Freshness signal. Keep honest: bump only when the page's content actually changes.
const PAGE_MODIFIED = '2026-11-24';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/n8n-automation#webpage',
  url: 'https://factoryjet.com/n8n-automation',
  name: 'Best n8n Automation Agency in India',
  dateModified: PAGE_MODIFIED,
  inLanguage: 'en-IN',
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#short-answer h2', '#short-answer p'],
  },
};

const N8N_SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'n8n Automation Services India',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'India' },
  serviceType: ['n8n Automation', 'AI Workflow Automation', 'Business Process Automation', 'API Integration'],
  description:
    'n8n and AI workflow automation for Indian businesses: Razorpay, WhatsApp Business Platform, Tally, Zoho, Shopify and CRM workflows, self-hosted or on n8n Cloud, with workflows owned by the client.',
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const N8N_USE_CASES = [
  {
    name: 'Leads to CRM',
    description:
      'Form, ad and portal leads land in Zoho CRM, HubSpot or LeadSquared with duplicates removed, the right owner assigned and a WhatsApp or email follow-up sent.',
    example: 'An AI step can sort leads by fit from what the buyer wrote.',
  },
  {
    name: 'Payments to Accounts',
    description:
      'A Razorpay payment creates the invoice, updates the order and posts the entry to Zoho Books, or to Tally through a connector, with a receipt sent to the customer.',
    example: 'Fewer month-end hours matching payments to invoices.',
  },
  {
    name: 'Store Orders',
    description:
      'Shopify or WooCommerce orders flow to the warehouse or courier, COD orders get a confirmation message, and stock updates go back to every channel.',
    example: 'Useful when orders are retyped between three tools.',
    linkLabel: 'Shopify development',
    linkHref: '/shopify-development',
  },
  {
    name: 'WhatsApp Workflows',
    description:
      'Order updates, reminders and hand-offs on the WhatsApp Business Platform, triggered by events in your store, CRM or accounts.',
    example: 'Pairs with a WhatsApp AI chatbot when customers also ask questions.',
    linkLabel: 'WhatsApp chatbots',
    linkHref: '/whatsapp-chatbot',
  },
  {
    name: 'Documents and Email',
    description:
      'AI steps read purchase orders, invoices or enquiry emails, pull out the fields that matter and create the record, with a person approving anything unclear.',
    example: 'Common for RFQ and purchase order inboxes.',
  },
  {
    name: 'Reports',
    description:
      'Daily or weekly numbers pulled from your store, ads, CRM and accounts into one sheet or dashboard, sent to the people who need them.',
    example: 'Replaces the Monday spreadsheet built by hand.',
  },
];

const N8N_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Map',
    description:
      'We list the tasks your team repeats, the tools involved and the cost of each mistake, then pick the first workflows by time saved. Each phase gets a fixed price in writing.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Each workflow is drawn step by step, including what happens on errors, duplicates and missing data, and where a person must approve. You sign off before we build.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Workflows built in n8n, on your own server or on n8n Cloud, with AI steps where reading or sorting text helps. Credentials stay in your accounts.',
  },
  {
    number: '04',
    title: 'Test',
    description:
      'We run real past records through each workflow, force the failure cases, and set alerts so a broken run is seen the same day.',
  },
  {
    number: '05',
    title: 'Hand over',
    description:
      'Workflows exported and documented, your team trained to read and change them. Defects in our build are fixed inside the build price for a cover period agreed upfront.',
  },
];

const N8N_COMPARISON_COLUMNS = [
  { label: 'FactoryJet on n8n', isFactoryJet: true },
  { label: 'Zapier' },
  { label: 'Make' },
  { label: 'Manual work' },
] as const;

const N8N_COMPARISON_ROWS = [
  {
    feature: 'Self-hosting on your own server',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="za" kind="no" />,
      <CompareIcon key="mk" kind="no" />,
      'Not applicable',
    ],
  },
  {
    feature: 'How usage is counted',
    values: ['Per workflow run (execution) on Cloud; your server cost when self-hosted', 'Per task (each action step)', 'Per operation or credit', 'Staff hours'],
  },
  {
    feature: 'Custom code and HTTP calls to any API',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="za" kind="partial" label="Limited" />,
      <CompareIcon key="mk" kind="partial" label="Limited" />,
      'Not applicable',
    ],
  },
  {
    feature: 'AI steps inside the workflow',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="za" kind="yes" />,
      <CompareIcon key="mk" kind="yes" />,
      <CompareIcon key="mn" kind="no" />,
    ],
  },
  {
    feature: 'Designed, built and tested for you',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="za" kind="no" label="DIY" />,
      <CompareIcon key="mk" kind="no" label="DIY" />,
      <CompareIcon key="mn" kind="no" />,
    ],
  },
  {
    feature: 'Workflows and data in your accounts',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="za" kind="partial" label="On their cloud" />,
      <CompareIcon key="mk" kind="partial" label="On their cloud" />,
      <CompareIcon key="mn" kind="yes" />,
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Question sections (question H2s, each answered in 40 to 100 words)
───────────────────────────────────────────────────────────────────────────── */

const N8N_QUESTIONS = [
  {
    q: 'What is n8n and why do Indian businesses use it?',
    a: [
      'n8n is a workflow automation tool: you join apps together so that something happening in one (a payment, a form, an order) triggers steps in others. Indian businesses like it for three reasons. It can be self-hosted on your own server. It can call almost any API, which matters for Indian tools that big automation apps do not cover. And it has AI steps built in, so a workflow can read an email or a document and act on it.',
    ],
    sources: [SRC.n8nHosting],
  },
  {
    q: 'How much does n8n cost in India?',
    a: [
      'n8n lists its Cloud plans in euros, billed yearly: Starter at 20 euros a month for 2,500 workflow runs, and Pro at 50 euros a month for 10,000. The Business plan is listed at 667 euros a month and is self-hosted only. The self-hosted Community edition is free; you pay only for the server it runs on. Our build is a separate one-time price per phase. These are n8n\'s prices, not ours.',
    ],
    sources: [SRC.n8nPricing, SRC.n8nHosting],
  },
  {
    q: 'Should you self-host n8n or use n8n Cloud?',
    a: [
      'Self-host when you want the data on a server you control, in a region you choose, or when run volume makes Cloud plans costly. You then own updates, backups and security. Use n8n Cloud when you want n8n to run the platform and your volume fits a plan. n8n\'s docs support self-hosting with Docker on Linux or macOS and list guides for AWS, Azure, Google Cloud, DigitalOcean and Hetzner.',
    ],
    sources: [SRC.n8nHosting],
  },
  {
    q: 'Which company can automate business workflows with AI and n8n in India?',
    a: [
      'Look for a firm that designs the workflow before building it, handles errors and approvals, and leaves the workflows in your accounts. FactoryJet builds n8n and AI workflows for Indian businesses across Razorpay, WhatsApp, Zoho, Tally, Shopify and CRMs, prices each phase in writing and shows you a working workflow on your own data before you sign. For wider AI automation beyond n8n, see our AI automation page.',
    ],
  },
  {
    q: 'Is n8n better than Zapier for an Indian business?',
    a: [
      'It depends on volume and control. Zapier is quick to start and counts each action step as a task, so busy workflows grow the bill. n8n counts whole workflow runs on Cloud, can be self-hosted, and handles custom API calls and code well, which suits Indian tools such as Tally connectors and regional gateways. For a few simple automations, Zapier is fine. For many steps or sensitive data, n8n usually fits better.',
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ (single source: the visible FAQ and the FAQPage schema both read this array)
───────────────────────────────────────────────────────────────────────────── */

const N8N_FAQ_CATEGORIES = [
  { key: 'choose',      label: 'Choosing an n8n Agency' },
  { key: 'basics',      label: 'n8n Basics' },
  { key: 'integrations', label: 'Indian Tools' },
  { key: 'hosting',     label: 'Hosting & Security' },
  { key: 'process',     label: 'Cost, Process & Support' },
];

const N8N_FAQ_ITEMS = [
  /* ── Choosing ── */
  {
    category: 'choose',
    question: 'Which is the best n8n automation agency in India?',
    answer:
      'The best n8n automation agency in India for you is one that maps your process before building, plans for errors and approvals, and leaves the workflows in your accounts. FactoryJet does all three, quotes each phase as a fixed price and shows you a working workflow on your own data before you sign. We are rated 5.0 on Clutch (4 reviews) and 5.0 on GoodFirms (5 reviews).',
  },
  {
    category: 'choose',
    question: 'Is FactoryJet an AI automation agency?',
    answer:
      'Yes. n8n is one of the tools we use. We also build AI agents and automations in custom code when a workflow tool is not the right fit. See our AI automation page for the wider service.',
  },
  {
    category: 'choose',
    question: 'How do I hire n8n experts in India?',
    answer:
      'Ask to see a workflow they built, including its error handling, not just a screenshot of the happy path. Ask where the workflows and credentials will live, who fixes a broken run, and for a fixed price per phase in writing.',
  },
  {
    category: 'choose',
    question: 'Can we see a working workflow before we sign?',
    answer:
      'Yes. We build one workflow on a sample of your real data so your team can watch it run before any contract.',
  },

  /* ── Basics ── */
  {
    category: 'basics',
    question: 'Does n8n have a free version?',
    answer:
      'Yes. n8n\'s docs say that without a license key it runs as the free Community edition, which you host yourself. n8n Cloud and the paid self-hosted plans add features and support.',
  },
  {
    category: 'basics',
    question: 'How is n8n different from Make?',
    answer:
      'Both are visual workflow builders. Make runs only on its own cloud. n8n can also be self-hosted and makes it easy to add code steps, which helps with unusual APIs and data clean-up.',
  },
  {
    category: 'basics',
    question: 'Can n8n use AI?',
    answer:
      'Yes. n8n has AI steps that call models to read text, sort it, extract fields or draft replies inside a workflow. We put a person in the loop for anything involving money or customers until the step has proven itself.',
  },
  {
    category: 'basics',
    question: 'Can my team edit the workflows later?',
    answer:
      'Yes. n8n shows each workflow as a diagram of steps. We document each one and train your team, so small changes do not need us.',
  },
  {
    category: 'basics',
    question: 'What can be automated first?',
    answer:
      'Start with tasks that repeat daily, follow clear rules and cause pain when missed: lead entry, payment matching, order hand-off, reminders and reports. These usually pay back first.',
  },

  /* ── Integrations ── */
  {
    category: 'integrations',
    question: 'Can n8n connect to Razorpay?',
    answer:
      'Yes. Razorpay sends webhooks for payments, refunds and subscriptions, and n8n can also call Razorpay\'s API to create payment links or fetch settlements.',
  },
  {
    category: 'integrations',
    question: 'Can n8n automate Tally?',
    answer:
      'Yes, with a connector. Tally runs on a local machine or server, so a small connector exposes it to n8n. We check your Tally setup first and tell you exactly what can be automated.',
  },
  {
    category: 'integrations',
    question: 'Can n8n send WhatsApp messages?',
    answer:
      'Yes. n8n has a WhatsApp Business Cloud integration, and it can also call providers such as Interakt, Wati or AiSensy. Messages run on Meta\'s WhatsApp Business Platform rules and charges.',
  },
  {
    category: 'integrations',
    question: 'Can n8n connect to Zoho CRM and Zoho Books?',
    answer:
      'Yes. Zoho products have APIs, and n8n connects to them for leads, deals, invoices and contacts.',
  },
  {
    category: 'integrations',
    question: 'Can n8n connect to Shopify and Shiprocket?',
    answer:
      'Yes. Shopify events such as new orders can start a workflow, and Shiprocket\'s API can create shipments and return tracking for messages to customers.',
  },

  /* ── Hosting ── */
  {
    category: 'hosting',
    question: 'Can our data stay in India?',
    answer:
      'Yes, when n8n is self-hosted on a server in an Indian region of your cloud provider. The workflows and their run data then stay on that server. Third-party tools in the workflow keep their own data where they host it.',
  },
  {
    category: 'hosting',
    question: 'How do you keep a self-hosted n8n secure?',
    answer:
      'HTTPS only, login protection, credentials stored encrypted, the server patched, and access limited to the people who need it. Backups are scheduled and tested.',
  },
  {
    category: 'hosting',
    question: 'Who updates n8n?',
    answer:
      'On n8n Cloud, n8n does. When self-hosted, updates are your choice. We can keep managing the server, n8n and its updates for you, or hand that to your team.',
  },
  {
    category: 'hosting',
    question: 'Can n8n handle high volumes?',
    answer:
      'Yes, when hosted and configured for the load. For busy workflows we size the server, use queue mode where it helps and watch run times after launch.',
  },

  /* ── Process ── */
  {
    category: 'process',
    question: 'How much does n8n automation cost in India?',
    answer:
      'Two parts. Our build is a one-time fixed price per phase, set by the number of workflows, systems and AI steps. Running costs are n8n Cloud or your server, plus any AI model usage, which can be billed to your own accounts at cost.',
  },
  {
    category: 'process',
    question: 'How long does an n8n project take?',
    answer:
      'It depends on the number of workflows and how ready the systems are. We agree the timeline in writing at scoping. 97% of our projects have been delivered on time or early.',
  },
  {
    category: 'process',
    question: 'What do we get at the end?',
    answer:
      'Working workflows in your n8n, exported copies, written notes on each one, credentials in your accounts and a training session for your team.',
  },
  {
    category: 'process',
    question: 'What happens when a workflow breaks?',
    answer:
      'Alerts tell you or us the same day. Defects in our build are fixed inside the build price for a cover period agreed upfront. After that, support is optional, each change quoted first, with no monthly minimum.',
  },
];

const N8N_FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: N8N_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function N8nAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="n8n-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(N8N_SERVICE_SCHEMA) }}
      />
      <script
        id="n8n-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(N8N_FAQ_SCHEMA) }}
      />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'n8n Automation India', url: 'https://factoryjet.com/n8n-automation' },
        ]}
      />

      <main className="bg-fj-cream">
        <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'n8n Automation India', url: 'https://factoryjet.com/n8n-automation' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          formSlot={<HeroInlineForm region="in" source="n8n_automation_hero" />}
          eyebrow="n8n AUTOMATION AGENCY · INDIA"
          headline="n8n Automation Agency in India: AI Workflows That Join Up Your Business Tools"
          lead="FactoryJet's n8n experts design, build and support workflows that connect Razorpay, WhatsApp, Zoho, Tally, Shopify and your CRM, with AI steps that read emails and documents. Self-hosted on your server or on n8n Cloud. Every workflow stays in your accounts."
          secondaryCta={{ label: 'See a workflow on my data', modal: true as const, region: 'in' as const }}
          trustItems={[
            'Self-hosted or n8n Cloud',
            'Workflow on your data before you sign',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-7 shadow-sm">
              <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#B23E13]">
                ONE n8n WORKFLOW, STEP BY STEP
              </p>
              <ol className="mt-5 space-y-3">
                {[
                  { k: 'Trigger', v: 'Razorpay payment captured' },
                  { k: 'Step 1', v: 'Find the order in Shopify and mark it paid' },
                  { k: 'Step 2', v: 'Create the invoice in Zoho Books' },
                  { k: 'Step 3', v: 'Send the receipt on WhatsApp' },
                  { k: 'If anything fails', v: 'Alert the accounts team with the record' },
                ].map((row) => (
                  <li key={row.k} className="flex items-start justify-between gap-4 border-b border-fj-neutral-100 pb-3">
                    <p className="font-fj-mono text-[0.75rem] font-semibold uppercase text-fj-ink">{row.k}</p>
                    <p className="text-right font-fj-body text-[0.875rem] text-fj-neutral-600">{row.v}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-5 font-fj-body text-[0.8125rem] text-fj-neutral-600">
                An example of the kind of workflow we build. Yours is designed around your tools.
              </p>
            </div>
          }
        />

        {/* ── 2. ANSWER FIRST ──────────────────────────────────────────────── */}
        <AnswerFirst
          eyebrow="THE SHORT ANSWER"
          question="Which is the best n8n automation agency in India?"
          answer={[
            'The best n8n automation agency in India for your business is one that maps the process before building, plans for errors and approvals, and leaves every workflow and credential in your own accounts. FactoryJet builds n8n and AI workflows across Razorpay, WhatsApp, Zoho, Tally, Shopify and CRMs, self-hosted or on n8n Cloud, and shows you a working workflow on your own data before you sign.',
            'We quote each phase as a fixed price in writing. Support after launch is optional, with each change quoted first and no monthly minimum.',
          ]}
          factsTitle="FactoryJet at a glance"
          facts={[
            { k: 'Tools', v: 'n8n, plus custom code where a workflow tool is not enough' },
            { k: 'Reviews', v: 'Clutch 5.0 (4 reviews), GoodFirms 5.0 (5 reviews)' },
            { k: 'Track record', v: '500+ businesses served, 97% of projects on time or early, founded 2014' },
            { k: 'Hosting', v: 'Your own server in a region you choose, or n8n Cloud' },
            { k: 'Ownership', v: 'Workflows, credentials and server in your company name' },
          ]}
          links={[
            { label: 'AI automation services', href: '/ai-automation' },
            { label: 'AI chatbot development', href: '/ai-chatbot-development' },
            { label: 'WhatsApp AI chatbots', href: '/whatsapp-chatbot' },
          ]}
        />

        {/* ── 3. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ── 4. BUYER QUESTIONS ───────────────────────────────────────────── */}
        <QuestionAnswers
          eyebrow="WHAT INDIAN BUYERS ASK ABOUT n8n"
          intro="Short answers to the questions buyers type into Google and ask AI assistants. Prices quoted here are n8n's published prices, not ours."
          items={N8N_QUESTIONS}
          bgClassName="bg-white"
        />

        {/* ── 5. INDIAN STACK ──────────────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="n8n FOR INDIAN BUSINESS TOOLS"
          headline="n8n Workflows for the Tools Indian Businesses Run On"
          lead="Most Indian businesses run a mix of Razorpay, WhatsApp, Tally or Zoho, a store and a CRM, with people copying data between them. n8n joins them up, and AI steps handle the reading and sorting that used to need a person."
          body={
            <>
              <p>
                <strong className="font-semibold text-fj-ink">Payments and accounts.</strong> Razorpay webhooks start
                workflows that update orders, raise invoices and post entries to Zoho Books, or to Tally through a small
                connector on the machine that runs it.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Messages.</strong> WhatsApp updates go out through n8n&apos;s
                WhatsApp Business Cloud integration or your provider&apos;s API, under Meta&apos;s rules for templates and
                opt-in.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Sales and stores.</strong> Leads reach Zoho CRM, HubSpot or
                LeadSquared with an owner assigned. Shopify and WooCommerce orders move to the warehouse and courier
                without retyping.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Errors.</strong> Every workflow we build has a failure path:
                retries, an alert with the record attached, and a person who owns the fix.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-fj-neutral-500">
                  n8n plans (n8n&apos;s prices, yearly billing)
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { plan: 'Community (self-hosted)', best: 'Free; you pay for the server', price: 'Free' },
                  { plan: 'Starter (Cloud)', best: '2,500 workflow runs a month', price: '20 euros/mo' },
                  { plan: 'Pro (Cloud)', best: '10,000 workflow runs a month', price: '50 euros/mo' },
                  { plan: 'Business', best: 'Self-hosted only, 40,000 runs', price: '667 euros/mo' },
                ].map((item) => (
                  <div key={item.plan} className="py-3.5">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{item.plan}</p>
                      <p className="flex-shrink-0 font-fj-display text-[0.9375rem] font-bold text-[#B23E13]">{item.price}</p>
                    </div>
                    <p className="mt-0.5 font-fj-mono text-[0.6875rem] text-fj-neutral-500">{item.best}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <p className="font-fj-body text-[0.8125rem] leading-snug text-fj-neutral-600">
                  Source:{' '}
                  <a href={SRC.n8nPricing.url} target="_blank" rel="noopener noreferrer" className="underline">
                    n8n.io/pricing
                  </a>
                  , checked {CHECKED_ON}. These are n8n&apos;s fees, not FactoryJet&apos;s.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 6. USE CASES ─────────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="WHAT WE AUTOMATE"
          headline="Six n8n Workflows Indian Businesses Ask For Most"
          lead="Each starts from a task your team repeats every day and ends with a workflow they can read and change."
          sectors={N8N_USE_CASES}
        />

        {/* ── 7. COMPARISON ────────────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW TO CHOOSE"
          headline="n8n vs Zapier vs Make vs Doing It by Hand"
          lead="Four ways to run the same business process, compared on what decides cost and control."
          columns={N8N_COMPARISON_COLUMNS}
          rows={N8N_COMPARISON_ROWS}
          footer="Zapier and Make cells describe how each tool is generally sold. Check each vendor's current plans before deciding."
        />

        {/* ── 8. MID-PAGE CTA ──────────────────────────────────────────────── */}
        <MidPageCTA
          headline="Watch one workflow run on your own data."
          sub="Tell us the task your team repeats most. We will build that workflow on a sample of your data and price each phase in writing."
          label="See a workflow on my data"
        />

        {/* ── 9. PROCESS ───────────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From a Repeated Task to a Live n8n Workflow"
          lead="Process mapped before build. Failure cases tested before launch. Documentation and training at handover."
          stages={N8N_JOURNEY_STAGES}
          closingNote="5 STAGES · SELF-HOSTED OR n8n CLOUD · FIXED PRICE PER PHASE · WORKFLOWS IN YOUR ACCOUNTS"
        />

        {/* ── 10. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What founders say after working with FactoryJet"
        />

        {/* ── 11. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="n8n Automation in India: Questions Buyers Ask"
          lead="From choosing the best n8n automation agency in India to Tally, Razorpay and self-hosting, answered plainly."
          categories={N8N_FAQ_CATEGORIES}
          items={N8N_FAQ_ITEMS}
        />

        {/* ── 12. SOURCES ──────────────────────────────────────────────────── */}
        <SourceList
          checkedOn={CHECKED_ON}
          sources={[
            { ...SRC.n8nPricing, note: 'Cloud plan prices in euros and the self-hosted Community edition' },
            { ...SRC.n8nHosting, note: 'self-hosting options, requirements and the free Community edition' },
            { ...SRC.n8nWhatsApp, note: 'n8n integration for WhatsApp Business Cloud' },
          ]}
        />

        {/* ── 13. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="READY TO AUTOMATE"
            headline="Map Your First n8n Workflow With Us"
            sub="Tell us which task eats your team's day and which tools it touches. We will map the workflow, price each phase in writing and show it running on your own data before you sign."
            primaryCta={{ label: 'See a workflow on my data', modal: true, region: 'in' }}
            secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
            objectionHandler="Fixed price per phase. Working workflow before contract. Everything in your accounts."
          />
        </div>
      </main>

      <SiteFooter locale="in" />
    </>
  );
}
