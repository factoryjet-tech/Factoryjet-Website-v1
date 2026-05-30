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
  title: 'AI Agents & Chatbots for Denver CO Businesses | FactoryJet',
  description:
    'Custom AI agents for Denver businesses — customer support, lead gen & booking. Built for Denver\'s outdoor, tech & startup economy. From $3,000. Get a quote.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Agents & Chatbots for Denver CO Businesses | FactoryJet',
    description:
      'Custom AI agents for Denver businesses. Built on GPT-4o and Claude. fixed-price, milestone-paid. Fast delivery. Get a quote.',
    url: 'https://factoryjet.com/us/denver/ai-agents',
    images: [
      {
        url: 'https://factoryjet.com/images/us/denver/hero-denver.webp',
        width: 1200,
        height: 800,
        alt: 'FactoryJet - AI Agents for Denver CO Businesses',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agents & Chatbots for Denver CO Businesses | FactoryJet',
    description:
      'Custom AI agents for Denver CO businesses. fixed-price, milestone-paid. Get a quote.',
    images: ['https://factoryjet.com/images/us/denver/hero-denver.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/denver/ai-agents',
    languages: usCityAIAlternates['denver-ai-agents'],
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
      name: 'What is an AI agent for a Denver business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI agent is software that handles multi-step customer interactions autonomously — answering questions, qualifying leads, booking appointments, processing orders, and routing support tickets — using large language models like GPT-4o or Claude. For Denver businesses in outdoor retail, SaaS, cannabis, hospitality, and real estate, an AI agent responds to customers at any hour, connects to your live business systems, and handles the routine workload so your team focuses on growth.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does an AI agent help Denver businesses specifically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Denver\'s economy has distinct characteristics: a strong outdoor and active lifestyle brand scene, a growing tech and startup corridor along the 16th Street and RiNo areas, a cannabis industry that relies heavily on digital customer education, and a booming population of remote workers and transplants who find vendors online. AI agents help Denver businesses respond immediately to inbound — from gear questions at midnight to SaaS trial inquiries over the weekend — and compete with larger companies without matching their headcount.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kinds of AI agents does FactoryJet build for Denver companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build five core types: Customer Support Agents (24/7 automated answers connected to your live systems), Lead Qualification Agents (engage and qualify website visitors before they bounce), E-Commerce Agents (order tracking, returns, product recommendations for outdoor gear, DTC brands, and retail), Appointment Booking Agents (scheduling for wellness studios, medical practices, and service businesses), and Internal Knowledge Agents (instant answers from your SOPs for your team). Denver businesses most commonly start with lead generation or e-commerce support agents.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an AI agent cost for a Denver business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet\'s AI agents start at $3,000 for a single-purpose Starter agent. The Growth tier at $8,000 covers multi-intent agents with CRM integration, live handoff, and a conversation dashboard — the most popular option for Denver SMBs. Custom enterprise agents start at $15,000. All prices are significantly lower than comparable Denver or national AI agencies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Denver a strong market for AI adoption?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Denver ranks consistently among the top US metros for startup activity and technology adoption. The city\'s mix of tech-native transplants, outdoor industry digital brands, and a growing SaaS ecosystem means customers are comfortable with AI-powered interactions and expect fast digital responses. Businesses that deploy AI agents in Denver report particularly strong results in after-hours lead capture — a critical advantage given the city\'s active lifestyle culture that has people browsing and buying outside of traditional business hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a Denver AI agent connect to tools like HubSpot, Shopify, and Google Calendar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — AI agents integrate natively with the platforms Denver businesses already use. Common connections include HubSpot and Salesforce for CRM, Shopify and WooCommerce for e-commerce, Google Calendar and Calendly for scheduling, Zendesk and Freshdesk for support ticketing, Slack for team alerts, and Twilio for SMS. Most Denver businesses are already on standard platforms, which means 70–80% of the integration work is already done. We build the agent layer on top of your existing stack.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a Denver AI agent run on my website, Instagram, and WhatsApp simultaneously?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — multi-channel deployment is included on Growth and Enterprise plans. A single AI agent handles conversations across your website chat widget, WhatsApp Business, Instagram DMs, Facebook Messenger, and SMS. Denver outdoor and lifestyle brands with strong social audiences see 35–50% of inbound inquiries through Instagram and Facebook, not just the website. One agent, one configuration, consistent answers across all channels.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a payment plan for Denver AI agent projects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet uses milestone-based payments — 50% at kickoff and 50% at delivery for Starter projects. For Growth ($8,000) and Enterprise ($15,000+) engagements: 40% at kickoff, 40% at testing approval, 20% at launch. Payments align with working deliverables you can test — not with calendar dates. No large upfront commitment before you\'ve seen the Denver AI agent working on real business scenarios.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Agents & Chatbot Development — Denver, CO',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: {
    '@type': 'City',
    name: 'Denver',
    containedInPlace: {
      '@type': 'State',
      name: 'Colorado',
    },
  },
  serviceType: 'AI Agent & Chatbot Development',
  description:
    'Custom AI agents and chatbots for Denver CO small businesses. Specializing in customer support agents, lead generation bots, appointment booking, and e-commerce automation built on GPT-4o and Claude.',
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '150',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1',
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds your Denver AI agent solution in 7 days',
  description: 'Our 7-day process for delivering production-ready AI agents and automation for businesses.',
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 — Discovery & Use-Case Mapping',
      text: 'We audit your workflows, identify the highest-ROI automation opportunities, and define the exact scope of your AI solution.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 — Architecture & Data Planning',
      text: 'We design the AI architecture, select the right models and APIs, and map your data sources and integration points.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3–4 — Build & Integrate',
      text: 'We build your AI agents or automation workflows and integrate them with your existing tools, CRM, and business systems.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5–6 — Testing & Optimization',
      text: 'We run comprehensive testing across edge cases, optimize for accuracy and latency, and add monitoring and alerting.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7 — Launch & Training',
      text: 'Your AI solution goes live. We train your team, provide documentation, and offer 30-day post-launch support.',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const DENVER_INDUSTRIES = [
  {
    name: 'Outdoor & Active Lifestyle Brands',
    description:
      'Denver is the outdoor industry\'s backyard. Gear brands, ski and snowboard companies, cycling businesses, and adventure tour operators use AI agents to handle product questions, size and fit guidance, equipment recommendations, and order support — freeing the team to focus on product development and partnerships.',
    example: 'Outdoor DTC brands report 60–70% fewer repetitive product Q&A tickets.',
    linkLabel: 'Talk to our team',
    linkHref: '/contact',
  },
  {
    name: 'Tech Startups & SaaS Companies',
    description:
      'Denver\'s tech corridor — LoDo, RiNo, the Denver Tech Center — is home to a growing cluster of SaaS companies and startups. AI agents handle inbound trial inquiries, qualify leads from marketing campaigns, route support tickets, and give onboarding guidance automatically — letting lean startup teams punch above their weight.',
    example: 'SaaS companies report 25–35% fewer first-tier support tickets within 60 days.',
    linkLabel: 'See how it works',
    linkHref: '/contact',
  },
  {
    name: 'Real Estate & Property Management',
    description:
      'Denver\'s real estate market has been one of the most active in the country. AI agents qualify inbound buyer and renter leads the moment a form is submitted, answer listing-specific questions at any hour, schedule property tours directly to agent calendars, and follow up automatically — without a coordinator managing the inbox.',
    example: 'Denver real estate teams book 30–40% more showings from the same ad spend.',
    linkLabel: 'Book a strategy call',
    linkHref: '/contact',
  },
  {
    name: 'Cannabis & Dispensary Businesses',
    description:
      'Colorado\'s regulated cannabis market requires careful customer education — product types, potency, effects, medical vs. recreational, purchase limits, and in-store vs. delivery options. AI agents handle these FAQ conversations at scale, across website and SMS, educating customers before they visit and answering the questions your budtenders answer fifty times a day.',
    example: 'Dispensary teams reclaim 3–5 hours per day of repetitive phone and chat volume.',
    linkLabel: 'Get a quote',
    linkHref: '#pricing',
  },
  {
    name: 'Healthcare & Wellness',
    description:
      'Denver\'s health-conscious culture has driven explosive growth in wellness studios, integrative clinics, and physical therapy practices. AI agents handle appointment booking, new patient intake, insurance and service questions, and after-hours inquiries — filling schedule gaps without a front desk employee available 24/7.',
    example: 'Wellness practices fill 25–35% more appointment slots from after-hours web traffic.',
    linkLabel: 'Learn more',
    linkHref: '/contact',
  },
  {
    name: 'Hospitality & Tourism',
    description:
      'Denver\'s proximity to world-class skiing, hiking, and mountain destinations drives huge hospitality and tourism demand. Boutique hotels, rental property managers, tour operators, and mountain town businesses use AI agents to handle booking inquiries, availability questions, local recommendations, and activity FAQs — capturing leads around the clock across every season.',
    example: 'Hospitality businesses capture 35–45% more bookings from after-hours traffic.',
    linkLabel: 'See pricing',
    linkHref: '#pricing',
  },
];

const DENVER_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'A 45-minute call where we map your highest-volume customer interactions, review your existing tools and documentation, identify the best AI agent use case for your Denver business, and define what success looks like before we build anything.',
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
      'Engineering the agent against your tech stack with weekly demos. You test the working agent during the build — not just at the end. Feedback is incorporated before we advance to the next phase.',
  },
  {
    number: '04',
    title: 'Test & Tune',
    description:
      'We run the agent through hundreds of real customer scenarios, fix incorrect answers, tighten escalation thresholds, and tune the prompt until it performs reliably across your most common use cases.',
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
    value: 'Fixed Price',
    label: 'milestone-paid with full code ownership — 25+ years experience, US-caliber output',
    microcopy: 'predictable from quote to launch — no scope-creep invoices',
    categoryLabel: 'PRICING MODEL',
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
  { label: 'Denver AI Agency' },
  { label: 'DIY Tool (Intercom, Drift)' },
  { label: 'Freelancer' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: [
      '$3,000',
      '$12,000–$35,000',
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
      'One focused AI agent for your highest-impact use case. Perfect for Denver businesses adding their first AI agent to handle a single workflow — support, lead capture, or booking.',
    features: [
      'Single-intent agent (support, lead capture, or booking)',
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
    priceRange: 'From $8,000',
    description:
      'A multi-intent agent with deep CRM integrations and a conversation management dashboard. The most popular tier for Denver SMBs serious about automation.',
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
  { key: 'denver',   label: 'AI Agents in Denver' },
  { key: 'process',  label: 'Process & Timeline' },
  { key: 'pricing',  label: 'Pricing & ROI' },
  { key: 'trust',    label: 'Trust & Results' },
];

/* ─── FAQ items — 21 Q-A pairs, Denver-specific ─────────────────────────── */
const FAQ_ITEMS = [

  /* ── What Is an AI Agent ── */
  {
    category: 'what-is',
    question: 'What is an AI agent for a business?',
    answer:
      'An AI agent is software that handles multi-step tasks autonomously — answering customer questions, qualifying leads, booking appointments, processing orders, or routing support tickets — using large language models like GPT-4o or Claude. Unlike a chatbot that just responds to messages, an AI agent can take actions: look up live data from your CRM, update records, send follow-up emails, or trigger workflows in connected tools. For Denver businesses dealing with high-volume customer interactions, an AI agent handles the routine work so your team focuses on growth.',
  },
  {
    category: 'what-is',
    question: 'What is the difference between an AI agent and a regular chatbot?',
    answer:
      'A chatbot is reactive — it waits for a message and responds. An AI agent is action-oriented — it can receive a trigger, make decisions based on content, take multi-step actions across connected tools, and report back. For example, a chatbot tells a customer their order is delayed. An AI agent sees the delay, looks up the order, contacts the fulfillment partner, updates the CRM record, and drafts a proactive apology email — all automatically. The agent does the work; the chatbot just communicates.',
  },
  {
    category: 'what-is',
    question: 'What kinds of AI agents does FactoryJet build for Denver companies?',
    answer:
      'We build five core types: Customer Support Agents (24/7 automated answers connected to your live systems), Lead Qualification Agents (engage and qualify website visitors in real time), E-Commerce Agents (order tracking, returns, product recommendations connected to Shopify or WooCommerce), Appointment Booking Agents (check calendar availability and confirm bookings for service businesses), and Internal Knowledge Agents (instant answers from your SOPs and documentation for your team). Denver outdoor brands, SaaS companies, and real estate teams are our most common first-time clients.',
  },
  {
    category: 'what-is',
    question: 'Which AI models power FactoryJet agents?',
    answer:
      'We use GPT-4o (OpenAI), Claude 3.5 Sonnet (Anthropic), and Gemini (Google) depending on your use case, data sensitivity, and budget. For most Denver customer-facing agents, GPT-4o or Claude delivers the best balance of accuracy and cost. We use Voiceflow, Botpress, and LangChain for orchestration. We pick the model that fits your workflow — not the most expensive one on the market.',
  },

  {
    category: 'what-is',
    question: 'Can a Denver AI agent connect to tools like HubSpot, Shopify, and Google Calendar?',
    answer:
      'Yes — AI agents integrate natively with the platforms Denver businesses already use. Common connections include HubSpot and Salesforce for CRM, Shopify and WooCommerce for e-commerce, Google Calendar and Calendly for scheduling, Zendesk and Freshdesk for support ticketing, Slack for internal team alerts, and Twilio for SMS. Most Denver businesses are already on standard platforms, which means 70–80% of the integration work is already done. We build the AI agent layer on top — you keep your existing stack.',
  },

  /* ── AI Agents in Denver ── */
  {
    category: 'denver',
    question: 'Is Denver a strong market for AI agent adoption?',
    answer:
      'Yes. Denver consistently ranks among the top US metros for startup activity, tech adoption, and digital commerce growth. The city\'s mix of tech-native transplants, outdoor industry digital brands, and a growing SaaS ecosystem means customers expect fast, accurate digital responses. Denver businesses that deploy AI agents report particularly strong results in after-hours lead capture — a critical advantage given the city\'s active lifestyle culture, which has people browsing and buying outside traditional business hours.',
  },
  {
    category: 'denver',
    question: 'What Denver-specific business problems do AI agents solve?',
    answer:
      'Three Denver-specific advantages: First, the outdoor and lifestyle economy runs 24/7 — customers research gear, book experiences, and ask product questions at all hours, especially around ski season and summer adventures. Second, Denver\'s labor market is tight and wages have risen significantly — an AI agent handles 65% of your support inbound without adding payroll. Third, Denver\'s population growth brings a constant stream of new residents finding local businesses online. First-response advantage is decisive.',
  },
  {
    category: 'denver',
    question: 'Which Denver industries benefit most from AI agents?',
    answer:
      'Highest-impact industries in Denver: Outdoor and active lifestyle brands (product support, gear questions, order tracking), Tech and SaaS startups (lead qualification, trial onboarding, support deflection), Real estate (showing scheduling, listing Q&A, lead nurturing), Cannabis and dispensaries (product education, compliance-safe FAQ handling), Healthcare and wellness (appointment booking, intake, after-hours inquiries), and Hospitality and tourism (mountain town booking inquiries, availability questions, seasonal peaks).',
  },
  {
    category: 'denver',
    question: 'Can an AI agent handle seasonal volume spikes — like ski season or summer camping season?',
    answer:
      'Yes — and this is one of the strongest use cases for Denver businesses. Seasonal spikes in outdoor retail, hospitality, and tour operators can triple inbound volume in a matter of weeks. An AI agent scales automatically — it handles 5 conversations or 500 with the same response time and quality. You don\'t need to hire and train seasonal support staff just to answer the same questions you answered last year.',
  },
  {
    category: 'denver',
    question: 'Do AI agents work for Denver\'s cannabis and dispensary industry?',
    answer:
      'Yes, with important caveats around compliance. AI agents handle educational FAQ conversations — product types, effects, dosage guidance, purchase limits, in-store vs. delivery options, and age verification flows — without making medical claims or violating advertising regulations. We design cannabis AI agents carefully: the agent educates and directs customers to in-store consultations for medical questions, while handling the high-volume general inquiries that clog your phone lines and chat.',
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
      'A single-purpose agent — a support agent for your top 20 questions or a lead capture agent for one landing page — goes from kickoff to live in 2–3 weeks. Multi-intent agents with CRM integration take 4–5 weeks. Enterprise deployments across multiple departments or channels run 6–10 weeks. Timeline is confirmed after the discovery session, not upfront.',
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
      'Every engagement includes a 30-day post-launch window. We monitor conversation logs, fix incorrect answers, tune response quality based on real usage, and deliver a recorded training session for your Denver team. After 30 days you can continue on a monthly retainer or manage it yourself — the dashboard is built for non-technical operators.',
  },

  {
    category: 'process',
    question: 'Can a Denver AI agent run on my website, Instagram, and WhatsApp simultaneously?',
    answer:
      'Yes — multi-channel deployment is included on Growth and Enterprise plans. A single AI agent handles conversations across your website chat widget, WhatsApp Business, Instagram DMs, Facebook Messenger, and SMS — with consistent, on-brand answers on every channel. Denver outdoor and lifestyle brands with strong social audiences see 35–50% of inbound inquiries through Instagram and Facebook, not just the website. One agent, one configuration, all channels covered.',
  },

  /* ── Pricing & ROI ── */
  {
    category: 'pricing',
    question: 'How much does an AI agent cost for a Denver business?',
    answer:
      'FactoryJet\'s AI agents start at $3,000 for a single-purpose Starter agent. The Growth tier at $8,000 covers multi-intent agents with CRM integration, live handoff, and a conversation dashboard — the most popular option for Denver SMBs. Custom enterprise agents start at $15,000. All prices are significantly lower than comparable Denver or national AI agencies.',
  },
  {
    category: 'pricing',
    question: 'Why is FactoryJet fixed-price, milestone-paid?',
    answer:
      'Our engineering team brings 25+ years of focused expertise. Same quality of AI architecture, conversation design, and delivery — without the overhead that inflates traditional agency invoices. We\'ve served US businesses for 25 years. When you brief us, an engineer reads it, not an account manager. No Cherry Creek or LoDo office rates built into the quote.',
  },
  {
    category: 'pricing',
    question: 'What return on investment can I expect from an AI agent?',
    answer:
      'The ROI case is direct. A support agent handling 65% of your tickets at $8,000 typically pays for itself in 2–3 months for a team answering 50+ tickets per day. A lead agent responding to website visitors in under 5 seconds vs. waiting hours for a human reply sees 2–5× higher lead-to-demo conversion. Denver outdoor and hospitality clients recover the full build cost in 60–90 days from bookings captured after hours.',
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the agent is built?',
    answer:
      'Two types: API usage (typically $30–$150/month for most Denver SMB agent volumes — paid directly to OpenAI or Anthropic, not marked up by us) and optionally a monthly optimization retainer for new flows or integrations. Many clients self-manage after the 30-day post-launch window.',
  },

  {
    category: 'pricing',
    question: 'Is there a payment plan for Denver AI agent projects, or is everything due at kickoff?',
    answer:
      'FactoryJet uses milestone-based payments — 50% at kickoff and 50% at delivery for Starter projects. For Growth ($8,000) and Enterprise ($15,000+) engagements, we offer a three-payment structure: 40% at kickoff, 40% at testing approval, and 20% at launch. Payments align with working deliverables you can interact with — not with project calendar dates. No large upfront commitment before you\'ve seen the Denver AI agent handling real business scenarios.',
  },

  /* ── Trust & Results ── */
  {
    category: 'trust',
    question: 'Is customer data safe with an AI agent?',
    answer:
      'We use API-level integrations only — no screen scraping. We enforce least-privilege data access and implement full audit trails on every conversation. For regulated industries in Denver — healthcare, legal, cannabis — we configure the agent to avoid storing PII and can use private LLM deployments. All conversation logs are owned by you.',
  },
  {
    category: 'trust',
    question: 'What results have other businesses gotten from FactoryJet AI agents?',
    answer:
      'An outdoor e-commerce brand reduced support ticket volume by 68% in the first 30 days. A real estate team went from 6-hour response times to sub-5-second responses and booked 35% more showings without increasing ad spend. A healthcare practice\'s booking agent filled 30% more appointment slots per week from after-hours web traffic. We share relevant case studies on a strategy call.',
  },
  {
    category: 'trust',
    question: 'Can an AI agent handle multiple languages for Denver\'s diverse customer base?',
    answer:
      'Yes. GPT-4o and Claude understand and respond in 50+ languages without separate training. For Denver businesses with Spanish-speaking customers — common across the metro — we configure the agent to detect language automatically and respond in kind. Multi-language support is included on Growth and Enterprise plans.',
  },
  {
    category: 'trust',
    question: 'How is FactoryJet different from a local Denver AI development agency?',
    answer:
      'Three differences: price (specialized engineers serving US businesses for 25+ years), speed (no layers between your brief and the engineer building it — weeks, not months), and SMB depth (500+ small business projects since 1999 — we understand what operations look like inside a 12-person Denver company, not just enterprise AI theory).',
  },
  {
    category: 'trust',
    question: 'Do I need a developer to manage the agent after launch?',
    answer:
      'No. The admin dashboard lets non-technical team members view conversation logs, update answer content, adjust escalation thresholds, and monitor performance metrics without touching code. Your operations or marketing coordinator can run it day-to-day. If something breaks because a connected platform changes its API, you contact us and we fix it.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function DenverAIAgentsPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <Script
        id="denver-ai-agents-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="denver-ai-agents-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="denver-ai-agents-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/us/services' },
          { label: 'AI Agents', href: '/us/services/ai-chatbot-development' },
          { label: 'AI Automation', href: '/us/services/ai-workflow-automation' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Book a Call', modal: true, region: 'us' }}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="AI AGENTS · DENVER, CO"
          headline="Denver Businesses Are Capturing More Leads While the Mountains Are Still Dark"
          lead="Denver's market is competitive, seasonal, and increasingly digital-first. FactoryJet builds custom AI agents for Denver businesses — customer support, lead generation, appointment booking, and e-commerce automation — that respond in seconds, connect to your existing tools, and cost fixed-price vs a local Denver agency."
          primaryCta={{ label: 'Get a Quote', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            '500+ businesses served',
            'Starting at $3,000',
            'engineered for measurable outcomes',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#F05A28]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                AI AGENTS IN ACTION — DENVER
              </p>
              <p className="mt-4 font-fj-display text-[2rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                65% of support tickets handled before your team gets to the office.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Denver gear brand customer asks about ski boot sizing → agent checks fit guide → answers in 3 seconds',
                  'SaaS prospect signs up for trial at 9pm → agent qualifies intent → books a demo for next morning',
                  'Real estate lead asks about a Wash Park listing on a Saturday → agent answers + schedules a tour',
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
          headline="What Is an AI Agent — and Why Denver Businesses Need One Now"
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
                  'Scale with seasonal peaks',
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
                Most Denver businesses think they already have a chatbot — because they have a live chat widget that pings someone on the team. That&apos;s not an AI agent. That&apos;s a notification. An AI agent built on GPT-4o or Claude actually understands the customer&apos;s question, knows your products and policies, and gives a complete, accurate answer in under 5 seconds — without your team being in the loop.
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
                  Denver&apos;s customers don&apos;t wait. They go with the business that answers first — whether it&apos;s noon or midnight.
                </p>
              </div>
              <p>
                Denver is growing fast — new businesses and residents arriving constantly, outdoor season bringing demand spikes, and competitors who already have AI agents responding before you do. An AI agent doesn&apos;t take days off for ski weekends, doesn&apos;t fall behind during peak seasons, and handles the top 65% of your inbound volume automatically. Your team handles the work that actually needs a human.
              </p>

              <div className="grid grid-cols-2 gap-2" aria-hidden>
                {[
                  'Outdoor & gear brands',
                  'Tech & SaaS startups',
                  'Real estate teams',
                  'Cannabis businesses',
                  'Healthcare & wellness',
                  'Hospitality & tourism',
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
                    desc: 'Website widget, WhatsApp, SMS, or Messenger — any channel your Denver customers reach out on.',
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
          headline="Your customers don't wait for business hours. Your competitors with AI agents don't either."
          lead="Denver's market is growing, seasonal, and increasingly competitive. The businesses pulling ahead are the ones that respond first — automatically, at any hour, regardless of what season it is."
          pillars={[
            {
              icon: '⏱',
              title: 'Seasonal spikes shouldn\'t require emergency hiring',
              body: 'Ski season, summer adventure season, SXSW-equivalent events — Denver businesses face predictable demand spikes that overwhelm lean support teams. An AI agent scales automatically. It handles 5 conversations or 500 with the same response time. You don\'t hire and train seasonal staff just to answer the same questions you answered last year.',
            },
            {
              icon: '📉',
              title: 'Denver\'s tight labor market makes repetitive work expensive',
              body: 'Colorado\'s labor market is competitive. Wages are up, turnover is high, and good customer-facing employees are hard to keep. An AI agent handles 60–70% of your inbound volume automatically — the repetitive questions that don\'t require human judgment — so your team works on the customer interactions that actually need them.',
            },
            {
              icon: '💸',
              title: 'Local Denver agency rates reflect local Denver costs',
              body: 'A Denver AI agency building at LoDo rates will quote $15,000–$40,000+ for the same chatbot FactoryJet delivers starting at $3,000. The difference is our engineering team is specialized — serving US businesses for 25 years, at dramatically lower overhead, without compromising the quality of the AI architecture or the conversation design.',
            },
          ]}
        />

        {/* ── 5. DENVER INDUSTRIES ─────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="INDUSTRIES WE SERVE IN DENVER"
          headline="AI Agents Built for Denver's Most Active Sectors"
          lead="Denver's economy is diverse and seasonally driven. We build AI agents with industry-specific knowledge, Denver market context, and the integrations each vertical actually uses."
          sectors={DENVER_INDUSTRIES}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Strategy Call to Live AI Agent in 2–5 Weeks"
          lead="A structured 5-stage process that keeps you informed at every step and delivers a working AI agent — not a slide deck about one."
          stages={DENVER_JOURNEY_STAGES}
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
          headline="FactoryJet vs. Denver Agency vs. DIY Tool vs. Freelancer"
          lead="The honest breakdown: what you actually get, at what price, and how fast."
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
        />

        {/* ── 10. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="PRICING"
            headline="Transparent, Fixed-Price AI Agent Development for Denver Businesses"
            lead="No hourly billing. No scope creep surprises. Every tier includes a fixed scope, a fixed price, and a delivery timeline we stand behind."
            tiers={PRICING_TIERS}
            footnote="All prices in USD. Custom enterprise scopes quoted after a discovery call. Monthly retainer options available. You own all code and conversation data."
          />
        </div>

        {/* ── 11. WHY FACTORYJET (DARK) ────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="We're not a Denver agency with a RiNo loft office. That's the whole point."
          lead="We're a 25-year-old software company that has built 500+ production systems for real businesses. The AI agents we build don't live in a demo — they run in production, handling real customer conversations every day."
          pillars={[
            {
              icon: '⚡',
              title: 'Speed without cutting corners',
              body: 'A Denver AI agency has account managers, coordinators, and a sales team to feed. We don\'t. When you brief us, an engineer reads it — not an account manager. That\'s why our timelines are weeks, not quarters. And why our price is significantly lower.',
            },
            {
              icon: '💡',
              title: 'SMB depth, not startup theory',
              body: 'We\'ve built for outdoor brands, real estate teams, healthcare practices, restaurants, and SaaS companies since 1999. We know where complexity actually lives inside a 15-person business — the edge cases, the messy data, the workflows that don\'t match the textbook. We build for that reality.',
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
          headline="Everything Denver Businesses Ask Before Building an AI Agent"
          lead="No jargon. No runaround. The questions we get on every Denver strategy call — answered straight."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── 13. FINAL CTA ────────────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="READY TO START"
            headline="Book a 30-Minute AI Agent Strategy Call"
            sub="We'll review your current support or lead flow, identify where an AI agent would make the biggest difference for your Denver business, and give you a fixed-price estimate — before you commit to anything."
            primaryCta={{ label: 'Get a Quote', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See All AI Services', href: '/us/services' }}
            objectionHandler="Most Denver clients see full ROI within 90 days. Free call, fixed price, no hidden fees."
          />
        </div>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
