import type { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
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

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'n8n Automation India | Workflow Automation from ₹29,999 | FactoryJet',
  description:
    'n8n workflow automation for Indian businesses from ₹29,999. Connect Razorpay, WhatsApp, Zoho, Tally, Shopify & 400+ tools. Self-hosted or cloud. 7-day delivery.',
  keywords: [
    'n8n India',
    'workflow automation India',
    'n8n development India',
    'business process automation India',
    'n8n Zapier alternative India',
    'n8n integration India',
    'automation agency India',
    'Razorpay automation',
    'Tally automation India',
    'WhatsApp Business API automation',
    'Zoho automation India',
    'n8n self hosted India',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'n8n Automation India | Workflow Automation from ₹29,999 | FactoryJet',
    description:
      'n8n workflow automation for Indian businesses from ₹29,999. Connect Razorpay, WhatsApp, Zoho, Tally, Shopify & 400+ tools. Self-hosted or cloud. 7-day delivery.',
    url: 'https://factoryjet.com/n8n-automation',
    images: [
      {
        url: 'https://factoryjet.com/images/services/card-automation.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet n8n Automation Services India',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'n8n Automation India | Workflow Automation from ₹29,999 | FactoryJet',
    description:
      'n8n workflow automation for Indian businesses. Connect Razorpay, WhatsApp, Zoho, Tally & 400+ tools. Self-hosted. 7-day delivery.',
    images: ['https://factoryjet.com/images/services/card-automation.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/n8n-automation',
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
   JSON-LD Schema
───────────────────────────────────────────────────────────────────────────── */

const N8N_FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is n8n and why is it better than Zapier for Indian businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'n8n is an open-source workflow automation platform that you can self-host on your own server — meaning zero per-task fees and no monthly SaaS subscription in USD. Zapier and Make.com charge in USD, bill per "task" or "operation," and do not natively connect Indian tools like Razorpay, Tally, WhatsApp Business API, or Shiprocket. n8n is self-hostable on AWS, DigitalOcean, or any VPS, runs entirely within India if needed for data residency, and FactoryJet builds the custom integrations your Indian tools require. For Indian SMBs running hundreds of thousands of automations monthly, n8n typically costs 80–90% less than Zapier.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does n8n automation setup cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FactoryJet's n8n automation starts at ₹29,999 for the Starter plan covering up to 3 automated workflows and 2 integrations with full deployment and documentation. The Growth plan at ₹80,000 covers up to 10 workflows, 5 integrations, WhatsApp Business API setup, and 30-day monitoring. Custom automation infrastructure — unlimited workflows, dedicated n8n instance, full API integrations, and ongoing support — starts at ₹1,50,000. All prices are 60–70% lower than comparable automation agencies in India.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to set up n8n automation for my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard automation setups of 3–5 workflows with common integrations (Razorpay, Zoho CRM, Google Sheets, WhatsApp) are delivered in 7 days. Complex automation infrastructure with 10+ workflows, custom API integrations (Tally, ERP systems), and dedicated server setup typically takes 2–4 weeks. The timeline depends on the number of workflows, complexity of logic, and whether custom API connectors need to be built for tools that lack native n8n nodes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can n8n connect to Razorpay, Tally, WhatsApp Business API, and Zoho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — connecting Indian business tools is our speciality. Razorpay has webhooks that n8n handles natively for payment events. Tally integration is built via Tally XML/HTTP API or TallyPrime REST API. WhatsApp Business API connects via official BSPs (Interakt, Wati, Gupshup) or the official Meta Cloud API. Zoho CRM and Zoho Books have full n8n community nodes. Shiprocket, Delhivery, and other Indian logistics APIs are connected via n8n HTTP Request nodes with custom auth. FactoryJet has built all of these integrations and maintains the nodes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when a workflow breaks — who fixes it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Every automation we build includes error handling workflows — if a step fails, you receive an alert via WhatsApp or email with the exact node, error message, and retry instructions. For clients on a maintenance retainer (from ₹9,999/month), FactoryJet monitors your n8n instance, receives error alerts directly, and fixes breaking changes within 24 hours. APIs change, webhooks expire, and third-party platforms release updates — an unmaintained automation is an automation that will eventually break silently. Our retainer prevents that.",
      },
    },
  ],
};

const N8N_SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'n8n Automation Services India',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    telephone: '+919699977699',
    email: 'connect@factoryjet.com',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  serviceType: [
    'n8n Automation',
    'Workflow Automation',
    'Business Process Automation',
    'API Integration',
    'CRM Automation',
  ],
  description:
    'n8n workflow automation for Indian businesses. Connect Razorpay, WhatsApp Business API, Tally, Zoho, Shopify, and 400+ tools. Self-hosted or cloud. 7-day delivery.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter Automation',
      price: '29999',
      priceCurrency: 'INR',
      description:
        'Up to 3 automated workflows, 2 integrations, n8n deployment, and documentation.',
    },
    {
      '@type': 'Offer',
      name: 'Growth Automation',
      price: '80000',
      priceCurrency: 'INR',
      description:
        'Up to 10 workflows, 5 integrations, WhatsApp Business API setup, and 30-day monitoring.',
    },
    {
      '@type': 'Offer',
      name: 'Custom Automation Infrastructure',
      price: '150000',
      priceCurrency: 'INR',
      description:
        'Unlimited workflows, full automation infrastructure, dedicated n8n instance, and ongoing support.',
    },
  ],
};

const N8N_SPEAKABLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/n8n-automation#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/n8n-automation',
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const N8N_SERVICES = [
  {
    name: 'Lead Capture & CRM Automation',
    description:
      'Every website form lead automatically enters your CRM, gets tagged, triggers a WhatsApp notification to your sales team, and starts an email follow-up sequence — without anyone touching a keyboard. Works with Zoho CRM, HubSpot, Leadsquared, and custom CRMs.',
    example: 'A D2C brand in Mumbai eliminated 2 hours of daily manual lead entry. Zero leads missed.',
    linkLabel: 'Automate your lead flow',
    linkHref: '/contact',
  },
  {
    name: 'Payment & Invoice Automation',
    description:
      'When a Razorpay payment succeeds, n8n creates a GST-compliant invoice in Tally, sends a WhatsApp confirmation to the customer, updates the CRM deal stage, and notifies your operations team on Slack — all within 30 seconds, no manual action.',
    example:
      'Razorpay → Tally invoice → WhatsApp confirmation → Zoho CRM update → Slack alert. End to end.',
    linkLabel: 'Connect Razorpay to Tally',
    linkHref: '/contact',
  },
  {
    name: 'E-Commerce Order Automation',
    description:
      'Shopify orders trigger inventory updates, fulfillment requests to Shiprocket, tracking number dispatch via WhatsApp, review request messages post-delivery, and reorder alerts when stock drops below threshold — all automated.',
    example: 'A Shopify brand processes 400+ daily orders with zero manual fulfilment steps.',
    linkLabel: 'Automate your Shopify orders',
    linkHref: '/contact',
  },
  {
    name: 'WhatsApp Business API Workflows',
    description:
      'Build multi-step WhatsApp automation: appointment reminders, order status updates, abandoned cart recovery sequences, lead nurturing flows, and payment reminder messages. All via official WhatsApp Business API — no grey-route risk.',
    example:
      'WhatsApp abandoned cart messages convert at 3× the rate of email for Indian consumers.',
    linkLabel: 'Build WhatsApp workflows',
    linkHref: '/contact',
  },
  {
    name: 'HR & Ops Automation',
    description:
      'Employee onboarding workflows (document collection, account creation, welcome messages), leave approval chains, payroll data collection from attendance systems, and expense submission routing — all without chasing people on WhatsApp.',
    example: 'Cut onboarding admin time from 3 days to 4 hours for a 200-person Pune-based company.',
    linkLabel: 'Automate HR operations',
    linkHref: '/contact',
  },
  {
    name: 'Reporting & Analytics Automation',
    description:
      'Pull data from Shopify, Razorpay, Zoho CRM, Google Analytics, and ad platforms every Monday morning and compile it into a formatted Google Sheets or Notion report — automatically emailed to your leadership team before the weekly review.',
    example: 'Weekly 45-minute reporting process fully automated. Board-ready reports every Monday at 8 AM.',
    linkLabel: 'Automate your reporting',
    linkHref: '/contact',
  },
  {
    name: 'Customer Support Automation',
    description:
      'Incoming support tickets get categorised, assigned to the right team member, trigger auto-responses for common queries, and escalate unresolved issues after 24 hours — across email, WhatsApp, and Freshdesk/Zendesk.',
    example: 'First-response time dropped from 6 hours to under 5 minutes for routine queries.',
    linkLabel: 'Automate support routing',
    linkHref: '/contact',
  },
  {
    name: 'Custom API Integrations',
    description:
      'If your ERP, POS, or internal system has an API, n8n can connect it to everything else. We build custom n8n nodes and HTTP Request workflows to integrate tools that do not have official n8n support — including Tally Prime, custom ERPs, and legacy systems.',
    example: 'Built a custom Tally XML integration connecting a Mumbai wholesaler\'s ERP to Razorpay and Zoho.',
    linkLabel: 'Discuss your integration',
    linkHref: '/contact',
  },
];

const N8N_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Automation Audit',
    description:
      'We map every manual process in your business that consumes time: lead entry, invoice generation, order fulfilment notifications, reporting, follow-ups. You get a prioritised automation roadmap ranked by time saved and implementation effort — before we scope any work.',
  },
  {
    number: '02',
    title: 'Workflow Design',
    description:
      'We design the automation logic as a visual workflow diagram — showing every trigger, condition, action, and error path. You approve the logic before we write a single node. Edge cases are identified at design stage, not after deployment.',
  },
  {
    number: '03',
    title: 'n8n Build & Integration',
    description:
      'Workflows are built in n8n with proper credential management, conditional logic, loops, and error handling. Custom nodes are developed for tools without native n8n support (Tally, custom ERPs). All integrations are tested against live or sandbox environments.',
  },
  {
    number: '04',
    title: 'Testing & Error Handling',
    description:
      'Every workflow is stress-tested: edge cases, API timeouts, malformed data, duplicate triggers, and rate limits. Error-handling branches are built so every failure generates an alert with actionable information — not a silent failure you discover three weeks later.',
  },
  {
    number: '05',
    title: 'Deploy & Document',
    description:
      'n8n is deployed on your server (AWS, DigitalOcean, Hetzner, or Cloudflare Tunnel) or as cloud-hosted n8n. Full documentation for every workflow, trigger conditions, and maintenance procedures. Recorded walkthrough delivered on handover. 14-day support included.',
  },
];

const N8N_STATS = [
  {
    value: '80%',
    label: 'cost saving vs. Zapier — n8n self-hosted eliminates per-task fees entirely',
    microcopy: 'for Indian businesses running 50,000+ automations/month',
    categoryLabel: 'COST SAVING',
  },
  {
    value: '400+',
    label: 'native n8n integrations — plus custom nodes for Razorpay, Tally, and Indian APIs',
    microcopy: 'Zoho, HubSpot, Shopify, WhatsApp, Gmail, Slack, Google Sheets, and more',
    categoryLabel: 'INTEGRATIONS',
  },
  {
    value: '7 Days',
    label: 'delivery for standard automation setups — 3–5 workflows, common integrations',
    microcopy: 'from automation audit sign-off to live deployment',
    categoryLabel: 'DELIVERY',
  },
];

const N8N_MARKET_STATS = [
  {
    value: '43B+',
    label: 'UPI transactions processed in India in FY2024 — every one is an automation opportunity',
    sourceUrl: 'https://www.npci.org.in/statistics',
    sourceLabel: 'NPCI Annual Statistics',
  },
  {
    value: '500M+',
    label: 'WhatsApp users in India — the highest-engagement channel for business automation',
    sourceUrl: 'https://www.statista.com/statistics/1004581/india-whatsapp-users/',
    sourceLabel: 'Statista India Digital Report',
  },
  {
    value: '60%',
    label: 'of Indian SMB time is spent on manual repetitive tasks that n8n can automate',
    sourceUrl: 'https://nasscom.in/sme-report-2024',
    sourceLabel: 'NASSCOM SMB Digital Report',
  },
];

const N8N_COMPARISON_COLUMNS = [
  { label: 'FactoryJet (n8n)', isFactoryJet: true },
  { label: 'Zapier' },
  { label: 'Make.com' },
  { label: 'Manual Process' },
] as const;

const N8N_COMPARISON_ROWS = [
  {
    feature: 'Monthly cost (100K tasks/month)',
    values: [
      '₹2,000–₹5,000/mo (server only)',
      '~₹25,000–₹40,000/mo ($299–$499 USD)',
      '~₹12,000–₹20,000/mo ($149–$249 USD)',
      '0 (but 40+ staff hours)',
    ],
  },
  {
    feature: 'Native Indian tool integrations (Razorpay, Tally, WhatsApp)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="zap" kind="no" />,
      <CompareIcon key="make" kind="partial" />,
      <CompareIcon key="man" kind="no" />,
    ],
  },
  {
    feature: 'Self-hosted option (data stays in India)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="zap" kind="no" />,
      <CompareIcon key="make" kind="no" />,
      <CompareIcon key="man" kind="yes" />,
    ],
  },
  {
    feature: 'Custom workflow logic & conditional branching',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="zap" kind="partial" />,
      <CompareIcon key="make" kind="yes" />,
      <CompareIcon key="man" kind="partial" />,
    ],
  },
  {
    feature: 'Setup & integration support included',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="zap" kind="no" />,
      <CompareIcon key="make" kind="no" />,
      <CompareIcon key="man" kind="yes" />,
    ],
  },
  {
    feature: 'Error handling & alerting built in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="zap" kind="partial" />,
      <CompareIcon key="make" kind="partial" />,
      <CompareIcon key="man" kind="no" />,
    ],
  },
  {
    feature: 'INR pricing — no USD FX exposure',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="zap" kind="no" />,
      <CompareIcon key="make" kind="no" />,
      <CompareIcon key="man" kind="yes" />,
    ],
  },
  {
    feature: 'Scales without per-task fees',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="zap" kind="no" />,
      <CompareIcon key="make" kind="no" />,
      <CompareIcon key="man" kind="yes" />,
    ],
  },
  {
    feature: 'You own the workflow code',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="zap" kind="no" />,
      <CompareIcon key="make" kind="no" />,
      <CompareIcon key="man" kind="yes" />,
    ],
  },
];

const N8N_PRICING_TIERS = [
  {
    name: 'Starter',
    priceRange: '',
    description:
      'The fastest way to eliminate your top 3 manual processes. Built, tested, deployed, and documented in 7 days. Best for founders and small teams automating their first workflows.',
    features: [
      'Up to 3 automated workflows',
      '2 tool integrations (e.g., Razorpay + Zoho CRM)',
      'n8n deployment (cloud-hosted n8n or your VPS)',
      'Error handling and alert setup',
      'Workflow documentation and walkthrough',
      '7-day delivery from audit sign-off',
      '14-day post-launch support',
    ],
    cta: { label: 'Book a Free Automation Audit', modal: true as const, region: 'in' as const },
  },
  {
    name: 'Growth',
    priceRange: '',
    description:
      'A complete automation layer for a growing Indian business — covering sales, operations, payments, and WhatsApp communications. The most popular package for 10–50 person teams.',
    features: [
      'Up to 10 automated workflows',
      '5 tool integrations',
      'WhatsApp Business API setup and workflow',
      'Razorpay + Tally / Zoho Books integration',
      'Self-hosted n8n setup on your server (AWS / DigitalOcean / Hetzner)',
      '30-day monitoring and error response',
      'Full workflow documentation and team training',
      'Priority support during first 30 days',
    ],
    cta: { label: 'Get a Custom Quote', modal: true as const, region: 'in' as const },
    popular: true,
  },
  {
    name: 'Custom Infrastructure',
    priceRange: '',
    description:
      'A fully managed automation infrastructure for businesses replacing multiple SaaS tools or automating end-to-end operations across departments.',
    features: [
      'Unlimited workflows (scoped per engagement)',
      'Unlimited integrations including custom API nodes',
      'Dedicated n8n instance with high-availability setup',
      'Custom n8n nodes for Tally, legacy ERP, or proprietary APIs',
      'Full automation infrastructure: server, backups, monitoring',
      'Ongoing support and maintenance retainer',
      'Quarterly automation review and optimisation',
      'Dedicated engineer point of contact',
    ],
    cta: { label: 'Schedule a Discovery Call', modal: true as const, region: 'in' as const },
  },
] as const;

const N8N_FAQ_CATEGORIES = [
  { key: 'n8n',         label: 'What is n8n & Pricing' },
  { key: 'india',       label: 'India-Specific Integrations' },
  { key: 'timeline',    label: 'Timeline & Process' },
  { key: 'technical',   label: 'Technical & Hosting' },
  { key: 'support',     label: 'Support & Maintenance' },
];

const N8N_FAQ_ITEMS = [

  /* ── What is n8n & Pricing ── */
  {
    category: 'n8n',
    question: 'What is n8n and why should Indian businesses use it?',
    answer:
      "n8n (pronounced 'n-eight-n') is an open-source workflow automation platform that connects your business tools and automates repetitive tasks. Unlike Zapier and Make.com which are SaaS platforms billed in USD with per-task pricing, n8n can be self-hosted on your own server — meaning you pay only for the server (typically ₹2,000–₹5,000/month on DigitalOcean or AWS Lightsail) instead of ₹25,000–₹40,000/month to Zapier for the same volume. For Indian businesses, this means automation that scales with your business without your costs scaling proportionally — and workflow data that stays in India.",
  },
  {
    category: 'n8n',
    question: 'How does n8n compare to Zapier for Indian businesses?',
    answer:
      "n8n beats Zapier for most Indian businesses on three dimensions: cost (80–90% cheaper at scale because self-hosting eliminates per-task fees), Indian tool support (Zapier doesn't natively connect Razorpay, Tally, or WhatsApp Business API — n8n's open-source model means these integrations can be built), and data control (self-hosted n8n means your customer data, payment data, and CRM data never leaves your server). Zapier's advantage is simplicity for non-technical users — but FactoryJet builds and maintains your n8n workflows, so you get n8n's power without needing to manage it yourself.",
  },
  {
    category: 'n8n',
    question: 'How does n8n compare to Make.com (formerly Integromat)?',
    answer:
      "Make.com and n8n are closer in power — both support complex multi-step workflows with conditional logic. Make.com is cloud-only (no self-hosting), charges per 'operation' in EUR/USD, and doesn't natively support Razorpay, Tally, or Indian-specific APIs. n8n is self-hostable, has a larger Indian community building custom nodes, and gives you complete workflow portability — your workflows are JSON files you own. For Indian businesses running high-volume automations, n8n self-hosted consistently wins on cost.",
  },
  {
    category: 'n8n',
    question: 'What does n8n automation actually cost Indian businesses per month?',
    answer:
      "Self-hosted n8n runs on a ₹2,000–₹5,000/month VPS (DigitalOcean Droplet, AWS Lightsail, or Hetzner). That server cost is your only ongoing fee — no per-task billing, no operation limits. Zapier for 100,000 tasks/month costs ~₹30,000–₹40,000/month (Business plan at $299 USD). n8n for the same volume costs ₹2,000–₹5,000/month. The FactoryJet build fee (₹29,999–₹1,50,000) is a one-time cost — after that, your automation runs at server cost only. Most clients recover the build cost within 60 days from the Zapier subscription they cancel.",
  },
  {
    category: 'n8n',
    question: 'Does n8n have a free version? Can I use n8n.cloud?',
    answer:
      "n8n Community Edition is free and open-source — you self-host it on any server. n8n.cloud is their hosted SaaS plan starting at $20/month (around ₹1,700) for 2,500 workflow executions/month — much more affordable than Zapier, but still with execution limits. For most Indian businesses doing serious automation volumes (10,000+ executions/month), FactoryJet recommends and deploys the self-hosted Community Edition on your VPS. We handle the entire setup, security hardening, SSL, backups, and updates — you just use the workflows.",
  },

  /* ── India-Specific Integrations ── */
  {
    category: 'india',
    question: 'Can n8n connect to Razorpay for payment automation?',
    answer:
      "Yes — Razorpay's webhook system is one of the cleanest in the Indian payments space. When a payment succeeds, fails, or is refunded, Razorpay fires a webhook that n8n catches and processes. From that trigger, n8n can: create a Tally invoice, update a CRM deal, send a WhatsApp payment confirmation, trigger a fulfilment workflow, update a Google Sheets ledger, or notify your finance team. FactoryJet has pre-built Razorpay webhook templates for the most common Indian payment automation patterns.",
  },
  {
    category: 'india',
    question: 'Can n8n automate Tally for invoice generation and accounting?',
    answer:
      "Yes — Tally integration is one of our most-requested India-specific builds. TallyPrime supports a REST API and XML-over-HTTP interface that n8n connects to via custom HTTP Request nodes. Common patterns: Razorpay payment → n8n → Tally voucher creation (sales receipt, invoice), WooCommerce/Shopify order → n8n → Tally sales invoice, Excel ledger upload → n8n → Tally journal entries. The integration requires TallyPrime 2.0+ and network access to the Tally application server. FactoryJet builds and tests all Tally automations in a staging environment before live deployment.",
  },
  {
    category: 'india',
    question: 'Can n8n automate WhatsApp Business messages?',
    answer:
      "Yes — WhatsApp automation is one of the highest-ROI things we build for Indian businesses. n8n connects to WhatsApp Business API via official BSPs (Interakt, Wati, Gupshup, or 360Dialog) or directly via the Meta Cloud API. Common automations: order confirmation and tracking via WhatsApp, Razorpay payment receipt sent as WhatsApp message, abandoned cart recovery sequence, appointment reminders, lead follow-up drips, and support ticket updates. All messaging uses approved WhatsApp Business message templates — fully TRAI and Meta policy compliant.",
  },
  {
    category: 'india',
    question: 'Can n8n connect to Zoho CRM, Zoho Books, or other Zoho products?',
    answer:
      "Yes — Zoho has one of the most complete API ecosystems in the Indian B2B software market. n8n has native Zoho CRM, Zoho Books, Zoho Mail, and Zoho Desk nodes in the community node library. Common patterns we build: website lead → Zoho CRM contact + deal, Razorpay invoice paid → Zoho Books payment marked → customer notification, Zoho CRM deal won → onboarding workflow trigger, and Zoho Books purchase order → vendor WhatsApp notification. Zoho's OAuth2 integration with n8n is straightforward and stable.",
  },
  {
    category: 'india',
    question: 'Can n8n connect to Shiprocket or other Indian logistics platforms?',
    answer:
      "Yes — Shiprocket has a REST API that n8n integrates with via HTTP Request nodes. We build: Shopify order placed → n8n → Shiprocket shipment created → AWB returned → tracking link sent to customer via WhatsApp, and NDR (non-delivery report) received → customer contacted via WhatsApp → re-delivery scheduled. We also build direct Delhivery, Ekart, and Bluedart API integrations for high-volume brands that need carrier-direct SLAs.",
  },

  /* ── Timeline & Process ── */
  {
    category: 'timeline',
    question: 'How long does it take to set up n8n automation for my business?',
    answer:
      "Standard automation setups — 3–5 workflows connecting common tools (Razorpay, Zoho CRM, WhatsApp, Google Sheets) — are delivered in 7 days from audit sign-off. Growth-tier setups with 10 workflows and WhatsApp Business API take 2–3 weeks. Custom automation infrastructure with dedicated server setup, custom Tally integration, and complex multi-department workflows takes 3–6 weeks. Timeline depends on: number of workflows, whether custom API nodes need building, and how quickly you can provide API credentials and sandbox access.",
  },
  {
    category: 'timeline',
    question: 'What information do you need from me to start the automation build?',
    answer:
      "We start with a 45-minute automation audit call — you walk us through your current manual processes and we identify what should be automated first. To begin the build, we need: API credentials for each tool to be connected (we provide a secure credential collection form), sandbox/test account access where available, sample data for testing (e.g., a test Razorpay payment, a sample order), and sign-off on the workflow design diagrams we produce at the end of the audit. Most clients are ready to start within a week of the initial call.",
  },
  {
    category: 'timeline',
    question: 'What do I receive at the end of the automation project?',
    answer:
      'Deliverables on every FactoryJet automation project: exported n8n workflow JSON files (your workflows, your data), server deployment with SSL, basic auth or IP restriction, and automated backups, step-by-step documentation for each workflow including trigger conditions, logic, and maintenance instructions, a recorded walkthrough video of every workflow, error alert configuration so failures notify you immediately, and a 14-day post-launch support window. You own everything — workflows can be imported into any n8n instance.',
  },

  /* ── Technical & Hosting ── */
  {
    category: 'technical',
    question: 'Where is n8n hosted — can data stay within India?',
    answer:
      "Yes — n8n self-hosted means you choose the server location. We typically deploy on DigitalOcean Bangalore, AWS Mumbai (ap-south-1), or Hetzner Nuremberg depending on your data residency requirements and budget. All workflow execution data, credentials, and run history stays on your server. This is a significant advantage for businesses handling customer payment data, PII, or operating under sector-specific data localisation requirements. n8n.cloud (SaaS) stores data on n8n's EU servers if data localisation is not required.",
  },
  {
    category: 'technical',
    question: 'Can n8n handle high-volume automation — thousands of triggers per day?',
    answer:
      "Yes — n8n is built for production-grade automation at scale. A DigitalOcean 4GB Droplet (₹3,500/month) handles 50,000–100,000 workflow executions per day reliably. For higher volumes, n8n supports queue mode with Redis and multiple worker instances — this is a horizontally scalable architecture. We have deployed n8n instances handling 500,000+ daily executions for e-commerce and fintech clients. The architecture is designed during the audit phase based on your expected automation volume.",
  },
  {
    category: 'technical',
    question: 'How do you keep the n8n instance secure?',
    answer:
      "Every n8n deployment we build follows a security baseline: n8n runs behind a reverse proxy (nginx or Cloudflare Tunnel) with HTTPS/SSL, basic authentication or IP allowlisting on the n8n admin UI, no public exposure of the workflow editor unless explicitly required, encrypted credential storage (n8n encrypts all credentials at rest with your encryption key), automated daily backups to S3 or DigitalOcean Spaces, and automated n8n version update alerts. Credentials (API keys, OAuth tokens) are stored in n8n's encrypted credential vault — they never appear in workflow JSON exports.",
  },
  {
    category: 'technical',
    question: 'What happens when n8n releases an update — do I need to do anything?',
    answer:
      "n8n releases updates regularly — major releases may include breaking changes to node APIs or new features. For clients on a maintenance retainer, FactoryJet monitors n8n release notes, tests updates on a staging instance, and applies updates to your production n8n with zero downtime. Without a retainer, we provide documentation on how to update your n8n Docker container or npm installation. We set up automated alerting for critical security patches so you are always informed even if not on retainer.",
  },

  /* ── Support & Maintenance ── */
  {
    category: 'support',
    question: 'What ongoing support is included after the automation project?',
    answer:
      "Every automation project includes a 14-day post-launch support window: bug fixes, credential refresh issues, minor workflow logic adjustments, and launch questions covered at no additional cost. After 14 days, FactoryJet offers automation maintenance retainers from ₹9,999/month covering up to 4 hours of workflow adjustments per month, priority error response (24-hour fix SLA), n8n version update management, and monthly automation performance reviews.",
  },
  {
    category: 'support',
    question: 'What happens when a workflow breaks — who fixes it and how fast?',
    answer:
      "Every automation we build includes error handling workflows that fire an alert (WhatsApp + email) when a step fails, with the exact error message and workflow name. For retainer clients, those alerts go to FactoryJet directly — we diagnose and fix the issue within 24 hours. Common causes of breaking changes: third-party API changes their authentication, a webhook URL changes, an API rate limit is hit, or a service goes down temporarily. Our error handling builds in retry logic for transient failures — most minor issues self-resolve without manual intervention.",
  },
  {
    category: 'support',
    question: 'Can I expand the automation setup after the initial project?',
    answer:
      "Yes — n8n is designed to grow incrementally. Adding new workflows to an existing n8n instance is faster and cheaper than the initial build (no server setup, no credential configuration for already-connected tools). Retainer clients get 4 hours of monthly workflow work included. One-off workflow additions are scoped per the complexity — simple 3-step workflows typically take a day and cost ₹5,000–₹15,000. We maintain a versioned backup of every workflow so additions never break existing automations.",
  },
  {
    category: 'support',
    question: 'Will I be able to manage and edit the workflows myself?',
    answer:
      "Yes — n8n has a visual drag-and-drop workflow editor that non-technical users can navigate for simple edits. We provide a recorded walkthrough of your specific workflows and documentation explaining what each node does. For routine changes (updating an email template within a workflow, changing a Slack channel destination, adding an extra approval step) most clients self-manage after the first 30 days. Complex changes — new integrations, major logic overhauls, custom node development — are typically better handled by FactoryJet.",
  },
  {
    category: 'support',
    question: 'Do you offer a retainer for ongoing automation development?',
    answer:
      "Yes — FactoryJet's automation retainer plans start at ₹9,999/month and cover: up to 4 hours of workflow development and adjustments, priority 24-hour error response, n8n version update management, monthly automation audit to identify new automation opportunities, and ongoing access to your dedicated automation engineer who knows your n8n instance. Retainer clients building automation over 6+ months consistently find it faster and more cost-effective than project-by-project engagements because there is no onboarding overhead on every new workflow.",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function N8nAutomationPage() {
  return (
    <>
      <Script
        id="n8n-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(N8N_FAQ_SCHEMA) }}
      />
      <Script
        id="n8n-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(N8N_SERVICE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(N8N_SPEAKABLE_SCHEMA) }}
      />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'n8n Automation India', url: 'https://factoryjet.com/n8n-automation' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="n8n AUTOMATION · INDIA"
          headline="Stop Paying Zapier ₹30,000/Month. Switch to n8n."
          lead="Indian businesses on Zapier pay ₹25,000–₹40,000/month for 100K automations. n8n self-hosted runs the same workflows for ₹3,000/month — server only, no per-task fees. FactoryJet builds, deploys, and maintains your n8n automation for Indian tools: Razorpay, Tally, WhatsApp, Zoho, Shiprocket, and 400+ more."
          primaryCta={{ label: 'Book a Free Automation Audit', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '7-day delivery guarantee',
            'Razorpay + Tally + WhatsApp ready',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#F05A28]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                ZAPIER vs. n8n SELF-HOSTED · INDIA
              </p>
              <p className="mt-4 font-fj-display text-[2rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                Same automation. 90% lower cost.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { label: 'Monthly automations', value: '100,000' },
                  { label: 'Zapier Business plan', value: '~₹35,000/mo' },
                  { label: 'Make.com Team plan', value: '~₹17,000/mo' },
                  { label: 'n8n self-hosted (server only)', value: '₹3,000–₹5,000/mo' },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between border-b border-fj-neutral-100 pb-3"
                  >
                    <p className="font-fj-body text-[0.875rem] text-fj-neutral-500">{row.label}</p>
                    <p
                      className="fj-display font-semibold text-fj-ink"
                      style={{ fontSize: '1rem', letterSpacing: '-0.02em' }}
                    >
                      {row.value}
                    </p>
                  </div>
                ))}
                <div className="rounded-xl bg-[rgba(240,90,40,0.08)] px-4 py-3">
                  <p className="font-fj-body text-[0.875rem] font-semibold text-[#F05A28]">
                    Save ₹3,60,000/year vs. Zapier. The FactoryJet build pays for itself in under 30 days.
                  </p>
                </div>
              </div>
            </div>
          }
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="400+ integrations. 80% lower cost than Zapier. Built for Indian business tools."
        />

        {/* ── 4. n8n EXPLAINED ─────────────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="n8n FOR INDIAN BUSINESSES"
          headline="Why n8n — and Why Indian Businesses Are Switching from Zapier"
          lead="Zapier and Make.com are built for US and European markets: USD pricing, US-centric integrations, and cloud-only architecture. n8n is open-source, self-hostable, and integrates with Indian tools that Zapier simply does not support."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'n8n',
                  'Razorpay',
                  'Tally',
                  'WhatsApp API',
                  'Zoho CRM',
                  'Zoho Books',
                  'Shiprocket',
                  'HubSpot',
                  'Shopify',
                  'Google Sheets',
                ].map((cap) => (
                  <span
                    key={cap}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#F05A28]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {cap}
                  </span>
                ))}
              </div>

              <p>
                n8n (open-source, 400+ integrations, self-hostable) is the most powerful automation
                platform for Indian businesses — because it can be deployed on Indian servers, priced in
                INR at server cost only, and extended with custom nodes for Indian tools like Razorpay,
                Tally, and WhatsApp Business API. Zapier charges per task in USD and does not natively
                connect India&apos;s business stack. FactoryJet builds the workflows, deploys the
                infrastructure, and maintains everything.
              </p>

              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '80%', label: 'lower cost than Zapier at 100K tasks/month' },
                  { value: '400+', label: 'native n8n integrations + custom Indian nodes' },
                  { value: '7 Days', label: 'standard automation setup delivery' },
                ].map((b) => (
                  <div
                    key={b.value}
                    className="rounded-xl border border-fj-neutral-200 bg-white px-3 py-4 text-center shadow-sm"
                  >
                    <p
                      className="fj-display font-bold text-[#F05A28]"
                      style={{ fontSize: '1.375rem', lineHeight: 1, letterSpacing: '-0.03em' }}
                    >
                      {b.value}
                    </p>
                    <p
                      className="mt-1.5 font-fj-mono font-medium uppercase text-fj-neutral-400"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.07em' }}
                    >
                      {b.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  A real Indian automation example: Razorpay payment → n8n → Tally invoice created →
                  WhatsApp receipt sent → Zoho CRM deal updated → Slack ops alert. All in under 30
                  seconds. No one touches a keyboard.
                </p>
              </div>

              <p>
                FactoryJet has deployed n8n automation for Indian businesses across e-commerce,
                fintech, logistics, SaaS, manufacturing, and professional services. We know the
                integration quirks of Indian tools — Tally&apos;s XML-over-HTTP API, Razorpay&apos;s
                webhook signature verification, WhatsApp BSP rate limits, and Zoho&apos;s OAuth token
                refresh cycles. You do not learn those on the first build. We bring that knowledge to
                every engagement.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  A Typical Indian Business Automation Stack
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { trigger: 'Razorpay payment', action: 'Tally invoice + WhatsApp receipt' },
                  { trigger: 'New website lead', action: 'Zoho CRM + WhatsApp + email sequence' },
                  { trigger: 'Shopify order placed', action: 'Shiprocket shipment + tracking WhatsApp' },
                  { trigger: 'Support ticket opened', action: 'Auto-assign + customer acknowledgement' },
                  { trigger: 'Monday 8 AM', action: 'Weekly report → Google Sheets + email' },
                  { trigger: 'Stock below threshold', action: 'PO draft + ops team WhatsApp alert' },
                ].map((item) => (
                  <div key={item.trigger} className="py-3.5">
                    <div className="flex items-start gap-3">
                      <div
                        className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(240,90,40,0.50)]"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">
                          {item.trigger}
                        </p>
                        <p
                          className="mt-0.5 font-fj-mono text-[0.6875rem] text-fj-neutral-400"
                          style={{ letterSpacing: '0.04em' }}
                        >
                          → {item.action}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden="true" />
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}
                >
                  All of this running 24/7. No staff time. No missed triggers.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 5. THE PROBLEM (DARK) ─────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="Your team is spending 40% of their week on tasks a computer could do in 30 seconds."
          lead="Manual data entry, copy-pasting between tools, chasing approvals on WhatsApp, building the same weekly report from five spreadsheets — these tasks cost Indian SMBs 15–25 staff hours per week. At ₹500/hour fully loaded cost, that is ₹30,000–₹50,000/month of salary spent on work that n8n can automate in a weekend."
          pillars={[
            {
              icon: '💸',
              title: 'Zapier is designed for the US market — Indian businesses pay a USD premium for half the functionality.',
              body: "Zapier charges in USD with per-task pricing that scales aggressively. 100,000 tasks/month on Zapier Business costs ~₹35,000/month. Zapier does not natively support Razorpay, Tally, or WhatsApp Business API — the tools Indian businesses actually use. n8n self-hosted runs the same automation volume for ₹3,000–₹5,000/month (server cost only). FactoryJet builds all the Indian-specific integrations that Zapier's marketplace does not have.",
            },
            {
              icon: '🔗',
              title: 'Your business tools do not talk to each other — and every gap creates manual work.',
              body: "Razorpay does not automatically update Zoho CRM. Tally does not send WhatsApp receipts. Shopify orders do not auto-create Shiprocket shipments. Every gap between your tools becomes a manual task — someone copies a payment amount, logs into Tally, creates an invoice, downloads it, and WhatsApps it to the customer. This is happening dozens of times a day in most Indian businesses. n8n eliminates every one of these gaps.",
            },
            {
              icon: '⚠️',
              title: 'Manual processes break under growth — and the errors are invisible until they are expensive.',
              body: "At 10 orders a day, a manual fulfilment process is manageable. At 100 orders, it is a bottleneck. At 500 orders, it is the reason your business is not growing. Manual processes also introduce errors: duplicate invoices, missed follow-ups, wrong inventory counts, payment confirmations sent to the wrong customer. Automation eliminates the error rate at scale — and the cost of n8n is a fraction of one fulfilment error that escalates into a customer dispute.",
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Automation Audit to Live n8n Workflows in 5 Stages"
          lead="Automation logic approved before any build. Every edge case handled before deployment. Full documentation and training on handover."
          stages={N8N_JOURNEY_STAGES}
          closingNote="5 STAGES · 7 TO 42 DAYS · RAZORPAY + TALLY + WHATSAPP STANDARD · FULL DOCUMENTATION ON HANDOVER"
        />

        {/* ── 7. TECH STACK ────────────────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="OUR AUTOMATION TECH STACK"
          headline="n8n Built for the Indian Business Stack — Not Adapted from US Templates"
          lead="Every integration we build is tested against the Indian tool ecosystem: Razorpay's webhook quirks, Tally's XML interface, WhatsApp BSP rate limits, and Zoho's OAuth cycles."
          reverseOnDesktop
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden="true">
                {['n8n', 'Razorpay API', 'Tally XML', 'WhatsApp BSP', 'Zoho API', 'Shiprocket API', 'Redis', 'Docker', 'nginx'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#F05A28]"
                      style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <p>
                <strong className="font-semibold text-fj-ink">n8n Community Edition</strong> — Self-hosted
                on your VPS with Docker. All workflow execution data stays on your server. No per-task
                billing, no USD pricing, no data leaving India unless you choose cloud hosting.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Razorpay + Tally integration</strong> — We
                have pre-built Razorpay webhook handlers and Tally XML HTTP Request workflows that we
                adapt and deploy for each client. Payment → invoice is typically a 4-node workflow that
                runs in under 5 seconds.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">WhatsApp Business API</strong> — Connected
                via official BSPs (Interakt, Wati, Gupshup) or Meta Cloud API directly. Full support
                for template messages, session messages, interactive buttons, and media attachments.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Error handling architecture</strong> — Every
                workflow has a parallel error branch: failed executions generate WhatsApp + email alerts
                with the exact error, automatic retries for transient failures (API timeouts, rate
                limits), and dead-letter queue logging for manual review.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Deployment stack</strong> — n8n in Docker
                behind nginx reverse proxy with SSL, basic auth on the editor UI, automated PostgreSQL
                or SQLite backups to S3, and Cloudflare Tunnel option for zero port-forwarding.
              </p>
            </>
          }
          rightSlot={
            <div
              className="w-full overflow-hidden rounded-2xl bg-white shadow-sm"
              style={{
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'rgb(229, 231, 235)',
                borderTopWidth: '2px',
                borderTopColor: '#F05A28',
              }}
            >
              <div className="border-b border-fj-neutral-100 px-8 py-5">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  n8n Infrastructure Stack — India
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-8">
                {[
                  { category: 'Automation engine', tools: 'n8n Community Edition (Docker)' },
                  { category: 'Server', tools: 'AWS Mumbai, DigitalOcean Bangalore, Hetzner' },
                  { category: 'Payments', tools: 'Razorpay, PayU (webhook + REST API)' },
                  { category: 'Accounting', tools: 'Tally Prime XML API, Zoho Books' },
                  { category: 'WhatsApp', tools: 'Interakt, Wati, Gupshup, Meta Cloud API' },
                  { category: 'CRM', tools: 'Zoho CRM, HubSpot, Leadsquared' },
                  { category: 'Logistics', tools: 'Shiprocket, Delhivery, Bluedart' },
                  { category: 'Data', tools: 'Google Sheets, Notion, Airtable' },
                ].map((item) => (
                  <div
                    key={item.category}
                    className="flex items-center justify-between gap-4 py-3.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(240,90,40,0.50)]"
                        aria-hidden="true"
                      />
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">
                        {item.category}
                      </p>
                    </div>
                    <p className="text-right font-fj-body text-[0.875rem] text-fj-neutral-600">
                      {item.tools}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-8 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden="true" />
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.0625rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}
                >
                  Self-hosted. Data stays in India. You own the workflows.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 8. STATS BAND ────────────────────────────────────────────────── */}
        <section
          className="py-12 md:py-16"
          style={{
            backgroundColor: '#FAFAF7',
            borderTop: '1.5px solid rgba(240,90,40,0.18)',
            borderBottom: '1.5px solid rgba(240,90,40,0.18)',
          }}
        >
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px] lg:items-center lg:gap-16">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                {N8N_STATS.map((stat) => (
                  <div key={stat.value}>
                    {stat.categoryLabel && (
                      <div
                        className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-fj-mono font-bold uppercase"
                        style={{
                          fontSize: '9px',
                          letterSpacing: '0.13em',
                          color: '#F05A28',
                          background: 'rgba(240,90,40,0.06)',
                          border: '1px solid rgba(240,90,40,0.22)',
                        }}
                      >
                        <span
                          className="inline-block h-1 w-1 rounded-full"
                          style={{ backgroundColor: '#F05A28' }}
                          aria-hidden="true"
                        />
                        {stat.categoryLabel}
                      </div>
                    )}
                    <p
                      className="fj-display font-bold"
                      style={{
                        fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                        lineHeight: 1,
                        letterSpacing: '-0.04em',
                        color: '#F05A28',
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="mt-3 font-fj-body font-semibold text-fj-ink"
                      style={{ fontSize: '0.9375rem', lineHeight: 1.5 }}
                    >
                      {stat.label}
                    </p>
                    {stat.microcopy && (
                      <p
                        className="mt-1.5 font-fj-body text-fj-neutral-400"
                        style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}
                      >
                        {stat.microcopy}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <div
                className="relative w-full overflow-hidden rounded-2xl"
                style={{ aspectRatio: '5 / 3' }}
              >
                <Image
                  src="/images/services/card-automation.webp"
                  alt="FactoryJet team building n8n automation workflows for Indian businesses"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 380px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. INDIA MARKET CONTEXT ──────────────────────────────────────── */}
        <CityContextSection
          eyebrow="AUTOMATION IN INDIA"
          headline="India Processes 43 Billion UPI Transactions a Year. Most Businesses Still Process Them Manually."
          leadParagraphs={[
            "India's digital payment and e-commerce infrastructure is among the most advanced in the world — Razorpay, UPI, GST, Shiprocket, and WhatsApp Business form a payment and logistics stack that most developed markets envy. But the automation layer connecting these tools is almost entirely absent in Indian SMBs. The result: finance teams manually keying Razorpay payments into Tally, operations staff WhatsApp-messaging tracking numbers to customers, and founders spending Sunday afternoons building the same weekly sales report from five different spreadsheets.",
            "FactoryJet has built n8n automation for Indian businesses across e-commerce (Shopify + Razorpay + Shiprocket), B2B services (lead capture + Zoho CRM + WhatsApp nurturing), manufacturing (purchase order + vendor notification + ERP update), fintech (payment event → accounting → compliance log), and professional services (client onboarding + document collection + project kickoff). The automation patterns are different, but the underlying opportunity is the same: eliminate the repetitive work, reduce errors, and free your team for work that actually requires human judgment.",
            "The Indian SMB automation market is at an inflection point. Zapier and Make.com are priced for US budgets — but the adoption of n8n self-hosted is accelerating in India because the cost case is overwhelming. FactoryJet is one of the few agencies in India with production-grade n8n deployment experience for the Indian business stack (Razorpay, Tally, WhatsApp BSP, Zoho, Shiprocket). We have built the integrations. We know the edge cases. We deploy in 7 days.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden="true">
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  Automation is not a technology project. It is a business efficiency decision — and
                  for Indian businesses, n8n makes that decision obvious.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  'Razorpay Automation',
                  'Tally Integration',
                  'WhatsApp Business API',
                  'Zoho CRM Automation',
                  'Shopify Automation',
                  'Shiprocket Automation',
                  'GST Invoice Automation',
                  'Lead Capture Workflows',
                  'Reporting Automation',
                  'HR Workflows',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#F05A28]"
                    style={{ fontSize: '10px', letterSpacing: '0.08em' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          }
          stats={N8N_MARKET_STATS}
        />

        {/* ── 10. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet (n8n) vs. Zapier vs. Make.com vs. Manual Process"
          lead="The honest cost and capability comparison — relevant to Indian businesses running real automation at scale."
          pullQuote={{
            stat: '₹29,999',
            caption:
              'one-time build cost — then your automation runs at ₹3,000–₹5,000/month server cost only. No per-task fees. No USD exposure. No Zapier invoice.',
          }}
          columns={N8N_COMPARISON_COLUMNS}
          rows={N8N_COMPARISON_ROWS}
          footer="Zapier and Make.com pricing based on USD plans converted at ₹84/USD, May 2025. n8n server cost based on DigitalOcean 4GB Droplet Mumbai region."
        />

        {/* ── 11. USE CASES ─────────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="WHAT WE AUTOMATE"
          headline="Eight Automation Use Cases for Indian Businesses"
          lead="From Razorpay payment to Tally invoice in 30 seconds. From new website lead to WhatsApp follow-up in under a minute. Real automation patterns for the Indian business stack."
          sectors={N8N_SERVICES}
        />

        <GetFreeQuoteCTA />
        {/* ── 13. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What Indian businesses say after we automate their workflows"
        />

        {/* ── 14. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything to Know Before You Automate with n8n"
          lead="The questions we answer on every automation discovery call — including the ones people are too polite to ask on a sales call."
          categories={N8N_FAQ_CATEGORIES}
          items={N8N_FAQ_ITEMS}
        />

        {/* ── 15. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="We have built every Indian automation pattern. You benefit from what we already know."
          lead="Most automation agencies in India have used Zapier or Make.com. Very few have production-grade n8n experience with the Indian business stack. FactoryJet has deployed n8n with Razorpay, Tally, WhatsApp BSP, Zoho, and Shiprocket integrations for real clients — not just in a sandbox."
          pillars={[
            {
              icon: '🇮🇳',
              title: 'The Indian business stack — Razorpay, Tally, WhatsApp, Zoho — is what we specialise in.',
              body: 'Zapier-focused agencies build workflows for HubSpot, Salesforce, and Slack. We build for Razorpay, Tally Prime, WhatsApp Business API, Zoho CRM, Shiprocket, and Delhivery. These are harder integrations — Tally\'s XML interface, Razorpay\'s webhook signature verification, WhatsApp BSP template approval cycles, and Zoho\'s OAuth token management all require experience that is genuinely rare. We have it. You do not have to pay for the learning curve.',
            },
            {
              icon: '🛡️',
              title: 'Self-hosted n8n means your data stays in India — on your server, under your control.',
              body: "Every automation we deploy runs on your VPS in an Indian AWS or DigitalOcean region. Customer payment data, lead contact details, CRM records, and invoice data never leave your infrastructure. For businesses with RBI data localisation requirements, fintech data sensitivity, or simply a preference for data sovereignty, self-hosted n8n is the only option that delivers full control. Zapier and Make.com cannot offer this.",
            },
            {
              icon: '📋',
              title: 'You own every workflow file. Zero lock-in. Any n8n engineer can maintain it.',
              body: 'On handover day, you receive all n8n workflow JSON files exported from your instance, full documentation for every workflow, API credential management instructions, and a recorded walkthrough. The workflows are portable — import them to any n8n instance globally. No FactoryJet dependency baked in. If you hire an in-house engineer next year, they can maintain everything we built. We have seen too many Indian businesses locked into agencies that are the only ones who understand their automation. We build to be replaced.',
            },
          ]}
        />

        {/* ── 16. FINAL CTA ─────────────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="READY TO AUTOMATE"
            headline="Book a Free Automation Audit — We'll Map What to Automate First"
            sub="In 45 minutes, we will walk through your current manual processes, identify the highest-ROI automation opportunities in your business, recommend the right n8n architecture for your tools, and give you a fixed price. No Zapier pitch. No SaaS upsell. Just an honest assessment from engineers who have built the Razorpay, Tally, WhatsApp, and Zoho integrations you actually need."
            primaryCta={{ label: 'Book Your Free Automation Audit', modal: true, region: 'in' }}
            secondaryCta={{ label: 'See Use Cases', href: '#pricing' }}
            objectionHandler="Fixed price. 7-day delivery on standard setups. Full workflow ownership. Razorpay + Tally + WhatsApp standard."
          />
        </div>

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
