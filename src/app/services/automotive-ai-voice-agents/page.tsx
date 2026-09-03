import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

const CANONICAL_URL = 'https://factoryjet.com/services/automotive-ai-voice-agents';
const PAGE_TITLE = 'Automotive AI Voice Agents & Dealership BDC | FactoryJet';
const PAGE_DESC =
  'Custom automotive AI voice agents for US car dealerships, collision centers & parts counters. 24/7 service BDC booking with direct CDK, Reynolds & Tekion sync.';
const PAGE_MODIFIED = '2026-09-03';

/** Single source for the breadcrumb trail. Feeds both the visible <Breadcrumbs>
 *  component and the BreadcrumbList JSON-LD below, so the two can never drift. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Automotive AI Voice Agents', url: CANONICAL_URL },
];

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
    languages: {
      'en-US': CANONICAL_URL,
      'x-default': CANONICAL_URL,
    },
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
      'Our automotive voice agents run at sub-500ms latency for each conversational turn. Audio streams through WebRTC and SIP telephony pipelines, paired with token-streaming neural voice synthesis. That keeps the exchange natural and human-paced, with no awkward delays. Most callers never notice a gap that small in a normal phone call. The conversation still feels natural even when a caller interrupts mid-sentence to correct a VIN digit.',
  },
  {
    category: 'voice',
    question: 'How does the voice agent handle noisy callers and background engine sounds?',
    answer:
      'We run deep neural noise-suppression and beamforming to filter out background engine rumble, highway wind, exhaust noise, and shop air tools. The voice recognition pipeline focuses on human speech frequencies. That is how it captures VIN numbers, service requests, and contact details accurately, even in a loud shop.',
  },
  {
    category: 'voice',
    question: 'Can the automotive voice agent transfer callers to live service advisors or master technicians?',
    answer:
      "Yes. The agent watches for complex diagnostic questions, commercial fleet warranty approvals, or a frustrated caller. In any of those cases, it starts an immediate warm transfer over SIP to an available service advisor. The advisor's screen shows a live pop-up with the caller's name, vehicle VIN, service history, and call summary.",
  },
  {
    category: 'voice',
    question: 'Does the voice agent support Spanish-speaking automotive service customers?',
    answer:
      'Yes. Our voice agents detect Spanish speech automatically and switch into fluent Spanish. They collect vehicle details, schedule the visit, and record diagnostic symptoms, then log an English translation in your DMS. Detection happens within the first few words of the call. The customer never has to press a menu option or ask for a Spanish-speaking advisor. The agent just continues in whichever language the caller started with, no IVR menu required.',
  },
  {
    category: 'dms',
    question: 'Which automotive Dealer Management Systems (DMS) and service schedulers do you integrate with?',
    answer:
      "We build native, two-way API connectors for the major dealer platforms. That covers CDK Global (Drive and Lightspeed), Reynolds and Reynolds (ERA-IGNITE), Tekion ARC, DealerSocket, Mitchell 1, Xtime, Auto/Mate, PBS Systems, and Dealertrack. Appointments, customer records, and repair orders sync in real time on all of them. If your DMS isn't on this list, we still take it on. We scope the integration against its dealer API during discovery, with a middleware bridge if needed.",
  },
  {
    category: 'dms',
    question: 'Can the voice agent decode 17-digit Vehicle Identification Numbers (VINs) over the phone?',
    answer:
      "Yes. The agent runs a VIN decode using phonetic NATO alphabet recognition and the NHTSA VIN API. It validates the check digit and pulls the year, make, model, trim, engine, and warranty status. That matches straight against the vehicle's DMS history. If a caller does not have the VIN handy, the agent looks it up by license plate, state, or phone number against DMS records. A missing VIN never stalls the booking.",
  },
  {
    category: 'dms',
    question: 'How does the agent handle open safety recall checks during service booking?',
    answer:
      'When a customer calls to schedule routine maintenance, like an oil change or brake inspection, the agent checks the vehicle first. It runs a VIN decode against live OEM and NHTSA recall databases. If an open safety recall turns up, it notifies the customer right away. It adds the recall repair operation code to the appointment ticket and reserves the recall parts in your inventory.',
  },
  {
    category: 'dms',
    question: 'Can the AI agent quote accurate repair estimates and labor op-code pricing?',
    answer:
      "Yes. The agent checks your DMS labor matrix, factory maintenance schedules, and parts pricing tables, covering the full quote-to-cash flow for routine service. It gives a transparent price range for factory-scheduled services, like 30k or 60k mile service, transmission flushes, or front brake pad and rotor replacement. Diagnostic teardowns are the one exception. Those still need an advisor's inspection before a firm price.",
  },
  {
    category: 'service',
    question: 'How does the AI agent manage service bay capacity and technician skill routing?',
    answer:
      'The agent reads your live Xtime or DMS shop loading rules. It checks technician certifications first, like EV battery or diesel transmission specialist. Then it checks available lift bay hours and parts availability. Only then does it offer a time slot to the caller. That is what keeps the shop from overbooking.',
  },
  {
    category: 'service',
    question: 'Can the voice agent handle inbound parts counter lookup and wholesale inquiries?',
    answer:
      'Yes. Callers can state a part description or an OEM part number, either way. The agent checks live inventory across your main warehouse and satellite storage. It quotes retail and wholesale trade pricing and verifies lead times on special orders. A wholesale account can also ask for an RFQ on a bulk part order, which gets routed straight to a dedicated parts specialist.',
  },
  {
    category: 'service',
    question: 'How does the system reduce service appointment no-shows and cancellations?',
    answer:
      'Upon scheduling, the agent sends an instant SMS confirmation with a calendar pass link and directions to the service drive. It also sends automated SMS reminders 24 hours and 2 hours before the visit. Customers can confirm, reschedule, or request a loaner vehicle right from that text.',
  },
  {
    category: 'service',
    question: 'Can the voice agent provide real-time repair order status updates to waiting customers?',
    answer:
      'Yes. When a customer calls asking for a status update, the agent pulls the active repair order from CDK or Reynolds & Reynolds. It checks whether the vehicle is in multi-point inspection, waiting on parts, with a technician, or ready in the wash bay. Then it gives the customer that status instantly.',
  },
  {
    category: 'security',
    question: 'Who owns the custom automotive AI voice code and caller analytics data?',
    answer:
      'You receive 100 percent IP and source code ownership. We deliver the Git repository, Python backend connectors, Twilio SIP trunking configurations, and Docker orchestration files. You never pay recurring per-seat user taxes or third-party call center markups. That includes the caller analytics database, your own customer data platform. Historical call volume, conversion rates, and transcript data all stay in infrastructure you control, even if you switch AI vendors or bring the work in-house.',
  },
  {
    category: 'security',
    question: 'Is customer personally identifiable information (PII) and credit card data secure?',
    answer:
      'Yes. All voice streams and call transcripts get encrypted in transit with TLS 1.3, and at rest with AES-256 keys. We follow strict PCI DSS rules for card masking on phone deposits and invoices. Card numbers are never stored in plaintext or logged in a transcript. The agent routes payment through a PCI-compliant tokenization step, so raw card data never touches our servers or your DMS. We also run penetration testing on the telephony stack.',
  },
  {
    category: 'security',
    question: 'Can the voice agent run alongside our existing human BDC team?',
    answer:
      'Yes. Dealerships often deploy our AI voice agent in overflow and after-hours mode. During the peak morning service drive rush, the AI answers every simultaneous incoming call. Without it, those calls would ring out or get abandoned. Instead, the agent books each appointment directly into your DMS.',
  },
  {
    category: 'security',
    question: 'How fast can a dealership deploy a custom AI voice receptionist system?',
    answer:
      'A standard service lane voice booking pipeline, connecting to CDK Global, Reynolds & Reynolds, or Tekion, deploys in 3 to 5 weeks. That covers telephony number porting, DMS sandbox certification, and voice persona tuning for your dealership. Most of that time goes to DMS sandbox certification, and the DMS vendor controls that step, not us. Dealerships that start the certification request in week one typically land on the faster end of the range.',
  },
  {
    category: 'service',
    question: 'Can the voice agent coordinate loaner or rental vehicles when a repair takes more than one day?',
    answer:
      'Yes. When a repair takes more than one day, the agent checks loaner fleet availability in the DMS. It reserves a vehicle, confirms pickup logistics, and flags the loaner paperwork the advisor needs at drop-off. If the loaner fleet is fully booked, the agent does not just say none are available. It checks nearby rental partners your dealership already has an account with, then notes that arrangement in the repair order.',
  },
  {
    category: 'voice',
    question: 'Can the voice agent make outbound calls to remind customers about overdue factory maintenance?',
    answer:
      'Yes. The agent checks DMS service history against factory maintenance intervals and mileage estimates. When something is overdue, like an oil change, tire rotation, or multi-point inspection, it places an outbound call or sends an SMS nudge. If the customer accepts, it books the appointment right there on the call.',
  },
  {
    category: 'service',
    question: 'How does the agent communicate multi-point inspection findings without sounding like a pushy upsell?',
    answer:
      "The agent reads structured inspection results straight from the DMS, like brake pad thickness or tire tread depth. It relays each finding in plain language, along with the technician's recommendation and a price range. Then it lets the customer approve the work, decline it, or ask to speak with a service advisor directly.",
  },
  {
    category: 'security',
    question: 'Can call recordings and transcripts be used for advisor coaching and quality review?',
    answer:
      'Yes. Every call is recorded and transcribed. You can export call logs by advisor, date range, or outcome for coaching sessions. Role-based access control limits who can open a given recording. Recordings are encrypted in transit and at rest, and retention periods are configurable to match your dealership data policy.',
  },
  {
    category: 'dms',
    question: 'Does the voice agent support electric vehicle service scheduling, including battery and charging issues?',
    answer:
      'Yes. The agent recognizes EV-specific service requests, like charging port faults, battery diagnostics, and 12V auxiliary battery replacement. It routes those calls to a technician with EV certification. Before confirming the appointment, it checks that a high-voltage safety bay is open.',
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
    itemListElement: BREADCRUMB_ITEMS.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: crumb.url,
    })),
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
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

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
                  Custom AI Voice Agents for Auto Dealerships with Live CDK &amp; Reynolds DMS Sync.
                </h1>

                <p className="text-lg sm:text-xl text-[#46403B] mb-8 leading-relaxed">
                  We build sub-500ms AI voice receptionists for franchised auto dealerships, independent collision centers, and commercial truck operators. Every inbound service call gets answered on the first ring. Each caller gets a live VIN decode, an open-recall check against OEM databases, and a confirmed appointment. Bookings sync straight into CDK Global, Reynolds &amp; Reynolds, or Tekion the instant the caller hangs up.
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
                      width={1012}
                      height={676}
                      priority
                      className="absolute inset-0 h-full w-full object-cover"
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
                An automotive AI voice agent is an enterprise voice telephony system. It connects directly to Dealer Management Systems such as CDK Global, Reynolds and Reynolds, and Tekion. It also connects to shop schedulers like Xtime and DealerSocket. On every call, it answers on the first ring, collects the vehicle&apos;s symptoms, and runs a VIN decode. It checks live bay availability and books a confirmed repair order in real time, with no human BDC on the line.
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
                  ~20%
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Dealership Calls Unanswered or Abandoned
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Marchex call analytics find that nearly 20 percent of inbound dealership calls go unanswered or abandoned. That number covers sales and service lines alike. The losses concentrate in peak call-volume windows, like the morning service drive rush.
                </p>
                <a
                  href="https://www.marchex.com/comprehensive-analysis-the-cost-of-poor-call-handling-in-auto-dealerships/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#F05A28] hover:underline"
                >
                  Source: Marchex Call Analytics &rarr;
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  +$230
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  More Per RO When Dealers Send Photo/Video Updates
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Cox Automotive's ownership research found dealers who send photo or video updates capture $640 per repair order on average. Dealers who skip that step average just $410. The $230 gap comes down to one thing: clear communication about what the vehicle actually needs.
                </p>
                <a
                  href="https://www.coxautoinc.com/retail/resources/ownership-study/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#F05A28] hover:underline"
                >
                  Source: Cox Automotive Ownership Study &rarr;
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  24/7
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Always-On First-Ring Call Coverage
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Unlike a staffed BDC line, a DMS-integrated voice agent never goes to voicemail. Dealerships that run it in overflow and after-hours mode see higher call answer rates than human-only coverage. Every call gets picked up on the first ring, no matter the volume or the time of day.
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
                // ENTERPRISE AUTOMOTIVE CAPABILITIES
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                Engineered for High-Volume Dealership Service Drives
              </h2>
              <p className="text-lg text-[#46403B]">
                Everything you need to automate service lane scheduling, parts lookup, and repair status calls, at sub-500ms voice speed.
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
                  Answers incoming dealership calls on the first ring, with sub-500ms acoustic turn-taking. Understands natural vehicle descriptions, service questions, and customer preferences, no phone-tree IVR menu required.
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
                  Connects directly to CDK Global, Reynolds &amp; Reynolds, Tekion, and Xtime. It checks technician availability and bay lift limits, then inserts the confirmed booking into the service schedule.
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
                  Runs a VIN decode on every 17-digit number, straight from the caller&apos;s voice. It queries live NHTSA and OEM databases to flag any open safety recall. Recall parts get reserved in inventory automatically.
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
                  Answers retail and wholesale trade parts calls. It checks on-hand bin stock balances across warehouses and quotes tiered pricing. Then it stages the pick-up order for parts personnel.
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
                  Routes complex mechanical questions to an available human service advisor with a SIP warm transfer. The advisor&apos;s screen, already open behind your dealership single sign-on, shows a live pop-up with the vehicle VIN and customer history.
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
                  Answers customer inquiry calls asking: "Is my car ready?" It checks live repair order status in CDK or Reynolds &amp; Reynolds, plus multi-point inspection notes and wash bay readiness. No technician gets interrupted on the floor.
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

        {/* MID-PAGE CTA */}
        <section className="py-16 bg-[#FFF8F5] border-b border-[#E7DED6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#F05A28]/30 mb-6">
              <span className="font-mono text-xs text-[#F05A28] font-bold tracking-wide">
                // HEAR IT HANDLE YOUR OWN SERVICE LINE
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#14110F] font-heading mb-6">
              Want to Hear the Voice Agent Handle a Real Service Call?
            </h2>

            <p className="text-base sm:text-lg text-[#46403B] max-w-2xl mx-auto mb-8 leading-relaxed">
              Send us a recording of a typical inbound service call. We will show you how the agent would have booked it directly into your CDK, Reynolds, or Tekion schedule, before you commit to anything.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <a
                href="https://calendly.com/bhavesh-factoryjet/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#F05A28] text-white font-bold hover:bg-[#D8441A] transition-colors shadow-md text-sm"
              >
                Book 30-Min Discovery Call
              </a>
              <ModalCTAButton
                label="Send Us a Sample Call Recording"
                region="us"
                modalVariant="ai"
                btnVariant="secondary-light"
              />
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
                Generic phone bots fail on complex transmission clunks or rattle sounds. They fail at VIN lookup too. We build purpose-built voice workflows tailored to your specific automotive sector.
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
                    Franchised dealerships miss a meaningful share of inbound service calls during morning drop-off rushes and after-hours periods. Those are the same peak-volume windows where Marchex call analytics put unanswered or abandoned dealership calls at nearly 20 percent industry-wide. Frustrated vehicle owners hang up. Many book routine oil changes, brake repairs, and tire replacements at independent quick-lube chains instead.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our franchised dealership voice agent answers every call instantly. It identifies returning customers by caller ID, pulling a single customer view from CDK Global or Reynolds &amp; Reynolds. It checks for open safety recalls, then inserts the confirmed appointment directly into Xtime or your DMS service schedule.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      CDK Drive &amp; Xtime Sync
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      NHTSA Open Recall Audit
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      SMS Confirmation Links
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/automotive/franchised-dealership-service-ai.jpg"
                      alt="Service director at franchised car dealership reviewing digital repair orders and scheduling board"
                      width={1376}
                      height={768}
                      className="absolute inset-0 h-full w-full object-cover"
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
                      width={1376}
                      height={768}
                      className="absolute inset-0 h-full w-full object-cover"
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
                    Accident victims calling a collision repair center are often stranded on the roadside and stressed. Many need immediate towing help or direct repair program (DRP) insurance guidance right away.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our collision voice agent captures the insurance claim number, carrier details, drivability status, and photo damage uploads by automated SMS. It books the drop-off estimate in Mitchell 1 or CCC ONE. If the vehicle can&apos;t be driven, it puts a tow request straight on the dispatch board.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      CCC ONE &amp; Mitchell 1 Sync
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Tow Partner Integration
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Insurance DRP Claim Capture
                    </li>
                  </ul>
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
                    Parts counter specialists answer dozens of repetitive daily calls asking: "Do you have front brake pads for a 2022 Silverado in stock?" Typing each part number by hand while the counter line grows frustrates walk-in and wholesale buyers alike.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our parts voice AI agent takes part requests by voice, from a quick reorder to a formal request for quote. It runs an inventory sync check across your DMS and satellite depots, then quotes retail list and wholesale net pricing. That is a clean quote to cash handoff for the caller. It checks warehouse replenishment lead times and stages the phone order for parts fulfillment staff.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Real-Time Bin Stock Lookup
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Wholesale Tier Pricing
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Backorder Notification Hooks
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/automotive/auto-parts-lookup-phone-ai.jpg"
                      alt="Automotive parts specialist fulfilling wholesale parts order at computerized counter"
                      width={1280}
                      height={800}
                      className="absolute inset-0 h-full w-full object-cover"
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
                      width={1376}
                      height={768}
                      className="absolute inset-0 h-full w-full object-cover"
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
                    Commercial delivery fleets, like sprinter vans, utility box trucks, and service pickups, need fast turnaround service. Otherwise routes get disrupted and drivers sit idle, which costs money.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our commercial fleet voice agent verifies the corporate account, its contract pricing, and its net terms or credit limit. For accounts that already run EDI for parts orders, it works with that pipeline too. It logs each fault code the driver reports and checks mileage against the scheduled PM-A/PM-B maintenance interval. Then it books a priority bay slot in your commercial service lane and emails the fleet manager automatically.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Fleet PO Number Capture
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      PM Schedule Compliance
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Geotab / Samsara API Hooks
                    </li>
                  </ul>
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
                    Heavy truck dealerships like Freightliner, Peterbilt, Kenworth, Mack, and International handle complex Class 8 diesel repairs. Think Cummins and Detroit Diesel engines, aftertreatment DPF issues, and emergency 24/7 roadside calls.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our heavy truck voice agent captures the engine fault code, reported as an SPN/FMI pair under the SAE J1939 protocol. It checks trailer load urgency and diesel master tech bay availability. Then it posts the job to the dispatch board for field service management. The nearest mobile repair truck picks it up. GPS tracking follows the truck to the breakdown location in real time.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      SPN/FMI Fault Code Triage
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Roadside Mobile Dispatch
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Cummins &amp; Detroit Diesel Op Codes
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/automotive/dealership-service-lane-bdc-ai.jpg"
                      alt="Commercial diesel heavy truck service facility dispatcher coordinating shop repair orders"
                      width={1012}
                      height={676}
                      className="absolute inset-0 h-full w-full object-cover"
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

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none">
              {[
                {
                  title: 'Sub-500ms Acoustic Telephony Pipeline',
                  desc: 'Low-latency SIP trunking and token-streaming neural synthesis deliver instant acoustic turnaround without awkward pause delays or unnatural interruptions.',
                },
                {
                  title: 'Bi-Directional CDK, Reynolds & Tekion Sync',
                  desc: 'Native, API-first REST, SOAP, and webhook connectors query live customer profiles, open repair orders, and shop appointment calendars without manual data entry.',
                },
                {
                  title: 'NHTSA Automated VIN Decode & Recall Lookup',
                  desc: 'Phonetic NATO alphabet recognition runs the VIN decode on all 17 digits. It then queries live recall databases to flag safety campaigns during scheduling.',
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
                  title: 'Multi-Language English & Spanish Telephony',
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
                <li
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
                </li>
              ))}
            </ul>
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

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 list-none">
              <li className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 01 // WEEKS 1-2</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">DMS Schema &amp; Telephony Audit</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We map your CDK, Reynolds, or Tekion labor matrices, advisor scheduling rules, and factory maintenance packages. We configure direct SIP trunking gateways for your telephony call flow.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: DMS API connector schema &amp; telephony trunk configuration
                </div>
              </li>

              <li className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 02 // WEEKS 2-3</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Acoustic Pipeline &amp; Op-Code Logic</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We calibrate sub-500ms voice synthesis and train NATO phonetic VIN decode models. We encode your labor pricing matrix and recall lookup hooks into deterministic state machines.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Low-latency voice conversational agent &amp; VIN validator
                </div>
              </li>

              <li className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 03 // WEEKS 3-4</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Advisor Screen-Pop &amp; Sandbox Staging</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We deploy advisor screen-pop interfaces for live warm transfer calls. We simulate hundreds of service booking calls inside your DMS sandbox. That verifies bay capacity rules and appointment creation before go-live.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Advisor desktop screen-pop console &amp; test suite validation
                </div>
              </li>

              <li className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 04 // WEEKS 4-5</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Live Telephony Rollout &amp; Handoff</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We activate live inbound call routing across your overflow and after-hours numbers first. Then we graduate to your primary service line telephony. We deliver full source code and staff operations documentation.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Complete source code, Docker orchestration &amp; SLA handover
                </div>
              </li>
            </ul>
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

            <p className="text-sm sm:text-base text-[#46403B] mt-8 max-w-3xl">
              For the full math behind these numbers, see our{' '}
              <Link href="/blog/ai-voice-agents-vs-human-answering-services-cost-comparison-2026" className="text-[#F05A28] font-semibold hover:underline">
                AI voice agent vs. human answering service cost comparison
              </Link>
              . Or run your own numbers with the{' '}
              <Link href="/tools/ai-agent-roi-calculator" className="text-[#F05A28] font-semibold hover:underline">
                AI agent ROI calculator
              </Link>
              .
            </p>
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
                      width={682}
                      height={1024}
                      quality={95}
                      className="absolute inset-0 h-full w-full object-cover"
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
                  Automotive dealership telephony needs an instant response, rock-solid DMS sync, and zero tolerance for dropped appointments. At FactoryJet, founder Bhavesh Barot leads every automotive AI architecture and DMS scoping session personally. In that first session, we review your current CDK, Reynolds, or Tekion setup and your telephony call flows.
                </p>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-8">
                  You work directly with senior systems architects. They have built enterprise telephony infrastructure and high-volume data integrations for over a decade. We build dependable, high-converting software that your auto group owns and controls forever.
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

              <Link
                href="/services/restaurant-ai-voice-agents"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 04</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">
                  Restaurant AI Voice Agents &rarr;
                </h3>
                <p className="text-sm text-[#46403B]">
                  The same low-latency voice architecture, tuned for reservation lines and to-go order calls instead of a service drive.
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
              Book a 30-minute architecture session with our founder. We will review your DMS setup and your inbound call volume patterns. Then we send a fixed-scope voice AI proposal within 24 hours.
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
