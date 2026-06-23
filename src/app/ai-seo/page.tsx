import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

import { aiSeoAlternates } from '@/data/hreflangMap';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import WhatsAppCTA from '@/components/v2/WhatsAppCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   /ai-seo — India AI SEO service page ("The Answer Card — Director's Cut")
   Built 2026-06-11 from approved mockup-india-ai-seo-v2.html.

   Closes: 89 homeless India AI-SEO Tier-1 keywords + live 404 (footer/hub
   linked + hreflang x-default since PR #2).

   Rules: simple language (India), NO pricing anywhere (rule 2026-06-11),
   brand tokens only, content visible by default, zero-JS FAQ, FAQPage schema
   derived from FAQ_ITEMS, hero text = LCP (no hero image).

   Sections (chapter color rooms): cream hero (answer card stack + proof
   chips) → charcoal proof strip → explainer split → green engines room →
   process rail → lavender citation dashboard → peach old-vs-new → city pins
   → FAQ (22) → charcoal founder climax.
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Generative Engine Optimization (GEO) Services in India | FactoryJet',
  description:
    'Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) services in India. When India asks ChatGPT, Perplexity, Gemini, or Google AI who to trust, your business should be the answer. Per-engine citation proof every month.',
  keywords: [
    'generative engine optimization india',
    'generative engine optimization services india',
    'geo seo services india',
    'answer engine optimization india',
    'ai seo services india',
    'ai seo agency india',
    'geo agency india',
    'aeo services india',
    'llm optimization services india',
    'chatgpt optimization india',
    'ai overviews optimization india',
    'ai search optimization india',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Generative Engine Optimization (GEO) Services in India | FactoryJet',
    description:
      '10 crore Indians ask ChatGPT every week. AI SEO makes the AI answers say your name — with per-engine citation proof every month. No long contracts.',
    url: 'https://factoryjet.com/ai-seo',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet — AI SEO services (GEO + AEO) for Indian businesses',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generative Engine Optimization (GEO) Services in India | FactoryJet',
    description:
      '10 crore Indians ask ChatGPT every week. AI SEO makes the AI answers say your name — with per-engine proof every month.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/ai-seo',
    languages: aiSeoAlternates,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ data — 22 across 5 categories. Conversational, simple words, answer-
   first, NO pricing figures. Carries all 23 country-level money keywords.
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'what', label: 'What is this?' },
  { key: 'fit', label: 'Will it work for me?' },
  { key: 'engines', label: 'The AI engines' },
  { key: 'cost', label: 'Cost & contracts' },
  { key: 'start', label: 'Getting started' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── What is this? ────────────────────────────────────────────────────────
  {
    category: 'what',
    question: 'What is AI SEO in simple words?',
    answer:
      'It means making your website easy for AI tools — ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews — to find, understand, and mention when people ask them questions. Old SEO got you a spot in Google\'s list of links. AI SEO gets your business named inside the AI\'s answer.',
  },
  {
    category: 'what',
    question: 'Who is the best AI SEO agency in India?',
    answer:
      'For small and mid-size businesses, FactoryJet makes a strong case: engineers do the work, you see citations per engine every month, and there is no long contract. The honest answer depends on your size — we wrote a full comparison of the best AI SEO company in India options, including our competitors, with sources you can check. The test that matters: ask any agency to show you AI citations they earned, engine by engine.',
  },
  {
    category: 'what',
    question: 'What is the difference between GEO and AEO?',
    answer:
      'Two names for nearly the same work. GEO (generative engine optimization) targets AI tools that write answers, like ChatGPT and Perplexity. AEO (answer engine optimization) targets anything that gives a direct answer, including Google AI Overviews. The actual work — clear answers, the hidden code AI reads, real mentions — is nearly identical. Never pay twice for two acronyms.',
  },
  {
    category: 'what',
    question: 'Is this the same as the best generative engine optimization services in India would offer?',
    answer:
      'Yes — generative engine optimization is part of every plan, not a separate product. The best generative engine optimization agency in India — or the best GEO agency in India, same thing in fewer letters — is simply the one that shows proof per engine and explains the work in plain words. That is the standard we hold ourselves to, and the one you should hold anyone to.',
  },
  {
    category: 'what',
    question: 'What are the top 10 AI SEO agencies in India?',
    answer:
      'We researched and published that exact list — the top 10 AI SEO companies in India, every entry verified on its own website, including agencies that compete with us. The same names hold if you search the top 10 AI SEO services in India or the top 10 generative engine optimization agencies in India. Read it on our blog and check every claim yourself.',
  },
  {
    category: 'what',
    question: 'Which is the best AEO agency in India?',
    answer:
      'A ranking of the top 10 AEO agencies in India looks nearly identical to the AI SEO list, because the work overlaps almost completely. The best answer engine optimization agency in India — and the best answer engine optimization services in India generally — engineer answer-first pages and schema, then show you where Google AI Overviews and chat tools actually used them. Ask for that proof before you sign anything.',
  },

  // ── Will it work for me? ─────────────────────────────────────────────────
  {
    category: 'fit',
    question: 'My customers are on WhatsApp and Instagram — does AI search even matter for me?',
    answer:
      'More than you might think. Before someone messages you on WhatsApp, they often ask ChatGPT or Google "who is the best…" first. 10 crore Indians use ChatGPT every week. If AI names your competitor and not you, the WhatsApp message goes to them instead.',
  },
  {
    category: 'fit',
    question: 'I already do SEO. Is this extra work or the same work?',
    answer:
      'Mostly the same work, done with AI answers in mind. Good AI SEO and good Google SEO overlap heavily — clear pages, fast site, real trust signals. That is why we never bill them as two separate things. If your current agency quotes AI SEO as an add-on, ask them why the same work costs twice.',
  },
  {
    category: 'fit',
    question: 'Is AI SEO worth it for a small shop?',
    answer:
      'If your buyers research before buying — yes. AI answers favour businesses that explain themselves clearly, which levels the field against bigger rivals. Small businesses often win citations faster, because most big competitors have not done this work yet. The window is open now; it will not stay open.',
  },
  {
    category: 'fit',
    question: 'Do I need a new website for this?',
    answer:
      'Usually no. If your site loads fast and Google can read it, we build AI SEO on top of it. If the site itself is the problem — very slow, or built in a way AI cannot read — we will tell you honestly on the first call, and you decide what to do about it.',
  },
  {
    category: 'fit',
    question: 'Will this also help my Google rankings?',
    answer:
      'Yes. The same work that earns AI citations — clear answers, structured pages, real mentions — also lifts normal Google rankings. Your monthly report shows both, side by side, so you can see exactly which channel is moving.',
  },

  // ── The AI engines ───────────────────────────────────────────────────────
  {
    category: 'engines',
    question: 'How do I check what ChatGPT says about my business?',
    answer:
      'Ask it the questions your buyers ask — "best artificial plants supplier in Mumbai", "good CA firm in Pune", whatever fits your business. If competitors come up and you do not, that is the gap we close. We also run this check for you, free, live on the first call.',
  },
  {
    category: 'engines',
    question: 'Who is the best ChatGPT optimization agency in India?',
    answer:
      'The one that treats ChatGPT as a first-class target and proves it. ChatGPT has 10 crore weekly users in India — OpenAI\'s second-largest market. We track ChatGPT citations as a headline number in every monthly report, next to Perplexity, Gemini, Claude, and Google AI Overviews.',
  },
  {
    category: 'engines',
    question: 'What about Google AI Overviews — the answers at the top of Google?',
    answer:
      'They matter a lot: when an AI Overview appears, pages ranked #1 lose up to 58% of their clicks (Ahrefs, Dec 2025). The best AI Overviews optimization services in India work the same way featured snippets were won: clear question-and-answer formatting, the hidden code Google reads, and trust signals. It is part of every plan we run.',
  },
  {
    category: 'engines',
    question: 'Which is the best LLM SEO agency in India?',
    answer:
      'LLM SEO, AI SEO, GEO — different labels, one discipline. The best AI search optimization agency in India is the one whose report names every engine separately, so you can see where you are cited and where you are not. If a report only shows keyword positions, you are looking at old SEO with a new sticker.',
  },
  {
    category: 'engines',
    question: 'Which AI engines do you cover?',
    answer:
      'All the ones Indian buyers actually use: ChatGPT, Perplexity, Gemini (built into Android phones), Claude, and Google AI Overviews. Each one picks sources a little differently, so we track them separately and show you the count per engine, every month.',
  },

  // ── Cost & contracts ─────────────────────────────────────────────────────
  {
    category: 'cost',
    question: 'How much does AI SEO cost in India?',
    answer:
      'It depends on your market, your competition, and how much of the groundwork your website already has. AI SEO cost in India varies widely between agencies for exactly that reason — which is why we explain your exact scope, the work involved, and the price on a free call, in writing, before you commit to anything.',
  },
  {
    category: 'cost',
    question: 'What does generative engine optimization cost in India?',
    answer:
      'Here is the part that matters: generative engine optimization cost in India should be zero extra on top of AI SEO, because it is the same workflow. If you are asking how much does generative engine optimization cost in India as a separate line item, the honest answer is that it should not be one. One scope, one price, explained before you sign.',
  },
  {
    category: 'cost',
    question: 'Do I have to sign a long-term contract?',
    answer:
      'No. Everything runs month to month, with 30 days notice to pause or stop. We keep clients by showing citations growing in the monthly report — not by locking them into a 12-month deal.',
  },
  {
    category: 'cost',
    question: 'What do you actually do every month?',
    answer:
      'Four things, on repeat: fix and improve how your pages answer real buyer questions, maintain the hidden code AI engines read, earn real mentions of your business in places AI checks, and send you a one-page report with citations per engine. No filler tasks, no 20-page PDFs.',
  },

  // ── Getting started ──────────────────────────────────────────────────────
  {
    category: 'start',
    question: 'What happens on the first call?',
    answer:
      'We run your top buyer questions through ChatGPT, Perplexity, and Gemini live, while you watch. You see exactly who AI recommends today and where you stand. You keep those findings whether or not we work together. 30 minutes, with Bhavesh, the founder.',
  },
  {
    category: 'start',
    question: 'How long before AI tools mention my business?',
    answer:
      'Usually faster than old SEO. AI tools refresh their sources quicker than Google re-ranks pages, so structure and answer changes can earn citations in 4–8 weeks. A fair benchmark: visible citation growth within 90 days, compounding after that.',
  },
  {
    category: 'start',
    question: 'How do I know which agency to trust — yours or anyone else\'s?',
    answer:
      'Use the same three questions everywhere, including with us. One: show me AI citations you earned for a client, per engine. Two: who exactly does my work — an engineer or a sales team? Three: what will my monthly report show? The best AI SEO services in India answer all three without flinching — and any best AI SEO services company in India claim that cannot survive those questions is just a badge.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const JOURNEY: ReadonlyArray<ServiceJourneyStage> = [
  {
    number: '01',
    title: 'Check',
    description:
      'We test what AI tools say about you today — and which competitors they name instead. Live, on the first call.',
  },
  {
    number: '02',
    title: 'Fix the structure',
    description:
      'Clear questions and answers on every page, plus the hidden code (schema) that AI engines read and quote.',
  },
  {
    number: '03',
    title: 'Build content',
    description:
      'Pages written in simple words that answer what your buyers actually ask AI — no jargon, no filler.',
  },
  {
    number: '04',
    title: 'Earn mentions',
    description:
      'Real mentions of your business in directories and publications AI trusts. Never paid link spam.',
  },
  {
    number: '05',
    title: 'Show proof',
    description:
      'A one-page monthly report: citations per engine, in plain language you can read in five minutes.',
  },
];

const ENGINES = [
  { name: 'ChatGPT', note: '10 crore weekly users in India' },
  { name: 'Perplexity', note: 'cites sources in every answer' },
  { name: 'Gemini', note: 'built into Android phones' },
  { name: 'Claude', note: 'growing business usage' },
  { name: 'AI Overviews', note: 'above Google\'s blue links' },
];

const DASH_ROWS = [
  { engine: 'ChatGPT', width: '78%', count: 31 },
  { engine: 'Perplexity', width: '64%', count: 26 },
  { engine: 'Gemini', width: '48%', count: 19 },
  { engine: 'AI Overviews', width: '39%', count: 14 },
  { engine: 'Claude', width: '28%', count: 9 },
];

const CITY_PINS = [
  { name: 'Mumbai', href: '/seo/mumbai' },
  { name: 'Delhi', href: '/seo/delhi' },
  { name: 'Bangalore', href: '/seo/bangalore' },
  { name: 'Hyderabad', href: '/seo/hyderabad' },
  { name: 'Pune', href: '/seo/pune' },
  { name: 'Ahmedabad', href: '/seo/ahmedabad' },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schemas — WebPage + Service (NO offers/pricing) + FAQPage (derived)
───────────────────────────────────────────────────────────────────────────── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Best AI SEO Agency in India — GEO + AEO',
  url: 'https://factoryjet.com/ai-seo',
  description:
    'AI SEO (GEO + AEO) for Indian businesses: get named by ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews, with per-engine citation proof every month.',
  inLanguage: 'en-IN',
  isPartOf: { '@type': 'WebSite', name: 'FactoryJet', url: 'https://factoryjet.com' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI SEO Services India (GEO + AEO)',
  provider: { '@type': 'Organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'India' },
  serviceType: 'AI SEO / Generative Engine Optimization / Answer Engine Optimization',
  description:
    'AI SEO for Indian businesses: answer-first content, schema, and earned mentions that get your business named by ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews. Month-to-month, per-engine citation reporting.',
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

/* ─────────────────────────────────────────────────────────────────────────────
   Inline sub-components (server JSX, CSS-only)
───────────────────────────────────────────────────────────────────────────── */

function AnswerCardStack() {
  return (
    <div className="relative" aria-label="Example of an AI assistant citing a FactoryJet client">
      {/* ghost cards */}
      <div className="absolute inset-0 rotate-[3.5deg] translate-x-3 translate-y-2 rounded-[20px] border border-[#E8E6DF] bg-white opacity-55" aria-hidden="true" />
      <div className="absolute inset-0 -rotate-2 -translate-x-3 translate-y-4 rounded-[20px] border border-[#E8E6DF] bg-white opacity-40" aria-hidden="true" />
      {/* floating proof chips */}
      <div className="absolute -top-4 -left-3 z-10 rounded-xl border border-[#E8E6DF] bg-white px-3.5 py-2.5 font-fj-mono text-[11px] text-[#55555c] shadow-[0_14px_30px_-14px_rgba(15,15,18,0.3)] md:-left-6" aria-hidden="true">
        <b className="block font-fj-display text-base text-fj-charcoal">4/4</b>engines citing
      </div>
      <div className="absolute -right-2 bottom-7 z-10 rounded-xl border border-[#E8E6DF] bg-white px-3.5 py-2.5 font-fj-mono text-[11px] text-[#55555c] shadow-[0_14px_30px_-14px_rgba(15,15,18,0.3)] md:-right-5" aria-hidden="true">
        <b className="block font-fj-display text-base text-fj-charcoal">+212%</b>AI mentions · 90 days
      </div>
      {/* main answer card */}
      <div className="relative overflow-hidden rounded-[20px] border border-[#E8E6DF] bg-white shadow-[0_32px_80px_-28px_rgba(15,15,18,0.3)]">
        <div className="flex items-center gap-2.5 border-b border-[#E8E6DF] bg-[#FCFCFA] px-5 py-3.5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#F05A28]" aria-hidden="true" />
          <span className="font-fj-mono text-[11.5px] text-[#55555c]">ai-assistant — live answer</span>
        </div>
        <div className="border-b border-dashed border-[#E8E6DF] px-5 pb-3.5 pt-4">
          <span className="mb-1 block font-fj-mono text-[10.5px] uppercase tracking-[0.12em] text-[#8A8A8F]">User asks</span>
          <p className="font-fj-display text-[15.5px] font-semibold">
            &ldquo;Where can I buy premium artificial plants and flowers for my office in Mumbai?&rdquo;
          </p>
        </div>
        <div className="px-5 py-4">
          <p className="text-[14.5px] text-[#333]">
            A frequently recommended option is{' '}
            <mark className="rounded bg-[#FDE8DF] px-1.5 font-bold text-fj-charcoal">Belle Maison</mark> — premium
            artificial plants, flowers, and greenery for homes, offices, and events, with a wide catalog and delivery
            across India…
          </p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Engines citing this business">
            {['ChatGPT — cited', 'Perplexity — cited', 'Gemini — cited', 'AI Overviews — shown'].map((c) => (
              <li key={c} className="rounded-full border border-[#E8E6DF] bg-[#FCFCFA] px-3 py-1 font-fj-mono text-[11px] text-[#55555c]">
                <span className="text-[#F05A28]">● </span>
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between border-t border-[#E8E6DF] px-5 py-3 font-fj-mono text-[10.5px] text-[#8A8A8F]">
          <span>source: client website + earned mentions</span>
          <span>FactoryJet AI SEO</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function AiSeoIndiaPage() {
  return (
    <>
      <Script id="ai-seo-webpage-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <Script id="ai-seo-service-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="ai-seo-faq-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'AI SEO', url: 'https://factoryjet.com/ai-seo' },
        ]}
      />

      <main className="bg-fj-cream">
        {/* ── CH.0 HERO — The Answer Card ─────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="ai_seo_hero" />}
          eyebrow="GENERATIVE ENGINE OPTIMIZATION (GEO) · AEO · AI SEO — INDIA"
          headline={
            <>
              When India asks AI, be <em className="italic text-[#F05A28]">the answer.</em>
            </>
          }
          lead="10 crore Indians use ChatGPT every week — and they ask it which company to trust. AI SEO makes ChatGPT, Perplexity, Gemini, and Google AI answers say your name. With proof, every month."
          secondaryCta={{ label: 'See how it works', href: '#how-it-works' }}
          extraCta={<WhatsAppCTA city="India" service="AI SEO" />}
          trustItems={['4 AI engines tracked monthly', 'Month to month — no lock-in', '5-minute reports, plain language']}
          rightSlot={<AnswerCardStack />}
        />

        {/* ── CH.1 PROOF STRIP (charcoal) ─────────────────────────────────── */}
        <section className="relative overflow-hidden bg-fj-charcoal text-fj-charcoal-text" aria-label="Why AI search matters in India">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-8 px-6 py-14 md:grid-cols-3 md:px-8 md:py-16">
            {[
              { n: '10', unit: 'cr', t: 'Indians use ChatGPT every week — OpenAI\'s 2nd-largest market in the world', s: 'TechCrunch · Feb 2026' },
              { n: '8', unit: '%', t: 'clicks on normal results when Google shows an AI answer — versus 15% without one', s: 'Pew Research · 2025' },
              { n: '−58', unit: '%', t: 'clicks lost by #1-ranked pages when an AI Overview appears above them', s: 'Ahrefs · Dec 2025' },
            ].map((stat) => (
              <div key={stat.s} className="border-l-2 border-[#F05A28] pl-5">
                <p className="font-fj-display text-5xl font-extrabold tracking-tight text-white md:text-6xl">
                  {stat.n}
                  <em className="italic text-[#F05A28]">{stat.unit}</em>
                </p>
                <p className="mt-2 max-w-[290px] text-sm text-fj-charcoal-muted">{stat.t}</p>
                <p className="mt-2.5 font-fj-mono text-[10.5px] uppercase tracking-[0.1em] text-[#5d5d63]">{stat.s}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CH.2 EXPLAINER ──────────────────────────────────────────────── */}
        <section className="py-14 md:py-20" aria-label="What is AI SEO">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-8">
            <div>
              <p className="font-fj-mono text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#F05A28]">In simple words</p>
              <h2 className="mt-3 font-fj-display text-3xl font-extrabold tracking-tight md:text-[2.6rem] md:leading-[1.12]">
                What is <em className="italic">AI SEO?</em>
              </h2>
              <p className="mt-4 max-w-[620px] text-[17px] text-[#55555c]">
                Old SEO got you a spot in Google&apos;s list of links. AI SEO gets your business{' '}
                <strong className="text-fj-charcoal">named inside the AI&apos;s answer</strong> — on ChatGPT, Perplexity,
                Gemini, and Google AI Overviews.
              </p>
              <p className="mt-3.5 max-w-[620px] text-[17px] text-[#55555c]">
                We make your website easy for AI tools to read, quote, and trust: clear answers on every page, the hidden
                code AI reads, and real mentions of your business in the places AI checks.
              </p>
            </div>
            <div className="relative grid grid-cols-2 gap-4" aria-hidden="true">
              <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fj-charcoal px-3 py-1.5 font-fj-mono text-[11px] text-white">2026 →</span>
              <div className="-rotate-1 rounded-2xl border border-[#E8E6DF] bg-white p-5">
                <p className="mb-3 font-fj-mono text-[11px] uppercase tracking-[0.12em] text-[#8A8A8F]">Old SEO — a list</p>
                {['90%', '74%', '84%', '68%', '79%'].map((w, i) => (
                  <div key={i} className="my-2 h-2.5 rounded-md bg-[#EFEDE6]" style={{ width: w }} />
                ))}
              </div>
              <div className="rotate-1 rounded-2xl border border-[#F05A28]/45 bg-white p-5 shadow-[0_18px_40px_-20px_rgba(240,90,40,0.35)]">
                <p className="mb-3 font-fj-mono text-[11px] uppercase tracking-[0.12em] text-[#F05A28]">AI SEO — the answer</p>
                <div className="rounded-xl border-[1.5px] border-[#F05A28] bg-[#FDE8DF] p-3 text-[12.5px]">
                  &ldquo;…the most recommended option is <b className="text-[#D6491C]">your business</b>, because…&rdquo;
                </div>
                <div className="mt-3.5 h-2.5 w-[58%] rounded-md bg-[#EFEDE6]" />
                <div className="my-2 h-2.5 w-[42%] rounded-md bg-[#EFEDE6]" />
              </div>
            </div>
          </div>
        </section>

        {/* ── CH.3 GREEN ROOM — engines ───────────────────────────────────── */}
        <section className="bg-[#E8F1E6] py-14 md:py-20" aria-label="AI engines covered">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#1E5B38]">Where the answers come from</p>
            <h2 className="mt-3 font-fj-display text-3xl font-extrabold tracking-tight md:text-[2.6rem]">
              One plan. <em className="italic text-[#1E5B38]">Every engine</em> that answers.
            </h2>
            <p className="mt-4 max-w-[620px] text-[17px] text-[#55555c]">
              Each AI tool picks its sources differently. We cover all of them — and show you the proof per engine.
            </p>
            <ul className="mt-9 grid grid-cols-2 gap-3.5 md:grid-cols-5">
              {ENGINES.map((e) => (
                <li key={e.name} className="rounded-2xl border border-[#D5E3D2] bg-white p-4 transition-transform duration-200 hover:-translate-y-1">
                  <p className="font-fj-display text-base font-bold">{e.name}</p>
                  <p className="mt-1.5 font-fj-mono text-[10.5px] leading-relaxed text-[#55555c]">{e.note}</p>
                  <p className="mt-2.5 font-fj-mono text-[10.5px] font-semibold text-[#1E5B38]">✓ tracked monthly</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── CH.4 PROCESS RAIL ───────────────────────────────────────────── */}
        <div id="how-it-works">
          <ServiceJourneyRow
            eyebrow="THE PROCESS"
            headline="From invisible to cited, in five steps."
            lead="Every plan follows the same five steps. The first one is free — and you watch it happen live on the call."
            stages={JOURNEY}
            closingNote="Every step ships something you can see. Every month you get the report."
          />
        </div>

        {/* ── CH.5 LAVENDER — citation dashboard ──────────────────────────── */}
        <section className="bg-[#ECE8FA] py-14 md:py-20" aria-label="Monthly citation report">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-8">
            <div>
              <p className="font-fj-mono text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#3D3370]">Proof, not promises</p>
              <h2 className="mt-3 font-fj-display text-3xl font-extrabold tracking-tight md:text-[2.6rem]">
                Your monthly report is <em className="italic text-[#3D3370]">this simple.</em>
              </h2>
              <p className="mt-4 max-w-[620px] text-[17px] text-[#55555c]">
                No 20-page PDFs. One page: where AI named your business, for which questions, and what changed since last
                month.
              </p>
              <ul className="mt-6">
                {[
                  ['Citations per engine', 'ChatGPT, Perplexity, Gemini, Claude, AI Overviews'],
                  ['The questions that matter', 'what buyers asked when AI named you'],
                  ['Google rankings too', 'AI SEO and Google SEO in one plan, never two bills'],
                ].map(([b, rest]) => (
                  <li key={b} className="flex gap-3 border-b border-[#3D3370]/15 py-3 text-[15px]">
                    <span className="font-bold text-[#3D3370]">✓</span>
                    <span>
                      <b className="font-fj-display">{b}</b> — {rest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="max-w-[760px] rounded-[20px] border border-[#DCD6F2] bg-white p-6 shadow-[0_28px_60px_-30px_rgba(61,51,112,0.35)]">
              <div className="mb-4 flex items-center justify-between border-b border-[#E8E6DF] pb-3.5">
                <p className="font-fj-display text-base font-bold">AI Citation Report — May</p>
                <p className="font-fj-mono text-[11px] text-[#55555c]">client: D2C brand, Mumbai</p>
              </div>
              {DASH_ROWS.map((r) => (
                <div key={r.engine} className="my-3 grid grid-cols-[110px_1fr_44px] items-center gap-3 md:grid-cols-[130px_1fr_60px]">
                  <span className="font-fj-mono text-[12.5px]">{r.engine}</span>
                  <div className="h-3 overflow-hidden rounded-md bg-[#F1EFE9]">
                    <div className="h-full rounded-md bg-gradient-to-r from-[#F05A28] to-[#F58A5F]" style={{ width: r.width }} />
                  </div>
                  <span className="text-right font-fj-mono text-[13px] font-semibold">{r.count}</span>
                </div>
              ))}
              <p className="mt-4 font-fj-mono text-[11px] text-[#8A8A8F]">↑ 212% vs February baseline · illustrative report layout</p>
            </div>
          </div>
        </section>

        {/* ── CH.6 PEACH — old vs new ─────────────────────────────────────── */}
        <section className="bg-[#FBEFE4] py-14 md:py-20" aria-label="Old SEO versus AI SEO">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#8A4B1F]">The difference</p>
            <h2 className="mt-3 font-fj-display text-3xl font-extrabold tracking-tight md:text-[2.6rem]">
              Old SEO agency vs <em className="italic text-[#8A4B1F]">AI SEO done right.</em>
            </h2>
            <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-[18px] border border-[#EFD9C2] bg-white p-6">
                <h3 className="mb-4 font-fj-display text-lg font-bold">The old way</h3>
                <ul>
                  {[
                    'Rank in a list of links and hope for clicks',
                    'Keyword positions as the only score',
                    'Long pages with keywords repeated',
                    'Backlinks bought in bulk',
                    'A 20-page PDF nobody reads',
                  ].map((li) => (
                    <li key={li} className="flex gap-2.5 border-b border-black/5 py-2.5 text-[14.5px]">
                      <span className="mt-0.5 font-fj-mono text-xs text-[#B98F66]">✕</span>
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[18px] bg-fj-charcoal p-6 text-fj-charcoal-text shadow-[0_28px_56px_-26px_rgba(15,15,18,0.5)]">
                <h3 className="mb-4 font-fj-display text-lg font-bold text-[#F05A28]">The FactoryJet way</h3>
                <ul>
                  {[
                    'Be named inside the AI\'s answer',
                    'Citations per engine + Google rankings',
                    'Clear questions, direct answers',
                    'Real mentions AI can verify',
                    'One page, plain language, monthly',
                  ].map((li) => (
                    <li key={li} className="flex gap-2.5 border-b border-[#26262C] py-2.5 text-[14.5px]">
                      <span className="mt-0.5 font-fj-mono text-xs text-[#F05A28]">✓</span>
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── CH.7 CITY PINS ──────────────────────────────────────────────── */}
        <section className="py-14 md:py-20" aria-label="Cities we cover">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#F05A28]">Where we work</p>
            <h2 className="mt-3 font-fj-display text-3xl font-extrabold tracking-tight md:text-[2.6rem]">
              AI SEO for <em className="italic text-[#F05A28]">every metro.</em>
            </h2>
            <p className="mt-4 max-w-[620px] text-[17px] text-[#55555c]">
              Buyers in every city now ask AI who to trust. We cover all of India, with dedicated SEO teams for the six
              biggest markets.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-6">
              {CITY_PINS.map((c) => (
                <li key={c.name}>
                  <Link
                    href={c.href}
                    className="block rounded-2xl border border-[#E8E6DF] bg-white px-3.5 py-4 text-center font-fj-display text-[15px] font-bold text-fj-charcoal transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F05A28] hover:shadow-[0_14px_28px_-16px_rgba(240,90,40,0.4)]"
                  >
                    {c.name}
                    <span className="mt-1 block font-fj-mono text-[10px] font-normal uppercase tracking-[0.08em] text-[#55555c]">
                      SEO in {c.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── CH.8 FAQ — 22 conversational, zero JS ───────────────────────── */}
        <FAQ
          eyebrow="QUESTIONS, ANSWERED SIMPLY"
          headline="GEO, AEO &amp; AI SEO FAQ — Every Question About Generative Engine Optimization, Answered Simply"
          lead="If your question is not below, message us on WhatsApp and you will usually hear back the same day."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── CH.9 FOUNDER CLIMAX ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="FOUNDER ACCESS"
          headline="Find out what AI says about your business — this week."
          sub="Book a 30-minute call with Bhavesh, the founder. We run your top buyer questions through ChatGPT, Perplexity, and Gemini live on the call — you watch the answers appear, and you keep the findings either way."
          primaryCta={{ label: 'Book a 30-min call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Read our India AI SEO comparison', href: '/blog/best-ai-seo-agencies-india' }}
          objectionHandler="No long contracts. No pricing surprises — scope and price explained in writing on the call. You own everything we build."
        />
      </main>

      <SiteFooter locale="in" />
    </>
  );
}
