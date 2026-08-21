import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import HeroInlineForm from '@/components/HeroInlineForm';
import AiAgentRoiCalculator from '@/components/ai-agent/AiAgentRoiCalculator';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

/* ─────────────────────────────────────────────────────────────────────────────
   Freshness signal. Bumped 2026-08-21 for full PAGE-SPEC v2 rebuild.
───────────────────────────────────────────────────────────────────────────── */
const PAGE_MODIFIED = '2026-08-21';

export const metadata: Metadata = {
  title: 'AI Sales & SDR Agents for US Businesses | FactoryJet',
  description:
    'Custom AI sales agents that engage inbound leads in under 60 seconds, qualify buyers, book meetings to rep calendars, and update HubSpot or Salesforce.',
  keywords: [
    'ai sales agents',
    'ai sales agent usa',
    'ai sdr development',
    'speed to lead automation',
    'ai lead qualification agent',
    'hubspot ai sales agent',
    'salesforce ai sales agent',
    'conversational ai sales development',
    'inbound lead automation',
    'automated meeting booking ai',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Sales & SDR Agents for US Businesses | FactoryJet',
    description:
      'Custom AI sales agents that qualify inbound prospects in under 60 seconds, book demos, and sync conversation logs into HubSpot or Salesforce.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent',
    images: [
      {
        url: 'https://factoryjet.com/images/us/services/hero-ai-agent-us.webp',
        width: 1200,
        height: 800,
        alt: 'FactoryJet AI Sales Agent Development Services',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Sales Agents USA | FactoryJet',
    description:
      'Turn cold response lag into instant demo bookings. Custom AI SDRs integrated with HubSpot, Salesforce, and Facebook Lead Ads.',
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
   FAQ Data (18 Answer-First items mapping to real search intent)
───────────────────────────────────────────────────────────────────────────── */
const SALES_FAQ_CATEGORIES = [
  { key: 'basics', label: 'AI Sales Basics' },
  { key: 'leads', label: 'Lead Handling & Speed' },
  { key: 'crm', label: 'CRM & Channels' },
  { key: 'control', label: 'Control & Escalation' },
  { key: 'process', label: 'Process & Ownership' },
];

const SALES_FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'What is an AI sales agent and how does it work?',
    answer:
      'An AI sales agent is software that engages new inbound prospects within 60 seconds across email, SMS, website chat, or ad form triggers. It asks discovery and qualification questions, checks buyer fit against your ideal customer profile, proposes available calendar slots, and writes the complete structured conversation summary into your CRM.',
  },
  {
    category: 'basics',
    question: 'How is an AI sales agent different from standard CRM marketing automation?',
    answer:
      'CRM marketing automation sends static drip emails on fixed delays regardless of buyer replies. An AI sales agent conducts two-way conversational discovery: interpreting specific buyer questions, handling objections, adapting qualification paths dynamically, and booking confirmed meetings directly in the thread.',
  },
  {
    category: 'basics',
    question: 'What qualification criteria can the AI sales agent evaluate?',
    answer:
      'The agent can qualify prospects based on budget, purchase timeline, project scope, team size, current technology stack, geography, and decision-maker role. Leads meeting your threshold are routed to senior account executives, while unqualified inquiries receive helpful resources or alternative recommendations.',
  },
  {
    category: 'basics',
    question: 'Does the AI sales agent hallucinate product specifications or pricing?',
    answer:
      'No. The agent is grounded in your verified product documentation, sales collateral, and pricing matrix via Retrieval Augmented Generation (RAG). When asked about unlisted customizations or enterprise terms, it acknowledges the parameter and flags the conversation for account executive review.',
  },
  {
    category: 'leads',
    question: 'Why is speed to lead critical for US sales operations?',
    answer:
      'The Lead Response Management study established that responding to an inbound lead within 5 minutes yields 21 times higher qualification odds than responding at 30 minutes. The Harvard Business Review audit of 2,241 US companies revealed the average human response took 42 hours. AI closes that gap by responding in seconds, 24/7.',
  },
  {
    category: 'leads',
    question: 'How does the AI handle Facebook, Instagram and Google lead ads?',
    answer:
      'The agent connects to Meta and Google lead ad webhooks. When a prospect submits an ad form, the agent sends a personalized email or SMS within 45 seconds to initiate qualification while buyer intent is at its peak.',
  },
  {
    category: 'leads',
    question: 'Can the AI agent book meetings directly to rep calendars?',
    answer:
      'Yes. The agent integrates with Google Calendar, Microsoft 365 Outlook, and Calendly. Once a prospect qualifies, the agent presents open times in their timezone, confirms selection, sends the calendar invite with video link, and logs the scheduled meeting in your CRM.',
  },
  {
    category: 'leads',
    question: 'What happens when a lead goes quiet mid-conversation?',
    answer:
      'The agent executes automated re-engagement sequences at 24 hours, 3 days, and 7 days. These messages reference the specific topic discussed, reactivating 20% to 25% of stalled inbound inquiries without rep time.',
  },
  {
    category: 'crm',
    question: 'Which CRMs do you integrate with?',
    answer:
      'We integrate natively with HubSpot, Salesforce, Pipedrive, Close, Zoho CRM, and Freshsales. The agent creates contacts, updates deal stages, assigns owners, and logs full conversation briefs with score tags.',
  },
  {
    category: 'crm',
    question: 'Can the sales agent qualify prospects in Spanish?',
    answer:
      'Yes. The agent detects language automatically and converses fluently in English or Spanish. When writing the final CRM brief for your team, it translates the notes into English so your sales team operates seamlessly.',
  },
  {
    category: 'crm',
    question: 'Can the agent generate Stripe payment links for immediate closes?',
    answer:
      'Yes. For transactional sales, deposit collections, or paid discovery sessions, the agent generates secure Stripe checkout links directly in chat or email, logging the transaction once paid.',
  },
  {
    category: 'control',
    question: 'When does the AI escalate a conversation to a human sales rep?',
    answer:
      'The agent hands off when: a lead qualifies and requests a live discussion, a custom contract or pricing discount is requested, or the prospect expresses urgency. The sales rep receives a complete Slack or email alert with the lead brief.',
  },
  {
    category: 'control',
    question: 'How does the system ensure TCPA and CAN-SPAM compliance in the US?',
    answer:
      'We build strict consent verification, time-of-day calling windows, and automated opt-out processing directly into SMS and email workflows to comply with TCPA and CAN-SPAM regulations.',
  },
  {
    category: 'control',
    question: 'Can reps take over an ongoing AI conversation seamlessly?',
    answer:
      'Yes. Reps can view live conversation streams in HubSpot or your helpdesk and pause the AI with one click to take over manually at any moment.',
  },
  {
    category: 'process',
    question: 'How long does an AI sales agent implementation take?',
    answer:
      'A standard inbound qualification and meeting-booking agent is deployed in 2 to 4 weeks. This includes ICP mapping, CRM field configuration, evaluation testing against historical lead logs, and team walkthrough.',
  },
  {
    category: 'process',
    question: 'What is required from our team to begin development?',
    answer:
      'We need your ideal customer profile criteria, top qualifying questions, CRM access, communication channel credentials (Twilio or email inbox), and sales battle cards or product brochures.',
  },
  {
    category: 'process',
    question: 'Do we own the agent codebase and prompts?',
    answer:
      'Yes. You receive full ownership of the source code, custom MCP tools, prompt templates, and evaluation datasets. There are no vendor lock-in fees or ongoing software subscriptions to FactoryJet.',
  },
  {
    category: 'process',
    question: 'How do you test qualification accuracy before go-live?',
    answer:
      'We run the agent through a benchmark test suite of 150+ historical inbound leads, scoring qualification accuracy, objection handling, and routing precision against your best human SDR performance.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schemas
───────────────────────────────────────────────────────────────────────────── */
const SALES_FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: SALES_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const SALES_SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent#service',
  serviceType: 'AI sales agent development',
  name: 'Custom AI Sales & SDR Agent Development',
  description:
    'Custom AI sales agents for US businesses that respond to inbound leads within 60 seconds, qualify prospects against your ideal customer profile, book meetings, and update HubSpot or Salesforce.',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'BusinessAudience',
    name: 'US B2B sales teams, real estate brokerages, agencies, and high-ticket service companies',
  },
};

const SALES_WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent#webpage',
  url: 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent',
  name: 'AI Sales & SDR Agents for US Businesses | FactoryJet',
  description:
    'Custom AI sales agents that qualify inbound prospects in under 60 seconds, book demos, and sync conversation logs into HubSpot or Salesforce.',
  dateModified: PAGE_MODIFIED,
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
};

const SALES_BREADCRUMB_ITEMS = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
  { name: 'AI Sales Agent', url: 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent' },
];

const SALES_BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: SALES_BREADCRUMB_ITEMS.map((b, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: b.name,
    item: b.url,
  })),
};

const STATS = [
  { b: '21×', s: 'higher qualification rate answering leads in 5 min vs. 30 min' },
  { b: '< 60s', s: 'inbound response time across email, SMS and web forms' },
  { b: '+35%', s: 'average increase in booked demos within 60 days' },
  { b: 'Full ownership', s: 'you own the code, prompts and CRM connectors' },
];

const SOURCED_STATS = [
  {
    v: '42 hrs',
    d: 'was the average first response time across 2,241 US companies surveyed, allowing competitors to capture ready buyers.',
    src: 'Harvard Business Review',
    href: 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads',
  },
  {
    v: '21×',
    d: 'higher odds of qualifying a lead when you respond within 5 minutes compared to a 30-minute response lag.',
    src: 'Lead Response Management Study (Oldroyd)',
    href: 'https://www.leadresponsemanagement.org/lrm_study/',
  },
  {
    v: '61.1%',
    d: 'of US residents who speak a non-English language at home speak Spanish, making bilingual lead qualification essential.',
    src: 'US Census Bureau, ACS Report',
    href: 'https://www.census.gov/newsroom/press-releases/2023/language-at-home-acs-5-year.html',
  },
];

const CAPABILITIES = [
  {
    t: 'Sub-60-Second Inbound Response',
    d: 'Engages prospects the moment they submit a form, Facebook lead ad, or email inquiry while purchase intent is at its highest point.',
  },
  {
    t: 'Multi-Factor Lead Qualification',
    d: 'Evaluates budget, timeline, use case, and decision authority conversationally, routing qualified buyers directly to account executives.',
  },
  {
    t: 'Automated Calendar Booking',
    d: 'Presents open time slots in the prospect timezone, confirms appointments, and schedules Google Meet or Zoom invites automatically.',
  },
  {
    t: 'CRM Field Synchronization',
    d: 'Updates lead stages, assigns custom tags, logs structured discovery notes, and populates deal records in HubSpot or Salesforce.',
  },
  {
    t: 'Multi-Touch Re-Engagement',
    d: 'Executes timed follow-ups at 24 hours, 3 days, and 7 days for prospects who went quiet, reactivating stalled pipeline opportunities.',
  },
  {
    t: 'Bilingual Qualification (EN & ES)',
    d: 'Converses fluently in English and Spanish based on prospect preference, writing unified English briefs to your sales CRM.',
  },
];

const INDUSTRIES = [
  {
    name: 'Real Estate & Brokerages',
    desc: 'Qualifies buyer and tenant leads from Zillow, Realtor.com, and Facebook ads on budget, location, and pre-approval status, booking showings automatically.',
  },
  {
    name: 'B2B Manufacturing & Distribution',
    desc: 'Captures dealer inquiries, verifies order volume and account terms, shares specification PDFs, and routes qualified RFQs to territorial sales managers.',
  },
  {
    name: 'Financial Services & Lending',
    desc: 'Screens loan applicants, insurance quotes, and advisory inquiries for income and credit profile eligibility with strict TCPA compliance.',
  },
  {
    name: 'High-Ticket DTC Brands',
    desc: 'Engages high-intent shoppers, answers sizing and compatibility questions, recovers abandoned carts, and generates direct checkout links.',
  },
  {
    name: 'Professional Services & Agencies',
    desc: 'Screens prospective client inquiries on scope, budget tier, and launch timeline, booking discovery calls directly on partner calendars.',
  },
  {
    name: 'SaaS & Technology Companies',
    desc: 'Engages demo requests instantly, verifies seat count and tech stack compatibility, and books product walkthroughs to round-robin SDR queues.',
  },
];

const STEPS = [
  {
    n: '01',
    t: 'Lead Source & ICP Mapping',
    d: 'We map your lead acquisition channels, qualification criteria, disqualification triggers, and sales rep routing rules.',
  },
  {
    n: '02',
    t: 'Sales Script & Collateral RAG',
    d: 'We ingest your product brochures, case studies, pricing structures, and top sales objection answers into the knowledge layer.',
  },
  {
    n: '03',
    t: 'CRM & Tool Layer Integration',
    d: 'We connect HubSpot or Salesforce, Twilio, SendGrid, and calendar booking APIs with scoped authentication and logging.',
  },
  {
    n: '04',
    t: '150-Lead Simulation & Tuning',
    d: 'We benchmark the agent against 150 real historical lead transcripts to ensure qualification and tone match your best SDR.',
  },
  {
    n: '05',
    t: 'Live Rollout & Conversion Tracking',
    d: 'We deploy the agent live, configure conversion dashboards, and monitor qualification rates for continuous optimization.',
  },
];

export default function AISalesAgentPage() {
  return (
    <>
      <script id="sales-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SALES_FAQ_SCHEMA) }} />
      <script id="sales-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SALES_SERVICE_SCHEMA) }} />
      <script id="sales-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SALES_WEBPAGE_SCHEMA) }} />
      <script id="sales-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SALES_BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        <Breadcrumbs items={SALES_BREADCRUMB_ITEMS} />

        {/* Hero Section */}
        <section className="pp-dotgrid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(40px,5vh,72px)', paddingBottom: 'clamp(44px,6vh,84px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">AI sales &amp; SDR agents // US operations</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '19ch' }}>
                  Qualify inbound leads and <span className="pp-grad">book demos in 60 seconds</span>.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '52ch' }}>
                  FactoryJet builds custom AI sales agents for US sales teams. We connect your inbound ad forms, email, SMS, and CRM into an autonomous SDR that engages prospects immediately, qualifies buyer intent, and books meetings directly on your reps&apos; calendars.
                </p>
                <HeroInlineForm source="us_ai_sales_agent_hero" region="us" submitLabel="Scope your sales agent" />
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/us/services/hero-ai-agent-us.webp"
                  alt="Sales team reviewing an AI SDR qualification pipeline dashboard"
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
              An AI sales agent is software that conducts two-way qualification conversations with new inbound prospects across email, SMS, website chat, and ad forms. Rather than sending static automated emails that sit unread, an AI SDR engages prospects immediately, answers product questions, scores buyer intent against your criteria, and schedules qualified discovery calls.
            </p>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '74ch' }}>
              The agent integrates directly with HubSpot, Salesforce, or Pipedrive, writing complete conversation transcripts and qualification notes into your CRM. Your account executives spend their working hours closing qualified buyers rather than chasing unverified lead lists.
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
            <h2 style={{ marginTop: '10px' }}>The mathematical advantage of instant lead response</h2>
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

        {/* Interactive ROI Calculator Section */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <AiAgentRoiCalculator defaultWorkflow="sales" source="ai_sales_agent_page" />
          </div>
        </section>

        {/* Capabilities Bento Grid */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// capabilities'}</p>
            <h2 style={{ marginTop: '10px' }}>What your AI sales agent handles</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              Built for revenue teams. Every action is executed through verified APIs with strict boundary controls.
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

        {/* Industry Use-Cases */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// industry workflows'}</p>
            <h2 style={{ marginTop: '10px' }}>Tailored to your industry qualification criteria</h2>
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

        {/* Comparison Table */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// comparison'}</p>
            <h2 style={{ marginTop: '10px' }}>Custom AI SDR vs. traditional alternatives</h2>
            <div style={{ marginTop: '28px', overflowX: 'auto' }}>
              <table className="pp-table" style={{ width: '100%', minWidth: '640px' }}>
                <thead>
                  <tr>
                    <th>Capability</th>
                    <th className="me">FactoryJet Custom AI SDR</th>
                    <th>In-House SDR Team</th>
                    <th>Generic CRM Automation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td><strong>Cost Model</strong></td>
                    <td><strong>Fixed implementation build</strong></td>
                    <td>Salary, commission and recruiting overhead</td>
                    <td>Monthly per-seat subscription</td>
                  </tr>
                  <tr>
                    <td><strong>Speed to Inbound Lead</strong></td>
                    <td>Under 60 seconds (24/7/365)</td>
                    <td>Hours to days depending on schedule</td>
                    <td>Instant template email (one-way)</td>
                  </tr>
                  <tr>
                    <td><strong>Two-Way Conversational Discovery</strong></td>
                    <td>Yes (adapts to answers dynamically)</td>
                    <td>Yes (manual execution)</td>
                    <td>No (fixed branch logic)</td>
                  </tr>
                  <tr>
                    <td><strong>Direct Calendar Booking in Thread</strong></td>
                    <td>Yes (Google, Outlook, Calendly)</td>
                    <td>Manual link back-and-forth</td>
                    <td>Static link in email footer</td>
                  </tr>
                  <tr>
                    <td><strong>Full CRM Brief &amp; Scoring</strong></td>
                    <td>Yes (HubSpot &amp; Salesforce)</td>
                    <td>Manual rep data entry</td>
                    <td>Basic activity logging</td>
                  </tr>
                  <tr>
                    <td><strong>Code &amp; Prompt Ownership</strong></td>
                    <td>Yes (you own the repository)</td>
                    <td>Internal scripts</td>
                    <td>Locked in proprietary SaaS</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Implementation Journey */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// implementation process'}</p>
            <h2 style={{ marginTop: '10px' }}>From lead audit to live AI SDR in 3 weeks</h2>
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
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// verified proof'}</p>
            <h2 style={{ marginTop: '10px' }}>Built for revenue teams that value speed</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pp-card" style={{ padding: '28px' }}>
                <p className="font-fj-body text-[1rem] leading-relaxed text-fj-neutral-700 italic">
                  &ldquo;Responding to our inbound wholesale inquiries within seconds changed our conversion numbers overnight. Inquiries that used to sit until morning are now qualified and booked on our calendar before competitors even see the lead.&rdquo;
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

              <div className="pp-card" style={{ padding: '28px' }}>
                <p className="font-fj-body text-[1rem] leading-relaxed text-fj-neutral-700 italic">
                  &ldquo;Our customer acquisition cost dropped because our paid ad leads get worked immediately. The AI qualifies budget and timeline, and our account executives only speak to prospects ready to move forward.&rdquo;
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
          headline="Questions sales leaders ask before deploying AI SDRs"
          lead="Everything you need to know about qualification logic, CRM integrations, safety guardrails and ownership."
          categories={SALES_FAQ_CATEGORIES}
          items={SALES_FAQ_ITEMS}
        />

        {/* Final CTA */}
        <FinalCTA
          eyebrow="READY TO CLOSE THE SPEED-TO-LEAD GAP?"
          headline="Scope your custom AI sales agent today."
          sub="Book a 30-minute discovery call with our engineering team. We will map your inbound lead channels, audit your qualification logic, and provide a fixed-price implementation blueprint."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'View AI Agent Overview', href: '/services/ai-agent-development' }}
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
