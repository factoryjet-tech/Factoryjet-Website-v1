import type { Metadata } from 'next';
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

const PAGE_MODIFIED = '2026-08-29';
const URL = 'https://factoryjet.com/agentic-commerce';

/* ── SEO / Metadata ─────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Agentic Commerce Explained: 2026 Architecture Guide for Brands | FactoryJet',
  description:
    'What is agentic commerce? A comprehensive 2026 guide to how AI agents discover, compare, and buy on shoppers behalf, who is building it (OpenAI, Stripe, Visa, Mastercard, Shopify), and how brands get agent-ready.',
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
    title: 'Agentic Commerce Explained: 2026 Architecture Guide for Brands | FactoryJet',
    description:
      'How AI shopping agents are rewiring retail discovery and checkout: what agentic commerce is, who is building it, how it differs from traditional ecommerce, and how brands get agent-ready.',
    url: URL,
    images: [
      { url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Agentic commerce explained for brands by FactoryJet' },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic Commerce Explained: 2026 Architecture Guide for Brands | FactoryJet',
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
  { term: 'Agentic commerce', body: 'Commerce carried out by autonomous AI agents acting on behalf of shoppers or businesses. The agent discovers products, compares attributes and pricing, and executes checkout with minimal human input, rather than a shopper manually navigating a website.' },
  { term: 'Agentic AI', body: 'Artificial intelligence designed to reason, plan, and execute multi-step deterministic tasks toward a goal. Agentic AI calls external APIs, verifies data outputs, and completes workflows with bounded supervision.' },
  { term: 'AI commerce', body: 'The application of artificial intelligence across retail operations: search indexing, dynamic pricing, support triage, and autonomous agent-to-agent transactions. Agentic commerce represents the transaction-layer evolution of AI commerce.' },
  { term: 'AI shopping agent', body: 'An intelligent software agent that purchases items on behalf of a consumer. It parses natural-language intent, queries catalog feeds across multiple stores, compares verified reviews, and completes transactions inside chat interfaces or connected apps.' },
];

/* ── FAQ data (drives both the on-page accordion and the FAQPage schema) ──── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'The Basics' },
  { key: 'landscape', label: 'The Landscape & Rails' },
  { key: 'brands', label: 'Brand Readiness & Implementation' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  { category: 'basics', question: 'What is agentic commerce?', answer: 'Agentic commerce is digital commerce carried out by AI agents that act on behalf of consumers or business buyers. Instead of a shopper browsing a website and clicking buttons, an AI agent discovers products, compares options across merchant catalogs, and completes checkout autonomously.' },
  { category: 'basics', question: 'What is agentic AI?', answer: 'Agentic AI is artificial intelligence that plans and executes multi-step actions toward a defined goal, rather than merely generating text. An agentic AI evaluates intermediate results, calls typed tools and APIs, checks inventory or pricing data, and finishes tasks with minimal human intervention.' },
  { category: 'basics', question: 'What is the difference between agentic AI and generative AI?', answer: 'Generative AI creates content such as text, images, or conversational replies. Agentic AI uses reasoning to take real actions: it sets a plan, executes API calls, verifies outcomes, and completes tasks. Generative AI drafts the text; agentic AI executes the transaction.' },
  { category: 'basics', question: 'What is the difference between an AI agent and agentic AI?', answer: 'An AI agent is a software worker with tools and permissions. Agentic AI is the underlying architecture and autonomous reasoning capability that allows single or multi-agent networks to accomplish complex tasks independently.' },
  { category: 'basics', question: 'What is an AI shopping agent?', answer: 'An AI shopping agent is an application that shops for a human. It takes a prompt (e.g., "find waterproof trail shoes for wide feet under $160"), queries product feeds, evaluates real customer reviews, and executes the purchase directly within the assistant interface or browser.' },
  { category: 'basics', question: 'What is AI commerce?', answer: 'AI commerce spans the broad utilization of artificial intelligence across commerce operations: product discovery, semantic search, dynamic catalog feeds, customer support triage, and autonomous agent-to-agent transactions.' },
  { category: 'basics', question: 'How is agentic commerce different from traditional ecommerce?', answer: 'In traditional ecommerce, humans browse a storefront UI and click buttons to purchase, so visual merchandising and display ads win. In agentic commerce, AI software reads product feeds, structured schema data, and API endpoints to make purchasing decisions based on verifiable attributes and machine-readable data.' },

  { category: 'landscape', question: 'Is agentic commerce active in 2026, or is it experimental?', answer: 'It is active and growing rapidly. Payment networks and major tech platforms have deployed live agent-payment rails in 2026. While human shopping remains the majority, agentic discovery and autonomous purchasing are expanding exponentially across conversational engines and mobile assistants.' },
  { category: 'landscape', question: 'Who is building agentic commerce infrastructure?', answer: 'The ecosystem is led by OpenAI (Agentic Commerce Protocol), Stripe (agent billing APIs), Visa (Intelligent Commerce), Mastercard (Agent Pay), PayPal (agent-ready wallet rails), and Shopify (GraphQL merchant agent tools).' },
  { category: 'landscape', question: 'What is the Agentic Commerce Protocol?', answer: 'The Agentic Commerce Protocol is an open standard introduced by OpenAI and Stripe that enables AI agents to securely share carts, negotiate terms, and execute authenticated payments with merchants directly inside assistant environments like ChatGPT.' },
  { category: 'landscape', question: 'What is the difference between conversational commerce and agentic commerce?', answer: 'Conversational commerce requires human back-and-forth messaging inside a chat widget. Agentic commerce delegates the entire multi-step shopping and checkout task to the AI agent, which executes the transaction autonomously.' },
  { category: 'landscape', question: 'Will AI shopping agents replace direct brand storefronts?', answer: 'No. Direct storefronts remain the central source of truth for product catalogs, brand identity, and customer relationships. However, stores must now serve both human shoppers and AI software by exposing structured data, clean API feeds, and agent-compatible checkout endpoints.' },

  { category: 'brands', question: 'How do brands get ready for agentic commerce?', answer: 'Brands prepare across three pillars: First, achieve machine legibility through rich schema markup and clean merchant feeds. Second, achieve transactability with accurate real-time inventory and pricing APIs. Third, deploy autonomous operational agents to manage multi-channel order synchronization.' },
  { category: 'brands', question: 'Can mid-sized brands compete in agentic commerce against retail giants?', answer: 'Yes. AI agents evaluate data accuracy, inventory availability, and verified customer reviews rather than advertising budgets. A mid-sized brand with clean structured data and strong product specifications can outrank legacy retailers in AI shopping queries.' },
  { category: 'brands', question: 'How does agentic commerce change SEO and product discovery?', answer: 'Discovery shifts from keyword search rankings to AI citation and recommendation engines. Brands must optimize for generative engine optimization (GEO) and structured Product JSON-LD markup so AI search platforms can parse and cite their catalog accurately.' },
  { category: 'brands', question: 'How do security and payment authorizations work in agentic commerce?', answer: 'Agent transactions utilize tokenized credentials with hard spending limits, biometric user authorizations, and single-use transaction tokens enforced by payment networks (Visa, Mastercard, Stripe), ensuring agents cannot exceed pre-approved purchase thresholds.' },
  { category: 'brands', question: 'How does FactoryJet engineer agentic commerce for brands?', answer: 'We engineer structured product feeds, deploy nested Product and Offer schemas, optimize API endpoints for AI indexing, and build custom back-office agents that automate order triage and ERP inventory synchronization.' },
  { category: 'brands', question: 'How do we get started with an agentic readiness audit?', answer: 'Submit your website URL for a comprehensive agentic readiness scan. We analyze your catalog structure, schema completeness, and AI search visibility, providing a prioritized roadmap to make your store agent-ready.' },
];

/* ── JSON-LD Schemas ─────────────────────────────────────────────────────── */
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Agentic Commerce Explained: The 2026 Guide for Brands',
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
  publisher: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    logo: { '@type': 'ImageObject', url: 'https://factoryjet.com/FinalLogo.svg' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
  datePublished: '2026-07-11T00:00:00.000Z',
  dateModified: `${PAGE_MODIFIED}T00:00:00.000Z`,
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
  { b: 'Discovery moves from search to answer', p: 'Buyers ask an AI and it picks, instead of scrolling a results page. Your product has to be legible to agents, not just ranked on Google.' },
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
  { n: 'OpenAI', p: 'Put checkout inside ChatGPT via its Agentic Commerce Protocol, built with Stripe, so people can buy from merchants in the chat.' },
  { n: 'Stripe', p: 'Payment tooling for agents, including the shared protocol with OpenAI and controls for what an agent may spend.' },
  { n: 'Visa', p: 'Intelligent Commerce, a program to let trusted AI agents pay on a cardholder behalf with guardrails.' },
  { n: 'Mastercard', p: 'Agent Pay, its framework for secure, authorized payments made by AI agents.' },
  { n: 'PayPal', p: 'Agent-ready checkout so its wallet works inside agent-driven purchases.' },
  { n: 'Shopify', p: 'Agent-facing commerce work so its millions of merchants can be discovered and bought by assistants.' },
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
              <p className="agc-lead">AI agents are discovering products, comparing options, and checking out for shoppers. Here is what agentic commerce means, who is building it, and how brands get ready. Built on 12 years and 500+ commerce builds.</p>
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
            <div className="a"><p><b>Agentic commerce is commerce carried out by AI agents that act on a person or business behalf:</b> they discover products, compare options, and can complete checkout with limited human input. Instead of a shopper clicking through a store, an AI agent does the buying, and increasingly the selling, guided by goals you set. It is the next layer on top of ecommerce, the way mobile was a layer on top of the web.</p></div>
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
            <div className="agc-sh"><span className="agc-eyebrow">What it enables</span><h2 className="disp">What agentic commerce actually looks like</h2><p>Not science fiction. These are the patterns already showing up in 2026.</p></div>
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
            <div className="agc-sh"><span className="agc-eyebrow">The landscape</span><h2 className="disp">Who is building agentic commerce</h2><p>As of early 2026, the payment and platform giants are laying the rails. The standards are still settling, which is exactly why brands should prepare now.</p></div>
            <div className="agc-defs three">
              {PLAYERS.map((pl) => (
                <div key={pl.n} className="agc-crystal agc-defcard"><div className="term">{pl.n}</div><p>{pl.p}</p></div>
              ))}
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
          </div>
        </section>

        {/* E-E-A-T AUTHOR SECTION */}
        <section className="agc-sec pt0">
          <div className="agc-wrap agc-eeat-grid">
            <div className="agc-crystal agc-eeat">
              <div>
                <Image
                  className="agc-avatar"
                  src="/bhavesh_image.jpg"
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
                <div className="agc-reco"><span>Recognized on</span> <b>Clutch</b> <b>GoodFirms</b> <b>DesignRush</b> <b>SoftwareSuggest</b></div>
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
              <h2 className="disp">Find out how agent-ready your brand really is</h2>
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
