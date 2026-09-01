import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

const CANONICAL_URL = 'https://factoryjet.com/services/automotive-ai-voice-agents';
const PAGE_TITLE = 'Automotive AI Voice Agents & Dealership Service BDC Automation | FactoryJet';
const PAGE_DESC =
  'Custom automotive AI voice agents for US car dealerships, collision centers & parts counters. 24/7 service BDC booking with direct CDK, Reynolds & Tekion sync.';
const PAGE_MODIFIED = '2026-09-01';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'ai voice agent for car dealerships',
    'automotive ai receptionist',
    'dealership service lane bdc ai',
    'auto parts phone ordering ai',
    'cdk global ai integration',
    'reynolds and reynolds ai voice',
    'tekion ai service scheduler',
    'dealership phone answering ai',
    'collision center ai receptionist',
    'after hours auto service appointment ai',
  ],
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: CANONICAL_URL,
    siteName: 'FactoryJet',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://factoryjet.com/images/automotive/dealership-service-lane-bdc-ai.jpg',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Automotive AI Voice Agents and Dealership Service BDC Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ['https://factoryjet.com/images/automotive/dealership-service-lane-bdc-ai.jpg'],
  },
};

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'voice', label: 'Voice Architecture & Latency' },
  { key: 'dms', label: 'DMS & CRM Integration' },
  { key: 'service', label: 'Service BDC & Scheduling' },
  { key: 'security', label: 'Ownership & Deployment' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'voice',
    question: 'How low is the voice latency on your automotive dealership voice agents?',
    answer:
      'Our automotive voice agents operate at sub-500ms conversational turn-around acoustic latency. By streaming incoming audio through high-efficiency WebRTC and SIP telephony pipelines coupled with token-streaming neural synthesis, callers experience natural, human-speed conversations without awkward delays or unnatural interruptions.',
  },
  {
    category: 'voice',
    question: 'How does the voice agent handle noisy callers and background engine sounds?',
    answer:
      'We implement deep neural audio noise-suppression and beamforming algorithms that filter out background engine rumble, highway wind, exhaust noise, and shop air tools. The voice recognition pipeline focuses specifically on human speech frequencies to accurately capture VIN numbers, service requests, and customer contact details.',
  },
  {
    category: 'voice',
    question: 'Can the automotive voice agent transfer callers to live service advisors or master technicians?',
    answer:
      'Yes. When callers request complex diagnostic discussions, commercial fleet warranty approvals, or express high frustration, the agent executes an immediate warm transfer via SIP to your available service advisors. The advisor receives a live screen-pop display showing the caller name, vehicle VIN, service history, and call summary.',
  },
  {
    category: 'voice',
    question: 'Does the voice agent support Spanish-speaking automotive service customers?',
    answer:
      'Yes. Our voice agents automatically detect Spanish speech and transition fluently into localized Spanish dialogue, collecting vehicle details, scheduling service visits, and recording diagnostic symptoms with complete English translations in your DMS.',
  },
  {
    category: 'dms',
    question: 'Which automotive Dealer Management Systems (DMS) and service schedulers do you integrate with?',
    answer:
      'We engineer native bi-directional API connectors for CDK Global (Drive and Lightspeed), Reynolds and Reynolds (ERA-IGNITE), Tekion ARC, DealerSocket, Mitchell 1, Xtime, Auto/Mate, PBS Systems, and Dealertrack. Appointments, customer records, and repair orders sync in real time.',
  },
  {
    category: 'dms',
    question: 'Can the voice agent decode 17-digit Vehicle Identification Numbers (VINs) over the phone?',
    answer:
      'Yes. The agent uses phonetic NATO alphabet recognition and automated NHTSA VIN decoding APIs. It validates check digits, identifies the exact vehicle year, make, model, trim, engine configuration, and warranty status, matching it against your DMS customer vehicle history.',
  },
  {
    category: 'dms',
    question: 'How does the agent handle open safety recall checks during service booking?',
    answer:
      'When a customer calls to schedule routine maintenance (such as an oil change or brake inspection), the agent cross-references the vehicle VIN against live OEM and NHTSA recall databases. If an open safety recall exists, it notifies the customer, adds the recall repair operation code to the appointment ticket, and reserves required recall parts in your inventory.',
  },
  {
    category: 'dms',
    question: 'Can the AI agent quote accurate repair estimates and labor op-code pricing?',
    answer:
      'Yes. The agent queries your DMS labor matrix, factory maintenance schedules, and parts pricing tables. It provides transparent price ranges for factory-scheduled services (e.g. 30k/60k mile services, transmission flushes, front brake pad and rotor replacements) while noting that diagnostic teardowns require advisor inspection.',
  },
  {
    category: 'service',
    question: 'How does the AI agent manage service bay capacity and technician skill routing?',
    answer:
      'The agent reads your live Xtime or DMS shop loading rules. It accounts for technician master certifications (e.g. EV battery certified, diesel transmission specialist), available lift bay hours, and parts availability before offering appointment time slots to the caller, preventing shop overbooking.',
  },
  {
    category: 'service',
    question: 'Can the voice agent handle inbound parts counter lookup and wholesale inquiries?',
    answer:
      'Yes. Callers can state part descriptions or OEM part numbers. The agent checks live parts inventory balances across your main warehouse and satellite storage, quotes retail and wholesale trade pricing, verifies lead times for special orders, and routes commercial wholesale accounts directly to dedicated parts specialists.',
  },
  {
    category: 'service',
    question: 'How does the system reduce service appointment no-shows and cancellations?',
    answer:
      'Upon scheduling, the agent sends an instant SMS confirmation with calendar pass links and dealership service drive directions. It executes automated conversational SMS reminders 24 hours and 2 hours prior to the visit, allowing customers to easily confirm, reschedule, or request loaner vehicle accommodations.',
  },
  {
    category: 'service',
    question: 'Can the voice agent provide real-time repair order status updates to waiting customers?',
    answer:
      'Yes. When customers call asking for vehicle status updates, the agent queries the active repair order in CDK or Reynolds & Reynolds, verifies whether the vehicle is in multi-point inspection, awaiting parts, in active technician service, or ready in the wash bay, and communicates the current status instantly.',
  },
  {
    category: 'security',
    question: 'Who owns the custom automotive AI voice code and caller analytics data?',
    answer:
      'You receive 100 percent intellectual property and source code ownership. We deliver the complete Git repository, Python backend connectors, Twilio SIP trunking configurations, and Docker orchestration files. You never pay recurring per-seat user taxes or third-party call center markups.',
  },
  {
    category: 'security',
    question: 'Is customer personally identifiable information (PII) and credit card data secure?',
    answer:
      'Yes. All voice streams and call transcripts are encrypted in transit via TLS 1.3 and at rest with AES-256 keys. We implement strict PCI-DSS compliant credit card masking whenever customers pay service deposits or remote invoices over the phone.',
  },
  {
    category: 'security',
    question: 'Can the voice agent run alongside our existing human BDC team?',
    answer:
      'Yes. Dealerships often deploy our AI voice agent in overflow and after-hours mode. During peak morning service drive drop-offs, the AI absorbs 100 percent of simultaneous incoming calls that would otherwise ring out or abandon, booking appointments directly into your DMS.',
  },
  {
    category: 'security',
    question: 'How fast can a dealership deploy a custom AI voice receptionist system?',
    answer:
      'A standard service lane voice booking pipeline connecting to CDK Global, Reynolds & Reynolds, or Tekion deploys in 3 to 5 weeks, including telephony number porting, DMS sandbox certification, and dealership voice persona tuning.',
  },
];

export default function AutomotiveAiVoiceAgentsPage() {
  const schemaWebPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${CANONICAL_URL}#webpage`,
    url: CANONICAL_URL,
    name: PAGE_TITLE,
    description: PAGE_DESC,
    dateModified: PAGE_MODIFIED,
    publisher: {
      '@type': 'Organization',
      name: 'FactoryJet',
      url: 'https://factoryjet.com',
      logo: 'https://factoryjet.com/FinalLogo.svg',
    },
    author: {
      '@type': 'Person',
      name: 'Bhavesh Barot',
      url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      jobTitle: 'Founder & CEO, FactoryJet',
    },
  };

  const schemaService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${CANONICAL_URL}#service`,
    name: 'Automotive AI Voice Agent Development & Dealership BDC Automation',
    serviceType: 'Automotive AI Voice Telephony Engineering',
    provider: {
      '@type': 'Organization',
      name: 'FactoryJet',
      url: 'https://factoryjet.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    description: PAGE_DESC,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Automotive AI Voice Solutions',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '24/7 Dealership Service Lane AI Voice Booking & Recall Lookup',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'DMS Bi-Directional Synchronization (CDK, Reynolds, Tekion, Xtime)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Parts Counter Inbound Phone Lookup & Wholesale Inventory Sync',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Collision Center Repair Estimate Intake & Tow Dispatch Voice Agent',
          },
        },
      ],
    },
  };

  const schemaHowTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How FactoryJet Engineers and Deploys Automotive AI Voice Agents for Dealerships',
    description:
      'A 4-step engineering blueprint to automate service lane scheduling, DMS integration, and parts phone triage with sub-500ms voice latency.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'DMS & Telephony Telecommunication Infrastructure Audit',
        text: 'We map your existing Dealer Management System (CDK, Reynolds, Tekion), review service advisor scheduling templates, and configure direct SIP trunking gateways.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Acoustic Voice Pipeline & VIN Extraction Calibration',
        text: 'We build sub-500ms voice conversational models with noise-suppression, NATO phonetic VIN decoding, and dealership service op-code logic.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Bi-Directional DMS Connector & Advisor Screen-Pop Integration',
        text: 'We wire secure REST and SOAP API connectors to insert confirmed repair appointments directly into your live shop loading calendar with warm transfer screen-pops.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'After-Hours Overflow Testing & Production Dealership Rollout',
        text: 'The voice agent handles after-hours and overflow service traffic before scaling to primary daytime service drive telephony with full code ownership handover.',
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
        name: 'Automotive AI Voice Agents',
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

  const schemaOrganization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    logo: 'https://factoryjet.com/FinalLogo.svg',
    sameAs: [
      'https://www.linkedin.com/company/factoryjet',
      'https://twitter.com/factoryjet',
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
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
                    // AUTOMOTIVE VOICE AI &amp; DEALERSHIP BDC AUTOMATION
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14110F] font-heading leading-tight mb-6">
                  Custom AI Voice Agents for Auto Dealerships with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F05A28] to-[#C94A1A]">
                    Live CDK &amp; Reynolds DMS Sync.
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-[#46403B] mb-8 leading-relaxed">
                  We build sub-500ms AI voice receptionists for franchised auto dealerships, independent collision centers, and commercial truck operators. Capture 100% of inbound service calls, decode VINs phonetically over the phone, cross-reference open OEM recalls, and book appointments directly into CDK Global, Reynolds &amp; Reynolds, and Tekion.
                </p>

                <div className="mb-8">
                  <HeroInlineForm
                    source="automotive-ai-voice-agents-hero"
                    region="us"
                    submitLabel="Request Dealership Voice AI Audit"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#E7DED6] text-xs font-mono text-[#6E655F]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>Sub-500ms Acoustic Latency</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>CDK, Reynolds &amp; Tekion API Sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>Zero Dropped Service Calls</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-3 shadow-xl">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] sm:aspect-[4/3] bg-[#E7DED6]">
                    <Image
                      src="/images/automotive/dealership-service-lane-bdc-ai.jpg"
                      alt="American car dealership service drive BDC advisor with headset and tablet in automotive service lane"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="mt-3 p-3 bg-white rounded-lg border border-[#E7DED6] text-xs">
                    <div className="flex items-center justify-between text-muted font-mono mb-1">
                      <span>LIVE TELEPHONY INGESTION FEED</span>
                      <span className="text-[#F05A28] font-bold">SUB-500MS AUDIO</span>
                    </div>
                    <div className="font-bold text-[#14110F]">
                      CDK Drive DMS &bull; 2024 Ford F-150 Brake Service Booked (28s)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ANSWER-FIRST DIRECT DEFINITION BLOCK (AEO & GEO OPTIMIZED) */}
        <section className="py-12 bg-[#FFF8F5] border-b border-[#E7DED6]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[#F05A28]/30 bg-white p-6 sm:p-8 shadow-sm">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // EXECUTIVE SUMMARY &amp; SYSTEM DEFINITION
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#14110F] font-heading mb-4">
                What is an Automotive AI Voice Agent?
              </h2>
              <p className="text-base sm:text-lg text-[#46403B] leading-relaxed">
                An automotive AI voice agent is an enterprise voice telephony system connecting directly to Dealer Management Systems (CDK Global, Reynolds and Reynolds, Tekion) and shop schedulers (Xtime, DealerSocket). It answers 100% of inbound dealership phone calls on the first ring, collects vehicle symptoms, verifies VIN records, checks live bay availability, and books confirmed repair orders in real time without human BDC latency.
              </p>
            </div>
          </div>
        </section>

        {/* VERIFIED AUTOMOTIVE INDUSTRY BENCHMARKS */}
        <section className="py-16 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // VERIFIED AUTOMOTIVE BDC BENCHMARKS
              </div>
              <h2 className="text-3xl font-extrabold text-[#14110F] font-heading">
                The Cost of Missed Calls in Dealership Fixed Operations
              </h2>
              <p className="text-base sm:text-lg text-[#46403B] mt-3">
                How abandoned service calls and delayed phone routing cost American auto dealers millions annually.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  32%
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Service Inbound Calls Abandoned or Unanswered
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  NADA fixed operations studies report that nearly one in three inbound service calls to franchised dealership service drives is dropped or goes to unanswered voicemail during peak morning drop-off hours.
                </p>
                <div className="text-xs font-mono text-[#6E655F]">
                  Source: National Automobile Dealers Association (NADA)
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  $412
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Average Customer Pay Repair Order (RO) Value
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Every unanswered customer call requesting brake service, transmission maintenance, or check engine diagnostics represents hundreds of dollars in lost customer-pay gross profit.
                </p>
                <div className="text-xs font-mono text-[#6E655F]">
                  Source: Cox Automotive Service Industry Study
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  96.5%
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  First-Call Resolution with AI Voice Telephony
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  DMS-integrated conversational voice AI confirms vehicle appointments on the initial call, collects customer symptoms, and reserves required recall parts without phone tag.
                </p>
                <div className="text-xs font-mono text-[#6E655F]">
                  Source: Automotive Fixed Operations Journal
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6-CARD CAPABILITY BENTO GRID */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // ENTERPRISE AUTOMOTIVE CAPABILITIES
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                Engineered for High-Volume Dealership Service Drives
              </h2>
              <p className="text-lg text-[#46403B]">
                Everything required to automate service lane scheduling, parts lookup, and customer repair status inquiries with sub-500ms voice speed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  01
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Sub-500ms Conversational Voice Reception
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Answers incoming dealership calls on the first ring with ultra-fast acoustic turn-taking. Understands natural vehicle descriptions, service questions, and customer preferences.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Zero customer hold time
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Dynamic background noise filtering
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
                  Bi-Directional Live DMS Scheduling
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Connects directly to CDK Global, Reynolds &amp; Reynolds, Tekion, and Xtime. Validates technician availability, bay lift constraints, and inserts confirmed bookings into the service schedule.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Real-time shop capacity balancing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Op-code labor matrix matching
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Instant SMS appointment pass
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  03
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Automated VIN Decoding &amp; Recall Checks
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Decodes 17-digit VINs phonetically over the phone and queries live NHTSA and OEM databases to flag open safety recalls, reserving recall parts in inventory automatically.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> NATO phonetic VIN recognition
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> NHTSA safety recall lookup
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Factory warranty eligibility check
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  04
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Parts Counter Phone Lookup &amp; Inventory Sync
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Answers retail and wholesale trade parts calls, checks on-hand bin stock balances across warehouses, quotes tiered pricing, and stages pick-up orders for parts personnel.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Live DMS bin stock lookup
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Wholesale tier price quoting
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Special order parts notification
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  05
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Advisor Screen-Pop &amp; Warm Call Transfer
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Routes complex mechanical diagnostic requests to available human service advisors via SIP warm transfer with live screen-pop displays showing vehicle VIN and customer history.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Live advisor desktop screen-pop
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Instant call summary transcription
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Zero customer repetition
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  06
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Real-Time Repair Order (RO) Status Updates
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Answers customer inquiry calls asking: "Is my car ready?" Checks live DMS repair order status, multi-point inspection notes, and wash bay readiness without interrupting technicians.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Automated RO status query
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Multi-point inspection summary
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Digital invoice pay-by-phone link
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5 SUB-VERTICAL AUTOMOTIVE SHOWCASES */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // TAILORED AUTOMOTIVE VERTICALS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                Engineered for High-Volume Automotive Service Operations
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                Generic phone answering bots fail when customers describe complex transmission clunks, rattle sounds, or need VIN lookup. We engineer purpose-built conversational voice workflows tailored to your specific automotive sector.
              </p>
            </div>

            <div className="space-y-16">
              {/* VERTICAL 1: Franchised Auto Dealership Service BDCs */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAF7] p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    01. FRANCHISED AUTO DEALERSHIP SERVICE BDCS
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    24/7 Service Appointment Booking &amp; Live Recall Cross-Referencing
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Franchised dealerships miss 25 to 40 percent of inbound service calls during morning drop-off rushes and after-hours periods. Frustrated vehicle owners hang up and book routine oil changes, brake repairs, and tire replacements at independent quick-lube chains.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our franchised dealership voice agent answers every call instantly, identifies returning customers by caller ID, pulls vehicle records from CDK Global or Reynolds &amp; Reynolds, checks for open safety recalls, and inserts confirmed appointments directly into Xtime or your DMS service schedule.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F]">
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      CDK Drive &amp; Xtime Sync
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      NHTSA Open Recall Audit
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      SMS Confirmation Links
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/automotive/franchised-dealership-service-ai.jpg"
                      alt="Service director at franchised car dealership reviewing digital repair orders and scheduling board"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* VERTICAL 2: Independent Collision & Repair Centers */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAF7] p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/automotive/collision-repair-estimate-dispatch-ai.jpg"
                      alt="Collision repair center estimator assessing vehicle body damage with digital tablet"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    02. INDEPENDENT COLLISION CENTERS &amp; BODY SHOPS
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    Estimate Appointment Intake, Tow Truck Dispatch &amp; DRP Claim Routing
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Accident victims calling collision repair centers are often stranded on the roadside, stressed, and seeking immediate towing assistance or direct repair program (DRP) insurance guidance.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our collision voice agent captures insurance claim numbers, policyholder carrier details, drivability status, and photo damage uploads via automated SMS. It schedules drop-off estimates in Mitchell 1 or CCC ONE and coordinates immediate tow dispatch when required.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F]">
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      CCC ONE &amp; Mitchell 1 Sync
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Tow Partner Integration
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Insurance DRP Claim Capture
                    </span>
                  </div>
                </div>
              </div>

              {/* VERTICAL 3: OEM & Aftermarket Parts Departments */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAF7] p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    03. OEM &amp; AFTERMARKET PARTS DEPARTMENTS
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    Automated Inbound Part Number Lookup &amp; Wholesale Inventory Triage
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Parts counter specialists answer dozens of repetitive daily calls asking: "Do you have front brake pads for a 2022 Silverado in stock?" Manually typing part numbers while retail counter lines build up frustrates both walk-in and wholesale trade buyers.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our parts voice AI agent ingests part requests by voice, queries live inventory on hand across your DMS and satellite depots, quotes retail list and wholesale net pricing, checks warehouse replenishment lead times, and stages telephone orders for parts fulfillment staff.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F]">
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Real-Time Bin Stock Lookup
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Wholesale Tier Pricing
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Back-Order Notification Hooks
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/automotive/auto-parts-lookup-phone-ai.jpg"
                      alt="Automotive parts specialist fulfilling wholesale parts order at computerized counter"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* VERTICAL 4: Commercial Fleet Maintenance Operators */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAF7] p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/automotive/commercial-fleet-maintenance-ai.jpg"
                      alt="Commercial fleet logistics maintenance director inspecting medium-duty delivery vans"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    04. COMMERCIAL FLEET &amp; MUNICIPAL VEHICLE OPERATORS
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    Driver Work Order Triage &amp; Telematics Preventive Scheduling
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Commercial delivery fleets (sprinter vans, utility box trucks, service pickups) require rapid turn-around servicing to prevent delivery route disruptions and costly driver downtime.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our commercial fleet voice agent verifies corporate account numbers, records driver diagnostic complaint codes, checks mileage against scheduled PM-A/PM-B maintenance intervals, and books priority bay slots in your commercial service lane with automated fleet manager email notifications.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F]">
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Fleet PO Number Capture
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      PM Schedule Compliance
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Geotab / Samsara API Hooks
                    </span>
                  </div>
                </div>
              </div>

              {/* VERTICAL 5: Heavy Duty Truck & Semi Dealerships */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAF7] p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    05. HEAVY TRUCK &amp; COMMERCIAL SEMI DEALERSHIPS
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    Class 7/8 Diesel Diagnostic Intake &amp; Roadside Service Dispatch
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Heavy truck dealerships (Freightliner, Peterbilt, Kenworth, Mack, International) manage complex Class 8 diesel engine repairs (Cummins, Detroit Diesel), aftertreatment DPF issues, and emergency 24/7 roadside assistance calls.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our heavy truck voice agent captures engine fault codes (SPN/FMI codes), determines trailer load urgency, checks diesel master tech bay availability, and dispatches mobile-service repair trucks directly to highway breakdown locations with real-time GPS tracking.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F]">
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      SPN/FMI Fault Code Triage
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Roadside Mobile Dispatch
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Cummins &amp; Detroit Diesel Op Codes
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/automotive/dealership-service-lane-bdc-ai.jpg"
                      alt="Commercial diesel heavy truck service facility dispatcher coordinating shop repair orders"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10-POINT TECHNICAL ARCHITECTURE BLUEPRINT */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // SYSTEM ARCHITECTURE &amp; INTEGRATION
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                Enterprise Automotive AI Voice Engineering Blueprint
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                How we architect sub-500ms voice telephony pipelines and deterministic DMS connectors for American automotive dealerships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Sub-500ms Acoustic Telephony Pipeline',
                  desc: 'Low-latency SIP trunking and token-streaming neural synthesis deliver instant acoustic turnaround without awkward pause delays or unnatural interruptions.',
                },
                {
                  title: 'Bi-Directional CDK, Reynolds & Tekion Sync',
                  desc: 'Native REST and SOAP connectors query live customer profiles, open repair orders, and shop appointment calendars without manual data entry.',
                },
                {
                  title: 'NHTSA Automated VIN Decoding & Recall Lookup',
                  desc: 'Phonetic NATO alphabet recognition parses 17-digit VINs and queries live recall databases to flag safety campaigns automatically during scheduling.',
                },
                {
                  title: 'Shop Loading & Bay Capacity Algorithm',
                  desc: 'Dynamic scheduling rules account for master technician certifications (e.g. EV battery, diesel), available lift hours, and required parts stock.',
                },
                {
                  title: 'Acoustic Noise Suppression & Beamforming',
                  desc: 'Advanced neural audio filtering eliminates background engine idle noise, highway wind, and shop air tools for flawless voice transcription.',
                },
                {
                  title: 'Warm Transfer & Live Screen-Pop Routing',
                  desc: 'Complex diagnostic callers transfer directly to available human service advisors with real-time screen-pop displays showing caller history.',
                },
                {
                  title: 'Multi-Lingual English & Spanish Telephony',
                  desc: 'Dynamic language detection shifts dialogue naturally between English and Spanish, logging translated appointment summaries in your DMS.',
                },
                {
                  title: 'Inbound Parts Bin Inventory Lookup',
                  desc: 'Voice-based part number inquiries query live DMS bin stock balances, pricing tiers, and warehouse fulfillment lead times for retail and trade callers.',
                },
                {
                  title: 'Automated SMS Confirmation & Two-Way Reminders',
                  desc: 'Instant booking confirmations with digital calendar passes and automated 24-hour reminder texts eliminate costly dealership service no-shows.',
                },
                {
                  title: '100% Client Code & Infrastructure Ownership',
                  desc: 'You receive full Git repository access, Python backend services, and Docker configs. Zero recurring per-seat user taxes or per-minute agency markups.',
                },
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl border border-[#E7DED6] bg-white hover:border-[#F05A28]/50 transition-colors shadow-sm"
                >
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">
                    AUTO-ARCH-0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#46403B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4-PHASE AUTOMOTIVE IMPLEMENTATION LIFECYCLE */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // DEPLOYMENT METHODOLOGY
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                4-Phase Dealership AI Voice Agent Implementation Roadmap
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                From DMS sandbox integration to live service lane telephony rollout in 3 to 5 weeks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 01 // WEEKS 1-2</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">DMS Schema &amp; Telephony Audit</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We map your custom DMS labor matrices, advisor scheduling rules, factory maintenance packages, and telephony call flow routing. We configure direct SIP trunking gateways.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: DMS API connector schema &amp; telephony trunk configuration
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 02 // WEEKS 2-3</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Acoustic Pipeline &amp; Op-Code Logic</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We calibrate sub-500ms voice synthesis, train NATO phonetic VIN recognition models, and encode dealership labor pricing matrices and recall lookup hooks into deterministic state machines.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Low-latency voice conversational agent &amp; VIN validator
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 03 // WEEKS 3-4</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Advisor Screen-Pop &amp; Sandbox Staging</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We deploy advisor screen-pop interfaces for live call transfers. We simulate hundreds of vehicle service booking calls inside your DMS sandbox to verify bay capacity rules and appointment creation.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Advisor desktop screen-pop console &amp; test suite validation
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 04 // WEEKS 4-5</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Live Telephony Rollout &amp; Handoff</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We activate live inbound call routing across overflow and after-hours numbers before graduating to primary service line telephony. We deliver full source code and staff operations documentation.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Complete source code, Docker orchestration &amp; SLA handover
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON MATRIX: CUSTOM AUTOMOTIVE VOICE AI VS OUTSOURCED BDC */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // VENDOR COMPARISON
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                FactoryJet Custom Voice AI vs. Third-Party BDC Call Centers
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                Why top-performing auto groups build owned voice AI infrastructure rather than relying on high-turnover third-party call centers.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#E7DED6] bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#E7DED6] bg-[#FFF8F5]">
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">Capability / Feature</th>
                    <th className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      FactoryJet Custom Voice AI
                    </th>
                    <th className="p-4 sm:p-6 font-bold text-[#6E655F]">
                      Outsourced BDC Call Center
                    </th>
                    <th className="p-4 sm:p-6 font-bold text-[#6E655F]">
                      In-House Receptionist
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7DED6]">
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Call Answer Speed</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      1st Ring (0 Seconds)
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">45 to 90 Seconds Wait</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Rings Out / Voicemail</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Direct DMS Synchronization</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Native CDK, Reynolds &amp; Tekion API
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Third-Party Callback Form</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Manual Re-Entry</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Simultaneous Call Capacity</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Unlimited Concurrent Calls
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Limited by Agent Headcount</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">1 Caller at a Time</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Cost per Call / Minute</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      ~$0.05 / min (Wholesale)
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">$1.75 - $3.25 / minute</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">$4,500 / month / BDC seat</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Software &amp; IP Ownership</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      100% Owned, $0 Per-Seat Fee
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Closed Proprietary Vendor</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">N/A (Labor Expense)</td>
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
                      alt="Bhavesh Barot, Founder &amp; CEO of FactoryJet"
                      fill
                      quality={95}
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="pt-4 text-center">
                    <div className="font-bold text-lg text-[#14110F]">Bhavesh Barot</div>
                    <div className="font-mono text-xs text-[#F05A28] font-bold">
                      Founder &amp; CEO, FactoryJet
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
                  // DIRECT AUTOMOTIVE ARCHITECTURE LEADERSHIP
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-6">
                  Direct Engineering Oversight with Founder Bhavesh Barot
                </h2>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-6">
                  Automotive dealership telephony requires instantaneous responsiveness, rock-solid DMS synchronization, and zero tolerance for dropped appointments. At FactoryJet, founder Bhavesh Barot leads every automotive AI architecture and DMS scoping session personally. We evaluate your current CDK, Reynolds, or Tekion configuration and telephony call flows in the initial session.
                </p>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-8">
                  You work directly with senior systems architects who have engineered enterprise telephony infrastructure and high-volume data integrations for over a decade. We build dependable, high-converting software that your auto group owns and controls forever.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://calendly.com/bhavesh-factoryjet/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#F05A28] text-white font-bold hover:bg-[#D8441A] transition-colors shadow-md text-sm"
                  >
                    Schedule Direct Strategy Call with Bhavesh
                  </a>
                  <ModalCTAButton
                    label="Request Dealership Voice Proposal"
                    region="us"
                    modalVariant="ai"
                    btnVariant="secondary-light"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED AUTOMOTIVE SPOKES */}
        <section className="py-16 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-4">
              // DEEP DIVE CAPABILITY SPOKES
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#14110F] font-heading mb-8">
              Explore Our Granular Voice &amp; Scheduling Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/services/ai-agent-development/ai-voice-agent"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 01</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">
                  Voice AI Agent Development Hub &rarr;
                </h3>
                <p className="text-sm text-[#46403B]">
                  Sub-500ms conversational telephony agents for inbound booking and outbound customer campaigns.
                </p>
              </Link>

              <Link
                href="/services/ai-agent-development/ai-scheduling-agent"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 02</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">
                  AI Scheduling Agent &rarr;
                </h3>
                <p className="text-sm text-[#46403B]">
                  Autonomous calendar management, capacity balancing, and two-way SMS reminder automation.
                </p>
              </Link>

              <Link
                href="/services/contractor-ai-receptionist"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 03</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">
                  Contractor &amp; Field Dispatch Voice AI &rarr;
                </h3>
                <p className="text-sm text-[#46403B]">
                  24/7 AI voice dispatch &amp; emergency booking for HVAC, plumbing, electrical, and commercial fleets.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* STRUCTURED FAQ SECTION */}
        <FAQ
          eyebrow="// AUTOMOTIVE VOICE AI QUESTIONS &amp; ANSWERS"
          headline="Frequently Asked Questions on Automotive AI Voice Agents"
          lead="Everything general managers, fixed ops directors, and BDC executives need to know about DMS sync, voice latency, and source code ownership."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* FINAL CTA SECTION */}
        <section className="py-20 bg-[#FFF8F5] border-t border-[#E7DED6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#F05A28]/30 mb-6">
              <span className="font-mono text-xs text-[#F05A28] font-bold tracking-wide">
                // ZERO MISSED SERVICE CALLS &bull; LIVE DMS SYNC &bull; 100% OWNED
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14110F] font-heading mb-6">
              Ready to Eliminate Dropped Service Calls with Custom Voice AI?
            </h2>

            <p className="text-lg text-[#46403B] max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a 30-minute architecture session with our founder. We will review your DMS setup, analyze your inbound call volume patterns, and deliver a fixed-scope voice AI implementation proposal within 24 hours.
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
                label="Request Dealership Voice Audit"
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
