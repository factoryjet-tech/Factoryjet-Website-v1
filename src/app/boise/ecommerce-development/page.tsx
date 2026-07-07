import type { Metadata } from 'next'
import { ecommerceCityAlternatesUS } from '@/data/hreflangMap'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
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
import { getEcommerceCitySchema } from '@/data/ecommerceCitySchemas'

export const metadata: Metadata = {
  title: 'Shopify Developer Boise, ID — 7-Day Builds, Fixed-Price',
  description: 'Launch a Shopify store in Boise, ID in 7 days, fixed-price. Treasure Valley e-commerce experts — full code ownership. Get a quote.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Developer Boise, ID — 7-Day Builds, Fixed-Price',
    description: 'Launch a Shopify store in Boise, ID in 7 days, fixed-price. Treasure Valley e-commerce experts — full code ownership. Get a quote.',
    url: 'https://factoryjet.com/boise/ecommerce-development',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Shopify Developer Boise ID',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Developer Boise, ID — 7-Day Builds, Fixed-Price',
    description: 'Launch a Shopify store in Boise, ID in 7 days, fixed-price. Treasure Valley e-commerce experts — full code ownership. Get a quote.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/boise/ecommerce-development',
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


const FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Platform & SEO' },
  { key: 'local',     label: 'Local Expertise' },
  { key: 'support',   label: 'Support & Ownership' },
];
export default function Page() {
  return (
    <>
      <SchemaScript />
      <SiteHeader />
      <main className="bg-fj-cream">

        {/* HERO */}
        <Hero
        formSlot={<HeroInlineForm region="us" source="us_boise_ecommerce_development_hero" />}
          eyebrow="E-COMMERCE DEVELOPMENT · BOISE, ID"
          headline="Shopify Developer Boise for Treasure Valley Businesses"
          lead="Boise is one of the fastest-growing cities in America — and the businesses winning online aren't waiting months for a local agency. They're launching professional Shopify stores in 7 days at fixed-price vs local benchmarks."
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={['500+ Stores Launched', '7-Day Delivery', '4.9★ Rated', 'Fixed-Price']}
        />

        {/* LOGO BAR */}
        <LogoBar tagline="Trusted by 500+ e-commerce brands across the US, UK, and UAE" />

        {/* BIG THREE TRUST BLOCK */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="Results that Boise e-commerce brands trust."
        />

        {/* CITY CONTEXT */}
        <CityContextSection
          eyebrow="WHY BOISE E-COMMERCE IS BOOMING"
          headline="The Treasure Valley Is the Fastest-Growing Market in the Mountain West"
          leadParagraphs={[
            "Boise has consistently ranked as one of the top cities in America for business growth, quality of life, and economic development — drawing thousands of new residents from California, Seattle, and Portland every year. The Treasure Valley metro now tops 750,000 people, and the outdoor industry, agriculture technology, food production, and health & wellness sectors are driving enormous e-commerce growth.",
            "Boise consumers are digitally sophisticated, outdoor-lifestyle oriented, and increasingly prefer buying from local Idaho brands online over big-box alternatives. Idaho also has one of the simplest sales tax structures in the country — 6% flat statewide with no local add-ons for most transactions — making Shopify tax configuration clean and compliance straightforward.",
            "If your business sells physical products and you don't have a high-quality Shopify store, you're leaving serious money on the table in one of the country's hottest markets. The brands establishing a strong online presence now will own search rankings and customer relationships as the market matures.",
          ]}
          stats={[
            { value: '#1', label: 'Fastest-growing large city in the US (multiple years)', sourceUrl: 'https://www.census.gov/data/tables/time-series/demo/popest/2020s-total-cities-and-towns.html' },
            { value: '750K+', label: 'Treasure Valley metro population — and growing fast', sourceUrl: 'https://www.idaho.gov/about-idaho/' },
            { value: '6%', label: "Idaho's simple flat sales tax — one of the easiest to configure", sourceUrl: 'https://tax.idaho.gov/taxes/sales-use/' },
          ]}
        />

        {/* SERVICE EXPLANATION */}
        <ServiceExplanation
          eyebrow="WHAT WE BUILD FOR BOISE BUSINESSES"
          headline="Shopify Stores Built for Idaho Buyers — Outdoor, Ag, and Lifestyle"
          lead="Boise e-commerce has a specific character: buyers are active, outdoors-oriented, and they purchase on mobile from the trail, the farm, and the ski lodge. They want stores that load instantly, have clean product photography, and checkout in three taps. We build Shopify stores optimized for exactly this buyer — fast-loading, mobile-first, with Idaho sales tax (6% flat) configured automatically."
          body={
            <>
              <p>
                We integrate Google Shopping so your products appear when Treasure Valley shoppers
                search for what you sell, and we add email automation through Klaviyo so first-time
                buyers become repeat customers. Idaho&apos;s 6% flat state sales tax with no local
                add-ons for most transactions makes configuration clean and compliance
                straightforward — we handle it all during the build.
              </p>
              <p>
                For Boise&apos;s outdoor brands — gear retailers, adventure outfitters, apparel
                companies — we build stores with mobile-first checkout optimized for on-the-go
                buyers, size and variant configurations for outdoor gear, and Google Shopping feeds
                that put your products in front of Treasure Valley shoppers the moment they search.
              </p>
              <p>
                For Idaho&apos;s ag-tech and farm-direct food producers, we build Shopify stores
                with subscription box options, local pickup scheduling, CSA-style delivery
                management, and compliant food labeling. Every store ships in 7 days, fixed-price
                — with 30 days of post-launch support included.
              </p>
            </>
          }
          rightSlot={
            <img
              src="/images/us/boise/ecommerce/service-explanation.webp"
              alt="Shopify development process for Boise Idaho businesses"
              width={1200}
              height={800}
              className="rounded-2xl w-full object-cover"
              loading="lazy"
            />
          }
        />

        {/* STRATEGIC DARK */}
        <StrategicDarkSection
          eyebrow="THE FACTORYJET DIFFERENCE"
          headline="Three Reasons Boise Businesses Choose Us Over Local Agencies"
          lead="Mode Effect, Crush, and Collide are capable Boise agencies — but they're built for larger budgets and longer timelines. FactoryJet launches full Shopify stores in 7 days at a fixed, transparent quote, with AI-powered features no local agency offers at SMB pricing."
          pillars={[
            {
              title: 'Speed Without Compromise',
              body: "Boise's market moves fast — new brands launch every week. We get you live in 7 days with a store that looks like it cost three times as much. Your competitors are still in agency kickoff meetings when you're already making sales.",
            },
            {
              title: 'Price Guarantee',
              body: "We give you a fixed price before you pay a dollar — and it never changes. No hourly billing, no scope creep, no surprise \"we need more for the homepage\" invoices. What we quote is what you pay. Mode Effect and Crush can't say the same.",
            },
            {
              title: 'Conversion-Focused',
              body: "A store that looks good but doesn't convert is an expensive hobby. Every design decision we make — layout, CTAs, checkout flow, upsells — is grounded in e-commerce conversion data from 500+ stores across the US.",
            },
          ]}
        />

        {/* SERVICE JOURNEY */}
        <ServiceJourneyRow
          eyebrow="HOW IT WORKS"
          headline="From First Call to Live Store in 7 Days"
          stages={[
            {
              number: '01',
              title: 'Strategy Call',
              description: 'We spend 45 minutes learning about your products, your Boise customers, and your revenue goals — no sales pitch, just honest advice about what to build.',
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
          headline="Stores We've Built for Businesses Like Yours"
          cards={[
            {
              industry: 'Outdoor Gear & Apparel',
              title: 'Treasure Valley Outdoor Brand',
              description: "Idaho's outdoor economy spans hiking, skiing, mountain biking, and rafting — with buyers who shop on mobile from the trail and expect instant load times and clean product photography. We built a Shopify store with Google Shopping integration, gear variant configurations, and Klaviyo automation that turned first-time buyers into repeat customers.",
              imageSrc: '/images/us/boise/ecommerce/portfolio-1.webp',
              stat1: '+218% revenue in 60 days',
              stat2: '7-day launch',
            },
            {
              industry: 'Farm-Direct Food',
              title: 'Idaho Farm-Direct Producer',
              description: "Farm-direct and Idaho-made food products are one of the fastest-growing e-commerce categories — consumers actively seek out local, traceable products. We built a Shopify store with subscription box options, local pickup scheduling, and CSA-style delivery management, launching in 7 days.",
              imageSrc: '/images/us/boise/ecommerce/portfolio-2.webp',
              stat1: '$19K first-month revenue',
              stat2: 'Launched in 7 days',
            },
            {
              industry: 'Health & Wellness',
              title: 'Boise Health & Wellness Brand',
              description: "Boise's health-conscious demographic is one of the best markets in the Mountain West for wellness brands. We built a Shopify store with subscription billing via Recharge, bundle builders, loyalty programs, and a Klaviyo email sequence that reduced churn and increased customer lifetime value.",
              imageSrc: '/images/us/boise/ecommerce/portfolio-3.webp',
              stat1: '3.8% conversion rate',
              stat2: 'vs 1.4% previous store',
            },
          ]}
          ctaHref="/portfolio"
          ctaLabel="View full portfolio"
        />

        {/* COMPARISON TABLE */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Boise's Leading Shopify Agencies"
          lead="Mode Effect, Crush, and Collide are capable Boise agencies built for larger budgets and longer timelines. FactoryJet delivers a full Shopify store in 7 days — at a fixed, transparent quote — with AI-powered features none of them offer at SMB pricing."
          columns={[
            { label: 'Their pricing' },
            { label: 'FactoryJet', isFactoryJet: true },
            { label: 'Why we cost less' },
          ]}
          rows={[
            {
              feature: 'Mode Effect (Boise)',
              values: [
                'Enterprise-level rates (high-quality Shopify agency, strong portfolio, built for enterprise brands with 8–14 week timelines)',
                'Fixed-price · 7-day delivery',
                'Mode Effect does excellent work for brands with enterprise budgets. FactoryJet delivers the same Shopify quality at fixed-price with a guaranteed 7-day timeline — built for Boise SMBs.',
              ],
            },
            {
              feature: 'Crush (Boise)',
              values: [
                'Premium agency rates (full-service branding and digital agency, Shopify is one of many services, 6–10 week timelines)',
                'Fixed-price · 7-day delivery',
                'Crush is a strong branding agency but not Shopify-specialized. FactoryJet builds exclusively on Shopify and Next.js — faster delivery, lower cost, more e-commerce depth.',
              ],
            },
            {
              feature: 'Collide (Boise)',
              values: [
                'Premium agency rates (marketing and web agency with broad service offering, not Shopify-specialized, 4–8 week timelines)',
                'Fixed-price · 7-day delivery',
                'Collide covers many platforms — you may get a developer who works across Shopify, WordPress, and Squarespace. FactoryJet specializes exclusively in Shopify with 500+ stores built.',
              ],
            },
          ]}
        />

        {/* PRICING */}
        <PricingTiers
          eyebrow="TRANSPARENT PRICING"
          headline="Fixed-Price Shopify Packages for Boise Businesses"
          lead="Boise agency rates for a comparable Shopify build typically run enterprise-level with 6–14 week timelines. FactoryJet delivers a full custom Shopify store in 7 days — at a fixed, transparent quote — with a codebase you own outright. Pricing is scoped to your build, and every project is quoted up front after a free discovery call so you know the full cost before work starts."
          tiers={[
            {
              priceRange: 'Fixed-price',
              name: 'Shopify Standard',
              description: 'A fully custom Shopify store live in 7 days. Best for Boise retail shops, outdoor brands, and specialty food businesses launching their first professional store.',
              features: [
                'Custom Shopify theme (no templates)',
                'Up to 100 products configured',
                'Idaho 6% sales tax auto-setup',
                'Shopify Payments + PayPal + Afterpay',
                'Mobile-first, Lighthouse 90+ performance',
                'JSON-LD schema + AEO SEO setup',
                '30-day post-launch support',
              ],
              cta: { label: 'Get a quote', modal: true, region: 'us' },
            },
            {
              priceRange: 'Fixed-price',
              name: 'Shopify Growth',
              description: 'Advanced Shopify build with subscriptions, Klaviyo email automation, and Google Shopping. Best for growing Treasure Valley brands scaling online revenue.',
              features: [
                'Everything in Shopify Standard',
                'Klaviyo email automation setup',
                'Google Shopping feed configuration',
                'Meta Ads pixel + product catalog',
                'Subscription / recurring order support',
                'Advanced product filtering & search',
                'Priority support + training session',
              ],
              cta: { label: 'Get a quote', modal: true, region: 'us' },
              popular: true,
            },
            {
              priceRange: 'Fixed-price',
              name: 'Custom / Headless',
              description: 'Next.js headless storefront for high-volume Boise brands and ag-tech companies needing maximum performance and custom API integrations.',
              features: [
                'Next.js headless frontend (Lighthouse 95+)',
                'Shopify or Medusa e-commerce backend',
                'ERP / inventory system integration',
                'Multi-location fulfillment logic',
                'AI chatbot trained on your catalog',
                'AEO content for ChatGPT & Perplexity',
                '60-day post-launch support',
              ],
              cta: { label: 'Get a quote', modal: true, region: 'us' },
            },
          ] as const}
        />

        {/* INDUSTRIES GRID */}
        <IndustriesGrid
          eyebrow="INDUSTRIES WE SERVE IN BOISE"
          headline="E-Commerce Development for Boise's Key Industries"
          lead="From Treasure Valley outdoor brands to Idaho ag-tech and health & wellness, Boise's economy spans industries with very different e-commerce needs. FactoryJet has built Shopify stores for each of them."
          sectors={[
            {
              name: 'Outdoor & Adventure',
              description: "Shopify stores for gear brands, apparel companies, and outdoor adventure businesses serving Idaho's active lifestyle community — with mobile-first checkout optimized for on-the-go buyers.",
              example: 'Hiking gear retailers, ski apparel brands, mountain biking shops, and outdoor adventure outfitters serving the Treasure Valley and beyond.',
            },
            {
              name: 'Agriculture & Food',
              description: 'Farm-direct food producers, ag-tech companies, and Idaho potato, dairy, and specialty crop businesses going DTC with subscription boxes, local pickup, and compliant food labeling.',
              example: 'Idaho potato farms, specialty food producers, farm-to-table brands, and ag-tech companies selling B2B equipment and supplies.',
            },
            {
              name: 'Health & Wellness',
              description: "Supplement brands, fitness studios, yoga retailers, and natural wellness companies building subscription stores for Boise's health-conscious demographic — one of the strongest wellness markets in the Mountain West.",
              example: 'Supplement brands, fitness equipment retailers, yoga studios, and natural wellness product companies serving the Treasure Valley.',
            },
            {
              name: 'Downtown Boise Retail',
              description: 'Eighth Street boutiques, Hyde Park shops, and specialty retailers expanding their physical presence online — with POS sync, local pickup, and inventory management built in.',
              example: 'Downtown Boise boutiques, specialty retailers, gift shops, and independent stores in the Eighth Street and Hyde Park districts.',
            },
            {
              name: 'Home & Living',
              description: "Idaho-made furniture, home décor, and artisan goods brands selling to Treasure Valley's growing homeowner market — with product configuration, custom order flows, and local delivery options.",
              example: "Idaho-made furniture brands, home décor stores, artisan goods makers, and interior design product companies serving Boise's fast-growing homeowner market.",
            },
            {
              name: 'Tech & SaaS Products',
              description: "Boise's growing tech sector — hardware products, tech accessories, and SaaS companies with physical product lines needing headless Shopify storefronts with sub-500ms load times.",
              example: "Boise-area hardware startups, tech accessories brands, and SaaS companies with physical product lines in the Treasure Valley's growing tech ecosystem.",
            },
          ]}
        />

        {/* TESTIMONIALS */}
        <TestimonialsSection
          region="us"
          eyebrow="WHAT CLIENTS SAY"
          headline="4.9/5 across 150+ reviews from Boise and beyond."
        />

        {/* FAQ */}
        <FAQ
          eyebrow="COMMON QUESTIONS"
          headline="Common Questions from Boise E-Commerce Businesses"
          categories={FAQ_CATEGORIES}
          items={[
            {
              category: 'local',
              question: 'Do you have experience with Shopify development for Boise and Idaho businesses?',
              answer: "Yes — we've built stores for businesses across the Treasure Valley from outdoor brands to Boise food producers to specialty retailers. We understand the Idaho buyer, the outdoor lifestyle orientation of the market, and the specific tax and compliance rules Idaho businesses need to navigate.",
            },
            {
              category: 'technical',
              question: 'Boise is growing fast. Is now a good time to launch an e-commerce store?',
              answer: "There's never been a better time. Boise was the #1 fastest-growing city in the US for several consecutive years, and the Treasure Valley market now exceeds 750,000 people. New residents from California, Seattle, and Portland bring strong online shopping habits and higher-than-average digital purchasing intent. Brands that establish a strong online presence now will own search rankings and customer relationships as the market matures.",
            },
            {
              category: 'pricing',
              question: "What's Idaho's sales tax, and how does it work for an online store?",
              answer: "Idaho has a 6% flat state sales tax with no local add-ons in most jurisdictions — one of the simplest structures in the Mountain West. For your Shopify store, we configure automatic tax collection for Idaho buyers at checkout. If you sell into other states and exceed those states' economic nexus thresholds (typically $100K in sales or 200 transactions), you'll need to collect those states' taxes too. We configure your store for Idaho from day one and can add multi-state tax handling if needed.",
            },
            {
              category: 'local',
              question: 'How does the 7-day delivery guarantee work?',
              answer: "Once you approve your project proposal and send the deposit, the 7-day clock starts. We design, build, configure, and launch your full Shopify store in that window. If we miss the deadline for any reason on our end, you get a full refund. No exceptions, no excuses. We've never had to give one.",
            },
            {
              category: 'local',
              question: "I've heard Mode Effect is the best Shopify agency in Boise. Why should I consider FactoryJet?",
              answer: "Mode Effect does excellent work — for enterprise brands with large budgets and 3-month timelines. If that's you, they're a solid choice. If you're a growing Boise SMB that needs a great Shopify store launched fast at a price that makes business sense, that's our lane. We specialize exclusively in Shopify, launch in 7 days, fixed-price, and we put the deadline in writing.",
            },
            {
              category: 'local',
              question: 'Boise has a lot of outdoor brands. Do you have experience with that category?',
              answer: "Outdoor and active lifestyle is one of our strongest verticals. We understand what outdoor buyers care about: fast load times on mobile in the field, clean gear photography, detailed technical specs, size guides, and a checkout that works with Apple Pay and Google Pay. We also know how to structure collections, handle gear variants (size × color × material), and integrate with outdoor-specific fulfillment partners.",
            },
            {
              category: 'local',
              question: "I'm a farm or food producer in the Treasure Valley. Can I sell direct-to-consumer online?",
              answer: "Absolutely. Farm-direct and Idaho-made food products are one of the fastest-growing e-commerce categories — consumers actively seek out local, traceable products. We build Shopify stores with subscription box options, local pickup scheduling, CSA-style delivery management, and compliant food labeling. Idaho has specific rules for cottage food businesses that we factor into the store setup.",
            },
            {
              category: 'local',
              question: 'Can you build a Shopify store for a health and wellness brand in Boise?',
              answer: "Yes — health, supplement, and wellness brands are a major segment for us. We build stores with subscription/recurring order support (via Recharge or Shopify Subscriptions), compliance-friendly product descriptions that avoid FTC issues, bundle builders, loyalty programs, and strong email automation through Klaviyo. Boise's health-conscious demographic is one of the best markets in the Mountain West for this category.",
            },
            {
              category: 'local',
              question: 'How do I handle shipping to rural Idaho buyers?',
              answer: "Shopify handles carrier-calculated shipping automatically — you set up your preferred carriers (USPS, UPS, FedEx), and the correct rate is calculated at checkout based on the buyer's location. For rural Idaho addresses, USPS Priority Mail is often the most economical. We configure your shipping zones, rates, and any free-shipping thresholds during the build.",
            },
            {
              category: 'pricing',
              question: 'What platform should I use — Shopify, WooCommerce, or BigCommerce?',
              answer: "For almost every Boise SMB, Shopify is the right answer. It handles Idaho sales tax automatically, runs fast without a dedicated server, has the best app ecosystem for the integrations Boise businesses need (Klaviyo, Google Shopping, Meta Ads), and requires no ongoing technical maintenance. WooCommerce makes sense only if you're committed to WordPress and have a developer on retainer.",
            },
            {
              category: 'support',
              question: 'Do you offer ongoing Shopify maintenance and support after launch?',
              answer: "Yes. Every project includes 30 days of post-launch support — bug fixes, adjustments, and questions answered same-day. After that, we offer monthly maintenance plans covering theme updates, app updates, speed monitoring, and priority support.",
            },
            {
              category: 'pricing',
              question: 'How much does a Shopify store typically cost in Boise, Idaho?',
              answer: "Local Boise agencies charge enterprise-level rates for a Shopify build, with timelines of 6–14 weeks. Freelancers on Upwork run far cheaper but with highly variable quality. FactoryJet delivers the same quality at a fraction of the cost, fixed-price and scoped to your build, in 7 days, backed by a money-back guarantee. The main cost drivers are page count, integrations, and design complexity, and every project is quoted up front after a free discovery call so you know the full cost before work starts.",
            },
            {
              category: 'technical',
              question: 'Can you set up Google Shopping for my Boise product business?',
              answer: "Yes — Google Shopping setup is included in our Growth and Headless packages and available as a paid add-on for Standard. We create your Google Merchant Center account, configure the product feed, write optimized product titles and descriptions, and link it to Google Ads. For Treasure Valley product businesses, Google Shopping is often the highest-ROI first channel to activate.",
            },
            {
              category: 'local',
              question: 'I already have a Shopify store but it\'s slow and not converting. Can you fix it?',
              answer: "Yes — we start with a free audit that takes 24 hours and costs nothing. We analyze your speed scores (Core Web Vitals), checkout abandonment rate, mobile UX, conversion funnel, and theme code. Then we give you a specific list of what's broken and a fixed price to fix it.",
            },
            {
              category: 'included',
              question: 'Do you build Shopify stores with subscription or recurring order capability?',
              answer: "Yes. Subscription commerce is growing fast — especially for consumable products like supplements, food, pet supplies, and outdoor consumables. We integrate Shopify Subscriptions or Recharge depending on your complexity needs. We set up the subscriber UX, discount logic, pause/skip/cancel flows, and the Klaviyo email sequences that reduce churn.",
            },
            {
              category: 'included',
              question: 'What if I need my store to work with my existing inventory or POS system?',
              answer: "We handle integrations with most major POS and inventory systems — Shopify POS, Square, Lightspeed, Clover, and custom ERPs. If you're a downtown Boise retailer running a physical store and want to sync online and offline inventory automatically, this is a standard part of our Growth and Headless builds.",
            },
            {
              category: 'local',
              question: "I'm in Nampa or Meridian, not Boise proper. Do you still serve my area?",
              answer: "Absolutely — we serve the entire Treasure Valley metro: Boise, Meridian, Nampa, Caldwell, Eagle, Star, Kuna, and Garden City. Idaho's 6% flat tax applies everywhere in the state, so there's no difference in tax configuration for different Treasure Valley cities.",
            },
            {
              category: 'local',
              question: 'How do I get started with FactoryJet?',
              answer: "Book a 45-minute strategy call. We'll learn about your business, your products, and your goals — then tell you exactly what we'd build and what it costs. You'll leave the call with clarity on the right path forward, no strings attached.",
            },
            {
              category: 'included',
              question: 'What if I need a custom web application, not just a Shopify store?',
              answer: "We build custom web apps, CRMs, booking systems, and complex integrations beyond standard Shopify. If you need a dealer portal, a product configurator, a subscription management dashboard, or custom API connections, our full-stack team handles it. Start with a strategy call and describe your vision.",
            },
            {
              category: 'local',
              question: "Can you help a Boise startup that's pre-revenue launch their first e-commerce store?",
              answer: "Yes — startups and pre-revenue businesses are welcome. Many of our best client relationships started from day zero. We'll be honest about what you need vs. what you don't — a pre-revenue business usually needs our Standard package to validate the product before investing in advanced features.",
            },
            {
              category: 'local',
              question: 'Do I need a business license in Idaho before launching an online store?',
              answer: "Idaho doesn't require a general state business license, but you'll need to register with the Idaho State Tax Commission to collect and remit Idaho sales tax — a simple online process. Depending on your city, you may need a local business license. Nampa, Meridian, and Boise each have their own requirements. We handle the technical store configuration; the business registration side is something we leave to licensed professionals.",
            },
            {
              category: 'local',
              question: 'Who is the best ecommerce development company in Boise?',
              answer:
                'For SMBs and DTC brands, FactoryJet makes a strong case: fixed-price builds, senior engineers on every project, and full code ownership from day one. Any ecommerce website development company in Boise you compare — or any ecommerce solution company in Boise — should pass three checks: who writes the code, is pricing fixed up front, and do you own the store at the end. That is how to find the best ecommerce website development company in Boise and the best ecommerce solution company in Boise for your catalog.',
            },
            {
              category: 'pricing',
              question: 'Should I hire ecommerce developer in Boise or work with an agency?',
              answer:
                'A solo developer can assemble a basic store, but a production store needs design, payments, tax configuration, shipping, and SEO working together. A senior-led team delivers all of it at a fixed price. If you do hire ecommerce developer in Boise directly, ask for store speed scores from past builds before committing.',
            },
          ]}
        />

        {/* FINAL CTA */}
        <EcommerceCityLinksUS currentCity="boise" />
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Launch Your Boise Shopify Store in 7 Days?"
          sub="Book a 45-minute strategy call. We'll audit your current setup, recommend the right package, and give you a fixed price — no commitment required."
          primaryCta={{ label: 'Get a Free Shopify Audit', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
        />

      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  )
}
