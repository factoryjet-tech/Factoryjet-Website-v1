import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import SeoCityLinksUS from '@/components/v2/SeoCityLinksUS';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import FinalCTA from '@/components/v2/FinalCTA';

import HeroInlineForm from '@/components/HeroInlineForm';
import './dallas-seo.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /dallas/seo :: Dallas local-SEO city page. Built 2026-08-12.

   Target keyword: "seo agency dallas", 1,000/mo, KD 22. The live SERP renders
   NO AI Overview on this query, so the win is organic rank plus human
   conversion, not an AIO citation.

   Layout is "Proximity Dial", a new one rather than a reskin of Austin's glass
   stack: CSS-only concentric-radius hero, an asymmetric bento of real Dallas
   districts, the demand data as a real table on the single dark section, and
   the rival breakdown as a second real table.

   Data provenance:
   - keyword volumes and difficulty: DataForSEO, US location 2840, pulled live
     2026-08-12 (search_volume + bulk_keyword_difficulty).
   - page-one rivals: live SERP for "seo agency dallas",
     pipeline/research/briefs/dallas-seo.json.
   - rival locations confirmed by fetching each firm's own site on 2026-08-12
     (Thrive: Arlington TX; Dallas SEO Dogs: Dallas + Allen TX; Sofia SEO:
     Dallas TX). Coalition Technologies' contact page returned 403, so no
     head-office claim is made about them anywhere on this page.

   Rules held: no currency values, no em dashes, no invented clients or case
   studies, no fake street address, no published pricing, exactly one dark
   section, FAQPage schema derived from the same FAQ_ITEMS array that renders.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/dallas/seo';
const UPDATED = '2026-08-12';

export const metadata: Metadata = {
  title: 'Dallas SEO Agency | Local SEO Services, Dallas TX | FactoryJet',
  description:
    'An SEO agency in Dallas built for a metro one map pin cannot cover. Local SEO, technical SEO and AI search visibility across DFW. Free audit, no lock-in.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Dallas SEO Agency | Local SEO Services, Dallas TX | FactoryJet',
    description:
      'An SEO agency in Dallas built for a metro one map pin cannot cover. Local SEO, technical SEO and AI search visibility across DFW. Free audit, no lock-in.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

/* Hero dial pins: real places, arranged around the radius. */
const PINS: { cls: string; label: string; on?: boolean }[] = [
  { cls: 'a', label: 'Downtown', on: true },
  { cls: 'b', label: 'Uptown' },
  { cls: 'c', label: 'Plano' },
  { cls: 'd', label: 'Deep Ellum' },
  { cls: 'e', label: 'Irving' },
  { cls: 'f', label: 'Garland' },
];

const FACTS: { v: string; k: string }[] = [
  { v: 'Month to month', k: 'cancel with 30 days notice' },
  { v: 'Free SEO audit', k: 'yours to keep either way' },
  { v: '7-day kickoff', k: 'not six weeks of onboarding' },
  { v: 'One senior engineer', k: 'on the work and on your calls' },
];

/* Real Dallas districts, written from the map and the employers rather than by
   swapping a city name into a template. */
const TILES: { cls: string; zone: string; h: string; p: string; q: string; src?: { t: string; u: string } }[] = [
  {
    cls: 't1',
    zone: 'Downtown / Arts District',
    h: 'Downtown, the Arts District and the courthouse blocks',
    p: 'Law firms, accountants, title companies, staffing agencies and the restaurants that feed them. People search on a phone between meetings and call one of the first three profiles they see. Category and review count decide that, not your blog.',
    q: 'attorney near me dallas',
  },
  {
    cls: 't2',
    zone: 'Uptown / Knox',
    h: 'Uptown, Knox-Henderson and Turtle Creek',
    p: 'Dentists, med spas, boutique fitness, realtors and restaurants along McKinney Avenue and Henderson. Discovery here is visual and takes about ten seconds. Fresh photos, correct hours and recent reviews beat a long service page.',
    q: 'med spa uptown dallas',
  },
  {
    cls: 't3',
    zone: 'Deep Ellum / Bishop Arts',
    h: 'Deep Ellum, Exposition Park and Bishop Arts',
    p: 'Music venues, tattoo studios, bars, coffee roasters, independent retail. These compete against the next block, not the city. Small radius, brutal inside it, which is exactly what local SEO is built for.',
    q: 'tattoo shop deep ellum',
  },
  {
    cls: 't4',
    zone: 'Design District / Market Center',
    h: 'The Design District, Trinity Groves and the Market Center',
    p: 'Showrooms, furniture, flooring, lighting, wholesale trade and the contractors who buy from them. A business-to-business market hiding inside a retail postcode: buyers arrive with a specification and a deadline, so pages must answer before anyone calls.',
    q: 'commercial flooring supplier dallas',
  },
  {
    cls: 't5',
    zone: 'Richardson / Plano',
    h: 'The Telecom Corridor, Legacy West and the northern campuses',
    p: 'Toyota Motor North America, JPMorgan Chase, Liberty Mutual and Frito-Lay run major campuses in Plano, and Richardson has branded itself the Telecom Corridor for decades. These buyers skip ads and read your site like a spec sheet.',
    q: 'managed it services dallas, 1,900 a month',
  },
  {
    cls: 't6',
    zone: 'Medical District',
    h: 'The Medical District and the practices orbiting it',
    p: 'UT Southwestern alone reports more than 25,000 employees, with Parkland and Children’s Health on the same few blocks. The practices around them compete in a tight radius where patients pick from the map, read reviews, then book.',
    q: 'dentist near me dallas',
    src: { t: 'UT Southwestern, Facts and Figures', u: 'https://www.utsouthwestern.edu/about-us/facts.html' },
  },
];

/* DataForSEO, US location 2840, pulled live 2026-08-12. Monthly volumes.
   Difficulty is DataForSEO keyword_difficulty, 0 to 100. */
const DEMAND: { kw: string; vol: string; kd: string; tone?: 'win' | 'soft' }[] = [
  { kw: 'seo company near me', vol: '14,800', kd: '22', tone: 'soft' },
  { kw: 'dallas seo', vol: '3,600', kd: '18' },
  { kw: 'local seo company near me', vol: '1,900', kd: '32', tone: 'soft' },
  { kw: 'seo company dallas', vol: '1,300', kd: '18' },
  { kw: 'seo companies in dallas', vol: '1,300', kd: '18' },
  { kw: 'seo firm dallas', vol: '1,300', kd: '22' },
  { kw: 'seo agency dallas', vol: '1,000', kd: '22' },
  { kw: 'digital marketing agency dallas', vol: '1,000', kd: '42' },
  { kw: 'seo services dallas', vol: '590', kd: '23' },
  { kw: 'seo consultant dallas', vol: '480', kd: '10', tone: 'win' },
  { kw: 'dallas seo consultant', vol: '480', kd: '14', tone: 'win' },
  { kw: 'seo expert dallas', vol: '480', kd: '22' },
  { kw: 'dallas seo services', vol: '390', kd: '23' },
  { kw: 'local seo dallas', vol: '320', kd: '5', tone: 'win' },
  { kw: 'dallas local seo', vol: '320', kd: '2', tone: 'win' },
  { kw: 'best seo company dallas', vol: '70', kd: '20' },
];

const PLAYS: { h: string; p: string; cite?: { t: string; u: string } }[] = [
  {
    h: 'Your primary category, not your business name',
    p: 'Google lists relevance first among its three local ranking factors, and relevance starts with the most specific primary category you can pick. Filing under the generic option loses the specific search.',
    cite: { t: 'Google, local ranking factors', u: 'https://support.google.com/business/answer/7091' },
  },
  {
    h: 'Distance you cannot change, so choose your ground',
    p: 'A Frisco clinic will not outrank a Deep Ellum clinic for someone standing in Deep Ellum. Decide which parts of the metroplex you genuinely serve, then build for those instead of claiming the whole map.',
  },
  {
    h: 'Review recency, not just review count',
    p: 'BrightLocal’s consumer survey found 74% of people only care about reviews from the last three months, and 47% will not use a business with fewer than 20 reviews. Twelve good reviews from 2024 read like none.',
    cite: { t: 'BrightLocal Local Consumer Review Survey', u: 'https://www.brightlocal.com/research/local-consumer-review-survey/' },
  },
  {
    h: 'One real page per place you serve',
    p: 'Not a template with the suburb name swapped out. If the Plano page could be the Garland page with two words changed, it will not rank in either, and the reader can tell.',
  },
  {
    h: 'The technical condition of the site',
    p: 'Slow pages, broken canonical tags, missing structured data and pages Google cannot crawl quietly cap everything above them. Most local agencies skip this because it is engineering, not marketing.',
  },
  {
    h: 'Answer-first writing so assistants can quote you',
    p: 'BrightLocal found use of ChatGPT and similar tools for local recommendations jumped from 6% to 45% in a year, now the third most popular source. Assistants lift short, specific sentences. Hedging never gets quoted.',
    cite: { t: 'BrightLocal Local Consumer Review Survey', u: 'https://www.brightlocal.com/research/local-consumer-review-survey/' },
  },
  {
    h: 'Name, address and phone identical everywhere',
    p: 'Unglamorous, and still the reason a lot of local rankings stall. One old suite number on a directory nobody has checked since 2019 muddies the signal.',
  },
  {
    h: 'Nobody can buy their way into the map results',
    p: 'Google states it plainly: there is no way to request or pay for a better local ranking. Ads sit above the results and stop the day you stop paying. A paid shortcut into the map pack does not exist.',
    cite: { t: 'Google, local ranking factors', u: 'https://support.google.com/business/answer/7091' },
  },
];

/* Real page-one names from the live SERP for "seo agency dallas" (2026-08-12).
   Location claims confirmed on each firm's own site that day. Named fairly, no
   disparagement, and we include ourselves with our weak spot stated. */
const RIVALS: { name: string; sub: string; good: string; ask: string; us?: boolean }[] = [
  {
    name: 'Thrive Agency',
    sub: 'Arlington, TX',
    good: 'The biggest presence here, holding two of the twelve slots we measured: its own Dallas service page and a roundup titled "11 Best Dallas SEO Companies". Also genuinely local to the metroplex.',
    ask: 'Which named person is on your monthly call a year from now?',
  },
  {
    name: 'Dallas SEO Dogs',
    sub: 'Dallas and Allen, TX',
    good: 'The genuine local incumbent. Their site describes offices in Dallas and Allen, running SEO and paid search together. If you want an agency you can drive across town to meet, fair call.',
    ask: 'How is effort split between SEO and paid, and what happens if the ads pause?',
  },
  {
    name: 'Coalition Technologies',
    sub: 'National, multi-city',
    good: 'A large operator competing from outside the metro, with deep technical and e-commerce experience and a link profile far bigger than ours. For a complex store, that depth is worth something.',
    ask: 'What does the smallest sensible engagement look like for a single-location business?',
  },
  {
    name: 'Sofia SEO',
    sub: 'Dallas, TX',
    good: 'A local challenger positioned squarely on Dallas, and its own site says it is based here. Local firms know which suburbs behave like separate markets. That is not obvious from another state.',
    ask: 'Can you see named references in your category and your part of the metroplex?',
  },
  {
    name: 'The Dallas SEO Company Inc.',
    sub: 'A Facebook page, ranking on page one',
    good: 'Worth knowing rather than hiring against. Google will rank a social profile above a real website when the website is weak. Some competition you are counting is not an agency at all.',
    ask: 'Is there a website you can actually evaluate, and does it load?',
  },
  {
    name: 'FactoryJet',
    sub: 'That is us. We serve Dallas, we are not headquartered there.',
    good: 'Engineering-first local SEO: technical repair, Business Profile work, reviews, one real page per place, AI search visibility. Month to month, free audit first.',
    ask: 'Our weak spot, stated: we are new to this result and our link profile is a fraction of the firms above. Ask for the audit and judge the work.',
    us: true,
  },
];

const LAYERS: { lt: string; h: string; p: string }[] = [
  { lt: 'Layer 01', h: 'Technical SEO and Core Web Vitals', p: 'Speed, schema, crawlability, indexing. The foundation everything sits on, and the layer most local agencies bill as an extra.' },
  { lt: 'Layer 02', h: 'Google Business Profile', p: 'Categories, services, attributes, hours, photos, posts. This is what generates the three-result map pack.' },
  { lt: 'Layer 03', h: 'Citations and NAP cleanup', p: 'Consistent name, address and phone across the directories Google trusts, duplicates removed.' },
  { lt: 'Layer 04', h: 'Review growth and response', p: 'A repeatable system to earn recent reviews and reply to them. The strongest local signal you control.' },
  { lt: 'Layer 05', h: 'Local content, one place at a time', p: 'Service and suburb pages written individually, so the Plano page is never the Garland one with two words changed.' },
  { lt: 'Layer 06', h: 'AI SEO and GEO', p: 'Entity data and answer-first structure so ChatGPT, Perplexity and AI Overviews can quote and attribute you.' },
];

type FaqGroup = { id: string; label: string };
const FAQ_GROUPS: ReadonlyArray<FaqGroup> = [
  { id: 'faq-choose', label: 'Best agencies in Dallas' },
  { id: 'faq-cost', label: 'What it costs' },
  { id: 'faq-worth', label: 'Is it worth it' },
  { id: 'faq-what', label: 'What SEO agencies do' },
  { id: 'faq-local', label: 'Local SEO' },
  { id: 'faq-ai', label: 'SEO and AI' },
  { id: 'faq-diy', label: 'Doing it yourself' },
  { id: 'faq-us', label: 'Working with us' },
];

/* Grounded in the live People-Also-Ask data in
   pipeline/research/briefs/dallas-seo.json. Phrasing kept the way a person
   actually types. Where the question is generic, the answer is generic and any
   Dallas detail in it is real. */
const FAQ_ITEMS: ReadonlyArray<{ q: string; a: string; cat: string }> = [
  {
    cat: 'faq-choose',
    q: 'What are the best SEO agencies in Dallas?',
    a: 'Page one is a mix: Thrive Agency out of Arlington, Dallas SEO Dogs and Sofia SEO locally, Coalition Technologies nationally, plus directories from Semrush and Clutch and a Reddit thread. Rather than trusting anyone’s ranking of themselves, ask each the same four questions: who does the work, what is in scope monthly, what happens if nothing moves, and does anything leave with you.',
  },
  {
    cat: 'faq-cost',
    q: 'How much does an agency charge for SEO?',
    a: 'It depends on what you are trying to outrank, and anyone quoting before opening your site is guessing. The drivers: locations served, how competitive your category is inside your radius, technical repair needed first, content volume, and whether links are in scope. We scope it after a free audit.',
  },
  {
    cat: 'faq-cost',
    q: 'How much should a small business spend on SEO?',
    a: 'Less than it brings in. Work out what one new customer is worth across a year, then ask how many extra customers a month would cover the work with room left over. If the answer is a handful, the scope fits. If it is dozens, start narrower.',
  },
  {
    cat: 'faq-cost',
    q: 'How much does local SEO cost in the USA?',
    a: 'There is no useful national average, because published figures blend different jobs. A single-location dentist off Preston Road and a nine-location franchise across Collin County are both doing local SEO, and the work is not the same. Ask what is included monthly and who does it.',
  },
  {
    cat: 'faq-worth',
    q: 'Is an SEO agency worth it?',
    a: 'It is worth it if people already search for what you sell and competitors sit above you. In Dallas that covers most categories: 3,600 a month search "dallas seo" alone. The real failure mode is not paying for SEO, it is paying with no way to tell whether it worked.',
  },
  {
    cat: 'faq-worth',
    q: 'Is SEO worth it for small businesses?',
    a: 'In local search you are not trying to beat the internet. You are trying to beat the handful of businesses in your category within a few miles of you. That is a fight a normal owner can win, which is not true of most channels.',
  },
  {
    cat: 'faq-what',
    q: 'What does an SEO agency do?',
    a: 'Four jobs, in this order. Fix the technical condition of the site so it can hold a ranking. Get the Google Business Profile and listings correct, because that feeds the map results. Build pages matching what people search where you serve. Then earn credibility from other sites and AI engines.',
  },
  {
    cat: 'faq-what',
    q: 'What are the four main types of SEO?',
    a: 'On-page, which is what your pages say and how they are structured. Off-page, which is links and mentions from other sites. Technical, which is speed, crawlability, structured data and indexing. And local: Business Profile, citations and reviews. For a Dallas storefront, local and technical carry the weight.',
  },
  {
    cat: 'faq-what',
    q: 'What is the 80/20 rule in SEO?',
    a: 'The idea that a small slice of the work produces most of the result. In local SEO that slice is three things: a complete, correctly categorised Google Business Profile, a steady flow of recent reviews, and a site that loads fast and says plainly what you do and where.',
  },
  {
    cat: 'faq-local',
    q: 'What is local SEO vs SEO?',
    a: 'SEO is getting found in search generally. Local SEO is getting found by people near you: in Google Maps, the three-result local pack, and "near me" searches. Local leans on your Business Profile, categories, reviews and proximity. General SEO leans on content and links. A storefront needs both.',
  },
  {
    cat: 'faq-local',
    q: 'How do I do local SEO as a beginner?',
    a: 'Claim your Google Business Profile and fill in every field. Choose the most specific primary category. Make your name, address and phone identical everywhere. Add real photos rather than stock. Set accurate hours including holidays. Then ask every happy customer for a review and reply to all of them.',
  },
  {
    cat: 'faq-local',
    q: 'Can I do local SEO myself?',
    a: 'The first chunk, absolutely, and you should. Profile, categories, hours, photos, consistent contact details and a review habit are free and yours to control. Where it gets hard is technical repair, writing pages that outrank an established competitor, and earning links from sites Google trusts.',
  },
  {
    cat: 'faq-local',
    q: 'How does Google decide local rankings?',
    a: 'Google names three factors in its own documentation: relevance, distance and prominence. Relevance is how well your profile matches what was typed, which is why categories matter. Distance you cannot change. Prominence is how well known you are, which Google ties to sites referencing you and your review count.',
  },
  {
    cat: 'faq-ai',
    q: 'Will SEO be replaced by AI?',
    a: 'It is changing, not disappearing. What moved is where the answer appears: people still search, they just as often read a summary or ask an assistant. The work that gets you named in those answers is the work that got you ranked: clear pages, real expertise, consistent data.',
  },
  {
    cat: 'faq-ai',
    q: 'Do people really use ChatGPT to find local businesses?',
    a: 'Enough that it matters now. BrightLocal’s consumer survey found use of ChatGPT and similar AI tools for local business recommendations rose from 6% to 45% in a year, making it the third most popular source. A page that buries its answer gets quoted by neither.',
  },
  {
    cat: 'faq-ai',
    q: 'Can ChatGPT do SEO?',
    a: 'It can draft, summarise and speed up research, and it is genuinely useful for that. It cannot pick your primary category, fix a canonical tag, earn a review, or get another site to reference you. Pages written entirely by a chatbot also say what every competitor says.',
  },
  {
    cat: 'faq-diy',
    q: 'Can I do SEO myself?',
    a: 'Yes, up to a point, and the early wins are free. Fill in your profile properly, get contact details consistent, publish clear pages per service, build a review habit. The wall most owners hit is technical work and competitive content, where the feedback loop is very slow.',
  },
  {
    cat: 'faq-diy',
    q: 'How long does it take for SEO to kick in?',
    a: 'Expect early movement in three to six months and stable local pack positions in six to twelve. Profile and review work often shows faster, sometimes within weeks. Content and links take longer. We win the low-difficulty searches first, so leads arrive while the bigger terms mature.',
  },
  {
    cat: 'faq-us',
    q: 'Can you guarantee a number one ranking in Dallas?',
    a: 'No, and anyone who does is guessing with your money. Google states plainly in its own documentation that there is no way to request or pay for a better local ranking. We guarantee the work, transparency about it, and your right to leave at the end of any month.',
  },
  {
    cat: 'faq-us',
    q: 'Do you require a long-term contract?',
    a: 'No. We work month to month and you can cancel with thirty days notice. Most agencies competing on this search lock clients in for six to twelve months. We would rather earn the next month than hold you to a document.',
  },
  {
    cat: 'faq-us',
    q: 'Do you work with businesses outside the city of Dallas?',
    a: 'Yes, across the metroplex: Plano, Frisco, McKinney, Richardson, Irving and Las Colinas, Garland, Mesquite, Grand Prairie, Arlington and Fort Worth. Multi-location businesses get pages written one at a time, because a template with the suburb name swapped reads as a template.',
  },
];

const OTHER_CITIES: { name: string; path: string }[] = [
  { name: 'Austin SEO', path: '/austin/seo' },
  { name: 'Arlington SEO', path: '/arlington/seo' },
  { name: 'Nashville SEO', path: '/nashville/seo' },
  { name: 'Charlotte SEO', path: '/charlotte/seo' },
];

/* One graph, one script tag. Every node below is rendered. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://factoryjet.com/#organization',
      name: 'FactoryJet',
      url: 'https://factoryjet.com',
      logo: 'https://factoryjet.com/logo.png',
      sameAs: [
        'https://www.linkedin.com/company/factoryjet',
        'https://www.crunchbase.com/organization/factoryjet',
      ],
    },
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': `${CANONICAL}#business`,
      name: 'FactoryJet Technologies',
      url: CANONICAL,
      parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
      telephone: '+919699977699',
      areaServed: [
        { '@type': 'City', name: 'Dallas', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Plano', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Frisco', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Richardson', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Irving', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Garland', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Mesquite', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Arlington', containedInPlace: { '@type': 'State', name: 'Texas' } },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Local SEO Services in Dallas, TX',
      serviceType: 'Search engine optimization',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'City', name: 'Dallas', containedInPlace: { '@type': 'State', name: 'Texas' } },
      url: CANONICAL,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Dallas SEO services',
        itemListElement: LAYERS.map((l) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: l.h, description: l.p },
        })),
      },
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#cities`,
      name: 'FactoryJet local SEO city pages',
      itemListElement: OTHER_CITIES.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        url: `https://factoryjet.com${c.path}`,
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'SEO Services', item: 'https://factoryjet.com/services/seo' },
        { '@type': 'ListItem', position: 3, name: 'Dallas SEO', item: CANONICAL },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'Dallas SEO Agency | Local SEO Services in Dallas, TX',
      description:
        'What an SEO agency in Dallas actually does, what live search demand looks like across the metroplex, who holds page one today, and where FactoryJet fits.',
      inLanguage: 'en-US',
      dateModified: UPDATED,
      isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
      about: { '@id': `${CANONICAL}#service` },
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
        jobTitle: 'Founder, FactoryJet',
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.dseo .answer p', '.dseo .faqcat p'],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      /* Derived from the SAME array the visible FAQ renders. Never written twice. */
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function DallasSeoPage() {
  return (
    <>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="bg-fj-cream">
        <div className="dseo">
          {/* HERO: proximity dial */}
          <section className="hero">
            <div className="wrap hero-grid">
              <div>
                <span className="loc"><b />Dallas, TX</span>
                <h1>The Dallas SEO agency for a metro one map pin cannot cover</h1>
                <p className="lead">
                  Downtown, Plano, Frisco, Irving and Garland are one economy and five different sets of search
                  results. We win the searches your customers type,{' '}
                  <b>starting with the ones nobody is defending</b>.
                </p>
                <HeroInlineForm region="us" source="us_dallas_seo_hero" submitLabel="Get my free SEO audit" />
                <div className="cta-row">
                  <a className="btn btn-ghost" href={CALENDLY}>Talk to the founder</a>
                </div>
              </div>
              <div className="dial" aria-hidden="true">
                <span className="ring r3" />
                <span className="ring r2" />
                <span className="ring r1" />
                <div className="core">
                  <span className="cn">3</span>
                  <span className="ck">map pack slots per search</span>
                </div>
                {PINS.map((p) => (
                  <span className={`pin ${p.cls}${p.on ? ' on' : ''}`} key={p.label}>
                    <i />{p.label}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* FACTS BAR */}
          <div className="factsbar">
            <div className="wrap row">
              {FACTS.map((f) => (
                <div className="fact" key={f.v}>
                  <div className="v">{f.v}</div>
                  <div className="k">{f.k}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ANSWER FIRST */}
          <section className="blufsec">
            <div className="wrap">
              <div className="answer">
                <span className="tag">The short answer</span>
                <p>
                  An SEO agency in Dallas gets you found by people already searching for what you sell: in Google Maps,
                  in the regular results, and now inside AI answers. The work is your Google Business Profile, the
                  technical health of your site, reviews, and a real page for each part of the metroplex you serve.
                </p>
              </div>
              <div className="bluf-support">
                <p className="prose">
                  The order matters. Start with the{' '}
                  <Link href="/services/local-seo">Google Business Profile and local listings</Link>, because that is
                  what generates the map pack. Then the technical condition of the site, where a free{' '}
                  <Link href="/services/seo-audit">SEO audit</Link> begins, since a slow site will not hold a ranking
                  however good the writing is. Then pages matching what Dallas genuinely types. Then{' '}
                  <Link href="/services/ai-seo">AI SEO and GEO</Link>: the structured data and answer-first writing
                  that lets ChatGPT, Perplexity and Google AI Overviews quote you instead of a competitor. Our free{' '}
                  <Link href="/ai-visibility-checker">AI visibility checker</Link> shows where you stand on that today.
                </p>
                <p className="prose">
                  Who does this work here? Two or three genuinely local firms, one large agency headquartered in
                  Arlington, several national operators servicing Dallas from other states, and directories that
                  outrank all of them without doing SEO for anybody. We name them below. Smaller operation? Our{' '}
                  <Link href="/services/small-business-seo">small business SEO</Link> page is the short version.
                </p>
              </div>
            </div>
          </section>

          {/* GEO BOARD */}
          <section className="geo">
            <div className="wrap">
              <span className="eyebrow">Dallas, district by district</span>
              <h2>Dallas is not one market. It is about a dozen of them.</h2>
              <p className="lead">
                Search demand splits along the same lines the metroplex does. A dental practice off Loop 12 and a venue
                on Elm Street are both doing local SEO, and almost nothing overlaps.
              </p>
              <div className="board">
                {TILES.map((t) => (
                  <div className={`tile ${t.cls}`} key={t.cls}>
                    <span className="zone">{t.zone}</span>
                    <h3>{t.h}</h3>
                    <p>{t.p}</p>
                    <span className="qs">
                      typical search: {t.q}
                      {t.src ? (
                        <>
                          {' '}&middot;{' '}
                          <a href={t.src.u} rel="nofollow noopener" target="_blank">{t.src.t}</a>
                        </>
                      ) : null}
                    </span>
                  </div>
                ))}
              </div>
              <p className="prose" style={{ marginTop: '30px' }}>
                And that is only the middle of it. Irving and Las Colinas run on corporate services and logistics by
                the airport. Frisco and McKinney are home services and orthodontists in neighbourhoods that did not
                exist fifteen years ago.{' '}<Link href="/arlington/seo">Arlington</Link> and Fort Worth are a separate
                market again. An agency selling you &quot;Dallas SEO&quot; without asking which Dallas is selling you a
                template.
              </p>
            </div>
          </section>

          {/* DEMAND: the single dark section */}
          <section className="demand">
            <div className="wrap">
              <span className="eyebrow">Real demand, pulled 2026-08-12</span>
              <h2>What Dallas actually types into Google</h2>
              <p className="lead">
                Live US search volumes and difficulty from DataForSEO, pulled 12 August 2026. Difficulty runs 0 to
                100. Read where the numbers are soft, because that gap is the whole plan.
              </p>
              <div className="tablewrap">
                <table>
                  <caption>Dallas SEO search demand, DataForSEO, United States, August 2026</caption>
                  <thead>
                    <tr>
                      <th scope="col">Search term</th>
                      <th scope="col">Searches a month</th>
                      <th scope="col">Difficulty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DEMAND.map((d) => (
                      <tr key={d.kw} className={d.tone ?? undefined}>
                        <th scope="row">{d.kw}</th>
                        <td className="num">{d.vol}</td>
                        <td className="num">{d.kd}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="prose">
                Two things jump out. The head terms are <b>not</b> brutal: a cluster worth 1,000 to 3,600 searches a
                month at difficulty 17 to 23 is a fight a focused team can win inside a year. And the soft spots are
                where the money is.{' '}
                <b>&quot;dallas local seo&quot; scores 2, &quot;local seo dallas&quot; scores 5, &quot;seo consultant
                dallas&quot; scores 10.</b> Those carry 320 to 480 searches a month with almost nobody defending them,
                and the people typing them are further along than anyone typing the head term. We win those first, so
                leads arrive before the big terms mature.
              </p>
              <p className="prose">
                One more: &quot;digital marketing agency dallas&quot; carries the same volume as our target term at
                double the difficulty, so the generalist label means a harder fight for identical traffic. The greyed
                rows are national terms.
              </p>
            </div>
          </section>

          {/* PLAYS: listicle */}
          <section className="plays">
            <div className="wrap">
              <span className="eyebrow">The short list</span>
              <h2>Eight things that decide whether you show up in Dallas</h2>
              <p className="lead">
                Roughly in order of impact. The first four are free, and most businesses have not done them.
              </p>
              <ol className="playlist">
                {PLAYS.map((p) => (
                  <li key={p.h}>
                    <h3>{p.h}</h3>
                    <p>{p.p}</p>
                    {p.cite ? (
                      <span className="cite">
                        Source: <a href={p.cite.u} rel="nofollow noopener" target="_blank">{p.cite.t}</a>
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* MID-PAGE CTA */}
          <div className="midcta">
            <div className="wrap inner">
              <div>
                <h2>Want to know which of those eight you are failing?</h2>
                <p>
                  The free audit checks every one against your site and profile, names the businesses above you in
                  your radius, and hands you the roadmap. Yours to keep either way.
                </p>
              </div>
              <div className="cta-row">
                <ModalCTAButton label="Get your free Dallas SEO audit" region="us" modalVariant="seo" btnVariant="primary-light" />
              </div>
            </div>
          </div>

          {/* SERP: named rivals + comparison table */}
          <section className="serp">
            <div className="wrap">
              <span className="eyebrow">The SERP, honestly</span>
              <h2>Who you are actually up against for &quot;seo agency dallas&quot;</h2>
              <p className="lead">
                We pulled the live results in August 2026. Only about half of page one is an agency&apos;s own
                website. The top slot is Semrush&apos;s directory. Position four is a Reddit thread asking for a Dallas
                SEO company that is &quot;actually legitimate&quot;. Clutch holds a slot, a Facebook page another, and
                Thrive holds two.
              </p>
              <div className="ctablewrap">
                <table>
                  <caption>Page-one names for &quot;seo agency dallas&quot;, live SERP, August 2026</caption>
                  <thead>
                    <tr>
                      <th scope="col">Who</th>
                      <th scope="col">What they are genuinely good at</th>
                      <th scope="col">What to ask them</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RIVALS.map((r) => (
                      <tr key={r.name} className={r.us ? 'us' : undefined}>
                        <th scope="row">
                          {r.name}
                          <small>{r.sub}</small>
                        </th>
                        <td>{r.good}</td>
                        <td>{r.ask}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="prose" style={{ marginTop: '28px' }}>
                The part most agency pages leave out: we have a little over fifty referring domains and the national
                firms above have thousands. That gap is real. It matters less for you than for us, because you need to
                rank in one metro against a dozen local rivals while we are ranking nationally against firms with sixty
                times our link profile. You get the harder version of the same job, every day.
              </p>
            </div>
          </section>

          {/* IMAGE BAND: how the work runs */}
          <section className="imgband">
            <div className="wrap ibinner">
              <div className="ibimg">
                <img
                  src="/images/us/dallas-seo/dallas-local-seo-team.webp"
                  alt="Three colleagues reviewing a client website layout together on a laptop in a bright office"
                  width={1216}
                  height={704}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div>
                <span className="eyebrow">How it runs</span>
                <h2>Senior people on your account, every month</h2>
                <p className="lead">
                  No account managers relaying questions to someone you never meet. The engineer who writes the fixes
                  explains them on the same call.
                </p>
                <div className="ibstats">
                  <div className="ibstat">
                    <div className="iv">Free audit first</div>
                    <div className="ik">findings and roadmap, yours to keep either way</div>
                  </div>
                  <div className="ibstat">
                    <div className="iv">7 days to kickoff</div>
                    <div className="ik">from signed scope to work actually starting</div>
                  </div>
                  <div className="ibstat">
                    <div className="iv">You own everything</div>
                    <div className="ik">profile, content, citations and accounts stay yours</div>
                  </div>
                </div>
                <div className="cta-row">
                  <ModalCTAButton label="See where you rank in Dallas" region="us" modalVariant="seo" btnVariant="primary-light" />
                </div>
              </div>
            </div>
          </section>

          {/* THE STACK */}
          <section className="stacksec">
            <div className="wrap">
              <span className="eyebrow">What we run each month</span>
              <h2>Dallas SEO services, built like software</h2>
              <p className="lead">
                One monthly scope, the whole stack, no add-on surprises. Every layer sits on the engineering
                foundation at layer one.
              </p>
              <div className="stack">
                {LAYERS.map((l) => (
                  <div className="layer" key={l.lt}>
                    <span className="lt">{l.lt}</span>
                    <h3>{l.h}</h3>
                    <p>{l.p}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FOUNDER */}
          <section className="founder">
            <div className="wrap fgrid">
              <div>
                <span className="eyebrow">Who you will be talking to</span>
                <h2>An SEO consultant who can read a waterfall chart</h2>
                <p className="prose">
                  FactoryJet is led by Bhavesh Barot, who has spent more than a decade building sites and search
                  programmes for smaller businesses. This page leads with technical work for a reason: we build
                  software as well as market it, and in a metro where so many buyers are engineers or procurement
                  staff, a badly built site loses the deal before search gets a chance. The offer: free audit, written
                  scope, month-to-month terms, and the person doing the work on your calls.
                </p>
                <div className="ibimg" style={{ marginTop: '28px' }}>
                  <img
                    src="/images/us/dallas-seo/dallas-seo-consultant-call.webp"
                    alt="An SEO consultant wearing a headset talking a client through a website layout on a video call"
                    width={1216}
                    height={704}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>
              <div className="callcard">
                <div className="avatar">BB</div>
                <div className="nm">Bhavesh Barot</div>
                <div className="ti">Founder, FactoryJet. 10+ years building for SMBs.</div>
                <p className="quotebit">
                  &quot;Thirty minutes, no pitch deck. Bring your site and your toughest question.&quot;
                </p>
                <a className="btn" href={CALENDLY}>Book a call with the founder</a>
                <p className="micro">Calendly, 30 minutes, no commitment</p>
              </div>
            </div>
          </section>

          {/* NEAR ME */}
          <section className="imgband">
            <div className="wrap ibinner">
              <div>
                <span className="eyebrow">Near-me searches</span>
                <h2>Most of this is decided before anyone reaches your website</h2>
                <p className="lead">
                  Somebody types a category and &quot;near me&quot;, glances at three profiles, reads two reviews and
                  taps call. Your site never enters it. So we start with the profile, then fix the site so it holds
                  what the profile earns.
                </p>
                <div className="ibstats">
                  <div className="ibstat">
                    <div className="iv">Relevance, distance, prominence</div>
                    <div className="ik">the three factors Google names in its own local ranking documentation</div>
                  </div>
                  <div className="ibstat">
                    <div className="iv">Two of the three are yours</div>
                    <div className="ik">you cannot move distance, you can fix the other two this month</div>
                  </div>
                </div>
                <div className="cta-row">
                  <ModalCTAButton label="Get your free Dallas SEO audit" region="us" modalVariant="seo" btnVariant="primary-light" />
                </div>
              </div>
              <div className="ibimg">
                <img
                  src="/images/us/dallas-seo/dallas-storefront-owner.webp"
                  alt="A shop owner showing a customer her business listing on a phone behind the counter of a bright boutique"
                  width={1024}
                  height={672}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="faq">
            <div className="wrap">
              <span className="eyebrow">Dallas SEO FAQ</span>
              <h2>Questions, answered the way we would on a call</h2>
              <p className="lead">
                {FAQ_ITEMS.length} questions taken from what people actually search, including the money ones most
                agency sites skip.
              </p>
              <div className="faqgrid">
                <nav className="faqnav">
                  {FAQ_GROUPS.map((g) => (
                    <a href={`#${g.id}`} key={g.id}>
                      {g.label} <span className="ct">{FAQ_ITEMS.filter((i) => i.cat === g.id).length}</span>
                    </a>
                  ))}
                  <p className="faqnavhelp">
                    Cannot find your answer?<br />
                    <a href={CALENDLY}>Talk to the founder</a>
                  </p>
                </nav>
                <div>
                  {FAQ_GROUPS.map((g) => (
                    <div className="faqcat" id={g.id} key={g.id}>
                      <p className="ch">{g.label}</p>
                      {FAQ_ITEMS.filter((i) => i.cat === g.id).map((it, i) => (
                        <details key={it.q} open={g.id === 'faq-choose' && i === 0}>
                          <summary>{it.q}</summary>
                          <p>{it.a}</p>
                        </details>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* LINK FOOT */}
          <div className="linkfoot">
            <div className="wrap">
              <p>
                Dallas SEO, month to month, free audit. Services:{' '}
                <Link href="/services/seo">SEO</Link>, <Link href="/services/local-seo">local SEO</Link>,{' '}
                <Link href="/services/small-business-seo">small business SEO</Link>,{' '}
                <Link href="/services/seo-audit">SEO audit</Link>,{' '}
                <Link href="/services/seo-consulting">SEO consulting</Link>,{' '}
                <Link href="/services/ai-seo">AI SEO</Link>. Other cities:{' '}
                <Link href="/austin/seo">Austin</Link>, <Link href="/arlington/seo">Arlington</Link>,{' '}
                <Link href="/nashville/seo">Nashville</Link>, <Link href="/charlotte/seo">Charlotte</Link>,{' '}
                <Link href="/denver/seo">Denver</Link>. Last updated {UPDATED}.
              </p>
            </div>
          </div>
        </div>

        <FinalCTA
          variant="light"
          eyebrow="GET STARTED"
          headline="Find out what is holding you back in Dallas"
          sub="Start with a free Dallas SEO audit: where you stand in the map pack across the areas you serve, what is technically holding the site back, and what we would fix first."
          primaryCta={{ label: 'Get your free Dallas SEO audit', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: CALENDLY }}
          objectionHandler="Month to month, no setup fee, and the audit is yours to keep either way."
        />
        <SeoCityLinksUS currentCity="dallas" />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
