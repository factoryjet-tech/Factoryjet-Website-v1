import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import HeroInlineForm from '@/components/HeroInlineForm';
import WhatsAppCTA from '@/components/v2/WhatsAppCTA';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

import './fargo-seo.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /us/fargo/seo - Fargo local-SEO city page. Built 2026-06-11.
   "The Radius" layout. Real SiteHeader/SiteFooter/ModalCTAButton/WhatsAppCTA.
   Styles scoped under .fseo (./fargo-seo.css, next/font vars, no webfont request).
   CSS radar-rings hero with ND|MN state line (text LCP, zero CLS), market photos
   lazy below the fold → Lighthouse 100 target. Source: research/mockup-us-fargo-seo-v4.html.
   Honesty: NO pricing anywhere (2026-06-11 rule), free audit, no guarantee,
   month-to-month; real clients only; founder byline. No fake LocalBusiness
   address, no self-serving Review schema.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/fargo/seo';

export const metadata: Metadata = {
  title: 'Fargo SEO Company | Local SEO Services in Fargo, ND | FactoryJet',
  description:
    'FactoryJet is a Fargo SEO company that wins the Map Pack, organic rankings, and AI answers across the two-state Fargo-Moorhead metro. Local SEO services in Fargo, West Fargo, Moorhead, and the 100 mile trade radius. Free SEO audit, month-to-month, built by senior engineers.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Fargo SEO Company | Local SEO Services in Fargo, ND | FactoryJet',
    description:
      'Fargo SEO company for the whole two-state metro: Map Pack, organic, and AI answers in one plan covering Fargo, West Fargo, Moorhead, and the trade radius. Free SEO audit, month-to-month, senior engineers, founder-led.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://factoryjet.com/blog-images/us-fargo-seo-og.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Fargo SEO company, local SEO services in Fargo, North Dakota',
      },
    ],
  },
  robots: { index: true, follow: true },
};

/* ── FAQ (22) - 10 from the approved v4 mockup verbatim + 12 keyword/process adds ── */

const FAQ_ITEMS: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: 'Who is the best SEO company in Fargo?',
    a: 'The one that can show calls and direction requests from both sides of the river, not just ranking screenshots. FactoryJet competes for that title with senior engineers doing the work, two-state coverage, and AI citations tracked monthly. Whoever you shortlist as the best SEO agency in Fargo, ask for one client result with real numbers before signing anything.',
  },
  {
    q: 'Do you cover West Fargo and Moorhead, Minnesota too?',
    a: 'Yes, that is the core of the plan. The metro is one market split by a state line, and ranking in Fargo alone means missing the Minnesota buyers who would happily cross the river. Every engagement includes service-area pages and profile work for both states.',
  },
  {
    q: 'How much does SEO cost in Fargo?',
    a: 'It depends on how many rings of the radius you want to win, how contested your category is, and how much groundwork your current site gives us. A clinic targeting the metro and a parts dealer selling across two states need different scopes. We explain your exact scope and price on a free call, in writing, before you commit to anything.',
  },
  {
    q: 'How long until I see results in the Fargo market?',
    a: 'Often faster than in big metros, because the organic competition here is thin. Technical fixes and Google Business Profile work frequently move Map Pack visibility in four to eight weeks. Competitive organic terms take three to six months. We show progress markers from week one so you are never guessing.',
  },
  {
    q: 'What should I look for before I hire an SEO expert in Fargo?',
    a: 'Three things: proof with real numbers, knowledge of the two-state metro (if they have never thought about Moorhead, keep looking), and contract terms you can walk away from. If you do hire SEO expert in Fargo help directly, a genuine local SEO expert will explain the plan in plain words and put the scope in writing before asking for a signature.',
  },
  {
    q: 'What do the best local SEO services in Fargo include?',
    a: 'Google Business Profile management, a review system, citations in both states, service-area pages for the metro and the radius towns, technical SEO, and answer-first content. If a proposal is missing the two-state piece or never mentions AI answers, it was written for a different city and relabeled.',
  },
  {
    q: 'Can you get my business into ChatGPT and Google AI answers?',
    a: 'Yes. AI engines already answer Fargo service questions with specific business names, and the candidate pool here is small enough that structured sites get cited quickly. We do the AEO work, then report your citations per engine every month so you can watch the number move.',
  },
  {
    q: 'I searched "SEO near me" and found agencies from Chicago and Pennsylvania. Why?',
    a: 'Out-of-market agencies build templated Fargo pages to catch exactly that search, swap the city name, and route you to a sales team that could not find Broadway on a map. It is a fair tactic and a useful test: ask them one specific question about this market and listen. Then ask us the same question.',
  },
  {
    q: 'Do I need a new website before starting SEO?',
    a: 'Usually no. If your site is fast and Google can read it, we build on it. If the site itself is the bottleneck, we will say so on the first call and you decide. We build websites too, which keeps that advice honest, and it is also why our SEO clients’ sites hold 100 out of 100 speed scores.',
  },
  {
    q: 'What is in the free SEO audit?',
    a: 'Your rankings in Fargo, West Fargo, and Moorhead, your Map Pack positions, site speed, citation health, and a live check of what AI engines say about your business. Thirty minutes, screen shared, and the findings are yours either way.',
  },
  {
    q: 'What does a Fargo SEO company actually do month to month?',
    a: 'A written list, not vibes: Google Business Profile updates, content shipped, citations fixed in both states, reviews earned, technical issues closed, and a one-page report tying it all to calls. If a Fargo SEO company cannot show you last month’s deliverables for a real client, names redacted, keep shopping.',
  },
  {
    q: 'Is Fargo SEO different from SEO in a big metro?',
    a: 'The mechanics are the same, the math is different. Fargo SEO plays out in thinner search results with a two-state wrinkle and a 100 mile trade radius, so consistent work moves rankings faster here than the same work would in Minneapolis or Denver. The flip side: once a competitor locks in the Map Pack and the AI answers, displacing them takes much longer than beating them to it would have.',
  },
  {
    q: 'How do I choose an SEO company in Fargo without getting burned?',
    a: 'Ask every SEO company Fargo offers the same four questions: who exactly does the work, what gets delivered each month in writing, how is success measured, and can you leave without a penalty. Then add the local fifth: how do you handle Moorhead being in Minnesota? Any agency that dodges those questions, or guarantees a number one position, has already answered them for you.',
  },
  {
    q: 'Does it matter that you operate as an SEO company in Fargo, ND specifically?',
    a: 'For the strategy, yes. An SEO company in Fargo, ND has to plan around things a generic vendor never sees: the state line through the metro, the ag calendar driving seasonal searches, the rural patients and buyers driving in from two hours out, and a hiring market so tight that inbound leads matter more than headcount. Our pages cite Sanford, Grand Farm, and the equipment economy because the plan is built on them.',
  },
  {
    q: 'I searched for a Fargo Moorhead SEO consultant company. Is that what you are?',
    a: 'Yes, that phrase describes the work precisely. We consult on and execute SEO across the whole Fargo-Moorhead metro as one engagement: one strategy, two states, with rankings reported by city so you can see Fargo, West Fargo, and Moorhead separately. People type that exact search because they sense the metro is one market; we build the plan the same way.',
  },
  {
    q: 'Do you offer local SEO services in Fargo on their own?',
    a: 'Yes. If the Map Pack is your battleground, we can run local SEO services in Fargo focused purely on your Google Business Profile, reviews, citations, and service-area pages on both sides of the river. The best local SEO services in Fargo are the ones measured in phone calls, so that is how we report, whatever the scope.',
  },
  {
    q: 'What is included in your SEO services in Fargo month to month?',
    a: 'Everything in the eight-job list above: Google Business Profile management, reviews, citations in both states, service-area pages, technical SEO, answer-first content, earned mentions, and per-engine AI tracking. Our SEO services in Fargo run as one plan rather than a menu of upsells, so the engagement never skips the unglamorous work that actually moves rankings.',
  },
  {
    q: 'What makes the best AI SEO agency in Fargo different from a traditional one?',
    a: 'A traditional shop optimizes for ten blue links. An AI SEO agency, sometimes called an AEO agency in Fargo, also structures your site so ChatGPT, Gemini, Claude, and Google AI Overviews can quote it, then proves it with per-engine citation counts. If you are evaluating the best AI SEO agency in Fargo, ask one question: can you show me my citations by engine, monthly? Very few can. We do.',
  },
  {
    q: 'Can you rank my business in the rural radius towns, like Wahpeton or Detroit Lakes?',
    a: 'Yes, and for many Fargo businesses the radius is where the margin lives. Buyers in Wahpeton, Detroit Lakes, Valley City, and Grand Forks search for Fargo providers because the specialists and the inventory are here, and they arrive ready to buy. We build service-area content for the drive-in towns you actually serve, so those searches find you instead of ending at whoever bought the ad that day.',
  },
  {
    q: 'How do you handle Google reviews and our Google Business Profile?',
    a: 'We manage your Google Business Profile weekly: categories, services, photos, posts, and Q&A, tuned for two-state visibility. For reviews, we set up a simple ask-and-respond system your team can run in minutes per job, because steady review velocity from real customers beats any shortcut and is one of the strongest local ranking signals you control.',
  },
  {
    q: 'Is there a contract, setup fee, or cancellation penalty?',
    a: 'No long-term contract, no setup fee, no penalty. Everything is month to month with 30 days notice, and you keep everything we build: your profile, your content, your citations, your data. We think an SEO partner should re-earn the engagement every month, so that is how we bill.',
  },
  {
    q: 'Should a small business in Fargo invest in SEO or just run ads?',
    a: 'Ads buy visibility that stops the moment the budget does, and in Fargo they price highest exactly when you need them, during the cold snap or the planting rush. Small business SEO services build an asset instead: rankings, reviews, and AI citations that keep producing calls without a per-click bill. Many clients run both early on, then watch the paid share shrink as organic takes over.',
  },
];

/* ── Section data ── */

const STATS: { n: string; unit: string; t: string; s: string }[] = [
  { n: '267,793', unit: '', t: 'people in the Fargo-Moorhead metro, up 7.2% since 2020 and 28.3% since 2010, plus a rural draw that roughly doubles the real market for many businesses', s: 'US Census, July 2024 estimate' },
  { n: '2.8', unit: '%', t: 'North Dakota unemployment against 4.3% nationally. Hiring is brutal here, which makes every inbound lead worth more than another job posting', s: 'BLS, 2025' },
  { n: '2', unit: ' states', t: 'in one Map Pack market. Fargo and West Fargo sit in North Dakota, Moorhead and Dilworth in Minnesota, and your customers cross the river without thinking about it', s: 'The two-state problem' },
];

const FACTS: { k: string; v: string }[] = [
  { k: 'Metro population', v: '267,793' },
  { k: 'Growth since 2020', v: '+7.2%' },
  { k: 'Growth since 2010', v: '+28.3%' },
  { k: 'Largest employer', v: 'Sanford Health' },
  { k: 'Tech anchor', v: 'Microsoft Fargo' },
  { k: 'Agtech anchor', v: 'Grand Farm' },
  { k: 'States in one metro', v: '2' },
  { k: 'Trade radius', v: '100+ miles' },
];

const MARKET: { badge: string; h: string; p: string }[] = [
  { badge: '🏥', h: 'Healthcare and clinics', p: "Sanford Health, the largest employer in the Dakotas, has its biggest presence in Fargo, and together with Essentia it anchors a medical hub that pulls patients from rural eastern North Dakota and western Minnesota. Around those systems sits a deep layer of independent practices: dentists, physical therapists, chiropractors, home care, med spas. For them the game is the Map Pack and reviews, and the patients arriving from 60 miles away search \"Fargo\" plus the specialty, which is exactly the query a hospital system's location page never answers well. An independent practice with answer-first pages can outrank a billion-dollar system for the searches that fill its own schedule." },
  { badge: '🌾', h: 'Agriculture and agtech', p: "The Red River Valley is one of the most productive farm regions in the country, and Fargo has turned that into a technology cluster: Grand Farm runs a 590-acre innovation campus with around 80 industry partners and was named program manager for the USDA's National Proving Grounds for agtech, picking up another $7 million in state funding in late 2025. The suppliers, consultants, and software firms orbiting that ecosystem sell regionally and nationally, which means they need organic authority content, not just a map pin. Most have neither." },
  { badge: '🚜', h: 'Ag and construction equipment', p: 'Case IH builds equipment in Fargo and Bobcat is headquartered in West Fargo, with roughly 7,000 people working in equipment manufacturing across the metro. Around the big plants sits the SMB layer we actually serve: parts dealers, repair shops, attachment suppliers, and B2B distributors whose buyers search by part number, brand, and problem. These searches have almost no local competition and very high order values, and the ag calendar makes them seasonal and predictable. A dealer who ranks before planting season owns that season.' },
  { badge: '💾', h: 'Software and technology', p: "Microsoft's Fargo campus, the old Great Plains operation that sold for $1.1 billion in 2001, still employs about 1,600 people and seeded a generation of local software talent now spread across the Emerging Prairie startup scene. The B2B services around it, IT support, custom development, staffing, accounting for tech firms, are bought by people who research like engineers. They compare, they read, and increasingly they ask an AI assistant for a shortlist before they ever open a search results page." },
  { badge: '🛍️', h: 'Retail with a 100-mile draw', p: "Around 9,000 people work in retail here because Fargo is the shopping trip for two states' worth of small towns. West Acres Mall and the Broadway boutiques downtown compete for buyers who drove an hour and planned the visit in advance, often starting with a search the night before. \"Open Saturday,\" \"in stock,\" and \"worth the drive\" intent is real and almost nobody optimizes for it. Local inventory visibility plus a fast site captures customers the franchise stores never even count." },
  { badge: '🔧', h: 'Construction and home services', p: 'A metro that grew 28.3% in fifteen years needs builders, HVAC crews, roofers, plumbers, and remodelers continuously, and the winters here make some of those searches genuinely urgent. When a furnace dies at 20 below, the three names in the Map Pack get the call and nobody scrolls further. Review velocity, service-area pages on both sides of the river, and emergency-intent content decide who wins those nights. This is the most contested corner of Fargo SEO, and still thinner than the same fight in any major metro.' },
];

const MATH: { h: string; big: string; p: string }[] = [
  { h: 'The hiring math', big: '2.8% vs 4.3%', p: 'North Dakota unemployment against the national rate, per BLS. Every competitor is fishing in the same tiny talent pool, and a new hire takes months to pay for themselves even when you find one. Growth through headcount is the expensive path in this market.' },
  { h: 'The inbound math', big: '24/7', p: 'A page that ranks works around the clock, never calls in sick, and never quits for a competitor across town. Small business SEO services exist for exactly this situation: more qualified calls and quote requests flowing to the team you already have, without adding a single seat.' },
  { h: 'The seasonality math', big: '2 calendars', p: 'Fargo runs on the weather calendar and the ag calendar. Furnace and roofing searches spike with the first cold snap; equipment and parts searches follow planting and harvest. Rankings built in the quiet months are standing in position when the spike hits. Ads bought during the spike pay peak prices for the same click.' },
  { h: 'The first-mover math', big: 'Thin SERPs', p: "Most agencies in this market lead with paid media or design, and almost nobody is structuring sites for AI answers yet. Fargo's local search results are genuinely winnable in months, not years. The same work in Minneapolis or Denver fights ten times the competition for the same position." },
];

const DELIVERABLES: { mm: string; h: string; p: string }[] = [
  { mm: '01 · Local', h: 'Google Business Profile', p: 'Managed weekly, not quarterly. Categories, services, photos, posts, and Q&A maintained like the storefront it is, tuned for two-state visibility.' },
  { mm: '02 · Local', h: 'Reviews engine', p: 'A repeatable system for earning, answering, and learning from reviews. Velocity beats volume, and we build velocity that outruns the franchises.' },
  { mm: '03 · Local', h: 'Citations and listings', p: 'Your name, address, and phone made consistent across the directories Google and AI engines actually check, in both North Dakota and Minnesota.' },
  { mm: '04 · Local', h: 'Service-area pages', p: 'Dedicated pages for Fargo, West Fargo, Moorhead, and the radius towns you serve, each written for that place, never copy-pasted.' },
  { mm: '05 · Technical', h: 'Technical SEO', p: 'Speed, clean code, schema, crawlability. We build to 100 out of 100 Google speed scores and prove it on request.' },
  { mm: '06 · Content', h: 'Answer-first content', p: 'Pages built around the questions Fargo buyers actually type, written plainly, reviewed by a human every time.' },
  { mm: '07 · Authority', h: 'Earned mentions', p: 'Real citations in places search and AI engines trust. No bulk links, no directories nobody reads, no risk to the rankings you build.' },
  { mm: '08 · Proof', h: 'Five minute reporting', p: 'Calls, direction requests, rankings by city, and AI citations per engine. One page, monthly, readable over coffee.' },
];

const PLAN: { wk: string; h: string; p: string }[] = [
  { wk: 'Week 1', h: 'The audit, live', p: 'We pull up your rankings in Fargo, West Fargo, and Moorhead, your Map Pack position on both sides of the river, your site speed, and what ChatGPT says about your business while you watch. You see the same screen we do. Findings are yours to keep whether or not we continue.' },
  { wk: 'Weeks 2 to 4', h: 'Fix the foundation', p: 'Technical repairs first: speed, schema, crawl issues, and the Google Business Profile rebuilt properly. This is the unglamorous work most Fargo SEO agencies skip because it does not show up in a slide deck. It shows up in rankings instead.' },
  { wk: 'Weeks 5 to 8', h: 'Build the two-state surface area', p: 'Service-area pages for every city and radius town you cover, on both banks of the river, plus answer-first content for your highest intent questions and the citation cleanup that makes Google trust your address in two states at once.' },
  { wk: 'Weeks 9 to 12', h: 'Earn the trust signals', p: 'Review velocity systems go live. Earned mentions begin landing. The first AI citation checks run, engine by engine, so we know exactly where you stand on the newest surface before your competitors know it exists.' },
  { wk: 'Every month after', h: 'Compound and report', p: 'One page, five minutes: calls, directions, rankings by city, AI citations, and what we are doing next month. SEO is compounding work and the report shows the curve, not vanity numbers.' },
];

const FACTORS: { n: string; h: string; p: string }[] = [
  { n: '01', h: 'Relevance', p: 'Does your profile and site clearly say what you do? A profile listing "HVAC contractor" with services itemized beats a vague one every time. We make relevance explicit on every page, in language both Google and AI engines parse cleanly, so a parts dealer ranks for the parts and a clinic ranks for the specialty.' },
  { n: '02', h: 'Distance', p: 'You cannot move your shop, but you can tell Google exactly where you work. In Fargo, distance has a state line in the middle of it. Service-area pages for West Fargo, Moorhead, and the radius towns widen your effective footprint across the river and down the highways, where your real customers already live.' },
  { n: '03', h: 'Prominence', p: 'Reviews, mentions, links, and the general weight of evidence that you are a real, busy business. This compounds monthly, and in a market with thin organic competition it compounds fast. The earlier you start, the harder you are to displace, which is the whole argument for moving before your competitors notice the gap.' },
];

const COMPARE: { k: string; fj: string; local: string; natl: string }[] = [
  { k: 'Who does the work', fj: 'Senior engineers, founder on every call', local: 'PPC team first, SEO as the side dish', natl: 'Offshore queue behind an account manager' },
  { k: 'Core motion', fj: 'Organic first: rankings you own outright', local: 'Ad spend first: leads stop when budget stops', natl: 'Same template for Fargo as for 40 other cities' },
  { k: 'Two-state coverage', fj: 'Fargo, West Fargo, and Moorhead pages built in', local: 'One profile, one city, Minnesota ignored', natl: 'Does not know Moorhead is a different state' },
  { k: 'AI search', fj: 'Citations tracked per engine, monthly', local: 'Not offered', natl: 'Not offered' },
  { k: 'Site speed', fj: 'Built and kept at 100 out of 100', local: 'Depends on the theme', natl: 'Never measured' },
  { k: 'Local knowledge', fj: 'Pages cite Sanford, Grand Farm, the ag calendar', local: 'Real, but pointed at ad campaigns', natl: 'Swaps the city name and ships it' },
  { k: 'Contract', fj: 'Month to month, 30 day notice', local: 'Six to twelve month retainers', natl: 'Twelve months, auto-renew' },
  { k: 'Reporting', fj: 'One page: calls, rankings by city, AI citations', local: 'Ad dashboard with rankings bolted on', natl: '20 page PDF nobody reads' },
];

const INDUSTRIES: { h: string; p: string }[] = [
  { h: 'Clinics, dental, and PT', p: 'Map Pack plus reviews plus patient-question content, tuned for the rural patients who drive to Fargo because the specialists are here.' },
  { h: 'HVAC, plumbing, roofing', p: 'Two-state service-area coverage, emergency-intent pages for the first cold snap, and review velocity that outruns the franchises.' },
  { h: 'Equipment and parts dealers', p: 'Brand, model, and part-number search coverage for the ag and construction equipment economy around Case IH and Bobcat.' },
  { h: 'Law firms and CPAs', p: 'One page per practice area per city, written plainly enough for AI engines to quote and precise enough for the bar.' },
  { h: 'Retail and restaurants', p: '"Worth the drive" visibility for the 100-mile shopping radius, local inventory intent, and the fast site that respects a planned trip.' },
  { h: 'B2B, SaaS, and agtech', p: 'Authority content for buyers who compare three providers and ask an AI assistant before one phone call gets made.' },
];

const TAGS = ['breweries', 'real estate teams', 'chiropractors', 'med spas', 'auto repair', 'veterinarians', 'gyms', 'landscaping', 'snow removal', 'storage', 'childcare', 'senior care'];

const RINGS: { num: string; h: string; em: string; p: string; kws: string[] }[] = [
  {
    num: 'RING 1',
    h: 'Fargo proper:',
    em: 'win the Map Pack',
    p: 'The dense center of search gravity: downtown, the medical corridor around Sanford, NDSU, and the neighborhoods south along the interstate. This is where "near me" searches live and where the three Map Pack positions are decided. Google Business Profile managed weekly, review velocity, and pages tuned for the specific corridors where your customers actually are. For most service businesses, winning this ring alone pays for the entire engagement, and it is still only a third of the market.',
    kws: ['fargo seo company', 'seo company fargo nd', 'local seo services'],
  },
  {
    num: 'RING 2',
    h: 'The metro:',
    em: 'two states, one strategy',
    p: "West Fargo is one of the fastest growing cities in North Dakota and the home of Bobcat's headquarters. Moorhead and Dilworth sit minutes away in Minnesota with their own colleges, their own tax rules, and their own search results. Buyers use \"Fargo,\" \"West Fargo,\" \"Moorhead,\" and \"Fargo-Moorhead\" interchangeably, but Google does not. We build service-area pages on both banks so the whole metro sees you, whichever name the searcher used and whichever state Google thinks they are standing in.",
    kws: ['fargo moorhead seo consultant company', 'west fargo', 'moorhead mn'],
  },
  {
    num: 'RING 3',
    h: 'The trade radius:',
    em: 'own the drive-in towns',
    p: 'Wahpeton is 47 miles out. Detroit Lakes is 50. Grand Forks is 81. People in those towns search for Fargo providers because that is where the specialists, the inventory, and the expertise are, and they arrive ready to buy because the trip itself is a commitment. Service-area content for the radius captures patients, equipment buyers, and weekend shoppers your competitors never even count, because their analytics never told them those customers existed. In a metro of 267,793 people, the radius is how your real market quietly doubles.',
    kws: ['service area pages', 'rural radius seo', 'ai answers for the region'],
  },
];

/* ── JSON-LD: WebPage + Service (NO offers/pricing) + FAQPage (derived) ── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Fargo SEO Company | Local SEO Services in Fargo, ND',
  url: CANONICAL,
  description:
    'FactoryJet is a Fargo SEO company offering local SEO services across the two-state Fargo-Moorhead metro and its 100 mile trade radius: Google Business Profile, reviews, citations, technical SEO, content, and AI search optimization, with a free audit and month-to-month terms.',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'FactoryJet', url: 'https://factoryjet.com' },
  author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhaveshbarot/', jobTitle: 'Founder, FactoryJet' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Local SEO Services in Fargo, ND',
  serviceType: 'Search engine optimization',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: [
    { '@type': 'City', name: 'Fargo', containedInPlace: { '@type': 'State', name: 'North Dakota' } },
    { '@type': 'City', name: 'West Fargo', containedInPlace: { '@type': 'State', name: 'North Dakota' } },
    { '@type': 'City', name: 'Moorhead', containedInPlace: { '@type': 'State', name: 'Minnesota' } },
    { '@type': 'City', name: 'Dilworth', containedInPlace: { '@type': 'State', name: 'Minnesota' } },
    { '@type': 'City', name: 'Wahpeton', containedInPlace: { '@type': 'State', name: 'North Dakota' } },
    { '@type': 'City', name: 'Detroit Lakes', containedInPlace: { '@type': 'State', name: 'Minnesota' } },
    { '@type': 'City', name: 'Grand Forks', containedInPlace: { '@type': 'State', name: 'North Dakota' } },
  ],
  url: CANONICAL,
  description:
    'Fargo SEO services covering the Google Map Pack, organic rankings, and AI answers across two states: Google Business Profile management, reviews, citations, service-area pages for the metro and trade radius, technical SEO, answer-first content, earned mentions, and per-engine AI citation reporting. Month-to-month, free audit.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function FargoSeoPage() {
  return (
    <>
      <script id="fargo-seo-webpage-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script id="fargo-seo-service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="fargo-seo-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SiteHeader />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'US SEO Services', url: 'https://factoryjet.com/services/seo' },
          { name: 'Fargo SEO', url: CANONICAL },
        ]}
      />

      <div className="fseo">
        {/* 1 HERO - The Radius */}
        <section className="hero">
          <div className="wrap">
            <div>
              <span className="eb rise d1">SEO COMPANY · FARGO, NORTH DAKOTA</span>
              <h1 className="rise d2">Your customers drive <em>100 miles</em> to buy from Fargo.</h1>
              <p className="sub rise d3">Fargo serves a trade area the size of a small country: West Fargo next door, Moorhead across the river in Minnesota, and farm towns two hours out in every direction. Most Fargo SEO companies optimize one pin on one map. We rank you across the whole radius, in two states, and in the AI answers that buyers now check before they call anyone.</p>
              <HeroInlineForm region="us" source="fargo_seo_hero" submitLabel="Get my free SEO audit" />
              <div className="cta-row rise d4">
                <a className="btn btn-ghost" href="#rings">See the radius strategy</a>
                <WhatsAppCTA city="Fargo" service="SEO" />
              </div>
              <div className="trustgrid rise d4">
                <div className="tchip"><i /><span><b>Two-state</b> Map Pack coverage</span></div>
                <div className="tchip"><i /><span><b>Month to month</b>, no lock-in</span></div>
                <div className="tchip"><i /><span><b>AI answers tracked</b> on every plan</span></div>
              </div>
            </div>
            <div className="radar rise d3" role="img" aria-label="Fargo trade radius diagram: Fargo at the center, the West Fargo and Moorhead metro ring around it, a 100 mile trade radius beyond, and the North Dakota-Minnesota state line running through the market">
              <div className="ring r3"><span className="lbl">100 mile trade radius</span></div>
              <div className="ring r2"><span className="lbl">metro: west fargo + moorhead</span></div>
              <div className="ring r1"><span className="lbl">fargo</span></div>
              <div className="stateline"><span>ND | MN</span></div>
              <div className="core">YOU</div>
              <div className="ping p1"><b>Moorhead, MN</b> searches too</div>
              <div className="ping p2"><b>Detroit Lakes</b> 50 mi</div>
              <div className="ping p3"><b>Wahpeton</b> 47 mi</div>
              <div className="ping p4"><b>Grand Forks</b> 81 mi</div>
            </div>
          </div>
        </section>

        {/* 2 STAT STRIP */}
        <section className="strip">
          <div className="wrap">
            {STATS.map((s) => (
              <div className="stat" key={s.s}>
                <div className="n">{s.n}{s.unit ? <i>{s.unit}</i> : null}</div>
                <div className="t">{s.t}</div>
                <div className="s">{s.s}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 3 WHAT IS LOCAL SEO IN FARGO (definition, answer-first) */}
        <section>
          <div className="wrap">
            <div className="edit">
              <div>
                <span className="eb">The short answer</span>
                <h2>What is local SEO in Fargo, <em>actually?</em></h2>
                <p className="body">Local SEO is the work that makes your business show up when someone in the Fargo-Moorhead metro searches for what you sell. It covers three surfaces at once: <b>the Google Map Pack</b> (the three businesses pinned to the map), <b>the organic results</b> below it, and now <b>the AI answers</b> from ChatGPT, Gemini, and Google AI Overviews that increasingly sit on top of everything. A complete plan from a Fargo SEO company has to win all three, because your customers do not care which surface they used when they picked someone else.</p>
                <p className="body">Fargo adds a twist almost no other market has: the state line runs straight through the middle of your customer base. A Moorhead homeowner and a West Fargo homeowner are eight minutes apart, search the same way, and buy from the same businesses, yet Google often treats the Red River like a wall. Owners searching for an SEO company in Fargo, ND usually get pitched a single Google Business Profile and a single city page, which quietly hands the Minnesota half of the metro to whoever bothered to build for it. Our local SEO services are built around two-state coverage from day one.</p>
                <p className="body">The second twist is the radius. Fargo is the regional hub for shopping, healthcare, equipment, and professional services, so &quot;near me&quot; searches and &quot;[service] Fargo&quot; queries come in from Wahpeton, Detroit Lakes, Grand Forks, and a hundred smaller towns. The search data even shows people typing &quot;Fargo Moorhead SEO consultant company&quot; word for word, and a separate cluster searching for SEO, marketing, advertising, and business development help in Fargo as one combined request. Translation: this market wants one partner who can run the whole inbound pipeline, not five vendors who each own a sliver of it.</p>
                <div className="midcta">
                  <ModalCTAButton label="Check where you rank today, free" region="us" modalVariant="seo" btnVariant="primary-light" />
                  <span>30 minutes · live screen share · you keep the findings</span>
                </div>
              </div>
              <div className="factbox">
                <h3>Fargo search market, at a glance</h3>
                {FACTS.map((f) => (
                  <div className="fr" key={f.k}><span>{f.k}</span><span className="fv">{f.v}</span></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4 THE FARGO MARKET */}
        <section className="room-alt">
          <div className="wrap">
            <span className="eb">Know the market, win the market</span>
            <h2>SEO in Fargo is six different games. <em>We play all of them.</em></h2>
            <div className="mwrap">
              <div>
                {MARKET.map((m) => (
                  <div className="mrow" key={m.h}>
                    <div className="badge" aria-hidden="true">{m.badge}</div>
                    <div><h3>{m.h}</h3><p>{m.p}</p></div>
                  </div>
                ))}
              </div>
              <div className="mphotos">
                <div className="pslot tall">
                  <img
                    src="/images/us/fargo/seo/fargo-seo-1.webp"
                    alt="Fargo small business owner at the door of her main street shop, the kind of local business our Fargo SEO services put in the Map Pack"
                    width={1536}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="pslot wide">
                  <img
                    src="/images/us/fargo/seo/fargo-seo-2.webp"
                    alt="Farm equipment dealership lot near Fargo with a buyer on the phone, the high-value searches local SEO in Fargo, North Dakota captures"
                    width={1536}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5 HEADCOUNT MATH (green room) */}
        <section className="groom">
          <div className="wrap">
            <span className="eb">Why SEO, why now</span>
            <h2>You cannot hire your way to growth at 2.8% unemployment. <em>Rank instead.</em></h2>
            <p className="lead">Almost every Fargo owner we talk to says a version of the same thing: the work is there, the people are not. That changes what marketing is for. The goal is not more raw leads to chase, it is better inbound work arriving on its own.</p>
            <div className="math">
              {MATH.map((m) => (
                <div className="mcard" key={m.h}>
                  <h3>{m.h}</h3>
                  <div className="big">{m.big}</div>
                  <p>{m.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 DELIVERABLES (8 cards, 4x2) */}
        <section>
          <div className="wrap">
            <span className="eb">What our Fargo SEO services include</span>
            <h2>Eight jobs. One plan. <em>Zero filler.</em></h2>
            <p className="lead">Every engagement covers the full stack, because a perfect Google Business Profile on a slow website is a wasted profile, and great content nobody can find is a diary.</p>
            <div className="del">
              {DELIVERABLES.map((d) => (
                <div className="dc" key={d.h}>
                  <span className="mm">{d.mm}</span>
                  <h3>{d.h}</h3>
                  <p>{d.p}</p>
                </div>
              ))}
            </div>
            <div className="midcta">
              <ModalCTAButton label="Get the full scope for your business" region="us" modalVariant="seo" btnVariant="primary-light" />
              <span>explained in writing, on a free call</span>
            </div>
          </div>
        </section>

        {/* 7 PROCESS (90 days) */}
        <section className="room-alt" id="plan">
          <div className="wrap">
            <span className="eb">The first 90 days</span>
            <h2>From audit to answering phones, <em>week by week.</em></h2>
            <div className="plan5">
              {PLAN.map((p) => (
                <div className="pc5" key={p.h}>
                  <span className="wk">{p.wk}</span>
                  <h3>{p.h}</h3>
                  <p>{p.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8 RANKING FACTORS (green room) */}
        <section className="groom">
          <div className="wrap">
            <span className="eb">How Google picks the Map Pack</span>
            <h2>Three factors decide who gets the call. <em>All three are workable.</em></h2>
            <p className="lead">Google has said publicly that local results weigh relevance, distance, and prominence. Here is what each one means for a Fargo business, in plain words.</p>
            <div className="rf">
              {FACTORS.map((f) => (
                <div className="rfc" key={f.h}>
                  <h3><span>{f.n}</span> {f.h}</h3>
                  <p>{f.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9 COMPARISON */}
        <section>
          <div className="wrap">
            <span className="eb">An honest comparison</span>
            <h2>FactoryJet vs the usual <em>Fargo options.</em></h2>
            <p className="lead">Shortlist any SEO company Fargo offers and you will meet two archetypes: the local shop whose first love is paid ads, and the out-of-state agency with a templated Fargo page. Here is the honest side-by-side.</p>
            <div className="cmpwrap">
              <table>
                <thead>
                  <tr><th scope="col"><span className="sr-only">Criteria</span></th><th scope="col">FactoryJet</th><th scope="col">Typical paid-first local shop</th><th scope="col">Out-of-market city-page reseller</th></tr>
                </thead>
                <tbody>
                  {COMPARE.map((r) => (
                    <tr key={r.k}>
                      <td>{r.k}</td>
                      <td>{r.fj}</td>
                      <td>{r.local}</td>
                      <td>{r.natl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="midcta">
              <ModalCTAButton label="Compare us on your own numbers" region="us" modalVariant="seo" btnVariant="primary-light" />
              <span>bring any proposal, we will walk through it line by line</span>
            </div>
          </div>
        </section>

        {/* 10 INDUSTRIES (lavender room) */}
        <section className="lroom">
          <div className="wrap">
            <span className="eb">Built for Fargo businesses</span>
            <h2>The industries we rank <em>on both sides of the river.</em></h2>
            <div className="ind">
              {INDUSTRIES.map((i) => (
                <div className="ic" key={i.h}><h3>{i.h}</h3><p>{i.p}</p></div>
              ))}
            </div>
            <ul className="tags" aria-label="More industries we serve in Fargo">
              {TAGS.map((t) => (<li key={t}>{t}</li>))}
            </ul>
          </div>
        </section>

        {/* 11 THE THREE RINGS (orbit strategy + radius map) */}
        <section id="rings">
          <div className="wrap">
            <span className="eb">The radius strategy</span>
            <h2>Three rings. <em>One plan.</em></h2>
            <div className="vwrap">
              <div>
                <p className="lead">Each ring of your trade area searches differently, and a Fargo SEO company that treats them as one audience quietly leaves two rings to competitors.</p>
                <div className="vquote"><b>The radar on this page is not decoration.</b> It is the actual structure of the plan.</div>
                <div className="orbit">
                  {RINGS.map((r) => (
                    <div className="oband" key={r.num}>
                      <div className="onum" aria-hidden="true">{r.num}</div>
                      <div>
                        <h3>{r.h} <em>{r.em}</em></h3>
                        <p>{r.p}</p>
                        <ul className="kw" aria-label={`Searches this ring covers, ${r.num}`}>
                          {r.kws.map((k) => (<li key={k}>{k}</li>))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="vmap" role="img" aria-label="Fargo 100 mile radius coverage map showing Fargo, West Fargo, Moorhead in Minnesota, Wahpeton, Detroit Lakes, and Grand Forks, with the North Dakota-Minnesota state line">
                <span className="vring" style={{ top: '48%', left: '30%', width: 120, height: 120 }} />
                <span className="vring" style={{ top: '48%', left: '30%', width: 250, height: 250 }} />
                <span className="vring" style={{ top: '48%', left: '30%', width: 380, height: 380 }} />
                <span className="sline" style={{ left: '46%' }}><span>ND | MN</span></span>
                <span className="vpin hot" style={{ top: '42%', left: '22%' }}>Fargo</span>
                <span className="vpin" style={{ top: '58%', left: '5%' }}>West Fargo</span>
                <span className="vpin" style={{ top: '32%', left: '50%' }}>Moorhead <small>MN</small></span>
                <span className="vpin" style={{ top: '76%', left: '16%' }}>Wahpeton <small>47 mi</small></span>
                <span className="vpin" style={{ top: '58%', left: '62%' }}>Detroit Lakes <small>50 mi</small></span>
                <span className="vpin" style={{ top: '8%', left: '26%' }}>Grand Forks <small>81 mi</small></span>
                <span className="tag">100 MILE RADIUS · TWO STATES · ONE PLAN</span>
              </div>
            </div>
          </div>
        </section>

        {/* 12 AI SEARCH (peach room) */}
        <section className="proom">
          <div className="wrap">
            <span className="eb">The newest surface</span>
            <h2>When Fargo asks AI, <em>be the answer.</em></h2>
            <div className="aiwrap">
              <div>
                <p className="body">Ask ChatGPT for the best HVAC company in Fargo and it names names. Ask Gemini where to find a good dentist in Moorhead and it answers with specific practices, pulled from the websites and mentions it trusts. Google now shows AI Overviews above the regular results for a growing share of local questions, and the pattern is consistent: pages that answer questions directly, with structure underneath that machines can verify, get quoted. Brochure pages do not.</p>
                <p className="body">This matters more in Fargo than in big metros, for a simple reason: the candidate pool is small. When an AI engine assembles a shortlist of Fargo providers, it is choosing from dozens of businesses, not thousands, and almost none of them have structured their sites for citation. If you have been searching for an AI SEO agency in Fargo, or wondering whether an AEO agency in Fargo even exists, this is that work: clear questions, direct answers, schema underneath, and real mentions AI engines can check. We track your citations in ChatGPT, Gemini, Claude, and Google AI Overviews every month, so AI visibility becomes a number on your report instead of a mystery. Pair it with our <Link href="/services/ai-seo">US AI SEO service</Link> for the deepest coverage.</p>
                <p className="body">The window is the point. Early citations compound the same way early reviews do, and the Fargo businesses collecting them now will be the default answers for years. The ones that wait will be asking why the same three competitors keep coming up.</p>
                <ul className="engines" aria-label="AI engines we track">
                  <li>ChatGPT ✓ tracked</li>
                  <li>Gemini ✓ tracked</li>
                  <li>Claude ✓ tracked</li>
                  <li>AI Overviews ✓ tracked</li>
                </ul>
                <div className="midcta">
                  <ModalCTAButton label="Ask us what AI says about you right now" region="us" modalVariant="seo" btnVariant="primary-light" />
                  <span>we run the check live on the call</span>
                </div>
              </div>
              <div className="mini-ac" aria-label="Example of an AI assistant recommending a Fargo business">
                <div className="h"><i /> ai-assistant · live answer</div>
                <div className="q">&quot;Best equipment dealer near Fargo?&quot;</div>
                <div className="a">Based on reviews, parts availability, and verified service areas in both North Dakota and Minnesota, <mark>your business</mark> is a frequently recommended option for buyers across the Fargo-Moorhead trade radius…</div>
                <div className="h ft">that answer is the product · we engineer it</div>
              </div>
            </div>
          </div>
        </section>

        {/* 13 FAQ (22) */}
        <section className="room-alt">
          <div className="wrap">
            <span className="eb">Questions, answered straight</span>
            <h2>Fargo SEO <em>FAQ.</em></h2>
            <p className="lead">22 questions, answered the way we would on a call: answer first, no hedging, no fine print.</p>
            <div className="fwrap">
              {FAQ_ITEMS.map((f) => (
                <div className="fi" key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
            <p className="fnote">Still deciding? Compare our <Link href="/services/seo">US SEO services</Link> and <Link href="/services/ai-seo">AI SEO services</Link>, or just <a href={CALENDLY}>ask the founder directly</a>.</p>
          </div>
        </section>

        {/* 14 TEAM */}
        <section className="team">
          <div className="wrap">
            <div className="twrap">
              <div>
                <img
                  src="/images/us/services/seo/team-cutout.webp"
                  alt="The FactoryJet engineering team that builds and ranks Fargo websites"
                  width={1000}
                  height={688}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <span className="eb">Behind the rankings</span>
                <h2>Engineers first. <em>Marketers second.</em></h2>
                <p className="body">The engineers behind our 100 out of 100 speed scores run your Fargo SEO, from the two-state Map Pack to part-number search around Case IH and Bobcat. That ordering matters: most ranking problems in Fargo are engineering problems wearing a marketing costume, and an agency that cannot open the code can only write reports about it.</p>
                <p className="body">You work with senior people from day one. The founder runs every discovery call, an engineer owns your account, and nobody hands you off to a junior in month two.</p>
                <div className="tstats">
                  <div className="ts"><b>500+</b><span>businesses served</span></div>
                  <div className="ts"><b>100/100</b><span>speed score standard</span></div>
                  <div className="ts"><b>25+ yrs</b><span>engineering depth</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 15 FOUNDER CTA */}
        <section className="founder">
          <div className="wrap">
            <div>
              <span className="eb">FOUNDER ACCESS</span>
              <h2>See your whole radius <em>the way Google sees it.</em></h2>
              <p className="fp">Book a 30 minute call. We pull up your rankings in Fargo, West Fargo, and Moorhead, your Map Pack positions on both sides of the river, and what ChatGPT says about your business, live, while you watch. You keep the findings either way, and the price arrives in writing, never as a surprise.</p>
              <p className="fl">Also serving: West Fargo · Moorhead · Dilworth · Grand Forks · explore <Link href="/fargo/ecommerce-development">ecommerce development in Fargo</Link> and our <Link href="/services/seo">US SEO services</Link></p>
            </div>
            <div className="fcard">
              <div className="av" aria-hidden="true">BB</div>
              <p>&quot;Hi, I&apos;m Bhavesh, founder of FactoryJet. I run every discovery call myself, so by minute 10 we already know whether what you need pays for itself, and how fast.&quot;</p>
              <div className="stack">
                <ModalCTAButton label="Get your free Fargo SEO audit" region="us" modalVariant="seo" btnVariant="primary-dark" />
                <a className="btn btn-ghost-dark" href={CALENDLY}>Book a 30 minute call</a>
                <WhatsAppCTA city="Fargo" service="SEO" variant="dark" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
