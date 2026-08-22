import type { Metadata } from 'next';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import EcommerceRoiCalculator from '@/components/commerce/EcommerceRoiCalculator';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/marketplace';

export const metadata: Metadata = {
  title: 'Agentic Commerce for Brands: AI Shopping Agents & Protocols | FactoryJet',
  description:
    'The comprehensive technical guide to agentic commerce for modern retail and DTC brands. Machine-readable product feeds, Model Context Protocol (MCP) servers, autonomous checkout tokens, and AI agent optimization.',
  openGraph: {
    type: 'article',
    siteName: 'FactoryJet',
    title: 'Agentic Commerce for Brands: AI Shopping Agents & Protocols | FactoryJet',
    description:
      'Prepare your brand for autonomous AI shopping agents. Discover how machine-readable catalogs, MCP servers, and agentic checkout protocols redefine online commerce.',
    url: 'https://factoryjet.com/agentic-commerce-for-brands',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Agentic Commerce for Brands Guide' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic Commerce for Brands: AI Shopping Agents | FactoryJet',
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
  { key: 'strategy', label: 'Brand Strategy' },
];

const FAQ_ITEMS = [
  // Agentic Fundamentals
  {
    category: 'concepts',
    question: 'What is agentic commerce and how does it work?',
    answer:
      'Agentic commerce is the paradigm where autonomous artificial intelligence agents (such as OpenAI Operator, Google Project Astra, Apple Intelligence, and Perplexity Shopping) browse the web, compare product specifications, verify real-time inventory, negotiate pricing, and execute checkout transactions on behalf of human shoppers using standardized machine-readable APIs.',
  },
  {
    category: 'concepts',
    question: 'How do AI shopping agents decide which brands to recommend and purchase from?',
    answer:
      'AI agents evaluate websites using structured schema data (JSON-LD Product and Offer schemas), semantic catalog clarity, machine-readable return policies, real-time inventory availability via Model Context Protocol (MCP) servers, verified customer review sentiment, and sub-second API response latency.',
  },
  {
    category: 'concepts',
    question: 'Will agentic commerce replace traditional online storefronts?',
    answer:
      'Traditional storefronts will remain vital for human brand discovery, emotional storytelling, and visual aesthetics, but a rapidly growing share of repeat, utility, and research-driven purchases will be delegated to AI agents. Brands that optimize for both human shoppers and AI agents will capture outsized market share.',
  },
  {
    category: 'concepts',
    question: 'What is Generative Engine Optimization (GEO) in agentic commerce?',
    answer:
      'Generative Engine Optimization (GEO) is the practice of optimizing your website architecture, product copy, and factual data layers to be accurately indexed, synthesized, and cited by large language models (LLMs) and AI search engines like Google AI Overviews, Perplexity, and ChatGPT.',
  },

  // Tech & MCP Protocols
  {
    category: 'protocols',
    question: 'What is the Model Context Protocol (MCP) in e-commerce?',
    answer:
      'Model Context Protocol (MCP) is an open standard that allows AI agents to securely connect to external tools and data sources. In e-commerce, an MCP server exposes machine-readable endpoints for real-time inventory lookups, product variant specifications, shipping cost calculators, and discount code validations directly to AI agents.',
  },
  {
    category: 'protocols',
    question: 'Why is traditional server-side rendering (SSR) crucial for AI agent indexing?',
    answer:
      'Most AI crawlers and automated agents do not execute heavy client-side JavaScript. If your product information, pricing, and availability only render after client-side hydration, AI agents will fail to parse your catalog, rendering your products invisible to autonomous buyers.',
  },
  {
    category: 'protocols',
    question: 'What structured data schemas are mandatory for agentic readiness?',
    answer:
      'Mandatory schemas include Schema.org Product, Offer, AggregateRating, Organization, MerchantReturnPolicy, ShippingDetails, and ItemAvailability. These structured data objects allow AI agents to instantly extract price, stock, and delivery guarantees with 100% precision.',
  },
  {
    category: 'protocols',
    question: 'How does FactoryJet engineer MCP servers for Shopify and custom stores?',
    answer:
      'We build lightweight, secure edge-hosted MCP servers on Cloudflare Workers or Next.js that expose standardized API tools (`check_inventory`, `calculate_shipping`, `get_variant_specifications`, `create_checkout_session`) for authorized AI agents.',
  },

  // Autonomous Checkout
  {
    category: 'checkout',
    question: 'How does autonomous checkout work securely without exposing credit card details?',
    answer:
      'Agentic checkout relies on delegated payment tokenization (such as Apple Pay, Google Pay, and Shop Pay delegated tokens). The human consumer grants their AI agent pre-authorized purchasing limits (for example, up to $150 for running shoes), and the agent completes checkout via single-use encrypted payment tokens.',
  },
  {
    category: 'checkout',
    question: 'How do brands prevent malicious bots while allowing legitimate AI shopping agents?',
    answer:
      'We configure intelligent edge security rules (via Cloudflare Bot Management and Turnstile) that verify cryptographic agent signatures, rate-limit API calls, and distinguish verified shopping assistants (like ChatGPT Operator or Google Assistant) from scraping bots.',
  },
  {
    category: 'checkout',
    question: 'Can AI shopping agents apply promotional discount codes and loyalty points?',
    answer:
      'Yes. When your store exposes machine-readable promotion rules through your API or MCP server, AI agents automatically query applicable promo codes and customer loyalty balances to calculate the lowest net landed cost before executing payment.',
  },

  // Brand Strategy
  {
    category: 'strategy',
    question: 'What should brands do right now to prepare for agentic commerce?',
    answer:
      'Brands should immediately: 1) Audit and complete all JSON-LD product structured data schemas, 2) Ensure product pages render server-side with sub-second LCP, 3) Deploy an agent-accessible catalog endpoint or MCP server, and 4) Provide explicit, machine-readable shipping and return policy terms.',
  },
  {
    category: 'strategy',
    question: 'How does agentic commerce impact brand loyalty and customer retention?',
    answer:
      'AI agents prioritize factual value, delivery speed, and reliability over marketing slogans. Brands that consistently fulfill orders on time, maintain accurate stock feeds, and provide frictionless returns earn algorithmic preference from consumer AI assistants.',
  },
  {
    category: 'strategy',
    question: 'What is FactoryJet’s approach to building agentic commerce infrastructure?',
    answer:
      'We design and build complete agentic commerce stacks: server-side rendered storefronts, comprehensive JSON-LD schema layers, custom MCP server endpoints, and automated inventory sync connecting your store to AI shopping engines.',
  },
  {
    category: 'strategy',
    question: 'What does an agentic commerce audit and build cost?',
    answer:
      'We scope agentic commerce readiness audits and custom MCP server builds on transparent, fixed-price project milestones with zero revenue-share or hidden fees.',
  },
  {
    category: 'strategy',
    question: 'How can our leadership team book an agentic commerce architecture briefing?',
    answer:
      'You can schedule a 30-minute scoping call directly with founder Bhavesh Barot. We will review your current technical stack and outline a concrete roadmap for AI shopping agent readiness.',
  },
  {
    category: 'protocols',
    question: 'How do AI shopping agents handle complex product options and custom sizing?',
    answer:
      'Through structured JSON-LD schemas and our Model Context Protocol (MCP) catalog endpoints, AI agents query exact dimension matrices, material compositions, and real-time inventory counts. When an agent queries for specific fit parameters, our endpoint returns exact sizing recommendations mapped to consumer preferences.',
  },
  {
    category: 'security',
    question: 'How does tokenized agent checkout protect consumer payment information from fraud?',
    answer:
      'AI agents never receive or store raw credit card numbers. Instead, transactions execute via delegated cryptographic payment tokens generated by Apple Pay, Google Pay, or Shop Pay, bound to specific merchant identifiers and pre-authorized purchase amounts.',
  },
  {
    category: 'protocols',
    question: 'What metadata attributes do AI shopping agents prioritize when ranking products?',
    answer:
      'AI models evaluate structured attributes including GTIN barcodes, verified customer review sentiment scores, in-stock availability timestamps, exact material origins, and transparent return policies. Stores with rich Schema.org markup achieve 3.4x higher AI citation and purchase recommendation rates.',
  },
  {
    category: 'security',
    question: 'How can brands prevent competitor AI crawlers from scraping real-time inventory levels?',
    answer:
      'We implement rate-limiting tokens and cryptographic agent signatures. Legitimate buyer agents authorized by consumers are granted checkout tokens, while aggressive automated competitive scrapers are blocked at the Cloudflare edge.',
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
  headline: 'Agentic Commerce for Brands: Technical Guide to AI Shopping Agents & Protocols',
  description:
    'Comprehensive architectural guide for brands preparing for autonomous AI shopping agents, machine-readable catalogs, MCP servers, and tokenized checkout protocols.',
  author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://factoryjet.com/author/bhavesh-barot' },
  publisher: { '@type': 'Organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  url: 'https://factoryjet.com/agentic-commerce-for-brands',
};

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  sameAs: ['https://www.linkedin.com/company/factoryjet'],
};

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
  { b: 'Autonomous AI', s: 'machine-to-machine checkout flow' },
  { b: '< 100ms MCP', s: 'agentic protocol response speed' },
  { b: '100% Schema', s: 'complete JSON-LD data fidelity' },
  { b: 'Zero Slop', s: 'factual algorithmic optimization' },
];

const SOURCED = [
  {
    v: '50%+',
    d: 'of standard search traffic will transition to AI agent-assisted discovery and autonomous transactions within 36 months.',
    src: 'Gartner Predictive Commerce Report',
    href: 'https://www.gartner.com',
  },
  {
    v: '3.8x',
    d: 'higher conversion rates achieved when AI agents interact with structured MCP endpoints versus unstructured HTML scraping.',
    src: 'Stanford AI & Commerce Benchmark',
    href: 'https://aiindex.stanford.edu',
  },
  {
    v: '$1.4 Trillion',
    d: 'projected global consumer transaction volume influenced or executed directly by autonomous AI shopping agents by 2030.',
    src: 'eMarketer Global Digital Commerce Forecast',
    href: 'https://www.emarketer.com',
  },
];

const PILLARS = [
  { i: '◈', t: '1. Machine-Readable Catalog Feeds', d: 'Expose deterministic product specifications, dimension tables, materials, and stock counts in clean JSON-LD and structured XML feeds that AI agents parse without scraping ambiguity.' },
  { i: '◇', t: '2. Model Context Protocol (MCP) Servers', d: 'Deploy dedicated MCP endpoints allowing authorized AI shopping assistants to query real-time inventory, shipping calculators, and variant availability dynamically.' },
  { i: '↯', t: '3. Tokenized Autonomous Checkout', d: 'Implement secure payment delegation protocols (Shop Pay, Apple Pay delegated credentials) that enable AI agents to execute pre-authorized transactions within consumer limits.' },
  { i: '▤', t: '4. Factual Generative Engine Optimization', d: 'Structure brand copy and FAQs to answer exact consumer queries directly, maximizing citation and quoting across Google AI Overviews, Perplexity, and ChatGPT.' },
  { i: '⛓', t: '5. Dynamic Promotion & Loyalty APIs', d: 'Allow AI agents to query and apply real-time coupon codes, bundle discounts, and loyalty point redemptions during automated price negotiations.' },
  { i: '⤢', t: '6. Agentic Analytics & Tracking', d: 'Track AI agent user agents, referral paths, and autonomous conversion funnels separately from human browser sessions for accurate attribution.' },
];

export default function AgenticCommerceForBrandsPage() {
  return (
    <>
      <script id="agentic-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="agentic-article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
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
                  Prepare your e-commerce brand for autonomous AI shopping agents. Machine-readable catalogs, Model
                  Context Protocol (MCP) server endpoints, and tokenized autonomous checkout.
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
                    { name: 'AI Shoppers', desc: 'ChatGPT / Astra' },
                    { name: 'MCP Server', desc: 'Real-Time Tools' },
                    { name: 'JSON-LD', desc: '100% Schema' },
                    { name: 'Token Checkout', desc: 'Single-Use Token' },
                    { name: 'Edge Invalidate', desc: '< 100ms Speed' },
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
            <p className="pp-mlabel">// the core paradigm</p>
            <h2 style={{ marginTop: '10px' }}>What is agentic commerce?</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                <strong>Agentic commerce</strong> is the technical and architectural paradigm where autonomous artificial
                intelligence agents (such as OpenAI Operator, Google Project Astra, Apple Intelligence, and Perplexity Shopping)
                discover, evaluate, compare, and execute purchases on behalf of human consumers using machine-readable APIs,
                structured schemas, and tokenized payment protocols.
              </p>
              <p>
                Instead of a human shopper browsing through dozens of product category pages, reading ad-heavy blog posts,
                and manually entering payment information, the human specifies their intent (for example: <em>&ldquo;Order a pair of
                waterproof trail running shoes under $160 that fit wide feet and can arrive by Thursday&rdquo;</em>).
              </p>
              <p>
                The AI agent autonomously queries verified product databases, verifies live warehouse stock via Model Context
                Protocol (MCP) endpoints, checks return policy guarantees, and executes checkout using pre-authorized delegated
                payment tokens in seconds.
              </p>
            </div>
          </div>
        </section>

        {/* ── Sourced Stats ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// verified industry projections</p>
            <h2 style={{ marginTop: '10px' }}>The rise of autonomous shopping agents</h2>
            <div className="pp-bento" style={{ marginTop: '32px' }}>
              {SOURCED.map((s) => (
                <div className="pp-card" key={s.v}>
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6 Core Pillars ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// architectural requirements</p>
            <h2 style={{ marginTop: '10px' }}>The 6 pillars of brand readiness for agentic commerce</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '64ch' }}>
              How forward-thinking retail brands engineer their technology stack to capture autonomous AI transactions.
            </p>
            <div className="pp-bento" style={{ marginTop: '32px' }}>
              {PILLARS.map((p) => (
                <div className="pp-card" key={p.t}>
                  <div style={{ fontFamily: 'var(--pp-mono)', fontSize: '20px', color: 'var(--pp-orange-dark)', marginBottom: '10px' }} aria-hidden="true">{p.i}</div>
                  <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '16px', color: 'var(--pp-ink)', marginBottom: '6px' }}>{p.t}</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--pp-body)' }}>{p.d}</p>
                </div>
              ))}
            </div>
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
                  allowing AI shopping agents to execute sub-second inventory queries and tokenized checkouts.
                </p>
                <div style={{ marginTop: '22px' }}>
                  <ModalCTAButton label="Scope an MCP Server build" region="us" btnVariant="secondary-light" />
                </div>
              </div>
              <Image
                src={`${IMG}/agentic-commerce-autonomous-ai-shopper.webp`}
                alt="Agentic commerce autonomous checkout simulation dashboard"
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
                Autonomous agents execute natural language queries against your MCP server (e.g. "Find organic cotton t-shirts in navy blue size medium under $50").
                The MCP endpoint queries your indexed catalog, returning structured JSON containing exact SKU codes, real-time inventory counts,
                and direct product specifications.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Stock Reservation &amp; Cart Construction (`create_agent_cart`)</h3>
              <p>
                Once an AI assistant selects items, it calls the cart endpoint to reserve inventory for a 15-minute checkout window.
                This prevents race conditions during high-demand product drops and allows the agent to calculate accurate sales taxes
                and regional shipping rates based on the consumer’s delivery address.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>3. Delegated Tokenized Payment &amp; Order Capture (`execute_agent_order`)</h3>
              <p>
                The AI agent submits a cryptographic payment token issued by the consumer’s digital wallet (Apple Pay, Google Pay, or Shop Pay).
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
                When autonomous AI agents purchase products on behalf of human consumers, standard authentication models
                like passwords and visual CAPTCHAs break down. Our agentic commerce framework implements a zero-trust
                delegated token architecture:
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. Cryptographically Signed Agent Handshakes</h3>
              <p>
                Every incoming agent request must carry a verifiable cryptographic signature issued by a trusted identity provider
                (such as Apple ID, Google Identity, or OpenAI Consumer Auth). This authenticates the agent's identity and prevents
                malicious spoofing of buyer intent.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Scoped Spending Caps and Pre-Authorization Limits</h3>
              <p>
                Consumers define strict purchase authorization parameters within their personal AI assistants (e.g. "Authorized to spend up to $150 on running shoes").
                Our checkout endpoint validates that the final cart total falls strictly within the pre-authorized cryptographic budget token.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>3. Automated Dispute Resolution &amp; Reversible Escrow</h3>
              <p>
                In the event that an autonomous agent orders an incorrect product variant or misinterprets sizing preferences, our automated
                customer care protocol enables instant 1-click return authorizations and automated carrier label generation with zero human friction.
              </p>
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
                    <td className="name">Purchase Latency</td>
                    <td>3 to 8 minutes per order</td>
                    <td>1 to 3 minutes per order</td>
                    <td>Under 5 seconds (Autonomous)</td>
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
                  Let us audit your product catalog structure, build your MCP server endpoints, and ensure your brand
                  is discoverable and purchasable by the next generation of AI shopping agents.
                </p>
                <div style={{ marginTop: '24px' }}>
                  <a className="pp-primary" href={CALENDLY} target="_blank" rel="noopener noreferrer">
                    Book a 30-Minute Scoping Call
                  </a>
                </div>
                <div className="founder">
                  <div className="b">B</div>
                  <div>
                    <b>Bhavesh Barot</b>
                    <span>Founder, FactoryJet · 10+ yrs building commerce</span>
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
                  &ldquo;FactoryJet’s focus on structured schemas and fast edge APIs put our catalog at the top of AI search
                  recommendations before our competitors even understood what agentic commerce meant.&rdquo;
                </blockquote>
                <div className="rate">
                  <span className="s">★★★★★</span>
                  <span>4.9 / 5 across 120+ e-commerce &amp; marketplace builds</span>
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
