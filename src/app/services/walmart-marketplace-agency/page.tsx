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
  title: 'Walmart Marketplace Agency: Ads, WFS & Ops | FactoryJet',
  description: 'Full-service Walmart Marketplace agency for US brands: seller approval, Walmart Connect ads, WFS fulfillment, and Buy Box strategy. Free audit.',
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
    title: 'Walmart Marketplace Agency: Ads, WFS & Ops | FactoryJet',
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
    title: 'Walmart Marketplace Agency: Ads, WFS & Ops | FactoryJet',
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
  {
    category: 'basics',
    question: 'What does a Walmart Marketplace agency do?',
    answer: 'A Walmart Marketplace agency manages your entire seller journey. We handle your seller application and setup. We manage WFS fulfillment logistics. Our team runs Walmart Connect ads and listing optimization. We protect your Buy Box status across your catalog. You get one dedicated in-house team. We tie every ad dollar directly to net margin.',
  },
  {
    category: 'basics',
    question: 'How do I get approved to sell on Walmart Marketplace?',
    answer: 'You apply through Walmart Marketplace Seller Center. You must provide tax records and catalog data. Walmart checks brand history and product category fit. Applications with clean data get approved quickly. Missing files lead to delays or instant rejection. We prepare your documentation first. We ensure your application passes on the first try.',
  },
  {
    category: 'basics',
    question: 'How much does it cost to sell on Walmart Marketplace?',
    answer: 'Walmart charges no monthly subscription fee for sellers. You pay a category referral fee on each sale. You also pay WFS fees if you use Walmart logistics. Referral rates vary by product category. We audit your catalog margins before launching. We calculate your exact fee structure in advance.',
  },
  {
    category: 'basics',
    question: 'Do I need an agency, or can I apply to Walmart myself?',
    answer: 'You can apply on your own. However, many self-submitted applications get rejected. An experienced agency saves weeks of frustration. We structure your catalog data correctly. We set up WFS fulfillment and Connect ads immediately. That gets your products selling without trial and error.',
  },
  {
    category: 'basics',
    question: 'What is WFS (Walmart Fulfillment Services)?',
    answer: 'WFS is Walmart native fulfillment network. You ship inventory directly to Walmart warehouses. Walmart picks, packs, and delivers customer orders. WFS items receive two-day delivery badges. These badges increase your Buy Box win rate. Walmart also handles customer support and returns.',
  },
  {
    category: 'basics',
    question: 'Is Walmart Marketplace worth it for brands in 2026?',
    answer: 'Yes, it is a high-growth channel for US brands. Walmart buyers have strong purchasing intent. The marketplace has lower seller competition than Amazon. This dynamic allows faster organic ranking. It works best as part of an omnichannel sales mix.',
  },
  {
    category: 'basics',
    question: 'How is Walmart Marketplace different from Amazon?',
    answer: 'Walmart requires an upfront seller application. Amazon allows instant automated registration. Walmart has zero monthly seller account fees. Day-to-day operations are very similar. WFS mirrors FBA. Walmart Connect mirrors Sponsored Ads. Both reward fast delivery and competitive pricing.',
  },
  {
    category: 'services',
    question: 'Do you help with the Walmart Marketplace seller application?',
    answer: 'Yes, we prepare your entire submission package. We verify business documentation and tax records. We select the optimal product categories. We format your initial catalog feed. If you were rejected before, we fix the underlying issues.',
  },
  {
    category: 'services',
    question: 'Do you manage Walmart Connect ads?',
    answer: 'Yes, we run full Walmart Connect ad campaigns. We manage Sponsored Products and Search Brand Amplifier. We target high-intent search queries. We manage bids to meet strict margin targets. You receive transparent weekly performance reports.',
  },
  {
    category: 'services',
    question: 'Do you handle WFS setup and management?',
    answer: 'Yes, we manage your entire WFS workflow. We help select products suited for WFS. We create inbound shipments and barcode labels. We track warehouse delivery and inventory health. We prevent stockouts and costly storage fees.',
  },
  {
    category: 'services',
    question: 'Can you optimize our Walmart product listings?',
    answer: 'Yes, we optimize your full listing content. Walmart enforces strict item spec requirements. We write clear titles, bullet points, and descriptions. We upload compliant high-resolution product imagery. Optimized listings win higher organic search placement.',
  },
  {
    category: 'services',
    question: 'Do you help us win and keep the Buy Box (Featured Offer)?',
    answer: 'Yes, winning the Featured Offer is our primary focus. Walmart awards the Buy Box based on price and shipping speed. Seller track record also plays a major role. We maintain competitive pricing rules. We pair listings with WFS for maximum delivery speed.',
  },
  {
    category: 'services',
    question: 'Do you manage Walmart Marketplace account operations?',
    answer: 'Yes, we handle daily Seller Center operations. We resolve support tickets and customer inquiries. We monitor order defect rates and tracking metrics. Maintaining high seller ratings protects your account health.',
  },
  {
    category: 'services',
    question: 'Can you help us launch a new product on Walmart?',
    answer: 'Yes, we coordinate complete product launches. We audit item specs and prepare inventory. We launch targeted Walmart Connect campaigns on day one. Early ad traction generates sales history and reviews. This flywheel builds compounding organic visibility.',
  },
  {
    category: 'services',
    question: 'Do you also sell on Amazon and TikTok Shop?',
    answer: 'Yes, we manage unified omnichannel growth. We coordinate Amazon, Walmart Marketplace, and TikTok Shop. We keep catalog pricing and inventory in sync. You get one unified team across all channels.',
  },
  {
    category: 'services',
    question: 'Can you connect Walmart with my Shopify store?',
    answer: 'Yes, we integrate Walmart with your direct store. We sync catalog data with Shopify, BigCommerce, and WooCommerce. Orders and inventory route automatically. This setup prevents overselling and duplicate data entry.',
  },
  {
    category: 'working',
    question: 'How long until we see results on Walmart Marketplace?',
    answer: 'Application approval usually takes one to three weeks. Once live, ad and listing fixes impact sales in 30 days. Organic ranking builds over three to six months. We prioritize fast-payback listing fixes first.',
  },
  {
    category: 'working',
    question: 'Do I have to sign a long contract?',
    answer: 'No, we work on flexible rolling agreements. We earn your ongoing partnership each month. We outline all project scopes clearly up front. You remain in complete control of your account.',
  },
  {
    category: 'working',
    question: 'Who will actually work on my account?',
    answer: 'FactoryJet senior in-house team runs your account. You work directly with experienced marketplace specialists. We never hand client work to offshore juniors. That consistency produces superior growth results.',
  },
  {
    category: 'working',
    question: 'What size brands do you work with?',
    answer: 'We partner with small and mid-market US brands. We help emerging brands launch their first marketplace. We also scale established eight-figure merchant accounts. We tailor our scope to your catalog size.',
  },
  {
    category: 'working',
    question: 'How do you report on Walmart Marketplace performance?',
    answer: 'You receive custom dashboards tracking net profit. We monitor ad spend efficiency and Buy Box share. We also track order defect rates and return trends. We review numbers and next steps monthly.',
  },
  {
    category: 'working',
    question: 'How do we get started?',
    answer: 'Request a free Walmart audit on our site. We review your catalog and approval readiness. We deliver a tailored 90-day action plan. You decide if you want us to execute it.',
  },
  {
    category: 'services',
    question: 'What is the Walmart Item Page Quality Score (IPQS) and how is it calculated?',
    answer: 'Item Page Quality Score measures listing completeness. It evaluates content, offer price, and customer reviews. Scores above 95% boost organic placement in search. We optimize all attributes to hit top scores.',
  },
  {
    category: 'services',
    question: 'How does Walmart Connect Brand Amplifier differ from standard Sponsored Products?',
    answer: 'Search Brand Amplifier pins your banner at the top of search. It features your brand logo and curated products. It delivers prominent share-of-voice for top search terms. Standard ads appear inside search grids.',
  },
  {
    category: 'services',
    question: 'What are Walmart Pro Seller Badge requirements and benefits?',
    answer: 'The Pro Seller Badge rewards top marketplace merchants. Sellers must maintain 95% on-time delivery rates. Cancellation rates must stay below 1.5%. Badge placement increases buyer conversion by up to 20%.',
  },
  {
    category: 'services',
    question: 'How do you handle Walmart Marketplace UPC and GTIN barcode requirements?',
    answer: 'Walmart requires valid GS1-registered barcodes. We audit your catalog against GS1 US databases. We resolve barcode mismatch errors and variation conflicts. This ensures fast catalog ingestion without rejections.',
  },
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
  { Icon: ShieldCheck, title: 'Seller application & approval', body: 'We prepare your documentation, tax data, and catalog. We ensure fast approval without delays.', link: '/contact', label: 'Get approved', span: 'w3' },
  { Icon: Megaphone, title: 'Walmart Connect advertising', body: 'Sponsored Products and Search Brand Amplifier ads. We manage bids to strict profit targets.', link: '/services/ecommerce-growth-agency', label: 'Growth agency', span: 'w3' },
  { Icon: ClipboardList, title: 'WFS fulfillment logistics', body: 'Onboarding, inventory shipments, and two-day delivery badges. Fast delivery lifts Buy Box win rates.', link: '/contact', label: 'WFS logistics', span: 'cell' },
  { Icon: Search, title: 'Item spec & listing optimization', body: 'Compliant titles, attributes, and rich media. We ensure high Item Page Quality Scores.', link: '/services/ecommerce-seo', label: 'Ecommerce SEO', span: 'cell' },
  { Icon: Target, title: 'Buy Box & account operations', body: 'Daily Seller Center health, case resolution, and pricing discipline to protect the Featured Offer.', link: '/contact', label: 'Account health', span: 'cell' },
];

const LEVERS = [
  { b: 'Fast seller approval.', p: 'We prepare documentation and clean catalog feeds. You get approved on the first pass.' },
  { b: 'WFS fulfillment advantage.', p: 'Two-day delivery badges win buyer trust. Fast shipping lifts Buy Box win rates.' },
  { b: 'Walmart Connect ads.', p: 'Sponsored Products managed to contribution margin. We eliminate wasted ad spend.' },
  { b: 'Item spec quality.', p: 'High Item Page Quality Scores boost ranking. Accurate attributes prevent listing suppression.' },
  { b: 'Buy Box price discipline.', p: 'Automated repricing rules protect the Featured Offer. We defend your sales margins.' },
  { b: 'Unified multichannel sync.', p: 'We sync inventory with Shopify, BigCommerce, and Amazon. Data stays accurate across channels.' },
];

const CHECKS = [
  { b: 'Manages approval and ads.', p: 'Many agencies only run ads. You need support with applications, WFS, and ops.' },
  { b: 'Reports on net margin.', p: 'Ask how they track success. If they only report ROAS, keep looking.' },
  { b: 'Named senior specialists.', p: 'Confirm who works on your account. Avoid agencies that hand you to junior staff.' },
  { b: 'Deep Seller Center skills.', p: 'Look for deep WFS and spec knowledge. Platform expertise matters most.' },
  { b: 'Transparent monthly terms.', p: 'Avoid long lock-in contracts. Agencies should earn renewals through results.' },
  { b: 'Multichannel capabilities.', p: 'Ensure they connect Walmart with Amazon, TikTok Shop, and your DTC store.' },
];

const STEPS = [
  { n: 'Step 01', h: 'Audit.', p: 'We review your catalog readiness and approval status. We find hidden profit leaks.' },
  { n: 'Step 02', h: 'Plan.', p: 'We build a 90-day marketplace roadmap. Every initiative focuses on net profit.' },
  { n: 'Step 03', h: 'Launch.', p: 'We submit your application and set up WFS. We launch targeted Connect ads.' },
  { n: 'Step 04', h: 'Scale.', p: 'Weekly bid optimization and inventory monitoring. We double down on top sellers.' },
];

const PILLARS = [
  { k: 'One team.', h: 'Application, ads, and ops.', p: 'Seller approval, WFS setup, ads, and catalog managed together. No vendor finger-pointing.' },
  { k: 'Senior.', h: 'In-house commerce experts.', p: 'Your account is run by seasoned marketplace pros. Over 500 commerce projects delivered.' },
  { k: 'Profit-first.', h: 'Managed to contribution margin.', p: 'We optimize for bottom-line profit. Ad spend must deliver real cash return.' },
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
  { b: 'Tinuiti.', p: 'A massive performance agency built for enterprise brands. Requires enterprise-level ad budgets.' },
  { b: 'Pacvue and Flywheel.', p: 'Software and managed services focused on enterprise retail media. Less focus on catalog ops.' },
  { b: 'Marketplace-only boutiques.', p: 'Firms that manage Amazon and Walmart alone. They cannot support your direct DTC store.' },
  { b: 'Where FactoryJet fits.', p: 'One senior team running Walmart, Amazon, and DTC stores. Sized for growing mid-market brands.' },
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
            <div className="a"><p><b>A Walmart Marketplace agency manages your complete seller presence.</b> We handle seller approvals, WFS setup, Walmart Connect ads, listing optimization, and Buy Box strategy. You get one dedicated in-house team that ties spend directly to profit. FactoryJet runs this for US brands across Walmart Seller Center.</p></div>
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

        
        {/* WALMART MARKETPLACE INTEGRATIONS & ERP SYNC */}
        <section className="wmp-sec pt0">
          <div className="wmp-wrap">
            <div className="wmp-sh">
              <span className="wmp-eyebrow">Connected Architecture</span>
              <h2 className="disp">Walmart Marketplace ERP sync and systems integration</h2>
              <p>Connect your Walmart storefront directly to your warehouse and backend tools.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginTop: 24 }}>
              <div className="wmp-crystal" style={{ padding: '24px' }}>
                <h3 className="disp" style={{ fontSize: 20, marginBottom: 12 }}>Omnichannel marketplace sync.</h3>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: '#3a3a38', marginBottom: 12 }}>
                  We unify Walmart Marketplace with Amazon Seller Central and Amazon Vendor Central. We also connect TikTok Shop.
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: '#3a3a38', marginBottom: 12 }}>
                  Integrate your catalog with Shopify, Shopify Plus, BigCommerce, WooCommerce, and Magento.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['Walmart Marketplace', 'Amazon Seller Central', 'Amazon Vendor Central', 'TikTok Shop', 'Shopify Plus', 'BigCommerce', 'WooCommerce', 'Magento'].map(s => (
                    <span key={s} style={{ fontSize: 12, padding: '4px 8px', background: '#f5f5f4', borderRadius: 4, fontWeight: 600 }}>{s}.</span>
                  ))}
                </div>
              </div>

              <div className="wmp-crystal" style={{ padding: '24px' }}>
                <h3 className="disp" style={{ fontSize: 20, marginBottom: 12 }}>ERP sync and warehouse routing.</h3>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: '#3a3a38', marginBottom: 12 }}>
                  We implement automated inventory sync across warehouses. We build custom erp integration links for NetSuite, SAP, and QuickBooks.
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: '#3a3a38', marginBottom: 12 }}>
                  Connect your warehouse management system (wms) and order management system (oms). Manage multi-warehouse stock allocation and 3pl hubs.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['inventory sync', 'multi-warehouse', 'stock allocation', 'warehouse management system', 'order management system', '3pl', 'dropshipping'].map(c => (
                    <span key={c} style={{ fontSize: 12, padding: '4px 8px', background: '#f5f5f4', borderRadius: 4, fontWeight: 600 }}>{c}.</span>
                  ))}
                </div>
              </div>

              <div className="wmp-crystal" style={{ padding: '24px' }}>
                <h3 className="disp" style={{ fontSize: 20, marginBottom: 12 }}>Product feeds and API automation.</h3>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: '#3a3a38', marginBottom: 12 }}>
                  Connect product information management (pim) and digital asset management (dam) systems. We automate your product feed rules.
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: '#3a3a38', marginBottom: 12 }}>
                  Our team deploys feed optimisation for shopping ads. We set up realtime webhook alerts and admin api connections.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['product information management', 'digital asset management', 'product feed', 'feed optimisation', 'webhook', 'admin api', 'api-first'].map(c => (
                    <span key={c} style={{ fontSize: 12, padding: '4px 8px', background: '#f5f5f4', borderRadius: 4, fontWeight: 600 }}>{c}.</span>
                  ))}
                </div>
              </div>

              <div className="wmp-crystal" style={{ padding: '24px' }}>
                <h3 className="disp" style={{ fontSize: 20, marginBottom: 12 }}>B2B pricing and wholesale rules.</h3>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: '#3a3a38', marginBottom: 12 }}>
                  Support enterprise business buyers. Configure contract pricing, tiered pricing, volume pricing, and custom price list tiers.
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: '#3a3a38', marginBottom: 12 }}>
                  Set minimum order quantity rules. Enable bulk ordering, quick order tools, reorder workflows, and net terms.
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
            <div className="wmp-sh"><span className="wmp-eyebrow">Market Comparison</span><h2 className="disp">Named Walmart agencies brands compare us with</h2><p>Most marketplace agencies start after you are approved. Here is where the known names fit, and where we fit.</p></div>
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
