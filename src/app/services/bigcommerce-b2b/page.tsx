import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import MidPageCTA from '@/components/v2/MidPageCTA';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import JsonLd from '@/components/JsonLd';
import EcommerceRoiCalculator from '@/components/commerce/EcommerceRoiCalculator';
import B2bWholesaleCalculator from '@/components/commerce/B2bWholesaleCalculator';
import Net30PaymentComparison from '@/components/commerce/Net30PaymentComparison';
import { twinAlternates } from '@/data/hreflangMap';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-11-16';
const PAGE_URL = 'https://factoryjet.com/services/bigcommerce-b2b';

/* Sources. The B2B Edition docs and the cost guide were read on 11 Oct 2026 for
   /blog/best-bigcommerce-agencies-2026; the figures below are copied from that
   post so the two pages never disagree. */
const B2B_DOCS_URL = 'https://docs.bigcommerce.com/developer/docs/b2b-edition/getting-started/overview';
const COST_GUIDE_URL = 'https://www.bigcommerce.com/articles/ecommerce/ecommerce-cost/';

/* House terms, approved wording (2026-10-16). Same terms as /services/ai-automation. */
const HOUSE_TERMS = [
  { t: 'A draft of your store before you sign', d: 'We build a working draft on BigCommerce with your own products and one of your price lists, so you see the trade portal before you commit.' },
  { t: 'Fixed price per phase', d: 'Each phase is scoped, priced and signed on its own. Nothing is billed by the hour.' },
  { t: 'You own the code', d: 'The storefront, the middleware and the integration code sit in your own repository from day one. BigCommerce and app fees are billed to your own accounts.' },
  { t: 'Defect cover inside the build price', d: 'Defects found after launch are fixed inside the build price, for a cover period we agree before work starts.' },
  { t: 'Support only if you want it', d: 'After that, support is optional. Each change is quoted and approved before we do it.' },
  { t: 'No monthly minimum', d: 'There is no monthly fee you pay whether you use it or not.' },
] as const;
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/marketplace';
const LINK = { color: 'var(--pp-orange-dark)', textDecoration: 'underline' } as const;
const H3 = { fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '22px', color: 'var(--pp-ink)' } as const;

export const metadata: Metadata = {
  title: 'BigCommerce B2B Edition Agency for Distributors | FactoryJet',
  description:
    'What BigCommerce B2B Edition does out of the box, where the work is for a distributor with 20,000+ SKUs (ERP price sync, search, PIM, punchout), and how to judge an agency.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'BigCommerce B2B Edition Agency for Distributors | FactoryJet',
    description:
      'B2B Edition gives you company accounts, price lists, quotes and invoices. The work for a large catalog is ERP sync, search, product data and punchout.',
    url: PAGE_URL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'BigCommerce B2B Edition agency for distributors' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BigCommerce B2B Edition Agency for Distributors | FactoryJet',
    description: 'What B2B Edition does natively, and where the real work is for a 20,000 SKU distributor.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: PAGE_URL, languages: twinAlternates['bigcommerce-b2b'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'BigCommerce B2B Edition', url: '/services/bigcommerce-b2b' },
];

/* ─────────────────────────────────────────────
   OUT OF THE BOX vs BUILT AROUND IT
───────────────────────────────────────────── */
const NATIVE = [
  { t: 'Company accounts', d: 'One account per customer business, with many buyers under it and an admin who manages them.' },
  { t: 'Buyer roles', d: 'Roles such as admin, senior buyer and junior buyer, so some people can order and others can only build a list or a quote.' },
  { t: 'Company price lists and catalogs', d: 'Each company or customer group sees its own prices and its own set of products after login.' },
  { t: 'Quotes', d: 'Buyers turn a cart into a quote request. Your sales team edits the prices and sends it back. The buyer orders from the quote.' },
  { t: 'Purchase orders and net terms', d: 'Approved buyers check out with a PO number and pay later on terms you set.' },
  { t: 'Invoice portal', d: 'Buyers see open invoices, download them and pay online from the Buyer Portal.' },
  { t: 'Quick order and shopping lists', d: 'Order by SKU, upload a CSV, and save lists for repeat orders.' },
  { t: 'Sales rep ordering', d: 'Your reps log in as a customer and place or quote orders for them.' },
];

const NOT_NATIVE = [
  { t: 'ERP sync of prices, stock and customers', d: 'B2B Edition stores price lists. It does not pull them from NetSuite, Odoo, SAP Business One or ERPNext by itself. A connector or middleware has to.' },
  { t: 'Search and filters across a big catalog', d: 'Built-in search works for small catalogs. Part-number search, synonyms and clean filters over 20,000 SKUs often need a tool such as Algolia or Searchspring, and good attribute data.' },
  { t: 'Product data (PIM)', d: 'Specs, attributes and images usually live in a spreadsheet, the ERP or a PIM such as Akeneo or Salsify. Someone has to map that data into BigCommerce.' },
  { t: 'Punchout', d: 'Buyers who order from SAP Ariba or Coupa need a cXML or OCI punchout connection. That is a separate connector or vendor, such as TradeCentric.' },
  { t: 'Credit checks and EDI', d: 'Checking a credit limit in the ERP before a net-terms order, or sending orders as EDI, is integration work.' },
];

/* ─────────────────────────────────────────────
   AGENCY CHECKLIST
───────────────────────────────────────────── */
const CHECKLIST = [
  'Show me a live B2B Edition store you built that is connected to an ERP. Which ERP was it?',
  'Which system owns prices, stock and customer records, and what happens when the store and the ERP disagree?',
  'How do you load and update 20,000 SKUs and every company price list? By CSV, by API, or both? How long does a full reload take?',
  'What happens to the store when the ERP or the connector goes down for an hour?',
  'Will you test search and filters with our full catalog, or with a sample of 50 products?',
  'Where will our product data come from, and who cleans the attributes that filters depend on?',
  'Do our buyers need punchout? If so, which connector would you use and who pays for it?',
  'Who owns the code, the BigCommerce account and the app accounts when the project ends?',
];

/* ─────────────────────────────────────────────
   MARKET COST RANGES (not FactoryJet prices)
───────────────────────────────────────────── */
const BUILD_RANGES = [
  { build: 'Small to medium business', range: 'About $5,000 to $25,000' },
  { build: 'Custom or mid-enterprise', range: 'About $25,000 to $80,000 or more' },
  { build: 'Complex or enterprise', range: 'About $80,000 to $250,000 or more' },
];

/* ─────────────────────────────────────────────
   FAQ DATA (one array feeds the visible FAQ and the FAQPage schema)
───────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'choosing', label: 'Choosing an agency' },
  { key: 'features', label: 'B2B Edition features' },
  { key: 'catalog', label: 'Large catalogs' },
  { key: 'integrations', label: 'ERP and punchout' },
  { key: 'commercials', label: 'Cost and timeline' },
];

const FAQ_ITEMS = [
  {
    category: 'choosing',
    question: 'What is the best agency for BigCommerce B2B Edition?',
    answer:
      'The best agency is the one that has built a B2B Edition store connected to an ERP like yours. B2B Edition already handles company accounts, price lists, quotes and invoices, so the hard part is the integration work around it. Firms that put B2B at the center of their pitch include Silk Commerce, IntuitSolutions, Anchor Group and Jamersan. FactoryJet builds B2B Edition stores connected to an ERP. Ask each firm to show you a live wholesale store close to your own.',
  },
  {
    category: 'choosing',
    question: 'Which BigCommerce B2B Edition agency is best for a distributor with 20,000 SKUs?',
    answer:
      'Pick one that can show ERP sync and large catalog work, not only theme design. At 20,000 SKUs the work is keeping company price lists and stock in step with your ERP, making search and filters work across the whole catalog, mapping product data from a PIM or spreadsheet, and adding punchout if your buyers use procurement systems. Ask how they load the full catalog and test search with it. FactoryJet does this work and builds a draft with your own products before you sign.',
  },
  {
    category: 'features',
    question: 'What does BigCommerce B2B Edition do out of the box?',
    answer:
      'The BigCommerce developer docs describe B2B Edition as a set of B2B tools inside the BigCommerce control panel. It adds company accounts, buyer and staff roles, sales quotes, purchase orders on net terms, invoice management and a Buyer Portal where business customers request quotes and pay invoices. It also gives buyers quick order by SKU, CSV upload and shopping lists, and lets sales reps order on behalf of a customer.',
  },
  {
    category: 'features',
    question: 'What does BigCommerce B2B Edition not do on its own?',
    answer:
      'It does not pull prices, stock or customers from your ERP by itself. It does not include punchout to SAP Ariba or Coupa, EDI, or credit checks against your ERP. Search and filters across a large catalog often need a separate search tool and clean product data. Each of these is integration work that an agency builds around B2B Edition.',
  },
  {
    category: 'features',
    question: 'Do I need B2B Edition to sell wholesale on BigCommerce?',
    answer:
      'Not always. Standard BigCommerce has customer groups on the Growth plan and above, and price lists on the Performance plan. Company accounts, buyer roles, quotes, invoices and a Buyer Portal are what B2B Edition adds. If your buyers are businesses with several people ordering, you will usually want B2B Edition.',
  },
  {
    category: 'catalog',
    question: 'Can BigCommerce handle 20,000 or more SKUs?',
    answer:
      'Yes, catalogs of that size run on BigCommerce. The problems at that size are rarely the platform. They are messy product data, filters built on attributes that are not filled in, and price syncs that push every record every time. Plan the data model, load the catalog by API in batches, sync only what changed, and test search with the full catalog before launch.',
  },
  {
    category: 'catalog',
    question: 'How do contract prices for thousands of SKUs stay correct?',
    answer:
      'Your ERP stays the source of truth for prices. The connector sends changed prices into the matching B2B Edition price list when they change, and a scheduled job compares the two systems and fixes any record that drifted. The store never becomes a second place where someone edits prices by hand.',
  },
  {
    category: 'catalog',
    question: 'Which search tool should a large B2B catalog use on BigCommerce?',
    answer:
      'Start by testing the built-in search with your full catalog and real part numbers. If buyers cannot find parts by number, partial number or common names, a tool such as Algolia or Searchspring adds typo handling, synonyms and better filters. Whichever tool you pick, filters only work if each product has its attributes filled in.',
  },
  {
    category: 'integrations',
    question: 'Which ERPs does FactoryJet connect to BigCommerce B2B Edition?',
    answer:
      'We connect BigCommerce to ERPs including NetSuite, Odoo, SAP Business One and ERPNext, to custom ERPs, and to QuickBooks and Xero. Before we build, we write down which records move, in which direction, how often, and which system wins a conflict.',
  },
  {
    category: 'integrations',
    question: 'How does punchout work with BigCommerce B2B Edition?',
    answer:
      'A buyer starts in their procurement system, such as SAP Ariba or Coupa, and clicks through to your store. They shop with their own contract prices, then the cart goes back to their system as a requisition for approval. The approved purchase order comes back to you as an order. This runs over cXML or OCI through a punchout connector or vendor.',
  },
  {
    category: 'commercials',
    question: 'How much does a BigCommerce B2B Edition build cost?',
    answer:
      'BigCommerce publishes market ranges in its 2026 ecommerce cost guide: about $5,000 to $25,000 for a small to medium business store, $25,000 to $80,000 or more for a custom or mid-enterprise store, and $80,000 to $250,000 or more for a complex or enterprise store. Catalog size, B2B rules and the number of systems to connect move a project up those bands. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'commercials',
    question: 'How long does a BigCommerce B2B Edition build take?',
    answer:
      'A B2B Edition build usually takes 5 to 8 weeks. Each extra system to connect, such as an ERP, a PIM or a punchout connector, adds time to the plan. We set the timeline in writing during scoping.',
  },
  {
    category: 'commercials',
    question: 'How is FactoryJet’s BigCommerce B2B work priced?',
    answer:
      'Each phase is scoped, priced and signed on its own, paid in milestones, with no hourly billing and no share of your revenue. Defects found after launch are fixed inside the build price for a cover period agreed before work starts. Support after that is optional, and there is no monthly minimum.',
  },
];

/* ─────────────────────────────────────────────
   SCHEMAS
───────────────────────────────────────────── */
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'BigCommerce B2B Edition development',
  name: 'BigCommerce B2B Edition development for distributors',
  description:
    'BigCommerce B2B Edition builds for distributors and manufacturers: company accounts, price lists and quotes, plus ERP sync, large catalog search, product data and punchout.',
  url: PAGE_URL,
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'B2B distributors, wholesalers and manufacturers' },
};

const webpageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  name: 'BigCommerce B2B Edition Agency for Distributors | FactoryJet',
  description: 'What BigCommerce B2B Edition does natively, where the work is for a large catalog, and how to judge an agency.',
  url: PAGE_URL,
  dateModified: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder & Chief Technical Architect',
    url: 'https://factoryjet.com/about',
    sameAs: ['https://www.linkedin.com/in/bhavesh-ai-gtm-expert/', 'https://github.com/factoryjet-tech'],
  },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BREADCRUMB_ITEMS.map((b, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: b.name,
    item: `https://factoryjet.com${b.url === '/' ? '' : b.url}`,
  })),
};

export default function BigCommerceB2BPage() {
  return (
    <>
      <JsonLd id="bc-schema" data={[faqSchema, serviceSchema, webpageSchema, breadcrumbSchema]} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        <div className="pp-wrap" style={{ paddingTop: '16px', paddingBottom: '0px' }}>
          <Breadcrumbs items={BREADCRUMB_ITEMS} />
        </div>

        {/* ── Hero: direct answer first ── */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">BigCommerce B2B Edition agency</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '20ch' }}>
                  BigCommerce B2B Edition agency for distributors with large catalogs
                </h1>
                <p className="pp-lead" style={{ maxWidth: '56ch' }}>
                  B2B Edition already gives you company accounts, buyer roles, company price lists, quotes,
                  purchase orders and an invoice portal. For a distributor with 20,000 SKUs, the work is
                  around it: syncing price lists and stock from your ERP, search and filters that work across
                  the whole catalog, product data from a PIM, and punchout for buyers on SAP Ariba or Coupa.
                  Choose an agency that can show you that work. That is the work FactoryJet does.
                </p>
                <HeroInlineForm
                  source="us_bigcommerce_b2b_hero"
                  region="us"
                  submitLabel="See a draft of my store"
                  trustText="Working software on your own data before you sign. Founder replies within 24 hours."
                />
              </div>

              {/* In the box vs built around it */}
              <div
                role="img"
                aria-label="What BigCommerce B2B Edition includes, and the integration work built around it for a large catalog."
                style={{ border: '1px solid var(--pp-line)', borderRadius: '18px', background: '#fff', padding: '24px', boxShadow: '0 18px 50px rgba(20,17,15,.08)' }}
              >
                <p style={{ fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-muted)', textTransform: 'uppercase', letterSpacing: '.08em' }}>In B2B Edition</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginTop: '10px' }}>
                  {['Company accounts', 'Buyer roles', 'Price lists', 'Quotes', 'POs and terms', 'Invoice portal'].map((n) => (
                    <div key={n} style={{ border: '1px solid var(--pp-line)', borderRadius: '10px', padding: '10px 8px', fontFamily: 'var(--pp-disp)', fontSize: '13px', fontWeight: 700, color: 'var(--pp-ink)' }}>{n}</div>
                  ))}
                </div>
                <p style={{ fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-orange-dark)', textTransform: 'uppercase', letterSpacing: '.08em', marginTop: '20px' }}>Built around it</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', marginTop: '10px' }}>
                  {['ERP price and stock sync', 'Search across 20,000+ SKUs', 'PIM product data', 'Punchout (cXML / OCI)'].map((n) => (
                    <div key={n} style={{ border: '1.5px solid var(--pp-orange)', background: 'var(--pp-tint)', borderRadius: '10px', padding: '10px 8px', fontFamily: 'var(--pp-disp)', fontSize: '13px', fontWeight: 700, color: 'var(--pp-ink)' }}>{n}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Out of the box vs not ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// native vs integration</p>
            <h2 style={{ marginTop: '10px', maxWidth: '30ch' }}>What BigCommerce B2B Edition does out of the box (and what it does not)</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '64ch' }}>
              The left column is what the{' '}
              <a href={B2B_DOCS_URL} target="_blank" rel="noopener noreferrer" style={LINK}>BigCommerce B2B Edition docs</a>{' '}
              describe. The right column is what a distributor has to add. Most of an agency&rsquo;s time goes to the right column.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(24px,4vw,48px)', marginTop: '32px', alignItems: 'start' }} className="pp-herogrid">
              <div>
                <h3 style={{ ...H3, marginTop: 0 }}>Out of the box</h3>
                <ul style={{ display: 'grid', gap: '12px', marginTop: '14px' }}>
                  {NATIVE.map((x) => (
                    <li key={x.t} className="pp-card">
                      <b style={{ color: 'var(--pp-ink)' }}>{x.t}.</b> {x.d}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ ...H3, marginTop: 0 }}>Not out of the box</h3>
                <ul style={{ display: 'grid', gap: '12px', marginTop: '14px' }}>
                  {NOT_NATIVE.map((x) => (
                    <li key={x.t} className="pp-card" style={{ borderColor: 'var(--pp-orange)' }}>
                      <b style={{ color: 'var(--pp-ink)' }}>{x.t}.</b> {x.d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Large catalogs ── */}
        <section className="pp-sec tint" id="large-catalogs">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// 20,000+ skus</p>
            <h2 style={{ marginTop: '10px' }}>Running a 20,000+ SKU catalog on BigCommerce B2B Edition</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Big catalogs rarely break the platform. They break on data and on sync design. These are the five
                decisions we make with you before any page is designed.
              </p>
              <h3 style={H3}>1. Data model</h3>
              <p>
                Decide what is a product and what is a variant. A bolt in 40 lengths can be one product with 40 variants
                or 40 products. The choice changes search, filters, price lists and how buyers reorder, so we set it
                once, with your sales team, before import.
              </p>
              <h3 style={H3}>2. Import</h3>
              <p>
                We load the catalog through the BigCommerce API in batches, not by hand. The same script runs again for
                updates, so a reload is a repeatable job with a log, not a weekend of spreadsheets.
              </p>
              <h3 style={H3}>3. ERP as the source of truth</h3>
              <p>
                Prices, stock and customer accounts are owned by your ERP, whether that is NetSuite, Odoo, SAP Business
                One or ERPNext. The store holds a copy. The connector sends only what changed, and a scheduled check
                compares both systems and fixes anything that drifted. Nobody edits a price in two places.
              </p>
              <h3 style={H3}>4. Search and filters</h3>
              <p>
                Distributor buyers search by part number, partial number and the name they use on the shop floor. We
                test the built-in search with your full catalog first. If it falls short, we add a tool such as Algolia
                or Searchspring. Filters only work when attributes are filled in, so product data from a PIM such as
                Akeneo or Salsify, or a cleaned spreadsheet, comes before filter design.
              </p>
              <h3 style={H3}>5. Speed with real data</h3>
              <p>
                We test category pages, search and quick order with the full catalog and your largest company price
                list loaded, not with a demo store of 50 products. If the storefront needs a custom buying flow, we build
                it headless on Catalyst, the BigCommerce Next.js framework.
              </p>
            </div>
          </div>
        </section>

        {/* ── How to judge an agency ── */}
        <section className="pp-sec" id="judge-an-agency">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'start' }} className="pp-herogrid">
              <div>
                <p className="pp-mlabel">// checklist</p>
                <h2 style={{ marginTop: '10px' }}>How to judge a BigCommerce B2B agency</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  Ask every agency on your shortlist these eight questions. Ask us too. For a list of firms that build on
                  B2B Edition, see{' '}
                  <a href="/blog/best-bigcommerce-agencies-2026" style={LINK}>the best BigCommerce agencies in 2026</a>.
                </p>
              </div>
              <ol style={{ listStyleType: 'decimal', paddingLeft: '1.4rem', display: 'grid', gap: '12px', color: 'var(--pp-body)', fontSize: '16px', lineHeight: 1.55 }}>
                {CHECKLIST.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── Market cost ranges ── */}
        <section className="pp-sec tint" id="cost">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// market ranges, not our prices</p>
            <h2 style={{ marginTop: '10px' }}>What a BigCommerce B2B Edition build costs</h2>
            <p className="pp-lead" style={{ marginTop: '14px' }}>
              BigCommerce publishes build ranges in its{' '}
              <a href={COST_GUIDE_URL} target="_blank" rel="noopener noreferrer" style={LINK}>2026 ecommerce cost guide</a>{' '}
              (the guide credits Monocubed for the table). These are market ranges, not FactoryJet prices.
            </p>
            <div style={{ marginTop: '24px', overflowX: 'auto' }}>
              <table className="pp-table" style={{ minWidth: '480px' }}>
                <thead>
                  <tr>
                    <th>Type of build</th>
                    <th>Range in the BigCommerce guide</th>
                  </tr>
                </thead>
                <tbody>
                  {BUILD_RANGES.map((r) => (
                    <tr key={r.build}>
                      <td className="name">{r.build}</td>
                      <td>{r.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Catalog size, B2B rules and the number of systems to connect move a project up those bands. A distributor
                with 20,000 SKUs, an ERP connection and punchout should expect to be in the upper two. BigCommerce plan
                fees and app fees are on top of the build. FactoryJet quotes a fixed price in writing after a short scoping call.
              </p>
            </div>
          </div>
        </section>

        {/* ── Quotes and buyer roles ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(28px,4vw,52px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-mlabel">// quotes and buyer roles</p>
                <h2 style={{ marginTop: '8px' }}>Set up B2B Edition the way your accounts already buy</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  We map each customer&rsquo;s branches, buyers and approval limits into company accounts and roles. Quotes
                  follow your margin rules, and your reps can order for any account. Then we add the integrations from
                  the right-hand column above.
                </p>
                <div style={{ marginTop: '22px' }}>
                  <ModalCTAButton label="Scope BigCommerce B2B" region="us" btnVariant="secondary-light" />
                </div>
              </div>
              <Image
                src={`${IMG}/bigcommerce-b2b-edition-quoting.webp`}
                alt="A man in a blazer tapping a tablet in a bright white showroom"
                width={1280}
                height={800}
                style={{ width: '100%', height: 'auto', borderRadius: '18px', border: '1px solid var(--pp-line)', display: 'block', objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* ── ERP integration ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// erp integration</p>
            <h2 style={{ marginTop: '10px' }}>Connecting B2B Edition to your ERP</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                We connect BigCommerce to ERPs including NetSuite, Odoo, SAP Business One and ERPNext, to custom ERPs,
                and to QuickBooks and Xero. Before we write code, we agree a one-page sync map with you.
              </p>
              <h3 style={H3}>Into the store</h3>
              <p>Company price lists, stock by warehouse, customer accounts, credit limits and open invoices.</p>
              <h3 style={H3}>Out of the store</h3>
              <p>Orders, quotes that became orders, new company sign-ups and payments against invoices.</p>
              <h3 style={H3}>When something fails</h3>
              <p>
                Every failed record goes to a log with the reason, and someone on your team gets an alert. Orders are
                queued and retried, never dropped.
              </p>
            </div>
          </div>
        </section>

        {/* ── Punchout ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// punchout</p>
            <h2 style={{ marginTop: '10px' }}>Punchout for buyers on SAP Ariba and Coupa</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Some large buyers will only order from inside their procurement system. Punchout lets them do that with
                your store.
              </p>
              <ol style={{ listStyleType: 'decimal', paddingLeft: '1.4rem', display: 'grid', gap: '10px', marginTop: '12px' }}>
                <li>The buyer clicks your catalog inside SAP Ariba or Coupa and lands in your store, already logged in.</li>
                <li>They shop with their own contract prices.</li>
                <li>The cart goes back to their system as a requisition for approval.</li>
                <li>The approved purchase order comes back to you as an order, with no retyping.</li>
              </ol>
              <p>
                This runs over cXML or OCI through a punchout connector. Our{' '}
                <a href="/b2b-ecommerce/punchout-catalog" style={LINK}>punchout catalog development</a>{' '}
                page covers the options and who runs each one.
              </p>
            </div>
          </div>
        </section>

        {/* ── Build plan ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// build plan</p>
            <h2 style={{ marginTop: '10px' }}>How a BigCommerce B2B Edition build runs</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>A B2B Edition build usually takes 5 to 8 weeks. Each extra system to connect adds time, and we set the plan in writing during scoping.</p>
              <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', display: 'grid', gap: '12px', marginTop: '12px' }}>
                <li><strong>Scope.</strong> Price list rules, company structures, the data model and the ERP sync map.</li>
                <li><strong>Draft store.</strong> Your own products and one real price list on BigCommerce, before you sign the build.</li>
                <li><strong>Accounts and quotes.</strong> Company accounts, roles, quotes, purchase orders and the invoice portal.</li>
                <li><strong>Catalog and search.</strong> Full catalog import, filters and search tested with real part numbers.</li>
                <li><strong>Integrations.</strong> ERP connector, and PIM or punchout if you need them.</li>
                <li><strong>Test and launch.</strong> Test orders with a few of your trade accounts, staff training, then launch.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* ── House terms ── */}
        <section className="pp-sec" id="terms">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'start' }} className="pp-herogrid">
              <div>
                <p className="pp-mlabel">{'// how we work'}</p>
                <h2 style={{ marginTop: '10px' }}>Terms on every BigCommerce B2B build</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  Six terms, written into the proposal before Phase 1 starts.
                </p>
              </div>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '14px' }}>
                {HOUSE_TERMS.map((x) => (
                  <li key={x.t} className="pp-card">
                    <h3>{x.t}</h3>
                    <p>{x.d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline="Send us one price list and one real quote request."
          sub="Tell us your ERP, your procurement systems and how your trade accounts order today. We reply with what the BigCommerce build would cover, phase by phase."
          label="Talk to the founder"
          note="Working software on your own data before you sign. Founder replies within 24 hours."
        />

        {/* ── Comparison Table ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// platform comparison</p>
            <h2 style={{ marginTop: '10px' }}>BigCommerce B2B Edition vs Shopify Plus B2B vs Adobe Commerce B2B</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              For the full platform decision, read{' '}
              <a href="/comparisons/shopify-plus-vs-bigcommerce" style={LINK}>Shopify Plus vs BigCommerce</a>. If you are leaving BigCommerce, see{' '}
              <a href="/replatforming/bigcommerce-to-shopify-plus" style={LINK}>BigCommerce to Shopify Plus migration</a>.
            </p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>B2B need</th>
                    <th>BigCommerce B2B Edition</th>
                    <th>Shopify Plus B2B</th>
                    <th>Adobe Commerce B2B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td className="name">Company accounts and buyer roles</td>
                    <td>Built in.</td>
                    <td>Companies with locations and permissions.</td>
                    <td>Built in.</td>
                  </tr>
                  <tr>
                    <td className="name">Quotes</td>
                    <td>Built in, through the Buyer Portal.</td>
                    <td>Draft orders, or a quote app.</td>
                    <td>Built in (negotiable quotes).</td>
                  </tr>
                  <tr className="me">
                    <td className="name">ERP sync</td>
                    <td>Connector or middleware.</td>
                    <td>Connector or middleware.</td>
                    <td>Connector or custom module.</td>
                  </tr>
                  <tr>
                    <td className="name">Punchout</td>
                    <td>Separate connector.</td>
                    <td>Separate connector.</td>
                    <td>Separate connector or module.</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Hosting</td>
                    <td>SaaS, hosted by BigCommerce.</td>
                    <td>SaaS, hosted by Shopify.</td>
                    <td>Self-hosted or Adobe cloud, with patching to plan for.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Interactive ROI Calculator ── */}
        <section className="pp-sec tint" id="bigcommerce-roi-calculator">
          <div className="pp-wrap">
            <EcommerceRoiCalculator source="us_bigcommerce_b2b_page" defaultPlatform="magento" defaultTarget="bigcommerce-b2b" />
          </div>
        </section>

        {/* ── Net-30 Payment Terms Comparison ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <Net30PaymentComparison />
          </div>
        </section>

        {/* ── Interactive B2B Wholesale Savings & ROI Calculator ── */}
        <section className="pp-sec tint" id="b2b-wholesale-roi-calculator">
          <div className="pp-wrap">
            <B2bWholesaleCalculator source="bigcommerce_b2b_service_page" defaultRevenue={6000000} defaultAov={3200} defaultAccounts={210} />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="pp-sec pp-faqsec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// questions buyers ask</p>
            <div style={{ marginTop: '16px' }}>
              <FAQ headline="BigCommerce B2B Edition questions from distributors" categories={FAQ_CATEGORIES} items={FAQ_ITEMS} />
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div className="pp-ctagrid">
              <div className="pp-cta">
                <p className="pp-mlabel">// next step</p>
                <h2 style={{ margin: '12px 0 16px' }}>See your catalog on BigCommerce B2B Edition</h2>
                <p className="pp-lead" style={{ maxWidth: '44ch' }}>
                  Tell us your ERP, your SKU count and how your trade accounts order today. We send a fixed-scope proposal
                  before any build begins.
                </p>
                <div style={{ marginTop: '24px' }}>
                  <a className="pp-primary" href={CALENDLY} target="_blank" rel="noopener noreferrer">
                    Book a 30-minute scoping call
                  </a>
                </div>
                <div className="founder">
                  <Image
                    src="/bhavesh_avatar-240.webp"
                    alt="Bhavesh Barot, Founder of FactoryJet."
                    width={46}
                    height={46}
                    quality={95}
                    style={{ width: '46px', height: '46px', flexShrink: 0, borderRadius: '50%', objectFit: 'cover', border: '1.5px solid var(--pp-orange)' }}
                  />
                  <div>
                    <b>Bhavesh Barot</b>
                    <span>Founder, FactoryJet &bull; 10+ yrs building commerce.</span>
                  </div>
                </div>
              </div>
              {/* B2B proof, 2026-10-29: GPSUK (Commerceflo) and Sow Easy (WordPress
                  WooCommerce + Odoo), both approved for any page on 2026-10-29. They are
                  B2B ordering work on other platforms, never presented as BigCommerce
                  builds. Facts come from their public case studies only. */}
              <div className="pp-proof">
                <div className="top">
                  <div>
                    <b>B2B ordering we have built</b>
                    <span>On Commerceflo and on WooCommerce with Odoo</span>
                  </div>
                </div>
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--pp-body)', margin: '0 0 12px 0' }}>
                  <b>GPSUK</b>, promotional products, United Kingdom. A trade storefront on Commerceflo. Business buyers
                  log in, see their own account pricing, and move from quote to order without anyone retyping it.
                </p>
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--pp-body)', margin: '0 0 18px 0' }}>
                  <b>Sow Easy</b>, B2B distribution. A trade store on WordPress WooCommerce that reads stock, pricing
                  and SKUs from Odoo. The build is in progress and being tested on staging.
                </p>
                <div className="rate" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 18px' }}>
                  <Link href="/case-studies/gpsuk-promotional-products" style={{ color: 'var(--pp-orange-dark)', fontWeight: 600, textDecoration: 'underline' }}>
                    Read the GPSUK case study →
                  </Link>
                  <Link href="/case-studies/sow-easy-distributor-portal" style={{ color: 'var(--pp-orange-dark)', fontWeight: 600, textDecoration: 'underline' }}>
                    Read the Sow Easy case study →
                  </Link>
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
