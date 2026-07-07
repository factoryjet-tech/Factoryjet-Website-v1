import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import ComparisonTable from '@/components/v2/ComparisonTable';
import FAQ, { type FAQItem } from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';

const CANONICAL = 'https://factoryjet.com/services/generative-engine-optimization';

const geoAlternates = {
  'en-US': CANONICAL,
  'en-IN': CANONICAL,
  'en-GB': 'https://factoryjet.com/uk',
  'en-AU': 'https://factoryjet.com/au',
  'en-AE': 'https://factoryjet.com/uae',
  'x-default': CANONICAL,
} as const;

export const metadata: Metadata = {
  title: 'Generative Engine Optimization Services | Get Cited by AI',
  description:
    'FactoryJet GEO services get your business cited in ChatGPT, Google AI Overviews, and Perplexity. Built for small teams by an agency that has shipped 500+ sites.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Generative Engine Optimization Services | Get Cited by AI',
    description:
      'Get named by AI when your buyers ask. GEO services that structure content, schema, and off-site mentions so ChatGPT, Perplexity, and Google AI Overviews cite you.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet GEO services' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generative Engine Optimization Services | Get Cited by AI',
    description:
      'GEO services that get your business cited in ChatGPT, Google AI Overviews, and Perplexity. Built for small teams.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: CANONICAL, languages: geoAlternates },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

const JOURNEY: ReadonlyArray<ServiceJourneyStage> = [
  { number: '01', title: 'Audit', description: 'We baseline your citation share across ChatGPT, Perplexity, Gemini, and Google AI Overviews on 30 to 50 buyer questions, so you see exactly where you stand.' },
  { number: '02', title: 'Fix', description: 'Valid JSON-LD, an llms.txt file, server-rendered content, and firewall rules that allow GPTBot, ClaudeBot, PerplexityBot, and Google-Extended.' },
  { number: '03', title: 'Restructure', description: 'We rewrite pillar and cluster pages so the direct answer sits in the first 50 to 60 words of each section, with one original data table and real, cited numbers.' },
  { number: '04', title: 'Build', description: 'Accurate, non-spammy presence on Reddit, YouTube, and Wikipedia, the sources models learn from, plus digital PR for third-party citations.' },
  { number: '05', title: 'Report', description: 'A monthly report shows citation share by platform and which questions now name you. We manage to the number, not to vanity impressions.' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  { question: 'Is GEO different from SEO?', answer: 'Yes, though they share a foundation. SEO earns a ranking on a results page. GEO earns a citation or a named mention inside an AI-generated answer. Good technical SEO helps GEO, but the content structure and off-site work are specific to how models pick sources.' },
  { question: 'How do you know if AI already recommends me?', answer: 'We run 30 to 50 buyer questions through ChatGPT, Perplexity, Gemini, and Google AI Overviews and record where you are named. That baseline is the first deliverable, so you see the starting point before any work begins.' },
  { question: 'How long until I see citations?', answer: 'Technical fixes and answer-first content can show up within a few weeks, since some engines refresh on a 2 to 7 day lag. Off-site mention authority builds over 60 to 90 days. It is steady work, not a switch.' },
  { question: 'Which AI engines do you optimize for?', answer: 'ChatGPT, Google AI Overviews, Perplexity, and Gemini, since those cover the majority of generative search in the US. The fundamentals, structure, schema, and trusted mentions, apply across all of them.' },
  { question: 'Do I need to rebuild my website?', answer: 'Usually no. Most gains come from schema, an llms.txt file, crawler access, and restructuring existing pages to be answer-first. If your site hides primary content behind JavaScript that crawlers cannot read, we fix that specific issue.' },
  { question: 'What does GEO cost?', answer: 'It depends on your site size, how many pages need restructuring, and how much off-site work your category needs. We scope it on a short call and give you a fixed plan. Book a call and we will size it against your goals.' },
  { question: 'Can you prove it worked?', answer: 'The monthly report shows citation share by platform and which questions now name you. Those are the numbers we manage to. If a program is not moving citations, we change the approach rather than keep billing for activity.' },
  { question: 'Why FactoryJet?', answer: 'We have launched 500+ sites for small businesses across the US, UK, Australia, and India, and we run our own site on the same GEO methods. You get an operator who ships, not a deck.' },
];

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Generative Engine Optimization Services',
  url: CANONICAL,
  description: 'GEO services that get your business cited in ChatGPT, Google AI Overviews, Perplexity, and Gemini.',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'FactoryJet', url: 'https://factoryjet.com' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Generative Engine Optimization', item: CANONICAL },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Generative Engine Optimization',
  serviceType: 'Generative Engine Optimization (GEO)',
  provider: { '@type': 'Organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: ['US', 'GB', 'AU', 'IN'],
  description:
    'GEO services that structure content, schema, and off-site mentions so AI answer engines such as ChatGPT, Google AI Overviews, Perplexity, and Gemini cite and recommend your business.',
  audience: { '@type': 'Audience', audienceType: 'Small and medium-sized businesses' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function GenerativeEngineOptimizationPage() {
  return (
    <>
      <Script id="geo-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <Script id="geo-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="geo-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="geo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SiteHeader />

      <Hero
        accent="orange"
        announcementPill={{ text: 'AI search is the new front page' }}
        eyebrow="Generative Engine Optimization · GEO"
        headline={<>Get named by AI when your buyers ask.</>}
        lead="We structure your content, schema, and off-site presence so ChatGPT, Google AI Overviews, Perplexity, and Gemini cite your business. Built for small teams, not enterprises."
        trustItems={['500+ sites shipped', '12+ years expertise', 'Founder-led']}
        formSlot={<HeroInlineForm region="us" source="us_services_generative_engine_optimization_hero" submitLabel="Get my free AI visibility check" />}
      />

      <ServiceExplanation
        eyebrow="The definition"
        headline="What is generative engine optimization?"
        lead="GEO is the practice of structuring your content, technical data, and off-site mentions so AI answer engines cite or recommend your business when a person asks a question. It is the AI-search counterpart to SEO."
        body={
          <>
            <p>Search split into two channels. People still type keywords into Google, and they also ask full questions to an AI assistant and read one synthesized answer. Those answers are built from a handful of sources the model trusts. GEO is the work of becoming one of them.</p>
            <p>It overlaps with SEO but is a different job. SEO earns a ranking position. Answer engine optimization earns the featured answer. GEO earns a citation or a named mention inside a generated response, which is increasingly where a buyer forms a shortlist before they ever click.</p>
            <p>New to the topic? Our <Link href="/blog/generative-engine-optimization-guide" className="text-orange-600 underline">2026 GEO guide</Link> walks through how AI engines choose who to cite, and <Link href="/blog/best-geo-agencies" className="text-orange-600 underline">the best GEO agencies compared</Link> shows how the market is priced.</p>
          </>
        }
      />

      <StrategicDarkSection
        eyebrow="Why it matters in 2026"
        headline="Your buyers ask AI before they search you"
        lead="Roughly one in three US searchers now use generative AI search, per eMarketer. If an assistant does not know you exist, you are invisible at the moment a buyer is comparing options."
        pillars={[
          { title: 'The shortlist forms in the chat', body: 'AI sessions run several minutes on queries that average about 23 words, versus roughly 4 on Google. Buyers describe their whole situation and read one answer, and being named there shapes who they contact.' },
          { title: 'AI traffic already buys', body: 'Shopify reported AI-driven traffic to its stores grew about 8x year over year in Q1 2026, with orders from AI-powered search up nearly 13x. This is a buying channel now, not an experiment.' },
          { title: 'Thin content stopped working', body: "Google's March 2026 core update lifted E-E-A-T signals and cut mass-generated content. Pages that earn citations have real expertise, original data, and clean structure. That is the work we do." },
        ]}
      />

      <ComparisonTable
        eyebrow="SEO vs AEO vs GEO"
        headline="Three jobs, three surfaces"
        lead="These overlap but are not interchangeable. A complete program does all three. Here is how they differ."
        columns={[
          { label: 'Traditional SEO' },
          { label: 'Answer Engine Optimization' },
          { label: 'Generative Engine Optimization', isFactoryJet: true },
        ]}
        rows={[
          { feature: 'Optimizes for', values: ['Ranking position for a keyword', 'Being the single featured answer', 'A citation in a generated answer'] },
          { feature: 'Where it shows up', values: ['The 10 blue links on a results page', 'Featured snippets, People Also Ask, voice', 'ChatGPT, AI Overviews, Perplexity, Gemini'] },
          { feature: 'Best for', values: ['Demand people type as short keywords', 'Direct questions with one clear answer', 'Buyers who describe a problem and want a recommendation'] },
        ]}
      />

      <ServiceJourneyRow
        eyebrow="How the engagement runs"
        headline="From invisible to cited in five steps"
        lead="A baseline, a fixed technical foundation, restructured content, off-site mentions, and monthly citation reporting. You always see where you stand."
        stages={JOURNEY}
      />

      <FAQ
        eyebrow="Questions buyers actually ask"
        headline="GEO, answered plainly"
        items={FAQ_ITEMS}
      />

      <section className="bg-fj-cream">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="font-fj-mono text-xs uppercase tracking-[0.16em] text-orange-600">Keep reading</p>
          <ul className="mt-4 space-y-3 font-fj-body text-lg text-fj-ink">
            <li><Link className="text-orange-600 underline" href="/blog/generative-engine-optimization-guide">The 2026 GEO guide: how AI engines decide who to cite</Link></li>
            <li><Link className="text-orange-600 underline" href="/blog/best-geo-agencies">The best GEO agencies for ecommerce and SMBs, compared</Link></li>
            <li><Link className="text-orange-600 underline" href="/services/ai-seo">Our full AI SEO service</Link></li>
          </ul>
        </div>
      </section>

      <section className="bg-fj-navy text-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
          <p className="font-fj-mono text-xs uppercase tracking-[0.16em]" style={{ color: '#F05A28' }}>Find out where you stand</p>
          <h2 className="mt-4 font-fj-display text-3xl font-extrabold tracking-tight md:text-5xl">
            See how AI answers your buyers today
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-fj-body text-lg text-white/70">
            Book a 30-minute call and we will run a few of your category&apos;s buyer questions through ChatGPT and Perplexity live, then show you what a GEO plan would fix first. The call is free.
          </p>
          <div className="mt-8 flex justify-center">
            <ModalCTAButton label="Book a strategy call" region="us" btnVariant="primary-dark" />
          </div>
          <p className="mt-4 font-fj-mono text-xs text-white/50">No pitch deck. A working session with the founder, Bhavesh Barot.</p>
        </div>
      </section>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
