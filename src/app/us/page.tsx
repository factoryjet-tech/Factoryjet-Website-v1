import type { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { usHubAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import RelatedGuides from '@/components/v2/RelatedGuides';
import Hero from '@/components/v2/Hero';
import LogoBar from '@/components/v2/LogoBar';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import FAQ from '@/components/v2/FAQ';
import TalkToFounder from '@/components/v2/TalkToFounder';

/* ─────────────────────────────────────────────────────────────────────────────
   /us homepage — PR #2 Framework B+ premium visual rebuild (2026-05-25)

   This is the visually-upgraded homepage applying the 2025 design patterns
   synthesized from the 20-competitor scan (Spiral Scout, WebFX, Scandiweb
   references). Reuses existing image assets from /public/images/ — no new
   image generation required for v1.

   17-section structure:
     1.  SiteHeader (CTA: Talk to the Founder)
     2.  Hero — V1 "Engineered Outcomes" + gradient text + AI hero image + floating stat badges
     3.  Live counter strip — 523 · 4.9★ · 25yr maxi typography
     4.  LogoBar — refined tagline + text marks (no fake logos)
     5.  TalkToFounder (full + light) — founder block with aurora orbs
     6.  Bento Services Grid — 6 tiles using existing card-*.webp images
     7.  Pain-Pattern section (DARK) — Fragile MVP / Vendor Trap / Cheap-Build Tax
     8.  IndustriesGrid (DARK) — unchanged
     9.  NumbersBlock — maxi typography upgrade + OutcomeBoard™ branding
     10. MethodologyBar (DARK) — Discover → Architect → Ship → Own with gradient text
     11. StrategicDarkSection (DARK) — Framework B+ pillars
     12. ServiceJourneyRow — 5-stage process, unchanged
     13. Real Testimonials — 3 real client cards (Ricky B / Vishal K / Arif Saif Khan)
     14. FAQ — 13 items, unchanged
     15. TalkToFounder (full + dark) — closing CTA with dramatic aurora
     16. SiteFooter

   Asset reuse:
     - Hero right slot: /images/us/services/hero-ai-agent-us.webp
     - Service tiles: /images/services/card-*.webp + ai-*.webp
     - Testimonial headshots: /images/testimonials/{ricky-b,vishal-k,arif-k}.webp
     - Portfolio thumbnails: /images/portfolio/{belle-maison,bombay-petals,formative-concepts}.webp
     - Pain section accent: /images/us/services/ai-agency/dark-section-accent.webp
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Engineered Outcomes for US Businesses — Web, E-Commerce & AI | FactoryJet',
  description:
    'AI-native US digital partner. Websites and AI agents engineered to pay for themselves in 90 days. Fixed-price, milestone-paid, code you own from day one. Talk to the founder.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Engineered Outcomes for US Businesses — Web, E-Commerce & AI | FactoryJet',
    description:
      'AI-native US digital partner. Websites and AI agents engineered to deliver measurable outcomes. Fixed-price, milestone-paid, code you own from day one. 500+ businesses served. Talk to the founder.',
    url: 'https://factoryjet.com/us',
    images: [{ url: 'https://factoryjet.com/logo.png', width: 1200, height: 630, alt: 'FactoryJet — Engineered Outcomes for US Businesses' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineered Outcomes for US Businesses | FactoryJet',
    description:
      'AI-native US digital partner. Websites and AI agents that pay for themselves in 90 days. Fixed-price, milestone-paid. Talk to the founder.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us',
    languages: usHubAlternates,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   Data — journey stages, FAQ, schemas, services, pillars, testimonials
───────────────────────────────────────────────────────────────────────────── */

const JOURNEY_STAGES: ServiceJourneyStage[] = [
  { number: '01', title: 'Discovery & Strategy', description: 'We map your ideal customer profile, audit top competitors, and agree the sitemap and content plan. You leave this phase knowing exactly what the site will do and how we will measure it.' },
  { number: '02', title: 'Design & Prototyping', description: 'Figma wireframes turn into a complete mobile-first design system, reviewed against your brand and conversion goals. Two structured feedback rounds lock the visual direction before a line of code is written.' },
  { number: '03', title: 'Development', description: 'We build in Next.js with GSAP animations, headless CMS integration, contact forms, and any third-party APIs you need. Performance budgets are enforced from the first commit.' },
  { number: '04', title: 'Content & SEO', description: 'Copy, optimized WebP imagery, meta tags, JSON-LD schema, and internal links all land in this phase. We submit the sitemap to Google Search Console and verify rendering for AI crawlers.' },
  { number: '05', title: 'Launch & Handover', description: 'We deploy to Cloudflare, wire up GA4 and GTM, and walk you through the CMS in a recorded handover session. A 30-day support window covers any post-launch fixes or training questions.' },
];

const FAQ_CATEGORIES = [
  { key: 'about',           label: 'About FactoryJet' },
  { key: 'pricing',         label: 'Pricing & Delivery' },
  { key: 'process',         label: 'Our Process' },
  { key: 'platform',        label: 'Platform & Ownership' },
  { key: 'getting-started', label: 'Getting Started' },
];

const FAQ_ITEMS = [
  { category: 'about',           question: 'What is a B2B web design agency?', answer: 'A B2B web design agency builds websites specifically designed to generate qualified leads, establish buyer trust, and support long sales cycles for business-focused companies. Unlike general web studios, B2B agencies structure every design decision around business outcomes — not aesthetics alone.' },
  { category: 'about',           question: 'What industries do you specialise in?', answer: 'FactoryJet focuses on B2B industries where technical credibility and buyer trust drive conversions: cybersecurity, healthcare and MedTech, IT and managed services, SaaS, professional services, and manufacturing. See our case studies for sector-specific results.' },
  { category: 'about',           question: 'How are you so much faster than other agencies?', answer: 'FactoryJet was built AI-native from day one. Senior engineers run parallel workstreams — concept generation, wireframing, and development scaffolding — that traditional agencies run sequentially. The structural advantage is operational, not magical: you get a senior engineer on every call instead of an SDR-to-strategist-to-developer handoff, and the work compounds week to week instead of restarting at every handover. The result is 7-day delivery on standard scope with no compromise on engineering quality.' },
  { category: 'pricing',         question: 'How much does a professional B2B website cost in the USA?', answer: "B2B website design in the USA typically ranges from $1,999 for a focused business website to $15,000+ for enterprise builds with custom integrations. FactoryJet's fixed-price model means your full investment is confirmed before work begins — no discovery-phase billing, no surprise invoices." },
  { category: 'pricing',         question: 'How long does it take to build a B2B website?', answer: 'FactoryJet delivers most standard B2B websites in 7 days. A typical 5–10 page project includes strategy on day one, design sprint within the first 3 days, development and QA by days 5–6, and live launch on day 7. Complex e-commerce or custom integration projects may extend to 7–14 days.' },
  { category: 'pricing',         question: 'Is hosting included, and do you mark it up?', answer: 'Hosting and deployment are always configured in your own account — never ours. There is no hosting markup, no proprietary infrastructure, and no exit fee. You maintain full control of your hosting environment from day one.' },
  { category: 'process',         question: 'Do you use templates?', answer: 'No. Every FactoryJet website is built from a custom design brief. We do not resell or modify off-the-shelf templates. Custom builds allow us to structure every page for your specific buyers and conversion goals.' },
  { category: 'process',         question: 'What if the design does not work for our brand?', answer: 'Every stage of the engagement ships a deliverable you review and approve before we move forward — wireframes, design system, then code. If the design output does not match your brand or business goals at the design-system gate, we revise until it does. The relationship structure (fixed price + milestone-paid + code ownership from day one) means you can step out between any two milestones with everything we produced. No contract teeth holding you in.' },
  { category: 'process',         question: 'Can you redesign my website without losing Google rankings?', answer: "Yes. FactoryJet's redesign process preserves existing URL structures, redirects, and SEO equity. We conduct a technical audit before migration and monitor search performance post-launch to protect rankings built over time." },
  { category: 'platform',        question: 'Which platform is best for a B2B business website?', answer: 'The right platform depends on your business requirements. WordPress offers maximum SEO flexibility and content control. Webflow provides design precision with manageable maintenance. Shopify is optimized for e-commerce conversion. Next.js and custom React stacks suit high-performance or application-like builds. FactoryJet recommends based on your goals — not internal capability constraints.' },
  { category: 'platform',        question: 'Do I own the code after the project?', answer: 'Yes — 100%. Every FactoryJet project includes a full GitHub repository transfer upon completion. Your code, design assets, and all project files are yours outright. No retainer required. No ongoing dependency.' },
  { category: 'platform',        question: 'Will I be able to update the site myself?', answer: 'Yes. All builds include a CMS — WordPress or Webflow depending on your platform — that allows your team to update content, images, blog posts, and pages without developer involvement.' },
  { category: 'getting-started', question: 'How do I get started?', answer: 'Talk to the founder. Bhavesh takes every discovery call himself — book a 30-minute call and by minute 10 we already know whether what you need pays for itself, and how fast. You leave the call with a clear roadmap and a fixed quote within 24 hours. No discovery-phase billing, no obligation.' },
];

const SERVICE_TILES = [
  // Bento layout: web-design is large (span 2 cols, 2 rows), ai-agents medium, ai-seo medium (new pill), shopify/wordpress/webapp standard
  { href: '/us/services/web-design',                  label: 'Web Design',         desc: '7-day fixed-price builds. Next.js, WordPress, custom.',  metric: '+38% avg conv lift', image: '/images/services/card-web-design.webp', size: 'large', isNew: false },
  { href: '/us/services/ai-agents',                   label: 'AI Agents',          desc: 'Autonomous workflows from $5K. 90-day payback target.', metric: 'From $5,000',         image: '/images/services/ai-agents.webp',       size: 'standard', isNew: false },
  { href: '/us/services/ai-seo',                      label: 'AI SEO',             desc: 'Get cited by ChatGPT, Perplexity, Claude, Gemini.',     metric: 'From $1,999/mo',      image: '/images/services/ai-seo.webp',          size: 'standard', isNew: true  },
  { href: '/us/services/shopify-development',         label: 'Shopify Dev',        desc: 'Custom storefronts. Headless commerce. Klaviyo wired.', metric: 'From $3,999',         image: '/images/services/card-shopify.webp',    size: 'standard', isNew: false },
  { href: '/us/services/wordpress-development',       label: 'WordPress',          desc: 'CMS + custom plugins. SEO-optimised from day one.',     metric: 'From $1,999',         image: '/images/services/card-wordpress.webp',  size: 'standard', isNew: false },
  { href: '/us/services/web-application-development', label: 'Web App Dev',        desc: 'React + Next.js custom platforms.',                     metric: 'Custom scope',        image: '/images/services/card-webapp.webp',     size: 'standard', isNew: false },
];

const PAIN_PATTERNS = [
  { number: '01', title: 'THE FRAGILE MVP',     headline: 'You paid for fast. You got cheap.',                        body: 'The prototype collapses the moment real customers hit production. Tickets pile up. Re-platform costs more than the original build cost.' },
  { number: '02', title: 'THE VENDOR TRAP',     headline: "You can't leave because they have the keys.",              body: 'Code lives on their GitHub. Dashboards run on their license. Switching costs grow every month you stay. Retainer turns into ransom.' },
  { number: '03', title: 'THE CHEAP-BUILD TAX', headline: 'The discount you negotiated is paid back in technical debt.', body: 'Every shortcut today becomes a slowdown tomorrow. Performance drops. Lighthouse falls below 80. Conversion follows.' },
];

const REAL_TESTIMONIALS = [
  {
    name: 'Ricky B.',
    company: 'Belle Maison',
    industry: 'D2C lifestyle · Shopify',
    headshot: '/images/testimonials/ricky-b.webp',
    portfolio: '/images/portfolio/belle-maison.webp',
    metric: 'Live in 6 days',
    quote: 'We were live in 6 days — I genuinely did not believe that was possible. The design is stunning, the WhatsApp integration brings in enquiries every day, and the Lighthouse score has not moved from 100.',
  },
  {
    name: 'Vishal K.',
    company: 'Bombay Petals',
    industry: 'B2B wholesale · Shopify',
    headshot: '/images/testimonials/vishal-k.webp',
    portfolio: '/images/portfolio/bombay-petals.webp',
    metric: 'Days → hours onboarding',
    quote: 'Our B2B catalogue was a nightmare to manage. FactoryJet built us a clean Shopify store with GST invoicing and a wholesale pricing module — our distributor onboarding time dropped from days to hours.',
  },
  {
    name: 'Arif Saif Khan',
    company: 'Formative Concepts',
    industry: 'MEP / BIM consultancy · Web',
    headshot: '/images/testimonials/arif-k.webp',
    portfolio: '/images/portfolio/formative-concepts.webp',
    metric: 'Ranks on Google',
    quote: 'As an MEP and BIM consultancy, credibility is everything. FactoryJet gave us a site that looks like a Tier-1 firm — structured data, fast load, and project showcase pages that actually rank on Google.',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '150', reviewCount: '150', bestRating: '5', worstRating: '1' },
};

const REVIEW_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  review: REAL_TESTIMONIALS.map((t) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: t.name },
    reviewBody: t.quote,
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
  })),
};

const HOW_TO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds your website in 7 days',
  description: 'Our proven 7-day process for delivering professional, SEO-optimized websites for US businesses.',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Day 1 — Discovery Call',          text: 'We learn your business, goals, and target audience. We define the sitemap, content strategy, and technical requirements.' },
    { '@type': 'HowToStep', position: 2, name: 'Day 2 — Strategy & Structure',    text: 'We finalize your site architecture, wireframes, and content outline. You approve the plan before any design begins.' },
    { '@type': 'HowToStep', position: 3, name: 'Days 3–4 — Design',               text: 'We design every page with your brand identity, mobile-first layouts, and conversion-focused UX. You review and approve all designs.' },
    { '@type': 'HowToStep', position: 4, name: 'Days 5–6 — Development & SEO',    text: 'We build your site in Next.js or WordPress, optimize Core Web Vitals, add structured data, and connect all integrations.' },
    { '@type': 'HowToStep', position: 5, name: 'Day 7 — Launch',                  text: 'Your website goes live. We handle DNS, SSL, final QA, and provide training plus 30-day post-launch support.' },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Inline section components
───────────────────────────────────────────────────────────────────────────── */

/**
 * HeroVisualSlot — the right-slot composition for the Hero. Premium AI agent
 * image with two absolutely-positioned floating stat badges layered on top
 * (Stripe-marketing-graphic style). Replaces the generic HeroImageMockup.
 */
function HeroVisualSlot() {
  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl" style={{ boxShadow: '0 24px 60px rgba(15,15,18,0.20), 0 0 0 1px rgba(15,15,18,0.06)' }}>
        <Image
          src="/images/us/services/hero-ai-agent-us.webp"
          alt="AI agent network architecture — FactoryJet engineering preview"
          width={800}
          height={600}
          priority
          className="block h-auto w-full"
        />
      </div>

      {/* Floating stat badge — top left (revenue lift) */}
      <div
        className="absolute hidden md:block"
        style={{ top: '-14px', left: '-18px', transform: 'rotate(-3deg)' }}
      >
        <div
          className="rounded-2xl bg-white px-4 py-3"
          style={{ boxShadow: '0 12px 28px rgba(15,15,18,0.14), 0 0 0 1px rgba(15,15,18,0.06)', maxWidth: '180px' }}
        >
          <div className="font-fj-body font-bold" style={{ fontSize: '22px', lineHeight: 1, color: '#F05A28', letterSpacing: '-0.02em' }}>
            +450%
          </div>
          <div className="mt-1 font-fj-body" style={{ fontSize: '11px', lineHeight: 1.4, color: 'rgba(15,15,18,0.70)' }}>
            avg revenue lift across e-commerce builds
          </div>
        </div>
      </div>

      {/* Floating stat badge — bottom right (Clutch rating) */}
      <div
        className="absolute hidden md:block"
        style={{ bottom: '-16px', right: '-14px', transform: 'rotate(3deg)' }}
      >
        <div
          className="rounded-2xl px-4 py-3"
          style={{ backgroundColor: '#0F0F12', boxShadow: '0 12px 28px rgba(15,15,18,0.32)', maxWidth: '170px' }}
        >
          <div className="font-fj-body font-bold" style={{ fontSize: '22px', lineHeight: 1, color: '#F05A28', letterSpacing: '-0.02em' }}>
            4.9★
          </div>
          <div className="mt-1 font-fj-body" style={{ fontSize: '11px', lineHeight: 1.4, color: 'rgba(250,250,247,0.75)' }}>
            Clutch · 150+ verified reviews
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * LiveCounterStrip — sits just below the Hero. Three maxi-typography stats
 * separated by hairline dividers, with orange top/bottom borders. Adds
 * tactile premium feel to the page introduction.
 */
function LiveCounterStrip() {
  return (
    <section
      className="py-6 md:py-8"
      style={{
        backgroundColor: '#FAFAF7',
        borderTop: '1.5px solid rgba(240,90,40,0.22)',
        borderBottom: '1.5px solid rgba(240,90,40,0.22)',
      }}
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="flex flex-wrap items-center justify-around gap-6 md:gap-4">
          <div className="text-center">
            <div className="font-fj-display font-bold" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', lineHeight: 1, color: '#F05A28', letterSpacing: '-0.03em' }}>
              523
            </div>
            <div className="mt-1 font-fj-mono font-bold uppercase" style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'rgba(15,15,18,0.55)' }}>
              projects shipped
            </div>
          </div>
          <div className="hidden h-12 w-px md:block" style={{ backgroundColor: 'rgba(15,15,18,0.10)' }} aria-hidden="true" />
          <div className="text-center">
            <div className="font-fj-display font-bold" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', lineHeight: 1, color: '#F05A28', letterSpacing: '-0.03em' }}>
              4.9★
            </div>
            <div className="mt-1 font-fj-mono font-bold uppercase" style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'rgba(15,15,18,0.55)' }}>
              across 150+ reviews
            </div>
          </div>
          <div className="hidden h-12 w-px md:block" style={{ backgroundColor: 'rgba(15,15,18,0.10)' }} aria-hidden="true" />
          <div className="text-center">
            <div className="font-fj-display font-bold" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', lineHeight: 1, color: '#F05A28', letterSpacing: '-0.03em' }}>
              25<span style={{ fontSize: '0.55em' }}>yr</span>
            </div>
            <div className="mt-1 font-fj-mono font-bold uppercase" style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'rgba(15,15,18,0.55)' }}>
              engineering since 2001
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * BentoServicesGrid — replaces the ServicesGrid component with a custom
 * bento layout using the existing /images/services/card-*.webp files.
 * Web Design tile spans 2 columns × 2 rows; others are standard 1×1.
 * Each tile is a Link to the service page.
 */
function BentoServicesGrid() {
  const largeTile = SERVICE_TILES.find((t) => t.size === 'large')!;
  const standardTiles = SERVICE_TILES.filter((t) => t.size !== 'large');

  return (
    <section id="services" className="py-14 md:py-20" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <p className="fj-eyebrow">WHAT WE BUILD</p>
        <h2 className="fj-display font-semibold text-fj-ink mt-3" style={{ fontSize: 'clamp(1.625rem, 3vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.025em', maxWidth: '600px' }}>
          One AI-native partner across every layer of your digital stack.
        </h2>
        <p className="mt-4 max-w-[620px] font-fj-body text-fj-neutral-600" style={{ fontSize: '1rem', lineHeight: 1.65 }}>
          Six services. One senior engineer per project. Fixed price per scope. Pick the layer you need — or talk to the founder about a multi-service engagement.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {/* Large tile — spans 2 cols × 2 rows on lg+ */}
          <Link
            href={largeTile.href}
            className="group relative flex flex-col overflow-hidden rounded-2xl border bg-white transition-all hover:border-[#F05A28]/40 lg:col-span-2 lg:row-span-2"
            style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 1px 3px rgba(15,15,18,0.04)' }}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image src={largeTile.image} alt={largeTile.label} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div className="flex flex-1 flex-col p-6 md:p-7">
              <div className="flex items-center gap-2">
                <h3 className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '1.25rem', letterSpacing: '-0.01em' }}>
                  {largeTile.label}
                </h3>
              </div>
              <p className="mt-2 font-fj-body text-fj-neutral-600" style={{ fontSize: '0.9375rem', lineHeight: 1.55 }}>
                {largeTile.desc}
              </p>
              <div className="mt-4 flex items-center justify-between gap-3">
                <span
                  className="inline-flex items-center rounded-full px-3 py-1 font-fj-body font-semibold"
                  style={{ fontSize: '11px', backgroundColor: 'rgba(240,90,40,0.10)', color: '#C94A1A', border: '1px solid rgba(240,90,40,0.22)' }}
                >
                  {largeTile.metric}
                </span>
                <span className="font-fj-body font-semibold text-[#F05A28] transition-transform group-hover:translate-x-1" style={{ fontSize: '13px' }}>
                  Explore →
                </span>
              </div>
            </div>
          </Link>

          {/* Standard tiles */}
          {standardTiles.map((tile) => (
            <Link
              key={tile.href}
              href={tile.href}
              className="group relative flex flex-col overflow-hidden rounded-2xl border bg-white transition-all hover:border-[#F05A28]/40"
              style={{
                borderColor: tile.isNew ? 'rgba(240,90,40,0.30)' : 'rgba(15,15,18,0.10)',
                boxShadow: '0 1px 3px rgba(15,15,18,0.04)',
                backgroundColor: tile.isNew ? 'rgba(240,90,40,0.025)' : '#FFFFFF',
              }}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image src={tile.image} alt={tile.label} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2">
                  <h3 className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '1rem', letterSpacing: '-0.005em' }}>
                    {tile.label}
                  </h3>
                  {tile.isNew && (
                    <span className="inline-flex items-center rounded-full px-2 py-0.5 font-fj-mono font-bold uppercase" style={{ fontSize: '9px', letterSpacing: '0.08em', backgroundColor: 'rgba(240,90,40,0.15)', color: '#F05A28' }}>
                      NEW
                    </span>
                  )}
                </div>
                <p className="mt-1.5 font-fj-body text-fj-neutral-600" style={{ fontSize: '0.8125rem', lineHeight: 1.5 }}>
                  {tile.desc}
                </p>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <span className="font-fj-mono font-semibold uppercase" style={{ fontSize: '10px', letterSpacing: '0.06em', color: 'rgba(15,15,18,0.65)' }}>
                    {tile.metric}
                  </span>
                  <span className="font-fj-body font-semibold text-[#F05A28] transition-transform group-hover:translate-x-1" style={{ fontSize: '12px' }}>
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * PainPatternSection — dark crystal-card section borrowing the Spiral Scout
 * pattern of naming buyer pains explicitly. Three crystal cards on aurora-
 * backed dark background, replacing what would otherwise be a generic
 * "Why us" section with concrete fear-naming.
 */
function PainPatternSection() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20" style={{
      backgroundImage: [
        'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)',
        'linear-gradient(135deg, #060D1F 0%, #0F0F12 45%, #0D0818 100%)',
      ].join(', '),
      backgroundSize: '28px 28px, 100% 100%',
    }}>
      {/* Aurora orb top-right */}
      <div className="pointer-events-none absolute" style={{
        right: '-10%', top: '-10%', width: '720px', height: '720px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(240,90,40,0.36) 0%, transparent 65%)', filter: 'blur(48px)',
      }} aria-hidden="true" />
      <div className="pointer-events-none absolute" style={{
        left: '-8%', bottom: '-15%', width: '520px', height: '520px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(240,90,40,0.18) 0%, transparent 65%)', filter: 'blur(56px)',
      }} aria-hidden="true" />

      <div className="relative mx-auto max-w-[1120px] px-6 md:px-8">
        <p className="font-fj-mono font-bold uppercase" style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#F05A28' }}>
          THE PATTERNS WE SEE EVERY DAY
        </p>
        <h2 className="fj-display font-semibold mt-3" style={{
          color: '#FAFAF7',
          fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)',
          lineHeight: 1.08,
          letterSpacing: '-0.025em',
          maxWidth: '640px',
        }}>
          Three failure modes that cost US businesses real money.
        </h2>
        <p className="mt-5 max-w-[620px] font-fj-body" style={{ fontSize: '1.0625rem', lineHeight: 1.6, color: 'rgba(250,250,247,0.78)' }}>
          Most agencies will gloss over these. We name them because we built our model to solve them.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {PAIN_PATTERNS.map((pain) => (
            <div
              key={pain.number}
              className="rounded-2xl border p-6 md:p-7 backdrop-blur-sm"
              style={{
                background: 'rgba(255,255,255,0.05)',
                borderColor: 'rgba(255,255,255,0.10)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
            >
              <div className="flex items-center gap-3">
                <span className="font-fj-display font-bold" style={{ fontSize: '32px', lineHeight: 1, color: '#F05A28', letterSpacing: '-0.02em' }}>
                  {pain.number}
                </span>
                <span className="font-fj-mono font-bold uppercase" style={{ fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(250,250,247,0.55)' }}>
                  {pain.title}
                </span>
              </div>
              <h3 className="mt-4 font-fj-body font-semibold" style={{ fontSize: '1.0625rem', lineHeight: 1.35, color: '#FAFAF7' }}>
                {pain.headline}
              </h3>
              <p className="mt-3 font-fj-body" style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: 'rgba(250,250,247,0.72)' }}>
                {pain.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * NumbersBlock — maxi-typography 3-stat row, replaces BigThreeTrustBlock.
 * Uses verifiable Framework B+ stats matching the AggregateRating already
 * in our JSON-LD schema.
 */
function NumbersBlock() {
  return (
    <section
      className="py-14 md:py-20"
      style={{
        backgroundColor: '#FAFAF7',
        borderTop: '1.5px solid rgba(240,90,40,0.22)',
        borderBottom: '1.5px solid rgba(240,90,40,0.22)',
      }}
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <p className="fj-eyebrow">OUTCOMEBOARD™ — BY THE NUMBERS</p>
        <h2 className="fj-display font-semibold text-fj-ink mt-3" style={{
          fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
          lineHeight: 1.1,
          letterSpacing: '-0.025em',
          maxWidth: '640px',
        }}>
          Engineered outcomes, tracked monthly the way you would track them yourself.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {[
            { value: '500+', suffix: 'businesses served',     label: 'across web, e-commerce, and AI',         body: 'Engineering output measured in shipped projects, not slide decks. Every engagement ends with code we hand over and you keep running.' },
            { value: '7-day', suffix: 'delivery commitment',  label: 'on standard web + e-commerce scope',     body: 'Discovery on day one. Design through day three. Build and QA through day six. Live launch on day seven. Locked into every fixed-price engagement.' },
            { value: '4.9★', suffix: 'average client rating', label: 'across 150+ verified reviews',           body: 'AggregateRating published in our schema across every page. Independent client work, named references available on request from the founder.' },
          ].map((stat) => (
            <div key={stat.value}>
              <div className="flex items-baseline gap-3 flex-wrap">
                <p className="fj-display font-bold" style={{ color: '#F05A28', fontSize: 'clamp(3rem, 5.5vw, 4.5rem)', lineHeight: 1, letterSpacing: '-0.03em' }}>
                  {stat.value}
                </p>
                <p className="font-fj-body font-semibold" style={{ color: '#0F0F12', fontSize: '1.125rem', letterSpacing: '0.005em' }}>
                  {stat.suffix}
                </p>
              </div>
              <p className="mt-2 font-fj-mono font-bold uppercase" style={{ color: 'rgba(15,15,18,0.65)', fontSize: '10px', letterSpacing: '0.12em' }}>
                {stat.label}
              </p>
              <p className="mt-4 font-fj-body" style={{ color: 'rgba(15,15,18,0.72)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                {stat.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * MethodologyBar — dark section announcing the branded 4-phase methodology
 * with gradient text on each phase name. Visual signature moment.
 */
function MethodologyBar() {
  const phases = ['Discover', 'Architect', 'Ship', 'Own'];
  return (
    <section className="relative overflow-hidden py-14 md:py-20" style={{
      backgroundImage: [
        'radial-gradient(circle, rgba(255,255,255,0.052) 1px, transparent 1px)',
        'linear-gradient(135deg, #060D1F 0%, #0F0F12 45%, #0D0818 100%)',
      ].join(', '),
      backgroundSize: '28px 28px, 100% 100%',
    }}>
      <div className="pointer-events-none absolute" style={{
        left: '-10%', top: '20%', width: '480px', height: '480px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(240,90,40,0.28) 0%, transparent 65%)', filter: 'blur(48px)',
      }} aria-hidden="true" />
      <div className="pointer-events-none absolute" style={{
        right: '-8%', bottom: '0%', width: '420px', height: '420px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(240,90,40,0.16) 0%, transparent 65%)', filter: 'blur(56px)',
      }} aria-hidden="true" />

      <div className="relative mx-auto max-w-[1120px] px-6 md:px-8 text-center">
        <p className="font-fj-mono font-bold uppercase" style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#F05A28' }}>
          THE FACTORYJET METHOD
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:gap-5">
          {phases.map((phase, i) => (
            <div key={phase} className="flex items-center gap-3 md:gap-5">
              <span
                className="fj-display font-bold"
                style={{
                  fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                  lineHeight: 1.04,
                  letterSpacing: '-0.03em',
                  background: 'linear-gradient(135deg, #FF8C5A 0%, #F05A28 50%, #C94A1A 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                }}
              >
                {phase}
              </span>
              {i < phases.length - 1 && (
                <span className="font-fj-display font-bold" style={{ color: 'rgba(250,250,247,0.40)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <p className="mt-7 mx-auto max-w-[640px] font-fj-body" style={{
          fontSize: '1.0625rem',
          lineHeight: 1.6,
          color: 'rgba(250,250,247,0.78)',
        }}>
          Four phases. Each ends with a deliverable you own outright. No black-box weeks. No "we'll get back to you next sprint." The work compounds; you do not start over at every milestone.
        </p>
      </div>
    </section>
  );
}

/**
 * RealTestimonialsSection — REPLACES the previous CaseStudyPlaceholder block.
 * Three real client cards (Ricky B / Vishal K / Arif Saif Khan) with real
 * headshots + portfolio thumbnails + verbatim quotes from REVIEW_SCHEMA.
 * Light theme so it acts as the buffer between MethodologyBar (dark) and
 * the FAQ section (light).
 */
function RealTestimonialsSection() {
  return (
    <section className="relative py-14 md:py-20" style={{
      backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.028) 1px, transparent 1px)',
      backgroundSize: '28px 28px',
      backgroundColor: '#FAFAF7',
    }}>
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <p className="fj-eyebrow">CLIENT STORIES</p>
        <h2 className="fj-display font-semibold text-fj-ink mt-3" style={{
          fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
          lineHeight: 1.1,
          letterSpacing: '-0.025em',
          maxWidth: '640px',
        }}>
          Real engagements. Real names. Real outcomes.
        </h2>
        <p className="mt-4 max-w-[600px] font-fj-body text-fj-neutral-600" style={{ fontSize: '1rem', lineHeight: 1.65 }}>
          Three recent clients. Full named case studies for additional engagements (RDB Travels, Shevvaa, and more) land Q3 2026.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {REAL_TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="overflow-hidden rounded-2xl border bg-white"
              style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 1px 3px rgba(15,15,18,0.04)' }}
            >
              {/* Portfolio thumbnail */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image src={t.portfolio} alt={`${t.company} portfolio`} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
              </div>

              <div className="p-6">
                {/* Industry chip */}
                <p className="font-fj-mono font-bold uppercase" style={{ fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(15,15,18,0.55)' }}>
                  {t.industry}
                </p>

                {/* Headshot + name */}
                <div className="mt-4 flex items-center gap-3">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full" style={{ border: '2px solid #FAFAF7', boxShadow: '0 0 0 1px rgba(15,15,18,0.10)' }}>
                    <Image src={t.headshot} alt={t.name} fill className="object-cover" sizes="48px" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9375rem' }}>
                      {t.name}
                    </p>
                    <p className="font-fj-body" style={{ fontSize: '0.8125rem', color: 'rgba(15,15,18,0.60)' }}>
                      {t.company}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="mt-4 font-fj-body text-fj-ink" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Outcome metric chip */}
                <div className="mt-5">
                  <span
                    className="inline-flex items-center rounded-full px-3 py-1 font-fj-body font-semibold"
                    style={{ fontSize: '11px', backgroundColor: 'rgba(240,90,40,0.10)', color: '#C94A1A', border: '1px solid rgba(240,90,40,0.22)' }}
                  >
                    {t.metric}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */
export default function USHomePage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOW_TO_SCHEMA) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(REVIEW_SCHEMA) }} />
      <Script id="speakable-schema-us-hub" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Engineered Outcomes for US Businesses — Web, E-Commerce & AI | FactoryJet',
        'url': 'https://factoryjet.com/us/',
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['h1', '.faq-answer', '[data-speakable]'] },
      }) }} />

      <SiteHeader
        navLinks={[
          { label: 'Services',  href: '/us/services/web-design' },
          { label: 'AI Agents', href: '/us/services/ai-agents' },
          { label: 'AI SEO',    href: '/us/services/ai-seo' },
          { label: 'Pricing',   href: '/us/pricing' },
          { label: 'Portfolio', href: '/us/portfolio' },
          { label: 'FAQ',       href: '/us/faq' },
        ]}
        cta={{ label: 'Get a Quote', modal: true, region: 'us' }}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO — V1 Engineered Outcomes with gradient text + floating stat badges ── */}
        <Hero
          announcementPill={{ text: 'Now booking — 7-day delivery on standard scope' }}
          eyebrow="ENGINEERED OUTCOMES · AI-NATIVE · US-FOCUSED"
          headline={
            <>
              Websites and AI agents engineered to deliver{' '}
              <span style={{
                background: 'linear-gradient(135deg, #FF8C5A 0%, #F05A28 50%, #C94A1A 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}>
                measurable outcomes
              </span>
              .
            </>
          }
          lead="FactoryJet is an AI-native US digital partner. We engineer websites, e-commerce stores, and AI agents that pay for themselves in 90 days — fixed-price, milestone-paid, with code you own from day one. Talk to the founder before you commit."
          primaryCta={{ label: 'Start Your Project', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See our services', href: '#services' }}
          trustItems={['Senior engineers, not SDRs', 'Fixed price, milestone-paid', 'Code & data ownership Day 1']}
          rightSlot={<HeroVisualSlot />}
        />

        {/* ── 2. LIVE COUNTER STRIP ── */}
        <LiveCounterStrip />

        {/* ── 3. LOGO BAR — Framework B+ tagline ── */}
        <LogoBar tagline="Trusted by 500+ businesses scaling outcomes across web, e-commerce, and AI." />

        {/* ── 4. BENTO SERVICES GRID (light) ── */}
        {/* Note: above-the-fold TalkToFounder section removed 2026-05-26 per Bhavesh
            request to dial down founder-CTA repetition. Sole dedicated founder
            section is now the dark closing banner above the footer (section 14). */}
        <BentoServicesGrid />

        {/* ── 6. PAIN PATTERNS (DARK) — Here is what is broken ── */}
        <PainPatternSection />

        {/* ── 7. NUMBERS BLOCK (light buffer) — Here is our track record ── */}
        <NumbersBlock />

        {/* ── 8. INDUSTRIES (DARK) — Here is who we serve ── */}
        <IndustriesGrid />

        {/* ── 9. HOW IT WORKS (light buffer) — Here is how we work ── */}
        <ServiceJourneyRow
          eyebrow="YOUR PATH TO LAUNCH"
          headline="5 stages, zero surprises: from discovery call to live website in 7 days."
          lead="We do not start designing until we understand your goals. Every stage ends with a deliverable you review and approve — so no design, no development, and no launch happens without your sign-off."
          stages={JOURNEY_STAGES}
          closingNote="5 STAGES · 7 DAYS (UP TO 5 PAGES) · FIXED PRICE PER SCOPE"
        />

        {/* ── 10. METHODOLOGY BAR (DARK) — Here is our branded approach ── */}
        <MethodologyBar />

        {/* ── 11. REAL TESTIMONIALS (light buffer) — Here is what real clients say ── */}
        <RealTestimonialsSection />

        {/* ── 12. WHY FACTORYJET (DARK) — Here is why we are different ── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Three structural reasons buyers with budget pick us over US-incumbent agencies."
          lead="We compete on engineering quality and engagement structure — not on headcount rates. Senior people answer the discovery call, write the code, and stay through launch. Pricing is fixed in writing before any work begins, and every milestone ends with a deliverable you own outright."
          pillars={[
            { title: 'Senior engineers ship the work',           body: 'No SDR-to-strategist-to-developer handoff chain. You brief a senior engineer on the first call, and that engineer stays on the project through launch. Faster decisions, fewer dropped balls, no telephone game between brief and implementation.' },
            { title: 'Fixed price, milestone-paid',              body: 'Pricing is locked in writing before any work begins. No discovery-phase billing, no "it depends" quotes that arrive three weeks later. You pay per shipped milestone, not per hour or per change order. The engagement structure carries the same risk profile as a SaaS subscription you can cancel.' },
            { title: 'Code and data ownership from day one',     body: 'Every line of code, every design asset, every database, every dashboard — yours from the first deliverable. GitHub repository transfer is part of every project, not an upsell. Hosting runs in your accounts. No proprietary lock-in, no exit fees, no asset hoarding.' },
          ]}
        />

        {/* ── 13. FAQ (light buffer) ── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Thirteen questions, answered the way Bhavesh would on the discovery call."
          lead="If your question is not below, send a written brief — answers usually come back inside 24 hours."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── 14. TALK TO THE FOUNDER (full + dark) — closing CTA ── */}
        <TalkToFounder
          variant="full"
          theme="dark"
          eyebrow="READY TO START"
          mailtoSubject="FactoryJet project enquiry"
        />

      </main>

      <RelatedGuides
        links={[
          { href: '/blog/best-web-design-agencies-small-business-2026', label: 'Best web design agencies for small business (2026)' },
          { href: '/blog/mobile-only-design-strategy', label: 'Mobile-only vs responsive design: which to pick' },
          { href: '/blog/website-cost-small-business-usa-2026', label: 'How much a small business website costs in 2026' },
        ]}
      />
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
