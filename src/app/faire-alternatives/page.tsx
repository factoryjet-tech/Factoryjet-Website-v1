import type { Metadata } from 'next';
import Link from 'next/link';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';
import FinalCTA from '@/components/v2/FinalCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import ComparisonTable, { type ComparisonColumn, type ComparisonRow } from '@/components/v2/ComparisonTable';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { ORG_ID, FOUNDER_ID } from '@/data/organization';

/* ─────────────────────────────────────────────────────────────────────────────
   /faire-alternatives, built 2026-10-05.

   Why this page exists: /faire-wholesale-marketplace produced a US brand lead
   in the last week of September 2026, and brands on Faire also search for
   where else to sell wholesale. US monthly searches (DataForSEO, 2026-10-05):
   "wholesale marketplaces like faire" 70, "faire competitors" 70, "faire
   alternatives" 40, "sites like faire" 40, "wholesale platforms like faire"
   40. The live top 10 is small sites, there is an AI Overview and no Maps
   pack.

   What makes it ours: every platform fact below was read on that platform's
   own website or help centre on 2026-10-05, and four names that current
   listicles still rank (Abound, Tundra, Handshake, Bulletin) turned out to be
   sold, shut or offline. Ankorstore turned out to be closed to US-based
   brands, and Shopify's help centre lists Shopify B2B on the Basic, Grow,
   Advanced and Plus plans. The page also covers the option most lists leave
   out, a wholesale portal on the brand's own store, and says plainly when a
   marketplace is the better choice. That portal is what FactoryJet builds
   (/services/shopify-plus-b2b, /services/bigcommerce-b2b, /b2b-ecommerce), and
   the page says so next to the claim.

   Truth rules followed: no FactoryJet prices, no client names, no testimonials,
   no result claims. Third-party fees are stated "as listed on" the check date
   and each one links to the page it came from. Where a platform does not
   publish a detail the copy says so.

   Single sources of truth:
   - ALTERNATIVES feeds the visible numbered list, the ItemList JSON-LD and the
     comparison table rows.
   - FAQ_ITEMS feeds the visible <FAQ> and the FAQPage JSON-LD.
   - BREADCRUMB_ITEMS feeds the visible trail and the BreadcrumbList JSON-LD.
   There is no second hand-typed copy of any of them.

   Schema rendered: WebPage, ItemList, FAQPage, BreadcrumbList. FactoryJet is
   referenced by @id only (src/data/organization.ts owns the entity).

   Static server component throughout, apart from the shared client widgets
   every page reuses (HeroInlineForm, and ModalCTAButton inside FinalCTA).
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/faire-alternatives';
const PAGE_TITLE = 'Faire Alternatives: 9 Options Checked in 2026 | FactoryJet';
const PAGE_DESC =
  "Faire alternatives for US brands, checked on each platform's own site on 5 Oct 2026. Fees, payment terms, regions, and how your own wholesale portal compares.";
const PAGE_PUBLISHED = '2026-10-05';
const PAGE_MODIFIED = '2026-10-05';
/** The day every third-party page below was fetched. Shown next to each fee. */
const CHECKED_ON = '5 October 2026';
const CHECKED_SHORT = '5 OCT 2026';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'faire alternatives',
    'faire competitors',
    'sites like faire',
    'wholesale marketplaces like faire',
    'wholesale platforms like faire',
    'apps like faire',
    'faire vs creoate',
    'faire vs abound',
    'wholesale portal',
    'shopify b2b wholesale',
  ],
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      'en-US': CANONICAL_URL,
      'x-default': CANONICAL_URL,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: CANONICAL_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'FactoryJet' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Marketplaces', url: 'https://factoryjet.com/marketplace-management' },
  { name: 'Faire Alternatives', url: CANONICAL_URL },
];

/* ── Faire's own pages. All read in a browser on 2026-10-05. ── */
const FAIRE_URL = {
  costNorthAmerica: 'https://www.faire.com/support/articles/360015893392',
  costOutsideNorthAmerica: 'https://www.faire.com/support/articles/360040446591',
  directPolicy: 'https://www.faire.com/support/articles/360031800672',
  whatIsDirect: 'https://www.faire.com/support/articles/360032132391',
  pricingPolicy: 'https://www.faire.com/support/articles/360019040531',
  whereAvailable: 'https://www.faire.com/support/articles/360016111311',
  howToSell: 'https://www.faire.com/support/articles/360015479092',
  brandTerms: 'https://www.faire.com/tos-brand',
} as const;

/** Faire's listed rates for North American brands, read 2026-10-05 at
 *  FAIRE_URL.costNorthAmerica. The worked example below is computed from these
 *  so the prose and the arithmetic cannot drift apart. */
const FAIRE_RATE = {
  commission: 0.15,
  newCustomerFee: 10,
  processing30Day: 0.024,
  processingFlat: 0.3,
} as const;

const EXAMPLE_ORDER = 500;
const money = (n: number) => `$${n.toFixed(2)}`;
const share = (n: number) => `${((n / EXAMPLE_ORDER) * 100).toFixed(1)}%`;

/** Creoate lists 20% on a first order and no separate processing fee
 *  (creoate.com/join-as-a-brand, read 2026-10-05). Faire's first-order cost with
 *  the 30-day payout is 15% + 2.4% of the order, plus $10 and $0.30. The two are
 *  equal where 20% of the order = 17.4% of the order + $10.30, about $396. */
const CREOATE_FIRST_ORDER_RATE = 0.2;
const CREOATE_BREAKEVEN = Math.round(
  (FAIRE_RATE.newCustomerFee + FAIRE_RATE.processingFlat) /
    (CREOATE_FIRST_ORDER_RATE - FAIRE_RATE.commission - FAIRE_RATE.processing30Day),
);

const exCommission = EXAMPLE_ORDER * FAIRE_RATE.commission;
const exProcessing = EXAMPLE_ORDER * FAIRE_RATE.processing30Day + FAIRE_RATE.processingFlat;
const exFirst = exCommission + FAIRE_RATE.newCustomerFee + exProcessing;
const exReorder = exCommission + exProcessing;

const WORKED_EXAMPLE: ReadonlyArray<{ order: string; sum: string; kept: string; pct: string }> = [
  {
    order: 'First order from a retailer Faire introduced',
    sum: `15% of $${EXAMPLE_ORDER} is ${money(exCommission)}. Add the ${money(FAIRE_RATE.newCustomerFee)} new customer fee. Add processing of 2.4% plus $0.30, which is ${money(exProcessing)}.`,
    kept: money(exFirst),
    pct: share(exFirst),
  },
  {
    order: 'Reorder from that same retailer',
    sum: `${money(exCommission)} commission plus ${money(exProcessing)} processing.`,
    kept: money(exReorder),
    pct: share(exReorder),
  },
  {
    order: 'Order from a retailer you brought through Faire Direct',
    sum: `No commission. ${money(exProcessing)} processing.`,
    kept: money(exProcessing),
    pct: share(exProcessing),
  },
];

const FAIRE_FACTS = [
  {
    value: '15% + $10',
    label:
      'Faire\'s charge when a new retailer finds a US or Canadian brand on the marketplace. 15% commission, plus a one-time $10 new customer fee. Reorders stay at 15%.',
    sourceUrl: FAIRE_URL.costNorthAmerica,
    sourceLabel: 'Cost to sell in North America',
  },
  {
    value: '0%',
    label:
      'Faire\'s commission when a retailer\'s first order comes through your own Faire Direct link. Payment processing still applies.',
    sourceUrl: FAIRE_URL.directPolicy,
    sourceLabel: 'Faire Direct commission policy',
  },
  {
    value: '1.9% to 3.5%',
    label:
      'Payment processing for North American brands, plus $0.30 an order. Next-day payout is 3.5%, 30-day is 2.4% and 60-day is 1.9%.',
    sourceUrl: FAIRE_URL.costNorthAmerica,
    sourceLabel: 'Payment processing rates',
  },
  {
    value: 'Same or lower',
    label:
      'Faire\'s pricing policy. Your wholesale price on Faire must match or beat your price anywhere else, including your own wholesale site.',
    sourceUrl: FAIRE_URL.pricingPolicy,
    sourceLabel: 'Pricing policy, US and Canada brands',
  },
] as const;

/** Faire pages behind facts stated in the FAQ and the table, where a link cannot sit inline. */
const FAIRE_PAGES_READ: ReadonlyArray<{ label: string; url: string }> = [
  { label: 'Cost to sell outside North America', url: FAIRE_URL.costOutsideNorthAmerica },
  { label: 'Where is Faire available?', url: FAIRE_URL.whereAvailable },
  { label: 'How do I sell on Faire?', url: FAIRE_URL.howToSell },
];

/* ── Four words the page relies on, defined once, right after the answer. ── */
const GLOSSARY: ReadonlyArray<{ term: string; meaning: string }> = [
  {
    term: 'Wholesale',
    meaning:
      'Selling in bulk to a shop at a lower price so the shop can resell it. Faire\'s help centre says shops typically sell at twice the wholesale price, a 50% margin.',
  },
  { term: 'Commission', meaning: 'The share of each order a marketplace keeps as its fee.' },
  {
    term: 'MOQ',
    meaning: 'Minimum order quantity. The smallest order you will accept, counted in units or in dollars.',
  },
  {
    term: 'Net terms',
    meaning:
      'Pay later. Net 60 means the shop pays 60 days after the order, so somebody carries the wait and the risk.',
  },
];

/* ── THE LIST. One array feeds the visible numbered list, the ItemList JSON-LD
   and the comparison table. Every fee below was read on the platform's own
   site on 2026-10-05 and is linked from `sources`. ── */
type SourceLink = { label: string; url: string };

type Platform = {
  /** Anchor id on this page, also used as the ItemList url fragment. */
  id: string;
  name: string;
  /** Short label for what kind of thing this is. */
  kind: string;
  /** What it is and what it lists as its fee. */
  summary: string;
  /** The honest catch. */
  watchOut: string;
  /* Comparison table cells. */
  suits: string;
  fees: string;
  terms: string;
  regions: string;
  relationship: string;
  sources: ReadonlyArray<SourceLink>;
};

const ALTERNATIVES: ReadonlyArray<Platform> = [
  {
    id: 'creoate',
    name: 'Creoate',
    kind: 'Marketplace · gift, home and lifestyle',
    summary:
      'Creoate takes brands that ship from the UK, wider Europe and the US. Joining is free. It lists 20% commission on a retailer\'s first order and 15% on reorders, both before VAT, and 0% on shops you already supply. Creoate says it covers the cost of shipping.',
    watchOut: `Creoate's page lists no separate processing fee. Count Faire's $10 fee and its 2.4% processing for a 30-day payout, and Creoate's 20% costs less on a first order below about $${CREOATE_BREAKEVEN}. Above that, Faire costs less.`,
    suits: 'Gift, home and lifestyle brands that also want UK and European shops',
    fees: '20% first order, 15% reorders (before VAT), 0% on shops you bring',
    terms: 'Retailers get 60 days. You are paid within 30 days of fulfilling',
    regions: 'Brands shipping from the UK, Europe or the US. Retailers there and in Canada',
    relationship: 'Shared',
    sources: [{ label: 'Join as a Brand, creoate.com', url: 'https://www.creoate.com/join-as-a-brand' }],
  },
  {
    id: 'fashiongo',
    name: 'FashionGo',
    kind: 'Marketplace · fashion',
    summary:
      'FashionGo is a wholesale marketplace for fashion vendors. There is no monthly or setup fee. It lists a flat 10% to 13% commission, depending on category, and 0% on buyers who join through your referral link.',
    watchOut:
      'It accepts vendors with US or Canadian business documents only, and it is built for fashion. A candle or snack brand will not fit.',
    suits: 'Fashion brands selling to boutiques',
    fees: 'Flat 10% to 13% by category. 0% on referred buyers',
    terms: 'Buyers get up to 60 days. You are paid in 21 days, or 2 business days for an extra 2%',
    regions: 'Vendors with US or Canadian business documents',
    relationship: 'Shared',
    sources: [
      { label: 'Sell On FashionGo', url: 'https://www.fashiongo.net/CustomerService/SellOnFashionGo' },
      { label: 'Buyer terms, fashiongo.net', url: 'https://www.fashiongo.net/' },
    ],
  },
  {
    id: 'mable',
    name: 'Mable',
    kind: 'Marketplace · food and drink',
    summary:
      'Mable is for food and drink brands. It says most of its buyers are independent grocery stores, markets and co-ops. It lists 12.5% commission on orders from its buyers, plus a one-time extra 12.5% on a new retailer\'s first order. Buyers you bring are 0%.',
    watchOut:
      'Mable also sells access to distributor marketplaces, listed at $500 setup, $450 a year each and 12.5% an order. Confirm which program you are joining.',
    suits: 'Food and drink brands selling to independent grocers',
    fees: '12.5%, plus an extra 12.5% once on a new retailer. 0% on buyers you bring',
    terms: 'You are paid on net 30. Retailer terms were not on the pages we read',
    regions: 'US. Mable says its buyers are in all 50 states',
    relationship: 'Shared',
    sources: [
      {
        label: 'How does commission work on Mable?',
        url: 'https://support.meetmable.com/hc/en-us/articles/360034041851-How-does-commission-work-on-Mable',
      },
      {
        label: 'Growing your wholesale business with Mable',
        url: 'https://support.meetmable.com/hc/en-us/articles/4411572224020-Growing-your-wholesale-business-with-Mable',
      },
      { label: 'Sell with Mable', url: 'https://www.meetmable.com/start-selling' },
    ],
  },
  {
    id: 'indieme',
    name: 'IndieMe',
    kind: 'Marketplace · handmade',
    summary:
      'IndieMe is a juried marketplace, which means your work is reviewed before you are let in. It is for artists whose work is made or assembled in the US or Canada. Applying costs $25 and membership is listed at $59 a month. IndieMe takes no commission, and the buyer pays you directly.',
    watchOut:
      '$59 equals 15% commission on $393 of orders, so the flat fee costs less once you sell more than that in a month.',
    suits: 'Makers of work handmade in the US or Canada',
    fees: '$25 to apply, then $59 a month. No commission',
    terms: 'None. The buyer pays you directly',
    regions: 'Artists in the US and Canada',
    relationship: 'Yours',
    sources: [
      { label: 'Sell Wholesale on IndieMe', url: 'https://www.indieme.com/For-Artists/Sellers-Account' },
      { label: 'Flat Fee vs. Commission', url: 'https://www.indieme.com/For-Artists/Flat-Fee-vs-Commission' },
      { label: 'Artist Qualifications', url: 'https://www.indieme.com/artist_qualifications' },
    ],
  },
  {
    id: 'rangeme',
    name: 'RangeMe',
    kind: 'Buyer discovery site',
    summary:
      'RangeMe is a product discovery site. Retail and foodservice buyers browse brand profiles, request samples and message the brands they like. RangeMe says more than 15,000 buyers use it. The free plan shows 3 products, and paid plans are listed at $99, $1,399 and $2,499 a year.',
    watchOut:
      'It gets you seen. Its pricing page lists no order commission and no payment terms, so you still need a way to take the order.',
    suits: 'Brands that want retail and foodservice buyers to find them',
    fees: 'Free for 3 products, then $99, $1,399 or $2,499 a year',
    terms: 'None. You agree terms with each buyer',
    regions: 'Not published',
    relationship: 'Yours',
    sources: [
      { label: 'Plans & Pricing for Suppliers', url: 'https://www.rangeme.com/pricing/suppliers' },
      { label: 'RangeMe for Suppliers', url: 'https://www.rangeme.com/suppliers' },
    ],
  },
  {
    id: 'ankorstore',
    name: 'Ankorstore',
    kind: 'Marketplace · Europe',
    summary:
      'Ankorstore is a European wholesale marketplace. Joining is free. It lists a 3% payment fee on every order and a one-time €49 before VAT for each new retailer it brings you.',
    watchOut:
      'A US-based brand cannot register. Ankorstore lists 26 European countries, says any other country is not open, and requires stock in an accepted country.',
    suits: 'Brands with a registered company and stock in Europe',
    fees: '3% payment fee, plus €49 once for each new retailer it brings',
    terms: 'Retailers get up to 90 days. You are paid 2 days after delivery',
    regions: '26 European countries. Not open to US-based brands',
    relationship: 'Shared',
    sources: [
      {
        label: 'Pricing model for brands',
        url: 'https://support.ankorstore.com/articles/4318772279-what-is-ankorstore-s-pricing-model-for-brands',
      },
      {
        label: 'Getting Started as a Brand',
        url: 'https://support.ankorstore.com/articles/8093100412-getting-started-as-a-brand',
      },
      { label: 'Brand registration', url: 'https://www.ankorstore.com/brand-registration' },
    ],
  },
  {
    id: 'orderchamp',
    name: 'Orderchamp',
    kind: 'Marketplace · Europe',
    summary:
      'Orderchamp is a wholesale marketplace for retailers across Europe and says it has 200,000 of them. Brands pay a monthly subscription plus commission. The base tier is 18% on a new retailer\'s first order, capped at €250, and 7% on reorders. Both fall with volume, to as low as 12% and 1%.',
    watchOut:
      'The subscription price shows only inside a brand account. Some lists call Orderchamp dropshipping only, but its homepage still read "online wholesale marketplace" on 5 October 2026.',
    suits: 'Brands that want independent retailers in Europe',
    fees: 'Subscription (price not published) plus 18% first order, 7% reorders. 0% on retailers you bring',
    terms: 'Retailers get up to 60 days. Weekly or monthly payouts',
    regions: 'Retailers across Europe',
    relationship: 'Shared',
    sources: [
      { label: 'Sell on Orderchamp', url: 'https://www.orderchamp.com/brands' },
      {
        label: 'Commission model, Orderchamp Help Center',
        url: 'https://orderchamp.zendesk.com/hc/en-150/articles/360016984018-Understanding-the-Commission-Model-on-Orderchamp',
      },
      { label: 'Orderchamp homepage', url: 'https://www.orderchamp.com/' },
    ],
  },
  {
    id: 'candid-wholesale',
    name: 'Candid Wholesale',
    kind: 'Ordering software',
    summary:
      'Candid is ordering software. You get a wholesale storefront hosted by Candid and invite your own stores to order there. The Pro plan is listed at $179 a month billed yearly, with payment processing on top. JOOR and NuORDER by Lightspeed sell similar software. JOOR asks you to request pricing, and NuORDER asks you to book a demo.',
    watchOut: 'Candid does not describe a network of buyers who find you. New retailers are still your job.',
    suits: 'Brands with existing stores that want a ready-made ordering site',
    fees: '$179 a month billed yearly, plus payment processing',
    terms: 'Not published',
    regions: 'Not published',
    relationship: 'Yours',
    sources: [
      { label: 'Candid Wholesale', url: 'https://candidwholesale.com/' },
      { label: 'Candid pricing', url: 'https://candidwholesale.com/pricing/' },
      { label: 'Candid Pay rates', url: 'https://candidwholesale.com/features/candid-pay/' },
      { label: 'JOOR pricing', url: 'https://www.joor.com/pricing' },
      { label: 'NuORDER wholesale', url: 'https://www.nuorder.com/wholesale/' },
    ],
  },
  {
    id: 'own-wholesale-portal',
    name: 'Your own wholesale portal',
    kind: 'Your own store',
    summary:
      'A wholesale portal is a private, logged-in part of your own online store. Approved retailers see wholesale prices and minimums, then reorder without emailing you. Shopify includes its B2B features on the Basic, Grow, Advanced and Plus plans. No marketplace takes a share of the order.',
    watchOut:
      'Nobody sends you new retailers. You win them at trade shows, through reps or by pitching stores yourself, which is what the Wholesale In a Box course teaches. FactoryJet builds these portals, so weigh our view with that in mind.',
    suits: 'Brands with retailers who already reorder',
    fees: 'No marketplace commission. You pay your store platform, payment processing and the build',
    terms: 'You set them. A late payer is your risk',
    regions: 'Anywhere you ship',
    relationship: 'Yours',
    sources: [
      { label: 'Shopify B2B features by plan', url: 'https://help.shopify.com/en/manual/b2b/getting-started/plan-features' },
      { label: 'Wholesale In a Box course', url: 'https://www.wholesaleinabox.com/pricing' },
    ],
  },
];

/** Faire itself, as the first row of the table so every alternative has a baseline. */
const FAIRE_BASELINE = {
  name: 'Faire (the baseline)',
  suits: 'Brands that want new independent retailers to find them',
  fees: '15% plus $10 once for each new retailer. 0% on Faire Direct orders. Processing of 1.9% to 3.5% plus $0.30',
  terms: 'Eligible retailers get 60 days. You pick a next-day, 30-day or 60-day payout',
  regions: 'Retailers in 34 listed countries, including the US, Canada, the UK and Australia',
  relationship: 'Shared',
} as const;

/* ── Names that older lists still repeat. Not alternatives, so not in the list
   or the ItemList. Each line states only what we could see on 2026-10-05. ── */
const CLOSED: ReadonlyArray<{ name: string; status: string; detail: string; source: SourceLink }> = [
  {
    name: 'Abound',
    status: 'Sold',
    detail:
      'Carro announced on 11 January 2024 that it had bought Abound. helloabound.com now forwards to Carro, which sells dropship and marketplace software.',
    source: {
      label: 'Carro announcement, 11 Jan 2024',
      url: 'https://www.einpresswire.com/article/680662834/carro-announces-strategic-acquisition-of-leading-wholesale-marketplace-abound',
    },
  },
  {
    name: 'Tundra',
    status: 'Closed',
    detail:
      'Business of Home reported that Tundra announced in July 2023 it was shutting down its marketplace. The security certificate on tundra.com expired on 17 October 2024.',
    source: {
      label: 'Business of Home, 31 Aug 2023',
      url: 'https://businessofhome.com/articles/inside-the-lawsuit-between-b2b-digital-marketplaces-faire-and-tundra',
    },
  },
  {
    name: 'Handshake',
    status: 'Gone',
    detail:
      'handshake.com now forwards to a Shopify blog post about finding suppliers. Shopify\'s help centre documents Faire as its wholesale marketplace channel.',
    source: {
      label: 'Faire channel, Shopify Help Center',
      url: 'https://help.shopify.com/en/manual/online-sales-channels/marketplaces/faire',
    },
  },
  {
    name: 'Bulletin',
    status: 'Not loading',
    detail:
      'Trade show owner Emerald bought Bulletin in July 2022. bulletin.co did not load for us and we found no closure notice, so we can only say there was nowhere to apply.',
    source: {
      label: 'Business of Home, 13 Jul 2022',
      url: 'https://businessofhome.com/articles/emerald-holding-acquires-wholesale-marketplace-bulletin',
    },
  },
];

/** Named inside a list entry and checked on their own sites, but not given an entry of their own. */
const ALSO_CHECKED = ['JOOR', 'NuORDER by Lightspeed', 'Wholesale In a Box'] as const;

/** Every alternative except the last one is a third-party platform. */
const NAMES_CHECKED = ALTERNATIVES.length - 1 + CLOSED.length + ALSO_CHECKED.length;

const LEDGER: ReadonlyArray<{ value: string; label: string }> = [
  { value: String(NAMES_CHECKED), label: 'platform names checked on their own websites' },
  { value: String(ALTERNATIVES.length), label: 'options that made the list' },
  { value: String(CLOSED.length), label: 'sold, closed or not loading' },
  { value: '0%', label: 'marketplace commission on your own wholesale portal' },
];

/* ── Comparison table. Rows are built from the same ALTERNATIVES array. ── */
const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: 'Who it suits' },
  { label: 'Commission or fee model' },
  { label: 'Payment terms' },
  { label: 'Regions served' },
  { label: 'Retailer relationship' },
];

const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [FAIRE_BASELINE, ...ALTERNATIVES].map((p) => ({
  feature: p.name,
  values: [p.suits, p.fees, p.terms, p.regions, p.relationship],
}));

/* ── Related FactoryJet pages. Every href is a real route under src/app. ── */
const RELATED: ReadonlyArray<{ href: string; label: string; note: string }> = [
  {
    href: '/services/shopify-plus-b2b',
    label: 'Shopify B2B and wholesale builds',
    note: 'Company accounts, price catalogs and reorder pages on Shopify.',
  },
  {
    href: '/services/bigcommerce-b2b',
    label: 'BigCommerce B2B Edition builds',
    note: 'Buyer portal, account pricing and quotes on BigCommerce.',
  },
  {
    href: '/b2b-ecommerce',
    label: 'B2B ecommerce development',
    note: 'Portals, ERP links and ordering for trade buyers.',
  },
  {
    href: '/faire-wholesale-marketplace',
    label: 'Staying on Faire',
    note: 'Setup, catalog sync and management for brands that keep selling there.',
  },
];

/* ── FAQ. Single array, rendered visibly below AND used to build the FAQPage
   JSON-LD. Questions come from Google People Also Ask boxes for US Faire
   alternative searches (DataForSEO, 2026-10-05) and the target queries. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'alternatives', label: 'The alternatives' },
  { key: 'faire', label: 'Faire fees and rules' },
  { key: 'portal', label: 'Your own wholesale portal' },
  { key: 'factoryjet', label: 'Working with FactoryJet' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── The alternatives ─────────────────────────────────────────────
  {
    category: 'alternatives',
    question: 'What are the best Faire alternatives for a US brand?',
    answer:
      'It depends on what you sell. Creoate takes US brands in gift, home and lifestyle. FashionGo is for fashion, Mable for food and drink, and IndieMe for work handmade in the US or Canada. For retailers you already know, your own wholesale portal carries no marketplace commission.',
  },
  {
    category: 'alternatives',
    question: 'Are Abound, Tundra and Handshake still open?',
    answer:
      'No. Carro announced in January 2024 that it had bought Abound, and helloabound.com now forwards to Carro. Tundra announced in July 2023 that it was shutting down its marketplace. Handshake\'s address forwards to a Shopify blog post. We checked all three on 5 October 2026.',
  },
  {
    category: 'alternatives',
    question: 'Is Faire or FashionGo better?',
    answer:
      'They serve different sellers. FashionGo is a fashion marketplace for vendors with US or Canadian business documents, and it lists a flat 10% to 13% commission. Faire covers many categories and lists 15% plus a one-time $10 fee on a new retailer\'s first order. Fashion brands should look at both.',
  },
  {
    category: 'alternatives',
    question: 'Can a US brand sell on Ankorstore?',
    answer:
      'Not from the US. Ankorstore\'s help centre lists 26 European countries a brand can register from and says any country not listed is not open. The United States is not on that list, and stock has to sit in an accepted country.',
  },
  {
    category: 'alternatives',
    question: 'Is Creoate a good alternative to Faire?',
    answer:
      `It is the most similar marketplace that takes US brands. Creoate lists 20% on a retailer's first order and 15% on reorders, with 0% on shops you already supply. Counting Faire's $10 fee and 2.4% processing, a first order under about $${CREOATE_BREAKEVEN} costs less on Creoate, and a larger one costs less on Faire.`,
  },
  // ── Faire fees and rules ─────────────────────────────────────────
  {
    category: 'faire',
    question: 'How much percentage does Faire take?',
    answer:
      'For US and Canadian brands, Faire lists 15% commission on marketplace orders, plus a one-time $10 fee on the first order from a retailer it introduced. Orders from retailers you bring through your Faire Direct link carry 0% commission. Every order also carries payment processing of 1.9% to 3.5% plus $0.30.',
  },
  {
    category: 'faire',
    question: 'What are the cons of using Faire?',
    answer:
      'Four that Faire\'s own pages confirm. The 15% commission applies to every reorder from a retailer Faire introduced. Your wholesale price there must be the same as or lower than anywhere else, including your own wholesale site. Faire reviews applications and can say no. And orders, payments and retailer accounts sit in Faire\'s system, outside your own store.',
  },
  {
    category: 'faire',
    question: 'Is it worth it to sell on Faire?',
    answer:
      'For finding new retailers, often yes. Faire says more than 700,000 retailers shop there, eligible retailers get 60 days to pay, and joining is free. It is weaker value for retailers who already know you, because Faire Direct or your own portal serves them at 0% commission.',
  },
  {
    category: 'faire',
    question: 'What is Faire Direct, and does it remove the commission?',
    answer:
      'Faire Direct is a link to your own shop page on Faire. When a retailer places their first order with you through that link, Faire charges 0% commission on that retailer\'s orders. Payment processing still applies. The retailer still logs in, orders and pays on Faire.',
  },
  {
    category: 'faire',
    question: 'Faire rejected my brand. What are my options?',
    answer:
      'Faire\'s help centre says it weighs supply and demand in your product category, your location, your number of products and how established your business is. A rejection may reflect a crowded category. Try a marketplace built for your category, or your own wholesale portal, which needs nobody\'s approval.',
  },
  // ── Your own wholesale portal ────────────────────────────────────
  {
    category: 'portal',
    question: 'Does Shopify have a wholesale platform?',
    answer:
      'Yes. It is called Shopify B2B. Shopify\'s help centre says it works on the Basic, Grow, Advanced and Shopify Plus plans. Company accounts, price catalogs, quantity rules, net payment terms and easy reorders are on all four. Plus adds unlimited catalogs, catalogs for a single company, deposits and partial payments.',
  },
  {
    category: 'portal',
    question: 'Can I run my own wholesale portal and stay on Faire?',
    answer:
      'Yes, with two rules in mind. Faire\'s pricing policy says your wholesale price on Faire must be the same as or lower than on your own wholesale site. The Faire brand terms we were shown also include a No Circumvention clause against steering retailers to order outside Faire. Use your portal for retailers you win yourself.',
  },
  // ── Working with FactoryJet ──────────────────────────────────────
  {
    category: 'factoryjet',
    question: 'What does FactoryJet build for wholesale brands?',
    answer:
      'We design, build and support wholesale ordering portals on Shopify and BigCommerce. That covers company accounts, wholesale price lists, minimum order rules and reorder pages. We also set up and manage Faire shops for brands that stay on the marketplace. You own the store, the customer data and the code.',
  },
  {
    category: 'factoryjet',
    question: 'How much does a wholesale portal cost?',
    answer:
      'It depends on your platform, how many price lists you need and which systems the portal connects to. FactoryJet quotes a fixed price in writing after a short scoping call. We do not take a percentage of your wholesale orders.',
  },
  {
    category: 'factoryjet',
    question: 'How long does it take to build a wholesale portal?',
    answer:
      'A new store with B2B pricing takes 5 to 8 weeks. If you already run a store, we scope the portal on its own and put the timeline in writing before work starts. We show you working software on your own data before you sign a contract.',
  },
];

/* ── JSON-LD. Every const below is rendered in the component. ── */
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${CANONICAL_URL}#webpage`,
  url: CANONICAL_URL,
  name: PAGE_TITLE,
  description: PAGE_DESC,
  datePublished: PAGE_PUBLISHED,
  dateModified: PAGE_MODIFIED,
  inLanguage: 'en-US',
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://factoryjet.com/#website',
    url: 'https://factoryjet.com',
    name: 'FactoryJet',
  },
  mainEntity: { '@id': `${CANONICAL_URL}#alternatives` },
  author: { '@type': 'Person', '@id': FOUNDER_ID, name: 'Bhavesh Barot' },
  publisher: { '@id': ORG_ID },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '[data-speakable]'] },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${CANONICAL_URL}#alternatives`,
  name: 'Faire alternatives for US brands',
  description: `Wholesale marketplaces, tools and channels a brand can use instead of or alongside Faire, each checked on its own website on ${CHECKED_ON}.`,
  numberOfItems: ALTERNATIVES.length,
  itemListOrder: 'https://schema.org/ItemListUnordered',
  itemListElement: ALTERNATIVES.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.name,
    description: p.summary,
    url: `${CANONICAL_URL}#${p.id}`,
  })),
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const SOURCE_LINK_CLASS =
  'inline-flex items-center gap-1.5 font-fj-mono text-[11px] font-semibold tracking-wide text-[#B23E13] hover:underline';

function SourceArrow() {
  return (
    <svg width="10" height="10" viewBox="0 0 9 9" fill="none" aria-hidden="true" className="flex-shrink-0">
      <path d="M1.5 7.5L7.5 1.5M7.5 1.5H3M7.5 1.5V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FaireAlternativesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <SiteHeader />

      <main className="min-h-screen bg-fj-cream text-fj-ink">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO */}
        <section className="relative overflow-hidden border-b border-fj-neutral-200 bg-fj-cream pt-12 pb-14 md:pt-14 md:pb-16">
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F05A28]/30 bg-white px-3 py-1.5">
                  <span className="font-fj-mono text-xs font-bold tracking-wide text-[#B23E13]">
                    WHOLESALE &middot; CHECKED {CHECKED_SHORT}
                  </span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.25rem]">
                  Faire alternatives for US brands, including the one most lists skip.
                </h1>

                <p className="mt-6 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                  Wholesale means selling your products in bulk to shops that resell them. Faire does that online and
                  keeps a commission, a share of each order. We opened every alternative&rsquo;s own website on{' '}
                  {CHECKED_ON} to see who still takes brands and what they charge.
                </p>

                <div className="mt-8">
                  <HeroInlineForm region="us" source="faire_alternatives_hero" submitLabel="Plan my wholesale portal" />
                </div>

                <div className="mt-5">
                  <Link
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-fj-body text-sm font-semibold text-fj-ink hover:opacity-70"
                  >
                    Talk to the founder
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-4 w-4">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-fj-neutral-200 pt-6 font-fj-mono text-xs text-fj-neutral-600">
                  <span>Every fee linked to a source</span>
                  <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
                  <span>Shopify and BigCommerce B2B</span>
                  <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
                  <span>You own the code</span>
                </div>
              </div>

              {/* The one visual on the page: a ledger of what the check found.
                  Every number is derived from the arrays above. */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-fj-neutral-200 border-t-[3px] border-t-[#F05A28] bg-white p-6 sm:p-8">
                  <p className="font-fj-mono text-[11px] font-bold uppercase tracking-wider text-[#B23E13]">
                    What the check found &middot; {CHECKED_SHORT}
                  </p>
                  <dl className="mt-4 divide-y divide-fj-neutral-200">
                    {LEDGER.map((row) => (
                      <div key={row.label} className="flex items-center justify-between gap-6 py-4">
                        <dt className="font-fj-body text-sm leading-snug text-fj-neutral-600">{row.label}</dt>
                        <dd className="font-fj-display text-4xl font-bold leading-none tracking-[-0.02em] text-[#F05A28] tabular-nums">
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ANSWER-FIRST BLOCK + the four words the page relies on */}
        <section className="border-b border-fj-neutral-200 bg-white py-12">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <div className="rounded-2xl border-2 border-[#F05A28]/25 bg-fj-cream p-6 sm:p-8">
              <div className="mb-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                Short answer
              </div>
              <p className="font-fj-body text-base leading-relaxed text-fj-ink sm:text-lg" data-speakable>
                The Faire alternatives that still took US brands on {CHECKED_ON} are Creoate (gift, home and
                lifestyle), FashionGo (fashion), Mable (food and drink), IndieMe (handmade) and RangeMe (retail
                buyers). Ankorstore and Orderchamp serve Europe. For retailers you already know, your own wholesale
                portal on Shopify or BigCommerce carries no marketplace commission. Abound, Tundra and Handshake are
                no longer options.
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
              {GLOSSARY.map((g) => (
                <div key={g.term} className="border-l-[3px] border-l-[#F05A28] pl-4">
                  <dt className="font-fj-display text-[15px] font-semibold text-fj-ink">{g.term}</dt>
                  <dd className="mt-1 font-fj-body text-sm leading-relaxed text-fj-neutral-600">{g.meaning}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 3. WHAT FAIRE CHARGES. The baseline every alternative is judged against. */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">The baseline</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              What Faire charges a US brand, from Faire&rsquo;s own help centre.
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              You cannot judge an alternative without the number you are leaving. These four are as listed on{' '}
              {CHECKED_ON}. Faire&rsquo;s cost page notes that its North American pricing changed on 5 July 2023.
              The 25% first-order rate you may have read elsewhere is what Faire lists for brands outside North
              America.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {FAIRE_FACTS.map((s) => (
                <div key={s.value} className="rounded-2xl border border-fj-neutral-200 border-t-[3px] border-t-[#F05A28] bg-white p-6">
                  <div className="font-fj-display text-3xl font-bold tracking-[-0.02em] text-[#F05A28]">{s.value}</div>
                  <p className="mt-3 font-fj-body text-sm leading-relaxed text-fj-neutral-600">{s.label}</p>
                  <a href={s.sourceUrl} target="_blank" rel="noopener noreferrer" className={`mt-4 ${SOURCE_LINK_CLASS}`}>
                    <SourceArrow />
                    {s.sourceLabel}
                  </a>
                </div>
              ))}
            </div>

            <h3 className="mt-14 font-fj-display text-xl font-semibold text-fj-ink">
              What that means on a ${EXAMPLE_ORDER} order.
            </h3>
            <p className="mt-2 max-w-2xl font-fj-body text-sm leading-relaxed text-fj-neutral-600">
              Our arithmetic from Faire&rsquo;s listed rates, using the 30-day payout. Shipping and promotions are
              left out.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-fj-neutral-200 bg-white">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-fj-neutral-200">
                    <th scope="col" className="px-5 py-4 font-fj-mono text-[11px] font-bold uppercase tracking-wider text-fj-neutral-600">Order</th>
                    <th scope="col" className="px-5 py-4 font-fj-mono text-[11px] font-bold uppercase tracking-wider text-fj-neutral-600">The sum</th>
                    <th scope="col" className="px-5 py-4 font-fj-mono text-[11px] font-bold uppercase tracking-wider text-fj-neutral-600">Faire keeps</th>
                    <th scope="col" className="px-5 py-4 font-fj-mono text-[11px] font-bold uppercase tracking-wider text-fj-neutral-600">Share of order</th>
                  </tr>
                </thead>
                <tbody>
                  {WORKED_EXAMPLE.map((r) => (
                    <tr key={r.order} className="border-t border-fj-neutral-200 first:border-t-0">
                      <th scope="row" className="px-5 py-4 align-top font-fj-body text-[15px] font-semibold text-fj-ink">{r.order}</th>
                      <td className="px-5 py-4 align-top font-fj-body text-sm leading-relaxed text-fj-neutral-600">{r.sum}</td>
                      <td className="px-5 py-4 align-top font-fj-display text-lg font-bold text-fj-ink tabular-nums">{r.kept}</td>
                      <td className="px-5 py-4 align-top font-fj-display text-lg font-bold text-fj-ink tabular-nums">{r.pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="font-fj-mono text-[11px] font-bold uppercase tracking-wider text-fj-neutral-600">
                Other Faire pages we read
              </span>
              {FAIRE_PAGES_READ.map((s) => (
                <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className={SOURCE_LINK_CLASS}>
                  <SourceArrow />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 4. THE NUMBERED LIST. Rendered from ALTERNATIVES, the same array as the ItemList JSON-LD. */}
        <section id="alternatives" className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[900px] px-6 md:px-8">
            <p className="fj-eyebrow">The list</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              {ALTERNATIVES.length} Faire alternatives, checked on {CHECKED_ON}.
            </h2>
            <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
              We opened each platform&rsquo;s own website or help centre, confirmed it still takes brands and
              copied its fees from its own page. Every figure is as listed on {CHECKED_ON} and links to where we
              read it. We could not see prices that only appear after sign-up, and buyer counts are each
              platform&rsquo;s own claim.
            </p>

            <ol className="mt-12 grid gap-5">
              {ALTERNATIVES.map((p, i) => (
                <li
                  key={p.id}
                  id={p.id}
                  data-alt-item
                  className="scroll-mt-24 rounded-2xl border border-fj-neutral-200 border-l-[3px] border-l-[#F05A28] bg-fj-cream p-6 sm:p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white font-fj-mono text-sm font-bold text-[#B23E13]">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-fj-display text-xl font-semibold text-fj-ink">{p.name}</h3>
                      <p className="mt-1 font-fj-mono text-[11px] font-bold uppercase tracking-wider text-fj-neutral-600">{p.kind}</p>
                    </div>
                  </div>
                  <p className="mt-4 font-fj-body text-[15px] leading-relaxed text-fj-ink">{p.summary}</p>
                  <p className="mt-3 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                    <strong className="font-semibold text-fj-ink">Watch for.</strong> {p.watchOut}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                    {p.sources.map((s) => (
                      <li key={s.url}>
                        <a href={s.url} target="_blank" rel="noopener noreferrer" className={SOURCE_LINK_CLASS}>
                          <SourceArrow />
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 5. NAMES TO CROSS OFF. Not alternatives, so outside the list and the ItemList. */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[900px] px-6 md:px-8">
            <p className="fj-eyebrow">Still on older lists</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              {CLOSED.length} names to cross off before you apply anywhere.
            </h2>
            <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
              People still search for all four. None had a working page for a new brand to apply on when we checked
              on {CHECKED_ON}.
            </p>
            <ul className="mt-10 grid gap-4">
              {CLOSED.map((c) => (
                <li key={c.name} data-closed-item className="rounded-xl border border-fj-neutral-200 bg-white px-5 py-4">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-fj-display text-[17px] font-semibold text-fj-ink">{c.name}</h3>
                    <span className="font-fj-mono text-[11px] font-bold uppercase tracking-wider text-[#B23E13]">{c.status}</span>
                  </div>
                  <p className="mt-2 font-fj-body text-sm leading-relaxed text-fj-neutral-600">{c.detail}</p>
                  <a href={c.source.url} target="_blank" rel="noopener noreferrer" className={`mt-3 ${SOURCE_LINK_CLASS}`}>
                    <SourceArrow />
                    {c.source.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6. COMPARISON TABLE. Rows come from the same ALTERNATIVES array as the list. */}
        <ComparisonTable
          eyebrow="Side by side"
          headline="Faire and its alternatives in one table."
          lead={`Faire is the first row as a baseline. Fees are as listed on ${CHECKED_ON} and they change, so follow the source links in the list above before you rely on one.`}
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          scrollRegionLabel="Comparison of Faire and its alternatives"
          footer="Shared means orders and payment pass through the marketplace, which also holds the retailer's account. Yours means they sit with you. Not published means the platform did not show it on the pages we read."
        />

        {/* 7. YOUR OWN WHOLESALE PORTAL */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">The option most lists skip</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Your own wholesale portal, and how it works beside a marketplace.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  A wholesale portal is a private part of your own online store. A retailer logs in, sees wholesale
                  prices, pack sizes and minimum order quantities, and reorders at midnight without emailing you.
                  You pay your store platform and your payment processor. No marketplace takes a share.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  FactoryJet builds these, so read this section knowing that.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:col-span-7">
                <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                  <h3 className="font-fj-display text-lg font-semibold text-fj-ink">What the store platforms already include</h3>
                  <p className="mt-2 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                    Shopify&rsquo;s help centre says Shopify B2B runs on the Basic, Grow, Advanced and Plus plans,
                    and that one store can serve both trade buyers and shoppers. Company accounts, price catalogs,
                    quantity rules, net terms and easy reorders are on all four plans. BigCommerce lists account
                    pricing, buyer portals, quote workflows and approval controls as built in.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                    <a href="https://help.shopify.com/en/manual/b2b/getting-started/plan-features" target="_blank" rel="noopener noreferrer" className={SOURCE_LINK_CLASS}>
                      <SourceArrow />
                      Shopify B2B features by plan
                    </a>
                    <a href="https://help.shopify.com/en/manual/b2b" target="_blank" rel="noopener noreferrer" className={SOURCE_LINK_CLASS}>
                      <SourceArrow />
                      Shopify B2B overview
                    </a>
                    <a href="https://www.bigcommerce.com/solutions/b2b-ecommerce-platform/" target="_blank" rel="noopener noreferrer" className={SOURCE_LINK_CLASS}>
                      <SourceArrow />
                      BigCommerce B2B
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                  <h3 className="font-fj-display text-lg font-semibold text-fj-ink">What you give up</h3>
                  <p className="mt-2 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                    A portal finds nobody. Faire says more than 700,000 retailers shop on Faire. Its cost page says
                    the processing fee covers guaranteeing on-time payment, late payments and defaults. On your own
                    portal, net terms are credit you give, and a late payer is your problem. Faire also covers free
                    returns on a retailer&rsquo;s first order.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                    <a href={FAIRE_URL.whatIsDirect} target="_blank" rel="noopener noreferrer" className={SOURCE_LINK_CLASS}>
                      <SourceArrow />
                      What is Faire Direct?
                    </a>
                    <a href={FAIRE_URL.costNorthAmerica} target="_blank" rel="noopener noreferrer" className={SOURCE_LINK_CLASS}>
                      <SourceArrow />
                      What Faire&rsquo;s processing fee covers
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                  <h3 className="font-fj-display text-lg font-semibold text-fj-ink">Running a portal and Faire together</h3>
                  <p className="mt-2 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                    Two Faire rules shape this. Its pricing policy says your wholesale price on Faire must be the
                    same as or lower than on your own wholesale site, so a portal cannot undercut your Faire shop.
                    The brand terms Faire showed us (the Faire Wholesale B.V. version, last updated 15 April 2026)
                    include a No Circumvention clause against steering retailers to order outside Faire. We could
                    not open the version shown to US accounts, so read yours.
                  </p>
                  <p className="mt-3 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                    So Faire keeps the retailers Faire found, and your portal serves the ones you win yourself.
                    Faire Direct already charges 0% commission on those, as do Creoate, Mable, FashionGo and
                    Orderchamp for shops you bring. The reason to move them to your own store is control. Their
                    accounts, prices and order history sit in a system you own.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                    <a href={FAIRE_URL.pricingPolicy} target="_blank" rel="noopener noreferrer" className={SOURCE_LINK_CLASS}>
                      <SourceArrow />
                      Faire pricing policy, US and Canada
                    </a>
                    <a href={FAIRE_URL.brandTerms} target="_blank" rel="noopener noreferrer" className={SOURCE_LINK_CLASS}>
                      <SourceArrow />
                      Faire Brand Terms of Service
                    </a>
                    <a href={FAIRE_URL.directPolicy} target="_blank" rel="noopener noreferrer" className={SOURCE_LINK_CLASS}>
                      <SourceArrow />
                      Faire Direct commission policy
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {RELATED.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="block h-full rounded-xl border border-fj-neutral-200 bg-white px-5 py-4 transition-colors hover:border-[#F05A28]"
                  >
                    <span className="font-fj-display text-base font-semibold text-fj-ink">{c.label}</span>
                    <span className="mt-1 block font-fj-body text-sm leading-relaxed text-fj-neutral-600">{c.note}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 8. HOW TO CHOOSE */}
        <section className="bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">How to choose</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Pick by category first, then by who finds your retailers.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Food and drink points to Mable, fashion to FashionGo, handmade work to IndieMe, and retail and
              foodservice buyers to RangeMe. UK and European shops point to Creoate, because Ankorstore is closed
              to US-based brands. After that, the choice is between a marketplace and your own portal.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6">
                <h3 className="font-fj-display text-lg font-semibold text-fj-ink">A marketplace is the better choice when</h3>
                <ul className="mt-3 grid list-disc gap-2 pl-5 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                  <li>You need new retailers and have no reps or trade show budget.</li>
                  <li>You want someone else to carry net terms and the risk of a late payer.</li>
                  <li>You want a shop&rsquo;s first order covered by free returns.</li>
                  <li>You are testing wholesale and do not want to build anything yet.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-fj-neutral-200 border-t-[3px] border-t-[#F05A28] bg-white p-6">
                <h3 className="font-fj-display text-lg font-semibold text-fj-ink">Your own portal is the better choice when</h3>
                <ul className="mt-3 grid list-disc gap-2 pl-5 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                  <li>Retailers already know you and reorder.</li>
                  <li>You want different prices or minimums for different accounts.</li>
                  <li>You want trade orders and stock in the same store as your consumer sales.</li>
                  <li>A marketplace turned you down, or its rules no longer fit how you sell.</li>
                </ul>
              </div>
            </div>

            <p className="mt-8 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              If every retailer you have came from Faire&rsquo;s marketplace, a portal has nobody to serve yet. Stay
              on the marketplace and use Faire Direct for each shop you win yourself.
            </p>

            <p className="mt-10 font-fj-mono text-xs text-fj-neutral-600">
              Reviewed and updated {PAGE_MODIFIED} &middot; Bhavesh Barot, Founder
            </p>
          </div>
        </section>

        <MidPageCTA
          headline="See your wholesale portal before you commit to it."
          sub="Tell us what you sell and how retailers order from you today. We show you working software on your own data before any contract."
          label="Plan my wholesale portal"
        />

        {/* 9. FAQ */}
        <FAQ
          eyebrow="Faire alternatives FAQ"
          headline="Questions brands ask before leaving or adding to Faire."
          lead={`Taken from Google's People Also Ask boxes for US searches on Faire alternatives, pulled on ${CHECKED_ON}.`}
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 10. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="Your own wholesale channel"
          headline="Give the retailers you win yourself a place to reorder."
          sub="We design, build and support wholesale portals on Shopify and BigCommerce. You own the store, the customer list and the code."
          primaryCta={{ label: 'Plan my wholesale portal', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="Staying on Faire is a fair choice too. We will say so if a portal would not pay for itself yet."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
