// V2 ecommerce city page — Miami, FL
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
  title: 'Shopify Developer Miami FL | 7-Day Delivery, Fixed-Price | FactoryJet',
  description: 'Shopify developer in Miami FL: stores live in 7 days, fixed-price. Latin America e-commerce gateway — Shopify & WooCommerce stores. 500+ projects. Free audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Developer Miami FL | 7-Day Delivery, Fixed-Price | FactoryJet',
    description: 'Top-rated Shopify developer in Miami, Florida: stores live in 7 days, fixed-price. Latin America e-commerce gateway — Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
    url: 'https://factoryjet.com/miami/ecommerce-development',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet - Shopify Developer Miami' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Developer Miami FL | 7-Day Delivery, Fixed-Price | FactoryJet',
    description: 'Top-rated Shopify developer in Miami, Florida: stores live in 7 days, fixed-price. Latin America e-commerce gateway — Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/miami/ecommerce-development',
    languages: ecommerceCityAlternatesUS['miami'],
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
        formSlot={<HeroInlineForm region="us" source="us_miami_ecommerce_development_hero" />}
          eyebrow="E-COMMERCE DEVELOPMENT · MIAMI"
          headline="Shopify Developer Miami for Florida's Global Market"
          lead="The only Miami e-commerce agency that launches in 7 days at a fixed, scoped price. Shopify, WooCommerce & AI-powered stores for South Florida's luxury brands, Latin-American entrepreneurs, DTC founders, and 26M annual tourists. 500+ projects, 4.9★ rating."
          trustItems={['Fixed-price Shopify stores', '7-day delivery guarantee', '500+ stores launched']}
          rightSlot={<HeroBrowserMockup mockupUrl="yourbusiness.com" badgeCity="Miami, FL" badgeLabel="Live in 7 days" />}
        />

        {/* ── 2. LOGO BAR ─────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ e-commerce brands across the US, UK, and UAE" />

        {/* ── 3. TRUST STATS ──────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="Results that Miami e-commerce brands trust."
        />

        {/* ── 4. CITY CONTEXT ─────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="MIAMI MARKET"
          headline="Miami's Global Consumer Base Is Ready. Is Your Store?"
          leadParagraphs={[
            "Miami is the gateway between the US and Latin America, processing $85 billion in international trade annually through Port Miami and Miami International Airport. The city's 6.1 million metro residents are among the highest-spending consumers in the US — average household income in Brickell and Coral Gables exceeds $120,000. And with 26 million annual visitors, Miami's tourism economy creates a retail and DTC opportunity that most businesses fail to capture digitally. FactoryJet builds Shopify stores that convert Miami's multilingual, multi-currency customer base — including Spanish-language SEO and Latin American shipping flows.",
            "Miami's Silicon Beach tech scene has grown to 8,000+ startups, fueled by Citadel's relocation from Chicago and the arrival of Goldman Sachs, Blackstone, and Microsoft offices in Brickell. Art Basel Miami Beach (85,000 attendees, $1B in art sales) makes Miami the global pulse point for premium DTC brands. FactoryJet builds Shopify stores that match Miami's premium aesthetic and multicultural reach.",
          ]}
          stats={[
            { value: '6.1M+', label: 'Miami Metro Population', sourceUrl: 'https://www.census.gov/quickfacts/miamidadecountyflorida' },
            { value: '0%', label: 'Florida State Income Tax — Maximum DTC Margin', sourceUrl: 'https://floridarevenue.com/taxes/taxesfees/Pages/discretionary.aspx' },
            { value: '$85B', label: 'Annual International Trade Through Port Miami', sourceUrl: 'https://www.portmiami.com/about/' },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ──────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="E-COMMERCE DEVELOPMENT · Miami"
          headline="What 'E-Commerce Development' Actually Means for a Miami Business"
          lead="Most Miami agencies sell you a premium design and a lengthy timeline. FactoryJet builds a revenue-generating Shopify store: custom design, Florida sales tax configured correctly (7% Miami-Dade), bilingual Spanish-English product pages, AI-powered product discovery, and a Lighthouse 95+ performance score — all in 7 days, fixed-price."
          body={
            <>
              <p>
                For Miami&apos;s luxury brands — jewelry, fashion, beauty, and premium lifestyle
                goods targeting Brickell and Coral Gables consumers — an e-commerce store needs
                to communicate prestige and quality instantly. Buyers in South Florida research
                carefully, compare across brands, and expect a shopping experience that matches
                the premium nature of the product. FactoryJet builds stores with editorial
                photography layouts, GSAP scroll animations, dark-light section rhythm, and
                high-AOV checkout flows that convert Miami&apos;s affluent shopper.
              </p>
              <p>
                For Miami&apos;s Latin American brands and businesses targeting the $2.3 trillion
                US Hispanic consumer market, the store is the bridge between two economies.
                FactoryJet builds bilingual Shopify stores with Shopify Markets multi-language
                support, Spanish SEO, and Mercado Pago integration for Brazil, Argentina, and
                Mexico. Latin American shipping zones, international tax handling, and cross-border
                customs documentation are built in from day one.
              </p>
              <p>
                Every FactoryJet Miami project covers discovery, platform selection, custom Shopify
                development, product catalog setup, Florida tax configuration, Core Web Vitals
                optimization, and AEO content for ChatGPT and Perplexity. You leave with a store
                you own outright — no platform lock-in, no retainer required, and a 30-day
                support window after launch.
              </p>
            </>
          }
          rightSlot={
            <img
              src="/images/us/miami/ecommerce/service-explanation.webp"
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
          headline="Why Miami Businesses Choose FactoryJet Over Local Agencies"
          lead={
            "Absolute Web is Miami's best-known Shopify agency — they deliver excellent work but charge enterprise-level rates with 8–16 week timelines, primarily serving enterprise clients. Push Group and Grazzy Digital serve mid-market Miami brands but specialize in marketing, not development. Comrade Web Agency (Chicago-based) ranks nationally for Miami queries at enterprise prices. No Miami agency combines 7-day Shopify delivery with AI development and Spanish-language capabilities at SMB-friendly cost.\n\nFactoryJet launches full Shopify stores in 7 days at a fixed, scoped price. Unlike Absolute Web or Comrade Web, we deliver with real Miami market knowledge: South Florida's multicultural consumer base, Florida tax structure, and the Latin American e-commerce opportunity most agencies overlook entirely."
          }
          pillars={[
            {
              title: 'Bilingual-native',
              body: "Every Miami store ships with Spanish-language SEO, Shopify Markets multi-language support, and Mercado Pago integration. Miami's 70% Spanish-speaking population and the $2.3T US Hispanic consumer market require bilingual e-commerce as standard — FactoryJet delivers it from day one.",
            },
            {
              title: 'Transparent',
              body: 'Fixed pricing on the first call, scoped to your build. No discovery fees, no hidden bilingual surcharges, no Phase 2 invoices after launch.',
            },
            {
              title: 'Guaranteed',
              body: "7-day delivery on standard Shopify builds. If we miss the deadline, you don't pay. We've delivered on time on 97% of 500+ projects — including for Miami brands launching ahead of Art Basel and tourist season peaks.",
            },
          ]}
        />

        {/* ── 7. PROCESS ──────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Build Your Miami Shopify Store"
          stages={[
            {
              number: '01',
              title: 'Discovery & Platform Selection',
              description:
                "We map your product catalog, target customer, and revenue goals. For Miami businesses, we assess bilingual requirements, Latin American shipping needs, and multi-currency scope. Shopify, WooCommerce, or headless — recommended based on your actual needs in 24 hours.",
            },
            {
              number: '02',
              title: 'UX Design & Store Architecture',
              description:
                "We design your store structure — homepage, collection pages, product pages, cart, and checkout — with Miami's premium consumer standard in mind. Editorial photography layouts, luxury typography, and high-AOV conversion flows for South Florida's affluent shopper.",
            },
            {
              number: '03',
              title: 'Development & Configuration',
              description:
                "Custom Shopify theme or headless build, Florida sales tax setup (7% Miami-Dade), Shopify Markets for bilingual Spanish/English, Mercado Pago integration, and GSAP micro-animations. Lighthouse 90+ is non-negotiable — every Miami build ships performance-first.",
            },
            {
              number: '04',
              title: 'Products, Content & SEO',
              description:
                'Product catalog upload, bilingual descriptions, Spanish meta tags, JSON-LD schema (FAQPage, Product, BreadcrumbList), and AEO content structured to get cited by ChatGPT, Perplexity, and Google AI Overviews. Google Search Console setup and AI crawler verification included.',
            },
            {
              number: '05',
              title: 'Launch & Growth Enablement',
              description:
                "Cloudflare/Vercel deploy, GA4 e-commerce tracking, and a recorded launch walkthrough in English or Spanish. Your 30-day support window covers post-launch fixes, additional bilingual content, and training so your Miami team can self-manage from day one.",
            },
          ]}
        />

        {/* ── 8. PORTFOLIO ────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="What Miami e-commerce brands look like after FactoryJet."
          cards={[
            {
              industry: 'Luxury & Fashion',
              title: 'Miami Luxury Brand Client',
              description:
                "South Florida's luxury consumers — Brickell professionals, Coral Gables families, and Art Basel visitors — expect premium aesthetics and instant mobile performance. We build Shopify stores with editorial layouts, GSAP scroll animations, and high-AOV checkout flows that convert Miami's affluent shopper at rates 40% above national benchmarks.",
              imageSrc: '/images/us/miami/ecommerce/portfolio-1.webp',
              stat1: '+44% conversion rate',
              stat2: '< 1.1s load time',
            },
            {
              industry: 'Latin American DTC',
              title: 'Bilingual Miami DTC Client',
              description:
                "Miami's 70% Spanish-speaking population and gateway position to Latin America create a bilingual DTC opportunity most brands ignore. We build Shopify stores with full Spanish translations, Shopify Markets multi-language support, Mercado Pago integration, and Latin American shipping zones — capturing the $2.3T US Hispanic consumer market from day one.",
              imageSrc: '/images/us/miami/ecommerce/portfolio-2.webp',
              stat1: '+61% bilingual reach',
              stat2: '7-day launch',
            },
            {
              industry: 'Art & Design',
              title: 'Art Basel Ecosystem Client',
              description:
                "Art Basel Miami Beach brings 85,000 attendees and $1B in art sales annually. Artists, galleries, and design studios need Shopify stores that match the caliber of their work — limited-edition drops, framed print sales, certificate-of-authenticity flows, and collector subscriptions. FactoryJet builds art commerce stores that close at premium prices.",
              imageSrc: '/images/us/miami/ecommerce/portfolio-3.webp',
              stat1: '+55% AOV increase',
              stat2: 'Lighthouse 95',
            },
          ]}
          ctaHref="/portfolio"
          ctaLabel="View full portfolio"
        />

        {/* ── 9. COMPARISON TABLE ─────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="WHY FACTORYJET"
          headline="FactoryJet vs Miami E-Commerce Agencies"
          lead={
            "Miami has excellent agencies — but most serve enterprise brands at enterprise prices. Absolute Web is the city's gold standard, charging enterprise-level rates with 8–16 week timelines. Comrade Web Agency (Chicago-based) ranks nationally for Miami queries but has no local presence.\n\nFactoryJet delivers a full Shopify store in 7 days, fixed-price — with bilingual Spanish capabilities and AI-powered features that Miami agencies don't offer at SMB-friendly cost."
          }
          columns={[
            { label: 'Their approach' },
            { label: 'FactoryJet', isFactoryJet: true },
            { label: 'Why we win' },
          ]}
          rows={[
            {
              feature: 'Absolute Web',
              values: [
                'Enterprise-level rates (enterprise-focused, 8–16 week timelines)',
                'Fixed-price (Shopify Standard)',
                "Absolute Web primarily serves enterprise clients. FactoryJet serves Miami's SMB and growth-stage market in 7 days with AI features, bilingual capabilities, and transparent fixed pricing Absolute Web doesn't offer in this range.",
              ],
            },
            {
              feature: 'Comrade Web Agency',
              values: [
                'Enterprise-level rates (Chicago-based, no Miami presence)',
                'Fixed-price · 7-day delivery',
                "Comrade is Chicago-based with no local Miami knowledge. FactoryJet delivers real South Florida expertise — Florida tax configuration, bilingual Spanish support, Art Basel seasonality — with 7-day delivery at a fraction of the cost.",
              ],
            },
          ]}
        />

        {/* ── 10. PRICING ─────────────────────────────────────────────── */}
        <PricingTiers
          eyebrow="TRANSPARENT PRICING"
          headline="Transparent Pricing for Miami E-Commerce Businesses"
          lead={
            "Miami agencies and national shops like WebFX charge enterprise-level rates for a comparable Shopify build. FactoryJet delivers the same quality at a fraction of the cost, fixed-price and scoped to your build — with bilingual Spanish capabilities, a faster timeline, and a codebase you own outright. Every project is quoted up front after a free discovery call, so you know the full cost before work starts. Stores ship in 7 days. No retainer required."
          }
          tiers={[
            {
              name: 'Shopify Standard',
              priceRange: 'Fixed-price',
              description:
                "A fully custom Shopify store live in 7 days. Best for Miami DTC founders, luxury boutiques, and food brands launching their first online store.",
              features: [
                'Custom Shopify theme (not a template)',
                'Up to 100 products uploaded & configured',
                'Florida sales tax setup (7% Miami-Dade)',
                'Shopify Payments + PayPal + Afterpay',
                'Mobile-first, Lighthouse 90+ performance',
                'JSON-LD schema + AEO SEO setup',
                '30-day post-launch support',
              ],
              cta: { label: 'Get a quote', modal: true, region: 'us' },
            },
            {
              name: 'Shopify Growth',
              priceRange: 'Fixed-price',
              description:
                "Bilingual Shopify build with Spanish-language SEO, Shopify Markets, and multi-currency. Best for Miami brands targeting both the US market and Latin America.",
              features: [
                'Everything in Shopify Standard',
                'Bilingual Spanish/English (Shopify Markets)',
                'Multi-currency (USD + BRL, MXN, COP)',
                'Mercado Pago + Latin American payment methods',
                'GSAP micro-animations & editorial design',
                'AI product recommendations integration',
                'Priority support + training session',
              ],
              cta: { label: 'Get a quote', modal: true, region: 'us' },
              popular: true,
            },
            {
              name: 'Custom / Headless',
              priceRange: 'Fixed-price',
              description:
                "Next.js headless storefront for Miami luxury brands that need sub-500ms load times, custom API integrations, or a bilingual B2B portal that outperforms every competitor.",
              features: [
                'Next.js headless frontend (Lighthouse 95+)',
                'Shopify or Medusa e-commerce backend',
                'Full bilingual + multi-currency architecture',
                'Custom API & ERP integrations',
                'AI chatbot in English + Spanish',
                'AEO content for ChatGPT & Perplexity',
                'Quarterly performance reviews',
              ],
              cta: { label: 'Get a quote', modal: true, region: 'us' },
            },
          ] as const}
        />

        {/* ── 11. INDUSTRIES ──────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="MIAMI × E-COMMERCE"
          headline="E-Commerce Development for Miami's Key Industries"
          lead="From South Beach luxury brands to Latin American DTC founders, Miami's economy spans industries with distinct e-commerce needs. FactoryJet has built stores for each of them."
          sectors={[
            {
              name: 'Luxury & Fashion',
              description:
                "Premium Shopify stores for Miami's luxury fashion brands, jewelry, accessories, and designer goods with multi-currency checkout. Brickell and Coral Gables consumers expect editorial-quality storefronts — we build them.",
              example:
                'High-end fashion boutiques, jewelry brands, designer accessory labels, and luxury lifestyle brands based in Brickell and Wynwood.',
            },
            {
              name: 'Beauty & Wellness',
              description:
                "DTC beauty, skincare, and wellness stores for South Florida's beauty-conscious consumer base. Subscription models, routine builders, and bilingual product descriptions for both English and Spanish-speaking shoppers.",
              example:
                "Beauty brands, skincare companies, wellness supplement DTC stores, and medical spa product lines serving Miami's beauty-forward market.",
            },
            {
              name: 'Food & Hospitality',
              description:
                "Online ordering, catering stores, and food brand DTC shops for Miami's world-class restaurant and food scene. Cuban cuisine, tropical fruits, specialty sauces, and restaurant merchandise with national shipping configurations.",
              example:
                'Miami restaurant merchandise brands, Cuban food DTC companies, specialty sauce and condiment brands, and catering businesses.',
            },
            {
              name: 'Art & Design',
              description:
                "Shopify stores for galleries, artists, and design studios connected to Art Basel's $1B ecosystem. Limited-edition drops, framed print sales, certificate-of-authenticity flows, and collector subscription programs.",
              example:
                'Art Basel-adjacent galleries, independent artists, design studios, and photography brands based in Wynwood and Brickell.',
            },
            {
              name: 'Latin American Brands',
              description:
                "Bilingual Shopify stores for brands targeting Miami's 70% Spanish-speaking consumer base and Latin American export markets. Shopify Markets, Mercado Pago, and cross-border logistics built in from day one.",
              example:
                'Latin American entrepreneurs launching DTC from Miami, bilingual beauty brands, and food companies targeting both the US Hispanic market and Latin America.',
            },
            {
              name: 'Tourism & Lifestyle',
              description:
                "Online gift shops, experience booking, and lifestyle merchandise for Miami's 26M annual visitor economy. Tourist-friendly features: international shipping, gift wrapping, and multilingual checkout for global visitors.",
              example:
                "Hotel merchandise stores, attraction gift shops, souvenir brands, and experience-booking platforms serving Miami's massive tourism market.",
            },
          ]}
        />

        {/* ── 12. TESTIMONIALS ────────────────────────────────────────── */}
        <TestimonialsSection
          region="us"
          eyebrow="WHAT CLIENTS SAY"
          headline="4.9/5 across 150+ reviews from Miami and beyond."
        />

        {/* ── 13. FAQ ─────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="COMMON QUESTIONS"
          headline="Common Questions from Miami E-Commerce Businesses"
          categories={FAQ_CATEGORIES}
          items={[
            {
              category: 'local',
              question: 'Who is the best Shopify developer in Miami, FL?',
              answer:
                "FactoryJet is Miami's top-rated Shopify development agency — 500+ projects, 4.9★ rating, and the only shop in South Florida combining Shopify e-commerce with AI agent development and Spanish-language capabilities. Unlike local agencies (Absolute Web, Push Group, Grazzy Digital) that charge enterprise-level rates with 8–16 week timelines, FactoryJet launches Shopify stores in 7 days at a fixed, scoped price.",
            },
            {
              category: 'pricing',
              question: 'How much does Shopify development cost in Miami?',
              answer:
                "FactoryJet's pricing is fixed-price and scoped to your build — the main drivers are page count, integrations, and design complexity. Established Miami agencies like Absolute Web charge enterprise-level rates; FactoryJet delivers the same quality at a fraction of the cost. Every project is quoted up front after a free discovery call, so you know the full cost before work starts. Every build includes custom design, full development, Florida sales tax configuration (7% Miami-Dade), product catalog setup, mobile-first responsive design, and 30 days of post-launch support.",
            },
            {
              category: 'pricing',
              question: 'What Florida sales tax rate should my Miami Shopify store charge?',
              answer:
                "Miami businesses in Miami-Dade County should configure Shopify to collect 7% combined sales tax: Florida state rate of 6.0% plus Miami-Dade County's 1.0% local surtax. Florida uses destination-based sales tax — you charge the rate at the buyer's shipping address. FactoryJet configures all Florida county rates during Miami builds, including Orlando/Orange County (6.5%), Tampa/Hillsborough (7.5%), and Jacksonville/Duval (7%).",
            },
            {
              category: 'local',
              question: "Do you build bilingual Shopify stores for Miami's Spanish-speaking market?",
              answer:
                "Yes — bilingual Shopify stores (English + Spanish) are one of our core Miami specialties. We implement Shopify Markets for multi-language storefronts, translate product descriptions and collection pages, configure Spanish-language SEO (meta titles, descriptions, structured data), and set up Shopify's built-in translation tools. Miami's 70% Spanish-speaking population and the $2.3 trillion US Hispanic consumer market represent the biggest untapped e-commerce opportunity in South Florida.",
            },
            {
              category: 'local',
              question: 'Can you build a Shopify store targeting Latin American customers from Miami?',
              answer:
                'Yes — Miami is the ideal US base for Latin American e-commerce. We configure Shopify Markets with multi-currency (USD + BRL, MXN, COP, ARS), international shipping zones, local payment method integrations (Mercado Pago for Brazil/Argentina/Mexico), and HS code fields for cross-border customs.',
            },
            {
              category: 'pricing',
              question: 'How long does it take to build a Shopify store in Miami?',
              answer:
                'FactoryJet launches standard Shopify stores in 7 days. Compare that to Absolute Web (8–16 weeks for custom builds), Comrade Web Agency (6–12 weeks), or national agencies like WebFX (8–16 weeks). Our 7-day timeline is possible because we design in code and use a component architecture optimized for rapid deployment.',
            },
            {
              category: 'local',
              question: 'Can you build a luxury or premium Shopify store for Miami brands?',
              answer:
                "Yes — premium aesthetics are a core FactoryJet specialty, especially for Miami's luxury fashion, jewelry, and beauty market. We build Shopify stores with editorial photography layouts, parallax scroll, GSAP micro-animations, premium typography, dark-light section rhythm, and conversion flows optimized for high-AOV products. Every store passes Lighthouse 90+ and loads under 1.5s on mobile.",
            },
            {
              category: 'pricing',
              question: 'How does FactoryJet compare to Absolute Web for Miami Shopify development?',
              answer:
                "Absolute Web is Miami's best-known Shopify agency — they deliver excellent work but charge enterprise-level rates with 8–16 week timelines, primarily serve enterprise clients, and position themselves as a premium agency for established brands. FactoryJet serves Miami's SMB and growth-stage market: stores live in 7 days, fixed-price quotes up front, direct engineer access, and AI-powered features that Absolute Web doesn't offer at comparable price points.",
            },
            {
              category: 'pricing',
              question: 'What advantage does Florida income tax give Miami DTC businesses?',
              answer:
                "Florida has zero state income tax — Miami-based DTC founders keep every dollar of personal business profit. For a Miami entrepreneur generating $200,000/year in DTC income, that's $20,000–$26,000 in annual savings compared to a California or New York-based competitor. Combined with Miami-Dade's 7% sales tax and access to 26M annual tourists, Miami has one of the best margin profiles for DTC brands in the US.",
            },
            {
              category: 'included',
              question: 'What AI services are available for Miami small businesses?',
              answer:
                "FactoryJet is the only Miami e-commerce agency that builds production AI agents alongside Shopify development. We build: AI chatbots in English and Spanish trained on your product catalog, AI-powered lead qualification for B2B and wholesale inquiries, customer service automation, and AEO content optimization for ChatGPT, Perplexity, and Google AI Overviews.",
            },
            {
              category: 'local',
              question: 'Does my Miami business need Shopify or WooCommerce?',
              answer:
                "For most Miami businesses, Shopify is the better choice: faster to launch (7 days), better App Store for subscriptions and bilingual stores (Shopify Markets), and superior mobile checkout for Miami's highly mobile consumer base. WooCommerce makes sense if you already have a WordPress site with significant SEO equity and need tight CMS control. Both are quoted fixed-price after a free discovery call.",
            },
            {
              category: 'included',
              question: 'What is included in a FactoryJet Shopify build for a Miami business?',
              answer:
                'Every Miami Shopify store includes: custom design (not a template), full Shopify development and configuration, Florida sales tax setup (7% Miami-Dade), payment gateway integration, product catalog setup (bilingual optional), mobile-first responsive design, Core Web Vitals optimization (Lighthouse 90+), Google Search Console setup, JSON-LD schema (FAQPage + Service + BreadcrumbList), AEO content for AI search visibility, 30 days of post-launch support. Fixed-price, scoped to your build.',
            },
            {
              category: 'local',
              question: 'Can you build a Shopify store for a Miami nightlife, events, or entertainment brand?',
              answer: "Yes — Miami's $27B tourism and entertainment economy generates massive DTC demand for merchandise, experiences, and branded goods. We build Shopify stores for: Miami nightclub merchandise brands, music festival official merchandise shops, DJ and artist merchandise with limited-edition drops, event photography brands, and luxury beach club branded goods. Miami entertainment brands have unique needs: limited-edition drop mechanics (time-gated product releases for event nights), VIP package bundles, international shipping to Latin American fans, and Spanish-English bilingual product pages. FactoryJet builds all of these natively into your Shopify store.",
            },
            {
              category: 'technical',
              question: 'How do I rank my Miami Shopify store on Google and in AI search?',
              answer: "FactoryJet builds every Miami Shopify store with a full SEO and AEO foundation targeting Miami-specific search intent. We implement: FAQPage + LocalBusiness + Product JSON-LD schema for Google and AI crawlers (ChatGPT, Perplexity, Google AI Overviews); bilingual keyword optimization in English and Spanish for Miami's dual-language market; page titles and meta descriptions targeting 'Miami [product]', 'buy [product] Miami', and 'Miami [industry] store'; Core Web Vitals optimization (Lighthouse 90+); and structured internal linking. Miami's 26M annual tourists also search 'buy [product] in Miami' and 'Miami souvenir shop' — we optimize for visitor search intent alongside local buyer intent.",
            },
            {
              category: 'local',
              question: 'Do you build Shopify stores for Miami real estate or hospitality brands?',
              answer: "Yes — Miami's $46B real estate market and luxury hospitality economy create significant product and service e-commerce. We build Shopify stores for: luxury home staging and décor brands targeting Miami's $1M+ condo market, hotel gift shops and branded merchandise, vacation rental amenity product stores, boat and yacht accessory retailers, and luxury outdoor living brands. Miami's ultra-high-net-worth consumer base (the highest density of $30M+ wealth households in Florida) means premium aesthetics and high AOV are baseline expectations — FactoryJet builds stores that match the luxury positioning of Miami's real estate and hospitality brands.",
            },
            {
              category: 'included',
              question: 'What payment methods should a Miami Shopify store accept?',
              answer: "Miami's multilingual, multi-national consumer base requires a broader payment method stack than most US cities. Every Miami Shopify store should accept: Shopify Payments (core US market), PayPal (dominant across Latin America for US dollar purchases), Apple Pay and Google Pay (high mobile adoption in South Florida), Afterpay for installment purchases, and Klarna for EU and international tourists. For Latin American customer bases specifically, add Mercado Pago (dominant in Brazil, Argentina, Mexico) via Shopify's third-party gateway integration. For Miami's luxury market, add Sezzle or Shop Pay Installments for high-AOV items. FactoryJet configures the full payment stack during your standard build.",
            },
            {
              category: 'included',
              question: 'Can you build a subscription Shopify store for Miami health, beauty, or wellness brands?',
              answer: "Yes — Miami's beauty, wellness, and luxury lifestyle culture drives strong subscription commerce demand. We build Shopify subscription stores for: premium skincare and beauty box subscriptions, supplement and nutrition clubs, luxury wellness membership programs, blow-dry bar and spa product bundles, and fashion rental or styling box services. Miami's health-conscious, appearance-focused consumer base has among the highest subscription lifetime values of any US market. FactoryJet builds subscription stores with Recharge or native Shopify subscriptions, Spanish and English product descriptions, and conversion flows optimized for Miami's mobile-first luxury buyer.",
            },
            {
              category: 'technical',
              question: 'Does FactoryJet offer Shopify SEO services for Miami businesses?',
              answer: "Yes — FactoryJet builds technical SEO and AEO (Answer Engine Optimization) into every Miami Shopify store from day one, and offers ongoing SEO content services. The standard build includes: JSON-LD schema (FAQPage, LocalBusiness, Product), canonical tags, XML sitemap, Google Search Console setup, Core Web Vitals optimization, and keyword-optimized page structure. Ongoing SEO content packages are available on a fixed monthly retainer: monthly blog posts targeting Miami-specific keywords, product description rewrites for AI search visibility, and FAQ content aligned with how Miami consumers ask questions in ChatGPT and Perplexity. Miami's competitive e-commerce landscape requires consistent content production — FactoryJet's content team understands South Florida's market.",
            },
            {
              category: 'local',
              question: 'How does FactoryJet handle international shipping configuration for Miami brands?',
              answer: "Miami brands typically need the most sophisticated international shipping setup of any US city. FactoryJet configures: Shopify Markets with multi-currency support (USD + BRL, MXN, COP, EUR, GBP as needed), international carrier rate calculators (DHL, FedEx International, USPS First Class International), HS tariff codes for product categories, duty and import tax display at checkout for international buyers, restricted shipping zones for regulated products (tobacco, spirits, CBD), and country-specific payment method integrations (Mercado Pago for LATAM, iDEAL for Netherlands). We also configure Florida's export compliance requirements for high-value shipments and IOSS for EU customers buying above €150 thresholds.",
            },
            {
              category: 'local',
              question: 'Does FactoryJet offer ongoing Shopify support plans for Miami businesses?',
              answer: "Yes — FactoryJet offers post-launch support structured for Miami's seasonally driven market. Every Miami build includes a 30-day support window. Beyond that, ongoing options include: monthly retainer plans (4 hours development, priority SLA), seasonal campaign build packages (Black Friday/Cyber Monday, New Year holiday promotions, Art Basel merchandise drops), bilingual content updates, and performance optimization reviews. Miami's high-volume tourism seasons (winter snowbirds November–April, Art Basel in December, Ultra Music Festival in March) create predictable traffic spikes that benefit from pre-planned landing pages and promotion flows — FactoryJet can build these as part of a retainer.",
            },
          ]}
        />


        {/* Cross-link: Related Services in Miami */}
        <section className="py-10 bg-[#FAFAF7]">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-sm font-mono text-[#F05A28] uppercase tracking-widest mb-4">
              Also in Miami
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/miami/web-design/"
                className="px-5 py-2 rounded-full border border-[#F05A28] text-[#F05A28] text-sm font-medium hover:bg-[#F05A28] hover:text-white transition-colors"
              >
                Web Design →
              </Link>
            </div>
          </div>
        </section>

        {/* ── 14. FINAL CTA ───────────────────────────────────────────── */}
        <EcommerceCityLinksUS currentCity="miami" />
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Build Your Miami Shopify Store?"
          sub="Miami's DTC market — luxury consumers, Latin American buyers, Art Basel visitors — is growing faster than most brands can capture. Every week without a high-performing Shopify store is a week your competitors own the searches you should. Book a 30-minute audit and we'll have a store blueprint ready within 72 hours."
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
      dangerouslySetInnerHTML={{ __html: getEcommerceCitySchema('miami') }}
    />
  );
}
