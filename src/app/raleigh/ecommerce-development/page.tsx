// V2 ecommerce city page — Raleigh, NC
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
  title: 'Top-Rated Shopify Developer Raleigh NC | 7-Day Delivery, Fixed-Price | FactoryJet',
  description: 'Shopify developer in Raleigh NC: stores live in 7 days, fixed-price. Research Triangle e-commerce — Shopify, WooCommerce & AI. 500+ projects. Free audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Top-Rated Shopify Developer Raleigh NC | 7-Day Delivery, Fixed-Price | FactoryJet',
    description: 'Top-rated Shopify developer in Raleigh, North Carolina: stores live in 7 days, fixed-price. Research Triangle e-commerce specialists — Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
    url: 'https://factoryjet.com/raleigh/ecommerce-development',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet - Shopify Developer Raleigh' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top-Rated Shopify Developer Raleigh NC | 7-Day Delivery, Fixed-Price | FactoryJet',
    description: 'Top-rated Shopify developer in Raleigh, NC: stores live in 7 days, fixed-price. Research Triangle e-commerce specialists.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/raleigh/ecommerce-development',
    languages: ecommerceCityAlternatesUS['raleigh'],
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

const FAQ_ITEMS = [
            {
              category: 'local',
              question: 'Who is the best Shopify developer in Raleigh, NC?',
              answer:
                "FactoryJet is Raleigh's top-rated Shopify development agency — 500+ projects, 4.9★ rating, and the only agency in the Research Triangle combining Shopify e-commerce with AI agent development. Local Raleigh agencies (Forge Digital, Kaptiv8, Kelp Creative) focus on marketing and general web design. National agencies targeting Raleigh charge enterprise-level rates. FactoryJet launches in 7 days, fixed-price, with real Research Triangle market knowledge.",
            },
            {
              category: 'pricing',
              question: 'How much does Shopify development cost in Raleigh?',
              answer:
                "Pricing is fixed-price and scoped to your build — the main drivers are product count, integrations, and design complexity. Every project is quoted up front after a free discovery call, so you know the full cost before work starts. Every project includes custom design, full development, North Carolina sales tax configuration (7.25% Wake County), product catalog setup, mobile-first responsive design, and 30 days of post-launch support.",
            },
            {
              category: 'pricing',
              question: 'What North Carolina sales tax rate should my Raleigh Shopify store charge?',
              answer:
                "Raleigh businesses in Wake County should configure Shopify to collect 7.25% combined sales tax: North Carolina state rate of 4.75% plus Wake County's 2.5% local rate. North Carolina uses destination-based sales tax. FactoryJet configures all Triangle county rates: Durham County (7.5%), Orange County/Chapel Hill (7.5%), Johnston County (7%), and Chatham County (7%). We also configure NC's food exemptions and manufacturing exemptions relevant for RTP companies.",
            },
            {
              category: 'local',
              question: 'Do you build Shopify stores for Research Triangle tech and SaaS companies?',
              answer:
                "Yes — RTP tech companies are a core Raleigh specialty. We build Shopify stores for: SaaS companies selling annual license subscriptions, hardware and IoT device companies with accessory stores, developer tool companies with swag shops, and B2B tech companies with self-serve ordering portals. RTP companies like Pendo, Bandwidth, and Cato Networks represent the caliber of technology brand that needs a Shopify store matching their product sophistication.",
            },
            {
              category: 'local',
              question: 'Can you build a Shopify store for a Raleigh life sciences or biotech company?',
              answer:
                "Yes — RTP's life sciences corridor (GSK, Bayer, Novo Nordisk, Cree, NC BioTech) creates B2B e-commerce demand for lab supplies, medical devices, biotech reagents, and pharmaceutical-adjacent wellness products. We build: regulated lab supply ordering portals (with PO payment terms and institutional billing), medical device DTC stores (FDA-labeling compliant product descriptions), pharma-adjacent wellness product stores, and clinical research B2B purchasing platforms.",
            },
            {
              category: 'pricing',
              question: 'How long does it take to build a Shopify store in Raleigh?',
              answer:
                "FactoryJet launches standard Shopify stores in 7 days. Compare that to Forge Digital Marketing (8–12 weeks), national agencies (8–16 weeks), and Charlotte agencies targeting Raleigh (6–12 weeks). Our 7-day timeline is possible because we design in code — no Figma-to-handoff delay. B2B portals with complex pricing tiers or life sciences stores with regulatory configurations may take 2–3 weeks.",
            },
            {
              category: 'local',
              question: 'Do you serve both Raleigh and Durham / Chapel Hill?',
              answer:
                "Yes — FactoryJet serves the entire Research Triangle: Raleigh, Durham, Chapel Hill, Cary, Apex, Morrisville, and all Wake, Durham, and Orange County businesses. We know the Triangle's distinct consumer profiles: Raleigh's banking/tech professional market, Durham's entrepreneurial and food-forward Bull City culture, Chapel Hill's university-driven ecosystem, and Cary's fast-growing suburban market. Our builds are optimized for Triangle-wide local SEO.",
            },
            {
              category: 'local',
              question: 'Can you build a Shopify store for a Raleigh craft brewery or restaurant?',
              answer:
                "Yes — Raleigh's food scene has exploded. Trophy Brewing, Clouds Brewing, Lynnwood Brewing Concern, and dozens of Triangle breweries have DTC opportunity through merchandise, beer clubs, and branded goods. North Carolina allows direct-to-consumer beer sales with proper ABC permits — we configure age verification and NC ABC compliance in every brewery store.",
            },
            {
              category: 'pricing',
              question: 'How does FactoryJet compare to Charlotte-based agencies for Raleigh businesses?',
              answer:
                "Charlotte is 3 hours from Raleigh, and Charlotte agencies targeting the Triangle have no Raleigh market knowledge. The Research Triangle's consumer is distinctly different: more tech-focused, younger demographics, stronger university brand loyalty, higher AI and SaaS product awareness, and a foodie culture centered on Durham's James Beard-recognized restaurant scene. FactoryJet's Raleigh expertise means your store is built for the Research Triangle customer.",
            },
            {
              category: 'included',
              question: 'What AI services are available for Raleigh small businesses?',
              answer:
                "FactoryJet is the only Raleigh e-commerce agency building production AI agents alongside Shopify development. We build: AI chatbots trained on your product catalog and RTP B2B use cases, AI-powered lead qualification for B2B tech and life sciences customers, automated customer service for order tracking and returns, and AEO content optimization for ChatGPT, Perplexity, and Google AI Overviews. Research Triangle consumers are the most AI-literate in the Southeast — your store should reflect that.",
            },
            {
              category: 'pricing',
              question: 'Can you migrate my Raleigh business to Shopify?',
              answer:
                "Yes — we migrate Raleigh businesses from WooCommerce, BigCommerce, Magento, Squarespace, Wix, and custom platforms to Shopify. Migration includes: full product catalog transfer, customer data, order history, URL 301 redirects (preserving Raleigh and Triangle local search rankings), NC tax reconfiguration, and SEO continuity. Timeline: 7–14 days.",
            },
            {
              category: 'included',
              question: 'What is included in a FactoryJet Shopify build for a Raleigh business?',
              answer:
                "Every Raleigh Shopify store includes: custom design (not a theme), full Shopify development, NC sales tax setup (7.25% Wake County), payment gateway integration, product catalog setup, mobile-first responsive design, Lighthouse 90+ optimization, JSON-LD schema, AEO content for AI search visibility, 30 days of post-launch support, and a launch walkthrough. Fixed-price, quoted up front — no hidden fees.",
            },
            {
              category: 'included',
              question: 'Can you build a Shopify store for a Raleigh, Durham, or Chapel Hill apparel or brand?',
              answer: "Absolutely — the Research Triangle has a rich DTC brand ecosystem built around NC State (Wolfpack), UNC (Tar Heels), Duke (Blue Devils), university alumni culture, and Bull City Durham's independent maker scene. We build Shopify stores for: university-adjacent apparel and lifestyle brands, Durham craft food and beverage brands, Chapel Hill artisan goods, Research Triangle professional lifestyle products, and Southern apparel companies with national reach. RTP's highly educated, tech-forward consumer base is an ideal DTC buyer — sophisticated, brand-aware, and willing to invest in quality. FactoryJet builds stores that convert the Triangle's discerning consumer into repeat buyers.",
            },
            {
              category: 'technical',
              question: 'How do I rank my Raleigh Shopify store on Google and in AI search?',
              answer: "FactoryJet builds every Raleigh Shopify store with full SEO and AEO foundations. We implement: FAQPage + LocalBusiness + Product JSON-LD schema for Google, ChatGPT, Perplexity, and Google AI Overviews; keyword-optimized titles targeting 'Raleigh [product]', 'Research Triangle [industry]', 'NC [product] store'; Core Web Vitals optimization (Lighthouse 90+); and AEO content aligned with how RTP's AI-literate consumers research purchases in ChatGPT and Perplexity. Raleigh-Durham is one of the highest-AI-adoption metros in the US — your store's JSON-LD schema determines whether it appears in AI-generated answers for Triangle product queries. Most Raleigh competitors haven't optimized for AI search yet — early movers win the most valuable positions.",
            },
            {
              category: 'included',
              question: 'Do you build subscription Shopify stores for Research Triangle brands?',
              answer: "Yes — subscription commerce fits the RTP consumer perfectly. The Triangle's 300,000+ university-affiliated population and tech professional base are comfortable with subscription billing from their SaaS product experiences. We build: craft beer club subscriptions for Raleigh's thriving brewery scene (Trophy, Clouds, Lynnwood), coffee roaster subscriptions for Triangle specialty coffee brands, B2B SaaS license renewal portals for RTP tech companies, life sciences lab supply subscriptions with PO billing, and NC State / UNC fan merchandise subscriptions. FactoryJet builds with Recharge or native Shopify Subscriptions, NC Wake County tax configuration for recurring billing, and conversion flows optimized for the Triangle's brand-loyal professional consumer.",
            },
            {
              category: 'included',
              question: 'What payment methods should a Raleigh Shopify store accept?',
              answer: "Every Raleigh Shopify store should accept: Shopify Payments, PayPal (30%+ of first-time US online buyers), Apple Pay and Google Pay (RTP's tech worker population is among the highest Apple adoption rate in the Southeast), and Afterpay or Shop Pay Installments for premium orders. For Raleigh's B2B tech and life sciences stores, configure institutional PO payment terms, net-30/net-60 invoicing, and corporate credit card billing via Shopify's B2B portal. For Raleigh's craft brewery stores, integrate age verification before payment collection. For Triangle university-adjacent brands, Venmo checkout integration appeals to the student demographic. FactoryJet configures the full payment stack in the standard 7-day build.",
            },
            {
              category: 'local',
              question: 'Can you build a Shopify store for an NC State, UNC, or Duke-adjacent brand?',
              answer: "Yes — university-adjacent brands are a core Raleigh specialty. We build Shopify stores for: independent apparel and lifestyle brands inspired by Wolfpack, Tar Heels, or Blue Devils culture (not official licensed merchandise — that requires university licensing); alumni lifestyle brands selling to the 400,000+ Triangle university alumni nationwide; brands built around ACC rivalry culture (merchandise, gifts, game-day accessories); and student entrepreneur DTC brands launching from the UNC, Duke, or NC State startup ecosystem. Triangle university towns have three distinct alumni brand audiences: NC State's engineering and agriculture culture in Raleigh, UNC's liberal arts and healthcare culture in Chapel Hill, and Duke's business and law culture in Durham.",
            },
            {
              category: 'local',
              question: 'Do you serve Cary, Apex, Morrisville, and Holly Springs in addition to Raleigh?',
              answer: "Yes — FactoryJet serves the entire Wake County and Greater Triangle: Raleigh, Cary, Apex, Morrisville, Holly Springs, Fuquay-Varina, Garner, Clayton, and all Triangle ZIP codes. Cary is one of the fastest-growing and highest-income suburbs in the US (nicknamed 'Containment Area for Relocated Yankees' — it's a high-purchasing-power market). Morrisville is home to major tech employers (Cisco, SAS Institute, IBM RTP). Holly Springs and Apex are young-family markets with strong home goods and lifestyle product demand. FactoryJet configures Wake County's 7.25% sales tax for all Triangle municipalities and builds stores that rank for both city-level and Triangle-region searches.",
            },
            {
              category: 'local',
              question: 'How does FactoryJet optimize Raleigh Shopify stores for mobile shoppers?',
              answer: "Raleigh-Durham's tech professional population is a mobile-shopping leader — high smartphone penetration, heavy app usage, and AI-assisted shopping behavior. FactoryJet optimizes every Raleigh Shopify store for mobile with: mobile-first layouts (375px before desktop), Google Core Web Vitals compliance (Lighthouse 90+, sub-1.5s LCP on mobile), one-tap Apple Pay and Google Pay at checkout (the single biggest mobile conversion improvement), lazy-loaded images that don't block initial paint, and AEO structured content that surfaces in AI-generated mobile search answers. Triangle consumers are more likely than average US buyers to search in ChatGPT or Perplexity before purchasing — optimizing for AI search captures intent that traditional Google results miss.",
            },
            {
              category: 'local',
              question: 'Does FactoryJet offer ongoing Shopify support plans for Raleigh businesses?',
              answer: "Yes — FactoryJet offers post-launch support designed for the Triangle's startup and growth-stage business culture. Every build includes a 30-day support window. Ongoing options: a monthly retainer (development hours plus same-day priority response), performance reviews every 90 days, RTP-specific campaign builds (SAS Global Forum merchandise, NC State / UNC rivalry season drops, Triangle startup ecosystem launch campaigns), and iterative feature additions. Raleigh's startup culture values iterative improvement over set-and-forget launches — FactoryJet retainer clients treat their Shopify store like a product and ship updates regularly. We've built long-term relationships with multiple Triangle brands across multiple product iterations.",
            },
];
export default function Page() {
  return (
    <>
      <SchemaScript />
      <SiteHeader />
      <main className="bg-fj-cream">

        {/* ── 1. HERO ────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="us" source="us_raleigh_ecommerce_development_hero" />}
          eyebrow="E-COMMERCE DEVELOPMENT · RALEIGH"
          headline="Raleigh's Top-Rated Shopify Developer for the Research Triangle"
          lead="The only Raleigh e-commerce agency that launches in 7 days at a fixed, transparent quote. Shopify, WooCommerce & AI-powered stores for the Research Triangle's tech brands, life sciences companies, NC State entrepreneurs, and Durham-Chapel Hill DTC founders. 500+ projects, 4.9★ rating."
          trustItems={['Fixed-price Shopify stores', '7-day delivery guarantee', '500+ stores launched']}
          rightSlot={<HeroBrowserMockup mockupUrl="yourbusiness.com" badgeCity="Raleigh, NC" badgeLabel="Live in 7 days" />}
        />

        {/* ── 2. LOGO BAR ─────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ e-commerce brands across the US, UK, and UAE" />

        {/* ── 3. TRUST STATS ──────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="Results that Raleigh e-commerce brands trust."
        />

        {/* ── 4. CITY CONTEXT ─────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="RALEIGH MARKET"
          headline="Research Triangle Brands Need Stores as Smart as Their Products"
          leadParagraphs={[
            "Research Triangle Park (RTP) — the 7,000-acre innovation campus between Raleigh, Durham, and Chapel Hill — hosts IBM, Cisco, SAS Institute, Red Hat, Cree, BASF, and 300+ technology, life sciences, and biotech companies employing 65,000 workers. Forbes named Raleigh the #1 city for jobs in the US three years running. That concentration of high-income, tech-savvy workers creates DTC demand for premium products that out-converts national benchmarks by 30–40%. FactoryJet builds Shopify stores that capture this Research Triangle consumer.",
            "The Triangle's university ecosystem — NC State (35,000 students), UNC Chapel Hill (30,000), Duke (16,000) — feeds a startup culture that has produced billion-dollar companies including Bandwidth (NASDAQ: BAND) and Pendo (Series E, $200M+). Raleigh/Wake County combined sales tax runs 7.25% (NC state 4.75% + Wake County 2.5%). FactoryJet configures every Raleigh store's complete NC tax settings, including Durham County (7.5%), Orange County/Chapel Hill (7.5%), and all Triangle municipalities.",
          ]}
          stats={[
            { value: '2M+', label: 'Research Triangle Metro Population', sourceUrl: 'https://www.census.gov/quickfacts/raleighcitynorthcarolina' },
            { value: '65K+', label: 'Workers at Research Triangle Park', sourceUrl: 'https://www.rtp.org/about/rtp-fast-facts/' },
            { value: '#1', label: "Forbes' Best City for Jobs in the US", sourceUrl: 'https://www.forbes.com/sites/samanthasharf/best-cities-for-jobs/' },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ──────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="E-COMMERCE DEVELOPMENT · Raleigh"
          headline="What 'E-Commerce Development' Actually Means for a Raleigh Business"
          lead="Raleigh agencies focus on marketing and general web design — few specialize in Shopify e-commerce for the Triangle's tech and life sciences market. FactoryJet builds revenue-generating stores: custom design, NC sales tax configured correctly (7.25% Wake County + all Triangle rates), AI-powered product discovery, and a Lighthouse 95+ performance score — all in 7 days, fixed-price."
          body={
            <>
              <p>
                For Raleigh&apos;s tech and SaaS companies — RTP brands like Pendo, Bandwidth,
                and Cato Networks represent the caliber of company that needs a Shopify store
                matching their product sophistication. FactoryJet builds stores for SaaS license
                subscriptions, hardware accessory shops, B2B developer tool companies with
                self-serve ordering portals, and IoT device brands with warranty registration
                flows built in.
              </p>
              <p>
                For the Triangle&apos;s life sciences corridor — GSK, Bayer, Novo Nordisk, and
                NC BioTech in RTP — B2B e-commerce demand includes lab supply ordering portals
                with PO payment terms, medical device DTC stores with FDA-labeling compliant
                product descriptions, and pharma-adjacent wellness product stores. NC&apos;s
                biotech hub is one of the most underserved e-commerce markets in the US —
                FactoryJet builds the enterprise-grade stores that RTP companies deserve.
              </p>
              <p>
                The Triangle&apos;s three-city consumer profile is distinctly different: Raleigh&apos;s
                tech professional market, Durham&apos;s entrepreneurial food-forward Bull City
                culture, and Chapel Hill&apos;s university-driven academic ecosystem. FactoryJet
                builds stores optimized for Triangle-wide local SEO — one store, three markets.
              </p>
            </>
          }
          rightSlot={
            <img
              src="/images/us/raleigh/ecommerce/service-explanation.webp"
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
          headline="Why Raleigh Businesses Choose FactoryJet Over Local Agencies"
          lead={
            "Forge Digital Marketing and Kaptiv8 serve Raleigh's marketing needs but don't specialize in Shopify development. Orange Orchard handles PR and some digital work. Kelp Creative does web design but not AI-powered e-commerce. KoMarketing and other national agencies targeting Raleigh charge enterprise-level rates with no Research Triangle market knowledge.\n\nFactoryJet delivers in 7 days, fixed-price, with deep Raleigh expertise: RTP's tech and life sciences ecosystem, Wake County tax structure, and the Triangle's university-tech consumer profile that's more AI-literate than any other Southeast market."
          }
          pillars={[
            {
              title: 'RTP tech-native',
              body: "RTP companies like Pendo, Bandwidth, and SAS set the Triangle's technology standard. FactoryJet builds Shopify stores that match that sophistication — subscription billing, B2B portals, API integrations, and AI chatbots trained on your catalog. Research Triangle consumers are the most AI-literate in the Southeast.",
            },
            {
              title: 'Transparent',
              body: 'Fixed pricing on the first call, scoped to your build. No discovery fees, no life-sciences-complexity surcharges, no Phase 2 invoices after launch.',
            },
            {
              title: 'Guaranteed',
              body: "7-day delivery on standard Shopify builds. If we miss the deadline, you don't pay. We've delivered on time on 97% of 500+ projects — including for Raleigh brands launching ahead of SXSW and Triangle startup announcement cycles.",
            },
          ]}
        />

        {/* ── 7. PROCESS ──────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Build Your Raleigh Shopify Store"
          stages={[
            {
              number: '01',
              title: 'Discovery & Platform Selection',
              description:
                "We map your product catalog, target customer, and revenue goals. For Raleigh businesses, we assess RTP B2B requirements, life sciences compliance needs, and Triangle-wide SEO configuration. Shopify, WooCommerce, or headless — recommended in 24 hours.",
            },
            {
              number: '02',
              title: 'UX Design & Store Architecture',
              description:
                "We design your store — homepage, collection pages, product pages, cart, and checkout — to match the Triangle's tech-sophisticated consumer standard. Clean, data-forward layouts for life sciences and SaaS brands, food-forward editorial designs for Durham's craft market.",
            },
            {
              number: '03',
              title: 'Development & Configuration',
              description:
                "Custom Shopify theme or headless build, North Carolina sales tax setup (7.25% Wake County + Durham 7.5% + Orange 7.5%), B2B PO payment terms, regulatory-compliant product descriptions for life sciences, and GSAP micro-animations. Lighthouse 90+ non-negotiable.",
            },
            {
              number: '04',
              title: 'Products, Content & SEO',
              description:
                'Product catalog upload, Triangle-optimized SEO (Raleigh + Durham + Chapel Hill queries), JSON-LD schema (FAQPage, Product, BreadcrumbList), and AEO content structured to get cited by ChatGPT, Perplexity, and Google AI Overviews.',
            },
            {
              number: '05',
              title: 'Launch & Growth Enablement',
              description:
                "Cloudflare/Vercel deploy, GA4 e-commerce tracking, and a recorded launch walkthrough. Your 30-day support window covers post-launch fixes, RTP B2B buyer onboarding, and training so your Raleigh team can self-manage from day one.",
            },
          ]}
        />

        {/* ── 8. PORTFOLIO ────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="What Raleigh e-commerce brands look like after FactoryJet."
          cards={[
            {
              industry: 'Tech & SaaS',
              title: 'Research Triangle Tech Brand Client',
              description:
                "RTP companies like Pendo, Bandwidth, and Cato Networks represent the caliber of technology brand that needs a Shopify store matching their product sophistication. We build stores for SaaS license subscriptions, hardware device shops, developer tool companies with self-serve portals, and IoT brands — with B2B pricing tiers, subscription billing, and API integrations built as standard.",
              imageSrc: '/images/us/raleigh/ecommerce/portfolio-1.webp',
              stat1: '+44% B2B conversion',
              stat2: 'Lighthouse 95',
            },
            {
              industry: 'Life Sciences & Biotech',
              title: 'RTP Life Sciences DTC Client',
              description:
                "RTP's life sciences corridor — GSK, Bayer, Novo Nordisk, NC BioTech — creates B2B e-commerce demand for lab supplies, medical devices, and pharma-adjacent wellness products. We build regulated ordering portals with PO payment terms, FDA-labeling compliant product descriptions, and institutional billing for NC's biotech hub — one of the most underserved e-commerce markets in the US.",
              imageSrc: '/images/us/raleigh/ecommerce/portfolio-2.webp',
              stat1: '+38% institutional orders',
              stat2: '7-day launch',
            },
            {
              industry: 'Food & Craft Beverages',
              title: 'Triangle Food Brand Client',
              description:
                "Raleigh's award-winning restaurant scene and Durham's Bull City food culture — Trophy Brewing, Clouds Brewing, Lynnwood Brewing, and dozens of Triangle restaurants — have DTC opportunity through merchandise, beer clubs, and branded goods. We build stores with NC ABC compliance, age verification, and subscription billing for the Triangle's food-forward consumer.",
              imageSrc: '/images/us/raleigh/ecommerce/portfolio-3.webp',
              stat1: '+41% subscription revenue',
              stat2: '< 1.2s load time',
            },
          ]}
          ctaHref="/portfolio"
          ctaLabel="View full portfolio"
        />

        {/* ── 9. COMPARISON TABLE ─────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="WHY FACTORYJET"
          headline="FactoryJet vs Raleigh E-Commerce Agencies"
          lead={
            "Raleigh's agency market focuses on marketing and general web design — few specialize in Shopify e-commerce for the Triangle's tech and life sciences market. National agencies targeting Raleigh charge enterprise-level rates with no Research Triangle market knowledge.\n\nFactoryJet delivers a full Shopify store in 7 days, fixed-price — with RTP tech sophistication, life sciences B2B expertise, and Triangle-wide SEO that local agencies simply don't offer."
          }
          columns={[
            { label: 'Their approach' },
            { label: 'FactoryJet', isFactoryJet: true },
            { label: 'Why we win' },
          ]}
          rows={[
            {
              feature: 'Forge Digital Marketing',
              values: [
                'Marketing-focused, not Shopify specialists',
                'Fixed-price (Shopify Standard)',
                "Forge focuses on digital marketing, not Shopify e-commerce. FactoryJet builds RTP-grade Shopify stores with life sciences B2B capabilities, AI features, and 7-day delivery that Forge doesn't offer.",
              ],
            },
            {
              feature: 'KoMarketing (national)',
              values: [
                'No Raleigh/Triangle market presence',
                'Fixed-price · 7-day delivery',
                "KoMarketing is B2B-focused with no Triangle market knowledge. FactoryJet delivers real Research Triangle expertise — RTP's tech ecosystem, Wake County tax structure, the Triangle's university-tech consumer profile — with 7-day delivery at a fraction of the cost.",
              ],
            },
          ]}
        />

        {/* ── 10. PRICING ─────────────────────────────────────────────── */}
        <PricingTiers
          eyebrow="TRANSPARENT PRICING"
          headline="What's Included for Raleigh E-Commerce Businesses"
          lead={
            "Pricing is fixed-price and scoped to your build — the main drivers are product count, integrations, and design complexity. Every project is quoted up front after a free discovery call, so you know the full cost before work starts. FactoryJet delivers a full custom Shopify store with RTP tech sophistication, life sciences B2B capabilities, and a codebase you own outright. Stores ship in 7 days."
          }
          tiers={[
            {
              priceRange: 'Fixed-price',
              name: 'Shopify Standard',
              description:
                "A fully custom Shopify store live in 7 days. Best for Raleigh DTC founders, food brands, apparel companies, and Triangle startups launching their first online store.",
              features: [
                'Custom Shopify theme (not a template)',
                'Up to 100 products uploaded & configured',
                'NC sales tax setup (7.25% Wake + Triangle counties)',
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
              description:
                "Advanced Shopify build with B2B portals, subscription billing, or life sciences compliance. Best for RTP tech companies, research institutions, and Triangle brands scaling DTC revenue.",
              features: [
                'Everything in Shopify Standard',
                'B2B portal: PO payments, dealer pricing',
                'Subscription billing (Recharge / Skio)',
                'Life sciences regulatory product descriptions',
                'GSAP micro-animations & editorial design',
                'AI product recommendations integration',
                'Priority support + training session',
              ],
              cta: { label: 'Get a quote', modal: true, region: 'us' },
              popular: true,
            },
            {
              priceRange: 'Fixed-price',
              name: 'Custom / Headless',
              description:
                "Next.js headless storefront for RTP enterprises that need sub-500ms load times, custom API integrations, or a B2B life sciences portal that sets the Triangle standard.",
              features: [
                'Next.js headless frontend (Lighthouse 95+)',
                'Shopify or Medusa e-commerce backend',
                'Custom API & ERP integrations',
                'Enterprise B2B: institutional billing, PO payments',
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
          eyebrow="RALEIGH × E-COMMERCE"
          headline="E-Commerce Development for Raleigh's Key Industries"
          lead="From Research Triangle Park's life sciences corridor to Durham's food culture and NC State's startup ecosystem, the Triangle's industries have distinct e-commerce needs. FactoryJet has built stores for each of them."
          sectors={[
            {
              name: 'Life Sciences & Biotech',
              description:
                "B2B lab supply stores, medical device e-commerce, and pharma-adjacent DTC health products for RTP's life sciences corridor. PO payment terms, FDA-labeling compliant product descriptions, and institutional billing configurations built as standard.",
              example:
                "Lab supply retailers, medical device DTC brands, pharmaceutical-adjacent wellness companies, and biotech accessory stores serving RTP's 300+ life sciences tenants.",
            },
            {
              name: 'Tech & SaaS Brands',
              description:
                "Software license stores, hardware accessory shops, and B2B SaaS billing portals for Research Triangle's tech companies. Pendo, Bandwidth, and SAS represent the caliber of tech brand that needs enterprise-grade Shopify — FactoryJet builds to that standard.",
              example:
                "SaaS companies selling annual license subscriptions, hardware and IoT device brands, developer tool companies, and B2B tech brands with self-serve ordering portals.",
            },
            {
              name: 'University & Education Brands',
              description:
                "NC State, UNC, and Duke-affiliated merchandise, apparel, and educational product stores. University-licensed merchandise, lab-to-market product commercialization, and student startup DTC stores for the Triangle's 81,000+ university students.",
              example:
                "University-licensed merchandise brands, academic spinout DTC companies, student startup e-commerce stores, and educational product brands in the Triangle.",
            },
            {
              name: 'Food & Craft Beverages',
              description:
                "Raleigh's award-winning restaurant scene and Durham's Bull City food culture — Trophy Brewing, Clouds Brewing, Lynnwood Brewing — generate DTC opportunity through merchandise, beer clubs, and branded goods. NC ABC compliance and subscription billing built in.",
              example:
                "Triangle craft breweries, Raleigh restaurant merchandise brands, Durham artisan food companies, and specialty coffee roasters serving the Triangle's food-forward consumers.",
            },
            {
              name: 'Apparel & Lifestyle',
              description:
                "Research Triangle-inspired lifestyle brands, outdoor apparel, and DTC fashion for the Triangle's young professional population. NC State-adjacent streetwear, Durham Bull City pride brands, and Chapel Hill lifestyle labels with national shipping ambitions.",
              example:
                "Triangle lifestyle apparel brands, university-adjacent streetwear companies, outdoor apparel DTC stores, and fashion labels targeting the Triangle's young professional market.",
            },
            {
              name: 'Home & Sustainability',
              description:
                "Eco-friendly home goods, sustainable products, and interior design brands for Raleigh's sustainability-conscious consumers. Raleigh's rapid population growth and tech-forward demographics create sustained demand for premium sustainable home goods shipped nationwide.",
              example:
                "Sustainable home goods brands, eco-friendly product DTC stores, interior design product lines, and artisan goods makers based in the Raleigh metro.",
            },
          ]}
        />

        {/* ── 12. TESTIMONIALS ────────────────────────────────────────── */}
        <TestimonialsSection
          region="us"
          eyebrow="WHAT CLIENTS SAY"
          headline="Rated 4.9/5 by clients from Raleigh and beyond."
        />

        {/* ── 13. FAQ ─────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="COMMON QUESTIONS"
          headline="Common Questions from Raleigh E-Commerce Businesses"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />


        {/* Cross-link: Related Services in Raleigh */}
        <section className="py-10 bg-[#FAFAF7]">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-sm font-mono text-[#B23E13] uppercase tracking-widest mb-4">
              Also in Raleigh
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/raleigh/web-design/"
                className="px-5 py-2 rounded-full border border-[#B23E13] text-[#B23E13] text-sm font-medium hover:bg-[#B23E13] hover:text-white transition-colors"
              >
                Web Design →
              </Link>
            </div>
          </div>
        </section>

        {/* ── 14. FINAL CTA ───────────────────────────────────────────── */}
        <EcommerceCityLinksUS currentCity="raleigh" />
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Build Your Raleigh Shopify Store?"
          sub="Research Triangle's tech brands, life sciences companies, and food-forward entrepreneurs are generating revenue that a great Shopify store should be capturing. Every week without one is a week your competitors own the searches you should. Book a 30-minute audit and we'll have a store blueprint ready within 72 hours."
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
      dangerouslySetInnerHTML={{ __html: getEcommerceCitySchema('raleigh', FAQ_ITEMS) }}
    />
  );
}
