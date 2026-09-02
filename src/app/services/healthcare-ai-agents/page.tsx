import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

const CANONICAL_URL = 'https://factoryjet.com/services/healthcare-ai-agents';
const PAGE_TITLE = 'Healthcare AI Agents & Medical Receptionists | FactoryJet';
const PAGE_DESC =
  'Custom HIPAA-compliant healthcare AI agents and medical voice receptionists for US practices, dental clinics, and hospitals. Real EHR sync. Get an audit.';
const PAGE_MODIFIED = '2026-09-01';

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
    answer: 'Yes. Every healthcare AI agent we engineer operates under a direct Business Associate Agreement (BAA). All real-time voice audio streams, patient transcripts, and protected health information (PHI) are encrypted in transit via TLS 1.3 and at rest with AES-256 keys. We configure zero data retention protocols across all speech-to-text and LLM inference endpoints, ensuring patient data is never cached or used for public model training.',
  },
  {
    category: 'hipaa',
    question: 'How do you handle emergency medical situations and patient safety guardrails?',
    answer: 'Our healthcare voice agents implement deterministic clinical safety guardrails. When a caller mentions acute red-flag symptoms such as severe chest pain, shortness of breath, acute stroke signs, or severe trauma, the AI agent immediately recognizes the clinical urgency, instructs the caller to hang up and dial 911, and initiates an immediate warm transfer to the on-call physician or emergency triage line.',
  },
  {
    category: 'hipaa',
    question: 'Do you sign Business Associate Agreements (BAAs) with medical practices?',
    answer: 'Yes. FactoryJet executes formal BAAs with every healthcare client prior to connecting any telephony, server infrastructure, or EHR database endpoints. We also ensure that all upstream cloud hosting providers, telephony gateways, and LLM inference providers have executed binding BAAs. The signed BAA is a prerequisite step in our onboarding sequence, not a document we get to later, so no patient audio or PHI reaches our infrastructure until your compliance officer has a countersigned copy.',
  },
  {
    category: 'hipaa',
    question: 'Where is patient data stored and processed during voice calls?',
    answer: 'Patient data is processed entirely within dedicated, single-tenant Virtual Private Clouds (VPCs) hosted on AWS or Google Cloud in US healthcare-compliant data regions. Transient audio packets are processed in memory during the call and written directly to your authorized EHR system via encrypted FHIR R4 APIs without intermediate secondary storage.',
  },
  {
    category: 'ehr',
    question: 'Which EHR, EMR, and dental practice management systems do you integrate with?',
    answer: 'We build custom bi-directional API connectors for leading healthcare and dental systems. These include Epic Systems, Cerner (Oracle Health), AthenaHealth, eClinicalWorks, Allscripts (Veradigm), NextGen Healthcare, Kareo, Dentrix, Eaglesoft, Open Dental, Curve Dental, and ChiroTouch. If your practice runs a system outside this list, we scope a custom connector against its published API or, for smaller EHR vendors without one, its scheduled export and import files, rather than telling you the integration is not possible.',
  },
  {
    category: 'ehr',
    question: 'Can the AI agent check real-time provider calendar availability and book appointments?',
    answer: 'Yes. Rather than relying on static appointment request forms, our AI agents read live provider scheduling templates, operatory availability, visit duration rules, and chair buffers directly from your EHR API. The agent books the visit, collects patient demographics, and updates the practice calendar in under two seconds.',
  },
  {
    category: 'ehr',
    question: 'How does the AI verify patient insurance eligibility prior to booking?',
    answer: 'The AI agent collects the patient insurance carrier name, member ID, group number, and date of birth via conversational voice prompts. It transmits an automated real-time 270/271 EDI eligibility transaction to your clearinghouse (such as Change Healthcare, Waystar, or Availity) and confirms active coverage and copay requirements before finalizing the appointment.',
  },
  {
    category: 'ehr',
    question: 'Can the AI route prescription refill requests directly to our clinical staff?',
    answer: 'Yes. For routine refill inquiries, the AI gathers the medication name, dosage, preferred pharmacy details, and prescribing doctor. It formats the request into a structured clinical inbox message inside your EHR or routes it to your triage nurse team via secure clinical messaging.',
  },
  {
    category: 'clinical',
    question: 'How natural does the AI medical receptionist sound over the phone?',
    answer: 'We deploy sub-500 millisecond ultra-low latency voice pipelines using dedicated SIP trunking, Deepgram Nova-2 medical speech recognition, and custom human-like voice synthesis. The AI understands medical terminology, patient interruptions, background noise, and natural conversational cadence without awkward robotic pauses. Patients regularly finish a call without realizing they spoke with an AI system rather than a front-desk staff member, though we always disclose that it is an automated assistant if a caller asks directly.',
  },
  {
    category: 'clinical',
    question: 'Can the AI handle bilingual patient inquiries, including Spanish?',
    answer: 'Yes. Our healthcare voice agents dynamically detect whether a caller is speaking English or Spanish within the first three words. The agent instantly responds in fluent Spanish, captures symptoms and scheduling preferences accurately, and logs English-translated clinical notes inside the EHR.',
  },
  {
    category: 'clinical',
    question: 'What happens when a caller has a complex or ambiguous clinical question?',
    answer: 'The AI agent never guesses or provides unauthorized medical diagnoses. When a caller asks complex diagnostic or clinical management questions, the agent politely clarifies that it is an automated practice coordinator, provides general practice policy information, and transfers the call to a triage nurse or takes a detailed callback message.',
  },
  {
    category: 'clinical',
    question: 'How does the voice agent handle heavy background noise or elderly callers?',
    answer: 'We utilize neural noise cancellation models at the telephony ingress layer and calibrate speech recognition for regional accents, slower speech cadences, and elderly patient phrasing. If clarification is required, the AI gently asks the caller to confirm specific details before logging records.',
  },
  {
    category: 'deployment',
    question: 'How long does it take to build and deploy a custom healthcare AI receptionist?',
    answer: 'A standard custom healthcare AI agent deployment takes four to six weeks from initial scoping to live pilot. This timeline includes telephony routing configuration, EHR API authentication, custom clinical prompt tuning, staff escalation workflows, and rigorous HIPAA penetration testing. EHR API authentication is usually the long pole, since larger vendors like Epic require a formal credentialing and sandbox approval process that we cannot accelerate, even though our build work is often ready first.',
  },
  {
    category: 'deployment',
    question: 'What is the typical return on investment for a private medical or dental practice?',
    answer: 'Private practices typically achieve full cost payback within 60 to 90 days. By capturing 100% of after-hours calls, preventing patient scheduling drop-off, eliminating outsourced human answering service fees ($1,200 to $3,500 monthly), and reducing front-desk overtime, clinics recover tens of thousands of dollars in lost patient revenue.',
  },
  {
    category: 'deployment',
    question: 'Does our practice own the AI agent code and custom workflow prompts?',
    answer: 'Yes. FactoryJet builds custom AI infrastructure that you own and operate. All workflow state machines, telephony routing scripts, API integration connectors, and prompt architectures remain your permanent operational assets with zero proprietary vendor lock-in. That ownership transfers at delivery, not after a minimum term expires, so a practice that wants to bring the system in-house or switch vendors can do so immediately, with the full codebase handed over rather than held back as leverage.',
  },
  {
    category: 'deployment',
    question: 'How does our clinical staff monitor call logs and agent performance?',
    answer: 'We provide an administrative operational dashboard that displays real-time call volume, appointment conversion rates, average handle times, triage escalation logs, and audio quality metrics. Practice managers can review de-identified call summaries and refine appointment scheduling rules at any time. Access to the dashboard is role-based, so a front-desk supervisor sees call and scheduling metrics while only designated compliance staff can pull the underlying audio or PHI-containing transcript for a specific call under audit.',
  },
  {
    category: 'ehr',
    question: 'How does the agent integrate specifically with Epic, and does it require App Orchard access?',
    answer: 'For Epic clients, we build against Epic App Orchard FHIR APIs where available, which covers scheduling, patient lookup, and encounter notes for most ambulatory builds. For hospital systems on older Epic versions without App Orchard access, we work with your Epic analyst team to secure interface access through your existing integration engine instead.',
  },
  {
    category: 'ehr',
    question: 'What does the AthenaHealth integration actually read and write?',
    answer: 'Through the AthenaHealth Marketplace API, the agent reads live provider open slots, appointment types, and patient demographics, and writes new appointments, updates existing bookings, and logs call summaries as structured notes. It does not touch clinical documentation, orders, or billing codes.',
  },
  {
    category: 'hipaa',
    question: 'Do you sign a BAA directly with our practice, or only with your subcontractors?',
    answer: 'Both. FactoryJet signs a direct BAA with your practice as the covered entity. We also maintain signed BAAs with every downstream subprocessor that touches call audio or patient data, including our cloud hosting provider, telephony carrier, and speech-to-text vendor, so the chain of custody is covered end to end, not just at the first hop.',
  },
  {
    category: 'ehr',
    question: 'Can the agent handle dental-specific scheduling logic, like operatory assignment and hygienist-versus-doctor time blocks?',
    answer: 'Yes. Dental scheduling has its own rules that general medical scheduling does not: operatory availability, separate hygienist and doctor columns, procedure-specific time blocks, and same-day emergency slots held back from online booking. We configure the agent against your Dentrix, Eaglesoft, or Open Dental appointment book with those rules built in, not a generic calendar grid.',
  },
  {
    category: 'hipaa',
    question: 'What happens to call recordings and transcripts after the call ends?',
    answer: 'Under our standard zero-retention configuration, raw audio is not stored after the call completes; only the structured appointment or message data is written to your EHR. If your practice wants call recordings retained for QA or compliance, we configure encrypted, access-logged storage inside your own BAA-covered cloud environment, never a third-party archive outside your control.',
  },
];

export default function HealthcareAiAgentsPage() {
  const schemaWebPage = {
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

  const schemaService = {
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

  const schemaHowTo = {
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

  const schemaBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://factoryjet.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://factoryjet.com/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Healthcare AI Agents',
        item: CANONICAL_URL,
      },
    ],
  };

  const schemaFAQ = {
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      <SiteHeader />

      <main className="min-h-screen bg-white text-[#14110F]">
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
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14110F] font-heading leading-tight mb-6">
                  Custom AI Medical Voice Receptionists with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F05A28] to-[#C94A1A]">
                    Live EHR Integration.
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-[#46403B] font-normal leading-relaxed mb-8 max-w-2xl">
                  We engineer private, sub-500ms AI voice agents for American medical practices, dental clinics, and hospital departments. Eliminate missed patient calls, automate after-hours scheduling, and sync bi-directionally with Epic, Cerner, Dentrix, and AthenaHealth.
                </p>

                <div className="mb-8">
                  <HeroInlineForm
                    source="healthcare-ai-agents"
                    region="us"
                    submitLabel="Request Healthcare AI Audit"
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
                    <span>Sub-500ms Voice Telephony</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-3 shadow-xl overflow-hidden">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                    <Image
                      src="/images/healthcare/healthcare-ai-receptionist-desk.jpg"
                      alt="Modern American medical clinic front desk with healthcare AI receptionist workflow"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-[#E7DED6] mt-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#6E655F] mb-1">
                      <span>LIVE TELEPHONY INTAKE</span>
                      <span className="text-[#10B981] font-bold">24/7 ACTIVE</span>
                    </div>
                    <div className="text-sm font-bold text-[#14110F]">
                      AthenaHealth + Dentrix Operatory Sync Active
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
                A healthcare AI voice agent is a custom software system that autonomously answers inbound medical clinic phone calls, performs deterministic symptom triage, and schedules appointments directly inside practice EHR systems. Operating under strict HIPAA Business Associate Agreements, it eliminates missed patient calls, verifies insurance eligibility in real time, and escalates acute clinical emergencies to human medical staff.
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
              <h2 className="text-3xl font-extrabold text-[#14110F] font-heading">
                The Cost of Unanswered Calls in American Healthcare
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  50%+
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Peak-Hour Calls Sent to Voicemail
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  In one MGMA-documented case, individual clinics were sending more than half of incoming calls to voicemail during peak hours, with missed calls concentrated around 10 a.m. — right when patients are trying to book.
                </p>
                <a
                  href="https://www.mgma.com/articles/enhancing-patient-access-by-empowering-front-desk-staff-through-phone-system-improvements"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#F05A28] hover:underline"
                >
                  Source: MGMA, Front Desk Phone System Improvements &rarr;
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  Untracked
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Revenue Lost to Missed Calls, Per Chair
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Most practices have never actually measured what a missed after-hours or emergency call costs per chair — and ADA Health Policy Institute data shows practice expenses growing faster than revenue, which makes every uncaptured booking worth more than it used to be.
                </p>
                <a
                  href="https://www.ada.org/resources/research/health-policy-institute/dental-practice-research/trends-in-dentist-income"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#F05A28] hover:underline"
                >
                  Source: ADA Health Policy Institute &rarr;
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  Direct Sync
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  No Double-Booked or Stale Slots
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Because the agent reads live provider templates and operatory buffers directly from the EHR instead of a static request form, it cannot offer a slot that's already taken or miss a buffer rule a front-desk form would.
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
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                Engineered for High-Volume Medical and Dental Practices
              </h2>
              <p className="text-lg text-[#46403B]">
                Everything required to automate patient telephone inquiries safely without compromising clinical standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  01
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  24/7 Conversational Voice Receptionist
                </h3>
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
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Bi-Directional Live EHR Scheduling
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Connects directly to Epic, AthenaHealth, Cerner, and Dentrix. Validates provider operatory buffers, appointment types, and inserts patient bookings directly into the clinical schedule.
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
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Real-Time Insurance Pre-Verification
                </h3>
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
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Deterministic Clinical Triage
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Implements strict clinical safety protocols. Identifies red-flag symptoms, instructs callers on emergency steps, and performs instantaneous warm phone transfers to on-call doctors.
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
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Automated Patient Recall Campaigns
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Scans overdue cleaning schedules, annual physical checkups, and post-op follow-ups. Deploys personalized outbound conversational voice and SMS reminders to reactivate dormant patients.
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
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  HIPAA Shield & Single-Tenant VPC
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Self-hosted infrastructure inside your private cloud environment. Features full BAA agreements, end-to-end encryption, automated audit logging, and zero vendor training data retention.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Signed Business Associate Agreement
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Hosted on SOC 2 Type II-certified infrastructure
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Immutable access audit trails
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline="Not sure which calls an agent should handle?"
          sub="Tell us your call volume and EHR system. We'll map exactly what the agent answers, books, and escalates to your staff."
          label="Get a healthcare AI audit"
        />

        {/* 5 HEALTHCARE VERTICAL USE CASES WITH PHOTOREALISTIC IMAGERY */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // TAILORED CLINICAL DOMAINS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                Specialized Architectures for Every Healthcare Sector
              </h2>
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
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                    // DENTAL PRACTICES, ORTHODONTISTS & DSOS
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] mb-4">
                    Automating Operatory Chairs & Emergency Toothache Booking
                  </h3>
                  <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                    Dental practices face high call abandonment rates during peak hygiene appointment hours. Our dental AI voice agent connects directly to Dentrix, Eaglesoft, and Open Dental. It books routine preventative cleanings, qualifies emergency dental pain, schedules cosmetic consultations, and verifies dental PPO insurance plans over the phone in under ninety seconds.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                    <li>&bull; Dentrix / Eaglesoft Sync</li>
                    <li>&bull; Hygiene Recall Automation</li>
                    <li>&bull; Emergency Triage Paging</li>
                    <li>&bull; Dental PPO Copay Pre-Check</li>
                  </ul>
                </div>
              </div>

              {/* VERTICAL 2: HOSPITAL DEPARTMENTS & MULTI-SPECIALTY CLINICS */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                    // HOSPITALS & MULTI-SPECIALTY MEDICAL GROUPS
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] mb-4">
                    High-Volume Clinical Telephony & Patient Triage Routing
                  </h3>
                  <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                    Multi-specialty outpatient clinics and hospital networks handle thousands of daily inquiries regarding lab results, physician referrals, and appointment reschedules. Our system handles multi-line concurrent traffic, validates patient identity against Epic MyChart or Cerner databases, routes clinical requests to department inboxes, and reduces call center overhead by over half.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                    <li>&bull; Epic FHIR R4 Integration</li>
                    <li>&bull; Concurrent Call Scaling</li>
                    <li>&bull; Referral Intake Parsing</li>
                    <li>&bull; Clinical Lab Inquiry Routing</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-2 shadow-lg overflow-hidden">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
                      <Image
                        src="/images/healthcare/hospital-ai-triage-control.jpg"
                        alt="American hospital clinical coordination room with AI intake stream telemetry"
                        fill
                        className="object-cover"
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
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                    // CHIROPRACTORS, PHYSICAL THERAPY &amp; WELLNESS
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] mb-4">
                    After-Hours New Patient Capture &amp; Treatment Plan Follow-Ups
                  </h3>
                  <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                    Independent practitioners often operate with a single front-desk coordinator who cannot answer calls while checking in patients. Our voice agent answers every after-hours call, explains initial consultation fees, collects injury histories, books initial adjustment appointments into ChiroTouch or Jane App, and sends automated intake paperwork via text.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                    <li>&bull; ChiroTouch / Jane App Sync</li>
                    <li>&bull; Treatment Plan Reactivation</li>
                    <li>&bull; Zero Missed Inbound Leads</li>
                    <li>&bull; SMS Paperwork Dispatch</li>
                  </ul>
                </div>
              </div>

              {/* VERTICAL 4: URGENT CARE & AMBULATORY SURGERY CENTERS */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                    // URGENT CARE &amp; SURGERY CENTERS
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] mb-4">
                    Pre-Op Instructions &amp; Urgent Care Wait-Time Guidance
                  </h3>
                  <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                    Ambulatory surgery centers (ASCs) and urgent care clinics experience heavy call volume from anxious patients regarding fasting requirements, arrival times, and walk-in wait times. Our voice agent delivers clear, deterministic pre-operative fasting rules, confirms transportation arrangements, updates patients on current clinic wait times, and flags non-compliant patients directly to surgical coordinators.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                    <li>&bull; Pre-Op Fasting Protocols</li>
                    <li>&bull; Real-Time Wait-Time Feeds</li>
                    <li>&bull; Post-Op Check Call Automation</li>
                    <li>&bull; Transportation Rule Confirmations</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-2 shadow-lg overflow-hidden">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
                      <Image
                        src="/images/healthcare/hipaa-cloud-security-audit.jpg"
                        alt="American healthcare data security specialist reviewing HIPAA encrypted telemetry dashboards"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10-POINT TECHNICAL ARCHITECTURE & COMPLIANCE BLUEPRINT */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // TECHNICAL ARCHITECTURE &amp; SECURITY SPECIFICATION
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                The Healthcare AI Telephony &amp; EHR Integration Stack
              </h2>
              <p className="text-lg text-[#46403B]">
                How we achieve sub-500ms voice responsiveness, zero-retention HIPAA security, and reliable bi-directional database synchronization.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none">
              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">01 // TELEPHONY INGRESS &amp; SBC ROUTING</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Carrier-Grade SIP Trunking &amp; Audio Streaming</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We deploy dedicated SIP trunks through Twilio and Telnyx with Session Border Controller (SBC) redundancy. Incoming audio streams are piped via bi-directional WebSockets directly to our real-time voice orchestration pipeline, eliminating transcoding delays and achieving sub-100ms packet delivery across all US telecom carriers.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">02 // MEDICAL SPEECH RECOGNITION</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Deepgram Nova-2 Medical Speech-to-Text Model</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Standard consumer speech models fail on medical terminology, prescription drug names, and dental anatomy. We deploy Deepgram Nova-2 Medical models customized with practice-specific vocabulary boosting. The model recognizes specialized medical phrasing, dental tooth numbering, and regional patient accents with over 97% word accuracy.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">03 // DETERMINISTIC REASONING &amp; STATE MACHINE</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">LangGraph Cyclical Orchestration &amp; Guardrails</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We never connect raw generative LLMs directly to telephone audio without deterministic guardrails. Our conversational state machine uses LangGraph cyclical graphs to enforce strict clinical boundaries. The agent executes defined clinical protocols, collects required patient demographics systematically, handles patient interruptions gracefully, and cannot invent unauthorized medical advice or drug dosages.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">04 // FHIR R4 &amp; EHR BI-DIRECTIONAL BRIDGES</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Real-Time Provider Scheduling &amp; Patient Records</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Our system reads live provider templates, operatory buffers, and appointment type constraints directly from your EHR using FHIR R4 APIs. When an appointment is scheduled, the agent places an atomic calendar lock, generates a new patient record or matches existing chart numbers, and logs encounter notes directly in your clinical system.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">05 // ZERO-RETENTION HIPAA BAA SHIELD</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Encrypted Single-Tenant Cloud VPC Hosting</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  All audio processing, transcription, and database sync occur inside isolated single-tenant VPC environments on AWS or GCP in US healthcare-compliant data regions. We enforce zero data retention agreements with all AI gateway providers, ensuring patient Protected Health Information (PHI) is never stored or utilized for model training.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">06 // 270/271 EDI CLEARINGHOUSE INTEGRATION</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Automated Real-Time Insurance Pre-Verification</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  When a caller provides their insurance information, the AI initiates an automated 270 real-time electronic eligibility inquiry to clearinghouses like Availity, Waystar, or Change Healthcare. The 271 response is parsed within two seconds, confirming active coverage, deductible status, and estimated patient copays before the call concludes.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">07 // PRESCRIPTION REFILL MESSAGE QUEUES</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Asynchronous Nursing Inbox &amp; Pharmacy Routing</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  For non-urgent medication refill inquiries, the voice agent collects the exact prescription name, dosage, prescribing doctor, and patient pharmacy phone number. The request is formatted into a structured clinical inbox task inside your EHR or routed through an encrypted Redis queue to your nursing team for provider review.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">08 // ACUTE EMERGENCY CLINICAL TRIAGE</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Automated 911 Warning &amp; On-Call Warm Transfer</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Our clinical safety classifier monitors audio for acute emergency phrases including severe chest pain, stroke symptoms, uncontrolled bleeding, and respiratory distress. The AI immediately instructs the caller to dial 911, keeps the line active, and initiates an immediate warm SIP transfer to the on-call physician triage line.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">09 // BILINGUAL SPANISH DETECTION</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Sub-3-Second Language Switching &amp; English Note Logging</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  In diverse US metropolitan markets, bilingual capability is essential. Our voice agent identifies whether a patient is speaking English or Spanish within three words and switches fluency instantly. It conducts the entire scheduling conversation in natural Spanish while writing standardized English clinical notes inside the EHR.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">10 // IMMUTABLE AUDIT LOGGING &amp; TELEMETRY</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Operational Visibility on SOC 2 Type II Infrastructure</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Every inbound call event, API transaction, appointment confirmation, and emergency transfer is logged into an immutable, encrypted audit trail. Practice administrators access real-time dashboards displaying call completion rates, average handle times, triage resolution rates, and audio latency performance metrics.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* COMPARISON MATRIX */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // ARCHITECTURAL EVALUATION
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                FactoryJet Custom AI Agents vs Traditional Alternatives
              </h2>
              <p className="text-lg text-[#46403B]">
                Why purpose-built private healthcare AI infrastructure outperforms generic voice bots and human answering services.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E7DED6]">
                <thead>
                  <tr className="border-b border-[#E7DED6] bg-[#FAFAF7] text-xs font-mono text-[#6E655F]">
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">EVALUATION CRITERIA</th>
                    <th className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">FACTORYJET CUSTOM AI</th>
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">GENERIC SAAS PHONE BOTS</th>
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">HUMAN ANSWERING SERVICES</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7DED6] text-sm text-[#46403B]">
                  <tr className="bg-[#FFF8F5]/30">
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">HIPAA BAA & Zero Retention</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Full BAA, Zero Training Retention
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Shared cloud, partial BAA</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Varies by call center vendor</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">Live EHR / Practice API Sync</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Bi-directional (Epic, Dentrix, Athena)
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Zapier / Webhook forms only</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Manual message taking</td>
                  </tr>
                  <tr className="bg-[#FFF8F5]/30">
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">Voice Response Latency</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Sub-500ms real-time conversational
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">1.5s - 3.0s robotic lag</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Human delay / hold times</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">Insurance Pre-Verification</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Live 270/271 EDI clearinghouse check
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Not supported</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Not supported</td>
                  </tr>
                  <tr className="bg-[#FFF8F5]/30">
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">Code Ownership</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      100% Client Owned (No lock-in)
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Perpetual monthly SaaS fee</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Per-minute call billing</td>
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
                      fill
                      quality={95}
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="pt-4 text-center">
                    <div className="font-bold text-lg text-[#14110F]">Bhavesh Barot</div>
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
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-6">
                  Direct Engineering Leadership from Discovery to Deployment
                </h2>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-6">
                  Healthcare systems require uncompromising precision. At FactoryJet, founder Bhavesh Barot conducts every clinical architecture discovery session personally. We evaluate your current telephone volume, EHR API capabilities, and HIPAA compliance requirements in the first meeting.
                </p>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-8">
                  You work directly with senior systems architects who have built high-scale voice pipelines and enterprise integrations. We do not pass your healthcare infrastructure to junior salespeople or offshore contractors.
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
                    label="Request Clinical Scoping Proposal"
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
          headline="Frequently Asked Questions on Healthcare AI Agents"
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
                // ZERO MISSED PATIENTS &bull; BUILT FOR HIPAA-COMPLIANT OPERATION
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14110F] font-heading mb-6">
              Ready to Upgrade Your Practice with Custom Healthcare AI?
            </h2>
            
            <p className="text-lg text-[#46403B] max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a 30-minute technical discovery call with our founder. We will audit your current phone volume, evaluate your EHR integration requirements, and deliver a fixed-scope architecture proposal within 24 hours.
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
