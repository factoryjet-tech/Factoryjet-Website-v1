import type { Metadata } from 'next';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import Link from 'next/link';
import { Users, Megaphone, ClipboardList, Video, Search, Workflow, Check } from 'lucide-react';

import { usServiceAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import ComparisonTable from '@/components/v2/ComparisonTable';
import MidPageCTA from '@/components/v2/MidPageCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import JsonLd from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

import './tiktok-shop-agency.css';

const URL = 'https://factoryjet.com/services/tiktok-shop-agency';
const TITLE = 'TikTok Shop Agency for US Brands: Setup & Management | FactoryJet';

/* One array feeds both the visible breadcrumb trail and the BreadcrumbList schema. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'TikTok Shop Agency', url: URL },
];

/* ── SEO / Metadata ─────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: TITLE,
  description: 'TikTok Shop agency for US brands. We set up your shop, recruit creators, run TikTok Shop ads and LIVE selling, and manage it daily. Free shop audit.',
  keywords: [
    'tiktok shop agency',
    'tiktok shop agency usa',
    'tiktok shop management agency',
    'tiktok shop marketing agency',
    'tiktok shop partner agency',
    'tiktok shop setup agency',
    'tiktok shop management',
    'tiktok shop ads',
    'tiktok shop affiliate program',
    'best tiktok shop agency',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: TITLE,
    description:
      'We set up and run TikTok Shop for US brands: Seller Center setup, creator and affiliate programs, TikTok Shop ads, and LIVE selling, all by one senior in-house team. Free TikTok Shop audit.',
    url: URL,
    images: [
      { url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet TikTok Shop Agency' },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description:
      'We set up and run TikTok Shop for US brands: setup, creators, ads, and LIVE selling. Free TikTok Shop audit.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: URL,
    languages: usServiceAlternates['tiktok-shop-agency'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/* ── FAQ data (drives both the on-page accordion and the FAQPage schema) ────
   Buyer questions are grounded in Google People Also Ask for "tiktok shop agency",
   "tiktok shop management agency", "how much does a tiktok shop agency cost" and
   "tiktok shop partner" (DataForSEO, US, 2026-09-17). Creator-career questions
   (joining an agency, creator pay) are deliberately left out. Every platform fact
   is backed by a page listed in SOURCES below. */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'The basics' },
  { key: 'choosing', label: 'Choosing an agency' },
  { key: 'services', label: 'Services & channels' },
  { key: 'working', label: 'Working together' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  { category: 'basics', question: 'What does a TikTok Shop agency do?', answer: 'A TikTok Shop agency runs everything that turns TikTok content into sales: shop setup and catalog, TikTok Shop ads, affiliate and creator partnerships, LIVE selling, and listing fixes. Instead of hiring separate freelancers, you get one team that ties content and ad spend to orders and profit. FactoryJet does this for US brands, from the first Seller Center login to daily management.' },
  { category: 'basics', question: 'Is there an agency that can set up a TikTok Shop?', answer: 'Yes. TikTok Shop agencies set up shops for brands all the time. Setup means opening and verifying your Seller Center account, listing products, connecting your Shopify store, and setting shipping and return rules. Setup alone does not create sales, so the better agencies stay on to run creators, ads, and LIVE selling. FactoryJet does both for US brands, starting with a free audit.' },
  { category: 'basics', question: 'Is TikTok Shop worth it for brands in 2026?', answer: 'For most brands that sell physical products, yes, if you will commit to video. EMARKETER estimates TikTok Shop handles 18.2% of US social commerce sales and expects that share to reach 24.1% by 2027. The channel rewards brands that post short demo videos and run an active creator program. It disappoints brands that expect a product listing to sell on its own.' },
  { category: 'basics', question: 'Do I need an agency, or can I run TikTok Shop myself?', answer: 'If TikTok Shop is a small experiment, run it yourself. Once ads, a creator program, LIVE sessions, and daily content outgrow one person, most brands need help. An agency is worth it when the sales it adds are worth more than its fee. A free audit shows whether you are ready for that step or better off starting lean.' },
  { category: 'basics', question: 'Is TikTok Shop legit and safe for brands?', answer: 'Yes. TikTok Shop is TikTok’s own in-app store, and buyers pay through TikTok’s checkout. For a brand, the real risks are operational, not fraud: late shipping, weak videos, or thin reviews get a shop penalized. Run it well and the low barrier that lets competitors in becomes your advantage, because buyers reward the sellers they can trust.' },
  { category: 'basics', question: 'What is GMV, and how do you measure success?', answer: 'GMV means gross merchandise value, the total value of the sales your shop makes. We manage to GMV and profit, not views or likes. That means tracking what each ad dollar returns, how much creators sell, and what is left after fees, commissions, and shipping. Views do not pay the bills, so our reports center on the numbers that decide whether TikTok Shop makes you money.' },
  { category: 'basics', question: 'How much does TikTok Shop charge sellers?', answer: 'TikTok Shop takes a referral fee on every sale, and the rate depends on the product category. 2026 fee guides from Printify and Social Tale put it at about 6% to 8% of the sale for most products, and a few categories pay less. You also pay the commission you set for creators, plus shipping or Fulfilled by TikTok costs if you use them. TikTok changes its rates often, so check Seller Center before you set prices.' },

  { category: 'choosing', question: 'How much does a TikTok Shop agency cost?', answer: 'It depends on how much of the work the agency runs. Cost rises with the number of creators managed each month, the size of your catalog, your ad spend, how much content gets made, and how many LIVE sessions you run. We do not sell fixed packages. After a free audit we scope the work to your goals and share a clear quote, so you only pay for what will move sales.' },
  { category: 'choosing', question: 'How do TikTok Shop agencies get paid?', answer: 'Most use one of three models: a flat monthly retainer, a percentage of the sales (GMV) they manage, or a smaller retainer plus a percentage. A retainer is easier to budget. A percentage ties the fee to results but can get expensive as sales grow. Whichever model an agency uses, ask what happens to the fee as your sales rise and what you get each month.' },
  { category: 'choosing', question: 'Which TikTok Shop agencies are the best?', answer: 'There is no single best agency, only the best fit for your brand. Look for proven TikTok Shop results in a category like yours, a team that runs creators and ads together, and reports built on sales and profit instead of views. Well-known names include Pattern, MediaLabs, and inBeat, each with a different focus. Shortlist two or three and compare the plan each one proposes for your first 90 days.' },
  { category: 'choosing', question: 'How do I find a TikTok Shop agency?', answer: 'Start inside TikTok Shop Seller Center. Under Apps and Services, then Agencies and Services, you can browse TikTok Shop Partners. Then look at agencies that publish TikTok Shop work for brands like yours, and ask other sellers in your category who they use. Run every option through the checklist on this page before you sign anything.' },
  { category: 'choosing', question: 'What is a TikTok Shop Partner?', answer: 'A TikTok Shop Partner, or TSP, is an outside agency or service provider that TikTok recognizes to help sellers with shop operations, content, and creator matching. Sellers give a partner access through a partner link. That access can last up to one year, and cancelling it removes the partner’s access to your shop data.' },
  { category: 'choosing', question: 'Should I only hire an official TikTok Shop Partner?', answer: 'Not necessarily. A partner listing tells you TikTok recognizes the agency, which is a useful signal. It does not tell you whether the agency has grown a brand like yours, who will actually do the work, or whether it can connect TikTok Shop to your store and warehouse. Treat the listing as one check among several, next to real results and references.' },
  { category: 'choosing', question: 'How can I tell if a TikTok Shop agency is legit?', answer: 'Check four things. They can show TikTok Shop results for real brands, measured in sales rather than views. They ask for limited access to your shop and never ask for your password. They explain their fees before you sign. And they never promise guaranteed sales, because no agency controls TikTok’s algorithm or what buyers decide to do.' },

  { category: 'services', question: 'Do you manage TikTok Shop ads?', answer: 'Yes. Since July 2025, GMV Max has been TikTok’s default campaign type for Shop ads. You set a target return, and TikTok decides which products and videos to show and where. Our job is to feed it well: choose the products, supply strong brand and creator videos, set realistic targets, and cut what loses money. We report on sales and profit, not views.' },
  { category: 'services', question: 'Do you run the TikTok Shop affiliate and creator program?', answer: 'Yes, and it is often the biggest lever. We find and vet creators, set commissions they will actually choose, brief them, send samples, and manage the relationships over time, so a steady group of creators keeps selling your product. We treat the creator program as a core service, not an add-on, because it is usually the fastest way to reach new buyers on TikTok Shop.' },
  { category: 'services', question: 'Can you manage our TikTok Shop account end to end?', answer: 'Yes. Full TikTok Shop management covers the daily work: Seller Center operations, catalog and product variations, orders and inventory, reviews and buyer questions, policy compliance, and coordination across ads, creators, and content. We keep the shop healthy so small issues do not turn into suppressed listings, and your team can focus on product instead of admin.' },
  { category: 'services', question: 'Do you produce content and run LIVE selling?', answer: 'Yes. We plan and produce short product videos and run scheduled LIVE shopping sessions, either with your team or with creators. Content is the engine on TikTok Shop, so we treat it as an always-on system rather than one-off posts, and we use LIVE to add urgency and answer buyer questions in real time.' },
  { category: 'services', question: 'Do you optimize our product listings?', answer: 'Yes. We fix titles, images, and product details so that when a video or creator sends a buyer to your listing, the buyer actually checks out. We also work on reviews and pricing, because a listing has to close the sale after the tap. Great content sending traffic to a weak listing wastes the reach, so we fix both together.' },
  { category: 'services', question: 'Can you help us launch a new product on TikTok Shop?', answer: 'Yes. A launch needs a plan, not just a live listing. We handle a listing that is ready to convert, a launch push with creators, an early affiliate campaign, and a review plan that follows TikTok’s rules. The goal is early momentum, because a product with sales, reviews, and creator videos behind it is far easier to scale than one starting cold.' },
  { category: 'services', question: 'Do you also sell on Amazon and our own store?', answer: 'Yes. TikTok Shop is usually the channel that creates demand, not the whole strategy. We run it alongside Amazon and your own store so pricing, inventory, and branding stay consistent. If you want one team across marketplaces and your site rather than three disconnected ones, that is exactly how we work.' },
  { category: 'services', question: 'Do you handle fulfillment on TikTok Shop?', answer: 'We manage the fulfillment choices that affect sales and ratings: shipping settings, dispatch speed, and whether Fulfilled by TikTok fits your catalog. Fast, reliable shipping is not optional on TikTok Shop, since late delivery gets you penalized and hurts reviews. We do not run your warehouse, but we make sure your fulfillment protects your shop’s standing.' },
  { category: 'services', question: 'What kind of creators can you get for our brand?', answer: 'We match creators to your product and margin rather than chasing follower counts. That usually means a mix of small and mid-size creators in your niche whose audiences actually buy, plus a few larger ones for reach. Ten well-matched creators posting often beats one big name posting once, so we build a roster, not a single splashy deal.' },
  { category: 'services', question: 'What shipping numbers does TikTok Shop check?', answer: 'TikTok grades every shop on shipping and service. Two numbers matter most: keep your late dispatch rate, the share of orders you ship late, at or below 4%, and keep on-time delivery at 80% or higher. Shops that fall far behind can be penalized by TikTok, and a weaker Shop Performance Score can slow how fast you get paid. We watch these numbers daily so they never become a surprise.' },
  { category: 'services', question: 'How do Spark Ads work with creator videos?', answer: 'Spark Ads run a creator’s own post as an ad, from their account, with the likes and comments it already earned. The creator gives you an authorization code to allow it. Because the ad still looks like the creator’s post, it keeps the trust that made the video sell. We use Spark Ads to put budget behind creator videos that are already selling on their own.' },
  { category: 'services', question: 'How do you connect TikTok Shop to Shopify?', answer: 'For Shopify stores, TikTok offers an official app. It syncs your products to TikTok and lets you manage TikTok Shop orders and inventory from your Shopify admin. We set it up, clean up product data so listings go live without errors, and check that stock levels match. For large catalogs, or business software like NetSuite that runs your orders, stock and accounting, we build a custom connection instead.' },

  { category: 'working', question: 'How long until we see results on TikTok Shop?', answer: 'Creator videos can start driving sales within weeks once a few of them land, but a steady, profitable shop takes months of testing products, creators, and offers. We start with the work that pays back fastest, usually the creator program and listing fixes, so early wins help fund the longer plays. The free audit gives you a realistic plan for your category.' },
  { category: 'working', question: 'Do I have to sign a long contract?', answer: 'No. We work on short, rolling terms and earn the renewal each month with results. If a bigger project like a full launch makes sense, we scope it clearly up front so there are no surprises. Good agencies keep clients by performing, not by locking them into a year they cannot leave.' },
  { category: 'working', question: 'Who will actually work on my account?', answer: 'FactoryJet’s senior in-house team. The TikTok Shop specialists on your kickoff call are the people doing the daily work, not a sales team that hands you to someone else after you sign. You talk directly to the people running your ads, creators, and shop operations, so questions get answered by someone who knows your account.' },
  { category: 'working', question: 'What size brands do you work with?', answer: 'We work with US small and mid-market brands, from sellers making their first serious push into TikTok Shop to established brands ready to scale creators and ads. We scope the engagement to your stage and catalog rather than forcing one package on everyone, and we will tell you honestly if you are too early to need us yet.' },
  { category: 'working', question: 'How do you report on TikTok Shop performance?', answer: 'You get a dashboard tied to GMV, return on ad spend, creator-driven sales, and profit, plus a plain-language monthly review of what we did, what it returned, and what comes next. We report on the numbers that decide whether TikTok Shop makes you money, not views dressed up as progress.' },
  { category: 'working', question: 'How do we get started?', answer: 'Request the free TikTok Shop audit with your brand and your email. We come back with a review of your shop, ads, creator program, and content, plus a suggested 90-day plan. Then you decide if you want us to run it. No long sales cycle, and the audit is yours to keep either way.' },
];

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'TikTok Shop Agency',
  serviceType: 'TikTok Shop setup, management and social commerce growth',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet' },
  areaServed: { '@type': 'Country', name: 'United States' },
  url: URL,
  description:
    'FactoryJet is a TikTok Shop agency for US brands. It sets up TikTok Shop in Seller Center and runs creator and affiliate programs, TikTok Shop ads, content and LIVE selling, listing fixes, and connections to Shopify, Amazon and warehouse systems as one in-house team.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'TikTok Shop growth services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'TikTok Shop setup in Seller Center' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'TikTok Shop account management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'TikTok Shop ads (GMV Max and Spark Ads)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'TikTok Shop affiliate and creator program management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content production and LIVE selling' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Product listing and catalog optimization' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'TikTok Shop integration with Shopify, Amazon and ERP systems' } },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

/* ── Small building blocks ───────────────────────────────────────────────── */
const CHANNELS = [
  { Icon: Users, title: 'Affiliate & creator program', body: 'We find, vet, and manage the creators who sell your product for a commission you set. Creators are often the fastest way to reach new buyers on TikTok Shop.', link: '/blog/how-to-sell-on-tiktok-shop-2026', label: 'How TikTok Shop selling works', span: 'w3' },
  { Icon: Megaphone, title: 'TikTok Shop ads', body: 'GMV Max campaigns, TikTok’s default for Shop ads, plus Spark Ads that run a creator’s own post. Judged on sales and return on ad spend, not views.', link: '/services/ecommerce-growth-agency', label: 'Full-funnel growth', span: 'w3' },
  { Icon: ClipboardList, title: 'Shop setup & management', body: 'Seller Center setup, catalog, orders, reviews, and policy checks, so daily operations never become the bottleneck.', link: '/contact', label: 'Talk to our team', span: 'cell' },
  { Icon: Video, title: 'Content & LIVE selling', body: 'Short product videos and scheduled LIVE shopping streams that sell with demos, urgency, and real-time answers.', link: '/portfolio', label: 'See our work', span: 'cell' },
  { Icon: Search, title: 'Listing & catalog fixes', body: 'Titles, images, reviews, and pricing, so a buyer who taps through from a video actually checks out.', link: '/services/ecommerce-seo', label: 'Ecommerce SEO', span: 'cell' },
];

const LEVERS = [
  { b: 'A creator and affiliate engine', p: 'Creators earn a commission on each sale, so your product spreads without you making every video.' },
  { b: 'Ads that scale winners', p: 'GMV Max and Spark Ads behind your best videos and products, judged on profit, not views.' },
  { b: 'LIVE selling', p: 'Scheduled LIVE shopping streams that add urgency and answer buyer questions while they are ready to buy.' },
  { b: 'Content as a system', p: 'A steady stream of short demo videos, not one-off posts, so TikTok keeps finding new buyers for you.' },
  { b: 'Listings that close the sale', p: 'Titles, images, reviews, and price, so the product page closes what your content opens.' },
  { b: 'Reliable fulfillment', p: 'Ship on time and pack well, so you keep good ratings and stay clear of shop penalties.' },
];

/* How we build the creator program. Method only: no invented rates or results. */
const CREATOR_STEPS = [
  { b: 'Send samples to the right creators', p: 'We pick creators whose followers match your buyers, not just big accounts, and send them product to try. Ten small creators posting often usually beat one big name posting once.' },
  { b: 'Set commissions creators will choose', p: 'Creators compare commissions across brands before they pick a product. We set one rate open to every creator and custom rates for the creators we invite, so your product is worth their time and your margin stays protected.' },
  { b: 'Put ad money behind proven videos', p: 'When a creator video starts selling on its own, we ask for its Spark Ads code or let GMV Max use it, so budget goes to what already works.' },
  { b: 'Run LIVE sessions on a schedule', p: 'Regular LIVE shopping streams with demos, limited-time bundles, and real-time answers, so buyers who are close to deciding can check out on the spot.' },
];

/* How to choose a TikTok Shop agency. Honest checklist, usable with any agency. */
const CHECKS = [
  { b: 'Proof in a category like yours', p: 'Ask for TikTok Shop results in sales, not views, for products like yours. A win in beauty says little about supplements or home goods.' },
  { b: 'Creators and ads, not ads alone', p: 'Ask how they find, vet, and pay creators. Ads-only agencies skip the creator program, and a vague answer means you will end up doing the outreach.' },
  { b: 'A partner listing, then a closer look', p: 'TikTok lists the agencies it recognizes, called TikTok Shop Partners, in Seller Center under Apps and Services. A listing is a good sign, not proof they can grow your shop.' },
  { b: 'Limited access, never your password', p: 'A good agency asks for limited access you can take back later. If they ask for your Seller Center password, walk away.' },
  { b: 'Reports on sales and profit', p: 'You should see GMV, return on ad spend, and margin every month. If the report leads with views and followers, keep looking.' },
  { b: 'Clear scope, no long lock-in', p: 'You should know what you get each month and how the fee works. Be wary of year-long contracts before an agency has shown results.' },
];

const STEPS = [
  { n: 'Step 01', h: 'Audit', p: 'A free review of your shop, ads, creator program, and content, showing exactly where sales leak.' },
  { n: 'Step 02', h: 'Plan', p: 'A 90-day TikTok Shop growth plan, ranked by profit impact. Yours to keep.' },
  { n: 'Step 03', h: 'Build', p: 'We start creator outreach, restructure ads, set a LIVE schedule, and fix listings fast.' },
  { n: 'Step 04', h: 'Scale', p: 'Weekly testing and profit-based reporting. We double down on what works and cut what does not.' },
];

const PILLARS = [
  { k: 'One team', h: 'Creators, ads, and shop ops together', p: 'Creators, ads, listings, and operations handled by people who talk daily. No finger-pointing between three vendors.' },
  { k: 'Senior', h: 'Senior people do the work', p: 'The TikTok Shop specialists on your kickoff call run your account day to day. Twelve years in commerce and 500+ businesses served.' },
  { k: 'Profit-first', h: 'We manage to sales and profit, not views', p: 'Judged on GMV (your total sales) and what is left after fees and ad spend, so growth reaches your bank account.' },
];

const PROGRAMS = ['Seller Center', 'Spark Ads', 'GMV Max', 'Affiliate Center', 'LIVE Shopping', 'Fulfilled by TikTok'];

/* Cited market stats. Every figure was checked against the linked source on 2026-09-17. */
const STATS = [
  { v: '$15.82B', l: 'in US TikTok Shop sales expected for 2025, EMARKETER estimates, after the channel grew another 108% that year.', src: 'EMARKETER, 2025', href: 'https://www.emarketer.com/press-releases/tiktok-shop-makes-up-nearly-20-of-social-commerce-in-2025/' },
  { v: '18.2%', l: 'of US social commerce sales now run through TikTok Shop, a share EMARKETER expects to reach 24.1% by 2027.', src: 'EMARKETER, 2025', href: 'https://www.emarketer.com/press-releases/tiktok-shop-makes-up-nearly-20-of-social-commerce-in-2025/' },
  { v: '407%', l: 'growth in TikTok Shop’s US sales in 2024, before it added another 108% the following year.', src: 'EMARKETER, 2025', href: 'https://www.emarketer.com/press-releases/tiktok-shop-makes-up-nearly-20-of-social-commerce-in-2025/' },
];

/* Named TikTok Shop agencies. Each description is based only on what that agency
   says on its own TikTok Shop page (checked 2026-09-17, links in SOURCES). */
const RIVALS = [
  { b: 'Pattern', p: 'Offers two models: it can buy your inventory and sell through your TikTok account, or manage the shop while you keep inventory and fulfillment. Says it was named TikTok Shop’s Annual Strategic Partner of the Year. A fit if you want to hand off almost everything.' },
  { b: 'MediaLabs', p: 'A TikTok Shop specialist covering shop management, affiliate programs, UGC (videos made by creators and customers), and TikTok ads. Lists itself as an official TikTok partner. A fit if you want a TikTok-only specialist.' },
  { b: 'inBeat', p: 'An influencer, UGC, and paid media agency with a TikTok Shop service. A fit if creator content is the main thing you are missing.' },
  { b: 'Where FactoryJet fits', p: 'One team that runs the shop, creators, ads, and LIVE selling, and connects TikTok Shop to your Shopify store, Amazon, and warehouse. A fit if TikTok Shop has to work with the rest of your commerce setup.' },
];

/* Sources for the platform facts, FAQ answers and agency descriptions above. */
const SOURCES = [
  { t: 'EMARKETER: TikTok Shop makes up nearly 20% of social commerce in 2025', href: 'https://www.emarketer.com/press-releases/tiktok-shop-makes-up-nearly-20-of-social-commerce-in-2025/' },
  { t: 'Hubfluence: What is a TikTok Shop Partner (TSP)? (April 2026)', href: 'https://www.hubfluence.io/blog/what-is-a-tiktok-shop-partner' },
  { t: 'Hubfluence: TikTok Shop fulfillment metrics explained (April 2026)', href: 'https://www.hubfluence.io/blog/tiktok-shop-fulfillment-metrics' },
  { t: 'Hubfluence: TikTok Shop ads explained (June 2026)', href: 'https://www.hubfluence.io/blog/tiktok-shop-ads-explained' },
  { t: 'Influencer Marketing Hub: TikTok Shop GMV Max campaigns explained (July 2026)', href: 'https://influencermarketinghub.com/tiktok-shop-gmv-max-campaigns-explained/' },
  { t: 'Printify: TikTok Shop fees explained (2026)', href: 'https://printify.com/blog/tiktok-shop-fees/' },
  { t: 'Social Tale: How much does a TikTok Shop agency cost in 2026? (February 2026)', href: 'https://socialtale.co/blog/how-much-does-tiktok-shop-agency-cost' },
  { t: 'Shopify App Store: the TikTok app for Shopify, by TikTok Inc.', href: 'https://apps.shopify.com/tiktok' },
  { t: 'Pattern: TikTok Shop agency and management services', href: 'https://www.pattern.com/social-commerce/tiktok-shop' },
  { t: 'MediaLabs: TikTok Shop agency', href: 'https://medialabs-co.com/tiktok-shop-agency' },
  { t: 'inBeat: TikTok Shop agency', href: 'https://inbeat.agency/tiktok-shop-agency' },
];

const yes = <span style={{ color: '#177a48', fontWeight: 700 }}>Yes</span>;
const no = (t: string) => <span style={{ color: '#b23e13' }}>{t}</span>;
const partial = (t: string) => <span style={{ color: '#8a5e00' }}>{t}</span>;

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function TikTokShopAgencyPage() {
  return (
    <>
      <JsonLd data={serviceSchema} id="service-schema" />
      <JsonLd data={faqSchema} id="faq-schema" />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <SiteHeader locale="us" />

      <main className="tts">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />
        {/* HERO */}
        <section className="tts-hero">
          <div className="tts-wrap tts-hero-grid">
            <div className="tts-hero-copy">
              <span className="tts-pill"><span className="d" /> TikTok Shop Agency · United States</span>
              <h1 className="tts-h1 disp">TikTok Shop agency for US brands, from setup to <span className="u">sales</span></h1>
              <p className="tts-lead">We set up your TikTok Shop, find creators who sell it for you, run your TikTok Shop ads and LIVE shopping streams, and handle the daily work. One senior in-house team with 12 years in commerce.</p>
              <HeroInlineForm region="us" source="us_services_tiktok_shop_agency_hero" submitLabel="Get my free audit" />
              <div className="tts-trust">
                <span className="tk"><Check size={15} strokeWidth={2.4} /> 500+ businesses served</span>
                <span className="tk"><Check size={15} strokeWidth={2.4} /> 12 years in commerce</span>
                <span className="tk"><Check size={15} strokeWidth={2.4} /> In-house senior team</span>
              </div>
            </div>
            <div className="tts-hero-visual">
              <div className="tts-hero-photo">
                <img src="/images/us/services/tiktok-shop-agency/hero-tiktok-shop-live.webp" alt="Creator running a LIVE shopping session to sell products on TikTok Shop" width={506} height={760} loading="eager" fetchPriority="high" decoding="async" />
              </div>
              {/* Illustrative, qualitative visual only (not a specific client claim) */}
              <div className="tts-metric">
                <span aria-hidden="true">
                  <svg width="48" height="26" viewBox="0 0 48 26" fill="none"><polyline points="2,22 11,18 19,20 27,12 35,14 46,3" stroke="#F05A28" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="46" cy="3" r="2.6" fill="#F05A28" /></svg>
                </span>
                <div>
                  <span className="hm-lab">Shop GMV</span>
                  <b className="hm-val">Trending up<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#177a48" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M17 7H8M17 7v9" /></svg></b>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ANSWER-FIRST: answers the top People Also Ask question for "tiktok shop agency" */}
        <section className="tts-answer">
          <div className="tts-wrap in">
            <div className="q disp"><span className="ql">Quick answer</span>Is there an agency that can set up a TikTok Shop?</div>
            <div className="a"><p><b>Yes. A TikTok Shop agency can set up your shop and then run it for you.</b> Setup means opening your account in Seller Center (TikTok&rsquo;s dashboard for sellers), listing your products, connecting your Shopify store, and setting shipping and return rules. Running it means finding creators, managing TikTok Shop ads and LIVE selling, and keeping the shop in good standing. FactoryJet does both for US brands, and every engagement starts with a free audit.</p></div>
          </div>
        </section>

        {/* PROGRAM BAR */}
        <section className="tts-logobar">
          <div className="tts-wrap">
            <div className="t">Working across the TikTok Shop programs that drive sales</div>
            <div className="tts-logos">{PROGRAMS.map((p) => <span key={p}>{p}</span>)}</div>
          </div>
        </section>

        {/* MARKET STATS (cited) */}
        <section className="tts-sec pt0">
          <div className="tts-wrap">
            <div className="tts-sh"><span className="tts-eyebrow">Why TikTok Shop</span><h2 className="disp">Why TikTok Shop is worth the effort</h2><p>TikTok Shop has turned into a real US sales channel, fast. These EMARKETER estimates show why brands are moving now.</p></div>
            <div className="tts-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 14 }}>
              {STATS.map((s) => (
                <div key={s.v} className="tts-crystal" style={{ padding: '24px 24px 22px' }}>
                  <div className="disp" style={{ fontSize: 34, color: '#F05A28', lineHeight: 1.04 }}>{s.v}</div>
                  <p style={{ color: '#3a3a38', fontSize: 15, lineHeight: 1.5, marginTop: 8 }}>{s.l}</p>
                  <a href={s.href} target="_blank" rel="noopener noreferrer nofollow" style={{ display: 'inline-block', marginTop: 12, fontSize: 12.5, color: '#B23E13', textDecoration: 'underline', textUnderlineOffset: 2 }}>Source: {s.src}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENTO CHANNELS */}
        <section className="tts-sec">
          <div className="tts-wrap">
            <div className="tts-sh"><span className="tts-eyebrow">What we run</span><h2 className="disp">Full-service TikTok Shop growth, under one roof</h2><p>Many agencies only run ads. Growing on TikTok Shop needs creators, content, ads, and shop operations moving together. Each is a service we run in-house.</p></div>
            <div className="tts-bento">
              {CHANNELS.map(({ Icon, title, body, link, label, span }) => (
                <Link key={title} href={link} className={`tts-crystal tts-bcard ${span}`}>
                  <div className="ic"><Icon size={22} strokeWidth={2} /></div>
                  <h3 className="disp">{title}</h3>
                  <p>{body}</p>
                  <span className="lk">{label} <span className="arw">→</span></span>
                </Link>
              ))}
              <div className="tts-crystal tts-bcard w6">
                <div>
                  <div className="ic"><Workflow size={22} strokeWidth={2} /></div>
                  <h3 className="disp">TikTok Shop + your store + AI</h3>
                  <p>We connect TikTok Shop with <Link href="/services/amazon-agency" className="tts-inline-link">Amazon</Link> and your Shopify or other online store, and use AI for content, ad creative, and reporting, so the channels help each other instead of competing. Many brands add <Link href="/services/walmart-marketplace-agency" className="tts-inline-link">Walmart Marketplace</Link> as a third channel.</p>
                </div>
                <div className="mini"><span>Cross-channel</span><span>AI content</span><span>AI reporting</span><span>Amazon · Shopify</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* LISTICLE 1 */}
        <section className="tts-sec pt0">
          <div className="tts-wrap">
            <div className="tts-sh"><span className="tts-eyebrow">The playbook</span><h2 className="disp">The 6 levers we pull to grow TikTok Shop sales</h2></div>
            <div className="tts-list">
              {LEVERS.map((l) => (
                <div key={l.b} className="tts-crystal tts-li"><span className="num" /><div><b>{l.b}</b><p>{l.p}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        {/* CREATOR PROGRAM */}
        <section className="tts-sec pt0">
          <div className="tts-wrap">
            <div className="tts-sh">
              <span className="tts-eyebrow">Creator program</span>
              <h2 className="disp">How we build a TikTok Shop creator program that sells</h2>
              <p>On TikTok Shop, creators are often the fastest route to new buyers. This is the order we build the program in.</p>
            </div>
            <div className="tts-list">
              {CREATOR_STEPS.map((s) => (
                <div key={s.b} className="tts-crystal tts-li"><span className="num" /><div><b>{s.b}</b><p>{s.p}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        {/* DARK */}
        <section className="tts-dark">
          <div className="tts-wrap tts-sec">
            <div className="tts-sh"><span className="tts-eyebrow">Why FactoryJet</span><h2 className="disp">Built to grow sales, not to bill you for activity</h2><p>Three reasons to run your TikTok Shop with us.</p></div>
            <div className="tts-pillars">
              {PILLARS.map((p) => (
                <div key={p.k} className="tts-pillar"><div className="k">{p.k}</div><h3 className="disp">{p.h}</h3><p>{p.p}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="tts-sec">
          <div className="tts-wrap">
            <div className="tts-sh"><span className="tts-eyebrow">How it works</span><h2 className="disp">From free audit to steady TikTok Shop growth</h2></div>
            <div className="tts-steps">
              {STEPS.map((s) => (
                <div key={s.n} className="tts-step"><div className="n">{s.n}</div><h3 className="disp">{s.h}</h3><p>{s.p}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW TO CHOOSE (checklist) */}
        <section className="tts-sec pt0">
          <div className="tts-wrap">
            <div className="tts-sh"><span className="tts-eyebrow">Before you hire anyone</span><h2 className="disp">How to choose a TikTok Shop agency</h2><p>Use this checklist with any agency, including us. The best agency for you is the one that can prove results with products like yours. To budget for it, read our breakdown of <Link href="/blog/tiktok-shop-fees-and-agency-cost-2026" className="tts-inline-link">TikTok Shop fees and what an agency costs</Link>.</p></div>
            <div className="tts-list">
              {CHECKS.map((c) => (
                <div key={c.b} className="tts-crystal tts-li"><span className="num" /><div><b>{c.b}</b><p>{c.p}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        {/* MID-PAGE CTA (light band, real link, no client JS) */}
        <MidPageCTA
          headline="Want a second opinion on your TikTok Shop?"
          sub="Send us your brand or shop link. We will review your listings, creator program, and ads, and send back a plain-English 90-day plan you can keep."
          label="Get a free TikTok Shop audit"
        />

        {/* CONNECTED TO YOUR STORE */}
        <section className="tts-sec">
          <div className="tts-wrap">
            <div className="tts-sh">
              <span className="tts-eyebrow">Connected to your store</span>
              <h2 className="disp">TikTok Shop connected to Shopify, Amazon, and your warehouse</h2>
              <p>TikTok Shop works best when it is not a separate island. We connect it to the systems you already run, so stock, orders, and tracking stay in sync. For the details, read our guide to <Link href="/blog/tiktok-shop-amazon-shopify-plus-multi-channel-inventory-sync-2026" className="tts-inline-link">syncing inventory across TikTok Shop, Amazon, and Shopify Plus</Link>.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
              <div className="tts-crystal" style={{ padding: '24px' }}>
                <h3 className="disp" style={{ fontSize: 20, marginBottom: 12 }}>Shopify and your own store</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: '#3a3a38' }}>
                  We set up TikTok&rsquo;s official Shopify app, which syncs your products to TikTok and lets you manage TikTok Shop orders and inventory from Shopify. Running BigCommerce, WooCommerce, or Magento instead? We connect those too.
                </p>
              </div>
              <div className="tts-crystal" style={{ padding: '24px' }}>
                <h3 className="disp" style={{ fontSize: 20, marginBottom: 12 }}>Amazon and Walmart</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: '#3a3a38' }}>
                  Prices, stock, and product details stay consistent across TikTok Shop, <Link href="/services/amazon-agency" className="tts-inline-link">Amazon</Link>, and <Link href="/services/walmart-marketplace-agency" className="tts-inline-link">Walmart Marketplace</Link>, so a viral video never sells stock you already sold somewhere else.
                </p>
              </div>
              <div className="tts-crystal" style={{ padding: '24px' }}>
                <h3 className="disp" style={{ fontSize: 20, marginBottom: 12 }}>Your business software and warehouse</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: '#3a3a38' }}>
                  As orders grow, we connect TikTok Shop to business software like NetSuite or QuickBooks, or to your 3PL (the outside warehouse that packs and ships for you), so orders route on their own and tracking numbers flow back to TikTok.
                </p>
              </div>
              <div className="tts-crystal" style={{ padding: '24px' }}>
                <h3 className="disp" style={{ fontSize: 20, marginBottom: 12 }}>Stock-outs during a spike</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: '#3a3a38' }}>
                  One creator video can empty your shelves fast. Low-stock alerts and reorder points turn a spike into sales instead of cancellations that hurt your shop&rsquo;s standing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON (reused v2 component) */}
        <section className="tts-sec pt0">
          <div className="tts-wrap">
            <ComparisonTable
              eyebrow="COMPARE"
              headline="FactoryJet vs an ads-only agency vs a freelancer vs in-house"
              columns={[
                { label: 'FactoryJet', isFactoryJet: true },
                { label: 'Ads-only agency' },
                { label: 'Freelancer' },
                { label: 'In-house hire' },
              ]}
              rows={[
                { feature: 'Ads + affiliates + content + LIVE', values: [yes, no('Ads only'), no('One skill'), partial('Depends on hire')] },
                { feature: 'Creator network to recruit from', values: [yes, no('Rarely'), partial('Maybe'), no('You build it')] },
                { feature: 'Seller Center + fulfillment health', values: [yes, partial('Maybe'), no('Rarely'), partial('Depends')] },
                { feature: 'Content production', values: [yes, no('No'), partial('Sometimes'), partial('Depends')] },
                { feature: 'Connects TikTok Shop to your store and warehouse', values: [yes, no('Rarely'), no('Rarely'), partial('Depends on hire')] },
                { feature: 'Profit-based reporting', values: [yes, partial('Ad metrics'), no('Limited'), yes] },
              ]}
            />
          </div>
        </section>

        {/* NAMED AGENCIES: answers "Which TikTok Shop agencies are the best?" */}
        <section className="tts-sec pt0">
          <div className="tts-wrap">
            <div className="tts-sh"><span className="tts-eyebrow">Market comparison</span><h2 className="disp">Which TikTok Shop agencies are the best?</h2><p>There is no single best agency, only the best fit. Here is how a few well-known names differ, based on what each one says on its own site.</p></div>
            <div className="tts-list">
              {RIVALS.map((r) => (
                <div key={r.b} className="tts-crystal tts-li"><span className="num" /><div><b>{r.b}</b><p>{r.p}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        {/* E-E-A-T */}
        <section className="tts-sec pt0">
          <div className="tts-wrap tts-eeat-grid">
            <div className="tts-crystal tts-eeat">
              <div><img className="tts-avatar" src="/bhavesh_image.jpg" alt="Bhavesh Barot, Founder of FactoryJet" width={76} height={76} loading="lazy" decoding="async" /></div>
              <div>
                <div className="role">Led by the founder</div>
                <h3 className="disp">Bhavesh Barot, Founder of FactoryJet</h3>
                <p>Twelve years building and scaling commerce for 500+ businesses. Every engagement is run by FactoryJet&rsquo;s senior in-house team, not handed to subcontractors. You talk to the people doing the work.</p>
                <div className="tts-reco"><span>Listed on</span> <b>Clutch</b> <b>GoodFirms</b> <b>DesignRush</b> <b>SoftwareSuggest</b></div>
              </div>
            </div>
            <div className="tts-teamframe">
              <img src="/images/us/services/service-team.webp" alt="The FactoryJet team at work" width={800} height={600} loading="lazy" decoding="async" />
            </div>
          </div>
        </section>

        {/* FAQ (reused v2 component, white background) */}
        <FAQ
          bgClassName="bg-white"
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="TikTok Shop agency FAQs"
          lead="What US brands ask most about hiring a TikTok Shop agency and selling on TikTok Shop. Straight answers."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* SOURCES */}
        <section className="tts-sec pt0">
          <div className="tts-wrap">
            <span className="tts-eyebrow">Sources</span>
            <p style={{ color: '#3a3a38', fontSize: 15, lineHeight: 1.55, marginTop: 10, maxWidth: '62ch' }}>The TikTok Shop facts on this page come from the pages below. TikTok changes its rules and fees often, so check Seller Center for the latest before you act.</p>
            <ul style={{ marginTop: 14, display: 'grid', gap: 8 }}>
              {SOURCES.map((s) => (
                <li key={s.href} style={{ fontSize: 14, lineHeight: 1.5 }}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer nofollow" style={{ color: '#B23E13', textDecoration: 'underline', textUnderlineOffset: 2 }}>{s.t}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="tts-sec pt0" id="final-cta">
          <div className="tts-wrap">
            <div className="tts-finalcta">
              <span className="tts-eyebrow">Get started</span>
              <h2 className="disp">See what your TikTok Shop is leaving on the table</h2>
              <p>Send us your brand and get a free, no-obligation TikTok Shop audit from FactoryJet&rsquo;s senior team.</p>
              <Link href="/contact" className="tts-cta-btn">Get my free TikTok Shop audit</Link>
              <div className="obj">No long contracts. Keep the audit either way.</div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
