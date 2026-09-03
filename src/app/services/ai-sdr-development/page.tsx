import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import FAQ, { type FAQCategory, type FAQItem } from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL_URL = 'https://factoryjet.com/services/ai-sdr-development';
const PAGE_MODIFIED = '2026-09-03';

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI SDR Development', url: CANONICAL_URL },
];

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
    url: CANONICAL_URL,
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
    canonical: CANONICAL_URL,
    languages: {
      'en-US': CANONICAL_URL,
      'x-default': CANONICAL_URL,
    },
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
    question: 'What is an AI SDR, and how does it speed up your sales pipeline?',
    answer:
      'An AI SDR is software that handles your first response to a new lead. When someone fills out a demo request, contact form, or chat message, the AI SDR looks up the company in seconds. It then asks qualifying questions by email or text. If the lead is a good fit, it books a meeting straight onto an Account Executive\'s calendar.',
  },
  {
    category: 'basics',
    question: 'How fast does the AI SDR engage inbound sales leads?',
    answer:
      'The AI SDR responds in under 60 seconds, 24 hours a day, every day of the year. It works across email, text message, and website chat. The moment a form, chat widget, or ad page sends a signal, the agent starts working. That includes nights, weekends, and holidays, when your human reps are offline.',
  },
  {
    category: 'basics',
    question: 'What qualification frameworks can the AI SDR execute?',
    answer:
      'We set up the agent to follow the qualification method you already use. Two common ones are BANT (Budget, Authority, Need, Timeline) and MEDDPICC. The agent checks company size, the tools they already use, their location, and how soon they plan to buy. Your sales leaders set the exact rules during onboarding. The agent asks for this information through natural conversation, not a static form.',
  },
  {
    category: 'basics',
    question: 'Does an AI SDR replace our human Account Executives?',
    answer:
      'No. The AI SDR handles repetitive early-stage tasks: replying fast, asking qualifying questions, handling simple objections, and booking the meeting. This means your Account Executives only see leads that are already a good fit. Most teams find their AEs get back several hours a week that used to go to chasing bad leads. They spend that time on demos and closing deals instead.',
  },
  {
    category: 'integrations',
    question: 'Which CRMs does the AI SDR integrate with?',
    answer:
      'We build two-way connections into HubSpot, Salesforce, Pipedrive, and Zoho CRM. The agent logs the full conversation, updates the deal stage, assigns the record owner, and fills in your custom fields automatically. Every update happens in real time through the CRM\'s own API, not a batch import. So your CRM shows the current status the moment a prospect replies, not hours later.',
  },
  {
    category: 'integrations',
    question: 'Which data enrichment tools does the AI SDR use to research a company?',
    answer:
      'The moment a lead comes in, the agent looks the company up through Apollo, Clearbit, Clay, or ZoomInfo. These tools return employee count, revenue range, industry, and the software the company already uses. You pick the provider based on your existing data contract. We can also set up a second provider as backup, in case the first lookup finds nothing.',
  },
  {
    category: 'integrations',
    question: 'How does calendar scheduling and round-robin AE meeting distribution work?',
    answer:
      "The agent connects to Google Calendar, Microsoft Outlook, Calendly, or Chili Piper. It checks which Account Executive is free right now, then books the meeting by territory, account size, or a simple rotation you set. If the prospect's first choice of time is taken, the agent offers the next three open slots right away. No email back-and-forth needed.",
  },
  {
    category: 'integrations',
    question: 'Can the AI SDR qualify leads over SMS and WhatsApp channels?',
    answer:
      'Yes. For fast-moving B2B teams and local service businesses, the agent can text or WhatsApp a lead within seconds of a form being submitted. It follows TCPA rules, the US law that governs text message consent, at every step. Every text thread logs to the same CRM record as email and chat. So an Account Executive sees the whole conversation in one place, not scattered across different tools.',
  },
  {
    category: 'cadences',
    question: 'How do you prevent AI sales emails from landing in spam folders?',
    answer:
      "We send outbound email from a dedicated secondary domain, not your main company domain. That domain is set up with SPF, DKIM, and DMARC records. These are technical checks email providers use to confirm a sender is legitimate. We monitor bounce rates and keep them under 1 percent. Your main domain never touches cold outbound, so a spam complaint on a sales email can't hurt the reputation your marketing team relies on.",
  },
  {
    category: 'cadences',
    question: 'How does the AI SDR handle multi-touch follow-up cadences?',
    answer:
      'A cadence is a set sequence of follow-up messages. It usually runs 3 to 4 touches over about 10 business days. It stops right away the moment a prospect replies, books a meeting, or asks to opt out. Each message takes a different angle instead of repeating the last one. A cadence never restarts on its own once someone has said no or gone quiet past your set limit.',
  },
  {
    category: 'cadences',
    question: 'How does the agent respond to complex technical or pricing objections?',
    answer:
      "The agent answers questions using your own sales materials: battlecards, whitepapers, case studies, and compliance documents. It handles standard technical questions on its own. For a custom pricing or contract question, it routes the conversation straight to your senior sales team. Because every answer comes from your real documents, not general guesswork, the agent won't invent a price or a promise it can't back up.",
  },
  {
    category: 'cadences',
    question: 'Can the agent handle out-of-office replies and reschedule requests?',
    answer:
      'Yes. When it gets an out-of-office reply, the agent reads the return date and reschedules the follow-up on its own. It also understands plain requests like "I am busy today, can we do Tuesday at 2pm instead?" It pulls out the new date and time and rebooks the meeting itself. No one has to type it in by hand.',
  },
  {
    category: 'ownership',
    question: "Who owns the AI SDR's code and prompts once it's built?",
    answer:
      'You do, completely. That covers the Git code repository, the prompt designs, every API connection, and the test suite we use to check accuracy. Everything runs inside your own private cloud account, with no per-seat license fees to a vendor. If you ever leave FactoryJet, the full codebase and documentation stay with you. It keeps running with no dependency on us.',
  },
  {
    category: 'ownership',
    question: 'What is the implementation timeline for a custom AI SDR build?',
    answer:
      'A working AI SDR, connected to your lead sources, CRM, data tools, and calendar, takes 3 to 4 weeks from start to finish. Week one covers mapping your ideal customer and qualification rules. Weeks two and three cover building the connections and setting up email deliverability. Week four is testing against real past leads, before we send it any live traffic.',
  },
  {
    category: 'ownership',
    question: 'How is the AI SDR evaluated for safety and accuracy prior to launch?',
    answer:
      "We run the agent through hundreds of real past inquiries and objections before it goes live. We measure how accurately it qualifies leads, whether its tone matches your brand, and whether it uses the right tool at the right time. It only goes live once it clears the accuracy bar you set. We run the same test again after any change, so a small fix can't quietly break something else.",
  },
  {
    category: 'ownership',
    question: 'How do we schedule a B2B sales automation discovery session?',
    answer:
      "You can book a direct 30-minute call with founder Bhavesh Barot. We'll look at how your team responds to leads today, review your CRM setup, and hand you a fixed-price roadmap for the build. There's no sales pitch and no upsell. You leave the call with a clear scope, a timeline, and a firm price, then decide if you want to move forward.",
  },
  {
    category: 'workflows',
    question: 'How does the AI SDR personalize cold emails instead of sending generic blasts?',
    answer:
      "The agent pulls a target account list from Apollo or Clay. It looks up each contact's company details and buying signals, then drafts a 3 to 4 touch sequence. Each message points to something real about the account, a recent funding round, a new job posting, or a tool already in their stack, instead of opening with a generic template line.",
  },
  {
    category: 'workflows',
    question: 'How does the AI SDR decide whether to book a meeting or hold off?',
    answer:
      "Every inbound lead gets scored against your Ideal Customer Profile (ICP), using answers gathered during the BANT or MEDDPICC conversation. A lead that clears your minimum budget, authority, and timeline bar goes straight onto an Account Executive's calendar. A lead that falls short gets tagged with the exact reason and moved into a nurture track instead of dropped.",
  },
  {
    category: 'workflows',
    question: "What happens if the AI SDR can't find a mutual meeting time with a qualified prospect?",
    answer:
      "If nothing works within the time the prospect asked for, the agent offers the next three open slots on the assigned Account Executive's calendar. If none of those fit either, it logs the scheduling conflict in the CRM and flags the lead for a person to follow up by hand, instead of letting the conversation go cold.",
  },
  {
    category: 'workflows',
    question: 'What buying signals does the AI SDR track for target accounts?',
    answer:
      'For accounts on your target list, the agent watches for job postings that match your product. It also tracks executive job changes, funding news, and spikes in website visits from that company. Account-based marketing (ABM) means focusing outreach on a specific list of named companies instead of a broad market. When a signal crosses the threshold you set, the agent starts an outbound sequence or sends a Slack alert to the right Account Executive, while the signal is still fresh.',
  },
  {
    category: 'workflows',
    question: 'Can the AI SDR re-engage deals that have gone quiet in HubSpot or Salesforce?',
    answer:
      "Yes. The agent watches the deal stage and last-activity date directly inside HubSpot or Salesforce. Once a deal passes your stale-deal threshold, it drafts a re-engagement email that references the earlier conversation. It logs the attempt on the CRM timeline. If there's still no reply after two tries, it flags the deal for an Account Executive to review.",
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
  '@id': `${CANONICAL_URL}#service`,
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
      position: 1,
      name: 'Phase 1: ICP Mapping & Qualification Logic',
      text: 'Map the Ideal Customer Profile, disqualification rules, objection-handling battlecards, and meeting-routing rules with sales leadership.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Phase 2: CRM, Enrichment & Calendar Connectors',
      text: 'Build secure two-way API connections into HubSpot or Salesforce, an enrichment provider such as Apollo or Clay, and a calendar tool.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Phase 3: Deliverability Infrastructure & Evaluation Suite',
      text: 'Configure a secondary sending domain with SPF, DKIM, and DMARC records, and run the agent through an evaluation suite of past lead conversations.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Phase 4: Live Inbound Routing & Monitoring',
      text: 'Connect the agent to live web forms and paid campaigns, and track response latency and qualification accuracy from day one.',
    },
  ],
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${CANONICAL_URL}#webpage`,
  url: CANONICAL_URL,
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
  about: { '@id': `${CANONICAL_URL}#service` },
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
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* HERO SECTION */}
        <section className="pp-hero">
          <div className="pp-hero-grid">
            <div>
              <p className="pp-eyebrow">// AUTONOMOUS B2B REVENUE AGENTS</p>
              <h1 className="pp-h1">
                Custom <span className="pp-grad">AI SDR Agent</span> Development
              </h1>
              <p className="pp-lead">
                We build custom AI Sales Development Representatives, or AI SDRs, for B2B teams. The agent replies to a new inbound lead in under 60 seconds. It looks up the company and checks whether the lead fits your Ideal Customer Profile (ICP), then books a meeting straight onto your Account Executive&apos;s calendar.
              </p>
              <HeroInlineForm
                source="services_ai_sdr_development"
                region="us"
                submitLabel="Request AI SDR Architecture Audit"
              />
            </div>

            <div className="pp-hero-card">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-4">
                <Image
                  src="/images/us/commerce/salesforce-commerce-cloud-to-shopify-plus-people-exec-meeting.webp"
                  alt="Sales leadership reviewing pipeline and lead-qualification metrics on dashboard screens during a revenue team meeting"
                  width={1280}
                  height={853}
                  priority
                  className="absolute inset-0 h-full w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
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
                An AI SDR is software that qualifies inbound B2B sales leads on its own, in real time. A web form, chat message, or ad click triggers it right away. It looks up the company&apos;s firmographic data first: basics like employee count, industry, and revenue. Then it asks qualifying questions in plain conversation, answers common objections, and books a meeting straight onto a sales calendar. All of it happens within seconds.
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
                Real research behind why speed to lead and automated qualification move revenue.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <li className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">7x</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Higher Qualification Odds</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  Harvard Business Review found that companies who contact a new lead within an hour are almost 7 times more likely to qualify it. Wait even one hour longer, and the odds drop fast.
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
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">10x</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Higher Odds of Contact</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  Calling a web lead back within 5 minutes makes you 10 times more likely to reach them. You are also 6 times more likely to qualify them, compared to waiting even 30 minutes.
                </p>
                <a
                  href="https://www.insidesales.com/what-is-lead-response-management/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: InsideSales.com Lead Response Management Study &rarr;
                </a>
              </li>

              <li className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">More Pipeline</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Higher Sales Productivity</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  Sales teams that automate early-stage qualification report real gains in pipeline and rep productivity. The exact number varies by team, so treat this as a trend, not a single hard statistic.
                </p>
                <span className="text-xs text-[#6E655F] font-mono">
                  Directional estimate: industry generative-AI sales research, not a single named study
                </span>
              </li>
            </ul>

            <p className="text-sm text-[#46403B] text-center mt-8">
              Want to see what faster response time is worth for your own team? Try our{' '}
              <Link href="/tools/ai-agent-roi-calculator" className="underline hover:text-[#F05A28]">
                AI agent ROI calculator
              </Link>.
            </p>
          </div>
        </section>

        {/* BENTO GRID OF CAPABILITIES */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="pp-h2 text-center">AI SDR Engineering Architecture</h2>
              <p className="text-base text-[#46403B] mt-3">
                Built for revenue teams that need sub-minute response speed, deep CRM sync, and zero spam risk.
              </p>
            </div>

            <ul className="pp-bento">
              <li className="pp-card pp-bento-wide p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  01 // INSTANT INGESTION &amp; ENRICHMENT
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Real-Time Firmographic Data Enrichment</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  The moment a lead fills out a form or requests a demo, the agent looks up the company. It queries Apollo, Clearbit, or Clay for employee count, revenue range, headquarters, and tech stack. That data shapes the qualifying question it asks next.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  02 // ICP QUALIFICATION
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Multi-Criteria BANT &amp; MEDDPICC Logic</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  The agent asks about budget, who makes the decision, and how soon the company plans to buy. That is the same ground covered by the BANT and MEDDPICC qualification frameworks. It asks through natural conversation, not a static web form.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  03 // CALENDAR BOOKING
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Direct AE Calendar Scheduling</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Once a lead qualifies, the agent checks live availability on Google Calendar or Microsoft Outlook and books the call. The buyer picks a time in the same conversation, with no back-and-forth email needed.
                </p>
              </li>

              <li className="pp-card pp-bento-wide p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  04 // DELIVERABILITY ENGINEERING
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Secondary Domain Infrastructure &amp; SPF/DKIM/DMARC</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Cold outbound never touches your main company domain. We set up a separate sending domain with SPF, DKIM, and DMARC records. Then we warm it up gradually and monitor it daily.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  05 // CRM SYNCHRONIZATION
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Bi-Directional HubSpot &amp; Salesforce Sync</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Every conversation updates HubSpot or Salesforce automatically: contact record, lifecycle stage, full transcript, and deal owner. Your team sees the current status without opening a second tool.
                </p>
              </li>

              <li className="pp-card p-6 md:p-8 bg-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                  06 // PRIVATE CLOUD OWNERSHIP
                </span>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Zero Per-Seat SaaS Taxes</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  You own the full codebase and every prompt we write. It runs on your own AWS or Google Cloud account, so there is no recurring per-user fee once the build is done.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* SALES ENGAGEMENT / DIALER / INTENT DATA STACK */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="pp-h2 text-center">The Sales Engagement, Dialer &amp; Intent Data Stack We Connect</h2>
              <p className="text-base text-[#46403B] mt-3">
                A modern outbound team runs on more than a CRM. Here is exactly which sequencing tools, dialers, and data platforms we connect the agent to. Below each one, we say what that connection actually does.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="pp-card p-8 bg-[#FAFAF7]">
                <h3 className="text-lg font-bold text-[#14110F] mb-4">Sequencing &amp; Cadence Platforms</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed list-none">
                  <li><span className="font-bold text-[#14110F]">Outreach</span>: two-way sync, so a sequence the agent starts or replies to shows up in your reps&apos; existing workspace.</li>
                  <li><span className="font-bold text-[#14110F]">Salesloft</span>: the same real-time cadence sync, for teams standardized on Salesloft instead.</li>
                  <li><span className="font-bold text-[#14110F]">Groove</span>: lightweight sequencing sync, for teams that run cadences inside Salesforce directly.</li>
                </ul>
              </div>

              <div className="pp-card p-8 bg-[#FAFAF7]">
                <h3 className="text-lg font-bold text-[#14110F] mb-4">Conversation Intelligence &amp; Dialers</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed list-none">
                  <li><span className="font-bold text-[#14110F]">Gong</span>: call recordings and talk-track analysis feed back into the agent&apos;s objection-handling library.</li>
                  <li><span className="font-bold text-[#14110F]">Chorus</span>: the same conversation-intelligence sync, for teams standardized on Chorus instead.</li>
                  <li><span className="font-bold text-[#14110F]">Orum</span>: parallel-dialing sync, so a lead the agent qualifies can move straight into a live dialer session.</li>
                  <li><span className="font-bold text-[#14110F]">Aircall</span>: cloud phone system sync, for a warm transfer straight to a rep&apos;s desk phone.</li>
                </ul>
              </div>

              <div className="pp-card p-8 bg-[#FAFAF7]">
                <h3 className="text-lg font-bold text-[#14110F] mb-4">Intent Data &amp; Signal Platforms</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed list-none">
                  <li><span className="font-bold text-[#14110F]">6sense</span>: account-level buying-intent scores can trigger the agent&apos;s outbound sequence on their own.</li>
                  <li><span className="font-bold text-[#14110F]">Demandbase</span>: the same intent-signal trigger, for teams standardized on Demandbase instead.</li>
                  <li><span className="font-bold text-[#14110F]">LinkedIn Sales Navigator</span>: job-change and title-update signals feed the account-based marketing monitoring described below.</li>
                </ul>
                <p className="mt-6 text-sm text-[#6E655F] leading-relaxed border-t border-[#E7DED6] pt-4">
                  Running a different stack? We scope a custom connector against its API during onboarding. The same real-time CRM sync also powers our{' '}
                  <Link href="/services/ai-customer-support-agents" className="underline hover:text-[#F05A28]">
                    AI customer support agents
                  </Link>
                  , for teams that want sales and support running on one connected system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW THE AI SDR ACTUALLY WORKS (TECHNICAL ARCHITECTURE) */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="pp-h2 text-center">How the AI SDR Actually Works</h2>
              <p className="text-base text-[#46403B] mt-3">
                This is the same event-driven automation approach behind our{' '}
                <Link href="/services/ai-workflow-automation" className="underline hover:text-[#F05A28]">
                  AI workflow automation
                </Link>{' '}
                builds. It is just aimed at your sales pipeline instead of back-office operations. Here is what runs under the hood.
              </p>
            </div>

            <div className="pp-splitband mb-12">
              <figure className="pp-splitband-fig">
                <div className="pp-shot">
                  <Image
                    src="/images/uk/shared/uk-team-collaborating.webp"
                    alt="Revenue operations team reviewing lead qualification data together on a desktop dashboard monitor"
                    width={900}
                    height={636}
                    className="w-full h-auto"
                    sizes="(max-width: 860px) 100vw, 50vw"
                  />
                </div>
              </figure>
              <div className="pp-splitband-text">
                <p>
                  Every qualification decision, enrichment lookup, and calendar booking gets logged. Your team can see exactly why the agent did what it did on any given lead, not just the outcome.
                </p>
                <p>
                  Nothing here runs on guesswork. Each step below follows a fixed rule set we build and test with you before a single real lead reaches the agent.
                </p>
                <div className="pp-splitband-note">
                  Full visibility, from first reply to booked meeting.
                </div>
              </div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none">
              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">01 // DATA ENRICHMENT WATERFALL</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Real-Time Lookups With a Fallback Chain</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  The agent checks Apollo first, then Clearbit, then Clay, in the order you set. If none of them match, it falls back to ZoomInfo. Then it flags the lead for manual research.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">02 // RETRIEVAL-GROUNDED ANSWERS</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">No Invented Prices or Promises</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Objection answers use retrieval augmented generation, or RAG. The agent looks up your real battlecards and documents before it answers, instead of guessing from general knowledge. Guardrails, hard rules the agent cannot break, stop it from quoting a price or contract term it cannot verify.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">03 // CRM SYNC ARCHITECTURE</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Webhook-Triggered, Not Batch-Synced</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  A webhook, an instant signal sent the moment something happens, fires when a lead replies or a form is submitted. The agent writes straight to HubSpot, Salesforce, Pipedrive, or Zoho through each CRM&apos;s own API, so the record updates in real time.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">04 // MESSAGING COMPLIANCE</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">SMS and WhatsApp, Inside the Rules</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Text and WhatsApp messages route through Twilio and the WhatsApp Business API. Every opt-in and opt-out is logged, and the agent follows TCPA rules, the US law on text-message consent, automatically.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">05 // DELIVERABILITY INFRASTRUCTURE</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">A Domain Your Marketing Team Never Touches</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Outbound sends from a dedicated secondary domain with SPF, DKIM, and DMARC authentication records. It warms up gradually before full volume starts, and we watch bounce rate daily.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">06 // EVALUATION HARNESS</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Tested Before It Talks to a Real Lead</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We run the agent through hundreds of past lead conversations and objections before launch. The same test suite runs again after any prompt or connector change, to catch a regression before a real prospect ever sees it.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">07 // ACCESS CONTROL</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Single Sign-On and Role-Based Permissions</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Your team logs in through single sign-on, or SSO. Role-based access control, or RBAC, decides who can read a full transcript versus who only sees the qualification outcome.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">08 // PRIVATE CLOUD HOSTING</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Your AWS or Google Cloud Account, Not Ours</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  The agent runs inside your own cloud account, not a shared multi-tenant platform. Your prospect data never sits on infrastructure you do not control.
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
                A generic outbound tool breaks down once a workflow gets specific. We build logic for each stage of the pipeline instead, from the first outbound touch to a deal that has gone cold in the CRM.
              </p>
            </div>

            <p className="text-sm text-[#46403B] text-center max-w-3xl mx-auto mb-12">
              <span className="font-semibold text-[#14110F]">81 percent of B2B sales teams</span> are now testing or fully using AI somewhere in their sales process, and teams that have adopted it are 1.3 times more likely to report revenue growth this year.{' '}
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
                  Building and personalizing outbound sequences by hand is slow. A generic mail-merge blast gets flagged as spam, or ignored by the prospects who matter most.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The agent pulls a target account list from Apollo or Clay. It enriches each contact with company and intent data. Then it drafts a 3 to 4 touch sequence that mentions something real, like the account&apos;s tech stack, a funding round, or a new job posting. Every message sends from a warmed secondary domain, and the sequence pauses on its own if the prospect replies or the email bounces.
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
                  Inbound demo requests sit in a queue for hours while reps guess which ones are worth a callback. A generic web form rarely captures enough detail to prioritize well.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The moment someone submits a form on your{' '}
                  <Link href="/services/b2b-website-design" className="underline hover:text-[#F05A28]">
                    B2B website
                  </Link>
                  , the agent enriches the company through Clearbit and opens a real email or chat thread. It asks BANT or MEDDPICC questions conversationally, scores the lead against your ICP, and either books the meeting directly or routes a not-yet-ready lead into a nurture track.
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
                  A back-and-forth email trying to find a time that works for both a prospect and the right Account Executive burns days, and it kills the momentum a fast qualification just built.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Once a lead clears qualification, the agent checks live availability across Google Calendar, Outlook, Calendly, or Chili Piper. It applies your territory or round-robin rules and confirms a specific slot in the same thread, then sends the calendar invite and logs the meeting to the CRM automatically.
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
                  A target account list sits static in a spreadsheet. Meanwhile, real buying signals, a champion changing jobs, a hiring surge, a competitor mention, go unnoticed until it is too late to act.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The agent watches your named target accounts for signals: job postings that match your product, executive job changes, funding news, or a spike in website visits from that company. When a signal crosses your threshold, it starts a tailored sequence or sends a Slack alert to the right Account Executive.
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
                  Deals stall in HubSpot or Salesforce because no one owns the job of re-engaging a prospect who went quiet 45 days ago. Running that report by hand every week rarely happens consistently.
                </p>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The agent watches deal-stage and last-activity fields directly inside HubSpot or Salesforce. Once a deal crosses your stale-deal threshold, it drafts a re-engagement email referencing the earlier conversation. It logs the attempt to the CRM timeline. If there is still no response after two touches, it flags the deal for a person to review.
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

        {/* HOW WE BUILD IT: 4-PHASE ROLLOUT */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="pp-h2 text-center">How FactoryJet Builds and Deploys a Custom AI SDR</h2>
              <p className="text-base text-[#46403B] mt-3">
                Every build follows the same four phases. Most teams go live in 3 to 4 weeks.
              </p>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none">
              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 1 // WEEK 1</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">ICP Mapping &amp; Qualification Logic</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We map your Ideal Customer Profile, disqualification rules, objection battlecards, and meeting-routing rules together with your sales leadership.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 2 // WEEK 2</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">CRM, Enrichment &amp; Calendar Connectors</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We build secure two-way connections into HubSpot or Salesforce, your enrichment provider of choice, and your calendar tool.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 3 // WEEK 3</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Deliverability Infrastructure &amp; Evaluation Suite</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We set up a secondary sending domain with SPF, DKIM, and DMARC records, then run the agent through hundreds of past lead conversations to check accuracy.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 4 // WEEK 4</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Live Inbound Routing &amp; Monitoring</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We connect the agent to your live web forms and paid campaigns, and track response time and qualification accuracy from day one.
                </p>
              </li>
            </ol>
          </div>
        </section>

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
                    <td className="font-semibold text-[#F05A28]">Sub-60 seconds, 24/7</td>
                    <td>2-15 minutes, queue dependent</td>
                    <td>4-42 hours average lag</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Licensing &amp; Seat Fees</td>
                    <td className="font-semibold text-[#14110F]">$0/month, token compute only</td>
                    <td>$2K-5K per user, per month</td>
                    <td>$75k+ salary plus benefits</td>
                  </tr>
                  <tr className="tr-me">
                    <td className="font-bold">CRM &amp; Database Integration</td>
                    <td className="font-semibold text-[#F05A28]">Custom REST/GraphQL, bi-directional</td>
                    <td>Generic CSV/Zapier connectors</td>
                    <td>Manual CRM record updates</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Turnover &amp; Ramp Time</td>
                    <td className="font-semibold text-[#14110F]">Zero turnover, 3-4 week build</td>
                    <td>Zero turnover, rigid vendor UI</td>
                    <td>3-month ramp, 14-month tenure</td>
                  </tr>
                  <tr className="tr-me">
                    <td className="font-bold">Data Privacy &amp; VPC Perimeter</td>
                    <td className="font-semibold text-[#F05A28]">Private VPC, zero data retention</td>
                    <td>Shared vendor cloud database</td>
                    <td>Internal employee device access</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#6E655F] text-center mt-6">
              Figures above show our own pricing model next to typical published vendor rates.
            </p>
          </div>
        </section>

        {/* FOUNDER OVERSIGHT SECTION */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="pp-h2 text-center">Direct Founder Oversight From Discovery to Deployment</h2>
            </div>

            <div className="pp-splitband">
              <figure className="pp-splitband-fig">
                <div className="pp-shot max-w-sm mx-auto">
                  <div className="relative aspect-square">
                    <Image
                      src="/bhavesh_image.webp"
                      alt="Bhavesh Barot, Founder and CEO of FactoryJet"
                      width={682}
                      height={1024}
                      quality={95}
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 860px) 100vw, 40vw"
                    />
                  </div>
                </div>
                <figcaption className="text-center mt-3">
                  <div className="font-bold text-base text-[#14110F]">Bhavesh Barot</div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold">Founder &amp; CEO, FactoryJet</div>
                </figcaption>
              </figure>
              <div className="pp-splitband-text">
                <p>
                  Sales pipeline is not a place for guesswork. At FactoryJet, founder Bhavesh Barot runs every AI SDR discovery call himself. In the first meeting, we review your current lead response time, your CRM setup, and the qualification rules your best reps already use.
                </p>
                <p>
                  You work directly with senior engineers who have already built outbound systems for other B2B teams. Your build never gets handed to a junior salesperson or an offshore contractor. The same senior-only approach runs across our broader{' '}
                  <Link href="/services/ai-agent-development" className="underline hover:text-[#F05A28]">
                    AI agent development
                  </Link>{' '}
                  practice, not just AI SDR builds.
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-2">
                  <a
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pp-btn-orange"
                  >
                    Schedule Direct Call with Bhavesh
                  </a>
                  <ModalCTAButton
                    label="Request AI SDR Scoping Proposal"
                    region="us"
                    btnVariant="secondary-light"
                  />
                </div>
              </div>
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
                Talk directly with founder Bhavesh Barot. We will review how your team qualifies leads today, look at your CRM setup, and hand you a fixed-price roadmap for the build.
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
