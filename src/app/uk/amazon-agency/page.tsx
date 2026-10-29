import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../ai-agents/ai-agents.css';

/* /uk/amazon-agency, built 2026-10-29.

   Truth rules for anyone editing this file.
   1. Every law, tax rule, Amazon fee or programme fact below was read on the
      regulator's or Amazon's own page on 2026-10-29 and links to that page
      through the SRC map. Fees and rules move. Re-read the page before
      changing a figure, and update the "29 October 2026" wording.
   2. No FactoryJet price. The only money figures are Amazon's own UK list
      fees, the GOV.UK VAT threshold, and one named UK agency's published
      price page (RippleEffect), quoted as a market example in a cost answer.
   3. GPSUK and Sow Easy are named with permission (29 Oct 2026). Neither is
      Amazon work and the copy never says it is. Sow Easy's Odoo link is still
      in build, per src/data/case-studies/index.ts.
   4. Structure mirrors /uk/ecommerce-consultant (imports, components, CSS,
      schema). The copy is written fresh for this page and repeats no
      paragraph from /services/amazon-agency.
   5. The FAQ schema is generated from FAQ_ITEMS, the same array the visible
      FAQ renders. Never add a second list of questions. */

const CANONICAL = 'https://factoryjet.com/uk/amazon-agency';
const UPDATED = '2026-10-29';
const READ_ON = '29 October 2026';
const TITLE = 'Amazon Agency UK: Seller Central, FBA, EU | FactoryJet';
const H1 = 'Amazon Agency UK: Seller Central, FBA and Amazon EU, Joined to the Systems Your Business Already Runs';
const DESCRIPTION =
  'Amazon agency for established UK brands: Amazon.co.uk listings, Brand Registry, FBA, ads and EU expansion, wired into Linnworks, Xero, Sage or your ERP.';

/* Design tokens, copied by value from ../ai-agents/ai-agents.css so inline
   styles stay on-system without CSS custom property references in this file. */
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
  { name: 'Amazon Agency', url: CANONICAL },
];

/* Sources. One map, used by every inline source note and the Sources list.
   Each page was opened on 2026-10-29 and the supporting words read before the
   claim was written. */
const SRC = {
  amzPricing: { label: 'Amazon UK: selling plans and fees', url: 'https://sell.amazon.co.uk/pricing' },
  amzBrand: { label: 'Amazon UK: Brand Registry', url: 'https://sell.amazon.co.uk/brand-registry/' },
  amzFbaEu: { label: 'Amazon UK: FBA in Europe and Pan-European FBA', url: 'https://sell.amazon.co.uk/fulfilment-by-amazon/fba-europe?lang=en-GB' },
  vatThreshold: { label: 'GOV.UK: when to register for VAT', url: 'https://www.gov.uk/vat-registration/when-to-register' },
  vatMarketplaces: { label: 'HMRC: VAT and overseas goods sold to customers in the UK using online marketplaces', url: 'https://www.gov.uk/guidance/vat-and-overseas-goods-sold-to-customers-in-the-uk-using-online-marketplaces' },
  mtdVat: { label: 'HMRC: sign up for Making Tax Digital for VAT', url: 'https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-vat' },
  platformReporting: { label: 'HMRC: reporting rules for digital platforms', url: 'https://www.gov.uk/guidance/reporting-rules-for-digital-platforms' },
  vatExport: { label: 'HMRC: VAT on goods exported from the UK (VAT Notice 703)', url: 'https://www.gov.uk/guidance/vat-on-goods-exported-from-the-uk-notice-703' },
  gpsr: { label: 'business.gov.uk: EU General Product Safety Regulation', url: 'https://www.business.gov.uk/campaign/europe/european-union-eu-regulations/eu-general-product-safety-regulation-eu-gpsr/' },
  ripplePricing: { label: 'RippleEffect: pricing', url: 'https://www.rippleeffect.agency/pricing' },
} as const;

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Amazon agency basics' },
  { key: 'tax', label: 'VAT, HMRC and EU rules' },
  { key: 'ops', label: 'Listings, FBA and systems' },
  { key: 'working', label: 'Cost and working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Amazon agency basics ──
  { category: 'basics', question: 'What does an Amazon agency do for a UK brand?',
    answer: 'It takes ownership of the work that decides whether Amazon.co.uk makes you money: the catalogue and listings, Brand Registry, FBA stock planning, advertising, account health cases and the reporting behind them. A good one also handles the plumbing, meaning how Amazon orders, stock and fees reach your order system and your accounts. That second half is where most UK brands we speak to are losing hours every week.' },
  { category: 'basics', question: 'What is Amazon account management?',
    answer: 'Account management is the day-to-day running of a Seller Central account. It covers listing fixes, suppressed or stranded products, cases with Seller Support, policy warnings, stock and restock decisions, and keeping the account health dashboard clean. For an established brand it also means someone senior watching the numbers weekly, so a pricing error or a hijacked listing is caught in hours rather than discovered at month end.' },
  { category: 'basics', question: 'Is selling on Amazon worth it in 2026?',
    answer: 'For many established UK brands, yes, as long as the sums are done per product. Amazon UK says most referral fees sit between 8% and 15% of the sale, before FBA, storage and advertising. Products with healthy margin, steady demand and a protectable brand usually earn their place. Low-margin, easily copied products often do not. We work this out SKU by SKU before recommending anything.' },
  { category: 'basics', question: 'What are the downsides of selling on Amazon?',
    answer: 'You give up some control. Amazon owns the customer relationship, sets the fee card, decides on account health, and lets other sellers list against your products unless your brand is protected. Fees stack up across referral, fulfilment, storage and ads. Cash also arrives on Amazon’s payout schedule, not yours. None of this rules Amazon out. It means the channel needs watching like any other wholesale customer.' },
  { category: 'basics', question: 'Which is better, Amazon or Shopify?',
    answer: 'They do different jobs. Amazon brings shoppers who are already searching, at the price of fees and less control. Your own Shopify, WooCommerce or Magento store keeps the customer data and the margin, but you pay to bring traffic in. Most established UK brands run both, with stock and pricing held in one place so the two never contradict each other. We help with either side.' },
  { category: 'basics', question: 'Should we use Seller Central or Vendor Central?',
    answer: 'Seller Central means you sell to shoppers yourself and set the price. Vendor Central means Amazon buys stock from you like a wholesaler and resells it. Most of the UK brands we talk to run Seller Central because they want control of price and stock. Some run both. We work in either, and the right answer depends on your margins, how much control you want and how Amazon approaches you.' },

  // ── VAT, HMRC and EU rules ──
  { category: 'tax', question: 'Do we need to be VAT registered to sell on Amazon UK?',
    answer: 'That is a question for HMRC and your accountant, and we always point clients there. What GOV.UK says is that a UK business must register once taxable turnover passes £90,000 in a rolling 12 months, within 30 days of the end of the month it went over. Amazon sales count towards that turnover like any other sale. The established brands we work with are almost always registered already.' },
  { category: 'tax', question: 'Does Amazon collect VAT for us?',
    answer: 'For a UK-established seller, generally no. HMRC’s marketplace rules make the marketplace liable for VAT on goods in the UK sold by overseas sellers, and on imported consignments of £135 or less. The guidance is written for overseas sellers, so a UK brand normally keeps charging and reporting its own VAT. Confirm your position with HMRC or your adviser. We make sure the numbers reach your books correctly.' },
  { category: 'tax', question: 'Does HMRC get our Amazon sales data?',
    answer: 'HMRC’s digital platform reporting rules say platform operators may need to collect and check seller information and report details of paid sellers to HMRC. There is a small exception for sellers of goods paid 2,000 euros or less from fewer than 30 sales in a year, which will not cover an established brand. The practical point: your Amazon figures and your VAT returns should agree, line for line.' },
  { category: 'tax', question: 'Does Making Tax Digital affect our Amazon sales?',
    answer: 'Yes, through your VAT return. HMRC says all VAT-registered businesses should now be signed up for Making Tax Digital for VAT and file returns through compatible software. Amazon settlements mix sales, refunds, referral fees, FBA fees and ad charges in one payout, so they need splitting before they reach Xero, Sage or QuickBooks. We build that split so your accountant is not unpicking settlement reports by hand.' },
  { category: 'tax', question: 'Can a UK brand sell on Amazon Germany, France and the rest of the EU?',
    answer: 'Yes, and there are two broad routes. You can ship from UK stock, which makes each order an export with its own VAT and customs steps. Or you can hold stock in EU warehouses through Pan-European FBA. Amazon UK lists nine Pan-EU countries, not including the UK, and says you can start with two VAT numbers. Storing goods abroad adds VAT reporting, so take tax advice first.' },
  { category: 'tax', question: 'What is the EU GPSR and do we need an EU responsible person?',
    answer: 'GPSR is the EU General Product Safety Regulation, in effect since 13 December 2024. The UK government’s business guidance says products sold to EU consumers need a Responsible Economic Operator established in the EU or Northern Ireland, such as an authorised representative or a fulfilment provider under agreement. Without one, goods risk being blocked, and online listings must carry key safety information. We add those details to every EU listing.' },
  { category: 'tax', question: 'How does VAT work when we ship Amazon EU orders from the UK?',
    answer: 'HMRC’s VAT Notice 703 says goods sent outside the UK can be zero-rated only if every condition is met, including exporting within the time limit and keeping official or commercial evidence of export. For direct exports the table allows three months for both. The EU buyer’s side then has its own import VAT and duty. Your accountant decides the treatment. We make sure the evidence is stored.' },

  // ── Listings, FBA and systems ──
  { category: 'ops', question: 'Do we need a trademark for Amazon Brand Registry?',
    answer: 'Yes. Amazon UK says you need a pending or registered trademark for your brand name or logo, from a government trademark office in a country that has an Amazon store, and that Brand Registry itself is free. A pending application is enough to start. Amazon says enrolled brands get greater control of listing content and tools to report suspected IP infringement. We prepare the catalogue so enrolment and the clean-up afterwards go smoothly.' },
  { category: 'ops', question: 'What is FBM, and should we use it instead of FBA?',
    answer: 'FBM means Fulfilled by Merchant: you store and ship Amazon orders yourself, or through your 3PL, using couriers such as Royal Mail, DPD or Evri. FBA means Amazon stores, picks and ships for you. Many brands mix them: fast sellers in FBA, bulky, slow or high-value lines on FBM. We model both per SKU using your own sales history before moving any stock.' },
  { category: 'ops', question: 'Why are our FBA fees so high?',
    answer: 'Usually one of three reasons. A product’s packaging pushes it into a bigger size or weight band than it needs. Slow sellers sit in Amazon warehouses for months and collect storage charges. Or returns on one or two lines eat the margin. Amazon publishes its fee card in Seller Central. We match your actual charges against it, product by product, and show which lines to repack, move to FBM or stop.' },
  { category: 'ops', question: 'Can you connect Amazon to Linnworks, Brightpearl or our ERP?',
    answer: 'Yes. This is where we spend a lot of our time. Amazon orders and stock usually need to reach an order hub such as Linnworks, Brightpearl or Mintsoft, and from there an ERP like NetSuite, Dynamics 365 Business Central, Sage 200 or Odoo. Where an off-the-shelf connector does the job we set it up. Where it does not, we build the missing link and you own the code.' },
  { category: 'ops', question: 'Do you run Amazon ads?',
    answer: 'Yes. We structure Sponsored Products, Sponsored Brands and Sponsored Display around the products that make money, then judge them on profit after fees, not on ad sales alone. Advertising sits inside the project, alongside listings and stock, because ads pointed at a weak listing or a product about to run out waste budget. If you already have a good ads team, we can leave ads with them.' },
  { category: 'ops', question: 'Do you also manage eBay UK, OnBuy and other marketplaces?',
    answer: 'Yes. Many UK brands sell across Amazon.co.uk, eBay UK and OnBuy, and some add ManoMano, the B&Q marketplace or Zalando for the right categories. The hard part is keeping stock, prices and product data consistent across all of them. We usually solve that once, in your order hub or ERP, then add channels one at a time so nothing oversells.' },

  // ── Cost and working with us ──
  { category: 'working', question: 'How much does an Amazon agency cost in the UK?',
    answer: 'Models vary. RippleEffect, a UK Amazon consultancy, publishes a monthly retainer sized by catalogue plus sales commission falling from 4% to 1.5% across bands. Its worked example, a brand selling £50,000 a month with about 30 SKUs, comes to £4,250 a month with a £1,500 onboarding fee and a 12-month initial term. The page does not say whether VAT is included. FactoryJet quotes a fixed price in writing after scoping.' },
  { category: 'working', question: 'Which Amazon agency is best in the UK?',
    answer: 'The best one is the one that fits your gap. Havas Market suits brands wanting a large media network. RippleEffect publishes its prices and works on commission. Margin Business targets established brands across the UK, EU and Gulf. FactoryJet fits brands whose problem spans Amazon and the systems behind it: listings and ads, plus Linnworks, Xero or ERP links. Ask each for named people and a sample report.' },
  { category: 'working', question: 'Do we have to sign a long contract?',
    answer: 'No. Each phase is scoped, priced and signed on its own, so you can stop after any of them. You own the listings, the data, any code and the accounts it runs in. Defects in what we build are fixed inside the build price for a cover period agreed before work starts. If you want us to keep running the account afterwards, that is optional, with no monthly minimum.' },
  { category: 'working', question: 'What should we send you to get a quote?',
    answer: 'A short brief is ideal, or your existing RFP if you have one. Tell us which Amazon stores you sell on, roughly how many SKUs, whether you use FBA or FBM, your order hub and accounting system, and what is going wrong. A recent business report export from Seller Central helps. The founder replies within 24 hours, and we quote a fixed price per phase.' },
  { category: 'working', question: 'Can we see some work before we commit?',
    answer: 'Yes. Before you sign, we rewrite a few of your real listings, or show a working order sync on a sample of your own data, so you can judge the work rather than a slide deck. It costs you nothing. Brands that have already been burned by an agency tend to find this the quickest way to decide whether we understand their catalogue and their systems.' },
];

/* ─── Named UK Amazon agencies (open self-disclosure, ItemList). Each note is
       based on the company’s own website, read 2026-10-29. ─────────────── */
const AGENCIES: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. Amazon.co.uk and Amazon EU listings, Brand Registry, FBA and FBM planning and ads, built alongside the links into Linnworks, Brightpearl, Xero, Sage or your ERP. Fixed price per phase, and optional support with no monthly minimum.' },
  { name: 'Havas Market', note: 'Part of the Havas Media Network. Its UK site lists Amazon account management, advertising, listing and SEO work, Amazon DSP, reporting and international expansion consulting.' },
  { name: 'RippleEffect', note: 'A UK and US Amazon growth consultancy covering strategy, operations, PPC and DSP. It publishes its pricing: a catalogue-sized retainer plus a commission on sales that steps down as sales grow.' },
  { name: 'Margin Business', note: 'Describes itself as an Amazon agency for established brands, offering PPC, listings, Amazon SEO, A+ Content, account management and expansion across the US, UK, EU and Gulf marketplaces.' },
  { name: 'PPC Geeks', note: 'A UK paid search agency with a dedicated Amazon Ads service page, suited to brands that want advertising handled by a PPC specialist.' },
];

/* ─── JSON-LD. The Organization is defined once, sitewide; this page only
       references it by @id and never redefines it. ─────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Amazon Agency UK',
      serviceType: 'Amazon Seller Central management, listings, Brand Registry, FBA planning, Amazon advertising, Amazon EU expansion and marketplace integration',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'Amazon agency for established UK brands selling on Amazon.co.uk and Amazon EU. Listings and catalogue, Brand Registry, FBA and FBM planning, advertising, account health, GPSR details for EU listings, and the links from Amazon into order hubs, accounting and ERP systems.',
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
      inLanguage: 'en-GB',
      datePublished: UPDATED,
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
      about: { '@id': `${CANONICAL}#service` },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#agencies`,
      name: 'UK Amazon agencies',
      itemListElement: AGENCIES.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: a.name,
      })),
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
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'Amazon.co.uk and Amazon EU for established UK brands: listings, Brand Registry, FBA, ads and GPSR details, joined to Linnworks, Xero, Sage or your ERP. Fixed price per phase.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/service-ecommerce-order-packing-bench.webp', width: 1200, height: 900, alt: 'Two people at a UK packing bench boxing knitwear orders next to a parcel scale' }],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 11, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;

const STEPS = [
  { n: '01', t: 'Read the account and the numbers', d: 'You give us read access to Seller Central and a recent settlement export. We list every product with its sales, fees, ad spend, returns and stock position, so the conversation starts from profit per SKU rather than revenue.' },
  { n: '02', t: 'Map the systems', d: 'We draw how an Amazon order travels today: into Linnworks, Brightpearl or Mintsoft, out to Royal Mail, DPD or Evri, and into Xero, Sage, QuickBooks or your ERP. Every manual step and every overnight export goes on the map.' },
  { n: '03', t: 'Show you work on your own data', d: 'Before you sign, we rewrite a handful of your real listings or run a sample order sync, so you can judge the work. No charge for this step.' },
  { n: '04', t: 'Scope and price the first phase', d: 'You get a written scope with a fixed price for one phase only. Typical first phases: a catalogue and Brand Registry clean-up, an FBA and FBM split, or the order and settlement link into your books.' },
  { n: '05', t: 'Fix the catalogue', d: 'Titles, bullet points, images, variations, backend search terms and A+ Content, written in British English for Amazon.co.uk, with GTINs and brand details checked so listings stop breaking.' },
  { n: '06', t: 'Set up stock, fulfilment and ads', d: 'Restock rules, the FBA and FBM split, and an ads structure built around the products that earn money after fees. Spend goes on lines that have stock and a listing that converts.' },
  { n: '07', t: 'Join Amazon to your books', d: 'Settlements split into sales, refunds, fees and ad charges with the right VAT codes, so your Making Tax Digital return is built from clean data. Off-the-shelf connector first, custom link only where it falls short.' },
  { n: '08', t: 'Expand into Amazon EU, if it pays', d: 'Translated listings, GPSR responsible person details on each EU listing, and a Pan-European FBA or ship-from-UK plan agreed with your tax adviser before any stock moves.' },
];

export default function AmazonAgencyUKPage() {
  return (
    <>
      <script id="ld-uk-amazon-agency" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-aiagents">
      <main>

        <Breadcrumbs items={crumbs} />

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />UK Amazon Agency</span>
                  <span className="chip">Amazon.co.uk + Amazon EU</span>
                  <span className="chip">Seller Central · FBA</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  You already sell on Amazon.co.uk. Orders drop into Linnworks or Brightpearl, the books live in Xero,
                  Sage or Business Central, and every settlement takes someone half a day to reconcile. Now the board
                  wants Germany and France. FactoryJet fixes the listings, Brand Registry, FBA and ads, and joins Amazon
                  to the systems behind it, so growth on Amazon does not mean more spreadsheets.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses since 2014</span></div>
                  <div className="upd">Last updated<br />29 October 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_amazon_agency_hero" submitLabel="See a draft of my Amazon listings" />
                  <p style={{ fontSize: 13, color: T.n400, marginTop: 10 }}>
                    Working examples on your own listings before you sign. Founder replies within 24 hours.
                  </p>
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/service-ecommerce-order-packing-bench.webp" width={1200} height={900} fetchPriority="high" decoding="async" alt="Two people at a packing bench in a bright stockroom, one boxing a grey jumper, the other checking an order on a phone beside a parcel scale" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What changes</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Profit per SKU</div><div className="scorecard-note">after referral, FBA and ad fees</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Visible</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Settlements in your books</div><div className="scorecard-note">split by VAT code, ready for MTD</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Automatic</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Amazon EU decision</div><div className="scorecard-note">Pan-EU FBA or ship from the UK</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Costed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What does an Amazon agency do for an established UK brand?</span>
              <p>
                An Amazon agency runs the work that decides whether Amazon.co.uk and the EU stores make a profit:
                listings, Brand Registry, FBA stock, advertising and account health. FactoryJet adds the part most
                Amazon agencies leave to you: connecting Amazon orders, stock and settlements to your order hub,
                accounting software and ERP, so the numbers agree everywhere.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Four terms we use a lot</span>
              <p>
                <b>Seller Central</b> is the dashboard where you list and sell to Amazon shoppers yourself.{' '}
                <b>FBA</b> (Fulfilled by Amazon) means Amazon stores, picks and ships your stock;{' '}
                <b>FBM</b> (Fulfilled by Merchant) means you or your 3PL ship it. <b>Pan-European FBA</b> is Amazon’s
                programme for holding stock in several EU countries. A <b>settlement</b> is Amazon’s payout report,
                which mixes sales, refunds and fees in one figure.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              Amazon UK says most of its referral fees sit between 8% and 15% of the sale, with FBA, storage and ads on
              top. On a thin-margin product that can be the whole profit. The brands that do well on Amazon know their
              number for every SKU and act on it every week.
            </p>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (verified only) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '£25', t: 'a month, excluding VAT, for Amazon UK’s Professional selling plan', s: 'Amazon UK', u: SRC.amzPricing.url },
                { v: '8% to 15%', t: 'where most Amazon UK referral fees sit, by category', s: 'Amazon UK', u: SRC.amzPricing.url },
                { v: '£90,000', t: 'taxable turnover in 12 months: the UK VAT registration threshold', s: 'GOV.UK', u: SRC.vatThreshold.url },
                { v: '13 Dec 2024', t: 'EU GPSR in effect: EU sales need a responsible operator in the EU or NI', s: 'business.gov.uk', u: SRC.gpsr.url },
              ].map((r) => (
                <li key={r.t}>
                  <div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.orange }}>{r.v}</div>
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p>
                  <a href={r.u} target="_blank" rel="noopener noreferrer nofollow" style={{ fontFamily: T.fm, fontSize: 10, color: T.n400, textDecoration: 'underline' }}>{r.s}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 4. WHAT WE RUN ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">What we take on</span>
              <h2>Amazon agency services for UK brands, front of house and back office</h2>
              <p className="lead mt-4">
                Most Amazon agencies in the UK stop at the listing and the ad account. Most integration firms never
                open Seller Central. The trouble usually sits between the two, so we cover both.
              </p>
            </div>
            <ul className="col-3 mt-12">
              <li className="svc-card">
                <h3>Catalogue and listings</h3>
                <p className="mt-4">Titles, bullets, images, variations and A+ Content written for Amazon.co.uk shoppers in British English, with GTINs, brand fields and categories checked so listings stop getting suppressed or merged.</p>
              </li>
              <li className="svc-card">
                <h3>Brand Registry and protection</h3>
                <p className="mt-4">Enrolment once your trademark is filed. Amazon UK says registered brands get more control of listing content and tools to report suspected IP infringement and counterfeit listings. We file those reports for you.</p>
              </li>
              <li className="svc-card">
                <h3>FBA, FBM and stock</h3>
                <p className="mt-4">Which lines belong in Amazon’s warehouses and which ship from your own stock or 3PL with Royal Mail, DPD or Evri. Restock rules that stop stockouts on best sellers and storage bills on slow ones.</p>
              </li>
              <li className="svc-card">
                <h3>Amazon ads</h3>
                <p className="mt-4">Sponsored Products, Sponsored Brands and Sponsored Display, structured around products that earn money after fees and reported on profit, not ad sales.</p>
              </li>
              <li className="svc-card">
                <h3>Account health</h3>
                <p className="mt-4">Policy warnings, stranded stock, listing errors and Seller Support cases worked through by someone who reads the account every week, not at month end.</p>
              </li>
              <li className="svc-card">
                <h3>Order hub and ERP links</h3>
                <p className="mt-4">Amazon orders and stock flowing through Linnworks, Brightpearl or Mintsoft into NetSuite, Dynamics 365 Business Central, Sage 200, Sage Intacct or Odoo, without anyone retyping them.</p>
              </li>
              <li className="svc-card">
                <h3>Settlements into the books</h3>
                <p className="mt-4">Amazon payouts split into sales, refunds, referral fees, FBA fees and ad charges with the right VAT codes in Xero, Sage 50 or QuickBooks UK. See our <a href="/uk/shopify-xero-integration">Shopify Xero integration</a> page for how we handle the same job on Shopify.</p>
              </li>
              <li className="svc-card">
                <h3>Amazon EU expansion</h3>
                <p className="mt-4">Germany, France, Italy, Spain and the other EU stores: translated listings, GPSR responsible person details, and a fulfilment plan your tax adviser has signed off.</p>
              </li>
              <li className="svc-card">
                <h3>Other UK marketplaces</h3>
                <p className="mt-4">eBay UK and OnBuy, plus ManoMano, the B&amp;Q marketplace or Zalando where the category fits, all fed from one stock and price source so nothing oversells.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ 5. VAT AND HMRC ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">VAT and HMRC</span>
                <h2>VAT questions UK Amazon sellers ask, and where the answers live</h2>
                <div className="stack mt-6">
                  <p>
                    We are not tax advisers, and every VAT question on this page ends with HMRC or your accountant.
                    What we do is make sure the data they need exists and is right. These are the GOV.UK rules that
                    come up most often on Amazon projects, as written on {READ_ON}.
                  </p>
                  <p>
                    <b>Who charges the VAT.</b> HMRC’s marketplace guidance makes the marketplace liable for VAT on goods
                    in the UK sold by overseas sellers, of any value, and on imported consignments of £135 or less. The
                    guidance is written for overseas sellers. A UK-established brand normally keeps charging and
                    reporting its own VAT on Amazon sales, which is why the settlement split matters.
                  </p>
                  <p>
                    <b>When to register.</b> GOV.UK sets the registration threshold at £90,000 of taxable turnover over
                    the last 12 months, with 30 days to register after the end of the month you went over. Amazon
                    sales count.
                  </p>
                  <p>
                    <b>Making Tax Digital.</b> HMRC says all VAT-registered businesses should now be signed up for
                    Making Tax Digital for VAT and file through compatible software. An Amazon payout is one number
                    hiding dozens of lines. Your software needs those lines.
                  </p>
                  <p>
                    <b>Platform reporting.</b> Under HMRC’s digital platform rules, operators may need to collect and
                    check seller details and report paid sellers to HMRC. Expect your Amazon totals to be compared with
                    your returns.
                  </p>
                </div>
                <p style={srcNote}>
                  Sources, read on {READ_ON}:{' '}
                  <a href={SRC.vatMarketplaces.url} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>{SRC.vatMarketplaces.label}</a>;{' '}
                  <a href={SRC.vatThreshold.url} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>{SRC.vatThreshold.label}</a>;{' '}
                  <a href={SRC.mtdVat.url} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>{SRC.mtdVat.label}</a>;{' '}
                  <a href={SRC.platformReporting.url} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>{SRC.platformReporting.label}</a>.
                </p>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Who answers what</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Do we register, and where?</div><div className="scorecard-note">UK and any EU country</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>HMRC / adviser</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Which VAT code on each line?</div><div className="scorecard-note">sales, refunds, fees</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Your accountant</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Getting those codes into Xero or Sage</div><div className="scorecard-note">every settlement, every time</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>FactoryJet</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Export evidence stored</div><div className="scorecard-note">for orders shipped to the EU</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>FactoryJet</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Amazon totals match the return</div><div className="scorecard-note">checked before filing</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Both of us</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 6. AMAZON EU FROM THE UK ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">Amazon EU from the UK</span>
              <h2>Selling on Amazon Germany, France and the EU from a UK base</h2>
              <p className="lead mt-4">
                Since Brexit there is no single route. A UK brand chooses between shipping from UK stock and holding
                stock inside the EU, and each choice brings different paperwork.
              </p>
            </div>
            <div className="stack mt-8" style={{ maxWidth: 820 }}>
              <h3>1. Ship from the UK</h3>
              <p>
                Every EU order becomes an export. HMRC’s VAT Notice 703 says goods sent outside the UK can be zero-rated
                only if all the conditions are met, including exporting within the time limit and keeping official or
                commercial evidence of export. For a direct export the notice allows three months for each. The buyer’s
                country then charges its own import VAT and duty, which affects your EU price and your returns rate.
              </p>
              <h3 className="mt-4">2. Hold stock in the EU with Pan-European FBA</h3>
              <p>
                Amazon UK lists Germany, France, Italy, Spain, the Netherlands, Poland, Sweden, Belgium and Ireland as
                the Pan-European FBA countries. The UK is not one of them. Amazon says you can start with two VAT
                numbers rather than one in every country you sell to, and warns that storing goods outside your home
                store brings extra VAT reporting. Your adviser decides which registrations you need before any stock
                moves.
              </p>
              <h3 className="mt-4">3. Either way: an EU responsible person</h3>
              <p>
                The EU General Product Safety Regulation has applied since 13 December 2024. The UK government’s
                business guidance says there must be a Responsible Economic Operator established in the EU or Northern
                Ireland for products sold to EU consumers, and that online listings must include key safety
                information. Without one, goods risk being blocked at the border. We add those details to every EU
                listing and keep them consistent with your packaging.
              </p>
            </div>
            <p style={srcNote}>
              Sources, read on {READ_ON}:{' '}
              <a href={SRC.vatExport.url} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>{SRC.vatExport.label}</a>;{' '}
              <a href={SRC.amzFbaEu.url} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>{SRC.amzFbaEu.label}</a>;{' '}
              <a href={SRC.gpsr.url} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>{SRC.gpsr.label}</a>.
            </p>
          </div>
        </section>

        <MidPageCTA
          headline={'Selling on Amazon.co.uk and losing hours to settlements?'}
          sub={'Send us one recent settlement export and tell us which order hub and accounting system you run. On a short call we show where the hours go and what a fixed-price first phase would cover.'}
          label={'Book my Amazon review call'}
        />

        {/* ═══ 7. COMPARISON TABLE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">Side by side</span>
            <h2 style={{ maxWidth: 760 }}>In-house hire vs Amazon-only agency vs PPC freelancer vs FactoryJet</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              Four common ways UK brands staff their Amazon channel. Each suits someone. The rows below are the ones
              that decide whether Amazon stays profitable as it grows.
            </p>
            <div className="card mt-8" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">FactoryJet</th>
                    <th>Amazon-only agency</th>
                    <th>PPC freelancer</th>
                    <th>In-house hire</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Listings and catalogue</td><td className="fj"><span className="yes">Yes</span></td><td><span className="yes">Yes</span></td><td><span className="no">Rarely</span></td><td><span className="partial">Depends on the hire</span></td></tr>
                  <tr><td className="feat">Amazon ads</td><td className="fj"><span className="yes">Yes, judged on profit</span></td><td><span className="yes">Yes</span></td><td><span className="yes">Core skill</span></td><td><span className="partial">Depends on the hire</span></td></tr>
                  <tr><td className="feat">Linnworks, ERP and accounting links</td><td className="fj"><span className="yes">Built and owned by you</span></td><td><span className="no">Usually left to you</span></td><td><span className="no">No</span></td><td><span className="partial">Needs a developer too</span></td></tr>
                  <tr><td className="feat">Amazon EU and GPSR</td><td className="fj"><span className="yes">Planned with your adviser</span></td><td><span className="partial">Varies</span></td><td><span className="no">No</span></td><td><span className="partial">One person’s experience</span></td></tr>
                  <tr><td className="feat">Other UK marketplaces</td><td className="fj"><span className="yes">eBay UK, OnBuy and more</span></td><td><span className="partial">Some do</span></td><td><span className="no">No</span></td><td><span className="partial">If time allows</span></td></tr>
                  <tr><td className="feat">How it is priced</td><td className="fj"><span className="yes">Fixed price per phase</span></td><td><span className="partial">Retainer, often plus commission</span></td><td><span className="partial">Hourly or share of spend</span></td><td><span className="partial">Salary and recruiting</span></td></tr>
                  <tr><td className="feat">Minimum term</td><td className="fj"><span className="yes">None</span></td><td><span className="partial">Varies, ask before signing</span></td><td><span className="partial">Varies</span></td><td><span className="partial">Notice period</span></td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6" style={{ maxWidth: 820 }}>
              These mix well. Plenty of brands keep an in-house Amazon manager for daily trading and bring us in for the
              catalogue rebuild, the EU launch or the link into the books that one person cannot build alone.
            </p>
          </div>
        </section>

        {/* ═══ 8. PROJECT STEPS ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 740 }}>
              <span className="eyebrow">How a project runs</span>
              <h2>Eight steps, from first export to Amazon EU</h2>
              <p className="lead mt-4">
                Most brands do not need all eight at once. We price one phase at a time, and you can stop after any of
                them with everything we built in your hands.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {STEPS.map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.orange, minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ═══ 9. TERMS + BRIEF ASK ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Terms</span>
                <h2>How we work with UK brands on Amazon</h2>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>Work on your data before you sign.</b> Rewritten listings or a working order sync on a sample of your own data, at no charge.</li>
                  <li><b>Fixed price per phase.</b> Each phase is scoped, priced in writing and signed on its own.</li>
                  <li><b>You own everything.</b> Listings, data, any code and repository from day one. Connectors and hosting can run in your own accounts, at cost, with no markup.</li>
                  <li><b>Defects fixed inside the build price</b> for a cover period agreed before work starts.</li>
                  <li><b>Support is optional.</b> If you want us to keep running the account or the links, each change is quoted and approved, with no monthly minimum.</li>
                </ul>
                <div className="mt-8">
                  <ModalCTAButton label="See a draft of my Amazon listings" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Have a brief or an RFP?</span>
                <p style={{ fontSize: 15, marginTop: 8 }}>
                  Send it. A one-page brief is enough. These details let us quote a fixed price quickly:
                </p>
                <ul className="scope-list mt-4">
                  <li>Amazon stores you sell on today, and the ones you want next</li>
                  <li>Roughly how many SKUs, and how many in FBA</li>
                  <li>Your order hub, courier accounts and 3PL</li>
                  <li>Your accounting system and ERP</li>
                  <li>What is going wrong, in your own words</li>
                  <li>A recent Seller Central business report, if you can share one</li>
                </ul>
                <p style={{ fontSize: 13, color: T.n400, marginTop: 12 }}>The founder replies within 24 hours.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 10. PROOF (labelled, not Amazon work) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">UK client work</span>
              <h2>Back-office work for UK sellers, the half of Amazon most agencies skip</h2>
              <p className="lead mt-4">
                Two UK clients whose projects show the systems side of what we do. Neither is an Amazon project. Both
                deal with the same problem an Amazon channel creates: one source of truth for stock and price, and
                buyers who see the right numbers.
              </p>
            </div>
            <ul className="col-3 mt-10">
              <li className="svc-card">
                <h3>GPSUK</h3>
                <p className="mt-4">A UK promotional products supplier. We built its trade storefront on Commerceflo, where business buyers log in, see their own account prices and move from quote to order without retyping. Live, with SEO and AI search work continuing. <a href="/case-studies/gpsuk-promotional-products">Read the GPSUK case study</a>.</p>
              </li>
              <li className="svc-card">
                <h3>Sow Easy</h3>
                <p className="mt-4">A UK wholesale distributor. We are building a WordPress WooCommerce trade store that reads stock, pricing and SKUs from Odoo, so Odoo stays the master record. The Odoo link is being tested on staging and launch is still ahead. <a href="/case-studies/sow-easy-distributor-portal">Read the Sow Easy case study</a>.</p>
              </li>
              <li className="svc-card">
                <h3>Why it matters on Amazon</h3>
                <p className="mt-4">An Amazon channel is one more place stock and price must agree. The same rule applies: pick one master record, usually your ERP or order hub, and make Amazon read from it. For trade buyers alongside Amazon, see <a href="/uk/b2b-ecommerce">B2B ecommerce in the UK</a>.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ 11. MARKET PRICE EXAMPLE + DEMAND ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">What UK Amazon agencies charge</span>
                <h2>A published UK price page, so you can compare quotes</h2>
                <div className="stack mt-6">
                  <p>
                    Few UK Amazon agencies publish prices. RippleEffect does. On {READ_ON} its pricing page described a
                    monthly retainer sized by catalogue, plus commission on ordered product sales in marginal bands: 4%
                    on the first £25,000 a month, 3% up to £75,000, 2% up to £150,000 and 1.5% above. Its worked example,
                    a UK brand selling about £50,000 a month across roughly 30 SKUs, comes to £4,250 a month plus a
                    £1,500 onboarding fee, on a 12-month initial term. The page does not say whether VAT is included.
                  </p>
                  <p>
                    That is one agency’s model, shown here so you can line up other quotes against something concrete.
                    FactoryJet prices differently: a fixed price in writing for each phase, after a short scoping call,
                    with no commission on your sales and no minimum term.
                  </p>
                </div>
                <p style={srcNote}>
                  Source: <a href={SRC.ripplePricing.url} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>{SRC.ripplePricing.label}</a>, read on {READ_ON}. Quoted as a market example, not an endorsement.
                </p>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${T.n200}`, padding: '14px 18px' }}>
                  <span style={{ fontFamily: T.fm, fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: T.n400 }}>UK · Monthly Search Demand</span>
                  <span style={{ background: T.small, color: '#fff', fontFamily: T.fm, fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>DataForSEO</span>
                </div>
                <div style={{ padding: '4px 18px 14px' }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {[
                      { kw: 'sell on amazon uk', v: '1,600', w: '100%', kd: 'Sellers researching the channel' },
                      { kw: 'amazon agency', v: '590', w: '37%', kd: 'The head term' },
                      { kw: 'amazon brand registry uk', v: '390', w: '24%', kd: 'Brands protecting listings' },
                      { kw: 'amazon account management', v: '140', w: '9%', kd: 'Buyer intent' },
                      { kw: 'amazon agency uk', v: '110', w: '7%', kd: 'Buyer intent, UK' },
                      { kw: 'amazon ppc agency', v: '90', w: '6%', kd: 'Ads only' },
                    ].map((r) => (
                      <li key={r.kw} className="demand-row">
                        <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 9, color: T.n400 }}> searches</span></span></div>
                        <div className="demand-bar"><i style={{ width: r.w }} /></div>
                        <div className="demand-kd">{r.kd}</div>
                      </li>
                    ))}
                  </ul>
                  <p style={{ textAlign: 'center', fontFamily: T.fm, fontSize: 10, color: T.n400, marginTop: 10 }}>Source: DataForSEO, Google Ads volumes, United Kingdom, queried 29 October 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 12. AGENCY LIST (self-disclosure, ItemList) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Other options</span>
              <h2>UK Amazon agencies worth talking to</h2>
              <p className="lead mt-4">
                These firms rank in UK search results for Amazon agency queries. Each note is based on what the company
                says on its own website. Talk to two or three and ask each one who will run your account.
              </p>
            </div>
            <ul className="stack mt-10" style={{ maxWidth: 900 }}>
              {AGENCIES.map((a, i) => (
                <li key={a.name} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.orange, minWidth: 30 }}>{i + 1}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{a.name}{a.name === 'FactoryJet' && <span style={{ fontFamily: T.fm, fontSize: 10, background: T.small, color: '#fff', borderRadius: 999, padding: '2px 8px', marginLeft: 8, verticalAlign: 'middle' }}>That is us</span>}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{a.note}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p style={srcNote}>
              Firms named from live UK Google results for amazon agency, amazon agency uk and amazon ppc agency uk, queried 29 October 2026. Notes reflect each company’s own website on that date. Listing is not endorsement.
            </p>
          </div>
        </section>

        {/* ═══ 13. RELATED UK PAGES ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Beyond Amazon</span>
              <h2>Amazon is one channel. Your own store and your systems are the rest.</h2>
              <div className="stack mt-6">
                <p>
                  Most brands we meet on Amazon also run their own store, and the two work best when they share one
                  stock and price record. If the bigger question is which channels deserve your effort, start with our{' '}
                  <a href="/uk/ecommerce-consultant">UK ecommerce consultant</a> review. If your own store needs
                  rebuilding, see <a href="/uk/ecommerce-development">ecommerce development in the UK</a>. For search
                  outside Amazon, see <a href="/uk/ecommerce-seo">UK ecommerce SEO</a>.
                </p>
                <p>
                  Selling into the US as well? Our <a href="/services/amazon-agency">US Amazon agency</a> page covers
                  Amazon.com.
                </p>
              </div>
              <div className="flex-wrap mt-6">
                <a className="city-pill" href="/uk/ecommerce-consultant">Ecommerce consultant UK</a>
                <a className="city-pill" href="/uk/ecommerce-development">Ecommerce development UK</a>
                <a className="city-pill" href="/uk/shopify-xero-integration">Shopify Xero integration</a>
                <a className="city-pill" href="/uk/b2b-ecommerce">B2B ecommerce UK</a>
                <a className="city-pill" href="/uk/ecommerce-seo">Ecommerce SEO UK</a>
                <a className="city-pill" href="/services/amazon-agency">Amazon agency US</a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 14. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>Amazon agency questions UK brands ask us</h2>
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
                  <ModalCTAButton label="Still have a question? Ask the founder →" region="uk" modalVariant="default" btnVariant="secondary-light" />
                  <p>Replies within 24 hours.</p>
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

        {/* ═══ 15. SOURCES ═══ */}
        <section className="sec">
          <div className="wrap">
            <div style={{ maxWidth: 900 }}>
              <span className="eyebrow">Sources</span>
              <h2 style={{ fontSize: 24 }}>Every rule and fee on this page, with the page we read it on</h2>
              <ul className="stack mt-6" style={{ fontSize: 14 }}>
                {Object.values(SRC).map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>{s.label}</a>
                  </li>
                ))}
              </ul>
              <p style={srcNote}>All read on {READ_ON}. We are not tax advisers or lawyers: confirm VAT and product safety questions with HMRC, your accountant or an EU representative.</p>
            </div>
          </div>
        </section>

        {/* ═══ 16. FINAL CTA (the only dark section) ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>Find out where your Amazon channel loses money</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within 24 hours to book a short call about your
              Amazon stores, your systems and what is going wrong, and we show you work on your own listings before
              you sign anything.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="See a draft of my Amazon listings" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/uk/ecommerce-consultant" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See ecommerce consulting</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}
