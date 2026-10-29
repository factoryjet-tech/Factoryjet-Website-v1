import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../ai-agents/ai-agents.css';

/* /uk/website-maintenance, built 2026-10-29.

   Truth rules for anyone editing this file.
   1. Every law, standard, platform and price fact links to the page it was
      read on, through the SRC map below. All were fetched on 29 October 2026.
      Re-read the page before changing a figure, and update READ_ON.
   2. No FactoryJet price, rate, response time or uptime promise. The only
      money figures are market ranges published by named UK agencies.
   3. Client proof: GPSUK (Commerceflo, live) and Sow Easy (WooCommerce plus
      Odoo, build still on staging, per src/data/case-studies/index.ts).
      Never present either as Shopify work, never add metrics.
   4. FAQ_ITEMS drives the visible accordion AND the FAQPage JSON-LD. crumbs
      drives the visible trail AND the BreadcrumbList. Never hand-copy either.
   5. Structure mirrors /uk/ecommerce-consultant (imports, components, CSS,
      schema graph, footer). */

const CANONICAL = 'https://factoryjet.com/uk/website-maintenance';
const UPDATED = '2026-10-29';
const READ_ON = '29 October 2026';
const TITLE = 'Website Maintenance Services UK | Stores and B2B | FactoryJet';
const H1 = 'Website Maintenance for UK Businesses: Tested Updates, Working Integrations and a Team That Stays On';
const DESCRIPTION =
  'Website maintenance for UK stores and B2B sites: updates tested on staging, restorable backups, security patching and checks on your Xero, Sage or Linnworks links.';

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
  { name: 'Website Maintenance', url: CANONICAL },
];

/* ─── External sources, each fetched 2026-10-29 and the claim read in the
       fetched body ─────────────────────────────────────────────────────── */
const SRC = {
  // DSIT, Cyber security breaches survey 2025/2026, published 30 April 2026:
  // 43% of businesses had a breach or attack in the last 12 months; medium 65%, large 69%.
  csbs: { label: 'DSIT, Cyber security breaches survey 2025/2026', url: 'https://www.gov.uk/government/statistics/cyber-security-breaches-survey-20252026/cyber-security-breaches-survey-20252026' },
  // NCSC, Cyber Essentials: Requirements for IT Infrastructure v3.3, April 2026, section 3:
  // updates fixing "critical" or "high risk" flaws (CVSS v3 7 or above) within 14 days of release;
  // unsupported software removed; publicly available commercial web applications in scope by default.
  ce: { label: 'NCSC, Cyber Essentials requirements v3.3 (April 2026)', url: 'https://www.ncsc.gov.uk/files/cyber-essentials-requirements-for-it-infrastructure-v3-3.pdf' },
  // ICO: "You must report a notifiable breach to the ICO without undue delay, but not later than
  // 72 hours after becoming aware of it." Processors must tell the controller without undue delay.
  ico: { label: 'ICO, Personal data breaches: a guide', url: 'https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach/personal-data-breaches-a-guide/' },
  // php.net: 8.2 security support ends 31 Dec 2026; 8.3 ends 31 Dec 2027.
  php: { label: 'PHP.net, supported versions', url: 'https://www.php.net/supported-versions.php' },
  // WordPress.org: recommends "PHP version 8.3 or greater"; legacy PHP 7.4+ has reached End Of Life
  // and "may expose your site to security vulnerabilities".
  wp: { label: 'WordPress.org, requirements', url: 'https://wordpress.org/about/requirements/' },
  // Shopify: new API version every three months; each stable version supported a minimum of 12 months.
  shopifyApi: { label: 'Shopify Dev, API versioning', url: 'https://shopify.dev/docs/api/usage/versioning' },
  // HMRC VAT Notice 700/22 section 3.2.1: copy and paste is not a digital link; API transfer and CSV import are.
  mtd: { label: 'HMRC, VAT Notice 700/22, Making Tax Digital for VAT', url: 'https://www.gov.uk/government/publications/vat-notice-70022-making-tax-digital-for-vat/vat-notice-70022-making-tax-digital-for-vat' },
  // Rattlesnake (London studio), article dated 18 Sep 2026, prices reviewed 19 Aug 2026. Bands per month:
  // entry care £15 to £59; managed business care £60 to £149; ecommerce or advanced CMS £99 to £249 or a
  // quote; development retainer £149 to £379+ or a quote. VAT treatment varies by provider; 20% example.
  rattlesnake: { label: 'Rattlesnake, website maintenance cost UK (Sep 2026)', url: 'https://www.rsnake.co.uk/blog/website-maintenance-cost-uk-what-you-should-actually-be-paying-in-2026' },
  // Red Evolution (offices in Aberdeen, Edinburgh and London), updated 11/06/2026: basic management £50 to
  // £300 a month; comprehensive management with SEO, content and development £500 to £2,000-plus a month.
  // VAT not stated.
  redevolution: { label: 'Red Evolution, website management cost in the UK (Jun 2026)', url: 'https://www.redevolution.com/blog/how-much-does-website-management-cost-in-the-uk' },
} as const;

type SrcKey = keyof typeof SRC;

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',   label: 'What maintenance covers' },
  { key: 'cost',     label: 'Cost, VAT and pricing' },
  { key: 'systems',  label: 'Platforms and integrations' },
  { key: 'security', label: 'Security and UK rules' },
  { key: 'working',  label: 'Working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── What maintenance covers ──
  { category: 'basics', question: 'What do website maintenance services include?',
    answer: 'The baseline is keeping the platform, theme and add-ons current, plus backups, security checks and fixes when something breaks. For a UK business site that takes orders or leads, we add tests of forms and checkout after every update, checks that the links to Xero, Sage, Linnworks or your courier still post correctly, speed checks on real pages, and a written log of every change that month.' },
  { category: 'basics', question: 'Does a business website need monthly maintenance?',
    answer: 'If it earns money, yes. Software around your site changes every month whether you touch it or not. PHP 8.2, which still runs many UK WordPress sites, loses security support on 31 December 2026, and Shopify ships a new API version every three months. A site left alone for a year usually has a backlog of updates that are riskier to apply all at once.' },
  { category: 'basics', question: 'What is the difference between website maintenance and website management services?',
    answer: 'The words overlap, and UK agencies use them loosely. Maintenance usually means keeping the site safe and working: updates, backups, security and fixes. Management often adds the work of changing the site: new pages, content, campaign landing pages and reporting. Ask any provider for a written list of tasks. The list tells you more than the name of the plan.' },
  { category: 'basics', question: 'What is a website care plan, and is it worth paying for?',
    answer: 'A care plan is a monthly maintenance service sold as a named package, often with tiers. Cheaper tiers are mostly automated updates and backups. Higher tiers add developer time, testing and change requests. The useful questions are whether updates are tested on a copy of the site before going live, and whether anyone ever restores a backup to prove it works. If both happen every month, it is worth paying for.' },
  { category: 'basics', question: 'Can you maintain a site that a different agency built?',
    answer: 'Yes, and most of the sites we look after came to us that way. We start with a takeover check: who owns the domain, hosting and licences, what is installed, which systems the site talks to, and what is out of date. You get that list in writing, with urgent items marked, before any monthly work is agreed.' },
  { category: 'basics', question: 'What if our old developer will not hand over the logins?',
    answer: 'Start with what is in your company’s name. The domain registrar, the hosting account and any paid plugin licences can usually be recovered by the account holder through the provider’s own support, with proof of ownership. We help you work through each one. Where an account sits in the old agency’s name, we plan a move to a new account in yours.' },

  // ── Cost, VAT and pricing ──
  { category: 'cost', question: 'How much does website maintenance cost in the UK?',
    answer: 'Rattlesnake, a London studio, sampled 15 UK providers in August 2026 and found entry care plans at £15 to £59 a month, managed business care at £60 to £149, and ecommerce or advanced CMS care at £99 to £249 a month or a custom quote. Those are market figures, not our prices. VAT treatment varied between providers in the sample.' },
  { category: 'cost', question: 'How much do website maintenance packages cost for an online store?',
    answer: 'In Rattlesnake’s September 2026 sample, care for stores, memberships and integrated platforms sat at £99 to £249 a month or a custom quote, and development retainers for revenue-critical sites at £149 to £379 or more. Stores cost more because checkout, payments and stock sync need testing after every update. Each system the store talks to adds work.' },
  { category: 'cost', question: 'Are UK maintenance prices quoted with or without VAT?',
    answer: 'Both, which is why like-for-like comparison is hard. In Rattlesnake’s sample of 15 published plans, some providers quoted plus VAT, one included it and several did not say. At the standard 20% rate, a £79 fee before VAT becomes £94.80. Ask every provider for a figure that states VAT either way before you compare.' },
  { category: 'cost', question: 'Why do some agencies charge £500 a month or more?',
    answer: 'Because the plan includes more than maintenance. Red Evolution, a UK agency with offices in Aberdeen, Edinburgh and London, puts basic website management at £50 to £300 a month and full management at £500 to £2,000 or more, where the higher figure adds SEO, content, analytics and ongoing development. Check which of those you need before paying for all of them.' },
  { category: 'cost', question: 'How does FactoryJet price website maintenance?',
    answer: 'There is no FactoryJet rate card on this page, because two sites on the same platform can need different care. After a free check of your site, FactoryJet quotes the takeover work and any ongoing support you choose as fixed prices in writing. Changes outside that scope are quoted and approved one at a time, with no monthly minimum for work you do not use.' },

  // ── Platforms and integrations ──
  { category: 'systems', question: 'Do you maintain WordPress and WooCommerce sites?',
    answer: 'Yes. WordPress and WooCommerce need the most care, because plugins are the usual way in for attackers and the usual cause of a broken checkout. WordPress.org now recommends PHP 8.3 or newer and says older PHP releases are past their end of life and can leave a site open to known flaws. We plan PHP upgrades on a staging copy, test the plugins against them, then move the live site.' },
  { category: 'systems', question: 'Do you look after Magento and Shopify stores as well?',
    answer: 'Yes. Magento and Adobe Commerce need security patches and extension updates applied with care, and we have a separate UK Magento page for that work. Shopify patches its own platform, but custom apps, theme code and integrations still need planned updates as Shopify retires API versions, each supported for at least 12 months. Custom Next.js and headless builds are covered too.' },
  { category: 'systems', question: 'Our store talks to Xero, Sage or Linnworks. Is that part of maintenance?',
    answer: 'It should be, and it is the part most care plans leave out. A plugin update can quietly stop orders reaching Xero, Sage, QuickBooks, NetSuite, Business Central, Odoo, Brightpearl, Linnworks or Mintsoft, and nobody notices until month end. We check those links after each update by following a real test order through to the other system and comparing the totals.' },
  { category: 'systems', question: 'What happens to Making Tax Digital if our store to Xero link breaks?',
    answer: 'If staff fill the gap by copying totals across by hand, that step is no longer a digital link. HMRC’s VAT Notice 700/22 says copy and paste does not count as one, while API transfer and CSV import do. Fixing a broken connector quickly, rather than working around it for weeks, keeps your VAT records inside the rules. Confirm any VAT question with your accountant.' },
  { category: 'systems', question: 'Do you check marketplace, payment and courier connections?',
    answer: 'Yes, where they run through your site. That covers stock and order feeds to Amazon.co.uk, eBay UK, OnBuy, ManoMano and the B&Q marketplace, payments through Stripe, GoCardless, Klarna and Clearpay, and labels and tracking from Royal Mail, DPD and Evri. Each one is a place an update can break something, so each one is on the monthly test list.' },
  { category: 'systems', question: 'What does PHP 8.2 reaching end of support mean for our site?',
    answer: 'PHP is the language WordPress, WooCommerce and Magento run on. PHP.net lists 31 December 2026 as the end of security support for version 8.2, so flaws found after that date will not be fixed. Ask your host which version your site uses today. If the answer is 8.2 or lower, book the upgrade to 8.3 or 8.4 well before that date, prove it on staging, and keep January for trading.' },

  // ── Security and UK rules ──
  { category: 'security', question: 'How quickly should security updates be applied?',
    answer: 'The NCSC’s Cyber Essentials requirements, version 3.3 from April 2026, say updates fixing flaws the vendor rates critical or high risk must be applied within 14 days of release. Publicly available commercial web applications are in scope by default. Even if you are not certified, 14 days is a sensible ceiling for a site that handles customer data or payments.' },
  { category: 'security', question: 'What happens if our website is hacked?',
    answer: 'First we stop the damage, switching the site to a holding page if that is safer, put back the last copy we know is clean, trace how the attacker got in and shut that route, rotate every password and key, and ask Google to review any warnings. If personal data may have been exposed, the ICO says a notifiable breach must be reported without undue delay and no later than 72 hours after you become aware. That decision is yours, and we give you the facts fast.' },
  { category: 'security', question: 'How common are cyber attacks on UK businesses?',
    answer: 'Common, and more so for larger firms. The government’s Cyber security breaches survey 2025/2026, published in April 2026, found 43% of UK businesses reported a breach or attack in the previous 12 months, rising to 65% of medium businesses and 69% of large ones. A website is one of the most visible entry points, which is why patching it cannot wait.' },
  { category: 'security', question: 'Does maintenance cover UK GDPR and cookie consent?',
    answer: 'We maintain the technical parts: the cookie banner works and blocks tags until consent, forms send data only where they should, old admin users are removed and backups are stored securely. We do not give legal advice. Your privacy notice and the decisions about what data you collect stay with you and your adviser, and we make the site match what you decide.' },

  // ── Working with us ──
  { category: 'working', question: 'Will maintenance updates take our site offline?',
    answer: 'Not usually. Every update runs on the hidden staging copy before anything else, and the live site changes only after it passes there. Larger jobs, such as a PHP upgrade or a Magento patch that needs a database change, are scheduled outside your busy hours, agreed with you in advance, and done with a fresh backup ready to restore.' },
  { category: 'working', question: 'Who owns the website if we stop using you?',
    answer: 'You do, from day one. The domain, hosting, store, licences, code and analytics stay in your company’s name, and we work through logins you can remove. If you leave, you get a full backup and our notes on how the site and its integrations are set up. Nothing is held back.' },
  { category: 'working', question: 'Can you work alongside our in-house team or IT provider?',
    answer: 'Yes. Many UK businesses have a marketing team that edits content and an IT provider that runs email and laptops. We take the developer side: updates, code, integrations and fixes. We agree in writing who owns what, so a broken form or a failed Xero sync never falls between three parties. Calls run in UK business hours.' },
  { category: 'working', question: 'Can we send a brief or an RFP for website maintenance?',
    answer: 'Please do. A written brief gets a more useful reply than a form. Include the site address, platform and host, the systems it connects to, who built it, what went wrong in the last year, and any supplier questionnaire or data processing agreement your procurement needs. The founder replies within 24 hours, and we answer every question in writing.' },
];

/* ─── JSON-LD. The Organization is defined once, sitewide; this page only
       references it by @id and never redefines it. ─────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Website Maintenance Services UK',
      serviceType: 'Website maintenance, website support, WordPress and WooCommerce maintenance, Magento support, ecommerce integration monitoring',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'Website maintenance for established UK businesses on WordPress, WooCommerce, Magento, Shopify and custom code: updates tested on staging, restorable backups, security patching, checks on links to Xero, Sage, Linnworks and couriers, fixes, changes and takeover of sites other agencies built. Accounts stay in the client’s name.',
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
      'Website maintenance for established UK businesses: updates tested before they go live, backups we restore, security patching inside 14 days, and checks that orders still reach Xero, Sage and your courier.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/woocommerce/woocommerce-og.webp', width: 1200, height: 630, alt: 'A UK shop owner and a web developer looking at an online store on a laptop in a bright workshop' }],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 11, color: T.n400, marginTop: 12 } as const;
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
          <a href={SRC[id].url} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>{SRC[id].label}</a>
        </span>
      ))}
      .
    </p>
  );
}

export default function WebsiteMaintenanceUKPage() {
  return (
    <>
      <script id="ld-uk-website-maintenance" type="application/ld+json"
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
                  <span className="chip"><span className="dot dot-orange" />UK Website Maintenance</span>
                  <span className="chip">WordPress, Magento, Shopify</span>
                  <span className="chip">Xero, Sage, Linnworks</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  Your site takes orders or trade enquiries every day. It runs on WooCommerce, Magento, Shopify or
                  custom code, and it feeds Xero or Sage, Linnworks or Mintsoft, Stripe or GoCardless, and Royal Mail
                  or DPD labels. The agency that built it has gone quiet. FactoryJet takes it over, tests every update
                  on a hidden copy before release, and checks that orders still reach the systems behind it.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />{READ_ON}</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_website_maintenance_hero" service="Website Maintenance" submitLabel="Get my free site check" />
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/woocommerce/woocommerce-developer.webp" width={1200} height={800} fetchPriority="high" decoding="async" alt="A web developer at a tidy desk in a bright UK office working through code on a large monitor, with an orange mug beside the keyboard" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What a month of care checks</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Updates passed on staging</div><div className="scorecard-note">before anything touches the live site</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Tested</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">A backup restored</div><div className="scorecard-note">to prove it can be used</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Restored</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Test order followed through</div><div className="scorecard-note">store to Xero, stock tool and courier</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Matched</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Written log of every change</div><div className="scorecard-note">what we did, found and need you to decide</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Monthly</div>
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
              <span className="lab">What does website maintenance cover for a UK business?</span>
              <p>
                Website maintenance is the monthly work that keeps a live site safe and earning: software updates
                proven on a hidden copy before release, backups you can restore, security patches applied within 14 days of a
                critical fix, and repairs when something breaks. For a UK store or B2B site it should also check
                that orders, stock and invoices still flow to Xero, Sage, your stock tool and your couriers.
              </p>
            </div>
            <Sources ids={['ce']} />
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Three terms we use a lot</span>
              <p>
                A <b>staging site</b> is a hidden duplicate of your website, invisible to customers, where updates are
                tried first. A <b>plugin</b> (or app, or extension) is an add-on that gives a site a feature, such as a
                payment method or a Xero connector. An <b>integration</b> is the link that moves data between your
                site and another system, such as orders into Sage or stock from Linnworks.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              Most care plans stop at the website. The costly failures we see happen one step further out: a plugin
              update that leaves the checkout working but stops orders reaching the accounts, so the gap only shows
              at month end. That is why every month includes one test order traced all the way through.
            </p>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (each one sourced) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '69%', t: 'of large UK businesses and 65% of medium ones reported a breach or attack in the past 12 months', s: 'DSIT, April 2026', u: SRC.csbs.url },
                { v: '14 days', t: 'to apply updates that fix critical or high-risk flaws, under Cyber Essentials', s: 'NCSC, v3.3', u: SRC.ce.url },
                { v: '72 hours', t: 'to report a notifiable personal data breach to the ICO after you become aware of it', s: 'ICO', u: SRC.ico.url },
                { v: '31 Dec 2026', t: 'is when PHP 8.2, still common on WordPress and Magento hosts, stops getting security fixes', s: 'PHP.net', u: SRC.php.url },
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

        {/* ═══ 4. WHAT WE COVER ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">In plain words</span>
              <h2>What our website maintenance services cover</h2>
              <p className="lead mt-4">
                Nine jobs, done every month and written down. The first four keep the site safe. The last five keep
                it earning, and they are where a site with real orders differs from a brochure site.
              </p>
            </div>
            <ul className="col-3 mt-12">
              <li className="svc-card">
                <h3>Tested updates</h3>
                <p className="mt-4">WordPress core, themes, plugins, Magento patches, Shopify app changes and code libraries, applied to staging first, tested against your forms and checkout, then moved to the live site.</p>
              </li>
              <li className="svc-card">
                <h3>Backups we restore</h3>
                <p className="mt-4">A copy of files and database taken on a set timetable, kept off your server, and put back onto a test copy every month. A backup nobody has restored is a guess.</p>
              </li>
              <li className="svc-card">
                <h3>Security patching</h3>
                <p className="mt-4">Critical and high-risk fixes inside the 14 days Cyber Essentials sets, plugin vulnerability checks, admin user reviews, two-factor logins and removal of software that no longer gets fixes.</p>
              </li>
              <li className="svc-card">
                <h3>Hosting and PHP upgrades</h3>
                <p className="mt-4">Server software kept on supported versions. PHP 8.2 loses security support on 31 December 2026, so we plan the move to 8.3 or 8.4 on staging, not in a January rush.</p>
              </li>
              <li className="svc-card">
                <h3>Integration checks</h3>
                <p className="mt-4">A real test order followed into Xero, Sage (50, 200 or Intacct), QuickBooks, NetSuite, Business Central, Odoo or Brightpearl, and stock checked against Linnworks or Mintsoft. See our <a href="/uk/shopify-xero-integration">Shopify Xero integration</a> page for one of these links in depth.</p>
              </li>
              <li className="svc-card">
                <h3>Marketplaces, payments, couriers</h3>
                <p className="mt-4">Feeds to Amazon.co.uk, eBay UK, OnBuy, ManoMano, the B&amp;Q marketplace and Zalando for EU sales. Payments through Stripe, GoCardless, Klarna and Clearpay. Labels from Royal Mail, DPD and Evri.</p>
              </li>
              <li className="svc-card">
                <h3>Speed and search health</h3>
                <p className="mt-4">Monthly checks on the pages that bring in orders, so a heavy plugin or a large image does not quietly slow them down, and an update does not break redirects or block search crawlers.</p>
              </li>
              <li className="svc-card">
                <h3>Changes and small builds</h3>
                <p className="mt-4">New landing pages, product templates, edits to forms and modest new features, handled by people who already know your code. Anything larger is quoted as a fixed price first.</p>
              </li>
              <li className="svc-card">
                <h3>Help when it goes wrong</h3>
                <p className="mt-4">If the site is hacked or goes down, we restore, find the cause and close it. If personal data may be involved, you get the facts quickly, because the ICO clock is 72 hours.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ 5. WHY INTEGRATIONS BREAK (UK SPECIFICS) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">The part care plans skip</span>
                <h2>Why a UK site that looks fine can still be losing orders</h2>
                <div className="stack mt-6">
                  <p>
                    <b>Connectors break silently.</b> A store can take payment perfectly while the order never
                    reaches Sage, the stock count in Linnworks drifts, or the Royal Mail label is never created. The
                    customer sees nothing wrong until the parcel does not arrive. A care plan that only checks the
                    homepage loads will miss all three.
                  </p>
                  <p>
                    <b>The platforms move on a timetable.</b> Shopify ships a fresh API version each quarter and
                    keeps each one running for a minimum of 12 months. Apps and custom links written against an old version
                    stop working when it retires. WordPress.org now asks for PHP 8.3 or newer and flags older
                    releases as past their end of life, which leaves known flaws unfixed.
                  </p>
                  <p>
                    <b>Workarounds can put VAT records outside the rules.</b> When the store to Xero link fails, the
                    usual fix is a member of staff copying daily totals across. HMRC’s VAT Notice 700/22 says copy and
                    paste is not a digital link for Making Tax Digital, while API transfer and CSV import are. Repairing
                    the connector quickly keeps the chain digital. Your accountant confirms the VAT detail.
                  </p>
                </div>
                <Sources ids={['shopifyApi', 'wp', 'mtd']} />
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Where we see breakages start</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Plugin or app update</div><div className="scorecard-note">checkout works, the order feed does not</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Most often</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">PHP or server upgrade by the host</div><div className="scorecard-note">old plugins fail on the new version</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Often</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">API version retired</div><div className="scorecard-note">Shopify apps and custom links</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Quarterly</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Expired key or password change</div><div className="scorecard-note">Xero, courier or payment account</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Easy to miss</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">A test order traced end to end</div><div className="scorecard-note">catches all four</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Every month</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 6. NUMBERED STEPS ═══ */}
        <section className="sec-lg dot-grid" id="how-we-work">
          <div className="wrap">
            <div style={{ maxWidth: 740 }}>
              <span className="eyebrow">How a takeover runs</span>
              <h2>How we take over and maintain a UK website, in seven steps</h2>
              <p className="lead mt-4">
                The same steps whether we built the site or someone else did. Nothing on your live site changes
                until step five, and you see a written check of your own site before you sign anything.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'A free check of your site', d: 'From the outside, with no logins: platform and versions, PHP, SSL, visible plugins, speed on key pages and obvious security gaps. You get it in plain English, urgent items first.' },
                { n: '02', t: 'Access and ownership', d: 'We confirm the domain, hosting, store and licences sit in your company’s name, collect logins you can remove later, and plan moves for anything still held by the old agency.' },
                { n: '03', t: 'A full inventory', d: 'Every plugin, app, theme customisation and scheduled task, plus every system the site talks to: accounts, stock, marketplaces, payments and couriers, with who owns each record.' },
                { n: '04', t: 'Backup and a restore test', d: 'A complete backup taken and restored on a staging copy. Until a restore has worked once, no update is applied to anything.' },
                { n: '05', t: 'Urgent fixes, quoted first', d: 'A PHP release past its support date, plugins their authors no longer update, former staff still holding admin logins, a contact form that fails quietly. Each fix is listed with a fixed price in writing, and you approve it before we start.' },
                { n: '06', t: 'The monthly cycle', d: 'Updates on staging, tests on forms, checkout and a traced test order, then the live release with a fresh backup ready. Security fixes rated critical go out within 14 days.' },
                { n: '07', t: 'A written report and a review', d: 'Every change made, every problem spotted, and the questions only you can answer. Every few months we review the scope with you, because a site that changes needs different care.' },
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
          </div>
        </section>

        <MidPageCTA
          headline={'Do you know what is out of date on your website?'}
          sub={'Send the address. We check versions, backups, security and speed from the outside, then send a short note listing the urgent items, the ones that can wait, and which of your integrations we would test first.'}
          label={'Get my free site check'}
        />

        {/* ═══ 7. COMPARISON TABLE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">Side by side</span>
            <h2 style={{ maxWidth: 760 }}>Doing it yourself vs your host’s plan vs a freelancer vs a maintenance team</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              Each option suits someone. For a site that takes orders and feeds back-office systems, the rows that
              matter most are testing, integrations and cover when someone is away.
            </p>
            <div className="card mt-8" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">Maintenance team (FactoryJet)</th>
                    <th>Do it yourself</th>
                    <th>Host’s managed plan</th>
                    <th>Freelancer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Best fit</td><td className="fj"><span className="yes">Sites that take orders or trade enquiries</span></td><td><span className="partial">Simple sites, confident owner</span></td><td><span className="partial">Server upkeep only</span></td><td><span className="partial">Smaller sites, steady scope</span></td></tr>
                  <tr><td className="feat">Updates tested on staging</td><td className="fj"><span className="yes">Every update</span></td><td><span className="no">Rarely</span></td><td><span className="partial">Core only, sometimes</span></td><td><span className="partial">Depends on the person</span></td></tr>
                  <tr><td className="feat">Integrations checked (Xero, Sage, Linnworks)</td><td className="fj"><span className="yes">Test order traced monthly</span></td><td><span className="no">When something breaks</span></td><td><span className="no">Out of scope</span></td><td><span className="partial">If they built them</span></td></tr>
                  <tr><td className="feat">Backups restore-tested</td><td className="fj"><span className="yes">Monthly</span></td><td><span className="no">Rarely</span></td><td><span className="partial">Server backups, untested</span></td><td><span className="partial">Varies</span></td></tr>
                  <tr><td className="feat">Cover during holidays and illness</td><td className="fj"><span className="yes">A team, not one person</span></td><td><span className="no">You</span></td><td><span className="yes">For the server</span></td><td><span className="no">One person</span></td></tr>
                  <tr><td className="feat">Changes and new features</td><td className="fj"><span className="yes">Same team, quoted first</span></td><td><span className="partial">Within your skills</span></td><td><span className="no">Not offered</span></td><td><span className="yes">Usually</span></td></tr>
                  <tr><td className="feat">Accounts in your name</td><td className="fj"><span className="yes">Always</span></td><td><span className="yes">Yes</span></td><td><span className="partial">Hosting held by the host</span></td><td><span className="partial">Ask</span></td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6" style={{ maxWidth: 820 }}>
              These mix well. Plenty of UK businesses keep a good host for the server, an in-house marketer for
              content, and bring us in for the developer side. What matters is a written split of who owns which job.
            </p>
          </div>
        </section>

        {/* ═══ 8. COST (market ranges only) ═══ */}
        <section className="sec-lg dot-grid" id="cost">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">What the market charges</span>
                <h2>What website maintenance costs in the UK</h2>
                <div className="stack mt-6">
                  <p>
                    Published UK prices run from about £15 to over £2,000 a month, because they price different
                    jobs. Rattlesnake, a London studio, reviewed 15 UK providers’ published plans on 19 August 2026
                    and grouped them into four bands. Red Evolution, an agency with offices in Aberdeen, Edinburgh and
                    London, puts full management that adds SEO, content and development at £500 to £2,000 or
                    more a month.
                  </p>
                  <p>
                    Watch VAT. In Rattlesnake’s sample some providers quote plus VAT, one includes it and several do not
                    say. At 20%, a £79 fee before VAT is £94.80. Red Evolution’s article does not state VAT either way.
                    Ask every provider for a figure that says which.
                  </p>
                  <p>
                    These are market figures, not FactoryJet prices. We quote the takeover work and any ongoing support
                    you choose as fixed prices in writing, after the free check.
                  </p>
                </div>
                <Sources ids={['rattlesnake', 'redevolution']} />
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">UK market bands, per month</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Entry care</div><div className="scorecard-note">brochure sites, simple WordPress</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>£15 to £59</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Managed business care</div><div className="scorecard-note">lead-generation sites, frequent changes</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>£60 to £149</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Ecommerce or advanced CMS</div><div className="scorecard-note">stores, memberships, integrations</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>£99 to £249 or quote</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Development retainer</div><div className="scorecard-note">revenue-critical, evolving sites</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>£149 to £379+ or quote</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Full management</div><div className="scorecard-note">adds SEO, content, development (Red Evolution)</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>£500 to £2,000+</div></div>
                <p style={{ fontFamily: T.fm, fontSize: 10, color: T.n400, marginTop: 10 }}>First four rows: Rattlesnake, September 2026. VAT treatment varies by provider.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 9. HOUSE TERMS + BRIEF ASK ═══ */}
        <section className="sec-lg" id="terms">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">How we work with you</span>
                <h2>Terms for website maintenance with FactoryJet</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  FactoryJet has served 500+ businesses since 2014, most of them in commerce. We design, build and
                  support stores and B2B sites, so maintenance is part of the job, not an afterthought. We work
                  remotely with UK businesses and hold calls in UK business hours.
                </p>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>A check on your own site before you sign.</b> You see a written review of your actual website, not a sales deck.</li>
                  <li><b>Fixed prices in writing.</b> The takeover, each fix and any ongoing support you choose are quoted as fixed prices after a short scoping call.</li>
                  <li><b>You own it from day one.</b> Domain, hosting, store, code, licences and every login stay in your company’s name.</li>
                  <li><b>Hosting and licences at cost.</b> They can run in your own accounts, billed to you directly, with no markup from us.</li>
                  <li><b>Defects covered.</b> Faults in work we deliver are fixed inside the price, for a cover period agreed before work starts.</li>
                  <li><b>No monthly minimum for changes.</b> Each change outside the agreed scope is quoted and approved first.</li>
                </ul>
                <div className="mt-8">
                  <ModalCTAButton label="Get my free site check" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Have a brief or an RFP? Send it.</span>
                <p className="mt-2" style={{ fontSize: 14 }}>A written brief gets a written answer to every question. These five things make it quick:</p>
                <div className="scorecard-row"><div><div className="scorecard-metric">Site address, platform and host</div><div className="scorecard-note">and who built it</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>1</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Systems it connects to</div><div className="scorecard-note">accounts, stock, marketplaces, couriers</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>2</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">What went wrong in the last year</div><div className="scorecard-note">outages, hacks, broken syncs</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>3</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Who has the logins today</div><div className="scorecard-note">you, an agency or a freelancer</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>4</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Procurement paperwork</div><div className="scorecard-note">security questionnaire, data processing agreement</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>5</div></div>
                <div className="mt-6">
                  <ModalCTAButton label="Send us your brief" region="uk" modalVariant="default" btnVariant="secondary-light" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 10. UK RULES ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Security and UK rules</span>
                <h2>The UK security rules a maintenance plan should work to</h2>
                <div className="stack mt-6">
                  <p>
                    <b>Patch inside 14 days.</b> The NCSC’s Cyber Essentials requirements, version 3.3 from April 2026,
                    say updates that fix flaws a vendor rates critical or high risk, or that score 7 or above on the
                    CVSS v3 scale, must be applied within 14 days of release. Software that no longer gets fixes must
                    be removed. Publicly available commercial web applications are in scope by default, which covers
                    WordPress, WooCommerce and Magento.
                  </p>
                  <p>
                    <b>Breaches have a 72-hour clock.</b> The ICO says a notifiable personal data breach must be
                    reported without undue delay and no later than 72 hours after you become aware of it. If a
                    processor working for you has the breach, it must tell you without undue delay. A hacked checkout
                    or a leaked customer export can start that clock, so the first hours need facts, not guesses.
                  </p>
                  <p>
                    <b>Attacks are routine.</b> The government’s Cyber security breaches survey 2025/2026 found 43% of
                    UK businesses reported a breach or attack in the previous 12 months: 65% of medium businesses and
                    69% of large ones. Bigger firms are found more often, and a website is one of the doors.
                  </p>
                </div>
                <Sources ids={['ce', 'ico', 'csbs']} />
                <p style={srcNote}>We are not lawyers. We keep the site patched and give you the facts; reporting decisions and legal advice stay with you and your adviser.</p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/magento/magento-team.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Three members of a web engineering team planning a site and its connected systems on a whiteboard in a bright office" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Before the first update, we draw every system your site talks to on one page. The monthly test
                    order follows that map, so a broken link shows up in our report, not in your month-end close.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 11. PROOF + PLATFORMS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">UK work and platforms</span>
              <h2>Platforms we maintain, and UK sites we work on</h2>
              <div className="stack mt-6">
                <p>
                  <b>WordPress and WooCommerce</b> get the most attention, because plugins carry the most risk. See our{' '}
                  <a href="/uk/woocommerce" style={inlineLink}>UK WooCommerce</a> page. <b>Magento and Adobe Commerce</b>{' '}
                  need patches applied with care, covered on our <a href="/uk/magento" style={inlineLink}>UK Magento</a>{' '}
                  page. <b>Shopify and Shopify Plus</b> stores need app, theme and integration care as API versions
                  retire; see <a href="/uk/shopify-development" style={inlineLink}>Shopify development in the UK</a>.
                  Custom Next.js and headless builds are covered too.
                </p>
                <p>
                  If maintenance has become patching a site that no longer fits the business, a rebuild may cost less
                  over two years. Our <a href="/uk/ecommerce-redesign" style={inlineLink}>UK ecommerce redesign</a> page
                  sets out when that is true. In the US, see our{' '}
                  <a href="/services/website-maintenance" style={inlineLink}>website maintenance services</a> page.
                </p>
              </div>
            </div>
            <ul className="col-3 mt-10">
              <li className="svc-card">
                <h3>GPSUK</h3>
                <p className="mt-4">A UK promotional products supplier. We built its trade storefront on Commerceflo, where business buyers log in, see their own account pricing and move from quote to order. It is live, and our SEO and AI search work on it continues. <a href="/case-studies/gpsuk-promotional-products">Read the case study</a>.</p>
              </li>
              <li className="svc-card">
                <h3>Sow Easy</h3>
                <p className="mt-4">A UK wholesale client. We are building a WordPress WooCommerce trade store that reads stock, pricing and SKUs from Odoo. The store and the Odoo link are being tested on staging, and launch is still ahead. <a href="/case-studies/sow-easy-distributor-portal">Read the case study</a>.</p>
              </li>
              <li className="svc-card">
                <h3>Why they matter here</h3>
                <p className="mt-4">Both are sites where the store and the back office must agree. That is the same discipline monthly maintenance needs: every update is tested against the systems behind the site, not only the pages in front.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ 12. DEMAND PANEL ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">What UK buyers search for</span>
                <h2>How UK businesses look for website maintenance</h2>
                <div className="stack mt-6">
                  <p>
                    Searches split between people who want the work done and people trying to price it. “Website
                    maintenance packages” and “website maintenance cost” together draw 280 searches a month in the UK,
                    which is why this page shows the market bands with their sources rather than a vague “it depends”.
                  </p>
                  <p>
                    “Website management services” draws more searches than “website maintenance company”. The work
                    overlaps, so we answer both: maintenance keeps the site safe, and changes and small builds come from
                    the same team when you need them.
                  </p>
                </div>
              </div>
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${T.n200}`, padding: '14px 18px' }}>
                  <span style={{ fontFamily: T.fm, fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: T.n400 }}>UK · Monthly Search Demand</span>
                  <span style={{ background: T.small, color: '#fff', fontFamily: T.fm, fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>DataForSEO</span>
                </div>
                <div style={{ padding: '4px 18px 14px' }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {[
                      { kw: 'website maintenance', v: '480', w: '100%', kd: 'The head term' },
                      { kw: 'website maintenance services', v: '320', w: '67%', kd: 'Buyer intent' },
                      { kw: 'website management services', v: '210', w: '44%', kd: 'Wider scope' },
                      { kw: 'website maintenance packages', v: '170', w: '35%', kd: 'Comparing plans' },
                      { kw: 'website support', v: '140', w: '29%', kd: 'Help needed now' },
                      { kw: 'website maintenance cost', v: '110', w: '23%', kd: 'Pricing stage' },
                      { kw: 'website maintenance uk', v: '90', w: '19%', kd: 'Buyer intent, UK' },
                      { kw: 'wordpress maintenance', v: '90', w: '19%', kd: 'Platform-specific' },
                    ].map((r) => (
                      <li key={r.kw} className="demand-row">
                        <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 9, color: T.n400 }}> searches</span></span></div>
                        <div className="demand-bar"><i style={{ width: r.w }} /></div>
                        <div className="demand-kd">{r.kd}</div>
                      </li>
                    ))}
                  </ul>
                  <p style={{ textAlign: 'center', fontFamily: T.fm, fontSize: 10, color: T.n400, marginTop: 10 }}>Source: DataForSEO, Google Ads volumes, United Kingdom, read {READ_ON}</p>
                </div>
              </div>
            </div>
            <div className="flex-wrap mt-8">
              <a className="city-pill" href="/uk/woocommerce">WooCommerce UK</a>
              <a className="city-pill" href="/uk/magento">Magento UK</a>
              <a className="city-pill" href="/uk/shopify-development">Shopify development UK</a>
              <a className="city-pill" href="/uk/shopify-xero-integration">Shopify Xero integration UK</a>
              <a className="city-pill" href="/uk/ecommerce-redesign">Ecommerce redesign UK</a>
              <a className="city-pill" href="/services/website-maintenance">Website maintenance (US)</a>
            </div>
          </div>
        </section>

        {/* ═══ 13. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>Website maintenance questions UK businesses ask us</h2>
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

        {/* ═══ 14. FINAL CTA (the only dark section) ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>Find out what your website needs before something breaks</h2>
            <p className="mt-4">
              Send your name, work email and site address. The founder replies within 24 hours with what we found
              from the outside and what we would fix first. You keep every account, whatever you decide.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get my free site check" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/uk/woocommerce" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See WooCommerce support</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}
