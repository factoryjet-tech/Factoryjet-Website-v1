import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import Link from 'next/link';
import { ShieldCheck, Megaphone, ClipboardList, Search, Target, Workflow, Check } from 'lucide-react';

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

import './walmart-marketplace-agency.css';

const URL = 'https://factoryjet.com/services/walmart-marketplace-agency';

/* ── SEO / Metadata ─────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Walmart Marketplace Agency for US Brands: Approval, Ads & WFS | FactoryJet',
  description:
    'FactoryJet is a full-service Walmart Marketplace agency for US brands: seller application and approval, Walmart Connect ads, WFS fulfillment, listing optimization, and Buy Box strategy under one senior in-house team. Get a free Walmart audit.',
  keywords: [
    'walmart marketplace agency',
    'walmart advertising agency',
    'walmart marketing agency',
    'walmart account management',
    'walmart account management services',
    'walmart marketplace management',
    'walmart fulfillment services',
    'walmart fulfillment services wfs',
    'become a vendor for walmart',
    'walmart seller central',
    'walmart seller account',
    'walmart connect agency',
    'walmart marketplace application',
    'full-service walmart marketplace agency',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Walmart Marketplace Agency for US Brands: Approval, Ads & WFS | FactoryJet',
    description:
      'Full-service Walmart Marketplace growth for US brands: seller approval, Walmart Connect ads, WFS fulfillment, listing optimization, and Buy Box strategy under one senior in-house team. Free Walmart audit.',
    url: URL,
    images: [
      { url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet Walmart Marketplace Agency' },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Walmart Marketplace Agency for US Brands: Approval, Ads & WFS | FactoryJet',
    description:
      'Full-service Walmart Marketplace growth: seller approval, Connect ads, WFS, and listing optimization, one senior in-house team. Free Walmart audit.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: URL,
    languages: usServiceAlternates['walmart-marketplace-agency'],
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
  { category: 'basics', question: 'What does a Walmart Marketplace agency do?', answer: 'A Walmart Marketplace agency handles everything between "we want to sell on Walmart" and "we are selling profitably on Walmart": the seller application, WFS fulfillment setup, Walmart Connect advertising, listing and item-spec optimization, and Buy Box strategy. Instead of hiring separate freelancers, you get one accountable team that gets you approved and then runs the account to ties spend to margin. FactoryJet does this for US brands on Walmart Seller Center.' },
  { category: 'basics', question: 'How do I get approved to sell on Walmart Marketplace?', answer: 'You apply through Walmart Marketplace Seller Center with your business details, tax ID, product category, and catalog information, and Walmart reviews the application before granting access. Unlike Amazon, where most sellers can self-register instantly, Walmart evaluates brand reputation, category fit, and catalog quality first, and can reject an application or ask for more information. A well-prepared application with the right category selection and clean product data gets approved faster and gets rejected less often.' },
  { category: 'basics', question: 'How much does it cost to sell on Walmart Marketplace?', answer: 'There is no monthly subscription fee to sell on Walmart Marketplace, unlike Amazon\'s Professional plan. You pay a referral fee on each sale, set per category, plus WFS fulfillment and storage fees if you use Walmart\'s fulfillment program instead of shipping yourself. Because referral rates vary by category, the honest answer is to run your specific products through Walmart\'s own fee tools before pricing, and we do exactly that as part of a free audit.' },
  { category: 'basics', question: 'Do I need an agency, or can I apply to Walmart myself?', answer: 'You can apply yourself, and many brands do. Where an agency earns its fee is afterward: getting the application approved on the first try with the right category and documentation, then setting up WFS, Connect ads, and listings correctly instead of learning by trial and error while sales sit at zero. A free audit will tell you honestly whether your catalog and business profile are approval-ready yet.' },
  { category: 'basics', question: 'What is WFS (Walmart Fulfillment Services)?', answer: 'WFS is Walmart\'s equivalent of Amazon FBA: you ship inventory to Walmart\'s fulfillment centers, and Walmart picks, packs, ships, and handles returns and customer service for those orders. WFS listings get faster shipping badges that lift conversion and Buy Box eligibility, similar to how Prime works on Amazon. The trade-off is the same as FBA too: you give up direct control of fulfillment for speed and hands-off logistics, plus you pay fulfillment and storage fees for it.' },
  { category: 'basics', question: 'Is Walmart Marketplace worth it for brands in 2026?', answer: 'For brands already selling well on Amazon, yes, as a second high-intent marketplace rather than a replacement. Walmart Marketplace buyers are searching to purchase, similar intent to Amazon shoppers, and Walmart.com carries less seller competition in most categories than Amazon does, which can mean an easier path to visibility once you are approved. It is not worth it as your only channel; it works best as part of a marketplace mix.' },
  { category: 'basics', question: 'How is Walmart Marketplace different from Amazon?', answer: 'The biggest difference is the front door: Walmart requires an application and approval before you can list, while Amazon largely lets sellers self-register instantly. Walmart also has no monthly Professional-style subscription fee, just per-sale referral fees. Once approved, the day-to-day looks similar: WFS mirrors FBA, Walmart Connect mirrors Amazon Ads, and the Buy Box (Walmart calls it the Featured Offer) works on comparable pricing and fulfillment logic.' },

  { category: 'services', question: 'Do you help with the Walmart Marketplace seller application?', answer: 'Yes, and it is often where brands get stuck. We prepare your business documentation, select the right product category, clean up your catalog data, and submit an application built to get approved on the first pass rather than bounced back for missing information. If you have already been rejected once, we will tell you honestly what needs to change before you reapply.' },
  { category: 'services', question: 'Do you manage Walmart Connect ads?', answer: 'Yes. Walmart Connect is Walmart\'s advertising platform, covering Sponsored Products, Search Brand Amplifier, and display placements on Walmart.com. We run campaigns structured around your best products and margin targets, managed to return on ad spend and profit rather than vanity impressions, with transparent reporting on what each dollar returns.' },
  { category: 'services', question: 'Do you handle WFS setup and management?', answer: 'Yes. We decide with you whether WFS or shipping orders yourself is the right call for each product, then handle the WFS onboarding, shipment planning, and ongoing inventory and storage management if you go that route. Getting WFS right matters for Buy Box eligibility and delivery-speed badges, so we treat it as core to the account, not an afterthought.' },
  { category: 'services', question: 'Can you optimize our Walmart product listings?', answer: 'Yes. Walmart is strict about item spec quality, accurate attributes, clean images, and compliant titles, and listings that fail spec checks get suppressed or rejected. We build listings that pass Walmart\'s content requirements the first time and are written to convert, not just to satisfy a checklist.' },
  { category: 'services', question: 'Do you help us win and keep the Buy Box (Featured Offer)?', answer: 'Yes. Walmart\'s Featured Offer, its version of the Buy Box, is won on a mix of price, fulfillment speed, and seller performance history. We manage pricing discipline and fulfillment choices (including WFS) with Buy Box eligibility as a deliberate target, not a side effect, since losing it on your own listings usually means losing the sale to another seller of the same product.' },
  { category: 'services', question: 'Do you manage Walmart Marketplace account operations?', answer: 'Yes. That covers Seller Center operations day to day: order and inventory monitoring, case resolution, returns handling, performance metric tracking, and policy compliance. Walmart enforces seller performance standards closely, and falling below them can suspend selling privileges, so we treat account health as an ongoing job, not a one-time setup.' },
  { category: 'services', question: 'Can you help us launch a new product on Walmart?', answer: 'Yes. A launch needs a compliant, conversion-ready listing, correct WFS or ship-your-own setup before the first order, and an early Walmart Connect push to build initial visibility while the listing has no sales history yet. We plan launches so the product is actually ready to sell profitably the day it goes live, not just technically listed.' },
  { category: 'services', question: 'Do you also sell on Amazon and TikTok Shop?', answer: 'Yes. Walmart is rarely a brand\'s only marketplace, and we run it alongside Amazon and TikTok Shop so pricing, inventory, and creative stay consistent across all three rather than competing against each other. If you want one team running your whole marketplace presence instead of three disconnected ones, that is exactly how we work.' },
  { category: 'services', question: 'Can you connect Walmart with my Shopify store?', answer: 'Yes. Your Walmart channel and your own store should feed each other rather than compete. We connect them so inventory and pricing stay in sync, and demand you build off Walmart supports rather than cannibalizes your own site. If you want full-funnel ecommerce growth beyond marketplaces, our ecommerce growth agency team handles the store side too.' },

  { category: 'working', question: 'How long until we see results on Walmart Marketplace?', answer: 'Approval typically takes anywhere from a few days to a few weeks depending on your category and how complete the application is. Once approved, listing and Connect ad fixes often move numbers within the first 30 to 60 days, while Buy Box share and organic ranking build over three to six months as your seller performance history accumulates. We prioritize getting approved and listed correctly first, since nothing else matters until that happens.' },
  { category: 'working', question: 'Do I have to sign a long contract?', answer: 'No. We work on short, rolling terms and earn the renewal each month with results. If a bigger project like a full catalog onboarding makes sense, we scope it clearly up front so there are no surprises. Good agencies keep clients by performing, not by locking them into a year they cannot leave.' },
  { category: 'working', question: 'Who will actually work on my account?', answer: 'FactoryJet\'s senior in-house team. The specialists in your kickoff are the people doing the daily work on your application, listings, and ads, not a sales pod that hands you to offshore juniors after you sign. That is a deliberate choice, and it is a big part of why clients stay with us.' },
  { category: 'working', question: 'What size brands do you work with?', answer: 'Mostly US small and mid-market brands, from sellers applying to Walmart Marketplace for the first time to established Amazon or TikTok Shop sellers adding Walmart as a second or third channel. We scope the engagement to your stage and catalog rather than forcing one package on everyone, and we will tell you honestly if you are not approval-ready yet.' },
  { category: 'working', question: 'How do you report on Walmart Marketplace performance?', answer: 'You get a dashboard tied to sales, Connect ad efficiency, Buy Box share, and seller performance standing, plus a plain-language monthly review of what we did, what it returned, and what is next. We report on the numbers that decide whether Walmart makes you money and keeps your selling privileges healthy, not vanity metrics like impressions dressed up as progress.' },
  { category: 'working', question: 'How do we get started?', answer: 'Request the free Walmart Marketplace audit with your brand and your email. If you are not yet approved, we come back with an application readiness review; if you are already selling, we send a teardown of your listings, ads, and account health plus a suggested 90-day plan. Then you decide if you want us to run it. No long sales cycle, and the audit is yours to keep either way.' },
  { category: 'services', question: 'What is the Walmart Item Page Quality Score (IPQS) and how is it calculated?', answer: 'Walmart Item Page Quality Score (IPQS) measures listing completeness across Content & SEO, Offer (price and shipping speed), and Customer Experience (reviews and returns). Scores above 95% boost algorithmic organic placement across Walmart search results.' },
  { category: 'services', question: 'How does Walmart Connect Brand Amplifier differ from standard Sponsored Products?', answer: 'Search Brand Amplifier pins your custom brand banner, logo, and a curated row of products at the very top of high-intent search result pages. It provides maximum brand share-of-voice for competitive head keywords.' },
  { category: 'services', question: 'What are Walmart Pro Seller Badge requirements and benefits?', answer: 'The Walmart Pro Seller Badge is awarded to top-tier merchants maintaining 95%+ On-Time Delivery, 99%+ Valid Tracking Rate, and sub-1.5% cancellation rates. Pro Seller listings display an official badge that lifts conversion by 15%-20%.' },
  { category: 'services', question: 'How do you handle Walmart Marketplace UPC and GTIN barcode requirements?', answer: 'Walmart strictly enforces GS1-registered GTIN, UPC, and ISBN barcodes. We audit your catalog against GS1 US databases to resolve barcode mismatch errors, brand ownership conflicts, and multi-pack variation mapping issues.' },
];

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Walmart Marketplace Agency',
  serviceType: 'Walmart Marketplace seller approval and marketplace growth',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet' },
  areaServed: { '@type': 'Country', name: 'United States' },
  url: URL,
  description:
    'FactoryJet is a full-service Walmart Marketplace agency for US brands, handling seller application and approval, WFS fulfillment, Walmart Connect advertising, listing optimization, and Buy Box strategy as one accountable in-house team.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Walmart Marketplace growth services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Walmart Marketplace seller application and approval' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Walmart Connect advertising' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'WFS (Walmart Fulfillment Services) setup and management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Listing and item spec optimization' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Buy Box (Featured Offer) strategy' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Walmart Marketplace account operations' } },
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
  { Icon: ShieldCheck, title: 'Seller application & approval', body: 'Business docs, category selection, and catalog data prepared to get approved on the first pass instead of bounced back for missing information.', link: '/blog/how-to-sell-on-walmart-marketplace-2026', label: 'How Walmart approval works', span: 'w3' },
  { Icon: Megaphone, title: 'Walmart Connect ads', body: 'Sponsored Products, Search Brand Amplifier, and display, managed to ROAS and profit on Walmart.com, not vanity impressions.', link: '/services/ecommerce-growth-agency', label: 'Full-funnel growth', span: 'w3' },
  { Icon: ClipboardList, title: 'WFS & account operations', body: 'Fulfillment setup, inventory and storage, case resolution, and performance standards, so small issues never suspend selling privileges.', link: '/contact', label: 'Talk to our team', span: 'cell' },
  { Icon: Search, title: 'Listing & item spec optimization', body: 'Titles, attributes, and images built to pass Walmart\'s content requirements the first time and convert once they do.', link: '/services/ecommerce-seo', label: 'Ecommerce SEO', span: 'cell' },
  { Icon: Target, title: 'Buy Box (Featured Offer) strategy', body: 'Pricing and fulfillment discipline aimed at winning and keeping the Featured Offer, not treating it as a side effect.', link: '/portfolio', label: 'See our work', span: 'cell' },
];

const LEVERS = [
  { b: 'An approval-ready application', p: 'The right category, clean catalog data, and complete documentation, so you are not rejected and reapplying weeks later.' },
  { b: 'WFS done deliberately', p: 'A real WFS-vs-ship-yourself decision per product, not a default, since it affects Buy Box eligibility and delivery badges.' },
  { b: 'Connect ads tuned to profit', p: 'Sponsored Products and Search placements managed to ROAS and margin, not impressions.' },
  { b: 'Winning the Featured Offer', p: 'Pricing and fulfillment speed managed as a deliberate target on your competitive listings.' },
  { b: 'Listings that pass spec', p: 'Item content built to Walmart\'s requirements the first time, so nothing gets suppressed before it can sell.' },
  { b: 'Performance standards health', p: 'Order defect rate, on-time shipping, and case response tracked so selling privileges never get suspended.' },
];

const CHECKS = [
  { b: 'Has actually gotten sellers approved', p: 'Ask for specifics on the application process. A vague answer means you are the one figuring it out.' },
  { b: 'Runs WFS and Connect, not just one', p: 'Fulfillment and advertising interact on Buy Box eligibility; an ads-only shop misses half the lever.' },
  { b: 'Reports on Buy Box share and profit', p: 'If success is defined as impressions or clicks alone, keep looking.' },
  { b: 'Knows Seller Center and item specs', p: 'Walmart\'s content requirements are stricter than they look. Platform depth beats generic marketing.' },
  { b: 'Transparent, scoped work', p: 'No mystery retainers. You should know what you get and what comes next.' },
  { b: 'No long lock-in', p: 'Good agencies earn the renewal monthly. Be wary of year-long contracts up front.' },
];

const STEPS = [
  { n: 'Step 01', h: 'Audit', p: 'A free readiness review of your application (or account, if already approved), showing exactly what stands between you and selling.' },
  { n: 'Step 02', h: 'Plan', p: 'A prioritized path to approval and a 90-day growth plan, ranked by impact. Yours to keep.' },
  { n: 'Step 03', h: 'Build', p: 'We submit or fix the application, set up WFS, launch Connect ads, and ship compliant listings fast.' },
  { n: 'Step 04', h: 'Scale', p: 'Weekly iteration and profit-based reporting. We double down on what works, cut what does not.' },
];

const PILLARS = [
  { k: 'One team', h: 'Approval, ads, and ops together', p: 'The application, WFS, Connect ads, and listings handled by people who talk daily. No finger-pointing between vendors.' },
  { k: 'Senior', h: 'In-house, not offshored juniors', p: 'The specialists in your kickoff are the ones doing the work. A senior team that has shipped 500+ commerce projects.' },
  { k: 'Profit-first', h: 'We report on Buy Box and margin', p: 'Managed to Featured Offer share and contribution margin, so growth actually reaches your bank account.' },
];

const PROGRAMS = ['Seller Center', 'WFS', 'Walmart Connect', 'Item Spec & Catalog', 'Returns Center', 'Featured Offer'];

/* Cited market stats. Every figure links to a real, opened source. */
const STATS = [
  { v: '200K+', l: 'active third-party sellers are now on Walmart Marketplace, still a fraction of the crowd on Amazon.', src: 'Marketplace Pulse, 2025', href: 'https://www.marketplacepulse.com/articles/walmart-marketplace-growth-reaches-fastest-pace-in-years' },
  { v: '~50%', l: 'year-over-year growth in Walmart’s US third-party marketplace in early 2026, its fastest pace in years.', src: 'Marketplace Pulse, 2026', href: 'https://www.marketplacepulse.com/articles/walmart-marketplace-growth-reaches-fastest-pace-in-years' },
  { v: '50K+', l: 'new sellers joined Walmart Marketplace in a single twelve-month stretch as more brands moved in.', src: 'Marketplace Pulse', href: 'https://www.marketplacepulse.com/articles/walmart-marketplace-grows-50-in-one-year' },
];

/* Real, named Walmart and marketplace agencies brands weigh us against, framed honestly. */
const RIVALS = [
  { b: 'Tinuiti', p: 'The largest independent performance agency, strong on Walmart Connect ads. Built for brands already approved and spending heavily on ads each month.' },
  { b: 'Blue Wheel', p: 'A full-funnel marketplace agency with real Amazon and Walmart strength. A solid option that skews toward larger, established sellers.' },
  { b: 'Podean', p: 'Marketplace managed services with proprietary tech, Amazon-first and Walmart-capable. A good fit for established brands scaling ad spend.' },
  { b: 'Where FactoryJet fits', p: 'We start before approval, prep the application, set up WFS, then run Connect ads and listings, sized for SMBs applying to Walmart or adding it as a second channel.' },
];

const yes = <span style={{ color: '#177a48', fontWeight: 700 }}>Yes</span>;
const no = (t: string) => <span style={{ color: '#b23e13' }}>{t}</span>;
const partial = (t: string) => <span style={{ color: '#8a5e00' }}>{t}</span>;

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WalmartMarketplaceAgencyPage() {
  return (
    <>
      <JsonLd data={serviceSchema} id="service-schema" />
      <JsonLd data={faqSchema} id="faq-schema" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'Walmart Marketplace Agency', url: URL },
        ]}
      />

      <SiteHeader locale="us" />

      <main className="wmp">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'Walmart Marketplace Agency', url: URL },
        ]} />
        {/* HERO */}
        <section className="wmp-hero">
          <div className="wmp-wrap wmp-hero-grid">
            <div className="wmp-hero-copy">
              <span className="wmp-pill"><span className="d" /> Walmart Marketplace Agency · United States</span>
              <h1 className="wmp-h1 disp">The Walmart Marketplace agency that gets you <span className="u">approved and selling</span></h1>
              <p className="wmp-lead">Seller application and approval, Walmart Connect ads, WFS fulfillment, and Buy Box strategy, run by one senior in-house team. Built on 12 years and 500+ commerce builds.</p>
              <HeroInlineForm region="us" source="us_services_walmart_marketplace_agency_hero" submitLabel="Get my free audit" />
              <div className="wmp-trust">
                <span className="tk"><Check size={15} strokeWidth={2.4} /> 500+ businesses served</span>
                <span className="tk"><Check size={15} strokeWidth={2.4} /> 12 years in commerce</span>
                <span className="tk"><Check size={15} strokeWidth={2.4} /> In-house senior team</span>
              </div>
            </div>
            <div className="wmp-hero-visual">
              <div className="wmp-hero-photo">
                <img src="/images/us/services/walmart-marketplace-agency/hero-walmart-warehouse.webp" alt="Warehouse associate scanning inventory for Walmart Marketplace fulfillment" width={506} height={760} loading="eager" fetchPriority="high" decoding="async" />
              </div>
              {/* Illustrative, qualitative visual only (not a specific client claim) */}
              <div className="wmp-metric">
                <span aria-hidden="true">
                  <svg width="48" height="26" viewBox="0 0 48 26" fill="none"><polyline points="2,22 11,18 19,20 27,12 35,14 46,3" stroke="#F05A28" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="46" cy="3" r="2.6" fill="#F05A28" /></svg>
                </span>
                <div>
                  <span className="hm-lab">Buy Box share</span>
                  <b className="hm-val">Trending up<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#177a48" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M17 7H8M17 7v9" /></svg></b>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ANSWER-FIRST */}
        <section className="wmp-answer">
          <div className="wmp-wrap in">
            <div className="q disp"><span className="ql">Quick answer</span>What does a Walmart Marketplace agency do?</div>
            <div className="a"><p><b>A Walmart Marketplace agency handles everything between applying and selling profitably:</b> the seller application and approval, WFS fulfillment setup, Walmart Connect advertising, listing and item-spec optimization, and Buy Box strategy. Instead of hiring separate freelancers, you get one accountable team that gets you approved, then runs the account to protect margin. FactoryJet does this for US brands on Walmart Seller Center.</p></div>
          </div>
        </section>

        {/* PROGRAM BAR */}
        <section className="wmp-logobar">
          <div className="wmp-wrap">
            <div className="t">Working across the Walmart Marketplace programs that matter</div>
            <div className="wmp-logos">{PROGRAMS.map((p) => <span key={p}>{p}</span>)}</div>
          </div>
        </section>

        {/* MARKET STATS (cited) */}
        <section className="wmp-sec pt0">
          <div className="wmp-wrap">
            <div className="wmp-sh"><span className="wmp-eyebrow">Why Walmart Marketplace</span><h2 className="disp">Why Walmart Marketplace is worth applying for</h2><p>Walmart’s third-party marketplace is smaller than Amazon and growing faster, which is exactly why getting in early matters.</p></div>
            <div className="wmp-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 14 }}>
              {STATS.map((s) => (
                <div key={s.v} className="wmp-crystal" style={{ padding: '24px 24px 22px' }}>
                  <div className="disp" style={{ fontSize: 34, color: '#F05A28', lineHeight: 1.04 }}>{s.v}</div>
                  <p style={{ color: '#3a3a38', fontSize: 15, lineHeight: 1.5, marginTop: 8 }}>{s.l}</p>
                  <a href={s.href} target="_blank" rel="noopener noreferrer nofollow" style={{ display: 'inline-block', marginTop: 12, fontSize: 12.5, color: '#B23E13', textDecoration: 'underline', textUnderlineOffset: 2 }}>Source: {s.src}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENTO CHANNELS */}
        <section className="wmp-sec">
          <div className="wmp-wrap">
            <div className="wmp-sh"><span className="wmp-eyebrow">What we run</span><h2 className="disp">Full-service Walmart Marketplace growth, under one roof</h2><p>Most agencies start after you are already approved. Getting onto Walmart Marketplace, and then winning there, needs the application, fulfillment, ads, and listings moving together. Each is a service we run in-house.</p></div>
            <div className="wmp-bento">
              {CHANNELS.map(({ Icon, title, body, link, label, span }) => (
                <Link key={title} href={link} className={`wmp-crystal wmp-bcard ${span}`}>
                  <div className="ic"><Icon size={22} strokeWidth={2} /></div>
                  <h3 className="disp">{title}</h3>
                  <p>{body}</p>
                  <span className="lk">{label} <span className="arw">→</span></span>
                </Link>
              ))}
              <div className="wmp-crystal wmp-bcard w6">
                <div>
                  <div className="ic"><Workflow size={22} strokeWidth={2} /></div>
                  <h3 className="disp">Walmart + Amazon + TikTok Shop</h3>
                  <p>We connect Walmart Marketplace with Amazon, TikTok Shop, and your Shopify or DTC store, so pricing, inventory, and creative stay consistent instead of competing against each other.</p>
                </div>
                <div className="mini"><span>Cross-channel</span><span>Consistent pricing</span><span>Shared inventory</span><span>Amazon · TikTok Shop</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* LISTICLE 1 */}
        <section className="wmp-sec pt0">
          <div className="wmp-wrap">
            <div className="wmp-sh"><span className="wmp-eyebrow">The playbook</span><h2 className="disp">The 6 levers we pull to grow Walmart Marketplace sales</h2></div>
            <div className="wmp-list">
              {LEVERS.map((l) => (
                <div key={l.b} className="wmp-crystal wmp-li"><span className="num" /><div><b>{l.b}</b><p>{l.p}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        {/* DARK */}
        <section className="wmp-dark">
          <div className="wmp-wrap wmp-sec">
            <div className="wmp-sh"><span className="wmp-eyebrow">Why FactoryJet</span><h2 className="disp">Built to get you approved and profitable, not to bill you for activity</h2><p>Three reasons brands bring their Walmart Marketplace launch to us and stay.</p></div>
            <div className="wmp-pillars">
              {PILLARS.map((p) => (
                <div key={p.k} className="wmp-pillar"><div className="k">{p.k}</div><h3 className="disp">{p.h}</h3><p>{p.p}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="wmp-sec">
          <div className="wmp-wrap">
            <div className="wmp-sh"><span className="wmp-eyebrow">How it works</span><h2 className="disp">From free audit to compounding Walmart Marketplace growth</h2></div>
            <div className="wmp-steps">
              {STEPS.map((s) => (
                <div key={s.n} className="wmp-step"><div className="n">{s.n}</div><h3 className="disp">{s.h}</h3><p>{s.p}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* LISTICLE 2 */}
        <section className="wmp-sec pt0">
          <div className="wmp-wrap">
            <div className="wmp-sh"><span className="wmp-eyebrow">Before you hire anyone</span><h2 className="disp">6 things to check before you hire a Walmart Marketplace agency</h2><p>Use this as a checklist, whether you talk to us or anyone else.</p></div>
            <div className="wmp-list">
              {CHECKS.map((c) => (
                <div key={c.b} className="wmp-crystal wmp-li"><span className="num" /><div><b>{c.b}</b><p>{c.p}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERACTIVE ROI CALCULATOR */}
        <section className="wmp-sec pt0" id="walmart-roi-calculator">
          <div className="wmp-wrap">
            <EcommerceRoiCalculator
              source="us_services_walmart_agency_page"
              defaultPlatform="shopify"
              defaultTarget="omnichannel"
            />
          </div>
        </section>

        {/* COMPARISON (reused v2 component) */}
        <section className="wmp-sec pt0">
          <div className="wmp-wrap">
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
                { feature: 'Approval + WFS + ads + listings', values: [yes, no('Ads only'), no('One skill'), partial('Depends on hire')] },
                { feature: 'Has gotten sellers approved before', values: [yes, no('Rarely'), partial('Maybe'), no('First time')] },
                { feature: 'Senior in-house team', values: [yes, partial('Often juniors'), yes, yes] },
                { feature: 'Buy Box / Featured Offer strategy', values: [yes, partial('Sometimes'), no('Rarely'), partial('Depends')] },
                { feature: 'Time to ramp', values: [yes, partial('Weeks'), partial('Weeks'), no('2-3 months')] },
                { feature: 'Profit-based reporting', values: [yes, partial('Ad metrics'), no('Limited'), yes] },
              ]}
            />
          </div>
        </section>

        {/* NAMED COMPETITORS */}
        <section className="wmp-sec pt0">
          <div className="wmp-wrap">
            <div className="wmp-sh"><span className="wmp-eyebrow">The landscape</span><h2 className="disp">Named Walmart agencies brands compare us with</h2><p>Most marketplace agencies start after you are approved. Here is where the known names fit, and where we fit.</p></div>
            <div className="wmp-list">
              {RIVALS.map((r) => (
                <div key={r.b} className="wmp-crystal wmp-li"><span className="num" /><div><b>{r.b}</b><p>{r.p}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        {/* E-E-A-T */}
        <section className="wmp-sec pt0">
          <div className="wmp-wrap wmp-eeat-grid">
            <div className="wmp-crystal wmp-eeat">
              <div><img className="wmp-avatar" src="/bhavesh_image.jpg" alt="Bhavesh Barot, Founder of FactoryJet" width={76} height={76} loading="lazy" decoding="async" /></div>
              <div>
                <div className="role">Led by the founder</div>
                <h3 className="disp">Bhavesh Barot, Founder of FactoryJet</h3>
                <p>Twelve years building and scaling commerce for 500+ businesses. Every engagement is run by FactoryJet&rsquo;s senior in-house team, not handed to subcontractors. You talk to the people doing the work.</p>
                <div className="wmp-reco"><span>Recognized on</span> <b>Clutch</b> <b>GoodFirms</b> <b>DesignRush</b> <b>SoftwareSuggest</b></div>
              </div>
            </div>
            <div className="wmp-teamframe">
              <img src="/images/us/services/service-team.webp" alt="The FactoryJet team at work" width={800} height={600} loading="lazy" decoding="async" />
            </div>
          </div>
        </section>

        {/* FAQ (reused v2 component, white background) */}
        <FAQ
          bgClassName="bg-white"
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Walmart Marketplace agency FAQs"
          lead="The questions US brands actually ask us about applying to and selling on Walmart Marketplace. Straight answers."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* FINAL CTA */}
        <section className="wmp-sec pt0" id="final-cta">
          <div className="wmp-wrap">
            <div className="wmp-finalcta">
              <span className="wmp-eyebrow">Get started</span>
              <h2 className="disp">Find out if your brand is approval-ready for Walmart</h2>
              <p>Send us your brand and get a free, no-obligation Walmart Marketplace audit from FactoryJet&rsquo;s senior team.</p>
              <Link href="/contact" className="wmp-cta-btn">Get my free Walmart audit</Link>
              <div className="obj">No long contracts. Keep the audit either way.</div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
