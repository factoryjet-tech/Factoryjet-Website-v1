import type { Metadata } from 'next';
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
  title: 'Squarespace to Shopify Migration Services | FactoryJet',
  description:
    'Squarespace to Shopify migration services. We move Squarespace 7.0 and 7.1 stores to Shopify, handling the export gaps Squarespace leaves behind: order and customer data, CDN-hosted images, member areas, URL remapping, and domain transfer. Fixed proposal before any work starts.',
  openGraph: {
    type: 'website', siteName: 'FactoryJet',
    title: 'Squarespace to Shopify Migration Services | FactoryJet',
    description: 'Squarespace to Shopify migration handling the export gaps, URL remapping, and domain transfer.',
    url: 'https://factoryjet.com/replatforming/squarespace-to-shopify',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet Squarespace to Shopify migration services' }],
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: 'Squarespace to Shopify Migration | FactoryJet', description: 'Squarespace to Shopify migration handling export gaps, URL remapping, and domain transfer.', images: ['https://factoryjet.com/og-default.png'] },
  alternates: { canonical: 'https://factoryjet.com/replatforming/squarespace-to-shopify' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Migration basics' },
  { key: 'data', label: 'Data & export limits' },
  { key: 'seo', label: 'SEO & URLs' },
  { key: 'domain', label: 'Domain & launch' },
  { key: 'process', label: 'Process & timing' },
];

const FAQ_ITEMS = [
  { category: 'basics', question: 'Why migrate from Squarespace to Shopify?', answer: 'Almost always because the store outgrew a website builder. Squarespace is excellent for design-led sites with a modest catalog, but it constrains variants, apps, shipping logic, subscriptions, and anything B2B. Teams move when commerce becomes the main business rather than a section of the website.' },
  { category: 'basics', question: 'Is it hard to switch from Squarespace to Shopify?', answer: 'The build is straightforward because catalogs are usually small and clean. The two genuinely hard parts are Squarespace\'s incomplete data export and the URL structure change, which decides whether your existing rankings survive. Neither is visible from the front end, which is why the migration gets underestimated.' },
  { category: 'basics', question: 'Should we stay on Squarespace?', answer: 'If you sell a handful of products, need no complex shipping or subscription logic, and the site is primarily a brochure with a store attached, Squarespace is doing its job and migration is unnecessary cost. We recommend staying more often than people expect.' },
  { category: 'basics', question: 'Does it matter whether we are on Squarespace 7.0 or 7.1?', answer: 'Yes, for URLs and templates. The two versions structure pages and collections differently, so the redirect map differs and the export behaviour is not identical. We check which version and template family you are on during the audit rather than assuming.' },
  { category: 'data', question: 'What can you actually export from Squarespace?', answer: 'Squarespace\'s native export covers pages, blog posts, and basic product data as a WordPress-format XML file. It does not include orders, customers, or full product variant detail. That gap is the single most important thing to understand before planning a Squarespace migration.' },
  { category: 'data', question: 'How do you get order and customer data out?', answer: 'Squarespace provides CSV exports for orders and customer profiles from the admin, separate from the site export, and the Commerce API can be used for richer extraction where volume justifies it. We combine those sources and reconcile them rather than relying on the single site export, which would silently drop your entire order history.' },
  { category: 'data', question: 'What happens to product images?', answer: 'Squarespace images are served from its own CDN, so the export references URLs that stop working once you leave. Images have to be downloaded, renamed sensibly, and re-uploaded to Shopify. Keeping meaningful filenames and alt text matters here because image search traffic is real for product-led brands.' },
  { category: 'data', question: 'Do product variants migrate cleanly?', answer: 'Mostly. Squarespace variants map onto Shopify options reasonably well, and Shopify generally allows more flexibility rather than less. Where Squarespace product add-ons or custom form fields were used, those have no direct equivalent and become metafields, line-item properties, or an app, depending on the use.' },
  { category: 'data', question: 'What about Member Areas and digital products?', answer: 'Squarespace Member Areas have no direct Shopify equivalent. Gated content becomes a customer-tag-driven access model, a membership app, or a separate system. Digital downloads map to a Shopify digital delivery app. Both need deciding early because they change the app stack and the cost.' },
  { category: 'data', question: 'Will customer passwords transfer?', answer: 'No. Passwords are stored as one-way hashes and cannot move between platforms. Customer accounts migrate without passwords and customers reset at launch. We plan that communication in advance so it does not look like a security incident.' },
  { category: 'seo', question: 'Will we lose Google rankings migrating from Squarespace?', answer: 'Not if URLs are mapped properly, but the risk is higher here than in most migrations because the structures differ sharply. Squarespace serves products under a store or shop path with its own item structure, while Shopify uses fixed /products/ and /collections/ prefixes. Almost every product URL changes.' },
  { category: 'seo', question: 'How do Squarespace URLs map to Shopify?', answer: 'Squarespace product URLs typically nest under the store page slug, and blog posts often carry a date-based or collection-based path. Shopify does not nest products under collections at all. We crawl every indexed URL, map each to its Shopify equivalent, and implement single-hop 301 redirects before launch rather than after a drop.' },
  { category: 'seo', question: 'Can we set up 301 redirects on Squarespace before leaving?', answer: 'You do not need to. The redirects live on the new Shopify store once the domain points there, so they are configured on the destination rather than the origin. What matters is that the mapping is complete before DNS changes, because any URL without a destination becomes a 404 the moment you switch.' },
  { category: 'seo', question: 'What happens to our blog content?', answer: 'Blog posts export in the site XML and can be imported into Shopify blogs, but Shopify blog URLs sit under /blogs/{blog}/{article}, which will not match your Squarespace paths. For content-led brands the blog archive is often the largest part of the redirect map and carries a meaningful share of the site\'s links.' },
  { category: 'seo', question: 'Do Squarespace SEO titles and descriptions come across?', answer: 'They need extracting and remapping rather than assuming. Squarespace stores SEO titles and descriptions per item, and they do not always come through cleanly in the export. We capture them from a crawl of the live site as well as the export, which gives a reliable source when the two disagree.' },
  { category: 'domain', question: 'How long does it take to transfer a domain from Squarespace to Shopify?', answer: 'DNS changes usually propagate within a few hours. A full registrar transfer can take up to a week because of ICANN transfer locks, particularly if the domain was registered through Squarespace recently. We normally point DNS at Shopify first and transfer the registrar separately afterwards.' },
  { category: 'domain', question: 'Should we transfer the domain or just point DNS?', answer: 'Point DNS first. It is reversible in minutes, keeps the two risks separate, and means a rollback does not depend on a registrar. Transferring the registrar can happen calmly a week later once the new store is verified, rather than being tangled into launch day.' },
  { category: 'domain', question: 'Will the store go down during the switch?', answer: 'No. We build and test on a Shopify staging URL, migrate the data, then point DNS at a low-traffic window. The Squarespace site stays live and reachable until the new store is verified, which keeps rollback to a DNS change rather than a rebuild.' },
  { category: 'domain', question: 'What happens to Squarespace email campaigns and forms?', answer: 'Squarespace Email Campaigns does not transfer, so your list needs exporting and importing into whichever platform you choose, most commonly Klaviyo for Shopify stores. Squarespace forms need rebuilding, and any form submissions you need to keep should be exported before the account lapses.' },
  { category: 'process', question: 'How long does a Squarespace to Shopify migration take?', answer: 'Usually a few weeks. Catalogs are typically small and data is clean, so the timeline is driven more by design decisions and the size of the content archive than by the store itself. Member Areas or subscriptions extend it because they need architectural decisions rather than data moves.' },
  { category: 'process', question: 'How much does it cost to migrate from Squarespace to Shopify?', answer: 'It depends on catalog size, how much content moves, whether you are redesigning at the same time, and whether Member Areas or digital products are involved. We scope it on a short call and send a fixed proposal before any work starts.' },
  { category: 'process', question: 'Can we redesign at the same time?', answer: 'Yes, and for Squarespace migrations it usually makes sense, because you are leaving a design-led platform and a straight visual copy rarely serves the new one well. It does mean the migration and the redesign share a timeline, so we keep the URL mapping work independent of design decisions.' },
  { category: 'process', question: 'What do you need from us to start?', answer: 'Admin access to Squarespace, your order and customer CSV exports, a note of any Member Areas, digital products, or subscriptions in use, and ideally a crawl of your indexed URLs. Having those ready shortens scoping and surfaces the awkward parts while they are still cheap to solve.' },
  { category: 'process', question: 'Do we own the new Shopify store?', answer: 'Yes. You own the code, the data, and the platform accounts. Nothing is rented back to you and there is no proprietary layer you cannot maintain without us.' },
];

const FAQ_SCHEMA = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })) };
const SERVICE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Squarespace to Shopify migration',
  name: 'Squarespace to Shopify migration',
  description: 'Squarespace 7.0 and 7.1 to Shopify migration services including product and variant mapping, order and customer extraction beyond the limited native export, CDN image re-hosting, Member Areas and digital product replacement, complete URL mapping with single-hop 301 redirects, and domain transfer handling.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
};
const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  '@id': 'https://factoryjet.com/replatforming/squarespace-to-shopify#webpage',
  url: 'https://factoryjet.com/replatforming/squarespace-to-shopify',
  name: 'Squarespace to Shopify Migration Services',
  description: 'Squarespace to Shopify migration handling export gaps, URL remapping, and domain transfer.',
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
  { '@type': 'ListItem', position: 3, name: 'Squarespace to Shopify', item: 'https://factoryjet.com/replatforming/squarespace-to-shopify' },
] };

const STATS = [
  { b: 'Orders + customers', s: 'recovered past the export gap' },
  { b: 'Images', s: 're-hosted off the CDN' },
  { b: '7.0 & 7.1', s: 'both handled' },
  { b: 'DNS first', s: 'registrar transfer later' },
];
const WHY = [
  { i: '⤢', t: 'The catalog outgrew the builder', d: 'Variant limits, thin shipping logic, and no real subscription or B2B model start to shape what you can sell rather than the other way round.' },
  { i: '⛌', t: 'No app ecosystem to speak of', d: 'When every new capability needs a workaround or a third-party embed, the site becomes a collection of patches.' },
  { i: '◷', t: 'Commerce became the business', d: 'Squarespace suits a brochure site with a store attached. Once the store is the business, the priorities invert.' },
  { i: '⇄', t: 'Nothing integrates', d: 'ERP, 3PL, and serious email or loyalty tooling all assume a platform with a real API surface and app model.' },
];
const HARD = [
  { t: 'The export does not include orders', d: 'Squarespace\'s site export covers pages, blog posts, and basic products as WordPress-format XML. Orders and customers are not in it. Miss this and you launch with no purchase history at all.' },
  { t: 'Images live on Squarespace\'s CDN', d: 'Exported references point at Squarespace-hosted URLs that stop resolving once you leave. Every image needs downloading, sensibly renaming, and re-uploading, with alt text preserved.' },
  { t: 'URL structures differ sharply', d: 'Squarespace nests products under the store page slug; Shopify uses fixed /products/ and /collections/ prefixes and does not nest. Almost every product URL changes, so the redirect map is the whole ballgame.' },
  { t: 'Member Areas have no equivalent', d: 'Gated content becomes customer tags, a membership app, or a separate system. It is an architectural decision, not a data move, and it needs making early.' },
  { t: 'Blog paths will not match', d: 'Shopify blog URLs sit under /blogs/{blog}/{article}. For content-led brands the archive is often the biggest part of the redirect map and carries real link equity.' },
  { t: 'Email and forms do not travel', d: 'Squarespace Email Campaigns and forms need rebuilding elsewhere, and any submissions worth keeping must be exported before the account lapses.' },
];
const STEPS = [
  { n: '01', t: 'Audit', d: 'Confirm 7.0 or 7.1, crawl every indexed URL, and check for Member Areas, digital products, and subscriptions that change the architecture.' },
  { n: '02', t: 'Extract', d: 'Site XML for pages and content, admin CSV for orders and customers, Commerce API where volume justifies it, plus a full image pull off the CDN.' },
  { n: '03', t: 'Build & migrate', d: 'Shopify storefront on staging, catalog and variants rebuilt, images re-hosted with alt text intact, content and reviews imported.' },
  { n: '04', t: 'Cutover', d: 'Single-hop redirects live, DNS pointed at Shopify at a low-traffic window, Squarespace kept live so rollback is a DNS change.' },
  { n: '05', t: 'Settle', d: 'Search Console coverage and redirect monitoring, then the registrar transfer handled calmly a week later rather than on launch day.' },
];

const checkIcon = (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
    <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function SquarespaceToShopifyPage() {
  return (
    <>
      <script id="s2s-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="s2s-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="s2s-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="s2s-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="s2s-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">

        <section className="pp-dotgrid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Squarespace to Shopify migration</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  Outgrown the website builder.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  We migrate Squarespace 7.0 and 7.1 stores to Shopify. That means working around what Squarespace will
                  not export, re-hosting every CDN image, and mapping a URL structure that changes almost completely, so
                  the rankings you already have survive the move.
                </p>
                <HeroInlineForm source="us_squarespace_shopify_hero" region="us" submitLabel="Get a migration audit" />
              </div>
              <div className="pp-stage" role="img" aria-label="A Squarespace store migrating to Shopify with orders, images and URLs preserved.">
                <div className="pp-store" aria-hidden="true">
                  <div className="bar"><i /><i /><i /></div>
                  <div className="body">
                    <div className="row"><span className="k">Site export</span><span className="v">no orders</span></div>
                    <div className="row win"><span className="k">Orders + customers</span><span className="v">recovered</span></div>
                    <div className="row"><span className="k">CDN images</span><span className="v">re-hosted</span></div>
                    <div className="row"><span className="k">Product URLs</span><span className="v">remapped</span></div>
                  </div>
                </div>
                <span className="pp-node" style={{ top: '4%', left: '-4%' }} aria-hidden="true"><span className="d" />Squarespace</span>
                <span className="pp-node" style={{ bottom: '6%', right: '-6%', animationDelay: '.8s' }} aria-hidden="true"><span className="d" />Shopify</span>
              </div>
            </div>
          </div>
        </section>

        <section className="pp-sec tint" style={{ paddingTop: 'clamp(32px,4vh,52px)', paddingBottom: 'clamp(32px,4vh,52px)' }}>
          <div className="pp-wrap">
            <div className="pp-stats">
              {STATS.map((s) => (<div className="pp-stat" key={s.b}><b>{s.b}</b><span>{s.s}</span></div>))}
            </div>
          </div>
        </section>

        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the short answer'}</p>
            <h2 style={{ marginTop: '10px' }}>What does a Squarespace to Shopify migration involve?</h2>
            <div style={{ marginTop: '18px', display: 'grid', gap: '14px', maxWidth: '72ch' }} className="pp-lead">
              <p>
                A Squarespace to Shopify migration moves your products, customers, order history, content, images, and
                URLs onto Shopify. The build itself is usually quick because Squarespace catalogs tend to be small and
                clean. The two things that actually decide the outcome are less obvious.
              </p>
              <p>
                First, Squarespace’s native site export does not include orders or customers. It produces a
                WordPress-format XML file covering pages, blog posts, and basic product data only, so order history has
                to be recovered separately through admin CSV exports and the Commerce API. Second, Squarespace and
                Shopify structure product URLs completely differently, so almost every URL changes and the redirect map
                determines whether your traffic survives.
              </p>
            </div>
          </div>
        </section>

        {/* Section image */}
        <section className="pp-sec" style={{ paddingTop: 0 }}>
          <div className="pp-wrap">
            <figure className="pp-figband">
              <div className="pp-shot">
                <img src="/images/us/commerce/squarespace-to-shopify-boutique-counter.webp"
                     alt="An empty boutique retail counter with a tablet point of sale and folded textiles"
                     width={1280} height={800} loading="lazy" decoding="async" />
              </div>
              <figcaption>
                Squarespace suits a brochure site with a store attached. Once the store is the business, priorities invert.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// why teams move'}</p>
            <h2 style={{ marginTop: '10px' }}>Four reasons Squarespace stores leave</h2>
            <ol className="pp-bento n4" style={{ marginTop: '32px' }}>
              {WHY.map((w) => (
                <li className="pp-card" key={w.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}><span aria-hidden="true">{w.i}</span> {w.t}</h3><p>{w.d}</p>
                </li>
              ))}
            </ol>
            <p className="pp-lead" style={{ marginTop: '24px', maxWidth: '66ch' }}>
              And the honest counterpoint: if you sell a handful of products, need no complex shipping or subscription
              logic, and the site is a brochure with a store attached, Squarespace is doing its job. We talk people out
              of this migration more often than you would expect.
            </p>
          </div>
        </section>

        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the hard parts'}</p>
            <h2 style={{ marginTop: '10px' }}>Six things that decide the outcome</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '66ch' }}>
              None of these are visible from the storefront, which is why this migration gets underestimated.
            </p>
            <ol className="pp-bento" style={{ marginTop: '32px' }}>
              {HARD.map((h) => (
                <li className="pp-card" key={h.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{h.t}</h3><p>{h.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div className="pp-card" style={{ padding: 'clamp(28px,4vw,44px)', textAlign: 'left' }}>
              <h2 style={{ marginTop: 0 }}>Worried about losing your order history?</h2>
              <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '62ch' }}>
                You should be, because the standard Squarespace export leaves it behind entirely. We will check what is
                actually recoverable from your admin exports and the Commerce API before anyone quotes you, so nothing
                important is discovered missing after launch.
              </p>
              <div style={{ marginTop: '20px' }}>
                <ModalCTAButton label="Talk to the Founder" region="us" btnVariant="primary-light" />
              </div>
            </div>
          </div>
        </section>

        {/* Section image */}
        <section className="pp-sec" style={{ paddingTop: 0 }}>
          <div className="pp-wrap">
            <figure className="pp-figband">
              <div className="pp-shot">
                <img src="/images/us/commerce/squarespace-to-shopify-product-styling.webp"
                     alt="A minimal product photography setup on a light table with ceramic homeware"
                     width={1280} height={800} loading="lazy" decoding="async" />
              </div>
              <figcaption>
                Every CDN-hosted image is re-hosted with its filename and alt text preserved.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Comparison table */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// side by side'}</p>
            <h2 style={{ marginTop: '10px' }}>What actually changes moving off Squarespace</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>The build is quick. These are the parts that catch teams out.</p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead><tr><th>Dimension</th><th>Squarespace</th><th>Shopify</th><th>What it means for you</th></tr></thead>
                <tbody>
                  <tr>
                    <td className="name">Data export</td>
                    <td>Site XML covers pages, posts, basic products only</td>
                    <td>Full catalogue, customers and orders</td>
                    <td>Orders and customers are NOT in the site export</td>
                  </tr>
                  <tr>
                    <td className="name">Order history</td>
                    <td>Separate admin CSV, or the Commerce API</td>
                    <td>Imported and visible to customers</td>
                    <td>Missing this means launching with no purchase history</td>
                  </tr>
                  <tr>
                    <td className="name">Images</td>
                    <td>Served from the Squarespace CDN</td>
                    <td>Hosted on Shopify</td>
                    <td>Every reference breaks on exit; all images need re-hosting</td>
                  </tr>
                  <tr>
                    <td className="name">URL structure</td>
                    <td>Products nested under the store page slug</td>
                    <td>Fixed /products/ and /collections/</td>
                    <td>Almost every product URL changes</td>
                  </tr>
                  <tr>
                    <td className="name">Member Areas</td>
                    <td>Native gated content</td>
                    <td>Customer tags or a membership app</td>
                    <td>A rebuild, not a data move</td>
                  </tr>
                  <tr>
                    <td className="name">Apps & extensibility</td>
                    <td>Limited</td>
                    <td>Large app ecosystem</td>
                    <td>Usually the reason for moving in the first place</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="pp-sec">
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

        {/* Section image */}
        <section className="pp-sec" style={{ paddingTop: 0 }}>
          <div className="pp-wrap">
            <figure className="pp-figband">
              <div className="pp-shot">
                <img src="/images/us/commerce/squarespace-to-shopify-brand-archive.webp"
                     alt="Printed lookbook pages and colour swatches fanned across a pale desk"
                     width={1280} height={800} loading="lazy" decoding="async" />
              </div>
              <figcaption>
                Content and blog archives are mapped, not abandoned.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div className="pp-splitrow">
              <div>
                <p className="pp-mlabel">{'// related'}</p>
                <h2 style={{ marginTop: '10px' }}>Related work</h2>
              </div>
              <p className="pp-lead" style={{ margin: 0, maxWidth: '68ch' }}>
              See{' '}
              <Link href="/replatforming" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>all replatforming services</Link>{' '}
              for the other routes we run, including{' '}
              <Link href="/replatforming/woocommerce-to-shopify" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>WooCommerce to Shopify</Link>{' '}
              and{' '}
              <Link href="/replatforming/magento-to-shopify" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>Magento to Shopify</Link>.
            </p>
            </div>
          </div>
        </section>

        {/* People */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// who does this'}</p>
            <h2 style={{ marginTop: '10px' }}>For brands that outgrew the builder</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>Squarespace migrations are usually design-led businesses whose store became the business.</p>
            <div className="pp-duo" style={{ marginTop: '32px' }}>
              <figure>
                <div className="pp-shot">
                  <img src="/images/us/commerce/squarespace-to-shopify-people-studio-owner.webp" alt="A ceramicist arranging handmade homeware for a product photograph"
                       width={1280} height={800} loading="lazy" decoding="async" />
                </div>
                <figcaption>Every image is re-hosted with its filename and alt text preserved.</figcaption>
              </figure>
              <figure>
                <div className="pp-shot">
                  <img src="/images/us/commerce/squarespace-to-shopify-people-boutique-floor.webp" alt="A shop owner folding textiles on a boutique display table"
                       width={1280} height={800} loading="lazy" decoding="async" />
                </div>
                <figcaption>We talk people out of this migration more often than you would expect.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <FAQ
          eyebrow="SQUARESPACE TO SHOPIFY FAQ"
          headline="Questions Squarespace owners ask before migrating"
          items={FAQ_ITEMS}
          categories={FAQ_CATEGORIES}
        />

        <section className="pp-sec tint" id="final-cta">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <h2 style={{ marginTop: 0 }}>Scope your Squarespace migration</h2>
                <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '52ch' }}>
                  Tell us roughly how many products, whether you use Member Areas or digital products, and how much blog
                  content you have. We will audit the data and the URLs and send a fixed proposal before any work starts.
                </p>
                <div style={{ marginTop: '22px' }}>
                  <ModalCTAButton label="Get a migration audit" region="us" btnVariant="secondary-light" />
                </div>
              </div>
              <div className="pp-card" style={{ padding: 'clamp(24px,3vw,34px)' }}>
                <ul style={{ display: 'grid', gap: '12px' }}>
                  {[
                    'Order and customer data recovered past the export gap',
                    'Every CDN image re-hosted with alt text intact',
                    'Full URL map before DNS changes, not after',
                    'DNS pointed first, registrar transferred later',
                    'Squarespace kept live so rollback is a DNS change',
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
