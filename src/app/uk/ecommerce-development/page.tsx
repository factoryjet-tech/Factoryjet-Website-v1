import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import './ecommerce-development.css';

const CANONICAL = 'https://factoryjet.com/uk/ecommerce-development';
const UPDATED = '2026-07-25';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'start',     label: 'Getting started' },
  { key: 'platforms', label: 'Platforms & tech' },
  { key: 'design',    label: 'Design & conversion' },
  { key: 'seo',       label: 'SEO & AI search' },
  { key: 'working',   label: 'Working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Getting started ──
  { category: 'start', question: "How much does it cost to build an ecommerce website?",
    answer: "There is no single number, because a five-product DTC launch and a two-thousand-SKU B2B catalogue with ERP integration are different jobs. What sets the scope is product count, the platform, how many systems you integrate (payments, stock, CRM), and how custom the design is. We scope every project after a call, so you know the shape of the investment before you commit to anything." },
  { category: 'start', question: "How long does it take to build an ecommerce store?",
    answer: "Timelines depend on the same things cost does: platform, product count, and integrations. A focused Shopify store with a clean catalogue can launch in a matter of weeks. A custom or headless build with ERP, multiple warehouses, or a B2B pricing layer takes longer, because there is more to design, integrate, and test properly before it goes live." },
  { category: 'start', question: "Do I own the code and the store when it's finished?",
    answer: "Yes, completely. When we hand a project over, you get the full codebase, admin access, and every credential involved, with no dependency on us to keep running. That is different from agencies that build on a locked template or keep hosting and code access under their own account. If you ever want to move to another developer, you can, because it is genuinely yours." },
  { category: 'start', question: "Can you build a store for B2B as well as DTC?",
    answer: "Yes. B2B commerce needs things a DTC template does not have: account-based pricing, bulk ordering, quote requests, and sometimes a login wall before customers see prices at all. We build that logic properly on Shopify Plus, Magento, or a custom stack, rather than bolting a password page onto a normal storefront and calling it B2B." },
  { category: 'start', question: "How do we get started?",
    answer: "Send your name and work email through the form on this page. The founder replies within 24 hours to book a short call, where we look at your catalogue, your current store if you have one, and what platform actually fits. That first conversation is useful whether or not we end up working together." },

  // ── Platforms & tech ──
  { category: 'platforms', question: "What does a Shopify agency do?",
    answer: "A Shopify agency designs, builds, and integrates a store on Shopify or Shopify Plus: theme and page build, apps and integrations, checkout and payment setup, and migration if you are moving from another platform. A good one also handles the unglamorous parts, page speed, tracking, and stock sync, that decide whether the store actually performs once it is live." },
  { category: 'platforms', question: "Is Shopify still worth it in 2026?",
    answer: "For most brands, yes. Shopify keeps investing in checkout, international selling, and AI-era shopping features faster than most alternatives, and the app ecosystem covers almost anything you need to bolt on. It stops being the right call once your catalogue, pricing logic, or integrations get complex enough that a template platform starts fighting you, which is when Magento or a custom build takes over." },
  { category: 'platforms', question: "Which platform should I use: Shopify, WooCommerce, Magento, or custom/headless?",
    answer: "It depends on your catalogue and your team. Shopify suits most DTC and growing brands who want less to manage. WooCommerce fits businesses already built around WordPress. Magento earns its keep at real scale, large or multi-store catalogues. Custom or headless is for business logic that does not fit any of the three. We recommend based on your situation, not on which platform we prefer building." },
  { category: 'platforms', question: "Do you build Shopify Plus or headless commerce?",
    answer: "Yes, both. Shopify Plus makes sense once a standard Shopify plan starts limiting you on checkout customisation, wholesale, or the volume of orders you process. Headless commerce, where the front end is decoupled from the commerce engine, suits brands that need a fully custom experience or want to publish the same catalogue across a website, an app, and other channels from one source." },
  { category: 'platforms', question: "Do you handle payments, stock, and CRM integrations?",
    answer: "Yes. Every build connects to the systems that already run your business: payment providers like Stripe or Shopify Payments, stock and inventory tools, and whatever CRM or email platform your team uses day to day. We would rather connect your existing tools properly than force you onto new ones just because they are easier for us to set up." },

  // ── Design & conversion ──
  { category: 'design', question: "Will my store be fast and mobile-first?",
    answer: "That is the standard, not an add-on. Most ecommerce traffic now arrives on a phone, so we design and test for mobile first and target genuinely fast Core Web Vitals rather than a score that only holds up in a lab. A slow store loses sales quietly, one abandoned cart at a time, long before anyone complains about it." },
  { category: 'design', question: "Can you build product pages and a checkout that actually convert?",
    answer: "That is most of the job. Product pages get built around the questions a buyer actually has: clear pricing, real photography, honest stock status, and trust signals in the right place. Checkout gets stripped of anything that is not necessary, because every extra field or unclear cost is a reason for someone to leave with a full cart." },
  { category: 'design', question: "Do you write the product copy?",
    answer: "We can, and often do, particularly for launch catalogues where consistent tone across hundreds of products matters. For very large catalogues we will usually train your team or a copywriter on the structure and then review it, because that scales better than one agency writing every single product description by hand." },
  { category: 'design', question: "Can you migrate my existing store without losing sales or rankings?",
    answer: "Yes, and this is where a lot of DIY migrations go wrong. We map every URL to its new address with proper redirects, keep your product and category pages structured the same way search engines already trust, and test the new store thoroughly before it goes live. Done properly, a migration should be invisible to your customers and your rankings both." },

  // ── SEO & AI search ──
  { category: 'seo', question: "Do you also do ecommerce SEO?",
    answer: "Yes, and we build it in rather than treating it as an add-on. Category and product pages get structured to rank from the start: clean URLs, proper internal linking, schema, and content that answers what a buyer is actually searching for. A store built without SEO in mind almost always needs expensive rework later to fix it." },
  { category: 'seo', question: "Will my products show up in AI shopping answers and AI Overviews?",
    answer: "That depends on more than good code, but the technical foundation has to be right first. We structure product and category pages with clean schema and clear, factual descriptions that AI crawlers can actually read, which is what makes a product eligible to be recommended by ChatGPT, Gemini, or a Google AI Overview in the first place. Nobody can guarantee a specific mention, but we build for it deliberately rather than by accident." },
  { category: 'seo', question: "Can you redesign my store without losing my Google rankings?",
    answer: "Yes, if it is planned properly. Rankings usually get lost during a redesign when URLs change without redirects, page content gets thinned out, or page speed quietly gets worse. We map your existing pages before touching anything, carry the redirects and structured data across, and check rankings and traffic in the weeks after launch so we catch and fix anything early." },

  // ── Working with us ──
  { category: 'working', question: "Can I edit products and pages myself after launch?",
    answer: "Yes. We build on platforms with a proper admin, Shopify, WooCommerce, Magento, or a custom CMS, so you can add products, edit copy, and update pages yourself without calling us for every small change. We will walk your team through it at handover, and write it up so it still makes sense three months later." },
  { category: 'working', question: "Are you a UK agency, do you work outside London?",
    answer: "Yes. We work with brands across London, Manchester, Birmingham, Leeds, and everywhere in between, all handled remotely with regular video calls and the same senior team regardless of where you are based. Ecommerce development does not need someone sitting in your office, it needs someone who actually understands your catalogue and your customers." },
  { category: 'working', question: "Who actually does the work on my project?",
    answer: "Senior engineers, not a rotating cast of juniors billed at a senior rate. The founder is involved in scoping every project and stays close through the build, rather than handing you off entirely to an account manager after the sales call. That is deliberate. It is how the same standard holds whether the project is small or large." },
  { category: 'working', question: "What happens if I need changes after launch?",
    answer: "You can ask for changes any time, and because you own the code, you are never locked into asking only us. Most clients do keep working with us after launch, small fixes, new product types, seasonal campaign pages, because we already know the store. There is no minimum commitment to get that support, and it is scoped as it comes up rather than sold in advance." },
  { category: 'working', question: "Do you offer post-launch support?",
    answer: "Yes. We stay close for the weeks right after launch, when real customers using the store on real devices surface things a test environment never does. After that, most brands move to occasional support as needed: fixes, small builds, or a new integration, scoped when it comes up rather than billed as a standing retainer whether you need it or not." },
];

/* ─── Named UK ecommerce/Shopify agencies (open self-disclosure, ItemList) ─ */
const ECOM_AGENCIES: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. An AI-native ecommerce development agency building conversion-first stores on Shopify, WooCommerce, Magento, and custom stacks, with full code ownership handed over on every project.' },
  { name: 'Charle', note: 'A Shopify specialist agency based in Bristol, known for clean, conversion-focused Shopify builds for DTC brands.' },
  { name: 'Chilliapple', note: 'A long-established Shopify Plus agency working with larger UK retailers on migrations and enterprise commerce builds.' },
  { name: 'Juno Ecommerce', note: 'A Shopify and Shopify Plus agency built specifically around ecommerce growth, design, and conversion rate work.' },
  { name: 'Propeller', note: 'A commerce-focused digital agency handling Shopify builds and wider ecommerce projects for UK brands.' },
  { name: 'Blue Frontier', note: 'A UK Shopify Plus agency working with retailers that need enterprise-grade builds and ongoing support.' },
];

/* ─── External stats (fetch-verified, cited on page) ──────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://factoryjet.com/#organization',
      name: 'FactoryJet',
      url: 'https://factoryjet.com',
      logo: 'https://factoryjet.com/logo.png',
      sameAs: [
        'https://www.linkedin.com/company/factoryjet',
        'https://www.crunchbase.com/organization/factoryjet',
      ],
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Ecommerce Development Services UK',
      serviceType: 'Ecommerce development, Shopify development, WooCommerce and Magento builds',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'Ecommerce development agency in the UK. FactoryJet builds fast, conversion-first stores on Shopify, WooCommerce, Magento, and custom or headless stacks, structured to rank in Google and to be recommended by AI shopping tools.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'UK', item: 'https://factoryjet.com/uk' },
        { '@type': 'ListItem', position: 3, name: 'Ecommerce Development', item: CANONICAL },
      ],
    },
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Shopify & Ecommerce Development Agency UK | FactoryJet',
      headline: 'Ecommerce Development for UK Brands That Sell on Every Channel',
      inLanguage: 'en-GB',
      datePublished: '2026-07-25',
      dateModified: UPDATED,
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        url: 'https://www.linkedin.com/in/bhaveshbarot/',
        jobTitle: 'Founder, FactoryJet',
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#agencies`,
      name: 'UK ecommerce development and Shopify agencies',
      itemListElement: ECOM_AGENCIES.map((a, i) => ({
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
  title: 'Shopify & Ecommerce Development Agency UK | FactoryJet',
  description:
    'FactoryJet builds fast, conversion-first ecommerce stores on Shopify, WooCommerce, Magento and custom stacks for UK brands. You own the code. Free consult.',
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: 'Shopify & Ecommerce Development Agency UK | FactoryJet',
    description:
      'A UK ecommerce development agency building fast, conversion-first stores on Shopify, WooCommerce, Magento, and custom or headless stacks. You own the code. Free store consult.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/ecommerce-development-og.webp', width: 1200, height: 630, alt: 'Ecommerce Development Agency UK by FactoryJet' }],
  },
  robots: { index: true, follow: true },
};

export default function EcommerceDevelopmentUKPage() {
  return (
    <>
      <script id="ld-uk-ecommerce-development" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-ecomdev">
      <main>

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />UK Ecommerce Development Agency</span>
                  <span className="chip">Shopify · WooCommerce · Magento</span>
                  <span className="chip">Custom &amp; Headless</span>
                </div>
                <h1>Ecommerce Development for UK Brands That Sell on Every Channel</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet is an ecommerce development agency for UK brands. We build fast, conversion-first
                  stores on Shopify, WooCommerce, Magento, and custom or headless stacks, and you own every line
                  of code when we hand it over. Built to rank in Google and to show up when AI tools recommend
                  where to buy.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ projects delivered</span></div>
                  <div className="upd">Last updated<br />25 July 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_ecommerce_development_hero" submitLabel="Get my free store consult" />
                </div>
              </div>

              {/* Proof scorecard */}
              <div className="card card-top-orange">
                <span className="eyebrow">What every build ships with</span>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Core Web Vitals</div><div className="scorecard-note">fast on mobile, not just desktop</div></div>
                  <div className="scorecard-val" style={{ color: 'var(--green)', fontSize: 15 }}>Green</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Code ownership</div><div className="scorecard-note">yours, not rented</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>100%</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Platform fit</div><div className="scorecard-note">Shopify, WooCommerce, Magento, custom</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Matched</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Ecommerce SEO + AI visibility</div><div className="scorecard-note">built in, not bolted on</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Included</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Who builds it</div><div className="scorecard-note">senior engineers, founder involved</div></div>
                  <div className="scorecard-val" style={{ color: 'var(--green)' }}>Always</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What is ecommerce development?</span>
              <p>
                Ecommerce development is the work of planning, building, and integrating an online store: product
                pages, cart, checkout, payments, and stock, so it actually converts visitors into customers. In
                2026 it also means structuring that store so it shows up correctly when AI tools like ChatGPT or
                Google AI Overviews answer shopping questions, not only when someone searches Google directly.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              For years, ecommerce development meant one thing: get the store live, make it look sharp, and hope
              the traffic finds it. That is no longer enough. Shoppers now compare products inside a chatbot
              before they open your site, and Google can answer a buying question without a click at all. A store
              built today has to convert the visitor who lands on it, and earn a mention from the AI tools
              deciding where that visitor should go next. A good ecommerce development company now builds for
              both from day one.
            </p>
          </div>
        </section>

        {/* ═══ 3. TRUST BAND ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <div className="col-4" style={{ gap: 20 }}>
              <div className="trust-pill"><span className="dot dot-orange" />Senior engineers build it, not junior subcontractors</div>
              <div className="trust-pill"><span className="dot dot-orange" />You own 100% of the code and the store</div>
              <div className="trust-pill"><span className="dot dot-orange" />Shopify, WooCommerce, Magento, and custom/headless</div>
              <div className="trust-pill"><span className="dot dot-orange" />Founder involved on every build</div>
            </div>
          </div>
        </section>

        {/* ═══ 4. WHY IT MATTERS NOW (cited external stats) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Why ecommerce development, why now</span>
                <h2>Retail is moving online, and buyers now ask AI before they buy</h2>
                <div className="stack mt-6">
                  <p>
                    The shift to online retail in the UK is not slowing down. The Office for National Statistics
                    reported that online sales made up 28.7 percent of all UK retail spending in March 2026, up
                    from 28.2 percent the month before. Close to three in ten retail pounds now change hands on a
                    screen rather than a till, and that share keeps climbing.
                  </p>
                  <p>
                    At the same time, the way people shop online is changing. Ofcom found that 54 percent of UK
                    adults now use AI tools such as ChatGPT, Copilot, or Gemini, up from 31 percent in 2024. A
                    growing number of your customers are asking one of those tools to compare products or
                    recommend a store before they ever load a search engine. A store that only performs well on
                    Google is optimised for half the buyer journey.
                  </p>
                  <p>
                    That is the gap FactoryJet builds for: a store fast and clear enough to convert the visitor in
                    front of it, and structured well enough to be the one an AI tool recommends before that
                    visitor even arrives.
                  </p>
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--n200)', padding: '14px 18px' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--n400)' }}>UK · Ecommerce in numbers</span>
                  <span style={{ background: '#B23E13', color: '#fff', fontFamily: 'var(--fm)', fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>Sourced</span>
                </div>
                <div style={{ padding: '6px 18px 16px' }}>
                  {[
                    { v: '28.7%', t: 'of all UK retail sales now happen online', s: 'ONS, Retail Sales GB, March 2026', u: 'https://www.ons.gov.uk/businessindustryandtrade/retailindustry/bulletins/retailsales/march2026' },
                    { v: '54%', t: 'of UK adults now use AI tools like ChatGPT', s: 'Ofcom, Online Nation, Dec 2025', u: 'https://www.ofcom.org.uk/media-use-and-attitudes/online-habits/from-apps-to-ai-search-how-the-uk-goes-online-in-2025' },
                  ].map((r) => (
                    <div key={r.t} style={{ padding: '13px 0', borderBottom: '1px solid var(--n200)' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                        <span style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: 22, color: 'var(--orange)' }}>{r.v}</span>
                        <span style={{ fontSize: 13, color: 'var(--ink)' }}>{r.t}</span>
                      </div>
                      <a href={r.u} target="_blank" rel="noopener noreferrer nofollow" style={{ fontFamily: 'var(--fm)', fontSize: 10, color: 'var(--n400)', textDecoration: 'underline' }}>{r.s}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 4.5. SENIOR TEAM + REAL PHOTO (E-E-A-T) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Who actually builds it</span>
                <h2>Senior engineers, not a rotating cast of juniors</h2>
                <div className="stack mt-6">
                  <p>
                    Plenty of agency work gets handed to junior developers once the sales call ends, built from
                    the same template as the last five projects. That is how so many stores end up looking and
                    behaving alike. We do it differently. Senior engineers write the actual code on your store,
                    and the founder stays involved on every build, not just the pitch.
                  </p>
                  <p>
                    We have delivered 500+ projects for real ecommerce brands across the UK, the US, the UAE and India, and the standard does not drop
                    because a project is smaller. You get the same code quality, the same review, and full
                    ownership of everything we build, on Shopify, WooCommerce, Magento, or a custom stack.
                  </p>
                </div>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img
                  src="/images/uk/shared/uk-ecommerce-fulfilment.webp"
                  width={900}
                  height={672}
                  loading="lazy"
                  decoding="async"
                  alt="An independent UK online store owner packing a customer order"
                  style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 5. PLATFORMS ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">Platform fit</span>
              <h2>Shopify, WooCommerce, Magento, or custom: we build all four properly</h2>
              <p className="lead mt-4">
                Whether you are searching for an ecommerce web design agency or a specific platform partner, the
                right choice depends on your catalogue, your team, and where you plan to sell, not on which one
                we happen to prefer. Here is how we think about each.
              </p>
            </div>
            <div className="col-2 mt-12" style={{ gap: 24 }}>
              <div className="plat-card">
                <div className="plat-top"><span className="plat-name">Shopify</span><span className="plat-pill">DTC &amp; SCALING</span></div>
                <p>The fastest route to a reliable, well-supported store, and the platform most of our shopify
                development agency work happens on. Strong app ecosystem, solid checkout, and a straightforward
                path to Shopify Plus once you outgrow the standard plan.</p>
                <p className="plat-best"><b>Best for:</b> DTC brands, growing catalogues, teams who want less to maintain.</p>
              </div>
              <div className="plat-card">
                <div className="plat-top"><span className="plat-name">WooCommerce</span><span className="plat-pill">WORDPRESS</span></div>
                <p>Ecommerce built on top of WordPress, which suits brands that already publish a lot of content
                or need full control of hosting. Our woocommerce development work focuses on keeping it fast,
                since Woo can get sluggish without real performance engineering behind it.</p>
                <p className="plat-best"><b>Best for:</b> content-heavy brands, teams already invested in WordPress.</p>
              </div>
              <div className="plat-card">
                <div className="plat-top"><span className="plat-name">Magento</span><span className="plat-pill">ENTERPRISE</span></div>
                <p>Still the right call for complex, high-SKU catalogues and multi-store setups that need deep
                customisation. As a magento agency we mostly meet this platform on migrations and replatforming,
                where a business has outgrown a simpler tool.</p>
                <p className="plat-best"><b>Best for:</b> large catalogues, multi-store or multi-currency operations.</p>
              </div>
              <div className="plat-card">
                <div className="plat-top"><span className="plat-name">Custom &amp; headless</span><span className="plat-pill">BESPOKE</span></div>
                <p>When your business logic, integrations, or performance needs do not fit a template. Custom
                ecommerce built on a headless stack gives you full control of the front end while keeping a
                proper commerce engine underneath.</p>
                <p className="plat-best"><b>Best for:</b> complex B2B, unusual checkout flows, brands with real engineering needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 6. LISTICLE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">What is included</span>
              <h2>Six things every FactoryJet ecommerce build includes</h2>
              <p className="lead mt-4">
                No build skips these, regardless of platform or catalogue size.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Platform selection matched to goals', d: 'We do not default to our favourite platform. We look at your catalogue, integrations, and team before recommending Shopify, WooCommerce, Magento, or custom, and we will tell you if a simpler option saves you money and hassle.' },
                { n: '02', t: 'Conversion-first product and checkout design', d: 'Product pages and checkout built to remove friction, not just look good in a portfolio. Clear pricing, trust signals, and a checkout that does not lose people at the last step.' },
                { n: '03', t: 'Payments, stock, and CRM integration', d: 'Your store connected properly to the systems that already run your business: payment providers, inventory and stock, and whatever CRM or email tool your team lives in.' },
                { n: '04', t: 'Mobile-first performance engineering', d: 'Most of your traffic is on a phone. We build and test for mobile first, targeting genuinely fast Core Web Vitals rather than a score that only holds up on a fast desktop connection.' },
                { n: '05', t: 'On-page and technical ecommerce SEO', d: 'Category and product pages structured to rank, plus the technical foundation, site speed, crawlability, structured data, that Google and AI engines both need to trust a store.' },
                { n: '06', t: 'Full code handover with a walkthrough', d: 'When we hand the project over, you get the full codebase and a proper walkthrough of how it works, not just a login and a wave goodbye.' },
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

        {/* ═══ 7. COMPARISON TABLE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <span className="eyebrow">How we compare</span>
            <h2 style={{ maxWidth: 680 }}>FactoryJet vs a typical Shopify agency vs a template or DIY store</h2>
            <div className="card mt-8" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">FactoryJet</th>
                    <th>Typical Shopify/ecommerce agency</th>
                    <th>Template / DIY store</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Custom, conversion-first build</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Sometimes</span></td><td><span className="no">Template only</span></td></tr>
                  <tr><td className="feat">You own 100% of the code</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Often locked</span></td><td><span className="no">Rented platform</span></td></tr>
                  <tr><td className="feat">Headless / Shopify Plus / custom ready</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Rarely</span></td><td><span className="no">No</span></td></tr>
                  <tr><td className="feat">Fast on mobile (green Core Web Vitals)</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Varies</span></td><td><span className="no">Rare</span></td></tr>
                  <tr><td className="feat">Ecommerce SEO + AI search visibility built in</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Rarely</span></td><td><span className="no">No</span></td></tr>
                  <tr><td className="feat">Who does the work</td><td className="fj"><span className="yes">Senior engineers</span></td><td><span className="partial">Often juniors</span></td><td>You</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ 8. PROCESS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">How we work</span>
              <h2>From first call to launched store in four stages</h2>
            </div>
            <ol className="process-grid mt-12" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
              <li className="card"><span className="stage-num">01</span><h3>Discovery &amp; platform fit</h3><p className="mt-4">We look at your catalogue, integrations, and goals, and recommend the platform that actually fits, not the one we push on everyone.</p></li>
              <li className="card"><span className="stage-num">02</span><h3>Design &amp; build</h3><p className="mt-4">Conversion-first product pages, checkout, and design work, built by senior engineers on the platform we agreed on.</p></li>
              <li className="card"><span className="stage-num">03</span><h3>Integration &amp; QA</h3><p className="mt-4">Payments, stock, CRM, and any other systems connected and tested properly, on real devices, before anything goes near customers.</p></li>
              <li className="card"><span className="stage-num">04</span><h3>Launch &amp; handover</h3><p className="mt-4">Your store goes live, you get the full codebase and a walkthrough, and we stay close for the weeks right after launch.</p></li>
            </ol>
          </div>
        </section>

        {/* ═══ 9. WHO WE SERVE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">Who we work with</span>
              <h2>UK brands whose stores need to work harder</h2>
              <p className="lead mt-4">
                Ecommerce development pays off fastest for businesses whose stores carry real weight in the
                business. Three groups make up most of our work.
              </p>
            </div>
            <div className="col-3 mt-12">
              <div className="svc-card">
                <h3>DTC and consumer brands</h3>
                <p className="mt-4">Brands selling direct to consumers who need a fast, trustworthy store and a checkout that does not leak sales. We build for conversion first, brand second, because a beautiful store that does not sell is not doing its job.</p>
              </div>
              <div className="svc-card">
                <h3>B2B and wholesale brands</h3>
                <p className="mt-4">Businesses selling to other businesses, often with account pricing, bulk ordering, or a quote process layered on top of a normal storefront. We build the commerce logic B2B actually needs, not a DTC template with a login wall.</p>
              </div>
              <div className="svc-card">
                <h3>Scaling multi-channel retailers</h3>
                <p className="mt-4">Brands selling across their own site, Amazon, and marketplaces like TikTok Shop, who need a store and stock system that stays in sync everywhere they sell.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 10. UK MARKET + DEMAND ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">The UK ecommerce development market</span>
            <h2 style={{ maxWidth: 780 }}>Businesses are already searching for a Shopify development partner. Most agencies still read like a template</h2>
            <div className="col-6040 mt-8">
              <div>
                <div className="stack">
                  <p>
                    Search demand for ecommerce development help in the UK is real, and it goes well beyond one
                    keyword. &quot;Shopify development partner&quot; alone draws thousands of searches a month from
                    businesses looking for exactly what FactoryJet does: a team to build and stand behind a store,
                    not just a freelancer for hire.
                  </p>
                  <p>
                    Terms like &quot;ecommerce consultant&quot; and &quot;magento agency&quot; are lower volume but
                    easier to win outright, and we already write for both. This page exists to answer that demand
                    properly, for brands in London, Manchester, Birmingham, Leeds, and across the UK, with the same
                    senior team on every account.
                  </p>
                </div>
                <div className="flex-wrap mt-6">
                  <a className="city-pill" href="/uk/shopify-development">Shopify Development</a>
                  <a className="city-pill" href="/uk/ecommerce-seo">Ecommerce SEO</a>
                  <a className="city-pill" href="/uk/shopify-seo">Shopify SEO</a>
                  <a className="city-pill" href="/uk/web-design">Web Design</a>
                  <a className="city-pill" href="/uk/ai-seo">AI SEO</a>
                  <a className="city-pill" href="/uk/london">London</a>
                  <a className="city-pill" href="/uk/manchester">Manchester</a>
                  <a className="city-pill" href="/uk/birmingham">Birmingham</a>
                  <a className="city-pill" href="/uk/leeds">Leeds</a>
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--n200)', padding: '14px 18px' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--n400)' }}>UK · Monthly Search Demand</span>
                  <span style={{ background: '#B23E13', color: '#fff', fontFamily: 'var(--fm)', fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>DataForSEO</span>
                </div>
                <div style={{ padding: '4px 18px 14px' }}>
                  {[
                    { kw: 'shopify development partner', v: '6,600', w: '100%', kd: 'KD 27 · High value' },
                    { kw: 'ecommerce consultant', v: '590', w: '9%', kd: 'KD 0 · Quick win' },
                    { kw: 'shopify web design company', v: '590', w: '9%', kd: 'KD 16 · Winnable' },
                    { kw: 'magento agency', v: '480', w: '7%', kd: 'KD 13 · Winnable' },
                    { kw: 'ecommerce web design agencies', v: '480', w: '7%', kd: 'KD 26 · Winnable' },
                  ].map((r) => (
                    <div key={r.kw} className="demand-row">
                      <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 9, color: 'var(--n400)' }}> /mo</span></span></div>
                      <div className="demand-bar"><i style={{ width: r.w }} /></div>
                      <div className="demand-kd">{r.kd}</div>
                    </div>
                  ))}
                  <p style={{ textAlign: 'center', fontFamily: 'var(--fm)', fontSize: 10, color: 'var(--n400)', marginTop: 10 }}>Source: DataForSEO, United Kingdom, July 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 11. COMPETITOR LISTICLE (self-disclosure, ItemList) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The honest landscape</span>
              <h2>UK ecommerce development and Shopify agencies worth knowing</h2>
              <p className="lead mt-4">
                We would rather tell you the truth than pretend we are the only option. Here are UK agencies doing
                real ecommerce build work, including us. Talk to a few and pick the fit.
              </p>
            </div>
            <ul className="stack mt-10" style={{ maxWidth: 900 }}>
              {ECOM_AGENCIES.map((a, i) => (
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
              Agencies named from live UK search results for ecommerce development terms, July 2026. Listing is not endorsement, and we are one option among them.
            </p>
          </div>
        </section>

        {/* ═══ 12. WHAT SHAPES AN ENGAGEMENT (qualitative, no pricing) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Scope, not packages</span>
                <h2>What shapes an ecommerce development engagement</h2>
                <div className="stack mt-6">
                  <p>
                    We do not sell one-size ecommerce packages, because a ten-product launch on Shopify and a
                    two-thousand-SKU B2B replatform on Magento are not the same job wearing different branding.
                    What actually shapes the work is your product count, how many systems you need connected, and
                    how custom the design and checkout need to be.
                  </p>
                  <p>
                    A brand moving off a template onto Shopify with a clean catalogue often needs mostly design
                    and integration work. A business replatforming from an ageing Magento or custom system needs
                    migration planning first, so nothing breaks and no rankings get lost in the move. We scope it
                    after a short call, so the plan matches your store rather than a generic tier.
                  </p>
                </div>
                <div className="mt-8">
                  <ModalCTAButton label="Get my free store consult" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What moves the scope</span>
                <div className="scorecard-row"><div className="scorecard-metric">Product count and catalogue complexity</div><div className="scorecard-val" style={{ fontSize: 14 }}>Base</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Platform, and any migration involved</div><div className="scorecard-val" style={{ fontSize: 14 }}>Start</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Integrations: payments, stock, CRM</div><div className="scorecard-val" style={{ fontSize: 14 }}>Reach</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">How custom the design and checkout are</div><div className="scorecard-val" style={{ fontSize: 14 }}>Field</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Free store consult before you commit</div><div className="scorecard-val" style={{ color: 'var(--green)', fontSize: 14 }}>Always</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 13. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>Ecommerce development questions UK founders actually ask</h2>
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

        {/* ═══ 14. FINAL CTA ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>Get a straight answer on your ecommerce build</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within 24 hours with a free store consult: what
              your build actually needs, which platform fits, and what to watch for if you are migrating. No spam,
              no obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get my free store consult" region="uk" modalVariant="default" btnVariant="primary-light" />
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
