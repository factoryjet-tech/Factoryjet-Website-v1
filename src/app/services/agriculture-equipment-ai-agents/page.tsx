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

const CANONICAL_URL = 'https://factoryjet.com/services/agriculture-equipment-ai-agents';
const PAGE_TITLE = 'Agriculture Equipment AI Agents | FactoryJet';
const PAGE_DESC =
  'Custom AI voice agents for ag equipment dealerships. Automate parts lookup, ISOBUS fault triage, and service dispatch across John Deere, Case IH, and AGCO.';
const PAGE_MODIFIED = '2026-09-02';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'agriculture equipment ai agents',
    'ag dealership parts phone lookup ai',
    'tractor service dispatch ai voice',
    'john deere operations center ai sync',
    'case ih agco dms integration',
    'isobus j1939 fault code triage ai',
    'precision agriculture agronomy ai',
    'farm machinery mobile service ai',
    'ag dealership bdc automation',
    'seasonal harvest equipment maintenance ai',
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
        url: 'https://factoryjet.com/images/agriculture/ag-equipment-dealership-service-parts-ai.jpg',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Agriculture Equipment AI Agents',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ['https://factoryjet.com/images/agriculture/ag-equipment-dealership-service-parts-ai.jpg'],
  },
};

// Single source of truth for both the visible breadcrumb trail and the
// BreadcrumbList JSON-LD below, so the two can never drift apart.
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Agriculture Equipment AI Agents', url: CANONICAL_URL },
];

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'dealership', label: 'Dealership BDC & Parts' },
  { key: 'telematics', label: 'ISOBUS & Telematics Faults' },
  { key: 'precision', label: 'Precision Ag & Dispatch' },
  { key: 'security', label: 'Integration & Code Ownership' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'dealership',
    question: 'How do ag equipment AI voice agents handle inbound parts counter phone calls?',
    answer:
      "Our voice agents answer dealership phone calls on the first ring, with sub-500ms acoustic response times. The agent captures the caller's equipment serial number or part description, things like a combine feeder house chain, a hydraulic coupler, or a disc blade. It queries live bin stock across your Dealer Management System (DMS) and quotes trade pricing. In stock, it stages a pick-up ticket; on backorder, it reads back the ETA instead of a dead end.",
  },
  {
    category: 'dealership',
    question: 'Which Agricultural Dealer Management Systems (DMS) and OEM portals do you integrate with?',
    answer:
      'We build native bi-directional API connectors for the DMS platforms your dealership already runs: CDK Global Heavy Equipment, DIS Corp, HBS NetView, and Basic Software Inc. On the OEM side, we connect to John Deere Service ADVISOR and Operations Center, Case IH AFS Connect, New Holland AFS Connect, and AGCO Fuse.',
  },
  {
    category: 'dealership',
    question: 'Can the voice agent triage emergency service calls during high-intensity planting and harvest windows?',
    answer:
      'Yes. When a farmer calls during spring planting or fall harvest with a stranded combine or sprayer, the agent reads the urgency in the call and collects the fault code and GPS coordinates. It checks mobile service truck availability, then warm-transfers the call to the on-call field technician with a complete digital summary.',
  },
  {
    category: 'dealership',
    question: 'Does the system support multi-lingual telephony for Spanish-speaking farm operators and ranch crews?',
    answer:
      'Yes. The voice agent automatically detects Spanish and switches into natural, conversational Spanish. It records service symptoms, field locations, and parts inquiries, with full English translations logged in your dealership DMS.',
  },
  {
    category: 'telematics',
    question: 'How does the AI agent parse ISOBUS 11783 and SAE J1939 telematics diagnostic fault codes?',
    answer:
      'The agent ingests machine telematics streams and caller-reported fault codes, such as an SPN 651 / FMI 5 injector fault or a DEF pressure sensor error. It cross-references OEM technical service manuals to find the probable root cause. Then it checks parts inventory for the replacement part and estimates the field repair time.',
  },
  {
    category: 'telematics',
    question: 'Can the system connect directly to OEM telematics platforms like John Deere Operations Center and Climate FieldView?',
    answer:
      'Yes. Using certified REST and OAuth2 endpoints, a secure sign-in standard, the agent pulls live machine telematics: fuel consumption, engine load, and field boundary coordinates. It uses that feed to trigger a predictive maintenance alert before a small issue becomes a breakdown.',
  },
  {
    category: 'telematics',
    question: 'How does the agent assist field service technicians with technical troubleshooting?',
    answer:
      'Technicians can query the agent by voice or mobile message while in the field. It has indexed thousands of pages of hydraulic schematics, wiring diagrams, and technical service bulletins (TSBs). It answers back with the step-by-step diagnostic procedure and the correct sensor resistance value instantly.',
  },
  {
    category: 'telematics',
    question: 'Can the AI agent monitor machine hours and schedule automated seasonal PM-A and PM-B services?',
    answer:
      'Yes. The agent tracks cumulative engine hours, separator hours, and calendar intervals across your customer fleet. It sends proactive SMS reminders for scheduled oil changes, hydraulic filter swaps, and seasonal winterization slots.',
  },
  {
    category: 'precision',
    question: 'How does the precision agronomy agent assist with fertilizer and chemical application planning?',
    answer:
      'The agent processes soil grid sample results, yield map shapefiles, and variable-rate prescription files. It checks the chemical label and Safety Data Sheet for EPA restrictions, then calculates the recommended nitrogen and potassium blend rate. It also verifies the tank-mix compatibility table before the rate goes out.',
  },
  {
    category: 'precision',
    question: 'Can the system coordinate mobile service truck routing and parts staging during harvest?',
    answer:
      "Yes. The agent aggregates active mobile service work orders and maps each technician's location. It optimizes the drive route across rural county roads and confirms the required OEM parts are loaded on the truck before it leaves.",
  },
  {
    category: 'precision',
    question: 'How does the agent calculate custom application rates and generate farmer work order summaries?',
    answer:
      'The agent calculates the acreage total, the product rate per acre, and the carrier water volume, then estimates the total batch size needed. It outputs a formatted work order with the EPA chemical registration number for the commercial ag retail applicator.',
  },
  {
    category: 'precision',
    question: 'Can the system handle warranty claim pre-qualification for equipment dealerships?',
    answer:
      'Yes. The agent cross-references the machine delivery date, cumulative engine hours, and extended power-train warranty terms against the service history. It confirms warranty eligibility before the service work order is finalized.',
  },
  {
    category: 'security',
    question: 'Who owns the custom agricultural AI agent code and customer telematics data?',
    answer:
      'Your dealership or enterprise owns 100 percent of the intellectual property, source code, Python backend connectors, and database architectures. FactoryJet charges zero recurring per-user software licensing fees or per-minute call center surcharges.',
  },
  {
    category: 'security',
    question: 'Is farmer customer data and field boundary mapping information kept private?',
    answer:
      'Yes. We deploy single-tenant private cloud instances with strict Zero Data Retention policies. Dealership staff sign in through single sign-on with role-based access control, so a parts clerk and a service manager only see what their role allows. Your customer records, field boundaries, and machine pricing tables are never used to train public commercial AI models.',
  },
  {
    category: 'security',
    question: 'Can the AI voice agent run alongside our existing parts counter and service desk staff?',
    answer:
      'Yes. Dealerships use our voice agent for overflow calls during peak morning rushes, after-hours emergencies, and lunch-hour counter coverage. Every customer call gets answered, without adding payroll overhead.',
  },
  {
    category: 'security',
    question: 'What is the implementation timeline for an agricultural equipment AI voice and scheduling system?',
    answer:
      'A standard parts lookup and service booking voice pipeline connecting to your DMS deploys within 4 to 6 weeks. A comprehensive dealership enterprise rollout covering telematics sync, mobile technician dispatch, and precision ag workflows completes in 8 to 10 weeks.',
  },
  {
    category: 'telematics',
    question: 'Can the agent distinguish between an ISOBUS wiring fault and a genuine sensor failure during diagnosis?',
    answer:
      'Yes. The agent cross-references the reported SPN/FMI fault code against known wiring-harness failure patterns, connector pin resistance ranges, and sensor-specific fault signatures from OEM technical manuals. It tells the technician whether to check the harness and connectors first, or go straight to the sensor. That cuts the diagnostic guesswork that otherwise wastes a service call during a tight planting or harvest window.',
  },
  {
    category: 'precision',
    question: 'How does the agent integrate live data from third-party precision-ag sensors and yield monitors?',
    answer:
      'The agent connects to combine yield monitors, soil moisture probes, and weather station feeds. It pulls this data through ISO 11783 (ISOBUS) task-controller data and manufacturer APIs, including John Deere Operations Center and Climate FieldView. It then normalizes readings from different sensor brands into one dataset. Agronomists see field conditions and yield performance in a single view, instead of switching between separate manufacturer apps.',
  },
  {
    category: 'dealership',
    question: 'How does the system handle seasonal dispatch scheduling during the transition from planting to harvest?',
    answer:
      'The agent tracks technician certifications, mobile truck parts loadouts, and historical call-volume patterns by week. It rebalances on-call rotations and pre-stages common wear parts before each seasonal surge begins. When planting winds down and harvest calls start climbing, the dispatch board updates on its own, instead of a service manager rebuilding the schedule by hand every few weeks.',
  },
  {
    category: 'telematics',
    question: 'Can the AI agent read fault codes from older equipment that predates ISOBUS and full telematics?',
    answer:
      'Yes, within limits. For pre-ISOBUS machines, the agent relies on caller-described symptoms, legacy diagnostic codes where available, and OEM bulletins indexed for that model year. If the dealership has bolted on aftermarket telematics, such as Geotab or Samsara, the agent reads that feed too. Otherwise it still speeds up phone-based troubleshooting using the same manual library technicians already trust.',
  },
  {
    category: 'security',
    question: 'What happens to dispatch and telematics data if we switch Dealer Management Systems later?',
    answer:
      'Your historical work orders, technician logs, and telematics records live in infrastructure your dealership owns, independent of any single DMS vendor. If you migrate to a new system, we rebuild the connector and your data moves with you. A vendor change never means losing years of service history, or starting your AI agent over from zero.',
  },
];

export default function AgricultureEquipmentAiAgentsPage() {
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
    name: 'Agriculture Equipment AI Agent Engineering & Dealership Automation',
    serviceType: 'Agricultural Machinery AI & Telematics Engineering',
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
      name: 'Ag Machinery AI Solutions',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '24/7 Ag Dealership Inbound Parts Lookup & Service BDC Voice AI',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ISOBUS 11783 & J1939 Telematics Diagnostic Fault Triage',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Harvest Emergency Mobile Service Dispatch & Truck Route Optimization',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bi-Directional DMS & OEM Telematics Sync (CDK Global, DIS Corp, John Deere, Case IH)',
          },
        },
      ],
    },
  };

  const schemaHowTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How FactoryJet Builds and Deploys Agricultural Equipment AI Agents',
    description:
      'A 4-step engineering blueprint to automate ag dealership parts lookup, telematics fault triage, and mobile service technician dispatch.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'DMS & OEM Telematics Infrastructure Audit',
        text: 'We map your dealership DMS parts inventory tables, labor op-codes, service technician schedules, and John Deere / Case IH API connections.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Acoustic Voice Pipeline & ISOBUS Fault Parsing Build',
        text: 'We calibrate sub-500ms voice recognition for equipment serial numbers, parts catalogs, and J1939 diagnostic diagnostic fault codes.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'DMS Sync & Mobile Field Technician Console Staging',
        text: 'We wire secure REST connectors to automatically check bin stock balances, create confirmed repair orders, and stage live technician dispatch screens.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Harvest Simulation Testing, Dealership Training & Handover',
        text: 'We simulate high-intensity harvest call volume, train dealership parts and service personnel, and deliver 100 percent source code ownership.',
      },
    ],
  };

  const schemaBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: BREADCRUMB_ITEMS.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
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
                    // AG EQUIPMENT AI AGENTS &amp; DEALERSHIP TELEMATICS.
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14110F] font-heading leading-tight mb-6">
                  Agriculture Equipment AI Agents with{' '}
                  <span>
                    Live DMS &amp; Telematics Sync.
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-[#46403B] mb-8 leading-relaxed">
                  We build custom AI voice and workflow agents for agricultural machinery dealerships, custom harvesters, and commercial ag retailers. The agent answers parts phone calls 24/7, triages ISOBUS J1939 fault codes, and dispatches emergency mobile service trucks during harvest windows. It syncs every work order directly with CDK Global Heavy Equipment, DIS Corp, and John Deere Operations Center.
                </p>

                <div className="mb-8">
                  <HeroInlineForm
                    source="ag-equipment-ai-agents-hero"
                    region="us"
                    submitLabel="Request Ag Dealership AI Architecture Audit"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#E7DED6] text-xs font-mono text-[#6E655F]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>Sub-500ms Voice Telephony</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>CDK Global, DIS Corp &amp; HBS NetView Sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>ISOBUS &amp; J1939 Fault Code Triage</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-3 shadow-xl">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] sm:aspect-[4/3] bg-[#E7DED6]">
                    <Image
                      src="/images/agriculture/ag-equipment-dealership-service-parts-ai.jpg"
                      alt="Agricultural equipment dealership service director and master technician reviewing combine diagnostics"
                      width={1012}
                      height={676}
                      priority
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="mt-3 p-3 bg-white rounded-lg border border-[#E7DED6] text-xs">
                    <div className="flex items-center justify-between text-muted font-mono mb-1">
                      <span>LIVE AG DEALERSHIP TELEPHONY FEED</span>
                      <span className="text-[#F05A28] font-bold">SUB-500MS VOICE</span>
                    </div>
                    <div className="font-bold text-[#14110F]">
                      DIS Corp DMS &bull; John Deere S790 Combine Feeder Chain Located in Bin 14-B (18s)
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
                // EXECUTIVE SUMMARY &amp; SYSTEM DEFINITION.
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#14110F] font-heading mb-4">
                What is an Agriculture Equipment AI Agent?
              </h2>
              <p className="text-base sm:text-lg text-[#46403B] leading-relaxed">
                An agriculture equipment AI agent is an enterprise voice and workflow automation system. It connects directly to Agricultural Dealer Management Systems such as CDK Global Heavy Equipment, DIS Corp, and HBS NetView. It also links to OEM telematics platforms like John Deere Operations Center and Case IH AFS Connect, plus your parts catalog. On a call, it answers farmer and operator phone inquiries on the first ring and checks parts inventory balances. Then it decodes ISOBUS and J1939 diagnostic fault codes and dispatches mobile service technicians to the field breakdown location in real time.
              </p>
            </div>
          </div>
        </section>

        {/* VERIFIED AG INDUSTRY BENCHMARKS SECTION */}
        <section className="py-16 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // VERIFIED AG MACHINERY BENCHMARKS.
              </div>
              <h2 className="text-3xl font-extrabold text-[#14110F] font-heading">
                The Economic Impact of Machine Downtime During Harvest
              </h2>
              <p className="text-base sm:text-lg text-[#46403B] mt-3">
                How delayed parts lookup and service dispatch bottlenecks cost farmers and dealerships thousands during critical weather windows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  $3,348
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Average Per-Season Cost of Equipment Breakdowns to Farmers
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  A 2023 U.S. PIRG Education Fund study found that unplanned equipment breakdowns and repair delays cost the average farmer thousands of dollars each growing season. National losses are estimated above three billion dollars a year.
                </p>
                <a
                  href="https://www.morningagclips.com/the-true-cost-of-downtime-how-farm-equipment-failures-disrupt-the-food-chain/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#6E655F] underline decoration-[#6E655F]/40 underline-offset-2 hover:text-[#B23E13] hover:decoration-[#B23E13] transition-colors"
                >
                  Source: U.S. PIRG Education Fund, &ldquo;Out to Pasture&rdquo; (2023)
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  41%
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Rise in Ag Equipment Parts &amp; Repair Costs Since 2020
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Bureau of Labor Statistics data shows the cost of parts and labor to repair farm machinery has climbed 41 percent since 2020. That makes fast, accurate parts lookup and first-time-fix diagnostics more valuable to dealerships every season.
                </p>
                <a
                  href="https://investigatemidwest.org/2024/02/07/graphic-cost-to-repair-farm-equipment-rose-50-in-the-last-three-years/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#6E655F] underline decoration-[#6E655F]/40 underline-offset-2 hover:text-[#B23E13] hover:decoration-[#B23E13] transition-colors"
                >
                  Source: U.S. Bureau of Labor Statistics, via Investigate Midwest
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  56%
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Farmers Who Cite Cost as the Top Barrier to More Precision Ag Tech
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  CNH&rsquo;s 2026 Farmer Pulse survey of 217 North American farmers found cost is the single biggest barrier to adopting more precision technology. That is the same economics that make owned, zero-license AI infrastructure a better fit than recurring per-seat software fees.
                </p>
                <a
                  href="https://www.stocktitan.net/news/CNH/cnh-farmer-pulse-report-finds-precision-technology-is-becoming-gc2izzr7wzrr.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#6E655F] underline decoration-[#6E655F]/40 underline-offset-2 hover:text-[#B23E13] hover:decoration-[#B23E13] transition-colors"
                >
                  Source: CNH Farmer Pulse: AgTech Adoption Edition (2026)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 6-CARD CAPABILITY BENTO GRID */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // ENTERPRISE AG MACHINERY CAPABILITIES.
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                Engineered for High-Stakes Ag Dealerships and Precision Fleets
              </h2>
              <p className="text-lg text-[#46403B]">
                Everything required to automate parts counter inquiries, field diagnostics, and mobile service technician dispatch without latency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  01
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Sub-500ms Parts Counter Voice AI
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Answers incoming parts department calls on the first ring. It recognizes the equipment model, parses the serial number, and verifies bin stock balances. If a part is on backorder, it reads back the ETA instead of a dead end.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Zero customer hold time.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Real-time bin location lookup.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Multi-store inventory checks.
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  02
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  ISOBUS &amp; J1939 Telematics Diagnostic Triage
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Decodes SPN/FMI fault codes, checks technical service manuals, identifies required replacement parts, and estimates field repair labor hours.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> SPN / FMI fault translation.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> OEM service manual search.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Sensor calibration guidance.
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  03
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Emergency Harvest Mobile Service Dispatch
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Captures field breakdown GPS coordinates, verifies technician availability, optimizes rural driving routes, and alerts on-call service specialists.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> GPS field coordinate pin.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Service truck route optimization.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Warm technician transfer.
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  04
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Bi-Directional Ag DMS Integration
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Synchronizes directly with CDK Global Heavy Equipment, DIS Corp, and HBS NetView. It creates confirmed work orders and stages pick-up tickets on its own.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> REST and webhook-triggered sync.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Real-time labor op-codes.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Automated customer billing sync.
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  05
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Seasonal Preventive Maintenance Scheduling
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Tracks separator and engine hours from telematics feeds like John Deere Operations Center or Case IH AFS Connect. It sends proactive SMS reminders to schedule pre-season combine and planter inspections.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Telematics hour meter sync.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Pre-season inspection campaigns.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Automated winterization reminders.
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  06
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Precision Ag Chemical &amp; Fertilizer Batching
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Calculates custom application rates per acre and checks chemical label compliance tables. It flags the product Safety Data Sheet for handling hazards, then formats a work order for commercial ag retail applicators.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Tank-mix compatibility triage.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> EPA label restriction check.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Variable rate prescription export.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5 SUB-VERTICAL SHOWCASES */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // TAILORED AGRICULTURAL MACHINERY VERTICALS.
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                Engineered for High-Stakes Agricultural Operations
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                Generic voice assistants fail when farmers request specific combine concaves, planter seed meter discs, or report complex hydraulic solenoid error codes. We engineer purpose-built workflows tailored to your machinery dealership or ag retail enterprise.
              </p>
            </div>

            <div className="space-y-16">
              {/* VERTICAL 1: Ag Equipment Dealership Parts & Service BDC */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAF7] p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    01. AG EQUIPMENT DEALERSHIP PARTS &amp; SERVICE BDCS.
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    24/7 Parts Phone Ingestion &amp; Live DMS Inventory Synchronization
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Franchised farm equipment dealerships (John Deere, Case IH, New Holland, Kubota) receive hundreds of parts inquiry calls daily during planting and harvest. When counter staff are occupied, callers hang up and purchase aftermarket parts online.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our ag dealership voice agent answers every call instantly. It decodes the machine model number and serial, then searches bin locations across DIS Corp or CDK Global Heavy Equipment. It quotes retail and farm-account trade pricing and stages a pick-up order for parts personnel.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      DIS Corp &amp; CDK Global Sync
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Bin Stock Location Lookup
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Pick-up Ticket Staging
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/agriculture/ag-equipment-dealership-service-parts-ai.jpg"
                      alt="Agricultural machinery dealership parts specialist fulfilling emergency harvest parts request"
                      width={1012}
                      height={676}
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* VERTICAL 2: Field Diagnostic Telematics & ISOBUS Fault Triage */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAF7] p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/agriculture/field-diagnostic-telematics-isobus-ai.jpg"
                      alt="Farm equipment technician diagnosing tractor telematics error codes with field tablet"
                      width={1376}
                      height={768}
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    02. FIELD DIAGNOSTIC TELEMATICS &amp; ISOBUS FAULT TRIAGE.
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    Automated J1939 SPN/FMI Translation &amp; Field Troubleshooting
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Modern tractors and combines generate complex{' '}
                    <a
                      href="https://www.aef-online.org/about-us/isobus.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                      style={{ color: '#B23E13' }}
                    >
                      ISOBUS (ISO 11783)
                    </a>{' '}
                    error codes when DEF sensors fail, hydraulic proportional valves stick, or CAN-bus modules lose synchronization.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our telematics diagnostic agent parses machine fault codes by voice or mobile text. It retrieves step-by-step OEM troubleshooting procedures and checks replacement sensor availability in stock. Then it walks the operator through clearing a limp-mode override, the safe mode a machine drops into when a fault trips.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      J1939 SPN/FMI Code Triage
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      OEM Service ADVISOR Search
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      CAN-Bus Error Resolution
                    </li>
                  </ul>
                </div>
              </div>

              {/* VERTICAL 3: Precision Ag Sensor & Drone Yield Data Synthesis */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAF7] p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    03. PRECISION AG SENSOR &amp; DRONE YIELD DATA SYNTHESIS.
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    Multispectral Imagery Parsing &amp; Variable-Rate Prescription Triage
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Agronomy consulting firms and precision ag managers analyze gigabytes of drone multispectral{' '}
                    <a
                      href="https://www.usgs.gov/special-topics/remote-sensing-phenology/science/ndvi-foundation-remote-sensing-phenology"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                      style={{ color: '#B23E13' }}
                    >
                      NDVI
                    </a>{' '}
                    imagery, satellite vegetative indices, and soil moisture sensor data across thousands of field acres.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our precision ag agent synthesizes sensor telemetry to find nitrogen deficiency zones and weed outbreaks. It correlates yield variability with soil electrical conductivity, a proxy reading for soil texture and moisture. Then it generates a formatted variable-rate prescription shapefile for the display controller.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      NDVI Imagery Synthesis
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Variable-Rate Prescription Export
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      John Deere Ops Center API
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/agriculture/precision-ag-sensor-drone-yield-ai.jpg"
                      alt="Agronomist reviewing precision multispectral field maps and crop yield data on tablet"
                      width={1376}
                      height={768}
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* VERTICAL 4: Seasonal Harvest Equipment Dispatch & Mobile Field Service */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAF7] p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/agriculture/seasonal-harvest-equipment-dispatch-ai.jpg"
                      alt="Ag dealership mobile service truck technician repairing combine harvester in field"
                      width={1376}
                      height={768}
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    04. SEASONAL HARVEST DISPATCH &amp; MOBILE FIELD SERVICE.
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    Field Coordinate Pinning &amp; Emergency Service Truck Route Optimization
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    When combine harvesters or cotton strippers break down miles from paved roads, dispatch gets hard fast. Dealership dispatchers struggle to get exact field entrance coordinates, confirm technician tool readiness, and route mobile repair units efficiently.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our mobile service dispatch agent pins the field entrance GPS marker by automated SMS. It checks the mobile service truck&rsquo;s inventory for the hydraulic hoses and belts the job needs, and it reads aftermarket telematics feeds like Geotab or Samsara on machines that were retrofitted rather than sold with factory telematics. Then it routes the closest certified technician with turn-by-turn rural navigation.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Rural GPS Coordinate Pinning
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Mobile Truck Inventory Sync
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Emergency Work Order Creation
                    </li>
                  </ul>
                </div>
              </div>

              {/* VERTICAL 5: Commercial Agronomy Chemical & Fertilizer Recommendation Triage */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAF7] p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    05. COMMERCIAL AGRONOMY CHEMICAL &amp; FERTILIZER BATCHING.
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    Tank-Mix Compatibility Screening &amp; EPA Registration Label Compliance
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Commercial ag retailers and custom applicators manage complex herbicide, fungicide, and liquid fertilizer blends. An incorrect mixing order or an incompatible adjuvant can curdle the tank mix, which means sprayer downtime.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our agronomy chemical agent verifies tank-mix compatibility tables and checks the product Safety Data Sheet for handling hazards. It also checks{' '}
                    <a
                      href="https://www.epa.gov/pesticide-labels"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                      style={{ color: '#B23E13' }}
                    >
                      EPA chemical registration labels
                    </a>{' '}
                    for the crop pre-harvest interval, the wait time before harvest is safe, and any rotational restrictions. Then it generates a formatted batch load sheet for the custom applicator operator.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    We reuse the same compliance-checking pattern in our{' '}
                    <Link href="/services/chemical-pharmaceutical-ai-agents" className="underline hover:no-underline" style={{ color: '#B23E13' }}>
                      chemical and pharmaceutical AI agents
                    </Link>{' '}
                    work, built for other regulated-substance handling.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Tank-Mix Order Calculation
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      EPA Pre-Harvest Interval Checks
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Ag Retail Load Sheet Export
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/agriculture/commercial-agronomy-chemical-fertilizer-ai.jpg"
                      alt="Commercial agronomy specialist inspecting crop protection fertilizer blending facility"
                      width={1280}
                      height={800}
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MID-PAGE CTA */}
        <section className="py-16 bg-white border-b border-[#E7DED6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[#F05A28]/30 bg-[#FFF8F5] p-8 sm:p-10 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#F05A28]/30 mb-5">
                <span className="font-mono text-xs text-[#F05A28] font-bold tracking-wide">
                  // HEAR IT HANDLE A REAL PARTS CALL.
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] font-heading mb-4">
                Want to Hear This Answer a Real Parts Call?
              </h2>
              <p className="text-base sm:text-lg text-[#46403B] max-w-2xl mx-auto mb-8 leading-relaxed">
                Bring us a recording of a typical parts or service inquiry to a 30-minute working session. We will show you exactly how the agent handles it, live, before you commit to anything.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-4">
                <a
                  href="https://calendly.com/bhavesh-factoryjet/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#F05A28] text-white font-bold hover:bg-[#D8441A] transition-colors shadow-md text-sm"
                >
                  Book 30-Min Working Session
                </a>
                <ModalCTAButton
                  label="Request Ag Dealership Voice Proposal"
                  region="us"
                  modalVariant="ai"
                  btnVariant="secondary-light"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 10-POINT TECHNICAL ARCHITECTURE BLUEPRINT */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // SYSTEM ARCHITECTURE &amp; INTEGRATION.
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                Enterprise Ag Equipment AI Engineering Blueprint
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                This build extends our core{' '}
                <Link href="/services/ai-agent-development/ai-voice-agent" className="underline hover:no-underline" style={{ color: '#B23E13' }}>
                  AI voice agent engineering
                </Link>{' '}
                practice for agriculture. We architect sub-500ms voice telephony pipelines, telematics fault decoders, and deterministic DMS connectors built for agricultural dealerships.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none">
              {[
                {
                  title: 'Sub-500ms Acoustic Telephony Pipeline',
                  desc: 'Low-latency SIP trunking and streaming neural voice synthesis provide instant acoustic turn-around for parts inquiries and emergency service calls.',
                },
                {
                  title: 'Bi-Directional CDK Global, DIS & HBS Sync',
                  desc: 'Native REST and webhook connectors synchronize live parts bin inventories, labor op-codes, and customer account ledgers. ERP sync pushes the same data to your back-office accounting system, with no manual re-keying.',
                },
                {
                  title: 'ISOBUS 11783 & J1939 Fault Code Decoder',
                  desc: 'Rule-based diagnostic parsers translate complex SPN/FMI error codes into plain-language mechanical root causes and required replacement parts.',
                },
                {
                  title: 'Rural GPS Field Entrance Pinning via SMS',
                  desc: 'Automated digital intake sends interactive mapping links to stranded callers, capturing precise field gate coordinates for service truck dispatch.',
                },
                {
                  title: 'Dynamic Shop Loading & Bay Balancing',
                  desc: 'Scheduling algorithms allocate work orders based on master technician diesel certifications, available overhead hoist capacity, and parts availability.',
                },
                {
                  title: 'OEM Telematics API Ingestion',
                  desc: 'REST connectors stream live machine hours, fuel consumption, and error alerts from John Deere Operations Center and Case IH AFS Connect.',
                },
                {
                  title: 'Acoustic Noise Suppression & Beamforming',
                  desc: 'Neural audio filters eliminate background diesel idle rumble, combine separator whine, and shop air impact tools for crisp voice recognition.',
                },
                {
                  title: 'Multi-Lingual English & Spanish Telephony',
                  desc: 'Dynamic language detection shifts dialogue naturally between English and Spanish, logging translated service records in your dealership DMS.',
                },
                {
                  title: 'Tank-Mix Compatibility & EPA Label Engine',
                  desc: 'Agronomy logic validates chemical tank-mix sequences, adjuvant ratios, and pre-harvest intervals against EPA regulatory registration databases.',
                },
                {
                  title: '100% Client Code & Infrastructure Ownership',
                  desc: 'You receive complete Git repository access, Python backend code, and Docker configurations. Zero recurring per-user software licensing fees.',
                },
              ].map((item, idx) => (
                <li
                  key={item.title}
                  className="p-6 rounded-2xl border border-[#E7DED6] bg-white hover:border-[#F05A28]/50 transition-colors shadow-sm"
                >
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">
                    AG-ARCH-0{idx + 1}
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

        {/* 4-PHASE IMPLEMENTATION LIFECYCLE */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // DEPLOYMENT METHODOLOGY.
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                4-Phase Ag Dealership Implementation Roadmap
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                From DMS schema mapping to live parts counter and service telephony rollout in 4 to 6 weeks.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 list-none">
              <li className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 01 // WEEKS 1-2</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">DMS &amp; Telephony Audit</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We map your DMS parts catalog schemas (DIS Corp, CDK Global Heavy Equipment), customer trade accounts, labor op-codes, and telephony call routing. Then we configure direct SIP trunking gateways.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: DMS connector schema &amp; SIP trunking configuration.
                </div>
              </li>

              <li className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 02 // WEEKS 2-3</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Acoustic Pipeline &amp; Fault Build</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We calibrate sub-500ms voice synthesis for equipment parts descriptions and train ISOBUS J1939 fault code models. We also encode dealership trade pricing rules into deterministic state machines, rule sets that always return the same answer for the same input.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Low-latency voice agent &amp; diagnostic fault parser.
                </div>
              </li>

              <li className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 03 // WEEKS 3-4</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Dispatch Console &amp; Staging</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We deploy parts counter pick-up staging queues and a live dispatch board. Dealership staff test simulated parts lookups, harvest emergency calls, and automated DMS work order creation.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Dispatch console &amp; staging sandbox validation.
                </div>
              </li>

              <li className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 04 // WEEKS 5-6</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Live Telephony Rollout &amp; Handover</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We route live parts department overflow and after-hours emergency calls to the production AI pipeline. We train dealership staff, deliver complete Git repositories, and complete full IP handover.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Full source code, Docker configs &amp; operations manual.
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* COMPARISON MATRIX: CUSTOM AG AI VS OUTSOURCED BDC */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // VENDOR COMPARISON.
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                FactoryJet Custom Ag AI vs. Third-Party Answering Services
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                Why agricultural equipment dealers build owned voice AI infrastructure instead of renting a generic answering service or a rigid IVR menu tree. Run your own numbers first with our{' '}
                <Link href="/tools/ai-agent-roi-calculator" className="underline hover:no-underline" style={{ color: '#B23E13' }}>
                  AI agent ROI calculator
                </Link>
                .
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#E7DED6] bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#E7DED6] bg-[#FFF8F5]">
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">Capability / Feature</th>
                    <th className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      FactoryJet Custom Ag AI
                    </th>
                    <th className="p-4 sm:p-6 font-bold text-[#6E655F]">
                      Generic Answering Service
                    </th>
                    <th className="p-4 sm:p-6 font-bold text-[#6E655F]">
                      Manual Counter Staff
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
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Direct Ag DMS Bin Stock Lookup</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Native DIS Corp, CDK Global Sync
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">None (Message Pad Only)</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Manual Terminal Query</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Simultaneous Call Handling</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Unlimited Concurrent Calls
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Limited by Call Center Seats</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">1 Caller at a Time</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Operating Cost Structure</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      100% Owned, ~$0.05 / min
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">$2.00 - $3.50 / minute</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">$50k - $75k counter salary</td>
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
            <p className="mt-6 text-center text-sm text-[#6E655F]">
              Every row favors infrastructure your dealership owns outright.
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
                  // DIRECT AG MACHINERY ARCHITECTURE LEADERSHIP.
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-6">
                  Direct Engineering Oversight with Founder Bhavesh Barot
                </h2>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-6">
                  Ag equipment fixed operations need instant parts lookups, rock-solid DMS inventory sync, and zero tolerance for dropped calls during planting and harvest. At FactoryJet, founder Bhavesh Barot leads every agricultural AI architecture and DMS integration scoping session personally. We evaluate your current DIS Corp, CDK Global Heavy Equipment, or John Deere Operations Center setup in that first session.
                </p>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-8">
                  You work directly with senior systems architects. They have engineered enterprise telephony infrastructure and high-volume data integrations for over a decade. We build dependable, production-grade software that your equipment dealership owns and controls permanently.
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
                    label="Request Ag Dealership Voice Proposal"
                    region="us"
                    modalVariant="ai"
                    btnVariant="secondary-light"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED AG & MACHINERY SPOKES */}
        <section className="py-16 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-4">
              // DEEP DIVE MACHINERY CAPABILITY SPOKES
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#14110F] font-heading mb-8">
              Explore Our Granular Voice &amp; Scheduling Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/services/automotive-ai-voice-agents"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 01</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">
                  Automotive AI Voice Agents &rarr;
                </h3>
                <p className="text-sm text-[#46403B]">
                  Sub-500ms voice receptionists and service BDC automation for car dealerships and collision centers.
                </p>
              </Link>

              <Link
                href="/services/manufacturing-ai-agents"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 02</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">
                  Manufacturing AI Agents &rarr;
                </h3>
                <p className="text-sm text-[#46403B]">
                  Shop floor scheduling, machine telemetry, and predictive maintenance for industrial plants.
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
                  24/7 emergency dispatch and calendar booking for commercial field technicians and contractors.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* STRUCTURED FAQ SECTION */}
        <FAQ
          eyebrow="// AG EQUIPMENT AI QUESTIONS &amp; ANSWERS"
          headline="Frequently Asked Questions on Agriculture Equipment AI Agents"
          lead="Everything dealer principals, parts managers, and service directors need to know about DMS sync, telematics integration, and code ownership."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* FINAL CTA SECTION */}
        <section className="py-20 bg-[#FFF8F5] border-t border-[#E7DED6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#F05A28]/30 mb-6">
              <span className="font-mono text-xs text-[#F05A28] font-bold tracking-wide">
                // ZERO MISSED PARTS CALLS &bull; LIVE DMS SYNC &bull; 100% OWNED.
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14110F] font-heading mb-6">
              Ready to Eliminate Missed Harvest Calls with Custom Ag AI?
            </h2>

            <p className="text-lg text-[#46403B] max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a 30-minute architecture consultation with our founder. We will review your DMS setup and analyze your parts counter phone volume. Then we will deliver a fixed-scope AI voice proposal within 24 hours.
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
                label="Request Ag Dealership Voice Audit"
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
