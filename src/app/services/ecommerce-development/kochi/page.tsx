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
  title: 'Ecommerce Development in Kochi | FactoryJet',
  description:
    'Ecommerce development in Kochi for spice traders, ayurveda brands, Kasavu sellers and seafood exporters. Shopify, UPI, Gulf shipping, GST. 7-day delivery.',
  keywords: [
    'ecommerce development company kochi',
    'ecommerce website development kochi',
    'shopify development kochi',
    'woocommerce development kochi',
    'online store development kochi',
    'custom ecommerce development kochi',
    'ecommerce website cost kochi',
    'd2c website kochi',
    'razorpay shopify kochi',
    'seafood ecommerce kochi',
    'spices ayurveda ecommerce kochi',
    'kasavu ecommerce kerala',
    'b2b ecommerce kochi',
    'it products ecommerce kochi',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce Development Company in Kochi | FactoryJet',
    description:
      'Kochi ecommerce stores: Kerala spices and ayurveda, Kasavu and handloom, coir and snacks, with checkout for Gulf and NRI buyers. 7-day delivery.',
    url: 'https://factoryjet.com/services/ecommerce-development/kochi',
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
    title: 'Ecommerce Development Kochi | FactoryJet',
    description:
      'Kochi ecommerce: spice, ayurveda and handloom stores with Malayalam, UPI and Gulf shipping.',
    images: ['https://factoryjet.com/images/services/card-ecommerce.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ecommerce-development/kochi',
    languages: ecommerceCityAlternatesIN['kochi'],
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
  '@id': 'https://factoryjet.com/services/ecommerce-development/kochi#webpage',
  url: 'https://factoryjet.com/services/ecommerce-development/kochi',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce Development Kochi',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Ecommerce Development',
  areaServed: {
    '@type': 'City',
    name: 'Kochi',
    '@id': 'https://www.wikidata.org/wiki/Q1800', // Wikidata label: Kochi (city in Kerala, India)
  },
  description:
    'Ecommerce development for Kochi businesses: Shopify and WooCommerce stores for spice, ayurveda, handloom and snack brands, international checkout for Gulf and NRI buyers, B2B portals for exporters, GST invoicing. Lighthouse 95+.',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
  name: 'FactoryJet Ecommerce Development Kochi',
  url: 'https://factoryjet.com/services/ecommerce-development/kochi',
  image: 'https://factoryjet.com/logo.png',
  description:
    'Ecommerce development company serving Kochi and Ernakulam businesses. Shopify, WooCommerce and custom builds with Razorpay, UPI, COD, international shipping and GST invoicing. 7-day delivery.',
  areaServed: [
    'Kakkanad', 'Infopark', 'Edappally', 'MG Road', 'Fort Kochi',
    'Aluva', 'Thrippunithura', 'Kalamassery',
  ],
  
};

/* ─────────────────────────────────────────────────────────────────────────────
   Journey Stages
───────────────────────────────────────────────────────────────────────────── */

const KOCHI_ECOM_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Markets and Products',
    description:
      'We map where your orders come from: Kerala, the rest of India, the Gulf, Europe or trade buyers. Spices, ayurveda and food each carry different shipping rules abroad, and that shapes the platform and courier choice.',
  },
  {
    number: '02',
    title: 'Design on Your Products',
    description:
      'Home, collection, product and checkout screens designed with your real photos and prices, phone first. You approve origin notes, batch dates, Malayalam labels and gifting options before code.',
  },
  {
    number: '03',
    title: 'Build and Integrations',
    description:
      'Store build, Razorpay for UPI, cards and COD, international payments, GST invoices, Shiprocket for India and a cross-border courier for the Gulf, plus catalogue import.',
  },
  {
    number: '04',
    title: 'Testing From Both Ends',
    description:
      'We place test orders as a buyer in Kochi and a buyer in Dubai, check duties messages, invoices and labels, and test mobile speed against a Lighthouse 90+ target.',
  },
  {
    number: '05',
    title: 'Launch and Training',
    description:
      'Domain switch with no downtime, sitemap submitted, code and logins handed over, team trained. Defects in our build are fixed free during the cover period agreed before work began.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ
───────────────────────────────────────────────────────────────────────────── */

const KOCHI_ECOM_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'platform',  label: 'Platform & Tech' },
  { key: 'india',     label: 'India-Specific' },
  { key: 'seo',       label: 'Speed & SEO' },
  { key: 'trust',     label: 'Process & Ownership' },
];

const KOCHI_ECOM_FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How long does it take to set up an online store in Kochi?',
    answer:
      'A standard Shopify or WooCommerce store goes live in 7 days once your products, photos and gateway approval are ready. A custom theme takes 3 to 5 weeks. Stores with export trade portals or subscriptions take 5 to 8 weeks, and custom platforms take 8 to 14 weeks.',
  },
  {
    category: 'pricing',
    question: 'How much does ecommerce development cost in Kochi?',
    answer:
      'It depends on what the store does. For Kerala businesses, Gulf and international selling, a Malayalam storefront, export trade portals and the size of the catalogue are the main factors. We give you a fixed price in writing after a short scoping call.',
  },
  {
    category: 'pricing',
    question: 'Can the build be paid in phases?',
    answer:
      'Yes. Each phase, for example the Kerala store first and Gulf shipping next, is scoped and priced in writing and signed before it starts. Pay by NEFT, RTGS or UPI. We never bill by the hour.',
  },
  {
    category: 'pricing',
    question: 'We want to launch before Onam. When should we start?',
    answer:
      'Brief us at least 8 weeks before Onam. Gulf buyers order early to allow for shipping, and Kasavu and spice stock needs to be on the site before they start looking. That window covers build, gateway approval and test shipments.',
  },
  {
    category: 'platform',
    question: 'Which platform suits a Kerala spice or ayurveda brand?',
    answer:
      'Shopify suits most. It handles pack sizes as variants, shows prices in dirhams, riyals or pounds through Shopify Markets, and takes UPI, COD and international cards. WooCommerce works if you already have a WordPress site with recipes or wellness content.',
  },
  {
    category: 'platform',
    question: 'Can I sell to customers in the Gulf from Kochi?',
    answer:
      'Yes. We set up Gulf currency pricing, a cross-border courier such as Shiprocket X, DHL or Aramex, and clear duty and delivery information at checkout. Some food and herbal products face import rules in certain Gulf countries, so we flag those per product.',
  },
  {
    category: 'platform',
    question: 'Do you set up UPI, cards and COD?',
    answer:
      'Yes. Razorpay is our default, covering UPI, cards, net banking, wallets and EMI in India and international cards for approved accounts. We can connect PayU, CCAvenue or PhonePe if you already use one. COD is for Indian orders only and can be capped.',
  },
  {
    category: 'platform',
    question: 'Can seafood exporters take trade orders online?',
    answer:
      'Yes, through a login-only portal. Approved importers and hotel buyers see spec sheets, MOQ, lead times and their own prices, and can request quotes for custom packs. Retail sales of dry fish, pickles and snacks can run in a separate public store.',
  },
  {
    category: 'india',
    question: 'How does GST work on a Kochi store?',
    answer:
      'Orders within Kerala carry CGST and SGST, and orders to other states carry IGST. Exports are zero-rated with the right invoice format. The store prints HSN codes and lets business buyers add a GSTIN, and exports sync with Tally or Zoho Books.',
  },
  {
    category: 'india',
    question: 'Which couriers should a Kochi store use?',
    answer:
      'Shiprocket for orders inside India, with Delhivery, Blue Dart, Xpressbees, India Post and others in one account. For the Gulf and other countries, a cross-border courier. During the monsoon we extend delivery estimates for Kerala pincodes so buyers are not surprised.',
  },
  {
    category: 'india',
    question: 'Can my store be in Malayalam?',
    answer:
      'Yes. A Malayalam version can run next to English, each on its own URL so both get indexed. We test Malayalam script on low-cost Android phones and suggest a native speaker writes the product text, since machine translation gets spice and ayurveda terms wrong.',
  },
  {
    category: 'india',
    question: 'Can ayurveda products be sold online from Kerala?',
    answer:
      'Yes, with care. Product pages should show the AYUSH licence number, ingredients and usage, and avoid medical claims. Some countries restrict certain herbs, so we can block those products for those destinations. Prescription-only items need legal advice first.',
  },
  {
    category: 'seo',
    question: 'Will my store rank in Kerala searches?',
    answer:
      'It can, with the right foundations. We set up product and breadcrumb schema, clean titles, canonical tags and a sitemap at launch. If you have a shop in Fort Kochi or on MG Road, we connect the store to your Google Business Profile. Malayalam pages reach searches few competitors target.',
  },
  {
    category: 'seo',
    question: 'Do you test the store speed?',
    answer:
      'Yes. We test the key pages on mobile with Lighthouse before handover and share the report. We aim for 90+ and LCP under 2.5 seconds. Image sizes and app scripts are where most of the gains come from.',
  },
  {
    category: 'seo',
    question: 'Our current Kerala store is slow. Can you help?',
    answer:
      'Yes. We audit the slowest pages, list what slows them down, from big photos to unused apps and heavy themes, and give a fixed price for the fixes, ordered by impact. Often a few changes recover most of the speed.',
  },
  {
    category: 'seo',
    question: 'Will Gulf buyers find the store fast enough?',
    answer:
      'Yes. Shopify and the hosting we use serve pages through a global CDN, so files load from servers near buyers in Dubai or Doha as well as Kochi. Light pages and well-sized photos matter more than distance, and those are part of every build.',
  },
  {
    category: 'trust',
    question: 'Do I own the store and the code?',
    answer:
      'Yes, completely. The store, domain, payment and courier accounts are registered to your business, and the code and all logins are handed over. Hosting and app bills can run in your own accounts at cost. You can move to any developer later.',
  },
  {
    category: 'trust',
    question: 'What does handover look like?',
    answer:
      'We train your team on products, prices, domestic and Gulf orders, returns and offers. You receive a file with every login, each integration contact and a checklist for your first month online.',
  },
  {
    category: 'trust',
    question: 'What support is available after launch?',
    answer:
      'Defects in what we built are fixed inside the build price for a cover period agreed before work starts. After that, support is optional. You approve a quote for each change, and there is no monthly minimum.',
  },
  {
    category: 'trust',
    question: 'Can my staff manage the store without coding?',
    answer:
      'Yes. On Shopify, adding products, updating prices, running Onam or Christmas offers and processing orders need no coding. We set up staff logins and record short videos for the common tasks.',
  },
  {
    category: 'pricing',
    question: 'Who is the best ecommerce development company in Kochi?',
    answer:
      'The right ecommerce website development company in Kochi should tell you who writes the code, fix the price in writing and give you ownership of everything. FactoryJet does all three and builds a draft of your store before you sign. Put the same questions to any ecommerce solution company in Kochi you consider.',
  },
  {
    category: 'pricing',
    question: 'Should I hire an ecommerce developer in Kochi or an agency?',
    answer:
      'A single developer can build a basic store. Selling across Kerala and the Gulf also needs design, multi-currency payments, export shipping, GST and SEO, which is more than most individuals cover. A small senior team handles it at a fixed price. If you hire an ecommerce developer in Kochi, try their past stores on your phone first.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: KOCHI_ECOM_FAQ_ITEMS.map((item) => ({
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
  '@id': 'https://factoryjet.com/services/ecommerce-development/kochi#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ecommerce-development/kochi',
};

export default function KochiEcommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="kochi-ecom-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="kochi-ecom-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="kochi-ecom-local-schema"
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
          { name: 'Kochi', url: 'https://factoryjet.com/services/ecommerce-development/kochi' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'Ecommerce Development', url: 'https://factoryjet.com/services/ecommerce-development' },
          { name: 'Kochi', url: 'https://factoryjet.com/services/ecommerce-development/kochi' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="services_ecommerce_development_kochi_hero" />}
          eyebrow="ECOMMERCE DEVELOPMENT · KOCHI"
          headline="Ecommerce Development in Kochi: Store Live in 7 Days"
          lead="FactoryJet builds online stores for Kochi spice, ayurveda, Kasavu and snack brands that sell across Kerala, India and the Gulf, plus trade portals for exporters. Malayalam storefronts on request, UPI and COD at home, cards abroad, Lighthouse 90+. 7-day delivery."
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
          description="Stores and trade portals for businesses in India, the US, the UK and the UAE. Kochi brands get a fixed price per phase, the full codebase in their own name, and 7-day delivery on standard stores."
        />

        {/* ── 4. PLATFORM EXPLANATION ──────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="ECOMMERCE DEVELOPMENT · KOCHI"
          headline="Choosing a Platform for a Kochi Brand"
          lead="A Mattancherry pepper trader, an ayurveda oil maker shipping to Dubai and a Kasavu weaver selling before Onam need different stores. We review your products, buyers and export plans first, then recommend a platform with a fixed price."
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
                Kerala brands sell to two audiences at once. One lives in Kerala and the rest of India and pays by UPI. The other lives in Dubai, Doha, Riyadh or London, misses home, and buys spices, snacks, sarees and ayurveda products for themselves and for family visits. A store built for only one of them leaves money on the table.
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
                  A Kerala brand online sells to two homes: the one in Kerala and the one in the Gulf.
                </p>
              </div>

              <p>
                We set up Kochi stores with prices in rupees and dirhams or riyals, couriers that reach the Gulf, and clear notes on what customs allows for food and ayurveda. Product pages show origin, harvest or batch dates, and ingredients in plain words. Malayalam can run next to English for buyers at home.
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
                  Kochi platform guide
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
                  You get the platform your exports need, not the costliest one.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 5. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Kochi Businesses Work With FactoryJet"
          lead="Kerala brands often lose overseas orders to a checkout that only takes Indian cards or a courier that cannot reach the Gulf. We fix the price per phase in writing, commit to 7-day delivery for standard stores, and show you a working draft with your own products before you sign."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing.',
              body: 'Standard Shopify and WooCommerce stores for Kochi brands go live in 7 days once products, photos and gateway approval arrive. The date is in the agreement, and 97% of our builds have shipped on time.',
            },
            {
              icon: '📱',
              title: 'One store for Kerala and the Gulf.',
              body: 'Your buyers in Kakkanad and in Sharjah both use phones. We design at 375px first, switch currency by country, and keep checkout short, with UPI at home and cards abroad.',
            },
            {
              icon: '📋',
              title: 'Fixed price. Agreed before we start.',
              body: 'Every phase is scoped and priced in writing before work begins. No hourly meter and no extra charge at launch. Support after launch is optional, with every change quoted first.',
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Build a Kochi Store"
          lead="Markets and platform first, then design on your products, then test orders from Kerala and from the Gulf before launch."
          stages={KOCHI_ECOM_STAGES}
          closingNote="5 STAGES · KERALA + GULF CHECKOUT · UPI + CARDS + GST · LIGHTHOUSE 90+ · CODE HANDED OVER"
        />

        {/* ── 7. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="KOCHI ECOMMERCE MARKET"
          headline="What Kochi Sells Online"
          leadParagraphs={[
            "Kochi has been a spice port for centuries, and the warehouses of Mattancherry still trade pepper, cardamom and other spices. The port also handles a large share of Kerala's seafood exports. Around them sits a wider Kerala economy of ayurveda, coir, rubber products, banana chips and snacks, much of it sold through traders and exporters rather than direct.",
            "Kerala's diaspora, much of it in the Gulf, is a ready market. Families in the UAE, Saudi Arabia, Qatar, Oman and Kuwait buy Kerala spices, snacks, ayurveda oils and Kasavu sarees, especially before Onam, Vishu and Christmas. Selling to them needs local currency prices, a courier that delivers reliably to the Gulf, and honest notes on what customs allows.",
            "At home, Kakkanad's Infopark and the city's newer suburbs bring a growing base of online shoppers. Monsoon months slow deliveries across the state, so delivery estimates need to change with the season. We build Kochi stores with these patterns in mind, and with Malayalam where your buyers expect it.",
          ]}
          stats={[
            {
              value: '3.5 Cr+',
              label: "Kerala diaspora globally: the NRI buyer base your Kochi store can reach",
              sourceUrl: 'https://www.ibef.org/states/kerala',
              sourceLabel: 'IBEF Kerala',
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
          eyebrow="KOCHI × ECOMMERCE"
          headline="Kochi and Kerala Sectors We Build For"
          lead="From Mattancherry spice traders to ayurveda makers and Kasavu weavers, these six sectors make up most of the Kerala briefs we scope."
          sectors={[
            {
              name: 'Spices & Plantation Produce',
              description:
                'Pepper, cardamom, cloves and tea sell to home cooks in India and buyers abroad. Stores need origin and harvest notes, pack sizes, FSSAI details and export-ready shipping.',
              example:
                'Spice traders, estate brands, organic spice cooperatives.',
            },
            {
              name: 'Ayurveda & Wellness',
              description:
                'Oils, herbal powders and wellness products need ingredient lists, AYUSH licence details, usage notes and shipping rules for countries that restrict some herbs.',
              example:
                'Ayurveda oil and medicine makers, herbal skincare brands, wellness retreats selling products.',
            },
            {
              name: 'Kasavu & Kerala Handloom',
              description:
                'Kasavu sarees and set mundu sell most before Onam and weddings. Stores need drape photos, border details, Malayalam labels and Gulf shipping.',
              example:
                'Handloom cooperatives, Kasavu weavers, Kerala ethnic wear boutiques.',
            },
            {
              name: 'Seafood & Food Exports',
              description:
                'Exporters sell to importers and hotel buyers abroad. Trade portals need buyer logins, spec sheets, MOQ and quote requests. Retail stores sell dry fish, pickles and banana chips.',
              example:
                'Seafood exporters, pickle and chips makers, Kerala snack brands.',
            },
            {
              name: 'Coir & Natural Products',
              description:
                'Coir mats, coconut-shell craft and natural fibre goods sell to homes and retailers. Stores need size options, bulk pricing and freight for heavier orders.',
              example:
                'Coir mat makers, coconut craft studios, natural fibre home goods brands.',
            },
            {
              name: 'Tourism & Gifting',
              description:
                'Fort Kochi visitors and the diaspora buy Kerala gifts: Kathakali masks, brass lamps, spice gift boxes. Stores need gift messages, international checkout and careful packaging.',
              example:
                'Handicraft shops, gift box brands, brass and bell metal makers.',
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
          headline="What founders say after their store goes live"
        />

        {/* ── 12. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="What Kochi Businesses Ask Before They Sign"
          lead="The questions Kerala spice, ayurveda and handloom businesses ask us first, from Gulf shipping to Malayalam and GST."
          categories={KOCHI_ECOM_FAQ_CATEGORIES}
          items={KOCHI_ECOM_FAQ_ITEMS}
        />

        {/* ── 13. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO LAUNCH"
          headline="Your Kochi Store, Live in 7 Days"
          sub="FactoryJet has worked with 500+ businesses in India, the US, the UK and the UAE. Tell us what you sell and where your buyers live. We will recommend a platform, fix the price for each phase in writing and show you a draft of your store before you sign."
          primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'View Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price per phase. 7-day delivery. UPI, COD and Gulf-ready checkout. Your code, your accounts, from day one."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
