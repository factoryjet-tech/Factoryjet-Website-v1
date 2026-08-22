import type { Metadata } from 'next';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import EcommerceRoiCalculator from '@/components/commerce/EcommerceRoiCalculator';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/marketplace';

export const metadata: Metadata = {
  title: 'Multi-Channel Marketplace Management Agency | Amazon, Walmart, Target Plus | FactoryJet',
  description:
    'Scale multi-channel marketplace revenue across Amazon, Walmart, Target Plus, Faire, and TikTok Shop without inventory stockouts, pricing conflicts, or channel cannibalization. Platform-agnostic marketplace engineering for US DTC and B2B brands.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Marketplace Management & Brand Accelerator Agency | FactoryJet',
    description:
      'Unified catalog, inventory synchronization, and advertising growth across Amazon, Walmart, Target Plus, and Faire Wholesale.',
    url: 'https://factoryjet.com/marketplace-management',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet Marketplace Management Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multi-Channel Marketplace Management Agency | FactoryJet',
    description: 'Sell across Amazon, Walmart, Target Plus, Faire, and TikTok Shop with unified inventory and zero channel conflict.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/marketplace-management' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'strategy', label: 'Strategy & Fit' },
  { key: 'operations', label: 'Inventory & Operations' },
  { key: 'channels', label: 'Channel Specifics' },
  { key: 'commercials', label: 'Pricing & Handover' },
];

const FAQ_ITEMS = [
  // Strategy & Fit
  {
    category: 'strategy',
    question: 'Will selling on Amazon cannibalize our direct Shopify store sales?',
    answer:
      'No, when structured properly. Over 60% of US consumers begin their product discovery on Amazon and will not search for independent websites. Marketplace presence captures existing demand that would otherwise go to competing brands, while your DTC storefront retains exclusive bundles, loyalty rewards, and subscription offers.',
  },
  {
    category: 'strategy',
    question: 'What is the difference between Seller Central and Vendor Central?',
    answer:
      'On Seller Central (3P), you sell directly to consumers, set your own retail prices, control your inventory levels, and pay marketplace referral fees. On Vendor Central (1P), you sell wholesale inventory directly to Amazon as a supplier, and Amazon sets the retail price. We primarily help brands succeed on 3P Seller Central for higher margins and price control.',
  },
  {
    category: 'strategy',
    question: 'How do we prevent channel conflict and MAP pricing violations?',
    answer:
      'We establish automated price-syncing rules that match your Minimum Advertised Price (MAP) policy across all channels. We also implement Brand Registry protection to identify and suppress unauthorized gray-market sellers who undercut your retail pricing.',
  },
  {
    category: 'strategy',
    question: 'When is a brand ready for marketplace expansion?',
    answer:
      'A brand is ready when it has proven product-market fit on its core website, stable supply chain capacity, clean barcode/UPC documentation, and trademark registration for brand registry protection.',
  },

  // Inventory & Operations
  {
    category: 'operations',
    question: 'How does inventory sync between Shopify and Amazon work?',
    answer:
      'We connect your primary inventory database to marketplace APIs using webhook listeners. When an order is placed on Amazon, stock is decremented in Shopify within seconds. When stock is received in your main warehouse, available quantities update across all channels automatically.',
  },
  {
    category: 'operations',
    question: 'What happens if a product sells out simultaneously on multiple channels?',
    answer:
      'We configure automated inventory safety buffers (e.g., reserving 5 units of buffer stock). When total warehouse quantity drops to the threshold, marketplace listings automatically switch to zero available stock while your main website continues selling down the final units.',
  },
  {
    category: 'operations',
    question: 'Should we use Amazon FBA, Walmart WFS, or our own 3PL?',
    answer:
      'A hybrid model is usually best. Using FBA for Amazon Prime badges and WFS for Walmart 2-day delivery badges maximizes conversion rates, while your primary 3PL fulfills direct website and wholesale orders. We architect the inventory distribution model that minimizes storage fees.',
  },
  {
    category: 'operations',
    question: 'How are returns and damaged inventory handled?',
    answer:
      'Marketplace returns can be routed directly to automated inspection centers or returned to your central 3PL warehouse. We configure automated reconciliation reports to track customer return reasons and identify unfulfillable unit discrepancies.',
  },
  {
    category: 'operations',
    question: 'Can we sell B2B wholesale orders on marketplaces?',
    answer:
      'Yes. We configure Amazon Business for volume-tiered pricing and integrate with Faire Wholesale to sell to independent boutiques with automated Net 60 invoice settlements.',
  },

  // Channel Specifics
  {
    category: 'channels',
    question: 'Is Walmart Marketplace worth the investment for a DTC brand?',
    answer:
      'Yes. Walmart Marketplace is the fastest-growing major US marketplace with less seller saturation than Amazon. Qualifying for the Pro Seller Badge and utilizing Walmart Fulfillment Services (WFS) allows established brands to capture substantial incremental volume with lower CPCs.',
  },
  {
    category: 'channels',
    question: 'How difficult is it to get approved for Target Plus?',
    answer:
      'Target Plus is invitation-only. Acceptance requires proven brand equity, US incorporation, GS1-certified UPC barcodes, and Direct Vendor Ship (DVS) EDI compliance. We assist qualified brands in preparing their formal submission packages.',
  },
  {
    category: 'channels',
    question: 'How does TikTok Shop integrate with our existing e-commerce stack?',
    answer:
      'We connect TikTok Shop directly to your product catalog, allowing in-app checkout while routing orders to your central warehouse for fulfillment. We also configure affiliate commission structures for creator promotion.',
  },
  {
    category: 'channels',
    question: 'Can we sell internationally on European or Asian marketplaces?',
    answer:
      'Yes. We support cross-border expansion to Amazon Europe (UK, Germany, France), Mercado Libre in Latin America, and regional marketplaces with automated currency conversion, VAT compliance, and translated catalog feeds.',
  },
  {
    category: 'channels',
    question: 'What is Amazon Brand Registry and why is it mandatory?',
    answer:
      'Amazon Brand Registry gives trademark owners access to enhanced A+ Content, customized Storefronts, Sponsored Brands video ads, and Project Zero counterfeit protection tools. We ensure your brand registry assets are fully active.',
  },

  // Pricing & Handover
  {
    category: 'commercials',
    question: 'Do you charge a percentage of our marketplace sales?',
    answer:
      'No. Unlike traditional agencies that charge 5% to 10% of gross marketplace revenue forever, FactoryJet works on transparent, fixed-price project milestones and optional flat-fee advisory retainers. You keep 100% of your margin.',
  },
  {
    category: 'commercials',
    question: 'Who owns the marketplace accounts and advertising data?',
    answer:
      'You own 100% of your Seller Central accounts, advertising dashboards, and brand tokens. We operate via delegated partner permissions and never hold your business assets in proprietary agency accounts.',
  },
  {
    category: 'commercials',
    question: 'How long does a multi-marketplace setup take?',
    answer:
      'A standard 3-channel rollout (Amazon + Walmart + Faire) typically takes 3 to 4 weeks from scoping to live catalog dispatch and advertising activation.',
  },
  {
    category: 'commercials',
    question: 'What happens after the initial build and launch?',
    answer:
      'We provide comprehensive documentation, video walkthroughs, and standard operating procedures (SOPs) for your in-house team, with 30 days of post-launch hypercare support and optional ongoing advisory retainers.',
  },
];

/* ─────────────────────────────────────────────
   SCHEMAS
───────────────────────────────────────────── */
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Marketplace Management & Multi-Channel E-Commerce Agency',
  name: 'Multi-Channel Marketplace Management & Growth',
  description:
    'End-to-end marketplace management, catalog synchronization, FBA/WFS fulfillment routing, and advertising optimization across Amazon, Walmart Marketplace, Target Plus, Faire, and TikTok Shop.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'US DTC and B2B Brands' },
};

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet Launches & Scales Multi-Channel Marketplaces',
  description: 'Our structured 3-stage framework for expanding brands across Amazon, Walmart, Target Plus, and Faire Wholesale.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Catalog Audit & API Sync', text: 'We audit SKU taxonomy, barcode authenticity, brand registry tokens, and build direct API feeds connecting your core store.' },
    { '@type': 'HowToStep', position: 2, name: 'Creative, SEO & Inbound Logistics', text: 'We write high-converting listing copy, build A+ content modules, and configure FBA/WFS inbound shipments.' },
    { '@type': 'HowToStep', position: 3, name: 'Advertising, Buy-Box Defense & Velocity', text: 'We launch targeted Sponsored Ads, activate automated review generation, and enforce MAP price rules.' },
  ],
};

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  sameAs: ['https://www.linkedin.com/company/factoryjet'],
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://factoryjet.com/omnichannel-commerce' },
    { '@type': 'ListItem', position: 3, name: 'Marketplace Management', item: 'https://factoryjet.com/marketplace-management' },
  ],
};

const STATS = [
  { b: '6 Marketplaces', s: 'managed under one architecture' },
  { b: '99.9% Uptime', s: 'real-time inventory reconciliation' },
  { b: '$0 Channel Conflict', s: 'unified price floor & MAP rules' },
  { b: '10+ Yrs', s: 'scaling omnichannel commerce' },
];

const SOURCED = [
  {
    v: '54.6%',
    d: 'of all US retail e-commerce sales occur on online marketplaces, with Amazon and Walmart leading total transaction volume.',
    src: 'eMarketer Retail Analysis',
    href: 'https://www.emarketer.com',
  },
  {
    v: '63%',
    d: 'of US consumers start their product searches directly on a marketplace rather than a traditional search engine.',
    src: 'Jungle Scout Consumer Trends',
    href: 'https://www.junglescout.com',
  },
  {
    v: '3.2x',
    d: 'higher customer lifetime value achieved by brands selling across their own DTC store plus at least two curated marketplaces.',
    src: 'Omnichannel Benchmark Data',
    href: 'https://www.statista.com',
  },
];

const BENEFITS = [
  { i: '◈', t: 'Unified Catalog Engine', d: 'Edit your product titles, descriptions, and media once in Shopify or your PIM. Our integration pipeline dispatches compliant feeds to Amazon, Walmart, and Target Plus automatically.' },
  { i: '◇', t: 'Real-Time Inventory Allocation', d: 'Configurable inventory safety buffers prevent overselling during flash sales and peak seasonal volume. When warehouse stock hits low thresholds, external listings throttle down safely.' },
  { i: '↯', t: 'MAP Enforcement & Buy Box Defense', d: 'Automated monitoring tracks third-party reseller violations, rogue listings, and unauthorized price cuts to protect your direct margin and brand integrity.' },
  { i: '▤', t: 'Fulfillment Routing (FBA + WFS + 3PL)', d: 'Intelligent order routing assigns fulfillment based on lowest shipping cost, transit speed, and marketplace delivery promise requirements.' },
  { i: '⛓', t: 'High-Converting A+ Content', d: 'Custom-designed comparison charts, lifestyle imagery modules, and structured bullet architecture that boost listing conversion rates by 15% to 30%.' },
  { i: '⤢', t: 'Full Account Ownership', d: 'You own every seller central account, brand registry token, and advertising profile. We manage the architecture and growth without holding your assets hostage.' },
];

const CHANNELS = [
  { t: 'Amazon Marketplace', d: 'Seller Central & Vendor Central management, Brand Registry, Sponsored Products, Sponsored Brands, Amazon DSP programmatic ads, and FBA optimization.' },
  { t: 'Walmart Marketplace', d: 'Application fast-tracking, Walmart Fulfillment Services (WFS) onboarding, Walmart Connect PPC ad management, and Pro Seller Badge qualification.' },
  { t: 'Target Plus', d: 'Invitation-only merchant application packaging, Direct Vendor Ship (DVS) EDI compliance, and curated product positioning for Target digital shoppers.' },
  { t: 'Faire Wholesale', d: 'B2B wholesale marketplace integration, opening accounts with 500,000+ independent retail boutiques with automated Net 60 payment reconciliation.' },
  { t: 'TikTok Shop', d: 'Direct social commerce store setup, affiliate creator commission architecture, in-app checkout integration, and live-selling inventory synchronization.' },
  { t: 'Wayfair & Specialists', d: 'Drop-ship vendor integration, heavy-freight shipping rate tables, CastleGate fulfillment integration, and dimension-accurate 3D asset syndication.' },
];

const USECASES = [
  {
    t: 'Unified Catalog Synchronization Across Channels',
    d: 'How we connect your primary e-commerce database directly to Amazon and Walmart APIs with automated mapping, currency conversions, and attribute validation.',
    img: 'marketplace-catalog-sync.webp',
  },
  {
    t: 'Hybrid Inbound Fulfillment (FBA, WFS & 3PL Logistics)',
    d: 'Routing inventory strategically across Amazon FBA and Walmart WFS fulfillment centers to guarantee 2-day delivery badges without paying excess long-term storage fees.',
    img: 'marketplace-fulfillment-wfs-fba.webp',
  },
  {
    t: 'Programmatic Marketplace Advertising & DSP',
    d: 'Full-funnel Sponsored Product search ads, Sponsored Brand video units, and Amazon DSP programmatic re-targeting that drives profitable incremental ROAS.',
    img: 'marketplace-advertising-dsp.webp',
  },
  {
    t: 'Brand Registry Defense & High-Converting A+ Creative',
    d: 'Securing trademark protection across global marketplaces, eliminating unauthorized resellers, and building high-converting brand storefronts.',
    img: 'marketplace-brand-control.webp',
  },
];

export default function MarketplaceManagementPage() {
  return (
    <>
      <script id="mp-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="mp-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="mp-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script id="mp-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="mp-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* ── Hero ── */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Marketplace Management &amp; Growth</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  One catalog engine. <span className="pp-grad">Every major marketplace.</span>
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  We help US DTC and wholesale brands sell across Amazon, Walmart, Target Plus, Faire, and TikTok Shop
                  without catalog divergence, inventory stockouts, or channel conflict. You own your seller accounts,
                  your customer relationships, and your brand equity.
                </p>
                <HeroInlineForm source="us_marketplace_management_hero" region="us" submitLabel="Get a Marketplace Scope" />
              </div>

              {/* Visual Hero Architecture Graphic */}
              <div
                role="img"
                aria-label="Architecture diagram showing single master core dispatching to Amazon, Walmart, Target Plus, Faire, and TikTok Shop."
                style={{
                  border: '1px solid var(--pp-line)',
                  borderRadius: '18px',
                  background: '#fff',
                  padding: '24px',
                  boxShadow: '0 18px 50px rgba(20,17,15,.08)',
                }}
              >
                <div
                  style={{
                    border: '1.5px solid var(--pp-orange)',
                    borderRadius: '12px',
                    background: 'var(--pp-tint)',
                    padding: '14px',
                    textAlign: 'center',
                    fontFamily: 'var(--pp-disp)',
                    fontWeight: 700,
                    color: 'var(--pp-ink)',
                    marginBottom: '18px',
                  }}
                >
                  Master Commerce Core (Shopify Plus / ERP)
                  <small style={{ display: 'block', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-orange-dark)', fontWeight: 600, marginTop: '2px' }}>
                    Single Source of Truth: Inventory · Pricing · Order Routing
                  </small>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {[
                    { name: 'Amazon', desc: 'FBA + Seller Central' },
                    { name: 'Walmart', desc: 'WFS + Marketplace' },
                    { name: 'Target Plus', desc: 'Curated DVS Ship' },
                    { name: 'Faire', desc: 'B2B Wholesale Net 60' },
                    { name: 'TikTok Shop', desc: 'LIVE & Creator Ads' },
                    { name: 'Wayfair', desc: 'Direct Catalog Sync' },
                  ].map((ch) => (
                    <div key={ch.name} style={{ border: '1px solid var(--pp-line)', borderRadius: '10px', background: '#fff', padding: '12px 8px', textAlign: 'center' }}>
                      <b style={{ fontFamily: 'var(--pp-disp)', fontSize: '13px', display: 'block', color: 'var(--pp-ink)' }}>{ch.name}</b>
                      <span style={{ fontFamily: 'var(--pp-mono)', fontSize: '10px', color: 'var(--pp-muted)' }}>{ch.desc}</span>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    marginTop: '16px',
                    padding: '10px 14px',
                    background: '#14110F',
                    borderRadius: '10px',
                    color: '#fff',
                    fontFamily: 'var(--pp-mono)',
                    fontSize: '10.5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block', marginRight: '6px' }} />
                    Unified Real-Time Webhook Engine
                  </div>
                  <div>Zero Stockouts · Unified Margins</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stat Band ── */}
        <section className="pp-sec tint" style={{ paddingTop: '38px', paddingBottom: '38px' }}>
          <div className="pp-wrap">
            <div className="pp-stats">
              {STATS.map((s) => (
                <div className="pp-stat" key={s.b}>
                  <b>{s.b}</b>
                  <span>{s.s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What Is ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// the core model</p>
            <h2 style={{ marginTop: '10px' }}>What is multi-channel marketplace management?</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Multi-channel marketplace management is the operational and technical system that allows a brand to list,
                price, advertise, and fulfill products across external marketplaces, such as Amazon, Walmart Marketplace,
                Target Plus, and Faire, while maintaining their primary DTC storefront as the central hub of truth.
              </p>
              <p>
                Most brands fail at marketplace expansion because they treat each channel as a disconnected silo.
                Inventory sells out on Shopify while Amazon keeps accepting orders, triggering seller penalties. MAP
                pricing breaks because unauthorized third-party resellers undercut retail prices. Advertising spend is
                wasted because listing content lacks high-converting A+ assets.
              </p>
              <p>
                FactoryJet connects your product catalog, inventory feeds, and order management system directly to
                marketplace APIs. We build automated buffer controls, price-sync state machines, and high-converting
                storefront creative so you capture incremental revenue without multiplying overhead.
              </p>
            </div>
          </div>
        </section>

        {/* ── Sourced Stats ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// marketplace dynamics</p>
            <h2 style={{ marginTop: '10px' }}>The multi-channel commerce landscape, by the numbers</h2>
            <div className="pp-bento" style={{ marginTop: '32px' }}>
              {SOURCED.map((s) => (
                <div className="pp-card" key={s.v}>
                  <div style={{ fontFamily: 'var(--pp-disp)', fontWeight: 800, fontSize: '36px', color: 'var(--pp-orange-dark)', letterSpacing: '-.03em', lineHeight: 1 }}>{s.v}</div>
                  <p style={{ marginTop: '10px', fontSize: '15px', color: 'var(--pp-body)' }}>{s.d}</p>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-block', marginTop: '10px', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-muted)', textDecoration: 'underline' }}
                  >
                    {s.src}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// why it matters</p>
            <h2 style={{ marginTop: '10px' }}>How our marketplace engineering protects your brand</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '58ch' }}>
              We build the operational and technical guardrails that allow you to sell across multiple high-volume
              channels without operational chaos.
            </p>
            <div className="pp-bento" style={{ marginTop: '32px' }}>
              {BENEFITS.map((b) => (
                <div className="pp-card" key={b.t}>
                  <div style={{ fontFamily: 'var(--pp-mono)', fontSize: '20px', color: 'var(--pp-orange-dark)', marginBottom: '10px' }} aria-hidden="true">{b.i}</div>
                  <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '16px', color: 'var(--pp-ink)', marginBottom: '6px' }}>{b.t}</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--pp-body)' }}>{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Interactive ROI Calculator ── */}
        <section className="pp-sec" id="marketplace-roi-calculator">
          <div className="pp-wrap">
            <EcommerceRoiCalculator
              source="us_marketplace_management_page"
              defaultPlatform="shopify"
              defaultTarget="omnichannel"
            />
          </div>
        </section>

        {/* ── Channels Grid ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// supported channels</p>
            <h2 style={{ marginTop: '10px' }}>Every channel connected to your central operations</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '58ch' }}>
              From the largest consumer marketplaces to specialized B2B wholesale networks, we configure and manage
              direct API connectivity.
            </p>
            <div className="pp-bento" style={{ marginTop: '32px', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
              {CHANNELS.map((c) => (
                <div className="pp-card" key={c.t}>
                  <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '16px', color: 'var(--pp-orange-dark)', marginBottom: '6px' }}>{c.t}</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--pp-body)' }}>{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Use Cases ── */}
        {USECASES.map((uc, idx) => (
          <section key={uc.t} className={`pp-sec${idx % 2 === 0 ? '' : ' tint'}`}>
            <div className="pp-wrap">
              <div style={{ display: 'grid', gridTemplateColumns: idx % 2 === 0 ? '1.05fr 0.95fr' : '0.95fr 1.05fr', gap: 'clamp(28px,4vw,52px)', alignItems: 'center' }} className="pp-herogrid">
                {idx % 2 !== 0 && (
                  <Image
                    src={`${IMG}/${uc.img}`}
                    alt={uc.t}
                    width={1280}
                    height={800}
                    style={{ width: '100%', height: 'auto', borderRadius: '18px', border: '1px solid var(--pp-line)', display: 'block', objectFit: 'cover' }}
                  />
                )}
                <div>
                  <p className="pp-mlabel">{`// use case 0${idx + 1}`}</p>
                  <h2 style={{ marginTop: '8px' }}>{uc.t}</h2>
                  <p className="pp-lead" style={{ marginTop: '14px' }}>{uc.d}</p>
                  <div style={{ marginTop: '22px' }}>
                    <ModalCTAButton label="Scope this architecture" region="us" btnVariant="secondary-light" />
                  </div>
                </div>
                {idx % 2 === 0 && (
                  <Image
                    src={`${IMG}/${uc.img}`}
                    alt={uc.t}
                    width={1280}
                    height={800}
                    style={{ width: '100%', height: 'auto', borderRadius: '18px', border: '1px solid var(--pp-line)', display: 'block', objectFit: 'cover' }}
                  />
                )}
              </div>
            </div>
          </section>
        ))}

        {/* ── Comparison Table ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// side by side comparison</p>
            <h2 style={{ marginTop: '10px' }}>How FactoryJet compares to traditional agencies</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              We build systems that give your team permanent ownership and control, not opaque black boxes that take a
              cut of every sale.
            </p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Capability / Deliverable</th>
                    <th>FactoryJet Omnichannel</th>
                    <th>Commodity Amazon Agency</th>
                    <th>Generic Freelancer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td className="name">Core Architecture</td>
                    <td>Single Source of Truth (Shopify / ERP + Sync Engine)</td>
                    <td>Disconnected Amazon silo</td>
                    <td>Manual CSV spreadsheet uploads</td>
                  </tr>
                  <tr>
                    <td className="name">Channel Breadth</td>
                    <td>Amazon, Walmart, Target Plus, Faire, TikTok Shop</td>
                    <td>Amazon-only focus</td>
                    <td>Single account task execution</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Inventory Safety Controls</td>
                    <td>Real-time buffer rules &amp; API state machines</td>
                    <td>Manual periodic checks</td>
                    <td>No automated protection</td>
                  </tr>
                  <tr>
                    <td className="name">Account &amp; Data Ownership</td>
                    <td>100% Client-owned accounts and tokens</td>
                    <td>Often locked into proprietary agency portals</td>
                    <td>Client-owned</td>
                  </tr>
                  <tr className="me">
                    <td className="name">MAP &amp; Reseller Defense</td>
                    <td>Automated buy-box tracking &amp; brand enforcement</td>
                    <td>Basic ad management only</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td className="name">Contract Structure</td>
                    <td>Fixed-price milestones with clear SLA deliverables</td>
                    <td>Hefty percentage-of-revenue fee on all gross sales</td>
                    <td>Unpredictable hourly billing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// execution roadmap</p>
            <h2 style={{ marginTop: '10px' }}>Our 3-stage marketplace launch framework</h2>
            <div style={{ display: 'grid', gap: '24px', marginTop: '28px' }}>
              <div className="pp-card">
                <div className="pp-eyebrow" style={{ marginBottom: '6px' }}>Stage 1 · Days 1 to 10</div>
                <h3 style={{ fontSize: '18px', color: 'var(--pp-ink)' }}>Catalog Audit &amp; Data Synchronization</h3>
                <p style={{ marginTop: '8px', color: 'var(--pp-body)' }}>
                  We audit your existing SKU taxonomy, barcode authenticity, brand registry credentials, and channel
                  compliance requirements. We configure the API connectors connecting your core store to the target
                  marketplace platforms.
                </p>
              </div>
              <div className="pp-card">
                <div className="pp-eyebrow" style={{ marginBottom: '6px' }}>Stage 2 · Days 11 to 24</div>
                <h3 style={{ fontSize: '18px', color: 'var(--pp-ink)' }}>Listing Creative, SEO &amp; Fulfillment Setup</h3>
                <p style={{ marginTop: '8px', color: 'var(--pp-body)' }}>
                  We write keyword-rich titles, clear bullet specifications, and build custom A+ content modules. We
                  configure FBA / WFS inbound routing and establish warehouse inventory threshold rules to prevent
                  stockouts.
                </p>
              </div>
              <div className="pp-card">
                <div className="pp-eyebrow" style={{ marginBottom: '6px' }}>Stage 3 · Days 25 to 30</div>
                <h3 style={{ fontSize: '18px', color: 'var(--pp-ink)' }}>Launch, Advertising &amp; Review Acceleration</h3>
                <p style={{ marginTop: '8px', color: 'var(--pp-body)' }}>
                  We trigger live indexing, activate targeted sponsored search campaigns to generate initial sales
                  velocity, and enroll eligible SKUs in automated review request sequences to build social proof.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// client proof</p>
            <h2 style={{ marginTop: '10px' }}>Real founders, real multi-channel growth</h2>
            <div className="pp-tgrid" style={{ marginTop: '32px' }}>
              <div className="pp-tcard">
                <div style={{ color: 'var(--pp-orange)', fontSize: '13px', letterSpacing: '2px' }}>★★★★★</div>
                <blockquote>
                  &ldquo;FactoryJet connected our custom Shopify store directly to Amazon and Walmart. We went from
                  constant stockout fears to scaling multi-channel sales without adding operational staff.&rdquo;
                </blockquote>
                <div className="who">
                  <Image
                    src="/images/testimonials/ricky-belle-maison-160.webp"
                    alt="Ricky B, Founder of Belle Maison"
                    width={48}
                    height={48}
                    style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--pp-line)' }}
                  />
                  <div>
                    <b>Ricky B.</b>
                    <span>Founder, Belle Maison (Home Goods)</span>
                  </div>
                </div>
              </div>
              <div className="pp-tcard">
                <div style={{ color: 'var(--pp-orange)', fontSize: '13px', letterSpacing: '2px' }}>★★★★★</div>
                <blockquote>
                  &ldquo;Their understanding of catalog feeds and B2B pricing rules made our wholesale and retail
                  expansion completely clean. The architecture they built gives us full control over our business.&rdquo;
                </blockquote>
                <div className="who">
                  <Image
                    src="/images/testimonials/vishal-impulse-branding-160.webp"
                    alt="Vishal K, Founder of Impulse Branding"
                    width={48}
                    height={48}
                    style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--pp-line)' }}
                  />
                  <div>
                    <b>Vishal K.</b>
                    <span>Managing Director, Impulse Branding</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="pp-sec pp-faqsec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// common questions</p>
            <div style={{ marginTop: '16px' }}>
              <FAQ
                headline="Frequently asked questions about marketplace expansion"
                categories={FAQ_CATEGORIES}
                items={FAQ_ITEMS}
              />
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <div className="pp-ctagrid">
              <div className="pp-cta">
                <p className="pp-mlabel">// start your expansion</p>
                <h2 style={{ margin: '12px 0 16px' }}>Ready to scale across Amazon, Walmart, and beyond?</h2>
                <p className="pp-lead" style={{ maxWidth: '44ch' }}>
                  Let us audit your catalog, review your channel opportunities, and provide a fixed-price roadmap
                  before any build starts.
                </p>
                <div style={{ marginTop: '24px' }}>
                  <a className="pp-primary" href={CALENDLY} target="_blank" rel="noopener noreferrer">
                    Book a 30-Minute Scoping Call
                  </a>
                </div>
                <div className="founder">
                  <div className="b">B</div>
                  <div>
                    <b>Bhavesh Barot</b>
                    <span>Founder, FactoryJet · 10+ yrs building commerce</span>
                  </div>
                </div>
              </div>
              <div className="pp-proof">
                <div className="top">
                  <Image
                    src="/images/testimonials/ricky-belle-maison-160.webp"
                    alt="Ricky B, Belle Maison"
                    width={46}
                    height={46}
                    style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--pp-line)' }}
                  />
                  <div>
                    <b>Ricky B.</b>
                    <span>Founder, Belle Maison</span>
                  </div>
                </div>
                <blockquote>
                  &ldquo;The multi-channel setup FactoryJet engineered doubled our marketplace revenue while eliminating manual
                  order entry completely.&rdquo;
                </blockquote>
                <div className="rate">
                  <span className="s">★★★★★</span>
                  <span>4.9 / 5 across 120+ e-commerce &amp; marketplace builds</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
