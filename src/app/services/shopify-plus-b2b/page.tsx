import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import AuthorCard from '@/components/v2/AuthorCard';
import B2bWholesaleCalculator from '@/components/commerce/B2bWholesaleCalculator';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { twinAlternates } from '@/data/hreflangMap';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-11-16';
const PAGE_URL = 'https://factoryjet.com/services/shopify-plus-b2b';

/* Shopify Help pages, read 16 November 2026. The plan split on this page
   (all B2B plans vs Plus only) comes from SRC_PLAN_FEATURES. */
const READ_ON = '16 November 2026';
const SRC_PLAN_FEATURES = 'https://help.shopify.com/en/manual/b2b/getting-started/plan-features';
const SRC_TERMS = 'https://help.shopify.com/en/manual/b2b/payment-terms';
const SRC_CATALOGS = 'https://help.shopify.com/en/manual/b2b/catalogs';
const SRC_COMPANIES = 'https://help.shopify.com/en/manual/b2b/companies';
const SRC_PLUS_PRICING = 'https://www.shopify.com/plus/pricing';
/* Market cost ranges, read 16 November 2026. Third-party figures, not FactoryJet prices. */
const SRC_RIGBY = 'https://www.rigbyjs.com/guides/b2b-ecommerce-platforms/b2b-commerce-platform-pricing';
const SRC_RINGLY = 'https://www.ringly.io/blog/shopify-plus-partner-agency';

/* House terms, approved wording (2026-10-16). Same terms as /services/ai-automation. */
const HOUSE_TERMS = [
  { t: 'A draft of your store before you sign', d: 'We build a working draft on Shopify with your own products and one of your price lists, so you see the wholesale portal before you commit.' },
  { t: 'Fixed price per phase', d: 'Each phase is scoped, priced and signed on its own. Nothing is billed by the hour.' },
  { t: 'You own the code', d: 'The theme, the Shopify Functions and the integration code sit in your own repository from day one. Shopify and app fees are billed to your own accounts.' },
  { t: 'Defect cover inside the build price', d: 'Defects found after launch are fixed inside the build price, for a cover period we agree before work starts.' },
  { t: 'Support only if you want it', d: 'After that, support is optional. Each change is quoted and approved before we do it.' },
  { t: 'No monthly minimum', d: 'There is no monthly fee you pay whether you use it or not.' },
] as const;
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/marketplace';

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;
const srcLink = { color: 'var(--pp-orange-dark)', textDecoration: 'underline' } as const;
const srcNote = { marginTop: '14px', fontFamily: 'var(--pp-mono)', fontSize: '11.5px', color: 'var(--pp-muted)', lineHeight: 1.6 } as const;
const h3Style = { fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '22px', color: 'var(--pp-ink)' } as const;

export const metadata: Metadata = {
  title: 'Shopify B2B Agency: Price Lists, Net Terms, Wholesale Portals | FactoryJet',
  description:
    'FactoryJet sets up Shopify B2B with customer-specific price lists, net 30 or net 60 terms, company accounts and quantity rules, and syncs them with NetSuite, Acumatica, Dynamics, QuickBooks or Odoo.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify B2B Agency: Price Lists, Net Terms, Wholesale Portals | FactoryJet',
    description:
      'Customer-specific price lists, net terms, company accounts and quantity rules on Shopify B2B and Shopify Plus, with ERP sync where Shopify stops.',
    url: PAGE_URL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Shopify Plus B2B Development Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify B2B Agency: Price Lists and Net Terms | FactoryJet',
    description: 'Shopify B2B set up with customer-specific price lists, net terms, company accounts and ERP sync.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: PAGE_URL, languages: twinAlternates['shopify-plus-b2b'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────
   FAQ DATA (the visible FAQ and the FAQPage schema both read this array)
───────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'features', label: 'Price lists & terms' },
  { key: 'architecture', label: 'Store setup' },
  { key: 'erp', label: 'ERP & tax' },
  { key: 'commercials', label: 'Cost & scoping' },
];

const FAQ_ITEMS = [
  {
    category: 'features',
    question: 'Which agency can set up Shopify B2B with customer-specific price lists and net terms?',
    answer:
      'FactoryJet sets up Shopify B2B for brands that sell to retailers and distributors. We create company accounts, give each customer its own price list, set net 30 or net 60 terms and add quantity rules such as minimums and case packs. Where Shopify stops, for example credit limits or contract prices kept in your ERP, we build the sync to NetSuite, Acumatica, Microsoft Dynamics, QuickBooks or Odoo.',
  },
  {
    category: 'features',
    question: 'Can you use Shopify for wholesale?',
    answer:
      'Yes. Shopify has built-in B2B tools: company accounts with several buyer locations, catalogs with their own prices, net payment terms, and quantity rules such as minimums and case packs. We build Shopify wholesale stores either as one store that serves retail and trade buyers or as a separate wholesale store, and connect them to your ERP so stock, prices and orders match.',
  },
  {
    category: 'features',
    question: 'How do customer-specific price lists work on Shopify B2B?',
    answer:
      'Shopify calls them catalogs. A catalog picks which products a buyer sees and sets their prices, either as a percentage off or as a fixed price per product. On Shopify Plus you can assign a catalog straight to one company or one company location, so that customer sees only its own prices. On Basic, Grow and Advanced, catalogs are assigned to B2B markets instead, with 3 active assignments in total.',
  },
  {
    category: 'features',
    question: 'How do net 30 and net 60 payment terms work on Shopify B2B?',
    answer:
      'You set payment terms on a company location or a draft order. Shopify offers net 7, 15, 30, 45, 60 and 90, due on fulfillment, or a fixed date on draft orders. The buyer places the order without paying, the order shows as overdue after the due date, and payment is not taken automatically. Reminders can be sent with a Shopify Flow action. Net terms are on every B2B plan.',
  },
  {
    category: 'features',
    question: 'Can one company have several locations and buyers?',
    answer:
      'Yes. A company in Shopify can have many locations, such as a head office and branches. Each location can have its own address, catalog and payment terms. You add buyers to a location and choose what each one may do, for example place orders only or also manage the location.',
  },
  {
    category: 'features',
    question: 'How do quantity rules, minimum order quantities and case packs work?',
    answer:
      'Shopify B2B has quantity rules on every B2B plan: a minimum, a maximum and an increment per product, plus price breaks for larger quantities. An increment of 12 makes buyers order in cases of 12. Rules Shopify does not cover, such as a minimum cart value of $1,500 for one customer group, we build with Shopify Functions.',
  },
  {
    category: 'features',
    question: 'Can B2B orders go to review before they are placed?',
    answer:
      'Yes. With checkout to draft, a buyer’s order becomes a draft order for your team to check instead of a finished order. Your sales team can change prices, add freight and then send the buyer an invoice. Sales reps can also build draft orders for a customer and email them a checkout link.',
  },
  {
    category: 'architecture',
    question: 'Do I need Shopify Plus for B2B?',
    answer:
      'Not always. Shopify B2B runs on Basic, Grow, Advanced and Plus. The lower plans get company accounts, net terms, quantity rules and checkout to draft, with 3 active catalog assignments. Plus adds catalogs assigned straight to one company, unlimited catalogs, deposits on large orders and partial payments. If each customer needs its own price list, you need Plus.',
  },
  {
    category: 'architecture',
    question: 'Should I run one blended store or a separate wholesale store?',
    answer:
      'Pick one blended store when retail and trade buyers buy mostly the same products and you want one catalog and one stock count. Pick a separate wholesale store when the trade catalog, brand look, shipping or checkout rules differ a lot from retail. A separate store means two stores to keep in step, so it costs more to run.',
  },
  {
    category: 'architecture',
    question: 'Can wholesale buyers reorder quickly or upload a CSV?',
    answer:
      'Shopify B2B includes a quick order list and easy reorders on every B2B plan. When buyers need a size and color grid or a CSV upload to fill a cart, we build that into the theme.',
  },
  {
    category: 'erp',
    question: 'Which ERP systems do you connect to Shopify B2B?',
    answer:
      'We connect Shopify B2B to NetSuite, Acumatica, Microsoft Dynamics, QuickBooks and Odoo. The ERP usually stays the record for customers, contract prices, stock, credit limits and invoices. Shopify holds the buyer logins, catalogs, carts and orders. Orders flow from Shopify to the ERP, and prices, stock and balances flow back.',
  },
  {
    category: 'erp',
    question: 'How are credit limits handled on Shopify B2B?',
    answer:
      'Shopify B2B does not track a credit limit for each customer on its own. We keep the limit and the open balance in your ERP, sync them to Shopify, and use them to hold an order for review or ask for card payment when an account is over its limit.',
  },
  {
    category: 'erp',
    question: 'How do tax exemptions and resale certificates work for B2B buyers?',
    answer:
      'You can mark a company location as tax exempt in Shopify. When you sell across many US states and need to collect and check resale certificates, we connect a tax service such as Avalara AvaTax or Vertex to the company records.',
  },
  {
    category: 'commercials',
    question: 'How much does a Shopify Plus B2B build cost?',
    answer:
      'Published market ranges vary with scope. Rigby puts Shopify Plus implementation at about $25,000 to $150,000 and says the higher end is more common for B2B. Ringly lists a lean Plus build with B2B setup at $25,000 to $50,000 and a full build with custom checkout, B2B and international at $50,000 to $250,000 or more. The Shopify Plus plan fee is separate. FactoryJet quotes a fixed price per phase after a scoping call.',
  },
  {
    category: 'commercials',
    question: 'How long does a Shopify B2B setup take?',
    answer:
      'It depends on how many price lists you have, which ERP you use and how much custom checkout logic you need. We put dates for each phase in the proposal. Ringly, an agency guide, puts a lean Plus build with B2B setup at 8 to 12 weeks.',
  },
  {
    category: 'commercials',
    question: 'What is FactoryJet’s pricing model for Shopify Plus B2B development?',
    answer:
      'Each phase is scoped, priced and signed on its own, with no hourly billing. We never take a percentage of your wholesale revenue. Defects found after launch are fixed inside the build price for a cover period agreed before work starts. Support after that is optional, each change is quoted and approved first, and there is no monthly minimum.',
  },
  {
    category: 'commercials',
    question: 'How do we book a Shopify B2B scoping call with the founder?',
    answer:
      'Book a 30-minute call with founder Bhavesh Barot. We look at your price lists, payment terms, ERP and how your buyers order today. Then we send a fixed-scope proposal, phase by phase.',
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
  serviceType: 'Shopify B2B and Shopify Plus wholesale development',
  name: 'Shopify B2B setup: customer-specific price lists, net terms and ERP sync',
  description:
    'Shopify B2B and Shopify Plus setup with company accounts, customer-specific price lists, net payment terms, quantity rules, draft order review and ERP integration.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
  ],
  audience: { '@type': 'BusinessAudience', name: 'Brands, manufacturers and distributors selling wholesale' },
};

const webpageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  name: 'Shopify B2B Agency: Price Lists, Net Terms, Wholesale Portals | FactoryJet',
  description: 'Shopify B2B setup with customer-specific price lists, net terms, company accounts, quantity rules and ERP sync.',
  url: PAGE_URL,
  dateModified: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder & Chief Technical Architect',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      'https://github.com/factoryjet-tech',
    ],
  },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Shopify Plus B2B', url: '/services/shopify-plus-b2b' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url.startsWith('http') ? item.url : `https://factoryjet.com${item.url}`,
  })),
};

/* What Shopify does on its own vs where we add work. Plan split from SRC_PLAN_FEATURES. */
const NATIVE_SPLIT = [
  { need: 'Company accounts with locations and buyers', note: 'head office, branches, who may order', where: 'All B2B plans' },
  { need: 'Net 30, net 60 or due on fulfillment', note: 'set per location or per draft order', where: 'All B2B plans' },
  { need: 'Quantity rules and price breaks', note: 'minimum, maximum, case-pack increment', where: 'All B2B plans' },
  { need: 'Orders held for review', note: 'checkout to draft, then invoice', where: 'All B2B plans' },
  { need: 'A price list for one customer', note: 'catalog assigned to one company', where: 'Plus only' },
  { need: 'Deposits and partial payments', note: 'a share due at checkout', where: 'Plus only' },
  { need: 'Credit limits and contract prices from your ERP', note: 'balance checked before the order goes through', where: 'ERP sync' },
  { need: 'Cart minimums by customer group, freight rules', note: 'rules Shopify does not offer', where: 'Custom build' },
];

const STATS = [
  { b: 'Net 7 to 90.', s: 'Payment terms Shopify offers, plus due on fulfillment.' },
  { b: '3 vs unlimited.', s: 'Active catalog assignments: lower plans vs Plus.' },
  { b: 'Min, max, step.', s: 'Quantity rules per product on every B2B plan.' },
  { b: '5 ERPs.', s: 'NetSuite, Acumatica, Dynamics, QuickBooks, Odoo.' },
];

const BUILDS = [
  { t: 'Price lists loaded from your contracts.', d: 'We turn your price sheets into Shopify catalogs, fixed prices or a percentage off, and assign each one to the right company or location.' },
  { t: 'Company accounts imported.', d: 'Every trade customer becomes a Shopify company with its locations, buyers, permissions, tax status and payment terms set.' },
  { t: 'Checkout rules with Shopify Functions.', d: 'Cart minimums, case packs beyond Shopify’s quantity rules, and payment methods shown only to approved companies.' },
  { t: 'Freight and delivery options.', d: 'Pallet and LTL freight, liftgate and dock options shown at checkout for the buyers who need them.' },
  { t: 'Fast reorder screens.', d: 'Size and color order grids and CSV upload on top of Shopify’s quick order list.' },
  { t: 'ERP sync in both directions.', d: 'Orders go to your ERP. Prices, stock, credit limits and invoices come back to Shopify.' },
];

/* Who owns which data in a Shopify B2B + ERP setup. */
const ERP_OWNERSHIP = [
  { data: 'Customer and company records', owner: 'ERP', flow: 'ERP to Shopify. New trade sign-ups can flow back for approval.' },
  { data: 'Contract prices and price lists', owner: 'ERP', flow: 'ERP to Shopify catalogs when a contract changes.' },
  { data: 'Stock by warehouse', owner: 'ERP or WMS', flow: 'ERP to Shopify, on a schedule or on each change.' },
  { data: 'Credit limit and open balance', owner: 'ERP', flow: 'ERP to Shopify, used to hold orders over the limit.' },
  { data: 'Buyer logins, carts, checkout', owner: 'Shopify', flow: 'Stays in Shopify.' },
  { data: 'Orders and draft orders', owner: 'Shopify', flow: 'Shopify to ERP as sales orders.' },
  { data: 'Invoices, payments, aging', owner: 'ERP', flow: 'ERP to Shopify, so buyers see what they owe.' },
];

const AGENCY_QUESTIONS = [
  { q: 'Which of our needs does Shopify cover natively, and which need code?', a: 'A good answer splits your list into plan features, Plus features, ERP sync and custom Functions, like the table near the top of this page.' },
  { q: 'Which system owns prices, stock and credit limits?', a: 'If nobody can say, you will end up typing prices into two places.' },
  { q: 'Can we see our own products and one real price list working before we sign?', a: 'We build that draft first. Ask any agency you talk to for the same.' },
  { q: 'Who owns the code and the app accounts?', a: 'You should. Ours sits in your repository, and Shopify and app fees bill to your accounts.' },
];

export default function ShopifyPlusB2BPage() {
  return (
    <>
      <JsonLd id="sp-faq-schema" data={faqSchema} />
      <JsonLd id="sp-service-schema" data={serviceSchema} />
      <JsonLd id="sp-webpage-schema" data={webpageSchema} />
      <JsonLd id="sp-org-schema" data={orgSchema} />
      <JsonLd id="sp-breadcrumb-schema" data={breadcrumbSchema} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <Breadcrumbs items={BREADCRUMB_ITEMS} />

      <main className="platpage">
        {/* ── Hero: direct answer first ── */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Shopify B2B and Shopify Plus agency</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '22ch' }}>
                  Shopify B2B setup with customer-specific price lists and net terms
                </h1>
                <p className="pp-lead" style={{ maxWidth: '52ch' }}>
                  FactoryJet sets up Shopify B2B for brands that sell to retailers and distributors: company accounts,
                  customer-specific price lists, net terms and quantity rules. Shopify does most of this natively.
                  Company accounts, net 30 or net 60 terms and quantity rules work on every B2B plan, and a price list
                  for one customer needs Shopify Plus.
                </p>
                <p className="pp-lead" style={{ maxWidth: '52ch', marginTop: '12px' }}>
                  Credit limits, contract prices kept in your ERP and order rules Shopify does not offer need ERP sync
                  or custom work. That is the part we build, with NetSuite, Acumatica, Microsoft Dynamics, QuickBooks
                  or Odoo.
                </p>
                <HeroInlineForm
                  source="us_shopify_plus_b2b_hero"
                  region="us"
                  submitLabel="See a draft of my store"
                  trustText="Working software on your own data before you sign. Founder replies within 24 hours."
                />
              </div>

              {/* Native vs custom scorecard */}
              <div
                style={{
                  border: '1px solid var(--pp-line)',
                  borderRadius: '18px',
                  background: '#fff',
                  padding: '22px 24px',
                  boxShadow: '0 18px 50px rgba(20,17,15,.08)',
                }}
              >
                <p className="pp-mlabel" style={{ marginBottom: '10px' }}>What Shopify does, and what we add</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {NATIVE_SPLIT.map((row, i) => (
                    <li
                      key={row.need}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '14px',
                        alignItems: 'baseline',
                        padding: '10px 0',
                        borderTop: i > 0 ? '1px solid var(--pp-line)' : 'none',
                      }}
                    >
                      <div>
                        <b style={{ display: 'block', fontFamily: 'var(--pp-disp)', fontSize: '14px', color: 'var(--pp-ink)' }}>{row.need}</b>
                        <span style={{ fontSize: '12.5px', color: 'var(--pp-muted)' }}>{row.note}</span>
                      </div>
                      <span
                        style={{
                          flexShrink: 0,
                          fontFamily: 'var(--pp-mono)',
                          fontSize: '11.5px',
                          fontWeight: 600,
                          color: row.where === 'All B2B plans' ? 'var(--pp-ink)' : 'var(--pp-orange-dark)',
                        }}
                      >
                        {row.where}
                      </span>
                    </li>
                  ))}
                </ul>
                <p style={srcNote}>
                  Plan split from <a href={SRC_PLAN_FEATURES} {...ext} style={srcLink}>Shopify Help, B2B features by plan</a>, read {READ_ON}.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Fact band ── */}
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

        {/* ── Price lists and net terms ── */}
        <section className="pp-sec" id="price-lists-net-terms">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">{'// how shopify b2b works'}</p>
            <h2 style={{ marginTop: '10px' }}>Price lists and net terms on Shopify B2B</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Shopify B2B is built from a few parts. Once you know them, it is easy to see which of your rules fit and
                which need extra work.
              </p>
              <h3 style={h3Style}>Company accounts and locations</h3>
              <p>
                Each trade customer is a company. A company has one or more locations, such as a head office and three
                branches. Each location has its own shipping address, catalog and payment terms. You add buyers to a
                location and choose what each buyer may do: place orders only, or also manage the location.
              </p>
              <h3 style={h3Style}>Catalogs and customer-specific price lists</h3>
              <p>
                A catalog decides which products a buyer sees and what they pay. Prices can be a percentage off, such as
                40% off retail, or a fixed price per product. On Shopify Plus you assign a catalog straight to one
                company or one location, so that customer sees only its own price list. On Basic, Grow and Advanced,
                catalogs go to B2B markets instead, with 3 active assignments in total. If you have more than a handful of
                negotiated price lists, that limit is usually what moves a brand to Plus.
              </p>
              <h3 style={h3Style}>Quantity rules and price breaks</h3>
              <p>
                Each product in a catalog can have a minimum, a maximum and an increment. An increment of 12 means buyers
                order in cases of 12. Price breaks lower the unit price at higher quantities, for example 10% off at 100
                units.
              </p>
              <h3 style={h3Style}>Payment terms: net 30, net 60 and more</h3>
              <p>
                You set payment terms on a company location or on a draft order. Shopify offers net 7, 15, 30, 45, 60
                and 90, due on fulfillment, and a fixed date on draft orders. The buyer places the order without paying.
                After the due date the order shows as overdue. Shopify does not take the payment on its own, and
                reminders go out through a Shopify Flow action. Plus can also ask for a deposit at checkout, with the
                rest on terms.
              </p>
              <h3 style={h3Style}>Draft orders and approvals</h3>
              <p>
                With checkout to draft, a buyer’s order becomes a draft for your team instead of a finished order. Your
                sales team checks it, changes prices or adds freight, and sends the buyer an invoice. Sales reps can also
                build a draft order for a customer and email them a checkout link.
              </p>
            </div>
            <p style={srcNote}>
              Sources: <a href={SRC_COMPANIES} {...ext} style={srcLink}>Shopify Help, B2B companies</a>;{' '}
              <a href={SRC_CATALOGS} {...ext} style={srcLink}>Shopify Help, catalogs</a>;{' '}
              <a href={SRC_TERMS} {...ext} style={srcLink}>Shopify Help, payment terms</a>;{' '}
              <a href={SRC_PLAN_FEATURES} {...ext} style={srcLink}>Shopify Help, B2B features by plan</a>. Read {READ_ON}.
            </p>
          </div>
        </section>

        {/* ── Blended vs separate store ── */}
        <section className="pp-sec tint" id="blended-vs-separate">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// store setup'}</p>
            <h2 style={{ marginTop: '10px' }}>Blended store vs separate wholesale store</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '64ch' }}>
              A blended store serves retail shoppers and trade buyers from one Shopify store. Trade buyers log in and see
              their own prices and terms. A separate wholesale store is a second store just for trade.
            </p>
            <div style={{ marginTop: '28px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Question</th>
                    <th>One blended store</th>
                    <th>Separate wholesale store</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td className="name">Pick it when</td>
                    <td>Retail and trade buy mostly the same products.</td>
                    <td>The trade catalog, look or checkout rules differ a lot from retail.</td>
                  </tr>
                  <tr>
                    <td className="name">Catalog and stock</td>
                    <td>One product list and one stock count.</td>
                    <td>Two product lists to keep in step.</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Brand and theme</td>
                    <td>One theme. Trade buyers see trade prices after login.</td>
                    <td>A theme built only for trade buyers.</td>
                  </tr>
                  <tr>
                    <td className="name">ERP integration</td>
                    <td>One connection.</td>
                    <td>Two stores to connect, or one connection that serves both.</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Running cost</td>
                    <td>Lower. One store to maintain.</td>
                    <td>Higher. Two stores, two sets of apps and settings.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="pp-lead" style={{ marginTop: '18px', maxWidth: '68ch', fontSize: '15.5px' }}>
              Still choosing a platform? Our guide shows{' '}
              <Link href="/blog/best-b2b-ecommerce-platform-manufacturers-distributors-2026" style={srcLink}>
                how Shopify Plus compares with OroCommerce, BigCommerce B2B Edition and Adobe Commerce
              </Link>
              {' '}for manufacturers and distributors.
            </p>
          </div>
        </section>

        {/* ── ERP: who owns which data ── */}
        <section className="pp-sec" id="erp-integration">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// erp integration'}</p>
            <h2 style={{ marginTop: '10px' }}>Shopify B2B ERP integration: who owns which data</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '66ch' }}>
              We connect Shopify B2B to NetSuite, Acumatica, Microsoft Dynamics, QuickBooks and Odoo. The first decision
              is which system is the record for each kind of data. Get that wrong and someone types prices into two places.
            </p>
            <div style={{ marginTop: '28px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Usually owned by</th>
                    <th>Which way it moves</th>
                  </tr>
                </thead>
                <tbody>
                  {ERP_OWNERSHIP.map((row, i) => (
                    <tr key={row.data} className={i % 2 === 0 ? 'me' : undefined}>
                      <td className="name">{row.data}</td>
                      <td>{row.owner}</td>
                      <td>{row.flow}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="pp-editorial" style={{ marginTop: '24px', maxWidth: '760px' }}>
              <p>
                Credit limits are the most common gap. Shopify B2B has no credit limit field per customer, so we keep the
                limit and open balance in your ERP and use them to hold an order for review, or ask for card payment, when
                an account is over its limit.
              </p>
              <p>
                For tax, you can mark a company location as tax exempt in Shopify. When you sell across many US states and
                need to collect resale certificates, we connect Avalara AvaTax or Vertex.
              </p>
              <p>
                On Odoo we have built this kind of sync before: the Sow Easy trade store on WooCommerce reads stock,
                pricing and SKUs from Odoo, and that build is being tested on staging.
              </p>
            </div>
          </div>
        </section>

        {/* ── What we build on top ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(28px,4vw,52px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-mlabel">{'// what we build'}</p>
                <h2 style={{ marginTop: '8px' }}>What FactoryJet builds on top of Shopify B2B</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  Shopify’s own features come first. We write code only where your rules go past them.
                </p>
                <div style={{ marginTop: '22px' }}>
                  <ModalCTAButton label="Scope my Shopify B2B build" region="us" btnVariant="secondary-light" />
                </div>
              </div>
              <Image
                src={`${IMG}/shopify-plus-b2b-wholesale-portal.webp`}
                alt="A man at a desk viewing a wholesale pricing table on a monitor"
                width={1280}
                height={800}
                style={{ width: '100%', height: 'auto', borderRadius: '18px', border: '1px solid var(--pp-line)', display: 'block', objectFit: 'cover' }}
              />
            </div>
            <div className="pp-bento" style={{ marginTop: '36px' }}>
              {BUILDS.map((b) => (
                <div className="pp-card" key={b.t}>
                  <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '16px', color: 'var(--pp-ink)', marginBottom: '6px' }}>{b.t}</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--pp-body)' }}>{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Market cost ranges ── */}
        <section className="pp-sec" id="cost">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">{'// what it costs'}</p>
            <h2 style={{ marginTop: '10px' }}>What a Shopify Plus B2B build costs</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Published market ranges, from two third-party guides:
              </p>
              <ul style={{ paddingLeft: '1.25rem', listStyle: 'disc', display: 'grid', gap: '8px' }}>
                <li>
                  <b>About $25,000 to $150,000</b> for a Shopify Plus implementation, with the higher end more common for
                  B2B. Source: <a href={SRC_RIGBY} {...ext} style={srcLink}>Rigby, B2B commerce platform pricing</a>.
                </li>
                <li>
                  <b>$25,000 to $50,000</b> for a lean Plus build with B2B setup, and <b>$50,000 to $250,000 or more</b> for
                  a full build with custom checkout, B2B and international. Source:{' '}
                  <a href={SRC_RINGLY} {...ext} style={srcLink}>Ringly, Shopify Plus partner agency guide</a>.
                </li>
              </ul>
              <p>
                The Shopify Plus plan fee is separate and is set by Shopify. See{' '}
                <a href={SRC_PLUS_PRICING} {...ext} style={srcLink}>Shopify Plus pricing</a> for the current terms.
              </p>
              <p>
                What moves the number most: how many price lists you have, which ERP you use, and how many checkout rules
                Shopify does not cover. FactoryJet quotes a fixed price for each phase in writing after a scoping call.
              </p>
            </div>
            <p style={srcNote}>Ranges read {READ_ON}. They are other firms’ published figures, not FactoryJet prices.</p>
          </div>
        </section>

        {/* ── Build phases ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">{'// how a build runs'}</p>
            <h2 style={{ marginTop: '10px' }}>How a Shopify B2B build runs</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>Each phase is scoped and priced on its own. Dates for each phase go in the proposal.</p>
              <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                <li>
                  <strong>Price lists and accounts mapped.</strong> We read your price sheets, payment terms and customer
                  list, and decide which system owns each piece of data.
                </li>
                <li>
                  <strong>Companies and catalogs set up.</strong> Trade customers become Shopify companies with locations,
                  buyers, terms and their own catalogs.
                </li>
                <li>
                  <strong>Order screens built.</strong> Quick order list, order grids and CSV upload where buyers need them.
                </li>
                <li>
                  <strong>Checkout rules added.</strong> Shopify Functions for the minimums, payment rules and freight
                  options Shopify does not cover.
                </li>
                <li>
                  <strong>ERP and tax connected.</strong> Orders to the ERP; prices, stock, balances and invoices back.
                </li>
                <li>
                  <strong>Tested with real buyers, then launched.</strong> Test orders run end to end with a few trade
                  accounts before everyone moves over. We train your sales team.
                </li>
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
                <h2 style={{ marginTop: '10px' }}>Terms on every Shopify Plus B2B build</h2>
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
          headline="Send us one price list and one real wholesale order."
          sub="Tell us your ERP, how many trade accounts you have and how they order today. We reply with what the Shopify build would cover, phase by phase."
          label="Talk to the founder"
          note="Working software on your own data before you sign. Founder replies within 24 hours."
        />

        {/* ── Questions to ask any agency ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">{'// choosing an agency'}</p>
            <h2 style={{ marginTop: '10px' }}>Four questions to ask any Shopify B2B agency</h2>
            <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '20px' }}>
              {AGENCY_QUESTIONS.map((x) => (
                <li key={x.q}>
                  <strong style={{ color: 'var(--pp-ink)' }}>{x.q}</strong>{' '}
                  <span style={{ color: 'var(--pp-body)' }}>{x.a}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Interactive B2B Wholesale Savings Calculator ── */}
        <section className="pp-sec tint" id="b2b-wholesale-roi-calculator">
          <div className="pp-wrap">
            <B2bWholesaleCalculator
              source="shopify_plus_b2b_service_page"
              defaultRevenue={5000000}
              defaultAov={2400}
              defaultAccounts={180}
            />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="pp-sec pp-faqsec">
          <div className="pp-wrap">
            <FAQ
              eyebrow="SHOPIFY B2B FAQ"
              headline="Questions about Shopify B2B price lists, net terms and ERP sync"
              lead="Plain answers on what Shopify does natively, what needs Plus, and what needs custom work."
              categories={FAQ_CATEGORIES}
              items={FAQ_ITEMS}
            />
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div className="pp-ctagrid">
              <div className="pp-cta">
                <p className="pp-mlabel">{'// next step'}</p>
                <h2 style={{ margin: '12px 0 16px' }}>Ready to set up Shopify B2B?</h2>
                <p className="pp-lead" style={{ maxWidth: '44ch' }}>
                  We review your price lists, payment terms, ERP and how your buyers order today. Then we send a fixed-price plan, phase by phase.
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
                    <b>Bhavesh Barot.</b>
                    <span>Founder, FactoryJet. Over 10 years of commerce engineering.</span>
                  </div>
                </div>
                <p style={{ marginTop: '20px', fontSize: '13.5px', color: 'var(--pp-muted)' }}>
                  Explore related capabilities: <Link href="/b2b-ecommerce" style={srcLink}>B2B e-commerce platforms</Link>, <Link href="/services/shopify-development" style={srcLink}>Shopify store development</Link>, <Link href="/services/shopify-edi-integration" style={srcLink}>EDI orders from B2B customers</Link>, <Link href="/services/shopify-hubspot-integration" style={srcLink}>Shopify HubSpot integration for B2B companies and deals</Link>, <Link href="/agentic-commerce" style={srcLink}>agentic commerce</Link>, and <Link href="/services/ai-agent-development" style={srcLink}>AI agent operations</Link>. If a customer buys through Coupa or SAP Ariba, see our{' '}
                  <Link href="/b2b-ecommerce/punchout-catalog" style={srcLink}>punchout catalog integration</Link>. Selling to trade buyers in Britain? Read the{' '}
                  <Link href="/uk/shopify-plus-b2b" style={srcLink}>UK Shopify Plus B2B page</Link>.
                </p>
              </div>
              {/* B2B proof, 2026-10-29: GPSUK (Commerceflo) and Sow Easy (WordPress
                  WooCommerce + Odoo), both approved for any page on 2026-10-29. They are
                  B2B ordering work on other platforms, never presented as Shopify Plus
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

      <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', padding: '48px 0', borderTop: '1px solid #E6E6EC' }}>
        <div className="pp-wrap">
          <AuthorCard />
        </div>
      </section>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
