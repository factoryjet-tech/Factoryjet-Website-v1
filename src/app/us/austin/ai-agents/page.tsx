import type { Metadata } from 'next';
import Script from 'next/script';
import { usCityAIAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
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
  title: 'AI Agents & Chatbots for Austin TX Businesses | FactoryJet',
  description:
    'FactoryJet builds custom AI agents and chatbots for Austin small businesses — customer support, lead generation, appointment booking, and e-commerce automation. Serve Austin\'s fast-moving tech and hospitality market 24/7. Starting at $3,000. Free strategy call.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Agents & Chatbots for Austin TX Businesses | FactoryJet',
    description:
      'Custom AI agents for Austin businesses. Built on GPT-4o and Claude. 60–70% cheaper than Austin AI agencies. Fast delivery. Free strategy call.',
    url: 'https://factoryjet.com/us/austin/ai-agents',
    images: [
      {
        url: 'https://factoryjet.com/images/us/austin/hero-austin.webp',
        width: 1200,
        height: 800,
        alt: 'FactoryJet - AI Agents for Austin TX Businesses',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agents & Chatbots for Austin TX Businesses | FactoryJet',
    description:
      'Custom AI agents for Austin TX businesses. 60–70% cheaper than local agencies. Free strategy call.',
    images: ['https://factoryjet.com/images/us/austin/hero-austin.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/austin/ai-agents',
    languages: usCityAIAlternates['austin-ai-agents'],
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
   JSON-LD Schema (FAQPage + Service)
───────────────────────────────────────────────────────────────────────────── */

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an AI agent for a business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI agent is software that handles multi-step tasks autonomously — answering customer questions, qualifying leads, booking appointments, processing orders, or routing support tickets — using large language models like GPT-4o or Claude. Unlike a chatbot that just responds to messages, an AI agent can take actions: look up live data from your CRM, update records, send follow-up emails, or trigger workflows in connected tools. For Austin businesses dealing with high-volume customer interactions, an AI agent handles the routine work so your team focuses on what requires human judgment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does an AI agent help Austin businesses specifically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Austin\'s market is unique — you have Silicon Hills tech companies competing for talent, a restaurant and hospitality scene that runs 18 hours a day, real estate moving at unusual speed, and a population growing faster than most US metros. AI agents solve three Austin-specific problems: responding to high-volume inbound at any hour (critical for hospitality and retail), competing with resource-rich tech companies without their headcount, and capturing leads from the wave of new residents and businesses arriving weekly who search for vendors online at all hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kinds of AI agents does FactoryJet build for Austin companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet builds five core types for Austin businesses: Customer Support Agents (24/7 automated answers connected to your live systems), Lead Qualification Agents (engage and qualify website visitors before they bounce), E-Commerce Agents (order tracking, returns, product recommendations for Shopify and WooCommerce stores), Appointment Booking Agents (check real calendar availability and confirm bookings for service businesses), and Internal Knowledge Agents (instant answers from your SOPs and policies for your team). Austin businesses most commonly start with lead generation or support agents.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which AI models power FactoryJet\'s agents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use GPT-4o (OpenAI), Claude 3.5 Sonnet (Anthropic), and Gemini (Google) depending on your use case, data sensitivity, and budget. For most Austin customer-facing agents, GPT-4o or Claude delivers the best balance of accuracy and cost. We use Voiceflow, Botpress, and LangChain for orchestration. We pick the right model for your workflow — not the most expensive one.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Austin a good market for AI agent adoption?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Austin is one of the fastest AI-adoption markets in the US. The tech community normalizes AI tools faster than most cities, customers expect digital-first interactions, and the startup culture rewards businesses that move quickly. Early AI agent adopters in Austin\'s hospitality, real estate, and professional services sectors are already seeing competitive advantages — capturing leads other businesses are losing after hours and reducing support overhead in a tight labor market.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can an AI agent connect to my existing tools like HubSpot, Shopify, or Google Calendar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — AI agents integrate natively with the platforms Austin businesses already run on. Common connections include HubSpot and Salesforce for CRM, Shopify and WooCommerce for e-commerce, Google Calendar and Calendly for scheduling, Zendesk and Freshdesk for support ticketing, Slack for internal alerts, and Twilio for SMS. Most Austin businesses already have 70–80% of the integration infrastructure in place. We build the agent layer on top — you don\'t rebuild your stack.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can an Austin AI agent deploy on my website, Instagram DMs, and WhatsApp at the same time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — multi-channel deployment is standard on Growth and Enterprise plans. A single AI agent handles customer conversations across your website chat widget, WhatsApp Business, Instagram DMs, Facebook Messenger, and SMS simultaneously. Austin businesses with active social audiences see 30–50% of their lead inquiries coming through Instagram and Facebook, not just the website. One agent, consistent answers, all channels covered.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a payment plan for Austin AI agent projects, or is everything due at kickoff?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet uses milestone-based payments — 50% at kickoff and 50% at delivery for Starter projects. For Growth ($8,000) and Enterprise ($15,000+) engagements, we offer a three-payment structure: 40% at kickoff, 40% at testing approval, and 20% at launch. Your payments align with working deliverables you can interact with — not with calendar dates. No large upfront commitment before you\'ve seen the agent handling real Austin business scenarios.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Agents & Chatbot Development — Austin, TX',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: {
    '@type': 'City',
    name: 'Austin',
    containedInPlace: {
      '@type': 'State',
      name: 'Texas',
    },
  },
  serviceType: 'AI Agent & Chatbot Development',
  description:
    'Custom AI agents and chatbots for Austin TX small businesses. Specializing in customer support agents, lead generation bots, appointment booking, and e-commerce automation built on GPT-4o and Claude.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter AI Agent',
      price: '3000',
      priceCurrency: 'USD',
      description: 'Single-purpose AI agent for one focused use case — customer support or lead capture.',
    },
    {
      '@type': 'Offer',
      name: 'Growth Agent Platform',
      price: '8000',
      priceCurrency: 'USD',
      description: 'Multi-intent AI agent with CRM integration, live handoff, and conversation dashboard.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise Agent System',
      price: '15000',
      priceCurrency: 'USD',
      description: 'Custom AI agent with fine-tuning, multi-channel deployment, and enterprise integrations.',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const AUSTIN_INDUSTRIES = [
  {
    name: 'Tech & SaaS Companies',
    description:
      'Silicon Hills companies use AI agents to handle inbound product questions, qualify trial sign-ups, route support tickets by severity, and update CRM records automatically — without adding headcount to a team already under Austin\'s notoriously tight tech hiring pressure.',
    example: 'SaaS companies report 25–35% reduction in support ticket volume within 60 days.',
    linkLabel: 'Talk to our team',
    linkHref: '/contact',
  },
  {
    name: 'Restaurants, Bars & Food Service',
    description:
      'Austin\'s restaurant scene is relentless — reservations, catering inquiries, dietary questions, event bookings, and menu questions pour in 24/7 across multiple channels. AI agents handle it all automatically, capture catering leads at midnight, and connect to OpenTable or Resy for live reservation checks.',
    example: 'Restaurant groups reduce front-of-house admin by 3–4 hours per day.',
    linkLabel: 'See how it works',
    linkHref: '/contact',
  },
  {
    name: 'Real Estate & Property Management',
    description:
      'Austin\'s real estate market moves fast. AI agents qualify inbound buyer and renter leads the moment they submit a form, answer listing questions 24/7, schedule property showings directly to agent calendars, and follow up automatically with leads who go cold.',
    example: 'Agents book 30–40% more showings from after-hours website traffic.',
    linkLabel: 'Book a strategy call',
    linkHref: '/contact',
  },
  {
    name: 'Healthcare & Wellness',
    description:
      'Austin healthcare practices — from Ascension Seton-affiliated clinics to independent wellness studios — use AI agents to handle appointment requests, answer insurance and service questions, collect intake information, and fill schedule gaps from after-hours website traffic without a front desk employee on call.',
    example: 'Wellness practices fill 25–35% more appointment slots from after-hours inquiries.',
    linkLabel: 'Get a quote',
    linkHref: '#pricing',
  },
  {
    name: 'Music, Events & Entertainment',
    description:
      'Austin\'s live music and events industry runs around the clock. AI agents handle venue booking inquiries, ticket FAQs, event logistics questions, and artist booking requests — capturing leads from fans and promoters who reach out outside business hours, especially around SXSW, ACL, and Formula 1 season.',
    example: 'Event businesses capture 40%+ more booking inquiries from off-hours traffic.',
    linkLabel: 'Learn more',
    linkHref: '/contact',
  },
  {
    name: 'E-Commerce & Retail Brands',
    description:
      'Austin-based DTC and retail brands use AI agents connected to Shopify or WooCommerce to handle order status inquiries, returns, product questions, and restock notifications automatically — deflecting the repetitive support volume and letting the team focus on growth.',
    example: 'DTC brands report 60–70% fewer "where\'s my order?" tickets in the first month.',
    linkLabel: 'See pricing',
    linkHref: '#pricing',
  },
];

const AUSTIN_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'A 45-minute call where we map your highest-volume customer interactions, review your existing tools and documentation, identify the best AI agent use case for your Austin business, and define what success looks like before we build anything.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We design the conversation flows, escalation logic, integration architecture, and agent behavior. You approve the design document before a line of code is written — no surprises at launch.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Engineering the agent against your tech stack with weekly demos. You interact with the working agent during the build — not just at the end. Feedback is incorporated before we advance to the next phase.',
  },
  {
    number: '04',
    title: 'Test & Tune',
    description:
      'We run the agent through hundreds of real customer scenarios, fix incorrect answers, tighten escalation thresholds, and tune the prompt until it performs reliably across your most common use cases and edge cases.',
  },
  {
    number: '05',
    title: 'Deploy & Train',
    description:
      'Live launch with real-time monitoring, a conversation analytics dashboard, and a recorded training session for your team. 30-day post-launch support included. You own the code and all conversation data.',
  },
];

const ROI_STATS = [
  {
    value: '65%',
    label: 'average support ticket deflection across FactoryJet AI agent deployments',
    microcopy: 'before your team starts the day',
    categoryLabel: 'TICKET DEFLECTION',
  },
  {
    value: '<5s',
    label: 'agent response time vs. hours for a human — the biggest driver of lead close rates',
    microcopy: 'speed determines whether you get the deal',
    categoryLabel: 'RESPONSE SPEED',
  },
  {
    value: '60–70%',
    label: 'cheaper than a comparable Austin or US AI agency',
    microcopy: '25+ years experience, US-caliber output',
    categoryLabel: 'COST ADVANTAGE',
  },
];

const MARKET_STATS = [
  {
    value: '3×',
    label: 'faster lead response via AI agent vs. email — directly linked to higher close rates',
    microcopy: 'Harvard Business Review Lead Response Study',
    categoryLabel: 'LEAD CONVERSION',
  },
  {
    value: '67%',
    label: 'of US consumers used an AI chatbot or agent for customer support in the past year',
    microcopy: 'Drift Conversational Marketing Report 2024',
    categoryLabel: 'CONSUMER ADOPTION',
  },
  {
    value: '24%',
    label: 'annual growth rate of the US AI chatbot market, projected through 2027',
    microcopy: 'Grand View Research 2024',
    categoryLabel: 'MARKET GROWTH',
  },
];

const COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Austin AI Agency' },
  { label: 'DIY Tool (Intercom, Drift)' },
  { label: 'Freelancer' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: [
      '$3,000',
      '$15,000–$40,000',
      '$300–$800/yr (ongoing SaaS fee)',
      '$5,000–$12,000',
    ],
  },
  {
    feature: 'Delivery timeline',
    values: ['2–3 weeks', '2–5 months', 'Days (limited capability)', '3–6 weeks (unreliable)'],
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
    feature: '25+ years of SMB domain experience',
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
    priceRange: 'From $3,000',
    description:
      'One focused AI agent for your highest-impact use case. Perfect for Austin businesses adding their first AI agent to handle a single workflow — support, lead capture, or booking.',
    features: [
      'Single-intent agent (support, lead capture, or booking)',
      'Trained on your FAQs, docs, or product catalog',
      'Website embed widget included',
      'GPT-4o or Claude as the underlying model',
      'Admin panel to review conversations',
      'Live handoff to your email or Slack',
      '14-day post-launch support window',
    ],
    cta: { label: 'Book a Free Strategy Call', modal: true as const, region: 'us' as const },
  },
  {
    name: 'Growth',
    priceRange: 'From $8,000',
    description:
      'A multi-intent agent with deep CRM integrations and a conversation management dashboard. The most popular tier for Austin SMBs serious about automation.',
    features: [
      'Multi-intent agent (support + lead gen + booking in one)',
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
    priceRange: 'From $15,000',
    description:
      'A fully custom AI agent system with fine-tuning, multi-language support, enterprise integrations, and a dedicated engineering partner.',
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
  { key: 'what-is',  label: 'What Is an AI Agent' },
  { key: 'austin',   label: 'AI Agents in Austin' },
  { key: 'process',  label: 'Process & Timeline' },
  { key: 'pricing',  label: 'Pricing & ROI' },
  { key: 'trust',    label: 'Trust & Results' },
];

/* ─── FAQ items — 21 Q-A pairs, Austin-specific and AI-citation optimized ── */
const FAQ_ITEMS = [

  /* ── What Is an AI Agent ── */
  {
    category: 'what-is',
    question: 'What is an AI agent for a business?',
    answer:
      'An AI agent is software that handles multi-step tasks autonomously — answering customer questions, qualifying leads, booking appointments, processing orders, or routing support tickets — using large language models like GPT-4o or Claude. Unlike a simple chatbot that just responds to messages, an AI agent can take actions: look up live data from your CRM, update records, send follow-up emails, or trigger workflows in connected tools. For Austin businesses dealing with high-volume customer interactions, an AI agent handles the routine work so your team focuses on what requires human judgment.',
  },
  {
    category: 'what-is',
    question: 'What is the difference between an AI agent and a regular chatbot?',
    answer:
      'A chatbot is reactive — it waits for a message and responds. An AI agent is proactive and action-oriented — it can receive a trigger (a form fill, an email, an order event), make decisions based on the content, take multi-step actions across connected tools, and report back. For example, a chatbot tells a customer their order is delayed. An AI agent sees the delay, looks up the order, contacts the fulfillment partner, updates the CRM record, and drafts a proactive apology email — all automatically.',
  },
  {
    category: 'what-is',
    question: 'What kinds of AI agents does FactoryJet build for Austin companies?',
    answer:
      'We build five core types: Customer Support Agents (24/7 automated answers connected to your live systems), Lead Qualification Agents (engage and qualify website visitors before they bounce), E-Commerce Agents (order tracking, returns, product recommendations connected to Shopify or WooCommerce), Appointment Booking Agents (check calendar availability and confirm bookings for service businesses), and Internal Knowledge Agents (instant answers from your SOPs and policies for your team). Austin businesses most commonly start with lead generation or support agents.',
  },
  {
    category: 'what-is',
    question: 'Which AI models power FactoryJet agents?',
    answer:
      'We use GPT-4o (OpenAI), Claude 3.5 Sonnet (Anthropic), and Gemini (Google) depending on your use case, data sensitivity, and budget. For most Austin customer-facing agents, GPT-4o or Claude delivers the best balance of accuracy and cost. We use Voiceflow, Botpress, and LangChain for orchestration. We choose the model that fits your workflow — not the most expensive one.',
  },

  {
    category: 'what-is',
    question: 'Can an AI agent connect to my existing tools like HubSpot, Shopify, or Google Calendar?',
    answer:
      'Yes — AI agents integrate natively with the platforms Austin businesses already run on. Common connections include HubSpot and Salesforce for CRM, Shopify and WooCommerce for e-commerce, Google Calendar and Calendly for scheduling, Zendesk and Freshdesk for support ticketing, Slack for internal alerts, and Twilio for SMS. Most Austin businesses already have 70–80% of the integration infrastructure in place because they\'re on standard platforms. We build the agent layer on top — you don\'t rebuild your stack.',
  },

  /* ── AI Agents in Austin ── */
  {
    category: 'austin',
    question: 'Is Austin a good market for AI agent adoption?',
    answer:
      'Austin is one of the fastest AI-adoption markets in the US. The tech community normalizes AI tools faster than most cities — customers in Austin expect digital-first interactions and respond well to fast, accurate automated responses. The startup culture rewards businesses that move quickly. Early AI agent adopters in Austin\'s hospitality, real estate, and professional services sectors are already seeing competitive advantages: capturing leads other businesses are losing after hours, reducing support overhead in a tight labor market.',
  },
  {
    category: 'austin',
    question: 'What Austin-specific business problems do AI agents solve?',
    answer:
      'Three Austin-specific problems: First, the labor market — Austin\'s tech wages are high and good support staff are hard to keep. An AI agent handles 65% of your inbound without adding headcount. Second, the 24/7 economy — Austin\'s restaurant, hospitality, and entertainment scene runs all hours. Leads and bookings come in at 11 p.m. and 2 a.m. A competitor with an AI agent captures those. You don\'t. Third, the growth wave — Austin is adding businesses and residents faster than most US metros. Every week there are new potential customers searching for vendors, and first response wins.',
  },
  {
    category: 'austin',
    question: 'Which Austin industries benefit most from AI agents?',
    answer:
      'Highest-impact industries in Austin: Restaurants and hospitality (reservations, catering inquiries, event bookings), Real estate (lead qualification, showing scheduling, listing Q&A), Tech/SaaS companies (support ticket deflection, trial user onboarding), Healthcare and wellness (appointment booking, intake, after-hours inquiries), Music and events (venue booking, event logistics, SXSW-season inquiry volume), and E-commerce/retail brands (order support, product questions, returns). If your business has high inbound volume and repetitive questions, an AI agent makes the biggest difference.',
  },
  {
    category: 'austin',
    question: 'Do AI agents work for Austin restaurant and hospitality businesses?',
    answer:
      'Yes — hospitality is one of the highest-ROI use cases in Austin. AI agents handle reservation inquiries (connected to OpenTable or Resy), private event and catering inquiries, menu and dietary questions, gift card requests, and general FAQs — 24/7, across your website, Google Business Chat, Facebook Messenger, and SMS simultaneously. During SXSW or ACL, when inquiry volume spikes 3–5×, the agent handles the surge without your team being overwhelmed.',
  },
  {
    category: 'austin',
    question: 'Can an AI agent help an Austin real estate team capture more leads?',
    answer:
      'Absolutely. Austin\'s real estate market moves fast — a buyer searching for listings at 10 p.m. goes with the agent who responds first. An AI agent engages that lead immediately, qualifies their budget and timeline, answers questions about specific listings, and books a showing directly to the agent\'s calendar. When the agent checks their calendar in the morning, the appointment is already there. Real estate teams using AI agents report 30–40% more showings booked from the same ad spend.',
  },

  /* ── Process & Timeline ── */
  {
    category: 'process',
    question: 'What does the AI agent development process look like?',
    answer:
      'Five stages: Discover (we map your top customer interactions, review your tools and docs, define success metrics), Design (conversation flows, escalation logic, integration architecture — you approve before we build), Build (develop and connect to your stack with weekly demos), Test & Tune (run through hundreds of real scenarios, fix errors, tighten thresholds), and Deploy (live launch with monitoring, team training, and 30-day support). Every stage ends with something you can see and test.',
  },
  {
    category: 'process',
    question: 'How long does it take to build and launch an AI agent?',
    answer:
      'A single-purpose agent — a support agent for your top 20 questions or a lead capture agent for one landing page — goes from kickoff to live in 2–3 weeks. Multi-intent agents with CRM integration take 4–5 weeks. Enterprise deployments across multiple departments or channels run 6–10 weeks. Timeline is confirmed after the discovery session, not before.',
  },
  {
    category: 'process',
    question: 'Will I see progress during the build, or just get a final delivery?',
    answer:
      'Weekly demos throughout. Every stage ends with a working demo you can test with real questions and give feedback on. Most clients find that interacting with the agent mid-build changes what they want it to do — and we build that flexibility in. Nothing is a surprise at launch.',
  },
  {
    category: 'process',
    question: 'What happens after the AI agent launches?',
    answer:
      'Every engagement includes a 30-day post-launch window. We monitor conversation logs, fix incorrect answers, tune response quality based on real usage, and deliver a recorded training session for your Austin team. After 30 days you can continue on a monthly retainer or manage it yourself — the dashboard is built for non-technical operators.',
  },

  {
    category: 'process',
    question: 'Can an Austin AI agent deploy on my website, Instagram DMs, and WhatsApp at the same time?',
    answer:
      'Yes — multi-channel deployment is standard on Growth and Enterprise plans. A single AI agent handles customer conversations across your website chat widget, WhatsApp Business, Instagram DMs, Facebook Messenger, and SMS simultaneously — with consistent answers and tone on every channel. Austin businesses with active social audiences see 30–50% of their lead inquiries coming through Instagram and Facebook, not just the website. One agent covers all of it.',
  },

  /* ── Pricing & ROI ── */
  {
    category: 'pricing',
    question: 'How much does an AI agent cost for an Austin business?',
    answer:
      'FactoryJet\'s AI agents start at $3,000 for a single-purpose Starter agent. The Growth tier at $8,000 covers multi-intent agents with CRM integration, live handoff, and a conversation dashboard — the most popular option for Austin SMBs. Custom enterprise agents with fine-tuning and multi-channel deployment start at $15,000. All prices are 60–70% lower than comparable Austin or national AI agencies.',
  },
  {
    category: 'pricing',
    question: 'Why is FactoryJet 60–70% cheaper than Austin AI agencies?',
    answer:
      'Our engineering team brings 25+ years of focused expertise. Same quality of AI architecture, conversation design, and delivery — at dramatically lower labor costs. We\'ve served US businesses for 25 years. When you brief us, an engineer reads it, not an account manager. No overhead layers, no inflated Austin office rates. The savings go to you.',
  },
  {
    category: 'pricing',
    question: 'What return on investment can I expect from an AI agent?',
    answer:
      'The ROI case is direct. A support agent handling 65% of your tickets at $8,000 typically pays for itself in 2–3 months for a team answering 50+ tickets per day. A lead agent responding to website visitors in under 5 seconds vs. waiting hours for a human see 2–5× higher lead-to-demo conversion. Austin restaurant and real estate clients typically recover the full build cost within 60–90 days from bookings captured after hours.',
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the agent is built?',
    answer:
      'Two types: API usage (typically $30–$150/month for most Austin SMB agent volumes — paid directly to OpenAI or Anthropic, not marked up by us) and optionally a monthly optimization retainer for new flows or integrations. Many clients self-manage after the 30-day post-launch window.',
  },

  {
    category: 'pricing',
    question: 'Is there a payment plan, or do I pay the full cost upfront?',
    answer:
      'FactoryJet uses milestone-based payments — 50% at project kickoff and 50% at delivery for Starter builds. For Growth ($8,000) and Enterprise ($15,000+) projects, we offer a three-payment structure: 40% at kickoff, 40% at testing approval, 20% at launch. Your payments align with working deliverables you can test — not with dates on a calendar. No large upfront risk before you\'ve seen the Austin AI agent working on real customer scenarios.',
  },

  /* ── Trust & Results ── */
  {
    category: 'trust',
    question: 'Is customer data safe with an AI agent?',
    answer:
      'We use API-level integrations only — no screen scraping. We enforce least-privilege data access and implement full audit trails on every conversation. For regulated industries in Austin — healthcare practices affiliated with Ascension Seton or St. David\'s, legal firms, financial advisors — we configure the agent to avoid storing PII and can use private LLM deployments. All conversation logs are owned by you.',
  },
  {
    category: 'trust',
    question: 'Can an AI agent handle Spanish-speaking customers?',
    answer:
      'Yes. GPT-4o and Claude understand and respond in 50+ languages without separate training. For Austin businesses with Spanish-speaking customers — common in the Austin area — we configure the agent to detect language automatically and respond in kind. Multi-language is included on Growth and Enterprise plans at no extra cost.',
  },
  {
    category: 'trust',
    question: 'What results have other businesses gotten from FactoryJet AI agents?',
    answer:
      'An e-commerce brand reduced support ticket volume by 68% in the first 30 days. A real estate team went from 8-hour response times to sub-5-second responses and booked 35% more showings without increasing ad spend. A hospitality business captured 40% more event inquiries from after-hours web traffic during peak season. We share relevant case studies on a strategy call.',
  },
  {
    category: 'trust',
    question: 'How is FactoryJet different from a local Austin AI development agency?',
    answer:
      'Three differences: price (60–70% cheaper — specialized engineers serving US businesses for 25+ years), speed (no layers between your brief and the engineer building it — weeks, not months), and SMB depth (500+ small business projects since 1999 — we understand what operations look like inside a 10-person Austin business, not just enterprise AI theory). Austin agencies add Silicon Hills overhead to their rates. We don\'t.',
  },
  {
    category: 'trust',
    question: 'Do I need a developer to manage the agent after launch?',
    answer:
      'No. The admin dashboard lets non-technical team members view conversation logs, update answer content, adjust escalation thresholds, and monitor performance metrics without touching code. Your office manager or marketing coordinator can run it. If something breaks because a connected platform changes its API, you contact us and we fix it.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function AustinAIAgentsPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <Script
        id="austin-ai-agents-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="austin-ai-agents-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/us/services' },
          { label: 'AI Agents', href: '/us/services/ai-chatbot-development' },
          { label: 'AI Automation', href: '/us/services/ai-workflow-automation' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Book a Free Call', modal: true, region: 'us' }}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="AI AGENTS · AUSTIN, TX"
          headline="Austin Businesses Win More Customers When an AI Agent Responds First"
          lead="Austin's market is fast, competitive, and always on. FactoryJet builds custom AI agents for Austin businesses — customer support, lead generation, appointment booking, and e-commerce automation — that respond in seconds, connect to your existing tools, and cost 60–70% less than a local Austin agency."
          primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            '500+ businesses served',
            'Starting at $3,000',
            '60–70% cheaper than Austin agencies',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#F05A28]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                AI AGENTS IN ACTION — AUSTIN
              </p>
              <p className="mt-4 font-fj-display text-[2rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                65% of support tickets handled before your team gets to the office.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Austin restaurant guest asks about catering for 80 → agent checks availability → sends quote in 4 seconds',
                  'Tech founder lands on pricing page at midnight → agent qualifies intent → books a demo for tomorrow',
                  'Real estate prospect texts about a South Austin listing → agent answers questions → schedules a showing',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F05A28]/10 font-fj-mono text-[10px] font-bold text-[#F05A28]">
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
                  All three resolved automatically, 24/7 — without a single new hire.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 2. TRUST STATS ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ businesses served. 25 years of building. One goal: your results."
        />

        {/* ── 3. WHAT IS AN AI AGENT ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="AI AGENTS EXPLAINED"
          headline="What Is an AI Agent — and Why Austin Businesses Need One Now"
          lead="An AI agent that understands what someone is asking, connects to your live business data, and takes action — is a fundamentally different product than a FAQ widget or a form that sends an email."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'Answer questions instantly',
                  'Qualify leads 24/7',
                  'Book appointments',
                  'Check live order status',
                  'Route to humans smartly',
                  'Work across channels',
                ].map((cap) => (
                  <span
                    key={cap}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#F05A28]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {cap}
                  </span>
                ))}
              </div>
              <p>
                Most Austin businesses think they already have a chatbot — because they have a live chat widget that pings someone on the team. That&apos;s not an AI agent. That&apos;s a notification. An AI agent built on GPT-4o or Claude actually understands the customer&apos;s question, knows your products and policies, and gives a complete, accurate answer in under 5 seconds — without your team being in the loop.
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
                  In Austin&apos;s competitive market, the business that responds first usually wins. That advantage is now automated.
                </p>
              </div>
              <p>
                Austin is growing fast — new businesses, new residents, new competition every month. An AI agent doesn&apos;t take vacations, doesn&apos;t need benefits, and doesn&apos;t fall behind during SXSW or ACL week when your inbox explodes. It handles the top 65% of your inbound volume automatically, so your team handles what actually requires a human.
              </p>

              <div className="grid grid-cols-2 gap-2" aria-hidden>
                {[
                  'Tech & SaaS companies',
                  'Restaurants & hospitality',
                  'Real estate teams',
                  'Healthcare practices',
                  'Music & events businesses',
                  'E-commerce brands',
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
                  How an AI Agent Works
                </p>
              </div>
              <div className="px-7 pt-6 pb-2">
                {([
                  {
                    step: '01',
                    title: 'Customer sends a message',
                    desc: 'Website widget, WhatsApp, SMS, or Messenger — any channel your Austin customers use.',
                  },
                  {
                    step: '02',
                    title: 'AI understands the intent',
                    desc: 'GPT-4o or Claude reads the question — even if poorly phrased — and identifies what\'s being asked.',
                  },
                  {
                    step: '03',
                    title: 'Pulls your live data',
                    desc: 'Queries your CRM, Shopify store, calendar, help desk, or any connected tool for the relevant answer.',
                  },
                  {
                    step: '04',
                    title: 'Responds or escalates',
                    desc: 'Sends an accurate answer in seconds — or routes to a human with the full conversation transcript.',
                  },
                ] as const).map((item, i, arr) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex shrink-0 flex-col items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F05A28] font-fj-mono text-[11px] font-bold text-white">
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
          headline="Austin's market never sleeps. Your support team does."
          lead="Austin is growing faster than almost any US city. New businesses, new residents, new competition — every week. The businesses capturing that growth are the ones responding first. Right now, some of your competitors are doing it automatically."
          pillars={[
            {
              icon: '⏱',
              title: 'Every hour of delay costs you the lead',
              body: 'Austin\'s tech-savvy buyers move fast. Research shows 78% of customers go with the first business that responds. If a competitor has an AI agent answering in 5 seconds and you\'re waiting for someone to check Slack, you\'re handing leads to them. During SXSW, ACL, and F1 season, that gap widens by an order of magnitude.',
            },
            {
              icon: '📉',
              title: 'Your team is answering the same questions on repeat',
              body: 'For most Austin businesses, 60–70% of support volume is the same questions: availability, pricing, order status, service details, how to book. An AI agent handles all of them automatically, around the clock — freeing your team for the work that actually requires a human. In Austin\'s tight labor market, that efficiency is real money.',
            },
            {
              icon: '💸',
              title: 'Austin agency rates are some of the highest in the South',
              body: 'Austin AI agencies benefit from the same tech wage inflation as the rest of Silicon Hills. Build costs for comparable work are $15,000–$40,000+ locally. FactoryJet delivers the same quality at 60–70% less — specialized engineers who have been serving US businesses for 25 years, without the 6th Street overhead.',
            },
          ]}
        />

        {/* ── 5. AUSTIN INDUSTRIES ─────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="INDUSTRIES WE SERVE IN AUSTIN"
          headline="AI Agents Built for Austin's Most Active Industries"
          lead="Austin's economy is diverse and fast-moving. We build AI agents with industry-specific knowledge, Austin market context, and the integrations each vertical actually uses."
          sectors={AUSTIN_INDUSTRIES}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Strategy Call to Live AI Agent in 2–5 Weeks"
          lead="A structured 5-stage process that keeps you informed at every step and delivers a working AI agent — not a slide deck about one."
          stages={AUSTIN_JOURNEY_STAGES}
          closingNote="5 STAGES · 2–5 WEEKS TO LAUNCH · WEEKLY DEMOS THROUGHOUT"
        />

        {/* ── 7. MARKET STATS ──────────────────────────────────────────────── */}
        <div className="bg-fj-neutral-50">
          <BoringStatsRow stats={MARKET_STATS} align="center" />
        </div>

        {/* ── 8. ROI STATS ─────────────────────────────────────────────────── */}
        <div className="bg-fj-neutral-50">
          <BoringStatsRow stats={ROI_STATS} align="center" />
        </div>

        {/* ── 9. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Austin Agency vs. DIY Tool vs. Freelancer"
          lead="The honest breakdown: what you actually get, at what price, and how fast."
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
        />

        {/* ── 10. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="PRICING"
            headline="Transparent, Fixed-Price AI Agent Development for Austin Businesses"
            lead="No hourly billing. No scope creep surprises. Every tier includes a fixed scope, a fixed price, and a delivery timeline we stand behind."
            tiers={PRICING_TIERS}
            footnote="All prices in USD. Custom enterprise scopes quoted after a free strategy call. Monthly retainer options available. You own all code and conversation data."
          />
        </div>

        {/* ── 11. WHY FACTORYJET (DARK) ────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="We're not an Austin agency with a Congress Ave office. That's exactly the point."
          lead="We're a 25-year-old software company that has built 500+ production systems for real businesses. The AI agents we build don't live in a demo — they run in production, handling real customer conversations every day."
          pillars={[
            {
              icon: '⚡',
              title: 'Speed without cutting corners',
              body: 'An Austin AI agency has account managers, project coordinators, and a sales team to keep fed. We don\'t. When you brief us, an engineer reads it — not an account manager. That\'s why our timelines are weeks, not quarters. And why our price is 60–70% lower.',
            },
            {
              icon: '💡',
              title: 'SMB depth, not startup theory',
              body: 'We\'ve built for restaurants, real estate teams, e-commerce brands, law firms, and healthcare practices since 1999. We know where the complexity actually lives inside a 15-person business — the edge cases, the messy data, the workflows that don\'t match the textbook. We build for that reality.',
            },
            {
              icon: '🔒',
              title: 'You own everything. Always.',
              body: 'No vendor lock-in, no SaaS subscriptions, no proprietary platforms you can\'t leave. We deliver the full codebase, all API credentials, and documentation. If you outgrow us or want to take it in-house, you walk away with an asset — not a dependency.',
            },
          ]}
        />

        {/* ── 12. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything Austin Businesses Ask Before Building an AI Agent"
          lead="No jargon. No runaround. The questions we get on every Austin strategy call — answered straight."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── 13. FINAL CTA ────────────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="READY TO START"
            headline="Book a Free 30-Minute AI Agent Strategy Call"
            sub="We'll review your current support or lead flow, identify where an AI agent would make the biggest difference for your Austin business, and give you a fixed-price estimate — before you commit to anything."
            primaryCta={{ label: 'Book Your Free Strategy Call', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See All AI Services', href: '/us/services' }}
            objectionHandler="Most Austin clients see full ROI within 90 days. Free call, fixed price, no hidden fees."
          />
        </div>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
