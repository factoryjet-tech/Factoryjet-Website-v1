import type { Metadata } from 'next';
import styles from './visual-qa.module.css';
import { Fragment } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import AuFaq from '../components/AuFaq';
import VisualSlot from '../components/VisualSlot';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';
import '../au-city.css';

/* /au/sydney, built 2026-10-11 on the /au/melbourne template (same components, props and
   schema pattern). Melbourne keeps its page data and FAQ data in two sibling modules; this
   page was briefed as ONE source file, so both live here as module consts. Each is read by
   the visible render AND by the JSON-LD block, so the two cannot drift.

   Primary terms (DataForSEO, Google Australia, location_code 2036):
   fetched 2026-10-11: ecommerce website development sydney 390 · ecommerce agency sydney 110 ·
   ai consultant sydney 110 · woocommerce developer sydney 90 · shopify developers sydney 50 ·
   shopify expert sydney 40 · magento developer sydney 40 · ai agency sydney 40.
   fetched 2026-09-24: website design sydney 2,400 · web design sydney 1,000 · sydney web designer 880.

   Every third-party fact on this page was read on its owner’s page on 2026-10-11. */
const UPDATED = '2026-10-31';
const TITLE = 'Ecommerce Website Development & Web Design Sydney | FactoryJet';
const H1 = 'Ecommerce website development and web design in Sydney';
const DESCRIPTION =
  'Ecommerce website development, Shopify builds, web design and AI consulting for Sydney businesses. Fixed quotes and a demo before you sign. You own everything.';

const CANONICAL = 'https://factoryjet.com/au/sydney';

/* Single source for the visible breadcrumb trail and for BreadcrumbList JSON-LD. */
const CRUMBS = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Sydney', url: CANONICAL },
];

interface Citation {
  id: number;
  source: string;
  title: string;
  url: string;
  /** What this source says. Read on the source page on 2026-10-11. */
  claim: string;
}

/* External citations. Each URL was opened on 2026-10-11 (curl with a browser user agent, or
   the built-in browser where the site refused curl: ATO, ACCC, National AI Centre) and the
   claim text read out of the page. */
const CITATIONS: Citation[] = [
  {
    id: 1,
    source: 'Australian Bureau of Statistics',
    title: 'Counts of Australian Businesses, including Entries and Exits, July 2022 to June 2026',
    url: 'https://www.abs.gov.au/statistics/economy/business-indicators/counts-australian-businesses-including-entries-and-exits/latest-release',
    claim:
      '2,814,778 actively trading businesses in Australia at 30 June 2026. New South Wales added 26,057 in 2025-26, the largest net increase of any state or territory. Retail trade businesses rose 0.1 per cent; transport, postal and warehousing rose 4.9 per cent.',
  },
  {
    id: 2,
    source: 'Australian Bureau of Statistics',
    title: 'Regional population, 2024-25 financial year',
    url: 'https://www.abs.gov.au/statistics/people/population/regional-population/latest-release',
    claim:
      'Greater Sydney had 5,638,830 residents at 30 June 2025. The Box Hill, Marsden Park and Austral areas added most people. The centre of population was in Rosehill, near the Parramatta River, and moved 80 metres west.',
  },
  {
    id: 3,
    source: 'City of Sydney',
    title: 'Floor space and employment survey 2022',
    url: 'https://www.cityofsydney.nsw.gov.au/research-reports/floor-space-employment-survey-2022',
    claim:
      '21,618 business establishments and 519,839 jobs in the local area. Businesses with 1 to 19 jobs were 80.7 per cent of the total. Retail and personal services lost 307 businesses between 2017 and 2022, and shop and showroom floor space passed one million square metres.',
  },
  {
    id: 4,
    source: 'City of Sydney',
    title: 'The city at a glance',
    url: 'https://www.cityofsydney.nsw.gov.au/guides/city-at-a-glance',
    claim:
      'Lists the 33 suburbs in the council area. Around 2.1 million Greater Sydney residents spoke a language other than English at home in 2022, led by Mandarin, Arabic, Cantonese, Vietnamese and Hindi.',
  },
  {
    id: 5,
    source: 'NSW Government',
    title: 'NSW Government to unleash the full potential of Tech Central (13 December 2024)',
    url: 'https://www.nsw.gov.au/ministerial-releases/nsw-government-to-unleash-full-potential-of-tech-central',
    claim:
      'Tech Central is a six square kilometre precinct bordered by Haymarket, Camperdown and South Eveleigh, with the highest concentration of technology businesses anywhere in Australia.',
  },
  {
    id: 6,
    source: 'Australian Taxation Office',
    title: 'Registering for GST',
    url: 'https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/registering-for-gst',
    claim:
      'Register for GST when GST turnover is $75,000 or more, within 21 days of being required to. You need an ABN first.',
  },
  {
    id: 7,
    source: 'NSW Fair Trading',
    title: 'Receipts and warranties: information for businesses',
    url: 'https://www.nsw.gov.au/business-and-economy/running-a-business/selling-goods-and-services/receipts-and-warranties',
    claim:
      'Proof of transaction is required for goods or services valued at $75 (excluding GST) or more. It states the supplier, the ABN or ACN, the date, the goods or services and the price. A digital receipt is one accepted form.',
  },
  {
    id: 8,
    source: 'NSW Fair Trading',
    title: 'Consumer guarantees: information for businesses',
    url: 'https://www.nsw.gov.au/business-and-economy/running-a-business/selling-goods-and-services/consumer-guarantees',
    claim:
      'Businesses must comply with the consumer guarantees under the Australian Consumer Law, which apply regardless of any other warranties or guarantees in place.',
  },
  {
    id: 9,
    source: 'Australian Competition and Consumer Commission',
    title: 'Selling online',
    url: 'https://www.accc.gov.au/business/selling-products-and-services/selling-online',
    claim:
      'All the usual consumer rights apply online. A business must not make false or misleading claims on its own website, on social media or on other platforms, including in what it does with product reviews.',
  },
  {
    id: 10,
    source: 'Office of the Australian Information Commissioner',
    title: 'Small business',
    url: 'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business',
    claim:
      'Most businesses with annual turnover of $3 million or less are not covered by the Privacy Act 1988. Some are regardless of turnover, including health service providers and businesses trading in personal information.',
  },
  {
    id: 11,
    source: 'business.gov.au',
    title: 'Register for an Australian business number (ABN)',
    url: 'https://business.gov.au/registrations/register-for-an-australian-business-number-abn',
    claim:
      'Registering for an ABN is free. To get one you need to be running a business or other enterprise. An ABN lets you claim GST credits and get a .au domain name.',
  },
  {
    id: 12,
    source: 'Service NSW',
    title: 'About Small Business Advisory',
    url: 'https://www.service.nsw.gov.au/common-questions/small-business-advisory',
    claim:
      'Small Business Advisory, offered through the Service NSW Business Bureau, gives eligible customers up to 4 hours of free one-on-one advice from independent advisors each financial year.',
  },
  {
    id: 13,
    source: 'Google Search Central',
    title: 'Understanding Core Web Vitals and Google search results',
    url: 'https://developers.google.com/search/docs/appearance/core-web-vitals',
    claim:
      'The three Core Web Vitals marks: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1.',
  },
  {
    id: 14,
    source: 'Google Business Profile Help',
    title: 'Tips to improve your local ranking on Google',
    url: 'https://support.google.com/business/answer/7091?hl=en',
    claim:
      'Local results are mainly based on relevance, distance and popularity. There is no way to request or pay for a better local ranking.',
  },
  {
    id: 15,
    source: 'Adobe',
    title: 'Adobe Commerce released versions (last updated 12 August 2026)',
    url: 'https://experienceleague.adobe.com/en/docs/commerce-operations/release/versions',
    claim:
      'Adobe Commerce 2.4.9 was released on 12 May 2026 with regular support until 31 May 2029. Regular support ends on 31 May 2028 for the 2.4.8 line and on 31 May 2027 for the 2.4.7 line.',
  },
  {
    id: 16,
    source: 'WooCommerce',
    title: 'WooCommerce features',
    url: 'https://woocommerce.com/woocommerce-features/',
    claim:
      'WooCommerce describes itself as built on WordPress and open source, “which means you have complete ownership of your store”.',
  },
  {
    id: 17,
    source: 'Shopify',
    title: 'Shopify home page',
    url: 'https://www.shopify.com/au',
    claim:
      'Shopify describes itself as a commerce platform for selling “online and in person”, with payments, fulfilment and retail run from one place.',
  },
  {
    id: 18,
    source: 'Shopify',
    title: 'Shopify Partner Directory: Australia',
    url: 'https://www.shopify.com/partners/directory/locations/australia',
    claim:
      '249 partners listed for Australia on 11 October 2026. Partners are tiered on factors including experience and proven success on Shopify.',
  },
  {
    id: 19,
    source: 'National AI Centre',
    title: 'Guidance for AI adoption: implementation guidance',
    url: 'https://www.ai.gov.au/staying-safe-and-responsible/essential-ai-practices/guidance-ai-adoption-implementation-guidance',
    claim:
      'Six essential practices: decide who is accountable, understand impacts and plan accordingly, measure and manage risks, share essential information, test and monitor, and maintain human control.',
  },
  {
    id: 20,
    source: 'Keen to Design',
    title: 'How much does a website cost in Sydney and Australia? (updated April 2026)',
    url: 'https://www.keentodesign.com.au/web-design-cost/',
    claim:
      'Market ranges published by a Sydney agency: $3,500 to $7,000 for a small business website of 5 to 8 pages, $7,000 to $15,000 for a mid-range custom WordPress site, and $8,000 to $25,000 or more for an ecommerce website.',
  },
];

const [
  SRC_ABS, SRC_POP, SRC_FES, SRC_GLANCE, SRC_TECH, SRC_ATO, SRC_RECEIPTS, SRC_GUARANTEES, SRC_ACCC, SRC_OAIC,
  SRC_ABN, SRC_BUREAU, SRC_CWV, SRC_LOCAL, SRC_ADOBE, SRC_WOO, SRC_SHOPIFY, SRC_PARTNERS, SRC_AI, SRC_KEEN,
] = CITATIONS;

/* Suburbs named on the page, also read into JSON-LD areaServed. Every name appears in a source
   above: the City of Sydney suburb list, the ABS regional population release, or the NSW
   Government Tech Central release. Place names only: no street address and no coordinates. */
const SERVICE_AREAS = [
  'Sydney CBD',
  'Barangaroo',
  'Pyrmont',
  'Surry Hills',
  'Redfern',
  'Alexandria',
  'Haymarket',
  'Ultimo',
  'Camperdown',
  'Eveleigh',
  'Rosehill',
  'Box Hill',
  'Marsden Park',
  'Austral',
];

/* ─── Sydney search demand (DataForSEO, Google Australia) ─── */
const DEMAND = [
  { kw: 'website design sydney', v: '2,400', w: '100%', note: 'Close variants share this count' },
  { kw: 'web design sydney', v: '1,000', w: '42%', note: 'Maps pack shown, no AI Overview' },
  { kw: 'sydney web designer', v: '880', w: '37%', note: 'Looking for a person, not a firm' },
  { kw: 'ecommerce website development sydney', v: '390', w: '16%', note: 'AI Overview shown, no Maps pack' },
  { kw: 'ecommerce agency sydney', v: '110', w: '5%', note: 'Maps pack shown, no AI Overview' },
  { kw: 'ai consultant sydney', v: '110', w: '5%', note: 'AI Overview and Maps pack' },
  { kw: 'woocommerce developer sydney', v: '90', w: '4%', note: 'AI Overview shown, no Maps pack' },
  { kw: 'shopify developers sydney', v: '50', w: '2%', note: 'AI Overview shown, no Maps pack' },
  { kw: 'magento developer sydney', v: '40', w: '2%', note: 'AI Overview shown, no Maps pack' },
];

/* ─── All tracked searches naming each city (market-au-2026-09-24/analysis.json "cities") ─── */
const CITIES = [
  { city: 'Sydney', total: '10,430', seo: '7,270', web: '2,640', ecom: '310', ai: '200', href: '' },
  { city: 'Melbourne', total: '10,330', seo: '6,630', web: '2,920', ecom: '430', ai: '240', href: '/au/melbourne' },
  { city: 'Perth', total: '7,900', seo: '4,940', web: '2,670', ecom: '240', ai: '40', href: '' },
  { city: 'Brisbane', total: '5,490', seo: '4,000', web: '1,380', ecom: '100', ai: 'under 10', href: '/au/brisbane' },
  { city: 'Adelaide', total: '3,780', seo: '2,970', web: '800', ecom: '10', ai: 'under 10', href: '/au/adelaide' },
  { city: 'Canberra', total: '2,200', seo: '1,250', web: '950', ecom: 'under 10', ai: 'under 10', href: '/au/canberra' },
];

/* ─── Five symptoms (rendered as <details>) ─── */
const DIAGNOSIS: { symptom: string; likely: string; fix: string }[] = [
  { symptom: 'Visitors arrive and few of them buy',
    likely: 'Usually a checkout problem. Shoppers leave when the delivery cost, the delivery time or the returns policy shows up late.',
    fix: 'Put delivery cost and timing on the product page, cut the checkout to the fields you need, and place a real order on a phone before changing anything else.' },
  { symptom: 'Orders are retyped into Xero or MYOB by hand',
    likely: 'An integration gap. The store and the accounts were set up at different times and never connected.',
    fix: 'Send orders, refunds, payouts and GST to the accounting file through its official connection, then reconcile one full week by hand to prove the numbers agree.' },
  { symptom: 'You sell stock you do not have',
    likely: 'Stock is counted in two places, such as the store and a spreadsheet, a point of sale system or a marketplace.',
    fix: 'Pick one system to own the stock count and make every other channel read from it. That is a decision first and a build second.' },
  { symptom: 'The store is slow on a phone',
    likely: 'Oversized images, plus a pile of apps that each add a script to every page.',
    fix: 'Measure against the marks Google publishes, remove the apps nobody uses, and compress the images that load first.' },
  { symptom: 'Google and AI answers do not show the store',
    likely: 'Category and product pages that say little, or pages Google has not indexed.',
    fix: 'Fix indexing first using Search Console. Then write category pages that answer what buyers ask, with sizes, delivery and returns in plain text.' },
];

/* ─── Who we build for in Sydney. Every "where" line is a figure or place read on a primary
       source on 2026-10-11 (CITATIONS 2, 3, 4, 5). The notes are FactoryJet’s own view. ─── */
const SECTORS = [
  { name: 'Online stores and retail brands', where: 'City of Sydney: shop and showroom floor space passed 1 million m² in 2022',
    note: 'Retail and personal services lost 307 businesses in the council area between 2017 and 2022 while shop floor space grew. The stores that remain need the website to carry more of the selling, with live stock and the delivery cost shown up front.' },
  { name: 'Finance and professional services', where: 'City of Sydney: 125,002 finance jobs and 94,157 in professional and business services (2022)',
    note: 'Long decision cycles, and buyers who read several pages before they call. Named people and proof of past work do more here than a quick contact form.' },
  { name: 'Technology companies and startups', where: 'Tech Central: six square kilometres bordered by Haymarket, Camperdown and South Eveleigh',
    note: 'The NSW Government says this precinct has the highest concentration of technology businesses in Australia. These buyers judge a site on speed and documentation, and often want an AI agent connected to the product or the support desk.' },
  { name: 'Cafes, restaurants and food businesses', where: 'City of Sydney: food and drink is 16.3 per cent of all businesses',
    note: 'Found in Maps and on phones, usually by someone nearby. Opening hours and the menu as text come before anything else, and online orders have to reach the kitchen without retyping.' },
  { name: 'Trades and home services', where: 'The Box Hill, Marsden Park and Austral areas: the three that added most people in Sydney in 2024–25 (ABS)',
    note: 'Growing suburbs mean new homes and steady work for electricians and plumbers. Buyers search from a job address on a phone, so the suburbs you cover and a call button belong in the first screen.' },
  { name: 'Businesses serving multilingual customers', where: 'Greater Sydney: about 2.1 million residents spoke a language other than English at home in 2022',
    note: 'The City of Sydney lists Mandarin, Arabic, Cantonese, Vietnamese and Hindi as the top five. Key pages translated by a person, and marked up so Google serves the right version, are worth pricing before any redesign.' },
];

/* ─── How we build (ecommerce) ─── */
const BUILD: { t: string; d: string }[] = [
  { t: 'One system that owns stock and price', d: 'Before any design we agree which system owns stock and price: the store, the point of sale, or an ERP such as Odoo or NetSuite. Every other channel reads from it. Overselling and wrong prices usually trace back to two systems that each believe they are in charge.' },
  { t: 'GST, receipts and returns built to the published rules', d: 'The ATO requires GST registration once GST turnover reaches $75,000. NSW Fair Trading requires proof of transaction for anything of $75 or more, showing your ABN or ACN, the date, the goods and the price. We build both into the checkout, the order email and the returns page.' },
  { t: 'A checkout tested with real orders on a phone', d: 'Card payments, PayPal, Apple Pay and Google Pay, with buy now, pay later options where you want them. Each one gets a real order, a real refund and a check that the payout matches the accounts before launch.' },
  { t: 'Product pages that answer before they sell', d: 'Sizes, materials, delivery cost, delivery time and returns sit in plain text on the page, with structured data so Google and AI assistants can read the price and the stock. An AI Overview can only quote what is written down.' },
  { t: 'Speed measured against Google’s marks', d: 'Google publishes them: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1. You get the before and after measurement for the home, category, product and checkout pages.' },
  { t: 'Handed over in your name', d: 'The domain, the store, the payment accounts and every admin login sit in your name from the first day. You own what we build. If you change supplier later, the store carries on without us.' },
];

/* ─── What goes on a small business site first (web design) ─── */
const BASICS: { t: string; d: string }[] = [
  { t: 'What you do, in the first screen', d: 'One sentence a stranger understands, the suburbs you cover, and one way to act. Internal job titles and slogans come out.' },
  { t: 'One page per service, named the way buyers search', d: 'We check search volume for Australia before naming a page. A phrase nobody searches does not get one, however good it sounds in a meeting.' },
  { t: 'The phone view, designed first', d: 'Readable text, buttons a thumb can hit, a short form, and nothing that pushes the page sideways. The desktop version follows from it.' },
  { t: 'A second language where your customers use one', d: 'The City of Sydney reports that about 2.1 million Greater Sydney residents spoke a language other than English at home in 2022, led by Mandarin, Arabic, Cantonese, Vietnamese and Hindi. Where that is your customer base, we plan translated key pages written by a person.' },
  { t: 'Your Google Business Profile, set up once', d: 'Seven of the twelve Sydney searches we checked on 11 October 2026 showed a Maps pack. Google says local results are mainly based on relevance, distance and popularity, and that nobody can pay for a better position. We claim and verify your profile and set its category as part of the build.' },
  { t: 'The free advice you are already entitled to', d: 'Service NSW’s Business Bureau offers eligible NSW small businesses up to 4 hours of free one-on-one advice from an independent adviser each financial year. Use it before you sign a website contract with anyone, including us.' },
];

/* ─── Six rules for a Sydney online store (rendered as a numbered list) ─── */
const RULES: { t: string; d: string; src: Citation }[] = [
  { t: 'Get an ABN before anything else', d: 'business.gov.au says registration is free through the Australian Business Register, and that an ABN lets you register a .au domain name.', src: SRC_ABN },
  { t: 'Register for GST when turnover reaches $75,000', d: 'The ATO says you must register once GST turnover is $75,000 or more, within 21 days of being required to. If you are close, it says to check each month.', src: SRC_ATO },
  { t: 'Put your ABN on every order confirmation', d: 'NSW Fair Trading requires proof of transaction for goods or services of $75 or more, excluding GST. It must show the supplier, the ABN or ACN, the date, the goods and the price. A digital receipt counts.', src: SRC_RECEIPTS },
  { t: 'Honour the consumer guarantees on top of any warranty', d: 'Businesses selling in NSW must meet the consumer guarantees under the Australian Consumer Law, and they apply regardless of any other warranty you offer.', src: SRC_GUARANTEES },
  { t: 'Keep claims and reviews truthful', d: 'The ACCC says an online business must not make false or misleading claims on its own website, on social media or on other platforms, and that the same rules cover what it does with product reviews.', src: SRC_ACCC },
  { t: 'Check whether the Privacy Act covers you', d: 'The OAIC says most businesses with annual turnover of $3 million or less are not covered, but some are whatever their turnover, including health service providers and businesses that trade in personal information.', src: SRC_OAIC },
];

/* ─── Process (rendered as <details>) ─── */
const STEPS: { n: string; t: string; d: string; out: string }[] = [
  { n: '01', t: 'Free review of your store or site', d: 'Send the address. We read the site the way Google does, walk through the checkout on a phone, and look at your Search Console data if you share it.', out: 'A short written note on the biggest problems and what each one is costing you.' },
  { n: '02', t: 'A working demo before you sign', d: 'Where it helps you decide, we show working software on your own data before any contract: a draft theme in your own store, or an agent run against your own documents.', out: 'Something you can click, in place of a slide deck.' },
  { n: '03', t: 'A written scope with a fixed price', d: 'Pages, products, integrations, who supplies what, and the date. FactoryJet quotes the build, and any support you choose, as fixed prices in writing after a short scoping call.', out: 'A scope and quote you can take to anyone. Nothing is charged before you have read it.' },
  { n: '04', t: 'Decide which system owns stock and price', d: 'A video workshop in Sydney business hours. We map products, variants, prices, GST, shipping rules and the system that holds each one, and agree a single owner for stock.', out: 'A one-page data map, and a sitemap named the way buyers search.' },
  { n: '05', t: 'Design, phone first', d: 'Product, category, cart and checkout layouts for the phone view first, using your real products.', out: 'Approved designs for every page template.' },
  { n: '06', t: 'Build, connect and test with real orders', d: 'The engineer who scoped the store builds it. Payments, shipping, stock and accounts are connected, old addresses are redirected, and real orders and refunds are run from end to end.', out: 'A staging store you can order from, with a speed report.' },
  { n: '07', t: 'Launch, handover and support', d: 'We launch, watch the first days of orders, and hand over the domain, store and admin access in your name. After that FactoryJet can keep managing the servers, AI, APIs and maintenance, so your team does not have to.', out: 'A live store you own, and the same team still answering.' },
];

/* ─── Six questions to put to any Sydney firm ─── */
const QUESTIONS: { q: string; good: string; bad: string }[] = [
  { q: 'Can I place an order on a store you built two years ago?', good: 'They send a link and you check out on your phone while they wait.', bad: 'Screenshots, or a reason that store is no longer a fair example.' },
  { q: 'Which system will own my stock count?', good: 'One named system, and a plain account of how the others read from it.', bad: '“It all syncs”, with no detail on what happens when two orders land at once.' },
  { q: 'Who owns the domain, the store and the payment accounts?', good: 'You do, in your name, from the first day.', bad: 'Transfer fees, licence terms, or a pause before the answer.' },
  { q: 'What will the order email show?', good: 'Your business name and ABN, the date, each item and its price, as NSW Fair Trading requires on proof of transaction.', bad: 'They have not thought about it.' },
  { q: 'Can I see it working on my own products before I sign?', good: 'A draft or a demo built on your own data.', bad: 'A slide deck and a request for a deposit.' },
  { q: 'What happens to my Google rankings when the old store is replaced?', good: 'A redirect for every old address, checked again after launch.', bad: 'Rankings “usually recover”.' },
];

/* ─── Sydney firms, grouped by the kind of work (open self-disclosure, ItemList).
       Each note is based on that firm’s own website, read 2026-10-11. No paid placement,
       no ranking. FactoryJet is listed last, in the same register as the others. ─── */
const FIRMS: { name: string; url: string; suits: string; note: string }[] = [
  { name: 'Magicdust', url: 'https://magicdust.com.au/', suits: 'Small business websites',
    note: 'Says it is a Sydney web design agency that has produced over 4,000 websites since 2006, with its design team in Sydney.' },
  { name: 'MindSite', url: 'https://mindsite.com.au/website-design-sydney/', suits: 'Small business websites on WordPress',
    note: 'Says it is a Sydney web design business in Quakers Hill that builds custom WordPress websites, with every project quoted as a fixed scope before work begins.' },
  { name: 'Webfrog Studios', url: 'https://www.webfrogstudios.com.au/', suits: 'Custom WordPress websites and WooCommerce stores',
    note: 'Describes itself as a boutique digital agency in Sydney, working since 2003 on custom websites, WordPress builds and WooCommerce stores.' },
  { name: 'Dream Builds', url: 'https://dreambuilds.com.au/', suits: 'Hand-coded small business websites',
    note: 'Says it is a Sydney web development studio that hand-codes websites for Sydney small businesses and does not use templates.' },
  { name: 'Just Create It', url: 'https://justcreateit.com.au/', suits: 'Shopify stores',
    note: 'Says it is a Sydney Shopify website design and development agency that has worked with more than 500 brands since 2018.' },
  { name: 'Process Creative', url: 'https://www.processcreative.com.au/', suits: 'Shopify stores',
    note: 'Describes itself as a digital agency in Sydney that specialises in Shopify.' },
  { name: 'ClickClickMedia', url: 'https://clickclickmedia.com.au/web-development/shopify-development/', suits: 'Shopify and Shopify Plus, including migrations',
    note: 'Says its Sydney team works from a Norwest office on Shopify and Shopify Plus builds, headless builds, and migrations from WooCommerce and Magento.' },
  { name: 'WP Creative', url: 'https://wpcreative.com.au/shopify-developer-sydney/', suits: 'Existing Shopify stores that need fixes and features',
    note: 'Offers Shopify development in Sydney and says it has more than 10 years of Shopify development experience.' },
  { name: 'Convert Digital', url: 'https://www.convertdigital.com.au/services/why-shopify', suits: 'High-volume retailers on Shopify Plus',
    note: 'Says it is a Shopify Platinum Partner with offices in Sydney, Melbourne and Brisbane, building for fast growing, high-volume merchants. It also lists Magento development.' },
  { name: 'Rival Ecommerce', url: 'https://www.rivalecommerce.com.au/', suits: 'Adobe Commerce and Magento stores',
    note: 'Says it was established in 2007 and is a Sydney ecommerce agency with expertise in Adobe Commerce, Magento and Shopify.' },
  { name: 'One Click Media', url: 'https://www.oneclickmedia.com.au/sydney-magento-development', suits: 'Magento stores that need repair or support',
    note: 'Offers Magento 2 development in Sydney, covering new builds, integrations, and support for stores that are slow or break during promotions.' },
  { name: 'Stone Digital', url: 'https://stonedigital.com.au/woocommerce-development-sydney/', suits: 'WooCommerce and WordPress stores',
    note: 'Offers WooCommerce development in Sydney and says its developers work on custom WordPress, WooCommerce and Shopify builds.' },
  { name: 'FactoryJet', url: CANONICAL, suits: 'Stores and sites that must connect to stock, accounts or an ERP',
    note: 'That is us. We design, build, implement and support stores on Shopify, WooCommerce and Adobe Commerce, small business websites, and AI agents connected to tools such as Xero and HubSpot. We work remotely with Sydney businesses and book calls in Sydney business hours.' },
];

/* Page one for "ecommerce website development sydney", Google AU, 2026-10-11, directories
   (The Manifest, RevenueBase) removed. A record of the results page, not an endorsement. */
const PAGE_ONE = [
  'defyn.com.au', 'ebpearls.com.au', 'ozbiztech.com.au', 'innovination.com',
  'ideafusionmedia.com.au', 'rivalecommerce.com.au', 'whitepeakdigital.com',
];

/* ─── FAQs. SOURCING RULE: the first two questions are buyer questions from FactoryJet’s
       assistant sweep of 9 Oct 2026, in the buyer’s own words. The rest are People-Also-Ask
       questions Google Australia (location_code 2036) returned on the Sydney results pages
       fetched 2026-10-11 and 2026-09-24 ("shopify developers sydney", "shopify expert sydney",
       "web design sydney", "ecommerce web design sydney", "magento developer sydney",
       "ai consultant sydney", "sydney web designer"), except three marked OWN below.
       The primary search itself showed no question box on 2026-10-11.
       Job-seeker questions ("how much do Shopify developers make") are left out on purpose.

       This array is the ONLY copy. The page renders it AND maps it into FAQPage JSON-LD. ─── */
const FAQ_CATEGORIES = [
  { key: 'choosing', label: 'Choosing a Sydney agency or developer' },
  { key: 'cost', label: 'Cost & timing' },
  { key: 'platforms', label: 'Shopify, WooCommerce & Magento' },
  { key: 'selling', label: 'Selling online from NSW' },
  { key: 'websites', label: 'Website design' },
  { key: 'ai', label: 'AI consulting & agents' },
  { key: 'local', label: 'Google Maps & AI answers' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ---------- Choosing ----------
  { category: 'choosing', question: 'Who are the best web design agencies in Sydney for small businesses?',
    answer: 'No single agency is best for every small business, so match the firm to the job. MindSite and Dream Builds both say on their own websites that they build for Sydney small businesses. Magicdust lists small business web design among its services, and Webfrog Studios describes itself as a boutique Sydney agency for custom websites. FactoryJet builds small business websites too, with 7-day delivery for sites of up to five pages. The list on this page groups thirteen firms by the kind of work each one describes.' },
  { category: 'choosing', question: 'Best Shopify developer in Melbourne or Sydney?',
    answer: 'It depends on the size of the store. Convert Digital says it is a Shopify Platinum Partner with offices in Sydney, Melbourne and Brisbane, building for high-volume merchants. In Sydney, Just Create It, Process Creative and ClickClickMedia each offer Shopify development. FactoryJet is a registered Shopify Partner and builds Shopify stores for businesses in both cities, working remotely. Shopify’s own partner directory listed 249 partners in Australia on 11 October 2026.',
    links: [{ href: '/au/shopify-development', label: 'Shopify development for Australian businesses' }, { href: 'https://www.shopify.com/partners/directory/locations/australia', label: 'Shopify Partner Directory: Australia' }] },
  { category: 'choosing', question: 'Who is the best web designer in Sydney?',
    answer: 'Nobody can name one fairly, because the right designer for a law firm is the wrong one for an online store. Judge on evidence you can check yourself: a site they built two years ago that still loads fast, a named person who will do your work, and a plain answer on who owns the domain. Put the six questions on this page to three firms and compare what comes back.' },
  { category: 'choosing', question: 'Who is the best Shopify developer?',
    answer: 'The best one for you has already built a store like yours. Ask for a live store of similar size, place an order on it from your phone, and ask which apps they removed and why. Shopify says it tiers its partners on factors that include experience and proven success, so its directory is a fair starting list. FactoryJet is a registered Shopify Partner.' },
  { category: 'choosing', question: 'Where can I find a Shopify expert to hire?',
    answer: 'Start with Shopify’s own partner directory. It listed 249 partners in Australia when we checked on 11 October 2026, and you can filter it by partner tier. Then search “shopify developers sydney” and read who Google’s AI Overview cites, because that search showed an AI Overview and no Maps pack on the same day. Shortlist three firms and ask each for a store you can order from.',
    links: [{ href: 'https://www.shopify.com/partners/directory/locations/australia', label: 'Shopify Partner Directory: Australia' }] },
  { category: 'choosing', question: 'Can I hire someone to build me a Shopify store?',
    answer: 'Yes. A developer or agency sets up the theme, products, payments, shipping rates and GST, connects stock and accounting, and tests real orders before launch. FactoryJet builds a Shopify store with a custom theme in 3 to 5 weeks, or 5 to 8 weeks when it includes subscriptions, B2B pricing or a migration. The store, the domain and every account stay in your name.',
    links: [{ href: '/au/shopify-development', label: 'Shopify development for Australian businesses' }] },
  { category: 'choosing', question: 'What are some reputable design agencies in Australia?',
    answer: 'Reputation is easiest to check one city at a time. For Sydney, the list on this page names thirteen firms with what each says about itself. For the rest of the country, our guide to web design companies for Australian small businesses covers more. Whoever you shortlist, ask for a site they built two years ago and test its speed yourself before you take a meeting.',
    links: [{ href: '/blog/best-web-design-companies-small-business-australia', label: 'Web design companies for small business in Australia' }] },

  // ---------- Cost ----------
  { category: 'cost', question: 'How much does it cost to design a website in Sydney?',
    answer: 'Keen to Design, a Sydney agency, lists typical Sydney prices of $3,500 to $7,000 for a small business website of 5 to 8 pages and $7,000 to $15,000 for a mid-range custom WordPress site (its page was updated in April 2026). Page count, who writes the content and what the site connects to move the figure most. FactoryJet quotes a fixed price in writing after a short scoping call.',
    links: [{ href: 'https://www.keentodesign.com.au/web-design-cost/', label: 'Keen to Design: website cost in Sydney' }, { href: '/blog/website-cost-australia-2026', label: 'Website cost in Australia (2026 guide)' }] },
  { category: 'cost', question: 'What is the cost of building an eCommerce website?',
    answer: 'For Sydney, Keen to Design puts an ecommerce website at $8,000 to $25,000 or more, and says a custom ecommerce platform built by a Sydney agency can exceed $25,000 (page updated April 2026). Catalogue size, product options and integrations with stock and accounting explain most of the spread. FactoryJet quotes the build as a fixed price in writing after a short scoping call.',
    links: [{ href: 'https://www.keentodesign.com.au/web-design-cost/', label: 'Keen to Design: website cost in Sydney' }, { href: '/blog/shopify-cost-australia-2026', label: 'Shopify cost in Australia (2026 guide)' }] },
  { category: 'cost', question: 'How much does it cost to hire a Shopify developer?',
    answer: 'It depends on whether you need a theme change, a new feature or a whole store, so compare quotes on the same written scope and check what each one leaves out. Our Shopify cost guide for Australia lists published market ranges with the source for each. FactoryJet quotes a fixed price in writing after a short scoping call.',
    links: [{ href: '/blog/shopify-cost-australia-2026', label: 'Shopify cost in Australia (2026 guide)' }] },
  { category: 'cost', question: 'How long does it take to build an ecommerce website?',
    answer: 'A store on a platform such as Shopify or WooCommerce with a custom theme takes 3 to 5 weeks. A store with subscriptions, B2B pricing or a migration takes 5 to 8 weeks. Headless, custom or ERP-heavy builds take 8 to 14 weeks. Product data and sign-offs that arrive late move the date more than the code does, so we flag early which items sit with you.' },

  // ---------- Platforms ----------
  { category: 'platforms', question: 'Is Shopify still worth it in 2026?',
    answer: 'For most small and mid-sized stores, yes. Shopify describes itself as one place to sell online and in person, with payments and fulfilment run from one place. It stops fitting when pricing, quoting or ordering rules are unusual enough that apps pile up to work around the platform. If three or more apps exist only to bend the checkout, compare a custom build.' },
  { category: 'platforms', question: 'Who is Shopify’s biggest competitor?',
    answer: 'It depends on the store. For a business already on WordPress it is WooCommerce, which is open source and built on WordPress. For large catalogues and complex B2B rules it is Adobe Commerce, which many people still call Magento. Sydney search data puts the three close together: about 90 monthly searches for a WooCommerce developer, 50 for Shopify developers and 40 for a Magento developer.',
    links: [{ href: '/au/woocommerce', label: 'WooCommerce development for Australian stores' }, { href: '/blog/best-ecommerce-platform-australia-2026', label: 'Best ecommerce platform in Australia guide' }] },
  { category: 'platforms', question: 'Do people still use Magento?',
    answer: 'Yes. Adobe released Adobe Commerce 2.4.9 on 12 May 2026, and about 40 searches a month in Sydney are for a Magento developer. Rival Ecommerce, One Click Media and Convert Digital all advertise Magento or Adobe Commerce work for Sydney stores. It suits large catalogues, several stores on one back end and complex B2B rules. For a small store it is usually more platform than the job needs.' },
  { category: 'platforms', question: 'Is Magento end of life?',
    answer: 'No. Adobe’s release page for Adobe Commerce, last updated on 12 August 2026, lists version 2.4.9 with regular support until 31 May 2029 and the 2.4.8 line until 31 May 2028. Older lines do run out. Regular support for 2.4.7 ends on 31 May 2027. If your store runs an older version, plan the upgrade or the move before its date arrives.',
    links: [{ href: 'https://experienceleague.adobe.com/en/docs/commerce-operations/release/versions', label: 'Adobe Commerce released versions' }] },
  { category: 'platforms', question: 'What does a Magento developer do?',
    answer: 'A Magento developer builds and maintains stores on Magento or Adobe Commerce. That covers the theme, the catalogue structure, extensions, and connections to stock, shipping and accounting systems. Much of the work on an existing store is upgrades, security patches and speed. FactoryJet builds and supports Adobe Commerce stores, and has worked on ERPs including Odoo, NetSuite and SAP Business One.' },
  // Added 2026-10-29 (P14) with the "Ecommerce web development in Sydney" section.
  // Google AU PAA wording from pipeline/research/data/market-au-2026-09-24/brief_au_ecommerce.json.
  { category: 'platforms', question: 'What is eCommerce web development?',
    answer: 'It is the work of building an online store and the systems behind it: the storefront and theme, the product catalogue, checkout and payments, shipping rates, and the connections that pass orders to the warehouse and invoices to the accounts. In Sydney that also means GST shown correctly, Afterpay and Zip at checkout, and refund wording that matches Australian Consumer Law. Design is one part of it. Most of the work sits behind the page.',
    links: [{ href: '/au/ecommerce-development', label: 'Ecommerce development in Australia' }] },
  { category: 'platforms', question: 'Can I move my store from Magento or WooCommerce to Shopify without losing rankings?',
    answer: 'Yes, if the move is planned around your URLs. Products, customers and order history are exported, every old product, category and blog URL gets a 301 redirect to its new address, and the new store is checked on a test domain before the switch. Customer passwords cannot be carried across, so plan the email that invites customers to reactivate their accounts. Expect some movement in rankings for a few weeks after the switch.',
    links: [{ href: '/au/shopify-development', label: 'Shopify development for Australian businesses' }, { href: '/au/shopify-migration', label: 'Shopify migration for Australian stores' }] },
  { category: 'platforms', question: 'Can Shopify handle B2B wholesale ordering?',
    answer: 'Shopify Plus can. Its B2B features give each trade customer a company account with its own price list, payment terms and permitted products, alongside your retail checkout in the same store. Distributors with quote approvals, several delivery sites or contract pricing that changes by volume sometimes outgrow that, and a custom ordering portal connected to the store fits better. Map your trade rules on paper before you choose.',
    links: [{ href: '/au/ecommerce-development', label: 'Ecommerce development in Australia' }, { href: '/au/shopify-plus', label: 'Shopify Plus agency for B2B and migrations' }, { href: '/au/b2b-ecommerce', label: 'B2B ecommerce trade portals' }] },
  { category: 'platforms', question: 'Can a Shopify store send orders and invoices to Xero?',
    answer: 'Yes. Most stores use a connector app from the Shopify App Store that posts orders, refunds, fees and GST into Xero. Wholesalers with trade accounts, payment terms or more than one warehouse often need more control, so the connection is built to match how the bookkeeper wants the ledger. Test it with a week of real orders before launch, and check that GST and Shopify payouts reconcile.',
    links: [{ href: '/au/shopify-development', label: 'Shopify development for Australian businesses' }, { href: '/au/shopify-xero-integration', label: 'Shopify Xero integration' }] },

  // ---------- Selling online from NSW ----------
  { category: 'selling', question: 'Is e-commerce legal in Australia?',
    answer: 'Yes, and the same consumer law applies online as in a shop. The ACCC says all the usual consumer rights apply when someone shops online, and that a business must not make false or misleading claims on its website, on social media or in its product reviews. In New South Wales, NSW Fair Trading also requires proof of transaction for goods or services of $75 or more.',
    links: [{ href: 'https://www.accc.gov.au/business/selling-products-and-services/selling-online', label: 'ACCC: selling online' }] },
  { category: 'selling', question: 'Do you need an ABN for ecommerce?',
    answer: 'If you are running a business, in practice yes. business.gov.au says registration is free and that an ABN lets you claim GST credits and register a .au domain name. NSW Fair Trading requires your ABN or ACN on proof of transaction, which can be a digital receipt. The ATO requires GST registration once GST turnover reaches $75,000, and you need an ABN before you can register.',
    links: [{ href: 'https://business.gov.au/registrations/register-for-an-australian-business-number-abn', label: 'business.gov.au: register for an ABN' }] },
  { category: 'selling', question: 'Is e-commerce worth it in 2026?',
    answer: 'It is worth it when you can deliver the product at a healthy margin after freight and returns, and when people already search for it. Greater Sydney had 5,638,830 residents at 30 June 2025 on the ABS count. ABS figures also show retail trade businesses grew 0.1 per cent in 2025–26, against 4.9 per cent for transport, postal and warehousing. Start with a small range and measure what sells.' },

  // ---------- Website design ----------
  { category: 'websites', question: 'How much does it cost to build a website in Australia?',
    answer: 'Keen to Design, a Sydney agency, says a professional website in Australia typically costs between $3,000 and $25,000 or more, depending on size, complexity and who builds it (page updated April 2026). Our website cost guide compares seven published Australian price guides. FactoryJet quotes a fixed price in writing after a short scoping call.',
    links: [{ href: '/blog/website-cost-australia-2026', label: 'Website cost in Australia (2026 guide)' }] },
  { category: 'websites', question: 'What makes a good website good?',
    answer: 'It says what you do in the first screen and makes the next step obvious on a phone. It is also fast, and Google publishes the marks for that: the main content showing within 2.5 seconds and a response to a tap in under 200 milliseconds. After those come proof of past work, real photos and pages named the way customers search.' },
  { category: 'websites', question: 'What is the 3 second rule in website design?',
    answer: 'It is a rule of thumb that visitors leave a page that has not shown them something useful within about three seconds. Google’s published mark is stricter. It asks for the largest piece of content to appear within 2.5 seconds of the page starting to load. Measure your own pages before changing anything. Often the first fix is the size of the images that load first.' },
  { category: 'websites', question: 'What are the 7 steps in web design?',
    answer: 'Lists vary. Ours for a Sydney store runs: a free review, a working demo, a written scope with a fixed price, a workshop to decide which system owns stock and price, design for the phone first, build and test with real orders, then launch and handover. The order matters more than the count. Settling the data before the design saves the most rework.' },
  { category: 'websites', question: 'Is web design still in demand in 2026?',
    answer: 'Yes. About 2,400 searches a month are for website design in Sydney and its close variants. Google showed no AI Overview for “web design sydney” or “small business web design sydney” when we checked on 11 October 2026, so the ordinary results and the Maps pack still take the click on those searches. What has changed is the standard buyers expect on a phone.' },

  // ---------- AI ----------
  { category: 'ai', question: 'What does an AI consultant do?',
    answer: 'An AI consultant finds the repeated jobs in a business where an AI agent would help most, checks the data and systems behind each one, and says which are not worth doing. The output should be a short written plan and one first build small enough to judge within weeks. FactoryJet advises and then builds, so the plan is written by the people who have to make it work.',
    links: [{ href: '/au/ai-consulting', label: 'AI consulting for Australian businesses' }] },
  // OWN question (not a Google question box): states the AI work FactoryJet does.
  { category: 'ai', question: 'What can an AI agent do for a Sydney business?',
    answer: 'An AI agent is software that reads a request, looks things up in your systems and takes the next step, with a person approving anything important. FactoryJet builds agents that answer customer questions, draft quotes, enter purchase and sales orders and keep daily bookkeeping moving, connected to tools such as Xero, HubSpot and WhatsApp. We also build AI voice agents that answer phone calls, for small offices and for call centres.',
    links: [{ href: '/au/ai-agents', label: 'AI agents for Australian businesses' }] },
  // OWN question: the only approved wording on upkeep, with no figure.
  { category: 'ai', question: 'Who looks after the store or the AI agent after launch?',
    answer: 'FactoryJet does, if you want us to. We quote the build, and any support you choose, as fixed prices in writing after a short scoping call. We then can keep managing the servers, AI models, APIs and maintenance, so your team does not have to. You still own everything, with the domain, the store and every account in your name.' },

  // ---------- Local ----------
  { category: 'local', question: 'How can I get my business to show up on Google Maps?',
    answer: 'Create a Google Business Profile, verify it, and fill in every field with the most specific category. Google says local results are mainly based on relevance, distance and popularity, and that nobody can pay for a better local ranking. Distance matters in a city this wide. The ABS puts the centre of Greater Sydney’s population in Rosehill, so a CBD address is a long way from many searchers.',
    links: [{ href: '/au/local-seo', label: 'Local SEO for Australian businesses' }] },
  // OWN question: reports FactoryJet’s own results-page check of 11 Oct 2026.
  { category: 'local', question: 'Does Google show an AI Overview for Sydney ecommerce searches?',
    answer: 'On 11 October 2026 it did for most of them. We checked twelve Sydney searches on Google Australia. Eight showed an AI Overview and seven showed a Maps pack. All five searches that name a platform or the word development, including “ecommerce website development sydney” and “shopify developers sydney”, showed an AI Overview and no Maps pack. Results change from week to week, so treat this as a snapshot.',
    links: [{ href: '/au/ai-seo', label: 'AI SEO for Australian businesses' }] },
];

/* ─── JSON-LD. Organization is defined sitewide; referenced here by @id only.
       No LocalBusiness node and no geo coordinates on city pages. ─── */
const AUTHOR = {
  '@type': 'Person',
  name: 'Bhavesh Barot',
  jobTitle: 'Founder & CEO',
  url: 'https://factoryjet.com/about',
  sameAs: ['https://www.linkedin.com/in/bhavesh-ai-gtm-expert/', 'https://github.com/factoryjet-tech'],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Ecommerce Website Development and Web Design Sydney',
      serviceType: 'Ecommerce website development, Shopify development, website design and AI consulting',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Sydney' },
        { '@type': 'AdministrativeArea', name: 'New South Wales' },
        ...SERVICE_AREAS.map((name) => ({ '@type': 'Place', name })),
      ],
      url: CANONICAL,
      description:
        'Ecommerce website development and web design for Sydney and New South Wales businesses, delivered remotely in Sydney business hours. Stores on Shopify, WooCommerce and Adobe Commerce connected to stock and accounting systems, small business websites, and AI agents. The client owns everything.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Sydney ecommerce, web design and AI services',
        itemListElement: [
          'Ecommerce website development',
          'Shopify development',
          'WooCommerce development',
          'Adobe Commerce (Magento) development',
          'Small business website design',
          'Store integration with accounting, stock and ERP systems',
          'AI consulting',
          'AI agent development',
        ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumbs`,
      itemListElement: CRUMBS.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.url })),
    },
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: TITLE,
      headline: H1,
      description: DESCRIPTION,
      inLanguage: 'en-AU',
      datePublished: '2026-10-11',
      dateModified: UPDATED,
      image: 'https://factoryjet.com/images/au/sydney/sydney-og.webp',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumbs` },
      about: { '@id': `${CANONICAL}#service` },
      author: AUTHOR,
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
    // Generated by mapping FIRMS, the SAME array the firms section renders.
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#firms`,
      name: 'Sydney web design, Shopify and ecommerce firms, grouped by kind of work',
      itemListElement: FIRMS.map((f, i) => ({ '@type': 'ListItem', position: i + 1, name: f.name, url: f.url })),
    },
    // Generated by mapping FAQ_ITEMS, the SAME array the FAQ section renders.
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
      'Online stores, Shopify builds, websites and AI agents for Sydney businesses, connected to the systems you already run. A demo before you sign, and you own everything.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/images/au/sydney/sydney-og.webp', width: 1200, height: 630, alt: 'A woman in a rust-orange linen shirt places a folded cream garment into a plain cardboard box at a timber packing bench in a bright stockroom' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Online stores, Shopify builds, websites and AI agents for Sydney businesses, connected to the systems you already run.',
    images: ['/images/au/sydney/sydney-og.webp'],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'sydney';

/* H1 split for the Family A hero emphasis. Rendered text stays byte-identical to H1 (schema headline). */
const H1_SPLIT = H1.lastIndexOf(' in ');
const H1_LEAD = H1.slice(0, H1_SPLIT);
const H1_EMPHASIS = H1.slice(H1_SPLIT + 1);

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

/* Hero spec panel rows. */
const HERO_ROWS: { note: string; metric: string; val: string; icon: string }[] = [
  { note: 'working software on your own data', metric: 'A demo before you sign', val: 'First', icon: 'M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 10c0-4 3-6 7-6s7 2 7 6' },
  { note: 'websites up to 5 pages', metric: '7-day delivery', val: '7 days', icon: 'M4 5h16v15H4V5Zm0 5h16M8 3v4m8-4v4' },
  { note: 'in your name from day one', metric: 'Domain, store and every account', val: 'Yours', icon: 'M14 4a6 6 0 1 1-4.2 10.3L4 20m2-2 2 2m1-5 2 2' },
];

/* Icons and visual-slot subjects for the six ecommerce cards (same order as BUILD). */
const BUILD_ICONS = [
  'M4 5h16M4 12h11M4 19h7',
  'M6 3h9l4 4v14H6V3Zm3 8h7m-7 4h7',
  'M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm3 15h2',
  'M9 3v5m6-5v5M7 8h10v3a5 5 0 0 1-10 0V8Zm5 8v5',
  'M4 16a8 8 0 1 1 16 0M12 16l4-5',
  'M14 4a6 6 0 1 1-4.2 10.3L4 20m2-2 2 2m1-5 2 2',
] as const;
const BUILD_SUBJECTS = [
  'AI-generated model: one white stock ledger card joined by thin lines to a store card, a till card and a marketplace card',
  'AI-generated model: a white receipt card with four plain rows beside a small orange tick',
  'AI-generated model: a white phone showing a short checkout form and one large orange pay button',
  'AI-generated model: a white product page card with an orange answer block at the top and plain text lines below',
  'AI-generated model: a white dial with its needle in an orange zone, next to a small phone showing a product page',
  'AI-generated model: an orange key being handed from one small figure to another in front of a white store card',
] as const;

export default function SydneyPage() {
  return (
    <>
      <script id="ld-au-sydney" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="au" logoHref="/au" />
      <div className="aiAgentPage auPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="wrap">
          {CRUMBS.map((item, index) => (
            <Fragment key={item.url}>
              {index > 0 && ' / '}
              {index === CRUMBS.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
            </Fragment>
          ))}
        </div>
      </nav>
      <main id="main-content" className={styles.page}>

        {/* ═══ HERO (US web-design hub hero: copy + inline form left, spec panel right) ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className={`hero-copy ${styles.heroCopy}`}>
              <div className="eyebrow">Sydney, New South Wales</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                Ecommerce website development in Sydney for businesses that need the store to take orders and agree
                with the accounts. We design, build, implement and support Shopify, WooCommerce and custom stores, small
                business websites, and AI agents that connect to the tools you already run. You deal with the
                engineer doing the work, and you own everything we build.
              </p>
              <HeroInlineForm region="au" source="au_sydney_hero_inline" submitLabel="Get my free store review" />
            </div>

            <form
              className="specpanel"
              aria-label="How we work with Sydney businesses"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="How every Sydney engagement runs: a working demo before you sign, 7-day delivery for small sites, and every account in the client's name"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · HOW WE WORK WITH SYDNEY BUSINESSES</span>
                <span className="sys"><span>ECOMMERCE</span><span>WEB DESIGN</span></span>
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
              <div className="specpanel-body" role="radiogroup" aria-label="Explore how we work">
                {HERO_ROWS.map((r, i) => (
                  <label key={r.metric} className={i === HERO_ROWS.length - 1 ? 'specrow hold' : 'specrow run'}>
                    <input className="workflow-select" type="radio" name="sydney-step" value={String(i + 1)} />
                    <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={r.icon} /></svg></span>
                    <span className="idx">{r.note}</span>
                    <span className="title">{r.metric}</span>
                    <span className="tag">{r.val}</span>
                  </label>
                ))}
              </div>
              <div className="specpanel-foot">RULE · You own the store, the domain and every login from the first day.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '390', t: 'monthly searches for “ecommerce website development sydney”', s: 'DataForSEO, 11 Oct 2026', u: '' },
              { v: '26,057', t: 'more businesses in New South Wales across 2025–26, the largest rise of any state or territory', s: 'ABS, Aug 2026', u: SRC_ABS.url },
              { v: '21,618', t: 'business establishments counted, building by building, in the City of Sydney local area', s: 'City of Sydney, 2022 survey', u: SRC_FES.url },
              { v: '5 of 5', t: 'Sydney platform and development searches where Google showed an AI Overview and no Maps pack', s: 'Google AU, 11 Oct 2026', u: '' },
            ].map((r) => (
              <div className="ledgercell" key={r.t}>
                <div className="k">{r.u ? <a href={r.u} {...extLink}>{r.s}</a> : r.s}</div>
                <div className="v">
                  <strong className={/^[\d.,]+s?$/.test(r.v) ? 'ledger-number' : 'ledger-word'}>{r.v}</strong>
                  {r.t}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap byline">
          <div className="av">BB</div>
          <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
          <div className="upd">Last updated<br />11 October 2026</div>
        </div>

        {/* ═══ ANSWER-FIRST (GEO) → facts ═══ */}
        <section className="section facts" id="answer">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What does an ecommerce website developer in Sydney do?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    An ecommerce website developer in Sydney builds the online store and everything behind it: product
                    pages, cart, checkout, payments, shipping rates and GST. A good one also connects the store to
                    stock and to accounting software such as Xero, tests real orders on a phone before launch, and
                    hands you the domain and every login.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div data-speakable="true">
                    <h3>And who builds websites for Sydney small businesses?</h3>
                    <p>
                      Sydney has web design firms of every size, from one-person studios to agencies with offices in
                      three cities. For a small business the useful test is fit. Check who builds for a business your
                      size, who writes the content and who owns the domain at the end. FactoryJet builds small business
                      websites with 7-day delivery for sites of up to five pages, and the list further down names
                      thirteen firms by the work each one describes.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    Sydney is the largest search market in Australia for this work. Across the web design, SEO,
                    ecommerce and AI terms we track, about 10,430 searches a month name Sydney, ahead of
                    Melbourne at 10,330. The ABS put Greater Sydney at 5,638,830 residents at 30 June 2025. More
                    buyers also means more firms chasing them, so this page gives as much space to choosing a firm
                    as it does to ours.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto"
                subject="An online store owner packing an order at a timber bench in a small bright stockroom">
                <img src="/images/au/sydney/sydney-hero.webp" width={1400} height={933} loading="lazy" decoding="async" alt="A woman in a rust-orange linen shirt places a folded cream garment into a plain cardboard box at a timber packing bench, with shelves of plain boxes and folded fabric behind her" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ FIVE SYMPTOMS (<details>) → vlog, engagement card as a panel ═══ */}
        <section className="vlog" id="diagnosis">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Diagnosis before design</div>
              <h2>Five reasons a Sydney online store stops growing</h2>
              <p>
                Five Sydney stores can report the same thing, flat sales, and have five different causes. A redesign
                sold to a store whose real fault is a stock sync spends the budget and leaves the fault where it
                was. Open the one closest to your store.
              </p>
            </div>
            <div className="ventries">
              {DIAGNOSIS.map((d) => (
                <details key={d.symptom} className="ventry">
                  <summary><h3>{d.symptom}</h3><span className="chev" aria-hidden="true">+</span></summary>
                  <p><b>Likely cause:</b> {d.likely}</p>
                  <p><b>What fixes it:</b> {d.fix}</p>
                </details>
              ))}
              <div className="au-panel">
                <div className="eyebrow">Sydney engagements at a glance</div>
                <ul className="trigrows">
                  <li><span className="m">Who we work with</span><span className="n">Sydney stores, service businesses and wholesalers</span><span className="t">Sydney + NSW</span></li>
                  <li><span className="m">Two ways to engage</span><span className="n">a build, or advice your own team carries out</span><span className="t">Build / Advise</span></li>
                  <li><span className="m">How it starts</span><span className="n">a store or site review, in writing</span><span className="t">Free</span></li>
                  <li><span className="m">Before you sign</span><span className="n">working software on your own data</span><span className="t">Demo</span></li>
                  <li><span className="m">How we meet</span><span className="n">video calls in Sydney business hours</span><span className="t">Remote</span></li>
                  <li><span className="m">What we will not do</span><span className="n">keep your logins, buy links or promise a ranking</span><span className="t">Never</span></li>
                </ul>
                <p className="au-note">
                  Prices appear on this page only where a buyer question asks for one, as a published market range
                  with its source named. FactoryJet quotes a fixed price in writing after a short scoping call. For
                  more published Australian ranges, see our{' '}
                  <a href="/blog/website-cost-australia-2026">guide to website design cost in Australia</a> and our{' '}
                  <a href="/blog/shopify-cost-australia-2026">guide to Shopify cost in Australia</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SYDNEY MARKET + DEMAND → prose/demand split, then city table ═══ */}
        <section className="section market" id="market">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The Sydney search market</div>
              <h2>What Sydney ecommerce and web design searches look like in October 2026</h2>
            </div>
            <div className="au-split au-split-flush">
              <div>
                <p>
                  New South Wales gained 26,057 businesses across 2025–26, the largest net increase of any state or
                  territory, inside a national total of 2,814,778 actively trading businesses at 30 June 2026.
                  Retail was the flat spot. The number of retail trade businesses in Australia rose 0.1 per cent in
                  the year, against 4.9 per cent for transport, postal and warehousing. We read that as selling
                  moving towards delivery, though the ABS does not say so.
                </p>
                <p>
                  The City of Sydney counts businesses building by building. Its surveyors found 21,618 business
                  establishments in the council area in 2022, and 80.7 per cent of them had fewer than 20 jobs.
                  Retail and personal services lost 307 businesses between the 2017 and 2022 surveys, while shop and
                  showroom floor space passed one million square metres for the first time.
                </p>
                <p>
                  “Website design sydney” and its close variants are searched about 2,400 times a month, and
                  “ecommerce website development sydney” about 390. Smaller searches name the platform. About 90 a
                  month are for a WooCommerce developer, 50 for Shopify developers and 40 for a Magento developer.
                  Those buyers already know what they run and want someone who has worked on it.
                </p>
                <p>
                  We looked at page one for “ecommerce website development sydney” on 11 October 2026. Three of the
                  ten results were directory pages and two were “best agencies” lists. We then counted the websites
                  linking to six agency sites on that page (known as referring domains, the main measure of a
                  site’s authority). They ranged from 37 to 2,103, and three of the six had about 100 or fewer. A
                  page with substance can compete there without a decade of link building.
                </p>
                <p>
                  On the same day we ran twelve Sydney searches. Google showed an AI Overview (its written answer
                  above the results) on eight and a Maps pack (the three businesses with pins) on seven. The five that name a platform or the word development all showed an AI
                  Overview and no Maps pack. For those buyers the first thing on the screen is a written answer
                  with sources, and a page earns a place in it by being clear enough to quote.
                </p>
                <p className="au-note">
                  Sources: <a href={SRC_ABS.url} {...extLink}>{SRC_ABS.source}, {SRC_ABS.title}</a>;
                  {' '}<a href={SRC_FES.url} {...extLink}>{SRC_FES.source}, {SRC_FES.title}</a>;
                  {' '}search volumes, results pages and link counts from DataForSEO, Google Australia, 24 September and 11 October 2026.
                </p>
              </div>
              <div className="demand">
                <div className="demand-head"><span>Sydney · Monthly Searches</span><b>DataForSEO</b></div>
                <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Comparison table"><table className={styles.comparisonTable} data-comparison-layout data-keyword-records><tbody>{DEMAND.map((r) => (
                    <tr key={r.kw}><th scope="row"><span className="demand-kw">{r.kw}</span></th><td><span className="demand-v">{r.v}<small> searches</small></span><div className="demand-bar"><i style={{ width: r.w }} /></div></td><td><div className="demand-kd">{r.note}</div></td></tr>
                  ))}</tbody></table></div>
                <p className="demand-src">Google Australia. Web design terms fetched 24 September 2026, the rest 11 October 2026. Results-page notes are from 11 October 2026.</p>
              </div>
            </div>

            <div className="city-sub">
              <h3>How Sydney compares with other Australian cities</h3>
              <p>
                Monthly searches that name each city, across the web design, SEO, ecommerce and AI agent terms we track.
                Sydney leads on the total and on SEO. Melbourne is ahead on web design, ecommerce and AI agents.
              </p>
            </div>
            <div className={`tablewrap ${styles.tableBox}`} tabIndex={0} role="region" aria-label="Comparison table">
              <table data-columns={6}>
                <thead>
                  <tr>
                    <th>City</th>
                    <th className="fj">All tracked searches</th>
                    <th>Web design</th>
                    <th>SEO</th>
                    <th>Ecommerce</th>
                    <th>AI agents</th>
                  </tr>
                </thead>
                <tbody>
                  {CITIES.map((c) => (
                    <tr key={c.city}>
                      <th scope="row">{c.href ? <a href={c.href}>{c.city}</a> : c.city}{c.city === 'Sydney' ? ' (this page)' : ''}</th>
                      <td className="fj">{c.total}</td>
                      <td>{c.web}</td>
                      <td>{c.seo}</td>
                      <td>{c.ecom}</td>
                      <td>{c.ai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tablenote">DataForSEO, Google Australia, keyword volumes fetched 24 September 2026, close variants collapsed.</p>
          </div>
        </section>

        {/* ═══ WHO WE BUILD FOR → ruled rows + suburb pills + city-map slot ═══ */}
        <section className="section platforms" id="who-we-build-for">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Who we build for in Sydney</div>
                <h2>Six kinds of Sydney business, and where the official counts put them</h2>
              </div>
              <p>
                Every place and figure in the middle column comes from the ABS, the City of Sydney or the NSW
                Government, read on 11 October 2026 and linked in the sources at the foot of the page. The notes on
                the right are our own view of what each kind of buyer needs from a website.
              </p>
            </div>
            <div className="platlist" role="list">
              {SECTORS.map((s, i) => (
                <div key={s.name} className="plat" role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{s.name}</h3></div>
                  <p className="plat-fit">{s.where}</p>
                  <p className="plat-build">{s.note}</p>
                </div>
              ))}
            </div>
            <p className="tablenote">
              Sources: <a href={SRC_FES.url} {...extLink}>{SRC_FES.source}, {SRC_FES.title}</a>;
              {' '}<a href={SRC_GLANCE.url} {...extLink}>{SRC_GLANCE.source}, {SRC_GLANCE.title}</a>;
              {' '}<a href={SRC_TECH.url} {...extLink}>{SRC_TECH.source}, Tech Central release</a>;
              {' '}<a href={SRC_POP.url} {...extLink}>{SRC_POP.source}, {SRC_POP.title}</a>.
            </p>
            <div className="city-areas">
              <VisualSlot page={PAGE_KEY} slot="platforms" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="A homewares shop owner arranging ceramic bowls on a shelf, with wrapped parcels on the counter and a street of terrace houses outside"
                caption="For a shop on a terrace-house street, the counter and the courier parcels are one business. The website has to show the stock that is on the shelf today.">
                <img src="/images/au/sydney/sydney-shop.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A man in a navy apron arranges handmade ceramic bowls on a timber shelf in a small sunlit shop, with three parcels wrapped in brown paper on the counter and a street of terrace houses outside the open door" />
              </VisualSlot>
              <div>
                <div className="factlabel">Sydney areas we cover by video call</div>
                <ul className="city-list">
                  {SERVICE_AREAS.map((a) => (<li key={a}><span>{a}</span></li>))}
                </ul>
                <p className="city-areas-more">
                  And the rest of Greater Sydney and New South Wales, in Sydney business hours. The ABS puts the
                  centre of Greater Sydney’s population in Rosehill, near the Parramatta River, and says it moved
                  80 metres west in 2024–25.
                </p>
                <VisualSlot page={PAGE_KEY} slot="city-map" kind="map" ratio="3:2"
                  subject="A plain map of Greater Sydney with the listed suburbs marked as small dots and no pins" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ ECOMMERCE: WHEN WE BUILD IT → capgrid ═══ */}
        <section className="section capabilities" id="ecommerce-development-sydney">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Ecommerce website development in Sydney</div>
              <h2>Ecommerce development in Sydney, when we build it: six things every store gets</h2>
              <p className="lead">
                We design, build, implement and support the store. A store on a platform with a custom theme takes 3 to 5
                weeks. Subscriptions, B2B pricing or a migration take 5 to 8 weeks. Headless, custom or ERP-heavy
                builds take 8 to 14 weeks. You get the date in writing at scope.
              </p>
            </div>
            <div className="capgrid">
              {BUILD.map((s, i) => {
                const n = String(i + 1).padStart(2, '0');
                return (
                  <div key={s.t} className={`cap cap-${i + 1}`}>
                    <div className="caphead"><span className="capid">CAP‑{n}</span><svg {...CAP_ICON}><path d={BUILD_ICONS[i]} /></svg></div>
                    <VisualSlot page={PAGE_KEY} slot={`capability-${n}`} kind="diagram" ratio="11:4" className="cap-diagram" subject={BUILD_SUBJECTS[i]} />
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                );
              })}
            </div>
            <p className="tablenote">
              Rules and marks: <a href={SRC_ATO.url} {...extLink}>{SRC_ATO.source}, {SRC_ATO.title}</a>;
              {' '}<a href={SRC_RECEIPTS.url} {...extLink}>{SRC_RECEIPTS.source}, {SRC_RECEIPTS.title}</a>;
              {' '}<a href={SRC_CWV.url} {...extLink}>{SRC_CWV.source}, {SRC_CWV.title}</a>.
              {' '}For the full service, see <a href="/au/ecommerce-development">ecommerce development in Australia</a>.
            </p>
          </div>
        </section>

        {/* ═══ INTEGRATIONS + WAREHOUSE IMAGE → definition (image left, copy right) ═══ */}
        <section className="definition" id="integrations">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition" kind="photo" ratio="3:2" className="definition-image"
              subject="Two warehouse workers checking plain cartons beside tall racking, one holding a clipboard and one loading a trolley">
              <img src="/images/au/sydney/sydney-warehouse.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A woman in an orange high-visibility vest holds a clipboard while a man in a grey t-shirt lifts a plain carton onto a trolley in a warehouse with tall racking and an open roller door" />
            </VisualSlot>
          </div>
          <div className="definition-copy">
            <div className="eyebrow">Beyond the storefront</div>
            <h2>A store that agrees with the warehouse and the accounts</h2>
            <p>
              A wholesaler with a warehouse and a homewares brand with two shops rarely need a prettier
              homepage. They need the order to reach the warehouse once and the stock count to drop in one
              place. The invoice should land in Xero without anyone retyping it.
            </p>
            <p>
              We connect the store to the systems you already run, through their official connections. FactoryJet
              has worked on Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs, on jobs that include
              quoting, daily bookkeeping, and purchase and sales orders. For trade customers we also build EDI
              connections (orders exchanged computer to computer in an agreed format) and punchout catalogues
              (your catalogue opened from inside the buyer’s own purchasing system).
            </p>
            <p>
              If the repeated admin behind the store is the real cost, such as sorting enquiries or copying orders
              between systems, that is a job for an <a href="/au/ai-agents">AI agent built into your existing tools</a>.
              For a first opinion on where AI fits, see <a href="/au/ai-consulting">AI consulting for Australian businesses</a>.
            </p>
          </div>
        </section>

        {/* ═══ ECOMMERCE WEB DEVELOPMENT SYDNEY (added 2026-10-29) → facts ═══ */}
        <section className="section facts" id="ecommerce-web-development-sydney">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Ecommerce web development Sydney</div>
              <h2>Ecommerce web development in Sydney</h2>
              <p className="lead">
                About 390 searches a month in Sydney are for ecommerce web development, and about 70 for an ecommerce
                agency. The brands behind them are usually past their first store. They are moving off Magento or
                WooCommerce, adding trade customers, or tired of copying orders into Xero by hand.
              </p>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Shopify fits most Sydney retailers. Shopify Plus fits when you need B2B company accounts with their
                  own price lists and payment terms, checkout changes, or separate storefronts for Australia and New
                  Zealand from one admin. When trade rules outgrow both, we build a custom ordering portal connected to
                  the store.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  We are a registered Shopify Partner, we work remotely in Sydney business hours, and you own the
                  store, the code and every account. See <a href="/au/ecommerce-development">ecommerce development in
                  Australia</a> and <a href="/au/shopify-development">Shopify development for Australian businesses</a>.
                </p></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">How a Sydney store build runs</div>
                <ol className="au-numlist">
                  <li><span><b>Free review</b> of the current store: speed, apps, checkout and which pages Google indexes.</span></li>
                  <li><span><b>Platform decision:</b> Shopify, Shopify Plus or custom, written down with the reason.</span></li>
                  <li><span><b>Migration plan from Magento or WooCommerce:</b> a URL map, a 301 redirect for every old page, and products, customers and orders imported to a test store first.</span></li>
                  <li><span><b>B2B ordering:</b> trade price lists, quote to order, payment terms and reorder from past orders.</span></li>
                  <li><span><b>Xero sync:</b> orders, refunds, fees and GST posted so the books match the store.</span></li>
                  <li><span><b>Launch and support</b> from the same team, with real test orders before the switch.</span></li>
                </ol>
                <p className="au-note">Search counts: Google Australia keyword data, monthly averages, 2026.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ WEB DESIGN FOR SMALL BUSINESS → facts ═══ */}
        <section className="section facts" id="web-design-sydney">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Web design Sydney</div>
              <h2>Web design for Sydney small businesses: what goes on the page first</h2>
              <p className="lead">
                About 2,400 searches a month are for website design in Sydney and its close variants, and 880 are
                for a Sydney web designer. Inside the City of Sydney, 80.7 per cent of the 21,618 business
                establishments counted in 2022 had fewer than 20 jobs. These are the six things we put in place for
                a small business before anything else.
              </p>
            </div>
            <div className="factswrap">
              <div className="factlist">
                {BASICS.map((a, i) => (
                  <div key={a.t} className="fact">
                    <div className="sec">§{String(i + 1).padStart(2, '0')}</div>
                    <div>
                      <h3>{a.t}</h3>
                      <p>{a.d}</p>
                      {i === BASICS.length - 1 ? (
                        <p className="au-note">
                          Sources: <a href={SRC_GLANCE.url} {...extLink}>{SRC_GLANCE.source}, {SRC_GLANCE.title}</a>;
                          {' '}<a href={SRC_LOCAL.url} {...extLink}>{SRC_LOCAL.source}, {SRC_LOCAL.title}</a>;
                          {' '}<a href={SRC_BUREAU.url} {...extLink}>{SRC_BUREAU.source}, {SRC_BUREAU.title}</a>.
                          {' '}For the full service, see <a href="/au/small-business-web-design">small business web design in Australia</a>; for search, see <a href="/au/seo">SEO services in Australia</a>.
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-2" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="A baker handing a paper bag across the counter to a customer in a small bakery"
                caption={<>A neighbourhood bakery is found on a phone by someone a few streets away. Opening hours and the address have to load before anything else. For trades, see what goes on a{' '}<a href="/au/websites-for-tradies">website for tradies</a>.</>}>
                <img src="/images/au/sydney/sydney-bakery.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A baker in a white apron and cap hands a brown paper bag across a timber counter to a customer in a mustard jacket, with loaves of bread on wooden racks behind her" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ PHOTOBREAK (US template visual, no AU image yet) ═══ */}
        <VisualSlot page={PAGE_KEY} slot="photobreak" kind="illustration" ratio="12:5" className="photobreak"
          subject="AI-generated model: a row of white parcel boxes on a pale shelf beside a row of white website page cards, one box lifted in orange" />

        {/* ═══ PROCESS (steps stay openable, as the copy says) ═══ */}
        <section className="section process" id="process">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How a Sydney project runs</div>
                <h2>From first review to a live store in seven steps</h2>
                <p className="lead">
                  Each step opens to show what happens and what you hold at the end of it. Stop after the review or
                  the scope if you like. What we gave you stays yours.
                </p>
              </div>
              <VisualSlot page={PAGE_KEY} slot="process" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="A strategist drawing boxes and arrows on a whiteboard for two business owners in a bright meeting room"
                caption="Step four is a data map, drawn before any design: a box for the store, the stock system and the accounts, and an arrow for every piece of data that moves between them.">
                <img src="/images/au/sydney/sydney-workshop.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A woman in a white shirt draws empty boxes joined by arrows on a whiteboard with an orange marker while a man in a green jumper points at one box and a woman in a blue blazer watches" />
              </VisualSlot>
            </div>
            <div className="timeline timeline-4">
              {STEPS.map((s) => (
                <details key={s.n} className="tnode">
                  <summary>
                    <div className="idx">{s.n}</div>
                    <h3>{s.t}<span className="chev" aria-hidden="true">+</span></h3>
                  </summary>
                  <p>{s.d}</p>
                  <p><b>You get:</b> {s.out}</p>
                </details>
              ))}
            </div>
            <p className="tablenote">
              Websites of up to 5 pages qualify for our 7-day delivery, counted from an approved scope with content
              ready. Updates after launch are covered by our <a href="/au/website-maintenance">website maintenance</a> plans.
            </p>
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline="Flat sales, and no clear cause?"
            sub="Send the store address. We walk through it on a phone, read what Google can see, and tell you in writing which of the five problems is costing you orders. It is free, and the note is yours whatever you decide."
            label="Get a free store review"
            note="Bhavesh replies within one business day, Australian hours."
          />
        </div>

        {/* ═══ COMPARISON TABLE ═══ */}
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">Side by side</div>
              <div>
                <h2>Shopify vs WooCommerce vs Adobe Commerce (Magento) vs a custom build</h2>
                <p className="lead">
                  Sydney buyers search for a developer on each of these by name. The row marked our view is
                  FactoryJet’s opinion, and the last two rows describe our own work. Every other row is a
                  measurement or a statement from the maker’s own page.
                </p>
              </div>
            </div>
            <div className={`tablewrap ${styles.tableBox}`} tabIndex={0} role="region" aria-label="Comparison table">
              <table data-columns={5}>
                <thead>
                  <tr>
                    <th>What matters</th>
                    <th>Shopify</th>
                    <th>WooCommerce</th>
                    <th>Adobe Commerce (Magento)</th>
                    <th>Custom or headless build</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">What the maker says</th><td>A commerce platform for selling “online and in person”</td><td>Open source and “built on WordPress”</td><td>Version 2.4.9 released 12 May 2026, with regular support to 31 May 2029</td><td>No maker. The code is written for one store</td></tr>
                  <tr><th scope="row">Who tends to pick it (our view)</th><td>Stores that want one vendor for the store, payments and point of sale</td><td>Businesses that already run WordPress and want to own the code</td><td>Large catalogues, several stores on one back end, complex B2B rules</td><td>Pricing, quoting or ordering rules a platform fights</td></tr>
                  <tr><th scope="row">Monthly Sydney searches for a developer</th><td>50</td><td>90</td><td>40</td><td>Not measured</td></tr>
                  <tr><th scope="row">What Google showed, 11 Oct 2026</th><td>AI Overview, no Maps pack</td><td>AI Overview, no Maps pack</td><td>AI Overview, no Maps pack</td><td>Not checked</td></tr>
                  <tr><th scope="row">The maker’s own directory</th><td>249 partners listed for Australia</td><td>A “Hire an expert” page on WooCommerce.com</td><td>Not checked</td><td>None</td></tr>
                  <tr><th scope="row">FactoryJet build time</th><td>3 to 5 weeks with a custom theme</td><td>3 to 5 weeks with a custom theme</td><td>8 to 14 weeks when an ERP owns price and stock</td><td>8 to 14 weeks</td></tr>
                  <tr><th scope="row">Who owns what FactoryJet builds</th><td>You do, with the store, domain and accounts in your name</td><td>You do, with the code, hosting account and domain in your name</td><td>You do, with the code and domain in your name</td><td>You do, with the code and every account in your name</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Subscriptions, B2B pricing or a migration put a platform store in the 5 to 8 week bracket. Maker statements:{' '}
              <a href={SRC_SHOPIFY.url} {...extLink}>{SRC_SHOPIFY.source}</a>,{' '}
              <a href={SRC_PARTNERS.url} {...extLink}>{SRC_PARTNERS.title}</a>,{' '}
              <a href={SRC_WOO.url} {...extLink}>{SRC_WOO.source}</a> and{' '}
              <a href={SRC_ADOBE.url} {...extLink}>{SRC_ADOBE.source}, {SRC_ADOBE.title}</a>, all read on 11 October 2026.
              For a longer comparison, see our <a href="/blog/best-ecommerce-platform-australia-2026">guide to the best ecommerce platform in Australia</a>.
            </p>
          </div>
        </section>

        {/* ═══ SIX QUESTIONS + WHO RANKS ═══ */}
        <section className="section" id="choosing">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Choosing someone</div>
              <h2>Six questions that sort Sydney ecommerce and web design firms quickly</h2>
              <p className="lead">
                Put all six to every firm on your shortlist, FactoryJet included. The answers in the last column
                are the ones to listen for.
              </p>
            </div>
            <div className={`tablewrap ${styles.tableBox}`} tabIndex={0} role="region" aria-label="Comparison table">
              <table data-columns={3}>
                <thead>
                  <tr><th>Ask this</th><th className="fj">A good answer sounds like</th><th>Walk away if you hear</th></tr>
                </thead>
                <tbody>
                  {QUESTIONS.map((r) => (
                    <tr key={r.q}><th scope="row">{r.q}</th><td className="fj">{r.good}</td><td>{r.bad}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="au-split">
              <div>
                <h3>Why the list below is grouped and not ranked</h3>
                <p>
                  A ranking needs one yardstick, and a neighbourhood cafe and a national retailer do not share one.
                  The Shopify Plus agency that suits a retailer with fifty stores is the wrong choice for a
                  five-page tradie site. So the firms below are grouped by the kind of job, in the words each firm
                  uses about itself, and you can put the six questions to any of them.
                </p>
              </div>
              <div className="au-panel">
                <h3>Who Google showed on page one</h3>
                <p>
                  For “ecommerce website development sydney” on 11 October 2026, with directories removed, page one
                  held these sites. It is a record of the results page and a sensible place to start your own
                  research. It is not a recommendation.
                </p>
                <ul className="city-list">
                  {PAGE_ONE.map((d) => (<li key={d}><span>{d}</span></li>))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SYDNEY FIRMS (self-disclosure, ItemList from FIRMS) → ruled rows ═══ */}
        <section className="section platforms" id="sydney-firms">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Who else builds in Sydney</div>
                <h2>Sydney web design, Shopify and ecommerce firms, grouped by the work each one describes</h2>
              </div>
              <p>
                FactoryJet wrote this list and is on it. Nobody paid to be included, and it is not a ranking. The
                middle column says which kind of job each firm describes, and every note comes from that firm’s own
                website, read on 11 October 2026. Talk to two or three and pick the fit.
              </p>
            </div>
            <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Comparison table"><table className={styles.comparisonTable} data-comparison-layout><tbody>{FIRMS.map((f, i) => (
                <tr key={f.name} className={f.name === 'FactoryJet' ? 'plat plat-own' : 'plat'}><th><span className="capid">{String(i + 1).padStart(2, '0')}</span><div className="plat-name"><h3>{f.name}</h3>{f.name === 'FactoryJet' && <span className="plat-flag">That is us</span>}</div></th><td><p className="plat-fit">{f.suits}</p></td><td><p className="plat-build">
                    {f.note}{' '}
                    {f.name === 'FactoryJet' ? null : <a href={f.url} {...extLink}>{f.name} website</a>}
                  </p></td></tr>
              ))}</tbody></table></div>
            <p className="sub-note">
              Firms were taken from the results Google Australia showed for Sydney searches on 11 October 2026 and from
              pages AI assistants cited for the same questions. A listing is not an endorsement, and no firm asked to be
              included.
            </p>
          </div>
        </section>

        {/* ═══ RULES FOR A SYDNEY ONLINE STORE → facts + numbered list ═══ */}
        <section className="section facts" id="rules">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Selling online from New South Wales</div>
              <h2>Six rules a Sydney online store has to get right, with the regulator for each</h2>
              <p className="lead">
                Each rule below was read on the regulator’s own page on 11 October 2026 and links to it. We build
                them into the checkout, the order email and the policy pages.
              </p>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <div>
                    <h3>The six rules, in the order a new store meets them</h3>
                    <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Comparison table"><table className={styles.comparisonTable} data-comparison-layout data-regulator-records><tbody>{RULES.map((r) => (
                        <tr key={r.t}><th scope="row"><b>{r.t}.</b></th><td><p>{r.d}</p></td><td><a href={r.src.url} {...extLink}>{r.src.source}</a></td></tr>
                      ))}</tbody></table></div>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <h3>The limits of this list</h3>
                    <p>
                      This is a summary of what six public bodies publish, with the date we read each page. Treat
                      it as a checklist, and take legal or tax questions to your accountant or to the regulator’s
                      own page. It leaves out rules for particular products such as food, alcohol and electrical
                      goods.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ AI CONSULTING → facts ═══ */}
        <section className="section facts" id="ai-consultant-sydney">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">AI consultant Sydney</div>
              <h2>AI consulting and automation for Sydney businesses</h2>
              <p className="lead">
                About 110 searches a month are for an AI consultant in Sydney, with about 40 each for an AI agency
                and for AI automation. On 11 October 2026 Google showed both an AI Overview and a Maps pack for
                “ai consultant sydney”.
              </p>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><div>
                  <h3>What we build</h3>
                  <p>
                    FactoryJet designs, builds, implements and supports AI agents that sit inside the tools a business already
                    runs, including Xero, HubSpot, WhatsApp and ERPs such as Odoo and NetSuite. We also build AI
                    voice agents that answer calls, for small offices and for call centres. You own what we build.
                  </p>
                </div></div>
                <div className="fact"><div className="sec">§02</div><div>
                  <h3>The six practices we scope against</h3>
                  <p>
                    The National AI Centre’s guidance for AI adoption sets out six essential practices, from
                    deciding who is accountable to maintaining human control. We scope each agent against them: a
                    named owner, a risk check, testing before launch, monitoring after it, and a person who
                    approves anything that spends money or reaches a customer.
                  </p>
                </div></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <h3>How it is quoted</h3>
                  <p>
                    FactoryJet quotes the build, and any support you choose, as fixed prices in writing after a short
                    scoping call. We can keep managing the servers, AI models, APIs and maintenance, so your team does
                    not have to.
                  </p>
                  <p className="au-note">
                    Source: <a href={SRC_AI.url} {...extLink}>{SRC_AI.source}, {SRC_AI.title}</a>.
                    {' '}See <a href="/au/ai-consulting">AI consulting</a>, <a href="/au/ai-agents">AI agents and automation</a>,{' '}
                    <a href="/au/ai-receptionist">AI receptionist</a> and <a href="/au/ai-customer-service">AI customer service</a> for Australian businesses.
                  </p>
                </div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ WHICH OPTION FITS (<details>) → vlog ═══ */}
        <section className="vlog" id="which-option">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Which option fits you</div>
              <h2>A quick check: what does your Sydney business need first?</h2>
              <p>Pick the line closest to your situation. Each one points to the page that covers it in full.</p>
            </div>
            <div className={styles.adminLayout}><div className="ventries">
              <details className="ventry">
                <summary><h3>We want a new online store, or to move the one we have</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">This page is the right place.</span>
                <p>The free review comes first, so the scope fits the store you have. For the full service, see <a href="/au/ecommerce-development">ecommerce development in Australia</a>.</p>
              </details>
              <details className="ventry">
                <summary><h3>We are on Shopify, or have decided to be</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">Shopify development.</span>
                <p>We are a registered Shopify Partner. See <a href="/au/shopify-development">Shopify development for Australian businesses</a>.</p>
              </details>
              <details className="ventry">
                <summary><h3>We need a small website, up to five pages, and the content is mostly ready</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">7-day delivery.</span>
                <p>Websites up to 5 pages qualify for our 7-day delivery from an approved scope. See <a href="/au/small-business-web-design">small business web design</a>.</p>
              </details>
              <details className="ventry">
                <summary><h3>The store is fine, but Google and AI answers do not show it</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">Search, before a redesign.</span>
                <p>See <a href="/au/ecommerce-seo">ecommerce SEO</a> for rankings and <a href="/au/ai-seo">AI SEO</a> for ChatGPT, Perplexity and Google AI answers.</p>
              </details>
              <details className="ventry">
                <summary><h3>Our real problem is admin: orders, quotes and invoices copied by hand</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">An AI agent.</span>
                <p>See <a href="/au/ai-agents">AI agents built into Xero, HubSpot and your other tools</a>, or <a href="/au/accounts-payable-automation">accounts payable automation</a>.</p>
              </details>
              <details className="ventry">
                <summary><h3>We want to know where AI fits before we spend anything</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">AI consulting.</span>
                <p>A short written plan and one small first build. See <a href="/au/ai-consulting">AI consulting for Australian businesses</a>.</p>
              </details>
              <details className="ventry">
                <summary><h3>The phone rings when nobody can pick it up</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">An AI receptionist.</span>
                <p>A voice agent that answers calls and passes on messages. See <a href="/au/ai-receptionist">AI receptionist for Australian businesses</a>.</p>
              </details>
            </div><figure className={styles.adminPhoto}><img src="/images/au/sydney/sydney-admin-scope.webp" width={1200} height={800} loading="lazy" decoding="async" alt="An older woman in a blue shirt reads blank papers beside a plain laptop and an orange mug at a wooden desk" /></figure></div>
          </div>
        </section>

        {/* ═══ SIBLINGS + CITIES → agentdir + city pills ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">FactoryJet Australia</div>
              <h2>More services for Sydney businesses</h2>
            </div>
            <ul className="agentdir-grid">
              {[
                { h: '/au', t: 'FactoryJet Australia', d: 'Ecommerce, web design, AI agents and AI search for Australian businesses, in one place.' },
                { h: '/au/ecommerce-development', t: 'Ecommerce development', d: 'Stores for consumer and trade brands, with stock, GST and accounts connected.' },
                { h: '/au/shopify-development', t: 'Shopify development', d: 'Shopify and Shopify Plus stores, built by a registered Shopify Partner.' },
                { h: '/au/small-business-web-design', t: 'Small business web design', d: 'Websites of up to five pages with 7-day delivery, and the domain in your name.' },
                { h: '/au/ai-agents', t: 'AI agents & automation', d: 'Agents that work inside Xero, HubSpot and WhatsApp, with a person approving what matters.' },
                { h: '/au/ai-consulting', t: 'AI consulting', d: 'A written plan for where AI fits, and one small first build to judge it by.' },
              ].map((c) => (
                <li key={c.h}>
                  <a href={c.h}>
                    <span className="agentdir-t">{c.t}</span>
                    <span className="agentdir-l">{c.d}</span>
                    <span className="agentdir-go" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="city-links">
              <p>Web design and SEO in other Australian cities:</p>
              <ul className="city-list">
                <li><a href="/au/melbourne">Web design Melbourne</a></li>
                <li><a href="/au/brisbane">Web design Brisbane</a></li>
                <li><a href="/au/adelaide">Web design Adelaide</a></li>
                <li><a href="/au/canberra">Web design Canberra</a></li>
                <li><a href="/au">All of Australia</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ FAQ (Family A accordion; same FAQ_ITEMS array as the FAQPage JSON-LD) ═══ */}
        <AuFaq
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          heading="Ecommerce, web design and AI in Sydney: questions buyers ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within one business day."
        />

        {/* ═══ SOURCES → references ═══ */}
        <section className="section referencesSection references" id="sources">
          <div className="wrap">
            <div className="eyebrow">Sources</div>
            <div className="refs refs-claims">
              {CITATIONS.map((c) => (
                <div className="ref" key={c.id}>
                  <a href={c.url} target="_blank" rel="noopener noreferrer">{c.source}: {c.title}</a>
                  <p>{c.claim}</p>
                </div>
              ))}
            </div>
            <p className="au-note">
              Every source above was opened and read on 11 October 2026. Search volumes, results-page checks (AI Overview
              and Maps pack) and link counts were measured by FactoryJet with DataForSEO against Google Australia on
              24 September and 11 October 2026. Price ranges are market figures from{' '}
              <a href={SRC_KEEN.url} {...extLink}>{SRC_KEEN.source}</a>, not FactoryJet prices.
            </p>
          </div>
        </section>

        {/* ═══ FINAL CTA (light, US finalcta) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Next step</div>
              <h2>Find out what is holding your Sydney store back</h2>
              <p>
                Send the store address. We will tell you in writing which of the five problems on this page it
                has, and show you working software on your own data before you sign anything. The founder replies
                within one business day, Australian hours.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="Get a free store review" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/ecommerce-development">See ecommerce development</a>
            </div>
          </div>
        </section>

      </main>
      </div>

      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} />
    </>
  );
}
