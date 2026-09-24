import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../ai-agents/ai-agents.css';

const CANONICAL = 'https://factoryjet.com/uk/ecommerce-consultant';
const UPDATED = '2026-09-24';
const TITLE = 'Ecommerce Consultant UK | Advice You Can Build | FactoryJet';
const H1 = 'Ecommerce Consultant UK: Senior Advice on What to Fix First, and a Team That Can Build It';

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
   schema can never describe a trail a human cannot see. Never hand-copy a
   second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Ecommerce Consultant', url: CANONICAL },
];

/* ─── External sources, each fetch-verified 2026-09-24 (HTTP 200, claim
       confirmed in the fetched body) ──────────────────────────────────── */
// ONS series J4MC "Internet sales as a percentage of total retail sales
// (ratio) (%)", dataset DRSI, released 18 September 2026. Latest value in the
// CSV: 2026 AUG = 27.3. fetch-verified 2026-09-24
const SRC_ONS = 'https://www.ons.gov.uk/businessindustryandtrade/retailindustry/timeseries/j4mc/drsi';
// gov.uk: "You must tell the customer they can cancel their order up to 14 days
// after their order is delivered." If not told, they can cancel "at any time in
// the next 12 months". fetch-verified 2026-09-24
const SRC_DISTANCE = 'https://www.gov.uk/online-and-distance-selling-for-businesses';
// HMRC VAT Notice 703: goods sent outside the UK can only be zero-rated if all
// conditions are met, including export within time limits and keeping official
// or commercial evidence of export. Northern Ireland to EU follows separate
// rules. fetch-verified 2026-09-24
const SRC_VAT_EXPORT = 'https://www.gov.uk/guidance/vat-on-goods-exported-from-the-uk-notice-703';
// HMRC: digital platforms must "collect and check information about sellers"
// and "report details about sellers to HMRC". fetch-verified 2026-09-24
const SRC_PLATFORM_REPORTING = 'https://www.gov.uk/guidance/reporting-rules-for-digital-platforms';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',     label: 'Ecommerce consulting basics' },
  { key: 'choosing',   label: 'Choosing an ecommerce consultant' },
  { key: 'engagement', label: 'Cost & how it works' },
  { key: 'uk',         label: 'Platforms, SEO & UK rules' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Ecommerce consulting basics ──
  { category: 'basics', question: 'What is an ecommerce consultant?',
    answer: 'An ecommerce consultant is an experienced outside expert who reviews how your online store works and tells you what to change to sell more, spend less, or grow safely. They look at your platform, your site speed, your checkout, your marketing, your marketplaces and the systems behind the shop. The output is a clear, ranked list of fixes, not a vague report.' },
  { category: 'basics', question: 'What does an ecommerce consultant actually do day to day?',
    answer: 'They spend most of their time looking at evidence. That means reading your analytics, testing your checkout on a phone, checking how orders flow into stock and accounting, reviewing your ad spend and search data, and talking to the people who run the business. Then they turn what they found into decisions: what to fix first, what to stop doing, and what to leave alone.' },
  { category: 'basics', question: 'What is the difference between ecommerce consulting and an ecommerce agency?',
    answer: 'Ecommerce consulting is advice: working out what should happen and in what order. An ecommerce agency does the work: design, development, marketing. Pure consultants often stop at the plan, and some agencies skip the plan and start building. FactoryJet does both. Our senior people give you the plan, and our team can then build and support it, or hand it to your own developers.' },
  { category: 'basics', question: 'Do I need an ecommerce consultant or just a developer?',
    answer: 'If you already know exactly what needs building, a good developer is enough. If you are unsure whether the problem is the platform, the site, the marketing or the operations behind it, start with a consultant. Hiring a developer to fix the wrong thing is the most expensive mistake we see. A short ecommerce audit tells you where the real problem is first.' },
  { category: 'basics', question: 'Is ecommerce still profitable in 2026?',
    answer: 'Yes, for businesses that control their costs. The ONS reports internet sales at 27.3% of all UK retail sales in August 2026, so online is a large, settled share of how people buy. What has changed is margin. Ad costs, returns and delivery eat into profit, so the winners watch profit per order, not just revenue, and fix leaks in all three.' },
  { category: 'basics', question: 'What are the 5 C’s of ecommerce?',
    answer: 'There is no single official list, and different writers use different words. A common version is customer, content, commerce, community and convenience. In practice we use a simpler test: can people find you, do they trust you, can they buy easily, does the order arrive well, and do they come back. Each of those maps to something we can measure and fix.' },

  // ── Choosing an ecommerce consultant ──
  { category: 'choosing', question: 'How do I choose an ecommerce consultant in the UK?',
    answer: 'Ask three things. First, what have they run or rebuilt themselves, on which platforms. Second, who exactly will do the work, and will that person still be there after the report. Third, how will success be measured, in numbers you already track. Also ask whether they are paid commission by any platform or app they might recommend. A good consultant answers all four plainly.' },
  { category: 'choosing', question: 'Freelance ecommerce consultant or a consultancy: which is better?',
    answer: 'A freelance or independent ecommerce consultant is often very senior and quick to start, and is great for an audit or a second opinion. The limit is capacity: one person rarely has the engineering team to build, integrate and support a big change. A consultancy with its own delivery team can carry the plan through. Choose based on whether you need advice only, or advice plus delivery.' },
  { category: 'choosing', question: 'Should we use a big management consultancy for ecommerce?',
    answer: 'Usually only if you are a large retailer running a multi-year programme with many teams. Global strategy firms are built for board-level transformation, and that model tends to be heavy and slow for a UK brand selling online. Most small and mid-sized online retailers get more from a smaller ecommerce consultancy where senior people do the work and the same team can implement it.' },
  { category: 'choosing', question: 'Who are the top ecommerce consultancies in the UK?',
    answer: 'It depends on what you need. Independent consultants such as Digital Juggler (James Gurd) and Adam Pritchard are well known. Firms such as Vervaunt, Heur, Unified and Visualsoft combine consultancy with delivery or marketing, and Digital Blueprint works with multi-channel retailers. FactoryJet is one option among them. We list each one, with a neutral note, further up this page.' },
  { category: 'choosing', question: 'Do you work with ecommerce businesses in London?',
    answer: 'Yes. We work with online retailers and brands in London and across the rest of the UK, including Manchester, Birmingham, Leeds and Scotland. Ecommerce consulting work is done over video calls, shared screens and written reports, so nobody needs to be on-site. Businesses outside London get the same senior people and the same depth of work.' },
  { category: 'choosing', question: 'Do I have to use FactoryJet to build what you recommend?',
    answer: 'No. The plan is yours. Every recommendation is written so that your own team, a freelancer or another agency can pick it up and act on it. Many clients do ask us to build it, because the people who wrote the plan already know the problem. But the audit is designed to stand on its own, and we say so before you sign anything.' },

  // ── Cost & how it works ──
  { category: 'engagement', question: 'How much does an ecommerce consultant cost?',
    answer: 'It depends on scope, not a day-rate card. The main cost drivers are the size of your catalogue, how many sales channels you run, how many systems are connected (ERP, stock, 3PL, accounting), whether you are replatforming, and whether you want advice only or advice plus a build. We scope after a free first call and give you a fixed quote for each stage.' },
  { category: 'engagement', question: 'What is an ecommerce audit and what do we get?',
    answer: 'An ecommerce audit is a structured check of your whole online store: platform, speed, checkout, product data, search visibility, marketing spend, marketplaces and the operations behind orders. You get a short written report with a ranked list of fixes, the reason for each, the effort involved, and who should do it. It is written for decisions, not to be filed away.' },
  { category: 'engagement', question: 'How long does an ecommerce audit take?',
    answer: 'For most UK online stores it takes around two weeks, depending on how many channels and systems are in scope. A single Shopify store with one warehouse moves quickly. A brand selling direct, on Amazon and to trade customers, with an ERP and a 3PL, takes longer. We agree the scope and the timeline on the first call, before anything starts.' },
  { category: 'engagement', question: 'Can you advise us on an ongoing basis?',
    answer: 'Yes. Some clients want a senior ecommerce advisor on call rather than a one-off project. Ongoing advisory usually means a regular review of trading and priorities, a second opinion on agency and app proposals, help writing briefs, and a check on work before it goes live. It suits brands with a small in-house team that needs senior backup, not more hands.' },
  { category: 'engagement', question: 'Who does the work?',
    answer: 'Senior people, with the founder, Bhavesh Barot, involved in every engagement. FactoryJet was founded in 2014 and has worked with more than 500 businesses, most of them in commerce. There is no hand-off to a junior team after you sign. The people who run your audit are the same people who design and build the fixes if you ask us to.' },
  { category: 'engagement', question: 'How do we get started?',
    answer: 'Send your name and work email through the form on this page. The founder replies within 24 hours to book a short call. On that call we talk through your store, your channels and what is worrying you, and suggest whether an audit, a strategy project or ongoing advice is the right first step. That first conversation costs nothing.' },

  // ── Platforms, SEO & UK rules ──
  { category: 'uk', question: 'Should we move from WooCommerce or Magento to Shopify?',
    answer: 'Sometimes, but not by default. Shopify and Shopify Plus suit most direct-to-consumer brands that want less maintenance. Adobe Commerce (Magento) still fits complex catalogues, heavy B2B pricing and custom logic. WooCommerce works well for content-led sites on WordPress. BigCommerce suits some B2B and multi-storefront setups. The right answer comes from your catalogue, channels and integrations, not from which platform is fashionable.' },
  { category: 'uk', question: 'Is Shopify still worth it in 2026?',
    answer: 'For most UK direct-to-consumer brands, yes. It is fast to launch, reliable at peak times, and has a large app and partner ecosystem. It gets harder when you have complex B2B pricing, unusual product rules, or many integrations that apps do not cover well. A Shopify consultant should tell you where those limits will bite for your business before you commit.' },
  { category: 'uk', question: 'What does an ecommerce SEO consultant do?',
    answer: 'An ecommerce SEO consultant makes your products and categories easier for search engines to find and rank. The work covers site structure, category pages, product data, page speed, duplicate pages from filters, and internal links. Increasingly it also covers AI search, meaning how your brand shows up in ChatGPT, Perplexity and Google AI Overviews. We cover this in the audit and in our ecommerce SEO service.' },
  { category: 'uk', question: 'Is SEO replaced by AI?',
    answer: 'No, but it is changing. AI assistants and AI Overviews now answer many questions before anyone clicks, and they still rely on pages they can read and trust. For an online store that means clear product data, category pages that answer real questions, and a site that loads fast. Good ecommerce SEO and AI search visibility are now mostly the same work.' },
  { category: 'uk', question: 'Do we charge VAT when selling to EU customers from the UK?',
    answer: 'It depends on the route. HMRC’s guidance says goods sent from Great Britain to a destination outside the UK can be zero-rated for UK VAT only if you meet the conditions, including exporting within the time limits and keeping proof of export. The EU customer may then face import VAT and duty. Northern Ireland follows separate rules. We map this, then you confirm with your accountant.' },
  { category: 'uk', question: 'What are the UK rules on online returns?',
    answer: 'For most goods sold online, gov.uk says you must tell customers they can cancel their order up to 14 days after it is delivered. If you do not tell them, they can cancel at any time in the next 12 months. So your returns wording, checkout and order emails need to be right. We check these as part of the audit.' },
  { category: 'uk', question: 'Does HMRC check online sellers?',
    answer: 'HMRC has digital platform reporting rules that require online platforms to collect and check information about sellers and report details about them to HMRC. That applies to marketplaces, not to your own store software. Either way, your sales records should match your accounts. We often connect the store and marketplaces to Xero or your ERP so the numbers line up.' },
  { category: 'uk', question: 'Can you help us sell on Amazon UK, eBay, OnBuy or TikTok Shop?',
    answer: 'Yes. We look at which marketplaces suit your products and margins, how stock and orders should sync so you do not oversell, and how listings and pricing should differ from your own site. Marketplaces bring reach but take fees and control, so the plan covers which products go where, not just whether to list. We can build the integrations too.' },
  { category: 'uk', question: 'Can you help with B2B trade ordering?',
    answer: 'Yes. Many UK brands sell both to consumers and to trade customers such as shops, salons or distributors. B2B ecommerce needs customer-specific pricing, account credit, bulk ordering, and invoices that flow into your accounts. We advise on whether your current platform can handle it or whether a separate trade portal makes sense, then build it if you want. Bombay Petals is one B2B client we support.' },
];

/* ─── Named UK ecommerce consultancies (open self-disclosure, ItemList). Each
       note is based on the company’s own homepage, fetched 2026-09-24. ───── */
const CONSULTANCIES: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. Senior ecommerce consultants backed by a delivery team: we audit the store, rank the fixes, and can then build and support them on Shopify, Adobe Commerce, BigCommerce or WooCommerce. Founder involved on every engagement. You can also take the plan elsewhere.' },
  { name: 'Digital Juggler (James Gurd)', note: 'An independent UK ecommerce consultant with more than 20 years of experience, covering ecommerce strategy, technology selection, replatforming consultancy, training and website optimisation for B2C and B2B brands.' },
  { name: 'Adam Pritchard', note: 'An independent UK ecommerce consultant with more than 20 years of experience, offering ecommerce strategy, paid advertising, SEO, conversion rate optimisation and digital marketing support for startups through to large brands.' },
  { name: 'Vervaunt', note: 'A London-based ecommerce consultancy and performance marketing agency working with premium brands, covering strategy and roadmaps, technology audits, replatforming, conversion optimisation and paid media.' },
  { name: 'Heur', note: 'A UK agency focused on ecommerce strategy and management for direct-to-consumer brands, combining consultancy with paid media, CRM and AI tooling.' },
  { name: 'Unified', note: 'A full-service ecommerce agency in Richmond, London, working across Shopify and Adobe Commerce with strategy, design, development and marketing for premium DTC and B2B brands.' },
  { name: 'Visualsoft', note: 'A UK retail agency offering Shopify builds and migrations, point-of-sale integration, custom app development, marketing and ongoing consultancy for retailers with online and physical stores.' },
  { name: 'Digital Blueprint', note: 'A strategic marketing and design consultancy based in Norwich, offering ecommerce strategy, creative, digital marketing and part-time directorship for multi-channel and online-only retailers.' },
];

/* ─── JSON-LD. The Organization is defined once, sitewide; this page only
       references it by @id and never redefines it. ─────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Ecommerce Consultancy UK',
      serviceType: 'Ecommerce consulting, ecommerce audit, ecommerce strategy, replatforming advice and implementation',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'Ecommerce consultancy for UK online retailers and brands. We audit the store, platform, speed, checkout, marketplaces, B2B ordering, integrations, SEO and AI search visibility and operations, rank what to fix first, and can build and support the fixes.',
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
      datePublished: '2026-09-24',
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
      '@id': `${CANONICAL}#consultancies`,
      name: 'UK ecommerce consultants and consultancies',
      itemListElement: CONSULTANCIES.map((a, i) => ({
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
  description:
    'UK ecommerce consultant for online stores: platform, replatforming, speed, marketplaces and SEO. A ranked fix list from senior people, and a team to build it.',
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'Ecommerce consultancy for UK brands and online retailers. An ecommerce audit, a ranked plan for platform, conversion, marketplaces, B2B, integrations and SEO, and a team that can build and support it.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/ecommerce-consultant/ecommerce-consultant-og.webp', width: 1200, height: 630, alt: 'Ecommerce consultant UK: a FactoryJet consultant reviewing an online store with a UK brand owner' }],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 11, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;

export default function EcommerceConsultantUKPage() {
  return (
    <>
      <script id="ld-uk-ecommerce-consultant" type="application/ld+json"
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
                  <span className="chip"><span className="dot dot-orange" />UK Ecommerce Consultancy</span>
                  <span className="chip">Ecommerce Audit</span>
                  <span className="chip">Consult, Then Build</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet is an ecommerce consultant for UK online retailers and brands. Our senior people look at
                  your store, or the store you are about to launch or replatform, and tell you what to fix and in what
                  order: platform, speed, checkout, marketplaces, trade ordering, integrations, SEO and operations.
                  Then, if you want, our team builds it. You do not have to use us to build it.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses since 2014</span></div>
                  <div className="upd">Last updated<br />24 September 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_ecommerce_consultant_hero" submitLabel="Book my ecommerce review call" />
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/ecommerce-consultant/ecommerce-consultant-hero.webp" width={1400} height={933} fetchPriority="high" decoding="async" alt="A senior ecommerce consultant and a UK brand owner reviewing her online store on a laptop in a bright studio office with product shelves behind them" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What you leave with</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Ranked fix list</div><div className="scorecard-note">what first, what later, what never</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Written</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Platform decision</div><div className="scorecard-note">stay, fix, or replatform</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Clear</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Build it with us</div><div className="scorecard-note">or hand the plan to your team</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Your call</div>
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
              <span className="lab">What does an ecommerce consultant do for a UK business?</span>
              <p>
                An ecommerce consultant reviews your online store and the business behind it, then tells you what to
                fix first to sell more or spend less. They check your platform, site speed, checkout, marketing,
                marketplaces and back-office systems, and give you a ranked plan. The best ecommerce consultancies can
                also build what they recommend.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Three terms we use a lot</span>
              <p>
                <b>Replatforming</b> means moving your store from one ecommerce platform to another, for example from
                Magento to Shopify. An <b>ecommerce audit</b> is a structured check of your whole store and how orders
                flow through it. A <b>3PL</b>, or third-party logistics company, is an outside warehouse that stores
                and ships your products for you.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              Why this matters: the Office for National Statistics puts internet sales at 27.3% of all UK retail sales
              in August 2026. Online is not a side channel any more. For most UK brands it is where a large share of
              revenue, returns, complaints and costs now sit, so small mistakes in the store add up to real money.
            </p>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (verified only) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '27.3%', t: 'of all UK retail sales were made online in August 2026', s: 'ONS, September 2026', u: SRC_ONS },
                { v: '14 days', t: 'after delivery: how long UK customers can cancel most online orders', s: 'gov.uk', u: SRC_DISTANCE },
                { v: '12 months', t: 'to cancel if you never told customers about that right', s: 'gov.uk', u: SRC_DISTANCE },
                { v: 'Proof', t: 'of export needed before goods sent outside the UK can be zero-rated for VAT', s: 'HMRC VAT Notice 703', u: SRC_VAT_EXPORT },
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

        {/* ═══ 4. WHAT AN ECOMMERCE CONSULTANT LOOKS AT ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">In plain words</span>
              <h2>What our ecommerce consulting services cover</h2>
              <p className="lead mt-4">
                Ecommerce consulting is not one skill. A store can lose money through a slow product page, a bad
                courier contract, a marketplace that oversells stock, or a platform that fights you every week. These
                are the seven areas we look at, and the ones where UK brands most often ask for help.
              </p>
            </div>
            <ul className="col-3 mt-12">
              <li className="svc-card">
                <h3>Platform and replatforming</h3>
                <p className="mt-4">Whether to stay where you are, fix what you have, or move. We compare <a href="/uk/shopify-development">Shopify and Shopify Plus</a>, <a href="/uk/magento">Adobe Commerce (Magento)</a>, BigCommerce and WooCommerce against your catalogue, channels and integrations, and plan the migration so you keep your search rankings.</p>
              </li>
              <li className="svc-card">
                <h3>Speed and conversion</h3>
                <p className="mt-4">How fast pages load on a phone, where shoppers drop out, and what the checkout asks of them. Conversion rate simply means the share of visitors who buy. Small fixes here often matter more than a redesign.</p>
              </li>
              <li className="svc-card">
                <h3>Marketplaces</h3>
                <p className="mt-4">Amazon UK, eBay, OnBuy and TikTok Shop. Which products belong where, how pricing should differ from your own site, and how stock syncs so you never sell something you do not have.</p>
              </li>
              <li className="svc-card">
                <h3>B2B trade ordering</h3>
                <p className="mt-4">Trade accounts, customer-specific price lists, bulk and repeat orders, credit terms and invoices. We advise on whether your current store can handle trade customers or whether a separate portal makes more sense.</p>
              </li>
              <li className="svc-card">
                <h3>Integrations</h3>
                <p className="mt-4">How the store talks to your ERP (the system that runs stock, orders and finance), your 3PL, Royal Mail and other couriers, and Xero. Most painful daily admin in ecommerce lives in the gaps between these systems.</p>
              </li>
              <li className="svc-card">
                <h3>SEO and AI search</h3>
                <p className="mt-4">Category and product pages that rank, clean site structure, and how your brand shows up when people ask ChatGPT, Perplexity or Google AI Overviews for a recommendation. See our <a href="/uk/ecommerce-seo">UK ecommerce SEO</a> service.</p>
              </li>
              <li className="svc-card">
                <h3>Operations</h3>
                <p className="mt-4">Returns, customer service, delivery promises, product data and the team’s weekly routine. Operations is where good stores quietly lose margin, and where simple automation or an <a href="/uk/ai-agents">AI agent</a> can take real work off people.</p>
              </li>
              <li className="svc-card">
                <h3>Ecommerce strategy</h3>
                <p className="mt-4">Tying it together: which channels to grow, which to cut, how your ecommerce marketing strategy fits your margins, and what the next twelve months should look like in plain, costed stages.</p>
              </li>
              <li className="svc-card">
                <h3>A second opinion</h3>
                <p className="mt-4">Sometimes you just need someone senior to read an agency proposal, a platform quote or a migration plan and tell you honestly whether it makes sense. That is ecommerce consulting too.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ 5. SIGNS YOU NEED ONE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">When to call someone</span>
                <h2>Signs you need an ecommerce consultant</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Most brands call an ecommerce business consultant too late, after a failed migration or a bad peak
                  season. These are the earlier signs we hear most often from UK online retailers.
                </p>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>Traffic is steady but sales are flat.</b> People arrive and leave. Something in speed, trust, product pages or checkout is getting in the way.</li>
                  <li><b>Ad costs keep rising.</b> You are paying more to win the same customer, and nobody can say which channel actually makes a profit.</li>
                  <li><b>Your platform fights you.</b> Simple changes need a developer, updates break things, or the site slows down at peak times.</li>
                  <li><b>Someone is pushing a replatform.</b> An agency, a new hire or a board member says you must move. You want an independent view before you commit.</li>
                  <li><b>Staff copy orders between systems.</b> Orders, stock or invoices are typed from one screen into another, and errors are creeping in.</li>
                  <li><b>Marketplaces are messy.</b> You sell on Amazon or eBay but stock goes out of sync, listings differ, or you cannot see profit by channel.</li>
                  <li><b>Trade customers email their orders.</b> Your B2B buyers cannot order online, so your team retypes every order by hand.</li>
                  <li><b>You are launching or relaunching.</b> A new brand, a new market, or a store rebuild. The best time to get the plan right is before anything is built.</li>
                </ul>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Consultant or developer?</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">You know exactly what to build</div><div className="scorecard-note">clear brief, clear platform</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Developer</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Not sure where the problem is</div><div className="scorecard-note">site, platform, marketing or operations</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Consultant</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Thinking about replatforming</div><div className="scorecard-note">big spend, hard to reverse</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Consultant first</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Need a plan and the work done</div><div className="scorecard-note">same people, no hand-off</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Both</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Just want a second opinion</div><div className="scorecard-note">on a proposal or a quote</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Short review</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 6. FIRST TWO WEEKS (LISTICLE) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 740 }}>
              <span className="eyebrow">The ecommerce audit, step by step</span>
              <h2>Ten things we look at in the first two weeks</h2>
              <p className="lead mt-4">
                This is what our ecommerce audit covers for a typical UK store. We work from real data (your analytics,
                orders, returns and search results), not opinions, and we talk to the people who run the shop every day.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Where your profit really comes from', d: 'Revenue and margin by channel, category and customer type. Many brands find one channel quietly loses money once ads, returns and delivery are counted.' },
                { n: '02', t: 'Speed on a real phone', d: 'How quickly your home, category, product and checkout pages load and respond on a mid-range mobile over 4G, and which apps, scripts or images slow them down.' },
                { n: '03', t: 'The checkout, click by click', d: 'We buy something. Every extra field, surprise delivery charge, forced account or slow payment step is a reason to leave. We list each one.' },
                { n: '04', t: 'Product pages and product data', d: 'Photos, descriptions, sizes, stock messages and delivery promises. Clean product data also feeds marketplaces, Google Shopping and AI search.' },
                { n: '05', t: 'Search visibility, including AI search', d: 'How your categories and products rank on Google, what is broken technically, and whether ChatGPT, Perplexity or Google AI Overviews mention you at all.' },
                { n: '06', t: 'Marketing spend and tracking', d: 'Whether your analytics and ad tracking can be trusted, and which campaigns bring customers who come back versus one-off bargain hunters.' },
                { n: '07', t: 'Marketplaces and channels', d: 'How Amazon UK, eBay, OnBuy or TikTok Shop fit alongside your own site, and whether stock, pricing and listings stay in step.' },
                { n: '08', t: 'Systems and integrations', d: 'How orders move from the store to your ERP, 3PL, courier and Xero. We note every manual step, every overnight sync, and every place data gets lost.' },
                { n: '09', t: 'Delivery, returns and UK rules', d: 'Royal Mail and courier options, delivery promises, your returns process, and whether your cancellation wording and VAT handling match UK rules.' },
                { n: '10', t: 'Your platform’s future', d: 'Whether your current platform can support the next few years of growth, what it would take to stay, and what a replatform would really involve.' },
              ].map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.orange, minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8" style={{ maxWidth: 900 }}>
              At the end you get a short written report: the fixes ranked by value and effort, the reason for each,
              and who should do it. If search is your biggest gap, a deeper <a href="/uk/seo-audit">UK SEO audit</a> can
              follow. If the platform is the problem, we plan the migration next.
            </p>
          </div>
        </section>

        <MidPageCTA
          headline={'Not sure what to fix first in your store?'}
          sub={'Tell us what is worrying you: sales, costs, the platform or the admin. On a short call with the founder, we will tell you where we would look first, and whether an ecommerce audit is worth doing at all.'}
          label={'Book my ecommerce review call'}
        />

        {/* ═══ 7. COMPARISON TABLE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">Side by side</span>
            <h2 style={{ maxWidth: 760 }}>Freelance consultant vs big consultancy vs agency with consultants vs in-house hire</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              There are four common ways to get senior ecommerce help in the UK. Each one is right for someone. This
              table compares them on the things that decide whether the advice actually gets acted on.
            </p>
            <div className="card mt-8" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">Agency with consultants (FactoryJet)</th>
                    <th>Freelance consultant</th>
                    <th>Big consultancy</th>
                    <th>In-house hire</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Best fit</td><td className="fj"><span className="yes">UK brands that want a plan and delivery</span></td><td><span className="partial">Audits, second opinions</span></td><td><span className="partial">Large retailers, long programmes</span></td><td><span className="partial">Brands needing a full-time owner</span></td></tr>
                  <tr><td className="feat">Seniority</td><td className="fj"><span className="yes">Senior people + founder</span></td><td><span className="yes">Often very senior</span></td><td><span className="partial">Mixed, large teams</span></td><td><span className="partial">Depends on the hire</span></td></tr>
                  <tr><td className="feat">Speed to start</td><td className="fj"><span className="yes">Days to a couple of weeks</span></td><td><span className="yes">Fast, if available</span></td><td><span className="partial">Slower to scope and start</span></td><td><span className="no">Months to recruit</span></td></tr>
                  <tr><td className="feat">Can implement the plan</td><td className="fj"><span className="yes">Yes, own delivery team</span></td><td><span className="no">Rarely alone</span></td><td><span className="partial">Via separate teams</span></td><td><span className="partial">Needs developers too</span></td></tr>
                  <tr><td className="feat">Breadth (platform, SEO, systems, ops)</td><td className="fj"><span className="yes">Across all of them</span></td><td><span className="partial">Usually one or two strengths</span></td><td><span className="yes">Broad</span></td><td><span className="partial">One person’s experience</span></td></tr>
                  <tr><td className="feat">Main cost drivers</td><td className="fj"><span className="yes">Scope per stage, fixed quote</span></td><td><span className="partial">Days of time used</span></td><td><span className="partial">Team size and programme length</span></td><td><span className="partial">Salary, benefits, recruiting</span></td></tr>
                  <tr><td className="feat">Support after the plan</td><td className="fj"><span className="yes">Yes, same team</span></td><td><span className="partial">Sometimes, limited hours</span></td><td><span className="partial">Separate contract</span></td><td><span className="yes">Yes, full-time</span></td></tr>
                  <tr><td className="feat">Independent of platforms and apps</td><td className="fj"><span className="yes">Yes, no resale commission</span></td><td><span className="partial">Varies, ask</span></td><td><span className="partial">Often has alliances</span></td><td><span className="yes">Yes</span></td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6" style={{ maxWidth: 820 }}>
              These four are not either-or. Many of our clients have an in-house ecommerce manager and bring us in for
              the senior strategy, the replatform or the engineering the manager cannot do alone. A good freelance
              ecommerce consultant and an agency with a delivery team can work well together too.
            </p>
          </div>
        </section>

        {/* ═══ 8. ENGAGEMENT SHAPES (no pricing) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Scope, not packages</span>
                <h2>Four ways to work with our ecommerce consultancy</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Every engagement is quoted for your scope, with a fixed price for each stage. Here are the shapes it
                  usually takes, from smallest to largest.
                </p>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>One-off ecommerce audit.</b> Around two weeks. We review the store, channels, systems and operations and give you a written, ranked fix list. Some brands stop here and do the work themselves, which is a good outcome.</li>
                  <li><b>Fixed-scope strategy project.</b> One big question, answered properly: should we replatform, how do we add trade ordering, which marketplaces should we be on, or how should our ecommerce marketing strategy change.</li>
                  <li><b>Ongoing advisory.</b> A senior ecommerce advisor on call: regular trading reviews, a second opinion on proposals and quotes, help writing briefs, and checks on work before it goes live.</li>
                  <li><b>Consult, then build.</b> The full path from audit to working fixes. Our team designs, builds and supports what the plan recommends, and you own all of it. This is where we differ most from a pure ecommerce consultancy.</li>
                </ul>
                <div className="mt-8">
                  <ModalCTAButton label="Book my ecommerce review call" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What moves the scope</span>
                <div className="scorecard-row"><div className="scorecard-metric">Catalogue size and complexity</div><div className="scorecard-val" style={{ fontSize: 14 }}>Size</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Number of sales channels</div><div className="scorecard-val" style={{ fontSize: 14 }}>Reach</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Systems to connect (ERP, 3PL, Xero)</div><div className="scorecard-val" style={{ fontSize: 14 }}>Integration</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Replatforming or not</div><div className="scorecard-val" style={{ fontSize: 14 }}>Migration</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Advice only, or advice plus build</div><div className="scorecard-val" style={{ fontSize: 14 }}>Delivery</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">First call with the founder</div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Free</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 9. PLATFORMS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Platform choice and replatforming</span>
                <h2>Shopify, Adobe Commerce, BigCommerce or WooCommerce: an honest view</h2>
                <div className="stack mt-6">
                  <p>
                    Choosing a platform is the biggest decision an online retailer makes, and the hardest to undo. It
                    is also where advice is most often shaped by who is giving it. An agency that only builds on one
                    platform will usually recommend that platform. We build on all four, so we have no reason to push
                    one.
                  </p>
                  <p>
                    <b>Shopify and Shopify Plus</b> suit most direct-to-consumer brands: fast to launch, reliable at
                    peak, and low maintenance. As a Shopify consultant we will also tell you where apps pile up and
                    slow the site. <b>Adobe Commerce</b>, still widely called Magento, fits large or complex catalogues,
                    detailed B2B pricing and custom logic, at the cost of more upkeep. <b>BigCommerce</b> suits some
                    B2B and multi-storefront setups. <b>WooCommerce</b> works well for content-led brands already on
                    WordPress.
                  </p>
                  <p>
                    If you do replatform, the risks are mostly not technical. They are lost search rankings from
                    broken links, lost customer accounts and order history, and integrations that nobody fully
                    documented. An ecommerce replatforming consultant should plan redirects, data moves and testing
                    before anyone writes code. When the build starts, it moves into our <a href="/uk/ecommerce-development">UK
                    ecommerce development</a> team with the same people.
                  </p>
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">A simple rule of thumb</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">DTC brand, standard catalogue</div><div className="scorecard-note">wants less maintenance</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Shopify</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">High volume, several storefronts</div><div className="scorecard-note">needs more control at scale</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Shopify Plus</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Complex catalogue, heavy B2B rules</div><div className="scorecard-note">custom pricing and logic</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Adobe Commerce</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Content-led brand on WordPress</div><div className="scorecard-note">blog and shop together</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>WooCommerce</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Platform works, site is slow</div><div className="scorecard-note">usually apps, scripts, images</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Fix, do not move</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 10. UK SPECIFICS ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Selling online in the UK</span>
                <h2>UK rules and logistics an ecommerce consultant should check</h2>
                <div className="stack mt-6">
                  <p>
                    <b>VAT on sales to the EU.</b> Since Brexit, sending goods from Great Britain to a customer in the
                    EU is an export. HMRC’s VAT Notice 703 says goods sent to a destination outside the UK can only be
                    zero-rated if you meet all the conditions, including exporting within the time limits and keeping
                    official or commercial proof of export. The customer may then face import VAT and duty at their
                    end, which affects how you price, what you show at checkout, and how many parcels come back.
                    Northern Ireland follows separate rules.
                  </p>
                  <p>
                    <b>Consumer rights and returns.</b> For most goods sold online, gov.uk says you must tell customers
                    they can cancel their order up to 14 days after it is delivered. If you do not tell them, they can
                    cancel at any time in the next 12 months. We check your returns page, checkout wording and order
                    emails, and look at what returns cost you per order.
                  </p>
                  <p>
                    <b>Royal Mail and couriers.</b> Delivery promise, tracking, cut-off times, returns labels and
                    courier choice all shape conversion and cost. We look at how your store, 3PL and couriers connect,
                    and where a label is still printed by hand.
                  </p>
                  <p>
                    <b>Marketplace reporting.</b> HMRC’s digital platform reporting rules require online platforms to
                    collect and check information about sellers and report details about them to HMRC. Your records
                    across the store and marketplaces should match your accounts.
                  </p>
                </div>
                <p style={srcNote}>
                  Sources: <a href={SRC_VAT_EXPORT} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>HMRC, VAT on goods exported from the UK (VAT Notice 703)</a>;{' '}
                  <a href={SRC_DISTANCE} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>gov.uk, online and distance selling for businesses</a>;{' '}
                  <a href={SRC_PLATFORM_REPORTING} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>HMRC, reporting rules for digital platforms</a>.
                  We are not tax advisers or lawyers: we map the questions and you confirm them with your accountant.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/ecommerce-consultant/ecommerce-consultant-team.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A small UK ecommerce team talking around a table with packed parcels, packing tape and a laptop showing product photos" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    The most useful hour in an ecommerce audit is often spent with the people who pack the parcels and
                    answer the customer emails. They know exactly where the store makes extra work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 11. HOW TO CHOOSE (QUESTIONS TO ASK) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 740 }}>
              <span className="eyebrow">Before you sign anything</span>
              <h2>How to choose an ecommerce consultant: eight questions to ask</h2>
              <p className="lead mt-4">
                Use these with any ecommerce consultant or ecommerce consulting firm, including us. A good one will be
                glad you asked. A weak one will steer you back to the proposal.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'What have you run or rebuilt yourself?', d: 'Ask for stores they have actually worked on, which platforms, and what changed afterwards. Advice from people who have never shipped a store tends to stay on paper.' },
                { n: '02', t: 'Who will do the work?', d: 'Get the name of the person who runs your audit, and ask whether they will still be involved if you go ahead with the fixes.' },
                { n: '03', t: 'Do you earn commission from any platform or app?', d: 'Partnerships are fine when they are disclosed. What you want to avoid is a platform or app recommendation shaped by a referral fee.' },
                { n: '04', t: 'When would you tell us not to replatform?', d: 'An honest ecommerce consultant has a clear answer. If every conversation ends in a rebuild, the advice is really a sales process.' },
                { n: '05', t: 'How will we measure success?', d: 'The answer should be numbers you already track, such as conversion rate, profit per order or hours of admin, agreed before work starts.' },
                { n: '06', t: 'Can you implement, or who will?', d: 'If they cannot build it, ask who they would hand the plan to and how the hand-off works. Plans lose detail every time they change hands.' },
                { n: '07', t: 'How do you handle UK specifics?', d: 'VAT on EU sales, consumer rights on returns, couriers and marketplace reporting. A UK ecommerce consultant should raise these without being asked.' },
                { n: '08', t: 'What do we own at the end?', d: 'The report, the data, any code and any integrations should all be yours, with no ongoing licence you did not know about.' },
              ].map((s) => (
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

        {/* ═══ 12. WHO WE WORK WITH + E-E-A-T ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 740 }}>
              <span className="eyebrow">Who we work with</span>
              <h2>Ecommerce consultancy for UK brands, retailers and trade sellers</h2>
              <p className="lead mt-4">
                FactoryJet was founded in 2014 and has worked with more than 500 businesses, most of them in commerce.
                Our founder, Bhavesh Barot, is involved in every engagement. These are the groups we most often help.
              </p>
            </div>
            <ul className="col-3 mt-12">
              <li className="svc-card"><h3>Direct-to-consumer brands</h3><p className="mt-4">Fashion, home, beauty and lifestyle brands selling on their own store and a marketplace or two. Belle Maison is one DTC brand we work with.</p></li>
              <li className="svc-card"><h3>B2B and wholesale sellers</h3><p className="mt-4">Manufacturers and distributors moving trade customers from email and phone orders to an online portal. Bombay Petals is one B2B client we support. See our <a href="/uk/b2b-ecommerce">B2B ecommerce</a> work.</p></li>
              <li className="svc-card"><h3>Retailers with shops</h3><p className="mt-4">Businesses with physical stores whose online side has grown faster than the systems behind it, especially stock and point of sale.</p></li>
              <li className="svc-card"><h3>Brands about to replatform</h3><p className="mt-4">Teams who have been told they must move platform and want an independent view, a migration plan, and people who can carry it out.</p></li>
              <li className="svc-card"><h3>New launches</h3><p className="mt-4">Founders about to launch who want the platform, integrations, delivery and returns set up properly the first time.</p></li>
              <li className="svc-card"><h3>Teams drowning in admin</h3><p className="mt-4">Brands where people spend hours copying orders, chasing stock or answering the same customer question. Often this ends in integration work or an <a href="/uk/ai-consulting">AI consulting</a> conversation.</p></li>
            </ul>
          </div>
        </section>

        {/* ═══ 13. LONDON + UK + DEMAND ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">London and UK-wide</span>
                <h2>Ecommerce consultant in London, and across the UK</h2>
                <div className="stack mt-6">
                  <p>
                    Plenty of people search for an ecommerce consultant in London, expecting to need someone nearby.
                    For this work you do not. We run ecommerce consulting remotely, with video calls, shared screens and
                    written reports, for brands in London, Manchester, Birmingham, Leeds, Bristol, Scotland and
                    everywhere between.
                  </p>
                  <p>
                    What matters more than a postcode is who turns up and whether they can see the plan through. At
                    FactoryJet the people who run your ecommerce audit are the people who build the fixes if you ask us
                    to. The enemy we are trying not to be is the agency that disappears after launch.
                  </p>
                  <p>
                    If you are in the US, see our <a href="/ecommerce-consulting">ecommerce consulting</a> page. For
                    wider search work beyond ecommerce, see <a href="/uk/seo">SEO services in the UK</a>.
                  </p>
                </div>
                <div className="flex-wrap mt-6">
                  <a className="city-pill" href="/uk/ecommerce-development">Ecommerce development UK</a>
                  <a className="city-pill" href="/uk/shopify-development">Shopify development UK</a>
                  <a className="city-pill" href="/uk/magento">Magento UK</a>
                  <a className="city-pill" href="/uk/ecommerce-seo">Ecommerce SEO UK</a>
                  <a className="city-pill" href="/uk/seo-audit">SEO audit UK</a>
                  <a className="city-pill" href="/contact">Contact us</a>
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
                      { kw: 'ecommerce consultant / consulting', v: '590', w: '100%', kd: 'The head term cluster' },
                      { kw: 'ecommerce seo consultant', v: '390', w: '66%', kd: 'Search-led buyers' },
                      { kw: 'ecommerce consultancy', v: '170', w: '29%', kd: 'Buyer intent' },
                      { kw: 'ecommerce marketing strategy', v: '140', w: '24%', kd: 'Planning stage' },
                      { kw: 'shopify consultant', v: '110', w: '19%', kd: 'Platform-specific' },
                      { kw: 'ecommerce consultant uk', v: '90', w: '15%', kd: 'Buyer intent, UK' },
                      { kw: 'ecommerce consultant london', v: '90', w: '15%', kd: 'Local intent' },
                    ].map((r) => (
                      <li key={r.kw} className="demand-row">
                        <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 9, color: T.n400 }}> searches</span></span></div>
                        <div className="demand-bar"><i style={{ width: r.w }} /></div>
                        <div className="demand-kd">{r.kd}</div>
                      </li>
                    ))}
                  </ul>
                  <p style={{ textAlign: 'center', fontFamily: T.fm, fontSize: 10, color: T.n400, marginTop: 10 }}>Source: DataForSEO, United Kingdom, September 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 14. COMPETITOR LIST (self-disclosure, ItemList) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The honest landscape</span>
              <h2>UK ecommerce consultants and consultancies worth knowing</h2>
              <p className="lead mt-4">
                We are one option, not the only one. These UK ecommerce consultants and firms show up when people
                search for ecommerce consulting in the UK. Each note is based on what the company says on its own
                website. Talk to a few and pick the fit.
              </p>
            </div>
            <ul className="stack mt-10" style={{ maxWidth: 900 }}>
              {CONSULTANCIES.map((a, i) => (
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
              Firms named from live UK search results for ecommerce consultant and ecommerce consultancy queries, September 2026. Notes reflect each company’s own homepage on 24 September 2026. Listing is not endorsement.
            </p>
          </div>
        </section>

        {/* ═══ 15. WHY STORES STALL (ONS) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Why this matters now</span>
              <h2>Online is a big, settled share of UK retail. The margin is where brands win or lose.</h2>
              <div className="stack mt-6">
                <p>
                  The ONS tracks internet sales as a share of all UK retail sales every month. In August 2026 it was
                  27.3%. That is more than a quarter of everything people in Britain buy from retailers, and it means
                  online is now a normal, competitive channel, not a new one.
                </p>
                <p>
                  In a settled market, growth rarely comes from one big idea. It comes from many small fixes: a faster
                  product page, a clearer delivery promise, a marketplace that stops overselling, a trade portal that
                  saves your team a day a week, an ad budget moved to the channel that actually makes a profit.
                </p>
                <p>
                  That is the real job of an ecommerce consultant: find those fixes, put them in order, and make sure
                  they get done. Ideally by the same people who found them.
                </p>
              </div>
              <p style={srcNote}>
                Source: <a href={SRC_ONS} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>ONS, Internet sales as a percentage of total retail sales (J4MC)</a>, released 18 September 2026.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 16. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>Ecommerce consultant questions UK business owners actually ask</h2>
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

        {/* ═══ 17. FINAL CTA (the only dark section) ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>Find out what to fix first in your online store</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within 24 hours to book a short call about your
              store, your channels and what is worrying you, and whether an ecommerce audit is the right first step.
              No spam, no obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Book my ecommerce review call" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/uk/ecommerce-development" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See ecommerce development</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}
