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
  title: 'WordPress to Shopify Migration Services | Blog & Content Migration | FactoryJet',
  description:
    'WordPress to Shopify migration services. We move WordPress sites and blog archives to Shopify, handling permalink remapping, category-to-tag conversion, page builder markup, Yoast and RankMath metadata, media library re-hosting, and the option to keep WordPress for content.',
  openGraph: {
    type: 'website', siteName: 'FactoryJet',
    title: 'WordPress to Shopify Migration Services | FactoryJet',
    description: 'WordPress and blog archive migration to Shopify with permalink remapping and metadata preserved.',
    url: 'https://factoryjet.com/replatforming/wordpress-to-shopify',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet WordPress to Shopify migration services' }],
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: 'WordPress to Shopify Migration | FactoryJet', description: 'WordPress and blog archive migration to Shopify with permalink remapping.', images: ['https://factoryjet.com/og-default.png'] },
  alternates: { canonical: 'https://factoryjet.com/replatforming/wordpress-to-shopify' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Migration basics' },
  { key: 'blog', label: 'Blog & content' },
  { key: 'seo', label: 'SEO & permalinks' },
  { key: 'tech', label: 'Themes & plugins' },
  { key: 'process', label: 'Process & timing' },
];

const FAQ_ITEMS = [
  { category: 'basics', question: 'Why migrate from WordPress to Shopify?', answer: 'Usually because commerce has become the point of the site and WordPress is being asked to do a job it was not built for. Maintaining hosting, security patching, and plugin compatibility for a store is real work. Shopify absorbs that in exchange for less low-level control.' },
  { category: 'basics', question: 'What is the difference between this and a WooCommerce migration?', answer: 'If your store runs on WooCommerce, that is the WooCommerce path and it centres on products, subscriptions, and the plugin stack. This page covers WordPress sites where the content is the main asset, including blog-only migrations where the store is being built fresh on Shopify.' },
  { category: 'basics', question: 'Should we keep WordPress for content and use Shopify for the store?', answer: 'Genuinely worth considering, and we recommend it more often than you might expect. Shopify\'s blogging is weaker than WordPress in real ways. Running WordPress for content and Shopify for commerce under one domain keeps editorial power while moving the store, at the cost of some architectural complexity.' },
  { category: 'basics', question: 'How weak is Shopify blogging compared to WordPress?', answer: 'Meaningfully. Shopify blogs have no categories, only tags, limited author handling, a simpler editor, and far less control over templates and taxonomy. For a site publishing occasionally this is fine. For a content operation with a large structured archive, it is a real downgrade you should decide on knowingly.' },
  { category: 'blog', question: 'Can our WordPress blog migrate to Shopify?', answer: 'Yes. Posts, images, excerpts, publish dates, and authors can be imported into Shopify blogs. What does not survive intact is taxonomy: WordPress categories have no Shopify equivalent and collapse into tags, which changes how an archive is browsed and internally linked.' },
  { category: 'blog', question: 'What happens to WordPress categories?', answer: 'They become tags, because Shopify blogs support only tags. Any category archive pages you have indexed no longer exist as a structure, so those URLs need mapping to a tag listing or a relevant post. On content-heavy sites this is one of the larger redirect decisions in the project.' },
  { category: 'blog', question: 'Do custom post types migrate?', answer: 'Not directly, because Shopify has no custom post type concept. Depending on what they hold, they become products, blog articles, pages, or metaobjects. Sites using custom post types for things like case studies or resources need an explicit content model decision before anything is imported.' },
  { category: 'blog', question: 'What about our media library?', answer: 'Images are downloaded from the WordPress uploads directory and re-uploaded to Shopify with filenames and alt text preserved where possible. In-post image references then need rewriting to the new URLs, otherwise you launch an archive full of broken images pointing at a server you are decommissioning.' },
  { category: 'seo', question: 'Will we lose rankings migrating from WordPress?', answer: 'Not if the permalink mapping is complete, but the risk is concentrated in the blog rather than the store. WordPress permalink structures are configurable and often date-based or category-nested, while Shopify blog URLs sit under /blogs/{blog}/{article}. Almost every content URL changes.' },
  { category: 'seo', question: 'How do WordPress permalinks map to Shopify?', answer: 'It depends entirely on your permalink setting, which is why we crawl rather than assume. A date-based structure, a category-nested one, and a plain post-name structure each produce a completely different redirect map. We discover the real patterns from indexed URLs, not from the settings page.' },
  { category: 'seo', question: 'What happens to Yoast or RankMath metadata?', answer: 'Titles, meta descriptions, and canonical settings live in plugin database tables and need extracting and mapping rather than rewriting from scratch. Schema those plugins generated also disappears with them, so structured data has to be rebuilt in the Shopify theme and validated before cutover.' },
  { category: 'seo', question: 'Do our existing redirects come across?', answer: 'They need to. WordPress sites usually carry years of redirects in a plugin such as Redirection or inside the SEO plugin. Those must be flattened and re-pointed at the final destination, or you launch with two-hop chains where an old URL redirects to another old URL that redirects again.' },
  { category: 'seo', question: 'What about author archives and pagination?', answer: 'Neither has a clean Shopify equivalent. Author archives disappear, and blog pagination works differently. Both usually hold low-value indexed URLs, so we map the ones with genuine links or rankings and let the rest resolve cleanly rather than redirecting thousands of thin pages into chains.' },
  { category: 'tech', question: 'What happens to content built with Elementor or Divi?', answer: 'Page builder output does not transfer. Elementor, Divi, WPBakery and similar store layout as builder-specific markup and shortcodes that mean nothing outside WordPress. Those pages are rebuilt in the Shopify theme, and the more of your site was built that way, the more of the project is rebuild rather than migration.' },
  { category: 'tech', question: 'Do WordPress plugins have Shopify equivalents?', answer: 'Some do, some are unnecessary on Shopify, and some have no equivalent at all. The audit matters more than the answer, because most WordPress sites run plugins nobody remembers installing alongside two or three that are genuinely load-bearing. Migration is a good moment to shed the rest.' },
  { category: 'tech', question: 'What about multilingual sites on WPML or Polylang?', answer: 'Shopify handles languages through Markets and translation apps rather than duplicated posts, so a WPML structure does not map one-to-one and the hreflang setup has to be rebuilt. If translated content drives meaningful traffic, this deserves scoping before anything else.' },
  { category: 'tech', question: 'Will customer accounts and passwords transfer?', answer: 'Accounts can migrate; passwords cannot. WordPress stores hashes in a format Shopify cannot import, so customers reset at launch. We plan that communication in advance so it does not read as a security incident.' },
  { category: 'process', question: 'How long does a WordPress to Shopify migration take?', answer: 'Usually a few weeks to a couple of months, driven far more by content volume than product count. A large blog archive with category structures and page-builder pages takes considerably longer than a small store with a handful of posts.' },
  { category: 'process', question: 'How much does it cost to migrate from WordPress to Shopify?', answer: 'It depends on how much content moves, how much was built with a page builder, whether custom post types are involved, and whether you are redesigning at the same time. We scope it on a short call and send a fixed proposal before any work starts.' },
  { category: 'process', question: 'Can we migrate the blog separately from the store?', answer: 'Yes, and it is often the sensible order. Content can move ahead of commerce, or stay on WordPress permanently while the store launches on Shopify. Splitting the two reduces launch risk and lets each part be judged on its own.' },
  { category: 'process', question: 'Will the site go down during cutover?', answer: 'No. We build and test on staging, migrate content and data, then switch DNS at a low-traffic window. The WordPress site stays reachable until the new one is verified, so rollback is a DNS change rather than a rebuild.' },
  { category: 'process', question: 'What do you need from us to start?', answer: 'Admin access or a database export, your WordPress XML export, a full plugin and theme list, a note of any page builder in use, and ideally a crawl of your indexed URLs. Those five things make the estimate real rather than optimistic.' },
  { category: 'process', question: 'Do we own the new Shopify store?', answer: 'Yes. You own the code, the data, and the platform accounts. Nothing is rented back to you and there is no proprietary layer you cannot maintain without us.' },
];

const FAQ_SCHEMA = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })) };
const SERVICE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Service', serviceType: 'WordPress to Shopify migration',
  name: 'WordPress to Shopify migration and blog content migration',
  description: 'WordPress to Shopify migration services including blog archive migration, WordPress category to Shopify tag conversion, custom post type content modelling, page builder rebuilds, Yoast and RankMath metadata extraction, media library re-hosting, permalink crawling with single-hop 301 redirects, and hybrid setups keeping WordPress for content.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
};
const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  '@id': 'https://factoryjet.com/replatforming/wordpress-to-shopify#webpage',
  url: 'https://factoryjet.com/replatforming/wordpress-to-shopify',
  name: 'WordPress to Shopify Migration Services',
  description: 'WordPress and blog archive migration to Shopify with permalink remapping and metadata preserved.',
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
  { '@type': 'ListItem', position: 3, name: 'WordPress to Shopify', item: 'https://factoryjet.com/replatforming/wordpress-to-shopify' },
] };

const STATS = [
  { b: 'Blog archive', s: 'mapped, not abandoned' },
  { b: 'Categories', s: 'become tags, deliberately' },
  { b: 'Metadata', s: 'extracted from Yoast/RankMath' },
  { b: 'Hybrid option', s: 'keep WordPress for content' },
];
const HARD = [
  { t: 'Shopify blogging is weaker', d: 'No categories, tags only, limited author handling, and far less template control. For a large structured archive that is a real downgrade, and it should be a knowing decision rather than a discovery after launch.' },
  { t: 'Categories collapse into tags', d: 'Indexed category archive URLs stop existing as a structure. Each needs mapping to a tag listing or a relevant post, and on content-heavy sites this is one of the biggest redirect decisions in the project.' },
  { t: 'Permalinks are configurable', d: 'Date-based, category-nested, and plain post-name structures each produce completely different redirect maps. Anyone quoting without crawling your indexed URLs is guessing.' },
  { t: 'Page builder output does not transfer', d: 'Elementor, Divi and WPBakery store layout as builder-specific markup. Those pages are rebuilt, so the more of your site used a builder, the more of the project is rebuild rather than migration.' },
  { t: 'Custom post types have no equivalent', d: 'They become products, articles, pages, or metaobjects depending on what they hold. That is a content modelling decision to make before importing anything.' },
  { t: 'In-post image references break', d: 'Media must be re-hosted and every in-post reference rewritten, or you launch an archive of broken images pointing at a server you are about to decommission.' },
];
const STEPS = [
  { n: '01', t: 'Audit', d: 'Crawl indexed URLs to discover the real permalink patterns, inventory plugins, page builders, custom post types, and the size of the content archive.' },
  { n: '02', t: 'Decide the model', d: 'Full move to Shopify, or a hybrid keeping WordPress for content. This decision changes everything downstream, so we make it explicitly and early.' },
  { n: '03', t: 'Map & migrate', d: 'Complete URL map including category archives, content imported with metadata extracted from Yoast or RankMath, media re-hosted and references rewritten.' },
  { n: '04', t: 'Cutover', d: 'Single-hop redirects live, DNS switched at a low-traffic window, WordPress kept reachable so rollback is a DNS change.' },
  { n: '05', t: 'Monitor', d: 'Daily Search Console coverage and redirect checks for the first weeks, with particular attention to the blog archive.' },
];

const checkIcon = (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
    <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function WordPressToShopifyPage() {
  return (
    <>
      <script id="p2s-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="p2s-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="p2s-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="p2s-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="p2s-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">

        <section className="pp-dotgrid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">WordPress to Shopify migration</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '19ch' }}>
                  Move the store. Think hard about the blog.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  We migrate WordPress sites and blog archives to Shopify, with permalinks crawled rather than assumed
                  and metadata extracted from Yoast or RankMath. We will also tell you when keeping WordPress for
                  content is the better answer, because sometimes it is.
                </p>
                <HeroInlineForm source="us_wp_shopify_hero" region="us" submitLabel="Get a migration audit" />
              </div>
              <div className="pp-stage" role="img" aria-label="A WordPress site migrating to Shopify with blog archive and metadata mapped.">
                <div className="pp-store" aria-hidden="true">
                  <div className="bar"><i /><i /><i /></div>
                  <div className="body">
                    <div className="row"><span className="k">Permalinks</span><span className="v">crawled</span></div>
                    <div className="row"><span className="k">Categories</span><span className="v">→ tags</span></div>
                    <div className="row win"><span className="k">Blog archive</span><span className="v">mapped</span></div>
                    <div className="row"><span className="k">Media</span><span className="v">re-hosted</span></div>
                  </div>
                </div>
                <span className="pp-node" style={{ top: '4%', left: '-4%' }} aria-hidden="true"><span className="d" />WordPress</span>
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
            <h2 style={{ marginTop: '10px' }}>What does a WordPress to Shopify migration involve?</h2>
            <div className="pp-splitband">
              <div className="pp-splitband-text pp-lead">
              <p>
                A WordPress to Shopify migration moves your pages, blog archive, media, and URLs onto Shopify, and where
                a store exists, the products and customers with it. Because WordPress permalink structures are
                configurable, no two migrations share a redirect map, and Shopify blog URLs sit under
                /blogs/{'{'}blog{'}'}/{'{'}article{'}'}, which will not match whatever structure you use today.
              </p>
              <p>
                The decision that matters most comes before any of that. Shopify’s blogging is genuinely weaker than
                WordPress: tags but no categories, limited author handling, and far less template control. For a site
                publishing occasionally that is fine. For a real content operation it is a downgrade, and keeping
                WordPress for content while Shopify runs commerce is often the better architecture.
              </p>
                <p className="pp-splitband-note">
                  On content-led sites the blog archive is the biggest part of the redirect map.
                </p>
              </div>
              <figure className="pp-splitband-fig">
                <div className="pp-shot">
                  <img src="/images/us/commerce/wordpress-to-shopify-editorial-desk.webp"
                       alt="An editor at a bright desk reviewing an article layout on a large monitor"
                       width={1280} height={800} loading="lazy" decoding="async" />
                </div>
              </figure>
            </div>
            </div>
          </section>


        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the hard parts'}</p>
            <h2 style={{ marginTop: '10px' }}>Six things that decide the outcome</h2>
            <ol className="pp-bento" style={{ marginTop: '32px' }}>
              {HARD.map((h) => (
                <li className="pp-card" key={h.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{h.t}</h3><p>{h.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="pp-sec">
          <div className="pp-wrap">
            <div className="pp-card" style={{ padding: 'clamp(28px,4vw,44px)', textAlign: 'left' }}>
              <div className="pp-splitband" style={{ marginTop: 0 }}>
                <div className="pp-splitband-text">
                  <h2 style={{ marginTop: 0 }}>Publishing seriously? Consider the hybrid.</h2>
                  <p className="pp-lead" style={{ marginTop: '12px' }}>
                Running WordPress for content and Shopify for commerce under one domain keeps your editorial tooling and
                taxonomy while moving the store. It adds architectural complexity, so it is worth it when the content
                operation is genuinely substantial. We will tell you honestly which side of that line you are on.
              </p>
                  <p className="pp-splitband-note">
                    Category archives are mapped to a destination, not silently dropped.
                  </p>
                  <div style={{ marginTop: '20px' }}>
                <ModalCTAButton label="Talk to the Founder" region="us" btnVariant="primary-light" />
              </div>
                </div>
                <figure className="pp-splitband-fig">
                  <div className="pp-shot">
                    <img src="/images/us/commerce/wordpress-to-shopify-content-archive.webp"
                         alt="A content manager arranging labelled archive boxes, representing a mapped blog archive"
                         width={1280} height={800} loading="lazy" decoding="async" />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>


        {/* Comparison table */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// side by side'}</p>
            <h2 style={{ marginTop: '10px' }}>WordPress vs Shopify for content and commerce</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>The commerce case is clear. The content case is genuinely not, and this table is why.</p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead><tr><th>Dimension</th><th>WordPress</th><th>Shopify</th><th>What it means for you</th></tr></thead>
                <tbody>
                  <tr>
                    <td className="name">Blog taxonomy</td>
                    <td>Categories and tags, hierarchical</td>
                    <td>Tags only</td>
                    <td>A real downgrade for a large structured archive</td>
                  </tr>
                  <tr>
                    <td className="name">Permalinks</td>
                    <td>Configurable, often date or category based</td>
                    <td>{'Fixed /blogs/{blog}/{article}'}</td>
                    <td>Almost every content URL changes</td>
                  </tr>
                  <tr>
                    <td className="name">Custom post types</td>
                    <td>Arbitrary content models</td>
                    <td>Products, articles, pages, metaobjects</td>
                    <td>Needs a content modelling decision before import</td>
                  </tr>
                  <tr>
                    <td className="name">Page builders</td>
                    <td>Elementor, Divi, WPBakery markup</td>
                    <td>Theme sections</td>
                    <td>Builder pages are rebuilt, not migrated</td>
                  </tr>
                  <tr>
                    <td className="name">Editorial tooling</td>
                    <td>Mature, flexible, plugin-rich</td>
                    <td>Simpler, commerce-first</td>
                    <td>The main argument for a hybrid setup</td>
                  </tr>
                  <tr>
                    <td className="name">Commerce</td>
                    <td>Requires WooCommerce plus a plugin stack</td>
                    <td>Native, hosted, maintained</td>
                    <td>The main argument for moving</td>
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
            <div className="pp-splitband reverse">
              <div className="pp-splitband-text pp-lead">
                <p>Each stage has a written exit condition, so nothing moves forward on a verbal &ldquo;looks fine&rdquo;. The order is deliberate: data quality is settled before templates, and the redirect map is built and tested before anything goes live.</p>
                <p className="pp-splitband-note">
                  Keeping WordPress for content while Shopify runs commerce is often the better architecture.
                </p>
              </div>
              <figure className="pp-splitband-fig">
                <div className="pp-shot">
                  <img src="/images/us/commerce/wordpress-to-shopify-hybrid-architecture.webp"
                       alt="Two colleagues sketching a two-box diagram on glass, showing WordPress for content beside Shopify for commerce"
                       width={1280} height={800} loading="lazy" decoding="async" />
                </div>
              </figure>
            </div>
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


        <section className="pp-sec">
          <div className="pp-wrap">
            <div className="pp-splitrow">
              <div>
                <p className="pp-mlabel">{'// related'}</p>
                <h2 style={{ marginTop: '10px' }}>Related work</h2>
              </div>
              <p className="pp-lead" style={{ margin: 0, maxWidth: '68ch' }}>
              If your store runs on WooCommerce, see{' '}
              <Link href="/replatforming/woocommerce-to-shopify" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>WooCommerce to Shopify</Link>{' '}
              instead, which covers products, subscriptions, and the plugin stack. See{' '}
              <Link href="/replatforming" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>all replatforming services</Link>{' '}
              for the other routes, or{' '}
              <Link href="/services/wordpress-development" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>WordPress development</Link>{' '}
              if the answer turns out to be improving what you have.
            </p>
            </div>
          </div>
        </section>

        {/* People */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// who does this'}</p>
            <h2 style={{ marginTop: '10px' }}>Content teams have the most to lose</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>The commerce case is usually clear. The content case is the one that deserves a proper conversation.</p>
            <div className="pp-duo" style={{ marginTop: '32px' }}>
              <figure>
                <div className="pp-shot">
                  <img src="/images/us/commerce/wordpress-to-shopify-people-editor-desk.webp" alt="A writer marking up printed article proofs with a red pencil"
                       width={1280} height={800} loading="lazy" decoding="async" />
                </div>
                <figcaption>Shopify blogging is genuinely weaker than WordPress. That should be a knowing decision.</figcaption>
              </figure>
              <figure>
                <div className="pp-shot">
                  <img src="/images/us/commerce/wordpress-to-shopify-people-content-team.webp" alt="Three colleagues reviewing printed page layouts around a table"
                       width={1280} height={800} loading="lazy" decoding="async" />
                </div>
                <figcaption>Category archives are mapped to a destination, not silently dropped.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <FAQ
          eyebrow="WORDPRESS TO SHOPIFY FAQ"
          headline="Questions WordPress owners ask before migrating"
          items={FAQ_ITEMS}
          categories={FAQ_CATEGORIES}
        />

        <section className="pp-sec tint" id="final-cta">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <h2 style={{ marginTop: 0 }}>Scope your WordPress migration</h2>
                <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '52ch' }}>
                  Tell us how big the content archive is, which page builder you use if any, and whether a store already
                  exists. We will audit the URLs and the content model and send a fixed proposal before any work starts.
                </p>
                <div style={{ marginTop: '22px' }}>
                  <ModalCTAButton label="Get a migration audit" region="us" btnVariant="secondary-light" />
                </div>
              </div>
              <div className="pp-card" style={{ padding: 'clamp(24px,3vw,34px)' }}>
                <ul style={{ display: 'grid', gap: '12px' }}>
                  {[
                    'Permalinks discovered from a real crawl, not the settings page',
                    'Category archive URLs mapped, not silently dropped',
                    'Yoast or RankMath metadata extracted rather than rewritten',
                    'Media re-hosted and in-post references rewritten',
                    'Hybrid option assessed honestly before you commit',
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
