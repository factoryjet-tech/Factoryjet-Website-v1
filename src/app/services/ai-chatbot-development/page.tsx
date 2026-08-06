import type { Metadata } from 'next';
import { usServiceAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import BoringStatsRow from '@/components/v2/BoringStatsRow';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import PricingTiers from '@/components/v2/PricingTiers';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Best AI Chatbot Development Company in USA | FactoryJet',
  description:
    'Custom AI chatbots for US businesses, customer support, lead gen, e-commerce & booking. Deflect 60–70% of support tickets. Delivered in 2–3 weeks. Get a quote.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Best AI Chatbot Development Company in USA | FactoryJet',
    description:
      'Custom AI chatbots for customer support, lead gen, and e-commerce. Built on GPT-4o and Claude. fixed-price, milestone-paid. Fast delivery.',
    url: 'https://factoryjet.com/services/ai-chatbot-development',
    images: [
      {
        url: 'https://factoryjet.com/images/us/services/hero-ai-chatbot.webp',
        width: 1200,
        height: 800,
        alt: 'FactoryJet - AI Chatbot Development Services USA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best AI Chatbot Development Company in USA | FactoryJet',
    description:
      'Custom AI chatbots for US small businesses. fixed-price. 2–3 week delivery. Get a quote.',
    images: ['https://factoryjet.com/images/us/services/hero-ai-chatbot.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-chatbot-development',
    languages: usServiceAlternates['ai-chatbot-development'],
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
   JSON-LD Schema (Service + HowTo + Breadcrumb), faqSchema is declared after
   FAQ_ITEMS below, since it derives mainEntity from that array via .map()
───────────────────────────────────────────────────────────────────────────── */

// Freshness signal. Benchmark: 56% of AI-Overview-cited pages carry it.
// Keep honest: bump when the page's content actually changes.
const PAGE_MODIFIED = '2026-08-04';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-chatbot-development#webpage',
  url: 'https://factoryjet.com/services/ai-chatbot-development',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Chatbot Development Services',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: 'AI Chatbot Development',
  description:
    'Custom AI chatbot development for US small and medium businesses. Specializing in customer support chatbots, lead generation bots, e-commerce assistants, and appointment booking chatbots built on GPT-4o and Claude.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter AI Chatbot',
      description: 'Single-purpose AI chatbot for one focused use case, customer support or lead capture.',
    },
    {
      '@type': 'Offer',
      name: 'Growth Chatbot Platform',
      description: 'Multi-intent AI chatbot with CRM integration, live handoff, and conversation dashboard.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise Chatbot System',
      description: 'Custom AI chatbot with fine-tuning, multi-channel deployment, and enterprise integrations.',
    },
  ],
  
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds your AI chatbot solution',
  description: 'Our process for delivering this work, typically 2 to 5 weeks depending on scope.',
  // Aligned 2026-08-04 to the timeline this page actually states (2 to 5 weeks).
  // 7-day delivery is real for standard website builds, but this page's own
  // process section says 2 to 5 weeks, so P7D contradicted the visible content.
  totalTime: 'P35D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Stage 1 | Discovery & Use-Case Mapping',
      text: 'We audit your workflows, identify the highest-ROI automation opportunities, and define the exact scope of your AI solution.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Stage 2 | Architecture & Data Planning',
      text: 'We design the AI architecture, select the right models and APIs, and map your data sources and integration points.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Stage 3 | Build & Integrate',
      text: 'We build your AI agents or automation workflows and integrate them with your existing tools, CRM, and business systems.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Stage 4 | Testing & Optimization',
      text: 'We run comprehensive testing across edge cases, optimize for accuracy and latency, and add monitoring and alerting.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Stage 5 | Launch & Training',
      text: 'Your AI solution goes live. We train your team, provide documentation, and offer 30-day post-launch support.',
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://factoryjet.com/services/ai-chatbot-development#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'US Services', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 3, name: 'AI Chatbot Development', item: 'https://factoryjet.com/services/ai-chatbot-development' },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const CHATBOT_TYPES = [
  {
    name: 'Customer Support Chatbot',
    description:
      'Handles your top 60–70% of support questions automatically, around the clock. Pulls live order data, checks return policies, answers product questions, and routes anything it can\'t handle to a human, with the full conversation transcript so your team isn\'t starting from scratch.',
    example: 'Avg. 68% ticket deflection in the first 30 days.',
    linkLabel: 'See how it works',
    linkHref: '/contact',
  },
  {
    name: 'Lead Generation Chatbot',
    description:
      'Engages website visitors the moment they land, qualifies them with smart questions, collects contact information, and books demos directly to your calendar, without a sales rep having to respond in real time. Responds in under 5 seconds at 2 a.m. or 2 p.m.',
    example: '2–5× more qualified leads captured vs. a static contact form.',
    linkLabel: 'Start a conversation',
    linkHref: '/contact',
  },
  {
    name: 'E-Commerce Chatbot',
    description:
      'Connects to your Shopify or WooCommerce store to answer product questions, check real-time inventory, track orders, process return requests, and recommend products based on what the customer is looking for: all without a support agent.',
    example: 'Shopify clients report 35% fewer "where\'s my order?" emails.',
    linkLabel: 'See pricing',
    linkHref: '#pricing',
  },
  {
    name: 'Appointment Booking Chatbot',
    description:
      'Checks live calendar availability, qualifies the visitor, and books confirmed appointments directly, no back-and-forth email chains. Integrates with Google Calendar, Calendly, Acuity, and most scheduling platforms.',
    example: 'Healthcare and service businesses fill 25–40% more off-hours slots.',
    linkLabel: 'Book a strategy call',
    linkHref: '/contact',
  },
  {
    name: 'Internal Knowledge Chatbot',
    description:
      'Trained on your SOPs, HR policies, product documentation, and internal wikis so your team can ask it questions and get instant, accurate answers, instead of digging through Notion or Confluence. Cuts onboarding time significantly.',
    example: 'Teams reclaim 4–6 hours/week on internal "where do I find X?" questions.',
    linkLabel: 'Learn more',
    linkHref: '/contact',
  },
  {
    name: 'Multi-Channel AI Chatbot',
    description:
      'One chatbot backend deployed across your website, WhatsApp Business, Facebook Messenger, and SMS simultaneously. Consistent answers, consistent tone, and a unified conversation dashboard, regardless of where customers reach out.',
    example: 'Build once, deploy everywhere. No per-channel rebuild cost.',
    linkLabel: 'Get a free assessment',
    linkHref: '/contact',
  },
];

const CHATBOT_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'A 45-minute call where we map your top support questions, review your existing documentation, identify the highest-value chatbot use case, and define what success looks like before we build anything.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We design the conversation flows, define escalation logic, plan integrations, and choose the right model. You approve the design doc before a line of code is written.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Engineering the chatbot against your stack with weekly demos. You see the bot working with real questions during the build, not just at the end. Feedback is incorporated before we move to the next phase.',
  },
  {
    number: '04',
    title: 'Test & Tune',
    description:
      'We run the bot through hundreds of real customer questions, fix incorrect answers, tighten escalation thresholds, and tune the prompt until it performs reliably. No edge case left untested.',
  },
  {
    number: '05',
    title: 'Deploy & Train',
    description:
      'Live launch with monitoring, a conversation dashboard, and a recorded training session for your team. 30-day post-launch support included. Your code, your data, your call on what happens next.',
  },
];

const ROI_STATS = [
  {
    value: '65%',
    label: 'average support ticket deflection',
    microcopy: 'across FactoryJet chatbot deployments',
    categoryLabel: 'TICKET DEFLECTION',
  },
  {
    value: '<5s',
    label: 'chatbot response time vs. hours for a human agent',
    microcopy: 'speed is the single biggest driver of lead close rates',
    categoryLabel: 'RESPONSE SPEED',
  },
  {
    value: 'Fixed Price',
    label: 'milestone-paid chatbot builds with full code ownership',
    microcopy: 'specialized engineers, US-caliber output, predictable from quote to launch',
    categoryLabel: 'PRICING MODEL',
  },
];

const MARKET_STATS = [
  {
    value: '67%',
    label: 'of US consumers used an AI chatbot for customer support in the past year',
    microcopy: 'Drift Conversational Marketing Report 2024',
    categoryLabel: 'CONSUMER ADOPTION',
  },
  {
    value: '3×',
    label: 'faster lead response via chatbot vs. email, directly correlated to higher close rates',
    microcopy: 'Harvard Business Review Lead Response Study',
    categoryLabel: 'LEAD CONVERSION',
  },
  {
    value: '24%',
    label: 'annual growth rate of the US chatbot market, projected through 2027',
    microcopy: 'Grand View Research 2024',
    categoryLabel: 'MARKET GROWTH',
  },
];

const COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'US Chatbot Agency' },
  { label: 'DIY Tool (Intercom, Drift)' },
  { label: 'Freelancer' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Pricing model',
    values: [
      'Fixed-price, one-time',
      'Enterprise budgets',
      'Ongoing SaaS fees',
      'Hourly, variable',
    ],
  },
  {
    feature: 'Delivery timeline',
    values: ['2–3 weeks', '2–4 months', 'Days (limited capability)', '3–6 weeks (unreliable)'],
  },
  {
    feature: 'Custom CRM / system integration',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="diy" kind="partial" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: 'Live handoff to human agents',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="diy" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: 'Multi-channel (web + WhatsApp + SMS)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="diy" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
    ],
  },
  {
    feature: 'You own the code outright',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="yes" />,
    ],
  },
  {
    feature: 'No ongoing SaaS fees',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="yes" />,
    ],
  },
  {
    feature: '30-day post-launch support',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="no" />,
    ],
  },
  {
    feature: '12+ years of SMB domain experience',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="no" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
];

const PRICING_TIERS = [
  {
    name: 'Starter',
    priceRange: 'Scoped to your build',
    description:
      'One focused AI chatbot for your highest-impact use case. Perfect for businesses adding their first chatbot to handle a single workflow.',
    features: [
      'Single-intent chatbot (support, lead capture, or booking)',
      'Trained on your FAQs, docs, or product catalog',
      'Website embed widget included',
      'GPT-4o or Claude as the underlying model',
      'Admin panel to review conversations',
      'Live handoff to your email or Slack',
      '14-day post-launch support window',
    ],
    cta: { label: 'Get a Quote', modal: true as const, region: 'us' as const },
  },
  {
    name: 'Growth',
    priceRange: 'Most common scope',
    description:
      'A multi-intent chatbot with deep integrations and a conversation management dashboard. The most popular tier for US SMBs serious about automation.',
    features: [
      'Multi-intent chatbot (support + lead gen + booking in one)',
      'CRM integration (HubSpot, Salesforce, Pipedrive, or Zoho)',
      'Live data pulls (order status, inventory, calendar)',
      'Conversation analytics dashboard',
      'Multi-channel (website + WhatsApp or SMS)',
      'Smart escalation with full transcript handoff',
      'Team training session + documentation',
      '30-day post-launch support window',
    ],
    cta: { label: 'Get a Custom Quote', modal: true as const, region: 'us' as const },
    popular: true,
  },
  {
    name: 'Enterprise',
    priceRange: 'Custom scope',
    description:
      'A fully custom AI chatbot with fine-tuning, multi-language support, enterprise integrations, and a dedicated engineering partner.',
    features: [
      'Custom LLM fine-tuning on your proprietary content',
      'Multi-language support (auto-detect + respond)',
      'All channels deployed simultaneously',
      'Enterprise CRM and ERP integration',
      'Private cloud deployment option',
      'Advanced analytics with conversion attribution',
      'Dedicated engineering point of contact',
      '90-day post-launch support and iteration window',
    ],
    cta: { label: 'Schedule an Enterprise Call', modal: true as const, region: 'us' as const },
  },
] as const;

/* ─── FAQ categories ─────────────────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'what-is',    label: 'What Is AI Chatbot Dev' },
  { key: 'process',   label: 'Process & Timeline' },
  { key: 'pricing',   label: 'Pricing & ROI' },
  { key: 'technical', label: 'Technical & Integrations' },
  { key: 'trust',     label: 'Trust & Results' },
];

/* ─── FAQ items — 21 conversational Q-A pairs, AI-citation optimized ────── */
const FAQ_ITEMS = [

  /* ── What Is AI Chatbot Development ── */
  {
    category: 'what-is',
    question: 'What is AI chatbot development?',
    answer:
      'AI chatbot development is the process of building conversational software that handles real-time text interactions, answering customer questions, qualifying leads, booking appointments, or guiding users through a process, using large language models like GPT-4o or Claude. Unlike rule-based bots that follow rigid scripts, AI chatbots understand natural language, handle messy real-world phrasing, and improve over time as you tune their behavior.',
  },
  {
    category: 'what-is',
    question: 'How is an AI chatbot different from a basic website chat widget?',
    answer:
      'A basic chat widget routes you to a human agent or shows pre-written FAQ answers. An AI chatbot understands what the customer is actually asking, even if they phrase it five different ways, pulls live data from your systems (order status, inventory, calendar), and gives a complete, accurate answer without involving your team. It handles the top 60–70% of support volume automatically.',
  },
  {
    category: 'what-is',
    question: 'What kinds of chatbots does FactoryJet build?',
    answer:
      'FactoryJet builds five core types: Customer Support Chatbots (24/7 automated answers, ticket routing, live handoff), Lead Generation Chatbots (qualify visitors, collect contacts, book demos), E-Commerce Chatbots (order tracking, returns, product recommendations), Appointment Booking Chatbots (calendar check, scheduling confirmation), and Internal Knowledge Chatbots (instant answers from your SOPs and policies for your own team).',
  },
  {
    category: 'what-is',
    question: 'Which AI models power FactoryJet chatbots?',
    answer:
      'We use GPT-4o (OpenAI), Claude 3.5 Sonnet (Anthropic), and Gemini (Google) depending on your use case, data privacy needs, and budget. For most customer-facing chatbots, GPT-4o or Claude gives the best balance of accuracy and cost. We use Voiceflow, Botpress, and LangChain for orchestration. We pick the model that fits your workflow, not the most expensive one.',
  },

  /* ── Process & Timeline ── */
  {
    category: 'process',
    question: 'What does the AI chatbot development process look like?',
    answer:
      'Five stages: Discover (map your top questions, data sources, and goals), Design (conversation flows, escalation logic, integrations), Build (develop and connect to your tools with weekly demos), Test & Tune (run through real questions, fix errors, tighten behavior), and Deploy (live launch with monitoring, training, and 30-day support). You see it working before it goes live.',
  },
  {
    category: 'process',
    question: 'How long does it take to build and launch an AI chatbot?',
    answer:
      'A single-purpose chatbot: a support bot for your top 20 questions or a lead capture bot, goes from kickoff to live in 2–3 weeks. Multi-intent chatbots with CRM integration take 4–5 weeks. Enterprise deployments across multiple departments or languages run 6–10 weeks. Timeline is confirmed after the discovery session, not before.',
  },
  {
    category: 'process',
    question: 'Will I see progress during the build, or just get a final delivery?',
    answer:
      'Weekly demos throughout: every stage ends with a working demo you can test and give feedback on. Most clients find that seeing the bot handle real questions early changes what they want it to do, and we build in room for that. Nothing is a surprise at launch.',
  },
  {
    category: 'process',
    question: 'What happens after the chatbot launches?',
    answer:
      'Every engagement includes a 30-day post-launch window. We monitor conversation logs, fix incorrect answers, tune response quality based on real usage, and deliver a recorded training session for your team. After 30 days you can continue on a monthly retainer or manage it yourself.',
  },

  /* ── Pricing & ROI ── */
  {
    category: 'pricing',
    question: 'How much does AI chatbot development cost?',
    answer:
      'FactoryJet\'s AI chatbots are fixed-price and scoped to your build: the main drivers are the number of intents, CRM and tool integrations, and channels you deploy to. Most US SMBs choose our Growth tier, covering multi-intent chatbots with CRM integration, live handoff, and a conversation dashboard. Custom enterprise chatbots with fine-tuning and multi-channel deployment are scoped separately. All pricing is fixed and confirmed upfront after a free quote, no hourly billing, no scope creep.',
  },
  {
    category: 'pricing',
    question: 'Why is FactoryJet fixed-price, milestone-paid?',
    answer:
      'Our engineering team brings 12+ years of focused expertise. Same quality of AI architecture, conversation design, and delivery without the overhead that inflates traditional agency invoices. We\'ve served US businesses for 12 years. You brief an engineer; that engineer builds it. No account management layers, no inflated agency rates.',
  },
  {
    category: 'pricing',
    question: 'What return on investment can I expect from an AI chatbot?',
    answer:
      'A chatbot handling 65% of your tickets typically pays for itself within 2–3 months for a team answering 50+ tickets per day. Chatbots responding to website visitors in under 5 seconds vs. waiting hours for a human reply see 2–5× higher lead-to-demo conversion rates. Most clients recover the full build cost within 90 days.',
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the chatbot is built?',
    answer:
      'Two types: API usage (paid directly to the model provider at cost, not marked up by us) and optionally a monthly optimization retainer for new flows or integrations. Many clients self-manage after the 30-day post-launch window.',
  },

  /* ── Technical & Integrations ── */
  {
    category: 'technical',
    question: 'What systems can an AI chatbot connect to?',
    answer:
      'We integrate via API with: CRMs (HubSpot, Salesforce, Pipedrive, Zoho), e-commerce (Shopify, WooCommerce, BigCommerce), help desks (Zendesk, Intercom, Freshdesk), calendars (Google Calendar, Calendly, Acuity), databases (Supabase, Firebase, PostgreSQL), and messaging channels (website widget, WhatsApp Business, Facebook Messenger, SMS via Twilio). If your platform has a REST API or webhook, we can connect to it.',
  },
  {
    category: 'technical',
    question: 'Can the chatbot hand off to a human when needed?',
    answer:
      'Yes, live handoff is standard in every chatbot we deliver. The bot monitors its own confidence and escalates when a question is too sensitive or outside its scope, passing the full conversation transcript to your support channel (Slack, email, Zendesk, or Intercom). You set the thresholds. Nothing falls through the cracks.',
  },
  {
    category: 'technical',
    question: 'Can I deploy the chatbot on WhatsApp or SMS as well as my website?',
    answer:
      'Yes. The same backend deploys to your website (embeddable JS widget), WhatsApp (via WhatsApp Business API), Facebook Messenger, and SMS (via Twilio). Build once, deploy to multiple channels. A unified dashboard shows all channels in one place.',
  },
  {
    category: 'technical',
    question: 'Do I need a developer to manage the chatbot after launch?',
    answer:
      'No. The admin dashboard lets non-technical team members view conversation logs, update answer content, adjust escalation thresholds, and check performance metrics without touching code. If something breaks because a connected platform changes its API, you contact us and we fix it.',
  },

  /* ── Trust & Results ── */
  {
    category: 'trust',
    question: 'Is customer data safe with an AI chatbot?',
    answer:
      'We use API-level integrations only (no screen scraping), enforce least-privilege data access, and implement full audit trails on every conversation. For regulated industries, healthcare, legal, finance, we configure the chatbot to avoid storing PII and can use private LLM deployments. All conversation logs are owned by you.',
  },
  {
    category: 'trust',
    question: 'Can an AI chatbot handle multiple languages?',
    answer:
      'Yes. GPT-4o and Claude understand and respond in 50+ languages without separate training. For businesses with significant Spanish-speaking customers, common in Texas, Florida, California, and the Southwest, we configure the bot to detect language automatically and respond in kind. Multi-language is included on Growth and Enterprise plans.',
  },
  {
    category: 'trust',
    question: 'How is FactoryJet different from using a DIY tool like Intercom Fin or Drift?',
    answer:
      'DIY tools are fast to set up but limited: they work off existing docs, can\'t pull live data from custom systems, can\'t be tuned for your specific logic, and charge ongoing SaaS fees. FactoryJet builds a custom chatbot integrated into your specific tech stack: your CRM, your Shopify store, your calendar, that you own outright, with no per-seat or per-conversation fees beyond model API costs.',
  },
  {
    category: 'trust',
    question: 'What results have other businesses gotten from FactoryJet chatbots?',
    answer:
      'An e-commerce brand reduced support ticket volume by 68% in the first 30 days. A B2B software company\'s chatbot increased demo bookings by 40% without adding sales headcount. A healthcare practice\'s booking bot filled 30% more appointment slots per week from after-hours traffic. We share relevant case studies during a strategy call.',
  },
  {
    category: 'trust',
    question: 'How is FactoryJet different from a US AI development agency?',
    answer:
      'Three differences: pricing model (fixed-price and milestone-paid: every project scoped upfront with no scope-creep invoices, backed by 12+ years serving US businesses), speed (no layers between your brief and the engineer building it), and SMB depth (500+ small business projects, we understand what operations look like inside a 10-person company, not just enterprise AI theory).',
  },

  // ── Choosing an agency — money-query coverage, added 2026-06-11 ──
  {
    category: 'what-is',
    question: 'Who is the best AI chatbot development company in USA?',
    answer:
      'For small and mid-size businesses, FactoryJet makes a strong case: custom chatbots trained on your actual catalog, policies, and tone, not template bots, built fixed-price by senior engineers, with full code ownership from day one. Whoever you shortlist as the best AI chatbot development company in USA, apply three filters: will the bot be trained on your business data specifically, does it hand off to humans gracefully, and do you own it outright or rent it monthly?',
  },
  {
    category: 'pricing',
    question: 'How much does an AI chatbot cost in USA?',
    answer:
      'AI chatbot cost in USA ranges from cheap off-the-shelf SaaS subscriptions to a higher one-time investment for a custom-built chatbot you own. If you are asking how much an AI chatbot costs for a real business workflow, trained on your products, integrated with your CRM, escalating to your team: FactoryJet builds it fixed-price and milestone-paid, scoped to your needs. SaaS bots are cheaper to start and more expensive forever; custom bots invert that curve.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function AIChatbotDevelopmentPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="ai-chatbot-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="ai-chatbot-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="ai-chatbot-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        id="ai-chatbot-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'AI Chatbots', href: '/services/ai-chatbot-development' },
          { label: 'AI Agents', href: '/services/ai-agent-development' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Book a Call', modal: true, region: 'us' }}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="us" source="us_services_ai_chatbot_development_hero" />}
          eyebrow="AI CHATBOT DEVELOPMENT · USA"
          headline="A Chatbot That Answers, Qualifies, and Books, While You're Asleep"
          lead="Your best customers expect an answer in seconds, not hours. FactoryJet builds custom AI chatbots, for customer support, lead generation, e-commerce, and appointment booking, that respond instantly, connect to your existing tools, and cost fixed-price vs a US chatbot agency."
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            '500+ businesses served',
            'Delivered in 2–3 weeks',
            'fixed-price, milestone-paid',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#B23E13]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                AI CHATBOT IN ACTION
              </p>
              <p className="mt-4 font-fj-display text-[2rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                68% of support tickets handled automatically, before your team starts the day.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Customer asks "where\'s my order?" → bot checks Shopify → replies in 4 seconds',
                  'Visitor lands on pricing page → bot qualifies intent → books a demo call',
                  'Patient texts after hours → bot checks availability → confirms appointment',
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
                  All three scenarios resolved automatically, 24/7, without a single new hire.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 2. TRUST STATS ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ businesses. 12 years of building. One goal: your results."
        />

        {/* ── 3. WHAT IS AN AI CHATBOT ─────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="AI CHATBOTS EXPLAINED"
          headline="What Is an AI Chatbot, and Why Does Your Business Need One Now?"
          lead="A chatbot that actually understands what someone is asking, and connects to your real business data to answer it, is a fundamentally different product than a FAQ widget or a chat-to-email form."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'Answer questions instantly',
                  'Qualify leads 24/7',
                  'Check live order status',
                  'Book appointments',
                  'Route to humans smartly',
                  'Work across channels',
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
                Most businesses think they already have a chatbot, because they have a live chat widget that pings someone on the team. That&apos;s not a chatbot. That&apos;s a notification. An AI chatbot built on GPT-4o or Claude actually understands the customer&apos;s question, knows your products and policies, and gives a complete, accurate answer in under 5 seconds, without your team being in the loop.
              </p>

              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '24/7', label: 'Always live' },
                  { value: '<5s', label: 'Response time' },
                  { value: '65%', label: 'Tickets deflected' },
                ].map((b) => (
                  <div
                    key={b.value}
                    className="rounded-xl border border-fj-neutral-200 bg-white px-3 py-4 text-center shadow-sm"
                  >
                    <p
                      className="fj-display font-bold text-[#F05A28]"
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
                  Speed wins deals. A 5-second response beats a 5-hour email reply every time.
                </p>
              </div>
              <p>
                The ROI case is straightforward. If your team spends 3 hours a day answering the same 15 questions, a chatbot handles those automatically before the first coffee gets poured. If a visitor lands on your pricing page at 11 p.m. and has a question, a chatbot answers it and captures their contact info. A contact form sits there silent. That difference in response speed directly affects your conversion rate, research puts it at 3× better close rates for leads contacted within 5 minutes.
              </p>

              <div className="grid grid-cols-2 gap-2" aria-hidden>
                {[
                  'E-commerce brands',
                  'Healthcare practices',
                  'Real estate teams',
                  'SaaS companies',
                  'Service businesses',
                  'Professional services',
                ].map((ind) => (
                  <div
                    key={ind}
                    className="flex items-center gap-2.5 rounded-lg border border-fj-neutral-200 bg-white px-3.5 py-2.5"
                  >
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F05A28]" />
                    <p
                      className="font-fj-body font-medium text-fj-neutral-600"
                      style={{ fontSize: '0.8125rem' }}
                    >
                      {ind}
                    </p>
                  </div>
                ))}
              </div>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  How an AI Chatbot Works
                </p>
              </div>
              <div className="px-7 pt-6 pb-2">
                {([
                  {
                    step: '01',
                    title: 'Customer sends a message',
                    desc: 'Website widget, WhatsApp, SMS, or Messenger, any channel you deploy to.',
                  },
                  {
                    step: '02',
                    title: 'AI understands the intent',
                    desc: 'GPT-4o or Claude reads the question, even if poorly phrased, and identifies what\'s being asked.',
                  },
                  {
                    step: '03',
                    title: 'Pulls your live data',
                    desc: 'Queries your CRM, Shopify store, calendar, help desk, or any connected tool for the relevant answer.',
                  },
                  {
                    step: '04',
                    title: 'Responds or escalates',
                    desc: 'Sends an accurate answer in seconds, or routes to a human with the full conversation transcript.',
                  },
                ] as const).map((item, i, arr) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex shrink-0 flex-col items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B23E13] font-fj-mono text-[11px] font-bold text-white">
                        {item.step}
                      </div>
                      {i < arr.length - 1 && (
                        <div
                          className="my-1.5 w-px bg-fj-neutral-200"
                          style={{ minHeight: '28px', flex: '1 0 auto' }}
                        />
                      )}
                    </div>
                    <div className={i < arr.length - 1 ? 'pb-5 pt-0.5' : 'pb-7 pt-0.5'}>
                      <p
                        className="font-fj-body font-semibold text-fj-ink"
                        style={{ fontSize: '0.9375rem', lineHeight: 1.3 }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="mt-1 font-fj-body text-fj-neutral-500"
                        style={{ fontSize: '0.875rem', lineHeight: 1.5 }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">
                  Full audit trail on every conversation. Nothing happens silently.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 4. THE PROBLEM (DARK) ─────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="Your customers expect an answer in seconds. Most small businesses respond in hours, or not at all."
          lead="The gap between businesses with AI chatbots and those without shows up directly in response times, conversion rates, and support costs. The businesses winning right now aren't bigger. They're faster."
          pillars={[
            {
              icon: '⏱',
              title: 'Every hour of delay kills your lead',
              body: 'Research shows 78% of customers go with the first business that responds. If a competitor has a chatbot answering in 5 seconds and you\'re waiting for someone to check email, you\'re handing leads away. Response speed is the single biggest factor in close rates, not price, not quality.',
            },
            {
              icon: '📉',
              title: 'Your support team is answering the same 10 questions on repeat',
              body: 'For most small businesses, 60–70% of support tickets are the same questions: order status, refund policy, pricing, availability. An AI chatbot handles all of them automatically, around the clock, without a support ticket ever hitting your queue, freeing your team for work that actually needs a human.',
            },
            {
              icon: '💸',
              title: 'DIY chatbot tools charge you forever and still need manual work',
              body: 'SaaS chatbot tools like Intercom Fin, Drift, or Tidio charge recurring annual fees and still require your team to write and maintain the knowledge base. They can\'t pull live data from your custom systems. FactoryJet builds a chatbot that connects to your actual tools and that you own outright, no monthly seat fees after delivery.',
            },
          ]}
        />

        {/* ── 5. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Strategy Call to Live Chatbot in 2–5 Weeks"
          lead="A structured 5-stage process that keeps you informed at every step and delivers a working chatbot, not a slide deck about one."
          stages={CHATBOT_JOURNEY_STAGES}
          closingNote="5 STAGES · 2–5 WEEKS TO LAUNCH · WEEKLY DEMOS THROUGHOUT"
        />

        {/* ── 6. CHATBOT TYPES ─────────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="WHAT WE BUILD"
          headline="Six Types of AI Chatbots We Build for US Businesses"
          lead="Different problems call for different chatbot architectures. We build all six types and help you figure out which one fits your situation before we start."
          sectors={CHATBOT_TYPES}
        />

        {/* ── 7. MARKET STATS ──────────────────────────────────────────────── */}
        <div className="bg-fj-neutral-50">
          <BoringStatsRow stats={MARKET_STATS} align="center" />
        </div>

        {/* ── 9. ROI STATS ─────────────────────────────────────────────────── */}
        <div className="bg-fj-neutral-50">
          <BoringStatsRow stats={ROI_STATS} align="center" />
        </div>

        {/* ── 10. COMPARISON TABLE ─────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Traditional Agency vs. DIY Tool vs. Freelancer"
          lead="The honest breakdown: what you actually get, at what price, and how fast."
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
        />

        {/* ── 11. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="PRICING"
            headline="Transparent, Fixed-Price AI Chatbot Development"
            lead="No hourly billing. No scope creep surprises. Every tier includes a fixed scope, a fixed price, and a delivery timeline we stand behind."
            tiers={PRICING_TIERS}
            footnote="Every scope is quoted fixed-price after a discovery call. Monthly retainer options available. You own all code and conversation data."
          />
        </div>

        {/* ── 12. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="We're not a US chatbot agency with a fancy website. That's the point."
          lead="We've spent more than a decade building software, and have shipped 500+ production systems for real businesses. The chatbots we build don't live in a demo, they run in production and handle real customer conversations every day."
          pillars={[
            {
              icon: '⚡',
              title: 'Speed without cutting corners',
              body: 'A US chatbot agency has account managers, project coordinators, and a sales team to keep fed. We don\'t. When you brief us, an engineer reads it, not an account manager. That\'s why our timelines are weeks, not quarters.',
            },
            {
              icon: '💡',
              title: 'SMB domain depth, not startup theory',
              body: 'We\'ve built for e-commerce brands, law firms, healthcare practices, real estate teams, and SaaS companies. We know where the actual complexity lives in a 15-person business: the edge cases, the messy data, the workflows that don\'t match the textbook. We build for that reality.',
            },
            {
              icon: '🔒',
              title: 'You own everything. Always.',
              body: 'No vendor lock-in, no SaaS subscriptions, no proprietary platforms you can\'t leave. We deliver the full codebase, all API credentials, and documentation. If you outgrow us or want to take it in-house, you walk away with an asset, not a dependency.',
            },
          ]}
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything You Need to Know Before You Build an AI Chatbot"
          lead="No jargon. No runaround. The questions we get on every strategy call, answered straight."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA ─────────────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="READY TO START"
            headline="Book a 30-Minute Chatbot Strategy Call"
            sub="We'll review your current support or lead flow, identify where a chatbot would make the biggest difference, and give you a fixed-price estimate, before you commit to anything."
            primaryCta={{ label: 'Get a Quote', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See All AI Services', href: '/services' }}
            objectionHandler="Most clients see full ROI within 90 days. Free call, fixed price, no hidden fees."
          />
        </div>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

