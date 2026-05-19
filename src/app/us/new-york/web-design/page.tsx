import type { Metadata } from 'next';
import { webDesignPriorityCityAlternatesUS } from '@/data/hreflangMap';
import Hero from '@/components/v2/Hero';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import CityContextSection from '@/components/v2/CityContextSection';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow from '@/components/v2/ServiceJourneyRow';
import PortfolioShowcase from '@/components/v2/PortfolioShowcase';
import ComparisonTable from '@/components/v2/ComparisonTable';
import PricingTiers from '@/components/v2/PricingTiers';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import HeroBrowserMockup from '@/components/v2/HeroBrowserMockup';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

/* ─────────────────────────────────────────────────────────────────────────────
   Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Web Design New York City | NYC Web Design Agency | FactoryJet',
  description:
    'High-converting websites for New York City businesses from $1,999. 7-day delivery, 60–70% less than NYC agencies. Next.js, SEO & full code ownership.',
  alternates: {
    canonical: 'https://factoryjet.com/us/new-york/web-design',
    languages: webDesignPriorityCityAlternatesUS['new-york'],
  },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design New York City | FactoryJet',
    description:
      'Fast, conversion-focused websites for NYC small businesses. 7-day delivery, fixed price from $1,999. Next.js performance, Figma design, full code ownership.',
    url: 'https://factoryjet.com/us/new-york/web-design',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design NYC | FactoryJet',
    description: 'New York City web design agency — faster, cheaper, and better. Fixed price from $1,999. 7-day delivery.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  other: {
    'geo.region': 'US-NY',
    'geo.placename': 'New York City',
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD
───────────────────────────────────────────────────────────────────────────── */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://factoryjet.com/#organization',
      name: 'FactoryJet',
      url: 'https://factoryjet.com',
      telephone: '+1-332-867-0003',
      email: 'connect@factoryjet.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '228 Park Ave S',
        addressLocality: 'New York',
        addressRegion: 'NY',
        postalCode: '10003',
        addressCountry: 'US',
      },
      areaServed: { '@type': 'City', name: 'New York City' },
      priceRange: '$1,999 – $15,000+',
      description: 'FactoryJet is a web design agency building high-converting websites for NYC small businesses. 7-day delivery, fixed pricing, full code ownership.',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/us' },
        { '@type': 'ListItem', position: 2, name: 'United States', item: 'https://factoryjet.com/us' },
        { '@type': 'ListItem', position: 3, name: 'New York', item: 'https://factoryjet.com/us/new-york' },
        { '@type': 'ListItem', position: 4, name: 'Web Design', item: 'https://factoryjet.com/us/new-york/web-design' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does web design cost in New York City?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NYC web design agencies typically charge $8,000–$25,000 for a small business website. FactoryJet delivers the same Figma design quality and Next.js engineering for $1,999–$6,300 — 60–70% less — because we\'re remote-first without Manhattan overhead. Every price is fixed and confirmed in writing before work starts.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to get a website built?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Starter sites (5 pages) are delivered in 7 business days — that\'s our delivery guarantee. Growth projects (10–15 pages with CMS and lead capture) typically run 2–3 weeks. Scale builds with custom integrations are scoped individually. The clock starts the day you approve the Figma design.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you work with NYC businesses remotely?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, 100% remotely — which is how we keep costs 60–70% below local agencies. We use Loom video for design walkthroughs, Slack for daily communication, and Figma for collaborative design review. Most NYC clients tell us we\'re easier to work with than local agencies they\'ve tried.',
          },
        },
        {
          '@type': 'Question',
          name: 'What industries in NYC do you have experience with?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Finance and professional services, retail and DTC e-commerce, healthcare and medical practices, hospitality and restaurants, technology startups (Silicon Alley), and real estate. We\'ve built websites for each of these sectors and understand the specific conversion patterns that work in the NYC market.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you help my law firm get more cases from the web?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Law firm web design is one of our specialties. We build attorney websites structured for local SEO (e.g., "personal injury attorney New York"), with practice area pages built for E-E-A-T signals, structured attorney profiles, case result displays, and consultation booking forms.',
          },
        },
        {
          '@type': 'Question',
          name: 'I run an e-commerce brand in NYC — can you build my Shopify store?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. We build custom Shopify themes, headless Shopify storefronts on Next.js, and full custom e-commerce platforms. Our Shopify work includes conversion-optimized product pages, fast checkout flows, and integrations with Klaviyo, Recharge, and your 3PL.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you redesign my website without hurting my Google rankings?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Before touching anything, we do a full SEO audit — mapping every URL, checking rankings, and documenting redirect needs. We preserve URL structure where possible, implement 301 redirects where needed, and migrate all meta tags. We\'ve never had a client lose meaningful rankings from a FactoryJet redesign.',
          },
        },
        {
          '@type': 'Question',
          name: 'What platform do you build NYC websites on?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our default is Next.js on Cloudflare Pages — the fastest, most SEO-friendly architecture available. We also build on WordPress for content-heavy sites, Shopify for e-commerce, and Webflow for teams that want visual editing. We\'ll recommend the right platform based on your needs.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does your pricing compare to NYC freelancers on Upwork?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NYC freelancers on Upwork typically charge $50–$150/hour, with projects running 100–300 hours — that\'s $5,000–$45,000 in practice, often without a project manager or delivery guarantee. FactoryJet\'s fixed-price model gives you a defined scope, a guaranteed delivery date, and a full team.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer SEO services for NYC businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Every FactoryJet website includes technical SEO setup: site speed optimization, structured data markup, meta tags, sitemap submission, and Core Web Vitals compliance. For ongoing SEO (content marketing, link building, local citations), we offer separate monthly SEO retainers starting at $799/month.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you add AI features to my NYC business website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We offer AI Agent Development and AI Automation as dedicated services. Common additions include AI chat widgets for lead qualification, automated customer support flows, AI-powered search, and CRM integration that turns website interactions into sales pipeline entries.',
          },
        },
        {
          '@type': 'Question',
          name: 'My medical practice is in NYC — can you build a HIPAA-aware website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We design with HIPAA considerations in mind — specifically avoiding collection of PHI through standard contact forms and recommending compliant form solutions. We\'ve built dozens of healthcare websites and know what to avoid. We recommend verifying specific requirements with your compliance team.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I get started with a New York City web design project?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Book a free 30-minute strategy call. We\'ll review your current site, understand your goals, and send a fixed-price proposal within 24 hours. No sales pitch — just a practical conversation about what you need and what it\'ll cost.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you have a physical office in New York City?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We operate as a remote-first team, which is why we can offer NYC-quality web design at 60–70% below what local agencies charge. We work in US Eastern time and communicate via Slack, Loom, and Figma — the same tools your team already uses.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens after my NYC website launches?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The 30 days after launch are covered — minor text changes, bug fixes, and training requests are included. We give you a recorded CMS walkthrough so you can manage content yourself. After 30 days, choose a monthly maintenance plan ($99/month) or use us for one-off change requests at fixed rates.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you help my restaurant get more online reservations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We build restaurant websites with OpenTable, Resy, or Tock integration, fast mobile load times, Google Business Profile alignment, and menu pages structured for local search. NYC restaurant web design is a specific niche we\'ve worked in.',
          },
        },
        {
          '@type': 'Question',
          name: 'What\'s actually included in your web design project?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Strategy session, Figma design system, full development, mobile responsiveness, basic on-page SEO, GA4 setup, Google Tag Manager, revision rounds, sitemap submission, and 30-day post-launch support. The Figma files, GitHub repo, and all assets are yours. No proprietary platform. No monthly fee unless you want maintenance.',
          },
        },
        {
          '@type': 'Question',
          name: 'My startup is in the Flatiron District — do you work with early-stage companies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Early-stage startups are one of our most common client types in NYC. We\'ve built SaaS landing pages, investor-facing websites, client portals, and MVPs for companies at pre-seed through Series B. We understand that speed and flexibility matter at this stage.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I know FactoryJet is legitimate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We have 150+ verified reviews averaging 4.9/5, a public portfolio at factoryjet.com/us/portfolio, and 500+ completed projects. We publish our pricing, process, and delivery guarantees publicly — because transparency is the only way to build trust with clients who have never met us in person.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you build a website that works well in NYC and other US markets?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Most of our clients serve customers nationally, not just in NYC. We build with national SEO structure in mind — service pages targeting city + service terms, proper hreflang for any international audiences, and schema markup that helps AI search engines understand your geographic service area.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does my NYC business website need to be ADA compliant?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, and this is increasingly important for NYC businesses. New York City has seen a significant rise in ADA web accessibility lawsuits under the Americans with Disabilities Act — particularly in retail, hospitality, and healthcare. Every FactoryJet site is built to WCAG 2.1 AA standards: proper alt text, keyboard navigation, color contrast ratios, ARIA labels, and semantic HTML. We also recommend periodic accessibility audits as your site content grows.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I optimize my Google Business Profile for NYC local search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your Google Business Profile is one of the most powerful free tools for ranking in NYC neighborhood searches. We align your website\'s NAP (name, address, phone) data with your GBP listing, add LocalBusiness schema to your site, and structure your service pages to target borough and neighborhood + service terms (e.g., "Williamsburg personal trainer" or "Midtown accounting firm"). We can also audit your GBP as part of onboarding.',
          },
        },
      ],
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */


const FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Local Expertise' },
  { key: 'support',   label: 'Support & Ownership' },
];
export default function NewYorkWebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="bg-fj-cream">

        <Hero
          eyebrow="WEB DESIGN · NEW YORK CITY"
          headline="Web Design for New York City Businesses That Actually Converts"
          lead="NYC businesses can't afford a slow website, a vague agency, or a six-month timeline. FactoryJet builds production-ready websites in 7 days — from $1,999. You get the Figma files, the Next.js code, and results you can measure from week one."
          primaryCta={{ label: 'Start Your NYC Project', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See Our Work', href: '/us/portfolio' }}
          trustItems={['From $1,999 fixed price', '7-day delivery', 'Next.js + GA4 included', '500+ projects']}
          rightSlot={<HeroBrowserMockup />}
        />

        <LogoBar tagline="Trusted by 500+ US businesses from New York to San Francisco" />

        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="Results that New York businesses trust."
        />

        <CityContextSection
          eyebrow="NEW YORK CITY MARKET"
          headline="Why Your NYC Web Presence Can't Be an Afterthought"
          leadParagraphs={[
            "New York City is the largest US metro economy at over $2 trillion in GDP, home to 220,000+ businesses across finance, media, fashion, healthcare, legal services, and technology. The buyer pool is enormous — but so is the competition. In a city where your prospect walks past three competitor storefronts on the way to work, your website is often the deciding factor on whether they call you or someone else.",
            "NYC consumers and B2B buyers are among the most digitally sophisticated in the country. They notice slow load times, dated design, and missing information — and they leave. The average NYC small business competes not just with local firms but with national brands who have invested heavily in their digital presence. A website that loaded in 3 seconds and last looked good in 2019 is actively losing you money every day it's live.",
          ]}
          stats={[
            { value: '$2T+', label: 'New York City Metro GDP', sourceUrl: 'https://www.bea.gov/' },
            { value: '220,000+', label: 'NYC Business Establishments', sourceUrl: 'https://www.census.gov/' },
            { value: '8.3M', label: 'NYC Population (2024)', sourceUrl: 'https://www.census.gov/quickfacts/newyorkcitynewyork' },
          ]}
        />

        <ServiceExplanation
          eyebrow="WEB DESIGN · NEW YORK CITY"
          headline="What a Great NYC Business Website Actually Needs"
          lead="Most NYC web design agencies charge for the Manhattan zip code, not the quality of work. FactoryJet builds the same Next.js infrastructure, Figma design system, and conversion architecture — without the $400/hour overhead."
          body={
            <>
              <p>For <strong>financial services and professional services firms</strong> — the backbone of the NYC economy — a website needs to establish credibility before the prospect picks up the phone. That means attorney profiles built for E-E-A-T, clear service pages structured for local SEO, and lead-capture forms that route directly into your CRM.</p>
              <p>For <strong>retail, hospitality, and DTC brands</strong> in New York, the website is a revenue channel. We build Shopify storefronts and custom e-commerce that convert on mobile, load in under 1.5 seconds on a Manhattan 4G connection, and integrate with your inventory and fulfillment systems.</p>
              <p>For <strong>startups and tech companies</strong> in NYC's growing Silicon Alley ecosystem — from Midtown to the Flatiron District to Brooklyn Tech Triangle — we build SaaS landing pages, client portals, and web applications that scale with your growth stage.</p>
              <p>Every FactoryJet project ships with JSON-LD schema for AI search visibility, GA4 analytics wired in from day one, and a recorded handover so your team can manage the site without calling a developer every week.</p>
            </>
          }
          rightSlot={<img src="/images/us/services/service-web-design-process.webp" alt="" aria-hidden="true" className="w-full rounded-2xl object-cover" />}
        />

        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why NYC Small Businesses Choose FactoryJet Over Local Agencies"
          lead={"The average NYC web design agency charges $8,000–$25,000 for a small business website. Blue Fountain Media charges $10,000+ as a baseline. Coalition Technologies and Lounge Lizard are credible options — but neither publishes a 7-day delivery guarantee or builds in Next.js as standard.\n\nFactoryJet's Growth tier ($3,100–$6,300) covers 10–15 pages, a blog CMS, lead capture, GA4, and a training session. That's 60–70% below the NYC agency benchmark for equivalent scope — not because we cut corners, but because we don't have Manhattan rent to cover.\n\nEvery project ships with JSON-LD schema for AI search crawlers, Core Web Vitals performance budgets enforced from the first commit, and a codebase you own outright. No lock-in. No $500/month maintenance retainer you can't cancel."}
          pillars={[
            { title: 'NYC-aware', body: 'We understand the NYC business landscape — finance, media, legal, retail, hospitality. We\'ve built for all of them. The copy and conversion architecture reflect what actually works in this market.' },
            { title: 'Transparent', body: 'Pricing on the first call. No discovery fees, no \'scope review\' that costs $2,500 before work starts. Fixed price. Agreed upfront. In writing.' },
            { title: 'Guaranteed', body: '7-day delivery on Starter sites. If we miss the deadline for any reason on our end, you don\'t pay. We\'ve maintained a 97% on-time delivery rate across 500+ projects.' },
          ]}
        />

        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Build Your NYC Website in 7 Days"
          stages={[
            { number: '01', title: 'Discovery & Strategy', description: 'We map your ideal customer, audit your top 3 NYC competitors, and agree on a sitemap and content plan. You leave knowing exactly what the site will do and how we\'ll measure success.' },
            { number: '02', title: 'Design & Prototyping', description: 'Figma wireframes turn into a complete mobile-first design system. Two structured feedback rounds lock the visual direction before a single line of code is written.' },
            { number: '03', title: 'Development', description: 'We build in Next.js with animations, CMS integration, contact forms, and any third-party APIs you need. Performance budgets are enforced from the first commit.' },
            { number: '04', title: 'Content & SEO', description: 'NYC-optimized copy, WebP imagery, meta tags, JSON-LD schema, and internal links. We submit your sitemap to Google Search Console and verify AI crawler rendering.' },
            { number: '05', title: 'Launch & Handover', description: 'We deploy to Cloudflare Pages, wire up GA4 and GTM, and walk you through the CMS in a recorded session. A 30-day support window covers post-launch fixes.' },
          ]}
        />

        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="What NYC businesses look like after FactoryJet."
          cards={[
            {
              industry: 'Finance & Professional Services',
              title: 'NYC Finance & Professional Services Client',
              description: 'New York\'s financial services sector employs 350,000+ people. Law firms, accounting firms, consultancies, and wealth management firms compete heavily on digital presence. We build authority-first sites with structured service pages, attorney/partner profiles optimized for E-E-A-T, and lead-capture flows designed for longer B2B sales cycles.',
              imageSrc: '/images/us/new-york/web-design/portfolio-1.webp',
              stat1: '+40% conversions',
              stat2: '< 1.5s load time',
            },
            {
              industry: 'Retail & DTC E-commerce',
              title: 'NYC Retail & DTC Brand Client',
              description: 'New York is the epicenter of US retail and DTC brand culture. Whether you\'re a Soho boutique, a Brooklyn-based CPG brand, or a national DTC company with NYC headquarters, your e-commerce site needs to convert on mobile and handle peak traffic without performance degradation.',
              imageSrc: '/images/us/new-york/web-design/portfolio-2.webp',
              stat1: '+40% conversions',
              stat2: '< 1.5s load time',
            },
            {
              industry: 'Healthcare & Medical Practices',
              title: 'NYC Healthcare & Medical Practice Client',
              description: 'NYC has over 60,000 licensed physicians and thousands of private practices competing for patients. We build HIPAA-aware practice websites with clear specialty pages, physician profiles, online booking integration, and local SEO optimized for neighborhood + specialty search terms.',
              imageSrc: '/images/us/new-york/web-design/portfolio-3.webp',
              stat1: '+40% conversions',
              stat2: '< 1.5s load time',
            },
          ]}
          ctaHref="/us/portfolio"
          ctaLabel="View full portfolio"
        />

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs NYC Web Design Agencies"
          lead={"NYC agencies charge a premium for the zip code. Blue Fountain Media and Lounge Lizard are credible shops — but their baseline pricing for a small business website starts at $10,000. Coalition Technologies publishes rates of $8,000–$15,000.\n\nFactoryJet delivers the same quality for $1,999–$6,300, with a 7-day delivery guarantee on Starter sites and a Next.js codebase you own outright."}
          columns={[
            { label: 'Their pricing' },
            { label: 'FactoryJet', isFactoryJet: true },
            { label: 'Why we cost less' },
          ]}
          rows={[
            {
              feature: 'Blue Fountain Media',
              values: ['$10,000+ baseline', '$1,999–$6,300', 'FactoryJet builds in Next.js and delivers in 7 days. Blue Fountain is a full-service agency with higher overhead per project.'],
            },
            {
              feature: 'Coalition Technologies',
              values: ['$8,000–$15,000', '$1,999–$6,300', 'Same Next.js quality and SEO focus. FactoryJet publishes fixed pricing upfront — no discovery fee required.'],
            },
            {
              feature: 'Lounge Lizard',
              values: ['$15,000+ (design-led)', '$1,999–$6,300', 'Lounge Lizard focuses on design-heavy brand projects. FactoryJet delivers conversion-focused sites faster at a fraction of the cost.'],
            },
          ]}
        />

        <IndustriesGrid
          eyebrow="NEW YORK CITY × WEB DESIGN"
          headline="Web Design for NYC's Key Industries"
          lead="From Wall Street to Silicon Alley to Brooklyn's creative economy, NYC businesses have very different digital needs. FactoryJet has built websites for each of these sectors."
          sectors={[
            {
              name: 'Financial & Professional Services',
              description: 'NYC\'s financial services sector employs 350,000+ people. Law firms, accounting firms, consultancies, and wealth management firms need authority-first sites with structured service pages and lead-capture flows designed for B2B sales cycles.',
              example: 'Law firms, financial advisors, management consultancies, and accounting practices in Manhattan or Brooklyn.',
            },
            {
              name: 'Retail & DTC E-commerce',
              description: 'New York is the epicenter of US retail and DTC brand culture. Whether you\'re a Soho boutique or a Brooklyn-based CPG brand, your e-commerce site needs to convert on mobile and integrate cleanly with Shopify or custom inventory systems.',
              example: 'Independent boutiques in Williamsburg, DTC brands headquartered in NYC, Shopify-based fashion labels.',
            },
            {
              name: 'Healthcare & Medical Practices',
              description: 'NYC has over 60,000 licensed physicians. We build HIPAA-aware practice websites with clear specialty pages, physician profiles, online booking integration, and local SEO optimized for neighborhood + specialty search terms.',
              example: 'Private practices, dermatology clinics, dental offices, and specialist providers across all five boroughs.',
            },
            {
              name: 'Hospitality & Food & Beverage',
              description: 'NYC\'s restaurant and hospitality industry is one of the most competitive in the world. Restaurant websites need fast mobile load times, OpenTable or Resy integration, event booking, and Google Business Profile alignment.',
              example: 'Independent restaurants in Midtown, boutique hotels in the West Village, food & beverage brands seeking online ordering.',
            },
            {
              name: 'Technology & Startups (Silicon Alley)',
              description: 'NYC\'s tech sector — centered in the Flatiron District, Hudson Yards, and Brooklyn Tech Triangle — has raised over $30B in VC funding since 2020. Startups need websites that convert investors and customers simultaneously.',
              example: 'Series A–C startups in Fintech, Proptech, Adtech, and SaaS companies headquartered in NYC.',
            },
            {
              name: 'Real Estate',
              description: 'The NYC real estate market is the largest in the US. Brokerages, agents, and property management firms need IDX-integrated listing sites and local SEO targeting borough and neighborhood search terms.',
              example: 'Real estate agents, independent brokerages, property management firms in Manhattan, Brooklyn, and Queens.',
            },
          ]}
        />

        <PricingTiers
          eyebrow="TRANSPARENT PRICING"
          headline="Fixed Pricing for NYC Businesses — No Surprises"
          lead="NYC web design agencies charge $8,000–$25,000 for comparable work. FactoryJet's Growth tier covers 10–15 pages, a blog CMS, lead capture, GA4, and a training session for $3,100–$6,300. That's 60–70% below the NYC agency benchmark — with a 7-day delivery guarantee and a Next.js codebase you own outright."
          tiers={[
            {
              name: 'Starter',
              priceRange: '$1,999–$3,100',
              description: 'A 5-page business website that loads fast on mobile and ranks for your brand and core service. Best for solo practitioners and local NYC service businesses.',
              features: [
                '5 pages, mobile-responsive',
                'Basic SEO & schema markup',
                'Contact form with email forwarding',
                '2 revision rounds',
                '30-day post-launch support',
              ],
              cta: { label: 'Get a quote', href: '/contact' },
            },
            {
              name: 'Growth',
              priceRange: '$3,100–$6,300',
              description: 'A 10–15 page site with a blog CMS, lead-capture flows, and analytics from day one. Best for NYC SMBs scaling online who need the site to generate qualified inquiries.',
              features: [
                '10–15 pages with blog CMS',
                'Advanced SEO & GA4 tracking',
                'Lead capture & email automation',
                '3 revision rounds',
                '30-day support + training session',
              ],
              cta: { label: 'Get a quote', href: '/contact' },
              popular: true,
            },
            {
              name: 'Scale',
              priceRange: '$6,300–$15,000',
              description: 'Custom Next.js build with e-commerce, AI integrations, API connections, and priority support. Best for established NYC businesses with a real digital revenue line.',
              features: [
                'Custom Next.js architecture',
                'E-commerce or membership features',
                'AI integrations (chat, search, automation)',
                'Third-party API connections',
                'Priority support & quarterly reviews',
              ],
              cta: { label: 'Get a quote', href: '/contact' },
            },
          ] as const}
        />

        <TestimonialsSection
          eyebrow="WHAT CLIENTS SAY"
          headline="4.9/5 across 150+ reviews from US businesses."
        />

        <FAQ
          eyebrow="COMMON QUESTIONS"
          headline="Questions NYC Business Owners Ask Before Getting Started"
          categories={FAQ_CATEGORIES}
          items={[
            {
              category: 'pricing',
              question: 'How much does web design cost in New York City?',
              answer: 'NYC web design agencies typically charge $8,000–$25,000 for a small business website. FactoryJet delivers the same Figma design quality and Next.js engineering for $1,999–$6,300 — 60–70% less — because we\'re remote-first without Manhattan overhead. Every price is fixed and confirmed in writing before work starts.',
            },
            {
              category: 'pricing',
              question: 'How long does it take to get a website built?',
              answer: 'Starter sites (5 pages) are delivered in 7 business days — that\'s our delivery guarantee. Growth projects (10–15 pages with CMS and lead capture) typically run 2–3 weeks. Scale builds with custom integrations are scoped individually. The clock starts the day you approve the Figma design.',
            },
            {
              category: 'local',
              question: 'Do you work with NYC businesses remotely?',
              answer: 'Yes, 100% remotely — which is how we keep costs 60–70% below local agencies. We use Loom video for design walkthroughs, Slack for daily communication, and Figma for collaborative design review. Most NYC clients tell us we\'re easier to work with than local agencies they\'ve tried.',
            },
            {
              category: 'local',
              question: 'What industries in NYC do you have experience with?',
              answer: 'Finance and professional services, retail and DTC e-commerce, healthcare and medical practices, hospitality and restaurants, technology startups (Silicon Alley), and real estate. We\'ve built websites for each of these sectors and understand the specific conversion patterns that work in the NYC market.',
            },
            {
              category: 'local',
              question: 'Can you help my law firm get more cases from the web?',
              answer: 'Yes. Law firm web design is one of our specialties. We build attorney websites structured for local SEO (e.g., "personal injury attorney New York"), with practice area pages built for E-E-A-T signals, structured attorney profiles, case result displays, and consultation booking forms.',
            },
            {
              category: 'included',
              question: 'I run an e-commerce brand in NYC — can you build my Shopify store?',
              answer: 'Absolutely. We build custom Shopify themes, headless Shopify storefronts on Next.js, and full custom e-commerce platforms. Our Shopify work includes conversion-optimized product pages, fast checkout flows, and integrations with Klaviyo, Recharge, and your 3PL.',
            },
            {
              category: 'technical',
              question: 'Can you redesign my website without hurting my Google rankings?',
              answer: 'Yes. Before touching anything, we do a full SEO audit — mapping every URL, checking rankings, and documenting redirect needs. We preserve URL structure where possible, implement 301 redirects where needed, and migrate all meta tags. We\'ve never had a client lose meaningful rankings from a FactoryJet redesign.',
            },
            {
              category: 'technical',
              question: 'What platform do you build NYC websites on?',
              answer: 'Our default is Next.js on Cloudflare Pages — the fastest, most SEO-friendly architecture available. We also build on WordPress for content-heavy sites, Shopify for e-commerce, and Webflow for teams that want visual editing. We\'ll recommend the right platform based on your needs.',
            },
            {
              category: 'pricing',
              question: 'How does your pricing compare to NYC freelancers on Upwork?',
              answer: 'NYC freelancers on Upwork typically charge $50–$150/hour, with projects running 100–300 hours — that\'s $5,000–$45,000 in practice, often without a project manager or delivery guarantee. FactoryJet\'s fixed-price model gives you a defined scope, a guaranteed delivery date, and a full team.',
            },
            {
              category: 'technical',
              question: 'Do you offer SEO services for NYC businesses?',
              answer: 'Every FactoryJet website includes technical SEO setup: site speed optimization, structured data markup, meta tags, sitemap submission, and Core Web Vitals compliance. For ongoing SEO (content marketing, link building, local citations), we offer separate monthly SEO retainers starting at $799/month.',
            },
            {
              category: 'included',
              question: 'Can you add AI features to my NYC business website?',
              answer: 'Yes. We offer AI Agent Development and AI Automation as dedicated services. Common additions include AI chat widgets for lead qualification, automated customer support flows, AI-powered search, and CRM integration that turns website interactions into sales pipeline entries.',
            },
            {
              category: 'local',
              question: 'My medical practice is in NYC — can you build a HIPAA-aware website?',
              answer: 'We design with HIPAA considerations in mind — specifically avoiding collection of PHI through standard contact forms and recommending compliant form solutions. We\'ve built dozens of healthcare websites and know what to avoid. We recommend verifying specific requirements with your compliance team.',
            },
            {
              category: 'local',
              question: 'How do I get started with a New York City web design project?',
              answer: 'Book a free 30-minute strategy call. We\'ll review your current site, understand your goals, and send a fixed-price proposal within 24 hours. No sales pitch — just a practical conversation about what you need and what it\'ll cost.',
            },
            {
              category: 'local',
              question: 'Do you have a physical office in New York City?',
              answer: 'We operate as a remote-first team, which is why we can offer NYC-quality web design at 60–70% below what local agencies charge. We work in US Eastern time and communicate via Slack, Loom, and Figma — the same tools your team already uses.',
            },
            {
              category: 'local',
              question: 'What happens after my NYC website launches?',
              answer: 'The 30 days after launch are covered — minor text changes, bug fixes, and training requests are included. We give you a recorded CMS walkthrough so you can manage content yourself. After 30 days, choose a monthly maintenance plan ($99/month) or use us for one-off change requests at fixed rates.',
            },
            {
              category: 'local',
              question: 'Can you help my restaurant get more online reservations?',
              answer: 'Yes. We build restaurant websites with OpenTable, Resy, or Tock integration, fast mobile load times, Google Business Profile alignment, and menu pages structured for local search. NYC restaurant web design is a specific niche we\'ve worked in.',
            },
            {
              category: 'local',
              question: 'What\'s actually included in your web design project?',
              answer: 'Strategy session, Figma design system, full development, mobile responsiveness, basic on-page SEO, GA4 setup, Google Tag Manager, revision rounds, sitemap submission, and 30-day post-launch support. The Figma files, GitHub repo, and all assets are yours. No proprietary platform. No monthly fee unless you want maintenance.',
            },
            {
              category: 'local',
              question: 'My startup is in the Flatiron District — do you work with early-stage companies?',
              answer: 'Yes. Early-stage startups are one of our most common client types in NYC. We\'ve built SaaS landing pages, investor-facing websites, client portals, and MVPs for companies at pre-seed through Series B. We understand that speed and flexibility matter at this stage.',
            },
            {
              category: 'local',
              question: 'How do I know FactoryJet is legitimate?',
              answer: 'We have 150+ verified reviews averaging 4.9/5, a public portfolio at factoryjet.com/us/portfolio, and 500+ completed projects. We publish our pricing, process, and delivery guarantees publicly — because transparency is the only way to build trust with clients who have never met us in person.',
            },
            {
              category: 'local',
              question: 'Can you build a website that works well in NYC and other US markets?',
              answer: 'Yes. Most of our clients serve customers nationally, not just in NYC. We build with national SEO structure in mind — service pages targeting city + service terms, proper hreflang for any international audiences, and schema markup that helps AI search engines understand your geographic service area.',
            },
            {
              category: 'technical',
              question: 'Does my NYC business website need to be ADA compliant?',
              answer: 'Yes, and this is increasingly important for NYC businesses. New York City has seen a significant rise in ADA web accessibility lawsuits under the Americans with Disabilities Act — particularly in retail, hospitality, and healthcare. Every FactoryJet site is built to WCAG 2.1 AA standards: proper alt text, keyboard navigation, color contrast ratios, ARIA labels, and semantic HTML. We also recommend periodic accessibility audits as your site content grows.',
            },
            {
              category: 'technical',
              question: 'How do I optimize my Google Business Profile for NYC local search?',
              answer: 'Your Google Business Profile is one of the most powerful free tools for ranking in NYC neighborhood searches. We align your website\'s NAP (name, address, phone) data with your GBP listing, add LocalBusiness schema to your site, and structure your service pages to target borough and neighborhood + service terms (e.g., "Williamsburg personal trainer" or "Midtown accounting firm"). We can also audit your GBP as part of onboarding.',
            },
          ]}
        />

        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Get a Fixed Price for Your NYC Website in 24 Hours"
          sub="Tell us what you need. We'll review your current site, recommend the right approach, and send a fixed-price proposal within 24 hours. No hourly billing. No discovery fees. No surprises."
          primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/us/portfolio' }}
          objectionHandler="Fixed price confirmed upfront. Full code ownership. 7-day delivery guarantee."
        />

      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
