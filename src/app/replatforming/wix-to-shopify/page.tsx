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
  title: 'Wix to Shopify Migration Services | FactoryJet',
  description:
    'Wix to Shopify migration services. We move Wix Stores to Shopify, handling Wix export limits, static.wixstatic CDN images, Velo custom code, Wix Bookings and Members, product-page URL remapping with single-hop 301 redirects, and domain transfer off Wix.',
  openGraph: {
    type: 'website', siteName: 'FactoryJet',
    title: 'Wix to Shopify Migration Services | FactoryJet',
    description: 'Wix Stores to Shopify migration handling export limits, CDN images, Velo code, and URL remapping.',
    url: 'https://factoryjet.com/replatforming/wix-to-shopify',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet Wix to Shopify migration services' }],
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: 'Wix to Shopify Migration | FactoryJet', description: 'Wix Stores to Shopify migration handling export limits and URL remapping.', images: ['https://factoryjet.com/og-default.png'] },
  alternates: { canonical: 'https://factoryjet.com/replatforming/wix-to-shopify' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Migration basics' },
  { key: 'data', label: 'Data & export limits' },
  { key: 'seo', label: 'SEO & URLs' },
  { key: 'features', label: 'Wix features' },
  { key: 'process', label: 'Process & timing' },
];

const FAQ_ITEMS = [
  { category: 'basics', question: 'Why migrate from Wix to Shopify?', answer: 'Nearly always because commerce outgrew the site builder. Wix handles a small catalog well, but variant limits, thin shipping and tax logic, a narrow app ecosystem, and no meaningful B2B or subscription model start to constrain what you can sell. Teams move when the store becomes the business.' },
  { category: 'basics', question: 'Is Wix or Shopify better for ecommerce?', answer: 'Shopify is the stronger commerce platform; Wix is the easier general website builder. If you sell a handful of products alongside a brochure site, Wix is doing its job and migrating is unnecessary cost. If commerce drives your revenue, Shopify\'s catalog model, checkout, and app ecosystem are built for it in a way Wix is not.' },
  { category: 'basics', question: 'Should we just stay on Wix?', answer: 'Sometimes, yes. If your catalog is small, your shipping rules are simple, and nothing about the platform is blocking you, migration is disruption without payoff. We say this more often than people expect. The trigger to move is a constraint you keep working around, not a general sense that Shopify is more professional.' },
  { category: 'data', question: 'What can you export from Wix?', answer: 'Less than most platforms, and this is the central constraint. Wix provides CSV exports for products, orders, and contacts from the dashboard, but there is no complete site export. Pages, blog posts, and design are not exportable in any portable format, so content is rebuilt rather than imported.' },
  { category: 'data', question: 'Can we get our order history out of Wix?', answer: 'Yes, via the orders CSV export in the Wix dashboard, and through the Wix API where the volume or detail justifies it. What you cannot do is a single site-wide export that carries everything, so orders, contacts, and products come out as separate extracts that we reconcile before import.' },
  { category: 'data', question: 'What happens to our Wix images?', answer: 'Wix serves media from its own static CDN, so any exported reference stops resolving once you leave. Every image has to be downloaded, given a sensible filename, and re-uploaded to Shopify with alt text preserved. For product-led brands image search traffic is real, so this is worth doing properly rather than in bulk.' },
  { category: 'data', question: 'Do product variants migrate cleanly?', answer: 'Mostly, and usually in your favour. Wix constrains product options more tightly than Shopify, so variants generally map without loss. Where Wix custom text fields or product add-ons were used, those become Shopify line-item properties, metafields, or an app depending on how they function at checkout.' },
  { category: 'data', question: 'Will customer passwords transfer?', answer: 'No. Passwords are stored as one-way hashes and cannot move between platforms. Customer accounts migrate without passwords and customers reset at launch. We plan the wording of that email in advance so it does not read as a breach notification.' },
  { category: 'seo', question: 'Will we lose rankings moving from Wix to Shopify?', answer: 'Not if the URL map is complete, though the structures differ substantially. Wix serves products under a product-page path and blog posts under a post path, while Shopify uses fixed /products/, /collections/, and /blogs/ prefixes. Almost every URL changes, so mapping decides whether traffic survives.' },
  { category: 'seo', question: 'How do Wix URLs map to Shopify?', answer: 'Wix product URLs typically sit under a product-page segment and blog posts under a post segment, neither of which Shopify uses. We crawl every indexed URL on the live site rather than trusting a sitemap, map each to its Shopify equivalent, and implement single-hop 301 redirects before DNS changes.' },
  { category: 'seo', question: 'Can we add redirects on Wix before we leave?', answer: 'You do not need to. Redirects live on the destination once the domain points at Shopify, so they are configured there. What matters is that the mapping is complete before you switch DNS, because any URL without a destination becomes a 404 the moment the domain moves.' },
  { category: 'seo', question: 'What about our Wix blog?', answer: 'Blog content is rebuilt rather than imported, because Wix offers no portable export for it. For a small archive that is a few hours of work. For a large one it is a real project, and it needs the same redirect mapping as the store, since blog posts often carry a meaningful share of a Wix site\'s links.' },
  { category: 'features', question: 'What happens to Velo custom code?', answer: 'It does not transfer. Velo is Wix\'s own development framework, so any custom functionality built with it has to be rebuilt as Shopify theme code, a Shopify app, or Shopify Functions. Auditing what Velo actually does on your site is usually where hidden scope appears.' },
  { category: 'features', question: 'Can you replace Wix Bookings?', answer: 'Yes, with a Shopify booking app or a dedicated scheduling system connected to the store. There is no native Shopify equivalent, so this is an architectural decision rather than a data move, and it needs settling early because it affects the app stack and the cost.' },
  { category: 'features', question: 'What about Wix Members areas?', answer: 'Gated content becomes a customer-tag-driven access model, a membership app, or a separate system. As with Bookings, it is a rebuild rather than a migration, and pretending otherwise is how these projects overrun.' },
  { category: 'features', question: 'Do Wix apps have Shopify equivalents?', answer: 'Usually, and often better ones, since Shopify\'s app ecosystem is considerably larger. The work is not finding equivalents but deciding which apps you actually need. Wix sites frequently carry apps installed years ago and never removed, and migration is a good moment to drop them.' },
  { category: 'process', question: 'How long does a Wix to Shopify migration take?', answer: 'Usually a few weeks. Catalogs are typically small and the data is clean, so the timeline is driven by how much content needs rebuilding and whether Bookings, Members, or Velo code are involved. Those three extend it because they are rebuilds rather than data moves.' },
  { category: 'process', question: 'How much does it cost to migrate from Wix to Shopify?', answer: 'It depends on catalog size, how much content has to be rebuilt, and whether Velo code, Bookings, or Members are in use. We scope it on a short call and send a fixed proposal before any work starts, so the figure does not move mid-project.' },
  { category: 'process', question: 'What happens to our domain if it is registered with Wix?', answer: 'You can point DNS at Shopify while the domain stays registered with Wix, which is the safer first step. A full registrar transfer can take up to a week because of ICANN transfer locks, particularly on recently registered domains, so we handle that separately after the new store is verified.' },
  { category: 'process', question: 'Will the site go down during the switch?', answer: 'No. We build and test on a Shopify staging URL, migrate the data, then point DNS at a low-traffic window. The Wix site stays live until the new store is verified, which keeps rollback to a DNS change rather than a rebuild.' },
  { category: 'process', question: 'Can we redesign at the same time?', answer: 'Yes, and for Wix migrations it usually makes sense, because Wix design does not translate to Shopify themes anyway and a straight visual copy rarely serves the new platform. We keep the URL mapping work independent of design decisions so one cannot delay the other.' },
  { category: 'process', question: 'What do you need from us to start?', answer: 'Dashboard access to Wix, your product, order, and contact CSV exports, a note of any Velo code, Bookings, or Members functionality, and ideally a crawl of your indexed URLs. Having those ready shortens scoping and surfaces the rebuild items while they are still cheap to plan around.' },
  { category: 'process', question: 'Do we own the new Shopify store?', answer: 'Yes. You own the code, the data, and the platform accounts. Nothing is rented back to you and there is no proprietary layer you cannot maintain without us.' },
];

const FAQ_SCHEMA = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })) };
const SERVICE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Wix to Shopify migration',
  name: 'Wix to Shopify migration',
  description: 'Wix Stores to Shopify migration services including product, order and contact CSV extraction, static CDN image re-hosting, Velo custom code replacement, Wix Bookings and Members rebuilds, complete URL mapping with single-hop 301 redirects, and domain handling.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
};
const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  '@id': 'https://factoryjet.com/replatforming/wix-to-shopify#webpage',
  url: 'https://factoryjet.com/replatforming/wix-to-shopify',
  name: 'Wix to Shopify Migration Services',
  description: 'Wix Stores to Shopify migration handling export limits, CDN images, Velo code, and URL remapping.',
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
  { '@type': 'ListItem', position: 3, name: 'Wix to Shopify', item: 'https://factoryjet.com/replatforming/wix-to-shopify' },
] };

const STATS = [
  { b: 'No site export', s: 'so content is rebuilt' },
  { b: 'Velo code', s: 'audited, then replaced' },
  { b: 'CDN images', s: 're-hosted with alt text' },
  { b: 'DNS first', s: 'registrar transfer later' },
];
const HARD = [
  { t: 'There is no full site export', d: 'Wix gives you product, order, and contact CSVs and nothing more. Pages, blog posts, and design are not exportable in any portable format, so content is rebuilt rather than imported. Budget for that up front.' },
  { t: 'Images live on Wix\'s static CDN', d: 'Exported references point at Wix-hosted URLs that stop resolving after you leave. Every image needs downloading, sensibly renaming, and re-uploading with alt text preserved.' },
  { t: 'Velo code has no path', d: 'Velo is Wix\'s own development framework. Anything built with it gets rebuilt as theme code, an app, or Shopify Functions. Auditing what it actually does is where hidden scope appears.' },
  { t: 'Bookings and Members are rebuilds', d: 'Neither has a native Shopify equivalent. Both become apps or separate systems, which is an architectural decision to settle early rather than a data move.' },
  { t: 'URL structures differ completely', d: 'Wix product-page and post paths map to nothing in Shopify, which uses fixed /products/, /collections/ and /blogs/ prefixes. Almost every URL changes.' },
  { t: 'The blog has to be recreated', d: 'With no portable export, posts are rebuilt. For a small archive that is hours; for a large one it is a real project, and it still needs full redirect mapping.' },
];
const STEPS = [
  { n: '01', t: 'Audit', d: 'Crawl every indexed URL from the live site rather than trusting a sitemap, and inventory Velo code, Bookings, Members, and installed apps.' },
  { n: '02', t: 'Extract', d: 'Product, order, and contact CSVs from the dashboard, the Wix API where volume justifies it, plus a full media pull off the static CDN.' },
  { n: '03', t: 'Build & rebuild', d: 'Shopify storefront on staging, catalog imported, images re-hosted with alt text, content and blog rebuilt, Velo functionality replaced.' },
  { n: '04', t: 'Cutover', d: 'Single-hop redirects live, DNS pointed at Shopify at a low-traffic window, Wix kept live so rollback is a DNS change.' },
  { n: '05', t: 'Settle', d: 'Search Console coverage and redirect monitoring, then the registrar transfer handled calmly once the new store is verified.' },
];

const checkIcon = (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
    <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function WixToShopifyPage() {
  return (
    <>
      <script id="x2s-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="x2s-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="x2s-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="x2s-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="x2s-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">

        <section className="pp-dotgrid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Wix to Shopify migration</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  Move the store Wix will not export.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  Wix gives you three CSV files and no site export, so a Wix migration is part data move and part
                  rebuild. We handle both: products and orders extracted properly, images pulled off the Wix CDN, Velo
                  code replaced, and every indexed URL redirected before the domain moves.
                </p>
                <HeroInlineForm source="us_wix_shopify_hero" region="us" submitLabel="Get a migration audit" />
              </div>
              <div className="pp-stage" role="img" aria-label="A Wix store migrating to Shopify with data extracted and content rebuilt.">
                <div className="pp-store" aria-hidden="true">
                  <div className="bar"><i /><i /><i /></div>
                  <div className="body">
                    <div className="row"><span className="k">Site export</span><span className="v">none</span></div>
                    <div className="row win"><span className="k">Products + orders</span><span className="v">CSV extracted</span></div>
                    <div className="row"><span className="k">Velo code</span><span className="v">replaced</span></div>
                    <div className="row"><span className="k">URLs</span><span className="v">remapped</span></div>
                  </div>
                </div>
                <span className="pp-node" style={{ top: '4%', left: '-4%' }} aria-hidden="true"><span className="d" />Wix</span>
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
            <h2 style={{ marginTop: '10px' }}>What does a Wix to Shopify migration involve?</h2>
            <div style={{ marginTop: '18px', display: 'grid', gap: '14px', maxWidth: '72ch' }} className="pp-lead">
              <p>
                A Wix to Shopify migration is part data move and part rebuild, and the split matters for planning. Wix
                provides CSV exports for products, orders, and contacts from the dashboard, but there is no complete
                site export. Pages, blog posts, and design cannot be exported in any portable format, so that content is
                recreated rather than imported.
              </p>
              <p>
                On top of that, images are served from Wix’s own static CDN and stop resolving once you leave, and any
                functionality built with Velo, Wix Bookings, or Wix Members has no Shopify equivalent and gets rebuilt.
                None of this is visible from the front end, which is why Wix migrations are routinely underestimated.
              </p>
            </div>
          </div>
        </section>

        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the hard parts'}</p>
            <h2 style={{ marginTop: '10px' }}>Six things that decide the outcome</h2>
            <div className="pp-bento" style={{ marginTop: '32px' }}>
              {HARD.map((h) => (
                <article className="pp-card" key={h.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{h.t}</h3><p>{h.d}</p>
                </article>
              ))}
            </div>
            <p className="pp-lead" style={{ marginTop: '24px', maxWidth: '66ch' }}>
              Worth saying: if your catalog is small, your shipping rules are simple, and nothing about Wix is actually
              blocking you, migrating is disruption without payoff. The trigger to move is a constraint you keep working
              around, not a feeling that Shopify sounds more serious.
            </p>
          </div>
        </section>

        <section className="pp-sec">
          <div className="pp-wrap">
            <div className="pp-card" style={{ padding: 'clamp(28px,4vw,44px)', textAlign: 'left' }}>
              <h2 style={{ marginTop: 0 }}>Running Velo code, Bookings, or Members?</h2>
              <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '62ch' }}>
                Then those are rebuilds, not migrations, and they drive most of the cost. We will audit what your Velo
                code actually does and what your Bookings or Members setup depends on before anyone writes a proposal.
              </p>
              <div style={{ marginTop: '20px' }}>
                <ModalCTAButton label="Talk to the Founder" region="us" btnVariant="primary-light" />
              </div>
            </div>
          </div>
        </section>

        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// how it runs'}</p>
            <h2 style={{ marginTop: '10px' }}>Our five-stage migration process</h2>
            <div className="pp-bento" style={{ marginTop: '36px' }}>
              {STEPS.map((s) => (
                <article className="pp-card" key={s.n}>
                  <p className="pp-mlabel" style={{ marginBottom: '8px' }}>{s.n}</p>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{s.t}</h3><p>{s.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// related'}</p>
            <h2 style={{ marginTop: '10px' }}>Related work</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              See{' '}
              <Link href="/replatforming" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>all replatforming services</Link>{' '}
              for the other routes we run. If you are weighing builders,{' '}
              <Link href="/replatforming/squarespace-to-shopify" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>Squarespace to Shopify</Link>{' '}
              covers a very similar shape of project, and{' '}
              <Link href="/replatforming/woocommerce-to-shopify" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>WooCommerce to Shopify</Link>{' '}
              covers the self-hosted route.
            </p>
          </div>
        </section>

        <FAQ
          eyebrow="WIX TO SHOPIFY FAQ"
          headline="Questions Wix owners ask before migrating"
          items={FAQ_ITEMS}
          categories={FAQ_CATEGORIES}
        />

        <section className="pp-sec tint" id="final-cta">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <h2 style={{ marginTop: 0 }}>Scope your Wix migration</h2>
                <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '52ch' }}>
                  Tell us roughly how many products, how much content you have, and whether Velo, Bookings, or Members
                  are in use. We will audit the data and the URLs and send a fixed proposal before any work starts.
                </p>
                <div style={{ marginTop: '22px' }}>
                  <ModalCTAButton label="Get a migration audit" region="us" btnVariant="secondary-light" />
                </div>
              </div>
              <div className="pp-card" style={{ padding: 'clamp(24px,3vw,34px)' }}>
                <ul style={{ display: 'grid', gap: '12px' }}>
                  {[
                    'Products, orders and contacts extracted properly, not guessed',
                    'Every CDN image re-hosted with alt text intact',
                    'Velo, Bookings and Members scoped as rebuilds up front',
                    'Full URL map before DNS changes, not after',
                    'Wix kept live so rollback is a DNS change',
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
