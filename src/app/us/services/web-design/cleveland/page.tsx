import type { Metadata } from 'next';
import Script from 'next/script';
import { webDesignCityAlternatesUS } from '@/data/hreflangMap';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import HeroBrowserMockup from '@/components/v2/HeroBrowserMockup';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Professional Web Design Company in Cleveland, Ohio | FactoryJet',
  description:
    'FactoryJet is the leading AI-native web development company in Cleveland, Ohio. Enterprise-quality websites delivered in 7 days at 60-70% lower cost. Custom web design, SEO optimization, and e-commerce solutions for Cleveland businesses.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Professional Web Design Company in Cleveland, Ohio | FactoryJet',
    description:
      'AI-native web development company in Cleveland. Enterprise-quality websites delivered in 7 days at 60-70% lower cost.',
    url: 'https://factoryjet.com/us/services/web-design/cleveland',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Professional Web Design Company Cleveland',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Web Design Company Cleveland | FactoryJet',
    description:
      'Enterprise-quality websites delivered in 7 days at 60-70% lower cost. AI-native web development for Cleveland businesses.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/web-design/cleveland',
    languages: webDesignCityAlternatesUS['cleveland'],
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
   Data
───────────────────────────────────────────────────────────────────────────── */
const SERVICES = [
  {
    icon: '🌐',
    name: 'Business Website Design',
    description:
      'Custom websites built for Cleveland businesses — mobile-first, SEO-ready, and engineered for lead generation. Starting at $1,999. 7-day delivery.',
    href: '/us/services/web-design',
  },
  {
    icon: '🛍️',
    name: 'E-Commerce Development',
    description:
      'Shopify and WooCommerce stores built to convert Cleveland shoppers. Optimised checkout flows, mobile-first performance, full product migration. Starting at $4,999.',
    href: '/us/services/ecommerce-development',
  },
  {
    icon: '🔄',
    name: 'Website Redesign',
    description:
      'Modernise your Cleveland business site without losing SEO equity. We preserve URL structure, redirect map, and rankings while upgrading design and speed.',
    href: '/us/services/website-redesign',
  },
  {
    icon: '⚡',
    name: 'Shopify Development',
    description:
      'Custom Shopify stores for Cleveland retail and DTC brands — fast, fully branded, and fully owned. Delivered in 7–14 days.',
    href: '/us/services/shopify-development',
  },
  {
    icon: '🤖',
    name: 'AI Agent Development',
    description:
      'AI agents that qualify leads, answer support queries, and automate workflows — integrated directly into your Cleveland business website or stack.',
    href: '/us/services/ai-agents',
  },
  {
    icon: '🏥',
    name: 'Healthcare & Legal Sites',
    description:
      'HIPAA-aware healthcare websites and authority-building law firm sites for Cleveland practices. Compliant, credible, and conversion-optimised.',
    href: '/us/services/web-design',
  },
];

const JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'We map your ideal customer profile, audit your top Cleveland competitors, and agree the sitemap and content plan. You leave this phase knowing exactly what the site will do and how we will measure it.',
  },
  {
    number: '02',
    title: 'Design & Prototyping',
    description:
      'Figma wireframes turn into a complete mobile-first design system, reviewed against your brand and conversion goals. Two structured feedback rounds lock the visual direction before a line of code is written.',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'We build in Next.js with GSAP animations, headless CMS integration, contact forms, and any third-party APIs you need. Performance budgets are enforced from the first commit.',
  },
  {
    number: '04',
    title: 'Content & SEO',
    description:
      'Copy, optimised WebP imagery, meta tags, JSON-LD schema, and internal links all land in this phase. We submit the sitemap to Google Search Console and verify rendering for AI crawlers.',
  },
  {
    number: '05',
    title: 'Launch & Handover',
    description:
      'We deploy to Cloudflare, wire up GA4 and GTM, and walk you through the CMS in a recorded handover session. A 30-day support window covers any post-launch fixes or training questions.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'timeline', label: 'Timeline' },
  { key: 'pricing', label: 'Pricing' },
  { key: 'technical', label: 'Technical' },
  { key: 'seo', label: 'SEO' },
  { key: 'support', label: 'Support' },
  { key: 'services', label: 'Services' },
] as const;

const FAQ_ITEMS = [
  {
    question: 'How long does it take to build a website in Cleveland?',
    answer:
      'FactoryJet delivers most standard websites in 7 days — that is our delivery guarantee for sites up to 5 pages. Growth projects with a blog CMS and lead-capture flows typically run 2–3 weeks. Our AI-native workflow is 75–85% faster than traditional Cleveland agencies, which typically quote 8–12 weeks for comparable scope.',
    category: 'timeline',
  },
  {
    question: 'How much does a website cost in Cleveland?',
    answer:
      'Our fixed-price packages start at $1,999 for a Starter site (5 pages, 7-day delivery) and range up to $7,999 for a Scale build (25+ pages, custom integrations). Most Cleveland small businesses invest between $3,000–$6,000 for a professional Growth-tier website that actively generates qualified leads. There are no hidden fees, no discovery-phase billing, and pricing is confirmed before work begins.',
    category: 'pricing',
  },
  {
    question: "What's included in your website design packages?",
    answer:
      'Every project includes strategy, design, development, SEO setup, Google Analytics 4, and a 30-day support window. You receive a Figma design system, a Next.js or WordPress codebase you own outright, JSON-LD schema for AI search visibility, and a recorded handover session. We do not charge separately for staging environments or routine bug fixes inside the support window.',
    category: 'pricing',
  },
  {
    question: 'What platform do you build websites on?',
    answer:
      'We recommend the best platform for your specific goals. WordPress offers maximum SEO flexibility and content control. Shopify is optimised for e-commerce conversion. Webflow provides design precision with manageable maintenance. Next.js and custom React stacks suit high-performance or application-like builds. We recommend based on your requirements — not internal capability constraints.',
    category: 'technical',
  },
  {
    question: 'Will my website work on mobile phones and tablets?',
    answer:
      "Yes — every site is mobile-first and responsive. With over 60% of web traffic coming from mobile devices, mobile optimisation is engineered in from the first Figma frame, not retrofitted at launch. We test on multiple real devices and screen sizes before delivery.",
    category: 'technical',
  },
  {
    question: 'Can you help with SEO and getting found on Google?',
    answer:
      'Yes. Every FactoryJet website includes on-page SEO foundations — proper heading structure, meta tags, XML sitemap, JSON-LD schema, image compression, and Core Web Vitals optimisation. For Cleveland businesses wanting ongoing search visibility, we offer monthly SEO retainers covering keyword research, content, and local SEO. Many clients reach first-page positions for their core local queries within 3–6 months.',
    category: 'seo',
  },
  {
    question: 'Can I update the website content myself after it is built?',
    answer:
      'Yes. All builds include a CMS — WordPress or Webflow depending on your platform — that lets your team update text, images, blog posts, and pages without developer involvement. We provide a recorded training session and documentation at handover.',
    category: 'technical',
  },
  {
    question: 'Do you provide ongoing website maintenance and support?',
    answer:
      'Yes. After the included 30-day post-launch window, we offer Annual Maintenance Contracts (AMC) starting at $99/month. AMC covers security updates, plugin patches, performance monitoring, and priority support. E-commerce AMC plans start at $299/month.',
    category: 'support',
  },
  {
    question: 'Can you redesign my existing Cleveland website?',
    answer:
      "Absolutely. Redesigns are a large part of our business. We audit your current site, analyse competitors, design a modern version, and handle all content migration and 301 redirects to preserve your existing search rankings. Redesigns follow our standard delivery timelines and are typically 20–30% less than a full new build.",
    category: 'services',
  },
  {
    question: 'What makes FactoryJet different from other Cleveland web design companies?',
    answer:
      "Three things: published fixed pricing (no discovery call required to get a number), a 7-day delivery guarantee on Starter sites, and a Next.js tech stack that outperforms WordPress on speed and SEO out of the box. We have delivered on time on 97% of all projects, and you own 100% of the code and design files the moment we launch.",
    category: 'services',
  },
];

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'FactoryJet',
  url: 'https://factoryjet.com/us/services/web-design/cleveland',
  telephone: '+1-216-600-1234',
  email: 'connect@factoryjet.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '200 Public Square',
    addressLocality: 'Cleveland',
    addressRegion: 'OH',
    postalCode: '44114',
    addressCountry: 'US',
  },
  areaServed: { '@type': 'Place', name: 'Cleveland' },
  priceRange: '$1,999 – $15,000',
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/us' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://factoryjet.com/us/services' },
    { '@type': 'ListItem', position: 3, name: 'Web Design', item: 'https://factoryjet.com/us/services/web-design' },
    { '@type': 'ListItem', position: 4, name: 'Cleveland', item: 'https://factoryjet.com/us/services/web-design/cleveland' },
  ],
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */
export default function ClevelandWebDesignPage() {
  return (
    <>
      <Script id="local-business-cleveland" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <Script id="breadcrumb-cleveland" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <Script id="faq-cleveland" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/us/services/web-design' },
          { label: 'Shopify', href: '/us/services/shopify-development' },
          { label: 'AI Agents', href: '/us/services/ai-agents' },
          { label: 'Pricing', href: '/us/pricing' },
          { label: 'Portfolio', href: '/us/portfolio' },
          { label: 'FAQ', href: '/us/faq' },
        ]}
        cta={{ label: 'Free Strategy Call', href: '/contact' }}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="WEB DESIGN · CLEVELAND, OHIO"
          headline="Web Design Company in Cleveland, Ohio for High-Converting Websites"
          lead="FactoryJet helps Cleveland businesses launch professional, high-converting websites in as little as 7 days. Fixed pricing, full code ownership, and zero vendor lock-in. Trusted by 500+ businesses across the US — 60–70% cheaper than comparable Cleveland agencies."
          primaryCta={{ label: 'Get Your Free Strategy Call', href: '/contact' }}
          secondaryCta={{ label: 'Request a Free Technical & SEO Audit', href: '/contact' }}
          trustItems={['7-day delivery guarantee', 'Fixed pricing from $1,999', '60–70% cheaper than local agencies']}
          rightSlot={<HeroBrowserMockup />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across Cleveland, Columbus, Cincinnati and beyond" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="523 websites. 7-day delivery. $50M+ in client revenue generated."
        />

        {/* ── 4. SERVICES ──────────────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="OUR SERVICES"
          headline="Web Design Services for Cleveland Businesses"
          lead="From high-converting business websites to complex e-commerce platforms, we build scalable digital assets using Next.js, WordPress, Shopify, and custom React frameworks. Every project ships in 7 days with fixed pricing and full code ownership."
          sectors={SERVICES}
        />

        {/* ── 5. WHY FACTORYJET ────────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Cleveland Businesses Choose FactoryJet for Web Design"
          lead="Cleveland web agencies charge $8,000–$25,000 for websites FactoryJet delivers for 60–70% less — with a 7-day guarantee, fixed pricing, and a codebase that is yours the moment we launch. No discovery fees. No retainers. No vendor lock-in."
          pillars={[
            {
              title: 'AI-Native Speed',
              body: 'Every site is built with AI-assisted workflow — compressing build time without compressing quality. We have run 500+ projects through this system. 7-day delivery is the standard, not the exception.',
            },
            {
              title: 'Transparent Fixed Pricing',
              body: "Pricing on the first call. No discovery fees, no 'it depends' quotes that arrive three weeks later. Fixed price. Agreed up front. Your total investment is confirmed before a single wireframe is drawn.",
            },
            {
              title: '7-Day Delivery Guarantee',
              body: "7-day delivery guarantee on all standard projects. If we miss the deadline, you don't pay. We have delivered on time on 97% of all projects. Enterprise-grade quality, startup-speed delivery.",
            },
          ]}
        />

        {/* ── 6. HOW IT WORKS ──────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="YOUR PATH TO LAUNCH"
          headline="5 Steps, Zero Surprises — From Strategy Call to Live Website"
          lead="We don't start designing until we understand your goals. Every stage ends with a deliverable you review and approve — so no design, no development, and no launch happens without your sign-off."
          stages={JOURNEY_STAGES}
          closingNote="5 STAGES · 7 DAYS (UP TO 5 PAGES) · FREE STRATEGY CALL BEFORE ANY COMMITMENT"
        />

        {/* ── 7. TESTIMONIALS ──────────────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="WHAT CLIENTS SAY"
          headline="4.9/5 across 150+ reviews from US businesses we've built for."
        />

        {/* ── 8. FAQ ───────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Frequently Asked Questions: Web Design in Cleveland, Ohio"
          lead="Everything you need to know about working with FactoryJet in Cleveland."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── 9. FINAL CTA ─────────────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="START WITH A FREE STRATEGY CALL"
          headline="Ready to Build Your Cleveland Website?"
          sub="Stop losing qualified leads to competitors with faster, higher-converting websites. Partner with FactoryJet — a web design company Cleveland businesses trust — to launch a high-converting website in 7 days. No obligation. 100% free consultation."
          primaryCta={{ label: 'Get Your Free Strategy Call', href: '/contact' }}
          secondaryCta={{ label: 'Request a Free Technical & SEO Audit', href: '/contact' }}
          objectionHandler="Fixed pricing. 7-day delivery. Full code ownership. Free strategy call first."
        />

      </main>

      <SiteFooter />
    </>
  );
}
