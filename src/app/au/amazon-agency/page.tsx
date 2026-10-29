import type { Metadata } from 'next';
import { Fragment } from 'react';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import AuFaq from '../components/AuFaq';
import VisualSlot from '../components/VisualSlot';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';

const CANONICAL = 'https://factoryjet.com/au/amazon-agency';
const UPDATED = '2026-10-29';
/* Title and H1 shaped by DataForSEO Google Ads volumes, Australia, 29 Oct 2026:
   "amazon seller central australia" 1,300, "amazon fba australia" 480, "sell on amazon australia" 390,
   "amazon advertising australia" 260, "amazon agency" 70, "amazon vendor central australia" 70,
   "amazon account management" 50, "amazon agency australia" 10 (CPC A$6.69, competition HIGH). */
const TITLE = 'Amazon Agency Australia | Amazon.com.au Ads & Listings | FactoryJet';
const H1 = 'Amazon Agency Australia: Amazon.com.au Ads, Listings and Stock Sync for Established Brands';
const DESCRIPTION =
  'Amazon agency for Australian brands on Amazon.com.au: Sponsored Ads, listings, Brand Registry, FBA, and stock synced with Shopify, Xero, MYOB and Cin7.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. Never hand-copy a
   second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Amazon Agency Australia', url: CANONICAL },
];

/* ─── External sources, each fetched and read 29 Oct 2026 ─────────────── */
// Amazon Australia, seller pricing: "the Professional plan costs $49.95 (excl. GST) per month";
// "The Individual plan costs $0.99 (excl. GST) per unit sale"; "Most referral fees are between 6% and 15%";
// "All fees are in Australian Dollars (AUD) and don't include applicable taxes, such as GST";
// "Australian GST applies to most items sold on Amazon.com.au".
const SRC_PRICING = 'https://sell.amazon.com.au/pricing';
// Amazon Australia, Fulfilment by Amazon: centres listed in Melbourne, Sydney, Perth and Brisbane; "we pick,
// pack, ship, and provide customer service"; Prime shipping logo on FBA listings; storage billed on daily
// average volume in cubic metres; long-term storage fees after 365 days; FBA does not service postcodes
// 2898, 2899, 4875, 6798 and 6799.
const SRC_FBA = 'https://sell.amazon.com.au/fulfilment-by-amazon';
// Amazon Australia, Multi-Channel Fulfilment: orders "from their own website or other third-party
// marketplaces"; "Amazon will use unbranded packaging" with no extra fee; integrations listed include
// Shopify, Magento and WooCommerce, or any site through the Selling Partner API.
const SRC_MCF = 'https://sell.amazon.com.au/fba-mcf';
// Amazon Australia, Brand Registry: brand name or logo "permanently affixed to your products or packaging";
// "pending or registered trademark" from the government office of a country with an Amazon store; "In some
// cases, you may also enrol with a pending trademark registration"; IP Accelerator; A+ Content, Brand
// Stores, Brand Analytics, Sponsored Brands; Project Zero and Transparency; New Seller Incentives of a 5%
// credit on referral fees on the first $1,500,000 in eligible branded sales (up to $75,000 in value), plus a
// $75 Sponsored Ads credit.
const SRC_BRAND = 'https://sell.amazon.com.au/brand-registry';
// Amazon Ads, Sponsored Products (en-au): "cost-per-click (CPC) ads"; "no monthly or upfront fees"; daily
// budget; AU listed among eligible countries.
const SRC_ADS = 'https://advertising.amazon.com/en-au/solutions/products/sponsored-products';
// eStore Factory (estorefactory.com.au, an Amazon agency; homepage AU address Niddrie, VIC 3042), "Is hiring an
// Amazon PPC agency in Australia worth it?", dated 16 Oct 2026: "On average, you can expect to pay between
// $1,000 to $10,000 per month"; small businesses "around $1,000 to $3,000 per month"; medium to large
// "$3,000 to $6,000 per month"; high-volume "$6,000 to $10,000+ per month". Currency, GST status and
// whether ad spend is included are not stated.
// Market range only. Never FactoryJet prices.
const SRC_RANGE = 'https://www.estorefactory.com.au/blog/amazon-ppc-agency-in-australia/';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────────
   Questions come from Google People Also Ask for Australia (DataForSEO, 29 Oct 2026: "selling on amazon
   australia", "amazon fba australia", "amazon advertising australia") plus buyer questions about agencies. */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Selling on Amazon.com.au' },
  { key: 'cost',   label: 'Fees and agency cost' },
  { key: 'ops',    label: 'FBA, stock and systems' },
  { key: 'agency', label: 'Working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── Selling on Amazon.com.au ──
  { category: 'basics', question: 'What does an Amazon agency do for an Australian brand?',
    answer: 'An Amazon agency runs the parts of Amazon.com.au that decide whether you make money there: Sponsored Ads, listing copy and images, Brand Registry, A+ Content, the Brand Store, and the account health work that keeps listings live. The better ones also connect Amazon to the systems you already run, so stock, orders and fees land correctly in Shopify, Cin7, Xero or MYOB instead of a spreadsheet.' },
  { category: 'basics', question: 'Is it easy to sell on Amazon Australia?',
    answer: 'Opening a Seller Central account is easy. Selling profitably is harder. You compete on search placement, price, delivery speed and reviews, often against the same product from other sellers. The work that decides results is unglamorous: accurate listings, a stock feed that never oversells, ads tuned to margin, and a fulfilment choice that suits your product size. Established brands with a catalogue and their own store usually have the most to gain.' },
  { category: 'basics', question: 'Is selling on Amazon worth it in 2026 for an established Australian brand?',
    answer: 'It is worth testing if your products are easy to ship, you can protect your margin after fees, and you can keep stock accurate across channels. Amazon brings shoppers who already search there, and FBA listings can show the Prime shipping logo. It is a poor fit if your margin is thin after the referral fee and fulfilment, or if resellers already undercut you on the same items. We work this out with your numbers before you commit.' },
  { category: 'basics', question: 'What are the disadvantages of selling on Amazon?',
    answer: 'Four come up most. Fees take a share of every sale. You control less of the customer relationship than on your own store. Other sellers can list against your products, which is why Brand Registry matters. And account health rules are strict, so late shipments or listing errors can suppress products. None of these rule Amazon out. They decide how you set it up, which products you list, and how you fulfil.' },
  { category: 'basics', question: 'Which is better, Amazon or Shopify?',
    answer: 'They do different jobs, so most established brands run both. Shopify is your own store: your brand, your customer data, your checkout. Amazon.com.au is a marketplace where shoppers already search, with fees and rules set by Amazon. The real question is how they share one stock pool. We connect them so an order on either side updates stock everywhere, and Amazon can even fulfil your Shopify orders through Multi-Channel Fulfilment.',
    links: [{ href: '/au/shopify-development', label: 'Shopify development in Australia' }] },
  { category: 'basics', question: 'Do I need Amazon Brand Registry in Australia?',
    answer: 'If you own a brand, yes. Amazon says you need a pending or registered trade mark from the government office of a country with an Amazon store, and in some cases a pending application is enough. Registry unlocks A+ Content, a Brand Store, Brand Analytics and Sponsored Brands ads, plus tools to report sellers who infringe your brand. Without a trade mark, Amazon points brands to its IP Accelerator program of vetted legal providers.' },

  // ── Fees and agency cost ──
  { category: 'cost', question: 'How much does it cost to sell on Amazon Australia?',
    answer: 'Amazon’s Australian pricing page lists the Professional plan at A$49.95 a month excluding GST, or A$0.99 per unit sold on the Individual plan. On top of that come referral fees, which Amazon says are mostly between 6% and 15% of the sale, plus fulfilment fees if you use FBA and any ad spend. Amazon states all its fees in AUD and excludes GST. Check the live page, because fees change.' },
  { category: 'cost', question: 'How much does Amazon take from a $100 sale?',
    answer: 'The referral fee alone on an A$100 sale is usually A$6 to A$15, because Amazon says most referral fees sit between 6% and 15%, set by category. Fulfilment is extra: FBA charges per unit by size and weight, plus storage. Then add your share of the monthly plan and any ad cost for that sale. Work it out per product, because a small, light item and a bulky one give different answers.' },
  { category: 'cost', question: 'How much does an Amazon agency cost in Australia?',
    answer: 'eStore Factory, an Amazon agency with an office in Niddrie, Victoria, published a guide on 16 October 2026 putting Amazon PPC agency fees in Australia at $1,000 to $10,000 a month: around $1,000 to $3,000 for small sellers, $3,000 to $6,000 for medium to large businesses, and $6,000 to $10,000 or more for high-volume brands. The guide quotes dollars without naming the currency and does not say whether GST or ad spend is included. FactoryJet quotes a fixed price in writing after a short scoping call.' },
  { category: 'cost', question: 'How do Amazon ads charge in Australia?',
    answer: 'Sponsored Products are cost-per-click ads, so you pay when a shopper clicks, not when the ad shows. Amazon Ads says there are no monthly or upfront fees for Sponsored Products, and you set a daily budget so spend stays within a cap. The craft is in the structure: which search terms you bid on, how much each is worth to your margin, and when to stop paying for a term that never converts.' },
  { category: 'cost', question: 'Why is my FBA fee so high?',
    answer: 'Usually one of three reasons. The item’s measured size or weight puts it in a dearer fulfilment band, so packaging changes can help. Storage builds up, because Amazon bills storage on average daily volume in cubic metres. Or stock has sat too long, and Amazon adds long-term storage fees after 365 days. Check the dimensions Amazon recorded for each product, then plan restocks so slow sellers do not sit in a fulfilment centre.' },
  { category: 'cost', question: 'Are there incentives for new Amazon sellers in Australia?',
    answer: 'When we checked Amazon’s Brand Registry page on 29 October 2026, it listed New Seller Incentives for registered brands: a 5% credit on referral fees on your first A$1,500,000 in eligible branded sales, worth up to A$75,000, plus an A$75 credit for Sponsored Ads campaigns. Programs like this change, so read the current terms in Seller Central before you plan around them, and ask us whether your launch timing affects eligibility.' },

  // ── FBA, stock and systems ──
  { category: 'ops', question: 'Should we use FBA or ship Amazon orders ourselves?',
    answer: 'It depends on product size, margin and where your customers are. With FBA, Amazon stores stock in its Australian centres, picks, packs, ships and handles customer service and returns, and listings can show the Prime logo. Shipping yourself with Australia Post, StarTrack or Sendle keeps stock in your own warehouse and suits bulky or slow-moving items. Many brands use FBA for fast sellers and ship the rest themselves.' },
  { category: 'ops', question: 'Where are Amazon’s fulfilment centres in Australia?',
    answer: 'Amazon’s FBA page lists fulfilment centres in Melbourne, Sydney, Perth and Brisbane. You send stock in, and Amazon handles storage and delivery from there. The same page notes that FBA does not deliver to five remote postcodes: 2898, 2899, 4875, 6798 and 6799. If you sell into those areas, you need a second fulfilment route for those orders, which we set up as a rule rather than a manual check.' },
  { category: 'ops', question: 'Can Amazon fulfil orders from our Shopify or WooCommerce store?',
    answer: 'Yes, through Amazon Multi-Channel Fulfilment. Amazon’s Australian page says MCF fulfils orders from your own website or other marketplaces using stock already in its centres, in unbranded packaging at no extra fee. It lists Shopify, Magento and WooCommerce among supported connections, and any other site can connect through the Selling Partner API. We set the routing rules so the right orders go to Amazon and the rest to your warehouse.' },
  { category: 'ops', question: 'Can you sync Amazon with Xero or MYOB?',
    answer: 'Yes. The hard part is not the connection but the accounting. An Amazon payout is sales minus referral fees, FBA fees, ad charges and refunds, often across many orders. We record gross sales, each fee type and GST separately through a clearing account, then match the payout to the bank feed. Your bookkeeper signs off on the mapping before anything syncs, so the numbers reconcile at month end.' },
  { category: 'ops', question: 'Can you keep Amazon stock in step with Cin7, Unleashed or NetSuite?',
    answer: 'Yes. We agree first which system owns stock, usually your inventory system such as Cin7 Core, Cin7 Omni, Unleashed, NetSuite or Odoo, then feed Amazon from it with a safety buffer per product. Orders flow back so stock drops everywhere at once. The same feed can cover eBay Australia, Kogan or Bunnings Marketplace, and one sale on any of them reduces the count everywhere.' },
  { category: 'ops', question: 'What happens if another seller hijacks our listing?',
    answer: 'With Brand Registry, you can report sellers who infringe your trade mark or sell counterfeits through Amazon’s Report a Violation tool, and eligible brands can apply for Project Zero or Transparency, Amazon’s product authentication program. We document each case with the trade mark details, test buys and listing evidence Amazon asks for, then track it until it closes. Prevention matters too: tight listing control makes hijacks easier to spot.' },

  // ── Working with us ──
  { category: 'agency', question: 'Who owns the Seller Central account and the ad account?',
    answer: 'You do, always. Seller Central, the Amazon Ads account, Brand Registry and every listing stay in your company’s name. We work as added users with the permissions the job needs, and you can remove us at any time. Any integration code we write, such as a stock feed or Xero mapping, sits in a repository you own from day one, with documentation your next developer can read.' },
  { category: 'agency', question: 'Do we have to sign a long Amazon management contract?',
    answer: 'No. Set-up work, such as a catalogue rebuild, Brand Registry or a stock integration, is scoped and priced as fixed phases, each signed on its own. If you want us to keep running ads and the account month to month, that is an option you choose, priced in writing after the audit, with each change approved and no monthly minimum. Defects in anything we build are fixed inside the build price.' },
  { category: 'agency', question: 'What should our brief or RFP for an Amazon agency include?',
    answer: 'Five things help most: your catalogue size and top sellers, whether you sell on Amazon.com.au today and on which plan, how you fulfil now, the systems you run (Shopify, Xero, MYOB, Cin7 or an ERP), and what success looks like in a year. Margin targets per product beat revenue targets. Send it through the form on this page, and we reply with questions or a scoped first phase.' },
  { category: 'agency', question: 'Which size of brand do you work with?',
    answer: 'Established Australian brands and distributors with a catalogue already selling elsewhere: on their own Shopify or WooCommerce store, through wholesale, or in retail. Typical buyers are adding Amazon.com.au as a channel, fixing an account that grew messy, or connecting Amazon to stock and accounting systems. Our first phase is usually an audit and a connected catalogue, not a quick ads campaign.' },
  { category: 'agency', question: 'How do we get started?',
    answer: 'Use the form on this page with your name and work email, or attach a brief. Within 24 hours the founder, Bhavesh Barot, writes back to set up a call on your catalogue, your channels and your stack. Before you sign, we show you work on your own data, such as rewritten listings for a few top products or a stock feed running on a copy, so you can judge us on output.' },
];

/* ─── JSON-LD ────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Amazon Agency Australia',
      serviceType: 'Amazon.com.au advertising, listing optimisation, Brand Registry, FBA and Multi-Channel Fulfilment set-up, and Amazon integrations with inventory and accounting systems',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'Amazon agency for established Australian brands on Amazon.com.au: Sponsored Ads, listings and A+ Content, Brand Registry and brand protection, FBA and Multi-Channel Fulfilment, and stock, order and fee sync with Shopify, WooCommerce, Cin7, Unleashed, NetSuite, Odoo, Xero and MYOB.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: c.url,
      })),
    },
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: TITLE,
      headline: H1,
      description: DESCRIPTION,
      inLanguage: 'en-AU',
      datePublished: '2026-10-29',
      dateModified: UPDATED,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Founder & CEO',
        url: 'https://factoryjet.com/about',
        sameAs: [
          'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
          'https://github.com/factoryjet-tech',
        ],
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: FAQ_ITEMS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL, languages: { 'en-AU': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'Amazon.com.au for established Australian brands: Sponsored Ads tuned to margin, listings and Brand Registry, FBA or your own couriers, and stock and fees synced with Shopify, Cin7, Xero and MYOB. You own every account.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'amazon-agency';

/* H1 split for the Family A hero emphasis. Same string as H1 (schema headline); only the
   closing phrase is wrapped in .hero-emphasis. */
const H1_EMPHASIS = 'for Established Brands';
const H1_LEAD = H1.slice(0, H1.lastIndexOf(H1_EMPHASIS)).trimEnd();

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

/* Hero spec-panel icons (catalogue, stock sync, ownership). */
const HERO_ICONS = [
  'M4 4h16v16H4V4Zm0 5h16M9 9v11',
  'M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3M18 3v4h-4M6 21v-4h4',
  'M7 11a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm3 1 9-9m-3 3 3 3',
] as const;

/* Eight jobs we run on Amazon.com.au. */
const JOBS: { n: string; t: string; d: string; icon: string }[] = [
  { n: '01', t: 'Account audit before any spend', d: 'We read your Seller Central health, suppressed and stranded listings, search term reports, fee lines and stock age. You get a written list of what is losing money, ranked by dollars, before we touch a campaign.', icon: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-4-4' },
  { n: '02', t: 'Listings written for Australian shoppers', d: 'Titles, bullet points, backend search terms and images rewritten with Australian spelling and the terms people here type into Amazon.com.au. A listing that converts makes every ad dollar after it cheaper.', icon: 'M6 3h12v18H6V3Zm3 4h6m-6 4h6m-6 4h4' },
  { n: '03', t: 'Sponsored Ads tuned to margin', d: 'Sponsored Products, Sponsored Brands and Sponsored Display, structured by product and search intent. Bids follow what each sale is worth after the referral fee and fulfilment, not a blanket target.', icon: 'M4 19h16M7 16V9m5 7V5m5 11v-4' },
  { n: '04', t: 'Brand Registry and A+ Content', d: 'Enrolment using your Australian trade mark or a pending application, then A+ Content and a Brand Store, so your product pages look like your brand and not a reseller’s copy.', icon: 'M12 3 4 7v6c0 4 3.5 7 8 8 4.5-1 8-4 8-8V7l-8-4Z' },
  { n: '05', t: 'FBA, Multi-Channel or your own couriers', d: 'A fulfilment plan per product. FBA for fast, small sellers. Your warehouse with Australia Post, StarTrack or Sendle for bulky lines. Multi-Channel Fulfilment when Amazon should also ship your Shopify orders.', icon: 'M3 7h11v9H3V7Zm11 3h4l3 3v3h-7M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z' },
  { n: '06', t: 'One stock pool across channels', d: 'Amazon fed from the system that owns stock: Cin7, Unleashed, NetSuite, Odoo or Shopify. Orders flow back so the same unit is never sold on Amazon, eBay Australia and your own store at once.', icon: 'M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3M18 3v4h-4M6 21v-4h4' },
  { n: '07', t: 'Payouts that reconcile in Xero or MYOB', d: 'Each payout split into sales, referral fees, FBA fees, ad charges, refunds and GST, posted through a clearing account and matched to the bank feed. Your bookkeeper approves the mapping first.', icon: 'M5 3h14v18H5V3Zm3 4h8m-8 4h2m4 0h2m-8 4h2m4 0h2' },
  { n: '08', t: 'Brand protection casework', d: 'Report a Violation cases for counterfeits and trade mark misuse, with the evidence Amazon asks for, plus Project Zero or Transparency where your brand qualifies. Each case tracked until it closes.', icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-4 9 3 3 5-6' },
];

/* Six numbered project steps. Titles carry their number ("01 · Audit"). */
const STEPS: { t: string; d: string }[] = [
  { t: '01 · Scoping call and brief', d: 'A short call with the founder on your catalogue, channels, fulfilment and systems. Send a brief or RFP if you have one. You leave knowing which first phase makes sense, even if you go elsewhere.' },
  { t: '02 · Audit and a sample on your data', d: 'We audit the account, or plan a new one, and show you work on your own catalogue before you sign: rewritten listings for a few top products, or a stock feed running on a copy.' },
  { t: '03 · Fixed-price phase one', d: 'Usually the catalogue and the plumbing: listings, Brand Registry, fulfilment set-up and the stock and accounting sync. Scoped, priced and signed as one phase, with a written list of what is out of scope.' },
  { t: '04 · Build and connect', d: 'Listings rebuilt, A+ Content and Brand Store live, stock feeding Amazon from your inventory system, payouts mapping into Xero or MYOB. Tested on real orders, including a refund, before ads go live.' },
  { t: '05 · Launch ads on margin rules', d: 'Sponsored Products first, on your best listings, with bids set from each product’s margin after fees. Sponsored Brands and Display follow once search terms prove themselves.' },
  { t: '06 · Optional ongoing management', d: 'If you want us to keep running ads and the account, that is a choice, priced in writing, with each change approved and no monthly minimum. Or we train your team and step back.' },
];

/* Six checks to run on any Amazon agency, including us. */
const CHECKS: { t: string; d: string }[] = [
  { t: 'Do they report profit per product?', d: 'Ad sales and ACoS (ad cost as a share of ad sales) on their own hide what fees and fulfilment take. Ask to see a report that ends at contribution margin.' },
  { t: 'Who owns the accounts?', d: 'Seller Central, Amazon Ads and Brand Registry must be in your company’s name, with the agency added as users. Walk away from any other arrangement.' },
  { t: 'Can they touch your stock and books?', d: 'An agency that only runs ads will not fix overselling or a payout your bookkeeper cannot reconcile. Ask how they connect Amazon to Cin7, Xero or MYOB.' },
  { t: 'Do they know Amazon.com.au as well as Amazon.com?', d: 'Fees, programs and fulfilment rules differ by marketplace. Ask about Australian FBA postcodes, GST on fees and AUD reporting.' },
  { t: 'What does phase one cost, in writing?', d: 'A fixed scope with exclusions beats a vague retainer. You should know what you get in month one and what happens after.' },
  { t: 'Can you leave without losing anything?', d: 'No lock-in, documented campaigns, and integration code in your repository. If you change agency, nothing should break.' },
];

const SIBLINGS: { href: string; t: string; d: string; go: string }[] = [
  { href: '/au/ecommerce-development', t: 'Ecommerce development Australia', d: 'Stores built around one stock pool across your website, Amazon, eBay and Kogan.', go: 'Explore ecommerce →' },
  { href: '/au/shopify-development', t: 'Shopify development Australia', d: 'Shopify and Shopify Plus stores with Xero, MYOB, Afterpay and shipping connected.', go: 'Explore Shopify →' },
  { href: '/au/ecommerce-seo', t: 'Ecommerce SEO Australia', d: 'Organic search for your own store, so Amazon is one channel and not the only one.', go: 'Explore ecommerce SEO →' },
  { href: '/au/ai-agents', t: 'AI agents for Australian businesses', d: 'Agents that answer order questions and update records across your store and back office.', go: 'Explore AI agents →' },
  { href: '/au/website-maintenance', t: 'Website maintenance Australia', d: 'Support for the store and integrations after launch, with changes approved one by one.', go: 'Explore maintenance →' },
  { href: '/services/amazon-agency', t: 'Amazon agency for US brands', d: 'Our Amazon.com service for brands selling into the United States.', go: 'See the US service →' },
];

export default function AmazonAgencyAUPage() {
  return (
    <>
      <script id="ld-au-amazon-agency" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="au" logoHref="/au" />
      <div className="aiAgentPage auPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="wrap">
          {crumbs.map((item, index) => (
            <Fragment key={item.url}>
              {index > 0 && ' / '}
              {index === crumbs.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
            </Fragment>
          ))}
        </div>
      </nav>
      <main id="au-content">

        {/* ═══ HERO (copy + inline form left, spec panel right) ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Amazon Agency Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                You already sell through your own Shopify or WooCommerce store, wholesale or retail. Now Amazon.com.au
                is either a channel you have not opened or one that grew messy: listings copied by resellers, ads with no
                link to margin, stock kept in Cin7 or Unleashed that Amazon never sees, and payouts your bookkeeper
                cannot match in Xero or MYOB. FactoryJet runs the ads and listings and connects the plumbing, and every
                account stays in your name.
              </p>
              <HeroInlineForm region="au" source="au_amazon_agency_hero" submitLabel="See my listings rewritten" />
            </div>

            <form
              className="specpanel"
              aria-label="What an Amazon.com.au engagement with FactoryJet covers"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="What an Amazon.com.au engagement covers: listings and Brand Registry, stock synced from your inventory system, and accounts that stay in your name"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · AMAZON.COM.AU</span>
                <span className="sys"><span>SELLER CENTRAL</span><span>XERO · MYOB · CIN7</span></span>
              </div>
              <div className="workflow-controls">
                <label className="workflow-toggle" title="Pause or resume the animation">
                  <input type="checkbox" className="workflow-pause" aria-label="Pause animation" />
                  <svg className="pause-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="M5 3v10M11 3v10" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                  <svg className="play-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="m5 3 8 5-8 5Z" fill="currentColor" /></svg>
                </label>
                <button type="reset" className="workflow-replay" aria-label="Replay animation" title="Replay animation">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6a5 5 0 1 1 0 4M3 2v4h4" /></svg>
                </button>
              </div>
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what the engagement covers">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="amazon-au-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[0]} /></svg></span>
                  <span className="idx">titles, images, A+ and Brand Registry</span>
                  <span className="title">Listings that look like your brand</span>
                  <span className="tag">Catalogue</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="amazon-au-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[1]} /></svg></span>
                  <span className="idx">from Cin7, Unleashed, NetSuite or Shopify</span>
                  <span className="title">One stock pool, payouts in Xero or MYOB</span>
                  <span className="tag">Synced</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="amazon-au-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[2]} /></svg></span>
                  <span className="idx">Seller Central, Amazon Ads, code</span>
                  <span className="title">Every account in your company name</span>
                  <span className="tag">Yours</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · We show you work on your own catalogue before you sign.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (verified only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: 'A$49.95', t: 'a month, excluding GST, for Amazon’s Professional selling plan on Amazon.com.au', s: 'Amazon Australia, pricing', u: SRC_PRICING },
              { v: '6% to 15%', t: 'where Amazon says most referral fees sit, charged on each sale by category', s: 'Amazon Australia, pricing', u: SRC_PRICING },
              { v: '5', t: 'remote postcodes FBA does not deliver to, so those orders need a second route', s: 'Amazon Australia, FBA', u: SRC_FBA },
              { v: 'TM', t: 'a pending or registered trade mark is the entry ticket to Brand Registry', s: 'Amazon Australia, Brand Registry', u: SRC_BRAND },
            ].map((r) => (
              <div className="ledgercell" key={r.t}>
                <div className="k"><a href={r.u} {...extLink}>{r.s}</a></div>
                <div className="v">
                  <strong className={/\d/.test(r.v) ? 'ledger-number' : 'ledger-word'}>{r.v}</strong>
                  {r.t}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap byline">
          <div className="av">BB</div>
          <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
          <div className="upd">Last updated<br />29 October 2026</div>
        </div>

        {/* ═══ ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What does an Amazon agency do for an Australian brand?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">An Amazon agency runs the parts of Amazon.com.au that decide whether you profit there.</span>{' '}
                    That means Sponsored Ads, listing copy and images, Brand Registry, A+ Content and account health.
                    For an established Australian brand it should also mean connecting Amazon to the stock system and
                    accounting software you already run, so a sale on Amazon updates Cin7 and lands correctly in Xero
                    or MYOB.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Four terms we use a lot</div>
                    <p>
                      <b>Seller Central</b> is the account where you list and manage products on Amazon.com.au.{' '}
                      <b>FBA</b> (Fulfilment by Amazon) means Amazon stores your stock and ships the orders.{' '}
                      <b>Referral fee</b> is the share of each sale Amazon keeps. <b>Brand Registry</b> is Amazon’s
                      program that gives trade mark owners control of their listings and extra tools.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    Most Amazon agencies sell ad management. The brands that call us usually have a second problem
                    the ads cannot fix: stock that oversells because Amazon is updated by hand, or a payout made of
                    sales, fees, refunds and GST that nobody can reconcile. We do both halves, because ads on a
                    channel your back office cannot see cost more than they earn.
                  </p>
                </div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Search demand, Australia</div>
                <ul className="trigrows">
                  <li><span className="m">amazon seller central australia</span><span className="t">1,300 a month</span></li>
                  <li><span className="m">amazon fba australia</span><span className="t">480 a month</span></li>
                  <li><span className="m">sell on amazon australia</span><span className="t">390 a month</span></li>
                  <li><span className="m">amazon advertising australia</span><span className="t">260 a month</span></li>
                  <li><span className="m">amazon vendor central australia</span><span className="t">70 a month</span></li>
                </ul>
                <p className="au-note">
                  Source: DataForSEO, Google Ads search volume, Australia, read 29 October 2026. Far more Australians
                  search for how Amazon works than for an agency, which is why this page answers those questions first.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ LISTICLE: WHAT WE RUN → capgrid ═══ */}
        <section className="section capabilities" id="what-we-run">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Amazon.com.au, itemised</div>
              <h2>Eight jobs we run on Amazon.com.au for Australian brands</h2>
              <p className="lead">
                Half of this list is marketing and half is plumbing. An agency that only does the first half leaves
                you with ads pointing at stock your systems cannot see.
              </p>
            </div>
            <div className="capgrid">
              {JOBS.map((s, i) => (
                <div key={s.n} className={`cap cap-${i + 1}`}>
                  <div className="caphead"><span className="capid">CAP‑{s.n}</span><svg {...CAP_ICON}><path d={s.icon} /></svg></div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FULFILMENT COMPARISON → table ═══ */}
        <section className="section comparison" id="fulfilment">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">FBA or your own couriers</div>
              <div>
                <h2>FBA, Multi-Channel Fulfilment or shipping it yourself</h2>
                <p className="lead">
                  The fulfilment choice changes your fees, your delivery promise and which system has to know about
                  stock. Here is how the three options compare on what Amazon’s Australian pages say today.
                </p>
              </div>
            </div>
            <div className="tablewrap" role="region" tabIndex={0} aria-label="amazon fulfilment comparison">
              <table>
                <thead>
                  <tr>
                    <th>What matters</th>
                    <th className="fj">FBA</th>
                    <th>Multi-Channel Fulfilment</th>
                    <th>Your warehouse and couriers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Which orders</th><td className="fj">Amazon.com.au orders</td><td>Orders from your own site and other marketplaces</td><td>Any channel you route to it</td></tr>
                  <tr><th scope="row">Who picks, packs and ships</th><td className="fj">Amazon</td><td>Amazon</td><td>You, with Australia Post, StarTrack or Sendle</td></tr>
                  <tr><th scope="row">Packaging</th><td className="fj">Amazon’s</td><td>Unbranded by default, no extra fee</td><td>Yours</td></tr>
                  <tr><th scope="row">Prime shipping logo</th><td className="fj">FBA listings eligible</td><td>Not an Amazon listing</td><td>Check Amazon’s current programs</td></tr>
                  <tr><th scope="row">Storage cost</th><td className="fj">By cubic metre, plus long-term fees after 365 days</td><td>Same stock pool as FBA</td><td>Your own warehouse cost</td></tr>
                  <tr><th scope="row">Remote postcodes 2898, 2899, 4875, 6798, 6799</th><td className="fj">Not serviced</td><td>Not serviced (Amazon gave notice it would stop)</td><td>Your carrier’s coverage</td></tr>
                  <tr><th scope="row">Connects to</th><td className="fj">Seller Central</td><td>Shopify, Magento, WooCommerce, or the Selling Partner API</td><td>Your inventory and shipping apps</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              From <a href={SRC_FBA} {...extLink}>Amazon Australia, Fulfilment by Amazon</a> and{' '}
              <a href={SRC_MCF} {...extLink}>Amazon Australia, Multi-Channel Fulfilment</a>, read 29 October 2026.
              Fees are per unit by size and weight; read the live pages before you plan.
            </p>
            <div className="au-split">
              <div>
                <h3>What we usually recommend</h3>
                <p>
                  FBA for small, fast-moving products where the Prime logo lifts conversion. Your own warehouse for
                  bulky, heavy or slow lines, where long-term storage fees would eat the margin. A routing rule for
                  the five remote postcodes, so those orders go to your own courier without anyone checking by hand.
                </p>
              </div>
              <div>
                <h3>When Multi-Channel Fulfilment earns its place</h3>
                <p>
                  If most of your Amazon stock already sits with Amazon, MCF lets the same units ship your Shopify or
                  WooCommerce orders in plain packaging. It removes a second stock pool. It also means your inventory
                  system must know which units sit with Amazon, which is the integration we build.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PROCESS → numbered timeline ═══ */}
        <section className="section process" id="how-a-project-runs">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How a project runs</div>
                <h2>From first call to profitable Amazon.com.au sales, in six steps</h2>
                <p className="lead">
                  Open each step to see what happens and what you do. Ads come fifth on purpose: they work better on
                  listings and stock that are already right.
                </p>
              </div>
              <VisualSlot page={PAGE_KEY} slot="process" kind="photo" ratio="3:2" captionClassName="figcap" src={null}
                subject="An online store team member handing courier satchels to a driver loading a van outside their warehouse"
                caption="Bulky or slow lines often ship best from your own warehouse. We set the routing so each order takes the cheaper path.">
                <img src="/images/au/visual-pass-2026-10-03/shopify-development/dispatch-1200.webp" srcSet="/images/au/visual-pass-2026-10-03/shopify-development/dispatch-640.webp 640w, /images/au/visual-pass-2026-10-03/shopify-development/dispatch-1200.webp 1200w" sizes="(max-width: 820px) calc(100vw - 40px), 560px" width={1200} height={800} loading="lazy" decoding="async" alt="Courier satchels being loaded into a white van at a seller's own warehouse, for orders that skip FBA" />
              </VisualSlot>
            </div>
            <div className="timeline">
              {STEPS.map((s) => {
                const [idx, title] = s.t.split(' · ');
                return (
                  <details key={s.t} className="tnode">
                    <summary>
                      <div className="idx">{idx}</div>
                      <h3>{title}<span className="chev" aria-hidden="true">+</span></h3>
                    </summary>
                    <p>{s.d}</p>
                  </details>
                );
              })}
            </div>
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline={'Want to see your Amazon listings rewritten first?'}
            sub={'Tell us your top products and the systems you run. Before you sign anything, we show you rewritten listings for a few of them, or a stock feed running on a copy of your catalogue.'}
            label={'See my listings rewritten'}
          />
        </div>

        {/* ═══ INTEGRATIONS → definition module ═══ */}
        <section className="section facts" id="integrations">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Stock, orders and books</div>
              <h2>Connecting Amazon.com.au to the systems Australian brands run</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  The first decision is ownership. One system owns stock, usually Cin7 Core, Cin7 Omni, Unleashed,
                  NetSuite, Odoo or Shopify itself. Amazon reads from it, with a buffer per product so a sync delay
                  never oversells. Orders flow back, so stock drops on your website, on eBay Australia, Kogan or
                  Bunnings Marketplace at the same moment.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  The second is money. An Amazon payout nets sales against referral fees, FBA fees, ad charges and
                  refunds. Amazon states its fees in AUD and excluding GST, so we post each fee type and its GST to
                  its own account in Xero, MYOB Business, MYOB Acumatica or QuickBooks Online through a clearing
                  account, then match the deposit to the bank feed. Your bookkeeper approves the chart of accounts
                  mapping before the first sync.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  The third is your own store. If you run Shopify or WooCommerce, Amazon’s Multi-Channel Fulfilment
                  can ship those orders from FBA stock, and Afterpay, Zip and Stripe stay on your own checkout. Our{' '}
                  <a href="/au/ecommerce-development">ecommerce development team in Australia</a> builds the store
                  side; this page covers the Amazon side.
                </p></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Systems we connect Amazon to</div>
                <ul className="trigrows">
                  <li><span className="m">Inventory</span><span className="t">Cin7 · Unleashed · NetSuite · Odoo</span></li>
                  <li><span className="m">Accounting</span><span className="t">Xero · MYOB · QuickBooks Online</span></li>
                  <li><span className="m">Own store</span><span className="t">Shopify · WooCommerce</span></li>
                  <li><span className="m">Other marketplaces</span><span className="t">eBay AU · Kogan · Bunnings</span></li>
                  <li><span className="m">Couriers</span><span className="t">Australia Post · StarTrack · Sendle</span></li>
                </ul>
                <p className="au-note">
                  Integration code we write sits in a repository you own, with documentation for your next developer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ HOUSE TERMS → ruled rows ═══ */}
        <section className="section platforms" id="terms">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">How we work</div>
                <h2>Terms for an Amazon engagement</h2>
              </div>
              <p>
                These are the same terms we use on every FactoryJet project. They are written so you can compare
                them line by line with any other Amazon agency quote.
              </p>
            </div>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Work on your data before you sign</h3></div><p className="plat-build">Rewritten listings for a few top products, or a stock feed running on a copy of your catalogue. You judge the output, not a pitch deck.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Fixed price per phase</h3></div><p className="plat-build">Each phase is scoped, priced and signed on its own, with written exclusions. No phase starts until you approve it.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>You own every account and the code</h3></div><p className="plat-build">Seller Central, Amazon Ads, Brand Registry and the integration repository stay in your company name from day one. Hosting for any integration can run in your own cloud account, at cost, with no markup.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">04</span><div className="plat-name"><h3>Defects fixed inside the build price</h3></div><p className="plat-build">For a cover period agreed before work starts, anything we built that breaks is ours to fix.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">05</span><div className="plat-name"><h3>Ongoing management is optional</h3></div><p className="plat-build">If you want us to keep running ads and the account, it is priced in writing, each change is approved, and there is no monthly minimum.</p></div>
            </div>
          </div>
        </section>

        {/* ═══ BRIEF / RFP ASK → facts + panel ═══ */}
        <section className="section facts" id="brief">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Send us your brief</div>
              <h2>Running an Amazon agency RFP? Send it to us</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  If you are comparing Amazon agencies, a written brief gets you better answers from all of them.
                  Ours come back with questions first, then a scoped first phase with a fixed price, a timeline and a
                  list of what is excluded.
                </p></div>
                <div className="fact"><div className="sec">§02</div><div>
                  <p>
                    No brief yet? The five points in the panel are enough. Margin per product helps more than a
                    revenue goal, because it tells us what each ad click can afford.
                  </p>
                  <ModalCTAButton label="Send my Amazon brief" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
                </div></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">What a useful brief includes</div>
                <ul className="trigrows">
                  <li><span className="m">Catalogue size and top sellers</span><span className="t">SKUs</span></li>
                  <li><span className="m">Amazon.com.au today, and which plan</span><span className="t">Status</span></li>
                  <li><span className="m">How you fulfil now</span><span className="t">FBA or own</span></li>
                  <li><span className="m">Systems: store, stock, accounting</span><span className="t">Stack</span></li>
                  <li><span className="m">Margin targets per product</span><span className="t">Goal</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ COST → ruled rows + split ═══ */}
        <section className="section platforms" id="cost">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Cost, from sources you can check</div>
                <h2>What Amazon charges, and what Australian agencies charge</h2>
              </div>
              <p>
                Two bills arrive when you sell on Amazon.com.au: Amazon’s fees and the agency’s. Here are both, from
                sources we read on 29 October 2026, so you can compare quotes on the same footing.
              </p>
            </div>
            <div className="au-split">
              <div className="au-panel">
                <div className="eyebrow">What Amazon charges (AUD, excluding GST)</div>
                <ul className="trigrows">
                  <li><span className="m">Professional plan</span><span className="t">A$49.95 a month</span></li>
                  <li><span className="m">Individual plan</span><span className="t">A$0.99 per unit sold</span></li>
                  <li><span className="m">Referral fee, most categories</span><span className="t">6% to 15%</span></li>
                  <li><span className="m">FBA fulfilment and storage</span><span className="t">By size, weight, volume</span></li>
                  <li><span className="m">Sponsored Products</span><span className="t">Per click, no monthly fee</span></li>
                </ul>
                <p className="au-note">
                  Sources: <a href={SRC_PRICING} {...extLink}>Amazon Australia pricing</a> and{' '}
                  <a href={SRC_ADS} {...extLink}>Amazon Ads, Sponsored Products</a>.
                </p>
              </div>
              <div className="au-panel">
                <div className="eyebrow">What Amazon PPC agencies charge (market range)</div>
                <ul className="trigrows">
                  <li><span className="m">Small sellers</span><span className="t">$1,000 to $3,000 a month</span></li>
                  <li><span className="m">Medium to large businesses</span><span className="t">$3,000 to $6,000 a month</span></li>
                  <li><span className="m">High-volume brands</span><span className="t">$6,000 to $10,000+ a month</span></li>
                </ul>
                <p className="au-note">
                  Source: <a href={SRC_RANGE} {...extLink}>eStore Factory, Amazon PPC agency in Australia</a>, 16 October
                  2026. eStore Factory is an Amazon agency with an office in Niddrie, Victoria. The guide quotes dollars without naming
                  the currency and does not say whether GST or ad spend is included. FactoryJet quotes a fixed price in writing after a short scoping call.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ CHECKLIST → ruled rows ═══ */}
        <section className="section platforms" id="checklist">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Before you hire anyone</div>
                <h2>Six questions to ask any Amazon agency in Australia</h2>
              </div>
              <p>
                Use these on every agency you talk to, us included. A good agency answers each one in a sentence.
              </p>
            </div>
            <div className="platlist" role="list">
              {CHECKS.map((c, i) => (
                <div key={c.t} className="plat plat-2col" role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{c.t}</h3></div>
                  <p className="plat-build">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SIBLING SERVICES → agentdir ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Related FactoryJet services</div>
              <h2>Beyond Amazon.com.au</h2>
            </div>
            <ul className="agentdir-grid">
              {SIBLINGS.map((s) => (
                <li key={s.href}>
                  <a href={s.href}>
                    <span className="agentdir-t">{s.t}</span>
                    <span className="agentdir-l">{s.d}</span>
                    <span className="agentdir-more">{s.go}</span>
                    <span className="agentdir-go" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ FAQ (same FAQ_ITEMS array as the FAQPage JSON-LD) ═══ */}
        <AuFaq
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          heading="Amazon Australia questions Australian brands ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ SOURCES → references ═══ */}
        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">Sources</div>
            <div className="refs">
              <a href={SRC_PRICING} {...extLink}>Amazon Australia seller pricing</a>
              <a href={SRC_FBA} {...extLink}>Amazon Australia, Fulfilment by Amazon</a>
              <a href={SRC_MCF} {...extLink}>Amazon Australia, Multi-Channel Fulfilment</a>
              <a href={SRC_BRAND} {...extLink}>Amazon Australia, Brand Registry</a>
              <a href={SRC_ADS} {...extLink}>Amazon Ads, Sponsored Products</a>
              <a href={SRC_RANGE} {...extLink}>eStore Factory, Amazon PPC agency cost in Australia</a>
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>Make Amazon.com.au a channel your back office can see</h2>
              <p>
                Leave your name and work email. Within 24 hours the founder writes back to arrange a call on your
                products, your channels and the systems you run. No spam, no obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="See my listings rewritten" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/ecommerce-development">See ecommerce development</a>
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}
