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
  title: 'Best AI Chatbot Development Company in India | FactoryJet',
  description:
    'AI chatbots for Indian businesses on your website and WhatsApp, with a handoff to your team. Tried on your own questions before you sign.',
  keywords: [
    'AI chatbot development company',
    'AI chatbot development company in India',
    'best AI chatbot development company in India',
    'AI chatbot for business',
    'AI chatbot services',
    'chatbot development company',
    'customer service chatbot',
    'WhatsApp chatbot India',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Best AI Chatbot Development Company in India | FactoryJet',
    description:
      'Custom AI chatbots for support, sales and WhatsApp. Fixed price in writing. You own the code.',
    url: 'https://factoryjet.com/ai-chatbot-development',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet AI chatbot development company in India',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best AI Chatbot Development Company in India | FactoryJet',
    description:
      'AI chatbot services for Indian businesses. Tried on your own customer questions before you sign.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/ai-chatbot-development',
    languages: {
      'en-IN': 'https://factoryjet.com/ai-chatbot-development',
      'x-default': 'https://factoryjet.com/ai-chatbot-development',
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

const BOT_SERVICES = [
  {
    name: 'Customer service chatbot',
    text: 'Answers the repeated questions your support inbox gets, looks up order details, and passes the chat to a person with the full transcript when it is unsure.',
  },
  {
    name: 'Sales and lead chatbot',
    text: 'Talks to visitors on your site, asks the qualifying questions your sales team would ask, and sends the lead to your CRM.',
  },
  {
    name: 'WhatsApp chatbot',
    text: 'The same job on the app your customers already use. Platform choices and Indian tool connections are laid out on our WhatsApp chatbot page.',
  },
  {
    name: 'Store and order chatbot',
    text: 'Connects to a Shopify or WooCommerce store, answers product questions and tracks orders through a logistics API.',
  },
  {
    name: 'Internal knowledge chatbot',
    text: 'Trained on your SOPs, handbooks and internal documents, so staff stop asking each other where a policy lives.',
  },
];

const SUPPORT_BLOCKS = [
  {
    kicker: 'Answers',
    name: 'The repeated questions',
    text: 'Order status, return rules, delivery times, fees, opening hours. The bot answers from your documents, found passage by passage, so each reply comes from your policy.',
  },
  {
    kicker: 'Lookups',
    name: 'Live order and ticket data',
    text: 'For order questions the bot can query a logistics API such as Shiprocket or Delhivery, or read the order from your store, and reply with the current status.',
  },
  {
    kicker: 'Handoff',
    name: 'A person takes over',
    text: 'When the bot is unsure, the chat goes to your team with the whole conversation attached. You choose where it lands: a WhatsApp number, a Freshdesk ticket, a Zoho CRM task or a Slack message.',
  },
];

const BOT_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Chatbot platform subscription' },
  { label: 'Large enterprise AI vendor' },
  { label: 'Freelance developer' },
] as const;

const BOT_COMPARISON_ROWS = [
  {
    feature: 'Usually suits',
    values: [
      'A support or sales bot wired into your own tools',
      'A team that wants a bot running this week with settings, not code',
      'Banks, telecoms and large retailers with huge chat volumes',
      'A small bot with one source of answers',
    ],
  },
  {
    feature: 'Who writes your answers',
    values: [
      'Built from your documents, then tested on your real questions',
      'You write and maintain the knowledge base yourself',
      'A project team, often under a long contract',
      'The one person doing the work',
    ],
  },
  {
    feature: 'Trial before signing',
    values: [
      'The bot answers a set of your own customer questions first',
      'A free trial of the product is common',
      'A paid proof of concept is common',
      'A demo video or a sample is common',
    ],
  },
  {
    feature: 'Handoff to a person',
    values: [
      'Built in, with the transcript passed across',
      'Available, within the plan you pay for',
      'Available, set up as part of the programme',
      'Worth asking about early',
    ],
  },
  {
    feature: 'Code and data ownership',
    values: [
      'You own the code, and the accounts are yours',
      'The vendor hosts it, so moving out takes work',
      'Set by the contract',
      'Ask before the first payment',
    ],
  },
  {
    feature: 'How the work is paid for',
    values: [
      'One fixed price per phase, in writing',
      'A monthly fee that grows with usage or seats',
      'One large quote for the full programme',
      'A rate per hour, or a figure per task',
    ],
  },
];

const BOT_COST_ROWS = [
  { tier: 'Rule-based / decision-tree bot (WhatsApp or website)', range: '₹50,000 to ₹1.5 lakh', source: 'Decipher' },
  { tier: 'LLM-powered FAQ bot (no custom knowledge)', range: '₹1 lakh to ₹2.5 lakh', source: 'Decipher' },
  { tier: 'RAG chatbot (LLM on your data), single language, single knowledge base', range: '₹3 lakh to ₹8 lakh', source: 'Decipher' },
  { tier: 'Multi-channel AI chatbot (web + WhatsApp + voice)', range: '₹6 lakh to ₹15 lakh', source: 'Decipher' },
  { tier: 'Tier 3: AI chatbot with GPT or Claude', range: '₹2,50,000 to ₹6,00,000', source: 'CodingClave' },
  { tier: 'Tier 4: WhatsApp AI chatbot', range: '₹2,00,000 to ₹5,50,000', source: 'CodingClave' },
];

const BOT_STEPS = [
  {
    step: '01',
    title: 'Collect the real questions',
    text: 'You send us the last few months of customer questions, from email, chat or WhatsApp. We sort them by how often they come up and which ones need a person.',
  },
  {
    step: '02',
    title: 'Try it on your questions',
    text: 'Before you sign, the bot answers a sample of those questions from your own documents. You read the answers and the handoffs and judge them yourself.',
  },
  {
    step: '03',
    title: 'Build the first channel',
    text: 'One channel goes live first, either your website or WhatsApp, with the connections to your tools. Paid at milestones.',
  },
  {
    step: '04',
    title: 'Test the awkward cases',
    text: 'We run odd, angry and off-topic questions through it, tighten when it should hand off, and fix wrong answers before customers see them.',
  },
  {
    step: '05',
    title: 'Go live, then tune',
    text: 'Launch comes with a conversation log your team can read. Wrong answers found after launch are corrected without a new charge during a cover window we write down at the start. New features get their own quote.',
  },
];

const BOT_FAQS = [
  /* ── Choosing a company ── */
  {
    category: 'choosing',
    question: 'Which is the best AI chatbot development company in India?',
    answer:
      'No list is neutral, and the best fit depends on the job. When we asked ChatGPT this question on 24 November 2026, it named platform vendors and custom builders and said there is no single winner. For a business that wants a support or sales bot wired into its own tools, we would name FactoryJet: your questions tried first, the price in writing, the code yours.',
  },
  {
    category: 'choosing',
    question: 'What are the top AI chatbot development companies in India?',
    answer:
      'Lists usually mix three kinds of company: chatbot platforms such as Haptik, Yellow.ai and Gupshup, custom software firms, and small agencies. They answer different needs, so a ranking across them is hard to trust. Decide whether you want a product or a custom build, then compare firms within that group.',
  },
  {
    category: 'choosing',
    question: 'Which chatbot company suits a smaller business?',
    answer:
      'Pick a team that asks for your customer questions before it talks about technology, and that will show the bot answering them before you sign. Platforms suit teams that will maintain a knowledge base themselves. A custom build suits a business whose answers live in its own tools.',
  },
  {
    category: 'choosing',
    question: 'What should I ask a chatbot development company before hiring it?',
    answer:
      'Ask to see the bot answer ten of your real questions. Ask what it does when it is unsure, and where the chat goes next. Ask who owns the code and the accounts, and how a wrong answer gets reported and fixed. Get the price as a written figure.',
  },
  {
    category: 'choosing',
    question: 'Should I choose a chatbot platform or a custom chatbot developer?',
    answer:
      'A platform is quicker to switch on and bills monthly. A custom developer fits when the bot has to read your order system, your CRM or your documents and act on them. If you are unsure, list the three systems the bot must touch. Two or more points to a custom build.',
  },
  {
    category: 'choosing',
    question: 'Is there a good chatbot development company for Mumbai, Bengaluru, Delhi NCR, Pune, Hyderabad or Chennai?',
    answer:
      'Yes. We take on chatbot projects for businesses across India. Send us the questions your customers ask and we reply with what the bot could cover.',
  },
  /* ── Cost ── */
  {
    category: 'cost',
    question: 'How much does AI chatbot development cost in India?',
    answer:
      'Indian vendor guides give wide ranges. Decipher Consultancy, published 25 July 2026, lists ₹3 lakh to ₹8 lakh for a RAG chatbot on a single language and one knowledge base. CodingClave, updated 29 October 2026, lists ₹2,50,000 to ₹6,00,000 for an AI chatbot with GPT or Claude. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'cost',
    question: 'What does an AI chatbot cost to run each month?',
    answer:
      'CodingClave puts monthly running cost at ₹8,000 to ₹40,000 for its GPT or Claude chatbot tier, and ₹5,000 to ₹25,000 for its WhatsApp tier plus Meta fees. Decipher lists ₹25,000 to ₹80,000 a month for a RAG chatbot. Both come from vendors, so read them as loose guides.',
  },
  {
    category: 'cost',
    question: 'What extra does a WhatsApp chatbot cost?',
    answer:
      'Meta charges for messages on the WhatsApp Business Platform. Its pricing page, read on 24 November 2026, says billing is per delivered message, set by message category and the recipient country, and that the earlier per-conversation model ended on 1 July 2025. Ask any developer which provider they route through and what they add.',
  },
  {
    category: 'cost',
    question: 'Is there a fixed rate card for chatbot work?',
    answer:
      'No. The questions, the channels and the tools to connect decide the price. After a brief scoping call we send one written price for each phase, with payment at milestones.',
  },
  {
    category: 'cost',
    question: 'Is an AI chatbot for business worth the money?',
    answer:
      'It pays when your team answers the same dozen questions every day, or when slow replies lose enquiries. It pays less when each question needs a long judgement call. Count how many chats a week are repeats. That count is the honest basis for the decision.',
  },
  {
    category: 'cost',
    question: 'Can I get an AI chatbot for free?',
    answer:
      'For a small site, yes. Several platforms have free plans, and they answer generic questions well. Costs show up when the bot must read your orders, sit on WhatsApp, hand off to your team, or follow your policies. That is where custom work earns its fee.',
  },
  /* ── Basics ── */
  {
    category: 'basics',
    question: 'What is an AI chatbot development company?',
    answer:
      'It is a firm that designs and builds chatbots that understand questions in ordinary language, answer from your information and connect to your tools. The work covers the conversation design, the connections, testing, launch and support afterwards.',
  },
  {
    category: 'basics',
    question: 'What do AI chatbot services include?',
    answer:
      'Customer service bots, sales and lead bots, WhatsApp bots, store and order bots, and internal knowledge bots. Each begins with a call about the questions your customers ask and the tools the bot must reach.',
  },
  {
    category: 'basics',
    question: 'How does an AI chatbot differ from a rule-based one?',
    answer:
      'A rule-based bot follows a menu of buttons and keywords. It works until a customer words something differently, and then it loops. An AI chatbot uses a language model to understand what was meant and answer from your information. Many good builds use both: buttons for fixed steps, AI for open questions.',
  },
  {
    category: 'basics',
    question: 'How is an AI chatbot different from an AI agent?',
    answer:
      'A chatbot talks with customers and answers. An agent also does work inside your systems, such as updating a record or booking a slot. Some projects need only a chatbot. Our AI agent development page covers the larger case, and our blog compares the two for a business buyer.',
  },
  {
    category: 'basics',
    question: 'What is the best AI chatbot for business?',
    answer:
      'The model underneath matters less than the information it answers from and the tools it can reach. We choose the language model per project to suit the job and the budget, and explain the choice when we scope it. A good test is how it answers your hardest ten questions.',
  },
  /* ── Customer service ── */
  {
    category: 'service',
    question: 'What is a customer service chatbot?',
    answer:
      'It is a chatbot that handles the first line of customer support: order questions, returns, delivery, fees and how-to queries. It answers at any hour and sends the cases that need judgement to your team, so people spend their day on the harder conversations.',
  },
  {
    category: 'service',
    question: 'Can a customer service chatbot replace my support team?',
    answer:
      'Not fully, and a good build does not try. It takes the repeated questions and leaves refunds, complaints and unusual cases to people. Your team sees the whole transcript when a chat is passed over, so the customer does not have to repeat themselves.',
  },
  {
    category: 'service',
    question: 'What happens when the chatbot cannot answer a question?',
    answer:
      'It hands off. Our WhatsApp chatbot page describes an escalation path on every build, with the conversation history passed along. You choose where it goes: a WhatsApp number, a Freshdesk ticket, a Zoho CRM task or a Slack notification.',
  },
  {
    category: 'service',
    question: 'Can the chatbot tell customers where their order is?',
    answer:
      'Yes, where your logistics provider offers an API. Our WhatsApp chatbot page describes connecting to Shiprocket, Delhivery or any platform with an API, so a question like "where is my order" gets the live tracking status.',
  },
  {
    category: 'service',
    question: 'Which Indian languages can the chatbot reply in?',
    answer:
      'Our WhatsApp chatbot page lists English, Hindi, Tamil, Telugu, Marathi, Gujarati and Kannada, and says the bot detects the language a customer writes in. Tell us your customers\' languages, and we confirm at scoping what we can build and test.',
  },
  /* ── How it works ── */
  {
    category: 'how',
    question: 'Should the chatbot sit on my website, on WhatsApp, or both?',
    answer:
      'Put it where your customers already write to you. Look at where your enquiries arrive today. A website widget suits visitors who are still browsing. WhatsApp suits customers who already have your number. One build can serve both, with the same answers behind each channel.',
  },
  {
    category: 'how',
    question: 'Which tools can the chatbot connect to?',
    answer:
      'Our WhatsApp chatbot page lists Razorpay, Shiprocket, Shopify, WooCommerce and Google Sheets, and CRM connectors for Zoho CRM, HubSpot, LeadSquared and Freshdesk. If a tool offers an API or webhooks, it can usually be reached. Each connection is checked before we price it.',
  },
  {
    category: 'how',
    question: 'How do you teach the chatbot about my business?',
    answer:
      'Usually we do not retrain the model. We split your documents into short passages, and the bot finds the closest ones when a question arrives, then answers from them. Updating an answer means updating a document. We also ask to see the questions your team gets today.',
  },
  {
    category: 'how',
    question: 'How do you test a chatbot before it goes live?',
    answer:
      'We build a test set from real questions your team has answered, including awkward and off-topic ones, and check each answer for correctness and for the right source. Before you sign, you read a sample of those answers yourself.',
  },
  {
    category: 'how',
    question: 'Who owns the chatbot code and the data?',
    answer:
      'You do. Our US chatbot page says the full codebase and credentials are delivered, with no platform you cannot leave. We keep the same terms in India: the accounts are yours, and another developer can take the project over.',
  },
  {
    category: 'how',
    question: 'Is customer data safe in a chatbot?',
    answer:
      'Ask every developer for a written note on where chat data is stored and which model provider sees it. Our WhatsApp chatbot page lists India DPDP Act readiness and a full audit trail. We confirm the details for your project at scoping.',
  },
  {
    category: 'how',
    question: 'How long does a chatbot take to build?',
    answer:
      'It depends on the channels, the tools it connects to and how many question types it covers. A single-channel bot with one source of answers is far smaller than a multi-channel build wired into your CRM. The timeline is put in writing before work begins.',
  },
];

const BOT_FAQ_CATEGORIES = [
  { key: 'choosing', label: 'Choosing a Company' },
  { key: 'cost', label: 'Cost' },
  { key: 'basics', label: 'What It Is' },
  { key: 'service', label: 'Customer Service Chatbots' },
  { key: 'how', label: 'How It Works' },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD
───────────────────────────────────────────────────────────────────────────── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/ai-chatbot-development#webpage',
  url: 'https://factoryjet.com/ai-chatbot-development',
  name: 'Best AI Chatbot Development Company in India | FactoryJet',
  inLanguage: 'en-IN',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '#short-answer'] },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/ai-chatbot-development#service',
  name: 'AI chatbot development',
  serviceType: 'AI chatbot development services',
  areaServed: { '@type': 'Country', name: 'India' },
  url: 'https://factoryjet.com/ai-chatbot-development',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: BOT_FAQS.map((item) => ({
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

export default function AiChatbotDevelopmentIndiaPage() {
  const crumbs = [
    { name: 'Home', url: 'https://factoryjet.com' },
    { name: 'AI Chatbot Development', url: 'https://factoryjet.com/ai-chatbot-development' },
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
              <p className="fj-eyebrow">AI CHATBOT DEVELOPMENT · INDIA</p>
              <h1 className="mt-3 max-w-[22ch] font-fj-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-fj-ink md:text-[2.75rem]">
                Best AI Chatbot Development Company in India for Support, Sales and WhatsApp
              </h1>
              <p className="mt-5 max-w-[56ch] font-fj-body text-[1.125rem] leading-[1.65] text-fj-neutral-600">
                We build chatbots that answer your customers from your own documents and tools, and pass the chat to
                your team when a person is needed. You see it answer your real questions before you sign.
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
                <li>You own the code, and the accounts are yours</li>
              </ul>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 shadow-sm">
                <p className="font-fj-display text-[1.25rem] font-bold leading-snug text-fj-ink">
                  Tell us what customers keep asking. We tell you what a bot could cover.
                </p>
                <HeroInlineForm
                  region="in"
                  source="ai_chatbot_in_hero"
                  service="AI Chatbot Development"
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
              <SectionHead eyebrow="THE SHORT ANSWER">What is the best AI chatbot development company in India?</SectionHead>
              <p className={`mt-5 ${PROSE}`}>
                The best AI chatbot development company in India for your business is the one that answers a sample of
                your own customer questions before you sign, hands difficult chats to your team, and puts the price in
                writing. We build for your website and
                WhatsApp, connect the bot to tools such as Shopify, Zoho CRM and Razorpay, and leave you the code.
                Chatbot platforms such as Haptik, Yellow.ai and Gupshup suit teams that want a product and a monthly bill. A
                custom build suits a bot that has to read your orders or documents.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-fj-neutral-500">
                  An AI chatbot in one line
                </p>
                <p className={`mt-3 ${PROSE}`}>
                  Software that understands a question written in ordinary words, answers from your information, and
                  knows when to call a person.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 3. SERVICES */}
        <Section>
          <SectionHead eyebrow="WHAT WE BUILD">What do our AI chatbot services include?</SectionHead>
          <p className={`mt-5 max-w-[720px] ${PROSE}`}>
            An AI chatbot for business comes in a few shapes, and each one starts with the questions your customers
            ask today. If the job is to take actions, such as booking or calling, read our{' '}
            <a className={LINK} href="/ai-agent-development">
              AI agent development
            </a>{' '}
            page. For workflows between your tools, see{' '}
            <a className={LINK} href="/ai-automation">
              AI automation
            </a>
            , and for software built on your own documents, see{' '}
            <a className={LINK} href="/ai-development">
              AI development
            </a>
            .
          </p>
          <div className="mt-8 divide-y divide-fj-neutral-200 border-y border-fj-neutral-200">
            {BOT_SERVICES.map((s) => (
              <div key={s.name} className="grid grid-cols-1 gap-2 py-5 md:grid-cols-12 md:gap-8">
                <h3 className="font-fj-display text-[1.125rem] font-bold text-fj-ink md:col-span-4">{s.name}</h3>
                <p className="font-fj-body text-[1rem] leading-[1.65] text-fj-neutral-600 md:col-span-8">{s.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 4. CUSTOMER SERVICE CHATBOT */}
        <Section tinted>
          <SectionHead eyebrow="CUSTOMER SERVICE CHATBOT">
            What can a customer service chatbot do for an Indian support team?
          </SectionHead>
          <p className={`mt-5 max-w-[760px] ${PROSE}`}>
            A customer service chatbot takes the first line of support. In many Indian businesses that line is a shared
            inbox, a WhatsApp number and a phone, all fed by the same twenty questions. The bot answers those
            questions at any hour. Your people keep the conversations that need judgement. Judge a good build by how
            cleanly it hands over.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {SUPPORT_BLOCKS.map((b) => (
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
            Language matters for support in India. Our{' '}
            <a className={LINK} href="/whatsapp-chatbot">
              WhatsApp chatbot page
            </a>{' '}
            lists English, Hindi, Tamil, Telugu, Marathi, Gujarati and Kannada, and says the bot detects the language
            a customer writes in. Which of those your project needs is confirmed at scoping. Our{' '}
            <a className={LINK} href="/ai-agent-development">
              AI agent development page
            </a>{' '}
            covers the build steps for bots that also act inside your systems.
          </p>
        </Section>

        {/* 5. CHOOSING A COMPANY */}
        <Section>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHead eyebrow="CHOOSING A PARTNER">How do you choose a chatbot development company in India?</SectionHead>
              <p className={`mt-5 ${PROSE}`}>
                On 24 November 2026 we asked ChatGPT for the best AI chatbot development company in India. Its answer
                named platform vendors and custom builders, grouped by what each does best, and it added that no firm
                is the objective number one. We agree with that last part. Sort the companies
                into platforms, custom builders and large enterprise vendors first, then compare within a group.
              </p>
              <p className={`mt-4 ${PROSE}`}>
                A chatbot development company worth hiring will ask for your customer questions first. It will let you
                read the bot&apos;s answers to them before any contract, and it will be plain about what happens when the
                bot is wrong. Our blog post on{' '}
                <a className={LINK} href="/blog/ai-chatbots-vs-ai-agents-business">
                  chatbots versus AI agents
                </a>{' '}
                helps if you are unsure which of the two you need.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6">
                <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-fj-neutral-500">
                  Put these to every firm on your list
                </p>
                <ul className="mt-3 space-y-2 font-fj-body text-[0.9375rem] leading-[1.6] text-fj-neutral-600">
                  <li>Will it answer ten of my real questions first?</li>
                  <li>Where does the chat go when the bot is unsure?</li>
                  <li>Who owns the code and the accounts?</li>
                  <li>Is the price fixed and in writing?</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* 6. COMPARISON */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs Chatbot Platforms vs Enterprise Vendors vs Freelancers"
          lead="Four ways to get a business chatbot in India. How many of your own systems the bot must read usually decides which one fits."
          columns={BOT_COMPARISON_COLUMNS}
          rows={BOT_COMPARISON_ROWS}
          footer="Columns describe typical patterns, not named firms. Ask each company for a live example before you decide."
        />

        {/* 7. MID-PAGE CTA */}
        <FinalCTA
          variant="light"
          eyebrow="START WITH YOUR QUESTIONS"
          headline="Send ten questions your customers ask. See how a bot would answer."
          sub="A short call, then a sample of answers built from your own documents. No signature needed for that."
          primaryCta={{ label: 'Book a scoping call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Read the WhatsApp page', href: '/whatsapp-chatbot' }}
        />

        {/* 8. CHANNELS */}
        <Section tinted>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHead eyebrow="WEBSITE AND WHATSAPP">Which channel should a business chatbot start on?</SectionHead>
              <p className={`mt-5 ${PROSE}`}>
                Start where your enquiries already arrive. Open your inbox and your call log, and count. A website
                widget meets visitors while they browse, and it works well on a store or a service page with many
                questions. WhatsApp reaches people who already have your number. Both can sit on one set of answers, so
                you update a policy once.
              </p>
              <p className={`mt-4 ${PROSE}`}>
                WhatsApp adds one cost. Meta&apos;s{' '}
                <a className={LINK} href="https://developers.facebook.com/docs/whatsapp/pricing" rel="noopener">
                  WhatsApp Business Platform pricing page
                </a>{' '}
                states that billing is per delivered message and depends on the message category and the
                recipient&apos;s country. The page also sets a 24-hour customer service window, outside which only
                approved templates can be sent. A developer should explain both before quoting.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-fj-neutral-500">
                  Rule of thumb
                </p>
                <p className={`mt-3 ${PROSE}`}>
                  Browsing visitors suit a website widget. Existing customers suit WhatsApp. Most businesses begin with
                  one and add the other once the answers are proven.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 9. COST */}
        <Section>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHead eyebrow="COST">How much does AI chatbot development cost in India?</SectionHead>
              <p className={`mt-5 ${PROSE}`}>
                Two Indian vendor guides price chatbots by type. Decipher Consultancy,{' '}
                <a
                  className={LINK}
                  href="https://decipherconsultancy.in/blog/how-much-does-an-ai-chatbot-cost-in-india-2026/"
                  rel="noopener"
                >
                  published 25 July 2026
                </a>
                , prices four chatbot types. CodingClave,{' '}
                <a className={LINK} href="https://codingclave.com/blog/ai-chatbot-development-cost-india-2026" rel="noopener">
                  updated 29 October 2026
                </a>
                , splits builds into five tiers. The table shows the rows closest to a business chatbot, with each
                label copied from its source.
              </p>
              <p className={`mt-4 ${PROSE}`}>
                Both guides add monthly running costs for hosting, model usage and upkeep, and CodingClave notes Meta
                fees on top for WhatsApp. They are vendor figures and should be read as loose guides.
                After the scoping call, FactoryJet sends one fixed written price. For US figures, our{' '}
                <a className={LINK} href="/blog/ai-chatbot-cost-2026">
                  AI chatbot cost guide
                </a>{' '}
                is written for American buyers.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white">
                <div className="border-b border-fj-neutral-200 px-6 py-4">
                  <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-fj-neutral-500">
                    Build cost, one-time, Indian vendor guides
                  </p>
                </div>
                <div className="divide-y divide-fj-neutral-200 px-6">
                  {BOT_COST_ROWS.map((r) => (
                    <div key={r.tier} className="flex flex-wrap items-baseline justify-between gap-2 py-4">
                      <p className="max-w-[22rem] font-fj-body text-[0.9375rem] font-semibold text-fj-ink">{r.tier}</p>
                      <p className="font-fj-body text-[0.9375rem] text-fj-neutral-600">
                        {r.range} <span className="text-fj-neutral-500">({r.source})</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 10. PROCESS */}
        <Section tinted>
          <SectionHead eyebrow="HOW A PROJECT RUNS">How does a FactoryJet chatbot project work?</SectionHead>
          <ol className="mt-8 divide-y divide-fj-neutral-200 border-y border-fj-neutral-200">
            {BOT_STEPS.map((s) => (
              <li key={s.step} className="grid grid-cols-1 gap-2 py-5 md:grid-cols-12 md:gap-8">
                <div className="flex items-baseline gap-4 md:col-span-4">
                  <span className="font-fj-mono text-[0.8125rem] font-medium text-[#B23E13]">{s.step}</span>
                  <h3 className="font-fj-display text-[1.125rem] font-bold text-fj-ink">{s.title}</h3>
                </div>
                <p className="font-fj-body text-[1rem] leading-[1.65] text-fj-neutral-600 md:col-span-8">{s.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* 11. FAQ */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="AI Chatbots in India: Common Questions"
          lead="Questions from buyers and from AI assistant chats, with short straight answers."
          categories={BOT_FAQ_CATEGORIES}
          items={BOT_FAQS}
        />

        {/* 12. FINAL CTA */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="READY WHEN YOU ARE"
            headline="Bring your customers' questions. Leave with a bot you can judge."
            sub="Share a few months of questions on a short call. We answer a sample of them from your documents. Read the results, then decide."
            primaryCta={{ label: 'Book my scoping call', modal: true, region: 'in' }}
            secondaryCta={{ label: 'See our WhatsApp chatbot work', href: '/whatsapp-chatbot' }}
            objectionHandler="One written price per phase. The code and accounts are yours. Support is optional."
          />
        </div>
      </main>

      <SiteFooter locale="in" />
    </>
  );
}
