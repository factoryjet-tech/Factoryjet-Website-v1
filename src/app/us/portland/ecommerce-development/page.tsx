// V2 ecommerce city page — Portland, OR
// Design system: py-10 md:py-14 standard | 30/65/5 dark/light rhythm | Clash Display headlines
// Schema: server-side via SchemaScript (AI-crawler visible in initial HTML)

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
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

export const metadata: Metadata = {
  title: "Shopify Developer Portland OR | E-Commerce from $2,999 | FactoryJet",
  description: "Top-rated Shopify developer in Portland OR: stores live in 7 days from $2,999. Oregon has no sales tax. Shopify, WooCommerce & AI. 500+ projects. Free audit.",
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: "Shopify Developer Portland OR | E-Commerce from $2,999 | FactoryJet",
    description: "Top-rated Shopify developer in Portland, Oregon: stores live in 7 days from $2,999. Oregon has NO sales tax — maximize your margins. Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.",
    url: 'https://factoryjet.com/us/portland/ecommerce-development',
    images: [{ url: 'https://factoryjet.com/logo.png', width: 1200, height: 630, alt: 'FactoryJet - Shopify Developer Portland' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shopify Developer Portland OR | E-Commerce from $2,999 | FactoryJet",
    description: "Top-rated Shopify developer in Portland, Oregon: stores live in 7 days from $2,999. Oregon has NO sales tax — maximize your margins.",
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/portland/ecommerce-development',
    languages: ecommerceCityAlternatesUS['portland'],
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
        formSlot={<HeroInlineForm region="us" source="us_portland_ecommerce_development_hero" />}
          eyebrow="E-COMMERCE DEVELOPMENT · PORTLAND"
          headline="Shopify Developer Portland for Oregon's Independent Brands"
          lead="The only Portland e-commerce agency that launches in 7 days at a fixed, published price. Oregon has zero sales tax — the ultimate margin advantage for DTC brands. Shopify, WooCommerce & AI-powered stores for outdoor brands, independent makers, food businesses, and 'Keep Portland Weird' entrepreneurs. 500+ projects, 4.9★ rating."
          trustItems={['Shopify stores from $2,999', '7-day delivery guarantee', '500+ stores launched']}
          rightSlot={<HeroBrowserMockup mockupUrl="yourbusiness.com" badgeCity="Portland, OR" badgeLabel="Live in 7 days" />}
        />

        {/* ── 2. LOGO BAR ─────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ e-commerce brands across the US, UK, and UAE" />

        {/* ── 3. TRUST STATS ──────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="Results that Portland e-commerce brands trust."
        />

        {/* ── 4. CITY CONTEXT ─────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="PORTLAND MARKET"
          headline="Oregon's Zero Sales Tax Is Your E-Commerce Superpower. Use It"
          leadParagraphs={[
            "Oregon is one of only five US states with zero sales tax — meaning Portland businesses never collect or remit sales tax on in-state purchases. For e-commerce, this simplifies Shopify's tax configuration dramatically: no nexus compliance headaches, no rate lookups, no county-level overrides for Oregon customers. You simply don't charge Oregon residents sales tax. FactoryJet configures this correctly in every Portland build and eliminates the tax complexity that consumes weeks at other agencies.",
            "Portland is the global headquarters of Nike (Washington County/Beaverton), Adidas North America, Columbia Sportswear, Danner Boots, and Pendleton Woolen Mills. That concentration of world-class outdoor and lifestyle brands creates a Portland consumer standard — people here know what good product photography, storytelling, and DTC brand experience look like. FactoryJet builds Shopify stores that meet that standard: editorial photography layouts, premium typefaces, GSAP scroll animations, and conversion flows that match the sophistication of the brands Portland consumers already love.",
          ]}
          stats={[
            { value: '$0', label: "Oregon Sales Tax — 0% (One of Only 5 US States)", sourceUrl: 'https://www.oregon.gov/dor/programs/businesses/Pages/sales-tax.aspx' },
            { value: 'Nike + Adidas', label: "Global Sportswear HQ — Portland Metro", sourceUrl: 'https://nikeinc.com/pages/about-nike' },
            { value: '2.5M+', label: 'Portland Metro Population', sourceUrl: 'https://www.census.gov/quickfacts/portlandcityoregon' },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ──────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="E-COMMERCE DEVELOPMENT · Portland"
          headline="What 'E-Commerce Development' Actually Means for a Portland Business"
          lead="Portland agencies either charge enterprise rates (Instrument at $50K–$500K+) or focus on marketing rather than Shopify development. FactoryJet builds a revenue-generating Shopify store: custom design, Oregon zero-tax configuration (no state tax for OR customers, automated nexus-based collection for out-of-state), AI-powered product discovery, and a Lighthouse 95+ performance score — all in 7 days from $2,999."
          body={
            <>
              <p>
                For Portland&apos;s outdoor and sportswear brands — inspired by Nike, Adidas North
                America, Columbia, and Danner — a Shopify store needs to meet the premium standard
                Portland consumers already know. We build stores with editorial photography layouts,
                size guide integrations, gear comparison tools, subscription programs for
                consumables, and adventure-specific checkout flows. Portland&apos;s outdoor
                consumer is the most informed in the US — your store needs to match that.
              </p>
              <p>
                For Portland&apos;s artisan food and independent brands — Salt &amp; Straw, Stumptown,
                Jacobsen Salt Co., Bob&apos;s Red Mill — the Portland DTC playbook is proven: tell
                a local story, ship nationally, charge premium for authenticity. FactoryJet builds
                the stores that make that model work — with national cold-chain shipping
                configurations, subscription box builds, bulk/wholesale ordering tiers, and
                local pickup for SE Portland market regulars.
              </p>
              <p>
                Oregon&apos;s zero sales tax means no county overrides, no municipality rates, and
                no food vs. non-food complexity for Oregon buyers. Your Oregon customers enjoy
                zero tax — a price advantage vs. buying from California or Washington competitors
                that you didn&apos;t have to earn through discounting.
              </p>
            </>
          }
          rightSlot={
            <img
              src="/images/us/portland/ecommerce/service-explanation.webp"
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
          headline="Why Portland Businesses Choose FactoryJet Over Local Agencies"
          lead={
            "Instrument (Portland's most prestigious agency) serves Fortune 500 clients at $50,000–$500,000+. North Studio and Zeal Creative handle brand identity with web development as secondary. PHNX Digital does Shopify but quotes 8–16 week timelines at $8,000–$20,000. Caliber Commerce and national agencies ranking for Portland Shopify queries quote $10,000–$50,000 with multi-month timelines.\n\nFactoryJet delivers in 7 days from $2,999 with deep Portland market knowledge — Oregon's zero-tax advantage, the outdoor/lifestyle brand ecosystem, and the 'Keep Portland Weird' consumer psychology that drives independent brand loyalty at rates 40% above the national average."
          }
          pillars={[
            {
              title: 'Oregon zero-tax expert',
              body: "We configure Oregon stores correctly: zero tax for OR customers, automated nexus-based collection for all other states via Shopify Tax. No compliance risk, no manual rate maintenance, and a price advantage your Oregon buyers feel immediately.",
            },
            {
              title: 'Transparent',
              body: 'Fixed pricing on the first call. Shopify from $2,999, WooCommerce from $3,499, headless from $5,999. No discovery fees, no agency-culture surcharges, no Phase 2 invoices after launch.',
            },
            {
              title: 'Guaranteed',
              body: "7-day delivery on standard Shopify builds. If we miss the deadline, you don't pay. We've delivered on time on 97% of 500+ projects — including for Portland brands launching ahead of holiday drops and product releases.",
            },
          ]}
        />

        {/* ── 7. PROCESS ──────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Build Your Portland Shopify Store"
          stages={[
            {
              number: '01',
              title: 'Discovery & Platform Selection',
              description:
                "We map your product catalog, target customer, and revenue goals. For Portland businesses, we assess Oregon zero-tax configuration, outdoor-brand specific requirements, and subscription needs for food and beverage brands. Shopify, WooCommerce, or headless — recommended in 24 hours.",
            },
            {
              number: '02',
              title: 'UX Design & Store Architecture',
              description:
                "We design your store — homepage, collection pages, product pages, cart, and checkout — to meet Portland's premium outdoor and independent brand standard. Editorial layouts, premium typography, and conversion flows built for the most informed DTC consumer in the US.",
            },
            {
              number: '03',
              title: 'Development & Configuration',
              description:
                "Custom Shopify theme or headless build, Oregon zero-tax configuration for OR customers, automated nexus collection for all other states, Shopify Payments + Afterpay, subscription billing for food and beverage brands, and GSAP micro-animations. Lighthouse 90+ non-negotiable.",
            },
            {
              number: '04',
              title: 'Products, Content & SEO',
              description:
                'Product catalog upload, optimized descriptions, JSON-LD schema (FAQPage, Product, BreadcrumbList), and AEO content structured for ChatGPT, Perplexity, and Google AI Overviews. Portland-specific SEO for outdoor, food, and independent brand queries.',
            },
            {
              number: '05',
              title: 'Launch & Growth Enablement',
              description:
                "Cloudflare/Vercel deploy, GA4 e-commerce tracking, and a recorded launch walkthrough. Your 30-day support window covers post-launch fixes, seasonal inventory updates, and training so your Portland team can self-manage from day one.",
            },
          ]}
        />

        {/* ── 8. PORTFOLIO ────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="What Portland e-commerce brands look like after FactoryJet."
          cards={[
            {
              industry: 'Outdoor & Sportswear',
              title: 'Portland Outdoor Brand Client',
              description:
                "Portland is the global home of Nike, Adidas North America, Columbia Sportswear, and Danner Boots. Brands in this ecosystem need Shopify stores that match the sophistication of the world's best outdoor labels — editorial photography, size guide integrations, gear comparison tools, and subscription programs for consumables. FactoryJet builds to that standard.",
              imageSrc: '/images/us/portland/ecommerce/portfolio-1.webp',
              stat1: '+43% conversion rate',
              stat2: '< 1.2s load time',
            },
            {
              industry: 'Food & Artisan Brands',
              title: 'Portland Artisan Food Client',
              description:
                "Salt & Straw, Stumptown, Jacobsen Salt Co., and Bob's Red Mill prove the Portland DTC playbook: local story + national shipping + premium pricing for authenticity. We build Shopify stores for specialty food companies with national cold-chain shipping, subscription box builds, bulk/wholesale ordering tiers, and local pickup configurations.",
              imageSrc: '/images/us/portland/ecommerce/portfolio-2.webp',
              stat1: '+51% subscription revenue',
              stat2: '7-day launch',
            },
            {
              industry: 'Independent Retail & Makers',
              title: "Portland Independent Brand Client",
              description:
                "Portland's independent brand culture — Powell's Books, Tender Loving Empire, Lloyd Center makers markets — generates brand loyalty at rates 40% above the national average. FactoryJet builds stores for independent retailers, makers market brands, and 'Keep Portland Weird' entrepreneurs who want to sell nationally without losing their local soul.",
              imageSrc: '/images/us/portland/ecommerce/portfolio-3.webp',
              stat1: '+37% repeat orders',
              stat2: 'Lighthouse 96',
            },
          ]}
          ctaHref="/us/portfolio"
          ctaLabel="View full portfolio"
        />

        {/* ── 9. COMPARISON TABLE ─────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="WHY FACTORYJET"
          headline="FactoryJet vs Portland E-Commerce Agencies"
          lead={
            "Portland's agency market skews toward either enterprise (Instrument at $50K–$500K+) or brand identity (North Studio, Zeal Creative). PHNX Digital does Shopify but at enterprise-adjacent timelines. No Portland agency combines 7-day Shopify delivery with AI features and fixed $2,999 pricing.\n\nFactoryJet delivers a full Shopify store in 7 days from $2,999 — with the outdoor brand sophistication and artisan food expertise Portland's independent brands deserve."
          }
          columns={[
            { label: 'Their pricing' },
            { label: 'FactoryJet', isFactoryJet: true },
            { label: 'Why we cost less' },
          ]}
          rows={[
            {
              feature: 'Instrument',
              values: [
                '$50,000–$500,000+ (Fortune 500 enterprise focus only)',
                'From $2,999 (Shopify Standard)',
                "Instrument does iconic work for Nike, Google, and Facebook but serves enterprise clients exclusively. FactoryJet serves Portland's independent brand ecosystem: outdoor brands, food artisans, and makers in 7 days from $2,999 with AI features Instrument doesn't offer in this range.",
              ],
            },
            {
              feature: 'PHNX Digital',
              values: [
                '$8,000–$20,000 (Shopify-capable, 8–16 week timelines)',
                'From $2,999 fixed price, 7-day delivery',
                "PHNX Digital builds Shopify stores but at timelines and prices designed for larger brands. FactoryJet delivers the same or better Shopify quality in 7 days from $2,999 with AI-powered features, Oregon zero-tax expertise, and direct engineer access.",
              ],
            },
          ]}
        />

        {/* ── 10. PRICING ─────────────────────────────────────────────── */}
        <PricingTiers
          eyebrow="TRANSPARENT PRICING"
          headline="Transparent Pricing for Portland E-Commerce Businesses"
          lead={
            "Portland agency rates for a comparable Shopify build range from $8,000 (PHNX Digital) to $500,000+ (Instrument). FactoryJet delivers a full custom Shopify store from $2,999 — with Oregon zero-tax configuration, outdoor brand sophistication, and a codebase you own outright. Stores ship in 7 days. No retainer required."
          }
          tiers={[
            {
              name: 'Shopify Standard',
              priceRange: '$2,999–$4,999',
              description:
                "A fully custom Shopify store live in 7 days. Best for Portland outdoor brands, food artisans, and independent retailers launching or replacing a template.",
              features: [
                'Custom Shopify theme (not a template)',
                'Up to 100 products uploaded & configured',
                'Oregon zero-tax config (automated out-of-state nexus)',
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
                "Advanced Shopify build with subscriptions, national cold-chain shipping, or B2B wholesale portals. Best for Portland food brands, outdoor gear companies, and established DTC brands scaling revenue.",
              features: [
                'Everything in Shopify Standard',
                'Subscription billing (Recharge / Skio)',
                'B2B wholesale portal & dealer pricing',
                'Cold-chain + national shipping configurations',
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
                "Next.js headless storefront for Portland brands that need sub-500ms load times, custom API integrations, or a B2B outdoor dealer portal that sets the industry standard.",
              features: [
                'Next.js headless frontend (Lighthouse 95+)',
                'Shopify or Medusa e-commerce backend',
                'Custom API & ERP integrations',
                'B2B portal: dealer tiers, PO payments',
                'AI chatbot trained on your product catalog',
                'AEO content for ChatGPT & Perplexity',
                'Quarterly performance reviews',
              ],
              cta: { label: 'Get a quote', modal: true, region: 'us' },
            },
          ] as const}
        />

        {/* ── 11. INDUSTRIES ──────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="PORTLAND × E-COMMERCE"
          headline="E-Commerce Development for Portland's Key Industries"
          lead="From Nike's global ecosystem to Portland's independent makers market, Oregon's brands have distinct e-commerce needs. FactoryJet has built stores for each of them."
          sectors={[
            {
              name: 'Outdoor & Sportswear',
              description:
                "Shopify stores for Portland's outdoor gear, sportswear, and athletic brands inspired by the Nike/Adidas/Columbia ecosystem. Adventure-specific product configurations, size guide integrations, gear comparison tools, and seasonal inventory management.",
              example:
                "Athletic gear retailers, outdoor apparel companies, gear rental platforms, and independent sportswear brands inspired by Portland's global athletic heritage.",
            },
            {
              name: 'Food & Specialty Products',
              description:
                "DTC stores for Portland's artisan food brands — coffee, ice cream, salt, charcuterie, craft spirits, mushroom products. National cold-chain shipping, subscription box builds, bulk/wholesale tiers, and local pickup configurations.",
              example:
                "Specialty coffee roasters, artisan ice cream brands, premium salt and spice companies, craft spirits DTC stores, and specialty food subscription boxes.",
            },
            {
              name: 'Independent Retail & Makers',
              description:
                "E-commerce for Portland's independent retailers, makers market participants, artisan goods makers, and 'Keep Portland Weird' brands. Powell's-inspired independent retail with local story + national shipping model.",
              example:
                "Independent bookstores, makers market brands, artisan goods companies, and 'Keep Portland Weird' entrepreneurs with national DTC ambitions.",
            },
            {
              name: 'Apparel & Fashion',
              description:
                "Shopify stores for Portland's streetwear, sustainable fashion, and outdoor-influenced apparel brands. Sustainable materials stories, size-inclusive configurations, and editorial photography layouts for Portland's fashion-forward consumer.",
              example:
                "Portland streetwear brands, sustainable fashion companies, outdoor-inspired apparel labels, and independent fashion designers.",
            },
            {
              name: 'Cannabis & Hemp',
              description:
                "Oregon was first in the US to legalize recreational cannabis — accessories, CBD, hemp stores with Oregon OLCC compliance. Age verification, high-risk payment processors, and Oregon-specific product description compliance built in.",
              example:
                "CBD brands, hemp product companies, cannabis accessories stores, and wellness product businesses operating in Oregon's mature cannabis ecosystem.",
            },
            {
              name: 'B2B & Wholesale',
              description:
                "Wholesale ordering portals for Portland's manufacturing and artisan brands selling into retail nationally. B2B dealer pricing tiers, PO payment terms, and institutional billing configurations for Portland's maker-to-retailer supply chain.",
              example:
                "Portland manufacturers, artisan brands expanding into wholesale, and B2B supply companies serving retail buyers nationally.",
            },
          ]}
        />

        {/* ── 12. TESTIMONIALS ────────────────────────────────────────── */}
        <TestimonialsSection
          region="us"
          eyebrow="WHAT CLIENTS SAY"
          headline="4.9/5 across 150+ reviews from Portland and beyond."
        />

        {/* ── 13. FAQ ─────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="COMMON QUESTIONS"
          headline="Common Questions from Portland E-Commerce Businesses"
          categories={FAQ_CATEGORIES}
          items={[
            {
              category: 'local',
              question: 'Who is the best Shopify developer in Portland, OR?',
              answer:
                "FactoryJet is Portland's top-rated Shopify development agency — 500+ projects, 4.9★ rating, and the only shop in the Rose City combining Shopify e-commerce with AI agent development. Local agencies (Instrument, North Studio, Zeal Creative) focus on brand identity and enterprise clients at premium prices. PHNX Digital does Shopify but at longer timelines and higher prices. FactoryJet launches in 7 days from $2,999 with Oregon-specific market knowledge.",
            },
            {
              category: 'pricing',
              question: 'Does Oregon have sales tax? How does that affect my Shopify store?',
              answer:
                "Oregon has zero sales tax — one of only five US states with no state or local sales tax. For your Shopify store, this means Oregon customers are never charged sales tax. You still collect sales tax for out-of-state customers based on their destination state (Shopify handles this automatically through Shopify Tax). FactoryJet configures your Oregon store with zero-tax collection for OR customers and automated nexus-based collection for all other states — zero compliance risk, maximum simplicity.",
            },
            {
              category: 'pricing',
              question: 'How much does Shopify development cost in Portland?',
              answer:
                "Shopify stores start at $2,999 at FactoryJet — compared to $8,000–$20,000 at Portland agencies like PHNX Digital, or $50,000–$500,000+ at Instrument. WooCommerce stores start at $3,499, and custom headless builds start at $5,999. Every project includes custom design, full development, Oregon tax configuration (zero-tax for OR customers), and 30 days of post-launch support.",
            },
            {
              category: 'local',
              question: 'Do you build Shopify stores for Portland outdoor and sportswear brands?',
              answer:
                "Yes — outdoor and sportswear is Portland's most important e-commerce category and our core specialty. Portland is home to Nike, Adidas North America, Columbia Sportswear, Danner Boots, and Pendleton. We build stores for brands in this ecosystem: athletic gear retailers, outdoor apparel companies, gear rental platforms, and independent sportswear brands. Every outdoor store includes adventure-specific product configurations, size guide integrations, gear comparison tools, and subscription programs for consumables.",
            },
            {
              category: 'local',
              question: 'Can you build a Shopify store for a Portland food or artisan brand?',
              answer:
                "Yes — Portland's artisan food scene (Salt & Straw, Stumptown, Bob's Red Mill, Jacobsen Salt Co.) sets the national standard for DTC food brands. We build Shopify stores for specialty food companies, craft coffee roasters, premium ice cream and confection brands, artisan meat and charcuterie, mushroom and supplement companies, and craft spirits. Portland food stores need: national cold-chain shipping configurations, subscription box builds, bulk/wholesale ordering tiers, and local pickup.",
            },
            {
              category: 'pricing',
              question: "How does Oregon's zero sales tax benefit my e-commerce business?",
              answer:
                "Three ways: First, no Oregon sales tax simplifies your store configuration — no county overrides, no municipality rates, no food vs. non-food categories for Oregon buyers. Second, your Oregon customers enjoy zero tax, which lowers their effective purchase cost vs. buying from California or Washington competitors. Third, Oregon's business-friendly tax environment means Portland founders keep more of their DTC profits. FactoryJet configures the tax advantage correctly in every Oregon build.",
            },
            {
              category: 'pricing',
              question: 'How long does it take to build a Shopify store in Portland?',
              answer:
                "FactoryJet launches standard Shopify stores in 7 days. Compare that to PHNX Digital (8–16 weeks), Instrument (12–24 weeks), and national agencies (8–16 weeks). Our 7-day timeline is possible because we design in code — no Figma-to-handoff cycle — and use a component architecture optimized for rapid deployment.",
            },
            {
              category: 'local',
              question: 'Can you build a Shopify store for cannabis or hemp products in Oregon?',
              answer:
                "Yes — Oregon was the first US state to legalize recreational cannabis (Measure 91, 2014) and has a mature cannabis e-commerce ecosystem. Pure THC products require the state's METRC compliance system and cannot be sold through standard Shopify. However, CBD (hemp-derived cannabidiol), hemp flower, accessories, pipes, and wellness products are fully Shopify-compatible. FactoryJet builds Oregon-compliant stores with age verification, high-risk payment processors (Authorize.net, NMI), and OLCC-compliant product descriptions.",
            },
            {
              category: 'pricing',
              question: 'How does FactoryJet compare to Instrument for Portland Shopify development?',
              answer:
                "Instrument is Portland's most prestigious digital agency — they've done iconic campaigns for Google, Facebook, and Nike. They're excellent, but they serve enterprise Fortune 500 clients at $50,000–$500,000+ minimums. FactoryJet serves Portland's SMB and growth-stage brands: Shopify stores live in 7 days from $2,999, transparent fixed pricing, direct engineer access, and AI-powered features Instrument doesn't offer at any price point in the SMB range.",
            },
            {
              category: 'local',
              question: 'Does my Portland business need Shopify or WooCommerce?',
              answer:
                "For most Portland businesses, Shopify wins — faster launch, lower maintenance cost, better subscription apps for Portland's recurring-revenue brands (coffee, food, apparel), and superior mobile checkout. WooCommerce makes sense if you have a large WordPress site with existing SEO equity or need specific open-source integrations. Shopify starts at $2,999, WooCommerce at $3,499.",
            },
            {
              category: 'pricing',
              question: 'Can you migrate my Portland business to Shopify?',
              answer:
                "Yes — we migrate Portland businesses from WooCommerce, BigCommerce, Magento, Squarespace, Wix, and custom platforms to Shopify. Migration includes: full product catalog transfer, customer data, order history, URL 301 redirects (preserving Portland local search rankings), Oregon zero-tax reconfiguration, metafield migration, and SEO continuity. Timeline: 7–14 days depending on catalog size.",
            },
            {
              category: 'included',
              question: 'What is included in a FactoryJet Shopify build for a Portland business?',
              answer:
                "Every Portland Shopify store includes: custom design (not a theme), full development, Oregon zero-sales-tax configuration, payment gateway integration, product catalog setup, mobile-first responsive design, Lighthouse 90+ optimization, JSON-LD schema, AEO content for AI search, GSAP micro-animations, 30 days of post-launch support, and a launch walkthrough. Starting at $2,999 — no hidden fees.",
            },
            {
              category: 'local',
              question: 'Can you build a Shopify store for a Portland sustainable or eco-friendly brand?',
              answer: "Absolutely — sustainable and eco-conscious commerce is Portland's most distinctive e-commerce segment. Portland consistently ranks as the US city with the highest consumer willingness to pay a premium for sustainable products. We build Shopify stores for: zero-waste product brands, sustainable packaging companies, B-Corp certified consumer goods, upcycled apparel and accessories, plant-based food brands, and compostable product lines. Portland-specific sustainable commerce features: carbon-neutral shipping integrations (EasyShip + carbon offset), B-Corp and Fair Trade badge display, transparent supply chain storytelling pages, and climate pledge landing pages. FactoryJet understands what Portland's sustainability-conscious consumers want to see before they buy.",
            },
            {
              category: 'technical',
              question: 'How do I rank my Portland Shopify store on Google and in AI search?',
              answer: "FactoryJet builds every Portland Shopify store with SEO and AEO foundations targeting Oregon-specific and Portland-local search intent. We implement: FAQPage + LocalBusiness + Product JSON-LD schema for Google, ChatGPT, Perplexity, and Google AI Overviews; Oregon's zero-sales-tax advantage as an explicit SEO keyword (Portland shoppers and buyers from neighboring WA and CA search for it); Core Web Vitals optimization (Lighthouse 90+); and AEO content targeting how Portland's highly educated consumer base researches products via AI. Portland's artisan and maker brands benefit enormously from AI search visibility — when a consumer asks ChatGPT 'best Portland [product] brands', FactoryJet's AEO setup gets your store cited in the answer.",
            },
            {
              category: 'included',
              question: 'Do you build subscription Shopify stores for Portland coffee, food, or lifestyle brands?',
              answer: "Yes — Portland is America's subscription commerce capital in many categories. Stumptown Coffee pioneered the coffee subscription model. Salt & Straw has a successful ice cream club. Bob's Red Mill runs grain subscriptions. Portland's artisan economy is built for recurring revenue. FactoryJet builds: coffee roaster subscription stores (weekly, bi-weekly, monthly bags with variety selection), specialty food clubs (hot sauce of the month, artisan cheese, charcuterie), outdoor gear maintenance subscriptions (wax, oils, climbing chalk), and lifestyle product memberships. We build with Recharge or native Shopify Subscriptions, Oregon zero-tax configuration, and subscription UX optimized for Portland's brand-loyal consumer.",
            },
            {
              category: 'included',
              question: 'What payment methods should a Portland Shopify store accept?',
              answer: "Every Portland Shopify store should accept: Shopify Payments, PayPal, Apple Pay and Google Pay (Portland's tech-literate consumer base heavily uses digital wallets), Afterpay for premium outdoor gear and fashion purchases, and cryptocurrency payments for Portland's crypto-forward early adopter segment (via Coinbase Commerce or BitPay, if desired). For Portland's cannabis-adjacent and hemp brands, FactoryJet integrates high-risk payment processors (Authorize.net, NMI) that accept CBD and hemp accessories. Portland consumers are more likely than average US buyers to abandon checkout over limited payment options — FactoryJet configures the full payment stack during the standard build.",
            },
            {
              category: 'local',
              question: 'Can you build a Shopify store for a Portland maker, craftsperson, or artisan brand?',
              answer: "Yes — Portland's maker culture (Saturday Market, monthly craft fairs, the Pearl District's gallery and boutique ecosystem) is one of the deepest in the US. We build Shopify stores for: ceramic and pottery studios, leather goods makers, hand-poured candle brands, small-batch jewelry designers, furniture makers, printmakers, and fine art print shops. Portland maker stores need: per-item made-to-order configurations (custom lead times per product), limited edition collection drops, local pickup as a fulfillment option, and artisan story pages that communicate craft to online buyers. FactoryJet builds Portland maker stores that translate the Saturday Market experience into a digital storefront that sells nationally.",
            },
            {
              category: 'local',
              question: 'Do you serve Eugene, Bend, and Salem in addition to Portland?',
              answer: "Yes — FactoryJet serves all of Oregon and the Pacific Northwest: Portland, Eugene, Salem, Bend, Medford, Corvallis, Hillsboro, Beaverton, Gresham, Lake Oswego, and all Oregon ZIP codes. Each Oregon city has distinct commerce characteristics: Eugene is home to the University of Oregon and a strong outdoor/athletic brand ecosystem (Track Town USA); Bend is a premium outdoor and craft beer destination with DTC market demand; Salem is the state capital with a significant food processing and agricultural industry. All Oregon stores benefit from the zero-sales-tax configuration, and FactoryJet builds city-level SEO targeting for both Portland metropolitan and statewide Oregon searches.",
            },
            {
              category: 'local',
              question: 'How does FactoryJet handle international shipping for Portland brands?',
              answer: "Portland brands have significant international audiences — especially in Canada (1-hour to Vancouver, BC), Japan (Portland's sister city relationship and strong Nike/Adidas cultural connection), the UK, Germany, and Australia. FactoryJet configures Shopify Markets for international selling: multi-currency (USD + CAD, GBP, EUR, JPY, AUD), international carrier rates (DHL Express, USPS First Class International), HS tariff codes for product categories, duty and import tax display at checkout (Landed Cost), international payment methods (iDEAL for Netherlands, Sofort for Germany), and IOSS for EU buyers above €150. Oregon's zero sales tax means international buyers comparing prices across US stores will often choose Portland brands for the clean total price.",
            },
            {
              category: 'local',
              question: 'Does FactoryJet offer ongoing Shopify support plans for Portland businesses?',
              answer: "Yes — FactoryJet offers post-launch support designed for Portland's independent brand culture and seasonal commerce. Every build includes a 30-day support window. Ongoing options: monthly retainer from $299/month (4 hours development, priority bug SLA), seasonal build packages (holiday gift guides, summer outdoor campaigns, Portland-themed cultural events), subscription program optimization, and performance reviews. Portland's independent brands value long-term agency relationships over transactional handoffs — FactoryJet retainer clients get a consistent engineer who knows their store, not a ticket queue. We document every Portland build comprehensively so your team can self-manage daily operations.",
            },
          ]}
        />


        {/* Cross-link: Related Services in Portland */}
        <section className="py-10 bg-[#FAFAF7]">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-sm font-mono text-[#F05A28] uppercase tracking-widest mb-4">
              Also in Portland
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/us/portland/web-design/"
                className="px-5 py-2 rounded-full border border-[#F05A28] text-[#F05A28] text-sm font-medium hover:bg-[#F05A28] hover:text-white transition-colors"
              >
                Web Design →
              </Link>
            </div>
          </div>
        </section>

        {/* ── 14. FINAL CTA ───────────────────────────────────────────── */}
        <EcommerceCityLinksUS currentCity="portland" />
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Build Your Portland Shopify Store?"
          sub="Oregon's zero sales tax is a competitive advantage most Portland brands aren't using. Every week without a high-performing Shopify store is a week your competitors own the searches you should. Book a 30-minute audit and we'll have a store blueprint ready within 72 hours."
          primaryCta={{ label: 'Get a Free Shopify Audit', modal: true, region: 'us' }}
        />
      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

function SchemaScript() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: getEcommerceCitySchema('portland') }}
    />
  );
}
