import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

const CANONICAL_URL = 'https://factoryjet.com/services/chemical-pharmaceutical-ai-agents';
const PAGE_TITLE = 'Chemical & Pharmaceutical AI Agents | GxP & SDS Automation | FactoryJet';
const PAGE_DESC =
  'Custom AI agents for chemical manufacturers and pharmaceutical labs. Automate batch record review, GHS SDS authoring, FDA 21 CFR Part 11 audit trails & LIMS sync.';
const PAGE_MODIFIED = '2026-09-01';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'chemical manufacturing ai agents',
    'pharmaceutical batch record review ai',
    'ghs sds authoring automation',
    'fda 21 cfr part 11 ai compliance',
    'lims ai integration',
    'gxp quality assurance ai',
    'chemical formulation optimization ai',
    'tsca reach compliance ai',
    'electronic batch record ebr automation',
    'pharma supply chain raw material ai',
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
        url: 'https://factoryjet.com/images/chemical/specialty-chemical-formulations-ai.jpg',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Chemical and Pharmaceutical AI Agents',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ['https://factoryjet.com/images/chemical/specialty-chemical-formulations-ai.jpg'],
  },
};

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'gmp', label: 'Batch Records & GMP Compliance' },
  { key: 'sds', label: 'SDS Authoring & Formulation' },
  { key: 'regulatory', label: 'FDA 21 CFR Part 11 & Audits' },
  { key: 'security', label: 'LIMS Sync & IP Ownership' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'gmp',
    question: 'How do AI agents automate pharmaceutical Electronic Batch Record (EBR) review?',
    answer:
      'Our pharmaceutical AI agents parse hundreds of pages of executed batch records, equipment logbooks, and analytical release testing certificates. The agent cross-checks temperature logs, mixing durations, raw material lot numbers, and yield tolerances against validated Master Batch Records (MBR), flagging deviations and out-of-specification (OOS) events with exact timestamp and page citations for Quality Assurance review.',
  },
  {
    category: 'gmp',
    question: 'Can the AI agent identify root causes for out-of-trend (OOT) manufacturing deviations?',
    answer:
      'Yes. By correlating historical batch release data, environmental monitoring telemetry, raw material Certificates of Analysis (CoA), and calibration records, the agent drafts structured Corrective and Preventive Action (CAPA) investigation outlines with verifiable source citations.',
  },
  {
    category: 'gmp',
    question: 'How does the system ensure GxP data integrity during automated QA checks?',
    answer:
      'Every ingestion step, calculation, and document comparison is recorded in an immutable, cryptographically signed audit log. The pipeline adheres strictly to ALCOA+ principles (Attributable, Legible, Contemporaneous, Original, Accurate), ensuring complete inspection readiness for FDA and EMA audits.',
  },
  {
    category: 'gmp',
    question: 'Can the agent review raw material Certificates of Analysis (CoA) against procurement specs?',
    answer:
      'Yes. The agent extracts chemical assay percentages, moisture content, impurity thresholds, and microbial limits from supplier PDF CoAs, comparing values against your internal acceptance criteria before raw materials are released from quarantine.',
  },
  {
    category: 'sds',
    question: 'How does the chemical AI agent author GHS-compliant Safety Data Sheets (SDS)?',
    answer:
      'The agent evaluates product formulations, CAS registry numbers, concentration percentages, and raw material hazard classifications. It calculates aquatic toxicity, flammability points, and acute oral/dermal toxicity thresholds, automatically populating all 16 standardized OSHA HCS / GHS SDS sections including pictograms, hazard statements, and personal protective equipment recommendations.',
  },
  {
    category: 'sds',
    question: 'Can the agent update global SDS libraries when chemical regulations change?',
    answer:
      'Yes. When EPA TSCA rules, California Proposition 65 lists, or EU REACH Annex XVII restriction lists are updated, the agent scans your enterprise chemical inventory, identifies affected product SKUs, recalculates hazard classifications, and generates updated revision drafts with change-summary notes.',
  },
  {
    category: 'sds',
    question: 'How does the formulation optimization agent recommend raw material substitutions?',
    answer:
      'The agent queries your chemical property databases, solubility parameters, Hansen solubility coordinates, viscosity profiles, and cost matrices. When supply chain shortages occur, it proposes bio-based or alternative surfactant/polymer replacements that match performance specifications while preserving margin.',
  },
  {
    category: 'sds',
    question: 'Does the system support multi-lingual GHS SDS authoring for international exports?',
    answer:
      'Yes. The agent generates compliant 16-section SDS documents in English, Spanish, French, German, Japanese, and Mandarin, incorporating regional exposure limits (OSHA PEL, ACGIH TLV, REACH DNEL) and mandatory country-specific emergency response hotlines.',
  },
  {
    category: 'regulatory',
    question: 'Is the AI architecture compliant with FDA 21 CFR Part 11 and EU Annex 11 electronic signature rules?',
    answer:
      'Yes. Our platforms enforce dual-factor electronic signature validation, session timeout rules, role-based access control (RBAC), and append-only cryptographic audit trails. All human approvals and electronic signatures conform to 21 CFR Part 11 requirements.',
  },
  {
    category: 'regulatory',
    question: 'Can the agent prepare Chemistry, Manufacturing, and Controls (CMC) regulatory dossiers?',
    answer:
      'Yes. The agent aggregates analytical method validation summaries, stability testing time-points, container closure integrity data, and manufacturing process flowcharts into structured eCTD Module 3 dossier outlines for IND and NDA submissions.',
  },
  {
    category: 'regulatory',
    question: 'How does the agent assist with annual product quality reviews (APQR / PQR)?',
    answer:
      'The agent aggregates 12 months of manufacturing data across all commercial batches, tabulates statistical process capability metrics (Cpk, Ppk), charts yield variability, and synthesizes customer complaint trends into formatted APQR reports for regulatory filing.',
  },
  {
    category: 'regulatory',
    question: 'Can the system detect potential cross-contamination risks in multi-product manufacturing facilities?',
    answer:
      'Yes. The agent reviews facility clean-in-place (CIP) turnaround records, toxicological health-based exposure limits (HBEL / PDE calculations), and swab testing swab assay results, flagging shared equipment runs that exceed permitted daily exposure thresholds.',
  },
  {
    category: 'security',
    question: 'Which Laboratory Information Management Systems (LIMS) and ERPs do you integrate with?',
    answer:
      'We build bi-directional connectors for LabWare LIMS, Thermo Fisher SampleManager, Waters CDS Chromatography Systems, SAP S/4HANA (QM and PP modules), Oracle NetSuite, and Veeva Vault QualityDocs.',
  },
  {
    category: 'security',
    question: 'How do you safeguard proprietary chemical synthesis routes and drug formulations?',
    answer:
      'We deploy isolated, single-tenant private VPC or on-premise air-gapped GPU architectures with strict Zero Data Retention (ZDR) agreements. Your chemical formulas, synthesis pathways, and clinical trial results are never exposed to public foundation model providers.',
  },
  {
    category: 'security',
    question: 'Who owns the custom chemical and pharmaceutical AI agent code and models?',
    answer:
      'Your organization owns 100 percent of the Git repositories, Python backend code, proprietary prompt state machines, and Docker container architectures. FactoryJet charges zero recurring per-user software licensing fees.',
  },
  {
    category: 'security',
    question: 'What is the implementation timeline for a chemical or pharmaceutical AI agent?',
    answer:
      'A focused SDS authoring automation engine or CoA extraction pipeline deploys within 4 to 6 weeks. An enterprise-grade GxP batch record review and LIMS integration system with full validation documentation (IQ/OQ/PQ) completes in 8 to 12 weeks.',
  },
];

export default function ChemicalPharmaceuticalAiAgentsPage() {
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
    name: 'Chemical & Pharmaceutical AI Agent Engineering & GxP Automation',
    serviceType: 'Chemical & Life Sciences AI Engineering',
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
      name: 'Life Sciences & Chemical AI Solutions',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Automated Electronic Batch Record (EBR) Review & OOS Triage',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'GHS 16-Section Safety Data Sheet (SDS) Authoring & Multi-Lingual Sync',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'FDA 21 CFR Part 11 Compliant Audit Logging & eCTD Module 3 Synthesis',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bi-Directional LIMS & ERP Synchronization (LabWare, SampleManager, SAP QM)',
          },
        },
      ],
    },
  };

  const schemaHowTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How FactoryJet Deploys Validated AI Agents for Chemical & Pharmaceutical Plants',
    description:
      'A 4-step GxP-compliant engineering methodology to automate batch record review, SDS generation, and LIMS synchronization under FDA 21 CFR Part 11 guidelines.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'GxP Regulatory & LIMS Architecture Audit',
        text: 'We analyze your quality management systems (LIMS, SAP QM, Veeva), review master batch records, and establish air-gapped zero-data-retention validation protocols.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Deterministic Formulation & Batch Extraction Pipeline Construction',
        text: 'We construct multi-modal parsing pipelines to extract chemical structures, CoA specifications, and batch log entries with exact document coordinate citations.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'LIMS & ERP Bi-Directional Synchronization & QA Approval Staging',
        text: 'We wire secure REST and SOAP connectors to automatically synchronize release testing results and stage deviation flags inside an intuitive QA review dashboard.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Computer System Validation (CSV / CSA), Staff Training & Handover',
        text: 'We execute comprehensive IQ/OQ/PQ validation protocols, train quality assurance personnel, and deliver 100 percent source code and deployment infrastructure.',
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
        name: 'Chemical & Pharmaceutical AI Agents',
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
                    // GXP COMPLIANT CHEMICAL &amp; PHARMA AI AGENTS
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14110F] font-heading leading-tight mb-6">
                  Chemical &amp; Pharma AI Agents with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F05A28] to-[#C94A1A]">
                    Live LIMS &amp; SAP QM Sync.
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-[#46403B] mb-8 leading-relaxed">
                  We engineer sovereign, validated AI agents for American chemical manufacturers, biopharma laboratories, and specialty formulators. Automate electronic batch record (EBR) reviews, accelerate GHS 16-section Safety Data Sheet (SDS) authoring, enforce FDA 21 CFR Part 11 audit trails, and synchronize quality release data bi-directionally with LabWare, SampleManager, and SAP.
                </p>

                <div className="mb-8">
                  <HeroInlineForm
                    source="chemical-pharma-ai-agents-hero"
                    region="us"
                    submitLabel="Request Life Sciences AI Architecture Audit"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#E7DED6] text-xs font-mono text-[#6E655F]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>FDA 21 CFR Part 11 &amp; GxP Ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>LabWare, SampleManager &amp; SAP QM Sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>Air-Gapped Sovereign Enclaves</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-3 shadow-xl">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] sm:aspect-[4/3] bg-[#E7DED6]">
                    <Image
                      src="/images/chemical/specialty-chemical-formulations-ai.jpg"
                      alt="Quality assurance chemical engineer and laboratory scientist reviewing batch record analytics on workstation"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="mt-3 p-3 bg-white rounded-lg border border-[#E7DED6] text-xs">
                    <div className="flex items-center justify-between text-muted font-mono mb-1">
                      <span>LIVE GXP QUALITY RELEASE FEED</span>
                      <span className="text-[#F05A28] font-bold">21 CFR PART 11</span>
                    </div>
                    <div className="font-bold text-[#14110F]">
                      LabWare LIMS &bull; Batch #8492-B Reviewed in 54s (0 OOS Deviations)
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
                What is a Chemical &amp; Pharmaceutical AI Agent?
              </h2>
              <p className="text-base sm:text-lg text-[#46403B] leading-relaxed">
                A chemical and pharmaceutical AI agent is an autonomous software system connecting directly to Laboratory Information Management Systems (LIMS), Manufacturing Execution Systems (MES), enterprise ERPs, and regulatory databases. It automates electronic batch record verification, flags out-of-specification deviations, calculates GHS chemical hazard classifications, authors 16-section Safety Data Sheets, and maintains strict FDA 21 CFR Part 11 cryptographic audit trails without human data-entry bottlenecks.
              </p>
            </div>
          </div>
        </section>

        {/* VERIFIED INDUSTRY BENCHMARKS SECTION */}
        <section className="py-16 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // VERIFIED LIFE SCIENCES BENCHMARKS
              </div>
              <h2 className="text-3xl font-extrabold text-[#14110F] font-heading">
                The Cost of Regulatory Bottlenecks in Chemical &amp; Pharma Plants
              </h2>
              <p className="text-base sm:text-lg text-[#46403B] mt-3">
                How manual quality reviews, paper-based batch records, and compliance delays constrain product release cycles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  14 Days
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Average Batch Record Review Cycle Time
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Pharma manufacturing studies establish that finished inventory sits in quarantine for nearly two weeks while QA teams manually verify hundreds of pages of equipment logs and analytical certificates.
                </p>
                <div className="text-xs font-mono text-[#6E655F]">
                  Source: International Society for Pharmaceutical Engineering (ISPE)
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  $350,000
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Annual SDS Authoring &amp; Re-Authoring Cost
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Specialty chemical producers spend hundreds of thousands annually on toxicologist consultants and manual SDS updates whenever global REACH, TSCA, or Prop 65 lists change.
                </p>
                <div className="text-xs font-mono text-[#6E655F]">
                  Source: American Chemistry Council (ACC) Regulatory Economics
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  85%
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Reduction in Quality Release Cycle Duration
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Automated AI batch review pipelines identify critical discrepancies in seconds, enabling QA managers to complete final release approvals on the day manufacturing finishes.
                </p>
                <div className="text-xs font-mono text-[#6E655F]">
                  Source: Journal of Pharmaceutical Innovation
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
                // ENTERPRISE CHEMICAL &amp; PHARMA CAPABILITIES
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                Engineered for High-Stakes GxP and Chemical Manufacturing
              </h2>
              <p className="text-lg text-[#46403B]">
                Everything required to automate quality control, regulatory authoring, and laboratory workflows without compromising compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  01
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Electronic Batch Record (EBR) Verification
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Parses executed production records, autoclave logs, and analytical release data. Flags parameter deviations, missing signatures, and out-of-trend numbers instantly.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Sub-60s batch record audit
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Master batch record diffing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Automated deviation summaries
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  02
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  GHS 16-Section Safety Data Sheet Authoring
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Calculates aquatic toxicity, flash points, and dermal classifications from raw CAS concentration matrices, authoring standardized OSHA HCS / GHS SDS documents in seconds.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Multi-lingual GHS generation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> CAS hazard mixture calculations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> TSCA / REACH / Prop 65 screening
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  03
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  FDA 21 CFR Part 11 Cryptographic Audit Trails
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Maintains immutable, append-only logs for every user interaction, data extraction, and quality approval with dual-factor electronic signature validation.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> ALCOA+ data integrity compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Tamper-evident cryptographic hashing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Role-based electronic signatures
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  04
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Supplier Certificate of Analysis (CoA) Ingestion
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Extracts assay purity percentages, moisture content, and heavy metal limits from incoming supplier PDFs, validating values against raw material release specifications.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Multi-vendor CoA parsing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Automatic quarantine release flags
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Direct LIMS sample record creation
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  05
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  eCTD Module 3 CMC Dossier Assembly
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Compiles stability testing intervals, container closure studies, and manufacturing flowcharts into structured electronic Common Technical Document (eCTD) sections.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> IND and NDA Module 3 formatting
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Analytical method validation logs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Verifiable data traceability
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  06
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Bi-Directional LIMS &amp; ERP Quality Sync
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Connects directly with LabWare, Thermo Fisher SampleManager, Waters CDS platforms, SAP QM, and NetSuite to push approved release results and lot status updates.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> REST and SOAP API connectors
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Real-time ERP lot status update
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Zero manual transcription errors
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
                // TAILORED LIFE SCIENCES &amp; CHEMICAL SECTORS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                Engineered for High-Stakes Regulatory Workflows
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                Generic enterprise software fails when confronted with complex chemical CAS mixtures, stringent GxP validation rules, and specialized analytical data streams. We build purpose-engineered AI agents for your specific industry sector.
              </p>
            </div>

            <div className="space-y-16">
              {/* VERTICAL 1: Specialty Chemical Formulations & SDS Authoring */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAF7] p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    01. SPECIALTY CHEMICAL FORMULATIONS &amp; SDS AUTHORING
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    Formulation Optimization &amp; Automated GHS SDS Generation
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Specialty chemical formulators (coatings, adhesives, lubricants, agricultural adjuvants) spend substantial resources manually reviewing raw material safety documents and calculating mixture hazard statements.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our formulation agent ingests chemical recipes, evaluates boiling points, vapor pressures, and component toxicity values, generates compliant 16-section Safety Data Sheets, and suggests cost-effective raw material substitutions when supply chain disruptions occur.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F]">
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      GHS Hazard Calculation
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Hansen Solubility Matching
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Multi-Lingual SDS Export
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/chemical/specialty-chemical-formulations-ai.jpg"
                      alt="Chemical formulation laboratory scientist evaluating reactor batch samples and viscosity metrics"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* VERTICAL 2: Pharmaceutical Batch Record Review & GMP Compliance */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAF7] p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/chemical/pharma-batch-record-review-ai.jpg"
                      alt="Pharmaceutical quality assurance specialist reviewing electronic batch record compliance on computer"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    02. PHARMACEUTICAL BATCH RECORD REVIEW &amp; GMP COMPLIANCE
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    Automated EBR Reconciliation &amp; Out-of-Specification (OOS) Triage
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Pharmaceutical manufacturing facilities face lengthy batch release bottlenecks as quality assurance personnel manually verify hundreds of pages of operator signatures, sterile autoclave cycles, and analytical release chromatography runs.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our GMP batch review agent scans executed electronic batch records against approved master templates, detects parameter deviations, flags missing initials, correlates chromatography peaks with Waters CDS systems, and stages validated release summaries for final Qualified Person (QP) sign-off.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F]">
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Master Batch Record Diffing
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Chromatography Peak Verification
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Veeva Vault QualityDocs Sync
                    </span>
                  </div>
                </div>
              </div>

              {/* VERTICAL 3: FDA 21 CFR Part 11 & GxP Quality Triage */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAF7] p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    03. FDA 21 CFR PART 11 &amp; GXP QUALITY COMPLIANCE
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    Cryptographic Audit Logging &amp; CAPA Root-Cause Investigation
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Regulatory audits by the FDA, EMA, or ISO registrars demand instant traceability across all electronic records, changes, user sessions, and deviation investigations.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our compliance agent maintains tamper-evident cryptographic audit logs conforming to 21 CFR Part 11. When manufacturing deviations occur, it correlates historical batch data, environmental telemetry, and equipment maintenance history to draft structured CAPA investigation reports with exact citations.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F]">
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      ALCOA+ Data Integrity
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Dual-Factor E-Signatures
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      CAPA Investigation Synthesis
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/chemical/fda-21-cfr-part-11-compliance-ai.jpg"
                      alt="Pharmaceutical compliance officer conducting GxP audit and document inspection"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* VERTICAL 4: Chemical Supply Chain & Raw Material Sourcing */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAF7] p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/chemical/chemical-supply-chain-raw-materials-ai.jpg"
                      alt="Chemical plant logistics manager inspecting raw material tanker unloading and warehouse inventory"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    04. CHEMICAL SUPPLY CHAIN &amp; RAW MATERIAL SOURCING
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    Supplier Certificate of Analysis (CoA) Ingestion &amp; Lot Tracking
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Chemical manufacturers receive thousands of raw material shipments annually, each accompanied by vendor Certificates of Analysis in disparate PDF layouts with varied testing units.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our supply chain agent parses vendor CoAs automatically, compares assay percentages, viscosity limits, and moisture thresholds against internal purchase specifications, updates raw material lot status in SAP or NetSuite, and flags non-conforming shipments prior to silo unloading.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F]">
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Automated CoA OCR &amp; Spec Check
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      SAP / NetSuite Lot Release Sync
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Supplier Quality Scoring
                    </span>
                  </div>
                </div>
              </div>

              {/* VERTICAL 5: REACH / TSCA / Proposition 65 Regulatory Filing */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAF7] p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    05. GLOBAL REGULATORY FILING (TSCA, REACH &amp; PROP 65)
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    Automated Chemical Inventory Screening &amp; Regulatory Declarations
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Commercializing chemical products in North America and Europe requires continuous screening of ingredient CAS numbers against evolving regulatory restriction lists (EPA TSCA Section 8, California Proposition 65, EU REACH SVHC lists).
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our regulatory filing agent monitors official chemical regulatory gazettes, cross-references listed substances against your active product Bill of Materials (BOM), generates customer compliance certificates, and drafts regulatory notification submissions.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F]">
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      TSCA &amp; REACH Restriction Screening
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Prop 65 Safe Harbor Analysis
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Customer Compliance Certificates
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/chemical/reach-tsca-prop65-regulatory-filing-ai.jpg"
                      alt="Regulatory affairs director reviewing international chemical compliance filings and safety certifications"
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
                Enterprise Chemical &amp; Pharma AI Engineering Blueprint
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                How we architect validated, deterministic, and GxP-compliant AI pipelines for American life sciences and chemical enterprises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'FDA 21 CFR Part 11 & Annex 11 Compliance',
                  desc: 'Cryptographically signed audit logging, dual-factor authentication, and append-only version control ensure full compliance with FDA and GxP standards.',
                },
                {
                  title: 'Bi-Directional LIMS & CDS Connectivity',
                  desc: 'Native REST and database connectors synchronize test results, sample logs, and chromatography peaks with LabWare, SampleManager, and Waters CDS systems.',
                },
                {
                  title: 'Deterministic GHS Mixture Calculation Engine',
                  desc: 'Rule-based chemical math calculates acute oral/dermal toxicity, flammability, and aquatic hazard categories without generative hallucinations.',
                },
                {
                  title: 'Master Batch Record (MBR) Diffing Pipeline',
                  desc: 'OCR pipelines parse hundreds of executed EBR pages, comparing critical parameters, time intervals, and lot numbers against validated master records.',
                },
                {
                  title: 'Automated Supplier CoA Ingestion & Spec Triage',
                  desc: 'Extract chemical assay percentages, moisture limits, and impurity thresholds from incoming supplier PDFs, matching against raw material acceptance criteria.',
                },
                {
                  title: 'eCTD Module 3 CMC Dossier Assembly',
                  desc: 'Aggregate stability testing data, container closure studies, and analytical validation protocols into structured eCTD Module 3 regulatory sections.',
                },
                {
                  title: 'Air-Gapped & Sovereign Cloud Deployment',
                  desc: 'Deploy models on dedicated single-tenant VPCs or on-premise private GPU servers behind strict physical firewalls with zero data retention.',
                },
                {
                  title: 'Annual Product Quality Review (APQR) Synthesis',
                  desc: 'Aggregate 12 months of manufacturing records, statistical process metrics (Cpk/Ppk), and customer complaint data into formatted APQR reports.',
                },
                {
                  title: 'Multi-Lingual Global SDS Authoring Pipeline',
                  desc: 'Generate 16-section Safety Data Sheets in English, Spanish, French, German, and Mandarin with regional exposure limits and emergency hotlines.',
                },
                {
                  title: '100% Client Code & Infrastructure Ownership',
                  desc: 'You receive complete Git repository access, Python backend services, and Docker configurations. Zero recurring per-user software licensing fees.',
                },
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl border border-[#E7DED6] bg-white hover:border-[#F05A28]/50 transition-colors shadow-sm"
                >
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">
                    CHEM-ARCH-0{idx + 1}
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

        {/* 4-PHASE IMPLEMENTATION LIFECYCLE */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // DEPLOYMENT METHODOLOGY
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                4-Phase GxP Implementation &amp; Validation Roadmap
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                From regulatory schema audit to validated production deployment in 8 to 12 weeks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 01 // WEEKS 1-3</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">GxP Schema &amp; LIMS Audit</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We map your LIMS database schemas, master batch record templates, standard operating procedures (SOPs), and quality release criteria. We establish private zero-data-retention environments.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: User Requirements Specification (URS) &amp; Validation Plan
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 02 // WEEKS 4-6</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Parsing &amp; GHS Rules Build</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We construct multi-modal parsing pipelines for executed batch records, analytical chromatography data, and supplier CoAs. We encode chemical GHS classification rules into deterministic state machines.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Functional Design Specification (FDS) &amp; Custom Extractors
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 03 // WEEKS 7-9</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">LIMS Sync &amp; QA Console Staging</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We deploy your side-by-side QA review dashboard. Quality engineers test batch record verification, review deviation flags, and validate automated LIMS and SAP QM synchronization in a staging sandbox.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: QA Review Console &amp; Sandbox Integration Validation
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 04 // WEEKS 10-12</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">CSV / CSA Validation &amp; Handover</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We execute Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualification (PQ) test scripts. We train quality staff, deliver complete Git repositories, and complete full IP handover.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Executed IQ/OQ/PQ Package &amp; Full Source Code
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON MATRIX: CUSTOM LIFE SCIENCES AI VS GENERIC SAAS */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // VENDOR COMPARISON
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                FactoryJet Custom Life Sciences AI vs. Generic SaaS Tools
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                Why chemical and biopharma leaders build owned AI infrastructure rather than paying per-seat software licensing taxes.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#E7DED6] bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#E7DED6] bg-[#FFF8F5]">
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">Capability / Feature</th>
                    <th className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      FactoryJet Custom AI
                    </th>
                    <th className="p-4 sm:p-6 font-bold text-[#6E655F]">
                      Generic Cloud SaaS
                    </th>
                    <th className="p-4 sm:p-6 font-bold text-[#6E655F]">
                      Manual QA &amp; Regulatory Staff
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7DED6]">
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Batch Record Audit Speed</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Under 60 Seconds
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">15 to 30 Minutes</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">8 to 14 Days</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">LIMS &amp; SAP QM Integration</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Native LabWare, SampleManager Sync
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Manual CSV Export/Import</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Manual Re-Keying</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">FDA 21 CFR Part 11 Audit Trail</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Cryptographic Immutable Logs
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Basic Application Logging</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Paper Binder Signatures</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Software Cost Structure</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      100% Owned, $0 Per-Seat Fee
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">$300 - $800 / user / month</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">$120k - $160k QA specialist salary</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Formulation Privacy &amp; Enclaves</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Air-Gapped Private VPC or On-Prem
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Multi-Tenant Shared Cloud</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Internal Filesystem</td>
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
                  // DIRECT LIFE SCIENCES ARCHITECTURE LEADERSHIP
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-6">
                  Direct Engineering Oversight with Founder Bhavesh Barot
                </h2>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-6">
                  Regulated manufacturing requires zero-defect execution, rigorous validation documentation, and total data sovereignty. At FactoryJet, founder Bhavesh Barot leads every chemical and pharmaceutical AI architecture and LIMS scoping session personally. We evaluate your master batch records, LIMS data flows, and GHS authoring bottlenecks in the initial session.
                </p>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-8">
                  You collaborate directly with senior enterprise systems architects who have engineered complex data pipelines and mission-critical workflows for over a decade. We build dependable, auditable software that your organization owns and operates permanently.
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
                    label="Request Life Sciences AI Proposal"
                    region="us"
                    modalVariant="ai"
                    btnVariant="secondary-light"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED LIFE SCIENCES SPOKES */}
        <section className="py-16 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-4">
              // DEEP DIVE CAPABILITY SPOKES
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#14110F] font-heading mb-8">
              Explore Our Granular Enterprise Automation Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/services/manufacturing-ai-agents"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 01</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">
                  Manufacturing AI Agents &rarr;
                </h3>
                <p className="text-sm text-[#46403B]">
                  Autonomous shop floor scheduling, ERP synchronization, and predictive maintenance for industrial plants.
                </p>
              </Link>

              <Link
                href="/services/healthcare-ai-agents"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 02</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">
                  Healthcare AI Agents &rarr;
                </h3>
                <p className="text-sm text-[#46403B]">
                  HIPAA-compliant voice reception, live EHR scheduling, and clinical triage for medical practices.
                </p>
              </Link>

              <Link
                href="/services/ai-agent-development/ai-workflow-automation"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 03</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">
                  Enterprise AI Workflow Automation &rarr;
                </h3>
                <p className="text-sm text-[#46403B]">
                  Complex multi-system document parsing, database synchronization, and automated human-in-the-loop pipelines.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* STRUCTURED FAQ SECTION */}
        <FAQ
          eyebrow="// CHEMICAL &amp; PHARMA AI QUESTIONS &amp; ANSWERS"
          headline="Frequently Asked Questions on Chemical &amp; Pharmaceutical AI"
          lead="Everything quality directors, regulatory heads, and laboratory managers need to know about GxP validation, SDS authoring, and software ownership."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* FINAL CTA SECTION */}
        <section className="py-20 bg-[#FFF8F5] border-t border-[#E7DED6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#F05A28]/30 mb-6">
              <span className="font-mono text-xs text-[#F05A28] font-bold tracking-wide">
                // GXP VALIDATED &bull; ZERO SEAT FEES &bull; 100% AIR-GAPPED ENCLAVES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14110F] font-heading mb-6">
              Ready to Modernize Quality &amp; Compliance with Custom AI?
            </h2>

            <p className="text-lg text-[#46403B] max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a 30-minute architecture consultation with our founder. We will evaluate your current LIMS setup, review your batch record workflows, and deliver a fixed-scope implementation proposal within 24 hours.
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
                label="Request Life Sciences AI Audit"
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
