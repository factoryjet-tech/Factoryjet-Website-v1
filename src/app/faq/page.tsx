import type { Metadata } from 'next';
import { faqAlternates } from '@/data/hreflangMap';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FaqTopics, { type FaqTopicItem } from './FaqTopics';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

export const metadata: Metadata = {
  title: 'Ecommerce, AI Agent and B2B Commerce FAQ | FactoryJet',
  description:
    '24 answers on ecommerce builds, B2B and DTC on one store, AI agents, platforms, costs and working with FactoryJet, each linked to the page that goes deeper.',
  alternates: { canonical: 'https://factoryjet.com/faq', languages: faqAlternates },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: "what-we-do", label: "What we do" },
  { key: "platforms", label: "Platforms and build" },
  { key: "dtc-b2b", label: "DTC and B2B" },
  { key: "ai-agents", label: "AI agents" },
  { key: "working-together", label: "Working together" },
];

const FAQ_ITEMS: ReadonlyArray<FaqTopicItem> = [
  { category: "what-we-do", question: "What does an omnichannel commerce agency actually do?", answer: "We design, build, and implement the systems that let you sell across your store, marketplaces, and B2B from one catalog, one inventory, and one order engine. In plain terms, we are the team you hire to build unified commerce, not a tool you subscribe to.", link: { href: "/omnichannel-commerce", label: "Omnichannel commerce services" } },
  { category: "what-we-do", question: "What is the difference between omnichannel and unified commerce?", answer: "Omnichannel is about the customer experience across channels. Unified commerce is the architecture underneath it that keeps products, inventory, orders, and customers in sync in real time. We build that unified layer so your channels stop drifting apart.", link: { href: "/omnichannel-vs-multichannel-commerce", label: "Omnichannel vs multichannel commerce" } },
  { category: "what-we-do", question: "Is FactoryJet a software product or an agency?", answer: "An agency. We are a services partner that consults, designs, develops, and implements commerce for you. You own and operate what we build, and there is no FactoryJet subscription.", link: { href: "/services", label: "All FactoryJet services" } },
  { category: "what-we-do", question: "Can you fix our existing store, or only build from scratch?", answer: "Both. Most of our work is improving or replatforming what you already run, then adding the unified layer. We audit what you have, fix what is broken, and build what is missing.", link: { href: "/services/ecommerce-audit", label: "Ecommerce audit" } },
  { category: "what-we-do", question: "Which industries and brands do you work with?", answer: "DTC and B2B brands across home and decor, wholesale and distribution, consumer goods, and professional services. Named examples include Belle Maison (DTC and trade), Shopholistico (Shopify supplements) and Washington Law Group (an AI agent).", link: { href: "/portfolio", label: "Portfolio and case studies" } },
  { category: "platforms", question: "Which ecommerce platform is best for B2B and DTC?", answer: "There is no single best one; it depends on your catalog size, B2B rules, and budget. We build on Shopify and Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, headless, and Commerceflo by FactoryJet, and recommend the fit rather than pushing one platform.", link: { href: "/best-ecommerce-platforms", label: "Best ecommerce platforms compared" } },
  { category: "platforms", question: "Shopify Plus vs Adobe Commerce vs BigCommerce, which should we choose?", answer: "Shopify Plus for speed and a clean DTC-plus-B2B model on one store, Adobe Commerce for deep native B2B and large catalogs, BigCommerce for strong mid-market B2B value. We match it to your SKUs, pricing rules, and integrations on a scoping call.", link: { href: "/comparisons/shopify-plus-vs-magento", label: "Shopify Plus vs Magento comparison" } },
  { category: "platforms", question: "Can you migrate us off Magento (or another platform) without losing SEO?", answer: "Yes. We handle replatforming and data migration, products, customers, orders, and B2B pricing, with 301 redirects and a cutover plan that protects your rankings and uptime.", link: { href: "/replatforming", label: "Replatforming guides by platform" } },
  { category: "platforms", question: "Do you connect our store to our ERP, POS, and marketplaces?", answer: "Yes. We integrate ERPs, POS, 3PLs, and marketplaces into one order and inventory layer so every system reads the same live data instead of its own copy.", link: { href: "/services/ecommerce-erp-integration", label: "Ecommerce ERP integration" } },
  { category: "dtc-b2b", question: "How do we sell on Amazon, Walmart, and our own store at the same time?", answer: "You put every channel on one catalog and one live inventory, so a sale anywhere updates everywhere. We build that connection plus the listing, pricing, and order flows each marketplace expects.", link: { href: "/marketplace-management", label: "Marketplace management" } },
  { category: "dtc-b2b", question: "How do we stop overselling across channels?", answer: "Overselling happens when each tool keeps its own stock count. We build a single live inventory that every channel reads from, so when the last unit sells on one channel it goes unavailable on the rest within moments.", link: { href: "/blog/tiktok-shop-amazon-shopify-plus-multi-channel-inventory-sync-2026", label: "Multichannel inventory sync guide" } },
  { category: "dtc-b2b", question: "Can DTC and B2B run on one site with different pricing?", answer: "Yes. We build one storefront that serves retail shoppers and gives trade buyers their own login with tiered or contract pricing, net terms, and fast reordering, on one catalog and inventory.", link: { href: "/services/shopify-plus-b2b", label: "Shopify Plus B2B" } },
  { category: "dtc-b2b", question: "What B2B ecommerce features can you build?", answer: "Tiered and contract pricing, quote and approval workflows, account hierarchies, net terms, gated catalogs, and reordering, all integrated with your ERP.", link: { href: "/b2b-ecommerce", label: "B2B ecommerce" } },
  { category: "ai-agents", question: "Can AI manage my inventory and pricing across channels?", answer: "Yes, and the technology is mature now. We build and implement agents that sync inventory, reprice to hold the Buy Box, and keep listings consistent across channels, all acting on your live data.", link: { href: "/services/ai-inventory-management-agents", label: "AI inventory management agents" } },
  { category: "ai-agents", question: "What can AI agents actually do for an ecommerce business?", answer: "The repetitive channel work: listing new products in each marketplace's format, fixing suppressed listings, repricing, reconciling feeds, and answering order questions. They take the busywork off your team, not the strategy.", link: { href: "/services/ecommerce-ai-agents", label: "Ecommerce AI agents" } },
  { category: "ai-agents", question: "Is this just an AI chatbot?", answer: "No. These are task agents that take action across your channels, listing, pricing, and inventory, not a question-and-answer widget on your site.", link: { href: "/blog/ai-chatbots-vs-ai-agents-business", label: "AI chatbots vs AI agents" } },
  { category: "ai-agents", question: "Do you run the AI agents, or do we?", answer: "We build and implement them into your stack; they run inside your system and hand the exceptions to your team. You stay in control of the business, and we can keep managing the servers, AI models and updates if you choose.", link: { href: "/services/ai-agent-development", label: "AI agent development" } },
  { category: "working-together", question: "What should we ask before hiring an ecommerce development agency?", answer: "Ask about their B2B experience specifically, their discovery and scoping process, how they handle integrations, who owns the relationship after launch, and to see comparable builds. We are happy to answer all of those on a call.", link: { href: "/blog/how-to-choose-ecommerce-development-agency-2026", label: "How to choose an ecommerce agency" } },
  { category: "working-together", question: "How much does it cost to build an ecommerce site?", answer: "BigCommerce's cost guide puts a small store on a pre-built theme at $1,000 to $5,000, a store with custom design and integrations at $5,000 to $25,000, and custom or enterprise builds at $25,000 to $250,000 or more. FactoryJet quotes a fixed price in writing after a short scoping call.", link: { href: "/pricing", label: "Market cost ranges and how we quote" } },
  { category: "working-together", question: "How long does an ecommerce build or migration take?", answer: "A custom-theme store on a hosted platform usually takes 3 to 5 weeks, an advanced build with subscriptions, B2B or a migration 5 to 8 weeks, and a headless or custom build 8 to 14 weeks. You get a phased timeline with milestones after scoping.", link: { href: "/services/ecommerce-development", label: "Ecommerce development" } },
  { category: "working-together", question: "Do you work with US brands?", answer: "Yes. US clients include Shopholistico, a whole-food supplement brand on a custom Shopify theme, and Washington Law Group, a personal injury firm running an AI agent we built. FactoryJet was founded in 2014 and has served 500+ businesses.", link: { href: "/case-studies/shopholistico-shopify-store", label: "Shopholistico case study" } },
  { category: "working-together", question: "Do we own the code, the store, and the data after launch?", answer: "Yes. You own the code and its repository from day one, plus the storefront, the data, and the accounts. There is no lock-in; we hand over everything we build.", link: { href: "/pricing#ownership", label: "Code ownership and handover" } },
  { category: "working-together", question: "What support do you provide after launch?", answer: "Defects are fixed inside the build price for a cover period agreed before work starts. After that, support is optional: each change is quoted and approved, with no monthly minimum, and we can keep managing hosting and integrations for you.", link: { href: "/services/website-maintenance", label: "Website maintenance" } },
  { category: "working-together", question: "How do we get started?", answer: "Book a call with the founder. We map your channels, catalog, and B2B rules, then send a scoped proposal before any work starts, and we can show working software on your own data before you sign.", link: { href: "/contact", label: "Contact the founder" } },
];

// Freshness signal. Benchmark: 56% of AI-Overview-cited pages carry it.
// Keep honest: bump when the page's content actually changes.
const PAGE_MODIFIED = '2026-10-22';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/faq#webpage',
  url: 'https://factoryjet.com/faq',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://factoryjet.com/faq' },
  ],
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })),
};

export default function UsFaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script id="faq-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
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
            Audited 2026-08-03: /faq was the only live URL rendering zero h1.
            2026-10-22: topics render as h2 and each answer links to its page. */}
        <FaqTopics
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="E-commerce development, omnichannel commerce, and working with FactoryJet."
          lead="If your question is not below, send a short brief and answers usually come back inside 24 hours."
          updated={{ iso: PAGE_MODIFIED, label: '22 October 2026' }}
          topics={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />
      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
