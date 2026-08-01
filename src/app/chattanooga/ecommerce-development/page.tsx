// V2 ecommerce city page — Chattanooga, TN
// Design system: py-14 md:py-20 standard | 30/65/5 dark/light rhythm | Clash Display headlines
// Schema: server-side via SchemaScript (AI-crawler visible in initial HTML)
// GSC: "shopify chattanooga" — 68 impressions @ position 8.3 — #1 quick win

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
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

export const metadata: Metadata = {
  title: 'Shopify Developer Chattanooga TN | Custom Shopify Stores | FactoryJet',
  description: 'Top-rated Shopify developer in Chattanooga, TN. FactoryJet builds custom Shopify stores for Gig City businesses — 7-day delivery, fixed price, full code ownership. Free audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Developer Chattanooga TN | Custom Shopify Stores | FactoryJet',
    description: 'Top-rated Shopify developer in Chattanooga, TN. FactoryJet builds custom Shopify stores for Gig City businesses — 7-day delivery, fixed price, full code ownership. Free audit.',
    url: 'https://factoryjet.com/chattanooga/ecommerce-development',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet - Shopify Developer Chattanooga TN' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Developer Chattanooga TN | Custom Shopify Stores | FactoryJet',
    description: 'Top-rated Shopify developer in Chattanooga, TN. FactoryJet builds custom Shopify stores for Gig City businesses — 7-day delivery, fixed price, full code ownership. Free audit.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/chattanooga/ecommerce-development',
    languages: ecommerceCityAlternatesUS['chattanooga'],
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
              question: 'Who is the best Shopify developer in Chattanooga, Tennessee?',
              answer:
                "FactoryJet is Chattanooga's top-rated Shopify development agency — 500+ projects delivered, 4.9★ rating, and the only shop in Gig City that combines Shopify e-commerce with AI agent development at SMB pricing. Unlike local agencies like Riverworks Marketing, JLB Works, and Slamdot that build primarily on WordPress, FactoryJet builds exclusively on Shopify and Next.js 15. Unlike national agencies like Growisto and WebCitz that rank for Chattanooga queries but operate with 7–16 week timelines and zero local market knowledge, we launch in 7 days, fixed-price.",
            },
            {
              category: 'pricing',
              question: 'How much does Shopify development cost in Chattanooga?',
              answer:
                "FactoryJet's Shopify pricing is fixed-price and scoped to your build — the main drivers are page count, integrations, and design complexity — compared to enterprise-level rates at established Chattanooga agencies. Every project includes custom design, full development, Tennessee sales tax configuration for Hamilton County, product catalog setup, mobile-first responsive design, Core Web Vitals optimization, and 30 days of post-launch support. Every project is quoted up front after a free discovery call, so you know the full cost before work starts. No hidden fees, no phase-2 upsells.",
            },
            {
              category: 'pricing',
              question: 'How long does it take to build a Shopify store in Chattanooga?',
              answer:
                "FactoryJet launches standard Shopify stores in 7 days. Compare that to Growisto (7–16 weeks), WebCitz (4–8 weeks), or local Chattanooga agencies like JLB Works (6–12 weeks for custom builds). Our 7-day timeline works because we design in code — no Figma-to-handoff delay — and use a component architecture optimized for rapid deployment. Complex builds with subscription billing, B2B wholesale portals, or headless architectures typically take 2–3 weeks.",
            },
            {
              category: 'pricing',
              question: 'What Tennessee sales tax rate should my Chattanooga Shopify store charge?',
              answer:
                "Chattanooga businesses in Hamilton County should configure Shopify to collect 9.25%–9.75% combined sales tax depending on your exact municipality: Tennessee's state rate is 7.0%, plus Hamilton County's local rate of 2.25%–2.75%. Tennessee uses destination-based sales tax — you charge the rate at the buyer's shipping address. Tennessee also applies a reduced 4% rate on food and groceries and 7% on prepared food, which we configure correctly for food and beverage clients. FactoryJet handles all Tennessee tax configuration during every Shopify build.",
            },
            {
              category: 'local',
              question: "How does Chattanooga's EPB fiber internet affect my e-commerce business?",
              answer:
                "EPB's 25 Gbps fiber means your internal team manages your store at extraordinary speeds — but your customer experience depends on your store's server performance and CDN delivery, not your office connection. FactoryJet builds all stores with Lighthouse 90+ scores and deploys on Cloudflare's global CDN, so your store loads in under 1.5 seconds for every customer regardless of their connection. Gig City's infrastructure is a genuine business advantage for internal operations; FactoryJet makes sure your storefront matches that speed globally.",
            },
            {
              category: 'local',
              question: 'Do you build Shopify stores for outdoor and adventure businesses in Chattanooga?',
              answer:
                "Absolutely — outdoor and adventure is one of our core Chattanooga specialties. We build stores with gear rental calendars, guided experience booking integrations, waiver flows, seasonal inventory management, and adventure-specific product configurations. Chattanooga's position as a top outdoor destination — rock climbing at Sunset Rock, kayaking the Tennessee River, hang gliding at Lookout Mountain — means your store needs to convert both local customers and 10.7M annual visitors who discover you through search before they arrive.",
            },
            {
              category: 'local',
              question: 'Can you build an online ordering or merchandise store for a Chattanooga restaurant?',
              answer:
                "Yes — Chattanooga's $1.8B tourism economy means your restaurant has a real digital revenue opportunity beyond walk-in traffic. FactoryJet builds Shopify-powered restaurant stores handling online ordering, digital gift cards, branded merchandise, catering inquiry forms, and event ticket sales. We integrate with Toast, Square, and other POS systems. Restaurants on Chattanooga's Southside, North Shore, and downtown have used our stores to add significant revenue from visitors who discover them on Google before arriving in the city.",
            },
            {
              category: 'pricing',
              question: 'How does FactoryJet compare to Riverworks Marketing for Shopify in Chattanooga?',
              answer:
                "Riverworks Marketing is a well-regarded Chattanooga full-service digital agency — strong in SEO, paid media, and brand work, primarily WordPress-built. They don't specialize in Shopify development or AI-powered e-commerce and don't publish Shopify-specific pricing. FactoryJet is a pure-play Shopify and e-commerce development shop: 7-day launches, transparent fixed pricing, and AI development no Chattanooga agency offers at comparable pricing.",
            },
            {
              category: 'pricing',
              question: 'How does FactoryJet compare to JLB Works for e-commerce in Chattanooga?',
              answer:
                "JLB Works is Chattanooga's largest web design firm with 800+ clients — but they build primarily on WordPress without a dedicated Shopify or AI development practice. Timelines run 6–12 weeks for custom projects. FactoryJet specializes exclusively in Shopify e-commerce: 7-day delivery, fixed-price, and AI capabilities that JLB Works doesn't offer at any SMB price point. For a Shopify store that needs to be live and converting within a week, FactoryJet fills the gap JLB Works leaves.",
            },
            {
              category: 'local',
              question: 'Does my Chattanooga business need a local Shopify developer?',
              answer:
                "You need a developer who understands Chattanooga's market — not necessarily one with a physical office there. What matters: knowledge of Tennessee's 9.25% combined sales tax, the tri-state TN/GA/AL customer base, Chattanooga's outdoor and tourism economy, CO.LAB's startup ecosystem, and Hamilton County search behavior. FactoryJet delivers deep Chattanooga market knowledge with remote-first collaboration: direct engineer access (no account managers), same-day responses, and weekly video check-ins during your 7-day build.",
            },
            {
              category: 'included',
              question: 'What AI services are available for Chattanooga small businesses?',
              answer:
                "FactoryJet is the only e-commerce agency serving Chattanooga that builds production AI agents alongside Shopify development. We build AI chatbots trained on your product catalog and FAQs, AI-powered lead qualification agents, customer service automation that handles order status and returns without human intervention, and AEO content optimized for ChatGPT and Perplexity. Chattanooga already runs AI-powered smart traffic systems citywide and is partnering with IonQ on quantum computing — your business should be on the same trajectory.",
            },
            {
              category: 'pricing',
              question: 'Can you migrate my existing Chattanooga website to Shopify?',
              answer:
                "Yes — Shopify migrations are a significant part of our Chattanooga work. We migrate from WooCommerce, BigCommerce, Magento, Squarespace, Wix, and custom-built platforms. Every migration includes full product catalog transfer, customer data migration, order history preservation, URL redirect mapping to preserve Google rankings, Tennessee tax reconfiguration, and SEO continuity setup. We implement 301 redirects for every old URL so your Chattanooga local search rankings survive the migration intact. Timeline: 7–14 days depending on catalog size.",
            },
            {
              category: 'included',
              question: 'What is included in a FactoryJet Shopify build for a Chattanooga business?',
              answer:
                "Every Chattanooga Shopify store includes: custom design (not a purchased theme), full Shopify development, Tennessee sales tax setup (9.25%–9.75% Hamilton County rates), payment gateway integration (Shopify Payments, PayPal, Afterpay, Affirm), product catalog setup, mobile-first responsive design, Core Web Vitals optimization (Lighthouse 90+), Google Search Console setup, JSON-LD schema (FAQPage, Service, BreadcrumbList), AEO content for ChatGPT and Perplexity, 30 days of post-launch support, and a recorded launch walkthrough. Fixed-price — no hidden fees.",
            },
            {
              category: 'local',
              question: 'Do you build Shopify stores for Chattanooga craft breweries or distilleries?',
              answer:
                "Yes — Chattanooga's craft beverage scene is one of our local specialties. We build DTC stores with age verification flows, Tennessee TABC-compliant shipping zone configurations, subscription beer and spirits clubs, gift box builders, and nationwide cold-chain shipping setups. Chattanooga's 10.7M annual visitors discover local beverage brands during their visit and then reorder online — a properly built Shopify store turns that first-visit discovery into a recurring DTC customer relationship.",
            },
            {
              category: 'local',
              question: 'Can you build a B2B Shopify store for a Chattanooga manufacturing company?',
              answer:
                "Yes — B2B industrial e-commerce is one of our specialties for the Chattanooga and Tennessee Valley manufacturing market. We build Shopify B2B portals with dealer pricing tiers, bulk order discounts, net-30 and net-60 payment terms, purchase order checkout workflows, equipment part configurators, and CSV bulk import ordering for high-SKU industrial catalogs. Chattanooga manufacturers use our portals to process hundreds of dealer orders monthly while eliminating the phone and email overhead that consumes sales team capacity.",
            },
            {
              category: 'technical',
              question: 'How do I rank my Chattanooga Shopify store on Google and in AI search?',
              answer:
                "FactoryJet builds every Chattanooga Shopify store with a full SEO and AEO foundation. We implement FAQPage + Service + BreadcrumbList + Product JSON-LD schema so Google, ChatGPT, Perplexity, and Google AI Overviews can surface your store; keyword-optimized page titles and H1s targeting Chattanooga-specific queries like 'buy outdoor gear chattanooga' and 'chattanooga craft beer online'; Core Web Vitals optimization (Lighthouse 90+); and blog content targeting the FAQ-style queries your customers type into AI assistants. Most Chattanooga clients see measurable organic growth within 60–90 days of launch.",
            },
            {
              category: 'local',
              question: 'Can you build a Shopify store for a CO.LAB startup or Gig City tech company?',
              answer:
                "Yes — CO.LAB startups and GIGTANK alumni are one of our sweet spots in Chattanooga. Early-stage companies need e-commerce infrastructure that launches fast, scales as you grow, and fits a startup budget. FactoryJet's fixed-price Shopify build gives CO.LAB founders enterprise-quality stores at pre-seed pricing. We've built stores for founders at every stage — from pre-launch DTC landing pages to full B2B portals for post-seed companies scaling revenue.",
            },
            {
              category: 'included',
              question: 'What payment methods should my Chattanooga Shopify store accept?',
              answer:
                "Every Chattanooga Shopify store should accept Shopify Payments for the lowest transaction fees, PayPal since 30%+ of US online shoppers prefer it for first purchases, Apple Pay and Google Pay to reduce mobile checkout friction (critical for Chattanooga's high-traffic tourist base), and Afterpay or Affirm for orders above $100. For B2B manufacturers, add net-30 and net-60 invoicing via Shopify's B2B tools. FactoryJet configures all payment methods during your standard 7-day build — no extra charge.",
            },
            {
              category: 'pricing',
              question: 'How does Tennessee having one of the highest combined sales tax rates in the US affect my Shopify store?',
              answer:
                "Tennessee's combined sales tax of 9.25%–9.75% is among the highest in the country, but Chattanooga shoppers are accustomed to it — it won't hurt your conversion rate if you configure Shopify correctly. You must collect the state rate of 7.0% plus Hamilton County's local rate of 2.25%–2.75% depending on your municipality. Tennessee also has reduced rates for groceries (4%) and prepared food (7%), requiring separate configuration for food and beverage brands. FactoryJet handles all Tennessee tax settings, including destination-based collection for out-of-state orders and economic nexus compliance, during every build.",
            },
            {
              category: 'included',
              question: 'Can you build a Shopify store for a Chattanooga apparel or clothing brand?',
              answer:
                "Absolutely — apparel is a strong vertical for Chattanooga's independent clothing scene and outdoor apparel brands. We build Shopify stores with size variant configurations, fit guides, return and exchange flows, and print-on-demand integrations with Printful or Printify. Chattanooga's outdoor culture and creative arts community generate consistent demand for locally-designed and adventure-inspired apparel — and a well-built Shopify store converts both local buyers and 10.7M annual visitors who want to take a piece of Chattanooga home with them.",
            },
            {
              category: 'local',
              question: 'Does FactoryJet offer ongoing Shopify support for Chattanooga businesses?',
              answer:
                "Yes — every FactoryJet project includes 30 days of free post-launch support covering bug fixes, minor adjustments, and launch questions. Beyond that, Chattanooga businesses can choose monthly retainer plans that include up to 4 hours of development time and priority support response. We also offer seasonal campaign builds — pre-summer outdoor gear drops, fall tourism season promotions, and holiday gift set launches that are especially important for Chattanooga's tourism-driven economy. Many Chattanooga clients have been on maintenance plans for two-plus years.",
            },
            {
              category: 'included',
              question: 'Can you build a subscription Shopify store for a Chattanooga brand?',
              answer:
                "Yes — subscription commerce works especially well for Chattanooga's craft beverage, outdoor gear, and wellness brands. We build subscription Shopify stores using Recharge, Skio, or native Shopify subscriptions: monthly craft beer or spirits clubs, outdoor gear subscription boxes, guided experience memberships, and supplement auto-ship programs. Subscription stores typically generate 30–50% higher customer lifetime value than one-time-purchase stores — and Chattanooga's loyal local consumer base and returning tourist visitors are an ideal audience for subscription models.",
            },
            {
              category: 'local',
              question: 'What Shopify developers are available in Chattanooga, TN?',
              answer:
                "Chattanooga's dedicated Shopify developer options are limited — most local agencies like Riverworks Marketing, JLB Works, and Slamdot build primarily on WordPress. National agencies like Growisto appear in 'shopify chattanooga' search results but operate with 7–16 week timelines and zero Gig City market knowledge. FactoryJet is the Shopify-specialist option: custom Shopify development, 7-day delivery, Tennessee sales tax configuration (9.25% Hamilton County), and a team that understands the outdoor, tourism, craft beverage, and manufacturing sectors that define Chattanooga's economy. Book a free audit to see a sample store architecture built for your industry.",
            },
            {
              category: 'technical',
              question: 'How does a Shopify store help a Chattanooga business compete online?',
              answer:
                "A well-built Shopify store gives a Chattanooga business three competitive advantages: it captures intent from the 10.7M annual visitors who research purchases before arriving in the city; it ranks for local queries like 'buy outdoor gear chattanooga' and 'craft beer chattanooga online'; and it automates B2B ordering for Tennessee Valley manufacturers. FactoryJet builds every Chattanooga Shopify store with AEO content structured for ChatGPT and Perplexity citations, JSON-LD schema for Google AI Overviews, and Core Web Vitals scores above 90 — the technical foundation that converts search traffic into revenue.",
            },
            {
              category: 'local',
              question: 'Who is the best ecommerce development company in Chattanooga?',
              answer:
                'For SMBs and DTC brands, FactoryJet makes a strong case: fixed-price builds, senior engineers on every project, and full code ownership from day one. Any ecommerce website development company in Chattanooga you compare — or any ecommerce solution company in Chattanooga — should pass three checks: who writes the code, is pricing fixed up front, and do you own the store at the end. That is how to find the best ecommerce website development company in Chattanooga and the best ecommerce solution company in Chattanooga for your catalog.',
            },
            {
              category: 'pricing',
              question: 'Should I hire ecommerce developer in Chattanooga or work with an agency?',
              answer:
                'A solo developer can assemble a basic store, but a production store needs design, payments, tax configuration, shipping, and SEO working together. A senior-led team delivers all of it at a fixed price. If you do hire ecommerce developer in Chattanooga directly, ask for store speed scores from past builds before committing.',
            },
];
export default function Page() {
  return (
    <>
      <SchemaScript />
      <SiteHeader />
      <main className="bg-fj-cream">

        {/* ── 1. HERO ─────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="us" source="us_chattanooga_ecommerce_development_hero" />}
          eyebrow="E-COMMERCE DEVELOPMENT · CHATTANOOGA"
          headline="Shopify Developer Chattanooga for Tennessee Businesses"
          lead="Gig City runs on 10 Gbps fiber and forward-thinking ambition. FactoryJet builds the Shopify stores to match — live in 7 days, at a fixed, transparent quote. Shopify, WooCommerce & AI-powered stores for Chattanooga's outdoor brands, manufacturers, craft beverage companies, and CO.LAB-era innovators. 500+ projects, 4.9★."
          trustItems={['Fixed-price Shopify stores', '7-day delivery guarantee', '500+ stores launched']}
          rightSlot={<HeroBrowserMockup mockupUrl="yourbusiness.com" badgeCity="Chattanooga, TN" badgeLabel="Live in 7 days" />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ e-commerce brands across the US, UK, and UAE" />

        {/* ── 3. TRUST STATS ───────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="Results that Chattanooga e-commerce brands trust."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="CHATTANOOGA MARKET"
          headline="America's Most Connected City Deserves a Store That Converts"
          leadParagraphs={[
            "Chattanooga became 'Gig City' in 2010 — the first city in the Western Hemisphere with a community-wide 1 Gbps fiber network. Today EPB offers 25 Gbps residential and business service, generating $2.69 billion in documented economic benefits over its first decade. Your Shopify store should match that same forward-thinking standard. FactoryJet builds on Next.js 15 with Cloudflare CDN — stores that load in under 1.5 seconds for every customer, whether they're on EPB fiber in Chattanooga or a mobile connection in Nashville.",
            "Tourism is the engine: $1.8 billion in annual visitor spending from 10.7 million visitors who support 13,000 jobs across Greater Chattanooga. Outdoor adventure, craft beverages, the Tennessee Aquarium, Rock City, and Ruby Falls draw visitors who spend online before they arrive — yet most Chattanooga businesses can't capture that digital intent because their websites aren't built to sell. CO.LAB, the 3rd-largest business incubator in the United States, anchors a growing startup ecosystem alongside GIGTANK and the EPB/IonQ quantum innovation center.",
            "Fourteen Chattanooga-area companies made the 2025 Inc. 5000 with a 323% median three-year revenue growth rate. The city's established web agencies — Riverworks Marketing, JLB Works, Slamdot — are WordPress shops with no Shopify specialization or AI development capability. National agencies like Growisto rank for 'shopify developer chattanooga' but operate with 7–16 week timelines and zero Gig City market knowledge. FactoryJet operates in exactly that gap: real Tennessee market expertise, 7-day delivery, transparent fixed pricing.",
          ]}
          stats={[
            { value: '25 Gbps', label: "EPB Fiber Speed — World's Fastest Municipal Network", sourceUrl: 'https://epb.com/business/internet/' },
            { value: '$1.8B', label: 'Annual Visitor Spending — 10.7M Visitors to Chattanooga', sourceUrl: 'https://www.chattanoogachamber.com/economic-development/' },
            { value: '14', label: 'Inc. 5000 Companies in the Chattanooga Area (2025)', sourceUrl: 'https://www.inc.com/inc5000' },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="E-COMMERCE DEVELOPMENT · Chattanooga"
          headline="What 'Shopify Development' Actually Means for a Chattanooga Business"
          lead="Most Chattanooga web agencies build on WordPress and focus on digital marketing, not Shopify e-commerce. FactoryJet builds revenue-generating stores: custom design, Tennessee sales tax configured correctly (9.25%–9.75% for Hamilton County), AI-powered product discovery, JSON-LD schema for AI search visibility, and a Lighthouse 95+ performance score — all in 7 days, fixed-price."
          body={
            <>
              <p>
                For Chattanooga&apos;s outdoor and adventure brands — rock climbing at Sunset Rock,
                kayaking the Tennessee River, hang gliding at Lookout Mountain, cycling the Stinson
                Trail — an e-commerce store needs to convert both local repeat customers and the
                10.7 million annual visitors who discover you through Google and ChatGPT searches.
                We build Shopify stores with adventure-specific product configurations, gear rental
                calendars, guided experience bookings, waiver integrations, and seasonal inventory
                flows built natively into the architecture from day one.
              </p>
              <p>
                For Chattanooga&apos;s manufacturing and industrial sector — the Tennessee Valley&apos;s
                legacy of precision manufacturing, automotive parts, and equipment distribution —
                a B2B wholesale portal needs tiered dealer pricing, bulk order workflows, net-30
                payment terms, and purchase order integration. FactoryJet builds Shopify B2B
                portals that handle hundreds of dealer orders per month without additional sales
                staff, giving Tennessee Valley manufacturers a digital channel that works as hard
                as the production floor.
              </p>
              <p>
                Every FactoryJet e-commerce project covers discovery, platform selection, custom
                Shopify development, product catalog setup, Tennessee sales tax configuration
                (including the state&apos;s reduced 4% grocery rate and 7% prepared food rate),
                Core Web Vitals optimization, and AEO content built to get cited by ChatGPT
                and Perplexity. You leave with a store you own outright — no platform lock-in,
                no retainer required, and a 30-day support window after launch.
              </p>
            </>
          }
          rightSlot={
            <img
              src="/images/us/chattanooga/ecommerce/service-explanation.webp"
              alt=""
              aria-hidden="true"
              width={1200}
              height={800}
              className="w-full rounded-2xl object-cover"
              loading="lazy"
            />
          }
        />

        {/* ── 6. STRATEGIC DARK ────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Chattanooga Businesses Choose FactoryJet Over Local Agencies"
          lead={
            "Riverworks Marketing and Papercut Interactive have served Chattanooga since the early 2000s — but neither offers Shopify specialization or AI-powered e-commerce at SMB pricing. JLB Works has 800+ clients and builds primarily on WordPress with no dedicated Shopify practice. Slamdot has built on WordPress. The national agencies ranking for 'shopify developer chattanooga' — Growisto, WebCitz — quote 7–16 week timelines, publish no pricing, and have zero Gig City market knowledge.\n\nFactoryJet launches full Shopify stores in 7 days — at a fixed, transparent quote. We know Hamilton County's 9.25% combined sales tax structure, the Tennessee River outdoor economy, CO.LAB's startup pipeline, and the GIGTANK ecosystem that defines Chattanooga commerce."
          }
          pillars={[
            {
              title: 'AI-Native',
              body: "Every store ships with AI-powered product recommendations, AEO content optimized for ChatGPT and Perplexity, and JSON-LD schema that gets cited in Google AI Overviews. Chattanooga already runs AI-powered smart traffic systems citywide — your Shopify store should be on the same technology level.",
            },
            {
              title: 'Transparent',
              body: "Fixed pricing on the first call. No discovery fees, no 'it depends' quotes, no phase-2 invoices. Unlike Growisto and WebCitz who publish zero pricing, you know your exact number before we start.",
            },
            {
              title: 'Guaranteed',
              body: "7-day delivery on standard Shopify builds. If we miss the deadline, you don't pay. We've delivered on time on 97% of 500+ projects — including for Chattanooga brands preparing for outdoor tourism peaks and seasonal product launches.",
            },
          ]}
        />

        {/* ── 7. PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Build Your Chattanooga Shopify Store in 7 Days"
          stages={[
            {
              number: '01',
              title: 'Discovery & Platform Selection',
              description:
                'We map your product catalog, target customer, and revenue goals. We recommend Shopify, WooCommerce, or headless based on your SKU count, subscription needs, and B2B requirements. Chattanooga businesses get a tailored platform recommendation within 24 hours of the discovery call.',
            },
            {
              number: '02',
              title: 'UX Design & Store Architecture',
              description:
                "We design your full store structure — homepage, collection pages, product pages, cart, and checkout — with conversion optimization built into every layout decision. Mobile-first and thumb-zone aware, tested against Chattanooga's outdoor-savvy, tourist-heavy consumer standard.",
            },
            {
              number: '03',
              title: 'Development & Configuration',
              description:
                'Custom Shopify theme development, Tennessee sales tax setup (9.25%–9.75% Hamilton County), payment gateway integration (Shopify Payments, PayPal, Afterpay, Affirm), app integrations, and GSAP micro-animations. Lighthouse 90+ performance is enforced from the first commit — no exceptions.',
            },
            {
              number: '04',
              title: 'Products, Content & SEO',
              description:
                'Product catalog upload, optimized descriptions, alt tags, meta fields, JSON-LD schema (FAQPage, Product, BreadcrumbList), and AEO content structured to get cited by ChatGPT, Perplexity, and Google AI Overviews. We target Chattanooga-specific keyword patterns and submit to Google Search Console.',
            },
            {
              number: '05',
              title: 'Launch & Growth Enablement',
              description:
                'Cloudflare Pages deploy, GA4 e-commerce tracking, GTM event setup, and a recorded launch walkthrough. Your 30-day support window covers post-launch fixes, additional product uploads, and team training so your Chattanooga team can self-manage the store from day one.',
            },
          ]}
        />

        {/* ── 8. PORTFOLIO ─────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="What Chattanooga e-commerce brands look like after FactoryJet."
          cards={[
            {
              industry: 'Outdoor & Adventure Brands',
              title: 'Chattanooga Outdoor & Adventure Client',
              description:
                "Chattanooga's outdoor economy spans rock climbing, kayaking, hang gliding, and mountain biking — with 10.7M annual visitors who spend on gear and guided experiences. We build Shopify stores with rental calendars, booking integrations, adventure-specific product configurations, seasonal drops, and gear subscription boxes. Every store loads under 1.5 seconds on mobile — because outdoor shoppers research and buy from the trail.",
              imageSrc: '/images/us/chattanooga/ecommerce/portfolio-1.webp',
              stat1: '+43% conversion rate',
              stat2: '7-day launch',
            },
            {
              industry: 'Craft Beverage & Food',
              title: 'Chattanooga Craft Beverage & Food Client',
              description:
                "Chattanooga's growing craft brewery, distillery, and specialty food scene sells to locals, tourists, and nationwide DTC audiences simultaneously. We build Shopify stores with age verification, TABC-aware shipping configurations, subscription beer and spirits clubs, gift box builders, and gifting flows for the 10.7M annual visitors who want to take a taste of Chattanooga home with them.",
              imageSrc: '/images/us/chattanooga/ecommerce/portfolio-2.webp',
              stat1: '+49% AOV increase',
              stat2: 'Lighthouse 95',
            },
            {
              industry: 'Manufacturing & Industrial',
              title: 'Chattanooga Manufacturing & Industrial Client',
              description:
                "The Tennessee Valley's manufacturing base needs B2B ordering infrastructure that reduces sales overhead. We build Shopify B2B portals with dealer pricing tiers, bulk ordering, net-30/net-60 payment terms, purchase order workflows, and equipment configurators. Chattanooga manufacturers use our portals to process 300+ dealer orders monthly without adding sales headcount.",
              imageSrc: '/images/us/chattanooga/ecommerce/portfolio-3.webp',
              stat1: '+35% repeat orders',
              stat2: '< 1.3s load time',
            },
          ]}
          ctaHref="/portfolio"
          ctaLabel="View full portfolio"
        />

        {/* ── 9. COMPARISON TABLE ──────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="WHY FACTORYJET"
          headline="FactoryJet vs Chattanooga E-Commerce Agencies"
          lead={
            "Chattanooga's established agencies — Riverworks Marketing and JLB Works — have strong local reputations built on WordPress and digital marketing, not Shopify specialization. National agencies like Growisto rank for Chattanooga queries but operate with 7–16 week timelines and zero local market knowledge.\n\nFactoryJet delivers a full Shopify store in 7 days — with AI-powered features no Chattanooga agency offers at SMB pricing. No lock-in. No retainer. No surprise invoices."
          }
          columns={[
            { label: 'Their pricing' },
            { label: 'FactoryJet', isFactoryJet: true },
            { label: 'Why we cost less' },
          ]}
          rows={[
            {
              feature: 'Riverworks Marketing',
              values: [
                'Enterprise-level rates (full-service digital agency, WordPress-focused, no published Shopify-specific pricing)',
                'Fixed-price (Shopify Standard)',
                'Riverworks is a full-service marketing agency — strong in SEO and paid media, not Shopify e-commerce. FactoryJet specializes exclusively in Shopify with AI-powered features, 7-day delivery, and fixed pricing Riverworks cannot match.',
              ],
            },
            {
              feature: 'JLB Works',
              values: [
                'Premium agency rates (800+ clients, WordPress-focused general web design, 6–12 week timelines)',
                'Fixed-price · 7-day delivery',
                "JLB Works is Chattanooga's largest general web design firm — no dedicated Shopify or AI development practice. FactoryJet builds exclusively on Shopify and Next.js with AI capabilities, fixed pricing, and guaranteed 7-day delivery.",
              ],
            },
          ]}
        />

        {/* ── 10. PRICING ──────────────────────────────────────────────── */}
        <PricingTiers
          eyebrow="TRANSPARENT PRICING"
          headline="Transparent Pricing for Chattanooga E-Commerce Businesses"
          lead={
            "Chattanooga agency rates for a comparable Shopify build typically run enterprise-level — and national agencies like WebCitz and Growisto quote even higher with multi-month timelines. FactoryJet delivers a full custom Shopify store — at a fixed, transparent quote — with a faster timeline and a codebase you own outright. Stores ship in 7 days. No retainer required. Pricing is scoped to your build, and every project is quoted up front after a free discovery call so you know the full cost before work starts."
          }
          tiers={[
            {
              priceRange: 'Fixed-price',
              name: 'Shopify Standard',
              description:
                'A fully custom Shopify store live in 7 days. Best for Chattanooga outdoor brands, craft beverage companies, restaurants, and lifestyle businesses launching their first store or replacing a slow template.',
              features: [
                'Custom Shopify theme (not a template)',
                'Up to 100 products uploaded & configured',
                'Tennessee sales tax setup (9.25% Hamilton County)',
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
                'Advanced Shopify build with subscriptions, B2B wholesale, or multi-location inventory. Best for Chattanooga manufacturers, craft beverage subscription brands, and established outdoor gear companies scaling online revenue.',
              features: [
                'Everything in Shopify Standard',
                'Subscription billing (Recharge / Skio)',
                'B2B dealer pricing & wholesale portal',
                'Multi-location inventory management',
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
                'Next.js headless storefront with Shopify or Medusa backend. For Chattanooga brands that need sub-500ms load times, custom API integrations, or a B2B portal that outperforms every competitor in the Tennessee Valley.',
              features: [
                'Next.js headless frontend (Lighthouse 95+)',
                'Shopify or Medusa e-commerce backend',
                'Custom API & ERP integrations',
                'B2B portal: PO payments, dealer tiers',
                'AI chatbot trained on your catalog',
                'AEO content for ChatGPT & Perplexity',
                'Quarterly performance reviews',
              ],
              cta: { label: 'Get a quote', modal: true, region: 'us' },
            },
          ] as const}
        />

        {/* ── 11. INDUSTRIES ───────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="CHATTANOOGA × E-COMMERCE"
          headline="E-Commerce Development for Chattanooga's Key Industries"
          lead="From Tennessee River outdoor brands to Gig City tech startups, Chattanooga's economy spans industries with very different e-commerce needs. FactoryJet has built Shopify stores for each of them."
          sectors={[
            {
              name: 'Outdoor & Adventure Brands',
              description:
                "Shopify stores for rock climbing gear, kayaking equipment, hang gliding experiences, cycling apparel, and guided adventure bookings. Chattanooga's position as a top US outdoor destination means your store must convert both local customers and 10.7M annual visitors who discover you through search before they arrive.",
              example:
                'Rock climbing gear retailers, kayak rental companies, adventure tour operators, and outdoor apparel brands serving the Chattanooga outdoor economy.',
            },
            {
              name: 'Manufacturing & Industrial',
              description:
                "B2B ordering portals for Tennessee Valley manufacturers — automotive parts, precision equipment, and industrial supplies. Dealer portals with bulk pricing, net-30 terms, purchase order workflows, and equipment configurators that process hundreds of B2B orders monthly without adding sales headcount.",
              example:
                'Automotive parts distributors, precision manufacturing suppliers, and equipment dealers serving the tri-state TN/GA/AL industrial market.',
            },
            {
              name: 'Craft Breweries & Distilleries',
              description:
                "DTC stores, merchandise shops, and subscription beer and spirits clubs for Chattanooga's craft beverage scene. Age verification, Tennessee TABC-compliant shipping zones, gift box builders, and nationwide cold-chain shipping configurations built natively into every build.",
              example:
                "Craft breweries, distilleries, and specialty beverage brands selling DTC to Chattanooga's 10.7M annual visitors and nationwide audiences.",
            },
            {
              name: 'Restaurants & Hospitality',
              description:
                "Online ordering, digital gift cards, merchandise stores, and catering inquiry forms that capture revenue from Chattanooga's $1.8B tourism economy. Integration with Toast, Square, and other POS systems your team already uses.",
              example:
                'Chattanooga Southside, North Shore, and downtown restaurants capturing digital revenue from tourists and locals through Shopify-powered online ordering.',
            },
            {
              name: 'Automotive Parts & Accessories',
              description:
                "E-commerce for the tri-state TN/GA/AL auto parts and accessories market — vehicle fitment lookup, bulk dealer ordering, parts configurators, and distributor portals. Chattanooga's manufacturing heritage creates strong demand for precision parts e-commerce.",
              example:
                'Auto parts retailers, specialty accessories brands, and aftermarket equipment distributors serving the greater Chattanooga tri-state market.',
            },
            {
              name: 'Arts, Apparel & Creative Products',
              description:
                "Shopify stores for Chattanooga's vibrant artist, maker, and apparel community. Custom print-on-demand integrations, limited-edition drops, gallery product stores, and artist membership subscriptions for the growing creative economy in Southside and North Shore.",
              example:
                "Independent artists, clothing brands, craft makers, and creative studios in Chattanooga's Southside and North Shore arts districts.",
            },
          ]}
        />

        {/* ── 12. TESTIMONIALS ─────────────────────────────────────────── */}
        <TestimonialsSection
          region="us"
          eyebrow="WHAT CLIENTS SAY"
          headline="Rated 4.9/5 by clients from Chattanooga and beyond."
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="COMMON QUESTIONS"
          headline="Common Questions from Chattanooga E-Commerce Businesses"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA ─────────────────────────────────────────────── */}
        <EcommerceCityLinksUS currentCity="chattanooga" />
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Build Your Chattanooga Shopify Store?"
          sub="Gig City's e-commerce market is growing faster than most businesses can capture. Every week without a high-performing Shopify store is a week your competitors are owning the searches — and the sales — you should have. Pick a tier, book a 30-minute audit, and we'll have your store blueprint ready within 72 hours."
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
      dangerouslySetInnerHTML={{ __html: getEcommerceCitySchema('chattanooga', FAQ_ITEMS) }}
    />
  );
}
