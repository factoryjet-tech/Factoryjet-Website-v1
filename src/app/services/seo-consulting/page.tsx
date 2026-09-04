import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import FinalCTA from '@/components/v2/FinalCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import HeroInlineForm from '@/components/HeroInlineForm';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/seo-consulting: US SEO consulting services landing page.

   Intent split (anti-cannibalization, read this before editing):
     - THIS page owns ADVISORY intent: "seo consulting services", "seo
       consultants services", "seo services consultant", "seo consultancy
       services", "consulting seo services". Buyer already has people who can
       execute and wants diagnosis, strategy, a roadmap, and a senior brain.
     - /services/seo owns DONE-FOR-YOU retainer intent. Buyer wants an agency
       to run the whole program. The two pages link to each other and state the
       difference in plain words so neither absorbs the other's queries.

   Build rules honoured: zero commercial figures or spend framing anywhere,
   no em dashes, plain <img> only, FinalCTA (never GetFreeQuoteCTA), exactly
   one dark section (the closing FinalCTA), no shared files touched.
   Scope-shaped buyer questions are answered via drivers (site size, catalog
   complexity, integrations, markets) with no figures attached.

   Schema: WebPage + speakable, Service, ItemList (deliverables listicle),
   FAQPage derived from FAQ_ITEMS, BreadcrumbList.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_URL = 'https://factoryjet.com/services/seo-consulting';
const REVIEWED_DATE = 'July 26, 2026';

const ORANGE = '#F05A28';
const ORANGE_DARK = '#B23E13';
const CREAM = '#FAFAF7';
const PEACH = '#FAEDE5';
const GREEN = '#0E5C46';
const GREEN_BRIGHT = '#0C7150';
const GREEN_SOFT = '#DCEFE6';
const LAV = '#5046C8';
const LAV_SOFT = '#ECEAFB';

/* ─────────────────────────────────────────────────────────────────────────────
   Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'SEO Consulting Services: Strategy & Roadmaps | FactoryJet',
  description:
    'Advisory-first SEO consulting services for US teams. Traffic diagnosis, strategy, keyword research, and an execution roadmap. Free consultation.',
  keywords: [
    'seo consulting services',
    'seo consultants services',
    'seo services consultant',
    'seo consultancy services',
    'consulting seo services',
    'seo consultant',
    'seo strategy consultant',
    'technical seo consultant',
    'fractional seo lead',
    'seo advisory services',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Consulting Services in the US: Audits, Strategy & Roadmaps | FactoryJet',
    description:
      'Advisory-first SEO consulting for US teams with in-house marketers or developers. Diagnosis, strategy, keyword and AI-query research, and a roadmap your team owns.',
    url: PAGE_URL,
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet SEO consulting services for US teams',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Consulting Services in the US: Audits, Strategy & Roadmaps | FactoryJet',
    description:
      'Advisory-first SEO consulting for US teams that already have people to execute. Diagnosis, strategy, and a roadmap your team owns.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'en-US': PAGE_URL,
      'x-default': PAGE_URL,
    },
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
   Deliverables listicle (also powers the ItemList schema)
───────────────────────────────────────────────────────────────────────────── */

type Deliverable = { n: string; title: string; body: string };

const DELIVERABLES: ReadonlyArray<Deliverable> = [
  {
    n: '01',
    title: 'A diagnosis, not a checklist',
    body:
      'The first job is finding the actual constraint. Sometimes it is crawlability. Sometimes a thin page template repeated across thousands of URLs. Sometimes the site is fine and nobody has ever earned an authoritative backlink. We isolate the root cause before recommending strategic investments.',
  },
  {
    n: '02',
    title: 'Deep technical audits combining enterprise crawler logs',
    body:
      'We run rigorous crawls combining Screaming Frog, Sitebulb, Botify, and Google Search Console (GSC) API log inspection. We diagnose rendering bottlenecks, index coverage, canonical loops, schema validation, and Google Core Web Vitals (LCP, INP, CLS) with actionable developer tickets.',
  },
  {
    n: '03',
    title: 'Keyword and AI-search intelligence grounded in real data',
    body:
      'Competitive intelligence utilizing Ahrefs, Semrush, and Google Search Console query logs. We identify commercial search intent, AI Overview citation triggers, and untapped keyword clusters while resolving keyword cannibalization across existing landing pages.',
  },
  {
    n: '04',
    title: 'A content architecture, not a list of blog titles',
    body:
      'Which pages should exist, what each one is allowed to rank for, and how they link together. This is where most sites bleed: multiple pages competing for one query, so none of them wins. We assign one owner per topic and fix internal link hierarchy.',
  },
  {
    n: '05',
    title: 'A prioritised 90-day execution roadmap',
    body:
      'Every recommendation gets an expected impact score, an effort estimate in engineering or writing hours, and a clear sequence. Your internal engineering team can pick up ticket number one on Monday morning without ambiguity.',
  },
  {
    n: '06',
    title: 'Competitor teardowns that explain the visibility gap',
    body:
      'Structural competitive analysis powered by Ahrefs, Semrush, and Moz domain metrics. We dissect why top-ranking competitors win: content depth, page templates, referring domain velocity, and which structural advantages you can close first.',
  },
  {
    n: '07',
    title: 'Executive measurement in GA4, BigQuery & Looker Studio',
    body:
      'Performance tracking configured through Google Analytics 4 (GA4), BigQuery exports, and Looker Studio executive dashboards. We tie search impressions and rankings directly to qualified leads, pipeline creation, and closed customer revenue.',
  },
  {
    n: '08',
    title: 'Multi-location and local citation architecture',
    body:
      'For regional and multi-location brands, we audit and synchronize Google Business Profile (GBP), BrightLocal, and Whitespark citation data to dominate local map pack queries.',
  },
  {
    n: '09',
    title: 'A standing strategic review and algorithmic monitoring',
    body:
      'Recurring advisory reviews to evaluate roadmap execution, audit staging builds for technical regressions, and adapt your SEO strategy to Google core updates and evolving AI search landscapes.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Comparison table data
───────────────────────────────────────────────────────────────────────────── */

type CompRow = { label: string; consultant: string; agency: string; inhouse: string; diy: string };

const COMPARISON_ROWS: ReadonlyArray<CompRow> = [
  {
    label: 'Who sets the strategy',
    consultant: 'A senior specialist, working directly with you',
    agency: 'The agency, inside its own process',
    inhouse: 'Your hire, once they have context',
    diy: 'You, guided by tool defaults',
  },
  {
    label: 'Who does the execution',
    consultant: 'Your team, with direction and review',
    agency: 'The agency team',
    inhouse: 'Your hire, plus whoever they can borrow',
    diy: 'You and whoever has spare hours',
  },
  {
    label: 'Time to useful output',
    consultant: 'Fast. Diagnosis starts in week one',
    agency: 'Moderate. Onboarding then ramp',
    inhouse: 'Slow. Hiring, then ramp, then output',
    diy: 'Immediate data, slow judgement',
  },
  {
    label: 'Breadth of pattern recognition',
    consultant: 'High. Many sites, many verticals',
    agency: 'High, but often filtered through juniors',
    inhouse: 'Deep on your business, narrow elsewhere',
    diy: 'Limited to what the tool flags',
  },
  {
    label: 'Knowledge that stays with you',
    consultant: 'High. Transfer is part of the job',
    agency: 'Low. It leaves when the retainer ends',
    inhouse: 'High, until they resign',
    diy: 'High, but often incomplete',
  },
  {
    label: 'Best when',
    consultant: 'You have hands but no senior direction',
    agency: 'You have neither hands nor direction',
    inhouse: 'SEO is a permanent core channel',
    diy: 'The site is small and simple',
  },
  {
    label: 'Main failure mode',
    consultant: 'Roadmap never gets implemented',
    agency: 'Busywork billed as progress',
    inhouse: 'One person, no second opinion',
    diy: 'Fixing symptoms, missing the constraint',
  },
  {
    label: 'Commitment',
    consultant: 'Month to month, engagement scoped to a goal',
    agency: 'Often a six to twelve month lock-in',
    inhouse: 'A salaried role',
    diy: 'Cancel any time',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ data: 30 items across 6 categories, grounded in live US PAA
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'The basics' },
  { key: 'compare', label: 'Consultant vs agency vs in-house' },
  { key: 'engagement', label: 'How an engagement works' },
  { key: 'results', label: 'Results & measurement' },
  { key: 'ai', label: 'AI search & the 2026 reality' },
  { key: 'fit', label: 'Fit, industries & access' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  /* ── The basics ─────────────────────────────────────────────────────── */
  {
    category: 'basics',
    question: 'What is an SEO consultant?',
    answer:
      'An SEO consultant is a senior specialist you hire for judgement rather than for hands. They audit your site, work out why organic traffic is stuck, decide what to fix and in what order, and hand your team a plan they can execute. The consultant owns the diagnosis and the strategy. Your team owns shipping it. That division is the point: you keep control and the institutional knowledge stays with you.',
  },
  {
    category: 'basics',
    question: 'What is an SEO agency?',
    answer:
      'An SEO agency is a done-for-you service. You hand over a goal, the agency assigns a team, and they run the whole program: technical fixes, content production, link and citation work, and reporting. The tradeoff versus consulting is control and knowledge transfer. An agency suits you when you have no internal capacity to execute. A consultant suits you when you have writers and developers but nobody senior enough to point them at the right work.',
  },
  {
    category: 'basics',
    question: 'What do SEO consulting services actually include?',
    answer:
      'A technical audit written as developer tickets, keyword and AI-query research, a content architecture that assigns one page per topic so your own pages stop competing with each other, competitor teardowns, analytics and Search Console configured so results tie to leads, a prioritised roadmap, and working sessions to transfer the thinking to your team. Some engagements add ongoing review so the plan survives releases and priority changes.',
  },
  {
    category: 'basics',
    question: 'Is SEO consulting the same as an SEO audit?',
    answer:
      'An audit is one deliverable inside consulting. The audit tells you what is wrong. Consulting tells you which of those things matter, in what order, why, and what to do when your developers say the fix is too expensive. Plenty of businesses buy an audit, read it once, and change nothing. If you only need the document, our SEO audit service covers it. If you need someone to make the plan land, that is consulting.',
  },
  {
    category: 'basics',
    question: 'Is SEO worth it for small businesses?',
    answer:
      'For most, yes, with one condition: enough patience for it to compound. Organic traffic keeps arriving after you stop paying for it, which is the opposite of ads. It does not pay off for businesses with almost no search demand for what they sell, or for the ones that quit at month three. If you are unsure which you are, the honest first step is checking whether anyone searches for your service in your market. That takes an afternoon, and we will tell you if the answer is no.',
  },
  {
    category: 'basics',
    question: 'What is a fractional SEO lead?',
    answer:
      'It is a consulting arrangement where a senior specialist acts as your head of SEO on a part-time, ongoing basis: sitting in your planning meetings, reviewing work before it ships, and owning the roadmap. It suits companies that need consistent senior direction but do not have enough SEO work to justify a full-time executive hire. Practically, it is the same skill set as a project engagement, applied continuously rather than in one burst.',
  },

  /* ── Consultant vs agency vs in-house ───────────────────────────────── */
  {
    category: 'compare',
    question: 'SEO consultant vs SEO agency: which one do I need?',
    answer:
      'Answer one question honestly. Do you have people who can write and ship? If yes, hire a consultant. Direction is your gap, not capacity, and an agency retainer will duplicate work you already pay for. If no, hire an agency, because a brilliant roadmap that nobody implements is worth nothing. The failure mode of consulting is a plan that sits in a folder. The failure mode of a retainer is busywork billed as progress. Pick the one whose failure mode you can actually manage.',
  },
  {
    category: 'compare',
    question: 'Should I hire an in-house SEO or use a consultant?',
    answer:
      'Hire in-house when SEO is a permanent core channel with enough continuous work to keep someone busy and growing. Use a consultant when you need senior judgement now, want a second opinion on an in-house plan, or the work is bursty: a migration, a replatform, a new market. A common pattern is one in-house SEO doing the daily work with a consultant reviewing strategy, because a single internal person with no peer review tends to drift.',
  },
  {
    category: 'compare',
    question: 'Can I use a consultant alongside my existing agency?',
    answer:
      'Yes, and it is a normal arrangement. The consultant acts as your technical counterpart: reviewing the agency roadmap, checking that reported work actually shipped, and translating recommendations for your developers. It works best when everyone knows the setup up front. It goes badly when it is a covert audit of the incumbent, so we tell the agency what we are doing.',
  },
  {
    category: 'compare',
    question: 'What is the best SEO agency for e-commerce?',
    answer:
      'The right one for an e-commerce store is whoever can prove they have handled faceted navigation, variant and duplicate product URLs, thin or empty category pages, out-of-stock handling, and the specific platform you run. Ask for a walkthrough of how they solved a faceted-navigation index bloat problem. Anyone who cannot answer that in detail has not done real e-commerce SEO. That question filters shortlists faster than any award badge. Our e-commerce work sits under our SEO services and e-commerce SEO pages.',
  },
  {
    category: 'compare',
    question: 'Are SEO consultants and SEO consultancy services the same thing?',
    answer:
      'In practice, yes. The terms get used interchangeably. What actually varies is whether you are buying one person or a team behind that person. Ask directly: who runs my account, who does the analysis, and who shows up on the calls. If the answer to those three is different people, you are buying an agency with consulting on the label.',
  },

  /* ── How an engagement works ────────────────────────────────────────── */
  {
    category: 'engagement',
    question: 'What does an SEO consulting engagement look like?',
    answer:
      'Five phases. First, a kickoff to understand the business, the goals, and who does what internally. Second, discovery: crawl, analytics, Search Console, competitive and query research. Third, diagnosis: we name the actual constraint and defend it with evidence. Fourth, the roadmap, delivered as sequenced tickets with expected impact and effort. Fifth, implementation support: reviewing work before it ships, unblocking developers, and adjusting as things change.',
  },
  {
    category: 'engagement',
    question: 'What drives the scope of an SEO consulting engagement?',
    answer:
      'Site size and template count, catalog complexity if you sell online, how many markets or languages you run, how many systems touch the site such as a CMS, a PIM, or a headless front end, whether historical analytics is trustworthy or needs rebuilding, and how much implementation support you want after the roadmap lands. A single-template brochure site and a multi-market store with faceted navigation are different pieces of work, and scope follows that difference.',
  },
  {
    category: 'engagement',
    question: 'What access and data do you need from me?',
    answer:
      'Read access to Google Search Console and your analytics property, access to the CMS or a staging environment, and a contact on the development side. Server log files help a lot on larger sites but are optional. If you use third-party SEO tools we will read them, and if you do not, we bring our own data. We never need publishing rights unless you specifically want us implementing.',
  },
  {
    category: 'engagement',
    question: 'Who implements the recommendations?',
    answer:
      'Your team, by default. That is what makes it consulting. We write recommendations as tickets your developers and writers can pick up without translating, and we review the work before it ships. If a specific fix is beyond your team, we can implement it or bring in our delivery side, but that is a separate decision you make, never an automatic upsell.',
  },
  {
    category: 'engagement',
    question: 'How long does an engagement usually run, and how often do we meet?',
    answer:
      'A diagnosis and roadmap project has a clear start and end, usually measured in weeks, with a weekly working session throughout. Ongoing advisory runs on a lighter cadence for as long as it is useful, reviewed month to month. We would rather taper off as your team gets stronger than manufacture reasons to stay.',
  },
  {
    category: 'engagement',
    question: 'What if my developers push back on the recommendations?',
    answer:
      'Good. Pushback usually means the recommendation was under-specified or would take far more engineering time than the payoff justifies. We write recommendations with the reasoning attached so engineers can argue with the logic rather than the authority, and we will happily take a lighter fix that gets most of the outcome over a perfect one that never ships. If a fix truly cannot be built, we resequence around it.',
  },

  /* ── Results & measurement ──────────────────────────────────────────── */
  {
    category: 'results',
    question: 'How long does SEO take to show results?',
    answer:
      'Google says plainly that some changes take effect within hours while others take months, and recommends waiting weeks before judging whether a change helped. In our experience, technical fixes and quick-win content typically show first movement in 30 to 90 days, with content and authority compounding around month four to six. Anyone promising the top of Google in a week is describing something that will not hold.',
  },
  {
    category: 'results',
    question: 'Do you guarantee first-page rankings?',
    answer:
      'No, and neither can anyone else. Google states directly in its own guidance on hiring an SEO that no one can guarantee a number one ranking, and warns you off anyone claiming a special relationship with Google. What we guarantee is the quality of the diagnosis, the reasoning behind every recommendation, and full transparency about what we do not know.',
  },
  {
    category: 'results',
    question: 'How do you measure progress on a consulting engagement?',
    answer:
      'Two layers. Leading indicators tell you the work is landing: crawl and index coverage, page experience, share of target queries where you appear, and how many roadmap items actually shipped. Lagging indicators tell you it mattered: qualified organic sessions, leads, and revenue. We set both up at the start, because measuring after the fact is how disagreements about attribution begin.',
  },
  {
    category: 'results',
    question: 'What if the roadmap does not produce results?',
    answer:
      'First we check whether it was actually implemented, because in a large share of cases it was not, or only partly. If it shipped and did not work, the diagnosis was wrong and we say so, then re-run it with what we learned. A consultant who cannot admit a bad call is more expensive than one who can.',
  },

  /* ── AI search & the 2026 reality ───────────────────────────────────── */
  {
    category: 'ai',
    question: 'Is SEO dead or evolving in 2026?',
    answer:
      'Evolving, and the change is real rather than hype. AI Overviews and assistant-style answers now resolve a meaningful share of informational queries before anyone clicks, so raw impressions can rise while clicks fall. What survives is the underlying job: being the source an engine trusts enough to cite, and being the page a buyer lands on when they are ready to act. The tactics that changed are the ones that were always shallow. Clear expertise, clean technical foundations, and genuine authority still work.',
  },
  {
    category: 'ai',
    question: 'Does SEO consulting cover AI search like ChatGPT and Google AI Overviews?',
    answer:
      'Yes, and it should. We map which of your target queries currently trigger an AI summary, check whether your site is crawlable by the AI crawlers, structure content so a passage can be lifted cleanly as an answer, and build the authority signals these systems lean on. Our dedicated AI SEO page goes deeper on that side of the work.',
  },
  {
    category: 'ai',
    question: 'Do I need special files or markup to appear in AI Overviews?',
    answer:
      'No. Google states in its own guidance on AI features that there are no extra requirements beyond ordinary Search eligibility and no special machine-readable file to add. What matters is being indexed, allowing crawling in robots.txt, keeping content in text rather than locked inside images, giving people a good page experience, and making sure your structured data matches what a human actually sees on the page.',
  },
  {
    category: 'ai',
    question: 'Will AI writing tools replace SEO consultants?',
    answer:
      'They replaced a chunk of the production work, not the judgement. A model can draft a page far faster than a person. It cannot tell you that your real problem is 4,000 near-duplicate URLs eating crawl budget, or that the article you want to publish is one your own category page should be ranking for. Production got easy, which made picking the right work more valuable, not less.',
  },

  /* ── Fit, industries & access ───────────────────────────────────────── */
  {
    category: 'fit',
    question: 'Who is SEO consulting NOT right for?',
    answer:
      'Three groups. Businesses with nobody available to implement, who should hire a done-for-you team instead. Businesses that need results this quarter or the company is in trouble, where paid channels are the honest answer and SEO is the thing you start alongside it. And anyone who wants a consultant to validate a decision already made, because you will get a real second opinion and it may not be the one you wanted.',
  },
  {
    category: 'fit',
    question: 'Which industries do you consult for?',
    answer:
      'E-commerce and direct-to-consumer brands, B2B and SaaS, professional services such as legal, accounting, and consulting firms, healthcare and dental practices, home services, and multi-location local businesses. The technical work rarely changes much between them. What changes is buyer intent and how the sale actually happens, and that is what shapes the strategy.',
  },
  {
    category: 'fit',
    question: 'Do you consult for businesses outside my city or state?',
    answer:
      'Yes. Consulting is remote by nature and we work with teams across the US. If your growth depends on physical proximity and the map pack, our local SEO page is the more relevant starting point, and we will say so rather than sell you the wrong engagement.',
  },
  {
    category: 'fit',
    question: 'Who will I actually be working with?',
    answer:
      'Bhavesh Barot, the founder. The person who scopes the engagement is the person who runs the analysis and shows up on the calls. There is no account manager relaying questions to an analyst you never meet, which is the single most common complaint we hear about previous engagements.',
  },
  {
    category: 'fit',
    question: 'What should I ask any SEO consultant before hiring them?',
    answer:
      'Google publishes a short list worth stealing: ask for examples of previous work and results, ask whether they follow Google Search Essentials, ask what results they expect and in what timeframe, and ask how they measure success. Add two of our own. Ask who personally does the analysis. Ask them to describe a time they were wrong about a diagnosis and what they changed. Both answers are revealing.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD
───────────────────────────────────────────────────────────────────────────── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  dateModified: '2026-08-04',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'SEO Consulting Services in the US: Audits, Strategy & Roadmaps',
  description:
    'Advisory-first SEO consulting services for US teams that already have people who can execute. Diagnosis, technical audit, keyword and AI-query research, and a prioritised roadmap your team owns.',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'FactoryJet', url: 'https://factoryjet.com' },
  about: { '@type': 'Thing', name: 'SEO consulting' },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#answer-first', '#what-is-seo-consulting'],
  },
  lastReviewed: '2026-07-26',
  reviewedBy: { '@type': 'Person', name: 'Bhavesh Barot', jobTitle: 'Founder' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO Consulting Services',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType:
    'SEO Consulting / SEO Strategy Consulting / Technical SEO Consulting / SEO Audit / Fractional SEO Leadership / Generative Engine Optimization Advisory',
  audience: { '@type': 'BusinessAudience', name: 'US businesses with in-house marketing or development teams' },
  description:
    'Advisory-first SEO consulting for US businesses. We diagnose why organic traffic is stuck, audit the technical foundation, research keywords and AI queries, design the content architecture, and deliver a prioritised roadmap your own team executes. Distinct from a done-for-you SEO retainer.',
  url: PAGE_URL,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'SEO consulting deliverables',
    itemListElement: DELIVERABLES.map((d) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: d.title, description: d.body },
    })),
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'What an SEO consultant actually delivers',
  description:
    'The nine deliverables that make up a serious SEO consulting engagement, in the order they normally happen.',
  numberOfItems: DELIVERABLES.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: DELIVERABLES.map((d, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: d.title,
    description: d.body,
  })),
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

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'SEO Consulting', url: PAGE_URL },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Inline SVG helpers
───────────────────────────────────────────────────────────────────────────── */

function CheckCircle({ fill = GREEN_BRIGHT, size = 20 }: { fill?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 flex-shrink-0">
      <circle cx="10" cy="10" r="9" fill={fill} />
      <path d="M6 10.5l2.5 2.5L14 7" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function CrossCircle({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 flex-shrink-0">
      <circle cx="10" cy="10" r="9" fill="#D5453F" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function SeoConsultingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="seoc-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="seoc-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="seoc-itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        id="seoc-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="seoc-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader />

      <main style={{ backgroundColor: CREAM }}>
        <Breadcrumbs items={BREADCRUMB_ITEMS} />
        {/* ─── 1. HERO ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            <div>
              <p className="fj-eyebrow">SEO consulting services &middot; United States</p>
              <h1
                className="fj-display mt-5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(2.35rem, 5vw, 3.75rem)', lineHeight: 1.06, letterSpacing: '-0.03em' }}
              >
                SEO consulting for teams that already have{' '}
                <span className="italic" style={{ color: ORANGE }}>hands to build</span>
              </h1>
              <p
                className="mt-6 max-w-[540px] font-fj-body font-medium text-fj-neutral-600"
                style={{ fontSize: '1.125rem', lineHeight: 1.6 }}
              >
                You have writers. You have developers. What you do not have is someone senior enough to tell
                them which twenty things to ignore. That is the job. We diagnose why organic traffic is stuck,
                set the strategy, and hand your team a roadmap they can start on Monday.{' '}
                <b className="font-bold text-fj-ink">You keep the plan, and the knowledge.</b>
              </p>
              <HeroInlineForm region="us" source="services_seo_consulting_hero" submitLabel="Get an SEO diagnosis" />
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-fj-body text-base font-semibold text-fj-ink transition-all hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ outlineColor: ORANGE }}
                >
                  Talk to the consultant
                  <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link
                  href="/services/seo"
                  className="font-fj-body text-[0.9375rem] font-semibold underline underline-offset-4"
                  style={{ color: ORANGE_DARK }}
                >
                  Want us to run it instead?
                </Link>
              </div>
            </div>

            {/* Right: consulting artefact card (roadmap preview) */}
            <div className="relative mx-auto w-full max-w-[460px]">
              <span
                aria-hidden="true"
                className="absolute -right-6 -top-6 hidden h-[220px] w-[220px] sm:block"
                style={{ background: PEACH, borderRadius: '46% 54% 56% 44% / 48% 42% 58% 52%' }}
              />
              <div
                className="relative rounded-3xl border bg-white p-6 sm:p-7"
                style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 24px 60px rgba(20,18,12,0.10)' }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-fj-mono text-[10px] uppercase tracking-[0.12em] text-fj-neutral-500">
                    Roadmap extract
                  </span>
                  <span
                    className="rounded-full px-2.5 py-1 font-fj-mono text-[10px] font-bold uppercase tracking-[0.08em] text-white"
                    style={{ background: GREEN_BRIGHT }}
                  >
                    Week 1
                  </span>
                </div>
                <p className="fj-display mt-4 text-[1.15rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                  The constraint: crawl budget, not content
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    { p: 'P0', t: 'Collapse 4,180 faceted URLs to 62 indexable variants.', e: 'Dev, 3 days.' },
                    { p: 'P0', t: 'Fix canonical loop on paginated category pages.', e: 'Dev, 1 day.' },
                    { p: 'P1', t: 'Merge 9 competing posts into one buyer guide.', e: 'Content, 1 week.' },
                    { p: 'P1', t: 'Add answer block above the fold on 14 money pages.', e: 'Content, 4 days.' },
                  ].map((row) => (
                    <li key={row.t} className="flex items-start gap-3 border-t pt-3 first:border-t-0 first:pt-0" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                      <span
                        className="mt-0.5 flex-shrink-0 rounded-md px-1.5 py-0.5 font-fj-mono text-[10px] font-bold"
                        style={{ background: row.p === 'P0' ? '#FBEAE1' : LAV_SOFT, color: row.p === 'P0' ? ORANGE_DARK : LAV }}
                      >
                        {row.p}
                      </span>
                      <span className="font-fj-body text-[0.875rem] font-medium leading-[1.5] text-fj-ink">
                        {row.t}
                        <small className="mt-0.5 block font-fj-mono text-[0.6875rem] text-fj-neutral-500">{row.e}</small>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 font-fj-body text-[0.75rem] text-fj-neutral-500">
                  Illustrative extract. Every roadmap item carries an owner, an effort estimate, and a reason.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. ANSWER-FIRST BLUF ────────────────────────────────────── */}
        <section id="answer-first" className="pb-14 md:pb-16">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <div
              className="rounded-2xl bg-white p-7 md:p-9"
              style={{ borderLeft: `5px solid ${ORANGE}`, boxShadow: '0 12px 34px rgba(20,18,12,0.06)' }}
            >
              <p className="font-fj-mono text-[11px] uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
                Short answer
              </p>
              <h2 id="what-is-seo-consulting" className="fj-display mt-3 text-[1.35rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.02em' }}>
                What are SEO consulting services?
              </h2>
              <p className="mt-3 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                <b className="text-fj-ink">SEO consulting services provide senior strategic direction.</b> An experienced consultant audits your website and diagnoses traffic drops. We prioritize exact technical fixes into developer tickets. Your internal engineers and writers ship the changes. Strategic knowledge stays inside your company. Engagements cover technical audits, keyword clustering, AI search visibility, and a 90-day execution roadmap.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                Choose consulting when you already have people who can ship and your gap is direction. Choose a{' '}
                <Link href="/services/seo" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                  done-for-you SEO retainer
                </Link>{' '}
                when your gap is capacity. FactoryJet does both, and we will tell you on the first call which
                one you actually need.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                All strategy aligns with official{' '}
                <a
                  href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2"
                  style={{ color: ORANGE_DARK }}
                >
                  Google Search Essentials documentation
                </a>{' '}
                and Core Web Vitals standards, ensuring sustainable algorithmic visibility without manipulative tactics.
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-black/10 shadow-lg">
                <img
                  src="/images/us/services/seo/hero-seo.webp"
                  alt="Enterprise technical SEO consulting audit and organic search performance analysis"
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. THE DISTINCTION (anti-cannibalization, buyer-facing) ─── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Pick the right shape
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[720px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Consulting and a retainer solve <span className="italic" style={{ color: ORANGE }}>different problems</span>
            </h2>
            <p className="mt-4 max-w-[640px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Most bad SEO engagements start with buying the wrong shape of help. Here is the split, stated
              plainly, so you can rule one out in about thirty seconds.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              {/* Consulting card */}
              <div className="rounded-2xl p-7 md:p-8" style={{ background: GREEN_SOFT }}>
                <span
                  className="inline-block rounded-full px-3 py-1 font-fj-mono text-[10px] font-bold uppercase tracking-[0.1em] text-white"
                  style={{ background: GREEN }}
                >
                  This page
                </span>
                <h3 className="fj-display mt-4 text-[1.4rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.02em' }}>
                  SEO consulting
                </h3>
                <p className="mt-3 font-fj-body text-[0.9688rem] leading-[1.65] text-fj-neutral-700">
                  We think, your team builds. The output is a diagnosis, a strategy, and a sequenced roadmap,
                  plus review as your people ship it. The knowledge stays in your building.
                </p>
                <ul className="mt-5 space-y-3">
                  {[
                    'You have writers or developers with spare capacity.',
                    'You need a second opinion on a plan already in flight.',
                    'A migration, replatform, or new market is coming.',
                    'You want senior direction without a full-time hire.',
                    'You want to build internal SEO capability, not rent it.',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9062rem] font-medium text-fj-ink">
                      <CheckCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Retainer card */}
              <div className="rounded-2xl border p-7 md:p-8" style={{ borderColor: 'rgba(15,15,18,0.12)', background: CREAM }}>
                <span
                  className="inline-block rounded-full px-3 py-1 font-fj-mono text-[10px] font-bold uppercase tracking-[0.1em] text-white"
                  style={{ background: ORANGE_DARK }}
                >
                  Different page
                </span>
                <h3 className="fj-display mt-4 text-[1.4rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.02em' }}>
                  Done-for-you SEO retainer
                </h3>
                <p className="mt-3 font-fj-body text-[0.9688rem] leading-[1.65] text-fj-neutral-700">
                  We think and we build. Technical fixes, content production, authority work, and reporting,
                  run end to end by our team so nothing waits on your calendar.
                </p>
                <ul className="mt-5 space-y-3">
                  {[
                    'Nobody internal has time to implement anything.',
                    'You want one team accountable for the outcome.',
                    'You are starting from close to zero organic traffic.',
                    'A previous roadmap sat unread in a shared drive.',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9062rem] font-medium text-fj-ink">
                      <CheckCircle size={18} fill={ORANGE_DARK} /> {line}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services/seo"
                  className="mt-6 inline-flex items-center gap-2 font-fj-body text-[0.9375rem] font-bold"
                  style={{ color: ORANGE_DARK }}
                >
                  See our SEO services <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. LISTICLE: what a consultant delivers ─────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              The deliverables
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[760px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              What an SEO consultant <span className="italic" style={{ color: ORANGE }}>actually delivers</span>
            </h2>
            <p className="mt-4 max-w-[660px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Nine things, in roughly the order they happen. If a consulting proposal is missing several of
              these, you are looking at an audit with a fancier name on the cover.
            </p>

            <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {DELIVERABLES.map((d) => (
                <li
                  key={d.n}
                  className="flex flex-col rounded-2xl border bg-white p-6"
                  style={{ borderColor: 'rgba(15,15,18,0.09)' }}
                >
                  <span className="font-fj-mono text-[0.8125rem] font-bold" style={{ color: ORANGE_DARK }}>
                    {d.n}
                  </span>
                  <h3 className="fj-display mt-2 text-[1.075rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {d.title}
                  </h3>
                  <p className="mt-2.5 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-600">{d.body}</p>
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-2xl bg-white p-7 border" style={{ borderColor: 'rgba(15,15,18,0.09)' }}>
              <h2 className="fj-display text-[1.35rem] font-bold text-fj-ink mb-3" style={{ letterSpacing: '-0.02em' }}>
                Technical benchmarks and Core Web Vitals standards
              </h2>
              <p className="font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                All roadmap initiatives and technical recommendations strictly benchmark against{' '}
                <a
                  href="https://developers.google.com/search/docs/appearance/core-web-vitals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2"
                  style={{ color: ORANGE_DARK }}
                >
                  Google Core Web Vitals guidelines
                </a>{' '}
                and official{' '}
                <a
                  href="https://web.dev/articles/vitals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2"
                  style={{ color: ORANGE_DARK }}
                >
                  web.dev Web Vitals documentation
                </a>
                . We focus engineering sprints on high-impact optimizations that protect user experience and rankings.
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-black/10 shadow-lg">
                <img
                  src="/images/us/chicago-seo/chicago-strategy-session.webp"
                  alt="Senior SEO consultant leading an enterprise organic search strategy and technical roadmap session"
                  width={1448}
                  height={1086}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5. COMPARISON TABLE ─────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Four ways to get SEO done
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[760px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Consultant vs agency vs in-house vs <span className="italic" style={{ color: ORANGE }}>doing it yourself</span>
            </h2>
            <p className="mt-4 max-w-[680px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              An honest side-by-side, including where each option tends to fail. We have watched all four
              succeed and all four fall over, and the deciding factor is almost never the option itself. It is
              whether it matched the gap.
            </p>

            <div className="mt-10 overflow-x-auto rounded-2xl border" style={{ borderColor: 'rgba(15,15,18,0.10)' }}>
              <table className="w-full min-w-[880px] border-collapse text-left">
                <caption className="sr-only">
                  Comparison of SEO consulting, an SEO agency retainer, an in-house SEO hire, and DIY tools
                  across strategy ownership, execution, ramp time, knowledge transfer, and failure modes.
                </caption>
                <thead>
                  <tr style={{ background: PEACH }}>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      What you are comparing
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em]" style={{ color: ORANGE_DARK }}>
                      SEO consultant
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Agency retainer
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      In-house hire
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      DIY with tools
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={row.label} style={{ background: i % 2 === 1 ? CREAM : '#FFFFFF' }}>
                      <th scope="row" className="border-t p-4 font-fj-body text-[0.875rem] font-bold text-fj-ink" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.label}
                      </th>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] font-medium text-fj-ink" style={{ borderColor: 'rgba(15,15,18,0.08)', background: i % 2 === 1 ? '#F3F8F5' : GREEN_SOFT }}>
                        {row.consultant}
                      </td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.agency}
                      </td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.inhouse}
                      </td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.diy}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 font-fj-body text-[0.8125rem] text-fj-neutral-600">
              Scroll the table sideways on smaller screens. Every column here describes a real setup we have
              worked alongside.
            </p>
          </div>
        </section>

        {/* ─── 6. HOW AN ENGAGEMENT RUNS ───────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              The engagement
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[720px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              From first call to a plan your team can <span className="italic" style={{ color: ORANGE }}>start on Monday</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  step: 'STEP 01',
                  title: 'Kickoff and constraints',
                  body:
                    'What the business needs, who does what internally, what has already been tried, and what your developers can realistically build. Skipping this is how consultants produce recommendations nobody can implement.',
                  tint: PEACH,
                  accent: ORANGE_DARK,
                },
                {
                  step: 'STEP 02',
                  title: 'Discovery',
                  body:
                    'Full crawl, Search Console and analytics review, query and AI-answer research, competitor structural teardown, and log files where the site is large enough to warrant them.',
                  tint: PEACH,
                  accent: ORANGE_DARK,
                },
                {
                  step: 'STEP 03',
                  title: 'Diagnosis',
                  body:
                    'We name the single biggest constraint on your organic growth and show the evidence. Usually it is one thing, not fifteen, and knowing which one saves months of scattered effort.',
                  tint: LAV_SOFT,
                  accent: LAV,
                },
                {
                  step: 'STEP 04',
                  title: 'Roadmap handover',
                  body:
                    'Sequenced tickets with expected impact, effort, and owner. Written for the person doing the work, so a developer reads a developer ticket and a writer reads a brief.',
                  tint: LAV_SOFT,
                  accent: LAV,
                },
                {
                  step: 'STEP 05',
                  title: 'Implementation support',
                  body:
                    'We review work before it ships, unblock the awkward technical calls, and resequence when priorities move. This is where roadmaps either land or quietly die.',
                  tint: GREEN_SOFT,
                  accent: GREEN,
                },
                {
                  step: 'OUTCOME',
                  title: 'A team that needs you less',
                  body:
                    'Your people should be making better SEO calls without asking us. If that is not happening, the engagement is not working, and we would rather say so than keep invoicing.',
                  tint: GREEN_SOFT,
                  accent: GREEN,
                },
              ].map((s) => (
                <div key={s.step} className="rounded-2xl p-7" style={{ background: s.tint }}>
                  <div className="font-fj-mono text-[11px] font-bold tracking-[0.1em]" style={{ color: s.accent }}>
                    {s.step}
                  </div>
                  <h3 className="fj-display mb-2 mt-2 text-[1.2rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {s.title}
                  </h3>
                  <p className="font-fj-body text-[0.9062rem] font-medium leading-[1.6] text-fj-neutral-700">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 7. FIT: right for / not right for ───────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Honest fit check
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[700px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              When consulting is the wrong <span className="italic" style={{ color: ORANGE }}>thing to buy</span>
            </h2>
            <p className="mt-4 max-w-[660px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              We turn work down when the shape is wrong, because a mismatched engagement wastes your quarter
              and our reputation. Read both columns before you book a call.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl p-7 md:p-8" style={{ background: GREEN_SOFT }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">A strong fit</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'You have at least one developer and one writer who can take work on',
                    'Organic traffic plateaued or fell and nobody can explain why',
                    'You are replatforming, migrating domains, or launching a new market',
                    'You run an existing agency and want an independent technical counterpart',
                    'Leadership wants organic growth defended with evidence, not opinion',
                    'You have tried SEO before and want to know what was actually missed',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-ink">
                      <CheckCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border p-7 md:p-8" style={{ borderColor: 'rgba(15,15,18,0.12)' }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">A poor fit</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'Nobody internally has time to implement anything, so a roadmap will sit unread',
                    'You need results inside a few weeks or the business is in trouble',
                    'You want a consultant to validate a decision that is already final',
                    'You are looking for guaranteed rankings, which nobody can honestly promise',
                    'Almost nobody searches for what you sell, so the channel itself is wrong',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-neutral-700">
                      <CrossCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                  If the first line describes you, our{' '}
                  <Link href="/services/seo" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                    done-for-you SEO services
                  </Link>{' '}
                  are the better door. If you are a small local business,{' '}
                  <Link href="/services/small-business-seo" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                    small business SEO
                  </Link>{' '}
                  is scoped for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 8. WHAT GOOGLE ACTUALLY SAYS (citations) ────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Check us against the source
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[720px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              What Google itself says about <span className="italic" style={{ color: ORANGE }}>hiring an SEO</span>
            </h2>
            <p className="mt-4 max-w-[680px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              You should not have to take a consultant&rsquo;s word for how search works. Three pieces of
              Google&rsquo;s own public documentation back the claims we make on this page. Read them before
              you hire anyone, including us.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {[
                {
                  src: 'Google Search Central',
                  title: 'Do you need an SEO?',
                  body:
                    'Google is direct that nobody can guarantee a number one ranking, and warns you away from anyone claiming a special relationship with Google. It also lists the questions to ask a prospective SEO before hiring.',
                  href: 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo',
                },
                {
                  src: 'Google Search Central',
                  title: 'SEO Starter Guide',
                  body:
                    'On timelines, Google says some changes take effect within hours while others take several months, and suggests waiting a few weeks before judging whether a change helped. It is also blunt that no secret automatically ranks a site first.',
                  href: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
                },
                {
                  src: 'Google Search Central',
                  title: 'AI features and your website',
                  body:
                    'Google states there are no additional requirements or special optimizations needed to appear in AI Overviews or AI Mode beyond ordinary Search eligibility. It points instead at foundational work: allowing crawling, keeping content in text, and structured data that matches the visible page.',
                  href: 'https://developers.google.com/search/docs/appearance/ai-features',
                },
              ].map((c) => (
                <div key={c.href} className="flex flex-col rounded-2xl border bg-white p-6" style={{ borderColor: 'rgba(15,15,18,0.09)' }}>
                  <span className="font-fj-mono text-[10px] uppercase tracking-[0.1em] text-fj-neutral-500">{c.src}</span>
                  <h3 className="fj-display mt-2 text-[1.075rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {c.title}
                  </h3>
                  <p className="mt-2.5 flex-1 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-600">{c.body}</p>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 font-fj-body text-[0.8125rem] font-bold underline underline-offset-4"
                    style={{ color: ORANGE_DARK }}
                  >
                    Read the source <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 9. WHO YOU WORK WITH (E-E-A-T) ──────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: LAV_SOFT }}>
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative mx-auto w-full max-w-[420px]">
              <img
                src="/images/us/services/seo/team-cutout.webp"
                alt="Bhavesh Barot and the FactoryJet SEO consulting team"
                width={1300}
                height={895}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-2xl object-contain"
                style={{ filter: 'drop-shadow(0 18px 24px rgba(40,30,90,0.22))' }}
              />
            </div>

            <div>
              <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: LAV }}>
                Who you actually work with
              </p>
              <h2
                className="fj-display mt-3.5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
              >
                One senior person, <span className="italic" style={{ color: ORANGE_DARK }}>not a relay chain</span>
              </h2>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                The most common complaint we hear about previous engagements is that the person who sold the
                work was never the person who did it. Here, the founder runs the analysis, writes the roadmap,
                and sits on the calls. If a recommendation is wrong, there is exactly one person to ask why.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  { t: 'Founder-led analysis', s: 'The person who scopes it is the person who runs it' },
                  { t: 'Search and engineering in one head', s: 'We build sites too, so recommendations are buildable' },
                  { t: 'Google plus AI answer engines', s: 'Classic search and generative answers in one strategy' },
                  { t: 'Knowledge transfer by design', s: 'The goal is that you need us less over time' },
                ].map((item) => (
                  <li key={item.t} className="flex items-start gap-3.5 rounded-2xl bg-white px-5 py-4">
                    <CheckCircle size={20} fill={LAV} />
                    <div className="font-fj-body text-[0.9688rem] font-bold text-fj-ink">
                      {item.t}
                      <small className="mt-0.5 block font-fj-body text-[0.8125rem] font-medium text-fj-neutral-600">
                        {item.s}
                      </small>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-fj-mono text-[0.78rem] text-fj-neutral-600">
                Reviewed &amp; updated {REVIEWED_DATE} &middot; Bhavesh Barot, Founder, FactoryJet
              </p>
              <div className="mt-6">
                <ModalCTAButton label="Book a diagnosis call" region="us" modalVariant="seo" btnVariant="primary-light" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10. RELATED SERVICES (internal links) ───────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Where to go next
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[700px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Related <span className="italic" style={{ color: ORANGE }}>SEO services</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  label: 'SEO services',
                  href: '/services/seo',
                  desc: 'The done-for-you retainer. We run technical, content, and authority work end to end.',
                },
                {
                  label: 'SEO audit',
                  href: '/services/seo-audit',
                  desc: 'Just the diagnosis document, with a prioritised fix list your team can act on.',
                },
                {
                  label: 'AI SEO',
                  href: '/services/ai-seo',
                  desc: 'Getting cited inside ChatGPT, Perplexity, and Google AI Overviews.',
                },
                {
                  label: 'Local SEO',
                  href: '/services/local-seo',
                  desc: 'Map pack, Google Business Profile, and near-me searches for physical service areas.',
                },
                {
                  label: 'Small business SEO',
                  href: '/services/small-business-seo',
                  desc: 'A managed program scoped for owner-run businesses without a marketing department.',
                },
                {
                  label: 'Talk to us',
                  href: '/contact',
                  desc: 'Send a short brief. We reply within one business day, usually with a question first.',
                },
              ].map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="flex min-h-[168px] flex-col rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1"
                  style={{ border: '1px solid rgba(15,15,18,0.10)', background: CREAM }}
                >
                  <h3 className="fj-display text-[1.15rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {svc.label}
                  </h3>
                  <p className="mt-2 flex-1 font-fj-body text-[0.9062rem] leading-[1.55] text-fj-neutral-600">
                    {svc.desc}
                  </p>
                  <span className="mt-5 font-fj-body text-[0.8125rem] font-bold" style={{ color: ORANGE_DARK }}>
                    Explore &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 11. FAQ ─────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="SEO consulting FAQ"
          headline="The questions buyers actually ask"
          lead="What consulting covers, how it differs from an agency retainer, how an engagement runs, and when it is the wrong thing to buy. If your question is not here, send a short brief and we usually reply within one business day."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ─── 12. FINAL CTA (the one dark section) ────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="START WITH A DIAGNOSIS"
          headline="Find out what is actually holding your organic growth back"
          sub="Book a call with the founder. We will look at your site, your Search Console data, and the queries you care about, then tell you plainly whether consulting is the right shape of help or whether you need something else."
          primaryCta={{ label: 'Book a diagnosis call', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See done-for-you SEO', href: '/services/seo' }}
          objectionHandler="Founder-led. Month to month. You keep the roadmap and the reasoning behind every item."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
