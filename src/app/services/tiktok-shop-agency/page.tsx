import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import Link from 'next/link';
import { Users, Megaphone, ClipboardList, Video, Search, Workflow, Check } from 'lucide-react';

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

import './tiktok-shop-agency.css';

const URL = 'https://factoryjet.com/services/tiktok-shop-agency';

/* ── SEO / Metadata ─────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'TikTok Shop Agency for US Brands: Ads & Affiliates | FactoryJet',
  description:
    'FactoryJet is a full-service TikTok Shop agency for US brands: shop setup and management, TikTok Shop ads, affiliate and creator programs, LIVE selling, and listing optimization under one senior in-house team. Get a free TikTok Shop audit.',
  keywords: [
    'tiktok shop agency',
    'tiktok shop marketing agency',
    'tiktok shop management agency',
    'tiktok shop management',
    'tiktok shop ads',
    'tiktok shop affiliate marketing',
    'tiktok shop affiliate program',
    'best tiktok shop agency',
    'tiktok shop creator agency',
    'full-service tiktok shop agency',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'TikTok Shop Agency for US Brands: Ads & Affiliates | FactoryJet',
    description:
      'Full-service TikTok Shop growth for US brands: shop management, ads, affiliate and creator programs, and LIVE selling under one senior in-house team. Free TikTok Shop audit.',
    url: URL,
    images: [
      { url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet TikTok Shop Agency' },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TikTok Shop Agency for US Brands: Ads & Affiliates | FactoryJet',
    description:
      'Full-service TikTok Shop growth: management, ads, affiliates, and LIVE selling, one senior in-house team. Free TikTok Shop audit.',
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

/* ── FAQ data (drives both the on-page accordion and the FAQPage schema) ──── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'The basics' },
  { key: 'services', label: 'Services & channels' },
  { key: 'working', label: 'Working together' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  { category: 'basics', question: 'What does a TikTok Shop agency do?', answer: 'A TikTok Shop agency runs everything that turns TikTok content into sales: shop setup and catalog, TikTok Shop ads, affiliate and creator partnerships, LIVE selling, and listing optimization. Instead of hiring separate freelancers, you get one accountable team that ties content and ad spend to orders and profit. FactoryJet does this for US brands on TikTok Shop Seller Center.' },
  { category: 'basics', question: 'Is TikTok Shop worth it for brands in 2026?', answer: 'For most physical-product brands, yes, if you are willing to lean into content. TikTok Shop is one of the few channels where a brand with no ad budget can reach thousands of buyers, because discovery runs on video and creators, not search. It rewards brands that produce short demo content and run an active affiliate program, and it disappoints those expecting a listing to sell itself.' },
  { category: 'basics', question: 'How much does a TikTok Shop agency cost?', answer: 'It depends on which services you need and how much of the shop we run. Rather than a fixed package, we scope the work to your goals and share a clear quote, so you only invest in what will move sales. Ask for a free TikTok Shop audit and we will size it with you, with no obligation.' },
  { category: 'basics', question: 'Do I need an agency, or can I run TikTok Shop myself?', answer: 'If TikTok Shop is a small experiment, you can run it in-house. Once ads, an affiliate program, LIVE cadence, and daily content outgrow one person, most brands need help. An agency pays for itself when the sales it adds are worth more than the fee. A free audit shows whether you are ready for that step or better off starting lean.' },
  { category: 'basics', question: 'Is TikTok Shop legit and safe for brands?', answer: 'Yes. TikTok Shop is TikTok’s official in-app marketplace with protected checkout and seller payouts held until delivery. For a brand, the main risks are operational, not fraud: late shipping, weak content, or thin reviews get you penalized. Run it well and the same low barrier that lets competitors in becomes your advantage, because trust and consistency are what win.' },
  { category: 'basics', question: 'What is GMV, and how do you measure success?', answer: 'GMV is gross merchandise value, the total sales value your shop generates. We manage to GMV and profit rather than views or likes, tracking ad efficiency, affiliate-driven sales, and contribution margin. Vanity metrics like impressions do not pay the bills, so our reporting centers on the numbers that decide whether TikTok Shop actually makes you money.' },
  { category: 'basics', question: 'How much does TikTok Shop charge sellers?', answer: 'TikTok Shop has no monthly fee. It takes a referral (commission) fee per sale plus payment processing, and TikTok has raised the referral fee over time, so it sits around 8% for most categories in 2026. You also set the affiliate commission you pay creators. Always confirm your live rate inside Seller Center, since TikTok adjusts it and runs reduced-fee windows for new shops.' },

  { category: 'services', question: 'Do you manage TikTok Shop ads?', answer: 'Yes. We run TikTok Shop ads end to end: Spark Ads that put budget behind your best organic videos, GMV Max campaigns, and video and LIVE shopping ads. Everything is managed to ROAS and GMV, not vanity views, with transparent reporting on what each dollar returns. Ads work best layered on top of strong content and an active affiliate program, so we build those together.' },
  { category: 'services', question: 'Do you run the TikTok Shop affiliate and creator program?', answer: 'Yes, and it is often the biggest lever. We recruit and vet creators, set commissions they will actually chase, brief them, ship samples, and manage the ongoing relationships so a steady stream of creators sells your product for you. For most brands, the affiliate program drives more TikTok Shop sales than their own account does, so we treat it as a core service, not an afterthought.' },
  { category: 'services', question: 'Can you manage our TikTok Shop account end to end?', answer: 'Yes. Full TikTok Shop management covers the daily work: Seller Center operations, catalog and variations, order and inventory monitoring, reviews and Q&A, policy compliance, and coordination across ads, affiliates, and content. We keep the shop healthy so small issues do not become suppressed listings, and so your team can focus on product instead of admin.' },
  { category: 'services', question: 'Do you produce content and run LIVE selling?', answer: 'Yes. We plan and produce short-form product videos and run scheduled LIVE shopping sessions, either with your team or through our creators. Content is the engine on TikTok Shop, so we treat it as an always-on system rather than one-off posts, and we use LIVE to add urgency and answer buyer questions in real time.' },
  { category: 'services', question: 'Do you optimize our product listings?', answer: 'Yes. We optimize titles, images, and product details so that when a video or creator sends a buyer to your listing, it actually converts. We also work on reviews and pricing signals, because TikTok Shop rewards listings that close the sale after the tap. Great content sending traffic to a weak listing wastes the reach, so we fix both together.' },
  { category: 'services', question: 'Can you help us launch a new product on TikTok Shop?', answer: 'Yes. Launches need a plan, not just a live listing. We handle a conversion-ready listing, a launch content and creator push, an early affiliate campaign, and a compliant review strategy. The goal is to build momentum in the first weeks, when the algorithm decides how much reach your product earns, so an early creator surge often makes or breaks the launch.' },
  { category: 'services', question: 'Do you also sell on Amazon and our own store?', answer: 'Yes. TikTok Shop is usually the demand-creation channel, not the whole strategy. We run it alongside Amazon and your own store so pricing, inventory, and branding stay consistent. If you want a single team across marketplaces and your site rather than three disconnected ones, that is exactly how we work.' },
  { category: 'services', question: 'Do you handle fulfillment on TikTok Shop?', answer: 'We manage the fulfillment decisions that affect sales and ratings: shipping settings, dispatch speed, and whether Fulfilled by TikTok fits your catalog. Fast, reliable shipping is not optional on TikTok Shop, since late delivery gets you penalized and kills reviews. We do not run your warehouse, but we make sure your fulfillment protects your account health.' },
  { category: 'services', question: 'What kind of creators can you get for our brand?', answer: 'We match creators to your product and margin rather than chasing follower counts. That usually means a mix of small and mid-size creators in your niche whose audiences actually buy, plus a few larger ones for reach. Ten aligned creators posting consistently beats one big name posting once, so we build a roster, not a single splashy deal.' },

  { category: 'working', question: 'How long until we see results on TikTok Shop?', answer: 'Content and affiliate momentum often move numbers in the first 30 to 60 days, especially once a few creator videos land. Ads scale what is already working. A durable, profitable engine takes three to six months to build. We prioritize the fastest-payback work first, usually creators and ad fixes, so early wins help fund the longer plays.' },
  { category: 'working', question: 'Do I have to sign a long contract?', answer: 'No. We work on short, rolling terms and earn the renewal each month with results. If a bigger project like a full launch makes sense, we scope it clearly up front so there are no surprises. Good agencies keep clients by performing, not by locking them into a year they cannot leave.' },
  { category: 'working', question: 'Who will actually work on my account?', answer: 'FactoryJet’s senior in-house team. The TikTok Shop specialists in your kickoff are the people doing the daily work, not a sales pod that hands you to offshore juniors after you sign. That is a deliberate choice, and it is a big part of why clients stay with us.' },
  { category: 'working', question: 'What size brands do you work with?', answer: 'Mostly US small and mid-market brands, from sellers making their first serious push into TikTok Shop to established brands scaling their creator and ad spend. We scope the engagement to your stage and catalog rather than forcing one package on everyone, and we will tell you honestly if you are too early to need us yet.' },
  { category: 'working', question: 'How do you report on TikTok Shop performance?', answer: 'You get a dashboard tied to GMV, ad efficiency, affiliate-driven sales, and profit, plus a plain-language monthly review of what we did, what it returned, and what is next. We report on the numbers that decide whether TikTok Shop makes you money, not vanity metrics like views dressed up as progress.' },
  { category: 'working', question: 'How do we get started?', answer: 'Request the free TikTok Shop audit with your brand and your email. We come back with a teardown of your shop, ads, affiliate program, and content, plus a suggested 90-day plan. Then you decide if you want us to run it. No long sales cycle, and the audit is yours to keep either way.' },
  { category: 'services', question: 'What are TikTok Shop Seller Performance metrics and Late Dispatch Rate (LDR) thresholds?', answer: 'TikTok enforces strict account health guidelines: Late Dispatch Rate (LDR) must stay below 4%, Seller Fault Cancellation Rate below 2.5%, and Customer Inquiries responded to within 24 hours. We monitor operational compliance daily to protect your shop from listing suppression or merchant probation.' },
  { category: 'services', question: 'How do Spark Ads amplify organic creator affiliate videos?', answer: 'Spark Ads allow your brand to put paid ad budget directly behind high-performing organic videos posted by your affiliate creators using their authorization codes. This preserves authentic social proof, comments, and creator identity while driving targeted traffic to your in-app product page.' },
  { category: 'services', question: 'What is GMV Max on TikTok Shop and how does it compare to custom ad group bidding?', answer: 'GMV Max is TikTok’s automated algorithmic bidding solution that distributes budget across short-form videos, LIVE streams, and shopping tabs simultaneously to maximize gross merchandise value. We utilize a hybrid approach: custom value-based ad groups for stable winners and GMV Max for rapid product catalog scaling.' },
  { category: 'services', question: 'How do you connect TikTok Shop Seller Center to Shopify for real-time inventory sync?', answer: 'We configure native Shopify TikTok App connectors and automated middleware pipelines. Every order placed on TikTok Shop deducts real-time inventory from your central Shopify or ERP warehouse and automatically pushes carrier tracking numbers back to TikTok to satisfy dispatch SLAs.' },
];

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'TikTok Shop Agency',
  serviceType: 'TikTok Shop management and social commerce growth',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet' },
  areaServed: { '@type': 'Country', name: 'United States' },
  url: URL,
  description:
    'FactoryJet is a full-service TikTok Shop agency for US brands, running shop setup and management, TikTok Shop ads, affiliate and creator programs, content and LIVE selling, and listing optimization as one accountable in-house team.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'TikTok Shop growth services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'TikTok Shop setup and management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'TikTok Shop ads (Spark Ads and GMV Max)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'TikTok Shop affiliate and creator program management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content production and LIVE selling' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Product listing and catalog optimization' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cross-channel commerce and AI automation' } },
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
  { Icon: Users, title: 'Affiliate & creator program', body: 'We recruit, vet, and manage the creators who sell your product for a commission you set. For most brands this drives more sales than their own account does.', link: '/blog/how-to-sell-on-tiktok-shop-2026', label: 'How TikTok Shop selling works', span: 'w3' },
  { Icon: Megaphone, title: 'TikTok Shop ads', body: 'Spark Ads, GMV Max, and video and LIVE shopping ads, managed to ROAS and GMV rather than vanity views. Budget behind what is already working.', link: '/services/ecommerce-growth-agency', label: 'Full-funnel growth', span: 'w3' },
  { Icon: ClipboardList, title: 'Shop setup & management', body: 'Seller Center setup, catalog, orders, reviews, and compliance, so the daily operations never become the bottleneck.', link: '/contact', label: 'Talk to our team', span: 'cell' },
  { Icon: Video, title: 'Content & LIVE selling', body: 'Short-form product videos and scheduled LIVE sessions that convert with urgency and real-time answers.', link: '/portfolio', label: 'See our work', span: 'cell' },
  { Icon: Search, title: 'Listing & catalog optimization', body: 'Titles, images, reviews, and pricing so tagged products close the sale after the tap.', link: '/services/ecommerce-seo', label: 'Ecommerce SEO', span: 'cell' },
];

const LEVERS = [
  { b: 'A creator and affiliate engine', p: 'Recruit creators and set commissions they will chase, so your product spreads without you making every video.' },
  { b: 'Ads that scale winners', p: 'Spark Ads and GMV Max behind your best organic videos and products, managed to profit, not views.' },
  { b: 'LIVE selling', p: 'Scheduled LIVE sessions that add urgency and answer buyer questions while they are ready to buy.' },
  { b: 'Content as a system', p: 'A steady stream of short demo videos, not one-off posts, so the algorithm keeps finding new buyers.' },
  { b: 'Listings that convert the tap', p: 'Titles, images, reviews, and price so the product page closes what your content opens.' },
  { b: 'Reliable fulfillment', p: 'Ship on time and package well, so you keep ratings and avoid the penalties that quietly kill reach.' },
];

const CHECKS = [
  { b: 'Runs affiliates and ads', p: 'Ads-only shops leave the biggest TikTok Shop lever, the creator program, on the table.' },
  { b: 'Has a real creator network', p: 'Ask how they recruit and vet creators. A vague answer means you are the one doing outreach.' },
  { b: 'Reports on GMV and profit', p: 'If success is defined as views or impressions alone, keep looking.' },
  { b: 'Knows Seller Center and ads', p: 'Spark Ads, GMV Max, Affiliate Center, and compliance. Platform depth beats generic marketing.' },
  { b: 'Transparent, scoped work', p: 'No mystery retainers. You should know what you get and what comes next.' },
  { b: 'No long lock-in', p: 'Good agencies earn the renewal monthly. Be wary of year-long contracts up front.' },
];

const STEPS = [
  { n: 'Step 01', h: 'Audit', p: 'A free teardown of your shop, ads, affiliate program, and content, showing exactly where sales leak.' },
  { n: 'Step 02', h: 'Plan', p: 'A prioritized 90-day TikTok Shop growth plan, ranked by profit impact. Yours to keep.' },
  { n: 'Step 03', h: 'Build', p: 'We launch creator outreach, restructure ads, set a LIVE cadence, and fix listings fast.' },
  { n: 'Step 04', h: 'Scale', p: 'Weekly iteration and profit-based reporting. We double down on what works, cut what does not.' },
];

const PILLARS = [
  { k: 'One team', h: 'Content, ads, and affiliates together', p: 'Creators, ads, listings, and ops handled by people who talk daily. No finger-pointing between three vendors.' },
  { k: 'Senior', h: 'In-house, not offshored juniors', p: 'The TikTok Shop specialists in your kickoff are the ones doing the work. A senior team that has shipped 500+ commerce projects.' },
  { k: 'Profit-first', h: 'We manage to GMV, not vanity', p: 'Judged on gross merchandise value and contribution margin, so growth actually reaches your bank account.' },
];

const PROGRAMS = ['Seller Center', 'Spark Ads', 'GMV Max', 'Affiliate Center', 'LIVE Shopping', 'Fulfilled by TikTok'];

/* Cited market stats. Every figure links to a real, opened source. */
const STATS = [
  { v: '$15.82B', l: 'in US sales ran through TikTok Shop in 2025, up from almost nothing when it launched stateside in late 2023.', src: 'EMARKETER, 2025', href: 'https://www.emarketer.com/press-releases/tiktok-shop-makes-up-nearly-20-of-social-commerce-in-2025/' },
  { v: '18.2%', l: 'of all US social commerce now happens on TikTok Shop, and that share is projected to reach 24% by 2027.', src: 'EMARKETER, 2025', href: 'https://www.emarketer.com/press-releases/tiktok-shop-makes-up-nearly-20-of-social-commerce-in-2025/' },
  { v: '407%', l: 'how fast TikTok Shop grew its US sales in a single year, then added another 108% on top the next.', src: 'EMARKETER, 2025', href: 'https://www.emarketer.com/press-releases/tiktok-shop-makes-up-nearly-20-of-social-commerce-in-2025/' },
];

/* Real, named TikTok Shop agencies brands weigh us against, framed honestly. */
const RIVALS = [
  { b: 'Movers+Shakers', p: 'A creative-first agency born from TikTok culture, behind viral work for brands like e.l.f. The right call when a big-swing creative campaign is the one thing you need.' },
  { b: 'Fanbytes by Brainlabs', p: 'Gen Z influencer specialists with deep youth-culture reach. Strong for awareness pushes, lighter on running the shop, ads, and listings day to day.' },
  { b: 'The Influencer Marketing Factory', p: 'A more process-driven social commerce agency built around creators and GMV. Similar goals to ours, weighted toward the influencer side.' },
  { b: 'Where FactoryJet fits', p: 'One team running the shop, ads, affiliate program, LIVE selling, and listings together, and connecting TikTok Shop to Amazon and your own store.' },
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
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'TikTok Shop Agency', url: URL },
        ]}
      />

      <SiteHeader locale="us" />

      <main className="tts">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'TikTok Shop Agency', url: URL },
        ]} />
        {/* HERO */}
        <section className="tts-hero">
          <div className="tts-wrap tts-hero-grid">
            <div className="tts-hero-copy">
              <span className="tts-pill"><span className="d" /> TikTok Shop Agency · United States</span>
              <h1 className="tts-h1 disp">The TikTok Shop agency that turns views into <span className="u">orders</span></h1>
              <p className="tts-lead">Shop setup and management, TikTok Shop ads, affiliate and creator programs, and LIVE selling, run by one senior in-house team. Built on 12 years and 500+ commerce builds.</p>
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

        {/* ANSWER-FIRST */}
        <section className="tts-answer">
          <div className="tts-wrap in">
            <div className="q disp"><span className="ql">Quick answer</span>What does a TikTok Shop agency do?</div>
            <div className="a"><p><b>A TikTok Shop agency runs everything that turns TikTok content into sales:</b> shop setup and catalog, TikTok Shop ads, affiliate and creator partnerships, LIVE selling, and listing optimization. Instead of hiring separate freelancers, you get one accountable team that ties content and ad spend to orders and profit. FactoryJet does this for US brands on TikTok Shop Seller Center.</p></div>
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
            <div className="tts-sh"><span className="tts-eyebrow">Why TikTok Shop</span><h2 className="disp">Why TikTok Shop is worth the effort</h2><p>TikTok Shop went from brand new to a real revenue channel in about two years. The numbers show why brands are moving fast.</p></div>
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
            <div className="tts-sh"><span className="tts-eyebrow">What we run</span><h2 className="disp">Full-service TikTok Shop growth, under one roof</h2><p>Most agencies run only ads. Growing on TikTok Shop needs creators, content, ads, and shop operations moving together. Each is a service we run in-house.</p></div>
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
                  <p>We connect TikTok Shop with Amazon and your Shopify or DTC store, and use AI for content, ad creative, and reporting, so the whole funnel compounds instead of competing. Many brands add <Link href="/services/walmart-marketplace-agency" className="tts-inline-link">Walmart Marketplace</Link> as a third channel.</p>
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

        {/* ── Creator Seeding & GMV Scaling Framework ── */}
        <section className="tts-sec pt0">
          <div className="tts-wrap">
            <div className="tts-sh">
              <span className="tts-eyebrow">Creator Architecture</span>
              <h2 className="disp">The 4-Pillar TikTok Shop Creator Seeding &amp; Spark Scaling Engine</h2>
              <p>
                Organic virality is not an accident—it is a repeatable engineering pipeline. Here is how we turn creator seeding into consistent, compounding 7-figure GMV:
              </p>
            </div>
            <div className="tts-list" style={{ marginTop: 24 }}>
              <div className="tts-crystal tts-li">
                <span className="num" />
                <div>
                  <b>1. High-Volume Micro-Creator Seeding (50+ Sample Dispatches/Month)</b>
                  <p>
                    We identify, vet, and dispatch targeted product samples to high-engagement micro-creators (5k–50k followers) in your niche. Our proprietary outreach workflows ensure 70%+ of sample recipients post authentic demo reviews with shoppable product anchors within 14 days.
                  </p>
                </div>
              </div>
              <div className="tts-crystal tts-li">
                <span className="num" />
                <div>
                  <b>2. Tiered Open &amp; Targeted Affiliate Commission Structures</b>
                  <p>
                    We configure high-incentive affiliate commission rates (15%–25%) that motivate top-tier creators to prioritize your product over competitors, backed by automated sample approval rules inside TikTok Shop Affiliate Center.
                  </p>
                </div>
              </div>
              <div className="tts-crystal tts-li">
                <span className="num" />
                <div>
                  <b>3. Spark Ads Amplification Behind Organic Breakout Videos</b>
                  <p>
                    When an affiliate video generates organic sales velocity, we immediately request creator Spark Ad authorization codes and deploy paid ad spend to scale the video across broader demographic segments, achieving 4.5x+ blended ROAS.
                  </p>
                </div>
              </div>
              <div className="tts-crystal tts-li">
                <span className="num" />
                <div>
                  <b>4. Scheduled LIVE Shopping Sprint Production</b>
                  <p>
                    We organize high-energy 2-hour LIVE shopping broadcasts featuring exclusive bundle flash discounts, countdown timers, and interactive product demonstrations that capture immediate buyer impulse and lift algorithmic shop rank.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DARK */}
        <section className="tts-dark">
          <div className="tts-wrap tts-sec">
            <div className="tts-sh"><span className="tts-eyebrow">Why FactoryJet</span><h2 className="disp">Built to grow sales, not to bill you for activity</h2><p>Three reasons brands move their TikTok Shop to us and stay.</p></div>
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
            <div className="tts-sh"><span className="tts-eyebrow">How it works</span><h2 className="disp">From free audit to compounding TikTok Shop growth</h2></div>
            <div className="tts-steps">
              {STEPS.map((s) => (
                <div key={s.n} className="tts-step"><div className="n">{s.n}</div><h3 className="disp">{s.h}</h3><p>{s.p}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* LISTICLE 2 */}
        <section className="tts-sec pt0">
          <div className="tts-wrap">
            <div className="tts-sh"><span className="tts-eyebrow">Before you hire anyone</span><h2 className="disp">6 things to check before you hire a TikTok Shop agency</h2><p>Use this as a checklist, whether you talk to us or anyone else.</p></div>
            <div className="tts-list">
              {CHECKS.map((c) => (
                <div key={c.b} className="tts-crystal tts-li"><span className="num" /><div><b>{c.b}</b><p>{c.p}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERACTIVE ROI CALCULATOR */}
        <section className="tts-sec pt0" id="tiktok-roi-calculator">
          <div className="tts-wrap">
            <EcommerceRoiCalculator
              source="us_services_tiktok_agency_page"
              defaultPlatform="shopify"
              defaultTarget="omnichannel"
            />
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
                { feature: 'Time to ramp', values: [yes, partial('Weeks'), partial('Weeks'), no('2-3 months')] },
                { feature: 'Profit-based reporting', values: [yes, partial('Ad metrics'), no('Limited'), yes] },
              ]}
            />
          </div>
        </section>

        {/* NAMED COMPETITORS */}
        <section className="tts-sec pt0">
          <div className="tts-wrap">
            <div className="tts-sh"><span className="tts-eyebrow">The landscape</span><h2 className="disp">Named TikTok Shop agencies brands compare us with</h2><p>Most TikTok Shop help is creative or influencer only. Here is where the known names fit, and where we fit.</p></div>
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
                <div className="tts-reco"><span>Recognized on</span> <b>Clutch</b> <b>GoodFirms</b> <b>DesignRush</b> <b>SoftwareSuggest</b></div>
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
          lead="The questions US brands actually ask us about selling on TikTok Shop. Straight answers."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

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
