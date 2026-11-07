import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import CityContextSection from '@/components/v2/CityContextSection';
import PortfolioShowcase from '@/components/v2/PortfolioShowcase';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import HeroBrowserMockup from '@/components/v2/HeroBrowserMockup';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { ecommerceCityAlternatesIN } from '@/data/hreflangMap';
import GetFreeQuoteCTA from '@/components/v2/GetFreeQuoteCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Ecommerce Development in Bangalore | FactoryJet',
  description:
    'Ecommerce development in Bangalore for D2C startups, SP Road electronics sellers and Peenya suppliers. Shopify, headless, Razorpay and GST. 7-day delivery.',
  keywords: [
    'ecommerce development company bangalore',
    'ecommerce website development bangalore',
    'shopify development bangalore',
    'woocommerce development bangalore',
    'online store development bangalore',
    'custom ecommerce development bangalore',
    'ecommerce website cost bangalore',
    'd2c website bangalore',
    'razorpay shopify bangalore',
    'b2b ecommerce bangalore',
    'whatsapp commerce bangalore',
    'fashion ecommerce bangalore',
    'tech d2c bangalore',
    'ecommerce agency bangalore',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce Development Company in Bangalore | FactoryJet',
    description:
      'Bangalore ecommerce builds: Shopify stores for Koramangala D2C brands, headless storefronts, B2B portals for Peenya makers. UPI, COD, GST. 7-day delivery.',
    url: 'https://factoryjet.com/services/ecommerce-development/bangalore',
    images: [
      {
        url: 'https://factoryjet.com/images/services/card-ecommerce.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Ecommerce Development Services',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Development Bangalore | FactoryJet',
    description:
      'Bangalore ecommerce: Shopify, headless and B2B builds with Razorpay, UPI and GST invoicing.',
    images: ['https://factoryjet.com/images/services/card-ecommerce.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ecommerce-development/bangalore',
    languages: ecommerceCityAlternatesIN['bangalore'],
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
};

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schema (Service + LocalBusiness), faqSchema is declared after FAQ_ITEMS below
───────────────────────────────────────────────────────────────────────────── */

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-11-07';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ecommerce-development/bangalore#webpage',
  url: 'https://factoryjet.com/services/ecommerce-development/bangalore',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce Development Bangalore',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  serviceType: 'Ecommerce Development',
  areaServed: {
    '@type': 'City',
    name: 'Bangalore',
    '@id': 'https://www.wikidata.org/wiki/Q1355', // Wikidata label: Bengaluru (capital of Karnataka, India)
  },
  description:
    'Ecommerce development for Bangalore businesses: Shopify and headless stores for D2C startups, electronics catalogues with EMI, B2B portals for Peenya and Electronic City manufacturers, GST invoicing. Lighthouse 95+.',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
  name: 'FactoryJet Ecommerce Development Bangalore',
  url: 'https://factoryjet.com/services/ecommerce-development/bangalore',
  image: 'https://factoryjet.com/logo.png',
  description:
    'Ecommerce development company serving Bengaluru startups, retailers and manufacturers. Shopify, WooCommerce, headless and B2B builds with Razorpay, UPI, COD and GST invoicing. 7-day delivery.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  areaServed: [
    'Whitefield', 'Koramangala', 'HSR Layout', 'Indiranagar',
    'Electronic City', 'Hebbal', 'Marathahalli', 'Jayanagar',
  ],
  
};

/* ─────────────────────────────────────────────────────────────────────────────
   Journey Stages
───────────────────────────────────────────────────────────────────────────── */

const BANGALORE_ECOM_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Stack and Scope Call',
    description:
      'We look at your catalogue size, growth plan, team and tools. A seed-stage D2C brand may get a Shopify theme. A brand with its own developers and heavy content may get a headless build. You get the reasoning in writing.',
  },
  {
    number: '02',
    title: 'Figma on Real Products',
    description:
      'We design the home, listing, product and checkout screens with your own photos and prices, phone first. Spec tables, EMI badges and delivery-date messages are placed and approved here.',
  },
  {
    number: '03',
    title: 'Build and Wiring',
    description:
      'Theme or Next.js storefront, Razorpay with UPI, cards, wallets and EMI, COD rules, GST invoicing, courier APIs, analytics events and catalogue import from your sheet or old store.',
  },
  {
    number: '04',
    title: 'Payment and Speed Tests',
    description:
      'Test orders on every payment method, invoice and label checks, and Lighthouse runs on mobile for the key templates. We aim for 90+ and LCP under 2.5 seconds before launch.',
  },
  {
    number: '05',
    title: 'Go-Live and Repo Handover',
    description:
      'Domain switch with no downtime, sitemap submitted, repo and admin access handed to your team, and a walkthrough recorded for new hires. Defect cover runs for the period we agreed at the start.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ
───────────────────────────────────────────────────────────────────────────── */

const BANGALORE_ECOM_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'platform',  label: 'Platform & Tech' },
  { key: 'india',     label: 'India-Specific' },
  { key: 'seo',       label: 'Speed & SEO' },
  { key: 'trust',     label: 'Process & Ownership' },
];

const BANGALORE_ECOM_FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How long does a Bangalore ecommerce build take?',
    answer:
      'A standard Shopify or WooCommerce store is live in 7 days once products, photos and gateway approval are with us. A custom theme takes 3 to 5 weeks. Subscriptions, B2B pricing or a migration from another platform take 5 to 8 weeks. A headless Next.js storefront takes 8 to 14 weeks.',
  },
  {
    category: 'pricing',
    question: 'What does ecommerce development cost in Bangalore?',
    answer:
      'It depends on the stack and the scope. The biggest swings come from headless versus theme builds, international payments, subscription logic and how many systems the store must talk to. We send a fixed written price after a short call, and it stays fixed for that phase.',
  },
  {
    category: 'pricing',
    question: 'How are payments split across the build?',
    answer:
      'By phase. A common split is storefront first, then subscriptions or a B2B portal. Each phase has its own written scope and price, and you approve each before work starts. NEFT, RTGS and UPI are all fine.',
  },
  {
    category: 'pricing',
    question: 'Can we test a working version before signing anything?',
    answer:
      'Yes. We set up a draft using some of your real products and take you through browsing, cart and payment. Your team can click through it on their own phones. If it is not right, there is no contract and no bill.',
  },
  {
    category: 'platform',
    question: 'Should a funded D2C brand go headless?',
    answer:
      'Only when there is a reason. Headless, with a Next.js front end on top of Shopify, makes sense when you publish a lot of content, run many campaigns or have your own developers. For most early brands a fast Shopify theme sells just as well and costs less to run. We tell you which, and why.',
  },
  {
    category: 'platform',
    question: 'Can my store take payments from customers abroad?',
    answer:
      'Yes. Razorpay supports international cards for approved accounts, and Shopify Markets shows prices in local currencies. For brands selling heavily to the US or Europe, we can add a second gateway such as Stripe or PayPal. Duties and delivery times are shown before payment.',
  },
  {
    category: 'platform',
    question: 'Do you set up UPI, cards and COD?',
    answer:
      'Yes, on every build. Razorpay is our usual choice and covers UPI, cards, net banking, wallets and EMI in one account. PayU, Cashfree or PhonePe work too if you already use them. COD can be limited by order value or pincode.',
  },
  {
    category: 'platform',
    question: 'Can you sync my store with Amazon, Flipkart, Myntra and Nykaa?',
    answer:
      'Yes. We connect the store to your seller accounts through a tool such as Unicommerce, EasyEcom or CedCommerce. Stock and prices stay aligned, and orders from every channel show up in one place, which stops overselling during sale weeks.',
  },
  {
    category: 'india',
    question: 'How is GST set up on a Bangalore store?',
    answer:
      'Every order gets an invoice with HSN codes and the right tax split: CGST and SGST for buyers in Karnataka, IGST for buyers elsewhere. Business customers can add a GSTIN at checkout. Exports match GSTR-1, and invoices can flow into Tally or Zoho Books.',
  },
  {
    category: 'india',
    question: 'Which couriers work for a store shipping from Bengaluru?',
    answer:
      'Shiprocket covers most needs: one panel for Delhivery, Blue Dart, Xpressbees, Ekart and more, with returns and failed-delivery follow-up. For same-day delivery inside the city, Porter, Borzo or Shadowfax fit food, gifts and urgent parts. Big shippers often sign a direct Delhivery contract later.',
  },
  {
    category: 'india',
    question: 'Can my store be in Kannada?',
    answer:
      'Yes. We can run a Kannada version next to English, each on its own URL so search engines index both. We check Kannada script on low-cost Android phones and suggest a person writes the product text, because machine translation mangles sizes and ingredients.',
  },
  {
    category: 'india',
    question: 'How can a D2C store compete with quick-commerce apps?',
    answer:
      'By being clear about speed and better at everything else. Show the delivery date by pincode on the product page, offer same-day delivery inside Bengaluru where it makes sense, and give reasons to buy direct: bundles, subscriptions, full range and better support.',
  },
  {
    category: 'seo',
    question: 'Will my Bangalore store rank on Google?',
    answer:
      'Good structure gives it a fair chance. We add product and breadcrumb schema, clean URLs and titles, canonical tags and a sitemap from launch. Experience stores in Indiranagar or Jayanagar get linked to their Google Business Profiles. Content answering buyer questions does the rest over time.',
  },
  {
    category: 'seo',
    question: 'Does a headless store hurt SEO?',
    answer:
      'Not if it is built right. We render product and collection pages on the server, keep URLs stable, ship structured data and handle redirects from the old store. Done badly, headless can hide content from Google, so we check rendering with Search Console before launch.',
  },
  {
    category: 'seo',
    question: 'How do you test speed before launch?',
    answer:
      'We run Lighthouse on mobile for the home, listing, product and cart pages and send you the report. The aim is 90+, with LCP below 2.5 seconds and minimal layout shift. Images, third-party scripts and app bloat are where most of the work goes.',
  },
  {
    category: 'seo',
    question: 'Our current store is slow. Can you fix it without a rebuild?',
    answer:
      'Often, yes. We audit the slow pages, list each cause, and price the fixes as a fixed package. Common causes are oversized images, apps loading scripts everywhere, heavy fonts and chat widgets. If a rebuild is the cheaper route, we say so.',
  },
  {
    category: 'trust',
    question: 'Who owns the code and accounts?',
    answer:
      "Your company does. The store, domain, payment and courier accounts are registered to you, and the code lives in your GitHub organisation. Hosting and app costs can be billed to your own cards at cost. Switching developers later needs nobody's permission.",
  },
  {
    category: 'trust',
    question: 'Can our in-house developers keep building after handover?',
    answer:
      'Yes. The repo is yours, with a README covering setup, environment variables and deploy steps. We walk your developers through the structure on handover day, and they can ship changes the next morning.',
  },
  {
    category: 'trust',
    question: 'What help do we get once the store is live?',
    answer:
      'Any defect in our work is fixed inside the build price during a cover period agreed at the start. After that, you choose. Changes are quoted one by one and approved before we begin, and there is no monthly minimum.',
  },
  {
    category: 'trust',
    question: 'Can non-technical staff run the store day to day?',
    answer:
      'Yes. On Shopify, adding products, editing prices, creating offers and handling orders need no code. We set up staff accounts with the right permissions and record short videos of the tasks your team does most.',
  },
  {
    category: 'pricing',
    question: 'Who is the best ecommerce development company in Bangalore?',
    answer:
      'The best ecommerce website development company in Bangalore for you is one that names the engineer writing your code, fixes the price in writing and hands you the repo. FactoryJet does all three and shows a draft before you sign. Ask the same of every ecommerce solution company in Bangalore you meet.',
  },
  {
    category: 'pricing',
    question: 'Should I hire an ecommerce developer in Bangalore or an agency?',
    answer:
      'Hiring works if you plan a long product roadmap and can manage engineers. For a launch, one hire rarely covers design, payments, logistics, tax and search together. A small senior team does it at a fixed price. If you hire an ecommerce developer in Bangalore, ask to see two stores they shipped, live, on your phone.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: BANGALORE_ECOM_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ecommerce-development/bangalore#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ecommerce-development/bangalore',
};

export default function BangaloreEcommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="bangalore-ecom-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="bangalore-ecom-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="bangalore-ecom-local-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'Ecommerce Development', url: 'https://factoryjet.com/services/ecommerce-development' },
          { name: 'Bangalore', url: 'https://factoryjet.com/services/ecommerce-development/bangalore' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'Ecommerce Development', url: 'https://factoryjet.com/services/ecommerce-development' },
          { name: 'Bangalore', url: 'https://factoryjet.com/services/ecommerce-development/bangalore' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="services_ecommerce_development_bangalore_hero" />}
          eyebrow="ECOMMERCE DEVELOPMENT · BANGALORE"
          headline="Ecommerce Development in Bangalore: Store Live in 7 Days"
          lead="FactoryJet builds Shopify and headless stores for Bengaluru D2C startups, EMI-ready catalogues for electronics sellers, and trade portals for Peenya manufacturers. UPI first at checkout, GST on every invoice, Lighthouse 90+ on mobile. 7-day delivery."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '7-day delivery',
            'Razorpay + UPI + COD ready',
          ]}
          rightSlot={<HeroBrowserMockup />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ stores launched. 12 years of ecommerce engineering. 7-day delivery."
          description="Stores and B2B portals for founders in India, the US, the UK and the UAE. Bengaluru teams get a fixed price per phase, a repo they own from day one, and 7-day delivery on standard stores."
        />

        {/* ── 4. PLATFORM EXPLANATION ──────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="ECOMMERCE DEVELOPMENT · BANGALORE"
          headline="Picking a Platform for a Bangalore Brand"
          lead="A funded Koramangala skincare brand, an SP Road dealer listing thousands of components and a Peenya machine shop selling spares do not belong on the same stack. We look at your catalogue, growth plan and team before we name a platform or a price."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'Shopify',
                  'WooCommerce',
                  'Next.js Commerce',
                  'Razorpay',
                  'UPI',
                  'COD',
                  'Shiprocket',
                  'WhatsApp AI',
                ].map((cap) => (
                  <span
                    key={cap}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#B23E13]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {cap}
                  </span>
                ))}
              </div>

              <p>
                Bengaluru buyers order groceries in minutes and expect the same speed from every app on their phone. A store that takes four seconds to show a product photo loses them. So does a checkout that asks for an address twice or hides the UPI option below the cards. These are build decisions, made long before any ad goes live.
              </p>

              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '0.9%', label: 'India avg. ecommerce conversion rate' },
                  { value: '65%', label: 'India ecommerce traffic via mobile' },
                  { value: '78%', label: 'cart abandonment rate in India' },
                ].map((b) => (
                  <div
                    key={b.value}
                    className="rounded-xl border border-fj-neutral-200 bg-white px-3 py-4 text-center shadow-sm"
                  >
                    <p
                      className="fj-display font-bold text-[#F05A28]"
                      style={{ fontSize: '1.375rem', lineHeight: 1, letterSpacing: '-0.03em' }}
                    >
                      {b.value}
                    </p>
                    <p
                      className="mt-1.5 font-fj-mono font-medium uppercase text-fj-neutral-400"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.07em' }}
                    >
                      {b.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  Speed on a cheap phone over 4G is the first feature a Bengaluru store needs.
                </p>
              </div>

              <p>
                For funded D2C brands we often suggest a headless storefront on Next.js with Shopify behind it, so the marketing team can ship pages fast while orders stay on a stable backend. For simpler catalogues, a well-built Shopify theme does the job at a lower cost. Electronics sellers get spec filters and EMI on the product page. Trade buyers get logins and price lists.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  Bangalore platform guide
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { platform: 'Shopify', best: 'DTC brands, fashion, beauty, fast launch', starting: 'Fast launch' },
                  { platform: 'WooCommerce', best: 'WordPress-first, content-commerce', starting: 'WordPress-first' },
                  { platform: 'Shopify Plus', best: 'Scale, B2B wholesale, custom checkout', starting: 'Scale & B2B' },
                  { platform: 'Headless Next.js', best: 'Performance-critical, custom UX', starting: 'Max performance' },
                  { platform: 'Multi-Vendor Marketplace', best: 'Aggregator model, multi-seller', starting: 'Multi-seller' },
                  { platform: 'Quick Commerce App', best: 'Sub-30-min delivery, dark stores', starting: 'Dark-store ready' },
                ].map((item) => (
                  <div key={item.platform} className="py-3.5">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">
                        {item.platform}
                      </p>
                      <p
                        className="fj-display flex-shrink-0 font-bold text-[#B23E13]"
                        style={{ fontSize: '0.9375rem', letterSpacing: '-0.02em' }}
                      >
                        {item.starting}
                      </p>
                    </div>
                    <p
                      className="mt-0.5 font-fj-mono text-[0.6875rem] text-fj-neutral-400"
                      style={{ letterSpacing: '0.04em' }}
                    >
                      {item.best}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden="true" />
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}
                >
                  The platform should match your stage, not your ambition deck.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 5. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Bengaluru Founders Pick FactoryJet"
          lead="Startup founders in Bengaluru usually have a launch date tied to a funding round, a festival sale or an influencer drop. We fix the price per phase in writing, put 7-day delivery for standard stores into the agreement, and show you a working draft on your own products before you commit."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing.',
              body: 'A standard store goes live in 7 days once your products, photos and gateway approval are ready, and that date is written into the agreement. We have delivered on time on 97% of builds. When one slipped, it was usually waiting on assets from the client.',
            },
            {
              icon: '📱',
              title: 'Designed for the 10-minute delivery generation.',
              body: 'Bengaluru shoppers compare every store with the fastest app on their phone. We design at 375px first, keep scripts lean, show the delivery date by pincode, and put UPI where the thumb lands.',
            },
            {
              icon: '📋',
              title: 'Fixed price. Agreed before we start.',
              body: 'Every phase has a written scope and a fixed price before work begins. No hourly billing, no change in price because a sprint ran long. Support later is optional and quoted per change.',
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Brief to Launch for a Bengaluru Store"
          lead="Stack decision first. Design on your real products second. Payments, couriers and speed tested before the domain switches."
          stages={BANGALORE_ECOM_STAGES}
          closingNote="5 STAGES · STACK FIRST · UPI + GST + COURIERS · LIGHTHOUSE 90+ · REPO IN YOUR NAME"
        />

        {/* ── 7. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="BANGALORE ECOMMERCE MARKET"
          headline="How Bengaluru Buys and Sells Online"
          leadParagraphs={[
            'Bengaluru is where a large share of Indian D2C brands and commerce apps are started, run and staffed. Koramangala, HSR Layout and Indiranagar are full of young brands in skincare, coffee, apparel and snacks. Their founders and buyers often work in tech, and they judge a store the way they judge software: by speed, clarity and how few taps it takes to pay.',
            'Beyond the startup belt sits an older trading and industrial city. SP Road and the Avenue Road area sell electronics, components and hardware to buyers across South India. Peenya and Electronic City house machine shops, fabricators and component makers who sell to OEMs and distributors. Many are moving from phone and email orders to a portal where trade buyers log in and reorder.',
            'Then there is heritage retail: Mysore silk sarees, Channapatna wooden toys, and coffee from the estates of Chikkamagaluru and Coorg, sold to buyers in India and abroad. These stores need strong photos, origin stories, international shipping and Kannada where local buyers expect it. We build for all three groups, and the build looks different for each.',
          ]}
          stats={[
            {
              value: '13,000+',
              label: 'Active startups in Bangalore: India\'s most digitally sophisticated consumer base',
              sourceUrl: 'https://www.ibef.org/states/karnataka',
              sourceLabel: 'IBEF Karnataka',
            },
            {
              value: '23%',
              label: "India's projected ecommerce market growth rate, year over year through 2030",
              sourceUrl: 'https://www.ibef.org/industry/ecommerce',
              sourceLabel: 'India Brand Equity Foundation',
            },
            {
              value: '500M+',
              label: 'UPI transactions per month in India: the payment rail your store must support',
              sourceUrl: 'https://www.npci.org.in/what-we-do/upi/product-statistics',
              sourceLabel: 'NPCI UPI Statistics',
            },
          ]}
        />

        {/* ── 8. INDUSTRIES (DARK) ─────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="BANGALORE × ECOMMERCE"
          headline="Bangalore Sectors We Build For"
          lead="From Koramangala skincare startups to Peenya fabricators, these six sectors make up most of the ecommerce briefs we see from Bengaluru."
          sectors={[
            {
              name: 'Tech D2C & Gadgets',
              description:
                'Audio, wearables and smart home brands need comparison tables, EMI on the product page, warranty registration and fast replacement flows.',
              example:
                'Wearable and audio brands, smart home device makers, phone accessory labels.',
            },
            {
              name: 'Fashion & Apparel',
              description:
                'Indiranagar and Koramangala labels sell through Instagram first. They need size guides, exchange flows, drops with limited stock and Myntra sync.',
              example:
                'Streetwear and athleisure labels, sustainable fashion brands, ethnic wear studios.',
            },
            {
              name: 'Electronics & Components',
              description:
                'SP Road dealers list thousands of parts. They need spec filters, bulk pricing, GST invoices for businesses and stock synced from a billing system.',
              example:
                'Component distributors, IT peripherals sellers, CCTV and networking dealers.',
            },
            {
              name: 'Coffee, Food & Wellness',
              description:
                'Estate coffee, millet snacks and supplements sell on subscription. These stores need FSSAI details, roast or batch dates and UPI AutoPay renewals.',
              example:
                'Specialty coffee roasters, millet and health snack brands, supplement makers.',
            },
            {
              name: 'Silk, Toys & Heritage Crafts',
              description:
                'Mysore silk and Channapatna toys sell well to NRIs and gift buyers. Stores need origin details, careful photography and international checkout.',
              example:
                'Silk saree sellers, Channapatna toy makers, handloom and craft cooperatives.',
            },
            {
              name: 'B2B Manufacturing & Industrial',
              description:
                'Peenya and Electronic City makers need trade portals: buyer logins, price lists by account, RFQ forms, bulk orders and GST B2B invoices.',
              example:
                'Machine shops, sheet metal fabricators, industrial component suppliers.',
            },
          ]}
        />

        {/* ── 9. PORTFOLIO ─────────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="Brands we have launched."
          cards={[
            {
              industry: 'Wholesale Distribution · Commerceflo',
              title: 'Belle Maison · Mumbai',
              description:
                'Belle Maison is a Mumbai wholesale distributor of artificial plants, flowers, flower runners, home décor, and LED lighting. FactoryJet built their B2B quote-to-cash store on Commerceflo, with trade pricing tiers, quote-to-order workflows, and account-based ordering.',
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Live in 7 days',
              stat2: 'Commerceflo · B2B',
            },
            {
              industry: 'Print Branding · Web',
              title: 'Impulse Branding · Mumbai',
              description:
                'Impulse Branding is a Mumbai print branding and general contracting company. FactoryJet built impulsebranding.in and is now building their next-generation site.',
              imageSrc: '/images/work/impulse-branding-desktop.webp',
              stat1: 'Launched in 6 days',
              stat2: 'Web · SEO',
            },
          ]}
          ctaHref="/portfolio"
          ctaLabel="View full portfolio"
        />

        <GetFreeQuoteCTA />
        {/* ── 11. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What founders say after we ship their store"
        />

        {/* ── 12. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="What Bengaluru Founders Ask Before They Sign"
          lead="The questions Bengaluru founders and operators ask us first, about stack, speed, payments, GST and code ownership."
          categories={BANGALORE_ECOM_FAQ_CATEGORIES}
          items={BANGALORE_ECOM_FAQ_ITEMS}
        />

        {/* ── 13. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO LAUNCH"
          headline="Your Bangalore Store, Live in 7 Days"
          sub="FactoryJet has worked with 500+ businesses in India, the US, the UK and the UAE. Send us your catalogue and launch date, and we will propose a stack, price each phase in writing and show you a draft of your store before you sign."
          primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'View Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price per phase. 7-day delivery. UPI, GST and couriers wired in. Repo in your name from day one."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
