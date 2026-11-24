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
  title: 'Best AI Development Company in India | FactoryJet',
  description:
    'Custom AI software for businesses across India: answers from your documents, AI inside your CRM and ERP, generative AI apps. Tested on your data first.',
  keywords: [
    'AI development company',
    'AI development company in India',
    'AI company in India',
    'AI app development company',
    'generative AI development company',
    'AI software development company',
    'best AI development company in India',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Best AI Development Company in India | FactoryJet',
    description:
      'Custom AI software built into the systems you already run. Tested on your own cases before launch. Fixed price in writing. You own the code.',
    url: 'https://factoryjet.com/ai-development',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet AI development company in India',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best AI Development Company in India | FactoryJet',
    description:
      'Custom AI software, generative AI apps and AI built into your CRM and ERP. Tested on your own cases before launch.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/ai-development',
    languages: {
      'en-IN': 'https://factoryjet.com/ai-development',
      'x-default': 'https://factoryjet.com/ai-development',
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

const DEV_SERVICES = [
  {
    name: 'Answers from your own documents',
    text: 'Staff or customers ask a question and the system answers from the manuals, policies, contracts and catalogues you approved, with the source shown next to each answer.',
  },
  {
    name: 'Custom AI software and internal tools',
    text: 'A focused application for one team or one job, such as a quote builder that reads your price rules or a weekly report drafted from three systems.',
  },
  {
    name: 'AI built into software you already run',
    text: 'The AI reads from and writes back to tools like Shopify, NetSuite, Salesforce, HubSpot, Zendesk and Microsoft 365. Drafts land where people work and a person approves anything that matters.',
  },
  {
    name: 'Generative AI apps',
    text: 'Software that writes, summarises or drafts in your format and tone: product descriptions, replies, reports, contract summaries. Each output passes through a check you define.',
  },
  {
    name: 'Model choice and fine-tuning',
    text: 'We test models from OpenAI, Anthropic, Google and open-weight families on your cases and pick on accuracy, cost and data terms. Fine-tuning only when prompting and retrieval cannot hold the format you need.',
  },
  {
    name: 'Testing, monitoring and secure deployment',
    text: 'A test set of real cases, a pass mark you approve before the build, monthly score tracking after launch, and access limits and logs on every AI action.',
  },
];

const DEV_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Big IT consultancy' },
  { label: 'Independent contractor' },
  { label: 'Ready-made AI product' },
] as const;

const DEV_COMPARISON_ROWS = [
  {
    feature: 'Fit to your own systems',
    values: ['Built around them, one job at a time', 'Typically part of a wider programme', 'Typically depends on the person', 'Typically limited to its settings'],
  },
  {
    feature: 'Proof before you commit',
    values: ['Prototype scored on your cases, pass mark agreed', 'Typically a discovery phase first', 'Typically a short sample', 'Typically a generic demo'],
  },
  {
    feature: 'How the price is set',
    values: ['Fixed price per phase, in writing', 'Typically a programme quote', 'Typically hourly or per project', 'Typically a monthly plan'],
  },
  {
    feature: 'Code ownership',
    values: ['Yours, in your repository and cloud account', 'Typically set by the contract', 'Typically set by the contract', 'Typically stays with the vendor'],
  },
  {
    feature: 'Support after launch',
    values: ['Optional, scored monthly against your test set', 'Typically a separate contract', 'Typically agreed case by case', 'Typically bundled into the plan'],
  },
  {
    feature: 'Where it fits best',
    values: ['A mid-sized business with one clear AI job', 'Very large, multi-team programmes', 'A small prototype', 'A standard task with no custom logic'],
  },
];

const DEV_COST_ROWS = [
  { tier: 'API-based build (hosted model, your logic around it)', range: '₹5 lakh to ₹20 lakh' },
  { tier: 'Retrieval build (answers from your documents)', range: '₹12 lakh to ₹35 lakh' },
  { tier: 'Fine-tuned open-source model', range: '₹20 lakh to ₹60 lakh and above' },
  { tier: 'Fully custom model', range: '₹1 crore and above' },
];

const DEV_STEPS = [
  {
    step: '01',
    title: 'Scope one problem',
    text: 'A short call. We write down the task, the data it needs, who uses the result and what counts as a right answer.',
  },
  {
    step: '02',
    title: 'Build the test set',
    text: 'Real cases from your business, each with the answer a skilled employee would give. You approve the pass mark before any build starts.',
  },
  {
    step: '03',
    title: 'Prototype on your data',
    text: 'A working prototype scored on that test set, so you see where it is right, where it is wrong and what each option costs to run.',
  },
  {
    step: '04',
    title: 'Build into your systems',
    text: 'The approved version goes live inside your own software and cloud account, with a person approving the steps that matter.',
  },
  {
    step: '05',
    title: 'Monitor and extend',
    text: 'Scores are tracked after launch so model updates and drifting data get caught. Support is optional, and the next job is scoped and priced separately.',
  },
];

const DEV_FAQS = [
  /* ── Choosing a company ── */
  {
    category: 'choosing',
    question: 'Which is the best AI development company in India?',
    answer:
      'No ranking is neutral and every list weighs size differently. For a mid-sized business with a specific job, FactoryJet is our answer: one problem built end to end, tested on your own cases, priced in writing. A programme spanning many teams and countries may suit a big IT consultancy better.',
  },
  {
    category: 'choosing',
    question: 'Which is the best AI company in India for building custom software?',
    answer:
      'It depends on the buyer. Large IT services firms suit enterprise programmes. Analytics specialists suit forecasting and data science. For custom AI software wired into your own CRM, ERP or store, look for a focused team that tests on your data and lets you own the code. FactoryJet builds that way.',
  },
  {
    category: 'choosing',
    question: 'Who are the top AI development companies in India?',
    answer:
      'Lists name large IT services firms, analytics specialists and many smaller agencies, and they disagree. Judge any list, ours included, on who writes the code, whether you see the system on your data first, and whether the price is fixed in writing. Our longer shortlist is on the blog.',
  },
  {
    category: 'choosing',
    question: 'Which company is working on AI in India?',
    answer:
      'Many. Large IT services firms, analytics companies, product start-ups and agencies all do AI work, and they differ in what they sell. Some sell platforms, some sell consulting, some build custom software. Decide which of those three you need before comparing names.',
  },
  {
    category: 'choosing',
    question: 'What is an AI company, and how is an AI development company different?',
    answer:
      'An AI company is any business whose main product uses AI. An AI development company builds AI software for other businesses. If you want a tool off the shelf, you need an AI company. If you want a system built around your data and workflows, you need a development company.',
  },
  {
    category: 'choosing',
    question: 'Which is the best generative AI development company in India for a mid-sized business?',
    answer:
      'A mid-sized business gets the most from one well-chosen use case, such as drafting replies or answering from its own files. A good generative AI development company will ask for a sample of your data, score its first version on it, and quote the next phase only once you have seen the result.',
  },
  {
    category: 'choosing',
    question: 'What should I look for in an AI app development company?',
    answer:
      'Ask to see AI systems they have put live in a business. Ask who writes the code and who supports it after launch. Ask how accuracy is measured, where your data is processed, and whether you will own the code, prompts and test set. Plain answers to all of those are a good sign.',
  },
  {
    category: 'choosing',
    question: 'How do I choose an AI software development company in India?',
    answer:
      'Shortlist three. Ask each for the same small job and compare how they test it. The company that asks about your data and your definition of a right answer before quoting is usually the one that has shipped real systems. Price comes after that comparison, not before.',
  },
  {
    category: 'choosing',
    question: 'Is there a good AI development company for businesses in Bangalore, Mumbai or Delhi?',
    answer:
      'Yes. We work with businesses across India, whichever city you are in. Send the job and we will say whether AI is the right tool for it.',
  },
  /* ── Cost ── */
  {
    category: 'cost',
    question: 'How much does AI development cost in India?',
    answer:
      'A July 2026 guide from an Indian agency, updated 31 October 2026, puts an API-based build at ₹5 lakh to ₹20 lakh and a retrieval build (answers from your documents) at ₹12 lakh to ₹35 lakh. A second guide, dated 31 July 2026, puts an AI MVP at ₹10 lakh to ₹21 lakh, AI-native apps at ₹20 lakh to ₹60 lakh, and its overall band at ₹6 lakh to ₹60 lakh. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'cost',
    question: 'How much does it cost to run an AI system each month?',
    answer:
      'The first guide lists monthly model fees of ₹15,000 to ₹80,000 for API builds and ₹20,000 to ₹1,20,000 for retrieval builds, and puts upkeep at 15 to 20 percent of the build cost each year. The second says 15 to 25 percent. Your own figure depends on how many requests the system handles.',
  },
  {
    category: 'cost',
    question: 'Do you publish a price list for AI development?',
    answer:
      'No. The job decides the price. FactoryJet quotes a fixed price in writing after a short scoping call, one price per phase, paid at milestones. You decide on each next phase after seeing the last one work.',
  },
  {
    category: 'cost',
    question: 'What makes one AI project cost more than another?',
    answer:
      'Four things: how many systems the AI connects to, how clean your data is, how accurate the answers must be, and how much personal or regulated data it touches. A system that answers from one folder of documents costs less than one that writes into your ERP.',
  },
  {
    category: 'cost',
    question: 'How long does AI development take?',
    answer:
      'It depends on the job and the data. A working prototype on your own data usually takes 3 to 5 weeks. A production build for one job connected to one or two systems runs 5 to 8 weeks, and builds that touch several systems or regulated data take 8 to 14 weeks. We agree the timeline in writing during scoping and tie payments to milestones.',
  },
  /* ── What it is and does ── */
  {
    category: 'build',
    question: 'What does an AI development company actually do?',
    answer:
      'It builds software that uses AI models to do a job, such as answering from your documents, drafting replies or reading forms. The work includes choosing the model, connecting your data, wiring it into your systems, testing accuracy, and keeping it running after launch.',
  },
  {
    category: 'build',
    question: 'What is AI software development?',
    answer:
      'AI software development is ordinary software engineering with an AI model as one part. Someone still builds the screens, the database links and the security. The AI part reads text, images or numbers and produces a draft, a label or an answer that the rest of the software uses.',
  },
  {
    category: 'build',
    question: 'What is generative AI development?',
    answer:
      'Generative AI development builds software that creates new text, images or summaries from a prompt and your data. Typical business uses are drafting replies, summarising long documents, writing product descriptions and answering questions from your own files, with a check before anything goes out.',
  },
  {
    category: 'build',
    question: 'What is retrieval-augmented generation, in plain words?',
    answer:
      'The system first searches your approved documents, then gives the best passages to the AI model, which writes the answer and shows its source. It lets the AI answer from your policies instead of guessing. We build this for manuals, contracts, catalogues and support tickets.',
  },
  {
    category: 'build',
    question: 'Can you add AI to software we already use?',
    answer:
      'Usually. We check at scoping which of your systems offer a way in, such as an API or an export. Typical targets are Shopify, NetSuite, Salesforce, HubSpot, Zendesk and Microsoft 365.',
  },
  {
    category: 'build',
    question: 'How do you measure whether the AI is accurate?',
    answer:
      'We build a test set of real examples from your business, each with the answer a skilled employee would give. Every version is scored against it, including tricky cases on purpose. You approve the pass mark before the production build starts, and the same score is tracked after launch.',
  },
  {
    category: 'build',
    question: 'What is the difference between AI development and AI agent development?',
    answer:
      'AI development covers custom AI software in general, such as answers from documents or generative apps. An agent is the part that takes actions, like booking a call or updating a record. Our AI agent development page covers agents, and our AI automation page covers workflow automation.',
  },
  {
    category: 'build',
    question: 'Do I need AI development, or will a chatbot do?',
    answer:
      'A chatbot is enough when customers ask standard questions and a human handles the rest. You need custom AI development when the answers must come from your private data, or when the system has to read and write inside your software. Our AI chatbot development page covers the simpler case.',
  },
  {
    category: 'build',
    question: 'Who owns the code and who supports the system after launch?',
    answer:
      'You own the code, prompts and test sets, in your repository and cloud account, with no licence fee to us. Support after launch is optional, and you can take it in-house any time because the code and documentation are yours.',
  },
  /* ── Data, models and compliance ── */
  {
    category: 'data',
    question: 'Is my business data safe when AI is built on it?',
    answer:
      'We scope exactly what data the system can see and change, apply least-privilege access, keep secrets out of code, and log every AI action. Business terms with model providers can keep your data out of model training. Ask any vendor, us included, to write down where your data goes.',
  },
  {
    category: 'data',
    question: 'Which AI models do you build on?',
    answer:
      'We test models from OpenAI, Anthropic, Google and open-weight families on your cases, then pick on accuracy, cost and data terms. The choice is written into the scope, so you know which model runs your system and why.',
  },
  {
    category: 'data',
    question: 'Is there a framework for managing AI risk?',
    answer:
      'Yes. The US National Institute of Standards and Technology publishes an AI Risk Management Framework for voluntary use. It is not an Indian rule, and it does not replace your own legal advice, but it gives a common vocabulary for mapping and reducing AI risk in a project.',
  },
  {
    category: 'data',
    question: 'What happens when the AI gets something wrong?',
    answer:
      'We plan for it. Early phases keep a person in the loop, so important outputs are approved before they count. Scores are tracked every month after launch so drift gets caught, and you decide where approval stays and where the system acts alone.',
  },
  {
    category: 'data',
    question: 'How do you show the system working before I sign?',
    answer:
      'We run a prototype on a sample of your own data and walk you through what it got right and wrong. The results come from your data, wrong answers included, and no contract is needed for that step.',
  },
];

const DEV_FAQ_CATEGORIES = [
  { key: 'choosing', label: 'Choosing a Company' },
  { key: 'cost', label: 'Cost' },
  { key: 'build', label: 'How It Works' },
  { key: 'data', label: 'Data, Models and Risk' },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD
───────────────────────────────────────────────────────────────────────────── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/ai-development#webpage',
  url: 'https://factoryjet.com/ai-development',
  name: 'Best AI Development Company in India | FactoryJet',
  inLanguage: 'en-IN',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '#short-answer'] },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/ai-development#service',
  name: 'AI development',
  serviceType: 'Custom AI software development',
  areaServed: { '@type': 'Country', name: 'India' },
  url: 'https://factoryjet.com/ai-development',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: DEV_FAQS.map((item) => ({
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

export default function AiDevelopmentIndiaPage() {
  const crumbs = [
    { name: 'Home', url: 'https://factoryjet.com' },
    { name: 'AI Development', url: 'https://factoryjet.com/ai-development' },
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
              <p className="fj-eyebrow">AI DEVELOPMENT COMPANY · INDIA</p>
              <h1 className="mt-3 max-w-[22ch] font-fj-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-fj-ink md:text-[2.75rem]">
                Best AI Development Company in India for Custom Business Software
              </h1>
              <p className="mt-5 max-w-[56ch] font-fj-body text-[1.125rem] leading-[1.65] text-fj-neutral-600">
                We build AI into the systems your business already runs: answers from your own documents, drafts inside
                your CRM, generative AI apps for your team. Each one is tested on your own cases before it goes live.
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
                <li>You own the code, prompts and test sets</li>
              </ul>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 shadow-sm">
                <p className="font-fj-display text-[1.25rem] font-bold leading-snug text-fj-ink">
                  Describe the problem. We tell you if AI fits.
                </p>
                <HeroInlineForm
                  region="in"
                  source="ai_development_in_hero"
                  service="AI Development"
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
              <SectionHead eyebrow="THE SHORT ANSWER">What is the best AI development company in India?</SectionHead>
              <p className={`mt-5 ${PROSE}`}>
                The best AI development company in India for a mid-sized business is the one that tests its work on your
                own cases, builds inside the software you already use, and writes the price down before starting.
                FactoryJet works that way. We build custom AI software, from answers drawn from your documents to
                generative AI apps, and you own the result. Large IT consultancies suit programmes that span many teams and countries. A focused team suits the one problem that has to work first.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-fj-neutral-500">
                  AI development in one line
                </p>
                <p className={`mt-3 ${PROSE}`}>
                  Ordinary software engineering, with an AI model doing the reading, writing or sorting in the middle.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 3. WHICH AI COMPANY */}
        <Section>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHead eyebrow="CHOOSING A PARTNER">
                Which is the best AI company in India for building custom software?
              </SectionHead>
              <p className={`mt-5 ${PROSE}`}>
                Search for an AI company in India and you get three kinds of result mixed together: big IT services
                firms, start-ups selling a product, and agencies that build to order. They solve different problems. If
                you want a tool off the shelf, buy from a product company. If you want software built around your data,
                you need a development company.
              </p>
              <p className={`mt-4 ${PROSE}`}>
                For that second case, the best AI company in India is the one that can show you a system running in a
                live business and explain how it fails safely. Our longer{' '}
                <a className={LINK} href="/blog/top-ai-development-companies-india">
                  list of top AI development companies in India
                </a>{' '}
                sets out how to compare them.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6">
                <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-fj-neutral-500">
                  Ask every firm you shortlist
                </p>
                <ul className="mt-3 space-y-2 font-fj-body text-[0.9375rem] leading-[1.6] text-fj-neutral-600">
                  <li>Who writes the code?</li>
                  <li>Will I see it work on my data first?</li>
                  <li>Is the price fixed in writing?</li>
                  <li>Do I own the code and the test set?</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* 4. SERVICES */}
        <Section tinted>
          <SectionHead eyebrow="WHAT WE BUILD">
            What does an AI software development company build?
          </SectionHead>
          <p className={`mt-5 max-w-[720px] ${PROSE}`}>
            As an AI app development company and AI software development company, we cover six kinds of work. Each starts
            as one scoped job. If the job is a single task that takes actions, such as calling or booking, our{' '}
            <a className={LINK} href="/ai-agent-development">
              AI agent development
            </a>{' '}
            page is the better fit. For repeating back-office steps, see{' '}
            <a className={LINK} href="/ai-automation">
              AI automation
            </a>
            .
          </p>
          <div className="mt-8 divide-y divide-fj-neutral-200 border-y border-fj-neutral-200">
            {DEV_SERVICES.map((s) => (
              <div key={s.name} className="grid grid-cols-1 gap-2 py-5 md:grid-cols-12 md:gap-8">
                <h3 className="font-fj-display text-[1.125rem] font-bold text-fj-ink md:col-span-4">{s.name}</h3>
                <p className="font-fj-body text-[1rem] leading-[1.65] text-fj-neutral-600 md:col-span-8">{s.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 5. GENERATIVE AI */}
        <Section>
          <SectionHead eyebrow="GENERATIVE AI DEVELOPMENT">
            What does a generative AI development company do for a mid-sized business?
          </SectionHead>
          <p className={`mt-5 max-w-[760px] ${PROSE}`}>
            A generative AI development company builds software that writes. That can be a reply to a customer, a
            summary of a long contract, a product description in your house style or a weekly report assembled from
            several systems. Checking takes the most care. The software has to use your facts, show
            where they came from, and pass a test you set before it reaches anyone.
          </p>
          <p className={`mt-4 max-w-[760px] ${PROSE}`}>
            For a mid-sized business, we usually start with the answers-from-your-documents pattern, called
            retrieval-augmented generation. The system searches your approved files first, then writes from what it
            found and cites the source. If the help you need is a simple website chat box, our{' '}
            <a className={LINK} href="/ai-chatbot-development">
              AI chatbot development
            </a>{' '}
            page covers it.
          </p>
        </Section>

        {/* 6. COMPARISON */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs IT Services Firms vs Freelancers vs AI Product Companies"
          lead="Four ways to get AI built in India. The right one depends on how big the job is and how much of it is specific to your business."
          columns={DEV_COMPARISON_COLUMNS}
          rows={DEV_COMPARISON_ROWS}
          footer="Based on how each option is usually sold. Always check the contract and ask to see a working system."
        />

        {/* 7. MID-PAGE CTA */}
        <FinalCTA
          variant="light"
          eyebrow="START WITH ONE PROBLEM"
          headline="Describe the problem. We will test it on your data."
          sub="A short scoping call, then a prototype scored on your own cases. No contract for that step."
          primaryCta={{ label: 'Book a scoping call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Read the shortlist guide', href: '/blog/top-ai-development-companies-india' }}
        />

        {/* 8. COST */}
        <Section tinted>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHead eyebrow="COST">How much does AI development cost in India?</SectionHead>
              <p className={`mt-5 ${PROSE}`}>
                Published ranges depend on how the AI is built. One Indian agency guide,{' '}
                <a
                  className={LINK}
                  href="https://innovativeais.com/blog/how-much-does-custom-ai-software-development-cost-in-india2026-edition"
                  rel="noopener"
                >
                  updated 31 October 2026
                </a>
                , gives the build ranges in the table and puts yearly upkeep at 15 to 20 percent of the build.
              </p>
              <p className={`mt-4 ${PROSE}`}>
                A second guide,{' '}
                <a className={LINK} href="https://ecorpit.com/ai-app-development-cost-india-2026/" rel="noopener">
                  published 31 July 2026
                </a>
                , puts an AI MVP built on a model API at ₹10 lakh to ₹21 lakh and AI-native apps with retrieval, agents or voice at
                ₹20 lakh to ₹60 lakh, in an overall band of ₹6 lakh to ₹60 lakh, with upkeep at 15 to 25 percent a year. Both are vendor sources, so treat them as rough. These are market figures, not FactoryJet
                prices. FactoryJet quotes a fixed price in writing after a short scoping call.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-fj-cream">
                <div className="border-b border-fj-neutral-200 px-6 py-4">
                  <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-fj-neutral-500">
                    Market build ranges, one Indian agency guide
                  </p>
                </div>
                <div className="divide-y divide-fj-neutral-200 px-6">
                  {DEV_COST_ROWS.map((r) => (
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
          <SectionHead eyebrow="HOW A PROJECT RUNS">How does a FactoryJet AI development project work?</SectionHead>
          <ol className="mt-8 divide-y divide-fj-neutral-200 border-y border-fj-neutral-200">
            {DEV_STEPS.map((s) => (
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
            For risk, the{' '}
            <a
              className={LINK}
              href="https://www.nist.gov/itl/ai-risk-management-framework"
              rel="noopener"
            >
              NIST AI Risk Management Framework
            </a>{' '}
            is a voluntary US guide we use as a shared vocabulary. The{' '}
            <a className={LINK} href="/services/ai-development">
              AI development service page
            </a>{' '}
            goes deeper on the build items, and our{' '}
            <a className={LINK} href="/services/ai-consulting">
              AI consulting page
            </a>{' '}
            covers strategy before you build.
          </p>
        </Section>

        {/* 10. FAQ */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="AI Development in India: Your Questions Answered"
          lead="The questions buyers ask us and the AI assistants they use, answered in plain words."
          categories={DEV_FAQ_CATEGORIES}
          items={DEV_FAQS}
        />

        {/* 11. FINAL CTA */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="READY WHEN YOU ARE"
            headline="Pick one problem. We will test AI on it first."
            sub="Tell us the problem on a short call. We run a prototype on a sample of your own data, you judge it, and only then do we talk about a contract."
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
