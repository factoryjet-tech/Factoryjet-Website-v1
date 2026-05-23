import type { Metadata } from 'next';
import Script from 'next/script';
import { usHubAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import HeroImageMockup from '@/components/v2/HeroImageMockup';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServicesGrid from '@/components/v2/ServicesGrid';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Web Design Agency USA | 7-Day Delivery from $1,999 | FactoryJet',
  description:
    'Top-rated US web design agency: custom websites live in 7 days from $1,999 — 60% less than US agencies. Shopify & Next.js. 500+ businesses served.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Agency USA | Websites in 7 Days from $1,999 — 60% Less | FactoryJet',
    description:
      'Custom websites live in 7 days from $1,999 — 60% less than US agencies. 500+ businesses served. Shopify, Next.js, WordPress. Free strategy call.',
    url: 'https://factoryjet.com/us',
    images: [{ url: 'https://factoryjet.com/logo.png', width: 1200, height: 630, alt: 'FactoryJet - Web Design Agency USA' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Agency USA | 7 Days from $1,999 — 60% Less | FactoryJet',
    description:
      'Custom websites live in 7 days from $1,999 — 60% less than US agencies. Shopify, Next.js, WordPress. 500+ businesses served.',
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
   Data
───────────────────────────────────────────────────────────────────────────── */

const JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'We map your ideal customer profile, audit top competitors, and agree the sitemap and content plan. You leave this phase knowing exactly what the site will do and how we will measure it.',
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
      'Copy, optimized WebP imagery, meta tags, JSON-LD schema, and internal links all land in this phase. We submit the sitemap to Google Search Console and verify rendering for AI crawlers.',
  },
  {
    number: '05',
    title: 'Launch & Handover',
    description:
      'We deploy to Cloudflare, wire up GA4 and GTM, and walk you through the CMS in a recorded handover session. A 30-day support window covers any post-launch fixes or training questions.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'about',     label: 'About FactoryJet' },
  { key: 'pricing',   label: 'Pricing & Delivery' },
  { key: 'process',   label: 'Our Process' },
  { key: 'platform',  label: 'Platform & Ownership' },
  { key: 'getting-started', label: 'Getting Started' },
];

const FAQ_ITEMS = [
  /* ── About FactoryJet ── */
  {
    category: 'about',
    question: 'What is a B2B web design agency?',
    answer:
      'A B2B web design agency builds websites specifically designed to generate qualified leads, establish buyer trust, and support long sales cycles for business-focused companies. Unlike general web studios, B2B agencies structure every design decision around business outcomes — not aesthetics alone.',
  },
  {
    category: 'about',
    question: 'What industries do you specialise in?',
    answer:
      'FactoryJet focuses on B2B industries where technical credibility and buyer trust drive conversions: cybersecurity, healthcare and MedTech, IT and managed services, SaaS, professional services, and manufacturing. See our case studies for sector-specific results.',
  },
  {
    category: 'about',
    question: 'How are you so much faster than other agencies?',
    answer:
      'FactoryJet was built AI-native from day one. We use AI to run parallel workstreams — concept generation, wireframing, and development scaffolding — that traditional agencies run sequentially. Human designers and developers focus on strategy, refinement, and quality assurance. The result is 7-day delivery without sacrificing quality.',
  },

  /* ── Pricing & Delivery ── */
  {
    category: 'pricing',
    question: 'How much does a professional B2B website cost in the USA?',
    answer:
      "B2B website design in the USA typically ranges from $1,999 for a focused business website to $15,000+ for enterprise builds with custom integrations. FactoryJet's fixed-price model means your full investment is confirmed before work begins — no discovery-phase billing, no surprise invoices.",
  },
  {
    category: 'pricing',
    question: 'How long does it take to build a B2B website?',
    answer:
      'FactoryJet delivers most standard B2B websites in 7 days. A typical 5–10 page project includes strategy on day one, design sprint within the first 3 days, development and QA by days 5–6, and live launch on day 7. Complex e-commerce or custom integration projects may extend to 7–14 days.',
  },
  {
    category: 'pricing',
    question: 'Is hosting included, and do you mark it up?',
    answer:
      "Hosting and deployment are always configured in your own account — never ours. There is no hosting markup, no proprietary infrastructure, and no exit fee. You maintain full control of your hosting environment from day one.",
  },

  /* ── Our Process ── */
  {
    category: 'process',
    question: 'Do you use templates?',
    answer:
      'No. Every FactoryJet website is built from a custom design brief. We do not resell or modify off-the-shelf templates. Custom builds allow us to structure every page for your specific buyers and conversion goals.',
  },
  {
    category: 'process',
    question: "What if I don't like the design?",
    answer:
      'FactoryJet offers a 14-day money-back guarantee if the design phase does not meet expectations. We also build in a structured revision process to ensure the final design reflects your brand and goals before development begins.',
  },
  {
    category: 'process',
    question: 'Can you redesign my website without losing Google rankings?',
    answer:
      "Yes. FactoryJet's redesign process preserves existing URL structures, redirects, and SEO equity. We conduct a technical audit before migration and monitor search performance post-launch to protect rankings built over time.",
  },

  /* ── Platform & Ownership ── */
  {
    category: 'platform',
    question: 'Which platform is best for a B2B business website?',
    answer:
      "The right platform depends on your business requirements. WordPress offers maximum SEO flexibility and content control. Webflow provides design precision with manageable maintenance. Shopify is optimized for e-commerce conversion. Next.js and custom React stacks suit high-performance or application-like builds. FactoryJet recommends based on your goals — not internal capability constraints.",
  },
  {
    category: 'platform',
    question: 'Do I own the code after the project?',
    answer:
      'Yes — 100%. Every FactoryJet project includes a full GitHub repository transfer upon completion. Your code, design assets, and all project files are yours outright. No retainer required. No ongoing dependency.',
  },
  {
    category: 'platform',
    question: 'Will I be able to update the site myself?',
    answer:
      'Yes. All builds include a CMS — WordPress or Webflow depending on your platform — that allows your team to update content, images, blog posts, and pages without developer involvement.',
  },

  /* ── Getting Started ── */
  {
    category: 'getting-started',
    question: 'How do I get started?',
    answer:
      "Book a free strategy call. We'll learn about your goals, current challenges, and target buyers — and deliver a clear roadmap and fixed quote within 24 hours. No obligation. No discovery-phase billing.",
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '150',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1',
  },
};

const REVIEW_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Ricky B.' },
      reviewBody:
        'We were live in 6 days — I genuinely did not believe that was possible. The design is stunning, the WhatsApp integration brings in enquiries every day, and the Lighthouse score has not moved from 100.',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      datePublished: '2026-01-15',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Vishal K.' },
      reviewBody:
        'Our B2B catalogue was a nightmare to manage. FactoryJet built us a clean Shopify store with GST invoicing and a wholesale pricing module — our distributor onboarding time dropped from days to hours.',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      datePublished: '2025-11-08',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Arif Saif Khan' },
      reviewBody:
        'As an MEP and BIM consultancy, credibility is everything. FactoryJet gave us a site that looks like a Tier-1 firm — structured data, fast load, and project showcase pages that actually rank on Google.',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      datePublished: '2025-09-22',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Sarah M.' },
      reviewBody:
        'We went live in 7 days — completely on schedule. The site looks better than anything I had seen from local Austin agencies, and at a fraction of the price. Inquiry form submissions doubled in the first month.',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      datePublished: '2025-10-14',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'James T.' },
      reviewBody:
        'FactoryJet rebuilt our Shopify store from scratch in under two weeks. Mobile checkout conversion went from 1.8% to 4.1% — that is a real number on a real revenue line. Delivered ahead of schedule.',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      datePublished: '2025-12-03',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Marcus R.' },
      reviewBody:
        'We needed a site that wins enterprise clients. FactoryJet delivered structured data, sub-2-second load times, and a design that looks like a Tier-1 firm. Lighthouse 100/100 on launch day — I checked myself.',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      datePublished: '2026-02-19',
    },
  ],
};

const HOW_TO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds your website in 7 days',
  description: 'Our proven 7-day process for delivering professional, SEO-optimized websites for US businesses.',
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 — Discovery Call',
      text: 'We learn your business, goals, and target audience. We define the sitemap, content strategy, and technical requirements.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 — Strategy & Structure',
      text: 'We finalize your site architecture, wireframes, and content outline. You approve the plan before any design begins.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3–4 — Design',
      text: 'We design every page with your brand identity, mobile-first layouts, and conversion-focused UX. You review and approve all designs.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5–6 — Development & SEO',
      text: 'We build your site in Next.js or WordPress, optimize Core Web Vitals, add structured data, and connect all integrations.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7 — Launch',
      text: 'Your website goes live. We handle DNS, SSL, final QA, and provide training plus 30-day post-launch support.',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */
export default function USHomePage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOW_TO_SCHEMA) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(REVIEW_SCHEMA) }}
      />
      <Script
        id="speakable-schema-us-hub"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Web Design Agency USA | 7-Day Delivery from $1,999 | FactoryJet",
          "url": "https://factoryjet.com/us/",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".faq-answer", "[data-speakable]"]
          }
        }) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/us/services/web-design' },
          { label: 'Shopify', href: '/us/services/shopify-development' },
          { label: 'AI Agents', href: '/us/services/ai-agents' },
          { label: 'Pricing', href: '/us/pricing' },
          { label: 'Portfolio', href: '/us/portfolio' },
          { label: 'FAQ', href: '/us/faq' },
        ]}
        cta={{ label: 'Free Strategy Call', modal: true, region: 'us' }}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          announcementPill={{ text: 'Accepting New Clients — 7-Day Delivery' }}
          headline={<>Affordable Web Design<br className="hidden lg:block" /> for US Small Businesses.<br className="hidden lg:block" /> Live in 7 Days</>}
          lead="FactoryJet is a web design agency building high-converting websites and Shopify stores for US small businesses. 60 to 70% less than local agencies, with full code ownership and a guaranteed delivery."
          primaryCta={{ label: 'Get a Free Strategy Call', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Free SEO Audit', modal: true, region: 'us' }}
          trustItems={['From $1,999', '7-Day Delivery', '60–70% Less', '523+ Projects']}
          rightSlot={<HeroImageMockup />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across Austin, Miami, Denver, Nashville, Portland and beyond" />

        {/* ── 3. SERVICES ──────────────────────────────────────────────────── */}
        <ServicesGrid />

        {/* ── 4. INDUSTRIES ────────────────────────────────────────────────── */}
        <IndustriesGrid />

        {/* ── 5. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="523 websites. 7-day delivery. $50M+ in client revenue generated."
        />

        {/* ── 6. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why US Companies Choose FactoryJet for B2B Web Design"
          lead="US web agencies charge $15,000–$50,000 for websites FactoryJet delivers for 60–70% less — with a 7-day guarantee, fixed pricing, and a codebase that's yours the moment we launch. No discovery fees. No retainers. No vendor lock-in."
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

        {/* ── 7. HOW IT WORKS ──────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="YOUR PATH TO LAUNCH"
          headline="5 Steps, Zero Surprises: From Strategy Call to Live Website"
          lead="We don't start designing until we understand your goals. Every stage ends with a deliverable you review and approve — so no design, no development, and no launch happens without your sign-off."
          stages={JOURNEY_STAGES}
          closingNote="5 STAGES · 7 DAYS (UP TO 5 PAGES) · FREE STRATEGY CALL BEFORE ANY COMMITMENT"
        />

        {/* ── 8. TESTIMONIALS ──────────────────────────────────────────────── */}
        <TestimonialsSection
          region="us"
          eyebrow="VERIFIED CLIENT WORK · 4.9★ RATING"
          headline="4.9/5 across 500+ projects. Every URL is live: open it, run PageSpeed, inspect the code."
        />

        {/* ── 9. FAQ ───────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Frequently Asked Questions: B2B Web Design in the USA"
          lead="Everything you need to know about working with us."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── 10. FINAL CTA ────────────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="START WITH A FREE STRATEGY CALL"
          headline="Transform Your B2B Website Into a Lead-Generating Machine"
          sub="Stop losing qualified leads to competitors with faster, higher-converting websites. Partner with FactoryJet — a B2B web design agency USA businesses trust — to launch a high-converting, performance-driven website in 7 days. No obligation. 100% free consultation."
          primaryCta={{ label: 'Get Your Free Strategy Call', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Request a Free Technical & SEO Audit', modal: true, region: 'us' }}
          objectionHandler="Fixed pricing. 7-day delivery. Full code ownership. Free strategy call first."
        />

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
