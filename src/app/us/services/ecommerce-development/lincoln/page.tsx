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
  title: 'Shopify Agency Lincoln NE | E-Commerce Development from $2,999 | FactoryJet',
  description: 'Top-rated Shopify agency in Lincoln, Nebraska: stores live in 7 days from $2,999. Silicon Prairie e-commerce specialists — Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Agency Lincoln NE | E-Commerce Development from $2,999 | FactoryJet',
    description: 'Top-rated Shopify agency in Lincoln, Nebraska: stores live in 7 days from $2,999. Silicon Prairie specialists — Shopify, WooCommerce & AI. Free audit.',
    url: 'https://factoryjet.com/us/services/ecommerce-development/lincoln',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Shopify Agency Lincoln NE',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Agency Lincoln NE | E-Commerce from $2,999 | FactoryJet',
    description: 'Top-rated Shopify agency in Lincoln NE: stores live in 7 days from $2,999. Silicon Prairie e-commerce specialists. Free audit.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ecommerce-development/lincoln',
    languages: ecommerceCityAlternatesUS['lincoln'],
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
      dangerouslySetInnerHTML={{ __html: getEcommerceCitySchema('lincoln') }}
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
          eyebrow="E-COMMERCE DEVELOPMENT · LINCOLN, NE"
          headline="Shopify Agency Lincoln NE for Nebraska Businesses"
          subheadline="Lincoln is the Silicon Prairie's university town, ag-tech hub, and fastest-growing mid-market city — and the businesses winning online here aren't waiting 3 months for a local agency. They launch in 7 days at 60% less."
          primaryCta={{ label: 'Get Your Free Store Audit', href: '/contact' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustBadges={['500+ Stores Launched', '7-Day Delivery', '4.9★ Rated', 'From $2,999']}
        />

        {/* LOGO BAR */}
        <LogoBar
          heading="Trusted by businesses across Lincoln, Omaha & the Cornhusker State"
        />

        {/* BIG THREE TRUST BLOCK */}
        <BigThreeTrustBlock
          blocks={[
            {
              stat: '7 Days',
              label: 'Store Goes Live',
              description: 'From kickoff to a fully live Shopify store in one week — guaranteed. No more 12-week agency timelines while your competitors sell online.',
            },
            {
              stat: '60% Less',
              label: 'Than Lincoln Agencies',
              description: 'Local Lincoln agencies quote $7,000–$20,000 for Shopify builds. We deliver better results starting at $2,999 — with a written deadline guarantee.',
            },
            {
              stat: '500+',
              label: 'Stores Built',
              description: 'From Nebraska ag-tech companies and Husker merchandise brands to downtown Lincoln boutiques and University campus vendors.',
            },
          ]}
        />

        {/* CITY CONTEXT */}
        <CityContextSection
          eyebrow="WHY LINCOLN E-COMMERCE IS DIFFERENT"
          heading="The Silicon Prairie university town with a massive Husker market and booming ag-tech sector"
          body="Lincoln doesn't get the same press as Omaha, but the capital city has a unique e-commerce opportunity that most businesses haven't fully tapped. University of Nebraska–Lincoln's 25,000+ students create a captive consumer market on campus. Husker merchandise, game-day gear, and branded apparel are perpetual demand categories. Meanwhile, the ag-tech sector growing up around UNL's research programs is creating B2B e-commerce opportunities for equipment, precision farming tools, and agricultural software. Nebraska's 5.5% sales tax is straightforward to configure, and the Lincoln market has relatively low competition from established Shopify agencies — which means businesses that launch a professional store now can establish search ranking dominance before the market gets crowded."
          stats={[
            { value: '25K+', label: "UNL students — massive on-campus and alumni consumer market" },
            { value: '340K+', label: 'Lincoln metro population with strong purchase intent' },
            { value: '5.5%', label: "Nebraska's flat state sales tax — simple to configure" },
          ]}
        />

        {/* SERVICE EXPLANATION */}
        <ServiceExplanation
          eyebrow="WHAT WE BUILD FOR LINCOLN BUSINESSES"
          heading="Shopify stores built for Nebraska buyers — from Husker fans to ag producers"
          body="Lincoln e-commerce has two distinct markets that smart businesses capture simultaneously: the university consumer (students, alumni, and fans who buy on mobile, want fast shipping, and respond to Husker-adjacent branding), and the Nebraska producer (ag businesses, manufacturers, and food producers moving their products online for the first time). We've built stores for both. Every Lincoln Shopify build we deliver includes Nebraska's 5.5% sales tax auto-configured, mobile-first checkout for the student buyer, and B2B catalog options for the ag and industrial seller. We also integrate Google Shopping so your products appear at the top of searches when Lincoln buyers look for what you sell, and we add Klaviyo email automation so every first-time buyer becomes a repeat customer. Nebraska is price-conscious — our pricing reflects that."
          features={[
            'Custom Shopify theme — no generic templates',
            'Nebraska 5.5% sales tax auto-configured',
            'B2B wholesale pricing for ag & industrial',
            'Mobile-first for student & campus buyers',
            'Google Shopping & Meta Ads integration',
            'Klaviyo email automation setup',
            'Husker merchandise & sports apparel support',
            '30-day post-launch support included',
          ]}
          rightSlot={
            <img
              src="/images/us/services/service-web-design-process.webp"
              alt="Shopify development process for Lincoln Nebraska businesses"
              className="rounded-2xl w-full object-cover"
              loading="lazy"
            />
          }
        />

        {/* STRATEGIC DARK */}
        <StrategicDarkSection
          eyebrow="THE FACTORYJET DIFFERENCE"
          heading="Three reasons Lincoln businesses choose us over local agencies"
          pillars={[
            {
              icon: 'zap',
              title: 'Launch While Others Plan',
              description: 'Lincoln agencies are booking into next quarter. We launch your store in 7 days. While they're in kickoff meetings, you're already making sales.',
            },
            {
              icon: 'dollar-sign',
              title: 'Nebraska-Honest Pricing',
              description: 'No $200/hour billing, no scope creep, no surprise invoices. You get a fixed price before you pay anything — and that price never changes.',
            },
            {
              icon: 'trending-up',
              title: 'Built to Convert',
              description: 'Pretty stores that don't convert are expensive billboards. Every section, CTA, and checkout flow is optimized around conversion data from 500+ stores we've launched.',
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
              description: 'We learn about your Lincoln business, your products, and your customers in 45 minutes — no pitch, just honest advice on what you need.',
            },
            {
              number: '02',
              title: 'Fixed-Price Proposal',
              description: 'Within 24 hours you get a complete proposal: fixed price, exact launch date, full scope, and sitemap. No surprises, no hourly billing.',
            },
            {
              number: '03',
              title: 'Design & Build (Days 1–5)',
              description: 'We design your custom theme, configure products, set up Nebraska tax rules, connect your payment gateway, and integrate all marketing tools.',
            },
            {
              number: '04',
              title: 'Review & Revisions (Day 6)',
              description: 'You review on a private preview link. We make all revisions same-day. Most clients approve on first review with minor tweaks.',
            },
            {
              number: '05',
              title: 'Launch Day (Day 7)',
              description: 'We go live, submit to Google, complete full mobile QA, and hand you the keys with 30-day support and complete documentation.',
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
              title: 'Agricultural Equipment & Parts Store',
              category: 'Shopify Plus · B2B Wholesale',
              result: '290% increase in online orders in first 90 days',
            },
            {
              image: '/images/us/austin/ecommerce/portfolio-2.webp',
              title: 'University Apparel & Merchandise Brand',
              category: 'Shopify · DTC + Campus',
              result: 'Launched in 7 days — $34K first-month revenue',
            },
            {
              image: '/images/us/austin/ecommerce/portfolio-3.webp',
              title: 'Nebraska Food & Specialty Producer',
              category: 'Shopify · DTC + Subscription',
              result: '4.1% conversion rate from day one',
            },
          ]}
        />

        {/* COMPARISON TABLE */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          heading="FactoryJet vs. Lincoln's biggest Shopify agencies"
          competitors={[
            {
              name: 'Swanson Russell (Lincoln)',
              price: '$10,000–$30,000',
              timeline: '8–16 weeks',
              notes: 'Full-service advertising agency — strong on branding and media. Shopify is one of dozens of services they offer. Expensive and slow for focused e-commerce builds.',
            },
            {
              name: 'Sproutbox (Lincoln)',
              price: '$6,000–$15,000',
              timeline: '6–12 weeks',
              notes: 'Design and digital agency with broad services. Good work but longer timelines than most SMBs need.',
            },
            {
              name: 'Omaha-Based Agencies',
              price: '$7,000–$20,000',
              timeline: '6–14 weeks',
              notes: 'Several Omaha agencies serve Lincoln clients. Higher overhead = higher prices. Often de-prioritize Lincoln projects relative to Omaha accounts.',
            },
          ]}
          ourPrice="From $2,999"
          ourTimeline="7 Days — Guaranteed"
          ourNotes="Shopify-only specialists. 500+ stores built. Fixed price, fixed deadline. 30-day support. Nebraska-honest pricing from day one."
        />

        {/* PRICING */}
        <PricingTiers
          eyebrow="TRANSPARENT PRICING"
          heading="Fixed-price Shopify packages for Lincoln businesses"
          id="pricing"
          tiers={[
            {
              name: 'Standard',
              price: '$2,999–$4,999',
              timeline: '7 days',
              description: 'For Lincoln boutiques, food producers, merchandise brands, and service businesses launching their first professional Shopify store.',
              features: [
                'Custom Shopify theme (no templates)',
                'Up to 50 products configured',
                'Nebraska 5.5% sales tax auto-setup',
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
              description: 'For growing Lincoln and Nebraska brands — includes B2B wholesale pricing, Klaviyo email automation, and Google Shopping.',
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
              description: 'Enterprise Shopify for high-volume Lincoln businesses, ag-tech companies, and manufacturers needing maximum performance.',
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
          eyebrow="INDUSTRIES WE SERVE IN LINCOLN"
          heading="From Husker merchandise to Nebraska ag-tech"
          sectors={[
            {
              icon: 'tractor',
              title: 'Ag-Tech & Farm Equipment',
              description: 'Precision farming tools, equipment parts, seed dealers, and ag-tech SaaS companies serving Nebraska farmers going online.',
            },
            {
              icon: 'shirt',
              title: 'University Apparel & Merch',
              description: 'Husker merchandise, campus brands, and alumni goods businesses serving UNL's 25,000+ students and massive national fan base.',
            },
            {
              icon: 'package',
              title: 'Nebraska Food & Specialty',
              description: 'Cornhusker popcorn, craft foods, specialty meats, and Nebraska-made food products shipping direct to consumers nationwide.',
            },
            {
              icon: 'store',
              title: 'Downtown Lincoln Retail',
              description: 'Haymarket District boutiques, O Street shops, and local retailers expanding their physical presence online.',
            },
            {
              icon: 'factory',
              title: 'Manufacturing & Industrial',
              description: 'Nebraska manufacturers and industrial suppliers building B2B e-commerce channels to reach buyers beyond the local market.',
            },
            {
              icon: 'heart',
              title: 'Health & Wellness',
              description: 'Supplement brands, fitness studios, and wellness businesses serving Lincoln's health-conscious university and professional market.',
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
          heading="Everything Lincoln business owners ask before hiring us"
          items={[
            {
              q: 'Do you have specific experience with Shopify development in Lincoln, Nebraska?',
              a: "Yes — we've built e-commerce stores for businesses across the Lincoln metro and broader Nebraska market. We understand Nebraska buyers, the ag-tech sector around UNL, the Husker merchandise market, and Nebraska's straightforward 5.5% sales tax structure.",
            },
            {
              q: "What's Nebraska's sales tax, and how does it apply to my Shopify store?",
              a: "Nebraska has a 5.5% state sales tax. Lincoln itself adds a local tax that brings the combined rate to approximately 7% (5.5% state + 1.5% city). We configure Shopify Tax to automatically calculate and collect the correct amount based on the buyer's specific location — Lincoln, Omaha, or anywhere else in Nebraska. If you sell into other states and exceed their economic nexus thresholds, we configure multi-state tax handling too.",
            },
            {
              q: "How does the 7-day delivery guarantee work?",
              a: "Once you approve your proposal and send the deposit, the 7-day clock starts. We design, build, configure, and launch your complete Shopify store within that window. If we miss the deadline for any reason on our end, you receive a full refund. We've never had to issue one.",
            },
            {
              q: "Can you build a Shopify store for Husker merchandise or university-related products?",
              a: "Yes — we've built merchandise stores for university and sports-adjacent brands. Important note: if you plan to use University of Nebraska's official trademarks (Huskers wordmark, official logos), you'll need a UNL licensing agreement. If you're selling Husker-inspired or fan-culture products that don't use official marks, no licensing is required. We'll help you structure the store correctly for either situation.",
            },
            {
              q: "I run a farm or ag business in Nebraska. Can I sell products online?",
              a: "Absolutely — and this is one of the fastest-growing segments we serve. Nebraska's ag businesses are increasingly selling direct: equipment parts, inputs, specialty crops, value-added food products, and branded farm merchandise. We build Shopify stores with B2B wholesale pricing for commercial buyers, volume discounts, net payment terms, and inventory management that connects with your existing systems.",
            },
            {
              q: "Can you build a B2B wholesale portal for a Lincoln manufacturing company?",
              a: "Yes. Our Growth and Headless packages include full B2B wholesale functionality — separate pricing tiers by customer group, minimum order quantities, volume discounts, net 30/60/90 payment terms, and a wholesale buyer portal with unique login. Nebraska manufacturers and industrial suppliers are a core segment for us.",
            },
            {
              q: "What's the difference between you and Omaha-based agencies for Lincoln businesses?",
              a: "Several Omaha agencies serve Lincoln clients, and some do good work. The issues are typically: they charge Omaha overhead prices to Lincoln businesses, Lincoln projects get lower priority than their Omaha accounts, and timelines stretch as a result. We serve Lincoln businesses with the same priority as any other client — and our 7-day delivery is non-negotiable regardless of your city.",
            },
            {
              q: "I've heard Sproutbox does good Shopify work in Lincoln. Why should I consider FactoryJet?",
              a: "Sproutbox does solid design work — they're a broad-service digital agency. If you want Shopify as your primary platform and want a team for whom Shopify is the only thing they do, that's us. 500+ stores deep vs. being one of many services in an agency's portfolio. We're also faster (7 days) and significantly less expensive.",
            },
            {
              q: "How does Shopify handle subscription or recurring orders for Lincoln businesses?",
              a: "We integrate Shopify Subscriptions or Recharge depending on your needs. Subscription commerce works exceptionally well for Nebraska food producers (monthly meat boxes, specialty food subscriptions), supplement brands, and pet supply businesses. We set up the subscriber portal, discount logic, pause/skip/cancel flows, and Klaviyo email sequences that keep churn low.",
            },
            {
              q: "Can you integrate my Shopify store with my existing POS or inventory system?",
              a: "Yes. If you're running Shopify POS in a Lincoln retail location, the inventory sync is automatic. For other POS systems (Square, Lightspeed, Clover), we build the integration. For Lincoln businesses with ERP systems or custom inventory software, we build API connections through our Headless package.",
            },
            {
              q: "What does a Shopify store typically cost in Lincoln, Nebraska?",
              a: "Local Lincoln and Omaha agencies typically charge $7,000–$20,000 for a Shopify build with 6–14 week timelines. Freelancers run $1,500–$6,000 with variable quality and no accountability. We charge $2,999–$15,999 depending on complexity, deliver in 7 days, and back it with a money-back guarantee.",
            },
            {
              q: "Can you help me rank on Google for Shopify-related searches in Lincoln?",
              a: "Every store we build is fully SEO-configured out of the box: optimized metadata, structured data / JSON-LD schema, fast load times (Core Web Vitals green), mobile-first design, and a clean sitemap submitted to Google Search Console on launch day. For Lincoln businesses, we also optimize for local search signals so you appear in 'near me' queries. Ongoing SEO and content strategy is available as a separate service.",
            },
            {
              q: "I already have a Shopify store but it's not performing. Can you audit and fix it?",
              a: "Yes. Our free 24-hour audit covers: speed scores (Core Web Vitals), checkout abandonment rate, mobile UX issues, conversion funnel gaps, and theme code problems. We then provide a specific list of what's broken and a fixed price to fix it. Common issues for Lincoln stores: slow themes, unoptimized images, broken mobile checkout, poor product page structure, and missing upsells.",
            },
            {
              q: "Do you work with startups and early-stage businesses in Lincoln?",
              a: "Yes. Lincoln's startup ecosystem — particularly around UNL's innovation programs and the NMotion accelerator — produces a lot of early-stage product companies. We work with pre-revenue and early-stage businesses. For most startups, the right starting point is our Standard package at $2,999 to validate the product concept before investing in advanced features.",
            },
            {
              q: "How do I handle shipping and fulfillment for Nebraska buyers?",
              a: "We configure Shopify's shipping module with USPS, UPS, and FedEx carrier-calculated rates based on package weight and destination. For Nebraska agricultural products (food items, specialty crops), we factor in perishable shipping constraints. For high-volume operations, we integrate ShipStation or EasyPost for warehouse management. Regional distribution from Lincoln reaches most of the Midwest within 2-day ground shipping.",
            },
            {
              q: "Can you set up Google Shopping for my Lincoln product business?",
              a: "Google Shopping is included in our Growth and Headless packages and available as a paid add-on for Standard. We set up Google Merchant Center, configure your product feed with Nebraska tax rules, write optimized product titles and descriptions, and link to Google Ads. For Lincoln product businesses, Google Shopping is typically the highest-ROI first advertising channel.",
            },
            {
              q: "I'm a food producer in Nebraska. Can I ship food products nationally through my Shopify store?",
              a: "Yes, with some planning. Most shelf-stable packaged food products can be shipped nationwide without restriction. Meat and dairy require USDA/FDA compliance and specific labeling. Alcohol has state-by-state shipping restrictions. We've helped Nebraska food producers navigate these requirements many times — we'll flag the compliance considerations specific to your products during the strategy call.",
            },
            {
              q: "Do you offer ongoing maintenance and support after launch?",
              a: "Yes. Every project includes 30 days of post-launch support — bug fixes, adjustments, questions answered same-day. After that, monthly maintenance plans start at $299/month and include theme updates, app maintenance, speed monitoring, and priority support. Many Lincoln clients stay on maintenance plans for years.",
            },
            {
              q: "What makes FactoryJet different from a Nebraska freelancer I found on LinkedIn?",
              a: "A freelancer might be excellent — or they might disappear after the deposit. You have no way to know upfront. We're a 25-person team with project managers, designers, developers, and QA working in parallel. We have 500+ stores as proof. We put a contractual delivery deadline in writing. No freelancer will ever offer you that.",
            },
            {
              q: "I'm outside Lincoln — Kearney, Grand Island, or another Nebraska city. Do you serve me?",
              a: "Absolutely. We serve businesses across all of Nebraska — Lincoln, Omaha, Kearney, Grand Island, Hastings, Norfolk, North Platte, and everywhere else. Nebraska's 5.5% sales tax applies statewide, so there's no configuration difference for non-Lincoln cities. Remote collaboration is our normal — most of our projects are handled entirely over Zoom and Slack.",
            },
            {
              q: "How do I get started?",
              a: "Book a free 45-minute strategy call. We ask about your business, your products, and your goals — then tell you exactly what we'd build and what it would cost. No commitment, no pressure. You'll leave with a clear path forward whether you hire us or not. Click the button below to schedule.",
            },
          ]}
        />

        {/* FINAL CTA */}
        <FinalCTA
          variant="dark"
          heading="Ready to launch your Lincoln Shopify store in 7 days?"
          subheading="Book a free 45-minute strategy call. We'll audit your current setup, recommend the right package, and give you a fixed price — no commitment required."
          primaryCta={{ label: 'Book Your Free Strategy Call', href: '/contact' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
        />

      </main>
      <SiteFooter />
    </>
  )
}
