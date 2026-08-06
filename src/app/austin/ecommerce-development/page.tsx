// /us/austin/ecommerce-development — v2 upgrade
// Design: v2 component library · Clash Display headlines · py-14 md:py-20 rhythm
// Content: /content/us/austin/ecommerce-development.mdx (approved 2026-05-19)
// Schema: server-side via SchemaScript — AI-crawler visible in initial HTML

import type { Metadata } from 'next'
import { ecommerceCityAlternatesUS } from '@/data/hreflangMap'
import { getEcommerceCitySchema } from '@/data/ecommerceCitySchemas'
import Hero from '@/components/v2/Hero'
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar'
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock'
import CityContextSection from '@/components/v2/CityContextSection'
import ServiceExplanation from '@/components/v2/ServiceExplanation'
import StrategicDarkSection from '@/components/v2/StrategicDarkSection'
import ServiceJourneyRow from '@/components/v2/ServiceJourneyRow'
import PortfolioShowcase from '@/components/v2/PortfolioShowcase'
import ComparisonTable from '@/components/v2/ComparisonTable'
import PricingTiers from '@/components/v2/PricingTiers'
import IndustriesGrid from '@/components/v2/IndustriesGrid'
import TestimonialsSection from '@/components/v2/TestimonialsSection'
import FAQ from '@/components/v2/FAQ'
import FinalCTA from '@/components/v2/FinalCTA'
import EcommerceCityLinksUS from '@/components/v2/EcommerceCityLinksUS'
import HeroBrowserMockup from '@/components/v2/HeroBrowserMockup'
import Link from 'next/link'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns'

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Ecommerce Development Austin TX | 7-Day Delivery, Fixed-Price | FactoryJet',
  description:
    "Austin ecommerce development by FactoryJet: Shopify, WooCommerce & custom stores. Launches in 7 days, fixed-price. Free audit.",
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce Development Austin TX | 7-Day Delivery, Fixed-Price | FactoryJet',
    description:
      'Custom Shopify & WooCommerce stores built in 7 days: fixed-price vs local benchmarks. 500+ brands served across the US, UK, UAE and India. No fluff. Just results.',
    url: 'https://factoryjet.com/austin/ecommerce-development',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet: Ecommerce Development Austin TX',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Development Austin TX | 7-Day Delivery, Fixed-Price | FactoryJet',
    description:
      'Custom Shopify & WooCommerce stores built in 7 days: fixed-price vs local agency benchmarks. 500+ stores delivered.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/austin/ecommerce-development',
    languages: ecommerceCityAlternatesUS['austin'],
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

// ─── FAQ Category Config ──────────────────────────────────────────────────────

const FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Budget' },
  { key: 'platform',  label: 'Platforms & Tech' },
  { key: 'process',   label: 'Timeline & Process' },
  { key: 'local',     label: 'Austin-Specific' },
  { key: 'quality',   label: 'Quality & Results' },
]

const FAQ_ITEMS = [

            /* ─ Pricing & Budget ─ */
            {
              category: 'pricing',
              question: 'How much does ecommerce development cost in Austin, TX?',
              answer:
                "Austin ecommerce agencies typically charge enterprise-level rates for a Shopify or WooCommerce store, depending on complexity. At FactoryJet, pricing is fixed-price and scoped to your build: the main drivers are catalog size, integrations, and design complexity. Every project is quoted up front after a free discovery call, so you know the full cost before work starts. The difference comes from our lean operations, not from cutting corners on quality. We guarantee Lighthouse 95+ on every project regardless of tier.",
            },
            {
              category: 'pricing',
              question: 'How does FactoryJet keep Austin store pricing fixed and predictable?',
              answer:
                "We work fixed-price and milestone-paid: every store is scoped upfront with no hourly billing and no scope-creep invoices. 12 years of experience with 500+ stores means we estimate accurately on the first call, so the quote you sign is what you pay. You get US-hour project management, US-timezone communication, and senior developers with 10+ years of experience, delivering code quality indistinguishable from what a high-end Austin agency would produce, with full code ownership at handoff.",
            },
            {
              category: 'pricing',
              question: 'Are there any hidden fees I should know about?',
              answer:
                "None. Your quote covers everything: design, development, testing, launch, and 30 days of post-launch support. We don't charge extra for revisions during the build phase, platform setup, or standard integrations like Klaviyo and Google Analytics. The only time the price changes is if your project scope expands significantly during the build, and we always discuss that before acting.",
            },
            {
              category: 'pricing',
              question: 'Do you offer payment plans?',
              answer:
                "Yes. Most projects can be split into 50% at kickoff and 50% at launch. For larger builds, we offer a three-payment structure: 40% kickoff, 30% mid-build, 30% at launch. We accept all major US credit cards, ACH bank transfer, and wire.",
            },

            /* ─ Platforms & Tech ─ */
            {
              category: 'platform',
              question: 'Which ecommerce platform is right for my Austin business?',
              answer:
                "For most Austin small businesses just getting into ecommerce, Shopify is the right call. It's reliable, has an enormous app ecosystem, and requires zero server maintenance. WooCommerce makes sense if you're already on WordPress and want full ownership of your data and code. Custom headless builds (Next.js + Shopify/Medusa) are for businesses with complex requirements: custom pricing engines, ERP integrations, or very high traffic. We'll recommend the right platform on your discovery call based on your actual situation.",
            },
            {
              category: 'platform',
              question: 'Can you migrate my existing store to a new platform?',
              answer:
                "Yes, this is one of our most common requests. We migrate Austin businesses from legacy platforms: Magento, Volusion, 3dcart, outdated custom builds, to modern Shopify or WooCommerce installs. Migrations include: product catalog with all images and metafields, customer records, historical order data, blog content, and 301 redirect maps so your SEO rankings survive the switch. We've done 80+ migrations without a single client losing their organic rankings.",
            },
            {
              category: 'platform',
              question: 'Do you work with Shopify Plus?',
              answer:
                "Yes. We have Shopify Plus experience including checkout extensibility, B2B features, automation flows (Shopify Flow), metaobject-based content architecture, and multi-storefront setups. We also handle Shopify Plus migrations, moving clients from standard Shopify, BigCommerce, or Magento to Plus without disrupting their business.",
            },
            {
              category: 'platform',
              question: 'Will my store work on mobile?',
              answer:
                "Every store we build is mobile-first by design, not mobile-adapted after the fact. Austin shoppers are increasingly purchasing on their phones. We test on real devices across iOS and Android, not just browser emulators. Mobile conversion rate optimization is baked into our process, not an add-on.",
            },

            /* ─ Timeline & Process ─ */
            {
              category: 'process',
              question: 'How can you really build a store in 7 days?',
              answer:
                "Because we've done it 500+ times. We have a production system, discovery templates, design component libraries, tested integration setups, and a QA checklist, that lets us build fast without being sloppy. The 7-day clock starts at your kickoff call, and it accounts for your review time and revision rounds. The only thing that extends the timeline is if you need time to gather content (product photos, copy) or if the scope grows significantly. We tell you that upfront.",
            },
            {
              category: 'process',
              question: 'What do I need to provide before we start?',
              answer:
                "Product photos (or we'll advise on stock photography), product descriptions, your logo in vector format (SVG or AI), and your brand colors. If you have existing brand guidelines, great, if not, we'll work with what you have. You don't need to have everything perfect on day one; we'll guide you through it.",
            },
            {
              category: 'process',
              question: 'Can I still run my business during the build?',
              answer:
                "Yes. We build on a staging environment completely separate from any existing website you have. Your current site stays live and untouched until you're ready to launch the new one. On launch day, we handle the DNS switch, usually overnight so your customers don't see any downtime.",
            },
            {
              category: 'process',
              question: 'What happens after my store launches?',
              answer:
                "You get 30 days of post-launch support included, bug fixes, small adjustments, questions answered. After 30 days, you can manage the store independently (we'll provide training), hire us for ongoing work on a project basis, or enroll in a monthly maintenance plan. We're not going anywhere.",
            },

            /* ─ Austin-Specific ─ */
            {
              category: 'local',
              question: 'Do you know Austin\'s local market and customer behavior?',
              answer:
                "We've worked with dozens of Austin businesses across sectors, food & beverage, apparel, health, home goods, tech startups in the Domain and along 6th Street. We understand that Austin shoppers are brand-loyal, environmentally conscious, and willing to pay premium for quality. We build stores that reflect that, not generic templates that look like they could be from anywhere.",
            },
            {
              category: 'local',
              question: 'Can you integrate local Austin delivery or pickup options?',
              answer:
                "Yes. We configure local delivery radius rules, store pickup options with time-slot selection, and curbside pickup flows for Austin businesses with physical locations. We've set this up for South Congress boutiques, East Austin restaurants, and Domain-area retailers. Local pickup and delivery can be a real competitive advantage for Austin brands competing with national players.",
            },
            {
              category: 'local',
              question: 'I already have a website from a local Austin agency. Can FactoryJet add an online store to it?',
              answer:
                "Absolutely. We can either add an ecommerce section to your existing site, build a separate Shopify store that lives on a subdomain (like shop.yourbrand.com), or rebuild your entire site with ecommerce built in from the start. We'll assess your current setup on the discovery call and recommend the cleanest path forward.",
            },
            {
              category: 'local',
              question: 'How do you compare to Austin agencies like Geek Powered Studios, GLIDE®, or Bryt Designs?',
              answer:
                "They're established agencies that do good work, primarily for clients with enterprise-level budgets and months to spare. FactoryJet serves the Austin small business owner who needs a professional ecommerce store but doesn't have enterprise-level resources. Our quality is comparable; our price and timeline are not. If you're working with a lean budget and you need to be selling online within two weeks, FactoryJet is the honest choice.",
            },

            /* ─ Quality & Results ─ */
            {
              category: 'quality',
              question: 'What does "Lighthouse 95+" actually mean for my business?',
              answer:
                "Google's Lighthouse score measures Performance, Accessibility, Best Practices, and SEO on a 0–100 scale. A score of 100 on Performance means your store loads fast on real mobile connections, under 1.5 seconds. That directly improves your Google ranking, reduces your bounce rate, and increases the likelihood that a shopper who clicks your ad actually completes a purchase. Most Austin agency-built stores score 55–75. Ours start at 100 on day one.",
            },
            {
              category: 'quality',
              question: 'Will my store rank on Google for Austin ecommerce searches?',
              answer:
                "We build every store with technical SEO in place from launch: proper schema markup, clean URL structures, meta tags, sitemap, robots.txt, image optimization, and Core Web Vitals compliance. We also set up Google Search Console and Analytics so you can track your rankings. What we don't do is ongoing SEO content, that's a separate service. But your store's technical foundation will be solid from the first day it's live.",
            },
            {
              category: 'quality',
              question: 'Can you guarantee conversions or revenue?',
              answer:
                "No. Anyone who guarantees revenue is selling you something. What we guarantee: a beautiful, fast-loading, mobile-optimized store built to conversion best practices, clean product pages, frictionless checkout, trust signals in the right places, and a user experience that doesn't drive potential customers away. What happens after launch depends on your products, pricing, marketing, and offer. We give you the best possible foundation.",
            },
            {
              category: 'quality',
              question: 'What\'s your refund policy if I\'m not happy?',
              answer:
                "If your store isn't what we agreed on in the scope document, we fix it, no argument, no extra charge. We don't offer refunds after work has begun, because we invest real hours from day one. That's why our discovery call is thorough: we want you to know exactly what you're getting before you commit. In 500+ projects, we've never had a client who didn't get a store they were genuinely happy with.",
            },
            {
              category: 'quality',
              question: 'Do you provide training so I can manage my own store?',
              answer:
                "Yes. At launch, we do a 60-minute recorded walkthrough via Zoom covering: adding and editing products, managing orders, setting up discount codes, updating content, and reading your analytics dashboard. The recording is yours to keep. Most of our clients are fully self-sufficient within a week. And if you ever get stuck, our support team is a Slack message away.",
            },
            {
              category: 'quality',
              question: 'Can you help with Shopify apps and integrations after launch?',
              answer:
                "Yes. Common post-launch requests we handle: adding new payment methods, integrating with a new 3PL or shipping carrier, connecting a POS system for a new Austin retail location, setting up affiliate or referral programs, and migrating to a new email marketing tool. We bill these as fixed-price add-ons, not hourly, so you always know what you're getting into before you say yes.",
            },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AustinEcommerceDevelopmentPage() {
  return (
    <>
      <SchemaScript />
      <SiteHeader />
      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="us" source="us_austin_ecommerce_development_hero" />}
          eyebrow="ECOMMERCE DEVELOPMENT · AUSTIN TX"
          headline="Your Austin Business Deserves an Online Store That Actually Sells"
          lead="FactoryJet builds Shopify, WooCommerce, and custom ecommerce stores for Austin small businesses, delivered in 7 days, at fixed-price, milestone-paid. No discovery calls that go nowhere. No six-week timelines. Just a store that's open for business."
          trustItems={[
            'Fixed-price builds',
            '7-day delivery guarantee',
            '500+ stores launched',
            '4.9★ on Google',
          ]}
          rightSlot={<HeroBrowserMockup mockupUrl="yourbusiness.com" badgeCity="Austin, TX" badgeLabel="Live in 7 days" />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────── */}
        <LogoBar
          tagline="We build on the platforms your customers already trust"
        />

        {/* ── 3. TRUST STATS ───────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ stores. 7-day delivery. Pricing is fixed and published upfront."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="AUSTIN ECOMMERCE LANDSCAPE"
          headline="Austin Retail Is Moving Online, Fast. Is Your Store Ready?"
          leadParagraphs={[
            "Austin's retail scene has always punched above its weight. South Congress boutiques, East Austin makers, Domain anchors, the Barton Springs weekend crowd: Austin shoppers are loyal, high-income, and increasingly buying online first.",
            "But there's a gap forming between Austin businesses with a real ecommerce presence and those still relying on Instagram DMs and 'email us to order.' Foot traffic alone doesn't cut it anymore, not when your competitor just launched a Shopify store with next-day shipping and a loyalty program.",
            "The good news: you don't need an enterprise-level local agency budget to compete. FactoryJet builds production-grade ecommerce stores: Shopify, WooCommerce, custom headless, for Austin businesses at fixed-price tiers with US project management. Same quality, at a fraction of the cost.",
          ]}
          stats={[
            {
              value: '2.3M+',
              label: 'Austin metro consumers, median HHI 30% above US average',
              sourceUrl: 'https://www.census.gov/quickfacts/austincountytexas',
            },
            {
              value: '67%',
              label: 'Austin shoppers research online before buying in-store',
              sourceUrl: 'https://www.thinkwithgoogle.com/consumer-insights/',
            },
            {
              value: '34%',
              label: 'Average YoY online revenue growth for Austin DTC brands, 2023–2025',
              sourceUrl: 'https://www.austinchamber.com/economic-development',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="ECOMMERCE DEVELOPMENT · AUSTIN"
          headline="What 'Ecommerce Development' Actually Means for an Austin Business"
          lead="Most Austin agencies sell you a theme and hand you a bill. FactoryJet builds a revenue-generating store: custom design, Texas sales tax configured correctly (8.25% Travis County), Lighthouse 95+ performance, JSON-LD schema for AI search visibility, and full email automation: all in 7 days."
          body={
            <>
              <p>
                For Austin&apos;s DTC brands, from South Congress boutiques to East Austin food
                makers and Domain-area retailers: an ecommerce store is the revenue channel. SXSW
                brings 300,000+ visitors annually who discover Austin brands for the first time.
                FactoryJet builds stores with gifting flows, subscription boxes, local pickup, and
                nationwide shipping that turn that discovery moment into a recurring customer.
              </p>
              <p>
                For Austin&apos;s tech and B2B brands, suppliers to Dell, Apple, and Oracle campuses
                or Silicon Hills SaaS companies with an accessory line: the store needs to communicate
                product depth and technical credibility fast. We build with B2B pricing tiers,
                subscription billing, and AI-powered product recommendations built in from day one.
              </p>
              <p>
                Every FactoryJet ecommerce project covers platform selection, custom design, full
                development, product catalog setup, Texas tax configuration, Core Web Vitals
                optimization, and GEO/AEO content structured for ChatGPT and Google AI Overviews.
                You leave with a store you own outright, no platform lock-in, no retainer required,
                and a 30-day support window after launch.
              </p>
            </>
          }
          rightSlot={
            <img
              src="/images/us/austin/ecommerce/service-explanation.webp"
              alt=""
              aria-hidden="true"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
              className="w-full rounded-2xl object-cover"
            />
          }
        />

        {/* ── 6. STRATEGIC DARK, FACTORYJET DIFFERENCE ───────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="What an Austin Agency Charges vs. FactoryJet"
          lead={
            "Agencies like Geek Powered Studios, GLIDE®, and Bryt Designs do solid work. We're not disputing that. But they're built for clients with enterprise-level budgets and 3-month timelines. If you're an Austin small business who needs a professional online store without mortgaging a quarter of your annual revenue to get it, FactoryJet is the answer.\n\nWe run a senior-only engineering team with US-hour project management: fixed-price, milestone-paid, with full code ownership at handoff. You get enterprise-level execution at small-business prices and predictable cost from quote to launch. Over 500 businesses across the US, UK, UAE and India have made that trade. Most of them wish they'd found us a year earlier."
          }
          pillars={[
            {
              title: '7-day delivery',
              body: 'Standard Shopify stores are live in 7 days from kickoff. Compare that to Geek Powered Studios (6–12 weeks) or GLIDE® (4–8 weeks). If we miss the deadline, you don\'t pay. We\'ve hit it on 97% of 500+ projects.',
            },
            {
              title: 'fixed-price',
              body: 'Austin ecommerce agencies typically charge enterprise-level rates for a Shopify store. FactoryJet delivers the same quality at a fraction of the cost. Fixed-price builds, US project management, full quality guarantee.',
            },
            {
              title: 'Lighthouse 95+',
              body: 'Every store we build scores 100/100 on Google Lighthouse: Performance, Accessibility, Best Practices, and SEO. Most Austin agency-built stores score 55–75. Ours start at 100 on day one.',
            },
          ]}
        />

        {/* ── 7. PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="HOW IT WORKS"
          headline="From Kickoff to Live Store in 7 Days"
          stages={[
            {
              number: '01',
              title: 'Discovery Call (Day 1)',
              description:
                '45 minutes. We learn your catalog, your brand, your Austin customer, and your goals. You leave with a clear scope and a fixed price, no estimates that balloon later.',
            },
            {
              number: '02',
              title: 'Design & Build (Days 2–5)',
              description:
                'Our team configures your platform, builds your product pages, integrates payments and shipping, and sets up your email flows. You get daily updates via Slack so there are no surprises.',
            },
            {
              number: '03',
              title: 'Review & Revise (Day 6)',
              description:
                'You get a staging link. We go through every page together, you mark everything that needs adjustment, and we fix it. No limit on rounds, we keep going until it\'s right.',
            },
            {
              number: '04',
              title: 'Launch (Day 7)',
              description:
                'Your store goes live. DNS is propagated, payment processing is tested end-to-end, Google Analytics and Search Console are connected, and your first order can land within hours.',
            },
          ]}
        />

        {/* ── 8. PORTFOLIO ─────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="Stores we've launched for US brands."
          cards={[
            {
              industry: 'Apparel & DTC',
              title: 'Austin Apparel DTC Brand',
              description:
                'Full Shopify build with size-guide overlays, fit quiz, loyalty program, and Klaviyo post-purchase sequences. Custom theme, not a template. Launched 6 days after kickoff.',
              imageSrc: '/images/us/austin/ecommerce/portfolio-1.webp',
              stat1: '3.2× conversion improvement',
              stat2: '6-day launch',
            },
            {
              industry: 'Specialty Food & Beverage',
              title: 'Austin Food Brand | Subscription & Wholesale',
              description:
                'WooCommerce with subscription boxes, local Austin pickup zones, and a corporate gifting portal. Complex shipping rules, cold chain, perishable zones, TABC compliance, handled without a single plugin conflict.',
              imageSrc: '/images/us/austin/ecommerce/portfolio-2.webp',
              stat1: '$48K MRR in 90 days',
              stat2: '7-day launch',
            },
            {
              industry: 'Health & Wellness',
              title: 'Health Brand | Shopify Plus Migration',
              description:
                'Shopify Plus migration from Magento 1. Headless frontend with Next.js, custom subscription logic, and B2B wholesale pricing. Zero downtime during migration. Lighthouse 98/100 at launch.',
              imageSrc: '/images/us/austin/ecommerce/portfolio-3.webp',
              stat1: '98/100 Lighthouse',
              stat2: '1.2s load time',
            },
          ]}
          ctaHref="/portfolio"
          ctaLabel="View full portfolio"
        />

        {/* ── 9. COMPARISON TABLE ──────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="COMPARE YOUR OPTIONS"
          headline="Austin Ecommerce Development: Your Real Options"
          lead={
            "Austin has no shortage of ecommerce agencies. Geek Powered Studios, GLIDE®, and Bryt Designs all do solid work, for clients with enterprise-level budgets and 2–4 months to spare. FactoryJet serves the Austin small business owner who needs a professional online store but doesn't have enterprise-level resources. Same quality, different economics."
          }
          columns={[
            { label: 'Their pricing' },
            { label: 'FactoryJet', isFactoryJet: true },
            { label: 'Why we cost less' },
          ]}
          rows={[
            {
              feature: 'Geek Powered Studios (Austin)',
              values: [
                'Standard Shopify build over a 6–12 week timeline.',
                'Fixed-price · 7-day delivery',
                'Senior devs, US project management. Same output quality at a fraction of the cost. No discovery fees, no hourly billing surprises.',
              ],
            },
            {
              feature: 'GLIDE® (Austin)',
              values: [
                'Project-based, undisclosed. Primarily WordPress/WooCommerce. 4–8 weeks typical.',
                'Fixed-price · 7-day delivery',
                'FactoryJet specializes in Shopify and custom headless ecommerce. Fixed pricing, guaranteed 7-day timeline, Lighthouse 95+ on every project.',
              ],
            },
            {
              feature: 'Bryt Designs (Austin)',
              values: [
                'Scope-dependent pricing. Typically 6–10 weeks.',
                'Fixed-price · 7-day delivery',
                'FactoryJet delivers equivalent or better output in a fraction of the time. AI-powered features (AEO content, product recommendations) included at no extra charge.',
              ],
            },
          ]}
        />

        {/* ── 10. PRICING ──────────────────────────────────────────────── */}
        <PricingTiers
          eyebrow="TRANSPARENT PRICING"
          headline="Simple Pricing. No Surprises. No Hidden Fees."
          lead={
            "Pricing is fixed-price and scoped to your build: the main drivers are catalog size, integrations, and design complexity. Every project is quoted up front after a free discovery call, so you know the full cost before work starts. Every plan includes: project management, revisions within agreed build scope, 30 days post-launch support, Lighthouse 95+ guarantee, and same-week kickoff. No contracts. No retainers."
          }
          tiers={[
            {
              priceRange: 'Fixed-price',
              name: 'Starter Store',
              description:
                'A production-ready Shopify or WooCommerce store live in 5 days. For solo founders, product launches, and Austin businesses entering ecommerce for the first time.',
              features: [
                'Shopify or WooCommerce setup',
                'Up to 50 products configured',
                'Custom homepage, collection & product pages',
                'Payment gateway + Texas tax setup (8.25%)',
                'Mobile-first, Lighthouse 95+',
                'Basic email automation (welcome + cart)',
                'Google Analytics 4 + Search Console',
                '30 days post-launch support',
              ],
              cta: { label: 'Get a quote', modal: true, region: 'us' },
            },
            {
              priceRange: 'Fixed-price',
              name: 'Growth Store',
              description:
                'A conversion-optimized store with subscriptions, loyalty, and Klaviyo flows. For established Austin brands ready to scale online revenue.',
              features: [
                'Everything in Starter, plus:',
                'Up to 250 products configured',
                'Custom filters, search & navigation',
                'Loyalty program or subscription setup',
                'Klaviyo email flows (5 automated sequences)',
                'Upsell & cross-sell integrations',
                'Local Austin pickup / delivery options',
                'Blog setup + CRO pass',
              ],
              cta: { label: 'Get a quote', modal: true, region: 'us' },
              popular: true,
            },
            {
              priceRange: 'Fixed-price',
              name: 'Enterprise / Custom',
              description:
                'Custom Shopify Plus or headless (Next.js) build for high-volume Austin brands, B2B wholesale operations, and complex integration requirements.',
              features: [
                'Everything in Growth, plus:',
                'Large catalog, products scoped per project',
                'B2B wholesale pricing portal',
                'ERP, POS, or 3PL integrations',
                'Headless Next.js frontend (Lighthouse 95+)',
                'Multi-warehouse inventory setup',
                'Custom Shopify apps or plugins',
                'Dedicated PM throughout',
              ],
              cta: { label: 'Get a quote', modal: true, region: 'us' },
            },
          ] as const}
        />

        {/* ── 11. INDUSTRIES ───────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="AUSTIN × ECOMMERCE"
          headline="We've Launched Stores in Every Vertical That Matters to Austin"
          lead="From South Congress DTC brands to Silicon Hills tech companies, Austin's economy spans industries with very different ecommerce needs. FactoryJet has built stores for each of them."
          sectors={[
            {
              name: 'Apparel & DTC',
              description:
                "Lookbooks, size guides, fit quizzes, and Klaviyo sequences that turn browsers into repeat buyers. Austin's DTC fashion brands are our most common engagement. We've done 140+ apparel stores.",
              example:
                "South Congress boutiques, East Austin independent brands, and DTC apparel founders targeting Austin's high-income consumer base.",
            },
            {
              name: 'Food & Beverage',
              description:
                'Perishable shipping rules, subscription boxes, local pickup zones, corporate gifting portals, and TABC-compliant alcohol flows: every edge case Austin food brands throw at us, handled.',
              example:
                'Craft breweries, BBQ brands, specialty hot sauce companies, subscription meal kits, and restaurant merch stores.',
            },
            {
              name: 'Health & Wellness',
              description:
                "Supplement stores, fitness equipment, yoga studios selling online, compliance-aware product pages, subscription models, and trust-building UX. Austin's health-forward consumer expects all of it.",
              example:
                "Supplement brands, fitness equipment retailers, and wellness DTC companies serving Austin's active, health-conscious population.",
            },
            {
              name: 'Home & Living',
              description:
                "Furniture, décor, candles, custom prints, large-SKU catalogs with rich filtering, room visualizers, and freight shipping integrations. Austin's real estate boom drives sustained home goods demand.",
              example:
                'Artisan furniture makers, home décor brands, candle companies, and interior design product studios in the Austin metro.',
            },
            {
              name: 'Pets & Animals',
              description:
                "Austin loves its dogs. We've built stores for pet food subscriptions, custom collar brands, grooming service booking, and veterinary supply companies with complex vet-only portals.",
              example:
                "Independent pet food brands, custom pet accessories, and Austin's growing veterinary supply market.",
            },
            {
              name: 'Musical Instruments & Merch',
              description:
                'Austin is a music city. Instrument rentals, sheet music downloads, lesson packages, merch drops, fan subscriptions, and high-ticket gear with financing integration, we know this vertical.',
              example:
                'SXSW artist merchandise stores, Austin record labels, independent musicians, and instrument retailers.',
            },
            {
              name: 'Automotive & Outdoor',
              description:
                "From trailer hitches to camping gear to custom overlanding rigs. Complex variant matrices, fitment guides, and freight shipping handled properly. Austin's outdoor lifestyle drives sustained demand.",
              example:
                "Outdoor gear retailers, overlanding brands, cycling shops, and automotive accessory companies serving Austin's active community.",
            },
            {
              name: 'Tech & Gadgets',
              description:
                'Pre-order flows, crowdfunding integrations, bundle builders, warranty registration, B2B portals for SaaS accessory lines, built for Silicon Hills hardware and consumer tech brands.',
              example:
                "Consumer electronics brands, hardware startups, and SaaS companies with physical product lines in the Austin tech ecosystem.",
            },
          ]}
        />

        {/* ── 12. TESTIMONIALS ─────────────────────────────────────────── */}
        <TestimonialsSection
          region="us"
          eyebrow="WHAT CLIENTS SAY"
          headline="Rated 4.9/5 on Google across 500+ projects."
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="COMMON QUESTIONS"
          headline="Everything Austin Business Owners Ask Before Getting Started"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />


        {/* Cross-link: Related Services in Austin */}
        <section className="py-10 bg-[#FAFAF7]">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-sm font-mono text-[#B23E13] uppercase tracking-widest mb-4">
              Also in Austin
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/austin/web-design/"
                className="px-5 py-2 rounded-full border border-[#B23E13] text-[#B23E13] text-sm font-medium hover:bg-[#B23E13] hover:text-white transition-colors"
              >
                Web Design →
              </Link>
            </div>
          </div>
        </section>

        {/* ── 14. FINAL CTA ─────────────────────────────────────────────── */}
        <EcommerceCityLinksUS currentCity="austin" />
        <FinalCTA
          variant="light"
          eyebrow="READY TO GET STARTED"
          headline="Your Austin Ecommerce Store, Live in 7 Days"
          sub="No discovery fees. No six-week timelines. No inflated proposals for a store your competitor got built for a fraction of the cost. Just a free audit of your current situation, and an honest recommendation on what it would take to launch your online store this week."
          primaryCta={{ label: 'Get My Free Ecommerce Audit', modal: true, region: 'us' }}
          secondaryCta={{ label: 'View Pricing', href: '#pricing' }}
        />
      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  )
}

// ─── Schema (server-rendered — visible to AI crawlers) ────────────────────────

function SchemaScript() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: getEcommerceCitySchema('austin', FAQ_ITEMS) }}
    />
  )
}
