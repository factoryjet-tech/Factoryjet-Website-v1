import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Script from 'next/script';
import Footer from '../sections/Footer';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import './shopify-development.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/uk/shopify-development';

export const metadata: Metadata = {
  title: 'Shopify Development Partner UK | Certified, Not Just Capable | FactoryJet',
  description: 'FactoryJet is a Certified Shopify Development Partner in the UK. Custom Shopify stores, Shopify Plus, store migrations, and headless Hydrogen builds for UK brands. Book a free store audit.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Shopify Development Partner UK | Certified, Not Just Capable | FactoryJet',
    description: 'FactoryJet is a Certified Shopify Development Partner in the UK. Custom Shopify stores, Shopify Plus, store migrations, and headless Hydrogen builds for UK brands. Book a free store audit.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/shopify-development-og.webp', width: 1200, height: 630, alt: 'Shopify Development Services UK — FactoryJet' }],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://factoryjet.com/#organization',
      name: 'FactoryJet',
      url: 'https://factoryjet.com',
      logo: 'https://factoryjet.com/logo.png',
      sameAs: [
        'https://www.linkedin.com/company/factoryjet',
        'https://www.crunchbase.com/organization/factoryjet',
      ],
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Shopify Development Services UK',
      serviceType: 'Shopify store development',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'UK', item: 'https://factoryjet.com/uk' },
        { '@type': 'ListItem', position: 3, name: 'Shopify Development', item: 'https://factoryjet.com/uk/shopify-development' },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Shopify Development Partner UK | Certified, Not Just Capable | FactoryJet',
      inLanguage: 'en-GB',
      author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhaveshbarot/', jobTitle: 'Founder, FactoryJet' },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
  ],
};

export default function ShopifyDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="uk-sdev">


{/* ════════════════════════════════════════════════
  HEADER
════════════════════════════════════════════════ */}


{/* ════════════════════════════════════════════════
  1. HERO; Light cream, 2-col
════════════════════════════════════════════════ */}
<section className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="wrap">
    <div className="col-6040">

      {/* Left: text */}
      <div>
        <div className="flex-wrap mb-3">
          <span className="chip-green"><span className="dot dot-green"></span>Shopify Certified Partner</span>
          <span className="chip">UK · Shopify Development</span>
        </div>
        <h1>Shopify Development <span className="grad-text">Partner UK</span>: Certified, Not Just Capable</h1>
        <p className="lead mt-4" style={{ maxWidth: '560px' }}>
          Generic Shopify developers build stores. Shopify Certified Partners build stores that sell.
          FactoryJet is a Certified Shopify Development Partner for UK brands; custom Liquid themes, Shopify Plus, store migrations, and headless Hydrogen builds. Fixed price. 7-day delivery guarantee.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '28px' }}>
          <HeroInlineForm region="uk" source="uk_shopify_development_hero" />
          <a href="#services" className="btn btn-outline">See What We Build</a>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '24px' }}>
          <span className="trust-pill"><span className="dot dot-green"></span> 500+ stores delivered</span>
          <span className="trust-pill"><span className="dot dot-green"></span> 7-day delivery guarantee</span>
          <span className="trust-pill"><span className="dot dot-green"></span> Fixed price, no surprises</span>
        </div>
      </div>

      {/* Right: What Shopify Partner certification means */}
      <div className="card card-top-orange">
        <p className="eyebrow">WHY PARTNER CERTIFICATION MATTERS</p>
        <p className="pull-quote" style={{ fontSize: '17px' }}>Your store is not a side project for us. It's our certified speciality.</p>
        <div style={{ marginTop: '20px' }}>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Shopify Partner Certification</div>
              <div className="scorecard-note">passed Shopify's technical + commerce standards</div>
            </div>
            <div className="scorecard-val" style={{ color: 'var(--green)' }}>✓</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Lighthouse Score (Custom Theme)</div>
              <div className="scorecard-note">audited before every handover</div>
            </div>
            <div className="scorecard-val">95+</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Mobile Add-to-Cart Lift</div>
              <div className="scorecard-note">custom vs. generic theme, avg. across builds</div>
            </div>
            <div className="scorecard-val">2.3×</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Stores Delivered UK+Global</div>
              <div className="scorecard-note">since 2005; ecommerce since day one</div>
            </div>
            <div className="scorecard-val">500+</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Core Web Vitals</div>
              <div className="scorecard-note">LCP, CLS, FID; all green on delivery</div>
            </div>
            <div className="scorecard-val" style={{ color: 'var(--green)' }}>Green</div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--n100)', marginTop: '4px', paddingTop: '16px' }}>
          <p style={{ fontSize: '13px', color: 'var(--n400)' }}>Audited before every handover. Code delivered to your GitHub on launch day.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="shimmer" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}></div>
</section>

{/* ════════════════════════════════════════════════
  2. HERO IMAGE BAND; Runware image + 4 stats
════════════════════════════════════════════════ */}
<section style={{ background: 'var(--ink)', padding: '0' }}>
  <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', minHeight: '340px' }}>
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <img width="1200" height="800" fetchPriority="high" loading="eager" src="https://im.runware.ai/image/os/a04d20/ws/3/ii/d50e4e8b-81a0-4b77-8e81-17f9f7924634.webp"
        alt="Custom Shopify storefront design for a UK brand; FactoryJet Shopify development"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
<div style={{ display: 'none', width: '100%', height: '100%', minHeight: '320px', borderRadius: 'inherit', overflow: 'hidden' }}><img src="https://im.runware.ai/image/os/a08dlim3/ws/3/ii/2622d95f-5a6d-40d4-936d-0dd36f9742fe.webp" width="1200" height="800" alt="FactoryJet web development UK" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} /></div>
      <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(to right,transparent 60%,#0F0F12 100%)' }}></div>
    </div>
    <div style={{ padding: '48px 24px 48px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '32px' }}>
      <div>
        <div className="stat-num" style={{ color: '#fff' }}>500+</div>
        <div style={{ fontFamily: 'var(--fm)', fontSize: '11px', letterSpacing: '.10em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginTop: '6px' }}>Shopify Stores Delivered</div>
      </div>
      <div>
        <div className="stat-num" style={{ color: '#fff' }}>7 Days</div>
        <div style={{ fontFamily: 'var(--fm)', fontSize: '11px', letterSpacing: '.10em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginTop: '6px' }}>Delivery Guarantee</div>
      </div>
      <div>
        <div className="stat-num" style={{ color: '#fff' }}>4.9/5</div>
        <div style={{ fontFamily: 'var(--fm)', fontSize: '11px', letterSpacing: '.10em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginTop: '6px' }}>Client Rating · 150+ Reviews</div>
      </div>
      <div>
        <div className="stat-num" style={{ color: '#fff' }}>25 Yrs</div>
        <div style={{ fontFamily: 'var(--fm)', fontSize: '11px', letterSpacing: '.10em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginTop: '6px' }}>E-Commerce Expertise</div>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  3. SHOPIFY PARTNER CERTIFICATION STRIP
════════════════════════════════════════════════ */}
<section style={{ background: 'var(--white)', borderBottom: '1px solid var(--n200)', padding: '48px 0' }}>
  <div className="wrap">
    <div style={{ textAlign: 'center', marginBottom: '32px' }}>
      <span className="chip-green" style={{ marginBottom: '16px' }}><span className="dot dot-green"></span>Certified Shopify Development Partner</span>
      <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', maxWidth: '640px', margin: '16px auto 0' }}>What it means to work with a Shopify Partner; not just a Shopify developer</h2>
    </div>
    <div className="col-3">
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <div style={{ fontFamily: 'var(--fm)', fontSize: '11px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '10px' }}>CERTIFIED ✓</div>
        <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Technical Standards</h3>
        <p style={{ fontSize: '14px', color: 'var(--n600)' }}>Shopify certifies partners who demonstrate advanced Liquid coding, Shopify Plus architecture, and Checkout Extensibility. Not every Shopify developer qualifies.</p>
      </div>
      <div style={{ textAlign: 'center', padding: '20px', borderLeft: '1px solid var(--n200)', borderRight: '1px solid var(--n200)' }}>
        <div style={{ fontFamily: 'var(--fm)', fontSize: '11px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '10px' }}>VERIFIED ✓</div>
        <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Commerce Track Record</h3>
        <p style={{ fontSize: '14px', color: 'var(--n600)' }}>Shopify verifies partner submissions: real store builds, client references, and performance data. Portfolio claims cannot be fabricated in the partner programme.</p>
      </div>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <div style={{ fontFamily: 'var(--fm)', fontSize: '11px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '10px' }}>SUPPORTED ✓</div>
        <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Direct Shopify Access</h3>
        <p style={{ fontSize: '14px', color: 'var(--n600)' }}>Partners get priority support from Shopify's engineering team and early access to features like Checkout Extensibility, B2B, and Hydrogen; so your build isn't behind the curve.</p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  4. WHY CERTIFIED SHOPIFY PARTNER; 60/40 editorial
════════════════════════════════════════════════ */}
<section className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="shimmer" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}></div>
  <div className="wrap">
    <div className="col-6040">
      {/* Content 60% */}
      <div>
        <span className="eyebrow">WHY CERTIFIED PARTNER</span>
        <h2 style={{ marginBottom: '20px' }}>A Shopify development partner who has passed Shopify's own bar, not just claimed it</h2>
        <p className="lead" style={{ marginBottom: '20px' }}>Any developer can put "Shopify Expert" in their portfolio. Shopify Partner certification requires passing technical assessments, submitting verified builds, and maintaining active engagement with Shopify's platform updates. We do all three.</p>

        <div className="flex-wrap" style={{ marginBottom: '24px' }}>
          <span className="chip">Custom Liquid Theme</span>
          <span className="chip">Shopify Plus</span>
          <span className="chip">Checkout Extensibility</span>
          <span className="chip">Hydrogen Headless</span>
          <span className="chip">B2B Portal</span>
          <span className="chip">Store Migration</span>
        </div>

        <div className="stack">
          <p>Shopify is the UK's most widely used ecommerce platform; powering over 1 million UK-based businesses. The infrastructure is excellent. The average Shopify store's conversion rate is not: most UK stores run on generic themes from Dawn or Refresh, the same template used by 200,000 other stores, and wonder why their mobile add-to-cart rate is under 1%.</p>
          <div className="pull-quote">The theme is your top sales rep. A generic one works against you.</div>
          <p>FactoryJet designs in Figma first; every page mockup approved before we write a line of Liquid; then builds in Shopify's native languages so your theme loads fast, passes Core Web Vitals, and your team can edit content without touching code. We've built Shopify stores for UK brands in London, Manchester, Birmingham, Leeds, Edinburgh, and Glasgow since Shopify launched its UK operation.</p>
          {/* Visual: Service options row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '4px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', padding: '10px 12px', background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '10px' }}>
              <span style={{ color: 'var(--orange)', fontWeight: '700', flexShrink: '0' }}>→</span>
              <p style={{ fontSize: '12px', color: 'var(--n600)' }}>Custom theme on your existing store</p>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', padding: '10px 12px', background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '10px' }}>
              <span style={{ color: 'var(--orange)', fontWeight: '700', flexShrink: '0' }}>→</span>
              <p style={{ fontSize: '12px', color: 'var(--n600)' }}>Full Shopify store built from scratch</p>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', padding: '10px 12px', background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '10px' }}>
              <span style={{ color: 'var(--orange)', fontWeight: '700', flexShrink: '0' }}>→</span>
              <p style={{ fontSize: '12px', color: 'var(--n600)' }}>WooCommerce or Magento migration</p>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', padding: '10px 12px', background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '10px' }}>
              <span style={{ color: 'var(--orange)', fontWeight: '700', flexShrink: '0' }}>→</span>
              <p style={{ fontSize: '12px', color: 'var(--n600)' }}>Shopify Plus with B2B features or headless Hydrogen</p>
            </div>
          </div>
        </div>

        {/* Inline stat cards */}
        <div className="col-3" style={{ marginTop: '28px' }}>
          <div style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px 12px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--fd)', fontSize: '22px', fontWeight: '700', color: 'var(--orange)', letterSpacing: '-.03em' }}>0.8%</div>
            <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--n400)', marginTop: '4px' }}>avg. conv. rate; generic theme</div>
          </div>
          <div style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px 12px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--fd)', fontSize: '22px', fontWeight: '700', color: 'var(--orange)', letterSpacing: '-.03em' }}>2.3×</div>
            <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--n400)', marginTop: '4px' }}>lift; custom Shopify theme</div>
          </div>
          <div style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px 12px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--fd)', fontSize: '22px', fontWeight: '700', color: 'var(--orange)', letterSpacing: '-.03em' }}>&lt;2s</div>
            <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--n400)', marginTop: '4px' }}>mobile LCP; every build</div>
          </div>
        </div>
      </div>

      {/* Right 40%: Tech scorecard */}
      <div className="card card-top-orange" style={{ padding: '0', overflow: 'hidden' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--n100)' }}>
          <span className="eyebrow" style={{ marginBottom: '0' }}>FactoryJet Shopify Scorecard</span>
        </div>
        <div style={{ padding: '0 24px' }}>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Lighthouse Performance</div>
              <div className="scorecard-note">custom Liquid, optimised images</div>
            </div>
            <div className="scorecard-val">95+</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Lighthouse SEO</div>
              <div className="scorecard-note">schema, canonical, sitemaps</div>
            </div>
            <div className="scorecard-val">100</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Mobile Add-to-Cart Rate</div>
              <div className="scorecard-note">vs. generic theme average</div>
            </div>
            <div className="scorecard-val">2.3×</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Time to First Byte</div>
              <div className="scorecard-note">Shopify's global CDN</div>
            </div>
            <div className="scorecard-val">&lt;310ms</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Checkout Conversion</div>
              <div className="scorecard-note">Shop Pay + native checkout</div>
            </div>
            <div className="scorecard-val">+15%</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Core Web Vitals</div>
              <div className="scorecard-note">LCP, CLS, FID; all three</div>
            </div>
            <div className="scorecard-val" style={{ color: 'var(--green)' }}>Green</div>
          </div>
        </div>
        <div style={{ padding: '16px 24px', background: 'var(--n100)', borderTop: '1px solid var(--n200)' }}>
          <div style={{ height: '3px', width: '32px', borderRadius: '999px', background: 'var(--orange)', marginBottom: '8px' }}></div>
          <p style={{ fontFamily: 'var(--fd)', fontSize: '14px', fontWeight: '600', color: 'var(--ink)' }}>Audited before every handover. No exceptions.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  5. DARK PROBLEM SECTION; 3 pillars
════════════════════════════════════════════════ */}
<section className="dark-sec">
  <div className="wrap">
    <div style={{ maxWidth: '700px', margin: '0 auto 56px', textAlign: 'center' }}>
      <span className="eyebrow">THE PROBLEM</span>
      <h2 style={{ marginTop: '12px' }}>Your Shopify store looks fine. Your conversion rate is costing you.</h2>
      <p className="lead" style={{ marginTop: '16px', color: 'rgba(255,255,255,.6)' }}>Most UK Shopify stores leave 50–70% of revenue on the table. Not because the product is wrong; because the storefront is built for convenience, not conversion.</p>
    </div>
    <div className="col-3">
      <div className="dark-card">
        <span className="dark-pillar-icon">🐢</span>
        <h3 style={{ color: '#fff', marginBottom: '12px' }}>Slow themes kill mobile conversions</h3>
        <p>The average UK Shopify store using a theme-store template loads in 4–6 seconds on mobile. Google data shows 53% of mobile users leave after 3 seconds. Your ad spend is evaporating before a single product image loads.</p>
      </div>
      <div className="dark-card">
        <span className="dark-pillar-icon">📦</span>
        <h3 style={{ color: '#fff', marginBottom: '12px' }}>Generic product pages don't convert</h3>
        <p>The same Dawn or Refresh theme layout used by 200,000 other Shopify stores won't communicate what makes your product different. Your customer needs trust signals, imagery, and a CTA hierarchy designed for how they actually shop; not Shopify's default template.</p>
      </div>
      <div className="dark-card">
        <span className="dark-pillar-icon">💸</span>
        <h3 style={{ color: '#fff', marginBottom: '12px' }}>Traditional UK agencies charge £15,000–£50,000</h3>
        <p>A mid-tier UK Shopify agency charges £15,000–£50,000 for a custom theme build; before retainers, app configuration, or migration fees. FactoryJet delivers the same Figma-first design, Liquid engineering, and Lighthouse audit at fixed price. Our specialised team has been building ecommerce since 2005.</p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  6. PROCESS; 5 stages
════════════════════════════════════════════════ */}
<section className="sec-lg" style={{ background: 'var(--white)' }}>
  <div className="wrap">
    <div style={{ maxWidth: '640px', margin: '0 auto 48px', textAlign: 'center' }}>
      <span className="eyebrow">OUR PROCESS</span>
      <h2 style={{ marginTop: '12px' }}>From Store Audit to Live Launch in 5 Stages</h2>
      <p className="lead" style={{ marginTop: '16px' }}>Design approval before engineering, staging store before DNS switch, Lighthouse audit before sign-off. Every build follows the same five-stage process.</p>
    </div>
    <div className="process-grid">
      <div style={{ padding: '24px', background: 'var(--cream)', borderRadius: '16px', border: '1px solid var(--n200)' }}>
        <span className="stage-num">01</span>
        <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Discover</h3>
        <p style={{ fontSize: '14px' }}>A 30-minute store audit. We review your current platform, catalogue, traffic, and conversion data to define the right Shopify architecture before scoping a single line of work.</p>
      </div>
      <div style={{ padding: '24px', background: 'var(--cream)', borderRadius: '16px', border: '1px solid var(--n200)' }}>
        <span className="stage-num">02</span>
        <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Design</h3>
        <p style={{ fontSize: '14px' }}>Full Figma mockups for homepage, product page, collection page, and cart. You approve desktop and mobile before we write a line of Liquid. Two revision rounds included.</p>
      </div>
      <div style={{ padding: '24px', background: 'var(--cream)', borderRadius: '16px', border: '1px solid var(--n200)' }}>
        <span className="stage-num">03</span>
        <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Build</h3>
        <p style={{ fontSize: '14px' }}>Custom Liquid theme or Hydrogen build with daily commits to your GitHub. Staging store URL available within 48 hours. Products, collections, and metafields configured.</p>
      </div>
      <div style={{ padding: '24px', background: 'var(--cream)', borderRadius: '16px', border: '1px solid var(--n200)' }}>
        <span className="stage-num">04</span>
        <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Test</h3>
        <p style={{ fontSize: '14px' }}>Full checkout flow tested across Stripe, PayPal, and Shop Pay. Cross-browser and device testing on iOS, Android, Chrome, Safari, and Firefox. Lighthouse audit run before sign-off.</p>
      </div>
      <div style={{ padding: '24px', background: 'rgba(255,92,0,.06)', borderRadius: '16px', border: '1px solid rgba(255,92,0,.2)' }}>
        <span className="stage-num">05</span>
        <h3 style={{ fontSize: '16px', marginBottom: '8px', color: 'var(--orange)' }}>Launch</h3>
        <p style={{ fontSize: '14px' }}>DNS transfer, Google Analytics 4 and Search Console setup, sitemap submission, and a recorded handover walkthrough. Your theme code and all credentials delivered to your GitHub.</p>
      </div>
    </div>
    <p style={{ textAlign: 'center', marginTop: '24px', fontFamily: 'var(--fm)', fontSize: '11px', letterSpacing: '.10em', textTransform: 'uppercase', color: 'var(--n400)' }}>5 Stages · 3–5 Weeks to Launch · Figma Approval Before Build · Zero Downtime Launch</p>
  </div>
</section>

{/* ════════════════════════════════════════════════
  7. SERVICES GRID; What we build
════════════════════════════════════════════════ */}
<section id="services" className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="shimmer" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}></div>
  <div className="wrap">
    <div style={{ maxWidth: '640px', margin: '0 auto 48px', textAlign: 'center' }}>
      <span className="eyebrow">WHAT WE BUILD</span>
      <h2 style={{ marginTop: '12px' }}>Six Shopify Services for UK E-Commerce Brands</h2>
      <p className="lead" style={{ marginTop: '16px' }}>From a custom Shopify theme on an existing store to a full Shopify Plus B2B platform; we scope the right engagement for where your business is and where it's heading.</p>
    </div>
    <div className="svc-grid">
      <div className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '12px' }}>SERVICE 01</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Custom Shopify Theme Development</h3>
        <p style={{ fontSize: '14px' }}>A Shopify theme built from scratch in Figma, then coded in Liquid with custom sections your team can edit from the theme editor; no developer needed for day-to-day content changes.</p>
        <p style={{ fontSize: '13px', color: 'var(--orange)', marginTop: '12px', fontWeight: '600' }}>Clients average 2.3× improvement in mobile add-to-cart rate vs. generic themes.</p>
      </div>
      <div className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '12px' }}>SERVICE 02</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Full Shopify Store Setup &amp; Launch</h3>
        <p style={{ fontSize: '14px' }}>Complete store configuration from scratch: product catalogue import, collections architecture, payment providers (Stripe, PayPal, Shop Pay), shipping zones, tax setup, and launch with DNS transfer.</p>
        <p style={{ fontSize: '13px', color: 'var(--orange)', marginTop: '12px', fontWeight: '600' }}>Complete Shopify launch; theme, products, payments; in 3–5 weeks.</p>
      </div>
      <div className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '12px' }}>SERVICE 03</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Shopify Plus Development UK</h3>
        <p style={{ fontSize: '14px' }}>Checkout Extensibility, B2B wholesale portal with net terms and company accounts, multi-storefront management, and Shopify Flow automation for UK merchants scaling past £500K/year.</p>
        <p style={{ fontSize: '13px', color: 'var(--orange)', marginTop: '12px', fontWeight: '600' }}>Required for brands needing custom checkout UI or B2B features.</p>
      </div>
      <div className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '12px' }}>SERVICE 04</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Store Migrations to Shopify</h3>
        <p style={{ fontSize: '14px' }}>Full data migrations from WooCommerce, Magento, BigCommerce, PrestaShop, and custom platforms; preserving products, customers, order history, and SEO URL structure with 301 redirects.</p>
        <p style={{ fontSize: '13px', color: 'var(--orange)', marginTop: '12px', fontWeight: '600' }}>Zero downtime launch day. All redirects in place before DNS switch.</p>
      </div>
      <div className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '12px' }}>SERVICE 05</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Headless Shopify (Hydrogen)</h3>
        <p style={{ fontSize: '14px' }}>Decouple your storefront from Shopify's backend using Hydrogen (React/Remix) for sub-1-second page loads, full design freedom, and custom UX impossible within standard Liquid themes.</p>
        <p style={{ fontSize: '13px', color: 'var(--orange)', marginTop: '12px', fontWeight: '600' }}>Best for UK brands doing £3M+/year where a 0.5% conversion lift = £15K+ annually.</p>
      </div>
      <div className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '12px' }}>SERVICE 06</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Shopify App Integration &amp; Custom Apps</h3>
        <p style={{ fontSize: '14px' }}>Install, configure, and theme-integrate any Shopify App Store app; reviews, subscriptions, bundles, loyalty, upsell. Build custom private apps via the Admin API when off-the-shelf solutions don't fit.</p>
        <p style={{ fontSize: '13px', color: 'var(--orange)', marginTop: '12px', fontWeight: '600' }}>Klaviyo, ReCharge, Gorgias, Yotpo, Bold, and 50+ integrations delivered.</p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  8. STATS BAND; 3 big numbers + team image
════════════════════════════════════════════════ */}
<section className="stats-band">
  <div className="wrap">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '64px', alignItems: 'center' }}>
      <div className="col-3" style={{ gap: '32px' }}>
        <div>
          <div className="chip" style={{ marginBottom: '12px' }}><span className="dot dot-orange"></span>Conversion Lift</div>
          <div className="stat-num">2.3×</div>
          <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>improvement in mobile add-to-cart rate with a custom Shopify theme vs. generic</p>
          <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '6px' }}>average across FactoryJet Shopify builds since 2020</p>
        </div>
        <div>
          <div className="chip" style={{ marginBottom: '12px' }}><span className="dot dot-orange"></span>Stores Launched</div>
          <div className="stat-num">500+</div>
          <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>Shopify stores built and launched across DTC, B2B, and enterprise brands globally</p>
          <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '6px' }}>since FactoryJet began building e-commerce in 2005</p>
        </div>
        <div>
          <div className="chip" style={{ marginBottom: '12px' }}><span className="dot dot-orange"></span>Pricing Model</div>
          <div className="stat-num" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)' }}>Fixed Price</div>
          <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>milestone-paid Shopify builds with full code ownership from day one</p>
          <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '6px' }}>senior Figma design, Liquid engineering, and Lighthouse performance; predictable from quote to launch</p>
        </div>
      </div>
      <div style={{ borderRadius: '16px', overflow: 'hidden', aspectRatio: '5/3', position: 'relative' }}>
        <img width="800" height="600" loading="lazy" src="https://im.runware.ai/image/os/a06dlim3/ws/3/ii/0fb9638c-7885-4f21-81c0-7a4e45bf2b7f.webp" alt="FactoryJet team reviewing a newly launched Shopify store" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
<div style={{ display: 'none', width: '100%', height: '100%', minHeight: '320px', borderRadius: 'inherit', overflow: 'hidden' }}><img src="https://im.runware.ai/image/os/a08dlim3/ws/3/ii/2622d95f-5a6d-40d4-936d-0dd36f9742fe.webp" width="1200" height="800" alt="FactoryJet web development UK" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} /></div>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  9. TECH STACK; Reversed 40/60
════════════════════════════════════════════════ */}
<section className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="shimmer" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}></div>
  <div className="wrap">
    <div className="col-4060">
      {/* Left 40%: tech stack table */}
      <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--n100)' }}>
          <span className="eyebrow" style={{ marginBottom: '0' }}>Shopify Tech Stack</span>
        </div>
        <div style={{ padding: '0 24px' }}>
          <div className="scorecard-row">
            <div className="scorecard-metric">Storefront</div>
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>Shopify Liquid, Hydrogen (React/Remix)</div>
          </div>
          <div className="scorecard-row">
            <div className="scorecard-metric">Design</div>
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>Figma, custom component library</div>
          </div>
          <div className="scorecard-row">
            <div className="scorecard-metric">Email</div>
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>Klaviyo (flows, templates, segments)</div>
          </div>
          <div className="scorecard-row">
            <div className="scorecard-metric">Subscriptions</div>
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>ReCharge, Skio</div>
          </div>
          <div className="scorecard-row">
            <div className="scorecard-metric">Reviews</div>
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>Yotpo, Okendo, Judge.me</div>
          </div>
          <div className="scorecard-row">
            <div className="scorecard-metric">Shipping</div>
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>ShipStation, Shippo, Royal Mail APIs</div>
          </div>
          <div className="scorecard-row">
            <div className="scorecard-metric">Analytics</div>
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>GA4, Meta Pixel, Triple Whale</div>
          </div>
        </div>
        <div style={{ padding: '16px 24px', background: 'var(--n100)', borderTop: '1px solid var(--n200)' }}>
          <div style={{ height: '3px', width: '32px', borderRadius: '999px', background: 'var(--orange)', marginBottom: '8px' }}></div>
          <p style={{ fontFamily: 'var(--fd)', fontSize: '14px', fontWeight: '600', color: 'var(--ink)' }}>Shopify-native. No third-party lock-in.</p>
        </div>
      </div>

      {/* Right 60%: text */}
      <div>
        <span className="eyebrow">OUR TECH STACK</span>
        <h2 style={{ marginBottom: '20px' }}>Built on Shopify's native tools. No bloated app stacks.</h2>
        <p className="lead" style={{ marginBottom: '20px' }}>We build in Liquid and Hydrogen; Shopify's own languages; so your theme performs at platform speed, not plugin speed.</p>
        <div className="flex-wrap" style={{ marginBottom: '24px' }}>
          <span className="chip">Shopify Liquid</span><span className="chip">Hydrogen</span><span className="chip">Remix</span>
          <span className="chip">Figma</span><span className="chip">Klaviyo</span><span className="chip">ReCharge</span>
          <span className="chip">Yotpo</span><span className="chip">Shopify Flow</span>
        </div>
        {/* Visual: Tech stack 4-card grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: '18px', marginBottom: '8px' }}>⚙️</div>
            <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '4px' }}>Shopify Liquid</p>
            <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Clean, well-commented Liquid with custom section schemas; your team edits from the theme editor, no code required.</p>
          </div>
          <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: '18px', marginBottom: '8px' }}>⚛️</div>
            <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '4px' }}>Shopify Hydrogen</p>
            <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Headless React/Remix via the Storefront API. Streaming SSR delivers sub-1-second page loads that standard Liquid can't match.</p>
          </div>
          <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: '18px', marginBottom: '8px' }}>🛒</div>
            <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '4px' }}>Checkout Extensibility</p>
            <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Custom checkout UI and post-purchase pages for Shopify Plus; required since Shopify deprecated checkout.liquid in 2024.</p>
          </div>
          <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: '18px', marginBottom: '8px' }}>📧</div>
            <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '4px' }}>Klaviyo Email Flows</p>
            <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Welcome, abandoned cart, browse abandonment, back-in-stock, and post-purchase flows; matched to your brand, not Klaviyo defaults.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  10. UK MARKET CONTEXT
════════════════════════════════════════════════ */}
<section className="sec-lg" style={{ background: 'var(--white)' }}>
  <div className="wrap">
    <div style={{ maxWidth: '700px', margin: '0 auto 48px' }}>
      <span className="eyebrow">THE UK SHOPIFY MARKET</span>
      <h2 style={{ marginTop: '12px' }}>Shopify dominates UK ecommerce. Most UK stores still underperform.</h2>
      <div className="stack" style={{ marginTop: '24px' }}>
        <p className="lead">Shopify powers over 1 million UK businesses; more than any other hosted ecommerce platform. UK ecommerce was worth £262 billion in 2024, the second largest in Europe. The infrastructure is exceptional. The average UK Shopify store's conversion rate; around 1.3%; is not.</p>
        {/* Visual: Revenue calculator + UK cities */}
          <div style={{ background: 'var(--white)', border: '1px solid var(--orange)', borderRadius: '12px', padding: '18px', marginBottom: '12px' }}>
            <p style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '10px' }}>CONVERSION MATHS</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '8px', textAlign: 'center' }}>
              <div>
                <p style={{ fontSize: '11px', color: 'var(--n400)', marginBottom: '2px' }}>Monthly visitors</p>
                <p style={{ fontSize: '16px', fontWeight: '800', color: 'var(--ink)' }}>5,000</p>
              </div>
              <div>
                <p style={{ fontSize: '11px', color: 'var(--n400)', marginBottom: '2px' }}>AOV</p>
                <p style={{ fontSize: '16px', fontWeight: '800', color: 'var(--ink)' }}>£60</p>
              </div>
              <div style={{ background: 'rgba(255,92,0,.06)', borderRadius: '8px', padding: '6px' }}>
                <p style={{ fontSize: '11px', color: 'var(--n400)', marginBottom: '2px' }}>Old CVR</p>
                <p style={{ fontSize: '16px', fontWeight: '800', color: 'var(--n600)' }}>1.0%</p>
              </div>
              <div style={{ background: 'rgba(255,92,0,.12)', borderRadius: '8px', padding: '6px' }}>
                <p style={{ fontSize: '11px', color: 'var(--orange)', marginBottom: '2px' }}>New CVR</p>
                <p style={{ fontSize: '16px', fontWeight: '800', color: 'var(--orange)' }}>2.3%</p>
              </div>
            </div>
            <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px solid var(--n200)', textAlign: 'center' }}>
              <p style={{ fontSize: '18px', fontWeight: '800', color: 'var(--orange)' }}>+£37,800/yr</p>
              <p style={{ fontSize: '11px', color: 'var(--n400)' }}>additional annual revenue from the same traffic</p>
            </div>
          </div>
          <div style={{ marginBottom: '12px' }}>
            <p style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--n400)', marginBottom: '8px' }}>UK CITIES WE BUILD FOR</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              <span style={{ padding: '4px 12px', background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '999px', fontSize: '12px', fontWeight: '500', color: 'var(--ink)' }}>London</span>
              <span style={{ padding: '4px 12px', background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '999px', fontSize: '12px', fontWeight: '500', color: 'var(--ink)' }}>Manchester</span>
              <span style={{ padding: '4px 12px', background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '999px', fontSize: '12px', fontWeight: '500', color: 'var(--ink)' }}>Birmingham</span>
              <span style={{ padding: '4px 12px', background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '999px', fontSize: '12px', fontWeight: '500', color: 'var(--ink)' }}>Leeds</span>
              <span style={{ padding: '4px 12px', background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '999px', fontSize: '12px', fontWeight: '500', color: 'var(--ink)' }}>Bristol</span>
              <span style={{ padding: '4px 12px', background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '999px', fontSize: '12px', fontWeight: '500', color: 'var(--ink)' }}>Sheffield</span>
              <span style={{ padding: '4px 12px', background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '999px', fontSize: '12px', fontWeight: '500', color: 'var(--ink)' }}>Edinburgh</span>
              <span style={{ padding: '4px 12px', background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '999px', fontSize: '12px', fontWeight: '500', color: 'var(--ink)' }}>Glasgow</span>
            </div>
          </div>
          <div className="pull-quote">Same traffic. Better Shopify theme. More revenue.</div>
        <div className="flex-wrap" style={{ marginTop: '8px' }}>
          <span className="chip">London</span><span className="chip">Manchester</span><span className="chip">Birmingham</span>
          <span className="chip">Leeds</span><span className="chip">Bristol</span><span className="chip">Sheffield</span>
          <span className="chip">Edinburgh</span><span className="chip">Glasgow</span><span className="chip">Liverpool</span>
        </div>
      </div>
    </div>
    {/* 3 UK market stats */}
    <div className="col-3">
      <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '16px', padding: '28px' }}>
        <div className="stat-num" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>£262B+</div>
        <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>UK ecommerce market value in 2024</p>
        <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '4px' }}>second largest ecommerce market in Europe; IMRG 2024</p>
      </div>
      <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '16px', padding: '28px' }}>
        <div className="stat-num" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>1M+</div>
        <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>UK businesses using Shopify to run their ecommerce</p>
        <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '4px' }}>more than any other hosted ecommerce platform in the UK</p>
      </div>
      <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '16px', padding: '28px' }}>
        <div className="stat-num" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>15%</div>
        <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>better checkout conversion on Shopify vs. other platforms</p>
        <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '4px' }}>Shopify Plus checkout data; Shop Pay, one-tap checkout</p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  11. COMPARISON TABLE
════════════════════════════════════════════════ */}
<section className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="shimmer" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}></div>
  <div className="wrap">
    <div style={{ maxWidth: '640px', margin: '0 auto 48px', textAlign: 'center' }}>
      <span className="eyebrow">HOW WE COMPARE</span>
      <h2 style={{ marginTop: '12px' }}>FactoryJet vs. UK Shopify Agency vs. Freelancer vs. Theme Store</h2>
      <p className="lead" style={{ marginTop: '16px' }}>Not all Shopify development options deliver the same result. Here's what the decision actually looks like when you compare side by side.</p>
    </div>
    {/* Pull quote stat */}
    <div style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '16px', padding: '28px', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '32px' }}>
      <div>
        <div style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: '700', color: 'var(--orange)', letterSpacing: '-.04em' }}>Fixed Price</div>
        <p style={{ fontSize: '14px', color: 'var(--n600)', marginTop: '4px', maxWidth: '520px' }}>Same Figma design, Liquid engineering, and Lighthouse audits as a £20,000 UK Shopify agency project; without the six-month timeline or retainer lock-in.</p>
      </div>
    </div>
    <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
      <table className="cmp-table" style={{ minWidth: '700px' }}>
        <thead>
          <tr>
            <th style={{ width: '30%' }}>Feature</th>
            <th className="fj">FactoryJet</th>
            <th>UK Shopify Agency</th>
            <th>Freelancer</th>
            <th>Theme Store</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="feat">Custom Figma design (not a premade theme)</td><td className="fj yes">✓ Yes</td><td className="yes">✓ Yes</td><td className="partial">Partial</td><td className="no">✗ No</td></tr>
          <tr><td className="feat">Shopify Partner certification</td><td className="fj yes">✓ Certified</td><td className="partial">Varies</td><td className="no">✗ Rarely</td><td className="no">N/A</td></tr>
          <tr><td className="feat">Delivery timeline</td><td className="fj">3–5 weeks</td><td>3–6 months</td><td>4–10 weeks (unreliable)</td><td>~1 week (you configure it)</td></tr>
          <tr><td className="feat">Shopify Plus capability</td><td className="fj yes">✓ Full</td><td className="yes">✓ Full</td><td className="partial">Partial</td><td className="no">✗ No</td></tr>
          <tr><td className="feat">Full migration (products, orders, customers)</td><td className="fj yes">✓ Yes</td><td className="yes">✓ Yes</td><td className="partial">Partial</td><td className="no">✗ No</td></tr>
          <tr><td className="feat">Lighthouse 95+ performance on delivery</td><td className="fj yes">✓ Guaranteed</td><td className="partial">Varies</td><td className="partial">Varies</td><td className="no">✗ No</td></tr>
          <tr><td className="feat">Technical SEO built in</td><td className="fj yes">✓ Yes</td><td className="partial">Add-on</td><td className="no">✗ Rarely</td><td className="no">✗ No</td></tr>
          <tr><td className="feat">Code ownership (your GitHub repo)</td><td className="fj yes">✓ Day One</td><td className="partial">After contract</td><td className="yes">✓ Yes</td><td className="yes">✓ Yes</td></tr>
          <tr><td className="feat">Fixed-price contract (no hourly billing)</td><td className="fj yes">✓ Always</td><td className="no">✗ Hourly</td><td className="partial">Partial</td><td className="yes">✓ Fixed</td></tr>
        </tbody>
      </table>
    </div>
    <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--n400)', marginTop: '16px' }}>Prices and timelines reflect typical UK market ranges as of 2026. FactoryJet fixed-price contracts available for all Shopify tiers.</p>
  </div>
</section>

{/* ════════════════════════════════════════════════
  12. CLIENT RESULTS / TESTIMONIALS
════════════════════════════════════════════════ */}
<section className="sec-lg" style={{ background: 'var(--white)' }}>
  <div className="wrap">
    <div style={{ maxWidth: '640px', margin: '0 auto 48px', textAlign: 'center' }}>
      <span className="eyebrow">CLIENT RESULTS</span>
      <h2 style={{ marginTop: '12px' }}>What UK brands say after we build their Shopify store</h2>
    </div>
    <div className="col-3">
      <div className="result-card">
        <div style={{ height: '40px', background: 'var(--n100)', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'var(--fd)', fontSize: '13px', fontWeight: '700', color: 'var(--ink)' }}>Belle Maison</span>
        </div>
        <p style={{ fontSize: '15px', color: 'var(--ink)', fontWeight: '500', lineHeight: '1.6', marginBottom: '16px' }}>"FactoryJet delivered our Shopify store in 7 days; custom theme, full product catalogue, and all our payment methods live. The mobile speed was a revelation after our old WooCommerce site."</p>
        <div style={{ borderTop: '1px solid var(--n200)', paddingTop: '16px' }}>
          <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)' }}>Ricky B; Founder, Belle Maison</p>
          <p style={{ fontSize: '13px', color: 'var(--n400)' }}>Artificial plants &amp; home décor</p>
        </div>
      </div>
      <div className="result-card">
        <div style={{ height: '40px', background: 'var(--n100)', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'var(--fd)', fontSize: '13px', fontWeight: '700', color: 'var(--ink)' }}>Bombay Petals</span>
        </div>
        <p style={{ fontSize: '15px', color: 'var(--ink)', fontWeight: '500', lineHeight: '1.6', marginBottom: '16px' }}>"Migrating from Magento was something every UK agency quoted us £30K for. FactoryJet did it properly; zero data loss, all our SEO URLs preserved; at a fraction of the cost."</p>
        <div style={{ borderTop: '1px solid var(--n200)', paddingTop: '16px' }}>
          <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)' }}>Vishal; Director, Bombay Petals</p>
          <p style={{ fontSize: '13px', color: 'var(--n400)' }}>B2B artificial plants &amp; décor</p>
        </div>
      </div>
      <div className="result-card">
        <div style={{ height: '40px', background: 'var(--n100)', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'var(--fd)', fontSize: '13px', fontWeight: '700', color: 'var(--ink)' }}>Impulse Branding</span>
        </div>
        <p style={{ fontSize: '15px', color: 'var(--ink)', fontWeight: '500', lineHeight: '1.6', marginBottom: '16px' }}>"The Figma-first process was brilliant; we saw every page on desktop and mobile before a line of code was written. No surprises at launch. The Lighthouse score was 97 on day one."</p>
        <div style={{ borderTop: '1px solid var(--n200)', paddingTop: '16px' }}>
          <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)' }}>Kiran M; Founder, Impulse Branding</p>
          <p style={{ fontSize: '13px', color: 'var(--n400)' }}>Branding &amp; promotional products</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  13. HIRE SECTION + FOUNDER
════════════════════════════════════════════════ */}
<section className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="shimmer" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}></div>
  <div className="wrap">
    <div className="col-6040">
      <div>
        <span className="eyebrow">HIRE SHOPIFY DEVELOPERS UK</span>
        <h2 style={{ marginBottom: '20px' }}>Hire a Shopify developer UK; or a dedicated Shopify expert</h2>
        <div className="stack">
          <p className="lead">Most UK brands don't want a marketplace gig; they want to <strong style={{ color: 'var(--ink)' }}>hire a Shopify developer UK</strong> who has actually shipped revenue-generating stores. Every FactoryJet engagement gives you a dedicated Shopify expert who designs, builds, and launches your store end to end, then stays reachable after go-live.</p>
          {/* Visual: Engagement modes + services */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '4px' }}>
            <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
              <p style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.10em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '6px' }}>PROJECT BASED</p>
              <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)', marginBottom: '4px' }}>One-off Shopify Build</p>
              <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Design, build, and launch; delivered in 7 days for up to 5 pages. Fixed scope, fixed deadline.</p>
            </div>
            <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
              <p style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.10em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '6px' }}>RETAINER</p>
              <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)', marginBottom: '4px' }}>Ongoing Shopify Expert</p>
              <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Monthly theme work, app integrations, and CRO; the same engineer throughout. No account-manager handoffs.</p>
            </div>
          </div>
          <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '14px 16px' }}>
            <p style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.10em', textTransform: 'uppercase', color: 'var(--n400)', marginBottom: '8px' }}>ALSO AVAILABLE</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              <span style={{ padding: '4px 12px', background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '999px', fontSize: '12px', fontWeight: '500', color: 'var(--ink)' }}>Ecommerce SEO UK</span>
              <span style={{ padding: '4px 12px', background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '999px', fontSize: '12px', fontWeight: '500', color: 'var(--ink)' }}>WooCommerce Development</span>
              <span style={{ padding: '4px 12px', background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '999px', fontSize: '12px', fontWeight: '500', color: 'var(--ink)' }}>Web App Development</span>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '28px', background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '16px', padding: '24px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>When UK teams hire a Shopify expert from FactoryJet</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ fontSize: '14px', color: 'var(--n600)' }}>• You've outgrown a Shopify template and need a custom build</li>
            <li style={{ fontSize: '14px', color: 'var(--n600)' }}>• You're migrating from WooCommerce or Magento and want it done correctly</li>
            <li style={{ fontSize: '14px', color: 'var(--n600)' }}>• Your in-house team needs a Shopify developer for overflow work</li>
            <li style={{ fontSize: '14px', color: 'var(--n600)' }}>• A previous UK agency or freelancer disappeared mid-project</li>
            <li style={{ fontSize: '14px', color: 'var(--n600)' }}>• You need Shopify Plus with B2B, checkout extensibility, or multi-storefront</li>
          </ul>
        </div>
      </div>

      {/* Founder card */}
      <div className="card" style={{ textAlign: 'center' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg,#FF5C00 0%,#FF8C00 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', border: '3px solid rgba(255,92,0,.2)', flexShrink: '0' }}>
          <span style={{ fontFamily: 'var(--fd)', fontSize: '26px', fontWeight: '800', color: '#fff', lineHeight: '1' }}>B</span>
        </div>
        <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>Bhavesh</h3>
        <p style={{ fontFamily: 'var(--fm)', fontSize: '11px', color: 'var(--n400)', letterSpacing: '.10em', textTransform: 'uppercase', marginBottom: '16px' }}>Founder · FactoryJet</p>
        <div style={{ background: 'var(--cream)', borderRadius: '12px', padding: '16px', marginBottom: '20px', textAlign: 'left' }}>
          <p style={{ fontSize: '14px', color: 'var(--ink)', fontWeight: '500', lineHeight: '1.6' }}>"Returns on your time; that's what I hold every project to. If we can't show you where the conversion lift came from, we don't deserve the next one."</p>
        </div>
        <ModalCTAButton label="Talk to the Founder" region="uk" modalVariant="default" btnVariant="primary-light" />
        <p style={{ fontSize: '12px', color: 'var(--n400)', marginTop: '12px' }}>30-min free store audit. No pitch. No pressure.</p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  14. WHY FACTORYJET; Second dark section
════════════════════════════════════════════════ */}
<section className="dark-sec">
  <div className="wrap">
    <div style={{ maxWidth: '700px', margin: '0 auto 56px', textAlign: 'center' }}>
      <span className="eyebrow">WHY FACTORYJET</span>
      <h2 style={{ marginTop: '12px' }}>We've built 500+ Shopify stores. Not slide decks about them.</h2>
      <p className="lead" style={{ marginTop: '16px', color: 'rgba(255,255,255,.6)' }}>FactoryJet has been building ecommerce since 2005. We know what moves the needle on a Shopify product page; and what looks impressive in a proposal but doesn't affect your conversion rate.</p>
    </div>
    <div className="col-3">
      <div className="dark-card">
        <span className="dark-pillar-icon">🎯</span>
        <h3 style={{ color: '#fff', marginBottom: '12px' }}>Conversion-first design, not portfolio-first</h3>
        <p>A Shopify theme's job is to sell. We design around your specific customer's decision-making process; where trust signals go, when the sticky cart appears, where to put the review count. These are conversion decisions backed by 500+ builds of data, not aesthetic opinions.</p>
      </div>
      <div className="dark-card">
        <span className="dark-pillar-icon">⚡</span>
        <h3 style={{ color: '#fff', marginBottom: '12px' }}>Figma approval before a line of Liquid</h3>
        <p>We show you desktop and mobile mockups for every key page before opening a code editor. If the direction is wrong, we fix it in Figma; not after three weeks of engineering. This is how we deliver in 3–5 weeks when traditional UK agencies quote six months.</p>
      </div>
      <div className="dark-card">
        <span className="dark-pillar-icon">🔒</span>
        <h3 style={{ color: '#fff', marginBottom: '12px' }}>Your code, your GitHub, launch day</h3>
        <p>The full Liquid codebase lands in your GitHub repository the day you go live. No proprietary builder, no FactoryJet platform subscription, no lock-in. Any Shopify developer can maintain it. You walk away with a real, documented codebase; not a dependency.</p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  15. FAQ; 20 questions, 5 categories
════════════════════════════════════════════════ */}
<section id="faq" className="sec-lg" style={{ background: 'var(--white)' }}>
  <div className="wrap">
    <div style={{ maxWidth: '640px' }}>
      <p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p>
      <h2 style={{ marginTop: '12px' }}>Everything UK brands ask before starting a Shopify project</h2>
      <p className="lead" style={{ marginTop: '16px' }}>The questions we answer on every UK Shopify discovery call; answered here, without the runaround.</p>
    </div>

    {/* Mobile pill nav */}
    <nav className="faq-pill-nav" aria-label="FAQ categories">
      <a href="#faq-pricing">Pricing <span className="pill-count">4</span></a>
      <a href="#faq-platform">Platform <span className="pill-count">4</span></a>
      <a href="#faq-migrations">Migrations <span className="pill-count">4</span></a>
      <a href="#faq-seo">SEO <span className="pill-count">4</span></a>
      <a href="#faq-working">Working With Us <span className="pill-count">4</span></a>
    </nav>

    <div className="faq-grid">
      {/* Sidebar (desktop) */}
      <aside className="faq-sidebar" aria-label="FAQ navigation">
        <span className="faq-sidebar-topics">Topics</span>
        <nav className="faq-sidebar-nav">
          <a href="#faq-pricing">PRICING & TIMELINE <span className="faq-nav-count">4</span></a>
          <a href="#faq-platform">PLATFORM & TECH <span className="faq-nav-count">4</span></a>
          <a href="#faq-migrations">MIGRATIONS <span className="faq-nav-count">4</span></a>
          <a href="#faq-seo">SEO & PERFORMANCE <span className="faq-nav-count">4</span></a>
          <a href="#faq-working">WORKING WITH US <span className="faq-nav-count">4</span></a>
        </nav>
        <div className="faq-sidebar-cta">
          <a href={CALENDLY}>Can&#8217;t find it? Talk to the founder &#8594;</a>
          <p>20 questions answered</p>
        </div>
      </aside>

      {/* Accordion */}
      <div>
        <div id="faq-pricing" style={{ marginBottom: '40px', scrollMarginTop: '112px' }}>
          <div className="faq-cat-header">
            <div className="faq-cat-bar"></div>
            <p className="faq-cat-label">PRICING & TIMELINE</p>
          </div>
          <details className="faq-item">
            <summary>
              <span className="q-text">How much does a custom Shopify store cost in the UK?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>FactoryJet builds custom Shopify stores for UK brands on a fixed-price, milestone-paid basis. A custom Liquid theme on an existing store starts from a confirmed quote after our 30-minute discovery call; we price after we understand scope, not before. UK Shopify agencies typically charge &#163;10,000&#8211;&#163;50,000 for the same work. What you pay us includes: Figma design (homepage, PDP, collection, cart), Liquid build, app configuration, technical SEO, Lighthouse performance audit, and code delivery to your GitHub on launch day. No hourly billing, no scope-creep invoices.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">How long does a Shopify store build take in the UK?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>A custom theme applied to an existing store takes 2&#8211;3 weeks from design sign-off. A full Shopify store build from scratch; theme, product catalogue, payment configuration, shipping, apps, and launch; takes 3&#8211;5 weeks. Shopify Plus or headless Hydrogen builds run 6&#8211;10 weeks depending on B2B complexity, number of storefronts, or custom app requirements. We give you a firm timeline after the discovery session, not a range, because scope drives everything.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">Do you offer a 7-day delivery guarantee for Shopify?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Yes. Our 7-day delivery guarantee covers standard Shopify store builds and custom theme applications to existing stores. Not all Shopify projects qualify; complex migrations, multi-storefront Plus builds, or stores with large product catalogues take longer by necessity. For straightforward builds: custom theme design, core pages, payment setup, and launch; we deliver in 7 days. We confirm this during discovery.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">How does FactoryJet keep Shopify development pricing fixed?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>We work fixed-price and milestone-paid. Every Shopify build is scoped upfront with no hourly billing and no scope-creep invoices. Building Shopify stores for brands since Shopify launched in 2006 means we estimate accurately on the first call, so the quote you sign is what you pay. Payment is split into milestones: typically a deposit before design, a second payment at development kick-off, and a final payment at launch; so you are never paying for work that has not been delivered.</p></div>
          </details>
        </div>

        <div id="faq-platform" style={{ marginBottom: '40px', scrollMarginTop: '112px' }}>
          <div className="faq-cat-header">
            <div className="faq-cat-bar"></div>
            <p className="faq-cat-label">PLATFORM & TECH</p>
          </div>
          <details className="faq-item">
            <summary>
              <span className="q-text">Do I need Shopify Plus, or will standard Shopify work?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Standard Shopify works well for most UK DTC brands doing under &#163;500K&#8211;&#163;1M per year in revenue. Shopify Plus is worth the investment when you need: custom checkout UI via Checkout Extensibility, a B2B wholesale portal with company accounts and net terms, multi-storefront management, advanced Shopify Flow automation, or dedicated Shopify support. We make this assessment during discovery and will not push you to Plus if you do not need it.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">What is headless Shopify (Hydrogen) and does my store need it?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Headless Shopify rebuilds your storefront in Hydrogen (React/Remix) while keeping Shopify as the backend for inventory, orders, and checkout. The result is sub-1-second page loads, full design freedom, and custom UX impossible within standard Liquid. Most UK brands under &#163;3M per year do not need headless; the additional build and maintenance cost outweighs the benefit. Above that, a meaningful conversion rate improvement typically pays for it within 6&#8211;12 months.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">Can you build custom Shopify apps or integrate third-party apps?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Yes to both. We integrate any Shopify App Store app into your theme: reviews (Yotpo, Okendo, Judge.me), subscriptions (ReCharge, Skio), loyalty (Smile.io, LoyaltyLion), upsell (CartHook, ReConvert), and more. When off-the-shelf solutions do not fit your workflow, we build custom private apps using Shopify&#8217;s GraphQL Admin API and Polaris design system. All app integrations are styled to match your theme; no floating widget boxes or mismatched UI.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">Can you build a Shopify B2B wholesale portal for UK trade customers?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Yes. Shopify B2B is a core use case for UK wholesalers and trade brands. For Shopify Plus clients, we configure the native B2B features: company accounts, contact management, custom price lists per company, net payment terms (net-30, net-60), tax exemptions (relevant for UK VAT-registered trade accounts), and a dedicated B2B storefront with password-protected catalogue access. For standard Shopify, we implement B2B via apps such as Wholesale Gorilla, WholesaleX, or Locksmith for catalogue gating.</p></div>
          </details>
        </div>

        <div id="faq-migrations" style={{ marginBottom: '40px', scrollMarginTop: '112px' }}>
          <div className="faq-cat-header">
            <div className="faq-cat-bar"></div>
            <p className="faq-cat-label">MIGRATIONS</p>
          </div>
          <details className="faq-item">
            <summary>
              <span className="q-text">Can you migrate my WooCommerce store to Shopify?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Yes. WooCommerce to Shopify is one of our most common migrations for UK brands. We export all products (with variants, metafields, and images), customers, and order history. We map your existing URL structure and implement 301 redirects for every product and collection URL to protect your SEO equity. We test the full checkout flow on the staging store before switching DNS, so launch day has zero downtime. Most UK WooCommerce-to-Shopify migrations are complete in 3&#8211;4 weeks.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">What other platforms can you migrate to Shopify?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>We have migrated UK stores from WooCommerce, Magento (1.x and 2.x), BigCommerce, PrestaShop, Squarespace Commerce, Wix eCommerce, Volusion, and custom-built platforms. Migration complexity depends on your product catalogue size, number of metafields, and whether you have complex pricing rules or customer segments that need rebuilding in Shopify&#8217;s data model. UK-specific considerations include VAT setup, Royal Mail and DPD shipping integration, and UK payment providers (Stripe, PayPal, Klarna, Clearpay).</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">Will my SEO rankings survive a migration to Shopify?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Yes, if the migration is done correctly. Before any migration, we audit your current URL structure, identify which product and collection pages have Google UK rankings worth protecting, and build the redirect map before we touch anything. We implement 301 redirects for every changed URL, submit the new sitemap to Google Search Console on launch day, and monitor organic traffic for 30 days post-launch. Most UK brands see rankings recover fully within 6&#8211;8 weeks.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">How long does a Shopify migration take for a UK brand?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>A standard WooCommerce or Magento to Shopify migration takes 3&#8211;5 weeks from kickoff to DNS switch. This includes: pre-migration audit (3&#8211;5 days), redirect mapping (2&#8211;3 days), product and customer data migration (3&#8211;7 days depending on catalogue size), theme setup on the Shopify staging environment (5&#8211;10 days), QA and staging review (3&#8211;5 days), and DNS cutover with post-launch monitoring. Complex migrations with custom pricing rules, large product catalogues of 5,000-plus SKUs, or multi-language requirements take 6&#8211;10 weeks. We give you a firm timeline on the discovery call once we have reviewed your current store.</p></div>
          </details>
        </div>

        <div id="faq-seo" style={{ marginBottom: '40px', scrollMarginTop: '112px' }}>
          <div className="faq-cat-header">
            <div className="faq-cat-bar"></div>
            <p className="faq-cat-label">SEO & PERFORMANCE</p>
          </div>
          <details className="faq-item">
            <summary>
              <span className="q-text">Will my Shopify store be optimised for Google UK?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Yes. Technical SEO is included in every build. This covers: optimised title tags and meta descriptions for all product, collection, and page templates; Product schema markup for Google Shopping eligibility; BreadcrumbList schema; canonical URLs to handle Shopify&#8217;s duplicate URL patterns (?variant= URLs); compressed images with descriptive alt tags; sitemap.xml submission to Google Search Console; and Core Web Vitals optimisation. Collection page content and blog strategy are available as add-ons.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">What Lighthouse score will my Shopify store get?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Our custom Liquid themes consistently score 90&#8211;97 on Lighthouse Performance (Shopify&#8217;s infrastructure caps some scores vs. static sites) and 100 on Accessibility, Best Practices, and SEO. Headless Hydrogen builds typically score 95-plus on Performance. We run a PageSpeed Insights audit before every handover; you see the scores before you sign off. We do not launch a store that fails Core Web Vitals.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">Does FactoryJet optimise Shopify stores for AI search and ChatGPT?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Yes. Shopify stores built by FactoryJet include AEO (Answer Engine Optimisation) for ChatGPT, Perplexity, and Google AI Overviews: Product schema with price, availability, and review aggregation; FAQPage schema targeting &#8220;best [product]&#8221;, &#8220;how to [use product]&#8221;, and &#8220;is [product] worth it&#8221; queries; and BreadcrumbList schema for category pages. Stores built with AEO get cited in AI-generated answers; a growing traffic source that compounds with traditional SEO.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">What Core Web Vitals does FactoryJet target on Shopify stores?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Core Web Vitals targets for all Shopify builds: LCP (Largest Contentful Paint) under 2.5 seconds on mobile; INP (Interaction to Next Paint) under 200ms; CLS (Cumulative Layout Shift) under 0.1. We achieve this through hero image preloading with fetchPriority="high", font-display:swap on all web fonts, deferred non-critical JavaScript, image lazy loading below the fold with explicit width and height attributes to prevent layout shift, and theme code optimisation to remove unused CSS. We test on PageSpeed Insights with real-world Chrome UX data before handover, because CrUX field data is what Google uses for ranking.</p></div>
          </details>
        </div>

        <div id="faq-working" style={{ scrollMarginTop: '112px' }}>
          <div className="faq-cat-header">
            <div className="faq-cat-bar"></div>
            <p className="faq-cat-label">WORKING WITH US</p>
          </div>
          <details className="faq-item">
            <summary>
              <span className="q-text">Do I own my Shopify theme code after the project?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Yes; 100%. The full theme codebase is delivered to your GitHub repository on launch day. You own every line of Liquid, every custom section schema, and all app integration code. Any Shopify developer can work with it in the future. No lock-in, no proprietary framework, no FactoryJet platform subscription required to keep your store running.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">How is FactoryJet different from hiring a UK Shopify agency?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Three differences matter: price (fixed-price, no hourly billing, confirmed upfront), speed (3&#8211;5 weeks vs. 3&#8211;6 months at most UK agencies), and ownership (full code delivery on launch day, not held behind a retainer). We have built 500-plus Shopify stores across DTC, B2B, and enterprise brands. We understand what actually drives conversion on a product page, not just what looks good in a proposal. And as a Certified Shopify Partner, we have passed Shopify&#8217;s own technical assessment.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">Who is the best Shopify development agency in the UK?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>For SMB and DTC brands in the UK, FactoryJet makes a strong case: Certified Shopify Partner status, custom themes built by senior engineers, fixed pricing, and 7-day delivery on standard store builds. The best Shopify development agency UK for your specific situation depends on scope. A brand heading to Shopify Plus needs a certified Shopify Plus agency UK, while a first store needs speed and conversion fundamentals. Whoever you evaluate among UK Shopify development companies, ask for store speed scores, Lighthouse audits, and conversion before/afters; not just portfolio screenshots.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">Does FactoryJet offer ongoing Shopify support after launch?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Yes. Every Shopify project includes a 30-day post-launch support window for bug fixes, minor adjustments, and launch questions. Beyond that, FactoryJet offers monthly retainer plans: dedicated Shopify development hours, same-day priority bug response, and access to the engineer who built your store. Common retainer work includes new collection page builds, app integrations, Klaviyo flow updates, seasonal landing pages for peak trading periods (Christmas, Black Friday, January sales), and performance optimisation reviews.</p></div>
          </details>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  16. UK CITIES; Internal linking
════════════════════════════════════════════════ */}
<section className="sec" style={{ background: 'var(--cream)' }}>
  <div className="wrap">
    <span className="eyebrow">Serving the UK</span>
    <h2 style={{ fontSize: 'clamp(1.25rem,2.5vw,1.75rem)', marginTop: '8px', marginBottom: '24px' }}>Shopify Development Services Across the UK</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      <a href="/uk/london" className="city-pill">London</a>
      <a href="/uk/manchester" className="city-pill">Manchester</a>
      <a href="/uk/birmingham" className="city-pill">Birmingham</a>
      <a href="/uk/leeds" className="city-pill">Leeds</a>
      <a href="/uk/bristol" className="city-pill">Bristol</a>
      <a href="/uk/sheffield" className="city-pill">Sheffield</a>
      <a href="/uk/liverpool" className="city-pill">Liverpool</a>
      <a href="/uk/edinburgh" className="city-pill">Edinburgh</a>
      <a href="/uk/glasgow" className="city-pill">Glasgow</a>
      <a href="/uk/nottingham" className="city-pill">Nottingham</a>
    </div>
    {/* Related reading */}
    <h3 style={{ fontSize: '16px', marginTop: '40px', marginBottom: '16px' }}>Related Reading</h3>
    <div className="col-3">
      <a href="/blog/shopify-vs-woocommerce-us-small-business-2026" className="blog-card">
        <p>Shopify vs WooCommerce for UK small businesses; which platform in 2026?</p>
      </a>
      <a href="/blog/shopify-development-partner-uk-guide" className="blog-card">
        <p>Why working with a Certified Shopify Partner UK matters for your store</p>
      </a>
      <a href="/uk/ecommerce-seo" className="blog-card">
        <p>Already on Shopify? See our UK ecommerce SEO services →</p>
      </a>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  17. FINAL CTA; Dark
════════════════════════════════════════════════ */}
<section style={{ background: 'var(--dark)', padding: '80px 0' }}>
  <div className="wrap" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
    <span className="eyebrow" style={{ color: 'rgba(255,92,0,.9)' }}>READY TO START</span>
    <h2 style={{ color: '#fff', marginTop: '12px', fontSize: 'clamp(1.75rem,4vw,2.75rem)' }}>Book a Shopify Store Audit; No Obligation</h2>
    <p style={{ marginTop: '16px', color: 'rgba(255,255,255,.65)', fontSize: '16px', lineHeight: '1.7' }}>In 30 minutes, we'll audit your current store or platform, identify the specific pages losing you the most revenue, and give you a fixed price to fix it. No pitch. No pressure. An honest assessment from engineers who've built 500+ stores.</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginTop: '32px' }}>
      <ModalCTAButton label="Book Your Free Store Audit" region="uk" modalVariant="default" btnVariant="primary-light" />
      <a href="/portfolio" className="btn btn-outline" style={{ color: 'rgba(255,255,255,.7)', borderColor: 'rgba(255,255,255,.2)' }}>See Our Portfolio</a>
    </div>
    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.35)', marginTop: '20px' }}>Fixed price. Full code ownership. Certified Shopify Partner. 500+ stores delivered.</p>
  </div>
</section>


</div>
      <Footer />
    </>
  );
}
