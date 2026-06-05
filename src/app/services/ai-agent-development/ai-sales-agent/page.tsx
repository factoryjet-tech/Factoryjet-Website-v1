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
  title: 'AI Sales Agent India | WhatsApp Lead Gen | FactoryJet',
  description:
    'AI sales agents for Indian businesses — WhatsApp lead qualification, follow-ups, demo booking & CRM updates. Integrated with Zoho & LeadSquared. Fixed price.',
  keywords: [
    'AI sales agent India',
    'WhatsApp lead qualification India',
    'AI lead qualification India',
    'sales automation India',
    'AI sales bot India',
    'WhatsApp sales AI India',
    'Zoho CRM AI India',
    'automated lead follow-up India',
    'AI sales agent Mumbai',
    'conversational AI sales India',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Sales Agent India | FactoryJet',
    description:
      'AI sales agents that qualify WhatsApp leads, book demos, and update Zoho CRM — 24/7, in Hindi and English. Fixed price.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent',
    images: [{ url: 'https://factoryjet.com/images/services/ai-agents.webp', width: 1200, height: 630, alt: 'FactoryJet AI Agent Development Services' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Sales Agent India | FactoryJet',
    description: 'WhatsApp lead qualification, automated follow-ups, and demo booking for Indian businesses. Fixed price.',
    images: ['https://factoryjet.com/images/services/ai-agents.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
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
      name: 'What is an AI sales agent and how does it work for Indian businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI sales agent qualifies inbound leads automatically — asking discovery questions on WhatsApp, collecting contact details and requirements, scoring leads based on your criteria, and pushing qualified prospects to your Zoho CRM with a full conversation summary. It responds within 60 seconds, 24/7, in Hindi or English.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an AI sales agent cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet AI sales agents start from ₹3,50,000 for a WhatsApp lead qualification bot with Zoho CRM integration. A full sales AI with multi-source lead capture, follow-up sequences, and demo booking starts from ₹7,00,000. All prices are fixed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can an AI sales agent qualify leads from Facebook and Instagram ads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We integrate Facebook Lead Ads and Instagram Direct so when a lead submits your ad form, the AI starts a WhatsApp conversation within 60 seconds — asks qualification questions, scores the lead, and pushes qualified prospects to your CRM with full context.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the AI sales agent book demos and appointments automatically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. After qualifying a lead, the agent checks your calendar (Google Calendar, Calendly, or Zoho Bookings), proposes available slots, confirms on WhatsApp, sends a calendar invite, and sets a reminder 24 hours before. All confirmed meetings logged to Zoho CRM automatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the AI agent handle leads in Hindi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The AI detects the language the lead writes in and responds in Hindi, Hinglish, Marathi, Tamil, Telugu, Gujarati, or any other language your market uses. Language switching is automatic within the same conversation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens to leads the AI cannot qualify or that drop off?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Leads that do not complete the qualification flow are flagged and logged to your CRM with partial conversation history. The agent sends automated re-engagement messages at configurable intervals (24 hours, 3 days, 7 days) before marking the lead cold.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Sales Agent Development India',
  provider: { '@type': 'Organization', name: 'FactoryJet', url: 'https://factoryjet.com', address: { '@type': 'PostalAddress', addressCountry: 'IN' }, aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '150', bestRating: '5', worstRating: '1' } },
  areaServed: { '@type': 'Country', name: 'India' },
  serviceType: 'AI Sales Agent Development',
  description: 'AI sales agents for Indian businesses — WhatsApp lead qualification, automated follow-ups, demo booking, and CRM updates. Fixed price. Live in 2–4 weeks.',
  offers: [
    { '@type': 'Offer', name: 'Lead Qualification AI', price: '350000', priceCurrency: 'INR', description: 'WhatsApp lead qualification bot with Zoho CRM integration.' },
    { '@type': 'Offer', name: 'Full Sales AI Platform', price: '700000', priceCurrency: 'INR', description: 'Multi-source lead capture, qualification, follow-up, and demo booking.' },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent',
};

const SALES_JOURNEY_STAGES: ServiceJourneyStage[] = [
  { number: '01', title: 'Discover', description: 'We map your current lead sources, ideal customer profile, and qualification criteria your best reps use — so the AI replicates your best human instincts.' },
  { number: '02', title: 'Design', description: 'We design conversation flows for each lead source, define scoring rules, map CRM fields, and deliver a design document for your approval before writing any code.' },
  { number: '03', title: 'Build & Integrate', description: 'Engineering the sales agent with your product knowledge, pricing logic, and CRM integration — Zoho CRM, LeadSquared, WhatsApp BSP, Facebook Lead Ads, and calendar in one workflow.' },
  { number: '04', title: 'Train & Test', description: 'We run the agent against real lead conversation samples — including Hindi queries, objections, and edge cases — tune qualification logic until it performs as well as your best SDR.' },
  { number: '05', title: 'Deploy & Hand Over', description: 'Launch with monitoring, CRM dashboards, and recorded team training. All code, API keys, and integrations handed over at delivery. Optional monthly retainer for conversion optimisation.' },
];

const SALES_STATS = [
  { value: '21×', label: 'higher lead qualification rate responding within 5 minutes vs. 30+ minutes', microcopy: 'Harvard Business Review lead response study', categoryLabel: 'RESPONSE SPEED ROI' },
  { value: '35%', label: 'average increase in demo bookings within 60 days of AI sales agent deployment', microcopy: 'FactoryJet client data', categoryLabel: 'DEMO CONVERSION' },
  { value: '4–6 hrs', label: 'average Indian business response time to WhatsApp leads — vs. <60 seconds with AI', microcopy: 'Meta Business India, 2024', categoryLabel: 'CURRENT BASELINE' },
];

const SALES_MARKET_STATS = [
  { value: '72%', label: 'of Indian B2C businesses say WhatsApp is their primary sales channel', sourceUrl: 'https://meta.com/business/whatsapp-india-report-2024', sourceLabel: 'Meta Business India 2024' },
  { value: '67%', label: 'of inbound B2B leads in India never receive a follow-up after first contact', sourceUrl: 'https://www.deloitte.com/in/en/research-studies/india-ai-readiness.html', sourceLabel: 'Deloitte India AI Readiness 2024' },
  { value: '₹65,000 Cr+', label: "India's AI and sales automation market projected by 2027", sourceUrl: 'https://nasscom.in/ai-report-2024', sourceLabel: 'NASSCOM AI Report 2024' },
];

const SALES_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'In-House SDR Team' },
  { label: 'Freelancer' },
  { label: 'SaaS CRM Add-On' },
] as const;

const SALES_COMPARISON_ROWS = [
  { feature: 'Starting price', values: ['₹3,50,000 (one-time)', '₹40,000–₹80,000/month per SDR', '₹1,50,000–₹4,00,000', '₹5,000–₹25,000/month SaaS'] },
  { feature: 'Responds within 60 seconds, 24/7', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="sdr" kind="no" />, <CompareIcon key="fl" kind="no" />, <CompareIcon key="saas" kind="partial" />] },
  { feature: 'Hindi + regional language support', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="sdr" kind="partial" />, <CompareIcon key="fl" kind="partial" />, <CompareIcon key="saas" kind="no" />] },
  { feature: 'Zoho CRM / LeadSquared integration', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="sdr" kind="partial" />, <CompareIcon key="fl" kind="partial" />, <CompareIcon key="saas" kind="partial" />] },
  { feature: 'Facebook & Instagram lead ad integration', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="sdr" kind="no" />, <CompareIcon key="fl" kind="partial" />, <CompareIcon key="saas" kind="partial" />] },
  { feature: 'Automated demo booking with calendar sync', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="sdr" kind="partial" />, <CompareIcon key="fl" kind="no" />, <CompareIcon key="saas" kind="partial" />] },
  { feature: 'Fixed one-time cost (no monthly fee to FactoryJet)', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="sdr" kind="no" />, <CompareIcon key="fl" kind="partial" />, <CompareIcon key="saas" kind="no" />] },
  { feature: 'Full code ownership', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="sdr" kind="no" />, <CompareIcon key="fl" kind="yes" />, <CompareIcon key="saas" kind="no" />] },
  { feature: '30-day post-launch support', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="sdr" kind="no" />, <CompareIcon key="fl" kind="no" />, <CompareIcon key="saas" kind="no" />] },
  { feature: '500+ SMB projects since 1999', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="sdr" kind="no" />, <CompareIcon key="fl" kind="no" />, <CompareIcon key="saas" kind="no" />] },
];

const SALES_INDUSTRIES = [
  { name: 'Real Estate', description: 'AI that qualifies leads from 99acres, MagicBricks, Housing.com, and Facebook ads — asks budget, timeline, location, and family size, then routes hot leads to your sales team with a full profile. Books site visits automatically.', example: 'Builders report 40–50% more site visits without adding telecallers.', linkLabel: 'See AI agents', linkHref: '/services/ai-agent-development' },
  { name: 'EdTech & Coaching', description: 'Sales AI that engages inbound leads from Google and Facebook ads, asks course interest and budget questions, sends programme information, and books counsellor calls — with Razorpay payment link sending for course fees.', example: 'EdTech platforms report 3× faster lead-to-enrolment conversion.' },
  { name: 'Financial Services', description: 'Lead qualification AI for loans, insurance, and investment products — collects CIBIL consent, asks income and employment details, scores eligibility, and routes hot leads to relationship managers while rejecting unqualified enquiries.', example: 'NBFC platforms reduce unqualified lead volume by 60%.' },
  { name: 'D2C E-Commerce', description: 'AI that engages abandoned cart leads on WhatsApp, answers product questions, sends discount codes, and closes the sale — integrated with Shopify and Razorpay so the entire purchase flow happens inside the chat.', example: 'D2C brands recover 15–25% of abandoned carts via WhatsApp AI.' },
  { name: 'B2B Manufacturing & Distribution', description: 'Sales AI that handles inbound enquiries from distributors and dealers, collects order details, validates GSTIN, sends product catalogues and pricing, and routes to your sales team with a qualified brief.', example: 'B2B distributors reduce inbound call volume by 55% within 30 days.' },
  { name: 'Healthcare & Diagnostics', description: 'Patient intake AI that answers queries, checks doctor availability, books appointments on WhatsApp, collects insurance details, and sends confirmation with location and preparation instructions automatically.', example: 'Diagnostics chains report 45% reduction in front-desk appointment time.' },
];

const SALES_PRICING_TIERS = [
  {
    name: 'Lead Qualification AI',
    priceRange: 'From ₹3,50,000',
    description: 'A focused AI sales agent that qualifies inbound WhatsApp leads, pushes qualified prospects to your CRM, and follows up automatically.',
    features: [
      'WhatsApp lead qualification flow (custom to your product/service)',
      'Zoho CRM or LeadSquared integration — qualified leads pushed automatically',
      'Lead scoring based on your criteria (budget, timeline, location)',
      'Hindi + English language support',
      'Re-engagement sequences for leads that go quiet',
      'Conversation log and lead summary in CRM',
      '14-day post-launch support',
    ],
    cta: { label: 'Book a Free Strategy Call', modal: true as const, region: 'in' as const },
  },
  {
    name: 'Full Sales AI Platform',
    priceRange: 'From ₹7,00,000',
    description: 'Multi-source lead capture, intelligent qualification, automated demo booking, and follow-up sequences — all integrated with your CRM and calendar.',
    features: [
      'Multi-source lead capture: Facebook/Instagram ads + website + WhatsApp',
      'Zoho CRM / LeadSquared / HubSpot deep integration',
      'Automated demo booking with Google Calendar or Calendly',
      'Follow-up sequences for cold leads (24hr, 3-day, 7-day)',
      'Lead scoring dashboard with conversion analytics',
      'Razorpay payment link sending for high-ticket closings',
      '30-day post-launch support and conversion optimisation',
    ],
    cta: { label: 'Get a Custom Quote', modal: true as const, region: 'in' as const },
    popular: true,
  },
  {
    name: 'Enterprise Sales AI',
    priceRange: 'From ₹14,00,000',
    description: 'A full AI-powered sales pipeline — from multi-channel lead capture to deal closing support — with custom CRM workflows and analytics.',
    features: [
      'All channels: WhatsApp, website, Facebook, Instagram, 99acres, MagicBricks',
      'Multi-tier qualification with dynamic scoring models',
      'Custom CRM workflows (Zoho, Salesforce, LeadSquared)',
      'Territory and team routing logic',
      'AI-generated call briefs for sales reps before every meeting',
      'Real-time sales pipeline analytics dashboard',
      '90-day post-launch optimisation window',
    ],
    cta: { label: 'Schedule an Enterprise Call', modal: true as const, region: 'in' as const },
  },
] as const;

const SALES_FAQ_CATEGORIES = [
  { key: 'basics',  label: 'AI Sales Basics' },
  { key: 'leads',   label: 'Lead Handling' },
  { key: 'india',   label: 'India-Specific' },
  { key: 'process', label: 'Process & Timeline' },
  { key: 'pricing', label: 'Pricing & ROI' },
];

const SALES_FAQ_ITEMS = [
  { category: 'basics', question: 'What is an AI sales agent and how is it different from a CRM?', answer: "A CRM is a database where your team records sales activity. An AI sales agent is an active participant — it engages leads the moment they enquire, asks qualification questions, scores them, books demos, sends follow-ups, and pushes data to your CRM automatically. It does not wait for a human to act — it acts immediately, 24/7, at the speed your customers expect." },
  { category: 'basics', question: 'What tasks can an AI sales agent handle independently?', answer: "Responding to inbound WhatsApp enquiries within 60 seconds, asking qualification questions (budget, timeline, use case, location), sending product information and catalogues, booking demos to your calendar, sending Razorpay payment links, re-engaging cold leads automatically, and updating your Zoho CRM with the full conversation summary and lead score — all without a human involved." },
  { category: 'basics', question: 'When does the AI hand off to a human sales rep?', answer: "The agent escalates to a human when: a lead meets your qualification criteria and is ready for a sales conversation, a lead asks something outside the agent's knowledge, the lead requests to speak with a person, or the conversation involves custom pricing or contract negotiation. Escalation includes the full conversation history so the rep has context before the first word." },
  { category: 'basics', question: 'Can the AI sales agent send proactive WhatsApp messages?', answer: "Yes — using WhatsApp template messages (Meta-approved). We set up automated broadcast sequences for re-engagement, seasonal promotions, renewal reminders, and follow-ups with leads who went cold. These trigger automatically based on CRM data — leads who enquired 30 days ago, customers whose subscription expires in 14 days, etc." },
  { category: 'leads', question: 'Can the AI qualify leads from Facebook and Instagram ads?', answer: "Yes. When a lead submits your Facebook Lead Ad form or DMs your Instagram, the AI starts a WhatsApp conversation within 60 seconds — asks qualification questions, scores the lead, and pushes qualified prospects to your CRM with a full brief. Most Indian businesses lose 40–60% of ad leads due to slow response time. AI closes that gap entirely." },
  { category: 'leads', question: 'What happens to leads that do not complete the qualification flow?', answer: "Incomplete leads are flagged in your CRM with the partial conversation. The agent sends configurable re-engagement messages at 24 hours, 3 days, and 7 days before marking the lead cold. Your team can see every attempt and override for high-value prospects. No lead is silently dropped." },
  { category: 'leads', question: 'Can the agent book demo meetings directly from WhatsApp?', answer: "Yes. After qualifying a lead, the agent checks your Google Calendar, Calendly, or Zoho Bookings for available slots, proposes 2–3 options in the WhatsApp chat, confirms the customer's choice, sends a calendar invite with meeting link, and logs the confirmed meeting in your CRM. The reminder is sent automatically 24 hours before." },
  { category: 'leads', question: 'How does the AI handle multiple leads simultaneously?', answer: "There is no queue. The AI processes every inbound lead in parallel — 1 lead or 500 leads arriving at the same time, each gets an immediate, personalised response. Peak times (right after an ad campaign or a webinar) are handled identically to normal times. This is the structural advantage over an SDR team." },
  { category: 'india', question: 'Which Indian CRM and sales tools can the AI integrate with?', answer: "We integrate with Zoho CRM, LeadSquared, Freshsales, HubSpot, and Salesforce. For Indian-specific tools: Interakt and Wati for WhatsApp, Facebook and Instagram Lead Ads, 99acres and MagicBricks (real estate leads), and Razorpay for payment link sending during the sales conversation." },
  { category: 'india', question: 'Can the sales AI qualify leads in Hindi and regional languages?', answer: "Yes. The AI detects the language the lead writes in — Hindi, Hinglish, Marathi, Tamil, Telugu, Gujarati, Kannada — and responds throughout the qualification flow in the same language. Your CRM summary is always written in English regardless of conversation language." },
  { category: 'india', question: 'Can the AI handle leads from real estate portals like 99acres and MagicBricks?', answer: "Yes. 99acres and MagicBricks provide lead notification emails or webhooks. We parse those and trigger an immediate WhatsApp message to the lead — asking shortlisting questions (budget, configuration, possession timeline, location) and routing hot leads to your team within 60 seconds of the portal generating the lead." },
  { category: 'india', question: 'Can the AI sales agent send a Razorpay payment link mid-conversation?', answer: "Yes. For high-ticket D2C sales, booking fees, or course fees, the agent generates a Razorpay payment link, sends it on WhatsApp, and confirms receipt when the webhook fires. The sale is logged to Zoho CRM automatically — no manual data entry required." },
  { category: 'process', question: 'How long does it take to deploy an AI sales agent?', answer: "A focused WhatsApp lead qualification agent goes live in 2–3 weeks. A full sales AI with multi-source capture, demo booking, and follow-up sequences takes 4–6 weeks. We give a firm timeline after a discovery call — scope drives everything." },
  { category: 'process', question: 'What do I need to provide to get started?', answer: "Your qualification criteria (what makes a lead 'good'), access to your CRM, your WhatsApp Business API account (or we set one up), ad account access for Facebook/Instagram integration, and your product/service content for the knowledge base. We send a structured onboarding form — most clients complete it in under an hour." },
  { category: 'process', question: 'Can I update the qualification questions after the agent is live?', answer: "Yes. The qualification flow is managed through an admin panel — no technical skills required to adjust questions, scoring criteria, or CRM field mappings. Minor changes (question wording, scoring weights) take minutes. Major changes (new lead sources, new qualification logic) take a few days." },
  { category: 'process', question: 'How do you measure whether the sales agent is working?', answer: "We build a reporting dashboard tracking: lead volume by source, qualification rate, demo booking rate, response time (AI vs. human baseline), and re-engagement conversion rate. You see these metrics in real time and can identify which lead source or conversation step is underperforming." },
  { category: 'pricing', question: 'How much does an AI sales agent cost in India?', answer: "FactoryJet AI sales agents start from ₹3,50,000 for a focused WhatsApp lead qualification bot with CRM integration. A full sales AI platform with multi-source capture, demo booking, and follow-up sequences starts from ₹7,00,000. All prices are fixed — no hourly billing, no ongoing FactoryJet subscription." },
  { category: 'pricing', question: 'What is the typical ROI for an Indian business using an AI sales agent?', answer: "Two primary ROI drivers: speed (responding within 60 seconds vs. 4–6 hours increases qualification rates by 21×) and coverage (the agent handles every lead at peak capacity, whereas an SDR team misses leads during lunch, evenings, and Sundays). Most clients see 25–40% more demo bookings within 30 days." },
  { category: 'pricing', question: 'Are there ongoing costs after the sales agent is built?', answer: "LLM API costs (typically ₹5,000–₹20,000/month for Indian SMB lead volumes — paid directly to model providers) and your WhatsApp BSP subscription (Interakt/Wati based on message volume). FactoryJet charges nothing ongoing unless you choose a monthly retainer." },
  { category: 'pricing', question: 'Is my lead data safe with an AI sales agent?', answer: "Yes. Lead data is processed via API-level integrations and stored in your Zoho CRM — not on FactoryJet servers. We enforce least-privilege access, implement full audit trails, and document all data flows at delivery. For BFSI and regulated sectors, we deploy with private LLM infrastructure." },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function AISalesAgentINPage() {
  return (
    <>
      <Script id="ai-sales-agent-in-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="ai-sales-agent-in-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader locale="in" navLinks={[{ label: 'Services', href: '/services' }, { label: 'AI Agents', href: '/services/ai-agent-development' }, { label: 'Portfolio', href: '/portfolio' }, { label: 'Pricing', href: '#pricing' }, { label: 'Contact', modal: true, region: 'in' }]} cta={{ label: 'Book a Free Call', modal: true, region: 'in' }} />

      <BreadcrumbSchema items={[{ name: 'Home', url: 'https://factoryjet.com' }, { name: 'Services', url: 'https://factoryjet.com/services' }, { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' }, { name: 'AI Sales Agent', url: 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent' }]} />

      <main className="bg-fj-cream">

        <Hero
          eyebrow="AI SALES AGENT · INDIA"
          headline="AI That Qualifies Your WhatsApp Leads in 60 Seconds — While You Sleep"
          lead="Your sales team is responding hours after leads enquire and losing deals to competitors who reply faster. FactoryJet AI sales agents qualify every lead immediately — in Hindi or English — book demos automatically, and push ready-to-close prospects to Zoho CRM around the clock."
          primaryCta={{ label: 'Book a Free Sales AI Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={['500+ businesses served', 'Zoho CRM + LeadSquared ready', '60-second lead response']}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p className="font-fj-mono font-medium uppercase text-[#F05A28]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>AI SALES AGENT IN ACTION</p>
              <p className="mt-4 font-fj-display text-[1.875rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">42 qualified leads. 18 demos booked. All before 9 AM — zero SDR involvement.</p>
              <div className="mt-6 space-y-3">
                {[
                  'Lead submits Facebook ad form at 11:30 PM → AI WhatsApps in 45 sec → qualifies in 6 messages → booked into demo calendar',
                  'Real estate lead from 99acres → AI asks budget, timeline, config → routes hot lead with brief to sales rep in Zoho CRM',
                  '7-day cold lead re-engagement → AI sends follow-up → 23% of cold leads re-engage and book consultation',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F05A28]/10 font-fj-mono text-[10px] font-bold text-[#F05A28]">{i + 1}</span>
                    <p className="font-fj-body text-[0.875rem] leading-[1.5] text-fj-neutral-600">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-fj-neutral-100 pt-6">
                <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">Runs 24/7. Every lead gets a 60-second response — noon or midnight.</p>
              </div>
            </div>
          }
        />

        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />
        <BigThreeTrustBlock eyebrow="BY THE NUMBERS" headline="500+ businesses. 25 years of building. One goal: your results." />

        <ServiceExplanation
          eyebrow="AI SALES AGENT EXPLAINED"
          headline="Your Fastest, Most Consistent Sales Rep — Available 24/7 at a Fixed Cost"
          lead="A human SDR sleeps, takes weekends, handles one conversation at a time, and responds in 4–6 hours. An AI sales agent responds in under 60 seconds, works across every inbound lead in parallel, and never misses a follow-up."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {['Lead qualification', 'WhatsApp follow-up', 'Demo booking', 'CRM updates', 'Cold re-engagement', 'Payment links', 'Hindi + English', 'Facebook ads'].map((cap) => (
                  <span key={cap} className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#F05A28]" style={{ fontSize: '10px', letterSpacing: '0.10em' }}>{cap}</span>
                ))}
              </div>
              <p>Research shows responding to an inbound lead within 5 minutes increases qualification rates by 21× compared to a 30-minute response. Most Indian businesses respond in 4–6 hours. Competitors with AI sales agents respond in under 60 seconds — at midnight, on Sundays, during Diwali. That gap compounds into a significant pipeline advantage within weeks.</p>
              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[{ value: '21×', label: 'Qualification rate' }, { value: '<60s', label: 'Response time' }, { value: '24/7', label: 'Coverage' }].map((b) => (
                  <div key={b.value} className="rounded-xl border border-fj-neutral-200 bg-white px-3 py-4 text-center shadow-sm">
                    <p className="font-fj-display font-bold text-[#F05A28]" style={{ fontSize: '1.375rem', lineHeight: 1, letterSpacing: '-0.03em' }}>{b.value}</p>
                    <p className="mt-1.5 font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '0.6875rem', letterSpacing: '0.07em' }}>{b.label}</p>
                  </div>
                ))}
              </div>
              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p className="font-fj-display font-semibold text-fj-ink" style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}>The best SDR you ever hired — multiplied by 1,000 and available around the clock.</p>
              </div>
              <p>FactoryJet AI sales agents are built on large language models trained on your product knowledge, qualification criteria, and sales scripts — integrated directly with Zoho CRM, Facebook Lead Ads, WhatsApp BSP, and your calendar. Your reps open CRM in the morning to a pipeline full of qualified, briefed, calendar-confirmed leads.</p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>How AI Sales Works</p>
              </div>
              <div className="px-7 pt-6 pb-2">
                {([
                  { step: '01', title: 'Lead arrives (any source)', desc: 'Facebook ad, 99acres, website form, WhatsApp message — all captured and triggered in real time.' },
                  { step: '02', title: 'AI engages within 60 seconds', desc: "WhatsApp message sent. Qualification questions asked in the lead's language." },
                  { step: '03', title: 'Lead is scored', desc: 'Based on budget, timeline, use case — marked Hot, Warm, or Cold.' },
                  { step: '04', title: 'Demo booked or follow-up set', desc: 'Calendar slot proposed and confirmed. Reminder sent 24 hours before.' },
                  { step: '05', title: 'CRM updated automatically', desc: 'Full conversation log, lead score, and meeting details pushed to Zoho CRM. Rep opens a complete brief.' },
                ] as const).map((item, i, arr) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#F05A28]">
                        <span className="font-fj-mono text-[10px] font-bold text-white">{item.step}</span>
                      </div>
                      {i < arr.length - 1 && <div className="mt-1 h-full w-px bg-fj-neutral-200" style={{ minHeight: '2rem' }} />}
                    </div>
                    <div className="pb-5">
                      <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9375rem' }}>{item.title}</p>
                      <p className="mt-1 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem', lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-body text-fj-neutral-400" style={{ fontSize: '0.8125rem' }}>Every step runs automatically. Your sales reps focus on closing — not data entry.</p>
              </div>
            </div>
          }
        />

        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="Your leads are choosing competitors while your team manually follows up"
          lead="67% of inbound B2B leads in India never receive a second follow-up. Most businesses are not losing deals because of price — they are losing because they are too slow and too inconsistent."
          pillars={[
            { icon: '⏱️', title: 'You are responding hours after leads enquire', body: 'A lead who WhatsApps your business at 11 PM and gets a reply at 9:30 AM has already shortlisted three competitors. Responding within 5 minutes vs. 30 minutes increases qualification rates by 21×. Manual follow-up cannot compete with that — AI can.' },
            { icon: '📋', title: 'Your CRM is full of leads no one followed up on', body: 'Every sales team has hundreds of leads in CRM marked "to follow up" that never got a second message. An AI sales agent sends the follow-up automatically at 24 hours, 3 days, and 7 days — until the lead responds or is marked cold.' },
            { icon: '🔁', title: 'Your SDRs are qualifying instead of closing', body: "Your best salespeople spend 60–70% of their time on discovery calls, data entry, and calendar management. An AI sales agent handles all of it, so your reps spend time on conversations that only a human can close." },
          ]}
        />

        <ServiceJourneyRow eyebrow="HOW WE BUILD" headline="From discovery to live sales AI in 2–4 weeks" stages={SALES_JOURNEY_STAGES} closingNote="Every stage ends with a working demo. You see the agent qualify a real lead before it talks to your customers." />

        <ServiceExplanation
          eyebrow="TECHNOLOGY"
          headline="The tech stack behind your AI sales agent"
          lead="We choose tools based on your lead sources, CRM, and data privacy requirements. Every architectural decision is documented."
          reverseOnDesktop
          body={
            <>
              <p>Every AI sales agent has four layers: a language model for understanding lead responses and generating qualification questions, a CRM integration layer for pushing qualified leads and pulling product data, a channel layer for WhatsApp delivery and ad platform integration, and a calendar layer for booking demos.</p>
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
                      { layer: 'Orchestration', tools: 'LangChain, LangGraph, n8n' },
                      { layer: 'WhatsApp', tools: 'Interakt, Wati, AiSensy' },
                      { layer: 'CRM', tools: 'Zoho CRM, LeadSquared, Freshsales, HubSpot' },
                      { layer: 'Lead Sources', tools: 'Facebook Lead Ads, Instagram, 99acres, MagicBricks' },
                      { layer: 'Calendar / Booking', tools: 'Google Calendar, Calendly, Zoho Bookings' },
                      { layer: 'Payments', tools: 'Razorpay payment link generation' },
                    ].map((row) => (
                      <tr key={row.layer}>
                        <td className="px-5 py-3 font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.8125rem' }}>{row.layer}</td>
                        <td className="px-5 py-3 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem' }}>{row.tools}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>Four Sales AI Types We Build</p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { name: 'WhatsApp Lead Qualifier', desc: 'Engages inbound leads, asks discovery questions, scores, and pushes to Zoho CRM with a full brief.' },
                  { name: 'Multi-Source Lead Capture', desc: 'Facebook/Instagram ads + 99acres + website + WhatsApp — all leads in one qualified pipeline.' },
                  { name: 'Demo Booking AI', desc: 'Qualifies and books demos to your calendar automatically. Sends reminders. Logs to CRM.' },
                  { name: 'Cold Lead Re-Engagement AI', desc: 'Automated 24hr, 3-day, 7-day sequences for leads that went quiet. Re-activates 20–25% of cold pipeline.' },
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

        <section className="py-12 md:py-16" style={{ backgroundColor: '#FAFAF7', borderTop: '1.5px solid rgba(240,90,40,0.18)', borderBottom: '1.5px solid rgba(240,90,40,0.18)' }}>
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {SALES_STATS.map((stat) => (
                <div key={stat.value}>
                  {stat.categoryLabel && (
                    <div className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-fj-mono font-bold uppercase" style={{ fontSize: '9px', letterSpacing: '0.13em', color: '#F05A28', background: 'rgba(240,90,40,0.06)', border: '1px solid rgba(240,90,40,0.22)' }}>
                      <span className="inline-block h-1 w-1 rounded-full" style={{ backgroundColor: '#F05A28' }} aria-hidden="true" />
                      {stat.categoryLabel}
                    </div>
                  )}
                  <p className="font-fj-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', lineHeight: 1, letterSpacing: '-0.04em', color: '#F05A28' }}>{stat.value}</p>
                  <p className="mt-3 font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9375rem', lineHeight: 1.5 }}>{stat.label}</p>
                  {stat.microcopy && <p className="mt-1.5 font-fj-body text-fj-neutral-400" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>{stat.microcopy}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <CityContextSection
          eyebrow="INDIA SALES AI MARKET"
          headline="72% of Indian businesses sell on WhatsApp. Most still do it manually."
          leadParagraphs={[
            "72% of Indian B2C businesses say WhatsApp is their primary sales channel — yet most manage it with a team manually typing replies, sending catalogues, and following up by memory. The businesses deploying AI sales agents respond 21× faster and follow up 100% of the time.",
            "67% of inbound B2B leads in India never receive a second follow-up. That is not a sales team failure — it is a volume and consistency problem that AI solves structurally. Every lead gets the same fast, thorough, professional response — at midnight, on weekends, during festivals.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden="true">
                <p className="font-fj-display font-semibold text-fj-ink" style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}>Speed is the most underrated advantage in Indian sales right now.</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Real Estate', 'EdTech', 'Financial Services', 'D2C', 'B2B Manufacturing', 'Healthcare'].map((ind) => (
                  <span key={ind} className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#F05A28]" style={{ fontSize: '10px', letterSpacing: '0.08em' }}>{ind}</span>
                ))}
              </div>
            </>
          }
          stats={SALES_MARKET_STATS}
        />

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. In-House SDR Team vs. Freelancer vs. SaaS CRM Add-On"
          lead="Fixed price, full ownership, Indian lead source integration out of the box — the honest comparison."
          pullQuote={{ stat: '₹3,50,000', caption: 'one-time — AI that qualifies every inbound lead in 60 seconds, books demos automatically, and pushes to Zoho CRM. No monthly salary, no sick leave, no coverage gaps.' }}
          columns={SALES_COMPARISON_COLUMNS}
          rows={SALES_COMPARISON_ROWS}
          footer="Prices reflect typical Indian market rates as of 2025. FactoryJet fixed-price contracts available for all tiers."
        />

        <IndustriesGrid variant="cards" eyebrow="WHO WE BUILD FOR" headline="AI sales agents for every high-lead-volume Indian industry" lead="Every industry has different lead sources, qualification criteria, and compliance requirements. We build for yours." sectors={SALES_INDUSTRIES} />

        <div id="pricing">
          <PricingTiers
            eyebrow="PRICING"
            headline="Transparent, Fixed-Price AI Sales Agent Development"
            lead="No hourly billing. No scope creep surprises. Every tier includes fixed price, full code ownership, and post-launch support."
            tiers={SALES_PRICING_TIERS}
            footnote="All prices in INR. LLM API costs (typically ₹5,000–₹20,000/month) billed directly by model providers. WhatsApp BSP fees are separate. Custom scopes quoted after a free discovery call."
          />
        </div>

        <TestimonialsSection eyebrow="CLIENT RESULTS" headline="What Indian founders say after deploying our AI sales agents" />

        <FAQ eyebrow="FREQUENTLY ASKED QUESTIONS" headline="Everything to Know Before You Start" lead="The questions we answer on every Indian AI sales agent discovery call — answered honestly." categories={SALES_FAQ_CATEGORIES} items={SALES_FAQ_ITEMS} />

        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="GET STARTED"
            headline="Book a Free AI Sales Strategy Call"
            sub="Tell us your biggest lead-response challenge. We will map out exactly how an AI sales agent fits your lead sources and CRM — and give you a fixed-price estimate before writing a single line of code."
            primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'in' }}
            secondaryCta={{ label: 'WhatsApp Us', href: 'https://wa.me/919876543210' }}
            objectionHandler="Fixed price. Full code ownership. Zoho + LeadSquared + Facebook Ads ready. 500+ businesses served."
          />
        </div>

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
