import type { Metadata } from 'next';
import { Fragment } from 'react';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import AuFaq from '../components/AuFaq';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';
import '../shopify-migration/page.css';

const CANONICAL = 'https://factoryjet.com/au/neto-to-shopify';
const TITLE = 'Neto to Shopify Migration Australia | FactoryJet';
const DESCRIPTION = 'Move from Neto or Maropost to Shopify: product and order history checks, theme setup, customer sign-in and a redirect plan for your Australian store.';
const REVIEWED = '2026-11-26';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  // No equivalent Neto page exists in another locale. Do not invent hreflang twins.
  alternates: { canonical: CANONICAL, languages: { 'en-AU': CANONICAL, 'x-default': CANONICAL } },
  openGraph: { type: 'website', siteName: 'FactoryJet', title: TITLE, description: DESCRIPTION, url: CANONICAL, locale: 'en_AU', images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Neto to Shopify migration Australia' }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['https://factoryjet.com/og-default.png'] },
  robots: { index: true, follow: true },
};

// Official documentation fetched 26 November 2026. Source captures and the claim ledger
// live in reports/chatgpt-buyer-pages-2026-11-26/evidence/p2/ outside this public repo.
const SOURCES = [
  { id: 'neto-products', label: 'Maropost: product CSV export wizard', url: 'https://galaxy.maropost.com/kb/articles/501' },
  { id: 'neto-fields', label: 'Maropost: product fields, parent SKUs, image and product URLs', url: 'https://galaxy.maropost.com/kb/articles/687-product-import-and-export-fields' },
  { id: 'neto-customers', label: 'Maropost: customer CSV export wizard', url: 'https://galaxy.maropost.com/kb/articles/1557-customer-export-wizard' },
  { id: 'neto-orders', label: 'Maropost: sales order CSV export wizard', url: 'https://galaxy.maropost.com/kb/articles/1457' },
  { id: 'neto-content', label: 'Maropost: category and content CSV export wizard', url: 'https://galaxy.maropost.com/kb/articles/1456-category-content-export-wizard' },
  { id: 'neto-reviews', label: 'Maropost: product review CSV export template', url: 'https://galaxy.maropost.com/kb/articles/1449-view-approve-reply-or-export-product-reviews' },
  { id: 'shopify-products', label: 'Shopify Help: product imports and file size', url: 'https://help.shopify.com/en/manual/products/import-export/import-products' },
  { id: 'shopify-product-csv', label: 'Shopify Help: product CSV fields and images', url: 'https://help.shopify.com/en/manual/products/import-export/using-csv' },
  { id: 'shopify-variants', label: 'Shopify Help: variant and option limits', url: 'https://help.shopify.com/en/manual/products/variants/add-variants' },
  { id: 'shopify-customers', label: 'Shopify Help: customer CSV limits and passwords', url: 'https://help.shopify.com/en/manual/customers/import-export-customers' },
  { id: 'shopify-accounts', label: 'Shopify Help: passwordless customer accounts', url: 'https://help.shopify.com/en/manual/customers/customer-accounts' },
  { id: 'shopify-migration', label: 'Shopify Help: import methods for orders, blogs and pages', url: 'https://help.shopify.com/en/manual/migrating-to-shopify' },
  { id: 'shopify-redirects', label: 'Shopify Help: redirects, reserved paths and CSV import', url: 'https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect' },
  { id: 'google-move', label: 'Google Search Central: site moves and ranking changes', url: 'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes' },
];

const CRUMBS = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Shopify migration', url: 'https://factoryjet.com/au/shopify-migration' },
  { name: 'Neto to Shopify', url: CANONICAL },
];

const DATA_ROWS = [
  { type: 'Products', from: 'Product CSV export; keep SKU as the source identifier.', to: 'Map to Shopify product CSV headings. Each file must be no larger than 15 MB.', check: 'Compare descriptions, SKUs, prices, weights and publication status.', sources: ['neto-products', 'shopify-products'] },
  { type: 'Variants', from: 'Export Parent SKU and the option fields alongside each SKU.', to: 'Rebuild the parent and variant grouping. Shopify allows up to 3 options and 2,048 variants per product.', check: 'Test a parent with multiple options before the full catalogue.', sources: ['neto-fields', 'shopify-variants'] },
  { type: 'Images', from: 'Product fields include main and alternate image URLs; a CSV is not an image archive.', to: 'Map accessible image URLs to Shopify image fields. Retain a separate copy of the files.', check: 'Check galleries and variant images before cancelling Neto.', sources: ['neto-fields', 'shopify-product-csv'] },
  { type: 'Customers', from: 'Customer CSV export; keep Username to match source records.', to: 'Map to Shopify customer CSV, in files of 15 MB or less. Passwords cannot move by CSV.', check: 'Compare addresses and recorded marketing consent; test returning-customer sign-in.', sources: ['neto-customers', 'shopify-customers'] },
  { type: 'Order history', from: 'Sales order CSV export; keep Order ID and select the required line and payment fields.', to: 'Use an agreed migration app or API import. Shopify does not provide a native order CSV importer.', check: 'Match orders to customers and products; reconcile totals and refund records.', sources: ['neto-orders', 'shopify-migration'] },
  { type: 'Blog posts, pages and categories', from: 'Category and content CSV exports include blog posts, buying guides and web pages.', to: 'Blogs and pages need an app, API or manual rebuild. Recreate catalogue navigation and collections.', check: 'Review article bodies, dates, images and internal links.', sources: ['neto-content', 'shopify-migration'] },
  { type: 'Old URLs', from: 'Product URL fields plus a crawl of the live store and its sitemap.', to: 'Map old paths to final destinations in a separate Shopify redirect CSV.', check: 'Test real HTTP redirects; flag reserved paths before launch.', sources: ['neto-fields', 'shopify-redirects'] },
  { type: 'Reviews', from: 'Custom Product-Reviews.csv export template, separate from a routine product export.', to: 'Agree a destination review app and its import format before promising a transfer.', check: 'Match original reviews to product SKUs; verify export coverage.', sources: ['neto-reviews'] },
];

// Proposed delivery scope, awaiting Bhavesh's review. These are not claims of past Neto results.
const STEPS = [
  { n: '01', title: 'Agree the store inventory', copy: 'We propose an export inventory covering catalogue records, customers, orders and content, with a separate list of URLs and connected systems.', gate: 'You approve the record types, date ranges and exceptions before a full import.' },
  { n: '02', title: 'Review your Shopify theme', copy: 'We propose a theme setup using your own products so you can review product pages and catalogue navigation on phone and desktop.', gate: 'You see a working demo on your own products before you sign.' },
  { n: '03', title: 'Rehearse the data transfer', copy: 'We propose a sample import followed by a reconciliation of source counts, variant relationships and order totals.', gate: 'You review the sample and any unmapped fields before the remaining records move.' },
  { n: '04', title: 'Approve the redirect map', copy: 'We propose a URL map with each old address, its final destination and any path that needs a separate redirect solution.', gate: 'You approve exceptions and review redirect test results before the domain switch.' },
  { n: '05', title: 'Check the final changes and launch', copy: 'We propose a final transfer of records changed since the rehearsal, followed by checkout and returning-customer checks.', gate: 'You approve the launch window and recovery plan after the checks pass.' },
];

const FAQ_CATEGORIES = [
  { key: 'planning', label: 'Planning your move' },
  { key: 'data', label: 'Store data and accounts' },
  { key: 'content', label: 'Theme and content' },
  { key: 'seo', label: 'URLs and Google rankings' },
  { key: 'launch', label: 'Launch and scope' },
];
const FAQ_ITEMS = [
  { category: 'planning', question: 'Can I move my Neto store to Shopify?', answer: 'Yes, with a separate transfer plan for each record type. Neto exports products, customers and orders as CSV files. Shopify accepts product and customer CSVs after their fields are mapped, while historical orders need an app or API. The theme setup and URL map are separate parts of the move.' },
  { category: 'planning', question: 'Is this also a Maropost Commerce Cloud to Shopify migration?', answer: 'Yes, this guide covers the Neto store referred to as Maropost Commerce Cloud. Check the export screens and actual fields in your own account before choosing an importer. A platform name alone does not establish which data your store holds or which connections need replacing.' },
  { category: 'planning', question: 'How long does a Neto to Shopify migration take?', answer: 'FactoryJet migrations run 5 to 8 weeks. The dates for your store need to account for catalogue mapping, theme approval and the order history you want transferred. An unresolved redirect path or missing export field needs a decision before a launch date is agreed.' },
  { category: 'planning', question: 'Can I see my products on Shopify before signing?', answer: 'Yes, you see a working demo on your own products before you sign. Use it to review the product page and collection browsing on a phone as well as a desktop. Agree the full migration scope separately, including historical records and anything the demo does not cover.' },
  { category: 'data', question: 'Can every Neto product and variant come across?', answer: 'That is the intended scope, subject to checking the source export and Shopify limits. Keep each SKU and its Parent SKU, then map the options. Shopify supports up to 3 options and 2,048 variants per product. Products outside those limits need an agreed alternative before import.' },
  { category: 'data', question: 'Will my product photos move as well?', answer: 'They can move when the image files remain accessible and are mapped correctly. Neto exposes main and alternate image URL fields. Shopify product CSVs reference images by URL. Keep a file backup and check the imported gallery and variant image associations before closing the old store.' },
  { category: 'data', question: 'Can my order history come across?', answer: 'Yes, through an agreed app or API import, rather than Shopify’s native product CSV importer. Neto’s sales order export can retain the source Order ID. Agree the historical date range, then check line items and payment details against source records before relying on the imported history.' },
  { category: 'data', question: 'Will old orders stay linked to the right customer?', answer: 'They need an explicit record mapping and a sample check. Shopify recommends importing products first, customers second and historical orders last so those relationships can be connected. Retain Neto source identifiers during preparation, then compare a returning customer’s history with the original orders.' },
  { category: 'data', question: 'Do customers need new passwords?', answer: 'Their Neto passwords will not transfer by CSV. Current Shopify customer accounts use an emailed one-time verification code instead of a password. Agree the account experience before launch and test it with an existing customer profile, so your sign-in instructions match the store you release.' },
  { category: 'data', question: 'Can my customer addresses and email preferences move?', answer: 'Supported customer fields can move after mapping them to Shopify’s customer CSV. Review the Neto export before assuming every address or custom field is present. Carry recorded marketing consent accurately; an existing email address alone does not establish permission to subscribe that customer.' },
  { category: 'data', question: 'Can we keep our product reviews?', answer: 'Yes, if the destination review app accepts the exported review fields. Neto documents a separate CSV review export template. Match reviews to the right products and check the exported record count before committing to full coverage. Keep the original review text and dates.' },
  { category: 'data', question: 'Can we upload the Neto CSV straight into Shopify?', answer: 'Usually it needs remapping first. Shopify rejects product files with missing required headings or an incompatible format. The native product and customer importers have separate templates and file size limits. Order history and blog content need their own import route rather than the product upload screen.' },
  { category: 'content', question: 'Will you set up the Shopify theme too?', answer: 'Theme setup is part of the proposed scope for this migration. We propose a theme setup using your own products so you can review product pages and catalogue navigation on phone and desktop. Agree which layouts and behaviours to reproduce before the full build.' },
  { category: 'content', question: 'Can the Neto blog and buying guides move?', answer: 'Yes, Neto’s category and content wizard exports blog posts, buying guides and web pages to CSV. Shopify lists apps and APIs for blog and page migration, with manual copying also available. Check article bodies and images, then map each old content address to its new page.' },
  { category: 'content', question: 'Will my Neto categories become Shopify collections?', answer: 'The category structure needs a deliberate rebuild. Export the categories and their content, then decide how each belongs in Shopify collections and menus. Review product membership as well as the category text. Copying the category names alone is not enough to preserve the shopping journey.' },
  { category: 'content', question: 'What cannot move automatically?', answer: 'Customer passwords cannot move by CSV, and a data import does not recreate your storefront design. Orders and blogs need a separate route from product imports. Treat custom checkout behaviour, review storage and connections to other systems as scope items to assess rather than automatic carry-over.' },
  { category: 'seo', question: 'Will I lose my Google rankings moving from Neto to Shopify?', answer: 'Rankings can fluctuate, and no migration can promise unchanged positions. Google recommends mapping old URLs to relevant new pages and avoiding redirect chains. Record your important landing pages before launch, test their redirects and monitor indexing afterwards. A CSV upload alone does not prove that the old links work.' },
  { category: 'seo', question: 'Can all my old product URLs keep working?', answer: 'That is the aim, but every old path needs checking against Shopify’s restrictions. Some prefixes, including /shop and /services, cannot use Shopify’s native redirect tool. Flag those paths before launch and agree a separately tested solution. Do not discover that exception after changing the domain.' },
  { category: 'seo', question: 'How do we bulk import redirects into Shopify?', answer: 'Upload a redirect CSV through Content > Menus > URL redirects > Import in Shopify admin. Use Shopify’s sample file, review the upload and select Import redirects. Keep the redirect map separate from the product CSV, and test the old addresses against their final destinations after import.' },
  { category: 'seo', question: 'Should deleted Neto products all redirect to the homepage?', answer: 'No, use a relevant replacement where one exists. Google warns against redirecting unrelated old URLs to a single destination because they can be treated as soft 404s. Decide which discontinued products have a suitable successor and document the cases with no relevant replacement.' },
  { category: 'seo', question: 'Can we keep our SEO titles and descriptions?', answer: 'They can be retained where the source fields are available and mapped to Shopify. Neto exposes SEO fields, and Shopify’s product CSV supports SEO title and description fields. Compare the final page output, not only the spreadsheet, and keep important content and internal links in the migration inventory.' },
  { category: 'launch', question: 'Do we have to stop taking orders during the move?', answer: 'The launch plan needs an agreed point for stopping changes and reconciling the final records. We propose a final transfer of records changed since the rehearsal, followed by checkout and returning-customer checks. Approve the trading window after the rehearsal.' },
  { category: 'launch', question: 'What happens to Xero, shipping and marketplace connections?', answer: 'Each connection needs an agreed role in the new setup. List the system that owns stock and the destination for orders before choosing replacements. For related scoping, use FactoryJet’s Australian ERP integration and Shopify Xero integration pages. Those connections need their own acceptance checks.' },
  { category: 'launch', question: 'How much does a Neto to Shopify migration cost?', answer: 'A quote needs your export sample and the scope you want moved. Specify the theme work, historical order range and any connections that must be rebuilt. Ask which exceptions are included before approving the project. Agree the record counts and acceptance checks in the scope.' },
  { category: 'launch', question: 'What do we check before cancelling Neto?', answer: 'Check the migrated records, returning-customer sign-in and checkout, then verify old links and hosted images. Keep the original exports and agreed access until reconciliation is complete. Shopify recommends test orders before launch; a completed import does not prove that the live store can take and process an order.' },
];

const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', '@id': `${CANONICAL}#service`, name: 'Neto to Shopify migration Australia', url: CANONICAL, serviceType: 'Neto and Maropost Commerce Cloud to Shopify migration', provider: { '@type': 'Organization', name: 'FactoryJet', url: 'https://factoryjet.com' }, areaServed: { '@type': 'Country', name: 'Australia' }, description: DESCRIPTION },
    { '@type': 'BreadcrumbList', itemListElement: CRUMBS.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.url })) },
    { '@type': 'FAQPage', mainEntity: FAQ_ITEMS.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) },
  ],
};

export default function NetoToShopifyAUPage() {
  return (
    <>
      <script id="ld-au-neto-to-shopify" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <SiteHeader locale="au" logoHref="/au" />
      <div className="aiAgentPage auPage auMigration">
        <nav className="crumbs" aria-label="Breadcrumb"><div className="wrap">
          {CRUMBS.map((c, i) => <Fragment key={c.url}>{i > 0 && ' / '}{i === CRUMBS.length - 1 ? <b aria-current="page">{c.name}</b> : <a href={c.url}>{c.name}</a>}</Fragment>)}
        </div></nav>
        <main id="au-content">
          <section className="hero" id="hero"><div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Neto / Maropost Commerce Cloud</div>
              <h1>Neto to Shopify migration <span className="hero-emphasis">for Australian stores.</span></h1>
              <p className="lead">You want your theme set up, every product accounted for and your order history checked. Your old links need a plan too. This guide sets out what Neto exports, what Shopify accepts and what needs a separate decision before launch.</p>
              <p>FactoryJet is a registered Shopify Partner. You see a working demo on your own products before you sign.</p>
              <HeroInlineForm region="au" source="au_neto_to_shopify_hero" service="Neto to Shopify Migration" trustText="You see a working demo on your own products before you sign." submitLabel="See my products on Shopify" />
            </div>
            <aside className="au-panel" aria-label="Decisions before the move">
              <div className="eyebrow">Before you switch</div>
              <h2>A record count is only the start.</h2>
              <ul className="trigrows">
                <li><span className="m">Products and variants</span><span className="t">Matched by SKU</span></li>
                <li><span className="m">Order history</span><span className="t">App or API</span></li>
                <li><span className="m">Old URLs</span><span className="t">Mapped and tested</span></li>
                <li><span className="m">Customer sign-in</span><span className="t">New account flow</span></li>
              </ul>
              <p className="au-note">A successful file upload does not prove the catalogue, customer history or redirects are correct.</p>
            </aside>
          </div></section>

          <section className="section" id="data-limits"><div className="wrap">
            <div className="section-head"><div className="eyebrow">Data limits</div><h2>What moves from Neto to Shopify, and how.</h2><p>Exportable does not mean ready to import. Use the source identifier to reconcile each record after mapping it to Shopify.</p></div>
            <div className="tablewrap" role="region" aria-label="Neto export and Shopify import comparison" tabIndex={0}>
              <table><thead><tr><th scope="col">Record type</th><th scope="col">Neto export</th><th scope="col">Shopify route and limits</th><th scope="col">Acceptance check</th></tr></thead>
                <tbody>{DATA_ROWS.map((r) => <tr key={r.type}><th scope="row">{r.type}</th><td>{r.from}</td><td>{r.to}</td><td>{r.check}<p>{r.sources.map((id, i) => { const s = SOURCES.find((x) => x.id === id)!; return <Fragment key={id}>{i > 0 && '; '}<a className="underline underline-offset-4" href={s.url}>{s.label}</a></Fragment>; })}</p></td></tr>)}</tbody>
              </table>
            </div>
            <p className="tablenote">The Neto review export example includes a limit of 250 in its template code. Check the generated file against your actual review count rather than assuming it contains every review. <a className="underline underline-offset-4" href={SOURCES[5].url}>Read the export template</a>.</p>
          </div></section>

          <section className="section process" id="migration-steps"><div className="wrap">
            <div className="section-head"><div><div className="eyebrow">Proposed delivery scope</div><h2>Review the move before the store switches.</h2></div><p>FactoryJet migrations run 5 to 8 weeks. The scope and review gates below are a proposed plan for your store, subject to agreement.</p></div>
            <ol className="timeline">{STEPS.map((s) => <li className="tnode" key={s.n}><span className="idx">{s.n}</span><h3>{s.title}</h3><p>{s.copy}</p><p><b>Review gate:</b> {s.gate}</p></li>)}</ol>
            <div className="timelineAction"><ModalCTAButton label="Discuss my Neto migration" region="au" modalVariant="default" btnVariant="primary-light" className="btn btn-primary" /></div>
          </div></section>

          <section className="section" id="redirect-plan"><div className="wrap">
            <div className="section-head"><div className="eyebrow">Redirect plan</div><h2>Give each old URL a checked destination.</h2><p>Google says rankings can fluctuate during a move. A relevant destination and a tested redirect reduce avoidable broken links; they do not guarantee a ranking.</p></div>
            <div className="facts">
              <div className="fact"><div className="sec">01</div><div><h3>Build the URL inventory</h3><p>Use the Neto Product URL fields alongside the live sitemap and a crawl. Include categories and blog posts, then add landing pages with traffic or external links from Search Console. Keep the old path and the final Shopify destination in the same map.</p></div></div>
              <div className="fact"><div className="sec">02</div><div><h3>Separate ordinary paths from exceptions</h3><p>Shopify only redirects broken paths. Reserved prefixes include /shop and /services, so check the actual Neto paths before agreeing to use the native tool. Any exception needs a separately tested solution before launch.</p></div></div>
              <div className="fact"><div className="sec">03</div><div><h3>Import the redirect CSV</h3><p>Use Shopify’s sample redirect CSV with the headings <code>Redirect from</code> and <code>Redirect to</code>. In admin, open Content &gt; Menus &gt; URL redirects &gt; Import. Review the file before selecting Import redirects.</p></div></div>
              <div className="fact"><div className="sec">04</div><div><h3>Test the response, then monitor</h3><p>Request the old URL and check it returns a permanent 301 redirect to the relevant final page in one hop. Update internal links to that final URL. Google recommends keeping redirects for at least a year and monitoring the move in Search Console.</p></div></div>
            </div>
            <p className="au-note">Sources: <a className="underline underline-offset-4" href={SOURCES[12].url}>Shopify redirect rules and CSV import</a>; <a className="underline underline-offset-4" href={SOURCES[13].url}>Google site-move guidance</a>.</p>
          </div></section>

          <AuFaq categories={FAQ_CATEGORIES} items={FAQ_ITEMS} heading="Questions before leaving Neto for Shopify" askLabel="Discuss my store" />

          <section className="section" id="sources"><div className="wrap">
            <div className="section-head"><div className="eyebrow">Official documentation</div><h2>Check the import rules before choosing a tool.</h2><p>Documentation checked <time dateTime={REVIEWED}>26 November 2026</time>. Your own exports still need inspection.</p></div>
            <ul>{SOURCES.map((s) => <li key={s.id}><a className="underline underline-offset-4" href={s.url}>{s.label}</a></li>)}</ul>
          </div></section>

          <section className="section" id="related"><div className="wrap">
            <div className="section-head"><div className="eyebrow">Related Australian services</div><h2>Scope the systems around your store.</h2></div>
            <p>For other source platforms, see <a className="underline underline-offset-4" href="/au/shopify-migration">Shopify migration Australia</a>. Compare the <a className="underline underline-offset-4" href="/au/shopify-development">Shopify theme and development scope</a> with your current storefront. For connected systems, read about <a className="underline underline-offset-4" href="/au/ecommerce-erp-integration">ecommerce ERP integration</a> and <a className="underline underline-offset-4" href="/au/shopify-xero-integration">Shopify Xero integration</a>.</p>
            <p className="au-note">Explore the <a className="underline underline-offset-4" href="/replatforming">replatforming hub</a>, <a className="underline underline-offset-4" href="/omnichannel-commerce">omnichannel commerce</a> or <a className="underline underline-offset-4" href="/au">FactoryJet Australia</a>.</p>
            <div className="timelineAction"><ModalCTAButton label="See my products on Shopify" region="au" modalVariant="default" btnVariant="primary-light" className="btn btn-primary" /></div>
          </div></section>
        </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} />
    </>
  );
}
