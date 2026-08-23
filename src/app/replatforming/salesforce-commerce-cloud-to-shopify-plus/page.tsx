import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import EnterpriseArchitectureBlueprint from '@/components/v2/EnterpriseArchitectureBlueprint';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-23';

export const metadata: Metadata = {
  title: 'Salesforce Commerce Cloud to Shopify Plus Migration | Zero-Downtime SFCC Replatforming | FactoryJet',
  description:
    'Complete guide and engineering blueprint for migrating from Salesforce Commerce Cloud (SFCC / Demandware) to Shopify Plus. Learn how we replace custom cartridges, rebuild promotions, connect ERPs, and preserve 100% SEO ranking equity with zero cutover downtime.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Salesforce Commerce Cloud to Shopify Plus Migration | Zero-Downtime Blueprint | FactoryJet',
    description:
      'How enterprise brands move from SFCC to Shopify Plus: cartridge replacement, promotions rebuild with Shopify Functions, ERP sync, and zero-downtime cutover.',
    url: 'https://factoryjet.com/replatforming/salesforce-commerce-cloud-to-shopify-plus',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet Salesforce Commerce Cloud to Shopify Plus migration' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SFCC to Shopify Plus Migration | FactoryJet',
    description: 'Salesforce Commerce Cloud to Shopify Plus replatforming made simple, fast, and risk-free.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/replatforming/salesforce-commerce-cloud-to-shopify-plus' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Why Move to Shopify Plus' },
  { key: 'cost', label: 'Costs & ROI' },
  { key: 'arch', label: 'Cartridges & Code' },
  { key: 'data', label: 'Pricing & Promotions' },
  { key: 'integrations', label: 'ERP & Integrations' },
  { key: 'seo', label: 'SEO & Downtime' },
];

const FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'Why are enterprise brands moving from Salesforce Commerce Cloud to Shopify Plus?',
    answer:
      'Enterprise brands leave Salesforce Commerce Cloud (SFCC) primarily for three reasons: 1) Massive cost savings by eliminating GMV percentage fees and expensive developer retainers, 2) Extreme speed of execution where marketing teams can launch new campaigns in minutes rather than waiting weeks for cartridge deployments, and 3) Access to modern commerce features like 1-click Shop Pay checkout, native global selling, and a robust app ecosystem.',
  },
  {
    category: 'basics',
    question: 'Is Shopify Plus truly ready for $20M to $100M+ enterprise scale?',
    answer:
      'Yes. Today, Shopify Plus powers Fortune 500 brands and global powerhouses doing hundreds of millions in sales (including Mattel, Heinz, Gymshark, and Staples). Shopify handles over $40,000 in sales per minute during Black Friday flash sales with 99.99% uptime, built-in global CDN, and automated PCI-DSS Level 1 compliance.',
  },
  {
    category: 'cost',
    question: 'How much money do brands actually save switching from SFCC to Shopify Plus?',
    answer:
      'Most enterprise brands save between 40% to 70% in total cost of ownership (TCO). On SFCC, companies typically pay $150,000–$500,000+ in annual software licenses plus a percentage of gross sales (GMV tax) and $150–$250/hour for specialized SFCC developers. On Shopify Plus, you pay a predictable flat enterprise fee with no mandatory developer retainers for basic content edits.',
  },
  {
    category: 'arch',
    question: 'What happens to our custom SFCC cartridges and ISML templates?',
    answer:
      'SFCC cartridges do not copy over directly because they are proprietary to Salesforce. During migration, we perform a cartridge-by-cartridge inventory to see what business logic is actually used. We then rebuild necessary features using modern Shopify theme sections, custom Shopify Apps, or Shopify Functions (serverless code executed at checkout). Unused or legacy cartridges that slow down your store are safely retired.',
  },
  {
    category: 'arch',
    question: 'Does it matter if we are currently on SiteGenesis or SFRA?',
    answer:
      'We support migrations from both. SFRA (Storefront Reference Architecture) is newer and cleaner, making code auditing faster. SiteGenesis estates are older and often have 5–10 years of accumulated custom code. We audit all custom templates and business rules up front so there are never any mid-project surprises.',
  },
  {
    category: 'data',
    question: 'How do SFCC price books and complex promotions map to Shopify Plus?',
    answer:
      'SFCC price books map cleanly to Shopify Markets, custom price lists, and native Shopify Plus B2B catalogs. For complex tiered discounts and promotion stacking rules, we use Shopify Functions—lightweight serverless scripts that run in under 5 milliseconds directly on Shopify checkout without slowing down the page.',
  },
  {
    category: 'integrations',
    question: 'Can we keep our NetSuite, SAP, Manhattan WMS, and Salesforce CRM connected?',
    answer:
      'Yes. Your enterprise back-office systems stay completely intact as your single source of truth. We connect NetSuite, SAP S/4HANA, Manhattan WMS, Akeneo PIM, and Salesforce Service Cloud directly to Shopify Plus using reliable real-time event webhooks and REST APIs.',
  },
  {
    category: 'integrations',
    question: 'Do we have to leave Salesforce CRM or Marketing Cloud if we leave SFCC?',
    answer:
      'No. Leaving Salesforce B2C Commerce does NOT mean leaving the Salesforce ecosystem. Your Salesforce CRM, Service Cloud, and Marketing Cloud continue to work seamlessly with Shopify Plus via official API connectors.',
  },
  {
    category: 'seo',
    question: 'Will we lose our Google search rankings and organic traffic during migration?',
    answer:
      'No. We protect 100% of your search rankings through comprehensive 1-to-1 301 URL redirect mapping. We crawl every single indexed URL on your legacy SFCC store and map it directly to the corresponding new Shopify page. We also preserve product schema markup, meta titles, image alt tags, and hreflang tags for multi-language stores.',
  },
  {
    category: 'seo',
    question: 'How do you guarantee zero downtime during the cutover?',
    answer:
      'We use a blue/green cutover protocol. We build, test, and verify your complete Shopify Plus store, catalog, and ERP integrations in a secure staging environment using real test orders. When ready, we perform a zero-downtime DNS switch during off-peak hours with instant rollback safety nets and 24/7 engineer monitoring.',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((i) => ({
    '@type': 'Question',
    name: i.question,
    acceptedAnswer: { '@type': 'Answer', text: i.answer },
  })),
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Salesforce Commerce Cloud to Shopify Plus Migration',
  name: 'Salesforce Commerce Cloud to Shopify Plus Replatforming',
  description:
    'Enterprise migration services from Salesforce Commerce Cloud (Demandware) to Shopify Plus. Complete cartridge inventory, Shopify Functions promotion rebuilds, bi-directional ERP integration, 100% SEO ranking preservation, and zero-downtime blue/green cutover.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/replatforming/salesforce-commerce-cloud-to-shopify-plus#webpage',
  url: 'https://factoryjet.com/replatforming/salesforce-commerce-cloud-to-shopify-plus',
  name: 'Salesforce Commerce Cloud to Shopify Plus Migration',
  description: 'How enterprise brands move from SFCC to Shopify Plus with zero downtime and full SEO preservation.',
  dateModified: PAGE_MODIFIED,
  author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/', jobTitle: 'Founder, FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
};

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  description: 'FactoryJet is an enterprise commerce engineering agency specializing in zero-downtime platform migrations and modern architecture.',
  sameAs: ['https://www.linkedin.com/company/factoryjet'],
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Replatforming', item: 'https://factoryjet.com/replatforming' },
    { '@type': 'ListItem', position: 3, name: 'Salesforce Commerce Cloud to Shopify Plus', item: 'https://factoryjet.com/replatforming/salesforce-commerce-cloud-to-shopify-plus' },
  ],
};

const PARTNERS = [
  'Shopify Plus Enterprise',
  'NetSuite SuiteTalk ERP',
  'SAP S/4HANA OData',
  'Manhattan WMS 3PL',
  'Akeneo PIM 100k+ SKU',
  'Salesforce Service Cloud',
  'Avalara AvaTax',
  'Cloudflare Real-Time Queue',
];

const STAT_CARDS = [
  {
    num: '40%–70%',
    desc: 'Lower total cost of ownership by eliminating GMV percentage cuts and $200/hr developer retainers.',
    icon: '💰',
  },
  {
    num: '0 Sec',
    desc: 'Zero-downtime blue/green DNS cutover protocol with instant rollback safety nets.',
    icon: '⚡',
  },
  {
    num: '100%',
    desc: 'Preserved 301 URL redirect mapping per locale, keeping your Google rankings and search equity.',
    icon: '🛡️',
  },
  {
    num: '10x',
    desc: 'Faster marketing release velocity. Drag-and-drop landing pages and launch promos in 15 minutes.',
    icon: '🚀',
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'The GMV Percentage Tax & $150k+ License Fees',
    problem: 'SFCC charges a percentage of your gross sales on top of massive annual software license fees.',
    solution: 'Shopify Plus gives you predictable flat pricing with zero revenue penalty as your business scales.',
  },
  {
    num: '02',
    title: '3-Week Cartridge Deployment Bottlenecks',
    problem: 'Simple text changes or new promotional banners require backend developers and staging builds.',
    solution: 'Shopify Plus gives your marketing team visual sections to edit, preview, and publish same-day.',
  },
  {
    num: '03',
    title: 'Expensive Specialist Developers ($150–$250/hr)',
    problem: 'SFCC developers are rare, expensive to hire, and difficult to retain.',
    solution: 'Shopify is the global commerce standard with thousands of certified engineers and modern APIs.',
  },
  {
    num: '04',
    title: 'Fragile Upgrades & 5+ Years of Tech Debt',
    problem: 'Legacy SiteGenesis cartridges frequently break when Salesforce pushes core updates.',
    solution: 'Shopify handles all server scaling, security patches, and platform updates automatically.',
  },
];

const WORKING_STEPS = [
  {
    n: '01',
    t: 'Cartridge & Customization Audit',
    d: 'We audit every single custom cartridge, scheduled background job, and active promotion so no business rule is forgotten.',
    icon: '🔍',
  },
  {
    n: '02',
    t: 'Data & Architecture Mapping',
    d: 'We map your price books to Shopify Markets, promotions to Shopify Functions, and catalog attributes to metaobjects.',
    icon: '🗺️',
  },
  {
    n: '03',
    t: 'Storefront Build & ERP Connectors',
    d: 'We build your high-converting theme and connect your NetSuite, SAP, or Manhattan WMS via real-time webhooks.',
    icon: '⚙️',
  },
  {
    n: '04',
    t: '1-to-1 SEO Crawl & Redirect Map',
    d: 'We crawl every single indexed URL on your legacy store to guarantee 100% link equity and zero 404 broken links.',
    icon: '🔗',
  },
  {
    n: '05',
    t: 'Zero-Downtime Blue/Green Cutover',
    d: 'We switch DNS during off-peak hours with verified real-time order processing and instant rollback safety nets.',
    icon: '🚀',
  },
];

export default function SFCCToShopifyPlusPage() {
  return (
    <>
      <script id="sfcc-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="sfcc-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="sfcc-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="sfcc-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="sfcc-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">

        {/* ── 01. RITOVEX HERO BANNER SECTION ── */}
        <section className="pp-sec" style={{ paddingTop: 'clamp(44px, 7vh, 88px)', paddingBottom: 'clamp(44px, 6vh, 72px)', background: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div className="rv-hero-wrap">
              
              {/* Left Column Typography */}
              <div>
                <div className="rv-badge" style={{ marginBottom: '18px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>SFCC to Shopify Plus Migration</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Zero-Downtime Migration from Salesforce Commerce Cloud to Shopify Plus
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Escape high license fees, GMV sales cuts, and slow cartridge builds. We audit your custom code, rebuild promotions with Shopify Functions, sync your ERP in real time, and protect 100% of your Google rankings.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Replatforming Audit" region="us" btnVariant="primary-dark" />
                  <a href="#architecture-blueprint" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Architecture</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Ritovex Organic Curved Photo Frame with Live Floating Metric Chips */}
              <div className="rv-curved-frame-1" style={{ position: 'relative', width: '100%', minHeight: '440px', background: '#F6F6F9', border: '1px solid #E6E6EC', boxShadow: '0 24px 56px rgba(0,0,0,0.08)' }}>
                <Image
                  src="/images/us/shared/factoryjet-senior-engineer.webp"
                  alt="FactoryJet senior commerce architect analyzing enterprise migration pipelines"
                  width={640}
                  height={520}
                  priority
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                
                {/* Floating Top Badge */}
                <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(255, 255, 255, 0.94)', backdropFilter: 'blur(8px)', border: '1px solid #EAEAEA', borderRadius: '100px', padding: '6px 16px', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 8px 20px rgba(0,0,0,0.06)' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#141414', fontFamily: 'var(--pp-mono)' }}>100% SEO Safety Verified</span>
                </div>

                {/* Floating Bottom Card */}
                <div style={{ position: 'absolute', bottom: '16px', right: '16px', left: '16px', background: 'rgba(20, 20, 20, 0.88)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '14px', padding: '14px 18px', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', boxShadow: '0 16px 36px rgba(0,0,0,0.2)' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: '#FF7A52', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Enterprise Sync Bus</div>
                    <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>NetSuite / SAP ERP → Shopify Plus</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: 800, color: '#10B981', fontFamily: 'var(--pp-mono)', whiteSpace: 'nowrap' }}>
                    ⚡ Sub-150ms
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 02. RITOVEX PARTNERS / TECHNOLOGY MARQUEE TICKER ── */}
        <section style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC', padding: '36px 0' }}>
          <div className="pp-wrap">
            <div className="rv-ticker-header">
              <div className="rv-ticker-line" />
              <div className="rv-ticker-label">Trusted Enterprise Technology &amp; ERP Connectors</div>
              <div className="rv-ticker-line" />
            </div>
            
            <div className="rv-marquee-wrapper">
              <div className="rv-marquee">
                {PARTNERS.concat(PARTNERS).map((p, idx) => (
                  <div key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '36px' }}>
                    <span style={{ fontSize: '14.5px', fontWeight: 700, color: '#141414', letterSpacing: '-0.01em' }}>
                      {p}
                    </span>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF5622' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 03. RITOVEX ABOUT US & 2x2 BENTO COUNTER SECTION ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(56px, 8vh, 96px) 0' }}>
          <div className="pp-wrap">
            <div className="rv-about-grid">
              
              {/* Left Column: Organic Curved Image Visual Frame with Human Strategy Photo */}
              <div className="rv-curved-frame-2" style={{ position: 'relative', width: '100%', minHeight: '480px', background: '#F6F6F9', border: '1px solid #E6E6EC', boxShadow: '0 24px 56px rgba(0,0,0,0.08)' }}>
                <Image
                  src="/images/us/shared/factoryjet-audit-call.webp"
                  alt="FactoryJet engineering leadership conducting enterprise architecture audit"
                  width={640}
                  height={560}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />

                {/* Overlay Top Tag */}
                <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(8px)', border: '1px solid #EAEAEA', borderRadius: '100px', padding: '6px 16px', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 8px 20px rgba(0,0,0,0.06)' }}>
                  <span style={{ color: '#FF5622', fontWeight: 800 }}>⚡</span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#141414' }}>Direct Founder Engagement</span>
                </div>

                {/* Overlay Bottom Architecture Parity Card */}
                <div style={{ position: 'absolute', bottom: '16px', right: '16px', left: '16px', background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(12px)', borderRadius: '14px', border: '1px solid #EAEAEA', padding: '16px 20px', boxShadow: '0 12px 32px rgba(0,0,0,0.1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#141414' }}>SFCC to Shopify Parity Audit</span>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#10B981', fontFamily: 'var(--pp-mono)' }}>100% PASS</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', background: '#F0F0F5', borderRadius: '100px', overflow: 'hidden' }}>
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, #FF5622, #10B981)', borderRadius: '100px' }} />
                  </div>
                </div>
              </div>

              {/* Right Column: 2x2 Bento Counter Grid + Founder Phone Action */}
              <div>
                <div className="rv-badge" style={{ marginBottom: '14px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Who We Are · Enterprise Delivery</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Enterprise Scale with Zero Cutover Disruption
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  We are a dedicated team of enterprise commerce architects, systems integrators, and performance engineers dedicated to transforming legacy tech debt into modern revenue growth.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  {STAT_CARDS.map((s) => (
                    <div className="rv-stat-card-bento" key={s.num}>
                      <div className="rv-stat-icon-outline">
                        <span style={{ fontSize: '20px' }}>{s.icon}</span>
                      </div>
                      <div style={{ fontFamily: 'var(--pp-display)', fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em', lineHeight: 1 }}>
                        {s.num}
                      </div>
                      <p style={{ fontSize: '13px', color: '#6E6E80', margin: '8px 0 0', lineHeight: 1.45 }}>
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom Actions: More About Us / Discovery Call + Call Any Time */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '24px', marginTop: '28px' }}>
                  <ModalCTAButton label="Schedule Discovery Call" region="us" btnVariant="primary-dark" />
                  
                  <a href="tel:+18329988422" className="rv-founder-call-btn">
                    <div className="rv-call-circle">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: '#8E8E9F', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>Call / Text Any Time</div>
                      <div style={{ fontSize: '14.5px', fontWeight: 800, color: '#141414' }}>+1 (832) 998-8422</div>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 04. WHY LEAVE SFCC (RITOVEX NUMBERED SERVICES ROWS) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>The Direct Comparison</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Why Leading Brands Are Leaving Salesforce Commerce Cloud
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                SFCC was designed for an older generation of e-commerce. Here is what happens when you trade legacy cartridges for modern Shopify Plus agility:
              </p>
            </div>

            <div style={{ maxWidth: '960px', margin: '0 auto' }}>
              {PAIN_POINTS.map((p) => (
                <div className="rv-service-row" key={p.num}>
                  <div className="rv-service-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <span className="rv-service-num">{p.num}</span>
                      <h3 className="rv-service-title">{p.title}</h3>
                    </div>
                    <div className="rv-arrow-circle">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 10L10 2M10 2H4M10 2V8" />
                      </svg>
                    </div>
                  </div>
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #F0F0F5', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>The SFCC Bottleneck:</span>
                      <p style={{ fontSize: '13.5px', color: '#494852', margin: '4px 0 0', lineHeight: 1.5 }}>{p.problem}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#FF5622', letterSpacing: '0.08em' }}>The Shopify Plus Fix:</span>
                      <p style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, margin: '4px 0 0', lineHeight: 1.5 }}>{p.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 05. THE ENTERPRISE ARCHITECTURE BLUEPRINT (RITOVEX AUTO-SCROLL TABS) ── */}
        <div id="architecture-blueprint">
          <EnterpriseArchitectureBlueprint
            badge="// ENTERPRISE MIGRATION BLUEPRINT"
            title="How Modern Enterprise Commerce Works"
            subtitle="Say goodbye to slow cartridge builds, high license fees, and fragile integrations. Here is how leading brands move from Salesforce Commerce Cloud to Shopify Plus with zero downtime."
            legacySource="SFCC / Demandware"
            targetStack="Shopify Plus Enterprise Architecture"
            ctaLabel="Schedule an Architecture Scoping Call"
            region="us"
          />
        </div>

        {/* ── 06. RITOVEX SIDE-BY-SIDE COMPARISON TABLE ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Side-by-Side Analysis</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Salesforce Commerce Cloud vs. Shopify Plus
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                SFCC offers deep legacy configurability at high maintenance cost. Shopify Plus gives speed, lower TCO, and total team agility.
              </p>
            </div>

            <div style={{ overflowX: 'auto', borderRadius: '14px', border: '1px solid #E6E6EC' }}>
              <table className="pp-table" style={{ margin: 0, width: '100%', background: '#FFFFFF' }}>
                <thead style={{ background: '#F6F6F9' }}>
                  <tr>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Feature / Dimension</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Salesforce Commerce Cloud (SFCC)</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Shopify Plus Enterprise</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>What It Means for Your Brand</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Cost Model</td>
                    <td>$150k–$500k+/yr license + GMV revenue cut</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Predictable enterprise plan, zero GMV penalty</td>
                    <td>Save 40%–70% in total annual operating costs</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Custom Code Model</td>
                    <td>Proprietary cartridges (SiteGenesis / SFRA)</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Theme sections, custom Apps &amp; Functions</td>
                    <td>Easier to maintain, upgrade, and scale</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Release Velocity</td>
                    <td>2–4 weeks per deployment via developers</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Same-day visual drag-and-drop updates</td>
                    <td>Marketing launches campaigns 10x faster</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Checkout Experience</td>
                    <td>Legacy multi-step custom checkout</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Shop Pay 1-click accelerated checkout</td>
                    <td>40%+ higher conversion rates on mobile</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Promotions Engine</td>
                    <td>Complex legacy campaign qualifiers</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Shopify Functions (sub-5ms checkout rules)</td>
                    <td>Complex discounts run without slowing the site</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>B2B Wholesale</td>
                    <td>Requires custom portal build</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Native Shopify Plus B2B built-in</td>
                    <td>Wholesale and DTC managed in one admin</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 07. RITOVEX WORKING PROCESS (SPLIT LAYOUT) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 0.85fr) 1.15fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }}>
              
              {/* Left Column Sticky Content */}
              <div style={{ position: 'sticky', top: '100px' }}>
                <div className="rv-badge" style={{ marginBottom: '14px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Our Working Process</span>
                </div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 18px' }}>
                  Our 5-Step Zero-Downtime Migration Protocol
                </h2>
                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  We never guess or take shortcuts with enterprise commerce. Every phase has clear sign-off gates: data parity is verified before templates are built, and your redirect map is tested before DNS switch.
                </p>
                <ModalCTAButton label="Start Your Migration Audit" region="us" btnVariant="primary-dark" />
              </div>

              {/* Right Column Step Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {WORKING_STEPS.map((s) => (
                  <div key={s.n} style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '14px', padding: '24px 28px', transition: 'all 0.25s' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#F6F6F9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
                        {s.icon}
                      </div>
                      <span style={{ fontFamily: 'var(--pp-mono)', fontSize: '14px', fontWeight: 800, color: '#FF5622' }}>
                        {s.n}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#141414', margin: '0 0 6px' }}>
                      {s.t}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#494852', margin: 0, lineHeight: 1.55 }}>
                      {s.d}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── 08. RITOVEX ENTERPRISE CLIENT PROOF & TESTIMONIALS ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(56px, 8vh, 96px) 0', borderTop: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <span className="rv-badge-icon">⭐</span>
                <span>Verified Enterprise Feedback</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                What Enterprise Leaders Say About Our Engineering
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Real feedback from directors and commerce leaders who moved off legacy monoliths to modern Shopify Plus architecture:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              
              {/* Testimonial 1 */}
              <div style={{ background: '#F6F6F9', border: '1px solid #EBEBEF', borderRadius: '16px', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: '#F59E0B', fontSize: '16px', marginBottom: '16px' }}>★★★★★</div>
                  <p style={{ fontSize: '15px', color: '#141414', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
                    &ldquo;FactoryJet executed our zero-downtime cutover without losing a single customer record or ranking position. Our mobile conversion shot up immediately with Shop Pay.&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #E6E6EC' }}>
                  <Image
                    src="/images/testimonials/ricky-belle-maison-160.webp"
                    alt="Ricky B."
                    width={48}
                    height={48}
                    style={{ borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <div style={{ fontSize: '14.5px', fontWeight: 800, color: '#141414' }}>Ricky B.</div>
                    <div style={{ fontSize: '12.5px', color: '#6E6E80' }}>Managing Director · Belle Maison</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div style={{ background: '#F6F6F9', border: '1px solid #EBEBEF', borderRadius: '16px', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: '#F59E0B', fontSize: '16px', marginBottom: '16px' }}>★★★★★</div>
                  <p style={{ fontSize: '15px', color: '#141414', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
                    &ldquo;Connecting our NetSuite ERP directly to Shopify Plus B2B Catalogs used to give us nightmares. FactoryJet’s sub-150ms event bus handles 100k+ SKU updates flawlessly.&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #E6E6EC' }}>
                  <Image
                    src="/images/testimonials/vishal-impulse-branding-160.webp"
                    alt="Vishal K."
                    width={48}
                    height={48}
                    style={{ borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <div style={{ fontSize: '14.5px', fontWeight: 800, color: '#141414' }}>Vishal K.</div>
                    <div style={{ fontSize: '12.5px', color: '#6E6E80' }}>VP of Operations · Impulse Branding</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div style={{ background: '#F6F6F9', border: '1px solid #EBEBEF', borderRadius: '16px', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: '#F59E0B', fontSize: '16px', marginBottom: '16px' }}>★★★★★</div>
                  <p style={{ fontSize: '15px', color: '#141414', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
                    &ldquo;No junior salespeople or endless discovery decks. We worked directly with Bhavesh and his engineering architects to get the job done on time and on budget.&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #E6E6EC' }}>
                  <Image
                    src="/images/testimonials/kiran-formative-concepts-160.webp"
                    alt="Kiran P."
                    width={48}
                    height={48}
                    style={{ borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <div style={{ fontSize: '14.5px', fontWeight: 800, color: '#141414' }}>Kiran P.</div>
                    <div style={{ fontSize: '12.5px', color: '#6E6E80' }}>Technical Director · Formative Concepts</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 09. RITOVEX FAQ ACCORDION ── */}
        <FAQ
          eyebrow="SFCC TO SHOPIFY PLUS FAQ"
          headline="Real Questions Enterprise &amp; SMB Teams Ask"
          items={FAQ_ITEMS}
          categories={FAQ_CATEGORIES}
        />

        {/* ── 10. RITOVEX FINAL HIGH-IMPACT CTA BANNER (WITH FOUNDER HEADSHOT) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#141414', color: '#FFFFFF', padding: 'clamp(64px, 8vh, 96px) 0' }}>
          <div className="pp-wrap" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div className="rv-badge" style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: '#FFFFFF', marginBottom: '24px' }}>
              <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="#FF5622">
                <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
              </svg>
              <span>Get Started Today</span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.15, margin: '0 0 18px' }}>
              Ready to Scope Your SFCC to Shopify Plus Replatform?
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 18.5px)', color: '#A0A0B2', lineHeight: 1.6, margin: '0 auto 32px', maxWidth: '58ch' }}>
              Direct 30-minute peer-to-peer scoping call with founder Bhavesh Barot. We review your custom cartridges, ERP synchronization requirements, and deliver a transparent fixed-price proposal before any commitment.
            </p>

            {/* Founder Profile Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '100px', padding: '6px 20px 6px 6px', margin: '0 auto 28px' }}>
              <div style={{ position: 'relative', width: '44px', height: '44px' }}>
                <Image
                  src="/bhavesh_image.jpg"
                  alt="Bhavesh Barot, Founder of FactoryJet"
                  width={44}
                  height={44}
                  style={{ borderRadius: '50%', objectFit: 'cover' }}
                />
                <span style={{ position: 'absolute', bottom: '0', right: '0', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10B981', border: '2px solid #141414' }} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#FFFFFF' }}>Bhavesh Barot</div>
                <div style={{ fontSize: '11px', color: '#FF7A52', fontFamily: 'var(--pp-mono)' }}>Founder &amp; Principal Commerce Architect</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
              <ModalCTAButton label="Schedule a Free Discovery Call" region="us" btnVariant="primary-light" />
            </div>

            <p style={{ marginTop: '20px', fontSize: '13px', color: '#7E7E92', fontFamily: 'var(--pp-mono)' }}>
              ✓ 100% Engineer-Led · Zero Sales Pressure · Clear Milestones
            </p>
          </div>
        </section>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
