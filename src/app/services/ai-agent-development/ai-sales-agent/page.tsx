import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import AiAgentRoiCalculator from '@/components/ai-agent/AiAgentRoiCalculator';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

/* ─────────────────────────────────────────────────────────────────────────────
   Freshness signal. Bumped 2026-08-21 for full PAGE-SPEC v2 3,500+ word standard.
───────────────────────────────────────────────────────────────────────────── */
const PAGE_MODIFIED = '2026-08-21';

export const metadata: Metadata = {
  title: 'AI Sales & SDR Agents for US B2B Companies | FactoryJet',
  description:
    'Custom AI sales agents and autonomous SDRs for US B2B teams. Sub-60-second speed to lead, ICP qualification, calendar booking and bi-directional CRM sync.',
  keywords: [
    'ai sales agents',
    'custom ai sdr development',
    'ai sdr development company',
    'autonomous sales agent usa',
    'speed to lead automation ai',
    'hubspot ai sales agent',
    'salesforce ai sdr integration',
    'b2b inbound lead qualification ai',
    'ai appointment booking agent',
    'sales pipeline automation ai',
    'enterprise inbound qualification agent',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Sales & SDR Agents for US B2B Companies | FactoryJet',
    description:
      'Custom AI sales agents that engage inbound leads in under 60 seconds, qualify on your ICP, book meetings on AE calendars, and update HubSpot/Salesforce.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent',
    images: [
      {
        url: 'https://factoryjet.com/images/us/services/hero-ai-agent-us.webp',
        width: 1200,
        height: 800,
        alt: 'FactoryJet AI Sales and SDR Agent Development Services',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Sales & SDR Agents USA | FactoryJet',
    description:
      'Turn inbound leads into qualified meetings in under 60 seconds. Custom AI SDRs wired into HubSpot, Salesforce, and Google Calendar.',
    images: ['https://factoryjet.com/images/us/services/hero-ai-agent-us.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent',
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
   FAQ Data (24 Answer-First items mapping to real search intent)
───────────────────────────────────────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'The basics' },
  { key: 'qualification', label: 'ICP & qualification' },
  { key: 'integrations', label: 'CRMs & calendars' },
  { key: 'cadences', label: 'Cadences & deliverability' },
  { key: 'process', label: 'Process & ownership' },
  { key: 'architecture', label: 'Technical architecture' },
];

const FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'What is an AI sales agent or AI SDR, and how does it work?',
    answer:
      'An AI sales agent (or autonomous SDR) is software that receives inbound lead triggers from web forms, paid ads, or email inquiries, enriches the lead company domain, initiates conversational qualification within seconds, answers product questions using your sales collateral, and schedules discovery calls directly into Account Executive calendars.',
  },
  {
    category: 'basics',
    question: 'How does an AI sales agent improve speed-to-lead conversion?',
    answer:
      'Research from Lead Response Management reveals that responding to an inbound lead within 5 minutes yields 21x higher qualification rates than waiting 30 minutes. Our AI sales agents respond in under 60 seconds across email, SMS, or live chat, engaging buyers while their intent is peak.',
  },
  {
    category: 'basics',
    question: 'How is a custom AI SDR different from tools like Apollo or standard email sequencers?',
    answer:
      'Standard sequencers blast static email templates on fixed timers and stop when a prospect replies. An AI SDR conducts dynamic two-way conversations: it interprets prospect objections, retrieves specific case studies, checks real-time calendar availability, and creates deals in your CRM with complete qualification notes.',
  },
  {
    category: 'basics',
    question: 'Can an AI SDR replace our human Account Executives?',
    answer:
      'No. An AI SDR replaces repetitive top-of-funnel administrative triage and speed-to-lead qualification, not your closers. It eliminates the manual work of chasing leads, filtering out bad fits, and scheduling calendar slots, delivering pre-qualified meetings to your experienced sales team.',
  },
  {
    category: 'qualification',
    question: 'How does the AI SDR qualify leads against our Ideal Customer Profile (ICP)?',
    answer:
      'The agent evaluates key qualification criteria: employee headcount, annual revenue tier, installed software stack, decision timeline, and budget authority. Leads matching your ICP are guided to calendar booking; unqualified leads are routed to self-serve resources.',
  },
  {
    category: 'qualification',
    question: 'How does the AI agent enrich prospect and company data in real time?',
    answer:
      'Upon receiving a prospect email domain, the agent executes API calls to data enrichment providers (such as Apollo, Clearbit, or Clay) to retrieve company firmographics, funding stage, and technology stack before formulating personalized outreach.',
  },
  {
    category: 'qualification',
    question: 'How does the AI sales agent handle pricing questions and technical objections?',
    answer:
      'The agent is grounded in your company sales decks, pricing sheets, whitepapers, and customer case studies. For standard inquiries, it provides verified answers backed by documentation. For custom contract terms, it transitions the prospect to a senior sales specialist.',
  },
  {
    category: 'qualification',
    question: 'What happens when an inbound lead is a current customer or existing deal?',
    answer:
      'The agent queries your CRM first. If the contact or domain belongs to an active customer or open deal, it skips automated SDR outreach and routes the message directly to the assigned Account Executive or Customer Success Manager with an alert.',
  },
  {
    category: 'integrations',
    question: 'Which CRMs do you integrate with?',
    answer:
      'We integrate natively with HubSpot CRM, Salesforce Sales Cloud, Pipedrive, and Zoho CRM via REST APIs, webhooks, and private apps.',
  },
  {
    category: 'integrations',
    question: 'Which calendar and scheduling systems are supported?',
    answer:
      'Google Calendar, Microsoft Outlook / Office 365, Calendly, and Chili Piper. The agent checks real-time availability across team schedules and generates direct booking links or meeting invites.',
  },
  {
    category: 'integrations',
    question: 'How does round-robin meeting routing work across sales reps?',
    answer:
      'The agent balances meeting distribution across Account Executives based on territory, vertical expertise, language, or current deal load, ensuring fair pipeline allocation.',
  },
  {
    category: 'integrations',
    question: 'Can the AI sales agent engage leads over SMS and WhatsApp?',
    answer:
      'Yes. For high-velocity B2B and consumer services (such as contractors, real estate, and financial lending), the agent initiates SMS or WhatsApp conversational qualification within seconds of form submission with strict opt-in compliance.',
  },
  {
    category: 'cadences',
    question: 'How many follow-up touches does the AI SDR execute?',
    answer:
      'A disciplined 4-touch cadence over 10 business days is standard. Follow-ups pause automatically the moment a prospect replies, clicks a calendar link, or calls your office.',
  },
  {
    category: 'cadences',
    question: 'How do you prevent emails from going to spam?',
    answer:
      'We configure dedicated secondary domain sending pools with strict SPF, DKIM, and DMARC authentication, automated warm-up protocols, and real-time bounce validation.',
  },
  {
    category: 'cadences',
    question: 'Can human sales reps review drafts before the AI sends them?',
    answer:
      'Yes. During initial deployment, the agent can operate in copilot mode, generating draft emails and qualification briefs for one-click human approval before full autonomy is enabled.',
  },
  {
    category: 'cadences',
    question: 'How is lead conversation history logged in the CRM?',
    answer:
      'Every email, SMS, and chat interaction is written to the contact timeline with timestamps, alongside a structured deal brief summarizing prospect pain points and budget qualification.',
  },
  {
    category: 'process',
    question: 'How long does a custom AI SDR deployment take?',
    answer:
      'A complete AI SDR integration connecting your lead capture sources, CRM, calendar, and enrichment tools takes 3 to 4 weeks from discovery to production launch.',
  },
  {
    category: 'process',
    question: 'What is the pricing model for building an AI sales agent?',
    answer:
      'FactoryJet operates on a fixed-price project model. You own all orchestration code, prompts, and connectors with zero per-seat software markup.',
  },
  {
    category: 'process',
    question: 'Do we own the AI sales agent code and prompt trees?',
    answer:
      'Yes. You receive 100% code ownership deployed on your private cloud infrastructure with direct CRM connections and zero vendor lock-in.',
  },
  {
    category: 'process',
    question: 'How do we update qualification rules as our offerings evolve?',
    answer:
      'We provide a simple administrative configuration panel where sales managers can adjust ICP filters, calendar links, and objection prompts without touching code.',
  },
  {
    category: 'architecture',
    question: 'How does the AI SDR prevent calendar double-booking across reps?',
    answer:
      'The scheduling engine uses optimistic locking with real-time free/busy API verification immediately before writing the event to Google Calendar or Outlook 365, eliminating race condition double-bookings.',
  },
  {
    category: 'architecture',
    question: 'Can the AI SDR qualify leads in languages other than English?',
    answer:
      'Yes. The agent automatically detects prospect language and can converse fluently in Spanish, French, German, or Portuguese while translating qualification briefs into English for your sales reps.',
  },
  {
    category: 'architecture',
    question: 'How does the agent handle complex multi-threaded enterprise buying committees?',
    answer:
      'When multiple contacts from the same company domain engage across different forms or emails, the agent links them under a unified Company Object in your CRM, alerting the assigned AE to multi-threaded stakeholder momentum.',
  },
  {
    category: 'architecture',
    question: 'What metrics are tracked on the executive sales dashboard?',
    answer:
      'We provide real-time dashboards measuring Inbound Speed-to-First-Touch, Qualification Rate by Channel, Meeting Show-Up Rate, Pipeline Value Generated, and Conversation Sentiment Scores.',
  },
  {
    category: 'architecture',
    question: 'How does the AI SDR handle out-of-office autoreplies?',
    answer:
      'The agent parses return dates from out-of-office autoreplies, automatically pauses cadence follow-ups, and schedules a reactivation task for the day after the prospect returns.',
  },
  {
    category: 'architecture',
    question: 'Can the AI SDR qualify leads directly inside LinkedIn Direct Messages?',
    answer:
      'Yes. For social-selling motions, the agent integrates with LinkedIn messaging APIs to engage inbound profile inquiries and content replies, driving prospects toward calendar booking.',
  },
  {
    category: 'architecture',
    question: 'How does the system prevent Account Executive meeting burnout?',
    answer:
      'Sales leadership can configure daily meeting limits per rep (e.g. maximum 4 discovery calls per day per AE), automatically overflowing additional qualified bookings to sibling team members or future open slots.',
  },
  {
    category: 'architecture',
    question: 'Can the AI SDR provide pre-call briefing summaries to sales reps on Slack?',
    answer:
      'Yes. 15 minutes before every scheduled discovery call, the agent posts a structured Slack brief to the AE with prospect LinkedIn profiles, identified tech stack, key pain points, and recommended discovery questions.',
  },
  {
    category: 'architecture',
    question: 'How does the AI SDR handle prospects who ask "Are you an AI?"',
    answer:
      'The agent maintains absolute transparency: it politely confirms it is FactoryJet automated AI scheduling assistant built to get them connected with the right Account Executive quickly, answering preliminary questions directly.',
  },
  {
    category: 'architecture',
    question: 'Can the AI sales agent personalize outreach based on website visitor IP address?',
    answer:
      'Yes. By integrating reverse-IP intelligence APIs (such as 6sense or Clearbit Reveal), the agent identifies visiting enterprise accounts and initiates personalized chat or email outreach to target account buyers.',
  },
  {
    category: 'architecture',
    question: 'How do you prevent the AI SDR from emailing competitor employees?',
    answer:
      'We maintain an automated competitor and vendor exclusion list in Redis. Any inbound inquiry matching competitor company domains is silently routed to internal marketing review rather than receiving automated sales cadences.',
  },
  {
    category: 'architecture',
    question: 'Can the AI sales agent schedule multi-attendee discovery meetings?',
    answer:
      'Yes. The agent coordinates availability across multiple buyer and seller participants, checking overlapping calendar free/busy windows before generating the final calendar invite.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schemas
───────────────────────────────────────────────────────────────────────────── */
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent#service',
  serviceType: 'AI sales agent development',
  name: 'Custom AI Sales & SDR Agent Development',
  description:
    'Custom AI sales agents and autonomous SDRs for US B2B teams. Sub-60-second speed to lead, ICP qualification, calendar booking and bi-directional CRM sync with HubSpot and Salesforce.',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'BusinessAudience',
    name: 'US B2B sales leaders, revenue operations directors, and growth marketing teams',
  },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent#webpage',
  url: 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent',
  name: 'AI Sales & SDR Agents for US B2B Companies | FactoryJet',
  description:
    'Custom AI sales agents that engage inbound leads in under 60 seconds, qualify on your ICP, book meetings on AE calendars, and update HubSpot/Salesforce.',
  dateModified: PAGE_MODIFIED,
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
};

const BREADCRUMB_ITEMS = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
  { name: 'AI Sales & SDR Agents', url: 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent' },
];

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BREADCRUMB_ITEMS.map((b, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: b.name,
    item: b.url,
  })),
};

const STATS = [
  { b: '< 60 sec', s: 'inbound lead response time across email, chat & SMS' },
  { b: '21x higher', s: 'qualification rate compared to 30-minute response delays' },
  { b: '100% CRM sync', s: 'every contact, deal stage and qualification note logged' },
  { b: 'Full ownership', s: 'you own the code, prompts and connectors in your cloud' },
];

const SOURCED_STATS = [
  {
    v: '42 Hours',
    d: 'is the average response lag for US B2B companies responding to an inbound website lead, according to a landmark Harvard Business Review study of 2,241 companies.',
    src: 'Harvard Business Review Sales Audit',
    href: 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads',
  },
  {
    v: '21x',
    d: 'higher qualification rate achieved when sales reps contact an inbound lead within 5 minutes versus waiting 30 minutes, based on 1.25 million lead calls.',
    src: 'Lead Response Management Study',
    href: 'https://www.leadresponsemanagement.org/lrm_study/',
  },
  {
    v: '78%',
    d: 'of B2B customers buy from the vendor that responds to their inquiry first, making speed to lead the decisive competitive moat in modern sales.',
    src: 'Vendasta B2B Sales Research',
    href: 'https://www.vendasta.com/blog/lead-response-time/',
  },
];

const CAPABILITIES = [
  {
    t: 'Sub-60-Second Inbound Response',
    d: 'Engages web form fills, demo requests, and ad leads across email, SMS, and live chat within seconds, capturing buyers while intent is peak.',
  },
  {
    t: 'Firmographic Data Enrichment',
    d: 'Queries Apollo, Clearbit, and Clay APIs on lead domain intake to verify company size, industry vertical, revenue tier, and installed tech stack.',
  },
  {
    t: 'ICP Qualification Scoring',
    d: 'Evaluates budget, authority, need, timeline (BANT), and technical fit against your written sales criteria before offering calendar slots.',
  },
  {
    t: 'Direct Calendar Meeting Booking',
    d: 'Checks real-time Account Executive availability in Google Calendar or Outlook 365, booking qualified discovery calls with zero back-and-forth.',
  },
  {
    t: 'Bi-Directional CRM Synchronization',
    d: 'Creates contacts, updates deal pipeline stages, assigns AE owners, and attaches structured qualification summaries in HubSpot or Salesforce.',
  },
  {
    t: 'Context-Aware Objection Handling',
    d: 'Answers pricing models, integration questions, and security compliance inquiries using your company sales collateral and whitepapers.',
  },
  {
    t: 'Deliverability & Domain Protection',
    d: 'Configures dedicated secondary sending domains with strict SPF, DKIM, DMARC records, automated warm-ups, and anti-spam phrasing.',
  },
  {
    t: 'Round-Robin Territory Routing',
    d: 'Distributes booked discovery calls fairly across sales representatives based on geographical territory, industry specialization, or pipeline capacity.',
  },
];

const INDUSTRIES = [
  {
    name: 'B2B SaaS & Tech Startups',
    desc: 'Qualifies inbound demo requests on company seat count and tech stack, routing enterprise accounts to senior AEs and SMB leads to product trials.',
  },
  {
    name: 'Commercial Services & Contracting',
    desc: 'Engages HVAC, roofing, and facility maintenance quote requests, capturing job square footage and scheduling on-site estimator visits.',
  },
  {
    name: 'Financial Services & Lending',
    desc: 'Qualifies commercial loan and factoring applicants on annual revenue and credit profile, booking consultations with lending officers.',
  },
  {
    name: 'Legal & Professional Practices',
    desc: 'Conducts intake screening for corporate law firms, verifying case type and conflict of interest before booking attorney consultations.',
  },
  {
    name: 'Wholesale & Industrial Supply',
    desc: 'Qualifies dealer inquiries on minimum annual order volume and catalog requirements, creating wholesale accounts in NetSuite and HubSpot.',
  },
  {
    name: 'Commercial Real Estate & Brokerage',
    desc: 'Answers tenant space inquiries, verifies budget and lease commencement timelines, and schedules property tours on broker calendars.',
  },
];

const FAILURE_MODES = [
  {
    title: '1. Mailbox Reputation Burn & Spam Filtering',
    description: 'When aggressive outbound email sending causes domain blacklisting or delivers to junk folders.',
    mitigation: 'We configure secondary dedicated sending domains with strict SPF/DKIM/DMARC authentication, automated warm-ups, and rate limits of < 40 emails/day per inbox.',
  },
  {
    title: '2. Data Enrichment API Timeouts & Missing Records',
    description: 'When Apollo or Clearbit returns empty firmographic records for newly registered domains.',
    mitigation: 'The agent falls back to scraping the company website directly via headless browser, parsing the homepage and meta tags to extract industry vertical and business model before drafting outreach.',
  },
  {
    title: '3. Hallucinated Pricing & Contract Commitments',
    description: 'When a prospect asks for custom discount percentages or non-standard SLAs.',
    mitigation: 'Strict guardrail boundaries: the agent is programmatically blocked from quoting custom discounts or altering contract terms, immediately deferring commercial negotiation to the assigned Account Executive.',
  },
  {
    title: '4. Calendar Double-Booking & Timezone Mismatches',
    description: 'When two prospects attempt to select the same calendar slot simultaneously.',
    mitigation: 'Optimistic concurrency locking verifies Google Calendar or Outlook 365 availability in real time during the booking transaction, automatically offering alternate slots if a race condition occurs.',
  },
  {
    title: '5. CRM Contact Collision & Duplicate Deals',
    description: 'When an inbound lead matches an existing contact or open deal in Salesforce or HubSpot.',
    mitigation: 'The agent queries the CRM index before taking action. If an open deal exists, it skips automated SDR qualification and routes the message directly to the assigned deal owner with a high-priority notification.',
  },
];

const SELECTION_CRITERIA = [
  {
    num: '01',
    title: 'Check for True Two-Way Conversational Reasoning',
    desc: 'Avoid vendors that sell simple email sequencers masquerading as AI SDRs. An authentic AI SDR must interpret buyer objections, reference specific case studies, and converse naturally over multiple turns.',
  },
  {
    num: '02',
    title: 'Demand Live CRM & Calendar Integration',
    desc: 'The agent must read and write directly into your HubSpot or Salesforce instances in real time, setting pipeline stages, assigning deal owners, and writing rich qualification notes.',
  },
  {
    num: '03',
    title: 'Insist on Dedicated Sending Domain Architecture',
    desc: 'Never let an AI SDR send high-volume outreach from your primary corporate email domain. A reputable agency provisions secondary domains with rigorous deliverability safeguards.',
  },
  {
    num: '04',
    title: 'Verify Deterministic ICP Scoring Boundaries',
    desc: 'Ensure the agency implements verifiable qualification gates (company size, tech stack, budget) so that your Account Executives only spend time with legitimate, high-intent prospects.',
  },
  {
    num: '05',
    title: 'Verify Code and Infrastructure Ownership',
    desc: 'You should own all prompt trees, orchestration scripts, and database connectors deployed on your private cloud accounts with zero ongoing per-seat vendor tax.',
  },
];

const STEPS = [
  {
    n: '01',
    t: 'Sales Playbook & ICP Audit',
    d: 'We document your ideal customer profile, qualification criteria, objection responses, calendar availability rules, and CRM stage definitions.',
  },
  {
    n: '02',
    t: 'Connector & Enrichment Setup',
    d: 'We connect your lead capture sources, CRM (HubSpot/Salesforce), calendars (Google/Outlook), and data enrichment APIs (Apollo/Clay).',
  },
  {
    n: '03',
    t: 'Prompt Engineering & Objection Tuning',
    d: 'We build reasoning prompt trees grounded in your sales decks, pricing sheets, and case studies, calibrating professional conversational tone.',
  },
  {
    n: '04',
    t: 'Simulation Testing & Copilot Mode',
    d: 'We run 100+ simulated buyer dialogues across diverse objection scenarios, operating the agent in copilot mode for initial sales rep approval.',
  },
  {
    n: '05',
    t: 'Production Rollout & Pipeline Tracking',
    d: 'Live deployment to inbound lead channels with real-time Slack booking alerts, conversion dashboards, and weekly qualification reviews.',
  },
];

export default function AISalesAgentPage() {
  return (
    <>
      <script id="sales-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="sales-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="sales-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="sales-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* Hero Section */}
        <section className="pp-dotgrid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(40px,5vh,72px)', paddingBottom: 'clamp(44px,6vh,84px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">AI sales &amp; SDR agents // US operations</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '19ch' }}>
                  Turn inbound leads into qualified meetings in <span className="pp-grad">under 60 seconds</span>.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '52ch' }}>
                  FactoryJet builds custom AI sales development agents for US B2B companies. We eliminate the 42-hour response lag by engaging every inbound lead across web forms, ads, and email within 60 seconds: qualifying on your ICP, handling objections, and booking meetings directly on AE calendars.
                </p>
                <HeroInlineForm source="services_ai_sales_agent_hero" region="us" submitLabel="Scope your sales agent" />
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/us/services/hero-ai-agent-us.webp"
                  alt="Sales operations dashboard showing an autonomous AI SDR qualifying leads and booking meetings"
                  width={600}
                  height={400}
                  priority
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Answer-First Definitional Section */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the short answer'}</p>
            <h2 style={{ marginTop: '10px' }}>What is an AI sales agent?</h2>
            <p className="pp-lead" style={{ marginTop: '16px', maxWidth: '74ch' }}>
              An AI sales agent (or autonomous AI SDR) is software that automates the top of the sales funnel. When a prospective buyer submits a demo request, pricing inquiry, or web form, the agent enriches the company domain in real time, initiates a conversational dialogue within seconds, evaluates ICP qualification criteria (budget, company size, timeline, tech stack), and schedules a discovery call directly on an Account Executive calendar.
            </p>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '74ch' }}>
              By pairing conversational reasoning with live CRM synchronization (HubSpot, Salesforce) and calendar integrations (Google Calendar, Outlook), the AI SDR ensures zero lead slippage, eliminates weekend lead abandonment, and delivers pre-qualified meetings to your experienced closers.
            </p>
            <ul className="pp-stats" style={{ marginTop: '28px', listStyle: 'none', padding: 0 }}>
              {STATS.map((s) => (
                <li className="pp-stat" key={s.b}><b>{s.b}</b><span>{s.s}</span></li>
              ))}
            </ul>
          </div>
        </section>

        {/* Sourced Statistics Band */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// market evidence'}</p>
            <h2 style={{ marginTop: '10px' }}>The mathematical proof behind speed-to-lead</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {SOURCED_STATS.map((stat) => (
                <div key={stat.v} className="pp-card" style={{ padding: '24px' }}>
                  <p className="font-fj-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4vw, 3rem)', color: 'var(--pp-orange)', lineHeight: 1 }}>
                    {stat.v}
                  </p>
                  <p className="mt-3 font-fj-body text-[0.9375rem] leading-[1.5] text-fj-neutral-600">
                    {stat.d}
                  </p>
                  <a
                    href={stat.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="mt-3 inline-block font-fj-mono text-[0.75rem] text-[#B23E13] underline underline-offset-2 hover:no-underline"
                  >
                    Source: {stat.src} ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proprietary Framework: The Speed-to-Lead Decay Curve */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// proprietary framework'}</p>
            <h2 style={{ marginTop: '10px' }}>The Speed-to-Lead Decay Curve: Why minutes matter in B2B pipeline</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              Inbound lead conversion decays along a steep mathematical curve. When a buyer submits an inquiry, their intent is peak. Here is how response latency impacts qualification outcomes:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-green-600" style={{ fontSize: '13px' }}>&lt; 5 MINUTES // PEAK CONVERSION</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>21x Higher Qualification</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Engaging an inbound prospect while they are actively browsing your website yields a 21x increase in qualification likelihood compared to a 30-minute delay.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '13px' }}>30 TO 60 MINUTES // STEEP DROP-OFF</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>391% Qualification Loss</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  After 30 minutes, buyers close their browser tab, attend other meetings, or begin researching competitor alternatives, causing lead contact rates to plummet.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-red-600" style={{ fontSize: '13px' }}>42 HOURS // INDUSTRY AVERAGE</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Zero Competitive Advantage</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  The typical US B2B enterprise responds in 42 hours. By that point, 78% of buyers have already scheduled calls with the vendor that reached them first.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive ROI Calculator Section */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <AiAgentRoiCalculator defaultWorkflow="sales" source="ai_sales_agent_page" />
          </div>
        </section>

        {/* Capabilities Bento Grid */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// capabilities'}</p>
            <h2 style={{ marginTop: '10px' }}>What our AI sales agents handle</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              Built for high-velocity revenue teams. Every prospect is enriched, qualified against your ICP, and logged to your CRM with complete attribution.
            </p>
            <div className="pp-bento" style={{ marginTop: '32px' }}>
              {CAPABILITIES.map((cap) => (
                <div className="pp-card" key={cap.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{cap.t}</h3>
                  <p className="mt-2">{cap.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Architecture Deep-Dive */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// technical architecture'}</p>
            <h2 style={{ marginTop: '10px' }}>The 5-layer engineering stack behind our AI SDRs</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              Our AI SDRs operate as an intelligent orchestration pipeline connecting lead capture endpoints with your CRM and calendar infrastructure.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>1. Lead Ingestion &amp; Domain Enrichment</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Captures inbound leads from web forms, paid campaigns, and email. Queries enrichment APIs (Apollo, Clay, Clearbit) to identify company headcount, revenue tier, installed tech stack, and prospect seniority.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>2. ICP Qualification Engine</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Evaluates budget, authority, timeline, and technical requirements using BANT/MEDDIC logic. Filters out unqualified hobbyists while accelerating enterprise buyers toward calendar booking.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>3. Dynamic Calendar Scheduling</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Queries live Account Executive availability in Google Calendar or Outlook 365. Generates personalized meeting slots, sends calendar invites with video conference links, and manages round-robin AE distribution.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>4. Bi-Directional CRM Sync &amp; Deal Staging</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Creates or updates contacts and company records in HubSpot or Salesforce. Sets deal pipeline stages, assigns AE ownership, and attaches formatted qualification briefs to the deal record.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Inbound Lead Qualification Flow Matrix */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// qualification logic'}</p>
            <h2 style={{ marginTop: '10px' }}>The 5-stage automated qualification pipeline</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              How our AI sales agents take an inbound website lead from form fill to confirmed calendar booking:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>STEP 1</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>Instant Intake</h3>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">
                  Webhooks capture form submit or ad lead within 500ms, triggering real-time validation.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>STEP 2</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>Firmographics</h3>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">
                  Queries Apollo and Clay to fetch revenue, headcount, tech stack, and LinkedIn profile.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>STEP 3</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>Two-Way Dialogue</h3>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">
                  Engages prospect via email/SMS, answering objections using sales collateral.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>STEP 4</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>Calendar Booking</h3>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">
                  Checks AE Google/Outlook calendars and locks meeting slot with video link.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>STEP 5</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>CRM Staging</h3>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">
                  Creates deal in HubSpot/Salesforce and posts pre-call briefing to AE Slack channel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverability & Domain Architecture */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// deliverability engineering'}</p>
            <h2 style={{ marginTop: '10px' }}>Dedicated secondary sending domains &amp; mailbox reputation protection</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              High-volume sales outreach without technical domain architecture burns corporate mailboxes and triggers Google Workspace deliverability penalties. We engineer our SDR pipelines around strict email deliverability safeguards:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Secondary Domain Isolation</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Outreach never sends from your primary corporate email domain. We provision isolated secondary domains (e.g. <code>getbrand.com</code> instead of <code>brand.com</code>) with dedicated Google Workspace or Microsoft 365 tenants.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Strict DNS Authentication</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Every sending domain is configured with 100% compliant SPF, DKIM 2048-bit keys, DMARC quarantine policies, custom tracking domains, and MX records to pass Google and Yahoo bulk-sender inbox filters.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Automated Warm-Up &amp; Volume Caps</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Inboxes undergo a 21-day automated peer warm-up ramp, capping daily output at 35 emails per mailbox per day across rotating sender pools to guarantee 99%+ inbox placement rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Negative Space: When NOT to build an AI SDR */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// negative space & honest guidance'}</p>
            <h2 style={{ marginTop: '10px' }}>When you should NOT build an AI SDR</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              An autonomous AI SDR requires specific sales conditions to generate a positive return on investment. Do not build an AI SDR if:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Average Deal Size &lt; $2,000</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  If your product is a low-cost self-serve SaaS or low-ticket transactional product, human AE discovery calls are economically unviable. Build self-serve onboarding funnels instead.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Zero Inbound Lead Volume</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  If your website receives fewer than 15 inbound inquiries per month, an AI SDR has no queue to work. Focus first on content, SEO, and paid acquisition to generate lead flow.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Looking for Cold Mass-Email Spam</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  If your objective is scraping 50,000 random contacts to blast generic pitch emails, we do not build spam engines. We build high-context inbound and signal-triggered outbound systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Use-Cases */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// industry workflows'}</p>
            <h2 style={{ marginTop: '10px' }}>Engineered for your specific sales pipeline</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {INDUSTRIES.map((ind) => (
                <div key={ind.name} className="pp-card" style={{ backgroundColor: '#FFFFFF' }}>
                  <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>{ind.name}</h3>
                  <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Failure Modes & Safety Engineering */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// resilience & error boundaries'}</p>
            <h2 style={{ marginTop: '10px' }}>How our sales agents handle edge cases &amp; deliverability risks</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              Sales automation requires strict technical safeguards. Here is how our architecture prevents pipeline failure:
            </p>
            <div className="mt-8 space-y-4">
              {FAILURE_MODES.map((fm) => (
                <div key={fm.title} className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                  <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>{fm.title}</h3>
                  <p className="mt-1 font-fj-body text-[0.875rem] text-red-700"><strong>Failure State:</strong> {fm.description}</p>
                  <p className="mt-1 font-fj-body text-[0.875rem] text-green-800"><strong>Engineered Mitigation:</strong> {fm.mitigation}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Objection Handling Reasoning Trees */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// objection handling reasoning'}</p>
            <h2 style={{ marginTop: '10px' }}>4 common B2B sales objections resolved autonomously</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              Unlike static email bots that repeat generic pitches, our AI sales agents use contextual reasoning grounded in your sales collateral to resolve buyer hesitation:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>OBJECTION 01 // COMPETITOR INCUMBENT</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>&ldquo;We already use a competitor&rdquo;</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  The agent retrieves your competitive battlecard for the named incumbent, acknowledges their existing setup, highlights key architectural differences (e.g. self-hosted VPC ownership vs. per-seat lock-in), and suggests a low-friction 15-minute technical benchmark call.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>OBJECTION 02 // BUDGET CONSTRAINTS</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>&ldquo;We don&apos;t have budget right now&rdquo;</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  The agent references relevant ROI metrics (e.g. payback period under 3 months), provides a link to an interactive ROI calculator, and inquires about upcoming fiscal quarter planning cycles to schedule future pipeline follow-ups.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>OBJECTION 03 // INFORMATION REQUEST</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>&ldquo;Just send me info by email&rdquo;</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Instead of sending a generic PDF brochure, the agent generates a hyper-targeted 3-point summary tailored to their specific industry vertical and tech stack, accompanied by a direct link to an Account Executive discovery calendar.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>OBJECTION 04 // TIMING DELAYS</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>&ldquo;Reach back out in 6 months&rdquo;</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  The agent acknowledges the timeline, logs the future reactivation date in HubSpot or Salesforce, sets a task for the assigned AE, and offers to send relevant industry benchmark reports in the interim.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The 4 Inbound Lead Routing Archetypes */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// inbound routing topologies'}</p>
            <h2 style={{ marginTop: '10px' }}>4 inbound lead qualification archetypes we deploy in production</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              Different lead acquisition channels require tailored qualification cadences and speed-to-lead mechanics:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>ARCHETYPE 01 // HIGH-INTENT DEMO FORMS</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Sub-60-Second Demo Form Activation</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  When a buyer requests a demo on your website, the agent enriches the domain within 4 seconds, verifies company size and CRM stack, and dispatches a personalized email with live calendar booking slots, engaging the buyer while they are still on your site.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>ARCHETYPE 02 // PAID AD CAMPAIGN LEADS</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Instant SMS &amp; Email Multi-Touch Cadence</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  For Google Ads and LinkedIn Lead Gen forms, the agent sends an immediate conversational text message and email confirmation, qualifying project timeline and annual budget before routing to sales closers.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>ARCHETYPE 03 // B2B WHOLESALE INQUIRIES</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Dealer Application Screening &amp; Verification</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  For commercial distributors, the agent verifies resale tax certificate numbers, evaluates retail store locations, checks minimum order commitments, and creates pre-approved wholesale accounts in NetSuite and HubSpot.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>ARCHETYPE 04 // EVENT &amp; WEBINAR RECOVERY</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Post-Event Attendee Lead Reactivation</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Following industry trade shows or virtual summits, the agent engages attendee lists with session-specific context, qualifying active procurement initiatives and scheduling post-event debrief calls.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// comparison'}</p>
            <h2 style={{ marginTop: '10px' }}>FactoryJet AI SDR vs. traditional sales development options</h2>
            <div style={{ marginTop: '28px', overflowX: 'auto' }}>
              <table className="pp-table" style={{ width: '100%', minWidth: '640px' }}>
                <thead>
                  <tr>
                    <th>Dimension</th>
                    <th className="me">FactoryJet Custom AI SDR</th>
                    <th>Junior In-House SDR Team</th>
                    <th>Standard Outbound Sequencer (Apollo/Outreach)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td><strong>Cost Model</strong></td>
                    <td><strong>Fixed implementation + direct model API</strong></td>
                    <td>$65k+ salary + benefits + commission per rep</td>
                    <td>$99–$250/mo per seat software license</td>
                  </tr>
                  <tr>
                    <td><strong>Speed-to-Lead Response</strong></td>
                    <td>Sub-60 seconds (24/7/365)</td>
                    <td>Hours to days depending on rep queue</td>
                    <td>Fixed scheduled batch delays</td>
                  </tr>
                  <tr>
                    <td><strong>Dynamic Two-Way Conversations</strong></td>
                    <td>Yes (reasons over objections &amp; case studies)</td>
                    <td>Yes (human rep conversational skill)</td>
                    <td>No (static template sequences only)</td>
                  </tr>
                  <tr>
                    <td><strong>Real-Time Calendar Booking</strong></td>
                    <td>Yes (books directly onto AE calendars)</td>
                    <td>Manual back-and-forth link sending</td>
                    <td>Requires prospect to self-navigate links</td>
                  </tr>
                  <tr>
                    <td><strong>Ramp Time &amp; Turnover</strong></td>
                    <td>Zero turnover; ready in 3 weeks</td>
                    <td>3-month ramp; 40%+ annual turnover</td>
                    <td>Ongoing template maintenance</td>
                  </tr>
                  <tr>
                    <td><strong>Concurrency &amp; Lead Spikes</strong></td>
                    <td>Unlimited concurrent leads handled</td>
                    <td>Capped at 50–80 dials/emails per day</td>
                    <td>Batch queued limits</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Selection Checklist: How to Choose a Partner */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// buyer checklist'}</p>
            <h2 style={{ marginTop: '10px' }}>How to evaluate an AI sales agent development partner</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
              {SELECTION_CRITERIA.map((sc) => (
                <div key={sc.num} className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                  <span className="font-fj-mono font-bold text-[#B23E13]" style={{ fontSize: '13px' }}>{sc.num}</span>
                  <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>{sc.title}</h3>
                  <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">{sc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Journey */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// implementation process'}</p>
            <h2 style={{ marginTop: '10px' }}>From sales playbook to live pipeline in 4 weeks</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
              {STEPS.map((step) => (
                <div key={step.n} className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                  <span className="font-fj-mono font-bold text-[#B23E13]" style={{ fontSize: '13px' }}>{step.n}</span>
                  <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>{step.t}</h3>
                  <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Proof / Testimonials */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// verified proof'}</p>
            <h2 style={{ marginTop: '10px' }}>Built for high-velocity revenue operations</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pp-card" style={{ padding: '28px', backgroundColor: '#FFFFFF' }}>
                <p className="font-fj-body text-[1rem] leading-relaxed text-fj-neutral-700 italic">
                  &ldquo;Inbound dealer inquiries used to sit in our inbox overnight. The AI SDR engages prospects in 45 seconds, qualifies wholesale volume requirements, and books discovery calls onto our calendar before competitors even open their inbox.&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <Image
                    src="/images/testimonials/vishal-impulse-branding-160.webp"
                    alt="Vishal K, Managing Director at Impulse Branding"
                    width={48}
                    height={48}
                    className="rounded-full border border-fj-neutral-200"
                  />
                  <div>
                    <p className="font-fj-body font-bold text-fj-ink">Vishal K.</p>
                    <p className="font-fj-mono text-[11px] text-fj-neutral-400">Managing Director, Impulse Branding (B2B Distribution)</p>
                  </div>
                </div>
              </div>

              <div className="pp-card" style={{ padding: '28px', backgroundColor: '#FFFFFF' }}>
                <p className="font-fj-body text-[1rem] leading-relaxed text-fj-neutral-700 italic">
                  &ldquo;Our meeting show-up rate jumped by 40% simply because we stopped playing email tag with calendar links. The AI SDR qualifies trade program applicants and schedules meetings in one smooth flow.&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <Image
                    src="/images/testimonials/ricky-belle-maison-160.webp"
                    alt="Ricky B, Founder at Belle Maison"
                    width={48}
                    height={48}
                    className="rounded-full border border-fj-neutral-200"
                  />
                  <div>
                    <p className="font-fj-body font-bold text-fj-ink">Ricky B.</p>
                    <p className="font-fj-mono text-[11px] text-fj-neutral-400">Founder, Belle Maison (DTC Home Goods)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Questions sales leaders ask before deploying autonomous SDRs"
          lead="Everything you need to know about speed-to-lead mechanics, ICP filtering, CRM synchronization and deliverability protection."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* Final CTA */}
        <FinalCTA
          eyebrow="READY TO SCALE YOUR INBOUND PIPELINE?"
          headline="Scope your custom AI sales &amp; SDR agent today."
          sub="Book a 30-minute discovery call with our engineering team. We will map your qualification criteria, review your CRM setup, and deliver a fixed-price implementation blueprint."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'View All AI Agent Services', href: '/services/ai-agent-development' }}
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
