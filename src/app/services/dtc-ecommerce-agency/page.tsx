import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import FinalCTA from '@/components/v2/FinalCTA';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

const CANONICAL_URL = 'https://factoryjet.com/services/dtc-ecommerce-agency';
const PAGE_TITLE = 'DTC Ecommerce Agency: Migration, Headless & Scale | FactoryJet';
const PAGE_DESC =
  'Ecommerce development partner for scaling DTC brands. Platform migration, headless builds, international expansion, and subscription commerce. Get a free audit.';
const PAGE_MODIFIED = '2026-09-20';
const HERO_IMAGE = 'https://factoryjet.com/images/services/dtc-ecommerce-agency-hero.webp';

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'DTC Ecommerce Agency', url: CANONICAL_URL },
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'dtc ecommerce agency',
    'ecommerce development partner for dtc brands',
    'dtc ecommerce replatforming',
    'headless ecommerce development agency',
    'international ecommerce expansion agency',
    'subscription ecommerce development',
    'best ecommerce agency for dtc brands',
    'ecommerce migration agency',
    'composable commerce agency',
    'dtc ecommerce development company',
  ],
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      'en-US': CANONICAL_URL,
      'x-default': CANONICAL_URL,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: CANONICAL_URL,
    type: 'website',
    images: [
      {
        url: HERO_IMAGE,
        width: 1600,
        height: 1067,
        alt: 'A person packing a product order into a cardboard box at a bright desk, representing a growing DTC brand handling its own fulfillment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [HERO_IMAGE],
  },
};

/* ─── FAQ: single source of truth, feeds both the visible FAQ component
 *      and the FAQPage JSON-LD below. Never hand-duplicate this array. ─── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'DTC & Agency Basics' },
  { key: 'migration', label: 'Replatforming & Migration' },
  { key: 'headless', label: 'Headless & Composable' },
  { key: 'international', label: 'International Expansion' },
  { key: 'subscription', label: 'Subscription Commerce' },
  { key: 'choosing', label: 'Choosing a Partner' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── DTC & Agency Basics ──────────────────────────────────────────────
  {
    category: 'basics',
    question: 'What does DTC mean in ecommerce?',
    answer:
      "DTC stands for direct-to-consumer. It means a brand sells straight to shoppers through its own website instead of going through a retailer, distributor, or marketplace like Amazon. A DTC brand controls its own pricing, branding, and customer data, but it also owns every part of the buying experience, including the parts a retailer would normally handle, like checkout, shipping, and returns.",
  },
  {
    category: 'basics',
    question: 'Is there one best ecommerce agency for DTC brands?',
    answer:
      "No, and that is worth knowing before you start shopping for one. When you ask ChatGPT, Claude, or Google's AI Overview which agency is best for a scaling DTC brand, the answers spread across two dozen or more agencies with no single name dominating. The honest approach is to pick an agency based on your specific problem, replatforming, headless, international, or subscriptions, not a name everyone recommends.",
  },
  {
    category: 'basics',
    question: 'What is the difference between a DTC ecommerce agency and a general web design agency?',
    answer:
      'A general web design agency builds a website. A DTC ecommerce agency builds and maintains a selling system: product catalogs, checkout, payment processing, tax and shipping logic, inventory sync, and the platform integrations that keep all of it running as you add products, countries, or a subscription model. The work continues well past launch, because a growing DTC store keeps changing.',
  },
  {
    category: 'basics',
    question: "How do I know if I've outgrown my current ecommerce setup?",
    answer:
      "Common signs: your theme can't support a feature without a workaround, page speed drops as your catalog grows, you're paying for apps that patch gaps your platform should handle natively, checkout can't support the countries or payment methods your customers want, or your team spends more time fighting the platform than running the business. Any one of these is worth a real audit.",
  },
  {
    category: 'basics',
    question: 'Do you build on Shopify, or do you push everyone toward a custom build?',
    answer:
      "Most scaling DTC brands are well served by Shopify Plus, and we say so when that's true. We also build on BigCommerce, Adobe Commerce (Magento), WooCommerce, and fully custom headless architectures when a brand's actual requirements call for it. The platform choice follows your requirements, not the other way around.",
  },
  {
    category: 'basics',
    question: 'How long does a DTC ecommerce project usually take?',
    answer:
      'It depends on which of the four needs you\'re solving. A theme-level redesign on your existing platform can run a few weeks. A full platform migration usually runs one to three months depending on catalog size and integration count. A headless rebuild or a multi-country expansion typically runs longer, because more systems have to be built and tested together.',
  },
  // ── Replatforming & Migration ────────────────────────────────────────
  {
    category: 'migration',
    question: 'What is ecommerce replatforming?',
    answer:
      'Replatforming means moving your online store from one ecommerce platform to another, for example from WooCommerce to Shopify Plus, or from an older Magento version to BigCommerce, without starting your brand over. Product data, customer accounts, order history, and search rankings all have to move with the store, not just the products on the shelf.',
  },
  {
    category: 'migration',
    question: 'Will I lose my Google rankings during a migration?',
    answer:
      "You can, if the migration is handled carelessly. The two most common causes are broken or missing 301 redirects (Google can't find the old page's new address) and a slow, chaotic cutover that leaves the site partly broken during the switch. We map every existing URL to its new address before migration day and test the redirect map on staging first, not live.",
  },
  {
    category: 'migration',
    question: 'How do you avoid losing sales during the cutover?',
    answer:
      'We build and test the new store on a staging environment first, fully, before touching your live domain. The actual cutover happens during a planned low-traffic window with a rollback plan ready in case anything goes wrong. Customers should not notice the switch happened, other than the site working the same or better than before.',
  },
  {
    category: 'migration',
    question: 'Why does checkout matter so much during a migration?',
    answer:
      "Checkout is where a migration can quietly cost you money nobody notices until the sales report comes in. The Baymard Institute's analysis of 50 studies puts the average documented online cart abandonment rate above 70%, much of it tied to checkout friction. A migration is a chance to fix that, not carry a clunky checkout onto a new platform unchanged.",
  },
  {
    category: 'migration',
    question: 'What ecommerce platforms do you migrate between?',
    answer:
      "We handle migrations between Shopify Plus, BigCommerce, Adobe Commerce (Magento), WooCommerce, Salesforce Commerce Cloud, and custom-built stores, in either direction. The specific migration path matters less than the plan behind it: what moves, what gets tested, and what the rollback looks like if something breaks.",
  },
  {
    category: 'migration',
    question: 'Can you migrate a store with a large product catalog?',
    answer:
      "Yes. Catalog size changes the timeline and the QA plan, not whether it's possible. Larger catalogs need more automated data validation (matching product counts, variants, and images between old and new systems) and a longer staging review before cutover, but we've built the tooling for exactly that kind of bulk migration.",
  },
  // ── Headless & Composable ────────────────────────────────────────────
  {
    category: 'headless',
    question: 'What does headless ecommerce mean?',
    answer:
      'Headless ecommerce separates the storefront your shoppers see (the front end) from the system that manages products, inventory, and orders behind the scenes (the back end). Instead of one platform controlling both, you can rebuild or redesign the front end freely without touching the backend logic, and vice versa. It gives more design and performance freedom, at the cost of more to build and maintain.',
  },
  {
    category: 'headless',
    question: 'What is composable commerce?',
    answer:
      "Composable commerce means assembling your store from several specialized tools instead of relying on one platform's built-in defaults for everything. You might use Shopify for the backend, a separate tool for search, another for personalization, and a headless front end to tie them together. Each piece can be the best option for that job, but you own more integration work.",
  },
  {
    category: 'headless',
    question: 'Does my DTC brand actually need to go headless?',
    answer:
      "Probably not yet, and we'll tell you that honestly if it's true. Headless makes sense when a well-built standard theme genuinely can't do what you need: very specific animations or page layouts, sub-second load times a theme can't hit, or several regional storefronts sharing one backend. If your bottleneck is marketing or product, not the storefront itself, headless won't fix it.",
  },
  {
    category: 'headless',
    question: 'What are the downsides of going headless?',
    answer:
      "More moving parts to build and more moving parts to maintain. A standard Shopify theme gets platform updates and app support automatically. A headless build means your team, or ours, owns the front end code, the API connections, and the testing that keeps them working together after every change. It's the right trade for the brands that need it, and the wrong one for those that don't.",
  },
  {
    category: 'headless',
    question: 'What technology do you use for headless DTC storefronts?',
    answer:
      'Typically Next.js on the front end connected to the Shopify Storefront API on the back end, with a headless CMS layer when content needs to update independently of a code deploy. Our headless Shopify development page goes deeper on that architecture if you want the full technical breakdown.',
  },
  {
    category: 'headless',
    question: 'Can a headless store still use Shopify apps?',
    answer:
      "Some, not all. Apps that hook into Shopify's theme layer directly usually don't work headless, since there's no theme for them to hook into. Apps that work through Shopify's APIs generally still work. Part of a headless scoping conversation is checking which of your current apps survive the move and which need a custom replacement.",
  },
  // ── International Expansion ──────────────────────────────────────────
  {
    category: 'international',
    question: 'What do I need to sell internationally as a DTC brand?',
    answer:
      "At minimum: prices shown in the shopper's local currency, duties and import tax calculated at checkout so customers aren't hit with a surprise bill later, region-appropriate payment methods, and a shipping and returns policy that actually works for that country. Language localization matters too if you're targeting a market seriously, not just running the same store with a currency switcher.",
  },
  {
    category: 'international',
    question: "What happens if I don't show duties and taxes at checkout?",
    answer:
      'Your customer pays them anyway, just later, when the package clears customs, often as a surprise fee collected by the delivery carrier. That surprise is one of the most common reasons for refused deliveries, chargebacks, and one-star reviews in international ecommerce. Calculating and collecting duties at checkout, through your platform\'s international settings or a dedicated tool, moves that surprise out of the order.',
  },
  {
    category: 'international',
    question: 'Do I need separate stores for each country, or can I run one?',
    answer:
      'Both approaches work, and the right one depends on how different your pricing, catalog, and marketing need to be by country. Shopify Markets and similar tools let you run one backend with localized storefronts for pricing, currency, and domains. A fully separate store per country gives more control but means duplicating catalog and content work.',
  },
  {
    category: 'international',
    question: 'How do you handle international payment methods?',
    answer:
      "Card payments alone will lose you sales in many markets. We configure the region-specific methods that actually matter there, for example a bank-transfer method that's standard in one country or a buy-now-pay-later option common in another, through your payment provider or a dedicated international checkout tool, rather than assuming a US-style checkout works everywhere.",
  },
  {
    category: 'international',
    question: 'What is currency conversion risk, and does it affect my store?',
    answer:
      "It's the risk that the exchange rate moves between when you set a foreign-currency price and when you actually get paid, which can quietly shrink your margin on international orders. Some tools let you lock in a rate at checkout, others convert at settlement. It's worth understanding which model your payment setup uses before you scale international volume.",
  },
  {
    category: 'international',
    question: 'How long does international expansion take to set up?',
    answer:
      'A basic version, localized pricing and currency display through a tool like Shopify Markets, can be live in a few weeks. A fuller build, with duty calculation, local payment methods, and content localization for a specific market, usually runs four to eight weeks depending on how many countries you\'re launching at once.',
  },
  // ── Subscription Commerce ────────────────────────────────────────────
  {
    category: 'subscription',
    question: 'What is subscription ecommerce?',
    answer:
      "Subscription ecommerce means customers agree to a recurring order, weekly, monthly, or on another schedule, instead of a one-time purchase. It's a different business than one-time selling because retention, not just acquisition, drives revenue. A McKinsey study found the subscription ecommerce market grew more than 100% a year between 2011 and 2016, with roughly 15% of online shoppers signed up for at least one subscription.",
  },
  {
    category: 'subscription',
    question: 'What is churn, and why does it matter for subscriptions?',
    answer:
      'Churn is the rate at which subscribers cancel over a given period. It matters because a subscription business can add new signups every month and still shrink if churn is high enough. Reducing churn, through easier skip and pause options, better failed-payment recovery, and communication before a shipment, usually moves revenue more than adding new subscribers does.',
  },
  {
    category: 'subscription',
    question: 'What subscription features actually reduce churn?',
    answer:
      "Self-service skip, pause, and swap options are the biggest ones, because they let a customer adjust instead of cancelling when their needs change temporarily. After that, reliable failed-payment recovery (often called dunning: retrying and messaging a customer about a declined card) recovers revenue that would otherwise just disappear as a silent cancellation.",
  },
  {
    category: 'subscription',
    question: 'What tools do you use for subscription commerce?',
    answer:
      "It depends on the platform and how custom the billing logic needs to be. On Shopify, that's often Recharge, Skio, or Bold Subscriptions. For more complex billing rules, tiered plans, usage-based charges, or bundling logic those apps don't support out of the box, we build custom logic on top of, or instead of, an off-the-shelf app.",
  },
  {
    category: 'subscription',
    question: 'Can I add subscriptions to an existing store without rebuilding it?',
    answer:
      'Usually, yes. Most subscription apps install into an existing Shopify or BigCommerce store without a full platform migration. The real scoping question is whether your current checkout and customer account setup can support the subscription management screen customers will need, or whether that needs work first.',
  },
  {
    category: 'subscription',
    question: 'How do you handle failed payments on recurring orders?',
    answer:
      "Through a dunning process: the system automatically retries a declined card on a schedule and emails the customer with a way to update their payment method before the order is cancelled. A well-built dunning flow recovers a meaningful share of what would otherwise be silent, avoidable churn.",
  },
  // ── Choosing a Partner ───────────────────────────────────────────────
  {
    category: 'choosing',
    question: 'What should I ask an ecommerce agency before hiring them for a migration?',
    answer:
      "Ask to see a real 301 redirect and rollback plan in writing, not just a verbal promise. Ask how they test on staging before touching your live store. Ask what happens if organic traffic drops after launch: is that covered, or is it your problem. An agency that can't answer these clearly hasn't done enough real migrations.",
  },
  {
    category: 'choosing',
    question: 'Do I own the code after you build my store?',
    answer:
      'Yes. Whatever we build, whether that\'s a Shopify theme customization, a headless Next.js storefront, or custom subscription logic, is yours. You are not renting a black box or paying an ongoing license fee to us for the code itself. If you want to move to another developer later, you can take everything with you.',
  },
  {
    category: 'choosing',
    question: 'How do I know which of the four needs actually applies to me?',
    answer:
      "Most DTC brands know which one hurts the most: a platform ceiling you're actively hitting, a specific technical limitation a theme can't solve, a country you're leaving money on the table in, or a subscription model you haven't built yet. If more than one applies, we help you sequence them instead of trying to solve everything in one project.",
  },
  {
    category: 'choosing',
    question: 'What if none of these four needs matches my situation?',
    answer:
      "Tell us what's actually going on and we'll say honestly whether it's an ecommerce development problem at all. Sometimes what looks like a platform problem is actually a marketing, pricing, or product problem that a new storefront won't fix. We'd rather tell you that upfront than sell you a project that doesn't solve it.",
  },
];

/* ─── Structured data ─────────────────────────────────────────────────── */
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${CANONICAL_URL}#webpage`,
  url: CANONICAL_URL,
  name: PAGE_TITLE,
  description: PAGE_DESC,
  datePublished: '2026-09-20T00:00:00Z',
  dateModified: `${PAGE_MODIFIED}T00:00:00Z`,
  inLanguage: 'en-US',
  publisher: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
    jobTitle: 'Founder & CEO',
    worksFor: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${CANONICAL_URL}#service`,
  name: 'DTC Ecommerce Development & Growth Partner',
  serviceType: 'DTC Ecommerce Agency Services',
  description:
    'Ecommerce development for scaling direct-to-consumer brands: platform replatforming and migration, headless and composable builds, international and multi-currency expansion, and subscription commerce.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  audience: {
    '@type': 'BusinessAudience',
    name: 'Direct-to-consumer (DTC) brands',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'DTC Ecommerce Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ecommerce Replatforming & Migration',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Headless & Composable Commerce Development',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'International & Multi-Currency Expansion',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Subscription Commerce Development',
        },
      },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function DtcEcommerceAgencyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SiteHeader />

      <main className="min-h-screen bg-fj-cream text-fj-ink">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* HERO SECTION, always light, per brand rule */}
        <section className="relative pt-32 pb-20 border-b border-[#E7DED6] bg-fj-cream overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#E7DED6_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#F05A28]/30 mb-6">
                  <span className="font-fj-mono text-xs text-[#B23E13] font-bold tracking-wide">
                    // ECOMMERCE DEVELOPMENT FOR SCALING DTC BRANDS
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-fj-ink font-fj-display leading-tight mb-6">
                  {"The Ecommerce Development Partner for Scaling DTC Brands."}
                </h1>

                <p className="text-lg sm:text-xl text-fj-ink/70 font-fj-body font-normal leading-relaxed mb-8 max-w-2xl">
                  {"DTC (direct-to-consumer) means a brand sells straight to shoppers instead of through a retailer or marketplace. If you started on a template store and now need to migrate off it, go headless, sell internationally, or run a subscription model, this page walks through what each of those actually involves, and how we approach it."}
                </p>

                <div className="mb-8">
                  <HeroInlineForm
                    source="dtc-ecommerce-agency"
                    region="us"
                    submitLabel="Get a free ecommerce audit"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#E7DED6] text-xs font-fj-mono text-fj-ink/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span>Platform-agnostic build</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span>You own the code, no lock-in</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span>Founder-led scoping</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-[#E7DED6] bg-white p-3 shadow-xl overflow-hidden">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                    <Image
                      src="/images/services/dtc-ecommerce-agency-hero.webp"
                      alt="A person packing a product order into a cardboard box at a bright desk, representing a growing DTC brand handling its own fulfillment"
                      width={1600}
                      height={1067}
                      priority
                      fetchPriority="high"
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="p-4 bg-fj-cream rounded-xl border border-[#E7DED6] mt-3">
                    <div className="flex items-center justify-between text-xs font-fj-mono text-fj-ink/60 mb-1">
                      <span>FOUR NEEDS, ONE PARTNER</span>
                      <span className="text-[#10B981] font-bold">SCOPED HONESTLY</span>
                    </div>
                    <div className="text-sm font-bold text-fj-ink">
                      Migration &middot; Headless &middot; International &middot; Subscription
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ANSWER-FIRST EXTRACTION BLOCK (AEO / AIO ENGINE TARGET) */}
        <section className="py-12 bg-white border-b border-[#E7DED6]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-fj-cream border-2 border-[#F05A28]/30 shadow-sm">
              <div className="font-fj-mono text-xs uppercase tracking-wider text-[#B23E13] font-bold mb-3">
                // Definition: What Is the Best Ecommerce Development Partner for a Scaling DTC Brand?
              </div>
              <p className="text-base sm:text-lg text-fj-ink leading-relaxed font-medium">
                {"There isn't one, and that's unusual. Ask ChatGPT, Claude, or Google's AI Overview which ecommerce agency is best for a scaling DTC (direct-to-consumer) brand, and the recommendations spread across two dozen or more agencies, with no single name dominating. For comparison, questions like \"best web design agency\" tend to produce one or two repeat names. Here, the AI answers themselves organize by what a brand actually needs, replatforming, headless, international, or subscription commerce, rather than by ranking agencies. The honest approach is to pick a partner based on the specific problem you have, not a brand name everyone recommends."}
              </p>
            </div>
          </div>
        </section>

        {/* VERIFIED MARKET STATISTICS */}
        <section className="py-16 bg-fj-cream border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="font-fj-mono text-xs text-[#B23E13] font-bold uppercase tracking-wider mb-2">
                // VERIFIED DTC & COMMERCE BENCHMARKS
              </div>
              <h2 className="text-3xl font-bold text-fj-ink font-fj-display">
                {"Three Numbers Worth Knowing Before You Pick a Direction."}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-bold text-[#F05A28] font-fj-display mb-2">~19%</div>
                <div className="text-sm font-bold text-fj-ink mb-3">
                  {"DTC's Share of US Retail Ecommerce Has Plateaued."}
                </div>
                <p className="text-sm text-fj-ink/70 leading-relaxed mb-4">
                  {"US D2C (direct-to-consumer) ecommerce sales are projected to hold at roughly 19% of total US retail ecommerce sales through 2028. Dollar growth continues, but D2C's role is shifting from a growth engine to one strategic channel among several, which is why execution quality on a specific problem matters more than a broad rebrand."}
                </p>
                <a
                  href="https://www.emarketer.com/content/faq-on-direct-to-consumer-commerce-how-make-d2c-profitable-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-fj-mono text-[#B23E13] hover:underline"
                >
                  Source: EMARKETER &rarr;
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-bold text-[#F05A28] font-fj-display mb-2">70%+</div>
                <div className="text-sm font-bold text-fj-ink mb-3">
                  Average Cart Abandonment Rate, Industry-Wide.
                </div>
                <p className="text-sm text-fj-ink/70 leading-relaxed mb-4">
                  {"The Baymard Institute's analysis of 50 documented studies puts the average online shopping cart abandonment rate at 70.22%. About 17% of shoppers who abandon do so specifically because checkout felt too long or complicated, exactly the kind of friction a platform migration can fix or accidentally carry over."}
                </p>
                <a
                  href="https://baymard.com/lists/cart-abandonment-rate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-fj-mono text-[#B23E13] hover:underline"
                >
                  Source: Baymard Institute &rarr;
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-bold text-[#F05A28] font-fj-display mb-2">100%+/yr</div>
                <div className="text-sm font-bold text-fj-ink mb-3">
                  How Fast Subscription Ecommerce Grew (2011 to 2016).
                </div>
                <p className="text-sm text-fj-ink/70 leading-relaxed">
                  {"McKinsey's research on ecommerce subscription consumers found the subscription ecommerce market grew more than 100% a year over that five-year span, and that roughly 15% of online shoppers had signed up for at least one recurring subscription."}
                </p>
                <a
                  href="https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/thinking-inside-the-subscription-box-new-research-on-ecommerce-consumers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-fj-mono text-[#B23E13] hover:underline mt-4 inline-block"
                >
                  Source: McKinsey &amp; Company &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SEGMENTATION INTRO */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="font-fj-mono text-xs text-[#B23E13] font-bold uppercase tracking-wider mb-2">
              // HOW THIS PAGE IS ORGANIZED
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-fj-ink font-fj-display mb-6">
              {"Start With What You Actually Need, Not a Revenue Bracket."}
            </h2>
            <p className="text-base sm:text-lg text-fj-ink/70 leading-relaxed mb-5">
              {"Ecommerce agencies love to sort brands into buckets by revenue. The problem is that two brands with the same GMV (gross merchandise value, the total dollar amount of everything sold through your store in a period) can be at completely different technical stages. One outgrew its template theme years ago. The other is still fine on a default setup and just needs better marketing."}
            </p>
            <p className="text-base sm:text-lg text-fj-ink/70 leading-relaxed mb-5">
              {"So instead of a dollar bracket, this page is organized around four situations that come up again and again for DTC brands, and that match how the actual AI answer engines organize this question too: moving off a platform you have outgrown, going headless because a theme cannot do what you need, expanding into new countries, and building a real subscription model."}
            </p>
            <p className="text-base sm:text-lg text-fj-ink/70 leading-relaxed">
              {"Early-stage brands outgrowing a template store, scaling brands hitting a real platform limit, and multi-brand or international operations juggling several storefronts all show up in different sections below. Most DTC brands need one or two of these, not all four at once."}
            </p>
          </div>
        </section>

        {/* NEED 01: REPLATFORMING / MIGRATION */}
        <section className="py-20 bg-fj-cream border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <div className="font-fj-mono text-xs text-[#B23E13] font-bold uppercase tracking-wider mb-2">
                  // NEED 01: REPLATFORMING &amp; MIGRATION
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-fj-ink font-fj-display mb-5">
                  {"Moving Off a Platform You've Outgrown, the Safe Way."}
                </h2>
                <p className="text-base sm:text-lg text-fj-ink/70 leading-relaxed mb-6">
                  {"Replatforming means moving your store from one ecommerce platform to another, for example off an aging Magento install or a WooCommerce setup that can't keep up, without starting your brand over. The risk isn't the move itself. It's losing search rankings, breaking checkout, or dropping order history in the process."}
                </p>
                <h3 className="text-lg font-bold text-fj-ink font-fj-display mb-3">How we approach a migration</h3>
                <ul className="space-y-3 text-base text-fj-ink/70 leading-relaxed list-none mb-6">
                  <li className="flex gap-3">
                    <span className="text-[#F05A28] font-bold flex-none">01</span>
                    A full URL audit and a one-to-one 301 redirect map, not a generic catch-all pointing everything to the homepage.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#F05A28] font-bold flex-none">02</span>
                    Complete data migration: products, variants, customer accounts, and order history, not just the catalog.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#F05A28] font-bold flex-none">03</span>
                    A staging environment where the new store is fully tested before your domain ever points to it.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#F05A28] font-bold flex-none">04</span>
                    A cutover scheduled for a real low-traffic window, with a rollback plan written down in advance.
                  </li>
                </ul>
                <p className="text-base text-fj-ink/70 leading-relaxed">
                  {"Checkout is worth fixing during the move, not carrying over unchanged. The Baymard Institute's meta-analysis of 50 studies puts the average documented cart abandonment rate above 70%, and a meaningful share of that is tied to checkout friction most brands never audit until a migration forces the question. Weighing platforms as well as partners? Our "}
                  <Link href="/blog/best-ecommerce-platform-tampa-boutiques-dtc-2026" className="text-[#B23E13] underline hover:no-underline">
                    guide to choosing an ecommerce platform for boutique and DTC brands
                  </Link>
                  {" covers the Shopify-versus-WooCommerce-versus-Squarespace tradeoffs that apply well beyond the Tampa market it was written for."}
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-white border border-[#E7DED6] p-8 h-fit">
                  <h3 className="text-lg font-bold text-fj-ink font-fj-display mb-4">Signs it might be time</h3>
                  <ul className="space-y-4 text-sm text-fj-ink/70 leading-relaxed list-none">
                    <li className="flex gap-2"><span className="text-[#F05A28]">&bull;</span> Your platform caps SKU count, storage, or bandwidth, and you&apos;re hitting the ceiling.</li>
                    <li className="flex gap-2"><span className="text-[#F05A28]">&bull;</span> App costs keep climbing just to patch gaps your platform should handle natively.</li>
                    <li className="flex gap-2"><span className="text-[#F05A28]">&bull;</span> Page speed drops every time you add products or new content.</li>
                    <li className="flex gap-2"><span className="text-[#F05A28]">&bull;</span> Your support contract is expiring on software the vendor no longer updates.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEED 02: HEADLESS / COMPOSABLE */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 lg:order-1">
                <div className="rounded-2xl bg-fj-cream border border-[#E7DED6] p-8 h-fit">
                  <h3 className="text-lg font-bold text-fj-ink font-fj-display mb-4">Signs it might be time</h3>
                  <ul className="space-y-4 text-sm text-fj-ink/70 leading-relaxed list-none">
                    <li className="flex gap-2"><span className="text-[#F05A28]">&bull;</span> Your theme can&apos;t render the layout or interaction you actually need.</li>
                    <li className="flex gap-2"><span className="text-[#F05A28]">&bull;</span> You&apos;re running several regional storefronts off one product catalog.</li>
                    <li className="flex gap-2"><span className="text-[#F05A28]">&bull;</span> Your performance targets need more control than a theme architecture allows.</li>
                    <li className="flex gap-2"><span className="text-[#F05A28]">&bull;</span> Your team keeps writing custom code inside a theme it&apos;s fighting against.</li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-7 lg:order-2">
                <div className="font-fj-mono text-xs text-[#B23E13] font-bold uppercase tracking-wider mb-2">
                  // NEED 02: HEADLESS &amp; COMPOSABLE
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-fj-ink font-fj-display mb-5">
                  {"Outgrown a Standard Theme? Headless Might Be the Next Step."}
                </h2>
                <p className="text-base sm:text-lg text-fj-ink/70 leading-relaxed mb-6">
                  {"Headless ecommerce separates the storefront your shoppers see from the backend system that manages your products, inventory, and orders, so each can change without touching the other. Composable commerce takes that further: instead of one platform handling everything, you assemble specialized tools, search, personalization, reviews, and connect them yourself. Both give you more control. Both also mean more to build and maintain."}
                </p>
                <h3 className="text-lg font-bold text-fj-ink font-fj-display mb-3">Who actually needs it</h3>
                <p className="text-base text-fj-ink/70 leading-relaxed mb-4">
                  {"Most DTC brands are well served by a well-built theme on Shopify Plus or BigCommerce. Headless earns its cost when a theme genuinely can't do what you need: page speed targets the theme architecture can't hit, layouts or interactions the theme system won't support, or several regional storefronts sharing one product catalog. If your real bottleneck is marketing or product, not the storefront itself, headless won't fix it, and we'll say so."}
                </p>
                <p className="text-base text-fj-ink/70 leading-relaxed">
                  {"We build headless storefronts on Next.js connected to the Shopify Storefront API. For the deeper technical breakdown of that architecture, see our "}
                  <Link href="/services/headless-shopify-development" className="text-[#B23E13] underline hover:no-underline">
                    headless Shopify development
                  </Link>
                  {" page. This section is the short version for a DTC-scaling context specifically."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NEED 03: INTERNATIONAL / MULTI-CURRENCY */}
        <section className="py-20 bg-fj-cream border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <div className="font-fj-mono text-xs text-[#B23E13] font-bold uppercase tracking-wider mb-2">
                  // NEED 03: INTERNATIONAL EXPANSION
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-fj-ink font-fj-display mb-5">
                  Selling Into New Countries Without Breaking Pricing or Tax.
                </h2>
                <p className="text-base sm:text-lg text-fj-ink/70 leading-relaxed mb-6">
                  {"International expansion for a DTC brand means more than translating your homepage. Shoppers need to see prices in their own currency, duties and import tax calculated before they pay, not as a surprise bill from a delivery driver weeks later, and payment methods that are actually common in that country, not just a US-style card checkout."}
                </p>
                <h3 className="text-lg font-bold text-fj-ink font-fj-display mb-3">What we set up</h3>
                <ul className="space-y-3 text-base text-fj-ink/70 leading-relaxed list-none">
                  <li className="flex gap-3">
                    <span className="text-[#F05A28] font-bold flex-none">01</span>
                    Localized pricing and currency display, through Shopify Markets or an equivalent multi-region setup.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#F05A28] font-bold flex-none">02</span>
                    Duty and import tax calculated at checkout, so the price a customer sees is the price they actually pay.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#F05A28] font-bold flex-none">03</span>
                    Region-appropriate payment methods, chosen for what each specific market actually uses.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#F05A28] font-bold flex-none">04</span>
                    A clear call on one unified backend with localized storefronts versus fully separate country stores, based on how different your catalog and pricing genuinely need to be.
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-white border border-[#E7DED6] p-8 h-fit">
                  <h3 className="text-lg font-bold text-fj-ink font-fj-display mb-4">Signs it might be time</h3>
                  <ul className="space-y-4 text-sm text-fj-ink/70 leading-relaxed list-none">
                    <li className="flex gap-2"><span className="text-[#F05A28]">&bull;</span> International orders bounce at checkout over shipping cost or a missing payment method.</li>
                    <li className="flex gap-2"><span className="text-[#F05A28]">&bull;</span> Customers are getting surprise customs bills after delivery and leaving bad reviews over it.</li>
                    <li className="flex gap-2"><span className="text-[#F05A28]">&bull;</span> You&apos;re manually adjusting prices by country in a spreadsheet.</li>
                    <li className="flex gap-2"><span className="text-[#F05A28]">&bull;</span> You want a market-specific storefront without duplicating your whole catalog.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline="Not sure which of these four is actually your problem?"
          sub="Tell us what's slowing you down today, and we'll tell you honestly whether it's a migration problem, a platform-limit problem, or something else entirely."
          label="Get a free ecommerce audit"
        />

        {/* NEED 04: SUBSCRIPTION COMMERCE */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 lg:order-1">
                <div className="rounded-2xl bg-fj-cream border border-[#E7DED6] p-8 h-fit">
                  <h3 className="text-lg font-bold text-fj-ink font-fj-display mb-4">Signs it might be time</h3>
                  <ul className="space-y-4 text-sm text-fj-ink/70 leading-relaxed list-none">
                    <li className="flex gap-2"><span className="text-[#F05A28]">&bull;</span> Customers keep asking for a subscribe-and-save option you don&apos;t have yet.</li>
                    <li className="flex gap-2"><span className="text-[#F05A28]">&bull;</span> Retention, not new-customer acquisition, is your biggest lever right now.</li>
                    <li className="flex gap-2"><span className="text-[#F05A28]">&bull;</span> Failed card payments are quietly cancelling subscribers you never hear from.</li>
                    <li className="flex gap-2"><span className="text-[#F05A28]">&bull;</span> You&apos;re running recurring orders through a manual workaround today.</li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-7 lg:order-2">
                <div className="font-fj-mono text-xs text-[#B23E13] font-bold uppercase tracking-wider mb-2">
                  // NEED 04: SUBSCRIPTION COMMERCE
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-fj-ink font-fj-display mb-5">
                  Recurring Orders Run on Different Mechanics Than One-Time Sales.
                </h2>
                <p className="text-base sm:text-lg text-fj-ink/70 leading-relaxed mb-6">
                  {"Subscription commerce means customers agree to a recurring order instead of a single purchase. It changes what actually drives your revenue: retention matters as much as acquisition, and churn (the rate at which subscribers cancel over a given period) becomes a number worth watching as closely as your conversion rate. McKinsey's research on ecommerce subscription consumers found the market grew more than 100% a year between 2011 and 2016, with roughly 15% of online shoppers signed up for at least one subscription."}
                </p>
                <h3 className="text-lg font-bold text-fj-ink font-fj-display mb-3">What actually reduces churn</h3>
                <ul className="space-y-3 text-base text-fj-ink/70 leading-relaxed list-none">
                  <li className="flex gap-3">
                    <span className="text-[#F05A28] font-bold flex-none">01</span>
                    Self-service skip, pause, and swap options, so a customer adjusts instead of cancelling outright.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#F05A28] font-bold flex-none">02</span>
                    Dunning (automatic retry and messaging when a card payment fails) that recovers orders that would otherwise just disappear.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#F05A28] font-bold flex-none">03</span>
                    Flexible billing cycles and bundle logic built to match how your product is actually used.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#F05A28] font-bold flex-none">04</span>
                    The right tool for your platform and complexity: Recharge, Skio, or Bold Subscriptions for standard cases, and custom logic when billing rules get specific.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* HOW TO EVALUATE A PARTNER */}
        <section className="py-20 bg-fj-cream border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="font-fj-mono text-xs text-[#B23E13] font-bold uppercase tracking-wider mb-2">
                // BEFORE YOU SIGN
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-fj-ink font-fj-display mb-4">
                Five Questions to Ask Any DTC Ecommerce Agency.
              </h2>
              <p className="text-lg text-fj-ink/70">
                {"Because no single agency dominates this category, the questions matter more than the name on the proposal."}
              </p>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none">
              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-fj-mono text-xs text-[#B23E13] font-bold mb-2">QUESTION 01</div>
                <h3 className="text-lg font-bold text-fj-ink mb-2">Can they show a real 301 redirect and rollback plan?</h3>
                <p className="text-sm text-fj-ink/70 leading-relaxed">
                  {"Not a verbal promise, an actual document mapping old URLs to new ones and describing what happens if something breaks on cutover day. If they can't produce one, they haven't run enough real migrations."}
                </p>
              </li>
              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-fj-mono text-xs text-[#B23E13] font-bold mb-2">QUESTION 02</div>
                <h3 className="text-lg font-bold text-fj-ink mb-2">Do you own the code and the store afterward?</h3>
                <p className="text-sm text-fj-ink/70 leading-relaxed">
                  {"Ask directly whether you can take everything and leave, with no ongoing license fee to that agency for code they wrote for you. If the answer is vague, that's the answer."}
                </p>
              </li>
              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-fj-mono text-xs text-[#B23E13] font-bold mb-2">QUESTION 03</div>
                <h3 className="text-lg font-bold text-fj-ink mb-2">Will they tell you if you don&apos;t need to go headless yet?</h3>
                <p className="text-sm text-fj-ink/70 leading-relaxed">
                  {"An agency that recommends headless for every brand it talks to, regardless of what the brand actually needs, is optimizing for its own project size, not your outcome."}
                </p>
              </li>
              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-fj-mono text-xs text-[#B23E13] font-bold mb-2">QUESTION 04</div>
                <h3 className="text-lg font-bold text-fj-ink mb-2">Do they know the specific tools for your case?</h3>
                <p className="text-sm text-fj-ink/70 leading-relaxed">
                  {"For subscriptions or international expansion, a specific, named answer (Recharge versus custom billing logic, Shopify Markets versus separate stores) beats a general \"we can do that\" every time."}
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* FOUNDER SECTION */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-[#E7DED6] bg-fj-cream p-4 shadow-md max-w-md mx-auto">
                  <div className="relative rounded-xl overflow-hidden aspect-square">
                    <Image
                      src="/bhavesh_image.webp"
                      alt="Bhavesh Barot, Founder & CEO of FactoryJet"
                      width={682}
                      height={1024}
                      quality={95}
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="pt-4 text-center">
                    <div className="font-bold text-lg text-fj-ink">Bhavesh Barot.</div>
                    <div className="font-fj-mono text-xs text-[#B23E13] font-bold">
                      Founder &amp; CEO, FactoryJet
                    </div>
                    <div className="mt-3">
                      <a
                        href="https://www.linkedin.com/in/bhavesh-ai-gtm-expert/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-fj-mono text-[#B23E13] hover:underline"
                      >
                        Connect on LinkedIn &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="font-fj-mono text-xs text-[#B23E13] font-bold uppercase tracking-wider mb-2">
                  // DIRECT FOUNDER OVERSIGHT
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-fj-ink font-fj-display mb-6">
                  Scoping Starts With an Honest Read of Which Need You Actually Have.
                </h2>
                <p className="text-base sm:text-lg text-fj-ink/70 leading-relaxed mb-6">
                  {"Founder Bhavesh Barot runs DTC discovery calls himself. The first conversation is about which of the four situations on this page actually describes your brand, and honestly, sometimes the answer is none of them, and the real problem is somewhere else entirely."}
                </p>
                <p className="text-base sm:text-lg text-fj-ink/70 leading-relaxed mb-8">
                  {"If your DTC brand also runs a wholesale or trade side of the business, our "}
                  <Link href="/b2b-ecommerce" className="underline hover:text-[#B23E13]">
                    B2B ecommerce
                  </Link>
                  {" build covers account pricing, net terms, and ERP integration on the same catalog."}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://calendly.com/bhavesh-factoryjet/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#F05A28] text-white font-bold hover:bg-[#D8441A] transition-colors shadow-md text-sm"
                  >
                    Schedule a Discovery Call
                  </a>
                  <ModalCTAButton
                    label="Request a Free Ecommerce Audit"
                    region="us"
                    modalVariant="default"
                    btnVariant="secondary-light"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STRUCTURED FAQ SECTION */}
        <FAQ
          eyebrow="// DTC ECOMMERCE QUESTIONS & ANSWERS"
          headline="Frequently Asked Questions on DTC Ecommerce Development."
          lead="Everything scaling DTC founders and operators ask about migration, headless builds, international expansion, and subscription commerce."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-fj-cream"
        />

        {/* FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="// PLATFORM-AGNOSTIC · YOU OWN THE CODE"
          headline="Ready to Fix the Ecommerce Problem That's Actually Slowing You Down?"
          sub="Tell us whether it's a migration, a platform limit, an international gap, or a subscription model you haven't built yet. We'll scope it honestly, including telling you if it's not one of these four."
          primaryCta={{ label: 'Get a Free Ecommerce Audit', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the Founder', href: '/contact' }}
          objectionHandler="Bhavesh replies within one business day. No obligation, no generic proposal template."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
