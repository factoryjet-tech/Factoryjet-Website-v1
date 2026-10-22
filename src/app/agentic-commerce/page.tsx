import type { Metadata } from 'next';
import { RECOGNITION_PROFILES } from '@/data/recognitionProfiles';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import { Bot, ShoppingBag, RefreshCw, Handshake, MessagesSquare, Workflow, Check } from 'lucide-react';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import ComparisonTable from '@/components/v2/ComparisonTable';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import JsonLd from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import AiVisibilityCtaBand from '@/components/ai-visibility/AiVisibilityCtaBand';

import './agentic-commerce.css';

// Freshness signal. Bump only when the page content actually changes.
const PAGE_MODIFIED = '2026-10-22';
const URL = 'https://factoryjet.com/agentic-commerce';

/* ── SEO / Metadata ─────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Agentic Commerce Explained: The 2026 Guide | FactoryJet',
  description:
    'Agentic commerce explained: how AI agents find and buy for shoppers, the protocols behind it (ACP, AP2, UCP, Visa, Mastercard) and how brands get agent-ready.',
  keywords: [
    'agentic commerce',
    'what is agentic commerce',
    'ai commerce',
    'agentic ai',
    'ai shopping agent',
    'agentic commerce platform',
    'agentic ai vs generative ai',
    'agentic commerce examples',
    'agentic ecommerce architecture',
  ],
  openGraph: {
    type: 'article',
    siteName: 'FactoryJet',
    title: 'Agentic Commerce Explained: The 2026 Guide | FactoryJet',
    description:
      'How AI shopping agents change retail discovery and checkout: what agentic commerce is, who is building it, how it differs from traditional ecommerce, and how brands get agent-ready.',
    url: URL,
    images: [
      { url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Agentic commerce explained for brands by FactoryJet' },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic Commerce Explained: The 2026 Guide | FactoryJet',
    description:
      'How AI agents are rewiring online buying, and how modern brands get agent-ready. A 2026 field guide.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/* ── Definitions (drive both the on-page glossary and DefinedTermSet schema) ── */
const DEFINITIONS = [
  { term: 'Agentic commerce', body: 'Commerce carried out by autonomous AI agents acting on behalf of shoppers or businesses. The agent discovers products, compares attributes and pricing, and executes checkout with minimal human input, rather than a shopper clicking through a website.' },
  { term: 'Agentic AI', body: 'Artificial intelligence designed to reason, plan, and execute multi-step deterministic tasks toward a goal. Agentic AI calls external APIs, verifies data outputs, and completes workflows with bounded supervision.' },
  { term: 'AI commerce', body: 'The application of artificial intelligence across retail operations: search indexing, dynamic pricing, support triage, and autonomous agent-to-agent transactions. Agentic commerce represents the transaction-layer evolution of AI commerce.' },
  { term: 'AI shopping agent', body: 'An intelligent software agent that purchases items on behalf of a consumer. It parses natural-language intent, queries catalog feeds across multiple stores, compares verified reviews, and completes transactions inside chat interfaces or connected apps.' },
];

/* ── FAQ data (drives both the on-page accordion and the FAQPage schema) ──── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'The Basics' },
  { key: 'rails', label: 'Protocols & Payment Rails' },
  { key: 'brands', label: 'Brand Readiness & Implementation' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  { category: 'basics', question: 'What is agentic commerce?', answer: 'Agentic commerce is online buying and selling done by AI agents that act for a shopper or a business buyer. Instead of a person browsing a website and clicking buttons, the agent finds products, compares options across stores, and can complete checkout once the person confirms. The merchant still sells the product, takes the payment, and ships the order.' },
  { category: 'basics', question: 'What is agentic AI?', answer: 'Agentic AI is artificial intelligence that plans and carries out steps toward a goal, instead of only writing text. It can call tools and APIs, check results such as stock or price, and decide the next step. In shopping, that means it can search, compare, fill a cart, and hand the order to the merchant with the buyer approving the purchase.' },
  { category: 'basics', question: 'What is the difference between agentic AI and generative AI?', answer: 'Generative AI creates content such as text, images, or chat replies. Agentic AI takes actions: it sets a plan, calls APIs, checks the outcome, and moves to the next step. A generative model can write a product description. An agentic system can find the product, check that it is in stock, and pass the order to the store.' },
  { category: 'basics', question: 'What is the difference between an AI agent and agentic AI?', answer: 'An AI agent is one piece of software with a job, a set of tools, and permissions, such as a shopping assistant inside ChatGPT. Agentic AI is the wider approach: models that plan, use tools, and act with limited supervision. One agent or a group of agents working together can be built on that approach.' },
  { category: 'basics', question: 'What is an AI shopping agent?', answer: 'An AI shopping agent is software that shops for a person. It takes a request such as "waterproof trail shoes for wide feet under $160", reads product feeds and reviews from many stores, ranks the options, and can complete the purchase inside the assistant. OpenAI says ChatGPT ranks multiple sellers of the same product on availability, price, quality, and whether the merchant is the primary seller.' },
  { category: 'basics', question: 'What is AI commerce?', answer: 'AI commerce is the use of artificial intelligence across selling online: product search, recommendations, pricing, customer support, and catalog feeds. Agentic commerce is the part of AI commerce where software also completes the transaction. A store can use AI commerce tools today without supporting agent checkout, but agent checkout depends on the same clean product data.' },
  { category: 'basics', question: 'How is agentic commerce different from traditional ecommerce?', answer: 'In traditional ecommerce a person browses a storefront and clicks to buy, so page design, ads, and merchandising decide a lot. In agentic commerce software reads your product feed, structured data, and checkout endpoints, then picks based on facts it can check: price, stock, shipping, returns, and reviews. Your storefront still matters for people. Your data matters for agents.' },
  { category: 'basics', question: 'What does agentic commerce architecture look like?', answer: 'It has four layers. A product data layer, such as a feed or Shopify Catalog, that agents read. A protocol layer, such as ACP or UCP, that carries the cart and order between the agent and the store. A payment layer of tokenized credentials from Stripe, Visa, or Mastercard. Your existing order, tax, fraud, and fulfillment systems sit underneath and stay in charge.' },

  { category: 'rails', question: 'Is agentic commerce live in 2026, or still experimental?', answer: 'It is live but early. OpenAI launched Instant Checkout in ChatGPT on 29 September 2025 for US users buying from US Etsy sellers. Shopify says its Agentic Storefronts channel connects merchants to ChatGPT, Microsoft Copilot, and AI Mode in Google Search and the Gemini app, limited to businesses selling to US buyers. Most shopping still happens on normal storefronts.' },
  { category: 'rails', question: 'Who is building agentic commerce infrastructure?', answer: 'OpenAI and Stripe co-developed the Agentic Commerce Protocol, which powers Instant Checkout in ChatGPT. Google announced the Agent Payments Protocol (AP2) with more than 60 organizations. Shopify and Google co-developed the Universal Commerce Protocol. Visa runs Intelligent Commerce with tokenized credentials for agents, and Mastercard runs Agent Pay with Agentic Tokens. PayPal is one of the named AP2 partners.' },
  { category: 'rails', question: 'What is the Agentic Commerce Protocol?', answer: 'The Agentic Commerce Protocol (ACP) is an open standard co-developed by Stripe and OpenAI so AI agents and businesses can complete a purchase together. Stripe says it is open source and Apache 2.0 licensed. The merchant stays the merchant of record, accepts or declines each order, and charges the payment through its own provider. It powers Instant Checkout in ChatGPT.' },
  { category: 'rails', question: 'What is the Agent Payments Protocol (AP2)?', answer: 'AP2 is an open protocol Google announced on 17 September 2025 for agent-led payments. It works as an extension of the Agent2Agent protocol and the Model Context Protocol. It uses signed "mandates": an Intent Mandate records what the user asked for and their limits, and a Cart Mandate records the exact items and price the user approved. Partners named include Mastercard, PayPal, and American Express.' },
  { category: 'rails', question: 'What is agentic tokenization?', answer: 'Agentic tokenization replaces a real card number with a token that an AI agent can use only within set limits. Visa calls these tokenized digital credentials and says only the consumer can tell the agent when to use one. Mastercard calls them Agentic Tokens, built on the tokenization behind contactless and card-on-file payments, and requires agents to be registered and verified first.' },
  { category: 'rails', question: 'What is the difference between conversational commerce and agentic commerce?', answer: 'Conversational commerce is a person chatting with a brand, usually in a chat widget or messaging app, and still doing the buying themselves. Agentic commerce hands the search, comparison, and checkout steps to an AI agent, with the person confirming the purchase. The agent may talk to many stores in one session, not one brand.' },
  { category: 'rails', question: 'Will AI shopping agents replace direct brand storefronts?', answer: 'No. Your store stays the source of truth for products, prices, and customer relationships. In both ACP and Shopify Agentic Storefronts the merchant remains the merchant of record and the order lands in your own admin. What changes is that the store now serves two readers: people who browse, and agents that read your feed, structured data, and checkout endpoints.' },

  { category: 'brands', question: 'How can brands prepare for agentic commerce?', answer: 'Start with your product data: complete titles, prices, stock, shipping, return terms, and GTINs in a feed and in Product schema on each page. Next, make sure your checkout can be reached by an agent, through Shopify Agentic Storefronts or an ACP integration with your payment provider. Then check whether AI assistants already name you, and fix the pages they skip.' },
  { category: 'brands', question: 'How do you build a business case for agentic commerce readiness?', answer: 'Measure what you have before you spend. Pull how many orders and sessions already come from ChatGPT, Copilot, Perplexity, and Google AI Mode in your analytics. Run the buyer questions your customers ask through those assistants and count how often you are named. Then price the fixes: feed cleanup, schema, and checkout access. Most of that work also helps normal Google Shopping.' },
  { category: 'brands', question: 'How can businesses upgrade to agentic checkout technology?', answer: 'The route depends on your platform. Shopify merchants can turn on the Agentic Storefronts sales channel in the Shopify admin. Stores on other platforms can sync products to Shopify Catalog through the Agentic Plan, which Shopify says has no monthly fee. Stores on Stripe can enable agentic payments for ACP; OpenAI says that can take as little as one line of code.' },
  { category: 'brands', question: 'How can merchants evaluate infrastructure readiness for agentic commerce protocols?', answer: 'Check five things. Can you publish a full product feed (OpenAI asks for CSV or JSON, refreshed daily)? Does your stock and price data update fast enough to stay accurate? Can your checkout create and update a session through an API? Does your payment provider support tokenized agent payments? Can your order system accept or decline an order and report status back?' },
  { category: 'brands', question: 'How do you build secure agentic commerce?', answer: 'Use the controls the payment rails already provide. Accept only tokenized credentials scoped to a set amount and merchant, never raw card numbers. Keep your own fraud checks on every order, since ACP lets the merchant accept or decline. Tell verified agents apart from scrapers at your CDN. Log each agent order with its approval record so disputes can be traced.' },
  { category: 'brands', question: 'How does AI decisioning work in agentic commerce?', answer: 'The agent reads the request, pulls matching products from feeds and the web, then ranks them on facts it can check. OpenAI says ChatGPT shopping results are organic and unsponsored, and when several merchants sell the same item it weighs availability, price, quality, and whether the merchant is the primary seller. Shopify lists data quality, availability, and pricing as factors.' },
  { category: 'brands', question: 'How can marketplaces and multi-channel sellers prepare for agentic commerce?', answer: 'Treat each marketplace listing as a feed an agent may read. Keep titles, GTINs, prices, and stock identical across your own store, Amazon, Walmart, and other channels, since an agent comparing sellers will spot a mismatch. Make your own store the most complete source, because agents weigh whether a merchant is the primary seller. Sync inventory so agents never buy what you cannot ship.' },
  { category: 'brands', question: 'Can mid-sized brands compete in agentic commerce against retail giants?', answer: 'Yes, on the factors agents check. OpenAI says ChatGPT product results are unsponsored and ranked on relevance, so ad budget does not buy a place there. A mid-sized brand with complete product data, accurate stock, clear return terms, and real reviews can be picked over a larger retailer whose feed is thin or out of date.' },
  { category: 'brands', question: 'How does agentic commerce change SEO and product discovery?', answer: 'Discovery moves from ranking on a results page to being named in an AI answer. That rewards pages AI engines can read and quote: Product and Offer schema, clear specs, direct answers to buyer questions, and consistent facts across your site and listings. Generative engine optimization (GEO) is the name for that work, and it sits on top of normal SEO.' },
  { category: 'brands', question: 'How do security and payment authorizations work in agentic commerce?', answer: 'The shopper approves, the network issues a limited token, and the merchant charges it. OpenAI says ChatGPT payment tokens are authorized only for specific amounts and merchants. Visa lets consumers set spending limits and conditions for agent purchases. Mastercard requires agents to be registered and verified before they can pay. Google AP2 records the approved cart in a signed Cart Mandate.' },
  { category: 'brands', question: 'How does FactoryJet build agentic commerce for brands?', answer: 'We clean and complete your product feed, add Product and Offer schema to every product page, connect your store to the agent channels your platform supports, and build back-office agents that keep inventory and orders in sync with your ERP. You see a working demo on your own data before you sign, and each phase has a fixed price quoted in writing after scoping.' },
  { category: 'brands', question: 'How do we get started with an agentic readiness audit?', answer: 'Send your website URL. We check your catalog structure, schema coverage, feed quality, and whether AI assistants name your brand for your buyer questions. You get a list of fixes in priority order. You can run the free AI visibility checker first to see how often assistants mention you today.' },
];

/* ── JSON-LD Schemas ─────────────────────────────────────────────────────── */
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Agentic Commerce Explained: The 2026 Guide',
  description:
    'What agentic commerce is, who is building it, how it differs from traditional ecommerce, and how brands get agent-ready.',
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder & Chief Technical Architect',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      'https://github.com/factoryjet-tech',
    ],
  },
  publisher: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
  datePublished: '2026-07-11T00:00:00.000Z',
  dateModified: `${PAGE_MODIFIED}T00:00:00.000Z`,
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${URL}#webpage`,
  url: URL,
  name: 'Agentic Commerce Explained: The 2026 Guide',
  description:
    'Agentic commerce explained: how AI agents find and buy for shoppers, the protocols behind it (ACP, AP2, UCP, Visa, Mastercard) and how brands get agent-ready.',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const glossarySchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Agentic commerce glossary',
  url: URL,
  hasDefinedTerm: DEFINITIONS.map((d) => ({
    '@type': 'DefinedTerm',
    name: d.term,
    description: d.body,
    inDefinedTermSet: URL,
  })),
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

/* ── Small building blocks ───────────────────────────────────────────────── */
const SHIFTS = [
  { b: 'Discovery moves from search to answer', p: 'Buyers ask an AI and it picks, instead of scrolling a results page. Ranking on Google still helps, and now your product also has to be legible to agents.' },
  { b: 'The buyer becomes software', p: 'An agent reads your data, compares, and checks out. Clean feeds, structured data, and machine-readable pricing win over brand polish alone.' },
  { b: 'Selling becomes agent-to-agent', p: 'Your systems will transact with buying agents directly. Brands that expose clean, accurate commerce get bought. Those that do not get skipped.' },
];

const USES = [
  { Icon: ShoppingBag, title: 'AI shopping agents', body: 'An agent takes a shopper request, searches across stores, compares on price and reviews, and completes the purchase.', span: 'w3' },
  { Icon: MessagesSquare, title: 'In-chat and in-answer checkout', body: 'People buy inside an assistant like ChatGPT or a search answer, without ever visiting a storefront.', span: 'w3' },
  { Icon: RefreshCw, title: 'Autonomous reordering', body: 'Agents restock consumables and reorder on schedule, so repeat purchases happen without a human in the loop.', span: 'cell' },
  { Icon: Handshake, title: 'Agent-to-agent deals', body: 'Buying and selling agents settle price, terms, and availability directly, especially in B2B and wholesale.', span: 'cell' },
  { Icon: Bot, title: 'Personalized offers in real time', body: 'Agents tailor bundles, pricing, and timing to each shopper context as they decide.', span: 'cell' },
];

const PLAYERS = [
  { n: 'OpenAI', p: 'Launched Instant Checkout in ChatGPT on 29 September 2025, starting with US Etsy sellers. Merchants pay a fee on completed purchases, and OpenAI says checkout items get no ranking preference.' },
  { n: 'Stripe', p: 'Co-developed the Agentic Commerce Protocol with OpenAI and powers Instant Checkout. Its Shared Payment Token was the first implementation of the ACP delegated payment spec.' },
  { n: 'Google', p: 'Announced the Agent Payments Protocol (AP2) on 17 September 2025 with more than 60 organizations, and co-developed the Universal Commerce Protocol with Shopify.' },
  { n: 'Visa', p: 'Intelligent Commerce, announced 30 April 2025: tokenized digital credentials and consumer-set spending limits so trusted AI agents can pay on a cardholder\'s behalf.' },
  { n: 'Mastercard', p: 'Agent Pay, announced 29 April 2025: Agentic Tokens built on its existing tokenization, with AI agents registered and verified before they can pay.' },
  { n: 'Shopify', p: 'Shopify Catalog makes products readable to agents, and the Agentic Storefronts channel sends them to ChatGPT, Microsoft Copilot, and Google AI Mode, with checkout handled by Shopify.' },
];

const READY = [
  { n: 'Step 01', h: 'Audit', p: 'A free agentic-readiness audit of your catalog, data, pricing, reviews, and discovery, against how agents actually buy.' },
  { n: 'Step 02', h: 'Structure', p: 'Clean product feeds, structured data, and honest reviews so agents can read and trust your catalog.' },
  { n: 'Step 03', h: 'Expose', p: 'Accurate pricing and inventory reachable through the channels and rails agents use, with an agent-ready checkout.' },
  { n: 'Step 04', h: 'Operate', p: 'Deploy autonomous agents that synchronize catalog feeds, inventory levels, and orders across all channels.' },
];

const PILLARS = [
  { k: 'Legible', h: 'Get readable by agents', p: 'Clean feeds, structured data, and real reviews, so an agent can find you, understand you, and trust you.' },
  { k: 'Transactable', h: 'Get buyable by agents', p: 'Accurate pricing and inventory, reachable through the channels and rails buying agents use.' },
  { k: 'Operated', h: 'Run an operator of your own', p: 'Deploy back-office agents that audit and fix catalog errors, sync ERP inventory, and maintain agent readiness.' },
];

const yes = <span style={{ color: '#177a48', fontWeight: 700 }}>Yes</span>;
const no = (t: string) => <span style={{ color: '#b23e13' }}>{t}</span>;
const partial = (t: string) => <span style={{ color: '#8a5e00' }}>{t}</span>;

/* ── Page Component ──────────────────────────────────────────────────────── */
export default function AgenticCommercePage() {
  return (
    <>
      <JsonLd data={articleSchema} id="article-schema" />
      <JsonLd data={webPageSchema} id="webpage-schema" />
      <JsonLd data={glossarySchema} id="glossary-schema" />
      <JsonLd data={faqSchema} id="faq-schema" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Agentic Commerce', url: URL },
        ]}
      />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="agc">
        <Breadcrumbs
          items={[
            { name: 'Home', url: 'https://factoryjet.com' },
            { name: 'Agentic Commerce', url: URL },
          ]}
        />

        {/* HERO */}
        <section className="agc-hero">
          <div className="agc-wrap agc-hero-grid">
            <div className="agc-hero-copy">
              <span className="agc-pill"><span className="d" /> Agentic Commerce · Field Guide 2026</span>
              <h1 className="agc-h1 disp">Agentic commerce: how <span className="u">AI agents</span> are rewiring the way the world buys</h1>
              <p className="agc-lead">AI agents are discovering products, comparing options, and checking out for shoppers. Here is what agentic commerce means, who is building it, and how brands get ready. Written from 12 years of commerce work and 500+ businesses served.</p>
              <HeroInlineForm region="us" source="us_agentic_commerce_hero" submitLabel="Get my readiness audit" />
              <div className="agc-trust">
                <span className="tk"><Check size={15} strokeWidth={2.4} /> 500+ businesses served</span>
                <span className="tk"><Check size={15} strokeWidth={2.4} /> 12 years in commerce</span>
                <span className="tk"><Check size={15} strokeWidth={2.4} /> Senior AI Engineers</span>
              </div>
            </div>
            <div className="agc-hero-visual">
              <div className="agc-crystal agc-hero-diagram">
                <svg viewBox="0 0 420 300" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram: an AI agent connecting a shopper to your store, marketplaces, and checkout">
                  <g stroke="#f0b8a4" strokeWidth="1.6" strokeDasharray="4 5">
                    <line x1="210" y1="150" x2="80" y2="70" />
                    <line x1="210" y1="150" x2="340" y2="70" />
                    <line x1="210" y1="150" x2="80" y2="235" />
                    <line x1="210" y1="150" x2="340" y2="235" />
                  </g>
                  <g>
                    <rect x="18" y="46" width="124" height="48" rx="12" fill="#fff" stroke="#eaeae3" />
                    <text x="80" y="68" textAnchor="middle" className="dm" fontSize="11" fill="#5e5e57">SHOPPER</text>
                    <text x="80" y="83" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#141414">asks, delegates</text>
                  </g>
                  <g>
                    <rect x="278" y="46" width="124" height="48" rx="12" fill="#fff" stroke="#eaeae3" />
                    <text x="340" y="68" textAnchor="middle" className="dm" fontSize="11" fill="#5e5e57">YOUR STORE</text>
                    <text x="340" y="83" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#141414">catalog, price</text>
                  </g>
                  <g>
                    <rect x="18" y="211" width="124" height="48" rx="12" fill="#fff" stroke="#eaeae3" />
                    <text x="80" y="233" textAnchor="middle" className="dm" fontSize="11" fill="#5e5e57">MARKETPLACES</text>
                    <text x="80" y="248" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#141414">Amazon, TikTok</text>
                  </g>
                  <g>
                    <rect x="278" y="211" width="124" height="48" rx="12" fill="#fff" stroke="#eaeae3" />
                    <text x="340" y="233" textAnchor="middle" className="dm" fontSize="11" fill="#5e5e57">CHECKOUT</text>
                    <text x="340" y="248" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#141414">agent pays</text>
                  </g>
                  <circle cx="210" cy="150" r="46" fill="#F05A28" />
                  <circle cx="210" cy="150" r="46" fill="none" stroke="#fff" strokeOpacity="0.25" strokeWidth="6" />
                  <text x="210" y="146" textAnchor="middle" fontSize="14" fontWeight="800" fill="#fff">AI</text>
                  <text x="210" y="163" textAnchor="middle" fontSize="14" fontWeight="800" fill="#fff">agent</text>
                </svg>
                <div className="cap">The agent sits between the shopper and every place you sell</div>
              </div>
            </div>
          </div>
        </section>

        {/* ANSWER-FIRST */}
        <section className="agc-answer">
          <div className="agc-wrap in">
            <div className="q disp"><span className="ql">Quick answer</span>What is agentic commerce?</div>
            <div className="a"><p><b>Agentic commerce is buying and selling done by AI agents acting for a person or a business.</b> The agent finds products, compares them, and completes checkout after the shopper confirms. The store stays the merchant of record. Shoppers have bought this way inside ChatGPT since September 2025, through the Agentic Commerce Protocol that OpenAI built with Stripe.</p></div>
          </div>
        </section>

        {/* DEFINITIONS / GLOSSARY */}
        <section className="agc-sec">
          <div className="agc-wrap">
            <div className="agc-sh"><span className="agc-eyebrow">Definitions</span><h2 className="disp">The words you actually need, in plain English</h2><p>Four terms get used interchangeably and they are not the same. Here is the difference, so you can talk about this without hand-waving.</p></div>
            <div className="agc-defs">
              {DEFINITIONS.map((d) => (
                <div key={d.term} className="agc-crystal agc-defcard"><div className="term">{d.term} <span className="kbd">term</span></div><p>{d.body}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* THE THREE SHIFTS */}
        <section className="agc-sec pt0">
          <div className="agc-wrap">
            <div className="agc-sh"><span className="agc-eyebrow">The thesis</span><h2 className="disp">Three shifts agentic commerce forces on every brand</h2><p>Strip away the noise and the change is simple. Buying is moving from people clicking pages to agents reading data.</p></div>
            <div className="agc-list">
              {SHIFTS.map((s) => (
                <div key={s.b} className="agc-crystal agc-li"><span className="num" /><div><b>{s.b}</b><p>{s.p}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="agc-sec pt0">
          <div className="agc-wrap">
            <ComparisonTable
              eyebrow="COMPARE"
              headline="Agentic commerce vs traditional ecommerce"
              columns={[
                { label: 'Agentic commerce', isFactoryJet: true },
                { label: 'Traditional ecommerce' },
              ]}
              rows={[
                { feature: 'Who does the buying', values: [yes, no('A human shopper')] },
                { feature: 'How products are found', values: [<span key="a" style={{ fontWeight: 600 }}>AI answer and comparison</span>, no('Search and browsing')] },
                { feature: 'What the buyer reads', values: [<span key="b" style={{ fontWeight: 600 }}>Feeds, data, reviews</span>, no('Your storefront UI')] },
                { feature: 'What wins the sale', values: [<span key="c" style={{ fontWeight: 600 }}>Legibility and trust to machines</span>, partial('Brand, design, and ads')] },
                { feature: 'Checkout', values: [<span key="d" style={{ fontWeight: 600 }}>Autonomous, on rails for agents</span>, no('Manual, human clicks')] },
                { feature: 'Loyalty and patience', values: [no('None, agents just compare'), partial('Some, humans have habits')] },
              ]}
            />
          </div>
        </section>

        {/* USE CASES (BENTO) */}
        <section className="agc-sec pt0">
          <div className="agc-wrap">
            <div className="agc-sh"><span className="agc-eyebrow">What it enables</span><h2 className="disp">What agentic commerce actually looks like</h2><p>The first two are live today in ChatGPT and through Shopify&apos;s agent channels. The other three are patterns brands are building toward.</p></div>
            <div className="agc-bento">
              {USES.map(({ Icon, title, body, span }) => (
                <div key={title} className={`agc-crystal agc-bcard ${span}`}>
                  <div className="ic"><Icon size={22} strokeWidth={2} /></div>
                  <h3 className="disp">{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
              <div className="agc-crystal agc-bcard w6">
                <div>
                  <div className="ic"><Workflow size={22} strokeWidth={2} /></div>
                  <h3 className="disp">Where FactoryJet Fits</h3>
                  <p>We engineer your store to be legible and transactable to AI agents, implementing clean GraphQL feeds, structured Product JSON-LD schemas, and autonomous back-office agents that synchronize pricing and inventory across all your channels.</p>
                </div>
                <div className="mini">
                  <Link href="/services/ai-agent-development" style={{ color: 'var(--pp-orange-dark)', fontWeight: 700, textDecoration: 'underline' }}>
                    Explore AI Agent Services →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PLAYERS */}
        <section className="agc-sec pt0">
          <div className="agc-wrap">
            <div className="agc-sh"><span className="agc-eyebrow">Who builds it</span><h2 className="disp">Who is building agentic commerce</h2><p>As of 22 Oct 2026, the payment networks and platforms have each shipped a protocol or a token program. There are several standards and they overlap, so brands should make their data ready for all of them instead of betting on one. For store-side AI agents you can install today, see our comparison of the{' '}<Link href="/blog/best-ai-agents-for-ecommerce-2026" style={{ color: 'var(--pp-orange-dark)', fontWeight: 700, textDecoration: 'underline' }}>best AI agents for ecommerce in 2026</Link>.</p></div>
            <div className="agc-defs three">
              {PLAYERS.map((pl) => (
                <div key={pl.n} className="agc-crystal agc-defcard"><div className="term">{pl.n}</div><p>{pl.p}</p></div>
              ))}
            </div>

            <div className="agc-sh" style={{ marginTop: '48px' }}>
              <h3 className="disp" style={{ fontSize: '22px' }}>The protocols and launches, from each company&apos;s own page</h3>
              <p>Every line below comes from the vendor&apos;s own announcement or documentation. We read each page on 22 Oct 2026 and kept only what it says.</p>
              <ul style={{ listStyle: 'disc', paddingLeft: '22px', marginTop: '14px', color: 'var(--ink2)', fontSize: '16px', lineHeight: 1.6 }}>
                <li style={{ marginTop: '10px' }}><b>Agentic Commerce Protocol (ACP), Stripe and OpenAI, 29 Sep 2025.</b> An open standard &ldquo;codeveloped by Stripe and OpenAI&rdquo;, open source under Apache 2.0. A business builds once and can sell through any ACP-compatible agent, stays the merchant of record, and can accept or decline each order using its own fraud signals. <a href="https://stripe.com/blog/developing-an-open-standard-for-agentic-commerce" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--pp-orange-dark)', fontWeight: 700, textDecoration: 'underline' }}>Stripe announcement</a> (read 22 Oct 2026).</li>
                <li style={{ marginTop: '10px' }}><b>Instant Checkout in ChatGPT, OpenAI, 29 Sep 2025.</b> US ChatGPT Plus, Pro, and Free users could buy from US Etsy sellers in chat, single items first, with over a million Shopify merchants announced as coming. Merchants pay a fee on completed purchases. OpenAI says product results are organic and unsponsored, and checkout items are not preferred. <a href="https://openai.com/index/buy-it-in-chatgpt/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--pp-orange-dark)', fontWeight: 700, textDecoration: 'underline' }}>OpenAI launch post</a> (read 22 Oct 2026). OpenAI&apos;s developer docs ask merchants for a CSV or JSON product feed, refreshed daily: <a href="https://developers.openai.com/commerce/guides/key-concepts" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--pp-orange-dark)', fontWeight: 700, textDecoration: 'underline' }}>key concepts</a> (read 22 Oct 2026).</li>
                <li style={{ marginTop: '10px' }}><b>Agent Payments Protocol (AP2), Google, 17 Sep 2025.</b> An open protocol for agent-led payments, built with more than 60 organizations including Mastercard, PayPal, American Express, Adyen, and Etsy. It can run as an extension of the Agent2Agent protocol and the Model Context Protocol, and uses signed Intent and Cart Mandates as proof of what the user approved. <a href="https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--pp-orange-dark)', fontWeight: 700, textDecoration: 'underline' }}>Google Cloud blog</a> (read 22 Oct 2026).</li>
                <li style={{ marginTop: '10px' }}><b>Universal Commerce Protocol (UCP) and Agentic Storefronts, Shopify.</b> Shopify says UCP is an open standard it co-developed with Google, backed by Amazon, Mastercard, Microsoft, Stripe, Visa, and others. Agentic Storefronts is a sales channel in the Shopify admin for ChatGPT, Microsoft Copilot, and AI Mode in Google Search and the Gemini app, for businesses selling to US buyers. <a href="https://www.shopify.com/blog/how-agentic-commerce-works" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--pp-orange-dark)', fontWeight: 700, textDecoration: 'underline' }}>Shopify guide, updated 18 Jun 2026</a> (read 22 Oct 2026).</li>
                <li style={{ marginTop: '10px' }}><b>Visa Intelligent Commerce, 30 Apr 2025.</b> Replaces card details with tokenized digital credentials that confirm an agent may act for the consumer, with spending limits the consumer sets. Named partners include Anthropic, Microsoft, OpenAI, Perplexity, and Stripe. <a href="https://usa.visa.com/about-visa/newsroom/press-releases.releaseId.21361.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--pp-orange-dark)', fontWeight: 700, textDecoration: 'underline' }}>Visa press release</a> (read 22 Oct 2026).</li>
                <li style={{ marginTop: '10px' }}><b>Mastercard Agent Pay, 29 Apr 2025.</b> Introduces Mastercard Agentic Tokens, built on the tokenization behind contactless and card-on-file payments. AI agents must be registered and verified before they can pay, and every party can see that an agent made the transaction. <a href="https://www.mastercard.com/us/en/news-and-trends/press/2025/april/mastercard-unveils-agent-pay-pioneering-agentic-payments-technology-to-power-commerce-in-the-age-of-ai.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--pp-orange-dark)', fontWeight: 700, textDecoration: 'underline' }}>Mastercard press release</a> (read 22 Oct 2026).</li>
              </ul>
              <h3 className="disp" style={{ fontSize: '22px', marginTop: '36px' }}>What an AI agent does at checkout, step by step</h3>
              <p>This is the ACP flow OpenAI documents for Instant Checkout. Shopify&apos;s flow has the same shape, with Shopify Checkout in the middle.</p>
              <ol style={{ listStyle: 'decimal', paddingLeft: '22px', marginTop: '14px', color: 'var(--ink2)', fontSize: '16px', lineHeight: 1.6 }}>
                <li style={{ marginTop: '8px' }}>The shopper asks a question and the agent shows matching products from merchant feeds and the web.</li>
                <li style={{ marginTop: '8px' }}>The shopper taps Buy and confirms the order, shipping, and payment details. Nothing is charged without that confirmation.</li>
                <li style={{ marginTop: '8px' }}>The agent calls the merchant&apos;s ACP endpoints to create or update a checkout session.</li>
                <li style={{ marginTop: '8px' }}>A payment provider issues a one-time token with a maximum amount and an expiry, and the agent passes it to the merchant.</li>
                <li style={{ marginTop: '8px' }}>The merchant checks the order, works out shipping and sales tax, runs its fraud checks, and charges the token through its own processor.</li>
                <li style={{ marginTop: '8px' }}>The merchant accepts or declines and reports the status back. The agent shows the confirmation, and the merchant ships and handles returns as usual.</li>
              </ol>
              <p>Plain-language background is in our post on <Link href="/blog/what-is-agentic-commerce" style={{ color: 'var(--pp-orange-dark)', fontWeight: 700, textDecoration: 'underline' }}>what agentic commerce is</Link>. If you own a brand and want to know what to do first, read <Link href="/agentic-commerce-for-brands" style={{ color: 'var(--pp-orange-dark)', fontWeight: 700, textDecoration: 'underline' }}>agentic commerce for brands</Link>.</p>
            </div>
          </div>
        </section>

        {/* DARK: WHY / HOW WE HELP */}
        <section className="agc-dark">
          <div className="agc-wrap agc-sec">
            <div className="agc-sh"><span className="agc-eyebrow">Getting agent-ready</span><h2 className="disp">Most brands are not ready. Here is what ready looks like</h2><p>Agents have no loyalty and no patience. Ready brands get surfaced and bought. The rest get skipped.</p></div>
            <div className="agc-pillars">
              {PILLARS.map((p) => (
                <div key={p.k} className="agc-pillar"><div className="k">{p.k}</div><h3 className="disp">{p.h}</h3><p>{p.p}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW TO PREPARE (STEPS) */}
        <section className="agc-sec">
          <div className="agc-wrap">
            <div className="agc-sh"><span className="agc-eyebrow">How to prepare</span><h2 className="disp">Get your brand agent-ready in four steps</h2></div>
            <div className="agc-steps">
              {READY.map((s) => (
                <div key={s.n} className="agc-step"><div className="n">{s.n}</div><h3 className="disp">{s.h}</h3><p>{s.p}</p></div>
              ))}
            </div>
            <div className="agc-sh" style={{ marginTop: '44px' }}>
              <h3 className="disp" style={{ fontSize: '22px' }}>Agent-readiness checklist</h3>
              <p>Each item maps to something a protocol or platform above asks for. If you can tick all of them, an agent can find, trust, and buy from your store.</p>
              <ul style={{ listStyle: 'disc', paddingLeft: '22px', marginTop: '14px', color: 'var(--ink2)', fontSize: '16px', lineHeight: 1.6 }}>
                <li style={{ marginTop: '8px' }}>A full product feed in CSV or JSON with IDs, titles, descriptions, prices, stock, images, and shipping options, refreshed at least daily.</li>
                <li style={{ marginTop: '8px' }}>A GTIN or other standard product ID on every variant, the same on your store and every marketplace listing.</li>
                <li style={{ marginTop: '8px' }}>Product, Offer, shipping, and return policy schema on each product page, rendered in the HTML (not only after JavaScript runs).</li>
                <li style={{ marginTop: '8px' }}>Stock and price that update fast enough that an agent never sells what you cannot ship.</li>
                <li style={{ marginTop: '8px' }}>A checkout an agent can reach: Shopify Agentic Storefronts, an ACP integration, or a payment provider that accepts tokenized agent payments.</li>
                <li style={{ marginTop: '8px' }}>Your own fraud rules still running on agent orders, with a way to accept or decline each one.</li>
                <li style={{ marginTop: '8px' }}>Bot rules at your CDN that let verified shopping agents and AI crawlers in and keep scrapers out.</li>
                <li style={{ marginTop: '8px' }}>Analytics that tag orders and sessions from ChatGPT, Copilot, Perplexity, and Google AI Mode separately.</li>
                <li style={{ marginTop: '8px' }}>A baseline of how often AI assistants name your brand today. Our free <Link href="/ai-visibility-checker" style={{ color: 'var(--pp-orange-dark)', fontWeight: 700, textDecoration: 'underline' }}>AI visibility checker</Link> gives you one, and our <Link href="/services/ai-seo" style={{ color: 'var(--pp-orange-dark)', fontWeight: 700, textDecoration: 'underline' }}>AI SEO service</Link> fixes the pages assistants skip.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* E-E-A-T AUTHOR SECTION */}
        <section className="agc-sec pt0">
          <div className="agc-wrap agc-eeat-grid">
            <div className="agc-crystal agc-eeat">
              <div>
                <Image
                  className="agc-avatar"
                  src="/bhavesh_avatar-240.webp"
                  alt="Bhavesh Barot, Founder of FactoryJet"
                  width={76}
                  height={76}
                  loading="lazy"
                  style={{ borderRadius: '50%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <div className="role">Written by the founder</div>
                <h3 className="disp">Bhavesh Barot, Founder of FactoryJet</h3>
                <p>Twelve years building and scaling high-performance commerce systems for 500+ businesses. We build agent-ready architectures for US brands, ensuring clean data feeds, sub-second edge speeds, and full readiness for AI shopping agents.</p>
                <div className="agc-reco"><span>Recognized on</span>{RECOGNITION_PROFILES.slice(0, 4).map((p) => (<a key={p.href} href={p.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4"><b>{p.label}</b></a>))}</div>
              </div>
            </div>
            <div className="agc-teamframe" style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', minHeight: '300px' }}>
              <Image
                src="/images/us/services/service-team.webp"
                alt="The FactoryJet senior engineering team at work"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Free AI Visibility Checker */}
        <AiVisibilityCtaBand />

        {/* FAQ */}
        <FAQ
          bgClassName="bg-white"
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Agentic commerce FAQs"
          lead="Clear answers to what brands and builders are actually asking about agentic commerce and agentic AI."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* FINAL CTA */}
        <section className="agc-sec pt0" id="final-cta">
          <div className="agc-wrap">
            <div className="agc-finalcta">
              <span className="agc-eyebrow">Get started</span>
              <h2 className="disp">Find out how agent-ready your brand is</h2>
              <p>Get a free agentic-readiness audit of your catalog, structured data, pricing feeds, and AI discovery, plus an engineering roadmap to ensure your store is chosen by AI shopping agents.</p>
              <Link href="/contact" className="agc-cta-btn">Get my free readiness audit</Link>
              <div className="obj">No long contracts. Keep the audit either way.</div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
