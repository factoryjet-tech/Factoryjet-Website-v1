import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ, { type FAQCategory, type FAQItem } from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import AiAgentRoiCalculator from '@/components/ai-agent/AiAgentRoiCalculator';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

const CANONICAL_URL = 'https://factoryjet.com/tools/ai-agent-roi-calculator';
const PAGE_TITLE = 'AI Agent ROI Calculator & Cost Estimator | FactoryJet';
const PAGE_DESC =
  'Calculate custom AI agent development ROI, ticket deflection, labor savings, and token compute payback periods for your US business. Try the calculator.';
const PAGE_MODIFIED = '2026-09-01';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'ai agent cost calculator',
    'cost to build ai agent',
    'ai automation roi',
    'ai agent development cost',
    'ai customer support roi calculator',
    'custom ai agent pricing',
    'ai sdr roi estimator',
    'netsuite ai agent savings',
  ],
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: 'AI Agent Cost & ROI Calculator 2026 | FactoryJet',
    description:
      'Model custom AI agent development payback, automated ticket deflection, and net labor cost reduction across Zendesk, HubSpot, NetSuite, and Shopify.',
    url: CANONICAL_URL,
    siteName: 'FactoryJet',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet AI Agent Cost and ROI Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agent Cost & ROI Calculator 2026 | FactoryJet',
    description:
      'Calculate custom AI agent development payback periods, labor savings, and monthly run costs with our interactive model.',
    images: ['https://factoryjet.com/og-default.png'],
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

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'roi', label: 'ROI & Payback Formula' },
  { key: 'costs', label: 'Development & Compute Costs' },
  { key: 'accuracy', label: 'Accuracy & Deflection Rates' },
  { key: 'ownership', label: 'Code Ownership & Infrastructure' },
  { key: 'usage', label: 'How This Calculator Works' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'roi',
    question: 'How do you calculate the return on investment for an AI agent?',
    answer:
      'AI agent ROI is calculated by multiplying monthly task volume by average minutes saved per task and fully loaded human labor rates, subtracting recurring LLM token compute and server hosting costs, and dividing net annual savings by initial one-time milestone development fees.',
  },
  {
    category: 'roi',
    question: 'What is the typical payback period for custom AI agent development?',
    answer:
      'For mid-market US teams processing 2,000 or more monthly customer inquiries, sales leads, or back-office transactions, the payback period typically ranges between 2.5 and 5 months from production deployment. Lower-volume teams still see positive ROI, just over a longer horizon, since the fixed development cost is spread across fewer monthly transactions each covering a smaller share of the total investment.',
  },
  {
    category: 'roi',
    question: 'How do labor cost offsets scale as ticket volume grows?',
    answer:
      'Unlike human staffing, which requires linear headcount additions and benefits overhead as volume expands, an AI agent handles 5x to 10x spikes in transaction volume with nominal increases in token compute costs. A seasonal surge that would normally require temporary hires and weeks of onboarding instead just increases your monthly token bill, with no ramp-up time and no drop in resolution quality.',
  },
  {
    category: 'roi',
    question: 'What qualitative business benefits are excluded from this calculator?',
    answer:
      'This model deliberately excludes indirect revenue gains such as 24/7 sub-minute response times, reduced customer churn, higher conversion rates on instant lead follow-ups, and improved employee retention resulting from removing repetitive data entry. We keep the calculator conservative on purpose, so the payback figure it shows you is a floor built on hard labor-cost math, not an optimistic number inflated by soft benefits.',
  },
  {
    category: 'costs',
    question: 'What are the recurring token compute costs for running an AI agent in production?',
    answer:
      "For standard customer support and lead qualification workflows using frontier models behind semantic caching, token costs typically average between $0.02 and $0.07 per resolved conversation thread. Semantic caching reuses the model's reasoning for repeated question patterns instead of paying full token cost on every single conversation, which is what keeps per-ticket compute cost well under a dollar even at high volume.",
  },
  {
    category: 'costs',
    question: 'Why build a custom AI agent instead of subscribing to a per-seat SaaS bot?',
    answer:
      'Per-seat SaaS vendors charge $50 to $150 per agent per month plus per-resolution surcharges that escalate rapidly as volume grows. Custom builds require zero per-seat software licenses, connect directly to private databases, and remain 100 percent owned by your company.',
  },
  {
    category: 'costs',
    question: 'How does FactoryJet structure development fees for custom AI agents?',
    answer:
      'We scope projects under transparent, fixed milestone pricing based on system integration complexity, custom tool calling logic, and evaluation datasets, rather than unpredictable open-ended hourly billing. You know the total project cost before development begins, and scope changes mid-build are quoted separately rather than silently expanding your existing fixed price.',
  },
  {
    category: 'costs',
    question: 'Are there ongoing maintenance and monitoring fees after deployment?',
    answer:
      'Following launch and initial warranty verification, we offer optional monthly engineering retainers for prompt tuning, model version upgrades, API connector maintenance, and new workflow expansion. The retainer is entirely optional. Your internal team, or ours on a project basis, can maintain the agent independently since you own the complete codebase and documentation from day one.',
  },
  {
    category: 'accuracy',
    question: 'What automated ticket deflection rate can we realistically expect?',
    answer:
      'Realistic production deflection rates range from 65 percent to 80 percent for structured customer support and RMA queues. Unrealistic claims of 99 percent automation often indicate lack of human escalation safety boundaries. A vendor promising near-total automation is usually either measuring a narrow, cherry-picked ticket category or has not built the guardrails that route ambiguous cases to a human.',
  },
  {
    category: 'accuracy',
    question: 'How do you prevent costly hallucinations and incorrect tool calls?',
    answer:
      'We implement strict JSON schema validation, transaction caps, allow-listed database update scopes, and automated human-in-the-loop escalation triggers for low-confidence or ambiguous requests. These guardrails sit at the code execution layer rather than in prompt instructions alone, so a refund above your defined dollar cap physically cannot be issued without a human approving it first, regardless of what the model outputs.',
  },
  {
    category: 'accuracy',
    question: 'How is agent accuracy measured before going live to real customers?',
    answer:
      'We run automated regression evaluation suites against 500 or more historical customer service tickets or transaction transcripts, verifying precision, recall, and tool calling correctness prior to deployment. The agent must clear your defined accuracy threshold on this benchmark before any live customer traffic reaches it, and we re-run the suite after every prompt or connector update.',
  },
  {
    category: 'accuracy',
    question: 'Can the AI agent handle complex edge cases and angry customers?',
    answer:
      'Yes. Sentiment analysis and rule-based escalation triggers immediately route agitated customers or edge cases to senior human representatives in Zendesk, Slack, or Freshdesk with an AI-generated situation summary. The human agent receives the full conversation context and a suggested resolution path already prepared, so they pick up where the agent left off instead of starting the case cold.',
  },
  {
    category: 'ownership',
    question: 'Who owns the code, prompts, and connectors built during the project?',
    answer:
      "Your organization owns 100 percent of the Git repository, custom Model Context Protocol connectors, orchestration code, prompt architectures, and evaluation suites with zero proprietary runtime lock-in. If you ever choose to bring development in-house or switch vendors, everything we built transfers with full documentation and no dependency on FactoryJet's own infrastructure to keep running.",
  },
  {
    category: 'ownership',
    question: 'Where is the AI agent hosted and how is customer data protected?',
    answer:
      'Agents deploy inside your own AWS, Google Cloud, or Microsoft Azure private cloud infrastructure using zero-data-retention enterprise API endpoints, ensuring proprietary data never trains external public models. Your customer records, order data, and conversation logs stay inside infrastructure your own security team controls and audits, not a shared multi-tenant vendor database you cannot inspect.',
  },
  {
    category: 'ownership',
    question: 'Which enterprise systems can the AI agent connect to?',
    answer:
      'We build bi-directional connectors for Zendesk, Gorgias, Intercom, Freshdesk, HubSpot, Salesforce, NetSuite, Dynamics 365, Shopify Plus, and custom SQL databases. If your stack includes a system not listed here, we scope a custom REST or GraphQL connector during discovery rather than telling you the platform is unsupported, provided it exposes a documented API.',
  },
  {
    category: 'ownership',
    question: 'How do we schedule an AI agent architectural review and custom ROI audit?',
    answer:
      'You can schedule a direct 30-minute scoping session with founder Bhavesh Barot. We will analyze your monthly ticket volume, current help desk software, and deliver a custom ROI and feasibility roadmap. You leave the call with a real payback estimate built from your own numbers, not the general assumptions this calculator uses as a starting benchmark.',
  },
  {
    category: 'usage',
    question: 'What inputs do I need to enter to get an accurate estimate from this calculator?',
    answer:
      'You select a target workflow (support, sales, back-office, or catalog operations), pick your primary system of record from a list of nine common help desk, CRM, and ERP platforms, then set your monthly task volume and fully loaded hourly labor rate on two sliders. The model recalculates net savings, hours recovered, and payback period live as you adjust any input.',
  },
  {
    category: 'usage',
    question: 'How accurate is the number the calculator shows me?',
    answer:
      'The output is a directional planning estimate, not a fixed quote. Deflection rates, average minutes saved, and development cost are set per workflow from benchmarks across projects we have shipped, and token compute is priced from real production usage. Your actual numbers depend on your specific ticket mix and system complexity, which is exactly what a scoping call with founder Bhavesh Barot validates before you get a firm price.',
  },
  {
    category: 'usage',
    question: 'Are the dollar figures the calculator shows me a guaranteed price?',
    answer:
      'No. The net savings and payback figures are a modeled estimate based on the workflow, volume, and rate you select, using a fixed per-workflow development cost benchmark and a flat token compute rate of $0.045 per resolved task plus base infrastructure. Your actual development fee is confirmed as a fixed milestone price only after we review your specific systems and ticket categories on a scoping call.',
  },
  {
    category: 'usage',
    question: 'What happens after I submit the calculator form on this page?',
    answer:
      'Submitting the form sends your name, email, company, and calculated workflow numbers directly to founder Bhavesh Barot, not a sales queue. You see an on-screen confirmation immediately, and Bhavesh personally reviews your inputs and emails a detailed implementation breakdown within 24 hours, along with a link to book a 30-minute discovery call if you want to talk through the numbers live.',
  },
  {
    category: 'usage',
    question: 'Where do the token compute and labor-cost numbers in this calculator come from?',
    answer:
      "Token compute is modeled at $0.045 per resolved task plus a small fixed monthly infrastructure cost, reflecting real production frontier-model pricing behind semantic caching. The hourly labor rate defaults to $28, a commonly cited US fully loaded support and sales rep cost, but you can move the slider from $15 to $75 to match your own team's actual loaded rate before reading the results.",
  },
];

export default function AiAgentRoiCalculatorPage() {
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

  const schemaWebApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AI Agent Cost & ROI Calculator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description:
      'Interactive calculator modeling custom AI agent development costs, labor savings, monthly token compute, ticket deflection rates, and net payback periods for US businesses.',
    dateModified: `${PAGE_MODIFIED}T00:00:00Z`,
    author: {
      '@type': 'Person',
      name: 'Bhavesh Barot',
      url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      jobTitle: 'Founder, FactoryJet',
    },
  };

  const schemaBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
      { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://factoryjet.com/services' },
      { '@type': 'ListItem', position: 3, name: 'AI Agent ROI Calculator', item: CANONICAL_URL },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <SiteHeader locale="us" />

      <main className="min-h-screen bg-white text-[#14110F]">
        {/* HERO SECTION WITH EMBEDDED CALCULATOR */}
        <section className="relative pt-32 pb-20 border-b border-[#E7DED6] bg-[#FFFFFF] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#E7DED6_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8F5] border border-[#F05A28]/30 mb-6">
                <span className="font-mono text-xs text-[#F05A28] font-bold tracking-wide">
                  // INTERACTIVE FINANCIAL MODEL &bull; 2026 US BENCHMARKS
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14110F] font-heading leading-tight mb-6">
                AI Agent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F05A28] to-[#C94A1A]">Cost &amp; ROI Calculator</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#46403B] leading-relaxed max-w-3xl mx-auto">
                Model custom AI agent development payback, automated ticket deflection, and net labor cost reduction across Zendesk, HubSpot, NetSuite, and Shopify.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 text-xs font-mono text-[#6E655F]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                  <span>65% - 85% Deflection</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                  <span>3 to 6 Month Capital Payback</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                  <span>100% Client Code Ownership</span>
                </div>
              </div>
            </div>

            {/* THE VISUALLY STUNNING INTERACTIVE CALCULATOR */}
            <div className="max-w-5xl mx-auto">
              <AiAgentRoiCalculator />
            </div>
          </div>
        </section>

        {/* ANSWER-FIRST DIRECT DEFINITION BLOCK (AEO & GEO OPTIMIZED) */}
        <section className="py-12 bg-[#FFF8F5] border-b border-[#E7DED6]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[#F05A28]/30 bg-white p-6 sm:p-8 shadow-sm">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // EXECUTIVE DEFINITION &amp; ROI METHODOLOGY
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#14110F] font-heading mb-4">
                How AI Agent Return on Investment is Calculated
              </h2>
              <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-4">
                AI agent return on investment measures net operating cost reductions and revenue acceleration generated by autonomous agent workflows relative to custom engineering and token compute costs. For mid-market US brands, production customer support and sales agents typically achieve full capital payback within 90 to 180 days by automating 60% to 80% of routine workflows.
              </p>
              <div className="p-4 rounded-xl bg-[#FAFAF7] border border-[#E7DED6] text-xs font-mono text-[#14110F]">
                <code>Net Annual Savings = (Monthly Volume &times; Deflection Rate &times; Mins Saved / 60 &times; Hourly Rate &times; 12) - Annual Token Compute Cost</code>
              </div>
            </div>
          </div>
        </section>

        {/* VERIFIED INDUSTRY FINANCIAL BENCHMARKS */}
        <section className="py-16 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // VERIFIED RESEARCH BENCHMARKS
              </div>
              <h2 className="text-3xl font-extrabold text-[#14110F] font-heading">
                Third-Party AI Economics &amp; Unit Cost Benchmarks
              </h2>
              <p className="text-base sm:text-lg text-[#46403B] mt-3">
                Authoritative research on autonomous agent unit economics, deflection ratios, and labor productivity gains.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  60-80%
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Ticket Resolution Autonomy
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Autonomous agents resolve Tier-1 customer support requests without human agent intervention across retail and B2B sectors.
                </p>
                <div className="text-xs font-mono text-[#6E655F]">
                  Source: Gartner Customer Service &amp; Support Research
                </div>
              </li>

              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  7x
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Lead Qualification Speed Advantage
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Contacting an inbound sales inquiry within the first hour makes a company nearly 7 times more likely to qualify that lead than waiting even one hour longer.
                </p>
                <div className="text-xs font-mono text-[#6E655F]">
                  Source: Harvard Business Review, &ldquo;The Short Life of Online Sales Leads&rdquo; (2011)
                </div>
              </li>

              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  72%
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Lower Cost per Customer Interaction
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  AI-first customer contact routing reduces cost per resolution from $6.50 (live human rep) to under $0.45 per automated session.
                </p>
                <div className="text-xs font-mono text-[#6E655F]">
                  Source: McKinsey &amp; Company GenAI Economic Analysis
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* 4 WORKFLOW ARCHITECTURES & UNIT ECONOMICS */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // ENTERPRISE WORKFLOW BREAKDOWN
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                Unit Economics Across Primary AI Agent Workflows
              </h2>
              <p className="text-lg text-[#46403B]">
                How autonomous agent state machines convert manual administrative queues into automated, profitable operations.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#F05A28] font-bold uppercase">WORKFLOW 01</span>
                  <span className="text-xs font-mono bg-[#FFF8F5] text-[#F05A28] px-2.5 py-1 rounded-full border border-[#F05A28]/20 font-bold">
                    65% - 80% Deflection
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Customer Support &amp; Ticket Resolution Agents
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Connects directly to Zendesk, Gorgias, Freshdesk, or Intercom. Validates order numbers via Shopify or ERP APIs, checks tracking status with carriers, processes return authorizations (RMAs), and handles address changes without human intervention.
                </p>
                <div className="pt-4 border-t border-[#E7DED6] flex items-center justify-between text-xs font-mono text-[#6E655F]">
                  <span>Average Time Saved: 8 to 10 mins/ticket</span>
                  <span className="font-bold text-[#14110F]">Payback: 2 to 4 Months</span>
                </div>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#F05A28] font-bold uppercase">WORKFLOW 02</span>
                  <span className="text-xs font-mono bg-[#FFF8F5] text-[#F05A28] px-2.5 py-1 rounded-full border border-[#F05A28]/20 font-bold">
                    Sub-30s Speed to Lead
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Inbound Sales SDR &amp; Lead Qualification Agents
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Responds to inbound website inquiries, demo requests, and pricing forms in seconds. Enriches firmographic data from Clearbit or Apollo, scores prospective accounts, and books meetings directly into rep calendars in HubSpot or Salesforce.
                </p>
                <div className="pt-4 border-t border-[#E7DED6] flex items-center justify-between text-xs font-mono text-[#6E655F]">
                  <span>Conversion Lift: +20% to +35%</span>
                  <span className="font-bold text-[#14110F]">Payback: 1 to 3 Months</span>
                </div>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#F05A28] font-bold uppercase">WORKFLOW 03</span>
                  <span className="text-xs font-mono bg-[#FFF8F5] text-[#F05A28] px-2.5 py-1 rounded-full border border-[#F05A28]/20 font-bold">
                    75% - 85% Automation
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Back-Office Invoice &amp; PO Reconciliation Agents
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Extracts vendor bills and customer purchase orders from email attachments. Performs three-way matching against open POs and warehouse receiving logs in NetSuite, SAP, or QuickBooks, staging clean transactions for one-click controller approval.
                </p>
                <div className="pt-4 border-t border-[#E7DED6] flex items-center justify-between text-xs font-mono text-[#6E655F]">
                  <span>Average Time Saved: 15 mins/invoice</span>
                  <span className="font-bold text-[#14110F]">Payback: 3 to 5 Months</span>
                </div>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#F05A28] font-bold uppercase">WORKFLOW 04</span>
                  <span className="text-xs font-mono bg-[#FFF8F5] text-[#F05A28] px-2.5 py-1 rounded-full border border-[#F05A28]/20 font-bold">
                    10x Inventory Sync Speed
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Omnichannel Catalog &amp; Inventory Sync Agents
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Reconciles product listings, stock balances, and tiered B2B pricing matrices across Shopify Plus, Amazon Seller Central, TikTok Shop, and wholesale distributor portals, preventing overselling and manual spreadsheet updates.
                </p>
                <div className="pt-4 border-t border-[#E7DED6] flex items-center justify-between text-xs font-mono text-[#6E655F]">
                  <span>Error Reduction: 99.4%</span>
                  <span className="font-bold text-[#14110F]">Payback: 2 to 4 Months</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* COMPARISON MATRIX: CUSTOM AI VS GENERIC SAAS BOTS VS OFFSHORING */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // FINANCIAL MODEL COMPARISON
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                FactoryJet Custom AI vs. Generic SaaS Bots vs. Human Staff
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                Why building owned agentic infrastructure yields superior unit economics over per-seat software licensing taxes.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#E7DED6] bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#E7DED6] bg-[#FFF8F5]">
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">Capability / Metric</th>
                    <th className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      FactoryJet Custom AI Agent
                    </th>
                    <th className="p-4 sm:p-6 font-bold text-[#6E655F]">
                      Generic SaaS Support Bot
                    </th>
                    <th className="p-4 sm:p-6 font-bold text-[#6E655F]">
                      Offshore Call Center BPO
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7DED6]">
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Software &amp; IP Ownership</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      100% Client Owned (Your Cloud)
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Proprietary Vendor Lock-in</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Zero Capital Assets Built</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Pricing Structure</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Fixed Milestone Scope, $0 Seat Fee
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">$60 - $150 / seat / mo + usage</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">$2,800 - $4,500 / agent / mo</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Direct Tool Execution</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Native Read/Write APIs (Shopify, ERP, CRM)
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Read-only FAQ retrieval</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Manual Human Data Entry</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Token / Compute Cost</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Wholesale At-Cost (~$0.04 / ticket)
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">$0.99 per resolution surcharge</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">$18 - $35 / labor hour</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Data Privacy &amp; VPC</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Zero Data Retention, Private VPC
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Multi-tenant shared cloud</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Human Agent Turnover Risk</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* TEAM & FOUNDER LEADERSHIP SECTION */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-[#E7DED6] bg-white p-4 shadow-md max-w-md mx-auto">
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
                  // DIRECT ARCHITECTURE LEADERSHIP
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-6">
                  Schedule a 30-Minute Custom ROI &amp; Feasibility Scoping Review
                </h2>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-6">
                  Financial models are only as good as the underlying integration architecture. At FactoryJet, founder Bhavesh Barot personally leads every initial ROI review and feasibility scoping session. We analyze your historical ticket transcripts, inspect your CRM or ERP schemas, and validate exact deflection assumptions before proposing a fixed milestone scope.
                </p>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-8">
                  You work directly with senior systems engineers who build production-grade agentic software your company owns and operates permanently.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#F05A28] text-white font-bold hover:bg-[#D8441A] transition-colors shadow-md text-sm"
                  >
                    Schedule Direct Discovery Call with Bhavesh
                  </a>
                  <ModalCTAButton
                    label="Request Written ROI Proposal"
                    region="us"
                    modalVariant="ai"
                    btnVariant="secondary-light"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED SERVICES & AGENT SPOKES */}
        <section className="py-16 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-4">
              // EXPLORE PRODUCTION AI CAPABILITIES
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#14110F] font-heading mb-8">
              Explore Our Core AI Agent Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/services/ai-agent-development"
                className="p-6 rounded-xl bg-[#FAFAF7] border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SERVICE 01</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">
                  Custom AI Agent Development &rarr;
                </h3>
                <p className="text-sm text-[#46403B]">
                  Autonomous operations agents wired into Zendesk, HubSpot, NetSuite, and Shopify.
                </p>
              </Link>

              <Link
                href="/services/ai-sdr-development"
                className="p-6 rounded-xl bg-[#FAFAF7] border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SERVICE 02</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">
                  AI SDR Development &rarr;
                </h3>
                <p className="text-sm text-[#46403B]">
                  Sub-minute inbound lead qualification, enrichment, and meeting scheduling automation.
                </p>
              </Link>

              <Link
                href="/services/manufacturing-ai-agents"
                className="p-6 rounded-xl bg-[#FAFAF7] border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SERVICE 03</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">
                  Manufacturing AI Agents &rarr;
                </h3>
                <p className="text-sm text-[#46403B]">
                  Autonomous shop floor scheduling, ERP synchronization, and predictive maintenance for industrial plants.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* STRUCTURED FAQ SECTION */}
        <FAQ
          eyebrow="// FREQUENTLY ASKED QUESTIONS"
          headline="Questions Operations Leaders Ask Before Building Agents"
          lead="Everything operations leaders need to know about AI agent pricing, financial modeling, and development timelines."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FAFAF7]"
        />

        {/* FINAL HIGH-CONVERTING CTA */}
        <section className="py-20 bg-[#FFF8F5] border-t border-[#E7DED6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#F05A28]/30 mb-6">
              <span className="font-mono text-xs text-[#F05A28] font-bold tracking-wide">
                // 100% OWNED &bull; ZERO SAAS TAXES &bull; FAST PAYBACK
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14110F] font-heading mb-6">
              Ready to Model Your Operations with Custom AI?
            </h2>

            <p className="text-lg text-[#46403B] max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a 30-minute architecture review with founder Bhavesh Barot. We will analyze your monthly ticket volume, inspect your API endpoints, and deliver a fixed-scope roadmap with projected payback milestones.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#F05A28] text-white font-bold hover:bg-[#D8441A] transition-colors shadow-lg text-base"
              >
                Book 30-Min Scoping Call
              </a>
              <ModalCTAButton
                label="Request Custom ROI Proposal"
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
