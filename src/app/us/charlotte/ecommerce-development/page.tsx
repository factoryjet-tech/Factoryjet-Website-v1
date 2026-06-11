// V2 ecommerce city page — Charlotte, NC
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
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

export const metadata: Metadata = {
  title: 'Shopify Developer Charlotte NC | From $2,999 | FactoryJet',
  description: "Shopify developer in Charlotte NC: stores live in 7 days from $2,999. Banking capital e-commerce — Shopify, WooCommerce & AI. 500+ projects. Free audit.",
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Developer Charlotte NC | From $2,999 | FactoryJet',
    description: "Top-rated Shopify developer in Charlotte, North Carolina: stores live in 7 days from $2,999. Banking capital e-commerce specialists — Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.",
    url: 'https://factoryjet.com/us/charlotte/ecommerce-development',
    images: [{ url: 'https://factoryjet.com/logo.png', width: 1200, height: 630, alt: 'FactoryJet - Shopify Developer Charlotte' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Developer Charlotte NC | From $2,999 | FactoryJet',
    description: "Top-rated Shopify developer in Charlotte, NC: stores live in 7 days from $2,999. Banking capital e-commerce specialists — Shopify, WooCommerce & AI.",
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/charlotte/ecommerce-development',
    languages: ecommerceCityAlternatesUS['charlotte'],
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
          eyebrow="E-COMMERCE DEVELOPMENT · CHARLOTTE"
          headline="Shopify Developer Charlotte for North Carolina Businesses"
          lead="The only Charlotte e-commerce agency that launches in 7 days at a fixed, published price. Shopify, WooCommerce & AI-powered stores for Queen City's DTC brands, NASCAR ecosystem, financial services adjacent brands, and fast-growing Charlotte tech scene. 500+ projects, 4.9★ rating."
          primaryCta={{ label: 'Get a Free Shopify Audit', modal: true, region: 'us' }}
          trustItems={['Shopify stores from $2,999', '7-day delivery guarantee', '500+ stores launched']}
          rightSlot={<HeroBrowserMockup mockupUrl="yourbusiness.com" badgeCity="Charlotte, NC" badgeLabel="Live in 7 days" />}
        />

        {/* ── 2. LOGO BAR ─────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ e-commerce brands across the US, UK, and UAE" />

        {/* ── 3. TRUST STATS ──────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="Results that Charlotte e-commerce brands trust."
        />

        {/* ── 4. CITY CONTEXT ─────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="CHARLOTTE MARKET"
          headline="America's Banking Capital Is Becoming a DTC Powerhouse"
          leadParagraphs={[
            "Charlotte is the second-largest US banking center after New York. Bank of America HQ, Truist Financial HQ, Wells Fargo East Coast operations, and Ally Financial HQ collectively manage $3 trillion+ in assets from Charlotte. That financial density creates a high-income consumer base — Charlotte's median household income exceeds the national average, and the banking corridor's $200,000+ income households create premium DTC demand for luxury goods, apparel, home furnishings, and food products. FactoryJet builds Shopify stores that convert this affluent Charlotte consumer into paying customers.",
            "Charlotte is the home of NASCAR. The NASCAR Hall of Fame, Stewart-Haas Racing, Hendrick Motorsports, Joe Gibbs Racing, and hundreds of NASCAR team headquarters and suppliers operate in the Charlotte metro — creating a $700M NASCAR merchandise ecosystem. Charlotte/Mecklenburg County sales tax runs 7.25% (NC state 4.75% + Mecklenburg County 2.5%), one of the more competitive combined rates in the Southeast. FactoryJet configures every Charlotte store's complete North Carolina tax settings.",
          ]}
          stats={[
            { value: '2.7M+', label: 'Charlotte Metro Population', sourceUrl: 'https://www.census.gov/quickfacts/charlottecitynorthcarolina' },
            { value: '$3T+', label: 'Assets Managed from Charlotte (BofA + Truist + Ally)', sourceUrl: 'https://investor.bankofamerica.com/' },
            { value: '7.25%', label: 'Charlotte / Mecklenburg County Combined Sales Tax', sourceUrl: 'https://www.ncdor.gov/taxes-forms/sales-and-use-tax/sales-and-use-tax-rates' },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ──────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="E-COMMERCE DEVELOPMENT · Charlotte"
          headline="What 'E-Commerce Development' Actually Means for a Charlotte Business"
          lead="Charlotte agencies either focus on marketing (Lyons Den, TradeMark Media) or charge enterprise rates without Shopify specialization. FactoryJet builds a revenue-generating store: custom design, NC sales tax configured correctly (7.25% Mecklenburg County), AI-powered product discovery, and a Lighthouse 95+ performance score — all in 7 days from $2,999."
          body={
            <>
              <p>
                For Charlotte&apos;s NASCAR and motorsports brands — official team merchandise
                stores, driver DTC shops, and automotive aftermarket e-commerce — the Shopify
                store is the primary channel to capture fan spend directly at 30% higher margins
                than Amazon or Fanatics. Charlotte is the NASCAR capital of the world:
                Hendrick Motorsports, Stewart-Haas Racing, and Joe Gibbs Racing all headquartered
                here. FactoryJet builds NASCAR merchandise stores with complex licensing
                configurations, limited-edition drop mechanics, and fan loyalty programs.
              </p>
              <p>
                For Charlotte&apos;s financial services adjacent brands — professional apparel,
                business accessories, B2B software tools — the banking corridor&apos;s 50,000+
                Bank of America employees and 25,000 Truist workers generate corporate gifting
                and professional purchasing demand worth tens of millions annually. FactoryJet
                builds B2B-capable Shopify stores with institutional PO payment terms, dealer
                pricing tiers, and the enterprise-grade security and PCI compliance Charlotte&apos;s
                banking-corridor buyers expect.
              </p>
              <p>
                North Carolina&apos;s 4.75% state sales tax rate is among the lowest in the
                Southeast, making Charlotte competitive against Virginia, Georgia, and South
                Carolina markets. FactoryJet configures all NC county rates — Mecklenburg (7.25%),
                Wake/Raleigh (7.25%), Durham (7.5%), and Greensboro/Guilford (6.75%) —
                in every Charlotte build.
              </p>
            </>
          }
          rightSlot={
            <img
              src="/images/us/charlotte/ecommerce/service-explanation.webp"
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
          headline="Why Charlotte Businesses Choose FactoryJet Over Local Agencies"
          lead={
            "Lyons Den Creative and TradeMark Media handle branding and marketing in Charlotte but don't specialize in Shopify e-commerce. Elevation Web and Brand Fuel do e-commerce but quote 8–16 week timelines at $8,000–$25,000. National agencies targeting Charlotte (Thrive, WebFX) charge $10,000–$50,000 with no Charlotte market knowledge.\n\nFactoryJet delivers in 7 days from $2,999 with deep Charlotte expertise: the NASCAR merchandise ecosystem, Mecklenburg County tax structure, and the banking corridor's premium consumer profile that national agencies overlook entirely."
          }
          pillars={[
            {
              title: 'NASCAR-commerce expert',
              body: "Charlotte is the NASCAR capital of the world — 80%+ of NASCAR teams headquartered here. We build official team merchandise stores, driver DTC shops, and motorsports aftermarket e-commerce with licensed drop mechanics, fan loyalty programs, and direct-to-fan revenue capture at 30%+ higher margins than Amazon.",
            },
            {
              title: 'Transparent',
              body: 'Fixed pricing on the first call. Shopify from $2,999, WooCommerce from $3,499, headless from $5,999. No discovery fees, no B2B-complexity surcharges, no Phase 2 invoices after launch.',
            },
            {
              title: 'Guaranteed',
              body: "7-day delivery on standard Shopify builds. If we miss the deadline, you don't pay. We've delivered on time on 97% of 500+ projects — including for Charlotte brands launching ahead of NASCAR race weekends and banking-corridor corporate gifting seasons.",
            },
          ]}
        />

        {/* ── 7. PROCESS ──────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Build Your Charlotte Shopify Store"
          stages={[
            {
              number: '01',
              title: 'Discovery & Platform Selection',
              description:
                "We map your product catalog, target customer, and revenue goals. For Charlotte businesses, we assess NASCAR licensing requirements, financial services B2B needs, and corporate gifting configurations. Shopify, WooCommerce, or headless — recommended in 24 hours.",
            },
            {
              number: '02',
              title: 'UX Design & Store Architecture',
              description:
                "We design your store — homepage, collection pages, product pages, cart, and checkout — with Charlotte's premium banking-corridor consumer in mind. Professional aesthetics, high-AOV conversion flows, and fan-engagement mechanics for NASCAR merchandise.",
            },
            {
              number: '03',
              title: 'Development & Configuration',
              description:
                "Custom Shopify theme or headless build, North Carolina sales tax setup (7.25% Mecklenburg + all NC county rates), Shopify Payments + Afterpay, B2B pricing tiers for corporate buyers, and GSAP micro-animations. Lighthouse 90+ on every Charlotte build.",
            },
            {
              number: '04',
              title: 'Products, Content & SEO',
              description:
                'Product catalog upload, optimized descriptions, JSON-LD schema (FAQPage, Product, BreadcrumbList), and AEO content structured for ChatGPT, Perplexity, and Google AI Overviews for Charlotte-specific product and industry queries.',
            },
            {
              number: '05',
              title: 'Launch & Growth Enablement',
              description:
                "Cloudflare/Vercel deploy, GA4 e-commerce tracking, and a recorded launch walkthrough. Your 30-day support window covers post-launch fixes, NASCAR season inventory updates, and training so your Charlotte team can self-manage from day one.",
            },
          ]}
        />

        {/* ── 8. PORTFOLIO ────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="What Charlotte e-commerce brands look like after FactoryJet."
          cards={[
            {
              industry: 'NASCAR & Motorsports',
              title: 'Charlotte NASCAR Brand Client',
              description:
                "Charlotte is the NASCAR capital of the world — Hendrick Motorsports, Stewart-Haas Racing, and Joe Gibbs Racing all headquartered here. NASCAR fans are the most brand-loyal consumers in American sports. FactoryJet builds official team merchandise stores with licensed drop mechanics, fan loyalty programs, and direct-to-fan revenue capture at 30%+ higher margins than Amazon or Fanatics.",
              imageSrc: '/images/us/charlotte/ecommerce/portfolio-1.webp',
              stat1: '+47% direct revenue',
              stat2: '7-day launch',
            },
            {
              industry: 'Home & Luxury Goods',
              title: 'Charlotte Premium Home Brand Client',
              description:
                "Charlotte's banking corridor — Bank of America, Truist, Ally Financial — creates a high-income consumer base with premium home goods demand. $200,000+ household income in the banking district creates consistent AOV above $300. We build Shopify stores with editorial layouts, premium photography, and high-AOV conversion flows optimized for Charlotte's affluent professional buyer.",
              imageSrc: '/images/us/charlotte/ecommerce/portfolio-2.webp',
              stat1: '+41% AOV increase',
              stat2: 'Lighthouse 94',
            },
            {
              industry: 'Apparel & Fashion',
              title: 'Charlotte Fashion Brand Client',
              description:
                "Charlotte's emerging fashion scene — Southern lifestyle apparel, NASCAR-adjacent merchandise, and professional attire for the banking corridor — creates DTC demand across multiple aesthetics. We build Shopify stores with size-inclusive configurations, lookbook layouts, subscription styling boxes, and national shipping for Charlotte's cultural export market.",
              imageSrc: '/images/us/charlotte/ecommerce/portfolio-3.webp',
              stat1: '+36% repeat orders',
              stat2: '< 1.3s load time',
            },
          ]}
          ctaHref="/us/portfolio"
          ctaLabel="View full portfolio"
        />

        {/* ── 9. COMPARISON TABLE ─────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="WHY FACTORYJET"
          headline="FactoryJet vs Charlotte E-Commerce Agencies"
          lead={
            "Charlotte's agency market focuses heavily on marketing and branding — few specialize in Shopify e-commerce. Elevation Web and Brand Fuel do Shopify but charge $8,000–$25,000 with 8–16 week timelines. National agencies like Thrive charge $10,000–$50,000 with no Charlotte market knowledge.\n\nFactoryJet delivers a full Shopify store in 7 days from $2,999 — with NASCAR commerce expertise and banking-corridor B2B capabilities that Charlotte agencies simply don't offer."
          }
          columns={[
            { label: 'Their pricing' },
            { label: 'FactoryJet', isFactoryJet: true },
            { label: 'Why we cost less' },
          ]}
          rows={[
            {
              feature: 'Elevation Web',
              values: [
                '$8,000–$25,000 (Shopify-capable, 8–16 week timelines)',
                'From $2,999 (Shopify Standard)',
                "Elevation Web builds good Shopify stores but charges mid-market rates with standard timelines. FactoryJet delivers in 7 days from $2,999 with AI features, NASCAR commerce expertise, and B2B banking-corridor configurations that Elevation Web doesn't offer at this price point.",
              ],
            },
            {
              feature: 'Thrive Internet Marketing',
              values: [
                '$150–$300/hr, no fixed pricing (Fort Worth-based, no Charlotte presence)',
                'From $2,999 fixed price, 7-day delivery',
                "Thrive is a Fort Worth digital marketing agency with web development as a side service and no Charlotte market knowledge. FactoryJet delivers in 7 days from $2,999 with deep Queen City expertise — NASCAR ecosystem, Mecklenburg tax structure, banking corridor consumer profile.",
              ],
            },
          ]}
        />

        {/* ── 10. PRICING ─────────────────────────────────────────────── */}
        <PricingTiers
          eyebrow="TRANSPARENT PRICING"
          headline="Transparent Pricing for Charlotte E-Commerce Businesses"
          lead={
            "Charlotte agency rates for a comparable Shopify build typically run $8,000–$25,000. National agencies like WebFX quote $10,000–$50,000. FactoryJet delivers a full custom Shopify store from $2,999 — that's at a fixed, published price — with NASCAR commerce and B2B banking-corridor capabilities, faster timeline, and a codebase you own outright."
          }
          tiers={[
            {
              name: 'Shopify Standard',
              priceRange: '$2,999–$4,999',
              description:
                "A fully custom Shopify store live in 7 days. Best for Charlotte DTC founders, apparel brands, food businesses, and NASCAR merchandise brands launching or replacing a template.",
              features: [
                'Custom Shopify theme (not a template)',
                'Up to 100 products uploaded & configured',
                'NC sales tax setup (7.25% Mecklenburg County)',
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
                "Advanced Shopify build with NASCAR drop mechanics, B2B corporate pricing, or subscription products. Best for motorsports brands, financial services adjacent companies, and established Charlotte DTC brands scaling revenue.",
              features: [
                'Everything in Shopify Standard',
                'Limited-edition drop mechanics',
                'B2B dealer pricing & PO payment terms',
                'Fan loyalty program integration',
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
                "Next.js headless storefront for Charlotte enterprises and NASCAR team brands that need sub-500ms load times, custom API integrations, or a B2B portal with enterprise-grade security.",
              features: [
                'Next.js headless frontend (Lighthouse 95+)',
                'Shopify or Medusa e-commerce backend',
                'Custom API & ERP integrations',
                'Enterprise B2B: PO payments, institutional billing',
                'AI chatbot trained on your catalog',
                'AEO content for ChatGPT & Perplexity',
                'Quarterly performance reviews',
              ],
              cta: { label: 'Get a quote', modal: true, region: 'us' },
            },
          ] as const}
        />

        {/* ── 11. INDUSTRIES ──────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="CHARLOTTE × E-COMMERCE"
          headline="E-Commerce Development for Charlotte's Key Industries"
          lead="From the NASCAR capital to America's second banking center, Charlotte's industries have distinct e-commerce needs. FactoryJet has built stores for each of them."
          sectors={[
            {
              name: 'NASCAR & Motorsports',
              description:
                "Official team merchandise stores, driver DTC shops, and automotive aftermarket e-commerce for Charlotte's NASCAR ecosystem. 80%+ of NASCAR teams headquartered here. Fan loyalty programs, licensed drop mechanics, and direct-to-fan revenue at 30%+ higher margins than Amazon.",
              example:
                "NASCAR team merchandise stores, driver DTC brands, automotive aftermarket retailers, and motorsports apparel brands based in the Charlotte metro.",
            },
            {
              name: 'Financial Services Adjacent',
              description:
                "Professional services accessories, B2B SaaS billing, and corporate gifting stores for Charlotte's $3T banking sector. Bank of America and Truist's combined workforce creates institutional corporate purchasing demand worth tens of millions annually.",
              example:
                "Professional apparel brands, business accessories companies, corporate gifting stores, and B2B SaaS tools serving Charlotte's banking corridor.",
            },
            {
              name: 'Home & Luxury Goods',
              description:
                "Premium home furnishings, luxury goods, and lifestyle product stores for Charlotte's high-income banking corridor. $200,000+ household incomes in Ballantyne and SouthPark create premium DTC demand with above-average AOV and repeat purchase rates.",
              example:
                "Premium home furnishings brands, luxury lifestyle product companies, and interior design product lines serving Charlotte's affluent professional market.",
            },
            {
              name: 'Food & Beverage',
              description:
                "Charlotte's growing restaurant and craft beer scene — NoDa Brewing, Wooden Robot, Protagonist Beer — drives DTC merchandise and subscription opportunity. Age verification for NC ABC compliance, beer club configurations, and restaurant merchandise.",
              example:
                "Charlotte craft breweries, artisan food brands, restaurant merchandise shops, and specialty coffee roasters.",
            },
            {
              name: 'Apparel & Fashion',
              description:
                "Charlotte's emerging fashion scene and Southern lifestyle apparel brands selling nationally. NASCAR-adjacent merchandise, banking-corridor professional attire, and DTC fashion for the Queen City's fast-growing young professional population.",
              example:
                "Charlotte-based apparel brands, NASCAR-adjacent merchandise companies, Southern lifestyle fashion brands, and DTC clothing labels.",
            },
            {
              name: 'Health & Wellness',
              description:
                "Healthcare and wellness product stores serving Charlotte's growing professional population. Supplement DTC, medical supply adjacent products, and wellness brands targeting Charlotte's high-income consumer base with disposable income for premium wellness spending.",
              example:
                "Supplement brands, wellness product DTC stores, fitness equipment companies, and health-adjacent product lines serving Charlotte's professional market.",
            },
          ]}
        />

        {/* ── 12. TESTIMONIALS ────────────────────────────────────────── */}
        <TestimonialsSection
          region="us"
          eyebrow="WHAT CLIENTS SAY"
          headline="4.9/5 across 150+ reviews from Charlotte and beyond."
        />

        {/* ── 13. FAQ ─────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="COMMON QUESTIONS"
          headline="Common Questions from Charlotte E-Commerce Businesses"
          categories={FAQ_CATEGORIES}
          items={[
            {
              category: 'local',
              question: 'Who is the best Shopify developer in Charlotte, NC?',
              answer:
                "FactoryJet is Charlotte's top-rated Shopify development agency — 500+ projects, 4.9★ rating, and the only agency in the Queen City combining Shopify e-commerce with AI agent development. Local Charlotte agencies (Lyons Den Creative, TradeMark Media) focus on branding and marketing. Elevation Web and Brand Fuel do Shopify but at longer timelines and higher prices. FactoryJet launches in 7 days from $2,999 with real Charlotte market knowledge.",
            },
            {
              category: 'pricing',
              question: 'How much does Shopify development cost in Charlotte?',
              answer:
                "Shopify stores start at $2,999 at FactoryJet — compared to $8,000–$25,000 at established Charlotte agencies. WooCommerce stores start at $3,499, and custom headless builds start at $5,999. Every project includes custom design, full development, North Carolina sales tax configuration (7.25% Mecklenburg County), product catalog setup, mobile-first responsive design, and 30 days of post-launch support.",
            },
            {
              category: 'pricing',
              question: 'What North Carolina sales tax rate should my Charlotte Shopify store charge?',
              answer:
                "Charlotte businesses in Mecklenburg County should configure Shopify to collect 7.25% combined sales tax: North Carolina state rate of 4.75% plus Mecklenburg County's 2.5% local rate. North Carolina uses destination-based sales tax. FactoryJet configures all NC county rates during Charlotte builds, including Raleigh/Wake County (7.25%), Durham County (7.5%), Greensboro/Guilford County (6.75%), and Winston-Salem/Forsyth County (7.0%). NC also exempts prescription drugs, certain food items, and agricultural supplies.",
            },
            {
              category: 'local',
              question: 'Do you build Shopify stores for NASCAR teams and motorsports brands in Charlotte?',
              answer:
                "Yes — NASCAR and motorsports is one of our core Charlotte specialties. Charlotte is the NASCAR capital of the world: Hendrick Motorsports, Stewart-Haas Racing, Joe Gibbs Racing, and 80%+ of NASCAR teams are based in the metro. We build official team merchandise stores, driver DTC shops, automotive aftermarket e-commerce, racing apparel brands, and trackside merchandise systems. NASCAR fans are the most brand-loyal consumers in American sports — a well-built Shopify store can turn that loyalty into direct revenue at 30% higher margins than Amazon or Fanatics.",
            },
            {
              category: 'pricing',
              question: 'How long does it take to build a Shopify store in Charlotte?',
              answer:
                "FactoryJet launches standard Shopify stores in 7 days. Compare that to Elevation Web (8–12 weeks), Thrive Internet Marketing (4–8 weeks), and national agencies (8–16 weeks). Our 7-day timeline is possible because we design in code — no Figma-to-handoff delay — and use a component architecture optimized for rapid deployment. NASCAR merchandise stores with complex licensing configurations may take 2–3 weeks.",
            },
            {
              category: 'local',
              question: "Does Charlotte's banking industry create unique e-commerce opportunities?",
              answer:
                "Yes — Charlotte's $3 trillion banking sector creates several unique e-commerce opportunities. Financial services companies need B2B portals for software licenses, professional development courses, and compliance training materials. Banking adjacent brands (professional apparel, financial planning tools) have high-AOV consumers with strong credit profiles. Bank of America's 50,000 Charlotte employees and Truist's 25,000 generate a corporate gifting market worth tens of millions annually.",
            },
            {
              category: 'local',
              question: 'Can you build a Shopify store for a Charlotte food or beverage brand?',
              answer:
                "Yes — Charlotte's food scene has gone from regional to nationally recognized. NoDa Brewing, Wooden Robot, and dozens of Charlotte restaurants and food brands have DTC potential they're not capturing. We build Shopify stores for craft breweries, artisan food brands, restaurant merchandise shops, and specialty coffee roasters. North Carolina allows direct-to-consumer beer sales with proper ABC permits — we configure age verification and NC ABC compliance in every brewery store.",
            },
            {
              category: 'pricing',
              question: 'How does FactoryJet compare to Elevation Web for Charlotte Shopify development?',
              answer:
                "Elevation Web is a Charlotte-based web agency doing good Shopify work, but they charge $8,000–$25,000 with 8–16 week timelines and focus primarily on mid-market brands. FactoryJet delivers: Shopify stores in 7 days from $2,999, transparent fixed pricing, AI-powered features (chatbots, AEO content, recommendation engines) that Elevation Web doesn't offer, and direct engineer access.",
            },
            {
              category: 'local',
              question: 'Does my Charlotte business need Shopify or WooCommerce?',
              answer:
                "For most Charlotte businesses, Shopify is the better choice: faster to launch (7 days), lower maintenance costs, better subscription apps for recurring-revenue brands, and superior mobile checkout. Charlotte's financial sector exposure means your buyers are sophisticated — Shopify's enterprise-grade security and PCI compliance matter here. Shopify starts at $2,999, WooCommerce at $3,499.",
            },
            {
              category: 'pricing',
              question: 'Can you migrate my Charlotte business to Shopify?',
              answer:
                "Yes — we migrate Charlotte businesses from WooCommerce, BigCommerce, Magento, Squarespace, Wix, and custom platforms to Shopify. Migration includes: full product catalog transfer, customer data, order history, URL 301 redirects (preserving Charlotte local search rankings), NC tax reconfiguration, metafield migration, and SEO continuity. Timeline: 7–14 days depending on catalog size.",
            },
            {
              category: 'included',
              question: 'What AI services are available for Charlotte small businesses?',
              answer:
                "FactoryJet is the only Charlotte e-commerce agency building production AI agents alongside Shopify development. We build: AI chatbots trained on your product catalog, AI-powered B2B lead qualification (critical for Charlotte's financial services adjacent market), customer service automation, and AEO content optimization for ChatGPT and Google AI Overviews. Charlotte's sophisticated banking-corridor consumers are early AI adopters — your store should match their technology expectations.",
            },
            {
              category: 'included',
              question: 'What is included in a FactoryJet Shopify build for a Charlotte business?',
              answer:
                "Every Charlotte Shopify store includes: custom design (not a theme), full Shopify development, NC sales tax setup (7.25% Mecklenburg County), payment gateway integration, product catalog setup, mobile-first responsive design, Lighthouse 90+ optimization, JSON-LD schema, AEO content for AI search visibility, 30 days of post-launch support, and a launch walkthrough. Starting at $2,999 — no hidden fees.",
            },
            {
              category: 'included',
              question: 'Can you build a Shopify store for a Charlotte apparel, lifestyle, or DTC brand?',
              answer: "Absolutely — Charlotte's DTC apparel scene is growing fast. Queen City's cultural identity — Southern lifestyle, NASCAR heritage, banking corridor professional aesthetic, and Carolina Panthers fan culture — creates strong national brand demand. We build Shopify stores for: Southern lifestyle apparel brands, NASCAR-adjacent merchandise companies, Charlotte-themed lifestyle goods, professional attire brands targeting the banking corridor, and fan merchandise stores. Charlotte apparel brands sell nationally on place identity and brand storytelling — FactoryJet builds stores with editorial photography layouts, Shopify's lookbook features, and conversion flows optimized for repeat buyers. Stores from $2,999, live in 7 days.",
            },
            {
              category: 'technical',
              question: 'How do I rank my Charlotte Shopify store on Google and in AI search?',
              answer: "FactoryJet builds every Charlotte Shopify store with SEO and AEO (Answer Engine Optimization) foundations. We implement: FAQPage + LocalBusiness + Product JSON-LD schema for Google, ChatGPT, Perplexity, and Google AI Overviews; keyword-optimized meta titles targeting 'Charlotte [product]', 'buy [product] Charlotte NC', 'North Carolina [industry] store'; Core Web Vitals optimization (Lighthouse 90+); North Carolina tax compliance (a trustworthiness signal for Google); and AEO content structured as answers to how Charlotte consumers search for your category. Charlotte's fast-growing professional population is mobile-heavy and AI-search-forward — your store's JSON-LD schema determines whether it appears in ChatGPT or Perplexity answers for Charlotte product queries.",
            },
            {
              category: 'included',
              question: 'Do you build subscription Shopify stores for Charlotte brands?',
              answer: "Yes — subscription commerce is well-suited to Charlotte's brand-loyal consumer base. We build: craft beer club subscriptions for Charlotte's craft brewery scene (NoDa Brewing, Birdsong Brewing, Wooden Robot), NASCAR fan merchandise subscriptions (exclusive monthly team gear for superfans), Southern food and hot sauce clubs, professional lifestyle product subscriptions targeting the banking corridor, and wellness product clubs for Charlotte's health-conscious professional market. Charlotte's consumer is loyal to brands that deliver consistent quality — a well-structured subscription converts that loyalty into predictable recurring revenue. FactoryJet builds with Recharge or native Shopify Subscriptions and configures NC sales tax for recurring billing.",
            },
            {
              category: 'included',
              question: 'What payment methods should a Charlotte Shopify store accept?',
              answer: "Every Charlotte Shopify store should accept: Shopify Payments (lowest transaction fees), PayPal (30%+ of US first-time buyers), Apple Pay and Google Pay (Charlotte's banking corridor professionals are heavy Apple device users — one-tap checkout boosts mobile conversion by 40%), and Afterpay or Shop Pay Installments for orders over $100. For Charlotte's NASCAR merchandise stores, add gift card purchasing with email delivery (gifts are a major revenue driver in sports merchandise). For Charlotte's B2B banking-corridor stores, configure net-30/net-60 institutional invoicing and PO payment terms via Shopify's B2B tools. All payment configuration is included in the standard 7-day build at no extra charge.",
            },
            {
              category: 'local',
              question: 'Can you build a Shopify store for a Charlotte health, fitness, or wellness brand?',
              answer: "Yes — Charlotte's health and wellness market is one of the strongest in the Southeast. The banking corridor's $150,000+ income households spend significantly on premium wellness: supplements, fitness equipment, athleisure apparel, spa and beauty products, and specialty health foods. We build Shopify stores for: premium supplement brands, Charlotte fitness studios selling branded apparel and equipment, med spa product lines, health food and nutrition subscription boxes, and wellness coaching product bundles. Charlotte-specific wellness e-commerce needs: subscription billing, bundle product configurations, loyalty rewards programs, and B2B bulk ordering for corporate wellness programs (Bank of America and Wells Fargo both run large wellness benefit programs).",
            },
            {
              category: 'local',
              question: 'Do you serve Concord, Gastonia, Mooresville, and other Charlotte suburbs?',
              answer: "Yes — FactoryJet serves the entire Charlotte metro: Charlotte/Mecklenburg County, Concord/Cabarrus County, Gastonia/Gaston County, Mooresville/Iredell County, Rock Hill, SC (Charlotte's largest suburb), Fort Mill, SC, Kannapolis, Monroe, Huntersville, Matthews, Mint Hill, and Cornelius. Each area has distinct business characteristics: Concord is home to Concord Mills (the Southeast's largest mall) and race shop tourism, Mooresville is NASCAR technical center territory, and Rock Hill is Charlotte's fast-growing South Carolina suburb. FactoryJet configures NC and SC destination-based sales tax for cross-border Charlotte metro orders and builds stores that rank for both Charlotte and Greater Carolinas searches.",
            },
            {
              category: 'local',
              question: 'How does FactoryJet optimize Charlotte Shopify stores for mobile shoppers?',
              answer: "Charlotte's mobile shopping adoption is above the US average — the banking corridor's professional population is iPhone-heavy and shops on mobile during commutes and lunch breaks. FactoryJet optimizes every Charlotte Shopify store for mobile with: mobile-first design (375px layouts before desktop), Google Core Web Vitals compliance (LCP under 2.5s, CLS under 0.1, INP under 200ms), one-tap Apple Pay and Google Pay checkout, thumb-friendly navigation and button sizing, and lazy-loaded image optimization that delivers fast initial page loads on Charlotte's 5G networks. NASCAR merchandise stores in particular see high mobile traffic during race weekends — FactoryJet ensures your store handles those traffic spikes without performance degradation.",
            },
            {
              category: 'support',
              question: 'Does FactoryJet offer ongoing Shopify maintenance plans for Charlotte businesses?',
              answer: "Yes — FactoryJet offers post-launch support built around Charlotte's business calendar. Every build includes a 30-day support window. Ongoing options: monthly retainer from $299/month (4 hours development time, same-day priority bug response), seasonal campaign builds (NASCAR season merchandise drops, holiday banking corridor corporate gifting campaigns, Panthers/Hornets fan merchandise launches), and quarterly performance reviews. Charlotte's NASCAR brands in particular benefit from on-call support — a team winning at Bristol or Talladega creates instant merchandise demand spikes that require same-day inventory and landing page updates. FactoryJet retainer clients get priority response for exactly these moments.",
            },
          ]}
        />


        {/* Cross-link: Related Services in Charlotte */}
        <section className="py-10 bg-[#FAFAF7]">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-sm font-mono text-[#F05A28] uppercase tracking-widest mb-4">
              Also in Charlotte
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/us/charlotte/web-design/"
                className="px-5 py-2 rounded-full border border-[#F05A28] text-[#F05A28] text-sm font-medium hover:bg-[#F05A28] hover:text-white transition-colors"
              >
                Web Design →
              </Link>
            </div>
          </div>
        </section>

        {/* ── 14. FINAL CTA ───────────────────────────────────────────── */}
        <EcommerceCityLinksUS currentCity="charlotte" />
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Build Your Charlotte Shopify Store?"
          sub="Queen City's banking corridor, NASCAR fan base, and fast-growing DTC market are generating revenue that a great Shopify store should be capturing. Every week without one is a week your competitors own the searches you should. Book a 30-minute audit and we'll have a store blueprint ready within 72 hours."
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
      dangerouslySetInnerHTML={{ __html: getEcommerceCitySchema('charlotte') }}
    />
  );
}
