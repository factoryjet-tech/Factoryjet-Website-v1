import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-03';

export const metadata: Metadata = {
  title: 'E-Commerce Replatforming & Migration Services | FactoryJet',
  description:
    'E-commerce replatforming and migration services. We move stores between Magento, WooCommerce, Shopify Plus, BigCommerce, Squarespace, Wix, and Salesforce Commerce Cloud without losing rankings, order history, or customer passwords. 301 mapping, staged cutover, ERP re-integration.',
  openGraph: {
    type: 'website', siteName: 'FactoryJet',
    title: 'E-Commerce Replatforming & Migration Services | FactoryJet',
    description: 'Migrate between Magento, WooCommerce, Shopify Plus, BigCommerce and more without losing rankings, order history, or customer accounts.',
    url: 'https://factoryjet.com/replatforming',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet e-commerce replatforming and migration services' }],
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: 'E-Commerce Replatforming & Migration | FactoryJet', description: 'Platform migrations that protect rankings, order history, and customer accounts.', images: ['https://factoryjet.com/og-default.png'] },
  alternates: { canonical: 'https://factoryjet.com/replatforming' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Replatforming basics' },
  { key: 'seo', label: 'SEO & rankings' },
  { key: 'data', label: 'Data & migration' },
  { key: 'process', label: 'Process & timing' },
  { key: 'working', label: 'Working together' },
];

// FAQs marked [PAA] are taken from live People Also Ask data pulled 2026-08-03
// (data/replatform_paa.json). The rest come from questions buyers actually raise
// in scoping calls. Magento->Shopify and WooCommerce->Shopify trigger no PAA at all.
const FAQ_ITEMS = [
  { category: 'basics', question: 'What is ecommerce replatforming?', answer: 'Replatforming means moving your store from one ecommerce platform to another, taking the catalog, customers, orders, content, and URLs with you. It is not a redesign, though the two are often done together. The goal is to change the system underneath without losing the traffic, revenue, and history you already have.' },
  { category: 'basics', question: 'What is the difference between replatforming and rehosting?', answer: 'Rehosting moves the same software to different infrastructure, so the platform stays the same and only the servers change. Replatforming changes the platform itself, which means data models, URLs, templates, and integrations all have to be rebuilt or remapped. Replatforming is the larger job by a wide margin.' },
  { category: 'basics', question: 'Why migrate to Shopify?', answer: 'Most of our clients move for one of three reasons: the current platform needs constant maintenance and security patching, hosting and extension costs keep climbing, or the team cannot ship changes without a developer. Shopify and Shopify Plus trade some low-level control for a hosted platform your team can operate directly.' },
  { category: 'basics', question: 'Should we replatform or fix what we have?', answer: 'Often you should fix what you have. Replatforming is worth it when the platform itself is the constraint, for example an unsupported version, a security burden you cannot carry, or B2B rules the platform cannot express. If the real problem is a slow theme or a bad checkout, that is far cheaper to fix in place, and we will tell you so.' },
  { category: 'basics', question: 'Which platforms do you migrate between?', answer: 'Most commonly Magento and Adobe Commerce to Shopify Plus, WooCommerce to Shopify, and Squarespace, Wix, or WordPress to Shopify. We also handle BigCommerce, PrestaShop, OpenCart, Volusion, Salesforce Commerce Cloud, and SAP Hybris, in both directions, including Shopify to WooCommerce or Magento where that is the right move.' },
  { category: 'seo', question: 'Will we lose our Google rankings when we migrate?', answer: 'Not if the URL mapping is done properly. The single biggest cause of traffic loss in a migration is unmapped or badly redirected URLs. We build a complete old-to-new URL map before launch, implement it as single-hop 301 redirects, and keep the old sitemap available so search engines can find and follow every redirect.' },
  { category: 'seo', question: 'How do you protect SEO during a replatform?', answer: 'We crawl and inventory every indexed URL first, map each to its new destination, preserve titles, meta descriptions, headings, and structured data, keep image filenames and alt text where possible, and match or improve page speed. After cutover we monitor Search Console for coverage errors and redirect chains daily for the first few weeks.' },
  { category: 'seo', question: 'Do redirect chains matter?', answer: 'Yes, more than most teams expect. Every extra hop wastes crawl budget and some crawlers give up before reaching the destination. We enforce single-hop redirects, meaning old URL straight to final URL, and we specifically check that no redirect destination is itself the source of another rule, which is how two-hop chains appear by accident.' },
  { category: 'seo', question: 'What usually goes wrong with migration SEO?', answer: 'Four things, in order of frequency: URLs that existed but were never mapped, redirects pointing at the homepage instead of the equivalent page, the staging site getting indexed because robots rules were not switched at launch, and structured data quietly dropped in the new theme. All four are preventable with a pre-launch checklist.' },
  { category: 'data', question: 'What data can you migrate?', answer: 'Products with variants and images, collections and categories, customers and their addresses, order and fulfilment history, discounts, reviews, blog and CMS content, redirects, and B2B specifics such as company accounts and contract price lists. What transfers cleanly depends on the source platform, so we audit it before quoting.' },
  { category: 'data', question: 'Can customer passwords be migrated?', answer: 'Usually not, and any agency promising otherwise deserves scrutiny. Passwords are stored as one-way hashes, and most platforms cannot import another platform\'s hash format. The standard approach is to migrate accounts without passwords and trigger a password reset flow at launch, communicated to customers in advance so it does not read as a security incident.' },
  { category: 'data', question: 'Does order history come across?', answer: 'Yes, in most migrations. Historical orders can be imported so customers still see past purchases and your team keeps reporting continuity. Some platforms limit how far back or how much detail imports cleanly, so where that is a constraint we keep an exportable archive alongside the live data rather than pretending everything fits.' },
  { category: 'data', question: 'What about our ERP, PIM, and 3PL integrations?', answer: 'They have to be rebuilt against the new platform, and this is routinely underestimated. A migration is not finished when the storefront is live; it is finished when orders flow to the ERP, inventory syncs back, and fulfilment triggers correctly. We scope integration work as part of the migration rather than as a surprise phase afterwards.' },
  { category: 'data', question: 'Can you migrate B2B pricing and company accounts?', answer: 'Yes, and it needs particular care. Contract pricing, customer-specific catalogs, credit limits, and account hierarchies are the parts most often lost or silently corrupted in a migration. We reconcile them against your ERP both before and after cutover rather than trusting the import report.' },
  { category: 'process', question: 'How long does a Shopify migration take?', answer: 'Most run from a few weeks to a few months. A small catalog with clean data and no ERP integration sits at the short end. A large catalog, custom B2B rules, or a deep ERP connection sits at the long end. Data quality is the variable that moves the estimate most, which is why we audit it before quoting.' },
  { category: 'process', question: 'How much does it cost to migrate to Shopify?', answer: 'It depends on catalog size, data quality, how many integrations need rebuilding, and whether you are redesigning at the same time. We scope it on a short call and send a fixed proposal before any work starts, so the number does not move mid-project.' },
  { category: 'process', question: 'Is it hard to switch platforms?', answer: 'The storefront rebuild is the predictable part. The hard parts are data quality, URL mapping, and integrations, in that order. Teams that treat migration as a design project get surprised; teams that treat it as a data and redirect project usually land it cleanly.' },
  { category: 'process', question: 'Will the store go down during cutover?', answer: 'No. We build and test on staging, run a full data sync, then a final delta sync of anything that changed during the build, and switch DNS at a low-traffic window. Orders keep flowing throughout. We plan the cutover window with you rather than picking one unilaterally.' },
  { category: 'process', question: 'How long does it take to transfer a domain?', answer: 'DNS changes typically propagate within a few hours, though registrars can take up to 48 hours for a full domain transfer. We usually point DNS at the new store rather than transferring the registrar at the same time, which keeps the two risks separate and makes rollback simpler if anything looks wrong.' },
  { category: 'process', question: 'Can we roll back if something goes wrong?', answer: 'Yes. We keep the old store live and reachable until the new one is verified, so a rollback is a DNS change rather than a rebuild. We also keep the pre-migration data export, which is what lets us reconcile anything that looks off in the first weeks.' },
  { category: 'working', question: 'Who is a Shopify migration expert?', answer: 'In practice it means an agency that has done the specific source-to-destination path before and can show you the URL mapping and data reconciliation from a past project, not just a portfolio of storefronts. Ask any candidate how they handle passwords, order history, and redirect chains. The answers separate experience from enthusiasm.' },
  { category: 'working', question: 'What should we prepare before a migration?', answer: 'Three things: a full export or admin access to your current platform, a list of every integration touching the store including ones marketing set up independently, and a crawl of your indexed URLs. Having these ready shortens scoping considerably and surfaces surprises while they are still cheap.' },
  { category: 'working', question: 'Do we own the new store?', answer: 'Yes. You own the code, the data, and the platform accounts. Nothing we build is rented back to you, and there is no proprietary layer you cannot maintain without us.' },
  { category: 'working', question: 'Do you work with US brands?', answer: 'Yes, most of the brands we work with are US-based, across DTC, B2B, wholesale, and manufacturing, with a decade-plus of commerce builds behind us.' },
];

const FAQ_SCHEMA = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })) };
const SERVICE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Service', serviceType: 'E-commerce replatforming and migration',
  name: 'E-commerce replatforming and platform migration',
  description: 'E-commerce replatforming and migration services between Magento, Adobe Commerce, WooCommerce, Shopify, Shopify Plus, BigCommerce, Squarespace, Wix, PrestaShop, OpenCart, Salesforce Commerce Cloud, and SAP Hybris, including URL mapping, 301 redirect strategy, data migration, and ERP re-integration.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
};
const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  '@id': 'https://factoryjet.com/replatforming#webpage',
  url: 'https://factoryjet.com/replatforming',
  name: 'E-Commerce Replatforming & Migration Services',
  description: 'Platform migrations that protect rankings, order history, customer accounts, and ERP integrations.',
  dateModified: PAGE_MODIFIED,
  author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhaveshbarot/', jobTitle: 'Founder, FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
};
const ORG_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com',
  description: 'FactoryJet is an e-commerce development agency that builds and migrates commerce platforms for US brands.',
  sameAs: ['https://www.linkedin.com/company/factoryjet'],
};
const BREADCRUMB_SCHEMA = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
  { '@type': 'ListItem', position: 2, name: 'Replatforming', item: 'https://factoryjet.com/replatforming' },
] };

// `live: true` ONLY when src/app/replatforming/<slug>/page.tsx actually exists.
// Cards render either way (the copy carries keyword coverage), but a card is only
// hyperlinked when its page is live. Linking ahead of the page makes Google cache
// a 404 verdict on the URL, which then needs a manual recrawl to clear.
const ROUTES = [
  { slug: 'magento-to-shopify', live: true, from: 'Magento / Adobe Commerce', to: 'Shopify Plus', d: 'The most common enterprise move we run. Escaping version upgrades, extension conflicts, and hosting overhead, while keeping complex catalogs and B2B pricing intact.' },
  { slug: 'woocommerce-to-shopify', live: true, from: 'WooCommerce', to: 'Shopify', d: 'Usually driven by plugin fragility, hosting and security maintenance, or a checkout that will not convert. The catalog moves cleanly; the plugin stack is where the real scoping work sits.' },
  { slug: 'squarespace-to-shopify', live: true, from: 'Squarespace', to: 'Shopify', d: 'A store that outgrew a website builder. Straightforward data, but URL structures differ sharply, so redirect mapping decides whether traffic survives.' },
  { slug: 'wix-to-shopify', live: true, from: 'Wix', to: 'Shopify', d: 'Same shape as Squarespace: modest catalog, simple data, and a URL structure that needs careful remapping to avoid losing existing rankings.' },
  { slug: 'wordpress-to-shopify', live: true, from: 'WordPress', to: 'Shopify', d: 'Often a content-heavy site with commerce bolted on. The blog archive and its internal links matter as much as the products here.' },
  { slug: 'salesforce-commerce-cloud-to-shopify-plus', live: true, from: 'Salesforce Commerce Cloud', to: 'Shopify Plus', d: 'Enterprise replatforming: cartridge-based customisation, complex integration surface, and a licence renewal usually driving the timeline.' },
];
const STATS = [
  { b: 'Single-hop', s: '301 redirect mapping' },
  { b: 'Zero downtime', s: 'staged cutover' },
  { b: 'ERP re-integrated', s: 'not left for later' },
  { b: '10+ yrs', s: 'building commerce' },
];
// Citations fetch-verified 2026-08-02 against the linked primary sources.
// Do not edit a figure here without re-verifying the source page first.
const SOURCED = [
  { v: '17%', d: 'year-over-year growth in US B2B ecommerce sales across sites, portals, and apps in 2023, reaching roughly $2.3 trillion. Platform limits get expensive fast at that growth rate.', src: 'Digital Commerce 360', href: 'https://www.digitalcommerce360.com/2024/02/27/b2b-market-2023-2024/' },
  { v: 'Ten', d: 'channels the average B2B buyer now uses across the buying journey, up from five in 2016. A platform that cannot serve several of them at once becomes the constraint.', src: 'McKinsey B2B Pulse', href: 'https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/the-multiplier-effect-of-omnichannel' },
];
const TRIGGERS = [
  { i: '⚠', t: 'The platform is end-of-life', d: 'Magento 1 reached end of support, and unsupported versions stop receiving security patches. At that point staying put is a risk decision, not a cost saving.' },
  { i: '$', t: 'Total cost keeps climbing', d: 'Hosting, extension licences, developer retainers, and security patching compound. Teams often discover the "cheaper" self-hosted platform costs more all-in than a hosted one.' },
  { i: '⛌', t: 'Your team cannot ship', d: 'When every merchandising change needs a developer, marketing velocity collapses. This is the reason we hear most often, and it rarely appears in the original brief.' },
  { i: '⇄', t: 'The B2B rules do not fit', d: 'Contract pricing, net terms, approvals, or account hierarchies that the platform cannot express natively, forcing brittle custom code that breaks on every upgrade.' },
];
const RISKS = [
  { t: 'Unmapped URLs', d: 'The single biggest cause of post-migration traffic loss. Every indexed URL needs a destination before launch, not after someone notices the drop.' },
  { t: 'Redirects to the homepage', d: 'Mapping old pages to the homepage instead of their equivalent tells search engines the old page is gone. It reads as a soft 404 and the ranking goes with it.' },
  { t: 'Redirect chains', d: 'Old URL to interim URL to final URL wastes crawl budget and some crawlers abandon the hop. Enforce single-hop, and check that no destination is another rule\'s source.' },
  { t: 'Staging site indexed', d: 'A staging environment left crawlable creates duplicate content competing with the real store, and the robots rules must flip at launch, not before or after.' },
  { t: 'Structured data dropped', d: 'Schema often lives in the old theme and quietly disappears in the new one, taking rich results and AI-citation eligibility with it.' },
  { t: 'Integrations left for later', d: 'The storefront goes live, then orders do not reach the ERP. Integration is part of the migration, not a follow-up project.' },
];
const STEPS = [
  { n: '01', t: 'Audit', d: 'We crawl every indexed URL, inventory your integrations, and assess data quality on the source platform. This is what makes the estimate real rather than optimistic.' },
  { n: '02', t: 'Map', d: 'A complete old-to-new URL map, a data migration plan per object type, and an integration plan, all agreed before any build starts.' },
  { n: '03', t: 'Build & migrate', d: 'Storefront build on staging, full data migration, integrations rebuilt and tested against real orders, redirects implemented as single hops.' },
  { n: '04', t: 'Cutover', d: 'Delta sync of anything that changed during the build, DNS switch at a low-traffic window, old store kept reachable so rollback stays a DNS change.' },
  { n: '05', t: 'Watch', d: 'Daily Search Console coverage and redirect monitoring for the first weeks, plus reconciliation of orders and inventory against the ERP.' },
];

const checkIcon = (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
    <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ReplatformingPage() {
  return (
    <>
      <script id="rp-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="rp-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="rp-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="rp-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="rp-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">

        {/* Hero */}
        <section className="pp-dotgrid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">E-commerce replatforming &amp; migration</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  Change platforms without losing what you built.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  We migrate stores between Magento, WooCommerce, Shopify Plus, BigCommerce and more. The storefront is
                  the predictable part. We treat migration as a data, redirect, and integration project, which is what
                  decides whether your rankings and order history survive the move.
                </p>
                <HeroInlineForm source="us_replatform_hero" region="us" submitLabel="Get a migration audit" />
              </div>
              <div className="pp-stage" role="img" aria-label="A migration mapping old store URLs to new store URLs with single-hop redirects.">
                <div className="pp-store" aria-hidden="true">
                  <div className="bar"><i /><i /><i /></div>
                  <div className="body">
                    <div className="row"><span className="k">URLs mapped</span><span className="v">1:1</span></div>
                    <div className="row"><span className="k">Redirect hops</span><span className="v">1</span></div>
                    <div className="row win"><span className="k">Order history</span><span className="v">preserved</span></div>
                    <div className="row"><span className="k">ERP sync</span><span className="v">rebuilt</span></div>
                  </div>
                </div>
                <span className="pp-node" style={{ top: '4%', left: '-4%' }} aria-hidden="true"><span className="d" />Staged cutover</span>
                <span className="pp-node" style={{ bottom: '6%', right: '-6%', animationDelay: '.8s' }} aria-hidden="true"><span className="d" />Rollback ready</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stat band */}
        <section className="pp-sec tint" style={{ paddingTop: 'clamp(32px,4vh,52px)', paddingBottom: 'clamp(32px,4vh,52px)' }}>
          <div className="pp-wrap">
            <div className="pp-stats">
              {STATS.map((s) => (<div className="pp-stat" key={s.b}><b>{s.b}</b><span>{s.s}</span></div>))}
            </div>
          </div>
        </section>

        {/* Answer-first definition */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the basics'}</p>
            <h2 style={{ marginTop: '10px' }}>What is e-commerce replatforming?</h2>
            <div style={{ marginTop: '18px', display: 'grid', gap: '14px', maxWidth: '72ch' }} className="pp-lead">
              <p>
                Replatforming means moving your store from one e-commerce platform to another, taking the catalog,
                customers, orders, content, and URLs with you. It is not a redesign, though the two are often done at
                the same time. The point is to change the system underneath without losing the traffic, revenue, and
                history you already have.
              </p>
              <p>
                It differs from rehosting, which moves the same software to different servers. In a replatform the data
                model, URL structure, templates, and every integration have to be rebuilt or remapped. That is why the
                risky parts are rarely visual: they are data quality, URL mapping, and the integrations nobody
                documented.
              </p>
            </div>
          </div>
        </section>

        {/* Routes */}
        {/* Section image */}
        <section className="pp-sec" style={{ paddingTop: 0 }}>
          <div className="pp-wrap">
            <figure style={{ margin: 0 }}>
              <div className="pp-shot">
                <img src="/images/us/commerce/replatforming-migration-planning.webp"
                     alt="A desk with a legacy admin interface on one screen and a rebuilt storefront on the other, alongside printed URL mapping sheets"
                     width={1280} height={800} loading="lazy" decoding="async" />
              </div>
              <figcaption style={{ marginTop: '12px', fontSize: '13.5px', lineHeight: 1.5, color: 'var(--pp-muted)', maxWidth: '64ch' }}>
                Every indexed URL is mapped to a destination before the build starts, not after a traffic drop.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// migration paths'}</p>
            <h2 style={{ marginTop: '10px' }}>Platform migrations we run</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '66ch' }}>
              Each path has its own failure modes. These are the ones we see most often.
            </p>
            <ul className="pp-bento" style={{ marginTop: '36px' }}>
              {ROUTES.map((r) => (
                <li className="pp-card" key={r.slug}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>
                    {r.live ? (
                      <Link href={`/replatforming/${r.slug}`} style={{ color: 'inherit' }}>
                        {r.from} to {r.to}
                      </Link>
                    ) : (
                      <>{r.from} to {r.to}</>
                    )}
                  </h3>
                  <p>{r.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Triggers */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// when it is worth it'}</p>
            <h2 style={{ marginTop: '10px' }}>Four reasons teams actually replatform</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '66ch' }}>
              Replatforming is expensive and disruptive. It is worth it when the platform itself is the constraint, and
              not otherwise. If your real problem is a slow theme or a bad checkout, we will tell you to fix that instead.
            </p>
            <ol className="pp-bento n4" style={{ marginTop: '32px' }}>
              {TRIGGERS.map((t) => (
                <li className="pp-card" key={t.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}><span aria-hidden="true">{t.i}</span> {t.t}</h3><p>{t.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Sourced stats */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// context'}</p>
            <h2 style={{ marginTop: '10px' }}>Why platform limits get expensive</h2>
            <ul className="pp-bento n2" style={{ marginTop: '32px' }}>
              {SOURCED.map((s) => (
                <li className="pp-card" key={s.v}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{s.v}</h3>
                  <p>{s.d}</p>
                  <p style={{ marginTop: '10px', fontSize: '13px' }}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>{s.src}</a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Risks */}
        {/* Section image */}
        <section className="pp-sec" style={{ paddingTop: 0 }}>
          <div className="pp-wrap">
            <figure style={{ margin: 0 }}>
              <div className="pp-shot">
                <img src="/images/us/commerce/replatforming-warehouse-continuity.webp"
                     alt="A tidy fulfilment warehouse aisle with labelled shelving and a packing bench"
                     width={1280} height={800} loading="lazy" decoding="async" />
              </div>
              <figcaption style={{ marginTop: '12px', fontSize: '13.5px', lineHeight: 1.5, color: 'var(--pp-muted)', maxWidth: '64ch' }}>
                Orders keep flowing throughout. The old store stays reachable until the new one is verified.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// what goes wrong'}</p>
            <h2 style={{ marginTop: '10px' }}>Six ways migrations lose traffic</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '66ch' }}>
              Every one of these is preventable with a pre-launch checklist. Every one of them is also common.
            </p>
            <ol className="pp-bento" style={{ marginTop: '32px' }}>
              {RISKS.map((r) => (
                <li className="pp-card" key={r.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{r.t}</h3><p>{r.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <div className="pp-card" style={{ padding: 'clamp(28px,4vw,44px)', textAlign: 'left' }}>
              <h2 style={{ marginTop: 0 }}>Not sure whether you should replatform at all?</h2>
              <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '62ch' }}>
                That is the right question to ask first, and the honest answer is often no. We will audit your current
                platform, your indexed URLs, and your integrations, and tell you whether the platform is genuinely the
                constraint or whether something cheaper fixes it.
              </p>
              <div style={{ marginTop: '20px' }}>
                <ModalCTAButton label="Talk to the Founder" region="us" btnVariant="primary-light" />
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        {/* Section image */}
        <section className="pp-sec" style={{ paddingTop: 0 }}>
          <div className="pp-wrap">
            <figure style={{ margin: 0 }}>
              <div className="pp-shot">
                <img src="/images/us/commerce/replatforming-cutover-night.webp"
                     alt="A quiet operations room at night with muted dashboards and a cutover checklist"
                     width={1280} height={800} loading="lazy" decoding="async" />
              </div>
              <figcaption style={{ marginTop: '12px', fontSize: '13.5px', lineHeight: 1.5, color: 'var(--pp-muted)', maxWidth: '64ch' }}>
                Cutover happens at a low-traffic window, with rollback kept to a DNS change.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Comparison table */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// side by side'}</p>
            <h2 style={{ marginTop: '10px' }}>Which destination platform fits</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>We are platform-agnostic and recommend fit rather than the most expensive option. This is how the realistic destinations differ.</p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead><tr><th>Platform</th><th>Best for</th><th>Trade-off</th><th>Our read</th></tr></thead>
                <tbody>
                  <tr>
                    <td className="name">Shopify Plus</td>
                    <td>Hosted, no upgrade cycle, large app ecosystem</td>
                    <td>DTC plus B2B on one store, fast iteration</td>
                    <td>Most common destination we migrate to</td>
                  </tr>
                  <tr>
                    <td className="name">Adobe Commerce</td>
                    <td>Deep native B2B, very large catalogues</td>
                    <td>You own hosting, patching and upgrades</td>
                    <td>Right answer when merchandising depth is genuinely required</td>
                  </tr>
                  <tr>
                    <td className="name">BigCommerce</td>
                    <td>Strong native B2B at mid-market cost</td>
                    <td>No platform transaction fee</td>
                    <td>Good value where Shopify Plus licensing is the blocker</td>
                  </tr>
                  <tr>
                    <td className="name">WooCommerce</td>
                    <td>Full control, no licence fee</td>
                    <td>You own hosting, security and plugin compatibility</td>
                    <td>Fits teams comfortable running WordPress</td>
                  </tr>
                  <tr>
                    <td className="name">commercetools</td>
                    <td>API-first, composable</td>
                    <td>Requires real engineering ownership</td>
                    <td>Enterprise composable builds only</td>
                  </tr>
                  <tr>
                    <td className="name">Commerceflo</td>
                    <td>Unified catalogue, inventory and order engine</td>
                    <td>One system across channels</td>
                    <td>Where a unified engine is the goal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// how it runs'}</p>
            <h2 style={{ marginTop: '10px' }}>Our five-stage migration process</h2>
            <ol className="pp-bento n5" style={{ marginTop: '36px' }}>
              {STEPS.map((s) => (
                <li className="pp-card" key={s.n}>
                  <p className="pp-mlabel" style={{ marginBottom: '8px' }}>{s.n}</p>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{s.t}</h3><p>{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Related */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <div className="pp-splitrow">
              <div>
                <p className="pp-mlabel">{'// related'}</p>
                <h2 style={{ marginTop: '10px' }}>After the migration</h2>
              </div>
              <p className="pp-lead" style={{ margin: 0, maxWidth: '68ch' }}>
              Most replatforms are the start of something rather than the end. If you sell to trade buyers, our{' '}
              <Link href="/b2b-ecommerce" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>B2B e-commerce</Link>{' '}
              build covers account pricing, net terms, and ERP-synced ordering. If you are a manufacturer or distributor,{' '}
              <Link href="/ecommerce-for-manufacturers" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>dealer and distributor portals</Link>{' '}
              go deeper on territory rules and parametric part search.{' '}We also publish{' '}
              <Link href="/ai-citation-study" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>original research on what AI search actually cites</Link>. For a decoupled front end, see{' '}
              <Link href="/headless-commerce" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>headless commerce</Link>.
            </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {/* People */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// who does this'}</p>
            <h2 style={{ marginTop: '10px' }}>Who you actually work with</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>Migrations are decided by judgement calls, not by a tool. These are the conversations that shape the plan.</p>
            <div className="pp-duo" style={{ marginTop: '32px' }}>
              <figure>
                <div className="pp-shot">
                  <img src="/images/us/commerce/replatforming-people-team-planning.webp" alt="Two colleagues at a whiteboard working through a migration plan together"
                       width={1280} height={800} loading="lazy" decoding="async" />
                </div>
                <figcaption>Scoping starts with your URLs, your integrations, and your data quality.</figcaption>
              </figure>
              <figure>
                <div className="pp-shot">
                  <img src="/images/us/commerce/replatforming-people-ops-review.webp" alt="A woman reviewing two monitors at her desk, concentrating"
                       width={1280} height={800} loading="lazy" decoding="async" />
                </div>
                <figcaption>We monitor Search Console coverage daily for the first weeks after cutover.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <FAQ
          eyebrow="REPLATFORMING FAQ"
          headline="Questions teams ask before migrating"
          items={FAQ_ITEMS}
          categories={FAQ_CATEGORIES}
        />

        {/* Final CTA */}
        <section className="pp-sec tint" id="final-cta">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <h2 style={{ marginTop: 0 }}>Scope your migration</h2>
                <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '52ch' }}>
                  Tell us what you are on now, where you want to go, and what is integrated. We will audit the data and
                  the URLs and send a fixed proposal before any work starts.
                </p>
                <div style={{ marginTop: '22px' }}>
                  <ModalCTAButton label="Get a migration audit" region="us" btnVariant="secondary-light" />
                </div>
              </div>
              <div className="pp-card" style={{ padding: 'clamp(24px,3vw,34px)' }}>
                <ul style={{ display: 'grid', gap: '12px' }}>
                  {[
                    'Complete URL map agreed before the build starts',
                    'Single-hop 301 redirects, no accidental chains',
                    'Integrations rebuilt as part of the migration',
                    'Old store kept live so rollback is a DNS change',
                    'You own the code, the data, and the accounts',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '10px', fontSize: '15px', lineHeight: 1.55, color: 'var(--pp-body)' }}>
                      <span style={{ marginTop: '3px', flex: 'none', display: 'inline-flex', height: '18px', width: '18px', alignItems: 'center', justifyContent: 'center', borderRadius: '999px', background: 'rgba(240,90,40,0.1)', color: 'var(--pp-orange-dark)' }}>{checkIcon}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
