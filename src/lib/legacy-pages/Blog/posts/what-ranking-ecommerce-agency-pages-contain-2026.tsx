import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

const SLUG = 'what-ranking-ecommerce-agency-pages-contain-2026';
const PAGE_URL = `https://factoryjet.com/blog/${SLUG}`;
const TITLE = 'What Ranking Ecommerce Agency Pages Contain: 156 Pages Across 36 US Searches (2026 Study)';
const META_DESCRIPTION =
  'We read 156 pages that rank in the US Google top 10 for 36 ecommerce agency searches, and 360 AI assistant answers. 64% of ranking pages have zero links of their own. Full data and method.';
const COLLECTED = '16 November 2026';

// Every number on this page was recomputed on 17 Nov 2026 from the raw data collected on
// 16 Nov 2026 (DataForSEO SERP, backlinks and keyword data, plus our own page scrape and
// AI assistant answers). FactoryJet's own pages are excluded from every number.

interface Term {
  term: string;
  vol: number | null;
  kd: number | null;
  pages: number;
  words: number;
  articles: number;
}

const TERMS: Term[] = [
  { term: 'shopify development partner', vol: 14800, kd: 10, pages: 4, words: 1572, articles: 4 },
  { term: 'ecommerce agency', vol: 1900, kd: 34, pages: 4, words: 2726, articles: 1 },
  { term: 'shopify plus cost', vol: 880, kd: 14, pages: 5, words: 2955, articles: 5 },
  { term: 'shopify development company', vol: 720, kd: 27, pages: 5, words: 2192, articles: 2 },
  { term: 'ecommerce development company', vol: 590, kd: 28, pages: 4, words: 2370, articles: 4 },
  { term: 'quickbooks shopify integration', vol: 590, kd: 16, pages: 5, words: 2479, articles: 4 },
  { term: 'shopify plus agency', vol: 590, kd: 16, pages: 5, words: 1913, articles: 5 },
  { term: 'shopify hubspot integration', vol: 390, kd: 6, pages: 3, words: 2497, articles: 2 },
  { term: 'shopify plus support', vol: 390, kd: 27, pages: 2, words: 4097, articles: 2 },
  { term: 'shopify migration services', vol: 260, kd: 4, pages: 5, words: 2690, articles: 3 },
  { term: 'shopify netsuite integration', vol: 210, kd: 22, pages: 3, words: 3026, articles: 3 },
  { term: 'shopify app development company', vol: 170, kd: 28, pages: 4, words: 2516, articles: 4 },
  { term: 'shopify plus development agency', vol: 170, kd: 0, pages: 3, words: 3601, articles: 2 },
  { term: 'woocommerce development company', vol: 170, kd: 35, pages: 4, words: 2927, articles: 3 },
  { term: 'headless ecommerce development services', vol: 140, kd: null, pages: 5, words: 3779, articles: 5 },
  { term: 'shopify plus b2b', vol: 140, kd: 49, pages: 5, words: 2182, articles: 4 },
  { term: 'woocommerce development agency', vol: 140, kd: 25, pages: 4, words: 1832, articles: 3 },
  { term: 'b2b ecommerce portal', vol: 110, kd: 21, pages: 3, words: 2259, articles: 1 },
  { term: 'shopify b2b wholesale', vol: 90, kd: 30, pages: 5, words: 1836, articles: 5 },
  { term: 'shopify erp integration', vol: 90, kd: 5, pages: 5, words: 3594, articles: 4 },
  { term: 'shopify plus vs shopify advanced', vol: 90, kd: 0, pages: 5, words: 3855, articles: 5 },
  { term: 'b2b ecommerce agency', vol: 70, kd: 1, pages: 4, words: 1265, articles: 1 },
  { term: 'custom woocommerce development', vol: 70, kd: 16, pages: 4, words: 2689, articles: 1 },
  { term: 'ecommerce website development cost', vol: 70, kd: 13, pages: 5, words: 3094, articles: 4 },
  { term: 'b2b ecommerce development', vol: 50, kd: 0, pages: 5, words: 4190, articles: 4 },
  { term: 'bigcommerce development agency', vol: 50, kd: 21, pages: 4, words: 2463, articles: 1 },
  { term: 'hire shopify plus developers', vol: 50, kd: 0, pages: 5, words: 2924, articles: 2 },
  { term: 'magento to shopify migration service', vol: 50, kd: 22, pages: 5, words: 2876, articles: 5 },
  { term: 'shopify plus migration', vol: 50, kd: 0, pages: 4, words: 2210, articles: 4 },
  { term: 'b2b ecommerce consultant', vol: 40, kd: 0, pages: 5, words: 3261, articles: 4 },
  { term: 'b2b ecommerce for distributors', vol: 40, kd: 0, pages: 4, words: 4344, articles: 4 },
  { term: 'b2b ecommerce for manufacturers', vol: 30, kd: 0, pages: 5, words: 4986, articles: 5 },
  { term: 'headless shopify agency', vol: 30, kd: 0, pages: 5, words: 2635, articles: 5 },
  { term: 'woocommerce to shopify migration service', vol: 30, kd: 0, pages: 5, words: 2087, articles: 3 },
  { term: 'shopify b2b without plus', vol: 20, kd: 0, pages: 3, words: 2068, articles: 2 },
  { term: 'shopify maintenance services', vol: null, kd: null, pages: 5, words: 2251, articles: 1 },
];

const KEY_NUMBERS: string[] = [
  '64% of ranking ecommerce agency pages have zero referring domains pointing at the page itself, while the websites they sit on have a median of 773.',
  'The median page in the US top 10 for 36 ecommerce agency searches is 2,720 words long.',
  'Pages in positions 1 to 3 are not longer than pages in positions 4 to 10: a median of 2,635 words against 2,876.',
  '75% of the pages that rank for ecommerce agency searches are articles or blog posts, not service pages.',
  'Half of the pages ranking for searches with "agency" or "company" in them (24 of 46) are "best" or "top" lists.',
  'Only 29% of ranking pages carry FAQPage schema, and top-3 pages are no more likely to have it (30% against 29%).',
  '65% of ranking pages name two or more business systems, such as an ERP, NetSuite, Salesforce or a PIM.',
  'Of the 17 web pages that AI assistants cited 8 or more times for ecommerce buyer questions, 10 were "best" or "top" agency lists.',
];

const TOP_CITED: { url: string; kind: string; count: number }[] = [
  { url: 'conversion.is/blog/best-shopify-plus-agencies', kind: 'List', count: 12 },
  { url: 'makroagency.com/insights/best-shopify-plus-agencies', kind: 'List', count: 10 },
  { url: 'ecomzier.com/blogs/migration/best-shopify-migration-services', kind: 'List', count: 10 },
  { url: 'iwdagency.com/blogs/news/best-bigcommerce-b2b-agencies', kind: 'List', count: 10 },
  { url: 'fortegrp.com/insights/top-ecommerce-development-companies-usa', kind: 'List', count: 10 },
  { url: 'capterra.com/resources/best-b2b-ecommerce-software-reviews-analysis', kind: 'List', count: 10 },
  { url: 'netalico.com', kind: 'Homepage', count: 10 },
  { url: 'craftberry.co/services/shopify-support-retainers', kind: 'Service page', count: 10 },
  { url: 'wearepresta.com/best-shopify-migration-agencies-in-2026-10-teams-we-recommend', kind: 'List', count: 9 },
  { url: 'sdg.la/shopify-b2b', kind: 'Service page', count: 9 },
  { url: 'thails.com/services/shopify-ongoing-support', kind: 'Service page', count: 9 },
  { url: 'elogic.co', kind: 'Homepage', count: 9 },
];

const FAQS: FAQItem[] = [
  {
    q: 'What did this study measure?',
    a: 'We pulled the US Google top 10 for 36 ecommerce agency, Shopify, Shopify Plus, WooCommerce, B2B, migration and integration searches on 16 November 2026. We read up to 5 ranking pages per search and counted words, headings, schema types, dollar figures and the business systems each page named. We also pulled referring domain counts for every top-10 page and its website, and the web pages cited in 360 AI assistant answers to ecommerce buyer questions.',
  },
  {
    q: 'How many pages are in the study?',
    a: '360 top-10 results across 36 searches went into the link analysis. For the page content analysis we read 176 competitor pages and kept the 156 that returned at least 150 words of text. The other 20 blocked our reader or returned almost no text.',
  },
  {
    q: 'How long are pages that rank for ecommerce agency searches?',
    a: 'The median is 2,720 words across 156 pages. Only 8 pages (5%) were under 1,000 words and 19 (12%) were over 5,000. Articles ran longer than service pages: a median of 3,088 words against 2,118.',
  },
  {
    q: 'Do longer pages rank higher?',
    a: 'Not in this data. Pages in positions 1 to 3 had a median of 2,635 words. Pages in positions 4 to 10 had a median of 2,876. The 26 pages in position 1 had a median of 2,706 words, close to the overall median.',
  },
  {
    q: 'What does "referring domains" mean?',
    a: 'A referring domain is a separate website that links to a page or site at least once. Ten links from one website count as one referring domain. We used DataForSEO backlink data and counted referring domains for each exact ranking URL and for its whole website.',
  },
  {
    q: 'Why do most ranking pages have no links of their own?',
    a: 'Our data shows the pattern but cannot prove the cause. The likely reading is that Google weighs the trust of the whole website heavily for these searches. Among 262 ranking results from agency and publisher sites, 64% had zero referring domains to the page, and for 87% the website had more than 100 times as many referring domains as the page.',
  },
  {
    q: 'Which kind of page ranks most often for agency searches?',
    a: 'Articles. 75% of all ranking pages were articles or blog posts. On the 11 searches with "agency" or "company" in them, 67% were articles, and 52% were "best" or "top" lists of firms.',
  },
  {
    q: 'How did you decide whether a page was an article?',
    a: 'A page counted as an article if its web address sat under a blog-style folder such as /blog/, /insights/, /resources/ or a dated path, or if its schema marked it as an Article, BlogPosting, NewsArticle or TechArticle. By web address alone the share is 56% (87 of 156). Adding the schema signal raises it to 75% (117 of 156).',
  },
  {
    q: 'Does FAQPage schema help pages rank?',
    a: 'We found no sign of it in this sample. 29% of all ranking pages carried FAQPage schema. In positions 1 to 3 the share was 30%, and in positions 4 to 10 it was 29%. Organization schema was far more common, on 74% of pages.',
  },
  {
    q: 'Which business systems do ranking pages mention most?',
    a: 'ERP appeared on 64% of the 156 pages, Salesforce on 35%, PIM on 26%, NetSuite on 23% and SAP on 22%. 65% of pages named two or more systems from our list of 33.',
  },
  {
    q: 'Which pages do AI assistants cite for ecommerce agency questions?',
    a: 'Across 360 answers from ChatGPT, Claude, Gemini, Perplexity and Google AI features, we counted 2,278 citations to 1,290 different web pages. "Best" or "top" lists took 27% of citations and service pages 37%. Of the 17 pages cited 8 or more times, 10 were lists, and 7 of those 10 were published on the website of a commerce agency.',
  },
  {
    q: 'Do AI assistants cite the same pages that rank on Google?',
    a: 'Rarely, in this data. Only 34 of the 1,290 pages AI assistants cited (3%) were also in the Google top 10 for our 36 searches. The AI questions were written as buyer questions, not copies of the 36 search terms, so the two sets overlap only in part by design.',
  },
  {
    q: 'Are the AI answer numbers stable?',
    a: 'No. AI assistants give different answers to the same question from one run to the next, and 60% of the pages they cited appeared only once in our 360 answers. Treat the AI numbers as a snapshot of 7 and 16 November 2026, not a fixed ranking.',
  },
  {
    q: 'Were FactoryJet pages included?',
    a: 'No. FactoryJet published this study and also builds ecommerce stores, so we removed every FactoryJet page from the ranking, link and AI citation numbers. We also removed a link-redirect address and one related brand site from the AI counts.',
  },
  {
    q: 'What are the limits of this study?',
    a: 'It covers 36 US searches on one day, from one data provider. We read at most 5 pages per search, so positions 7 to 10 are thin in the content sample. Word counts include menus and footers. Backlink counts depend on what DataForSEO had crawled. Keyword difficulty of 0 often means the provider had too little data, not that a term is easy.',
  },
  {
    q: 'Can I use these numbers in my own article?',
    a: `Yes. Please cite "FactoryJet, What Ranking Ecommerce Agency Pages Contain (2026 Study)" and link to ${PAGE_URL}. The data was collected on ${COLLECTED}.`,
  },
];

const th = 'border border-gray-200 px-3 py-2 text-left font-semibold';
const td = 'border border-gray-200 px-3 py-2 align-top';
const link = 'text-[#B23E13] underline underline-offset-2';

function Bar({ label, value, max = 100, suffix = '%', note }: { label: string; value: number; max?: number; suffix?: string; note?: string }) {
  const width = Math.max(1, Math.round((value / max) * 100));
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-800">{label}</span>
        <span className="font-mono text-gray-900">
          {value.toLocaleString('en-US')}
          {suffix}
          {note ? <span className="text-gray-500"> {note}</span> : null}
        </span>
      </div>
      <div className="h-3 w-full rounded bg-gray-100" aria-hidden="true">
        <div className="h-3 rounded bg-[#B23E13]" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

function Figure({ title, caption, children }: { title: string; caption: string; children: React.ReactNode }) {
  return (
    <figure className="my-6 rounded-2xl border border-gray-200 bg-white p-5 not-prose">
      <p className="font-semibold text-gray-900 mb-4">{title}</p>
      {children}
      <figcaption className="mt-3 text-xs text-gray-500">{caption}</figcaption>
    </figure>
  );
}

export const post: BlogPost = {
  id: '857',
  slug: SLUG,
  title: TITLE,
  excerpt:
    'Original data from 156 ranking pages and 360 AI assistant answers for 36 US ecommerce agency searches, collected 16 November 2026. Most ranking pages have no links of their own; the website carries them.',
  category: 'E-Commerce Development',
  author: 'Bhavesh Barot',
  date: 'Nov 17, 2026',
  dateModified: 'Nov 17, 2026',
  hideExcerptOnPage: true,
  readTime: '14 min read',
  imageUrl: '/images/blog/best-shopify-plus-agencies-usa-2026/hero.webp',
  imageAlt:
    'A woman in a mustard sweater and a man in a navy overshirt stand at a wooden table in a clothing studio sorting blank white cards into three piles beside an orange mug',
  meta: {
    title: 'What Ranking Ecommerce Agency Pages Contain (2026 Study) | FactoryJet',
    description: META_DESCRIPTION,
  },
  keyTakeaways: [
    '64% of pages ranking for 36 US ecommerce agency searches have zero referring domains of their own. Their websites have a median of 773.',
    'The median ranking page is 2,720 words, and top-3 pages are not longer than pages in positions 4 to 10.',
    '75% of ranking pages are articles. On "agency" and "company" searches, half are "best" or "top" lists.',
    'Only 29% of ranking pages use FAQPage schema. 65% name two or more business systems.',
    'AI assistants cited 1,290 different pages in 360 answers; 10 of the 17 pages cited most often were agency lists.',
  ],
  faqs: FAQS,
  content: (
    <div className="fj-ranking-ecommerce-pages-study">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Dataset',
            '@id': `${PAGE_URL}#dataset`,
            name: 'Ranking ecommerce agency pages and AI citations, US, November 2026',
            description:
              'Summary data on 360 US Google top-10 results and 156 readable ranking pages for 36 ecommerce agency, Shopify, WooCommerce, B2B, migration and integration searches, plus citations from 360 AI assistant answers. Collected 7 and 16 November 2026.',
            url: PAGE_URL,
            creator: { '@id': 'https://factoryjet.com/#organization' },
            publisher: { '@id': 'https://factoryjet.com/#organization' },
            datePublished: '2026-11-17',
            temporalCoverage: '2026-11-07/2026-11-16',
            spatialCoverage: 'United States',
            isAccessibleForFree: true,
            license: 'https://creativecommons.org/licenses/by/4.0/',
            keywords: ['ecommerce agency', 'Shopify', 'SEO', 'referring domains', 'AI search citations'],
            variableMeasured: [
              'word count',
              'page type (article or service page)',
              'schema types',
              'business systems named',
              'referring domains to page',
              'referring domains to website',
              'AI assistant citations',
            ],
          }),
        }}
      />

      <div id="answer-first" className="mb-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">The headline finding</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          For US ecommerce agency searches, Google appears to rank the website more than the page. On {COLLECTED} we checked 262 top-10 results from agency and publisher sites across 36 searches: 64% had zero referring domains pointing at the page itself, while the websites they sat on had a median of 773.
        </p>
        <p className="text-gray-800 leading-relaxed">
          We also read 156 ranking pages and 360 AI assistant answers. The rest of this report shows what those pages contain, how we measured it, and where the data stops.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Key numbers</h2>
      <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 not-prose">
        <ol className="list-decimal pl-5 space-y-3 text-gray-800">
          {KEY_NUMBERS.map((k) => (
            <li key={k} className="leading-relaxed">{k}</li>
          ))}
        </ol>
        <p className="mt-4 text-xs text-gray-500">Source: FactoryJet analysis of DataForSEO US data and AI assistant answers, collected {COLLECTED}. FactoryJet pages excluded.</p>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Why we ran this study</h2>
      <p className="mb-4">
        Agency owners keep asking the same question: what does a page need to rank for &ldquo;Shopify Plus agency&rdquo; or &ldquo;Shopify NetSuite integration&rdquo;? Most advice on this comes from opinion. We wanted counts. So we pulled the pages Google ranks for 36 commerce searches, read them, and counted what is on them and what links to them.
      </p>
      <p className="mb-6">
        We are FactoryJet, a commerce and AI services company that builds Shopify, WooCommerce and B2B stores. We publish the data here so other agencies, writers and SEO teams can check it and use it.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Method</h2>
      <p className="mb-4"><strong>What we collected.</strong> On {COLLECTED} we pulled the US Google desktop results for 36 searches through DataForSEO. The searches cover ecommerce agencies, Shopify and Shopify Plus development, WooCommerce, BigCommerce, B2B ecommerce, migrations, and integrations with QuickBooks, NetSuite, HubSpot and ERPs. Each search has its US monthly volume and keyword difficulty from DataForSEO. The full list is in the table near the end.</p>
      <p className="mb-4"><strong>Links.</strong> For all 360 top-10 results we pulled referring domain counts for the exact page and for its website. For the link findings we set aside 98 results from platforms, forums and directories such as shopify.com, Reddit, YouTube and Clutch, which leaves 262 results from agency and publisher sites.</p>
      <p className="mb-4"><strong>Page content.</strong> For each search we read up to 5 top-10 pages, skipping directories and forums. That gave 176 pages. 20 of them blocked our reader or returned under 150 words, so 156 pages remain. For each page we counted words (all visible text, including menus), headings, question headings, schema types, dollar figures, mentions of week-based timelines, and which of 33 business systems it named.</p>
      <p className="mb-4"><strong>AI answers.</strong> We asked 34 ecommerce buyer questions, such as which agency to hire for a Shopify NetSuite build or what a migration costs, to ChatGPT, Claude, Gemini and Perplexity (web and app versions) and to Google AI Mode and AI Overviews. 20 questions ran on 7 November 2026 and 14 on 16 November 2026. 360 answers came back, and we counted each cited web page once per answer.</p>
      <p className="mb-4"><strong>What we excluded.</strong> Every FactoryJet page, from every number. From the AI counts we also removed a Google redirect address and one brand site related to FactoryJet.</p>
      <p className="mb-6"><strong>Limits.</strong> This is one day of US data from one provider. Positions 7 to 10 are thin in the content sample because we read the first 5 eligible pages per search. Word counts include page chrome. Backlink tools miss some links. AI assistants change their answers from run to run, so the AI numbers are a snapshot. Our page-type and list labels come from rules on the web address, title and schema, not a human reading every page.</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Finding 1: the website carries the links, not the page</h2>
      <p className="mb-4">
        Of 262 ranking results from agency and publisher sites, 167 (64%) had zero referring domains to the exact page. Another 53 (20%) had one or two. Their websites told a different story: a median of 773 referring domains, and 43% had 1,000 or more. For 87% of results, the website had more than 100 times as many referring domains as the page.
      </p>
      <p className="mb-4">
        Across all 360 results, platforms included, the website median was 1,588 and the page median was 0. Top-3 results sat on websites with a median of 1,946 referring domains, against 1,536 for positions 4 to 10.
      </p>
      <Figure title="Referring domains to the ranking page itself" caption="262 US top-10 results from agency and publisher sites, 36 searches, 16 Nov 2026. Source: DataForSEO backlinks; FactoryJet analysis.">
        <Bar label="0 referring domains" value={64} note="(167)" />
        <Bar label="1 to 2" value={20} note="(53)" />
        <Bar label="3 to 9" value={8} note="(22)" />
        <Bar label="10 to 49" value={5} note="(12)" />
        <Bar label="50 or more" value={3} note="(8)" />
      </Figure>
      <Figure title="Referring domains to the website the page sits on" caption="Same 262 results. Median 773.">
        <Bar label="Under 100" value={8} note="(22)" />
        <Bar label="100 to 499" value={29} note="(76)" />
        <Bar label="500 to 999" value={20} note="(52)" />
        <Bar label="1,000 to 4,999" value={31} note="(82)" />
        <Bar label="5,000 or more" value={11} note="(30)" />
      </Figure>

      <h2 className="text-2xl font-bold mt-10 mb-4">Finding 2: ranking pages are long, but length does not decide the top 3</h2>
      <p className="mb-4">
        The median ranking page is 2,720 words. Only 8 of 156 pages were under 1,000 words. But pages in positions 1 to 3 had a median of 2,635 words, a little shorter than the 2,876 median for positions 4 to 10. Length looks like an entry ticket for these searches. It did not sort the top 3.
      </p>
      <Figure title="Word count of 156 ranking pages" caption="Visible text including menus and footers. Median 2,720 words. Source: FactoryJet page reads, 16 Nov 2026.">
        <Bar label="Under 1,000 words" value={8} max={60} suffix="" note="pages" />
        <Bar label="1,000 to 1,999" value={36} max={60} suffix="" note="pages" />
        <Bar label="2,000 to 3,499" value={60} max={60} suffix="" note="pages" />
        <Bar label="3,500 to 4,999" value={33} max={60} suffix="" note="pages" />
        <Bar label="5,000 or more" value={19} max={60} suffix="" note="pages" />
      </Figure>
      <div className="overflow-x-auto mb-6 not-prose">
        <table className="w-full border-collapse text-sm" style={{ minWidth: 480 }}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className={th}>Group</th>
              <th className={th}>Pages</th>
              <th className={th}>Median words</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white"><td className={td}>Positions 1 to 3</td><td className={td}>77</td><td className={td}>2,635</td></tr>
            <tr className="bg-gray-50"><td className={td}>Positions 4 to 10</td><td className={td}>79</td><td className={td}>2,876</td></tr>
            <tr className="bg-white"><td className={td}>Position 1 only</td><td className={td}>26</td><td className={td}>2,706</td></tr>
            <tr className="bg-gray-50"><td className={td}>Articles</td><td className={td}>117</td><td className={td}>3,088</td></tr>
            <tr className="bg-white"><td className={td}>Service and other pages</td><td className={td}>39</td><td className={td}>2,118</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Finding 3: articles outrank service pages, even for &ldquo;agency&rdquo; searches</h2>
      <p className="mb-4">
        You might expect a search like &ldquo;shopify development company&rdquo; to return company service pages. It mostly does not. 117 of 156 ranking pages (75%) were articles or blog posts. On the 11 searches with &ldquo;agency&rdquo; or &ldquo;company&rdquo; in them, 31 of 46 pages (67%) were articles, and 24 of 46 (52%) were &ldquo;best&rdquo; or &ldquo;top&rdquo; lists of firms.
      </p>
      <p className="mb-4">
        A stricter count, using the web address alone, puts articles at 56% (87 of 156). Either way, a buyer searching for a firm usually lands on a list or guide first.
      </p>
      <Figure title="Share of ranking pages by type" caption="156 pages; 46 on the 11 searches containing 'agency' or 'company'. Lists = 'best' or 'top' plus a number or a plural such as 'agencies' in the title or H1.">
        <Bar label="Articles, all 36 searches" value={75} />
        <Bar label="Articles, 'agency' and 'company' searches" value={67} />
        <Bar label="'Best' or 'top' lists, 'agency' and 'company' searches" value={52} />
        <Bar label="'Best' or 'top' lists, all 36 searches" value={22} />
      </Figure>

      <h2 className="text-2xl font-bold mt-10 mb-4">Finding 4: FAQ schema is less common than people think</h2>
      <p className="mb-4">
        85% of ranking pages carried some schema markup. But FAQPage schema showed up on only 29% (46 of 156), and the top 3 were no more likely to use it (30%) than positions 4 to 10 (29%). Service schema, which many agencies add to service pages, was on 10%.
      </p>
      <p className="mb-4">
        Question-style headings were far more common than FAQ schema: 78% of pages had at least one heading phrased as a question. The median page had 10 H2 headings.
      </p>
      <Figure title="Schema types on 156 ranking pages" caption="Share of pages with each schema.org type anywhere in their JSON-LD. Source: FactoryJet page reads, 16 Nov 2026.">
        <Bar label="Any schema" value={85} />
        <Bar label="Organization" value={74} />
        <Bar label="Article or BlogPosting" value={62} />
        <Bar label="BreadcrumbList" value={60} />
        <Bar label="FAQPage" value={29} />
        <Bar label="Review or AggregateRating" value={15} />
        <Bar label="Service" value={10} />
      </Figure>

      <h2 className="text-2xl font-bold mt-10 mb-4">Finding 5: ranking pages name the systems buyers run</h2>
      <p className="mb-4">
        Commerce buyers rarely just want a store. They want it to talk to their ERP, CRM and accounting tools. Ranking pages reflect that. 65% named two or more systems from our list of 33, and 83% named at least one. &ldquo;ERP&rdquo; alone appeared on 64% of pages.
      </p>
      <p className="mb-4">
        54% of pages showed at least one dollar figure, and 19% gave a timeline in weeks. 24% mentioned a Shopify or platform partner status.
      </p>
      <Figure title="Business systems named on 156 ranking pages" caption="Whole-word match on page text. Source: FactoryJet page reads, 16 Nov 2026.">
        <Bar label="ERP (the word)" value={64} />
        <Bar label="Salesforce" value={35} />
        <Bar label="PIM" value={26} />
        <Bar label="NetSuite" value={23} />
        <Bar label="SAP" value={22} />
        <Bar label="Hydrogen (Shopify headless)" value={19} />
        <Bar label="Microsoft Dynamics" value={17} />
        <Bar label="HubSpot" value={14} />
        <Bar label="QuickBooks" value={10} />
      </Figure>

      <h2 className="text-2xl font-bold mt-10 mb-4">Finding 6: AI assistants cite lists, and rarely the Google top 10</h2>
      <p className="mb-4">
        In 360 AI answers to 34 ecommerce buyer questions, assistants cited 1,290 different pages on 729 websites, 2,278 times in all. Citations spread thin: 60% of those pages were cited only once. The pages cited most were lists. Of the 17 pages cited 8 or more times, 10 were &ldquo;best&rdquo; or &ldquo;top&rdquo; agency lists, and 7 of those 10 sat on a commerce agency&rsquo;s own website.
      </p>
      <p className="mb-4">
        Only 34 of the 1,290 cited pages (3%) were also in the Google top 10 for our 36 searches. Some of that gap comes from the questions themselves, which were phrased as buyer questions rather than the exact search terms. Still, a page can be a regular AI source without ranking on Google for the head term.
      </p>
      <Figure title="Share of AI citations by page type" caption="2,278 citations (each page counted once per answer) in 360 answers from ChatGPT, Claude, Gemini, Perplexity, Google AI Mode and AI Overviews, 7 and 16 Nov 2026.">
        <Bar label="Service and other pages" value={37} />
        <Bar label="'Best' or 'top' lists" value={27} />
        <Bar label="Articles and guides" value={20} />
        <Bar label="Homepages" value={9} />
        <Bar label="Platform help and docs" value={5} />
        <Bar label="Directories" value={1} />
        <Bar label="Forums" value={1} />
      </Figure>
      <p className="mb-3 font-semibold">The 12 most-cited pages</p>
      <div className="overflow-x-auto mb-6 not-prose">
        <table className="w-full border-collapse text-sm" style={{ minWidth: 560 }}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className={th}>Page</th>
              <th className={th}>Type</th>
              <th className={th}>Answers citing it</th>
            </tr>
          </thead>
          <tbody>
            {TOP_CITED.map((r) => (
              <tr key={r.url} className="odd:bg-white even:bg-gray-50">
                <td className={`${td} font-mono text-xs break-all`}>{r.url}</td>
                <td className={td}>{r.kind}</td>
                <td className={td}>{r.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-6 text-sm text-gray-600">Ranked by the number of answers that cited the page, out of 360. Ties are listed in the order our script returned them.</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">What this means if you run an agency site</h2>
      <ul className="list-disc pl-6 mb-6 space-y-3">
        <li><strong>Earn links to the whole site.</strong> In this data, most ranking pages have no links of their own. A site with hundreds of real referring domains can rank a page that has none. One more blog post will not close a gap of 700 referring domains.</li>
        <li><strong>Stop padding pages.</strong> 2,000 to 3,500 words was the most common length, and the top 3 were not longer than the rest. Write until the buyer&rsquo;s questions are answered, then stop.</li>
        <li><strong>Write the guide buyers read before they pick a firm.</strong> 75% of ranking pages are articles. If you only publish service pages, you are missing the page type Google shows most.</li>
        <li><strong>Name the systems.</strong> 65% of ranking pages name two or more business systems. If you connect stores to NetSuite or QuickBooks, say so by name.</li>
        <li><strong>Do not count on FAQ schema.</strong> 29% of ranking pages use it, and the top 3 use it no more than anyone else. It helps readers, but it did not separate winners here.</li>
        <li><strong>Treat AI answers as a separate channel.</strong> 97% of the pages AI assistants cited were not in the Google top 10 for our searches. Fair, well-sourced comparison pages get cited often.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">All 36 searches</h2>
      <p className="mb-4">
        Volume is US monthly searches and KD is keyword difficulty (0 to 100), both from DataForSEO on {COLLECTED}. &ldquo;n/a&rdquo; means the provider returned no figure, and a KD of 0 often means too little data. Median words and article share come from the pages we could read for each search, shown in the &ldquo;Pages read&rdquo; column.
      </p>
      <p className="md:hidden text-xs text-gray-500 mb-2">Swipe sideways to see every column.</p>
      <div className="overflow-x-auto mb-8 not-prose" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <table className="w-full border-collapse text-sm" style={{ minWidth: 680 }}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className={th}>Search term</th>
              <th className={th}>US volume</th>
              <th className={th}>KD</th>
              <th className={th}>Pages read</th>
              <th className={th}>Median words</th>
              <th className={th}>Articles</th>
            </tr>
          </thead>
          <tbody>
            {TERMS.map((t) => (
              <tr key={t.term} className="odd:bg-white even:bg-gray-50">
                <td className={td}>{t.term}</td>
                <td className={td}>{t.vol === null ? 'n/a' : t.vol.toLocaleString('en-US')}</td>
                <td className={td}>{t.kd === null ? 'n/a' : t.kd}</td>
                <td className={td}>{t.pages}</td>
                <td className={td}>{t.words.toLocaleString('en-US')}</td>
                <td className={td}>{Math.round((100 * t.articles) / t.pages)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Cite this study</h2>
      <div className="mb-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 not-prose">
        <p className="text-gray-800 leading-relaxed font-mono text-sm break-words">
          FactoryJet (2026). What Ranking Ecommerce Agency Pages Contain: 156 Pages Across 36 US Searches. Data collected {COLLECTED}, published 17 November 2026. {PAGE_URL}
        </p>
        <p className="mt-3 text-sm text-gray-600">You are welcome to quote any number on this page with a link to this URL. If you spot an error, email connect@factoryjet.com and we will correct it and note the change.</p>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">About the publisher</h2>
      <p className="mb-6">
        FactoryJet builds Shopify, WooCommerce and B2B ecommerce stores and connects them to ERPs, CRMs and accounting systems. See our <a href="/services/ecommerce-development" className={link}>ecommerce development services</a>.
      </p>
    </div>
  ),
};
