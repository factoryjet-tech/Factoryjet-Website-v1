import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

/**
 * ORIGINAL RESEARCH ASSET (2026-08-03).
 *
 * Every number on this page is traceable to data committed in this repo:
 *   pipeline/research/data/citation_anatomy_pages.json   (58 fetched pages)
 *   pipeline/research/data/citation_anatomy_urls.json    (232 AIO citations)
 *   pipeline/research/data/backlinks_profile.json        (referring domains)
 *   pipeline/research/data/link_gap.json                 (3,072 gap domains)
 *   pipeline/research/data/ecom_leadgen_serp.json        (LLM mention runs)
 * Scripts: dfs_citation_anatomy.py, dfs_backlinks.py, dfs_link_gap.py.
 *
 * DO NOT edit a figure here without re-deriving it from those files. This page
 * exists to be cited and linked; a wrong number is worse than no page.
 */

const PAGE_MODIFIED = '2026-08-03';

export const metadata: Metadata = {
  title: 'We Measured 58 Pages That AI Actually Cites. Authority Did Not Predict It. | FactoryJet',
  description:
    'Original research: we analysed 232 Google AI Overview citations across 12 commercial queries, fetched the 58 most-cited pages, and measured what they structurally have in common. Median cited page is 2,813 words with 110 list items. FAQPage schema appears on only 41%. Domain authority did not predict citation.',
  openGraph: {
    type: 'article', siteName: 'FactoryJet',
    title: 'We Measured 58 Pages That AI Actually Cites. Authority Did Not Predict It.',
    description: 'Original research on 232 Google AI Overview citations. Median cited page: 2,813 words, 110 list items. FAQPage schema on only 41%. Authority did not predict citation.',
    url: 'https://factoryjet.com/ai-citation-study',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet AI citation study' }],
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: 'We measured 58 pages that AI actually cites', description: 'Median cited page: 2,813 words, 110 list items. FAQPage schema on only 41%. Authority did not predict citation.', images: ['https://factoryjet.com/og-default.png'] },
  alternates: { canonical: 'https://factoryjet.com/ai-citation-study' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'findings', label: 'The findings' },
  { key: 'method', label: 'Method' },
  { key: 'limits', label: 'Limitations' },
  { key: 'apply', label: 'Applying it' },
];

const FAQ_ITEMS = [
  { category: 'findings', question: 'What do pages cited by Google AI Overviews have in common?', answer: 'Across 58 cited pages the median carried 2,813 words, 11 H2 sections, and 110 list items. 72% had a visible FAQ section and 95% had exactly one H1. None had zero H1. The single most distinctive trait was list density: a median of 110 list items per page.' },
  { category: 'findings', question: 'How long should a page be to get cited by AI?', answer: 'The median cited page was 2,813 words. Only 3 of 58 exceeded 6,000 words, while 25 sat between 2,000 and 3,500. Longer is not better. The common advice to publish 5,000-plus-word pages for AI visibility is not supported by what is actually being cited.' },
  { category: 'findings', question: 'Is FAQPage schema required for AI citation?', answer: 'No. Only 41% of the cited pages had FAQPage schema, while 72% had a visible FAQ section. The visible section is far more common than the markup. Google states directly that no special schema is needed for AI features. Ship FAQ schema because it is cheap and honest, not because it buys citations.' },
  { category: 'findings', question: 'Does domain authority predict AI citation?', answer: 'Not in our data. Measuring referring domains against LLM mention counts across nine buyer prompts, netalico.com with 557 referring domains was cited 17 times, while outerboxdesign.com with 4,718 referring domains barely appeared on the same prompts. Authority buys organic position. It did not buy citation here.' },
  { category: 'findings', question: 'Do listicles get cited more by AI?', answer: 'Not for commercial queries. Only 18% of the cited pages had a numbered listicle headline. The listicle format is widely recommended for AI visibility and it was a clear minority pattern in this sample. Use it where the topic genuinely enumerates, not as a default.' },
  { category: 'findings', question: 'Do comparison tables help with AI citation?', answer: '32% of the cited pages contained a table. That makes tables common but not required. They are worth adding where the topic genuinely compares things, since a table is an unusually clean extractable unit, but the data does not support treating them as mandatory.' },
  { category: 'method', question: 'How was this study conducted?', answer: 'We ran 12 commercial e-commerce queries through Google with AI Overview loading enabled, captured 232 AI Overview citation URLs, excluded publisher and marketplace domains so the sample reflected pages a services company could realistically compete with, then fetched the 58 most-cited remaining pages and measured their rendered HTML.' },
  { category: 'method', question: 'What exactly was measured on each page?', answer: 'Rendered word count after stripping script, style, noscript and SVG elements; heading counts by level; list items; tables; ordered and unordered lists; JSON-LD schema types; presence of a visible FAQ; listicle headline patterns; and whether dateModified was present. Everything was measured on live rendered HTML, never on source files.' },
  { category: 'method', question: 'Why measure rendered HTML rather than the source?', answer: 'Because source files include markup, styles, and structured data that inflate word counts by roughly double. We made that exact mistake mid-study and corrected it: a page measuring 6,883 "words" in source was 3,904 rendered. Any study comparing content length has to state which it measured.' },
  { category: 'limits', question: 'What are the limitations of this study?', answer: 'Four worth stating. The sample is 58 pages in one vertical, e-commerce and agency commercial queries. It reflects Google AI Overviews only, not ChatGPT or Claude. It is capped at the 60 most-cited URLs, so long-tail cited pages are excluded. And it is correlation: these pages are cited and share these traits, which does not prove the traits caused the citation.' },
  { category: 'limits', question: 'Why is ChatGPT and Claude data missing from the structural analysis?', answer: 'Our capture of citation URLs from ChatGPT and Perplexity answers returned no URLs on the run used for the structural analysis, so those pages could not be fetched and measured. The structural findings are Google AI Overview only. We have separate LLM mention-rate data, but not the page structures behind it.' },
  { category: 'limits', question: 'Could the sample be biased toward certain page types?', answer: 'Yes, deliberately and disclosed. We excluded publisher, marketplace, and social domains such as Forbes, Reddit, Clutch and the platform vendors themselves, because the question we were answering was what a services company can compete with. A study including those would produce different medians.' },
  { category: 'apply', question: 'What should we actually change based on this?', answer: 'Three things with the clearest support. Raise list density, since the median cited page carries 110 list items and most service pages carry far fewer. Aim for 2,500 to 3,500 words rather than padding higher. Add a visible FAQ section, which 72% of cited pages had. Everything else in the data is weaker.' },
  { category: 'apply', question: 'Does this mean backlinks do not matter?', answer: 'No. Authority still governs organic ranking position, and our own site sits at 53 referring domains against a competitor median of 1,799, which is exactly why we rank poorly on competitive terms. The finding is narrower: authority did not predict AI citation in this sample. The two are different games with different inputs.' },
  { category: 'apply', question: 'What does Google itself say about optimising for AI Overviews?', answer: 'Google states there are no additional requirements to appear in AI Overviews or AI Mode and no special schema.org structured data to add. Its guidance is ordinary SEO fundamentals: allow crawling, keep important content in text, use internal links, and ensure structured data matches visible content. Our data is consistent with that.' },
  { category: 'apply', question: 'Is llms.txt worth implementing?', answer: 'Not as a visibility lever. Google has stated no AI system currently uses llms.txt, and an Ahrefs analysis of 137,000 domains found 97% of llms.txt files received zero requests in May 2026. It is cheap and harmless to publish, but it is not a ranking or citation factor.' },
];

const FAQ_SCHEMA = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })) };
const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'ScholarlyArticle',
  headline: 'We measured 58 pages that AI actually cites. Domain authority did not predict it.',
  description: 'Original analysis of 232 Google AI Overview citations across 12 commercial e-commerce queries, with structural measurement of the 58 most-cited pages.',
  datePublished: PAGE_MODIFIED, dateModified: PAGE_MODIFIED,
  author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhaveshbarot/', jobTitle: 'Founder, FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  mainEntityOfPage: 'https://factoryjet.com/ai-citation-study',
  about: [{ '@type': 'Thing', name: 'Generative engine optimization' }, { '@type': 'Thing', name: 'Google AI Overviews' }],
};
const DATASET_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Dataset',
  name: 'Structural analysis of 58 pages cited by Google AI Overviews',
  description: 'Rendered-HTML measurements (word count, heading counts, list items, tables, JSON-LD schema types, FAQ presence, dateModified) for 58 pages captured from 232 Google AI Overview citations across 12 commercial e-commerce queries, August 2026.',
  creator: { '@id': 'https://factoryjet.com/#organization' },
  dateModified: PAGE_MODIFIED, license: 'https://creativecommons.org/licenses/by/4.0/',
  isAccessibleForFree: true,
  variableMeasured: ['rendered word count', 'H1/H2/H3 counts', 'list item count', 'table count', 'JSON-LD schema types', 'visible FAQ presence', 'dateModified presence'],
};
const ORG_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet', url: 'https://factoryjet.com',
  description: 'FactoryJet is an e-commerce development agency that builds and migrates commerce platforms for US brands.',
  sameAs: ['https://www.linkedin.com/company/factoryjet'],
};
const BREADCRUMB_SCHEMA = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
  { '@type': 'ListItem', position: 2, name: 'AI Citation Study', item: 'https://factoryjet.com/ai-citation-study' },
] };

const HEADLINE = [
  { b: '232', s: 'AI Overview citations captured' },
  { b: '58', s: 'cited pages fetched & measured' },
  { b: '2,813', s: 'median words on a cited page' },
  { b: '110', s: 'median list items' },
];

const FINDINGS = [
  { t: 'Lists are the strongest signal', d: 'A median of 110 list items per cited page, far above what a typical service page carries. A list item is a self-contained retrievable chunk; a paragraph inside a div is not.' },
  { t: 'Length peaks in the middle', d: '25 of 58 pages sat between 2,000 and 3,500 words. Only 3 exceeded 6,000. The advice to publish very long pages for AI visibility is not supported by what is cited.' },
  { t: 'FAQ schema is not required', d: 'FAQPage markup appeared on 41% of cited pages while a visible FAQ section appeared on 72%. The visible section is nearly twice as common as the markup.' },
  { t: 'Listicles are a minority', d: 'Only 18% carried a numbered listicle headline, despite the format being widely recommended for AI visibility. Use it where a topic enumerates, not by default.' },
  { t: 'One H1, always', d: '55 of 58 had exactly one H1 and none had zero. This is basic hygiene rather than an insight, but it is the most consistent trait in the set.' },
  { t: 'Freshness is common, not universal', d: 'dateModified was present on 56%. Worth having and cheap to add, but a clear majority rather than a requirement.' },
];

const AUTHORITY = [
  { name: 'netalico.com', rd: '557', cites: '17', note: 'Small profile, heavily cited' },
  { name: 'swankyagency.com', rd: '~1,000', cites: '18', note: 'Mid profile, heavily cited' },
  { name: 'elogic.co', rd: '~1,300', cites: '19', note: 'Mid profile, heavily cited' },
  { name: 'outerboxdesign.com', rd: '4,718', cites: 'barely present', note: 'Largest profile, near-absent' },
];

const DEBUNKED = [
  { claim: '"Publish 5,000+ word pages to win AI visibility."', reality: 'Median cited page: 2,813 words. Only 3 of 58 exceeded 6,000.' },
  { claim: '"FAQPage schema is a Tier 1 AI citation factor."', reality: 'Present on 41% of cited pages. Google states no special schema is needed.' },
  { claim: '"llms.txt is a technical necessity."', reality: 'Google says no AI system currently uses it. Ahrefs found 97% of llms.txt files got zero requests across 137,000 domains in May 2026.' },
  { claim: '"Every page needs a listicle."', reality: 'Listicle headlines appeared on 18% of cited pages.' },
  { claim: '"Pages under 125 words convert 15% higher" (attributed to Unbounce).', reality: 'Not in that report. We could not locate this figure in any primary source. Treat as fabricated.' },
];

const LIMITS = [
  'Sample is 58 pages in a single vertical: e-commerce and agency commercial queries.',
  'Google AI Overviews only. ChatGPT and Claude citation URLs were not captured on the analysis run, so their page structures are unmeasured.',
  'Capped at the 60 most-cited URLs, so long-tail cited pages are excluded.',
  'Publisher, marketplace and vendor domains were deliberately excluded, which shifts the medians.',
  'Correlation, not causation. These pages are cited and share these traits. Nothing here proves the traits caused the citation.',
];

export default function AICitationStudyPage() {
  return (
    <>
      <script id="acs-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="acs-article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script id="acs-dataset-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(DATASET_SCHEMA) }} />
      <script id="acs-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="acs-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">

        <section className="pp-dotgrid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(36px,5vh,64px)' }}>
            <p className="pp-eyebrow">Original research &middot; August 2026</p>
            <h1 style={{ margin: '14px 0 16px', maxWidth: '22ch' }}>
              We measured 58 pages that AI actually cites.
            </h1>
            <p className="pp-lead" style={{ maxWidth: '70ch' }}>
              We captured 232 Google AI Overview citations across 12 commercial e-commerce queries,
              fetched the most-cited pages, and measured what they structurally have in common. The
              median cited page carries 2,813 words and 110 list items. FAQPage schema appears on
              only 41% of them. And the domain with 4,718 referring domains was cited less often than
              one with 557.
            </p>
            <p className="pp-lead" style={{ maxWidth: '70ch', marginTop: '14px' }}>
              Every figure below is reproducible from data and scripts published in our repository.
              The limitations are stated in full, because a study that hides them is marketing.
            </p>
          </div>
        </section>

        <section className="pp-sec tint" style={{ paddingTop: 'clamp(32px,4vh,52px)', paddingBottom: 'clamp(32px,4vh,52px)' }}>
          <div className="pp-wrap">
            <div className="pp-stats">
              {HEADLINE.map((s) => (<div className="pp-stat" key={s.b}><b>{s.b}</b><span>{s.s}</span></div>))}
            </div>
          </div>
        </section>

        {/* Word distribution, inline SVG so it needs no chart library */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// finding 1'}</p>
            <h2 style={{ marginTop: '10px' }}>Cited pages cluster at 2,000 to 3,500 words</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Word counts were measured on rendered HTML, not source files. Source measurement roughly
              doubles the figure, and we corrected that error mid-study rather than publishing it.
            </p>
            <figure style={{ margin: '32px 0 0' }}>
              <svg viewBox="0 0 700 220" width="100%" height="auto" role="img"
                   aria-label="Bar chart of rendered word counts across 58 cited pages: 1 page under 500 words, 2 at 500 to 1,000, 13 at 1,000 to 2,000, 25 at 2,000 to 3,500, 14 at 3,500 to 6,000, and 3 above 6,000.">
                <title>Rendered word count distribution across 58 AI-cited pages</title>
                {[
                  { l: '<500', v: 1 }, { l: '500-1k', v: 2 }, { l: '1k-2k', v: 13 },
                  { l: '2k-3.5k', v: 25 }, { l: '3.5k-6k', v: 14 }, { l: '6k+', v: 3 },
                ].map((d, i) => {
                  const h = (d.v / 25) * 140;
                  const x = 40 + i * 108;
                  return (
                    <g key={d.l}>
                      <rect x={x} y={170 - h} width="66" height={h} rx="4"
                            fill={d.v === 25 ? '#B23E13' : '#E8D8CE'} />
                      <text x={x + 33} y={165 - h} textAnchor="middle" fontSize="13"
                            fontFamily="var(--pp-mono)" fill="#5C534D">{d.v}</text>
                      <text x={x + 33} y={190} textAnchor="middle" fontSize="11.5"
                            fontFamily="var(--pp-mono)" fill="#8A7F78">{d.l}</text>
                    </g>
                  );
                })}
                <line x1="30" y1="170" x2="680" y2="170" stroke="#E2D8D1" strokeWidth="1" />
                <text x="30" y="212" fontSize="11" fontFamily="var(--pp-mono)" fill="#8A7F78">
                  rendered words per cited page (n=58)
                </text>
              </svg>
            </figure>
          </div>
        </section>

        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// what cited pages share'}</p>
            <h2 style={{ marginTop: '10px' }}>Six structural findings</h2>
            <ul className="pp-bento" style={{ marginTop: '32px' }}>
              {FINDINGS.map((f) => (
                <li className="pp-card" key={f.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{f.t}</h3><p>{f.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// finding 2'}</p>
            <h2 style={{ marginTop: '10px' }}>Domain authority did not predict citation</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              We pulled referring-domain counts for the agencies most frequently named by ChatGPT and
              Perplexity across nine buyer prompts. If authority drove citation, the ordering should
              track. It did not.
            </p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead><tr><th>Domain</th><th>Referring domains</th><th>LLM mentions</th><th>Read</th></tr></thead>
                <tbody>
                  {AUTHORITY.map((r) => (
                    <tr key={r.name}>
                      <td className="name">{r.name}</td><td>{r.rd}</td><td>{r.cites}</td><td>{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="pp-lead" style={{ marginTop: '20px', maxWidth: '68ch' }}>
              This does not mean links stopped mattering. Authority still governs organic ranking, and
              our own site sits at 53 referring domains, which is precisely why we rank poorly on
              competitive terms. The narrower claim is the interesting one: in this sample, authority
              and citation came apart.
            </p>
          </div>
        </section>

        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// finding 3'}</p>
            <h2 style={{ marginTop: '10px' }}>Five widely repeated claims the data contradicts</h2>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead><tr><th>Common claim</th><th>What we measured</th></tr></thead>
                <tbody>
                  {DEBUNKED.map((d) => (
                    <tr key={d.claim}>
                      <td className="name" style={{ maxWidth: '30ch' }}>{d.claim}</td>
                      <td>{d.reality}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// method'}</p>
            <h2 style={{ marginTop: '10px' }}>How we ran it</h2>
            <ol className="pp-bento n5" style={{ marginTop: '32px' }}>
              {[
                { n: '01', t: 'Capture', d: '12 commercial e-commerce queries run through Google with AI Overview loading enabled, yielding 232 citation URLs.' },
                { n: '02', t: 'Filter', d: 'Publisher, marketplace and platform-vendor domains excluded, so the sample reflects pages a services company can realistically compete with.' },
                { n: '03', t: 'Fetch', d: 'The 60 most-cited remaining URLs requested with a real browser user-agent. 58 returned successfully.' },
                { n: '04', t: 'Measure', d: 'Rendered HTML only: script, style, noscript and SVG stripped before counting words, headings, list items, tables and schema types.' },
                { n: '05', t: 'Publish', d: 'Scripts and raw JSON committed to the repository so any figure here can be re-derived or challenged.' },
              ].map((s) => (
                <li className="pp-card" key={s.n}>
                  <p className="pp-mlabel" style={{ marginBottom: '8px' }}>{s.n}</p>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{s.t}</h3><p>{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// limitations'}</p>
            <h2 style={{ marginTop: '10px' }}>What this study cannot tell you</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Stated in full, because a study that buries its limitations is marketing rather than research.
            </p>
            <ul style={{ marginTop: '24px', display: 'grid', gap: '12px', maxWidth: '76ch', listStyle: 'none', padding: 0 }}>
              {LIMITS.map((l) => (
                <li key={l} style={{ display: 'flex', gap: '12px', fontSize: '15.5px', lineHeight: 1.6, color: 'var(--pp-body)' }}>
                  <span aria-hidden="true" style={{ color: 'var(--pp-orange-dark)', fontFamily: 'var(--pp-mono)' }}>&rarr;</span>
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// what Google says'}</p>
            <h2 style={{ marginTop: '10px' }}>The primary sources agree with the data</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              Google states directly that there are{' '}
              <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                no additional requirements to appear in AI Overviews or AI Mode
              </a>{' '}
              and no special schema.org structured data to add. OpenAI documents that{' '}
              <a href="https://developers.openai.com/api/docs/bots" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                OAI-SearchBot governs ChatGPT search inclusion
              </a>, separately from the GPTBot training crawler. Anthropic documents{' '}
              <a href="https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                Claude-SearchBot and Claude-User as its retrieval crawlers
              </a>, with ClaudeBot used for training. Our structural findings are consistent with all three: this is ordinary excellent SEO plus extractability, not a separate discipline.
            </p>
          </div>
        </section>

        <FAQ
          eyebrow="STUDY FAQ"
          headline="Questions about the method and the findings"
          items={FAQ_ITEMS}
          categories={FAQ_CATEGORIES}
        />

        <section className="pp-sec tint" id="final-cta">
          <div className="pp-wrap">
            <h2 style={{ marginTop: 0 }}>Use the data, challenge the data</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '66ch' }}>
              The scripts and raw JSON behind every figure are committed in our repository. If you
              reproduce this and get a different answer, we would genuinely like to know. If you want
              help applying it to your own commerce site, we build{' '}
              <Link href="/b2b-ecommerce" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>B2B commerce</Link>,{' '}
              <Link href="/replatforming" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>replatforming</Link>{' '}
              and{' '}
              <Link href="/headless-commerce" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>headless storefronts</Link>.
            </p>
            <div style={{ marginTop: '22px' }}>
              <ModalCTAButton label="Talk to the Founder" region="us" btnVariant="secondary-light" />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
