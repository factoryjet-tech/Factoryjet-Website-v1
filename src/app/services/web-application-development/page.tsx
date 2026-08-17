import type { Metadata } from 'next';
import { usServiceAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import ServiceHeroImageBand from '@/components/v2/ServiceHeroImageBand';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import CityContextSection from '@/components/v2/CityContextSection';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import PricingTiers from '@/components/v2/PricingTiers';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import MidPageCTA from '@/components/v2/MidPageCTA';

export const metadata: Metadata = {
  title: 'Web Application Development for US Businesses | FactoryJet',
  description:
    'Custom web application development, fixed-price. Booking systems, portals, SaaS MVPs & dashboards, below traditional agency rates. Free discovery call.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Application Development for US Businesses | FactoryJet',
    description:
      'Fixed-price web app development, MVP to full SaaS platform. below traditional agency rates. 60-day bug warranty. Full source code on handoff.',
    url: 'https://factoryjet.com/services/web-application-development',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet: Web Application Development USA' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Application Development for US Businesses | FactoryJet',
    description: 'Custom web apps, fixed price. 60-day bug warranty. below traditional agency rates.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/web-application-development',
    languages: usServiceAlternates['web-application-development'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schema
───────────────────────────────────────────────────────────────────────────── */

// Freshness signal. Benchmark: 56% of AI-Overview-cited pages carry it.
// Keep honest: bump when the page's content actually changes.
const PAGE_MODIFIED = '2026-08-04';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/web-application-development#webpage',
  url: 'https://factoryjet.com/services/web-application-development',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Application Development',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    logo: 'https://factoryjet.com/logo.png',
    areaServed: { '@type': 'Country', name: 'United States' },
    
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'USA', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 4, name: 'Web Application Development', item: 'https://factoryjet.com/services/web-application-development' },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────────────────────────── */

const journeyStages: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Scope Definition',
    description: 'We map every user role, every data model, and every third-party integration before writing a line of code. This prevents scope creep: the #1 reason web app projects go over budget.',
  },
  {
    number: '02',
    title: 'Architecture & Tech Stack',
    description: 'We select the right stack for your use case: Next.js + Supabase for most apps, Laravel for complex APIs, React Native for mobile. Architecture is documented before development starts.',
  },
  {
    number: '03',
    title: 'MVP Build | Core Features First',
    description: 'We build the core user workflow first so you can test with real users early. Authentication, the primary feature, and basic admin. You have a working app before the full feature set is done.',
  },
  {
    number: '04',
    title: 'Integrations & Secondary Features',
    description: 'Payment processing, email automation, third-party API connections, reporting dashboards, and secondary user flows. Each is delivered as a testable sprint.',
  },
  {
    number: '05',
    title: 'QA, Launch & Handoff',
    description: 'Comprehensive QA across devices and browsers. Load testing for your expected traffic. Deploy to production with monitoring, error tracking, and a full technical handoff document.',
  },
];

const APP_TYPES = [
  {
    name: 'Booking & Scheduling Systems',
    description: 'Multi-resource scheduling with calendar sync, payment processing, automated reminders, and staff management. Used by healthcare, fitness, legal, and field service businesses.',
    example: 'Fixed price, scoped to your build. Eliminates recurring scheduling-software subscriptions.',
    linkLabel: 'Get an estimate',
    linkHref: '/contact',
  },
  {
    name: 'Customer Portals',
    description: 'Secure login areas where clients view orders, documents, invoices, and project status. Reduces support volume by 40–60% in the first 90 days.',
    example: 'Fixed price, scoped to your build. Replaces 3–5 email threads per client per week.',
    linkLabel: 'Get an estimate',
    linkHref: '/contact',
  },
  {
    name: 'Internal Ops Dashboards',
    description: 'Custom reporting, approval workflows, KPI tracking, and team coordination tools built for your specific operational data, not a generic BI tool.',
    example: 'Fixed price, scoped to your build. Recovers 5–15 hours per manager per week.',
  },
  {
    name: 'SaaS MVPs',
    description: 'Multi-tenant platforms with subscription billing, self-serve onboarding, usage metering, and the core feature set needed to validate with paying users.',
    example: 'Fixed price, scoped to your build. Validated with first paying customers in 8–14 weeks.',
    linkLabel: 'Discuss your idea',
    linkHref: '/contact',
  },
  {
    name: 'B2B Commerce Platforms',
    description: 'Wholesale portals with customer-specific pricing, Net-30 terms, bulk ordering, and ERP integration. For manufacturers and distributors moving B2B online.',
    example: 'Fixed price, scoped to your build. Replaces costly manual order processing.',
  },
  {
    name: 'AI-Powered Applications',
    description: 'Applications with embedded LLM capabilities, smart search, document analysis, automated drafts, and retrieval-augmented generation over your proprietary data.',
    example: 'AI integration is scoped into your fixed-price quote based on complexity.',
    linkLabel: 'See AI automation',
    linkHref: '/services/ai-automation',
  },
];

const COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'US Dev Agency' },
  { label: 'Freelancer' },
  { label: 'No-Code (Bubble)' },
] as const;

const COMPARISON_ROWS = [
  { feature: 'MVP Starting Price', values: ['Fixed, scoped to your build', 'Several times more', 'Varies widely', 'Low DIY fee, limited'] },
  {
    feature: 'Fixed-Price Contract',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="us" kind="no" />, <CompareIcon key="fl" kind="partial" />, <CompareIcon key="nc" kind="yes" />],
  },
  {
    feature: 'Custom Code (You Own It)',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="us" kind="yes" />, <CompareIcon key="fl" kind="yes" />, <CompareIcon key="nc" kind="no" />],
  },
  {
    feature: 'No Vendor Lock-In',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="us" kind="yes" />, <CompareIcon key="fl" kind="yes" />, <CompareIcon key="nc" kind="no" />],
  },
  {
    feature: 'Scales to Enterprise Traffic',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="us" kind="yes" />, <CompareIcon key="fl" kind="partial" />, <CompareIcon key="nc" kind="partial" />],
  },
  {
    feature: 'Dedicated Project Manager',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="us" kind="yes" />, <CompareIcon key="fl" kind="no" />, <CompareIcon key="nc" kind="no" />],
  },
  {
    feature: '60-Day Bug Warranty',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="us" kind="partial" />, <CompareIcon key="fl" kind="no" />, <CompareIcon key="nc" kind="no" />],
  },
  {
    feature: 'AI Feature Integration',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="us" kind="yes" />, <CompareIcon key="fl" kind="partial" />, <CompareIcon key="nc" kind="partial" />],
  },
  {
    feature: 'Source Code on Handoff',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="us" kind="yes" />, <CompareIcon key="fl" kind="yes" />, <CompareIcon key="nc" kind="no" />],
  },
  {
    feature: '500+ Projects Delivered (US, UK, UAE, India)',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="us" kind="partial" />, <CompareIcon key="fl" kind="no" />, <CompareIcon key="nc" kind="no" />],
  },
] as const;

const PRICING_TIERS = [
  {
    name: 'MVP',
    priceRange: 'Fixed price, scoped to your build',
    description: 'One focused use case. User authentication, core feature set, database, and basic admin panel. Production-ready and deployable.',
    features: [
      'User authentication (login, signup, password reset)',
      'One primary user workflow',
      'Database design + setup',
      'Basic admin panel',
      'One third-party integration',
      'Mobile-responsive',
      'Deployed to production',
      '4–8 week delivery',
      '60-day bug warranty',
      'Full source code + docs on handoff',
    ],
    cta: { label: 'Get a Scope & Quote', modal: true, region: 'us' },
  },
  {
    name: 'Growth Platform',
    priceRange: 'Fixed price, scoped to your build',
    description: 'Multi-role application with dashboard, reporting, multiple integrations, and a full admin panel for your team.',
    features: [
      'Multiple user roles (admin, manager, client)',
      '3–5 core workflows',
      'Analytics + reporting dashboard',
      'Up to 5 third-party integrations',
      'Email notification system',
      'File upload + storage',
      'Advanced admin panel',
      'Role-based access control',
      '8–14 week delivery',
      '60-day bug warranty',
    ],
    cta: { label: 'Get a Scope & Quote', modal: true, region: 'us' },
    popular: true,
  },
  {
    name: 'SaaS Platform',
    priceRange: 'Fixed price, scoped to your build',
    description: 'Multi-tenant SaaS with subscription billing, self-serve onboarding, usage metering, and enterprise-grade architecture.',
    features: [
      'Multi-tenant architecture',
      'Stripe subscription billing',
      'Self-serve onboarding + plan management',
      'Usage metering + limits',
      'API with documentation',
      'Integrations scoped per project brief',
      'Advanced permissions + SSO',
      'Load testing + scalability review',
      'Full technical documentation',
      'Dedicated engineering contact',
    ],
    cta: { label: 'Schedule a Discovery Call', modal: true, region: 'us' },
  },
] as const;

const FAQ_CATEGORIES = [
  { key: 'what-is', label: 'What Is Web Application Development' },
  { key: 'cost', label: 'Cost & Pricing' },
  { key: 'process', label: 'Timeline & Process' },
  { key: 'technical', label: 'Technical & Security' },
  { key: 'working', label: 'Working With FactoryJet' },
];

const FAQ_ITEMS = [
  /* ── What Is ── */
  {
    category: 'what-is',
    question: 'What is the difference between a website and a web application?',
    answer: "A website displays content, pages, images, text, contact forms. A web application processes data, stores user state, and lets users take actions that change what they or others see. If users log in and do things, it's a web app. Booking systems, customer portals, inventory dashboards, SaaS platforms, internal tools: all web applications. They require a backend (database, server logic, APIs) that websites don't need.",
  },
  {
    category: 'what-is',
    question: 'What types of web applications does FactoryJet build?',
    answer: "FactoryJet builds: customer-facing portals (booking systems, member areas, online configurators), internal business tools (ops dashboards, reporting platforms, approval workflows), SaaS MVPs (subscription-based software for a specific vertical), e-commerce extensions (custom checkout flows, B2B portals, bulk ordering), and AI-powered applications (LLM-integrated tools, RAG systems, smart search).",
  },
  {
    category: 'what-is',
    question: 'What technology stack does FactoryJet use for web applications?',
    answer: "Our default stack is Next.js (React) on the frontend, with Supabase (PostgreSQL) or Firebase for database and authentication. For complex API-driven apps, we use Laravel (PHP) or Node.js with Express. For payment processing, Stripe. For file storage, Cloudflare R2 or AWS S3. We match the stack to the project, we don't force every app into the same framework.",
  },
  {
    category: 'what-is',
    question: 'Do you build mobile apps as well as web apps?',
    answer: 'All FactoryJet web apps are fully mobile-responsive and perform like native apps on mobile browsers, covering most use cases. For true native mobile apps (App Store or Google Play), we build with React Native, sharing logic between web and mobile. Most clients start with a web app, validate with users, and add native mobile only if retention data supports it.',
  },
  /* ── Cost ── */
  {
    category: 'cost',
    question: 'How much does it cost to build a web application?',
    answer: "FactoryJet's web application development is fixed-price and scoped to your build. The main cost drivers are how many user roles and core workflows you need, the number of third-party integrations, and whether the app is a focused MVP, a multi-role portal, or a full multi-tenant SaaS platform with subscriptions and complex reporting. We quote the full price up front after a free discovery call, and it comes in well below what US development agencies charge for the same tiers.",
  },
  {
    category: 'cost',
    question: 'Why do web apps cost more than websites?',
    answer: 'Websites are primarily design + content work. Web applications require backend development, database design, server-side logic, API development, authentication systems, and security architecture. A 5-page website takes 1–2 weeks of engineering; a booking system with user accounts, scheduling logic, calendar sync, and payment processing takes 6–10 weeks. The complexity is in the logic, not the pixels.',
  },
  {
    category: 'cost',
    question: 'Do you charge fixed price or hourly for web application development?',
    answer: "Fixed price, always. We define scope in a detailed specification document before development starts. The spec covers every feature, every user role, every integration, and every edge case we can anticipate. The price is based on that spec. If you add features after development starts, we quote them separately before touching them.",
  },
  {
    category: 'cost',
    question: 'What are the ongoing costs after a web application launches?',
    answer: 'Typical ongoing costs go to third-party providers, not FactoryJet: hosting (a monthly fee that scales with traffic), database (a free tier covers small apps, more at scale), and third-party APIs (payment processors charge a small per-transaction fee, email services charge a modest monthly fee). FactoryJet also offers optional maintenance plans, scoped to your app, covering security updates, dependency updates, bug fixes, and minor feature additions.',
  },
  /* ── Process ── */
  {
    category: 'process',
    question: 'How long does it take to build a web application?',
    answer: "A focused MVP takes 4–8 weeks. A mid-complexity platform takes 8–16 weeks. Full-scale SaaS platforms take 4–9 months. FactoryJet uses a phased delivery model: you see a working MVP before the full feature set is done, so you can launch sooner and iterate based on real user feedback rather than assumptions.",
  },
  {
    category: 'process',
    question: 'What happens in the discovery phase?',
    answer: "Discovery maps every user role (who logs in and what they can do), every data model (what gets stored and how it relates), every integration (what third-party systems connect), and every edge case we can anticipate. Discovery typically takes 3–5 days and produces a specification document we both sign off on. This spec is what your fixed price is based on.",
  },
  {
    category: 'process',
    question: 'Can I see progress before the project is done?',
    answer: "Yes, FactoryJet delivers on a sprint cadence (typically 2-week cycles). At the end of each sprint, you get a working staging environment to test. You're not waiting 10 weeks to see something. If something needs to change, we catch it early when it's cheap to fix. You have daily access to a project tracker and a shared Slack channel.",
  },
  {
    category: 'process',
    question: 'Do you provide source code and documentation at handoff?',
    answer: 'Yes, full handoff includes: complete source code in a private GitHub repository (transferred to your account), database schema documentation, API documentation, deployment runbook, environment variable documentation, and a recorded walkthrough. You own everything. No lock-in to FactoryJet for future development.',
  },
  /* ── Technical ── */
  {
    category: 'technical',
    question: 'How do you handle user authentication and data security?',
    answer: "Authentication uses industry-standard libraries: Supabase Auth, NextAuth.js, or Auth0 depending on complexity. We never build custom authentication from scratch. Data at rest is encrypted at the database layer. Data in transit uses TLS 1.3. Role-based access control is built at the API layer, not just the frontend.",
  },
  {
    category: 'technical',
    question: 'Can your web apps handle high traffic?',
    answer: 'FactoryJet apps are built to scale. Next.js on Cloudflare Pages handles millions of requests per month at the free tier for static content. Dynamic API routes deploy to serverless functions that auto-scale. For database-heavy apps with high concurrency, we architect around connection pooling and read replicas from the start. We load test before launch.',
  },
  {
    category: 'technical',
    question: 'Do you integrate with existing business software?',
    answer: 'Yes, integration is core to most web app builds. Common integrations: CRM (HubSpot, Salesforce, Pipedrive), payments (Stripe, PayPal), email (SendGrid, Resend), calendar (Google Calendar, Calendly API), accounting (QuickBooks, Xero), SMS (Twilio), and shipping (ShipBob, EasyPost). If it has a REST API or webhook support, we can connect to it.',
  },
  {
    category: 'technical',
    question: 'What happens if there is a bug after launch?',
    answer: "Every FactoryJet web application includes a 60-day post-launch warranty for bugs, behavior that doesn't match the agreed specification. Bugs are fixed at no charge within this period. Critical production bugs (app down, data loss risk) are responded to within 4 hours regardless of maintenance plan status.",
  },
  /* ── Working With ── */
  {
    category: 'working',
    question: 'Do I need a technical background to work with FactoryJet?',
    answer: "No: the majority of our clients are business owners, not developers. Our discovery process is designed to extract technical requirements from non-technical input. Tell us what your users need to do and what success looks like, we translate that into an engineering spec you review and approve in plain English.",
  },
  {
    category: 'working',
    question: 'Can you take over a web application another developer started?',
    answer: "Yes, we do application rescues regularly. The first step is a fixed-fee codebase audit (credited toward the project if you proceed) where we assess code quality, security posture, and architectural decisions. We give you an honest assessment of whether to continue building or start fresh. About 60% of rescues are 'continue with fixes' and 40% are 'rebuild the core.'",
  },
  {
    category: 'working',
    question: 'Will the web application work on all devices and browsers?',
    answer: 'Yes: all FactoryJet web applications are tested on Chrome, Firefox, Safari, and Edge on desktop, and Chrome and Safari on iOS and Android mobile. Responsive design is built into the component library from the start. Accessibility (WCAG 2.1 AA) is included at no extra charge for all new builds.',
  },
  {
    category: 'working',
    question: 'Can FactoryJet add AI features to a web application?',
    answer: "Yes, we integrate large language models (OpenAI GPT-4, Anthropic Claude, Google Gemini) for features like: AI-assisted content generation, smart search and filtering, document summarization, automated customer response drafts, and data extraction from unstructured inputs. We also build retrieval-augmented generation (RAG) systems. AI features are quoted as add-ons to the base application scope.",
  },

  // ── Money-query coverage, added 2026-06-11 ──
  {
    category: 'working',
    question: 'Who is the best web development company in USA?',
    answer:
      'For SMBs that need production software without enterprise consulting overhead, FactoryJet makes a strong case: senior engineers on every build, fixed milestones, and a deliberately fast website development service, standard sites ship in 7 days, MVPs in 4–8 weeks. The best web development agency in USA for you depends on what you are building; the best website development company in USA for a SaaS MVP is not automatically the best web development services in USA for a content site. Apply three filters to any shortlist: engineers scope the work, pricing is fixed before code starts, and you own the repository from day one. The best website development services in USA pass all three.',
  },
  {
    category: 'cost',
    question: 'How much does website development cost in USA?',
    answer:
      'Website development cost in USA spans a wide range depending on whether you need a marketing site, a web application MVP, or a full SaaS platform: each step up adds significant scope and cost. FactoryJet quotes fixed prices after a scoping call, milestone-paid, and our phased model doubles as a quick website launch service: a working MVP ships before the full feature set, so you start learning from real users sooner.',
  },
  {
    category: 'working',
    question: 'What are the top 10 web development companies in USA?',
    answer:
      'Published rankings of the top 10 web development companies in USA skew toward enterprise consultancies with enterprise pricing. FactoryJet competes in that conversation for SMB and mid-market builds: senior-led, fixed-price, no account-management layers. Whatever list of the top 10 website development companies in USA you start from, filter for three things: who writes the code, whether estimates are fixed or hourly, and whether past clients kept shipping after handover.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const MARKET_STATS = [
  {
    value: 'Fixed price',
    label: 'scoped to your build for a production-ready web application MVP, well below traditional agency rates',
    sourceUrl: 'https://factoryjet.com/services/web-application-development',
    sourceLabel: 'FactoryJet',
  },
  {
    value: '81%',
    label: 'year-over-year growth in web application development demand among US SMBs in 2024–2025',
    sourceUrl: 'https://factoryjet.com/services/web-application-development',
    sourceLabel: 'FactoryJet Market Data',
  },
  {
    value: '60 Days',
    label: 'post-launch bug warranty on all web application projects, fixes at no charge within this window',
    sourceUrl: 'https://factoryjet.com/pricing',
    sourceLabel: 'FactoryJet',
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds your web application',
  description: 'Our proven process for delivering professional, scalable web applications for US businesses.',
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 | Discovery Call',
      text: 'We learn your business, goals, and target audience. We define the sitemap, content strategy, and technical requirements.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 | Strategy & Structure',
      text: 'We finalize your site architecture, wireframes, and content outline. You approve the plan before any design begins.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3–4 | Design',
      text: 'We design every page with your brand identity, mobile-first layouts, and conversion-focused UX. You review and approve all designs.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5–6 | Development & SEO',
      text: 'We build your site in Next.js or WordPress, optimize Core Web Vitals, add structured data, and connect all integrations.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7 | Launch',
      text: 'Your website goes live. We handle DNS, SSL, final QA, and provide training plus 30-day post-launch support.',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page Component
───────────────────────────────────────────────────────────────────────────── */

export default function WebApplicationDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script id="faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="service-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="breadcrumb-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="howto-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <SiteHeader />

      {/* ── 1. HERO ── */}
      <Hero
        formSlot={<HeroInlineForm region="us" source="us_services_web_application_development_hero" />}
        eyebrow="WEB APPLICATION DEVELOPMENT"
        headline="Custom Web Applications Built for US Businesses, Fixed Price"
        lead="Booking systems, customer portals, SaaS MVPs, internal dashboards. FactoryJet builds production-ready web apps at below US development agency benchmarks: fixed price, phased delivery, 60-day bug warranty."
        secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
        trustItems={['500+ businesses served across US, UK, UAE, India', '12+ years engineering experience', 'below traditional agency rates']}
        rightSlot={
          <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 space-y-4">
            <p className="text-xs font-fj-mono uppercase tracking-widest text-fj-neutral-400">Build vs. Buy Decision Framework</p>
            <div className="space-y-3">
              {[
                { trigger: 'Users log in and take actions', verdict: 'Custom web app', color: 'text-[#B23E13]' },
                { trigger: "Off-the-shelf tools don't quite fit", verdict: 'Custom web app', color: 'text-[#B23E13]' },
                { trigger: "You're paying for features you don't use", verdict: 'Custom web app', color: 'text-[#B23E13]' },
                { trigger: 'Mostly static content + contact form', verdict: 'Website is fine', color: 'text-amber-600' },
                { trigger: 'Standard e-commerce, no custom logic', verdict: 'Shopify works', color: 'text-amber-600' },
              ].map(({ trigger, verdict, color }) => (
                <div key={trigger} className="flex items-start gap-3 text-sm font-fj-body">
                  <span className="text-fj-neutral-400 mt-0.5 shrink-0">→</span>
                  <div>
                    <span className="text-fj-neutral-600">{trigger}</span>
                    <span className={`ml-2 font-semibold ${color}`}>→ {verdict}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-fj-neutral-400 font-fj-body pt-1">Not sure? Tell us what you need. We&apos;ll tell you if a simpler solution works better.</p>
          </div>
        }
      />

      {/* ── 1b. HERO IMAGE BAND ──────────────────────────────────────────── */}
      <ServiceHeroImageBand
        imageSrc="/images/services/card-webapp.webp"
        imageAlt="SaaS analytics dashboard on an ultrawide monitor, FactoryJet web application development"
        stats={[
          { value: 'Fixed Price', label: 'Scoped to Your Build' },
          { value: '4–8 Wks', label: 'Typical MVP Build Time' },
          { value: 'Milestone', label: 'Paid in Stages' },
          { value: '10+ Yrs', label: 'Software Expertise' },
        ]}
      />

      {/* ── 2. LOGO BAR ── */}
      <LogoBar />

      {/* ── 3. TRUST BLOCK ── */}
      <BigThreeTrustBlock
        eyebrow="BY THE NUMBERS"
        headline="Fixed-price MVP. 4–8 weeks. 60-day bug warranty. Full source code on handoff."
      />

      {/* ── 4. SERVICE EXPLANATION ── */}
      <ServiceExplanation
        eyebrow="WHY CUSTOM WEB APPS"
        headline="When off-the-shelf software stops fitting, a custom web app starts making sense"
        lead="Most businesses start with SaaS tools, and that's the right call. HubSpot for CRM, Calendly for scheduling, Jotform for data collection. These tools are fast to adopt and cheap to start."
        body={
          <>
            <p>
              The problem shows up 12–24 months in. You&apos;re paying for five overlapping tools that don&apos;t talk to each other. Your team has built workarounds on top of workarounds. You&apos;re exporting CSVs between systems that should share data automatically. Every new hire needs a week of onboarding just to learn the tool stack.
            </p>
            <p>
              That&apos;s when a custom web application starts penciling out. One system that matches your actual workflow, integrates with everything you already use, and costs a one-time build fee instead of five monthly subscriptions forever.
            </p>
            <p>
              FactoryJet has built this kind of application for hundreds of US businesses, from 5-employee service shops that needed a simple booking portal to 50-person companies that needed a full operations platform. Fixed price. Full source code on handoff. 60-day bug warranty.
            </p>
          </>
        }
        rightSlot={
          <div className="rounded-2xl border border-fj-charcoal/20 bg-fj-cream p-6 space-y-3">
            <p className="text-xs font-fj-mono uppercase tracking-widest text-fj-ink/50 mb-3">What We Build</p>
            {[
              { type: 'Booking & Scheduling Systems', detail: 'Multi-resource, calendar sync, payments' },
              { type: 'Customer Portals', detail: 'Login, documents, orders, support' },
              { type: 'Internal Ops Dashboards', detail: 'KPIs, workflows, approvals' },
              { type: 'SaaS MVPs', detail: 'Multi-tenant, subscriptions, billing' },
              { type: 'B2B Commerce Platforms', detail: 'Wholesale, custom pricing, Net-30' },
              { type: 'AI-Powered Tools', detail: 'LLM integration, RAG, smart search' },
              { type: 'Data & Reporting Apps', detail: 'Analytics, custom exports, alerts' },
            ].map(({ type, detail }) => (
              <div key={type} className="flex items-start gap-3 py-2 border-t border-fj-charcoal/10 first:border-0">
                <div className="w-2 h-2 rounded-full bg-[#F05A28] mt-1.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold font-fj-body text-fj-ink">{type}</p>
                  <p className="text-xs text-fj-ink/50 font-fj-body">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        }
      />

      {/* ── 5. STRATEGIC DARK SECTION ── */}
      <StrategicDarkSection
        eyebrow="THE REAL COST OF STITCHING TOOLS TOGETHER"
        headline="Five SaaS subscriptions and a Zapier account is not a system. It's technical debt."
        lead="The average US SMB paying for 5–7 SaaS tools spends thousands per month in subscriptions, for software designed for someone else's workflow. A custom web application built at FactoryJet is a fixed, one-time cost that pays for itself within the first year or two, eliminating those subscription costs and reducing manual data entry."
        pillars={[
          {
            title: 'The subscription math flips within a year or two',
            body: "A growing stack of monthly SaaS fees adds up fast against a one-time custom build. After the first year, the custom app is cheaper, and it fits your workflow exactly. After two, you've saved meaningfully and you're running on a system your competitors don't have.",
          },
          {
            title: 'Every new hire is onboarding into your system',
            body: "When you use 7 different SaaS tools, every new hire needs a week to learn them all. When you have one custom system that matches your workflow, onboarding is your process, not someone else's product roadmap.",
          },
          {
            title: 'Web app demand grew 81% YoY among US SMBs',
            body: "The businesses capturing competitive advantage in 2025 are not bigger. They're faster. A custom web application is the infrastructure that makes automation, AI integration, and operational efficiency possible at your scale.",
          },
        ]}
      />

      {/* ── 5b. MID-PAGE CTA ──
          Added 2026-08-12. A live audit found this page had its only call to action at ~98%,
          leaving a convinced reader nothing to act on through the whole body. */}
      <MidPageCTA
        headline={'Have an idea that needs building?'}
        sub={'Describe what the software has to do and who has to use it. We will come back with the shortest honest path to a working version.'}
        label={'Talk about your app'}
      />

      {/* ── 6. WHAT WE BUILD ── */}
      <IndustriesGrid
        eyebrow="WHAT WE BUILD"
        headline="Six high-ROI web application categories for US businesses"
        lead="Every business has a different bottleneck. These are the six web application types that consistently deliver the fastest return on investment for the SMBs we work with."
        sectors={APP_TYPES}
      />

      {/* ── 7. SERVICE JOURNEY ── */}
      <main id="process">
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Concept to Production-Ready App: Five Structured Phases"
          lead="Every FactoryJet web application project follows the same five-phase process. You have visibility into every phase and a working product to test before final delivery."
          stages={journeyStages}
          closingNote="5 PHASES · FIXED PRICE · 60-DAY BUG WARRANTY · FULL SOURCE CODE HANDOFF"
        />
      </main>

      {/* ── 8. CITY CONTEXT ── */}
      <CityContextSection
        eyebrow="SERVING US BUSINESSES"
        headline="Custom web application development for US businesses, remote-first and US-time-zone friendly"
        leadParagraphs={[
          "FactoryJet works with US businesses across every industry and city. Our engineering team is specialized but runs on US East and West Coast time zones. Daily standups, Slack access, and weekly video reviews keep you connected to your project without the overhead of a local agency.",
          "We've delivered web applications to businesses in Austin, Miami, Denver, Nashville, Charlotte, Portland, Raleigh, Tampa, and across the US. Industry experience includes healthcare, legal, real estate, e-commerce, field services, and SaaS.",
          "Fixed price. Full source code on handoff. 60-day bug warranty on every project. No ongoing lock-in to FactoryJet for future development if you want to bring it in-house.",
        ]}
        stats={MARKET_STATS}
      />

      {/* ── 9. COMPARISON TABLE ── */}
      <ComparisonTable
        eyebrow="HOW WE COMPARE"
        headline="FactoryJet vs. US Dev Agency vs. Freelancer vs. No-Code"
        lead="Not all development options are equal. Here's what the decision looks like when you compare side by side, on price, capability, and what you're left with after delivery."
        pullQuote={{ stat: 'Fixed Price', caption: 'milestone-paid with full code ownership, same engineering depth, predictable from quote to launch.' }}
        columns={COMPARISON_COLUMNS}
        rows={COMPARISON_ROWS}
        footer="Prices reflect typical US market ranges as of 2026. No-code platform monthly fees compound over time and limit scalability."
      />

      {/* ── 10. PRICING TIERS ── */}
      <div id="pricing">
        <PricingTiers
          eyebrow="WEB APPLICATION PRICING"
          headline="Fixed-Price Web Application Packages: Scoped Before We Start"
          lead="Every tier includes a fixed scope, a fixed price, and a delivery timeline we stand behind. No discovery retainer. No surprise invoices. No 'it depends' until after you've committed."
          tiers={PRICING_TIERS}
          footnote="All prices in USD. All projects start with a free discovery call and a written specification. The price is fixed to the spec."
        />
      </div>

      {/* ── 12. TESTIMONIALS ── */}
      <TestimonialsSection
        region="us"
        eyebrow="CLIENT RESULTS"
        headline="What US businesses say about FactoryJet web application development."
      />

      {/* ── 13. FAQ ── */}
      <FAQ
        eyebrow="WEB APPLICATION FAQ"
        headline="Everything you need to know about custom web application development"
        lead="No jargon. Clear answers to the questions every business owner asks before committing to a custom build."
        categories={FAQ_CATEGORIES}
        items={FAQ_ITEMS}
      />

      {/* Related Reading, internal linking to blog posts */}
      <section className="py-10 bg-[#FAFAF7]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold text-[#B23E13] uppercase tracking-widest mb-3">Related Reading</p>
          <h2 className="text-2xl font-bold text-[#0F0F12] mb-6">Keep learning before you commit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/blog/custom-web-development-vs-wordpress-us-small-business-2026" className="block p-5 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#F05A28] transition-colors">
              <p className="text-sm font-semibold text-[#0F0F12] leading-snug">Custom web development vs WordPress: when to choose what</p>
            </a>
            <a href="/blog/nyc-b2b-corporate-web-design-guide-2026" className="block p-5 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#F05A28] transition-colors">
              <p className="text-sm font-semibold text-[#0F0F12] leading-snug">NYC B2B corporate web design: a 2026 buyer guide</p>
            </a>
          </div>
        </div>
      </section>

      {/* ── 14. FINAL CTA ── */}
      <FinalCTA
        variant="dark"
        eyebrow="START YOUR PROJECT"
        headline="Tell us what you need to build. We'll scope it and send a fixed price."
        sub="No commitment to respond. We do a 30-minute discovery call, map your requirements, and send a written scope + fixed price within 48 hours. If the numbers work, we start. If not, you have a free scope document."
        primaryCta={{ label: 'Schedule a Free Discovery Call', modal: true, region: 'us' }}
        secondaryCta={{ label: 'See Pricing', href: '/pricing' }}
        objectionHandler="Fixed price. 60-day bug warranty. Full source code on handoff. Free discovery call first."
      />

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
