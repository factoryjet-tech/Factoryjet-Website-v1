import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../ai-agents/ai-agents.css';

const CANONICAL = 'https://factoryjet.com/uk/magento';
const UPDATED = '2026-09-24';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. Never hand-copy a
   second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Magento Agency', url: CANONICAL },
];

/* ─── External sources, each fetch-verified 2026-09-24 (HTTP 200, claim
       confirmed in the fetched body) ──────────────────────────────────── */
// fetch-verified 2026-09-24: three-year standard support from GA; 2.4.9 GA 12 May 2026,
// standard support ends 31 May 2029; 2.4.8 ends 31 May 2028; 2.4.6 standard support ended
// 11 Aug 2026; from 1 June 2027 Adobe stops maintaining Cloud environments on unsupported versions.
const SRC_LIFECYCLE =
  'https://experienceleague.adobe.com/en/docs/commerce-operations/release/planning/lifecycle-policy';
// fetch-verified 2026-09-24: full list of released versions and patch dates (2.4.8-p5 and
// 2.4.9 both released 12 May 2026; Adobe recommends the latest security patch per release).
const SRC_VERSIONS =
  'https://experienceleague.adobe.com/en/docs/commerce-operations/release/versions';
// fetch-verified 2026-09-24: Hyvä Theme is "now entirely Open Source and Free", available on
// GitHub under the OSL licence; built with Tailwind CSS and Alpine.js; Hyvä Enterprise adds
// Adobe Commerce support.
const SRC_HYVA = 'https://www.hyva.io/hyva-theme-license.html';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',   label: 'Magento basics' },
  { key: 'versions', label: 'Upgrades, versions & Hyvä' },
  { key: 'hosting',  label: 'Hosting, support & integrations' },
  { key: 'agency',   label: 'Choosing a Magento agency' },
  { key: 'shopify',  label: 'Stay on Magento or move' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Magento basics ──
  { category: 'basics', question: 'What exactly is Magento?',
    answer: 'Magento is ecommerce software you install on your own server to run an online shop. It handles your catalogue, prices, checkout, customer accounts and orders. It is open source, so developers can change almost anything about it. That flexibility is why larger and B2B merchants pick it, and also why it needs a proper development team behind it.' },
  { category: 'basics', question: 'Is Adobe Commerce the same as Magento?',
    answer: 'Mostly, yes. Adobe bought Magento in 2018. The free version is now called Magento Open Source and the paid, licensed version is called Adobe Commerce. They share the same core code and version numbers. Adobe Commerce adds features such as B2B tools, advanced promotions and Adobe’s own support, plus an optional Adobe-run cloud hosting setup.' },
  { category: 'basics', question: 'Does anyone still use Magento?',
    answer: 'Yes, plenty of UK merchants do, especially B2B wholesalers, manufacturers and retailers with big or complicated catalogues. Adobe is still shipping new versions: 2.4.9 came out on 12 May 2026, with standard support running to May 2029. What has changed is that small, simple shops have mostly moved to hosted platforms like Shopify.' },
  { category: 'basics', question: 'Is Magento end of life?',
    answer: 'Magento 1 is, and has been for years. If you are still on it, you are running software with no security fixes. Magento 2 is not end of life. Adobe publishes support dates for every 2.4.x release line, and each one gets three years of standard support from its release. Older 2.4 lines are running out, so check yours.' },
  { category: 'basics', question: 'Is Magento still free?',
    answer: 'Magento Open Source is still free to download and use. Running it is not free, though. You pay for hosting, extensions, and the developers who keep it patched, upgraded and working. Adobe Commerce, the paid edition, needs a licence from Adobe on top. So the software is free, but a well-run Magento store never is.' },
  { category: 'basics', question: 'What does a Magento developer do?',
    answer: 'A Magento developer builds and maintains Magento stores. Day to day that means applying security patches, upgrading versions, writing custom modules, fixing broken extensions, connecting the store to other systems like an ERP, and making pages load faster. A senior Magento developer also decides what not to build, which saves you more than the code they write.' },
  { category: 'basics', question: 'What are the disadvantages of Magento?',
    answer: 'It needs real engineering to run well. You own the hosting, the security patches and the upgrades. Extensions from different vendors can clash. The standard front end is slow unless you rebuild it, often with Hyvä. And good Magento developers are harder to find than Shopify ones. None of that is fatal, but it is why agency choice matters so much.' },
  { category: 'basics', question: 'Is Magento difficult to learn and use?',
    answer: 'For the people running the shop day to day, the admin panel is learnable in a few days: products, orders, promotions and customers. For developers it is one of the harder ecommerce platforms. It has a large, layered codebase and its own way of doing things. That learning curve is why a generalist PHP developer often struggles on a Magento 2 store.' },

  // ── Upgrades, versions & Hyvä ──
  { category: 'versions', question: 'What is the latest version of Magento?',
    answer: 'On Adobe’s own release list, the newest release line is 2.4.9, released on 12 May 2026, with standard support until 31 May 2029. The 2.4.8 line is still supported until 31 May 2028 and got its latest security patch the same day. If you are on 2.4.6 or older, your standard support has already ended.' },
  { category: 'versions', question: 'How do I upgrade Magento 2 to the latest version?',
    answer: 'Start with an audit, not the upgrade button. List every extension and custom module, check each one works with the target version, and confirm your server’s PHP and database versions are supported. Then upgrade on a copy of the site, test checkout, payments and integrations properly, and only then deploy to live, ideally at a quiet trading hour.' },
  { category: 'versions', question: 'What happens if I stay on an unsupported Magento version?',
    answer: 'You stop getting security fixes, so every new vulnerability stays open on your store. Payment providers and insurers take that seriously. If you run Adobe Commerce on Adobe’s cloud, it is stricter: from 1 June 2027 Adobe says it will stop maintaining cloud environments on unsupported versions and may suspend traffic, which takes the store offline.' },
  { category: 'versions', question: 'What is Hyvä?',
    answer: 'Hyvä is a replacement front end, or theme, for Magento 2. The theme is the part shoppers see: pages, menus, product listings. Magento’s original theme is heavy and slow. Hyvä strips it back using modern tools called Tailwind CSS and Alpine.js, so pages ship far less code to the browser and load much faster, especially on phones.' },
  { category: 'versions', question: 'Is the Hyvä theme free?',
    answer: 'Yes. Hyvä made its theme open source and free, available on GitHub under the OSL licence. Some Hyvä products are still paid, such as Hyvä Checkout, Hyvä UI and Hyvä Enterprise, which adds support for Adobe Commerce-only features. The real cost of Hyvä is the build work, because every extension on your store needs a Hyvä-compatible version.' },
  { category: 'versions', question: 'How long does a Hyvä rebuild take?',
    answer: 'It depends mostly on your extensions. A store with a tidy set of popular extensions that already have Hyvä compatibility modules moves quickly. A store with years of custom front-end code and niche extensions takes longer, because each one needs rebuilding or replacing. We give you a real timeline after the health check, once we have counted what is there.' },
  { category: 'versions', question: 'What is a Magento extension, and why do they cause so many problems?',
    answer: 'An extension, also called a module, is an add-on that gives Magento a new feature, like a payment method or a product filter. Most stores collect dozens over the years, from different vendors, some abandoned. They can conflict with each other, slow pages down and block upgrades. Removing the ones you no longer need is often the cheapest speed and security win.' },

  // ── Hosting, support & integrations ──
  { category: 'hosting', question: 'What does Magento hosting need?',
    answer: 'Magento needs more than cheap shared hosting. Look for a PHP and database version supported by your exact Magento release, OpenSearch for catalogue search, Redis for caching, Varnish for full-page caching, a CDN, a separate staging site, and daily backups you have actually tested restoring. A UK or nearby European data centre helps page speed for UK shoppers.' },
  { category: 'hosting', question: 'Do you provide Magento hosting in the UK?',
    answer: 'No. We are not a hosting company and we do not resell servers. We work with your existing host, or help you choose a specialist Magento host if yours is struggling. Keeping hosting separate from development means you are never locked to one supplier, and it gives you an honest second opinion when the host and the code blame each other.' },
  { category: 'hosting', question: 'Which Magento hosting is best?',
    answer: 'The best Magento hosting is the one set up for Magento specifically, with a support team that knows the platform. Generic web hosts often struggle with its memory, caching and search needs. Ask any host whether they support your Magento version, offer staging and Varnish, and will help during an upgrade. Those answers tell you more than a price list.' },
  { category: 'hosting', question: 'Where can I find Magento support in the UK?',
    answer: 'From a Magento agency that offers an ongoing support retainer, not just build projects. Good Magento support covers security patching, monitoring, bug fixes, small improvements and a named team who already know your store. We run Magento support and maintenance for UK merchants remotely, with the same senior developers on your account every month.' },
  { category: 'hosting', question: 'Which systems can you integrate with Magento?',
    answer: 'The ones UK merchants usually run alongside it: accounting and ERP systems such as Sage, Microsoft Dynamics 365 Business Central and NetSuite, order and inventory tools like Brightpearl and Linnworks, Akeneo for product data, Klaviyo for email, and payment gateways. If a system has an API, a Magento integration is normally possible. We confirm yours during the health check.' },
  { category: 'hosting', question: 'Can you add AI to a Magento store?',
    answer: 'Yes. We build custom AI agents that connect to Magento, for example answering order status questions from live order data, helping staff find products, or drafting product descriptions from your own attributes. They are built for your store and you own them. Our UK AI agents page covers how we approach that work in more detail.' },

  // ── Choosing a Magento agency ──
  { category: 'agency', question: 'Which Magento agencies are there in the UK?',
    answer: 'There are many, from large Adobe partners to small specialists. Names that show up often in UK searches include Envisage Digital, Develo, PushON, Scandiweb, Chilli Apple, magic42 and Deploy eCommerce. We list them further up this page with a short note on each. The right one depends on whether you need a big build or senior, ongoing support.' },
  { category: 'agency', question: 'What are the best Magento agencies?',
    answer: 'The best Magento agency for you is one that has kept stores like yours running for years, not just launched them. Ask to speak to a client they have supported for more than two years. Ask who applies security patches and how fast. Ask how they decide whether to add an extension or write custom code. Good agencies answer those plainly.' },
  { category: 'agency', question: 'How much does a Magento agency cost?',
    answer: 'It depends on the shape of the work. A one-off health check is small. An ongoing support retainer depends on how many hours of senior time you need each month. An upgrade or Hyvä rebuild depends on your extensions and custom code. We scope and quote after a health check rather than guessing, because two stores on the same version can differ hugely.' },
  { category: 'agency', question: 'Should I hire a freelance Magento developer or an agency?',
    answer: 'A good freelancer is fine for small, well-defined jobs. The risk is cover: when they are ill, on holiday or busy with another client, nobody else knows your store, and Magento problems rarely wait. An agency gives you more than one person who knows your codebase, plus code review. For a store that earns real money, that cover matters.' },
  { category: 'agency', question: 'Are you an Adobe partner?',
    answer: 'We do not claim Adobe partner status. We are an independent Magento and Adobe Commerce agency: a team of senior ecommerce engineers who support, upgrade and integrate Magento Open Source and Adobe Commerce stores. If a formal Adobe partnership is a requirement for your procurement, we will say so upfront rather than waste your time. Many merchants care more about who actually does the work.' },
  { category: 'agency', question: 'Do you work outside London?',
    answer: 'Yes. We work with merchants across the UK, from London and the South East to Manchester, Birmingham, Leeds and Scotland. Magento support, upgrades and integrations are done remotely, with regular video calls and a shared ticket board. You get the same senior Magento developers wherever you are, and nobody has to visit your office to patch a server.' },
  { category: 'agency', question: 'Can you take over a Magento store another agency built?',
    answer: 'Yes, and it is most of what we do. We start with a health check: code review, extension audit, version and hosting check, and a list of risks in priority order. Then we take over support once access and documentation are handed across. If the previous agency has gone quiet, we can usually recover access through your hosting account.' },

  // ── Stay on Magento or move ──
  { category: 'shopify', question: 'Which platform is better for my business, Magento or Shopify?',
    answer: 'Shopify is usually better if you want less technical responsibility and your catalogue and pricing are fairly standard. Magento is usually better if you have complex B2B pricing, very large or configurable catalogues, several stores on one back end, or custom logic you cannot give up. We build on both, so we have no reason to push you either way.' },
  { category: 'shopify', question: 'Should I move from Magento to Shopify?',
    answer: 'Move if Magento’s running costs and upgrade work are outgrowing what the flexibility earns you, and your needs fit Shopify or Shopify Plus. Stay if your store depends on complex rules Shopify cannot handle without heavy workarounds. A health check answers this properly. Sometimes the right answer is to fix Magento first and decide later, with better information.' },
  { category: 'shopify', question: 'How much does it cost to migrate from Magento to Shopify?',
    answer: 'It depends on catalogue size, how much custom Magento functionality has to be rebuilt as Shopify apps, how many integrations need rewiring, and whether you want a new design. A data-only move is a very different job from a full replatform with an ERP connection. We scope it after an audit and explain the trade-offs before quoting.' },
  { category: 'shopify', question: 'Will I lose my Google rankings if I leave Magento?',
    answer: 'You should not, if the migration is done carefully. That means mapping every old URL to its new one with permanent redirects, keeping page titles and content that rank, and checking nothing important disappears. Most ranking losses after a migration come from missed redirects. We treat the redirect map as a core deliverable, not an afterthought.' },
];

/* ─── Named UK Magento agencies (open self-disclosure, ItemList) ─────
   Each note is based on the company's own homepage, fetched 2026-09-24.
   Foundation Commerce, Tom&Co and Paul Rogers were dropped: their sites
   blocked or failed our fetch, so we could not verify a note. */
const MAGENTO_AGENCIES: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. Senior engineers who support, patch, upgrade and integrate Magento 2 and Adobe Commerce stores, rebuild front ends on Hyvä, and stay on after launch. We also build on Shopify, so our advice on staying or moving is not tied to one platform.' },
  { name: 'Envisage Digital', note: 'A Bournemouth-based ecommerce agency that describes itself as specialising in Magento (Adobe Commerce) development, integrations and digital marketing, and as a certified Magento and Hyvä agency.' },
  { name: 'Develo', note: 'A Birmingham Magento agency building custom B2B and B2C sites, with Hyvä, Adobe Commerce development, migrations and upgrades, integrations, and support among its listed services.' },
  { name: 'PushON', note: 'A Manchester agency that says it designs, builds and optimises Adobe Commerce and Magento platforms for retailers and B2B businesses, including Hyvä development and retainer contracts.' },
  { name: 'Scandiweb', note: 'A large international ecommerce agency, established in 2003, that says it runs the world’s largest team of certified Magento developers, alongside Adobe Commerce, Shopify and digital marketing work.' },
  { name: 'Chilli Apple', note: 'A UK web development company with offices in London and Kent, offering Magento and Hyvä theme development alongside Shopify, WooCommerce and mobile app work.' },
  { name: 'magic42', note: 'A Birmingham B2B ecommerce agency working on Magento, Adobe Commerce, Shopify, WooCommerce and Hyvä, including ERP integrations, and describing itself as born from a retailer.' },
  { name: 'Deploy eCommerce', note: 'A Stoke-on-Trent Magento and marketing agency that describes itself as an Adobe Solution Partner and Hyvä Silver Partner, offering Magento support, development and Hyvä themes.' },
];

/* ─── JSON-LD ────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Magento Agency UK',
      serviceType: 'Magento and Adobe Commerce support, maintenance, upgrades, Hyvä front-end rebuilds and integrations',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'Magento agency in the UK. Senior Magento and Adobe Commerce developers for support, security patching, version upgrades, Hyvä rebuilds, extension clean-up and ERP, PIM and payment integrations.',
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
      name: 'Magento Agency UK | Adobe Commerce Developers | FactoryJet',
      headline: 'Magento Agency UK: Senior Magento and Adobe Commerce Developers Who Stay After Launch',
      inLanguage: 'en-GB',
      datePublished: '2026-09-24',
      dateModified: UPDATED,
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
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#agencies`,
      name: 'UK Magento and Adobe Commerce agencies',
      itemListElement: MAGENTO_AGENCIES.map((a, i) => ({
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
  title: 'Magento Agency UK | Adobe Commerce Developers | FactoryJet',
  description:
    'FactoryJet is a UK Magento agency. Senior Magento and Adobe Commerce developers for support, upgrades, Hyvä rebuilds and integrations. We stay after launch.',
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: 'Magento Agency UK | Adobe Commerce Developers | FactoryJet',
    description:
      'A UK Magento agency for merchants already on Magento 2 or Adobe Commerce. Senior developers for support, security patching, version upgrades, Hyvä front-end rebuilds, extension clean-up and ERP integrations. Free Magento health check.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/magento/magento-og.webp', width: 1200, height: 630, alt: 'Magento agency UK, FactoryJet, a senior developer reviewing an ecommerce admin' }],
  },
  robots: { index: true, follow: true },
};

export default function MagentoUKPage() {
  return (
    <>
      <script id="ld-uk-magento" type="application/ld+json"
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
                  <span className="chip"><span className="dot dot-orange" />UK Magento Agency</span>
                  <span className="chip">Magento 2 &amp; Adobe Commerce</span>
                  <span className="chip">Hyvä Rebuilds</span>
                </div>
                <h1>Magento Agency UK: Senior Magento and Adobe Commerce Developers Who Stay After Launch</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet is the Magento team for UK merchants already running Magento 2 or Adobe Commerce.
                  We support, patch and upgrade your store, rebuild slow front ends on Hyvä, clear out the
                  extensions dragging it down, and connect it to the systems you run: Sage, Business Central,
                  NetSuite, Brightpearl, Linnworks, Akeneo and Klaviyo. Then we stay.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ projects delivered</span></div>
                  <div className="upd">Last updated<br />24 September 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_magento_hero" submitLabel="Get my free Magento health check" />
                </div>
              </div>

              <div>
                <div className="card" style={{ padding: 8 }}>
                  <img src="/images/uk/magento/magento-hero.webp" width={1400} height={933} fetchPriority="high" decoding="async" alt="A senior Magento developer in a bright UK office with a store product grid on screen and code open on a laptop beside her" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                </div>
                <div className="card card-top-orange mt-6">
                  <span className="eyebrow">What we take on</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Magento support &amp; maintenance</div><div className="scorecard-note">patching, monitoring, fixes</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Monthly</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Version upgrades</div><div className="scorecard-note">to a supported 2.4.x line</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Planned</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Hyvä front-end rebuilds</div><div className="scorecard-note">faster pages, fewer moving parts</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Built</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Code and access ownership</div><div className="scorecard-note">nothing held back by us</div></div>
                    <div className="scorecard-val" style={{ color: 'var(--green)', fontSize: 15 }}>100% yours</div>
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
              <span className="lab">What does a Magento agency in the UK actually do?</span>
              <p>
                A Magento agency keeps a Magento or Adobe Commerce store secure, current and fast. The work is
                applying security patches, upgrading to a supported version, fixing and removing extensions,
                speeding up the front end (often with Hyvä), and connecting the store to your ERP, stock and email
                systems. FactoryJet does this for UK merchants, with senior developers who stay after launch.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">And is Magento still worth being on in 2026?</span>
              <p>
                For the right store, yes. Adobe shipped Magento 2.4.9 on 12 May 2026 with standard support to
                31 May 2029. Magento still suits complex B2B pricing, big configurable catalogues and several
                stores on one back end. It does not suit a merchant who wants zero technical responsibility.
                That merchant is usually better off on Shopify, and we will say so.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              Most Magento stores we are asked to look at do not have a platform problem. They have an
              ownership problem. The agency that built the site moved on, three different freelancers have
              added extensions since, nobody has applied a security patch in months, and the version is quietly
              drifting out of support. That is fixable. It just needs a senior team that treats your store as a
              long-term job, not a launch.
            </p>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (verified only) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '3 years', t: 'of standard support Adobe gives each Adobe Commerce release line, counted from its release date', s: 'Adobe lifecycle policy', u: SRC_LIFECYCLE },
                { v: '2.4.9', t: 'the newest release line, out 12 May 2026, supported until 31 May 2029', s: 'Adobe released versions', u: SRC_VERSIONS },
                { v: '11 Aug 2026', t: 'the date standard support ended for the 2.4.6 line. Older lines have already lost it too', s: 'Adobe lifecycle policy', u: SRC_LIFECYCLE },
                { v: 'Free', t: 'the Hyvä theme is now open source and free, released under the OSL licence', s: 'Hyvä theme licence', u: SRC_HYVA },
              ].map((r) => (
                <li key={r.v} className="card" style={{ padding: '16px 18px' }}>
                  <div style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: 24, color: 'var(--orange)' }}>{r.v}</div>
                  <p style={{ fontSize: 13, color: 'var(--ink)', marginTop: 4 }}>{r.t}</p>
                  <a href={r.u} target="_blank" rel="noopener noreferrer nofollow" style={{ fontFamily: 'var(--fm)', fontSize: 10, color: 'var(--n400)', textDecoration: 'underline' }}>{r.s}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 4. LISTICLE: SEVEN SIGNS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 740 }}>
              <span className="eyebrow">Before you call anyone</span>
              <h2>Seven signs your Magento store needs a senior team</h2>
              <p className="lead mt-4">
                None of these is an emergency on its own. Three or more together usually means the store is
                being kept alive rather than looked after. Here is what we see most often when UK merchants
                come to us looking for new Magento developers.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'You do not know which version you are on', d: 'Or you know, and it is 2.4.6 or older, which means standard support has already ended. Every security issue found from here on stays open on your store unless someone patches around it.' },
                { n: '02', t: 'Security patches arrive and nobody applies them', d: 'Adobe releases security patches on a regular cycle. If yours sit waiting for weeks because each one breaks something, the real problem is the code underneath, and that is what needs fixing.' },
                { n: '03', t: 'Every small change takes a fortnight', d: 'A new banner or a checkout tweak should not need a sprint. Slow changes usually mean tangled custom code and no proper staging site, so every edit is a risk to the live store.' },
                { n: '04', t: 'You have more extensions than anyone can explain', d: 'An extension is an add-on that gives Magento a new feature. Stores collect dozens over the years. Some clash, some are abandoned by their makers, and some you stopped using long ago but still load on every page.' },
                { n: '05', t: 'Pages are slow on a phone', d: 'The original Magento front end ships a lot of code to the browser. If your product pages crawl on mobile, a Hyvä rebuild is usually the biggest single speed gain available, far more than a hosting upgrade.' },
                { n: '06', t: 'Staff re-type orders into another system', d: 'If someone copies orders into Sage, Business Central or NetSuite, or updates stock by hand from Linnworks or Brightpearl, you are missing a Magento integration. Those jobs are where errors and late deliveries start.' },
                { n: '07', t: 'Your last agency has gone quiet', d: 'Tickets take days to get a reply, the developer who knew your store has left, and nobody can tell you what happens at the next upgrade. This is the most common reason merchants call us, and the easiest to fix.' },
              ].map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: 15, color: 'var(--orange)', minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ═══ 5. WHAT WE DO ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 740 }}>
              <span className="eyebrow">Magento development services</span>
              <h2>What our Magento developers do for UK merchants</h2>
              <p className="lead mt-4">
                We are a Magento 2 agency for stores that are already live and earning. Most of our work is the
                unglamorous engineering that keeps a store healthy. Here is all of it, in plain English.
              </p>
            </div>
            <ul className="col-2 mt-12" style={{ gap: 24 }}>
              <li className="card">
                <h3>Magento support and maintenance</h3>
                <p className="mt-4">A named team that already knows your store. We monitor it, fix bugs, handle small improvements, and keep a written log of every change, so nothing depends on one person’s memory.</p>
              </li>
              <li className="card">
                <h3>Security patching</h3>
                <p className="mt-4">We apply Adobe’s security patches on a schedule, test them on a staging copy first, and deploy them without surprises. If a patch breaks something, we fix the cause rather than skipping the patch.</p>
              </li>
              <li className="card">
                <h3>Magento upgrades</h3>
                <p className="mt-4">Moving you onto a supported 2.4.x release line, including the PHP, database and search versions it needs. We audit extensions first, so the upgrade is planned work, not a weekend of firefighting.</p>
              </li>
              <li className="card">
                <h3>Hyvä front-end rebuilds</h3>
                <p className="mt-4">Hyvä is a lighter replacement for the part of Magento shoppers see. We rebuild your theme on it, replace extensions that have no Hyvä-compatible version, and keep your design and URLs intact.</p>
              </li>
              <li className="card">
                <h3>Extension clean-up</h3>
                <p className="mt-4">We list every extension and custom module, find out what each one does, and remove or replace the ones that clash, slow pages down or block upgrades. Fewer moving parts means fewer 2am problems.</p>
              </li>
              <li className="card">
                <h3>Magento integration</h3>
                <p className="mt-4">Connecting Magento to your ERP, stock, product data and email systems so orders, stock levels and prices flow on their own. Built to handle failures properly, with alerts when a sync stops.</p>
              </li>
              <li className="card">
                <h3>Magento website development</h3>
                <p className="mt-4">New features, B2B price lists, custom checkout steps, and occasionally full Magento website development for a new store, when Magento is genuinely the right platform for it.</p>
              </li>
              <li className="card">
                <h3>Magento SEO and AI for Magento</h3>
                <p className="mt-4">Technical fixes that help search engines read your catalogue, joined up with our <a href="/uk/ecommerce-seo">UK ecommerce SEO</a> team. And custom <a href="/uk/ai-agents">AI agents for Magento stores</a> that answer order questions from live data.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ 6. WHO DOES THE WORK + INTEGRATIONS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Who actually does the work</span>
                <h2>Senior Magento specialists. The same people every month.</h2>
                <div className="stack mt-6">
                  <p>
                    The most common complaint we hear about Magento agencies is not bad code. It is disappearing
                    people. A store gets launched by a senior team, then handed to whoever is free, and six months
                    later nobody on the account has ever seen the checkout customisation that breaks on every
                    upgrade.
                  </p>
                  <p>
                    We work the other way round. The senior engineers who run your health check are the ones who
                    patch, upgrade and support your store afterwards. Bhavesh Barot, the founder, reviews every
                    new engagement himself. There is no junior handover once the contract is signed.
                  </p>
                  <p>
                    You also own everything: the code, the repository, the hosting account and the admin access.
                    If you ever want to move on, the handover is a short document and a set of logins, not a
                    negotiation. We think that is the only fair way to run Magento support.
                  </p>
                </div>
                <div className="card mt-8" style={{ padding: 8 }}>
                  <img src="/images/uk/magento/magento-team.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Three members of a UK ecommerce engineering team planning a store architecture on a whiteboard" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                </div>
              </div>

              <div className="card">
                <span className="eyebrow">Where Magento plugs in</span>
                <p className="mt-2" style={{ fontSize: 14 }}>
                  The systems UK merchants most often run alongside Magento. If a system has an API, which is
                  the doorway software opens so other software can read and write its data, an integration is
                  normally possible. We confirm your exact stack during the health check.
                </p>
                <div className="mt-6">
                  <p style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: 4 }}>Finance and ERP</p>
                  <ul className="int-group">
                    <li><b>Sage.</b> Orders, invoices and customer accounts posted without re-typing.</li>
                    <li><b>Microsoft Dynamics 365 Business Central.</b> Stock, pricing and orders kept in step with the store.</li>
                    <li><b>NetSuite.</b> For merchants running finance, stock and fulfilment in one ERP.</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <p style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: 4 }}>Orders, stock and product data</p>
                  <ul className="int-group">
                    <li><b>Brightpearl and Linnworks.</b> Stock levels and order routing across Magento and marketplaces.</li>
                    <li><b>Akeneo PIM.</b> A PIM is one central place for product information. Akeneo feeds clean attributes and images into Magento.</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <p style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: 4 }}>Marketing and payments</p>
                  <ul className="int-group">
                    <li><b>Klaviyo.</b> Browsing, basket and order events sent reliably for email and SMS flows.</li>
                    <li><b>Payment gateways.</b> Setting up, upgrading and debugging the payment modules your checkout depends on.</li>
                    <li><b>Headless front ends.</b> Headless means the shop front is a separate app that talks to Magento behind the scenes. We support it where it earns its keep, and say so when it does not.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline={'Not sure what state your Magento store is in?'}
          sub={'Send us your store address and we will run a free Magento health check: version and support status, extension risks, speed, and what to fix first. You get a straight list in priority order, whether or not you work with us afterwards.'}
          label={'Get my free Magento health check'}
        />

        {/* ═══ 7. PROCESS ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">How we work</span>
              <h2>How a Magento upgrade or takeover runs, in four stages</h2>
            </div>
            <ol className="process-grid mt-12" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
              <li className="card"><span className="stage-num">01</span><h3>Health check</h3><p className="mt-4">We review the code, list every extension, check your version against Adobe’s support dates, test speed, and look at the hosting. You get a ranked list of risks.</p></li>
              <li className="card"><span className="stage-num">02</span><h3>Stabilise</h3><p className="mt-4">We set up a proper staging site, apply outstanding security patches, and fix whatever is actively hurting sales, before any bigger change starts.</p></li>
              <li className="card"><span className="stage-num">03</span><h3>Upgrade or rebuild</h3><p className="mt-4">The planned work: a version upgrade, a Hyvä rebuild, an extension clean-up or a new integration. Tested on staging against real orders, then deployed at a quiet hour.</p></li>
              <li className="card"><span className="stage-num">04</span><h3>Support</h3><p className="mt-4">Ongoing Magento support and maintenance: patching on a schedule, monitoring, fixes and improvements from the same team, with a written log of every change.</p></li>
            </ol>
            <p className="mt-8" style={{ maxWidth: 820, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
              Adobe’s own <a href={SRC_LIFECYCLE} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>lifecycle policy</a> is
              the calendar we plan upgrades against. It also notes that Adobe does not patch third-party pieces such
              as PHP and MySQL, so those need checking separately, and we do.
            </p>
          </div>
        </section>

        {/* ═══ 8. STAY OR MOVE (comparison table) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">The honest question</span>
              <h2>Stay on Magento or move to Shopify?</h2>
              <p className="lead mt-4">
                We build on both, so we have no reason to push you either way. Here is how we actually decide.
                If most of your answers sit in the right-hand column, a Magento to Shopify migration is probably
                worth scoping. If they sit in the middle, fix Magento and stay. If you do move, see our{' '}
                <a href="/uk/shopify-plus" style={{ textDecoration: 'underline' }}>Shopify Plus agency</a> page for
                how a migration to Plus runs, or our{' '}
                <a href="/uk/woocommerce" style={{ textDecoration: 'underline' }}>WooCommerce developers</a> page if you
                would rather stay open source.
              </p>
            </div>
            <div className="card mt-8" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>Your situation</th>
                    <th className="fj">Stay on Magento</th>
                    <th>Move to Shopify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">B2B pricing and ordering</td><td className="fj"><span className="yes">Customer-specific price lists, quotes, complex rules</span></td><td><span className="partial">Standard trade pricing fits Shopify Plus B2B</span></td></tr>
                  <tr><td className="feat">Catalogue</td><td className="fj"><span className="yes">Very large, configurable or bundle-heavy</span></td><td><span className="partial">Simple products and variants</span></td></tr>
                  <tr><td className="feat">Custom logic</td><td className="fj"><span className="yes">Rules that are core to how you trade</span></td><td><span className="partial">Mostly covered by apps</span></td></tr>
                  <tr><td className="feat">Several stores on one back end</td><td className="fj"><span className="yes">Built in and flexible</span></td><td><span className="partial">Possible, with more setup</span></td></tr>
                  <tr><td className="feat">Appetite for technical ownership</td><td className="fj"><span className="partial">You accept hosting, patching and upgrades</span></td><td><span className="yes">You want Shopify to run the platform</span></td></tr>
                  <tr><td className="feat">Speed of marketing changes</td><td className="fj"><span className="partial">Needs developer time for most changes</span></td><td><span className="yes">Much of it self-serve for your team</span></td></tr>
                  <tr><td className="feat">Current store health</td><td className="fj"><span className="partial">Messy but fixable code</span></td><td><span className="yes">Due a rebuild anyway</span></td></tr>
                </tbody>
              </table>
            </div>
            <div className="stack mt-8" style={{ maxWidth: 820 }}>
              <p>
                The mistake we see most is merchants leaving Magento because of a badly run Magento store, then
                discovering on Shopify that their B2B rules need six apps and a custom build. The opposite
                mistake is just as common: paying to keep a heavily customised Magento store alive when a
                simple catalogue would run happily on Shopify with a fraction of the upkeep.
              </p>
              <p>
                If moving is right, we plan it properly: a full redirect map to protect your Google rankings,
                customer and order history, and integrations rewired to the new platform. Read how we run a{' '}
                <a href="https://factoryjet.com/replatforming/magento-to-shopify">Magento to Shopify migration</a>, see
                our <a href="https://factoryjet.com/uk/shopify-development">UK Shopify development</a> team, or look at
                our wider <a href="https://factoryjet.com/uk/ecommerce-development">UK ecommerce development</a> work.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 9. WHO WE WORK WITH ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 740 }}>
              <span className="eyebrow">Who we work with</span>
              <h2>The UK merchants Magento still fits best</h2>
              <p className="lead mt-4">
                Magento earns its running costs when the business is genuinely complicated. Three groups make
                up most of the stores a Magento ecommerce agency like ours looks after.
              </p>
            </div>
            <ul className="col-3 mt-12">
              <li className="svc-card">
                <h3>B2B wholesalers and distributors</h3>
                <p className="mt-4">Trade accounts, customer-specific prices, quick reorder, credit limits and quote requests. Usually tied tightly to an ERP, which is where most of our integration work happens.</p>
              </li>
              <li className="svc-card">
                <h3>Manufacturers selling direct</h3>
                <p className="mt-4">Large technical catalogues, configurable products and spare parts, often serving trade and retail buyers from the same back end. Clean product data from a PIM makes the biggest difference here.</p>
              </li>
              <li className="svc-card">
                <h3>Multi-brand and multi-store retailers</h3>
                <p className="mt-4">Several brands, countries or currencies running from one Magento install. The upkeep is higher, but so is the saving against running separate platforms for each brand.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ 10. HOSTING (answered honestly) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Magento hosting</span>
                <h2>We do not sell hosting. Here is what good Magento hosting needs.</h2>
                <div className="stack mt-6">
                  <p>
                    Lots of people searching for a Magento agency are really asking about Magento hosting in the
                    UK, usually because the store is slow or keeps falling over. We are not a hosting company and
                    we do not resell servers. We work with your existing host, or help you pick a specialist
                    Magento host if yours is the problem.
                  </p>
                  <p>
                    Keeping the two separate matters. When a store goes down, the host blames the code and the
                    developer blames the host. Having a developer who does not profit from your hosting bill means
                    you get a straight answer about which one it is.
                  </p>
                  <p>
                    One warning: a bigger server rarely fixes a slow Magento store on its own. If pages are slow
                    because the theme ships too much code or an extension runs heavy database queries on every
                    page, more hardware only hides the problem for a while.
                  </p>
                </div>
              </div>
              <div className="card">
                <span className="eyebrow">A Magento hosting checklist</span>
                <ul className="scope-list yes-list mt-4">
                  <li><b>Supported versions.</b> PHP, database and search versions that match your exact Magento release.</li>
                  <li><b>OpenSearch.</b> The search engine Magento 2.4 uses for catalogue search and filters.</li>
                  <li><b>Redis and Varnish.</b> Two kinds of cache that stop Magento rebuilding every page for every visitor.</li>
                  <li><b>A CDN.</b> Serves images and files from close to the shopper.</li>
                  <li><b>A staging site.</b> A private copy for testing patches and upgrades before they touch live.</li>
                  <li><b>Tested backups.</b> Daily, and restored at least once, so you know they work.</li>
                  <li><b>UK or nearby EU data centre.</b> Shorter distance means quicker pages for UK buyers.</li>
                  <li><b>Magento-aware support.</b> A host that will help during an upgrade, not just reboot the server.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 11. LONDON + UK DEMAND ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <span className="eyebrow">Magento agency London and UK-wide</span>
            <h2 style={{ maxWidth: 780 }}>Looking for a Magento agency in London? We work remotely across the UK</h2>
            <div className="col-6040 mt-8">
              <div>
                <div className="stack">
                  <p>
                    &quot;Magento agency London&quot; is one of the most searched Magento phrases in the country,
                    and it makes sense: a lot of UK ecommerce is run from London. But Magento work does not need
                    anyone in your office. Patching, upgrades, Hyvä builds and integrations all happen on servers
                    and in code, with video calls and a shared ticket board.
                  </p>
                  <p>
                    So we work with merchants in London, the South East, Manchester, Birmingham, Leeds, Scotland
                    and everywhere between, with the same senior UK Magento developers on every account. What you
                    should care about is not the postcode of your agency. It is whether the person who answers
                    your ticket has seen your code before.
                  </p>
                </div>
                <div className="flex-wrap mt-6">
                  <a className="city-pill" href="/uk/london">London</a>
                  <a className="city-pill" href="/uk/manchester">Manchester</a>
                  <a className="city-pill" href="/uk/birmingham">Birmingham</a>
                  <a className="city-pill" href="/uk/leeds">Leeds</a>
                  <a className="city-pill" href="/uk/shopify-development">Shopify development</a>
                  <a className="city-pill" href="/uk/ecommerce-development">Ecommerce development</a>
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--n200)', padding: '14px 18px' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--n400)' }}>UK · Monthly Search Demand</span>
                  <span style={{ background: '#B23E13', color: '#fff', fontFamily: 'var(--fm)', fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>DataForSEO</span>
                </div>
                <div style={{ padding: '4px 18px 14px' }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {[
                      { kw: 'magento agency', v: '390', w: '100%', kd: 'The head term' },
                      { kw: 'magento hosting', v: '390', w: '100%', kd: 'Answered above, honestly' },
                      { kw: 'magento development agency', v: '210', w: '54%', kd: 'Commercial intent' },
                      { kw: 'magento agency london', v: '170', w: '44%', kd: 'Local, remote-friendly' },
                      { kw: 'magento developers uk', v: '170', w: '44%', kd: 'Commercial intent' },
                      { kw: 'magento agency uk', v: '110', w: '28%', kd: 'This page' },
                      { kw: 'magento to shopify migration', v: '110', w: '28%', kd: 'The stay or move question' },
                    ].map((r) => (
                      <li key={r.kw} className="demand-row">
                        <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 9, color: 'var(--n400)' }}> searches</span></span></div>
                        <div className="demand-bar"><i style={{ width: r.w }} /></div>
                        <div className="demand-kd">{r.kd}</div>
                      </li>
                    ))}
                  </ul>
                  <p style={{ textAlign: 'center', fontFamily: 'var(--fm)', fontSize: 10, color: 'var(--n400)', marginTop: 10 }}>Source: DataForSEO, United Kingdom, September 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 12. COMPETITOR LISTICLE (self-disclosure, ItemList) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The honest landscape</span>
              <h2>UK Magento agencies worth knowing</h2>
              <p className="lead mt-4">
                We would rather you compared than guessed. These are Magento agencies that show up again and
                again in UK searches, including us. Some are large Adobe partners built for big projects, some
                are specialists. Talk to a few and pick the fit.
              </p>
            </div>
            <ul className="stack mt-10" style={{ maxWidth: 900 }}>
              {MAGENTO_AGENCIES.map((a, i) => (
                <li key={a.name} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: 15, color: 'var(--orange)', minWidth: 30 }}>{i + 1}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{a.name}{a.name === 'FactoryJet' && <span style={{ fontFamily: 'var(--fm)', fontSize: 10, background: '#B23E13', color: '#fff', borderRadius: 999, padding: '2px 8px', marginLeft: 8, verticalAlign: 'middle' }}>That is us</span>}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{a.note}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p style={{ fontFamily: 'var(--fm)', fontSize: 11, color: 'var(--n400)', marginTop: 14 }}>
              Agencies named from live UK search results for Magento agency terms, September 2026. Notes are based on each company’s own website. Listing is not endorsement, and we are one option among them.
            </p>
          </div>
        </section>

        {/* ═══ 13. ENGAGEMENT SHAPES (qualitative, no pricing) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Scope, not packages</span>
                <h2>How a Magento engagement with us is shaped</h2>
                <div className="stack mt-6">
                  <p>
                    Two stores on the same Magento version can need completely different amounts of work. One
                    has a handful of well-kept extensions. The other has years of custom code nobody documented.
                    So we do not sell fixed Magento packages. We look first, then scope.
                  </p>
                </div>

                <h3 className="mt-8">The shapes our Magento work takes</h3>
                <ul className="scope-list num-list mt-4">
                  <li><b>Magento health check.</b> A one-off review of code, extensions, version, speed and hosting, with a ranked list of what to fix. Some merchants take the list to their own developers, and that is fine.</li>
                  <li><b>Support retainer.</b> Ongoing Magento support and maintenance: security patches on a schedule, monitoring, fixes and small improvements from the same senior team, with an agreed monthly allowance of time.</li>
                  <li><b>Upgrade or Hyvä rebuild project.</b> A defined project to reach a supported version or move the front end to Hyvä, scoped in stages so you always know what the next stage covers.</li>
                  <li><b>Integration build.</b> Connecting Magento to an ERP, PIM, stock or email system, with error handling and alerts built in, then folded into your support retainer.</li>
                  <li><b>Migration plan.</b> If the health check says leaving is right, a written plan for moving to Shopify, including redirects and data, before anyone commits to a build.</li>
                </ul>

                <p className="mt-8">
                  On the Hyvä side, the theme itself is now{' '}
                  <a href={SRC_HYVA} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>open source and free</a>,
                  so the work in a rebuild is engineering, not licence fees for the theme. The effort depends mostly
                  on how many of your extensions need a Hyvä-compatible replacement.
                </p>

                <div className="mt-8">
                  <ModalCTAButton label="Get my free Magento health check" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What moves the scope</span>
                <div className="scorecard-row"><div className="scorecard-metric">How far behind your version is</div><div className="scorecard-val" style={{ fontSize: 14 }}>Gap</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Number and quality of extensions</div><div className="scorecard-val" style={{ fontSize: 14 }}>Count</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Custom code nobody documented</div><div className="scorecard-val" style={{ fontSize: 14 }}>Depth</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Systems connected to the store</div><div className="scorecard-val" style={{ fontSize: 14 }}>Reach</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Free health check before you commit</div><div className="scorecard-val" style={{ color: 'var(--green)', fontSize: 14 }}>Always</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 14. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>Magento questions UK merchants actually ask</h2>
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

        {/* ═══ 15. FINAL CTA ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>Find out what state your Magento store is really in</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within 24 hours to arrange a free Magento health
              check: your version and support status, the extensions putting you at risk, and what to fix first.
              No spam, no obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get my free Magento health check" region="uk" modalVariant="default" btnVariant="primary-light" />
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
