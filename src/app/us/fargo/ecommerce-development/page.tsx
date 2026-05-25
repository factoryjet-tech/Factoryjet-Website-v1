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
import EcommerceCityLinksUS from '@/components/v2/EcommerceCityLinksUS'
import { getEcommerceCitySchema } from '@/data/ecommerceCitySchemas'

export const metadata: Metadata = {
  title: 'Shopify Developer Fargo ND — Live in 7 Days, From $2,999',
  description: 'Need a Shopify store live in Fargo, ND in 7 days? Fixed-price builds from $2,999. Silicon Prairie e-commerce experts. 500+ launched. Book a free strategy call.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Developer Fargo ND — Live in 7 Days, From $2,999',
    description: 'Need a Shopify store live in Fargo, ND in 7 days? Fixed-price builds from $2,999. Silicon Prairie e-commerce experts. 500+ launched. Book a free strategy call.',
    url: 'https://factoryjet.com/us/fargo/ecommerce-development',
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
    title: 'Shopify Developer Fargo ND — Live in 7 Days, From $2,999',
    description: 'Need a Shopify store live in Fargo, ND in 7 days? Fixed-price builds from $2,999. Silicon Prairie e-commerce experts. 500+ launched. Book a free strategy call.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/fargo/ecommerce-development',
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
          eyebrow="E-COMMERCE DEVELOPMENT · FARGO, ND"
          headline="Shopify Developer Fargo for Silicon Prairie Businesses"
          lead="Fargo's fastest-growing brands are ditching slow local agencies and launching high-converting Shopify stores in 7 days — at fixed-price vs local benchmarks."
          primaryCta={{ label: 'Get Your Free Store Audit', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={['500+ Stores Launched', '7-Day Delivery', '4.9★ Rated', 'From $2,999']}
        />

        {/* LOGO BAR */}
        <LogoBar tagline="Trusted by 500+ e-commerce brands across the US, UK, and UAE" />

        {/* BIG THREE TRUST BLOCK */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="Results that Fargo e-commerce brands trust."
        />

        {/* CITY CONTEXT */}
        <CityContextSection
          eyebrow="WHY FARGO E-COMMERCE IS DIFFERENT"
          headline="The Silicon Prairie Advantage — and What It Means for Your Online Store"
          leadParagraphs={[
            "Fargo isn't just a cold-weather city anymore. Microsoft TechSpark chose Fargo as one of its five pilot cities, the Emerging Prairie ecosystem has produced dozens of funded startups, and the Fargo-Moorhead metro is the fastest-growing market between Minneapolis and Seattle.",
            "Ag-tech companies, Bobcat-country equipment dealers, and manufacturing firms that once sold purely offline are finally realizing their customers are searching online first. The businesses winning in this market aren't the ones with the biggest ad budgets — they're the ones with a Shopify store that loads fast, converts on mobile, and handles cross-border ND–MN tax rules automatically.",
            "North Dakota charges 5% state sales tax and Fargo adds 2% city tax — a combined 7%. Across the Red River, Moorhead buyers are subject to Minnesota's 6.875% state rate plus local taxes. Getting both right from day one is table stakes for Fargo e-commerce. That's exactly what we configure.",
          ]}
          stats={[
            { value: 'Top 5', label: 'Microsoft TechSpark city — major tech investment hub', sourceUrl: 'https://www.microsoft.com/en-us/corporate-responsibility/techspark' },
            { value: '$25B+', label: 'Annual ag-tech & manufacturing output in the region', sourceUrl: 'https://www.fmgov.com/economic-development/' },
            { value: '250K+', label: 'Fargo-Moorhead metro population — cross-border market', sourceUrl: 'https://www.census.gov/data/tables/time-series/demo/popest/2020s-total-cities-and-towns.html' },
          ]}
        />

        {/* SERVICE EXPLANATION */}
        <ServiceExplanation
          eyebrow="WHAT WE BUILD FOR FARGO BUSINESSES"
          headline="A Shopify Store Engineered for North Dakota Buyers — and Minnesota Ones Too"
          lead="Most Fargo e-commerce businesses run into the same wall: generic themes, weeks spent trying to configure ND's 5% state tax plus Fargo's 2% city tax, and the realization they also need to handle Minnesota buyers across the river in Moorhead. We've solved this dozens of times. Our Fargo Shopify builds include automatic multi-state tax configuration for ND + MN from day one."
          body={
            <>
              <p>
                For ag-tech companies, equipment dealers, and manufacturing firms, we build B2B
                wholesale portals with tiered pricing by customer group, volume discounts, minimum
                order quantities, and net payment terms. Your wholesale buyers get a separate login
                experience from retail customers — a standard feature at no extra charge.
              </p>
              <p>
                For downtown Fargo retailers and craft beverage brands, we build mobile-first
                checkout designed for the rural buyer ordering on a phone with limited connectivity,
                full Google Shopping and Meta Ads integration, and Klaviyo email automation that
                turns first-time buyers into repeat customers.
              </p>
              <p>
                Every Fargo Shopify store ships with AEO content optimized for ChatGPT and
                Perplexity, JSON-LD schema, Core Web Vitals 90+ scores, and a 30-day support
                window. You get a revenue engine — not a brochure.
              </p>
            </>
          }
          rightSlot={
            <img
              src="/images/us/services/service-web-design-process.webp"
              alt="Shopify development process for Fargo ND businesses"
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
          headline="Three Reasons Silicon Prairie Businesses Choose Us Over Local Agencies"
          lead="Onsharp and Bluestem are capable agencies — but built for enterprise clients and WordPress. FactoryJet launches full Shopify stores in 7 days from $2,999, 50–60% below the Fargo agency benchmark, with AI-powered features no local agency offers at SMB pricing."
          pillars={[
            {
              title: 'AI-Native Stores',
              body: 'Every store ships with AI product descriptions, AI-powered search, and smart recommendation engines. Your competitors are still using keyword-stuffed copy written in 2018. Your store will outrank and outconvert them from day one.',
            },
            {
              title: 'Guaranteed Delivery',
              body: 'We contractually guarantee your store goes live in 7 days or you get a full refund. No other Shopify developer in Fargo offers this. We do it on every single project — 500+ times and counting.',
            },
            {
              title: 'Built to Convert',
              body: "Beautiful isn't enough. Every section, button, and product page is designed around conversion rate optimization principles. A store that doesn't sell isn't a store — it's a brochure. We don't build brochures.",
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
              title: 'Free Strategy Call',
              description: 'We spend 45 minutes learning your products, your customers, and your revenue goals. No sales pitch — just honest advice on what you actually need to build.',
            },
            {
              number: '02',
              title: 'Proposal in 24 Hours',
              description: 'You get a fixed-price proposal, exact delivery date, and a complete sitemap before we take a dollar. No hourly billing surprises, no scope creep.',
            },
            {
              number: '03',
              title: 'Design & Build (Days 1–5)',
              description: 'We design, build, and configure your full Shopify store — theme, products, ND+MN tax settings, payment gateway, and all integrations.',
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
          headline="Stores We've Built for Businesses Like Yours"
          cards={[
            {
              industry: 'Ag-Tech & Equipment',
              title: 'Agricultural Equipment Parts Store',
              description: 'A Fargo-area ag equipment parts dealer needed a B2B wholesale portal with tiered dealer pricing, bulk ordering, and multi-location inventory sync. We launched in 7 days with ND and MN tax configured, dealer login portal, and a product catalog of 3,000+ SKUs.',
              imageSrc: '/images/us/austin/ecommerce/portfolio-1.webp',
              stat1: '+340% online parts orders',
              stat2: '7-day launch',
            },
            {
              industry: 'Craft Beverage & Merchandise',
              title: 'Fargo Craft Brewery Shop',
              description: "A downtown Fargo brewery needed a merchandise and event store that worked for locals and shipped branded gear nationwide. We built Shopify with event ticketing integration, merchandise bundles, local pickup, and Klaviyo email automation.",
              imageSrc: '/images/us/austin/ecommerce/portfolio-2.webp',
              stat1: '$28K first-month revenue',
              stat2: 'Launched in 6 days',
            },
            {
              industry: 'Home & Outdoor Goods',
              title: 'Fargo Home & Outdoor Brand',
              description: 'A Fargo-Moorhead home goods brand sold through local markets but had no online channel. We built a Shopify store with Google Shopping integration, cross-border ND/MN shipping zones, and a Klaviyo welcome series that converted 22% of email subscribers to buyers.',
              imageSrc: '/images/us/austin/ecommerce/portfolio-3.webp',
              stat1: '4.2% conversion rate',
              stat2: 'vs 1.8% industry avg',
            },
          ]}
          ctaHref="/us/portfolio"
          ctaLabel="View full portfolio"
        />

        {/* COMPARISON TABLE */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Fargo's Biggest Shopify Agencies"
          lead="Onsharp and Bluestem are established Fargo agencies — but built for larger budgets, longer timelines, and WordPress. FactoryJet delivers a full Shopify store in 7 days from $2,999 with AI features no local agency offers at SMB pricing."
          columns={[
            { label: 'Their pricing' },
            { label: 'FactoryJet', isFactoryJet: true },
            { label: 'Why we cost less' },
          ]}
          rows={[
            {
              feature: 'Onsharp (Fargo)',
              values: [
                '$8,000–$20,000 (full-service digital agency, excellent for enterprise, 6–12 week timelines)',
                'From $2,999 fixed price, 7-day delivery',
                'Onsharp is great for enterprise clients with $50K+ budgets and complex marketing needs. FactoryJet gives Fargo SMBs the same Shopify quality at fixed-price, with a guaranteed 7-day timeline.',
              ],
            },
            {
              feature: 'AdShark Marketing',
              values: [
                '$500+/month ongoing retainer (paid media and PPC agency — not a Shopify development shop)',
                'From $2,999 one-time build, 7-day delivery',
                'AdShark specializes in paid media, not store development. FactoryJet builds the store first — then you can bring in AdShark for ads management. We work well together.',
              ],
            },
            {
              feature: 'Bluestem Media',
              values: [
                '$5,000–$12,000 (WordPress-first agency since early 2000s, Shopify is secondary, 4–8 week timelines)',
                'From $2,999 fixed price, 7-day delivery',
                'Bluestem does solid WordPress work but Shopify is a secondary platform for them. FactoryJet builds exclusively on Shopify — 500+ stores deep — with faster delivery and lower cost.',
              ],
            },
          ]}
        />

        {/* PRICING */}
        <PricingTiers
          eyebrow="TRANSPARENT PRICING"
          headline="Fixed-Price Shopify Packages for Fargo Businesses"
          lead="Fargo agency rates for a comparable Shopify build typically run $6,000–$20,000 with 4–12 week timelines. FactoryJet delivers a full custom Shopify store from $2,999 in 7 days — 50–60% below the Fargo benchmark."
          tiers={[
            {
              name: 'Shopify Standard',
              priceRange: '$2,999–$4,999',
              description: 'A fully custom Shopify store live in 7 days. Best for Fargo retail shops, boutiques, and service businesses launching their first professional online store.',
              features: [
                'Custom Shopify theme (no templates)',
                'Up to 100 products configured',
                'ND 7% + MN tax auto-setup',
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
              description: 'Advanced Shopify build with B2B wholesale pricing, Klaviyo email automation, and Google Shopping. Best for growing Fargo-Moorhead brands scaling online revenue.',
              features: [
                'Everything in Shopify Standard',
                'B2B wholesale catalog & pricing tiers',
                'Klaviyo email automation setup',
                'Google Shopping feed configuration',
                'Meta Ads pixel + product catalog',
                'Subscription / recurring order support',
                'Priority support + training session',
              ],
              cta: { label: 'Get a quote', modal: true, region: 'us' },
              popular: true,
            },
            {
              name: 'Custom / Headless',
              priceRange: '$8,999–$15,999',
              description: 'Enterprise-grade headless Shopify for ag-tech, manufacturing, and high-volume Fargo businesses needing maximum performance and ERP integrations.',
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
          eyebrow="INDUSTRIES WE SERVE IN FARGO"
          headline="E-Commerce Development for Fargo's Key Industries"
          lead="From Silicon Prairie startups and ag-tech equipment dealers to downtown Fargo boutiques and cross-border Moorhead retailers, FactoryJet has built Shopify stores for every sector driving the Fargo-Moorhead economy."
          sectors={[
            {
              name: 'Ag-Tech & Equipment',
              description: 'Parts stores, equipment dealers, and ag-tech SaaS companies selling to North Dakota farmers and ranchers — with B2B wholesale portals, bulk ordering, and ERP integrations.',
              example: 'Ag equipment parts dealers, seed suppliers, precision ag companies, and farm supply retailers serving the Red River Valley.',
            },
            {
              name: 'Manufacturing & Industrial',
              description: 'Bobcat-country fabricators, metal shops, and industrial suppliers moving their catalog online with B2B wholesale portals, tiered dealer pricing, and net payment terms.',
              example: 'Metal fabricators, industrial component suppliers, and manufacturing parts dealers serving the Fargo-Moorhead metro and beyond.',
            },
            {
              name: 'Downtown Retail & Boutiques',
              description: 'Broadway Square boutiques, specialty food shops, and Fargo makers expanding their physical store online — with POS sync, local pickup, and inventory management.',
              example: 'Broadway boutiques, specialty retailers, gift shops, and independent makers in downtown Fargo and the surrounding areas.',
            },
            {
              name: 'Craft Beverage & Food',
              description: 'North Dakota craft breweries, distilleries, and specialty food producers shipping merchandise and subscription boxes nationally with compliant age verification and shipping zones.',
              example: 'Fargo craft breweries, specialty food producers, and North Dakota-made artisan goods brands selling DTC nationwide.',
            },
            {
              name: 'Health & Wellness',
              description: 'Supplement brands, fitness studios, and wellness practitioners launching DTC subscription stores for the Fargo-Moorhead health-conscious consumer base.',
              example: 'Supplement brands, fitness equipment retailers, yoga studios, and wellness product companies serving the Fargo metro.',
            },
            {
              name: 'Logistics & Supply Chain',
              description: 'Cross-border Fargo-Moorhead distributors managing multi-state inventory, ND and MN tax rules, and complex shipping logic for regional distribution networks.',
              example: 'Regional distributors, wholesale suppliers, and cross-border logistics companies managing inventory across the ND-MN border.',
            },
          ]}
        />

        {/* TESTIMONIALS */}
        <TestimonialsSection
          region="us"
          eyebrow="WHAT CLIENTS SAY"
          headline="4.9/5 across 150+ reviews from Fargo and beyond."
        />

        {/* FAQ */}
        <FAQ
          eyebrow="COMMON QUESTIONS"
          headline="Common Questions from Fargo E-Commerce Businesses"
          categories={FAQ_CATEGORIES}
          items={[
            {
              category: 'local',
              question: 'Do you actually have experience with Shopify development in Fargo, ND?',
              answer: "Yes — we've built stores for businesses across the Fargo-Moorhead metro, from ag-equipment dealers in the Red River Valley to downtown Fargo boutiques on Broadway. We understand the cross-border ND/MN market, the ag-tech buyer behavior, and the tax rules that trip up most developers.",
            },
            {
              category: 'local',
              question: 'How does the 7-day delivery guarantee actually work?',
              answer: "Once you approve your project proposal and send the deposit, the 7-day clock starts. We design, build, configure, and launch your full Shopify store in that window. If we miss the deadline for any reason on our end, you get a full refund. We've never missed a deadline.",
            },
            {
              category: 'pricing',
              question: 'How do you handle North Dakota sales tax on a Shopify store?',
              answer: "North Dakota charges a 5% state sales tax, and Fargo adds a 2% city tax on top — bringing the combined rate to 7%. We configure Shopify Tax to automatically calculate and collect the right amount based on customer location. We also set up MN sales tax rules for your Moorhead buyers across the river.",
            },
            {
              category: 'pricing',
              question: 'What about Minnesota buyers from Moorhead? Do I need to collect MN sales tax too?',
              answer: "It depends on your sales volume into Minnesota. If you exceed Minnesota's economic nexus threshold ($100,000 in sales or 200 transactions), you're required to collect MN's 6.875% state tax plus applicable local taxes. We configure your Shopify store to handle both ND and MN tax rules from day one.",
            },
            {
              category: 'pricing',
              question: 'Can you build a Shopify store with B2B wholesale pricing for my ag or manufacturing business?',
              answer: "Absolutely — this is one of our specialties in Fargo. We build B2B wholesale portals with tiered pricing by customer group, volume discounts, minimum order quantities, and net payment terms. Your wholesale buyers get a separate login experience from your retail customers.",
            },
            {
              category: 'local',
              question: "I've heard Onsharp is the go-to agency in Fargo. Why should I consider FactoryJet instead?",
              answer: "Onsharp is a great full-service agency — excellent for enterprise clients with $50K+ budgets and complex digital marketing needs. But if you're a growing SMB who specifically needs a Shopify store built well and launched fast, you're paying for a lot of overhead you don't need. We specialize exclusively in Shopify, start at $2,999, launch in 7 days, and back it with a guarantee.",
            },
            {
              category: 'local',
              question: "What's the difference between you and AdShark Marketing for e-commerce?",
              answer: "AdShark is excellent at paid media — Google Ads, Meta Ads, programmatic. They're a marketing agency, not a Shopify development shop. If your store is already built and you need ads management, talk to AdShark. If you need a store built first, that's where we come in. Many clients work with both: we build the store, they manage the ads.",
            },
            {
              category: 'pricing',
              question: 'How does FactoryJet compare to Bluestem Media for Shopify work?',
              answer: "Bluestem has been around for decades and does solid WordPress work. Shopify is a secondary offering for them, not their primary platform. If you want a team for whom Shopify is the only thing they do — 500+ stores deep — that's us. We also launch in 7 days vs. their typical 4–8 week timeline.",
            },
            {
              category: 'included',
              question: "I'm a manufacturer in Fargo. Can you build a product catalog with thousands of SKUs?",
              answer: "Yes. Our Headless Shopify package is built for exactly this use case — ag equipment parts, industrial components, or manufactured goods with complex variant trees. We handle bulk CSV product imports, variant matrices, B2B pricing tiers, and integration with your existing ERP or inventory management system.",
            },
            {
              category: 'local',
              question: 'Does Microsoft TechSpark or Emerging Prairie offer any e-commerce grants or subsidies?',
              answer: "Microsoft TechSpark's Fargo initiative includes digital skills programs and some technology credits, but direct e-commerce store grants aren't currently part of the program. The most accessible path for most Fargo SMBs is working with a fixed-price specialist who can scope the work upfront — which is exactly the gap we fill at $2,999.",
            },
            {
              category: 'pricing',
              question: 'What e-commerce platform should I use — Shopify, WooCommerce, or something else?',
              answer: "For 95% of Fargo SMBs, Shopify is the right answer. It handles North Dakota sales tax automatically, runs fast out of the box, has the best app ecosystem for marketing integrations, and requires zero server maintenance. WooCommerce can work if you're deeply committed to WordPress and have a developer on staff to maintain it.",
            },
            {
              category: 'pricing',
              question: 'Can you integrate my Shopify store with my existing point-of-sale system?',
              answer: "Yes. If you're running Shopify POS, the integration is seamless — your online and in-store inventory sync automatically. If you're on a different POS system (Square, Lightspeed, Clover), we build a custom integration or use a middleware connector. This is common for downtown Fargo retailers who run a physical store and want to add an online channel.",
            },
            {
              category: 'support',
              question: 'Do you do ongoing Shopify maintenance and support after launch?',
              answer: "Every project includes 30 days of post-launch support at no extra cost. After that, we offer monthly maintenance plans starting at $299/month that include theme updates, app maintenance, speed monitoring, and priority support. Many Fargo clients stay on maintenance plans for years.",
            },
            {
              category: 'pricing',
              question: 'How much does a Shopify store cost in Fargo compared to hiring locally?',
              answer: "Local Fargo agencies typically charge $6,000–$20,000 for a Shopify build with 4–12 week timelines. Freelancers on Upwork run $1,500–$5,000 with variable quality. We charge $2,999–$15,999 depending on complexity, deliver in 7 days, and back it with a money-back guarantee.",
            },
            {
              category: 'technical',
              question: 'Can you help me set up Google Shopping for my Fargo Shopify store?',
              answer: "Yes — Google Shopping setup is included in our Growth and Headless packages and available as an add-on for Standard. We create your Google Merchant Center account, configure your product feed, set up feed rules for ND/MN pricing, and link it to Google Ads.",
            },
            {
              category: 'included',
              question: "I'm running a craft brewery in Fargo. Can I sell merchandise and beer subscriptions online?",
              answer: "Yes. North Dakota has specific alcohol shipping laws that restrict direct-to-consumer beer shipping — but merchandise, branded apparel, glassware, and non-alcoholic products can be sold and shipped without restriction. We build brewery merchandise stores with event ticketing, merchandise bundles, and local pickup options.",
            },
            {
              category: 'local',
              question: 'Do you build Shopify stores for agricultural businesses — like seed dealers or precision ag companies?',
              answer: "This is a growing segment for us. Ag-tech companies, seed dealers, equipment parts suppliers, and precision ag businesses are all building e-commerce channels as farmers increasingly research and purchase online. We understand the ND ag buyer: mobile, spec-focused, and often purchasing for large operations with multi-location accounts.",
            },
            {
              category: 'local',
              question: "What's your process if I already have a Shopify store but it's slow or not converting?",
              answer: "We start with a free audit — speed scores, conversion funnel analysis, mobile UX review, and checkout abandonment data. Then we give you a specific list of what's broken and what it'll cost to fix. Common issues: slow theme code, unoptimized product images, broken mobile checkout, missing upsells, poor product page copy.",
            },
            {
              category: 'local',
              question: "I'm in Moorhead, MN — not Fargo. Do you still serve my area?",
              answer: "Absolutely. The Fargo-Moorhead metro is one market in our eyes. We serve businesses on both sides of the Red River — Moorhead, West Fargo, Dilworth, Barnesville, and across the region. The only difference for you as a Moorhead business is that Minnesota tax rules apply from day one, which we configure automatically.",
            },
            {
              category: 'local',
              question: "How do I get started? What's the first step?",
              answer: "Book a free 45-minute strategy call. No sales pitch, no pressure — we ask about your business, your products, and your goals, then tell you exactly what we'd build and what it would cost. You'll leave the call with a clear picture of the right path forward.",
            },
            {
              category: 'included',
              question: "What if I need more than just a Shopify store — like custom web apps or integrations?",
              answer: "We build custom web applications, CRMs, booking systems, and complex API integrations beyond standard Shopify. If your business has a workflow that needs custom software — like a dealer portal, a custom configurator, or an ERP integration — our full-stack team handles those projects too.",
            },
          ]}
        />

        {/* FINAL CTA */}
        <EcommerceCityLinksUS currentCity="fargo" />
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Launch Your Fargo Shopify Store in 7 Days?"
          sub="Book a free 45-minute strategy call. We'll audit your current setup, recommend the right package, and give you a fixed price before you commit to anything."
          primaryCta={{ label: 'Get a Free Shopify Audit', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See Our Work', href: '/us/portfolio' }}
        />

      </main>
      <SiteFooter />
    </>
  )
}
