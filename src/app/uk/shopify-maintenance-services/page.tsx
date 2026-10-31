import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { twinAlternates } from '@/data/hreflangMap';
import '../ai-agents/ai-agents.css';

/* /uk/shopify-maintenance-services, built 2026-10-29.

   Truth rules for anyone editing this file.
   1. Every Shopify, HMRC, ICO and web.dev fact was read on the publisher's
      own page on 29 October 2026 and links to it through the SRC map below.
      Re-read the page before changing a date, a count or a rule.
   2. No FactoryJet price, rate, retainer figure or running-cost number, and no
      market price range either: no UK source we read gave a retainer range we
      could cite. Support is described as optional and quoted in writing.
   3. Client proof is limited to DTF Virginia (Shopify theme build, US; facts as
      on /services/shopify-development), GPSUK (Commerceflo, live) and Sow Easy
      (WooCommerce plus Odoo, tested on Odoo staging, launch still ahead). Each
      card names its platform. Never claim we maintain DTF unless confirmed.
   4. Structure mirrors /uk/ecommerce-consultant (imports, components, CSS,
      schema). The copy is written fresh for this page.
   5. The FAQ schema is generated from FAQ_ITEMS, the same array the visible
      FAQ renders. Never add a second list of questions. */

const CANONICAL = 'https://factoryjet.com/uk/shopify-maintenance-services';
const UPDATED = '2026-10-29';
const PAGE_MODIFIED = '2026-10-31';
const MODIFIED_ON = '31 October 2026';
const READ_ON = '29 October 2026';
const TITLE = 'Shopify Maintenance and Support UK | FactoryJet';
const H1 = 'Shopify Maintenance Services UK for Established Stores';
const DESCRIPTION =
  'Shopify maintenance for UK stores: theme and app upkeep, Xero, Sage and Linnworks links, Shopify deadlines and peak trading checks. No monthly minimum.';

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
  { name: 'Shopify Maintenance Services', url: CANONICAL },
];

/* Sources. One map, used by inline source notes AND the Sources list near the
   foot of the page. Each page was fetched on 2026-10-29 and the supporting
   words read before the claim was written. */
const SRC = {
  shopifySupport: { label: 'Shopify Help Center: contact Shopify Support', url: 'https://help.shopify.com/en/manual/your-account/contact-shopify-support' },
  shopifyThemes: { label: 'Shopify Help Center: updating themes', url: 'https://help.shopify.com/en/manual/online-store/themes/managing-themes/updating-themes' },
  shopifyCollab: { label: 'Shopify Help Center: collaborator accounts', url: 'https://help.shopify.com/en/manual/your-account/users/collaborator-accounts' },
  scriptTags: { label: 'Shopify developer changelog: script tags deprecation', url: 'https://shopify.dev/changelog/online-store-script-tags-deprecation' },
  apiVersions: { label: 'Shopify Dev: API versioning', url: 'https://shopify.dev/docs/api/usage/versioning' },
  webhooks: { label: 'Shopify Dev: troubleshooting webhooks', url: 'https://shopify.dev/docs/apps/build/webhooks/troubleshooting-webhooks' },
  webVitals: { label: 'web.dev (Google): Web Vitals', url: 'https://web.dev/articles/vitals' },
  hmrcDigitalLinks: { label: 'HMRC: VAT Notice 700/22, Making Tax Digital for VAT', url: 'https://www.gov.uk/government/publications/vat-notice-70022-making-tax-digital-for-vat/vat-notice-70022-making-tax-digital-for-vat' },
  hmrcMtdWho: { label: 'GOV.UK: when a business must follow Making Tax Digital for VAT', url: 'https://www.gov.uk/guidance/check-when-a-business-must-follow-the-rules-for-making-tax-digital-for-vat' },
  icoExceptions: { label: 'ICO: storage and access technologies, what are the exceptions?', url: 'https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/what-are-the-exceptions/' },
  /* The three entries below were read on 2026-10-31. */
  shopifyFunctions: { label: 'Shopify Dev: Shopify Functions (read 31 October 2026)', url: 'https://shopify.dev/docs/apps/build/functions' },
  checkoutExt: { label: 'Shopify Dev: checkout UI extensions (read 31 October 2026)', url: 'https://shopify.dev/docs/api/checkout-ui-extensions' },
  webPixels: { label: 'Shopify Dev: web pixels (read 31 October 2026)', url: 'https://shopify.dev/docs/apps/build/marketing-analytics/pixels' },
} as const;
type SrcKey = keyof typeof SRC;
const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',  label: 'Shopify maintenance basics' },
  { key: 'shopify', label: 'Shopify Support and platform changes' },
  { key: 'terms',   label: 'Retainers, terms and cost' },
  { key: 'uk',      label: 'UK systems, tax and data rules' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Shopify maintenance basics ──
  { category: 'basics', question: 'What do Shopify maintenance services cover for a UK store?',
    answer: 'Shopify maintenance is the work that keeps a live store selling once the build team has gone: theme updates merged with your custom code, app clashes untangled, broken buttons and filters fixed, integrations to Xero, Sage or your warehouse kept running, and the store tested before peak trading. Shopify hosts the platform. Everything you added on top of it is yours to look after, and that is the part a maintenance partner takes on.' },
  { category: 'basics', question: 'If Shopify hosts our UK store, does it still need maintenance?',
    answer: 'Yes, if it is a store of any size. Shopify keeps its servers, checkout and security running. It does not look after your theme edits, your third-party apps or the links to your accounting, stock and courier systems. Shopify’s own Help Center says third-party apps are supported by their developers and that coding changes sit outside Shopify Support’s scope. Those are exactly the parts that break on an established store.' },
  { category: 'basics', question: 'What is a Shopify support retainer?',
    answer: 'A retainer is an agreement where the same team looks after your store over months rather than for one project. At FactoryJet it is optional. You can keep a standing allowance of time if you want one, or pay per change, with each change quoted and approved before work starts. There is no monthly minimum unless you ask for one, and the fee does not climb just because time has passed.' },
  { category: 'basics', question: 'Why is my Shopify website not working?',
    answer: 'Start with what changed. Most faults on an established store follow a theme edit, a new app, an app update or a content change, so the change log usually points to the cause within minutes. If nothing changed on your side, check Shopify’s status page for a platform incident. If checkout or payments are failing, treat it as urgent: test an order on a phone, then roll back the latest change while the cause is found.' },
  { category: 'basics', question: 'Can you take over a Shopify store another agency built?',
    answer: 'Yes. This is a common starting point. The first job is an onboarding audit: we back up the live theme, list every app, script, webhook and integration, and note what nobody documented. You end up with a written map of your own store, which is useful even if you later move the work elsewhere. We do not need the previous agency’s help to start.' },
  { category: 'basics', question: 'What happens in the first weeks of Shopify maintenance?',
    answer: 'Onboarding runs in a fixed order. We agree the scope in writing, then you add us as a collaborator with the permissions you choose. Next we put the live theme under version control and list every app, script tag, webhook, API version and integration. Faults touching checkout, payments or order sync get fixed first, with a test order after each fix. Then each Shopify deadline gets a dated plan. The length depends on how many systems your store feeds, and we state it in the scope.' },
  { category: 'basics', question: 'Do you need our Shopify owner password to maintain the store?',
    answer: 'No. Shopify lets you add a collaborator account for a Shopify Partner to work on your store, and the permissions you set control which sections of the store that account can reach. Your owner login and password are never shared. When the work ends, the collaborator account is removed. Your developers, accountant and warehouse partner keep their own logins.' },

  // ── Shopify Support and platform changes ──
  { category: 'shopify', question: 'How do I get support from Shopify itself?',
    answer: 'Through the Shopify Help Center. Shopify says chat is open 24/7 on every plan. Shopify Plus and Retail plans add inbound phone and email support, and Shopify says email tickets typically get a response within 48 hours. Shopify Support does not make outbound phone or video calls on any plan. For store-specific code and third-party apps, you need your developer or the app maker.' },
  { category: 'shopify', question: 'Is there a phone number I can call for Shopify support?',
    answer: 'Only on some plans. Shopify’s Help Center lists inbound phone support for Shopify Plus and Retail, and for POS Pro through the Help Center. Other plans get 24/7 chat, and Shopify does not make outbound calls. If your store is losing orders and you are not on Plus, the faster route is usually your own developer or maintenance partner, who can open the code and roll back a change straight away.' },
  { category: 'shopify', question: 'Will Shopify Support fix our theme code or apps?',
    answer: 'Mostly not. Shopify’s Help Center says that unless you are on Shopify Plus or are a Shopify Partner, Support cannot help with most custom code issues. Apps built by third parties are supported by their developers, and paid third-party themes by their theme developer. Coding changes to free Shopify themes are outside Support’s scope too. A maintenance partner covers the code Shopify will not touch.' },
  { category: 'shopify', question: 'What happens to Shopify script tags in 2026 and 2027?',
    answer: 'Shopify’s developer changelog sets two dates. From 1 October 2026, apps can no longer create or update script tags, though existing ones keep running. From 1 March 2027, Shopify stops injecting script tags into storefronts. Apps must move to app embed blocks, which you switch on in the theme editor, or to web pixels for tracking. We list which of your apps still depend on script tags and plan each switch.' },
  { category: 'shopify', question: 'Why did our integration change behaviour without anyone touching it?',
    answer: 'Often it is an expired API version. Shopify releases a new API version every three months and supports each one for at least 12 months. When an app calls a version that is no longer supported, Shopify does not reject the call. It answers using the oldest supported version instead, which can quietly change the data your stock or accounting link receives. We track the versions your links call.' },
  { category: 'shopify', question: 'Should we update our Shopify theme?',
    answer: 'Usually, but on a draft first. Shopify applies bug and security fixes to themes automatically. Other updates you add yourself, and Shopify says code edits carry over only if they do not conflict with the update, so customised stores often lose changes. Shopify advises saving a copy of customised code before updating. We merge your code into the new version on a draft, test it on desktop and mobile, then publish.' },

  // ── Retainers, terms and cost ──
  { category: 'terms', question: 'How much does Shopify maintenance cost in the UK?',
    answer: 'It depends on the store, so we do not publish a figure. The cost drivers are how many apps and custom features you run, how many systems connect to Shopify (Xero, Sage, Linnworks, Brightpearl, a 3PL, marketplaces), whether you are on Shopify Plus with checkout extensions, and how much new work you want alongside the fixes. FactoryJet quotes the build and any support you choose as fixed prices in writing after a short scoping call.' },
  { category: 'terms', question: 'Is a retainer or pay per fix better for a Shopify store?',
    answer: 'Pay per fix suits a store that changes little: you describe the job, we quote it, you approve it, we do it. A standing allowance of time suits a store with frequent changes or many connected systems, because urgent work starts without waiting for a fresh quote. Either way there is no monthly minimum unless you ask for one, the terms are in writing before work begins, and you can stop.' },
  { category: 'terms', question: 'Are your quotes in pounds, and is VAT included?',
    answer: 'Quotes for UK clients are written in pounds sterling, and the quote shows VAT on its own line where it applies, so your finance team sees the figure before and after VAT. Each phase gets its own fixed price in writing, so a support allowance never hides inside a build price. If a third-party app or tool is needed, it sits in your own account at its list price.' },
  { category: 'terms', question: 'Who owns the code and the store after you work on it?',
    answer: 'You do, from day one. Theme code, custom apps, integration code and documentation all belong to you, and stay in your Shopify account and your code repository. Hosting for any custom link can run in your own cloud account at cost, with no markup. If you end support, nothing is switched off and nothing needs to be handed back, because nothing was ever held by us.' },
  { category: 'terms', question: 'How fast do you respond when the store breaks?',
    answer: 'Urgent faults go through a separate route, so a failed checkout never waits behind a banner change. Checkout, payment and order sync faults always come first. The exact response time for your store is written into the support terms during scoping, matched to the hours you trade. The founder replies to new enquiries within 24 hours.' },
  { category: 'terms', question: 'What should we send before the first call?',
    answer: 'A short brief is enough. Tell us your Shopify plan, roughly how many orders you take a month, the apps you rely on, and the systems the store connects to: accounting, stock, warehouse, couriers and marketplaces. Add the last three things that broke and what you would build next if you had the time. If you already have an RFP or tender document, send that instead and we will answer it point by point.' },

  // ── UK systems, tax and data rules ──
  { category: 'uk', question: 'Can you look after our Xero, Sage or QuickBooks link?',
    answer: 'Yes. On most established UK stores the order flow into accounting is the part that breaks first and costs the most when it does. We can look after connector apps, and custom links that connect Shopify to Xero, Sage, QuickBooks UK, NetSuite, Dynamics 365 Business Central or Odoo through each system’s API. For Xero specifically, our Shopify Xero integration page covers VAT, payouts and stock in detail.' },
  { category: 'uk', question: 'Does Making Tax Digital affect how our Shopify store is maintained?',
    answer: 'It can. GOV.UK says all VAT-registered businesses should now be signed up for Making Tax Digital for VAT. HMRC’s VAT Notice 700/22 says records must be kept digitally and data moved between programs by digital links; copy and paste does not count. If a broken connector leaves your team retyping Shopify sales into the books, that gap matters. We map it, and your accountant confirms the rules.' },
  { category: 'uk', question: 'Do UK cookie rules still need a banner for Shopify analytics?',
    answer: 'Often. The ICO’s guidance describes an exception for storage used solely to collect statistics that improve your service, provided you explain it clearly and give a simple, free way to object. It does not cover advertising. Most stores run marketing pixels too, which still need consent. We check what each app sets; your adviser makes the legal call.' },
  { category: 'uk', question: 'Can you keep Linnworks, Brightpearl or Mintsoft in step with Shopify?',
    answer: 'Yes. Order management and warehouse systems talk to Shopify through webhooks, messages Shopify sends when an order or product changes. Shopify’s developer documentation says a failing webhook is retried up to eight times in four hours, and if failures persist the subscription is removed. After that, orders silently stop arriving. We watch for those failures and fix the endpoint before stock drifts.' },
  { category: 'uk', question: 'Do you support stores selling on Amazon.co.uk, eBay and OnBuy?',
    answer: 'Yes. Marketplace channels add listings, stock and order sync that must stay in step with Shopify, or you oversell. We can look after the connector apps and product data that link Shopify to Amazon.co.uk, eBay UK and OnBuy, plus courier label apps for Royal Mail, DPD and Evri, and payment set-ups with Shopify Payments, Klarna and Clearpay.' },
  { category: 'uk', question: 'Do you only maintain Shopify stores?',
    answer: 'No. Shopify and Shopify Plus are the focus of this page, but the same team works on WooCommerce and Commerceflo stores. We are building Sow Easy’s WooCommerce trade store with Odoo as the master for stock and pricing, and we built GPSUK’s trade storefront on Commerceflo, where our SEO and AI search work continues. If your business runs more than one store platform, one team can look after all of them.' },
];

/* ─── Named UK Shopify support providers (open self-disclosure, ItemList).
       Each note is based on the company’s own website, fetched 2026-10-29
       (Charle added 2026-10-31; every url re-checked that day). ── */
const PROVIDERS: { name: string; note: string; url?: string }[] = [
  { name: 'FactoryJet', note: 'That is us. Shopify and Shopify Plus maintenance with the integration work behind the store: Xero, Sage, Linnworks, marketplaces and couriers. Optional support with no monthly minimum, changes quoted and approved, and you own every line of code.' },
  { name: 'Visualsoft', note: 'Describes itself as the UK’s unified retail agency. Builds Shopify stores, including multi-site migrations, and offers ongoing support from a support desk it says is open 8am to 8pm every day of the year.', url: 'https://www.visualsoft.co.uk/' },
  { name: 'Charle', note: 'A Shopify and Shopify Plus agency with a London office. Its HelpDesk service covers ongoing store maintenance, theme updates, speed work and day-to-day fixes, from a UK-based team.', url: 'https://www.charle.co.uk/services/support-and-maintenance/' },
  { name: 'Pixel Kicks', note: 'A Manchester ecommerce agency that builds, migrates, markets and supports Shopify stores, and also works on WordPress and WooCommerce, with ongoing Shopify support services.', url: 'https://www.pixelkicks.co.uk/services/shopify-support-services/' },
  { name: 'We Manage Web', note: 'A Preston, Lancashire company that manages existing Shopify, WordPress and WooCommerce sites: routine upkeep, quick fixes, speed work and conversion changes.', url: 'https://wemanageweb.co.uk/services/shopify/' },
  { name: 'Envisage Digital', note: 'A Bournemouth agency offering Shopify design, theme and app development, migrations, integrations, SEO, headless builds and Shopify Plus services, alongside Shopify support.', url: 'https://www.envisagedigital.co.uk/shopify-services/shopify-support/' },
];

/* ─── JSON-LD. The Organization is defined once, sitewide; this page only
       references it by @id and never redefines it. ─────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Shopify Maintenance Services UK',
      serviceType: 'Shopify and Shopify Plus maintenance, support retainers, theme and app upkeep, integration maintenance',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'Maintenance and optional support retainers for established UK Shopify and Shopify Plus stores: theme and app updates, bug fixes, Shopify platform changes, integrations with Xero, Sage, Linnworks and marketplaces, and peak trading readiness.',
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
      dateModified: PAGE_MODIFIED,
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
      '@id': `${CANONICAL}#providers`,
      name: 'UK Shopify support and maintenance providers',
      itemListElement: PROVIDERS.map((a, i) => ({
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
  alternates: { canonical: CANONICAL, languages: twinAlternates['shopify-maintenance-services'] },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/shopify-development/shopify-development-og.webp', width: 1200, height: 630, alt: 'A Shopify developer and a UK brand owner reviewing an online shop product page together on a large monitor' }],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 11, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;

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

export default function ShopifyMaintenanceServicesUKPage() {
  return (
    <>
      <script id="ld-uk-shopify-maintenance-services" type="application/ld+json"
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
                  <span className="chip"><span className="dot dot-orange" />Shopify Maintenance UK</span>
                  <span className="chip">Shopify and Shopify Plus</span>
                  <span className="chip">No Monthly Minimum</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  Your Shopify or Shopify Plus store takes real orders, runs a long list of apps and feeds Xero or Sage,
                  Linnworks and your couriers. Whoever built it has moved on. FactoryJet looks after the theme, the apps,
                  Shopify’s platform deadlines and the links behind the shop.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><a href="/about" style={{ textDecoration: 'underline' }}><b>Bhavesh Barot</b></a>, Founder &amp; CEO<br /><span>500+ businesses since 2014</span></div>
                  <div className="upd">Last updated<br />{MODIFIED_ON}</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_shopify_maintenance_hero" service="Shopify Maintenance" submitLabel="Scope my support plan" />
                </div>
                <p className="mt-4" style={{ maxWidth: 560, fontSize: 14, color: T.n400 }}>
                  Each change quoted before work starts. Founder replies within 24 hours.
                </p>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/shopify-development/shopify-development-team.webp" width={1200} height={800} fetchPriority="high" decoding="async" alt="Two colleagues in a bright UK office reviewing a wireframe of an online shop page on a large wall screen" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">How the support works</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Monthly minimum</div><div className="scorecard-note">unless you ask for one</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>None</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Each change</div><div className="scorecard-note">quoted, then approved by you</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Approved</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Code, apps and links</div><div className="scorecard-note">in your accounts from day one</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Yours</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Your password</div><div className="scorecard-note">we work through a collaborator account</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Never shared</div>
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
              <span className="lab">What does a Shopify maintenance partner do for a UK store?</span>
              <p>
                Shopify runs the platform. A maintenance partner looks after everything you added on top: the theme
                code, the apps, the checkout extensions, and the links to accounting, stock, warehouse, courier and
                marketplace systems. The work is fixing what breaks, applying updates safely, meeting Shopify’s
                deadlines before they bite, and testing the store before peak trading.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Three Shopify terms, in plain words</span>
              <p>
                A <b>collaborator account</b> is Shopify’s way of letting an outside partner into your admin with the
                permissions you choose, so no password is shared. A <b>webhook</b> is a message Shopify sends to
                another system when an order or product changes. An <b>app embed block</b> is the newer way an app
                adds code to your theme, switched on in the theme editor.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              The reason established stores need this is dull and specific. Between now and March 2027, Shopify stops
              loading an older kind of app code on storefronts, retires API versions every quarter, and drops any
              webhook that keeps failing. None of these arrive as an error page. They arrive as an order that never
              reached Linnworks, or a tracking pixel that stopped firing in November.
            </p>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (each one sourced) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '1 Mar 2027', t: 'Shopify stops injecting app script tags into storefronts', s: 'Shopify developer changelog', u: SRC.scriptTags.url },
                { v: '12 months', t: 'minimum support for each quarterly Shopify API version, then calls fall forward', s: 'Shopify Dev, API versioning', u: SRC.apiVersions.url },
                { v: '8 retries', t: 'in four hours for a failing webhook, then Shopify removes the subscription', s: 'Shopify Dev, webhooks', u: SRC.webhooks.url },
                { v: '48 hours', t: 'typical response Shopify gives for Plus and Retail email tickets', s: 'Shopify Help Center', u: SRC.shopifySupport.url },
              ].map((r) => (
                <li key={r.t}>
                  <div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.orange }}>{r.v}</div>
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p>
                  <a href={r.u} target="_blank" rel="noopener noreferrer" style={{ fontFamily: T.fm, fontSize: 10, color: T.n400, textDecoration: 'underline' }}>{r.s}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 4. WHAT THE WORK COVERS ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-4060">
            <div>
              <span className="eyebrow">What we look after</span>
              <h2>What Shopify maintenance covers for an established UK store</h2>
              <p className="lead mt-4">
                A store with a few hundred orders a week fails in predictable places. These are the nine areas we
                check on every established store.
              </p>
            </div>
            <ul className="col-2">
              <li className="svc-card">
                <h3>Checkout and payments</h3>
                <p className="mt-4">Shopify Payments, Klarna and Clearpay at checkout, GoCardless for trade accounts, discount rules and delivery rates. After any change to payments, shipping or discounts we place a test order before customers find the fault.</p>
              </li>
              <li className="svc-card">
                <h3>Accounting links</h3>
                <p className="mt-4">The flow of sales, refunds, fees and VAT into Xero, Sage 50, Sage 200, Sage Intacct, QuickBooks UK, NetSuite or Business Central. See our <a href="/uk/shopify-xero-integration">Shopify Xero integration</a> page for how we map payouts.</p>
              </li>
              <li className="svc-card">
                <h3>Stock and warehouse</h3>
                <p className="mt-4">Linnworks, Brightpearl, Mintsoft and 3PL connections, the outside warehouses that pick and pack for you. We watch the webhooks they depend on, so an order never sits unsent because a subscription was dropped.</p>
              </li>
              <li className="svc-card">
                <h3>Couriers and labels</h3>
                <p className="mt-4">Royal Mail, DPD and Evri label printing, tracking emails, cut-off times and returns labels. A broken label link at 3pm on a Friday is a support ticket that cannot wait until Monday.</p>
              </li>
              <li className="svc-card">
                <h3>Marketplaces</h3>
                <p className="mt-4">Amazon.co.uk, eBay UK, OnBuy, ManoMano and the B&amp;Q marketplace. Listings, prices and stock that drift out of step with Shopify lead to oversold orders and marketplace penalties.</p>
              </li>
              <li className="svc-card">
                <h3>Theme updates and code</h3>
                <p className="mt-4">Theme versions merged with your custom code on a draft, tested on desktop and mobile, then published. Layout bugs, broken filters, wrong variants and add-to-basket buttons that do nothing.</p>
              </li>
              <li className="svc-card">
                <h3>App audits</h3>
                <p className="mt-4">Every app listed with what it does, what it costs you and whether a native Shopify feature now does the same job. When an app goes, we remove the code it leaves behind in the theme.</p>
              </li>
              <li className="svc-card">
                <h3>Speed and search health</h3>
                <p className="mt-4">Google’s Core Web Vitals checked after each change, plus redirects for deleted products and broken structured data. Larger programmes move into <a href="/uk/shopify-seo">Shopify SEO</a> work.</p>
              </li>
              <li className="svc-card">
                <h3>Shopify Plus and B2B</h3>
                <p className="mt-4">Checkout extensions, which add custom blocks and logic to Shopify checkout. Shopify Functions, custom code Shopify runs for rules such as a new discount type or a hidden payment option. B2B company accounts and trade price lists kept in step with your ERP, the system that runs your stock, orders and finance. See <a href="/uk/shopify-plus">Shopify Plus</a> and <a href="/uk/b2b-ecommerce">B2B ecommerce</a> for the build side.</p>
                <Sources ids={['checkoutExt', 'shopifyFunctions']} />
              </li>
            </ul>
            </div>
          </div>
        </section>

        {/* ═══ 5. SHOPIFY DEADLINES ═══ */}
        <section className="sec-lg" id="platform-changes">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Shopify’s calendar</span>
                <h2>Shopify platform changes that break stores nobody is watching</h2>
                <div className="stack mt-6">
                  <p>
                    <b>Script tags.</b> Many older apps add their code to your storefront through script tags.
                    Shopify’s changelog says that from 1 October 2026 apps can no longer create or update them,
                    although existing ones keep running. From 1 March 2027 Shopify stops injecting them into
                    storefronts at all. The replacements are app embed blocks, which you switch on in the theme
                    editor, and web pixels for tracking. A web pixel is a small tracking script that Shopify runs in
                    a sealed-off sandbox, so it can record visits without touching the page itself. An app that has not moved by then simply stops working on
                    the page.
                  </p>
                  <p>
                    <b>API versions.</b> Shopify releases a new API version every three months and supports each one
                    for at least 12 months. When a link calls a retired version, Shopify does not reject it. It
                    answers with the oldest version still supported, so a custom Xero or Linnworks link can start
                    receiving data in a different shape with no warning. We log which version each of your links
                    calls and move them before the date.
                  </p>
                  <p>
                    <b>Webhooks.</b> When a webhook to your warehouse or ERP fails, Shopify retries it up to eight
                    times in four hours. If failures persist, Shopify removes the subscription. Nothing on the
                    storefront changes. Orders just stop reaching the system that ships them.
                  </p>
                  <p>
                    <b>Theme updates.</b> Shopify applies bug and security fixes to themes automatically. Other
                    updates you add yourself, and code edits carry over only when they do not conflict, so a heavily
                    customised theme can quietly lose work. Shopify’s advice is to save a copy of customised code
                    first. We go further and keep it under version control.
                  </p>
                </div>
                <Sources ids={['scriptTags', 'apiVersions', 'webhooks', 'shopifyThemes', 'webPixels']} />
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Dates on our watch list</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">1 Oct 2026</div><div className="scorecard-note">apps can no longer create or update script tags</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Passed</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">27 Nov 2026</div><div className="scorecard-note">Black Friday; Cyber Monday is 30 Nov</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Peak</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Every quarter</div><div className="scorecard-note">a new Shopify API version is released</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Rolling</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">1 Mar 2027</div><div className="scorecard-note">script tags stop loading on storefronts</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Plan now</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 6. SHOPIFY SUPPORT VS A PARTNER ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Where the line sits</span>
              <h2>What Shopify Support covers, and where a maintenance partner takes over</h2>
              <p className="lead mt-4">
                Shopify Support is good at Shopify. It is not set up to open your theme code or call the maker of a
                third-party app on your behalf. Here is the line, as Shopify’s own Help Center draws it.
              </p>
            </div>
            <div className="col-2 mt-10" style={{ gap: 20 }}>
              <div className="card">
                <h3>Shopify Support helps with</h3>
                <ul className="scope-list yes-list mt-4">
                  <li>Account and platform questions by chat, 24/7, on every plan</li>
                  <li>Inbound phone and email on Shopify Plus and Retail, with email typically answered within 48 hours</li>
                  <li>Apps made by Shopify</li>
                  <li>Basic troubleshooting on free Shopify themes</li>
                </ul>
              </div>
              <div className="card">
                <h3>Shopify Support does not cover</h3>
                <ul className="scope-list no-list mt-4">
                  <li>Most custom code issues, unless you are on Shopify Plus or are a Shopify Partner</li>
                  <li>Third-party apps and sales channels, which their developers support</li>
                  <li>Paid third-party themes, which the theme developer supports</li>
                  <li>Coding changes to themes, and outbound phone or video calls on any plan</li>
                </ul>
              </div>
            </div>
            <Sources ids={['shopifySupport']} />
          </div>
        </section>

        <MidPageCTA
          headline={'Send us your app list and the last three things that broke.'}
          sub={'Tell us your Shopify plan, your rough monthly order count and the systems your store feeds: Xero or Sage, Linnworks or Brightpearl, couriers and marketplaces. On a short call with the founder we say what we would fix first and how the support would be quoted.'}
          label={'Scope my support plan'}
        />

        {/* ═══ 7. COMPARISON TABLE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">Side by side</span>
            <h2 style={{ maxWidth: 760 }}>Agency support vs freelance developer vs in-house hire vs Shopify Support alone</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              UK merchants keep a Shopify store running in four common ways: an agency, a freelance Shopify expert in
              the UK, an in-house hire, or Shopify Support alone. The table compares them on what decides whether a
              Friday afternoon outage gets fixed.
            </p>
            <p className="md:hidden mt-6" style={{ fontFamily: T.fm, fontSize: 12, color: T.n400 }}>Swipe sideways to see every column.</p>
            <div className="card mt-8" style={{ padding: 0, overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table className="cmp-table" style={{ minWidth: 760 }}>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">Agency support (FactoryJet)</th>
                    <th>Freelance developer</th>
                    <th>In-house developer</th>
                    <th>Shopify Support alone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Theme and custom code</td><td className="fj"><span className="yes">Yes</span></td><td><span className="yes">Yes</span></td><td><span className="yes">Yes</span></td><td><span className="no">Mostly not, below Plus</span></td></tr>
                  <tr><td className="feat">Accounting, stock and courier links</td><td className="fj"><span className="yes">Yes, same team</span></td><td><span className="partial">Depends on the person</span></td><td><span className="partial">Depends on the hire</span></td><td><span className="no">No</span></td></tr>
                  <tr><td className="feat">Cover when one person is away</td><td className="fj"><span className="yes">A team, not one person</span></td><td><span className="no">Single point of failure</span></td><td><span className="partial">Holidays and notice periods</span></td><td><span className="yes">24/7 chat</span></td></tr>
                  <tr><td className="feat">Shopify deadline tracking</td><td className="fj"><span className="yes">Logged per store</span></td><td><span className="partial">Varies</span></td><td><span className="partial">Varies</span></td><td><span className="no">Announced, not applied</span></td></tr>
                  <tr><td className="feat">Speed to start</td><td className="fj"><span className="yes">Days</span></td><td><span className="yes">Fast, if free</span></td><td><span className="no">Months to recruit</span></td><td><span className="yes">Immediate</span></td></tr>
                  <tr><td className="feat">How you pay</td><td className="fj"><span className="yes">Per approved change, or an allowance you choose</span></td><td><span className="partial">Hours used</span></td><td><span className="partial">Salary and benefits</span></td><td><span className="yes">Included in your plan</span></td></tr>
                  <tr><td className="feat">Who owns the code</td><td className="fj"><span className="yes">You, from day one</span></td><td><span className="partial">Check the contract</span></td><td><span className="yes">You</span></td><td><span className="partial">Not applicable</span></td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6" style={{ maxWidth: 820 }}>
              These mix well. Many established stores keep an in-house ecommerce manager for daily changes and bring
              us in for the integrations, the Shopify Plus work and the peak trading checks that one person cannot
              cover alone.
            </p>
          </div>
        </section>

        {/* ═══ 8. TERMS + BRIEF ═══ */}
        <section className="sec-lg dot-grid" id="terms">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Terms</span>
                <h2>How a FactoryJet support arrangement works</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  We publish no retainer prices because two UK Shopify stores rarely need the same support. We do
                  publish the terms.
                </p>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>You own the code and the repository from day one.</b> Theme code, custom apps and integration code live in your Shopify account and your repository.</li>
                  <li><b>Running costs stay in your accounts, at cost.</b> Hosting for a custom link and any paid tools can sit in your own accounts with no markup from us.</li>
                  <li><b>Defects in our own work are fixed inside the build price</b> for a cover period agreed in writing before work starts.</li>
                  <li><b>Support is optional, with no monthly minimum.</b> Each change is quoted and approved before we start, or you choose a standing allowance of time.</li>
                  <li><b>Each phase gets its own fixed price, quoted in writing.</b> Quotes are in pounds sterling, with VAT shown on its own line where it applies.</li>
                </ul>
                <p className="mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet quotes any build, and any support you choose, as fixed prices in writing after a short
                  scoping call. For custom links we can keep managing the servers, APIs and maintenance, so your team
                  does not have to.
                </p>
                <div className="mt-8">
                  <ModalCTAButton label="Scope my support plan" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Send a brief or an RFP</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Shopify plan and order volume</div><div className="scorecard-note">orders a month, number of stores</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>1</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Your app list</div><div className="scorecard-note">a screenshot of the Apps page is fine</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>2</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Connected systems</div><div className="scorecard-note">accounting, stock, 3PL, couriers, marketplaces</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>3</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">The last three faults</div><div className="scorecard-note">what broke and how long it took to fix</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>4</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">A tender document, if you have one</div><div className="scorecard-note">we answer it point by point</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>5</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 9. STEPS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 740 }}>
              <span className="eyebrow">Step by step</span>
              <h2>How we take over the upkeep of a live Shopify store</h2>
              <p className="lead mt-4">
                The first weeks are mostly reading. We would rather find the undocumented Sage link on day three than
                during your busiest week.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Read your brief and agree the scope', d: 'We read what you send, ask what is missing, and agree in writing which stores, apps and systems are in scope and how changes will be quoted.' },
                { n: '02', t: 'Get access the safe way', d: 'We work through a Shopify collaborator account with the permissions you set, so your owner login is never shared, and the account is removed when the work ends.' },
                { n: '03', t: 'Back up and map the store', d: 'The live theme goes under version control. We list every app, script tag, webhook, API version and integration, and note what nobody documented.' },
                { n: '04', t: 'Fix the urgent faults first', d: 'Anything touching checkout, payments or order sync to accounting and the warehouse comes first, with a test order after each fix.' },
                { n: '05', t: 'Plan the Shopify deadlines', d: 'Each app still on script tags and each link on an ageing API version gets a dated plan, so nothing waits for the cut-off.' },
                { n: '06', t: 'Work through approved changes', d: 'You send requests through one queue with a separate urgent route. Each change is quoted, approved, built on a draft or staging copy, tested and published.' },
                { n: '07', t: 'Prepare for peak trading', d: 'Before Black Friday and Christmas we test discounts, checkout, apps and integrations under the offers you plan to run, then hold back risky changes until peak has passed.' },
              ].map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.small, minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Sources ids={['shopifyCollab']} />
          </div>
        </section>

        {/* ═══ 10. UK SPECIFICS ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">UK rules that touch the store</span>
                <h2>Making Tax Digital, cookie rules and speed: what we check on UK stores</h2>
                <div className="stack mt-6">
                  <p>
                    <b>Making Tax Digital for VAT.</b> GOV.UK says all VAT-registered businesses should now be signed
                    up. HMRC’s VAT Notice 700/22 says the records must be kept digitally, and data moving between
                    programs must travel by a digital link, such as an API transfer or a CSV import. HMRC does not
                    count copy and paste. So when the Shopify to Xero or Sage connector breaks and someone starts
                    retyping sales, it is a compliance gap as well as a chore. We fix the link; your accountant
                    confirms the rules.
                  </p>
                  <p>
                    <b>Cookies and analytics.</b> The ICO’s guidance on cookies and similar technologies
                    describes an exception for storage used solely to
                    collect statistics that improve your service, where you explain it clearly and offer a simple,
                    free way to object. The ICO says the exception does not cover online advertising. A typical
                    Shopify store runs both kinds of app, so we list what each one sets and which still sit behind
                    consent. Your legal adviser makes the final call.
                  </p>
                  <p>
                    <b>Speed.</b> Google sets three Web Vitals targets. Largest Contentful Paint, the time until the
                    main content shows, should be 2.5 seconds or less. Interaction to Next Paint, how fast the page
                    reacts to a tap or click, should be 200 milliseconds or less. Cumulative Layout Shift, how much
                    the page jumps while it loads, should be 0.1 or less. Google checks each one at the 75th
                    percentile of page loads, so three visits in four must pass. Apps are the usual reason a store
                    drifts past them, so we re-measure after every app change.
                  </p>
                </div>
                <Sources ids={['hmrcMtdWho', 'hmrcDigitalLinks', 'icoExceptions', 'webVitals']} />
                <p style={srcNote}>We are not tax advisers or lawyers: we map the questions and you confirm them with your accountant or adviser.</p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/shopify-plus/shopify-plus-packing.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A bright UK packing station with parcels, mailers and a laptop showing an order list while an order is packed" style={{ width: '100%', height: 'auto', aspectRatio: '3 / 2', objectFit: 'cover', background: T.n200, borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    The packing bench tells you more about a store’s health than the homepage does. If labels are
                    printed by hand or orders are retyped, a link behind the shop has broken.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 11. PROOF + WHO ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Who we work with</span>
              <h2>Support for established UK merchants, wholesalers and multi-channel brands</h2>
              <p className="lead mt-4">
                FactoryJet was founded in 2014 and has worked with more than 500 businesses, most of them in
                commerce. One Shopify build and two UK trade projects show the work, each labelled with its
                platform.
              </p>
            </div>
            <div className="col-6040 mt-12">
              <ul className="stack">
                {/* DTF Virginia: naming approved 2026-10-29; facts as on /services/shopify-development. */}
                <li className="svc-card"><h3>DTF Virginia (Shopify, United States)</h3><p className="mt-4">A custom Shopify theme for a print shop in Hampton, Virginia that sells DTF transfers, patches and stickers. Buyers build their own gang sheets (one print sheet packed with many designs) at each transfer size, and resellers can sign up for an account. <a href="https://dtfvirginia.com/" target="_blank" rel="noopener noreferrer">See the live store</a>.</p></li>
                <li className="svc-card"><h3>GPSUK (Commerceflo, UK)</h3><p className="mt-4">A UK promotional products supplier. We built its trade storefront on Commerceflo, where business buyers log in, see their own account pricing and move from quote to order. It is live, and our SEO and AI search work for it continues. <a href="/case-studies/gpsuk-promotional-products">Read the GPSUK case study</a>.</p></li>
                <li className="svc-card"><h3>Sow Easy (WooCommerce and Odoo, UK)</h3><p className="mt-4">A UK wholesale client. We are building its WooCommerce trade store with Odoo as the master for stock, pricing and product codes. It is tested against Odoo’s staging system, and launch is still ahead. <a href="/case-studies/sow-easy-distributor-portal">Read the Sow Easy case study</a>.</p></li>
              </ul>
              <div className="card card-top-orange">
                <span className="eyebrow">Stores we take on</span>
                <p className="mt-4">
                  Multi-channel brands, Shopify Plus merchants, trade sellers and stores fresh from a move to
                  Shopify. Each fails in its own place: the marketplace stock sync, a checkout extension deploy that
                  touches every market, a trade price list that no longer matches the ERP, or the redirects after
                  a <a href="/uk/shopify-migration" style={{ textDecoration: 'underline' }}>Shopify migration</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 12. PROVIDERS ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <div>
                <span className="eyebrow">The honest field</span>
                <h2>UK Shopify support and maintenance providers worth knowing</h2>
                <p className="lead mt-4">
                  To compare one Shopify support agency with another, start with these firms. Each appeared in UK
                  Google results for Shopify support and maintenance searches on {READ_ON}. Charle was added on{' '}
                  {MODIFIED_ON}. Each note is based on the
                  company’s own website, linked below. Talk to a few.
                </p>
                <ul className="stack mt-8">
                  {PROVIDERS.map((a, i) => (
                    <li key={a.name} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                      <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.small, minWidth: 30 }}>{i + 1}</span>
                      <div>
                        <h3 style={{ fontSize: 18 }}>{a.name}{a.name === 'FactoryJet' && <span style={{ fontFamily: T.fm, fontSize: 10, background: T.small, color: '#fff', borderRadius: 999, padding: '2px 8px', marginLeft: 8, verticalAlign: 'middle' }}>That is us</span>}</h3>
                        <p className="mt-2" style={{ marginTop: 6 }}>{a.note}</p>
                        {a.url && (
                          <p style={srcNote}><a href={a.url} target="_blank" rel="noopener noreferrer" style={srcLink}>Read on {a.name}’s own site</a></p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
                <p style={srcNote}>Listing is not endorsement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 13. RELATED ═══ */}
        <section className="sec">
          <div className="wrap">
            <p style={{ maxWidth: 820 }}>
              Building or rebuilding rather than maintaining? See <a href="/uk/shopify-development">Shopify development in
              the UK</a>. For US stores, see our <a href="/services/shopify-maintenance-services">Shopify maintenance
              services</a> page. Running a site that is not on Shopify? See our{' '}
              <a href="/uk/website-maintenance">website maintenance for WordPress, Magento and custom UK sites</a>.
            </p>
            <div className="flex-wrap mt-6">
              <a className="city-pill" href="/uk/shopify-development">Shopify development UK</a>
              <a className="city-pill" href="/uk/shopify-plus">Shopify Plus UK</a>
              <a className="city-pill" href="/uk/shopify-migration">Shopify migration UK</a>
              <a className="city-pill" href="/uk/shopify-xero-integration">Shopify Xero integration</a>
              <a className="city-pill" href="/uk/shopify-seo">Shopify SEO UK</a>
              <a className="city-pill" href="/uk/b2b-ecommerce">B2B ecommerce UK</a>
              <a className="city-pill" href="/contact">Contact us</a>
            </div>
          </div>
        </section>

        {/* ═══ 14. SOURCES ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Method</span>
              <h2>Sources, read on {READ_ON}</h2>
              <p className="lead mt-4">
                Every Shopify date, count and support rule, and every HMRC and ICO point on this page, was read on
                the pages below on that day; the three Shopify Dev pages marked 31 October 2026 were read on that
                date. Shopify changes its platform every quarter and regulators update their
                guidance, so open the linked page before you act on a detail.
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

        {/* ═══ 15. FAQ ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2>Shopify maintenance questions from UK merchants</h2>
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

        {/* ═══ 16. FINAL CTA (the only dark section) ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Next step</span>
            <h2>Hand over the upkeep of your Shopify store before peak trading</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within 24 hours to set up a short call about your
              apps and the systems your store feeds. You leave knowing what we would fix first and how the
              support would be quoted. No obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Scope my support plan" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/uk/shopify-development" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See Shopify development</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}
