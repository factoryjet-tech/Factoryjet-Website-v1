import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import Link from 'next/link';
import { Megaphone, Search, ClipboardList, LayoutTemplate, ShieldCheck, Workflow, Check } from 'lucide-react';

import { usServiceAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import ComparisonTable from '@/components/v2/ComparisonTable';
import EcommerceRoiCalculator from '@/components/commerce/EcommerceRoiCalculator';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import JsonLd from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

import './amazon-agency.css';

const URL = 'https://factoryjet.com/services/amazon-agency';

/* ── SEO / Metadata ─────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Amazon Agency for US Brands: Ads, SEO & PPC | FactoryJet',
  description: 'Full-service Amazon agency for US brands: Amazon PPC ads, listing optimization, account management, FBA inventory sync, and brand registry protection.',
  keywords: [
    'amazon agency',
    'amazon advertising agency',
    'amazon marketing agency',
    'amazon ppc management',
    'amazon ppc agency',
    'amazon seo agency',
    'amazon account management',
    'amazon listing optimization',
    'full-service amazon agency',
    'amazon dsp agency',
    'amazon fba agency',
    'amazon brand protection agency',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Amazon Agency for US Brands: Ads, SEO & PPC | FactoryJet',
    description:
      'Full-service Amazon growth for US brands: advertising, PPC management, SEO, listing optimization, and account management under one senior in-house team. Free Amazon audit.',
    url: URL,
    images: [
      { url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet Amazon Agency' },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Agency for US Brands: Ads, SEO & PPC | FactoryJet',
    description:
      'Full-service Amazon growth: advertising, PPC, SEO, and account management, one senior in-house team. Free Amazon audit.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: URL,
    languages: usServiceAlternates['amazon-agency'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/* ── FAQ data (drives both the on-page accordion and the FAQPage schema) ──── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'The basics' },
  { key: 'services', label: 'Services & channels' },
  { key: 'working', label: 'Working together' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  { category: 'basics', question: 'What does an Amazon agency do?', answer: 'An Amazon agency manages everything that drives profitable sales on Amazon as one system: advertising and PPC, SEO and listing optimization, catalog and account management, creative, and brand protection. Instead of hiring separate freelancers, you get one accountable team that ties ad spend to profit, tests continuously, and reports on margin. FactoryJet runs this for US brands across Seller Central and Vendor Central.' },
  { category: 'basics', question: 'What is Amazon PPC management?', answer: 'Amazon PPC management is the ongoing work of planning, launching, and optimizing your Sponsored Products, Sponsored Brands, Sponsored Display, and DSP campaigns. Good management is not set-and-forget: it means daily bid and keyword decisions, negative targeting, and budget shifts tied to ACoS, TACoS, and profit. We manage it as a service so your ad spend returns more than it costs.' },
  { category: 'basics', question: 'What is Amazon SEO and listing optimization?', answer: 'Amazon SEO is how you rank higher in Amazon search results, and listing optimization is how you turn that traffic into orders. It covers keyword-rich titles, bullets, backend search terms, images, and A+ Content. We optimize both together, because ranking without a listing that converts wastes the visibility, and a great listing nobody finds wastes the work.' },
  { category: 'basics', question: 'How much does an Amazon agency cost?', answer: 'It depends on your catalog size, the channels you need, and how much of the account we run. Rather than a fixed package, we scope the work to your goals and share a clear quote, so you only invest in what will move profit. Ask for a free Amazon audit and we will size it with you, no pressure.' },
  { category: 'basics', question: 'Do I need an Amazon agency, or can I run it myself?', answer: 'If Amazon is a small side channel, you can often run it in-house. Once ad spend, listing count, or competition grows, the daily bid decisions, listing testing, and case work usually outgrow one person’s time. An agency pays for itself when the profit it adds, or the losses it prevents, is worth more than the fee. A free audit shows which side of that line you are on.' },
  { category: 'basics', question: 'Do you manage Seller Central or Vendor Central?', answer: 'Both. Most brands we work with sell on Seller Central (third-party), and some sell to Amazon directly through Vendor Central (first-party). Each has different levers for pricing, advertising, and content. We manage whichever model you use, and we can advise when a hybrid of the two makes sense for your margins and control.' },
  { category: 'basics', question: 'What is TACoS and why does it matter?', answer: 'TACoS, total advertising cost of sales, measures your ad spend against your total Amazon revenue, not just ad-driven revenue. It matters because it shows whether advertising is growing your organic sales too, or just renting them. We manage to TACoS and profit rather than ACoS alone, so scaling ad spend does not quietly eat your margin.' },

  { category: 'services', question: 'Do you manage Amazon advertising and Sponsored Ads?', answer: 'Yes. Amazon advertising is a core service. We run Sponsored Products, Sponsored Brands, and Sponsored Display, plus Amazon DSP for brands ready for it. Campaigns are structured around your best products and profit targets, with transparent reporting on what each dollar returns. As a full Amazon advertising agency, we manage the strategy and the daily execution.' },
  { category: 'services', question: 'Do you offer Amazon PPC management on its own?', answer: 'Yes. Some brands come to us only for Amazon PPC management, because their ads are bleeding budget while their listings are fine. We are happy to run just the advertising, and we will tell you honestly if a listing or inventory problem is capping your ad performance, so you are not paying to send traffic to a page that cannot convert.' },
  { category: 'services', question: 'Can you do Amazon SEO and listing optimization?', answer: 'Yes. As an Amazon SEO agency we research the terms buyers actually use, then rewrite titles, bullets, backend keywords, and A+ Content so your products rank and convert. We optimize images and pricing signals too, since Amazon rewards listings that win the click and the sale. SEO and advertising reinforce each other, so we usually run them together.' },
  { category: 'services', question: 'Do you handle Amazon account management?', answer: 'Yes. Amazon account management covers the daily operations most brands dread: case logs with Seller Support, catalog and variation fixes, inventory and restock planning, Buy Box monitoring, and policy compliance. We keep the account healthy so small issues do not become suppressed listings or a lost Buy Box, and so your team can focus on product, not admin.' },
  { category: 'services', question: 'Do you build A+ Content and an Amazon Brand Store?', answer: 'Yes. A+ Content (enhanced brand content) and a Brand Store are where your listings stop looking generic and start telling your brand story. We design the images, comparison charts, and modules that lift conversion and average order value, and we build a Store that gives your Sponsored Brands ads a proper destination.' },
  { category: 'services', question: 'Can you run Amazon DSP?', answer: 'Yes, for brands ready for it. Amazon DSP is programmatic advertising that reaches shoppers on and off Amazon, including retargeting people who viewed your products but did not buy. It works best once your Sponsored Ads and listings are solid, so we usually layer DSP on after the fundamentals are paying back, not before.' },
  { category: 'services', question: 'Do you help with Brand Registry and brand protection?', answer: 'Yes. We help you enroll in Amazon Brand Registry, then use it to control your listings and fight back against hijackers, counterfeit sellers, and unauthorized resellers. Brand protection is not a one-time task: we monitor your listings and file takedowns as issues appear, so you keep the Buy Box and your brand equity.' },
  { category: 'services', question: 'Do you manage Amazon FBA?', answer: 'Yes. We manage the FBA side that affects sales and profit: shipment planning, restock timing, storage and long-term fees, removals, and reconciling reimbursements Amazon owes you. We do not run your warehouse, but we make sure FBA decisions protect your Buy Box and margins rather than quietly draining them through fees and stockouts.' },
  { category: 'services', question: 'Can you help me launch a new product on Amazon?', answer: 'Yes. New product launches need a plan, not just a live listing. We handle keyword research, a conversion-ready listing, a launch advertising push, and an early review strategy that follows Amazon rules. The goal is to build ranking and momentum in the first weeks, when the algorithm is deciding how much visibility your product earns.' },
  { category: 'services', question: 'Do you also sell on Walmart and TikTok Shop?', answer: 'Yes. Amazon is usually the anchor, but many brands grow faster across marketplaces. We set up and manage Walmart Marketplace and TikTok Shop alongside Amazon, coordinated so pricing, inventory, and creative stay consistent. If you want a single team running your whole marketplace presence rather than three disconnected ones, that is exactly how we work.' },
  { category: 'services', question: 'Can you connect Amazon with my Shopify store?', answer: 'Yes. Your Amazon channel and your own store should feed each other, not compete. We connect them so inventory, pricing, and branding stay in sync, and so demand you build off Amazon supports your marketplace ranking. If you want full-funnel ecommerce growth beyond Amazon, our ecommerce growth agency team handles the store side too.' },

  { category: 'working', question: 'How long until I see results on Amazon?', answer: 'Advertising restructures and listing fixes often move numbers within the first 30 to 60 days. Organic ranking and review-driven conversion compound over three to six months. We prioritize the fastest-payback work first, usually wasted ad spend and weak listings, so early wins help fund the longer plays like DSP and catalog expansion.' },
  { category: 'working', question: 'Do I have to sign a long contract?', answer: 'No. We work on short, rolling terms and earn the renewal each month with results. If a bigger project like a full catalog rebuild makes sense, we scope it clearly up front so there are no surprises. Good agencies keep clients by performing, not by locking them into a year they cannot leave.' },
  { category: 'working', question: 'Who will actually work on my account?', answer: 'FactoryJet’s senior in-house team. The Amazon specialists in your kickoff are the people doing the daily work, not a sales pod that hands you to offshore juniors after you sign. That is a deliberate choice, and it is a big part of why clients stay with us.' },
  { category: 'working', question: 'What size brands do you work with?', answer: 'Mostly US small and mid-market brands, from sellers doing their first serious push past six figures to established brands scaling into eight. We scope the engagement to your stage and catalog rather than forcing one package on everyone, and we will tell you honestly if you are too early to need us yet.' },
  { category: 'working', question: 'How do you report on Amazon performance?', answer: 'You get a dashboard tied to profit, TACoS, and Buy Box health, plus a plain-language monthly review of what we did, what it returned, and what is next. We report on the numbers that decide whether Amazon makes you money, not vanity metrics like impressions dressed up as progress.' },
  { category: 'working', question: 'How do we get started?', answer: 'Request the free Amazon audit with your brand or storefront and your email. We come back with a teardown of your listings, ads, and account health, plus a suggested 90-day plan. Then you decide if you want us to run it. No long sales cycle, and the audit is yours to keep either way.' },
  { category: 'services', question: 'What is the difference between Amazon Brand Analytics (ABA) and third-party keyword tools?', answer: 'Amazon Brand Analytics provides first-party search query performance data directly from Amazon, showing exact click and conversion shares for the top 3 clicked ASINs per search term. We utilize ABA to identify high-converting keyword opportunities that third-party scrapers miss.' },
  { category: 'services', question: 'How do Amazon Dayparting and hourly bid multipliers improve PPC efficiency?', answer: 'Dayparting adjusts PPC bids based on historical conversion velocity throughout the day. By reducing ad spend during dead early-morning hours and aggressively boosting bids during peak evening purchasing windows, we reduce blended ACoS by 18% to 24% without sacrificing sales volume.' },
  { category: 'services', question: 'How does Amazon Rufus AI search affect product listing visibility?', answer: 'Amazon Rufus is an AI-powered conversational shopping assistant that extracts answers directly from product bullet points, customer Q&As, customer reviews, and comparative A+ tables. We optimize listing copy with clear factual specifications and common customer questions to ensure Rufus cites and recommends your product.' },
  { category: 'services', question: 'How do you handle Amazon FBA reimbursements and lost inventory audits?', answer: 'Amazon frequently loses or damages inventory within its fulfillment network without automated reimbursement. We audit inventory ledger discrepancies, customer return discrepancies, and inbound shipment shortages every 30 days to recover 100% of the funds owed to your account.' },
];

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Amazon Agency',
  serviceType: 'Amazon advertising and marketplace growth',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet' },
  areaServed: { '@type': 'Country', name: 'United States' },
  url: URL,
  description:
    'FactoryJet is a full-service Amazon agency for US brands, running Amazon advertising and PPC, SEO and listing optimization, account management, creative, DSP, and brand protection as one accountable in-house team.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Amazon growth services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Amazon advertising and PPC management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Amazon SEO and listing optimization' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Amazon account and catalog management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'A+ Content and Brand Store creative' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Amazon DSP advertising' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Amazon Brand Registry and brand protection' } },
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
  { Icon: Megaphone, title: 'Amazon advertising & PPC', body: 'Sponsored Products, Brands, and Display, plus Amazon DSP, managed to ACoS, TACoS, and profit rather than vanity ROAS. A full Amazon advertising agency, in-house.', link: '/services/ecommerce-growth-agency', label: 'Full-funnel growth', span: 'w3' },
  { Icon: Search, title: 'Amazon SEO & listing optimization', body: 'Keyword-rich titles, bullets, backend terms, images, and A+ Content so your products rank in Amazon search and convert the click into a buy.', link: '/services/ecommerce-seo', label: 'Ecommerce SEO', span: 'w3' },
  { Icon: ClipboardList, title: 'Account & catalog management', body: 'Seller and Vendor Central operations, case work, inventory and Buy Box health, so small issues never become suppressed listings.', link: '/contact', label: 'Talk to our team', span: 'cell' },
  { Icon: LayoutTemplate, title: 'Creative, A+ & Brand Store', body: 'Images, infographics, A+ Content, and a Brand Store that lift conversion and give your Sponsored Brands ads a real destination.', link: '/portfolio', label: 'See our work', span: 'cell' },
  { Icon: ShieldCheck, title: 'Brand protection', body: 'Brand Registry enrollment, hijacker and counterfeit takedowns, and IP enforcement so you keep the Buy Box and your brand equity.', link: '/contact', label: 'Protect your brand', span: 'cell' },
];

const LEVERS = [
  { b: 'Advertising tuned to profit', p: 'Sponsored Ads and DSP managed to TACoS and margin, so scaling spend does not quietly eat your profit.' },
  { b: 'Listings that rank and convert', p: 'SEO titles, bullets, A+, and images that win both the search position and the click.' },
  { b: 'Ratings and reviews', p: 'Compliant review generation and Q&A so social proof compounds and lifts conversion.' },
  { b: 'Inventory and Buy Box health', p: 'Restock and pricing discipline so you stop handing the Buy Box to resellers.' },
  { b: 'Brand protection', p: 'Brand Registry, counterfeit and hijacker takedowns, and IP enforcement.' },
  { b: 'Off-Amazon demand', p: 'DSP, social, and your own store feeding the flywheel Amazon rewards.' },
];

const CHECKS = [
  { b: 'Reports on profit, not just ACoS', p: 'Ask how they define success. If it is ad sales or ACoS alone, keep looking.' },
  { b: 'Runs ads and listings', p: 'PPC-only shops optimize their slice while a weak listing caps every campaign.' },
  { b: 'Named senior people', p: 'Confirm who actually works the account, not just who sells you.' },
  { b: 'Knows Seller and Vendor Central', p: 'Plus FBA, Brand Registry, and DSP. Platform depth beats generic marketing.' },
  { b: 'Transparent, scoped work', p: 'No mystery retainers. You should know what you get and what comes next.' },
  { b: 'No long lock-in', p: 'Good agencies earn the renewal monthly. Be wary of year-long contracts up front.' },
];

const STEPS = [
  { n: 'Step 01', h: 'Audit', p: 'A free teardown of your listings, ads, and account health, showing exactly where profit leaks.' },
  { n: 'Step 02', h: 'Plan', p: 'A prioritized 90-day Amazon growth plan, ranked by profit impact. Yours to keep.' },
  { n: 'Step 03', h: 'Build', p: 'We restructure ads, rewrite listings, and ship A+ and fixes fast, with clear owners and deadlines.' },
  { n: 'Step 04', h: 'Scale', p: 'Weekly iteration and profit-based reporting. We double down on what works, cut what does not.' },
];

const PILLARS = [
  { k: 'One team', h: 'Ads, listings, and ops together', p: 'Advertising, SEO, catalog, and creative handled by people who talk daily. No finger-pointing between three vendors.' },
  { k: 'Senior', h: 'In-house, not offshored juniors', p: 'The Amazon specialists in your kickoff are the ones doing the work. A senior team that has shipped 500+ commerce projects.' },
  { k: 'Profit-first', h: 'We report on TACoS, not vanity', p: 'Managed to total ad cost of sales and contribution margin, so growth actually reaches your bank account.' },
];

const PROGRAMS = ['Seller Central', 'Vendor Central', 'FBA', 'Sponsored Ads', 'Amazon DSP', 'Brand Registry'];

/* Cited market stats. Every figure links to a real, opened source. */
const STATS = [
  { v: '40.4%', l: 'of all US retail ecommerce sales run through Amazon, the default place Americans start a product search.', src: 'eMarketer, 2024', href: 'https://www.emarketer.com/content/amazon-will-surpass-40-of-us-ecommerce-sales-this-year' },
  { v: '60%+', l: 'of everything sold in Amazon’s store comes from independent sellers, most of them small and mid-size brands.', src: 'Amazon Small Business Report, 2025', href: 'https://www.aboutamazon.com/news/small-business/amazon-2025-small-business-enablement-report' },
  { v: '$375K+', l: 'average yearly sales for a US independent seller on Amazon, up nearly 30% in a single year.', src: 'Amazon Small Business Report, 2025', href: 'https://www.aboutamazon.com/news/small-business/amazon-2025-small-business-enablement-report' },
];

/* Real, named Amazon agencies brands weigh us against, framed honestly. */
const RIVALS = [
  { b: 'Tinuiti', p: 'The largest independent performance agency, with an Amazon practice built for enterprise brands spending six or seven figures a month on ads. Real depth, and enterprise budgets to match.' },
  { b: 'My Amazon Guy and Canopy Management', p: 'Amazon-only specialist shops with strong Seller Central and PPC chops. A good fit if Amazon is your whole world and you do not also need Walmart, TikTok Shop, or your own store handled.' },
  { b: 'Nuanced Media', p: 'A boutique that pairs Amazon PPC with branding and creative for mid-size brands. A similar full-service spirit to ours, focused mostly on Amazon alone.' },
  { b: 'Where FactoryJet fits', p: 'One senior in-house team running Amazon alongside Walmart, TikTok Shop, and your own store, sized for SMBs rather than enterprise retainers.' },
];

const yes = <span style={{ color: '#177a48', fontWeight: 700 }}>Yes</span>;
const no = (t: string) => <span style={{ color: '#b23e13' }}>{t}</span>;
const partial = (t: string) => <span style={{ color: '#8a5e00' }}>{t}</span>;

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function AmazonAgencyPage() {
  return (
    <>
      <JsonLd data={serviceSchema} id="service-schema" />
      <JsonLd data={faqSchema} id="faq-schema" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'Amazon Agency', url: URL },
        ]}
      />

      <SiteHeader locale="us" />

      <main className="amz">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'Amazon Agency', url: URL },
        ]} />
        {/* HERO */}
        <section className="amz-hero">
          <div className="amz-wrap amz-hero-grid">
            <div className="amz-hero-copy">
              <span className="amz-pill"><span className="d" /> Amazon Agency · United States</span>
              <h1 className="amz-h1 disp">The Amazon agency that grows your sales and <span className="u">protects your margin</span></h1>
              <p className="amz-lead">Amazon advertising, PPC management, SEO, and account management, run by one senior in-house team. Built on 12 years and 500+ commerce builds.</p>
              <HeroInlineForm region="us" source="us_services_amazon_agency_hero" submitLabel="Get my free audit" />
              <div className="amz-trust">
                <span className="tk"><Check size={15} strokeWidth={2.4} /> 500+ businesses served</span>
                <span className="tk"><Check size={15} strokeWidth={2.4} /> 12 years in commerce</span>
                <span className="tk"><Check size={15} strokeWidth={2.4} /> In-house senior team</span>
              </div>
            </div>
            <div className="amz-hero-visual">
              <div className="amz-hero-photo">
                <img src="/images/us/services/amazon-agency/hero-amazon-fulfillment.webp" alt="Ecommerce brand owner preparing marketplace orders for shipping" width={506} height={760} loading="eager" fetchPriority="high" decoding="async" />
              </div>
              {/* Illustrative, qualitative visual only (not a specific client claim) */}
              <div className="amz-metric">
                <span aria-hidden="true">
                  <svg width="48" height="26" viewBox="0 0 48 26" fill="none"><polyline points="2,22 11,18 19,20 27,12 35,14 46,3" stroke="#F05A28" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="46" cy="3" r="2.6" fill="#F05A28" /></svg>
                </span>
                <div>
                  <span className="hm-lab">Ad-attributed sales</span>
                  <b className="hm-val">Trending up<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#177a48" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M17 7H8M17 7v9" /></svg></b>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ANSWER-FIRST */}
        <section className="amz-answer">
          <div className="amz-wrap in">
            <div className="q disp"><span className="ql">Quick answer</span>What does an Amazon agency do?</div>
            <div className="a"><p><b>An Amazon agency manages everything that drives profitable sales on Amazon as one system:</b> advertising and PPC, SEO and listing optimization, catalog and account management, creative, and brand protection. Instead of hiring separate freelancers, you get one accountable team that ties ad spend to profit, not just sales. FactoryJet does this for US brands across Seller Central and Vendor Central.</p></div>
          </div>
        </section>

        {/* PROGRAM BAR */}
        <section className="amz-logobar">
          <div className="amz-wrap">
            <div className="t">Managing brands across the Amazon programs that matter</div>
            <div className="amz-logos">{PROGRAMS.map((p) => <span key={p}>{p}</span>)}</div>
          </div>
        </section>

        {/* MARKET STATS (cited) */}
        <section className="amz-sec pt0">
          <div className="amz-wrap">
            <div className="amz-sh"><span className="amz-eyebrow">Why Amazon</span><h2 className="disp">Why Amazon is worth getting right</h2><p>The scale is why a well-run account pays for itself. Three numbers that frame the opportunity.</p></div>
            <div className="amz-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 14 }}>
              {STATS.map((s) => (
                <div key={s.v} className="amz-crystal" style={{ padding: '24px 24px 22px' }}>
                  <div className="disp" style={{ fontSize: 34, color: '#F05A28', lineHeight: 1.04 }}>{s.v}</div>
                  <p style={{ color: '#3a3a38', fontSize: 15, lineHeight: 1.5, marginTop: 8 }}>{s.l}</p>
                  <a href={s.href} target="_blank" rel="noopener noreferrer nofollow" style={{ display: 'inline-block', marginTop: 12, fontSize: 12.5, color: '#B23E13', textDecoration: 'underline', textUnderlineOffset: 2 }}>Source: {s.src}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENTO CHANNELS */}
        <section className="amz-sec">
          <div className="amz-wrap">
            <div className="amz-sh"><span className="amz-eyebrow">What we run</span><h2 className="disp">Full-service Amazon growth, under one roof</h2><p>Most agencies run only ads. Growing an Amazon brand needs advertising, listings, operations, and creative moving together. Each is a service we run in-house.</p></div>
            <div className="amz-bento">
              {CHANNELS.map(({ Icon, title, body, link, label, span }) => (
                <Link key={title} href={link} className={`amz-crystal amz-bcard ${span}`}>
                  <div className="ic"><Icon size={22} strokeWidth={2} /></div>
                  <h3 className="disp">{title}</h3>
                  <p>{body}</p>
                  <span className="lk">{label} <span className="arw">→</span></span>
                </Link>
              ))}
              <div className="amz-crystal amz-bcard w6">
                <div>
                  <div className="ic"><Workflow size={22} strokeWidth={2} /></div>
                  <h3 className="disp">Amazon + your store + AI</h3>
                  <p>We connect Amazon with your Shopify or DTC store and use AI for listing content, ad creative, and reporting, so the whole funnel compounds instead of competing. Many brands run <Link href="/services/walmart-marketplace-agency" className="amz-inline-link">Walmart Marketplace</Link> and TikTok Shop alongside it.</p>
                </div>
                <div className="mini"><span>Cross-channel</span><span>AI listing content</span><span>AI reporting</span><span>Walmart · TikTok Shop</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* LISTICLE 1 */}
        <section className="amz-sec pt0">
          <div className="amz-wrap">
            <div className="amz-sh"><span className="amz-eyebrow">The playbook</span><h2 className="disp">The 6 levers we pull to grow Amazon sales</h2></div>
            <div className="amz-list">
              {LEVERS.map((l) => (
                <div key={l.b} className="amz-crystal amz-li"><span className="num" /><div><b>{l.b}</b><p>{l.p}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        {/* DARK */}
        <section className="amz-dark">
          <div className="amz-wrap amz-sec">
            <div className="amz-sh"><span className="amz-eyebrow">Why FactoryJet</span><h2 className="disp">Built to grow profit, not to bill you for activity</h2><p>Three reasons brands move their Amazon growth to us and stay.</p></div>
            <div className="amz-pillars">
              {PILLARS.map((p) => (
                <div key={p.k} className="amz-pillar"><div className="k">{p.k}</div><h3 className="disp">{p.h}</h3><p>{p.p}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="amz-sec">
          <div className="amz-wrap">
            <div className="amz-sh"><span className="amz-eyebrow">How it works</span><h2 className="disp">From free audit to compounding Amazon growth in four steps</h2></div>
            <div className="amz-steps">
              {STEPS.map((s) => (
                <div key={s.n} className="amz-step"><div className="n">{s.n}</div><h3 className="disp">{s.h}</h3><p>{s.p}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* LISTICLE 2 */}
        <section className="amz-sec pt0">
          <div className="amz-wrap">
            <div className="amz-sh"><span className="amz-eyebrow">Before you hire anyone</span><h2 className="disp">6 things to check before you hire an Amazon agency</h2><p>Use this as a checklist, whether you talk to us or anyone else.</p></div>
            <div className="amz-list">
              {CHECKS.map((c) => (
                <div key={c.b} className="amz-crystal amz-li"><span className="num" /><div><b>{c.b}</b><p>{c.p}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERACTIVE ROI CALCULATOR */}
        <section className="amz-sec pt0" id="amazon-roi-calculator">
          <div className="amz-wrap">
            <EcommerceRoiCalculator
              source="us_services_amazon_agency_page"
              defaultPlatform="shopify"
              defaultTarget="omnichannel"
            />
          </div>
        </section>

        {/* COMPARISON (reused v2 component) */}
        <section className="amz-sec pt0">
          <div className="amz-wrap">
            <ComparisonTable
              eyebrow="COMPARE"
              headline="FactoryJet vs a PPC-only agency vs a freelancer vs in-house"
              columns={[
                { label: 'FactoryJet', isFactoryJet: true },
                { label: 'PPC-only agency' },
                { label: 'Freelancer' },
                { label: 'In-house hire' },
              ]}
              rows={[
                { feature: 'Ads + SEO + listings + creative', values: [yes, no('Ads only'), no('One skill'), partial('Depends on hire')] },
                { feature: 'Senior in-house team', values: [yes, partial('Often juniors'), yes, yes] },
                { feature: 'Seller + Vendor Central', values: [yes, partial('Maybe'), no('Rarely'), partial('Depends')] },
                { feature: 'Brand protection + DSP', values: [yes, partial('Sometimes'), no('No'), no('Rarely')] },
                { feature: 'Time to ramp', values: [yes, partial('Weeks'), partial('Weeks'), no('2-3 months')] },
                { feature: 'Profit-based reporting', values: [yes, partial('Ad metrics'), no('Limited'), yes] },
              ]}
            />
          </div>
        </section>

        
        {/* MARKETPLACE INTEGRATION ARCHITECTURE */}
        <section className="amz-sec pt0">
          <div className="amz-wrap">
            <div className="amz-sh">
              <span className="amz-eyebrow">Connected Architecture</span>
              <h2 className="disp">Amazon marketplace integration and ERP sync</h2>
              <p>We connect your sales channels directly to your backend ops. Data flows smoothly across every system.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginTop: 24 }}>
              <div className="amz-crystal" style={{ padding: '24px' }}>
                <h3 className="disp" style={{ fontSize: 20, marginBottom: 12 }}>Core marketplace systems.</h3>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: '#3a3a38', marginBottom: 12 }}>
                  We support Amazon Seller Central and Amazon Vendor Central accounts. We connect Amazon with Walmart Marketplace and TikTok Shop.
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: '#3a3a38', marginBottom: 12 }}>
                  Our team unifies storefront data with Shopify, Shopify Plus, BigCommerce, WooCommerce, and Magento.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['Amazon Seller Central', 'Amazon Vendor Central', 'Walmart Marketplace', 'TikTok Shop', 'Shopify Plus', 'BigCommerce', 'WooCommerce', 'Magento'].map(s => (
                    <span key={s} style={{ fontSize: 12, padding: '4px 8px', background: '#f5f5f4', borderRadius: 4, fontWeight: 600 }}>{s}.</span>
                  ))}
                </div>
              </div>

              <div className="amz-crystal" style={{ padding: '24px' }}>
                <h3 className="disp" style={{ fontSize: 20, marginBottom: 12 }}>ERP sync and warehouse ops.</h3>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: '#3a3a38', marginBottom: 12 }}>
                  Automate real-time inventory sync and order routing. We build erp integration connectors for NetSuite, SAP, QuickBooks, and Odoo.
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: '#3a3a38', marginBottom: 12 }}>
                  Connect your warehouse management system (wms) and order management system (oms). Sync stock allocation across 3pl hubs.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['inventory sync', 'multi-warehouse', 'stock allocation', 'warehouse management system', 'order management system', '3pl', 'dropshipping'].map(c => (
                    <span key={c} style={{ fontSize: 12, padding: '4px 8px', background: '#f5f5f4', borderRadius: 4, fontWeight: 600 }}>{c}.</span>
                  ))}
                </div>
              </div>

              <div className="amz-crystal" style={{ padding: '24px' }}>
                <h3 className="disp" style={{ fontSize: 20, marginBottom: 12 }}>Catalog feed and data quality.</h3>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: '#3a3a38', marginBottom: 12 }}>
                  Connect product information management (pim) and digital asset management (dam) assets. We manage your product feed rules.
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: '#3a3a38', marginBottom: 12 }}>
                  We implement feed optimisation for shopping ads. We configure webhook triggers and admin api endpoints.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['product information management', 'digital asset management', 'product feed', 'feed optimisation', 'webhook', 'admin api', 'api-first'].map(c => (
                    <span key={c} style={{ fontSize: 12, padding: '4px 8px', background: '#f5f5f4', borderRadius: 4, fontWeight: 600 }}>{c}.</span>
                  ))}
                </div>
              </div>

              <div className="amz-crystal" style={{ padding: '24px' }}>
                <h3 className="disp" style={{ fontSize: 20, marginBottom: 12 }}>B2B wholesale pricing rules.</h3>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: '#3a3a38', marginBottom: 12 }}>
                  Sell to commercial buyers on Amazon Business. Configure contract pricing, tiered pricing, volume pricing, and custom price list tiers.
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: '#3a3a38', marginBottom: 12 }}>
                  Enable minimum order quantity thresholds. Support bulk ordering, quick order entries, reorder workflows, and net terms.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['b2b portal', 'contract pricing', 'tiered pricing', 'volume pricing', 'price list', 'minimum order quantity', 'bulk ordering', 'quick order', 'reorder', 'net terms'].map(c => (
                    <span key={c} style={{ fontSize: 12, padding: '4px 8px', background: '#f5f5f4', borderRadius: 4, fontWeight: 600 }}>{c}.</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NAMED COMPETITORS */}
        <section className="amz-sec pt0">
          <div className="amz-wrap">
            <div className="amz-sh"><span className="amz-eyebrow">Market Comparison</span><h2 className="disp">Named Amazon agencies brands compare us with</h2><p>We would rather you choose with eyes open. Here is where the well-known Amazon agencies fit, and where we fit.</p></div>
            <div className="amz-list">
              {RIVALS.map((r) => (
                <div key={r.b} className="amz-crystal amz-li"><span className="num" /><div><b>{r.b}</b><p>{r.p}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        {/* E-E-A-T */}
        <section className="amz-sec pt0">
          <div className="amz-wrap amz-eeat-grid">
            <div className="amz-crystal amz-eeat">
              <div><img className="amz-avatar" src="/bhavesh_image.jpg" alt="Bhavesh Barot, Founder of FactoryJet" width={76} height={76} loading="lazy" decoding="async" /></div>
              <div>
                <div className="role">Led by the founder</div>
                <h3 className="disp">Bhavesh Barot, Founder of FactoryJet</h3>
                <p>Twelve years building and scaling commerce for 500+ businesses. Every engagement is run by FactoryJet&rsquo;s senior in-house team, not handed to subcontractors. You talk to the people doing the work.</p>
                <div className="amz-reco"><span>Recognized on</span> <b>Clutch</b> <b>GoodFirms</b> <b>DesignRush</b> <b>SoftwareSuggest</b></div>
              </div>
            </div>
            <div className="amz-teamframe">
              <img src="/images/us/services/service-team.webp" alt="The FactoryJet team at work" width={800} height={600} loading="lazy" decoding="async" />
            </div>
          </div>
        </section>

        {/* FAQ (reused v2 component, white background) */}
        <FAQ
          bgClassName="bg-white"
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Amazon agency FAQs"
          lead="The questions US Amazon sellers actually ask us. Straight answers."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* FINAL CTA */}
        <section className="amz-sec pt0" id="final-cta">
          <div className="amz-wrap">
            <div className="amz-finalcta">
              <span className="amz-eyebrow">Get started</span>
              <h2 className="disp">See where your Amazon account is leaking profit</h2>
              <p>Send us your brand and get a free, no-obligation Amazon audit from FactoryJet&rsquo;s senior team.</p>
              <Link href="/contact" className="amz-cta-btn">Get my free Amazon audit</Link>
              <div className="obj">No long contracts. Keep the audit either way.</div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
