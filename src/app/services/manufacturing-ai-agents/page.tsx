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
const PAGE_TITLE = 'Manufacturing AI Agents & ERP Automation | FactoryJet';
const PAGE_DESC =
  'Custom AI agents for US manufacturers. Automate RFQ quoting, supplier PO tracking, and shop-floor handovers with direct NetSuite & SAP ERP sync. Get an audit.';
const PAGE_MODIFIED = '2026-09-03';

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
    'ai agents for manufacturing',
    'manufacturing ai automation',
    'ai rfq automation manufacturing',
    'ai supply chain automation',
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
      'A manufacturing AI agent is software that connects to your ERP, your CRM, your email inbox, and your document files. It runs on its own, not on a schedule. It reads incoming RFQ emails and pulls the bill of materials (BOM) off CAD or PDF drawings. It matches each line item to your inventory master and checks real-time machine capacity. Then it drafts a quote or a PO reconciliation and sends it to a person for approval.',
  },
  {
    category: 'basics',
    question: 'How fast can our manufacturing plant achieve positive ROI?',
    answer:
      'Payback time depends on your plant size and how much of the quoting and PO work moves to the agent. Many mid-market US machine shops and contract manufacturers recover their setup cost within the first few months. The savings come from three places: faster RFQ turnaround, less time spent expediting open POs by hand, and fewer manual data-entry errors in the ERP.',
  },
  {
    category: 'basics',
    question: 'Does the AI agent execute actions autonomously without human review?',
    answer:
      'No. FactoryJet builds human-in-the-loop review into every high-value action. The agent reads the raw inputs, works out pricing tiers, and checks machine run times. It stages the full draft transaction inside NetSuite or SAP. Your estimator or purchasing manager reviews it and clicks approve.',
  },
  {
    category: 'basics',
    question: 'Can the AI agent handle complex multi-tier manufacturing assemblies?',
    answer:
      'Yes. Our agents read multi-level bills of materials (BOM). They identify sub-assemblies, raw stock needs, outsourced finishing like anodizing or heat treating, and standard hardware from your supplier catalogs. Each sub-assembly gets its own costed line, not one blended price. That way your estimator can see exactly where labor, outsourced work, and raw material drive the total. They can adjust one line without re-quoting the whole assembly.',
  },
  {
    category: 'erp',
    question: 'Which ERP systems do your manufacturing AI agents integrate with?',
    answer:
      'We build native REST, SOAP, and direct database connectors. Today that list covers NetSuite, SAP S/4HANA, SAP Business One, Epicor Prophet 21, Epicor Kinetic, Infor CloudSuite Industrial (SyteLine), Microsoft Dynamics 365 Business Central, Acumatica, and JobBOSS. If your shop runs something else, or a heavily customized version of one of these, that is not a blocker. We scope the connector against its API or database schema during discovery instead.',
  },
  {
    category: 'erp',
    question: 'How does the agent reconcile supplier purchase order acknowledgements?',
    answer:
      'When a supplier emails an order confirmation or a PDF acknowledgement, the agent reads it right away. It pulls out the vendor PO number, line item pricing, shipped quantities. The promised ship date. Then it compares all of that against the open PO in your ERP. It updates delivery schedules on its own and flags any price mismatch.',
  },
  {
    category: 'erp',
    question: 'Can the AI agent read legacy database tables or on-premise servers?',
    answer:
      'Yes. Many manufacturers run legacy SQL Server, Oracle, or AS400 databases behind a corporate firewall. For those, we deploy a secure zero-trust proxy agent, or a direct VPN tunnel. Either way, the agent can query your inventory tables without opening your internal network to the public internet.',
  },
  {
    category: 'erp',
    question: 'How does the agent handle custom inventory pricing tiers and contract terms?',
    answer:
      'The agent checks your ERP customer master record in real time. It pulls the contract discount, negotiated freight terms, minimum order quantity (MOQ), and any customer-specific markup rule before it drafts a quote. This happens on every quote, not just the first one for a new customer. So if your sales team updates a contract mid-year, the next quote still uses the right numbers. Nobody has to re-key anything.',
  },
  {
    category: 'rfq',
    question: 'How does the AI agent parse engineering drawings and PDF prints?',
    answer:
      'We build vision pipelines that read scanned PDF prints, DWG files, and STEP files. They pull out title blocks, part numbers, material callouts (like 6061-T6 aluminum or 304 stainless steel), dimensional tolerances, surface finish notes, and GD&T callouts. Every value links back to its exact spot on the drawing. So when your estimator reviews the draft quote, they can click a tolerance callout and see the source dimension line, instead of re-reading the whole print to check it.',
  },
  {
    category: 'rfq',
    question: 'What happens when an RFQ drawing contains unreadable or ambiguous dimensions?',
    answer:
      'The agent never guesses on a critical dimension. When its confidence score drops below a set safety threshold, it flags that specific callout. It writes a short clarification note and routes the ticket to your senior estimator. The flag names the exact field it could not resolve, plus its best guess and a confidence score. Your estimator can confirm or correct it in seconds, instead of re-reading the whole print to find the problem.',
  },
  {
    category: 'rfq',
    question: 'Can the agent calculate cycle times and raw material stock costs?',
    answer:
      'Yes. The agent uses your feeds-and-speeds tables, standard machine hourly rates, and setup times. It also pulls live commodity index prices, like scrap and metal spot prices, to build an accurate cost-plus or market-based quote. Those prices refresh on a schedule you set, usually daily. So a quote built on Monday uses Monday\'s aluminum or steel spot price, not a stale number from the last manual ERP update.',
  },
  {
    category: 'rfq',
    question: 'Does the RFQ agent support customer portal submissions and email inboxes?',
    answer:
      'Yes. Our agents watch shared sales inboxes, like rfq@yourcompany.com, and customer portals like Coupa, Ariba, and government bidding boards. They pull in each RFQ package as soon as it posts. Some portals need a login and have no API. For those, we set up a scheduled, credentialed check instead of a true real-time push. Nothing sits unnoticed for longer than the check interval you set, usually every fifteen minutes.',
  },
  {
    category: 'security',
    question: 'Is proprietary CAD and engineering data kept completely private?',
    answer:
      'Yes. We work under strict, enterprise zero-data-retention agreements. Your CAD geometry, part numbers, customer lists, and pricing margins are never used to train a public AI model. Everything is encrypted at rest with AES-256, and in transit with TLS 1.3.',
  },
  {
    category: 'security',
    question: 'Does our manufacturing company own the custom AI agent code?',
    answer:
      'Yes. You get 100 percent ownership of the IP and the source code. We hand over the full Git repository, the Python connectors, the prompt orchestration scripts. The Docker containers. There is no per-seat fee and no runtime vendor license, ever. Ownership starts on day one. It is not tied to a minimum contract term. You could hand the repository to your own developer, or a different vendor, at any point. You would not need our permission or a data export process.',
  },
  {
    category: 'security',
    question: 'How do you ensure IT compliance with CMMC and ITAR requirements?',
    answer:
      'For aerospace and defense manufacturers under ITAR or CMMC, we deploy AI models inside sovereign AWS GovCloud or Azure Government. Access is locked to US-citizen engineers, with full audit logging. Before implementation starts, we also scope exactly which data classes count as export-controlled technical data under your ITAR determination. That means your compliance team draws the line between what the agent can touch and what stays fully isolated, not us.',
  },
  {
    category: 'erp',
    question: 'Can the AI agent parse multi-level Bill of Materials (BOM) for complex assemblies?',
    answer:
      'Yes. The agent walks the full parent-child BOM tree in your CAD or ERP database. It breaks assemblies down into sub-assemblies, weldments, raw stock cut pieces, standard catalog hardware like fasteners, bearings, and seals, and outside vendor plating, each as its own costed line. There is no fixed depth limit. It keeps traversing until it hits a purchased part, so even a five-level weldment gets costed as completely as a simple one.',
  },
  {
    category: 'erp',
    question: 'How do you integrate with older on-premise ERPs that lack modern REST APIs?',
    answer:
      'For older on-premise ERPs, like JobBOSS, Global Shop Solutions, or older SAP or Epicor versions, we deploy a secure, local, read-only ODBC/JDBC gateway. Or we use an intermediate SQL staging table, both behind your firewall with zero cloud exposure. The gateway runs inside your network. It only pushes the specific fields a workflow needs, like part numbers and open PO lines. The rest of your database stays exactly as isolated as it is today.',
  },
  {
    category: 'security',
    question: 'How long does a full manufacturing AI agent deployment take?',
    answer:
      'One focused workflow, like RFQ email extraction or PO date reconciliation, takes 3 to 5 weeks. A full plant-wide build across quoting, ERP sync, and shop-floor scheduling takes 8 to 12 weeks. ERP access is the biggest variable. A plant that can hand over sandbox and API credentials in week one moves through testing fastest. A plant waiting on IT or a third-party ERP consultant lands toward the longer end.',
  },
  {
    category: 'erp',
    question: 'Does the agent support AS9100 or IATF 16949 quality documentation requirements?',
    answer:
      'Yes. AS9100 and IATF 16949 are quality management system (QMS) standards built on the ISO 9001 baseline, for aerospace and automotive suppliers. For those clients, the agent attaches the required paperwork automatically: material certifications, first-article inspection reports, and lot traceability documentation, on every quote or PO record. If a certificate is missing, it flags this before the quote goes out.',
  },
  {
    category: 'rfq',
    question: 'Can the agent handle RFQs that arrive as native CAD files instead of PDFs, such as SolidWorks or Inventor assemblies?',
    answer:
      'Yes, where the customer grants file access. Beyond flattened PDF and STEP files, we build parsers for native SolidWorks, Autodesk Inventor, and Siemens NX assemblies. These read dimensional and material data straight from the model tree, not a flattened drawing. That recovers metadata a rasterized PDF loses, like the material assigned to each part in a multi-material assembly. It makes quotes more accurate on complex weldments and machined housings.',
  },
  {
    category: 'security',
    question: 'What happens to the agent and its data if we end the engagement?',
    answer:
      'You keep everything. You already own the full Git repository, the connector code. The Docker containers from day one. So ending the engagement just means we stop billing and hand over any remaining documentation. There is no data migration fire drill, because your ERP and your infrastructure never left your control in the first place.',
  },
  {
    category: 'basics',
    question: 'Do you support manufacturers running separate ERP instances across multiple plants?',
    answer:
      'Yes. Multi-plant manufacturers often run a separate NetSuite or SAP instance per facility, or a mix of systems after an acquisition. We build one agent layer on top of all of them. It routes each RFQ and PO reconciliation to the right plant instance, based on customer, part number, or requested ship-from location.',
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
  name: 'Manufacturing AI Agent Development & Supply Chain Automation',
  serviceType: 'Industrial AI Agent Development',
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
          name: 'Shop Floor Shift Handover & CMMS Maintenance Intelligence',
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
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14110F] font-heading leading-tight mb-6">Custom AI Agents for US Manufacturers with{' '}
                  <span>
                    Live ERP Synchronization.
                  </span>.</h1>
                
                <p className="text-lg sm:text-xl text-[#46403B] mb-8 leading-relaxed">
                  We build AI agents for American machine shops, equipment fabricators, and contract manufacturers. The agent reads CAD blueprints and turns them into RFQ quotes. It reconciles supplier purchase orders and syncs both ways with NetSuite, SAP, Epicor, and Infor.
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
                    <span>Zero Data Retention SLA</span>
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
                      NetSuite ERP &bull. 42 RFQ Line Items Reconciled (0.8s)
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
                A manufacturing AI agent is software that connects directly to your ERP, such as NetSuite, SAP, Epicor, or Infor. It reads incoming RFQ packages from customers. It pulls the specs straight off CAD drawings and PDF prints. It checks your raw material stock and machine run times. Then it stages a draft quote or PO reconciliation in seconds, with a full audit trail, for a human to approve.
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
                  Quoting turnaround reduction
                </div>
                <a
                  href="https://www.paperlessparts.com/facts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-[10px] font-mono text-[#F05A28] hover:underline"
                >
                  Source: manufacturing quoting-automation data &rarr;
                </a>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-mono mb-1">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-[#6E655F]">
                  Client code & IP ownership
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#F05A28] font-mono mb-1">
                  &lt. 20 Min
                </div>
                <div className="text-xs sm:text-sm text-[#6E655F]">
                  Typical RFQ package assembly
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-mono mb-1">
                  $0
                </div>
                <div className="text-xs sm:text-sm text-[#6E655F]">
                  Per-seat recurring user tax
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
                      Fanuc, Haas &amp. Mazak Rate Matching
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
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Which ERP, MES, and Shop-Floor Systems We Connect To.</h2>
              <p className="text-lg text-[#46403B]">
                Every plant runs different software on the floor and in the back office. Here is exactly what we connect to today, and what each connection actually does.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-4">ERP &amp. Business Systems.</h3>
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
                <h3 className="text-lg font-bold text-[#14110F] mb-4">Shop-Floor, MES &amp. SCADA.</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed list-none">
                  <li><span className="font-bold text-[#14110F]">Siemens Opcenter</span>: manufacturing execution system (MES) data for work order status, genealogy, and production line changeovers.</li>
                  <li><span className="font-bold text-[#14110F]">Rockwell Automation</span> and <span className="font-bold text-[#14110F]">Allen-Bradley</span>: PLC and SCADA telemetry for machine state and downtime.</li>
                  <li><span className="font-bold text-[#14110F]">Ignition SCADA</span> and <span className="font-bold text-[#14110F]">Kepware</span>: OPC-UA and Modbus gateways for real-time machine data.</li>
                  <li><span className="font-bold text-[#14110F]">Wonderware</span>: historian and SCADA data for shift handover reporting.</li>
                  <li><span className="font-bold text-[#14110F]">Plex</span>, <span className="font-bold text-[#14110F]">IQMS</span> (DELMIAworks), and <span className="font-bold text-[#14110F]">MachineMetrics</span>: cloud MES and overall equipment effectiveness (OEE) data for scheduling agents.</li>
                  <li><span className="font-bold text-[#14110F]">Tulip</span>: frontline operations data for digital work instructions and quality control checks.</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-4">Sourcing, EDI &amp. Distributor APIs.</h3>
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

        {/* 10-POINT TECHNICAL ARCHITECTURE BLUEPRINT */}
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
                  title: 'Shop Floor Shift Handover Synthesis',
                  desc: 'The agent gathers machine telemetry, operator downtime notes, scrap counts, and open work orders from the shop floor. It turns all of it into one clean handover brief for the next shift supervisor.',
                },
                {
                  title: 'Zero-Data-Retention Security SLA',
                  desc: 'Your engineering IP and CAD files are never stored on a public AI model. Every request runs under a signed non-disclosure agreement.',
                },
                {
                  title: 'ITAR & CMMC Sovereign Cloud Deployment',
                  desc: 'Defense and aerospace suppliers get an extra layer of isolation. Their models run inside US-only AWS GovCloud or Azure Government, with access locked to US citizens.',
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
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">FactoryJet Custom AI vs. Generic SaaS Quoting Tools.</h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                Why enterprise manufacturers choose owned AI infrastructure over restrictive black-box SaaS software.
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
                      Generic SaaS Quoting Software
                    </th>
                    <th className="p-4 sm:p-6 font-bold text-[#6E655F]">
                      Manual Estimator Process
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7DED6]">
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Average RFQ Turnaround.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Under 20 Minutes
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">1 to 2 Business Days.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">3 to 7 Business Days.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">CAD & Drawing Parsing.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Direct Multi-Modal Vision + GD&T
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Basic Title Block Text Only.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Manual Caliper & Ruler Review.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">ERP Bi-Directional Sync.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Native NetSuite, SAP, Epicor API
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Manual CSV Import / Export.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Double Data Entry into ERP.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Software Licensing & Fees.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      100% Owned, $0 Per-Seat Fee
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">$500 - $1,500 / seat / month.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">$85k - $120k / estimator salary.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Proprietary Data Privacy.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Private VPC & Zero Data Retention
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Shared Multi-Tenant Cloud.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Internal Filesystem Only.</td>
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
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">Shop-Floor Operations Agent &rarr;.</h3>
                <p className="text-sm text-[#46403B]">
                  Shift handover drafting, CMMS maintenance triage, predictive maintenance alerts, and downtime reason telemetry.
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
                // AUTOMATE RFQS &bull. ZERO SEAT TAXES &bull. 100% CODE OWNERSHIP
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14110F] font-heading mb-6">
              Ready to Modernize Your Manufacturing Operations with Custom AI?
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
