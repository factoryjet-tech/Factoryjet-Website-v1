import type { Metadata } from 'next';
import { homeAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ExitIntentLeadForm from '@/components/ExitIntentLeadForm';
import RelatedGuides from '@/components/v2/RelatedGuides';
import HeroOmnichannel from '@/components/v2/HeroOmnichannel';
import FAQ from '@/components/v2/FAQ';
import { ProblemSection, SolutionSection, PillarsSection, ComparisonSection, ProofSection } from '@/components/v2/UsHomeSections';
import { AgentConsole, GrowthSurfaces, FinalCtaSection } from '@/components/v2/UsHomeInteractive';
import AiVisibilityCtaBand from '@/components/ai-visibility/AiVisibilityCtaBand';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

/* ─────────────────────────────────────────────────────────────────────────────
   /us homepage, omnichannel / B2B e-commerce repositioning (2026-06-26)

   Entity (title/meta/Service schema): "Ecommerce Development Agency".
   Omnichannel commerce is the wrapper concept/story, not the SEO entity
   (keyword evidence: research/us-keyword-map-2026-06-26.md).

   Section order (ported from research/mockup-us-problem-v1.html):
     1.  SiteHeader (CTA: Talk to the Founder)
     2.  HeroOmnichannel, locked copy + channel->engine constellation
     3.  ProblemSection: the fragmented-commerce tax
     4.  SolutionSection: one catalog / inventory / order engine / AI workforce
     5.  PillarsSection: five ways we build and scale commerce
     6.  AgentConsole, animated live AI agent console (client)
     7.  GrowthSurfaces, get found and chosen
     8.  ComparisonSection: a pile of tools vs a partner
     9.  ProofSection, Bombay Petals (B2B) + Belle Maison (DTC)
     10. FAQ, 20 commerce FAQs (reuses v2 FAQ.tsx + FAQPage schema)
     11. FinalCtaSection, Talk to the Founder + Get a commerce audit
     12. RelatedGuides · ExitIntentLeadForm · SiteFooter
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'E-Commerce Development Agency for DTC & B2B Brands | FactoryJet',
  description:
    'FactoryJet is an e-commerce development agency for DTC and B2B brands. We design, build, and implement omnichannel commerce across your store, marketplaces, and B2B portals on Shopify, Magento, WooCommerce, or Commerceflo. Get a commerce audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'E-Commerce Development Agency for DTC & B2B Brands | FactoryJet',
    description:
      'An e-commerce development agency for DTC and B2B brands. We design, build, and implement omnichannel commerce across your store, marketplaces, and B2B portals on Shopify, Magento, WooCommerce, or Commerceflo. One catalog, one inventory, one order engine.',
    url: 'https://factoryjet.com',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet, e-commerce development agency for DTC and B2B brands' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Development Agency for DTC & B2B Brands | FactoryJet',
    description:
      'An e-commerce development agency for DTC and B2B. We build omnichannel commerce across your store, marketplaces, and B2B on Shopify, Magento, WooCommerce, or Commerceflo.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com',
    languages: homeAlternates,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

const FAQ_CATEGORIES = [
  { key: 'what-we-do', label: 'What we do' },
  { key: 'platforms', label: 'Platforms & build' },
  { key: 'dtc-b2b', label: 'DTC & B2B' },
  { key: 'ai-agents', label: 'AI agents' },
  { key: 'working-together', label: 'Working together' },
];

const FAQ_ITEMS = [
  { category: 'what-we-do', question: 'What does an omnichannel commerce agency actually do?', answer: 'We design, build, and implement the systems that let you sell across your store, marketplaces, and B2B from one catalog, one inventory, and one order engine. In plain terms, we are the team you hire to build unified commerce, not a tool you subscribe to.' },
  { category: 'what-we-do', question: 'What is the difference between omnichannel and unified commerce?', answer: 'Omnichannel is about the customer experience across channels. Unified commerce is the architecture underneath it that keeps products, inventory, orders, and customers in sync in real time. We build that unified layer so your channels stop drifting apart.' },
  { category: 'what-we-do', question: 'Is FactoryJet a software product or an agency?', answer: 'An agency. We are a services partner that consults, designs, develops, and implements commerce for you. You own and operate what we build, and there is no FactoryJet subscription.' },
  { category: 'what-we-do', question: 'Can you fix our existing store, or only build from scratch?', answer: 'Both. Most of our work is improving or replatforming what you already run, then adding the unified layer. We audit what you have, fix what is broken, and build what is missing.' },
  { category: 'platforms', question: 'Which ecommerce platform is best for B2B and DTC?', answer: 'There is no single best one; it depends on your catalog size, B2B rules, and budget. We build on Shopify and Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, headless, and Commerceflo, and recommend the fit rather than pushing one platform.' },
  { category: 'platforms', question: 'Shopify Plus vs Adobe Commerce vs BigCommerce, which should we choose?', answer: 'Shopify Plus for speed and a clean DTC-plus-B2B model on one store, Adobe Commerce for deep native B2B and very large catalogs, BigCommerce for strong mid-market B2B value. We match it to your SKUs, pricing rules, and integrations on a scoping call.' },
  { category: 'platforms', question: 'Can you migrate us off Magento (or another platform) without losing SEO?', answer: 'Yes. We handle replatforming and data migration, products, customers, orders, and B2B pricing, with 301 redirects and a cutover plan that protects your rankings and uptime.' },
  { category: 'platforms', question: 'Do you connect our store to our ERP, POS, and marketplaces?', answer: 'Yes. We integrate ERPs, POS, 3PLs, and marketplaces into one order and inventory layer so every system reads the same live data instead of its own copy.' },
  { category: 'dtc-b2b', question: 'How do we sell on Amazon, Walmart, and our own store at the same time?', answer: 'You put every channel on one catalog and one live inventory, so a sale anywhere updates everywhere. We build that connection plus the listing, pricing, and order flows each marketplace expects.' },
  { category: 'dtc-b2b', question: 'How do we stop overselling across channels?', answer: 'Overselling happens when each tool keeps its own stock count. We build a single live inventory that every channel reads from, so when the last unit sells on one channel it goes unavailable on the rest within moments.' },
  { category: 'dtc-b2b', question: 'Can DTC and B2B run on one site with different pricing?', answer: 'Yes. We build one storefront that serves retail shoppers and gives trade buyers their own login with tiered or contract pricing, net terms, and fast reordering, on one catalog and inventory.' },
  { category: 'dtc-b2b', question: 'What B2B ecommerce features can you build?', answer: 'Tiered and contract pricing, quote and approval workflows, account hierarchies, net terms, gated catalogs, and reordering, all integrated with your ERP.' },
  { category: 'ai-agents', question: 'Can AI manage my inventory and pricing across channels?', answer: 'Yes, and the technology is mature now. We build and implement agents that sync inventory, reprice to hold the Buy Box, and keep listings consistent across channels, all acting on your live data.' },
  { category: 'ai-agents', question: 'What can AI agents actually do for an ecommerce business?', answer: 'The repetitive channel work: listing new products in each marketplace\'s format, fixing suppressed listings, repricing, reconciling feeds, and answering order questions. They take the busywork off your team, not the strategy.' },
  { category: 'ai-agents', question: 'Is this just an AI chatbot?', answer: 'No. These are task agents that take action across your channels, listing, pricing, and inventory, not a question-and-answer widget on your site.' },
  { category: 'ai-agents', question: 'Do you run the AI agents, or do we?', answer: 'We build and implement them into your stack; they run inside your system and hand the exceptions to your team. You stay in control of the business.' },
  { category: 'working-together', question: 'What should we ask before hiring an ecommerce development agency?', answer: 'Ask about their B2B experience specifically, their discovery and scoping process, how they handle integrations, who owns the relationship after launch, and to see comparable builds. We are happy to answer all of those on a call.' },
  { category: 'working-together', question: 'How much does it cost to build an ecommerce site?', answer: 'It depends on scope, platform, catalog size, and integrations, so we scope it on a short call and send a fixed proposal before any work starts, rather than putting a number on a page.' },
  { category: 'working-together', question: 'How long does an ecommerce build or migration take?', answer: 'Most mid-market builds and migrations run from a few weeks to a few months, depending on custom integrations and catalog complexity. You get a phased timeline with milestones after scoping.' },
  { category: 'working-together', question: 'Do you work with US brands?', answer: 'Yes, most of the brands we work with are US-based, across DTC and B2B, and we bring a decade-plus of commerce builds to every engagement.' },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  description:
    'FactoryJet is an e-commerce development agency that consults, designs, develops, and implements omnichannel commerce for DTC and B2B brands across Shopify, Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, headless, and Commerceflo.',
  
  sameAs: [
    'https://www.linkedin.com/company/factoryjet',
    'https://www.crunchbase.com/organization/factoryjet',
  ],
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'E-commerce development',
  name: 'E-commerce development and omnichannel commerce implementation',
  description:
    'E-commerce development agency for DTC and B2B brands. We design, build, and implement omnichannel commerce across your own store, marketplaces, and B2B portals on Shopify, Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, headless, and Commerceflo, with one catalog, one inventory, and one order engine.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'DTC and B2B brands' },
};

export default function USHomePage() {
  return (
    <>
      <script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="speakable-schema-us-hub" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'E-Commerce Development Agency for DTC & B2B Brands | FactoryJet',
        'url': 'https://factoryjet.com/',
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['h1', '.faq-answer', '[data-speakable]'] },
      }) }} />
      <BreadcrumbSchema items={[{ name: 'Home', url: 'https://factoryjet.com' }]} />

      <SiteHeader
        navLinks={[
          { label: 'E-Commerce',  href: '/services/ecommerce-development' },
          { label: 'Shopify',     href: '/services/shopify-development' },
          { label: 'Magento',     href: '/services/magento-development' },
          { label: 'Services',    href: '/services' },
          { label: 'Work',        href: '/case-studies' },
          { label: 'FAQ',         href: '/faq' },
        ]}
        cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
      />

      <main className="bg-fj-cream">
        {/* 2. Hero */}
        <HeroOmnichannel />
        {/* 2b. Answer-first definitional block + cited stats (GEO / AI-citation) */}
        <section
          aria-labelledby="answer-first-h"
          className="py-14 md:py-20"
          style={{ backgroundColor: '#FAFAF7', borderBottom: '1.5px solid rgba(240,90,40,0.18)' }}
        >
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="max-w-3xl">
              <p
                className="font-fj-mono font-semibold uppercase"
                style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#B23E13' }}
              >
                In plain terms
              </p>
              <h2
                id="answer-first-h"
                className="mt-4 font-fj-display font-bold text-fj-ink"
                style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}
              >
                What FactoryJet is, in one paragraph.
              </h2>
              <p
                data-speakable="true"
                className="mt-5 font-fj-body text-fj-neutral-600"
                style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}
              >
                FactoryJet is an e-commerce development agency that builds omnichannel commerce for
                DTC and B2B brands in the United States. We design, build, and run one system that
                ties your online store, marketplaces like Amazon, Walmart, and TikTok Shop, and your
                B2B portals together, so every channel works from one catalog, one live inventory,
                and one order queue. The payoff is simple: you stop overselling, you stop typing the
                same product into every channel by hand, and your team gets back the hours it used to
                spend reconciling numbers. We build on Shopify, Shopify Plus, Adobe Commerce
                (Magento), BigCommerce, WooCommerce, headless, or Commerceflo, and hand you a system
                your own team owns and runs.
              </p>
            </div>

            {/* Cited stats, each carrying a real, resolving outbound source */}
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {[
                {
                  value: '70%',
                  label:
                    'of online shopping carts are abandoned before checkout, so the store you sell from has to load fast and be easy to buy from.',
                  href: 'https://baymard.com/lists/cart-abandonment-rate',
                  source: 'Baymard Institute, average of 50 studies',
                },
                {
                  value: '16.9%',
                  label:
                    'of all US retail sales now happen online, and that share climbs almost every quarter.',
                  href: 'https://www.census.gov/retail/ecommerce.html',
                  source: 'US Census Bureau, Q1 2026',
                },
                {
                  value: '1,200%',
                  label:
                    'rise in visits to US retail sites from AI tools like ChatGPT, between July 2024 and February 2025.',
                  href: 'https://blog.adobe.com/en/publish/2025/03/17/adobe-analytics-traffic-to-us-retail-websites-from-generative-ai-sources-jumps-1200-percent',
                  source: 'Adobe Analytics',
                },
              ].map((stat) => (
                <div key={stat.value}>
                  <p
                    className="font-fj-display font-bold"
                    style={{ fontSize: 'clamp(2.25rem, 4vw, 3rem)', lineHeight: 1, letterSpacing: '-0.04em', color: '#F05A28' }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-3 font-fj-body text-[0.9375rem] leading-[1.5] text-fj-neutral-600">
                    {stat.label}
                  </p>
                  <a
                    href={stat.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="mt-3 inline-block font-fj-mono underline underline-offset-2 hover:no-underline"
                    style={{ fontSize: '0.75rem', letterSpacing: '0.02em', color: '#B23E13' }}
                  >
                    Source: {stat.source} ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* 3. The fragmented-commerce tax */}
        <ProblemSection />
        {/* 4. The unified shape */}
        <SolutionSection />
        {/* 5. Five ways we build and scale commerce */}
        <PillarsSection />
        {/* 6. AI agent workforce, live console */}
        <AgentConsole />
        {/* 7. Commerce growth / visibility surfaces */}
        <GrowthSurfaces />
        {/* 7b. Free AI Visibility Checker, lead magnet funnel */}
        <AiVisibilityCtaBand />
        {/* 8. A pile of tools vs a partner */}
        <ComparisonSection />
        {/* 9. Proof, select client work */}
        <ProofSection />
        {/* 10. FAQ */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Questions buyers ask before hiring an ecommerce development agency."
          lead="If your question is not below, send a short brief and answers usually come back inside 24 hours."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />
        {/* 11. Final CTA */}
        <FinalCtaSection />
      </main>

      <RelatedGuides
        links={[
          { href: '/services/ecommerce-development', label: 'E-commerce development services' },
          { href: '/services/shopify-development', label: 'Shopify development' },
          { href: '/services/ecommerce-seo', label: 'E-commerce SEO' },
        ]}
      />
      <ExitIntentLeadForm
        region="us"
        source="exit_intent_us_home"
        heading="Get a free commerce audit"
        subheading="We will map your channels, catalog, and B2B into one system. Just your name and email."
        promo="Free commerce audit, no cost, no obligation"
      />
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
