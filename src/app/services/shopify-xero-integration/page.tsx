import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';
import FinalCTA from '@/components/v2/FinalCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { twinAlternates } from '@/data/hreflangMap';
import { ORG_REF } from '@/data/organization';
import styles from './page.module.css';

// Source snapshots and approval sentences: reports/chatgpt-buyer-pages-2026-11-26/P3-XERO-US.md.
// Connector capabilities are vendor descriptions, not results from a FactoryJet app trial.
const CANONICAL = 'https://factoryjet.com/services/shopify-xero-integration';
const TITLE = 'Shopify Xero Integration Services | FactoryJet';
const DESCRIPTION = 'Connect Shopify to Xero with sales, refunds, fees and payouts mapped to your books. Compare connector apps, US sales tax, B2B invoices and stock sync.';
const CHECKED_ON = '26 November 2026';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL, languages: twinAlternates['shopify-xero-integration'] },
  openGraph: {
    type: 'website', siteName: 'FactoryJet', title: TITLE, description: DESCRIPTION,
    url: CANONICAL, locale: 'en_US', images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Shopify Xero integration services by FactoryJet' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['https://factoryjet.com/og-default.png'] },
  robots: { index: true, follow: true },
};

const CRUMBS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Shopify Xero Integration', url: CANONICAL },
];

const SRC = {
  xeroApp: { label: 'Xero App Store US: Shopify, by Xero', url: 'https://apps.xero.com/us/app/shopify' },
  xeroShopifyApp: { label: 'Shopify App Store: Xero (current listing)', url: 'https://apps.shopify.com/xero-6' },
  xeroUS: { label: 'Xero US: Shopify integration and US sales tax limitation', url: 'https://www.xero.com/us/partnerships/shopify/' },
  a2xApp: { label: 'Shopify App Store: A2X', url: 'https://apps.shopify.com/a2x' },
  parexApp: { label: 'Shopify App Store: Parex Xero Bridge', url: 'https://apps.shopify.com/xero-bridge' },
  synderApp: { label: 'Shopify App Store: Synder', url: 'https://apps.shopify.com/synder' },
  a2xXero: { label: 'A2X: Shopify to Xero and COGS entries', url: 'https://www.a2xaccounting.com/integrations/shopify/xero' },
  xeroTax: { label: 'Xero US: sales tax on Xero invoices', url: 'https://www.xero.com/us/accounting-software/calculate-sales-tax/' },
  xeroCurrency: { label: 'Xero US: multiple currencies', url: 'https://www.xero.com/us/accounting-software/use-multiple-currencies/' },
  xeroInventory: { label: 'Xero US: Inventory Plus and duplicate-posting settings', url: 'https://www.xero.com/us/accounting-software/manage-inventory/inventory-plus/' },
  shopifyPayouts: { label: 'Shopify Help: payout amounts, fees, refunds and adjustments', url: 'https://help.shopify.com/en/manual/payments/shopify-payments/payouts/lower-or-missing-payouts' },
} as const;
type SourceKey = keyof typeof SRC;

// Keep process wording here so the report can list it verbatim for approval.
const COPY = {
  hero: 'We connect Shopify to Xero around the way you sell and the records your bookkeeper needs.',
  demo: 'You see a working demo on your own products before you sign.',
  service: 'FactoryJet plans and builds Shopify Xero connections, with an agreed owner for products, stock and prices and a test of sales, refunds, fees and payouts.',
  mid: 'We review your order flow with you before choosing an app or a custom connection.',
  final: 'We start with your products, payment gateways and accounting requirements.',
};

const PROCESS = [
  { title: 'Read the order flow', body: 'We review sample orders, refunds and payouts with you and your bookkeeper.' },
  { title: 'Agree who owns each field', body: 'We write down the owner of products, stock, prices, invoices and payment status.' },
  { title: 'Choose the posting route', body: 'We compare connector settings with your requirements and identify any rules that need custom work.' },
  { title: 'Show the demo', body: 'You see a working demo on your own products before you sign.' },
  { title: 'Test the exceptions', body: 'We test tax mapping, foreign-currency orders, unpaid invoices, refunds, bundles and repeated imports against the agreed scope.' },
  { title: 'Reconcile and hand over', body: 'We compare a completed payout with the bank deposit and document how to check errors and restart failed syncs.' },
] as const;

const SYNC_MAP = [
  { record: 'Sales and refunds', direction: 'Shopify to Xero', decision: 'Choose an invoice per order or a summary. Agree how discounts, shipping and partial refunds are recorded.' },
  { record: 'Payouts and gateway fees', direction: 'Gateway to Xero to bank', decision: 'Keep gross sales, processing fees, refunds and adjustments separate so the net deposit can be checked.' },
  { record: 'US sales tax', direction: 'Tax source to Xero liability', decision: 'Have your accountant approve the tax mapping and reporting route before enabling automatic posting.' },
  { record: 'B2B invoices and payments', direction: 'One invoice owner, one payment record', decision: 'Keep the buyer, purchase order reference, due date and outstanding balance attached to the same invoice.' },
  { record: 'Products, stock and prices', direction: 'Chosen master to the other systems', decision: 'Specify each direction separately. An accounting export alone does not establish stock availability or price ownership.' },
  { record: 'Cost of goods sold (COGS)', direction: 'Agreed cost source to Xero', decision: 'Decide who posts the inventory value and expense entry. Prevent two tools from booking the same cost.' },
] as const;

const CONNECTORS: { title: string; scope: string; boundary: string; rating: string; sources: SourceKey[] }[] = [
  {
    title: 'Shopify integration by Xero',
    scope: 'Xero lists daily summaries or per-sale transactions, payouts, fees and refunds. The Shopify listing also mentions inventory detail on individual orders.',
    boundary: 'Neither listing establishes a two-way stock-and-price master. Xero Inventory Plus is a separate product. The US tax caveat below still needs resolving.',
    rating: 'Xero App Store: 4.7/5, 83 reviews. Shopify App Store: 4.6/5, 73 reviews. Shopify listing launched March 24, 2026.',
    sources: ['xeroApp', 'xeroShopifyApp', 'xeroInventory'],
  },
  {
    title: 'A2X',
    scope: 'A2X describes payout summaries that separate sales, fees, taxes and refunds. It also lists wholesale order sync and COGS tracking.',
    boundary: 'Its Xero guide describes a value-based COGS entry using uploaded SKU costs. That does not establish a stock-quantity feed back to your storefront.',
    rating: 'Shopify App Store: 4.9/5, 364 reviews.', sources: ['a2xApp', 'a2xXero'],
  },
  {
    title: 'Parex Xero Bridge',
    scope: 'Parex offers individual-order exports with product and customer data, or summary invoices per Shopify payout and per day for other payment methods.',
    boundary: 'The listing includes stock updates, inventory and product sync, multi-currency and net terms. Confirm direction and your required fields during a trial.',
    rating: 'Shopify App Store: 4.9/5, 308 reviews.', sources: ['parexApp'],
  },
  {
    title: 'Synder',
    scope: 'Synder lists sales, fees, taxes, refunds, discounts, gift cards, shipping and customers, with payout matching and multi-currency support.',
    boundary: 'It advertises inventory and COGS across multiple accounting platforms. Confirm which features apply to Xero and which system controls each field.',
    rating: 'Shopify App Store: 4.7/5, 223 reviews.', sources: ['synderApp'],
  },
];

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'connection', label: 'Connecting the two' },
  { key: 'books', label: 'Payouts, tax and currency' },
  { key: 'operations', label: 'Stock and B2B orders' },
  { key: 'project', label: 'Your integration project' },
];
const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  { category: 'connection', question: 'Does Shopify integrate with Xero?', answer: 'Yes, Xero publishes a Shopify integration, and independent connector apps offer other posting options. Choose the route by the records you need in Xero and the system that should control stock, rather than the app name alone.' },
  { category: 'connection', question: 'How do I connect Shopify to Xero?', answer: 'Start from the current Xero integration listing and follow its account-connection prompts. Before importing orders, agree the start date, account mappings and posting format with your bookkeeper. Test a small period before opening the full feed.' },
  { category: 'connection', question: "Does Xero's Shopify app sync inventory?", answer: 'The Shopify listing mentions inventory detail on individual orders, but it does not establish a two-way stock-quantity sync. Xero markets Inventory Plus separately for inventory operations. Ask which system changes sellable stock and prove that direction with a test SKU.' },
  { category: 'connection', question: 'Should orders post as invoices or daily summaries?', answer: 'Use individual invoices when you need customer-level balances; use summaries when the agreed accounting workflow centers on totals and settlement reconciliation. Xero offers both formats. Decide with your accountant how wholesale receivables and paid retail sales should be separated.' },
  { category: 'connection', question: 'Which Shopify Xero app should I choose?', answer: 'Choose the app that passes your own order and reconciliation tests. The comparison above covers Xero, A2X, Parex and Synder using their published descriptions. A high review count does not prove that an app handles your bundle rules, tax mapping or payment terms.' },
  { category: 'connection', question: 'Do I need a custom integration?', answer: 'You need custom work when a required rule cannot be handled by the connector settings you have tested. Examples to test include unusual bundle costing, a separate stock master, invoice approvals and account mapping by business unit. Document the gap before commissioning code.' },
  { category: 'books', question: 'How do Shopify Payments fees show in Xero?', answer: 'Fees should be mapped to the expense account agreed with your bookkeeper and checked separately from the net deposit. Shopify payout exports include Amount, Fee and Net columns. Use that detail to reconcile the fee entry rather than treating the bank deposit as gross sales.' },
  { category: 'books', question: 'Why does my Shopify payout differ from my sales total?', answer: 'A payout can include deductions and adjustments, so it is not the same measure as gross sales. Shopify lists fees, refunds, chargebacks and other adjustments in its payout guidance. Compare the transactions in that payout with the corresponding bank deposit.' },
  { category: 'books', question: 'Does the Xero Shopify connector handle US sales tax?', answer: 'Do not assume US sales tax is covered: Xero’s US Shopify page says it is unsupported, while its app listing describes tax mapping. Resolve that conflict for your organization with Xero and your accountant before relying on automatic posting or reports.' },
  { category: 'books', question: 'Can Xero calculate sales tax on its own invoices?', answer: 'Yes, Xero describes US invoice sales-tax calculation powered by Avalara, based on location and item details. That feature does not establish that imported Shopify tax is mapped correctly. Keep invoice calculation, imported tax, reporting and filing responsibilities explicit.' },
  { category: 'books', question: 'Can it handle multiple currencies?', answer: 'Yes, Xero supports foreign-currency transactions and conversion to a base currency when multicurrency is enabled. Connector support must also match your sales and settlement currencies. Test an order, a later refund and the bank deposit before accepting the mapping.' },
  { category: 'books', question: 'What if the order currency and payout currency differ?', answer: 'Record both currencies in the test case and agree which amounts each accounting entry must retain. Compare the customer payment, gateway conversion, fees and bank settlement. Ask your accountant to approve the exchange-rate and rounding treatment.' },
  { category: 'books', question: 'How should partial refunds reach Xero?', answer: 'A partial refund should follow the agreed credit and payment-reversal rules for the original sale. Include refunded shipping, discounts and tax in the test case. Check that the remaining balance and the payout adjustment agree before accepting the sync.' },
  { category: 'books', question: 'Can it handle PayPal and other payment gateways?', answer: 'Gateway coverage depends on the connector and its configuration. Keep a separate reconciliation test for each gateway you use. Check which tool records the sale and which imports the settlement so the same revenue is not entered twice.' },
  { category: 'books', question: 'Will this file my sales tax returns?', answer: 'Only rely on filing coverage if the selected service explicitly includes it. Have your accountant identify who prepares and submits returns, which reports they need and how they check imported tax. A matched bank deposit alone is not a tax-return check.' },
  { category: 'operations', question: 'Should Shopify or Xero own products, stock and prices?', answer: 'Choose an owner for each field before switching on updates. For a Shopify-led catalog, keep storefront descriptions and selling prices there unless your agreed workflow requires another master. If an ERP or inventory tool owns stock, define how its quantities reach Shopify and how sales return to it.' },
  { category: 'operations', question: 'Can I send B2B invoices with payment terms to Xero?', answer: 'That depends on whether your selected route supports customer-level invoices and due dates. Test the purchase order reference, payment terms, partial payments and outstanding balance. Decide which system sends the invoice and records payment before enabling either notification.' },
  { category: 'operations', question: 'How do I avoid invoicing a wholesale buyer twice?', answer: 'Assign one system to create the receivable and one rule to identify it across systems. Match the order and invoice references when payments arrive. Test a repeated import and confirm that it updates the intended record instead of creating another invoice.' },
  { category: 'operations', question: 'Can a bundle sale reduce the right component stock?', answer: 'Only if the chosen stock system and connection support component-level updates. Write down the bundle SKU, component quantities and the cost source. Test a sale, cancellation and partial return against the chosen inventory master before assuming an accounting connector covers assembly rules.' },
  { category: 'operations', question: 'Does the connector calculate cost of goods sold?', answer: 'Some connectors offer COGS entries, but the cost source and supported workflow differ. A2X describes a summarized value entry using uploaded SKU costs. Confirm how your chosen route handles cost changes, returns and bundles, and which tool owns the final posting.' },
  { category: 'operations', question: 'Can I use Inventory Plus and a payout connector together?', answer: 'Xero describes a payout-reconciliation setting for using Inventory Plus alongside the Shopify integration without duplicate accounting entries. Verify the setting for your chosen connector. Agree which tool posts revenue and COGS, then check one complete period for duplicates.' },
  { category: 'operations', question: 'Can more than one Shopify store feed the same books?', answer: 'Only if the selected route supports the store and organization structure you need. Include each store’s identifiers, accounts and settlement sources in the integration design. Test for order-number collisions and separate clearing balances. If stores belong to different legal entities, have your accountant approve the organization structure before connecting them.' },
  { category: 'project', question: 'Can you fix an existing Shopify Xero connection?', answer: 'Yes, we can review an existing connection and propose a fix. The proposed fix depends on whether the fault is in the settings, source data or connection logic. Any historical correction needs your bookkeeper’s approval.' },
  { category: 'project', question: 'Can old orders be imported without duplicates?', answer: 'Only if the import can identify orders already recorded in your books. Agree a cutover date and compare what is already booked before importing history. Xero’s listing advertises up to 90 days of historical data. That window does not prove an import is safe for your ledger; test duplicate detection and preserve a record of the imported range.' },
  { category: 'project', question: 'What happens if a sync fails or an order arrives twice?', answer: 'Require a visible error record, a named person to review it and a safe way to retry the same transaction. Test a temporary failure and replay the order. Confirm that the retry does not create another invoice or repeat a stock adjustment.' },
  { category: 'project', question: 'Can I see it work before I sign?', answer: 'Yes, you see a working demo on your own products before you sign. We use the proposed flow to show what reaches the books and which fields remain controlled by each system.' },
  { category: 'project', question: 'What should I send you to get started?', answer: 'Send the systems you use, the payment gateways and the parts of the sync you want to change. Use redacted sample records for the first discussion. We agree the test cases with you before requesting access to the systems.' },
];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Service', '@id': `${CANONICAL}#service`,
  name: 'Shopify Xero Integration', serviceType: 'Shopify and Xero accounting integration',
  url: CANONICAL, provider: ORG_REF, description: COPY.service,
  areaServed: [{ '@type': 'Country', name: 'United States' }, { '@type': 'Place', name: 'Worldwide' }],
};
const FAQ_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
};

function Sources({ ids }: { ids: ReadonlyArray<SourceKey> }) {
  return <p className={styles.sources}>{ids.map((id) => <a key={id} href={SRC[id].url} target="_blank" rel="noopener noreferrer">{SRC[id].label}</a>)}</p>;
}

export default function ShopifyXeroIntegrationPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
    <BreadcrumbSchema items={CRUMBS} />
    <SiteHeader />
    <main className={styles.page}>
      <Breadcrumbs items={CRUMBS} />
      <section className={styles.hero} id="integration-demo">
        <div className={styles.wrap}>
          <div className={styles.split}>
            <div>
              <p className={styles.eyebrow}>Shopify Xero integration · US and international sellers</p>
              <h1>Connect Shopify to Xero. Keep the sale and the settlement clear.</h1>
              <p className={styles.lead}>{COPY.hero}</p>
              <p>Retail orders, wholesale invoices, bundles or foreign-currency sales: start with what needs to reach the books and who controls stock.</p>
              <HeroInlineForm region="us" source="services_shopify_xero_integration_hero" service="Shopify Xero Integration" submitLabel="See it on my products" trustText={COPY.demo} />
              <ul className={styles.proof}><li>Registered Shopify Partner</li><li>500+ businesses since 2014</li><li>97% of projects shipped on time</li></ul>
            </div>
            <figure className={styles.ledger}>
              <figcaption className={styles.eyebrow}>The connection to agree before the app</figcaption>
              <div><strong>Shopify</strong><span>Orders · discounts · refunds</span></div>
              <p className={styles.arrow} aria-hidden="true">↓</p>
              <div><strong>Posting rules</strong><span>Invoice or summary · accounts · tax · currency</span></div>
              <p className={styles.arrow} aria-hidden="true">↓</p>
              <div><strong>Xero</strong><span>Receivables · clearing · fees · bank match</span></div>
              <p className={styles.caption}>Proposed record flow. Product, stock and price ownership are separate decisions.</p>
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.section} id="short-answer">
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>What the connection does</p>
          <h2>Post sales in the format your books need.</h2>
          <p className={styles.lead}>A Shopify Xero integration moves store activity into accounting records. Xero’s own connector offers summaries or individual transactions and payout reconciliation. Stock control needs its own owner and a proven sync direction.</p>
          <Sources ids={['xeroApp', 'xeroShopifyApp']} />
          <div className={styles.map}>
            {SYNC_MAP.map((row) => <article key={row.record}><div><h3>{row.record}</h3><p className={styles.direction}>{row.direction}</p></div><p>{row.decision}</p></article>)}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.tint}`} id="system-ownership">
        <div className={styles.wrap}>
          <div className={styles.split}>
            <div><p className={styles.eyebrow}>Products, stock and prices</p><h2>One owner for each field.</h2><p>A product appearing on an invoice does not prove that stock and prices move in both directions. Write the ownership map before enabling updates.</p></div>
            <dl className={styles.ownership}>
              <div><dt>Shopify owns the catalog</dt><dd>Proposed route: keep descriptions and selling prices in Shopify; export the accounting detail your bookkeeper approves.</dd></div>
              <div><dt>An inventory tool owns stock</dt><dd>Proposed route: send sellable quantities from that tool to Shopify and return orders and restocks to the same owner.</dd></div>
              <div><dt>Xero holds accounting records</dt><dd>Proposed route: agree the item codes and cost postings, then test any required stock feed separately from sales posting.</dd></div>
              <div><dt>Bundles and wholesale prices</dt><dd>Write down component quantities, cost allocation and customer-specific prices as separate rules. Include cancellations and returns in the test.</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className={styles.section} id="connector-options">
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>Connector or custom connection</p>
          <h2>Start with the app. Test the rules it has to follow.</h2>
          <p>Use a connector when its settings cover the required posting and reconciliation. Consider custom work for a documented gap in stock ownership, bundle rules or invoice handling.</p>
          <p className={styles.caption}>Published vendor descriptions, checked {CHECKED_ON}. Install counts are not public on these listings, so this is a shortlist, without an installation ranking. Ratings and review counts below were read on {CHECKED_ON}.</p>
          <div className={styles.connectors}>
            {CONNECTORS.map((app) => <article key={app.title}><h3>{app.title}</h3><p>{app.scope}</p><p>{app.boundary}</p><p className={styles.rating}>{app.rating} Read {CHECKED_ON}.</p><Sources ids={app.sources} /></article>)}
          </div>
        </div>
      </section>

      <MidPageCTA headline="Show the sale that is hardest to reconcile." sub={COPY.mid} href="#integration-demo" label="Discuss my Shopify Xero flow" note={COPY.demo} />

      <section className={styles.section} id="tax-currency-payouts">
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>US tax, international sales and payouts</p>
          <h2>Resolve the tax caveat before turning on the feed.</h2>
          <div className={styles.notice}><h3>Xero’s US pages do not agree on connector tax coverage.</h3><p>The US Shopify page says US sales tax is unsupported. The Xero App Store describes tax mapping. Treat this as unresolved for your setup until Xero and your accountant confirm the required flow; do not assume invoice tax calculation also covers imported Shopify tax.</p><Sources ids={['xeroUS', 'xeroApp']} /></div>
          <div className={styles.map}>
            <article><h3>US sales tax</h3><div><p>Xero describes Avalara-powered tax calculation for invoices created in Xero. Agree separately how Shopify tax reaches liability accounts and who handles reporting and filing.</p><Sources ids={['xeroTax']} /></div></article>
            <article><h3>Multiple currencies</h3><div><p>Xero supports foreign-currency transactions and base-currency conversion. Verify that your organization has multicurrency enabled, then test each order and settlement currency through the selected connector.</p><Sources ids={['xeroCurrency']} /></div></article>
            <article><h3>Fees, refunds and the bank</h3><div><p>Shopify’s payout CSV includes Amount, Fee and Net. Its payout guidance also covers refunds and adjustments. Use the settlement detail to check the bank match and preserve separate fee and refund records.</p><Sources ids={['shopifyPayouts']} /></div></article>
            <article><h3>B2B payment terms</h3><p>Choose where the receivable starts, who sends the invoice and how later payments clear the balance. Make partial payments, due dates and purchase order references part of acceptance.</p></article>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.tint}`} id="integration-process">
        <div className={styles.wrap}>
          <div className={styles.split}>
            <div><p className={styles.eyebrow}>Proposed project process</p><h2>Six steps from order flow to checked entries.</h2><p>Use this plan to agree the scope and acceptance checks before the connection is enabled.</p></div>
            <ol className={styles.process}>{PROCESS.map((step, i) => <li key={step.title}><span className={styles.step} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></li>)}</ol>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>Related services</p><h2>Put the accounting link in context.</h2>
          <p>If you keep your books in QuickBooks, read our <Link href="/services/shopify-quickbooks-integration">Shopify QuickBooks integration page</Link>. If stock belongs in another system, start with <Link href="/services/ecommerce-erp-integration">ecommerce ERP integration</Link> and the wider <Link href="/omnichannel-commerce">omnichannel commerce</Link> flow.</p>
          <p>For local accounting questions, see <Link href="/uk/shopify-xero-integration">Shopify Xero integration for UK sellers</Link> or <Link href="/au/shopify-xero-integration">Shopify Xero integration for Australian sellers</Link>.</p>
        </div>
      </section>

      <FAQ eyebrow="Shopify Xero integration FAQ" headline="Questions to settle before connecting the books." lead={`Connector descriptions checked ${CHECKED_ON}. Answers describe selection and acceptance checks, not an app trial.`} categories={FAQ_CATEGORIES} items={FAQ_ITEMS} bgClassName="bg-white" animate={false} />

      <section className={`${styles.section} ${styles.tint}`} id="sources">
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>Source notes</p><h2>Checked on {CHECKED_ON}.</h2>
          <p>Connector scope, ratings and the launch date come from these vendor pages. No connector was installed or tested for this comparison. Recheck the listing and prove the required workflow before choosing one.</p>
          <ul className={styles.sourceList}>{Object.entries(SRC).map(([id, source]) => <li key={id}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a></li>)}</ul>
        </div>
      </section>
      <FinalCTA variant="light" eyebrow="Your Shopify Xero connection" headline="Start with your products and a sample order." sub={COPY.final} primaryCta={{ label: 'See it on my products', href: '#integration-demo' }} secondaryCta={{ label: 'Contact FactoryJet', href: '/contact' }} objectionHandler={COPY.demo} />
    </main>
    <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
  </>;
}
