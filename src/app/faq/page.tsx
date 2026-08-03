import type { Metadata } from 'next';
import { faqAlternates } from '@/data/hreflangMap';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

export const metadata: Metadata = {
  title: 'E-Commerce Development FAQ | Omnichannel & B2B Commerce | FactoryJet',
  description:
    'Answers about ecommerce development, omnichannel and unified commerce, B2B ecommerce, platforms (Shopify, Magento, WooCommerce, Commerceflo), AI agents, and working with FactoryJet.',
  alternates: { canonical: 'https://factoryjet.com/faq', languages: faqAlternates },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: "what-we-do", label: "What we do" },
  { key: "platforms", label: "Platforms & build" },
  { key: "dtc-b2b", label: "DTC & B2B" },
  { key: "ai-agents", label: "AI agents" },
  { key: "working-together", label: "Working together" },
];

const FAQ_ITEMS = [
  { category: "what-we-do", question: "What does an omnichannel commerce agency actually do?", answer: "We design, build, and implement the systems that let you sell across your store, marketplaces, and B2B from one catalog, one inventory, and one order engine. In plain terms, we are the team you hire to build unified commerce, not a tool you subscribe to." },
  { category: "what-we-do", question: "What is the difference between omnichannel and unified commerce?", answer: "Omnichannel is about the customer experience across channels. Unified commerce is the architecture underneath it that keeps products, inventory, orders, and customers in sync in real time. We build that unified layer so your channels stop drifting apart." },
  { category: "what-we-do", question: "Is FactoryJet a software product or an agency?", answer: "An agency. We are a services partner that consults, designs, develops, and implements commerce for you. You own and operate what we build, and there is no FactoryJet subscription." },
  { category: "what-we-do", question: "Can you fix our existing store, or only build from scratch?", answer: "Both. Most of our work is improving or replatforming what you already run, then adding the unified layer. We audit what you have, fix what is broken, and build what is missing." },
  { category: "platforms", question: "Which ecommerce platform is best for B2B and DTC?", answer: "There is no single best one; it depends on your catalog size, B2B rules, and budget. We build on Shopify and Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, headless, and Commerceflo, and recommend the fit rather than pushing one platform." },
  { category: "platforms", question: "Shopify Plus vs Adobe Commerce vs BigCommerce, which should we choose?", answer: "Shopify Plus for speed and a clean DTC-plus-B2B model on one store, Adobe Commerce for deep native B2B and very large catalogs, BigCommerce for strong mid-market B2B value. We match it to your SKUs, pricing rules, and integrations on a scoping call." },
  { category: "platforms", question: "Can you migrate us off Magento (or another platform) without losing SEO?", answer: "Yes. We handle replatforming and data migration, products, customers, orders, and B2B pricing, with 301 redirects and a cutover plan that protects your rankings and uptime." },
  { category: "platforms", question: "Do you connect our store to our ERP, POS, and marketplaces?", answer: "Yes. We integrate ERPs, POS, 3PLs, and marketplaces into one order and inventory layer so every system reads the same live data instead of its own copy." },
  { category: "dtc-b2b", question: "How do we sell on Amazon, Walmart, and our own store at the same time?", answer: "You put every channel on one catalog and one live inventory, so a sale anywhere updates everywhere. We build that connection plus the listing, pricing, and order flows each marketplace expects." },
  { category: "dtc-b2b", question: "How do we stop overselling across channels?", answer: "Overselling happens when each tool keeps its own stock count. We build a single live inventory that every channel reads from, so when the last unit sells on one channel it goes unavailable on the rest within moments." },
  { category: "dtc-b2b", question: "Can DTC and B2B run on one site with different pricing?", answer: "Yes. We build one storefront that serves retail shoppers and gives trade buyers their own login with tiered or contract pricing, net terms, and fast reordering, on one catalog and inventory." },
  { category: "dtc-b2b", question: "What B2B ecommerce features can you build?", answer: "Tiered and contract pricing, quote and approval workflows, account hierarchies, net terms, gated catalogs, and reordering, all integrated with your ERP." },
  { category: "ai-agents", question: "Can AI manage my inventory and pricing across channels?", answer: "Yes, and the technology is mature now. We build and implement agents that sync inventory, reprice to hold the Buy Box, and keep listings consistent across channels, all acting on your live data." },
  { category: "ai-agents", question: "What can AI agents actually do for an ecommerce business?", answer: "The repetitive channel work: listing new products in each marketplace's format, fixing suppressed listings, repricing, reconciling feeds, and answering order questions. They take the busywork off your team, not the strategy." },
  { category: "ai-agents", question: "Is this just an AI chatbot?", answer: "No. These are task agents that take action across your channels, listing, pricing, and inventory, not a question-and-answer widget on your site." },
  { category: "ai-agents", question: "Do you run the AI agents, or do we?", answer: "We build and implement them into your stack; they run inside your system and hand the exceptions to your team. You stay in control of the business." },
  { category: "working-together", question: "What should we ask before hiring an ecommerce development agency?", answer: "Ask about their B2B experience specifically, their discovery and scoping process, how they handle integrations, who owns the relationship after launch, and to see comparable builds. We are happy to answer all of those on a call." },
  { category: "working-together", question: "How much does it cost to build an ecommerce site?", answer: "It depends on scope, platform, catalog size, and integrations, so we scope it on a short call and send a fixed proposal before any work starts, rather than putting a number on a page." },
  { category: "working-together", question: "How long does an ecommerce build or migration take?", answer: "Most mid-market builds and migrations run from a few weeks to a few months, depending on custom integrations and catalog complexity. You get a phased timeline with milestones after scoping." },
  { category: "working-together", question: "Do you work with US brands?", answer: "Yes, most of the brands we work with are US-based, across DTC and B2B, and we bring a decade-plus of commerce builds to every engagement." },
  { category: "what-we-do", question: "Which industries and brands do you work with?", answer: "DTC and B2B brands across home and decor, wholesale and distribution, and consumer goods, among others. Most of the brands we work with are US-based." },
  { category: "working-together", question: "Do we own the code, the store, and the data after launch?", answer: "Yes. You own the code, the storefront, the data, and the accounts. There is no FactoryJet subscription and no lock-in; we hand over everything we build." },
  { category: "working-together", question: "What support do you provide after launch?", answer: "We stay through launch and offer ongoing support and scaling: adding channels, tuning performance, and maintaining the integrations and agents we built." },
  { category: "working-together", question: "How do we get started?", answer: "Book a call with the founder. We map your channels, catalog, and B2B rules, then send a scoped proposal before any work starts." },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })),
};

export default function UsFaqPage() {
  return (
    <>
      <script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <SiteHeader
        navLinks={[
          { label: 'E-Commerce', href: '/services/ecommerce-development' },
          { label: 'Shopify', href: '/services/shopify-development' },
          { label: 'Magento', href: '/services/magento-development' },
          { label: 'Services', href: '/services' },
          { label: 'Work', href: '/case-studies' },
          { label: 'FAQ', href: '/faq' },
        ]}
        cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
      />
      <main className="bg-white">
        {/* This page has no hero, so the FAQ headline IS the page h1.
            Audited 2026-08-03: /faq was the only live URL rendering zero h1. */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headlineAs="h1"
          headline="E-commerce development, omnichannel commerce, and working with FactoryJet."
          lead="If your question is not below, send a short brief and answers usually come back inside 24 hours."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />
      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
