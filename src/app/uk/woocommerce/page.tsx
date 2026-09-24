import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../ai-agents/ai-agents.css';

const CANONICAL = 'https://factoryjet.com/uk/woocommerce';
const UPDATED = '2026-09-24';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. Never hand-copy a
   second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'WooCommerce Agency', url: CANONICAL },
];

/* ─── External sources, each fetch-verified 2026-09-24 (HTTP 200, claim
       confirmed in the fetched body) ──────────────────────────────────── */
// fetch-verified 2026-09-24: plugin directory listing shows "Active installations 7+ million",
// current version 11.1.2, "This plugin is free but offers additional paid commercial upgrades".
const SRC_WPORG = 'https://wordpress.org/plugins/woocommerce/';
// fetch-verified 2026-09-24: "As of September 2024, WooCommerce has adopted a new release
// cadence ... Releases typically occur on a 5-week cycle".
const SRC_RELEASE = 'https://developer.woocommerce.com/release-calendar/';
// fetch-verified 2026-09-24: host should support WordPress 6.9 or greater, PHP 8.3 or greater
// (tested up to 8.4), MySQL 8.0+ or MariaDB 10.6+, HTTPS, WordPress memory limit 256 MB or greater.
const SRC_REQS = 'https://woocommerce.com/document/server-requirements/';
// Also read 2026-09-24 (not linked, used for plain-English wording only):
// developer.woocommerce.com/docs/features/high-performance-order-storage/ says HPOS stores
// orders in dedicated tables and is enabled by default for new installs from WooCommerce 8.2.

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',  label: 'WooCommerce basics' },
  { key: 'build',   label: 'Builds, plugins & integrations' },
  { key: 'running', label: 'Speed, security & support' },
  { key: 'agency',  label: 'Hiring a WooCommerce developer' },
  { key: 'shopify', label: 'WooCommerce or Shopify' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── WooCommerce basics ──
  { category: 'basics', question: 'What is WooCommerce, and is it different from WordPress?',
    answer: 'WordPress is the software that runs the website: pages, blog posts and menus. WooCommerce is a free plugin, meaning an add-on, that turns a WordPress site into an online shop with products, a basket, checkout, orders and customer accounts. So they are not rivals. You need WordPress to run WooCommerce, and WooCommerce is what makes WordPress sell.' },
  { category: 'basics', question: 'Which company owns WooCommerce?',
    answer: 'WooCommerce is owned by Automattic, the company behind WordPress.com. The WooCommerce plugin itself is open source, which means the code is public and anyone can use, change and extend it. That is why there is such a large market of WooCommerce extensions and developers, and why you are never tied to one supplier to keep your store running.' },
  { category: 'basics', question: 'Is WooCommerce free?',
    answer: 'The core plugin is free to download from WordPress.org. Running a proper shop is not free, though. You pay for hosting, a domain, a security certificate, any paid extensions such as subscriptions or advanced shipping, a payment provider’s transaction fees, and the developer time to keep it updated. The software costs nothing. A well-run store always costs something.' },
  { category: 'basics', question: 'Is WooCommerce legitimate and reputable?',
    answer: 'Yes. It is one of the most widely used ecommerce tools in the world. The WordPress.org plugin directory lists more than seven million active installations. It has a dedicated product team, a published release schedule and public developer documentation. The risk with WooCommerce is rarely the platform itself. It is usually the hosting, the plugins added around it, or nobody keeping it updated.' },
  { category: 'basics', question: 'What are the disadvantages of WooCommerce?',
    answer: 'You are responsible for more. You choose and pay for hosting, apply updates, keep backups and watch security. Features often come from plugins made by different companies, which can clash or slow the store down. Underpowered hosting makes it slow. None of that is fatal. It just means a WooCommerce store needs someone looking after it, which is what a WooCommerce support retainer is for.' },
  { category: 'basics', question: 'Is WooCommerce difficult to learn?',
    answer: 'For running the shop day to day, no. If you can use WordPress, you can add products, change prices, process orders and issue refunds within a day or two. Building and fixing it is harder. Custom features, speed work and integrations need a developer who knows PHP, WordPress hooks and how WooCommerce stores its orders. That is where most DIY stores get stuck.' },

  // ── Builds, plugins & integrations ──
  { category: 'build', question: 'What does a WooCommerce developer do?',
    answer: 'A WooCommerce developer builds, extends and maintains WooCommerce stores. That covers setting up new stores, writing custom plugins, fixing clashes between extensions, speeding up slow pages, connecting the store to accounting, stock and courier systems, and applying updates safely. A good one also tells you which plugins to remove, and when a problem is really a hosting problem, not a code problem.' },
  { category: 'build', question: 'What is a custom WooCommerce plugin, and when do I need one?',
    answer: 'A custom plugin is code written just for your store to add something no ready-made extension does well, such as a trade pricing rule, a product builder or a link to your own system. You need one when you are stacking three plugins to do one job, or bending your process to fit a plugin. One tidy custom plugin is usually faster and safer than several clashing ones.' },
  { category: 'build', question: 'Can WooCommerce integrate with Xero or Sage?',
    answer: 'Yes. Orders, customers, invoices and payments can flow from WooCommerce into Xero or Sage so nobody re-types them. Sometimes a ready-made connector is enough. For stores with trade accounts, multiple VAT treatments or unusual payment flows, we build or configure the integration so it matches how your accountant actually wants the books kept, with alerts if a sync ever fails.' },
  { category: 'build', question: 'Can WooCommerce connect to Royal Mail Click & Drop and other couriers?',
    answer: 'Yes. Royal Mail Click & Drop can pull WooCommerce orders in so you print labels without copying addresses, and tracking can flow back to the customer. We also connect stores to other UK couriers and shipping platforms, set up shipping zones and rates by weight or basket value, and make sure dispatch status reaches the order automatically, not by hand.' },
  { category: 'build', question: 'Is WooCommerce good for B2B and wholesale?',
    answer: 'It can be, with the right setup. WooCommerce handles trade accounts, customer-specific prices, minimum order quantities, hidden prices for guests, quick order forms and invoice payment terms, through a mix of trusted extensions and custom code. For very complex B2B pricing or huge catalogues, other platforms can fit better. Our UK B2B ecommerce page covers how we decide.' },
  { category: 'build', question: 'Can WooCommerce handle UK VAT?',
    answer: 'Yes. WooCommerce has built-in tax settings where you set UK VAT rates, choose whether prices show including or excluding VAT, and treat zero-rated or reduced-rate products differently. Trade stores often need VAT-exclusive prices for business buyers and inclusive prices for consumers. We set this up with your accountant’s rules and make sure it flows correctly into Xero or Sage.' },

  // ── Speed, security & support ──
  { category: 'running', question: 'Why is my WooCommerce store so slow?',
    answer: 'Usually one of four things: underpowered hosting, too many plugins running on every page, a heavy theme or page builder, or a database clogged with years of old data. Upgrading the server alone rarely fixes it. We measure first, find the specific plugins and queries causing the delay, then fix those. Moving older stores to WooCommerce’s newer order storage tables also helps.' },
  { category: 'running', question: 'What hosting does a WooCommerce store need?',
    answer: 'More than basic shared hosting. WooCommerce’s own documentation asks for PHP 8.3 or newer, MySQL 8.0 or MariaDB 10.6 or newer, HTTPS, and a WordPress memory limit of at least 256 MB. On top of that, look for server caching, a staging site, daily backups you have tested, and UK or nearby data centres. We work with your host rather than reselling hosting.' },
  { category: 'running', question: 'How often should WooCommerce be updated?',
    answer: 'WooCommerce ships new versions on a roughly five-week cycle, and security fixes can arrive in between. WordPress, your theme and every plugin also update on their own schedules. Waiting months and updating everything at once is how stores break. We test updates on a staging copy first, then apply them to the live store on a regular schedule with a written log.' },
  { category: 'running', question: 'Is WooCommerce secure?',
    answer: 'The core is well maintained, and card details are normally handled by your payment provider, not stored on your server. Most WooCommerce security problems come from outdated plugins, abandoned extensions, weak admin passwords and underpowered hosting. Keeping everything updated, removing plugins you no longer use, limiting admin access and taking backups covers most of the risk. That is routine support work.' },
  { category: 'running', question: 'What does WooCommerce support and maintenance include?',
    answer: 'Good WooCommerce support covers tested updates for WordPress, WooCommerce and plugins, uptime and error monitoring, backups, security checks, bug fixes and small improvements, from a team that already knows your store. We run it as a monthly retainer with the same developers every month and a written log, so nothing depends on one person remembering what changed.' },
  { category: 'running', question: 'Can you rescue a broken WooCommerce store?',
    answer: 'Yes, and it is a large share of our work. We first get the store stable: restore checkout, stop errors, and take a clean backup. Then we find the cause, whether a plugin clash, a failed update, a hosting limit or custom code. After that we fix the underlying problem and set up staging, so the same thing does not happen after the next update.' },

  // ── Hiring a WooCommerce developer ──
  { category: 'agency', question: 'How do I hire a WooCommerce developer in the UK?',
    answer: 'Start with the job, not the CV. Write down what is broken or missing, which plugins and integrations you run, and who hosts the store. Then ask any developer to explain how they test updates, who covers them when they are away, and whether you own the code and logins. WooCommerce.com also lists vetted agency partners, which is a useful starting shortlist.' },
  { category: 'agency', question: 'Should I hire a freelance WooCommerce developer or an agency?',
    answer: 'A good freelancer is fine for a small, clearly defined job. The risk is cover. When they are ill, on holiday or busy with a bigger client, nobody else knows your store, and checkout problems do not wait. An agency gives you more than one person who knows your code, plus code review. For a store that earns real money, that cover matters.' },
  { category: 'agency', question: 'Who are the best WooCommerce developers in the UK?',
    answer: 'The best WooCommerce developer for you is one who has kept stores like yours running for years, not just launched them. Ask to speak to a client they have supported for more than two years. Ask how they handle plugin updates and who fixes things at the weekend. We list several UK WooCommerce agencies on this page, including us, so you can compare.' },
  { category: 'agency', question: 'How much does a WooCommerce developer or agency cost?',
    answer: 'It depends on the shape of the work. A store health check is small. A support retainer depends on how many hours of developer time you need each month. A new build depends on your catalogue, design, integrations and custom features. We scope after looking at your store, because two WooCommerce sites with the same theme can need very different amounts of work.' },
  { category: 'agency', question: 'Can you take over a WooCommerce store another developer built?',
    answer: 'Yes. We start with a health check: code and plugin review, update status, hosting check, speed test and a list of risks in priority order. Then we take over support once admin, hosting and code access are handed across. If the previous developer has gone quiet, we can usually recover access through your hosting account and domain registrar.' },
  { category: 'agency', question: 'Do you work with WooCommerce stores outside London?',
    answer: 'Yes. We work with WooCommerce stores across the UK, from London and the South East to Manchester, Birmingham, Leeds and Scotland. WooCommerce development, support and integrations all happen on servers and in code, with video calls and a shared ticket board. You get the same WooCommerce developers wherever you are.' },

  // ── WooCommerce or Shopify ──
  { category: 'shopify', question: 'Which is better for a UK store, Shopify or WooCommerce?',
    answer: 'Shopify suits you if you want the platform run for you, with hosting, security and updates handled, and your needs fit its apps. WooCommerce suits you if you want full control of your code and data, already run a content-heavy WordPress site, or need custom logic Shopify makes awkward. We build on both, so we have no reason to push you either way.' },
  { category: 'shopify', question: 'Should I move my WooCommerce store to Shopify?',
    answer: 'Move if the time and worry of running WooCommerce outweigh the control it gives you, and your store fits Shopify’s model without heavy workarounds. Stay if your store relies on custom features, deep content, or plugins Shopify cannot match. Often the right first step is fixing WooCommerce properly, then deciding with better information. A health check answers this honestly.' },
  { category: 'shopify', question: 'Will I lose my Google rankings if I move from WooCommerce to Shopify?',
    answer: 'You should not, if the move is done carefully. That means mapping every old URL to its new one with permanent redirects, keeping the page titles and content that rank, and moving product reviews and images. Shopify also uses different URL patterns, so the redirect map matters more than usual. Most ranking losses after a migration come from missed redirects.' },
  { category: 'shopify', question: 'Do you also build Shopify stores in the UK?',
    answer: 'Yes. We are a UK ecommerce agency that works on WooCommerce, Shopify and Magento. That is why our advice on staying or moving is not tied to one platform. If Shopify is the better fit, our UK Shopify development team handles the build and the move, including the redirect map, customer and order history, and rewiring your integrations.' },
];

/* ─── Named UK WooCommerce agencies (open self-disclosure, ItemList) ──
   Each note is based on the company's own homepage or WooCommerce page,
   fetched 2026-09-24. magic42 was dropped: its current homepage lists
   Magento and Shopify only and its WooCommerce page failed our fetch. */
const WOO_AGENCIES: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. WooCommerce developers who build new stores, write custom plugins, fix slow and broken stores, connect them to Xero, Sage, couriers and stock systems, and stay on for support. We also build on Shopify and Magento, so our advice on staying or moving is not tied to one platform.' },
  { name: 'WooCommerce.com agency directory', note: 'Not an agency but worth knowing. WooCommerce’s own site lists Woo Agency Partners it describes as vetted and verified, and can match you with a developer for smaller fixes. A good place to build a shortlist.' },
  { name: 'Fhoke', note: 'An independent web design agency in London and Salisbury, working since 2008, that designs and develops WooCommerce, Shopify and BigCommerce stores and runs a dedicated WooCommerce agency service.' },
  { name: 'VisionSharp', note: 'A Manchester web agency specialising in ecommerce, WooCommerce and bespoke development, with projects overseen by its founders and ongoing WooCommerce support listed among its services.' },
  { name: 'Kanuka Digital', note: 'A UK WordPress and WooCommerce specialist, working since 1995, that describes itself as a WooCommerce Pro Partner and lists project rescues among its services.' },
  { name: 'Identify Digital', note: 'A Wakefield web and systems agency offering WooCommerce development, with integration work such as OrderWise and Epicor BisTrack connections for WooCommerce stores.' },
  { name: 'Envisage Digital', note: 'A Bournemouth ecommerce agency best known for Magento and Hyvä work, which also offers WooCommerce development and WordPress support and maintenance.' },
  { name: 'Chilli Apple', note: 'A UK web development company with offices in London and Kent, offering WooCommerce alongside Magento, Shopify and mobile app development.' },
  { name: 'Rak Design', note: 'A Northampton web and graphic design agency, working since 2000, whose ecommerce development covers WooCommerce, Magento, BigCommerce and Shopify.' },
];

/* ─── JSON-LD ────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'WooCommerce Agency UK',
      serviceType: 'WooCommerce development, custom plugins, speed fixes, integrations, support and maintenance',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'WooCommerce agency in the UK. WooCommerce developers for new stores, custom plugins and extensions, speed and hosting fixes, B2B and wholesale, Xero, Sage and Royal Mail Click & Drop integrations, security updates and ongoing WooCommerce support.',
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
      name: 'WooCommerce Agency UK | WooCommerce Developers | FactoryJet',
      headline: 'WooCommerce Agency UK: WooCommerce Developers Who Build, Fix and Stay After Launch',
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
      about: { '@id': `${CANONICAL}#service` },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#agencies`,
      name: 'UK WooCommerce agencies and developers',
      itemListElement: WOO_AGENCIES.map((a, i) => ({
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
  title: 'WooCommerce Agency UK | WooCommerce Developers | FactoryJet',
  description:
    'FactoryJet is a UK WooCommerce agency. WooCommerce developers for new stores, custom plugins, speed fixes, Xero and courier integrations, and ongoing support.',
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: 'WooCommerce Agency UK | WooCommerce Developers | FactoryJet',
    description:
      'A UK WooCommerce development agency. New stores, custom plugins, speed and hosting fixes, B2B and wholesale, Xero, Sage and Royal Mail integrations, and WooCommerce support from the same team. Free store health check.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/woocommerce/woocommerce-og.webp', width: 1200, height: 630, alt: 'WooCommerce agency UK, FactoryJet, a shop owner and a developer reviewing an online store in a bright workshop' }],
  },
  robots: { index: true, follow: true },
};

export default function WooCommerceUKPage() {
  return (
    <>
      <script id="ld-uk-woocommerce" type="application/ld+json"
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
                  <span className="chip"><span className="dot dot-orange" />UK WooCommerce Agency</span>
                  <span className="chip">Builds, Plugins &amp; Fixes</span>
                  <span className="chip">Support After Launch</span>
                </div>
                <h1>WooCommerce Agency UK: WooCommerce Developers Who Build, Fix and Stay After Launch</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet is a WooCommerce agency for UK shops that want their store built properly and kept
                  that way. Our WooCommerce developers build new stores, write custom plugins, fix slow or broken
                  sites, set up trade and wholesale selling, and connect WooCommerce to Xero, Sage, Royal Mail
                  Click &amp; Drop and your stock system. Then we stay and look after it.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ projects delivered</span></div>
                  <div className="upd">Last updated<br />24 September 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_woocommerce_hero" submitLabel="Get my free WooCommerce health check" />
                </div>
              </div>

              <div>
                <div className="card" style={{ padding: 8 }}>
                  <img src="/images/uk/woocommerce/woocommerce-hero.webp" width={1400} height={933} fetchPriority="high" decoding="async" alt="A UK shop owner and a WooCommerce developer looking at an online store on a laptop in a bright workshop with handmade goods on the shelves" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                </div>
                <div className="card card-top-orange mt-6">
                  <span className="eyebrow">What we take on</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">New WooCommerce stores</div><div className="scorecard-note">design, build, launch</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Built</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Custom plugins &amp; fixes</div><div className="scorecard-note">speed, clashes, rescues</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Fixed</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">WooCommerce support</div><div className="scorecard-note">tested updates, monitoring</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Monthly</div>
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
              <span className="lab">What does a WooCommerce agency in the UK actually do?</span>
              <p>
                A WooCommerce agency builds and looks after online shops that run on WordPress and WooCommerce.
                The work is setting up new stores, writing custom plugins, fixing slow or broken sites, applying
                updates safely, and connecting the shop to accounting, courier and stock systems. FactoryJet does
                this for UK businesses, with the same developers before and after launch.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">And is WooCommerce still a good choice in 2026?</span>
              <p>
                For the right shop, yes. It is free, open source, used on more than seven million sites, and
                updated on a regular five-week cycle. It suits businesses that want full control, a strong
                content site, or custom features. It does not suit an owner who wants zero technical
                responsibility. That owner is usually better off on Shopify, and we will say so.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              Most WooCommerce stores we are asked to look at do not have a platform problem. They have a
              looking-after problem. The site was built by a freelancer who has since moved on, a few plugins were
              added to fix one thing each, updates have been skipped because the last one broke checkout, and
              pages now crawl on a phone. All of that is fixable. It just needs a WooCommerce expert who treats
              your store as a long-term job, not a launch.
            </p>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (verified only) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '7+ million', t: 'active installations of the WooCommerce plugin listed on WordPress.org', s: 'WordPress.org plugin directory', u: SRC_WPORG },
                { v: '5 weeks', t: 'the typical WooCommerce release cycle since September 2024, so updates never stop', s: 'WooCommerce release calendar', u: SRC_RELEASE },
                { v: 'PHP 8.3+', t: 'the PHP version WooCommerce asks your host to support, alongside MySQL 8.0 or MariaDB 10.6', s: 'WooCommerce server requirements', u: SRC_REQS },
                { v: '256 MB', t: 'the minimum WordPress memory limit WooCommerce recommends. Budget shared hosting often falls short', s: 'WooCommerce server requirements', u: SRC_REQS },
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

        {/* ═══ 4. LISTICLE: EIGHT SIGNS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 740 }}>
              <span className="eyebrow">Before you call anyone</span>
              <h2>Eight signs your WooCommerce store needs a developer</h2>
              <p className="lead mt-4">
                None of these is an emergency on its own. Three or more together usually means the store is being
                kept alive rather than looked after. These are the signs we see most often when UK shop owners
                come to us to hire a WooCommerce developer.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'You are scared to press Update', d: 'The last update broke checkout, so now the WordPress dashboard shows a row of red update badges and nobody touches them. Skipped updates are how most WooCommerce stores end up insecure. The fix is a staging site and a routine, not courage.' },
                { n: '02', t: 'Pages are slow on a phone', d: 'Product and category pages take several seconds to appear on mobile data. Shoppers leave before they see a price. Slowness usually comes from specific plugins, a heavy page builder or a clogged database, and each one can be measured and fixed.' },
                { n: '03', t: 'You have more plugins than anyone can explain', d: 'A plugin is an add-on that gives WooCommerce a new feature. Stores collect dozens. Some overlap, some were abandoned by their makers years ago, and some load on every page even though you stopped using them.' },
                { n: '04', t: 'Staff re-type orders into Xero or Sage', d: 'If someone copies orders, invoices or customer details into your accounts by hand, you are missing an integration. Re-typing is where VAT mistakes, duplicate invoices and late month-end closes start.' },
                { n: '05', t: 'Labels are printed by copying addresses', d: 'If orders are pasted one by one into Royal Mail Click & Drop or a courier website, that job can be automated. Orders should flow across on their own and tracking numbers should come back to the customer.' },
                { n: '06', t: 'Stock is wrong more often than it is right', d: 'You sell something you do not have, or hide something you do, because stock is updated from a spreadsheet or a separate system by hand. A proper stock sync with your warehouse or inventory tool ends this.' },
                { n: '07', t: 'Trade customers phone in their orders', d: 'Wholesale buyers want their own prices, quick reorder and invoice terms. If they ring or email because the website only shows retail prices, a WooCommerce B2B setup would save your team hours every week.' },
                { n: '08', t: 'Your developer has gone quiet', d: 'Emails take days to get a reply, or the freelancer who built the store has taken a full-time job. Nobody else has the logins or knows how the custom code works. This is the most common reason people call us, and the easiest to fix.' },
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
              <span className="eyebrow">WooCommerce development services</span>
              <h2>What our WooCommerce developers do for UK businesses</h2>
              <p className="lead mt-4">
                We are a WooCommerce development agency for new shops and for stores that are already live and
                earning. Here is everything we take on, in plain English.
              </p>
            </div>
            <ul className="col-2 mt-12" style={{ gap: 24 }}>
              <li className="card">
                <h3>New WooCommerce stores</h3>
                <p className="mt-4">WooCommerce website development from scratch: product structure, design, checkout, payments, shipping, VAT settings and a clean handover. Built on a lean theme, not a stack of page builders, so it stays fast as it grows.</p>
              </li>
              <li className="card">
                <h3>Custom plugins and extensions</h3>
                <p className="mt-4">Custom WooCommerce development for the features no ready-made plugin does well: product builders, pricing rules, bespoke checkout steps, customer portals. One tidy plugin you own, instead of three that clash.</p>
              </li>
              <li className="card">
                <h3>Speed and hosting fixes</h3>
                <p className="mt-4">We measure what is actually slow, then fix it: heavy plugins, bloated themes, slow database queries, missing caching. If your hosting is the problem, we say so and help you move, without reselling you a server.</p>
              </li>
              <li className="card">
                <h3>WooCommerce B2B and wholesale</h3>
                <p className="mt-4">Trade accounts, customer-specific prices, minimum order quantities, quick order forms and invoice payment terms. Retail and trade can share one store, with each buyer seeing the right prices and VAT treatment.</p>
              </li>
              <li className="card">
                <h3>Integrations</h3>
                <p className="mt-4">Orders into Xero or Sage, labels through Royal Mail Click &amp; Drop and other couriers, stock kept in step with your inventory tool or ERP, and email events sent to your marketing platform. Every sync has alerts for when it stops.</p>
              </li>
              <li className="card">
                <h3>Security and updates</h3>
                <p className="mt-4">WordPress, WooCommerce, theme and plugin updates tested on a staging copy first, then applied on a schedule. Plus admin access clean-up, removal of abandoned plugins, and backups we have actually restored.</p>
              </li>
              <li className="card">
                <h3>WooCommerce support and maintenance</h3>
                <p className="mt-4">A monthly retainer with the same developers every month: monitoring, bug fixes, small improvements and a written log of every change. You get WooCommerce experts who already know your store when something goes wrong.</p>
              </li>
              <li className="card">
                <h3>Store rescues and takeovers</h3>
                <p className="mt-4">Checkout down, white screen, hacked site, or a developer who has vanished. We stabilise first, recover access, then fix the cause. Afterwards the store moves onto proper staging and support so it does not happen again.</p>
              </li>
            </ul>
            <p className="mt-8" style={{ maxWidth: 820 }}>
              Need search visibility as well as a working store? Our <a href="/uk/ecommerce-seo">UK ecommerce SEO</a> team
              handles WooCommerce SEO, from product page structure to category content. For a full redesign rather than
              development work, see our <a href="/uk/web-design">UK web design</a> service.
            </p>
          </div>
        </section>

        {/* ═══ 6. WHO DOES THE WORK + INTEGRATIONS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Who actually does the work</span>
                <h2>Experienced WooCommerce developers. The same people every month.</h2>
                <div className="stack mt-6">
                  <p>
                    The most common complaint we hear about WooCommerce agencies is not bad code. It is disappearing
                    people. A store gets launched, then handed to whoever is free, and six months later nobody on the
                    account knows why the shipping plugin was customised or which update broke the basket.
                  </p>
                  <p>
                    We work the other way round. The developers who run your health check are the ones who build,
                    update and support your store afterwards. Bhavesh Barot, the founder, has spent more than a
                    decade in ecommerce since starting FactoryJet in 2014, and reviews every new engagement himself.
                    There is no junior handover once the contract is signed.
                  </p>
                  <p>
                    You also own everything: the code, the custom plugins, the hosting account and the admin logins.
                    If you ever want to move on, the handover is a short document and a set of passwords, not a
                    negotiation. That is the only fair way to run WooCommerce support.
                  </p>
                </div>
                <div className="card mt-8" style={{ padding: 8 }}>
                  <img src="/images/uk/woocommerce/woocommerce-developer.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A WooCommerce developer working at a tidy desk in a bright UK office with code on a large monitor and an orange mug beside the keyboard" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                </div>
              </div>

              <div className="card">
                <span className="eyebrow">Where WooCommerce plugs in</span>
                <p className="mt-2" style={{ fontSize: 14 }}>
                  The systems UK shops most often run alongside WooCommerce. If a system has an API, which is the
                  doorway software opens so other software can read and write its data, an integration is normally
                  possible. We confirm your exact setup during the health check.
                </p>
                <div className="mt-6">
                  <p style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: 4 }}>Accounts and VAT</p>
                  <ul className="int-group">
                    <li><b>Xero.</b> Orders, invoices, payments and customers posted without re-typing.</li>
                    <li><b>Sage.</b> For shops whose accountant works in Sage, with VAT codes mapped correctly.</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <p style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: 4 }}>Delivery and couriers</p>
                  <ul className="int-group">
                    <li><b>Royal Mail Click &amp; Drop.</b> Orders pulled in for label printing, tracking sent back to the customer.</li>
                    <li><b>Other UK couriers and shipping tools.</b> Labels, services and delivery rates set by weight, zone or basket value.</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <p style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: 4 }}>Stock, ERP and marketing</p>
                  <ul className="int-group">
                    <li><b>Stock and inventory tools.</b> Linnworks, Brightpearl and similar tools kept in step across WooCommerce and marketplaces.</li>
                    <li><b>ERP systems.</b> An ERP runs finance, stock and orders in one place. We connect WooCommerce so prices and stock come from it.</li>
                    <li><b>Email and payments.</b> Klaviyo events for email flows, plus setting up and debugging payment gateways such as Stripe and PayPal.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline={'Not sure what state your WooCommerce store is in?'}
          sub={'Send us your store address and we will run a free WooCommerce health check: update status, plugin risks, speed, hosting and what to fix first. You get a straight list in priority order, whether or not you work with us afterwards.'}
          label={'Get my free WooCommerce health check'}
        />

        {/* ═══ 7. PLUGINS + UPDATES (the part most agencies skip) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Plugins and updates</span>
                <h2>How we clean up plugins and make updates boring again</h2>
                <div className="stack mt-6">
                  <p>
                    WooCommerce itself is rarely what breaks. What breaks is the pile of plugins around it, updated
                    on different days by different companies. WooCommerce ships a new version on a{' '}
                    <a href={SRC_RELEASE} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>roughly five-week cycle</a>,
                    and WordPress, your theme and every plugin follow their own calendars. Leave that for six months
                    and one big catch-up update becomes a gamble.
                  </p>
                  <p>
                    Our approach is simple. Fewer plugins, a staging copy of the store for testing, and small,
                    regular updates rather than rare, frightening ones. When an update breaks something on staging,
                    we fix the cause rather than skipping the update forever.
                  </p>
                  <p>
                    We also check whether older stores are using WooCommerce’s newer order storage, called HPOS
                    (High-Performance Order Storage). It keeps orders in their own dedicated database tables instead
                    of mixing them in with blog posts, which helps busy stores. New installs have it switched on.
                    Older stores often do not, because a plugin once blocked it.
                  </p>
                </div>
              </div>
              <div className="card">
                <span className="eyebrow">Our plugin audit, step by step</span>
                <ul className="scope-list num-list mt-4">
                  <li><b>List every plugin.</b> Active, inactive and must-use, with who makes each one and when it was last updated.</li>
                  <li><b>Find out what each one does.</b> Some turn out to do nothing at all any more.</li>
                  <li><b>Spot overlaps.</b> Two SEO plugins, three caching tools, four ways to add a checkout field.</li>
                  <li><b>Flag abandoned ones.</b> Plugins with no updates for a long time are a security risk.</li>
                  <li><b>Measure the cost.</b> Which plugins load on every page and slow it down.</li>
                  <li><b>Remove, replace or rewrite.</b> Delete the dead weight, swap weak plugins for trusted ones, or fold several into one custom plugin you own.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 8. PROCESS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">How we work</span>
              <h2>How a WooCommerce build or takeover runs, in four stages</h2>
            </div>
            <ol className="process-grid mt-12" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
              <li className="card"><span className="stage-num">01</span><h3>Health check</h3><p className="mt-4">We review the code, list every plugin, check update status, test speed on mobile and look at the hosting. For a new store, we map products, shipping, VAT and integrations instead. You get a ranked list.</p></li>
              <li className="card"><span className="stage-num">02</span><h3>Stabilise</h3><p className="mt-4">We set up a proper staging site, take tested backups, apply outstanding updates safely, and fix anything actively losing you sales, before any bigger change starts.</p></li>
              <li className="card"><span className="stage-num">03</span><h3>Build or fix</h3><p className="mt-4">The planned work: a new store, a custom plugin, a speed project, a B2B setup or an integration. Tested on staging with real orders, then released at a quiet trading hour.</p></li>
              <li className="card"><span className="stage-num">04</span><h3>Support</h3><p className="mt-4">Ongoing WooCommerce support and maintenance: tested updates on a schedule, monitoring, fixes and improvements from the same team, with a written log of every change.</p></li>
            </ol>
            <p className="mt-8" style={{ maxWidth: 820, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
              We plan hosting against WooCommerce’s own{' '}
              <a href={SRC_REQS} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>server requirements</a>,
              which ask for PHP 8.3 or newer, MySQL 8.0 or MariaDB 10.6 or newer, HTTPS and at least 256 MB of
              WordPress memory. Many older stores run below that without anyone noticing.
            </p>
          </div>
        </section>

        {/* ═══ 9. WOOCOMMERCE VS SHOPIFY (comparison table) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">The honest question</span>
              <h2>WooCommerce vs Shopify for UK stores</h2>
              <p className="lead mt-4">
                We build on both, so we have no reason to push you either way. Here is how the two compare on the
                things UK shop owners actually care about. If most of your answers sit in the Shopify column, a
                WooCommerce to Shopify migration is worth scoping.
              </p>
            </div>
            <div className="card mt-8" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>What matters</th>
                    <th className="fj">WooCommerce</th>
                    <th>Shopify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Control</td><td className="fj"><span className="yes">Full control of code, data and server</span></td><td><span className="partial">Shopify runs the platform, you work within its rules</span></td></tr>
                  <tr><td className="feat">Hosting</td><td className="fj"><span className="partial">You choose and manage it, quality varies hugely</span></td><td><span className="yes">Included and managed by Shopify</span></td></tr>
                  <tr><td className="feat">Plugins and apps</td><td className="fj"><span className="partial">Huge choice, but you manage clashes and updates</span></td><td><span className="yes">Apps run separately, fewer clashes, ongoing app fees</span></td></tr>
                  <tr><td className="feat">Running effort</td><td className="fj"><span className="partial">Updates, backups and security are on you or your developer</span></td><td><span className="yes">Mostly handled for you</span></td></tr>
                  <tr><td className="feat">How costs are shaped</td><td className="fj"><span className="partial">No platform fee, but hosting, extensions and developer time</span></td><td><span className="partial">Monthly plan plus app fees and payment fees</span></td></tr>
                  <tr><td className="feat">Content and blogging</td><td className="fj"><span className="yes">WordPress is the strongest content system going</span></td><td><span className="partial">Works, but more limited</span></td></tr>
                  <tr><td className="feat">Custom features</td><td className="fj"><span className="yes">Almost anything can be built</span></td><td><span className="partial">Possible through apps and custom code, within limits</span></td></tr>
                  <tr><td className="feat">Best fit</td><td className="fj"><span className="yes">Content-led brands, custom logic, owners who want control</span></td><td><span className="yes">Owners who want less technical responsibility</span></td></tr>
                </tbody>
              </table>
            </div>
            <div className="stack mt-8" style={{ maxWidth: 820 }}>
              <p>
                The mistake we see most is people leaving WooCommerce because of a badly run WooCommerce store,
                then discovering on Shopify that their custom features need several paid apps and a custom build.
                The opposite mistake is just as common: paying a developer every month to keep a simple store alive
                on WooCommerce, when Shopify would run it with far less upkeep.
              </p>
              <p>
                If moving is right, we plan it properly: a full redirect map to protect your Google rankings,
                customers, orders and reviews moved across, and integrations rewired. Read how we run a{' '}
                <a href="https://factoryjet.com/replatforming/woocommerce-to-shopify">WooCommerce to Shopify migration</a>,
                see our <a href="https://factoryjet.com/uk/shopify-development">UK Shopify development</a> team, or
                look at our wider <a href="https://factoryjet.com/uk/ecommerce-development">UK ecommerce development</a> work.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 10. FREELANCER VS AGENCY VS FACTORYJET ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">Side by side</span>
            <h2 style={{ maxWidth: 760 }}>Freelance WooCommerce developer vs agency vs FactoryJet</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              All three can be the right answer. It depends on how much your store earns and how much it would
              cost you if it went down on a Friday night.
            </p>
            <div className="card mt-8" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">FactoryJet</th>
                    <th>Typical WooCommerce agency</th>
                    <th>Freelance developer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Best fit</td><td className="fj"><span className="yes">Stores that earn and need looking after</span></td><td><span className="partial">Big design-led builds</span></td><td><span className="partial">Small, defined jobs</span></td></tr>
                  <tr><td className="feat">Who does the work</td><td className="fj"><span className="yes">Experienced developers, founder-reviewed</span></td><td><span className="partial">Mixed seniority after launch</span></td><td>One person</td></tr>
                  <tr><td className="feat">Cover when someone is away</td><td className="fj"><span className="yes">Yes, more than one person knows your store</span></td><td><span className="yes">Usually</span></td><td><span className="no">Rarely</span></td></tr>
                  <tr><td className="feat">Custom plugins and integrations</td><td className="fj"><span className="yes">Yes, Xero, Sage, couriers, stock</span></td><td><span className="partial">Often</span></td><td><span className="partial">Depends on the person</span></td></tr>
                  <tr><td className="feat">Tested updates on staging</td><td className="fj"><span className="yes">Always</span></td><td><span className="partial">Varies</span></td><td><span className="partial">Varies</span></td></tr>
                  <tr><td className="feat">Honest Shopify advice</td><td className="fj"><span className="yes">Yes, we build on both</span></td><td><span className="partial">Often tied to one platform</span></td><td><span className="partial">Varies</span></td></tr>
                  <tr><td className="feat">Support after launch</td><td className="fj"><span className="yes">Yes, same team</span></td><td><span className="partial">Separate contract</span></td><td><span className="partial">If they are free</span></td></tr>
                  <tr><td className="feat">You own code and logins</td><td className="fj"><span className="yes">Always</span></td><td><span className="partial">Usually</span></td><td><span className="partial">Usually</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ 11. WHO WE WORK WITH ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 740 }}>
              <span className="eyebrow">Who we work with</span>
              <h2>The UK businesses WooCommerce fits best</h2>
              <p className="lead mt-4">
                WooCommerce earns its keep when control, content or custom features matter. Three groups make up
                most of the stores our WooCommerce web developers look after.
              </p>
            </div>
            <ul className="col-3 mt-12">
              <li className="svc-card">
                <h3>Makers and independent retailers</h3>
                <p className="mt-4">Craft, homeware, food and gift businesses selling their own products, often from a workshop or a high street shop. They need a fast, simple store, reliable Royal Mail labels and an owner who can manage products without calling a developer.</p>
              </li>
              <li className="svc-card">
                <h3>Wholesalers and trade suppliers</h3>
                <p className="mt-4">Trade accounts, customer prices, minimum quantities and invoice terms, often alongside a retail shop on the same site. Tied to Xero or Sage and a stock system. Our <a href="/uk/b2b-ecommerce">UK B2B ecommerce</a> page goes deeper.</p>
              </li>
              <li className="svc-card">
                <h3>Content-led brands</h3>
                <p className="mt-4">Businesses whose guides, recipes, reviews or courses bring in the traffic, with products sold alongside. WordPress is the strongest content system there is, and WooCommerce lets the shop live in the same place.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ 12. HOSTING (answered honestly) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">WooCommerce hosting</span>
                <h2>We do not sell hosting. Here is what good WooCommerce hosting needs.</h2>
                <div className="stack mt-6">
                  <p>
                    A lot of people searching for WooCommerce support are really dealing with a hosting problem: a
                    store that falls over during a sale, or an admin area that takes ages to load. We are not a
                    hosting company and we do not resell servers. We work with your existing host, or help you move
                    to a better one if yours is the problem.
                  </p>
                  <p>
                    Keeping the two separate matters. When a store goes down, the host blames the plugins and the
                    developer blames the host. A developer who does not profit from your hosting bill can give you a
                    straight answer about which one it is.
                  </p>
                  <p>
                    One warning: a bigger server rarely fixes a slow WooCommerce store on its own. If pages are slow
                    because a plugin runs heavy database queries on every page, more hardware only hides it for a
                    while.
                  </p>
                </div>
              </div>
              <div className="card">
                <span className="eyebrow">A WooCommerce hosting checklist</span>
                <ul className="scope-list yes-list mt-4">
                  <li><b>Supported versions.</b> PHP 8.3 or newer and MySQL 8.0 or MariaDB 10.6 or newer, as WooCommerce recommends.</li>
                  <li><b>Enough memory.</b> A WordPress memory limit of at least 256 MB.</li>
                  <li><b>Server caching.</b> So pages that do not change are not rebuilt for every visitor, while the basket and checkout stay live.</li>
                  <li><b>A staging site.</b> A private copy for testing updates before they touch the live store.</li>
                  <li><b>Tested backups.</b> Daily, stored off the server, and restored at least once so you know they work.</li>
                  <li><b>UK or nearby data centre.</b> Shorter distance means quicker pages for UK shoppers.</li>
                  <li><b>WooCommerce-aware support.</b> A host that understands WooCommerce, not one that just reboots the server.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 13. LONDON + UK DEMAND ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <span className="eyebrow">WooCommerce agency London and UK-wide</span>
            <h2 style={{ maxWidth: 780 }}>Looking for a WooCommerce agency in London? We work across the UK</h2>
            <div className="col-6040 mt-8">
              <div>
                <div className="stack">
                  <p>
                    Plenty of people look for a WooCommerce agency in London, and a lot of UK ecommerce is run from
                    there. But WooCommerce development does not need anyone in your office. Builds, updates, custom
                    plugins and integrations all happen on servers and in code, with video calls and a shared ticket
                    board.
                  </p>
                  <p>
                    So we work with WooCommerce stores in London, the South East, Manchester, Birmingham, Leeds,
                    Scotland and everywhere between, with the same WooCommerce developers on every account. What
                    matters is not the postcode of your agency. It is whether the person who answers your ticket has
                    seen your code before.
                  </p>
                  <p>
                    Whether you searched for a WooCommerce developer UK-wide, a WooCommerce development company near
                    you, or a WooCommerce development agency UK shops recommend, ask the same three things: who will
                    actually work on my store, how do you test updates, and do I own everything at the end?
                  </p>
                  <p>
                    Looking at the bigger picture of how your online business runs, not just the store? Our{' '}
                    <a href="/uk/ecommerce-consultant">UK ecommerce consultant</a> service helps you decide what to
                    fix, build or change first.
                  </p>
                </div>
                <div className="flex-wrap mt-6">
                  <a className="city-pill" href="/uk/london">London</a>
                  <a className="city-pill" href="/uk/manchester">Manchester</a>
                  <a className="city-pill" href="/uk/birmingham">Birmingham</a>
                  <a className="city-pill" href="/uk/leeds">Leeds</a>
                  <a className="city-pill" href="/uk/shopify-development">Shopify development</a>
                  <a className="city-pill" href="/uk/magento">Magento agency</a>
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
                      { kw: 'woocommerce developer', v: '260', w: '100%', kd: 'The head term' },
                      { kw: 'woocommerce agency', v: '210', w: '81%', kd: 'Commercial intent' },
                      { kw: 'woocommerce development agency', v: '170', w: '65%', kd: 'Commercial intent' },
                      { kw: 'woocommerce agency uk', v: '90', w: '35%', kd: 'This page' },
                      { kw: 'woocommerce development services', v: '90', w: '35%', kd: 'Covered above' },
                      { kw: 'woocommerce agency london', v: '50', w: '19%', kd: 'Local, remote-friendly' },
                      { kw: 'woocommerce expert', v: '50', w: '19%', kd: 'Support and fixes' },
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

        {/* ═══ 14. COMPETITOR LISTICLE (self-disclosure, ItemList) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The honest landscape</span>
              <h2>UK WooCommerce agencies and developers worth knowing</h2>
              <p className="lead mt-4">
                We would rather you compared than guessed. These are WooCommerce development companies and resources
                that show up again and again in UK searches, including us. Some are design-led studios, some are
                systems specialists. Talk to a few and pick the fit.
              </p>
            </div>
            <ul className="stack mt-10" style={{ maxWidth: 900 }}>
              {WOO_AGENCIES.map((a, i) => (
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
              Named from live UK search results for WooCommerce agency and developer terms, September 2026. Notes are based on each company’s own website. Listing is not endorsement, and we are one option among them.
            </p>
          </div>
        </section>

        {/* ═══ 15. ENGAGEMENT SHAPES (qualitative, no pricing) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Scope, not packages</span>
                <h2>How a WooCommerce engagement with us is shaped</h2>
                <div className="stack mt-6">
                  <p>
                    Two WooCommerce stores built on the same theme can need completely different amounts of work.
                    One has a dozen well-kept plugins. The other has years of custom code nobody wrote down. So we
                    do not sell fixed WooCommerce packages. We look first, then scope.
                  </p>
                </div>

                <h3 className="mt-8">The shapes our WooCommerce work takes</h3>
                <ul className="scope-list num-list mt-4">
                  <li><b>WooCommerce health check.</b> A one-off review of code, plugins, updates, speed and hosting, with a ranked list of what to fix. Some owners take the list to their own developer, and that is fine.</li>
                  <li><b>Support retainer.</b> Ongoing WooCommerce support and maintenance: tested updates, monitoring, fixes and small improvements from the same team, with an agreed monthly allowance of time.</li>
                  <li><b>New store build.</b> A fixed-scope WooCommerce build, planned in stages so you always know what the next stage covers, then folded into support after launch.</li>
                  <li><b>Fix or feature project.</b> A speed project, a custom plugin, a B2B setup or a rescue, scoped as a defined piece of work.</li>
                  <li><b>Integration build.</b> Connecting WooCommerce to Xero, Sage, a courier or a stock system, with error alerts built in.</li>
                  <li><b>Migration plan.</b> If the health check says Shopify fits better, a written plan for the move, including redirects and data, before anyone commits to a build.</li>
                </ul>

                <div className="mt-8">
                  <ModalCTAButton label="Get my free WooCommerce health check" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What moves the scope</span>
                <div className="scorecard-row"><div className="scorecard-metric">Number and quality of plugins</div><div className="scorecard-val" style={{ fontSize: 14 }}>Count</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">How far behind on updates</div><div className="scorecard-val" style={{ fontSize: 14 }}>Gap</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Custom code nobody documented</div><div className="scorecard-val" style={{ fontSize: 14 }}>Depth</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Systems connected to the store</div><div className="scorecard-val" style={{ fontSize: 14 }}>Reach</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Free health check before you commit</div><div className="scorecard-val" style={{ color: 'var(--green)', fontSize: 14 }}>Always</div></div>
              </div>
            </div>
            <p className="mt-8" style={{ maxWidth: 820 }}>
              Outside the UK? Our <a href="/services/woocommerce-development">WooCommerce development services</a> page
              covers how we work with stores in the US and elsewhere. Ready to talk now? <a href="/contact">Contact us</a> directly.
            </p>
          </div>
        </section>

        {/* ═══ 16. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>WooCommerce questions UK shop owners actually ask</h2>
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

        {/* ═══ 17. FINAL CTA ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>Find out what state your WooCommerce store is really in</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within 24 hours to arrange a free WooCommerce
              health check: your update status, the plugins putting you at risk, speed and hosting, and what to fix
              first. No spam, no obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get my free WooCommerce health check" region="uk" modalVariant="default" btnVariant="primary-light" />
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
