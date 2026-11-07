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
  title: 'Ecommerce Development in Hyderabad | FactoryJet',
  description:
    'Ecommerce development in Hyderabad for pearl jewellers, Pochampally ikat weavers, pharma suppliers and HITEC City D2C brands. Shopify, UPI, GST. 7-day delivery.',
  keywords: [
    'ecommerce development company hyderabad',
    'ecommerce website development hyderabad',
    'shopify development hyderabad',
    'woocommerce development hyderabad',
    'online store development hyderabad',
    'custom ecommerce development hyderabad',
    'ecommerce website cost hyderabad',
    'd2c website hyderabad',
    'razorpay shopify hyderabad',
    'b2b ecommerce hyderabad',
    'pearl jewellery ecommerce hyderabad',
    'pharma ecommerce hyderabad',
    'ecommerce agency hyderabad',
    'hitec city ecommerce',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce Development Company in Hyderabad | FactoryJet',
    description:
      'Hyderabad ecommerce stores: pearls and bangles from the old city, ikat sarees, food brands, and B2B portals for pharma distributors. 7-day delivery.',
    url: 'https://factoryjet.com/services/ecommerce-development/hyderabad',
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
    title: 'Ecommerce Development Hyderabad | FactoryJet',
    description:
      'Hyderabad ecommerce: pearl, ikat, food and pharma B2B stores with UPI, COD, Telugu and GST.',
    images: ['https://factoryjet.com/images/services/card-ecommerce.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ecommerce-development/hyderabad',
    languages: ecommerceCityAlternatesIN['hyderabad'],
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
  '@id': 'https://factoryjet.com/services/ecommerce-development/hyderabad#webpage',
  url: 'https://factoryjet.com/services/ecommerce-development/hyderabad',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce Development Hyderabad',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Ecommerce Development',
  areaServed: {
    '@type': 'City',
    name: 'Hyderabad',
    '@id': 'https://www.wikidata.org/wiki/Q1361', // Wikidata label: Hyderabad (capital of Telangana, India)
  },
  description:
    'Ecommerce development for Hyderabad businesses: Shopify and WooCommerce stores for pearl jewellers, ikat and handloom sellers and food brands, B2B ordering portals for pharma distributors, GST invoicing. Lighthouse 95+.',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
  name: 'FactoryJet Ecommerce Development Hyderabad',
  url: 'https://factoryjet.com/services/ecommerce-development/hyderabad',
  image: 'https://factoryjet.com/logo.png',
  description:
    'Ecommerce development company serving Hyderabad and Secunderabad businesses. Shopify, WooCommerce and custom builds with Razorpay, UPI, COD and GST invoicing. 7-day delivery.',
  areaServed: [
    'HITEC City', 'Madhapur', 'Gachibowli', 'Banjara Hills',
    'Jubilee Hills', 'Secunderabad', 'Kukatpally', 'Ameerpet',
  ],
  
};

/* ─────────────────────────────────────────────────────────────────────────────
   Journey Stages
───────────────────────────────────────────────────────────────────────────── */

const HYDERABAD_ECOM_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Catalogue and Buyer Review',
    description:
      'We go through what you sell and who buys it: city shoppers, NRIs, kirana stores or pharmacies. Pearls need grading details, sarees need weave notes, pharma needs licence checks. The platform follows from that.',
  },
  {
    number: '02',
    title: 'Design on Your Products',
    description:
      'We design home, category, product and checkout screens with your real photos and prices, phone first. You approve layouts, language labels and trust details before code begins.',
  },
  {
    number: '03',
    title: 'Build and Integrations',
    description:
      'Store build, Razorpay for UPI, cards, wallets and COD, GST invoices with HSN codes, Shiprocket or a cross-border courier, and catalogue import. B2B portals get buyer logins and price lists.',
  },
  {
    number: '04',
    title: 'Testing Before Launch',
    description:
      'We place orders with each payment method, check invoices and courier labels, and test mobile speed with Lighthouse. Target: 90+ and LCP under 2.5 seconds.',
  },
  {
    number: '05',
    title: 'Launch and Training',
    description:
      'We switch the domain without downtime, submit the sitemap, hand over code and logins, and train your staff. Defects in what we built are fixed free during the agreed cover period.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ
───────────────────────────────────────────────────────────────────────────── */

const HYDERABAD_ECOM_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'platform',  label: 'Platform & Tech' },
  { key: 'india',     label: 'India-Specific' },
  { key: 'seo',       label: 'Speed & SEO' },
  { key: 'trust',     label: 'Process & Ownership' },
];

const HYDERABAD_ECOM_FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How long does a Hyderabad ecommerce store take to build?',
    answer:
      'A standard Shopify or WooCommerce store goes live in 7 days once products, photos and gateway approval are ready. A custom theme takes 3 to 5 weeks. B2B pharma portals or stores with subscriptions take 5 to 8 weeks, and custom platforms take 8 to 14 weeks.',
  },
  {
    category: 'pricing',
    question: 'What does ecommerce development cost in Hyderabad?',
    answer:
      'The cost depends on what the store needs. In Hyderabad the main factors are NRI selling with international shipping, B2B buyer pricing, licence checks for pharma buyers, Telugu or Urdu storefronts and the size of the catalogue. We give a fixed written price after a scoping call.',
  },
  {
    category: 'pricing',
    question: 'How is payment for the build structured?',
    answer:
      'In phases. Each phase, such as the retail store or a B2B portal, has a written scope and a fixed price that you sign before it begins. NEFT, RTGS and UPI all work. There are no hourly charges.',
  },
  {
    category: 'pricing',
    question: 'Can I try the store before committing?',
    answer:
      'Yes. We build a draft using some of your real products and show you browsing, cart and checkout working. Test it on your own phone. If it does not feel right, there is no contract and no payment.',
  },
  {
    category: 'platform',
    question: 'Which platform is best for a pearl or bangle business?',
    answer:
      'Shopify suits most. It handles variants like pearl size, colour and strand length, supports video and certificate images, and takes UPI, COD and international cards. If you also sell wholesale to other jewellers, we add a login-only trade catalogue.',
  },
  {
    category: 'platform',
    question: 'Can a pharma distributor take orders from pharmacies online?',
    answer:
      'Yes. Each pharmacy, clinic or hospital registers with its drug licence and GSTIN, then sees its own rates, batch and expiry details and stock. Orders produce GST invoices and can export to your billing software. Selling prescription drugs to consumers needs legal advice before any build.',
  },
  {
    category: 'platform',
    question: 'Do you set up UPI, cards and COD?',
    answer:
      'Yes. Razorpay is our default gateway, with UPI, cards, net banking, wallets and EMI. We can connect PayU, CCAvenue or PhonePe if you already use one. COD can be limited by order value or pincode.',
  },
  {
    category: 'platform',
    question: 'Can my store sync with Amazon, Flipkart and Meesho?',
    answer:
      'Yes. A multichannel tool such as Unicommerce or EasyEcom connects your store to your marketplace accounts. Stock and prices stay aligned and orders collect in one dashboard, so a saree that sells on Flipkart is marked sold on your store too.',
  },
  {
    category: 'india',
    question: 'How is GST handled on a Hyderabad store?',
    answer:
      'Orders within Telangana carry CGST and SGST, and orders to other states carry IGST. The store applies the right split automatically, prints HSN codes and lets business buyers add a GSTIN. Exports line up with GSTR-1 and can sync with Tally or Zoho Books.',
  },
  {
    category: 'india',
    question: 'Which couriers should a Hyderabad store use?',
    answer:
      'Most stores start on Shiprocket, which gives Delhivery, Blue Dart, Xpressbees, Ekart and others in one account, with returns handled. Pearls and gold need insured shipping. For same-day delivery inside Hyderabad, a local partner such as Porter works for food and gifts.',
  },
  {
    category: 'india',
    question: 'Can my store be in Telugu or Urdu?',
    answer:
      'Yes. A Telugu or Urdu version can sit next to English on its own URL. Urdu needs right-to-left layout, which we build and test properly. We check fonts on low-cost Android phones and recommend that product text is written by a native speaker.',
  },
  {
    category: 'india',
    question: 'How do I sell to NRI buyers in the US and Gulf?',
    answer:
      'Shopify Markets shows prices in dollars or dirhams and handles international checkout. We add a cross-border courier, such as Shiprocket X or DHL, and show duties and delivery times before payment. Festive and wedding buyers order early, so clear dispatch dates matter.',
  },
  {
    category: 'seo',
    question: 'Will my store rank for Hyderabad searches?',
    answer:
      'It can, if the basics are right. We add product and breadcrumb schema, clean titles, canonical tags and a sitemap from launch. If you have a shop near Charminar or in Banjara Hills, we link the store to your Google Business Profile.',
  },
  {
    category: 'seo',
    question: 'Do you check speed before handover?',
    answer:
      'Yes. We test the home, category and product pages on mobile with Lighthouse and share the report. We aim for 90+ and LCP under 2.5 seconds. Image sizes and extra apps cause most slowdowns.',
  },
  {
    category: 'seo',
    question: 'Can you fix a Hyderabad store that is slow?',
    answer:
      'Yes. We audit your slowest pages and list what slows them: large images, unused apps, theme code and widgets. You get a ranked fix list with a fixed price. Removing apps you no longer use often gives the biggest gain.',
  },
  {
    category: 'seo',
    question: 'Does an Urdu or Telugu version slow the store down?',
    answer:
      'Not if it is built well. We load only the fonts each language needs, keep both versions on the same fast theme and serve images at the right size. Speed is tested on each language before launch.',
  },
  {
    category: 'trust',
    question: 'Will I own the store and code?',
    answer:
      'Yes. The store, domain, payment and courier accounts are registered to your business, and you receive the code repository and every login. Hosting and app bills can sit in your accounts at cost. You can switch developers at any time.',
  },
  {
    category: 'trust',
    question: 'What is included at handover?',
    answer:
      'Training for your team on products, prices, orders, returns and B2B accounts, plus a handover file with every login, integration contacts and a first-month checklist.',
  },
  {
    category: 'trust',
    question: 'What support is there after launch?',
    answer:
      'Defects in our build are fixed within the build price for a cover period agreed upfront. After that, support is optional. Each change gets a quote for you to approve, and there is no monthly minimum.',
  },
  {
    category: 'trust',
    question: 'Can my team run the store themselves?',
    answer:
      'Yes. On Shopify, adding products, changing prices, creating Ramzan or Diwali offers and processing orders need no coding. We set up staff accounts and record short videos of the tasks they do most.',
  },
  {
    category: 'pricing',
    question: 'Who is the best ecommerce development company in Hyderabad?',
    answer:
      'A strong ecommerce website development company in Hyderabad should say who writes the code, fix the price in writing and hand you full ownership at launch. FactoryJet does all three for jewellers, weavers, distributors and D2C brands, and builds a draft before you sign. Ask the same of any ecommerce solution company in Hyderabad.',
  },
  {
    category: 'pricing',
    question: 'Should I hire an ecommerce developer in Hyderabad or an agency?',
    answer:
      'One developer can set up a simple store. Selling well also needs design, payments, couriers, GST and SEO, plus language work for Telugu or Urdu, which rarely sits with one person. A small senior team covers it at a fixed price. If you hire an ecommerce developer in Hyderabad, test their live stores on your phone first.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HYDERABAD_ECOM_FAQ_ITEMS.map((item) => ({
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
  '@id': 'https://factoryjet.com/services/ecommerce-development/hyderabad#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ecommerce-development/hyderabad',
};

export default function HyderabadEcommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="hyderabad-ecom-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="hyderabad-ecom-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="hyderabad-ecom-local-schema"
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
          { name: 'Hyderabad', url: 'https://factoryjet.com/services/ecommerce-development/hyderabad' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'Ecommerce Development', url: 'https://factoryjet.com/services/ecommerce-development' },
          { name: 'Hyderabad', url: 'https://factoryjet.com/services/ecommerce-development/hyderabad' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="services_ecommerce_development_hyderabad_hero" />}
          eyebrow="ECOMMERCE DEVELOPMENT · HYDERABAD"
          headline="Ecommerce Development in Hyderabad: Store Live in 7 Days"
          lead="FactoryJet builds online stores for Hyderabad pearl jewellers, Pochampally ikat weavers and food brands, plus B2B ordering portals for pharma distributors. Telugu or Urdu storefronts on request, UPI and COD at checkout, Lighthouse 90+ on mobile. 7-day delivery."
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
          description="We have shipped stores and B2B portals for businesses in India, the US, the UK and the UAE. Hyderabad clients get the same terms: fixed price per phase, complete code ownership, and 7-day delivery on standard stores."
        />

        {/* ── 4. PLATFORM EXPLANATION ──────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="ECOMMERCE DEVELOPMENT · HYDERABAD"
          headline="Which Platform Suits a Hyderabad Business"
          lead="A Pathergatti pearl shop selling to NRIs in Dallas, a Begum Bazaar wholesaler supplying kirana stores and a Gachibowli fitness brand on subscription each need a different setup. We study the catalogue and the buyer first, then name a platform and a fixed price."
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
                Hyderabad has two kinds of online buyer. In HITEC City and Gachibowli, tech workers order everything on apps and leave any store that feels slow or clumsy. In the old city and across Telangana, buyers want to see the real product, check the price on WhatsApp and often pay on delivery. A store has to work for both without feeling built for neither.
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
                  Pearls, ikat and biryani sell on trust. The store has to prove the product is real.
                </p>
              </div>

              <p>
                We build Hyderabad stores with close-up photos and video, clear grading for pearls, weave and fabric details for sarees, and FSSAI and shelf-life details for food. Checkout leads with UPI and keeps COD with sensible limits. B2B buyers, such as pharmacies ordering from a distributor, get a login with their own rates.
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
                  Hyderabad platform guide
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
                  We match the platform to your products, not to the biggest invoice.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 5. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Hyderabad Businesses Choose FactoryJet"
          lead="Hyderabad owners want to know three things before they start: the final price, the launch date and who owns the store. Each phase gets a fixed price in writing, standard stores get 7-day delivery in the agreement, and you see a working draft on your own products before you sign."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing.',
              body: 'A standard Shopify or WooCommerce store for a Hyderabad brand goes live in 7 days once products, photos and gateway approval are with us. The date is written into the agreement. 97% of our builds have shipped on time.',
            },
            {
              icon: '📱',
              title: 'Built for both halves of the city.',
              body: 'Fast enough for an app-native buyer in Madhapur, clear enough for a first-time online buyer in Secunderabad. We design at 375px first, with large photos, UPI up front and WhatsApp a tap away.',
            },
            {
              icon: '📋',
              title: 'Fixed price. Agreed before we start.',
              body: 'Before each phase begins, scope and price are agreed in writing. You will not be billed by the hour or surprised at launch. Support after go-live is optional, with each change quoted first.',
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How a Hyderabad Store Gets Built"
          lead="Platform first, design on your products next, then real test orders on every payment and courier before we go live."
          stages={HYDERABAD_ECOM_STAGES}
          closingNote="5 STAGES · TELUGU OR URDU READY · UPI + COD + GST · LIGHTHOUSE 90+ · CODE IN YOUR NAME"
        />

        {/* ── 7. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="HYDERABAD ECOMMERCE MARKET"
          headline="What Hyderabad Sells Online"
          leadParagraphs={[
            "Hyderabad is known as the City of Pearls, and the shops of Pathergatti and the lanes around Charminar still trade pearls, along with the lac bangles of Laad Bazaar. Telangana's handlooms, Pochampally ikat and Gadwal sarees among them, draw buyers across India and abroad. These products sell on trust, so the store has to show grading, weave and origin clearly.",
            'The city is also a large pharma and life sciences base, from bulk drug makers to the research firms of Genome Valley. Distributors here serve pharmacies, hospitals and clinics across South India, and many are moving their phone and WhatsApp orders into login-only portals that check licences and raise GST invoices automatically. Begum Bazaar traders face a similar shift with their kirana and retail buyers.',
            'In the west of the city, HITEC City, Madhapur and Gachibowli hold a large tech workforce that buys fitness gear, gadgets, fashion and food online. Hyderabadi food travels well too: biryani masalas, pickles, Osmania biscuits and festive sweets ship across India, with peaks around Ramzan, Sankranti and Diwali. We build for each of these buyers differently.',
          ]}
          stats={[
            {
              value: '1M+',
              label: 'IT professionals in HITEC City: one of India\'s most digitally sophisticated consumer bases',
              sourceUrl: 'https://www.ibef.org/states/telangana',
              sourceLabel: 'IBEF Telangana',
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
          eyebrow="HYDERABAD × ECOMMERCE"
          headline="Hyderabad Sectors We Build For"
          lead="From pearl shops near Charminar to pharma distributors in the industrial belts and D2C brands in Gachibowli, these are the six sectors behind most Hyderabad briefs."
          sectors={[
            {
              name: 'Pearls & Jewellery',
              description:
                'Pearl and bangle sellers need grading details, close-up video, certificate display, insured shipping and NRI checkout. Gold pieces need HUID and price breakups.',
              example:
                'Pearl jewellers in Pathergatti, Laad Bazaar bangle makers, gold and silver jewellers.',
            },
            {
              name: 'Pharma & Life Sciences',
              description:
                'Distributors and makers sell to pharmacies, hospitals and labs. Portals need licence capture, batch and expiry details, buyer-wise pricing and GST invoicing.',
              example:
                'Pharma distributors, surgical and lab supply firms, nutraceutical brands.',
            },
            {
              name: 'Tech D2C & Fitness',
              description:
                'HITEC City buyers expect app-level speed. Gadget and fitness brands need spec comparison, EMI, subscriptions and fast delivery inside the city.',
              example:
                'Fitness equipment brands, gadget accessory labels, supplement makers.',
            },
            {
              name: 'Ikat, Handloom & Ethnic Wear',
              description:
                'Pochampally and Gadwal weaves sell on detail. Stores need weave close-ups, drape video, blouse options, Telugu labels and NRI shipping.',
              example:
                'Ikat saree weavers and cooperatives, Gadwal and Narayanpet sellers, ethnic wear boutiques.',
            },
            {
              name: 'Hyderabadi Food Brands',
              description:
                'Masalas, pickles, biscuits and sweets ship nationwide. Stores need FSSAI details, shelf-life notes, festival hampers and safe packaging rules for long routes.',
              example:
                'Biryani masala brands, pickle makers, bakeries and sweet shops.',
            },
            {
              name: 'Wholesale & Building Supplies',
              description:
                'Begum Bazaar traders and construction suppliers sell to shops and contractors. Portals need price slabs, bulk quotes, credit terms and GST B2B invoices.',
              example:
                'Kirana wholesalers, hardware and sanitaryware suppliers, building material dealers.',
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
          headline="What founders say after their launch"
        />

        {/* ── 12. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="What Hyderabad Founders Ask Before They Sign"
          lead="The questions Hyderabad jewellers, weavers, distributors and D2C founders ask on a first call, answered without jargon."
          categories={HYDERABAD_ECOM_FAQ_CATEGORIES}
          items={HYDERABAD_ECOM_FAQ_ITEMS}
        />

        {/* ── 13. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO LAUNCH"
          headline="Your Hyderabad Store, Live in 7 Days"
          sub="500+ businesses in India, the US, the UK and the UAE have built with FactoryJet. Tell us what you sell in Hyderabad and who buys it. We will recommend a platform, price each phase in writing and show you a draft of the store before you sign."
          primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'View Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price per phase. 7-day delivery. UPI, COD and GST set up. Your store, your code, your accounts."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
