// V2 ecommerce city page — Austin, TX
// Design system: py-10 md:py-14 standard | 30/65/5 dark/light rhythm | Clash Display headlines
// Schema: server-side via SchemaScript (AI-crawler visible in initial HTML)
// Copy source: src/lib/legacy-pages/CityLandingUS/CityLandingPage.jsx → CITIES.austin

import type { Metadata } from 'next'
import { ecommerceCityAlternatesUS } from '@/data/hreflangMap'
import { getEcommerceCitySchema } from '@/data/ecommerceCitySchemas'
import Hero from '@/components/v2/Hero'
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
import HeroBrowserMockup from '@/components/v2/HeroBrowserMockup'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'

export const metadata: Metadata = {
  title: 'Shopify Developer Austin TX | E-Commerce from $2,999 | FactoryJet',
  description: 'Top-rated Shopify developer in Austin, Texas: stores live in 7 days from $2,999. Silicon Hills e-commerce specialists — Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Developer Austin TX | E-Commerce from $2,999 | FactoryJet',
    description: 'Top-rated Shopify developer in Austin, Texas: stores live in 7 days from $2,999. Silicon Hills e-commerce specialists — Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
    url: 'https://factoryjet.com/us/services/ecommerce-development/austin',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Shopify Developer Austin',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Developer Austin TX | E-Commerce from $2,999 | FactoryJet',
    description: 'Top-rated Shopify developer in Austin, Texas: stores live in 7 days from $2,999. Silicon Hills e-commerce specialists — Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ecommerce-development/austin',
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

export default function Page() {
  return (
    <>
      <SchemaScript />
      <SiteHeader />
      <main className="bg-fj-cream">

        {/* ── 1. HERO (dark) ─────────────────────────────────────────── */}
        <Hero
          eyebrow="E-COMMERCE DEVELOPMENT · AUSTIN"
          headline="Shopify Developer Austin — E-Commerce Stores for Texas Businesses"
          lead="Austin's Silicon Hills runs on ambition. FactoryJet builds the Shopify stores to match — live in 7 days from $2,999, at 50–60% below local agency rates. Shopify, WooCommerce & AI-powered stores for DTC founders, tech brands, food & beverage, and SXSW-era innovators. 500+ projects, 4.9★."
          primaryCta={{ label: 'Get a Free Shopify Audit', modal: true, region: 'us' }}
          trustItems={['Shopify stores from $2,999', '7-day delivery guarantee', '500+ stores launched']}
          rightSlot={<HeroBrowserMockup />}
        />

        {/* ── 2. LOGO BAR (light) ────────────────────────────────────── */}
        <LogoBar
          tagline="Trusted by 500+ e-commerce brands across the US, UK, and UAE"
        />

        {/* ── 3. TRUST STATS (tinted band) ──────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="Results that Austin e-commerce brands trust."
        />

        {/* ── 4. CITY CONTEXT (light / cream) ───────────────────────── */}
        <CityContextSection
          eyebrow="AUSTIN MARKET"
          headline="Silicon Hills Has the Brands — Now Build the Store That Converts"
          leadParagraphs={[
            "Austin has become one of the fastest-growing tech ecosystems in North America. Dell Technologies, Apple's 133-acre campus, Tesla's Gigafactory, Oracle's relocated HQ, and over 7,600 tech companies have made Austin the fifth-largest tech hub in the US. That concentration of talent, capital, and consumer spending creates a DTC opportunity unmatched in the South. FactoryJet builds Shopify stores that capture it — mobile-first, Lighthouse 95+, with AI product discovery and AEO content that gets cited by ChatGPT and Google AI Overviews.",
          ]}
          stats={[
            {
              value: '978K+',
              label: 'Austin City Population (2024)',
              sourceUrl: 'https://www.census.gov/quickfacts/fact/table/austincitytexas/POP010220',
            },
            {
              value: '0%',
              label: 'Texas State Income Tax — Max Margin for DTC Brands',
              sourceUrl: 'https://comptroller.texas.gov/taxes/quick_check.php',
            },
            {
              value: '7,600+',
              label: 'Tech Companies in Austin — the Largest Southern Tech Hub',
              sourceUrl: 'https://www.austinchamber.com/economic-development/austin-profile/key-industries/technology',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION (white) ────────────────────────── */}
        <ServiceExplanation
          eyebrow="E-COMMERCE DEVELOPMENT · Austin"
          headline="What 'E-Commerce Development' Actually Means for an Austin Business"
          lead="Most Austin agencies sell you a theme and hand you a bill. FactoryJet builds a revenue-generating Shopify store: custom design, Texas sales tax configured correctly (8.25% for Travis County), AI-powered product discovery, JSON-LD schema for AI search visibility, and a Lighthouse 95+ performance score — all in 7 days from $2,999."
          body={
            <>
              <p>
                For Austin&apos;s tech and software brands — from early-stage Silicon Hills startups to
                suppliers serving Dell, Samsung, and Apple — an e-commerce store needs to communicate
                product depth and technical credibility fast. Buyers here do their research before they
                talk to sales. We structure your Shopify store to answer those questions before the
                prospect picks up the phone, with B2B pricing tiers, subscription flows, and
                AI-powered product recommendations built in from day one.
              </p>
              <p>
                For Austin&apos;s food and beverage scene — YETI, Austin Eastciders, Waterloo Brewing,
                Salt Lick BBQ, and hundreds of DTC food brands — the store is the revenue channel.
                SXSW brings 300,000+ attendees annually, many of them discovering Austin brands for
                the first time. FactoryJet builds Shopify stores with gifting flows, subscription
                boxes, local pickup, and nationwide shipping configurations that turn that discovery
                moment into a recurring customer.
              </p>
              <p>
                Every FactoryJet e-commerce project covers discovery, platform selection, custom
                Shopify development, product catalog setup, Texas tax configuration, Core Web Vitals
                optimization, and AEO content for ChatGPT and Perplexity. You leave with a store you
                own outright — no platform lock-in, no retainer required, and a 30-day support window
                after launch.
              </p>
            </>
          }
          rightSlot={
            <img
              src="/images/us/austin/ecommerce/service-explanation.webp"
              alt=""
              aria-hidden="true"
              className="w-full rounded-2xl object-cover"
            />
          }
        />

        {/* ── 6. STRATEGIC DARK SECTION (dark) ──────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Austin Businesses Choose FactoryJet Over Local Agencies"
          lead={
            "Orange Label Art + Advertising and Genuine Interactive handle brand work and web design in Austin, but neither specializes in Shopify development or AI-powered e-commerce. STAC Creative focuses on branding. PopRock Digital builds on WordPress. No Austin agency combines Shopify specialization with AI development, 7-day delivery, and transparent fixed pricing.\n\nFactoryJet launches full Shopify stores in 7 days from $2,999 — 50–60% below the Austin agency benchmark. Unlike Thrive Internet Marketing (Fort Worth, $150–$300/hr, no fixed pricing) or WebFX ($10,000–$49,900 for mid-market builds), we deliver with real Austin market knowledge: Silicon Hills' tech ecosystem, Texas tax structure, and the SXSW consumer psychology that drives independent brand loyalty."
          }
          pillars={[
            {
              title: 'AI-native',
              body: "Every store ships with AI-powered product recommendations, AEO content optimized for ChatGPT and Perplexity, and JSON-LD schema that gets cited in Google AI Overviews. Austin's tech consumers expect AI-powered shopping experiences — we build them as standard.",
            },
            {
              title: 'Transparent',
              body: 'Fixed pricing on the first call. Shopify from $2,999, WooCommerce from $3,499, headless from $5,999. No discovery fees, no \'it depends\' quotes, no Phase 2 invoices after launch.',
            },
            {
              title: 'Guaranteed',
              body: "7-day delivery on standard Shopify builds. If we miss the deadline, you don't pay. We've delivered on time on 97% of 500+ projects — including for Austin brands preparing for SXSW drops and product launches.",
            },
          ]}
        />

        {/* ── 7. PROCESS (light / cream) ────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Build Your Austin Shopify Store"
          stages={[
            {
              number: '01',
              title: 'Discovery & Platform Selection',
              description:
                'We map your product catalog, target customer, and revenue goals. We recommend Shopify, WooCommerce, or headless based on your SKU count, subscription needs, and B2B requirements — not what is easiest for us to build. Austin businesses get a tailored recommendation in 24 hours.',
            },
            {
              number: '02',
              title: 'UX Design & Store Architecture',
              description:
                'We design your store structure — homepage, collection pages, product pages, cart, checkout, and post-purchase flows — with conversion rate optimization built into every layout decision. Mobile-first, thumb-zone aware, and tested against Austin\'s tech-savvy consumer standard.',
            },
            {
              number: '03',
              title: 'Development & Configuration',
              description:
                'Custom Shopify theme or headless build, Texas sales tax setup (8.25% Travis County), payment gateway integration (Shopify Payments, PayPal, Afterpay), app integrations, and GSAP micro-animations. Performance budgets are enforced from the first commit — Lighthouse 90+ is non-negotiable.',
            },
            {
              number: '04',
              title: 'Products, Content & SEO',
              description:
                'Product catalog upload, optimized descriptions, alt tags, meta fields, JSON-LD schema (FAQPage, Product, BreadcrumbList), and AEO content structured to get cited by ChatGPT, Perplexity, and Google AI Overviews. We submit to Google Search Console and verify AI crawler rendering.',
            },
            {
              number: '05',
              title: 'Launch & Growth Enablement',
              description:
                'Cloudflare/Vercel deploy, GA4 e-commerce tracking, GTM events, and a recorded launch walkthrough. Your 30-day support window covers post-launch fixes, additional product uploads, and training so your Austin team can self-manage from day one. No retainer required.',
            },
          ]}
        />

        {/* ── 8. PORTFOLIO (white) ──────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="What Austin e-commerce brands look like after FactoryJet."
          cards={[
            {
              industry: 'Tech & Software Brands',
              title: 'Austin Tech & SaaS E-Commerce Client',
              description:
                "Silicon Hills is home to Dell, Apple, Google, Oracle, and 7,600+ tech companies. Tech brands here need Shopify stores that communicate product depth and technical credibility to buyers who research before they buy. We build stores with B2B pricing tiers, subscription billing, and API integrations that match the sophistication of Austin's tech ecosystem.",
              imageSrc: '/images/us/austin/ecommerce/portfolio-1.webp',
              stat1: '+40% conversion rate',
              stat2: '< 1.2s load time',
            },
            {
              industry: 'Food & Beverage',
              title: 'Austin Food & Beverage DTC Client',
              description:
                "SXSW brings 300,000 attendees. Austin's food scene — YETI, Austin Eastciders, Salt Lick BBQ — runs on DTC and wholesale simultaneously. We build Shopify stores with gifting flows, subscription boxes, local pickup, age verification, and TABC-compliant shipping configurations. Texas's 'Keep Austin Weird' ethos drives independent brand loyalty at rates 40% above the national average.",
              imageSrc: '/images/us/austin/ecommerce/portfolio-2.webp',
              stat1: '+52% AOV increase',
              stat2: '7-day launch',
            },
            {
              industry: 'Outdoor & Lifestyle',
              title: 'Austin Outdoor & Lifestyle Brand Client',
              description:
                "Austin's outdoor lifestyle — Barton Springs, Lady Bird Lake, Greenbelt climbing, and 300+ days of sunshine — drives DTC demand for gear, apparel, and experience products. We build Shopify stores for outdoor apparel brands, gear retailers, wellness products, and adventure experiences with rental calendars, waiver integrations, and subscription models.",
              imageSrc: '/images/us/austin/ecommerce/portfolio-3.webp',
              stat1: '+38% repeat orders',
              stat2: 'Lighthouse 96',
            },
          ]}
          ctaHref="/us/portfolio"
          ctaLabel="View full portfolio"
        />

        {/* ── 9. COMPARISON TABLE (cream) ───────────────────────────── */}
        <ComparisonTable
          eyebrow="WHY FACTORYJET"
          headline="FactoryJet vs Austin E-Commerce Agencies"
          lead={
            "Austin has no shortage of web agencies. Orange Label Art + Advertising and Genuine Interactive handle brand and web work at $8,000–$25,000 starting prices. Thrive Internet Marketing ranks nationally for Austin searches but operates from Fort Worth at $150–$300/hr with no fixed pricing and 4–8 week timelines.\n\nFactoryJet delivers a full Shopify store in 7 days from $2,999 — with AI-powered features those agencies don't offer at any price point in the SMB range. No lock-in. No retainer. No surprise invoices."
          }
          columns={[
            { label: 'Their pricing' },
            { label: 'FactoryJet', isFactoryJet: true },
            { label: 'Why we cost less' },
          ]}
          rows={[
            {
              feature: 'Orange Label Art + Advertising',
              values: [
                '$8,000–$25,000 (branding + web focus, not Shopify specialists)',
                'From $2,999 (Shopify Standard)',
                'FactoryJet specializes exclusively in e-commerce and delivers in 7 days. Orange Label focuses on brand strategy and general web design — no published Shopify pricing or AI capabilities.',
              ],
            },
            {
              feature: 'Thrive Internet Marketing',
              values: [
                '$150–$300/hr, no fixed pricing, 4–8 week timelines (Fort Worth-based)',
                'From $2,999 fixed price, 7-day delivery',
                'Thrive is a digital marketing agency with web development as a side service. FactoryJet builds exclusively on Shopify and Next.js with AI features, fixed pricing, and 7-day delivery — Thrive offers none of these.',
              ],
            },
          ]}
        />

        {/* ── 10. PRICING (white) ───────────────────────────────────── */}
        <PricingTiers
          eyebrow="TRANSPARENT PRICING"
          headline="Transparent Pricing for Austin E-Commerce Businesses"
          lead={
            "Austin agency rates for a comparable Shopify build typically run $8,000–$25,000 — and national agencies like WebFX quote $10,000–$49,900 for mid-market scope. FactoryJet delivers a full custom Shopify store from $2,999 — that's 50–60% below the Austin benchmark — with a faster timeline and a codebase you own outright. Stores ship in 7 days. No retainer required."
          }
          tiers={[
            {
              name: 'Shopify Standard',
              priceRange: '$2,999–$4,999',
              description:
                'A fully custom Shopify store live in 7 days. Best for Austin DTC founders, food & beverage brands, and lifestyle businesses launching their first online store or replacing a template.',
              features: [
                'Custom Shopify theme (not a template)',
                'Up to 100 products uploaded & configured',
                'Texas sales tax setup (8.25% Travis County)',
                'Shopify Payments + PayPal + Afterpay',
                'Mobile-first, Lighthouse 90+ performance',
                'JSON-LD schema + AEO SEO setup',
                '30-day post-launch support',
              ],
              cta: { label: 'Get a quote', modal: true, region: 'us' },
            },
            {
              name: 'Shopify Growth',
              priceRange: '$4,999–$8,999',
              description:
                'Advanced Shopify build with subscriptions, B2B tiered pricing, or multi-currency. Best for Austin tech brands, food subscription businesses, and established DTC brands scaling online revenue.',
              features: [
                'Everything in Shopify Standard',
                'Subscription billing (Recharge / Skio)',
                'B2B dealer pricing & wholesale portal',
                'Multi-currency + international shipping',
                'GSAP micro-animations & editorial design',
                'AI product recommendations integration',
                'Priority support + training session',
              ],
              cta: { label: 'Get a quote', modal: true, region: 'us' },
              popular: true,
            },
            {
              name: 'Custom / Headless',
              priceRange: '$8,999–$15,999',
              description:
                'Next.js headless storefront with Shopify or Medusa backend. For Austin brands that need sub-500ms load times, custom API integrations, or a B2B portal that outperforms every competitor.',
              features: [
                'Next.js headless frontend (Lighthouse 95+)',
                'Shopify or Medusa e-commerce backend',
                'Custom API & ERP integrations',
                'B2B portal: PO payments, dealer tiers',
                'AI chatbot trained on your catalog',
                'AEO content for ChatGPT & Perplexity',
                'Quarterly performance reviews',
              ],
              cta: { label: 'Get a quote', modal: true, region: 'us' },
            },
          ] as const}
        />

        {/* ── 11. INDUSTRIES (cream) ────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="AUSTIN × E-COMMERCE"
          headline="E-Commerce Development for Austin's Key Industries"
          lead="From Silicon Hills SaaS companies to SXSW food brands, Austin's economy spans industries with very different e-commerce needs. FactoryJet has built stores for each of them."
          sectors={[
            {
              name: 'Tech & Software Brands',
              description:
                "DTC and B2B stores for Austin's SaaS, hardware, and software companies — subscription billing, upgrade flows, software license portals, and developer tool swag shops. Silicon Hills brands need stores that communicate technical credibility to buyers who research before they buy.",
              example:
                'SaaS companies, hardware startups, and software accessory brands serving Dell, Apple, and Oracle campuses in Austin.',
            },
            {
              name: 'Food & Beverage',
              description:
                "Online stores for Austin's famous food brands — BBQ, craft beer, hot sauce, specialty foods — with gifting flows, subscription boxes, local pickup, and nationwide cold-chain shipping. SXSW tourists discover Austin food brands digitally; a good Shopify store converts that discovery into recurring revenue.",
              example:
                'Craft breweries, hot sauce brands, BBQ gift set companies, and Austin Eastciders-style DTC beverage brands.',
            },
            {
              name: 'Outdoor & Lifestyle',
              description:
                "Gear shops, apparel stores, and experience booking for Austin's outdoor and wellness community. Barton Springs, Lady Bird Lake, and Greenbelt climbing drive demand for outdoor gear, athleisure, and wellness products — all well-suited to subscription and bundle models.",
              example:
                "Outdoor apparel brands, gear rental platforms, and wellness product companies serving Austin's active lifestyle consumer.",
            },
            {
              name: 'Music & Events',
              description:
                "Merchandise stores, vinyl shops, limited-edition drops, and fan club subscriptions for Austin's world-class music scene. SXSW, ACL Fest, and the 6th Street live music economy generate artist-to-fan DTC revenue that most brands leave on the table by not having a proper Shopify store.",
              example:
                'SXSW artists, Austin record labels, independent musicians, and event merchandise brands.',
            },
            {
              name: 'Health & Wellness',
              description:
                "Supplement, wellness product, and fitness brand stores with subscription models and auto-ship flows. Austin's health-conscious tech workforce spends premium on wellness — stores need fast load times, trust-building UX, and subscription billing built into the foundation.",
              example:
                "Supplement brands, fitness equipment companies, and wellness product DTC stores serving Austin's health-forward consumer base.",
            },
            {
              name: 'Home & Interior Design',
              description:
                "Shopify stores for Austin's booming home furnishings, interior design, and renovation market. Austin's rapid population growth and strong relocation economy create sustained demand for premium home goods — from solo makers to established interior brands shipping nationwide.",
              example:
                'Home furnishings brands, interior design product lines, and artisan goods makers in the Austin metro.',
            },
          ]}
        />

        {/* ── 12. TESTIMONIALS (white) ──────────────────────────────── */}
        <TestimonialsSection
          eyebrow="WHAT CLIENTS SAY"
          headline="4.9/5 across 150+ reviews from Austin and beyond."
        />

        {/* ── 13. FAQ (cream) ───────────────────────────────────────── */}
        <FAQ
          eyebrow="COMMON QUESTIONS"
          headline="Common Questions from Austin E-Commerce Businesses"
          items={[
            {
              question: 'Who is the best Shopify developer in Austin, TX?',
              answer:
                "FactoryJet is Austin's top-rated Shopify development agency — 500+ projects delivered, 4.9★ rating, and the only shop in Silicon Hills combining Shopify e-commerce with AI agent development. Unlike local Austin agencies (Orange Label, Genuine Interactive, STAC Creative) that specialize in branding and WordPress, FactoryJet builds exclusively on Shopify and Next.js 15. Unlike national agencies (Thrive, WebFX) that quote $10K–$50K and multi-month timelines, we launch in 7 days from $2,999.",
            },
            {
              question: 'How much does Shopify development cost in Austin?',
              answer:
                'Shopify stores start at $2,999 at FactoryJet — compared to $8,000–$25,000 at established Austin agencies. WooCommerce stores start at $3,499, and custom headless e-commerce builds start at $5,999. Every project includes custom design, full development, Texas sales tax configuration (8.25% for Austin/Travis County), product catalog setup, mobile-first responsive design, and 30 days of post-launch support. No hidden fees, no Phase 2 upsells.',
            },
            {
              question: 'What Texas sales tax rate should my Austin Shopify store charge?',
              answer:
                'Austin businesses in Travis County should configure Shopify to collect 8.25% combined sales tax: Texas state rate of 6.25% plus the City of Austin local rate of 2.0%. Texas uses destination-based sales tax — you charge the rate at the buyer\'s shipping address, not your business location. FactoryJet configures your complete Texas tax settings during every Shopify build, including the correct rates for customers in Houston (8.25%), Dallas (8.25%), and San Antonio (8.25%). Texas also exempts certain agricultural products and resale items, which we configure for relevant stores.',
            },
            {
              question: 'How long does it take to build a Shopify store in Austin?',
              answer:
                'FactoryJet launches standard Shopify stores in 7 days. Compare that to Thrive Internet Marketing (4–8 weeks), Genuine Interactive (6–12 weeks), or national agencies like WebFX (8–16 weeks). Our 7-day timeline is possible because we design in code — no Figma-to-handoff delay — and use a component architecture optimized for rapid deployment. Complex builds with custom features (subscriptions, B2B portals, multi-currency) may take 2–3 weeks.',
            },
            {
              question: 'Does Austin have any e-commerce advantages over other US cities?',
              answer:
                "Yes — several. Texas has no state income tax, giving Austin-based DTC entrepreneurs higher take-home margins than founders in California or New York. Texas's 8.25% sales tax is competitive compared to California (up to 10.75%) and many Northeast states. Austin's population growth (fastest-growing US city 2010–2024) creates an expanding local customer base. And the concentration of tech-savvy consumers in Silicon Hills means higher average order values and lower customer acquisition costs for B2B and SaaS-adjacent e-commerce.",
            },
            {
              question: 'Do you build Shopify stores for Austin food and beverage brands?',
              answer:
                "Yes — Austin's food and beverage scene is one of our core Austin specialties. We build DTC stores for BBQ brands (nationwide shipping), craft breweries and distilleries (TX TABC compliance), hot sauce and specialty food companies, and subscription box businesses. Austin food brands have unique needs: age verification for alcohol, refrigerated shipping options, Texas Cottage Food exemptions, and gifting flows for corporate customers. FactoryJet builds all of these natively into Shopify.",
            },
            {
              question: 'Can you build a Shopify store for a SXSW or music-related Austin brand?',
              answer:
                "Absolutely. Austin's music and events economy generates $1.8B annually, and most artists and event brands undermonetize their digital presence. We build Shopify stores for artist merchandise, vinyl and physical media shops, event ticket integrations, limited-edition drops, fan membership subscriptions, and digital downloads. We integrate with Bandcamp, Spotify for Artists, and ticket platforms to create a unified commerce experience for Austin's creative economy.",
            },
            {
              question: 'How does FactoryJet compare to Thrive Internet Marketing for Austin Shopify development?',
              answer:
                "Thrive Internet Marketing is a Fort Worth-based agency that markets heavily in Austin but has no local presence. They charge $150–$300/hr with no fixed pricing, quote 4–8 week timelines, and primarily offer SEO and digital marketing with web development as a side service. FactoryJet specializes exclusively in Shopify development and AI-powered e-commerce, delivers in 7 days, prices transparently from $2,999, and has real Austin market knowledge — including Silicon Hills' tech ecosystem, Texas tax structure, and SXSW-era consumer behavior.",
            },
            {
              question: 'Does my Austin business need Shopify or WooCommerce?',
              answer:
                'For most Austin businesses, Shopify is the better choice: faster to launch (7 days), lower ongoing maintenance costs, better App Store for subscriptions and B2B, and superior mobile checkout conversion. WooCommerce makes sense if you already have a WordPress site with significant SEO equity and need tight CMS control. At FactoryJet, Shopify stores start at $2,999 and WooCommerce at $3,499. We\'ll recommend the right platform based on your catalog size, subscription needs, B2B requirements, and existing tech stack.',
            },
            {
              question: 'Can you migrate my Austin business from WooCommerce or Squarespace to Shopify?',
              answer:
                'Yes — we migrate Austin businesses from WooCommerce, BigCommerce, Magento, Squarespace, Wix, and custom platforms to Shopify. Migration includes: full product catalog transfer, customer data, order history, URL redirect mapping (preserving Google rankings), metafield migration, Texas tax reconfiguration, and SEO continuity setup. We implement 301 redirects for every old URL so your Austin local search rankings survive the migration. Timeline: 7–14 days depending on catalog size.',
            },
            {
              question: 'What AI services are available for Austin small businesses?',
              answer:
                "FactoryJet is the only Austin e-commerce agency that builds production AI agents alongside Shopify development. We build: AI chatbots trained on your catalog and FAQs, AI-powered lead qualification agents, customer service automation (order status, returns, product recommendations), and AI content pipelines that keep your store's blog and product descriptions optimized for ChatGPT, Perplexity, and Google AI Overviews. Austin's tech ecosystem makes AI adoption a competitive necessity — FactoryJet gets you there in weeks, not months.",
            },
            {
              question: 'What is included in a FactoryJet Shopify build for an Austin business?',
              answer:
                'Every Austin Shopify store includes: custom design (not a theme), full Shopify development and configuration, Texas sales tax setup (8.25% Travis County), payment gateway integration (Shopify Payments, PayPal, Afterpay), product catalog setup, mobile-first responsive design, Core Web Vitals optimization (Lighthouse 90+), Google Search Console setup, FAQPage + Service + BreadcrumbList JSON-LD schema, AI search visibility (AEO for ChatGPT, Perplexity, Google AI Overviews), 30 days of post-launch support, and a launch walkthrough. Starting at $2,999 — no hidden fees.',
            },
          ]}
        />

        {/* ── 14. FINAL CTA (dark) ──────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Build Your Austin Shopify Store?"
          sub="Austin's DTC market is growing faster than most brands can keep up with. Every week without a high-performing Shopify store is a week your competitors are capturing the searches — and the sales — you should own. Pick a tier, book a free 30-minute audit, and we'll have a store blueprint ready within 72 hours."
          primaryCta={{ label: 'Get a Free Shopify Audit', modal: true, region: 'us' }}
        />

      </main>
      <SiteFooter />
    </>
  );
}

function SchemaScript() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: getEcommerceCitySchema('austin') }}
    />
  );
}
