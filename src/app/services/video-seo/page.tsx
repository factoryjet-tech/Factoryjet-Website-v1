import type { Metadata } from 'next';
import Link from 'next/link';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';
import FinalCTA from '@/components/v2/FinalCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import ComparisonTable, { type ComparisonColumn, type ComparisonRow } from '@/components/v2/ComparisonTable';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import StickyCtaLabel from '@/components/v2/StickyCtaLabel';
import JsonLd from '@/components/JsonLd';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { ORG_ID, ORG_REF, FOUNDER_ID } from '@/data/organization';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/video-seo, built 2026-11-24.

   Why this page exists: a Search Console gap audit on 24 Nov 2026 found
   factoryjet.com earning impressions for video SEO with no page for it
   ("austin video seo company" pos 11.3, "video seo company austin" 10.4,
   "top local video seo company east providence ri" 17.4; about 718
   impressions in 12 months). DataForSEO US, 24 Nov 2026: "youtube seo" 1,900,
   "youtube video optimization" 1,000, "video seo" 590, "video seo
   optimization" 590, "youtube seo services" 390, "video seo services" 140,
   "video seo company" / "agency" / "expert" 90 each, "video sitemap" 70.
   SERP 24 Nov: both service queries are mostly listicles and directories
   (DesignRush, Semrush Agency Partners, topseos, Mayple), with one agency
   service page (Intero Digital) and an AI Overview on "video seo services".
   Bhavesh confirmed on 24 Nov 2026 that FactoryJet sells video SEO.

   Truth rules for anyone editing this file:
   - Scope is optimisation of videos the client already has or is making.
     Video production for clients is NOT confirmed; do not offer it here.
   - Our own video practice is confirmed in memory notes (video studio,
     11 Oct to 13 Nov 2026): we make our own explainers and Shorts in code,
     each with an uploaded caption file and chapters, and long explainers
     whose description's first line carries the landing-page link because a
     Short's description cannot carry a clickable link. No channel numbers
     (never publish our own weak numbers).
   - AI citation figures are our own market measurements: 6,347 AI answers to
     buyer questions in Oct 2026 sweeps, youtube.com cited in 332 (25 Oct
     count); 9 Oct check, 65 of 212 AI Overviews with references cited a
     YouTube video, median views of 111 cited videos 1,571, 31 under 500,
     30 under 90 days old; 11 Oct, the text Google lifted from 127 YouTube
     references was the spoken transcript and 56 of 127 pointed at a second.
   - Process claims reused from live pages: monthly plain-language report on
     the client's own GA4 and Search Console (/services/local-seo), no
     ranking guarantee (/services/seo-consulting), house terms (fixed price
     per phase, no monthly minimum), 500+ businesses, 97% on time, 2014.
   - NO link building. No bought views. No FactoryJet prices; no verified
     market range for video SEO exists in MARKET-PRICE-RANGES, so the cost
     FAQ carries no number.
   - No VideoObject on this page: it has no video. Add one only when a real
     video with a real URL is embedded here.

   Schema: WebPage + Service + FAQPage + BreadcrumbList, through <JsonLd>.
   FAQPage is built from the same FAQ_ITEMS array the visible <FAQ> renders.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/video-seo';
const PAGE_TITLE = 'Video SEO Services for Google & YouTube | FactoryJet';
const PAGE_DESC =
  'Video SEO services for Google, YouTube and AI answers: titles, chapters, captions, VideoObject schema, video sitemaps and watch pages. Quoted per job.';
const PAGE_PUBLISHED = '2026-11-24';
const PAGE_MODIFIED = '2026-11-24';
const CHECKED_ON = '24 Nov 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'video seo services',
    'video seo',
    'youtube seo services',
    'youtube seo',
    'video seo company',
    'video seo agency',
    'youtube seo agency',
    'video seo expert',
    'youtube video optimization',
    'video seo optimization',
    'video schema markup',
    'video sitemap',
    'video seo best practices',
    'youtube seo company',
  ],
  alternates: {
    canonical: CANONICAL_URL,
    languages: { 'en-US': CANONICAL_URL, 'x-default': CANONICAL_URL },
  },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: CANONICAL_URL,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'FactoryJet video SEO services for Google and YouTube',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [OG_IMAGE],
  },
  robots: { index: false, follow: true },
};

/** One array feeds the visible <Breadcrumbs> and the BreadcrumbList JSON-LD. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Video SEO', url: CANONICAL_URL },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BREADCRUMB_ITEMS.map((b, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: b.name,
    item: b.url,
  })),
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${CANONICAL_URL}#webpage`,
  url: CANONICAL_URL,
  name: PAGE_TITLE,
  description: PAGE_DESC,
  inLanguage: 'en-US',
  datePublished: PAGE_PUBLISHED,
  dateModified: PAGE_MODIFIED,
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://factoryjet.com/#website',
    url: 'https://factoryjet.com',
    name: 'FactoryJet',
  },
  about: { '@id': `${CANONICAL_URL}#service` },
  publisher: { '@id': ORG_ID },
  reviewedBy: { '@type': 'Person', '@id': FOUNDER_ID, name: 'Bhavesh Barot' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#short-answer'] },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${CANONICAL_URL}#service`,
  name: 'Video SEO Services',
  serviceType:
    'Video SEO for Google Search, YouTube and AI answers: titles, descriptions, chapters, caption files, thumbnails, VideoObject structured data, video sitemaps, watch pages and key moments',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', audienceType: 'Businesses that publish video on YouTube or their own website' },
  description:
    'FactoryJet optimises a business\'s videos so they can be found on Google, on YouTube and in AI answers. The work covers YouTube titles, descriptions, chapters and caption files; watch pages, VideoObject structured data, Clip markup and video sitemaps on the business\'s own site; and monthly reporting from Search Console and YouTube Analytics. Each job is quoted in writing. Link building and bought views are not included.',
  url: CANONICAL_URL,
};

/* ── Sources. One map, used by inline source links (`short`) and by the
   visible Sources list (`label`). Opened on 2026-11-24. ── */
const SRC = {
  googleVideo: {
    short: 'Google: video SEO best practices',
    label: 'Google Search Central: Video SEO best practices',
    url: 'https://developers.google.com/search/docs/appearance/video',
  },
  googleVideoSchema: {
    short: 'Google: video structured data',
    label: 'Google Search Central: Video (VideoObject, Clip, BroadcastEvent) structured data',
    url: 'https://developers.google.com/search/docs/appearance/structured-data/video',
  },
  gscVideoReport: {
    short: 'Search Console: video indexing report',
    label: 'Search Console Help: Video indexing report',
    url: 'https://support.google.com/webmasters/answer/9495631',
  },
  gscPerformance: {
    short: 'Search Console: Performance report',
    label: 'Search Console Help: Performance report (search type filter, including Video)',
    url: 'https://support.google.com/webmasters/answer/7576553',
  },
  ytChapters: {
    short: 'YouTube: video chapters',
    label: 'YouTube Help: Video chapters',
    url: 'https://support.google.com/youtube/answer/9884579',
  },
  ytCaptions: {
    short: 'YouTube: subtitles and captions',
    label: 'YouTube Help: Add subtitles and captions',
    url: 'https://support.google.com/youtube/answer/2734796',
  },
  ytTags: {
    short: 'YouTube: tags',
    label: 'YouTube Help: Add tags to your videos',
    url: 'https://support.google.com/youtube/answer/146402',
  },
  ytReach: {
    short: 'YouTube: reach and traffic sources',
    label: 'YouTube Help: Understand your YouTube video reach',
    url: 'https://support.google.com/youtube/answer/9314355',
  },
} as const;

type SrcKey = keyof typeof SRC;

/* ── FAQ. One array, rendered visibly AND used for FAQPage JSON-LD. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'Video SEO basics' },
  { key: 'youtube', label: 'YouTube SEO' },
  { key: 'site', label: 'Video on your own website' },
  { key: 'ai', label: 'AI answers and local video' },
  { key: 'working', label: 'Results, cost and working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── Basics ─────────────────────────────────────────────────────
  {
    category: 'basics',
    question: 'What is video SEO?',
    answer:
      'Video SEO is the work that helps search engines find, understand and show your videos. On YouTube that means titles, descriptions, chapters, captions and thumbnails. On your own website it means a watch page, VideoObject structured data, a video sitemap and a thumbnail Google can fetch. The goal is that your video appears when a buyer searches.',
  },
  {
    category: 'basics',
    question: 'What do video SEO services include?',
    answer:
      'Ours cover keyword and question research for each video, YouTube titles, descriptions and chapters, uploaded caption files, thumbnail review, watch pages on your site, VideoObject and Clip structured data, a video sitemap, and a monthly report from Search Console and YouTube Analytics. Each job is quoted in writing before work starts.',
  },
  {
    category: 'basics',
    question: 'What is the difference between video SEO and YouTube SEO?',
    answer:
      'YouTube SEO is the part that happens inside YouTube: titles, descriptions, chapters, captions and thumbnails, so YouTube search and suggestions pick the video up. Video SEO is wider. It also covers Google Search, the Videos tab, key moments and videos embedded on your own website. Most businesses need both.',
  },
  {
    category: 'basics',
    question: 'Does video help SEO?',
    answer:
      'Video gives you extra places to appear: the YouTube results, the Google Videos tab, video results on the main Google page and key moments that jump to a timestamp. It does not lift a weak page on its own. A clear video on the page that answers the same question is what helps.',
  },
  {
    category: 'basics',
    question: 'Which videos are worth optimising first?',
    answer:
      'Start with videos that answer a question a buyer types before they hire you: how the service works, what it costs to scope, what a job looks like, how to choose. Brand films and event recaps rarely match a search. We rank your existing videos by the searches they could answer before we touch any of them.',
  },
  // ── YouTube ────────────────────────────────────────────────────
  {
    category: 'youtube',
    question: 'How do I optimise a YouTube video for search?',
    answer:
      'Write a title that uses the words a buyer searches, put the answer and your link near the top of the description, add chapters with timestamps, upload a caption file instead of relying on automatic captions, and pick a thumbnail that is readable at small size. YouTube says the title, thumbnail and description matter more than tags.',
  },
  {
    category: 'youtube',
    question: 'Do YouTube tags still matter?',
    answer:
      'Only a little. YouTube\'s own help page says tags play a minimal role in discovery and that the title, thumbnail and description are more important. Tags help mainly with words people often misspell. YouTube also counts excessive tags in a description as spam, so we keep them short.',
  },
  {
    category: 'youtube',
    question: 'How do I add chapters to a YouTube video?',
    answer:
      'Add a list of timestamps and titles to the description in YouTube Studio. YouTube\'s rules: the first timestamp must be 00:00, you need at least three timestamps in ascending order, and each chapter must be at least 10 seconds long. Chapters you add replace the automatic ones.',
  },
  {
    category: 'youtube',
    question: 'Do captions help YouTube SEO?',
    answer:
      'Captions give search engines the words spoken in the video as text. YouTube makes automatic captions with speech recognition, but they miss product names, place names and numbers. We upload a checked caption file for every video we optimise, so the transcript says exactly what was said.',
  },
  {
    category: 'youtube',
    question: 'Should I post Shorts or long videos for search?',
    answer:
      'Both, with different jobs. Shorts reach people in the feed, but a Short\'s description does not carry a clickable link. A longer video can carry chapters, a full caption file and your landing page link on the first line of the description. On our own channel each Short points to a longer explainer for that reason.',
  },
  // ── Own site ───────────────────────────────────────────────────
  {
    category: 'site',
    question: 'Should I host videos on YouTube or on my own website?',
    answer:
      'Usually both. Upload to YouTube for reach, then embed the same video on the matching page of your site. Google can find a video in a video, embed, iframe or object element, and says it is fine to show the same video on a watch page and on another page.',
  },
  {
    category: 'site',
    question: 'What is a watch page?',
    answer:
      'Google\'s term for a page where watching one video is the main reason someone visits. Google only indexes videos that sit on a watch page. A blog post that embeds a video next to a long article is not a watch page, so its video may not be indexed as a video.',
  },
  {
    category: 'site',
    question: 'Why is Google not indexing my video?',
    answer:
      'Search Console\'s video indexing report gives the reason. Common ones: the video is not on a watch page, no thumbnail URL was provided, the thumbnail format or size is unsupported, or the thumbnail could not be reached. Each reason has a specific fix, which is why we start with that report.',
  },
  {
    category: 'site',
    question: 'What is VideoObject schema?',
    answer:
      'VideoObject is structured data that tells Google about a video on your page. Google requires three properties: name, which must be unique per video, thumbnailUrl and uploadDate. Description, duration and contentUrl or embedUrl help further. Clip markup can mark labelled segments, and BroadcastEvent can mark a livestream for the LIVE badge.',
  },
  {
    category: 'site',
    question: 'Do I need a video sitemap?',
    answer:
      'It helps when videos sit on many pages, load late through JavaScript or are new. A video sitemap lists each video with its page, title, thumbnail and player address so Google finds them without guessing. A site with three videos on three clear pages can manage without one.',
  },
  {
    category: 'site',
    question: 'How do I get key moments in Google results?',
    answer:
      'For a YouTube video, put timestamps and labels in the description, the same way you add chapters. For a video hosted on your own site, use Clip structured data to give each segment a start time, end time and label, or SeekToAction to tell Google where timestamps sit in your URLs. Clip needs a video of at least 30 seconds.',
  },
  // ── AI + local ─────────────────────────────────────────────────
  {
    category: 'ai',
    question: 'Do AI answers like Google AI Overviews cite YouTube videos?',
    answer:
      'Yes, often. In our 9 Oct 2026 check of Google AI Overviews for buyer questions, 65 of 212 overviews with references cited a YouTube video. Across 6,347 AI answers we collected in October 2026, youtube.com was cited in 332. The text Google lifted was usually the spoken transcript, often pointing at a specific second.',
  },
  {
    category: 'ai',
    question: 'Does a video need lots of views to be cited by AI?',
    answer:
      'No. Of 111 YouTube videos cited in our 9 Oct 2026 check of Google AI Overviews, the median had 1,571 views, 31 had under 500, and 30 were under 90 days old. What the cited videos shared was a clear spoken answer to the question, which the transcript carries.',
  },
  {
    category: 'ai',
    question: 'Is video SEO worth it for a local service business?',
    answer:
      'Yes, when the videos show the real job. A 60 second walkthrough of a roof repair, a clinic room or a finished kitchen, placed on the matching service page and named for the city you serve, gives Google a video result and gives a buyer a reason to call you over a competitor with only text.',
  },
  {
    category: 'ai',
    question: 'Should I add videos to my Google Business Profile?',
    answer:
      'Yes, short clips of real work help buyers who find you on the map. They are separate from your YouTube and website videos, so we treat them as a third place to publish the same footage. The profile work itself sits with our local SEO and Business Profile service.',
  },
  // ── Working ────────────────────────────────────────────────────
  {
    category: 'working',
    question: 'How do you measure video SEO results?',
    answer:
      'From your own accounts. Search Console shows which videos Google indexed and why others were not, plus clicks from the Videos tab and the Videos search appearance. YouTube Analytics shows the YouTube search terms that found each video. GA4 shows the calls and form fills from the pages that hold the videos. You get one plain-language report a month.',
  },
  {
    category: 'working',
    question: 'How long does video SEO take to show results?',
    answer:
      'Fixes such as watch pages, thumbnails and structured data show up in Search Console\'s video indexing report once Google recrawls the pages. Rankings and views take longer and depend on how many others answer the same question. We report what changed each month rather than promise a date.',
  },
  {
    category: 'working',
    question: 'How much do video SEO services cost?',
    answer:
      'It depends on how many videos, whether they live on YouTube, your site or both, and whether schema and sitemap changes need work in your site\'s code. FactoryJet does not publish a price list: we quote a fixed price in writing after a short scoping call, and there is no monthly minimum.',
  },
  {
    category: 'working',
    question: 'Do you guarantee views or rankings?',
    answer:
      'No. Nobody controls YouTube\'s or Google\'s ranking, and a provider that promises a position is guessing. What we commit to in writing is the task, the delivery date and a list of every change we made to your videos, pages and markup.',
  },
  {
    category: 'working',
    question: 'Do you buy views or build links to videos?',
    answer:
      'No. We do not buy views, subscribers or likes, and we do not do link building. Our work is the videos\' metadata, captions and chapters, the pages they sit on, the markup Google reads and the reporting.',
  },
  {
    category: 'working',
    question: 'Do you make the videos?',
    answer:
      'This service starts once a video exists, whether your team, a video producer or a phone made it. We make our own explainers and Shorts, so we know what search needs from a script and a caption file. If you have no videos yet, tell us on the call what you have in mind.',
  },
  {
    category: 'working',
    question: 'What access do you need?',
    answer:
      'Manager access to the YouTube channel, a user on Search Console and Google Analytics, and a login to the website for watch pages and markup. All of it is added to your own accounts, so you can remove it in a few clicks. You never hand over ownership.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

/* ── Our own measurements, used in the stat band. ── */
const STATS: ReadonlyArray<{ n: string; l: string }> = [
  { n: '332', l: 'of 6,347 AI answers to buyer questions cited youtube.com (Oct 2026)' },
  { n: '65 / 212', l: 'Google AI Overviews with references cited a YouTube video (9 Oct 2026)' },
  { n: '1,571', l: 'median views of the 111 YouTube videos those overviews cited' },
  { n: '56 / 127', l: 'YouTube references Google pointed at a specific second (11 Oct 2026)' },
];

/* ── What Google needs before a video can show in Search. ── */
const GOOGLE_CHECKLIST: ReadonlyArray<{ t: string; b: string; source: SrcKey }> = [
  {
    t: 'A watch page',
    b: 'A page where watching that one video is the main reason to visit. Google indexes only videos on watch pages. A long article with a video in the middle is not one.',
    source: 'googleVideo',
  },
  {
    t: 'A standard embed',
    b: 'The video sits in a video, embed, iframe or object element that Google can read, not behind a click-to-load script that hides it.',
    source: 'googleVideo',
  },
  {
    t: 'A thumbnail Google can fetch',
    b: 'A stable image URL in BMP, GIF, JPEG, PNG, WebP, SVG or AVIF, at least 60 by 30 pixels, and not transparent.',
    source: 'googleVideo',
  },
  {
    t: 'VideoObject structured data',
    b: 'name, thumbnailUrl and uploadDate are required. Every video gets its own unique name, never the page title copied onto five videos.',
    source: 'googleVideoSchema',
  },
  {
    t: 'Key moments',
    b: 'Timestamps in the YouTube description, or Clip and SeekToAction markup for videos on your own host, so Google can link straight to the right second.',
    source: 'googleVideoSchema',
  },
  {
    t: 'A video sitemap',
    b: 'Each video listed with its page, title, thumbnail and player address, so Google does not have to find it by chance.',
    source: 'googleVideo',
  },
  {
    t: 'A check in Search Console',
    b: 'The video indexing report says which videos are indexed and why the rest are not. We read it before and after every change.',
    source: 'gscVideoReport',
  },
];

/* ── What we change on YouTube. ── */
const YOUTUBE_WORK: ReadonlyArray<{ t: string; b: string; source?: SrcKey }> = [
  {
    t: 'Titles in the buyer\'s words',
    b: 'The phrase a buyer types, near the front, with the brand at the end. One clear promise per video.',
  },
  {
    t: 'Descriptions that answer first',
    b: 'The answer and your landing page link in the first lines, then context, then chapters. YouTube ranks the title, thumbnail and description above tags.',
    source: 'ytTags',
  },
  {
    t: 'Chapters',
    b: 'Timestamps starting at 00:00, at least three, each at least 10 seconds. They also feed key moments in Google.',
    source: 'ytChapters',
  },
  {
    t: 'A checked caption file',
    b: 'Automatic captions mishear product names and numbers. We upload a corrected file so the transcript, which search engines read, is right.',
    source: 'ytCaptions',
  },
  {
    t: 'Thumbnails that read small',
    b: 'Three or four words at most, one face or one object, readable on a phone in a list of ten results.',
  },
  {
    t: 'Playlists and links between videos',
    b: 'Related videos grouped so one answer leads to the next, and Shorts pointing to the longer video that carries the link.',
  },
];

/* ── Fulfilment, step by step. ── */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'We read what you have',
    b: 'Your channel, the pages that hold videos, Search Console\'s video indexing report and YouTube Analytics. We list which videos could answer a real search and which never will.',
  },
  {
    n: '02',
    t: 'We match videos to searches',
    b: 'Keyword and question research for each video worth keeping, and the page on your site each one belongs on.',
  },
  {
    n: '03',
    t: 'You approve a written quote',
    b: 'A fixed price, a scope and a delivery date. Nothing starts until you approve it.',
  },
  {
    n: '04',
    t: 'We make the changes',
    b: 'Titles, descriptions, chapters and caption files on YouTube. Watch pages, embeds, VideoObject and Clip markup and a video sitemap on your site.',
  },
  {
    n: '05',
    t: 'We report from your own data',
    b: 'A list of every change, then a monthly plain-language report from Search Console, YouTube Analytics and GA4.',
  },
];

/* ── Included and not included. ── */
const INCLUDED: ReadonlyArray<string> = [
  'Keyword and question research per video',
  'YouTube titles, descriptions and chapters',
  'Checked caption files uploaded to YouTube',
  'Thumbnail review against search results',
  'Watch pages and embeds on your site',
  'VideoObject, Clip and SeekToAction markup',
  'A video sitemap',
  'Monthly report from Search Console, YouTube Analytics and GA4',
];
const NOT_INCLUDED: ReadonlyArray<{ t: string; b: string }> = [
  { t: 'Link building', b: 'We do not do link building, for videos or for pages.' },
  { t: 'Bought views or subscribers', b: 'No paid views, likes, subscribers or comment packages.' },
  { t: 'Ranking or view guarantees', b: 'Nobody controls Google\'s or YouTube\'s ranking. We commit to the work and the date.' },
  { t: 'Work you have not approved', b: 'Every job is quoted in writing and approved before it starts.' },
  { t: 'A monthly minimum', b: 'Start with one audit of your channel and pages. Add more when it works.' },
];

const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: 'FactoryJet video SEO', isFactoryJet: true },
  { label: 'YouTube channel growth service' },
  { label: 'Video production company' },
  { label: 'Doing it yourself' },
];
const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'Main goal',
    values: [
      'Buyers find your videos on Google, YouTube and in AI answers',
      'Subscribers and views on YouTube',
      'A finished video file',
      'Whatever time allows',
    ],
  },
  {
    feature: 'Watch pages and schema on your site',
    values: ['Yes, made in your site', 'Rarely', 'Rarely', 'If someone knows how'],
  },
  {
    feature: 'Caption files and chapters',
    values: ['Checked file and chapters for every video', 'Usually', 'Sometimes delivered with the file', 'Often automatic captions only'],
  },
  {
    feature: 'Measured in',
    values: [
      'Search Console, YouTube Analytics and GA4 calls and form fills',
      'Views and subscribers',
      'Delivery of the video',
      'Views, if anyone checks',
    ],
  },
  {
    feature: 'Fits when',
    values: [
      'You have videos and want them to bring in buyers',
      'YouTube itself is your business',
      'You need videos made first',
      'You have a few videos and a free afternoon',
    ],
  },
];

const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  { href: '/services/ai-seo', t: 'AI search and SEO', b: 'Our main SEO service, including Google AI Overviews, ChatGPT and Perplexity.' },
  { href: '/services/technical-seo', t: 'Technical SEO', b: 'Crawling, indexing, structured data and speed, fixed in code.' },
  { href: '/services/local-seo', t: 'Local SEO', b: 'Map pack and near-me searches for businesses that serve a city.' },
  { href: '/services/google-business-profile-optimization', t: 'Google Business Profile', b: 'Photos, videos, services and reviews on your map listing.' },
  { href: '/services/generative-engine-optimization', t: 'Generative engine optimization', b: 'Getting named in AI answers, measured answer by answer.' },
  { href: '/services/seo-audit', t: 'SEO audit', b: 'The diagnosis on its own, with a ranked fix list.' },
  { href: '/services/seo-copywriting', t: 'SEO copywriting', b: 'The page text around your videos, written from search data.' },
  { href: '/ai-visibility-checker', t: 'AI visibility checker', b: 'Free check of whether ChatGPT and Perplexity name your business.' },
];

function SourceLinks({ ids }: { ids: ReadonlyArray<SrcKey> }) {
  if (ids.length === 0) return null;
  return (
    <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-0">
      {ids.map((id) => (
        <a
          key={id}
          href={SRC[id].url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-1.5 py-2 font-fj-mono text-xs font-semibold tracking-wide text-[#B23E13] hover:underline"
        >
          <svg width="10" height="10" viewBox="0 0 9 9" fill="none" aria-hidden="true" className="flex-shrink-0">
            <path d="M1.5 7.5L7.5 1.5M7.5 1.5H3M7.5 1.5V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {SRC[id].short}
        </a>
      ))}
    </p>
  );
}

const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

/* Hero visual: a sample video result with key moments. Labelled as an example. */
const SAMPLE_MOMENTS: ReadonlyArray<{ t: string; l: string }> = [
  { t: '00:00', l: 'What a roof leak inspection covers' },
  { t: '00:41', l: 'Where leaks usually start' },
  { t: '01:58', l: 'Repair or replace?' },
  { t: '03:12', l: 'What to ask before you hire' },
];

export default function VideoSeoPage() {
  return (
    <>
      <JsonLd id="video-seo-schema" data={[webPageSchema, serviceSchema, breadcrumbSchema]} />
      <JsonLd id="video-seo-faq-schema" data={faqSchema} />
      <SiteHeader />

      <main className="min-h-screen bg-fj-cream text-fj-ink">
        <StickyCtaLabel label="Get a video SEO quote" title="Video SEO" />
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO with the direct answer */}
        <section className="relative overflow-hidden border-b border-fj-neutral-200 bg-fj-cream pt-10 pb-14 md:pt-12 md:pb-16">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
              <div className="min-w-0 lg:col-span-7">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F05A28]/30 bg-white px-3 py-1.5">
                  <span className="font-fj-mono text-xs font-bold tracking-wide text-[#B23E13]">
                    VIDEO SEO &middot; GOOGLE &middot; YOUTUBE &middot; AI ANSWERS
                  </span>
                </div>
                <h1 className="font-fj-display text-3xl font-extrabold leading-[1.1] tracking-[-0.03em] text-fj-ink sm:text-5xl lg:text-[3.1rem]">
                  Video SEO services that get your videos found on Google and YouTube.
                </h1>
                <div id="short-answer" className="mt-5 max-w-2xl">
                  <p className="font-fj-body text-lg leading-relaxed text-fj-ink">
                    Video SEO makes your videos show up when buyers search. On YouTube we fix titles, descriptions,
                    chapters and caption files. On your website we build watch pages, VideoObject markup and a video
                    sitemap, so Google can index each video and link to the right second.
                  </p>
                  <p className="mt-4 font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                    It matters for AI answers too. In our October 2026 checks, Google AI Overviews cited YouTube videos
                    for buyer questions, and the text they lifted was the spoken transcript. Each job is quoted in
                    writing before it starts.
                  </p>
                </div>
                <div className="mt-6">
                  <HeroInlineForm
                    region="us"
                    source="services_video_seo_hero"
                    service="Video SEO"
                    submitLabel="Get a video SEO quote"
                    trustText="Send your channel or a page with video. Founder replies within 24 hours."
                  />
                </div>
                <div className="mt-5">
                  <Link
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 font-fj-body text-sm font-semibold text-fj-ink hover:opacity-70"
                  >
                    Talk to the founder
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-4 w-4">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-fj-neutral-200 pt-5 font-fj-mono text-xs text-fj-neutral-600">
                  <span>500+ businesses served</span>
                  <span>97% on-time delivery</span>
                  <span>Founded 2014</span>
                  <span>No monthly minimum</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
                  <figcaption className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                    Example: a video result with key moments
                  </figcaption>
                  <div className="mt-4 rounded-xl border border-fj-neutral-200 p-4">
                    <div className="flex items-start gap-3">
                      <div
                        aria-hidden="true"
                        className="relative flex h-16 w-28 flex-shrink-0 items-center justify-center rounded-lg bg-fj-ink"
                      >
                        <span className="block h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-white" />
                        <span className="absolute bottom-1 right-1.5 rounded bg-white/90 px-1 font-fj-mono text-[10px] font-bold text-fj-ink">
                          4:05
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="font-fj-display text-[15px] font-bold leading-snug text-fj-ink">
                          Roof leak inspection: what we check and what it costs to fix
                        </p>
                        <p className="mt-1 font-fj-mono text-[11px] text-fj-neutral-600">Sample roofing company &middot; YouTube</p>
                      </div>
                    </div>
                    <p className="mt-4 font-fj-mono text-[11px] font-bold uppercase tracking-wider text-fj-neutral-600">
                      In this video
                    </p>
                    <ol className="mt-2 grid gap-1.5">
                      {SAMPLE_MOMENTS.map((m, i) => (
                        <li
                          key={m.t}
                          className={`flex items-baseline gap-3 rounded-lg px-2.5 py-1.5 ${
                            i === 2 ? 'border border-[#F05A28]/40 bg-[#FFF8F5]' : ''
                          }`}
                        >
                          <span className="w-11 flex-shrink-0 font-fj-mono text-xs font-bold text-[#B23E13]">{m.t}</span>
                          <span className="font-fj-body text-[14px] leading-snug text-fj-ink">{m.l}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <ul className="mt-4 grid gap-1.5">
                    {['Chapters set in the description', 'Caption file checked and uploaded', 'Same video on the matching service page'].map((x) => (
                      <li key={x} className="flex items-start gap-2.5 font-fj-body text-[14px] leading-snug text-fj-neutral-600">
                        <span aria-hidden="true" className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                        {x}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 rounded-xl bg-fj-cream px-4 py-3 font-fj-body text-[13px] leading-snug text-fj-ink">
                    A buyer who searches &ldquo;repair or replace roof&rdquo; can land on 01:58, not the start.
                  </p>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* 2. STAT BAND: our own measurements */}
        <section className="border-b border-fj-neutral-200 bg-white py-12 md:py-14">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <p className="fj-eyebrow">What we measured about YouTube in AI answers</p>
            <dl className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.n} className="border-t-2 border-[#F05A28] pt-4">
                  <dt className="font-fj-display text-3xl font-extrabold tabular-nums tracking-[-0.02em] text-fj-ink">{s.n}</dt>
                  <dd className="mt-2 font-fj-body text-[15px] leading-snug text-fj-neutral-600">{s.l}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 max-w-3xl font-fj-body text-sm leading-relaxed text-fj-neutral-600">
              Our own data: answers from AI assistants and Google&rsquo;s AI features to buyer questions about
              agencies and AI services, collected in October 2026. Views were read from each cited
              video&rsquo;s YouTube page.
            </p>
          </div>
        </section>

        {/* 3. WHAT GOOGLE NEEDS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Video SEO on Google</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  7 things Google needs before your video can show in Search.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Uploading to YouTube does not put a video on your website. For Google to show your own page with a
                  video result, the page and the video both have to meet Google&rsquo;s rules.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  The first rule is the easiest to miss. A video placed inside a long page about something else is
                  not on a watch page, so Google may never index it as a video.
                </p>
              </div>
              <ol className="grid gap-3 lg:col-span-8">
                {GOOGLE_CHECKLIST.map((c, i) => (
                  <li key={c.t} className="flex items-start gap-4 rounded-2xl border border-fj-neutral-200 bg-white p-5">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-fj-cream font-fj-mono text-xs font-bold text-[#B23E13]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-fj-display text-base font-bold text-fj-ink">{c.t}</h3>
                      <p className="mt-1 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{c.b}</p>
                      <SourceLinks ids={[c.source]} />
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 4. YOUTUBE SEO */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <p className="fj-eyebrow">YouTube SEO services</p>
            <h2 className="mt-4 max-w-3xl font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
              What we change on each YouTube video.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              YouTube&rsquo;s own help says tags play a minimal role and that the title, thumbnail and description
              matter more. So that is where the work goes, plus the two things most channels skip: chapters and a
              checked caption file.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
              {YOUTUBE_WORK.map((w, i) => (
                <li
                  key={w.t}
                  className={`flex flex-col rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 ${
                    i % 4 === 0 || i % 4 === 3 ? 'lg:col-span-7' : 'lg:col-span-5'
                  }`}
                >
                  <h3 className="font-fj-display text-lg font-bold text-fj-ink">{w.t}</h3>
                  <p className="mt-1.5 flex-1 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{w.b}</p>
                  {w.source ? <SourceLinks ids={[w.source]} /> : null}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5. AI ANSWERS + TRANSCRIPTS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">YouTube in AI answers</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  AI answers quote what is said in the video, so the transcript has to be right.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  On 11 Oct 2026 we looked at 127 YouTube references in Google&rsquo;s AI answers. The text Google
                  lifted came from the spoken transcript, and 56 of the 127 pointed at a specific second of the video.
                  The picture on screen did not carry the citation. The words did.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  Big channels are not required. Of the 111 YouTube videos cited in our 9 Oct check, 31 had under 500
                  views and 30 were less than 90 days old.
                </p>
              </div>
              <div className="grid gap-4 lg:col-span-7">
                {[
                  {
                    t: 'Say the answer out loud, early',
                    b: 'A video that states the answer in the first 30 seconds, in the words a buyer uses, gives the transcript a sentence worth quoting.',
                  },
                  {
                    t: 'Upload a checked caption file',
                    b: 'Automatic captions are made by speech recognition, in the video\'s default language only. They misspell names and numbers, and that is the text AI reads.',
                  },
                  {
                    t: 'Chapters that match questions',
                    b: 'A chapter titled with the question gives Google a timestamp to point at, the same way it points at a heading on a page.',
                  },
                  {
                    t: 'The same answer on your page',
                    b: 'Embed the video on the page that answers the same question in text, so both your page and your video can be cited.',
                  },
                ].map((x) => (
                  <div key={x.t} className="rounded-2xl border border-fj-neutral-200 bg-white p-6">
                    <h3 className="font-fj-display text-lg font-bold text-fj-ink">{x.t}</h3>
                    <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{x.b}</p>
                  </div>
                ))}
                <SourceLinks ids={['ytCaptions', 'ytChapters']} />
              </div>
            </div>
          </div>
        </section>

        {/* 6. LOCAL VIDEO */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">Local video SEO</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  Local video for service businesses: one real job, three places.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  A roofer, dentist, HVAC company or law firm does not need a studio. A clear phone video of a real job
                  or a real room, published in the right three places, does more than a polished brand film nobody
                  searches for.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  We put the walkthrough on the matching service page rather than a separate gallery page, so the page
                  that should rank for the service also carries the video.
                </p>
              </div>
              <ol className="grid gap-3 lg:col-span-7">
                {[
                  {
                    t: 'YouTube',
                    b: 'Titled with the service and the city, chapters for each step, a checked caption file and your page link on the first line.',
                  },
                  {
                    t: 'Your service page',
                    b: 'Embedded on the page for that service, with VideoObject markup, so Google can show it as a video result for local searches.',
                  },
                  {
                    t: 'Your Google Business Profile',
                    b: 'A short clip of the same job on your map listing, for buyers who find you in the map pack.',
                    href: '/services/google-business-profile-optimization',
                    link: 'Business Profile optimization',
                  },
                ].map((x, i) => (
                  <li key={x.t} className="flex items-start gap-4 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white font-fj-mono text-xs font-bold text-[#B23E13]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-fj-display text-base font-bold text-fj-ink">{x.t}</h3>
                      <p className="mt-0.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{x.b}</p>
                      {x.href ? (
                        <Link
                          href={x.href}
                          className="mt-2 inline-flex min-h-11 items-center font-fj-body text-sm font-semibold text-[#B23E13] underline underline-offset-4"
                        >
                          {x.link}
                        </Link>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <p className="mt-8 max-w-3xl font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
              The rest of local search, from the map pack to service areas, sits with our{' '}
              <Link href="/services/local-seo" className="font-semibold text-[#B23E13] underline underline-offset-4">
                local SEO service
              </Link>
              .
            </p>
          </div>
        </section>

        {/* 7. HOW WE WORK ON OUR OWN VIDEOS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">What we do on our own channel</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  We publish our own videos the same way.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  We make our own explainers and Shorts, rendered in code from a written script. That means every
                  video we publish already has an exact transcript, so the caption file we upload matches the spoken
                  words line for line.
                </p>
              </div>
              <ul className="grid gap-3 lg:col-span-7">
                {[
                  { t: 'A caption file with every video', d: 'Uploaded from the script, never left to automatic captions.' },
                  { t: 'Chapters on every long video', d: 'Generated from the script’s sections, starting at 00:00.' },
                  { t: 'Shorts that point to a long video', d: 'A Short’s description cannot carry a clickable link, so each one points to a longer explainer.' },
                  { t: 'The landing page link on line one', d: 'In the long video’s description, above everything else.' },
                ].map((x) => (
                  <li key={x.t} className="rounded-2xl border border-fj-neutral-200 bg-white p-5">
                    <p className="font-fj-display text-lg font-bold text-fj-ink">{x.t}</p>
                    <p className="mt-1 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{x.d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 8. PROCESS */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">How video SEO works with us</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  Five steps from your channel to a monthly report.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Each job is quoted at a fixed price in writing and starts only after you approve it. Across all our
                  projects we deliver 97% on time.
                </p>
              </div>
              <ol className="grid gap-4 lg:col-span-8">
                {PROCESS.map((p) => (
                  <li key={p.n} className="flex items-start gap-4 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white font-fj-mono text-sm font-bold text-[#B23E13]">
                      {p.n}
                    </div>
                    <div>
                      <h3 className="font-fj-display text-lg font-bold text-fj-ink">{p.t}</h3>
                      <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{p.b}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline="Have videos that nobody finds? Send us the channel."
          sub="Send your YouTube channel or a page with video on it. We read Search Console's video report and your YouTube search terms, then send a fixed quote you approve before anything starts."
          label="Get a video SEO quote"
        />

        {/* 9. MEASUREMENT */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">How we measure</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  Measured in your own Search Console and YouTube Analytics.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Every number in our report comes from an account you own, so you can check it yourself. No invented
                  score, and no views counted as if they were customers.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  One report a month, in plain language, with a list of every change we made.
                </p>
              </div>
              <ul className="grid gap-3 lg:col-span-7">
                {[
                  {
                    t: 'Search Console: video indexing report',
                    d: 'How many of your videos are eligible for video features in Google, and the reason for each one that is not.',
                    s: 'gscVideoReport' as SrcKey,
                  },
                  {
                    t: 'Search Console: Video search type and Videos appearance',
                    d: 'Clicks and impressions from the Google Videos tab, and from video results on the main results page.',
                    s: 'gscPerformance' as SrcKey,
                  },
                  {
                    t: 'YouTube Analytics: YouTube search terms',
                    d: 'The exact words viewers searched when they found each video, from the YouTube search traffic source card.',
                    s: 'ytReach' as SrcKey,
                  },
                  {
                    t: 'GA4: calls and form fills',
                    d: 'What happened on the pages that hold your videos, so a view can be tied to a lead.',
                  },
                ].map((x) => (
                  <li key={x.t} className="rounded-2xl border border-fj-neutral-200 bg-white p-5">
                    <p className="font-fj-display text-lg font-bold text-fj-ink">{x.t}</p>
                    <p className="mt-1 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{x.d}</p>
                    {'s' in x && x.s ? <SourceLinks ids={[x.s]} /> : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 10. INCLUDED / NOT INCLUDED */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <p className="fj-eyebrow">Scope</p>
            <h2 className="mt-4 max-w-3xl font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
              What is and is not included.
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
              <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 lg:col-span-7">
                <h3 className="font-fj-display text-xl font-bold text-fj-ink">Included, job by job</h3>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {INCLUDED.map((x) => (
                    <li key={x} className="flex items-start gap-2.5 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                      <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                      {x}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                  Each item is quoted on its own. You can start with an audit of your channel and the pages that hold
                  your videos.
                </p>
              </div>
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 lg:col-span-5">
                <h3 className="font-fj-display text-xl font-bold text-fj-ink">Not included</h3>
                <ul className="mt-4 grid gap-3">
                  {NOT_INCLUDED.map((x) => (
                    <li key={x.t}>
                      <p className="font-fj-display text-base font-bold text-fj-ink">{x.t}</p>
                      <p className="mt-0.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{x.b}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 11. COMPARISON */}
        <ComparisonTable
          eyebrow="Ways to get your videos found"
          headline="Video SEO, channel growth, production or doing it yourself."
          lead="Each fits a different business. A channel growth service suits a business whose product is YouTube itself. Video SEO fits when your videos exist to bring in buyers."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer="General patterns, not a review of any named provider."
          scrollRegionLabel="Comparison of ways to get business videos found in search"
        />

        {/* 12. RELATED */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <p className="fj-eyebrow">Next to this page</p>
            <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">Related SEO services.</h2>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
              {RELATED.map((r, i) => (
                <li key={r.href} className={i % 4 === 0 || i % 4 === 3 ? 'lg:col-span-7' : 'lg:col-span-5'}>
                  <Link
                    href={r.href}
                    className="block h-full rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 transition-colors hover:border-[#F05A28]"
                  >
                    <span className="font-fj-display text-lg font-bold text-fj-ink">{r.t}</span>
                    <span className="mt-1.5 block font-fj-body text-sm leading-relaxed text-fj-neutral-600">{r.b}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 13. SOURCES */}
        <section className="bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Method</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  Sources, checked on {CHECKED_ON}.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Every Google and YouTube rule on this page was read from the help pages listed here. The AI citation
                  figures are our own October 2026 measurements. Platform rules change, so check the linked page before
                  you act on one.
                </p>
                <p className="mt-6 font-fj-mono text-xs leading-relaxed text-fj-neutral-600">
                  Published {PAGE_PUBLISHED} &middot; Reviewed {PAGE_MODIFIED} &middot;{' '}
                  <Link href="/author/bhavesh-barot" className="underline underline-offset-4">
                    Bhavesh Barot
                  </Link>
                  , Founder
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2 lg:col-span-8">
                {SOURCE_KEYS.map((k) => (
                  <li key={k}>
                    <a
                      href={SRC[k].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center font-fj-body text-sm leading-snug text-fj-ink underline decoration-fj-neutral-200 underline-offset-4 hover:decoration-[#F05A28]"
                    >
                      {SRC[k].label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 14. FAQ */}
        <FAQ
          eyebrow="Video SEO FAQ"
          headline="Video SEO and YouTube SEO questions, answered."
          lead="What businesses ask before they hand their videos to someone else. Answers about our process describe how FactoryJet works today."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 15. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="Video SEO"
          headline="Your videos already exist. Let buyers find them."
          sub="Send your channel or a page with video. We read your Search Console and YouTube data, quote each job in writing and report every month from your own accounts."
          primaryCta={{ label: 'Get a video SEO quote', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="Fixed quote per job. No bought views. No monthly minimum."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
