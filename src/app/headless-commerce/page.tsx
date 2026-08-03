import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

export const metadata: Metadata = {
  title: 'Headless & Composable Commerce Development Agency | FactoryJet',
  description:
    'Headless commerce development agency for DTC and B2B brands. We build fast headless and composable commerce storefronts on Shopify, BigCommerce, and Commerceflo, with sub-second load times, full design freedom, and your commerce backend intact.',
  openGraph: {
    type: 'website', siteName: 'FactoryJet',
    title: 'Headless & Composable Commerce Development Agency | FactoryJet',
    description: 'Fast headless and composable commerce storefronts on Shopify, BigCommerce, and Commerceflo. Sub-second loads, full design freedom, backend intact.',
    url: 'https://factoryjet.com/headless-commerce',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet, headless commerce development' }],
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: 'Headless & Composable Commerce Development | FactoryJet', description: 'Fast headless and composable commerce storefronts with sub-second loads and full design freedom.', images: ['https://factoryjet.com/og-default.png'] },
  alternates: { canonical: 'https://factoryjet.com/headless-commerce' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'concepts', label: 'Concepts' },
  { key: 'build', label: 'Building it' },
  { key: 'working', label: 'Working together' },
];
const FAQ_ITEMS = [
  { category: 'concepts', question: 'What is headless commerce?', answer: 'Headless commerce splits the storefront your customers see from the commerce engine that holds products, carts, and orders, and connects them over an API. The front end is built with a framework such as Next.js, Remix, or Hydrogen. It buys you speed and design freedom, and it costs you the convenience of an all-in-one theme.' },
  { category: 'concepts', question: 'Is headless commerce worth it?', answer: 'Only when the storefront is genuinely the constraint. If your theme is slow, your content model is fighting you, or you are serving several brands or locales from one catalogue, headless earns its keep. If the real problem is an unoptimised theme or a bad host, headless is an expensive way to avoid fixing that, and we will say so.' },
  { category: 'concepts', question: 'What is the difference between headless and composable commerce?', answer: 'Headless describes decoupling the front end from the commerce engine. Composable describes assembling the whole stack from best-of-breed services: separate search, CMS, cart, and payments. Every composable build is headless, but plenty of headless builds keep one monolithic commerce engine behind them, which is usually the cheaper and saner starting point.' },
  { category: 'concepts', question: 'Does headless commerce hurt SEO?', answer: 'It can, and this is where headless projects most often go wrong. Server-side rendering is not optional: if content only appears after client-side JavaScript, crawlers and AI retrieval bots may never see it. Metadata, structured data, canonical tags, and redirects all have to be rebuilt deliberately rather than inherited from a theme.' },
  { category: 'build', question: 'Which ecommerce agency should build a headless storefront?', answer: 'One that will tell you when you do not need one. Ask any candidate how they handle server-side rendering, structured data, and preview for the content team, and how they keep Core Web Vitals green once the JavaScript bundle grows. Those three answers separate teams who have shipped headless from teams who have read about it.' },
  { category: 'build', question: 'Do you work as a Shopify development partner on headless builds?', answer: 'Yes. We build headless Shopify storefronts on Hydrogen and Oxygen, and on Next.js against the Storefront API where you want framework independence. Checkout stays on Shopify, which is the right call for almost everyone: rebuilding checkout costs a great deal and rarely converts better.' },
  { category: 'build', question: 'What does a headless build cost compared to a theme?', answer: 'More, in both build and ongoing ownership, because you take on a front end that needs engineers. The honest framing is that headless converts engineering capacity into design and performance freedom. If you do not have or want that capacity, a well-built theme is the better commercial decision.' },
  { category: 'build', question: 'Can you go headless without replatforming?', answer: 'Often yes, and it is usually the lower-risk order. The commerce engine stays where it is while the storefront is rebuilt against its API. Doing both at once means debugging two migrations simultaneously, which is how these projects slip.' },
  { category: 'working', question: 'How long does a headless commerce build take?', answer: 'Typically a few months. The variables are how many templates the site needs, how much content modelling is involved, and whether search, personalisation, or multi-locale are in scope. A single-brand catalogue with a modest template set is much faster than a multi-market build.' },
  { category: 'working', question: 'What happens to our content team\'s workflow?', answer: 'This is the question most often skipped, and it decides whether the build succeeds. A decoupled front end breaks the visual editing your team relies on unless preview is designed in. We wire the CMS, preview, and publishing flow as part of the build rather than as an afterthought.' },
  { category: 'working', question: 'Do you support the storefront after launch?', answer: 'Yes, and headless genuinely needs it. A decoupled front end has dependencies, framework upgrades, and a build pipeline that a hosted theme does not. Whoever owns it needs to keep it patched. You own the code either way.' },
  { category: 'working', question: 'Can headless work for B2B?', answer: 'Yes, and it suits B2B well where the buying experience is unusual: complex configurators, account-specific catalogues, or a portal that looks nothing like a consumer store. The B2B rules still live in the commerce engine; headless changes what sits in front of them.' },
  { category: 'concepts', question: 'What is headless commerce?', answer: 'Headless commerce separates the storefront (what customers see) from the commerce backend (catalog, cart, checkout, orders). The front end is rebuilt in a fast framework and talks to the backend through APIs, so you get speed and full design freedom without changing how commerce runs underneath.' },
  { category: 'concepts', question: 'What is composable commerce?', answer: 'Composable commerce takes the headless idea further: instead of one platform, you assemble best-of-breed services (catalog, search, checkout, payments, CMS) connected by APIs. We build composable architectures when a brand needs flexibility no single platform gives.' },
  { category: 'concepts', question: 'Headless vs composable commerce, what is the difference?', answer: 'Headless decouples the front end from one commerce backend. Composable decouples the whole stack into interchangeable services. Headless is a front-end decision; composable is an architecture decision. We help you pick the right level for your needs and budget.' },
  { category: 'concepts', question: 'What are the benefits of headless commerce?', answer: 'Sub-second page loads, full design and UX freedom, the ability to publish one catalog to many front ends and channels, and a future-proof stack you can evolve piece by piece.' },
  { category: 'build', question: 'How do you build headless commerce?', answer: 'We build the front end in a fast framework (Next.js, React, or a platform framework like Shopify Hydrogen or BigCommerce Catalyst), connect it to your commerce backend through APIs, and wire in search, CMS, and payments as needed.' },
  { category: 'build', question: 'Can you build headless Shopify or headless BigCommerce?', answer: 'Yes. We build headless Shopify (including Hydrogen) and headless BigCommerce (including Catalyst), keeping those platforms as the commerce engine while a custom front end delivers the speed and UX.' },
  { category: 'build', question: 'Is headless commerce right for every brand?', answer: 'No. Headless adds build and maintenance cost, so it pays off when performance, custom UX, or multi-front-end publishing matter. For a straightforward store, a well-built standard storefront is often the better call. We give you an honest recommendation.' },
  { category: 'working', question: 'Can you migrate our store to a headless build without losing SEO?', answer: 'Yes. We preserve URLs with 301 redirects, keep structured data and metadata intact, and test on staging before cutover so rankings and uptime are protected.' },
  { category: 'working', question: 'How much does headless commerce development cost?', answer: 'It depends on scope and how much of the stack goes composable, so we scope it on a short call and send a fixed proposal before any work starts.' },
  { category: 'working', question: 'Do you work with US brands?', answer: 'Yes, most of the brands we work with are US-based, across DTC and B2B, with a decade-plus of commerce builds.' },
];
const FAQ_SCHEMA = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })) };
const SERVICE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Headless commerce development',
  name: 'Headless and composable commerce development',
  description: 'Headless commerce development agency. We build fast headless and composable commerce storefronts on Shopify (Hydrogen), BigCommerce (Catalyst), and Commerceflo, connecting a custom front end to your commerce backend through APIs.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' }, audience: { '@type': 'BusinessAudience', name: 'DTC and B2B brands' },
};
const PAGE_MODIFIED = '2026-08-03';
const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  '@id': 'https://factoryjet.com/headless-commerce#webpage',
  url: 'https://factoryjet.com/headless-commerce',
  name: 'Headless & Composable Commerce Development Agency',
  dateModified: PAGE_MODIFIED,
  author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhaveshbarot/', jobTitle: 'Founder, FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
};
const BREADCRUMB_SCHEMA = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
  { '@type': 'ListItem', position: 2, name: 'Headless Commerce', item: 'https://factoryjet.com/headless-commerce' },
] };

const STATS = [
  { b: 'API-first', s: 'front end decoupled from backend' },
  { b: 'Sub-1s', s: 'page loads on a fast front end' },
  { b: 'Composable', s: 'best-of-breed services, your way' },
  { b: '10+ yrs', s: 'building commerce' },
];
const BUILD = [
  { i: '◑', t: 'Headless storefronts', d: 'Custom front ends in Next.js, React, Shopify Hydrogen, or BigCommerce Catalyst, talking to your backend over APIs.' },
  { i: '▤', t: 'Composable architecture', d: 'Assemble best-of-breed catalog, search, checkout, payments, and CMS into one connected stack.' },
  { i: '⚡', t: 'Performance', d: 'Sub-second loads, Core Web Vitals in the green, and SEO-safe rendering for crawlers and AI.' },
  { i: '⤳', t: 'Replatforming to headless', d: 'Move a slow or rigid storefront to headless without losing SEO or order history.' },
  { i: '⇄', t: 'APIs & integrations', d: 'ERP, POS, 3PL, search, and marketplaces wired into one order and inventory layer.' },
  { i: '◎', t: 'One catalog, many front ends', d: 'Publish the same products to web, app, kiosk, and B2B portal from one source of truth.' },
];
const COMPARE = [
  { name: 'Traditional storefront', model: 'Front end coupled to platform', perf: 'Good, theme-bound', flex: 'Limited to the theme', fit: 'Straightforward stores', me: false },
  { name: 'Headless commerce', model: 'Front end decoupled, one backend', perf: 'Sub-second, custom', flex: 'Full design + UX freedom', fit: 'Performance & custom UX', me: true },
  { name: 'Composable commerce', model: 'Whole stack decoupled into services', perf: 'Sub-second, custom', flex: 'Maximum, best-of-breed', fit: 'Complex, evolving stacks', me: false },
];
const STEPS = [
  { n: '01', t: 'Scope', d: 'We decide how much to decouple, headless front end or full composable, based on your goals and budget.' },
  { n: '02', t: 'Build', d: 'A fast front end wired to your commerce backend, search, CMS, and payments through APIs.' },
  { n: '03', t: 'Migrate & launch', d: 'SEO-safe migration, 301 redirects, staging QA, then a clean cutover.' },
  { n: '04', t: 'Own & evolve', d: 'You own the stack; we help you evolve it service by service as you grow.' },
];

export default function HeadlessCommercePage() {
  return (
    <>
      <script id="hc-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="hc-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="hc-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="hc-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* Hero */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(48px,7vh,96px)', paddingBottom: 'clamp(48px,7vh,96px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Headless &amp; composable commerce</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '17ch' }}>
                  A fast front end, any commerce backend.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '47ch' }}>
                  Headless commerce decouples your storefront from the platform underneath, so you get sub-second loads
                  and full design freedom while Shopify, BigCommerce, or Commerceflo run catalog, cart, and checkout.
                </p>
                <HeroInlineForm source="us_headless_hero" region="us" submitLabel="Get a headless audit" />
              </div>
              {/* Hero visual: decoupled architecture layers */}
              <div className="pp-stage" role="img" aria-label="A decoupled architecture: a fast front end connected by an API layer to a commerce backend.">
                <div className="pp-arch" aria-hidden="true">
                  <div className="pp-layer"><div className="t">Front end</div><div className="s">Next.js · Hydrogen · Catalyst</div></div>
                  <div className="pp-conn" />
                  <div className="pp-layer api"><div className="t">API layer</div><div className="s">GraphQL / REST · sub-second</div></div>
                  <div className="pp-conn" />
                  <div className="pp-layer"><div className="t">Commerce backend</div><div className="s">catalog · cart · checkout · orders</div></div>
                </div>
                <span className="pp-node" style={{ top: '2%', right: '-4%' }} aria-hidden="true"><span className="d" />Composable</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stat band */}
        <section className="pp-sec tint" style={{ paddingTop: 'clamp(36px,5vh,60px)', paddingBottom: 'clamp(36px,5vh,60px)' }}>
          <div className="pp-wrap"><div className="pp-stats">{STATS.map((s) => (<div className="pp-stat" key={s.b}><b>{s.b}</b><span>{s.s}</span></div>))}</div></div>
        </section>

        {/* What is headless */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// the concept</p>
            <h2 style={{ marginTop: '10px' }}>What is headless commerce?</h2>
            <div className="pp-splitband">
              <div className="pp-splitband-text pp-lead">
                <p>
                  Headless commerce separates the storefront, the part customers see and interact with, from the commerce
                  backend that handles catalog, cart, checkout, and orders. The two talk through APIs. That means you can
                  rebuild the front end in a fast modern framework and ship a custom experience without re-platforming the
                  commerce engine underneath.
                </p>
                <p>
                  Composable commerce takes it further, decoupling the whole stack into best-of-breed services you assemble
                  and swap as you grow. We build both, and we are honest about when a brand actually needs them versus when
                  a well-built standard storefront is the smarter call.
                </p>
                <p className="pp-splitband-note">
                  Headless converts engineering capacity into design and performance freedom. Without that capacity, a good theme wins.
                </p>
              </div>
              <figure className="pp-splitband-fig">
                <div className="pp-shot">
                  <img src="/images/us/commerce/headless-commerce-speed-lab.webp" alt="A front-end engineer at a bright desk viewing a fast-loading storefront, a stopwatch on the desk"
                       width={1280} height={800} loading="lazy" decoding="async" />
                </div>
              </figure>
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div className="pp-splitband reverse" style={{ marginTop: 0 }}>
              <div className="pp-splitband-text">
                <p className="pp-mlabel">// still deciding</p>
                <h2 style={{ marginTop: '10px' }}>Headless, composable, or a standard storefront?</h2>
                <p className="pp-lead" style={{ marginTop: '12px' }}>
                  Tell us your stack and performance goals. We will tell you honestly which approach actually earns its keep.
                </p>
                <p className="pp-splitband-note">
                  Checkout stays on Shopify. Rebuilding it costs a great deal and rarely converts better.
                </p>
                <div style={{ marginTop: '22px' }}>
                  <ModalCTAButton label="Talk to the Founder" region="us" btnVariant="primary-light" />
                </div>
              </div>
              <figure className="pp-splitband-fig">
                <div className="pp-shot">
                  <img src="/images/us/commerce/headless-commerce-api-layer.webp" alt="Two developers reviewing a storefront on a large monitor at a bright desk"
                       width={1280} height={800} loading="lazy" decoding="async" />
                </div>
              </figure>
            </div>
          </div>
        </section>

        {/* What we build (bento) */}

        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// what we build</p>
            <h2 style={{ marginTop: '10px' }}>Headless &amp; composable, done right</h2>
            <div className="pp-splitband">
              <div className="pp-splitband-text pp-lead">
                <p>
                  A headless build is not one deliverable, it is a front end, a content model, a preview workflow and a
                  deployment pipeline that all have to be owned after launch. These are the pieces we put in place so the
                  storefront stays maintainable by your team rather than only by whoever built it.
                </p>
                <p className="pp-splitband-note">
                  Server-side rendering is not optional. Content that only appears after client-side JavaScript may never be seen by crawlers or AI retrieval bots.
                </p>
              </div>
              <figure className="pp-splitband-fig">
                <div className="pp-shot">
                  <img src="/images/us/commerce/headless-commerce-storefront-build.webp" alt="A designer and developer reviewing a rebuilt storefront together at a bright desk"
                       width={1280} height={800} loading="lazy" decoding="async" />
                </div>
              </figure>
            </div>
            <ul className="pp-bento" style={{ marginTop: '36px' }}>
              {BUILD.map((b) => (
                <li className="pp-card" key={b.t}>
                  <span className="ic" aria-hidden="true" style={{ fontFamily: 'var(--pp-mono)', fontSize: '17px' }}>{b.i}</span>
                  <h3>{b.t}</h3><p>{b.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Comparison */}

        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// how it compares</p>
            <h2 style={{ marginTop: '10px' }}>Traditional vs headless vs composable</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '60ch' }}>The right level of decoupling depends on your goals. Here is the plain comparison.</p>
            <div style={{ marginTop: '28px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead><tr><th>Approach</th><th>Architecture</th><th>Performance</th><th>Flexibility</th><th>Best fit</th></tr></thead>
                <tbody>{COMPARE.map((r) => (<tr key={r.name} className={r.me ? 'me' : ''}><td className="name">{r.name}</td><td>{r.model}</td><td>{r.perf}</td><td>{r.flex}</td><td>{r.fit}</td></tr>))}</tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// how we work</p>
            <h2 style={{ marginTop: '10px' }}>From scope to launch</h2>
            <ul className="pp-bento n4" style={{ marginTop: '36px', gridTemplateColumns: 'repeat(4,1fr)' }}>
              {STEPS.map((s) => (
                <li className="pp-card" key={s.n}>
                  <div style={{ fontFamily: 'var(--pp-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--pp-orange-dark)' }}>{s.n}</div>
                  <h3 style={{ marginTop: '8px' }}>{s.t}</h3><p>{s.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <FAQ
          eyebrow="HEADLESS COMMERCE FAQ"
          headline="Questions brands ask about headless and composable commerce."
          lead="If your question is not below, send a short brief and answers usually come back inside 24 hours."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        <section className="pp-sec tint">
          <div className="pp-wrap">
            <h2 style={{ maxWidth: '22ch' }}>Go headless only when it earns its keep.</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '60ch' }}>
              Tell us your performance goals, your stack, and your roadmap. We will tell you honestly whether headless or
              composable is worth it, and send a fixed proposal before any work starts.
            </p>
            <div style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '13px', background: 'var(--pp-orange)', padding: '14px 24px', fontSize: '15px', fontWeight: 600, color: '#fff', textDecoration: 'none' }}>Talk to the Founder</a>
              <ModalCTAButton label="Get a headless audit" region="us" btnVariant="secondary-light" />
            </div>
            <p style={{ marginTop: '28px', fontSize: '14px', color: 'var(--pp-muted)' }}>
              Related:{' '}
              <Link href="/services/shopify-development" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>Shopify development</Link>,{' '}
              <Link href="/bigcommerce-development" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>BigCommerce development</Link>,{' '}
              <Link href="/omnichannel-commerce" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>omnichannel commerce</Link>, and our{' '}
              <Link href="/best-ecommerce-platforms" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>ecommerce platform comparison</Link>.{' '}We also publish{' '}
              <Link href="/ai-citation-study" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>original research on what AI search actually cites</Link>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
