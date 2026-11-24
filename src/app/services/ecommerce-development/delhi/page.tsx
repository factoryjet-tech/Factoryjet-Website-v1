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
  title: "Best Ecommerce Website Development in Delhi | FactoryJet",
  description:
    "Ecommerce website development company in Delhi NCR for Chandni Chowk traders, Sadar Bazaar wholesalers and D2C brands. Shopify, UPI, COD and GST.",
  keywords: [
    'ecommerce development company delhi',
    'ecommerce website development delhi',
    'shopify development delhi',
    'woocommerce development delhi',
    'online store development delhi',
    'custom ecommerce development delhi',
    'ecommerce website cost delhi',
    'd2c website delhi',
    'razorpay shopify delhi',
    'b2b ecommerce delhi',
    'whatsapp commerce delhi',
    'fashion ecommerce delhi',
    'jewellery ecommerce website delhi',
    'ecommerce agency delhi ncr',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: "Ecommerce Website Development Company in Delhi | FactoryJet",
    description:
      "Shopify stores and wholesale portals for Delhi NCR traders, bridal houses and D2C brands, with UPI, COD and GST for buyers in Delhi, Noida and Gurugram. A draft before you sign.",
    url: 'https://factoryjet.com/services/ecommerce-development/delhi',
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
    title: "Ecommerce Website Development Company in Delhi | FactoryJet",
    description:
      "Delhi NCR ecommerce: retail stores, wholesale portals and D2C builds with UPI, COD and GST.",
    images: ['https://factoryjet.com/images/services/card-ecommerce.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ecommerce-development/delhi',
    languages: ecommerceCityAlternatesIN['delhi'],
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
  '@id': 'https://factoryjet.com/services/ecommerce-development/delhi#webpage',
  url: 'https://factoryjet.com/services/ecommerce-development/delhi',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce Development Delhi',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Ecommerce Development',
  areaServed: {
    '@type': 'City',
    name: 'Delhi',
    '@id': 'https://www.wikidata.org/wiki/Q1353', // Wikidata label: Delhi (city and union territory, India)
  },
  description:
    'Ecommerce development for Delhi NCR businesses: Shopify and WooCommerce stores for bridal, jewellery and gifting brands, wholesale ordering portals for market traders, corporate gifting catalogues, GST invoicing. Lighthouse 95+.',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
  name: 'FactoryJet Ecommerce Development Delhi',
  url: 'https://factoryjet.com/services/ecommerce-development/delhi',
  image: 'https://factoryjet.com/logo.png',
  description:
    'Ecommerce development company serving Delhi, Noida, Gurugram, Ghaziabad and Faridabad businesses. Shopify, WooCommerce and custom builds with Razorpay, UPI, COD and GST invoicing.',
  areaServed: [
    'Connaught Place', 'Lajpat Nagar', 'Karol Bagh', 'Rohini',
    'Dwarka', 'Noida', 'Gurugram', 'Saket',
  ],
  
};

/* ─────────────────────────────────────────────────────────────────────────────
   Journey Stages
───────────────────────────────────────────────────────────────────────────── */

const DELHI_ECOM_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'How You Sell Today',
    description:
      'We start with your current trade: retail counter, wholesale lane, marketplace or Instagram. That tells us whether you need a retail store, a wholesale portal or both, and which platform fits.',
  },
  {
    number: '02',
    title: 'Design on Your Products',
    description:
      'We design home, collection, product and checkout or reorder screens with your own photos and prices, phone first. You approve price displays, return terms and WhatsApp placement before development.',
  },
  {
    number: '03',
    title: 'Build and Connect',
    description:
      'Store build, Razorpay with UPI, cards, wallets and COD, GST invoicing that handles Delhi, UP and Haryana buyers, courier links and catalogue upload from your billing software or sheets.',
  },
  {
    number: '04',
    title: 'Test Every Order Path',
    description:
      'Test orders on each payment method, wholesale logins with different price slabs, invoice checks for buyers in Delhi, Noida and Gurugram, and Lighthouse on mobile against a 90+ target.',
  },
  {
    number: '05',
    title: 'Launch and Hand Over',
    description:
      'Domain switch without downtime, sitemap submitted, code and every login handed over, staff trained. Defects in our work are fixed free during the cover period agreed before work began.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ
───────────────────────────────────────────────────────────────────────────── */

const DELHI_ECOM_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'platform',  label: 'Platform & Tech' },
  { key: 'india',     label: 'India-Specific' },
  { key: 'seo',       label: 'Speed & SEO' },
  { key: 'trust',     label: 'Process & Ownership' },
];

const DELHI_ECOM_FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How long does it take to build an ecommerce store in Delhi?',
    answer:
      'A store with a custom-designed theme takes 3 to 5 weeks once your products, photos and payment gateway approval arrive. Wholesale portals with price slabs and credit limits take 5 to 8 weeks, and custom platforms take 8 to 14 weeks.',
  },
  {
    category: 'pricing',
    question: 'How much does an ecommerce website cost in Delhi?',
    answer:
      'Price follows scope. In Delhi the big factors are wholesale price slabs, bridal made-to-measure options, large catalogues pulled from billing software, and corporate gifting flows. A simple retail store costs far less than a wholesale portal. We give you a fixed written price after a short call.',
  },
  {
    category: 'pricing',
    question: 'Can I pay for the build in parts?',
    answer:
      'Yes. We split the work into phases and price each one separately in writing. You sign a phase before it starts, so you never pay for work you did not agree to. NEFT, RTGS and UPI are accepted, and there is no hourly billing.',
  },
  {
    category: 'pricing',
    question: 'Can I check the store before paying anything?',
    answer:
      'Yes. We build a working draft with some of your actual products and show you the full buying path. Your family or partners can test it on their phones. If it is not what you want, you have spent nothing.',
  },
  {
    category: 'platform',
    question: 'Which platform suits a Delhi bridal or ethnic wear house?',
    answer:
      'Shopify works for most. It handles sizes, colours and custom measurements, supports video and appointment booking apps, and takes UPI, cards and international payments for NRI brides. For catalogues with thousands of items and complex options, a custom build may fit better.',
  },
  {
    category: 'platform',
    question: 'Can my Sadar Bazaar or Gandhi Nagar wholesale business take orders online?',
    answer:
      'Yes. We build a login-only portal where approved shops see their own price slab, carton or set quantities and credit limit. They reorder past orders in a couple of taps, and every order produces a GST invoice. Orders can export to Tally or Busy.',
  },
  {
    category: 'platform',
    question: 'Do you set up UPI, cards and COD?',
    answer:
      'Yes, on every store. Razorpay is our default, covering UPI, cards, net banking, wallets and EMI. We can connect PayU, CCAvenue or PhonePe instead. COD limits can be set by order value or pincode, which helps keep return-to-origin orders down.',
  },
  {
    category: 'platform',
    question: 'Can you run a corporate gifting catalogue for Diwali?',
    answer:
      'Yes. Companies can browse a catalogue, request a quote for bulk quantities, upload a list of delivery addresses and pay by bank transfer against a GST invoice. We build it as a separate section or a login-only portal for repeat corporate buyers.',
  },
  {
    category: 'india',
    question: 'How does GST work for a Delhi store selling across NCR?',
    answer:
      'Delhi orders carry CGST and SGST. Orders to Noida or Ghaziabad in Uttar Pradesh, or Gurugram and Faridabad in Haryana, are inter-state and carry IGST. The store applies the right split, prints HSN codes and lets business buyers add a GSTIN.',
  },
  {
    category: 'india',
    question: 'Which couriers work for Delhi stores?',
    answer:
      'Shiprocket covers most stores, with Delhivery, Blue Dart, Xpressbees, Ekart and others in one account and returns handled. For same-day delivery across NCR, partners such as Porter or Borzo work for gifts, food and urgent orders. Bulky wholesale orders may need a transport partner.',
  },
  {
    category: 'india',
    question: 'Can my store be in Hindi?',
    answer:
      'Yes. A Hindi version can run next to English, each on its own URL so Google can index both. We check Devanagari fonts on budget Android phones before launch and recommend that a person writes the product text.',
  },
  {
    category: 'india',
    question: 'How do I cut COD returns on a Delhi store?',
    answer:
      'Confirm each COD order on WhatsApp before dispatch, ask for a small advance on high-value COD orders, and turn COD off for pincodes with poor history. Showing the returns policy clearly at checkout also reduces refusals at the door.',
  },
  {
    category: 'seo',
    question: 'Will my store rank for Delhi searches?',
    answer:
      'It can. We add product and breadcrumb schema, clean titles, canonical tags and a sitemap at launch. If you have a shop in Karol Bagh or Chandni Chowk, we connect the store to your Google Business Profile so you show up on the map and in local searches.',
  },
  {
    category: 'seo',
    question: 'Do you check speed before launch?',
    answer:
      'Yes. We test the home, collection and product pages on mobile with Lighthouse and share the report. The goal is 90+ and LCP under 2.5 seconds. Image sizes and unnecessary apps are the usual culprits.',
  },
  {
    category: 'seo',
    question: 'Can you fix my slow Delhi store?',
    answer:
      'Yes. We audit the slowest pages, list the causes in order of impact, and quote a fixed price for the fixes. Common problems are oversized photos, apps loading on every page, heavy themes and chat widgets.',
  },
  {
    category: 'seo',
    question: 'Will a large wholesale catalogue load fast enough?',
    answer:
      'Yes, with the right setup. We use filtered search, load products in pages instead of all at once, and resize images for each screen. Buyers can also search by item code, which is faster than scrolling for most traders.',
  },
  {
    category: 'trust',
    question: 'Who owns the store and code?',
    answer:
      'You do. The store, domain, payment and courier accounts are in your business name, and the code repository and admin logins are handed to you. Hosting and app costs can run in your accounts at cost. You can change developers whenever you like.',
  },
  {
    category: 'trust',
    question: 'What does handover include?',
    answer:
      'A training session for your team on products, prices, orders, returns and wholesale accounts, plus a document with every login, integration contact and a checklist for the first month.',
  },
  {
    category: 'trust',
    question: 'Is there support after launch?',
    answer:
      'Yes. Defects in our work are fixed inside the build price during a cover period we agree before starting. After that, support is optional. You approve a quote for each change, and there is no monthly minimum.',
  },
  {
    category: 'trust',
    question: 'Can my staff manage the store without a developer?',
    answer:
      'Yes. On Shopify, adding products, updating prices, creating festive offers and processing orders need no coding. We set up staff logins and record short videos of the common tasks.',
  },
  {
    category: 'pricing',
    question: 'Who is the best ecommerce development company in Delhi?',
    answer:
      'Any ecommerce website development company in Delhi worth hiring should name who writes your code, fix the price in writing, and hand you full ownership at the end. FactoryJet does all three, for traders, wholesalers and D2C brands, and builds a draft before you sign. Test every ecommerce solution company in Delhi on those points.',
  },
  {
    category: 'pricing',
    question: 'Should I hire an ecommerce developer in Delhi or an agency?',
    answer:
      'A solo developer can launch a basic store. A store that trades well also needs design, payments, couriers, GST across states and SEO, which is a lot for one person. A small senior team covers it at a fixed price. If you hire an ecommerce developer in Delhi, test their past stores on your phone before you commit.',
  },
  {
    category: "platform",
    question: "Which is the best Shopify development company in Delhi for a wholesale business?",
    answer:
      "Pick a Shopify team that has built trade logins, price slabs and reorder lists, not only retail themes. FactoryJet is a registered Shopify Partner. We build retail stores and Shopify B2B wholesale sections for Delhi traders, and we show you a draft on your own products first, so you can judge the work before you pay.",
  },
  {
    category: "trust",
    question: "How do I choose an ecommerce agency in Delhi?",
    answer:
      "Compare every ecommerce agency in Delhi you meet on three points: who writes the code, whether the price is fixed per phase in writing, and whether the accounts are in your name at the end. Then test two of their live stores on your phone, including checkout. Ask for references from traders or brands that sell the way you do.",
  },
  {
    category: "platform",
    question: "Can one website serve my retail buyers and my wholesale shops?",
    answer:
      "Yes. Retail visitors see the public store with UPI and COD. Approved shops log in to the same catalogue and see their own rates, carton quantities and credit terms. For larger trade catalogues we can build the wholesale side on Commerceflo, our own B2B platform. Belle Maison, a home decor wholesaler, takes trade orders on a Commerceflo store we built.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: DELHI_ECOM_FAQ_ITEMS.map((item) => ({
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
  '@id': 'https://factoryjet.com/services/ecommerce-development/delhi#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ecommerce-development/delhi',
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
    q: "How much does an ecommerce website cost in Delhi?",
    a: ["Your build price is set by a few things: a retail store, a wholesale portal or both, how many price slabs your buyers get, catalogue size, and extras like bridal made-to-measure options. Running costs come on top. Shopify's India page lists the Basic plan at ₹1,499 a month on yearly billing. Razorpay lists 2% per domestic transaction, plus GST on that fee. We send a fixed written price for each phase after one short call."],
    sources: [CITY_SRC.shopifyPricing, CITY_SRC.razorpay],
  },
  {
    q: "Is Shopify or WooCommerce better for a Delhi wholesaler?",
    a: ["For most Sadar Bazaar and Gandhi Nagar wholesalers, Shopify with a login-only trade section works well: each shop sees its own rates, minimum quantities and reorder list. Shopify Plus suits bigger B2B catalogues. WooCommerce fits a trader who already runs a WordPress site. A custom build makes sense only when your price rules are too complex for either. Bridal and jewellery houses selling retail usually start on Shopify."],
  },
  {
    q: "How long does it take to build an ecommerce website in Delhi?",
    a: ["Plan on 3 to 5 weeks for a store with a custom-designed theme. A wholesale portal with price slabs and credit limits, or a move from another platform, takes 5 to 8 weeks. Headless or fully custom builds take 8 to 14 weeks. Corporate gifting orders across NCR peak before Diwali, so a gifting catalogue should be live several weeks before the season starts."],
  },
  {
    q: "What should I check before hiring an ecommerce developer in Delhi?",
    a: ["Ask to see a wholesale portal they built, not only retail themes. Check that they know the GST split between buyers in Delhi, Noida and Gurugram. Ask who writes the code, and get the price for each phase on paper. Make sure the store, domain and payment accounts are opened in your business name. A serious team will show you a draft on your products before any contract."],
  },
];

const CITY_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: "Typical Delhi ecommerce agency" },
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
    feature: "Login-only wholesale portal with price slabs and credit limits",
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="agency" kind="partial" />, <CompareIcon key="freelancer" kind="no" />, <CompareIcon key="marketplace" kind="no" />],
  },
  {
    feature: "Correct GST split for Delhi, Noida and Gurugram buyers",
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="agency" kind="partial" />, <CompareIcon key="freelancer" kind="partial" />, <CompareIcon key="marketplace" kind="partial" />],
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

export default function DelhiEcommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="delhi-ecom-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="delhi-ecom-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="delhi-ecom-local-schema"
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
          { name: "Delhi", url: 'https://factoryjet.com/services/ecommerce-development/delhi' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Ecommerce Development India', url: 'https://factoryjet.com/ecommerce-development' },
          { name: "Delhi", url: 'https://factoryjet.com/services/ecommerce-development/delhi' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="services_ecommerce_development_delhi_hero" />}
          eyebrow="ECOMMERCE WEBSITE DEVELOPMENT · DELHI"
          headline="Ecommerce Website Development Company in Delhi for Traders, Wholesalers and D2C Brands"
          lead="FactoryJet builds Shopify stores for Chandni Chowk and Karol Bagh houses taking the family name online, login-only wholesale portals for Sadar Bazaar and Gandhi Nagar traders, and D2C stores for Gurugram and Noida brands. UPI and COD at checkout, the right GST split for buyers across NCR, and a draft of your store before you sign."
          secondaryCta={{ label: 'See a draft of my store', modal: true as const, region: 'in' as const }}
          trustItems={[
            'Draft store before you sign',
            'Razorpay + UPI + COD ready',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-7 shadow-sm">
              <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#B23E13]">WHAT A DELHI STORE USUALLY NEEDS</p>
              <ul className="mt-5 space-y-3">
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Wholesale</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Buyer logins with price slabs, carton quantities and credit limits</p></li>
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Bridal</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Video, made-to-measure options and dispatch dates set by the wedding</p></li>
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">GST</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">CGST and SGST in Delhi, IGST for Noida, Gurugram and Faridabad</p></li>
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Checkout</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Razorpay with UPI, cards and COD limits by pincode</p></li>
              </ul>
              <p className="mt-5 rounded-xl bg-[rgba(240,90,40,0.08)] px-4 py-3 font-fj-body text-[0.875rem] font-semibold text-[#B23E13]">Custom-theme stores take 3 to 5 weeks. Fixed price per phase, in writing.</p>
            </div>
          }
        />

        {/* ── 1b. ANSWER FIRST ─────────────────────────────────────────────── */}
        <AnswerFirst
          eyebrow="THE SHORT ANSWER"
          question={"Which is the best ecommerce website development company in Delhi?"}
          answer={[
            "Start with how you sell today. A Karol Bagh jeweller, a Sadar Bazaar toy wholesaler and a Gurugram skincare brand each need a different build, so the right Delhi partner asks about your trade before it names a platform. FactoryJet scopes a retail store, a wholesale portal or both, fixes the price for each phase in writing, and builds a working draft on your own products before you sign anything.",
            "We are a registered Shopify Partner with a 5.0 rating on Clutch (4 reviews) and 5.0 on GoodFirms (5 reviews), and we have served 500+ businesses since 2014. Whoever you shortlist in Delhi, place a test order on two of their live stores from your own phone.",
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
          description="Retail stores, wholesale portals and D2C builds for businesses in India, the US, the UK and the UAE. Delhi NCR clients get a fixed price per phase, the full code in their name, and a draft store before they sign."
        />

        {/* ── 4. PLATFORM EXPLANATION ──────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="ECOMMERCE DEVELOPMENT · DELHI"
          headline="One City, Very Different Stores"
          lead="A Chandni Chowk lehenga house, a Sadar Bazaar toy wholesaler and a Gurugram skincare startup all sell in Delhi NCR, but they need different builds. We look at how you sell today and who buys, then recommend a platform and a fixed price."
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
                Delhi trade runs on trust built over decades in one market lane. Online, that trust has to be rebuilt from scratch. Buyers want to see the real product, the real price, the return terms and a phone number that answers. Wholesale buyers want something else again: price slabs, minimum quantities, credit and a GST invoice for every order.
              </p>

              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  The family name that sells in the market has to be earned again on the screen.
                </p>
              </div>

              <p>
                We build Delhi stores to carry that trust across. Real photos and video, clear prices and making charges, WhatsApp next to the buy button, COD with sensible limits, and returns explained before checkout. For wholesalers we add a login-only catalogue where each buyer sees their own rates and can reorder without calling.
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
                  Delhi platform guide
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
                  You get the platform your business needs, not the most expensive one.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 4b. BUYER QUESTIONS ──────────────────────────────────────────── */}
        <QuestionAnswers
          eyebrow={"WHAT DELHI BUYERS ASK BEFORE HIRING"}
          intro="Short answers to the questions buyers type into Google and ask AI assistants. Prices quoted here are Shopify's and Razorpay's published prices, not ours."
          items={CITY_QUESTIONS}
          bgClassName="bg-white"
        />

        {/* ── 5. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Delhi NCR Businesses Pick FactoryJet"
          lead="Delhi owners know how to bargain and hate surprises. So we put the price for each phase in writing, agree the launch date before work starts, and build a working draft on your own products before you sign."
          pillars={[
            {
              icon: '⚡',
              title: 'A draft store before you sign.',
              body: 'We build a draft on a few of your real products, so you and your partners can test it on your phones. The launch date is part of the agreement, and 97% of our projects have been delivered on time or early.',
            },
            {
              icon: '📱',
              title: 'Your buyers shop on phones. So do your wholesalers.',
              body: 'Retail buyers browse on the metro and wholesale buyers order from the shop floor. We design at 375px first, with thumb-friendly buttons, fast photos and a checkout or reorder screen that takes a few taps.',
            },
            {
              icon: '📋',
              title: 'Fixed price. Agreed before we start.',
              body: 'Each phase is scoped and priced in writing before work begins. No hourly bills, no last-minute extras. Support after launch is optional, and any change is quoted for your approval first.',
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Take a Delhi Store Live"
          lead="We fix the platform and scope, design on your products, and test payments, couriers and GST across NCR before launch."
          stages={DELHI_ECOM_STAGES}
          closingNote="5 STAGES · RETAIL OR WHOLESALE · UPI + COD + GST ACROSS NCR · LIGHTHOUSE 90+ · YOUR CODE"
        />

        {/* ── 7. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="DELHI ECOMMERCE MARKET"
          headline="How Delhi NCR Trades Online"
          leadParagraphs={[
            "Delhi is one of India's oldest trading cities, and its markets each have a speciality. Chandni Chowk sells bridal wear, sarees and fabric. Karol Bagh is known for jewellery and wedding shopping, and Dariba Kalan for silver. Sadar Bazaar is a wholesale hub for toys, stationery and household goods, Gandhi Nagar for garments, and Khari Baoli for spices and dry fruits. Nehru Place sells computers and electronics.",
            'Many of these traders already sell to shops across North India by phone and WhatsApp. The next step is a wholesale portal where approved buyers log in, see their own rates, place orders and download GST invoices. At the same time, a second generation is taking the family name to retail buyers through a direct store, with real photos and video replacing the walk through the lane.',
            'Around the city, Gurugram and Noida host D2C brands in skincare, apparel and food, and the industrial areas of Okhla, Naraina and Mayapuri hold manufacturers selling to distributors. Corporate gifting is a busy seasonal trade across NCR, with orders peaking before Diwali. Each of these needs a different store, and we scope it that way.',
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
          headline={"Choosing an Ecommerce Developer in Delhi"}
          lead={"Four ways to get an online store in Delhi, compared on what decides the result."}
          columns={CITY_COMPARISON_COLUMNS}
          rows={CITY_COMPARISON_ROWS}
          footer="Agency and freelancer cells are general patterns, not claims about any one firm. Ask every firm you shortlist the same questions."
        />

        {/* ── 8. INDUSTRIES (DARK) ─────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="DELHI × ECOMMERCE"
          headline="Delhi NCR Sectors We Build For"
          lead="From Chandni Chowk bridal houses to Okhla manufacturers, these six sectors account for most of the Delhi ecommerce work we are asked to scope."
          sectors={[
            {
              name: 'Bridal & Ethnic Wear',
              description:
                'Chandni Chowk and Karol Bagh bridal houses need video-rich product pages, made-to-measure options, appointment booking and dispatch dates planned around the wedding.',
              example:
                'Lehenga and saree houses, sherwani makers, ethnic wear labels in Lajpat Nagar.',
            },
            {
              name: 'Jewellery & Silver',
              description:
                'Karol Bagh jewellers and Dariba Kalan silversmiths need weight and purity details, HUID for gold, insured shipping and COD limits for high-value orders.',
              example:
                'Gold jewellers, silver article makers, artificial and kundan jewellery sellers.',
            },
            {
              name: 'Electronics & IT',
              description:
                'Nehru Place dealers sell to offices and homes. Stores need spec filters, bulk quotes for companies, EMI for consumers and GST invoices for business buyers.',
              example:
                'Laptop and peripheral dealers, networking suppliers, mobile accessory brands.',
            },
            {
              name: 'Wholesale Trade',
              description:
                'Sadar Bazaar and Gandhi Nagar wholesalers need login-only catalogues with price slabs, carton quantities, credit limits and fast reorder for shops across North India.',
              example:
                'Toy and stationery wholesalers, garment traders, household goods distributors.',
            },
            {
              name: 'Food, Spices & Gifting',
              description:
                'Khari Baoli spice and dry fruit traders and NCR gifting firms need FSSAI details, festival hampers, bulk corporate orders and branded packaging options.',
              example:
                'Dry fruit and spice sellers, mithai brands, corporate gifting companies.',
            },
            {
              name: 'Manufacturing & D2C',
              description:
                'Okhla, Naraina and Noida makers and Gurugram D2C brands need either trade portals with dealer pricing or fast Shopify stores with subscriptions and Instagram selling.',
              example:
                'Apparel export units, skincare and personal care brands, home goods makers.',
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
          headline={"Test your Delhi store on your phone first."}
          sub={"Share your catalogue, price list or current website. We will build a draft on a few of your real products and put the price for each phase in writing."}
          label="See a draft of my store"
        />
        {/* ── 11. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What founders tell us after launch"
        />

        {/* ── 12. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="What Delhi NCR Owners Ask Before They Sign"
          lead="The questions Delhi traders, wholesalers and D2C founders raise most, answered plainly: time, cost, wholesale, GST across NCR and ownership."
          categories={DELHI_ECOM_FAQ_CATEGORIES}
          items={DELHI_ECOM_FAQ_ITEMS}
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
          headline="Your Delhi Store, Retail or Wholesale, Priced in Writing"
          sub="FactoryJet has worked with 500+ businesses across India, the US, the UK and the UAE. Tell us how you sell today, retail or wholesale, and we will propose a platform, fix the price per phase in writing and show you a draft before you sign."
          primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'View Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price per phase. Draft before contract. UPI, COD and NCR-ready GST. The code and every account stay in your name."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
