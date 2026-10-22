import type { Metadata } from 'next';
import { RECOGNITION_PROFILES } from '@/data/recognitionProfiles';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import JsonLd from '@/components/JsonLd';
import CheckerTool from '@/components/ai-visibility/CheckerTool';

import '@/components/v2/PlatformPage.css';
import './ai-visibility-checker.css';

const URL = 'https://factoryjet.com/ai-visibility-checker';
const TITLE = 'Free AI Visibility Checker: ChatGPT, Perplexity | FactoryJet';
const DESCRIPTION =
  'Free AI visibility checker. See if ChatGPT, Perplexity and Google AI Overviews recommend your business, who they name instead, and what to fix.';

// Freshness signal. Bump only when the page content actually changes.
const PAGE_MODIFIED = '2026-10-22';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'ai visibility checker',
    'ai visibility tool',
    'check ai visibility',
    'does chatgpt recommend my business',
    'ai search visibility',
    'generative engine optimization checker',
    'geo checker',
    'ai seo audit',
    'free ai visibility report',
    'brand visibility in ai search',
    'perplexity visibility checker',
    'google ai overview checker',
    'am i in chatgpt',
    'ai brand monitoring',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: TITLE,
    description:
      'See whether ChatGPT, Perplexity, and Google AI Overviews recommend your business, your AI visibility score, and the fixes to make. Free report in about a minute.',
    url: URL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet AI Visibility Checker' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Visibility Checker | FactoryJet',
    description: 'Does ChatGPT recommend your business? Run a free AI visibility check across ChatGPT, Perplexity, and Google AI Overviews.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: URL },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/* ── FAQ (drives the accordion AND the FAQPage schema) ─────────────────── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'tool', label: 'The checker' },
  { key: 'concepts', label: 'AI visibility' },
  { key: 'working', label: 'Fixing it' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  { category: 'tool', question: 'What is the AI Visibility Checker?', answer: 'It is a free tool that asks ChatGPT, Perplexity, and Google AI Overviews the real questions your buyers type when they are looking for a business like yours, then shows whether the AI recommended you, who it recommended instead, and how to change that. You get an AI visibility score and a prioritized list of fixes in about a minute.' },
  { category: 'tool', question: 'Is the AI visibility checker free?', answer: 'Yes. The report is free and there is no obligation. We ask for your details so we can send the report and, if you want, help you act on it. We would rather earn your trust with a useful report than put it behind a payment.' },
  { category: 'tool', question: 'What do I need to run it?', answer: 'Just your website address and your contact details: full name, business email, phone, and company. That is it. We use your website to understand your category and generate the buyer questions we ask the AI engines. You do not need an account, a login to any AI tool, or access to your analytics.' },
  { category: 'tool', question: 'How long does the check take?', answer: 'About a minute. We put several buyer questions to all three engines, read the answers, and score them. You watch the engines report in as they finish, then the report appears on the page. If an engine is slow to respond, the page keeps you posted while it waits.' },
  { category: 'tool', question: 'Which AI engines do you check?', answer: 'Three: ChatGPT, Perplexity, and Google AI Overviews. The free report gives you one overall score across all three, five sub-scores, the buyer questions where you were and were not named, and the names AI gave instead. Our paid AI Search Audit adds Claude and Gemini and repeats each question several times.' },
  { category: 'tool', question: 'What is an AI visibility score?', answer: 'It is a 0 to 100 measure of how well AI assistants recommend you when buyers ask about your category. It blends five things: how often you appear, how high you rank when you do, your share of voice versus competitors, whether AI cites your own site, and how positive the mentions are.' },
  { category: 'tool', question: 'Why do you ask for my phone and company?', answer: 'So we can send the report, and so a real person can follow up if you want help acting on it. FactoryJet is founder-led, and Bhavesh reviews these requests himself. We are not going to hand your number to a call center.' },
  { category: 'tool', question: 'Will you spam me?', answer: 'No. You will get your report and, at most, a helpful follow-up. We do not sell your details or blast you with newsletters. If you never want to hear from us again, one reply is enough, and we will stop.' },
  { category: 'tool', question: 'Is my report private?', answer: 'Yes. Your report is for you. We do not publish it or share your details. The underlying scan simply records the AI answers we saw at the time you ran it, so the report is defensible if you want to act on it.' },
  { category: 'tool', question: 'How do I know if my brand is being recommended by AI assistants?', answer: 'Ask them the questions your buyers ask, and note whether your name comes up and in what position. Do it more than once, because answers change from run to run. The checker does this for you on ChatGPT, Perplexity, and Google AI Overviews, then lists each question with whether you were named and, when you were, your position.' },
  { category: 'tool', question: 'How can I check if ChatGPT recommends my business?', answer: 'Enter your website in the checker above. It works out your category, asks ChatGPT the kind of questions a buyer would ask, and does the same on Perplexity and Google AI Overviews. Your report shows the questions where AI named you, the ones where it did not, and which businesses it named instead.' },
  { category: 'tool', question: 'Does the checker look at my Google Business Profile?', answer: 'No. The checker does not read or score your Google Business Profile listing. It checks what ChatGPT, Perplexity, and Google AI Overviews say when buyers ask about your category, and how often those answers link to your own website. Keeping your profile complete and accurate is still worth doing for local search.' },
  { category: 'tool', question: 'What is a good AI visibility score?', answer: 'The report labels 70 and above as Strong, 40 to 69 as Contender, and below 40 as Invisible. The number matters less than the detail behind it: which buyer questions you missed, who was named instead, and whether AI links to your own site. Those show you what to fix first.' },
  { category: 'tool', question: 'How accurate is the report?', answer: 'We publish observations, not verdicts. Every claim in the report is backed by the verbatim answer a named engine gave to a specific question on a specific date. AI answers do shift over time, so you can re-run the check whenever you want a fresh read.' },

  { category: 'concepts', question: 'What is AI visibility?', answer: 'AI visibility is how often AI assistants like ChatGPT, Perplexity, and Google AI Overviews recommend your business when someone asks them for help. A buyer who asks an assistant for a recommendation only sees the few names it gives, so for that buyer, being named matters as much as ranking on Google.' },
  { category: 'concepts', question: 'What is generative engine optimization (GEO)?', answer: 'GEO is the practice of getting your business recommended by AI answer engines, the way SEO is about ranking in search engines. It focuses on the things AI models trust: clear, factual content, strong third-party mentions and reviews, comparison pages, and structured data that tells the AI exactly what you do.' },
  { category: 'concepts', question: 'How is AI visibility different from Google SEO?', answer: 'SEO is about ranking a page in a list of blue links. AI visibility is about being named inside a single written answer, often with no list at all. AI pulls from your site, but also heavily from third-party sources like reviews, roundups, and comparison articles, so the playbook overlaps with SEO but is not identical.' },
  { category: 'concepts', question: 'Why does showing up in ChatGPT and Perplexity matter?', answer: 'Because an assistant usually names only a few businesses. When someone asks ChatGPT for the best option in your category, the two or three names it gives get the shortlist. If you are not one of them, you never enter the conversation, no matter how good your website is.' },
  { category: 'concepts', question: 'Why is my business not showing up in AI answers?', answer: 'Usually because the AI does not have enough clear, trustworthy signals that you are a strong option: thin or unclear website content, few third-party mentions and reviews, no comparison content, and missing structured data. Your checker report shows which of these is holding you back.' },
  { category: 'concepts', question: 'What is Google AI Overviews?', answer: 'Google AI Overviews is the AI-written summary that now appears at the top of many Google searches, above the normal results. It names specific businesses and sources. Being cited there puts you in front of buyers before they ever scroll to the classic listings.' },
  { category: 'concepts', question: 'Can I actually improve my AI visibility?', answer: 'Yes. AI visibility responds to the same trust signals AI models weigh: clearer factual content, comparison and alternative pages, real reviews on the sites AI reads, consistent mentions across the web, and clean structured data. It takes deliberate work, but it moves, and your report tells you where to start.' },
  { category: 'concepts', question: 'Do AI answers drive buyers?', answer: 'They drive the shortlist. Even when the final click still happens on Google or your site, the AI answer often decides which two or three brands a buyer considers in the first place. Being recommended early is worth more than ranking fifth on a page nobody reaches.' },

  { category: 'working', question: 'What happens after I get my report?', answer: 'The report is yours to keep and act on however you like. If you want help, the fastest path is to talk to us: we take the exact findings and turn them into a plan. There is no obligation, and Bhavesh reads every request within 24 hours.' },
  { category: 'working', question: 'Can FactoryJet fix my AI visibility for me?', answer: 'Yes. That is our core work: the content, comparison pages, structured data, reviews strategy, and citations that get brands recommended by AI. We build to the exact gaps your report surfaces, so you are not paying for a generic checklist.' },
  { category: 'working', question: 'How much does it cost to improve AI visibility?', answer: 'It depends on your starting point and your goals, so we scope it to you rather than sell a fixed package. After scoping, you get a fixed price per phase in writing, with no monthly minimum. Your free report shows how much ground there is to cover, which is the honest starting point for that conversation.' },
  { category: 'working', question: 'Who is FactoryJet?', answer: 'FactoryJet is a founder-led commerce and AI-search agency, founded in 2014, that has served 500-plus businesses with 97% on-time delivery. We help brands get found and get recommended, across Google and the new AI answer engines. Every engagement is run by our senior in-house team.' },
];

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${URL}#webpage`,
  url: URL,
  name: TITLE,
  description: DESCRIPTION,
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  about: { '@id': `${URL}#app` },
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${URL}#app`,
  name: 'FactoryJet AI Visibility Checker',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: URL,
  description:
    'A free tool that checks whether ChatGPT, Perplexity, and Google AI Overviews recommend your business, scores your AI visibility, and lists the fixes.',
  dateModified: PAGE_MODIFIED,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet' },
  featureList: [
    'Checks ChatGPT, Perplexity, and Google AI Overviews',
    'AI visibility score out of 100',
    'Competitor share of voice in AI answers',
    'Prioritized, plain-English fixes',
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'AI Visibility Checker', item: URL },
  ],
};

const STATS = [
  { b: '3', s: 'AI engines checked live: ChatGPT, Perplexity, Google AI Overviews' },
  { b: '6', s: 'real buyer questions asked of each engine' },
  { b: '~60s', s: 'from your website to a scored report' },
  { b: '24h', s: 'Bhavesh replies to every lead himself' },
];

const STEPS = [
  { n: '01', h: 'Enter your website', p: 'We read your site to understand your category and the questions your buyers actually ask.' },
  { n: '02', h: 'We ask the AI engines', p: 'Those buyer questions go to ChatGPT, Perplexity, and Google AI Overviews.' },
  { n: '03', h: 'You get scored', p: 'We read every answer and score how often, how high, and how positively you are recommended.' },
  { n: '04', h: 'You get the fixes', p: 'A prioritized, plain-English list of what to change to get recommended more often.' },
];

const GETS = [
  'Your AI visibility score out of 100, on ChatGPT, Perplexity, and Google AI Overviews.',
  'The exact buyer questions where AI recommends a competitor instead of you.',
  'Who AI names in your category, and your share of voice against them.',
  'A prioritized, plain-English list of the highest-impact fixes.',
  'Every claim backed by the verbatim AI answer, with the engine and date.',
];

/* ── Paid AI Search Audit (static upsell section below the free tool) ──────
   Describes the done-by-us audit for mid-size and enterprise teams. No prices,
   by house rule: every audit is scoped and quoted. Engines and method mirror
   what the audit pipeline actually runs (ChatGPT, Claude, Gemini, Perplexity,
   plus Google AI Overviews and organic results, repeated runs per question). */
const AUDIT_FOR = [
  'Mid-size and enterprise teams with several products, brands or markets to cover.',
  'Marketing and growth leaders who need evidence for a budget decision, not one score.',
  'Teams whose free check showed a gap and who want the reasons behind it.',
];

const AUDIT_INCLUDES = [
  { h: 'Engines tested', p: 'ChatGPT, Claude, Gemini and Perplexity, plus Google AI Overviews and the normal Google results.' },
  { h: 'Buyer questions', p: 'A question set built with you from how your customers ask, with each question run several times per engine, because AI answers change from run to run.' },
  { h: 'Competitor comparison', p: 'Who gets named instead of you, how often, in what order, and which websites the engines cite as their sources.' },
  { h: 'Technical fixes', p: 'Which AI bots your robots.txt allows or blocks, whether your key content is in the page HTML, and the schema and crawl issues holding you back.' },
  { h: 'Content fixes', p: 'The pages to rewrite so an answer can be quoted from them, and the third-party sites where your category gets discussed.' },
  { h: 'A prioritized plan', p: 'Every fix ranked by likely impact and effort, so your team knows what to do first, second and later.' },
];

const AUDIT_STEPS = [
  { n: '01', h: 'Tell us your market', p: 'Share your site, your main competitors and who you sell to. One short call is enough.' },
  { n: '02', h: 'Agree the questions', p: 'We draft the buyer questions for your category and agree them with you before anything runs.' },
  { n: '03', h: 'We run every answer', p: 'Each question goes to every engine several times. We record who is named, in what order, and which sources are cited.' },
  { n: '04', h: 'You get the plan', p: 'A written report with the evidence behind every finding and a prioritized fix list, walked through with you on a call.' },
];

export default function AiVisibilityCheckerPage() {
  return (
    <>
      <SiteHeader locale="us" />
      <JsonLd id="ld-webpage" data={webPageSchema} />
      <JsonLd id="ld-app" data={appSchema} />
      <JsonLd id="ld-faq" data={faqSchema} />
      <JsonLd id="ld-breadcrumb" data={breadcrumbSchema} />

      <main className="platpage avc">
        {/* HERO, dot-grid atmosphere, tool card is the one memorable moment */}
        <section className="pp-dotgrid" id="top" style={{ scrollMarginTop: 80 }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px, 7vh, 84px)', paddingBottom: 'clamp(44px, 7vh, 84px)' }}>
            <div className="avc-hero-grid">
              <div>
                <p className="pp-eyebrow">// AI search visibility</p>
                <h1 style={{ marginTop: 14 }}>
                  Does ChatGPT <span style={{ color: '#C94A1A' }}>recommend</span> your business?
                </h1>
                <p className="pp-lead" style={{ marginTop: 18, maxWidth: '52ch' }}>
                  Buyers now ask ChatGPT, Perplexity, and Google&rsquo;s AI for the best option before they ever reach the blue
                  links. Run a free check to see whether AI names you, who it recommends instead, and exactly how to fix it.
                </p>
                <ul className="avc-hero-chips">
                  <li>All 3 engines</li>
                  <li>Results in ~1 minute</li>
                  <li>Prioritized fixes</li>
                  <li>Free, no obligation</li>
                </ul>
              </div>
              <div className="avc-rise">
                <CheckerTool />
              </div>
            </div>
          </div>
        </section>

        {/* STAT BAND */}
        <section className="pp-sec tint" style={{ paddingTop: 'clamp(40px,6vh,64px)', paddingBottom: 'clamp(40px,6vh,64px)' }}>
          <div className="pp-wrap">
            <div className="pp-stats">
              {STATS.map((s) => (
                <div key={s.b} className="pp-stat">
                  <b>{s.b}</b>
                  <span>{s.s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ANSWER-FIRST */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-eyebrow">// the short answer</p>
            <h2 style={{ marginTop: 12 }}>What is an AI visibility check?</h2>
            <p className="pp-lead" style={{ marginTop: 16 }}>
              An AI visibility check asks AI assistants like ChatGPT, Perplexity, and Google AI Overviews the questions your
              buyers ask, then measures how often they recommend your business versus your competitors. It returns an AI
              visibility score and the specific fixes that get you recommended more often. This one is free and takes about a minute.
            </p>
            <p style={{ marginTop: 16 }}>
              Want to know what the pages AI cites have in common? Read our{' '}
              <Link href="/ai-citation-study" className="underline underline-offset-4" style={{ fontWeight: 600 }}>AI citation study</Link>.
              If your report shows a gap, our{' '}
              <Link href="/services/ai-seo" className="underline underline-offset-4" style={{ fontWeight: 600 }}>AI SEO services</Link>{' '}
              work on the content, schema and third-party mentions behind it. And if assistants are starting to shop on
              your buyers&rsquo; behalf, our guide to{' '}
              <Link href="/agentic-commerce" className="underline underline-offset-4" style={{ fontWeight: 600 }}>agentic commerce</Link>{' '}
              explains what changes for your store.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS: a real 4-step sequence */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <h2>From your website to a scored report</h2>
            <div className="avc-steps">
              {STEPS.map((s) => (
                <div key={s.n} className="avc-step">
                  <span className="avc-step-n">{s.n}</span>
                  <h3>{s.h}</h3>
                  <p>{s.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="pp-sec">
          <div className="pp-wrap avc-get-grid">
            <div>
              <p className="pp-eyebrow">// what you get</p>
              <h2 style={{ marginTop: 12 }}>A report you can act on, not a vanity score</h2>
              <p className="pp-lead" style={{ marginTop: 16, maxWidth: '42ch' }}>
                A clear read on where you stand in AI search, and the specific moves that change it.
              </p>
            </div>
            <ul className="avc-get-list">
              {GETS.map((g) => (
                <li key={g}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M4.5 9.5l3 3 6-7" stroke="#C94A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PAID AI SEARCH AUDIT: the deeper, done-for-you option for bigger teams.
            Static. No prices by house rule; links to the GEO service page. */}
        <section className="pp-sec tint" id="ai-search-audit" style={{ scrollMarginTop: 80 }}>
          <div className="pp-wrap">
            <div className="avc-get-grid">
              <div>
                <p className="pp-eyebrow">// for bigger teams</p>
                <h2 style={{ marginTop: 12 }}>Need more than a one-minute check? Get an AI Search Audit.</h2>
                <p className="pp-lead" style={{ marginTop: 16, maxWidth: '48ch' }}>
                  The free checker is a quick read: three engines, six buyer questions, about a minute. The AI Search Audit is
                  a paid, in-depth review our team runs for mid-size and enterprise companies that need to know where they
                  stand in AI answers, why, and what to fix first.
                </p>
                <h3 style={{ marginTop: 24, fontSize: 17 }}>Who it is for</h3>
                <ul className="avc-trust-list">
                  {AUDIT_FOR.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
                <div className="avc-cta-row" style={{ marginTop: 24 }}>
                  <Link href="/contact" className="avc-btn avc-btn--primary">Request an AI Search Audit</Link>
                  <Link href="/services/generative-engine-optimization" className="avc-btn avc-btn--ghost">See our GEO agency services</Link>
                </div>
                <p className="avc-fineprint">Every audit is scoped to your site and market, and quoted before any work starts.</p>
              </div>
              <div>
                <h3 style={{ fontSize: 17 }}>What is included</h3>
                <ul className="avc-get-list" style={{ marginTop: 14 }}>
                  {AUDIT_INCLUDES.map((item) => (
                    <li key={item.h}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                        <path d="M4.5 9.5l3 3 6-7" stroke="#C94A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span><strong>{item.h}.</strong> {item.p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="pp-mlabel" style={{ marginTop: 40 }}>// how the audit works</p>
            <div className="avc-steps" style={{ marginTop: 16 }}>
              {AUDIT_STEPS.map((s) => (
                <div key={s.n} className="avc-step">
                  <span className="avc-step-n">{s.n}</span>
                  <h3>{s.h}</h3>
                  <p>{s.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* E-E-A-T */}
        <section className="pp-sec tint">
          <div className="pp-wrap avc-eeat-grid">
            <div className="avc-eeat-card">
              <img src="/bhavesh_avatar-240.webp" alt="Bhavesh Barot, Founder of FactoryJet" width={76} height={76} loading="lazy" decoding="async" style={{ width: 76, height: 76, objectFit: 'cover', flexShrink: 0 }} />
              <div>
                <p className="pp-mlabel">// built and reviewed by the founder</p>
                <h3 style={{ marginTop: 6, fontSize: 19 }}>Bhavesh Barot, Founder of FactoryJet</h3>
                <p className="avc-eeat-p">
                  Building and scaling commerce and search since 2014, for 500-plus businesses. FactoryJet works at the front edge of
                  AI search, helping brands get recommended by ChatGPT, Perplexity, and Google AI Overviews as well as ranked on Google.
                </p>
                <p className="avc-reco">Recognized on {RECOGNITION_PROFILES.slice(0, 4).map((p, i) => (<span key={p.href}>{i > 0 ? ' · ' : ''}<a href={p.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4"><b>{p.label}</b></a></span>))}</p>
              </div>
            </div>
            <div className="avc-trust-card">
              <h3 style={{ fontSize: 17 }}>Why trust this report</h3>
              <ul className="avc-trust-list">
                <li>We ask the engines your buyers use and stamp each result with the date it was captured.</li>
                <li>Every claim is the verbatim AI answer, stamped with its engine and date.</li>
                <li>The score is built from five measured parts: presence, prominence, share of voice, citations and sentiment.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          bgClassName="bg-white"
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="AI visibility, answered"
          lead="What the checker does, what AI visibility means, and how to fix it. Straight answers."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* FINAL CTA, on tint, brand orange (no dark room) */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow avc-final">
            <p className="pp-eyebrow">// see where you stand</p>
            <h2 style={{ marginTop: 12 }}>Find out if AI recommends you, in about a minute</h2>
            <p className="pp-lead" style={{ marginTop: 14 }}>
              Free, no obligation, all three engines. Or if you already know you have a gap, talk to us about closing it.
            </p>
            <div className="avc-final-row">
              <Link href="#top" className="avc-btn avc-btn--primary">Run my free check</Link>
              <Link href="/contact" className="avc-btn avc-btn--ghost">Talk to FactoryJet</Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
