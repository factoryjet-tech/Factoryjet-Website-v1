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
  title: 'AI Voice Agent Development for US Businesses | FactoryJet',
  description:
    'Custom AI voice agent development for US businesses. Inbound support and outbound lead qualification callers in English and Spanish with TCPA compliance.',
  keywords: [
    'ai voice agent development',
    'ai voice agent company usa',
    'ai calling agent developer',
    'custom voice ai agent usa',
    'conversational voice ai development',
    'tcpa compliant ai voice agent',
    'inbound call automation ai',
    'outbound lead qualification ai voice',
    'bilingual voice ai english spanish',
    'twilio ai voice agent integration',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Voice Agent Development for US Businesses | FactoryJet',
    description:
      'Custom AI voice agents in English and Spanish for inbound support, appointment booking, and instant outbound lead qualification with CRM sync.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent',
    images: [
      {
        url: 'https://factoryjet.com/images/us/services/hero-ai-agent-us.webp',
        width: 1200,
        height: 800,
        alt: 'FactoryJet AI Voice Agent Development Services',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Voice Agent Development USA | FactoryJet',
    description:
      'Human-sounding AI voice callers in English and Spanish for lead qualification, appointments, and inbound support. Built with TCPA guardrails.',
    images: ['https://factoryjet.com/images/us/services/hero-ai-agent-us.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent',
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
const VOICE_FAQ_CATEGORIES = [
  { key: 'basics', label: 'Voice AI Basics' },
  { key: 'language', label: 'English & Spanish Audio' },
  { key: 'compliance', label: 'TCPA & Legal Compliance' },
  { key: 'process', label: 'Process & Implementation' },
  { key: 'pricing', label: 'Pricing & Infrastructure' },
];

const VOICE_FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'What is an AI voice agent and how does it differ from a traditional IVR phone tree?',
    answer:
      'A traditional IVR forces callers through rigid numeric keypad menus ("press 1 for sales") and fails when someone speaks naturally. An AI voice agent conducts fluent, natural two-way spoken conversations: listening with sub-second latency, understanding accents, resolving questions, checking live databases, and taking actions like scheduling appointments or logging CRM notes.',
  },
  {
    category: 'basics',
    question: 'What inbound and outbound call workflows can voice agents handle?',
    answer:
      'Common workflows include outbound speed-to-lead qualification (calling web form submissions within 5 minutes), inbound customer service and order tracking, HVAC and home contractor estimate booking, clinic appointment scheduling, payment reminder notifications, and post-service satisfaction surveys.',
  },
  {
    category: 'basics',
    question: 'Can the AI voice agent transfer calls to a live human rep?',
    answer:
      'Yes. Real-time warm handoff is built into every deployment. If a caller requests a specialist, requires custom contract terms, or exhibits frustration, the agent executes a live SIP transfer to your phone queue while displaying an instant transcript and summary to the receiving representative.',
  },
  {
    category: 'basics',
    question: 'How natural does the AI voice sound on a real phone connection?',
    answer:
      'We utilize ultra-low-latency neural speech synthesis models (such as Cartesia, ElevenLabs, and Deepgram) optimized specifically for narrowband telephony codecs. Calls exhibit natural pauses, conversational inflection, and sub-500ms conversational turnarounds.',
  },
  {
    category: 'language',
    question: 'Which languages and dialects are supported?',
    answer:
      'English and Spanish are fully supported and tuned for US regional accents, Mexican Spanish, and Caribbean Spanish dialects. The agent detects language automatically at the start of the call and code-switches seamlessly if a caller mixes English and Spanish phrases.',
  },
  {
    category: 'language',
    question: 'How does speech recognition perform with background noise and speakerphones?',
    answer:
      'We implement telephony-tuned acoustic noise filtering and fine-tuned vocabulary recognition models for your specific industry terms (product names, part numbers, street addresses, and local city names), maintaining high accuracy even on hands-free speakerphone connections.',
  },
  {
    category: 'compliance',
    question: 'Is it legal to use AI voice agents for outbound calls in the United States?',
    answer:
      'Yes, provided calls strictly adhere to the Telephone Consumer Protection Act (TCPA). Following the February 2024 FCC ruling on AI-generated voices, outbound commercial calls require documented prior express consent. We build consent verification, calling-window locks (8 AM to 9 PM in the recipient local timezone), and automated DNC scrubbing directly into the telephony layer.',
  },
  {
    category: 'compliance',
    question: 'How are opt-out and Do-Not-Call requests handled during a call?',
    answer:
      'The voice agent recognizes opt-out intent across colloquial phrases in English and Spanish ("stop calling me", "no me llamen más"). It confirms the request immediately, ends the call gracefully, and writes an instant suppression flag to your CRM and carrier suppression lists.',
  },
  {
    category: 'compliance',
    question: 'How do you handle call recording and two-party consent states?',
    answer:
      'The agent provides clear verbal recording disclosures at the start of the call. For all-party consent states (such as California, Florida, and Pennsylvania), recording policies are configured dynamically based on the called party area code and physical address.',
  },
  {
    category: 'compliance',
    question: 'Can voice agents handle healthcare data under HIPAA guidelines?',
    answer:
      'Yes. For medical clinics and dental practices, voice pipelines run on BAA-supported infrastructure with zero audio retention in public LLM memory, ensuring patient scheduling and reminder data remain fully protected.',
  },
  {
    category: 'process',
    question: 'How long does an AI voice agent deployment take?',
    answer:
      'A focused single-purpose voice agent (such as an appointment booking caller) takes 3 to 4 weeks from script approval to live dialing. Multi-channel platforms with bi-directional CRM integration take 5 to 6 weeks.',
  },
  {
    category: 'process',
    question: 'What do we need to provide before building starts?',
    answer:
      'We need your call flow objectives, typical objection patterns, sample recordings of your best human phone reps, CRM credentials, and documentation of where lead consent is captured.',
  },
  {
    category: 'process',
    question: 'How do we monitor call quality and accuracy after launch?',
    answer:
      'You receive an operations dashboard displaying audio recordings, full transcripts, latency metrics, sentiment scores, and conversion dispositions for 100% of calls.',
  },
  {
    category: 'pricing',
    question: 'What are the ongoing telephony and usage costs?',
    answer:
      'Usage costs are billed directly to your own accounts (Twilio/Telnyx for carrier minutes, Deepgram for speech-to-text, and ElevenLabs/Cartesia for text-to-speech) at published carrier rates with zero markup from FactoryJet.',
  },
  {
    category: 'pricing',
    question: 'What is the typical ROI on an AI voice agent?',
    answer:
      'A human calling rep averages 60 to 80 dials per day with recurring salary and recruitment overhead. An AI voice agent can execute 200 to 1,000+ simultaneous dials during peak response windows, cutting cost per qualified lead by 60% or more.',
  },
  {
    category: 'pricing',
    question: 'Do you offer pilots before full-scale deployment?',
    answer:
      'Yes. We offer a 2-week pilot against a segmented lead batch, providing full call recordings, transcripts, and conversion analytics to validate unit economics before enterprise scaling.',
  },
  {
    category: 'pricing',
    question: 'Do we own the voice agent code and prompts?',
    answer:
      'Yes. You receive full ownership of the orchestration codebase, conversation prompt trees, webhooks, and carrier account configurations.',
  },
  {
    category: 'pricing',
    question: 'How do we update phone scripts or business hours as our offerings change?',
    answer:
      'We provide a simple administrative portal where non-technical staff can update operating hours, calendar links, service descriptions, and pricing references without modifying code.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schemas
───────────────────────────────────────────────────────────────────────────── */
const VOICE_FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: VOICE_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const VOICE_SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent#service',
  serviceType: 'AI voice agent development',
  name: 'Custom AI Voice Agent Development',
  description:
    'Custom AI voice agent development and integration for US businesses: bilingual English and Spanish voice callers for lead qualification, appointment booking, and inbound support with TCPA compliance.',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'BusinessAudience',
    name: 'US real estate brokerages, home service contractors, healthcare clinics, lenders, and sales operations',
  },
};

const VOICE_WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent#webpage',
  url: 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent',
  name: 'AI Voice Agent Development for US Businesses | FactoryJet',
  description:
    'Custom AI voice agents in English and Spanish for inbound support, appointment booking, and instant outbound lead qualification with CRM sync.',
  dateModified: PAGE_MODIFIED,
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
};

const VOICE_BREADCRUMB_ITEMS = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
  { name: 'AI Voice Agent', url: 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent' },
];

const VOICE_BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: VOICE_BREADCRUMB_ITEMS.map((b, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: b.name,
    item: b.url,
  })),
};

const STATS = [
  { b: '< 500ms', s: 'conversational latency for natural spoken turnarounds' },
  { b: 'Bilingual', s: 'fluent English and Spanish with real-time code switching' },
  { b: 'TCPA safe', s: 'calling window locks, DNC scrubbing & consent checks' },
  { b: 'Full ownership', s: 'you own the telephony connectors, prompts and cloud' },
];

const SOURCED_STATS = [
  {
    v: '61.1%',
    d: 'of US residents who speak a non-English language at home speak Spanish, making bilingual telephony essential for national operations.',
    src: 'US Census Bureau, ACS',
    href: 'https://www.census.gov/newsroom/press-releases/2025/2017-2021-acs-language-use-tables.html',
  },
  {
    v: '5 min',
    d: 'is the critical response threshold: calling an inbound web lead within 5 minutes produces the highest contact-to-qualification ratio.',
    src: 'Lead Response Management Study',
    href: 'https://www.leadresponsemanagement.org/lrm_study/',
  },
  {
    v: '8AM–9PM',
    d: 'is the strict federal calling window allowed under FCC regulations, enforced automatically based on recipient area code time zones.',
    src: 'FCC Telemarketing Regulations (47 CFR § 64.1200)',
    href: 'https://www.law.cornell.edu/cfr/text/47/64.1200',
  },
];

const CAPABILITIES = [
  {
    t: 'Sub-Second Conversational Latency',
    d: 'Engineered with streaming speech recognition and speech synthesis pipelines to deliver human-like conversational responsiveness under 500ms.',
  },
  {
    t: 'Bilingual English & Spanish Audio',
    d: 'Understands regional dialects and handles code-switching smoothly when callers alternate between English and Spanish during the same call.',
  },
  {
    t: 'Live CRM & Calendar Integration',
    d: 'Queries open appointment slots in Google Calendar or Outlook and writes verified qualification briefs directly into HubSpot or Salesforce.',
  },
  {
    t: 'TCPA Calling Window Controls',
    d: 'Calculates the recipient local timezone from their area code and address, preventing calls outside permitted legal operating hours.',
  },
  {
    t: 'Real-Time Warm Human Transfer',
    d: 'Transfers live callers to human account executives or dispatchers with complete spoken summaries and on-screen transcripts.',
  },
  {
    t: '100% Call Transcription & QA',
    d: 'Transcribes every call recording, extracts custom structured fields, scores conversation sentiment, and flags edge cases for review.',
  },
];

const INDUSTRIES = [
  {
    name: 'Real Estate & Brokerages',
    desc: 'Calls leads from Zillow and Realtor.com within 5 minutes, verifies pre-approval and purchase timeline, and schedules property showings on agent calendars.',
  },
  {
    name: 'Home Services & Contractors',
    desc: 'Answers inbound emergency repair calls, captures service addresses, checks technician availability, and books on-site inspection windows.',
  },
  {
    name: 'Healthcare & Medical Clinics',
    desc: 'Handles appointment scheduling, patient intake confirmations, and bilingual visit preparation checklists with HIPAA-compliant data separation.',
  },
  {
    name: 'Financial Services & Lending',
    desc: 'Executes first-party payment reminders, collects verification documents, and updates loan application stages with recorded verbal consent.',
  },
  {
    name: 'Automotive Dealerships',
    desc: 'Engages online test-drive requests, verifies trade-in intent, and confirms showroom appointments directly with your BDC department.',
  },
  {
    name: 'DTC E-Commerce Brands',
    desc: 'Follows up on high-value abandoned orders by phone, answers sizing and delivery questions, and texts secure checkout links.',
  },
];

const STEPS = [
  {
    n: '01',
    t: 'Script & Consent Discovery',
    d: 'We document your call objectives, objection handling patterns, TCPA consent capture points, and CRM field mapping requirements.',
  },
  {
    n: '02',
    t: 'Voice Model & Persona Tuning',
    d: 'We select neural voice profiles, tune pronunciations for your industry terms and brand names, and benchmark audio quality.',
  },
  {
    n: '03',
    t: 'Telephony & API Engineering',
    d: 'We configure Twilio or Telnyx SIP trunks, connect speech-to-text models, and wire CRM webhooks into your sandbox environment.',
  },
  {
    n: '04',
    t: '100-Call Simulation & Dialing Test',
    d: 'We execute 100 test calls with diverse accents, background noise, and interruptions, tuning latency and escalation triggers.',
  },
  {
    n: '05',
    t: 'Production Rollout & Monitoring',
    d: 'Live deployment with real-time transcription dashboards, DNC suppression logs, and weekly conversation flow optimization reviews.',
  },
];

export default function AIVoiceAgentPage() {
  return (
    <>
      <script id="voice-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(VOICE_FAQ_SCHEMA) }} />
      <script id="voice-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(VOICE_SERVICE_SCHEMA) }} />
      <script id="voice-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(VOICE_WEBPAGE_SCHEMA) }} />
      <script id="voice-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(VOICE_BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        <Breadcrumbs items={VOICE_BREADCRUMB_ITEMS} />

        {/* Hero Section */}
        <section className="pp-dotgrid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(40px,5vh,72px)', paddingBottom: 'clamp(44px,6vh,84px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">AI voice agents // US operations</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '19ch' }}>
                  Human-sounding voice agents in <span className="pp-grad">English and Spanish</span>.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '52ch' }}>
                  FactoryJet engineers custom AI voice agents for US sales and customer service teams. We build bilingual phone agents for instant lead qualification, appointment booking, and inbound customer support with sub-second latency and strict TCPA compliance.
                </p>
                <HeroInlineForm source="us_ai_voice_agent_hero" region="us" submitLabel="Scope your voice agent" />
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/us/services/hero-ai-agent-us.webp"
                  alt="Operations director reviewing an AI voice agent call transcription dashboard"
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
            <h2 style={{ marginTop: '10px' }}>What is an AI voice agent?</h2>
            <p className="pp-lead" style={{ marginTop: '16px', maxWidth: '74ch' }}>
              An AI voice agent is software capable of conducting full two-way spoken telephone conversations in real time. Combining real-time streaming speech recognition (STT), conversational language models (LLMs), and neural voice synthesis (TTS), the agent listens to caller intent, answers questions, checks live databases, and schedules appointments without requiring keypad inputs.
            </p>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '74ch' }}>
              Deployed across Twilio or Telnyx SIP telephony, our voice agents integrate natively with HubSpot, Salesforce, and Google Calendar, transcribing 100% of calls and routing complex conversations to human reps with live context.
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
            <h2 style={{ marginTop: '10px' }}>The economics and regulations of voice automation</h2>
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
            <AiAgentRoiCalculator defaultWorkflow="sales" source="ai_voice_agent_page" />
          </div>
        </section>

        {/* Capabilities Bento Grid */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// capabilities'}</p>
            <h2 style={{ marginTop: '10px' }}>What our AI voice agents handle</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              Built for high-volume revenue and support operations. Every call is governed by strict TCPA compliance and transcription logging.
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
            <h2 style={{ marginTop: '10px' }}>Engineered for your phone operations</h2>
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
            <h2 style={{ marginTop: '10px' }}>FactoryJet AI voice agent vs. traditional phone operations</h2>
            <div style={{ marginTop: '28px', overflowX: 'auto' }}>
              <table className="pp-table" style={{ width: '100%', minWidth: '640px' }}>
                <thead>
                  <tr>
                    <th>Capability</th>
                    <th className="me">FactoryJet Custom Voice Agent</th>
                    <th>In-House Calling Team</th>
                    <th>Outsourced Call Center (BPO)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td><strong>Cost Model</strong></td>
                    <td><strong>Fixed implementation build + direct usage</strong></td>
                    <td>Salary, benefits, and ongoing management</td>
                    <td>Per-seat or per-minute markup contracts</td>
                  </tr>
                  <tr>
                    <td><strong>Bilingual English &amp; Spanish</strong></td>
                    <td>Yes (automatic language detection)</td>
                    <td>Requires hiring specialized bilingual reps</td>
                    <td>Extra hourly charge for bilingual agents</td>
                  </tr>
                  <tr>
                    <td><strong>Speed-to-Lead Response</strong></td>
                    <td>Under 5 minutes (automated trigger)</td>
                    <td>Hours to days depending on queue</td>
                    <td>Varies by shift and staffing volume</td>
                  </tr>
                  <tr>
                    <td><strong>Simultaneous Call Capacity</strong></td>
                    <td>Unlimited concurrent lines</td>
                    <td>1 call per representative</td>
                    <td>Capped by purchased seat capacity</td>
                  </tr>
                  <tr>
                    <td><strong>TCPA &amp; Timezone Controls</strong></td>
                    <td>Yes (automated timezone locks &amp; DNC)</td>
                    <td>Relies on rep manual compliance</td>
                    <td>Relies on third-party center training</td>
                  </tr>
                  <tr>
                    <td><strong>100% Call Transcripts &amp; CRM Sync</strong></td>
                    <td>Yes (instant structured brief to CRM)</td>
                    <td>Manual rep summaries (often incomplete)</td>
                    <td>Weekly batch export files</td>
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
            <h2 style={{ marginTop: '10px' }}>From script discovery to live dialing in 4 weeks</h2>
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
            <h2 style={{ marginTop: '10px' }}>Built for high-velocity phone operations</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pp-card" style={{ padding: '28px' }}>
                <p className="font-fj-body text-[1rem] leading-relaxed text-fj-neutral-700 italic">
                  &ldquo;Calling inbound property estimate requests within 3 minutes changed our booking conversion rate completely. Homeowners get immediate scheduling assistance in English or Spanish, and our crew calendar stays full.&rdquo;
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
                  &ldquo;We no longer have missed calls piling up over the weekend. The voice agent answers inquiries, takes verified customer details, and creates organized tickets in our helpdesk before Monday morning.&rdquo;
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
          headline="Questions revenue and operations leaders ask before deploying voice AI"
          lead="Everything you need to know about neural voice latency, TCPA compliance, bilingual speech recognition and CRM sync."
          categories={VOICE_FAQ_CATEGORIES}
          items={VOICE_FAQ_ITEMS}
        />

        {/* Final CTA */}
        <FinalCTA
          eyebrow="READY TO SCALE YOUR PHONE OPERATIONS?"
          headline="Scope your custom AI voice agent today."
          sub="Book a 30-minute discovery call with our engineering team. We will map your call objectives, review your CRM integration requirements, and provide a fixed-price implementation blueprint."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'View AI Agent Overview', href: '/services/ai-agent-development' }}
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
