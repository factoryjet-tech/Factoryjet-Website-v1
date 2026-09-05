import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import HeroInlineForm from '@/components/HeroInlineForm';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

const CANONICAL_URL = 'https://factoryjet.com/services/chemical-pharmaceutical-ai-agents';
const PAGE_TITLE = 'Chemical & Pharma AI Agents | GxP & SDS | FactoryJet';
const PAGE_DESC =
  'Custom AI agents for chemical manufacturers and pharma labs. Automate batch record review, GHS SDS authoring, FDA 21 CFR Part 11 audit trails, and LIMS sync.';
const PAGE_MODIFIED = '2026-09-02';

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

const BREADCRUMB_ITEMS = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Chemical & Pharmaceutical AI Agents', url: CANONICAL_URL },
];

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'gmp', label: 'Batch Records & GMP Compliance.' },
  { key: 'sds', label: 'SDS Authoring & Formulation.' },
  { key: 'regulatory', label: 'FDA 21 CFR Part 11 & Audits.' },
  { key: 'security', label: 'LIMS Sync & IP Ownership.' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'gmp',
    question: 'How do AI agents automate pharmaceutical Electronic Batch Record (EBR) review?',
    answer:
      'Our pharma AI agents parse long documents. They read executed batch records. They check equipment logbooks. They review release testing certificates. The agent cross-checks temperature logs. It verifies mixing durations. It confirms raw material lot numbers. It tests yield tolerances against the Master Batch Record. It flags deviations. It marks out-of-specification events. Each finding includes exact timestamps and page citations.',
  },
  {
    category: 'gmp',
    question: 'Can the AI agent identify root causes for out-of-trend (OOT) manufacturing deviations?',
    answer:
      'Yes. The agent correlates batch release data. It checks environmental monitoring logs. It reviews supplier raw material CoAs. It inspects equipment calibration logs. It drafts structured CAPA outlines. Findings include verifiable source citations. Quality engineers review each draft. The agent speeds up root-cause research. It preserves required human sign-off.',
  },
  {
    category: 'gmp',
    question: 'How does the system ensure GxP data integrity during automated QA checks?',
    answer:
      'Every ingestion step records in audit logs. These logs use tamper-evident hashes. The pipeline strictly follows GxP rules. It complies with FDA GMP guidelines. It enforces ALCOA+ principles. Every record remains attributable and legible. Entries stay contemporaneous and original. They remain accurate and complete. Records stay consistent and enduring. Inspectors can review any decision on demand.',
  },
  {
    category: 'gmp',
    question: 'Can the agent review raw material Certificates of Analysis (CoA) against procurement specs?',
    answer:
      'Yes. The agent extracts chemical assay percentages. It measures moisture content. It verifies impurity limits. It tracks microbial thresholds. Data comes from supplier PDF CoAs. It compares values against acceptance rules. Out-of-spec shipments flag immediately. It cites the exact CoA line. Quality teams receive immediate alerts. It never releases inventory automatically.',
  },
  {
    category: 'gmp',
    question: 'Can the agent support review-by-exception workflows instead of full manual batch record review?',
    answer:
      'Yes. Quality teams set parameter ranges first. The agent pre-screens executed batch records. It routes genuine exceptions to human reviewers. It flags out-of-trend values. Missing signatures alert supervisors. Compliant batches move to summary queues. Qualified Persons review summaries quickly. This cuts review time significantly.',
  },
  {
    category: 'gmp',
    question: 'Can the AI agent support stability study trending for shelf-life and expiry-date decisions?',
    answer:
      'Yes. The agent ingests stability chamber data. It checks long-term conditions. It monitors intermediate conditions. It tracks accelerated study points. It plots degradation trends against limits. Out-of-trend values trigger early warnings. This avoids out-of-specification failures. Teams receive early warnings on shelf-life. Data exports into annual stability reports.',
  },
  {
    category: 'sds',
    question: 'How does the chemical AI agent author GHS-compliant Safety Data Sheets (SDS)?',
    answer:
      'The agent inspects product formulas. It checks CAS numbers. It reads concentration levels. It reviews raw material hazard classes. It calculates water toxicity. It checks flash points. It finds acute toxicity limits. Data fills all 16 GHS sections. Output adds pictograms and warning text. It lists safety gear rules.',
  },
  {
    category: 'sds',
    question: 'Can the agent update global SDS libraries when chemical regulations change?',
    answer:
      'Yes. Chemical regulations update frequently. Rules change across EPA TSCA lists. California Proposition 65 lists update too. EU REACH Annex XVII changes regularly. The agent scans chemical inventories. It identifies affected product SKUs. It recalculates hazard classes. It drafts updated revisions with changelogs.',
  },
  {
    category: 'sds',
    question: 'How does the formulation optimization agent recommend raw material substitutions?',
    answer:
      'The agent queries property data. It checks solubility numbers. It reviews Hansen coordinates. It checks viscosity and costs. Supply gaps disrupt plants. The agent finds substitute surfactants. It suggests replacement polymers. Swaps match performance specs. Recipes protect profit margins. Chemists review and approve swaps quickly.',
  },
  {
    category: 'sds',
    question: 'Does the system support multi-lingual GHS SDS authoring for international exports?',
    answer:
      'Yes. The agent generates 16-section SDS documents. It authors files in English and Spanish. It supports French and German. It writes in Japanese and Mandarin. Regional exposure limits update accurately. These include OSHA PEL and ACGIH TLV. They include REACH DNEL limits. Mandated emergency hotlines attach automatically. All language versions stay in sync.',
  },
  {
    category: 'sds',
    question: 'How does the agent keep SDS documents current when a supplier changes a raw material formulation?',
    answer:
      'Suppliers sometimes change formulas. Downstream SDS files then require updates. The agent finds all affected blends. It flags CAS concentration shifts. It recalculates hazard classifications. It drafts revised 16-section SDS files. It updates document repositories. This prevents non-compliant shipments.',
  },
  {
    category: 'regulatory',
    question: 'Is the AI architecture compliant with FDA 21 CFR Part 11 and EU Annex 11 electronic signature rules?',
    answer:
      'Yes. We engineer tamper-evident audit logs. Every user action generates a timestamped record. Cryptographic hashing secures every event. Changes require dual-factor electronic signatures. Audit trails meet ALCOA+ guidelines. They stand up to FDA inspections. Validation packets include full IQ, OQ, and PQ records.',
  },
  {
    category: 'regulatory',
    question: 'Can the agent prepare Chemistry, Manufacturing, and Controls (CMC) regulatory dossiers?',
    answer:
      'Yes. The agent aggregates analytical validation summaries. It compiles stability testing time-points. It tracks container closure integrity data. It formats manufacturing flowcharts. It builds structured eCTD Module 3 outlines. These support IND and NDA submissions. Specialists write the final narrative. The agent removes days of data gathering.',
  },
  {
    category: 'regulatory',
    question: 'How does the agent assist with annual product quality reviews (APQR / PQR)?',
    answer:
      'The agent gathers 12 months of batch data. It tabulates statistical Cpk and Ppk metrics. It charts yield variability across lots. It synthesizes customer complaint trends. Output formats into APQR regulatory filings. Quality teams avoid weeks of spreadsheet work. Reviewers check structured drafts in days.',
  },
  {
    category: 'regulatory',
    question: 'Can the system detect potential cross-contamination risks in multi-product manufacturing facilities?',
    answer:
      'Yes. The agent reviews clean-in-place records. It evaluates toxicological HBEL limits. It checks PDE calculations. It reviews swab test assay results. Shared equipment runs exceeding thresholds flag immediately. This protects multi-product manufacturing plants. Shared drug lines verify cleaning data first. No new batch starts without verification.',
  },
  {
    category: 'regulatory',
    question: 'Can the agent generate REACH SVHC or Proposition 65 compliance declarations for individual customers?',
    answer:
      'Yes. Customers often request regulatory declarations. Examples include REACH SVHC statements. Another is California Proposition 65 documentation. The agent checks current ECHA lists. It checks OEHHA candidate lists against CAS numbers. It drafts signed compliance letters in minutes. Regulatory specialists save days of research.',
  },
  {
    category: 'security',
    question: 'Which Laboratory Information Management Systems (LIMS) and ERPs do you integrate with?',
    answer:
      'We build native bi-directional connectors. We connect LabWare LIMS and SampleManager. We integrate Waters CDS chromatography tools. We sync SAP S/4HANA QM and PP modules. We support Oracle NetSuite and Veeva Vault. We also support Infor and Epicor. Microsoft Dynamics 365 connects via APIs. Middleware like Mulesoft or Boomi works too.',
  },
  {
    category: 'security',
    question: 'Can quality and lab staff log in with our existing corporate identity system?',
    answer:
      'Yes. The platform supports corporate single sign-on. It connects via SAML or OAuth. Staff use existing corporate accounts. No separate passwords are required. Role-based access control enforces strict permissions. Admins revoke access centrally upon role changes.',
  },
  {
    category: 'security',
    question: 'How do you safeguard proprietary chemical synthesis routes and drug formulations?',
    answer:
      'We deploy isolated private VPC architectures. We support on-premise air-gapped GPU servers. All setups use Zero Data Retention agreements. Chemical formulas never train public models. Synthesis routes remain confidential. Legal teams can audit infrastructure directly. We run regular penetration tests. We sign mutual NDAs and GxP agreements.',
  },
  {
    category: 'security',
    question: 'Who owns the custom chemical and pharmaceutical AI agent code and models?',
    answer:
      'Your organization owns 100 percent of source code. You own the Git repositories. You own Python backend services. You own prompt state machines and Docker files. We charge zero per-user licensing fees. Handover includes deployment guides and credentials. The system runs under your control indefinitely.',
  },
  {
    category: 'security',
    question: 'What is the implementation timeline for a chemical or pharmaceutical AI agent?',
    answer:
      'Focused SDS authoring engines deploy in 4 to 6 weeks. CoA extraction pipelines follow that timeline. Enterprise GxP systems deploy in 8 to 12 weeks. That includes LIMS setup. It includes IQ, OQ, and PQ records. Timelines depend on connected systems. Historical batch data guides the schedule.',
  },
  {
    category: 'security',
    question: 'Does the agent maintain ALCOA+ data integrity if we later migrate LIMS or ERP vendors?',
    answer:
      'Yes. Audit logs store independently of vendor systems. Cryptographic hashes protect each record. Timestamps stay verifiable after migrations. Batch records remain complete and attributable. Files remain available for FDA and EMA inspectors. Data never traps in legacy software.',
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
          name: 'FDA 21 CFR Part 11-Aligned Audit Logging & eCTD Module 3 Synthesis',
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

const howToSchema = {
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


export default function ChemicalPharmaceuticalAiAgentsPage() {
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
                    // GXP COMPLIANT CHEMICAL &amp. PHARMA AI AGENTS
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14110F] font-heading leading-tight mb-6">Chemical &amp. Pharma AI Agents with{' '}
                  <span>
                    Live LIMS &amp. SAP QM Sync.
                  </span>.</h1>

                <p className="text-lg sm:text-xl text-[#46403B] mb-8 leading-relaxed">
                  We engineer validated AI agents for chemical manufacturers. We serve biopharma labs and specialty formulators. Our agents automate electronic batch record (EBR) reviews. They accelerate GHS 16-section Safety Data Sheet (SDS) authoring. They enforce FDA 21 CFR Part 11 audit trails. They sync quality release data bi-directionally. They integrate LabWare, SampleManager, Waters CDS, and SAP.
                </p>

                <div className="mb-8">
                  <HeroInlineForm
                    source="chemical-pharma-ai-agents-hero"
                    region="us"
                    submitLabel="Request Life Sciences AI Architecture Audit."
                  />
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#E7DED6] text-xs font-mono text-[#6E655F]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>FDA 21 CFR Part 11 &amp. GxP Ready.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>LabWare, SampleManager &amp. SAP QM Sync.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>Air-Gapped Sovereign Enclaves.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-3 shadow-xl">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] sm:aspect-[4/3] bg-[#E7DED6]">
                    <Image
                      src="/images/chemical/specialty-chemical-formulations-ai.jpg"
                      alt="Quality assurance chemical engineer and laboratory scientist reviewing batch record analytics on workstation"
                      width={1344}
                      height={896}
                      priority
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="mt-3 p-3 bg-white rounded-lg border border-[#E7DED6] text-xs">
                    <div className="flex items-center justify-between text-muted font-mono mb-1">
                      <span>LIVE GXP QUALITY RELEASE FEED.</span>
                      <span className="text-[#F05A28] font-bold">21 CFR PART 11</span>
                    </div>
                    <div className="font-bold text-[#14110F]">
                      LabWare LIMS &bull. Batch #8492-B Reviewed in 54s (0 OOS Deviations).
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
                // EXECUTIVE SUMMARY &amp. SYSTEM DEFINITION
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#14110F] font-heading mb-4">
                What is a Chemical &amp. Pharmaceutical AI Agent?.
              </h2>
              <p className="text-base sm:text-lg text-[#46403B] leading-relaxed">
                A chemical AI agent is automated software. It connects to LIMS platforms like LabWare. It connects to manufacturing execution systems. It syncs with ERP tools like SAP QM. It interfaces with regulatory databases. It automates electronic batch record audits. It flags out-of-specification deviations instantly. It calculates GHS chemical hazard classifications. It authors 16-section Safety Data Sheets. It maintains FDA 21 CFR Part 11 cryptographic audit trails. It removes manual data-entry bottlenecks.
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
              <h2 className="text-3xl font-extrabold text-[#14110F] font-heading">The Cost of Regulatory Bottlenecks in Chemical &amp. Pharma Plants.</h2>
              <p className="text-base sm:text-lg text-[#46403B] mt-3">
                Manual quality reviews delay releases. Paper-based batch records create bottlenecks. Compliance backlogs constrain factory throughput.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  1&ndash;2 Weeks
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Typical Batch Record Review Cycle Time.
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Finished inventory often sits in quarantine. Delays last one to two weeks. QA staff verify hundreds of pages. They check equipment logs by hand. They review chromatography runs manually. They verify analytical release certificates slowly.
                </p>
                <a
                  href="https://ispe.org/pharmaceutical-engineering/september-october-2024/7th-ispe-pharma-40tm-survey-digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#6E655F] underline decoration-[#6E655F]/40 underline-offset-2 hover:text-[#B23E13] hover:decoration-[#B23E13] transition-colors"
                >
                  Source: ISPE Pharma 4.0&trade. Survey on batch release digitalization.
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  94%
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Existing SDS Documents Requiring Revision Under the 2024 HazCom Update.
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  OSHA updated HazCom rules in 2024. Regulators estimated high revision volumes. Over 94 percent of SDS documents need updates. About 64 percent of shipping labels need updates. The rule affects 111,000 firms.
                </p>
                <a
                  href="https://www.osha.gov/hazcom/rulemaking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#6E655F] underline decoration-[#6E655F]/40 underline-offset-2 hover:text-[#B23E13] hover:decoration-[#B23E13] transition-colors"
                >
                  Source: OSHA Hazard Communication Standard Final Rule (2024).
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  60&ndash;70%
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Faster Quality Control Lab Lead Times From Digitization.
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  McKinsey studied pharmaceutical quality control. Digital lab workflows cut cycle times. Automated reviews reduce lead times by 60 to 70 percent. Manual reviews lag far behind. Model your savings with our{' '}
                  <Link href="/tools/ai-agent-roi-calculator" className="underline hover:no-underline" style={{ color: '#B23E13' }}>
                    AI agent ROI calculator
                  </Link>
                  .
                </p>
                <a
                  href="https://www.mckinsey.com/industries/life-sciences/our-insights/digitization-automation-and-online-testing-embracing-smart-quality-control"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#6E655F] underline decoration-[#6E655F]/40 underline-offset-2 hover:text-[#B23E13] hover:decoration-[#B23E13] transition-colors"
                >
                  Source: McKinsey &amp. Company, Life Sciences Practice.
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
                // ENTERPRISE CHEMICAL &amp. PHARMA CAPABILITIES
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Engineered for High-Stakes GxP and Chemical Manufacturing.</h2>
              <p className="text-lg text-[#46403B]">
                Automate quality control workflows. Speed up regulatory work. Keep strict compliance across laboratory operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  01
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Electronic Batch Record (EBR) Verification.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The agent parses executed production records. It reviews autoclave logs rapidly. It checks Waters CDS release data. It flags parameter deviations immediately. It catches missing signatures. It flags out-of-trend values instantly.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2"><span className="text-[#F05A28]">&bull;</span> Sub-60s batch record audit.</li>
                  <li className="flex items-center gap-2"><span className="text-[#F05A28]">&bull;</span> Master batch record diffing.</li>
                  <li className="flex items-center gap-2"><span className="text-[#F05A28]">&bull;</span> Automated deviation summaries.</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  02
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">GHS 16-Section Safety Data Sheet Authoring.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The system calculates aquatic toxicity limits. It verifies chemical flash points. It evaluates dermal classifications from CAS matrices. It authors standardized OSHA HCS SDS files. It delivers GHS documents in seconds.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2"><span className="text-[#F05A28]">&bull;</span> Multi-lingual GHS generation.</li>
                  <li className="flex items-center gap-2"><span className="text-[#F05A28]">&bull;</span> CAS hazard mixture calculations.</li>
                  <li className="flex items-center gap-2"><span className="text-[#F05A28]">&bull;</span> TSCA / REACH / Prop 65 screening.</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  03
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">FDA 21 CFR Part 11 Cryptographic Audit Trails.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The system writes append-only audit records. It logs every user action. It tracks data extraction events. It validates quality approval steps. Dual-factor electronic signatures gate each entry.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2"><span className="text-[#F05A28]">&bull;</span> ALCOA+ data integrity compliance.</li>
                  <li className="flex items-center gap-2"><span className="text-[#F05A28]">&bull;</span> Tamper-evident cryptographic hashing.</li>
                  <li className="flex items-center gap-2"><span className="text-[#F05A28]">&bull;</span> Role-based electronic signatures.</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  04
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Supplier Certificate of Analysis (CoA) Ingestion.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The system extracts assay purity values. It reads moisture percentages. It captures heavy metal limits from PDFs. It checks values against internal specs. Non-conforming lots flag instantly.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2"><span className="text-[#F05A28]">&bull;</span> Multi-vendor CoA parsing.</li>
                  <li className="flex items-center gap-2"><span className="text-[#F05A28]">&bull;</span> Automatic quarantine release flags.</li>
                  <li className="flex items-center gap-2"><span className="text-[#F05A28]">&bull;</span> Direct LIMS sample record creation.</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  05
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">eCTD Module 3 CMC Dossier Assembly.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The engine compiles stability test data. It tracks container studies. It formats plant flowcharts. It organizes eCTD sections. Regulatory teams review drafts quickly.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2"><span className="text-[#F05A28]">&bull;</span> IND and NDA Module 3 formatting.</li>
                  <li className="flex items-center gap-2"><span className="text-[#F05A28]">&bull;</span> Analytical method validation logs.</li>
                  <li className="flex items-center gap-2"><span className="text-[#F05A28]">&bull;</span> Verifiable data traceability.</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  06
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Bi-Directional LIMS &amp. ERP Quality Sync.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The agent connects directly to LabWare. It integrates Thermo Fisher SampleManager. It syncs Waters CDS chromatography platforms. Approved results push to SAP QM. Status updates flow into NetSuite.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2"><span className="text-[#F05A28]">&bull;</span> REST and SOAP API connectors.</li>
                  <li className="flex items-center gap-2"><span className="text-[#F05A28]">&bull;</span> Real-time ERP lot status update.</li>
                  <li className="flex items-center gap-2"><span className="text-[#F05A28]">&bull;</span> Zero manual transcription errors.</li>
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
                // TAILORED LIFE SCIENCES &amp. CHEMICAL SECTORS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Engineered for High-Stakes Regulatory Workflows.</h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                Generic software struggles with chemical mixtures. It fails on strict GxP validation rules. It mishandles specialized analytical data streams. We build purpose-engineered AI agents for your industry.
              </p>
            </div>

            <div className="space-y-16">
              {/* VERTICAL 1: Specialty Chemical Formulations & SDS Authoring */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAF7] p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    01. SPECIALTY CHEMICAL FORMULATIONS &amp. SDS AUTHORING
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">Formulation Optimization &amp. Automated GHS SDS Generation.</h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Specialty chemical formulators handle coatings, adhesives, and lubricants. Staff spend heavy time on manual tasks. They review raw material safety sheets by hand. They calculate hazard statements one by one.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our formulation agent reads chemical recipes. It checks boiling points and vapor pressures. It evaluates component toxicity values. It authors compliant 16-section SDS files rapidly. When supply disruptions occur, it suggests substitutions. It applies Hansen solubility matching accurately.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">GHS Hazard Calculation.</li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">Hansen Solubility Matching.</li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">Multi-Lingual SDS Export.</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/chemical/specialty-chemical-formulations-ai.jpg"
                      alt="Chemical formulation laboratory scientist evaluating reactor batch samples and viscosity metrics"
                      width={1344}
                      height={896}
                      className="absolute inset-0 h-full w-full object-cover"
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
                      width={1200}
                      height={800}
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    02. PHARMACEUTICAL BATCH RECORD REVIEW &amp. GMP COMPLIANCE
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">Automated EBR Reconciliation &amp. Out-of-Specification (OOS) Triage.</h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Pharma plants face batch release delays. Quality assurance teams verify hundreds of pages. They check operator signatures manually. They inspect autoclave cycles by hand. They review analytical chromatography runs line by line.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our GMP agent scans electronic batch records. It checks records against master templates. It detects parameter deviations quickly. It flags missing initials. It correlates chromatography peaks with Waters CDS tools. Validated summaries go to the Qualified Person. Sign-offs proceed without delays.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">Master Batch Record Diffing.</li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">Chromatography Peak Verification.</li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">Veeva Vault QualityDocs Sync.</li>
                  </ul>
                </div>
              </div>

              {/* VERTICAL 3: FDA 21 CFR Part 11 & GxP Quality Triage */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAF7] p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    03. FDA 21 CFR PART 11 &amp. GXP QUALITY COMPLIANCE
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">Cryptographic Audit Logging &amp. CAPA Root-Cause Investigation.</h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Regulatory audits require instant traceability. FDA, EMA, and ISO inspectors review records closely. Auditors inspect every change log and user session. They examine deviation reports in detail.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our compliance agent creates immutable audit logs. The system supports{' '}
                    <a
                      href="https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                      style={{ color: '#B23E13' }}
                    >
                      21 CFR Part 11
                    </a>{' '}
                    standards. It meets{' '}
                    <a
                      href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/data-integrity-and-compliance-drug-cgmp-questions-and-answers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                      style={{ color: '#B23E13' }}
                    >
                      FDA ALCOA+ data-integrity guidance
                    </a>
                    . When deviations occur, the agent pulls batch history. It reviews sensor telemetry. It inspects equipment maintenance history. It drafts structured CAPA investigation reports with exact citations.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">ALCOA+ Data Integrity.</li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">Dual-Factor E-Signatures.</li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">CAPA Investigation Synthesis.</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/chemical/fda-21-cfr-part-11-compliance-ai.jpg"
                      alt="Pharmaceutical compliance officer conducting GxP audit and document inspection"
                      width={1200}
                      height={896}
                      className="absolute inset-0 h-full w-full object-cover"
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
                      width={1280}
                      height={800}
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    04. CHEMICAL SUPPLY CHAIN &amp. RAW MATERIAL SOURCING
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">Supplier Certificate of Analysis (CoA) Ingestion &amp. Lot Tracking.</h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Chemical manufacturers receive thousands of shipments yearly. Each shipment includes a vendor Certificate of Analysis. Vendor PDFs arrive in differing formats. Test units vary across suppliers. Electronic data interchange can automate intake.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our supply chain agent parses vendor CoAs instantly. It compares assay percentages to purchase specs. It checks viscosity limits and moisture thresholds. It updates raw material lot status in SAP. It syncs records with NetSuite. It flags non-conforming shipments before unloading starts.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">Automated CoA OCR &amp. Spec Check.</li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">SAP / NetSuite Lot Release Sync.</li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">Supplier Quality Scoring.</li>
                  </ul>
                </div>
              </div>

              {/* VERTICAL 5: REACH / TSCA / Proposition 65 Regulatory Filing */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAF7] p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    05. GLOBAL REGULATORY FILING (TSCA, REACH &amp. PROP 65)
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">Automated Chemical Inventory Screening &amp. Regulatory Declarations.</h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Selling chemicals in North America and Europe requires screening. Teams must track CAS numbers against restriction lists. Three main frameworks apply:{' '}
                    <a
                      href="https://www.epa.gov/assessing-and-managing-chemicals-under-tsca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                      style={{ color: '#B23E13' }}
                    >
                      EPA TSCA Section 8
                    </a>
                    , California Proposition 65, and the EU REACH SVHC list.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our regulatory agent tracks chemical lists. It checks active formulas. It cross-references your bills of materials. It creates customer compliance certificates fast. It drafts regulatory notices.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">TSCA &amp. REACH Restriction Screening.</li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">Prop 65 Safe Harbor Analysis.</li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">Customer Compliance Certificates.</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/chemical/reach-tsca-prop65-regulatory-filing-ai.jpg"
                      alt="Regulatory affairs director reviewing international chemical compliance filings and safety certifications"
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
                  // SEE IT RUN ON YOUR OWN BATCH RECORDS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] font-heading mb-4">
                Want to Watch This Work Against Your Own Data?
              </h2>
              <p className="text-base sm:text-lg text-[#46403B] max-w-2xl mx-auto mb-8 leading-relaxed">
                Bring a sample batch record or SDS to a working session. We show how the agent parses it live. See results before making any commitment.
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
                  label="Request Life Sciences AI Proposal."
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
                // SYSTEM ARCHITECTURE &amp. INTEGRATION
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Enterprise Chemical &amp. Pharma AI Engineering Blueprint.</h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                We build validated AI pipelines for life sciences firms. We support chemical producers with deterministic software.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none">
              {[
                {
                  title: 'FDA 21 CFR Part 11 & Annex 11 Compliance.',
                  desc: 'Cryptographic logs record every action. Dual-factor authentication verifies users. Append-only records support FDA and GxP compliance rules.',
                },
                {
                  title: 'Bi-Directional LIMS & CDS Connectivity.',
                  desc: 'Native REST connectors sync test results. The agent transfers sample logs. It syncs chromatography peaks with LabWare, SampleManager, and Waters CDS.',
                },
                {
                  title: 'Deterministic GHS Mixture Calculation Engine.',
                  desc: 'Rule-based math calculates acute toxicity. It rates flammability. It sets water hazard classes. It prevents false outputs.',
                },
                {
                  title: 'Master Batch Record (MBR) Diffing Pipeline.',
                  desc: 'OCR pipelines read executed electronic batch records. The agent compares critical parameters. It checks time intervals against validated master records.',
                },
                {
                  title: 'Automated Supplier CoA Ingestion & Spec Triage.',
                  desc: 'The agent extracts chemical assay percentages. It reads moisture limits. It matches impurity levels against raw material acceptance specs.',
                },
                {
                  title: 'eCTD Module 3 CMC Dossier Assembly.',
                  desc: 'The platform aggregates stability test records. It compiles container closure studies. It formats data into structured eCTD Module 3 sections.',
                },
                {
                  title: 'Air-Gapped & Sovereign Cloud Deployment.',
                  desc: 'We deploy models on single-tenant VPCs. We host on local GPU servers. We orchestrate clusters with Kubernetes. Systems run behind strict firewalls.',
                },
                {
                  title: 'Annual Product Quality Review (APQR) Synthesis.',
                  desc: 'The agent gathers 12 months of manufacturing records. It tabulates process metrics like Cpk and Ppk. It formats data into APQR reports.',
                },
                {
                  title: 'Multi-Lingual Global SDS Authoring Pipeline.',
                  desc: 'The system writes 16-section Safety Data Sheets. It supports English, Spanish, French, German, and Mandarin. It adds local emergency hotlines.',
                },
                {
                  title: '100% Client Code & Infrastructure Ownership.',
                  desc: 'You receive complete Git repository access. You own Python backend services. You receive Docker setups. We charge zero per-user software fees.',
                },
              ].map((item, idx) => (
                <li
                  key={item.title}
                  className="p-6 rounded-2xl border border-[#E7DED6] bg-white hover:border-[#F05A28]/50 transition-colors shadow-sm"
                >
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">
                    CHEM-ARCH-0{idx + 1}.
                  </div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-2">{item.title}</h3>
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
                // DEPLOYMENT METHODOLOGY
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">4-Phase GxP Implementation &amp. Validation Roadmap.</h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                Go from regulatory audit to production deployment in 8 to 12 weeks.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 list-none">
              <li className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between"><div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 01 // WEEKS 1-3.</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">GxP Schema &amp. LIMS Audit.</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We map your LIMS database schemas. We inspect master batch record templates. We review standard operating procedures. We configure zero-data-retention environments.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: User Requirements Specification (URS) &amp. Validation Plan.
                </div>.</li>

              <li className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between"><div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 02 // WEEKS 4-6.</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Parsing &amp. GHS Rules Build.</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We build multi-modal parsing pipelines. We ingest executed batch records and supplier CoAs. We process analytical chromatography runs. We encode GHS classification rules.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Functional Design Specification (FDS) &amp. Custom Extractors.
                </div>.</li>

              <li className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between"><div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 03 // WEEKS 7-9.</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">LIMS Sync &amp. QA Console Staging.</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We deploy a side-by-side QA review dashboard. Quality engineers verify batch records. They review deviation flags. They validate automated LIMS and SAP QM synchronization.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: QA Review Console &amp. Sandbox Integration Validation.
                </div>.</li>

              <li className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between"><div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 04 // WEEKS 10-12.</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">CSV / CSA Validation &amp. Handover.</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We execute IQ, OQ, and PQ test protocols. We train quality assurance staff. We deliver complete Git repositories. You receive full intellectual property ownership.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Executed IQ/OQ/PQ Package &amp. Full Source Code.
                </div>.</li>
            </ul>
          </div>
        </section>

        {/* COMPARISON MATRIX: CUSTOM LIFE SCIENCES AI VS GENERIC SAAS */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // VENDOR COMPARISON
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">FactoryJet Custom Life Sciences AI vs. Generic SaaS Tools.</h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                Chemical leaders build owned AI infrastructure. They eliminate costly per-seat software licensing fees.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#E7DED6] bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#E7DED6] bg-[#FFF8F5]">
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">Capability / Feature.</th>
                    <th className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      FactoryJet Custom AI
                    </th>
                    <th className="p-4 sm:p-6 font-bold text-[#6E655F]">
                      Generic Cloud SaaS
                    </th>
                    <th className="p-4 sm:p-6 font-bold text-[#6E655F]">
                      Manual QA &amp. Regulatory Staff
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7DED6]">
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Batch Record Audit Speed.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Under 60 Seconds.
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">15 to 30 Minutes.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">8 to 14 Days.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">LIMS &amp. SAP QM Integration.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Native LabWare &amp. SampleManager Sync.
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Manual CSV Export/Import.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Manual Re-Keying.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">FDA 21 CFR Part 11 Audit Trail.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Cryptographic Immutable Logs.
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Basic Application Logging.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Paper Binder Signatures.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Software Cost Structure.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      100% Owned, $0 Per-Seat Fee.
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">$300 - $800 / user / month.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">$120k - $160k QA specialist salary.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Formulation Privacy &amp. Enclaves.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Air-Gapped Private VPC or On-Prem.
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Multi-Tenant Shared Cloud.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Internal Filesystem.</td>
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
                      alt="Bhavesh Barot, Founder &amp. CEO of FactoryJet"
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
                      Founder &amp. CEO, FactoryJet.
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
                  // DIRECT LIFE SCIENCES ARCHITECTURE LEADERSHIP
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-6">Direct Engineering Oversight with Founder Bhavesh Barot.</h2>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-6">
                  Regulated manufacturing requires exact execution. Quality teams need clear validation records. They need total data sovereignty. Founder Bhavesh Barot leads every chemical AI project. We review your master batch records together. We inspect LIMS data flows during discovery. We fix GHS authoring delays quickly.
                </p>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-8">
                  You work directly with senior systems architects. Our team has built data pipelines for over a decade. We build dependable, auditable software. Your organization owns and operates the platform permanently.
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
                    label="Request Life Sciences AI Proposal."
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
            <h2 className="text-2xl sm:text-3xl font-bold text-[#14110F] font-heading mb-8">Explore Our Granular Enterprise Automation Capabilities.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/services/manufacturing-ai-agents"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 01.</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">Manufacturing AI Agents &rarr;.</h3>
                <p className="text-sm text-[#46403B]">
                  Autonomous shop floor scheduling. Live ERP sync. Predictive maintenance for industrial plants.
                </p>
              </Link>

              <Link
                href="/services/healthcare-ai-agents"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 02.</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">Healthcare AI Agents &rarr;.</h3>
                <p className="text-sm text-[#46403B]">
                  HIPAA-compliant voice reception. Live EHR scheduling. Clinical triage for medical clinics.
                </p>
              </Link>

              <Link
                href="/services/ai-agent-development/ai-workflow-automation"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 03.</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">Enterprise AI Workflow Automation &rarr;.</h3>
                <p className="text-sm text-[#46403B]">
                  Multi-system document parsing. Live database sync. Human-in-the-loop review pipelines.
                </p>
              </Link>

              <Link
                href="/services/legal-ai-agents"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 04.</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">Legal AI Agents &rarr;.</h3>
                <p className="text-sm text-[#46403B]">
                  Automated contract review. E-signature audit trails. Compliance document automation for legal teams.
                </p>
              </Link>

              <Link
                href="/services/agriculture-equipment-ai-agents"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 05.</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">Agriculture Equipment AI Agents &rarr;.</h3>
                <p className="text-sm text-[#46403B]">
                  Real-time telemetry monitoring. Parts compliance tracking. Dealer service automation for equipment makers.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* STRUCTURED FAQ SECTION */}
        <FAQ
          eyebrow="// CHEMICAL &amp. PHARMA AI QUESTIONS &amp. ANSWERS"
          headline="Frequently Asked Questions on Chemical &amp. Pharmaceutical AI."
          lead="Everything quality directors and lab managers need to know. Learn about GxP validation and SDS authoring. Understand full software ownership."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* FINAL CTA SECTION */}
        <section className="py-20 bg-[#FFF8F5] border-t border-[#E7DED6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#F05A28]/30 mb-6">
              <span className="font-mono text-xs text-[#F05A28] font-bold tracking-wide">
                // GXP VALIDATED &bull. ZERO SEAT FEES &bull. 100% AIR-GAPPED ENCLAVES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14110F] font-heading mb-6">
              Ready to Modernize Quality &amp. Compliance with Custom AI?
            </h2>

            <p className="text-lg text-[#46403B] max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a 30-minute architecture session with our founder. We review your LIMS setup. We inspect your batch record workflows. You receive a fixed-scope proposal in 24 hours.
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
                label="Request Life Sciences AI Audit."
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
