import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { twinAlternates } from '@/data/hreflangMap';
import '../ai-agents/ai-agents.css';

/* /uk/ecommerce-erp-integration, built 2026-10-29.

   Truth rules for anyone editing this file.
   1. Every third-party fact (connector scope, API limits, VAT and Making Tax
      Digital rules, a UK agency's stated timeline) was read on the maker's,
      agency's or regulator's own page on 2026-10-29 and links to it through
      the SRC map below. Patchworks, Celigo and Zynk were added on 2026-10-31
      and carry their own read date in SRC. Re-read the page before changing a claim.
   2. No FactoryJet price, and no running or support cost of any kind. We found
      no named UK agency or vendor publishing a GBP range for this job that we
      could read in full on 2026-10-29, so the cost answer carries no number.
   3. Client proof: GPSUK (built on Commerceflo) and Sow Easy (WooCommerce plus
      Odoo, Odoo link still in build) only, each line restating its case study
      in src/data/case-studies/index.ts. Never present either as Shopify work.
   4. Structure mirrors /uk/shopify-xero-integration and /uk/ecommerce-consultant
      (imports, components, CSS, schema). The copy is written fresh for this page
      and shares no sentence with /services/ecommerce-erp-integration.
   5. The FAQ schema is generated from FAQ_ITEMS, the same array the visible
      FAQ renders. Never add a second list of questions.
   6. Keyword and question wording: DataForSEO, United Kingdom (2826), pulled
      2026-10-29. Monthly searches: "erp integration" 140, "ecommerce erp
      integration" 50, "shopify netsuite integration" 40, "shopify sage
      integration" 30, "magento erp integration" 30, "shopify erp" 30. */

const CANONICAL = 'https://factoryjet.com/uk/ecommerce-erp-integration';
const UPDATED = '2026-10-31';
const UPDATED_LABEL = '31 October 2026';
const READ_ON = '29 October 2026';
const TITLE = 'Ecommerce ERP Integration UK: Sage, NetSuite | FactoryJet';
const H1 = 'Ecommerce ERP Integration for UK Stores and Wholesalers';
const DESCRIPTION =
  'Ecommerce ERP integration for UK firms: Shopify, BigCommerce, WooCommerce or Adobe Commerce linked to Sage, NetSuite, Business Central, Odoo or Brightpearl.';

/* Design values, copied from ../ai-agents/ai-agents.css so inline styles stay
   on-system without CSS custom property references in this file. */
const T = {
  ink: '#0F0F12',
  n200: '#E5E5E0',
  n400: '#6E6E68',
  orange: '#FF5C00',
  green: '#047857',
  small: '#B23E13',
  fm: "'Geist Mono',monospace",
  fd: "'Plus Jakarta Sans',sans-serif",
};

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Ecommerce ERP Integration', url: CANONICAL },
];

/* Sources. One map, used by every inline source note AND by the visible
   Sources list near the foot of the page. Each page was opened on 2026-10-29
   and the supporting words read before the claim was written. */
const SRC = {
  govVatRates: { label: 'GOV.UK: VAT rates', url: 'https://www.gov.uk/vat-rates' },
  govVatThresholds: { label: 'GOV.UK: VAT thresholds', url: 'https://www.gov.uk/how-vat-works/vat-thresholds' },
  govVatRecords: { label: 'GOV.UK: Keeping VAT records', url: 'https://www.gov.uk/charge-reclaim-record-vat/keeping-vat-records' },
  govNotice: { label: 'GOV.UK: VAT Notice 700/22, Making Tax Digital for VAT', url: 'https://www.gov.uk/government/publications/vat-notice-70022-making-tax-digital-for-vat/vat-notice-70022-making-tax-digital-for-vat' },
  bcShopify: { label: 'Microsoft Learn: Get started with the Shopify Connector for Business Central', url: 'https://learn.microsoft.com/en-us/dynamics365/business-central/shopify/get-started' },
  nsShopify: { label: 'Shopify App Store: Oracle NetSuite', url: 'https://apps.shopify.com/oracle-netsuite' },
  nsBigCommerce: { label: 'BigCommerce App Marketplace: NetSuite Connector by Oracle NetSuite', url: 'https://www.bigcommerce.com/apps/netsuite-connector-by-oracle-netsuite/' },
  odooShopify: { label: 'Odoo documentation: Shopify connector', url: 'https://www.odoo.com/documentation/19.0/applications/sales/sales/shopify_connector.html' },
  brightpearlShopify: { label: 'Brightpearl: Shopify integration', url: 'https://www.brightpearl.com/integrations/shopify' },
  limelySage: { label: 'Limely (Chester): Sage 200 integration', url: 'https://www.limely.co.uk/integrations/sage-200' },
  shopifyLimits: { label: 'Shopify Dev: GraphQL Admin API rate limits', url: 'https://shopify.dev/docs/apps/build/apis/graphql-admin/rate-limits' },
  wooWebhooks: { label: 'WooCommerce: Webhooks', url: 'https://woocommerce.com/document/webhooks/' },
  linnworks: { label: 'Linnworks: integrations', url: 'https://www.linnworks.com/integrations/' },
  patchworks: { label: 'Patchworks: retail iPaaS', url: 'https://patchworks.io/', on: '31 October 2026' },
  celigo: { label: 'Celigo: integration platform', url: 'https://www.celigo.com/', on: '31 October 2026' },
  zynkSage50: { label: 'Zynk documentation: Shopify and Sage 50 UK solution', url: 'https://docs.zynk.com/workflow/solutions/shopify/sage-50-uk/index.html', on: '31 October 2026' },
} as const;

type SrcKey = keyof typeof SRC;
const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];
/* Sources added after the first build carry their own read date. */
const srcOn = (id: SrcKey): string | undefined => (SRC[id] as { on?: string }).on;

/* FAQ source of truth (drives the visible FAQ and the FAQ schema).
   Question wording draws on Google question boxes for "ecommerce erp
   integration" and "erp integration", United Kingdom, 2026-10-29
   (DataForSEO), plus the system pairs UK buyers search for by name. */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'ERP integration basics' },
  { key: 'systems', label: 'Stores, ERPs and connectors' },
  { key: 'vat', label: 'VAT, refunds and MTD' },
  { key: 'working', label: 'Cost, time and working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ERP integration basics
  {
    category: 'basics',
    question: 'What is ecommerce ERP integration?',
    answer:
      'It is the link that lets your online store and your ERP (enterprise resource planning software, the system that runs stock, purchasing and accounts) share records without anyone retyping them. Orders flow from the store into the ERP. Stock, prices and despatch details flow back. The work that decides whether it holds up is agreeing which system owns each record before a line of code is written.',
  },
  {
    category: 'basics',
    question: 'Which ERP should a UK online retailer pick?',
    answer:
      'In most cases, the one your finance and warehouse teams already run. Replacing an ERP to suit a website is a far bigger project than linking the two. For a fresh choice, test three points first: does the maker publish a connector for your store platform, does a UK partner support it near you, and can it hold your trade price lists. Business Central, NetSuite, Odoo and Brightpearl each publish a Shopify connector; NetSuite also has one for BigCommerce.',
  },
  {
    category: 'basics',
    question: 'Are ERP and CRM the same thing?',
    answer:
      'No. A CRM (customer relationship management system, such as HubSpot or Salesforce) tracks leads, deals and conversations. An ERP tracks stock, orders, invoices and the ledger. Many UK firms run both, and the store then talks to each one: new trade accounts to the CRM, orders and stock to the ERP. The owner map we write says which system holds the customer record.',
  },
  // Stores, ERPs and connectors
  {
    category: 'systems',
    question: 'Does Shopify integrate with Microsoft Dynamics 365 Business Central?',
    answer:
      'Yes. Microsoft’s own documentation describes a Shopify Connector app for Business Central, preinstalled on all new sign-ups and trials, and says you can connect one or more Shopify stores. It also notes that the connector’s refresh token (the key that keeps the two systems signed in to each other) stays valid for up to 90 days without a successful refresh; past that, the shop has to be reconnected. We check the connector’s settings against your rules before building anything beside it.',
  },
  {
    category: 'systems',
    question: 'Does BigCommerce or Shopify integrate with NetSuite?',
    answer:
      'Yes, and Oracle makes both connectors itself. The Shopify one sits in the Shopify App Store and covers products, prices, stock, sales orders and fulfilment, for online stores and Shopify POS alike. BigCommerce stores get the NetSuite Connector by Oracle NetSuite on the BigCommerce App Marketplace. When a connector cannot follow a rule, such as trade price breaks or a bundle split, we build that part as a custom link.',
  },
  {
    category: 'systems',
    question: 'Can Magento or Adobe Commerce connect to an ERP?',
    answer:
      'Yes. Limely, an agency in Chester, describes Sage 200 integrations for Magento 2 that carry orders, stock, trade accounts with credit limits, customer pricing and nominal codes. Patchworks, a UK integration platform, also names Magento 2 beside NetSuite, Sage and Microsoft Dynamics on its own site. For Adobe Commerce we write the same eight-record owner map first, then pick the connector or build the gaps.',
  },
  {
    category: 'systems',
    question: 'Does Odoo have a Shopify connector?',
    answer:
      'Yes. Odoo’s documentation says its Shopify connector syncs orders, products, inventory, deliveries, returns and refunds. It also states two limits worth knowing: the connector runs on scheduled jobs rather than real-time webhooks, and when Odoo handles deliveries, returns started in Shopify do not sync automatically. If your stock moves fast, or Odoo ships your orders and most returns begin online, plan for those gaps before launch.',
  },
  {
    category: 'systems',
    question: 'Can Sage 200 or Sage 50 connect to Shopify?',
    answer:
      'Yes, through a connector or a custom build. Limely, a Chester agency, describes Sage 200 integrations for Shopify and Magento 2 that carry orders, stock, trade accounts with credit limits, customer pricing and nominal codes. For Sage 50, Zynk’s Shopify and Sage 50 UK solution moves customers, products and sales orders into Sage 50, and stock levels back to Shopify. Your accountant or Sage partner sets which nominal code each line hits.',
  },
  {
    category: 'systems',
    question: 'Does Brightpearl work with Shopify?',
    answer:
      'Yes. Brightpearl’s page says Shopify and Shopify POS stay as the storefront while Brightpearl runs the back office: inventory, orders, purchasing and fulfilment. It also says the Shopify refund follows once returned stock is received. That suits retailers who want refunds tied to goods coming back. Where you need something its page does not mention, we scope that piece separately.',
  },
  {
    category: 'systems',
    question: 'Can WooCommerce connect to an ERP?',
    answer:
      'Yes. WooCommerce sends webhooks, event notices to a URL you choose, when orders, products, coupons or customers are added, edited or deleted. Its documentation adds that a webhook is disabled automatically after more than five consecutive delivery failures. So a WooCommerce to ERP link needs a nightly check that catches any order the webhook missed. We build that check into every WooCommerce job.',
  },
  {
    category: 'systems',
    question: 'Do I need Shopify Plus for an ERP integration?',
    answer:
      'No, but Plus gives the link more room. Shopify’s developer documentation lists GraphQL Admin API limits (the cap on how much data an app can read or write each second, counted in points) of 100 points a second on standard plans, 200 on Advanced, 1,000 on Shopify Plus and 2,000 on Shopify for enterprise. So a Plus store gets ten times the API allowance of a standard one. That matters for wholesalers with thousands of SKUs and customer-specific prices.',
  },
  {
    category: 'systems',
    question: 'We also sell on Amazon.co.uk, eBay and OnBuy. Where do those orders go?',
    answer:
      'Into the same ERP, through one route. Some firms feed marketplaces through a multichannel tool: Linnworks, for example, lists Amazon, eBay and Shopify among its integrations. Others send marketplace orders straight to the ERP. The rule we hold to is one owner for stock, so Amazon, eBay, OnBuy or the B&Q marketplace never sell the same last unit twice.',
  },
  // VAT, refunds and MTD
  {
    category: 'vat',
    question: 'How should VAT on web orders reach the ERP?',
    answer:
      'Line by line, each with its own rate. The UK has three: standard at 20%, reduced at 5% and zero at 0%, per GOV.UK. For every sale, HMRC’s MTD notice wants a tax point, a net value and the rate applied in the digital record. So each order line should land in the ERP carrying a VAT code your accountant mapped once.',
  },
  {
    category: 'vat',
    question: 'How are refunds and returns handled in the ERP?',
    answer:
      'As credit notes at the VAT rate of the line being reversed. GOV.UK’s guidance on returned goods allows a credit or debit note, or a replacement invoice, and asks you to record whichever you issue. The open question is timing: does the credit post when the refund is issued online, or when the goods reach the warehouse? Your accountant picks one, and the link follows it.',
  },
  {
    category: 'vat',
    question: 'Does an ecommerce ERP integration meet Making Tax Digital rules?',
    answer:
      'It helps, but MTD covers your whole set of records, so no single link settles it. VAT Notice 700/22 lists API transfer and automated data transfer as digital links, and says HMRC does not count copy and paste as one. A store to ERP link that moves orders by API sits on HMRC’s accepted list. Ask your accountant to check the full chain from store to VAT Return.',
  },
  {
    category: 'vat',
    question: 'How long must we keep the VAT records the link creates?',
    answer:
      'GOV.UK says at least six years, or ten if you use the VAT One Stop Shop scheme (an HMRC scheme for reporting VAT on certain sales to EU consumers). That covers the orders, credit notes and invoices the link writes into your ERP. It is also why we log every record the link moves, with the time and the source, so an auditor can trace any figure back to the store order it came from.',
  },
  {
    category: 'vat',
    question: 'Do Stripe, GoCardless, Klarna and Clearpay need separate handling?',
    answer:
      'Yes. Each provider pays out on its own schedule and takes its own fees before the money reaches your bank. So each one gets its own clearing account in the ERP: sales and refunds post there as they happen, and each payout clears it to the bank line. When a payout and the clearing balance disagree, you know which provider to ask.',
  },
  {
    category: 'vat',
    question: 'We trade through more than one company on one ERP. Can one link serve all of them?',
    answer:
      'Yes, if the map names the selling company on every order. Each store or channel is tied to one trading company, and its orders post to that company’s ledger with that company’s VAT codes. Stock can still have one owner across the group. Where two companies sell the same SKU, we agree in writing which one invoices the buyer before any order moves.',
  },
  // Cost, time and working with us
  {
    category: 'working',
    question: 'How much does ecommerce ERP integration cost in the UK?',
    answer:
      'Three things set the price: how many records move, in which direction, and how many rules no connector covers. A Business Central or NetSuite connector with light set-up is a small job. A custom link carrying trade prices, bundles and marketplace orders is a project. FactoryJet quotes a fixed price in writing after a short scoping call, phase by phase, so you see the cost before you commit.',
  },
  {
    category: 'working',
    question: 'How many weeks should a UK firm plan for a store to ERP link?',
    answer:
      'Limely, a Chester agency, says Sage 200 integrations typically take six to ten weeks. Our plans move with three things: how many records travel, how many custom rules sit on top of the connector, and how fast your ERP partner can give us a sandbox. The plan and dates go in writing with the quote, and each phase is signed on its own.',
  },
  {
    category: 'working',
    question: 'Can we see the link run on our data before signing anything?',
    answer:
      'Yes. You see working software on your own data before any contract. We copy ten or so of your real SKUs into a development store, place a trade order and a refund, and let both land in a sandbox of your ERP with VAT codes and a credit note attached. Your finance lead opens every record it created and signs off only when they match.',
  },
  {
    category: 'working',
    question: 'Can we send a written brief or RFP first?',
    answer:
      'Yes. Send your written brief, an RFP, a field list or an export of the records you move today. Name the store platform, the ERP and its version, any warehouse or marketplace tool, and your order volume. The reply carries an owner map for every record and a fixed price for each phase, or the name of the maker’s connector if that already does the whole job.',
  },
  {
    category: 'working',
    question: 'Who owns the integration code, and who maintains it?',
    answer:
      'You own the code and the repository from day one. Hosting can run in your own accounts at cost, with no markup. Defects are fixed inside the build price for a cover period agreed before work starts. Support is optional: each change is quoted and approved, and there is no monthly minimum. If you want, we keep managing the servers, APIs and maintenance after launch.',
  },
  {
    category: 'working',
    question: 'Will you work with our accountant or ERP partner?',
    answer:
      'Yes, and we want them on the first call. Your accountant decides the nominal codes and VAT treatment. Your Sage, NetSuite, Business Central or Odoo partner knows how the ERP is configured and who changes it. We build to their decisions, so nobody discovers a custom field or a locked period in week six.',
  },
];

/* Who owns each record. The owner column is the map we propose on day one;
   yours is agreed in writing before anything is built. */
const OWNERS: { record: string; owner: string; flow: string; note: string }[] = [
  { record: 'Products and SKUs', owner: 'ERP', flow: 'ERP to store', note: 'Descriptions and images can stay in the store; codes, units and VAT codes come from the ERP.' },
  { record: 'Trade prices and price lists', owner: 'ERP', flow: 'ERP to store', note: 'Customer-specific prices and quantity breaks are read from the ERP, never typed twice.' },
  { record: 'Stock', owner: 'ERP or warehouse system', flow: 'ERP to store and marketplaces', note: 'One owner across Shopify, Amazon.co.uk, eBay UK and OnBuy, so the last unit sells once.' },
  { record: 'Orders', owner: 'Store', flow: 'Store to ERP', note: 'Each line arrives with its own VAT code, delivery charge and discount.' },
  { record: 'Trade accounts and credit terms', owner: 'ERP', flow: 'ERP to store', note: 'Credit limit and payment terms decide whether a buyer can order on account.' },
  { record: 'Refunds and returns', owner: 'Agreed with your accountant', flow: 'Both ways', note: 'Credit note at the original VAT rate, posted on refund or on receipt of goods.' },
  { record: 'Payments and payouts', owner: 'Payment provider', flow: 'Provider to ERP', note: 'Stripe, Klarna, Clearpay, GoCardless and Shopify Payments each get a clearing account.' },
  { record: 'Despatch and tracking', owner: 'ERP or warehouse system', flow: 'ERP to store', note: 'The Royal Mail, DPD or Evri tracking number goes back to the order and the customer email.' },
];

/* Store and ERP pairs. Each cell restates the maker's or agency's own page,
   read on 2026-10-29. */
const PAIRS: { erp: string; stores: string; maker: string; ready: string; watch: string; sources: SrcKey[] }[] = [
  {
    erp: 'Microsoft Dynamics 365 Business Central',
    stores: 'Shopify',
    maker: 'Microsoft',
    ready: 'Microsoft’s Shopify Connector, preinstalled on new sign-ups and trials; it connects one or more Shopify stores.',
    watch: 'The refresh token stays valid for up to 90 days without a successful refresh. Past that, the shop must be reconnected.',
    sources: ['bcShopify'],
  },
  {
    erp: 'Oracle NetSuite',
    stores: 'Shopify, BigCommerce',
    maker: 'Oracle',
    ready: 'Oracle’s own app for Shopify (product, pricing, inventory, sales order and fulfilment data) and its NetSuite Connector for BigCommerce.',
    watch: 'Trade price breaks, bundles and multi-company rules outside the connector’s settings need custom work beside it.',
    sources: ['nsShopify', 'nsBigCommerce'],
  },
  {
    erp: 'Odoo',
    stores: 'Shopify',
    maker: 'Odoo',
    ready: 'Odoo’s Shopify connector syncs orders, products, inventory, deliveries, returns and refunds.',
    watch: 'Runs on scheduled jobs, not real-time webhooks. When Odoo handles deliveries, returns started in Shopify do not sync automatically.',
    sources: ['odooShopify'],
  },
  {
    erp: 'Brightpearl',
    stores: 'Shopify, Shopify POS',
    maker: 'Brightpearl',
    ready: 'Shopify and Shopify POS stay as the storefront; Brightpearl runs inventory, orders, purchasing and fulfilment.',
    watch: 'The Shopify refund follows once returned stock is received, so agree that timing with your accountant.',
    sources: ['brightpearlShopify'],
  },
  {
    erp: 'Sage 200',
    stores: 'Shopify, Magento 2',
    maker: 'Agencies and connector firms',
    ready: 'Connectors and agency builds for Shopify and Magento 2. Limely in Chester lists orders, stock, trade accounts, pricing and nominal codes.',
    watch: 'Limely says Sage 200 integrations typically take six to ten weeks. Nominal codes come from your accountant.',
    sources: ['limelySage'],
  },
  {
    erp: 'Xero (accounts only)',
    stores: 'Shopify, WooCommerce',
    maker: 'App makers',
    ready: 'Free and paid connector apps for Shopify and WooCommerce. We compare them on our Shopify Xero integration page.',
    watch: 'Xero holds the books. Stock and trade prices usually need a warehouse system or an ERP beside it.',
    sources: [],
  },
];

/* JSON-LD. The Organization is referenced by @id only and is defined once,
   sitewide. Never redefine it here. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Ecommerce ERP Integration UK',
      serviceType: 'Ecommerce ERP integration: record owner mapping, connector set-up, custom store to ERP links, VAT and refund mapping, support',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'FactoryJet scopes, builds, tests and supports integrations between a UK company’s online store (Shopify, Shopify Plus, BigCommerce, WooCommerce or Adobe Commerce) and its ERP or accounts system (Sage, Xero, NetSuite, Microsoft Dynamics 365 Business Central, Odoo or Brightpearl). Each record gets one owner, orders arrive with VAT codes per line, refunds post as credit notes, and stock, trade prices and despatch details flow back to the store and marketplaces.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: c.url,
      })),
    },
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: TITLE,
      headline: H1,
      description: DESCRIPTION,
      inLanguage: 'en-GB',
      datePublished: '2026-10-29',
      dateModified: UPDATED,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Founder & CEO',
        url: 'https://factoryjet.com/about',
        sameAs: [
          'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
          'https://github.com/factoryjet-tech',
        ],
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: FAQ_ITEMS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL, languages: twinAlternates['ecommerce-erp-integration'] },
  openGraph: {
    title: TITLE,
    description:
      'How UK retailers, wholesalers and manufacturers link their store to Sage, NetSuite, Business Central, Odoo or Brightpearl: one owner per record, VAT per order line, refunds as credit notes.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/b2b-ecommerce/b2b-ecommerce-og.webp', width: 1200, height: 630, alt: 'A wholesale operations manager working on a trade ordering portal in a warehouse office' }],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 12, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;
const inlineLink = { textDecoration: 'underline', color: T.ink, fontWeight: 600 } as const;

/* Small source line. Every id comes from the SRC map above. */
function Sources({ ids }: { ids: SrcKey[] }) {
  if (ids.length === 0) return null;
  const headDate = srcOn(ids[0]) ?? READ_ON;
  return (
    <p style={srcNote}>
      Sources, read on {headDate}:{' '}
      {ids.map((id, i) => (
        <span key={id}>
          {i > 0 ? '; ' : ''}
          <a href={SRC[id].url} target="_blank" rel="noopener noreferrer" style={srcLink}>{SRC[id].label}</a>
          {(srcOn(id) ?? READ_ON) !== headDate ? ` (read ${srcOn(id) ?? READ_ON})` : ''}
        </span>
      ))}
      .
    </p>
  );
}

export default function EcommerceErpIntegrationUKPage() {
  return (
    <>
      <script id="ld-uk-ecommerce-erp-integration" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-aiagents">
      <main>

        <Breadcrumbs items={crumbs} />

        {/* 1. HERO */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />Ecommerce ERP Integration UK</span>
                  <span className="chip">Sage, NetSuite, Business Central, Odoo</span>
                  <span className="chip">VAT per Order Line</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  Your store runs on Shopify, Shopify Plus, BigCommerce, WooCommerce or Adobe Commerce. Your stock,
                  trade prices and ledger sit in Sage, NetSuite, Business Central, Odoo or Brightpearl. FactoryJet
                  builds the link so the two agree on stock, prices, orders and VAT, at a fixed price per phase,
                  and the code is yours.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />{UPDATED_LABEL}</div>
                </div>
                <p className="mt-4" style={{ maxWidth: 560, fontSize: 14, color: T.n400 }}>
                  Bhavesh Barot founded FactoryJet in 2014 and replies to every scoping request himself.{' '}
                  <a href="/about" style={inlineLink}>More about FactoryJet</a>.
                </p>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_ecommerce_erp_integration_hero" service="Ecommerce ERP Integration" submitLabel="Scope my ERP link" />
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/b2b-ecommerce/b2b-ecommerce-warehouse.webp" width={1200} height={800} fetchPriority="high" decoding="async" alt="Warehouse staff checking a store order on a tablet against stock on the racks, the moment an ERP link has to get right" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">Agreed in writing before any code</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">One owner for every record</div><div className="scorecard-note">products, prices, stock, orders, customers</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>8 records</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">VAT code on each order line</div><div className="scorecard-note">standard, reduced or zero, mapped once by your accountant</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>3 rates</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Digital link types a store link can use</div><div className="scorecard-note">API, automated transfer, XML or CSV files, per VAT Notice 700/22</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>3 kinds</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Demo on your own data</div><div className="scorecard-note">about ten of your real SKUs, before a contract is signed</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>10 SKUs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ANSWER-FIRST DEFINITION */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What does ecommerce ERP integration involve for a UK business?</span>
              <p>
                It connects your online store to the system that runs stock, trade prices and accounts, so orders
                reach the ERP with a VAT code on every line and stock, prices and tracking numbers come back without
                retyping. Business Central, NetSuite, Odoo and Brightpearl each publish a Shopify connector. A
                custom link covers the rules a connector has no setting for.
              </p>
            </div>
            <Sources ids={['bcShopify', 'nsShopify', 'odooShopify', 'brightpearlShopify']} />
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Terms we use a lot</span>
              <p>
                An <b>ERP</b> (enterprise resource planning software) is the back office: stock, purchasing, trade
                customers, invoices and the ledger. A <b>connector</b> is a ready-made app that moves a fixed set of
                records between two systems. An <b>owner map</b> is the one-page list that names, for each record,
                the single system where it is created and edited.
              </p>
              <p className="mt-4">
                A <b>nominal code</b> is the ledger account a sale, fee or refund posts to. The <b>tax point</b> is
                the date that decides which VAT period a sale belongs to. A <b>webhook</b> is a notice one system
                sends another the moment a record changes. A <b>clearing account</b> holds money a payment provider
                owes you until the payout reaches your bank. A <b>3PL</b> is a third-party warehouse that stores and
                ships your stock for you.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              These projects fail when the store and the ERP both believe they own the stock figure, or when a
              refund posts at 20% against a sale that was zero-rated. So we write the owner map first, with your
              finance lead and your ERP partner, and choose the tooling after.
            </p>
          </div>
        </section>

        {/* 3. FACTS BAND (each one sourced) */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '500+', t: 'businesses served by FactoryJet since it was founded in 2014', s: 'About FactoryJet', u: '/about' },
                { v: '20 / 5 / 0', t: 'per cent: the standard, reduced and zero VAT rates an order line can carry', s: 'GOV.UK, VAT rates', u: SRC.govVatRates.url },
                { v: '10x', t: 'the API allowance on Shopify Plus (1,000 points a second) against standard Shopify plans (100)', s: 'Shopify Dev, rate limits', u: SRC.shopifyLimits.url },
                { v: '6 years', t: 'is the minimum GOV.UK sets for keeping the VAT records your link writes', s: 'GOV.UK, VAT records', u: SRC.govVatRecords.url },
              ].map((r) => (
                <li key={r.t}>
                  <div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.orange }}>{r.v}</div>
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p>
                  <a href={r.u} {...(r.u.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} style={{ fontFamily: T.fm, fontSize: 12, color: T.n400, textDecoration: 'underline' }}>{r.s}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. WHO OWNS EACH RECORD */}
        <section className="sec-lg dot-grid" id="record-owners">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Start with owners</span>
                <h2>Who owns each record between your store and your ERP</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Eight records cover almost every UK store to ERP link we scope. Each one gets a single home. If the
                  store and the ERP both carry a figure, the map names the winner, and the link blocks the other
                  side from overwriting it.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/shopify-xero-integration/shopify-xero-record-owners.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Two colleagues sorting blank sticky notes into a store column and an ERP column while mapping which system owns each record" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Left side for what the store owns, right side for what the ERP owns. A record that lands on
                    both sides gets settled before build starts, and finance approves the final split.
                  </p>
                </div>
              </div>
            </div>
            <p className="md:hidden mt-8" style={{ fontFamily: T.fm, fontSize: 12, color: T.n400 }}>Swipe sideways to see every column.</p>
            <div className="card mt-10" tabIndex={0} role="region" aria-label="Record owner map" style={{ padding: 0, overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}><table className="cmp-table" style={{ minWidth: 820 }} data-columns={4}>
                <thead>
                  <tr>
                    <th>Record</th>
                    <th className="fj">Usual owner</th>
                    <th>Direction</th>
                    <th>What we agree</th>
                  </tr>
                </thead>
                <tbody>
                  {OWNERS.map((o) => (
                    <tr key={o.record}>
                      <td className="feat">{o.record}</td>
                      <td className="fj">{o.owner}</td>
                      <td>{o.flow}</td>
                      <td>{o.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={srcNote}>
              This is our opening proposal. Your version gets signed line by line before development starts.
            </p>
          </div>
        </section>

        {/* 5. STORE AND ERP PAIRS */}
        <section className="sec-lg" id="erp-connectors">
          <div className="wrap">
            <div style={{ maxWidth: 800 }}>
              <span className="eyebrow">The systems</span>
              <h2>Shopify ERP integration with Sage, NetSuite, Business Central, Odoo and Brightpearl</h2>
              <p className="lead mt-4">
                Each line below restates the maker&rsquo;s or agency&rsquo;s own page, read on {READ_ON}. &ldquo;Ready-made&rdquo;
                is what you get without custom code. &ldquo;Watch for&rdquo; is where we usually find the gap.
              </p>
            </div>
            <p className="md:hidden mt-8" style={{ fontFamily: T.fm, fontSize: 12, color: T.n400 }}>Swipe sideways to see every column.</p>
            <div className="card mt-8" tabIndex={0} role="region" aria-label="ERP connectors by store platform" style={{ padding: 0, overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table className="cmp-table" style={{ minWidth: 640 }} data-columns={3}>
                <thead>
                  <tr>
                    <th>ERP or accounts system</th>
                    <th className="fj">Store platforms covered</th>
                    <th>Who makes the connector</th>
                  </tr>
                </thead>
                <tbody>
                  {PAIRS.map((p) => (
                    <tr key={p.erp}>
                      <td className="feat">{p.erp}</td>
                      <td className="fj">{p.stores}</td>
                      <td>{p.maker}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="col-2 mt-10">
              {PAIRS.map((p) => (
                <li key={p.erp} className="plat-card">
                  <div className="plat-top">
                    <h3 className="plat-name">{p.erp}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: T.ink }}><b>Ready-made:</b> {p.ready}</p>
                  <p className="plat-best"><b>Watch for:</b> {p.watch}</p>
                  <Sources ids={p.sources} />
                </li>
              ))}
            </ul>
            <div className="stack mt-10" style={{ maxWidth: 820 }}>
              <h3>The store side matters too</h3>
              <p>
                <b>Shopify and Shopify Plus.</b> Shopify&rsquo;s developer documentation sets GraphQL Admin API limits
                by plan, counted in points (a measure of how much data an app reads or writes): 100 points a second on standard plans, 200 on Advanced, 1,000 on Shopify Plus and 2,000 on
                Shopify for enterprise. A wholesaler pushing 8,000 customer prices overnight feels that difference.
              </p>
              <p>
                <b>WooCommerce.</b> Its webhooks fire when orders, products, coupons or customers are added, edited
                or deleted, and WooCommerce disables a webhook after more than five consecutive delivery failures.
                We pair every WooCommerce link with a scheduled check that picks up anything a disabled webhook
                dropped.
              </p>
              <p>
                <b>BigCommerce and Adobe Commerce.</b> Oracle lists a NetSuite connector on the BigCommerce
                marketplace, and Limely lists Sage 200 builds for Magento 2. For Adobe Commerce stores we scope the
                same eight records; see our <a href="/uk/magento" style={inlineLink}>Magento and Adobe Commerce page</a> for
                the platform work itself.
              </p>
            </div>
            <Sources ids={['shopifyLimits', 'wooWebhooks', 'nsBigCommerce', 'limelySage']} />
          </div>
        </section>

        {/* 6. VAT ON ORDERS AND REFUNDS */}
        <section className="sec-lg dot-grid" id="vat">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">VAT and Making Tax Digital</span>
                <h2>VAT on orders and refunds: what the link carries, and what your accountant decides</h2>
                <div className="stack mt-6">
                  <p>
                    <b>Orders.</b> The UK runs three rates: 20% standard, 5% reduced, 0% zero. A basket with adult
                    and children&rsquo;s clothes in it carries two. Under HMRC&rsquo;s MTD notice, the digital record of a
                    sale holds its tax point, its net value and its rate, so each order line arrives in the ERP with
                    a VAT code of its own.
                  </p>
                  <p>
                    <b>Refunds and returns.</b> For returned goods, GOV.UK allows a credit or debit note or a
                    replacement invoice, recorded in your accounts. The link posts the credit at the rate of the
                    line it reverses. Whether it posts when the refund is issued or
                    when the parcel reaches the warehouse is your accountant&rsquo;s call.
                  </p>
                  <p>
                    <b>Digital links.</b> VAT Notice 700/22 lists API transfer and automated data transfer as digital
                    links, and says HMRC does not count copy and paste as one. A store to ERP link that moves orders
                    by API sits on that list. Your accountant still checks the full chain to the VAT Return.
                  </p>
                  <p>
                    <b>Records.</b> GOV.UK says VAT records must be kept for at least six years, or ten under the VAT
                    One Stop Shop scheme. We log every record the link moves, with time and source, so any ERP figure
                    traces back to a store order.
                  </p>
                </div>
                <Sources ids={['govVatRates', 'govNotice', 'govVatRecords', 'govVatThresholds']} />
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What HMRC&rsquo;s notice counts as a digital link</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">API transfer</div><div className="scorecard-note">how connectors and custom links move orders</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Accepted</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Automated data transfer</div><div className="scorecard-note">scheduled jobs between systems</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Accepted</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">XML or CSV import and export</div><div className="scorecard-note">file exports picked up by the ERP</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Accepted</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Copy and paste, or retyping</div><div className="scorecard-note">excluded by paragraph 3.2.1</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Not a link</div></div>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline={'Scoping your ecommerce ERP integration: send your owner map, or let us draft it from one week of orders.'}
          sub={'Tell us the store platform, the ERP and its version, and any warehouse or marketplace tool in between. We reply with a record-by-record map and a fixed price for each phase, or tell you the maker’s connector is enough.'}
          label={'Scope my ERP link'}
        />

        {/* 7. MARKETPLACES, PAYMENTS, COURIERS */}
        <section className="sec-lg" id="marketplaces-payments-couriers">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">Everything else in the chain</span>
              <h2>Marketplaces, payment providers and couriers in a UK ERP link</h2>
              <p className="lead mt-4">
                A UK store is rarely the only place orders come from. The ERP link has to hold the same rules for
                every channel, or stock and VAT drift apart within a week.
              </p>
            </div>
            <div className="col-6040 mt-10">
              <div className="card">
                <h3>Marketplaces</h3>
                <p className="mt-4">
                  Amazon.co.uk, eBay UK, OnBuy and the B&amp;Q marketplace each send their own
                  orders. Some firms route them through a multichannel tool such as Linnworks, which lists Amazon,
                  eBay and Shopify among its integrations. Either way, one system owns stock for all of them.
                </p>
              </div>
              <ul className="stack">
                <li className="card">
                  <h3>Payments</h3>
                  <p className="mt-4">
                    Shopify Payments, Stripe, GoCardless, Klarna and Clearpay each pay out on their own schedule, with
                    their own fees taken first. Each gets its own clearing account in the ERP, so every payout matches
                    one bank line and a gap points at one provider.
                  </p>
                </li>
                <li className="card">
                  <h3>Warehouses and couriers</h3>
                  <p className="mt-4">
                    Where Mintsoft, Linnworks or a 3PL (third-party warehouse) picks the orders, we decide with you
                    whether it or the ERP owns stock. Royal Mail, DPD or Evri tracking numbers go back to the store
                    order, so the customer email and the ERP agree.
                  </p>
                </li>
              </ul>
            </div>
            <Sources ids={['linnworks']} />
          </div>
        </section>

        {/* 8. CONNECTOR OR CUSTOM */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Connector or custom</span>
                <h2>When a ready-made connector is enough, and when a custom link pays for itself</h2>
                <div className="stack mt-6">
                  <p>
                    Start with what the ERP maker ships. If Business Central&rsquo;s Shopify Connector or Oracle&rsquo;s
                    NetSuite app follows every rule in your owner map, we set it up, test it on your data and say so
                    early, before any custom quote.
                  </p>
                  <p>
                    A third route sits between the two: an <b>integration platform (iPaaS)</b>, a hosted service that
                    runs ready-made flows between many systems. Patchworks, a UK firm, pitches
                    its iPaaS at retailers and names Shopify, Magento 2, BigCommerce, NetSuite, Sage and
                    Microsoft Dynamics on its site. Celigo says it started as an iPaaS and lists Shopify, Amazon,
                    NetSuite and Microsoft Dynamics 365. We test an
                    iPaaS against the owner map the same way we test a connector.
                  </p>
                  <p>
                    Custom work earns its fee where your business has a rule that no connector setting can express.
                    In B2B ecommerce ERP integration, those rules are usually about trade buyers.
                  </p>
                </div>
                <ul className="scope-list yes-list mt-4" style={{ maxWidth: 600 }}>
                  <li><b>Trade prices with breaks and contracts.</b> Customer-specific prices, quantity breaks and contract prices read from the ERP for each logged-in buyer.</li>
                  <li><b>Bundles and kits.</b> One web product that the ERP must see as three or four stock lines, with the price split and the rounding penny placed.</li>
                  <li><b>More than one company or VAT registration.</b> Two brands on one ERP, or one store selling for two legal entities.</li>
                  <li><b>Marketplaces and a warehouse tool in the chain.</b> Amazon, eBay or OnBuy orders, plus Linnworks or Mintsoft, all agreeing on one stock figure.</li>
                  <li><b>Pay on account.</b> Credit limits and terms from the ERP deciding at checkout whether a trade buyer can order without a card.</li>
                  <li><b>An older or customised ERP.</b> Sage 200 with custom fields, or an Odoo instance with its own modules, where the standard connector expects the default set-up.</li>
                </ul>
                <Sources ids={['patchworks', 'celigo']} />
                <p className="mt-6" style={{ maxWidth: 600 }}>
                  <b>On Sage 50?</b> Third-party tools fill the gap. Zynk&rsquo;s documentation for its Shopify and Sage
                  50 UK solution moves customers, products and sales orders into Sage 50, and sends stock levels back
                  to Shopify.
                </p>
                <Sources ids={['zynkSage50']} />
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">A rule of thumb</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">One store, one company, list prices</div><div className="scorecard-note">ERP maker&rsquo;s connector fits</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Connector</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Online returns, Odoo ships the orders</div><div className="scorecard-note">connector plus a return sync</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Connector+</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Trade prices per buyer</div><div className="scorecard-note">read live from the ERP</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Custom</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Marketplaces plus a warehouse tool</div><div className="scorecard-note">one stock owner across all</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Custom</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Several companies or VAT numbers</div><div className="scorecard-note">one map across all of them</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Custom</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. RECENT UK WORK (one labelled block) */}
        <section className="sec-lg" id="recent-work">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Recent UK work</span>
              <h2>Two UK trade builds: one ERP link, one trade storefront</h2>
            </div>
            <ul className="col-2 mt-8">
              <li className="card">
                <h3>Sow Easy: WooCommerce trade store connected to Odoo</h3>
                <p className="mt-4">
                  A B2B distributor selling to trade buyers, with stock, pricing and product data in Odoo. We are
                  building its WooCommerce trade store with Odoo supplying stock levels, prices and SKUs, so Odoo stays
                  the single source. It has not launched: the store and the Odoo link are still under test on staging.
                </p>
                <p className="mt-4"><a href="/case-studies/sow-easy-distributor-portal" style={inlineLink}>Read the Sow Easy case study</a></p>
              </li>
              <li className="card">
                <h3>GPSUK: trade storefront on Commerceflo</h3>
                <p className="mt-4">
                  A UK supplier of branded promotional products selling to business customers. We built its trade
                  storefront on Commerceflo, where business buyers sign in, see the prices on their own account,
                  and turn an accepted quote into an order with nothing keyed twice. Pricing and quoting run inside
                  Commerceflo; no ERP link is part of this build.
                </p>
                <p className="mt-4"><a href="/case-studies/gpsuk-promotional-products" style={inlineLink}>Read the GPSUK case study</a></p>
              </li>
            </ul>
          </div>
        </section>

        {/* 10. HOW WE BUILD IT (NUMBERED STEPS) */}
        <section className="sec-lg dot-grid" id="how-we-build">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">How we work</span>
              <h2>How we build a store to ERP link, in seven steps</h2>
              <p className="lead mt-4">
                Connector job or custom build, the sequence holds; step four is where they part. Finance and your
                ERP partner sit in on steps two and five.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Read a week of real orders', d: 'We take a week of store orders, refunds and payouts, plus the matching ERP entries, and list every kind of line inside them: VAT rates, discounts, bundles, delivery charges, marketplace orders and trade accounts. We scope from that inventory.' },
                { n: '02', t: 'Write the owner map with finance', d: 'Your accountant names the nominal code and VAT code for each kind of line. Your ERP partner flags custom fields and locked periods. The result is a one-page map that both sides sign.' },
                { n: '03', t: 'Fix the data before it moves', d: 'Missing SKUs, duplicate trade customers and products with no VAT code are cleaned in the owner system first. A duplicate customer copied into a live link turns into two ledgers to reconcile later.' },
                { n: '04', t: 'Pick connector first, custom second', d: 'The ERP maker’s connector is tried against your owner map first. Custom code covers only the gaps it leaves, priced per phase in writing.' },
                { n: '05', t: 'Prove it in a sandbox before signing', d: 'Ten or so of your real SKUs, one trade order and one refund pass from a development store into an ERP sandbox. Finance opens each record, credit note included, before any contract.' },
                { n: '06', t: 'Run the edge cases', d: 'A part refund, a zero-rated line, a bundle, a trade order on account, a marketplace order and an order for the last unit in stock all go through the sandbox first.' },
                { n: '07', t: 'Go live, check daily, stay on', d: 'Through the opening weeks, store orders, ERP orders and stock counts are reconciled daily. Support afterwards is your choice, from the team that built it, and the code is yours either way.' },
              ].map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.small, minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 11. TERMS AND BRIEF */}
        <section className="sec-lg" id="terms">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Terms</span>
                <h2>Terms for a UK ecommerce ERP integration project</h2>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>Working software before you sign.</b> We show the link on your own data first.</li>
                  <li><b>Fixed price per phase.</b> Each phase is scoped, priced and signed on its own.</li>
                  <li><b>You own the code.</b> The code and the repository are yours from day one.</li>
                  <li><b>Your accounts, at cost.</b> Hosting can run in your own accounts with no markup.</li>
                  <li><b>Defects fixed inside the build price</b> for a cover period agreed before work starts.</li>
                  <li><b>Support is optional.</b> Each change is quoted and approved. No monthly minimum.</li>
                </ul>
                <p className="mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet quotes the build, and any support you choose, as fixed prices in writing after a short
                  scoping call. If you want, we keep managing the servers, APIs and maintenance after launch.
                </p>
                <div className="mt-8">
                  <ModalCTAButton label="Scope my ERP link" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Send a brief or an RFP</span>
                <p style={{ fontSize: 14, marginTop: 8 }}>
                  If you would rather write it down first, send your brief, RFP or field list through the contact form. These
                  five details get you an owner map and a fixed price per phase in the reply.
                </p>
                <div className="scorecard-row"><div><div className="scorecard-metric">Store platform and plan</div><div className="scorecard-note">Shopify, Plus, BigCommerce, WooCommerce, Adobe Commerce</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>1</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">ERP and its version</div><div className="scorecard-note">Sage 200, NetSuite, Business Central, Odoo, Brightpearl</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>2</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Tools in between</div><div className="scorecard-note">Linnworks, Mintsoft, a 3PL, marketplaces</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>3</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Orders a month and SKU count</div><div className="scorecard-note">plus any trade price lists</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>4</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Who signs off</div><div className="scorecard-note">finance lead, accountant, ERP partner</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>5</div></div>
              </div>
            </div>
            <p className="mt-10" style={{ maxWidth: 820 }}>
              Related UK work: <a href="/uk/shopify-xero-integration" style={inlineLink}>Shopify Xero integration</a> for
              stores whose books are in Xero, <a href="/uk/b2b-ecommerce" style={inlineLink}>B2B ecommerce</a> for trade
              portals, <a href="/uk/shopify-plus" style={inlineLink}>Shopify Plus</a>,{' '}
              <a href="/uk/woocommerce" style={inlineLink}>WooCommerce development</a> and our{' '}
              <a href="/uk/ecommerce-consultant" style={inlineLink}>UK ecommerce consultant</a> service. Selling in the
              US as well? See <a href="/services/ecommerce-erp-integration" style={inlineLink}>ecommerce ERP integration for US stores</a>.
            </p>
          </div>
        </section>

        {/* 12. SOURCES */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Method</span>
              <h2>Sources, read on {READ_ON}</h2>
              <p className="lead mt-4">
                We opened each page below on that date, or on the date shown beside it, and read the words behind every connector scope, API limit,
                timeline and tax point we quote. Makers update connectors and HMRC updates guidance, so check the
                live page before acting.
              </p>
            </div>
            <ul className="col-2 mt-8" style={{ gap: 10 }}>
              {SOURCE_KEYS.map((k) => (
                <li key={k} style={{ fontSize: 14 }}>
                  <a href={SRC[k].url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: T.ink }}>{SRC[k].label}</a>
                  {srcOn(k) ? ` (read ${srcOn(k)})` : ''}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 13. FAQ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2>Ecommerce ERP integration questions from UK finance and ecommerce teams</h2>
            </div>
            <div className="faq-grid">
              <aside className="faq-sidebar">
                <span className="faq-sidebar-topics">Topics</span>
                <nav className="faq-sidebar-nav">
                  {FAQ_CATEGORIES.map((c) => (
                    <a key={c.key} href={`#faq-${c.key}`}>
                      {c.label}
                      <span className="faq-nav-count">{FAQ_ITEMS.filter((f) => f.category === c.key).length}</span>
                    </a>
                  ))}
                </nav>
                <div className="faq-sidebar-cta">
                  <ModalCTAButton label="Ask the founder a question" region="uk" modalVariant="default" btnVariant="secondary-light" />
                  <p>Bhavesh replies within 24 hours.</p>
                </div>
              </aside>

              <div>
                {FAQ_CATEGORIES.map((c) => (
                  <div key={c.key} id={`faq-${c.key}`} style={{ marginBottom: 40 }}>
                    <div className="faq-cat-header">
                      <span className="faq-cat-bar" />
                      <p className="faq-cat-label">{c.label}</p>
                    </div>
                    <ul className="faq-list">{FAQ_ITEMS.filter((f) => f.category === c.key).map((f) => (
                      <li key={f.question}><details className="faq-item">
                        <summary>
                          <span className="q-text">{f.question}</span>
                          <span className="chevron">
                            <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </span>
                        </summary>
                        <div className="faq-ans"><p>{f.answer}</p></div>
                      </details></li>
                    ))}</ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 14. FINAL CTA (the only dark section) */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Next step</span>
            <h2>Book a scoping call for your store to ERP link</h2>
            <p className="mt-4">
              Leave a name and a work email. Within 24 hours Bhavesh replies to book a short call on your store, your
              ERP and the eight records between them. By the end you know whether the maker&rsquo;s connector will
              do, or which parts need custom work, and what each phase costs.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Scope my ERP link" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/contact" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>Contact us</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}
