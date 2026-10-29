import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../ai-agents/ai-agents.css';

/* /uk/headless-shopify-development, built 2026-10-29.

   Truth rules for anyone editing this file.
   1. Every third-party fact (Hydrogen, Oxygen, Storefront API, checkout hand-off,
      Shopify UK plan prices, Core Web Vitals thresholds, CMA price rules, ICO
      cookie guidance, HMRC Making Tax Digital) was read on the publisher's own
      page on 2026-10-29 and links to it through the SRC map below. Re-read the
      page before changing a figure, and update READ_ON.
   2. No FactoryJet price. The only money figures are Shopify's own UK list
      prices and one UK agency's published headless range (Imaginaire), named
      and linked. Neither page says whether VAT is included, and the copy says so.
   3. Client proof: GPSUK (Commerceflo) and Sow Easy (WooCommerce plus Odoo,
      still in build). Neither is Shopify work and the copy never says it is.
   4. Structure mirrors /uk/ecommerce-consultant and /uk/shopify-xero-integration
      (imports, components, CSS, schema). The copy is written fresh for this page.
   5. The FAQ schema is generated from FAQ_ITEMS, the same array the visible FAQ
      renders. Never add a second list of questions. */

const CANONICAL = 'https://factoryjet.com/uk/headless-shopify-development';
const UPDATED = '2026-10-29';
const READ_ON = '29 October 2026';
const TITLE = 'Headless Shopify Development UK: Hydrogen and Next.js | FactoryJet';
const H1 = 'Headless Shopify Development for UK Brands: Hydrogen or Next.js Storefronts on Shopify’s Own Checkout';
const DESCRIPTION =
  'Headless Shopify development for established UK retailers: Hydrogen on Oxygen or Next.js, Shopify checkout kept, Xero, Linnworks and couriers untouched. Fixed quote per phase.';
const IMG = '/images/us/headless-shopify';

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

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Headless Shopify Development', url: CANONICAL },
];

/* Sources. Each page was opened on 2026-10-29 and the supporting words read
   before the claim was written. */
const SRC = {
  hydrogen: { label: 'Shopify Dev: Hydrogen and Oxygen fundamentals', url: 'https://shopify.dev/docs/storefronts/headless/hydrogen/fundamentals' },
  storefrontApi: { label: 'Shopify Dev: Storefront API reference', url: 'https://shopify.dev/docs/api/storefront' },
  cart: { label: 'Shopify Dev: manage a cart with the Storefront API', url: 'https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/cart/manage' },
  analytics: { label: 'Shopify Dev: analytics with Hydrogen and Oxygen', url: 'https://shopify.dev/docs/storefronts/headless/hydrogen/analytics' },
  themeExt: { label: 'Shopify Dev: theme app extensions', url: 'https://shopify.dev/docs/apps/build/online-store/theme-app-extensions' },
  shopifyPricing: { label: 'Shopify UK: pricing', url: 'https://www.shopify.com/uk/pricing' },
  vitals: { label: 'web.dev: Web Vitals', url: 'https://web.dev/articles/vitals' },
  cma: { label: 'GOV.UK (CMA): Providing clear and accurate information about prices, summary', url: 'https://www.gov.uk/government/publications/price-transparency-cma209/providing-clear-and-accurate-information-about-prices-summary' },
  icoCookies: { label: 'ICO: guidance on the use of storage and access technologies', url: 'https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/' },
  icoExceptions: { label: 'ICO: what are the exceptions?', url: 'https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/what-are-the-exceptions/' },
  mtd: { label: 'GOV.UK: software for Making Tax Digital for VAT', url: 'https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-vat' },
  imaginaire: { label: 'Imaginaire (Nottingham): headless Shopify development', url: 'https://www.imaginaire.co.uk/ecommerce/headless-shopify-development/' },
} as const;

type SrcKey = keyof typeof SRC;
const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

/* FAQ source of truth (drives the visible FAQ and the FAQ schema).
   Questions draw on Google People Also Ask and related searches for
   "headless shopify" and "shopify hydrogen", pulled for the United Kingdom on
   2026-10-29 (DataForSEO), plus the questions UK buyers send in briefs. */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Headless Shopify basics' },
  { key: 'cost', label: 'Cost and timeline' },
  { key: 'build', label: 'Apps, checkout and back office' },
  { key: 'uk', label: 'UK rules' },
  { key: 'working', label: 'Working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // Basics
  {
    category: 'basics',
    question: 'What is a headless Shopify store?',
    answer:
      'Headless Shopify means the shop front customers see is a separate website, while Shopify still runs products, stock, orders and checkout behind it. The front end reads data through Shopify’s Storefront API. When a shopper pays, Shopify’s documentation says the cart returns a URL that redirects them through Shopify’s web checkout. Your Liquid theme goes. Your Shopify admin, order flow and back-office connections stay.',
  },
  {
    category: 'basics',
    question: 'What is Shopify Hydrogen?',
    answer:
      'Hydrogen is Shopify’s own framework for headless shops. Shopify’s documentation calls Hydrogen projects React Router apps preconfigured with Shopify features, and says Hydrogen does not ship a component library, so the interface is designed and built for you. Most Hydrogen shops run on Oxygen, Shopify’s edge hosting, which Shopify says is available at no extra charge on paid plans.',
  },
  {
    category: 'basics',
    question: 'Is Shopify Hydrogen good, or should we use Next.js?',
    answer:
      'Both are sound choices for an established brand. Hydrogen is maintained by Shopify, hosts on Oxygen and suits a team that wants one supplier for platform and hosting. Next.js suits a brand that already runs a Next.js marketing site, wants a CMS-led content site with a shop inside it, or hosts on its own cloud account. We recommend one after reading your catalogue, content plan and in-house skills.',
  },
  {
    category: 'basics',
    question: 'Do we need Shopify Plus to go headless?',
    answer:
      'No. Shopify’s Hydrogen documentation lists Oxygen hosting on the Starter, Basic, Grow, Advanced and Plus plans, and on development stores. Moving to Plus is a separate decision about your store’s size and needs. Shopify’s UK pricing page shows Plus starting at £1,800 a month on a monthly plan, read on 29 October 2026. That page does not say whether VAT is added, so check your Shopify bill.',
  },
  {
    category: 'basics',
    question: 'Headless Shopify or a Liquid theme: what changes for our team?',
    answer:
      'Merchandisers keep working in the Shopify admin for products, prices, discounts and orders. What changes is page building. Theme editor sections are gone, so landing pages and content are edited in a headless CMS or in fields we set up for you. Developers work in a code repository instead of the theme editor. We train the team before launch and write down who edits what.',
  },
  {
    category: 'basics',
    question: 'When is headless Shopify the wrong choice?',
    answer:
      'When a good Online Store 2.0 theme already does the job. If your pages are standard product and collection templates, your apps depend on theme blocks and nobody on your side owns code, headless adds cost without a return you can measure. We say so on the first call and point you to theme work on our UK Shopify development page instead.',
  },
  // Cost and timeline
  {
    category: 'cost',
    question: 'How much does headless Shopify development cost in the UK?',
    answer:
      'One UK agency publishes figures. Imaginaire, based in Nottingham, says its headless Shopify projects start from £60k, with most between £80k and £160k, and complex catalogues over 1,000 products at £120k to £250k. Its page does not say whether VAT is included. These are market figures, read on 29 October 2026. FactoryJet quotes a fixed price per phase in writing after a short scoping call.',
  },
  {
    category: 'cost',
    question: 'What drives the price of a headless build up or down?',
    answer:
      'Four things: the number of distinct page templates, the size and messiness of the catalogue, how much content lives in a CMS, and how many storefront features your current apps provide that must be rebuilt, such as reviews, wishlists or bundle builders. Back-office links to Xero, Sage or Linnworks rarely change, because orders still complete in Shopify checkout.',
  },
  {
    category: 'cost',
    question: 'How long does a headless Shopify build take?',
    answer:
      'It depends on templates, catalogue size and the storefront features to rebuild, so we do not publish one number. Every project is split into phases, and each phase is scoped, priced and signed on its own, with its timeline in writing. Phase one usually covers the home, collection, product and cart pages, so you see your real catalogue running early.',
  },
  // Apps, checkout and back office
  {
    category: 'build',
    question: 'Will our Shopify apps still work on a headless store?',
    answer:
      'Back-office apps that read orders and products from the Shopify admin carry on. Storefront widgets are different. Shopify describes theme app extensions, the blocks behind many reviews and ratings apps, as integrating with Online Store 2.0 themes. A headless front end is not a theme, so each widget is rebuilt through the app’s own API or replaced. We list every app in the audit before quoting.',
  },
  {
    category: 'build',
    question: 'Does checkout change on headless Shopify?',
    answer:
      'No. Buyers still pay in Shopify’s checkout. Shopify’s documentation says the cart returns a checkout URL that redirects customers through Shopify’s web checkout, and that a cart carrying a customer token opens a logged-in checkout. Payment methods you already offer at Shopify checkout stay where they are, and orders land in your Shopify admin exactly as today.',
  },
  {
    category: 'build',
    question: 'Will our Xero, Sage, Linnworks or Mintsoft links need rebuilding?',
    answer:
      'Usually not. Those systems read orders, stock and products from the Shopify admin, and a headless front end does not change the admin. Orders still complete in Shopify checkout, so Xero or Sage still receive the same sales, and Linnworks or Mintsoft still see the same orders for Royal Mail, DPD or Evri labels. We test each link on staging before launch to prove it.',
  },
  {
    category: 'build',
    question: 'Can a headless storefront handle a Black Friday spike?',
    answer:
      'Shopify’s Storefront API reference says requests from real buyers are not subject to a fixed request-per-minute limit, and that checkout creation and automated traffic are throttled. So the data layer scales with shoppers. What we test is your own front end and hosting: page caching, image sizes and the third-party scripts that slow a busy sale day.',
  },
  {
    category: 'build',
    question: 'Does headless Shopify improve Core Web Vitals?',
    answer:
      'It can, but it is not automatic. Google’s web.dev guidance sets good thresholds at 2.5 seconds for Largest Contentful Paint, 200 milliseconds for Interaction to Next Paint and 0.1 for Cumulative Layout Shift, measured at the 75th percentile of page loads. A headless build gives you control of every script on the page. Heavy tracking tags can still undo that, so we budget them.',
  },
  {
    category: 'build',
    question: 'Who edits content once the headless store is live?',
    answer:
      'Your marketing team, without a developer. We set up a headless CMS, or structured content fields, so landing pages, banners and buying guides are edited in a visual editor and published on a schedule. Product data stays in Shopify. We agree which system owns each kind of content in writing before the build, so nobody edits the same thing in two places.',
  },
  // UK rules
  {
    category: 'uk',
    question: 'What UK pricing rules must a headless storefront follow?',
    answer:
      'The CMA’s price transparency guidance says the invitation to purchase must give the total price, normally including unavoidable charges, and that mandatory delivery charges must be shown there too. It says hiding additional fees, taxes or other charges is illegal, with fines of up to 10% of turnover or £300,000, whichever is greater. A custom front end has to build those rules in.',
  },
  {
    category: 'uk',
    question: 'Do analytics cookies on a headless Shopify store need consent in the UK?',
    answer:
      'Often yes, with a narrower exception. The ICO updated its draft cookie guidance after the Data (Use and Access) Act and now describes a statistical purposes exception, which needs clear information about the purpose and a simple, free way to object. Marketing tags still need consent. Shopify’s Hydrogen analytics guide says to meet consent rules before tracking starts, and points to its Customer Privacy API and banner.',
  },
  {
    category: 'uk',
    question: 'Does going headless change our VAT records or Making Tax Digital?',
    answer:
      'No. GOV.UK says VAT-registered businesses must use compatible software to keep VAT records and file VAT Returns. Your sales records still come from Shopify orders, because checkout does not move. The route from Shopify into Xero, Sage or QuickBooks stays the same. Your accountant confirms the set-up, and our UK Shopify Xero integration page covers that link.',
  },
  // Working with us
  {
    category: 'working',
    question: 'Can we see something before we sign?',
    answer:
      'Yes. Before a contract, we show working software on your own data. For a headless project that means a draft of your home, collection and product pages running on your real Shopify catalogue, so your team can click through it on a phone and compare it with the live theme before committing to a phase.',
  },
  {
    category: 'working',
    question: 'Who owns the code, and who hosts it?',
    answer:
      'You own the code and the repository from day one. Hosting can run in your own Shopify Oxygen setup or your own cloud account, at cost with no markup. Defects are fixed inside the build price for a cover period agreed before work starts. Support afterwards is optional, each change is quoted and approved, and there is no monthly minimum.',
  },
  {
    category: 'working',
    question: 'Can you work alongside our in-house developers or current agency?',
    answer:
      'Yes. Many UK retailers keep an in-house developer or a marketing agency. We agree the split at scoping: who owns the storefront code, who owns the CMS, who runs paid media tags. Your developers get access to the repository and review rights from the start, so the handover at the end is a formality, not a project of its own.',
  },
  {
    category: 'working',
    question: 'What should we put in a brief or RFP for a headless Shopify build?',
    answer:
      'Your Shopify plan, monthly order volume and catalogue size; every app on the store today; the systems around it, such as Xero, Sage, NetSuite, Linnworks or Mintsoft; the countries and currencies you sell in; your content plan; and any launch date that cannot move. Send it with the form on this page, and we reply with questions or a fixed quote per phase.',
  },
];

/* Liquid theme vs Hydrogen vs Next.js. Every non-FactoryJet cell restates a
   Shopify or web.dev page read on 2026-10-29. */
const COMPARE: { feat: string; liquid: string; hydrogen: string; next: string }[] = [
  {
    feat: 'What it is',
    liquid: 'A Shopify Online Store theme, edited in the theme editor',
    hydrogen: 'A React Router app preconfigured with Shopify features',
    next: 'A Next.js app that reads Shopify through the Storefront API',
  },
  {
    feat: 'Hosting',
    liquid: 'Shopify’s online store',
    hydrogen: 'Oxygen, at no extra charge on paid Shopify plans',
    next: 'Your own cloud account, at cost',
  },
  {
    feat: 'Checkout',
    liquid: 'Shopify checkout',
    hydrogen: 'Shopify checkout, through the cart’s checkout URL',
    next: 'Shopify checkout, through the cart’s checkout URL',
  },
  {
    feat: 'Theme app extensions',
    liquid: 'Supported on Online Store 2.0 themes',
    hydrogen: 'Not a theme: widgets rebuilt through app APIs',
    next: 'Not a theme: widgets rebuilt through app APIs',
  },
  {
    feat: 'Who edits pages',
    liquid: 'Theme editor sections',
    hydrogen: 'A headless CMS or structured content fields',
    next: 'A headless CMS or structured content fields',
  },
  {
    feat: 'Best fit',
    liquid: 'Standard templates, app-heavy stores, no in-house code owner',
    hydrogen: 'Brands that want Shopify for platform and hosting',
    next: 'Content-led brands, an existing Next.js site, own cloud',
  },
];

/* What stays in Shopify when the storefront moves. */
const STAYS: { area: string; stays: string; note: string }[] = [
  { area: 'Products, prices, stock', stays: 'Shopify admin', note: 'Read by the storefront through the Storefront API.' },
  { area: 'Checkout and payment', stays: 'Shopify checkout', note: 'The cart hands the buyer a checkout URL.' },
  { area: 'Orders and refunds', stays: 'Shopify admin', note: 'Created by checkout, exactly as on a theme.' },
  { area: 'Accounts: Xero, Sage, QuickBooks UK', stays: 'Unchanged', note: 'They read Shopify orders, not the theme.' },
  { area: 'Fulfilment: Linnworks, Mintsoft, Brightpearl', stays: 'Unchanged', note: 'Royal Mail, DPD and Evri labels still come from the same orders.' },
  { area: 'Marketplaces: Amazon.co.uk, eBay UK, OnBuy', stays: 'Unchanged', note: 'Channel feeds connect to Shopify or your listing tool, not the front end.' },
  { area: 'Storefront widgets', stays: 'Rebuilt', note: 'Reviews, wishlists and bundle builders move to their apps’ APIs.' },
  { area: 'Page content', stays: 'Moves to a CMS', note: 'Edited by marketing, published on a schedule.' },
];

/* UK agencies seen in Google UK organic results for "headless shopify" and
   "shopify hydrogen" on 2026-10-29 (DataForSEO, location United Kingdom).
   Named so buyers can compare; no claim is made about their work. */
const UK_AGENCIES = ['Vervaunt', 'Swanky', 'Charle', 'Limely', 'CTI Digital', 'Flux', 'RVS Media'];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Headless Shopify Development UK',
      serviceType: 'Headless Shopify development: Hydrogen and Next.js storefronts, Storefront API integration, headless CMS, app replacement, launch and support',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'FactoryJet designs, builds and supports headless Shopify storefronts for established UK retailers and brands, on Hydrogen with Oxygen hosting or on Next.js. Shopify keeps products, orders and checkout, so connections to Xero, Sage, Linnworks, Mintsoft and UK couriers carry on. Each phase is scoped, priced and signed on its own, and the client owns the code from day one.',
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
      about: { '@id': `${CANONICAL}#service` },
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
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'Hydrogen or Next.js storefronts for UK brands on Shopify. Checkout, orders and back-office links stay in Shopify. CMA price rules and UK cookie consent built in.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: `${IMG}/hero-storefront-engineer-two-monitors.webp`, width: 1024, height: 1024, alt: 'A man at a wooden desk facing two monitors, one showing a shop page with shoe tiles and one showing green line charts' }],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 12, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;
const inlineLink = { textDecoration: 'underline', color: T.ink, fontWeight: 600 } as const;

/* Small source line. Every id comes from the SRC map above. */
function Sources({ ids }: { ids: SrcKey[] }) {
  return (
    <p style={srcNote}>
      Sources, read on {READ_ON}:{' '}
      {ids.map((id, i) => (
        <span key={id}>
          {i > 0 ? '; ' : ''}
          <a href={SRC[id].url} target="_blank" rel="noopener noreferrer" style={srcLink}>{SRC[id].label}</a>
        </span>
      ))}
      .
    </p>
  );
}

export default function HeadlessShopifyDevelopmentUKPage() {
  return (
    <>
      <script id="ld-uk-headless-shopify-development" type="application/ld+json"
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
                  <span className="chip"><span className="dot dot-orange" />Headless Shopify UK</span>
                  <span className="chip">Hydrogen or Next.js</span>
                  <span className="chip">Shopify Checkout Kept</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  Your UK store has outgrown its theme. Content pages fight the theme editor, apps stack scripts on
                  every product page, and a second market or a trade catalogue does not fit the templates. Meanwhile
                  Xero or Sage, Linnworks or Mintsoft, and your Royal Mail, DPD and Evri labels all work. FactoryJet
                  rebuilds the front end on Hydrogen or Next.js and leaves Shopify running orders and checkout, so the
                  back office you rely on carries on untouched.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />{READ_ON}</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_headless_shopify_development_hero" service="Headless Shopify Development" submitLabel="See a draft of my store" trustText="Working software on your own data before you sign. Founder replies within 24 hours." />
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src={`${IMG}/hero-storefront-engineer-two-monitors.webp`} width={1024} height={1024} fetchPriority="high" decoding="async" alt="A man at a wooden desk facing two monitors, one showing a shop page with shoe tiles and one showing green line charts" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What moves and what stays</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Storefront and page content</div><div className="scorecard-note">rebuilt on Hydrogen or Next.js</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>New</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Checkout and payments</div><div className="scorecard-note">Shopify’s own web checkout</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Kept</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Xero, Sage, Linnworks, couriers</div><div className="scorecard-note">still read the same Shopify orders</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Untouched</div>
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
              <span className="lab">What is headless Shopify development, and who is it for in the UK?</span>
              <p>
                Headless Shopify development replaces the Liquid theme with a separate front end, usually built on
                Shopify Hydrogen or Next.js, that reads products and carts through Shopify’s Storefront API. Shoppers
                still pay in Shopify’s checkout, so orders, stock and back-office links stay as they are. It suits
                established UK brands with content-heavy sites, several markets or trade catalogues that a theme
                cannot carry.
              </p>
            </div>
            <Sources ids={['storefrontApi', 'cart', 'hydrogen']} />
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Four terms we use a lot</span>
              <p>
                The <b>Storefront API</b> is the door Shopify opens for custom front ends to read products, prices
                and carts. <b>Hydrogen</b> is Shopify’s own framework for those front ends. <b>Oxygen</b> is
                Shopify’s hosting for Hydrogen shops. A <b>headless CMS</b> is a content editor with no fixed page
                design, so the same words can feed the website, emails and apps.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              The hard part of a headless project is rarely the code. It is the list of things a theme gave you for
              free that now need an owner: the reviews widget, the bundle builder, the cookie banner, the delivery
              charge shown on the product page. We write that list before we quote, and every line on it gets a
              decision.
            </p>
          </div>
        </section>

        {/* 3. FACTS BAND (each one sourced) */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '500+', t: 'businesses served by FactoryJet since it was founded in 2014', s: 'About FactoryJet', u: '/about' },
                { v: 'No extra charge', t: 'is how Shopify describes Oxygen hosting for Hydrogen shops on paid plans', s: 'Shopify Dev, Hydrogen fundamentals', u: SRC.hydrogen.url },
                { v: '2.5 s', t: 'is Google’s good threshold for Largest Contentful Paint, at the 75th percentile', s: 'web.dev, Web Vitals', u: SRC.vitals.url },
                { v: '10%', t: 'of turnover, or £300,000 if greater, is the CMA’s maximum fine for hiding charges', s: 'GOV.UK, CMA price guidance', u: SRC.cma.url },
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

        {/* 4. WHAT STAYS IN SHOPIFY */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Your back office</span>
                <h2>What stays in Shopify when the storefront goes headless</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  UK retailers ask this first, and with reason. A typical store has years of work in its accounts
                  link, its warehouse system and its marketplace feeds. Headless changes the pages shoppers see. It
                  does not change where orders are created, because Shopify’s documentation says the cart hands every
                  buyer to Shopify’s web checkout.
                </p>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">The short version</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Orders created in</div><div className="scorecard-note">same place as on a theme</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Shopify</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Accounts and VAT records</div><div className="scorecard-note">Xero, Sage 50, Sage 200, QuickBooks UK</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Same feed</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">ERP and stock</div><div className="scorecard-note">NetSuite, Business Central, Odoo, Brightpearl</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Same feed</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Storefront widgets</div><div className="scorecard-note">reviews, wishlists, bundle builders</div></div><div className="scorecard-val" style={{ color: T.small, fontSize: 14 }}>Rebuilt</div></div>
              </div>
            </div>
            <div className="card mt-10" tabIndex={0} role="region" aria-label="What stays in Shopify" style={{ padding: 0, overflowX: 'auto' }}><table className="cmp-table" style={{ minWidth: 760 }}>
                <thead>
                  <tr>
                    <th>Area</th>
                    <th className="fj">After going headless</th>
                    <th>Why</th>
                  </tr>
                </thead>
                <tbody>
                  {STAYS.map((s) => (
                    <tr key={s.area}>
                      <td className="feat">{s.area}</td>
                      <td className="fj">{s.stays}</td>
                      <td>{s.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={srcNote}>
              We test every one of these on staging before launch. A connection that writes back to the theme, such
              as a stock badge injected by a script, is the kind of thing that shows up there.
            </p>
            <Sources ids={['cart', 'storefrontApi', 'themeExt']} />
          </div>
        </section>

        {/* 5. HYDROGEN VS NEXT.JS VS LIQUID */}
        <section className="sec-lg" id="hydrogen-or-nextjs">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Choosing the stack</span>
              <h2>Hydrogen, Next.js or a Liquid theme: a side-by-side for UK brands</h2>
              <p className="lead mt-4">
                In Google’s UK results on {READ_ON}, “headless shopify” and “shopify hydrogen” drew about 170
                searches a month each (DataForSEO, United Kingdom). The searches next to them were about pricing,
                Liquid versus headless, the Storefront API and Oxygen. This table answers those in one place.
              </p>
            </div>
            <div className="card mt-8" tabIndex={0} role="region" aria-label="Hydrogen, Next.js and Liquid compared" style={{ padding: 0, overflowX: 'auto' }}><table className="cmp-table" style={{ minWidth: 860 }}>
                <thead>
                  <tr>
                    <th>Question</th>
                    <th>Liquid theme</th>
                    <th className="fj">Hydrogen on Oxygen</th>
                    <th>Next.js on your cloud</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((r) => (
                    <tr key={r.feat}>
                      <td className="feat">{r.feat}</td>
                      <td>{r.liquid}</td>
                      <td className="fj">{r.hydrogen}</td>
                      <td>{r.next}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Sources ids={['hydrogen', 'cart', 'themeExt']} />
            <div className="col-6040 mt-12">
              <div className="stack">
                <h3>When we recommend Hydrogen</h3>
                <p>
                  You want one supplier for the commerce platform and the hosting. Shopify’s documentation lists
                  Oxygen on every paid plan from Starter to Plus and says it carries no extra charge, so there is no
                  second hosting contract to manage. Hydrogen is Shopify’s own framework, so the platform and the
                  storefront toolkit come from one place. The current Storefront API version on {READ_ON} was 2026-10.
                </p>
                <h3 className="mt-6">When we recommend Next.js</h3>
                <p>
                  Content is the product as much as the catalogue: buying guides, recipes, lookbooks, trade
                  resources. Or you already run a Next.js marketing site, or your group policy says everything runs in
                  your own cloud account. The shop then sits inside a wider site, still reading Shopify through the
                  Storefront API and still sending buyers to Shopify checkout.
                </p>
                <h3 className="mt-6">When we recommend staying on Liquid</h3>
                <p>
                  Your pages are standard templates, your store relies on theme app blocks and nobody owns code on
                  your side. A strong Online Store 2.0 theme will serve you better, and our{' '}
                  <a href="/uk/shopify-development" style={inlineLink}>UK Shopify development</a> team builds those.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src={`${IMG}/architecture-whiteboard-four-layers.webp`} width={1200} height={896} loading="lazy" decoding="async" alt="A woman drawing four stacked boxes joined by arrows on a whiteboard while a man beside her holds a tablet" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Four layers on one page: the front end, the Storefront API, Shopify checkout and the back office.
                    The scoping call ends with this drawing for your store, with an owner on every box.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. UK RULES THE STOREFRONT MUST CARRY */}
        <section className="sec-lg dot-grid" id="uk-rules">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">UK rules</span>
              <h2>Three UK rules a theme handled for you that a headless front end must build in</h2>
              <p className="lead mt-4">
                A Liquid theme comes with years of settings for prices, banners and tracking. A headless front end
                starts blank, so each rule below becomes a line in the scope with a test against it.
              </p>
            </div>
            <div className="stack mt-10" style={{ maxWidth: 820 }}>
              <h3>Total prices, including delivery, on the product page</h3>
              <p>
                The CMA’s guidance on the Digital Markets, Competition and Consumers Act says the invitation to
                purchase must give the total price, normally including unavoidable charges. It says mandatory
                delivery charges must be included there too, and in the total price when you can reasonably work
                them out. Hiding fees, taxes or other charges is illegal, and fines reach 10% of turnover or
                £300,000, whichever is greater. On a headless build we decide with you where delivery is shown on
                product and collection pages, and we test the prices shoppers see against the checkout total.
              </p>
              <h3 className="mt-6">Cookie consent before tracking starts</h3>
              <p>
                The ICO updated its draft guidance on cookies and similar technologies after the Data (Use and
                Access) Act, and it now explains a statistical purposes exception. That exception needs clear
                information about the purpose and a simple, free way to object. Advertising tags still need consent.
                Shopify’s Hydrogen analytics guide says to meet consent rules before tracking begins, and offers its
                Customer Privacy API and native cookie banner, or a third-party consent tool. We wire the banner,
                Google tags and Meta pixel to the same consent state.
              </p>
              <h3 className="mt-6">VAT records stay where they were</h3>
              <p>
                GOV.UK says VAT-registered businesses must use compatible software to keep VAT records and file VAT
                Returns under Making Tax Digital. Headless does not touch this: orders still complete in Shopify, so
                the route into Xero, Sage or QuickBooks UK is unchanged. If that route needs work, our{' '}
                <a href="/uk/shopify-xero-integration" style={inlineLink}>Shopify Xero integration</a> page covers it.
              </p>
            </div>
            <Sources ids={['cma', 'icoCookies', 'icoExceptions', 'analytics', 'mtd']} />
          </div>
        </section>

        {/* 7. MARKET COST */}
        <section className="sec-lg" id="cost">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Market prices</span>
                <h2>What headless Shopify development costs in the UK, from published figures</h2>
                <div className="stack mt-6">
                  <p>
                    Few UK agencies publish a headless price. One that does is Imaginaire, in Nottingham. On{' '}
                    {READ_ON} its page said headless Shopify projects start from £60k, with most falling between £80k
                    and £160k. It splits them into £60k to £120k for catalogues up to 1,000 products or variants, and
                    £120k to £250k for larger catalogues, data clean-up or features built on top of Shopify. The page
                    does not say whether VAT is included.
                  </p>
                  <p>
                    Platform fees sit on top. Shopify’s UK pricing page showed Advanced at £259 a month billed yearly
                    and Plus starting at £1,800 a month, without saying whether VAT is added. Oxygen hosting for
                    Hydrogen carries no extra charge on paid plans, per Shopify’s documentation.
                  </p>
                  <p>
                    FactoryJet quotes a fixed price per phase in writing after a short scoping call. Phase one is
                    usually the home, collection, product and cart pages on your real catalogue, so you can judge the
                    work before committing to the rest.
                  </p>
                </div>
                <Sources ids={['imaginaire', 'shopifyPricing', 'hydrogen']} />
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">UK agencies in the same search results</span>
                <p style={{ fontSize: 14, marginTop: 8 }}>
                  These UK agencies appeared in Google’s UK organic results for “headless shopify” or “shopify
                  hydrogen” on {READ_ON} (DataForSEO, United Kingdom). Ask each one the questions in the brief section
                  below and compare the answers.
                </p>
                <ul className="scope-list mt-4">
                  {UK_AGENCIES.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline={'Send your app list and catalogue size. We reply with the stack and a phase one quote.'}
          sub={'Tell us your Shopify plan, the apps on your store and the systems around it. On a short call with the founder we say whether Hydrogen, Next.js or a better theme is the right job, and we quote phase one as a fixed price if there is work for us.'}
          label={'See a draft of my store'}
        />

        {/* 8. HOUSE TERMS */}
        <section className="sec-lg dot-grid" id="terms">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Terms</span>
              <h2>How a headless project with FactoryJet works</h2>
            </div>
            <ul className="col-2 mt-8">
              <li className="card"><h3>A draft before you sign</h3><p className="mt-4">Working software on your own data: your home, collection and product pages running on your real Shopify catalogue.</p></li>
              <li className="card"><h3>Fixed price per phase</h3><p className="mt-4">Each phase is scoped, priced and signed on its own. You can stop after any phase with working code in hand.</p></li>
              <li className="card"><h3>You own the code from day one</h3><p className="mt-4">The repository is yours. Hosting can run in your own Oxygen setup or cloud account, at cost, with no markup.</p></li>
              <li className="card"><h3>Defects covered, support optional</h3><p className="mt-4">Defects are fixed inside the build price for a cover period agreed before work starts. Support afterwards is optional, each change is quoted and approved, and there is no monthly minimum.</p></li>
            </ul>
          </div>
        </section>

        {/* 9. BRIEF / RFP */}
        <section className="sec-lg" id="brief">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Send a brief</span>
                <h2>Have a brief or an RFP? Send it, and we answer it line by line</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  The fastest quotes come from written briefs. If you are running a tender, upload your RFP with the
                  form and we reply to every requirement in your format. If you have no brief yet, the list on the
                  right is enough to start.
                </p>
                <div className="mt-8">
                  <ModalCTAButton label="Send my brief" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What to include</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Shopify plan and order volume</div><div className="scorecard-note">orders a month, stores, markets</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>1</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Every app on the store</div><div className="scorecard-note">a screenshot of the apps page is fine</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>2</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Systems around Shopify</div><div className="scorecard-note">Xero, Sage, NetSuite, Linnworks, Mintsoft</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>3</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Channels and payments</div><div className="scorecard-note">Amazon.co.uk, eBay UK, Klarna, Clearpay</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>4</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Content plan and fixed dates</div><div className="scorecard-note">a launch date that cannot move</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>5</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. NUMBERED STEPS */}
        <section className="sec-lg dot-grid" id="how-we-build">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">How we work</span>
              <h2>How we build a headless Shopify store, in seven steps</h2>
              <p className="lead mt-4">
                Steps one to three happen before any contract. Steps four to seven are phases, each with its own
                fixed price.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Audit the store you have', d: 'We list every template, app, script and connection on the live theme, and mark each one keep, rebuild, replace or drop. This list is the scope.' },
                { n: '02', t: 'Draw the four layers', d: 'Front end, Storefront API, Shopify checkout and back office, with an owner for each box and each kind of content. You sign the drawing before anything is built.' },
                { n: '03', t: 'Show a draft on your data', d: 'Before a contract, we show working software on your own data: home, collection and product pages running on your real Shopify catalogue.' },
                { n: '04', t: 'Build phase one', d: 'Core templates, cart and the hand-off to Shopify checkout, with total prices and delivery charges shown the way the CMA guidance asks.' },
                { n: '05', t: 'Rebuild the widgets and content', d: 'Reviews, wishlists, bundles and search through their apps’ APIs, plus the CMS your marketing team will edit in, and the consent banner wired to every tag.' },
                { n: '06', t: 'Test the back office end to end', d: 'Real test orders through checkout into Xero or Sage, Linnworks or Mintsoft, and a courier label from Royal Mail, DPD or Evri, before the domain moves.' },
                { n: '07', t: 'Launch, watch, stay on', d: 'We move the domain, keep redirects for every old URL, and watch Core Web Vitals and orders through the first weeks. Support after that is your choice.' },
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

        {/* 11. UK PROOF (other platforms, labelled) */}
        <section className="sec-lg" id="uk-work">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">UK work on other platforms</span>
              <h2>Commerce we have built for UK businesses</h2>
              <p className="lead mt-4">
                Neither project below is a Shopify build. Both show the part of a headless job that decides whether
                it works: a storefront that reads stock and prices from another system and keeps trade buyers
                ordering.
              </p>
            </div>
            <ul className="col-2 mt-8">
              <li className="card">
                <h3>GPSUK</h3>
                <p className="mt-4">A trade storefront on Commerceflo, where UK business buyers log in, see their own account prices and reorder promotional products. Live, with SEO and AI search work continuing.</p>
                <p className="mt-4"><a href="/case-studies/gpsuk-promotional-products" style={inlineLink}>Read the GPSUK case study</a></p>
              </li>
              <li className="card">
                <h3>Sow Easy</h3>
                <p className="mt-4">A UK wholesale client: a WordPress WooCommerce trade store with Odoo as the source of stock, pricing and SKUs. The Odoo link is still in build and being tested on staging.</p>
                <p className="mt-4"><a href="/case-studies/sow-easy-distributor-portal" style={inlineLink}>Read the Sow Easy case study</a></p>
              </li>
            </ul>
            <p className="mt-8" style={{ maxWidth: 780 }}>
              Related UK pages: <a href="/uk/shopify-plus" style={inlineLink}>Shopify Plus</a>,{' '}
              <a href="/uk/shopify-migration" style={inlineLink}>moving a store to Shopify</a>,{' '}
              <a href="/uk/b2b-ecommerce" style={inlineLink}>B2B ecommerce</a> and{' '}
              <a href="/uk/ecommerce-development" style={inlineLink}>ecommerce development</a>. For US buyers, see{' '}
              <a href="/services/headless-shopify-development" style={inlineLink}>headless Shopify development in the US</a>.
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
                Every price, plan detail, platform behaviour and legal rule on this page was read on the pages below
                that day. Search volumes and the agency list come from DataForSEO, Google UK, pulled the same day.
                Prices and rules change, so open the linked page before you act on a figure.
              </p>
            </div>
            <ul className="col-2 mt-8" style={{ gap: 10 }}>
              {SOURCE_KEYS.map((k) => (
                <li key={k} style={{ fontSize: 14 }}>
                  <a href={SRC[k].url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: T.ink }}>{SRC[k].label}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 13. FAQ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>Headless Shopify questions from UK retailers and brands</h2>
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
                  <p>Bhavesh replies within one business day.</p>
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
            <h2>See your own catalogue on a headless front end before you sign</h2>
            <p className="mt-4">
              Send your name and work email. Bhavesh replies within one business day to set up a short call about
              your Shopify plan, your apps and the systems around your store. You leave knowing whether Hydrogen,
              Next.js or a better theme is the right job.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="See a draft of my store" region="uk" modalVariant="default" btnVariant="primary-light" />
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
