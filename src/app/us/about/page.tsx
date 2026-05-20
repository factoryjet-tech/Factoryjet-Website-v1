import type { Metadata } from 'next'
import { aboutAlternates } from '@/data/hreflangMap'

import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import Hero from '@/components/v2/Hero'
import LogoBar from '@/components/v2/LogoBar'
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock'
import StrategicDarkSection from '@/components/v2/StrategicDarkSection'
import ServiceExplanation from '@/components/v2/ServiceExplanation'
import ServiceJourneyRow from '@/components/v2/ServiceJourneyRow'
import TestimonialsSection from '@/components/v2/TestimonialsSection'
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable'
import FinalCTA from '@/components/v2/FinalCTA'
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'About FactoryJet | Web Design Agency for US SMBs',
  description:
    'FactoryJet builds custom websites, Shopify stores & AI apps for US small businesses — delivered in 7 days at 60–70% below agency rates. 500+ businesses launched.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'About FactoryJet | Web Design Agency for US SMBs',
    description:
      'Custom website design, Shopify development, and AI-native web apps. Fixed price. 7-day delivery. 500+ US businesses launched.',
    url: 'https://factoryjet.com/us/about',
    images: [
      {
        url: 'https://factoryjet.com/og/about.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet — Web Design Agency for US Small Businesses',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About FactoryJet | Web Design Agency for US SMBs',
    description:
      'Fixed-price custom web design. 7-day delivery. 60–70% more affordable than local agencies.',
    images: ['https://factoryjet.com/og/about.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/about',
    languages: aboutAlternates,
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
}

// ─── JSON-LD Structured Data ───────────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://factoryjet.com/#organization',
      name: 'FactoryJet',
      url: 'https://factoryjet.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://factoryjet.com/logo.png',
        width: 400,
        height: 120,
      },
      description:
        'FactoryJet is a web design agency for US small businesses. We deliver custom websites, Shopify stores, and AI-powered web applications in 7 days at 60–70% less than traditional US agencies.',
      foundingDate: '2000',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: 25,
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      serviceArea: [
        'Austin, TX', 'Miami, FL', 'Denver, CO', 'Nashville, TN',
        'Portland, OR', 'Charlotte, NC', 'Raleigh, NC', 'Tampa, FL',
      ],
      knowsAbout: [
        'Web Design',
        'Custom Website Development',
        'Shopify Development',
        'Ecommerce Website Design',
        'Next.js Development',
        'AI Web Design',
        'Small Business Website Design',
        'Affordable Web Design USA',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'connect@factoryjet.com',
        availableLanguage: 'English',
        areaServed: 'US',
      },
      sameAs: [
        'https://www.linkedin.com/company/factoryjet',
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://factoryjet.com/us',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'About',
          item: 'https://factoryjet.com/us/about',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a custom website cost with FactoryJet?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'FactoryJet offers fixed-price custom website design starting significantly below what US agencies typically charge — usually 60–70% less. There are no hourly billing surprises. Every project is scoped and priced upfront.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to build a website with FactoryJet?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'FactoryJet guarantees delivery of up to 5-page websites within 7 business days of design sign-off. Larger projects like Shopify stores and custom web apps have defined timelines agreed at scope.',
          },
        },
        {
          '@type': 'Question',
          name: 'What technologies does FactoryJet use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'FactoryJet builds on Next.js, React, TypeScript, Shopify, and open-standards stacks. We do not use proprietary CMSes that lock you in. All code is yours.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does FactoryJet build Shopify stores?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. FactoryJet specializes in Shopify development for US DTC brands and retail businesses — including custom themes, app integrations, and full ecommerce builds.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which US cities does FactoryJet serve?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'FactoryJet serves businesses across the United States, with a focus on Austin TX, Miami FL, Denver CO, Nashville TN, Portland OR, Charlotte NC, Raleigh NC, and Tampa FL — plus all major metros.',
          },
        },
      ],
    },
  ],
}

// ─── Stat card for ServiceExplanation rightSlot ───────────────────────────────

function AgencyStatCard() {
  return (
    <div className="w-full max-w-sm mx-auto lg:mx-0">
      {/* Main stat card */}
      <div
        className="rounded-2xl p-8 md:p-10"
        style={{
          background: 'linear-gradient(135deg, #FFFFFF 0%, #FDF6F3 100%)',
          border: '1px solid rgba(240,90,40,0.10)',
          borderTopWidth: '3px',
          borderTopColor: '#F05A28',
          boxShadow: '0 4px 24px rgba(240,90,40,0.08), 0 1px 4px rgba(0,0,0,0.04)',
        }}
      >
        <div
          className="mb-2 h-[3px] w-8 rounded-full"
          style={{ background: '#F05A28' }}
          aria-hidden="true"
        />
        <p
          className="fj-display font-bold leading-none tracking-tight"
          style={{
            fontSize: 'clamp(3.5rem, 8vw, 5.5rem)',
            color: '#F05A28',
            letterSpacing: '-0.03em',
          }}
        >
          7
        </p>
        <p
          className="mt-2 font-fj-mono font-semibold uppercase"
          style={{ fontSize: '10px', letterSpacing: '0.14em', color: '#F05A28', opacity: 0.65 }}
        >
          DAYS
        </p>
        <p className="mt-3 font-fj-body text-[0.9375rem] leading-[1.6] text-fj-neutral-600">
          From kick-off to a live, production-ready website. Not a template — a custom build.
        </p>
      </div>

      {/* Supporting mini-stats */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div
          className="rounded-xl p-5 text-center"
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(0,0,0,0.06)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          }}
        >
          <p
            className="fj-display font-bold"
            style={{ fontSize: '1.75rem', color: '#F05A28', letterSpacing: '-0.02em' }}
          >
            500+
          </p>
          <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-500">Sites launched</p>
        </div>
        <div
          className="rounded-xl p-5 text-center"
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(0,0,0,0.06)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          }}
        >
          <p
            className="fj-display font-bold"
            style={{ fontSize: '1.75rem', color: '#F05A28', letterSpacing: '-0.02em' }}
          >
            60–70%
          </p>
          <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-500">Cost savings</p>
        </div>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />

      {/* ── 1. HERO — light cream, no dark hero ─────────────────────────── */}
      <Hero
        eyebrow="ABOUT FACTORYJET"
        headline="The Web Agency Built for US Small Businesses"
        lead="Enterprise-quality websites at 60–70% less than what traditional agencies charge. Fixed price. 7-day delivery. 500+ US businesses launched."
        primaryCta={{ label: 'Start Your Project', modal: true, region: 'us' }}
        secondaryCta={{ label: 'See Our Work', href: '/us/portfolio' }}
        trustItems={[
          '500+ businesses launched',
          '7-day delivery guarantee',
          '60–70% cost savings',
          'Fixed-price — no surprises',
        ]}
      />

      {/* ── 2. LOGO BAR ─────────────────────────────────────────────────── */}
      <LogoBar tagline="Trusted by growing businesses across Austin, Miami, Denver, Nashville, and beyond" />

      {/* ── 3. BIG THREE TRUST BLOCK ────────────────────────────────────── */}
      <BigThreeTrustBlock
        eyebrow="BY THE NUMBERS"
        headline="A track record built on delivery, not promises"
      />

      {/* ── 4. STRATEGIC DARK — The Problem (DARK) ──────────────────────── */}
      <StrategicDarkSection
        eyebrow="WHY WE EXIST"
        headline="Most web agencies make website delivery slow, expensive, and risky."
        lead="We built FactoryJet to fix all three — without compromising on quality, performance, or your launch date."
        pillars={[
          {
            icon: '⚡',
            title: 'Speed Shouldn\'t Cost Extra',
            body: 'Most agencies bill by the hour and drag timelines across months. We deliver complete, production-ready custom websites in 7 business days — fixed price, no scope creep, no surprise invoices.',
          },
          {
            icon: '🏆',
            title: 'Enterprise Quality, SMB Budget',
            body: 'Lighthouse 100/100. Core Web Vitals green. Structured data for AI search engines. Standards that Fortune 500 teams demand — at a price point built for businesses with 2–50 employees.',
          },
          {
            icon: '🔓',
            title: 'You Own Everything',
            body: 'No proprietary CMS lock-in. No monthly "hosting" that holds your site hostage. We build on Next.js, Shopify, and open standards. Your code, your domain, your data — yours forever.',
          },
        ]}
      />

      {/* ── 5. SERVICE EXPLANATION — How It Works (LIGHT/CREAM) ─────────── */}
      <ServiceExplanation
        eyebrow="HOW IT WORKS"
        headline="AI-native workflow. Human expertise. Zero guesswork."
        lead="FactoryJet combines senior engineering talent with AI tooling to compress timelines without cutting corners. You get a dedicated project lead, daily progress updates, and a fixed scope — not an open-ended retainer."
        body={
          <>
            <p>
              We specialize in custom website design for US small businesses — from DTC ecommerce brands on Shopify to service companies, law firms, real estate agencies, and SaaS startups needing Next.js development.
            </p>
            <p>
              Every site we ship is mobile-first, loads in under 2 seconds, and includes structured data for AEO and AI search engines like ChatGPT, Perplexity, and Google AI Overviews. We don&apos;t build throwaway websites — we build assets your business grows on.
            </p>
            <p>
              Serving Austin TX, Miami FL, Denver CO, Nashville TN, Portland OR, Charlotte NC, Raleigh NC, Tampa FL, and all US markets.
            </p>
          </>
        }
        rightSlot={<AgencyStatCard />}
      />

      {/* ── 6. SERVICE JOURNEY ROW — Our Process (WHITE) ────────────────── */}
      <ServiceJourneyRow
        eyebrow="OUR PROCESS"
        headline="Five stages from strategy to live site."
        lead="No black-box development. No surprise scope changes. Every engagement follows the same proven delivery process — so you always know exactly where your project stands."
        closingNote="MOST PROJECTS GO LIVE WITHIN 7 BUSINESS DAYS"
      />

      {/* ── 7. TESTIMONIALS (DARK — self-contained bg) ──────────────────── */}
      <TestimonialsSection
        region="us"
        eyebrow="CLIENT RESULTS"
        headline="Real outcomes for real US businesses"
        sub="From DTC ecommerce brands to law firms to SaaS startups — here's what our clients say about working with FactoryJet."
      />

      {/* ── 8. COMPARISON TABLE (LIGHT) — separates two dark sections ───── */}
      <ComparisonTable
        eyebrow="HOW WE COMPARE"
        headline="FactoryJet vs. traditional web agencies"
        lead="Most businesses waste months and tens of thousands of dollars before they find an agency that actually delivers. See exactly how we stack up."
        pullQuote={{
          stat: '60–70%',
          caption: 'lower cost than comparable US web design agencies — with faster turnaround and better performance scores.',
        }}
        columns={[
          { label: 'FactoryJet', isFactoryJet: true },
          { label: 'Traditional Agency' },
          { label: 'DIY Platforms' },
        ]}
        rows={[
          {
            feature: 'Delivery timeline',
            values: ['7 business days', '4–12 weeks', 'Ongoing (you build it)'],
          },
          {
            feature: 'Pricing model',
            values: ['Fixed price, scoped upfront', 'Hourly billing + overages', 'Monthly subscription'],
          },
          {
            feature: 'Tech stack',
            values: ['Next.js / Shopify / Custom', 'WordPress / Webflow', 'Wix / Squarespace'],
          },
          {
            feature: 'Performance (Lighthouse)',
            values: [
              <CompareIcon key="fj-perf" kind="yes" label="100/100 guaranteed" />,
              <CompareIcon key="ag-perf" kind="partial" label="Varies by agency" />,
              <CompareIcon key="diy-perf" kind="no" label="Rarely optimized" />,
            ],
          },
          {
            feature: 'Mobile-first design',
            values: [
              <CompareIcon key="fj-mob" kind="yes" />,
              <CompareIcon key="ag-mob" kind="partial" />,
              <CompareIcon key="diy-mob" kind="partial" label="Template-limited" />,
            ],
          },
          {
            feature: 'SEO-ready on launch',
            values: [
              <CompareIcon key="fj-seo" kind="yes" />,
              <CompareIcon key="ag-seo" kind="partial" />,
              <CompareIcon key="diy-seo" kind="no" />,
            ],
          },
          {
            feature: 'Structured data / AEO',
            values: [
              <CompareIcon key="fj-aeo" kind="yes" label="Schema + FAQ + Entity markup" />,
              <CompareIcon key="ag-aeo" kind="no" />,
              <CompareIcon key="diy-aeo" kind="no" />,
            ],
          },
          {
            feature: 'You own the code',
            values: [
              <CompareIcon key="fj-own" kind="yes" label="Full ownership, no lock-in" />,
              <CompareIcon key="ag-own" kind="partial" label="Depends on CMS" />,
              <CompareIcon key="diy-own" kind="no" label="Platform-locked" />,
            ],
          },
          {
            feature: 'Post-launch support',
            values: [
              <CompareIcon key="fj-sup" kind="yes" />,
              <CompareIcon key="ag-sup" kind="partial" label="Retainer required" />,
              <CompareIcon key="diy-sup" kind="no" label="Self-serve only" />,
            ],
          },
        ]}
        footer="Pricing and timelines compared against published rates of US web design agencies serving SMBs as of 2025."
      />

      {/* ── 9. FINAL CTA (DARK) ─────────────────────────────────────────── */}
      <FinalCTA
        variant="dark"
        eyebrow="START YOUR PROJECT"
        headline="Your website should work as hard as you do."
        sub="Tell us what you need. We'll scope it, price it, and deliver it — guaranteed. No agency markup, no scope creep, no surprises. Just a fast, beautiful website that converts."
        primaryCta={{ label: 'Get a Free Quote', modal: true, region: 'us' }}
        secondaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'us' }}
        objectionHandler="Fixed price. 7-day delivery. 500+ businesses launched."
      />

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  )
}
