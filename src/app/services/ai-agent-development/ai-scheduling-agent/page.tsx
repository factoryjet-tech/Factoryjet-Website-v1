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

export const metadata: Metadata = {
  title: 'AI Scheduling Agent for US Businesses | FactoryJet',
  description:
    'AI scheduling agents for US businesses. Automate appointment booking, reminders, and two-way sync with Google Calendar, Outlook, and Calendly. Fixed price.',
  keywords: [
    'AI scheduling agent',
    'AI appointment booking USA',
    'automated appointment scheduling US',
    'AI booking agent for small business',
    'appointment reminder automation US',
    'Google Calendar AI scheduling',
    'Outlook calendar AI booking',
    'clinic appointment scheduling AI',
    'demo booking automation US',
    'AI scheduling assistant USA',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Scheduling Agent for US Businesses | FactoryJet',
    description:
      'AI that books demos, service calls, and appointments by text and email, in English and Spanish, synced to Google Calendar and Outlook. Fixed price.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-scheduling-agent',
    images: [
      {
        url: 'https://factoryjet.com/images/us/services/hero-ai-agent-us.webp',
        width: 1200,
        height: 800,
        alt: 'FactoryJet AI Agent Development Services',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Scheduling Agent for US Businesses | FactoryJet',
    description:
      'Automate appointment booking and reminders by text and email, in English and Spanish. Google Calendar and Outlook integrated. Fixed price.',
    images: ['https://factoryjet.com/images/us/services/hero-ai-agent-us.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-agent-development/ai-scheduling-agent',
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

const BREADCRUMB_ITEMS = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
  { name: 'AI Scheduling Agent', url: 'https://factoryjet.com/services/ai-agent-development/ai-scheduling-agent' },
];

const PAGE_MODIFIED = '2026-08-17';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-scheduling-agent#webpage',
  url: 'https://factoryjet.com/services/ai-agent-development/ai-scheduling-agent',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Scheduling Agent Development USA',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  description:
    'Custom AI scheduling agents for US businesses, automate appointment booking by SMS, email, and web chat in English and Spanish with Google Calendar, Outlook, and Calendly integration.',
  areaServed: 'US',
  serviceType: 'AI Appointment Scheduling Automation',
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-scheduling-agent#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ai-agent-development/ai-scheduling-agent',
};

const SCHEDULING_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Scheduling Audit.',
    description:
      'We audit your current booking workflow. We map how inbound leads request appointments across web chat, SMS, and email. We review staff availability rules and calendar routing. We identify friction points in confirmation and reminder handoffs.',
  },
  {
    number: '02',
    title: 'Conversation & Calendar Design.',
    description:
      'We design conversational booking flows in English and Spanish. The AI collects customer preferences and presents open slots. We configure buffer times and meeting durations. We structure real-time validation for your calendar systems.',
  },
  {
    number: '03',
    title: 'Build & Integration.',
    description:
      'We build custom scheduling agents with function calling and tool use. We connect Google Calendar, Microsoft Outlook, and Calendly. We wire two-way CRM sync into HubSpot and Salesforce. We add automated payment links for deposit collection.',
  },
  {
    number: '04',
    title: 'Test & Tune.',
    description:
      'We execute 100+ test booking simulations across US time zones. We test concurrent slot selection and daylight saving shifts. We verify cancellation logic and automated rescheduling. We tune prompt engineering to ensure high booking completion.',
  },
  {
    number: '05',
    title: 'Deploy & Optimize.',
    description:
      'We deploy your live scheduling agent with real-time observability. You get dashboards for booking volume, no-show rates, and response latency. We provide a 30-day tuning window to optimize conversion metrics.',
  },
];

const SCHEDULING_STATS = [
  {
    value: '35%',
    label: 'more appointments booked per week with AI versus manual phone and email scheduling.',
    microcopy: 'FactoryJet client deployment benchmarks across US service teams.',
    categoryLabel: 'BOOKING LIFT.',
  },
  {
    value: '40%',
    label: 'reduction in appointment no-shows through automated multi-touch reminder sequences.',
    microcopy: 'Verified across clinic and field service scheduling deployments.',
    categoryLabel: 'NO-SHOW REDUCTION.',
  },
  {
    value: '24/7',
    label: 'instant appointment booking across all US time zones with zero coordinator latency.',
    microcopy: 'Always responsive with zero wait time for inbound leads.',
    categoryLabel: 'AVAILABILITY.',
  },
];

const SCHEDULING_MARKET_STATS = [
  {
    value: '2 changes',
    label: 'US clocks shift twice yearly during daylight saving transitions. Systems must calculate offsets accurately.',
    sourceUrl: 'https://www.law.cornell.edu/uscode/text/15/260a',
    sourceLabel: 'Uniform Time Act, 15 U.S.C. 260a.',
  },
  {
    value: 'TCPA',
    label: 'Automated appointment SMS requires prior express consent. Our agents enforce opt-out capture on every send.',
    sourceUrl: 'https://www.law.cornell.edu/uscode/text/47/227',
    sourceLabel: 'Telephone Consumer Protection Act, 47 U.S.C. 227.',
  },
  {
    value: '24/7',
    label: 'Coverage across Eastern, Central, Mountain, and Pacific zones ensures leads convert outside normal business hours.',
    sourceUrl: 'https://factoryjet.com/services/ai-agent-development',
    sourceLabel: 'FactoryJet US Scheduling Research, 2026.',
  },
];

const SCHEDULING_COMPARISON_COLUMNS = [
  { label: 'FactoryJet.', isFactoryJet: true },
  { label: 'Manual Booking.' },
  { label: 'Calendly Alone.' },
  { label: 'Coordinator.' },
] as const;

const SCHEDULING_COMPARISON_ROWS = [
  {
    feature: 'Starting investment model.',
    values: [
      'Fixed-price project scope.',
      'Hidden payroll costs daily.',
      'Per-seat recurring SaaS fee.',
      'Full-time salary and overhead.',
    ],
  },
  {
    feature: 'Books appointments by SMS and email in English and Spanish.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="mw" kind="partial" />,
      <CompareIcon key="ca" kind="no" />,
      <CompareIcon key="rc" kind="yes" />,
    ],
  },
  {
    feature: 'Available 24/7 across every US time zone, weekends and holidays included.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="mw" kind="no" />,
      <CompareIcon key="ca" kind="yes" />,
      <CompareIcon key="rc" kind="no" />,
    ],
  },
  {
    feature: 'Sends automated SMS and email reminders with one-click rescheduling.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="mw" kind="no" />,
      <CompareIcon key="ca" kind="yes" />,
      <CompareIcon key="rc" kind="partial" />,
    ],
  },
  {
    feature: 'Two-way CRM sync with HubSpot, Salesforce, and Pipedrive.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="mw" kind="no" />,
      <CompareIcon key="ca" kind="partial" />,
      <CompareIcon key="rc" kind="no" />,
    ],
  },
  {
    feature: 'Handles cancellations and automated waitlist backfills.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="mw" kind="partial" />,
      <CompareIcon key="ca" kind="yes" />,
      <CompareIcon key="rc" kind="yes" />,
    ],
  },
  {
    feature: 'Collects card deposits and booking fees via Stripe.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="mw" kind="no" />,
      <CompareIcon key="ca" kind="no" />,
      <CompareIcon key="rc" kind="no" />,
    ],
  },
  {
    feature: 'Multi-staff and multi-location calendar routing rules.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="mw" kind="no" />,
      <CompareIcon key="ca" kind="partial" />,
      <CompareIcon key="rc" kind="yes" />,
    ],
  },
  {
    feature: 'Fixed-price contract with zero monthly platform lock-in.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="mw" kind="no" />,
      <CompareIcon key="ca" kind="no" />,
      <CompareIcon key="rc" kind="no" />,
    ],
  },
  {
    feature: 'Full source code ownership and custom workflow access.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="mw" kind="no" />,
      <CompareIcon key="ca" kind="no" />,
      <CompareIcon key="rc" kind="no" />,
    ],
  },
];

const SCHEDULING_INDUSTRIES = [
  {
    name: 'Healthcare & Clinical Practices.',
    description:
      'Autonomous patient intake and appointment scheduling for medical practices. The agent queries Athenahealth, Epic, NextGen Healthcare, and Kareo. It performs insurance eligibility verification and specialty routing. It sends compliant SMS appointment reminder alerts under HIPAA rules.',
    example: 'Practices increase completed patient visits by 35% and reduce no-shows by 40%.',
  },
  {
    name: 'Dental & Specialty Clinics.',
    description:
      'Direct scheduling integration with Dentrix and Open Dental. The agent checks operatory availability and hygienist calendars. It handles procedure duration rules and copay deposits via Stripe. Patients book exams via web chat or SMS.',
    example: 'Dental offices recover 15 coordinator hours weekly with automated appointment scheduling.',
  },
  {
    name: 'Real Estate Brokerages.',
    description:
      'Instant showing scheduling for buyer leads and property tours. The agent connects to Follow Up Boss, Salesforce, and Zillow feeds. It qualifies buyer budgets and confirms lockbox access. Speed to lead drops to under 30 seconds.',
    example: 'Brokerages double property tour bookings without adding dispatch coordinators.',
  },
  {
    name: 'Home Services & Field Contractors.',
    description:
      'Field service management scheduling for HVAC, plumbing, and electrical teams. The agent integrates with ServiceTitan, Jobber, and Housecall Pro. It checks technician ZIP code zones and dispatch board availability. It creates work orders and collects deposits.',
    example: 'Contractors fill 90% of same-day cancellation gaps automatically.',
  },
  {
    name: 'B2B SaaS & Professional Advisory.',
    description:
      'Automated demo booking and consultation scheduling for high-velocity teams. The agent connects to Chili Piper, Calendly, Google Calendar, and Microsoft Outlook. It routes enterprise accounts to dedicated account executives in HubSpot.',
    example: 'B2B sales teams eliminate scheduling drop-off and boost qualified pipeline velocity.',
  },
  {
    name: 'Automotive Dealerships & Service Centers.',
    description:
      'Showroom test drive and vehicle service appointment booking. The agent qualifies customer vehicle models and preferred service bays. It syncs with dealer calendars and sends SMS location directions with reminder sequences.',
    example: 'Dealerships increase test drive volume by 50% from digital ad campaigns.',
  },
];

const SCHEDULING_FAQ_CATEGORIES = [
  { key: 'basics', label: 'Scheduling AI Basics.' },
  { key: 'channels', label: 'Channels & Reminders.' },
  { key: 'integrations', label: 'Systems & Integrations.' },
  { key: 'governance', label: 'Security & Compliance.' },
  { key: 'process', label: 'Process & Timeline.' },
  { key: 'pricing', label: 'Pricing & ROI.' },
];

const SCHEDULING_FAQ_ITEMS = [
  {
    category: "basics",
    question: "What is an autonomous AI scheduling agent?",
    answer: "An AI scheduling agent books appointments autonomously. It works over text, email, and web chat. The agent queries calendars in real time. It presents open slots in the customer time zone. It records bookings in Google Calendar or Outlook. The agent dispatches invites and SMS reminders. It handles reschedules and cancellations on its own."
  },
  {
    category: "basics",
    question: "How does AI scheduling differ from static tools like Calendly or Acuity?",
    answer: "Calendly forces users to open links and fill forms. Many mobile users abandon static links quickly. Our AI scheduling agent chats directly in messages. It qualifies leads with function calling and tool use. It checks calendar rules and books slots immediately. Clients book without visiting external pages."
  },
  {
    category: "basics",
    question: "Can the scheduling agent handle multi-provider and multi-location routing?",
    answer: "Yes. The agent routes for multi-provider practices. It handles multi-location businesses easily. It routes by staff specialty, region, or round-robin rules. It checks individual calendars to stop double bookings. It applies meeting duration and buffer rules strictly. Leads route to the right team members."
  },
  {
    category: "basics",
    question: "How does the AI handle appointment cancellations and waitlists?",
    answer: "The agent manages cancellations and waitlists automatically. When a client cancels, it frees the slot immediately. It texts waitlist prospects in priority order. The first respondent claims the open window. This workflow recovers lost revenue fast. It keeps provider calendars full."
  },
  {
    category: "channels",
    question: "Which communication channels does the scheduling agent support?",
    answer: "The agent supports SMS, email, web chat, and phone. It connects with Twilio and WhatsApp Business API. It uses transactional email APIs for invites. Web chat widgets engage active site visitors. Customers pick their preferred contact method."
  },
  {
    category: "channels",
    question: "How do automated SMS appointment reminders reduce no-shows?",
    answer: "The agent sends automated multi-step reminders. It sends an instant confirmation with calendar files. It sends a 24-hour reminder by text. It delivers a two-hour reminder before visits. Clients confirm or reschedule with one reply. This system cuts no-shows by 40%."
  },
  {
    category: "channels",
    question: "Can customers reschedule appointments by replying to a text message?",
    answer: "Yes. Rescheduling workflows run automatically. A customer texts to request a new time. The agent finds the booking via CRM sync. It offers three open slots and updates calendars. It sends revised invites immediately. The original slot opens for other clients."
  },
  {
    category: "channels",
    question: "Can the scheduling agent confirm appointments through outbound voice calls?",
    answer: "Yes. The agent places outbound voice confirmation calls. It speaks English and Spanish fluently. The AI confirms meeting details with clients. It offers instant phone rescheduling options. Voice agents handle calls with high speed and clarity."
  },
  {
    category: "integrations",
    question: "How does the scheduling agent integrate with CRM and ERP platforms?",
    answer: "The agent runs two-way CRM sync and ERP integration. It connects to HubSpot, Salesforce, Pipedrive, and Zoho. It uses secure REST APIs and webhooks. Bookings update contact records and deal stages instantly. The agent logs meeting notes directly in your CRM."
  },
  {
    category: "integrations",
    question: "Does the agent integrate with field service management and EHR systems?",
    answer: "Yes. The agent connects to ServiceTitan, Jobber, and Housecall Pro. It updates dispatch boards and creates work orders. For clinics, it connects to Athenahealth, Epic, and Dentrix. The agent manages patient intake securely. It keeps clinical schedules in sync."
  },
  {
    category: "integrations",
    question: "Can the scheduling agent collect credit card deposits at booking?",
    answer: "Yes. The agent integrates with Stripe for deposits. It sends secure payment links during chat. It finalizes calendar slots once payment clears. If a client cancels in time, refunds trigger automatically. Deposit collection stops frivolous bookings."
  },
  {
    category: "integrations",
    question: "How does the agent prevent double bookings across multiple calendars?",
    answer: "The agent queries live calendars before offering slots. It holds open slots temporarily during chats. It enforces two-way sync with Google Calendar and Outlook. This check prevents overlapping appointments reliably. It protects personal and team calendars alike."
  },
  {
    category: "governance",
    question: "How does the agent ensure TCPA compliance for SMS scheduling?",
    answer: "The agent follows strict TCPA rules. It checks prior express consent before texting. Each message includes clear opt-out terms. When users text STOP, outbound texts halt immediately. The agent stores consent timestamps for compliance."
  },
  {
    category: "governance",
    question: "Is the AI scheduling agent HIPAA compliant for healthcare practices?",
    answer: "Yes. Healthcare builds follow strict HIPAA guidelines. The agent avoids sending protected health information (PHI) over SMS. Messages confirm dates, times, and clinic addresses only. Data is encrypted in transit and at rest. We sign business associate agreements."
  },
  {
    category: "governance",
    question: "How do role-based access control and SSO protect scheduling systems?",
    answer: "We set up role-based access control (RBAC). We configure single sign-on (SSO) for teams. Admins control access to calendars and client data. API tokens follow least privilege rules. Audit logs support SOC 2 and GDPR compliance."
  },
  {
    category: "governance",
    question: "How does Retrieval-Augmented Generation (RAG) protect scheduling accuracy?",
    answer: "Retrieval augmented generation (RAG) grounds agent answers in real docs. It uses vector search and semantic embeddings. The agent checks exact fees, rules, and durations. Guardrails block hallucinations and off-topic chat."
  },
  {
    category: "process",
    question: "How long does it take to build and deploy an AI scheduling agent?",
    answer: "Standard builds launch in two to four weeks. Week one covers calendar audits and flow design. Week two covers API connections and prompt engineering. Week three runs test bookings across time zones. Week four launches the live pilot agent."
  },
  {
    category: "process",
    question: "What assets does FactoryJet require to begin development?",
    answer: "We need API access to calendars, CRMs, and messaging tools. We review staff rosters, hours, and meeting lengths. We map buffer times during a 30-minute kickoff. Our team handles the entire technical build."
  },
  {
    category: "process",
    question: "Can non-technical staff adjust availability rules and holidays?",
    answer: "Yes. Staff manage rosters and hours in a portal. Updates sync to Google Calendar and Outlook instantly. Non-technical coordinators change rules without code."
  },
  {
    category: "process",
    question: "How do you test and evaluate scheduling agent performance before go-live?",
    answer: "We run evaluation harness tests before launch. We test concurrent bookings and timezone shifts. We verify error recovery on network drops. Human in the loop reviews ensure system reliability."
  },
  {
    category: "pricing",
    question: "What is the pricing model for custom AI scheduling agent development?",
    answer: "We work under fixed-price contracts. Proposals list all features, integrations, and milestones. We never charge surprise hourly fees. You own 100% of the developed application code."
  },
  {
    category: "pricing",
    question: "What ongoing infrastructure costs should businesses anticipate?",
    answer: "Ongoing costs remain low and transparent. You pay LLM API fees and Twilio SMS rates directly. FactoryJet charges zero platform license fees. Optional monthly retainers offer ongoing feature updates."
  },
  {
    category: "pricing",
    question: "How does an AI scheduling agent deliver measurable ROI?",
    answer: "ROI comes from time savings and higher bookings. Coordinators save 15 to 25 hours every week. Speed to lead drops to seconds, capturing new demand. Lower no-show rates protect thousands in billable fees."
  },
  {
    category: "pricing",
    question: "Can we pilot the AI scheduling agent before enterprise rollout?",
    answer: "Yes. We offer a two-week pilot build. We automate booking for one main service type. The pilot tests booking lift and client feedback. Pilot fees apply as credits toward full rollout."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: SCHEDULING_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function AISchedulingAgentUSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script id="ai-scheduling-agent-us-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="ai-scheduling-agent-us-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader
        locale="us"
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'AI Agents', href: '/services/ai-agent-development' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Book a Free Call', modal: true, region: 'us' }}
      />

      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <main className="bg-fj-cream">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        <Hero
          formSlot={<HeroInlineForm region="us" source="services_ai_agent_development_ai_scheduling_agent_hero" />}
          eyebrow="AI SCHEDULING AGENT · USA."
          headline="AI That Books Demos, Showings, and Clinic Appointments by Text and Email, 24/7."
          lead="AI scheduling agents check live availability and write appointments to Google Calendar or Outlook. They send calendar invites, collect card deposits, and execute automated reminder sequences. Booking operates across English and Spanish in every US time zone. All builds feature fixed pricing."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'us' as const }}
          trustItems={[
            '500+ businesses served.',
            'Google Calendar, Outlook, and Calendly.',
            'English and Spanish booking flows.',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p className="font-fj-mono font-medium uppercase text-[#B23E13]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                AI SCHEDULING AGENT · LIVE.
              </p>
              <p className="mt-4 font-fj-display text-[1.875rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                42 appointments booked today. Zero coordinators involved.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Customer texts to request a service visit. The AI checks crew availability in real time. It books the arrival window and sends an instant calendar invite.',
                  'Patient asks for a clinic consultation. The AI checks provider schedules across local time zones. The patient confirms a slot and the calendar updates.',
                  'Automated reminder sent 24 hours prior to meeting. Six clients confirm and one reschedules into an open slot. No-show rates drop by 40%.',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F05A28]/10 font-fj-mono text-[10px] font-bold text-[#B23E13]">
                      {i + 1}
                    </span>
                    <p className="font-fj-body text-[0.875rem] leading-[1.5] text-fj-neutral-600">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-fj-neutral-100 pt-6">
                <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">Books appointments 24/7. Syncs to Google Calendar and Outlook. Reminds by text and email. Runs itself.</p>
              </div>
            </div>
          }
        />

        <LogoBar tagline="Trusted by 500+ businesses across the US, UK, and UAE." />

        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS."
          headline="500+ businesses. 12 years of building. One goal: your results."
          description="Websites designed and built for businesses across the US, the UK and the UAE. Shopify stores, B2B companies, and DTC brands. Fixed, transparent pricing, your codebase delivered in full, and 7-day delivery."
        />

        <ServiceExplanation
          eyebrow="AI SCHEDULING EXPLAINED."
          headline="Why AI Scheduling Is Different From Calendly or a Front-Desk Coordinator."
          lead="Calendly and Acuity require prospects to open links, complete forms, and choose times. Many mobile visitors abandon static booking links. Our AI scheduling agent interacts naturally over SMS, web chat, and email. Appointments are confirmed directly against your live calendar."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {['SMS booking', 'Spanish scheduling', 'Google Calendar', 'Outlook & Microsoft 365', 'Card deposits', 'Reminders', 'Multi-provider', 'Rescheduling'].map((cap) => (
                  <span key={cap} className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#B23E13]" style={{ fontSize: '10px', letterSpacing: '0.10em' }}>{cap}</span>
                ))}
              </div>
              <p>
                Scheduling friction occurs in the delay between inquiry and confirmation. A prospect calls or texts for an appointment. A staff coordinator checks calendars, plays phone tag, and exchanges multiple messages. That process consumes 20 minutes per booking and stops at 5 PM. An AI scheduling agent completes the workflow in 60 seconds, 24/7, without manual overhead.
              </p>
              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '35%', label: 'more bookings' },
                  { value: '40%', label: 'fewer no-shows' },
                  { value: '24/7', label: 'availability' },
                ].map((b) => (
                  <div key={b.value} className="rounded-xl border border-fj-neutral-200 bg-white px-3 py-4 text-center shadow-sm">
                    <p className="font-fj-display font-bold text-[#F05A28]" style={{ fontSize: '1.375rem', lineHeight: 1, letterSpacing: '-0.03em' }}>{b.value}</p>
                    <p className="mt-1.5 font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '0.6875rem', letterSpacing: '0.07em' }}>{b.label}</p>
                  </div>
                ))}
              </div>
              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p className="font-fj-display font-semibold text-fj-ink" style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}>
                  A customer who books at 11 PM is still a confirmed appointment at 9 AM.
                </p>
              </div>
              <p>
                FactoryJet AI scheduling agents connect to business SMS numbers, shared inboxes, Google Calendar, and Microsoft Outlook. The booking conversation proceeds naturally in English or Spanish. Calendar reservations, meeting invites, CRM updates, and reminder sequences execute automatically.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>Manual vs. AI Scheduling.</p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { scenario: 'Customer texts asking for an appointment.', manual: 'Coordinator checks calendar, replies, customer picks, confirms by hand, taking 20 minutes.', ai: 'AI checks availability, offers slots, books, and sends invites in 60 seconds.' },
                  { scenario: 'Request lands at 11 PM Pacific on a Sunday.', manual: 'No response until Monday morning. Prospect contacts a competitor.', ai: 'AI books appointment instantly. Calendar updates and confirmation dispatches.' },
                  { scenario: 'Customer in a different time zone from location.', manual: 'Coordinator calculates timezone offset manually, risking scheduling errors.', ai: 'AI calculates timezone offsets automatically. Calendar invites display correct hours.' },
                  { scenario: 'Reminders for next-day appointments.', manual: 'Coordinator messages each customer manually, taking 30 minutes daily.', ai: 'AI delivers SMS and email reminders automatically with opt-out compliance.' },
                ].map((row) => (
                  <div key={row.scenario} className="px-7 py-4">
                    <p className="font-fj-mono font-semibold text-fj-ink" style={{ fontSize: '0.75rem', letterSpacing: '0.04em' }}>{row.scenario}</p>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-fj-neutral-50 px-3 py-2">
                        <p className="font-fj-mono uppercase text-fj-neutral-400" style={{ fontSize: '0.625rem', letterSpacing: '0.08em' }}>Manual</p>
                        <p className="mt-1 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem' }}>{row.manual}</p>
                      </div>
                      <div className="rounded-lg border border-[rgba(240,90,40,0.2)] bg-[rgba(240,90,40,0.05)] px-3 py-2">
                        <p className="font-fj-mono uppercase text-[#B23E13]" style={{ fontSize: '0.625rem', letterSpacing: '0.08em' }}>AI Agent</p>
                        <p className="mt-1 font-fj-body text-fj-ink" style={{ fontSize: '0.8125rem' }}>{row.ai}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        <StrategicDarkSection
          eyebrow="THE PROBLEM."
          headline="Coordinators spend three hours daily managing calendars manually."
          lead="Manual appointment scheduling is an expensive operational overhead for US service businesses. It requires continuous staff attention and suffers from human error. It halts completely outside office hours. Prospective clients expect instant replies. AI scheduling automates the entire workflow."
          pillars={[
            {
              icon: '📅',
              title: 'Manual scheduling consumes three hours each day.',
              body: 'A company managing 30 appointments daily spends multiple coordinator hours on administrative tasks. Staff return booking calls, draft confirmation emails, handle reschedules, and send manual reminders. Automating these steps eliminates administrative bottlenecks.',
            },
            {
              icon: '🌙',
              title: 'After-hours inquiries convert poorly without instant booking.',
              body: 'Over 40% of appointment requests arrive outside standard business hours. Evening and weekend visitors often choose the first provider who responds. An AI scheduling agent captures leads at 11 PM on Sunday, securing appointments on your calendar.',
            },
            {
              icon: '🚫',
              title: 'Appointment no-shows reduce weekly billable revenue.',
              body: 'Unconfirmed appointments result in empty calendars and lost revenue. Automated reminder sequences sent 24 hours and two hours prior to visits reduce no-show rates by 40%. Clients can reschedule with one text reply.',
            },
          ]}
        />

        <ServiceJourneyRow
          eyebrow="HOW WE BUILD."
          headline="From booking flow design to live appointments in 1–4 weeks."
          stages={SCHEDULING_JOURNEY_STAGES}
          closingNote="We run 100+ test bookings before your customers see the AI. You validate the conversation flow and calendar accuracy, we fix any edge cases before go-live."
        />

        <ServiceExplanation
          eyebrow="TECHNOLOGY."
          headline="The technology stack behind your AI scheduling agent."
          lead="We select conversational models, calendar integrations, and messaging infrastructure tailored to your service structure and compliance standards. Complete architecture documentation is transferred upon completion."
          reverseOnDesktop
          body={
            <>
              <p>
                Every AI scheduling agent comprises five foundational layers. The first layer is a conversational model like Claude, GPT-4o, or Gemini. The second layer integrates Google Calendar, Microsoft Outlook, or Calendly. The third layer provides messaging via Twilio or transactional email. The fourth and fifth layers power automated reminders and CRM sync with HubSpot or Salesforce. Each interface features built-in error recovery to ensure zero dropped appointments.
              </p>
              <div className="overflow-hidden rounded-xl border border-fj-neutral-200 bg-white" aria-hidden>
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-fj-neutral-100 bg-fj-neutral-50">
                      <th className="px-5 py-3 font-fj-mono text-[10px] font-semibold uppercase tracking-widest text-fj-neutral-400">Layer.</th>
                      <th className="px-5 py-3 font-fj-mono text-[10px] font-semibold uppercase tracking-widest text-fj-neutral-400">Tools We Use.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-fj-neutral-100">
                    {[
                      { layer: 'Conversational AI Layer.', tools: 'Claude, GPT-4o, Gemini.' },
                      { layer: 'Message Delivery Layer.', tools: 'Twilio, MessageBird, Postmark, WhatsApp Business API.' },
                      { layer: 'Calendar & Booking Layer.', tools: 'Google Calendar, Microsoft Outlook, Calendly, Acuity.' },
                      { layer: 'CRM & Pipeline Layer.', tools: 'HubSpot, Salesforce, Pipedrive, Zoho.' },
                      { layer: 'Payment Collection Layer.', tools: 'Stripe, card deposit and automated refund workflows.' },
                      { layer: 'Reminder & Workflow Layer.', tools: 'n8n, Zapier, custom Redis scheduler, SMS APIs.' },
                      { layer: 'Observability & Analytics.', tools: 'Custom telemetry dashboards, Google Sheets export.' },
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
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>Five Scheduling AI Types We Build.</p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { name: 'Clinic & Healthcare Booking.', desc: 'Multi-provider patient intake and appointment booking by text. Features specialty routing, Spanish bilingual support, copay collection, and HIPAA compliance.' },
                  { name: 'Real Estate Showing Booking.', desc: 'Lead-to-showing automation from Zillow and Realtor.com. Handles slot booking, Follow Up Boss CRM sync, and lockbox access instructions.' },
                  { name: 'Demo & Consultation Booking.', desc: 'B2B sales and advisory consultation scheduling. Features lead qualification, AE routing, Microsoft Teams links, and multi-touch reminder flows.' },
                  { name: 'Dealership Test Drive Booking.', desc: 'Showroom test drive booking from digital ads. Handles model preference matching, dealer calendar sync, and automated SMS appointment reminders.' },
                  { name: 'Field Service & Contractor Booking.', desc: 'Home service scheduling for HVAC and plumbing. Integrates with ServiceTitan and Jobber for work order dispatch and Stripe card deposits.' },
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

        <section className="py-12 md:py-16 bg-[#FAFAF7] border-t-[1.5px] border-b-[1.5px] border-[rgba(240,90,40,0.18)]">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {SCHEDULING_STATS.map((stat) => (
                <div key={stat.value}>
                  {stat.categoryLabel && (
                    <div className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-fj-mono font-bold uppercase bg-[rgba(240,90,40,0.06)] border border-[rgba(240,90,40,0.22)] text-[#B23E13] text-[9px] tracking-[0.13em]">
                      <span className="inline-block h-1 w-1 rounded-full bg-[#F05A28]" aria-hidden="true" />
                      {stat.categoryLabel}
                    </div>
                  )}
                  <p className="font-fj-display font-bold text-[#F05A28] text-[clamp(2.25rem,4vw,3.25rem)] leading-none tracking-[-0.04em]">{stat.value}</p>
                  <p className="mt-3 font-fj-body font-semibold text-fj-ink text-[0.9375rem] leading-normal">{stat.label}</p>
                  {stat.microcopy && <p className="mt-1.5 font-fj-body text-fj-neutral-400 text-[0.8125rem] leading-relaxed">{stat.microcopy}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <CityContextSection
          eyebrow="US SCHEDULING AI MARKET."
          headline="Four time zones, daylight transitions, and after-hours demand require automated scheduling."
          leadParagraphs={[
            'US appointment scheduling involves distinct geographic challenges. Prospective clients text rather than fill out static forms. Many book at 9 PM Pacific, when East Coast offices are closed. Half of incoming requests originate in a different time zone from the provider. Clock shifts occur twice yearly across most states, while Arizona and Hawaii remain stationary. Businesses that respond instantly and calculate timezone offsets accurately secure the booking.',
            'FactoryJet AI scheduling agents are engineered for this operating reality. The agent holds conversational dialogues over SMS, email, or web chat in English and Spanish. It checks live calendar availability in real time. It generates instant confirmations with accurate timezone offsets. Automated reminder sequences respect TCPA consent rules. For clinics, brokerages, and field contractors, scheduling automation drives immediate revenue growth.',
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden="true">
                <p className="font-fj-display font-semibold text-fj-ink" style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}>
                  The appointment booked at midnight is still a confirmed revenue event at 9 AM.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Healthcare & Clinics', 'Real Estate', 'Education & Training', 'Automotive', 'Professional Services', 'Home Services'].map((ind) => (
                  <span key={ind} className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#B23E13]" style={{ fontSize: '10px', letterSpacing: '0.08em' }}>{ind}</span>
                ))}
              </div>
            </>
          }
          stats={SCHEDULING_MARKET_STATS}
        />

        <ComparisonTable
          eyebrow="HOW WE COMPARE."
          headline="FactoryJet vs. Manual Booking vs. Calendly vs. a Receptionist."
          lead="Fixed price, text-native, English and Spanish scheduling AI: the honest comparison."
          pullQuote={{
            stat: 'Fixed price',
            caption:
              'An AI scheduling agent books appointments by text and email. It supports English and Spanish natively. It syncs two ways with Google Calendar and Outlook. It delivers instant confirmations, invites, and reminders to eliminate no-shows. There is zero monthly software fee to FactoryJet.',
          }}
          columns={SCHEDULING_COMPARISON_COLUMNS}
          rows={SCHEDULING_COMPARISON_ROWS}
          footer="We quote a fixed price after a scoping call. Comparison reflects the typical shape of each option, not a quote from any named vendor."
        />

        <IndustriesGrid
          variant="cards"
          eyebrow="WHO WE BUILD FOR."
          headline="AI scheduling agents for every appointment-driven US business."
          lead="Every industry has different booking flows, calendar systems, and compliance requirements. We build for yours."
          sectors={SCHEDULING_INDUSTRIES}
        />

        <GetFreeQuoteCTA />
        <TestimonialsSection
          eyebrow="CLIENT RESULTS."
          headline="What founders say about working with FactoryJet."
        />

        {/* ── Enterprise Security & Scheduling Governance Architecture ── */}
        <section className="py-12 md:py-16 bg-[#FAFAF7] border-t border-b border-[rgba(240,90,40,0.18)]">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="font-fj-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#B23E13]">
              Enterprise Security &amp; Scheduling Governance.
            </p>
            <h2 className="mt-2 font-fj-display text-[1.875rem] font-bold text-fj-ink">
              Enterprise security, guardrails, and calendar governance architecture.
            </h2>
            <p className="mt-3 max-w-[72ch] font-fj-body text-[1rem] leading-relaxed text-fj-neutral-600">
              AI scheduling agents access enterprise calendars, customer records, and communication gateways. We enforce SOC 2, HIPAA, and TCPA standards across every production system.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 shadow-sm">
                <span className="font-fj-mono text-[12px] font-bold text-[#B23E13]">SECURITY: SOC 2 &amp; HIPAA.</span>
                <h3 className="mt-2 font-fj-body text-[1.05rem] font-bold text-fj-ink">Protected Health Information.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Patient intake records and calendar invites are encrypted at rest and in transit. Strict compliance with SOC 2, HIPAA, GDPR, and TCPA standards.
                </p>
              </div>
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 shadow-sm">
                <span className="font-fj-mono text-[12px] font-bold text-[#B23E13]">INTEGRATION: CRM &amp; ERP SYNC.</span>
                <h3 className="mt-2 font-fj-body text-[1.05rem] font-bold text-fj-ink">Two-Way Calendar Sync.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Bidirectional REST APIs and authenticated webhooks sync booking records. They transfer lead qualification scores and CRM sync updates to HubSpot, Salesforce, and NetSuite.
                </p>
              </div>
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 shadow-sm">
                <span className="font-fj-mono text-[12px] font-bold text-[#B23E13]">ACCESS: RBAC &amp; SSO.</span>
                <h3 className="mt-2 font-fj-body text-[1.05rem] font-bold text-fj-ink">Role-Based Access Control.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Role-based access control (RBAC) and single sign-on (SSO) protect calendar permissions, prompt engineering, and staff roster settings.
                </p>
              </div>
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 shadow-sm">
                <span className="font-fj-mono text-[12px] font-bold text-[#B23E13]">ORCHESTRATION: RAG.</span>
                <h3 className="mt-2 font-fj-body text-[1.05rem] font-bold text-fj-ink">Deterministic Tool Execution.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Retrieval augmented generation (RAG) with vector search, embeddings, function calling, tool use, and human in the loop controls.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS."
          headline="Everything to Know Before You Automate Appointment Booking."
          lead="The questions we answer on every AI scheduling discovery call, answered honestly, with real use case examples."
          categories={SCHEDULING_FAQ_CATEGORIES}
          items={SCHEDULING_FAQ_ITEMS}
        />

        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="GET STARTED."
            headline="Book a Free AI Scheduling Strategy Call."
            sub="Tell us your appointment volume, current booking workflows, and biggest friction points. We map how an AI scheduling agent streamlines your calendar. We provide a transparent fixed-price estimate before writing any code."
            primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See AI Agent Services', href: '/services/ai-agent-development' }}
            objectionHandler="Fixed price after a scoping call. Full code ownership. SMS, email, Google Calendar, and Outlook ready. 500+ businesses served."
          />
        </div>

      </main>

      <SiteFooter locale="us" />
    </>
  );
}
