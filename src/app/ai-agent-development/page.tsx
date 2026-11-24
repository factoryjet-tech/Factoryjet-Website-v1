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
  title: 'Best AI Agent Development Company in India | FactoryJet',
  description:
    'Custom AI agents for businesses across India: calling and voice agents, WhatsApp AI agents, document and support agents. Demo on your own data before you sign.',
  keywords: [
    'AI agent development company in India',
    'AI agent development services',
    'AI agent developers',
    'custom AI agent development',
    'AI calling agent',
    'WhatsApp AI agent',
    'AI voice agent India',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Best AI Agent Development Company in India | FactoryJet',
    description:
      'Custom AI agents built for one job in your business. You see it working on your own data before you sign. Fixed price in writing.',
    url: 'https://factoryjet.com/ai-agent-development',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet AI agent development company in India',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best AI Agent Development Company in India | FactoryJet',
    description:
      'Custom AI agents for calls, WhatsApp, documents and support. Shown on your own data before you sign.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/ai-agent-development',
    languages: {
      'en-IN': 'https://factoryjet.com/ai-agent-development',
      'x-default': 'https://factoryjet.com/ai-agent-development',
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

const AGENT_SERVICES = [
  {
    name: 'Calling and voice agents',
    text: 'An agent that answers calls at any hour, asks the right questions, books into your calendar and passes anything unusual to a person on your team.',
  },
  {
    name: 'WhatsApp AI agents',
    text: 'An agent that answers customers on WhatsApp from your own catalogue, policies and order data, and hands the chat to a person when it should.',
  },
  {
    name: 'Document agents',
    text: 'An agent that reads purchase orders, vendor invoices and RFQs, drafts the record, and waits for your team to approve it.',
  },
  {
    name: 'Support agents',
    text: 'An agent that resolves tickets in the help desk you already use, using your help articles and past answers, and flags the ones it cannot close.',
  },
  {
    name: 'Lead follow-up and scheduling agents',
    text: 'An agent that replies to new enquiries, qualifies them, books the meeting and logs the result in your CRM.',
  },
  {
    name: 'Integrations with your systems',
    text: 'The wiring that lets an agent read from and write to your CRM, ERP and other software, so people stop copying data between screens.',
  },
];

const AGENT_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Large IT services firm' },
  { label: 'Freelancer' },
  { label: 'Agent platform (SaaS)' },
] as const;

const AGENT_COMPARISON_ROWS = [
  {
    feature: 'Built for your own workflow',
    values: ['Yes, one job at a time', 'Yes, as part of a larger programme', 'Yes, quality varies', 'Partly, you configure it'],
  },
  {
    feature: 'Shown on your own data before you sign',
    values: ['Yes', 'Usually a slide deck first', 'Rarely', 'A generic demo'],
  },
  {
    feature: 'How the price is set',
    values: ['Fixed price per phase, in writing', 'Programme quote', 'Hourly or per project', 'Monthly plan'],
  },
  {
    feature: 'Who owns the code',
    values: ['You do, from day one', 'Contract decides', 'Contract decides', 'The vendor does'],
  },
  {
    feature: 'Human approval steps built in',
    values: ['Yes, where you choose', 'Yes', 'If you ask', 'Limited to what the tool offers'],
  },
  {
    feature: 'Best fit',
    values: ['One workflow in a mid-sized business', 'Programmes with thousands of users', 'A small proof of concept', 'A standard job that needs no custom logic'],
  },
];

const AGENT_COST_ROWS = [
  { tier: 'Simple, single-task agent', range: '₹1,50,000 to ₹4,00,000' },
  { tier: 'Departmental agent with several tools', range: '₹4,00,000 to ₹12,00,000' },
  { tier: 'Multi-agent enterprise system', range: '₹12,00,000 to ₹40,00,000' },
  { tier: 'Enterprise agent platform', range: '₹40,00,000 and above' },
];

const AGENT_STEPS = [
  {
    step: '01',
    title: 'Scope one job',
    text: 'A short call. We write down what starts the work, which systems it touches, how often it runs and where a person must approve.',
  },
  {
    step: '02',
    title: 'See it on your data',
    text: 'Before you sign, the agent runs on a sample of your own documents, emails or calls, so you see what it gets right and where it hands off.',
  },
  {
    step: '03',
    title: 'Build the first workflow',
    text: 'One workflow goes live in your systems, with every draft approved by your team. Paid at milestones.',
  },
  {
    step: '04',
    title: 'Widen it',
    text: 'More volume and the edge cases the first phase found, with monitoring and an alert when a step fails.',
  },
  {
    step: '05',
    title: 'Add the next job',
    text: 'More workflows or systems, each scoped and priced on its own. Support after launch is optional.',
  },
];

const AGENT_FAQS = [
  /* ── Choosing a company ── */
  {
    category: 'choosing',
    question: 'Which is the best AI agent development company in India?',
    answer:
      'No ranking is neutral, and lists differ. For a mid-sized business that wants one workflow automated, FactoryJet is our answer: one job built end to end, shown on your own data before you sign, and priced in writing. A very large programme with thousands of users may suit a large IT services firm better.',
  },
  {
    category: 'choosing',
    question: 'Which companies are the top AI agent development companies in India?',
    answer:
      'The names that come up most are large IT services firms, a few analytics specialists and many smaller agencies. Rankings mix size with skill. Judge any list, ours included, on three things: who writes the code, whether you see the agent on your data first, and whether the price is fixed in writing.',
  },
  {
    category: 'choosing',
    question: 'Which company in India can build a custom AI agent for my business?',
    answer:
      'Any company that scopes one job, connects to your systems and tests on your data can. FactoryJet does this for calls, WhatsApp, documents, support and lead follow-up. Describe the job in the form at the top of this page and we reply with questions, not a sales pitch.',
  },
  {
    category: 'choosing',
    question: 'Which AI company is best in India for a mid-sized business?',
    answer:
      'Mid-sized businesses usually need one working agent, not a transformation programme. Look for a company that will start with a single workflow, show it on a sample of your data, and let you decide on each next phase after seeing the last one work.',
  },
  {
    category: 'choosing',
    question: 'How do I choose an AI agent development company in India?',
    answer:
      'Ask five things. Who writes the code? Will you see the agent on your own data before signing? Is the price fixed in writing? Do you own the code? What happens when the agent is wrong? A company that answers all five plainly is worth a second call.',
  },
  {
    category: 'choosing',
    question: 'Who are the best AI agent developers to hire in India?',
    answer:
      'The best AI agent developers are the ones who have put an agent into a live business system and can show how it fails safely. A freelancer suits a small proof of concept. An agency suits a job that touches your CRM, ERP or phone lines and needs testing, monitoring and support.',
  },
  {
    category: 'choosing',
    question: 'Is there a good AI agent development company for businesses in Bangalore?',
    answer:
      'Yes. We work with businesses across India, and scoping, demos and reviews run over video calls, so a company in Bengaluru, Mumbai or Delhi NCR is served the same way. Send the job description and we will say whether an agent fits.',
  },
  /* ── Cost ── */
  {
    category: 'cost',
    question: 'How much does it cost to build an AI agent in India?',
    answer:
      'One Indian vendor guide, updated 13 November 2026, puts a simple single-task agent at ₹1,50,000 to ₹4,00,000, a departmental agent at ₹4,00,000 to ₹12,00,000, and a multi-agent enterprise system at ₹12,00,000 to ₹40,00,000. Other guides differ. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'cost',
    question: 'What does an AI agent cost to run each month?',
    answer:
      'The same guide lists model usage at ₹8,000 to ₹1,20,000 a month and hosting at ₹4,000 to ₹40,000, and says running costs add 20 to 30 percent of the build price each year. Your own figure depends on call or message volume. AI and hosting can run in your own accounts, billed at cost.',
  },
  {
    category: 'cost',
    question: 'Does it cost money to use an AI agent?',
    answer:
      'Yes, in two parts. There is the one-time build, and there is a running cost for the AI model, hosting and upkeep. Free chatbots exist, but they answer generic questions and cannot act inside your systems, which is the work an agent is built for.',
  },
  {
    category: 'cost',
    question: 'Do you publish fixed prices for AI agent development?',
    answer:
      'We publish no price list because the job decides the price. FactoryJet quotes a fixed price in writing after a short scoping call, one price per phase, paid at milestones. You decide on each next phase after seeing the last one work.',
  },
  {
    category: 'cost',
    question: 'How long does AI agent development take?',
    answer:
      'It depends on the job and how many systems it touches. A single document or support workflow is much smaller than a calling agent wired into a CRM. We agree the timeline in writing during scoping, before any work starts, and tie payments to milestones.',
  },
  /* ── What it is and does ── */
  {
    category: 'build',
    question: 'What is custom AI agent development?',
    answer:
      'Custom AI agent development means building software that takes a job from start to finish inside your own systems, such as reading a purchase order, drafting the record and asking a person to approve it. It is built around your data and rules, not configured from a generic template.',
  },
  {
    category: 'build',
    question: 'What is the difference between an AI agent and a chatbot?',
    answer:
      'A chatbot answers questions. An agent also does work: it reads a document, updates a CRM, books a meeting or places a record in your ERP. Some projects need only a chatbot, and our AI chatbot development page covers that case.',
  },
  {
    category: 'build',
    question: 'What can an AI agent do for my business?',
    answer:
      'Common jobs are answering calls and booking into a calendar, replying to new leads, resolving support tickets, reading purchase orders and invoices, and following up on open orders. The test for any idea is whether a person does it the same way many times a week.',
  },
  {
    category: 'build',
    question: 'Can the agent connect to my existing software?',
    answer:
      'Usually. We check at scoping which of your systems offer a way in, such as an API or an export, and which do not. Typical targets are a CRM such as HubSpot or Salesforce, an ERP, a help desk and a calendar. Anything that blocks a connection is named before you sign.',
  },
  {
    category: 'build',
    question: 'What happens when the agent gets something wrong?',
    answer:
      'We design for it. Early phases keep a person in the loop, so every draft is approved before it counts. The agent hands off when it is unsure, and monitoring raises an alert when a step fails. You decide where approval stays and where the agent acts alone.',
  },
  {
    category: 'build',
    question: 'How do you show the agent working before I sign?',
    answer:
      'We run the agent on a sample of your own documents, emails or calls and walk you through the results, including the cases it handed off. You judge it on your data, not on someone else\'s logo. No contract is needed for that step.',
  },
  {
    category: 'build',
    question: 'Who owns the code and who looks after the agent after launch?',
    answer:
      'You own the code and the repository from day one. Defects are fixed inside the build price for an agreed cover period. Support after that is optional, with no monthly minimum, so you are never locked in to keep the agent running.',
  },
  /* ── Calling and voice ── */
  {
    category: 'voice',
    question: 'What is an AI calling agent?',
    answer:
      'An AI calling agent is software that holds a phone conversation, understands what the caller wants, takes an action such as booking a slot, and passes the call to a person when needed. A custom one is built around your scripts, your calendar and your CRM.',
  },
  {
    category: 'voice',
    question: 'Can an AI calling agent make outbound sales calls in India?',
    answer:
      'It can be built to, but the rules matter. TRAI runs a registration facility that lets people opt out of commercial calls and a route for registering as a telemarketer. We scope outbound calling against those rules with you, and you should confirm the legal position with your own adviser.',
  },
  {
    category: 'voice',
    question: 'How is an AI voice agent different from an IVR menu?',
    answer:
      'An IVR makes the caller press numbers through a fixed menu. A voice agent lets the caller speak naturally, understands the request and acts on it. It still hands off to a person for anything it cannot handle.',
  },
  {
    category: 'voice',
    question: 'Which Indian languages can a voice agent handle?',
    answer:
      'That depends on the languages and accents your callers use, so we test on recordings of your own calls during the demo step before you sign. Where a language does not work well enough, we say so then, not after launch.',
  },
  /* ── WhatsApp ── */
  {
    category: 'whatsapp',
    question: 'Can you build a WhatsApp AI agent for my business?',
    answer:
      'Yes. A WhatsApp AI agent answers from your catalogue, policies and order data, and passes the chat to your team when it should. Our WhatsApp chatbot page covers the platform choices and the Indian languages we build for, and an agent adds the ability to act in your systems.',
  },
  {
    category: 'whatsapp',
    question: 'Can a WhatsApp AI agent message customers first?',
    answer:
      'Only within Meta rules. Meta says templates are the only type of message that can be sent outside a customer service window, so first-contact and follow-up messages must use approved templates. The agent works around that limit, not past it.',
  },
  /* ── Data and models ── */
  {
    category: 'data',
    question: 'Is my business data safe with an AI agent?',
    answer:
      'We scope exactly what data the agent can see and what it can change, and AI and hosting can run in your own accounts so the data stays under your control. Ask any vendor, us included, to write down where your data goes and who can read it.',
  },
  {
    category: 'data',
    question: 'Which AI models do you build agents on?',
    answer:
      'We pick the model per job and write the choice into the scope. Some agents are built on the Claude API. The right model depends on the task, the languages, the cost per conversation and where your data is allowed to go.',
  },
];

const AGENT_FAQ_CATEGORIES = [
  { key: 'choosing', label: 'Choosing a Company' },
  { key: 'cost', label: 'Cost' },
  { key: 'build', label: 'How It Works' },
  { key: 'voice', label: 'Calling and Voice' },
  { key: 'whatsapp', label: 'WhatsApp' },
  { key: 'data', label: 'Data and Models' },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD
───────────────────────────────────────────────────────────────────────────── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/ai-agent-development#webpage',
  url: 'https://factoryjet.com/ai-agent-development',
  name: 'Best AI Agent Development Company in India | FactoryJet',
  inLanguage: 'en-IN',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '#short-answer'] },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/ai-agent-development#service',
  name: 'AI agent development',
  serviceType: 'Custom AI agent development',
  areaServed: { '@type': 'Country', name: 'India' },
  url: 'https://factoryjet.com/ai-agent-development',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: AGENT_FAQS.map((item) => ({
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

export default function AiAgentDevelopmentIndiaPage() {
  const crumbs = [
    { name: 'Home', url: 'https://factoryjet.com' },
    { name: 'AI Agent Development', url: 'https://factoryjet.com/ai-agent-development' },
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
              <p className="fj-eyebrow">AI AGENT DEVELOPMENT COMPANY · INDIA</p>
              <h1 className="mt-3 max-w-[22ch] font-fj-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-fj-ink md:text-[2.75rem]">
                Best AI Agent Development Company in India for Custom Business Agents
              </h1>
              <p className="mt-5 max-w-[56ch] font-fj-body text-[1.125rem] leading-[1.65] text-fj-neutral-600">
                We build AI agents that take one job off your team: answering calls, replying on WhatsApp, reading
                documents, following up leads. You watch the agent work on your own data before you sign anything.
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
                <li>You own the code from day one</li>
              </ul>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 shadow-sm">
                <p className="font-fj-display text-[1.25rem] font-bold leading-snug text-fj-ink">
                  Tell us the job. We tell you if an agent fits.
                </p>
                <HeroInlineForm
                  region="in"
                  source="ai_agent_development_in_hero"
                  service="AI Agent Development"
                  submitLabel="Get my free scoping call"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. ANSWER-FIRST */}
        <Section tinted>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8" id="short-answer">
              <SectionHead eyebrow="THE SHORT ANSWER">What is the best AI agent development company in India?</SectionHead>
              <p className={`mt-5 ${PROSE}`}>
                The best AI agent development company in India for a mid-sized business is one that builds a single job
                end to end, shows it working on your own data before you sign, and quotes a fixed price in writing.
                FactoryJet builds custom AI agents on that model. The agent reads, drafts, calls or replies, and your
                team approves the steps that matter. Large IT services firms suit programmes with thousands of users. A
                focused agency suits the one workflow that has to work first.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-fj-neutral-500">
                  What an AI agent is
                </p>
                <p className={`mt-3 ${PROSE}`}>
                  Think of a new team member who never sleeps and only does one job. It follows your rules, works inside
                  your software, and asks a person when it is unsure.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 3. SERVICES */}
        <Section>
          <SectionHead eyebrow="WHAT WE BUILD">What do AI agent development services cover?</SectionHead>
          <p className={`mt-5 max-w-[720px] ${PROSE}`}>
            Our AI agent development services cover six kinds of work. Each one starts as a single workflow, so you can
            judge it before adding the next. Our{' '}
            <a className={LINK} href="/ai-development">
              AI development
            </a>{' '}
            and{' '}
            <a className={LINK} href="/ai-automation">
              AI automation
            </a>{' '}
            pages cover the wider work around agents.
          </p>
          <div className="mt-8 divide-y divide-fj-neutral-200 border-y border-fj-neutral-200">
            {AGENT_SERVICES.map((s) => (
              <div key={s.name} className="grid grid-cols-1 gap-2 py-5 md:grid-cols-12 md:gap-8">
                <h3 className="font-fj-display text-[1.125rem] font-bold text-fj-ink md:col-span-4">{s.name}</h3>
                <p className="font-fj-body text-[1rem] leading-[1.65] text-fj-neutral-600 md:col-span-8">{s.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 4. CUSTOM VS OFF THE SHELF */}
        <Section tinted>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHead eyebrow="CUSTOM AI AGENT DEVELOPMENT">
                Why build a custom AI agent instead of buying a tool?
              </SectionHead>
              <p className={`mt-5 ${PROSE}`}>
                A tool is made for the average business. Your business is not average: your forms have odd fields, your
                customers phone at odd hours, and your software has quirks. Custom AI agent development starts from those
                details, so the agent follows your rules instead of asking you to change them.
              </p>
              <p className={`mt-4 ${PROSE}`}>
                A tool still makes sense for a standard job, such as a simple website chat box. Our{' '}
                <a className={LINK} href="/ai-chatbot-development">
                  AI chatbot development
                </a>{' '}
                page covers that case. Choose custom when the agent must act inside your CRM, ERP or phone system, or
                when the data is too sensitive to hand to a third party.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-fj-neutral-500">
                  Who writes the code
                </p>
                <p className={`mt-3 ${PROSE}`}>
                  The best AI agent developers can show an agent running in a live business system and explain how it
                  fails safely. Ask every firm you shortlist, us included, to show exactly that.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 5. CALLING AGENT */}
        <Section>
          <SectionHead eyebrow="AI CALLING AGENT">What is an AI calling agent, and can a business build its own?</SectionHead>
          <div className="mt-5 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className={PROSE}>
                An AI calling agent is software that holds a phone conversation, works out what the caller wants, acts on
                it and passes the call to a person when needed. Search for the term and you will mostly find ready-made
                products you subscribe to. A custom AI calling agent is different: we build it for your business, around
                your scripts, your calendar and your CRM.
              </p>
              <p className={`mt-4 ${PROSE}`}>
                Inbound calls are the simpler start. The agent answers at any hour, asks the questions your front desk
                asks, books the slot and sends the call to a person for anything unusual. Outbound calls need more care.
                TRAI, the telecom regulator, runs a{' '}
                <a className={LINK} href="https://trai.gov.in/ucc" rel="noopener">
                  page on unsolicited commercial communication
                </a>{' '}
                that describes the opt-out facility for people who do not want commercial calls and the route for
                registering as a telemarketer. We scope outbound calling against those rules with you, and you should
                confirm the legal position with your own adviser.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6">
                <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-fj-neutral-500">
                  Custom calling agent, in short
                </p>
                <ul className="mt-3 space-y-2 font-fj-body text-[0.9375rem] leading-[1.6] text-fj-neutral-600">
                  <li>Answers calls at any hour</li>
                  <li>Books into your own calendar</li>
                  <li>Writes the call result to your CRM</li>
                  <li>Hands the call to a person when unsure</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* 6. WHATSAPP */}
        <Section tinted>
          <SectionHead eyebrow="WHATSAPP AI AGENT">Can a WhatsApp AI agent handle customer chats for a business?</SectionHead>
          <p className={`mt-5 max-w-[760px] ${PROSE}`}>
            Yes. A WhatsApp AI agent answers customers from your catalogue, policies and order data, then passes the chat
            to your team when it should. It differs from a basic chatbot because it can act: look up an order, update a
            record or book a visit. Our{' '}
            <a className={LINK} href="/whatsapp-chatbot">
              WhatsApp chatbot page
            </a>{' '}
            covers the platforms and Indian languages we build for.
          </p>
          <p className={`mt-4 max-w-[760px] ${PROSE}`}>
            One rule shapes the design. According to Meta&apos;s{' '}
            <a
              className={LINK}
              href="https://developers.facebook.com/docs/whatsapp/cloud-api/overview"
              rel="noopener"
            >
              WhatsApp Business Platform documentation
            </a>
            , templates are the only type of message that can be sent to a user outside a customer service window. So an
            agent that starts a conversation, such as a delivery reminder, has to use a template approved in advance.
          </p>
        </Section>

        {/* 7. VOICE */}
        <Section>
          <SectionHead eyebrow="AI VOICE AGENT INDIA">What should an AI voice agent in India get right?</SectionHead>
          <p className={`mt-5 max-w-[760px] ${PROSE}`}>
            A good AI voice agent in India sounds natural to the callers you actually have. That means testing on real
            recordings of your own calls, not on clean studio audio. Accents, background noise and mixed languages
            decide whether callers get through or give up.
          </p>
          <p className={`mt-4 max-w-[760px] ${PROSE}`}>
            It also means a clean way out. The voice agent should pass the call to a person when it is unsure or the
            caller asks, with the notes so far, so nobody repeats themselves. We test both on your recordings during the
            demo step, before you sign, and tell you which languages worked well enough.
          </p>
        </Section>

        {/* 8. COMPARISON */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs IT Services Firms vs Freelancers vs Agent Platforms"
          lead="Four ways to get an AI agent built in India. The right one depends on how big the job is and how much of it is unique to your business."
          columns={AGENT_COMPARISON_COLUMNS}
          rows={AGENT_COMPARISON_ROWS}
          footer="Based on how each option is usually sold. Always check the contract and ask to see a working agent."
        />

        {/* 9. MID-PAGE CTA */}
        <FinalCTA
          variant="light"
          eyebrow="START WITH ONE JOB"
          headline="Describe the job. We will show you an agent doing it."
          sub="A short scoping call, then the agent runs on a sample of your own data. No contract for that step."
          primaryCta={{ label: 'Book a scoping call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Read the cost breakdown', href: '/blog/ai-agent-development-cost-india' }}
        />

        {/* 10. COST */}
        <Section tinted>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHead eyebrow="COST">How much does AI agent development cost in India?</SectionHead>
              <p className={`mt-5 ${PROSE}`}>
                Published ranges vary a lot, because vendors use the words AI agent for everything from a question-and-
                answer bot to a system of many agents. One guide from an Indian vendor,{' '}
                <a
                  className={LINK}
                  href="https://www.wavxsolutions.in/blog/ai-agent-development-cost-india"
                  rel="noopener"
                >
                  last updated 13 November 2026
                </a>
                , lists the build ranges in the table. It also puts yearly running costs at 20 to 30 percent of the build
                price.
              </p>
              <p className={`mt-4 ${PROSE}`}>
                These are market figures from one source, not FactoryJet prices. FactoryJet quotes a fixed price in
                writing after a short scoping call. Our{' '}
                <a className={LINK} href="/blog/ai-agent-development-cost-india">
                  AI agent development cost breakdown
                </a>{' '}
                compares more sources.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-fj-cream">
                <div className="border-b border-fj-neutral-200 px-6 py-4">
                  <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-fj-neutral-500">
                    Market build ranges, one Indian vendor guide
                  </p>
                </div>
                <div className="divide-y divide-fj-neutral-200 px-6">
                  {AGENT_COST_ROWS.map((r) => (
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

        {/* 11. PROCESS */}
        <Section>
          <SectionHead eyebrow="HOW A PROJECT RUNS">How does a FactoryJet AI agent project work?</SectionHead>
          <ol className="mt-8 divide-y divide-fj-neutral-200 border-y border-fj-neutral-200">
            {AGENT_STEPS.map((s) => (
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
            For a longer shortlist of firms, read our{' '}
            <a className={LINK} href="/blog/best-ai-agent-development-companies-india">
              list of the best AI agent development companies in India
            </a>
            . The{' '}
            <a className={LINK} href="/services/ai-agent-development">
              AI agent development service page
            </a>{' '}
            lists more of the agents we build, grouped by industry.
          </p>
        </Section>

        {/* 12. FAQ */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="AI Agent Development in India: Your Questions Answered"
          lead="The questions buyers ask us and the AI assistants they use, answered in plain words."
          categories={AGENT_FAQ_CATEGORIES}
          items={AGENT_FAQS}
        />

        {/* 13. FINAL CTA */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="READY WHEN YOU ARE"
            headline="Pick one job. We will show you an agent doing it."
            sub="Tell us the job on a short call. We run an agent on a sample of your own data, you judge it, and only then do we talk about a contract."
            primaryCta={{ label: 'Book a scoping call', modal: true, region: 'in' }}
            secondaryCta={{ label: 'See our portfolio', href: '/portfolio' }}
            objectionHandler="Fixed price per phase. Code is yours. Support is optional."
          />
        </div>
      </main>

      <SiteFooter locale="in" />
    </>
  );
}
