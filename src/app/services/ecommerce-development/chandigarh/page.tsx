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
  title: 'Ecommerce Development in Chandigarh | FactoryJet',
  description:
    'Ecommerce development in Chandigarh for Tricity brands, Baddi pharma makers and Ludhiana suppliers. Shopify, WooCommerce, UPI, COD, GST. 7-day delivery.',
  keywords: [
    'ecommerce development company chandigarh',
    'ecommerce website development chandigarh',
    'shopify development chandigarh',
    'woocommerce development chandigarh',
    'online store development chandigarh',
    'custom ecommerce development chandigarh',
    'ecommerce website cost chandigarh',
    'd2c website chandigarh',
    'razorpay shopify chandigarh',
    'pharma ecommerce chandigarh',
    'agri ecommerce punjab',
    'fashion ecommerce chandigarh',
    'b2b ecommerce chandigarh',
    'auto parts ecommerce mohali',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce Development Company in Chandigarh | FactoryJet',
    description:
      'Ecommerce stores for Chandigarh, Mohali and Panchkula: Phulkari and jutti labels, Punjabi food brands, B2B portals for pharma and hosiery. 7-day delivery.',
    url: 'https://factoryjet.com/services/ecommerce-development/chandigarh',
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
    title: 'Ecommerce Development Chandigarh | FactoryJet',
    description:
      'Chandigarh ecommerce: Shopify and WooCommerce stores, diaspora shipping, B2B portals, GST invoicing.',
    images: ['https://factoryjet.com/images/services/card-ecommerce.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ecommerce-development/chandigarh',
    languages: ecommerceCityAlternatesIN['chandigarh'],
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
  '@id': 'https://factoryjet.com/services/ecommerce-development/chandigarh#webpage',
  url: 'https://factoryjet.com/services/ecommerce-development/chandigarh',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce Development Chandigarh',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Ecommerce Development',
  areaServed: {
    '@type': 'City',
    name: 'Chandigarh',
    '@id': 'https://www.wikidata.org/wiki/Q43433', // Wikidata label: Chandigarh (Union Territory, capital of Punjab and Haryana, India)
  },
  description:
    'Ecommerce development for Chandigarh Tricity businesses: Shopify and WooCommerce stores for fashion and food brands, international shipping to the Punjabi diaspora, B2B ordering for pharma and hosiery makers. Lighthouse 95+.',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
  name: 'FactoryJet Ecommerce Development Chandigarh',
  url: 'https://factoryjet.com/services/ecommerce-development/chandigarh',
  image: 'https://factoryjet.com/logo.png',
  description:
    'Ecommerce development company serving Chandigarh, Mohali and Panchkula businesses. Shopify, WooCommerce and custom builds with Razorpay, UPI, COD and GST invoicing. 7-day delivery.',
  areaServed: [
    'Sector 17', 'Sector 22', 'Sector 35', 'IT Park', 'Industrial Area Phase 1',
    'Mohali', 'Panchkula', 'Zirakpur',
  ],
  
};

/* ─────────────────────────────────────────────────────────────────────────────
   Journey Stages
───────────────────────────────────────────────────────────────────────────── */

const CHANDIGARH_ECOM_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Buyers, Markets and Platform',
    description:
      'We map who buys from you: Tricity shoppers, the rest of India, NRIs in Canada and the UK, or trade buyers. That decides the platform, the currencies and the courier mix.',
  },
  {
    number: '02',
    title: 'Design With Your Own Photos',
    description:
      'Figma screens for home, collection, product and checkout, built with your real images and prices. You sign off on layout, size guides, gifting options and trust details before development.',
  },
  {
    number: '03',
    title: 'Build, Payments and Shipping',
    description:
      'Theme or custom build, Razorpay for UPI, cards, wallets and COD, international payments where needed, GST invoices, Shiprocket for India and a cross-border courier for overseas orders.',
  },
  {
    number: '04',
    title: 'Test Orders From Both Sides',
    description:
      'We place orders as a Chandigarh buyer and as an overseas buyer, check invoices, duties messages and labels, and run Lighthouse on mobile against a 90+ target.',
  },
  {
    number: '05',
    title: 'Launch and Handover',
    description:
      'We switch the domain with no downtime, submit the sitemap, hand over the code and every login, and train your staff. Defects in our build are fixed at no extra cost during the agreed cover period.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ
───────────────────────────────────────────────────────────────────────────── */

const CHANDIGARH_ECOM_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'platform',  label: 'Platform & Tech' },
  { key: 'india',     label: 'India-Specific' },
  { key: 'seo',       label: 'Speed & SEO' },
  { key: 'trust',     label: 'Process & Ownership' },
];

const CHANDIGARH_ECOM_FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How long does it take to launch a store in Chandigarh?',
    answer:
      'A standard Shopify or WooCommerce store goes live in 7 days once we have products, photos and gateway approval. A custom theme takes 3 to 5 weeks. Stores with wholesale pricing, subscriptions or a migration take 5 to 8 weeks, and fully custom builds take 8 to 14 weeks.',
  },
  {
    category: 'pricing',
    question: 'What does an ecommerce website cost in Chandigarh?',
    answer:
      'Scope sets the price. For Tricity businesses the main factors are international selling to the diaspora, wholesale price lists, the number of products and variants, and links to billing or ERP software. We give a fixed price in writing after one scoping call.',
  },
  {
    category: 'pricing',
    question: 'How do payments for the build work?',
    answer:
      'The project is split into phases, each with its own scope and fixed price that you sign before we start it. A retail store might be phase one and a trade portal phase two. You pay by NEFT, RTGS or UPI, with no hourly charges.',
  },
  {
    category: 'pricing',
    question: 'We need the store before wedding season. Is that realistic?',
    answer:
      'Yes, if you brief us early. Most Punjabi wedding demand runs from October to February, and NRI buyers order weeks ahead. Brief us at least 8 weeks before you want orders, so there is time to build, get gateway approval and test overseas shipping.',
  },
  {
    category: 'platform',
    question: 'Which platform suits a Phulkari or jutti brand?',
    answer:
      'Shopify for most. It handles colour and size variants, takes UPI and COD in India and cards abroad, and Shopify Markets shows prices in Canadian dollars or pounds. If you sell wholesale to boutiques as well, we add a trade price list behind a login.',
  },
  {
    category: 'platform',
    question: 'Can I sell to buyers in Canada and the UK from Chandigarh?',
    answer:
      'Yes. We set up local currency pricing, a cross-border courier such as Shiprocket X, DHL or Aramex, and clear duty and delivery messages at checkout. We also add size charts in both Indian and overseas sizes, because returns from abroad are slow and costly.',
  },
  {
    category: 'platform',
    question: 'Do you set up UPI, cards and COD?',
    answer:
      'Yes. Razorpay is our default and covers UPI, cards, net banking, wallets and EMI. We can use PayU, CCAvenue or PhonePe instead if you already have an account. COD can be capped by order value or turned off for pincodes with high return rates.',
  },
  {
    category: 'platform',
    question: 'Can a Baddi pharma company take orders from chemists online?',
    answer:
      'Yes, through a login-only trade portal. Each stockist or chemist registers with their drug licence and GSTIN, sees their own rates, checks batch and expiry details, and places repeat orders. Selling prescription medicines straight to consumers needs legal advice before any build.',
  },
  {
    category: 'india',
    question: 'How does GST work for a Chandigarh store?',
    answer:
      'Chandigarh is a Union Territory, so sales within it carry CGST and UTGST rather than SGST. Orders to Mohali in Punjab or Panchkula in Haryana carry IGST. We set these rules in the store so every invoice shows the right split, with HSN codes and buyer GSTIN where given.',
  },
  {
    category: 'india',
    question: 'Which couriers should a Tricity store use?',
    answer:
      'Shiprocket for orders inside India: one account covers Delhivery, Blue Dart, Xpressbees, Ekart and others, with returns handling. For overseas orders we connect a cross-border service. Same-day delivery within the Tricity works through a local partner for food and gifts.',
  },
  {
    category: 'india',
    question: 'Can my store be in Punjabi?',
    answer:
      'Yes. A Punjabi version in Gurmukhi can sit next to English on its own URL, and Hindi can be added too. We test Gurmukhi fonts on budget Android phones before launch, and we recommend a person writes the product copy, since machine translation gets fabric and food terms wrong.',
  },
  {
    category: 'india',
    question: 'Can Ludhiana hosiery makers sell wholesale and retail from one store?',
    answer:
      'Yes. Retail buyers see single-piece prices and pay at checkout. Approved retailers log in to see dozen or size-set pricing, minimum order quantities and credit terms. Both draw from the same stock, so a sale on one side updates the other.',
  },
  {
    category: 'seo',
    question: 'Will my store rank in Chandigarh and Punjab searches?',
    answer:
      'It can if the groundwork is right. We add product and breadcrumb schema, clean titles, canonical tags and a sitemap from day one. If you have a showroom in Sector 17 or Elante, we link the store to your Google Business Profile. Punjabi pages open up searches few rivals target.',
  },
  {
    category: 'seo',
    question: 'Do you test speed before handover?',
    answer:
      'Yes. We test the home, collection and product pages on mobile with Lighthouse and share the results. Our target is 90+, with LCP under 2.5 seconds. Image-heavy fashion stores need the most work, so we size and compress every photo.',
  },
  {
    category: 'seo',
    question: 'Can you speed up a slow Tricity store?',
    answer:
      'Yes. We find what slows each page, such as oversized photos, unused apps, heavy themes or chat widgets, and give you a ranked list of fixes at a fixed price. Often a few changes recover most of the lost speed.',
  },
  {
    category: 'seo',
    question: 'Will big product photos slow my fashion store down?',
    answer:
      'Not if they are handled well. We serve modern image formats at the right size for each screen, load images below the fold only when needed, and keep zoom views sharp without loading them upfront. You keep the detail buyers want.',
  },
  {
    category: 'trust',
    question: 'Do I own my store and its code?',
    answer:
      'Yes, fully. The store, domain, payment and courier accounts are in your business name, and you get the code repository and all admin logins. Hosting and apps can bill your own account at cost. You are free to move to another developer at any time.',
  },
  {
    category: 'trust',
    question: 'How do you hand the store over?',
    answer:
      'We run a training session for your team on products, orders, discounts, returns and international orders. You get a handover file with all logins, each integration contact and a checklist for the first month of trading.',
  },
  {
    category: 'trust',
    question: 'What support is available after launch?',
    answer:
      'Defects in what we built are fixed inside the build price for a cover period agreed upfront. After that, support is optional. You get a quote for each change and approve it before work starts, with no monthly minimum.',
  },
  {
    category: 'trust',
    question: 'Can my staff update products and prices themselves?',
    answer:
      'Yes. On Shopify, adding products, changing prices, running offers and processing orders need no technical skill. We set up staff logins and record short how-to videos for the tasks your team repeats each week.',
  },
  {
    category: 'pricing',
    question: 'Who is the best ecommerce development company in Chandigarh?',
    answer:
      'Measure any ecommerce website development company in Chandigarh against three questions: who writes the code, is the price fixed in writing, and do you own the store at the end. FactoryJet answers yes to the last two, names the engineer, and builds a draft before you sign. Ask any ecommerce solution company in Chandigarh the same.',
  },
  {
    category: 'pricing',
    question: 'Should I hire an ecommerce developer in Chandigarh or use an agency?',
    answer:
      "One developer can launch a simple store. Selling to Punjab and the diaspora also needs design, payments, cross-border shipping, GST and SEO, which is rarely one person's skill set. A small senior team covers it for a fixed price. If you hire an ecommerce developer in Chandigarh, check their past stores on your phone first.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: CHANDIGARH_ECOM_FAQ_ITEMS.map((item) => ({
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
  '@id': 'https://factoryjet.com/services/ecommerce-development/chandigarh#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ecommerce-development/chandigarh',
};

export default function ChandigarhEcommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="chandigarh-ecom-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="chandigarh-ecom-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="chandigarh-ecom-local-schema"
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
          { name: 'Chandigarh', url: 'https://factoryjet.com/services/ecommerce-development/chandigarh' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'Ecommerce Development', url: 'https://factoryjet.com/services/ecommerce-development' },
          { name: 'Chandigarh', url: 'https://factoryjet.com/services/ecommerce-development/chandigarh' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="services_ecommerce_development_chandigarh_hero" />}
          eyebrow="ECOMMERCE DEVELOPMENT · CHANDIGARH"
          headline="Ecommerce Development in Chandigarh: Store Live in 7 Days"
          lead="FactoryJet builds online stores for Tricity fashion and food brands that sell to Punjab and to families in Canada and the UK, plus ordering portals for pharma and hosiery suppliers across the region. UPI, COD and international cards at checkout, Lighthouse 90+ on mobile. 7-day delivery."
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
          description="We have built for businesses across India, the US, the UK and the UAE, from D2C labels to B2B distributors. Tricity clients get the same deal: a fixed price per phase, every line of code handed over, and 7-day delivery."
        />

        {/* ── 4. PLATFORM EXPLANATION ──────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="ECOMMERCE DEVELOPMENT · CHANDIGARH"
          headline="The Right Build for a Chandigarh Business"
          lead="A Sector 17 boutique selling Phulkari dupattas, a Mohali ghee brand shipping to Toronto and a Baddi drug maker taking orders from chemists each need their own setup. We study your buyers and catalogue first, then recommend a platform and a fixed price."
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
                Tricity shoppers spend on quality and expect a store to look the part. Weak photos, a template that feels cheap, or a checkout that fails on the second try will cost you the order. Many of your buyers also live abroad, in Brampton, Surrey or Southall, and they need prices in their currency and a delivery date they can trust.
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
                  For a premium Punjabi brand, the product page is the shop window and the shop counter at once.
                </p>
              </div>

              <p>
                We build Chandigarh stores with large, fast-loading photos, honest stock and delivery details, and a checkout that offers UPI and COD at home and international cards abroad. B2B buyers, from chemists ordering from Baddi to retailers buying Ludhiana knitwear, get a login with their own prices and repeat orders in two taps.
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
                  Chandigarh platform guide
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
                  We recommend what fits your buyers, never the costliest stack.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 5. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Tricity Brands Work With FactoryJet"
          lead="A Tricity store has to look premium, take payments from two continents and ship on time in wedding season. We price each phase in writing, commit to 7-day delivery for standard stores, and show you a working draft built on your own products before any contract."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing.',
              body: 'Standard Shopify and WooCommerce stores for Chandigarh brands go live in 7 days after products, photos and gateway approval arrive. The date is in the agreement. Our on-time record is 97% of builds, and delays nearly always traced back to missing content.',
            },
            {
              icon: '📱',
              title: 'Photos that sell, on a phone, fast.',
              body: 'Premium fashion and food brands need big images, and big images slow a store down. We compress and size every photo for the screen it lands on, design at 375px first, and keep the checkout to a few taps.',
            },
            {
              icon: '📋',
              title: 'Fixed price. Agreed before we start.',
              body: 'Each phase is scoped and priced in writing up front. Nothing is billed by the hour. After launch, support is optional, with each change quoted and approved before work begins.',
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Take a Tricity Store Live"
          lead="We agree the platform, design on your products, then test payments from India and abroad before launch day."
          stages={CHANDIGARH_ECOM_STAGES}
          closingNote="5 STAGES · DOMESTIC + DIASPORA CHECKOUT · CGST + UTGST READY · LIGHTHOUSE 90+ · FULL HANDOVER"
        />

        {/* ── 7. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="CHANDIGARH ECOMMERCE MARKET"
          headline="What Sells Online From Chandigarh and Punjab"
          leadParagraphs={[
            'Chandigarh, Mohali and Panchkula form one market with spending power well above its size. Shoppers here buy premium clothing, home goods and gifts, and they compare your store with the best brands they know. A store that looks cheap or loads slowly loses them on the first visit.',
            'The Tricity is also the commercial centre for a much wider region. Ludhiana makes hosiery, woollens and cycle parts. Jalandhar is known for sports goods. The Baddi belt across the Himachal border is a large pharma manufacturing base. Punjab farms supply basmati, and its kitchens supply ghee, pickles and sweets. Many of these businesses still sell through distributors and are now adding a direct store or a trade portal.',
            "Punjab's diaspora changes the maths. Families in Canada, the UK, Australia and the US buy Phulkari, juttis, wedding wear and food from home, often for occasions planned months ahead. Selling to them needs local currency prices, a cross-border courier, clear duty information and a store that reads well in English and Punjabi. We build for that buyer as well as the one in Sector 35.",
          ]}
          stats={[
            {
              value: 'Top-tier',
              label: "Per-capita income in Chandigarh: among the most affluent markets in India",
              sourceUrl: 'https://www.ibef.org/states/chandigarh',
              sourceLabel: 'IBEF Chandigarh',
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
          eyebrow="CHANDIGARH × ECOMMERCE"
          headline="Tricity and Punjab Sectors We Build For"
          lead="From Sector 17 boutiques to Ludhiana knitwear units and Baddi drug makers, these are the sectors that bring the most Chandigarh-region briefs."
          sectors={[
            {
              name: 'Phulkari, Juttis & Punjabi Fashion',
              description:
                'Wedding wear, Phulkari dupattas and hand-made juttis sell at home and abroad. Stores need detailed close-ups, size help for footwear, and delivery dates that work back from the wedding.',
              example:
                'Phulkari studios, jutti makers, bridal and Punjabi suit boutiques.',
            },
            {
              name: 'Pharma & Healthcare',
              description:
                "Drug makers in the Baddi belt sell to stockists and chemists. Trade portals capture each buyer's drug licence, show batch-wise stock and raise GST invoices automatically.",
              example:
                'Generic drug manufacturers, ayurvedic medicine makers, surgical supply distributors.',
            },
            {
              name: 'Hosiery & Woollens',
              description:
                'Ludhiana knitwear sells by the dozen to retailers and by the piece to consumers. Stores need wholesale price breaks, size-set ordering and a separate retail checkout.',
              example:
                'Hosiery manufacturers, winter wear brands, kids clothing makers.',
            },
            {
              name: 'Sports Goods & Cycle Parts',
              description:
                'Jalandhar sports goods and Ludhiana cycle parts sell to dealers across India and abroad. Portals need part search, bulk quotes and export-ready invoices.',
              example:
                'Cricket and fitness equipment makers, cycle component suppliers, bicycle brands.',
            },
            {
              name: 'Ghee, Pickles & Basmati',
              description:
                'Punjabi food brands ship to cities across India and to the diaspora. They need FSSAI details, shelf-life notes, gift hampers for Lohri and Diwali, and safe packaging rules.',
              example:
                'Desi ghee brands, pickle and achaar makers, basmati and organic grain labels.',
            },
            {
              name: 'Home, Furniture & Decor',
              description:
                'Tricity homes spend on furniture and decor. These stores need room photos, custom size options, delivery and installation booking, and EMI on big tickets.',
              example:
                'Furniture makers, home decor stores, furnishing and carpet brands.',
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
          headline="What founders say once their store is live"
        />

        {/* ── 12. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="What Tricity Founders Ask Us First"
          lead="Answers to the questions Chandigarh, Mohali and Panchkula businesses raise on a first call, from wedding-season deadlines to GST in a Union Territory."
          categories={CHANDIGARH_ECOM_FAQ_CATEGORIES}
          items={CHANDIGARH_ECOM_FAQ_ITEMS}
        />

        {/* ── 13. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO LAUNCH"
          headline="Your Chandigarh Store, Live in 7 Days"
          sub="500+ businesses in India, the US, the UK and the UAE have built with FactoryJet. Tell us what you sell and where your buyers live. We will suggest a platform, fix the price for each phase in writing and show you a draft of your store before you sign."
          primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'View Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price per phase. 7-day delivery. UPI, COD and international cards. Every login and every file is yours."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
