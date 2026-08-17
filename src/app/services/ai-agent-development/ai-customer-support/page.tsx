import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import CityContextSection from '@/components/v2/CityContextSection';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import GetFreeQuoteCTA from '@/components/v2/GetFreeQuoteCTA';

export const metadata: Metadata = {
  title: 'AI Customer Support Agents for US Businesses | FactoryJet',
  description:
    'Custom AI support agents for US businesses that work inside the helpdesk you already run: Zendesk, Intercom, Freshdesk or HubSpot. Email, chat and SMS. Fixed price.',
  keywords: [
    'AI customer support agent development',
    'custom AI support agent USA',
    'Zendesk AI agent integration',
    'Intercom AI agent development',
    'Freshdesk AI automation',
    'HubSpot Service Hub AI agent',
    'AI helpdesk automation USA',
    'customer support automation company USA',
    'AI ticket deflection',
    'AI support agent developers US',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Customer Support Agents for US Businesses | FactoryJet',
    description: 'Custom AI support agents that answer email, website chat and SMS with live Shopify, carrier and billing data, then escalate into Zendesk, Intercom, Freshdesk or HubSpot.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-customer-support',
    images: [{ url: 'https://factoryjet.com/images/us/services/hero-ai-agent-us.webp', width: 1200, height: 800, alt: 'FactoryJet AI Agent Development Services' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Customer Support Agents USA | FactoryJet',
    description: 'Custom support agents built into Zendesk, Intercom, Freshdesk or HubSpot. Email, chat and SMS. English and Spanish. Fixed price.',
    images: ['https://factoryjet.com/images/us/services/hero-ai-agent-us.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/services/ai-agent-development/ai-customer-support' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-08-17';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-customer-support#webpage',
  url: 'https://factoryjet.com/services/ai-agent-development/ai-customer-support',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Customer Support Agent Development USA',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    
  },
  description: 'Custom AI customer support agents for US businesses: email, website chat and SMS support, Zendesk, Intercom, Freshdesk and HubSpot integration, English and Spanish handling, order status, returns, and FAQ automation.',
  areaServed: 'US',
  serviceType: 'AI Customer Support Automation',
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-customer-support#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ai-agent-development/ai-customer-support',
};

const SUPPORT_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Support Audit',
    description: 'We analyze your 50 most common support queries, categorize them by type and channel, and identify which can be fully automated vs. which require human judgment. Typically 65–75% of queries are automatable on the first pass.',
  },
  {
    number: '02',
    title: 'Knowledge Base Build',
    description: 'We build the AI\'s knowledge base from your existing content: FAQs, product descriptions, policies, support scripts, Notion docs, Google Sheets. We process this into a RAG knowledge base so the AI retrieves accurate, current information before answering.',
  },
  {
    number: '03',
    title: 'Integration Build',
    description: 'We connect the AI to your live systems: Shopify for order data, ShipStation and the UPS, FedEx and USPS APIs for tracking, Stripe for payment status, QuickBooks or NetSuite for invoices, and Zendesk, Intercom, Freshdesk or HubSpot for escalation routing. The agent answers with real data, not cached responses.',
  },
  {
    number: '04',
    title: 'Test & Tune',
    description: 'We run the AI against 200+ real support queries, including Spanish queries, edge cases, and abuse patterns, reviewing accuracy and escalation triggers. We tune until the deflection rate and escalation accuracy meet agreed targets.',
  },
  {
    number: '05',
    title: 'Deploy & Monitor',
    description: 'Live deployment with monitoring dashboard, CSAT tracking, escalation rate alerts, and a 30-day optimization window. We review weekly query logs to identify new automation opportunities and knowledge gaps.',
  },
];

const SUPPORT_STATS = [
  {
    value: '70%+',
    label: 'of routine support tickets deflected by AI, typical for DTC and B2B deployments',
    microcopy: 'FactoryJet client data',
    categoryLabel: 'DEFLECTION RATE',
  },
  {
    value: '<60s',
    label: 'average AI first response on email, chat and SMS vs. 4–6 hours for manual support',
    microcopy: 'across FactoryJet support deployments',
    categoryLabel: 'RESPONSE TIME',
  },
  {
    value: '3–6mo',
    label: 'payback period for most US SMB AI support deployments vs. support team cost',
    microcopy: 'FactoryJet ROI data',
    categoryLabel: 'PAYBACK PERIOD',
  },
];

const SUPPORT_MARKET_STATS = [
  {
    value: '2.8M',
    label: 'customer service representatives employed in the US, in a role projected to shrink through 2034',
    sourceUrl: 'https://www.onetonline.org/link/summary/43-4051.00',
    sourceLabel: 'O*NET / BLS, 2024',
  },
  {
    value: '61.1%',
    label: 'of US residents who speak a language other than English at home speak Spanish, which is why we build English and Spanish support by default',
    sourceUrl: 'https://www.census.gov/newsroom/press-releases/2023/language-at-home-acs-5-year.html',
    sourceLabel: 'US Census Bureau, 2018-2022 ACS',
  },
  {
    value: '16.9%',
    label: 'of US retail sales happened online in Q1 2026, and every one of those orders can turn into a where-is-my-order ticket',
    sourceUrl: 'https://www.census.gov/retail/ecommerce.html',
    sourceLabel: 'US Census Bureau, Q1 2026',
  },
];

const SUPPORT_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'In-House Support Team' },
  { label: 'Scripted Chatbot Tool' },
  { label: 'Generic SaaS Helpdesk' },
] as const;

const SUPPORT_COMPARISON_ROWS = [
  {
    feature: 'Cost model',
    values: [
      'Fixed one-time build price',
      'Salary plus benefits, per agent, forever',
      'Monthly SaaS subscription, often per resolution',
      'Monthly SaaS subscription, per seat',
    ],
  },
  {
    feature: 'Answers email, chat and SMS in English and Spanish',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="hs" kind="partial" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="gs" kind="no" />,
    ],
  },
  {
    feature: 'Checks Shopify and carrier tracking live',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="hs" kind="partial" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="gs" kind="partial" />,
    ],
  },
  {
    feature: '24/7 response without overtime cost',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="hs" kind="no" />,
      <CompareIcon key="sc" kind="partial" />,
      <CompareIcon key="gs" kind="partial" />,
    ],
  },
  {
    feature: 'Pulls invoices from QuickBooks or NetSuite',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="hs" kind="partial" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="gs" kind="no" />,
    ],
  },
  {
    feature: 'Runs inside Zendesk, Intercom, Freshdesk or HubSpot',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="hs" kind="yes" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="gs" kind="partial" />,
    ],
  },
  {
    feature: 'Fixed-price contract',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="hs" kind="no" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="gs" kind="no" />,
    ],
  },
  {
    feature: 'You own the code & IP',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="hs" kind="no" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="gs" kind="no" />,
    ],
  },
  {
    feature: 'Human handoff with context',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="hs" kind="yes" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="gs" kind="partial" />,
    ],
  },
  {
    feature: '500+ SMB projects delivered',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="hs" kind="no" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="gs" kind="no" />,
    ],
  },
];

const SUPPORT_INDUSTRIES = [
  {
    name: 'DTC E-Commerce',
    description: 'Support AI that handles order status, return requests, carrier tracking, exchange processing, and product questions around the clock on email and website chat, integrated with Shopify and Stripe so every answer is backed by live data.',
    example: 'DTC brands see 70%+ ticket deflection within 30 days of deployment.',
  },
  {
    name: 'B2B Distribution',
    description: 'Dealer and retailer support by email and customer portal: stock availability checks, order status, invoice retrieval from QuickBooks or NetSuite, payment confirmation, and return processing without calling the sales team.',
    example: 'Distributors reduce inbound sales calls by 40% after support AI launch.',
  },
  {
    name: 'Financial Services',
    description: 'AI handles loan status queries, payment schedule requests, receipt confirmations, and document checklist questions, built to respect CCPA data rules, with a full audit log for every conversation.',
    example: 'Lenders cut loan status call volume by 50% with AI first response on email and chat.',
  },
  {
    name: 'Education & Training',
    description: 'Student support AI that handles tuition receipt queries, course schedule questions, Stripe payment confirmations, section change requests, and course material links, around the clock without a support team.',
    example: 'Education platforms reduce support staff requirements by 1 FTE per 5,000 students with AI.',
  },
  {
    name: 'Healthcare & Clinics',
    description: 'Patient support AI for appointment rescheduling, results status queries, billing questions, and post-visit prescription questions, built to respect HIPAA rules on patient data, with provider escalation routing.',
    example: 'Clinics recover 2–3 hours of front-desk time per day after AI support deployment.',
  },
  {
    name: 'Real Estate',
    description: 'Showing confirmations, closing timeline questions, payment schedule queries, and document status checks: the AI handles high-volume post-contract support so your team focuses on new listings.',
    example: 'Brokerages reduce post-contract support load by 30% with AI first response.',
  },
];

const SUPPORT_PRICING_TIERS = [
  {
    name: 'Single-Channel Support Agent',
    priceRange: '',
    description: 'A focused AI customer support agent on one channel (email or website chat), handling order status, FAQs, and returns with live Shopify and carrier data.',
    features: [
      'Website chat widget or shared support inbox deployment',
      'Shopify / WooCommerce order status integration',
      'ShipStation / UPS / FedEx tracking lookup',
      'FAQ knowledge base from your content',
      'English + Spanish language support',
      'Human escalation with full context handover',
      'Stripe payment status lookup',
      '14-day post-launch support',
    ],
    cta: { label: 'Book a Free Strategy Call', modal: true as const, region: 'us' as const },
  },
  {
    name: 'Multi-Channel Support Platform',
    priceRange: '',
    description: 'Email, website chat and SMS support unified with the helpdesk you already run, plus analytics and escalation routing.',
    features: [
      'Email + website chat + SMS in one unified queue',
      'Zendesk / Intercom / Freshdesk / HubSpot ticket creation and update',
      'Invoice and receipt retrieval from QuickBooks or NetSuite',
      'Return and exchange processing flow',
      'English + Spanish',
      'CSAT collection and reporting',
      'AI response accuracy dashboard',
      'Escalation routing by query type',
      'WhatsApp available as an optional extra channel',
      '30-day post-launch support + optimization',
    ],
    cta: { label: 'Get a Custom Quote', modal: true as const, region: 'us' as const },
    popular: true,
  },
  {
    name: 'Enterprise Support Automation Suite',
    priceRange: '',
    description: 'Full multi-channel support automation for high-volume US businesses with deep ERP integration.',
    features: [
      'Email + website chat + SMS + customer portal in one queue',
      'Deep NetSuite / QuickBooks / Shopify / ERP integration',
      'AI ticket classification, routing, and priority scoring',
      'Multi-language support (English, Spanish, and more)',
      'Custom CSAT and SLA tracking dashboard',
      'Proactive support triggers (shipment delayed, payment failed)',
      'Role-based agent workspace',
      'CCPA-aware data handling documentation',
      '90-day post-launch support + quarterly knowledge base updates',
    ],
    cta: { label: 'Schedule an Enterprise Call', modal: true as const, region: 'us' as const },
  },
] as const;

const SUPPORT_FAQ_CATEGORIES = [
  { key: 'basics', label: 'Support AI Basics' },
  { key: 'channels', label: 'Channels & Helpdesk' },
  { key: 'integrations', label: 'Integrations & Compliance' },
  { key: 'process', label: 'Process & Timeline' },
  { key: 'pricing', label: 'Pricing & ROI' },
];

const SUPPORT_FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'What can an AI customer support agent actually do for my business?',
    answer: "The most common tasks: answering order status questions live from Shopify, sending carrier tracking links on demand, answering return and exchange policy questions, resending invoices and receipts from QuickBooks or Stripe, confirming payments, handling appointment rescheduling for clinics and service businesses, answering questions about products, pricing, and policies, and routing anything complex to a human agent with full context. If your team answers the same 10 questions more than 20 times a day, an AI support agent can handle 70%+ of those automatically.",
  },
  {
    category: 'basics',
    question: 'How is this different from buying an off-the-shelf AI support product?',
    answer: "Products like Zendesk AI, Intercom Fin, and the newer AI agent startups are strong if your support is standard and you are happy to work the way the product works. We build the other case: a custom agent for businesses whose support depends on their own systems, an internal ERP, a homegrown order portal, a legacy billing database, unusual return rules. We build the agent around your workflow and plug it into the helpdesk you already pay for, and you own the code at the end. If an off-the-shelf product covers your needs, we will tell you that on the call.",
  },
  {
    category: 'basics',
    question: 'How does AI customer support differ from a scripted chatbot?',
    answer: "A scripted chatbot works only if customers click the expected buttons and breaks the moment someone types naturally. An AI customer support agent understands natural language: 'where is my package', 'can you resend invoice 1043', 'necesito devolver un pedido' are all understood and answered accurately, using live data from your systems. The AI also handles follow-up questions in the same conversation without making the customer start over.",
  },
  {
    category: 'basics',
    question: 'What is the typical deflection rate for an AI support agent?',
    answer: "For DTC e-commerce, 65–75% deflection within 30 days of deployment is typical, meaning 65–75% of incoming tickets are fully resolved by the AI without any human involvement. B2B distribution sees similar rates, often higher because the questions are more predictable (stock levels, order status, invoice requests). Healthcare and financial services tend to land lower (50–60%) because compliance rules require a human to sign off on some request types.",
  },
  {
    category: 'basics',
    question: 'What happens when the AI cannot resolve a query?',
    answer: "Every AI support agent includes a confidence threshold and an escalation path. When the AI is not confident, it says so honestly and hands the customer to a human agent in Zendesk, Intercom, Freshdesk or HubSpot, with the full conversation transcript and a context summary so nobody asks the customer to repeat themselves. You control the escalation threshold, the routing rules, and the agent assignment logic.",
  },
  {
    category: 'channels',
    question: 'Which channels can the AI support agent cover?',
    answer: "Email, website chat, and SMS are the core three for US businesses, and they cover most ticket volume. We also build into your customer portal or app, and WhatsApp is available as an extra channel if you serve international customers who use it. Phone is handled by a voice agent, which is a separate build with its own call flow and handoff rules. One knowledge base feeds every channel, so the answer a customer gets by email matches the answer they get in chat.",
  },
  {
    category: 'channels',
    question: 'Does the AI work inside the helpdesk we already use?',
    answer: "Yes, and that is the whole model. We integrate with Zendesk, Intercom, Freshdesk, HubSpot Service Hub, Gorgias, and Zoho Desk through their APIs. The AI drafts or sends replies, creates and updates tickets, applies tags and macros, and escalates to the right queue. Your team keeps the tool, the reporting, and the workflow they already know. We do not ask you to rip out your helpdesk and move your history somewhere new.",
  },
  {
    category: 'channels',
    question: 'Can the AI send proactive messages, not just replies?',
    answer: "Yes. The AI can send order shipped notifications with tracking links, payment receipt confirmations, appointment reminders, and follow-ups to customers with open tickets. For SMS specifically, we build to the TCPA rules: messages go only to customers who gave prior express consent, quiet hours are respected, and every message honors STOP and opt-out handling automatically. We build these proactive triggers alongside the reactive flows, so customers hear about a delay before they write in about it.",
  },
  {
    category: 'channels',
    question: 'Can the AI support customers in Spanish?',
    answer: "Yes. English and Spanish is our standard US build, because Spanish is by far the most common language other than English spoken in US homes. Language detection happens at the query level rather than the session level, so a customer who switches mid-conversation is handled correctly. When a Spanish conversation escalates, the handoff summary is written in English so your agent can pick it up without a translation step.",
  },
  {
    category: 'integrations',
    question: 'Can the AI pull invoices and receipts and send them to a customer?',
    answer: "Yes, invoice retrieval is a standard feature. We connect the AI to QuickBooks, NetSuite, Stripe, or your custom billing system and give it the ability to look up documents by order ID, invoice number, or customer record. When someone writes 'can you resend my receipt', the AI finds the PDF and sends it in the reply. For B2B accounts this is one of the highest-volume requests in the queue and the AI handles it with no human involvement.",
  },
  {
    category: 'integrations',
    question: 'Does the AI integrate with US carriers like UPS, FedEx and USPS?',
    answer: "Yes. We integrate through ShipStation, Shippo, or EasyPost, or directly against the UPS, FedEx, and USPS APIs when you ship on your own accounts. When a customer asks where their order is, the AI checks live shipping status and replies with the current scan and the expected delivery date. No ticket, no waiting: the customer gets a real answer in under 10 seconds.",
  },
  {
    category: 'integrations',
    question: 'How does the AI handle customer data privacy?',
    answer: "We build to CCPA and CPRA expectations: customer data is accessed only through API calls with the minimum permissions required, conversation data is retained on the schedule you set, and every data flow is documented at handover. Access and deletion requests can be routed to the right team automatically instead of sitting in the queue. In healthcare we build to HIPAA rules on patient data. We do not sell certifications, we build the agent so your existing obligations still hold.",
  },
  {
    category: 'integrations',
    question: 'Can the AI support agent process returns and exchanges directly?',
    answer: "Yes. For Shopify and WooCommerce stores we build return flows where the AI checks your policy, verifies order eligibility, creates the RMA in your system, emails the prepaid label or drop-off instructions, and keeps the customer updated as the return moves. Exchanges follow a similar path. This removes the single most time-consuming category of support work for DTC brands.",
  },
  {
    category: 'process',
    question: 'How long does it take to build and deploy an AI customer support agent?',
    answer: "A focused single-channel agent (one channel, standard integrations) goes live in 2–3 weeks. A multi-channel build wired into Zendesk, Intercom, Freshdesk or HubSpot takes 4–5 weeks. Enterprise support automation with deep ERP integration takes 6–8 weeks. The biggest variable is knowledge base preparation: if your FAQs, policies and macros are already written down, we move faster.",
  },
  {
    category: 'process',
    question: 'What content do you need from us to build the knowledge base?',
    answer: "We work with almost any format: FAQs in Google Docs, product descriptions from your Shopify admin, policy PDFs, macros and saved replies from your helpdesk, ticket exports from Zendesk or Freshdesk, past chat transcripts, or a recording of your team answering common questions. We process and structure that into the AI knowledge base. You do not need to reformat anything for us.",
  },
  {
    category: 'process',
    question: 'How do we update the AI with new products, policies, or FAQs after launch?',
    answer: "Through the admin dashboard: you upload new content (PDF, Google Doc, plain text) and the AI reprocesses the knowledge base with no code deployment. Most teams update during product launches, policy changes, and holiday season promotions. We build the update interface so a non-technical team member can run it.",
  },
  {
    category: 'process',
    question: 'How do we monitor the AI support agent performance?',
    answer: "You get a dashboard showing deflection rate (tickets resolved without a human), escalation rate, average first response time, CSAT scores if you turn on post-resolution feedback, and the top unanswered questions, which are your knowledge gaps. Most clients review this weekly for the first month, then monthly once the AI stabilizes. We set up alerts for unusual escalation spikes.",
  },
  {
    category: 'pricing',
    question: 'How do you calculate ROI for AI customer support?',
    answer: "The direct calculation: take the tickets your team handles per day, multiply by the loaded hourly cost of a support rep, then apply the share the AI will deflect (typically 65–75%) to get the monthly saving. We run that math with your real ticket volume on the scoping call rather than quoting an average. The secondary return matters too: faster first response improves retention and repeat purchase rates, and it shows up in CSAT before it shows up in headcount.",
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the support agent is built?',
    answer: "Two, and neither is paid to us. LLM API usage is billed by the model provider (Claude, GPT or Gemini) and scales with query volume. Your helpdesk subscription stays exactly what it is today, since the agent works inside it. FactoryJet charges nothing ongoing unless you choose a retainer for knowledge base updates and tuning. The agent gets more accurate over time as we review unanswered questions and expand the knowledge base.",
  },
  {
    category: 'pricing',
    question: 'Can we start with one channel and add more later?',
    answer: "Yes, we build modularly. Start with email or website chat, measure deflection and ROI, then add SMS, deeper helpdesk automation, or a customer portal as a second phase. Additions are priced at the delta, not as a rebuild, because the knowledge base and integrations carry over. Most clients expand within 6 months once they see the deflection numbers from the first channel.",
  },
  {
    category: 'pricing',
    question: 'Do you offer a trial or pilot before the full build?',
    answer: "Yes. For clients who want proof before committing, we run a 2-week pilot: a support agent scoped to one product category or one ticket type, with real order lookups and FAQ handling on your live data. The pilot is a fixed price and is credited against the full project. Reading the first 100 real conversation transcripts convinces people faster than any proposal we could write.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: SUPPORT_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function AICustomerSupportUSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script id="ai-customer-support-us-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="ai-customer-support-us-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader
        locale="us"
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'AI Agents', href: '/services/ai-agent-development' },
          { label: 'Portfolio', href: '/portfolio' },          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Book a Free Call', modal: true, region: 'us' }}
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
          { name: 'AI Customer Support', url: 'https://factoryjet.com/services/ai-agent-development/ai-customer-support' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
          { name: 'AI Customer Support', url: 'https://factoryjet.com/services/ai-agent-development/ai-customer-support' },
        ]} />

        <Hero
        formSlot={<HeroInlineForm region="us" source="services_ai_agent_development_ai_customer_support_hero" />}
          eyebrow="AI CUSTOMER SUPPORT · US"
          headline="70% of Your Routine Support Tickets Resolved Automatically, Inside the Helpdesk You Already Run"
          lead="Custom AI support agents that check Shopify orders, send carrier tracking links, pull invoices from QuickBooks, and process returns, around the clock on email, website chat and SMS, escalating into Zendesk, Intercom, Freshdesk or HubSpot when a person is needed. Fixed price. Live in 2–3 weeks."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'us' as const }}
          trustItems={[
            '500+ businesses served',
            'Zendesk, Intercom, Freshdesk, HubSpot ready',
            'English & Spanish',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p className="font-fj-mono font-medium uppercase text-[#B23E13]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                AI SUPPORT AGENT IN ACTION
              </p>
              <p className="mt-4 font-fj-display text-[1.875rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                600+ support tickets resolved today. 0 support agents needed.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Customer: "where is my order?" → Agent checks the carrier API → replies with a tracking link in 3 seconds',
                  'Buyer asks for a copy of invoice #1043 → Agent pulls it from QuickBooks → emails the PDF instantly',
                  'Return request for Order #4521 → Agent verifies eligibility → creates the RMA → sends the prepaid label',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F05A28]/10 font-fj-mono text-[10px] font-bold text-[#B23E13]">
                      {i + 1}
                    </span>
                    <p className="font-fj-body text-[0.875rem] leading-[1.5] text-fj-neutral-600">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-fj-neutral-100 pt-6">
                <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">Answers in English and Spanish. Escalates into Zendesk or Freshdesk when needed. Runs around the clock.</p>
              </div>
            </div>
          }
        />

        <LogoBar tagline="Trusted by 500+ businesses across the US, UK, and UAE" />

        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ businesses. 12 years of building. One goal: your results."
          description="Websites designed and built for businesses across the US, the UK and the UAE: Shopify stores, B2B companies, and DTC brands. Fixed, transparent pricing, your codebase delivered in full, and a 7-day delivery guarantee."
        />

        <ServiceExplanation
          eyebrow="AI SUPPORT EXPLAINED"
          headline="Why an AI Support Agent Is Nothing Like the Scripted Chatbots You Have Tried"
          lead="Scripted chatbots fail 40–60% of support conversations because customers do not follow the script. AI support agents understand natural language, check your live systems, and respond accurately, in English or Spanish."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {['Email support', 'Website chat', 'SMS updates', 'Order status', 'Returns & exchanges', 'Invoice retrieval', 'Zendesk routing', 'Shopify integration'].map((cap) => (
                  <span key={cap} className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#B23E13]" style={{ fontSize: '10px', letterSpacing: '0.10em' }}>{cap}</span>
                ))}
              </div>
              <p>
                The support bottleneck for most US businesses is not complex queries, it is volume. Your team fields the same 10 questions 200 times a day: where is my order, can I return this, please resend my invoice, what is your return policy. An AI support agent handles all of these automatically, with real data from your systems, in the customer's language, at any hour. Your team focuses on the 25–30% of tickets that genuinely need a human.
              </p>
              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '70%+', label: 'query deflection' },
                  { value: '<60s', label: 'response time' },
                  { value: '24/7', label: 'always on' },
                ].map((b) => (
                  <div key={b.value} className="rounded-xl border border-fj-neutral-200 bg-white px-3 py-4 text-center shadow-sm">
                    <p className="font-fj-display font-bold text-[#F05A28]" style={{ fontSize: '1.375rem', lineHeight: 1, letterSpacing: '-0.03em' }}>{b.value}</p>
                    <p className="mt-1.5 font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '0.6875rem', letterSpacing: '0.07em' }}>{b.label}</p>
                  </div>
                ))}
              </div>
              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p className="font-fj-display font-semibold text-fj-ink" style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}>
                  Your customers get an answer in 3 seconds. Your team focuses on cases that matter.
                </p>
              </div>
              <p>
                FactoryJet AI support agents are built on large language models with a retrieval layer grounded in your specific business content: policies, product catalog, pricing, FAQs. The AI connects directly to your Shopify, ShipStation, Stripe, and QuickBooks accounts via API so every answer is backed by live data. Escalations flow into Zendesk, Intercom, Freshdesk or HubSpot with full context, so your human agents never start a conversation blind.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>AI vs. Manual Support Team</p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { scenario: 'Customer emails asking for order status', manual: 'Agent opens Shopify → copies tracking → replies, 3–5 minutes', ai: 'AI checks the carrier API live, replies with tracking link, 3 seconds' },
                  { scenario: 'B2B buyer needs a copy of an invoice', manual: 'Agent finds invoice in QuickBooks → exports PDF → emails it, 8 min', ai: 'AI pulls the invoice from QuickBooks → sends the PDF, 5 sec' },
                  { scenario: 'Customer wants to return an order', manual: 'Agent checks policy → verifies eligibility → raises return → notifies, 10 min', ai: 'AI checks eligibility → creates the RMA → sends the label, 45 sec' },
                  { scenario: 'Ticket arrives at midnight', manual: 'No response until 9 AM, customer frustrated', ai: 'AI responds in 30 seconds, resolves or escalates for morning' },
                ].map((row) => (
                  <div key={row.scenario} className="px-7 py-4">
                    <p className="font-fj-mono font-semibold text-fj-ink" style={{ fontSize: '0.75rem', letterSpacing: '0.04em' }}>{row.scenario}</p>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-fj-neutral-50 px-3 py-2">
                        <p className="font-fj-mono uppercase text-fj-neutral-400" style={{ fontSize: '0.625rem', letterSpacing: '0.08em' }}>Manual Team</p>
                        <p className="mt-1 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem' }}>{row.manual}</p>
                      </div>
                      <div className="rounded-lg border border-[rgba(240,90,40,0.2)] bg-[rgba(240,90,40,0.05)] px-3 py-2">
                        <p className="font-fj-mono uppercase text-[#B23E13]" style={{ fontSize: '0.625rem', letterSpacing: '0.08em' }}>AI Agent</p>
                        <p className="mt-1 font-fj-body text-fj-ink" style={{ fontSize: '0.8125rem' }}>{row.ai}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="Your support team is answering the same tickets on repeat: all day, every day"
          lead="The highest-cost, lowest-value activity in most US businesses is answering the same 10 support questions 200 times a day. An AI customer support agent eliminates this entirely, freeing your team for conversations that actually require a human."
          pillars={[
            {
              icon: '💬',
              title: 'Repetitive tickets are your biggest operational bottleneck',
              body: "Your team works the queue by hand, typing the same order status reply, pasting the same return policy, resending the same invoice, hundreds of times a day. One AI support agent handles 70%+ of that automatically, in English or Spanish, at 2 AM on a Sunday, and it does it inside the helpdesk your team already works in.",
            },
            {
              icon: '⚠️',
              title: 'Manual support creates inconsistent customer experiences',
              body: "When different agents give different answers about your return policy, or one agent sends an invoice that another cannot find, you create customer confusion and internal chaos. An AI support agent gives the same accurate answer every time, grounded in your definitive policies and connected to your live systems, not agent memory.",
            },
            {
              icon: '📈',
              title: 'Support team costs scale with volume | AI does not',
              body: "Hiring another rep adds salary, benefits, and weeks of ramp with no guarantee of consistency, and support is a high-turnover role, so you pay that cost again. An AI support agent handles 2× the ticket volume at the same cost and gets better over time as the knowledge base grows. For seasonal businesses with Black Friday support spikes, AI absorbs the volume without emergency hiring.",
            },
          ]}
        />

        <ServiceJourneyRow
          eyebrow="HOW WE BUILD"
          headline="From support audit to 70% ticket deflection in 2–3 weeks"
          stages={SUPPORT_JOURNEY_STAGES}
          closingNote="Every AI support agent is tested against 200+ real support queries before going live. You review accuracy and escalation triggers, we fix any issues before your customers see it."
        />

        <ServiceExplanation
          eyebrow="TECHNOLOGY"
          headline="The technology stack behind your AI customer support agent"
          lead="We pick the right LLM, knowledge base architecture, and integration connectors for your business, query volume, and support channel requirements. Everything is documented and handed over."
          reverseOnDesktop
          body={
            <>
              <p>
                Every AI support agent has four layers: an LLM for natural language understanding and response generation, a RAG knowledge base built from your business content, integration connectors for your live systems (Shopify, ShipStation, QuickBooks, Stripe), and a channel deployment layer (email, website chat, SMS, and your existing helpdesk). We pick best-in-class tools for each layer and make sure they hold up together at your real ticket volume.
              </p>
              <div className="overflow-hidden rounded-xl border border-fj-neutral-200 bg-white" aria-hidden>
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-fj-neutral-100 bg-fj-neutral-50">
                      <th className="px-5 py-3 font-fj-mono text-[10px] font-semibold uppercase tracking-widest text-fj-neutral-400">Layer</th>
                      <th className="px-5 py-3 font-fj-mono text-[10px] font-semibold uppercase tracking-widest text-fj-neutral-400">Tools We Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-fj-neutral-100">
                    {[
                      { layer: 'LLM / AI Model', tools: 'Claude, GPT-4o, Gemini' },
                      { layer: 'Knowledge Base (RAG)', tools: 'Pinecone, pgvector, Chroma' },
                      { layer: 'Channel Delivery', tools: 'Email, website chat, SMS via Twilio' },
                      { layer: 'E-Commerce / Orders', tools: 'Shopify, WooCommerce, Commerceflo' },
                      { layer: 'Shipping & Tracking', tools: 'ShipStation, Shippo, UPS / FedEx / USPS APIs' },
                      { layer: 'Billing & Accounting', tools: 'QuickBooks, NetSuite, Stripe' },
                      { layer: 'Helpdesk', tools: 'Zendesk, Intercom, Freshdesk, HubSpot, Gorgias' },
                    ].map((row) => (
                      <tr key={row.layer}>
                        <td className="px-5 py-3 font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.8125rem' }}>{row.layer}</td>
                        <td className="px-5 py-3 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem' }}>{row.tools}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>Five Support AI Types We Build</p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { name: 'E-Commerce Order Support AI', desc: 'Order status, carrier tracking, returns, and invoices | on email and website chat, in English and Spanish, around the clock.' },
                  { name: 'B2B Dealer Support AI', desc: 'Stock availability, order status, invoice retrieval, and payment confirmation for dealers and distributors.' },
                  { name: 'Multi-Channel Support Platform', desc: 'Email + website chat + SMS with AI first response and escalation routing into Zendesk, Intercom, or Freshdesk.' },
                  { name: 'Regulated-Industry Support AI', desc: 'Loan status, payment schedules, receipts, and document checklists | built to respect CCPA, and HIPAA rules in healthcare.' },
                  { name: 'Proactive Support AI', desc: 'AI that sends shipment delay alerts, payment failure notices, and back-in-stock notifications before customers ask.' },
                ].map((item) => (
                  <div key={item.name} className="px-7 py-4">
                    <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9rem' }}>{item.name}</p>
                    <p className="mt-0.5 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        <section className="py-12 md:py-16" style={{ backgroundColor: '#FAFAF7', borderTop: '1.5px solid rgba(240,90,40,0.18)', borderBottom: '1.5px solid rgba(240,90,40,0.18)' }}>
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {SUPPORT_STATS.map((stat) => (
                <div key={stat.value}>
                  {stat.categoryLabel && (
                    <div className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-fj-mono font-bold uppercase" style={{ fontSize: '9px', letterSpacing: '0.13em', color: '#B23E13', background: 'rgba(240,90,40,0.06)', border: '1px solid rgba(240,90,40,0.22)' }}>
                      <span className="inline-block h-1 w-1 rounded-full" style={{ backgroundColor: '#F05A28' }} aria-hidden="true" />
                      {stat.categoryLabel}
                    </div>
                  )}
                  <p className="font-fj-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', lineHeight: 1, letterSpacing: '-0.04em', color: '#F05A28' }}>{stat.value}</p>
                  <p className="mt-3 font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9375rem', lineHeight: 1.5 }}>{stat.label}</p>
                  {stat.microcopy && <p className="mt-1.5 font-fj-body text-fj-neutral-400" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>{stat.microcopy}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <CityContextSection
          eyebrow="US SUPPORT AI MARKET"
          headline="US customers expect an answer in minutes. Most support teams are still working the queue by hand."
          leadParagraphs={[
            "Support expectations in the US have moved to same-hour, any-hour. Customers open a chat window at 11 PM, email on a Saturday, and text about a late package over a holiday weekend. Most SMB support teams still work that queue manually during business hours, which means the backlog is already deep by the time anyone logs on Monday. The businesses deploying AI support agents now are building a response-time advantage that manual-support competitors find very hard to close.",
            "The other thing that changed: almost every US business already pays for a helpdesk. Zendesk, Intercom, Freshdesk, HubSpot Service Hub, Gorgias, Zoho Desk. Ripping that out to buy a separate AI product is a hard internal sell, and it strands years of ticket history. Building a custom agent that works inside the helpdesk you already run is a much easier decision, and that is the model we build: your tools, your data, your workflow, with the repetitive work handled automatically.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden="true">
                <p className="font-fj-display font-semibold text-fj-ink" style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}>
                  A customer who gets their order status in 3 seconds buys again. One who waits 6 hours complains.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['DTC E-Commerce', 'B2B Distribution', 'Financial Services', 'Education', 'Healthcare', 'Real Estate'].map((ind) => (
                  <span key={ind} className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#B23E13]" style={{ fontSize: '10px', letterSpacing: '0.08em' }}>{ind}</span>
                ))}
              </div>
            </>
          }
          stats={SUPPORT_MARKET_STATS}
        />

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. In-House Support Team vs. Scripted Chatbot vs. Generic SaaS"
          lead="Fixed price, full ownership, and it runs inside the helpdesk you already pay for: the honest comparison."
          pullQuote={{ stat: 'Fixed price', caption: 'AI customer support agent handling email, chat and SMS in English and Spanish, with live Shopify and carrier integration, Zendesk or Freshdesk escalation, and full code ownership. No monthly SaaS fee.' }}
          columns={SUPPORT_COMPARISON_COLUMNS}
          rows={SUPPORT_COMPARISON_ROWS}
          footer="Cost models shown are typical for each option. FactoryJet quotes a fixed price after a scoping call, for every tier."
        />

        <IndustriesGrid variant="cards"
          eyebrow="WHO WE BUILD FOR"
          headline="AI customer support for every major US industry"
          lead="Every industry has different support query patterns, tool integrations, and compliance requirements. We build for yours."
          sectors={SUPPORT_INDUSTRIES}
        />


        <GetFreeQuoteCTA />
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What founders say about working with FactoryJet"
        />

        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything to Know Before You Automate Your Support"
          lead="The questions we answer on every AI customer support discovery call, answered honestly, without the runaround."
          categories={SUPPORT_FAQ_CATEGORIES}
          items={SUPPORT_FAQ_ITEMS}
        />

        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="GET STARTED"
            headline="Book a Free AI Customer Support Strategy Call"
            sub="Tell us your ticket volume, the helpdesk you run, and your biggest support bottleneck. We will map out exactly which tickets the AI can handle and give you a fixed price before writing a single line of code."
            primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See All AI Agent Services', href: '/services/ai-agent-development' }}
            objectionHandler="Fixed price. Full code ownership. Zendesk, Intercom, Freshdesk, HubSpot and Shopify ready. 500+ businesses served."
          />
        </div>

      </main>

      <SiteFooter locale="us" />
    </>
  );
}
