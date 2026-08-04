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
  title: 'Shopify Agency Lincoln NE | 7-Day Delivery, Fixed-Price | FactoryJet',
  description: 'Top-rated Shopify agency in Lincoln NE: stores live in 7 days, fixed-price. Silicon Prairie e-commerce: Shopify, WooCommerce & AI. 500+ projects. Free audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Agency Lincoln NE | 7-Day Delivery, Fixed-Price | FactoryJet',
    description: 'Top-rated Shopify agency in Lincoln, Nebraska: stores live in 7 days, fixed-price. Silicon Prairie specialists: Shopify, WooCommerce & AI. Free audit.',
    url: 'https://factoryjet.com/lincoln/ecommerce-development',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Shopify Agency Lincoln NE',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Agency Lincoln NE | 7-Day Delivery, Fixed-Price | FactoryJet',
    description: 'Top-rated Shopify agency in Lincoln NE: stores live in 7 days, fixed-price. Silicon Prairie e-commerce specialists. Free audit.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/lincoln/ecommerce-development',
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
      dangerouslySetInnerHTML={{ __html: getEcommerceCitySchema('lincoln', FAQ_ITEMS) }}
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

const FAQ_ITEMS = [
            {
              category: 'local',
              question: 'Do you have specific experience with Shopify development in Lincoln, Nebraska?',
              answer: "Yes. We've built e-commerce stores for businesses across the Lincoln metro and broader Nebraska market. We understand Nebraska buyers, the ag-tech sector around UNL, the Husker merchandise market, and Nebraska's straightforward sales tax structure.",
            },
            {
              category: 'pricing',
              question: "What's Nebraska's sales tax, and how does it apply to my Shopify store?",
              answer: "Nebraska has a 5.5% state sales tax. Lincoln itself adds a local tax that brings the combined rate to approximately 7% (5.5% state + 1.5% city). We configure Shopify Tax to automatically calculate and collect the correct amount based on the buyer's specific location. If you sell into other states and exceed their economic nexus thresholds, we configure multi-state tax handling too.",
            },
            {
              category: 'local',
              question: 'How does the 7-day delivery guarantee work?',
              answer: "Once you approve your proposal and send the deposit, the 7-day clock starts. We design, build, configure, and launch your complete Shopify store within that window. If we miss the deadline for any reason on our end, you receive a full refund. We've never had to issue one.",
            },
            {
              category: 'local',
              question: 'Can you build a Shopify store for Husker merchandise or university-related products?',
              answer: "Yes. We've built merchandise stores for university and sports-adjacent brands. Important note: if you plan to use University of Nebraska's official trademarks, you'll need a UNL licensing agreement. If you're selling Husker-inspired or fan-culture products that don't use official marks, no licensing is required. We'll help you structure the store correctly for either situation.",
            },
            {
              category: 'local',
              question: 'I run a farm or ag business in Nebraska. Can I sell products online?',
              answer: "Absolutely, and this is one of the fastest-growing segments we serve. Nebraska's ag businesses are increasingly selling direct: equipment parts, inputs, specialty crops, value-added food products, and branded farm merchandise. We build Shopify stores with B2B wholesale pricing for commercial buyers, volume discounts, net payment terms, and inventory management that connects with your existing systems.",
            },
            {
              category: 'local',
              question: 'Can you build a B2B wholesale portal for a Lincoln manufacturing company?',
              answer: "Yes. Our Growth and Headless packages include full B2B wholesale functionality: separate pricing tiers by customer group, minimum order quantities, volume discounts, net 30/60/90 payment terms, and a wholesale buyer portal with unique login. Nebraska manufacturers and industrial suppliers are a core segment for us.",
            },
            {
              category: 'local',
              question: "What's the difference between you and Omaha-based agencies for Lincoln businesses?",
              answer: "Several Omaha agencies serve Lincoln clients, and some do good work. The issues are typically: they charge Omaha overhead prices to Lincoln businesses, Lincoln projects get lower priority than their Omaha accounts, and timelines stretch as a result. We serve Lincoln businesses with the same priority as any other client, and our 7-day delivery is non-negotiable regardless of your city.",
            },
            {
              category: 'local',
              question: "I've heard Sproutbox does good Shopify work in Lincoln. Why should I consider FactoryJet?",
              answer: "Sproutbox does solid design work. They're a broad-service digital agency. If you want Shopify as your primary platform and want a team for whom Shopify is the only thing they do, that's us. 500+ stores deep vs. being one of many services in an agency's portfolio. We're also faster (7 days) and significantly less expensive.",
            },
            {
              category: 'included',
              question: 'How does Shopify handle subscription or recurring orders for Lincoln businesses?',
              answer: "We integrate Shopify Subscriptions or Recharge depending on your needs. Subscription commerce works exceptionally well for Nebraska food producers, supplement brands, and pet supply businesses. We set up the subscriber portal, discount logic, pause/skip/cancel flows, and Klaviyo email sequences that keep churn low.",
            },
            {
              category: 'pricing',
              question: 'Can you integrate my Shopify store with my existing POS or inventory system?',
              answer: "Yes. If you're running Shopify POS in a Lincoln retail location, the inventory sync is automatic. For other POS systems (Square, Lightspeed, Clover), we build the integration. For Lincoln businesses with ERP systems or custom inventory software, we build API connections through our Headless package.",
            },
            {
              category: 'pricing',
              question: 'What does a Shopify store typically cost in Lincoln, Nebraska?',
              answer: "Local Lincoln and Omaha agencies typically charge premium rates for a Shopify build with 6–14 week timelines. Freelancers run cheaper but with variable quality and no accountability. Our pricing is fixed-price and scoped to your build: the main drivers are catalog size, integrations, and design complexity. Every project is quoted up front after a free discovery call, we deliver in 7 days, and we back it with a money-back guarantee.",
            },
            {
              category: 'technical',
              question: 'Can you help me rank on Google for Shopify-related searches in Lincoln?',
              answer: "Every store we build is fully SEO-configured out of the box: optimized metadata, JSON-LD schema, fast load times (Core Web Vitals green), mobile-first design, and a clean sitemap submitted to Google Search Console on launch day. For Lincoln businesses, we also optimize for local search signals so you appear in 'near me' queries.",
            },
            {
              category: 'local',
              question: "I already have a Shopify store but it's not performing. Can you audit and fix it?",
              answer: "Yes. Our free 24-hour audit covers speed scores, checkout abandonment rate, mobile UX issues, conversion funnel gaps, and theme code problems. We then provide a specific list of what's broken and a fixed price to fix it.",
            },
            {
              category: 'local',
              question: 'Do you work with startups and early-stage businesses in Lincoln?',
              answer: "Yes. Lincoln's startup ecosystem, particularly around UNL's innovation programs and the NMotion accelerator, produces a lot of early-stage product companies. We work with pre-revenue and early-stage businesses. For most startups, the right starting point is our Standard package to validate the product concept before investing in advanced features.",
            },
            {
              category: 'local',
              question: 'How do I handle shipping and fulfillment for Nebraska buyers?',
              answer: "We configure Shopify's shipping module with USPS, UPS, and FedEx carrier-calculated rates based on package weight and destination. For Nebraska agricultural products, we factor in perishable shipping constraints. For high-volume operations, we integrate ShipStation or EasyPost for warehouse management.",
            },
            {
              category: 'technical',
              question: 'Can you set up Google Shopping for my Lincoln product business?',
              answer: "Google Shopping is included in our Growth and Headless packages and available as a paid add-on for Standard. We set up Google Merchant Center, configure your product feed, write optimized product titles and descriptions, and link to Google Ads.",
            },
            {
              category: 'local',
              question: "I'm a food producer in Nebraska. Can I ship food products nationally through my Shopify store?",
              answer: "Yes, with some planning. Most shelf-stable packaged food products can be shipped nationwide without restriction. Meat and dairy require USDA/FDA compliance and specific labeling. Alcohol has state-by-state shipping restrictions. We've helped Nebraska food producers navigate these requirements many times.",
            },
            {
              category: 'support',
              question: 'Do you offer ongoing maintenance and support after launch?',
              answer: "Yes. Every project includes 30 days of post-launch support, bug fixes, adjustments, questions answered same-day. After that, we offer monthly maintenance plans that include theme updates, app maintenance, speed monitoring, and priority support.",
            },
            {
              category: 'local',
              question: "What makes FactoryJet different from a Nebraska freelancer I found on LinkedIn?",
              answer: "A freelancer might be excellent, or they might disappear after the deposit. We're a 25-person team with project managers, designers, developers, and QA working in parallel. We have 500+ stores as proof. We put a contractual delivery deadline in writing. No freelancer will ever offer you that.",
            },
            {
              category: 'local',
              question: "I'm outside Lincoln: Kearney, Grand Island, or another Nebraska city. Do you serve me?",
              answer: "Absolutely. We serve businesses across all of Nebraska. Nebraska's 5.5% sales tax applies statewide, so there's no configuration difference for non-Lincoln cities. Remote collaboration is our normal: most of our projects are handled entirely over Zoom and Slack.",
            },
            {
              category: 'local',
              question: 'Who is the best ecommerce development company in Lincoln?',
              answer:
                'For SMBs and DTC brands, FactoryJet makes a strong case: fixed-price builds, senior engineers on every project, and full code ownership from day one. Any ecommerce website development company in Lincoln you compare, or any ecommerce solution company in Lincoln, should pass three checks: who writes the code, is pricing fixed up front, and do you own the store at the end. That is how to find the best ecommerce website development company in Lincoln and the best ecommerce solution company in Lincoln for your catalog.',
            },
            {
              category: 'pricing',
              question: 'Should I hire ecommerce developer in Lincoln or work with an agency?',
              answer:
                'A solo developer can assemble a basic store, but a production store needs design, payments, tax configuration, shipping, and SEO working together. A senior-led team delivers all of it at a fixed price. If you do hire ecommerce developer in Lincoln directly, ask for store speed scores from past builds before committing.',
            },
];
export default function Page() {
  return (
    <>
      <SchemaScript />
      <SiteHeader />
      <main className="bg-fj-cream">

        {/* HERO */}
        <Hero
        formSlot={<HeroInlineForm region="us" source="us_lincoln_ecommerce_development_hero" />}
          eyebrow="E-COMMERCE DEVELOPMENT · LINCOLN, NE"
          headline="Shopify Agency Lincoln NE for Nebraska Businesses"
          lead="Lincoln is the Silicon Prairie's university town, ag-tech hub, and fastest-growing mid-market city, and the businesses winning online here aren't waiting 3 months for a local agency. They launch in 7 days at fixed-price tiers."
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={['500+ Stores Launched', '7-Day Delivery', '4.9★ Rated', 'Fixed-Price']}
        />

        {/* LOGO BAR */}
        <LogoBar tagline="Trusted by 500+ e-commerce brands across the US, UK, and UAE" />

        {/* BIG THREE TRUST BLOCK */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="Results that Lincoln e-commerce brands trust."
        />

        {/* CITY CONTEXT */}
        <CityContextSection
          eyebrow="WHY LINCOLN E-COMMERCE IS DIFFERENT"
          headline="The Silicon Prairie University Town With a Massive Husker Market and Booming Ag-Tech Sector"
          leadParagraphs={[
            "Lincoln doesn't get the same press as Omaha, but the capital city has a unique e-commerce opportunity that most businesses haven't fully tapped. University of Nebraska–Lincoln's 25,000+ students create a captive consumer market on campus. Husker merchandise, game-day gear, and branded apparel are perpetual demand categories.",
            "Meanwhile, the ag-tech sector growing up around UNL's research programs is creating B2B e-commerce opportunities for equipment, precision farming tools, and agricultural software. Nebraska's 5.5% state sales tax is straightforward to configure, and Lincoln adds approximately 1.5% city tax for a combined ~7% rate.",
            "Lincoln has relatively low competition from established Shopify agencies, which means businesses that launch a professional store now can establish search ranking dominance before the market gets crowded. The window to own your category in Lincoln e-commerce is open right now.",
          ]}
          stats={[
            { value: '25K+', label: 'UNL students, massive on-campus and alumni consumer market', sourceUrl: 'https://www.unl.edu/about/' },
            { value: '340K+', label: 'Lincoln metro population with strong purchase intent', sourceUrl: 'https://www.census.gov/data/tables/time-series/demo/popest/2020s-total-cities-and-towns.html' },
            { value: '~7%', label: "Nebraska combined sales tax (5.5% state + 1.5% Lincoln city)", sourceUrl: 'https://revenue.nebraska.gov/about/sales-and-use-tax' },
          ]}
        />

        {/* SERVICE EXPLANATION */}
        <ServiceExplanation
          eyebrow="WHAT WE BUILD FOR LINCOLN BUSINESSES"
          headline="Shopify Stores Built for Nebraska Buyers, From Husker Fans to Ag Producers"
          lead="Lincoln e-commerce has two distinct markets that smart businesses capture simultaneously: the university consumer (students, alumni, and fans who buy on mobile and respond to Husker-adjacent branding), and the Nebraska producer (ag businesses and manufacturers moving their products online for the first time). We build for both, with Nebraska's 5.5% sales tax auto-configured from day one."
          body={
            <>
              <p>
                For university-adjacent merchandise brands and campus businesses, we build
                Shopify stores with mobile-first checkout optimized for the student buyer,
                game-day promotional calendar support, and email automation through Klaviyo
                that captures first-time buyers and turns them into repeat customers.
              </p>
              <p>
                For Lincoln&apos;s ag-tech companies, equipment dealers, and manufacturers, we
                build B2B wholesale portals with tiered pricing by customer group, volume
                discounts, minimum order quantities, and net payment terms, with ERP
                integrations through our Headless package for high-SKU industrial catalogs.
              </p>
              <p>
                Every Lincoln Shopify build includes Google Shopping integration, JSON-LD
                schema for AI search visibility, Core Web Vitals optimization, and a 30-day
                support window. Nebraska is price-conscious: our pricing reflects that.
              </p>
            </>
          }
          rightSlot={
            <img
              src="/images/us/lincoln/ecommerce/service-explanation.webp"
              alt="Shopify development process for Lincoln Nebraska businesses"
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
          headline="Three Reasons Lincoln Businesses Choose Us Over Local Agencies"
          lead="Swanson Russell and Sproutbox are capable Lincoln agencies, but built for larger budgets and longer timelines. FactoryJet launches full Shopify stores in 7 days, at a fixed price quoted up front."
          pillars={[
            {
              title: 'Launch While Others Plan',
              body: "Lincoln agencies are booking into next quarter. We launch your store in 7 days. While they're in kickoff meetings, you're already making sales and building customer relationships.",
            },
            {
              title: 'Nebraska-Honest Pricing',
              body: 'No hourly billing, no scope creep, no surprise invoices. You get a fixed price before you pay anything, and that price never changes. What we quote is what you pay.',
            },
            {
              title: 'Built to Convert',
              body: "Pretty stores that don't convert are expensive billboards. Every section, CTA, and checkout flow is optimized around conversion data from 500+ stores we've launched across the US, UK, UAE and India.",
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
              description: 'We learn about your Lincoln business, your products, and your customers in 45 minutes, no pitch, just honest advice on what you need.',
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
          headline="Stores We've Built for Businesses Like Yours"
          cards={[
            {
              industry: 'Ag-Tech & Equipment',
              title: 'Nebraska Agricultural Equipment Store',
              description: "A Nebraska ag equipment parts dealer needed a B2B wholesale portal with tiered dealer pricing, bulk ordering, and inventory sync. We launched in 7 days with Nebraska tax configured, dealer login portal, and a product catalog of 2,500+ SKUs.",
              imageSrc: '/images/us/lincoln/ecommerce/portfolio-1.webp',
              stat1: '+290% online orders',
              stat2: '7-day launch',
            },
            {
              industry: 'University Apparel & Merchandise',
              title: 'Nebraska University Merchandise Brand',
              description: "A Lincoln merchandise brand serving UNL students and Husker fans needed a Shopify store with game-day promotional support, mobile-first checkout, and Klaviyo automation for alumni buyers. Launched in 7 days with $34K in first-month revenue.",
              imageSrc: '/images/us/lincoln/ecommerce/portfolio-2.webp',
              stat1: '$34K first-month revenue',
              stat2: 'Launched in 7 days',
            },
            {
              industry: 'Nebraska Food & Specialty',
              title: 'Nebraska Specialty Food Producer',
              description: "A Nebraska food producer needed to go DTC nationally with subscription box options, local pickup, and compliant food labeling. We built a Shopify store with Recharge subscription integration and Google Shopping feed, achieving 4.1% conversion from launch.",
              imageSrc: '/images/us/lincoln/ecommerce/portfolio-3.webp',
              stat1: '4.1% conversion rate',
              stat2: 'From day one',
            },
          ]}
          ctaHref="/portfolio"
          ctaLabel="View full portfolio"
        />

        {/* COMPARISON TABLE */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Lincoln's Biggest Shopify Agencies"
          lead="Swanson Russell and Sproutbox are established Lincoln agencies, but built for larger budgets and longer timelines. FactoryJet delivers a full Shopify store in 7 days, fixed-price, with AI features no local agency offers at SMB-friendly rates."
          columns={[
            { label: 'Their pricing' },
            { label: 'FactoryJet', isFactoryJet: true },
            { label: 'Why we cost less' },
          ]}
          rows={[
            {
              feature: 'Swanson Russell (Lincoln)',
              values: [
                'Enterprise-level project rates (full-service advertising agency, strong on branding and media, Shopify is one of dozens of services, 8–16 week timelines)',
                'Fixed-price, 7-day delivery',
                'Swanson Russell is a top-tier branding and advertising agency, not a Shopify e-commerce specialist. FactoryJet builds exclusively on Shopify, launches in 7 days, and costs fixed-price.',
              ],
            },
            {
              feature: 'Sproutbox (Lincoln)',
              values: [
                'Premium project rates (design and digital agency with broad services, 6–12 week timelines)',
                'Fixed-price, 7-day delivery',
                'Sproutbox does solid design work but Shopify is one of many services in their portfolio. FactoryJet builds exclusively on Shopify, 500+ stores deep, with faster delivery and lower cost.',
              ],
            },
            {
              feature: 'Omaha-Based Agencies',
              values: [
                'Higher overhead, premium rates, Lincoln projects often de-prioritized, 6–14 week timelines',
                'Fixed-price, 7-day delivery',
                'Omaha agencies serving Lincoln clients often de-prioritize Lincoln projects relative to their Omaha accounts. FactoryJet serves every client with the same priority, and the same 7-day guarantee.',
              ],
            },
          ]}
        />

        {/* PRICING */}
        <PricingTiers
          eyebrow="TRANSPARENT PRICING"
          headline="Fixed-Price Shopify Packages for Lincoln Businesses"
          lead="Lincoln and Omaha agencies typically charge premium rates for a Shopify build with 6–14 week timelines. FactoryJet pricing is fixed-price and scoped to your build: the main drivers are catalog size, integrations, and design complexity. Every project is quoted up front after a free discovery call, so you know the full cost before work starts. Stores ship in 7 days, Nebraska-honest pricing from day one."
          tiers={[
            {
              priceRange: 'Fixed-price',
              name: 'Shopify Standard',
              description: 'For Lincoln boutiques, food producers, merchandise brands, and service businesses launching their first professional Shopify store.',
              features: [
                'Custom Shopify theme (no templates)',
                'Up to 100 products configured',
                'Nebraska ~7% sales tax auto-setup',
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
              description: 'For growing Lincoln and Nebraska brands, includes B2B wholesale pricing, Klaviyo email automation, and Google Shopping.',
              features: [
                'Everything in Shopify Standard',
                'B2B wholesale pricing & portal',
                'Klaviyo email automation setup',
                'Google Shopping feed configuration',
                'Meta Ads pixel + product catalog',
                'Subscription & recurring order support',
                'Priority support + training session',
              ],
              cta: { label: 'Get a quote', modal: true, region: 'us' },
              popular: true,
            },
            {
              priceRange: 'Fixed-price',
              name: 'Custom / Headless',
              description: 'Enterprise Shopify for high-volume Lincoln businesses, ag-tech companies, and manufacturers needing ERP integrations and maximum performance.',
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
          eyebrow="INDUSTRIES WE SERVE IN LINCOLN"
          headline="E-Commerce Development for Lincoln's Key Industries"
          lead="From Husker merchandise and ag-tech equipment to downtown Lincoln boutiques and Nebraska food producers, FactoryJet has built Shopify stores for every sector driving Lincoln's economy."
          sectors={[
            {
              name: 'Ag-Tech & Farm Equipment',
              description: 'Precision farming tools, equipment parts, seed dealers, and ag-tech SaaS companies serving Nebraska farmers and ranchers going online for the first time.',
              example: 'Ag equipment parts dealers, seed suppliers, precision ag companies, and farm supply retailers across Nebraska.',
            },
            {
              name: 'University Apparel & Merchandise',
              description: "Husker merchandise, campus brands, and alumni goods businesses serving UNL's 25,000+ students and massive national fan base, with game-day promotional support built in.",
              example: "University-adjacent merchandise brands, fan gear retailers, and alumni goods companies serving the Husker market nationwide.",
            },
            {
              name: 'Nebraska Food & Specialty',
              description: 'Cornhusker popcorn, craft foods, specialty meats, and Nebraska-made food products shipping direct to consumers nationwide, with subscription boxes, compliant labeling, and cold-chain configurations.',
              example: 'Nebraska specialty food producers, craft beverage brands, artisan goods makers, and farm-direct food businesses.',
            },
            {
              name: 'Downtown Lincoln Retail',
              description: 'Haymarket District boutiques, O Street shops, and local retailers expanding their physical presence online, with POS sync, local pickup, and inventory management.',
              example: 'Haymarket boutiques, O Street specialty retailers, and independent shops in downtown Lincoln and the surrounding areas.',
            },
            {
              name: 'Manufacturing & Industrial',
              description: 'Nebraska manufacturers and industrial suppliers building B2B e-commerce channels to reach buyers beyond the local market, with B2B portals, bulk ordering, and ERP integrations.',
              example: 'Nebraska manufacturers, industrial component suppliers, and equipment dealers serving the broader Midwest market.',
            },
            {
              name: 'Health & Wellness',
              description: "Supplement brands, fitness studios, and wellness businesses serving Lincoln's health-conscious university and professional market, with subscription billing and Klaviyo automation.",
              example: "Supplement brands, fitness equipment retailers, yoga studios, and wellness product companies serving the Lincoln metro.",
            },
          ]}
        />

        {/* TESTIMONIALS */}
        <TestimonialsSection
          region="us"
          eyebrow="WHAT CLIENTS SAY"
          headline="Rated 4.9/5 across 500+ projects."
        />

        {/* FAQ */}
        <FAQ
          eyebrow="COMMON QUESTIONS"
          headline="Common Questions from Lincoln E-Commerce Businesses"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* FINAL CTA */}
        <EcommerceCityLinksUS currentCity="lincoln" />
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Launch Your Lincoln Shopify Store in 7 Days?"
          sub="Book a 45-minute strategy call. We'll audit your current setup, recommend the right package, and give you a fixed price, no commitment required."
          primaryCta={{ label: 'Get a Free Shopify Audit', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
        />

      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  )
}
