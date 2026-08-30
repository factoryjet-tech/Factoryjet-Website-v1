import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import CityContextSection from '@/components/v2/CityContextSection';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import GetFreeQuoteCTA from '@/components/v2/GetFreeQuoteCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'AI Chatbot Agent Development for US Businesses | FactoryJet',
  description:
    'Custom AI chatbot agents for US businesses: website chat, phone, SMS and email. Integrated with HubSpot, Salesforce, Shopify and Stripe. Fixed price.',
  keywords: [
    'AI chatbot development services',
    'AI chatbot agent development USA',
    'custom AI chatbot development US',
    'chatbot agent for customer support US',
    'conversational AI agent development',
    'AI customer support chatbot US',
    'HubSpot AI chatbot integration',
    'Salesforce AI chatbot agent',
    'website AI chat agent',
    'Spanish and English AI chatbot',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Chatbot Agent Development for US Businesses | FactoryJet',
    description:
      'Custom AI chatbot agents for websites, phone, SMS, email and support portals. HubSpot, Salesforce, Shopify and Stripe ready. Fixed price. Live in 2-3 weeks.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-chatbot',
    images: [
      {
        url: 'https://factoryjet.com/images/us/services/hero-ai-agent-us.webp',
        width: 1200,
        height: 800,
        alt: 'FactoryJet AI Agent Development Services',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Chatbot Agent Development for US Businesses | FactoryJet',
    description:
      'Website AI chat, phone, SMS and email chatbot agents for US businesses. Fixed price. English + Spanish ready.',
    images: ['https://factoryjet.com/images/us/services/hero-ai-agent-us.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-agent-development/ai-chatbot',
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
   JSON-LD Schemas, faqSchema is declared after CHATBOT_FAQ_ITEMS below
───────────────────────────────────────────────────────────────────────────── */

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-08-30';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-chatbot#webpage',
  url: 'https://factoryjet.com/services/ai-agent-development/ai-chatbot',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Chatbot Agent Development',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: 'AI Chatbot Development',
  description:
    'Custom AI chatbot agents for US businesses: website chat agents, phone and SMS agents, and email support bots integrated with HubSpot, Salesforce, Shopify, Stripe, and Zendesk. Fixed price. Deployed in 2-3 weeks.',
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-chatbot#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ai-agent-development/ai-chatbot',
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const CHATBOT_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'A 45-minute call. We map which conversations are costing your team the most time, your highest-volume website chat and email threads, FAQ patterns, lead qualification steps, and identify the highest-ROI chatbot use case to build first.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We design conversation flows, decide on deployment channels (website chat, phone, SMS, email, or a mix), map integrations with your existing stack, and deliver a chatbot design document you approve before we write code.',
  },
  {
    number: '03',
    title: 'Build & Integrate',
    description:
      'Engineering the chatbot agent with your language, tone, and business rules. We integrate HubSpot, Salesforce, Shopify, Zendesk, Stripe, or ShipStation so the agent can take actions, not just answer questions.',
  },
  {
    number: '04',
    title: 'Train & Test',
    description:
      'We run the chatbot against real customer conversation samples, including Spanish queries, edge cases, and abusive inputs, tune the prompts, and stress-test until behavior is reliable and on-brand.',
  },
  {
    number: '05',
    title: 'Deploy & Hand Over',
    description:
      'Launch on your chosen channel with monitoring, escalation paths to human agents, and a recorded training session. All code, API keys, and channel account access are handed to you at delivery.',
  },
];

const CHATBOT_STATS = [
  {
    value: '70%',
    label: 'of routine support questions handled by AI chatbots without a human touching them',
    microcopy: 'FactoryJet client data',
    categoryLabel: 'DEFLECTION RATE',
  },
  {
    value: '<60s',
    label: 'average first reply on chat, SMS and email vs. hours with human-only support',
    microcopy: 'across FactoryJet chatbot deployments',
    categoryLabel: 'RESPONSE TIME',
  },
  {
    value: '24/7',
    label: 'coverage across website chat, phone, SMS and email with no night shift to staff',
    microcopy: 'every FactoryJet chatbot deployment',
    categoryLabel: 'COVERAGE',
  },
];

const CHATBOT_MARKET_STATS = [
  {
    value: '49%',
    label: 'of US adults now use AI chatbots, up from 33% in summer 2024',
    sourceUrl:
      'https://www.pewresearch.org/internet/2026/06/17/americans-and-ai-2026-chatbots-smart-devices-and-views-on-impact/',
    sourceLabel: 'Pew Research Center, June 2026',
  },
  {
    value: '$3.99B',
    label: 'global chatbot market projected by 2030 at a 25.7% CAGR, with North America leading',
    sourceUrl:
      'https://www.prnewswire.com/news-releases/chatbot-market-to-hit-3-99-billion-by-2030-at-cagr-25-7-grand-view-research-inc-301741773.html',
    sourceLabel: 'Grand View Research',
  },
  {
    value: '61.1%',
    label: 'of Americans who speak a language other than English at home speak Spanish',
    sourceUrl: 'https://www.census.gov/newsroom/press-releases/2023/language-at-home-acs-5-year.html',
    sourceLabel: 'US Census Bureau, 2018-2022 ACS',
  },
];

const CHATBOT_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Scripted Chatbot Tool' },
  { label: 'Freelancer' },
  { label: 'No-Code Builder' },
] as const;

const CHATBOT_COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: [
      'Fixed price after a scoping call',
      'Monthly SaaS subscription, forever',
      'Hourly or milestone, scope creep common',
      'Monthly subscription, and you build it',
    ],
  },
  {
    feature: 'Understands natural language',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="nc" kind="partial" />,
    ],
  },
  {
    feature: 'English + Spanish support',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="nc" kind="no" />,
    ],
  },
  {
    feature: 'Website, phone, SMS and email channels',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="partial" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="nc" kind="partial" />,
    ],
  },
  {
    feature: 'HubSpot / Zendesk / Shopify integration',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="nc" kind="no" />,
    ],
  },
  {
    feature: 'Stripe payment and invoice actions',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="nc" kind="no" />,
    ],
  },
  {
    feature: 'Fixed-price contract (no ongoing SaaS fee)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="nc" kind="no" />,
    ],
  },
  {
    feature: 'You own the code & IP',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="fl" kind="yes" />,
      <CompareIcon key="nc" kind="no" />,
    ],
  },
  {
    feature: '30-day post-launch support',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="nc" kind="no" />,
    ],
  },
  {
    feature: '500+ SMB projects',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="nc" kind="no" />,
    ],
  },
];

const CHATBOT_INDUSTRIES = [
  {
    name: 'DTC E-Commerce',
    description:
      'Website chat and email agents that answer order status queries, process returns, send carrier tracking updates from ShipStation, and handle product questions 24/7, integrated directly with your Shopify or WooCommerce store. Frees your support team to focus on complex issues.',
    example: 'DTC brands report 70%+ support ticket deflection within 30 days of launch.',
    linkLabel: 'See e-commerce AI',
    linkHref: '/services/ecommerce-development',
  },
  {
    name: 'Real Estate',
    description:
      'Website and SMS agents that qualify leads coming in from Zillow, Realtor.com, and your own listings, answer property FAQs, show available units, and book showings: all logged automatically to HubSpot, Salesforce, or Follow Up Boss.',
    example: 'Brokerages see 35-50% more showings booked without adding inside sales reps.',
  },
  {
    name: 'Education & Training',
    description:
      'Enrollment agents that answer program questions, collect student details, send Stripe payment links, deliver onboarding material, and track cohort registration, cutting advisor workload by 60%+.',
    example: 'Course platforms report 3× faster lead-to-enrollment conversion.',
  },
  {
    name: 'Healthcare & Clinics',
    description:
      'Appointment booking agents on your website, phone line, and SMS that check provider availability, confirm slots, send reminders, and handle cancellations, built to respect HIPAA requirements with full audit trails on every interaction.',
    example: 'Clinics recover 3-4 hours of front-desk time per day.',
  },
  {
    name: 'Financial Services',
    description:
      'Lead qualification agents for loan applications, insurance quotes, and advisory services, collecting identity documents, asking eligibility questions, and routing hot leads to advisors in real time, with TCPA consent captured before any outbound SMS or call.',
    example: 'Lenders cut application intake time by 55%.',
  },
  {
    name: 'Retail & Distribution',
    description:
      'B2B ordering agents on your customer portal, email, and SMS that let your dealers place orders, check stock levels, track delivery status, and pull invoices from QuickBooks or NetSuite, without calling your sales team or waiting for business hours.',
    example: 'Distributors report 40% fewer inbound sales calls after launch.',
  },
];

const CHATBOT_FAQ_CATEGORIES = [
  { key: 'basics',     label: 'Chatbot Basics' },
  { key: 'channels',   label: 'Channels & Deployment' },
  { key: 'compliance', label: 'US Stack & Compliance' },
  { key: 'process',    label: 'Process & Timeline' },
  { key: 'pricing',    label: 'Pricing & ROI' },
];

const CHATBOT_FAQ_ITEMS = [

  /* ── Chatbot Basics ── */
  {
    category: 'basics',
    question: 'What is the difference between an AI chatbot and a scripted chatbot?',
    answer:
      "A scripted chatbot follows a fixed decision tree, it works only if the customer clicks the expected buttons and breaks the moment someone types something unexpected. An AI chatbot uses a large language model to understand natural language intent, respond conversationally, and handle questions the script never anticipated. It also takes actions: checking your Shopify order status, updating HubSpot, sending a Stripe payment link, things a scripted bot simply cannot do.",
  },
  {
    category: 'basics',
    question: 'What can an AI chatbot agent actually do for my business?',
    answer:
      "The most common tasks: answering the same website chat and email questions 200 times a day (order status, pricing, availability), qualifying inbound leads from ads and pushing them to HubSpot or Salesforce, booking appointments or demos without a human involved, sending Stripe payment links and confirming receipt, processing returns by checking your Shopify or WooCommerce orders, and pulling invoices out of QuickBooks. If your support team does it more than a few times a day, an AI chatbot agent can handle it.",
  },
  {
    category: 'basics',
    question: 'Will the chatbot understand customer questions it was not specifically trained on?',
    answer:
      "Yes, that is the core advantage of AI over scripted bots. Large language models understand intent, not just keywords. A customer asking 'where is my package', 'has my order shipped', or 'any update on my delivery' will all be understood as the same question. The agent reads your ShipStation or carrier tracking data and replies accurately, regardless of how the customer phrases it.",
  },
  {
    category: 'basics',
    question: 'What happens when the chatbot cannot answer a question?',
    answer:
      "Every chatbot we build includes a confidence threshold, if the model is not sure, it escalates to a human agent rather than guessing. We set this up with a context handover (the agent sees the full conversation history) so the customer does not have to repeat themselves. You control where escalations go: a live chat queue, a Zendesk ticket, a HubSpot task, or a Slack notification.",
  },

  /* ── Channels & Deployment ── */
  {
    category: 'channels',
    question: 'Which channels can the AI chatbot agent be deployed on?',
    answer:
      "Your website (embedded widget), email, SMS, and your phone line as a voice agent. We also deploy into support portals like Zendesk, Intercom, and HubSpot Service Hub, plus Facebook Messenger and Instagram DMs where social is a real support channel for you. Most US businesses start with the website widget because that is where the highest-intent traffic already lands, then add SMS and email.",
  },
  {
    category: 'channels',
    question: 'Can the agent handle phone calls and SMS, not just typed chat?',
    answer:
      "Yes. We build voice and SMS agents on Twilio so the same knowledge base and the same business rules power your phone line, your text messages, and your website chat. Callers get a natural conversation rather than a phone menu, and the agent can transfer to a human with the full call context attached. Outbound SMS and calls follow TCPA consent rules.",
  },
  {
    category: 'channels',
    question: 'Do you support WhatsApp as a channel?',
    answer:
      "Yes, as one option among several rather than the default. WhatsApp makes sense if you sell to customers outside the US or into communities that already message that way. We set up the WhatsApp Business API through a Meta-approved provider and run it off the same agent. For most US businesses, website chat, email and SMS carry far more volume, so that is where we usually start.",
  },
  {
    category: 'channels',
    question: 'Can the chatbot send proactive messages, not just respond?',
    answer:
      "Yes. Common use cases: order shipped notifications, payment confirmations, appointment reminders, follow-up messages to leads who went quiet, and re-engagement campaigns. We wire the triggers into your Stripe, Shopify, or HubSpot events so they fire automatically. For SMS and voice we build in TCPA consent capture and one-click opt-out before anything goes out.",
  },

  /* ── US Stack & Compliance ── */
  {
    category: 'compliance',
    question: 'Can the chatbot respond in Spanish as well as English?',
    answer:
      "Yes. Spanish is the largest non-English language spoken at home in the US, accounting for 61.1% of people who speak a language other than English, per the Census Bureau's 2018-2022 American Community Survey. We configure the agent to detect the language the customer writes in and reply in kind. Detection is automatic, so one agent handles both languages without you maintaining two separate bots.",
  },
  {
    category: 'compliance',
    question: 'Which business tools can the chatbot integrate with?',
    answer:
      "We integrate with the standard US SMB stack: HubSpot and Salesforce for CRM, Zendesk and Intercom for support, Stripe for payments and payment links, QuickBooks and NetSuite for invoicing, ShipStation and carrier APIs for order tracking, Shopify and WooCommerce for e-commerce data, Twilio for SMS and voice, and Calendly or Google Calendar for booking. If your platform has an API or webhook, we connect to it.",
  },
  {
    category: 'compliance',
    question: 'Does an SMS or voice chatbot have to follow TCPA rules?',
    answer:
      "Yes, and this is the part most vendors gloss over. The Telephone Consumer Protection Act governs automated calls and texts to US consumers. That means capturing prior express written consent before marketing messages, honoring calling-time windows, identifying your business at the start of the call, and processing opt-out requests immediately. We build consent capture, calling-window logic, and opt-out handling into the agent, and log every one of those events so you have an audit trail.",
  },
  {
    category: 'compliance',
    question: 'How do you handle CCPA and HIPAA requirements?',
    answer:
      "We do not sell certifications, we build to the rule. For California residents under CCPA and CPRA, that means the conversation data the agent stores is documented, deletable on request, and never sold on. For healthcare clients, we keep protected health information inside HIPAA-eligible infrastructure, sign a business associate agreement where one is required, and can run a private LLM setup so conversations never reach a third-party model provider. Every data flow is written down and handed over at delivery.",
  },

  /* ── Process & Timeline ── */
  {
    category: 'process',
    question: 'How long does it take to build an AI chatbot agent?',
    answer:
      "A focused website or email chatbot goes from kickoff to live in 2-3 weeks. Multi-channel agents with deeper CRM/ERP integrations take 4-6 weeks. The timeline depends on the number of integrations and how many conversation flows we need to build, we give you a firm estimate after a 45-minute discovery call.",
  },
  {
    category: 'process',
    question: 'What do I need to provide before you start building?',
    answer:
      "Access to the channels you want the agent on (website, help desk, Twilio number), API keys for the tools we integrate (HubSpot, Shopify, Stripe, and so on), your product or service content for training the knowledge base (FAQs, product catalog, pricing, even a Google Doc works), and your brand guidelines (tone, language preferences). We send a structured onboarding form after the discovery call.",
  },
  {
    category: 'process',
    question: 'How do you train the chatbot on my specific business content?',
    answer:
      "We build a knowledge base from your existing content: website copy, FAQs, product descriptions, pricing documents, support macros. We process this into vector embeddings (RAG architecture) so the agent retrieves relevant context before answering. You update the knowledge base through a simple admin panel, no technical skills required.",
  },
  {
    category: 'process',
    question: 'What happens after the chatbot goes live?',
    answer:
      "Every project includes a 30-day post-launch window. We monitor conversation logs, tune responses where the agent underperforms, fix any integration issues, and run a training session for your team. After 30 days, you manage the agent through the admin dashboard, or continue on an optional monthly retainer for ongoing optimization and new conversation flows.",
  },

  /* ── Pricing & ROI ── */
  {
    category: 'pricing',
    question: 'How much does an AI chatbot agent cost?',
    answer:
      "FactoryJet AI chatbot agents are fixed price after a scoping call, and the price is scoped to your build: a focused website chatbot, a support and sales agent with CRM integration, or a multi-channel platform. Every project is quoted up front after a free discovery call, so you know the full cost before work starts. No hourly billing surprises. Separately, LLM API costs are billed directly by the model providers based on your conversation volume.",
  },
  {
    category: 'pricing',
    question: 'What is the typical return on investment for a business chatbot?',
    answer:
      "The most common ROI comes from support labor savings. An agent handling 70% of routine questions absorbs the workload of one to two support reps, with payback in 3-6 months for most businesses. Secondary ROI: leads that now get an instant response instead of waiting until the next business day convert at meaningfully higher rates. Most clients see measurable improvement within 30 days of launch.",
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the chatbot is built?',
    answer:
      "Two types, and neither goes to us. LLM API costs are billed directly by the model providers based on your conversation volume, and we do not mark them up. Channel costs (a Twilio number for SMS and voice, or your existing help-desk seat) are billed by those vendors on their own plans. FactoryJet charges nothing ongoing unless you choose a monthly retainer for optimization.",
  },
  {
    category: 'pricing',
    question: 'Is my business data safe with an AI chatbot?',
    answer:
      "Yes. We use API-level integrations (no screen scraping), enforce least-privilege access so the agent reads only the data it needs, and implement full audit trails on every action. For financial services, healthcare, and legal clients, we offer private LLM setups where your data never leaves your infrastructure. All data flows are documented and handed over at delivery.",
  },
  {
    category: 'technical',
    question: 'What is Retrieval-Augmented Generation (RAG) and how does it prevent chatbot hallucinations?',
    answer:
      'Retrieval-Augmented Generation (RAG) connects large language models to your proprietary knowledge base, PDFs, product databases, and SOPs via semantic vector embeddings (pgvector, Pinecone). Before generating a response, the agent retrieves exact factual excerpts and cites source documents, preventing hallucinations and ensuring 100% policy compliance.',
  },
  {
    category: 'technical',
    question: 'How do AI chatbots handle bi-directional tool calling and API execution?',
    answer:
      'Our AI chatbots utilize function calling to perform live actions across your business software: checking order tracking numbers via ShipStation, issuing partial refunds via Stripe, booking calendar appointments via Calendly/Google Calendar, and updating deal stages in HubSpot or Salesforce.',
  },
  {
    category: 'channels',
    question: 'Can AI chatbots handle human agent handoffs with conversation context?',
    answer:
      'Yes. When an inquiry requires human escalation (e.g. high-value VIP deals or complex edge cases), the AI chatbot summarizes the conversation history, sentiment, and user intent, and transfers the chat to your live team inside Zendesk, Gorgias, Intercom, or Slack with zero context lost.',
  },
  {
    category: 'technical',
    question: 'How do you evaluate and benchmark AI chatbot response accuracy and latency?',
    answer:
      'We run automated LLM evaluation suites (DeepEval, RAGAS) across hundreds of synthetic and historical customer inquiry test cases. We measure retrieval precision, factual faithfulness, answer relevance, and sub-second token latency prior to production deployment.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: CHATBOT_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function AIChatbotUSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="ai-chatbot-us-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="ai-chatbot-us-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader
        locale="us"
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'AI Agents', href: '/services/ai-agent-development' },
          { label: 'Portfolio', href: '/portfolio' },          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Book a Free Call', modal: true, region: 'us' }}
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
          { name: 'AI Chatbot', url: 'https://factoryjet.com/services/ai-agent-development/ai-chatbot' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
          { name: 'AI Chatbot', url: 'https://factoryjet.com/services/ai-agent-development/ai-chatbot' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="us" source="services_ai_agent_development_ai_chatbot_hero" />}
          eyebrow="AI CHATBOT AGENT DEVELOPMENT · UNITED STATES"
          headline="AI Chatbot Agents Built for US Customers, Live in 2-3 Weeks"
          lead="Your customers ask the same questions 200 times a day, on your website, by phone, over SMS and in your inbox. An AI chatbot agent answers them instantly, in English or Spanish, while pushing data straight into HubSpot, Shopify, and Stripe. Fixed price. No ongoing SaaS fee."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'us' as const }}
          trustItems={[
            '500+ businesses served',
            'HubSpot + Shopify + Stripe ready',
            'English & Spanish',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#B23E13]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                AI CHATBOT AGENT IN ACTION
              </p>
              <p className="mt-4 font-fj-display text-[1.875rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                600+ customer questions resolved automatically: every day, without a single extra hire.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Customer: "Where is my order?" → Agent checks ShipStation → replies with tracking link in 3 seconds',
                  'Lead from a paid ad asks price → Agent qualifies, sends the catalog → books a demo into HubSpot',
                  'Dealer asks for an invoice → Agent fetches it from QuickBooks → emails the PDF instantly',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F05A28]/10 font-fj-mono text-[10px] font-bold text-[#B23E13]">
                      {i + 1}
                    </span>
                    <p className="font-fj-body text-[0.875rem] leading-[1.5] text-fj-neutral-600">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-fj-neutral-100 pt-6">
                <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">
                  Runs 24/7 in English and Spanish, across chat, phone, SMS and email. No sick leave, no salary.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across the US, UK, UAE, and Asia" />

        {/* ── 3. TRUST STATS ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ businesses. 12 years of building. One goal: your results."
          description="Websites and AI systems designed and built for businesses across the US, the UK, the UAE and Asia: Shopify stores, B2B companies, and DTC brands. Fixed, transparent pricing, your codebase delivered in full, and a 7-day delivery guarantee."
        />

        {/* ── 4. WHAT IS AN AI CHATBOT ─────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="AI CHATBOT EXPLAINED"
          headline="Why an AI Chatbot Is Nothing Like the Scripted Bots You Have Tried"
          lead="Scripted chatbots break the moment a customer asks something unexpected. AI chatbots understand intent in plain language, take real actions in your systems, and improve over time, with no script to maintain."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'Website chat support',
                  'Lead qualification',
                  'Order tracking',
                  'Invoice retrieval',
                  'Appointment booking',
                  'Payment links',
                  'Product FAQs',
                  'English & Spanish',
                ].map((cap) => (
                  <span
                    key={cap}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#B23E13]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {cap}
                  </span>
                ))}
              </div>
              <p>
                The scripted chatbots most businesses have tried, button-click menus, keyword matching, decision trees, fail 40-60% of conversations because customers do not behave the way the script expects. They use different words, switch between English and Spanish, ask follow-up questions, or type something the script never anticipated. The bot breaks, the customer leaves, and your team picks up the mess.
              </p>
              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '24/7', label: 'Always on' },
                  { value: '70%', label: 'Ticket deflection' },
                  { value: '<60s', label: 'Response time' },
                ].map((b) => (
                  <div
                    key={b.value}
                    className="rounded-xl border border-fj-neutral-200 bg-white px-3 py-4 text-center shadow-sm"
                  >
                    <p
                      className="font-fj-display font-bold text-[#F05A28]"
                      style={{ fontSize: '1.375rem', lineHeight: 1, letterSpacing: '-0.03em' }}
                    >
                      {b.value}
                    </p>
                    <p
                      className="mt-1.5 font-fj-mono font-medium uppercase text-fj-neutral-400"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.07em' }}
                    >
                      {b.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  More like a knowledgeable team member than a phone menu.
                </p>
              </div>
              <p>
                FactoryJet AI chatbot agents are built on large language models: Claude, GPT-4o, or Gemini, with a retrieval layer trained on your specific business content: product catalog, pricing, policies, FAQ answers. The agent understands what your customer means, checks your live data (Shopify orders, HubSpot records, ShipStation tracking), and takes action or escalates intelligently. No script to maintain, no tree to update every time you change your pricing.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  AI vs. Scripted Chatbot
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    scenario: 'Customer types in Spanish',
                    scripted: 'Breaks, only English supported',
                    ai: 'Understands, responds in Spanish automatically',
                  },
                  {
                    scenario: 'Unexpected question asked',
                    scripted: '"Sorry, I did not understand. Please select an option."',
                    ai: 'Understands intent, answers from knowledge base',
                  },
                  {
                    scenario: 'Check Shopify order status',
                    scripted: 'Cannot, no system integration',
                    ai: 'Queries Shopify live, replies with status in 3 sec',
                  },
                  {
                    scenario: 'Send a Stripe payment link',
                    scripted: 'Cannot take actions',
                    ai: 'Generates and sends the link in chat instantly',
                  },
                  {
                    scenario: 'Knowledge base update',
                    scripted: 'Rebuild the decision tree',
                    ai: 'Upload a document, done in minutes',
                  },
                ].map((row) => (
                  <div key={row.scenario} className="px-7 py-4">
                    <p className="font-fj-mono font-semibold text-fj-ink" style={{ fontSize: '0.75rem', letterSpacing: '0.04em' }}>{row.scenario}</p>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-fj-neutral-50 px-3 py-2">
                        <p className="font-fj-mono uppercase text-fj-neutral-400" style={{ fontSize: '0.625rem', letterSpacing: '0.08em' }}>Scripted</p>
                        <p className="mt-1 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem' }}>{row.scripted}</p>
                      </div>
                      <div className="rounded-lg border border-[rgba(240,90,40,0.2)] bg-[rgba(240,90,40,0.05)] px-3 py-2">
                        <p className="font-fj-mono uppercase text-[#B23E13]" style={{ fontSize: '0.625rem', letterSpacing: '0.08em' }}>AI Chatbot</p>
                        <p className="mt-1 font-fj-body text-fj-ink" style={{ fontSize: '0.8125rem' }}>{row.ai}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* ── 5. THE PROBLEM (DARK) ─────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="Your team is answering the same messages on repeat"
          lead="The biggest hidden cost in most US businesses is not salary, it is repetition. Your support staff spend 60-70% of their time on questions with the same 10 answers. An AI chatbot agent eliminates that entirely."
          pillars={[
            {
              icon: '💬',
              title: 'Front-line support is your most expensive bottleneck',
              body: "Website chat, the support inbox, the phone line, the text thread. Your team works all of it manually, typing the same answers, sending the same tracking links, fielding the same pricing questions: all day, every day. One AI chatbot agent handles 70%+ of these automatically, in the customer's language, at 2 AM.",
            },
            {
              icon: '⏱️',
              title: 'Leads go cold while your team sleeps',
              body: 'Research on inbound lead response has repeatedly found that replying within minutes rather than hours dramatically improves the odds a lead converts. A prospect who messages your business at 11 PM Pacific and gets a reply at 9 AM Eastern the next day has likely already contacted three competitors. An AI chatbot agent responds in under 60 seconds, around the clock.',
            },
            {
              icon: '🔄',
              title: 'Scripted chatbots create more problems than they solve',
              body: "You tried a button-menu chatbot, it confused customers, increased escalations, and your team spent more time managing the bot than it saved. AI chatbot agents are fundamentally different: they understand intent, handle unexpected questions, integrate with your real systems, and get better over time. The failure mode of scripted bots is not an AI problem.",
            },
          ]}
        />

        {/* ── 6. BUILD JOURNEY (LIGHT) ─────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="HOW WE BUILD"
          headline="From discovery to a live chatbot agent in 2-3 weeks"
          stages={CHATBOT_JOURNEY_STAGES}
          closingNote="Every stage ends with a working demo. You see the agent before it talks to your customers."
        />

        {/* ── 7. TECH STACK (LIGHT, REVERSED) ──────────────────────────────── */}
        <ServiceExplanation
          eyebrow="TECHNOLOGY"
          headline="The technology stack behind your AI chatbot agent"
          lead="We do not have a preferred vendor, we pick the right model and platform for your business, channel, and data sensitivity requirements. Every architectural decision is documented."
          reverseOnDesktop
          body={
            <>
              <p>
                Every chatbot agent we build has four layers: an LLM for language understanding and response generation, a knowledge base (RAG architecture) trained on your business content, integration connectors for the tools your team already runs on, and a deployment layer for your website, phone line, SMS, and email. We choose best-in-class components for each layer and explain the reasoning in plain language.
              </p>
              <div className="overflow-hidden rounded-xl border border-fj-neutral-200 bg-white" aria-hidden>
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-fj-neutral-100 bg-fj-neutral-50">
                      <th className="px-5 py-3 font-fj-mono text-[10px] font-semibold uppercase tracking-widest text-fj-neutral-400">Layer</th>
                      <th className="px-5 py-3 font-fj-mono text-[10px] font-semibold uppercase tracking-widest text-fj-neutral-400">Tools We Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-fj-neutral-100">
                    {[
                      { layer: 'LLM / AI Model',       tools: 'Claude, GPT-4o, Gemini, Mistral' },
                      { layer: 'Knowledge Base (RAG)',  tools: 'Pinecone, pgvector, Chroma' },
                      { layer: 'Orchestration',          tools: 'LangChain, LangGraph, n8n' },
                      { layer: 'Voice / SMS / Email',   tools: 'Twilio, SendGrid, WhatsApp Business API' },
                      { layer: 'Website Widget',        tools: 'Custom React embed, Vercel Edge' },
                      { layer: 'CRM / Support',         tools: 'HubSpot, Salesforce, Zendesk, Intercom' },
                      { layer: 'E-Commerce',            tools: 'Shopify, WooCommerce, ShipStation' },
                      { layer: 'Payments / Billing',    tools: 'Stripe, QuickBooks webhooks' },
                    ].map((row) => (
                      <tr key={row.layer}>
                        <td className="px-5 py-3 font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.8125rem' }}>{row.layer}</td>
                        <td className="px-5 py-3 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem' }}>{row.tools}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                For data-sensitive sectors, healthcare, financial services, legal, we deploy private LLM setups where your data never leaves your infrastructure. No third-party model provider sees your customer conversations, which is what makes HIPAA workloads workable in the first place.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  Five Chatbot Agent Types We Build
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    name: 'Customer Support Agent',
                    desc: '24/7 support on website chat, email and SMS. Order status, returns, product queries, human escalation.',
                  },
                  {
                    name: 'Lead Qualification Agent',
                    desc: 'Captures and qualifies inbound leads from ads and your website. Pushes qualified leads to HubSpot or Salesforce.',
                  },
                  {
                    name: 'E-Commerce Assistant',
                    desc: 'Shopify/WooCommerce agent for product discovery, order tracking, and Stripe payment links.',
                  },
                  {
                    name: 'Appointment Booking Agent',
                    desc: 'Books appointments, checks availability, sends reminders, handles rescheduling by chat, phone or text.',
                  },
                  {
                    name: 'B2B Ordering Agent',
                    desc: 'Lets your dealers place orders, check stock, and pull invoices from your customer portal, 24/7.',
                  },
                ].map((item) => (
                  <div key={item.name} className="px-7 py-4">
                    <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9rem' }}>{item.name}</p>
                    <p className="mt-0.5 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* ── 8. STATS BAND ─────────────────────────────────────────────────── */}
        <section
          className="py-12 md:py-16"
          style={{
            backgroundColor: '#FAFAF7',
            borderTop: '1.5px solid rgba(240,90,40,0.18)',
            borderBottom: '1.5px solid rgba(240,90,40,0.18)',
          }}
        >
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {CHATBOT_STATS.map((stat) => (
                <div key={stat.value}>
                  {stat.categoryLabel && (
                    <div
                      className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-fj-mono font-bold uppercase"
                      style={{
                        fontSize: '9px',
                        letterSpacing: '0.13em',
                        color: '#B23E13',
                        background: 'rgba(240,90,40,0.06)',
                        border: '1px solid rgba(240,90,40,0.22)',
                      }}
                    >
                      <span className="inline-block h-1 w-1 rounded-full" style={{ backgroundColor: '#F05A28' }} aria-hidden="true" />
                      {stat.categoryLabel}
                    </div>
                  )}
                  <p
                    className="font-fj-display font-bold"
                    style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', lineHeight: 1, letterSpacing: '-0.04em', color: '#F05A28' }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-3 font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9375rem', lineHeight: 1.5 }}>
                    {stat.label}
                  </p>
                  {stat.microcopy && (
                    <p className="mt-1.5 font-fj-body text-fj-neutral-400" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>
                      {stat.microcopy}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. US MARKET CONTEXT ──────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="US CHATBOT MARKET"
          headline="Half of US adults already talk to AI. Your customers expect the same from you."
          leadParagraphs={[
            "Roughly 49% of US adults now use AI chatbots, up from 33% in the summer of 2024, according to Pew Research Center. Your customers have already learned what a good AI conversation feels like, and they bring that expectation to your website chat, your phone line, and your support inbox. Businesses deploying AI chatbot agents now are compounding a customer experience advantage their competitors cannot easily close.",
            "Grand View Research puts the global chatbot market on track for $3.99 billion by 2030 at a 25.7% CAGR, with North America leading. The growth is not coming from large enterprises: most of them already have chatbots. It is coming from US SMBs in DTC e-commerce, real estate, education, healthcare, and B2B distribution discovering that AI chatbot agents are now affordable enough to deploy at any scale.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden="true">
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  A lead that waits until tomorrow morning for a reply has already contacted three competitors.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  'DTC E-Commerce',
                  'Real Estate',
                  'Education',
                  'Healthcare',
                  'Financial Services',
                  'B2B Distribution',
                ].map((ind) => (
                  <span
                    key={ind}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#B23E13]"
                    style={{ fontSize: '10px', letterSpacing: '0.08em' }}
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </>
          }
          stats={CHATBOT_MARKET_STATS}
        />

        {/* ── 10. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Scripted Chatbot Tool vs. Freelancer vs. No-Code Builder"
          lead="Fixed price, full ownership, the US business stack out of the box, here is the honest comparison."
          pullQuote={{
            stat: 'Fixed price',
            caption:
              'scoped to your build, an AI chatbot agent with natural language understanding, English and Spanish support, HubSpot or Salesforce integration, and full code ownership. No SaaS subscription. No decision tree to maintain. Quoted up front after a free discovery call, so you know the full cost before work starts.',
          }}
          columns={CHATBOT_COMPARISON_COLUMNS}
          rows={CHATBOT_COMPARISON_ROWS}
          footer="Comparison reflects the options typically on the table for a US business in 2026. FactoryJet fixed-price contracts are available for every build."
        />

        {/* ── 11. INDUSTRIES GRID (DARK) ────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="WHO WE BUILD FOR"
          headline="AI chatbot agents for every major US industry"
          lead="Every industry has different conversation patterns, integrations, and compliance requirements. We build for yours."
          sectors={CHATBOT_INDUSTRIES}
        />

        <GetFreeQuoteCTA />
        {/* ── 13. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What founders say after we build their AI chatbot agents"
        />

        {/* ── 14. FAQ (LIGHT) ───────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything to Know Before You Start"
          lead="The questions we answer on every AI chatbot discovery call, answered honestly, without the runaround."
          categories={CHATBOT_FAQ_CATEGORIES}
          items={CHATBOT_FAQ_ITEMS}
        />

        {/* ── 15. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}

        {/* ── 16. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="GET STARTED"
            headline="Book a Free AI Chatbot Strategy Call"
            sub="Tell us your biggest support or lead-response bottleneck. We will map out exactly which chatbot agent fits your business and give you a fixed-price estimate before writing a single line of code. No pitch, no pressure: an honest assessment from engineers who have been building for growing businesses for 12 years."
            primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See All AI Agent Services', href: '/services/ai-agent-development' }}
            objectionHandler="Fixed price. Full code ownership. HubSpot + Shopify + Stripe ready. No SaaS lock-in."
          />
        </div>

      </main>

      <SiteFooter locale="us" />
    </>
  );
}
