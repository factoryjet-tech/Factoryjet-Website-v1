import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

const CANONICAL_URL = 'https://factoryjet.com/services/healthcare-ai-agents';
const PAGE_TITLE = 'Healthcare AI Agents & Medical Receptionists | FactoryJet';
const PAGE_DESC =
  'Custom HIPAA-compliant healthcare AI agents and medical voice receptionists for US practices, dental clinics, and hospitals. Real EHR sync. Get an audit.';
const PAGE_MODIFIED = '2026-09-03';

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Healthcare AI Agents', url: CANONICAL_URL },
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'ai medical receptionist',
    'dental ai receptionist',
    'ai voice agent for healthcare',
    'hipaa compliant ai receptionist',
    'ai receptionist for medical office',
    'medical ai receptionist',
    'ai patient scheduling',
    'healthcare ai workflow automation',
    'ai receptionist dental',
    'ai answering service for medical practices',
  ],
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      'en-US': CANONICAL_URL,
      'x-default': CANONICAL_URL,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: CANONICAL_URL,
    type: 'website',
    images: [
      {
        url: 'https://factoryjet.com/images/healthcare/healthcare-ai-receptionist-desk.jpg',
        width: 1200,
        height: 630,
        alt: 'Healthcare AI Agents and Medical Voice Receptionist Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ['https://factoryjet.com/images/healthcare/healthcare-ai-receptionist-desk.jpg'],
  },
};

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'hipaa', label: 'HIPAA & Compliance' },
  { key: 'ehr', label: 'EHR & Practice Systems' },
  { key: 'clinical', label: 'Clinical Triage & Voice' },
  { key: 'deployment', label: 'Deployment & ROI' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'hipaa',
    question: 'Is your healthcare AI voice receptionist fully HIPAA compliant?',
    answer: 'Yes. Every healthcare AI agent we build operates under a direct Business Associate Agreement (BAA). That is a HIPAA contract that makes us legally responsible for the data we touch. Voice audio and patient transcripts are encrypted in transit with TLS 1.3. Protected health information (PHI) is encrypted at rest with AES-256. We run zero data retention on every speech-to-text and LLM endpoint. Patient data is never cached, and never used to train a public model.',
  },
  {
    category: 'hipaa',
    question: 'How do you handle emergency medical situations and patient safety guardrails?',
    answer: 'Our healthcare voice agents run rule-based clinical safety guardrails on every call. A red-flag symptom, severe chest pain, shortness of breath, stroke signs, severe trauma, gets recognized right away. The AI tells the caller to hang up and dial 911. It keeps listening and starts a warm transfer to the on-call physician or emergency triage line.',
  },
  {
    category: 'hipaa',
    question: 'Do you sign Business Associate Agreements (BAAs) with medical practices?',
    answer: 'Yes. FactoryJet signs a formal BAA with every healthcare client before we connect any telephony, server, or EHR endpoint. We also confirm that our cloud host, telephony gateway, and LLM provider all carry binding BAAs of their own. The signed BAA comes first in onboarding, not later. No patient audio or PHI reaches our infrastructure until your compliance officer has a countersigned copy.',
  },
  {
    category: 'hipaa',
    question: 'Where is patient data stored and processed during voice calls?',
    answer: 'Patient data stays inside a dedicated, single-tenant Virtual Private Cloud (VPC). We host it on AWS or Google Cloud, in a US healthcare-compliant data region. During the call, audio is processed in memory only. It gets written straight to your authorized EHR through encrypted FHIR R4 APIs. There is no extra storage step in between.',
  },
  {
    category: 'ehr',
    question: 'Which EHR, EMR, and dental practice management systems do you integrate with?',
    answer: 'We build custom, two-way API connectors for the leading healthcare and dental systems. That list covers Epic Systems, Cerner (Oracle Health), AthenaHealth, eClinicalWorks, Allscripts (Veradigm), NextGen Healthcare, Kareo, Dentrix, Eaglesoft, Open Dental, Curve Dental, and ChiroTouch. Running something else? We still scope a custom connector against its published API. For smaller vendors without one, we work from its scheduled export and import files instead.',
  },
  {
    category: 'ehr',
    question: 'Can the AI agent check real-time provider calendar availability and book appointments?',
    answer: 'Yes. Instead of a static appointment request form, our AI agent reads live data straight from your EHR API. That includes provider scheduling templates, operatory availability, visit-duration rules, and chair buffers. It books the visit, collects patient demographics, and updates the practice calendar in under two seconds.',
  },
  {
    category: 'ehr',
    question: 'How does the AI verify patient insurance eligibility prior to booking?',
    answer: 'The AI agent collects the patient\'s insurance carrier name, member ID, group number, and date of birth by voice. It sends an automated 270/271 EDI eligibility check to your clearinghouse. Examples include Change Healthcare, Waystar, or Availity. Active coverage and copay get confirmed before the appointment is finalized.',
  },
  {
    category: 'ehr',
    question: 'Can the AI route prescription refill requests directly to our clinical staff?',
    answer: 'Yes. For routine refill inquiries, the AI gathers the medication name, dosage, preferred pharmacy details, and prescribing doctor. It formats the request as a structured clinical inbox message inside your EHR. If that is not available, it routes the request to your triage nurse team through secure clinical messaging instead.',
  },
  {
    category: 'clinical',
    question: 'How natural does the AI medical receptionist sound over the phone?',
    answer: 'We run a sub-500-millisecond voice pipeline: dedicated SIP trunking, Deepgram Nova-2 medical speech recognition, and natural-sounding voice synthesis. The AI understands medical terms, handles interruptions and background noise, and keeps a natural conversational pace with no robotic pauses. Many patients finish a call without realizing it was automated, though we always say so if a caller asks directly.',
  },
  {
    category: 'clinical',
    question: 'Can the AI handle bilingual patient inquiries. This includes Spanish?',
    answer: 'Yes. Our healthcare voice agents dynamically detect whether a caller is speaking English or Spanish within the first three words. The agent responds immediately in fluent Spanish. It captures symptoms and scheduling preferences accurately. Then it logs English-translated clinical notes inside the EHR.',
  },
  {
    category: 'clinical',
    question: 'What happens when a caller has a complex or ambiguous clinical question?',
    answer: 'The AI agent never guesses at a diagnosis. When a caller asks a complex clinical question, the AI explains its role clearly. It shares general practice policy and routes the call to clinical staff. Then it either transfers the call to a triage nurse or takes a detailed callback message.',
  },
  {
    category: 'clinical',
    question: 'How does the voice agent handle heavy background noise or elderly callers?',
    answer: 'We run neural noise cancellation at the telephony layer. Speech recognition is tuned for regional accents, slower speech, and how elderly patients phrase things. When something is unclear, the AI gently asks the caller to confirm the detail before it logs anything.',
  },
  {
    category: 'deployment',
    question: 'How long does it take to build and deploy a custom healthcare AI receptionist?',
    answer: 'A standard healthcare AI deployment takes four to six weeks, from scoping to live pilot. That covers telephony routing, EHR API authentication, clinical prompt tuning, staff escalation workflows, and HIPAA penetration testing. EHR API authentication is usually the slowest step. Larger vendors like Epic require formal credentialing and sandbox approval. We cannot speed that part up, even when our own build work is ready first.',
  },
  {
    category: 'deployment',
    question: 'What is the typical return on investment for a private medical or dental practice?',
    answer: 'Private practices typically pay back the full cost within 60 to 90 days. The agent captures every after-hours call and stops patient scheduling drop-off. It also replaces outsourced answering-service fees, which usually run $1,200 to $3,500 a month. Most of the recovered revenue comes from calls that would otherwise go to voicemail.',
  },
  {
    category: 'deployment',
    question: 'Does our practice own the AI agent code and custom workflow prompts?',
    answer: 'Yes. FactoryJet builds custom AI infrastructure that you own and run. Every workflow state machine, telephony routing script, API connector, and prompt stays your permanent asset, with no vendor lock-in. Ownership transfers at delivery, not after some minimum term expires. A practice that wants to bring the system in-house, or switch vendors, gets the full codebase handed over right away.',
  },
  {
    category: 'deployment',
    question: 'How does our clinical staff monitor call logs and agent performance?',
    answer: 'We provide an operational dashboard with real-time call volume and booking rates. It also displays average handle times, triage escalation logs, and audio quality metrics. Practice managers review de-identified call summaries and adjust scheduling rules any time. Dashboard access runs on role-based access control (RBAC) and supports single sign-on (SSO). A front-desk supervisor sees operational call metrics. Only compliance officers can access audio files or PHI transcripts for audited calls.',
  },
  {
    category: 'ehr',
    question: 'How does the agent integrate specifically with Epic, and does it require App Orchard access?',
    answer: 'For Epic clients, we build against Epic App Orchard FHIR APIs where they are available. That covers scheduling, patient lookup, and encounter notes for most ambulatory builds. Hospital systems on an older Epic version. This happens without App Orchard access, are different. There, we work with your Epic analyst team through your existing integration engine.',
  },
  {
    category: 'ehr',
    question: 'What does the AthenaHealth integration actually read and write?',
    answer: 'Through the AthenaHealth Marketplace API, the agent reads live provider open slots, appointment types, and patient demographics. It writes new appointments, updates existing bookings, and logs call summaries as structured notes. It never touches clinical documentation, orders, or billing codes.',
  },
  {
    category: 'hipaa',
    question: 'Do you sign a BAA directly with our practice, or only with your subcontractors?',
    answer: 'Both. FactoryJet signs a direct BAA with your practice as the covered entity. We also hold signed BAAs with every downstream subprocessor that touches call audio or patient data. That list is short: our cloud host, telephony carrier, and speech-to-text vendor. It covers the chain of custody end to end, not just at the first hop.',
  },
  {
    category: 'ehr',
    question: 'Can the agent handle dental-specific scheduling logic, like operatory assignment and hygienist-versus-doctor time blocks?',
    answer: 'Yes. Dental scheduling has its own rules that general medical scheduling does not. It checks operatory availability across separate hygienist and doctor columns. It respects procedure-specific time blocks and same-day emergency slots. We configure the agent against your Dentrix, Eaglesoft, or Open Dental appointment book. Those rules come built in, not a generic calendar grid.',
  },
  {
    category: 'hipaa',
    question: 'What happens to call recordings and transcripts after the call ends?',
    answer: 'Under our standard zero-retention setup, raw audio is not stored after the call ends. Only the structured appointment or message data gets written to your EHR. Your clinic may want call recordings kept for QA or compliance. We configure encrypted, access-logged storage inside your own BAA-covered cloud. It is never a third-party archive outside your control.',
  },
];


const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${CANONICAL_URL}#webpage`,
  url: CANONICAL_URL,
  name: PAGE_TITLE,
  description: PAGE_DESC,
  datePublished: '2026-09-01T00:00:00Z',
  dateModified: `${PAGE_MODIFIED}T00:00:00Z`,
  inLanguage: 'en-US',
  publisher: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://factoryjet.com/logo.png',
    },
  },
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
    jobTitle: 'Founder & CEO',
    worksFor: {
      '@type': 'Organization',
      name: 'FactoryJet',
    },
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${CANONICAL_URL}#service`,
  name: 'Healthcare AI Agents & Medical Voice Receptionist Development',
  serviceType: 'Healthcare AI Agent Development',
  description:
    'Custom HIPAA-compliant healthcare AI voice receptionists and clinical workflow agents integrated with Epic, Cerner, Dentrix, and AthenaHealth.',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Healthcare AI Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'HIPAA-Compliant AI Medical Voice Receptionist',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dental Practice AI Scheduling & Patient Recall Agent',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Hospital Multi-Channel Triage & Intake Automation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Chiropractic & Independent Practice Virtual Receptionist',
        },
      },
    ],
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How We Build and Deploy HIPAA-Compliant Healthcare AI Voice Receptionists',
  description:
    'A structured four-phase engineering methodology for deploying private, EHR-synced medical AI agents.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Clinical Workflow Audit and EHR API Architecture',
      text: 'We map practice appointment templates, provider scheduling buffers, insurance verification rules, and authenticate secure FHIR R4 API endpoints with your EHR.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Voice Pipeline Engineering and HIPAA Compliance Shield',
      text: 'We configure low-latency telephony SIP trunks with Deepgram medical speech models, establish zero-retention data policies, and execute formal BAAs.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Deterministic Clinical Triage and Edge-Case Guardrails',
      text: 'We engineer deterministic routing trees for acute emergency symptoms, bilingual Spanish detection, prescription refill capture, and human staff escalation.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Pilot Telephony Shadowing and Live Practice Cutover',
      text: 'We run live parallel call shadowing alongside front-desk staff, calibrate speech recognition accuracy, and execute a zero-downtime phone cutover.',
    },
  ],
};


const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};


export default function HealthcareAiAgentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SiteHeader />

      <main className="min-h-screen bg-white text-[#14110F]">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 border-b border-[#E7DED6] bg-[#FFFFFF] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#E7DED6_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF8F5] border border-[#F05A28]/30 mb-6">
                  <span className="font-mono text-xs text-[#F05A28] font-bold tracking-wide">
                    // HIPAA-COMPLIANT HEALTHCARE AI AGENTS
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14110F] font-heading leading-tight mb-6">Custom AI Medical Voice Receptionists with{' '}
                  <span>
                    Live EHR Integration.
                  </span>.</h1>
                
                <p className="text-lg sm:text-xl text-[#46403B] font-normal leading-relaxed mb-8 max-w-2xl">
                  We build private AI voice agents for American medical practices, dental clinics, and hospital departments. Response time stays under 500 milliseconds, so calls feel like a real conversation. The agent stops missed patient calls, automates after-hours scheduling, and syncs both ways with Epic, Cerner, Dentrix, and AthenaHealth.
                </p>

                <div className="mb-8">
                  <HeroInlineForm
                    source="healthcare-ai-agents"
                    region="us"
                    submitLabel="Request Healthcare AI Audit."
                  />
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#E7DED6] text-xs font-mono text-[#6E655F]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span>HIPAA BAA Signed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span>Zero Data Retention</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span>Sub-500ms Voice Telephony.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-3 shadow-xl overflow-hidden">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                    <Image
                      src="/images/healthcare/healthcare-ai-receptionist-desk.jpg"
                      alt="Modern American medical clinic front desk with healthcare AI receptionist workflow"
                      width={1376}
                      height={768}
                      priority
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-[#E7DED6] mt-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#6E655F] mb-1">
                      <span>LIVE TELEPHONY INTAKE.</span>
                      <span className="text-[#10B981] font-bold">24/7 ACTIVE</span>
                    </div>
                    <div className="text-sm font-bold text-[#14110F]">
                      AthenaHealth + Dentrix Operatory Sync Active.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ANSWER-FIRST EXTRACTION BLOCK (AEO / AIO ENGINE TARGET) */}
        <section className="py-12 bg-[#FFF8F5] border-b border-[#E7DED6]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-[#F05A28]/30 shadow-sm">
              <div className="font-mono text-xs uppercase tracking-wider text-[#F05A28] font-bold mb-3">
                // Definition: What is a Healthcare AI Voice Agent?
              </div>
              <p className="text-base sm:text-lg text-[#14110F] leading-relaxed font-medium">
                A healthcare AI voice agent is custom software that answers a medical clinic&apos;s incoming phone calls on its own. It runs rule-based symptom triage and books appointments directly inside the practice&apos;s EHR system. It operates under a signed HIPAA Business Associate Agreement (BAA). That is a contract that makes it legally responsible for protecting patient data. It stops missed calls and checks insurance eligibility in real time. Any acute emergency gets handed off to a human staff member right away.
              </p>
            </div>
          </div>
        </section>

        {/* VERIFIED MARKET STATISTICS */}
        <section className="py-16 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // VERIFIED CLINICAL PRACTICE BENCHMARKS
              </div>
              <h2 className="text-3xl font-extrabold text-[#14110F] font-heading">The Cost of Unanswered Calls in American Healthcare.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  50%+
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Peak-Hour Calls Sent to Voicemail.
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  In one MGMA-documented case, individual clinics sent more than half of their incoming calls to voicemail during peak hours. Most of those missed calls landed around 10 a.m., exactly when patients try to book. Our{' '}
                  <Link href="/blog/how-much-does-an-ai-medical-receptionist-cost-2026" className="underline hover:text-[#F05A28]">
                    AI medical receptionist cost breakdown
                  </Link>{' '}
                  covers what that gap is worth for a typical practice.
                </p>
                <a
                  href="https://www.mgma.com/articles/enhancing-patient-access-front-desk-phone-system-improvements"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#F05A28] hover:underline"
                >
                  Source: MGMA, Front Desk Phone System Improvements &rarr;.
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  Untracked
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Revenue Lost to Missed Calls, Per Chair.
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Most practices have never measured what a missed after-hours or emergency call actually costs per chair. ADA Health Policy Institute data shows practice expenses growing faster than revenue. That makes every uncaptured booking worth more than it used to be. Our{' '}
                  <Link href="/tools/ai-agent-roi-calculator" className="underline hover:text-[#F05A28]">
                    AI agent ROI calculator
                  </Link>{' '}
                  can help you estimate the number for your own practice.
                </p>
                <a
                  href="https://www.ada.org/resources/research/health-policy-institute/dental-practice-research/trends-in-dentist-income"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#F05A28] hover:underline"
                >
                  Source: ADA Health Policy Institute &rarr;.
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  Direct Sync
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  No Double-Booked or Stale Slots.
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  The agent reads live provider templates and operatory buffers straight from the EHR, not from a static request form. That means it never offers a slot that is already taken. It also will not miss a buffer rule the way a paper or web form often does.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6-CARD CAPABILITY BENTO GRID */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // ENTERPRISE HEALTHCARE CAPABILITIES
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Engineered for High-Volume Medical and Dental Practices.</h2>
              <p className="text-lg text-[#46403B]">
                Everything required to automate patient telephone inquiries safely without compromising clinical standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  01
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">24/7 Conversational Voice Receptionist.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Answers incoming phone calls on the first ring with sub-500ms voice response times. Understands patient speech, medical inquiries, office hours questions, and location directions.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Zero call hold times
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Natural conversational interruptions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Fluent English and Spanish voice
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  02
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Bi-Directional Live EHR Scheduling.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Connects directly to Epic, AthenaHealth, Cerner, and Dentrix. It also reaches eClinicalWorks, NextGen Healthcare, Allscripts (Veradigm), and Kareo through their own scheduling APIs. It checks provider operatory buffers and appointment types, then books the patient straight into the clinical schedule.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> FHIR R4 standard connectors
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Multi-provider chair balancing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Instant SMS confirmation dispatch
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  03
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Real-Time Insurance Pre-Verification.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Captures patient payer ID, policy numbers, and group codes over the phone. Automatically triggers 270/271 clearinghouse checks to confirm active eligibility and estimated copays.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Availity and Waystar API sync
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Out-of-network patient alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Automated digital intake link SMS
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  04
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Deterministic Clinical Triage.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Runs strict clinical safety rules on every call. It spots red-flag symptoms right away. It tells the caller the emergency steps to take, then performs an instant warm phone transfer to the on-call doctor.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Rule-based guardrails against unauthorized diagnosis
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Rule-based emergency warm transfer
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> On-call staff paging protocols
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  05
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Automated Patient Recall Campaigns.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Scans for overdue cleanings, annual physicals, and post-op follow-ups. Sends a personal voice call or text message to bring the patient back in.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> TCPA calling window governance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Instant booking on the call
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Automatic unsubscription opt-out
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  06
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">HIPAA Shield & Single-Tenant VPC.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Self-hosted inside your own private cloud (VPC) environment. Every login uses role-based access control (RBAC). Front-desk staff and compliance officers see separate permission tiers on the dashboard. Every deployment carries a full Business Associate Agreement (BAA), end-to-end encryption, automated audit logging, and zero vendor training-data retention.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Signed Business Associate Agreement.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Hosted on SOC 2 Type II-certified infrastructure.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Immutable access audit trails.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5 HEALTHCARE VERTICAL USE CASES WITH PHOTOREALISTIC IMAGERY */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // TAILORED CLINICAL DOMAINS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Specialized Architectures for Every Healthcare Sector..</h2>
              <p className="text-lg text-[#46403B]">
                Medical workflows differ vastly between surgical centers and dental operatories. We build custom logic tailored to your exact clinical specialty.
              </p>
            </div>

            <div className="space-y-16">
              {/* VERTICAL 1: DENTAL PRACTICES & DSOS */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-2 shadow-lg overflow-hidden">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
                      <Image
                        src="/images/healthcare/dental-ai-practice-scheduling.jpg"
                        alt="American dental practice consultation room with automated AI appointment scheduling"
                        width={1376}
                        height={768}
                        className="absolute inset-0 h-full w-full object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                    // DENTAL PRACTICES, ORTHODONTISTS & DSOS
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] mb-4">Automating Operatory Chairs & Emergency Toothache Booking.</h3>
                  <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                    Dental practices lose a lot of calls during peak hygiene hours, when the front desk is busiest. Our dental AI voice agent connects directly to Dentrix, Eaglesoft, Open Dental, and Curve Dental. It books routine cleanings and screens emergency dental pain. It also schedules cosmetic consultations and checks dental PPO coverage, usually in under ninety seconds.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                    <li>&bull. Dentrix / Eaglesoft Sync.</li>
                    <li>&bull. Hygiene Recall Automation.</li>
                    <li>&bull. Emergency Triage Paging.</li>
                    <li>&bull. Dental PPO Copay Pre-Check.</li>
                  </ul>
                </div>
              </div>

              {/* VERTICAL 2: HOSPITAL DEPARTMENTS & MULTI-SPECIALTY CLINICS */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                    // HOSPITALS & MULTI-SPECIALTY MEDICAL GROUPS
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] mb-4">High-Volume Clinical Telephony & Patient Triage Routing.</h3>
                  <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                    Multi-specialty outpatient clinics and hospital networks field thousands of calls a day about lab results, physician referrals, and reschedules. Our system takes many calls at once. It checks patient identity against Epic MyChart or Cerner records, then routes each request to the right department inbox. Call center overhead usually drops by more than half. The same real-time routing engine powers our general{' '}
                    <Link href="/services/ai-customer-support-agents" className="underline hover:text-[#F05A28]">
                      AI customer support agents
                    </Link>{' '}
                    for non-clinical hospital departments like billing or facilities.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                    <li>&bull. Epic FHIR R4 Integration.</li>
                    <li>&bull. Concurrent Call Scaling.</li>
                    <li>&bull. Referral Intake Parsing.</li>
                    <li>&bull. Clinical Lab Inquiry Routing.</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-2 shadow-lg overflow-hidden">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
                      <Image
                        src="/images/healthcare/hospital-ai-triage-control.jpg"
                        alt="American hospital clinical coordination room with AI intake stream telemetry"
                        width={1376}
                        height={768}
                        className="absolute inset-0 h-full w-full object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* VERTICAL 3: CHIROPRACTIC & PHYSICAL THERAPY */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-2 shadow-lg overflow-hidden">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
                      <Image
                        src="/images/healthcare/independent-chiropractor-clinic-ai.jpg"
                        alt="American chiropractic and physical therapy clinic front desk with automated check-in"
                        width={1376}
                        height={768}
                        className="absolute inset-0 h-full w-full object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                    // CHIROPRACTORS, PHYSICAL THERAPY &amp. WELLNESS
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] mb-4">After-Hours New Patient Capture &amp. Treatment Plan Follow-Ups.</h3>
                  <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                    Independent practitioners often run with just one front-desk coordinator, who cannot answer the phone while checking in a patient. Our voice agent answers every after-hours call instead. It explains initial consultation fees and collects injury history. It also books the first adjustment into ChiroTouch or Jane App, and texts the intake paperwork automatically. The same after-hours capture pattern shows up in home-service trades. see our{' '}
                    <Link href="/services/contractor-ai-receptionist" className="underline hover:text-[#F05A28]">
                      contractor AI receptionist
                    </Link>{' '}
                    page for that version.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                    <li>&bull. ChiroTouch / Jane App Sync.</li>
                    <li>&bull. Treatment Plan Reactivation.</li>
                    <li>&bull. Zero Missed Inbound Leads.</li>
                    <li>&bull. SMS Paperwork Dispatch.</li>
                  </ul>
                </div>
              </div>

              {/* VERTICAL 4: URGENT CARE & AMBULATORY SURGERY CENTERS */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                    // URGENT CARE &amp. SURGERY CENTERS
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] mb-4">Pre-Op Instructions &amp. Urgent Care Wait-Time Guidance.</h3>
                  <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                    Ambulatory surgery centers (ASCs) and urgent care clinics get heavy call volume from anxious patients. Most calls ask about fasting rules, arrival times, or walk-in wait times. Our voice agent gives clear, rule-based pre-op fasting instructions, confirms transportation, and updates patients on the current wait. If a caller sounds non-compliant, it flags the case directly to a surgical coordinator. The same rule-based approach carries over to other regulated settings. our{' '}
                    <Link href="/services/chemical-pharmaceutical-ai-agents" className="underline hover:text-[#F05A28]">
                      chemical and pharmaceutical AI agents
                    </Link>{' '}
                    follow comparable safety scripts.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                    <li>&bull. Pre-Op Fasting Protocols.</li>
                    <li>&bull. Real-Time Wait-Time Feeds.</li>
                    <li>&bull. Post-Op Check Call Automation.</li>
                    <li>&bull. Transportation Rule Confirmations.</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-2 shadow-lg overflow-hidden">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
                      <Image
                        src="/images/healthcare/hipaa-cloud-security-audit.jpg"
                        alt="American healthcare data security specialist reviewing HIPAA encrypted telemetry dashboards"
                        width={1376}
                        height={768}
                        className="absolute inset-0 h-full w-full object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EHR / PRACTICE MANAGEMENT SYSTEM COVERAGE */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // SYSTEM COVERAGE
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Which EHR, Dental, and Practice Management Systems We Connect To.</h2>
              <p className="text-lg text-[#46403B]">
                Every practice runs different front-desk software. Here is exactly what we connect to today, and what each connection actually does.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-4">Medical &amp. Hospital EHR.</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed list-none">
                  <li><span className="font-bold text-[#14110F]">Epic</span>, via Epic App Orchard: ambulatory scheduling, patient lookup, and encounter notes.</li>
                  <li><span className="font-bold text-[#14110F]">Cerner</span> (Oracle Health): provider templates and patient demographics through your interface engine.</li>
                  <li><span className="font-bold text-[#14110F]">athenahealth</span>: open-slot reads and appointment writes through the AthenaHealth Marketplace API.</li>
                  <li><span className="font-bold text-[#14110F]">eClinicalWorks</span>: appointment booking and intake through its published scheduling API.</li>
                  <li><span className="font-bold text-[#14110F]">Allscripts</span> (Veradigm): calendar sync and structured message routing for refill requests.</li>
                  <li><span className="font-bold text-[#14110F]">NextGen Healthcare</span>: provider availability checks and appointment-type validation.</li>
                  <li><span className="font-bold text-[#14110F]">Kareo</span>: scheduling sync built for solo and small-practice physicians.</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-4">Dental Practice Management.</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed list-none">
                  <li><span className="font-bold text-[#14110F]">Dentrix</span>: full operatory-level scheduling, hygiene recall, and same-day emergency holds.</li>
                  <li><span className="font-bold text-[#14110F]">Eaglesoft</span>: chairside scheduling with treatment-plan-aware booking rules.</li>
                  <li><span className="font-bold text-[#14110F]">Open Dental</span>: open API access for multi-location dental groups.</li>
                  <li><span className="font-bold text-[#14110F]">Curve Dental</span>: cloud-native scheduling sync for newer practices.</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-4">Chiropractic &amp. Wellness.</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed list-none">
                  <li><span className="font-bold text-[#14110F]">ChiroTouch</span>: visit-type scheduling and treatment-plan reactivation calls.</li>
                  <li><span className="font-bold text-[#14110F]">Jane App</span>: wellness and physical therapy booking with intake-form sync.</li>
                </ul>
                <p className="mt-6 text-sm text-[#6E655F] leading-relaxed border-t border-[#E7DED6] pt-4">
                  Running something else? We scope a custom connector against its published API, or its scheduled export files if it does not have one.
                </p>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline="Not sure which calls an agent should handle.?"
          sub="Tell us your call volume and EHR system. We'll map exactly what the agent answers, books, and escalates to your staff."
          label="Get a healthcare AI audit"
        />

        {/* 10-POINT TECHNICAL ARCHITECTURE & COMPLIANCE BLUEPRINT */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // TECHNICAL ARCHITECTURE &amp. SECURITY SPECIFICATION
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">The Healthcare AI Telephony &amp. EHR Integration Stack.</h2>
              <p className="text-lg text-[#46403B]">
                How we hit sub-500ms voice response, zero-retention HIPAA security, and reliable two-way database sync.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none">
              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">01 // TELEPHONY INGRESS &amp. SBC ROUTING.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Carrier-Grade SIP Trunking &amp. Audio Streaming.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We deploy dedicated SIP trunks through Twilio and Telnyx. These feature Session Border Controller (SBC) redundancy in case one carrier path fails. Audio streams over WebSockets straight into our real-time voice pipeline, so there is no transcoding delay. Packet delivery stays under 100 milliseconds across every US telecom carrier we test against. Some hospital networks already run RingCentral, Genesys, Five9, or Aircall as their main contact-center platform. We connect alongside it through a SIP handoff. You do not have to replace it.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">02 // MEDICAL SPEECH RECOGNITION.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Deepgram Nova-2 Medical Speech-to-Text Model.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Standard consumer speech models struggle with medical terms, drug names, and dental anatomy. We use the Deepgram Nova-2 Medical model instead, tuned with vocabulary specific to your practice. It recognizes medical phrasing, dental tooth numbering, and regional accents at over 97% word accuracy.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">03 // DETERMINISTIC REASONING &amp. STATE MACHINE.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">LangGraph Cyclical Orchestration &amp. Guardrails.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We never connect a raw generative LLM straight to phone audio without rule-based guardrails around it. Our state machine, built on LangGraph, enforces strict clinical boundaries on every turn of the call. It follows defined clinical protocols, collects the required patient details in order, and handles interruptions without losing its place. It cannot invent medical advice or a drug dosage that was never approved.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">04 // FHIR R4 &amp. EHR BI-DIRECTIONAL BRIDGES.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Real-Time Provider Scheduling &amp. Patient Records.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Our system reads live provider templates, operatory buffers, and appointment rules straight from your EHR through FHIR R4 APIs. When it books a visit, the agent locks that calendar slot right away. It creates a new patient record, or matches an existing chart number. Then it logs the encounter notes directly in your clinical system.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">05 // ZERO-RETENTION HIPAA BAA SHIELD.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Encrypted Single-Tenant Cloud VPC Hosting.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  All audio processing, transcription, and database sync happen inside an isolated, single-tenant VPC. This runs on AWS or Google Cloud in a US healthcare-compliant data region. We hold zero-data-retention agreements with every AI gateway provider in the pipeline. That means patient Protected Health Information (PHI) is never stored, and never used to train a model.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">06 // 270/271 EDI CLEARINGHOUSE INTEGRATION.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Automated Real-Time Insurance Pre-Verification.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  When a caller gives insurance details, the AI sends an automated 270 eligibility request. It connects to clearinghouses like Availity, Waystar, or Change Healthcare. The 271 response comes back and gets read within two seconds. Before the call ends, the caller already knows their coverage status, deductible, and estimated copay.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">07 // PRESCRIPTION REFILL MESSAGE QUEUES.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Asynchronous Nursing Inbox &amp. Pharmacy Routing.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  For non-urgent refill requests, the voice agent collects the exact prescription name, dosage, prescribing doctor, and pharmacy phone number. It formats that into a structured clinical inbox task inside your EHR. Your EHR may not support automated routing. In that scenario, the agent sends the request through an encrypted Redis queue to nurses.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">08 // ACUTE EMERGENCY CLINICAL TRIAGE.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Automated 911 Warning &amp. On-Call Warm Transfer.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Our clinical safety classifier listens for acute emergency phrases: severe chest pain, stroke symptoms, uncontrolled bleeding, respiratory distress. The moment it hears one, the AI tells the caller to dial 911. It keeps the line open and starts a warm SIP transfer to the on-call physician&apos;s triage line. This call routing decision happens in under a second. A legacy IVR menu tree would make an anxious caller press through options first.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">09 // BILINGUAL SPANISH DETECTION.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Sub-3-Second Language Switching &amp. English Note Logging.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Bilingual support matters in most US metro markets. Our voice agent hears whether a patient is speaking English or Spanish within the first three words, then switches instantly. It runs the entire scheduling conversation in natural Spanish, and still writes standardized English clinical notes inside the EHR.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">10 // IMMUTABLE AUDIT LOGGING &amp. TELEMETRY.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Operational Visibility on SOC 2 Type II Infrastructure.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Every inbound call, API transaction, appointment confirmation, and emergency transfer gets logged into an immutable, encrypted audit trail. Practice administrators see a real-time dashboard with call completion rates, average handle times, triage resolution rates, and audio latency.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ONBOARDING TIMELINE / ROLLOUT PROCESS */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // ROLLOUT PROCESS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Onboarding Timeline: From Kickoff to Live Phone Cutover.</h2>
              <p className="text-lg text-[#46403B]">
                Every healthcare deployment follows the same four phases. Most practices go live in four to six weeks. EHR credentialing can add time for larger systems like Epic.
              </p>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none">
              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 1 // WEEK 1.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Clinical Workflow Audit &amp. EHR API Architecture.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We map your appointment templates, provider buffers, and insurance rules. For Epic clients, this includes requesting Epic App Orchard sandbox access. For Dentrix, Eaglesoft, or Open Dental, we request direct read access to your practice database instead.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 2 // WEEKS 2 TO 3.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Voice Pipeline Engineering &amp. HIPAA Compliance Shield.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We provision SIP trunks through Twilio or Telnyx and tune the speech model for your specialty&apos;s vocabulary. Your HIPAA Business Associate Agreement (BAA) is signed before any real patient audio reaches our infrastructure.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 3 // WEEKS 3 TO 4.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Deterministic Clinical Triage &amp. Edge-Case Guardrails.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We build the state machine that handles emergencies, refill requests, and bilingual Spanish calls. Every emergency path gets tested against real red-flag phrases before launch, not just happy-path scripts.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 4 // WEEKS 4 TO 6.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Pilot Telephony Shadowing &amp. Live Practice Cutover.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  The agent shadows live calls next to your front desk first, so nothing goes live untested. Once accuracy holds steady, we run a zero-downtime phone cutover, usually overnight or on a weekend.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* COMPARISON MATRIX */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // ARCHITECTURAL EVALUATION
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">FactoryJet Custom AI Agents vs Traditional Alternatives.</h2>
              <p className="text-lg text-[#46403B]">
                Why purpose-built private healthcare AI infrastructure outperforms generic voice bots and human answering services.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E7DED6]">
                <thead>
                  <tr className="border-b border-[#E7DED6] bg-[#FAFAF7] text-xs font-mono text-[#6E655F]">
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">EVALUATION CRITERIA.</th>
                    <th className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">FACTORYJET CUSTOM AI.</th>
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">GENERIC SAAS PHONE BOTS.</th>
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">HUMAN ANSWERING SERVICES.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7DED6] text-sm text-[#46403B]">
                  <tr className="bg-[#FFF8F5]/30">
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">HIPAA BAA & Zero Retention.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Full BAA, Zero Training Retention
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Shared cloud, partial BAA.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Varies by call center vendor.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">Live EHR / Practice API Sync.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Bi-directional (Epic, Dentrix, Athena)
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Zapier / Webhook forms only.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Manual message taking.</td>
                  </tr>
                  <tr className="bg-[#FFF8F5]/30">
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">Voice Response Latency.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Sub-500ms real-time conversational
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">1.5s - 3.0s robotic lag.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Human delay / hold times.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">Insurance Pre-Verification.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Live 270/271 EDI clearinghouse check
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Not supported.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Not supported.</td>
                  </tr>
                  <tr className="bg-[#FFF8F5]/30">
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">Code Ownership.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      100% Client Owned (No lock-in)
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Perpetual monthly SaaS fee.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Per-minute call billing.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* TEAM & FOUNDER LEADERSHIP SECTION */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-4 shadow-md max-w-md mx-auto">
                  <div className="relative rounded-xl overflow-hidden aspect-square">
                    <Image
                      src="/bhavesh_image.webp"
                      alt="Bhavesh Barot, Founder & CEO of FactoryJet"
                      width={682}
                      height={1024}
                      quality={95}
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="pt-4 text-center">
                    <div className="font-bold text-lg text-[#14110F]">Bhavesh Barot.</div>
                    <div className="font-mono text-xs text-[#F05A28] font-bold">
                      Founder & CEO, FactoryJet
                    </div>
                    <div className="mt-3">
                      <a
                        href="https://www.linkedin.com/in/bhavesh-ai-gtm-expert/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono text-[#F05A28] hover:underline"
                      >
                        Connect on LinkedIn &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                  // DIRECT FOUNDER OVERSIGHT
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-6">Direct Engineering Leadership from Discovery to Deployment.</h2>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-6">
                  Healthcare systems leave no room for guesswork. At FactoryJet, founder Bhavesh Barot runs every clinical architecture discovery session himself. In the first meeting, we review your call volume, your EHR&apos;s API access, and your HIPAA compliance requirements.
                </p>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-8">
                  You work directly with senior systems architects who have already built high-scale voice pipelines and enterprise integrations. We never hand your healthcare infrastructure to junior salespeople or offshore contractors. The same senior-only approach runs across our broader{' '}
                  <Link href="/services/ai-agent-development" className="underline hover:text-[#F05A28]">
                    AI agent development
                  </Link>{' '}
                  practice, not just healthcare.
                </p>
                
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://calendly.com/bhavesh-factoryjet/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#F05A28] text-white font-bold hover:bg-[#D8441A] transition-colors shadow-md text-sm"
                  >
                    Schedule Direct Architecture Call with Bhavesh
                  </a>
                  <ModalCTAButton
                    label="Request Clinical Scoping Proposal."
                    region="us"
                    modalVariant="ai"
                    btnVariant="secondary-light"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STRUCTURED FAQ SECTION */}
        <FAQ
          eyebrow="// HEALTHCARE AI QUESTIONS & ANSWERS"
          headline="Frequently Asked Questions on Healthcare AI Agents."
          lead="Everything medical directors, dental practice owners, and healthcare administrators need to know about compliance, EHR integration, and voice accuracy."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FAFAF7]"
        />

        {/* FINAL CTA SECTION */}
        <section className="py-20 bg-[#FFF8F5] border-t border-[#E7DED6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#F05A28]/30 mb-6">
              <span className="font-mono text-xs text-[#F05A28] font-bold tracking-wide">
                // ZERO MISSED PATIENTS &bull. BUILT FOR HIPAA-COMPLIANT OPERATION
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14110F] font-heading mb-6">
              Ready to Upgrade Your Practice with Custom Healthcare AI?
            </h2>
            
            <p className="text-lg text-[#46403B] max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a 30-minute technical discovery call with our founder. We will audit your current phone volume and evaluate your EHR integration requirements. Then we deliver a fixed-scope architecture proposal within 24 hours.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <a
                href="https://calendly.com/bhavesh-factoryjet/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#F05A28] text-white font-bold hover:bg-[#D8441A] transition-colors shadow-lg text-base"
              >
                Book 30-Min Discovery Call
              </a>
              <ModalCTAButton
                label="Request Custom Practice Audit"
                region="us"
                modalVariant="ai"
                btnVariant="secondary-light"
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
