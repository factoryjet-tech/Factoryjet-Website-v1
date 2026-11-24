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
  title: "Best Ecommerce Website Development in Pune | FactoryJet",
  description:
    "Ecommerce website development company in Pune for D2C brands and Chakan auto suppliers. Shopify stores, dealer portals, UPI, COD and GST invoices.",
  keywords: [
    'ecommerce development company pune',
    'ecommerce website development pune',
    'shopify development pune',
    'woocommerce development pune',
    'online store development pune',
    'custom ecommerce development pune',
    'ecommerce website cost pune',
    'd2c website pune',
    'razorpay shopify pune',
    'b2b ecommerce pune',
    'hinjewadi ecommerce',
    'koregaon park d2c store',
    'ecommerce agency pune',
    'pimpri chinchwad b2b portal',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: "Ecommerce Website Development Company in Pune | FactoryJet",
    description:
      "Shopify stores for Pune D2C brands and dealer portals for Pimpri-Chinchwad and Chakan suppliers, with Razorpay, UPI, COD and GST invoices. A draft store before you sign.",
    url: 'https://factoryjet.com/services/ecommerce-development/pune',
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
    title: "Ecommerce Website Development Company in Pune | FactoryJet",
    description:
      "Pune ecommerce: D2C Shopify stores and dealer portals with Razorpay, UPI and GST invoices.",
    images: ['https://factoryjet.com/images/services/card-ecommerce.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ecommerce-development/pune',
    languages: ecommerceCityAlternatesIN['pune'],
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
  '@id': 'https://factoryjet.com/services/ecommerce-development/pune#webpage',
  url: 'https://factoryjet.com/services/ecommerce-development/pune',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce Development Pune',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Ecommerce Development',
  areaServed: {
    '@type': 'City',
    name: 'Pune',
    '@id': 'https://www.wikidata.org/wiki/Q1538', // Wikidata label: Pune (city in Maharashtra, India)
  },
  description:
    'Ecommerce development for Pune businesses: Shopify and WooCommerce stores for D2C brands, dealer ordering portals for auto component makers, Razorpay and UPI checkout, GST invoicing. Lighthouse 95+.',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
  name: 'FactoryJet Ecommerce Development Pune',
  url: 'https://factoryjet.com/services/ecommerce-development/pune',
  image: 'https://factoryjet.com/logo.png',
  description:
    'Ecommerce development company serving Pune, Pimpri-Chinchwad and Chakan businesses. Shopify, WooCommerce and custom builds with Razorpay, UPI, COD and GST invoicing.',
  areaServed: [
    'Koregaon Park', 'Hinjewadi', 'Viman Nagar', 'Kothrud',
    'Baner', 'Wakad', 'Hadapsar', 'Shivajinagar',
  ],
  
};

/* ─────────────────────────────────────────────────────────────────────────────
   Journey Stages
───────────────────────────────────────────────────────────────────────────── */

const PUNE_ECOM_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Catalogue and Buyer Mapping',
    description:
      'We list what you sell, who buys it and how it ships. For a Pune D2C brand that may mean subscriptions and Shiprocket. For a Chakan supplier it means dealer price slabs and part numbers. The platform choice comes out of this call.',
  },
  {
    number: '02',
    title: 'Design on Your Products',
    description:
      'Home, collection, product and checkout pages are designed in Figma with your real products, phone layout first. You approve where UPI, COD and trust details sit before any code is written.',
  },
  {
    number: '03',
    title: 'Build and Integrations',
    description:
      'Theme or custom build, Razorpay or PayU, UPI and COD rules, GST invoices with HSN codes, courier setup and catalogue import. Dealer portals also get logins, price lists and one-click reorder.',
  },
  {
    number: '04',
    title: 'Testing on Real Payments',
    description:
      'We place test orders with UPI, cards, wallets and COD, check invoices and courier labels, and run Lighthouse on mobile. The target is 90+, with LCP under 2.5 seconds.',
  },
  {
    number: '05',
    title: 'Launch and Handover',
    description:
      'DNS switch without downtime, sitemap sent to Search Console, code pushed to your GitHub and an admin walkthrough for your team. Defects in our work are fixed inside the build price for the cover period we agree.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ
───────────────────────────────────────────────────────────────────────────── */

const PUNE_ECOM_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'platform',  label: 'Platform & Tech' },
  { key: 'india',     label: 'India-Specific' },
  { key: 'seo',       label: 'Speed & SEO' },
  { key: 'trust',     label: 'Process & Ownership' },
];

const PUNE_ECOM_FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How quickly can a Pune ecommerce store go live?',
    answer:
      'A store with a custom-designed theme takes 3 to 5 weeks once your products, photos and payment gateway approval are ready. Dealer portals for Pimpri-Chinchwad suppliers, with buyer price lists and GST invoicing, take 5 to 8 weeks. Headless or fully custom builds take 8 to 14 weeks.',
  },
  {
    category: 'pricing',
    question: 'How much does ecommerce development cost in Pune?',
    answer:
      'The price depends on scope. For Pune projects the big drivers are dealer pricing for trade buyers, subscriptions for health brands, the number of products and variants, and links to Tally or an ERP. FactoryJet gives a fixed written price after a short scoping call, so the number does not change once work starts.',
  },
  {
    category: 'pricing',
    question: 'Do I pay for the whole build upfront?',
    answer:
      'No. We break the work into phases, such as the storefront first and the dealer portal second. Each phase has its own scope and price, and you sign each one separately. You can pay by NEFT, RTGS or UPI, and nothing is billed by the hour.',
  },
  {
    category: 'pricing',
    question: 'Can I see a working draft before I sign?',
    answer:
      'Yes. We build a draft on a handful of your own products and walk you through the product page, cart and checkout. You judge it on real items. If it does not suit your brand, you walk away without paying anything.',
  },
  {
    category: 'platform',
    question: 'Shopify or WooCommerce for a Pune D2C brand?',
    answer:
      'Shopify suits most Pune D2C brands. It is quick to run, strong on mobile, and supports Razorpay, UPI and subscriptions through apps. WooCommerce fits if your site already runs on WordPress and content drives sales, such as fitness guides or recipes. We recommend one on the scoping call and explain why.',
  },
  {
    category: 'platform',
    question: 'Can you build a dealer portal for an auto component maker in Chakan or Bhosari?',
    answer:
      'Yes. Approved dealers log in and see their own price slab, minimum order quantity and credit terms. They search by part number or vehicle model, reorder in a click and download GST invoices. We can push orders into Tally, Zoho Books or your ERP so your accounts team stops retyping them.',
  },
  {
    category: 'platform',
    question: 'Which payment options will my Pune store accept?',
    answer:
      'Razorpay is our default. One account covers UPI, cards, net banking, wallets, EMI and pay-later options. If you already use PayU, CCAvenue or PhonePe, we connect that instead. COD comes with limits you set, such as a cap on order value or COD only for repeat customers.',
  },
  {
    category: 'platform',
    question: 'Can my store sell on Amazon, Flipkart and Nykaa too?',
    answer:
      'Yes. A multichannel tool such as Unicommerce or CedCommerce keeps products, prices and stock in step across your own store and the marketplaces. Orders arrive in one dashboard. When the last tub of a protein powder sells on Amazon, your store marks it sold out too.',
  },
  {
    category: 'india',
    question: 'How do you handle GST on Pune orders?',
    answer:
      'Each order produces a GST invoice with HSN codes and the right split: CGST and SGST inside Maharashtra, IGST for other states. Business buyers enter a GSTIN at checkout. Monthly exports line up with GSTR-1, and invoices can sync with Tally or Zoho Books.',
  },
  {
    category: 'india',
    question: 'Which courier works best for a store shipping from Pune?',
    answer:
      'Most Pune stores start on Shiprocket, which gives one dashboard for Delhivery, Blue Dart, Xpressbees, Ekart and others, plus return and failed-delivery handling. Heavy B2B parts may need a freight partner instead. For same-day orders inside Pune and PCMC, a hyperlocal service such as Porter or Shadowfax fits.',
  },
  {
    category: 'india',
    question: 'Can my store run in Marathi as well as English?',
    answer:
      'Yes. Shopify and WooCommerce both support a Marathi version on its own URL, so Google indexes both. We test Devanagari fonts on budget Android phones, and we ask that product text be written or checked by a person, since machine translation trips on sizes and materials.',
  },
  {
    category: 'india',
    question: 'How do subscriptions work for a Pune health or coffee brand?',
    answer:
      'We add a subscription app on Shopify or a plugin on WooCommerce. Buyers pick a monthly or fortnightly delivery and pay by card or a UPI AutoPay mandate. They can pause or skip from their own account, so nobody has to call you to change an order.',
  },
  {
    category: 'seo',
    question: 'Will my store show up for Pune searches?',
    answer:
      'It can. From launch we set up product and breadcrumb schema, clean titles, canonical tags and a sitemap in Search Console. If you have a shop in Kothrud or Aundh, we link the store to your Google Business Profile. For industrial suppliers, guides that answer spec questions help them rank for part searches.',
  },
  {
    category: 'seo',
    question: 'Do you check the store speed before handover?',
    answer:
      'Yes. We run Lighthouse on mobile for the home, collection and product pages and share the report. We aim for 90+, LCP under 2.5 seconds and CLS under 0.1. Most of the gains come from image sizes and from apps that load scripts on every page.',
  },
  {
    category: 'seo',
    question: 'My Pune store is slow. Can you fix it?',
    answer:
      'Yes. We audit the slowest pages first and list the causes: heavy images, unused apps, theme code, and chat or review widgets. You get the fixes ranked by impact, with a fixed price for the work. Removing apps nobody uses often gives the biggest gain.',
  },
  {
    category: 'seo',
    question: 'Do Core Web Vitals matter for an online store?',
    answer:
      'They are part of how Google judges page experience: LCP for loading, INP for response to taps and CLS for layout shifts. On a store they also decide how soon a buyer sees the price and can tap Add to Cart on a 4G connection.',
  },
  {
    category: 'trust',
    question: 'Who owns the store and code after launch?',
    answer:
      'You do. The store account, domain, gateway and courier logins are in your company name, and the code sits in your GitHub. Hosting and app bills can run in your own accounts at cost. You can hire any developer later without asking us.',
  },
  {
    category: 'trust',
    question: 'What happens on handover day?',
    answer:
      'We take your team through the admin: adding products, editing prices, running discounts, processing orders and printing labels. You get a handover note with every login, each integration contact and a first-month checklist. For dealer portals we also show how to add a new dealer and price list.',
  },
  {
    category: 'trust',
    question: 'What support do Pune stores get after launch?',
    answer:
      'Defects in our work are fixed within the build price for a cover period we agree before starting. Beyond that, support is your choice. Each change is quoted and approved first, and there is no monthly minimum to stay with us.',
  },
  {
    category: 'trust',
    question: 'Can my team run the store without a developer?',
    answer:
      'Yes, for daily work. On Shopify, adding products, changing prices, creating discount codes and checking orders need no code. WooCommerce takes a little more setup, so we simplify the admin for non-technical staff and record short videos of the common tasks.',
  },
  {
    category: 'pricing',
    question: 'Who is the best ecommerce development company in Pune?',
    answer:
      'Judge any ecommerce website development company in Pune on three things: who writes the code, whether the price is fixed in writing, and whether you own everything at the end. FactoryJet meets all three for D2C brands and industrial suppliers, and shows a draft of your store before you sign. Apply the same test to any ecommerce solution company in Pune on your shortlist.',
  },
  {
    category: 'pricing',
    question: 'Should I hire an ecommerce developer in Pune or an agency?',
    answer:
      'A freelancer can set up a basic store. Selling at volume takes design, payment setup, courier rules, GST and SEO at once, which is a lot for one person. A small senior team covers it at a fixed price. If you hire an ecommerce developer in Pune directly, test two of their live stores on your phone first.',
  },
  {
    category: "platform",
    question: "Which is the top Shopify development company in Pune for D2C brands?",
    answer:
      "Choose a Shopify development company in Pune that has set up subscriptions, Razorpay and Shiprocket on live stores, not only installed themes. FactoryJet is a registered Shopify Partner. Our senior developers write the code, and we build a draft on your own products first, so you can judge the work before paying.",
  },
  {
    category: "platform",
    question: "Can a Chakan parts maker use the same system as a big B2B platform?",
    answer:
      "Yes. We build dealer portals on Shopify Plus B2B or on Commerceflo, our own B2B platform. Dealers log in, see their price slab and minimum order, and reorder last month's parts. Belle Maison, a home decor wholesaler, takes trade orders on a Commerceflo store we built.",
  },
  {
    category: "trust",
    question: "Can I move my Pune store from another developer to FactoryJet?",
    answer:
      "Yes. We start by listing what the current store runs: theme, apps, payment gateway, courier and any Tally link. Then we plan the move so products, customers, order history and page addresses carry across, and Google keeps your rankings. You keep every account in your company name throughout.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: PUNE_ECOM_FAQ_ITEMS.map((item) => ({
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
  '@id': 'https://factoryjet.com/services/ecommerce-development/pune#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ecommerce-development/pune',
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
    q: "How much does an ecommerce website cost in Pune?",
    a: ["Four things set the build price for a Pune project: dealer price slabs for trade buyers, subscriptions for health and coffee brands, the number of products and variants, and links to Tally or an ERP. A plain retail store with none of these costs much less than a dealer portal. Running costs come on top. Shopify's India page lists Basic at ₹1,499 a month on yearly billing. Razorpay lists 2% per domestic transaction plus GST on that fee."],
    sources: [CITY_SRC.shopifyPricing, CITY_SRC.razorpay],
  },
  {
    q: "Should a Pune business use Shopify, WooCommerce or a custom build?",
    a: ["It depends on who buys from you. Pune D2C brands selling supplements, gadgets or streetwear usually do best on Shopify, which runs subscriptions, UPI and Instagram selling with little upkeep. A brand whose sales come from a busy WordPress blog may stay on WooCommerce. Auto and engineering suppliers who sell to dealers often need Shopify Plus B2B or a custom portal, so each dealer sees their own prices."],
  },
  {
    q: "How long does it take to build an online store in Pune?",
    a: ["Plan on 3 to 5 weeks for a store with a custom-designed theme. Dealer portals for Pimpri-Chinchwad suppliers, with buyer price lists and GST invoicing, take 5 to 8 weeks. Headless or fully custom builds take 8 to 14 weeks. If you want the store selling before the festive season, start about two months ahead so payments and couriers are tested first."],
  },
  {
    q: "What should I ask a Shopify developer in Pune before hiring?",
    a: ["Ask who will write your code and whether they have built a dealer portal or a subscription store before. Ask for two live stores you can test on your phone, and check the price and launch date are written into the agreement. Make sure the store, domain and code sit in your company name. Ask them to build a draft on your products before you sign."],
  },
];

const CITY_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: "Typical Pune agency" },
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
    feature: "Dealer portal with part number search and price slabs",
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="agency" kind="partial" />, <CompareIcon key="freelancer" kind="no" />, <CompareIcon key="marketplace" kind="no" />],
  },
  {
    feature: "Orders pushed into Tally, Zoho Books or your ERP",
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

export default function PuneEcommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="pune-ecom-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="pune-ecom-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="pune-ecom-local-schema"
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
          { name: 'Ecommerce Development India', url: 'https://factoryjet.com/ecommerce-development' },
          { name: "Pune", url: 'https://factoryjet.com/services/ecommerce-development/pune' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Ecommerce Development India', url: 'https://factoryjet.com/ecommerce-development' },
          { name: "Pune", url: 'https://factoryjet.com/services/ecommerce-development/pune' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="services_ecommerce_development_pune_hero" />}
          eyebrow="ECOMMERCE WEBSITE DEVELOPMENT · PUNE"
          headline="Ecommerce Website Development Company in Pune for D2C Brands and Auto Component Suppliers"
          lead="FactoryJet builds Shopify and WooCommerce stores for Pune D2C brands in health, gadgets and fashion, and dealer portals for auto component makers in Pimpri-Chinchwad, Bhosari and Chakan. Razorpay, UPI and COD at checkout, a GST invoice on every order, and a draft of your store before you sign."
          secondaryCta={{ label: 'See a draft of my store', modal: true as const, region: 'in' as const }}
          trustItems={[
            'Draft store before you sign',
            'Razorpay + UPI + COD ready',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-7 shadow-sm">
              <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#B23E13]">WHAT A PUNE STORE USUALLY NEEDS</p>
              <ul className="mt-5 space-y-3">
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Dealers</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Part number search, price slabs and one-click reorder</p></li>
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">D2C brands</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Subscriptions with UPI AutoPay, Instagram selling</p></li>
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Accounts</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Orders pushed into Tally, Zoho Books or your ERP</p></li>
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Checkout</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Razorpay with UPI, cards, EMI and COD limits</p></li>
              </ul>
              <p className="mt-5 rounded-xl bg-[rgba(240,90,40,0.08)] px-4 py-3 font-fj-body text-[0.875rem] font-semibold text-[#B23E13]">Custom-theme stores take 3 to 5 weeks. Fixed price per phase, in writing.</p>
            </div>
          }
        />

        {/* ── 1b. ANSWER FIRST ─────────────────────────────────────────────── */}
        <AnswerFirst
          eyebrow="THE SHORT ANSWER"
          question={"Which is the best ecommerce website development company in Pune?"}
          answer={[
            "Pune has two kinds of online seller, and the right firm can build for both. A Hinjewadi supplement brand needs a fast Shopify store with subscriptions. A Chakan parts maker needs a dealer portal with price slabs, part number search and GST invoices that flow into Tally. FactoryJet scopes which one comes first, fixes the price per phase in writing, and builds a working draft on your own products before you sign.",
            "We are a registered Shopify Partner, rated 5.0 on Clutch from 4 reviews and 5.0 on GoodFirms from 5 reviews. Whoever you shortlist in Pune, ask to see one consumer store and one trade portal they built, and test both on your phone.",
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
          description="Built for D2C brands, B2B suppliers and Shopify sellers in India, the US, the UK and the UAE. Pune buyers get the same terms: a fixed price per phase, the full codebase, and a draft store before they sign."
        />

        {/* ── 4. PLATFORM EXPLANATION ──────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="ECOMMERCE DEVELOPMENT · PUNE"
          headline="Which Platform Fits a Pune Business"
          lead="A Hinjewadi supplement brand, a Bhosari forging unit selling spares to dealers and a Laxmi Road saree shop going online need three different builds. We pick the platform after we see your catalogue and your buyers, and before we quote."
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
                Pune shoppers compare before they buy. Many work in IT, read specs closely and leave a store that hides delivery dates or return terms. For them the store has to load fast on a phone, show the total price early and offer UPI in one tap. Trade buyers in the MIDC belts want something else: part numbers, price slabs and a GST invoice they can file.
              </p>

              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  A store earns its keep in orders, not in compliments on the design.
                </p>
              </div>

              <p>
                We design each Pune build around how its buyers pay and ask questions. That means UPI near the top of checkout, a WhatsApp button where doubts come up, size or spec tables close to the price, and EMI shown on higher-value items. Dealer portals get a quick reorder screen, because most trade orders repeat last month.
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
                  Pune platform guide
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
                  We pick the platform your catalogue needs, not the priciest one.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 4b. BUYER QUESTIONS ──────────────────────────────────────────── */}
        <QuestionAnswers
          eyebrow={"WHAT PUNE BUYERS ASK BEFORE HIRING"}
          intro="Short answers to the questions buyers type into Google and ask AI assistants. Prices quoted here are Shopify's and Razorpay's published prices, not ours."
          items={CITY_QUESTIONS}
          bgClassName="bg-white"
        />

        {/* ── 5. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Pune Founders Work With FactoryJet"
          lead="Two things go wrong most often with store builds: the price moves and the launch slips. We quote a fixed price for each phase, write the launch date into the agreement, and show you a working draft on your own products before you sign."
          pillars={[
            {
              icon: '⚡',
              title: 'A draft store before you sign.',
              body: 'We build a draft on a handful of your real products, so your team can test the product page, cart and checkout on their phones. The launch date goes into the agreement, and 97% of our projects have been delivered on time or early.',
            },
            {
              icon: '📱',
              title: 'Built for the phone your buyer holds.',
              body: 'Pune buyers browse between shifts and on the commute. We design at 375px first: thumb-sized buttons, product photos that load fast on 4G, and a checkout that finishes in a few taps. Desktop comes second.',
            },
            {
              icon: '📋',
              title: 'Fixed price. Agreed before we start.',
              body: 'Each phase is scoped and priced on its own, in writing, before work begins. No hourly meter and no surprise invoice at launch. Support after launch is optional, and every change is quoted before we do it.',
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How a Pune Store Goes From Brief to Launch"
          lead="We settle the platform first, get your sign-off on design second, and test every payment and courier flow before go-live."
          stages={PUNE_ECOM_STAGES}
          closingNote="5 STAGES · PLATFORM FIRST · RAZORPAY + GST + SHIPROCKET · LIGHTHOUSE 90+ · CODE HANDED OVER"
        />

        {/* ── 7. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="PUNE ECOMMERCE MARKET"
          headline="What Pune Businesses Sell Online"
          leadParagraphs={[
            'Pune runs two commerce economies side by side. One is industrial: the auto and engineering suppliers of Pimpri-Chinchwad, Bhosari and Chakan, who sell parts, tooling and spares to OEMs and dealers. The other is consumer: IT staff in Hinjewadi, Kharadi and Magarpatta who buy health products, gadgets and fashion online, often from young D2C brands started in the same city.',
            'Each side needs a different store. Industrial suppliers want a dealer portal where approved buyers log in, search by part number, see their own price and download a GST invoice. Consumer brands want a fast Shopify store with subscriptions, Instagram selling and quick delivery across the city. Older retailers on Laxmi Road and in the peth areas, selling sarees, jewellery and Paithani, are a third group taking trusted names online.',
            'Pune buyers read before they pay. Clear specifications, honest delivery dates and a visible returns policy do more for sales here than discounts do. We put those on every product page, and write the copy in plain English, with Marathi where your customers expect it.',
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
          headline={"Choosing an Ecommerce Developer in Pune"}
          lead={"Four ways to get an online store in Pune, compared on what decides the result."}
          columns={CITY_COMPARISON_COLUMNS}
          rows={CITY_COMPARISON_ROWS}
          footer="Agency and freelancer cells are general patterns, not claims about any one firm. Ask every firm you shortlist the same questions."
        />

        {/* ── 8. INDUSTRIES (DARK) ─────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="PUNE × ECOMMERCE"
          headline="Pune Sectors We Build Stores For"
          lead="Pune buyers range from OEM purchase teams in Chakan to students near FC Road. These six sectors each need a different mix of catalogue, checkout and delivery."
          sectors={[
            {
              name: 'Auto Components & Engineering',
              description:
                'Dealer and distributor portals for parts makers in Pimpri-Chinchwad, Bhosari and Chakan: part number search, fitment tables, price slabs by buyer, bulk orders and GST invoices.',
              example:
                'Forging and casting units, aftermarket spares sellers, EV component makers.',
            },
            {
              name: 'IT Products & Tech D2C',
              description:
                'Hinjewadi and Kharadi buyers are used to fast apps. Gadget and accessory brands need spec comparison, EMI on the product page and quick doorstep delivery.',
              example:
                'Laptop accessory brands, smart home device sellers, IT hardware resellers.',
            },
            {
              name: 'Health, Wellness & Fitness',
              description:
                'Supplement and fitness brands selling to office workers need subscriptions, FSSAI details on each product and reminders that bring buyers back each month.',
              example:
                'Protein and supplement brands, millet and health food labels, ayurvedic wellness makers.',
            },
            {
              name: 'Fashion & Sarees',
              description:
                'From FC Road streetwear to Paithani weavers, fashion stores need size and drape guides, Instagram selling and an exchange flow for the wrong fit.',
              example:
                'Paithani and Maharashtrian saree sellers, streetwear labels, ethnic wear boutiques.',
            },
            {
              name: 'Education Products',
              description:
                'A city of colleges and coaching classes buys books, kits and stationery online. These stores need bundles by course, stock planned around the academic year, and COD.',
              example:
                'STEM kit makers, stationery brands, exam prep book sellers.',
            },
            {
              name: 'Food & Snacks',
              description:
                'Pune bakeries, snack makers and coffee roasters ship across India. They need FSSAI labelling, shelf-life notes, gift boxes and festival bundles.',
              example:
                'Bakery and chakli makers, coffee roasters, packaged snack brands.',
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
          headline={"See your Pune store working before you sign."}
          sub={"Share your catalogue, dealer price list or current store link. We will build a draft on a few of your real products and put the price of each phase in writing."}
          label="See a draft of my store"
        />
        {/* ── 11. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What founders say after a FactoryJet launch"
        />

        {/* ── 12. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Questions Pune Founders Ask Before They Sign"
          lead="Straight answers to what Pune brands and suppliers ask on a first call: time, cost, payments, GST and who owns the code."
          categories={PUNE_ECOM_FAQ_CATEGORIES}
          items={PUNE_ECOM_FAQ_ITEMS}
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
          headline="Your Pune Store or Dealer Portal, Built Around Your Buyers"
          sub="500+ businesses across India, the US, the UK and the UAE have worked with FactoryJet. Tell us what you sell in Pune and we will recommend a platform, fix the price per phase in writing, and show you a draft of the store before you sign."
          primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'View Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price per phase. Draft before contract. Razorpay, GST and Shiprocket set up. The code is yours from day one."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
