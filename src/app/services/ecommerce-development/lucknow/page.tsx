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
  title: 'Ecommerce Development in Lucknow | FactoryJet',
  description:
    'Ecommerce development in Lucknow for chikankari brands, Awadhi food makers, attar sellers and UP wholesalers. Shopify, UPI, COD, Hindi and GST. 7-day delivery.',
  keywords: [
    'ecommerce development company lucknow',
    'ecommerce website development lucknow',
    'shopify development lucknow',
    'woocommerce development lucknow',
    'online store development lucknow',
    'custom ecommerce development lucknow',
    'ecommerce website cost lucknow',
    'd2c website lucknow',
    'razorpay shopify lucknow',
    'chikan embroidery ecommerce lucknow',
    'awadhi food ecommerce lucknow',
    'jewellery ecommerce website lucknow',
    'b2b ecommerce lucknow',
    'agri ecommerce uttar pradesh',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce Development Company in Lucknow | FactoryJet',
    description:
      'Lucknow ecommerce stores: chikankari and zardozi, Awadhi food and mangoes, attar, plus wholesale ordering for UP traders. 7-day delivery.',
    url: 'https://factoryjet.com/services/ecommerce-development/lucknow',
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
    title: 'Ecommerce Development Lucknow | FactoryJet',
    description:
      'Lucknow ecommerce: chikankari, food and wholesale stores with Hindi, Urdu, UPI and COD.',
    images: ['https://factoryjet.com/images/services/card-ecommerce.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ecommerce-development/lucknow',
    languages: ecommerceCityAlternatesIN['lucknow'],
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
  '@id': 'https://factoryjet.com/services/ecommerce-development/lucknow#webpage',
  url: 'https://factoryjet.com/services/ecommerce-development/lucknow',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce Development Lucknow',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Ecommerce Development',
  areaServed: {
    '@type': 'City',
    name: 'Lucknow',
    '@id': 'https://www.wikidata.org/wiki/Q47916', // Wikidata label: Lucknow (capital of Uttar Pradesh, India)
  },
  description:
    'Ecommerce development for Lucknow businesses: Shopify and WooCommerce stores for chikankari, zardozi, Awadhi food and attar brands, wholesale portals for Uttar Pradesh traders, Hindi and Urdu storefronts, GST invoicing. Lighthouse 95+.',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
  name: 'FactoryJet Ecommerce Development Lucknow',
  url: 'https://factoryjet.com/services/ecommerce-development/lucknow',
  image: 'https://factoryjet.com/logo.png',
  description:
    'Ecommerce development company serving Lucknow businesses in Hazratganj, Aminabad, Chowk and Gomti Nagar. Shopify, WooCommerce and custom builds with Razorpay, UPI, COD and GST invoicing. 7-day delivery.',
  areaServed: [
    'Hazratganj', 'Gomti Nagar', 'Indira Nagar', 'Aliganj', 'Mahanagar',
    'Chinhat', 'Alambagh', 'Vikas Nagar',
  ],
  
};

/* ─────────────────────────────────────────────────────────────────────────────
   Journey Stages
───────────────────────────────────────────────────────────────────────────── */

const LUCKNOW_ECOM_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Buyers and Platform',
    description:
      'We map your buyers: Lucknow shoppers, the rest of India, the diaspora in the Gulf, UK and US, or shops across UP. That decides retail, wholesale or both, and the platform.',
  },
  {
    number: '02',
    title: 'Design on Your Products',
    description:
      'Figma screens for home, collection, product and checkout, built with your real photos and prices, phone first. You approve stitch close-ups, size charts, language labels and WhatsApp placement.',
  },
  {
    number: '03',
    title: 'Build and Integrations',
    description:
      'Store build, Razorpay for UPI, cards and COD, international payments where needed, GST invoices, Shiprocket and cross-border couriers, and product import from your sheets or billing software.',
  },
  {
    number: '04',
    title: 'Testing',
    description:
      'We place test orders with each payment option, confirm COD messages, check invoices and labels, and test speed on mobile against a Lighthouse 90+ target.',
  },
  {
    number: '05',
    title: 'Launch and Handover',
    description:
      'Domain switch with no downtime, sitemap submitted, code and logins handed over, staff trained. Defects in our build are fixed free during the cover period agreed upfront.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ
───────────────────────────────────────────────────────────────────────────── */

const LUCKNOW_ECOM_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'platform',  label: 'Platform & Tech' },
  { key: 'india',     label: 'India-Specific' },
  { key: 'seo',       label: 'Speed & SEO' },
  { key: 'trust',     label: 'Process & Ownership' },
];

const LUCKNOW_ECOM_FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How long does it take to build a store in Lucknow?',
    answer:
      'A standard Shopify or WooCommerce store goes live in 7 days once your products, photos and payment gateway approval are ready. A custom theme takes 3 to 5 weeks. Wholesale portals and made-to-order setups take 5 to 8 weeks, and custom platforms take 8 to 14 weeks.',
  },
  {
    category: 'pricing',
    question: 'How much does an ecommerce website cost in Lucknow?',
    answer:
      'The price follows the scope. For Lucknow businesses the main factors are made-to-order options for chikankari, wholesale price lists, diaspora shipping, Hindi or Urdu storefronts and seasonal stock rules for food. We give a fixed price in writing after a short call.',
  },
  {
    category: 'pricing',
    question: 'Can I pay for the build in parts?',
    answer:
      'Yes. We split the work into phases, each with a written scope and fixed price you sign before it begins. For example, the retail store first and a wholesale portal next. Pay by NEFT, RTGS or UPI, with no hourly charges.',
  },
  {
    category: 'pricing',
    question: 'Can I see the store before I sign?',
    answer:
      'Yes. We build a working draft with some of your real products and show you browsing, cart and payment. You can try it on your own phone and share it with your family. If you do not like it, you pay nothing.',
  },
  {
    category: 'platform',
    question: 'Which platform suits a chikankari brand?',
    answer:
      'Shopify suits most. It handles fabric, colour and size variants, made-to-order notes and video, and takes UPI, COD and international cards. If you also sell to boutiques and shops, we add a trade price list behind a login.',
  },
  {
    category: 'platform',
    question: 'How can buyers trust that my chikan work is hand-made?',
    answer:
      'Show it. We add close-up photos and short video of the stitch, notes on the stitch types used, the time each piece takes, and details of the workshop. A clear returns policy also helps, because a buyer who can return a piece is more willing to try.',
  },
  {
    category: 'platform',
    question: 'Do you set up UPI, cards and COD?',
    answer:
      'Yes. Razorpay is our default gateway, covering UPI, cards, net banking, wallets and EMI. We can connect PayU, CCAvenue or PhonePe if you already use one. COD can be capped by order value or pincode, and confirmed by WhatsApp before dispatch.',
  },
  {
    category: 'platform',
    question: 'Can my wholesale business take orders from shops across UP?',
    answer:
      'Yes. Approved shops log in to see their own rates, set or carton quantities and credit limit, and reorder past orders quickly. Every order raises a GST invoice, and orders can export to Tally or Busy.',
  },
  {
    category: 'india',
    question: 'How is GST handled on a Lucknow store?',
    answer:
      'Orders within Uttar Pradesh carry CGST and SGST, and orders to other states carry IGST. The store applies the right split, prints HSN codes and lets business buyers add a GSTIN. Exports for diaspora orders use zero-rated invoices.',
  },
  {
    category: 'india',
    question: 'Which couriers should a Lucknow store use?',
    answer:
      'Shiprocket covers most stores, with Delhivery, Blue Dart, Xpressbees, Ekart and others in one account. Smaller UP towns can take longer, so we show realistic delivery dates by pincode. For overseas orders, we connect a cross-border courier.',
  },
  {
    category: 'india',
    question: 'Can my store be in Hindi or Urdu?',
    answer:
      'Yes. Hindi and Urdu versions can run next to English, each on its own URL. Urdu needs a right-to-left layout, which we build and test. We check fonts on low-cost Android phones and recommend product text is written by a person, not a translation tool.',
  },
  {
    category: 'india',
    question: 'How do I reduce COD returns on a Lucknow store?',
    answer:
      'Confirm every COD order on WhatsApp before it ships, ask for a small advance on high-value orders, and switch COD off for pincodes with poor delivery history. A clear returns policy at checkout also cuts refusals at the door.',
  },
  {
    category: 'seo',
    question: 'Will my store rank for Lucknow and chikankari searches?',
    answer:
      'It can. We add product and breadcrumb schema, clean titles, canonical tags and a sitemap from launch. Guides on stitch types and care help you rank for chikankari searches. A shop in Hazratganj or Chowk gets linked to your Google Business Profile.',
  },
  {
    category: 'seo',
    question: 'Do you test speed before handover?',
    answer:
      'Yes. We test the main pages on mobile with Lighthouse and share the report, aiming for 90+ and LCP under 2.5 seconds. Close-up embroidery photos need careful sizing, and that is where most of the work goes.',
  },
  {
    category: 'seo',
    question: 'Can you fix a slow store?',
    answer:
      'Yes. We audit the slowest pages, find the causes, such as large images, unused apps or heavy themes, and give a fixed price for the fixes in order of impact. Removing old apps often makes the biggest difference.',
  },
  {
    category: 'seo',
    question: 'Do Hindi or Urdu pages need separate SEO work?',
    answer:
      'A little. Each language needs its own URL, titles written in that language and hreflang tags, so Google shows the right version to the right searcher. We set these up at launch, and they open up searches most competitors ignore.',
  },
  {
    category: 'trust',
    question: 'Do I own the store and the code?',
    answer:
      'Yes. The store, domain, payment and courier accounts are in your business name, and you get the code repository and every login. Hosting and app bills can run in your accounts at cost. You can change developers at any time.',
  },
  {
    category: 'trust',
    question: 'What happens at handover?',
    answer:
      'We train your team on adding products, updating prices, handling orders, COD confirmations, returns and wholesale accounts. You get a document with every login, integration contacts and a first-month checklist.',
  },
  {
    category: 'trust',
    question: 'What support do I get after launch?',
    answer:
      'Defects in our work are fixed within the build price for a cover period agreed before we start. After that, support is optional. Each change is quoted and approved by you first, and there is no monthly minimum.',
  },
  {
    category: 'trust',
    question: 'Can my staff run the store without a developer?',
    answer:
      'Yes. On Shopify, adding new kurtas, changing prices, setting up Eid or Diwali offers and processing orders need no coding. We set up staff logins and record short videos of the tasks they repeat.',
  },
  {
    category: 'pricing',
    question: 'Who is the best ecommerce development company in Lucknow?',
    answer:
      'A good ecommerce website development company in Lucknow should tell you who writes the code, fix the price in writing and give you full ownership at the end. FactoryJet does all three for chikankari houses, food brands and wholesalers, and builds a draft before you sign. Test any ecommerce solution company in Lucknow on the same points.',
  },
  {
    category: 'pricing',
    question: 'Should I hire an ecommerce developer in Lucknow or an agency?',
    answer:
      'One developer can launch a simple store. A store that sells across UP and abroad also needs design, payments, couriers, GST, language work and SEO, which is a lot for one person. A small senior team covers it at a fixed price. If you hire an ecommerce developer in Lucknow, check their past stores on your phone first.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: LUCKNOW_ECOM_FAQ_ITEMS.map((item) => ({
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
  '@id': 'https://factoryjet.com/services/ecommerce-development/lucknow#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ecommerce-development/lucknow',
};

export default function LucknowEcommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="lucknow-ecom-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="lucknow-ecom-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="lucknow-ecom-local-schema"
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
          { name: 'Lucknow', url: 'https://factoryjet.com/services/ecommerce-development/lucknow' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'Ecommerce Development', url: 'https://factoryjet.com/services/ecommerce-development' },
          { name: 'Lucknow', url: 'https://factoryjet.com/services/ecommerce-development/lucknow' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="services_ecommerce_development_lucknow_hero" />}
          eyebrow="ECOMMERCE DEVELOPMENT · LUCKNOW"
          headline="Ecommerce Development in Lucknow: Store Live in 7 Days"
          lead="FactoryJet builds online stores for Lucknow chikankari and zardozi houses, Awadhi food brands and attar sellers, and wholesale portals for traders who supply shops across Uttar Pradesh. Hindi or Urdu storefronts, UPI and COD at checkout, Lighthouse 90+. 7-day delivery."
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
          description="Stores and wholesale portals for businesses in India, the US, the UK and the UAE. Lucknow clients get a fixed price per phase, the complete code and every login, and 7-day delivery on standard stores."
        />

        {/* ── 4. PLATFORM EXPLANATION ──────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="ECOMMERCE DEVELOPMENT · LUCKNOW"
          headline="Which Store Suits a Lucknow Business"
          lead="A Chowk chikankari workshop selling kurtas to Dubai, an Aminabad wholesaler supplying shops in Kanpur and Gorakhpur and a Gomti Nagar food brand shipping kebab masalas need different builds. We look at your buyers and products first, then recommend a platform and a fixed price."
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
                Chikankari buyers have been burned by machine copies sold as hand work. Food buyers worry about freshness. Wholesale buyers want rates without five phone calls. In each case the store has to answer the worry before the buyer asks. That means honest close-ups, stitch and fabric details, clear dispatch dates, and prices that match what the buyer pays.
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
                  Hand-made chikan has to look hand-made on a phone screen, or the sale goes to a copy.
                </p>
              </div>

              <p>
                We build Lucknow stores with close-up photos of the stitch, fabric and work details, size charts for kurtas and sets, and WhatsApp next to the buy button. Checkout leads with UPI and keeps COD with limits, since many UP buyers still prefer it. Wholesale buyers get a login, their own rates and repeat orders without calls.
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
                  Lucknow platform guide
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
                  We recommend what your buyers need, not the costliest stack.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 5. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Lucknow Businesses Choose FactoryJet"
          lead="Lucknow brands tell us the same story: a site that took months and still did not sell. We fix the price per phase in writing, put 7-day delivery for standard stores into the agreement, and build a draft on your own products before you sign anything."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing.',
              body: 'Standard Shopify and WooCommerce stores for Lucknow brands go live in 7 days once products, photos and gateway approval reach us. The date is part of the agreement. We have delivered on time on 97% of builds.',
            },
            {
              icon: '📱',
              title: 'Built for buyers who prefer COD and WhatsApp.',
              body: 'Many UP buyers want to ask a question and pay on delivery. We design at 375px first, put WhatsApp beside the buy button, show COD clearly, and confirm COD orders by message before they ship.',
            },
            {
              icon: '📋',
              title: 'Fixed price. Agreed before we start.',
              body: 'Each phase is scoped and priced in writing before work begins. No hourly billing and no surprise invoice at launch. Support after launch is optional, with every change quoted first.',
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Build a Lucknow Store"
          lead="Platform and buyers first, design with your products second, then test every payment and courier before launch."
          stages={LUCKNOW_ECOM_STAGES}
          closingNote="5 STAGES · HINDI + URDU READY · UPI + COD + GST · LIGHTHOUSE 90+ · YOUR CODE, YOUR ACCOUNTS"
        />

        {/* ── 7. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="LUCKNOW ECOMMERCE MARKET"
          headline="What Lucknow Sells Online"
          leadParagraphs={[
            "Lucknow's best-known product is chikankari, the white-thread hand embroidery that has a GI tag as Lucknow Chikan Craft. Workshops and shops around Chowk and Aminabad supply kurtas, sarees and sets to buyers across India and abroad. Zardozi, the metal-thread work used on bridal and festive wear, comes from the same city. Both face a flood of machine copies, so proof of hand work matters online.",
            "Awadhi food is the city's other export. Kebab and biryani masalas, sweets, and Malihabad's Dussehri mangoes in season are sent across India and to families abroad. Attar from nearby Kannauj sells through Lucknow shops too. These products need shelf-life notes, seasonal stock and packaging rules that suit long courier routes in summer heat.",
            "As the capital of Uttar Pradesh, Lucknow is also a trading base for India's most populous state. Wholesalers supply shops in Kanpur, Varanasi, Gorakhpur and smaller towns, mostly by phone. Buyers across UP often prefer COD and like to confirm details on WhatsApp. We build stores and wholesale portals around those habits, in Hindi or Urdu where it helps.",
          ]}
          stats={[
            {
              value: '24 Cr+',
              label: "People in Uttar Pradesh: India's largest state and Lucknow's ecommerce hinterland",
              sourceUrl: 'https://www.ibef.org/states/uttar-pradesh',
              sourceLabel: 'IBEF Uttar Pradesh',
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
          eyebrow="LUCKNOW × ECOMMERCE"
          headline="Lucknow Sectors We Build For"
          lead="From Chowk chikankari workshops to Aminabad wholesalers and Awadhi food brands, these are the six sectors behind most Lucknow store briefs."
          sectors={[
            {
              name: 'Chikankari & Zardozi',
              description:
                'Hand embroidery sells on proof. Stores need stitch close-ups, fabric details, size charts, made-to-order options and international shipping for diaspora buyers.',
              example:
                'Chikankari workshops, zardozi bridal houses, ethnic wear labels in Hazratganj.',
            },
            {
              name: 'Jewellery & Silver',
              description:
                'Aminabad and Chowk jewellers need weight and purity details, HUID on gold, insured shipping and COD limits on high-value orders.',
              example:
                'Gold jewellers, silver ornament makers, artificial jewellery wholesalers.',
            },
            {
              name: 'Awadhi Food & Sweets',
              description:
                'Masalas, sweets and ready-to-cook products ship across India. Stores need FSSAI details, shelf-life notes, festival gift boxes for Eid and Diwali, and summer packaging rules.',
              example:
                'Masala and spice brands, sweet shops, ready-to-cook Awadhi food makers.',
            },
            {
              name: 'Mangoes & Farm Produce',
              description:
                'Malihabad Dussehri and other UP produce sell in short seasons. Stores need pre-orders, delivery zones, dispatch dates and stock that switches off when the season ends.',
              example:
                'Mango orchards and traders, organic farm brands, jaggery and honey producers.',
            },
            {
              name: 'Attar & Fragrance',
              description:
                'Attar and natural perfume sellers need scent notes, sample sizes, gift sets and shipping rules for oils, including limits on some overseas routes.',
              example:
                'Attar houses, natural perfume brands, incense and fragrance makers.',
            },
            {
              name: 'Wholesale & Distribution',
              description:
                'Lucknow traders supply shops across UP. Portals need login-only price lists, credit limits, set or carton quantities and GST B2B invoices.',
              example:
                'Garment and textile wholesalers, FMCG distributors, pharma and medical supply stockists.',
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
          headline="What founders say after their store is live"
        />

        {/* ── 12. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="What Lucknow Owners Ask Before Signing"
          lead="The questions Lucknow chikankari houses, food brands and wholesalers ask us first, answered in plain words."
          categories={LUCKNOW_ECOM_FAQ_CATEGORIES}
          items={LUCKNOW_ECOM_FAQ_ITEMS}
        />

        {/* ── 13. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO LAUNCH"
          headline="Your Lucknow Store, Live in 7 Days"
          sub="500+ businesses in India, the US, the UK and the UAE have built with FactoryJet. Tell us what you sell and who buys it. We will recommend a platform, put the price for each phase in writing and show you a draft of your store before you sign."
          primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'View Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price per phase. 7-day delivery. UPI, COD and WhatsApp built in. The code and every account are yours."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
