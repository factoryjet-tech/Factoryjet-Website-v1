import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import FAQ, { type FAQCategory, type FAQItem } from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_MODIFIED = '2026-09-02';

export const metadata: Metadata = {
  title: 'Custom AI SDR Development Services USA | FactoryJet',
  description:
    'Custom AI SDR agent development for US B2B teams. Automate sub-minute speed to lead, CRM qualification, and HubSpot calendar booking. Get a free proposal.',
  keywords: [
    'ai sdr agent',
    'autonomous b2b sales agent',
    'ai lead qualification agent',
    'custom ai sdr development',
    'speed to lead automation',
    'ai sales representative development',
    'b2b lead qualification bot',
    'hubspot ai sdr integration',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Custom AI SDR Development Services USA | FactoryJet',
    description:
      'Build custom autonomous AI SDR agents that qualify inbound leads in sub-60 seconds, enrich firmographic data, and schedule pre-qualified meetings on Account Executive calendars.',
    url: 'https://factoryjet.com/services/ai-sdr-development',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Custom AI SDR Development Services',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom AI SDR Development Services USA | FactoryJet',
    description:
      'Custom AI SDR agents for B2B teams: sub-minute response times, firmographic qualification, calendar booking, and bi-directional HubSpot / Salesforce CRM sync.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-sdr-development',
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
   FAQ DATA
───────────────────────────────────────────────────────────────────────────── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'Speed-to-Lead & Qualification' },
  { key: 'integrations', label: 'CRM, Data & Calendar Sync' },
  { key: 'cadences', label: 'Deliverability & Cadences' },
  { key: 'ownership', label: 'Pricing & Code Ownership' },
  { key: 'workflows', label: 'SDR Workflows & Use Cases' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'basics',
    question: 'What is an AI SDR and how does it accelerate inbound revenue pipeline?',
    answer:
      'An AI SDR (Sales Development Representative) is an autonomous agent that ingests inbound demo requests, contact forms, or chat inquiries, researches prospect company data via enrichment APIs within seconds, conducts conversational email or SMS qualification, and books qualified discovery meetings directly on Account Executive calendars.',
  },
  {
    category: 'basics',
    question: 'How fast does the AI SDR engage inbound sales leads?',
    answer:
      'The AI SDR responds in sub-60 seconds 24/7/365 across email, SMS, and website chat channels, ensuring prospects are engaged while actively researching your solution and eliminating the typical 42-hour industry average response lag. Response starts the instant a webhook fires from your form, chat widget, or ad landing page, including nights, weekends, and holidays when human reps are offline.',
  },
  {
    category: 'basics',
    question: 'What qualification frameworks can the AI SDR execute?',
    answer:
      'We configure the agent to evaluate custom qualification frameworks including BANT (Budget, Authority, Need, Timeline) and MEDDPICC, evaluating company employee size, software tech stack, geographic location, and project urgency before booking a meeting. Your sales leadership defines the exact thresholds and disqualification rules during onboarding, and the agent asks for this information conversationally rather than presenting a static intake form.',
  },
  {
    category: 'basics',
    question: 'Does an AI SDR replace our human Account Executives?',
    answer:
      'No. The AI SDR automates repetitive top-of-funnel administrative tasks: speed-to-lead response, initial qualification questions, objection handling, and scheduling. This delivers high-intent, pre-qualified meetings to experienced Account Executives to conduct deep strategic discovery and close deals. Most teams see AEs reclaim several hours per week previously spent chasing unqualified inbound leads, time they redirect toward live demos and closing conversations with buyers who already meet your ICP criteria.',
  },
  {
    category: 'integrations',
    question: 'Which CRMs does the AI SDR integrate with?',
    answer:
      'We build bi-directional connectors for HubSpot, Salesforce, Pipedrive, and Zoho CRM. The agent logs complete conversation transcripts, updates deal stages, assigns record owners, and populates custom qualification fields automatically. Every write happens in real time through native REST APIs rather than batch syncs, so your CRM reflects the current qualification status the moment a prospect replies, not hours later.',
  },
  {
    category: 'integrations',
    question: 'Which firmographic data enrichment providers are connected?',
    answer:
      'The agent queries Apollo, Clearbit, Clay, or ZoomInfo via secure API calls upon lead ingestion, retrieving employee counts, annual revenue tiers, industry classifications, and installed technologies before formulating personalized messages. You choose which provider to connect during onboarding based on your existing data contracts, and we can also fall back to a secondary provider automatically if the primary lookup returns no match.',
  },
  {
    category: 'integrations',
    question: 'How does calendar scheduling and round-robin AE meeting distribution work?',
    answer:
      "The agent integrates with Google Calendar, Microsoft Outlook, Calendly, or Chili Piper. It checks real-time AE availability and routes meetings based on defined territory, account tier, or balanced round-robin rules with zero scheduling friction. If a prospect's preferred time is unavailable, it offers the next three open slots automatically instead of starting a manual back-and-forth email thread to find one.",
  },
  {
    category: 'integrations',
    question: 'Can the AI SDR qualify leads over SMS and WhatsApp channels?',
    answer:
      'Yes. For high-velocity B2B verticals and local commercial services, the agent initiates conversational SMS or WhatsApp qualification within seconds of form submission, adhering strictly to TCPA opt-in consent regulations. Every text thread logs to the same CRM record as email and chat touches, so an Account Executive sees the full cross-channel conversation history in one place instead of hunting across separate tools.',
  },
  {
    category: 'cadences',
    question: 'How do you prevent AI sales emails from landing in spam folders?',
    answer:
      'We engineer dedicated secondary domain sending pools configured with strict SPF, DKIM, DMARC, and custom tracking domains. All prospect emails undergo automated deliverability checks to ensure bounce rates remain below 1 percent. Your primary corporate domain never touches cold outbound volume, so a spam complaint on an outbound sequence cannot damage the sender reputation your marketing team relies on for newsletters and transactional mail.',
  },
  {
    category: 'cadences',
    question: 'How does the AI SDR handle multi-touch follow-up cadences?',
    answer:
      'Cadences follow strict operational rules: multi-touch follow-ups (typically 3 to 4 touches over 10 business days) pause immediately upon prospect reply, meeting booking, or explicit opt-out signals, preventing spammy follow-up loops. Each touch varies its angle rather than repeating the same message, and the cadence never restarts automatically once a prospect has explicitly declined or gone dormant beyond your defined threshold.',
  },
  {
    category: 'cadences',
    question: 'How does the agent respond to complex technical or pricing objections?',
    answer:
      'The agent is grounded in your sales battlecards, whitepapers, case studies, and compliance documentation. It answers standard technical questions accurately and routes custom commercial contract inquiries directly to senior sales leadership. Because answers are retrieved from your actual source documents rather than generated from general model knowledge, the agent will not improvise a pricing figure or a contractual commitment it cannot verify.',
  },
  {
    category: 'cadences',
    question: 'Can the agent handle out-of-office replies and reschedule requests?',
    answer:
      'Yes. The agent parses out-of-office return dates to automatically reschedule follow-ups, and it reads natural language rescheduling requests (e.g., "I am busy today, can we do next Tuesday at 2pm?"), extracts the new date and time, and rebooks the calendar slot without manual re-entry.',
  },
  {
    category: 'ownership',
    question: 'Who owns the custom AI SDR prompt trees and code infrastructure?',
    answer:
      'You retain 100 percent ownership of the Git repository, custom prompt architectures, API connectors, and evaluation suites. Everything deploys inside your private cloud accounts with zero vendor per-seat licensing fees. If you ever part ways with FactoryJet, the entire codebase, documentation, and evaluation datasets stay in your possession and continue running without any dependency on our infrastructure.',
  },
  {
    category: 'ownership',
    question: 'What is the implementation timeline for a custom AI SDR build?',
    answer:
      'A production-ready AI SDR connecting your lead capture sources, CRM, data enrichment APIs, and calendar tools is fully built, tested, and deployed in 3 to 4 weeks. That timeline covers ICP and qualification logic mapping in week one, connector engineering and deliverability setup in weeks two and three, and evaluation testing against historical leads before we route any live traffic in week four.',
  },
  {
    category: 'ownership',
    question: 'How is the AI SDR evaluated for safety and accuracy prior to launch?',
    answer:
      'We run automated regression evaluation suites across hundreds of historical inbound inquiries and objection scenarios, measuring qualification precision, tone compliance, and tool accuracy before routing live leads. The agent only graduates to production once it clears your minimum accuracy threshold on this test set, and we re-run the same suite after any prompt or connector change to catch regressions before they reach a real prospect.',
  },
  {
    category: 'ownership',
    question: 'How do we schedule a B2B sales automation discovery session?',
    answer:
      'You can schedule a direct 30-minute discovery call with founder Bhavesh Barot. We will review your current lead response workflows, CRM structure, and deliver a fixed-price AI SDR deployment roadmap. There is no sales pitch or discovery-call upsell involved: you leave the call with a concrete scope, a milestone timeline, and a fixed price before you decide whether to move forward.',
  },
  {
    category: 'workflows',
    question: 'How does the AI SDR personalize outbound cold-email sequences instead of sending generic mail-merge blasts?',
    answer:
      'The agent pulls target account lists from Apollo or Clay, enriches each contact with firmographic data and intent signals, then drafts a 3 to 4 touch sequence that references something real about the account, such as a recent funding round, a relevant job posting, or the tools already in their stack, instead of a templated opening line.',
  },
  {
    category: 'workflows',
    question: 'How does the AI SDR decide whether to book a meeting or route an inbound lead to nurture instead?',
    answer:
      'Every inbound lead is scored against your defined ICP thresholds using data gathered during the BANT or MEDDPICC qualification conversation. Leads that clear your minimum budget, authority, and timeline criteria are booked directly onto an Account Executive calendar. Leads that fall short are tagged with the specific reason and routed into a nurture track rather than discarded.',
  },
  {
    category: 'workflows',
    question: "What happens if the AI SDR can't find a mutual meeting time with a qualified prospect?",
    answer:
      'If no slot works within the prospect\'s stated window, the agent offers the next three available times across the assigned Account Executive\'s calendar, and if none of those fit either, it logs the scheduling conflict to the CRM and flags the lead for manual outreach rather than letting the thread go cold.',
  },
  {
    category: 'workflows',
    question: 'What buying signals does the AI SDR monitor for account-based marketing programs?',
    answer:
      'For named target accounts, the agent tracks job postings for roles relevant to your product, executive job changes, funding announcements, and spikes in website visits from the account domain. When a signal crosses a defined threshold, it triggers a tailored outbound sequence or a Slack alert to the assigned Account Executive so outreach happens while the signal is still fresh.',
  },
  {
    category: 'workflows',
    question: 'Can the AI SDR re-engage deals that have gone quiet in HubSpot or Salesforce?',
    answer:
      'Yes. The agent watches deal-stage and last-activity fields directly in your CRM, and once a deal crosses your stale-deal threshold, it drafts a context-aware re-engagement email referencing the original conversation, logs the attempt to the CRM timeline, and flags the deal for Account Executive review if there is still no response after two touches.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD SCHEMAS
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
  '@id': 'https://factoryjet.com/services/ai-sdr-development#service',
  serviceType: 'Custom AI SDR development',
  name: 'Custom AI SDR Development Services',
  description:
    'Custom AI SDR agent development for US B2B teams: autonomous sub-minute speed to lead, firmographic data enrichment, multi-criteria qualification, and automated CRM calendar booking.',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'BusinessAudience',
    name: 'B2B SaaS companies, wholesale distributors, and commercial enterprise sales teams',
  },
};

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet Builds and Deploys a Custom AI SDR Agent',
  description: 'A 4-phase engineering methodology for deploying autonomous B2B sales development agents.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Phase 1: ICP Mapping & Qualification Logic',
      text: 'Define target account profiles, disqualification parameters, objection handling battlecards, and meeting routing rules.',
    },
    {
      '@type': 'HowToStep',
      name: 'Phase 2: CRM, Enrichment & Calendar Connectors',
      text: 'Build secure bi-directional API pipelines into HubSpot or Salesforce, Apollo or Clay enrichment, and calendar booking endpoints.',
    },
    {
      '@type': 'HowToStep',
      name: 'Phase 3: Deliverability Infrastructure & Evaluation Suite',
      text: 'Configure secondary sending pools with strict SPF/DKIM/DMARC protocols and run evaluation suites across historical lead conversations.',
    },
    {
      '@type': 'HowToStep',
      name: 'Phase 4: Live Inbound Routing & Monitoring',
      text: 'Deploy the AI SDR to live web forms and paid campaigns with real-time response latency and meeting qualification tracking.',
    },
  ],
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 3, name: 'AI SDR Development', item: 'https://factoryjet.com/services/ai-sdr-development' },
  ],
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-sdr-development#webpage',
  url: 'https://factoryjet.com/services/ai-sdr-development',
  name: 'Custom AI SDR Development Services USA | FactoryJet',
  description:
    'Custom AI Sales Development Representative (SDR) agent engineering for US B2B and wholesale brands: sub-60s lead response, firmographic enrichment, and calendar booking.',
  dateModified: `${PAGE_MODIFIED}T00:00:00Z`,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
    jobTitle: 'Founder, FactoryJet',
  },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  about: { '@id': 'https://factoryjet.com/services/ai-sdr-development#service' },
};

const STATS = [
  { b: 'Sub-60s', s: 'speed to lead on all inbound inquiries' },
  { b: '7x Lift', s: 'in lead qualification odds within the first hour' },
  { b: 'HubSpot & SFDC', s: 'bi-directional CRM synchronization' },
  { b: '100% Owned', s: 'private Git repo & zero per-seat fees' },
];

export default function AiSdrDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />

      <SiteHeader locale="us" />

      <main className="pp-page">
        {/* HERO SECTION */}
        <section className="pp-hero">
          <div className="pp-hero-grid">
            <div>
              <p className="pp-eyebrow">// AUTONOMOUS B2B REVENUE AGENTS</p>
              <h1 className="pp-h1">
                Custom <span className="pp-grad">AI SDR Agent</span> Development
              </h1>
              <p className="pp-lead">
                Build custom autonomous AI Sales Development Representatives that engage inbound leads in sub-60 seconds, enrich firmographic data, qualify buyers against your ICP, and book meetings on AE calendars.
              </p>
              <HeroInlineForm
                source="services_ai_sdr_development"
                region="us"
                submitLabel="Request AI SDR Architecture Audit"
              />
            </div>

            <div className="pp-hero-card">
              <div className="flex items-center justify-between border-b border-[#E7DED6] pb-3 mb-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F05A28]">
                  Inbound SDR Engine
                </span>
                <span className="text-xs text-[#8C827A]">Enterprise B2B Architecture</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">Speed to Lead:</span>
                  <span className="font-semibold text-[#14110F]">Sub-60 Seconds (24/7/365)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">Data Enrichment:</span>
                  <span className="font-semibold text-[#14110F]">Apollo, Clearbit, Clay</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">CRM Integration:</span>
                  <span className="font-semibold text-[#14110F]">HubSpot, Salesforce</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#46403B]">Licensing Model:</span>
                  <span className="font-semibold text-[#F05A28]">100% Owned (Zero Per-Seat SaaS)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAND */}
        <section className="pp-stat-band">
          <div className="pp-container">
            <ul className="pp-stat-grid">
              {STATS.map((s, idx) => (
                <li key={idx} className="pp-stat-item">
                  <span className="pp-stat-num">{s.b}</span>
                  <span className="pp-stat-label">{s.s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ANSWER-FIRST DEFINITION SECTION */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="pp-card p-6 md:p-8 bg-white border-l-4 border-[#F05A28]">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                Concept Definition: Autonomous AI SDR Agent
              </span>
              <p className="text-base md:text-lg text-[#14110F] leading-relaxed font-medium">
                An AI SDR is an autonomous software system engineered to qualify inbound B2B sales leads in real time. Triggered by web forms, chat, or ad conversions, the agent enriches company firmographics, initiates natural language qualification dialogue, answers technical objections, and books pre-qualified meetings directly onto sales calendars within seconds.
              </p>
            </div>
          </div>
        </section>

        {/* VERIFIED MARKET STATISTICS */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="pp-h2 text-center">Verified B2B Lead Response Research</h2>
              <p className="text-base text-[#46403B] mt-3">
                Empirical benchmarks demonstrating the decisive revenue impact of speed-to-lead and automated qualification.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <li className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">7x</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Higher Qualification Odds</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  Harvard Business Review research found companies that contact an inbound lead within an hour are nearly 7 times more likely to qualify it than those that wait even one hour longer.
                </p>
                <a
                  href="https://hbr.org/2011/03/the-short-life-of-online-sales-leads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: Harvard Business Review &rarr;
                </a>
              </li>

              <li className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">78%</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Buy from First Responder</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  Nearly 80 percent of B2B enterprise software and service buyers purchase from the vendor that responds to their initial inquiry first.
                </p>
                <a
                  href="https://www.insidesales.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: Lead Response Management Study &rarr;
                </a>
              </li>

              <li className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">50%</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Higher Sales Productivity</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  Sales teams automating top-of-funnel qualification generate up to 50 percent more pipeline per Account Executive by eliminating manual outreach.
                </p>
                <a
                  href="https://www.mckinsey.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: McKinsey Sales AI Benchmark &rarr;
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* BENTO GRID OF CAPABILITIES */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="pp-h2 text-center">AI SDR Engineering Architecture</h2>
              <p className="text-base text-[#46403B] mt-3">
                Engineered for enterprise revenue teams demanding sub-minute response speed, deep CRM synchronization, and zero spam risk.
              </p>
            </div>

            <ul className="pp-bento">
              <li className="pp-card pp-bento-wide p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  01 // INSTANT INGESTION &amp; ENRICHMENT
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Real-Time Firmographic Data Enrichment</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Upon receiving a form fill or demo request, the agent immediately queries Apollo, Clearbit, or Clay to append employee count, revenue tier, headquarters, and tech stack details before formulating a personalized qualification reply.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  02 // ICP QUALIFICATION
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Multi-Criteria BANT &amp; MEDDPICC Logic</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Evaluates target budgets, role authority, technical requirements, and buying timelines through natural conversational inquiry rather than static web form interrogations.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  03 // CALENDAR BOOKING
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Direct AE Calendar Scheduling</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Integrates directly with Google Calendar and Microsoft Outlook, enabling qualified buyers to schedule discovery calls instantly with zero back-and-forth email friction.
                </p>
              </li>

              <li className="pp-card pp-bento-wide p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  04 // DELIVERABILITY ENGINEERING
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Secondary Domain Infrastructure &amp; SPF/DKIM/DMARC</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Protect your primary corporate domain reputation. We engineer dedicated secondary sending pools with custom tracking domains, automated warm-up protocols, and deliverability monitoring.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  05 // CRM SYNCHRONIZATION
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Bi-Directional HubSpot &amp; Salesforce Sync</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Updates contact records, sets lifecycle stages, attaches complete conversation transcripts, and assigns deal owners automatically in your CRM.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  06 // PRIVATE CLOUD OWNERSHIP
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Zero Per-Seat SaaS Taxes</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  You own the complete code base and prompt architectures. Deploy on your private AWS or Google Cloud accounts with zero recurring per-user fees.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* SUB-VERTICAL DEEP DIVE: FIVE SDR WORKFLOWS */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-6">
              <h2 className="pp-h2 text-center">Five Ways Revenue Teams Deploy an AI SDR</h2>
              <p className="text-base text-[#46403B] mt-3">
                Generic outbound tools fail once a workflow gets specific. We engineer purpose-built logic for each stage of the pipeline, from first outbound touch to a deal that has gone quiet in the CRM.
              </p>
            </div>

            <p className="text-sm text-[#46403B] text-center max-w-3xl mx-auto mb-12">
              <span className="font-semibold text-[#14110F]">81 percent of B2B sales teams</span> are now experimenting with or have fully implemented AI in their sales process, and AI-adopting teams are 1.3 times more likely to report revenue growth this year.{' '}
              <a
                href="https://www.salesforce.com/news/stories/sales-ai-statistics-2024/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F05A28] font-mono text-xs hover:underline"
              >
                Source: Salesforce State of Sales Report &rarr;
              </a>
            </p>

            <ul className="pp-bento n5">
              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  01 // OUTBOUND COLD-EMAIL SEQUENCING
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Personalized Sequences, Not Mail-Merge Blasts</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-3">
                  Manually building and personalizing outbound sequences at scale is slow, and generic mail-merge blasts get flagged as spam or quietly ignored by the prospects who matter most.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The agent pulls target account lists from Apollo or Clay, enriches each contact with firmographic and intent signals, drafts a personalized 3 to 4 touch sequence that references the account&apos;s actual tech stack or a recent trigger event such as a funding round or job posting, and sends from warmed secondary domains that pause automatically on reply or bounce.
                </p>
                <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none p-0 m-0">
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Apollo/Clay List Building</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Trigger-Event Personalization</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Secondary Domain Warm-Up</li>
                </ul>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  02 // INBOUND LEAD QUALIFICATION
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">BANT and MEDDPICC Scoring on Every Inbound Lead</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-3">
                  Inbound demo requests sit in a queue for hours while reps triage which ones are worth a callback, and a generic web form rarely captures enough detail to prioritize correctly.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The moment a form is submitted, the agent enriches the company through Clearbit, opens a real-time email or chat thread asking targeted BANT or MEDDPICC questions conversationally, scores the lead against your defined ICP thresholds, and either books a meeting directly or routes a not-yet-ready lead into a nurture track.
                </p>
                <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none p-0 m-0">
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Real-Time Clearbit Enrichment</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Conversational BANT/MEDDPICC</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">ICP Threshold Scoring</li>
                </ul>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  03 // MEETING-BOOKING AUTOMATION
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Zero Back-and-Forth Calendar Confirmation</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-3">
                  A back-and-forth email thread trying to find a mutual time slot between a qualified prospect and the right Account Executive burns days and loses the momentum a fast qualification just created.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Once a lead clears qualification, the agent checks live availability across Google Calendar, Outlook, Calendly, or Chili Piper, applies your territory or round-robin routing rules, and confirms a specific meeting slot in the same conversation thread, sending calendar invites and CRM meeting records automatically.
                </p>
                <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none p-0 m-0">
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Chili Piper Round-Robin Routing</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Real-Time Calendar Availability</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Automatic Invite &amp; CRM Logging</li>
                </ul>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  04 // ACCOUNT-BASED MARKETING SIGNALS
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Named-Account Signal Detection for ABM Programs</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-3">
                  Target account lists sit static in a spreadsheet while buying signals, a champion changing jobs, a competitor mention, a hiring surge, go unnoticed until it is too late to act on them.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The agent continuously monitors named target accounts for signals such as job postings for relevant roles, executive job changes, funding announcements, or website visit spikes, then triggers a tailored outbound sequence or a Slack alert to the assigned Account Executive the moment a signal crosses a defined threshold.
                </p>
                <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none p-0 m-0">
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Named-Account Signal Monitoring</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Job-Change &amp; Funding Triggers</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">AE Slack Alerting</li>
                </ul>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  05 // CRM-TRIGGERED FOLLOW-UP
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Reactivating Deals That Have Gone Quiet</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-3">
                  Deals stall in HubSpot or Salesforce because no one owns the job of re-engaging a prospect who went quiet 45 days ago, and manually running that report every week rarely happens consistently.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The agent watches deal-stage and last-activity fields directly inside HubSpot or Salesforce. Once a deal crosses your stale-deal threshold, it drafts a context-aware re-engagement email referencing the original conversation, logs the attempt to the CRM timeline, and flags the deal for AE review if there is still no response after two touches.
                </p>
                <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none p-0 m-0">
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">HubSpot/Salesforce Field Triggers</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Context-Aware Re-Engagement</li>
                  <li className="px-2.5 py-1 rounded bg-[#FAFAF7] border border-[#E7DED6]">Stale-Deal Reactivation</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* MID-PAGE CTA */}
        <MidPageCTA
          headline="Not sure which SDR workflow to build first?"
          sub="Tell us where leads are slipping today, outbound, inbound triage, or deals gone quiet in the CRM, and we'll map the build order that fits your pipeline."
          label="Get my SDR build order"
        />

        {/* COMPARISON MATRIX */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="pp-h2 text-center">B2B Sales Development Approaches Compared</h2>
              <p className="text-base text-[#46403B] mt-3">
                Compare custom AI SDR development against expensive per-seat SaaS tools and junior human SDR teams.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Evaluation Criteria</th>
                    <th>Custom AI SDR (FactoryJet)</th>
                    <th>Per-Seat AI SDR SaaS Tools</th>
                    <th>Junior Human SDR Team</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tr-me">
                    <td className="font-bold">Speed to Inbound Lead</td>
                    <td className="font-semibold text-[#F05A28]">Sub-60 seconds 24/7/365</td>
                    <td>2 to 15 minutes (Queue dependent)</td>
                    <td>4 to 42 hours average lag</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Licensing &amp; Seat Fees</td>
                    <td className="font-semibold text-[#14110F]">$0 / month (Pay only token compute)</td>
                    <td>$2,000 to $5,000 / user / month</td>
                    <td>$75k+ salary, commission &amp; benefits</td>
                  </tr>
                  <tr className="tr-me">
                    <td className="font-bold">CRM &amp; Database Integration</td>
                    <td className="font-semibold text-[#F05A28]">Bi-directional custom REST/GraphQL</td>
                    <td>Generic CSV/Zapier connectors</td>
                    <td>Manual CRM record updating</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Turnover &amp; Ramp Time</td>
                    <td className="font-semibold text-[#14110F]">Zero turnover, 3-4 week build</td>
                    <td>Zero turnover, rigid vendor UI</td>
                    <td>3-month ramp, 14-month avg tenure</td>
                  </tr>
                  <tr className="tr-me">
                    <td className="font-bold">Data Privacy &amp; VPC Perimeter</td>
                    <td className="font-semibold text-[#F05A28]">Private VPC / Zero-Data-Retention</td>
                    <td>Shared vendor cloud database</td>
                    <td>Internal employee device access</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQS SECTION */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Questions revenue operations leaders ask about AI SDR agents"
          lead="Everything revenue operations leaders need to know about AI SDR engineering, deliverability, and CRM integration."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* FINAL CTA */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="pp-card p-8 md:p-12 bg-white border border-[#F05A28]/20 text-center max-w-4xl mx-auto">
              <p className="pp-eyebrow">// READY TO SCALE INBOUND PIPELINE?</p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#14110F] mb-4">
                Schedule a 30-Minute AI SDR Architecture Review
              </h2>
              <p className="text-base text-[#46403B] max-w-2xl mx-auto mb-8">
                Speak directly with founder Bhavesh Barot. We will audit your current lead qualification funnels, evaluate CRM data flows, and provide a fixed-price AI SDR implementation roadmap.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#F05A28] text-white font-semibold text-sm hover:bg-[#D8441A] transition-colors shadow-sm"
                >
                  Book Strategy Call via Calendly &rarr;
                </a>
                <ModalCTAButton
                  label="Request AI SDR Proposal"
                  region="us"
                  btnVariant="secondary-light"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
