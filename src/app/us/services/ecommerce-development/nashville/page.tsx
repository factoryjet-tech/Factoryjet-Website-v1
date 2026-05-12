// V2 ecommerce city page — Nashville, TN
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
import HeroBrowserMockup from '@/components/v2/HeroBrowserMockup'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'

export const metadata: Metadata = {
  title: 'Shopify Developer Nashville TN | E-Commerce from $2,999 | FactoryJet',
  description: 'Top-rated Shopify developer in Nashville, Tennessee: stores live in 7 days from $2,999. Music City e-commerce specialists — Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Developer Nashville TN | E-Commerce from $2,999 | FactoryJet',
    description: 'Top-rated Shopify developer in Nashville, Tennessee: stores live in 7 days from $2,999. Music City e-commerce specialists — Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
    url: 'https://factoryjet.com/us/services/ecommerce-development/nashville',
    images: [{ url: 'https://factoryjet.com/logo.png', width: 1200, height: 630, alt: 'FactoryJet - Shopify Developer Nashville' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Developer Nashville TN | E-Commerce from $2,999 | FactoryJet',
    description: 'Top-rated Shopify developer in Nashville, Tennessee: stores live in 7 days from $2,999. Music City e-commerce specialists — Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ecommerce-development/nashville',
    languages: ecommerceCityAlternatesUS['nashville'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
}

export default function Page() {
  return (
    <>
      <SchemaScript />
      <SiteHeader />
      <main className="bg-fj-cream">

        {/* ── 1. HERO ────────────────────────────────────────────────── */}
        <Hero
          eyebrow="E-COMMERCE DEVELOPMENT · NASHVILLE"
          headline="Shopify Developer Nashville for Music City Businesses"
          lead="The only Nashville e-commerce agency that launches in 7 days at 50–60% below local rates. Shopify, WooCommerce & AI-powered stores for Music City's artists, healthcare brands, restaurants, tourism businesses, and Tennessee entrepreneurs. 500+ projects, 4.9★ rating."
          primaryCta={{ label: 'Get a Free Shopify Audit', modal: true, region: 'us' }}
          trustItems={['Shopify stores from $2,999', '7-day delivery guarantee', '500+ stores launched']}
          rightSlot={<HeroBrowserMockup />}
        />

        {/* ── 2. LOGO BAR ─────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ e-commerce brands across the US, UK, and UAE" />

        {/* ── 3. TRUST STATS ──────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="Results that Nashville e-commerce brands trust."
        />

        {/* ── 4. CITY CONTEXT ─────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="NASHVILLE MARKET"
          headline="16 Million Visitors Per Year. Is Your Nashville Store Ready to Sell?"
          leadParagraphs={[
            "Nashville draws 16 million visitors annually generating $9.1 billion in economic impact — making it the #1 tourism destination in the Southeast US. That visitor economy drives retail demand for music merchandise, local food brands, whiskey and spirits, Nashville-made apparel, and souvenirs. Yet most Nashville businesses capture only a fraction of this spending because their e-commerce stores are either non-existent or built on templates that don't convert. FactoryJet builds Shopify stores that turn Nashville's tourism foot traffic into recurring digital revenue — with smart email capture, local pickup options, and tourist-targeted gifting flows.",
            "Nashville is America's healthcare capital. HCA Healthcare, Vanderbilt University Medical Center, Ascension Saint Thomas, and 500+ healthcare companies generate $76 billion in annual revenue and employ 280,000 people. Tennessee has no state income tax (the Hall Tax was fully repealed in 2021) — Nashville entrepreneurs keep more of their income than founders in 41 other states. Our $2,999 starting price combined with Tennessee's zero income tax makes Nashville one of the most profitable cities in the US to run a DTC brand.",
          ]}
          stats={[
            { value: '16M+', label: 'Nashville Annual Visitors — #1 Southeast Tourism Destination', sourceUrl: 'https://www.visitmusiccity.com/about-us/press-room' },
            { value: '0%', label: 'Tennessee State Income Tax (Hall Tax repealed 2021)', sourceUrl: 'https://www.tn.gov/revenue/taxes/hall-income-tax.html' },
            { value: '$76B', label: "Nashville Healthcare Industry Annual Revenue", sourceUrl: 'https://www.nashvillehealth.org/' },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ──────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="E-COMMERCE DEVELOPMENT · Nashville"
          headline="What 'E-Commerce Development' Actually Means for a Nashville Business"
          lead="Most Nashville agencies focus on healthcare web design and marketing, not Shopify e-commerce. FactoryJet builds revenue-generating stores: custom design, Tennessee sales tax configured correctly (9.25% Davidson County, with food product reduced rates), AI-powered product discovery, and a Lighthouse 95+ performance score — all in 7 days from $2,999."
          body={
            <>
              <p>
                For Nashville&apos;s music and entertainment brands — artists, labels, merch
                companies, and event brands — the Shopify store is the primary monetization
                channel outside of streaming and live performance. FactoryJet builds artist
                merchandise stores, digital download shops, fan club subscriptions, and album
                pre-order flows with Bandcamp and DistroKid integrations. We launch ahead of
                album releases, tour announcements, and GRAMMY moments in 7 days.
              </p>
              <p>
                For Nashville&apos;s healthcare brands — the $76B corridor of HCA, Vanderbilt,
                and 500+ companies — e-commerce needs include medical supply ordering portals,
                healthcare apparel (scrubs, compression socks), patient wellness products, and
                B2B purchasing platforms with institutional PO payment terms. FactoryJet builds
                the enterprise-grade stores that Nashville&apos;s healthcare buyers expect.
              </p>
              <p>
                Nashville&apos;s 9.25% combined sales tax (Tennessee state 7.0% + Davidson County
                2.25%) has important nuance: Tennessee&apos;s reduced 4% state rate on food and
                groceries applies to grocery items. FactoryJet configures the correct product-level
                tax categories for food, apparel, and general merchandise in every Tennessee build.
              </p>
            </>
          }
          rightSlot={
            <img
              src="/images/us/nashville/ecommerce/service-explanation.webp"
              alt=""
              aria-hidden="true"
              className="w-full rounded-2xl object-cover"
            />
          }
        />

        {/* ── 6. STRATEGIC DARK SECTION ───────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Nashville Businesses Choose FactoryJet Over Local Agencies"
          lead={
            "Infomedia and Thompson-Miller are established Nashville web agencies focused on healthcare and financial services web design, not Shopify e-commerce. Ramsey Solutions dominates Nashville's marketing world but doesn't build e-commerce stores. National agencies targeting Nashville — Thrive Internet Marketing (Fort Worth), Lounge Lizard (New York) — charge $8,000–$40,000 with 8–16 week timelines and no Tennessee-specific market knowledge.\n\nFactoryJet delivers in 7 days from $2,999 with deep Nashville expertise: Tennessee's zero income tax advantage, the 9.25% sales tax structure with food product nuance, Music City's tourism economy, and the healthcare B2B opportunity that national agencies overlook entirely."
          }
          pillars={[
            {
              title: 'Music-commerce native',
              body: "Every artist merchandise store ships with fan club subscriptions, digital download flows, album pre-order mechanics, and Bandcamp/DistroKid integrations. Nashville's music economy generates undermonetized digital revenue — FactoryJet captures it for artists and labels as standard.",
            },
            {
              title: 'Transparent',
              body: 'Fixed pricing on the first call. Shopify from $2,999, WooCommerce from $3,499, headless from $5,999. No discovery fees, no healthcare-complexity surcharges, no Phase 2 invoices after launch.',
            },
            {
              title: 'Guaranteed',
              body: "7-day delivery on standard Shopify builds. If we miss the deadline, you don't pay. We've delivered on time on 97% of 500+ projects — including for Nashville brands launching ahead of CMA Fest and album release dates.",
            },
          ]}
        />

        {/* ── 7. PROCESS ──────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Build Your Nashville Shopify Store"
          stages={[
            {
              number: '01',
              title: 'Discovery & Platform Selection',
              description:
                "We map your product catalog, target customer, and revenue goals. For Nashville businesses, we assess music merchandise requirements, healthcare B2B needs, and tourism gifting flows. Shopify, WooCommerce, or headless — recommended based on your actual needs in 24 hours.",
            },
            {
              number: '02',
              title: 'UX Design & Store Architecture',
              description:
                "We design your store — homepage, collection pages, product pages, cart, and checkout — with Music City's diverse consumer base in mind. Bold typography for artist brands, clinical precision for healthcare, tourist-friendly gifting for Nashville's visitor economy.",
            },
            {
              number: '03',
              title: 'Development & Configuration',
              description:
                "Custom Shopify theme or headless build, Tennessee sales tax setup (9.25% Davidson County + food product reduced rates), Shopify Payments + Afterpay, Bandcamp/DistroKid integrations for music brands, and GSAP micro-animations. Lighthouse 90+ on every build.",
            },
            {
              number: '04',
              title: 'Products, Content & SEO',
              description:
                'Product catalog upload, optimized descriptions, JSON-LD schema (FAQPage, Product, BreadcrumbList), and AEO content structured to get cited by ChatGPT, Perplexity, and Google AI Overviews for Nashville-specific product queries.',
            },
            {
              number: '05',
              title: 'Launch & Growth Enablement',
              description:
                "Cloudflare/Vercel deploy, GA4 e-commerce tracking, and a recorded launch walkthrough. Your 30-day support window covers post-launch fixes, tourist-season inventory updates, and training so your Nashville team can self-manage from day one.",
            },
          ]}
        />

        {/* ── 8. PORTFOLIO ────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="What Nashville e-commerce brands look like after FactoryJet."
          cards={[
            {
              industry: 'Music & Entertainment',
              title: 'Nashville Artist Merchandise Client',
              description:
                "Nashville's music economy generates $1.8B annually. Artists and labels with merchandise, vinyl, and fan club subscriptions need Shopify stores that can handle drops, pre-orders, and subscription billing. FactoryJet builds merch stores with Bandcamp integration, limited-edition mechanics, and fan membership flows — ready in 7 days for tour announcements and album releases.",
              imageSrc: '/images/us/nashville/ecommerce/portfolio-1.webp',
              stat1: '+58% fan revenue',
              stat2: '7-day launch',
            },
            {
              industry: 'Food, Spirits & Hot Chicken',
              title: 'Nashville Food Brand DTC Client',
              description:
                "Nashville's culinary scene — hot chicken, BBQ, Tennessee whiskey, craft coffee — drives major DTC opportunity. 16M annual visitors discover Nashville food brands digitally. We build stores with heat-level variant configuration, regional shipping restrictions for perishables, gift set bundling, and tourist-friendly gifting flows that convert visitor discovery into recurring customer relationships.",
              imageSrc: '/images/us/nashville/ecommerce/portfolio-2.webp',
              stat1: '+46% AOV increase',
              stat2: 'Lighthouse 93',
            },
            {
              industry: 'Healthcare & Wellness',
              title: 'Nashville Healthcare Brand Client',
              description:
                "Nashville's $76B healthcare ecosystem creates B2B e-commerce demand unlike any other US city. We build Shopify stores for medical supply retailers, healthcare apparel brands (scrubs, compression socks), patient wellness product companies, and B2B purchasing platforms with institutional PO payment terms and hospital system billing integrations.",
              imageSrc: '/images/us/nashville/ecommerce/portfolio-3.webp',
              stat1: '+39% B2B order volume',
              stat2: 'Lighthouse 95',
            },
          ]}
          ctaHref="/us/portfolio"
          ctaLabel="View full portfolio"
        />

        {/* ── 9. COMPARISON TABLE ─────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="WHY FACTORYJET"
          headline="FactoryJet vs Nashville E-Commerce Agencies"
          lead={
            "Nashville's agency market is dominated by healthcare and marketing specialists — not Shopify e-commerce experts. Infomedia and Thompson-Miller do excellent healthcare web work but not DTC stores. National agencies targeting Nashville charge $8,000–$40,000 with no Music City market knowledge.\n\nFactoryJet delivers a full Shopify store in 7 days from $2,999 — with music commerce, healthcare B2B, and tourism gifting expertise that Nashville agencies simply don't offer."
          }
          columns={[
            { label: 'Their pricing' },
            { label: 'FactoryJet', isFactoryJet: true },
            { label: 'Why we cost less' },
          ]}
          rows={[
            {
              feature: 'Infomedia',
              values: [
                '$8,000–$20,000 (healthcare web design, not Shopify specialists)',
                'From $2,999 (Shopify Standard)',
                "Infomedia focuses on healthcare websites and digital marketing, not DTC Shopify stores. FactoryJet builds music commerce, food brands, and healthcare B2B stores with AI features and 7-day delivery that Infomedia doesn't offer.",
              ],
            },
            {
              feature: 'Thrive Internet Marketing',
              values: [
                '$150–$300/hr, no fixed pricing, 4–8 weeks (Fort Worth-based)',
                'From $2,999 fixed price, 7-day delivery',
                "Thrive is a Fort Worth digital marketing agency with web development as a side service and no Nashville market knowledge. FactoryJet delivers in 7 days from $2,999 with deep Music City expertise — Tennessee tax nuance, tourism economy, healthcare B2B.",
              ],
            },
          ]}
        />

        {/* ── 10. PRICING ─────────────────────────────────────────────── */}
        <PricingTiers
          eyebrow="TRANSPARENT PRICING"
          headline="Transparent Pricing for Nashville E-Commerce Businesses"
          lead={
            "Nashville agency rates for a comparable Shopify build typically run $8,000–$25,000. National agencies like Lounge Lizard and WebFX quote $10,000–$40,000. FactoryJet delivers a full custom Shopify store from $2,999 — that's 50–60% below the Nashville benchmark — with a faster timeline and a codebase you own outright. Stores ship in 7 days. No retainer required."
          }
          tiers={[
            {
              name: 'Shopify Standard',
              priceRange: '$2,999–$4,999',
              description:
                "A fully custom Shopify store live in 7 days. Best for Nashville artists, food brands, and tourism businesses launching their first online store.",
              features: [
                'Custom Shopify theme (not a template)',
                'Up to 100 products uploaded & configured',
                'Tennessee sales tax setup (9.25% Davidson County + food rates)',
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
                "Advanced Shopify build with subscriptions, fan club mechanics, or B2B healthcare pricing. Best for Nashville artists scaling merch, food brands with subscription boxes, and healthcare companies needing institutional billing.",
              features: [
                'Everything in Shopify Standard',
                'Fan club / subscription billing (Recharge)',
                'Bandcamp + DistroKid integration',
                'B2B pricing tiers & PO payment terms',
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
                "Next.js headless storefront for Nashville healthcare companies and enterprise brands that need sub-500ms load times, custom API integrations, or a B2B portal that outperforms every competitor.",
              features: [
                'Next.js headless frontend (Lighthouse 95+)',
                'Shopify or Medusa e-commerce backend',
                'Custom API & ERP integrations',
                'Healthcare B2B portal: PO payments, institutional billing',
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
          eyebrow="NASHVILLE × E-COMMERCE"
          headline="E-Commerce Development for Nashville's Key Industries"
          lead="From Music City artists to America's healthcare capital, Nashville's economy spans industries with distinct e-commerce needs. FactoryJet has built stores for each of them."
          sectors={[
            {
              name: 'Music & Entertainment',
              description:
                "Merchandise stores, vinyl shops, fan club subscriptions, and artist DTC stores for Nashville's world-famous music scene. Bandcamp integration, limited-edition drops, album pre-orders, tour merchandise, and digital download flows built as standard.",
              example:
                'SXSW artists, Nashville record labels, independent musicians, and event merchandise brands.',
            },
            {
              name: 'Food, Spirits & Hot Chicken',
              description:
                "DTC stores for Nashville-made foods, Tennessee whiskey brands, hot sauce companies, and restaurant merchandise. Heat-level variant configuration, regional shipping restrictions for perishables, and gift set bundling for Nashville's culinary export market.",
              example:
                "Hot chicken brands, BBQ sauce companies, Tennessee whiskey DTC stores, and Nashville restaurant merchandise brands.",
            },
            {
              name: 'Healthcare & Wellness',
              description:
                "B2B ordering portals, medical supply stores, and wellness product DTC shops for Nashville's $76B healthcare ecosystem. Institutional PO payment terms, HIPAA-aware data handling, and hospital system billing integrations built in.",
              example:
                "Medical supply retailers, healthcare apparel brands (scrubs, compression socks), and patient wellness product companies serving Nashville's 280,000 healthcare workers.",
            },
            {
              name: 'Tourism & Hospitality',
              description:
                "Online gift shops, experience booking, and visitor merchandise for Nashville's 16M annual visitor economy. Tourist-specific features: local pickup options, international shipping, gift wrapping, and 'Keep in Nashville' digital gift cards.",
              example:
                "Hotel merchandise stores, Nashville attraction gift shops, souvenir brands, and tour booking + merchandise combination stores.",
            },
            {
              name: 'Apparel & Lifestyle',
              description:
                "Nashville-themed apparel, country-adjacent fashion, and lifestyle brands for Music City's cultural export market. From independent makers to nationally recognized Nashville-made apparel brands shipping to country music fans across the US.",
              example:
                "Nashville-themed lifestyle apparel, country music fashion brands, and DTC apparel companies targeting Music City's cultural export market.",
            },
            {
              name: 'Real Estate & Home',
              description:
                "Interior design product stores, home goods, and renovation supply e-commerce for Nashville's booming real estate market. Nashville's rapid population growth and relocation economy create sustained demand for premium home goods shipped nationwide.",
              example:
                "Home furnishings brands, interior design product lines, and artisan goods makers serving Nashville's fast-growing residential market.",
            },
          ]}
        />

        {/* ── 12. TESTIMONIALS ────────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="WHAT CLIENTS SAY"
          headline="4.9/5 across 150+ reviews from Nashville and beyond."
        />

        {/* ── 13. FAQ ─────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="COMMON QUESTIONS"
          headline="Common Questions from Nashville E-Commerce Businesses"
          items={[
            {
              question: 'Who is the best Shopify developer in Nashville, TN?',
              answer:
                "FactoryJet is Nashville's top-rated Shopify development agency — 500+ projects, 4.9★ rating, and the only shop in Music City combining Shopify e-commerce with AI development. Local Nashville agencies (Infomedia, Thompson-Miller) focus on healthcare and financial services web design, not Shopify. National agencies targeting Nashville charge $8,000–$40,000. FactoryJet launches Shopify stores in 7 days from $2,999 with real Nashville market knowledge.",
            },
            {
              question: 'How much does Shopify development cost in Nashville?',
              answer:
                'Shopify stores start at $2,999 at FactoryJet — compared to $8,000–$25,000 at agencies targeting the Nashville market. WooCommerce stores start at $3,499, and custom headless builds start at $5,999. Every project includes custom design, full development, Tennessee sales tax configuration (9.25% for Davidson County), product catalog setup, mobile-first responsive design, and 30 days of post-launch support.',
            },
            {
              question: 'What Tennessee sales tax rate should my Nashville Shopify store charge?',
              answer:
                "Nashville businesses in Davidson County should configure Shopify to collect 9.25% combined sales tax: Tennessee state rate of 7.0% plus Davidson County's 2.25% local rate. Tennessee uses destination-based sales tax. Important Nashville-specific note: Tennessee's reduced 4% state rate on food and groceries applies to grocery items — FactoryJet configures the correct product-level tax categories for food, apparel, and general merchandise in every Tennessee build.",
            },
            {
              question: 'Do you build Shopify stores for Nashville music artists and bands?',
              answer:
                "Yes — music and entertainment is one of our core Nashville specialties. We build Shopify stores for artist merchandise (T-shirts, vinyl, signed items), digital downloads, fan club subscriptions, album pre-orders, tour merchandise, and backstage experience packages. We integrate with Bandcamp, DistroKid, and Spotify for Artists to create a unified commerce experience. Nashville labels and management companies use FactoryJet to launch merch stores in 7 days ahead of album releases and tour announcements.",
            },
            {
              question: 'Can you build a Shopify store for a Nashville restaurant or food brand?',
              answer:
                "Yes — Nashville's culinary scene (hot chicken, BBQ, Tennessee whiskey, craft coffee) drives major DTC opportunity. We build Shopify stores for restaurant merchandise shops, hot sauce and condiment brands, food subscription boxes, catering booking systems, and whiskey club subscriptions. For Nashville hot chicken brands specifically, we handle heat-level variant configuration, regional shipping restrictions for perishables, and gift set bundling.",
            },
            {
              question: "How does FactoryJet serve Nashville's healthcare industry?",
              answer:
                "Nashville's $76B healthcare economy creates B2B e-commerce demand unlike any other US city. We build Shopify stores for: medical supply retailers (gloves, PPE, disposables), healthcare apparel brands (scrubs, compression socks), patient wellness product companies, healthcare staffing agency portals, and medical equipment rental platforms. We configure B2B pricing tiers, institutional PO payment terms, hospital system billing integrations, and HIPAA-compatible data handling where required.",
            },
            {
              question: 'How long does it take to build a Shopify store in Nashville?',
              answer:
                'FactoryJet launches standard Shopify stores in 7 days. Compare that to Infomedia (8–12 weeks), Thrive Internet Marketing (4–8 weeks), or national agencies like Lounge Lizard (10–16 weeks). Our 7-day timeline is possible because we design in code and use a component architecture optimized for rapid deployment.',
            },
            {
              question: "What advantage does Tennessee's zero income tax give Nashville e-commerce businesses?",
              answer:
                "Tennessee repealed the Hall Tax on investment income in 2021, making it a true zero-income-tax state. For Nashville DTC founders, this means higher personal margins on business profits and more capital available to reinvest in inventory and marketing. Combined with FactoryJet's $2,999 starting price, Nashville entrepreneurs launch profitable stores faster than in almost any other major US metro.",
            },
            {
              question: 'Do you build Shopify stores for Nashville tourism and hospitality businesses?',
              answer:
                "Yes — Nashville's 16M annual visitors create significant digital retail opportunity. We build online gift shops for attractions, hotels, and experiences; event merchandise stores for Nashville venues; souvenir brand DTC stores; and tour booking + merchandise combination stores. We configure tourist-specific features: airport pickup locations, international shipping for visitors taking Nashville goods home, gift wrapping, and 'Keep in Nashville' digital gift cards.",
            },
            {
              question: 'How does FactoryJet compare to national agencies for Nashville Shopify development?',
              answer:
                "National agencies targeting Nashville (Thrive, Lounge Lizard, WebFX) charge $8,000–$40,000, quote 8–16 week timelines, have no Nashville market knowledge, and treat your store as one of thousands of cookie-cutter projects. FactoryJet knows Nashville: the Tennessee tax structure, Music City's tourism economy, the Vanderbilt healthcare corridor, the hot chicken DTC opportunity. We deliver in 7 days from $2,999 and build AI-powered features those agencies can't offer at any price.",
            },
            {
              question: 'Can you migrate my Nashville website to Shopify?',
              answer:
                "Yes — migrations are a significant part of our Nashville work. We migrate from WooCommerce, BigCommerce, Squarespace, Wix, and custom platforms to Shopify. Migration includes: full product catalog transfer, customer data, order history, URL 301 redirects (preserving Nashville local search rankings), Tennessee tax reconfiguration, and SEO continuity. Timeline: 7–14 days.",
            },
            {
              question: 'What is included in a FactoryJet Shopify build for a Nashville business?',
              answer:
                "Every Nashville Shopify store includes: custom design (not a theme), full Shopify development, Tennessee sales tax setup (9.25% Davidson County, food product reduced rates), payment gateway integration, product catalog setup, mobile-first responsive design, Lighthouse 90+ optimization, JSON-LD schema, AEO content for AI search visibility, 30 days of post-launch support, and a launch walkthrough. Starting at $2,999 — no hidden fees.",
            },
          ]}
        />

        {/* ── 14. FINAL CTA ───────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Build Your Nashville Shopify Store?"
          sub="Music City's tourism economy, healthcare sector, and artist brands are all generating revenue that a great Shopify store should be capturing. Every week without one is a week your competitors own the searches you should. Book a free 30-minute audit and we'll have a store blueprint ready within 72 hours."
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
      dangerouslySetInnerHTML={{ __html: getEcommerceCitySchema('nashville') }}
    />
  );
}
