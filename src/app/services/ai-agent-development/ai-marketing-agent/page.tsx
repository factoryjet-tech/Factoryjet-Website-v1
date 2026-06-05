import type { Metadata } from 'next';
import Script from 'next/script';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import CityContextSection from '@/components/v2/CityContextSection';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import PricingTiers from '@/components/v2/PricingTiers';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'AI Marketing Agent India | WhatsApp Automation | FactoryJet',
  description:
    'AI marketing agents for Indian businesses — automate campaigns, WhatsApp broadcasts & Google/Meta Ads. Festival-aware AI in Hindi & English. Fixed price.',
  keywords: [
    'AI marketing agent India',
    'WhatsApp broadcast automation India',
    'AI campaign automation India',
    'festival marketing automation Diwali',
    'AI content generation India',
    'WhatsApp Business API marketing',
    'automated social media marketing India',
    'AI marketing automation Mumbai',
    'Zoho MarketingHub AI integration',
    'vernacular marketing AI India',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Marketing Agent India | WhatsApp Automation | FactoryJet',
    description:
      'AI that plans, writes, and sends your Diwali campaign — while you run your business. WhatsApp broadcasts, social content, and ad optimisation built for India.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-marketing-agent',
    images: [
      {
        url: 'https://factoryjet.com/images/services/ai-agents.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet AI Agent Development Services',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Marketing Agent India | FactoryJet',
    description: 'WhatsApp broadcast automation, Diwali campaigns, and AI content in Hindi and English. Fixed price.',
    images: ['https://factoryjet.com/images/services/ai-agents.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-agent-development/ai-marketing-agent',
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
   JSON-LD Schemas
───────────────────────────────────────────────────────────────────────────── */

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an AI marketing agent and how does it work for Indian businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI marketing agent plans, creates, schedules, and optimises your marketing campaigns autonomously. It reads your product catalogue, monitors your festival calendar, generates campaign briefs, writes copy in your brand voice, and sends campaigns via WhatsApp, email, or social — all without daily human intervention. Unlike generic SaaS tools, a FactoryJet AI marketing agent is built specifically for your business, audience, and Indian market context.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an AI marketing agent cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet AI marketing agents start from ₹2,50,000 for a Content AI Starter (social and email campaign generation). The Full Marketing AI Platform with WhatsApp broadcast automation and CRM segmentation starts from ₹5,00,000. Enterprise packages with multi-language autonomous campaign execution start from ₹10,00,000. All are fixed-price — no hourly billing surprises.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the AI automate Diwali and other festival marketing campaigns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — festival campaign automation is one of the core capabilities. The AI is pre-loaded with the Indian festival calendar (Diwali, Navratri, Ganesh Chaturthi, Holi, Eid, IPL, and 15+ more events). It auto-triggers campaign briefs 10–14 days before each relevant event, generates themed copy and visuals, segments your audience by past behaviour, and runs A/B variants before the peak day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the AI write marketing content in Hindi and regional languages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The AI generates content in Hindi, Hinglish, Marathi, Tamil, Telugu, Gujarati, and Kannada alongside English. This is particularly effective for WhatsApp broadcasts targeting Tier 2 and Tier 3 audiences, where vernacular copy dramatically outperforms English-only messaging. Language selection can be automated by audience segment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to deploy an AI marketing agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard AI marketing agent covering WhatsApp, email, and social scheduling takes 4–6 weeks from kickoff to first live campaign. Week 1–2 covers strategy and integration setup. Week 3–4 covers campaign template build and brand voice training. Week 5–6 covers test campaigns with a live audience segment before full rollout.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Indian marketing tools does the AI integrate with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build native integrations with Zoho MarketingHub, CleverTap, WebEngage, MoEngage, and Netcore Cloud — the most widely used marketing automation stacks in India. We also connect to WhatsApp Business API via Interakt, Wati, or AiSensy, and to Google Ads and Meta Ads APIs for budget optimisation. International platforms (HubSpot, Klaviyo, ActiveCampaign) are also supported.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Marketing Agent Development India',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
  },
  description:
    'Custom AI marketing agents for Indian businesses — automate WhatsApp broadcasts, festival campaigns, social content, and Google/Meta Ads optimisation with vernacular language support.',
  areaServed: 'IN',
  serviceType: 'AI Marketing Automation',
  offers: [
    {
      '@type': 'Offer',
      name: 'Content AI Starter',
      price: '250000',
      priceCurrency: 'INR',
      description: 'AI social content calendar, email copy generation, brand voice training, festival campaign briefs.',
    },
    {
      '@type': 'Offer',
      name: 'Full Marketing AI Platform',
      price: '500000',
      priceCurrency: 'INR',
      description: 'WhatsApp broadcast automation, CRM segmentation, ad optimisation signals, Hindi/vernacular content generation, campaign A/B testing.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise Marketing AI',
      price: '1000000',
      priceCurrency: 'INR',
      description: 'Multi-brand, multi-language autonomous campaign execution with predictive timing and real-time ad budget reallocation.',
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-marketing-agent#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ai-agent-development/ai-marketing-agent',
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page Data
───────────────────────────────────────────────────────────────────────────── */

const MARKETING_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We audit your current marketing stack, customer data quality, WhatsApp opt-in status, and campaign history. We map your festival calendar and identify the three highest-ROI automation opportunities to tackle first.',
  },
  {
    number: '02',
    title: 'Strategy & Content Architecture',
    description:
      'We design your campaign taxonomy — channel mix, audience segments, content pillars, approval workflow, and festival trigger logic. We document your brand voice so the AI writes copy that sounds like you, not like a robot.',
  },
  {
    number: '03',
    title: 'Build & Integrate',
    description:
      'We build the AI agent, connect it to your CRM, WhatsApp Business API, email platform, and ad accounts. We set up the campaign calendar engine with your festival dates and product launch windows pre-loaded.',
  },
  {
    number: '04',
    title: 'Train & Test',
    description:
      'The AI runs its first campaigns to a controlled audience segment — typically 500–2,000 contacts. We measure open rates, click-through rates, and revenue attribution. We refine the brand-voice model and segment logic before full rollout.',
  },
  {
    number: '05',
    title: 'Launch & Optimise',
    description:
      'Full deployment to your entire audience. The AI begins its autonomous learning loop — every campaign result tightens the model. Monthly performance reviews with campaign attribution data tied back to revenue.',
  },
];

const MARKETING_STATS = [
  {
    value: '40%',
    label: 'of annual D2C revenue is driven by Indian festival season campaigns',
    microcopy: 'NASSCOM India Commerce Report',
    categoryLabel: 'FESTIVAL REVENUE',
  },
  {
    value: '65–80%',
    label: 'WhatsApp broadcast open rates vs. 18–22% for email in India',
    microcopy: 'Meta Business India 2024',
    categoryLabel: 'WHATSAPP OPEN RATE',
  },
  {
    value: '3×',
    label: 'faster content production with AI vs. a manual marketing team',
    microcopy: 'McKinsey AI Productivity Index',
    categoryLabel: 'CONTENT SPEED',
  },
];

const MARKETING_MARKET_STATS = [
  {
    value: '500M+',
    label: "India is the world's largest WhatsApp market — your customers are already there",
    sourceUrl: 'https://meta.com/business/whatsapp-india-report-2024',
    sourceLabel: 'Meta Business India 2024',
  },
  {
    value: '₹12,400 Cr+',
    label: 'India marketing automation market projected by 2028, growing at 32% CAGR',
    sourceUrl: 'https://nasscom.in/knowledge-center/publications',
    sourceLabel: 'NASSCOM AI Report 2024',
  },
  {
    value: '15+',
    label: 'major festival windows annually — each one a revenue opportunity or a missed one',
    sourceUrl: 'https://nasscom.in/knowledge-center/publications',
    sourceLabel: 'FactoryJet India Campaign Data',
  },
];

const MARKETING_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Marketing Agency' },
  { label: 'Freelancer' },
  { label: 'SaaS Tool' },
] as const;

const MARKETING_COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: [
      '₹2,50,000 one-time',
      '₹30,000–₹1,00,000/month retainer',
      '₹15,000–₹50,000/month (inconsistent)',
      '₹8,000–₹25,000/month subscription',
    ],
  },
  {
    feature: 'Festival campaign automation (Diwali, Navratri, IPL)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="sa" kind="partial" />,
    ],
  },
  {
    feature: 'WhatsApp broadcast via official Business API',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="sa" kind="no" />,
    ],
  },
  {
    feature: 'Hindi / vernacular content generation',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="sa" kind="no" />,
    ],
  },
  {
    feature: 'AI writes copy in your brand voice',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="no" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="sa" kind="partial" />,
    ],
  },
  {
    feature: 'CRM segmentation (RFM, city, language)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="sa" kind="partial" />,
    ],
  },
  {
    feature: 'Google Ads + Meta Ads budget optimisation',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="yes" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="sa" kind="no" />,
    ],
  },
  {
    feature: 'You own the code & campaign IP',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="sa" kind="no" />,
    ],
  },
  {
    feature: 'Integration with Zoho / CleverTap / WebEngage',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="sa" kind="partial" />,
    ],
  },
  {
    feature: 'Campaign ROI tied to revenue (not just vanity metrics)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="sa" kind="no" />,
    ],
  },
];

const MARKETING_INDUSTRIES = [
  {
    name: 'D2C E-Commerce',
    description:
      'Festival campaigns, cart-abandonment WhatsApp sequences, post-purchase upsell flows, and influencer brief generation — all automated around your product catalogue and Shopify or Commerceflo store data.',
    example: 'D2C brands using AI marketing agents see 2–3× higher festival season revenue vs. manual campaigns.',
  },
  {
    name: 'Real Estate',
    description:
      'Project launch campaigns to segmented investor and homebuyer lists, site-visit reminder sequences, and AI-generated property description content for listings, portals, and WhatsApp.',
    example: 'Builders run Navratri and Diwali launch campaigns 14 days earlier with AI brief generation.',
  },
  {
    name: 'EdTech & Coaching',
    description:
      'Enrolment season campaigns, batch-fill WhatsApp broadcasts, fee-reminder sequences, and AI-written success story content for social proof across every channel.',
    example: 'EdTech platforms report 3× faster enrolment cycles during admission season.',
  },
  {
    name: 'Restaurants & Food',
    description:
      'Festival menu launches, delivery app promotion campaigns, loyalty programme reactivation, and AI-generated Instagram content that drives table bookings and Swiggy/Zomato orders.',
    example: 'Restaurants recover 20–30% of lapsed customers with AI-driven re-engagement broadcasts.',
  },
  {
    name: 'Fashion & Apparel',
    description:
      'Season-drop campaigns, size-back-in-stock WhatsApp alerts, stylist tip content, and AI-powered Instagram Reels scripts synced to trending audio and festival themes.',
    example: 'Fashion brands see 40%+ higher engagement on AI-timed festival drop announcements.',
  },
  {
    name: 'Local Services',
    description:
      'Review generation campaigns, seasonal service reminder broadcasts, referral programme automation, and Google Business Profile post generation — turning happy customers into visible social proof.',
    example: 'Local service businesses double Google review velocity within 60 days of AI agent deployment.',
  },
];

const MARKETING_PRICING_TIERS = [
  {
    name: 'Content AI Starter',
    priceRange: 'From ₹2,50,000',
    description:
      'AI-powered content generation for social and email — always-on marketing without the agency retainer.',
    features: [
      'AI social media content calendar (30 posts/month)',
      'Email campaign copy generation',
      'Brand voice training',
      'Festival campaign briefs (pre-loaded Indian calendar)',
      'Instagram + Facebook post scheduling',
      'Monthly performance report',
      '3 months post-launch support',
    ],
    cta: { label: 'Book a Free Strategy Call', modal: true as const, region: 'in' as const },
  },
  {
    name: 'Full Marketing AI Platform',
    priceRange: 'From ₹5,00,000',
    description:
      'WhatsApp broadcasts + email + social + ad optimisation — your full marketing stack on autopilot.',
    features: [
      'Everything in Content AI Starter',
      'WhatsApp Business API broadcast automation',
      'CRM audience segmentation (RFM, city, language)',
      'Festival campaign full automation (Diwali, Navratri, Holi + 12 more)',
      'Google Ads + Meta Ads optimisation signals',
      'Hindi / vernacular content generation',
      'Human approval workflow',
      'Campaign A/B testing engine',
      'Revenue attribution dashboard',
      '6 months post-launch support',
    ],
    cta: { label: 'Get a Custom Quote', modal: true as const, region: 'in' as const },
    popular: true,
  },
  {
    name: 'Enterprise Marketing AI',
    priceRange: 'From ₹10,00,000',
    description:
      'Multi-brand, multi-language autonomous campaign execution for high-volume Indian businesses.',
    features: [
      'Everything in Full Marketing AI Platform',
      'Multi-brand or multi-region management',
      'Multi-language AI (up to 5 regional languages)',
      'Autonomous campaign execution (no manual approval)',
      'Real-time ad budget reallocation',
      'WhatsApp chatbot + broadcast unified flow',
      'Predictive campaign timing (ML-based)',
      'Custom BI dashboard with ROAS tracking',
      'Dedicated account manager',
      '12 months support + quarterly model updates',
    ],
    cta: { label: 'Schedule an Enterprise Call', modal: true as const, region: 'in' as const },
  },
] as const;

const MARKETING_FAQ_CATEGORIES = [
  { key: 'basics', label: 'The Basics' },
  { key: 'campaigns', label: 'Campaigns & Channels' },
  { key: 'india', label: 'India-Specific' },
  { key: 'process', label: 'Process & Timeline' },
  { key: 'pricing', label: 'Pricing & ROI' },
];

const MARKETING_FAQ_ITEMS = [

  /* ── The Basics ── */
  {
    category: 'basics',
    question: 'What exactly is an AI marketing agent?',
    answer:
      "An AI marketing agent is custom software that plans, creates, schedules, and optimises your marketing campaigns autonomously. Unlike SaaS tools that require manual input, a FactoryJet AI marketing agent reads your product catalogue, monitors competitor activity, generates campaign briefs, writes copy in your brand voice, and sends campaigns via WhatsApp, email, or social — all without daily human intervention.",
  },
  {
    category: 'basics',
    question: 'How is this different from tools like Mailchimp or Zoho Campaigns?',
    answer:
      "Tools like Mailchimp or Zoho Campaigns are delivery platforms — you still write the strategy, create the content, and set the schedule manually. An AI marketing agent generates the strategy, writes the content, and learns which messages convert best over time. It acts like a junior marketing manager working 24/7 across every channel simultaneously.",
  },
  {
    category: 'basics',
    question: 'Which channels does the AI marketing agent support?',
    answer:
      "The agent supports WhatsApp Business API (broadcasts and conversational follow-ups), email (transactional and campaign), Instagram and Facebook organic posts, Google Ads and Meta Ads (auto-bidding signals), and SMS. We integrate whichever mix makes sense for your business and audience. WhatsApp and email are the most common starting pair for Indian businesses.",
  },
  {
    category: 'basics',
    question: 'Can the AI write content in Hindi or regional languages?',
    answer:
      "Yes. The AI generates content in Hindi, Hinglish, Marathi, Tamil, Telugu, Gujarati, and Kannada alongside English — using LLM models fine-tuned for Indic language nuance. This is particularly powerful for WhatsApp broadcasts targeting Tier 2 and Tier 3 audiences where vernacular copy dramatically outperforms English-only messaging.",
  },

  /* ── Campaigns & Channels ── */
  {
    category: 'campaigns',
    question: 'How does the AI handle Indian festival campaigns like Diwali or Navratri?',
    answer:
      "The agent is pre-loaded with the Indian festival calendar (Diwali, Navratri, Ganesh Chaturthi, Holi, Eid, Christmas, IPL season, and 15+ more events). It auto-triggers campaign briefs 10–14 days before each relevant event, generates themed copy and visuals, segments your audience by past purchase behaviour, and runs A/B variants to find the highest-converting message before the peak day.",
  },
  {
    category: 'campaigns',
    question: 'Can the AI optimise Google Ads and Meta Ads budgets automatically?',
    answer:
      "Yes — the agent integrates with Google Ads and Meta Ads APIs to monitor cost-per-click, conversion rate, and ROAS in real time. It surfaces budget reallocation suggestions (e.g., shift ₹5,000/day from underperforming ad sets to top performers during Diwali week) and can execute approved changes autonomously. You set the guardrails — daily budget caps, max CPA — and the AI works within them.",
  },
  {
    category: 'campaigns',
    question: 'How does WhatsApp broadcast automation work without getting flagged as spam?',
    answer:
      "FactoryJet builds your broadcasts on the official WhatsApp Business API (not unofficial bulk-sender tools), which means messages are tied to your verified business profile. The AI manages opt-in lists, respects 24-hour conversation windows, throttles send volume to maintain quality scores, and personalises each message by name and purchase history — all practices that keep your template approval rates above 95%.",
  },
  {
    category: 'campaigns',
    question: 'Can the AI generate Instagram Reels scripts and social posts automatically?',
    answer:
      "Yes. The agent pulls from your product catalogue, blog content, and campaign calendar to generate Instagram caption drafts, Facebook post copy, and short-form video scripts (Reels / YouTube Shorts). It schedules posts at optimal engagement windows based on your audience analytics and flags top-performing formats for repurposing. Final human review is built into the approval workflow before any post goes live.",
  },

  /* ── India-Specific ── */
  {
    category: 'india',
    question: 'Does the AI integrate with Zoho, CleverTap, and other Indian marketing tools?',
    answer:
      "Yes. We build native integrations with Zoho MarketingHub, CleverTap, WebEngage, MoEngage, and Netcore Cloud — the most widely used marketing automation stacks in India. We also connect to WhatsApp via Interakt, Wati, or AiSensy, and to international platforms (HubSpot, ActiveCampaign, Klaviyo) if you are already using them. The AI acts as a layer on top of your existing stack, not a replacement.",
  },
  {
    category: 'india',
    question: 'Can the AI segment Indian audiences by city, language, or purchase tier?',
    answer:
      "Yes — audience segmentation is a core strength. The AI connects to your CRM or e-commerce platform (Shopify, WooCommerce, Commerceflo, Unicommerce) and auto-segments contacts by city, language preference, RFM score (Recency, Frequency, Monetary), product category interest, and festival purchase history. Campaign briefs are then generated per-segment, not one-size-fits-all.",
  },
  {
    category: 'india',
    question: 'How does the AI handle TRAI and WhatsApp compliance for promotional messages?',
    answer:
      "For regulated sectors (financial services, insurance, healthcare), the AI maintains a compliance ruleset that flags copy violating TRAI/SEBI/IRDA guidelines before sending. For WhatsApp, it operates only on the official Business API with opt-in compliance and DND filtering built in. Every campaign maintains a full audit trail.",
  },
  {
    category: 'india',
    question: 'What about mobile-first creative for Indian audiences on WhatsApp and Instagram?',
    answer:
      "India is a mobile-first market — over 95% of WhatsApp and Instagram usage happens on phones. All AI-generated creatives are optimised for portrait format (9:16 for Stories and Reels, 4:5 for feed posts). WhatsApp message templates are kept under 160 characters for full preview on older Android devices. The agent prefers native WhatsApp catalogue links for product showcases over heavy PDF attachments.",
  },

  /* ── Process & Timeline ── */
  {
    category: 'process',
    question: 'How long does it take to build and deploy an AI marketing agent?',
    answer:
      "A standard AI marketing agent covering WhatsApp + email + social scheduling takes 4–6 weeks from kickoff to first live campaign. Week 1–2 is strategy and integration setup. Week 3–4 is campaign template build and brand voice training. Week 5–6 is test campaigns with a live audience segment and optimisation before full rollout.",
  },
  {
    category: 'process',
    question: 'What does FactoryJet need from us to get started?',
    answer:
      "We need: your WhatsApp Business API account (we can set this up for you), your CRM or customer list (CSV export is fine to start), product catalogue or service list, brand guidelines (logo, colours, tone-of-voice doc if you have one), and a 30-minute onboarding call. We handle all technical integration from there.",
  },
  {
    category: 'process',
    question: 'Do we need to approve every campaign before it sends?',
    answer:
      "You choose your approval model. Most clients start with a 'review and approve' workflow where the AI generates the full campaign brief and copy 72 hours before send — you approve with one click. Once you trust the output quality (typically after 2–3 months), you can switch to autonomous send with post-send reporting only. We recommend review mode for festival campaigns regardless.",
  },
  {
    category: 'process',
    question: 'How does the AI learn and improve over time?',
    answer:
      "Every campaign feeds back into the AI's learning loop — open rates, click-through rates, WhatsApp reply rates, conversion events, and unsubscribes are all ingested. The AI updates its model of what subject lines, CTAs, send times, and copy styles work best for your audience. Most clients see measurable ROI improvement within 60–90 days of go-live.",
  },

  /* ── Pricing & ROI ── */
  {
    category: 'pricing',
    question: 'What does an AI marketing agent cost to build?',
    answer:
      "Our AI marketing agent packages start at ₹2,50,000 for a Content AI Starter (AI-generated social and email content, monthly campaign calendar). The Full Marketing AI Platform is ₹5,00,000 and adds WhatsApp broadcast automation, ad optimisation signals, and CRM segmentation. Enterprise packages (₹10,00,000+) include multi-brand, multi-language, and full autonomous campaign execution. All are one-time build fees.",
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the build?',
    answer:
      "The build fee covers the custom AI agent. After delivery, you pay directly for underlying services: WhatsApp Business API message costs (charged per message by Meta), LLM API usage (typically ₹8,000–₹25,000/month depending on volume), and any third-party integration licences. FactoryJet offers an optional monthly support retainer (₹15,000–₹40,000/month) for ongoing optimisation, new campaign templates, and model updates.",
  },
  {
    category: 'pricing',
    question: 'Can we start with a small scope and expand the agent later?',
    answer:
      "Yes — all our AI marketing agents are built modularly. Start with the Content AI Starter focused on social and email, then add the WhatsApp broadcast module, then the ad optimisation layer, and finally full autonomous campaign execution. Incremental upgrades are priced at the delta, not a full rebuild. Most clients expand within 6 months once they see ROI from the initial scope.",
  },
  {
    category: 'pricing',
    question: 'Do you offer a pilot before the full build?',
    answer:
      "Yes. For clients wanting validation before committing to the full build, we offer a 4-week pilot: one live WhatsApp campaign and one email campaign, fully AI-generated and sent to a real audience segment. The pilot fee is ₹75,000 and is credited against the full project cost if you proceed. Most clients find one successful live campaign more convincing than any proposal document.",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function AIMarketingAgentINPage() {
  return (
    <>
      <Script
        id="ai-marketing-agent-in-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="ai-marketing-agent-in-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader
        locale="in"
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'AI Agents', href: '/services/ai-agent-development' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', modal: true, region: 'in' },
        ]}
        cta={{ label: 'Book a Free Call', modal: true, region: 'in' }}
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
          { name: 'AI Marketing Agent', url: 'https://factoryjet.com/services/ai-agent-development/ai-marketing-agent' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="AI MARKETING AGENT · INDIA"
          headline="AI That Plans, Writes & Sends Your Diwali Campaign — While You Run Your Business"
          lead="WhatsApp broadcasts, festival campaigns, social content, and ad optimisation — automated with India-first AI that writes in Hindi, understands your festival calendar, and learns which messages drive revenue. Fixed price. No agency retainer."
          primaryCta={{ label: 'Book a Free Marketing AI Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            '500+ businesses served',
            'WhatsApp + Zoho + Meta Ads ready',
            'Hindi & vernacular content',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#F05A28]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                AI CAMPAIGN ENGINE IN ACTION
              </p>
              <p className="mt-4 font-fj-display text-[1.875rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                42 campaigns sent this month. 68% WhatsApp open rate. Zero manual effort.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Diwali brief generated → 847 contacts segmented by past purchase → Hindi + English variants ready',
                  'Meta Ads: ₹3,200/day budget reallocated from low-ROAS ad set to top performer automatically',
                  'Instagram: 12 posts queued for next 30 days — AI-written captions, festival-themed creative',
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
                  Campaigns awaiting your one-click approval — then the AI sends, measures, and learns.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ── 3. TRUST STATS ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ businesses. 25 years of building. One goal: your results."
        />

        {/* ── 4. WHAT IS AN AI MARKETING AGENT ─────────────────────────────── */}
        <ServiceExplanation
          eyebrow="AI MARKETING AGENT EXPLAINED"
          headline="Why an AI Marketing Agent Is Nothing Like the Marketing Tools You Have Tried"
          lead="SaaS marketing tools are delivery platforms — you still create the strategy, write the content, and set the schedule manually. An AI marketing agent generates the strategy, writes the copy, and learns what converts — running your campaigns 24/7 without a brief from you."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'WhatsApp broadcasts',
                  'Festival campaigns',
                  'Email automation',
                  'Social content',
                  'Google Ads',
                  'Meta Ads',
                  'Hindi copy',
                  'A/B testing',
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
                The marketing tools most Indian businesses use — Mailchimp, Zoho Campaigns, Meta Ads Manager — require your team to log in every week, write the content, pick the audience, and hit send. An AI marketing agent does all of this autonomously. It reads your product catalogue, monitors your festival calendar, generates a campaign brief with copy and audience segmentation, and sends it — in Hindi and English — while you are running your business.
              </p>
              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '15+', label: 'festivals automated' },
                  { value: '65–80%', label: 'WhatsApp open rate' },
                  { value: '3×', label: 'faster content' },
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
                  More like a marketing manager than a scheduling tool.
                </p>
              </div>
              <p>
                FactoryJet AI marketing agents are built on large language models — Claude, GPT-4o, or Gemini — with a campaign intelligence layer trained on your specific brand, audience segments, and festival calendar. The agent connects directly to your CRM, WhatsApp Business API, Meta Ads, and e-commerce platform so every campaign is informed by real customer data and every result feeds back into the next one.
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
                  AI vs. Manual Marketing Team
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    scenario: 'Diwali campaign brief',
                    manual: '2 weeks of planning, briefing, and back-and-forth with creative',
                    ai: 'AI generates full brief in 24 hours — copy, segments, A/B variants ready',
                  },
                  {
                    scenario: 'WhatsApp broadcast in Hindi',
                    manual: 'Hire a Hindi copywriter, review, translate — 3–5 days',
                    ai: 'AI writes Hindi and Hinglish variants instantly from product data',
                  },
                  {
                    scenario: 'Meta Ads budget optimisation',
                    manual: 'Check ads manager daily, reallocate manually — often too late',
                    ai: 'AI monitors ROAS in real time, suggests reallocation during festival peak',
                  },
                  {
                    scenario: 'Monthly social content',
                    manual: '20–30 hours per month briefing and reviewing social posts',
                    ai: 'AI generates 30 posts, schedules at peak times — reviewed in 1 hour',
                  },
                  {
                    scenario: 'Performance attribution',
                    manual: 'Manual spreadsheet tracking — weeks after the campaign',
                    ai: 'Revenue attribution dashboard updated in real time, per campaign',
                  },
                ].map((row) => (
                  <div key={row.scenario} className="px-7 py-4">
                    <p className="font-fj-mono font-semibold text-fj-ink" style={{ fontSize: '0.75rem', letterSpacing: '0.04em' }}>{row.scenario}</p>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-fj-neutral-50 px-3 py-2">
                        <p className="font-fj-mono uppercase text-fj-neutral-400" style={{ fontSize: '0.625rem', letterSpacing: '0.08em' }}>Manual</p>
                        <p className="mt-1 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem' }}>{row.manual}</p>
                      </div>
                      <div className="rounded-lg border border-[rgba(240,90,40,0.2)] bg-[rgba(240,90,40,0.05)] px-3 py-2">
                        <p className="font-fj-mono uppercase text-[#F05A28]" style={{ fontSize: '0.625rem', letterSpacing: '0.08em' }}>AI Agent</p>
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
          headline="Your marketing team cannot outscale festival season — AI can"
          lead="Indian businesses have 15+ major revenue windows every year. Each one requires a new strategy, new content, new segmentation, and a new send. Most teams are scrambling two weeks before Diwali. An AI marketing agent starts preparing in October."
          pillars={[
            {
              icon: '🎆',
              title: 'Festival season is won or lost in the preparation window',
              body: "40% of annual D2C revenue happens in the 45 days around Diwali. Brands that brief campaigns 14+ days out see 2–3× higher ROAS than those scrambling the week before. An AI marketing agent auto-generates festival briefs on a fixed calendar — your Diwali campaign is ready by October 10th, every year, without a single brief from you.",
            },
            {
              icon: '📱',
              title: 'WhatsApp is your highest-ROI channel — but most teams use it manually',
              body: "India has 500M+ WhatsApp users with 65–80% open rates on business broadcasts — versus 18% for email. Yet most Indian businesses send WhatsApp campaigns manually, with no segmentation, no personalisation, and no A/B testing. An AI marketing agent sends segmented, personalised, Hindi-and-English broadcasts on the official Business API — at scale, with compliance built in.",
            },
            {
              icon: '📉',
              title: 'Ad budgets leak while your team has other priorities',
              body: "Most Indian SMBs leave 20–30% of their Meta and Google Ads budget performing below average — not because of bad strategy, but because nobody has time to optimise daily. An AI marketing agent monitors ROAS in real time and flags reallocation opportunities during peak windows, so your Diwali budget goes to the top-performing ad set, not the one you set up in August.",
            },
          ]}
        />

        {/* ── 6. BUILD JOURNEY (LIGHT) ─────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="HOW WE BUILD"
          headline="From your first festival campaign brief to a fully autonomous marketing engine"
          stages={MARKETING_JOURNEY_STAGES}
          closingNote="Every stage ends with a working campaign. You see the AI in action before it talks to your entire customer base."
        />

        {/* ── 7. TECH STACK (LIGHT, REVERSED) ──────────────────────────────── */}
        <ServiceExplanation
          eyebrow="TECHNOLOGY"
          headline="The technology stack behind your AI marketing agent"
          lead="We do not have a preferred vendor — we pick the right model, channel platform, and analytics layer for your business, audience size, and marketing maturity. Every architectural decision is documented and handed over."
          reverseOnDesktop
          body={
            <>
              <p>
                Every AI marketing agent we build has five layers: an LLM for copy generation and campaign brief writing, a campaign intelligence layer that reads your festival calendar and CRM segments, channel connectors for WhatsApp, Meta Ads, Google Ads, and email, an approval workflow engine, and a revenue attribution dashboard. We pick best-in-class components for each layer and explain the reasoning in plain language.
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
                      { layer: 'LLM / AI Model', tools: 'Claude, GPT-4o, Gemini' },
                      { layer: 'Campaign Orchestration', tools: 'LangChain, LangGraph, n8n' },
                      { layer: 'WhatsApp Delivery', tools: 'Interakt, Wati, AiSensy' },
                      { layer: 'Email', tools: 'Zoho Campaigns, Klaviyo, Mailchimp' },
                      { layer: 'Ads Optimisation', tools: 'Google Ads API, Meta Marketing API' },
                      { layer: 'CRM / Segmentation', tools: 'Zoho CRM, CleverTap, WebEngage, MoEngage' },
                      { layer: 'E-Commerce Data', tools: 'Shopify, WooCommerce, Commerceflo' },
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
                For multi-language requirements, we configure language-specific prompt chains so your Gujarati audience in Ahmedabad gets festival copy that reads differently from your Hindi-speaking audience in Delhi — same product, same offer, different cultural resonance.
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
                  Five Marketing AI Types We Build
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { name: 'Festival Campaign AI', desc: 'Full Diwali, Navratri, Holi, and IPL campaign automation — brief generation, copy, WhatsApp send, and attribution in one flow.' },
                  { name: 'WhatsApp Broadcast AI', desc: 'Official Business API broadcasts with Hindi/vernacular copy, audience segmentation, A/B testing, and TRAI-compliant opt-in management.' },
                  { name: 'Social Content AI', desc: 'AI-generated Instagram captions, Facebook posts, and Reels scripts — scheduled at peak engagement windows, 30 posts/month minimum.' },
                  { name: 'Ad Budget Optimisation AI', desc: 'Real-time Google Ads and Meta Ads monitoring with budget reallocation signals tied to your festival calendar and ROAS targets.' },
                  { name: 'Full-Stack Marketing AI', desc: 'All of the above unified — one AI engine managing WhatsApp, email, social, and ads with a shared audience intelligence layer.' },
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
              {MARKETING_STATS.map((stat) => (
                <div key={stat.value}>
                  {stat.categoryLabel && (
                    <div
                      className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-fj-mono font-bold uppercase"
                      style={{
                        fontSize: '9px',
                        letterSpacing: '0.13em',
                        color: '#F05A28',
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

        {/* ── 9. INDIA MARKET CONTEXT ───────────────────────────────────────── */}
        <CityContextSection
          eyebrow="INDIA MARKETING AI MARKET"
          headline="500M WhatsApp users. 15 festival windows. One AI agent that handles all of it."
          leadParagraphs={[
            "Indian marketing is unlike any other market in the world. You have 15+ major festival revenue windows, 22 official languages, a WhatsApp-first consumer behaviour pattern, and Tier 2/3 cities growing faster than metros. Generic Western marketing automation tools were not designed for any of this.",
            "FactoryJet's AI marketing agents are built India-first — with the festival calendar pre-loaded, Indic language models for vernacular copy, WhatsApp Business API compliance baked in, and integrations with the tools Indian businesses actually use (Zoho, CleverTap, WebEngage, Commerceflo, Unicommerce). Every agent we deliver is a competitive moat, not a commodity subscription.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden="true">
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  The brands winning Diwali 2025 already have their AI briefs running.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  'D2C E-Commerce',
                  'Real Estate',
                  'EdTech',
                  'Restaurants & Food',
                  'Fashion & Apparel',
                  'Local Services',
                ].map((ind) => (
                  <span
                    key={ind}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#F05A28]"
                    style={{ fontSize: '10px', letterSpacing: '0.08em' }}
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </>
          }
          stats={MARKETING_MARKET_STATS}
        />

        {/* ── 10. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Marketing Agency vs. Freelancer vs. SaaS Tool"
          lead="Fixed price, full ownership, Indian festival and WhatsApp automation out of the box — the honest comparison."
          pullQuote={{
            stat: '₹2,50,000',
            caption:
              'starting price — AI marketing agent with festival campaign automation, WhatsApp broadcast capability, Hindi content generation, and full code ownership. No monthly retainer to FactoryJet.',
          }}
          columns={MARKETING_COMPARISON_COLUMNS}
          rows={MARKETING_COMPARISON_ROWS}
          footer="Prices reflect typical Indian market rates as of 2025. FactoryJet fixed-price contracts available for all tiers."
        />

        {/* ── 11. INDUSTRIES GRID (DARK) ────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="WHO WE BUILD FOR"
          headline="AI marketing agents for every major Indian industry"
          lead="Every industry has different festival windows, WhatsApp use cases, and content requirements. We build for yours."
          sectors={MARKETING_INDUSTRIES}
        />

        {/* ── 12. PRICING (CREAM) ───────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="PRICING"
            headline="Transparent, Fixed-Price AI Marketing Agent Development"
            lead="No monthly agency retainer. No per-seat SaaS pricing. A custom AI marketing agent built once, delivering campaigns forever."
            tiers={MARKETING_PRICING_TIERS}
            footnote="All prices in INR. LLM API costs (typically ₹8,000–₹25,000/month for Indian SMB volumes) are billed directly by model providers and are not marked up by FactoryJet. WhatsApp BSP subscription fees (Interakt/Wati/AiSensy) are separate. Custom scopes quoted after a free discovery call."
          />
        </div>

        {/* ── 13. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What Indian founders say after deploying our AI marketing agents"
        />

        {/* ── 14. FAQ (LIGHT) ───────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything to Know Before You Start"
          lead="The questions we answer on every Indian AI marketing agent discovery call — answered honestly, without the runaround."
          categories={MARKETING_FAQ_CATEGORIES}
          items={MARKETING_FAQ_ITEMS}
        />

        {/* ── 15. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}

        {/* ── 16. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="GET STARTED"
            headline="Book a Free AI Marketing Strategy Call"
            sub="Tell us your biggest marketing bottleneck — usually festival preparation, WhatsApp broadcast management, or content volume. We will map out exactly how an AI marketing agent fits your channels and give you a fixed-price estimate before writing a single line of code. No pitch, no pressure."
            primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'in' }}
            secondaryCta={{ label: 'WhatsApp Us', href: 'https://wa.me/919876543210' }}
            objectionHandler="Fixed price. Full code ownership. WhatsApp + Zoho + Meta Ads ready. No agency lock-in."
          />
        </div>

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
