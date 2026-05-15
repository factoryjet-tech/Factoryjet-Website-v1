import type { Metadata } from 'next'
import { ecommerceCityAlternatesUS } from '@/data/hreflangMap'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
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
import { getEcommerceCitySchema } from '@/data/ecommerceCitySchemas'

export const metadata: Metadata = {
  title: 'Shopify Developer Fargo ND | E-Commerce Development from $2,999 | FactoryJet',
  description: 'Best Shopify developer in Fargo, North Dakota: stores live in 7 days from $2,999. Silicon Prairie e-commerce specialists — Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Developer Fargo ND | E-Commerce Development from $2,999 | FactoryJet',
    description: 'Best Shopify developer in Fargo, North Dakota: stores live in 7 days from $2,999. Silicon Prairie e-commerce specialists — Shopify, WooCommerce & AI. Free audit.',
    url: 'https://factoryjet.com/us/services/ecommerce-development/fargo',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Shopify Developer Fargo ND',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Developer Fargo ND | E-Commerce from $2,999 | FactoryJet',
    description: 'Best Shopify developer in Fargo ND: stores live in 7 days from $2,999. Silicon Prairie e-commerce specialists. Free audit.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ecommerce-development/fargo',
    languages: ecommerceCityAlternatesUS['fargo'],
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
      dangerouslySetInnerHTML={{ __html: getEcommerceCitySchema('fargo') }}
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
          eyebrow="E-COMMERCE DEVELOPMENT · FARGO, ND"
          headline="Shopify Developer Fargo for Silicon Prairie Businesses"
          subheadline="Fargo's fastest-growing brands are ditching slow local agencies and launching high-converting Shopify stores in 7 days — at 60% less than what Onsharp or AdShark charge for the same work."
          primaryCta={{ label: 'Get Your Free Store Audit', href: '/contact' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustBadges={['500+ Stores Launched', '7-Day Delivery', '4.9★ Rated', 'From $2,999']}
        />

        {/* LOGO BAR */}
        <LogoBar
          heading="Trusted by businesses across Fargo, Moorhead & the Red River Valley"
        />

        {/* BIG THREE TRUST BLOCK */}
        <BigThreeTrustBlock
          blocks={[
            {
              stat: '7 Days',
              label: 'Store Goes Live',
              description: 'From kickoff call to a fully live Shopify store in one week — guaranteed. No month-long waits, no scope creep, no drama.',
            },
            {
              stat: '60% Less',
              label: 'Than Local Agencies',
              description: 'Onsharp quotes $8K–$15K for a basic Shopify build. We deliver the same quality — often better — starting at $2,999.',
            },
            {
              stat: '500+',
              label: 'Stores Built',
              description: 'From ag-tech equipment dealers and Bobcat-country manufacturers to downtown Fargo boutiques — we know what converts.',
            },
          ]}
        />

        {/* CITY CONTEXT */}
        <CityContextSection
          eyebrow="WHY FARGO E-COMMERCE IS DIFFERENT"
          heading="The Silicon Prairie advantage — and what it means for your online store"
          body="Fargo isn't just a cold-weather city anymore. Microsoft TechSpark chose Fargo as one of its five pilot cities, the Emerging Prairie ecosystem has produced dozens of funded startups, and the Fargo-Moorhead metro is the fastest-growing market between Minneapolis and Seattle. Meanwhile, ag-tech companies, Bobcat-country equipment dealers, and manufacturing firms that once sold purely offline are finally realizing their customers are searching online first. The businesses winning in this market aren't necessarily the ones with the biggest ad budgets — they're the ones with a Shopify store that loads fast, converts on mobile, and handles cross-border North Dakota–Minnesota tax rules automatically. That's exactly what we build."
          stats={[
            { value: 'Top 5', label: 'Microsoft TechSpark city — tech investment hub' },
            { value: '$25B+', label: 'Annual ag-tech & manufacturing output in the region' },
            { value: '250K+', label: 'Fargo-Moorhead metro population — cross-border market' },
          ]}
        />

        {/* SERVICE EXPLANATION */}
        <ServiceExplanation
          eyebrow="WHAT WE BUILD FOR FARGO BUSINESSES"
          heading="A Shopify store engineered for North Dakota buyers — and Minnesota ones too"
          body="Most Fargo e-commerce businesses run into the same wall: they get a generic Shopify theme from a template marketplace, spend weeks trying to configure ND's 5% state sales tax plus the local 2% Fargo city tax, realize they also need to handle Minnesota buyers across the river in Moorhead, and eventually give up and call a local agency that charges $10K+ for work that should cost $3K. We've solved this dozens of times. Our Fargo Shopify builds include automatic multi-state tax configuration for ND + MN, mobile-first checkout designed for the rural buyer who's ordering on a phone with one bar of LTE, B2B wholesale pricing for ag and manufacturing clients, and full Google Shopping + Meta Ads integration so you can start driving traffic on day one. We don't just build stores — we build revenue engines."
          features={[
            'Custom Shopify theme — no bloated templates',
            'ND 5% + Fargo 2% sales tax auto-configured',
            'Minnesota (MN) cross-border tax handling',
            'B2B wholesale catalog & pricing tiers',
            'Google Shopping & Meta Ads integration',
            'Mobile-first checkout for rural buyers',
            'Inventory sync for multi-location businesses',
            'Post-launch 30-day support included',
          ]}
          rightSlot={
            <img
              src="/images/us/services/service-web-design-process.webp"
              alt="Shopify development process for Fargo ND businesses"
              className="rounded-2xl w-full object-cover"
              loading="lazy"
            />
          }
        />

        {/* STRATEGIC DARK */}
        <StrategicDarkSection
          eyebrow="THE FACTORYJET DIFFERENCE"
          heading="Three reasons Silicon Prairie businesses choose us over local agencies"
          pillars={[
            {
              icon: 'cpu',
              title: 'AI-Native Stores',
              description: 'Every store ships with AI product descriptions, AI-powered search, and smart recommendation engines. Your competitors are still using keyword-stuffed copy written in 2018.',
            },
            {
              icon: 'shield',
              title: 'Guaranteed Delivery',
              description: 'We contractually guarantee your store goes live in 7 days or you get a full refund. No other Shopify developer in Fargo offers this. We do it on every project.',
            },
            {
              icon: 'trending-up',
              title: 'Built to Convert',
              description: "Beautiful isn't enough. Every section, button, and product page is designed around conversion rate optimization principles — because a store that doesn't sell isn't a store, it's a brochure.",
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
              description: 'We spend 45 minutes learning your products, your customers, and your revenue goals. No sales pitch — just honest advice on what you actually need.',
            },
            {
              number: '02',
              title: 'Proposal in 24 Hours',
              description: 'You get a fixed-price proposal, exact delivery date, and a complete sitemap before we take a dollar. No hourly billing surprises.',
            },
            {
              number: '03',
              title: 'Design & Build (Days 1–5)',
              description: 'We design, build, and configure your full Shopify store — theme, products, tax settings, payment gateway, and all integrations.',
            },
            {
              number: '04',
              title: 'Review & Revisions (Day 6)',
              description: 'You get a private preview link. We make same-day revisions until everything looks and works exactly as you envisioned.',
            },
            {
              number: '05',
              title: 'Launch Day (Day 7)',
              description: 'We go live, submit to Google, run final QA across mobile and desktop, and hand you the keys with a 30-day support window.',
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
              title: 'Agricultural Equipment Parts Store',
              category: 'Shopify Plus · B2B Wholesale',
              result: '340% increase in online parts orders in 90 days',
            },
            {
              image: '/images/us/austin/ecommerce/portfolio-2.webp',
              title: 'Craft Brewery & Merchandise Shop',
              category: 'Shopify · DTC + Events',
              result: 'Launched in 6 days — $28K first-month revenue',
            },
            {
              image: '/images/us/austin/ecommerce/portfolio-3.webp',
              title: 'Home & Outdoor Goods Brand',
              category: 'Shopify · DTC',
              result: '4.2% average conversion rate vs 1.8% industry standard',
            },
          ]}
        />

        {/* COMPARISON TABLE */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          heading="FactoryJet vs. Fargo's biggest Shopify agencies"
          competitors={[
            {
              name: 'Onsharp (Fargo)',
              price: '$8,000–$20,000',
              timeline: '6–12 weeks',
              notes: 'Full-service digital agency — great for large enterprise. Expensive and slow for SMBs who just need a great Shopify store.',
            },
            {
              name: 'AdShark Marketing',
              price: '$500+/month',
              timeline: 'Ongoing retainer',
              notes: 'Specializes in PPC and paid media — not a Shopify development shop. You still need to find a developer separately.',
            },
            {
              name: 'Bluestem Media',
              price: '$5,000–$12,000',
              timeline: '4–8 weeks',
              notes: 'WordPress-first agency since the early 2000s. Shopify is a secondary offering — not their core expertise.',
            },
          ]}
          ourPrice="From $2,999"
          ourTimeline="7 Days — Guaranteed"
          ourNotes="Shopify-only specialists. 500+ stores built. Fixed price, fixed deadline, 30-day support. No surprises, no scope creep."
        />

        {/* PRICING */}
        <PricingTiers
          eyebrow="TRANSPARENT PRICING"
          heading="Fixed-price Shopify packages for Fargo businesses"
          id="pricing"
          tiers={[
            {
              name: 'Standard',
              price: '$2,999–$4,999',
              timeline: '7 days',
              description: 'Perfect for Fargo retail shops, boutiques, and service businesses launching their first professional online store.',
              features: [
                'Custom Shopify theme (no templates)',
                'Up to 50 products configured',
                'ND + MN tax auto-setup',
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
              description: 'For growing Fargo-Moorhead brands ready to scale — includes B2B pricing, advanced integrations, and conversion optimization.',
              features: [
                'Everything in Standard',
                'Up to 200 products + variants',
                'B2B wholesale pricing & portal',
                'Email marketing integration (Klaviyo)',
                'Google Shopping feed setup',
                'Meta Ads pixel + catalog',
                'Advanced inventory management',
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
              description: 'Enterprise-grade headless Shopify for ag-tech, manufacturing, and high-volume Fargo businesses needing maximum performance.',
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
          eyebrow="INDUSTRIES WE SERVE IN FARGO"
          heading="From Silicon Prairie startups to Bobcat-country manufacturers"
          sectors={[
            {
              icon: 'tractor',
              title: 'Ag-Tech & Equipment',
              description: 'Parts stores, equipment dealers, and ag-tech SaaS companies selling to North Dakota farmers and ranchers.',
            },
            {
              icon: 'factory',
              title: 'Manufacturing & Industrial',
              description: 'Bobcat-country fabricators, metal shops, and industrial suppliers moving their catalog online with B2B wholesale.',
            },
            {
              icon: 'store',
              title: 'Downtown Retail & Boutiques',
              description: 'Broadway Square boutiques, specialty food shops, and Fargo makers expanding their physical store online.',
            },
            {
              icon: 'beer',
              title: 'Craft Beverage & Food',
              description: 'North Dakota craft breweries, distilleries, and specialty food producers shipping merchandise and subscriptions nationwide.',
            },
            {
              icon: 'heart',
              title: 'Health & Wellness',
              description: 'Supplement brands, fitness studios, and wellness practitioners launching DTC subscription stores.',
            },
            {
              icon: 'truck',
              title: 'Logistics & Supply Chain',
              description: 'Cross-border Fargo-Moorhead distributors managing multi-state inventory and complex shipping rules.',
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
          heading="Everything Fargo business owners ask before hiring us"
          items={[
            {
              q: 'Do you actually have experience with Shopify development in Fargo, ND?',
              a: "Yes — we've built stores for businesses across the Fargo-Moorhead metro, from ag-equipment dealers in the Red River Valley to downtown Fargo boutiques on Broadway. We understand the cross-border ND/MN market, the ag-tech buyer behavior, and the tax rules that trip up most developers.",
            },
            {
              q: 'How does the 7-day delivery guarantee actually work?',
              a: "Once you approve your project proposal and send the deposit, the 7-day clock starts. We design, build, configure, and launch your full Shopify store in that window. If we miss the deadline for any reason on our end, you get a full refund. We've never missed a deadline.",
            },
            {
              q: 'How do you handle North Dakota sales tax on a Shopify store?',
              a: "North Dakota charges a 5% state sales tax, and Fargo adds a 2% city tax on top — bringing the combined rate to 7%. We configure Shopify Tax (or TaxJar) to automatically calculate and collect the right amount based on customer location. We also set up MN sales tax rules for your Moorhead buyers across the river.",
            },
            {
              q: "What about Minnesota buyers from Moorhead? Do I need to collect MN sales tax too?",
              a: "It depends on your sales volume into Minnesota. If you exceed Minnesota's economic nexus threshold ($100,000 in sales or 200 transactions), you're required to collect MN's 6.875% state tax plus applicable local taxes. We configure your Shopify store to handle both ND and MN tax rules from day one, and we'll flag the thresholds so you know exactly when you're obligated.",
            },
            {
              q: 'Can you build a Shopify store with B2B wholesale pricing for my ag or manufacturing business?',
              a: "Absolutely — this is one of our specialties in Fargo. We build B2B wholesale portals with tiered pricing by customer group, volume discounts, minimum order quantities, and net payment terms. Your wholesale buyers get a separate login experience from your retail customers. We've done this for ag parts dealers, industrial suppliers, and equipment distributors across the region.",
            },
            {
              q: "I've heard Onsharp is the go-to agency in Fargo. Why should I consider FactoryJet instead?",
              a: "Onsharp is a great full-service agency — excellent for enterprise clients with $50K+ budgets and complex digital marketing needs. But if you're a growing SMB who specifically needs a Shopify store built well and launched fast, you're paying for a lot of overhead you don't need. We specialize exclusively in Shopify. Our builds start at $2,999, launch in 7 days, and come with 30-day support. That's a very different value proposition for most Fargo businesses.",
            },
            {
              q: "What's the difference between you and AdShark Marketing for e-commerce?",
              a: "AdShark is excellent at paid media — Google Ads, Meta Ads, programmatic. They're a marketing agency, not a Shopify development shop. If your store is already built and you need ads management, talk to AdShark. If you need a store built first (or rebuilt properly), that's where we come in. Many clients work with both: we build the store, then hand off ads management to a local agency.",
            },
            {
              q: 'How does FactoryJet compare to Bluestem Media for Shopify work?',
              a: "Bluestem has been around for decades and does solid WordPress work. Shopify is a secondary offering for them, not their primary platform. If you want a team for whom Shopify is the only thing they do — 500+ stores deep — that's us. We also launch in 7 days vs. their typical 4–8 week timeline.",
            },
            {
              q: "I'm a manufacturer in Fargo. Can you build a product catalog with thousands of SKUs?",
              a: "Yes. Our Headless Shopify package is built for exactly this use case — ag equipment parts, industrial components, or manufactured goods with complex variant trees. We handle bulk CSV product imports, variant matrices (size × color × material × quantity), B2B pricing tiers, and integration with your existing ERP or inventory management system. We've built catalogs with 10,000+ SKUs.",
            },
            {
              q: "Does Microsoft TechSpark or Emerging Prairie offer any e-commerce grants or subsidies?",
              a: "Microsoft TechSpark's Fargo initiative includes digital skills programs and some technology credits, but direct e-commerce store grants aren't currently part of the program. Emerging Prairie is more focused on startup funding and ecosystem building. The most accessible path for most Fargo SMBs is simply working with an affordable developer — which is exactly the gap we fill at $2,999.",
            },
            {
              q: 'What e-commerce platform should I use — Shopify, WooCommerce, or something else?',
              a: "For 95% of Fargo SMBs, Shopify is the right answer. It handles North Dakota sales tax automatically, runs fast out of the box, has the best app ecosystem for marketing integrations, and requires zero server maintenance. WooCommerce can work if you're deeply committed to WordPress and have a developer on staff to maintain it. Headless (Shopify + Next.js) makes sense for high-volume businesses needing sub-second load times and complex custom logic.",
            },
            {
              q: 'Can you integrate my Shopify store with my existing point-of-sale system?',
              a: "Yes. If you're running Shopify POS, the integration is seamless — your online and in-store inventory sync automatically. If you're on a different POS system (Square, Lightspeed, Clover), we build a custom integration or use a middleware connector. This is especially common for downtown Fargo retailers who run a physical store on Broadway and want to add an online channel.",
            },
            {
              q: 'Do you do ongoing Shopify maintenance and support after launch?',
              a: "Every project includes 30 days of post-launch support at no extra cost — bug fixes, minor adjustments, and questions answered fast. After that, we offer monthly maintenance plans starting at $299/month that include theme updates, app maintenance, speed monitoring, and priority support. Many Fargo clients stay on maintenance plans for years.",
            },
            {
              q: 'How much does a Shopify store cost in Fargo compared to hiring locally?',
              a: "Local Fargo agencies typically charge $6,000–$20,000 for a Shopify build with timelines of 4–12 weeks. Freelancers on Upwork run $1,500–$5,000 but with highly variable quality and no accountability. We charge $2,999–$15,999 depending on complexity, deliver in 7 days, and back it with a money-back guarantee. You get agency quality at below-freelancer pricing.",
            },
            {
              q: 'Can you help me set up Google Shopping for my Fargo Shopify store?',
              a: "Yes — Google Shopping setup is included in our Growth and Headless packages and available as an add-on for Standard. We create your Google Merchant Center account, configure your product feed, set up feed rules for ND/MN pricing, and link it to Google Ads. This is one of the highest-ROI channels for Fargo product businesses.",
            },
            {
              q: "I'm running a craft brewery in Fargo. Can I sell merchandise and beer subscriptions online?",
              a: "Yes. North Dakota has specific alcohol shipping laws that restrict direct-to-consumer beer shipping — but merchandise, branded apparel, glassware, and non-alcoholic products can be sold and shipped without restriction. We build brewery merchandise stores with event ticketing integration, merchandise bundles, and local pickup options. Beer subscription flows need to route through compliant fulfillment partners.",
            },
            {
              q: 'Do you build Shopify stores for agricultural businesses — like seed dealers or precision ag companies?',
              a: "This is a growing segment for us. Ag-tech companies, seed dealers, equipment parts suppliers, and precision ag SaaS businesses are all building e-commerce channels as farmers increasingly research and purchase online. We understand the ND ag buyer: they're mobile, they care about product specs, and they're often purchasing for large operations with multi-location accounts. We build for that.",
            },
            {
              q: "What's your process if I already have a Shopify store but it's slow or not converting?",
              a: "We start with a free audit — speed scores, conversion funnel analysis, mobile UX review, and checkout abandonment data. From there we give you a specific list of what's broken and what it'll cost to fix. Common issues we fix for Fargo stores: slow theme code, unoptimized product images, broken checkout flows on mobile, missing upsells, and poor product page copy. Audits take 24 hours and are completely free.",
            },
            {
              q: "I'm in Moorhead, MN — not Fargo. Do you still serve my area?",
              a: "Absolutely. The Fargo-Moorhead metro is one market in our eyes. We serve businesses on both sides of the Red River — Moorhead, West Fargo, Dilworth, Barnesville, and across the region. The only difference for you as a Moorhead business is that Minnesota tax rules apply from day one (6.875% state + Clay County local taxes), which we configure automatically.",
            },
            {
              q: "How do I get started? What's the first step?",
              a: "Book a free 45-minute strategy call. No sales pitch, no pressure — we ask about your business, your products, and your goals, then tell you exactly what we'd build and what it would cost. You'll leave the call with a clear picture of the right path forward, even if you decide not to hire us. Hit the button below to schedule.",
            },
            {
              q: "What if I need more than just a Shopify store — like custom web apps or integrations?",
              a: "We build custom web applications, CRMs, booking systems, and complex API integrations beyond standard Shopify. If your business has a workflow that needs custom software — like a dealer portal, a custom configurator, or an ERP integration — we have a full-stack development team that handles those projects too. Start with a strategy call and describe what you need.",
            },
            {
              q: 'Why hire FactoryJet instead of a local Fargo freelancer from LinkedIn?',
              a: "A freelancer can be great — or completely unreliable. You have no way to know until you're three months in with a half-built store and no one answering emails. We're a 25-person team, not a one-person shop. We have project managers, designers, developers, and QA working in parallel. We have 500+ stores as proof. And we put a delivery guarantee in writing — something no freelancer will ever offer you.",
            },
          ]}
        />

        {/* FINAL CTA */}
        <FinalCTA
          variant="dark"
          heading="Ready to launch your Fargo Shopify store in 7 days?"
          subheading="Book a free 45-minute strategy call. We'll audit your current setup (or starting point), recommend the right package, and give you a fixed price before you commit to anything."
          primaryCta={{ label: 'Book Your Free Strategy Call', href: '/contact' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
        />

      </main>
      <SiteFooter />
    </>
  )
}
