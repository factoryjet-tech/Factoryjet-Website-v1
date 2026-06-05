// V2 ecommerce city page — Denver, CO
// Design system: py-10 md:py-14 standard | 30/65/5 dark/light rhythm | Clash Display headlines
// Schema: server-side via SchemaScript (AI-crawler visible in initial HTML)

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
import EcommerceCityLinksUS from '@/components/v2/EcommerceCityLinksUS'
import HeroBrowserMockup from '@/components/v2/HeroBrowserMockup'
import Link from 'next/link'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'

export const metadata: Metadata = {
  title: 'Shopify Developer Denver CO | E-Commerce from $2,999 | FactoryJet',
  description: 'Top-rated Shopify developer in Denver CO: stores live in 7 days from $2,999. Mile High e-commerce — Shopify, WooCommerce & AI. 500+ projects. Free audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Developer Denver CO | E-Commerce from $2,999 | FactoryJet',
    description: 'Top-rated Shopify developer in Denver, Colorado: stores live in 7 days from $2,999. Mile High e-commerce specialists — Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
    url: 'https://factoryjet.com/us/denver/ecommerce-development',
    images: [{ url: 'https://factoryjet.com/logo.png', width: 1200, height: 630, alt: 'FactoryJet - Shopify Developer Denver' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Developer Denver CO | E-Commerce from $2,999 | FactoryJet',
    description: 'Top-rated Shopify developer in Denver, Colorado: stores live in 7 days from $2,999. Mile High e-commerce specialists — Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/denver/ecommerce-development',
    languages: ecommerceCityAlternatesUS['denver'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
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

        {/* ── 1. HERO ────────────────────────────────────────────────── */}
        <Hero
          eyebrow="E-COMMERCE DEVELOPMENT · DENVER"
          headline="Shopify Developer Denver for Colorado Businesses"
          lead="The only Denver e-commerce agency that launches in 7 days at a fixed, published price. Shopify, WooCommerce & AI-powered stores for Colorado's outdoor brands, craft breweries, cannabis-adjacent businesses, and tech-first DTC founders. 500+ projects, 4.9★ rating."
          primaryCta={{ label: 'Get a Free Shopify Audit', modal: true, region: 'us' }}
          trustItems={['Shopify stores from $2,999', '7-day delivery guarantee', '500+ stores launched']}
          rightSlot={<HeroBrowserMockup mockupUrl="yourbusiness.com" badgeCity="Denver, CO" badgeLabel="Live in 7 days" />}
        />

        {/* ── 2. LOGO BAR ─────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ e-commerce brands across the US, UK, and UAE" />

        {/* ── 3. TRUST STATS ──────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="Results that Denver e-commerce brands trust."
        />

        {/* ── 4. CITY CONTEXT ─────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="DENVER MARKET"
          headline="Colorado's $38B Outdoor Economy Needs Stores That Match the Ambition"
          leadParagraphs={[
            "Denver sits at the center of Colorado's $38 billion outdoor recreation economy — the largest in any US state. REI's flagship, hundreds of outdoor brands, and 229,000 outdoor industry jobs make Denver the distribution hub for ski gear, hiking equipment, cycling, and climbing. FactoryJet builds Shopify stores that capture this demand — with adventure-specific product configurations, rental calendar integrations, and gear subscription boxes. Every store launches in 7 days and includes AEO optimization for outdoor product queries on ChatGPT and Perplexity.",
            "Denver's craft brewery scene — 400+ Colorado breweries, the highest per-capita concentration in the US — drives DTC demand for merchandise, subscriptions, and branded gear. The tech sector adds fuel: Palantir, DaVita, Lockheed Martin, and 6,000+ tech companies make Colorado the #4 tech economy outside the coasts. This outdoor-meets-tech consumer expects premium UX, fast mobile loading, and AI-powered product recommendations — all things FactoryJet delivers as standard.",
          ]}
          stats={[
            { value: '2.9M+', label: 'Denver Metro Population', sourceUrl: 'https://www.census.gov/quickfacts/denvercountycountycolorado' },
            { value: '$38B', label: "Colorado's Annual Outdoor Recreation Economy", sourceUrl: 'https://oedit.colorado.gov/outdoor-recreation-industry-office' },
            { value: '400+', label: 'Colorado Craft Breweries — Highest US Per-Capita', sourceUrl: 'https://coloradobeer.org/breweries/' },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ──────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="E-COMMERCE DEVELOPMENT · Denver"
          headline="What 'E-Commerce Development' Actually Means for a Denver Business"
          lead="Most Denver agencies sell you a WordPress theme and call it e-commerce. FactoryJet builds a revenue-generating Shopify store: custom design, Denver's complex 8.81% sales tax configured across all 8 components, AI-powered product discovery, and a Lighthouse 95+ performance score — all in 7 days from $2,999."
          body={
            <>
              <p>
                For Denver&apos;s outdoor and adventure brands — ski gear, climbing equipment,
                cycling shops, camping and hiking — a Shopify store needs to handle product
                complexity: variant matrices by size and color, rental deposit flows, waiver
                integrations, and group booking. Colorado&apos;s 229,000 outdoor industry workers
                and the $38B outdoor economy mean your competitors have sophisticated stores.
                FactoryJet builds stores that out-convert them with faster load times, better
                mobile UX, and AI-powered product recommendations.
              </p>
              <p>
                For Denver&apos;s craft breweries and distilleries — Colorado&apos;s 400+ producers
                represent a DTC opportunity most brands underexploit. We build merchandise stores,
                beer club subscriptions, online gift card sales, and private event booking for
                Colorado&apos;s craft beverage scene. Colorado&apos;s liquor licensing requires
                age verification flows compliant with Colorado Liquor Enforcement Division
                requirements — we build these natively.
              </p>
              <p>
                Denver&apos;s 8.81% combined sales tax is the most complex municipal rate structure
                of any major US city — eight separate components. FactoryJet configures all eight
                Denver components plus separate rates for every Front Range municipality during
                every build. Zero tax compliance risk from day one.
              </p>
            </>
          }
          rightSlot={
            <img
              src="/images/us/denver/ecommerce/service-explanation.webp"
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

        {/* ── 6. STRATEGIC DARK SECTION ───────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Denver Businesses Choose FactoryJet Over Local Agencies"
          lead={
            "Fruition (Denver-based, well-established) handles mid-market web and e-commerce work but focuses on WordPress and digital marketing, not Shopify specialization. Doodle Dog Creative and Magneto IT Solutions serve the Denver market but lack AI development capabilities and 7-day delivery. Groove Commerce and TIDAL Commerce rank nationally for Denver Shopify queries at $10,000–$60,000 with no local presence.\n\nFactoryJet launches full Shopify stores in 7 days from $2,999 — at a fixed, published price. Unlike Fruition or Groove Commerce, we deliver with real Colorado market knowledge: the outdoor economy, Denver's unique tax structure, and the Front Range consumer profile that values performance as much as price."
          }
          pillars={[
            {
              title: 'Outdoor-specialist',
              body: "Every outdoor brand store ships with rental calendar integrations, adventure-specific variant matrices, waiver form embeds, and gear subscription configurations. Colorado's $38B outdoor economy sets the bar — FactoryJet builds to it as standard.",
            },
            {
              title: 'Transparent',
              body: 'Fixed pricing on the first call. Shopify from $2,999, WooCommerce from $3,499, headless from $5,999. No discovery fees, no tax-complexity surcharges, no Phase 2 invoices after launch.',
            },
            {
              title: 'Guaranteed',
              body: "7-day delivery on standard Shopify builds. If we miss the deadline, you don't pay. We've delivered on time on 97% of 500+ projects — including for Denver brands launching ahead of ski season and outdoor festival peaks.",
            },
          ]}
        />

        {/* ── 7. PROCESS ──────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Build Your Denver Shopify Store"
          stages={[
            {
              number: '01',
              title: 'Discovery & Platform Selection',
              description:
                "We map your product catalog, target customer, and revenue goals. For Denver businesses, we assess outdoor-specific requirements (rental calendars, waiver integrations), subscription needs for breweries, and CBD/hemp compliance. Shopify, WooCommerce, or headless — recommended in 24 hours.",
            },
            {
              number: '02',
              title: 'UX Design & Store Architecture',
              description:
                "We design your store structure — homepage, collection pages, product pages, cart, and checkout — with Colorado's active, tech-savvy consumer in mind. Adventure-forward layouts, fast mobile performance, and conversion flows built for outdoor and lifestyle brands.",
            },
            {
              number: '03',
              title: 'Development & Configuration',
              description:
                "Custom Shopify theme or headless build, Denver 8.81% sales tax setup (all 8 components + 19+ Front Range municipalities), age verification for breweries and CBD, Shopify Payments + Afterpay, and GSAP micro-animations. Lighthouse 90+ is non-negotiable.",
            },
            {
              number: '04',
              title: 'Products, Content & SEO',
              description:
                'Product catalog upload, optimized descriptions, alt tags, JSON-LD schema (FAQPage, Product, BreadcrumbList), and AEO content structured to get cited by ChatGPT, Perplexity, and Google AI Overviews for outdoor and adventure product queries.',
            },
            {
              number: '05',
              title: 'Launch & Growth Enablement',
              description:
                "Cloudflare/Vercel deploy, GA4 e-commerce tracking, and a recorded launch walkthrough. Your 30-day support window covers post-launch fixes, additional product uploads, and training so your Denver team can self-manage seasonal inventory from day one.",
            },
          ]}
        />

        {/* ── 8. PORTFOLIO ────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="What Denver e-commerce brands look like after FactoryJet."
          cards={[
            {
              industry: 'Outdoor & Adventure',
              title: 'Colorado Outdoor Brand Client',
              description:
                "Denver's outdoor economy is the largest in any US state — $38B in annual output, 229,000 jobs, and consumers who research gear obsessively before buying. We build Shopify stores for ski and snowboard brands, climbing gear retailers, hiking equipment, cycling shops, and camping gear with rental calendars, waiver integrations, and gear subscription flows.",
              imageSrc: '/images/us/denver/ecommerce/portfolio-1.webp',
              stat1: '+42% conversion rate',
              stat2: '< 1.2s load time',
            },
            {
              industry: 'Craft Brewery & Beverage',
              title: 'Colorado Craft Brewery DTC Client',
              description:
                "Colorado's 400+ craft breweries represent a huge DTC opportunity most brands underexploit. We build Shopify stores for merchandise (apparel, glassware, growlers), beer club subscriptions, online gift card sales, private event booking, and branded gear — with OLCC-compliant age verification and Toast POS sync for taproom inventory.",
              imageSrc: '/images/us/denver/ecommerce/portfolio-2.webp',
              stat1: '+48% subscription revenue',
              stat2: '7-day launch',
            },
            {
              industry: 'Health & Wellness',
              title: 'Colorado Wellness Brand Client',
              description:
                "Denver's health-conscious tech workforce spends premium on wellness products — supplements, CBD, fitness equipment, and wellness gear. We build Shopify stores with subscription models, auto-ship flows, age verification, high-risk payment processors, and Colorado CBD labeling compliance built in from day one.",
              imageSrc: '/images/us/denver/ecommerce/portfolio-3.webp',
              stat1: '+35% repeat orders',
              stat2: 'Lighthouse 94',
            },
          ]}
          ctaHref="/us/portfolio"
          ctaLabel="View full portfolio"
        />

        {/* ── 9. COMPARISON TABLE ─────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="WHY FACTORYJET"
          headline="FactoryJet vs Denver E-Commerce Agencies"
          lead={
            "Denver's agency market focuses heavily on WordPress and digital marketing — few specialize in Shopify e-commerce. Fruition is the best-known local shop but focuses on mid-market WordPress at $8,000–$25,000. Groove Commerce and TIDAL Commerce rank nationally for Denver queries but have no Colorado presence.\n\nFactoryJet delivers a full Shopify store in 7 days from $2,999 — with outdoor-brand specialization and AI features those agencies don't offer at SMB price points."
          }
          columns={[
            { label: 'Their pricing' },
            { label: 'FactoryJet', isFactoryJet: true },
            { label: 'Why we cost less' },
          ]}
          rows={[
            {
              feature: 'Fruition',
              values: [
                '$8,000–$25,000 (WordPress-focused, not Shopify specialists)',
                'From $2,999 (Shopify Standard)',
                "Fruition focuses on WordPress and digital marketing, not Shopify. FactoryJet specializes exclusively in Shopify e-commerce with outdoor-brand configurations, AI features, and 7-day delivery that Fruition doesn't offer.",
              ],
            },
            {
              feature: 'Groove Commerce',
              values: [
                '$10,000–$60,000 (East Coast-based, no Denver presence)',
                'From $2,999 fixed price, 7-day delivery',
                "Groove Commerce is East Coast-based with no Colorado market knowledge. FactoryJet delivers real Denver expertise — outdoor economy, 8.81% tax complexity, Front Range consumer profile — with 7-day delivery at 60–80% lower cost.",
              ],
            },
          ]}
        />

        {/* ── 10. PRICING ─────────────────────────────────────────────── */}
        <PricingTiers
          eyebrow="TRANSPARENT PRICING"
          headline="Transparent Pricing for Denver E-Commerce Businesses"
          lead={
            "Denver agency rates for a comparable Shopify build typically run $8,000–$25,000. National agencies like Groove Commerce quote $10,000–$60,000. FactoryJet delivers a full custom Shopify store from $2,999 — that's at a fixed, published price — with outdoor-specific configurations, a faster timeline, and a codebase you own outright. Stores ship in 7 days."
          }
          tiers={[
            {
              name: 'Shopify Standard',
              priceRange: '$2,999–$4,999',
              description:
                "A fully custom Shopify store live in 7 days. Best for Denver outdoor brands, craft breweries, health and wellness DTC founders launching or replacing a template.",
              features: [
                'Custom Shopify theme (not a template)',
                'Up to 100 products uploaded & configured',
                'Denver sales tax setup (8.81% — all 8 components)',
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
                "Advanced Shopify build with rental calendars, subscriptions, or B2B dealer pricing. Best for Colorado outdoor gear brands, craft breweries, and established DTC brands scaling online revenue.",
              features: [
                'Everything in Shopify Standard',
                'Rental calendar + deposit flow integration',
                'Subscription billing (Recharge / Skio)',
                'B2B dealer pricing & wholesale portal',
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
                "Next.js headless storefront for Colorado brands that need sub-500ms load times, custom API integrations, or a B2B outdoor dealer portal that outperforms every competitor.",
              features: [
                'Next.js headless frontend (Lighthouse 95+)',
                'Shopify or Medusa e-commerce backend',
                'Custom API & ERP integrations',
                'B2B portal: dealer tiers, PO payments',
                'AI chatbot trained on your gear catalog',
                'AEO content for ChatGPT & Perplexity',
                'Quarterly performance reviews',
              ],
              cta: { label: 'Get a quote', modal: true, region: 'us' },
            },
          ] as const}
        />

        {/* ── 11. INDUSTRIES ──────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="DENVER × E-COMMERCE"
          headline="E-Commerce Development for Denver's Key Industries"
          lead="From Colorado's $38B outdoor economy to its 400+ craft breweries, Denver's industries have distinct e-commerce needs. FactoryJet has built stores for each of them."
          sectors={[
            {
              name: 'Outdoor & Adventure',
              description:
                "Shopify stores for ski gear, climbing equipment, hiking brands, cycling, and camping — Colorado's $38B outdoor economy. Rental calendars, waiver integrations, gear subscription boxes, and seasonal inventory management built in as standard.",
              example:
                "Ski and snowboard brands, climbing gear retailers, hiking equipment companies, cycling shops, and camping gear brands serving Colorado's outdoor community.",
            },
            {
              name: 'Craft Breweries & Distilleries',
              description:
                "DTC stores, merchandise shops, and subscription beer clubs for Colorado's 400+ craft beverage brands. Toast POS sync, OLCC-compliant age verification, and brewery-specific bundling — gift sets, growler clubs, and taproom event booking.",
              example:
                'Denver craft breweries, Colorado distilleries, and craft spirits brands with DTC merchandise and subscription revenue.',
            },
            {
              name: 'Health & Wellness',
              description:
                "Supplement, CBD, and wellness product stores with subscription models and Colorado-compliant configurations. High-risk payment processors (Authorize.net, NMI), CDPHE CBD labeling compliance, and auto-ship flows for recurring wellness revenue.",
              example:
                "Supplement brands, CBD companies, fitness equipment DTC stores, and wellness product brands serving Denver's health-conscious tech workforce.",
            },
            {
              name: 'Tech & Software',
              description:
                "B2B portals, SaaS billing integrations, and DTC software accessory stores for Denver's tech sector. Palantir, DaVita, and the Denver Tech Center create demand for enterprise-grade Shopify builds with API integrations and B2B pricing tiers.",
              example:
                "SaaS companies, hardware startups, and software accessory brands based in the Denver Tech Center and Colorado tech corridor.",
            },
            {
              name: 'Apparel & Lifestyle',
              description:
                "Colorado-themed apparel, outdoor-influenced lifestyle brands, and DTC fashion stores serving the Rocky Mountain market. Performance fabrics, sustainable materials, and adventure-first brand storytelling for Denver's active consumer base.",
              example:
                "Colorado lifestyle apparel brands, outdoor-inspired fashion companies, and DTC apparel stores targeting the Rocky Mountain market.",
            },
            {
              name: 'Cannabis-Adjacent',
              description:
                "CBD, hemp, wellness accessories, and smoke shop supply stores with age verification and Colorado compliance. Colorado pioneered cannabis legalization — FactoryJet builds compliant Shopify stores for the adjacent wellness and accessories market.",
              example:
                "CBD brands, hemp product companies, wellness accessories stores, and cannabis-adjacent supply businesses operating in Colorado.",
            },
          ]}
        />

        {/* ── 12. TESTIMONIALS ────────────────────────────────────────── */}
        <TestimonialsSection
          region="us"
          eyebrow="WHAT CLIENTS SAY"
          headline="4.9/5 across 150+ reviews from Denver and beyond."
        />

        {/* ── 13. FAQ ─────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="COMMON QUESTIONS"
          headline="Common Questions from Denver E-Commerce Businesses"
          categories={FAQ_CATEGORIES}
          items={[
            {
              category: 'local',
              question: 'Who is the best Shopify developer in Denver, CO?',
              answer:
                "FactoryJet is Denver's top-rated Shopify development agency — 500+ projects, 4.9★ rating, and the only shop in the Mile High market combining Shopify e-commerce with AI agent development. Unlike local Denver agencies (Fruition, Doodle Dog Creative) that focus on WordPress and digital marketing, FactoryJet builds exclusively on Shopify and Next.js 15. We know Colorado's outdoor economy, Denver's complex tax structure, and the Front Range consumer profile — and we deliver in 7 days from $2,999.",
            },
            {
              category: 'pricing',
              question: 'How much does Shopify development cost in Denver?',
              answer:
                'Shopify stores start at $2,999 at FactoryJet — compared to $8,000–$25,000 at established Denver agencies. WooCommerce stores start at $3,499, and custom headless builds start at $5,999. Every project includes custom design, full development, Denver sales tax configuration (8.81%), product catalog setup, mobile-first responsive design, and 30 days of post-launch support.',
            },
            {
              category: 'pricing',
              question: 'What sales tax rate should my Denver Shopify store charge?',
              answer:
                "Denver businesses should configure Shopify to collect 8.81% combined sales tax: Colorado state 2.9%, Denver City 4.31%, Regional Transportation District (RTD) 1.0%, Cultural Facilities District 0.1%, Football Stadium District 0.1%, Scientific & Cultural Facilities 0.25%, and Denver Broadcasting 0.1%. Colorado uses destination-based sales tax — you charge the buyer's address rate. FactoryJet configures all Front Range municipality rates: Aurora (8.0%), Lakewood (7.5%), Arvada (8.46%), Westminster (8.16%), and Thornton (8.0%).",
            },
            {
              category: 'local',
              question: 'Do you build Shopify stores for outdoor and adventure brands in Denver?',
              answer:
                "Yes — outdoor and adventure is our primary Denver specialty. We build stores for ski and snowboard brands (with rental integrations), climbing gear retailers, hiking and backpacking equipment, cycling shops, and camping brands. Colorado's $38B outdoor economy means your competitors have sophisticated stores — FactoryJet builds stores that out-convert them with faster load times, better mobile UX, AI-powered product recommendations, and adventure-specific checkout flows including rental deposits, waiver forms, and group booking.",
            },
            {
              category: 'local',
              question: 'Can you build a Shopify store for a Colorado craft brewery or distillery?',
              answer:
                "Yes — Colorado's 400+ craft breweries and distilleries represent a huge DTC opportunity most brands under-exploit. We build Shopify stores for merchandise (apparel, glassware, growlers), beer club subscriptions, online gift card sales, private event booking, and branded gear. Colorado's liquor licensing means we build age verification flows compliant with Colorado Liquor Enforcement Division requirements. We also integrate with Toast and Square POS systems for taproom-to-online inventory sync.",
            },
            {
              category: 'pricing',
              question: "How does FactoryJet handle Denver's complex sales tax for Shopify?",
              answer:
                "Denver has the most complex municipal sales tax structure of any major US city — eight separate tax components totaling 8.81%. FactoryJet configures Shopify Tax with all eight Denver components, plus separate rates for every Front Range municipality (19+ cities in metro Denver each have different rates). We set up destination-based collection, configure tax-exempt categories (groceries, prescription drugs, farm equipment), and install Shopify's automated tax API to handle rate updates without manual intervention.",
            },
            {
              category: 'pricing',
              question: 'How long does it take to build a Shopify store in Denver?',
              answer:
                "FactoryJet launches standard Shopify stores in 7 days. Compare that to Fruition (8–12 weeks), Groove Commerce (8–16 weeks), or national agencies like TIDAL Commerce (6–14 weeks). Our 7-day timeline is possible because we design in code — no Figma-to-handoff delay — and use a component architecture optimized for rapid deployment. Complex outdoor builds with rental calendars or waiver integrations may take 2–3 weeks.",
            },
            {
              category: 'local',
              question: 'Can you build a CBD or cannabis-adjacent Shopify store in Colorado?',
              answer:
                "Yes — FactoryJet builds Shopify stores for CBD (hemp-derived), wellness accessories, and cannabis-adjacent products. Pure THC cannabis products cannot be sold through standard Shopify (payment processors prohibit it), but CBD, hemp, and accessories are fully supported. We configure age verification, payment processors that accept high-risk categories (Authorize.net, NMI), and Colorado's unique CBD labeling requirements.",
            },
            {
              category: 'local',
              question: 'Does my Denver business need Shopify or WooCommerce?',
              answer:
                "For most Denver businesses, Shopify wins: faster launch (7 days), lower maintenance costs, better subscription apps for Colorado's recurring-revenue brands, and superior mobile checkout. WooCommerce makes sense if you have a large existing WordPress site with strong SEO equity or need specific integrations only available in WooCommerce. Shopify starts at $2,999, WooCommerce at $3,499.",
            },
            {
              category: 'pricing',
              question: 'Can you migrate my Denver store to Shopify?',
              answer:
                "Yes — we migrate Denver businesses from WooCommerce, BigCommerce, Magento, Squarespace, Wix, and custom platforms to Shopify. Migration includes: full product and variant transfer, customer data, order history, URL 301 redirects (preserving Google rankings), Denver tax reconfiguration, metafield migration, and SEO continuity. Your Colorado local search rankings survive the migration intact. Timeline: 7–14 days depending on catalog size.",
            },
            {
              category: 'included',
              question: 'What AI services are available for Denver small businesses?',
              answer:
                "FactoryJet is the only Denver agency building production AI agents alongside Shopify development. We build: AI chatbots trained on your outdoor gear catalog, AI-powered inventory advisors for seasonal products, customer service automation for order status and return requests, and AI content tools that keep your blog and product descriptions optimized for Google AI Overviews and ChatGPT. Denver's tech-savvy consumer base expects AI-powered shopping experiences — FactoryJet delivers them.",
            },
            {
              category: 'included',
              question: 'What is included in a FactoryJet Shopify build for a Denver business?',
              answer:
                "Every Denver Shopify store includes: custom design (not a theme), full Shopify development, Denver sales tax setup (all 8 components + Front Range municipalities), payment gateway integration, product catalog setup, mobile-first responsive design, Core Web Vitals optimization (Lighthouse 90+), JSON-LD schema, AEO content for AI search visibility, GSAP micro-animations, 30 days of post-launch support, and a launch walkthrough. Starting at $2,999 — no hidden fees.",
            },
            {
              category: 'local',
              question: 'Can you build a Shopify store for a Denver ski, snowboard, or winter sports brand?',
              answer: "Yes — ski and winter sports is Denver's most important e-commerce category and a core FactoryJet specialty. Denver is the gateway to Vail, Breckenridge, Keystone, Arapahoe Basin, and 26+ Colorado ski resorts within a 2-hour drive. We build Shopify stores for: ski and snowboard equipment retailers, après-ski apparel and lifestyle brands, ski resort merchandise shops, winter sports accessory companies, and ski rental platforms with deposit-plus-rental-period logic. Colorado's 60M+ annual ski visits generate enormous DTC demand — a well-built Shopify store lets Denver outdoor brands capture resort-town spend at full retail margins instead of losing it to REI or Amazon.",
            },
            {
              category: 'technical',
              question: 'How do I get my Denver Shopify store ranked on Google and in AI search?',
              answer: "FactoryJet builds every Denver Shopify store with SEO and AEO foundations targeting Colorado-specific search intent. We implement: FAQPage + LocalBusiness + Product JSON-LD schema for Google, ChatGPT, Perplexity, and Google AI Overviews; page titles and meta descriptions targeting 'Denver [product]', 'Colorado outdoor gear', 'buy [product] Denver'; Core Web Vitals optimization (Lighthouse 90+, sub-1.5s load on mobile); and an AEO content plan that answers the exact questions Denver consumers ask about your product category. Denver's outdoor and cannabis consumer bases are heavy searchers — structured content that appears in AI-generated answers captures zero-click search intent that traditional SEO misses.",
            },
            {
              category: 'included',
              question: 'Do you build subscription or membership Shopify stores for Denver brands?',
              answer: "Yes — subscription commerce is a natural fit for Denver's outdoor and lifestyle brands. We build: gear maintenance subscription programs for outdoor equipment companies, craft beer club subscriptions for Colorado breweries, supplement and nutrition membership programs, ski wax and accessory replenishment subscriptions, and outdoor lifestyle product boxes. Denver's outdoor consumer is habit-driven and brand-loyal — subscription programs generate 30–50% higher customer lifetime value than one-time-purchase stores. FactoryJet builds subscription stores with Recharge or native Shopify Subscriptions, mountain lifestyle UX, and conversion flows optimized for Denver's adventure-focused consumer.",
            },
            {
              category: 'included',
              question: 'What payment methods should my Denver Shopify store accept?',
              answer: "Every Denver Shopify store should accept: Shopify Payments (lowest fees, seamless integration), PayPal (30%+ of first-time purchasers prefer PayPal), Apple Pay and Google Pay (critical for Denver's tech-savvy outdoor consumers — reduces checkout friction by 40%), Afterpay and Shop Pay Installments for high-ticket outdoor gear purchases (bikes, skis, kayaks). For Denver's B2B outdoor gear wholesale buyers, add net-30 invoicing via Shopify's B2B tools. For Denver cannabis-adjacent and wellness brands, FactoryJet configures high-risk payment processors (Authorize.net, NMI) that accept hemp and CBD products. All payment configuration is included in the standard 7-day build.",
            },
            {
              category: 'local',
              question: 'Can you build a Shopify store for a Denver tech startup or SaaS company?',
              answer: "Yes — Denver's fast-growing tech scene (Palantir HQ, DoorDash major office, Gusto, Ibotta, Ping Identity, and hundreds of growth-stage startups) creates e-commerce demand for hardware accessories, branded merchandise, and B2B self-serve portals. We build Shopify stores for: developer tool companies with swag and license stores, hardware/IoT startups with accessory and replacement part stores, B2B SaaS companies with self-serve annual subscription purchasing, and tech-forward DTC brands that need headless Next.js performance. Denver's I-25 tech corridor expects fast, well-designed stores — FactoryJet builds Lighthouse 100/100 stores that match the product quality of Denver's best tech companies.",
            },
            {
              category: 'local',
              question: 'Do you serve Boulder and Fort Collins in addition to Denver?',
              answer: "Yes — FactoryJet serves the entire Colorado Front Range: Denver, Boulder, Fort Collins, Colorado Springs, Aurora, Lakewood, Arvada, Westminster, Thornton, and all metros along the I-25 corridor. Boulder's outdoor and natural products brands (Celestial Seasonings, Crocs, Eco-Products, many craft spirits) represent a distinct e-commerce opportunity from Denver's urban market. Fort Collins has its own strong craft brewing and outdoor apparel ecosystem (New Belgium, Odell Brewing). FactoryJet configures city-specific tax rates for every Front Range municipality and builds stores that rank for both city-level and Colorado-level search queries.",
            },
            {
              category: 'local',
              question: 'How do I sell outdoor gear internationally from my Denver Shopify store?',
              answer: "FactoryJet configures Shopify Markets for international outdoor gear selling: multi-currency display (USD + CAD, GBP, EUR, AUD, NZD — key outdoor markets), international shipping zones with DHL and FedEx International carrier rate calculators, HS tariff codes for outdoor equipment (helmets, skis, climbing gear have specific customs classifications), duty and import tax display at checkout, and country-specific shipping restrictions for regulated items (lithium batteries in headlamps, pressurized avalanche airbags). Colorado's outdoor brands have natural international audiences in Canada, Australia, the UK, Norway, Switzerland, and Japan — FactoryJet removes the friction that prevents international sales.",
            },
            {
              category: 'support',
              question: 'Does FactoryJet offer ongoing Shopify maintenance and support plans for Denver businesses?',
              answer: "Yes — ongoing support is built into how FactoryJet works with Denver clients. Every build includes a 30-day support window. Post-launch options: monthly retainer plans from $299/month (up to 4 hours development, priority response, same-day bug fixes), seasonal campaign builds for Denver's outdoor calendar (ski season November–April, summer outdoor July–August, Black Friday), and performance reviews. Denver's outdoor brands operate on a seasonal calendar — FactoryJet retainer clients get pre-built seasonal landing pages, inventory collection updates, and promotion flows ready before each season's peak. We document every build so your Denver team can manage daily operations independently.",
            },
          ]}
        />


        {/* Cross-link: Related Services in Denver */}
        <section className="py-10 bg-[#FAFAF7]">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-sm font-mono text-[#F05A28] uppercase tracking-widest mb-4">
              Also in Denver
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/us/denver/web-design/"
                className="px-5 py-2 rounded-full border border-[#F05A28] text-[#F05A28] text-sm font-medium hover:bg-[#F05A28] hover:text-white transition-colors"
              >
                Web Design →
              </Link>
            </div>
          </div>
        </section>

        {/* ── 14. FINAL CTA ───────────────────────────────────────────── */}
        <EcommerceCityLinksUS currentCity="denver" />
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Build Your Denver Shopify Store?"
          sub="Colorado's outdoor economy, craft brewery scene, and tech-forward consumers are growing faster than most brands can keep up with. Every week without a high-performing Shopify store is a week your competitors own the searches you should. Book a 30-minute audit and we'll have a store blueprint ready within 72 hours."
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
      dangerouslySetInnerHTML={{ __html: getEcommerceCitySchema('denver') }}
    />
  );
}
