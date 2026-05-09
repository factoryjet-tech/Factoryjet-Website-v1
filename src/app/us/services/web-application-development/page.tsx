import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Web Application Development for US Businesses | FactoryJet',
  description:
    'Custom web application development starting at $7,500. Booking systems, customer portals, SaaS MVPs, dashboards — fixed price, 60–70% below US dev agency rates. Free discovery call.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Application Development for US Businesses | FactoryJet',
    description:
      'Fixed-price web app development from $7,500. MVP to full SaaS platform. 60–70% below US agency rates. 60-day bug warranty. Full source code on handoff.',
    url: 'https://factoryjet.com/us/services/web-application-development',
    images: [{ url: 'https://factoryjet.com/logo.png', width: 1200, height: 630, alt: 'FactoryJet — Web Application Development USA' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Application Development for US Businesses | FactoryJet',
    description: 'Custom web apps from $7,500. Fixed price. 60-day bug warranty. 60–70% below US agency rates.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/us/services/web-application-development' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
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

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schema
───────────────────────────────────────────────────────────────────────────── */

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does web application development cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FactoryJet's web application development starts at $7,500 for an MVP — a single-purpose app with user authentication, a core feature set, and a database. Mid-complexity apps (dashboards, booking platforms, multi-role portals) run $15,000–$30,000. Full-scale SaaS platforms with payments, admin panels, and API integrations run $30,000–$80,000. US development agencies typically charge $50,000–$200,000+ for comparable scope. Our India-based engineering team delivers at 60–70% below US rates with the same technology stack.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a website and a web application?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A website is primarily content — pages that display information to visitors. A web application has user accounts, stores data in a database, processes logic based on user input, and lets users take actions that change state. Examples: a booking system where customers reserve slots and owners see a calendar is a web app. An online store is a web app. A dashboard where your team tracks KPIs is a web app. If users log in and do things, it's almost certainly a web application — and it requires backend development, not just a website builder.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a web application?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A focused MVP (one core workflow, user auth, basic admin) takes 4–8 weeks. A mid-complexity platform with multiple user roles, third-party integrations, and a full admin dashboard takes 8–16 weeks. Full-scale SaaS platforms take 4–9 months. Timeline depends most on scope clarity — the better defined your requirements, the faster we build. FactoryJet uses a phased delivery model: you see a working MVP before the full feature set is complete, which means you can launch sooner and iterate based on real user feedback.",
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Application Development',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    logo: 'https://factoryjet.com/logo.png',
    areaServed: { '@type': 'Country', name: 'United States' },
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'Web App MVP',
      description: 'Single-purpose web application with auth, core feature set, and database. Production-ready.',
      price: '7500',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    {
      '@type': 'Offer',
      name: 'Growth Platform',
      description: 'Multi-role web application with dashboard, integrations, and admin panel.',
      price: '18000',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'USA', item: 'https://factoryjet.com/us' },
    { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://factoryjet.com/us/services' },
    { '@type': 'ListItem', position: 4, name: 'Web Application Development', item: 'https://factoryjet.com/us/services/web-application-development' },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────────────────────────── */

const journeyStages: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Scope Definition',
    description:
      'We map every user role, every data model, and every third-party integration before writing a line of code. This prevents scope creep — the #1 reason web app projects go over budget.',
  },
  {
    number: '02',
    title: 'Architecture & Tech Stack',
    description:
      'We select the right stack for your use case — Next.js + Supabase for most apps, Laravel for complex APIs, React Native for mobile. Architecture is documented before development starts.',
  },
  {
    number: '03',
    title: 'MVP Build — Core Features First',
    description:
      'We build the core user workflow first so you can test with real users early. Authentication, the primary feature, and basic admin. You have a working app before the full feature set is done.',
  },
  {
    number: '04',
    title: 'Integrations & Secondary Features',
    description:
      'Payment processing, email automation, third-party API connections, reporting dashboards, and any secondary user flows. Each is delivered as a testable sprint.',
  },
  {
    number: '05',
    title: 'QA, Launch & Handoff',
    description:
      'Comprehensive QA across devices and browsers. Load testing for your expected traffic volume. Deploy to production with monitoring, error tracking, and a full technical handoff document.',
  },
];

const faqCategories = [
  {
    category: 'What Is Web Application Development',
    items: [
      {
        question: 'What is the difference between a website and a web application?',
        answer:
          "A website displays content — pages, images, text, contact forms. A web application processes data, stores user state, and lets users take actions that change what they or others see. The test is simple: if users log in and do things, it's a web app. Booking systems, customer portals, inventory dashboards, SaaS platforms, internal tools — all web applications. They require a backend (database, server logic, APIs) that websites don't need.",
      },
      {
        question: 'What types of web applications does FactoryJet build?',
        answer:
          "FactoryJet builds custom web applications for US businesses across several categories: customer-facing portals (booking systems, member areas, online configurators), internal business tools (ops dashboards, reporting platforms, approval workflows), SaaS MVPs (subscription-based software for a specific vertical), and e-commerce extensions (custom checkout flows, B2B portals, bulk ordering systems). We also build AI-powered applications — tools that use language models or machine learning within the user workflow.",
      },
      {
        question: 'What technology stack does FactoryJet use for web applications?',
        answer:
          "Our default stack is Next.js (React) on the frontend, with Supabase (PostgreSQL) or Firebase for the database and authentication layer. For complex API-driven applications, we use Laravel (PHP) or Node.js with Express. For payment processing, we use Stripe. For file storage, Cloudflare R2 or AWS S3. We match the stack to the project — we don't force every app into the same framework. The goal is the best performance, lowest operational cost, and easiest long-term maintenance for your specific use case.",
      },
      {
        question: 'Do you build mobile apps as well as web apps?',
        answer:
          'We build web applications that are fully mobile-responsive and perform like native apps on mobile browsers — this covers most use cases. For true native mobile apps (published to the App Store or Google Play), we build with React Native, which lets us share logic between web and mobile. Most of our clients start with a web app, validate with users, and add native mobile only if retention data supports it. Native mobile adds 30–50% to build cost and ongoing maintenance.',
      },
    ],
  },
  {
    category: 'Cost & Pricing',
    items: [
      {
        question: 'How much does it cost to build a web application?',
        answer:
          "FactoryJet's web application development starts at $7,500 for an MVP — user authentication, a core workflow, database, and basic admin panel. Mid-complexity apps (multi-role portals, booking platforms, dashboards with third-party integrations) run $15,000–$30,000. Full SaaS platforms with subscriptions, multi-tenant architecture, and complex reporting run $30,000–$80,000. US development agencies typically charge $50,000–$200,000+ for these same tiers. Our India-based engineering team cuts cost 60–70% without cutting quality.",
      },
      {
        question: 'Why do web apps cost more than websites?',
        answer:
          'Websites are primarily design + content work. Web applications require backend development — database design, server-side logic, API development, authentication systems, security architecture, and infrastructure setup. A 5-page website might take 1–2 weeks of engineering; a booking system with user accounts, scheduling logic, calendar sync, and payment processing takes 6–10 weeks. The complexity is in the logic, not the pixels. That engineering time is what drives cost.',
      },
      {
        question: 'Do you charge fixed price or hourly for web application development?',
        answer:
          "Fixed price — always. We define the scope in a detailed specification document before development starts. That spec covers every feature, every user role, every integration, and every edge case we can anticipate. The price is based on that spec. If you add features after development starts, we quote them separately before touching them. We never send surprise invoices for work you didn't know we were doing.",
      },
      {
        question: 'What are the ongoing costs after a web application launches?',
        answer:
          'Ongoing costs typically include: hosting ($20–$200/month depending on traffic and infrastructure), database ($0–$100/month on Supabase or Firebase free tiers for small apps, more at scale), third-party APIs (Stripe takes 2.9% + $0.30 per transaction, email platforms like SendGrid from $15/month), and maintenance. FactoryJet offers maintenance plans starting at $299/month that cover security updates, dependency updates, bug fixes, and minor feature additions. We scope all of these before launch so there are no surprises.',
      },
    ],
  },
  {
    category: 'Timeline & Process',
    items: [
      {
        question: 'How long does it take to build a web application?',
        answer:
          "A focused MVP (one core workflow, user auth, basic admin) takes 4–8 weeks. A mid-complexity platform with multiple user roles, integrations, and a full admin dashboard takes 8–16 weeks. Full-scale SaaS platforms take 4–9 months. Timeline depends most on scope clarity — ambiguous requirements are the #1 cause of delays. FactoryJet uses a phased delivery model: you see a working MVP before the full feature set is done, which means you can launch sooner and iterate based on real user feedback rather than assumptions.",
      },
      {
        question: 'What happens in the discovery phase?',
        answer:
          "Discovery is the most valuable phase of the project. We map every user role (who logs in and what they can do), every data model (what information gets stored and how it relates), every integration (what third-party systems need to connect), and every edge case we can anticipate. Discovery typically takes 3–5 days and produces a specification document we both sign off on. This spec is what your fixed price is based on. Projects that skip discovery almost always go over budget or over time.",
      },
      {
        question: 'Can I see progress before the project is done?',
        answer:
          "Yes — FactoryJet delivers on a sprint cadence, typically 2-week cycles. At the end of each sprint, you get a working staging environment to test. You're not waiting 10 weeks to see something. If something needs to change based on what you see, we catch it early when it's cheap to fix, not at the end when it's expensive. You'll have daily access to a project tracker and a shared Slack channel with your project team.",
      },
      {
        question: 'Do you provide source code and documentation at handoff?',
        answer:
          'Yes — full handoff includes: complete source code in a private GitHub repository (transferred to your account), database schema documentation, API documentation (Swagger/OpenAPI format for any custom APIs), deployment runbook, environment variable documentation, and a recorded walkthrough of the codebase for your technical team. You own everything. No lock-in to FactoryJet for future development if you want to bring it in-house.',
      },
    ],
  },
  {
    category: 'Technical & Security',
    items: [
      {
        question: 'How do you handle user authentication and data security?',
        answer:
          "Authentication uses industry-standard libraries — Supabase Auth, NextAuth.js, or Auth0 depending on complexity. We never build custom authentication from scratch (a common source of security vulnerabilities). Data at rest is encrypted by the database layer. Data in transit uses TLS 1.3. Role-based access control (RBAC) is built at the API layer, not just the frontend. For applications handling financial data, health information, or sensitive business data, we can implement SOC 2-aligned security controls on request.",
      },
      {
        question: 'Can your web apps handle high traffic?',
        answer:
          'FactoryJet apps are built to scale. Next.js on Cloudflare Pages handles millions of requests per month on the free tier for static content. Dynamic API routes deploy to serverless functions that auto-scale. For database-heavy apps with high concurrency, we architect around connection pooling and read replicas from the start. We also do load testing before launch — so you know your app handles peak traffic, not discover the limit in production.',
      },
      {
        question: 'Do you integrate with existing business software?',
        answer:
          'Yes — integration is a core part of most web app builds. Common integrations: CRM (HubSpot, Salesforce, Pipedrive), payment processing (Stripe, PayPal), email (SendGrid, Postmark, Resend), calendar/scheduling (Google Calendar, Calendly API, Cal.com), accounting (QuickBooks, Xero), SMS (Twilio), and shipping (ShipBob, EasyPost). If it has a REST API or webhook support, we can connect to it. We document every integration in the spec before development starts.',
      },
      {
        question: 'What happens if there is a bug after launch?',
        answer:
          "Every FactoryJet web application includes a 60-day post-launch warranty for bugs — defined as behavior that doesn't match the agreed specification. Bugs are fixed at no charge within this period. After 60 days, our maintenance plans cover ongoing bug fixes and security patches. Critical production bugs (app down, data loss risk) are responded to within 4 hours regardless of whether you're on a maintenance plan — we don't leave apps broken.",
      },
    ],
  },
  {
    category: 'Working With FactoryJet',
    items: [
      {
        question: 'Do I need a technical background to work with FactoryJet?',
        answer:
          "No — the majority of our clients are business owners, not developers. Our discovery process is designed to extract technical requirements from non-technical input. Tell us what your users need to do, what problems you're solving, and what success looks like — we translate that into an engineering spec. You review and approve in plain English. You don't need to know what a database schema is to build a great product with us.",
      },
      {
        question: 'Can you take over a web application another developer started?',
        answer:
          'Yes — we do application rescues regularly. The first step is a codebase audit ($500, credited toward the project if you proceed) where we assess code quality, security posture, test coverage, and architectural decisions. We give you an honest assessment of whether it\'s better to continue building on what exists or start fresh. In our experience, about 60% of rescues are "continue with fixes" and 40% are "rebuild the core." We never recommend a rebuild just to bill more hours — the spec determines the honest answer.',
      },
      {
        question: 'Will the web application work on all devices and browsers?',
        answer:
          'Yes — all FactoryJet web applications are tested on Chrome, Firefox, Safari, and Edge on desktop, and Chrome and Safari on iOS and Android mobile. Responsive design is built into the component library from the start, not retrofitted. For complex dashboards with heavy data tables, we implement responsive table patterns that work on mobile without horizontal scrolling. Accessibility (WCAG 2.1 AA) is included at no extra charge for all new builds.',
      },
      {
        question: 'Can FactoryJet add AI features to a web application?',
        answer:
          "Yes — AI integration is increasingly common in our web app projects. We integrate large language models (OpenAI GPT-4, Anthropic Claude, Google Gemini) for features like: AI-assisted content generation, smart search and filtering, document summarization, automated customer response drafts, and data extraction from unstructured inputs. We also build retrieval-augmented generation (RAG) systems — apps that let users query your proprietary data using natural language. AI features are quoted as add-ons to the base application scope.",
      },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page Component
───────────────────────────────────────────────────────────────────────────── */

export default function WebApplicationDevelopmentPage() {
  return (
    <>
      {/* JSON-LD */}
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader />

      {/* ── 1. HERO ── */}
      <Hero
        eyebrow="WEB APPLICATION DEVELOPMENT"
        headline="Custom Web Applications Built for US Businesses — Starting at $7,500"
        subheadline="Booking systems, customer portals, SaaS MVPs, internal dashboards. FactoryJet builds production-ready web apps at 60–70% below US development agency rates — with a phased delivery model that gets you live sooner."
        primaryCta={{ label: 'Get a Free Estimate', href: '/contact' }}
        secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
        trustSignals={[
          '500+ US businesses served',
          '25+ years engineering experience',
          '60–70% below US agency rates',
        ]}
        rightSlot={
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 space-y-4">
            <p className="text-xs font-fj-mono uppercase tracking-widest text-white/50">
              Build vs. Buy Decision Framework
            </p>
            <div className="space-y-3">
              {[
                {
                  trigger: 'Users log in and take actions',
                  verdict: 'Custom web app',
                  color: 'text-green-400',
                },
                {
                  trigger: 'Off-the-shelf tools don\'t quite fit',
                  verdict: 'Custom web app',
                  color: 'text-green-400',
                },
                {
                  trigger: 'You\'re paying for features you don\'t use',
                  verdict: 'Custom web app',
                  color: 'text-green-400',
                },
                {
                  trigger: 'Mostly static content + contact form',
                  verdict: 'Website is fine',
                  color: 'text-yellow-400',
                },
                {
                  trigger: 'Standard e-commerce, no custom logic',
                  verdict: 'Shopify works',
                  color: 'text-yellow-400',
                },
              ].map(({ trigger, verdict, color }) => (
                <div key={trigger} className="flex items-start gap-3 text-sm font-fj-body">
                  <span className="text-white/40 mt-0.5 shrink-0">→</span>
                  <div>
                    <span className="text-white/70">{trigger}</span>
                    <span className={`ml-2 font-semibold ${color}`}>→ {verdict}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-white/30 font-fj-body pt-1">Not sure? Tell us what you need. We'll tell you if a simpler solution works better.</p>
          </div>
        }
      />

      {/* ── 2. LOGO BAR ── */}
      <LogoBar />

      {/* ── 3. TRUST BLOCK ── */}
      <BigThreeTrustBlock
        stats={[
          { value: '$7,500', label: 'MVP Starting Price', sublabel: 'Auth + core feature + admin panel' },
          { value: '4–8 Wks', label: 'MVP Delivery', sublabel: 'Working product in your hands fast' },
          { value: '60 Days', label: 'Bug Warranty', sublabel: 'Post-launch fixes at no charge' },
        ]}
      />

      {/* ── 4. SERVICE EXPLANATION ── */}
      <ServiceExplanation
        eyebrow="WHY CUSTOM WEB APPS"
        headline="When off-the-shelf software stops fitting, a custom web app starts making sense"
        body={[
          "Most businesses start with SaaS tools — and that's the right call. HubSpot for CRM, Calendly for scheduling, Jotform for data collection. These tools are fast to adopt and cheap to start.",
          "The problem shows up 12–24 months in. You're paying for five overlapping tools that don't talk to each other. Your team has built workarounds on top of workarounds. You're exporting CSVs between systems that should share data automatically. Every new hire needs a week of onboarding just to learn the tool stack.",
          "That's when a custom web application starts penciling out. One system that matches your actual workflow, integrates with everything you already use, and costs a one-time build fee instead of five monthly subscriptions forever.",
          "FactoryJet has built this kind of application for hundreds of US businesses — from 5-employee service shops that needed a simple booking portal to 50-person companies that needed a full operations platform.",
        ]}
        rightSlot={
          <div className="rounded-2xl border border-fj-charcoal/20 bg-fj-cream p-6 space-y-3">
            <p className="text-xs font-fj-mono uppercase tracking-widest text-fj-ink/50 mb-3">
              What We Build
            </p>
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
                <div className="w-2 h-2 rounded-full bg-fj-jet-blue mt-1.5 shrink-0" />
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
        body="The average US SMB paying for 5–7 SaaS tools spends $1,200–$3,500 per month in subscriptions — $14,400–$42,000 per year — for software that was designed for someone else's workflow. A custom web application built at FactoryJet for $15,000–$25,000 pays for itself in 6–18 months, eliminating subscription costs, reducing manual data entry, and giving your team a system that actually matches how your business works. The math changes fast."
        stats={[
          { value: '$28K', label: 'Average annual SaaS spend', sub: 'US SMB with 5+ tools' },
          { value: '12 mo', label: 'Typical custom app payback period', sub: 'vs. SaaS subscriptions' },
          { value: '81%', label: 'YoY growth in web app demand', sub: 'among US SMBs (2024→2025)' },
        ]}
      />

      {/* ── 6. INDUSTRIES ── */}
      <IndustriesGrid
        eyebrow="INDUSTRIES WE SERVE"
        headline="Web applications we've built across US business verticals"
        items={[
          {
            title: 'Healthcare & Wellness',
            description: 'Patient portals, appointment booking, HIPAA-conscious data handling, intake forms, and practitioner dashboards.',
            icon: '🏥',
          },
          {
            title: 'Legal & Professional Services',
            description: 'Client portals with document sharing, matter tracking, billing integration, and secure communication.',
            icon: '⚖️',
          },
          {
            title: 'Real Estate',
            description: 'Agent portals, property management dashboards, lease tracking, maintenance request workflows, and owner reporting.',
            icon: '🏠',
          },
          {
            title: 'E-Commerce & Retail',
            description: 'B2B wholesale portals, custom checkout flows, inventory dashboards, subscription billing, and multi-location management.',
            icon: '🛒',
          },
          {
            title: 'Field Services',
            description: 'Technician dispatch, job scheduling, mobile-first field apps, customer communication, and invoicing workflows.',
            icon: '🔧',
          },
          {
            title: 'SaaS & Technology',
            description: 'Multi-tenant platforms, subscription billing (Stripe), feature flags, usage metering, and self-serve onboarding.',
            icon: '💻',
          },
        ]}
      />

      {/* ── 7. SERVICE JOURNEY ── */}
      <div id="process">
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Concept to Production-Ready App — in Five Structured Phases"
          subheadline="Every FactoryJet web application project follows the same five-phase process. You have visibility into every phase, and a working product to test before final delivery."
          stages={journeyStages}
          cta={{ label: 'Start With a Free Consultation', href: '/contact' }}
        />
      </div>

      {/* ── 8. CITY CONTEXT ── */}
      <CityContextSection
        eyebrow="SERVING US BUSINESSES"
        headline="Custom web application development for US businesses — remote-first, US-time-zone friendly"
        body="FactoryJet works with US businesses across every industry and city. Our engineering team is India-based but runs on US East and West Coast time zones. Daily standups, Slack access, and weekly video reviews keep you connected to your project without the overhead of a local agency."
        cities={[
          { name: 'Austin, TX', href: '/us/cities/austin' },
          { name: 'Miami, FL', href: '/us/cities/miami' },
          { name: 'Denver, CO', href: '/us/cities/denver' },
          { name: 'Nashville, TN', href: '/us/cities/nashville' },
          { name: 'Charlotte, NC', href: '/us/cities/charlotte' },
          { name: 'Portland, OR', href: '/us/cities/portland' },
          { name: 'Raleigh, NC', href: '/us/cities/raleigh' },
          { name: 'Tampa, FL', href: '/us/cities/tampa' },
        ]}
      />

      {/* ── 9. COMPARISON TABLE ── */}
      <ComparisonTable
        eyebrow="HOW WE COMPARE"
        headline="FactoryJet vs. US Dev Agency vs. Freelancer vs. No-Code Platforms"
        columns={['FactoryJet', 'US Dev Agency', 'Freelancer', 'No-Code (Bubble/Webflow)']}
        rows={[
          {
            feature: 'MVP Starting Price',
            values: ['$7,500', '$50,000+', '$10,000–$30,000', '$500–$2,000'],
          },
          {
            feature: 'Fixed-Price Contract',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="us" kind="no" />,
              <CompareIcon key="fl" kind="partial" />,
              <CompareIcon key="nc" kind="yes" />,
            ],
          },
          {
            feature: 'Custom Code (You Own It)',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="us" kind="yes" />,
              <CompareIcon key="fl" kind="yes" />,
              <CompareIcon key="nc" kind="no" />,
            ],
          },
          {
            feature: 'No Vendor Lock-In',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="us" kind="yes" />,
              <CompareIcon key="fl" kind="yes" />,
              <CompareIcon key="nc" kind="no" />,
            ],
          },
          {
            feature: 'Scales to Enterprise Traffic',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="us" kind="yes" />,
              <CompareIcon key="fl" kind="partial" />,
              <CompareIcon key="nc" kind="partial" />,
            ],
          },
          {
            feature: 'Dedicated Project Manager',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="us" kind="yes" />,
              <CompareIcon key="fl" kind="no" />,
              <CompareIcon key="nc" kind="no" />,
            ],
          },
          {
            feature: '60-Day Bug Warranty',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="us" kind="partial" />,
              <CompareIcon key="fl" kind="no" />,
              <CompareIcon key="nc" kind="no" />,
            ],
          },
          {
            feature: 'AI Feature Integration',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="us" kind="yes" />,
              <CompareIcon key="fl" kind="partial" />,
              <CompareIcon key="nc" kind="partial" />,
            ],
          },
          {
            feature: 'US Time Zone Availability',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="us" kind="yes" />,
              <CompareIcon key="fl" kind="partial" />,
              <CompareIcon key="nc" kind="yes" />,
            ],
          },
          {
            feature: 'Source Code on Handoff',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="us" kind="yes" />,
              <CompareIcon key="fl" kind="yes" />,
              <CompareIcon key="nc" kind="no" />,
            ],
          },
        ]}
      />

      {/* ── 10. PRICING TIERS ── */}
      <div id="pricing">
        <PricingTiers
          eyebrow="WEB APPLICATION PRICING"
          headline="Fixed-Price Web Application Packages — Scoped Before We Start"
          tiers={[
            {
              name: 'MVP',
              price: '$7,500',
              description: 'One focused use case. User authentication, core feature set, basic admin panel. Production-ready and deployable.',
              features: [
                'User authentication (login, signup, password reset)',
                'One primary user workflow',
                'Database design & setup',
                'Basic admin panel',
                'One third-party integration',
                'Mobile-responsive',
                'Deployed to production',
                '4–8 week delivery',
                '60-day bug warranty',
                'Full source code handoff',
              ],
              cta: { label: 'Get a Scope & Quote', href: '/contact' },
            },
            {
              name: 'Growth Platform',
              price: '$18,000',
              description: 'Multi-role application with dashboard, reporting, multiple integrations, and a full admin panel for your team.',
              features: [
                'Multiple user roles (admin, manager, client)',
                '3–5 core workflows',
                'Analytics & reporting dashboard',
                'Up to 5 third-party integrations',
                'Email notification system',
                'File upload & storage',
                'Advanced admin panel',
                'Role-based access control',
                '8–14 week delivery',
                '60-day bug warranty',
              ],
              cta: { label: 'Get a Scope & Quote', href: '/contact' },
              highlight: true,
              badge: 'Most Popular',
            },
            {
              name: 'SaaS Platform',
              price: '$35,000+',
              description: 'Multi-tenant SaaS with subscription billing, self-serve onboarding, usage metering, and enterprise-grade architecture.',
              features: [
                'Multi-tenant architecture',
                'Stripe subscription billing',
                'Self-serve onboarding & plan management',
                'Usage metering & limits',
                'White-label options',
                'API with documentation',
                'Unlimited integrations',
                'Advanced permissions & SSO',
                'Load testing & scalability review',
                'Full technical documentation',
              ],
              cta: { label: 'Schedule a Discovery Call', href: '/contact' },
            },
          ]}
          footnote="All projects start with a free discovery call and a written specification. The price is fixed to the spec."
        />
      </div>

      {/* ── 11. RELATED SERVICES ── */}
      <IndustriesGrid
        eyebrow="RELATED SERVICES"
        headline="Other FactoryJet services that work alongside custom web apps"
        items={[
          {
            title: 'AI Automation',
            description: 'Connect your web app to AI workflows — automated responses, data extraction, LLM-powered features. Starting at $2,500.',
            icon: '🤖',
            href: '/us/services/ai-automation',
          },
          {
            title: 'Website Design',
            description: 'Marketing website to complement your web application — lead capture, product marketing, SEO. Starting at $1,499.',
            icon: '🌐',
            href: '/us/services/website-redesign',
          },
          {
            title: 'WordPress Development',
            description: 'Content-heavy sites with custom functionality — membership areas, advanced forms, WooCommerce. Starting at $1,999.',
            icon: '🔵',
            href: '/us/services/wordpress-development',
          },
          {
            title: 'Transparent Pricing',
            description: 'See all FactoryJet service pricing — fixed packages, no hourly billing, no surprise invoices.',
            icon: '💰',
            href: '/us/pricing',
          },
        ]}
      />

      {/* ── 12. TESTIMONIALS ── */}
      <TestimonialsSection
        eyebrow="CLIENT RESULTS"
        headline="What US businesses say about FactoryJet web application development"
        testimonials={[
          {
            quote: "We were paying $4,200 a month across seven different SaaS tools that barely talked to each other. FactoryJet built us one custom platform for $22,000. It paid for itself in under six months and our team actually knows how to use it.",
            author: 'David K.',
            role: 'COO',
            company: 'Nashville Field Services Co.',
          },
          {
            quote: "I'd gotten two quotes — one from a US agency at $85,000 and one from an overseas firm that ghosted me halfway through. FactoryJet delivered our booking platform for $14,500, on time, with source code and documentation. Exactly what they scoped.",
            author: 'Sarah M.',
            role: 'Founder',
            company: 'Portland Wellness Platform',
          },
          {
            quote: "The discovery phase alone was worth the engagement. They mapped out requirements I hadn't even thought of — and the fixed price held. No surprises on the invoice.",
            author: 'James T.',
            role: 'CEO',
            company: 'Austin Property Management SaaS',
          },
        ]}
      />

      {/* ── 13. FAQ ── */}
      <FAQ
        eyebrow="WEB APPLICATION FAQ"
        headline="Everything you need to know about custom web application development"
        categories={faqCategories}
      />

      {/* ── 14. FINAL CTA ── */}
      <FinalCTA
        eyebrow="START YOUR PROJECT"
        headline="Tell us what you need to build. We'll scope it and send a fixed price."
        subheadline="No commitment to respond. We do a 30-minute discovery call, map your requirements, and send a written scope + fixed price within 48 hours. If the numbers work, we start. If not, you have a free scope document for any future vendor."
        primaryCta={{ label: 'Schedule a Free Discovery Call', href: '/contact' }}
        secondaryCta={{ label: 'See Pricing', href: '/us/pricing' }}
        trustSignals={[
          'Fixed price — always',
          '60-day bug warranty',
          'Full source code on handoff',
        ]}
      />

      <SiteFooter />
    </>
  );
}
