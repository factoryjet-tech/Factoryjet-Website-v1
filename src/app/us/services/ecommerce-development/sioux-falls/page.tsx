import type { Metadata } from 'next'
import { ecommerceCityAlternatesUS } from '@/data/hreflangMap'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import Hero from '@/components/v2/sections/Hero'
import LogoBar from '@/components/v2/sections/LogoBar'
import BigThreeTrustBlock from '@/components/v2/sections/BigThreeTrustBlock'
import CityContextSection from '@/components/v2/sections/CityContextSection'
import ServiceExplanation from '@/components/v2/sections/ServiceExplanation'
import StrategicDarkSection from '@/components/v2/sections/StrategicDarkSection'
import ServiceJourneyRow from '@/components/v2/sections/ServiceJourneyRow'
import PortfolioShowcase from '@/components/v2/sections/PortfolioShowcase'
import ComparisonTable from '@/components/v2/sections/ComparisonTable'
import PricingTiers from '@/components/v2/sections/PricingTiers'
import IndustriesGrid from '@/components/v2/sections/IndustriesGrid'
import TestimonialsSection from '@/components/v2/sections/TestimonialsSection'
import FAQ from '@/components/v2/sections/FAQ'
import FinalCTA from '@/components/v2/sections/FinalCTA'
import { getEcommerceCitySchema } from '@/data/ecommerceCitySchemas'

export const metadata: Metadata = {
  title: 'Shopify Developer Sioux Falls SD | E-Commerce from $2,999 | FactoryJet',
  description: 'Top-rated Shopify developer in Sioux Falls, South Dakota: stores live in 7 days from $2,999. Zero state income tax = higher margins. Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Developer Sioux Falls SD | E-Commerce from $2,999 | FactoryJet',
    description: 'Top-rated Shopify developer in Sioux Falls SD: stores live in 7 days from $2,999. Zero state income tax = higher e-commerce margins. Free audit.',
    url: 'https://factoryjet.com/us/services/ecommerce-development/sioux-falls',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Shopify Developer Sioux Falls SD',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Developer Sioux Falls SD | E-Commerce from $2,999 | FactoryJet',
    description: 'Top-rated Shopify developer in Sioux Falls SD: stores live in 7 days from $2,999. Zero state income tax. Free audit.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ecommerce-development/sioux-falls',
    languages: ecommerceCityAlternatesUS['sioux-falls'],
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

function SchemaScript() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: getEcommerceCitySchema('sioux-falls') }}
    />
  )
}

export default function Page() {
  return (
    <>
      <SchemaScript />
      <SiteHeader />
      <main className="bg-fj-cream">

        {/* HERO */}
        <Hero
          eyebrow="E-COMMERCE DEVELOPMENT · SIOUX FALLS, SD"
          headline="Shopify Developer Sioux Falls for South Dakota Businesses"
          subheadline="South Dakota has zero state income tax — the best business climate in the Midwest. Smart Sioux Falls businesses are pairing that advantage with a high-converting Shopify store that launches in 7 days at 60% less than local agencies charge."
          primaryCta={{ label: 'Get Your Free Store Audit', href: '/contact' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustBadges={['500+ Stores Launched', '7-Day Delivery', '4.9★ Rated', 'From $2,999']}
        />

        {/* LOGO BAR */}
        <LogoBar
          heading="Trusted by businesses across Sioux Falls, the Black Hills & all of South Dakota"
        />

        {/* BIG THREE TRUST BLOCK */}
        <BigThreeTrustBlock
          blocks={[
            {
              stat: '7 Days',
              label: 'Store Goes Live',
              description: 'From kickoff to a fully live Shopify store in one week — guaranteed. While other agencies schedule you for next quarter, you're already selling.',
            },
            {
              stat: '60% Less',
              label: 'Than Local Agencies',
              description: 'Sioux Falls agencies charge $6,000–$18,000 for a Shopify build. We deliver the same quality — often better — starting at $2,999.',
            },
            {
              stat: '500+',
              label: 'Stores Built',
              description: 'From South Dakota ag and manufacturing businesses to downtown Sioux Falls retail shops and DTC brands shipping nationwide.',
            },
          ]}
        />

        {/* CITY CONTEXT */}
        <CityContextSection
          eyebrow="WHY SIOUX FALLS E-COMMERCE IS DIFFERENT"
          heading="No state income tax + booming Midwest market = the best e-commerce foundation in the region"
          body="Sioux Falls has spent years quietly becoming one of the most business-friendly cities in the United States. South Dakota has no state income tax, no corporate income tax, and no personal income tax — which means every dollar your e-commerce business earns stays in your pocket rather than going to the state. The city itself has grown to over 200,000 people and is one of the fastest-growing metros in the upper Midwest. Financial services giants, ag-tech companies, and health systems have all established major operations here. For e-commerce businesses, this combination of tax advantages, a growing professional consumer base, and relatively low competition from established Shopify agencies creates a rare window of opportunity. Businesses that build a strong online store now will own search rankings and customer relationships for years."
          stats={[
            { value: '$0', label: 'South Dakota state income tax — zero, for you and your business' },
            { value: '200K+', label: 'Sioux Falls metro population — fastest-growing in the upper Midwest' },
            { value: '4.5%', label: "South Dakota's sales tax — simple, single-rate statewide structure" },
          ]}
        />

        {/* SERVICE EXPLANATION */}
        <ServiceExplanation
          eyebrow="WHAT WE BUILD FOR SIOUX FALLS BUSINESSES"
          heading="Shopify stores built for South Dakota buyers — from ag producers to downtown retailers"
          body="Sioux Falls businesses sell into a market that spans from urban professionals who moved here for the tax advantages to ranchers and ag businesses across South Dakota's vast rural landscape. That range requires a Shopify store that works equally well on a high-end desktop in a downtown Sioux Falls office and on a mobile phone with spotty LTE coverage in a rural county. We build for both. Every Sioux Falls Shopify store we deliver includes South Dakota's 4.5% sales tax plus applicable municipal taxes auto-configured, mobile-first checkout, B2B wholesale pricing for ag and industrial clients, and full Google Shopping integration. South Dakota's tax structure is one of the simplest in the country — 4.5% flat state rate, with Sioux Falls adding a local component for a combined rate around 6.5%. This simplicity means tax configuration is clean from day one."
          features={[
            'Custom Shopify theme — no cookie-cutter templates',
            'SD 4.5% + Sioux Falls local tax auto-configured',
            'Mobile-first for rural & urban SD buyers',
            'B2B wholesale pricing for ag & manufacturing',
            'Google Shopping & Meta Ads integration',
            'Klaviyo email automation setup',
            'Local pickup & regional fulfillment logic',
            '30-day post-launch support included',
          ]}
          rightSlot={
            <img
              src="/images/us/services/service-web-design-process.webp"
              alt="Shopify development process for Sioux Falls South Dakota businesses"
              className="rounded-2xl w-full object-cover"
              loading="lazy"
            />
          }
        />

        {/* STRATEGIC DARK */}
        <StrategicDarkSection
          eyebrow="THE FACTORYJET DIFFERENCE"
          heading="Three reasons Sioux Falls businesses choose us over local agencies"
          pillars={[
            {
              icon: 'zap',
              title: 'Launch Speed',
              description: 'Seven days from kickoff to live store — guaranteed in writing. Local Sioux Falls agencies book 6–12 weeks out. We start Monday and launch Friday of next week.',
            },
            {
              icon: 'shield',
              title: 'Fixed Price, Always',
              description: 'You know exactly what you're paying before you pay anything. No hourly surprises, no scope changes, no "we need another $2K." What we quote is what you pay.',
            },
            {
              icon: 'trending-up',
              title: 'Revenue-First Design',
              description: 'Every design decision — layout, CTAs, checkout flow, product pages — is made to maximize conversion. A store that looks good but doesn't sell is just an expensive photo gallery.',
            },
          ]}
        />

        {/* SERVICE JOURNEY */}
        <ServiceJourneyRow
          eyebrow="HOW IT WORKS"
          heading="From first call to live store in 7 days"
          stages={[
            {
              number: '01',
              title: 'Free Strategy Call',
              description: 'We learn about your Sioux Falls business, your products, and your customers in 45 minutes. Honest advice — no sales pitch.',
            },
            {
              number: '02',
              title: 'Fixed-Price Proposal',
              description: 'Within 24 hours: a complete proposal with fixed price, exact delivery date, and full scope. No surprises, no hourly billing.',
            },
            {
              number: '03',
              title: 'Design & Build (Days 1–5)',
              description: 'We design your custom theme, configure products and South Dakota tax rules, connect your payment gateway, and integrate all marketing tools.',
            },
            {
              number: '04',
              title: 'Review & Revisions (Day 6)',
              description: 'You review on a private preview link and request changes. We make all revisions same-day — most clients approve in one round.',
            },
            {
              number: '05',
              title: 'Launch Day (Day 7)',
              description: 'We push live, submit to Google, run full mobile and desktop QA, and hand you the keys with documentation and a 30-day support window.',
            },
          ]}
        />

        {/* PORTFOLIO */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          heading="Stores we've built for businesses like yours"
          cards={[
            {
              image: '/images/us/austin/ecommerce/portfolio-1.webp',
              title: 'Agricultural Products & Equipment',
              category: 'Shopify Plus · B2B Wholesale',
              result: '310% increase in online orders within 90 days',
            },
            {
              image: '/images/us/austin/ecommerce/portfolio-2.webp',
              title: 'Regional Specialty Food Brand',
              category: 'Shopify · DTC + Subscription',
              result: 'Launched in 7 days — $22K first-month revenue',
            },
            {
              image: '/images/us/austin/ecommerce/portfolio-3.webp',
              title: 'Downtown Retail & Gift Shop',
              category: 'Shopify · DTC + Local Pickup',
              result: '3.9% conversion rate vs. 1.2% prior site',
            },
          ]}
        />

        {/* COMPARISON TABLE */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          heading="FactoryJet vs. Sioux Falls Shopify agencies"
          competitors={[
            {
              name: 'Lawrence & Schiller (Sioux Falls)',
              price: '$10,000–$25,000',
              timeline: '8–16 weeks',
              notes: 'Full-service advertising and marketing agency — strong for traditional media and brand campaigns. Shopify is one of many offerings. Expensive and slow for SMB e-commerce builds.',
            },
            {
              name: 'Lemonly (Sioux Falls)',
              price: '$8,000–$20,000',
              timeline: '6–12 weeks',
              notes: 'Excellent infographic and data visualization work. Web development is a secondary offering. Better known for visual content than Shopify-specific builds.',
            },
            {
              name: 'Click Rain (Sioux Falls)',
              price: '$6,000–$15,000',
              timeline: '6–10 weeks',
              notes: 'Digital marketing and web agency with broad services. Good strategy work, but Shopify development is one of many specialties — not their core focus.',
            },
          ]}
          ourPrice="From $2,999"
          ourTimeline="7 Days — Guaranteed"
          ourNotes="Shopify-only specialists. 500+ stores built. Fixed price, fixed deadline, 30-day support. No surprises — ever."
        />

        {/* PRICING */}
        <PricingTiers
          eyebrow="TRANSPARENT PRICING"
          heading="Fixed-price Shopify packages for Sioux Falls businesses"
          id="pricing"
          tiers={[
            {
              name: 'Standard',
              price: '$2,999–$4,999',
              timeline: '7 days',
              description: 'For Sioux Falls boutiques, specialty food brands, and service businesses launching their first professional Shopify store.',
              features: [
                'Custom Shopify theme (no templates)',
                'Up to 50 products configured',
                'SD + Sioux Falls sales tax auto-setup',
                'Payment gateway integration',
                'Mobile-first responsive design',
                'Google Analytics 4 + Search Console',
                '30-day post-launch support',
              ],
              cta: 'Start with Standard',
              href: '/contact',
            },
            {
              name: 'Growth',
              price: '$4,999–$8,999',
              timeline: '7–10 days',
              description: 'For growing South Dakota brands — includes B2B pricing, Klaviyo email automation, Google Shopping, and advanced conversion features.',
              features: [
                'Everything in Standard',
                'Up to 200 products + variants',
                'B2B wholesale pricing & portal',
                'Klaviyo email automation setup',
                'Google Shopping feed configuration',
                'Meta Ads pixel + product catalog',
                'Subscription & recurring order support',
                'Speed optimization (sub-2s load)',
              ],
              cta: 'Start with Growth',
              href: '/contact',
              highlighted: true,
            },
            {
              name: 'Headless',
              price: '$8,999–$15,999',
              timeline: '10–14 days',
              description: 'Enterprise Shopify for high-volume Sioux Falls businesses, financial services product companies, and ag-tech manufacturers.',
              features: [
                'Everything in Growth',
                'Headless Shopify + Next.js frontend',
                'Unlimited products & collections',
                'ERP / inventory system integration',
                'Multi-location fulfillment logic',
                'Sub-1s load time, Lighthouse 100',
                'Dedicated project manager',
                '60-day post-launch support',
              ],
              cta: 'Start with Headless',
              href: '/contact',
            },
          ]}
        />

        {/* INDUSTRIES GRID */}
        <IndustriesGrid
          eyebrow="INDUSTRIES WE SERVE IN SIOUX FALLS"
          heading="From South Dakota agriculture to downtown retail"
          sectors={[
            {
              icon: 'tractor',
              title: 'Agriculture & Farm Products',
              description: 'SD ag producers, cattle ranchers, crop input suppliers, and farm-direct food brands going DTC through Shopify.',
            },
            {
              icon: 'building',
              title: 'Financial Services Products',
              description: 'Sioux Falls is a major financial hub — fintech, credit products, and financial education companies with e-commerce needs.',
            },
            {
              icon: 'heart',
              title: 'Health Systems & Wellness',
              description: 'Sanford Health and Avera's supplier networks, wellness brands, and health-product companies serving SD's growing market.',
            },
            {
              icon: 'store',
              title: 'Downtown Retail & Gifts',
              description: 'Phillips Avenue boutiques, Falls Park area shops, and specialty retailers adding a professional online sales channel.',
            },
            {
              icon: 'package',
              title: 'Specialty Food & Beverage',
              description: 'South Dakota craft beverages, specialty meats, and artisan food producers shipping their products nationwide.',
            },
            {
              icon: 'factory',
              title: 'Manufacturing & Industrial',
              description: 'SD manufacturers and industrial suppliers building B2B e-commerce channels to grow beyond regional markets.',
            },
          ]}
        />

        {/* TESTIMONIALS */}
        <TestimonialsSection
          eyebrow="WHAT OUR CLIENTS SAY"
          heading="Real results from real businesses"
        />

        {/* FAQ */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          heading="Everything Sioux Falls business owners ask before hiring us"
          items={[
            {
              q: 'Do you have experience with Shopify development in Sioux Falls and South Dakota?',
              a: "Yes — we've built stores for businesses across the Sioux Falls metro and broader South Dakota market. We understand SD buyers, the ag-driven market, the financial services sector that Sioux Falls is known for, and South Dakota's uniquely business-friendly tax structure.",
            },
            {
              q: "South Dakota has no state income tax. Does that advantage extend to e-commerce businesses?",
              a: "Yes — for e-commerce business owners operating in South Dakota, the absence of state income tax means more of your online sales revenue stays in your pocket. This is one of the reasons Sioux Falls has attracted so many businesses over the past decade. For your customers, what matters is sales tax — which we configure automatically for SD and any other states where you have tax nexus.",
            },
            {
              q: "What's the sales tax rate for a Sioux Falls Shopify store?",
              a: "South Dakota charges a 4.5% state sales tax. Sioux Falls adds a 2% municipal tax, bringing the combined rate to 6.5% for orders shipped to Sioux Falls addresses. Other SD cities have different local rates. We configure Shopify Tax to automatically calculate and collect the correct rate based on each buyer's shipping address — including handling multi-state nexus if your volume triggers out-of-state collection obligations.",
            },
            {
              q: "How does the 7-day delivery guarantee work?",
              a: "Once you approve your proposal and send the deposit, the 7-day clock starts. We design, build, configure, and launch your complete Shopify store within that window. If we miss the deadline for any reason on our end, you get a full refund. It's in writing, it's contractual, and we've never had to issue one.",
            },
            {
              q: "I know Lawrence & Schiller is a big agency in Sioux Falls. Why would I hire FactoryJet instead?",
              a: "Lawrence & Schiller is excellent for large-scale brand campaigns, traditional media, and enterprise marketing. If you need a TV buy or a full rebrand, they're a solid choice. If you need a Shopify store built fast and well at a price that makes sense for a growing SMB, that's our lane. We specialize exclusively in Shopify, launch in 7 days, start at $2,999, and put the deadline in writing.",
            },
            {
              q: "Can you build a Shopify store for a South Dakota agricultural business?",
              a: "Absolutely — ag businesses are one of our strongest verticals. We've built stores for equipment parts dealers, farm input suppliers, ranch merchandise brands, and direct-to-consumer food producers across the Dakotas. We understand the SD ag buyer: they purchase on mobile, need detailed product specs, and often buy in volume. We build for all of that — including B2B wholesale portals with tiered pricing for commercial accounts.",
            },
            {
              q: "Sioux Falls has a big financial services sector. Can you build e-commerce for fintech or financial product companies?",
              a: "Yes. Financial services companies in Sioux Falls increasingly sell physical products (branded merchandise, educational materials, financial planning tools) and digital products online. We've built stores for financial education companies, professional services firms with product lines, and fintech companies with physical product components. Compliance-friendly product descriptions and terms are something we factor in from the start.",
            },
            {
              q: "Can you integrate with Sanford Health or Avera's supplier networks?",
              a: "If you're a vendor selling products to Sanford Health, Avera, or other Sioux Falls health systems through an e-commerce channel, we can build a B2B store with PO-based purchasing, net payment terms, and customer-specific pricing. We've built procurement stores for healthcare suppliers. Contact us with your specific integration requirements and we'll scope it accurately.",
            },
            {
              q: "How do you handle shipping to rural South Dakota addresses?",
              a: "South Dakota is geographically large with significant rural population. We configure USPS Priority Mail as the primary carrier for rural SD addresses — it's the most reliable and economical option for remote areas. We set up carrier-calculated shipping rates at checkout so buyers in rural counties see accurate shipping costs. For perishable or fragile products, we configure appropriate carrier restrictions.",
            },
            {
              q: "What's the difference between FactoryJet and a local Sioux Falls web developer?",
              a: "A local developer might be great — or might be a one-person shop who disappears mid-project. With FactoryJet you get a 25-person team (designers, developers, project managers, QA) working in parallel, 500+ stores as proof, a written delivery guarantee, and fixed pricing. No local freelancer offers all four.",
            },
            {
              q: "Can you build a store that handles both South Dakota retail and B2B wholesale?",
              a: "Yes — this is one of our specialties. Many SD businesses sell retail DTC and also sell wholesale to retailers, distributors, or commercial buyers. We build unified Shopify stores with separate retail and wholesale pricing tiers, wholesale-only product visibility, login-gated B2B pricing, minimum order quantities, and net payment terms. Retail and wholesale customers experience the same store but with different pricing rules applied automatically.",
            },
            {
              q: "How much does a Shopify store typically cost in Sioux Falls?",
              a: "Local Sioux Falls agencies charge $6,000–$25,000 for a Shopify build with 6–16 week timelines. Freelancers run $1,500–$6,000 with variable quality. We charge $2,999–$15,999 depending on complexity, deliver in 7 days, and back it with a money-back guarantee. Better quality, faster delivery, and a guarantee — at 60% less than the local agency rate.",
            },
            {
              q: "Do you set up Google Shopping for Sioux Falls product businesses?",
              a: "Google Shopping is included in our Growth and Headless packages and available as a paid add-on for Standard. We create your Google Merchant Center account, configure the product feed with correct SD tax rules, optimize product titles and descriptions, and link to Google Ads. For Sioux Falls product businesses, Google Shopping is typically the first high-ROI advertising channel to activate.",
            },
            {
              q: "I already have a Shopify store that's not performing. Can you audit and fix it?",
              a: "Yes — our free 24-hour audit covers speed scores (Core Web Vitals), checkout abandonment, mobile UX, conversion funnel gaps, and theme code issues. We give you a specific list of what's broken and a fixed price to fix it. Common problems we find: slow themes, unoptimized product images, broken mobile checkout, poor product page structure, and missing upsells.",
            },
            {
              q: "Can you help a Sioux Falls retail store add an online sales channel?",
              a: "This is one of the most common projects we do — a brick-and-mortar retailer in Sioux Falls that wants to add online. We build the Shopify store, sync it with your existing POS (if you're on Shopify POS, Square, or Lightspeed), configure local pickup as a shipping option, and ensure your in-store and online inventory stays in sync automatically.",
            },
            {
              q: "Do you offer ongoing maintenance after launch?",
              a: "Yes. Every project includes 30 days of post-launch support at no additional cost. After that, monthly maintenance plans start at $299/month — theme updates, app updates, speed monitoring, and priority support. Most of our long-term clients stay on maintenance plans because it means their store never breaks without someone watching it.",
            },
            {
              q: "I'm outside Sioux Falls — Rapid City, Aberdeen, or the Black Hills. Do you serve my area?",
              a: "Absolutely. We serve businesses across all of South Dakota — Sioux Falls, Rapid City, Aberdeen, Watertown, Brookings, Pierre, the Black Hills, and everywhere else. Tax configuration is the same statewide (4.5% SD state rate), with local rates varying by city. Remote collaboration is our standard — most projects are handled entirely over Zoom and Slack.",
            },
            {
              q: "Can you build a Shopify store for a Black Hills or Mount Rushmore area tourism business?",
              a: "Yes — tourism and hospitality businesses in the Black Hills area are a growing segment. We build stores for souvenir and gift businesses, outdoor gear retailers, experience-based companies selling merchandise and gift cards, and regional food brands that drive tourist purchases. Local pickup, regional shipping, and gift-card integration are all part of the standard toolkit.",
            },
            {
              q: "What e-commerce platform is right for my South Dakota business — Shopify, WooCommerce, or something else?",
              a: "For 95% of Sioux Falls and South Dakota SMBs, Shopify is the right answer. It handles South Dakota sales tax automatically, runs fast with no server management, has the best app ecosystem for marketing integrations, and requires zero technical maintenance. WooCommerce works if you're deeply committed to WordPress and have ongoing development resources. Headless Shopify makes sense for high-volume businesses needing sub-second performance.",
            },
            {
              q: "How do I get started with FactoryJet?",
              a: "Book a free 45-minute strategy call. We ask about your business, your products, and your goals — then tell you exactly what we'd build and what it would cost. No commitment, no pressure — you'll leave with a clear picture of the right path forward whether you hire us or not. Click the button below to schedule.",
            },
            {
              q: "Can FactoryJet build more than just a Shopify store — like a custom web app or API integration?",
              a: "Yes. Beyond Shopify, we build custom web applications, booking systems, CRMs, dealer portals, and complex API integrations. If your Sioux Falls business needs custom software beyond what Shopify provides out of the box — a configurator, a quote request system, or an ERP connection — our full-stack team handles it. Start with a strategy call and describe what you need.",
            },
          ]}
        />

        {/* FINAL CTA */}
        <FinalCTA
          variant="dark"
          heading="Ready to launch your Sioux Falls Shopify store in 7 days?"
          subheading="Book a free 45-minute strategy call. We'll audit your current setup, recommend the right package, and give you a fixed price before you commit to anything."
          primaryCta={{ label: 'Book Your Free Strategy Call', href: '/contact' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
        />

      </main>
      <SiteFooter />
    </>
  )
}
