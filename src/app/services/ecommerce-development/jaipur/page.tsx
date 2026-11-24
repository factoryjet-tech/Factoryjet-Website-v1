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
  title: "Best Ecommerce Website Development in Jaipur | FactoryJet",
  description:
    "Ecommerce website development company in Jaipur for gem jewellers, block-print and blue pottery brands and exporters. Shopify, UPI and global checkout.",
  keywords: [
    'ecommerce development company jaipur',
    'ecommerce website development jaipur',
    'shopify development jaipur',
    'woocommerce development jaipur',
    'online store development jaipur',
    'custom ecommerce development jaipur',
    'ecommerce website cost jaipur',
    'd2c website jaipur',
    'razorpay shopify jaipur',
    'gems jewellery ecommerce jaipur',
    'handicraft ecommerce jaipur',
    'rajasthani textiles ecommerce jaipur',
    'b2b ecommerce jaipur',
    'marble ecommerce jaipur',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: "Ecommerce Website Development Company in Jaipur | FactoryJet",
    description:
      "Online stores for Johari Bazaar jewellers, Sanganer and Bagru block printers, blue pottery makers and exporters, with UPI at home and local currency abroad. A draft store before you sign.",
    url: 'https://factoryjet.com/services/ecommerce-development/jaipur',
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
    title: "Ecommerce Website Development Company in Jaipur | FactoryJet",
    description:
      "Jaipur ecommerce: gem, block print and craft stores with global checkout, UPI and GST.",
    images: ['https://factoryjet.com/images/services/card-ecommerce.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ecommerce-development/jaipur',
    languages: ecommerceCityAlternatesIN['jaipur'],
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
  '@id': 'https://factoryjet.com/services/ecommerce-development/jaipur#webpage',
  url: 'https://factoryjet.com/services/ecommerce-development/jaipur',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce Development Jaipur',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Ecommerce Development',
  areaServed: {
    '@type': 'City',
    name: 'Jaipur',
    '@id': 'https://www.wikidata.org/wiki/Q66485', // Wikidata label: Jaipur (capital of Rajasthan, India)
  },
  description:
    'Ecommerce development for Jaipur businesses: Shopify and WooCommerce stores for gemstone and silver jewellers, block-print textile and blue pottery brands, wholesale catalogues for overseas boutiques, GST invoicing. Lighthouse 95+.',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
  name: 'FactoryJet Ecommerce Development Jaipur',
  url: 'https://factoryjet.com/services/ecommerce-development/jaipur',
  image: 'https://factoryjet.com/logo.png',
  description:
    'Ecommerce development company serving Jaipur jewellers, craft brands and exporters. Shopify, WooCommerce and custom builds with Razorpay, UPI, COD, international checkout and GST invoicing.',
  areaServed: [
    'Vaishali Nagar', 'Malviya Nagar', 'C-Scheme', 'Mansarovar', 'Jagatpura',
    'Sanganer', 'Bani Park', 'Tonk Road',
  ],
  
};

/* ─────────────────────────────────────────────────────────────────────────────
   Journey Stages
───────────────────────────────────────────────────────────────────────────── */

const JAIPUR_ECOM_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Markets and Platform',
    description:
      'We map where your buyers are: Rajasthan, the rest of India, overseas retail or overseas boutiques. That sets the currencies, couriers, wholesale rules and the platform we recommend.',
  },
  {
    number: '02',
    title: 'Design With Your Craft',
    description:
      'Figma screens built with your real products: close-ups, colour variants, maker notes and gift options. You approve layouts and trust details, including certificates, before development.',
  },
  {
    number: '03',
    title: 'Build, Payments and Shipping',
    description:
      'Store build, Razorpay for UPI, cards and COD, international payments, GST invoices with HSN codes, Shiprocket for India and a cross-border courier for exports, plus catalogue upload.',
  },
  {
    number: '04',
    title: 'Test Orders, Home and Abroad',
    description:
      'We test orders as an Indian buyer and an overseas buyer, check duty messages, invoices and labels, and run Lighthouse on mobile against a 90+ score.',
  },
  {
    number: '05',
    title: 'Launch and Handover',
    description:
      'Domain switch without downtime, sitemap submitted, code and logins handed over, team trained. Defects in our work are fixed at no charge within the agreed cover period.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ
───────────────────────────────────────────────────────────────────────────── */

const JAIPUR_ECOM_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'platform',  label: 'Platform & Tech' },
  { key: 'india',     label: 'India-Specific' },
  { key: 'seo',       label: 'Speed & SEO' },
  { key: 'trust',     label: 'Process & Ownership' },
];

const JAIPUR_ECOM_FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How long will it take to launch my Jaipur store?',
    answer:
      'A store with a custom-designed theme takes 3 to 5 weeks once products, photos and gateway approval arrive. Wholesale catalogues for overseas boutiques take 5 to 8 weeks, and fully custom platforms take 8 to 14 weeks.',
  },
  {
    category: 'pricing',
    question: 'What does an ecommerce store cost in Jaipur?',
    answer:
      'It depends on scope. For Jaipur businesses, the largest factors are overseas selling in several currencies, wholesale rules for boutiques, the number of products and colourways, and certificate handling for stones. We quote a fixed price in writing after a short call.',
  },
  {
    category: 'pricing',
    question: 'How do I pay for the project?',
    answer:
      'Phase by phase. Each phase, such as the retail store and then a wholesale portal, is scoped and priced in writing, and you sign it before work starts. Pay by NEFT, RTGS or UPI. Nothing is billed by the hour.',
  },
  {
    category: 'pricing',
    question: 'Can I see the store working before I sign?',
    answer:
      'Yes. We build a draft with a few of your real products and walk you through it, from product page to payment. You can test it as a buyer would. If it does not show your craft well, you owe us nothing.',
  },
  {
    category: 'platform',
    question: 'Which platform suits a block-print or blue pottery brand?',
    answer:
      'Shopify for most. It handles colours, sizes and sets as variants, shows prices in overseas currencies through Shopify Markets, and takes UPI, COD and international cards. WooCommerce fits if you already have a WordPress site with lots of craft stories.',
  },
  {
    category: 'platform',
    question: 'Can overseas boutiques order wholesale from my store?',
    answer:
      'Yes. Approved boutiques log in to see trade prices, minimum order quantities and lead times, request quotes for custom colours or sizes, and pay by card or bank transfer. Retail buyers never see the trade prices.',
  },
  {
    category: 'platform',
    question: 'Do you set up UPI, cards and COD?',
    answer:
      'Yes. Razorpay is our default gateway, covering UPI, cards, net banking, wallets and EMI in India, with international cards for approved accounts. PayPal or Stripe can be added for overseas buyers. COD can be limited by order value.',
  },
  {
    category: 'platform',
    question: 'Can gem dealers sell online safely?',
    answer:
      'Yes. Each stone gets a certificate image, carat and cut details and close-up video. High-value pieces can be made enquiry-only, with insured shipping and COD switched off. Trade buyers see a login-only catalogue with dealer rates.',
  },
  {
    category: 'india',
    question: 'How does GST work on a Jaipur store?',
    answer:
      'Orders within Rajasthan carry CGST and SGST, and orders from other states carry IGST. Exports are handled as zero-rated supplies with the right invoice format. The store prints HSN codes and lets business buyers add a GSTIN.',
  },
  {
    category: 'india',
    question: 'Which couriers work for Jaipur shipments?',
    answer:
      'Shiprocket for Indian orders, with Delhivery, Blue Dart, Xpressbees and others in one account and returns handled. For overseas orders we connect a cross-border courier such as DHL, FedEx or Shiprocket X. Fragile pottery and marble need packaging rules and insurance set per product.',
  },
  {
    category: 'india',
    question: 'Can my store be in Hindi?',
    answer:
      'Yes. A Hindi version can run next to English on its own URL. Overseas stores can also add French or German storefronts if you sell to European boutiques. We test fonts on budget phones and recommend a person writes the product text.',
  },
  {
    category: 'india',
    question: 'How do I handle colour variation in hand-made products?',
    answer:
      'Say it clearly on every product page and in the cart: hand-printed and hand-glazed pieces vary slightly. We add a short note, a photo showing two real pieces side by side, and a returns policy that explains how variation is treated.',
  },
  {
    category: 'seo',
    question: 'Will my store rank for Jaipur and craft searches?',
    answer:
      'It can. We set up product and breadcrumb schema, clean titles, canonical tags and a sitemap from launch. Craft and process pages help you rank for searches like block print bedsheets. A showroom in C-Scheme or Johari Bazaar gets linked to your Google Business Profile.',
  },
  {
    category: 'seo',
    question: 'Do you test the store speed?',
    answer:
      'Yes. Before handover we test the main pages on mobile with Lighthouse and share the report. We aim for 90+ with LCP under 2.5 seconds, which takes careful work on image-heavy craft stores.',
  },
  {
    category: 'seo',
    question: 'Can you speed up an existing slow store?',
    answer:
      'Yes. We audit the slowest pages, find what slows them, such as large photos, unused apps or heavy themes, and give you ranked fixes at a fixed price. Often a handful of changes recovers most of the speed.',
  },
  {
    category: 'seo',
    question: 'Will close-up craft photos slow the site?',
    answer:
      'Not when they are prepared properly. We serve modern formats sized for each screen, load zoom images only when tapped and lazy-load photos further down the page. You keep the detail without the wait.',
  },
  {
    category: 'trust',
    question: 'Do I own the store and the code?',
    answer:
      'Yes. The store, domain, payment and courier accounts are in your business name, and you get the code repository and every admin login. Hosting and apps can bill your account at cost. You are free to change developers whenever you wish.',
  },
  {
    category: 'trust',
    question: 'What happens at handover?',
    answer:
      'We train your team on adding products, updating prices, handling domestic and overseas orders and managing wholesale accounts. You get a handover file with every login, integration contacts and a first-month checklist.',
  },
  {
    category: 'trust',
    question: 'What support do you offer after launch?',
    answer:
      'Defects in our build are fixed within the build price during a cover period agreed at the start. After that, support is optional. Changes are quoted one at a time and approved first, with no monthly minimum.',
  },
  {
    category: 'trust',
    question: 'Can my workshop staff update the store?',
    answer:
      'Yes. On Shopify, adding products, updating stock and prices, and processing orders need no coding. We set up staff accounts and record short videos of the tasks they repeat, such as adding a new print in several colours.',
  },
  {
    category: 'pricing',
    question: 'Who is the best ecommerce development company in Jaipur?',
    answer:
      'Before choosing an ecommerce website development company in Jaipur, ask who writes the code, whether the price is fixed in writing and whether you own the store at the end. FactoryJet answers all three plainly and builds a draft before you sign. Ask every ecommerce solution company in Jaipur the same three questions.',
  },
  {
    category: 'pricing',
    question: 'Should I hire an ecommerce developer in Jaipur or an agency?',
    answer:
      'A single developer can make a basic store. Selling crafts at home and abroad also needs design, payments in several currencies, export shipping, GST and SEO. A small senior team covers it at a fixed price. If you hire an ecommerce developer in Jaipur, check two of their stores on your phone first.',
  },
  {
    category: "platform",
    question: "Who is the best Shopify developer in Jaipur for craft and jewellery brands?",
    answer:
      "Pick a Shopify developer in Jaipur who has built stores with zoomable craft photos, certificates and overseas checkout, not only standard themes. FactoryJet is a registered Shopify Partner with senior developers on every build. We make a draft with a few of your pieces first, so you see your craft online before you pay.",
  },
  {
    category: "platform",
    question: "Can overseas boutiques reorder from a Jaipur wholesale portal on their own?",
    answer:
      "Yes. We build wholesale portals on Shopify Plus B2B or on Commerceflo, our own B2B platform. Approved boutiques log in, see trade prices and minimum quantities, and repeat a past order without emailing a spreadsheet. Belle Maison, a home decor wholesaler, takes trade orders on a Commerceflo store we built.",
  },
  {
    category: "india",
    question: "Can tourists who bought in Jaipur reorder from home?",
    answer:
      "Yes. A store with global checkout lets a visitor who bought a quilt or mojaris in Jaipur find the same piece again and pay in their own currency. We add a cross-border courier, show duties at checkout, and keep product names the same as on your shop labels so returning buyers find them.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: JAIPUR_ECOM_FAQ_ITEMS.map((item) => ({
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
  '@id': 'https://factoryjet.com/services/ecommerce-development/jaipur#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ecommerce-development/jaipur',
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
    q: "How much does it cost to build an ecommerce website in Jaipur?",
    a: ["The build price for a Jaipur store depends mostly on selling abroad in several currencies, wholesale rules for overseas boutiques, how many products and colourways you list, and certificate handling for stones. Running costs are separate and published by the platforms. Shopify's India page lists Basic at ₹1,499 a month on yearly billing. Razorpay lists 2% per domestic transaction plus GST on the fee. We quote the build as a fixed price per phase."],
    sources: [CITY_SRC.shopifyPricing, CITY_SRC.razorpay],
  },
  {
    q: "Which ecommerce platform is best for a Jaipur jeweller or craft exporter?",
    a: ["Shopify suits most Jaipur makers. It treats colours, sizes and sets as variants, and Shopify Markets shows prices in each buyer's currency. Gem dealers with many certified stones can stay on Shopify with enquiry-only pages for high-value pieces, or move to a custom build. WooCommerce fits a studio that already has a WordPress site full of craft stories."],
  },
  {
    q: "How long does a Jaipur online store take to launch?",
    a: ["A store with a custom-designed theme takes 3 to 5 weeks. Wholesale catalogues for overseas boutiques, with trade prices and quote requests, take 5 to 8 weeks. Fully custom platforms take 8 to 14 weeks. Teej, Diwali and the wedding season bring the busiest domestic orders, so brief us about two months before the season you want to catch."],
  },
  {
    q: "What should a Jaipur exporter check before hiring an ecommerce developer?",
    a: ["Ask for a live store that sells overseas and place a test order in a foreign currency. Ask how they would show certificates for stones, colour variation in hand-printed fabric, and packing rules for fragile pottery. Ask who writes the code. Get the price per phase in writing, and keep the store, domain and code in your business name."],
  },
];

const CITY_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: "Typical Jaipur agency" },
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
    feature: "Prices in overseas currencies with a cross-border courier at checkout",
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="agency" kind="partial" />, <CompareIcon key="freelancer" kind="partial" />, <CompareIcon key="marketplace" kind="partial" />],
  },
  {
    feature: "Login-only wholesale catalogue for boutiques abroad",
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="agency" kind="partial" />, <CompareIcon key="freelancer" kind="no" />, <CompareIcon key="marketplace" kind="no" />],
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

export default function JaipurEcommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="jaipur-ecom-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="jaipur-ecom-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="jaipur-ecom-local-schema"
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
          { name: "Jaipur", url: 'https://factoryjet.com/services/ecommerce-development/jaipur' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Ecommerce Development India', url: 'https://factoryjet.com/ecommerce-development' },
          { name: "Jaipur", url: 'https://factoryjet.com/services/ecommerce-development/jaipur' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="services_ecommerce_development_jaipur_hero" />}
          eyebrow="ECOMMERCE WEBSITE DEVELOPMENT · JAIPUR"
          headline="Ecommerce Website Development Company in Jaipur for Jewellers, Craft Brands and Exporters"
          lead="FactoryJet builds online stores for Jaipur gem and silver jewellers, Sanganer and Bagru block printers and blue pottery studios, plus wholesale catalogues for exporters who sell to boutiques abroad. UPI and COD for Indian buyers, cards and local currency for overseas ones, and a draft of your store before you sign."
          secondaryCta={{ label: 'See a draft of my store', modal: true as const, region: 'in' as const }}
          trustItems={[
            'Draft store before you sign',
            'Razorpay + UPI + COD ready',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-7 shadow-sm">
              <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#B23E13]">WHAT A JAIPUR STORE USUALLY NEEDS</p>
              <ul className="mt-5 space-y-3">
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Gems</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Certificate images, carat and cut details, close-up video</p></li>
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Crafts</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Colour variation notes and maker details</p></li>
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Exports</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Overseas currencies and a cross-border courier</p></li>
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Wholesale</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Login-only trade prices for boutiques abroad</p></li>
              </ul>
              <p className="mt-5 rounded-xl bg-[rgba(240,90,40,0.08)] px-4 py-3 font-fj-body text-[0.875rem] font-semibold text-[#B23E13]">Custom-theme stores take 3 to 5 weeks. Fixed price per phase, in writing.</p>
            </div>
          }
        />

        {/* ── 1b. ANSWER FIRST ─────────────────────────────────────────────── */}
        <AnswerFirst
          eyebrow="THE SHORT ANSWER"
          question={"Which is the best ecommerce website development company in Jaipur?"}
          answer={[
            "A Jaipur store has to sell a craft to someone who cannot touch it. The firm you pick should know how to show a hand-carved block print, a blue pottery glaze or an emerald certificate on a phone screen, and how to take payment in rupees and in dollars. FactoryJet designs around close-up photos, maker notes and global checkout, fixes each phase's price in writing, and builds a draft on your own pieces before you sign.",
            "We are a registered Shopify Partner, rated 5.0 on Clutch from 4 reviews and 5.0 on GoodFirms from 5 reviews. Ask any Jaipur firm on your list to show a store that sells abroad, then check the checkout in a foreign currency.",
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
          description="Stores for craft brands, jewellers and exporters in India, the US, the UK and the UAE. Jaipur makers get a fixed price per phase, every file and login handed over, and a draft store before they sign."
        />

        {/* ── 4. PLATFORM EXPLANATION ──────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="ECOMMERCE DEVELOPMENT · JAIPUR"
          headline="The Right Store for a Jaipur Maker"
          lead="A Johari Bazaar emerald dealer, a Bagru block printer selling bedsheets to Europe and a blue pottery studio shipping gifts across India each need a different store. We look at your buyers and products first, then propose a platform and a fixed price."
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
                Jaipur products carry a story: a hand-carved block, a natural dye, a stone cut in the old city. Online, that story is most of the sale. A buyer in Paris or Pune cannot touch the fabric, so the photos, the maker details and the care notes have to do the work a shopkeeper does in Johari Bazaar. A generic template hides all of it.
              </p>

              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  A hand-made product needs a page that shows the hand that made it.
                </p>
              </div>

              <p>
                We design Jaipur stores around the craft. Close-up photos of the print and the glaze, maker and process notes, colour variation explained up front, and certificates for stones. Checkout offers UPI and COD at home and cards in local currency abroad. Wholesale buyers get a login, minimum order quantities and a quote request for custom runs.
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
                  Jaipur platform guide
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
                  We suggest the platform your craft needs, not the costliest option.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 4b. BUYER QUESTIONS ──────────────────────────────────────────── */}
        <QuestionAnswers
          eyebrow={"WHAT JAIPUR BUYERS ASK BEFORE HIRING"}
          intro="Short answers to the questions buyers type into Google and ask AI assistants. Prices quoted here are Shopify's and Razorpay's published prices, not ours."
          items={CITY_QUESTIONS}
          bgClassName="bg-white"
        />

        {/* ── 5. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Jaipur Makers Work With FactoryJet"
          lead="Many Jaipur businesses have been burned by a site that looked fine and sold nothing abroad. We price each phase in writing, put the launch date into the agreement, and build a draft on your own products before you pay us anything."
          pillars={[
            {
              icon: '⚡',
              title: 'A draft store before you sign.',
              body: 'We build a draft with a handful of your real pieces, so you can see your prints, glazes or stones on a phone before you pay. The launch date goes into the agreement, and 97% of our projects have been delivered on time or early.',
            },
            {
              icon: '📱',
              title: 'Craft that reads on a small screen.',
              body: 'Your overseas buyer and your Indian buyer both shop on phones. We design at 375px first, with zoomable photos of the print and glaze, clear size and colour notes, and a short checkout in their currency.',
            },
            {
              icon: '📋',
              title: 'Fixed price. Agreed before we start.',
              body: 'Each phase has a written scope and fixed price before work starts. No hourly billing, no surprise bill at launch. Support after go-live is optional and quoted per change.',
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Workshop to Online Store in Jaipur"
          lead="We agree the platform and markets, design with your products, and test domestic and overseas orders before launch."
          stages={JAIPUR_ECOM_STAGES}
          closingNote="5 STAGES · INDIA + OVERSEAS CHECKOUT · UPI + CARDS + GST · LIGHTHOUSE 90+ · EVERY FILE HANDED OVER"
        />

        {/* ── 7. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="JAIPUR ECOMMERCE MARKET"
          headline="What Jaipur Sells to the World"
          leadParagraphs={[
            "Jaipur is one of the world's best-known centres for coloured gemstones, and Johari Bazaar and the old city workshops cut, set and trade emeralds and other stones for buyers at home and abroad. Silver and kundan jewellery sell alongside them. Online, this trade needs certificates, close-up video and insured shipping before a buyer will pay.",
            "The city's textile crafts are just as famous. Sanganer and Bagru print fabric by hand with wooden blocks, and leheriya and bandhej dyeing are sold in Bapu Bazaar next to mojaris and quilts. Blue pottery, carpets and dhurries, and marble work from Makrana round out a craft economy that already ships to boutiques in Europe, the US and Australia, often through email and spreadsheets.",
            'That is the opportunity. A Jaipur maker who moves wholesale orders into a portal and adds a retail store with global checkout can reach buyers directly. Tourists who visited once can reorder from home. Festive peaks around Teej, Diwali and wedding season drive domestic orders. We build for both markets and keep the store fast on a phone.',
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
          headline={"Choosing an Ecommerce Developer in Jaipur"}
          lead={"Four ways to get an online store in Jaipur, compared on what decides the result."}
          columns={CITY_COMPARISON_COLUMNS}
          rows={CITY_COMPARISON_ROWS}
          footer="Agency and freelancer cells are general patterns, not claims about any one firm. Ask every firm you shortlist the same questions."
        />

        {/* ── 8. INDUSTRIES (DARK) ─────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="JAIPUR × ECOMMERCE"
          headline="Jaipur Sectors We Build For"
          lead="From Johari Bazaar gem dealers to Bagru printers and Makrana marble carvers, these six sectors cover most of the Jaipur work we scope."
          sectors={[
            {
              name: 'Gems & Jewellery',
              description:
                'Gemstone and silver jewellers need certificate display, carat and cut details, close-up video, insured shipping and a login-only catalogue for trade buyers.',
              example:
                'Emerald and coloured stone dealers, silver and kundan jewellers, Sitapura jewellery exporters.',
            },
            {
              name: 'Block Print & Textiles',
              description:
                'Sanganer and Bagru printers sell bedsheets, quilts, kurtas and fabric by the metre. Stores need colour variation notes, fabric care, size charts and wholesale ordering.',
              example:
                'Block print studios, quilt and bedding brands, leheriya and bandhej sellers.',
            },
            {
              name: 'Blue Pottery & Home Decor',
              description:
                'Fragile, hand-made goods need careful product photos, breakage-safe packaging rules, gift messages and clear delivery dates.',
              example:
                'Blue pottery studios, home decor brands, carpet and dhurrie makers.',
            },
            {
              name: 'Mojaris & Fashion',
              description:
                'Bapu Bazaar mojaris and Rajasthani fashion sell to brides, tourists and gift buyers. Stores need size help for hand-made footwear and exchange flows.',
              example:
                'Mojari makers, Rajasthani ethnic wear labels, bridal accessory sellers.',
            },
            {
              name: 'Marble & Stone Craft',
              description:
                'Makrana marble and stone craft sells to homes, temples and designers. Stores need custom size requests, quote forms, freight options and export invoices.',
              example:
                'Marble idol and inlay makers, stone furniture brands, architectural stone suppliers.',
            },
            {
              name: 'Rajasthani Food & Spices',
              description:
                'Spices, pickles and sweets ship across India and to the diaspora. Stores need FSSAI details, shelf-life notes and festival gift boxes.',
              example:
                'Spice and masala brands, pickle makers, Rajasthani sweet and namkeen shops.',
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
          headline={"See your Jaipur store before you sign."}
          sub={"Send a few product photos, a price list or your current store link. We will build a draft on your real pieces and put the price of each phase in writing."}
          label="See a draft of my store"
        />
        {/* ── 11. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What founders say once their store goes live"
        />

        {/* ── 12. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="What Jaipur Makers Ask Before They Sign"
          lead="Answers to the questions Jaipur jewellers, printers and exporters ask most, from overseas payments to wholesale minimums and GST."
          categories={JAIPUR_ECOM_FAQ_CATEGORIES}
          items={JAIPUR_ECOM_FAQ_ITEMS}
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
          headline="Your Jaipur Craft, Sold at Home and Abroad"
          sub="FactoryJet has worked with 500+ businesses across India, the US, the UK and the UAE. Tell us what you make and where your buyers are. We will recommend a platform, put the price per phase in writing and show you a working draft before you sign."
          primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'View Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price per phase. Draft before contract. UPI, COD and global checkout. The code and every account belong to you."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
