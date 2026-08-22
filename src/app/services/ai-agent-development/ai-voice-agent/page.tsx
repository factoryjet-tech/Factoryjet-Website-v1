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
  title: 'AI Voice Agents for US Operations | FactoryJet',
  description:
    'Custom conversational AI voice agents for US inbound phone support, qualification and appointment booking. Sub-500ms latency, Twilio SIP telephony, English and Spanish.',
  keywords: [
    'ai voice agents',
    'custom voice ai development',
    'conversational ai voice agent usa',
    'twilio ai voice agent integration',
    'bilingual ai voice agent english spanish',
    'ai phone answering service for business',
    'ai appointment booking voice agent',
    'ai call center automation',
    'inbound phone support ai agent',
    'voice ai development company',
    'real time voice agent engineering',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Voice Agents for US Operations | FactoryJet',
    description:
      'Custom conversational AI voice agents with sub-500ms latency for inbound support, lead qualification, and appointment scheduling. English and Spanish ready.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent',
    images: [
      {
        url: 'https://factoryjet.com/images/us/services/hero-ai-chatbot.webp',
        width: 1200,
        height: 800,
        alt: 'FactoryJet AI Voice Agent Development Services',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Voice Agents USA | FactoryJet',
    description:
      'Human-sounding AI voice agents for US inbound support and qualification. Sub-500ms latency, Twilio SIP telephony, CRM sync.',
    images: ['https://factoryjet.com/images/us/services/hero-ai-chatbot.webp'],
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
   FAQ Data (24 Answer-First items mapping to real search intent)
───────────────────────────────────────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Voice AI basics' },
  { key: 'telephony', label: 'Telephony & latency' },
  { key: 'languages', label: 'Languages & accents' },
  { key: 'compliance', label: 'TCPA & compliance' },
  { key: 'process', label: 'Process & ownership' },
  { key: 'architecture', label: 'Technical architecture' },
];

const FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'What is an AI voice agent and how does it work on phone calls?',
    answer:
      'An AI voice agent is software that handles live spoken phone conversations in real time. It pairs streaming speech-to-text (STT), large language model reasoning, and low-latency text-to-speech (TTS) synthesis over telephony protocols (Twilio, SIP trunking). The agent listens to the caller, interprets intent, executes database tool lookups (checking order status or calendar slots), and speaks back with natural human intonation in under 500 milliseconds.',
  },
  {
    category: 'basics',
    question: 'How realistic and natural does an AI voice agent sound?',
    answer:
      'Modern neural voice models sound indistinguishable from human representatives. They incorporate realistic conversational pauses, breath cadence, natural sentence pacing, and dynamic pitch variation, completely avoiding the robotic, monotone prompts of legacy IVR phone trees.',
  },
  {
    category: 'basics',
    question: 'What types of phone calls can an AI voice agent handle?',
    answer:
      'Primary production use cases include inbound customer service (Where Is My Order tracking, store hours, return policies), inbound sales qualification, automated appointment and consultation booking, patient intake screening, and emergency after-hours dispatch.',
  },
  {
    category: 'basics',
    question: 'How does the voice agent handle customer interruptions (barge-in)?',
    answer:
      'The telephony pipeline deploys full-duplex audio streaming with acoustic echo cancellation. If a caller interrupts the voice agent mid-sentence, speech synthesis halts instantly (< 80ms), and the agent listens to the caller new instruction without talking over them.',
  },
  {
    category: 'telephony',
    question: 'What telephony infrastructure and providers do you support?',
    answer:
      'We integrate natively with Twilio Voice, Telnyx, Plivo, Amazon Chime, RingCentral, and standard SIP trunking connections to your existing PBX or call center software.',
  },
  {
    category: 'telephony',
    question: 'What is the end-to-end voice latency for spoken responses?',
    answer:
      'Our streaming audio pipelines achieve total turn-around latency under 500 milliseconds: ~150ms speech-to-text, ~150ms LLM streaming token generation, and ~120ms neural audio synthesis, mirroring natural human conversation rhythm.',
  },
  {
    category: 'telephony',
    question: 'Can the voice agent transfer callers to a live human representative?',
    answer:
      'Yes. The agent executes warm call transfers (SIP REFER or Twilio Dial) to any phone number, helpdesk queue, or mobile phone. Before completing the transfer, it plays a brief hold greeting and passes a call summary to the human agent.',
  },
  {
    category: 'telephony',
    question: 'Can the voice agent query our CRM, calendar, or ERP during a call?',
    answer:
      'Yes. The agent executes real-time function calls while speaking: looking up caller phone numbers in HubSpot/Salesforce, checking calendar slot availability, or retrieving order tracking from Shopify and NetSuite.',
  },
  {
    category: 'languages',
    question: 'Does the voice agent support bilingual English and Spanish phone calls?',
    answer:
      'Yes. The agent automatically detects whether the caller speaks English or Spanish within the first spoken phrase, responding with authentic regional accents and native fluency across both languages.',
  },
  {
    category: 'languages',
    question: 'Can we select custom brand voices and accents?',
    answer:
      'Yes. You can select from dozens of studio-quality male and female voices, customize regional accents (e.g. Standard American, Texas, British), or create a custom cloned brand voice with licensed studio recordings.',
  },
  {
    category: 'languages',
    question: 'How does the agent handle noisy background environments or poor cell connections?',
    answer:
      'The speech-to-text layer incorporates noise-suppression and phonetic beam search algorithms that accurately transcribe spoken speech even in moving vehicles, windy outdoors, or crowded rooms.',
  },
  {
    category: 'languages',
    question: 'Can the voice agent spell out confirmation codes, dates, and email addresses clearly?',
    answer:
      'Yes. The model formats alphanumeric codes phonetically (e.g. "A as in Alpha, 4, 9, B as in Bravo") and repeats critical details to ensure complete caller clarity.',
  },
  {
    category: 'compliance',
    question: 'How do you ensure compliance with TCPA and FCC calling regulations?',
    answer:
      'All voice agents strictly comply with TCPA (Telephone Consumer Protection Act) and FCC 47 CFR § 64.1200 regulations: enforcing valid US calling hour windows (8am–9pm recipient local time), immediate opt-out compliance, and mandatory identification disclosures.',
  },
  {
    category: 'compliance',
    question: 'Is call audio recorded and stored securely?',
    answer:
      'Call audio recordings, transcripts, and metadata are encrypted in transit (SRTP/TLS) and stored securely in your private cloud storage (AWS S3 / Google Cloud Storage) with configurable automated deletion schedules.',
  },
  {
    category: 'compliance',
    question: 'Can the voice agent take credit card payments over the phone?',
    answer:
      'For PCI-DSS compliance, credit card collection is handled via secure DTMF keypad tones (touch-tone routing) or by sending an instant SMS checkout link while remaining on the call, preventing raw card data from touching voice transcripts.',
  },
  {
    category: 'compliance',
    question: 'How do you prevent hallucinations during live phone conversations?',
    answer:
      'The agent operates under deterministic retrieval constraints: if a caller asks a question outside the indexed knowledge base, the agent politely states it will connect them with a specialist rather than guessing.',
  },
  {
    category: 'process',
    question: 'How long does an AI voice agent implementation take?',
    answer:
      'A focused voice agent handling inbound call triage, FAQ answering, and appointment booking takes 3 to 4 weeks from discovery to live phone number routing.',
  },
  {
    category: 'process',
    question: 'What is the pricing structure for building an AI voice agent?',
    answer:
      'FactoryJet operates on a transparent fixed-price implementation model. You pay your direct telephony (Twilio) and speech model usage with zero recurring per-minute software markup from us.',
  },
  {
    category: 'process',
    question: 'Do we own the voice agent code and telephony prompts?',
    answer:
      'Yes. You receive full ownership of the orchestration codebase, prompt configurations, and private cloud deployment with zero vendor lock-in.',
  },
  {
    category: 'process',
    question: 'How do we test and review call recordings before go-live?',
    answer:
      'We set up a private staging phone number where your team can dial in, simulate diverse customer conversations, and review transcripts and audio recordings in real time.',
  },
  {
    category: 'architecture',
    question: 'How does the voice pipeline manage audio jitter and network packet loss?',
    answer:
      'We utilize adaptive jitter buffering and WebRTC/SIP forward error correction (FEC), maintaining crisp audio quality even when callers experience spotty cellular connections.',
  },
  {
    category: 'architecture',
    question: 'What speech synthesis engine powers the voice output?',
    answer:
      'We deploy ultra-low-latency neural TTS models (such as Cartesia Sonic, ElevenLabs Turbo v2.5, or Deepgram Aura) streaming raw PCM audio chunks over WebSockets.',
  },
  {
    category: 'architecture',
    question: 'How does the voice agent fill conversational silence during database queries?',
    answer:
      'When an API lookup requires > 400ms (such as checking complex ERP inventory), the agent dynamically injects natural conversational filler cues ("Let me check that warehouse record for you right now...") to prevent awkward dead air.',
  },
  {
    category: 'architecture',
    question: 'Can the voice agent trigger SMS notifications during or after the call?',
    answer:
      'Yes. The agent can dispatch instant SMS text messages via Twilio containing booking confirmations, driving directions, or payment checkout links while the caller is still on the line.',
  },
  {
    category: 'architecture',
    question: 'How does the system handle voicemail detection on outbound calls?',
    answer:
      'Our telephony engine deploys neural Answering Machine Detection (AMD) within 1.2 seconds, leaving a crisp pre-recorded voicemail message if a machine answers, or initiating live conversational dialogue if a human picks up.',
  },
  {
    category: 'architecture',
    question: 'Can the voice agent route calls based on caller geographical location?',
    answer:
      'Yes. The agent inspects caller area code and carrier geolocation metadata, routing inquiries to the appropriate regional branch office or state-licensed specialist automatically.',
  },
  {
    category: 'architecture',
    question: 'How does the system handle high-concurrency phone call spikes?',
    answer:
      'Because the voice architecture runs on elastic cloud infrastructure with Twilio SIP trunking, it can handle hundreds of simultaneous calls with zero busy signals or dropped connections.',
  },
  {
    category: 'architecture',
    question: 'What analytics are provided on the voice operations dashboard?',
    answer:
      'Real-time dashboards track Call Duration, Average Latency, Intent Resolution Rate, Human Transfer Frequency, Customer Sentiment Curves, and Audio Dropoff Points.',
  },
  {
    category: 'architecture',
    question: 'How does the voice agent handle callers with heavy regional accents?',
    answer:
      'The speech-to-text model is trained across diverse regional American and Spanish dialects, dynamically adjusting phoneme probability scoring to maintain high accuracy regardless of accent variation.',
  },
  {
    category: 'architecture',
    question: 'Can the voice agent route calls based on dynamic caller account value?',
    answer:
      'Yes. Upon identifying the caller phone number, the agent checks your CRM tier: routing Enterprise VIP accounts directly to assigned Account Managers while autonomously serving standard accounts.',
  },
  {
    category: 'architecture',
    question: 'How do you test voice agent response quality before production launch?',
    answer:
      'We run automated dialer test suites across 200+ simulated caller scenarios with varied background noise levels, testing latency, interruption handling, and tool accuracy before cutover.',
  },
  {
    category: 'architecture',
    question: 'Can the voice agent handle simultaneous multi-party conference calls?',
    answer:
      'Yes. The agent can join scheduled conference lines as an active participant, taking spoken instructions from multiple participants while transcribing and executing real-time database tasks.',
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
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent#service',
  serviceType: 'AI voice agent development',
  name: 'Custom Conversational AI Voice Agent Development',
  description:
    'Custom conversational AI voice agents for US businesses: sub-500ms latency, Twilio SIP telephony, English/Spanish bilingual support, appointment scheduling, and CRM integration.',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'BusinessAudience',
    name: 'US customer support directors, healthcare clinics, commercial services, and sales call centers',
  },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent#webpage',
  url: 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent',
  name: 'AI Voice Agents for US Operations | FactoryJet',
  description:
    'Custom conversational AI voice agents with sub-500ms latency for inbound support, lead qualification, and appointment scheduling. English and Spanish ready.',
  dateModified: PAGE_MODIFIED,
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
};

const BREADCRUMB_ITEMS = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
  { name: 'AI Voice Agents', url: 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent' },
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
  { b: '< 500 ms', s: 'end-to-end voice latency for natural conversation flow' },
  { b: '24/7/365', s: 'instant phone answering with zero hold times or busy signals' },
  { b: 'Bilingual', s: 'fluent English and Spanish with native regional accents' },
  { b: 'Full ownership', s: 'you own the telephony scripts, prompts and cloud' },
];

const SOURCED_STATS = [
  {
    v: '67%',
    d: 'of US consumers hang up in frustration when they cannot reach a live representative or get trapped in complex press-one IVR phone trees.',
    src: 'Consumer Reports Telephone Survey',
    href: 'https://www.consumerreports.org/cro/2011/07/customer-service-telephone-survey/index.htm',
  },
  {
    v: '41M+',
    d: 'US residents speak Spanish at home according to official census figures, making bilingual phone support a major growth differentiator.',
    src: 'US Census Bureau Language Report',
    href: 'https://www.census.gov/topics/population/language-use.html',
  },
  {
    v: '100%',
    d: 'compliance required under FCC 47 CFR § 64.1200 and TCPA regulations for all automated voice telephony systems operating in the United States.',
    src: 'Federal Communications Commission',
    href: 'https://www.fcc.gov/general/telemarketing-and-robocalls',
  },
];

const CAPABILITIES = [
  {
    t: 'Sub-500ms Streaming Voice Pipeline',
    d: 'Combines streaming speech-to-text, fast language models, and low-latency neural speech synthesis over WebSockets for natural spoken conversation. Achieves sub-second turnaround without awkward pauses.',
  },
  {
    t: 'Full-Duplex Barge-In Interruption',
    d: 'Acoustic echo cancellation detects caller speech instantly, halting agent speech within 80 milliseconds so callers can interrupt naturally without talking over the assistant.',
  },
  {
    t: 'Bilingual English & Spanish Support',
    d: 'Detects caller language within the first sentence and responds with native pronunciation and localized vocabulary in English or Spanish, switching languages dynamically.',
  },
  {
    t: 'Live Calendar Appointment Booking',
    d: 'Checks real-time availability in Google Calendar or Outlook 365, reserving consultation slots, checking team timezone offsets, and sending instant SMS confirmations.',
  },
  {
    t: 'Warm Human Call Transfer (SIP REFER)',
    d: 'Transfers complex calls to human representatives or mobile queues with an automated hold greeting, passing an instant call summary to the receiving representative.',
  },
  {
    t: 'Real-Time CRM & Database Lookups',
    d: 'Looks up caller phone numbers in HubSpot, Salesforce, or custom SQL databases to reference prior order history, open tickets, and customer lifetime value tiers.',
  },
  {
    t: 'TCPA & Regulatory Compliance',
    d: 'Enforces US calling window constraints (8am–9pm recipient local time), mandatory agent disclosure greetings, automated DNC logging, and federal consent recording.',
  },
  {
    t: 'Post-Call Transcripts & CRM Logging',
    d: 'Transcribes every call, generates structured JSON summaries, and logs audio recordings directly into your CRM deal timeline with complete attribution.',
  },
];

const INDUSTRIES = [
  {
    name: 'Home Services & Commercial Contracting',
    desc: 'Answers emergency plumbing, HVAC, and roofing calls 24/7. Captures job address, severity, and gate access codes, scheduling estimator site visits and dispatching on-call technicians immediately.',
  },
  {
    name: 'Healthcare Clinics & Dental Practices',
    desc: 'Handles patient appointment scheduling, insurance intake screening, office directions, and prescription refill triage with HIPAA compliance and native bilingual English/Spanish fluency.',
  },
  {
    name: 'Legal Practices & Corporate Law Firms',
    desc: 'Conducts initial case intake screening for personal injury and corporate litigation firms, checking jurisdiction, screening conflicts of interest, and scheduling attorney consultations on calendar.',
  },
  {
    name: 'Automotive Dealerships & Service Centers',
    desc: 'Books vehicle service appointments, confirms parts availability in inventory, checks warranty recall statuses, and provides maintenance status updates to drivers via phone and automated SMS.',
  },
  {
    name: 'Property Management & Real Estate',
    desc: 'Triages tenant maintenance emergencies after hours, books property tour appointments across leasing agents, and answers basic rental qualification criteria with zero staff overhead.',
  },
  {
    name: 'Financial Services & Insurance Agencies',
    desc: 'Performs preliminary insurance policy intake, answers billing questions, checks claim status in CRM databases, and routes high-value underwriting claims to licensed insurance specialists.',
  },
];

const FAILURE_MODES = [
  {
    title: '1. Barge-In Interruption & Voice Collisions',
    description: 'When the voice agent continues speaking over a caller who is trying to interject or ask a clarification question.',
    mitigation: 'Dynamic Voice Activity Detection (VAD) coupled with acoustic echo cancellation halts speech synthesis within 80 milliseconds of detected caller audio, allowing natural human-like conversational interruptions.',
  },
  {
    title: '2. Heavy Acoustic Background Noise & Wind',
    description: 'When a caller is speaking from a moving work truck, noisy jobsite, airport terminal, or windy outdoor environment.',
    mitigation: 'Deepgram Nova-2 acoustic filters strip background noise frequencies, applying phonetic beam-search decoding to maintain high transcription accuracy and prevent dropped syllables.',
  },
  {
    title: '3. Telephony Packet Loss & Jitter Jams',
    description: 'When poor cellular reception or VoIP packet loss causes audio dropouts, distortion, or robotic voice artifacts.',
    mitigation: 'Adaptive jitter buffering and WebRTC forward error correction (FEC) smooth audio packets over UDP, ensuring uninterrupted, high-fidelity audio streams even under 15% packet loss.',
  },
  {
    title: '4. Out-of-Domain Technical Questions',
    description: 'When a caller asks a complex technical question or edge case outside the indexed company knowledge base.',
    mitigation: 'The agent adheres to a strict negative constraint: it politely explains it will connect them with a human specialist, initiating a warm SIP transfer with context summary rather than inventing answers.',
  },
  {
    title: '5. Credit Card PCI Data Exposure',
    description: 'When a caller attempts to read sensitive credit card numbers or banking PINs directly over the live phone call.',
    mitigation: 'The agent transfers payment collection to secure DTMF touch-tone entry or dispatches an instant SMS checkout link while remaining on the call, keeping card numbers out of voice recordings and LLM transcripts.',
  },
];

const SELECTION_CRITERIA = [
  {
    num: '01',
    title: 'Demand Sub-550ms Total Glass-to-Glass Latency',
    desc: 'Voice agents with > 1,000ms latency cause awkward conversational pauses and robotic cross-talk. Demand streaming WebSockets audio architecture with fast speech-to-text and low-latency neural synthesis from your engineering partner.',
  },
  {
    num: '02',
    title: 'Verify Full-Duplex Interruption (Barge-In)',
    desc: 'Test the agent by interrupting it mid-sentence. If the agent cannot halt speech within 80 milliseconds and listen to your new command, it will frustrate live callers and cause conversational collisions.',
  },
  {
    num: '03',
    title: 'Insist on Live CRM & Calendar Tool Integration',
    desc: 'A voice agent must do more than answer FAQs: it must look up caller phone numbers in your CRM, check real-time calendar availability, and book appointments live while the caller is still on the line.',
  },
  {
    num: '04',
    title: 'Verify TCPA & FCC Calling Compliance',
    desc: 'Ensure the system enforces recipient timezone calling constraints (8am–9pm local time), instant opt-out logging, and mandatory disclosure greetings required under federal law.',
  },
  {
    num: '05',
    title: 'Insist on Telephony Code and Prompt Ownership',
    desc: 'You should own all Twilio telephony configs, prompt templates, and webhook handlers deployed in your private cloud with zero per-minute markup or proprietary vendor lock-in from the agency.',
  },
];

const STEPS = [
  {
    n: '01',
    t: 'Call Flow & Scripting Architecture',
    d: 'We document your standard phone call scripts, objection handling branches, appointment booking logic, escalation criteria, and phonetic vocabulary lists. We establish strict boundary guardrails to ensure zero out-of-domain answers.',
  },
  {
    n: '02',
    t: 'Telephony & Voice Model Setup',
    d: 'We provision Twilio SIP trunks or Telnyx connections, select and calibrate neural voice models (Cartesia Sonic, ElevenLabs Turbo v2.5), and configure streaming speech-to-text recognition parameters with custom pronunciation dictionaries.',
  },
  {
    n: '03',
    t: 'API Tool Integration & Calendar Sync',
    d: 'We connect the voice agent to your CRM (HubSpot, Salesforce), scheduling calendars (Google Calendar, Outlook 365), and ERP database endpoints via real-time tool calling, ensuring sub-second response lookups during live calls.',
  },
  {
    n: '04',
    t: 'Interactive Dial-In Testing & Simulation',
    d: 'We configure a private staging phone line where your team tests live phone calls across diverse caller accents, background noise environments, and mid-sentence barge-in interruptions to calibrate transcription accuracy.',
  },
  {
    n: '05',
    t: 'Live Production Phone Routing & Analytics',
    d: 'We forward your primary business phone numbers or SIP trunks to the AI voice agent with real-time call recording, sentiment tracking dashboards, and automated Slack alert feeds for your human team.',
  },
];

export default function AIVoiceAgentPage() {
  return (
    <>
      <script id="voice-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="voice-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="voice-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="voice-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* Hero Section */}
        <section className="pp-dotgrid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(40px,5vh,72px)', paddingBottom: 'clamp(44px,6vh,84px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">AI voice agents // US operations</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '19ch' }}>
                  Human-sounding AI voice agents with <span className="pp-grad">sub-500ms latency</span>.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '52ch' }}>
                  FactoryJet builds custom conversational AI voice agents for US phone operations. We answer inbound customer service calls, qualify sales leads, and schedule calendar appointments 24/7 with zero hold times in natural English and Spanish. Built on low-latency streaming WebSockets and Twilio SIP telephony with direct CRM and calendar integration.
                </p>
                <HeroInlineForm source="services_ai_voice_agent_hero" region="us" submitLabel="Scope your voice agent" />
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/us/services/hero-ai-chatbot.webp"
                  alt="Operations team monitoring live AI voice agent call routing and latency dashboard"
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
              An AI voice agent is autonomous software capable of conducting live, real-time spoken phone conversations. By combining ultra-fast streaming speech-to-text (STT), large language model reasoning, and neural voice synthesis over Twilio SIP telephony, the agent converses with natural human intonation, pauses, and cadence with total latency under 500 milliseconds.
            </p>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '74ch' }}>
              Unlike frustrating legacy &quot;press 1 for sales&quot; IVR phone menus, callers can speak in complete, natural sentences, ask questions, interrupt mid-phrase, and complete transactions such as booking appointments or checking order status without waiting on hold.
            </p>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '74ch' }}>
              Every call is transcribed in real time, checked against your CRM records, and logged with rich audio summaries, giving your human team full context whenever a warm transfer is required. The system integrates directly with Google Calendar, Outlook 365, HubSpot, and Salesforce, allowing dynamic database lookups while the caller is still on the line.
            </p>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '74ch' }}>
              With native support for both English and Spanish, our voice agents automatically detect language within the first spoken phrase, eliminating language barriers and providing uninterrupted 24/7/365 telephone coverage across US operations.
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
            <h2 style={{ marginTop: '10px' }}>The operational reality of telephone support</h2>
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

        {/* Proprietary Framework: The Voice Latency Budget Architecture */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// proprietary framework'}</p>
            <h2 style={{ marginTop: '10px' }}>The Voice Latency Budget Architecture</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              Human conversation feels natural when response latency stays below 600ms. We break down every millisecond of our streaming audio pipeline:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '13px' }}>120 MS // STT</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>Streaming Speech-to-Text</h3>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">
                  Deepgram Nova-2 streaming WebSocket transcription with phonetic correction for names, alphanumeric codes, and street addresses.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '13px' }}>180 MS // LLM</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>Reasoning &amp; Tool Call</h3>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">
                  Ultra-fast inference models (Claude 3.5 Haiku / Groq Llama 3) evaluating intent and querying CRM/calendar APIs.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '13px' }}>120 MS // TTS</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>Neural Speech Synthesis</h3>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">
                  Cartesia Sonic / ElevenLabs low-latency voice synthesis streaming PCM audio chunks back over WebSockets.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <span className="font-fj-mono font-bold text-green-600" style={{ fontSize: '13px' }}>&lt; 500 MS // TOTAL</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>Glass-to-Glass Latency</h3>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">
                  Total conversational turnaround time delivered over Twilio SIP telephony, ensuring zero awkward pauses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive ROI Calculator Section */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <AiAgentRoiCalculator defaultWorkflow="support" source="ai_voice_agent_page" />
          </div>
        </section>

        {/* Capabilities Bento Grid */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// capabilities'}</p>
            <h2 style={{ marginTop: '10px' }}>What our AI voice agents handle</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              Built for high-volume enterprise phone operations. Every phone call is transcribed, verified against CRM records, and logged with full attribution.
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
            <h2 style={{ marginTop: '10px' }}>The sub-500ms streaming telephony pipeline</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              Our voice agents are engineered as full-duplex streaming audio pipelines running on dedicated WebSockets infrastructure inside your private cloud VPC, ensuring complete data residency and sub-500ms turnaround.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>1. Full-Duplex Audio Streaming &amp; SIP</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Streams bidirectional 8kHz/16kHz μ-law audio via Twilio Media Streams or SIP trunking directly into memory with zero disk buffering for minimal latency and strict data privacy.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>2. Fast Streaming Speech-to-Text (STT)</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Transcribes caller utterances in real time (~120ms) using deep learning acoustic models with phonetic correction for names, alphanumeric codes, and street addresses.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>3. Real-Time Tool Calling &amp; Reasoning</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Executes sub-second API lookups into Google Calendar, HubSpot, or Shopify while maintaining conversational filler cues (&quot;Let me check that tracking number for you right now...&quot;) to eliminate dead air.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>4. Neural Text-to-Speech (TTS) Synthesis</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Synthesizes high-fidelity, studio-quality speech with natural conversational breathing and intonation, streaming raw PCM audio chunks back to the caller in under 120ms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Telephony Protocols & Infrastructure */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// telephony protocols'}</p>
            <h2 style={{ marginTop: '10px' }}>Enterprise telephony protocols &amp; infrastructure integration</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              We connect conversational voice agents into your existing business phone systems with zero rip-and-replace:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Twilio Media Streams &amp; SIP</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Direct bidirectional audio streaming over WebSockets via Twilio Voice, Telnyx, or standard SIP trunks connected to Asterisk, FreePBX, or Cisco CallManager, eliminating legacy hardware dependencies.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Warm Call Transfer (SIP REFER)</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Executes instant warm transfers to human agents, supervisor queues, or external mobile phones with an automated hold greeting and pre-transfer summary note for complete operational continuity.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Secure DTMF Keypad Tones</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Captures sensitive credit card details or PINs via touch-tone keypad entry, maintaining complete PCI-DSS compliance by keeping financial data out of voice transcripts and LLM context windows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Acoustic Physics & Noise Suppression */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// acoustic engineering'}</p>
            <h2 style={{ marginTop: '10px' }}>Acoustic noise suppression &amp; real-time phonetic correction</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              Real phone calls take place in moving vehicles, noisy job sites, and crowded streets. Here is how our speech layer handles difficult audio conditions:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Dynamic Noise Filtering</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Deep learning speech isolation models filter out traffic rumble, HVAC hum, wind, and background chatter before audio enters the speech-to-text decoder.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Phonetic Beam-Search</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Applies specialized phonetic vocabulary dictionaries to accurately transcribe complex industry part numbers, medical terms, customer names, and street addresses.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Acoustic Echo Cancellation</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Cancels out speaker echo so the agent does not transcribe its own voice, enabling sub-80ms full-duplex conversational barge-in interruptions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Telephony Edge-Case Handling Scenarios */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// edge-case engineering'}</p>
            <h2 style={{ marginTop: '10px' }}>4 complex telephone edge cases handled autonomously</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              Spoken conversation contains infinite nuance. Here is how our telephony models navigate difficult conversational edge cases:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>SCENARIO 01 // PHONETIC SPELLING</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Alphanumeric Codes &amp; Email Dictation</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  When callers dictate email addresses or tracking numbers, the agent confirms each character using standard phonetic alphabet equivalents (e.g. &ldquo;M as in Mary, 4, 9, K as in King&rdquo;) to prevent transcription errors.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>SCENARIO 02 // DIALECT &amp; ACCENT ADAPTATION</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Regional US &amp; Spanish Accents</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  From Southern drawls to Caribbean and Mexican Spanish dialects, our acoustic models adapt vocabulary weights dynamically, eliminating misunderstandings on regional colloquialisms.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>SCENARIO 03 // AMBIGUOUS CALLER REQUESTS</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Clarification Prompting &amp; Slot Disambiguation</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  When a caller asks an open-ended question (&ldquo;I need someone to look at my unit&rdquo;), the agent asks targeted follow-ups to determine whether the issue is commercial or residential before booking estimator calendars.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>SCENARIO 04 // CALLER SENTIMENT SPIKES</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Instant Warm Supervisor Handoff</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  If acoustic sentiment models detect shouting, extreme agitation, or distress, the agent immediately halts automated routing and executes a warm SIP transfer to a live supervisor queue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Negative Space: When NOT to build an AI voice agent */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// negative space & honest guidance'}</p>
            <h2 style={{ marginTop: '10px' }}>When you should NOT build an AI voice agent</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              Telephony automation requires specific operational conditions to deliver high return on investment. We believe in providing candid technical guidance so you avoid unviable software investments:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Call Volume &lt; 100 Calls / Month</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  If your business receives only a handful of phone calls a week, standard mobile forwarding or a simple voicemail greeting is sufficient. Invest in voice automation only when call volume causes missed revenue or queue delays.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Looking for Robocall Outbound Blast</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  We do not build telemarketing robocall dialers or unsolicited cold call systems. We strictly engineer compliant inbound answering, high-intent callback schedulers, and warm lead qualification systems.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Complex Psychiatric / Medical Advice</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  AI voice agents must never be deployed for autonomous clinical diagnosis, medical triage, or psychiatric crisis counseling. We strictly restrict healthcare telephony use cases to appointment scheduling and office logistics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Use-Cases */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// industry workflows'}</p>
            <h2 style={{ marginTop: '10px' }}>Engineered for your specific phone operations</h2>
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
            <h2 style={{ marginTop: '10px' }}>How our voice agents handle acoustic &amp; telephony failure</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              Real-time telephone conversations require rapid fault recovery. Here is how our architecture prevents call breakdowns:
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

        {/* Inbound Call Routing Modes */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// routing modes'}</p>
            <h2 style={{ marginTop: '10px' }}>4 flexible telephony routing modes for your phone numbers</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              Deploy the voice agent to fit your existing team schedule and telephony infrastructure:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>ROUTING MODE 01 // DIRECT PRIMARY LINE</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>100% Autonomous Primary Answering</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  The AI voice agent answers all inbound calls on your primary business line on the first ring, handling routine inquiries, scheduling appointments, and warm-transferring callers to staff when complex issues arise.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>ROUTING MODE 02 // OVERFLOW PROTECTION</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Rollover &amp; Peak Hour Queue Overflow</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Your human staff answers calls first. If all lines are busy or a call rings more than 3 times, the call rolls over instantly to the AI voice agent, eliminating dropped calls and voicemail abandonment during peak hours.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>ROUTING MODE 03 // AFTER-HOURS COVERAGE</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>24/7 Nights &amp; Weekend Coverage</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Automatically activates outside normal business hours (e.g. 6:00 PM to 8:00 AM and all weekend), capturing emergency service requests, qualifying prospective clients, and scheduling next-day consultations.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>ROUTING MODE 04 // DEPARTMENT ROUTING</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Conversational Department Triage</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Replaces traditional keypad IVRs (&quot;Press 1 for Sales, Press 2 for Support&quot;) with a friendly open-ended greeting (&quot;How can I help you today?&quot;), conversational triage, and instant SIP transfer to the correct department queue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The 4 Core Telephony Topologies */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// production telephony topologies'}</p>
            <h2 style={{ marginTop: '10px' }}>4 production telephony workflows our voice agents execute</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              From emergency after-hours dispatch to bilingual patient intake, here is how our telephony architecture operates in live production:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>TOPOLOGY 01 // 24/7 EMERGENCY INTAKE</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Commercial Contracting &amp; After-Hours Dispatch</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  When a commercial plumbing or HVAC failure occurs at 2:00 AM, the agent answers on the second ring, captures property address, emergency severity, and gate access codes, and executes an automated SMS and voice broadcast to on-call technician mobiles.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>TOPOLOGY 02 // HEALTHCARE INTAKE</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Bilingual Patient Scheduling &amp; Clinic Routing</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Detects English or Spanish in real time, screens new patient symptoms against scheduling protocols, checks doctor calendar availability across clinic branches, and reserves appointment slots with automated SMS confirmations.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>TOPOLOGY 03 // INBOUND SALES TRIAGE</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>High-Velocity Sales Phone Qualification</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Answers inbound sales inquiry calls within seconds, queries caller phone numbers against CRM accounts, qualifies project budget and timeline, and executes warm SIP call transfers directly to available sales closers.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>TOPOLOGY 04 // APPOINTMENT RESCHEDULING</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Automated Service Appointment Rebooking</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Allows automotive dealership and service customers to call in, identify their vehicle by phone number, check upcoming service bay openings, and reschedule maintenance visits with zero human staff overhead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// comparison'}</p>
            <h2 style={{ marginTop: '10px' }}>FactoryJet AI voice agent vs. traditional phone systems</h2>
            <div style={{ marginTop: '28px', overflowX: 'auto' }}>
              <table className="pp-table" style={{ width: '100%', minWidth: '640px' }}>
                <thead>
                  <tr>
                    <th>Capability</th>
                    <th className="me">FactoryJet Custom Voice Agent</th>
                    <th>Legacy IVR Phone Tree (&quot;Press 1&quot;)</th>
                    <th>Third-Party Answering Service (BPO)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td><strong>Cost Model</strong></td>
                    <td><strong>Fixed build + direct Twilio/model costs</strong></td>
                    <td>Expensive monthly telecom licensing</td>
                    <td>$1.50–$3.00 per minute human answering fee</td>
                  </tr>
                  <tr>
                    <td><strong>Spoken Conversation Flow</strong></td>
                    <td>Natural, full-duplex conversational reasoning</td>
                    <td>Rigid keypad menu numbers only</td>
                    <td>Basic human script reading</td>
                  </tr>
                  <tr>
                    <td><strong>Direct Calendar &amp; CRM Sync</strong></td>
                    <td>Yes (books slots &amp; logs transcripts live)</td>
                    <td>No (cannot query external databases)</td>
                    <td>Manual message taking with delayed email</td>
                  </tr>
                  <tr>
                    <td><strong>Response Latency &amp; Hold Time</strong></td>
                    <td>Zero hold time; &lt; 500ms voice latency</td>
                    <td>Multi-minute menu navigation</td>
                    <td>Frequent hold times during peak call hours</td>
                  </tr>
                  <tr>
                    <td><strong>Bilingual English / Spanish</strong></td>
                    <td>Yes (auto-detects language in first phrase)</td>
                    <td>Requires separate Spanish menu option</td>
                    <td>Requires bilingual staff scheduling</td>
                  </tr>
                  <tr>
                    <td><strong>Code &amp; Telephony Ownership</strong></td>
                    <td>Yes (you own 100% of the codebase)</td>
                    <td>Locked in proprietary PBX hardware</td>
                    <td>Zero automation asset ownership</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* TCPA Compliance & Regulatory Guardrails */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// federal compliance'}</p>
            <h2 style={{ marginTop: '10px' }}>TCPA &amp; FCC regulatory guardrails for US phone operations</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              US telephony automation is governed by strict federal statutes under FCC 47 CFR § 64.1200 and TCPA laws. We engineer compliance into the core runtime:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Timezone Calling Windows</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Strictly prevents outbound callbacks outside recipient local time hours (8:00 AM to 9:00 PM local time), calculating recipient timezone from phone area codes and ZIP records.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Instant Do-Not-Call (DNC) Sync</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  When a caller states &quot;stop calling&quot; or &quot;remove my number,&quot; the agent parses the opt-out intent, confirms verbal acknowledgment, and writes an immediate suppression block across all CRM lists.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Mandatory Entity Disclosure</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Every automated phone interaction initiates with a compliant greeting stating the registered company name, call purpose, and AI assistant disclosure as mandated by federal guidelines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Selection Checklist: How to Choose a Partner */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// buyer checklist'}</p>
            <h2 style={{ marginTop: '10px' }}>How to evaluate an AI voice agent development partner</h2>
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
            <h2 style={{ marginTop: '10px' }}>From phone script to live routing in 4 weeks</h2>
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
            <h2 style={{ marginTop: '10px' }}>Built for high-volume telephone operations</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pp-card" style={{ padding: '28px', backgroundColor: '#FFFFFF' }}>
                <p className="font-fj-body text-[1rem] leading-relaxed text-fj-neutral-700 italic">
                  &ldquo;We used to lose after-hours emergency calls to voicemail. The AI voice agent answers every call within two rings, captures the issue details, and schedules dispatch visits directly on our calendar with zero missed opportunities.&rdquo;
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

              <div className="pp-card" style={{ padding: '28px', backgroundColor: '#FFFFFF' }}>
                <p className="font-fj-body text-[1rem] leading-relaxed text-fj-neutral-700 italic">
                  &ldquo;The bilingual English and Spanish capability was critical for our customer base. The voice agent switches languages frictionlessly and sounds completely natural, cutting our answering service costs by 80%.&rdquo;
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
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Questions phone operations leaders ask before deploying voice AI"
          lead="Everything you need to know about sub-500ms audio latency, telephony integration, barge-in interruptions and TCPA compliance."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* Final CTA */}
        <FinalCTA
          eyebrow="READY TO UPGRADE YOUR PHONE OPERATIONS?"
          headline="Scope your custom AI voice agent today."
          sub="Book a 30-minute discovery call with our telephony engineering team. We will map your inbound call flows, review your phone system setup, and deliver a fixed-price implementation blueprint."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'View All AI Agent Capabilities', href: '/services/ai-agent-development' }}
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
