import type { Metadata } from 'next';
import Link from 'next/link';
import { Bot, ShoppingBag, RefreshCw, Handshake, MessagesSquare, Workflow, Check } from 'lucide-react';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import ComparisonTable from '@/components/v2/ComparisonTable';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import JsonLd from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

import './agentic-commerce.css';

const URL = 'https://factoryjet.com/agentic-commerce';

/* ── SEO / Metadata ─────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Agentic Commerce Explained: The 2026 Guide for Brands | FactoryJet',
  description:
    'What is agentic commerce? A clear 2026 guide to how AI agents discover, compare, and buy on shoppers behalf, who is building it (OpenAI, Stripe, Visa, Mastercard, PayPal, Shopify), how it differs from traditional ecommerce, and how brands get agent-ready.',
  keywords: [
    'agentic commerce',
    'what is agentic commerce',
    'ai commerce',
    'agentic ai',
    'ai shopping agent',
    'agentic commerce platform',
    'agentic ai vs generative ai',
    'agentic commerce examples',
  ],
  openGraph: {
    type: 'article',
    siteName: 'FactoryJet',
    title: 'Agentic Commerce Explained: The 2026 Guide for Brands',
    description:
      'How AI agents are rewiring the way the world buys: what agentic commerce is, who is building it, how it differs from traditional ecommerce, and how brands get agent-ready.',
    url: URL,
    images: [
      { url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Agentic commerce, explained, by FactoryJet' },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic Commerce Explained: The 2026 Guide for Brands',
    description:
      'How AI agents are rewiring the way the world buys, and how brands get agent-ready. A clear 2026 field guide.',
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
  { term: 'Agentic commerce', body: 'Commerce carried out by AI agents that act on a person or business behalf. The agent discovers products, compares options, and can complete checkout with limited human input, instead of a shopper clicking through a store themselves.' },
  { term: 'Agentic AI', body: 'AI that plans and takes multi-step actions toward a goal, not just generates text or answers. An agentic AI decides what to do next, uses tools and APIs, and completes tasks with limited supervision.' },
  { term: 'AI commerce', body: 'The broad use of AI across selling: product discovery, pricing, content, support, and now autonomous buying and selling. Agentic commerce is the most advanced layer of AI commerce.' },
  { term: 'AI shopping agent', body: 'An AI that shops for a person. It takes a request, searches across stores, compares options, and can complete the purchase, whether inside a chat assistant, a browser, or a retailer app.' },
];

/* ── FAQ data (drives both the on-page accordion and the FAQPage schema) ──── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'The basics' },
  { key: 'landscape', label: 'The landscape' },
  { key: 'brands', label: 'For brands' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  { category: 'basics', question: 'What is agentic commerce?', answer: 'Agentic commerce is commerce carried out by AI agents that act on a person or business behalf. Instead of a shopper browsing a store and clicking buy, an AI agent discovers products, compares options, and can complete checkout with limited human input. It is the next layer on top of ecommerce, the way mobile shopping was a layer on top of the web.' },
  { category: 'basics', question: 'What is agentic AI?', answer: 'Agentic AI is artificial intelligence that plans and takes multi-step actions toward a goal, rather than only generating text or answers. An agentic AI decides what to do next, calls tools and APIs, checks its own work, and completes a task with limited supervision. Buying a product end to end is a common example.' },
  { category: 'basics', question: 'What is the difference between agentic AI and generative AI?', answer: 'Generative AI creates content: text, images, code, or answers to a prompt. Agentic AI uses that intelligence to act: it sets a plan, takes steps, uses tools, and completes a task. In short, generative AI writes the answer, agentic AI goes and does the thing. Most agentic systems use generative models inside a loop that can take actions.' },
  { category: 'basics', question: 'What is the difference between an AI agent and agentic AI?', answer: 'An AI agent is a single system that can perceive, decide, and act toward a goal. Agentic AI is the broader capability, often several agents and tools working together to plan and complete multi-step work. Put simply, an AI agent is one worker, agentic AI is the approach of getting real tasks done autonomously, sometimes with a whole team of agents.' },
  { category: 'basics', question: 'What is an AI shopping agent?', answer: 'An AI shopping agent is software that shops for a person. It takes a request like find me running shoes under one hundred dollars, searches across stores, compares options on price and reviews, and can complete the purchase. Shopping agents are appearing inside chat assistants, browsers, and retailer apps, and are the front end of agentic commerce.' },
  { category: 'basics', question: 'What is AI commerce?', answer: 'AI commerce is the broad use of artificial intelligence across selling: product discovery, search, pricing, content, merchandising, customer support, and now autonomous buying and selling. Agentic commerce is the most advanced layer of AI commerce, where agents do not just assist the work but carry out transactions.' },
  { category: 'basics', question: 'How is agentic commerce different from traditional ecommerce?', answer: 'In traditional ecommerce a human browses your storefront and clicks buy, so brand, design, and marketing to people win. In agentic commerce an AI agent does the discovering and buying, so being legible to machines wins: clean product feeds, structured data, honest reviews, and machine-readable pricing. The buyer stops being a person looking at a page and becomes software reading your data.' },

  { category: 'landscape', question: 'Is agentic commerce real yet, or is it hype?', answer: 'It is early but real. As of early 2026, you can already buy inside some chat assistants, and the largest payment and platform companies have shipped agent-payment rails. Most shopping is still done by humans, so treat agentic commerce as an emerging channel to prepare for, not a replacement for your current store overnight. The brands preparing now are the ones agents will find first.' },
  { category: 'landscape', question: 'Who is building agentic commerce?', answer: 'The push is led by the payment and platform giants. As of early 2026 that includes OpenAI, with in-chat checkout built on its Agentic Commerce Protocol with Stripe, plus agent-payment efforts from Visa, Mastercard, PayPal, and Google, and agent-facing commerce work from Shopify. The picture is moving fast, and the standards are still settling, which is exactly why brands should get ready now.' },
  { category: 'landscape', question: 'What is the Agentic Commerce Protocol?', answer: 'The Agentic Commerce Protocol is an open standard, introduced by OpenAI with Stripe in 2025, for letting AI agents complete purchases from merchants inside an assistant like ChatGPT. It defines how an agent shares a cart and completes payment with a seller. Other players have their own agent-payment approaches, and the standards are still converging as of early 2026.' },
  { category: 'landscape', question: 'What is the difference between conversational commerce and agentic commerce?', answer: 'Conversational commerce is buying through a chat interface, where a human still makes each decision by typing back and forth. Agentic commerce goes further: the AI agent makes decisions and completes steps on your behalf, not just chatting but acting. Conversational commerce is talking to buy, agentic commerce is delegating the buying.' },
  { category: 'landscape', question: 'Will AI agents replace online stores?', answer: 'Not replace, but reshape. Your store still holds your catalog, pricing, and brand, and humans will keep shopping directly for a long time. What changes is that a growing share of discovery and checkout runs through agents, so your store also needs to serve machines cleanly, with structured data and, increasingly, an agent-ready checkout. The storefront becomes one of several front doors, not the only one.' },

  { category: 'brands', question: 'How do brands get ready for agentic commerce?', answer: 'Three moves. Get legible: clean product feeds, structured data, and honest reviews so agents can read and trust your catalog. Get transactable: make sure your pricing, inventory, and checkout can be reached cleanly, through the channels and rails agents use. Get an operator: run an AI system of your own that keeps all of this accurate across channels. A readiness audit shows where you stand.' },
  { category: 'brands', question: 'Can small brands do agentic commerce, or is it only for big retailers?', answer: 'Small brands can absolutely play, and the timing favors them. Agentic discovery rewards clean data and genuine reviews over ad budget, so a focused brand with a well-structured catalog can get surfaced next to giants. The work is mostly getting your product data, pricing, and reviews in order, which is within reach for a small team with the right help.' },
  { category: 'brands', question: 'How does agentic commerce change SEO and discovery?', answer: 'Discovery shifts from ranking on a results page to being chosen by an agent or answer engine. That means optimizing for machines: structured data, clear specifications, comparison-friendly content, and strong reviews, alongside classic SEO. It is the same direction as AI search and answer-engine optimization, applied to buying. We treat it as one discipline with our AI SEO work.' },
  { category: 'brands', question: 'Is agentic commerce safe? How do payments work?', answer: 'The agent-payment rails from Visa, Mastercard, PayPal, and others are being built specifically to keep agent purchases secure, with controls on what an agent may spend and clear authorization. For a brand, the practical safety work is making sure the agent transacts against accurate pricing and inventory, so you do not sell at the wrong price or oversell. That is an operations problem we help solve.' },
  { category: 'brands', question: 'Does agentic commerce help or hurt brands?', answer: 'It does both, depending on readiness. Brands with clean data, fair pricing, and strong reviews get surfaced and bought by agents more often, which helps. Brands with messy feeds, hidden pricing, or weak reviews get skipped, because an agent has no loyalty and no patience for a broken experience. The gap between prepared and unprepared brands is the whole opportunity.' },
  { category: 'brands', question: 'How does FactoryJet help with agentic commerce?', answer: 'We make your commerce legible and transactable to agents: clean product feeds and structured data, accurate pricing and inventory across channels, and answer-engine optimization so agents find and trust you. We run this with Commerceflo, our AI commerce operator, which audits your storefront and fixes what is stalling growth across every channel you sell through.' },
  { category: 'brands', question: 'What is Commerceflo?', answer: 'Commerceflo is FactoryJet AI commerce operator. It audits your storefront in about 90 seconds, ranks what is stalling growth by revenue impact, and carries out the fix once you approve it, across your store, marketplaces, and B2B. It is how we keep a brand agent-ready in practice, not just in theory.' },
  { category: 'brands', question: 'How do we get started with agentic commerce?', answer: 'Ask for a free agentic-readiness audit with your store and your email. We come back with where your catalog, data, pricing, and discovery stand against how agents actually buy, plus a prioritized plan to close the gaps. No long sales cycle, and the audit is yours to keep either way.' },
];

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Agentic Commerce, Explained: The 2026 Guide for Brands',
  description:
    'What agentic commerce is, who is building it, how it differs from traditional ecommerce, and how brands get agent-ready.',
  author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://factoryjet.com/author/bhavesh-barot' },
  publisher: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet',
    logo: { '@type': 'ImageObject', url: 'https://factoryjet.com/FinalLogo.svg' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
  datePublished: '2026-07-11T00:00:00.000Z',
  dateModified: '2026-07-11T00:00:00.000Z',
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
  { n: 'Step 04', h: 'Operate', p: 'Run Commerceflo, our AI commerce operator, to keep all of it accurate and fixed across every channel.' },
];

const PILLARS = [
  { k: 'Legible', h: 'Get readable by agents', p: 'Clean feeds, structured data, and real reviews, so an agent can find you, understand you, and trust you.' },
  { k: 'Transactable', h: 'Get buyable by agents', p: 'Accurate pricing and inventory, reachable through the channels and rails buying agents use.' },
  { k: 'Operated', h: 'Run an operator of your own', p: 'Commerceflo audits your storefront and fixes what is stalling growth across every channel, so you stay agent-ready.' },
];

const yes = <span style={{ color: '#177a48', fontWeight: 700 }}>Yes</span>;
const no = (t: string) => <span style={{ color: '#b23e13' }}>{t}</span>;
const partial = (t: string) => <span style={{ color: '#8a5e00' }}>{t}</span>;

/* ── Page ────────────────────────────────────────────────────────────────── */
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

      <SiteHeader locale="us" />

      <main className="agc">
        {/* HERO */}
        <section className="agc-hero">
          <div className="agc-wrap agc-hero-grid">
            <div className="agc-hero-copy">
              <span className="agc-pill"><span className="d" /> Agentic Commerce · Field Guide 2026</span>
              <h1 className="agc-h1 disp">Agentic commerce: how <span className="u">AI agents</span> are rewiring the way the world buys</h1>
              <p className="agc-lead">AI agents are starting to discover products, compare options, and check out for shoppers. Here is what agentic commerce means, who is building it, and how brands get ready. Built on 12 years and 500+ commerce builds.</p>
              <HeroInlineForm region="us" source="us_agentic_commerce_hero" submitLabel="Get my readiness audit" />
              <div className="agc-trust">
                <span className="tk"><Check size={15} strokeWidth={2.4} /> 500+ businesses served</span>
                <span className="tk"><Check size={15} strokeWidth={2.4} /> 12 years in commerce</span>
                <span className="tk"><Check size={15} strokeWidth={2.4} /> Builders of Commerceflo</span>
              </div>
            </div>
            <div className="agc-hero-visual">
              <div className="agc-crystal agc-hero-diagram">
                <svg viewBox="0 0 420 300" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram: an AI agent connecting a shopper to your store, marketplaces, and checkout">
                  {/* links */}
                  <g stroke="#f0b8a4" strokeWidth="1.6" strokeDasharray="4 5">
                    <line x1="210" y1="150" x2="80" y2="70" />
                    <line x1="210" y1="150" x2="340" y2="70" />
                    <line x1="210" y1="150" x2="80" y2="235" />
                    <line x1="210" y1="150" x2="340" y2="235" />
                  </g>
                  {/* outer nodes */}
                  <g>
                    <rect x="18" y="46" width="124" height="48" rx="12" fill="#fff" stroke="#eaeae3" />
                    <text x="80" y="68" textAnchor="middle" className="dm"fontSize="11" fill="#5e5e57">SHOPPER</text>
                    <text x="80" y="83" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#141414">asks, delegates</text>
                  </g>
                  <g>
                    <rect x="278" y="46" width="124" height="48" rx="12" fill="#fff" stroke="#eaeae3" />
                    <text x="340" y="68" textAnchor="middle" className="dm"fontSize="11" fill="#5e5e57">YOUR STORE</text>
                    <text x="340" y="83" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#141414">catalog, price</text>
                  </g>
                  <g>
                    <rect x="18" y="211" width="124" height="48" rx="12" fill="#fff" stroke="#eaeae3" />
                    <text x="80" y="233" textAnchor="middle" className="dm"fontSize="11" fill="#5e5e57">MARKETPLACES</text>
                    <text x="80" y="248" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#141414">Amazon, TikTok</text>
                  </g>
                  <g>
                    <rect x="278" y="211" width="124" height="48" rx="12" fill="#fff" stroke="#eaeae3" />
                    <text x="340" y="233" textAnchor="middle" className="dm"fontSize="11" fill="#5e5e57">CHECKOUT</text>
                    <text x="340" y="248" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#141414">agent pays</text>
                  </g>
                  {/* center node */}
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
              <Link href="/commerceflo" className="agc-crystal agc-bcard w6">
                <div>
                  <div className="ic"><Workflow size={22} strokeWidth={2} /></div>
                  <h3 className="disp">Where FactoryJet and Commerceflo fit</h3>
                  <p>We make your store legible and transactable to agents, then run Commerceflo, our AI commerce operator, to keep pricing, inventory, and product data accurate across every channel an agent might buy from.</p>
                </div>
                <div className="mini"><span>Meet Commerceflo →</span></div>
              </Link>
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

        {/* E-E-A-T */}
        <section className="agc-sec pt0">
          <div className="agc-wrap agc-eeat-grid">
            <div className="agc-crystal agc-eeat">
              <div><img className="agc-avatar" src="/bhavesh_image.jpg" alt="Bhavesh Barot, Founder of FactoryJet" width={76} height={76} loading="lazy" decoding="async" /></div>
              <div>
                <div className="role">Written by the founder</div>
                <h3 className="disp">Bhavesh Barot, Founder of FactoryJet</h3>
                <p>Twelve years building and scaling commerce for 500+ businesses, and the team behind Commerceflo, our AI commerce operator. We build agent-ready commerce for US brands, and we wrote this because most brands are getting the definitions, and the urgency, wrong.</p>
                <div className="agc-reco"><span>Recognized on</span> <b>Clutch</b> <b>GoodFirms</b> <b>DesignRush</b> <b>SoftwareSuggest</b></div>
              </div>
            </div>
            <div className="agc-teamframe">
              <img src="/images/us/services/service-team.webp" alt="The FactoryJet team at work" width={800} height={600} loading="lazy" decoding="async" />
            </div>
          </div>
        </section>

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
              <p>Get a free agentic-readiness audit of your catalog, data, pricing, and discovery, plus a plan to close the gaps before agents do the choosing. Or meet <Link href="/commerceflo" style={{ color: '#fff', textDecoration: 'underline' }}>Commerceflo</Link>, our AI commerce operator.</p>
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
