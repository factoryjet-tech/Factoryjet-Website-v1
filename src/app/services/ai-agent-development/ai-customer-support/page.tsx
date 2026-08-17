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
  title: 'AI Customer Support Agent India | WhatsApp AI | FactoryJet',
  description:
    'AI customer support agents for Indian businesses, deflect 70%+ of WhatsApp queries in Hindi & English. Integrated with Zoho, Freshdesk & Shopify. Fixed price.',
  keywords: [
    'AI customer support India',
    'WhatsApp customer support AI India',
    'AI support agent India',
    'automated customer service India',
    'Freshdesk AI India',
    'Zoho Desk AI India',
    'AI support bot India',
    'customer support automation India',
    'WhatsApp support chatbot India',
    'AI helpdesk India',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Customer Support Agent India | WhatsApp AI | FactoryJet',
    description: 'Deflect 70%+ of WhatsApp support queries with AI. Order status, returns, FAQs in Hindi, integrated with Zoho Desk, Freshdesk, and Shopify.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-customer-support',
    images: [{ url: 'https://factoryjet.com/images/us/services/hero-ai-agent-us.webp', width: 1200, height: 800, alt: 'FactoryJet AI Agent Development Services' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Customer Support Agent India | FactoryJet',
    description: '70%+ WhatsApp ticket deflection. Hindi AI support. Freshdesk + Zoho + Shopify integrated. Fixed price.',
    images: ['https://factoryjet.com/images/us/services/hero-ai-agent-us.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/services/ai-agent-development/ai-customer-support' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-08-04';
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
  name: 'AI Customer Support Agent Development India',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    
  },
  description: 'Custom AI customer support agents for Indian businesses: WhatsApp support, Freshdesk integration, Hindi and English handling, order status, returns, and FAQ automation.',
  areaServed: 'IN',
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
    description: 'We analyse your 50 most common support queries, categorise them by type and channel, and identify which can be fully automated vs. which require human judgment. Typically 65–75% of queries are automatable on the first pass.',
  },
  {
    number: '02',
    title: 'Knowledge Base Build',
    description: 'We build the AI\'s knowledge base from your existing content: FAQs, product descriptions, policies, support scripts, Notion docs, Google Sheets. We process this into a RAG knowledge base so the AI retrieves accurate, current information before answering.',
  },
  {
    number: '03',
    title: 'Integration Build',
    description: 'We connect the AI to your live systems: Shopify for order data, Shiprocket for tracking, Razorpay for payment status, Tally for invoices, and Freshdesk or Zoho Desk for escalation routing. The bot answers with real data, not cached responses.',
  },
  {
    number: '04',
    title: 'Test & Tune',
    description: 'We run the AI against 200+ real support queries, including Hindi queries, edge cases, and abuse patterns, reviewing accuracy and escalation triggers. We tune until the deflection rate and escalation accuracy meet agreed targets.',
  },
  {
    number: '05',
    title: 'Deploy & Monitor',
    description: 'Live deployment with monitoring dashboard, CSAT tracking, escalation rate alerts, and a 30-day optimisation window. We review weekly query logs to identify new automation opportunities and knowledge gaps.',
  },
];

const SUPPORT_STATS = [
  {
    value: '70%+',
    label: 'of WhatsApp support queries deflected by AI, typical for Indian D2C and B2B deployments',
    microcopy: 'FactoryJet client data',
    categoryLabel: 'DEFLECTION RATE',
  },
  {
    value: '<60s',
    label: 'average AI response time on WhatsApp vs. 4–6 hours for manual support',
    microcopy: 'across FactoryJet support deployments',
    categoryLabel: 'RESPONSE TIME',
  },
  {
    value: '3–6mo',
    label: 'payback period for most Indian SMB AI support deployments vs. support team cost',
    microcopy: 'FactoryJet ROI data',
    categoryLabel: 'PAYBACK PERIOD',
  },
];

const SUPPORT_MARKET_STATS = [
  {
    value: '87%',
    label: 'of Indian consumers prefer messaging apps over phone calls for customer support',
    sourceUrl: 'https://meta.com/business/whatsapp-india-report-2024',
    sourceLabel: 'Meta Business India 2024',
  },
  {
    value: '500M+',
    label: 'WhatsApp users in India: your customers are already expecting support there',
    sourceUrl: 'https://meta.com/business/whatsapp-india-report-2024',
    sourceLabel: 'Meta Business India 2024',
  },
  {
    value: '₹8,200 Cr+',
    label: 'India chatbot and AI support market by 2028, growing at 28% CAGR',
    sourceUrl: 'https://nasscom.in/knowledge-center/publications',
    sourceLabel: 'NASSCOM AI Report 2024',
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
    feature: 'Starting cost',
    values: [
      'Fixed one-time price',
      '₹18,000–₹30,000/month per agent',
      '₹5,000–₹20,000/month SaaS',
      '₹8,000–₹25,000/month SaaS',
    ],
  },
  {
    feature: 'Responds to WhatsApp in Hindi',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="hs" kind="partial" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="gs" kind="no" />,
    ],
  },
  {
    feature: 'Checks Shopify / Shiprocket live data',
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
    feature: 'GST invoice and Tally integration',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="hs" kind="partial" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="gs" kind="no" />,
    ],
  },
  {
    feature: 'Freshdesk / Zoho Desk integration',
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
    feature: '500+ SMB projects (India, US, UK, UAE)',
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
    name: 'D2C E-Commerce',
    description: 'WhatsApp AI that handles order status, return requests, Shiprocket tracking, exchange processing, and product queries 24/7, integrated with Shopify and Razorpay so every answer is backed by live data.',
    example: 'D2C brands see 70%+ WhatsApp ticket deflection within 30 days of deployment.',
  },
  {
    name: 'B2B Distribution',
    description: 'Dealer and retailer support on WhatsApp, stock availability checks, order status, GST invoice retrieval from Tally, payment confirmation, and return processing without calling the sales team.',
    example: 'Distributors reduce inbound sales calls by 40% after WhatsApp support AI launch.',
  },
  {
    name: 'Financial Services',
    description: 'AI handles loan status queries, EMI schedule requests, payment receipt confirmations, and KYC document checklist queries, with DPDP-compliant data handling and full audit trails.',
    example: 'NBFCs cut loan query call volume by 50% with AI first-response on WhatsApp.',
  },
  {
    name: 'EdTech & Coaching',
    description: 'Student support AI that handles fee receipt queries, course schedule questions, Razorpay payment confirmations, batch change requests, and study material links, 24/7 without a support team.',
    example: 'EdTech platforms reduce support staff requirements by 1 FTE per 5,000 students with AI.',
  },
  {
    name: 'Healthcare & Clinics',
    description: 'Patient support AI for appointment rescheduling, report status queries, bill queries, and post-visit prescription questions, with DPDP-compliant patient data handling and doctor escalation routing.',
    example: 'Clinics recover 2–3 hours of front-desk time per day after AI support deployment.',
  },
  {
    name: 'Real Estate',
    description: 'Site visit confirmation, payment schedule queries, construction update requests, and registration document status, AI handles the high-volume post-booking support so your team focuses on new sales.',
    example: 'Developers reduce post-booking support team by 30% with AI first-response deployment.',
  },
];

const SUPPORT_PRICING_TIERS = [
  {
    name: 'WhatsApp Support AI',
    priceRange: '',
    description: 'A focused AI customer support agent on WhatsApp, handles order status, FAQs, and returns with live Shopify and Shiprocket data.',
    features: [
      'WhatsApp Business API on Interakt, Wati, or AiSensy',
      'Shopify / WooCommerce order status integration',
      'Shiprocket / Delhivery tracking lookup',
      'FAQ knowledge base from your content',
      'Hindi + English language support',
      'Human escalation with full context handover',
      'Razorpay payment status lookup',
      '14-day post-launch support',
    ],
    cta: { label: 'Book a Free Strategy Call', modal: true as const, region: 'in' as const },
  },
  {
    name: 'Multi-Channel Support Platform',
    priceRange: '',
    description: 'WhatsApp + website + Freshdesk/Zoho Desk unified AI support with analytics and team inbox.',
    features: [
      'WhatsApp + website chat + Freshdesk/Zoho Desk unified inbox',
      'Full Zoho CRM / Freshdesk ticket creation and update',
      'GST invoice retrieval from Tally or Zoho Books',
      'Return and exchange processing flow',
      'Hindi + English + one regional language',
      'CSAT collection and reporting',
      'AI response accuracy dashboard',
      'Escalation routing by query type',
      '30-day post-launch support + optimisation',
    ],
    cta: { label: 'Get a Custom Quote', modal: true as const, region: 'in' as const },
    popular: true,
  },
  {
    name: 'Enterprise Support Automation Suite',
    priceRange: '',
    description: 'Full multi-channel support automation for high-volume Indian businesses with deep ERP integration.',
    features: [
      'WhatsApp + website + email + portal in unified inbox',
      'Deep Tally / Zoho / Shopify / ERP integration',
      'AI ticket classification, routing, and priority scoring',
      'Multi-language support (up to 5 regional languages)',
      'Custom CSAT and SLA tracking dashboard',
      'Proactive support triggers (shipment delayed, payment failed)',
      'Role-based agent workspace',
      'DPDP-compliant data handling documentation',
      '90-day post-launch support + quarterly knowledge base updates',
    ],
    cta: { label: 'Schedule an Enterprise Call', modal: true as const, region: 'in' as const },
  },
] as const;

const SUPPORT_FAQ_CATEGORIES = [
  { key: 'basics', label: 'Support AI Basics' },
  { key: 'whatsapp', label: 'WhatsApp & Channels' },
  { key: 'india', label: 'India-Specific' },
  { key: 'process', label: 'Process & Timeline' },
  { key: 'pricing', label: 'Pricing & ROI' },
];

const SUPPORT_FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'What can an AI customer support agent actually do for my Indian business?',
    answer: "The most common tasks for Indian businesses: answering WhatsApp order status queries (live from Shopify), sharing Shiprocket tracking links on demand, answering return and exchange policy questions, sending GST invoices from Tally on WhatsApp, confirming Razorpay payment receipts, booking appointment rescheduling for clinics and services, answering FAQ questions about products, pricing, and policies, and routing complex queries to human agents with full context. If your support team answers the same 10 questions more than 20 times a day, an AI support agent can handle 70%+ of those automatically.",
  },
  {
    category: 'basics',
    question: 'How does AI customer support differ from a scripted chatbot?',
    answer: "A scripted chatbot works only if customers click the expected buttons and breaks the moment someone types naturally. An AI customer support agent understands natural language, 'where is my parcel', 'mera order kab aayega', 'show me my GST invoice' are all understood and answered accurately, using live data from your systems. The AI also handles follow-up questions within the same conversation without requiring the customer to restart.",
  },
  {
    category: 'basics',
    question: 'What is the typical deflection rate for an AI support agent in India?',
    answer: "For D2C e-commerce businesses, 65–75% deflection within 30 days of deployment is typical, meaning 65–75% of WhatsApp queries are fully resolved by the AI without any human involvement. B2B distribution businesses see similar rates, often higher because the queries are more predictable (stock levels, order status, invoice requests). Healthcare and financial services tend to see lower deflection (50–60%) due to compliance requirements for human sign-off on some query types.",
  },
  {
    category: 'basics',
    question: 'What happens when the AI cannot resolve a query?',
    answer: "Every AI support agent includes a confidence threshold and escalation path. When the AI is not confident in its answer, it says so honestly and routes the customer to a human agent in Freshdesk or Zoho Desk, with the full conversation transcript and a context summary so the agent does not ask the customer to repeat themselves. You control the escalation threshold, routing rules, and the human agent assignment logic.",
  },
  {
    category: 'whatsapp',
    question: 'Can you build AI customer support specifically for WhatsApp?',
    answer: "Yes, WhatsApp is our primary India support deployment. We build on Interakt, Wati, or AiSensy (all Meta-approved BSPs) with live Shopify, Shiprocket, and Razorpay integration so the bot can answer real questions about real orders. The bot handles inbound WhatsApp messages 24/7, responds in Hindi or English, and escalates to your team via a Freshdesk ticket or direct WhatsApp notification when it cannot resolve a query.",
  },
  {
    category: 'whatsapp',
    question: 'Can the AI handle proactive WhatsApp messages, not just replies?',
    answer: "Yes. Using WhatsApp template messages (Meta-approved), the AI can proactively send: order shipped notifications with tracking links, payment receipt confirmations, appointment reminders, and follow-up messages to customers who have open queries. We build these proactive triggers alongside the reactive support flows, so customers receive proactive updates before they need to ask.",
  },
  {
    category: 'whatsapp',
    question: 'Does the AI work on website chat as well as WhatsApp?',
    answer: "Yes: our Multi-Channel Support Platform covers WhatsApp, embedded website chat widget, and your existing helpdesk (Freshdesk or Zoho Desk) from a single AI knowledge base. Customers on your website get the same accurate responses as customers on WhatsApp, and all conversations flow into a unified inbox for your human agents. One AI model, three channels.",
  },
  {
    category: 'whatsapp',
    question: 'How does the AI handle customers who mix Hindi and English?',
    answer: "Hinglish handling is standard in our India builds. The AI understands and responds to natural code-switching: a customer asking 'mujhe return karna hai, 3 days ho gaye' gets the same accurate return policy response as one asking 'I want to initiate a return'. Language detection is automatic and works at the query level, not the session level, so mid-conversation switches are handled smoothly.",
  },
  {
    category: 'india',
    question: 'Can the AI fetch GST invoices and send them on WhatsApp?',
    answer: "Yes, GST invoice fetching is a standard feature. We connect the AI to your Tally ERP, Zoho Books, or custom billing system and give it the ability to retrieve invoices by order ID or customer GSTIN. When a customer messages 'please send my GST bill' on WhatsApp, the AI retrieves the PDF and sends it directly in the chat. This is one of the highest-volume support requests for Indian B2B businesses and the AI handles it with zero human involvement.",
  },
  {
    category: 'india',
    question: 'Does the AI integrate with Indian logistics providers like Shiprocket and Delhivery?',
    answer: "Yes. We integrate with Shiprocket, Delhivery, Blue Dart, DTDC, and other major Indian logistics APIs. When a customer asks 'where is my order', the AI checks the shipping status live from the logistics API and responds with the current status and expected delivery date. No ticket, no waiting: the customer gets a real answer in under 10 seconds.",
  },
  {
    category: 'india',
    question: 'How does the AI handle data privacy under India\'s DPDP Act?',
    answer: "We build AI support agents with DPDP (Digital Personal Data Protection Act) compliance in mind: customer data is accessed only via API calls with the minimum permissions required, conversation data is retained per your configured policy, and we document all data flows at handover. For sectors like healthcare and financial services with stricter requirements, we build private deployment options where conversation data never leaves your infrastructure.",
  },
  {
    category: 'india',
    question: 'Can the AI support agent process returns and exchanges directly?',
    answer: "Yes, for Shopify and WooCommerce stores, we build return initiation flows where the AI checks your return policy, verifies order eligibility, creates the return request in your system, sends the pickup label or drop-off instructions, and updates the customer via WhatsApp throughout the process. Exchanges follow a similar flow. This eliminates the most time-consuming category of support interactions for D2C businesses.",
  },
  {
    category: 'process',
    question: 'How long does it take to build and deploy an AI customer support agent?',
    answer: "A focused WhatsApp support bot (one channel, standard integrations) goes live in 2–3 weeks. A multi-channel platform with Freshdesk or Zoho Desk integration takes 4–5 weeks. Enterprise support automation with deep ERP integration takes 6–8 weeks. The biggest variable is knowledge base preparation, if you have well-documented FAQs and policies, we move faster.",
  },
  {
    category: 'process',
    question: 'What content do you need from us to build the knowledge base?',
    answer: "We can work with almost any format: FAQs in Google Docs, product descriptions from your Shopify admin, policy PDFs, existing support ticket exports from Freshdesk or Zendesk, WhatsApp conversation logs, or even a voice recording of your team answering common questions. We process and structure this content into the AI knowledge base, you do not need to reformat anything specifically for us.",
  },
  {
    category: 'process',
    question: 'How do we update the AI with new products, policies, or FAQs after launch?',
    answer: "Through the admin dashboard, you upload new content (PDF, Google Doc, text), and the AI reprocesses the knowledge base without any code deployment. Most businesses update the knowledge base during product launches, policy changes, and festival season pricing updates. We build the update interface to be usable by non-technical team members.",
  },
  {
    category: 'process',
    question: 'How do we monitor the AI support agent performance?',
    answer: "You get a dashboard showing deflection rate (queries resolved without human), escalation rate (queries handed to humans), average response time, CSAT scores (if you enable post-resolution feedback), and top unanswered queries (new knowledge gaps to fill). Most clients review this weekly for the first month, then monthly after the AI stabilises. We set up alerts for unusual escalation spikes.",
  },
  {
    category: 'pricing',
    question: 'How do you calculate ROI for AI customer support?',
    answer: "The most direct calculation: count the number of support queries your team handles per day, multiply by the hourly cost of the support agent, subtract the queries the AI will deflect (typically 65–75%), and project monthly savings. For a business handling 100 WhatsApp queries/day with one support agent at ₹20,000/month, the AI pays back in 3–4 months. Secondary ROI: faster first-response times significantly improve customer retention and repeat purchase rates.",
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the support agent is built?',
    answer: "LLM API costs (Claude or GPT-4o) are typically ₹3,000–₹12,000/month for 200–500 daily queries. WhatsApp BSP subscription (Interakt/Wati/AiSensy) is charged per message by the provider. FactoryJet charges nothing ongoing unless you choose a monthly retainer for knowledge base updates and optimisation. The AI becomes increasingly accurate over time as we review unanswered queries and expand the knowledge base.",
  },
  {
    category: 'pricing',
    question: 'Can we start with just WhatsApp support and add website chat later?',
    answer: "Yes, we build modularly. Start with the WhatsApp Support AI, measure deflection and ROI, then add the website chat widget and Freshdesk integration as a second phase. Incremental additions are priced at the delta, not a full rebuild. Most clients expand to multi-channel within 6 months once they see the deflection metrics from WhatsApp.",
  },
  {
    category: 'pricing',
    question: 'Do you offer a trial or pilot before the full build?',
    answer: "Yes. For clients who want to validate before committing, we offer a 2-week pilot: a WhatsApp support bot deployed to a specific product category or customer segment, with real order lookups and FAQ handling. The pilot is offered at a fixed pilot price, credited against the full project. Seeing the first 100 real conversation transcripts is usually more convincing than any proposal.",
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

export default function AICustomerSupportINPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script id="ai-customer-support-in-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="ai-customer-support-in-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader
        locale="in"
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'AI Agents', href: '/services/ai-agent-development' },
          { label: 'Portfolio', href: '/portfolio' },          { label: 'Contact', modal: true, region: 'in' },
        ]}
        cta={{ label: 'Book a Free Call', modal: true, region: 'in' }}
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
        formSlot={<HeroInlineForm region="in" source="services_ai_agent_development_ai_customer_support_hero" />}
          eyebrow="AI CUSTOMER SUPPORT · INDIA"
          headline="70% of Your WhatsApp Support Queries Resolved Automatically, in Hindi and English"
          lead="AI customer support agents that check Shopify orders, send Shiprocket tracking links, retrieve GST invoices from Tally, and process returns, 24/7 on WhatsApp, in Hindi and English, with Freshdesk escalation when needed. Fixed price. Live in 2–3 weeks."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '500+ businesses served',
            'WhatsApp + Freshdesk + Zoho ready',
            'Hindi & regional languages',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p className="font-fj-mono font-medium uppercase text-[#B23E13]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                AI SUPPORT AGENT IN ACTION
              </p>
              <p className="mt-4 font-fj-display text-[1.875rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                600+ WhatsApp queries resolved today. 0 support agents needed.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Customer: "mera order kab aayega?" → Bot checks Shiprocket → replies with tracking link in 3 seconds',
                  'Retailer asks for GST invoice → Bot fetches from Tally → sends PDF on WhatsApp instantly',
                  'Return request for Order #4521 → Bot verifies eligibility → initiates return → sends pickup date',
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
                <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">Responds in Hindi and English. Escalates to Freshdesk when needed. Runs 24/7.</p>
              </div>
            </div>
          }
        />

        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ businesses. 12 years of building. One goal: your results."
          description="Websites designed and built for businesses across India, the US, the UK and the UAE: Shopify stores, B2B companies, and DTC brands. Fixed, transparent pricing, your codebase delivered in full, and a 7-day delivery guarantee."
        />

        <ServiceExplanation
          eyebrow="AI SUPPORT EXPLAINED"
          headline="Why an AI Support Agent Is Nothing Like the Scripted Chatbots You Have Tried"
          lead="Scripted chatbots fail 40–60% of Indian support conversations because customers do not follow the script. AI support agents understand natural language, check your live systems, and respond accurately, in Hindi, Hinglish, or English."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {['WhatsApp support', 'Order status', 'Returns & exchanges', 'GST invoices', 'Tracking links', 'Hindi support', 'Freshdesk routing', 'Tally integration'].map((cap) => (
                  <span key={cap} className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#B23E13]" style={{ fontSize: '10px', letterSpacing: '0.10em' }}>{cap}</span>
                ))}
              </div>
              <p>
                The support bottleneck for most Indian businesses is not complex queries, it is volume. Your team fields the same 10 questions 200 times a day: where is my order, can I return this, please send my GST invoice, what is your return policy. An AI support agent handles all of these automatically, with real data from your systems, in the customer's language, at any hour. Your team focuses on the 25–30% of queries that genuinely need a human.
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
                FactoryJet AI support agents are built on large language models with a retrieval layer trained on your specific business content, policies, product catalogue, pricing, FAQs. The AI connects directly to your Shopify, Shiprocket, Razorpay, and Tally accounts via API so every answer is backed by live data. Escalations flow to Freshdesk or Zoho Desk with full context, so your human agents never start a conversation blind.
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
                  { scenario: 'Customer asks order status on WhatsApp', manual: 'Agent opens Shopify → copies tracking → replies, 3–5 minutes', ai: 'AI checks Shiprocket live, replies with tracking link, 3 seconds' },
                  { scenario: 'B2B dealer needs GST invoice', manual: 'Agent finds invoice in Tally → exports PDF → sends on WhatsApp, 8 min', ai: 'AI fetches invoice from Tally API → sends PDF on WhatsApp, 5 sec' },
                  { scenario: 'Customer wants to return an order', manual: 'Agent checks policy → verifies eligibility → raises return → notifies, 10 min', ai: 'AI checks eligibility → initiates return → sends pickup date, 45 sec' },
                  { scenario: 'Support query arrives at midnight', manual: 'No response until 9 AM, customer frustrated', ai: 'AI responds in 30 seconds, resolves or escalates for morning' },
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
          headline="Your support team is answering the same WhatsApp messages on repeat: all day, every day"
          lead="The highest-cost, lowest-value activity in most Indian businesses is answering the same 10 support questions 200 times a day. An AI customer support agent eliminates this entirely, freeing your team for conversations that actually require a human."
          pillars={[
            {
              icon: '💬',
              title: 'WhatsApp support is your biggest operational bottleneck',
              body: "87% of Indian consumers prefer WhatsApp for customer support. Your team manages it manually, typing the same order status reply, sending the same return policy text, forwarding the same GST invoice, hundreds of times daily. One AI support agent handles 70%+ of this automatically, in Hindi or English, at 2 AM on a Sunday.",
            },
            {
              icon: '⚠️',
              title: 'Manual support creates inconsistent customer experiences',
              body: "When different agents give different answers about your return policy, or one agent sends a Tally invoice that another cannot find, you create customer confusion and internal chaos. An AI support agent gives the same accurate answer every time, trained on your definitive policies and connected to your live systems, not agent memory.",
            },
            {
              icon: '📈',
              title: 'Support team costs scale with volume | AI does not',
              body: "Hiring another support agent adds ₹18,000–₹30,000/month with no guarantee of quality consistency. An AI support agent handles 2× the query volume at the same cost, and gets better over time as the knowledge base grows. For seasonal businesses with Diwali-driven support spikes, AI absorbs the volume without emergency hiring.",
            },
          ]}
        />

        <ServiceJourneyRow
          eyebrow="HOW WE BUILD"
          headline="From support audit to 70% query deflection in 2–3 weeks"
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
                Every AI support agent has four layers: an LLM for natural language understanding and response generation, a RAG knowledge base trained on your business content, integration connectors for your live systems (Shopify, Shiprocket, Tally, Razorpay), and a channel deployment layer (WhatsApp, website chat, Freshdesk). We pick best-in-class tools for each layer and ensure they work together reliably under Indian network conditions.
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
                      { layer: 'WhatsApp Delivery', tools: 'Interakt, Wati, AiSensy' },
                      { layer: 'E-Commerce / Orders', tools: 'Shopify, WooCommerce, Commerceflo' },
                      { layer: 'Logistics', tools: 'Shiprocket, Delhivery, Blue Dart APIs' },
                      { layer: 'Accounting', tools: 'Tally ERP, Zoho Books, Zoho Inventory' },
                      { layer: 'Helpdesk', tools: 'Freshdesk, Zoho Desk, LeadSquared' },
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
                  { name: 'WhatsApp Order Support AI', desc: 'Order status, tracking, returns, and GST invoices | on WhatsApp, in Hindi and English, 24/7.' },
                  { name: 'B2B Dealer Support AI', desc: 'Stock availability, order status, invoice retrieval, and payment confirmation for dealers on WhatsApp.' },
                  { name: 'Multi-Channel Support Platform', desc: 'WhatsApp + website + Freshdesk unified inbox with AI first-response and human escalation routing.' },
                  { name: 'BFSI Support AI', desc: 'Loan status, EMI schedules, payment receipts, and KYC queries | with DPDP-compliant data handling.' },
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
          eyebrow="INDIA SUPPORT AI MARKET"
          headline="87% of Indian consumers prefer WhatsApp support. Most businesses still handle it manually."
          leadParagraphs={[
            "India is the world's largest WhatsApp market, and 87% of Indian consumers prefer messaging over phone calls for customer support. Yet most Indian businesses still handle their WhatsApp support queue with a team manually typing replies, looking up orders, and forwarding invoices. The businesses deploying AI support agents now are building a customer experience advantage that is increasingly difficult for manual-support competitors to close.",
            "The India chatbot and AI support market is growing at 28% CAGR. The growth is driven not by large enterprises: most already have support automation, but by SMBs in D2C, B2B distribution, EdTech, healthcare, and financial services discovering that AI support agents are now affordable enough to deploy at any scale.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden="true">
                <p className="font-fj-display font-semibold text-fj-ink" style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}>
                  A customer who gets their order status in 3 seconds buys again. One who waits 6 hours complains.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['D2C E-Commerce', 'B2B Distribution', 'Financial Services', 'EdTech', 'Healthcare', 'Real Estate'].map((ind) => (
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
          lead="Fixed price, full ownership, Indian support stack out of the box: the honest comparison."
          pullQuote={{ stat: 'Fixed price', caption: 'AI customer support agent handling WhatsApp queries in Hindi and English, with live Shopify and Shiprocket integration, Freshdesk escalation, and full code ownership. No monthly SaaS fee.' }}
          columns={SUPPORT_COMPARISON_COLUMNS}
          rows={SUPPORT_COMPARISON_ROWS}
          footer="Prices reflect typical Indian market rates as of 2025. FactoryJet fixed-price contracts available for all tiers."
        />

        <IndustriesGrid variant="cards"
          eyebrow="WHO WE BUILD FOR"
          headline="AI customer support for every major Indian industry"
          lead="Every industry has different support query patterns, tool integrations, and compliance requirements. We build for yours."
          sectors={SUPPORT_INDUSTRIES}
        />


        <GetFreeQuoteCTA />
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What Indian founders say about working with FactoryJet"
        />

        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything to Know Before You Automate Your Support"
          lead="The questions we answer on every Indian AI customer support discovery call, answered honestly, without the runaround."
          categories={SUPPORT_FAQ_CATEGORIES}
          items={SUPPORT_FAQ_ITEMS}
        />

        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="GET STARTED"
            headline="Book a Free AI Customer Support Strategy Call"
            sub="Tell us your WhatsApp query volume and your biggest support bottleneck. We will map out exactly which queries the AI can automate and give you a fixed-price estimate before writing a single line of code."
            primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'in' }}
            secondaryCta={{ label: 'WhatsApp Us', href: 'https://wa.me/919699977699' }}
            objectionHandler="Fixed price. Full code ownership. WhatsApp + Freshdesk + Shopify + Tally ready. 500+ businesses served."
          />
        </div>

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
