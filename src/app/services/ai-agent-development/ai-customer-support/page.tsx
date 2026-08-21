import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import AiAgentRoiCalculator from '@/components/ai-agent/AiAgentRoiCalculator';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

/* ─────────────────────────────────────────────────────────────────────────────
   Freshness signal. Bumped 2026-08-21 for full PAGE-SPEC v2 rebuild.
───────────────────────────────────────────────────────────────────────────── */
const PAGE_MODIFIED = '2026-08-21';

export const metadata: Metadata = {
  title: 'AI Customer Support Agents for US Operations | FactoryJet',
  description:
    'Custom AI customer support agents for US brands that work inside Zendesk, Intercom, Freshdesk, Gorgias and HubSpot. Email, chat and SMS with human escalation.',
  keywords: [
    'ai customer support agents',
    'custom ai support agent usa',
    'zendesk ai agent integration',
    'intercom ai support development',
    'freshdesk ai automation',
    'gorgias ai agent development',
    'hubspot service hub ai agent',
    'ai helpdesk automation',
    'customer support ticket deflection',
    'ai customer service development company',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Customer Support Agents for US Operations | FactoryJet',
    description:
      'Custom AI support agents that resolve tickets in Zendesk, Intercom, Gorgias and HubSpot using live Shopify, ERP and carrier data. English and Spanish ready.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-customer-support',
    images: [
      {
        url: 'https://factoryjet.com/images/us/services/hero-ai-agent-us.webp',
        width: 1200,
        height: 800,
        alt: 'FactoryJet AI Customer Support Agent Development Services',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Customer Support Agents USA | FactoryJet',
    description:
      'Custom support agents wired into your existing helpdesk: Zendesk, Intercom, Freshdesk or Gorgias. Resolve routine inquiries in under 30 seconds.',
    images: ['https://factoryjet.com/images/us/services/hero-ai-agent-us.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-agent-development/ai-customer-support',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ Data (18 Answer-First items mapping to real search intent)
───────────────────────────────────────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'The basics' },
  { key: 'helpdesks', label: 'Helpdesks & integrations' },
  { key: 'channels', label: 'Channels & language' },
  { key: 'control', label: 'Control & escalation' },
  { key: 'implementation', label: 'Process & ownership' },
];

const FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'What is an AI customer support agent, and how does it work?',
    answer:
      'An AI customer support agent is software that receives an inbound support trigger (email, live chat or SMS), reads the relevant records from your store, CRM, billing and shipping APIs, decides the appropriate action against your written rules, and writes back the resolution. It looks up tracking, creates return labels, resends invoices, or answers policy questions, and hands complex edge cases to a human rep with a full summary.',
  },
  {
    category: 'basics',
    question: 'How is a custom AI support agent different from Zendesk AI or Intercom Fin?',
    answer:
      'Off-the-shelf products work well for standard FAQ deflection if you operate strictly within the vendor sandbox. Custom agent development is required when your support workflow must query external databases, proprietary ERPs, custom OMS, multi-carrier APIs, or enforce custom business rules that SaaS tools cannot execute.',
  },
  {
    category: 'basics',
    question: 'What is a typical deflection rate for an AI support agent?',
    answer:
      'DTC brands and B2B distributors typically achieve 65% to 75% resolution rates within 30 days of launch. Repetitive queries like order tracking, return eligibility checks, address changes, and invoice requests are resolved without human touch, freeing your team for complex exceptions.',
  },
  {
    category: 'basics',
    question: 'Does the agent actually take actions, or just generate text?',
    answer:
      'The agent takes typed actions via secure tool calling. It calls verified endpoints such as get_order_status, create_return_rma, resend_invoice_pdf, or update_shipping_address. Every action is constrained by JSON schema limits and requires authorization.',
  },
  {
    category: 'helpdesks',
    question: 'Which helpdesks do you integrate with?',
    answer:
      'We integrate natively with Zendesk, Intercom, Freshdesk, Gorgias, HubSpot Service Hub, Front, and Salesforce Service Cloud. The agent reads tickets, applies tags, updates custom fields, posts internal notes, and assigns queues without requiring your team to switch platforms.',
  },
  {
    category: 'helpdesks',
    question: 'Can the agent look up live orders and tracking from Shopify and carriers?',
    answer:
      'Yes. The agent connects to Shopify, WooCommerce, ShipStation, and direct carrier APIs including UPS, FedEx, and USPS. When a customer asks about their shipment, the agent queries the current tracking scan and answers with real-time status in seconds.',
  },
  {
    category: 'helpdesks',
    question: 'Can the agent pull invoices and receipts from QuickBooks or NetSuite?',
    answer:
      'Yes. For B2B portals and wholesale operations, the agent securely queries NetSuite, QuickBooks Online, or Sage Intacct to retrieve invoice PDFs and email them directly to verified account contacts.',
  },
  {
    category: 'helpdesks',
    question: 'How does the agent handle refunds and financial transactions?',
    answer:
      'Refunds are governed by hard numeric ceilings programmed directly into the tool layer. For instance, returns under $50 with verified tracking can auto-approve, while requests above that threshold or involving chargebacks are escalated to a manager for manual sign-off.',
  },
  {
    category: 'channels',
    question: 'Which customer channels can the support agent handle?',
    answer:
      'The agent supports email, website chat widgets, SMS (via Twilio), customer portals, and WhatsApp. One shared retrieval knowledge base feeds all channels so customers receive consistent answers regardless of how they reach out.',
  },
  {
    category: 'channels',
    question: 'Can the AI support customers in Spanish and other languages?',
    answer:
      'Yes. Multilingual support in English and Spanish is standard for US deployments. Language detection occurs per message, and when a Spanish conversation escalates, the internal handoff note is translated into English for your team.',
  },
  {
    category: 'channels',
    question: 'Can the agent send proactive notifications before a customer asks?',
    answer:
      'Yes. We build event-driven triggers that monitor carrier webhooks to notify customers of transit delays, payment receipt confirmations, or delivery updates before they open a support ticket.',
  },
  {
    category: 'control',
    question: 'What prevents the AI agent from hallucinating or giving wrong advice?',
    answer:
      'The agent utilizes Retrieval Augmented Generation (RAG) restricted strictly to your verified policy documents, SOPs, and product specifications. If a query falls outside the knowledge base or confidence falls below the set threshold, it escalates rather than guessing.',
  },
  {
    category: 'control',
    question: 'How does human escalation work when the AI is uncertain?',
    answer:
      'When an issue requires human judgment, the agent assigns the ticket to the appropriate queue in your helpdesk, attaches an internal note summarizing the customer intent and steps taken, and leaves the draft response ready for review.',
  },
  {
    category: 'control',
    question: 'Is our customer data secure and compliant with US regulations?',
    answer:
      'Yes. All system connections use scoped OAuth service accounts with minimum required permissions. Data handling aligns with CCPA and CPRA guidelines, and healthcare implementations follow strict HIPAA data de-identification protocols.',
  },
  {
    category: 'implementation',
    question: 'How long does it take to build and deploy a custom support agent?',
    answer:
      'A standard single-helpdesk support agent deployment takes 2 to 4 weeks. This includes audit of past tickets, knowledge base ingestion, API integration, evaluation suite testing, and shadow-mode validation.',
  },
  {
    category: 'implementation',
    question: 'What is shadow mode, and why is it used at launch?',
    answer:
      'In shadow mode, the agent processes live inbound tickets and drafts proposed replies and actions, but routes them to your human team for one-click approval before sending. This allows you to verify accuracy and refine edge cases before giving the agent full autonomy.',
  },
  {
    category: 'implementation',
    question: 'Do we own the code and prompts after the build?',
    answer:
      'Yes. You own the code repository, custom MCP connectors, prompt templates, and evaluation datasets. There are no proprietary software runtime locks or ongoing per-resolution fees paid to us.',
  },
  {
    category: 'implementation',
    question: 'How do we update the knowledge base when policies or products change?',
    answer:
      'We provide an administrative sync dashboard where your team can upload updated policy documents, FAQ sheets, or product manuals, which re-index automatically without requiring engineering changes.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schemas
───────────────────────────────────────────────────────────────────────────── */
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-customer-support#service',
  serviceType: 'AI customer support agent development',
  name: 'Custom AI Customer Support Agent Development',
  description:
    'Custom AI customer support agent design, development and implementation for US operations teams. Native integrations for Zendesk, Intercom, Freshdesk, Gorgias, HubSpot, Shopify, NetSuite, and multi-carrier shipping APIs.',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'BusinessAudience',
    name: 'US DTC brands, B2B distributors, and mid-market operations teams',
  },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-customer-support#webpage',
  url: 'https://factoryjet.com/services/ai-agent-development/ai-customer-support',
  name: 'AI Customer Support Agents for US Operations | FactoryJet',
  description:
    'Custom AI support agents that resolve routine inquiries in Zendesk, Intercom, Gorgias and HubSpot with live order and billing lookups.',
  dateModified: PAGE_MODIFIED,
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
};

const BREADCRUMB_ITEMS = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
  { name: 'AI Customer Support', url: 'https://factoryjet.com/services/ai-agent-development/ai-customer-support' },
];

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BREADCRUMB_ITEMS.map((b, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: b.name,
    item: b.url,
  })),
};

const STATS = [
  { b: '70%+', s: 'routine ticket deflection across email, chat and SMS' },
  { b: '< 30s', s: 'average first response time around the clock' },
  { b: 'Your helpdesk', s: 'Zendesk, Intercom, Gorgias, Freshdesk & HubSpot' },
  { b: 'Full ownership', s: 'you own the code, connectors and cloud accounts' },
];

const SOURCED_STATS = [
  {
    v: '2.8M',
    d: 'customer service representatives are currently employed in the US, with operations teams facing rising turnover and training costs.',
    src: 'Bureau of Labor Statistics / O*NET',
    href: 'https://www.onetonline.org/link/summary/43-4051.00',
  },
  {
    v: '73%',
    d: 'of consumers point to customer experience as a key factor in their purchasing decisions, where response speed directly impacts retention.',
    src: 'PwC Customer Experience Survey',
    href: 'https://www.pwc.com/us/en/services/consulting/business-transformation/library/consumer-intelligence-series/future-of-customer-experience.html',
  },
  {
    v: '16.9%',
    d: 'of all US retail commerce is conducted online, creating massive post-purchase query volume across shipping, returns and order tracking.',
    src: 'US Census Bureau, Q1 2026',
    href: 'https://www.census.gov/retail/ecommerce.html',
  },
];

const CAPABILITIES = [
  {
    t: 'Live Order & Carrier Tracking',
    d: 'Queries Shopify, ShipStation, UPS, FedEx and USPS in real time to provide exact transit scans and delivery estimates in under 5 seconds.',
  },
  {
    t: 'Automated Returns & RMA Processing',
    d: 'Enforces your return policies, verifies eligibility windows, issues return merchandise authorizations (RMAs) and emails prepaid shipping labels.',
  },
  {
    t: 'B2B Invoice & Receipt Retrieval',
    d: 'Securely looks up accounting records in NetSuite, QuickBooks Online or Stripe to resend invoices, receipts and payment confirmations.',
  },
  {
    t: 'Helpdesk Queue Management & Triage',
    d: 'Reads incoming inquiries, assigns custom priority tags, routes tickets to appropriate internal teams, and posts internal action summaries.',
  },
  {
    t: 'Multilingual Support (EN & ES)',
    d: 'Detects customer language automatically and responds fluently in English and Spanish, translating escalation notes for your team.',
  },
  {
    t: 'Proactive Event Notifications',
    d: 'Monitors webhooks for shipping delays or order exceptions to notify customers proactively before they need to contact support.',
  },
];

const INDUSTRIES = [
  {
    name: 'DTC E-Commerce & Retail',
    desc: 'Handles high-volume where-is-my-order tickets, return label generation, exchange workflows, and product compatibility questions on Shopify and WooCommerce.',
  },
  {
    name: 'B2B Wholesale & Distribution',
    desc: 'Provides dealer portal support for stock availability checks, custom contract pricing, order status, and instant invoice PDF downloads from NetSuite or QuickBooks.',
  },
  {
    name: 'Financial Services & Fintech',
    desc: 'Assists with account status inquiries, payment schedule queries, receipt generation, and document checklist verification built under strict CCPA data guidelines.',
  },
  {
    name: 'Healthcare & Medical Practices',
    desc: 'Manages appointment rescheduling, clinic directions, preparation checklists, and intake routing with HIPAA-compliant data separation.',
  },
  {
    name: 'Real Estate & Property Management',
    desc: 'Answers maintenance requests, tenant lease timeline queries, document verification, and tour scheduling across web chat and SMS.',
  },
  {
    name: 'SaaS & Subscription Businesses',
    desc: 'Resolves subscription tier changes, billing inquiries, invoice downloads, seat management, and onboarding walkthroughs directly in HubSpot or Intercom.',
  },
];

const STEPS = [
  {
    n: '01',
    t: 'Support Queue Audit',
    d: 'We analyze your 100 most frequent ticket types to identify routine queries for full automation versus edge cases requiring human review.',
  },
  {
    n: '02',
    t: 'RAG Knowledge Base Ingestion',
    d: 'We convert your policies, SOPs, FAQs and past resolved tickets into a structured vector database with strict citation boundaries.',
  },
  {
    n: '03',
    t: 'Tool Layer & API Connectors',
    d: 'We build typed function-calling tools into your helpdesk, store backend, ERP and carrier accounts with strict permission controls.',
  },
  {
    n: '04',
    t: 'Evaluation Suite & Shadow Mode',
    d: 'We benchmark the agent against 200+ historical cases, then launch in shadow mode where your team reviews drafts before live autonomy.',
  },
  {
    n: '05',
    t: 'Production Deployment & Monitoring',
    d: 'Full rollout with real-time analytics, deflection dashboards, escalation alerts, and weekly accuracy optimization reviews.',
  },
];

export default function AICustomerSupportPage() {
  return (
    <>
      <script id="support-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="support-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="support-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="support-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* Hero Section */}
        <section className="pp-dotgrid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(40px,5vh,72px)', paddingBottom: 'clamp(44px,6vh,84px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">AI customer support agents // US operations</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '19ch' }}>
                  Resolve 70% of support tickets <span className="pp-grad">inside your helpdesk</span>.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '52ch' }}>
                  FactoryJet builds custom AI support agents for US operations teams. We connect your store, carrier APIs, billing and helpdesk into an autonomous agent that resolves routine inquiries in under 30 seconds with human approval where it counts.
                </p>
                <HeroInlineForm source="us_ai_customer_support_hero" region="us" submitLabel="Scope your support agent" />
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/us/services/hero-ai-agent-us.webp"
                  alt="Operations team reviewing an AI customer support agent dashboard"
                  width={600}
                  height={400}
                  priority
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Answer-First Definitional Section */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the short answer'}</p>
            <h2 style={{ marginTop: '10px' }}>What is an AI customer support agent?</h2>
            <p className="pp-lead" style={{ marginTop: '16px', maxWidth: '74ch' }}>
              An AI customer support agent is autonomous software engineered to resolve customer inquiries end to end. Unlike simple scripted chatbots that only match keywords or suggest canned articles, an AI support agent integrates directly with your system of record: querying order records, checking live carrier tracking, initiating return merchandise authorizations, and generating invoice PDFs.
            </p>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '74ch' }}>
              The agent operates natively within your existing helpdesk (Zendesk, Intercom, Gorgias, Freshdesk or HubSpot). It handles 65% to 75% of routine ticket volume around the clock and escalates complex requests with complete context to your human team.
            </p>
            <ul className="pp-stats" style={{ marginTop: '28px', listStyle: 'none', padding: 0 }}>
              {STATS.map((s) => (
                <li className="pp-stat" key={s.b}><b>{s.b}</b><span>{s.s}</span></li>
              ))}
            </ul>
          </div>
        </section>

        {/* Sourced Statistics Band */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// market evidence'}</p>
            <h2 style={{ marginTop: '10px' }}>The economics of automated customer support</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {SOURCED_STATS.map((stat) => (
                <div key={stat.v} className="pp-card" style={{ padding: '24px' }}>
                  <p className="font-fj-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4vw, 3rem)', color: 'var(--pp-orange)', lineHeight: 1 }}>
                    {stat.v}
                  </p>
                  <p className="mt-3 font-fj-body text-[0.9375rem] leading-[1.5] text-fj-neutral-600">
                    {stat.d}
                  </p>
                  <a
                    href={stat.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="mt-3 inline-block font-fj-mono text-[0.75rem] text-[#B23E13] underline underline-offset-2 hover:no-underline"
                  >
                    Source: {stat.src} ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive ROI Calculator Section */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <AiAgentRoiCalculator defaultWorkflow="support" source="ai_customer_support_page" />
          </div>
        </section>

        {/* Capabilities Bento Grid */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// capabilities'}</p>
            <h2 style={{ marginTop: '10px' }}>What your AI customer support agent handles</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              Built for real operations teams. Every action is executed through verified APIs with strict boundary controls.
            </p>
            <div className="pp-bento" style={{ marginTop: '32px' }}>
              {CAPABILITIES.map((cap) => (
                <div className="pp-card" key={cap.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{cap.t}</h3>
                  <p className="mt-2">{cap.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Use-Cases */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// industry workflows'}</p>
            <h2 style={{ marginTop: '10px' }}>Tailored to your specific support workflows</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {INDUSTRIES.map((ind) => (
                <div key={ind.name} className="pp-card" style={{ backgroundColor: '#FFFFFF' }}>
                  <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>{ind.name}</h3>
                  <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// comparison'}</p>
            <h2 style={{ marginTop: '10px' }}>Custom AI support agent vs. traditional alternatives</h2>
            <div style={{ marginTop: '28px', overflowX: 'auto' }}>
              <table className="pp-table" style={{ width: '100%', minWidth: '640px' }}>
                <thead>
                  <tr>
                    <th>Capability</th>
                    <th className="me">FactoryJet Custom Agent</th>
                    <th>In-House Support Team</th>
                    <th>Generic SaaS Helpdesk Bot</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td><strong>Cost Model</strong></td>
                    <td><strong>Fixed implementation build</strong></td>
                    <td>Salary, benefits and turnover costs</td>
                    <td>Monthly per-seat or per-resolution fee</td>
                  </tr>
                  <tr>
                    <td><strong>Live ERP &amp; Tracking Actions</strong></td>
                    <td>Yes (Shopify, NetSuite, UPS, FedEx)</td>
                    <td>Manual lookup per ticket (3-8 mins)</td>
                    <td>Limited to basic vendor plugins</td>
                  </tr>
                  <tr>
                    <td><strong>24/7/365 Instant Response</strong></td>
                    <td>Yes (&lt; 30 seconds average)</td>
                    <td>Requires night &amp; weekend shifts</td>
                    <td>Yes (canned article links)</td>
                  </tr>
                  <tr>
                    <td><strong>Bilingual (English &amp; Spanish)</strong></td>
                    <td>Yes (automatic per-message detection)</td>
                    <td>Requires bilingual staff</td>
                    <td>Requires translation add-on</td>
                  </tr>
                  <tr>
                    <td><strong>Code &amp; Knowledge Ownership</strong></td>
                    <td>Yes (you own repo &amp; prompts)</td>
                    <td>Internal SOPs</td>
                    <td>Locked in vendor ecosystem</td>
                  </tr>
                  <tr>
                    <td><strong>Human Escalation with Summary</strong></td>
                    <td>Yes (transcripts + context note)</td>
                    <td>Manual warm transfers</td>
                    <td>Basic ticket pass-through</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Implementation Journey */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// implementation process'}</p>
            <h2 style={{ marginTop: '10px' }}>From support audit to live deflection in 3 weeks</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
              {STEPS.map((step) => (
                <div key={step.n} className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                  <span className="font-fj-mono font-bold text-[#B23E13]" style={{ fontSize: '13px' }}>{step.n}</span>
                  <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>{step.t}</h3>
                  <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Proof / Testimonials */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// verified proof'}</p>
            <h2 style={{ marginTop: '10px' }}>Built for real brands with real queues</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pp-card" style={{ padding: '28px' }}>
                <p className="font-fj-body text-[1rem] leading-relaxed text-fj-neutral-700 italic">
                  &ldquo;Automating our routine order tracking and return inquiries allowed our team to handle peak season volume without adding temporary support staff. Customers get immediate answers, and our escalation queue stays clean.&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <Image
                    src="/images/testimonials/ricky-belle-maison-160.webp"
                    alt="Ricky B, Founder at Belle Maison"
                    width={48}
                    height={48}
                    className="rounded-full border border-fj-neutral-200"
                  />
                  <div>
                    <p className="font-fj-body font-bold text-fj-ink">Ricky B.</p>
                    <p className="font-fj-mono text-[11px] text-fj-neutral-400">Founder, Belle Maison (DTC Home Goods)</p>
                  </div>
                </div>
              </div>

              <div className="pp-card" style={{ padding: '28px' }}>
                <p className="font-fj-body text-[1rem] leading-relaxed text-fj-neutral-700 italic">
                  &ldquo;Trade buyers used to call and email constantly asking for invoice copies, payment confirmations, and delivery updates. The AI agent resolves those instantly from our ERP, saving our account managers hours every day.&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <Image
                    src="/images/testimonials/vishal-impulse-branding-160.webp"
                    alt="Vishal K, Managing Director at Impulse Branding"
                    width={48}
                    height={48}
                    className="rounded-full border border-fj-neutral-200"
                  />
                  <div>
                    <p className="font-fj-body font-bold text-fj-ink">Vishal K.</p>
                    <p className="font-fj-mono text-[11px] text-fj-neutral-400">Managing Director, Impulse Branding (B2B Distribution)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Questions operations leaders ask before deploying support AI"
          lead="Everything you need to know about architecture, helpdesk integrations, safety guardrails and ownership."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* Final CTA */}
        <FinalCTA
          eyebrow="READY TO AUTOMATE YOUR SUPPORT QUEUE?"
          headline="Scope your AI customer support agent today."
          sub="Book a 30-minute scoping call with our engineering team. We will map your ticket volume, audit your workflows, and provide a fixed-price implementation blueprint."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'View AI Agent Overview', href: '/services/ai-agent-development' }}
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
