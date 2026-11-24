import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import ComparisonTable from '@/components/v2/ComparisonTable';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Ecommerce Website Development Company in India | FactoryJet',
  description:
    'Ecommerce website development for Indian D2C, B2B and marketplace sellers on Shopify, WooCommerce, BigCommerce and headless. Fixed price in writing.',
  keywords: [
    'ecommerce website development company',
    'ecommerce website development company in India',
    'best ecommerce website development company in India',
    'ecommerce development company',
    'ecommerce development company in India',
    'ecommerce agency',
    'ecommerce app development company',
    'b2b ecommerce platform',
    'D2C website development',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce Website Development Company in India | FactoryJet',
    description:
      'Custom ecommerce stores for Indian sellers: D2C, B2B and apps. Fixed price in writing. You own the code.',
    url: 'https://factoryjet.com/ecommerce-development',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet ecommerce website development company in India',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Website Development Company in India | FactoryJet',
    description:
      'Ecommerce development for Indian D2C and B2B sellers. A working draft of your store before you sign.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/ecommerce-development',
    languages: {
      'en-IN': 'https://factoryjet.com/ecommerce-development',
      'x-default': 'https://factoryjet.com/ecommerce-development',
    },
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
   Data
───────────────────────────────────────────────────────────────────────────── */

const PAGE_MODIFIED = '2026-11-24';

const CITIES = [
  { slug: 'ahmedabad', name: 'Ahmedabad' },
  { slug: 'bangalore', name: 'Bangalore' },
  { slug: 'chandigarh', name: 'Chandigarh' },
  { slug: 'chennai', name: 'Chennai' },
  { slug: 'delhi', name: 'Delhi' },
  { slug: 'hyderabad', name: 'Hyderabad' },
  { slug: 'jaipur', name: 'Jaipur' },
  { slug: 'kochi', name: 'Kochi' },
  { slug: 'kolkata', name: 'Kolkata' },
  { slug: 'lucknow', name: 'Lucknow' },
  { slug: 'mumbai', name: 'Mumbai' },
  { slug: 'pune', name: 'Pune' },
  { slug: 'surat', name: 'Surat' },
] as const;

const STORE_TYPES = [
  {
    name: 'Shopify and Shopify Plus stores',
    text: 'Custom themes, full store builds, checkout changes on Plus and wholesale portals. Indian payment, shipping and GST setup is described on our Shopify development page.',
  },
  {
    name: 'WooCommerce stores',
    text: 'Stores on WordPress with subscriptions, bundles or bookings, and an admin your own team can run without a developer.',
  },
  {
    name: 'BigCommerce stores',
    text: 'Custom themes and headless builds for brands that want built-in B2B features and several sales channels.',
  },
  {
    name: 'Headless and custom commerce',
    text: 'A Next.js or Remix storefront in front of Shopify, BigCommerce or another commerce back end, for stores where page speed moves revenue.',
  },
  {
    name: 'Platform migrations',
    text: 'Products, customers, order history and reviews moved from Magento, WooCommerce or BigCommerce, with every old address redirected to its new one.',
  },
  {
    name: 'B2B and wholesale stores',
    text: 'Trade logins, account prices and quote-to-order flows, covered in the platform comparison below.',
  },
];

const SITUATIONS = [
  {
    kicker: 'Redesign',
    name: 'You have a store and want a better one',
    text: 'We move the products, customers and order history to the new build and redirect old addresses so search traffic keeps its way in.',
  },
  {
    kicker: 'Launch',
    name: 'You are opening your first store',
    text: 'We pick the platform with you, build the theme in your own store account, and show you a working draft with your own products before any contract.',
  },
  {
    kicker: 'Expand',
    name: 'You want to sell to businesses as well',
    text: 'One storefront can serve shoppers and trade buyers, with a separate login and price list for each trade account.',
  },
  {
    kicker: 'Repair',
    name: 'Your B2B store gets visits but few orders',
    text: 'We start from one real order and your price rules, then list what needs to change before we quote any fix.',
  },
];

const PLATFORM_ROWS = [
  {
    platform: 'Shopify Plus',
    suits: 'DTC and B2B on one store, with a clean admin and quick setup.',
    watch: 'It is the top Shopify plan, so the monthly fee is the largest of the range (see the cost section).',
  },
  {
    platform: 'Adobe Commerce (Magento)',
    suits: 'The largest catalogues and deep native B2B: company accounts, shared catalogues, requisition lists.',
    watch: 'Magento Open Source has no licence fee; Adobe Commerce is licensed. Hosting and upkeep are yours.',
  },
  {
    platform: 'BigCommerce',
    suits: 'Mid-market sellers who want strong B2B features without a Plus-sized bill.',
    watch: 'Check that the apps you need exist before you commit.',
  },
  {
    platform: 'WooCommerce',
    suits: 'Sellers already on WordPress who want full control and no platform fee.',
    watch: 'You own hosting, security and updates.',
  },
  {
    platform: 'Commerceflo',
    suits: 'A unified multi-channel engine: our own platform, behind the GPSUK trade store.',
    watch: 'Ask for a live store to click through before you decide.',
  },
];

const COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Store builder subscription' },
  { label: 'Large ecommerce agency' },
  { label: 'Freelance developer' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Usually fits',
    values: [
      'A custom D2C, B2B or headless store with links to your other systems',
      'A simple catalogue that runs on a standard template',
      'A big catalogue with several teams and a long roadmap',
      'A theme change or one small feature',
    ],
  },
  {
    feature: 'What you see first',
    values: [
      'A working draft in your own store account, using your own products',
      'A template preview with sample products',
      'A pitch deck and case studies',
      'Past work, sometimes a mock-up',
    ],
  },
  {
    feature: 'Platform advice',
    values: [
      'Shopify, WooCommerce, BigCommerce or headless, chosen by catalogue and rules',
      'The one platform the builder runs on',
      'Often the platform the agency partners with',
      'The platform the developer knows best',
    ],
  },
  {
    feature: 'Ownership',
    values: [
      'You hold the code, the repository and every account',
      'The vendor hosts it, so leaving takes work',
      'Set by the contract, so read it first',
      'Agree it in writing before payment',
    ],
  },
  {
    feature: 'Pricing',
    values: [
      'One fixed price per phase, paid at milestones',
      'A monthly plan plus add-on fees',
      'A large quote for the full programme',
      'An hourly rate or a price per task',
    ],
  },
  {
    feature: 'After launch',
    values: [
      'Bugs fixed free during a cover period written into the contract',
      'Help-centre support within your plan',
      'A retainer, often with a minimum term',
      'Depends on who is free that month',
    ],
  },
];

const PLATFORM_FEES = [
  { tier: 'Shopify Basic', range: '₹1,499 a month, billed yearly' },
  { tier: 'Shopify Grow', range: '₹5,599 a month, billed yearly' },
  { tier: 'Shopify Advanced', range: '₹22,680 a month, billed yearly' },
  { tier: 'Shopify Plus', range: 'from ₹1,75,000 a month' },
];

const BUILD_COSTS = [
  { tier: 'Basic starter store', range: '₹25,000 to ₹80,000', source: 'Webhorse Studio, before GST' },
  { tier: 'Small business store', range: '₹80,000 to ₹2 lakh', source: 'Webhorse Studio, before GST' },
  { tier: 'Mid-scale store', range: '₹2 lakh to ₹5 lakh', source: 'Webhorse Studio, before GST' },
  { tier: 'Advanced store', range: '₹5 lakh to ₹10 lakh', source: 'Webhorse Studio, before GST' },
  { tier: 'Enterprise or marketplace', range: '₹10 lakh to ₹25 lakh+', source: 'Webhorse Studio, before GST' },
  { tier: 'Starter store', range: '₹50,000 to ₹1,50,000', source: 'CodeVibe' },
  { tier: 'Mid-range store', range: '₹1,50,000 to ₹5,00,000', source: 'CodeVibe' },
  { tier: 'Custom or enterprise', range: '₹5,00,000 to ₹25,00,000+', source: 'CodeVibe' },
];

const STEPS = [
  {
    step: '01',
    title: 'Scope the store',
    text: 'A short call about your catalogue, your price rules and one real example of how a buyer orders, plus the systems the store must talk to.',
  },
  {
    step: '02',
    title: 'See a draft',
    text: 'We build a working draft of your theme inside your own store account, with your own products on it. You judge it before any contract.',
  },
  {
    step: '03',
    title: 'Build in phases',
    text: 'Each phase has its own fixed price, agreed in writing and paid at milestones. The code is yours from day one.',
  },
  {
    step: '04',
    title: 'Test the buying path',
    text: 'We test checkout end to end across devices before launch, and fix what breaks.',
  },
  {
    step: '05',
    title: 'Launch and cover',
    text: 'Bugs found after launch get fixed at no extra charge during a cover period agreed at the start. Support beyond that is your choice.',
  },
];

const ECOM_FAQS = [
  /* ── Choosing a company ── */
  {
    category: 'choosing',
    question: 'Which is the best ecommerce website development company in India?',
    answer:
      'Every ranking has a bias. When we asked ChatGPT this on 24 November 2026 for a D2C brand, it named mostly Shopify specialists, plus one Adobe Commerce and Magento firm and one marketplace firm, and said there is no single best agency. For a store wired into your own systems, with a draft you can judge before signing, we would name FactoryJet.',
  },
  {
    category: 'choosing',
    question: 'What is the best ecommerce development company for a D2C brand?',
    answer:
      'Look for a team that has built on the platform you plan to use, and ask to see a live store. For Indian D2C on Shopify, check that payments, shipping and GST invoices are set up and tested. Our Shopify development page sets out how we do that.',
  },
  {
    category: 'choosing',
    question: 'What should I ask an ecommerce agency before hiring it?',
    answer:
      'Ask to see a working draft with your own products. Ask who owns the code and every account, what the price covers, and what happens when something breaks after launch. Get the price as one written figure per phase.',
  },
  {
    category: 'choosing',
    question: 'Ecommerce agency or freelancer: which is better?',
    answer:
      'A freelancer suits a theme change or a single feature. An agency suits a build that touches payments, shipping, accounts and several platforms at once. Either way, the questions on code ownership and written price stay the same.',
  },
  {
    category: 'choosing',
    question: 'Do you work with small, medium and large stores?',
    answer:
      'Yes. We take on first stores, redesigns of existing ones, and stores that are adding a trade side. The scoping call settles the scope. Size alone does not set the approach.',
  },
  {
    category: 'choosing',
    question: 'Is there an ecommerce development company for Mumbai, Delhi, Bangalore or Pune?',
    answer:
      'Yes. We work with sellers across India, and the city pages below describe what stores in each place usually need. Send your product list and we reply with what we would build.',
  },
  /* ── Cost ── */
  {
    category: 'cost',
    question: 'How much does ecommerce website development cost in India?',
    answer:
      'Indian agency guides give wide ranges. Webhorse Studio, published 5 October 2026, lists ₹80,000 to ₹2 lakh for a small business store, before GST. CodeVibe, updated 14 November 2026, lists ₹1,50,000 to ₹5,00,000 for a mid-range store. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'cost',
    question: 'What do Shopify plans cost in India?',
    answer:
      'Shopify India lists Basic at ₹1,499 a month, Grow at ₹5,599 and Advanced at ₹22,680 when billed yearly, and Plus from ₹1,75,000 a month. We read the pricing page on 24 November 2026. Check it again before you budget, since plans change.',
  },
  {
    category: 'cost',
    question: 'Is the platform fee part of the development cost?',
    answer:
      'No. The platform fee is paid to Shopify, BigCommerce or your host, from your own account. The development cost is what the agency charges to design and build. Ask any agency to list both so the total is clear.',
  },
  {
    category: 'cost',
    question: 'Why do quotes for the same store differ so much?',
    answer:
      'Catalogue size, custom design, integrations and migration work all move the price. A template store and a custom store with account pricing are different jobs, even if both are called an online shop. Compare quotes line by line.',
  },
  {
    category: 'cost',
    question: 'Can I build an ecommerce website for free in India?',
    answer:
      'A basic one, yes. Store builders have trial plans and templates, and a small catalogue can run on one. Costs appear with custom design, payment and shipping setup, GST invoices and links to your accounts. That is where paid development earns its fee.',
  },
  /* ── Platforms and B2B ── */
  {
    category: 'platforms',
    question: 'What is the best B2B ecommerce platform?',
    answer:
      'It depends on catalogue size, trade rules and budget. Shopify Plus suits DTC and B2B on one store. Adobe Commerce suits the largest catalogues and deep B2B. BigCommerce suits the mid-market. The platform comparison above lays out each one.',
  },
  {
    category: 'platforms',
    question: 'How do I choose a B2B ecommerce platform?',
    answer:
      'Match it to five things: catalogue size, pricing rules, the systems it must connect to, your team\'s skills and your budget. List your pricing rules first. Account-specific prices and quote steps narrow the choice fast.',
  },
  {
    category: 'platforms',
    question: 'Can one store sell to shoppers and to trade buyers?',
    answer:
      'Yes. One storefront can show retail prices to shoppers and give each trade account its own login and price list.',
  },
  {
    category: 'platforms',
    question: 'Shopify, WooCommerce or BigCommerce for an Indian store?',
    answer:
      'Shopify is a sound default for most product sellers, with hosting, payments and a large app range. WooCommerce fits sellers already on WordPress who want control. BigCommerce fits mid-market sellers who want B2B tools built in. The scoping call decides it.',
  },
  {
    category: 'platforms',
    question: 'Can you collect GSTIN from business buyers at checkout?',
    answer:
      'Our Shopify development page describes GSTIN capture at checkout for B2B buyers, with GST invoices made at order time. We confirm the exact setup for your store at scoping.',
  },
  {
    category: 'platforms',
    question: 'Can you connect the store to accounting or ERP software?',
    answer:
      'Yes. Exaco runs a Shopify store connected to QuickBooks Enterprise, and Sow Easy has a WooCommerce store reading stock and prices from Odoo. For other software, we check what connections it offers before we price the work.',
  },
  /* ── Apps ── */
  {
    category: 'apps',
    question: 'What does an ecommerce app development company do?',
    answer:
      'It builds the phone app for your store, on iOS and Android, connected to your store back end. Our ecommerce app page describes React Native with TypeScript, with Swift and Kotlin kept for heavy device features, and app store approvals handled.',
  },
  {
    category: 'apps',
    question: 'Do I need an app, or is a mobile website enough?',
    answer:
      'A fast mobile website brings new shoppers from search. An app suits repeat buyers who want push alerts and quick reorders. Most stores start with the website and add an app once repeat orders justify it.',
  },
  /* ── How it works ── */
  {
    category: 'how',
    question: 'What is D2C website development?',
    answer:
      'It is building a store where a brand sells straight to shoppers, with no marketplace in between. It covers design, product pages, checkout, payments and shipping. Your brand, your customer list and your prices stay in your hands.',
  },
  {
    category: 'how',
    question: 'How do Indian payments and shipping fit in?',
    answer:
      'Our Shopify development page describes Razorpay covering UPI, cards, net banking, EMI and wallets, and Shiprocket for shipping rates at checkout. We confirm the providers you want at scoping and test checkout before launch.',
  },
  {
    category: 'how',
    question: 'How long does a store take to build?',
    answer:
      'A custom-theme store on Shopify or WooCommerce takes 3 to 5 weeks. Subscriptions, B2B pricing or a migration take 5 to 8 weeks. Headless or custom builds take 8 to 14 weeks. The timeline is written down before work starts.',
  },
  {
    category: 'how',
    question: 'Who owns the store, the code and the accounts?',
    answer:
      'You do. The code, the theme and the repository are yours from day one, and your store, apps and accounts stay in your name. Another developer can take the project over.',
  },
  {
    category: 'how',
    question: 'What happens after the store goes live?',
    answer:
      'Bugs found after launch get fixed at no extra charge during a cover period we agree at the start. Later support is your choice, with no monthly minimum. We price each change and wait for your yes before starting it.',
  },
  {
    category: 'how',
    question: 'Can you move my store from another platform?',
    answer:
      'Yes. We move products, variants, customers, order history and reviews, and map every old address to a redirect so search visits keep arriving. We list what will and will not carry over before we begin.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'choosing', label: 'Choosing a Company' },
  { key: 'cost', label: 'Cost' },
  { key: 'platforms', label: 'Platforms and B2B' },
  { key: 'apps', label: 'Apps' },
  { key: 'how', label: 'How It Works' },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD
───────────────────────────────────────────────────────────────────────────── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/ecommerce-development#webpage',
  url: 'https://factoryjet.com/ecommerce-development',
  name: 'Ecommerce Website Development Company in India | FactoryJet',
  inLanguage: 'en-IN',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '#short-answer'] },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/ecommerce-development#service',
  name: 'Ecommerce website development',
  serviceType: 'Ecommerce website development services',
  areaServed: { '@type': 'Country', name: 'India' },
  url: 'https://factoryjet.com/ecommerce-development',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: ECOM_FAQS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Small local layout helpers
───────────────────────────────────────────────────────────────────────────── */

function Section({ children, tinted = false }: { children: ReactNode; tinted?: boolean }) {
  return (
    <section className={`${tinted ? 'bg-white' : 'bg-fj-cream'} py-12 md:py-16`}>
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">{children}</div>
    </section>
  );
}

function SectionHead({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <>
      <p className="fj-eyebrow">{eyebrow}</p>
      <h2 className="mt-3 max-w-[760px] font-fj-display text-[1.625rem] font-extrabold leading-[1.15] tracking-[-0.03em] text-fj-ink md:text-[2.25rem]">
        {children}
      </h2>
    </>
  );
}

const PROSE = 'font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600';
const LINK = 'font-semibold text-[#B23E13] underline underline-offset-2';
const KICKER = 'font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-fj-neutral-500';

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function EcommerceDevelopmentIndiaPage() {
  const crumbs = [
    { name: 'Home', url: 'https://factoryjet.com' },
    { name: 'Ecommerce Development', url: 'https://factoryjet.com/ecommerce-development' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema items={crumbs} />

      <main className="bg-fj-cream">
        <Breadcrumbs items={crumbs} />

        {/* 1. HERO */}
        <section className="bg-fj-cream pb-10 pt-6 md:pb-14 md:pt-10">
          <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-10 px-6 md:px-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <p className="fj-eyebrow">ECOMMERCE DEVELOPMENT · INDIA</p>
              <h1 className="mt-3 max-w-[22ch] font-fj-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-fj-ink md:text-[2.75rem]">
                Best Ecommerce Website Development Company in India for D2C and B2B Stores
              </h1>
              <p className="mt-5 max-w-[56ch] font-fj-body text-[1.125rem] leading-[1.65] text-fj-neutral-600">
                We build online stores for Indian sellers on Shopify, WooCommerce, BigCommerce and headless, for
                shoppers and for trade buyers. You see a working draft with your own products before you sign.
              </p>
              <ul className="mt-6 space-y-2 font-fj-body text-[0.9375rem] text-fj-neutral-600">
                <li>
                  Rated 5.0 on{' '}
                  <a className={LINK} href="https://clutch.co/profile/factoryjet-private" rel="noopener">
                    Clutch from 4 reviews
                  </a>{' '}
                  and 5.0 on{' '}
                  <a className={LINK} href="https://www.goodfirms.co/company/factoryjet-private-limited" rel="noopener">
                    GoodFirms from 5 reviews
                  </a>
                </li>
                <li>One fixed price per phase, written down before work starts</li>
                <li>You own the code, and the store accounts are yours</li>
              </ul>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 shadow-sm">
                <p className="font-fj-display text-[1.25rem] font-bold leading-snug text-fj-ink">
                  Tell us what you sell and who buys it. We tell you what to build first.
                </p>
                <HeroInlineForm
                  region="in"
                  source="ecommerce_in_hero"
                  service="Ecommerce Development"
                  submitLabel="Book my free scoping call"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. ANSWER-FIRST */}
        <Section tinted>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8" id="short-answer">
              <SectionHead eyebrow="THE SHORT ANSWER">
                What is the best ecommerce website development company in India?
              </SectionHead>
              <p className={`mt-5 ${PROSE}`}>
                The best ecommerce website development company in India for you is the one that shows a working draft of
                your store with your own products before you sign, picks the platform to suit your catalogue, and gives
                you the price as a written figure. We build D2C stores, B2B trade stores and store apps, and the code and accounts
                stay yours. Store builders suit a simple catalogue on a template. A custom build suits a store that must
                connect to payments, shipping or accounts.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                <p className={KICKER}>An ecommerce agency in one line</p>
                <p className={`mt-3 ${PROSE}`}>
                  A team that designs, builds and looks after your online store, from the product page to the order
                  that reaches your warehouse.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 3. WHAT WE BUILD */}
        <Section>
          <SectionHead eyebrow="WHAT WE BUILD">What does an ecommerce development company build?</SectionHead>
          <p className={`mt-5 max-w-[720px] ${PROSE}`}>
            An ecommerce development company builds the store your customers buy from and the links behind it. Our
            ecommerce agency work spans six kinds of project. If the store sits on Shopify and you sell across India,
            start with our{' '}
            <a className={LINK} href="/shopify-development">
              Shopify development page
            </a>
            .
          </p>
          <div className="mt-8 divide-y divide-fj-neutral-200 border-y border-fj-neutral-200">
            {STORE_TYPES.map((s) => (
              <div key={s.name} className="grid grid-cols-1 gap-2 py-5 md:grid-cols-12 md:gap-8">
                <h3 className="font-fj-display text-[1.125rem] font-bold text-fj-ink md:col-span-4">{s.name}</h3>
                <p className="font-fj-body text-[1rem] leading-[1.65] text-fj-neutral-600 md:col-span-8">{s.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 4. D2C */}
        <Section tinted>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-9">
              <SectionHead eyebrow="D2C WEBSITE DEVELOPMENT">What goes into D2C website development in India?</SectionHead>
              <p className={`mt-5 ${PROSE}`}>
                D2C means direct to consumer: the brand sells to shoppers itself, with no marketplace taking a cut or
                holding the customer list. D2C website development covers the design, the product pages, the checkout,
                payments and shipping. In India the last two need local setup.
              </p>
              <p className={`mt-4 ${PROSE}`}>
                Our{' '}
                <a className={LINK} href="/shopify-development">
                  Shopify development page
                </a>{' '}
                describes Razorpay for UPI, cards, net banking, EMI and wallets, Shiprocket for shipping rates at
                checkout, and GST invoices made when an order is placed. Each store is tested end to end before launch.
              </p>
              <p className={`mt-4 ${PROSE}`}>Most store projects begin from one of four places. Find yours below.</p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {SITUATIONS.map((s) => (
              <div key={s.name} className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                <p className={KICKER}>{s.kicker}</p>
                <h3 className="mt-2 font-fj-display text-[1.125rem] font-bold text-fj-ink">{s.name}</h3>
                <p className="mt-3 font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-600">{s.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 5. B2B PLATFORM */}
        <Section>
          <SectionHead eyebrow="B2B ECOMMERCE PLATFORM">
            Which B2B ecommerce platform suits an Indian seller?
          </SectionHead>
          <p className={`mt-5 max-w-[760px] ${PROSE}`}>
            There is no single best B2B ecommerce platform. Catalogue size, trade rules and budget decide it. The table
            summarises the platforms we build on, taken from our{' '}
            <a className={LINK} href="/b2b-ecommerce">
              B2B ecommerce page
            </a>{' '}
            (written for US buyers). For an Indian wholesaler, list your account price rules and your tax invoice needs first, and test each
            platform against them.
          </p>
          <div className="mt-8 divide-y divide-fj-neutral-200 border-y border-fj-neutral-200">
            {PLATFORM_ROWS.map((r) => (
              <div key={r.platform} className="grid grid-cols-1 gap-2 py-5 md:grid-cols-12 md:gap-8">
                <h3 className="font-fj-display text-[1.125rem] font-bold text-fj-ink md:col-span-3">{r.platform}</h3>
                <p className="font-fj-body text-[1rem] leading-[1.65] text-fj-neutral-600 md:col-span-5">{r.suits}</p>
                <p className="font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-500 md:col-span-4">
                  Watch for: {r.watch}
                </p>
              </div>
            ))}
          </div>
          <p className={`mt-6 max-w-[760px] ${PROSE}`}>
            Examples from our own work: GPSUK is a trade storefront on Commerceflo where business buyers log in, see
            their own prices and move from quote to order (
            <a className={LINK} href="/case-studies/gpsuk-promotional-products">
              read the case study
            </a>
            ). Sow Easy is a WooCommerce trade store reading stock and prices from Odoo, now being tested on staging.
            Exaco&apos;s European Garden brand runs on Shopify connected to QuickBooks Enterprise, and the store is live.
          </p>
        </Section>

        {/* 6. COMPARISON */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs Store Builders vs Large Agencies vs Freelancers"
          lead="Four ways to get an online store in India. How much the store must connect to usually decides which one fits."
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          footer="These columns sketch common habits of each type, and name no firm. Ask every candidate for a live store to click through."
        />

        {/* 7. MID-PAGE CTA */}
        <FinalCTA
          variant="light"
          eyebrow="START WITH A DRAFT"
          headline="Send ten products. See your store before you sign."
          sub="A short scoping call, then a working draft in your own store account. No signature needed for that."
          primaryCta={{ label: 'Book a scoping call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Read the Shopify page', href: '/shopify-development' }}
        />

        {/* 8. APPS */}
        <Section tinted>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHead eyebrow="ECOMMERCE APPS">What should you ask an ecommerce app development company?</SectionHead>
              <p className={`mt-5 ${PROSE}`}>
                An ecommerce app development company builds the phone app that sits on top of your store. Ask which
                framework it uses and who handles Apple and Google review. Our{' '}
                <a className={LINK} href="/services/ecommerce-app-development">
                  ecommerce app development page
                </a>{' '}
                describes React Native with TypeScript for one codebase on both stores, with Swift and Kotlin kept for
                heavy device features. App store approvals are handled for you.
              </p>
              <p className={`mt-4 ${PROSE}`}>
                That page is written for American buyers and carries US prices, so read it for the method. Apps pay off
                when shoppers come back often. A new store gets more from a fast mobile website first.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                <p className={KICKER}>Rule of thumb</p>
                <p className={`mt-3 ${PROSE}`}>
                  Search brings new shoppers to a website. An app serves the ones who already know you.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 9. CITIES */}
        <Section>
          <SectionHead eyebrow="WHERE OUR BUYERS ARE">Ecommerce development for sellers in your city</SectionHead>
          <p className={`mt-5 max-w-[720px] ${PROSE}`}>
            Sellers in different cities lean on different trades and different shipping routes. Each page below covers
            the stores that sellers in that city usually run, and what to build for them.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CITIES.map((c) => (
              <li key={c.slug}>
                <a
                  className="block rounded-xl border border-fj-neutral-200 bg-white px-5 py-4 font-fj-body text-[1rem] font-semibold text-fj-ink underline-offset-2 hover:underline"
                  href={`/services/ecommerce-development/${c.slug}`}
                >
                  Ecommerce development in {c.name}
                </a>
              </li>
            ))}
          </ul>
        </Section>

        {/* 10. COST */}
        <Section tinted>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHead eyebrow="COST">How much does ecommerce website development cost in India?</SectionHead>
              <p className={`mt-5 ${PROSE}`}>
                Two Indian agency guides price stores by size. Webhorse Studio, in a{' '}
                <a
                  className={LINK}
                  href="https://www.webhorse.studio/blogs/ecommerce-website-development-cost-in-india"
                  rel="noopener"
                >
                  guide published 5 October 2026
                </a>
                , gives build prices before GST. CodeVibe, in a{' '}
                <a className={LINK} href="https://codevibe.in/blog/ecommerce-website-development-cost-india" rel="noopener">
                  post updated 14 November 2026
                </a>
                , uses three tiers. The table copies each label from its source.
              </p>
              <p className={`mt-4 ${PROSE}`}>
                Platform fees come on top and go to the platform. Shopify&apos;s{' '}
                <a className={LINK} href="https://www.shopify.com/in/pricing" rel="noopener">
                  India pricing page
                </a>
                , read on 24 November 2026, shows Basic at ₹1,499 a month, Grow at ₹5,599 and Advanced at ₹22,680 on
                yearly billing, and Plus from ₹1,75,000 a month. These are agency and vendor figures, so treat them as
                loose guides. Our guide to{' '}
                <a className={LINK} href="/blog/ecommerce-website-development-cost-india">
                  ecommerce website development cost in India
                </a>{' '}
                goes deeper. FactoryJet quotes a fixed price in writing after a short scoping call.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white">
                <div className="border-b border-fj-neutral-200 px-6 py-4">
                  <p className={KICKER}>Build cost, one-time, Indian agency guides</p>
                </div>
                <div className="divide-y divide-fj-neutral-200 px-6">
                  {BUILD_COSTS.map((r) => (
                    <div key={`${r.source}-${r.tier}`} className="flex flex-wrap items-baseline justify-between gap-2 py-3">
                      <p className="max-w-[16rem] font-fj-body text-[0.9375rem] font-semibold text-fj-ink">{r.tier}</p>
                      <p className="font-fj-body text-[0.9375rem] text-fj-neutral-600">
                        {r.range} <span className="text-fj-neutral-500">({r.source})</span>
                      </p>
                    </div>
                  ))}
                </div>
                <div className="border-y border-fj-neutral-200 px-6 py-4">
                  <p className={KICKER}>Shopify plan fees, India, per month</p>
                </div>
                <div className="divide-y divide-fj-neutral-200 px-6">
                  {PLATFORM_FEES.map((r) => (
                    <div key={r.tier} className="flex flex-wrap items-baseline justify-between gap-2 py-3">
                      <p className="font-fj-body text-[0.9375rem] font-semibold text-fj-ink">{r.tier}</p>
                      <p className="font-fj-body text-[0.9375rem] text-fj-neutral-600">{r.range}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 11. PROCESS */}
        <Section>
          <SectionHead eyebrow="HOW A PROJECT RUNS">How does a FactoryJet store project work?</SectionHead>
          <ol className="mt-8 divide-y divide-fj-neutral-200 border-y border-fj-neutral-200">
            {STEPS.map((s) => (
              <li key={s.step} className="grid grid-cols-1 gap-2 py-5 md:grid-cols-12 md:gap-8">
                <div className="flex items-baseline gap-4 md:col-span-4">
                  <span className="font-fj-mono text-[0.8125rem] font-medium text-[#B23E13]">{s.step}</span>
                  <h3 className="font-fj-display text-[1.125rem] font-bold text-fj-ink">{s.title}</h3>
                </div>
                <p className="font-fj-body text-[1rem] leading-[1.65] text-fj-neutral-600 md:col-span-8">{s.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* 12. FAQ */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Ecommerce Development in India: Common Questions"
          lead="What Indian sellers ask us and what AI assistants get asked, answered briefly."
          categories={FAQ_CATEGORIES}
          items={ECOM_FAQS}
        />

        {/* 13. FINAL CTA */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="READY WHEN YOU ARE"
            headline="Bring your product list. Leave with a store you can judge."
            sub="Share your catalogue on a short call. We build a draft theme in your own store account. Look at it, then decide."
            primaryCta={{ label: 'Book my scoping call', modal: true, region: 'in' }}
            secondaryCta={{ label: 'See our US ecommerce work', href: '/services/ecommerce-development' }}
            objectionHandler="The price is written down for each phase. Store, code and accounts stay in your name. Support is your choice."
          />
        </div>
      </main>

      <SiteFooter locale="in" />
    </>
  );
}
