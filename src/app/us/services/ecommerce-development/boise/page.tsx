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
  title: 'Shopify Developer Boise ID | E-Commerce Website from $2,999 | FactoryJet',
  description: 'Best Shopify developer in Boise, Idaho: e-commerce websites live in 7 days from $2,999. Treasure Valley specialists — Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Developer Boise ID | E-Commerce Website from $2,999 | FactoryJet',
    description: 'Best Shopify developer in Boise, Idaho: e-commerce websites live in 7 days from $2,999. Treasure Valley specialists — Shopify, WooCommerce & AI. Free audit.',
    url: 'https://factoryjet.com/us/services/ecommerce-development/boise',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Shopify Developer Boise ID',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Developer Boise ID | E-Commerce from $2,999 | FactoryJet',
    description: 'Best Shopify developer in Boise Idaho: stores live in 7 days from $2,999. Treasure Valley e-commerce specialists. Free audit.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ecommerce-development/boise',
    languages: ecommerceCityAlternatesUS['boise'],
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
      dangerouslySetInnerHTML={{ __html: getEcommerceCitySchema('boise') }}
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
          eyebrow="E-COMMERCE DEVELOPMENT · BOISE, ID"
          headline="Shopify Developer Boise for Treasure Valley Businesses"
          subheadline="Boise is one of the fastest-growing cities in America — and the businesses winning online aren't waiting months for a local agency. They're launching professional Shopify stores in 7 days at 60% less than what Boise agencies charge."
          primaryCta={{ label: 'Get Your Free Store Audit', href: '/contact' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustBadges={['500+ Stores Launched', '7-Day Delivery', '4.9★ Rated', 'From $2,999']}
        />

        {/* LOGO BAR */}
        <LogoBar
          heading="Trusted by businesses across Boise, Nampa, Meridian & the Treasure Valley"
        />

        {/* BIG THREE TRUST BLOCK */}
        <BigThreeTrustBlock
          blocks={[
            {
              stat: '7 Days',
              label: 'Store Goes Live',
              description: 'From kickoff call to a fully live Shopify store in one week — guaranteed. While Boise agencies schedule you for Q3, we launch in Q1.',
            },
            {
              stat: '60% Less',
              label: 'Than Local Agencies',
              description: 'Boise web agencies charge $7,000–$18,000 for a Shopify build. We deliver the same quality starting at $2,999 — with better results.',
            },
            {
              stat: '500+',
              label: 'Stores Built',
              description: 'From Treasure Valley outdoor brands and ag-tech companies to downtown Boise boutiques and Boise State vendor shops.',
            },
          ]}
        />

        {/* CITY CONTEXT */}
        <CityContextSection
          eyebrow="WHY BOISE E-COMMERCE IS BOOMING"
          heading="The Treasure Valley is the fastest-growing market in the Mountain West"
          body="Boise has consistently ranked as one of the top cities in America for business growth, quality of life, and economic development — drawing thousands of new residents and businesses from California, Seattle, and Portland every year. The Treasure Valley metro now tops 750,000 people, and the outdoor industry, agriculture technology, food production, and health & wellness sectors are driving enormous e-commerce growth. Boise consumers are digitally sophisticated, outdoor-lifestyle oriented, and increasingly prefer buying from local Idaho brands online over big-box alternatives. If your business sells physical products and you don't have a high-quality Shopify store, you're leaving serious money on the table in one of the country's hottest markets."
          stats={[
            { value: '#1', label: 'Fastest-growing large city in the US (multiple years)' },
            { value: '750K+', label: 'Treasure Valley metro population — and growing fast' },
            { value: '6%', label: "Idaho's simple flat sales tax — one of the easiest to configure" },
          ]}
        />

        {/* SERVICE EXPLANATION */}
        <ServiceExplanation
          eyebrow="WHAT WE BUILD FOR BOISE BUSINESSES"
          heading="Shopify stores built for Idaho buyers — outdoor, ag, and lifestyle"
          body="Boise e-commerce has a specific character: buyers are active, outdoors-oriented, and they purchase on mobile from the trail, the farm, and the ski lodge. They want stores that load instantly, have clean product photography, and checkout in three taps. They're also fiercely loyal to Idaho brands and will choose a local product over an Amazon equivalent if the buying experience is good. We build Shopify stores optimized for exactly this buyer — fast-loading, mobile-first, with Idaho sales tax (6% flat) configured automatically. We integrate Google Shopping so your products appear when Treasure Valley shoppers search for what you sell, and we add email automation through Klaviyo so first-time buyers become repeat customers. Idaho also has one of the simplest sales tax structures in the country — 6% flat statewide with no local add-ons for most transactions — which makes configuration clean and compliance straightforward."
          features={[
            'Custom Shopify theme — no off-the-shelf templates',
            'Idaho 6% flat sales tax auto-configured',
            'Mobile-first for outdoor & on-the-go buyers',
            'Google Shopping & Meta Ads integration',
            'Klaviyo email automation setup',
            'Product photography guidance & optimization',
            'Outdoor & lifestyle brand design expertise',
            '30-day post-launch support included',
          ]}
          rightSlot={
            <img
              src="/images/us/services/service-web-design-process.webp"
              alt="Shopify development process for Boise Idaho businesses"
              className="rounded-2xl w-full object-cover"
              loading="lazy"
            />
          }
        />

        {/* STRATEGIC DARK */}
        <StrategicDarkSection
          eyebrow="THE FACTORYJET DIFFERENCE"
          heading="Three reasons Boise businesses choose us over local agencies"
          pillars={[
            {
              icon: 'zap',
              title: 'Speed Without Compromise',
              description: "Boise's market moves fast — new brands launch every week. We get you live in 7 days with a store that looks like it cost three times as much. Your competitors are still in agency kickoff meetings.",
            },
            {
              icon: 'shield',
              title: 'Price Guarantee',
              description: 'We give you a fixed price before you pay a dollar — and it never changes. No hourly billing, no scope creep, no "we need another $3K for the homepage." What we quote is what you pay.',
            },
            {
              icon: 'trending-up',
              title: 'Conversion-Focused',
              description: "A store that looks good but doesn't convert is an expensive hobby. Every design decision we make — layout, CTAs, checkout flow, upsells — is grounded in e-commerce conversion data from 500+ stores.",
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
              description: 'We spend 45 minutes learning about your products, your Boise customers, and your revenue goals — no sales pitch, just honest advice.',
            },
            {
              number: '02',
              title: 'Fixed-Price Proposal',
              description: 'You get a detailed proposal with fixed price, exact delivery date, and full scope — before you commit to anything or pay a dollar.',
            },
            {
              number: '03',
              title: 'Design & Build (Days 1–5)',
              description: 'We design your custom theme, configure all products, set up Idaho tax rules, connect your payment gateway, and integrate your marketing tools.',
            },
            {
              number: '04',
              title: 'Review & Revisions (Day 6)',
              description: 'You get a private preview link and 24 hours to request changes. We make all revisions same-day so you can sleep on the final version.',
            },
            {
              number: '05',
              title: 'Launch Day (Day 7)',
              description: 'We push live, submit to Google Search Console, run mobile and desktop QA, and hand you the keys with full documentation and a 30-day support window.',
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
              title: 'Outdoor Gear & Apparel Brand',
              category: 'Shopify · DTC',
              result: '218% revenue increase in 60 days post-launch',
            },
            {
              image: '/images/us/austin/ecommerce/portfolio-2.webp',
              title: 'Farm-Direct Food Producer',
              category: 'Shopify · Subscription + DTC',
              result: 'Launched in 7 days — $19K first-month revenue',
            },
            {
              image: '/images/us/austin/ecommerce/portfolio-3.webp',
              title: 'Health & Wellness Brand',
              category: 'Shopify · DTC + Subscriptions',
              result: '3.8% conversion rate vs 1.4% previous store',
            },
          ]}
        />

        {/* COMPARISON TABLE */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          heading="FactoryJet vs. Boise's leading Shopify agencies"
          competitors={[
            {
              name: 'Mode Effect (Boise)',
              price: '$8,000–$25,000',
              timeline: '8–14 weeks',
              notes: 'High-quality Shopify agency with a strong portfolio. Great for established brands with large budgets. Slow and expensive for most Boise SMBs.',
            },
            {
              name: 'Crush (Boise)',
              price: '$6,000–$15,000',
              timeline: '6–10 weeks',
              notes: 'Full-service branding + digital agency. Shopify is one of many services. Timelines run long and pricing reflects their overhead.',
            },
            {
              name: 'Collide (Boise)',
              price: '$5,000–$12,000',
              timeline: '4–8 weeks',
              notes: 'Marketing and web agency with broad service offering. Not Shopify-specialized — you may get a developer who works across platforms.',
            },
          ]}
          ourPrice="From $2,999"
          ourTimeline="7 Days — Guaranteed"
          ourNotes="Shopify-only specialists. 500+ stores built. Fixed price, no surprises. 30-day support. Same quality as agencies charging 5x more."
        />

        {/* PRICING */}
        <PricingTiers
          eyebrow="TRANSPARENT PRICING"
          heading="Fixed-price Shopify packages for Boise businesses"
          id="pricing"
          tiers={[
            {
              name: 'Standard',
              price: '$2,999–$4,999',
              timeline: '7 days',
              description: 'Perfect for Boise retail shops, outdoor brands, and specialty food businesses launching their first professional Shopify store.',
              features: [
                'Custom Shopify theme (no templates)',
                'Up to 50 products configured',
                'Idaho 6% sales tax auto-setup',
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
              description: 'For growing Treasure Valley brands — includes Klaviyo email automation, Google Shopping, and advanced conversion optimization.',
              features: [
                'Everything in Standard',
                'Up to 200 products + variants',
                'Klaviyo email automation setup',
                'Google Shopping feed configuration',
                'Meta Ads pixel + product catalog',
                'Subscription / recurring order support',
                'Advanced product filtering & search',
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
              description: 'Enterprise Shopify for high-volume Boise brands and ag-tech companies needing maximum performance and custom functionality.',
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
          eyebrow="INDUSTRIES WE SERVE IN BOISE"
          heading="From Treasure Valley outdoors to Idaho ag-tech"
          sectors={[
            {
              icon: 'mountain',
              title: 'Outdoor & Adventure',
              description: "Gear brands, apparel companies, and outdoor adventure businesses serving Idaho's active lifestyle community.",
            },
            {
              icon: 'tractor',
              title: 'Agriculture & Food',
              description: 'Farm-direct food producers, ag-tech companies, and Idaho potato, dairy, and specialty crop businesses going DTC.',
            },
            {
              icon: 'heart',
              title: 'Health & Wellness',
              description: 'Supplement brands, fitness studios, yoga retailers, and natural wellness companies building subscription stores.',
            },
            {
              icon: 'store',
              title: 'Downtown Boise Retail',
              description: 'Eighth Street boutiques, Hyde Park shops, and specialty retailers expanding their physical presence online.',
            },
            {
              icon: 'home',
              title: 'Home & Living',
              description: "Idaho-made furniture, home décor, and artisan goods brands selling to Treasure Valley's growing homeowner market.",
            },
            {
              icon: 'cpu',
              title: 'Tech & SaaS Products',
              description: "Boise's growing tech sector — hardware products, tech accessories, and SaaS companies with physical product lines.",
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
          heading="Everything Boise business owners ask before hiring us"
          items={[
            {
              q: 'Do you have experience with Shopify development for Boise and Idaho businesses?',
              a: "Yes — we've built stores for businesses across the Treasure Valley from outdoor brands to Boise food producers to specialty retailers. We understand the Idaho buyer, the outdoor lifestyle orientation of the market, and the specific tax and compliance rules Idaho businesses need to navigate.",
            },
            {
              q: "Boise is growing fast. Is now a good time to launch an e-commerce store?",
              a: "There's never been a better time. Boise was the #1 fastest-growing city in the US for several consecutive years, and the Treasure Valley market now exceeds 750,000 people. New residents from California, Seattle, and Portland bring strong online shopping habits and higher-than-average digital purchasing intent. Brands that establish a strong online presence now will own search rankings and customer relationships as the market matures.",
            },
            {
              q: "What's Idaho's sales tax, and how does it work for an online store?",
              a: "Idaho has a 6% flat state sales tax with no local add-ons in most jurisdictions — one of the simplest structures in the Mountain West. For your Shopify store, we configure automatic tax collection for Idaho buyers at checkout. If you sell into other states and exceed those states' economic nexus thresholds (typically $100K in sales or 200 transactions), you'll need to collect those states' taxes too. We configure your store for Idaho from day one and can add multi-state tax handling if needed.",
            },
            {
              q: "How does the 7-day delivery guarantee work?",
              a: "Once you approve your project proposal and send the deposit, the 7-day clock starts. We design, build, configure, and launch your full Shopify store in that window. If we miss the deadline for any reason on our end, you get a full refund. No exceptions, no excuses. We've never had to give one.",
            },
            {
              q: "I've heard Mode Effect is the best Shopify agency in Boise. Why should I consider FactoryJet?",
              a: "Mode Effect does excellent work — for enterprise brands with $15K+ budgets and 3-month timelines. If that's you, they're a solid choice. If you're a growing Boise SMB that needs a great Shopify store launched fast at a price that makes business sense, that's our lane. We specialize exclusively in Shopify, launch in 7 days, start at $2,999, and we put the deadline in writing.",
            },
            {
              q: "Boise has a lot of outdoor brands. Do you have experience with that category?",
              a: "Outdoor and active lifestyle is one of our strongest verticals. We understand what outdoor buyers care about: fast load times on mobile in the field, clean gear photography, detailed technical specs, size guides, and a checkout that works with Apple Pay and Google Pay. We also know how to structure collections, handle gear variants (size × color × material), and integrate with outdoor-specific fulfillment partners.",
            },
            {
              q: "I'm a farm or food producer in the Treasure Valley. Can I sell direct-to-consumer online?",
              a: "Absolutely. Farm-direct and Idaho-made food products are one of the fastest-growing e-commerce categories — consumers actively seek out local, traceable products. We build Shopify stores with subscription box options, local pickup scheduling, CSA-style delivery management, and compliant food labeling. Idaho has specific rules for cottage food businesses that we factor into the store setup.",
            },
            {
              q: "Can you build a Shopify store for a health and wellness brand in Boise?",
              a: "Yes — health, supplement, and wellness brands are a major segment for us. We build stores with subscription/recurring order support (via Recharge or Shopify Subscriptions), compliance-friendly product descriptions that avoid FTC issues, bundle builders, loyalty programs, and strong email automation through Klaviyo. Boise's health-conscious demographic is one of the best markets in the Mountain West for this category.",
            },
            {
              q: "How do I handle shipping to rural Idaho buyers?",
              a: "Shopify handles carrier-calculated shipping automatically — you set up your preferred carriers (USPS, UPS, FedEx), and the correct rate is calculated at checkout based on the buyer's location. For rural Idaho addresses, USPS Priority Mail is often the most economical. We configure your shipping zones, rates, and any free-shipping thresholds during the build. We also integrate with ShipStation or EasyPost for high-volume operations.",
            },
            {
              q: "What platform should I use — Shopify, WooCommerce, or BigCommerce?",
              a: "For almost every Boise SMB, Shopify is the right answer. It handles Idaho sales tax automatically, runs fast without a dedicated server, has the best app ecosystem for the integrations Boise businesses need (Klaviyo, Google Shopping, Meta Ads), and requires no ongoing technical maintenance. WooCommerce makes sense only if you're committed to WordPress and have a developer on retainer. BigCommerce is a solid platform but has a smaller app ecosystem and fewer Shopify developers available locally.",
            },
            {
              q: "Do you offer ongoing Shopify maintenance and support after launch?",
              a: "Yes. Every project includes 30 days of post-launch support — bug fixes, adjustments, and questions answered same-day. After that, we offer monthly maintenance plans from $299/month covering theme updates, app updates, speed monitoring, and priority support. Most of our Boise clients stay on a maintenance plan because it means they never have to worry about their store breaking.",
            },
            {
              q: "How much does a Shopify store typically cost in Boise, Idaho?",
              a: "Local Boise agencies charge $6,000–$25,000 for a Shopify build, with timelines of 6–14 weeks. Freelancers on Upwork run $1,500–$6,000 with highly variable quality. We charge $2,999–$15,999 depending on scope, deliver in 7 days, and back it with a money-back guarantee. You get better-than-agency quality at below-freelancer pricing.",
            },
            {
              q: "Can you set up Google Shopping for my Boise product business?",
              a: "Yes — Google Shopping setup is included in our Growth and Headless packages and available as a paid add-on for Standard. We create your Google Merchant Center account, configure the product feed, write optimized product titles and descriptions, and link it to Google Ads. For Treasure Valley product businesses, Google Shopping is often the highest-ROI first channel to activate.",
            },
            {
              q: "I already have a Shopify store but it's slow and not converting. Can you fix it?",
              a: "Yes — we start with a free audit that takes 24 hours and costs nothing. We analyze your speed scores (Core Web Vitals), checkout abandonment rate, mobile UX, conversion funnel, and theme code. Then we give you a specific list of what's broken and a fixed price to fix it. Common issues we find: heavy theme code, unoptimized images, broken mobile checkout, missing upsells, and poor product page structure.",
            },
            {
              q: "Do you build Shopify stores with subscription or recurring order capability?",
              a: "Yes. Subscription commerce is growing fast — especially for consumable products like supplements, food, pet supplies, and outdoor consumables. We integrate Shopify Subscriptions or Recharge depending on your complexity needs. We set up the subscriber UX, discount logic, pause/skip/cancel flows, and the Klaviyo email sequences that reduce churn. Boise's health and wellness market is especially strong for subscription models.",
            },
            {
              q: "What if I need my store to work with my existing inventory or POS system?",
              a: "We handle integrations with most major POS and inventory systems — Shopify POS, Square, Lightspeed, Clover, and custom ERPs. If you're a downtown Boise retailer running a physical store and want to sync online and offline inventory automatically, this is a standard part of our Growth and Headless builds.",
            },
            {
              q: "I'm in Nampa or Meridian, not Boise proper. Do you still serve my area?",
              a: "Absolutely — we serve the entire Treasure Valley metro: Boise, Meridian, Nampa, Caldwell, Eagle, Star, Kuna, and Garden City. Idaho's 6% flat tax applies everywhere in the state, so there's no difference in tax configuration for different Treasure Valley cities.",
            },
            {
              q: "How do I get started with FactoryJet?",
              a: "Book a free 45-minute strategy call. We'll learn about your business, your products, and your goals — then tell you exactly what we'd build and what it costs. You'll leave the call with clarity on the right path forward, no strings attached. Hit the button below.",
            },
            {
              q: "What if I need a custom web application, not just a Shopify store?",
              a: "We build custom web apps, CRMs, booking systems, and complex integrations beyond standard Shopify. If you need a dealer portal, a product configurator, a subscription management dashboard, or custom API connections, our full-stack team handles it. Start with a strategy call and describe your vision.",
            },
            {
              q: "Can you help a Boise startup that's pre-revenue launch their first e-commerce store?",
              a: "Yes — startups and pre-revenue businesses are welcome. Many of our best client relationships started from day zero. We'll be honest about what you need vs. what you don't — a pre-revenue business usually needs our Standard package at $2,999 to validate the product before investing in advanced features. Get the basics right, launch fast, and upgrade as you grow.",
            },
            {
              q: "Do I need a business license in Idaho before launching an online store?",
              a: "Idaho doesn't require a general state business license, but you'll need to register with the Idaho State Tax Commission to collect and remit Idaho sales tax — a simple online process. Depending on your city, you may need a local business license. Nampa, Meridian, and Boise each have their own requirements. We recommend consulting a local CPA before launch. We handle the technical store configuration; the business registration side is something we leave to licensed professionals.",
            },
          ]}
        />

        {/* FINAL CTA */}
        <FinalCTA
          variant="dark"
          heading="Ready to launch your Boise Shopify store in 7 days?"
          subheading="Book a free 45-minute strategy call. We'll audit your current setup, recommend the right package, and give you a fixed price — no commitment required."
          primaryCta={{ label: 'Book Your Free Strategy Call', href: '/contact' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
        />

      </main>
      <SiteFooter />
    </>
  )
}
