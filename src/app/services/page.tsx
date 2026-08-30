import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Image from 'next/image';
import Link from 'next/link';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FinalCTA from '@/components/v2/FinalCTA';
import ModalCTAButton from '@/components/v2/ModalCTAButton';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Web Design Services for US Small Businesses | FactoryJet',
  description:
    'Custom websites, Shopify stores, AI agents & web apps for US small businesses. 7-day delivery, fixed-price, milestone-paid. Full code ownership, no retainers.',
  alternates: { canonical: 'https://factoryjet.com/services' },
  openGraph: {
    title: 'Web Design & Development Services USA | FactoryJet',
    description:
      '500+ websites built for businesses across the US, UK, UAE and India. Custom web design, Shopify development, AI agents, and web apps, delivered in 7 days, engineered for measurable outcomes.',
    url: 'https://factoryjet.com/services',
    siteName: 'FactoryJet',
    type: 'website',
  },
  other: {
    'geo.region': 'US',
    'geo.placename': 'United States',
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD
───────────────────────────────────────────────────────────────────────────── */

// Freshness signal. Benchmark: 56% of AI-Overview-cited pages carry it.
// Keep honest: bump when the page's content actually changes.
const PAGE_MODIFIED = '2026-08-30';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services#webpage',
  url: 'https://factoryjet.com/services',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds your website in 7 days',
  description: 'Our proven 7-day process for delivering professional, SEO-optimized websites for US businesses.',
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
      name: 'Days 3-4 | Design',
      text: 'We design every page with your brand identity, mobile-first layouts, and conversion-focused UX. You review and approve all designs.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5-6 | Development & SEO',
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
   Service card data
───────────────────────────────────────────────────────────────────────────── */

const SERVICES = [
  {
    image: '/images/services/card-web-design.webp',
    imageAlt: 'Custom website homepage design displayed on a MacBook Pro',
    eyebrow: 'MOST POPULAR',
    title: 'Custom Web Design',
    description:
      'Figma-first design built in Next.js or WordPress. Lighthouse 95+ guaranteed. Live in 7 days.',
    href: '/services/web-design',
    cta: 'See Web Design',
    featured: true,
  },
  {
    image: '/images/services/card-shopify.webp',
    imageAlt: 'Shopify storefront on a MacBook with a skincare product beside it',
    eyebrow: 'E-COMMERCE',
    title: 'Shopify Development',
    description:
      'Custom Liquid themes or headless Shopify storefronts. Conversion-optimized product pages and checkout.',
    href: '/services/shopify-development',
    cta: 'See Shopify Services',
    featured: false,
  },
  {
    image: '/images/services/card-ecommerce.webp',
    imageAlt: 'Custom e-commerce checkout flow on dual screens',
    eyebrow: 'E-COMMERCE',
    title: 'Custom E-commerce',
    description:
      'Full-stack e-commerce for complex catalogs, B2B portals, and DTC brands that need more than Shopify.',
    href: '/services/ecommerce-development',
    cta: 'See E-commerce Services',
    featured: false,
  },
  {
    image: '/images/services/digital-marketing-what.webp',
    imageAlt: 'Marketing team reviewing paid campaign performance on a shared screen',
    eyebrow: 'E-COMMERCE',
    title: 'Ecommerce Marketing',
    description:
      'Paid acquisition for online stores: Google Ads, paid social, shopping feeds, marketplaces, and retention.',
    href: '/services/ecommerce-marketing-agency',
    cta: 'See Ecommerce Marketing',
    featured: false,
  },
  {
    image: '/images/services/ai-seo.webp',
    imageAlt: 'Strategist mapping a search roadmap on a whiteboard',
    eyebrow: 'SEO',
    title: 'SEO Consulting',
    description:
      'Advisory and strategy for teams with in-house resource: audits, roadmaps, and the thinking transferred to your people.',
    href: '/services/seo-consulting',
    cta: 'See SEO Consulting',
    featured: false,
  },
  {
    image: '/images/us/services/roofing-seo/hero.webp',
    imageAlt: 'Aerial view of a suburban neighbourhood of shingle rooftops at golden hour',
    eyebrow: 'SEO',
    title: 'Roofing SEO',
    description:
      'Search for roofing contractors: storm-driven demand, service-area ranking, and a steady flow of roofing leads.',
    href: '/services/roofing-seo',
    cta: 'See Roofing SEO',
    featured: false,
  },
  {
    image: '/images/services/card-webapp.webp',
    imageAlt: 'SaaS analytics dashboard on an ultrawide monitor',
    eyebrow: 'WEB APPS',
    title: 'Web Application Development',
    description:
      'React and Next.js applications: dashboards, client portals, SaaS MVPs, and internal tools.',
    href: '/services/web-application-development',
    cta: 'See Web App Services',
    featured: false,
  },
  {
    image: '/images/services/card-redesign.webp',
    imageAlt: 'Before and after website redesign shown side by side in a browser',
    eyebrow: 'REDESIGN',
    title: 'Website Redesign',
    description:
      'Modernize your existing site without losing SEO equity. Same brand, sharper design, faster performance.',
    href: '/services/website-redesign',
    cta: 'See Redesign Services',
    featured: false,
  },
  {
    image: '/images/services/card-wordpress.webp',
    imageAlt: 'WordPress Gutenberg editor on a MacBook with a clean editorial site in the background',
    eyebrow: 'CMS',
    title: 'WordPress Development',
    description:
      'Custom block themes, headless WordPress, and CMS setups your team can actually manage.',
    href: '/services/wordpress-development',
    cta: 'See WordPress Services',
    featured: false,
  },
  {
    image: '/images/services/card-webapp.webp',
    imageAlt: 'AI agent workflow dashboard showing automated task routing and lead qualification',
    eyebrow: 'AI · NEW',
    title: 'AI Agent Development',
    description:
      'Custom AI agents that qualify leads, answer customer questions, and automate repetitive workflows, 24/7, no extra headcount.',
    href: '/services/ai-agent-development',
    cta: 'See AI Agent Services',
    featured: false,
  },
  {
    image: '/images/services/card-webapp.webp',
    imageAlt: 'AI automation workflow diagram connecting CRM, email, and support systems',
    eyebrow: 'AI · AUTOMATION',
    title: 'AI Automation',
    description:
      'Connect your tools. Automate your ops. We build n8n, Zapier, and custom AI pipelines that save 10-30 hours a week.',
    href: '/services/ai-automation',
    cta: 'See AI Automation',
    featured: false,
  },
  {
    image: '/images/services/card-law-firm.webp',
    imageAlt: 'Law firm website on a MacBook showing a professional attorney profile page',
    eyebrow: 'LEGAL',
    title: 'Law Firm Websites',
    description:
      'High-converting attorney websites that rank for local searches and turn visitors into consultation requests.',
    href: '/services/law-firm-website-design',
    cta: 'See Law Firm Services',
    featured: false,
  },
  {
    image: '/images/services/card-real-estate.webp',
    imageAlt: 'Real estate agent website on a laptop showing property listings and search filters',
    eyebrow: 'REAL ESTATE',
    title: 'Real Estate Websites',
    description:
      'IDX-integrated property listing sites, agent portfolios, and brokerage platforms that generate leads on autopilot.',
    href: '/services/real-estate-website-design',
    cta: 'See Real Estate Services',
    featured: false,
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ data
───────────────────────────────────────────────────────────────────────────── */

const FAQS = [
  {
    q: 'How much does a website cost with FactoryJet?',
    a: 'Our pricing is fixed and scoped to your build. The main drivers are page count, the platform you choose, and any custom features or integrations. Custom web apps and AI integrations are scoped individually. Every project gets a fixed price confirmed in writing after a free discovery call, so you know the full cost before we start. No billing surprises, ever.',
  },
  {
    q: 'Can you really deliver a website in 7 days?',
    a: 'Yes, for standard business websites up to 5 pages. We\'ve done it 500+ times. The 7-day clock starts the day you approve the Figma design. If we miss the deadline for any reason on our end, you don\'t pay.',
  },
  {
    q: 'How do you keep pricing lower than typical agency quotes?',
    a: 'We work fixed-price and milestone-paid, with 12+ years of experience specifically serving the US market and US-hour project management. Our lean operations let us scope accurately on the first call. The design quality, code quality, and communication are exactly what you\'d get from a traditional agency that charges several times more.',
  },
  {
    q: 'What\'s included in the fixed price?',
    a: 'Design (Figma files), development, mobile responsiveness, basic on-page SEO setup, Google Analytics integration, and one round of revisions. Hosting, domain, and content writing are separate unless you add them.',
  },
  {
    q: 'Do I get the source code?',
    a: 'Yes. Full code ownership is non-negotiable at FactoryJet. We hand over the complete GitHub repository on final payment. You can host it anywhere, modify it yourself, or hand it to another developer.',
  },
  {
    q: 'Which platform do you build on?',
    a: 'Most business sites go on Next.js (our default, fastest performance, Lighthouse 95+). We also build on WordPress, Shopify, and Webflow depending on your content management needs. We\'ll recommend the right fit on the discovery call.',
  },
  {
    q: 'Do you work with US small businesses specifically?',
    a: 'That\'s our entire focus for FactoryJet\'s US division. We\'ve worked with 500+ businesses across Austin, Miami, Denver, Nashville, Portland, Charlotte, Raleigh, Tampa, and other US cities. Our whole process, pricing, delivery, communication hours, is designed around US SMBs.',
  },
  {
    q: 'What industries do you serve?',
    a: 'We\'ve built for retail, DTC brands, law firms, real estate agents, restaurants, professional services, SaaS companies, healthcare providers, and more. If you\'re a US small business that needs a website, we\'ve probably built one for a similar company.',
  },
  {
    q: 'Can you redesign my existing website without killing my SEO?',
    a: 'Yes, and we\'re careful about it. Our redesign process includes a full SEO audit before we touch anything. We preserve URL structure, redirect any changed URLs, and migrate meta tags. We\'ve never had a client lose significant rankings from a FactoryJet redesign.',
  },
  {
    q: 'What Shopify services do you offer?',
    a: 'Custom Liquid theme development, Shopify Plus setup, headless Shopify with Next.js, product page optimization, checkout customization, app integrations, and Shopify migrations from WooCommerce or Magento. We cover the full stack.',
  },
  {
    q: 'Do you build WooCommerce or Magento stores?',
    a: 'Yes. We build on WooCommerce for businesses that need WordPress-based e-commerce, and Magento for larger catalogs with complex B2B pricing rules. We\'ll help you choose the right platform based on your order volume and catalog size.',
  },
  {
    q: 'What\'s an AI agent, and does my small business actually need one?',
    a: 'An AI agent is a software program that handles repetitive tasks, answering customer questions, qualifying leads, routing support tickets, sending follow-up emails. If you\'re manually handling any of those at scale, an AI agent probably saves you 10-30 hours a week. We scope them honestly, if you don\'t need one yet, we\'ll tell you.',
  },
  {
    q: 'How does AI automation differ from AI agent development?',
    a: 'AI automation connects your existing tools (CRM, email, calendar, Slack) and triggers actions based on rules. AI agents are more autonomous, they reason, make decisions, and respond dynamically. Most businesses start with automation and add agents as they scale.',
  },
  {
    q: 'Do you build websites for law firms?',
    a: 'Yes. We have a dedicated law firm website design service with attorney-specific conversion patterns, practice area pages, attorney bio templates, case result displays, consultation booking forms, and local SEO optimization for city + practice area terms.',
  },
  {
    q: 'Can you build a real estate website with MLS/IDX listings?',
    a: 'Yes. We integrate IDX feeds (Showcase IDX, iHomefinder, and others) for live property listings and search. We also build custom property CMS setups for brokerages that want more control than a standard IDX plugin.',
  },
  {
    q: 'How do I get started?',
    a: 'Book a 30-minute strategy call. We\'ll look at your current site (if you have one), understand your goals, and send a fixed-price proposal within 24 hours. No sales pitch, just a practical conversation about what you need.',
  },
  {
    q: 'What happens if I need changes after the site is live?',
    a: 'Minor text and image changes are included in the first 30 days after launch. After that, we offer flexible retainer packages or fixed-price change requests. Nothing is open-ended: every piece of post-launch work is priced upfront.',
  },
  {
    q: 'Do you provide website maintenance?',
    a: 'Yes. We offer monthly maintenance plans covering security updates, plugin updates, uptime monitoring, and performance checks. We scope a plan to your site and share the cost up front.',
  },
  {
    q: 'Can you help with SEO after the website is built?',
    a: 'We handle technical SEO setup as part of every build, site speed, structured data, meta tags, sitemap, Core Web Vitals. For ongoing SEO (content, link building, local citations), we offer separate SEO retainers.',
  },
  {
    q: 'How is FactoryJet different from Fiverr or Upwork freelancers?',
    a: 'FactoryJet is a structured agency with a defined process, dedicated project managers, quality review layers, and a delivery guarantee. Freelancers can be great, but you\'re taking on the management risk yourself. With us, you get one point of contact, predictable delivery, and someone accountable if something goes wrong.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes. We\'ll sign your NDA before the discovery call if you need it. Mutual NDAs are also available. Your business ideas, designs, and data never leave our secure project environment.',
  },
  {
    q: 'Can I see examples of websites you\'ve built for US businesses?',
    a: 'Yes, visit our portfolio at factoryjet.com/portfolio to see live case studies. We also share Figma design files and Lighthouse scores on request.',
  },
  {
    q: 'What is headless commerce and when does a business need a Next.js 15 decoupled storefront?',
    a: 'Headless commerce decouples your customer-facing frontend (built with Next.js 15, React Server Components, and Tailwind CSS) from backend commerce engines like Shopify Plus or BigCommerce. It delivers sub-second page loads, total design flexibility, and higher mobile conversion rates for high-growth brands scaling beyond monolithic theme limitations.',
  },
  {
    q: 'How do you ensure 100/100 Google Core Web Vitals on every website build?',
    a: 'We engineer performance from the ground up: zero heavy third-party tracking scripts, native next/image responsive optimization, CSS containment, edge-cached dynamic content on Cloudflare/Vercel, and zero layout shift (CLS). Every custom site we deliver is verified against Google PageSpeed Insights.',
  },
  {
    q: 'What is Generative Engine Optimization (GEO) and how do you optimize sites for AI search?',
    a: 'Generative Engine Optimization (GEO) structures your website content, factual entities, comparison tables, and Schema.org JSON-LD markup so conversational AI search engines (ChatGPT, Google Gemini AI Overviews, Perplexity) directly cite and recommend your brand when users research purchasing decisions.',
  },
  {
    q: 'How do you handle bi-directional ERP and CRM data synchronization?',
    a: 'We build resilient REST and GraphQL API middleware connecting your digital storefront to enterprise ERP and CRM platforms, including NetSuite, SAP, Salesforce, HubSpot, Microsoft Dynamics 365, and QuickBooks Enterprise. Inventory, orders, pricing tiers, and customer records sync in real time with automated error logging.',
  },
  {
    q: 'What is your code handover process and do you provide full GitHub repository transfer?',
    a: 'Upon project completion and final milestone approval, we transfer full administrative ownership of the GitHub code repository, Vercel/Cloudflare deployment pipelines, Figma source design files, and DNS configurations. You own 100% of your intellectual property with zero agency lock-in.',
  },
  {
    q: 'What are the payment milestone terms for FactoryJet service engagements?',
    a: 'We work on transparent, milestone-governed fixed-price agreements: 50% deposit to kick off strategy and Figma design, and 50% upon final QA and production launch approval. We never charge hidden hourly overages or unexpected change-order fees.',
  },
  {
    q: 'What is the FactoryJet 7-Day Sprint delivery guarantee and how does it work?',
    a: 'For standard custom business websites up to 5 pages, we guarantee full design and development delivery within 7 business days from Figma milestone approval. Our structured daily milestones and dedicated senior engineering pods eliminate the multi-month delays common with traditional creative agencies.',
  },
  {
    q: 'How do you handle multi-currency, multi-language international e-commerce localization?',
    a: 'We configure native Shopify Markets, subfolder domain routing, automated geolocation IP detection, localized currency conversions, and automated hreflang XML sitemaps to ensure international customers enjoy a frictionless localized purchasing experience without SEO duplicate content penalties.',
  },
  {
    q: 'What is Conversion Rate Optimization (CRO) and how do you increase checkout velocity?',
    a: 'Our CRO engineering framework analyzes session recordings, heatmap drop-off points, mobile tap targets, and checkout friction. We implement sticky add-to-cart drawers, 1-click express payment buttons (Apple Pay, Shop Pay, Google Pay), and tiered in-cart upsells, lifting checkout conversion rates by 25% to 45%.',
  },
  {
    q: 'How do you migrate legacy monolithic websites to modern Next.js 15 architectures?',
    a: 'We execute structured zero-downtime replatforming: crawling 100% of legacy URLs, mapping 1:1 301 redirects, migrating blog and customer data with cryptographic integrity checks, and running side-by-side staging tests before DNS propagation to guarantee 0% organic search traffic loss.',
  },
  {
    q: 'What ongoing technical support and SLA guarantees are included post-launch?',
    a: 'Every project includes 30 days of dedicated hypercare support covering bug fixes, speed audits, and staff training. For ongoing partnerships, we offer monthly SLA retainers covering 24/7 uptime monitoring, critical security patching, feature enhancements, and continuous Core Web Vitals telemetry.',
  },
  {
    q: 'How do I book an architectural scoping call with FactoryJet founder Bhavesh Barot?',
    a: 'You can book a 30-minute discovery consultation directly via our Calendly calendar. We will review your current website, analyze technical bottlenecks, evaluate third-party integrations, and provide an actionable fixed-price proposal within 24 hours.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemList',
      name: 'FactoryJet Web Design & Development Services',
      description: 'Complete web design and development services for US small businesses',
      numberOfItems: 10,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Custom Web Design', url: 'https://factoryjet.com/services/web-design' },
        { '@type': 'ListItem', position: 2, name: 'Shopify Development', url: 'https://factoryjet.com/services/shopify-development' },
        { '@type': 'ListItem', position: 3, name: 'Custom E-commerce Development', url: 'https://factoryjet.com/services/ecommerce-development' },
        { '@type': 'ListItem', position: 4, name: 'Web Application Development', url: 'https://factoryjet.com/services/web-application-development' },
        { '@type': 'ListItem', position: 5, name: 'Website Redesign', url: 'https://factoryjet.com/services/website-redesign' },
        { '@type': 'ListItem', position: 6, name: 'WordPress Development', url: 'https://factoryjet.com/services/wordpress-development' },
        { '@type': 'ListItem', position: 7, name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
        { '@type': 'ListItem', position: 8, name: 'AI Automation', url: 'https://factoryjet.com/services/ai-automation' },
        { '@type': 'ListItem', position: 9, name: 'Law Firm Website Design', url: 'https://factoryjet.com/services/law-firm-website-design' },
        { '@type': 'ListItem', position: 10, name: 'Real Estate Website Design', url: 'https://factoryjet.com/services/real-estate-website-design' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://factoryjet.com/services' },
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://factoryjet.com/#organization',
      name: 'FactoryJet',
      url: 'https://factoryjet.com',
      logo: 'https://factoryjet.com/logo.png',
      sameAs: [
        'https://www.linkedin.com/company/factoryjet',
        'https://www.crunchbase.com/organization/factoryjet',
      ],
      
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Arrow icon
───────────────────────────────────────────────────────────────────────────── */
function ArrowIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path
        d="M2 5h6M5 2l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function USServicesHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <SiteHeader />

      <main className="bg-fj-cream">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ minHeight: 'clamp(360px, 45vw, 520px)' }}>
          <Image
            src="/images/services/services-hub-hero.webp"
            alt="Designer\'s desk with Figma mockups, keyboard, and wireframes, FactoryJet web design studio"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(6,13,31,0.82) 0%, rgba(15,15,18,0.65) 100%)',
            }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-[1120px] px-6 py-16 md:px-8 md:py-24">
            <p
              className="font-fj-mono font-bold uppercase"
              style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#F05A28' }}
            >
              SERVICES · USA
            </p>
            <h1
              className="fj-display mt-4 font-semibold"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                lineHeight: 1.07,
                letterSpacing: '-0.03em',
                color: '#F5F5F2',
                maxWidth: '20ch',
              }}
            >
              Web Design & Development Services for US Small Businesses
            </h1>
            <p
              className="mt-5 font-fj-body"
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.6,
                color: 'rgba(245,245,242,0.70)',
                maxWidth: '540px',
              }}
            >
              Fixed price confirmed upfront. Delivered in 7 days.
              Milestone-paid, same Figma design, same Next.js engineering, full code ownership.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <HeroInlineForm region="us" source="us_services_hero" />
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 font-fj-body text-base font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/10"
              >
                Browse All Services
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {['500+ websites delivered', '7-day delivery guarantee', 'Fixed price confirmed upfront', 'Full code ownership'].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full font-fj-mono font-medium"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.08em',
                    color: 'rgba(245,245,242,0.72)',
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    padding: '5px 12px',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4 STRATEGIC ENGINEERING PILLARS ──────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="mb-12">
              <p
                className="font-fj-mono font-bold uppercase"
                style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#B23E13' }}
              >
                // FULL-STACK CAPABILITIES
              </p>
              <h2
                className="fj-display mt-3 font-semibold text-fj-ink"
                style={{
                  fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  maxWidth: '32ch',
                }}
              >
                The 4 Pillars of the FactoryJet Engineering &amp; Growth Ecosystem
              </h2>
              <p
                className="mt-4 font-fj-body text-fj-neutral-600"
                style={{ fontSize: '1.0625rem', lineHeight: 1.65, maxWidth: '640px' }}
              >
                We eliminate the fragmentation of managing separate web development, e-commerce, AI automation, and paid acquisition vendors. Our senior in-house engineers and growth strategists deliver integrated digital solutions built to scale revenue and eliminate operational friction.
              </p>
              <p
                className="mt-3 font-fj-body text-fj-neutral-600"
                style={{ fontSize: '1rem', lineHeight: 1.65, maxWidth: '640px' }}
              >
                Whether you need a bespoke corporate web presence delivered in 7 days, a high-volume headless Shopify storefront processing millions in GMV, or an autonomous AI agent routing customer support tickets, FactoryJet provides senior engineering leadership, transparent milestone pricing, and 100% intellectual property ownership from day one. Every engagement is backed by our rigorous quality assurance benchmarks and a dedicated 30-day post-launch hypercare guarantee.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: '#FAFAF7',
                  border: '1px solid rgba(15,15,18,0.07)',
                }}
              >
                <div
                  className="font-fj-mono font-bold uppercase"
                  style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#B23E13' }}
                >
                  PILLAR 01 // FRONTEND ENGINEERING
                </div>
                <h3
                  className="fj-display mt-2 font-semibold text-fj-ink"
                  style={{ fontSize: '1.375rem', lineHeight: 1.2 }}
                >
                  High-Performance Next.js 15 Web Applications
                </h3>
                <p className="mt-3 font-fj-body text-fj-neutral-600" style={{ fontSize: '0.9375rem', lineHeight: 1.65 }}>
                  Sub-second serverless edge architectures built with React Server Components, Tailwind CSS, and headless content management systems (Sanity, Contentful, Strapi). Every web application is engineered for 100/100 Core Web Vitals, instant page transitions, semantic search visibility, and complete accessibility compliance across all device viewports.
                </p>
              </div>

              <div
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: '#FAFAF7',
                  border: '1px solid rgba(15,15,18,0.07)',
                }}
              >
                <div
                  className="font-fj-mono font-bold uppercase"
                  style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#B23E13' }}
                >
                  PILLAR 02 // ENTERPRISE COMMERCE
                </div>
                <h3
                  className="fj-display mt-2 font-semibold text-fj-ink"
                  style={{ fontSize: '1.375rem', lineHeight: 1.2 }}
                >
                  Shopify Plus, BigCommerce B2B &amp; Omnichannel Solutions
                </h3>
                <p className="mt-3 font-fj-body text-fj-neutral-600" style={{ fontSize: '0.9375rem', lineHeight: 1.65 }}>
                  From high-converting custom Shopify Liquid themes to complex BigCommerce B2B wholesale portals with automated RFQ negotiation and PunchOut e-procurement (cXML/OCI). We build unified commerce ecosystems connecting retail POS, online storefronts, and warehouse ERPs into a single source of truth. We ensure multi-currency localized checkout, real-time inventory allocation, and automated tax compliance across all global markets.
                </p>
              </div>

              <div
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: '#FAFAF7',
                  border: '1px solid rgba(15,15,18,0.07)',
                }}
              >
                <div
                  className="font-fj-mono font-bold uppercase"
                  style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#B23E13' }}
                >
                  PILLAR 03 // APPLIED ARTIFICIAL INTELLIGENCE
                </div>
                <h3
                  className="fj-display mt-2 font-semibold text-fj-ink"
                  style={{ fontSize: '1.375rem', lineHeight: 1.2 }}
                >
                  Autonomous AI Agents &amp; Intelligent Workflows
                </h3>
                <p className="mt-3 font-fj-body text-fj-neutral-600" style={{ fontSize: '0.9375rem', lineHeight: 1.65 }}>
                  Bespoke conversational AI chatbot agents and autonomous workflow pipelines built with LangChain, LlamaIndex, Python, and n8n. We integrate semantic RAG vector databases with your internal CRM, helpdesk, and accounting software, automating 70%+ of routine customer inquiries, data entry, and internal business operations.
                </p>
              </div>

              <div
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: '#FAFAF7',
                  border: '1px solid rgba(15,15,18,0.07)',
                }}
              >
                <div
                  className="font-fj-mono font-bold uppercase"
                  style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#B23E13' }}
                >
                  PILLAR 04 // OMNICHANNEL GROWTH
                </div>
                <h3
                  className="fj-display mt-2 font-semibold text-fj-ink"
                  style={{ fontSize: '1.375rem', lineHeight: 1.2 }}
                >
                  Amazon, Walmart Marketplace &amp; Generative AI SEO
                </h3>
                <p className="mt-3 font-fj-body text-fj-neutral-600" style={{ fontSize: '0.9375rem', lineHeight: 1.65 }}>
                  Full-funnel marketplace growth management across Amazon Seller/Vendor Central, Walmart Connect, and TikTok Shop. We combine algorithmic PPC optimization, WFS/FBA logistics management, and advanced Generative Engine Optimization (GEO) to dominate both traditional search and AI conversational recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── ENGINEERING STANDARDS & GOVERNANCE ───────────────────────────── */}
        <section className="py-14 md:py-20" style={{ backgroundColor: '#FAFAF7' }}>
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="mb-12">
              <p
                className="font-fj-mono font-bold uppercase"
                style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#B23E13' }}
              >
                // CODE GOVERNANCE
              </p>
              <h2
                className="fj-display mt-3 font-semibold text-fj-ink"
                style={{
                  fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  maxWidth: '30ch',
                }}
              >
                Zero-Lockin Architecture &amp; Production Quality Standards
              </h2>
              <p
                className="mt-4 font-fj-body text-fj-neutral-600"
                style={{ fontSize: '1.0625rem', lineHeight: 1.65, maxWidth: '640px' }}
              >
                We believe you should own your technology outright. Every line of code we write is modular, documented, and delivered directly to your private infrastructure without proprietary dependencies.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div
                className="rounded-2xl bg-white p-6"
                style={{ border: '1px solid rgba(15,15,18,0.07)' }}
              >
                <div
                  className="font-fj-mono font-bold uppercase"
                  style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#B23E13' }}
                >
                  100% IP OWNERSHIP
                </div>
                <h3 className="fj-display mt-2 font-semibold text-fj-ink" style={{ fontSize: '1.125rem' }}>
                  Full GitHub Code Handoff
                </h3>
                <p className="mt-2 font-fj-body text-fj-neutral-600" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                  No monthly platform hostage fees. On final project sign-off, we transfer full repository rights, Figma design files, and deployment environments directly to your organization.
                </p>
              </div>

              <div
                className="rounded-2xl bg-white p-6"
                style={{ border: '1px solid rgba(15,15,18,0.07)' }}
              >
                <div
                  className="font-fj-mono font-bold uppercase"
                  style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#B23E13' }}
                >
                  SUB-SECOND VELOCITY
                </div>
                <h3 className="fj-display mt-2 font-semibold text-fj-ink" style={{ fontSize: '1.125rem' }}>
                  100/100 Core Web Vitals
                </h3>
                <p className="mt-2 font-fj-body text-fj-neutral-600" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                  Built for extreme speed on global serverless edge CDNs. We eliminate render-blocking JavaScript and bloat to maximize organic search rankings and conversion rates.
                </p>
              </div>

              <div
                className="rounded-2xl bg-white p-6"
                style={{ border: '1px solid rgba(15,15,18,0.07)' }}
              >
                <div
                  className="font-fj-mono font-bold uppercase"
                  style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#B23E13' }}
                >
                  ENTERPRISE SECURITY
                </div>
                <h3 className="fj-display mt-2 font-semibold text-fj-ink" style={{ fontSize: '1.125rem' }}>
                  API-Level Least Privilege
                </h3>
                <p className="mt-2 font-fj-body text-fj-neutral-600" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                  Strict credential isolation, environment secret encryption, and compliant bi-directional middleware connecting your ERP, payment gateways, and third-party logistics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST STATS ──────────────────────────────────────────────────── */}
        <BigThreeTrustBlock eyebrow="BY THE NUMBERS" />

        {/* ── SERVICE CARDS ────────────────────────────────────────────────── */}
        <section id="services" className="py-14 md:py-20" style={{ backgroundColor: '#FAFAF7' }}>
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">

            <div className="mb-12">
              <p
                className="font-fj-mono font-bold uppercase"
                style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#B23E13' }}
              >
                WHAT WE BUILD
              </p>
              <h2
                className="fj-display mt-3 font-semibold text-fj-ink"
                style={{
                  fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  maxWidth: '26ch',
                }}
              >
                Everything You Need to Launch and Grow Online
              </h2>
              <p
                className="mt-4 font-fj-body text-fj-neutral-600"
                style={{ fontSize: '1.0625rem', lineHeight: 1.65, maxWidth: '560px' }}
              >
                Every service includes Figma-first design, clean code delivery, and a fixed price
                confirmed before we start. No hourly billing. No scope surprises.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white transition-shadow hover:shadow-lg"
                  style={{
                    border: '1px solid rgba(15,15,18,0.07)',
                    boxShadow: '0 2px 12px -2px rgba(15,15,18,0.08)',
                  }}
                >
                  <div className="relative w-full overflow-hidden" style={{ aspectRatio: '8 / 5' }}>
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px]"
                      style={{ background: '#F05A28' }}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p
                      className="font-fj-mono font-bold uppercase"
                      style={{ fontSize: '9px', letterSpacing: '0.13em', color: '#B23E13' }}
                    >
                      {service.eyebrow}
                      {service.featured && (
                        <span
                          className="ml-2 rounded-full px-2 py-0.5"
                          style={{
                            background: 'rgba(240,90,40,0.10)',
                            border: '1px solid rgba(240,90,40,0.25)',
                            fontSize: '8px',
                          }}
                        >
                          MOST POPULAR
                        </span>
                      )}
                    </p>
                    <h3
                      className="fj-display mt-2 font-semibold text-fj-ink"
                      style={{ fontSize: '1.1875rem', lineHeight: 1.2, letterSpacing: '-0.02em' }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="mt-2 font-fj-body text-fj-neutral-600"
                      style={{ fontSize: '0.875rem', lineHeight: 1.6 }}
                    >
                      {service.description}
                    </p>
                    <div className="mt-auto pt-5">
                      <span
                        className="inline-flex items-center gap-1.5 font-fj-body font-semibold transition-colors group-hover:opacity-80"
                        style={{ fontSize: '0.875rem', color: '#B23E13' }}
                      >
                        {service.cta}
                        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full" style={{ background: 'rgba(240,90,40,0.12)' }}>
                          <ArrowIcon />
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom nudge */}
            <div
              className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl px-8 py-6 sm:flex-row"
              style={{
                background: 'rgba(240,90,40,0.04)',
                border: '1px solid rgba(240,90,40,0.16)',
              }}
            >
              <div>
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.0625rem', letterSpacing: '-0.02em' }}
                >
                  Not sure which service you need?
                </p>
                <p className="mt-1 font-fj-body text-fj-neutral-600" style={{ fontSize: '0.875rem' }}>
                  Book a 30-minute discovery call. We&apos;ll recommend the right approach for your business and budget.
                </p>
              </div>
              <ModalCTAButton
                label="Book Free Call"
                region="us"
                btnVariant="primary-light"
              />
            </div>
          </div>
        </section>

        {/* ── GEO CONTEXT ──────────────────────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ backgroundColor: '#F5F5F2' }}>
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p
              className="font-fj-mono font-bold uppercase"
              style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#B23E13' }}
            >
              WHERE WE WORK
            </p>
            <h2
              className="fj-display mt-3 font-semibold text-fj-ink"
              style={{
                fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                maxWidth: '30ch',
              }}
            >
              Serving US Small Businesses Coast to Coast
            </h2>
            <p
              className="mt-4 font-fj-body text-fj-neutral-600"
              style={{ fontSize: '1rem', lineHeight: 1.65, maxWidth: '580px' }}
            >
              We work 100% remotely, which means we deliver the same quality whether you&apos;re in a major city
              or a small town. That said, we have deep familiarity with business climates in these markets:
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { city: 'Austin, TX', desc: 'Tech startups & DTC brands' },
                { city: 'Miami, FL', desc: 'Hospitality & retail' },
                { city: 'Denver, CO', desc: 'Outdoor, health & wellness' },
                { city: 'Nashville, TN', desc: 'Entertainment & services' },
                { city: 'Portland, OR', desc: 'Creative & food industry' },
                { city: 'Charlotte, NC', desc: 'Finance & professional services' },
                { city: 'Raleigh, NC', desc: 'Research & SaaS' },
                { city: 'Tampa, FL', desc: 'Healthcare & real estate' },
              ].map(({ city, desc }) => (
                <div
                  key={city}
                  className="rounded-xl bg-white p-4"
                  style={{ border: '1px solid rgba(15,15,18,0.07)' }}
                >
                  <p className="fj-display font-semibold text-fj-ink" style={{ fontSize: '0.9375rem' }}>
                    {city}
                  </p>
                  <p className="mt-1 font-fj-body text-fj-neutral-600" style={{ fontSize: '0.8125rem' }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
        <TestimonialsSection
          region="us"
          eyebrow="CLIENT RESULTS"
          headline="What founders say after we build their site"
        />

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ backgroundColor: '#FAFAF7' }}>
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p
              className="font-fj-mono font-bold uppercase"
              style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#B23E13' }}
            >
              COMMON QUESTIONS
            </p>
            <h2
              className="fj-display mt-3 font-semibold text-fj-ink"
              style={{
                fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                maxWidth: '28ch',
              }}
            >
              Questions US Business Owners Ask Before Getting Started
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {FAQS.map(({ q, a }) => (
                <div
                  key={q}
                  className="rounded-2xl bg-white p-6"
                  style={{ border: '1px solid rgba(15,15,18,0.07)' }}
                >
                  <p
                    className="fj-display font-semibold text-fj-ink"
                    style={{ fontSize: '0.9375rem', lineHeight: 1.35, letterSpacing: '-0.01em' }}
                  >
                    {q}
                  </p>
                  <p
                    className="mt-3 font-fj-body text-fj-neutral-600"
                    style={{ fontSize: '0.875rem', lineHeight: 1.65 }}
                  >
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Get a Fixed Price in 24 Hours"
          sub="Tell us what you need. We\'ll review your current site, recommend the right service, and send a fixed-price proposal within 24 hours. No hourly billing. No surprises."
          primaryCta={{ label: 'Get a Quote', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price confirmed upfront. Full code ownership. 7-day delivery guarantee."
        />

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
