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

const CANONICAL_URL = 'https://factoryjet.com/services/manufacturing-ai-agents';
const PAGE_TITLE = 'Manufacturing AI Agents for Quoting & ERP Automation | FactoryJet';
const PAGE_DESC =
  'AI agents for US manufacturers that read RFQs and drawings, draft quotes, reconcile supplier POs and write approved drafts into NetSuite, SAP or Epicor.';
const PAGE_MODIFIED = '2026-10-04';

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Manufacturing AI Agents', url: CANONICAL_URL },
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'manufacturing ai agents',
    'manufacturing quoting automation',
    'manufacturing erp automation',
    'ai rfq automation manufacturing',
    'supplier po reconciliation ai',
    'erp ai integration manufacturing',
    'ai bill of materials extraction',
    'ai for precision machine shops',
    'industrial equipment ai agents',
    'netsuite manufacturing ai agent',
    'sap erp ai automation',
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
        url: 'https://factoryjet.com/images/manufacturing/manufacturing-plant-rfq-ai.jpg',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Manufacturing AI Agents and Industrial Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ['https://factoryjet.com/images/manufacturing/manufacturing-plant-rfq-ai.jpg'],
  },
};

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'Basics & ROI' },
  { key: 'erp', label: 'ERP & Systems Sync' },
  { key: 'rfq', label: 'RFQ & Drawing Parsing' },
  { key: 'security', label: 'Security & Ownership' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'basics',
    question: 'What is a manufacturing AI agent and how does it operate?',
    answer:
      "A manufacturing AI agent connects approved records and tools to a defined workflow. It can extract fields from incoming RFQs or supplier documents, retrieve inventory and pricing information, and prepare a draft for review. File formats, ERP access and allowed actions are scoped and tested for your plant. Quoting calculations and approval gates belong in application code, not model guesses.",
  },
  {
    category: 'basics',
    question: 'How fast can our manufacturing plant achieve positive ROI?',
    answer:
      "Payback must be measured from your own workflow. Establish RFQ volume, preparation time, estimator review, corrections and operating cost before a pilot. Compare similar packages afterward, including failed or incomplete tasks. Released staff time creates capacity; it becomes a cash saving only when actual spending changes. We do not promise a universal payback period.",
  },
  {
    category: 'basics',
    question: 'Does the AI agent execute actions autonomously without human review?',
    answer:
      "Action permissions are agreed during discovery. For pricing, purchase orders and other consequential writes, start with a draft for an authorised person to review. Enforce the approval gate in the application and connector permissions. Routine read operations can run unattended; enabling a new write action requires its own acceptance checks.",
  },
  {
    category: 'basics',
    question: 'Can the AI agent handle complex multi-tier manufacturing assemblies?',
    answer:
      "A multi-level bill of materials can be processed when the source structure and item identifiers are available. Scope the assembly depth, quantities, revisions and costing rules using representative examples. Keep purchased parts, labour and outsourced processes as separate lines. Missing components and ambiguous revisions should be sent to an estimator before a quote is approved.",
  },
  {
    category: 'erp',
    question: 'Which ERP systems do your manufacturing AI agents integrate with?',
    answer:
      "We scope integrations with systems such as NetSuite, SAP, Epicor and Infor against your edition, API, licences and permissions. These are candidate integration targets, not a claim that every connector is already deployed or every custom configuration is supported. Discovery confirms the exact reads and writes, sandbox access and responsible ERP administrator.",
  },
  {
    category: 'erp',
    question: 'How does the agent reconcile supplier purchase order acknowledgements?',
    answer:
      "A proposed reconciliation workflow extracts supplier acknowledgement fields and compares them with the open PO in the ERP. It flags differences in quantity, price and promised dates. Your purchasing rules decide whether a change can be staged or requires review. Test duplicate messages, partial shipments and record matching before enabling updates.",
  },
  {
    category: 'erp',
    question: 'Can the AI agent read legacy database tables or on-premise servers?',
    answer:
      "On-premise access can use an IT-approved gateway, VPN or other controlled connection where the system supports it. Begin with narrowly scoped read access and log the records retrieved. The design depends on your network, database and vendor terms. It should not require exposing an internal database directly to the public internet.",
  },
  {
    category: 'erp',
    question: 'How does the agent handle custom inventory pricing tiers and contract terms?',
    answer:
      "Retrieve customer-specific terms from an approved source and apply them through deterministic rules. Record the version and effective date used for a quote. Missing discounts, contradictory terms and stale records should become review questions. Test changes in customer accounts and contracts before enabling price-related writes.",
  },
  {
    category: 'rfq',
    question: 'How does the AI agent parse engineering drawings and PDF prints?',
    answer:
      "Document extraction must be evaluated on your actual formats and drawing quality. PDF text, scanned prints and native CAD files may need different parsers or licensed tooling. Preserve source references for fields used in a quote. Critical dimensions, tolerances and material callouts require validation; an extraction demonstration is not proof of reliable machining estimates.",
  },
  {
    category: 'rfq',
    question: 'What happens when an RFQ drawing contains unreadable or ambiguous dimensions?',
    answer:
      "An unreadable or conflicting critical dimension should remain unresolved and block the affected calculation or approval. Show the source location and the question to the estimator without silently substituting a guessed value. Test this behaviour on difficult drawings. A model confidence score alone is not a dependable safety guarantee.",
  },
  {
    category: 'rfq',
    question: 'Can the agent calculate cycle times and raw material stock costs?',
    answer:
      "Cycle-time and stock-cost estimates can use your approved rate tables and calculation rules when those inputs are available. Record their version and effective date. Market feeds require authorised access and a defined treatment of stale or missing prices. Validate the resulting line costs against estimator-approved examples before production use.",
  },
  {
    category: 'rfq',
    question: 'Does the RFQ agent support customer portal submissions and email inboxes?',
    answer:
      "Inbox and portal access is scoped against the available API, permissions and terms. A mailbox event may trigger processing; a portal may require a scheduled check or a manual handoff. Agree the check interval and failure alerts. We do not assume that every portal permits automated login or provides real-time access.",
  },
  {
    category: 'security',
    question: 'Is proprietary CAD and engineering data kept completely private?',
    answer:
      "Data handling depends on the approved deployment, provider contract and configuration. Document which CAD and customer data leaves your environment, retention periods, access controls, encryption and subprocessors. Verify any no-training or zero-retention terms explicitly before sending sensitive files. A private server or signed NDA alone does not guarantee every data protection requirement.",
  },
  {
    category: 'security',
    question: 'Does our manufacturing company own the custom AI agent code?',
    answer:
      "Ownership and handover terms are written into the scope and agreement. Separate custom code and client data from third-party software, model services and CAD or ERP licences. The handover should include the repository, deployment instructions and transferable configuration. Owning custom code does not remove operating costs or third-party service terms.",
  },
  {
    category: 'security',
    question: 'How do you ensure IT compliance with CMMC and ITAR requirements?',
    answer:
      "Regulated technical data needs a deployment approved by your compliance and security owners before access is granted. They must determine applicable requirements, permitted personnel, services and data flows. Hosting location alone does not establish ITAR compliance or CMMC status. We scope technical controls within that approved boundary rather than promising certification through an AI deployment.",
  },
  {
    category: 'erp',
    question: 'Can the AI agent parse multi-level Bill of Materials (BOM) for complex assemblies?',
    answer:
      "BOM processing depends on reliable parent-child relationships, units, revisions and item identifiers. Agree the depth and quantity rules during discovery, then validate both component lines and rolled-up totals. Missing or cyclical relationships should be flagged. An apparently correct total does not establish that the underlying components were identified correctly.",
  },
  {
    category: 'erp',
    question: 'How do you integrate with older on-premise ERPs that lack modern REST APIs?',
    answer:
      "Possible approaches include a vendor-supported gateway, read-only database access or an approved staging interface. Confirm support and licences with your ERP administrator first. Define the fields and transactions exposed and test recovery when connectivity fails. Direct writes to undocumented ERP tables should not be treated as a default integration path.",
  },
  {
    category: 'security',
    question: 'How long does a full manufacturing AI agent deployment take?',
    answer:
      "FactoryJet uses a focused pilot of roughly two to four weeks and a production plan of roughly six to twelve weeks as planning ranges, subject to scope. Native CAD processing, restricted data and multiple ERP instances can require more work. Agree access dependencies, acceptance tests and the milestone being estimated before committing to a schedule.",
  },
  {
    category: 'erp',
    question: 'Does the agent support AS9100 or IATF 16949 quality documentation requirements?',
    answer:
      "A document workflow can retrieve and check records against requirements your quality team defines. Scope the certificate types, revision rules, source systems and review process. Missing or inconsistent documents should be flagged before approval. Automating document handling does not certify the plant or replace its quality management responsibilities.",
  },
  {
    category: 'rfq',
    question: 'Can the agent handle RFQs that arrive as native CAD files instead of PDFs, such as SolidWorks or Inventor assemblies?',
    answer:
      "Native CAD support requires checking the exact format, software version, API or parser availability and licence terms. Validate extraction against representative assemblies before including it in the delivery scope. If reliable native parsing is not available, agree an approved export or a manual review path rather than promising universal format support.",
  },
  {
    category: 'security',
    question: 'What happens to the agent and its data if we end the engagement?',
    answer:
      "The agreement should identify which code, data, configuration and operating documentation you retain. Prepare an export and transfer plan for hosted resources, credentials and any third-party subscriptions. Test handover access before ending support. Custom code ownership is separate from the ongoing operation of ERP, CAD and model services.",
  },
  {
    category: 'basics',
    question: 'Do you support manufacturers running separate ERP instances across multiple plants?',
    answer:
      "A multi-plant workflow requires an explicit mapping between records, plant instances and permissions. Scope each ERP separately, including local customisations and master-data differences. Start with one validated path, then test routing to other plants. Require review when the plant cannot be determined instead of writing to a default instance.",
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
  publisher: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
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
  name: 'Manufacturing AI Agent Development & Supply Chain Automation',
  serviceType: 'Industrial AI Agent Development',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  description: PAGE_DESC,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Industrial AI Automation Solutions',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Automated RFQ Quoting & CAD Drawing Extraction',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Supplier Purchase Order & Promised Date ERP Sync',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Multi-Level BOM Material Costing & ERP Integration',
        },
      },
    ],
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet Engineers and Deploys Manufacturing AI Agents',
  description:
    'A 4-step engineering blueprint to automate quoting, ERP integration, and supply chain operations for American manufacturers.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'ERP Schema & Drawing Data Ingestion Audit',
      text: 'We map your existing NetSuite, SAP, or Epicor database schema, evaluate sample PDF/CAD drawing packages, and establish baseline pricing models.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Multi-Modal Vision & Parsing Pipeline Construction',
      text: 'We build vision extraction pipelines to parse title blocks, tolerances, GD&T notes, and line-item part numbers from raw customer RFQ packages.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Bi-Directional ERP Connector & Human Approval Workflow',
      text: 'We wire secure REST and database connectors to create draft quotes and PO reconciliations inside your ERP with human approval gates.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Shadow Mode Testing & Production Plant Deployment',
      text: 'The agent runs parallel shadow audits alongside your estimating team to verify pricing accuracy before full autonomous deployment.',
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


export default function ManufacturingAiAgentsPage() {
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
                    // INDUSTRIAL AI AGENTS & ERP AUTOMATION
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14110F] font-heading leading-tight mb-6">Manufacturing AI Agents for Quoting and ERP Automation.</h1>
                
                <p className="text-lg sm:text-xl text-[#46403B] mb-8 leading-relaxed">
                  We build AI agents for American machine shops, equipment fabricators, and contract manufacturers. The agent reads RFQs and CAD drawings and drafts the quote. It reconciles supplier purchase orders. Then it writes each draft into NetSuite, SAP, Epicor, or Infor for your team to approve.
                </p>

                <div className="mb-8">
                  <HeroInlineForm
                    source="manufacturing-ai-agents-hero"
                    region="us"
                    submitLabel="Request Manufacturing AI Audit"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#E7DED6] text-xs font-mono text-[#6E655F]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>NetSuite & SAP ERP Sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>CAD & Drawing PDF Extraction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>Data Handling Scoped Before Access</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-3 shadow-xl">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] sm:aspect-[4/3] bg-[#E7DED6]">
                    <Image
                      src="/images/manufacturing/manufacturing-plant-rfq-ai.jpg"
                      alt="American manufacturing plant operations manager reviewing CAD blueprint on industrial tablet"
                      width={1376}
                      height={768}
                      priority
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="mt-3 p-3 bg-white rounded-lg border border-[#E7DED6] text-xs">
                    <div className="flex items-center justify-between text-muted font-mono mb-1">
                      <span>LIVE ERP INGESTION FEED</span>
                      <span className="text-[#F05A28] font-bold">ACTIVE AGENT</span>
                    </div>
                    <div className="font-bold text-[#14110F]">
                      NetSuite ERP &bull; 42 RFQ Line Items Reconciled (0.8s)
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
                // EXECUTIVE SUMMARY & SYSTEM DEFINITION
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#14110F] font-heading mb-4">
                What is a Manufacturing AI Agent?
              </h2>
              <p className="text-base sm:text-lg text-[#46403B] leading-relaxed">
                A manufacturing AI agent is software that connects directly to your ERP, such as NetSuite, SAP, Epicor, or Infor. It reads incoming RFQ packages from customers. It pulls the specs straight off CAD drawings and PDF prints. It can check approved inventory and rate data where access is available. Then it can stage a draft quote or PO reconciliation for a human to approve. The exact sources, formats and connector actions are validated during discovery and the pilot.
              </p>
              <p className="mt-4 text-sm sm:text-base text-[#6E655F] leading-relaxed">
                Need an agent that only reads your ERP, CMMS, and historian to answer floor questions and draft shift handovers, and never writes back? Read about our{' '}
                <Link
                  href="/services/ai-agent-development/manufacturing-operations-agent"
                  className="underline text-[#B23E13] hover:text-[#F05A28]"
                >
                  manufacturing operations agent
                </Link>
                {' '}instead.
              </p>
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="py-12 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#F05A28] font-mono mb-1">
                  60%+
                </div>
                <div className="text-xs sm:text-sm text-[#6E655F]">
                  Faster quote turnaround (Paperless Parts)
                </div>
                <a
                  href="https://www.paperlessparts.com/facts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-[10px] font-mono text-[#F05A28] hover:underline"
                >
                  Third-party vendor results, not FactoryJet outcomes &rarr;
                </a>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-mono mb-1">
                  Owned
                </div>
                <div className="text-xs sm:text-sm text-[#6E655F]">
                  Custom code ownership in the agreement
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#F05A28] font-mono mb-1">
                  Pilot
                </div>
                <div className="text-xs sm:text-sm text-[#6E655F]">
                  Measure your RFQ turnaround
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-mono mb-1">
                  Scoped
                </div>
                <div className="text-xs sm:text-sm text-[#6E655F]">
                  Build and operating costs agreed
                </div>
              </div>
            </div>

            <p className="mt-10 max-w-3xl mx-auto text-center text-sm text-[#6E655F] leading-relaxed">
              US manufacturers had 529,000 open jobs as of May 2026, per the{' '}
              <a
                href="https://nam.org/mfgdata/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#F05A28]"
              >
                National Association of Manufacturers
              </a>
              . In{' '}
              <a
                href="https://www.deloitte.com/us/en/insights/industry/manufacturing-industrial-products/manufacturing-industry-outlook.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#F05A28]"
              >
                Deloitte&apos;s 2026 Manufacturing Industry Outlook
              </a>
              , more than a third of executives surveyed named the workforce skills gap their top concern. An AI agent will not replace a missing estimator. It clears the backlog piling up on their desk.
            </p>
          </div>
        </section>

        {/* 5 SUB-VERTICAL MANUFACTURING SHOWCASES */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // TAILORED INDUSTRIAL VERTICALS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Engineered for High-Mix, High-Precision Manufacturing.</h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                Generic chat tools break down against real tolerances, custom tooling, and nested BOM structures. We build AI workflows for your specific manufacturing trade instead.
              </p>
            </div>

            <div className="space-y-16">
              {/* VERTICAL 1: Precision CNC Machining & Tooling */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    01. PRECISION CNC MACHINING & CONTRACT TOOLING
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">Automated RFQ Geometry Parsing & Machine Hourly Costing.</h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Machine shop estimators spend 15 to 25 hours a week on quoting. They review PDF drawings by hand. They estimate 3-axis and 5-axis mill cycle times. Then they call suppliers just to get raw bar stock pricing.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our AI quoting agent reads the CAD drawings and PDF packages instead. It pulls out material callouts, like 6061 aluminum, 4140 steel, or titanium. It calculates stock volume and checks your machine rate tables for Fanuc, Haas, and Mazak controls. Then it drafts a full quote summary in NetSuite or JobBOSS, ready for your engineer to approve.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Fanuc, Haas &amp; Mazak Rate Matching
                    </li>
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      STEP & DWG Extraction
                    </li>
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Finishing & Anodizing Lookup
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/manufacturing/precision-machining-ai-quote.jpg"
                      alt="American CNC manufacturing engineer and machinist inspecting machined aerospace turbine component"
                      width={1376}
                      height={768}
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* VERTICAL 2: Industrial Equipment & Custom Machinery */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/manufacturing/industrial-equipment-supply-chain.webp"
                      alt="Industrial equipment supply chain director managing plant inventory and assembly line"
                      width={1200}
                      height={800}
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    02. INDUSTRIAL EQUIPMENT & HEAVY MACHINERY
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">Supplier Purchase Order Tracking & Promised Date Reconciliations.</h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Custom equipment builds use hundreds of long-lead parts, like motors, pneumatic actuators, PLCs, and structural framing. Suppliers often email a delayed ship date that just sits in an inbox. Nobody reads it in time. The assembly line shuts down.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our supply chain AI agent reads every supplier order confirmation as it arrives. It pulls the promised ship date and checks the quantity against your open PO in SAP or Epicor. If a date slips, it alerts your procurement manager right away, giving them real supply chain visibility before the delay hits a customer delivery milestone.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      EDI 855 & PDF Ingestion
                    </li>
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Critical Path Delay Alerts
                    </li>
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      3-Way Invoice Matching
                    </li>
                  </ul>
                </div>
              </div>

              {/* VERTICAL 3: Electronics Manufacturing & PCB Assembly */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    03. ELECTRONICS & PCB ASSEMBLY (PCBA)
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">Multi-Distributor Component Sourcing & BOM Cross-Referencing.</h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Electronics manufacturing services (EMS) providers get customer BOMs with thousands of lines. Each line is a surface-mount component, IC, or connector, tagged with its own manufacturer part number (MPN).
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our electronics sourcing agent checks live distributor APIs, including DigiKey, Mouser, Newark, and Arrow. It verifies stock levels, price breaks, and factory lead times in real time. When a part is obsolete, it flags this and suggests a drop-in replacement with the same form, fit, and function.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      DigiKey & Mouser API Sync
                    </li>
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Lifecycle & EOL Detection
                    </li>
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Attrition Rate Costing
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/manufacturing/electronics-assembly-ai-qa.webp"
                      alt="Electronics assembly quality control technician inspecting circuit board"
                      width={1448}
                      height={1086}
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* VERTICAL 4: Automotive Tier 1 & Replacement Parts */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/manufacturing/automotive-tier1-warehouse-ai.webp"
                      alt="Automotive parts warehouse logistics manager using barcode scanner and AI inventory platform"
                      width={1012}
                      height={676}
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    04. AUTOMOTIVE & AEROSPACE TIER 1 SUPPLIERS
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">EDI 830/862 Forecast Parsing & JIT Production Scheduling.</h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Tier 1 automotive suppliers get EDI 830 planning schedules and EDI 862 shipping releases from OEM plants, often several times a day. A manual translation error here is expensive. It can trigger a rush shipment fee or a plant line penalty.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our AI dispatch agent reads the raw EDI feed as it comes in. It checks cumulative received quantities against your shipment history in the ERP. That includes barcode scanning and RFID tracking data from the receiving dock. It calculates your safety buffer, then writes the release schedule straight into NetSuite or SAP.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      EDI 830 & 862 Ingestion
                    </li>
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Cum Quantity Reconciliation
                    </li>
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      ASN Generation Verification
                    </li>
                  </ul>
                </div>
              </div>

              {/* VERTICAL 5: Custom Plastics, Injection Molding & Extrusion */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    05. PLASTICS INJECTION MOLDING & EXTRUSION
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">Resin Pellet Indexing, Cavitation Costing & Tooling Triage.</h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Injection molders deal with resin prices that swing week to week, plus complex multi-cavity tooling costs. Working out shot size, cooling time, regrind ratios, and amortization by hand is slow. It delays every bid.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our plastics quoting agent pulls part volume and wall thickness straight from the 3D CAD model. It checks live resin spot prices for materials like polypropylene, ABS, PEEK, and polycarbonate. It calculates the press tonnage you need. Then it builds tiered quotes, from a single-cavity prototype up to full multi-cavity production tooling.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Resin Index Spot Pricing
                    </li>
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Tonnage & Clamp Matching
                    </li>
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Multi-Cavity Amortization
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/manufacturing/industrial-equipment-supply-chain.webp"
                      alt="Custom plastics and industrial tooling facility engineer reviewing production schedule"
                      width={1200}
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

        {/* ERP / MES / SHOP-FLOOR SYSTEM COVERAGE */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // SYSTEM COVERAGE
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">ERP, MES, and Shop-Floor Integration Targets.</h2>
              <p className="text-lg text-[#46403B]">
                Every plant runs different software on the floor and in the back office. The targets below illustrate integration scope. We validate your edition, API access, permissions and required actions before including a connector in the proposal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-4">ERP &amp; Business Systems.</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed list-none">
                  <li><span className="font-bold text-[#14110F]">NetSuite</span>: real-time inventory, MRP (material requirements planning), work orders, and quote-to-cash sync.</li>
                  <li><span className="font-bold text-[#14110F]">SAP S/4HANA</span> and <span className="font-bold text-[#14110F]">SAP Business One</span>: material master data and production order sync.</li>
                  <li><span className="font-bold text-[#14110F]">Epicor Prophet 21</span> and <span className="font-bold text-[#14110F]">Epicor Kinetic</span>: job costing and shop scheduling integration.</li>
                  <li><span className="font-bold text-[#14110F]">Infor CloudSuite Industrial</span> (SyteLine): work order and inventory sync for discrete manufacturers.</li>
                  <li><span className="font-bold text-[#14110F]">Microsoft Dynamics 365 Business Central</span>: quote, sales order, and inventory sync for mid-market shops.</li>
                  <li><span className="font-bold text-[#14110F]">Acumatica</span>: cloud-native ERP sync for multi-entity manufacturers.</li>
                  <li><span className="font-bold text-[#14110F]">JobBOSS</span> and <span className="font-bold text-[#14110F]">Global Shop Solutions</span>: legacy shop-floor ERP sync through a secure gateway.</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-4">Shop-Floor, MES &amp; SCADA.</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed list-none">
                  <li><span className="font-bold text-[#14110F]">Siemens Opcenter</span>: manufacturing execution system (MES) data for work order status, genealogy, and production line changeovers.</li>
                  <li><span className="font-bold text-[#14110F]">Rockwell Automation</span> and <span className="font-bold text-[#14110F]">Allen-Bradley</span>: PLC and SCADA telemetry for machine state and downtime.</li>
                  <li><span className="font-bold text-[#14110F]">Ignition SCADA</span> and <span className="font-bold text-[#14110F]">Kepware</span>: OPC-UA and Modbus gateways for real-time machine data.</li>
                  <li><span className="font-bold text-[#14110F]">Plex</span>, <span className="font-bold text-[#14110F]">IQMS</span> (DELMIAworks), and <span className="font-bold text-[#14110F]">MachineMetrics</span>: cloud MES and overall equipment effectiveness (OEE) data for scheduling agents.</li>
                  <li><span className="font-bold text-[#14110F]">Tulip</span>: frontline operations data for digital work instructions and quality control checks.</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-4">Sourcing, EDI &amp; Distributor APIs.</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed list-none">
                  <li><span className="font-bold text-[#14110F]">DigiKey</span>, <span className="font-bold text-[#14110F]">Mouser</span>, <span className="font-bold text-[#14110F]">Newark</span>, and <span className="font-bold text-[#14110F]">Arrow</span>: live stock, price break, and lead-time APIs.</li>
                  <li><span className="font-bold text-[#14110F]">EDI 830, 850, 855, 856, 860, and 862</span>: planning, order, and shipping transaction sets.</li>
                  <li><span className="font-bold text-[#14110F]">Coupa</span>, <span className="font-bold text-[#14110F]">Ariba</span>, and government bidding portals: RFQ package ingestion for customer procurement systems.</li>
                </ul>
                <p className="mt-6 text-sm text-[#6E655F] leading-relaxed border-t border-[#E7DED6] pt-4">
                  Running something else? We scope a connector against its own API or database schema, or build an ODBC/JDBC gateway where no API exists.
                </p>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline="Wondering how this maps to your ERP and drawings?"
          sub="Send us a sample RFQ package and your NetSuite, SAP, or Epicor setup. We'll show exactly where the agent reads, writes, and stops for your team's approval."
          label="Get a manufacturing AI audit"
        />

        {/* 9-POINT TECHNICAL ARCHITECTURE BLUEPRINT */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // SYSTEM ARCHITECTURE & INTEGRATION
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Enterprise Industrial AI Engineering Blueprint.</h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                How we architect secure, deterministic, and fault-tolerant AI agents for American manufacturing operations.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none">
              {[
                {
                  title: 'Multi-Modal CAD & Drawing Vision Pipeline',
                  desc: 'High-resolution OCR and vision models read your PDF engineering drawings. They pull out title blocks, GD&T tolerances, surface finish callouts, and handwritten notes, from both scanned and vector files.',
                },
                {
                  title: 'Bi-Directional ERP REST & SQL Connectors',
                  desc: 'Rule-based connectors read live inventory tables, customer price matrices, and machine rate standards straight from NetSuite, SAP, Epicor, and Infor. Nobody has to run a manual export.',
                },
                {
                  title: 'Multi-Tier Bill-of-Materials (BOM) Synthesis',
                  desc: 'The agent breaks down the assembly tree on its own. It separates raw materials, internal machining steps, outsourced processing, and standard fasteners into their own costed lines.',
                },
                {
                  title: 'Dynamic Scrap & Metal Commodity Indexing',
                  desc: 'Live pricing hooks check current metals exchange rates for aluminum, copper, and stainless steel. That keeps your material margin protected even when the market moves fast.',
                },
                {
                  title: 'Human-in-the-Loop Approval Console',
                  desc: 'Your estimator reviews the full draft quote in a simple web dashboard. It shows a confidence score and highlights the drawing side by side with the quote. One click publishes it to your ERP.',
                },
                {
                  title: 'Supplier Confirmation Email Triage',
                  desc: 'The agent reads messy vendor emails and PDF attachments the way a person would. It pulls out the PO number, the partial shipment quantity. The revised delivery date.',
                },
                {
                  title: 'Approved Data Handling and Retention',
                  desc: 'Document the data flow, provider terms, access and retention settings before sensitive files are connected. An NDA does not replace those controls.',
                },
                {
                  title: 'Compliance-Approved Deployment Boundary',
                  desc: 'Restricted technical data stays outside the workflow until your compliance and security owners approve the personnel, infrastructure and data flows. Cloud location alone does not establish compliance.',
                },
                {
                  title: '100% Client Code & Connector Ownership',
                  desc: 'You get the full Git repository, the Python backend services. The Docker orchestration files. There is no vendor lock-in and no per-seat fee.',
                },
              ].map((item, idx) => (
                <li
                  key={item.title}
                  className="p-6 rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] hover:border-[#F05A28]/50 transition-colors"
                >
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">
                    ARCH-0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-2">{item.title}.</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4-PHASE INDUSTRIAL IMPLEMENTATION LIFECYCLE */}
        <section className="py-20 bg-[#FFF8F5] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // DEPLOYMENT METHODOLOGY
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">4-Phase Industrial AI Agent Implementation Roadmap.</h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                From your first CAD sample to a live, two-way ERP rollout, in 4 to 6 weeks.
              </p>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 list-none">
              <li className="p-6 rounded-2xl bg-white border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 01 // WEEKS 1-2</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">ERP Schema & CAD Audit.</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We map your ERP tables, machine center hourly rates, raw stock SKUs, and past quote packages. Then we set up secure, read-only access to your NetSuite, SAP, or Epicor sandbox.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: API connector schema & GD&T extraction baseline
                </div>
              </li>

              <li className="p-6 rounded-2xl bg-white border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 02 // WEEKS 2-3</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Vision Pipeline & Quoting Logic.</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We train the vision model on your own 2D prints and STEP files. We also encode your feeds-and-speeds math and setup amortization rules. That becomes a rule-based state machine, so pricing logic works the same way every time.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Quoting calculation engine & OCR confidence scores
                </div>
              </li>

              <li className="p-6 rounded-2xl bg-white border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 03 // WEEKS 3-4</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Approval Console & ERP Staging.</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We deploy your human review console, with the drawing and the AI&apos;s reading side by side. Your estimator checks the extracted dimensions and the machine run-time math. Then they test one-click quote creation right inside your live ERP sandbox.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Estimator web dashboard & ERP draft injection
                </div>
              </li>

              <li className="p-6 rounded-2xl bg-white border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 04 // WEEKS 5-6</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Live Production & Handoff.</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We connect your live customer RFQ inbox to the production agent. We train your staff and hand over the full Git repository with documentation. Code and IP ownership transfer to your engineering team in full.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Full source code, Docker configs & SLA handover
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* COMPARISON MATRIX: CUSTOM INDUSTRIAL AI VS GENERIC SOFTWARE */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // VENDOR COMPARISON
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Custom Agents, Quoting Software and Manual Review.</h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                Compare these routes against your actual drawings, ERP configuration and review requirements. Performance depends on the selected product and implementation.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#E7DED6] bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#E7DED6] bg-[#FFF8F5]">
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">Capability / Feature.</th>
                    <th className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      FactoryJet Custom AI Agent
                    </th>
                    <th className="p-4 sm:p-6 font-bold text-[#6E655F]">
                      Quoting Software
                    </th>
                    <th className="p-4 sm:p-6 font-bold text-[#6E655F]">
                      Manual Estimator Process
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7DED6]">
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">RFQ Turnaround Evaluation.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Measure extraction plus estimator review in a pilot
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Test the selected product on the same RFQ set.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Establish your current handling-time baseline.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">CAD & Drawing Parsing.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Formats and critical fields validated in scope
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Check supported formats and extraction evidence.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Estimator reviews source drawings and requirements.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">ERP Bi-Directional Sync.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Connector scoped to your ERP edition and permissions
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Verify the product’s connector and write permissions.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Assess existing entry and approval steps.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Software Licensing & Fees.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Custom code ownership; operating dependencies scoped
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Check current vendor pricing and usage terms.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Measure staff effort using your own cost basis.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Proprietary Data Privacy.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Approved deployment and contractual data terms
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Review hosting, access and retention settings.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Review existing file access and sharing controls.</td>
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
                  // DIRECT INDUSTRIAL ARCHITECTURE LEADERSHIP
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-6">Direct Engineering Oversight with Founder Bhavesh Barot.</h2>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-6">
                  Industrial systems need precision. At FactoryJet, founder Bhavesh Barot leads every manufacturing architecture and ERP scoping session in person. In the first session, we look at your NetSuite or SAP data, your drawing formats, and where your quoting process slows down.
                </p>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-8">
                  You work directly with senior systems architects. They have built ERP pipelines and enterprise integrations for over a decade. We build reliable, auditable software, and your company owns and runs it forever.
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
                    label="Request Manufacturing AI Proposal"
                    region="us"
                    modalVariant="ai"
                    btnVariant="secondary-light"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED MANUFACTURING SPOKES */}
        <section className="py-16 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-4">
              // FOCUSED INDUSTRIAL CAPABILITY SPOKES
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#14110F] font-heading mb-8">Explore Our Granular Industrial AI Capabilities.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/services/ai-agent-development/rfq-bidding-agent"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 01</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">RFQ Bidding & Quoting Agent &rarr;.</h3>
                <p className="text-sm text-[#46403B]">
                  Inbound RFQ parsing from email, PDF drawing packages, buyer portals, and EDI 840.
                </p>
              </Link>

              <Link
                href="/services/ai-agent-development/procurement-supply-chain-agent"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 02</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">Procurement & Supply Chain Agent &rarr;.</h3>
                <p className="text-sm text-[#46403B]">
                  Supplier order confirmation triage, promised-date reconciliation, and ERP PO sync.
                </p>
              </Link>

              <Link
                href="/services/ai-agent-development/manufacturing-operations-agent"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 03</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">Manufacturing Operations Agent &rarr;.</h3>
                <p className="text-sm text-[#46403B]">
                  Read-only answers from ERP, CMMS, and historian data: shift handovers, downtime rollups, and maintenance request triage.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* STRUCTURED FAQ SECTION */}
        <FAQ
          eyebrow="// MANUFACTURING AI QUESTIONS & ANSWERS"
          headline="Frequently Asked Questions on Manufacturing AI Agents"
          lead="Everything plant managers, operations executives, and chief estimating engineers need to know about ERP sync, drawing parsing, and code ownership."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* FINAL CTA SECTION */}
        <section className="py-20 bg-[#FFF8F5] border-t border-[#E7DED6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#F05A28]/30 mb-6">
              <span className="font-mono text-xs text-[#F05A28] font-bold tracking-wide">
                // AUTOMATE RFQS &bull; ZERO SEAT TAXES &bull; 100% CODE OWNERSHIP
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14110F] font-heading mb-6">
              Ready to Automate Quoting and ERP Updates with Custom AI?
            </h2>
            
            <p className="text-lg text-[#46403B] max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a 30-minute technical architecture call with our founder. We will look at your ERP setup and your drawing formats. Then we send a fixed-scope proposal within 24 hours.
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
                label="Request Custom Plant Audit"
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
