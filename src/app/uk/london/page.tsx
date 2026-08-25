import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MotionFadeUp from '@/components/v2/MotionFadeUp';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import MidPageCTA from '@/components/v2/MidPageCTA';
import AreaExplorer from '@/components/v2/AreaExplorer';
import ServiceRouter from '@/components/v2/ServiceRouter';
import AuthorCard from '@/components/v2/AuthorCard';
import CityLinksUK from '@/components/v2/CityLinksUK';
import './london-hub.css';

const CANONICAL = 'https://factoryjet.com/uk/london';
const UPDATED = '2026-08-25';

/* ─── Breadcrumb source of truth (drives the visible trail AND the JSON-LD) ─ */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'London', url: CANONICAL },
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

/* ─── Hero demand snapshot rows (SSR-safe static bars) ──────────────── */
const SNAPSHOT = [
  { kw: 'web design london', sub: ' · agency', v: '4,400', w: '100%', href: '/uk/london/web-design' },
  { kw: 'seo agency london', sub: '', v: '3,600', w: '82%', href: '/uk/london/seo' },
  { kw: 'web design agency london', sub: '', v: '2,400', w: '55%', href: '/uk/london/web-design' },
  { kw: 'ecommerce web design london', sub: '', v: '320', w: '18%', href: '/uk/london/ecommerce-development' },
  { kw: 'local seo london', sub: '', v: '260', w: '14%', href: '/uk/london/seo' },
];

/* ─── Service router routes (drives the interactive router) ─────────── */
const ROUTES: {
  rt: string;
  h: string;
  p: string;
  href: string;
  kv: [string, string][];
}[] = [
  {
    rt: 'Websites',
    h: 'Web Design London',
    p: 'Fast, conversion-first websites on the right platform for your goals: Next.js, Webflow, WordPress, Framer, or Shopify. Custom design, mobile-first, yours to keep.',
    href: '/uk/london/web-design',
    kv: [['Platforms', '5+'], ['Delivery', '4 wks / 7-day'], ['Lighthouse', '95+']],
  },
  {
    rt: 'E-Commerce',
    h: 'Ecommerce Development London',
    p: 'DTC and B2B stores built to convert, on Shopify, WooCommerce, or headless. Product pages, checkout, and the SEO to get found.',
    href: '/uk/london/ecommerce-development',
    kv: [['Platforms', 'Shopify · Woo'], ['B2B + DTC', 'Yes'], ['Own the code', '100%']],
  },
  {
    rt: 'SEO',
    h: 'SEO Agency London',
    p: 'Rank on Google and get cited by AI answers. Technical, local, ecommerce, and AI SEO, month to month with no lock-in.',
    href: '/uk/london/seo',
    kv: [['AI SEO', 'Included'], ['Contracts', 'Month to month'], ['Reporting', 'Monthly']],
  },
  {
    rt: 'AI',
    h: 'AI Agents & Automation',
    p: 'Custom AI agents that handle the repetitive work: intake, support, scheduling, and workflow automation, built into your stack.',
    href: '/services/ai-agent-development',
    kv: [['Custom agents', 'Yes'], ['Integrations', 'Your stack'], ['Founder-led', 'Yes']],
  },
];

/* ─── London areas (drives the interactive explorer) ────────────────── */
const AREAS = [
  {
    tag: 'Finance · Law · Insurance',
    name: 'City of London & Canary Wharf',
    strategy: 'Authority-led',
    body:
      'Regulated sectors compete on trust. We build the E-E-A-T signals, expert content, and technical credibility that Google and AI both reward. For a City law firm or a Canary Wharf fintech, named author pages and a clean entity structure carry more weight than a pile of thin blog posts, and that is what earns a citation in both search and AI answers.',
  },
  {
    tag: 'Tech · Fintech · SaaS',
    name: 'Shoreditch & Old Street',
    strategy: 'AI-citation first',
    body:
      'Silicon Roundabout buyers research in ChatGPT and Perplexity before they open Google, so generative and answer engine optimisation lead here, alongside fast, investor-ready sites on Next.js. For a Shoreditch startup, being quoted in an AI answer is where a growing share of your buyers now start, so we build for it from day one.',
  },
  {
    tag: 'Retail · Hospitality · DTC',
    name: 'Camden & Hackney',
    strategy: 'Ecommerce + local',
    body:
      'Independent brands need ecommerce that converts on mobile and a strong local map pack, so they show up for the product and for the customers nearby right now. We run both together, so a Hackney homeware brand ranks when someone searches the product and when someone searches for a shop close to them.',
  },
  {
    tag: 'Luxury · Art · Property',
    name: 'Mayfair & Knightsbridge',
    strategy: 'Premium & minimal',
    body:
      'Prime brands compete on restraint and reputation. We build premium, minimal sites and shape the brand SERP for a high-intent, low-price-sensitivity buyer. For a Mayfair gallery or a Knightsbridge property firm, that means protecting the first page of your own name and earning the credible links that reassure a discerning buyer before they enquire.',
  },
  {
    tag: 'Media · Creative · Agencies',
    name: 'Soho & Fitzrovia',
    strategy: 'Portfolio-led',
    body:
      'Creative firms need visually ambitious, portfolio-led sites that impress a room of art directors and still load fast. We pair that design ambition with the technical health and content depth to out-rank whoever holds the top spots now, so the work looks the part and gets found.',
  },
  {
    tag: 'Local services',
    name: 'Greater London',
    strategy: 'Local first',
    body:
      'From Croydon to Richmond, local firms need to be found by their own neighbourhood first: the map pack, reviews, a fully optimised Google Business Profile, and area pages. Local SEO is often the fastest route to enquiries for a service business, because the searcher already wants to buy and only needs to find someone close and credible.',
  },
];

/* ─── The five workstreams of an SEO engagement ─────────────────────── */
const WORKSTREAMS: { h: string; p: string }[] = [
  {
    h: 'Technical SEO',
    p: 'Making sure Google and the AI crawlers can reach every page, read it, and index it. Crawl errors, slow pages, broken redirects, duplicate URLs, and blocked resources all get fixed before anything else, because no amount of content rescues a page a crawler cannot open.',
  },
  {
    h: 'On-page and content SEO',
    p: 'Rewriting the pages that already earn impressions so they answer the question a Londoner actually typed. Titles, headings, internal links, and the first two hundred words carry most of the weight. New pages come after that, not before.',
  },
  {
    h: 'Local SEO',
    p: 'The Google map pack, your Google Business Profile, review flow, and pages for the boroughs you genuinely serve. For a plumber in Islington or a dental practice in Clapham, this is usually where the first enquiries come from.',
  },
  {
    h: 'Digital PR and links',
    p: 'Earning mentions from real UK publications, trade bodies, and local press. Slow, manual, and the single hardest part of competing in London. We never buy links or use networks, because that is what gets sites penalised.',
  },
  {
    h: 'AI search visibility',
    p: 'Structuring pages so answer engines can quote them: a direct answer near the top, question-shaped headings, and structured data that matches the visible text. We then check monthly whether ChatGPT, Gemini and Perplexity name you for your key questions.',
  },
];

/* ─── Deliverables: what actually lands in your inbox ───────────────── */
const DELIVERABLES: string[] = [
  'A full technical crawl of your site, with every issue ranked by how much traffic it is actually costing you',
  'A keyword map with real monthly search volumes for your London terms, not a vanity list',
  'A named list of the competitors who currently hold the positions you want, and how many sites link to them',
  'Rewritten titles, meta descriptions and headings for your money pages',
  'Structured data that matches the visible text on the page, checked in the Rich Results Test',
  'An internal linking plan so your service pages stop competing with each other',
  'A Google Business Profile audit covering categories, services, hours, photos and the borough you list',
  'A content brief for every new page, written before a word of copy is drafted',
  'Monthly position tracking for your named London terms, in a report you can read in five minutes',
  'A monthly AI visibility check across ChatGPT, Gemini and Perplexity for your core questions',
  'Search Console and Google Analytics 4 configured so London traffic is separated from the rest of the UK',
  'A short written note each month explaining what changed, what it moved, and what happens next',
];

/* ─── What we deliberately do not do ────────────────────────────────── */
const NOT_INCLUDED: string[] = [
  'Guaranteed rankings. Nobody can promise a number one position on Google, and any agency that does is telling you something untrue.',
  'Bought links, private blog networks, or link exchanges. These are the fastest route to a manual penalty.',
  'Hundreds of near-identical borough pages written from one template. Google treats those as doorway pages.',
  'Traffic reports full of impressions that never turn into an enquiry. We report on positions and enquiries.',
  'Locked-in annual contracts. SEO runs month to month with thirty days notice.',
  'Write access to your Search Console on day one. Read access is enough for an audit.',
];

/* ─── First 90 days ─────────────────────────────────────────────────── */
const PROCESS: { h: string; p: string }[] = [
  {
    h: 'Week 1: access, crawl and baseline',
    p: 'You give read access to Search Console and Google Analytics. We crawl the whole site, record where you rank today for your London terms, and take a Core Web Vitals reading so there is a before to compare against.',
  },
  {
    h: 'Week 1 to 2: demand check',
    p: 'We pull real monthly search volumes for the terms you care about and the ones you have not thought of. Some London terms look valuable and have almost no volume. We would rather tell you that in week one than in month six.',
  },
  {
    h: 'Week 2 to 3: fix what blocks indexing',
    p: 'Broken canonicals, redirect chains, noindex tags left on by mistake, orphan pages, and anything blocking a crawler. This is unglamorous and it is usually where the first movement comes from.',
  },
  {
    h: 'Week 3 to 6: rebuild the pages that already have impressions',
    p: 'Search Console shows which pages Google already puts in front of people. Those pages get rewritten first, because moving from position fourteen to position six is far cheaper than starting a new page from nothing.',
  },
  {
    h: 'Week 4 to 12: local signals and area pages',
    p: 'Google Business Profile, review flow, consistent contact details, and a genuine page for each borough you actually serve. If you serve one office in the City, you get one page, not thirty.',
  },
  {
    h: 'Month 2 onwards: content and coverage',
    p: 'New pages and articles for the questions your buyers ask, built from the demand check rather than from guesswork. Each one has a brief and a target term before anyone writes it.',
  },
  {
    h: 'Every month: report, review, decide',
    p: 'A thirty minute call, a written note, position tracking for your named terms, and an AI answer check. You decide what the next month focuses on.',
  },
];

/* ─── Questions to ask any agency, straight from Google guidance ────── */
const ASK_AGENCY: string[] = [
  'Can you show me examples of your previous work and share some success stories?',
  'Do you follow the Google Search Essentials?',
  'What kind of results do you expect to see, and in what timeframe?',
  'How do you measure your success?',
  'What is your experience in my industry?',
  'What is your experience in my country and city?',
  'How long have you been in business?',
  'How can I expect to communicate with you?',
  'Will you share every change you make to my site, and the reasoning behind it?',
  "If you advise on AI search, is your advice aligned with Google's own published guidance?",
];

/* ─── Warning signs, also from Google guidance ──────────────────────── */
const RED_FLAGS: string[] = [
  'A guarantee of first place in search results. Google states plainly that nobody can guarantee a number one ranking.',
  'A claimed special relationship with Google, or a paid priority submit.',
  'A request for write access to Search Console before any work has started.',
  'Secrecy about what they intend to do, or vague answers about method.',
  'Unsolicited email telling you your site is missing from the major search engines.',
  'Talk of link popularity schemes or submitting your site to thousands of search engines.',
  'Claims that a third-party tool is approved or endorsed by Google. Google does not endorse third-party SEO tools.',
];

/* ─── London local SEO checklist ────────────────────────────────────── */
const LOCAL_CHECK: string[] = [
  'A Google Business Profile with the correct primary category, real opening hours and the borough you actually trade in',
  'Name, address and phone number written identically everywhere they appear online',
  'A UK landline or a mobile you answer, listed on the page a searcher lands on, not buried on a contact form',
  'One page per area you genuinely serve, written about that area, with different content on each',
  'LocalBusiness structured data whose values match what a visitor can read on the page',
  'Real photographs of your premises, your team or your work, rather than stock images of a generic office',
  'A steady flow of reviews from real customers, with public replies to the awkward ones as well as the kind ones',
  'Transport and landmark references only where they are genuinely useful to a customer finding you',
  'Analytics configured so you can see London enquiries separately from the rest of the UK',
  'A check that your listing is not duplicated across old addresses from a previous office',
];

/* ─── Fit ───────────────────────────────────────────────────────────── */
const SUITS: string[] = [
  'A London business with a live site and at least a few months of Search Console history to work from',
  'A service firm that trades in specific boroughs and needs the map pack more than it needs national rankings',
  'An ecommerce brand whose product pages are indexed but never surface for the terms that matter',
  'A B2B firm whose buyers increasingly start in ChatGPT or Perplexity rather than in Google',
  'A team that can spare an hour a month and answer honest questions about who its customers are',
];

const NOT_SUITS: string[] = [
  'Anyone who needs a guaranteed number one position, or needs it inside a month',
  'A brand new domain expecting to outrank established London firms this year',
  'A business that will not grant read access to Search Console or to the site itself',
  'A company looking for volume content with nobody available to fact check it',
  'A one-off project with no appetite for the slow, repetitive part of the work',
];

/* ─── What the engagement asks of the client, in time ───────────────── */
const TIME_COST: string[] = [
  'About one hour for the kickoff call, where we ask who buys from you and why',
  'Roughly thirty minutes a month for the review call',
  'A couple of hours in the first fortnight to grant access and answer questions about your services',
  'An hour or so per long page if you want to review drafts before they go live, which we recommend',
  'Nothing else. No daily stand-ups, no meeting series, no weekly slide deck',
];

/* ─── Comparison rows ───────────────────────────────────────────────── */
const CMP_ROWS: [string, string, string][] = [
  ['Who does the work', 'Sold by a director, delivered by whoever is free that week', 'A senior team with the founder on every account'],
  ['Scope and fees', 'Open-ended day rates and a scope that grows quietly', 'Fixed scope agreed in writing before work starts'],
  ['Speed', 'Treated as a nice to have and rarely measured', 'Core Web Vitals measured before and after, and the reading is shared'],
  ['Code and IP', 'A proprietary CMS or a licensed theme you rent', 'The full repository pushed to your own GitHub'],
  ['Reporting', 'Traffic charts that go up and never explain why', 'Positions for your named London terms, plus an AI answer check'],
  ['Leaving', 'Notice periods and a rebuild when you go', 'Month to month, and the site is already yours'],
];

/* ─── Verified external sources ─────────────────────────────────────── */
const SOURCES: { href: string; label: string; cite: string; note: string }[] = [
  {
    href: 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo',
    label: 'Do you need an SEO?',
    cite: 'Google Search Central, Search documentation',
    note: 'The source of the interview questions and the warning signs above. It also states that appearing in organic results costs nothing and that advertising with Google has no effect on organic rankings.',
  },
  {
    href: 'https://www.ons.gov.uk/businessindustryandtrade/business/activitysizeandlocation/bulletins/ukbusinessactivitysizeandlocation/2025',
    label: 'UK business: activity, size and location, 2025',
    cite: 'Office for National Statistics, released 24 September 2025',
    note: 'The source of the London business counts on this page. London held 538,000 VAT or PAYE registered businesses in March 2025, which is 19.7 per cent of the UK total of 2.73 million.',
  },
  {
    href: 'https://developers.google.com/search/docs/appearance/ai-features',
    label: 'AI features and your website',
    cite: 'Google Search Central, Search documentation',
    note: 'Google states there are no additional requirements to appear in AI Overviews or AI Mode, and no special file or schema you need to add. It does ask that your structured data matches the visible text on the page.',
  },
  {
    href: 'https://developers.google.com/search/docs/appearance/structured-data/local-business',
    label: 'Local business (LocalBusiness) structured data',
    cite: 'Google Search Central, Search documentation',
    note: 'The reference we follow for local markup, including validating with the Rich Results Test and checking the page is not blocked by robots.txt or a noindex tag.',
  },
];

/* ─── FAQ source of truth (drives UI + FAQPage schema) ──────────────── */
const FAQ_CATEGORIES = [
  { key: 'f1', label: 'About us in London' },
  { key: 'f2', label: 'Websites & platforms' },
  { key: 'f3', label: 'SEO & AI search' },
  { key: 'f4', label: 'Cost & working together' },
  { key: 'f5', label: 'London specifics' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // About us in London
  { category: 'f1', question: 'Are you a web design and digital agency based in London?',
    answer: 'FactoryJet is a UK web design and digital agency that serves London clients across every borough, from the City to Hackney. We work remotely with regular video reviews. That keeps central-London overhead off your invoice without slowing the work or lowering the quality.' },
  { category: 'f1', question: 'What services do you offer London businesses?',
    answer: 'Web design, ecommerce and Shopify development, WordPress, SEO and AI SEO, and AI agents. One senior team covers the whole build, from the website to how it gets found on Google and in AI answers.' },
  { category: 'f1', question: 'Do you meet clients in person in London?',
    answer: 'We run projects remotely with scheduled video calls, which most London clients prefer because it is faster and cheaper. If an in-person kickoff matters for your project, we can arrange one.' },
  { category: 'f1', question: 'Who actually does the work on my project?',
    answer: 'Senior designers and engineers, with the founder involved on every account. You are not handed to a junior after the sales call. If that changes at any point, we tell you before it happens rather than after.' },
  { category: 'f1', question: 'Why choose FactoryJet over a traditional London agency?',
    answer: 'You get a fixed quote instead of open-ended day rates, full code ownership, monthly rather than annual commitments, and a team that builds for both Google and AI search. Most London agencies do one or two of those. Very few do all four.' },

  // Websites & platforms
  { category: 'f2', question: 'How long does it take to build a website?',
    answer: 'A standard custom site is about four weeks, with a seven-day express option for up to a five-page site. Larger ecommerce and web-app builds are scoped individually so the timeline is honest rather than optimistic.' },
  { category: 'f2', question: 'Which platform should I use: WordPress, Shopify, Webflow, Framer, or Next.js?',
    answer: 'Next.js for speed and custom sites, WordPress for content you edit daily, Webflow for design-led sites with a visual CMS, Framer for a fast launch, and Shopify for ecommerce. We recommend the platform that fits your goals, not the one that is easiest for us.' },
  { category: 'f2', question: 'Do I own the website and the code?',
    answer: 'Yes, one hundred percent. Code goes to your GitHub at launch, and your content and data stay yours. There is no lock-in and no rented platform. If you leave, you take a working site with you rather than a rebuild.' },
  { category: 'f2', question: 'Will a redesign hurt my existing rankings?',
    answer: 'It can, and that is exactly why redesign is the best moment to involve an SEO. Google says the earlier you bring one in, the better. We map every old URL to a new one, keep the pages that already earn impressions, and watch Search Console closely for a month after launch.' },

  // SEO & AI search
  { category: 'f3', question: 'Do you offer SEO for London businesses?',
    answer: 'Yes. Our SEO agency London service covers technical SEO, local SEO, ecommerce SEO, and content SEO, month to month with no lock-in. We show you exactly where you rank for your London target terms each month, and which pages moved.' },
  { category: 'f3', question: 'How long does SEO take to work in London?',
    answer: 'Technical fixes can move things in weeks. Local and long-tail terms usually take three to six months. The biggest London head terms are held by sites with hundreds of referring domains built up over years, and honestly those take years to challenge. We say so up front rather than after you have paid for six months.' },
  { category: 'f3', question: 'Can you get my business cited in ChatGPT and Google AI answers?',
    answer: 'We can improve the odds, and we measure it monthly. There is no switch to flip. Google says plainly that there are no special requirements or extra markup for AI Overviews, so the work is the same solid SEO plus clear, answer-first pages that a model can quote without guessing.' },
  { category: 'f3', question: 'What are GEO and AEO?',
    answer: 'GEO means generative engine optimisation and AEO means answer engine optimisation. Both describe structuring content so AI assistants can lift a clean answer out of it. In practice that means a direct answer near the top, question-shaped headings, and structured data that matches the visible text. Both are part of our SEO work, not a separate product.' },
  { category: 'f3', question: 'Do you do local SEO for a specific London borough?',
    answer: 'Yes. Local SEO in London covers the Google map pack, your Google Business Profile, and pages for the areas you genuinely serve, whether that is Camden, Islington, or Croydon. We build one page per real service area, never thirty spun variants, because Google treats those as doorway pages.' },
  { category: 'f3', question: 'Can you guarantee a first page ranking in London?',
    answer: 'No, and neither can anyone else. Google states directly that no one can guarantee a number one ranking, and warns you to walk away from any agency that claims it. What we can guarantee is that you will see your real positions every month and know exactly what we changed.' },

  // Cost & working together
  { category: 'f4', question: 'How much does SEO cost in London?',
    answer: 'It depends on how competitive your terms are, how big your site is, and whether you need new content or only fixes to what exists. We quote in one of three shapes: a one-off audit, a fixed-price project with milestones, or a monthly retainer. You get the number in writing after a short call, before any work starts.' },
  { category: 'f4', question: 'How much does an SEO agency typically cost?',
    answer: 'UK agencies price in three ways: a one-off audit, a fixed-price project, or a monthly retainer. Central London firms usually charge a day rate on top. The honest answer is that the cost tracks the competitiveness of your terms far more than the size of the agency. Ask any agency to show you the scope behind the number before you compare quotes.' },
  { category: 'f4', question: 'Is an SEO agency worth it?',
    answer: 'It is worth it when you already have search demand you are not capturing, and not worth it when nobody is searching for what you sell. Check the second thing first. Google notes that a small local business can do much of the work itself using the official starter guide, so an agency should be earning its place, not filling a gap you could close yourself.' },
  { category: 'f4', question: 'What are the best SEO agencies in the UK?',
    answer: 'There is no single best, and any list that claims otherwise is usually a paid placement. Judge on evidence instead: ask for work in your sector, ask what results they expect and in what timeframe, ask how they measure success, and check their references. Google publishes those exact questions in its own guidance on hiring an SEO.' },
  { category: 'f4', question: 'Do you charge central-London day rates?',
    answer: 'No. We are a senior remote team working to a fixed, scoped quote. Your budget goes into the build rather than into a Zone 1 office. The scope is written down before we start, so the figure you agree is the figure you pay.' },
  { category: 'f4', question: 'Do I have to sign a long contract?',
    answer: 'No. Websites are fixed-scope projects, and SEO runs month to month with thirty days notice to pause or stop. We keep clients because the work performs, not because they are locked in.' },
  { category: 'f4', question: 'What access do you need, and when?',
    answer: 'Read access to Google Search Console and Google Analytics 4 to begin, plus a look at your Google Business Profile. That is enough for a full audit. Write access to the site comes later and only once you have agreed what we are changing. Google specifically advises granting read access only at the audit stage.' },
  { category: 'f4', question: 'What happens after the site goes live?',
    answer: 'We stay on for support. Small changes are quick, and because you own the code, you are never locked in if you decide to take the site elsewhere. If you want SEO afterwards it starts as a separate, month to month arrangement.' },

  // London specifics
  { category: 'f5', question: 'Which London areas and boroughs do you work with?',
    answer: 'All of them: the City, Shoreditch, Soho, Camden, Islington, Hackney, Westminster, Canary Wharf, Mayfair, and Greater London out to Croydon and Richmond. A remote-first process means your location never limits the work.' },
  { category: 'f5', question: 'Which London industries do you work with most?',
    answer: 'Finance, law, and professional services in the City and Canary Wharf; tech and fintech in Shoreditch; retail, hospitality, and DTC in Camden and Hackney; luxury and property in Mayfair; and media and creative in Soho. Each needs a different site and a different SEO plan.' },
  { category: 'f5', question: 'Why is SEO harder in London than in the rest of the UK?',
    answer: 'Because the competition is denser than anywhere else in the country. ONS counted 538,000 VAT or PAYE registered businesses in London in March 2025, which is 19.7 per cent of every business in the UK. The firms holding page one for London terms have usually spent years earning links, so the realistic route in is the specific, lower-competition terms first.' },
  { category: 'f5', question: 'Can you help a London startup on a tight budget?',
    answer: 'Yes. We offer affordable website design routes for early-stage London startups, then scale the site and SEO as you grow. You still own everything we build from day one, so nothing has to be rebuilt when the budget grows.' },
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
      '@type': 'LocalBusiness',
      '@id': `${CANONICAL}#localbusiness`,
      name: 'FactoryJet: Web Design & Digital Agency in London',
      url: CANONICAL,
      areaServed: { '@type': 'City', name: 'London' },
      provider: { '@id': 'https://factoryjet.com/#organization' },
      parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.5074,
        longitude: -0.1278,
      },
      // NOTE (2026-08-25): an aggregateRating of 4.9 from 64 reviews was removed
      // here. No review of that count is visible on this page and the figure was
      // never sourced, which makes it both a Google structured-data policy breach
      // and a claim we cannot stand behind. Do not reinstate it without real,
      // on-page, verifiable reviews.
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Chief Technical Architect',
        url: 'https://factoryjet.com/about',
        sameAs: [
          'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
          'https://github.com/factoryjet-tech',
        ],
      },
    },
    breadcrumbSchema,
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Web Design & Digital Agency in London | FactoryJet',
      headline: 'Web Design & Digital Agency in London',
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
        name: s.label,
        url: s.href,
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: FAQ_ITEMS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: 'Web Design & Digital Agency in London | FactoryJet',
  description:
    'FactoryJet is a web design and SEO agency for London businesses: websites, ecommerce, SEO and AI search. Fixed scope, you own the code, no lock-in.',
  alternates: {
    canonical: CANONICAL,
    languages: {
      'en-GB': CANONICAL,
      'x-default': CANONICAL,
    },
  },
  openGraph: {
    title: 'Web Design & Digital Agency in London | FactoryJet',
    description:
      'Web design, ecommerce, SEO, and AI for London businesses. Fixed scope, you own the code, senior team, no lock-in.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/hero-uk.webp', width: 1200, height: 630, alt: 'Web Design & Digital Agency in London by FactoryJet' }],
  },
  robots: { index: true, follow: true },
};

export default function LondonHubPage() {
  return (
    <>
      <script id="ld-london-hub" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-londonhub">
        <main>

        {/* ═══ 0. VISIBLE BREADCRUMB ═══
            Fed by the same `crumbs` array as the BreadcrumbList JSON-LD above, so
            the trail a person reads and the trail Google reads cannot drift apart.
            Alignment with .wrap is pinned in london-hub.css. */}
        <Breadcrumbs items={crumbs} />

        {/* ═══ 1. HERO ═══ */}
        <section className="hero dotbg">
          <div className="aurora a1" />
          <div className="aurora a2" />
          <div className="wrap">
            <div className="hgrid">
              <MotionFadeUp>
                <h1>The <span className="grad">London</span> partner for web, commerce &amp; AI</h1>
                <p className="sub">
                  FactoryJet is a <mark>web design and digital agency in London</mark>. We build fast websites,
                  ecommerce stores, and AI-native SEO for London brands, and we get you found on Google and in AI
                  answers.
                </p>
                <div className="hactions">
                  <ModalCTAButton label="Get my free quote →" region="uk" btnVariant="primary-light" />
                  <a className="b2" href="#services">Explore London services</a>
                </div>
                <div className="hstats">
                  <div className="hstat"><div className="n">500+</div><div className="l">sites delivered</div></div>
                  <div className="hstat"><div className="n">7-day</div><div className="l">express delivery available</div></div>
                  <div className="hstat"><div className="n">100%</div><div className="l">you own the code</div></div>
                </div>
                <div style={{ maxWidth: 540, marginTop: 24 }}>
                  <HeroInlineForm region="uk" source="uk_london_hub_hero" submitLabel="Get my free quote" />
                </div>
              </MotionFadeUp>

              <MotionFadeUp delay={0.1}>
                <div className="snap">
                  <div className="sh">
                    <p>What London searches for</p>
                    <span className="tag">DataForSEO · monthly</span>
                  </div>
                  {SNAPSHOT.map((s) => (
                    <a className="srow" href={s.href} key={s.kw + s.v}>
                      <div className="t">
                        <span className="kw">{s.kw}{s.sub ? <span>{s.sub}</span> : null}</span>
                        <span className="v">{s.v}</span>
                      </div>
                      <div className="sbar"><i style={{ width: s.w }} /></div>
                    </a>
                  ))}
                  <div className="sf">Tap a term to jump to the service · Source: DataForSEO, Jul 2026</div>
                </div>
              </MotionFadeUp>
            </div>
          </div>

          <div className="skyline wrap">
            <svg viewBox="0 0 1120 96" preserveAspectRatio="none" aria-hidden="true">
              <path className="fillcity" d="M0,96 L0,70 L40,70 L40,56 L70,56 L70,74 L110,74 L120,48 L130,74 L180,74 L180,52 L210,52 L210,36 L226,24 L242,36 L242,52 L270,52 L270,78 L320,78 L320,46 L360,46 L360,60 L400,60 L400,32 L420,32 L420,16 L432,16 L432,32 L452,32 L452,60 L500,60 L500,72 L540,72 L540,44 L560,32 L580,44 L580,72 L640,72 L640,52 L680,52 L680,74 L720,74 L720,40 L740,40 L740,24 L756,24 L756,40 L776,40 L776,74 L830,74 L830,56 L870,56 L870,68 L920,68 L920,46 L960,46 L960,66 L1010,66 L1010,52 L1050,52 L1050,72 L1090,72 L1090,60 L1120,60 L1120,96 Z" />
              <path className="ln" d="M0,70 L40,70 L40,56 L70,56 L70,74 L110,74 L120,48 L130,74 L180,74 L180,52 L210,52 L210,36 L226,24 L242,36 L242,52 L270,52 L270,78 L320,78 L320,46 L360,46 L360,60 L400,60 L400,32 L420,32 L420,16 L432,16 L432,32 L452,32 L452,60 L500,60 L500,72 L540,72 L540,44 L560,32 L580,44 L580,72 L640,72 L640,52 L680,52 L680,74 L720,74 L720,40 L740,40 L740,24 L756,24 L756,40 L776,40 L776,74 L830,74 L830,56 L870,56 L870,68 L920,68 L920,46 L960,46 L960,66 L1010,66 L1010,52 L1050,52 L1050,72 L1090,72 L1090,60 L1120,60" />
            </svg>
          </div>
        </section>

        {/* ═══ 2. INTRO (answer-first, quotable) ═══ */}
        <section className="sec">
          <div className="wrap">
            <MotionFadeUp>
              <div className="intro">
                <span className="eyebrow">London, in one place</span>
                <p className="lead">
                  FactoryJet is a <mark>web design and digital agency in London</mark> that covers the whole build: the
                  website, the online store, the SEO, and the AI. One senior team takes a London business from a first
                  site to being found on Google and quoted in AI answers, at a fixed scope with no lock-in.
                </p>
                <p>
                  London is the most contested market in the UK. The Office for National Statistics counted{' '}
                  <a
                    className="exlink"
                    href="https://www.ons.gov.uk/businessindustryandtrade/business/activitysizeandlocation/bulletins/ukbusinessactivitysizeandlocation/2025"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    538,000 VAT or PAYE registered businesses in London in March 2025
                  </a>
                  , which is 19.7 per cent of every registered business in the country. That is why a template site and
                  a generic agency rarely cut it here. We build fast, custom <mark>website design london</mark> that
                  loads on a phone on the Northern line, and back it with SEO that ranks on Google and gets cited by
                  ChatGPT, Gemini, and Perplexity. Whether you are a Shoreditch startup, a City law firm, or a Camden
                  retailer, the plan starts with your customer, not a theme.
                </p>
              </div>
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 3. SERVICE ROUTER (interactive). This is the one dark block on the page. ═══ */}
        <section className="sec dotbg">
          <div className="wrap">
            <MotionFadeUp>
              <ServiceRouter routes={ROUTES} />
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 4. WHAT AN SEO AGENCY IN LONDON ACTUALLY DOES ═══ */}
        <section className="sec" id="what-it-is">
          <div className="wrap">
            <MotionFadeUp>
              <div style={{ maxWidth: 780 }}>
                <span className="eyebrow">The service, plainly</span>
                <h2>What an SEO agency in London actually does</h2>
                <p className="lead" style={{ marginTop: 14 }}>
                  An SEO agency in London gets your business in front of the people already searching for what you
                  sell, without paying for each click. The work splits into five parts: fixing what stops search
                  engines reading your site, rewriting the pages that already get shown, winning the local map results,
                  earning mentions from other websites, and making sure AI assistants can quote you.
                </p>
                <p>
                  It is worth being clear about what search visibility is not. Google states that it{' '}
                  <a
                    className="exlink"
                    href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    never accepts money to include or rank sites in its results
                  </a>
                  , and that it costs nothing to appear in organic search. Nobody can buy a position. What you are
                  paying an agency for is the time, the judgement, and the grind.
                </p>
              </div>

              <div className="split">
                {WORKSTREAMS.map((w) => (
                  <div className="panel" key={w.h}>
                    <h3>{w.h}</h3>
                    <p style={{ fontSize: 14, marginTop: 8 }}>{w.p}</p>
                  </div>
                ))}
                <div className="panel">
                  <h3>Where London differs</h3>
                  <p style={{ fontSize: 14, marginTop: 8 }}>
                    Every one of those five is harder here, because the firms already holding page one have spent years
                    building up links. The realistic route in for most London businesses is the specific, lower
                    competition terms first, and the head terms much later.
                  </p>
                </div>
              </div>
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 5. SERVICES (keyword-rich, linked) ═══ */}
        <section className="sec dotbg" id="services">
          <div className="wrap">
            <MotionFadeUp>
              <div style={{ maxWidth: 720 }}>
                <span className="eyebrow">London services</span>
                <h2>Everything a London business needs online, from one team</h2>
              </div>
              <div className="slist">
                <a className="scard" href="/uk/london/web-design">
                  <span className="ic"><svg viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M8 21h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></span>
                  <div><h3><mark>Web Design London</mark></h3><p>Custom <mark>website design london</mark> on Next.js, Webflow, WordPress, Framer, and Shopify. Fast, mobile-first, conversion-led.</p><span className="go">Explore web design London →</span></div>
                </a>
                <a className="scard" href="/uk/london/seo">
                  <span className="ic"><svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" /><path d="m21 21-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></span>
                  <div><h3><mark>SEO Agency London</mark></h3><p>Technical, <mark>local seo london</mark>, ecommerce SEO, and <mark>ai seo london</mark> (GEO and AEO). Rank on Google and get cited by AI.</p><span className="go">Explore SEO London →</span></div>
                </a>
                <a className="scard" href="/uk/london/ecommerce-development">
                  <span className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M3 6h18M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="2" /></svg></span>
                  <div><h3>E-Commerce Development</h3><p><mark>Ecommerce website design london</mark> for DTC and B2B, built to convert on Shopify, WooCommerce, or headless.</p><span className="go">Explore ecommerce →</span></div>
                </a>
                <a className="scard" href="/uk/shopify-development">
                  <span className="ic"><svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="20" r="1.6" fill="currentColor" /><circle cx="18" cy="20" r="1.6" fill="currentColor" /><path d="M2 3h3l2.6 13h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                  <div><h3>Shopify Development</h3><p>Certified Shopify Partner builds, Shopify Plus, migrations, and <mark>shopify web design london</mark>.</p><span className="go">Explore Shopify →</span></div>
                </a>
                <a className="scard" href="/services/wordpress-development">
                  <span className="ic"><svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M3 9h18" stroke="currentColor" strokeWidth="2" /></svg></span>
                  <div><h3>WordPress Development</h3><p><mark>WordPress web design london</mark>: editable sites your team can update without a developer.</p><span className="go">Explore WordPress →</span></div>
                </a>
                <a className="scard" href="/services/ai-agent-development">
                  <span className="ic"><svg viewBox="0 0 24 24" fill="none"><rect x="4" y="7" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="2" /><path d="M9 12v2M15 12v2M12 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></span>
                  <div><h3>AI Agents &amp; Automation</h3><p>Custom AI agents for intake, support, and scheduling, plus <mark>ai seo</mark> to get quoted by ChatGPT and Gemini.</p><span className="go">Explore AI →</span></div>
                </a>
              </div>
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 6. WHAT YOU GET ═══ */}
        <section className="sec" id="deliverables">
          <div className="wrap">
            <MotionFadeUp>
              <div style={{ maxWidth: 780 }}>
                <span className="eyebrow">What lands in your inbox</span>
                <h2>What you actually get, and what you will not get</h2>
                <p style={{ fontSize: 16, marginTop: 12 }}>
                  A vague scope is how SEO invoices grow quietly. Here is the full list, written down before anything
                  starts, plus the things we deliberately refuse to do.
                </p>
              </div>

              <div className="split-73">
                <div className="panel">
                  <h3>Included in every London SEO engagement</h3>
                  <ul className="chk">
                    {DELIVERABLES.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
                <div className="panel">
                  <h3>Not included, on purpose</h3>
                  <ul className="chk no">
                    {NOT_INCLUDED.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <figure>
                <img
                  src="/images/uk/london-seo-og.webp"
                  alt="A laptop on a desk beside a window looking out on London brick townhouses and a modern glass office block"
                  width={1200}
                  height={630}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  Most London SEO work happens in Search Console and a text editor, not in a meeting room.
                </figcaption>
              </figure>
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 7. FIRST 90 DAYS ═══ */}
        <section className="sec dotbg" id="process">
          <div className="wrap">
            <MotionFadeUp>
              <div style={{ maxWidth: 780 }}>
                <span className="eyebrow">How it runs</span>
                <h2>The first 90 days, week by week</h2>
                <p style={{ fontSize: 16, marginTop: 12 }}>
                  Nothing here is a surprise. This is the same order we work in for a Clapham dental practice and for a
                  Canary Wharf software firm, because the sequence matters more than the sector.
                </p>
              </div>
              <ol className="steps">
                {PROCESS.map((s) => (
                  <li key={s.h}>
                    <b>{s.h}</b>
                    {s.p}
                  </li>
                ))}
              </ol>

              <div className="callout">
                <h3>The honest answer on timing</h3>
                <p>
                  Technical fixes can move positions inside a few weeks. Local and long-tail London terms usually take
                  three to six months. The largest London head terms, the ones with thousands of searches a month, are
                  held by sites with hundreds of other websites linking to them, built up over many years. Challenging
                  those is a multi-year project and we will tell you that before you commit, not after. If an agency
                  promises you those terms this quarter, ask them to put it in writing.
                </p>
              </div>
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 8. MID-PAGE CTA (roughly halfway down the page) ═══ */}
        <MidPageCTA
          headline="Find out what your London site is actually ranking for"
          sub="Send the URL and we will send back a short written review of your Search Console positions, your technical blockers, and the London terms worth going after first."
          label="Get a free site review"
          note="Bhavesh replies within one business day."
        />

        {/* ═══ 9. LONDON MARKET ═══ */}
        <section className="sec" id="market">
          <div className="wrap">
            <MotionFadeUp>
              <div style={{ maxWidth: 780 }}>
                <span className="eyebrow">The London market</span>
                <h2>London is the UK&apos;s biggest and most contested market</h2>
                <p style={{ fontSize: 16, color: 'var(--n500)', marginTop: 12 }}>
                  Demand is huge, and so is the competition. The businesses that show up on page one and in AI answers
                  take the work. Here is the monthly search demand we are helping London brands win, and the size of
                  the field they are competing in.
                </p>
              </div>
              <div className="mstats">
                <div className="mstat"><div className="n">4,400</div><div className="l">&quot;web design london&quot; searches / month</div><div className="src">DataForSEO, Jul 2026</div></div>
                <div className="mstat"><div className="n">3,600</div><div className="l">&quot;seo agency london&quot; searches / month</div><div className="src">DataForSEO, Aug 2026</div></div>
                <div className="mstat"><div className="n">538k</div><div className="l">VAT or PAYE businesses in London</div><div className="src">ONS, March 2025</div></div>
                <div className="mstat"><div className="n">19.7%</div><div className="l">of all UK businesses are in London</div><div className="src">ONS, March 2025</div></div>
              </div>
              <p style={{ fontSize: 14, marginTop: 18, maxWidth: 780 }}>
                London holds more registered businesses than any other UK region by a wide margin, and the count grew
                again between 2023 and 2025 while several regions shrank. That is the field you are competing in, and
                it is the reason a page that would rank in Hull needs to be substantially better to rank here.
              </p>
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 10. WHY LONDON PICKS US + COMPARISON ═══ */}
        <section className="sec dotbg" id="why-us">
          <div className="wrap">
            <MotionFadeUp>
              <div style={{ maxWidth: 780 }}>
                <span className="eyebrow">The direct comparison</span>
                <h2>Central-London quality, without the central-London overhead</h2>
                <p style={{ fontSize: 16, marginTop: 12 }}>
                  This is not a swipe at every London agency. Plenty are excellent. It is a description of the six
                  things buyers tell us went wrong last time, and what we do instead.
                </p>
              </div>

              <div className="tscroll">
                <table className="cmp">
                  <thead>
                    <tr>
                      <th scope="col">What you are judging</th>
                      <th scope="col">What buyers tell us went wrong</th>
                      <th scope="col">How FactoryJet works</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CMP_ROWS.map((r) => (
                      <tr key={r[0]}>
                        <th scope="row">{r[0]}</th>
                        <td>{r[1]}</td>
                        <td>{r[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid3" style={{ marginTop: 32 }}>
                <div className="card"><h3>A senior team, remote</h3><p>The founder is involved on every project. No junior handed your account after the sales call, and no Zone 1 office overhead loaded onto your invoice.</p></div>
                <div className="card"><h3>Built for how London browses</h3><p>Most of London reads on a phone, on the move, on patchy signal. We build mobile-first and pass Core Web Vitals green, so you do not lose customers before the page loads.</p></div>
                <div className="card"><h3>Found on Google and in AI</h3><p>Search is splitting between Google and AI assistants. We build for both, so a London customer finds you whether they search or ask ChatGPT.</p></div>
              </div>
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 11. HOW TO CHOOSE ANY AGENCY ═══ */}
        <section className="sec" id="how-to-choose">
          <div className="wrap">
            <MotionFadeUp>
              <div style={{ maxWidth: 780 }}>
                <span className="eyebrow">Due diligence</span>
                <h2>Questions to ask any London SEO agency before you sign</h2>
                <p style={{ fontSize: 16, marginTop: 12 }}>
                  Ask us these too. They come from Google&apos;s own published guidance on hiring an SEO, so they are a
                  fair test rather than our marketing. If an agency struggles with the timeframe question or the
                  measurement question, that tells you most of what you need to know.
                </p>
              </div>

              <div className="split">
                <div className="panel">
                  <h3>Ask every agency</h3>
                  <ul className="chk">
                    {ASK_AGENCY.map((q) => (
                      <li key={q}>{q}</li>
                    ))}
                  </ul>
                </div>
                <div className="panel">
                  <h3>Walk away if you hear</h3>
                  <ul className="chk no">
                    {RED_FLAGS.map((q) => (
                      <li key={q}>{q}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <p style={{ fontSize: 14, marginTop: 20, maxWidth: 820 }}>
                Both lists are drawn from{' '}
                <a
                  className="exlink"
                  href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Search Central: Do you need an SEO?
                </a>
                {' '}Worth reading before you speak to anyone, including us. Google also notes that if you run a small
                local business you can probably do much of this work yourself, starting with its own SEO starter guide.
              </p>
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 12. AREA EXPLORER (interactive) ═══ */}
        <section className="sec dotbg" id="areas">
          <div className="wrap">
            <MotionFadeUp>
              <div style={{ maxWidth: 760 }}>
                <span className="eyebrow">London, area by area</span>
                <h2>We know how each part of London does business</h2>
                <p style={{ fontSize: 16, color: 'var(--n500)', marginTop: 12 }}>Pick an area to see how we approach it.</p>
              </div>
              <AreaExplorer areas={AREAS} />
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 13. LOCAL SEO CHECKLIST ═══ */}
        <section className="sec" id="local-seo">
          <div className="wrap">
            <MotionFadeUp>
              <div className="split-73">
                <div>
                  <span className="eyebrow">Local specifics</span>
                  <h2>The London local SEO checklist</h2>
                  <p style={{ fontSize: 16, marginTop: 12 }}>
                    For most London service businesses, the map pack brings enquiries before the blue links do. The
                    searcher already wants to buy and only needs to find someone close and credible. Work through this
                    list before you spend anything on content.
                  </p>
                  <ul className="chk two">
                    {LOCAL_CHECK.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                  <p style={{ fontSize: 14, marginTop: 18 }}>
                    On the markup point, Google&apos;s{' '}
                    <a
                      className="exlink"
                      href="https://developers.google.com/search/docs/appearance/structured-data/local-business"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LocalBusiness structured data documentation
                    </a>
                    {' '}sets out the required properties and asks you to validate with the Rich Results Test, then
                    check the page is not blocked by robots.txt, a noindex tag, or a login. It also warns that it can
                    take several days after publishing before Google finds and crawls a page, so patience is part of
                    the method.
                  </p>
                </div>
                <div className="panel">
                  <h3>Who this suits</h3>
                  <ul className="chk">
                    {SUITS.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <h3 style={{ marginTop: 22 }}>Who it does not suit</h3>
                  <ul className="chk no">
                    {NOT_SUITS.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 14. AI SEARCH, HONESTLY ═══ */}
        <section className="sec dotbg" id="ai-search">
          <div className="wrap">
            <MotionFadeUp>
              <div className="split-73">
                <div>
                  <span className="eyebrow">AI search</span>
                  <h2>Getting quoted by ChatGPT, Gemini and Perplexity</h2>
                  <p className="lead" style={{ marginTop: 14 }}>
                    There is no secret file, tag or schema that gets you into an AI answer. Google says so directly:
                    there are{' '}
                    <a
                      className="exlink"
                      href="https://developers.google.com/search/docs/appearance/ai-features"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      no additional requirements to appear in AI Overviews or AI Mode
                    </a>
                    , and no new machine-readable file or special structured data you need to add.
                  </p>
                  <p>
                    So the work is the same solid SEO, done properly, plus writing that a model can lift a clean answer
                    from. In Google&apos;s own list, the things that matter are letting crawlers in, linking your pages
                    together internally, giving people a good page experience, keeping important content in text rather
                    than locked in an image, and making sure your structured data matches the visible text. That last
                    one is the rule most agencies quietly break, and it is the one we check on every page we ship.
                  </p>
                  <p>
                    Google also notes that AI Overviews only appear when its systems judge them useful, so they often
                    do not trigger at all. Anyone selling you a guaranteed AI Overview placement is selling something
                    that does not exist. What we do instead is check monthly whether the assistants name you for the
                    questions your buyers actually ask, and report the answer either way.
                  </p>
                </div>
                <div className="panel">
                  <h3>What the engagement asks of you</h3>
                  <ul className="chk">
                    {TIME_COST.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <figure style={{ marginTop: 20 }}>
                    <img
                      src="/images/uk/london/web-design-og.webp"
                      alt="A tablet on a long light wood table in a converted London warehouse office with exposed brick walls and steel-framed windows"
                      width={1200}
                      height={630}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption>Remote-first, with the founder on every review call.</figcaption>
                  </figure>
                </div>
              </div>
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 15. FAQ (canonical sidebar + accordion) ═══ */}
        <section className="sec" id="faq">
          <div className="wrap">
            <MotionFadeUp>
              <div style={{ textAlign: 'center' }}>
                <span className="eyebrow">FAQ</span>
                <h2>Working with a London agency, answered</h2>
              </div>
              <div className="faqwrap">
                <nav className="faqnav" aria-label="FAQ categories">
                  {FAQ_CATEGORIES.map((c) => (
                    <a key={c.key} href={`#${c.key}`}>
                      {c.label}
                      <span className="c">{FAQ_ITEMS.filter((f) => f.category === c.key).length}</span>
                    </a>
                  ))}
                </nav>
                <div>
                  {FAQ_CATEGORIES.map((c) => (
                    <div className="faqcat" id={c.key} key={c.key}>
                      <h3>{c.label}</h3>
                      {FAQ_ITEMS.filter((f) => f.category === c.key).map((f) => (
                        <details key={f.question}>
                          <summary>
                            {f.question}
                            <span className="cv">
                              <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </span>
                          </summary>
                          <div className="ans">{f.answer}</div>
                        </details>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 16. AUTHOR + SOURCES ═══ */}
        <section className="sec dotbg" id="sources">
          <div className="wrap">
            <MotionFadeUp>
              <div style={{ maxWidth: 780 }}>
                <span className="eyebrow">Who wrote this</span>
                <h2>Who runs the work, and what this page is based on</h2>
                <p style={{ fontSize: 16, marginTop: 12 }}>
                  Every factual claim on this page links to a primary source you can open and check. Search volumes
                  come from DataForSEO and are labelled with the month they were measured.
                </p>
              </div>
              <div style={{ marginTop: 24 }}>
                <AuthorCard />
              </div>
              <div className="panel" style={{ marginTop: 24 }}>
                <h3>Sources</h3>
                <ul className="srcs">
                  {SOURCES.map((s) => (
                    <li key={s.href}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
                      <span className="cite">{s.cite}</span>
                      {s.note}
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: 12, marginTop: 16, fontFamily: 'var(--mono)', color: 'var(--n400)' }}>
                  Page last reviewed {UPDATED}.
                </p>
              </div>
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 17. FINAL CTA ═══ */}
        <section className="sec">
          <div className="wrap">
            <MotionFadeUp>
              <div className="finalcta">
                <h2>Let&apos;s build something London remembers</h2>
                <p>Tell us what you are working on. You will hear back from the founder within one business day with honest, specific next steps.</p>
                <div className="cta-wrap">
                  <ModalCTAButton label="Get my free quote →" region="uk" btnVariant="secondary-light" />
                </div>
              </div>
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 18. OTHER UK CITIES AND SERVICES ═══ */}
        <CityLinksUK currentCity="london" />

        </main>
        <Footer />
      </div>
    </>
  );
}
