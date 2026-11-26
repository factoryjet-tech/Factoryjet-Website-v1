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
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { ecommerceCityAlternatesIN } from '@/data/hreflangMap';
import MidPageCTA from '@/components/v2/MidPageCTA';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import { AnswerFirst, QuestionAnswers, SourceList } from '@/components/india-pages/IndiaAnswerBlocks';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Best Ecommerce Website Development in Kolkata | FactoryJet",
  description:
    "Ecommerce website development company in Kolkata for saree, leather and tea brands and Burrabazar wholesalers. Shopify, Bengali stores, UPI and GST.",
  keywords: [
    'ecommerce development company kolkata',
    'ecommerce website development kolkata',
    'shopify development kolkata',
    'woocommerce development kolkata',
    'online store development kolkata',
    'custom ecommerce development kolkata',
    'ecommerce website cost kolkata',
    'd2c website kolkata',
    'razorpay shopify kolkata',
    'handicraft ecommerce kolkata',
    'leather goods ecommerce kolkata',
    'jewellery ecommerce website kolkata',
    'b2b ecommerce kolkata',
    'artisan ecommerce kolkata',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: "Ecommerce Website Development Company in Kolkata | FactoryJet",
    description:
      "Kolkata stores for tant and Baluchari sarees, Kantha, leather, tea and mishti, plus wholesale portals for Burrabazar traders. Bengali storefronts, UPI and GST. A draft store before you sign.",
    url: 'https://factoryjet.com/services/ecommerce-development/kolkata',
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
    title: "Ecommerce Website Development Company in Kolkata | FactoryJet",
    description:
      "Kolkata ecommerce: saree, leather, tea and wholesale stores with Bengali, UPI and GST.",
    images: ['https://factoryjet.com/images/services/card-ecommerce.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ecommerce-development/kolkata',
    languages: ecommerceCityAlternatesIN['kolkata'],
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
const PAGE_MODIFIED = '2026-11-24';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ecommerce-development/kolkata#webpage',
  url: 'https://factoryjet.com/services/ecommerce-development/kolkata',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce Development Kolkata',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Ecommerce Development',
  areaServed: [{
    '@type': 'City',
    name: 'Kolkata',
    '@id': 'https://www.wikidata.org/wiki/Q1348', // Wikidata label: Kolkata (capital of West Bengal, India)
  }, 'Salt Lake', 'Rajarhat', 'Park Street', 'Alipore', 'Gariahat', 'New Town', 'Behala', 'Ballygunge'],
  description:
    'Ecommerce development for Kolkata businesses: Shopify and WooCommerce stores for saree, Kantha, leather, tea and sweet brands, wholesale portals for Burrabazar traders, Bengali storefronts, GST invoicing. Lighthouse 95+.',
};


/* ─────────────────────────────────────────────────────────────────────────────
   Journey Stages
───────────────────────────────────────────────────────────────────────────── */

const KOLKATA_ECOM_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Buyers and Platform',
    description:
      'We map who buys: Kolkata shoppers, Bengalis elsewhere in India and abroad, or wholesale buyers across East India. Retail, wholesale or both decides the platform and the courier mix.',
  },
  {
    number: '02',
    title: 'Design With Your Products',
    description:
      'Figma screens for home, collection, product and checkout, built with your real photos and prices, phone first. You approve weave and origin details, Bengali labels and trust signals before code.',
  },
  {
    number: '03',
    title: 'Build and Integrations',
    description:
      'Store build, Razorpay for UPI, cards, wallets and COD, GST invoicing, Shiprocket and regional couriers, international shipping if needed, and catalogue import. Wholesale portals get buyer logins and price lists.',
  },
  {
    number: '04',
    title: 'Testing',
    description:
      'Test orders on every payment method, invoice and label checks, wholesale logins tested with different price lists, and Lighthouse on mobile aiming for 90+.',
  },
  {
    number: '05',
    title: 'Launch and Handover',
    description:
      'Domain switch without downtime, sitemap submitted, code and logins handed over, staff trained. Defects in our work are fixed at no charge for the cover period we agree at the start.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ
───────────────────────────────────────────────────────────────────────────── */

const KOLKATA_ECOM_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'platform',  label: 'Platform & Tech' },
  { key: 'india',     label: 'India-Specific' },
  { key: 'seo',       label: 'Speed & SEO' },
  { key: 'trust',     label: 'Process & Ownership' },
];

const KOLKATA_ECOM_FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How long does a Kolkata ecommerce store take?',
    answer:
      'A store with a custom-designed theme takes 3 to 5 weeks once we have your products, photos and gateway approval. Wholesale portals for Burrabazar traders take 5 to 8 weeks, and custom platforms take 8 to 14 weeks.',
  },
  {
    category: 'pricing',
    question: 'How much does ecommerce development cost in Kolkata?',
    answer:
      'Scope decides it. In Kolkata the main factors are wholesale price lists and credit terms, a Bengali storefront, diaspora shipping, and delivery rules for perishable sweets. A retail store with none of these costs much less. We give a fixed price in writing after a short scoping call.',
  },
  {
    category: 'pricing',
    question: 'Can I pay for the build in instalments?',
    answer:
      'We split it into phases, each with its own written scope and fixed price that you sign before it starts. A retail store can come first and a wholesale portal second. Pay by NEFT, RTGS or UPI, never by the hour.',
  },
  {
    category: 'pricing',
    question: 'We need the store before Durga Puja. When should we start?',
    answer:
      'Brief us at least 8 weeks before Puja. Shoppers start buying weeks ahead, and diaspora orders need extra shipping time. That gives room to build, get gateway approval, test courier pickups and load festive stock before demand peaks.',
  },
  {
    category: 'platform',
    question: 'Which platform suits a Kolkata saree brand?',
    answer:
      'Shopify for most. It handles colours, blouse options and fabric types as variants, supports video, and takes UPI, COD and international cards. If you also supply other shops, we add a wholesale price list behind a login or build a separate portal.',
  },
  {
    category: 'platform',
    question: 'Can a Burrabazar trader take wholesale orders online?',
    answer:
      'Yes. Approved shops log in and see their own rates, carton or set quantities and credit limit. They reorder past orders quickly, and every order raises a GST invoice. Orders can export to Tally or Busy for your accounts team.',
  },
  {
    category: 'platform',
    question: 'Do you set up UPI, cards and COD?',
    answer:
      'Yes. Razorpay is our default, with UPI, cards, net banking, wallets and EMI. We can use PayU, CCAvenue or PhonePe instead if you already have an account. COD can be capped by order value or turned off for distant pincodes.',
  },
  {
    category: 'platform',
    question: 'Can I sell leather goods to boutiques abroad?',
    answer:
      'Yes. Overseas boutiques get a login with trade prices, MOQ and lead times, and can request quotes for custom colours or logos. Retail buyers abroad see local currency prices, with a cross-border courier and duties shown at checkout.',
  },
  {
    category: 'india',
    question: 'How is GST handled for a Kolkata store?',
    answer:
      'Orders within West Bengal carry CGST and SGST, and orders to other states carry IGST. The store applies the right split, prints HSN codes and lets business buyers add a GSTIN. Exports are invoiced as zero-rated supplies.',
  },
  {
    category: 'india',
    question: 'Which couriers work for stores shipping from Kolkata?',
    answer:
      'Shiprocket covers most orders, giving Delhivery, Blue Dart, Xpressbees, India Post and others in one account. Some Northeast pincodes are slower, so we show longer delivery estimates there. For same-day delivery inside Kolkata, a local partner suits sweets and gifts.',
  },
  {
    category: 'india',
    question: 'Can my store be in Bengali?',
    answer:
      'Yes. A Bengali version can run next to English, each on its own URL so both are indexed. We test Bengali script on low-cost Android phones before launch, and recommend a person writes the product text, since machine translation gets weave and food names wrong.',
  },
  {
    category: 'india',
    question: 'Can mishti brands sell online?',
    answer:
      'Yes, with limits set in the store. Short shelf-life items can be restricted to delivery zones inside Kolkata, with dispatch cut-off times and same-day courier. Longer-life items, such as tinned rosogolla or dry sweets, can ship across India. FSSAI details show on every product page.',
  },
  {
    category: 'seo',
    question: 'Will my store rank for Kolkata searches?',
    answer:
      'It can, if the basics are right from launch. We add product and breadcrumb schema, clean titles, canonical tags and a sitemap. If you have a shop in Gariahat or New Market, we link the store to your Google Business Profile. Bengali pages reach searches many competitors skip.',
  },
  {
    category: 'seo',
    question: 'Do you test the store speed?',
    answer:
      'Yes. Before handover we test the main pages on mobile with Lighthouse and share the report. Our target is 90+ with LCP under 2.5 seconds. Saree and craft photos get the most tuning.',
  },
  {
    category: 'seo',
    question: 'Can you fix a slow Kolkata store?',
    answer:
      'Yes. We audit the slowest pages, list the causes, such as large images, unused apps, heavy themes or chat widgets, and quote a fixed price for the fixes in order of impact.',
  },
  {
    category: 'seo',
    question: 'Will a Bengali storefront hurt search rankings?',
    answer:
      'No, if it is set up properly. Each language gets its own URL and the right hreflang tags, so Google shows Bengali pages to Bengali searchers and English pages to others. Done badly, languages compete with each other, so we check this before launch.',
  },
  {
    category: 'trust',
    question: 'Do I own the store and the code?',
    answer:
      'Yes. The store, domain, payment and courier accounts are registered in your business name, and the code repository and every login are handed to you. Hosting and app costs can bill your accounts at cost. You can switch developers whenever you like.',
  },
  {
    category: 'trust',
    question: 'What is included at handover?',
    answer:
      'We train your staff on products, prices, orders, returns and wholesale accounts. You receive a document with all logins, integration contacts and a checklist for the first month after launch.',
  },
  {
    category: 'trust',
    question: 'What support is there once the store is live?',
    answer:
      'Any defect in our work is fixed inside the build price for a cover period agreed before we start. After that, support is optional. Each change gets a quote you approve first, and there is no monthly minimum.',
  },
  {
    category: 'trust',
    question: 'Can my staff run the store without a developer?',
    answer:
      'Yes. On Shopify, adding products, changing prices, creating Puja offers and processing orders need no coding. We set up staff logins and record short videos showing the common tasks.',
  },
  {
    category: 'pricing',
    question: 'Who is the best ecommerce development company in Kolkata?',
    answer:
      'Any ecommerce website development company in Kolkata you shortlist should say who writes the code, fix the price in writing and hand you full ownership. FactoryJet does all three for weavers, traders and brands, and shows a draft before you sign. Use the same checks on every ecommerce solution company in Kolkata.',
  },
  {
    category: 'pricing',
    question: 'Should I hire an ecommerce developer in Kolkata or an agency?',
    answer:
      'A lone developer can put up a basic store. Selling well also needs design, payments, couriers to the Northeast, GST and SEO, which is a wide spread of skills. A small senior team covers it at a fixed price. If you hire an ecommerce developer in Kolkata, open their past stores on your phone and check them first.',
  },
  {
    category: "platform",
    question: "Who is the best Shopify development company in Kolkata for handloom and leather brands?",
    answer:
      "Choose a Shopify development company in Kolkata that has shown weave close-ups, leather grades and diaspora shipping on live stores. FactoryJet is a registered Shopify Partner, and our senior developers write the code. We build a draft with a few of your products first, so you can judge the store before you pay.",
  },
  {
    category: "platform",
    question: "Which B2B platform suits a Burrabazar distributor?",
    answer:
      "We build trade portals on Shopify Plus B2B or on Commerceflo, our own B2B platform. Shops log in, see their own rates and carton quantities, and repeat a past order in a few taps. Belle Maison, a home decor wholesaler, takes trade orders on a Commerceflo store we built.",
  },
  {
    category: "india",
    question: "Can a Kolkata tea merchant sell subscriptions online?",
    answer:
      "Yes. Buyers pick a pack size and a monthly delivery, and pay by card or UPI AutoPay. Each tea shows its garden and flush, so a first flush Darjeeling is never confused with a second. Export shipping can be added for buyers abroad, with duties shown at checkout.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: KOLKATA_ECOM_FAQ_ITEMS.map((item) => ({
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
  '@id': 'https://factoryjet.com/services/ecommerce-development/kolkata#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ecommerce-development/kolkata',
};

/* ─────────────────────────────────────────────────────────────────────────────
   India refresh, 24 Nov 2026: answer-first block, buyer questions, comparison,
   sources. Each source opened and checked on 24 Nov 2026.
───────────────────────────────────────────────────────────────────────────── */

const CITY_CHECKED_ON = '24 November 2026';

const CITY_SRC = {
  shopifyPricing: { label: 'Shopify India pricing', url: 'https://www.shopify.com/in/pricing' },
  razorpay: { label: 'Razorpay pricing', url: 'https://razorpay.com/pricing/' },
  ibef: { label: 'IBEF: E-commerce industry in India', url: 'https://www.ibef.org/industry/ecommerce' },
  shopifyGst: { label: 'Shopify Help: GST in India', url: 'https://help.shopify.com/en/manual/taxes/india-gst' },
} as const;

const CITY_QUESTIONS = [
  {
    q: "What does an ecommerce website cost in Kolkata?",
    a: ["In Kolkata the build price moves with wholesale price lists and credit terms, a Bengali storefront, shipping to the diaspora, and delivery rules for perishable sweets. A retail store needing none of these costs much less. Platform costs are extra and published. Shopify's India page lists Basic at ₹1,499 a month on yearly billing, and Razorpay lists 2% per domestic transaction plus GST on the fee. We write the build price per phase after a short call."],
    sources: [CITY_SRC.shopifyPricing, CITY_SRC.razorpay],
  },
  {
    q: "Is Shopify a good choice for a Kolkata saree or Burrabazar wholesale business?",
    a: ["For saree and handloom retail, yes. Shopify handles colours, blouse options and fabric types as variants, plays product video, and takes UPI, COD and international cards. For Burrabazar wholesale it depends on volume. A few trade buyers fit a login-only price list on the same store. Hundreds of shops with their own credit limits usually need a separate portal."],
  },
  {
    q: "How long will my Kolkata online store take to build?",
    a: ["A store with a custom-designed theme takes 3 to 5 weeks. Wholesale portals for Burrabazar traders, with buyer price lists and credit terms, take 5 to 8 weeks. Custom platforms take 8 to 14 weeks. Durga Puja shoppers start buying weeks early, so brief us at least 8 weeks before Puja if you want the store tested in time."],
  },
  {
    q: "What should I check before hiring a Shopify developer in Kolkata?",
    a: ["Ask who writes your code and whether they have built Bengali pages that rank, a wholesale login, or delivery zones for short shelf-life food. Open two stores they built on your phone. Check the price per phase and launch date are in writing, and that the store, domain and code are in your business name from the start."],
  },
];

const CITY_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: "Typical Kolkata agency" },
  { label: 'Freelancer' },
  { label: 'Marketplace only' },
] as const;

const CITY_COMPARISON_ROWS = [
  {
    feature: 'Draft store on your products before you sign',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="agency" kind="partial" label="Sometimes" />, <CompareIcon key="freelancer" kind="partial" label="Sometimes" />, <CompareIcon key="marketplace" kind="no" label="No own store" />],
  },
  {
    feature: 'Fixed price per phase, in writing',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="agency" kind="partial" label="Varies" />, <CompareIcon key="freelancer" kind="partial" label="Varies" />, 'Fees per order'],
  },
  {
    feature: "Wholesale portal with credit limits and Tally or Busy export",
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="agency" kind="partial" />, <CompareIcon key="freelancer" kind="no" />, <CompareIcon key="marketplace" kind="no" />],
  },
  {
    feature: "Bengali storefront on its own URL with hreflang tags",
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="agency" kind="partial" />, <CompareIcon key="freelancer" kind="partial" />, <CompareIcon key="marketplace" kind="no" />],
  },
  {
    feature: 'Customer list and brand stay yours',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="agency" kind="yes" />, <CompareIcon key="freelancer" kind="yes" />, <CompareIcon key="marketplace" kind="no" />],
  },
  {
    feature: 'Typical time for a custom-theme store',
    values: ['3 to 5 weeks', 'Varies', 'Varies', 'Listing in days, no store'],
  },
];

export default function KolkataEcommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="kolkata-ecom-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="kolkata-ecom-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Ecommerce Development India', url: 'https://factoryjet.com/ecommerce-development' },
          { name: "Kolkata", url: 'https://factoryjet.com/services/ecommerce-development/kolkata' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Ecommerce Development India', url: 'https://factoryjet.com/ecommerce-development' },
          { name: "Kolkata", url: 'https://factoryjet.com/services/ecommerce-development/kolkata' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="services_ecommerce_development_kolkata_hero" />}
          eyebrow="ECOMMERCE WEBSITE DEVELOPMENT · KOLKATA"
          headline="Ecommerce Website Development Company in Kolkata for Saree, Leather and Wholesale Brands"
          lead="FactoryJet builds online stores for Kolkata saree, Kantha, leather and tea brands, and wholesale ordering portals for Burrabazar traders who supply East and Northeast India. Bengali storefronts on request, UPI and COD at checkout, GST invoices on every order, and a draft of your store before you sign."
          secondaryCta={{ label: 'See a draft of my store', modal: true as const, region: 'in' as const }}
          trustItems={[
            'Draft store before you sign',
            'Razorpay + UPI + COD ready',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-7 shadow-sm">
              <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#B23E13]">WHAT A KOLKATA STORE USUALLY NEEDS</p>
              <ul className="mt-5 space-y-3">
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Wholesale</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Shop logins, own rates, carton quantities, credit limits</p></li>
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Sarees</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Weave, region and weaver details with close-ups</p></li>
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Language</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Bengali pages on their own URLs</p></li>
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Mishti</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Delivery zones and dispatch cut-off times</p></li>
              </ul>
              <p className="mt-5 rounded-xl bg-[rgba(240,90,40,0.08)] px-4 py-3 font-fj-body text-[0.875rem] font-semibold text-[#B23E13]">Custom-theme stores take 3 to 5 weeks. Fixed price per phase, in writing.</p>
            </div>
          }
        />

        {/* ── 1b. ANSWER FIRST ─────────────────────────────────────────────── */}
        <AnswerFirst
          eyebrow="THE SHORT ANSWER"
          question={"Which is the best ecommerce website development company in Kolkata?"}
          answer={[
            "Kolkata buyers know their products, so the firm you hire should know how to describe them. A Shantipur tant needs its weave named, a Bantala bag its leather grade, a Darjeeling tea its garden and flush. A Burrabazar trader needs a portal where shops in Bihar or Assam log in and reorder at their own rates. FactoryJet builds for that buyer, fixes each phase's price in writing, and shows a draft on your products before you sign.",
            "We are a registered Shopify Partner, rated 5.0 on Clutch from 4 reviews and 5.0 on GoodFirms from 5 reviews. Before you pick a Kolkata firm, ask to see a store in Bengali or a wholesale portal it has built, and try it on your phone.",
          ]}
          factsTitle="FactoryJet at a glance"
          facts={[
            { k: 'Shopify status', v: 'Registered Shopify Partner' },
            { k: 'Reviews', v: 'Clutch 5.0 (4 reviews), GoodFirms 5.0 (5 reviews)' },
            { k: 'Track record', v: '500+ businesses served, 97% of projects on time or early, founded 2014' },
            { k: 'Timelines', v: 'Custom-theme store 3 to 5 weeks; advanced store 5 to 8; headless or custom 8 to 14' },
          ]}
          links={[
            { label: 'Ecommerce development in India', href: '/ecommerce-development' },
            { label: 'Shopify development company in India', href: '/shopify-development' },
            { label: 'Ecommerce website cost in India', href: '/blog/ecommerce-website-development-cost-india' },
          ]}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ businesses served. 97% on-time delivery. Founded 2014."
          description="Retail stores and wholesale portals for businesses in India, the US, the UK and the UAE. Kolkata clients get a fixed price per phase, all code and logins handed over, and a draft store before they sign."
        />

        {/* ── 4. PLATFORM EXPLANATION ──────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="ECOMMERCE DEVELOPMENT · KOLKATA"
          headline="A Platform That Fits a Kolkata Business"
          lead="A Gariahat saree shop selling to Bengalis in New Jersey, a Bantala leather unit supplying boutiques and a Burrabazar trader shipping to Guwahati each need their own build. We look at your buyers and catalogue first, then recommend a platform and a fixed price."
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
                Kolkata buyers know their products. A Bengali shopper can tell a Shantipur tant from a power-loom copy, and a tea buyer knows a first flush from a second. A store that uses vague words and stock photos loses that buyer at once. The page has to name the weave, the region, the leather grade or the garden, and show real pictures.
              </p>

              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  Kolkata buyers know the real thing. The product page has to prove it is real.
                </p>
              </div>

              <p>
                We build Kolkata stores with that buyer in mind: close-up photos, weave and origin details, Bengali where it helps, and a checkout led by UPI with COD where it makes sense. Wholesale buyers across Bihar, Odisha, Assam and the Northeast get a login with their own price list, credit terms and fast reorder.
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
                  Kolkata platform guide
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
                  We pick what your products need, never the costliest platform.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 4b. BUYER QUESTIONS ──────────────────────────────────────────── */}
        <QuestionAnswers
          eyebrow={"WHAT KOLKATA BUYERS ASK BEFORE HIRING"}
          intro="Short answers to the questions buyers type into Google and ask AI assistants. Prices quoted here are Shopify's and Razorpay's published prices, not ours."
          items={CITY_QUESTIONS}
          bgClassName="bg-white"
        />

        {/* ── 5. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Kolkata Businesses Pick FactoryJet"
          lead="For a Kolkata brand, the busiest weeks of the year come before Durga Puja, and a late or broken store costs a whole season. We fix the price per phase in writing, put the launch date into the agreement, and show you a working draft on your own products before you sign."
          pillars={[
            {
              icon: '⚡',
              title: 'A draft store before you sign.',
              body: 'We build a draft with a few of your real products, so you can check weave photos, prices and checkout on a phone before Puja planning starts. The launch date goes into the agreement, and 97% of our projects have been delivered on time or early.',
            },
            {
              icon: '📱',
              title: 'Made for phones on a busy commute.',
              body: 'Kolkata shoppers browse on the metro, in the bus and between errands. We design at 375px first, keep photos light but sharp, and make checkout a few taps with UPI first.',
            },
            {
              icon: '📋',
              title: 'Fixed price. Agreed before we start.',
              body: 'Scope and price for each phase are written and signed before work starts. No hourly charges, no surprises at launch. Support afterwards is optional, priced per change.',
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How a Kolkata Store Comes Together"
          lead="Platform and buyers first, design on your own products next, and full testing of payments and couriers before launch."
          stages={KOLKATA_ECOM_STAGES}
          closingNote="5 STAGES · BENGALI-READY · UPI + COD + GST · LIGHTHOUSE 90+ · CODE AND LOGINS HANDED OVER"
        />

        {/* ── 7. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="KOLKATA ECOMMERCE MARKET"
          headline="How Kolkata Trade Is Going Online"
          leadParagraphs={[
            "Kolkata has long been the trading capital of East India. Burrabazar, one of the country's oldest wholesale markets, supplies shops across Bengal, Bihar, Odisha, Assam and the Northeast. Many of its traders still take orders by phone and WhatsApp. A wholesale portal with buyer logins, price lists and GST invoices takes that work off the phone without losing the relationships.",
            "Bengal's crafts sell well beyond the state. Tant sarees from Shantipur and Phulia, Baluchari from Bishnupur, Kantha embroidery and Dhokra metalwork reach buyers across India and the Bengali diaspora in the US and UK. The leather complex at Bantala and the older units of Tangra make bags, belts and footwear for brands and boutiques. Kolkata is also a centre of the tea trade, with merchants selling Darjeeling and Assam teas.",
            "Durga Puja is the year's biggest retail season, with Poila Baisakh and the winter wedding months close behind. Gariahat and New Market shoppers start buying weeks ahead. Mishti brands face their own problem: short shelf life. We plan stores around these dates and limits, and build in Bengali where buyers expect it.",
          ]}
          stats={[
            {
              value: 'US$ 345B',
              label: "India's projected e-commerce market by 2030, up from US$ 125 billion in 2024 (18.4% a year)",
              sourceUrl: CITY_SRC.ibef.url,
              sourceLabel: 'India Brand Equity Foundation',
            },
            {
              value: '₹1,499',
              label: 'a month for Shopify Basic in India on yearly billing, before apps and fees',
              sourceUrl: CITY_SRC.shopifyPricing.url,
              sourceLabel: 'Shopify India pricing',
            },
            {
              value: '2%',
              label: 'Razorpay platform fee per domestic transaction, plus GST on the fee',
              sourceUrl: CITY_SRC.razorpay.url,
              sourceLabel: 'Razorpay pricing',
            },
          ]}
        />

        {/* ── 7b. COMPARISON ───────────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW TO CHOOSE"
          headline={"Choosing an Ecommerce Developer in Kolkata"}
          lead={"Four ways to get an online store in Kolkata, compared on what decides the result."}
          columns={CITY_COMPARISON_COLUMNS}
          rows={CITY_COMPARISON_ROWS}
          footer="Agency and freelancer cells are general patterns, not claims about any one firm. Ask every firm you shortlist the same questions."
        />

        {/* ── 8. INDUSTRIES (DARK) ─────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="KOLKATA × ECOMMERCE"
          headline="Kolkata Sectors We Build For"
          lead="From Burrabazar wholesalers to Bantala leather units and Gariahat saree shops, these six sectors cover most of the Kolkata stores we are asked to build."
          sectors={[
            {
              name: 'Sarees & Bengal Handloom',
              description:
                'Tant, Baluchari, Jamdani and silk sell on weave detail. Stores need close-ups, weaver and region notes, Bengali labels and international shipping for diaspora buyers.',
              example:
                'Gariahat saree shops, handloom cooperatives, Shantipur and Phulia weavers.',
            },
            {
              name: 'Leather Goods & Footwear',
              description:
                'Bantala and Tangra makers sell bags, belts, wallets and shoes. Stores need leather grade details, size charts, gift options and wholesale ordering for boutiques.',
              example:
                'Leather bag brands, footwear makers, belt and accessory exporters.',
            },
            {
              name: 'Kantha, Dhokra & Crafts',
              description:
                'Hand-stitched Kantha and Dhokra metalwork sell to gift buyers and boutiques. Stores need maker stories, careful photography and international checkout.',
              example:
                'Kantha embroidery collectives, Dhokra artisans, terracotta and craft studios.',
            },
            {
              name: 'Tea Trade',
              description:
                'Kolkata tea merchants sell Darjeeling and Assam teas to home buyers and cafes. Stores need garden and flush details, pack sizes, subscriptions and export shipping.',
              example:
                'Tea merchants and blenders, single-estate brands, tea gift box sellers.',
            },
            {
              name: 'Mishti & Bengali Food',
              description:
                'Rosogolla, sandesh and nolen gur products have short shelf lives. Stores need delivery zones, dispatch cut-offs, FSSAI details and festival gift boxes.',
              example:
                'Sweet shops, packaged mishti brands, Bengali snack and spice makers.',
            },
            {
              name: 'Wholesale & Distribution',
              description:
                'Burrabazar traders supply shops across East and Northeast India. Portals need login-only price lists, credit limits, carton quantities and GST B2B invoices.',
              example:
                'Textile and garment wholesalers, FMCG distributors, hardware and household goods traders.',
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
              stat1: 'Trade price tiers',
              stat2: 'Commerceflo · B2B',
            },
            {
              industry: 'Print Branding · Web',
              title: 'Impulse Branding · Mumbai',
              description:
                'Impulse Branding is a Mumbai print branding and general contracting company. FactoryJet built impulsebranding.in and is now building their next-generation site.',
              imageSrc: '/images/work/impulse-branding-desktop.webp',
              stat1: '75+ page site',
              stat2: 'Web · SEO',
            },
          ]}
          ctaHref="/portfolio"
          ctaLabel="View full portfolio"
        />

        <MidPageCTA
          headline={"See your Kolkata store before you sign."}
          sub={"Send product photos, a wholesale rate list or your current store link. We will build a draft on your real products and write down the price of each phase."}
          label="See a draft of my store"
        />
        {/* ── 11. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What founders say after we launch their store"
        />

        {/* ── 12. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="What Kolkata Owners Ask Before They Sign"
          lead="The questions Kolkata traders, weavers and brand owners ask us first, from Durga Puja deadlines to Bengali storefronts and wholesale portals."
          categories={KOLKATA_ECOM_FAQ_CATEGORIES}
          items={KOLKATA_ECOM_FAQ_ITEMS}
        />

        {/* ── 12b. SOURCES ─────────────────────────────────────────────────── */}
        <SourceList
          checkedOn={CITY_CHECKED_ON}
          sources={[
            { ...CITY_SRC.shopifyPricing, note: 'Shopify plan prices in rupees and third-party transaction fees' },
            { ...CITY_SRC.razorpay, note: '2% platform fee on domestic transactions, plus GST on the fee' },
            { ...CITY_SRC.ibef, note: 'India e-commerce market size for 2024 and projection for 2030' },
          ]}
        />

        {/* ── 13. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="light"
          eyebrow="READY TO LAUNCH"
          headline="Your Kolkata Store, Ready Before the Puja Rush"
          sub="500+ businesses across India, the US, the UK and the UAE have worked with FactoryJet. Tell us what you sell, retail or wholesale, and we will recommend a platform, price each phase in writing and show you a draft of your store before you sign."
          primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'View Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price per phase. Draft before contract. UPI, COD and GST set up. You own the code and every account."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
