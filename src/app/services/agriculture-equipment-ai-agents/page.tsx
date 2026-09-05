import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
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
      "Our voice agents answer calls on the first ring. Response times remain under 500 milliseconds. The agent captures the equipment serial number. It notes the part description clearly. It handles combine feeder house chains. It handles hydraulic couplers and disc blades. It queries live bin stock in your DMS. It quotes accurate trade pricing. For in-stock items, it stages a pick-up ticket. For backordered parts, it provides an exact arrival date.",
  },
  {
    category: 'dealership',
    question: 'Which Agricultural Dealer Management Systems (DMS) and OEM portals do you integrate with?',
    answer:
      'We build bi-directional API connectors. We connect CDK Global Heavy Equipment. We sync DIS Corp and HBS NetView. We support Basic Software Inc systems. On OEM portals, we connect John Deere Service ADVISOR. We link John Deere Operations Center. We integrate Case IH AFS Connect. We sync New Holland AFS Connect and AGCO Fuse.',
  },
  {
    category: 'dealership',
    question: 'Can the voice agent triage emergency service calls during high-intensity planting and harvest windows?',
    answer:
      'Yes. Farmers call with stranded combines or sprayers. The agent senses urgency immediately. It gathers the fault code and GPS coordinates. It verifies field technician availability. Then it warm-transfers the call to on-call technicians. Technicians receive a full digital symptom summary before connecting.',
  },
  {
    category: 'dealership',
    question: 'Does the system support multi-lingual telephony for Spanish-speaking farm operators and ranch crews?',
    answer:
      'Yes. The voice agent detects Spanish speech automatically. It switches into fluent conversational Spanish. It records field symptoms and breakdown locations. It captures parts inquiries accurately. English translations log directly into your dealership DMS.',
  },
  {
    category: 'telematics',
    question: 'How does the AI agent parse ISOBUS 11783 and SAE J1939 telematics diagnostic fault codes?',
    answer:
      'The agent ingests telematics streams and caller codes. It handles SPN 651 and FMI 5 injector faults. It processes DEF pressure sensor errors. It searches OEM technical manuals for root causes. Then it verifies replacement part stock levels. Finally, it estimates field labor hours.',
  },
  {
    category: 'telematics',
    question: 'Can the system connect directly to OEM telematics platforms like John Deere Operations Center and Climate FieldView?',
    answer:
      'Yes. It uses certified REST and OAuth2 endpoints. The agent pulls live telemetry data. It reads fuel consumption and engine loads. It tracks field boundary coordinates. Feeds trigger proactive maintenance alerts before breakdowns occur.',
  },
  {
    category: 'telematics',
    question: 'How does the agent assist field service technicians with technical troubleshooting?',
    answer:
      'Technicians query the agent via voice or text. The system indexes thousands of hydraulic schematics. It stores wiring diagrams and technical bulletins. It provides step-by-step diagnostic procedures. It returns sensor resistance values in seconds.',
  },
  {
    category: 'telematics',
    question: 'Can the AI agent monitor machine hours and schedule automated seasonal PM-A and PM-B services?',
    answer:
      'Yes. The agent monitors engine hours and separator hours. It tracks calendar intervals across your fleet. It sends automated SMS service reminders. Alerts prompt customers for oil changes. They schedule filter replacements and winterization slots.',
  },
  {
    category: 'precision',
    question: 'How does the precision agronomy agent assist with fertilizer and chemical application planning?',
    answer:
      'The agent evaluates soil grid samples. It reviews yield map shapefiles. It processes variable-rate prescription files. It verifies chemical labels for EPA rules. It calculates nitrogen and potassium blend rates. It checks tank-mix compatibility tables before application.',
  },
  {
    category: 'precision',
    question: 'Can the system coordinate mobile service truck routing and parts staging during harvest?',
    answer:
      "Yes. The agent tracks active mobile work orders. It maps service technician locations. It optimizes routes across rural county roads. It verifies required OEM parts are on trucks before departure.",
  },
  {
    category: 'precision',
    question: 'How does the agent calculate custom application rates and generate farmer work order summaries?',
    answer:
      'The agent calculates total field acreage. It determines product rates per acre. It calculates carrier water volumes. It estimates batch mixing sizes. It outputs formatted work orders with EPA chemical registration numbers.',
  },
  {
    category: 'precision',
    question: 'Can the system handle warranty claim pre-qualification for equipment dealerships?',
    answer:
      'Yes. The agent verifies machine delivery dates. It reviews cumulative engine hours. It checks extended powertrain warranty terms. It compares claims against service histories. Eligibility confirms before work orders finalize.',
  },
  {
    category: 'security',
    question: 'Who owns the custom agricultural AI agent code and customer telematics data?',
    answer:
      'Your dealership owns 100 percent of source code. You own Python backend connectors. You own database architectures. We charge zero per-user software licensing fees. We charge zero per-minute call surcharges.',
  },
  {
    category: 'security',
    question: 'Is farmer customer data and field boundary mapping information kept private?',
    answer:
      'Yes. We deploy single-tenant private cloud instances. All environments enforce zero data retention. Staff use single sign-on with role permissions. Farm records and field boundaries remain confidential. Data never trains public commercial AI models.',
  },
  {
    category: 'security',
    question: 'Can the AI voice agent run alongside our existing parts counter and service desk staff?',
    answer:
      'Yes. Dealerships deploy our agent for call overflow. It manages peak morning rushes. It handles after-hours emergency calls. It covers lunch counter gaps. Every call gets answered without added payroll overhead.',
  },
  {
    category: 'security',
    question: 'What is the implementation timeline for an agricultural equipment AI voice and scheduling system?',
    answer:
      'Standard parts lookup pipelines deploy in 4 to 6 weeks. Systems connect directly to your DMS. Full enterprise rollouts take 8 to 10 weeks. That covers telematics sync and mobile technician dispatch.',
  },
  {
    category: 'telematics',
    question: 'Can the agent distinguish between an ISOBUS wiring fault and a genuine sensor failure during diagnosis?',
    answer:
      'Yes. The agent matches SPN and FMI codes against harness patterns. It checks pin resistance ranges. It evaluates sensor fault signatures from OEM manuals. It directs technicians to check wiring or replace sensors. This cuts diagnostic guesswork during harvest.',
  },
  {
    category: 'precision',
    question: 'How does the agent integrate live data from third-party precision-ag sensors and yield monitors?',
    answer:
      'The agent links to combine yield monitors. It connects soil moisture probes and weather stations. Data streams via ISOBUS task controllers. It connects John Deere Operations Center and Climate FieldView. It unifies readings into a single dashboard.',
  },
  {
    category: 'dealership',
    question: 'How does the system handle seasonal dispatch scheduling during the transition from planting to harvest?',
    answer:
      'The agent tracks technician certifications. It tracks truck parts loadouts. It analyzes historical call patterns by week. It rebalances on-call rotations ahead of harvest rushes. The dispatch board updates automatically as call volumes rise.',
  },
  {
    category: 'telematics',
    question: 'Can the AI agent read fault codes from older equipment that predates ISOBUS and full telematics?',
    answer:
      'Yes. The agent uses caller-described symptoms. It checks legacy diagnostic codes. It searches indexed OEM service bulletins. For retrofitted units, it ingests Geotab or Samsara feeds. Phone troubleshooting speeds up using trusted manual libraries.',
  },
  {
    category: 'security',
    question: 'What happens to dispatch and telematics data if we switch Dealer Management Systems later?',
    answer:
      'Work orders and technician logs live in your owned database. Telematics records remain independent of DMS vendors. If you switch systems, we update API connectors. Your historical service data moves with you safely.',
  },
];

const webPageSchema = {
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

const serviceSchema = {
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

const howToSchema = {
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

export default function AgricultureEquipmentAiAgentsPage() {
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
                  We build AI voice agents for ag dealerships. We serve custom harvesters and ag retailers. Our agents answer parts phone calls 24/7. They triage ISOBUS J1939 fault codes. They dispatch emergency mobile service trucks during harvest. They sync work orders with CDK Global Heavy Equipment, DIS Corp, and John Deere Operations Center.
                </p>

                <div className="mb-8">
                  <HeroInlineForm
                    source="ag-equipment-ai-agents-hero"
                    region="us"
                    submitLabel="Request Ag Dealership AI Architecture Audit."
                  />
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#E7DED6] text-xs font-mono text-[#6E655F]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>Sub-500ms Voice Telephony.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>CDK Global, DIS Corp &amp; HBS NetView Sync.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>ISOBUS &amp; J1939 Fault Code Triage.</span>
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
                      <span>LIVE AG DEALERSHIP TELEPHONY FEED.</span>
                      <span className="text-[#F05A28] font-bold">SUB-500MS VOICE</span>
                    </div>
                    <div className="font-bold text-[#14110F]">
                      DIS Corp DMS &bull; John Deere S790 Combine Feeder Chain Located in Bin 14-B (18s).
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
                An ag equipment AI agent is enterprise voice software. It connects directly to dealership management systems. It integrates CDK Global, DIS Corp, and HBS NetView. It links to John Deere Operations Center and Case IH AFS Connect. It answers farmer inquiries on the first ring. It checks live bin stock balances. It decodes ISOBUS and J1939 fault codes. It dispatches mobile service technicians to field locations in real time.
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
                The Economic Impact of Machine Downtime During Harvest.
              </h2>
              <p className="text-base sm:text-lg text-[#46403B] mt-3">
                Delayed parts lookup costs dealerships thousands. Dispatch bottlenecks hurt harvest throughput. Farm machinery downtime harms customer retention.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  $3,348
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Average Per-Season Cost of Equipment Breakdowns to Farmers.
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Unplanned breakdowns cost farmers thousands each season. U.S. PIRG Education Fund studied equipment repair delays. National downtime losses exceed three billion dollars yearly. Rapid parts lookup prevents expensive field stalls.
                </p>
                <a
                  href="https://www.morningagclips.com/the-true-cost-of-downtime-how-farm-equipment-failures-disrupt-the-food-chain/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#6E655F] underline decoration-[#6E655F]/40 underline-offset-2 hover:text-[#B23E13] hover:decoration-[#B23E13] transition-colors"
                >
                  Source: U.S. PIRG Education Fund, &ldquo;Out to Pasture&rdquo; (2023).
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  41%
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Rise in Ag Equipment Parts &amp; Repair Costs Since 2020.
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Equipment repair costs climbed 41 percent since 2020. Bureau of Labor Statistics documented rising parts expenses. Accurate parts lookup speeds up repairs. First-time fixes protect dealer service margins.
                </p>
                <a
                  href="https://investigatemidwest.org/2024/02/07/graphic-cost-to-repair-farm-equipment-rose-50-in-the-last-three-years/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#6E655F] underline decoration-[#6E655F]/40 underline-offset-2 hover:text-[#B23E13] hover:decoration-[#B23E13] transition-colors"
                >
                  Source: U.S. Bureau of Labor Statistics, via Investigate Midwest.
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  56%
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Farmers Who Cite Cost as the Top Barrier to More Precision Ag Tech.
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  CNH surveyed 217 North American farmers in 2026. High software cost is the top adoption barrier. Owned AI infrastructure eliminates recurring per-seat licensing fees. Dealerships save money with permanent platform ownership.
                </p>
                <a
                  href="https://www.stocktitan.net/news/CNH/cnh-farmer-pulse-report-finds-precision-technology-is-becoming-gc2izzr7wzrr.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#6E655F] underline decoration-[#6E655F]/40 underline-offset-2 hover:text-[#B23E13] hover:decoration-[#B23E13] transition-colors"
                >
                  Source: CNH Farmer Pulse: AgTech Adoption Edition (2026).
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
                Engineered for High-Stakes Ag Dealerships and Precision Fleets.
              </h2>
              <p className="text-lg text-[#46403B]">
                Automate parts counter inquiries with sub-second voice. Triage field diagnostics rapidly. Dispatch mobile service technicians without delays.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  01
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Sub-500ms Parts Counter Voice AI.
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The agent answers parts calls on the first ring. It recognizes the machine model. It parses the serial number accurately. It verifies live bin stock balances. If parts are backordered, it quotes arrival dates.
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
                  ISOBUS &amp; J1939 Telematics Diagnostic Triage.
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The engine decodes SPN and FMI fault codes. It searches technical service manuals. It identifies required replacement parts. It estimates field repair labor hours.
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
                  Emergency Harvest Mobile Service Dispatch.
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The system captures field breakdown GPS coordinates. It verifies technician availability. It optimizes rural driving routes. It alerts on-call service specialists.
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
                  Bi-Directional Ag DMS Integration.
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The agent syncs with CDK Global Heavy Equipment. It integrates DIS Corp and HBS NetView. It creates confirmed work orders. It stages pick-up tickets automatically.
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
                  Seasonal Preventive Maintenance Scheduling.
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The system tracks engine hours from telematics feeds. It monitors John Deere Operations Center and Case IH AFS Connect. It sends proactive SMS reminders. It schedules pre-season combine inspections.
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
                  Precision Ag Chemical &amp; Fertilizer Batching.
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The engine calculates application rates per acre. It checks chemical label compliance tables. It reviews Safety Data Sheets for handling hazards. It formats work orders for ag retail applicators.
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
                Engineered for High-Stakes Agricultural Operations.
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                Generic voice bots fail on combine parts. They struggle with planter seed meter discs. They miss hydraulic error codes. We build purpose-engineered AI agents for farm machinery dealers.
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
                    24/7 Parts Phone Ingestion &amp; Live DMS Inventory Synchronization.
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Farm equipment dealerships receive hundreds of calls daily. Planting and harvest bring heavy call spikes. When counter staff are busy, callers hang up. Farmers then purchase aftermarket parts online.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our voice agent answers every call on the first ring. It captures machine models and serial numbers. It searches bin locations in DIS Corp or CDK Global. It quotes farm-account trade pricing. It stages pick-up tickets for parts clerks.
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
                    Automated J1939 SPN/FMI Translation &amp; Field Troubleshooting.
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Modern tractors generate complex{' '}
                    <a
                      href="https://www.aef-online.org/about-us/isobus.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                      style={{ color: '#B23E13' }}
                    >
                      ISOBUS (ISO 11783)
                    </a>{' '}
                    error codes. Faults occur when DEF sensors fail. Proportional valves stick in dust. CAN-bus modules drop connection.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our diagnostic agent parses machine fault codes by voice. It pulls step-by-step OEM troubleshooting procedures. It checks replacement sensor stock in your DMS. It guides operators through limp-mode overrides safely.
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
                    Multispectral Imagery Parsing &amp; Variable-Rate Prescription Triage.
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Agronomy teams analyze drone multispectral{' '}
                    <a
                      href="https://www.usgs.gov/special-topics/remote-sensing-phenology/science/ndvi-foundation-remote-sensing-phenology"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                      style={{ color: '#B23E13' }}
                    >
                      NDVI
                    </a>{' '}
                    imagery. They review satellite vegetative indices across thousands of acres. They track soil moisture telemetry.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our precision ag agent locates nitrogen deficiency zones. It spots weed outbreaks early. It links yield variability with soil conductivity data. It outputs formatted variable-rate prescription shapefiles for cab monitors.
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
                    Field Coordinate Pinning &amp; Emergency Service Truck Route Optimization.
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Harvester breakdowns happen miles from paved roads. Dispatch gets difficult fast. Dispatchers struggle to get field entrance coordinates. They must verify technician tools and route repair trucks quickly.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our dispatch agent pins field entrance GPS markers by SMS. It verifies truck inventory for needed hydraulic hoses and belts. It reads Geotab or Samsara feeds on retrofitted tractors. It routes the closest certified technician with rural navigation.
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
                    Tank-Mix Compatibility Screening &amp; EPA Registration Label Compliance.
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Commercial ag retailers manage complex chemical blends. They mix herbicides, fungicides, and liquid fertilizers. Incorrect mixing orders can curdle tank mixtures. Curdled tanks cause expensive sprayer downtime.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our agronomy agent checks tank-mix compatibility tables. It verifies Safety Data Sheets for handling hazards. It reviews{' '}
                    <a
                      href="https://www.epa.gov/pesticide-labels"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                      style={{ color: '#B23E13' }}
                    >
                      EPA chemical registration labels
                    </a>{' '}
                    for pre-harvest intervals and rotational limits. Then it generates formatted batch load sheets for spray operators.
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
                Want to Hear This Answer a Real Parts Call?.
              </h2>
              <p className="text-base sm:text-lg text-[#46403B] max-w-2xl mx-auto mb-8 leading-relaxed">
                Bring a recording of a typical parts call to a working session. We show how the voice agent handles it live. Test performance before making any commitment.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-4">
                <a
                  href="https://calendly.com/bhavesh-factoryjet/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#F05A28] text-white font-bold hover:bg-[#D8441A] transition-colors shadow-md text-sm"
                >
                  Book 30-Min Working Session.
                </a>
                <ModalCTAButton
                  label="Request Ag Dealership Voice Proposal."
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
                Enterprise Ag Equipment AI Engineering Blueprint.
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                This build extends our{' '}
                <Link href="/services/ai-agent-development/ai-voice-agent" className="underline hover:no-underline" style={{ color: '#B23E13' }}>
                  AI voice agent engineering
                </Link>{' '}
                practice for agriculture. We build sub-500ms voice pipelines. We build telematics fault decoders. We build deterministic DMS connectors for farm dealerships.
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
                4-Phase Ag Dealership Implementation Roadmap.
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                Go from DMS schema mapping to live telephony rollout in 4 to 6 weeks.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 list-none">
              <li className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 01 // WEEKS 1-2.</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">DMS &amp; Telephony Audit.</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We map your DMS parts catalog schemas. We configure customer trade accounts and labor op-codes. We establish call routing and SIP trunking gateways.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: DMS connector schema &amp; SIP trunking configuration.
                </div>
              </li>

              <li className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 02 // WEEKS 2-3.</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Acoustic Pipeline &amp; Fault Build.</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We calibrate sub-500ms voice synthesis for equipment parts. We train ISOBUS J1939 fault models. We encode dealership trade pricing rules into state machines.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Low-latency voice agent &amp; diagnostic fault parser.
                </div>
              </li>

              <li className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 03 // WEEKS 3-4.</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Dispatch Console &amp; Staging.</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We deploy parts counter pick-up staging queues. We launch a live dispatch board. Dealership staff test simulated lookups and emergency call handling.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Dispatch console &amp; staging sandbox validation.
                </div>
              </li>

              <li className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 04 // WEEKS 5-6.</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Live Telephony Rollout &amp; Handover.</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We route parts department overflow calls to production AI. We route after-hours emergency calls. We train staff, deliver Git repositories, and complete IP handover.
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
                FactoryJet Custom Ag AI vs. Third-Party Answering Services.
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                Dealerships build owned voice AI infrastructure. They avoid renting generic answering services or rigid IVR menus. Calculate savings with our{' '}
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
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">Capability / Feature.</th>
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
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Call Answer Speed.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      1st Ring (0 Seconds).
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">45 to 90 Seconds Wait.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Rings Out / Voicemail.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Direct Ag DMS Bin Stock Lookup.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Native DIS Corp &amp; CDK Global Sync.
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">None (Message Pad Only).</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Manual Terminal Query.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Simultaneous Call Handling.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Unlimited Concurrent Calls.
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Limited by Call Center Seats.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">1 Caller at a Time.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Operating Cost Structure.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      100% Owned, ~$0.05 / min.
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">$2.00 to $3.50 / minute.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">$50k to $75k counter salary.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Software &amp; IP Ownership.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      100% Owned, $0 Per-Seat Fee.
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Closed Proprietary Vendor.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">N/A (Labor Expense).</td>
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
                      Founder &amp; CEO, FactoryJet.
                    </div>
                    <div className="mt-3">
                      <a
                        href="https://www.linkedin.com/in/bhavesh-ai-gtm-expert/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono text-[#F05A28] hover:underline"
                      >
                        Connect on LinkedIn &rarr;.
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
                  Direct Engineering Oversight with Founder Bhavesh Barot.
                </h2>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-6">
                  Ag equipment dealerships need instant parts lookups. They need reliable DMS inventory sync. They have zero tolerance for dropped calls during harvest. Founder Bhavesh Barot leads every agricultural AI architecture session. We evaluate your DIS Corp, CDK Global, or John Deere setup together.
                </p>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-8">
                  You work directly with senior systems architects. Our team has engineered enterprise telephony for over a decade. We build dependable, production-grade software. Your equipment dealership owns and controls the platform permanently.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://calendly.com/bhavesh-factoryjet/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#F05A28] text-white font-bold hover:bg-[#D8441A] transition-colors shadow-md text-sm"
                  >
                    Schedule Direct Strategy Call with Bhavesh.
                  </a>
                  <ModalCTAButton
                    label="Request Ag Dealership Voice Proposal."
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
              Explore Our Granular Voice &amp; Scheduling Capabilities.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/services/automotive-ai-voice-agents"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 01.</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">
                  Automotive AI Voice Agents &rarr;.
                </h3>
                <p className="text-sm text-[#46403B]">
                  Sub-500ms voice receptionists. Live DMS scheduling. Service BDC automation for car dealerships.
                </p>
              </Link>

              <Link
                href="/services/manufacturing-ai-agents"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 02.</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">
                  Manufacturing AI Agents &rarr;.
                </h3>
                <p className="text-sm text-[#46403B]">
                  Shop floor scheduling. Live machine telemetry. Predictive maintenance for industrial plants.
                </p>
              </Link>

              <Link
                href="/services/contractor-ai-receptionist"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 03.</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">
                  Contractor &amp; Field Dispatch Voice AI &rarr;.
                </h3>
                <p className="text-sm text-[#46403B]">
                  24/7 emergency dispatch. Live calendar booking for commercial field technicians and contractors.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* STRUCTURED FAQ SECTION */}
        <FAQ
          eyebrow="// AG EQUIPMENT AI QUESTIONS &amp; ANSWERS"
          headline="Frequently Asked Questions on Agriculture Equipment AI Agents."
          lead="Everything dealer principals and parts managers need to know. Learn about DMS sync and telematics triage. Understand full code ownership."
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
              Ready to Eliminate Missed Harvest Calls with Custom Ag AI?.
            </h2>

            <p className="text-lg text-[#46403B] max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a 30-minute architecture session with our founder. We review your DMS setup. We analyze your parts phone volume. You receive a fixed-scope proposal in 24 hours.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <a
                href="https://calendly.com/bhavesh-factoryjet/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#F05A28] text-white font-bold hover:bg-[#D8441A] transition-colors shadow-lg text-base"
              >
                Book 30-Min Discovery Call.
              </a>
              <ModalCTAButton
                label="Request Ag Dealership Voice Audit."
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
