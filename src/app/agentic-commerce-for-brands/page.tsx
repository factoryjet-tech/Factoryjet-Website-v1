import type { Metadata } from 'next';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import EcommerceRoiCalculator from '@/components/commerce/EcommerceRoiCalculator';
import '@/components/v2/PlatformPage.css';

// Freshness signal. Bump only when the page content actually changes.
const PAGE_MODIFIED = '2026-10-22';
const PAGE_URL = 'https://factoryjet.com/agentic-commerce-for-brands';
const LINK = { color: 'var(--pp-orange-dark)', fontWeight: 600, textDecoration: 'underline' } as const;

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/marketplace';

export const metadata: Metadata = {
  title: 'Agentic Commerce for Brands: What to Do Now | FactoryJet',
  description:
    'Agentic commerce for brand owners: what to fix first so AI shopping agents can find and buy your products, which protocols matter, and how agent checkout works.',
  openGraph: {
    type: 'article',
    siteName: 'FactoryJet',
    title: 'Agentic Commerce for Brands: What to Do Now | FactoryJet',
    description:
      'What a brand owner should fix first so AI shopping agents can find and buy your products: product data, agent checkout, tokenized payments, and AI visibility.',
    url: 'https://factoryjet.com/agentic-commerce-for-brands',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Agentic Commerce for Brands Guide' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic Commerce for Brands: What to Do Now | FactoryJet',
    description: 'Learn how AI shopping agents evaluate products and execute purchases autonomously on modern commerce platforms.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/agentic-commerce-for-brands' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'concepts', label: 'Agentic Fundamentals' },
  { key: 'protocols', label: 'Tech & MCP Protocols' },
  { key: 'checkout', label: 'Autonomous Checkout' },
  { key: 'security', label: 'Tokens & Security' },
  { key: 'strategy', label: 'Brand Strategy' },
];

const FAQ_ITEMS = [
  {
    category: 'concepts',
    question: "What is agentic commerce and how does it work?",
    answer:
      "Agentic commerce is shopping done by AI assistants for a person. The shopper asks ChatGPT, Microsoft Copilot, or Google AI Mode for a product. The assistant reads product feeds, compares sellers, and, where the store supports it, completes checkout after the shopper confirms. The brand stays the merchant of record: it takes the payment, ships the order, and handles returns.",
  },
  {
    category: 'concepts',
    question: "How do AI shopping agents decide which brands to recommend and purchase from?",
    answer:
      "They rank on facts they can check. OpenAI says that when several merchants sell the same item, ChatGPT weighs availability, price, quality, and whether the merchant is the primary seller, and that its results are unsponsored. Shopify lists data quality, availability, and pricing. So complete product data, accurate stock, clear return terms, and real reviews decide most of it.",
  },
  {
    category: 'concepts',
    question: "Will agentic commerce replace traditional online storefronts?",
    answer:
      "No. People still browse, read brand stories, and buy on storefronts, and in every agent protocol so far the order still lands in your own store admin. What changes is that your store now has a second reader. Brands that serve both people and agents from the same product data keep both channels open without running two catalogs.",
  },
  {
    category: 'concepts',
    question: "Will AI shopping assistants replace traditional coupon and deal sites?",
    answer:
      "They take over part of the job: finding the best price. OpenAI says ChatGPT weighs price and availability when several merchants sell the same item, and its results are unsponsored. A discount hidden behind a code an agent cannot read may simply be missed. Put the real price and any promotion rules in your feed and on the page. Deal sites will still serve shoppers who like to browse offers.",
  },
  {
    category: 'concepts',
    question: "What is Generative Engine Optimization (GEO) in agentic commerce?",
    answer:
      "Generative engine optimization (GEO) is the work of making your pages easy for AI engines such as ChatGPT, Perplexity, and Google AI Overviews to read, trust, and quote. For a brand that means clear product facts, Product and Offer schema, direct answers to buyer questions, and the same facts across your site and marketplace listings.",
  },
  {
    category: 'protocols',
    question: "What is the Model Context Protocol (MCP) in e-commerce?",
    answer:
      "Model Context Protocol (MCP) is an open standard that lets AI agents connect to outside tools and data. In ecommerce, an MCP server can give an agent live answers about stock, variant specs, shipping cost, and discount rules. Google says its AP2 payment protocol can run as an extension of MCP, so the two fit together.",
  },
  {
    category: 'protocols',
    question: "Why does server-side rendering matter for AI agent indexing?",
    answer:
      "Many AI crawlers read the HTML your server sends and do not run JavaScript. If price, stock, and product details only appear after client-side code runs, those crawlers see an empty page and skip the product. Rendering product facts and schema on the server means every crawler and agent gets the same complete page a shopper sees.",
  },
  {
    category: 'protocols',
    question: "Which structured data schemas matter most for agentic readiness?",
    answer:
      "Start with Schema.org Product and Offer on every product page, including price, currency, and availability. Add AggregateRating where you have real reviews, MerchantReturnPolicy for return terms, OfferShippingDetails for delivery, and Organization sitewide. Use GTINs on every variant. These give an agent the price, stock, delivery, and return facts it needs without guessing from page text.",
  },
  {
    category: 'protocols',
    question: "Which agentic commerce protocol should a brand support first?",
    answer:
      "Follow your platform. Shopify merchants get the Universal Commerce Protocol and agent channels through the Agentic Storefronts sales channel, so start there. Brands on Stripe can add the Agentic Commerce Protocol, which powers Instant Checkout in ChatGPT. The payment networks sit underneath both. Your product feed is the one piece every protocol needs, so fix it first.",
  },
  {
    category: 'protocols',
    question: "Do we need to be on Shopify to sell through AI shopping agents?",
    answer:
      "No. Shopify says brands on other commerce platforms can sync products to Shopify Catalog through its Agentic Plan, with no monthly fee and standard payment rates. The Agentic Commerce Protocol is open source and works with any compatible payment provider. A custom store can also apply to OpenAI directly to sell through Instant Checkout in ChatGPT.",
  },
  {
    category: 'protocols',
    question: "How does FactoryJet build MCP servers for Shopify and custom stores?",
    answer:
      "We build small, secure MCP servers on Cloudflare Workers or Next.js that give authorized AI agents a set of tools such as check_inventory, calculate_shipping, get_variant_specifications, and create_checkout_session. They read from your existing store and ERP, so price and stock come from one source of truth, and you see the server working on your own catalog before you sign.",
  },
  {
    category: 'protocols',
    question: "How do AI shopping agents handle complex product options and custom sizing?",
    answer:
      "They need the options as data, not as a photo of a size chart. Publish each variant with its own ID, dimensions, materials, and stock in your schema and feed. An MCP endpoint can then answer a fit question with exact measurements. When sizing lives only in images or free text, agents tend to guess or pick a competitor with clearer data.",
  },
  {
    category: 'protocols',
    question: "What product data do AI shopping agents look at when ranking products?",
    answer:
      "Agents look at facts they can compare: GTIN, price, availability, shipping options, return terms, materials, and reviews. OpenAI asks merchants for a feed with IDs, descriptions, pricing, inventory, media, and fulfillment options, and says reviews and other recommended fields can improve ranking. Stores with gaps in these fields give the agent less reason to pick them.",
  },
  {
    category: 'checkout',
    question: "How does autonomous checkout work securely without exposing credit card details?",
    answer:
      "The agent never handles a card number. In Instant Checkout, OpenAI creates a one-time payment request with a maximum amount and an expiry, a payment provider such as Stripe turns it into a token, and the merchant charges that token through its own processor. Visa and Mastercard issue similar tokenized credentials for agents, with limits set by the shopper.",
  },
  {
    category: 'checkout',
    question: "How do brands prevent malicious bots while allowing legitimate AI shopping agents?",
    answer:
      "Set bot rules at your CDN, such as Cloudflare Bot Management, that recognize verified shopping agents and AI crawlers by their signed identity and let them in, while rate-limiting and blocking unknown scrapers. Mastercard requires agents to be registered and verified before they can pay on its network, which gives merchants another signal of which agents are trusted.",
  },
  {
    category: 'checkout',
    question: "Can AI shopping agents apply promotional discount codes and loyalty points?",
    answer:
      "Only if they can read the rules. If your promotions live in a pop-up or an email, an agent will not see them. Publish active offers, bundle prices, and loyalty terms through your feed, API, or MCP server, so the price the agent shows the shopper matches the price your checkout charges. Test it by asking an assistant for your product and checking the price it quotes.",
  },
  {
    category: 'security',
    question: "What is agentic tokenization in commerce?",
    answer:
      "Agentic tokenization swaps a real card number for a token an AI agent can use only within set limits. Mastercard calls these Agentic Tokens and builds them on the tokenization behind contactless and card-on-file payments. Visa calls them tokenized digital credentials and says only the consumer can tell the agent when to use one. The merchant charges the token and never stores the card.",
  },
  {
    category: 'security',
    question: "How do you integrate agentic tokenization into an AI commerce architecture?",
    answer:
      "Tokenization sits in your payment layer, not your storefront. The agent passes a token to your checkout; your payment provider checks its limits and charges it, so the card number never reaches your systems. For ACP that is the Stripe Shared Payment Token or the Delegated Payment Spec. Your checkout API must accept a token in place of card fields, and your order system should record which agent and approval each order came from.",
  },
  {
    category: 'security',
    question: "How does tokenized agent checkout protect consumer payment information from fraud?",
    answer:
      "A token is useless outside its limits. OpenAI says ChatGPT payment tokens are authorized only for specific amounts and specific merchants. Google AP2 adds a signed Cart Mandate that records the exact items and price the shopper approved. The merchant still runs its own fraud checks and can decline any order, the same as a normal online sale.",
  },
  {
    category: 'security',
    question: "How can brands prevent competitor AI crawlers from scraping real-time inventory levels?",
    answer:
      "Split public facts from live detail. Keep in-stock or out-of-stock status public, since agents need it to recommend you. Put exact stock counts and checkout tools behind an authenticated API or MCP server that only grants access to verified buyer agents, and rate-limit or block unknown crawlers at the Cloudflare edge.",
  },
  {
    category: 'strategy',
    question: "What should brands do right now to prepare for agentic commerce?",
    answer:
      "Do four things in order. Complete Product and Offer schema and your product feed, with GTINs on every variant. Make sure product pages render on the server and load fast. Connect a checkout agents can reach, through Shopify Agentic Storefronts or an ACP integration. Then measure how often AI assistants name your brand and fix the pages they skip.",
  },
  {
    category: 'strategy',
    question: "How does agentic commerce impact brand loyalty and customer retention?",
    answer:
      "Agents care about what they can check: price, stock, delivery, returns, and reviews. A brand that ships on time, keeps stock accurate, and handles returns cleanly earns better reviews, and reviews are one of the fields agents read. The customer relationship stays yours, because in ACP and Shopify agent channels you remain the merchant of record.",
  },
  {
    category: 'strategy',
    question: "What is FactoryJet’s approach to building agentic commerce infrastructure?",
    answer:
      "We build the stack in phases: server-rendered product pages, a complete schema layer, a clean product feed, the agent channels your platform supports, custom MCP endpoints where they help, and inventory sync with your ERP. You see a working demo on your own data before you sign anything, and each phase has its own fixed price.",
  },
  {
    category: 'strategy',
    question: "What does an agentic commerce audit and build cost?",
    answer:
      "Each phase gets a fixed price, quoted in writing after a scoping call, so you know the cost before work starts. We show a working demo on your own data before you sign, defects are covered after launch, and there is no monthly minimum. We take no revenue share on sales that come through AI agents.",
  },
  {
    category: 'strategy',
    question: "How can our leadership team book an agentic commerce architecture briefing?",
    answer:
      "Book a 30-minute scoping call with founder Bhavesh Barot. We review your current stack, your product data, and how often AI assistants name your brand today, then outline what to fix first, in order, so AI shopping agents can find and buy from your store.",
  },
];

/* ─────────────────────────────────────────────
   SCHEMAS
───────────────────────────────────────────── */
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Agentic Commerce for Brands: What to Do Now',
  description:
    'What a brand owner should fix first so AI shopping agents can find and buy your products: product data, agent checkout, tokenized payments, and AI visibility.',
  author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://factoryjet.com/author/bhavesh-barot' },
  publisher: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  url: PAGE_URL,
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${PAGE_URL}#webpage` },
  dateModified: PAGE_MODIFIED,
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Agentic Commerce for Brands: What to Do Now',
  description:
    'Agentic commerce for brand owners: what to fix first so AI shopping agents can find and buy your products, which protocols matter, and how agent checkout works.',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const ORG_SCHEMA = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Agentic Commerce', item: 'https://factoryjet.com/agentic-commerce' },
    { '@type': 'ListItem', position: 3, name: 'Agentic Commerce for Brands', item: 'https://factoryjet.com/agentic-commerce-for-brands' },
  ],
};

const STATS = [
  { b: 'ACP', s: 'OpenAI + Stripe, Sep 2025' },
  { b: 'AP2', s: 'Google + 60 orgs, Sep 2025' },
  { b: 'UCP', s: 'Shopify + Google' },
  { b: 'Agent tokens', s: 'Visa + Mastercard, Apr 2025' },
];

/* Every figure below was read on the company's own page on 22 Oct 2026. */
const SOURCED = [
  {
    v: '700M+',
    d: 'people use ChatGPT each week, OpenAI said on 29 Sep 2025 when it launched Instant Checkout for US shoppers buying from US Etsy sellers.',
    src: 'OpenAI, Buy it in ChatGPT (read 22 Oct 2026)',
    href: 'https://openai.com/index/buy-it-in-chatgpt/',
  },
  {
    v: 'About 8x',
    d: 'year-over-year growth in AI-driven traffic to Shopify stores in Q1 2026, with orders from AI-powered searches up nearly 13x. Shopify does not publish its method.',
    src: 'Shopify, How agentic commerce works (read 22 Oct 2026)',
    href: 'https://www.shopify.com/blog/how-agentic-commerce-works',
  },
  {
    v: '60+',
    d: 'organizations working with Google on the Agent Payments Protocol (AP2), including Mastercard, PayPal, American Express, Adyen, and Etsy.',
    src: 'Google Cloud, AP2 announcement (read 22 Oct 2026)',
    href: 'https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol',
  },
];

const PILLARS = [
  { i: '◈', t: '1. Machine-Readable Catalog Feeds', d: 'Publish product specs, sizes, materials, GTINs, price, and stock in JSON-LD on each page and in a CSV or JSON feed, so agents read facts instead of guessing from page text.' },
  { i: '◇', t: '2. Model Context Protocol (MCP) Servers', d: 'Deploy dedicated MCP endpoints allowing authorized AI shopping assistants to query real-time inventory, shipping calculators, and variant availability dynamically.' },
  { i: '↯', t: '3. Tokenized Autonomous Checkout', d: 'Accept tokenized agent payments through your payment provider: the Stripe Shared Payment Token for ACP, Visa Intelligent Commerce credentials, or Mastercard Agentic Tokens.' },
  { i: '▤', t: '4. Factual Generative Engine Optimization', d: 'Write brand copy and FAQs that answer buyer questions directly, so Google AI Overviews, Perplexity, and ChatGPT can quote and cite you.' },
  { i: '⛓', t: '5. Dynamic Promotion & Loyalty APIs', d: 'Publish active offers, bundle prices, and loyalty terms in a form agents can read, so the price an agent quotes matches the price your checkout charges.' },
  { i: '⤢', t: '6. Agentic Analytics & Tracking', d: 'Track AI agent user agents, referral paths, and autonomous conversion funnels separately from human browser sessions for accurate attribution.' },
];

export default function AgenticCommerceForBrandsPage() {
  return (
    <>
      <script id="agentic-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="agentic-article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script id="agentic-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="agentic-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="agentic-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* ── Hero ── */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">The Future of Digital Commerce</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  Agentic commerce <span className="pp-grad">for brands.</span>
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  Agentic commerce means AI assistants such as ChatGPT, Microsoft Copilot, and Google AI Mode find
                  products and check out for shoppers. For a brand owner the job comes down to three things: product
                  data an agent can read, a checkout an agent can reach, and a way to see whether assistants name you.
                  Start with the data.
                </p>
                <HeroInlineForm source="us_agentic_commerce_guide_hero" region="us" submitLabel="Get an Agentic Audit" />
              </div>

              {/* Visual Architecture Graphic */}
              <div
                role="img"
                aria-label="Agentic commerce architecture showing AI shopping agent communicating via Model Context Protocol to store backend."
                style={{
                  border: '1px solid var(--pp-line)',
                  borderRadius: '18px',
                  background: '#fff',
                  padding: '24px',
                  boxShadow: '0 18px 50px rgba(20,17,15,.08)',
                }}
              >
                <div
                  style={{
                    border: '1.5px solid var(--pp-orange)',
                    borderRadius: '12px',
                    background: 'var(--pp-tint)',
                    padding: '14px',
                    textAlign: 'center',
                    fontFamily: 'var(--pp-disp)',
                    fontWeight: 700,
                    color: 'var(--pp-ink)',
                    marginBottom: '18px',
                  }}
                >
                  Model Context Protocol (MCP) Agent Hub
                  <small style={{ display: 'block', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-orange-dark)', fontWeight: 600, marginTop: '2px' }}>
                    Autonomous Query · Real-Time Stock · Delegated Token Checkout
                  </small>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {[
                    { name: 'AI Shoppers', desc: 'ChatGPT / Copilot' },
                    { name: 'MCP Server', desc: 'Real-Time Tools' },
                    { name: 'JSON-LD', desc: 'Product + Offer' },
                    { name: 'Token Checkout', desc: 'Single-Use Token' },
                    { name: 'Edge Cache', desc: 'Fresh Price + Stock' },
                    { name: 'ERP Sync', desc: 'Live Inventory' },
                  ].map((ch) => (
                    <div key={ch.name} style={{ border: '1px solid var(--pp-line)', borderRadius: '10px', background: '#fff', padding: '12px 8px', textAlign: 'center' }}>
                      <b style={{ fontFamily: 'var(--pp-disp)', fontSize: '13px', display: 'block', color: 'var(--pp-ink)' }}>{ch.name}</b>
                      <span style={{ fontFamily: 'var(--pp-mono)', fontSize: '10px', color: 'var(--pp-muted)' }}>{ch.desc}</span>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    marginTop: '16px',
                    padding: '10px 14px',
                    background: '#14110F',
                    borderRadius: '10px',
                    color: '#fff',
                    fontFamily: 'var(--pp-mono)',
                    fontSize: '10.5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block', marginRight: '6px' }} />
                    Machine-to-Machine Verified
                  </div>
                  <div>Zero JavaScript Dependency</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stat Band ── */}
        <section className="pp-sec tint" style={{ paddingTop: '38px', paddingBottom: '38px' }}>
          <div className="pp-wrap">
            <div className="pp-stats">
              {STATS.map((s) => (
                <div className="pp-stat" key={s.b}>
                  <b>{s.b}</b>
                  <span>{s.s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Definitional Answer-First Block ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// for brand owners</p>
            <h2 style={{ marginTop: '10px' }}>What agentic commerce changes for a brand owner</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                <strong>Agentic commerce</strong> is buying done by AI agents for a shopper. Our{' '}
                <a href="/agentic-commerce" style={LINK}>agentic commerce explainer</a> covers how the protocols work.
                This page is the shorter version for the person who owns the brand and has to decide what to fix first.
              </p>
              <p>
                A shopper tells an assistant what they want (for example: <em>&ldquo;waterproof trail running shoes under
                $160 that fit wide feet&rdquo;</em>). The agent reads product feeds and pages from many stores, compares
                them, and, where the store supports it, checks out once the shopper confirms. You stay the merchant of
                record: the order lands in your own admin, and you ship it and handle returns.
              </p>
              <p>The five decisions a brand owner makes first:</p>
              <ol style={{ listStyle: 'decimal', paddingLeft: '22px', marginTop: '12px' }}>
                <li>
                  <strong>Which channel to open.</strong> Shopify brands can turn on the Agentic Storefronts sales
                  channel. Others can sync to Shopify Catalog or integrate the Agentic Commerce Protocol with their
                  payment provider.
                </li>
                <li>
                  <strong>Who owns product data.</strong> Agents read titles, GTINs, prices, stock, shipping, and return
                  terms. Someone on your team has to keep those complete and current.
                </li>
                <li>
                  <strong>Whether your marketplace listings match.</strong> An agent comparing sellers will see when
                  Amazon, Walmart, and your own store disagree. Our{' '}
                  <a href="/marketplace-management" style={LINK}>marketplace management</a> work keeps them in line.
                </li>
                <li>
                  <strong>How you will measure it.</strong> Check how often assistants name you today with the free{' '}
                  <a href="/ai-visibility-checker" style={LINK}>AI visibility checker</a>, then track agent orders
                  separately in analytics.
                </li>
                <li>
                  <strong>Which pages to rewrite.</strong> Pages that answer buyer questions plainly get quoted by AI
                  engines. Our <a href="/services/ai-seo" style={LINK}>AI SEO service</a> does that work.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* ── Sourced Stats ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// figures from the companies building it</p>
            <h2 style={{ marginTop: '10px' }}>What the platforms report so far</h2>
            <ul className="pp-bento" style={{ marginTop: '32px' }}>
              {SOURCED.map((s) => (
                <li className="pp-card" key={s.v}>
                  <div style={{ fontFamily: 'var(--pp-disp)', fontWeight: 800, fontSize: '36px', color: 'var(--pp-orange-dark)', letterSpacing: '-.03em', lineHeight: 1 }}>{s.v}</div>
                  <p style={{ marginTop: '10px', fontSize: '15px', color: 'var(--pp-body)' }}>{s.d}</p>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-block', marginTop: '10px', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-muted)', textDecoration: 'underline' }}
                  >
                    {s.src}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 6 Core Pillars ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// architectural requirements</p>
            <h2 style={{ marginTop: '10px' }}>The 6 pillars of brand readiness for agentic commerce</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '64ch' }}>
              What a brand needs in place for AI agents to find and buy its products, in the order we usually build it.
            </p>
            <ol className="pp-bento" style={{ marginTop: '32px' }}>
              {PILLARS.map((p) => (
                <li className="pp-card" key={p.t}>
                  <div style={{ fontFamily: 'var(--pp-mono)', fontSize: '20px', color: 'var(--pp-orange-dark)', marginBottom: '10px' }} aria-hidden="true">{p.i}</div>
                  <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '16px', color: 'var(--pp-ink)', marginBottom: '6px' }}>{p.t}</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--pp-body)' }}>{p.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Interactive ROI Calculator ── */}
        <section className="pp-sec" id="agentic-roi-calculator">
          <div className="pp-wrap">
            <EcommerceRoiCalculator source="us_agentic_commerce_guide_page" defaultPlatform="shopify" defaultTarget="headless" />
          </div>
        </section>

        {/* ── Use Case & Imagery Section ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(28px,4vw,52px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-mlabel">// autonomous simulation</p>
                <h2 style={{ marginTop: '8px' }}>Model Context Protocol (MCP) Integration</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  How FactoryJet builds dedicated MCP servers for Shopify Plus, BigCommerce, and custom headless storefronts,
                  so AI shopping agents can check live stock and complete tokenized checkouts.
                </p>
                <div style={{ marginTop: '22px' }}>
                  <ModalCTAButton label="Scope an MCP Server build" region="us" btnVariant="secondary-light" />
                </div>
              </div>
              <Image
                src={`${IMG}/agentic-commerce-agent-flow-monitor.webp`}
                alt="A man at a white desk looking at a wide monitor that shows a flow of coloured blocks joined by lines, an orange lamp beside him"
                width={1280}
                height={800}
                style={{ width: '100%', height: 'auto', borderRadius: '18px', border: '1px solid var(--pp-line)', display: 'block', objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        
        {/* ── MCP Commerce Server Architecture & Technical Specification ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// model context protocol specification</p>
            <h2 style={{ marginTop: '10px' }}>Model Context Protocol (MCP) Commerce Architecture &amp; API Endpoints</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                To enable autonomous AI shopping agents to interact with your catalog, FactoryJet builds and deploys dedicated
                Model Context Protocol (MCP) server endpoints alongside standard REST/GraphQL APIs.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. Real-Time Product Query &amp; Variant Resolution (`query_catalog`)</h3>
              <p>
                An agent sends a plain-language request to your MCP server (for example, "organic cotton t-shirts in navy, size medium, under $50").
                The MCP endpoint queries your indexed catalog, returning structured JSON containing exact SKU codes, real-time inventory counts,
                and direct product specifications.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Stock Reservation &amp; Cart Construction (`create_agent_cart`)</h3>
              <p>
                Once an AI assistant selects items, it calls the cart endpoint to hold the stock for a short checkout window.
                This prevents race conditions during high-demand product drops and allows the agent to calculate accurate sales taxes
                and regional shipping rates based on the consumer’s delivery address.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>3. Delegated Tokenized Payment &amp; Order Capture (`execute_agent_order`)</h3>
              <p>
                The AI agent submits a payment token scoped to this order, such as a Stripe Shared Payment Token under the Agentic Commerce Protocol.
                The order captures directly into your primary Shopify Plus or BigCommerce order queue with full fraud analysis, triggering
                standard warehouse fulfillment workflows automatically.
              </p>
            </div>
          </div>
        </section>

        
        {/* ── Autonomous Agent Security & Tokenization Architecture ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// tokenized transaction security</p>
            <h2 style={{ marginTop: '10px' }}>Cryptographic Security and Delegated Authority for AI Shoppers</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                When an AI agent buys for a shopper, passwords and CAPTCHAs stop working. The payment networks answered
                with agentic tokenization: the agent never sees a card number, only a token limited to an amount, a
                merchant, and a time window. Here is where each piece sits.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. Registered and Verified Agents</h3>
              <p>
                Mastercard says Agent Pay will require AI agents to be registered and verified before they can pay, and
                that issuers and merchants will be able to see which transactions an agent made (
                <a href="https://www.mastercard.com/us/en/news-and-trends/press/2025/april/mastercard-unveils-agent-pay-pioneering-agentic-payments-technology-to-power-commerce-in-the-age-of-ai.html" target="_blank" rel="noopener noreferrer" style={LINK}>Mastercard, 29 Apr 2025</a>,
                read 22 Oct 2026). At your own edge, bot rules let verified agents in and keep scrapers out.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Scoped Tokens and Spending Limits</h3>
              <p>
                For Instant Checkout, OpenAI creates a one-time payment request with a maximum amount and an expiry, and
                a payment provider returns a token the merchant charges (
                <a href="https://developers.openai.com/commerce/guides/key-concepts" target="_blank" rel="noopener noreferrer" style={LINK}>OpenAI developer docs</a>,
                read 22 Oct 2026). Visa Intelligent Commerce replaces card details with tokenized credentials and lets
                consumers set spending limits and conditions (
                <a href="https://usa.visa.com/about-visa/newsroom/press-releases.releaseId.21361.html" target="_blank" rel="noopener noreferrer" style={LINK}>Visa, 30 Apr 2025</a>,
                read 22 Oct 2026).
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>3. Your Fraud Checks, Approval Records, and Returns</h3>
              <p>
                You still accept or decline every order and run your own fraud rules. Google&apos;s AP2 adds a signed Cart
                Mandate, a record of the exact items and price the shopper approved, which helps settle disputes (
                <a href="https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol" target="_blank" rel="noopener noreferrer" style={LINK}>Google Cloud, 17 Sep 2025</a>,
                read 22 Oct 2026). If an agent orders the wrong variant, your normal return flow handles it.
              </p>
              <p>Where agentic tokenization plugs into your stack:</p>
              <ul style={{ listStyle: 'disc', paddingLeft: '22px', marginTop: '12px' }}>
                <li><strong>Payment provider:</strong> receives the token, checks its limits, and charges it. The card number never reaches your servers.</li>
                <li><strong>Checkout API:</strong> accepts a token in place of card fields when an agent creates or updates a checkout session.</li>
                <li><strong>Order system:</strong> stores which agent placed the order and the approval record that came with it.</li>
                <li><strong>Fraud rules:</strong> run on agent orders the same as on human orders, with the option to decline.</li>
                <li><strong>Analytics:</strong> tags agent orders separately so you can see what the channel is worth.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Comparison Table ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// architectural evolution</p>
            <h2 style={{ marginTop: '10px' }}>Traditional E-Commerce vs. Headless vs. Agentic Commerce</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              How customer interface models and checkout protocols evolve across technological generations.
            </p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Dimension</th>
                    <th>Traditional Commerce</th>
                    <th>Headless Commerce</th>
                    <th>Agentic Commerce</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td className="name">Primary Consumer Interface</td>
                    <td>Browser theme (HTML/CSS)</td>
                    <td>Custom frontend (Next.js / App)</td>
                    <td>Autonomous AI Agent (LLM / MCP)</td>
                  </tr>
                  <tr>
                    <td className="name">Catalog Discovery Mechanism</td>
                    <td>Visual category browsing &amp; search</td>
                    <td>GraphQL / Algolia search API</td>
                    <td>Model Context Protocol (MCP) tools</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Data Parsing Requirement</td>
                    <td>Client-side browser rendering</td>
                    <td>API JSON responses</td>
                    <td>Deterministic JSON-LD &amp; Schemas</td>
                  </tr>
                  <tr>
                    <td className="name">Checkout Execution Flow</td>
                    <td>Manual form entry by human</td>
                    <td>Single-page hosted checkout</td>
                    <td>Delegated single-use payment tokens</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Optimization Discipline</td>
                    <td>Traditional Google SEO &amp; Ads</td>
                    <td>Core Web Vitals &amp; UX speed</td>
                    <td>Generative Engine Optimization (GEO)</td>
                  </tr>
                  <tr>
                    <td className="name">Who Confirms the Purchase</td>
                    <td>Shopper, on your checkout form</td>
                    <td>Shopper, on your hosted checkout</td>
                    <td>Shopper confirms in the assistant; the agent submits the order</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="pp-sec pp-faqsec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// common questions</p>
            <div style={{ marginTop: '16px' }}>
              <FAQ
                headline="Frequently asked questions about agentic commerce"
                categories={FAQ_CATEGORIES}
                items={FAQ_ITEMS}
              />
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <div className="pp-ctagrid">
              <div className="pp-cta">
                <p className="pp-mlabel">// prepare for autonomous retail</p>
                <h2 style={{ margin: '12px 0 16px' }}>Ready to engineer your agentic commerce layer?</h2>
                <p className="pp-lead" style={{ maxWidth: '44ch' }}>
                  We audit your product data, connect the agent channels your platform supports, and build MCP
                  endpoints where they help, so AI shopping agents can find and buy from your store. You see a working
                  demo on your own data before you sign.
                </p>
                <div style={{ marginTop: '24px' }}>
                  <a className="pp-primary" href={CALENDLY} target="_blank" rel="noopener noreferrer">
                    Book a 30-Minute Scoping Call
                  </a>
                </div>
                <div className="founder">
                  <Image
                    src="/bhavesh_avatar-240.webp"
                    alt="Bhavesh Barot, Founder of FactoryJet"
                    width={46}
                    height={46}
                    quality={95}
                    style={{ width: '46px', height: '46px', flexShrink: 0, borderRadius: '50%', objectFit: 'cover', border: '1.5px solid var(--pp-orange)' }}
                  />
                  <div>
                    <b>Bhavesh Barot</b>
                    <span>Founder, FactoryJet &bull; building commerce since 2014</span>
                  </div>
                </div>
              </div>
              <div className="pp-proof">
                <div className="top">
                  <Image
                    src="/images/testimonials/ricky-belle-maison-160.webp"
                    alt="Ricky B, Belle Maison"
                    width={46}
                    height={46}
                    style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--pp-line)' }}
                  />
                  <div>
                    <b>Ricky B.</b>
                    <span>Founder, Belle Maison</span>
                  </div>
                </div>
                <blockquote>
                  &ldquo;We were live in 6 days, I genuinely did not believe that was possible. The design is
                  stunning, the WhatsApp integration brings in inquiries every day, and the site has stayed
                  lightning fast.&rdquo;
                </blockquote>
                <div className="rate">
                  <a href="/case-studies/belle-maison-ecommerce-success" style={{ color: 'var(--pp-orange-dark)', fontWeight: 600, textDecoration: 'underline' }}>
                    Read the Belle Maison case study →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
