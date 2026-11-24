import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import ComparisonTable from '@/components/v2/ComparisonTable';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Best AI Automation Agency in India | FactoryJet',
  description:
    'AI automation services for businesses across India: n8n workflows, Tally, Zoho, Razorpay and WhatsApp. Shown on your own records before you sign.',
  keywords: [
    'AI automation agency',
    'AI automation agency in India',
    'AI automation services',
    'AI automation services in India',
    'AI automation company',
    'best AI automation agency in India',
    'Tally AI automation',
    'Zoho AI agent',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Best AI Automation Agency in India | FactoryJet',
    description:
      'Workflow automation with AI built around Tally, Zoho, Razorpay and WhatsApp. Fixed price in writing. You own the accounts and the code.',
    url: 'https://factoryjet.com/ai-automation',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet AI automation agency in India',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best AI Automation Agency in India | FactoryJet',
    description:
      'AI automation services for Indian businesses. Workflows shown on your own records before you sign.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/ai-automation',
    languages: {
      'en-IN': 'https://factoryjet.com/ai-automation',
      'x-default': 'https://factoryjet.com/ai-automation',
    },
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
   Data
───────────────────────────────────────────────────────────────────────────── */

const PAGE_MODIFIED = '2026-11-24';

const AUTO_SERVICES = [
  {
    name: 'Workflow automation',
    text: 'Rules that move a record between your tools when something happens, such as a paid order, a signed quote or a form fill. Built in n8n, Make or Zapier, in your own accounts.',
  },
  {
    name: 'Document reading',
    text: 'AI reads invoices, purchase orders, forms and scans, pulls out the fields and checks them against your records before anything is posted.',
  },
  {
    name: 'AI agents for steps that need a decision',
    text: 'Where a person has to read, judge and act today, an agent can draft the action inside limits you set. Anything unclear goes to a person.',
  },
  {
    name: 'Lead and support response',
    text: 'Enquiries from forms, email and chat get sorted, routed and answered from your own data. A person takes over when the case needs one.',
  },
  {
    name: 'Data sync and reporting',
    text: 'Figures from accounting, ads, sales and operations tools land in one place on a fixed day, with gaps flagged instead of hidden.',
  },
  {
    name: 'Automation audit',
    text: 'A review of how work moves today, a ranked list of what to automate first, and a note on which steps need no AI at all.',
  },
];

const INDIA_BLOCKS = [
  {
    name: 'Tally',
    kicker: 'Tally AI automation',
    text: 'TallyPrime can take requests as XML over HTTP once its HTTP server is switched on in settings. An n8n workflow can then create a voucher or read a ledger. Our n8n page lists Razorpay payment to Tally voucher flows. When Tally sits on an office PC, network access to that machine is the first thing we check.',
  },
  {
    name: 'Zoho chatbot',
    kicker: 'Zoho chatbot and WhatsApp',
    text: 'A WhatsApp or website chatbot can pass qualified leads into Zoho CRM with the conversation attached. Our WhatsApp chatbot page lists Zoho CRM among its connectors. Which Zoho edition and fields you use is confirmed at scoping.',
  },
  {
    name: 'Zoho AI agent',
    kicker: 'Zoho AI agent',
    text: 'The approach is an agent that reads each new Zoho CRM lead, checks it against your rules, drafts the first reply and logs the draft for a person to approve. We describe this as a design we would propose. Whether your Zoho setup fits it is checked at scoping.',
  },
];

const AUTO_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Enterprise consultancy' },
  { label: 'Solo n8n freelancer' },
  { label: 'Do it yourself in a no-code tool' },
] as const;

const AUTO_COMPARISON_ROWS = [
  {
    feature: 'Best match',
    values: [
      'Workflows that cross several systems or read documents',
      'Many departments rolled out in one programme',
      'One clearly described workflow',
      'Two apps joined by one trigger',
    ],
  },
  {
    feature: 'Indian tools (Tally, Zoho, Razorpay, WhatsApp)',
    values: [
      'n8n workflows for these, fit checked at scoping',
      'Often handled through a partner or an add-on module',
      'Depends on what that person has already connected',
      'Limited to the connectors the tool ships with',
    ],
  },
  {
    feature: 'Proof before you sign',
    values: [
      'Workflow run on a few of your own records',
      'A paid assessment phase is common',
      'A sample or screen recording is common',
      'You build and test it yourself',
    ],
  },
  {
    feature: 'Who keeps it running',
    values: [
      'The agency, under an optional support plan',
      'Usually a separate maintenance contract',
      'Whoever built it, while they stay available',
      'Your own team',
    ],
  },
  {
    feature: 'How the work is priced',
    values: [
      'One fixed price per phase, in writing',
      'A quote for the whole programme',
      'An hourly rate or a quote per job',
      'A monthly plan for the tool',
    ],
  },
  {
    feature: 'Whose accounts hold the workflows',
    values: [
      'Yours',
      'Set by the contract',
      'Worth asking before you start',
      'Yours',
    ],
  },
];

const AUTO_COST_ROWS = [
  { tier: 'AI-powered RPA, small business', range: '₹5 lakh to ₹12 lakh' },
  { tier: 'AI-powered RPA, medium enterprise', range: '₹12 lakh to ₹25 lakh' },
  { tier: 'AI-powered RPA, large enterprise', range: '₹25 lakh to ₹55 lakh' },
  { tier: 'Yearly upkeep for AI agents (Sigosoft guide)', range: '15 to 30 percent of the build' },
];

const AUTO_STEPS = [
  {
    step: '01',
    title: 'Map one workflow',
    text: 'One call to learn the trigger, the tools involved, the weekly volume and who deals with the odd cases at present.',
  },
  {
    step: '02',
    title: 'Run it on your records',
    text: 'Before you sign, the workflow runs on a few of your real records, with names removed if you prefer, so you see what it does and where it hands off to a person.',
  },
  {
    step: '03',
    title: 'Fixed price and dates',
    text: 'You get the scope, one fixed price and the delivery dates in writing. Payments follow milestones.',
  },
  {
    step: '04',
    title: 'Build and test in your accounts',
    text: 'We build in your accounts, test against real edge cases from your records, and switch it on with alerts to Slack or email for any failed step.',
  },
  {
    step: '05',
    title: 'Defect cover, then optional support',
    text: 'Defects found after launch are fixed inside the build price for a cover period agreed up front. Later changes are quoted and approved first.',
  },
];

const AUTO_FAQS = [
  /* ── Choosing an agency ── */
  {
    category: 'choosing',
    question: 'Which is the best AI automation agency in India?',
    answer:
      'Published lists weigh company size differently, so none is a neutral ruling. For a mid-sized business with a few repeated workflows, we would name FactoryJet: a single workflow built across your tools, run on your records before you sign, with the price written down. If you are rolling automation out across many departments, a large IT services firm may fit better.',
  },
  {
    category: 'choosing',
    question: 'What are the top 5 automation companies in India?',
    answer:
      'Published top-five lists mix large IT services firms, enterprise chatbot platforms and smaller agencies, so they are hard to compare. Sort by what you need first: a platform, a consultancy or a team that builds to order. Then ask each firm the same questions about testing, ownership and price. Our longer guide to the best AI automation agencies in India is on the blog.',
  },
  {
    category: 'choosing',
    question: 'Which AI automation company in India is right for a small or mid-sized business?',
    answer:
      'Look for a team that asks about your process before it asks about tools, runs the workflow on your records before you sign, and fixes the price in writing. Large enterprise vendors tend to fit large programmes. A smaller team fits the single workflow your business needs running soon.',
  },
  {
    category: 'choosing',
    question: 'Which company can automate our business workflows with AI and n8n in India?',
    answer:
      'Several agencies build on n8n. FactoryJet builds n8n workflows for Indian businesses and adds AI where a step has to read a document or an email. Our n8n automation page lists the Razorpay, WhatsApp, Zoho and Tally flows in detail.',
  },
  {
    category: 'choosing',
    question: 'What should I ask an AI automation company before hiring it?',
    answer:
      'Ask who fixes the workflow when an app changes its connection. Ask to watch it run on your own records. Find out whose accounts hold the workflows, whether the price is fixed in writing, and whether each step is documented well enough for another developer to take over.',
  },
  {
    category: 'choosing',
    question: 'Which company is best for AI in India?',
    answer:
      'That depends on the job. Platform companies suit customer service at scale, large consultancies suit transformation programmes, and build-to-order agencies suit custom workflows. For automation inside your own tools, shortlist agencies that build to order and compare how each one tests its work.',
  },
  {
    category: 'choosing',
    question: 'Is there a good AI automation agency for businesses in Mumbai, Bengaluru, Delhi NCR, Pune, Hyderabad, Chennai or Ahmedabad?',
    answer:
      'Yes. We take on automation projects for businesses across India, and each one begins with a scoping call. Outline the workflow there and we will say whether it needs AI or plain rules will do.',
  },
  /* ── Cost ── */
  {
    category: 'cost',
    question: 'How much do AI automation services cost in India?',
    answer:
      'A May 2026 guide from an Indian software firm puts AI-powered RPA at ₹5 lakh to ₹12 lakh for a small business, ₹12 lakh to ₹25 lakh for a medium enterprise and ₹25 lakh to ₹55 lakh for a large one. These are vendor figures, so treat them as rough. After the scoping call, FactoryJet sends one fixed written price.',
  },
  {
    category: 'cost',
    question: 'What does it cost to keep an automation running?',
    answer:
      'A guide updated 10 November 2026, written about AI agents and chatbots, suggests budgeting 15 to 30 percent of the build cost each year for upkeep. Automation workflows differ, so use that as a rough guide only. Your own figure depends on how many runs and model calls the workflow makes.',
  },
  {
    category: 'cost',
    question: 'What makes one automation project cost more than another?',
    answer:
      'How many workflows there are, how many tools each one touches, whether a step has to read documents or emails, how many exceptions need a person, and whether your software offers a clean way in. The 10 November guide notes that connecting Tally or a customised ERP is often the largest line item.',
  },
  {
    category: 'cost',
    question: 'Is there a rate card for AI automation?',
    answer:
      'No. The workflow decides the price. FactoryJet quotes one fixed price per phase in writing after a short scoping call, with payments tied to milestones.',
  },
  {
    category: 'cost',
    question: 'Is hiring an AI automation agency worth it?',
    answer:
      'It pays when the same person repeats the same steps across several tools every day, or when errors in those steps cost money. It pays less for a single trigger between two apps, which a no-code tool handles. A good agency will tell you which case you are in.',
  },
  {
    category: 'cost',
    question: 'Can I do AI automation for free?',
    answer:
      'For a simple trigger between two apps, yes. Zapier and Make have free plans, and n8n can be self-hosted. Costs appear when a workflow crosses several systems, reads documents, needs error handling, or has to be fixed whenever an app changes its connection.',
  },
  /* ── What it is ── */
  {
    category: 'basics',
    question: 'What is an AI automation agency?',
    answer:
      'An AI automation agency connects the tools you already use so data moves between them without retyping, and adds AI where a step has to read or judge something. It designs the workflow, builds it in your accounts and supports it after launch.',
  },
  {
    category: 'basics',
    question: 'What do AI automation services include?',
    answer:
      'Workflow automation, document reading, AI agents for steps that need a decision, lead and support response, reporting, and an audit that ranks what to automate first. Each starts as one scoped workflow.',
  },
  {
    category: 'basics',
    question: 'How is AI automation different from an AI agent?',
    answer:
      'Automation follows fixed steps: when this happens, do that. An agent reads, decides between several actions and acts inside limits you set. If the steps are the same every time, automate them. If someone has to read and decide, that is agent work. Our AI agent development page covers agents.',
  },
  {
    category: 'basics',
    question: 'What is the difference between an LLM and an agent?',
    answer:
      'An LLM is the language model that reads and writes text. An agent is software built around a model that can also take actions, such as updating a record or sending a draft for approval. Many automations use a model for one step and fixed rules for the rest.',
  },
  {
    category: 'basics',
    question: 'Which workflows suit AI automation best?',
    answer:
      'Frequent, rule-based work that crosses two or more systems. Common ones are order sync, invoice matching, lead routing, support triage and month-end reporting. If one person copies the same fields between the same tools every day, it is a strong candidate.',
  },
  {
    category: 'basics',
    question: 'Do I need AI automation or a custom AI build?',
    answer:
      'Automation suits repeating work across your tools. A custom AI build suits cases where answers must come from your private documents or the software itself needs a new capability. Our AI development page covers the second case.',
  },
  {
    category: 'basics',
    question: 'Do I need an automation agency or a chatbot?',
    answer:
      'A chatbot handles questions from customers. Automation handles the back-office steps after the conversation, such as writing the order into your books. Many businesses need both, and our AI chatbot development page covers the first.',
  },
  /* ── Tally, Zoho and Indian tools ── */
  {
    category: 'india',
    question: 'Can AI automate Tally?',
    answer:
      'Often, yes. TallyPrime can accept XML over HTTP once its HTTP server is enabled, according to Tally\'s own help pages, and an n8n workflow can send or read data that way. Our n8n page lists Razorpay payment to Tally voucher flows. Your Tally version and network setup are checked at scoping.',
  },
  {
    category: 'india',
    question: 'Who can build AI automation for Tally and Zoho for an Indian SME?',
    answer:
      'Look for a team that has worked with both systems, or a pair of specialists who coordinate. FactoryJet builds n8n workflows around Tally and Zoho CRM and Books, and we confirm at scoping that your setup fits before quoting.',
  },
  {
    category: 'india',
    question: 'Can you build a Zoho chatbot?',
    answer:
      'We build WhatsApp and website chatbots that can pass leads into Zoho CRM. Our WhatsApp chatbot page lists Zoho CRM as a connector. The chatbot itself is built on its own platform and sends data to Zoho, so the scope covers both ends.',
  },
  {
    category: 'india',
    question: 'What is a Zoho AI agent?',
    answer:
      'It is an agent that works with your Zoho data, for example by reading new CRM leads and drafting a reply for a person to approve. We would propose it as a workflow around your existing Zoho setup, and we check at scoping that your plan and fields allow it.',
  },
  {
    category: 'india',
    question: 'Can you connect Razorpay and WhatsApp to my accounts?',
    answer:
      'Yes. Our n8n automation page lists a flow where a successful Razorpay payment creates an invoice record, sends a WhatsApp confirmation and updates the CRM. The exact chain for your business is agreed at scoping.',
  },
  {
    category: 'india',
    question: 'Does AI automation handle GST invoicing?',
    answer:
      'Our n8n automation page describes a flow where a Razorpay payment creates a GST-compliant invoice in Tally. The tax treatment itself stays with your accountant, and we do not replace that advice.',
  },
  /* ── How it works ── */
  {
    category: 'how',
    question: 'How can I automate my business?',
    answer:
      'Pick one task to start with. Write down what starts it, which tools it touches, how often it runs and who handles it today. Automate the one that runs most often and causes the most errors, measure it for a month, then pick the next.',
  },
  {
    category: 'how',
    question: 'How does a FactoryJet automation project run?',
    answer:
      'A scoping call, then the workflow running on a few of your own records before you sign. Then one fixed price and dates in writing, build and test in your accounts, and defect cover for an agreed period with optional support afterwards.',
  },
  {
    category: 'how',
    question: 'Which tools do you build in?',
    answer:
      'We build in n8n, Make and Zapier, with language models for steps that read text. We connect tools such as HubSpot, Salesforce, Shopify, QuickBooks, Xero, NetSuite and Slack, and for India the n8n page lists Razorpay, WhatsApp, Zoho and Tally. Anything with an API or webhooks can usually be connected.',
  },
  {
    category: 'how',
    question: 'Is n8n, Make or Zapier best for AI automation?',
    answer:
      'Zapier is the easiest for simple, low-volume triggers. Make handles branching and data shaping well. n8n suits higher volume, custom code and teams that want to host it themselves. We pick per workflow and tell you why on the scoping call.',
  },
  {
    category: 'how',
    question: 'Is my business data safe in an automated workflow?',
    answer:
      'We limit what each workflow can see and change, keep keys out of code, and alert you on any failed step. Ask every agency you shortlist for a written note on where your data travels and which model provider sees it.',
  },
  {
    category: 'how',
    question: 'Who owns the workflows and the code?',
    answer:
      'You do. Workflows live in your own n8n, Make or Zapier account, and model usage bills to your own provider account. Support after launch is optional, and another developer can take over because every step is documented.',
  },
];

const AUTO_FAQ_CATEGORIES = [
  { key: 'choosing', label: 'Choosing an Agency' },
  { key: 'cost', label: 'Cost' },
  { key: 'basics', label: 'What It Is' },
  { key: 'india', label: 'Tally, Zoho and Indian Tools' },
  { key: 'how', label: 'How It Works' },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD
───────────────────────────────────────────────────────────────────────────── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/ai-automation#webpage',
  url: 'https://factoryjet.com/ai-automation',
  name: 'Best AI Automation Agency in India | FactoryJet',
  inLanguage: 'en-IN',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '#short-answer'] },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/ai-automation#service',
  name: 'AI automation',
  serviceType: 'AI automation services',
  areaServed: { '@type': 'Country', name: 'India' },
  url: 'https://factoryjet.com/ai-automation',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: AUTO_FAQS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Small local layout helpers
───────────────────────────────────────────────────────────────────────────── */

function Section({ children, tinted = false }: { children: ReactNode; tinted?: boolean }) {
  return (
    <section className={`${tinted ? 'bg-white' : 'bg-fj-cream'} py-12 md:py-16`}>
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">{children}</div>
    </section>
  );
}

function SectionHead({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <>
      <p className="fj-eyebrow">{eyebrow}</p>
      <h2 className="mt-3 max-w-[760px] font-fj-display text-[1.625rem] font-extrabold leading-[1.15] tracking-[-0.03em] text-fj-ink md:text-[2.25rem]">
        {children}
      </h2>
    </>
  );
}

const PROSE = 'font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600';
const LINK = 'font-semibold text-[#B23E13] underline underline-offset-2';

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function AiAutomationIndiaPage() {
  const crumbs = [
    { name: 'Home', url: 'https://factoryjet.com' },
    { name: 'AI Automation', url: 'https://factoryjet.com/ai-automation' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema items={crumbs} />

      <main className="bg-fj-cream">
        <Breadcrumbs items={crumbs} />

        {/* 1. HERO */}
        <section className="bg-fj-cream pb-10 pt-6 md:pb-14 md:pt-10">
          <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-10 px-6 md:px-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <p className="fj-eyebrow">AI AUTOMATION AGENCY · INDIA</p>
              <h1 className="mt-3 max-w-[22ch] font-fj-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-fj-ink md:text-[2.75rem]">
                Best AI Automation Agency in India for Tally, Zoho and Everyday Workflows
              </h1>
              <p className="mt-5 max-w-[56ch] font-fj-body text-[1.125rem] leading-[1.65] text-fj-neutral-600">
                We connect the tools your team already uses, add AI to the steps that need reading or judging, and run
                each workflow on your own records before you sign.
              </p>
              <ul className="mt-6 space-y-2 font-fj-body text-[0.9375rem] text-fj-neutral-600">
                <li>
                  Rated 5.0 on{' '}
                  <a className={LINK} href="https://clutch.co/profile/factoryjet-private" rel="noopener">
                    Clutch from 4 reviews
                  </a>{' '}
                  and 5.0 on{' '}
                  <a className={LINK} href="https://www.goodfirms.co/company/factoryjet-private-limited" rel="noopener">
                    GoodFirms from 5 reviews
                  </a>
                </li>
                <li>One fixed price per phase, written down before work starts</li>
                <li>Workflows live in your accounts, and you own the code</li>
              </ul>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 shadow-sm">
                <p className="font-fj-display text-[1.25rem] font-bold leading-snug text-fj-ink">
                  Name one slow, repeated task. We tell you if automation fits.
                </p>
                <HeroInlineForm
                  region="in"
                  source="ai_automation_in_hero"
                  service="AI Automation"
                  submitLabel="Book my free scoping call"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. ANSWER-FIRST */}
        <Section tinted>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8" id="short-answer">
              <SectionHead eyebrow="THE SHORT ANSWER">What is the best AI automation agency in India?</SectionHead>
              <p className={`mt-5 ${PROSE}`}>
                For a mid-sized business, the best AI automation agency in India is the one that runs a trial of your workflow on
                your own records before you sign, builds in your accounts, and fixes the price in writing. FactoryJet
                works that way. As an AI automation company we build n8n, Make and Zapier workflows, add AI where a step
                has to read or decide, and connect Indian tools such as Tally, Zoho, Razorpay and WhatsApp. Large IT
                services firms suit company-wide programmes. A smaller team fits the single workflow your business needs running soon.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-fj-neutral-500">
                  AI automation in one line
                </p>
                <p className={`mt-3 ${PROSE}`}>
                  Software that does a repeated task the same way every time, with AI handling the steps that need
                  reading, and a person approving anything that matters.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 3. SERVICES */}
        <Section>
          <SectionHead eyebrow="WHAT WE BUILD">What do AI automation services include?</SectionHead>
          <p className={`mt-5 max-w-[720px] ${PROSE}`}>
            Our AI automation services come in six kinds of work. Each starts as one scoped workflow. If the job is a
            single task that takes actions, such as calling or booking, our{' '}
            <a className={LINK} href="/ai-agent-development">
              AI agent development
            </a>{' '}
            page is the better fit. For software built around your own documents, see{' '}
            <a className={LINK} href="/ai-development">
              AI development
            </a>
            , and for customer-facing chat, see{' '}
            <a className={LINK} href="/ai-chatbot-development">
              AI chatbot development
            </a>
            .
          </p>
          <div className="mt-8 divide-y divide-fj-neutral-200 border-y border-fj-neutral-200">
            {AUTO_SERVICES.map((s) => (
              <div key={s.name} className="grid grid-cols-1 gap-2 py-5 md:grid-cols-12 md:gap-8">
                <h3 className="font-fj-display text-[1.125rem] font-bold text-fj-ink md:col-span-4">{s.name}</h3>
                <p className="font-fj-body text-[1rem] leading-[1.65] text-fj-neutral-600 md:col-span-8">{s.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 4. TALLY AND ZOHO */}
        <Section tinted>
          <SectionHead eyebrow="TALLY AND ZOHO">How does AI automation work with Tally and Zoho?</SectionHead>
          <p className={`mt-5 max-w-[760px] ${PROSE}`}>
            Many Indian businesses keep their books in Tally and their customers in Zoho. Both can be connected to an
            automation tool, and AI can then read, sort or draft the steps in between. The{' '}
            <a className={LINK} href="/n8n-automation">
              n8n automation page
            </a>{' '}
            lists the Tally, Zoho CRM, Zoho Books, Razorpay and WhatsApp flows we build. Below is how each piece works.
            Whether your own Tally and Zoho setup fits is checked at scoping, before any price is quoted.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {INDIA_BLOCKS.map((b) => (
              <div key={b.name} className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-fj-neutral-500">
                  {b.kicker}
                </p>
                <h3 className="mt-2 font-fj-display text-[1.125rem] font-bold text-fj-ink">{b.name}</h3>
                <p className="mt-3 font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-600">{b.text}</p>
              </div>
            ))}
          </div>
          <p className={`mt-6 max-w-[760px] ${PROSE}`}>
            The method Tally documents is XML over HTTP, described in{' '}
            <a className={LINK} href="https://help.tallysolutions.com/xml-integration/" rel="noopener">
              Tally&apos;s own integration help
            </a>
            . For chat on WhatsApp that feeds Zoho, see our{' '}
            <a className={LINK} href="/whatsapp-chatbot">
              WhatsApp chatbot page
            </a>
            .
          </p>
        </Section>

        {/* 5. CHOOSING A COMPANY */}
        <Section>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHead eyebrow="CHOOSING A PARTNER">How do you choose an AI automation company in India?</SectionHead>
              <p className={`mt-5 ${PROSE}`}>
                Search results mix chatbot platforms, large consultancies and agencies that build to order, and each group
                answers a different need. If you need automation inside your own tools, shortlist the build-to-order
                agencies and give each the same small job. Compare how they test it.
              </p>
              <p className={`mt-4 ${PROSE}`}>
                Our guide to the{' '}
                <a className={LINK} href="/blog/best-ai-automation-agencies-india">
                  best AI automation agencies in India
                </a>{' '}
                sets out the comparison in more detail.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6">
                <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-fj-neutral-500">
                  Ask every agency you shortlist
                </p>
                <ul className="mt-3 space-y-2 font-fj-body text-[0.9375rem] leading-[1.6] text-fj-neutral-600">
                  <li>Can I see it run on my own records first?</li>
                  <li>Whose accounts will the workflows live in?</li>
                  <li>Is the price fixed and in writing?</li>
                  <li>Who fixes it when an app changes?</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* 6. COMPARISON */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs Enterprise Consultancies vs Solo Freelancers vs No-Code DIY"
          lead="Four routes to an automated workflow in India. The number of systems the work crosses usually decides which route fits."
          columns={AUTO_COMPARISON_COLUMNS}
          rows={AUTO_COMPARISON_ROWS}
          footer="Descriptions follow common selling patterns. Read any contract and request a live example before choosing."
        />

        {/* 7. MID-PAGE CTA */}
        <FinalCTA
          variant="light"
          eyebrow="START WITH ONE WORKFLOW"
          headline="Describe the task. We will run it on your records."
          sub="A short scoping call, then a working example on a few of your own records. No contract for that step."
          primaryCta={{ label: 'Book a scoping call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Read the n8n page', href: '/n8n-automation' }}
        />

        {/* 8. COST */}
        <Section tinted>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHead eyebrow="COST">How much do AI automation services cost in India?</SectionHead>
              <p className={`mt-5 ${PROSE}`}>
                One Indian software firm&apos;s guide,{' '}
                <a
                  className={LINK}
                  href="https://dev.to/secuodsoft/ai-integration-services-in-india-2026-complete-guide-cost-breakdown-1p53"
                  rel="noopener"
                >
                  posted 30 May 2026
                </a>
                , gives the ranges in the table for AI-powered RPA, which is robotic process automation with AI added, by company size.
              </p>
              <p className={`mt-4 ${PROSE}`}>
                A second guide from an Indian agency,{' '}
                <a className={LINK} href="https://sigosoft.com/blog/ai-agents-for-indian-smbs/" rel="noopener">
                  updated 10 November 2026
                </a>
                , is written about AI agents and chatbots rather than workflow automation. It puts upkeep at 15 to 30 percent of the build each year and calls Tally or custom ERP integration the
                line most quotes underestimate. Both are vendor sources, so treat them as rough. These are market
                figures. After the scoping call, FactoryJet sends one fixed written price.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-fj-cream">
                <div className="border-b border-fj-neutral-200 px-6 py-4">
                  <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-fj-neutral-500">
                    Market ranges, Indian vendor guides
                  </p>
                </div>
                <div className="divide-y divide-fj-neutral-200 px-6">
                  {AUTO_COST_ROWS.map((r) => (
                    <div key={r.tier} className="flex flex-wrap items-baseline justify-between gap-2 py-4">
                      <p className="font-fj-body text-[0.9375rem] font-semibold text-fj-ink">{r.tier}</p>
                      <p className="font-fj-body text-[0.9375rem] text-fj-neutral-600">{r.range}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 9. PROCESS */}
        <Section>
          <SectionHead eyebrow="HOW A PROJECT RUNS">How does a FactoryJet AI automation project work?</SectionHead>
          <ol className="mt-8 divide-y divide-fj-neutral-200 border-y border-fj-neutral-200">
            {AUTO_STEPS.map((s) => (
              <li key={s.step} className="grid grid-cols-1 gap-2 py-5 md:grid-cols-12 md:gap-8">
                <div className="flex items-baseline gap-4 md:col-span-4">
                  <span className="font-fj-mono text-[0.8125rem] font-medium text-[#B23E13]">{s.step}</span>
                  <h3 className="font-fj-display text-[1.125rem] font-bold text-fj-ink">{s.title}</h3>
                </div>
                <p className="font-fj-body text-[1rem] leading-[1.65] text-fj-neutral-600 md:col-span-8">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className={`mt-6 max-w-[760px] ${PROSE}`}>
            Our{' '}
            <a className={LINK} href="/blog/best-ai-automation-agencies-india">
              list of the best AI automation agencies in India
            </a>{' '}
            compares more firms and the build items to ask about.
          </p>
        </Section>

        {/* 10. FAQ */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="AI Automation in India: Common Questions"
          lead="What buyers ask us, and what they type into AI assistants, answered plainly."
          categories={AUTO_FAQ_CATEGORIES}
          items={AUTO_FAQS}
        />

        {/* 11. FINAL CTA */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="READY WHEN YOU ARE"
            headline="Pick one repeated task. We will automate it on your records first."
            sub="Tell us the task on a short call. We run an example on a few of your own records. You review it first, and a contract comes after."
            primaryCta={{ label: 'Book a scoping call', modal: true, region: 'in' }}
            secondaryCta={{ label: 'See our portfolio', href: '/portfolio' }}
            objectionHandler="One written price per phase. Workflows sit in your accounts. Support is optional."
          />
        </div>
      </main>

      <SiteFooter locale="in" />
    </>
  );
}
