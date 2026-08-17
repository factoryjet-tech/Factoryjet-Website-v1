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
  title: 'AI Sales Agent for US Businesses | FactoryJet',
  description:
    'AI sales agents for US businesses: instant lead response, qualification, meeting booking and CRM updates in HubSpot, Salesforce or Pipedrive. Fixed price.',
  keywords: [
    'AI sales agent',
    'AI sales agent USA',
    'speed to lead automation',
    'AI lead qualification',
    'sales automation for US businesses',
    'AI SDR',
    'HubSpot AI sales agent',
    'Salesforce AI sales agent',
    'automated lead follow-up',
    'conversational AI sales',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Sales Agent for US Businesses | FactoryJet',
    description:
      'AI sales agents that answer inbound leads in under 60 seconds, qualify them, book the meeting, and update your CRM. English and Spanish. Fixed price.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent',
    images: [{ url: 'https://factoryjet.com/images/us/services/hero-ai-agent-us.webp', width: 1200, height: 800, alt: 'FactoryJet AI Agent Development Services' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Sales Agent for US Businesses | FactoryJet',
    description: 'Instant lead response, qualification, meeting booking and CRM updates for US businesses. Fixed price.',
    images: ['https://factoryjet.com/images/us/services/hero-ai-agent-us.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schemas, faqSchema is declared after SALES_FAQ_ITEMS below
───────────────────────────────────────────────────────────────────────────── */

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-08-17';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent#webpage',
  url: 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Sales Agent Development for US Businesses',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: 'AI Sales Agent Development',
  description: 'AI sales agents for US businesses: instant inbound lead response, qualification, automated follow-ups, meeting booking, and CRM updates. Fixed price. Live in 2–4 weeks.',
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
  { number: '01', title: 'Discover', description: 'We map your current lead sources, ideal customer profile, and qualification criteria your best reps use | so the AI replicates your best human instincts.' },
  { number: '02', title: 'Design', description: 'We design conversation flows for each lead source, define scoring rules, map CRM fields, and deliver a design document for your approval before writing any code.' },
  { number: '03', title: 'Build & Integrate', description: 'Engineering the sales agent with your product knowledge, pricing logic, and CRM integration | HubSpot, Salesforce or Pipedrive, your email and SMS provider, Facebook and Google lead ads, and your calendar in one workflow.' },
  { number: '04', title: 'Train & Test', description: 'We run the agent against real lead conversation samples | including Spanish-language inquiries, objections, and edge cases | tune qualification logic until it performs as well as your best SDR.' },
  { number: '05', title: 'Deploy & Hand Over', description: 'Launch with monitoring, CRM dashboards, and a recorded team walkthrough. All code, API keys, and integrations handed over at delivery. Optional monthly retainer for conversion optimization.' },
];

const SALES_STATS = [
  { value: '21×', label: 'higher lead qualification rate responding within 5 minutes vs. 30+ minutes', microcopy: 'Harvard Business Review lead response study', categoryLabel: 'RESPONSE SPEED ROI' },
  { value: '35%', label: 'average increase in demo bookings within 60 days of AI sales agent deployment', microcopy: 'FactoryJet client data', categoryLabel: 'DEMO CONVERSION' },
  { value: '42 hrs', label: 'average time US companies took to answer a web lead, vs. <60 seconds with AI', microcopy: 'Harvard Business Review, The Short Life of Online Sales Leads', categoryLabel: 'CURRENT BASELINE' },
];

const SALES_MARKET_STATS = [
  { value: '42 hrs', label: 'average first response time to a web-generated lead across 2,241 US companies', sourceUrl: 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads', sourceLabel: 'Harvard Business Review' },
  // Sourced to the Lead Response Management study (Oldroyd), which is the
  // paper that actually documents the 5-minute response finding.
  { value: '21x', label: 'higher odds of qualifying a lead when you respond within 5 minutes rather than 30', sourceUrl: 'https://www.leadresponsemanagement.org/lrm_study/', sourceLabel: 'Lead Response Management study, Oldroyd' },
  { value: '37%', label: 'of those companies replied to the lead within an hour. The rest were slower or never replied', sourceUrl: 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads', sourceLabel: 'Harvard Business Review' },
];

const SALES_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'In-House SDR Team' },
  { label: 'Freelancer' },
  { label: 'SaaS CRM Add-On' },
] as const;

const SALES_COMPARISON_ROWS = [
  { feature: 'Pricing model', values: ['Fixed price after a scoping call', 'Salary plus commission, per rep, every month', 'Project fee, varies by contractor', 'Per-seat subscription, every month'] },
  { feature: 'Responds within 60 seconds, 24/7', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="sdr" kind="no" />, <CompareIcon key="fl" kind="no" />, <CompareIcon key="saas" kind="partial" />] },
  { feature: 'English and Spanish conversations', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="sdr" kind="partial" />, <CompareIcon key="fl" kind="partial" />, <CompareIcon key="saas" kind="no" />] },
  { feature: 'HubSpot / Salesforce / Pipedrive integration', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="sdr" kind="partial" />, <CompareIcon key="fl" kind="partial" />, <CompareIcon key="saas" kind="partial" />] },
  { feature: 'Facebook, Instagram & Google lead ad integration', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="sdr" kind="no" />, <CompareIcon key="fl" kind="partial" />, <CompareIcon key="saas" kind="partial" />] },
  { feature: 'Automated meeting booking with calendar sync', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="sdr" kind="partial" />, <CompareIcon key="fl" kind="no" />, <CompareIcon key="saas" kind="partial" />] },
  { feature: 'Fixed one-time cost (no monthly fee to FactoryJet)', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="sdr" kind="no" />, <CompareIcon key="fl" kind="partial" />, <CompareIcon key="saas" kind="no" />] },
  { feature: 'Full code ownership', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="sdr" kind="no" />, <CompareIcon key="fl" kind="yes" />, <CompareIcon key="saas" kind="no" />] },
  { feature: '30-day post-launch support', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="sdr" kind="no" />, <CompareIcon key="fl" kind="no" />, <CompareIcon key="saas" kind="no" />] },
  { feature: '500+ SMB projects', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="sdr" kind="no" />, <CompareIcon key="fl" kind="no" />, <CompareIcon key="saas" kind="no" />] },
];

const SALES_INDUSTRIES = [
  { name: 'Real Estate', description: 'AI that qualifies leads from Zillow, Realtor.com, and Facebook ads | asks budget, timeline, neighborhood, and financing status, then routes hot leads to your agents with a full profile. Books showings automatically.', example: 'Brokerages book more showings without adding front-desk staff.', linkLabel: 'See AI agents', linkHref: '/services/ai-agent-development' },
  { name: 'Education & Training', description: 'Sales AI that engages inbound leads from Google and Facebook ads, asks program interest and budget questions, sends course information, and books advisor calls | with a Stripe payment link for enrollment deposits.', example: 'Programs stop losing applicants who were waiting on a callback.' },
  { name: 'Financial Services', description: 'Lead qualification AI for lending, insurance, and wealth products | asks income, timeline, and product-fit questions, scores eligibility, and routes qualified leads to an advisor while filtering out inquiries you cannot serve. Built to respect TCPA consent rules on any call or text follow-up.', example: 'Advisors spend the day on people who actually qualify.' },
  { name: 'DTC E-Commerce', description: 'AI that re-engages abandoned carts by email and SMS, answers product questions, sends a discount code, and closes the sale | integrated with Shopify and Stripe so checkout happens without leaving the thread.', example: 'Brands recover carts that used to go quiet after the first reminder.' },
  { name: 'B2B Manufacturing & Distribution', description: 'Sales AI that handles inbound inquiries from distributors and dealers, collects order details, captures company and PO information, sends catalogs and pricing, and routes to your sales team with a qualified brief.', example: 'Distributors cut inbound call volume and keep the details in the CRM.' },
  { name: 'Healthcare & Diagnostics', description: 'Patient intake AI that answers questions, checks provider availability, books appointments, collects insurance details, and sends confirmation with location and prep instructions automatically. Built to respect HIPAA rules on protected health information.', example: 'Front desks spend far less of the day on scheduling calls.' },
];

const SALES_PRICING_TIERS = [
  {
    name: 'Lead Qualification AI',
    priceRange: '',
    description: 'A focused AI sales agent that answers inbound leads within seconds, qualifies them, pushes qualified prospects to your CRM, and follows up automatically.',
    features: [
      'Inbound lead qualification flow across email, web form, and SMS (custom to your product/service)',
      'HubSpot, Salesforce or Pipedrive integration, qualified leads pushed automatically',
      'Lead scoring based on your criteria (budget, timeline, fit)',
      'English and Spanish conversations',
      'Re-engagement sequences for leads that go quiet',
      'Conversation log and lead summary in CRM',
      '14-day post-launch support',
    ],
    cta: { label: 'Book a Free Strategy Call', modal: true as const, region: 'us' as const },
  },
  {
    name: 'Full Sales AI Platform',
    priceRange: '',
    description: 'Multi-source lead capture, intelligent qualification, automated meeting booking, and follow-up sequences: all integrated with your CRM and calendar.',
    features: [
      'Multi-source lead capture: Facebook and Google lead ads + website forms + inbound email',
      'HubSpot / Salesforce / Pipedrive deep integration',
      'Automated meeting booking with Google Calendar, Outlook or Calendly',
      'Follow-up sequences for cold leads (24hr, 3-day, 7-day)',
      'Lead scoring dashboard with conversion analytics',
      'Stripe payment link sending for high-ticket closings',
      '30-day post-launch support and conversion optimization',
    ],
    cta: { label: 'Get a Custom Quote', modal: true as const, region: 'us' as const },
    popular: true,
  },
  {
    name: 'Enterprise Sales AI',
    priceRange: '',
    description: 'A full AI-powered sales pipeline, from multi-channel lead capture to deal closing support, with custom CRM workflows and analytics.',
    features: [
      'All channels: email, phone, SMS, website, Facebook, Instagram, and WhatsApp where your buyers use it',
      'Multi-tier qualification with dynamic scoring models',
      'Custom CRM workflows (HubSpot, Salesforce, Microsoft Dynamics)',
      'Territory and team routing logic',
      'AI-generated call briefs for sales reps before every meeting',
      'Real-time sales pipeline analytics dashboard',
      '90-day post-launch optimization window',
    ],
    cta: { label: 'Schedule an Enterprise Call', modal: true as const, region: 'us' as const },
  },
] as const;

const SALES_FAQ_CATEGORIES = [
  { key: 'basics',  label: 'AI Sales Basics' },
  { key: 'leads',   label: 'Lead Handling' },
  { key: 'channels', label: 'Channels & CRM' },
  { key: 'process', label: 'Process & Timeline' },
  { key: 'pricing', label: 'Pricing & ROI' },
];

const SALES_FAQ_ITEMS = [
  { category: 'basics', question: 'What is an AI sales agent and how is it different from a CRM?', answer: "A CRM is a database where your team records sales activity. An AI sales agent is an active participant, it engages leads the moment they inquire, asks qualification questions, scores them, books demos, sends follow-ups, and pushes data to your CRM automatically. It does not wait for a human to act, it acts immediately, 24/7, at the speed your customers expect." },
  { category: 'basics', question: 'What tasks can an AI sales agent handle independently?', answer: "Answering an inbound lead within 60 seconds by email, text, or web chat, asking qualification questions (budget, timeline, use case, team size), sending product information and spec sheets, booking meetings on your calendar, sending a Stripe payment link when a deal closes on the spot, re-engaging cold leads automatically, and updating HubSpot or Salesforce with the full conversation summary and lead score: all without a human involved." },
  { category: 'basics', question: 'When does the AI hand off to a human sales rep?', answer: "The agent escalates to a human when: a lead meets your qualification criteria and is ready for a sales conversation, a lead asks something outside the agent's knowledge, the lead requests to speak with a person, or the conversation involves custom pricing or contract negotiation. Escalation includes the full conversation history so the rep has context before the first word." },
  { category: 'basics', question: 'Can the AI sales agent send proactive outbound follow-ups?', answer: "Yes, by email, and by text or phone where you already have prior express consent from that contact. We set up sequences for re-engagement, renewal reminders, and follow-ups with leads who went cold, triggered off your CRM data. Outbound calling and texting in the US falls under the TCPA, so we build consent capture, permitted calling windows, and one-tap opt-out into the flow from day one. We are not your lawyers: your counsel sets the policy, we implement it." },
  { category: 'leads', question: 'Can the AI qualify leads from Facebook and Google ads?', answer: "Yes. When a lead submits your Facebook Lead Ad, Google lead form, or Instagram DM, the AI replies within 60 seconds by email or text, asks qualification questions, scores the lead, and pushes qualified prospects to your CRM with a full brief. Slow response is where paid budget quietly leaks: the Harvard Business Review audit of 2,241 US companies found the average first reply took 42 hours. AI closes that gap entirely." },
  { category: 'leads', question: 'What happens to leads that do not complete the qualification flow?', answer: "Incomplete leads are flagged in your CRM with the partial conversation. The agent sends configurable re-engagement messages at 24 hours, 3 days, and 7 days before marking the lead cold. Your team can see every attempt and override for high-value prospects. No lead is silently dropped." },
  { category: 'leads', question: 'Can the agent book meetings directly from the conversation?', answer: "Yes. After qualifying a lead, the agent checks your Google Calendar, Outlook, or Calendly for open slots, proposes 2–3 options in the same thread, confirms the customer's choice, sends a calendar invite with the meeting link, and logs the confirmed meeting in your CRM. The reminder is sent automatically 24 hours before." },
  { category: 'leads', question: 'How does the AI handle multiple leads simultaneously?', answer: "There is no queue. The AI processes every inbound lead in parallel, 1 lead or 500 leads arriving at the same time, each gets an immediate, personalised response. Peak times (right after an ad campaign or a webinar) are handled identically to normal times. This is the structural advantage over an SDR team." },
  { category: 'channels', question: 'Which CRMs and sales tools can the AI integrate with?', answer: "HubSpot, Salesforce, Pipedrive, Close, Zoho, and Freshsales on the CRM side. On the channel side: SendGrid or Postmark for email, Twilio for SMS and voice, Facebook and Google lead ads, and the WhatsApp Business API if part of your audience actually prefers it. Payments run through Stripe when a deal closes inside the conversation." },
  { category: 'channels', question: 'Can the sales AI qualify leads in Spanish?', answer: "Yes. The agent detects whether the lead writes in English or Spanish and runs the whole qualification flow in that language, including the follow-up sequence. Your CRM summary is always written in English regardless of the conversation language, so your reps read one format. We test both languages against real lead transcripts before launch." },
  { category: 'channels', question: 'Can the AI work leads from listing portals and marketplaces?', answer: "Yes, wherever the portal sends a lead notification email or a webhook. We parse those and trigger an immediate reply, ask the shortlisting questions that matter in your category (budget, timeline, location, financing), and route hot leads to your team within 60 seconds of the portal creating the lead. Real estate teams do this with Zillow and Realtor.com." },
  { category: 'channels', question: 'Can the AI sales agent send a payment link mid-conversation?', answer: "Yes. For high-ticket DTC orders, deposits, or enrollment fees, the agent generates a Stripe payment link, sends it in the thread, and confirms receipt when the webhook fires. The closed sale is logged to your CRM automatically, with no manual data entry." },
  { category: 'process', question: 'How long does it take to deploy an AI sales agent?', answer: "A focused inbound lead qualification agent goes live in 2–3 weeks. A full sales AI with multi-source capture, meeting booking, and follow-up sequences takes 4–6 weeks. We give a firm timeline after a discovery call, scope drives everything." },
  { category: 'process', question: 'What do I need to provide to get started?', answer: "Your qualification criteria (what makes a lead 'good'), access to your CRM, access to the inbox and phone number the agent will reply from, ad account access for Facebook and Google lead form integration, and your product content for the knowledge base. We send a structured onboarding form: most clients complete it in under an hour." },
  { category: 'process', question: 'Can I update the qualification questions after the agent is live?', answer: "Yes. The qualification flow is managed through an admin panel, no technical skills required to adjust questions, scoring criteria, or CRM field mappings. Minor changes (question wording, scoring weights) take minutes. Major changes (new lead sources, new qualification logic) take a few days." },
  { category: 'process', question: 'How do you measure whether the sales agent is working?', answer: "We build a reporting dashboard tracking: lead volume by source, qualification rate, meeting booking rate, response time (AI vs. your human baseline), and re-engagement conversion rate. You see these metrics in real time and can identify which lead source or conversation step is underperforming." },
  { category: 'pricing', question: 'How much does an AI sales agent cost?', answer: "Pricing is fixed-price and scoped to your build. Every project is quoted up front after a free discovery call, so you know the full cost before any work starts. The price depends on scope, how many lead sources you need, your qualification logic, CRM integrations, and whether you add meeting booking and follow-up sequences. There is no hourly billing and no ongoing FactoryJet subscription. Book a free discovery call for your exact quote." },
  { category: 'pricing', question: 'What is the typical ROI of an AI sales agent?', answer: "Two primary drivers: speed (the Lead Response Management study found 21× better odds of qualifying a lead when you respond inside 5 minutes rather than 30, and the average US company in the HBR audit took 42 hours) and coverage (the agent works every lead at peak volume, whereas a rep team misses leads at lunch, in the evening, and over the weekend). Most clients see 25–40% more meetings booked within 30 days from the same lead volume." },
  { category: 'pricing', question: 'Are there ongoing costs after the sales agent is built?', answer: "LLM API costs, billed directly by the model provider and driven by your lead volume, plus whatever you already pay for email and SMS delivery (SendGrid, Twilio) and your CRM seats. FactoryJet charges nothing ongoing unless you choose a monthly retainer." },
  { category: 'pricing', question: 'Is my lead data safe with an AI sales agent?', answer: "Yes. Lead data is processed through API-level integrations and stored in your CRM, not on FactoryJet servers. We enforce least-privilege access, keep full audit logs, and document every data flow at delivery. Where CCPA/CPRA applies to your California contacts, or HIPAA to patient data, we build to those rules (access and deletion requests, minimum necessary data, private model infrastructure where it is required). We do not sell you a compliance certificate, we build the system to respect the rule your counsel signs off on." },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: SALES_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function AISalesAgentUSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script id="ai-sales-agent-in-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="ai-sales-agent-in-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader locale="us" navLinks={[{ label: 'Services', href: '/services' }, { label: 'AI Agents', href: '/services/ai-agent-development' }, { label: 'Portfolio', href: '/portfolio' }, { label: 'Contact', modal: true, region: 'us' }]} cta={{ label: 'Book a Free Call', modal: true, region: 'us' }} />

      <BreadcrumbSchema items={[{ name: 'Home', url: 'https://factoryjet.com' }, { name: 'Services', url: 'https://factoryjet.com/services' }, { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' }, { name: 'AI Sales Agent', url: 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent' }]} />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[{ name: 'Home', url: 'https://factoryjet.com' }, { name: 'Services', url: 'https://factoryjet.com/services' }, { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' }, { name: 'AI Sales Agent', url: 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent' }]} />

        <Hero
        formSlot={<HeroInlineForm region="us" source="services_ai_agent_development_ai_sales_agent_hero" />}
          eyebrow="AI SALES AGENT · UNITED STATES"
          headline="AI That Answers Every Inbound Lead in 60 Seconds, Day or Night"
          lead="Your team replies hours after a lead comes in, and the deal goes to whoever answered first. FactoryJet AI sales agents answer every inbound lead within seconds by email, text, or chat, qualify it in English or Spanish, book the meeting on the right rep's calendar, and write the whole conversation into HubSpot or Salesforce."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'us' as const }}
          trustItems={['500+ businesses served', 'HubSpot + Salesforce ready', '60-second lead response']}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p className="font-fj-mono font-medium uppercase text-[#B23E13]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>AI SALES AGENT IN ACTION</p>
              <p className="mt-4 font-fj-display text-[1.875rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">42 qualified leads. 18 demos booked. All before 9 AM, zero SDR involvement.</p>
              <div className="mt-6 space-y-3">
                {[
                  'Lead submits Facebook ad form at 11:30 PM → AI emails and texts in 45 sec → qualifies in 6 messages → booked into demo calendar',
                  'Real estate lead from Zillow → AI asks budget, timeline, neighborhood → routes hot lead with brief to the agent in HubSpot',
                  '7-day cold lead re-engagement → AI sends follow-up → 23% of cold leads re-engage and book consultation',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F05A28]/10 font-fj-mono text-[10px] font-bold text-[#B23E13]">{i + 1}</span>
                    <p className="font-fj-body text-[0.875rem] leading-[1.5] text-fj-neutral-600">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-fj-neutral-100 pt-6">
                <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">Runs 24/7. Every lead gets a 60-second response, noon or midnight.</p>
              </div>
            </div>
          }
        />

        <LogoBar tagline="Trusted by 500+ businesses across the US, UK, and UAE" />
        <BigThreeTrustBlock eyebrow="BY THE NUMBERS" headline="500+ businesses. 12 years of building. One goal: your results."
          description="Websites and AI systems designed and built for businesses across the US, the UK and the UAE: Shopify stores, B2B companies, and DTC brands. Fixed, transparent pricing, your codebase delivered in full, and a 7-day delivery guarantee."
        />

        <ServiceExplanation
          eyebrow="AI SALES AGENT EXPLAINED"
          headline="Your Fastest, Most Consistent Sales Rep, Available 24/7 at a Fixed Cost"
          lead="A human SDR sleeps, takes weekends, handles one conversation at a time, and often replies hours or days later. An AI sales agent responds in under 60 seconds, works across every inbound lead in parallel, and never misses a follow-up."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {['Lead qualification', 'Email + SMS follow-up', 'Meeting booking', 'CRM updates', 'Cold re-engagement', 'Payment links', 'English + Spanish', 'Facebook ads'].map((cap) => (
                  <span key={cap} className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#B23E13]" style={{ fontSize: '10px', letterSpacing: '0.10em' }}>{cap}</span>
                ))}
              </div>
              <p>Research shows responding to an inbound lead within 5 minutes increases qualification rates by 21× compared to a 30-minute response. The Harvard Business Review audit of 2,241 US companies found the average first reply took 42 hours, and only 37% answered inside an hour. Competitors with AI sales agents respond in under 60 seconds, at midnight, on Sundays, over a holiday weekend. That gap compounds into a significant pipeline advantage within weeks.</p>
              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[{ value: '21×', label: 'Qualification rate' }, { value: '<60s', label: 'Response time' }, { value: '24/7', label: 'Coverage' }].map((b) => (
                  <div key={b.value} className="rounded-xl border border-fj-neutral-200 bg-white px-3 py-4 text-center shadow-sm">
                    <p className="font-fj-display font-bold text-[#F05A28]" style={{ fontSize: '1.375rem', lineHeight: 1, letterSpacing: '-0.03em' }}>{b.value}</p>
                    <p className="mt-1.5 font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '0.6875rem', letterSpacing: '0.07em' }}>{b.label}</p>
                  </div>
                ))}
              </div>
              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p className="font-fj-display font-semibold text-fj-ink" style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}>The best SDR you ever hired, multiplied by 1,000 and available around the clock.</p>
              </div>
              <p>FactoryJet AI sales agents are built on large language models grounded in your product knowledge, qualification criteria, and sales scripts, integrated directly with HubSpot or Salesforce, Facebook and Google lead ads, your email and SMS provider, and your calendar. Your reps open the CRM in the morning to a pipeline full of qualified, briefed, calendar-confirmed leads.</p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>How AI Sales Works</p>
              </div>
              <div className="px-7 pt-6 pb-2">
                {([
                  { step: '01', title: 'Lead arrives (any source)', desc: 'Facebook or Google ad, listing portal, website form, inbound email or text | all captured and triggered in real time.' },
                  { step: '02', title: 'AI replies within 60 seconds', desc: "Email or text goes out. Qualification questions asked in the lead's language." },
                  { step: '03', title: 'Lead is scored', desc: 'Based on budget, timeline, use case | marked Hot, Warm, or Cold.' },
                  { step: '04', title: 'Meeting booked or follow-up set', desc: 'Calendar slot proposed and confirmed. Reminder sent 24 hours before.' },
                  { step: '05', title: 'CRM updated automatically', desc: 'Full conversation log, lead score, and meeting details pushed to HubSpot or Salesforce. Rep opens a complete brief.' },
                ] as const).map((item, i, arr) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#B23E13]">
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
                <p className="font-fj-body text-fj-neutral-400" style={{ fontSize: '0.8125rem' }}>Every step runs automatically. Your sales reps focus on closing, not data entry.</p>
              </div>
            </div>
          }
        />

        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="Your leads are choosing competitors while your team manually follows up"
          lead="Most inbound leads never get a second follow-up. Businesses are usually not losing deals on price, they are losing because they are too slow and too inconsistent."
          pillars={[
            { icon: '⏱️', title: 'You are responding hours after leads inquire', body: 'A lead who fills in your form at 11 PM and gets a reply at 9:30 AM has already shortlisted three competitors. Responding within 5 minutes vs. 30 minutes increases qualification rates by 21×. Manual follow-up cannot compete with that | AI can.' },
            { icon: '📋', title: 'Your CRM is full of leads no one followed up on', body: 'Every sales team has hundreds of leads in CRM marked "to follow up" that never got a second message. An AI sales agent sends the follow-up automatically at 24 hours, 3 days, and 7 days | until the lead responds or is marked cold.' },
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
              <p>Every AI sales agent has four layers: a language model for understanding lead responses and generating qualification questions, a CRM integration layer for pushing qualified leads and pulling product data, a channel layer for email, SMS and chat delivery plus ad platform integration, and a calendar layer for booking meetings.</p>
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
                      { layer: 'Email, SMS & Chat', tools: 'SendGrid, Postmark, Twilio, WhatsApp Business API' },
                      { layer: 'CRM', tools: 'HubSpot, Salesforce, Pipedrive, Close' },
                      { layer: 'Lead Sources', tools: 'Facebook Lead Ads, Google lead forms, Zillow, website forms' },
                      { layer: 'Calendar / Booking', tools: 'Google Calendar, Outlook, Calendly' },
                      { layer: 'Payments', tools: 'Stripe payment link generation' },
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
                  { name: 'Inbound Lead Responder', desc: 'Answers new leads in seconds, asks discovery questions, scores, and pushes to your CRM with a full brief.' },
                  { name: 'Multi-Source Lead Capture', desc: 'Facebook and Google ads + listing portals + website forms + inbound email | all leads in one qualified pipeline.' },
                  { name: 'Meeting Booking AI', desc: 'Qualifies and books meetings to your calendar automatically. Sends reminders. Logs to CRM.' },
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
                    <div className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-fj-mono font-bold uppercase" style={{ fontSize: '9px', letterSpacing: '0.13em', color: '#B23E13', background: 'rgba(240,90,40,0.06)', border: '1px solid rgba(240,90,40,0.22)' }}>
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
          eyebrow="US SPEED-TO-LEAD REALITY"
          headline="The average US company takes 42 hours to answer a web lead"
          leadParagraphs={[
            "Harvard Business Review audited 2,241 US companies on how quickly they answered a web-generated lead. The average first response took 42 hours, and only 37% replied within an hour. Separately, the Lead Response Management study found you are 21× more likely to qualify a lead when you reach it inside 5 minutes rather than 30.",
            "That is not a sales team failure, it is a volume and consistency problem that AI solves structurally. Every lead gets the same fast, thorough, professional response, at 2 AM, on a Saturday, over a holiday weekend, and your reps get a qualified conversation instead of a cold list.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden="true">
                <p className="font-fj-display font-semibold text-fj-ink" style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}>Speed to lead is the cheapest advantage left in US sales.</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Real Estate', 'Education', 'Financial Services', 'DTC', 'B2B Manufacturing', 'Healthcare'].map((ind) => (
                  <span key={ind} className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#B23E13]" style={{ fontSize: '10px', letterSpacing: '0.08em' }}>{ind}</span>
                ))}
              </div>
            </>
          }
          stats={SALES_MARKET_STATS}
        />

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. In-House SDR Team vs. Freelancer vs. SaaS CRM Add-On"
          lead="Fixed price, full ownership, CRM and ad-platform integration out of the box: the honest comparison."
          pullQuote={{ stat: 'Fixed price', caption: 'AI that qualifies every inbound lead in 60 seconds, books meetings automatically, and pushes to HubSpot or Salesforce. No monthly salary, no sick leave, no coverage gaps. Quoted up front after a free discovery call.' }}
          columns={SALES_COMPARISON_COLUMNS}
          rows={SALES_COMPARISON_ROWS}
          footer="We describe the cost model for the other columns rather than quote numbers for someone else's business, because rep salaries, contractor fees, and per-seat pricing vary too much to be honest about in a table. FactoryJet quotes a fixed price after a scoping call."
        />

        <IndustriesGrid variant="cards" eyebrow="WHO WE BUILD FOR" headline="AI sales agents for every high-lead-volume US industry" lead="Every industry has different lead sources, qualification criteria, and compliance requirements. We build for yours." sectors={SALES_INDUSTRIES} />


        <GetFreeQuoteCTA />
        <TestimonialsSection eyebrow="CLIENT RESULTS" headline="What founders say about working with FactoryJet" />

        <FAQ eyebrow="FREQUENTLY ASKED QUESTIONS" headline="Everything to Know Before You Start" lead="The questions we answer on every AI sales agent discovery call, answered honestly." categories={SALES_FAQ_CATEGORIES} items={SALES_FAQ_ITEMS} />

        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="GET STARTED"
            headline="Book a Free AI Sales Strategy Call"
            sub="Tell us your biggest lead-response challenge. We will map out exactly how an AI sales agent fits your lead sources and CRM, and give you a fixed-price estimate before writing a single line of code."
            primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See AI Agent Services', href: '/services/ai-agent-development' }}
            objectionHandler="Fixed price. Full code ownership. HubSpot + Salesforce + Facebook Ads ready. 500+ businesses served."
          />
        </div>

      </main>

      <SiteFooter locale="us" />
    </>
  );
}
