import type { Metadata } from 'next';
import Link from 'next/link';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import MidPageCTA from '@/components/v2/MidPageCTA';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MotionFadeUp from '@/components/v2/MotionFadeUp';
import DemandBars from '@/components/v2/motion/DemandBars';
import TiltCard from '@/components/v2/motion/TiltCard';
import AICitationDemo from '@/components/v2/AICitationDemo';
import AreaExplorer from '@/components/v2/AreaExplorer';
import AuthorCard from '@/components/v2/AuthorCard';
import LocalSeoArchitectureBlueprint from '@/components/v2/LocalSeoArchitectureBlueprint';
import RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard';
import CityLinksUK from '@/components/v2/CityLinksUK';
import './london-seo.css';

const CANONICAL = 'https://factoryjet.com/uk/london/seo';
const UPDATED = '2026-08-25';

/* ─── Breadcrumb source of truth (drives visible trail AND JSON-LD) ──── */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'London', url: 'https://factoryjet.com/uk/london' },
  { name: 'SEO Agency London', url: CANONICAL },
];

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  '@id': `${CANONICAL}#breadcrumb`,
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: c.url,
  })),
};

/* ─── External sources. Every URL fetch-verified 2026-08-25 (HTTP 200,
       and the quoted wording confirmed in the fetched page body). ────── */
const SOURCES = [
  {
    id: 'ons-gdp',
    label: 'Office for National Statistics',
    title: 'Regional economic activity by gross domestic product, UK: 1998 to 2023',
    url: 'https://www.ons.gov.uk/economy/grossdomesticproductgdp/bulletins/regionaleconomicactivitybygrossdomesticproductuk/1998to2023',
    note: 'Reports that London had the highest GDP per head of any UK region in 2023, at £69,077, against £28,583 in the North East. We use it for the size of the London market, nothing else.',
  },
  {
    id: 'google-starter',
    label: 'Google Search Central',
    title: 'SEO Starter Guide',
    url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
    note: 'Google states that some changes take effect in a few hours and others could take several months. This is why we refuse to promise page one by a fixed date.',
  },
  {
    id: 'google-localbusiness',
    label: 'Google Search Central',
    title: 'Local Business (LocalBusiness) structured data',
    url: 'https://developers.google.com/search/docs/appearance/structured-data/local-business',
    note: 'The official specification for the local business markup we add to your site, including opening hours and departments. It is also why we do not bolt a star rating onto pages that do not collect reviews.',
  },
  {
    id: 'web-vitals',
    label: 'Google / web.dev',
    title: 'Web Vitals',
    url: 'https://web.dev/articles/vitals',
    note: 'The thresholds we hold your site to: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint of 200 milliseconds or less, and Cumulative Layout Shift of 0.1 or less.',
  },
];

/* ─── London areas (drives the interactive explorer) ────────────────── */
const AREAS = [
  {
    tag: 'Finance · Law · Insurance',
    name: 'City & Canary Wharf',
    strategy: 'Authority-led SEO',
    body:
      'These sectors compete on trust, so the work centres on E-E-A-T signals, expert authored content, and the technical credibility that Google and AI answer engines both reward for regulated industries. For a City law firm or a Canary Wharf fintech, a technical seo london foundation and named author pages carry more weight than volume of blog posts. We build the entity and schema architecture that lets a search engine, and an AI model, understand exactly who you are and why you can be cited.',
  },
  {
    tag: 'Tech · Fintech · SaaS',
    name: 'Shoreditch & Old Street',
    strategy: 'AI-citation first',
    body:
      'Silicon Roundabout buyers research in ChatGPT and Perplexity before they open Google, so generative engine optimisation and answer engine optimisation are the priority here. We pair fast technical SEO with product-led content that earns citations, then track whether your brand is quoted in AI answers alongside your Google rankings. For a Shoreditch startup, ai seo london is not a nice-to-have, it is where a growing share of your buyers now start.',
  },
  {
    tag: 'Retail · Hospitality · DTC',
    name: 'Camden & Hackney',
    strategy: 'Ecommerce plus local',
    body:
      'Independent brands in Camden and Hackney need ecommerce seo london for product and category searches, and the local map pack for the customers who are nearby right now. We run both together, so a Hackney homeware brand shows up when someone searches the product and when someone searches for a shop close to them. Product pages are built to rank and to convert, not just to sit in a sitemap.',
  },
  {
    tag: 'Luxury · Art · Property',
    name: 'Mayfair & Knightsbridge',
    strategy: 'Brand SERP and reputation',
    body:
      'Premium brands compete on what appears when a buyer searches their name, so we shape the brand SERP and build content that matches a high-intent, low-price-sensitivity audience. For a Mayfair gallery or a Knightsbridge property firm, professional seo services london means protecting the first page of your own name and earning the credible links that reassure a discerning buyer before they ever enquire.',
  },
  {
    tag: 'Media · Creative · Agencies',
    name: 'Soho & Fitzrovia',
    strategy: 'Competitive service terms',
    body:
      'Creative firms in Soho and Fitzrovia fight for competitive service keywords and referral-heavy searches, so content depth and credible links carry these SERPs. A production company or a design studio needs pages that out-answer whoever ranks now, plus the technical health to make those pages load fast. This is where a seo marketing agency london approach, content and links working together, beats a thin, keyword-stuffed page every time.',
  },
  {
    tag: 'Local services',
    name: 'Greater London',
    strategy: 'Local map pack',
    body:
      'Clinics, trades, and local firms from Croydon to Richmond need local seo london done properly: the map pack, a fully optimised Google Business Profile, reviews, and neighbourhood pages that bring nearby customers. Local seo services london is often the fastest route to enquiries for a service business, because the searcher already wants to buy and only needs to find someone close and credible. We build the local footprint that puts you in front of them.',
  },
];

/* ─── Demand rows (drives the animated DemandBars widget) ────────────── */
const DEMAND_ROWS = [
  { kw: 'seo agency london', v: '3,600', kd: 'KD 47 to 55 · Core commercial term', w: '100%' },
  { kw: 'seo services london', v: '1,000', kd: 'KD 36 · Strong intent', w: '28%' },
  { kw: 'best seo agency london', v: '720', kd: 'KD 32 · Comparison intent', w: '20%' },
  { kw: 'local seo london', v: '260', kd: 'KD 0 · Quick win', w: '9%' },
  { kw: 'ecommerce seo agency london', v: '170', kd: 'KD 6 · Quick win', w: '6%' },
];

/* ─── Scope: what a London SEO retainer includes, and what it does not ── */
const SCOPE_TECHNICAL = [
  'Full crawl of every indexable URL, with a prioritised fix list rather than a raw error dump',
  'Core Web Vitals work against the published thresholds: LCP, INP, and CLS',
  'Index coverage repair, so pages you want ranked are actually in Google',
  'Internal link architecture, so authority reaches your money pages instead of pooling on the blog',
  'Structured data build and validation: Organization, LocalBusiness, Service, FAQPage, BreadcrumbList',
  'Redirect hygiene: single hop, permanent, no chains that waste crawl budget',
  'XML sitemap and robots rules checked against what you actually want indexed',
  'Crawler access for AI retrieval bots, checked by name rather than left to a wildcard',
];

const SCOPE_CONTENT = [
  'Keyword and intent mapping for London terms, one target page per intent, so pages stop competing with each other',
  'Answer-first rewrites of your existing money pages before we write anything new',
  'New service and borough pages where there is real search demand, not where a template says there should be',
  'FAQ blocks built from the questions people actually type, matched by schema on the same page',
  'Named author attribution and credentials, because unattributed pages struggle in regulated London sectors',
  'Metadata and heading structure fixed page by page, one H1, clean descent',
  'Content refresh cycle on pages that have decayed, before writing replacements',
];

const SCOPE_LINKS_AI = [
  'Digital PR and outreach for links from credible UK and industry publications',
  'Unlinked brand mention reclamation, usually the cheapest links available to a London firm',
  'Toxic and spam link review, with disavow only where it is genuinely warranted',
  'Generative engine optimisation: structure, cited facts, and clean data an AI model can lift',
  'Answer engine optimisation: question headings and extractable answers on every commercial page',
  'AI answer tracking across ChatGPT, Gemini, and Perplexity for the prompts your buyers use',
  'Competitor citation gap analysis, so you can see who AI names instead of you and why',
];

const SCOPE_EXCLUDED = [
  'Paid search and paid social management. It is a different discipline and we will say so rather than bill for it.',
  'Buying links, private blog networks, or any link scheme. These work until they do not, and the recovery costs more than the gain.',
  'Guaranteed rankings by a fixed date. Google decides rankings, so nobody can honestly sell that.',
  'Auto-generated content at volume. It fills a sitemap and does nothing for enquiries.',
  'Vanity dashboards. If a metric will not change a decision, it does not go in your report.',
];

/* ─── Local search mechanics, the part that is specific to London ─────── */
const GBP_CHECKLIST = [
  'Primary category chosen against what actually ranks in your borough, not what sounds most impressive',
  'Secondary categories added only where they match services you genuinely deliver',
  'Service area set to the boroughs you can realistically serve, because over-claiming dilutes relevance',
  'Name, address, and phone number made identical everywhere they appear online',
  'Opening hours, bank holiday hours, and attributes completed in full',
  'Products and services listed individually rather than lumped into one description',
  'Photos geotagged and refreshed on a schedule, since stale profiles slip',
  'Review requests built into your normal client hand-off, plus a reply routine for every review',
];

const MAP_PACK_FACTORS = [
  'Proximity: how close the searcher is to your listed address. You cannot change this, so everything else has to work harder.',
  'Relevance: how well your categories, services, and site content match the query.',
  'Prominence: reviews, citations, links, and how well known your business is offline and online.',
  'Consistency: matching business details across your site, your profile, and UK directories.',
  'Engagement: clicks, calls, and direction requests from the profile itself.',
];

const BOROUGH_PAGE_RULES = [
  'One page per borough only where that borough has its own search demand, checked before we build',
  'Genuinely different content per page: local landmarks, transport, sector mix, and real client context',
  'A named consultant and a real phone route, not a generic form dropped on twenty near-identical pages',
  'Internal links up to the London hub and across to the two or three neighbouring boroughs that matter',
  'No page published until it can stand on its own without the city name swapped in and out',
];

/* ─── First 90 days ──────────────────────────────────────────────────── */
const PHASE_1 = [
  'Technical crawl and Core Web Vitals baseline',
  'Google Search Console and Analytics audit, including whether conversions are tracked correctly',
  'Ranking baseline for your London terms, plus an AI citation baseline across the main engines',
  'Competitor teardown: who ranks, who gets cited, and which of the two they earned',
  'A prioritised fix list, ordered by effect divided by effort',
];

const PHASE_2 = [
  'Highest-impact technical fixes shipped, usually indexation, speed, and internal linking',
  'Google Business Profile rebuilt and citation inconsistencies cleaned up',
  'Money pages rewritten answer-first, with schema added on the same page',
  'Tracking corrected so the enquiries you get are attributable to the pages that earned them',
];

const PHASE_3 = [
  'New content published against the demand map, fastest-winnable terms first',
  'Outreach and digital PR begins, targeting publications your buyers actually read',
  'AI citation tracking reported alongside rankings for the first full month',
  'Plan reforecast against what moved, so month four is based on evidence rather than the original guess',
];

/* ─── Reporting ──────────────────────────────────────────────────────── */
const REPORT_INCLUDES = [
  'Keywords that moved up, moved down, and why we think each one did',
  'Organic sessions and, more importantly, organic enquiries',
  'AI visibility: which engines named you, for which prompts, and against which competitors',
  'Every task completed that month, in plain English rather than ticket numbers',
  'What is planned next month and what we need from you to do it',
  'Anything that went wrong, said plainly, before you have to ask about it',
];

const REPORT_EXCLUDES = [
  'Domain authority scores from third-party tools, which Google does not use',
  'Raw impression counts with no click or enquiry context',
  'Forty pages of screenshots that nobody reads',
  'Keyword counts that go up while enquiries stay flat',
];

/* ─── Fit ────────────────────────────────────────────────────────────── */
const GOOD_FIT = [
  'A London business with a real service and a real margin, where one extra client a month is worth the work',
  'Anyone whose buyers research online before they enquire, which now includes asking an assistant',
  'Firms with an existing site that underperforms, because fixing beats rebuilding in most cases',
  'Multi-location or multi-borough operators who need local and national visibility at once',
  'Teams that will give us access and answer questions within a week',
];

const POOR_FIT = [
  'Anyone who needs enquiries this month. SEO compounds, so paid search is the honest answer for immediate need.',
  'Businesses in a category with no search demand. We check before quoting, and we will tell you if it is empty.',
  'Anyone shopping purely on the lowest monthly figure, because the cheapest option usually buys volume, not results.',
  'Teams that cannot approve content or ship technical changes within a reasonable window.',
];

const CLIENT_INPUTS = [
  'Admin access to Google Search Console, Analytics, and Google Business Profile',
  'A staging or development route for technical changes, or a developer we can brief',
  'One named person who can approve content, ideally within a week',
  'Thirty minutes a month on a call, and honest answers about what your best clients are worth',
  'Any past penalty, migration, or agency history, including the parts that did not go well',
];

/* ─── FAQ source of truth (drives the visible UI AND the FAQPage schema).
       Never duplicate this array next to the ld+json block. ──────────── */
const FAQ_CATEGORIES = [
  { key: 'getting-started', label: 'Getting started' },
  { key: 'results-cost', label: 'Cost, time & value' },
  { key: 'local', label: 'London local search' },
  { key: 'ai-search', label: 'AI search' },
  { key: 'services', label: 'Scope & services' },
  { key: 'working', label: 'Working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Getting started ────────────────────────────────────────────────
  {
    category: 'getting-started',
    question: 'What happens in the first 30 days of working together?',
    answer:
      'We audit before we touch anything. That means a full technical crawl, a Search Console and Analytics review, a ranking baseline for your London terms, an AI citation baseline, and a competitor teardown. You get a prioritised fix list ordered by effect divided by effort, and we start the fastest wins immediately, which is normally indexation, speed, and your Google Business Profile.',
  },
  {
    category: 'getting-started',
    question: 'How do I choose the best SEO agency in London?',
    answer:
      'Ask three questions. Can you show real ranking data from past clients, who actually does the work day to day, and what specifically happens in the first 30 days. A credible agency answers all three plainly and never guarantees page one by a date. Anyone who leads with a guarantee before seeing your site is selling, not diagnosing.',
  },
  {
    category: 'getting-started',
    question: 'Do I have to sign a long contract?',
    answer:
      'No. We work month to month and you can cancel with 30 days notice. We keep London clients because their rankings and enquiries go up, not because they are locked in. If a long lock-in is the only way an agency can retain you, that tells you something useful about the results they expect to produce.',
  },
  {
    category: 'getting-started',
    question: 'What do you need from us to start?',
    answer:
      'Admin access to Google Search Console, Analytics, and your Google Business Profile. A route to ship technical changes, either a staging environment or a developer we can brief. One named person who can approve content within about a week. Thirty minutes a month on a call. And an honest account of any past penalty, migration, or agency relationship, including the parts that went badly.',
  },
  {
    category: 'getting-started',
    question: 'Can you work with our existing developer or in-house marketer?',
    answer:
      'Yes, and it usually goes faster. We write specifications your developer can implement directly, with the reasoning included so nothing is a black box. If you have an in-house marketer we split the work rather than duplicate it, typically taking technical and strategy while they keep content production. We put the split in writing so nobody is guessing about ownership.',
  },

  // ── Cost, time & value ─────────────────────────────────────────────
  {
    category: 'results-cost',
    question: 'How much does SEO cost in London?',
    answer:
      'It depends on scope, and any agency quoting before seeing your site is guessing. The things that move the figure are how competitive your terms are, whether you need local, ecommerce, technical, or international work, and how much content and outreach is required to compete. We scope after a free audit and give you one fixed number, agreed up front, with no surprise invoices.',
  },
  {
    category: 'results-cost',
    question: 'How much does an SEO agency typically cost?',
    answer:
      'Across the UK market you will see three shapes: a one-off audit, fixed-price project milestones, and an ongoing monthly retainer. Retainers are the most common for competitive London terms because the work compounds. Be wary of anything unusually cheap, since at the bottom of the market you are usually buying content volume from a template rather than strategy and technical work.',
  },
  {
    category: 'results-cost',
    question: 'Is an SEO agency worth it?',
    answer:
      'It is worth it when one extra client a month covers the cost several times over, and when your buyers research before they enquire. It is not worth it if your category has no search demand, or if you need enquiries this month, because SEO compounds rather than switching on. We check demand before quoting and will tell you plainly if paid search is the better answer.',
  },
  {
    category: 'results-cost',
    question: 'How long does SEO take in London?',
    answer:
      'Technical fixes often move things in 4 to 8 weeks. New content pages usually take 3 to 5 months to mature. The most competitive London terms can take 6 to 9 months. Google says directly that some changes take effect in a few hours while others take several months, which is exactly why nobody can honestly promise a date.',
  },
  {
    category: 'results-cost',
    question: 'Can you guarantee page-one rankings?',
    answer:
      'No, and neither can anyone else, because Google decides rankings. What we commit to is the work that reliably moves sites: technical health, content that answers real questions, credible links, and structure that AI engines can quote. You see exactly what was done each month, so you judge us on evidence rather than on a promise nobody controls.',
  },
  {
    category: 'results-cost',
    question: 'What engagement shapes do you offer?',
    answer:
      'Three. A one-off technical audit if you want a diagnosis and nothing else. Fixed-price milestones if you have a defined project such as a migration or a schema rebuild. Or a monthly retainer for ongoing work on competitive London terms. Most London businesses chasing terms like seo agency london need the retainer, because the compounding is the whole point.',
  },

  // ── London local search ────────────────────────────────────────────
  {
    category: 'local',
    question: 'How does the Google map pack actually decide who ranks in London?',
    answer:
      'Three main things: proximity to the searcher, relevance of your categories and content to the query, and prominence, which is reviews, citations, links, and how well known you are. Proximity is fixed by your address, so in a dense market like London the other two have to work harder. Engagement from the profile itself, calls and direction requests, also feeds back in.',
  },
  {
    category: 'local',
    question: 'Do I need a London office address to rank locally?',
    answer:
      'You need a genuine address where you do business, and Google verifies it. A virtual office or mailbox you do not staff breaches the guidelines and gets listings suspended. If you serve London without a public premises, the correct route is a service-area business with your service boroughs set honestly, which still ranks, just with proximity weighted differently.',
  },
  {
    category: 'local',
    question: 'Should we build a page for every London borough?',
    answer:
      'No. Build one only where that borough has its own search demand, and check before building. Each page needs genuinely different content: local sector mix, transport, landmarks, and real client context. Twenty pages with the borough name swapped in and out is a doorway pattern, it gets filtered, and it dilutes the hub page you actually want ranking.',
  },
  {
    category: 'local',
    question: 'How important are reviews for London local search?',
    answer:
      'Very, and not just the star average. Recency, volume, whether reviewers mention the service by name, and whether you reply all feed prominence. In a dense London category, a profile with steady recent reviews commonly outranks a better-known name with older ones. We build review requests into your normal client hand-off rather than treating it as a one-off push.',
  },

  // ── AI search ──────────────────────────────────────────────────────
  {
    category: 'ai-search',
    question: 'What is AI SEO and does my London business need it?',
    answer:
      'AI SEO is the work of getting your business quoted by answer engines such as ChatGPT, Gemini, and Perplexity. A growing share of London buyers research there before opening Google. If a competitor is named in that answer and you are not, you lose the enquiry without ever seeing it in your analytics. For most London categories it is now core work, not an add-on.',
  },
  {
    category: 'ai-search',
    question: 'What are GEO and AEO?',
    answer:
      'Generative engine optimisation (GEO) structures your content and data so an AI model can lift it into a generated answer. Answer engine optimisation (AEO) means answer-first pages, question-style headings, and FAQ markup an engine can quote directly. They overlap heavily. We run both as standard on every London account because together they are what earn a citation.',
  },
  {
    category: 'ai-search',
    question: 'Can you track our visibility in AI answers?',
    answer:
      'Yes. We run the prompts your buyers actually use across the main engines and record whether you are named, cited, or absent, and who appears instead. That sits next to your Google rankings in the same monthly report. Without it you are guessing about a channel that already sends real enquiries and shows up badly in standard analytics.',
  },
  {
    category: 'ai-search',
    question: 'Does ranking well on Google mean AI engines will cite us?',
    answer:
      'Not reliably. The two overlap but they are not the same, and plenty of businesses named in AI answers do not hold a top-ten organic position for that query. Citation appears to favour clear, specific, well-structured pages that state facts an engine can lift. That is why we build for both paths rather than assuming one delivers the other.',
  },

  // ── Scope & services ───────────────────────────────────────────────
  {
    category: 'services',
    question: 'What is included in a monthly SEO retainer?',
    answer:
      'Technical work, content, links, and AI search, run together. In practice that means crawl and Core Web Vitals fixes, index coverage repair, internal link architecture, structured data, keyword and intent mapping, answer-first rewrites of your money pages, outreach for credible links, and AI citation tracking. Everything is scoped in writing before it starts, so you know what you are paying for.',
  },
  {
    category: 'services',
    question: 'What is explicitly not included?',
    answer:
      'Paid search and paid social management, because that is a different discipline. Bought links, private blog networks, or any link scheme. Guaranteed rankings by a date. Auto-generated content at volume. And vanity dashboards. If a metric will not change a decision you make, it does not go in your report.',
  },
  {
    category: 'services',
    question: 'Do you offer technical SEO in London?',
    answer:
      'Yes, and it is usually where the fastest wins hide. We cover site speed against the published Core Web Vitals thresholds, crawlability, index coverage, structured data, redirect hygiene, and the internal link architecture that decides which of your pages actually accumulate authority. A fast, clean, well-structured site is also far easier for an AI model to read and quote.',
  },
  {
    category: 'services',
    question: 'Do you do ecommerce SEO for London stores?',
    answer:
      'Yes. We build product and category pages that rank and convert, fix duplicate and thin content, sort out faceted navigation so filters do not flood the index, and structure the store so shoppers and crawlers can both navigate it. Speed matters more here than almost anywhere else, so we treat storefront performance as part of the SEO work rather than someone else’s problem.',
  },
  {
    category: 'services',
    question: 'Can you handle international and multilingual SEO?',
    answer:
      'Yes. London sells worldwide, so we set up hreflang correctly, build market-specific content rather than machine translations, and structure the site so your own pages stop competing with each other across countries. Done badly, international SEO quietly costs you the overseas traffic you already had, which is the most common problem we are called in to fix.',
  },
  {
    category: 'services',
    question: 'Do you provide an SEO audit before we commit?',
    answer:
      'Yes, and it is free with no obligation. It covers technical health, current rankings, content and link gaps, local visibility, and where AI engines cite you or your competitors. It is written in plain English so you or another agency could act on it. If we are not the right fit, you keep the audit and we will say so.',
  },

  // ── Working with us ────────────────────────────────────────────────
  {
    category: 'working',
    question: 'How do you report on progress?',
    answer:
      'One page, once a month, readable in five minutes. It shows which keywords moved and why, organic sessions and enquiries, your visibility in AI answers, every task completed in plain English, what is planned next, and anything that went wrong. No third-party authority scores, and no impression counts without click context.',
  },
  {
    category: 'working',
    question: 'Are you a London SEO agency, and do you meet in person?',
    answer:
      'We serve London across every borough and work remotely with regular video reviews. That is a deliberate choice: it keeps overheads out of your scope so more of the budget goes into work that moves rankings. If you want the broader picture of how we work with London businesses, our main London page covers it.',
  },
  {
    category: 'working',
    question: 'Who will I actually work with?',
    answer:
      'A senior team, with the founder involved on every account. You are not handed to a junior after the sales call. The person who scopes your work stays close to the person delivering it, which is the main reason briefs do not get lost in translation. You get a real monthly call, not a dashboard link and silence.',
  },
  {
    category: 'working',
    question: 'What happens to our content and links if we leave?',
    answer:
      'You keep all of it. Content, pages, links earned, schema, documentation, and access to every account, which was always in your name rather than ours. We will hand over a written summary of what was done and what we would do next, so your following agency does not start by re-auditing what we already know.',
  },
  {
    category: 'working',
    question: 'Why choose FactoryJet over another London SEO company?',
    answer:
      'Because we run all three levers, technical, content, and links, plus AI search, with no lock-in and a report you can actually read. Many agencies do content only, or lock you in for a year, or skip AI search entirely. We optimise for Google and for the assistants your buyers increasingly ask first, and you keep everything if you leave.',
  },
];

/* ─── JSON-LD @graph ─────────────────────────────────────────────────── */
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
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'SEO Agency London',
      serviceType: 'Search engine optimisation',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'City', name: 'London' },
      url: CANONICAL,
      // No aggregateRating. We do not collect reviews on this page, and Google's
      // LocalBusiness guidance only recommends the property for sites that
      // genuinely capture reviews. A rating nobody can see is a cloaking risk.
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'London SEO services',
        itemListElement: [
          'Technical SEO',
          'Local SEO and Google Business Profile',
          'Ecommerce SEO',
          'Content SEO',
          'AI SEO, GEO and AEO',
          'International SEO',
          'Link building and digital PR',
          'SEO audit',
        ].map((n) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: n } })),
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${CANONICAL}#localbusiness`,
      name: 'FactoryJet SEO Agency London',
      url: CANONICAL,
      areaServed: { '@type': 'City', name: 'London' },
      parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
    },
    breadcrumbSchema,
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'SEO Agency London | Technical, Local & AI SEO | FactoryJet',
      headline: 'SEO Agency in London: What the Service Includes and How It Runs',
      inLanguage: 'en-GB',
      datePublished: '2026-07-01',
      dateModified: UPDATED,
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
        jobTitle: 'Founder, FactoryJet',
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
      citation: SOURCES.map((s) => ({
        '@type': 'CreativeWork',
        name: s.title,
        url: s.url,
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      // Mapped from the same FAQ_ITEMS array the page renders below.
      mainEntity: FAQ_ITEMS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: 'SEO Agency London | Technical, Local & AI SEO | FactoryJet',
  description:
    'What a London SEO engagement actually includes: technical fixes, local map pack work, content, links, and AI search. Scope, process, reporting, and a free audit.',
  alternates: {
    canonical: CANONICAL,
    languages: {
      'en-GB': CANONICAL,
      'x-default': CANONICAL,
    },
  },
  openGraph: {
    title: 'SEO Agency London | Technical, Local & AI SEO | FactoryJet',
    description:
      'The deliverables, process, and reporting behind a London SEO engagement. Technical, local, ecommerce, and AI search, month to month, free audit.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/uk/london-seo-og.webp',
        width: 1200,
        height: 630,
        alt: 'SEO Agency London by FactoryJet',
      },
    ],
  },
  robots: { index: true, follow: true },
};

/* ─── Small presentational helpers (local to this page) ──────────────── */
function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="chk">
      {items.map((t) => (
        <li key={t}>
          <span className="tick" aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none">
              <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function CrossList({ items }: { items: string[] }) {
  return (
    <ul className="chk cross">
      {items.map((t) => (
        <li key={t}>
          <span className="tick" aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none">
              <path d="M4.5 4.5L11.5 11.5M11.5 4.5L4.5 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function LondonSeoPage() {
  return (
    <>
      <script
        id="ld-london-seo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="uk-londonseo">
        <main>
          {/* Visible breadcrumb, driven by the same `crumbs` array as the JSON-LD. */}
          <Breadcrumbs items={crumbs} />

          {/* ═══ 1. HERO (light) ═══ */}
          <section className="hero dotbg">
            <div className="aurora a1" />
            <div className="aurora a2" />
            <div className="wrap">
              <div className="hero-grid">
                <MotionFadeUp>
                  <div className="chips">
                    <span className="chip"><span className="d" />SEO Agency London</span>
                    <span className="chip">Technical · Local · AI search</span>
                    <span className="chip">Month to month</span>
                  </div>
                  <h1>
                    SEO Agency in London: What the Service Includes and How It{' '}
                    <span className="grad">Runs</span>
                  </h1>
                  <p className="sub">
                    This page is the working detail of our{' '}
                    <mark>SEO service in London</mark>: the deliverables, the process, the local
                    search mechanics, and the reporting. If you want the wider picture of who we
                    are and how we work with London businesses, read{' '}
                    <Link href="/uk/london">our London page</Link>.
                  </p>

                  <div className="byline">
                    <div className="av">BB</div>
                    <div className="who">
                      <b>Bhavesh Barot</b>, Founder
                      <br />
                      <span>500+ sites and SEO projects</span>
                    </div>
                    <div className="upd">
                      Last updated
                      <br />
                      25 Aug 2026
                    </div>
                  </div>

                  <div style={{ maxWidth: 540 }}>
                    <HeroInlineForm
                      region="uk"
                      source="uk_london_seo_hero"
                      submitLabel="Get a free SEO audit"
                    />
                  </div>
                </MotionFadeUp>

                <MotionFadeUp delay={0.1}>
                  <TiltCard>
                    <div className="proof">
                      <div className="ph">How we run London SEO</div>
                      <div className="prow">
                        <div>
                          <div className="pl">Approach</div>
                          <div className="pd">the three levers that move rankings</div>
                        </div>
                        <div className="pv">Technical + Content + Links</div>
                      </div>
                      <div className="prow">
                        <div>
                          <div className="pl">AI search</div>
                          <div className="pd">cited by ChatGPT, Gemini, Perplexity</div>
                        </div>
                        <div className="pv g">GEO + AEO included</div>
                      </div>
                      <div className="prow">
                        <div>
                          <div className="pl">Reporting</div>
                          <div className="pd">plain English, five minutes</div>
                        </div>
                        <div className="pv">Monthly, one page</div>
                      </div>
                      <div className="prow">
                        <div>
                          <div className="pl">Engagement shape</div>
                          <div className="pd">audit, milestones, or retainer</div>
                        </div>
                        <div className="pv">Month to month</div>
                      </div>
                      <div className="prow">
                        <div>
                          <div className="pl">Ownership</div>
                          <div className="pd">content, links, data stay yours</div>
                        </div>
                        <div className="pv g">You keep everything</div>
                      </div>
                    </div>
                  </TiltCard>
                </MotionFadeUp>
              </div>
            </div>
          </section>

          {/* ═══ 2. DEFINITIONS (answer-first / GEO) ═══ */}
          <section className="sec">
            <div className="wrap">
              <MotionFadeUp>
                <div className="grid2">
                  <div className="def">
                    <span className="lab">What does an SEO agency in London do?</span>
                    <p>
                      An <mark>SEO agency</mark> improves a website so it ranks higher on Google for
                      the terms your customers search, and so AI assistants quote it. The work has
                      three levers: technical health, content that answers real questions, and links
                      from trusted sites. In London a fourth lever matters as much: local search, the
                      map pack, and your Google Business Profile.
                    </p>
                  </div>
                  <div className="def">
                    <span className="lab">What is AI SEO, GEO, and AEO?</span>
                    <p>
                      <mark>AI SEO</mark> gets your site quoted by answer engines like ChatGPT,
                      Gemini, and Perplexity. Generative engine optimisation structures your data so
                      a model can lift it. Answer engine optimisation writes answer-first pages an
                      engine can quote directly. Same discipline as SEO, extended to the buyers who
                      now start with an assistant.
                    </p>
                  </div>
                </div>
                <p className="lead" style={{ maxWidth: 900 }}>
                  Search split in two. A buyer looking for an SEO agency in London might type the
                  query into Google and scan the results, or ask an assistant and read the answer it
                  generates. A site built only for the first path is invisible on the second. Every
                  page we build for a London business is engineered to be read by both a search
                  engine and an AI model, so your visibility does not depend on which door your
                  customer walks through.
                </p>
              </MotionFadeUp>
            </div>
          </section>

          {/* ═══ 3. TRUST BAND ═══ */}
          <div className="band">
            <div className="in wrap">
              <span className="b"><span className="d" />No lock-in contracts</span>
              <span className="b"><span className="d" />Senior team, not juniors</span>
              <span className="b"><span className="d" />AI SEO included, not an add-on</span>
              <span className="b"><span className="d" />You keep everything we build</span>
            </div>
          </div>

          {/* ═══ 4. SCOPE: WHAT IS INCLUDED ═══ */}
          <section className="sec" id="scope">
            <div className="wrap">
              <MotionFadeUp>
                <div style={{ maxWidth: 780 }}>
                  <span className="eyebrow">Scope</span>
                  <h2>What a London SEO engagement actually includes</h2>
                  <p className="lead">
                    Most agency pages describe outcomes and stay quiet about the work. Here is the
                    work. Everything below is scoped in writing before it starts, so you know what
                    you are paying for and what you are not.
                  </p>
                </div>

                <div className="grid3 mt-8 scope-grid">
                  <div className="card">
                    <h3>Technical foundation</h3>
                    <CheckList items={SCOPE_TECHNICAL} />
                  </div>
                  <div className="card">
                    <h3>Content and local</h3>
                    <CheckList items={SCOPE_CONTENT} />
                  </div>
                  <div className="card">
                    <h3>Links and AI search</h3>
                    <CheckList items={SCOPE_LINKS_AI} />
                  </div>
                </div>

                <div className="card mt-8" style={{ background: '#FAFAF7' }}>
                  <h3>What is deliberately not included</h3>
                  <p style={{ fontSize: 14, marginTop: 4 }}>
                    Being clear about the boundary is more useful than a long list of everything we
                    could theoretically sell you.
                  </p>
                  <CrossList items={SCOPE_EXCLUDED} />
                </div>
              </MotionFadeUp>
            </div>
          </section>

          {/* ═══ 5. AI CITATION DEMO (the one dark section, mid-page) ═══ */}
          <section className="sec">
            <div className="wrap">
              <MotionFadeUp>
                <div className="ai">
                  <span className="eyebrow">The 2026 edge · live demo</span>
                  <h2>Watch a London brand get cited in an AI answer</h2>
                  <p>
                    Half your customers still use Google. A growing half ask an AI assistant. Most
                    agencies optimise only for the first. We build for both. Tap an engine below to
                    see how a well-optimised London business gets quoted in a generated answer.
                  </p>
                  <AICitationDemo />
                </div>
              </MotionFadeUp>
            </div>
          </section>

          {/* ═══ 6. WHY LONDON SEO IS DIFFERENT ═══ */}
          <section className="sec dotbg">
            <div className="wrap">
              <MotionFadeUp>
                <div style={{ maxWidth: 780 }}>
                  <span className="eyebrow">Why London is different</span>
                  <h2>London SEO is not the same as SEO anywhere else</h2>
                  <p className="lead">
                    London is the largest and most contested search market in the UK. The Office for
                    National Statistics puts London&apos;s GDP per head at{' '}
                    <a
                      href={SOURCES[0].url}
                      target="_blank"
                      rel="noopener"
                      className="src-link"
                    >
                      £69,077 in 2023, the highest of any UK region
                    </a>
                    , against £28,583 in the North East. That concentration of economic activity is
                    also a concentration of competitors bidding for the same words. Four things
                    change how a campaign has to be planned here.
                  </p>
                </div>
                <div className="grid2 mt-8">
                  <div className="card">
                    <h3>The most contested SERPs in the UK</h3>
                    <p style={{ fontSize: 14 }}>
                      A dense, high-value business population means the front page for
                      &quot;seo agency london&quot; or &quot;seo company london&quot; is fought over
                      harder than almost any other UK query. Winning needs all three levers moving
                      together. A single tactic, however well executed, stalls.
                    </p>
                  </div>
                  <div className="card">
                    <h3>London sells globally, so SEO goes international</h3>
                    <p style={{ fontSize: 14 }}>
                      A large share of London businesses serve customers well beyond the UK. That
                      makes hreflang, market-specific content, and a structure that stops your own
                      pages competing across countries essential rather than optional.
                    </p>
                  </div>
                  <div className="card">
                    <h3>You need local and national at the same time</h3>
                    <p style={{ fontSize: 14 }}>
                      A London business often has to win the map pack for its borough and the
                      national organic results for its category. A Camden clinic wants nearby
                      patients and wider authority. We run both in parallel so you show up two ways.
                    </p>
                  </div>
                  <div className="card">
                    <h3>London adopts AI search early</h3>
                    <p style={{ fontSize: 14 }}>
                      London&apos;s tech, finance, and creative sectors are among the heaviest users
                      of AI assistants for research. If your buyers already ask an assistant for
                      recommendations, being absent from those answers costs you enquiries today.
                    </p>
                  </div>
                </div>
              </MotionFadeUp>
            </div>
          </section>

          {/* ═══ 7. LOCAL SEARCH MECHANICS ═══ */}
          <section className="sec" id="local-mechanics">
            <div className="wrap">
              <MotionFadeUp>
                <div style={{ maxWidth: 780 }}>
                  <span className="eyebrow">Local search mechanics</span>
                  <h2>How local ranking works in London, step by step</h2>
                  <p className="lead">
                    Local search is the fastest route to enquiries for most London service
                    businesses, because the searcher already wants to buy. It is also the part most
                    often done badly. Here is exactly what we do and what actually decides the
                    result.
                  </p>
                </div>

                <div className="grid2 mt-8">
                  <div className="card">
                    <h3>Google Business Profile checklist</h3>
                    <p style={{ fontSize: 14, marginTop: 4 }}>
                      Your profile is a ranking asset, not a directory entry. We work through all of
                      it, then keep it current.
                    </p>
                    <CheckList items={GBP_CHECKLIST} />
                  </div>
                  <div className="card">
                    <h3>What the map pack weighs</h3>
                    <p style={{ fontSize: 14, marginTop: 4 }}>
                      Google publishes the broad factors. In a dense market the ones you can
                      influence matter more, because proximity is fixed.
                    </p>
                    <CheckList items={MAP_PACK_FACTORS} />
                  </div>
                </div>

                <div className="card mt-8">
                  <h3>Our rules for borough pages</h3>
                  <p style={{ fontSize: 14, marginTop: 4 }}>
                    Twenty near-identical borough pages is a doorway pattern. It gets filtered and it
                    dilutes the hub page you actually want ranking. So we hold to five rules.
                  </p>
                  <CheckList items={BOROUGH_PAGE_RULES} />
                </div>

                <p className="lead mt-6" style={{ maxWidth: 900 }}>
                  The markup that ties this together is Google&apos;s own{' '}
                  <a href={SOURCES[2].url} target="_blank" rel="noopener" className="src-link">
                    LocalBusiness structured data specification
                  </a>
                  , which lets you describe opening hours, departments, and service areas in a form
                  Google reads directly. We build it to spec and validate it. We also leave the star
                  rating property off pages that do not genuinely collect reviews, because a rating
                  a visitor cannot see is a trust problem waiting to happen.
                </p>
              </MotionFadeUp>
            </div>
          </section>

          {/* ═══ 8. LOCAL SEO ARCHITECTURE BLUEPRINT (visual) ═══ */}
          <LocalSeoArchitectureBlueprint
            city="London"
            region="uk"
            title="Local SEO architecture: from map pack to AI citation"
            subtitle="How your Google Business Profile, review velocity, JSON-LD schema, and page speed connect. Move through the layers to see where London enquiries are won and lost."
            ctaLabel="Get a free London SEO technical audit"
          />

          {/* ═══ 9. MID-PAGE CTA ═══ */}
          <MidPageCTA
            headline="Want to see which of these are broken on your London site?"
            sub="Send us the URL and we will run the technical crawl, the local audit, and the AI citation check, then send back a prioritised fix list in plain English."
            label="Get a free site review"
            note="No obligation. If we are not the right fit, you keep the audit."
          />

          {/* ═══ 10. SERVICES ═══ */}
          <section className="sec">
            <div className="wrap">
              <MotionFadeUp>
                <div style={{ textAlign: 'center' }}>
                  <span className="eyebrow">London SEO services</span>
                  <h2>Eight workstreams, run together rather than sold separately</h2>
                </div>
                <div className="grid4 mt-8">
                  <div className="card svc"><h3><span className="n">01</span>Technical SEO</h3><p>Speed, Core Web Vitals, crawlability, index coverage, and schema. Usually where the fastest wins hide.</p></div>
                  <div className="card svc"><h3><span className="n">02</span>Local SEO</h3><p>Google Business Profile, the map pack, reviews, citations, and borough pages that earn their place.</p></div>
                  <div className="card svc"><h3><span className="n">03</span>Ecommerce SEO</h3><p>Product and category pages built to rank and convert, plus faceted navigation that does not flood the index.</p></div>
                  <div className="card svc"><h3><span className="n">04</span>Content SEO</h3><p>Pages that answer what London buyers actually search, written to out-answer whoever holds the top spots now.</p></div>
                  <div className="card svc"><h3><span className="n">05</span>AI SEO / GEO / AEO</h3><p>Structure, cited facts, and answer-first pages that get you quoted by ChatGPT, Gemini, and Perplexity.</p></div>
                  <div className="card svc"><h3><span className="n">06</span>International SEO</h3><p>Hreflang, market-specific content, and multi-country structure for London brands that sell abroad.</p></div>
                  <div className="card svc"><h3><span className="n">07</span>Link building</h3><p>Digital PR and mention reclamation for links from credible UK and industry sites. No schemes, no shortcuts.</p></div>
                  <div className="card svc"><h3><span className="n">08</span>SEO audit</h3><p>A plain-English diagnosis of what is blocking your London site, free and with no obligation to continue.</p></div>
                </div>
              </MotionFadeUp>
            </div>
          </section>

          {/* ═══ 11. AREA EXPLORER (interactive) ═══ */}
          <section className="sec">
            <div className="wrap">
              <MotionFadeUp>
                <div style={{ maxWidth: 760 }}>
                  <span className="eyebrow">London, area by area · interactive</span>
                  <h2>Different London businesses need different SEO</h2>
                  <p className="lead">
                    Pick an area to see how the plan changes. The right approach for a Shoreditch
                    startup is the wrong one for a City law firm, and we read that difference before
                    writing a single line of content.
                  </p>
                </div>
                <AreaExplorer areas={AREAS} />
              </MotionFadeUp>
            </div>
          </section>

          {/* ═══ 12. COMPARISON TABLE ═══ */}
          <section className="sec dotbg">
            <div className="wrap">
              <MotionFadeUp>
                <span className="eyebrow">How we compare</span>
                <h2 style={{ maxWidth: 640 }}>
                  FactoryJet vs. a typical London agency vs. a freelancer
                </h2>
                <div className="table-scroll">
                  <table className="cmp-table">
                    <thead>
                      <tr>
                        <th>What you get</th>
                        <th className="fj">FactoryJet</th>
                        <th>Typical London agency</th>
                        <th>Freelancer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Lock-in contract</td><td className="fj"><span className="yes">None, month to month</span></td><td><span className="mid">6 to 12 months</span></td><td>Varies</td></tr>
                      <tr><td>AI SEO (GEO + AEO) included</td><td className="fj"><span className="yes">Yes</span></td><td><span className="no">Rarely</span></td><td><span className="no">Rarely</span></td></tr>
                      <tr><td>Technical + content + links</td><td className="fj"><span className="yes">All three</span></td><td><span className="mid">Often content only</span></td><td><span className="mid">Usually one</span></td></tr>
                      <tr><td>Local map pack + national organic</td><td className="fj"><span className="yes">Both</span></td><td><span className="mid">One or the other</span></td><td><span className="mid">One</span></td></tr>
                      <tr><td>Written scope before work starts</td><td className="fj"><span className="yes">Always</span></td><td><span className="mid">Sometimes</span></td><td><span className="mid">Sometimes</span></td></tr>
                      <tr><td>Who does the work</td><td className="fj"><span className="yes">Senior team</span></td><td><span className="mid">Often juniors</span></td><td>The freelancer</td></tr>
                    </tbody>
                  </table>
                </div>
              </MotionFadeUp>
            </div>
          </section>

          {/* ═══ 13. PROCESS + FIRST 90 DAYS ═══ */}
          <section className="sec" id="process">
            <div className="wrap">
              <MotionFadeUp>
                <div style={{ textAlign: 'center' }}>
                  <span className="eyebrow">How it works</span>
                  <h2>From free audit to compounding results in five steps</h2>
                </div>
                <div className="steps">
                  <div className="step card"><span className="k">01</span><h3>Free SEO audit</h3><p>Technical health, rankings, content gaps, local visibility, and where AI engines cite you or your rivals.</p></div>
                  <div className="step card"><span className="k">02</span><h3>Scope and plan</h3><p>We agree the work in writing, fastest wins first, with the engagement shape that fits: audit, milestones, or retainer.</p></div>
                  <div className="step card"><span className="k">03</span><h3>Fix and build</h3><p>Technical repairs, local setup, rewritten money pages, new content, and schema on the same page it describes.</p></div>
                  <div className="step card"><span className="k">04</span><h3>Earn authority</h3><p>Digital PR and mention reclamation compound while we track rankings and AI citations side by side.</p></div>
                  <div className="step card"><span className="k">05</span><h3>Report and refine</h3><p>A one-page report you can read in five minutes, then we reforecast against what actually moved.</p></div>
                </div>

                <div className="grid3 mt-8">
                  <div className="card">
                    <h3>Days 1 to 30: diagnose</h3>
                    <CheckList items={PHASE_1} />
                  </div>
                  <div className="card">
                    <h3>Days 31 to 60: fix</h3>
                    <CheckList items={PHASE_2} />
                  </div>
                  <div className="card">
                    <h3>Days 61 to 90: build</h3>
                    <CheckList items={PHASE_3} />
                  </div>
                </div>

                <p className="lead mt-6" style={{ maxWidth: 900 }}>
                  We are deliberate about timelines because Google is. Its own{' '}
                  <a href={SOURCES[1].url} target="_blank" rel="noopener" className="src-link">
                    SEO Starter Guide says some changes take effect in a few hours while others
                    could take several months
                  </a>
                  . That is the honest range, and it is why anyone promising page one by a fixed
                  date is either guessing or selling.
                </p>
              </MotionFadeUp>
            </div>
          </section>

          {/* ═══ 14. PERFORMANCE BENCHMARK ═══ */}
          <section className="sec dotbg">
            <div className="wrap">
              <MotionFadeUp>
                <div style={{ maxWidth: 780 }}>
                  <span className="eyebrow">Performance baseline</span>
                  <h2>The speed bar every London site is measured against</h2>
                  <p className="lead">
                    Page speed is a ranking input and a conversion input at the same time. We hold
                    sites to the published{' '}
                    <a href={SOURCES[3].url} target="_blank" rel="noopener" className="src-link">
                      Web Vitals thresholds
                    </a>
                    : Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint of 200
                    milliseconds or less, and Cumulative Layout Shift of 0.1 or less. Most London
                    sites we audit fail at least one.
                  </p>
                </div>
                <div className="mt-8">
                  <RegionalBenchmarkCard city="London" vertical="seo" />
                </div>
              </MotionFadeUp>
            </div>
          </section>

          {/* ═══ 15. REPORTING ═══ */}
          <section className="sec" id="reporting">
            <div className="wrap">
              <MotionFadeUp>
                <div style={{ maxWidth: 780 }}>
                  <span className="eyebrow">Reporting</span>
                  <h2>One page a month that you can actually read</h2>
                  <p className="lead">
                    Reporting is where most agency relationships quietly fail. A forty-page export
                    nobody opens is not transparency, it is cover. Ours fits on one page and is
                    written so a busy owner can read it between meetings.
                  </p>
                </div>
                <div className="grid2 mt-8">
                  <div className="card">
                    <h3>What is in it</h3>
                    <CheckList items={REPORT_INCLUDES} />
                  </div>
                  <div className="card" style={{ background: '#FAFAF7' }}>
                    <h3>What is kept out of it</h3>
                    <CrossList items={REPORT_EXCLUDES} />
                  </div>
                </div>
              </MotionFadeUp>
            </div>
          </section>

          {/* ═══ 16. FIT + WHAT WE NEED ═══ */}
          <section className="sec dotbg" id="fit">
            <div className="wrap">
              <MotionFadeUp>
                <div style={{ maxWidth: 780 }}>
                  <span className="eyebrow">Fit</span>
                  <h2>Who this suits, and who it does not</h2>
                  <p className="lead">
                    We would rather turn work down than take a retainer that was never going to
                    work. Read both lists honestly before you enquire.
                  </p>
                </div>
                <div className="grid2 mt-8">
                  <div className="card">
                    <h3>A good fit</h3>
                    <CheckList items={GOOD_FIT} />
                  </div>
                  <div className="card">
                    <h3>Not a good fit</h3>
                    <CrossList items={POOR_FIT} />
                  </div>
                </div>
                <div className="card mt-8">
                  <h3>What we need from you</h3>
                  <p style={{ fontSize: 14, marginTop: 4 }}>
                    Short list, but the work stalls without it. Every account below stays in your
                    name, not ours.
                  </p>
                  <CheckList items={CLIENT_INPUTS} />
                </div>
              </MotionFadeUp>
            </div>
          </section>

          {/* ═══ 17. MARKET + DEMAND ═══ */}
          <section className="sec">
            <div className="wrap">
              <MotionFadeUp>
                <span className="eyebrow">The London SEO market</span>
                <h2 style={{ maxWidth: 760 }}>
                  Thousands of London businesses search for an <mark>SEO agency</mark> every month
                </h2>
                <div className="msplit">
                  <div>
                    <p className="lead">
                      &quot;<mark>seo agency london</mark>&quot; alone draws around 3,600 searches a
                      month, with &quot;seo services london&quot; another 1,000, and comparison terms
                      such as &quot;best seo agency london&quot; adding more. The top three organic
                      results take most of the clicks, so the gap between page one and page two is
                      the gap between a full pipeline and silence. These are buyers with intent, not
                      people browsing for ideas.
                    </p>
                    <p className="lead">
                      We serve every London borough, from a City law firm to a Croydon clinic, and
                      pair local work with national organic so you show up whichever way a buyer
                      searches. Working remotely with regular video reviews keeps overheads out of
                      your scope, so more of the budget goes into work that moves rankings.
                    </p>
                    <div className="mstats">
                      <div className="mstat">
                        <div className="n">3,600</div>
                        <div className="l">&quot;seo agency london&quot; monthly searches</div>
                      </div>
                      <div className="mstat">
                        <div className="n">1,000</div>
                        <div className="l">&quot;seo services london&quot; monthly searches</div>
                      </div>
                    </div>
                    <div className="pills">
                      <Link href="/uk/london">London overview</Link>
                      <Link href="/uk/london/web-design">London web design</Link>
                      <Link href="/uk/seo">UK SEO</Link>
                      <Link href="/uk/local-seo">Local SEO</Link>
                      <Link href="/uk/ai-seo">AI search &amp; GEO</Link>
                      <Link href="/uk/seo-audit">Technical SEO audit</Link>
                    </div>
                  </div>
                  <div className="demand">
                    <div className="dh">
                      <p>London · Monthly Search Demand</p>
                      <span className="tag">DataForSEO · Aug 2026</span>
                    </div>
                    <DemandBars rows={DEMAND_ROWS} />
                    <div className="dsrc">
                      Source: DataForSEO, London / United Kingdom, August 2026
                    </div>
                  </div>
                </div>
              </MotionFadeUp>
            </div>
          </section>

          {/* ═══ 18. SOURCES ═══ */}
          <section className="sec dotbg" id="sources">
            <div className="wrap">
              <MotionFadeUp>
                <div style={{ maxWidth: 780 }}>
                  <span className="eyebrow">Sources</span>
                  <h2>Where the figures on this page come from</h2>
                  <p className="lead">
                    Every external number above is linked to its primary source so you can check it
                    rather than take our word for it. All four were verified on 25 August 2026.
                  </p>
                </div>
                <ol className="srcs mt-8">
                  {SOURCES.map((s) => (
                    <li key={s.id}>
                      <a href={s.url} target="_blank" rel="noopener">
                        {s.title}
                      </a>
                      <span className="pub">{s.label}</span>
                      <p>{s.note}</p>
                    </li>
                  ))}
                </ol>
              </MotionFadeUp>
            </div>
          </section>

          {/* ═══ 19. AUTHOR ═══ */}
          <section className="sec">
            <div className="wrap">
              <MotionFadeUp>
                <div style={{ maxWidth: 780 }}>
                  <span className="eyebrow">Who wrote this</span>
                  <h2>The person accountable for this page</h2>
                </div>
                <div className="mt-6">
                  <AuthorCard variant="light" />
                </div>
              </MotionFadeUp>
            </div>
          </section>

          {/* ═══ 20. FAQ ═══ */}
          <section className="sec dotbg" id="faq">
            <div className="wrap">
              <MotionFadeUp>
                <div style={{ textAlign: 'center' }}>
                  <span className="eyebrow">FAQ</span>
                  <h2>London SEO questions we get asked</h2>
                </div>
                <div className="faq-grid">
                  <aside className="faq-sidebar">
                    <span className="faq-sidebar-topics">Topics</span>
                    <nav className="faq-sidebar-nav">
                      {FAQ_CATEGORIES.map((c) => (
                        <a key={c.key} href={`#faq-${c.key}`}>
                          {c.label}
                          <span className="faq-nav-count">
                            {FAQ_ITEMS.filter((f) => f.category === c.key).length}
                          </span>
                        </a>
                      ))}
                    </nav>
                    <div className="faq-sidebar-cta">
                      <ModalCTAButton
                        label="Still have a question? Ask the founder →"
                        region="uk"
                        modalVariant="seo"
                        btnVariant="secondary-light"
                      />
                      <p>Replies within 24 hours.</p>
                    </div>
                  </aside>

                  <div>
                    {FAQ_CATEGORIES.map((c) => (
                      <div key={c.key} id={`faq-${c.key}`} style={{ marginBottom: 40 }}>
                        <div className="faq-cat-header">
                          <span className="faq-cat-bar" />
                          <p className="faq-cat-label">{c.label}</p>
                        </div>
                        {FAQ_ITEMS.filter((f) => f.category === c.key).map((f) => (
                          <details key={f.question} className="faq-item">
                            <summary>
                              <span className="q-text">{f.question}</span>
                              <span className="chevron">
                                <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
                                  <path
                                    d="M3 5L7 9L11 5"
                                    stroke="currentColor"
                                    strokeWidth="1.75"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                            </summary>
                            <div className="faq-ans">
                              <p>{f.answer}</p>
                            </div>
                          </details>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </MotionFadeUp>
            </div>
          </section>

          {/* ═══ 21. FINAL CTA ═══ */}
          <section className="sec">
            <div className="wrap">
              <MotionFadeUp>
                <div className="finalcta">
                  <h2>Ready to rank in London and in AI answers?</h2>
                  <p>
                    Start with a free SEO audit. We will show you where you stand today across
                    Google and AI search, with no cost and no obligation, then give you an honest
                    plan to close the gap.
                  </p>
                  <div className="cta-actions">
                    <ModalCTAButton
                      label="Get a free SEO audit →"
                      region="uk"
                      modalVariant="seo"
                      btnVariant="secondary-light"
                    />
                    <a className="cta-outline" href="/uk/london">
                      See our full London page
                    </a>
                  </div>
                </div>
              </MotionFadeUp>
            </div>
          </section>

          {/* ═══ 22. CITY + SERVICE LINKS ═══ */}
          <CityLinksUK currentCity="london" currentService="seo" />
        </main>
        <Footer />
      </div>
    </>
  );
}
