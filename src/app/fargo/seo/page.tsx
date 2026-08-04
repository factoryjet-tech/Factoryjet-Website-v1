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
   lazy below the fold → Lighthouse 95+ target. Source: research/mockup-us-fargo-seo-v4.html.
   Honesty: NO pricing anywhere (2026-06-11 rule), free audit, no guarantee,
   month-to-month; real clients only; founder byline. No fake LocalBusiness
   address, no self-serving Review schema.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/fargo/seo';

export const metadata: Metadata = {
  title: 'Fargo SEO Company | Local SEO Services in Fargo | FactoryJet',
  description:
    'FactoryJet is a Fargo SEO company that wins the Map Pack, organic rankings, and AI answers across the two-state Fargo-Moorhead metro. Local SEO services in Fargo, West Fargo, Moorhead, and the 100 mile trade radius. Free SEO audit, month-to-month, built by senior engineers.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Fargo SEO Company | Local SEO Services in Fargo | FactoryJet',
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

/* ── FAQ - 22 original Fargo-specific entries + 21 real People Also Ask questions
   pulled from live US SERPs (DataForSEO, 2026-07-26). Schema is derived from this
   array so it can never drift. No currency figures anywhere: cost questions are
   answered with scope drivers only. ── */

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
  /* ── Real People Also Ask questions pulled from live US SERPs, July 2026 ── */
  {
    q: 'What the heck is SEO?',
    a: 'It is the work of making a search engine understand your business well enough to recommend it. That is the whole thing. Google reads your website, your Google Business Profile, your reviews, and what other sites say about you, then decides whether you are a good answer for somebody’s search. SEO is everything you do to make that decision go your way. No trickery involved, and the tricks stopped working years ago anyway.',
  },
  {
    q: 'Why is Fargo booming?',
    a: 'Because it kept adding people and jobs while a lot of similar-sized cities flattened out. The metro is over 267,000 now, up 7.2% since 2020 and more than 28% since 2010, with a young population, a low cost base for operating a business, and an unusually mixed employer set for its size: healthcare, agtech, equipment manufacturing, software, and higher education all at once. For an owner that means two things. Your addressable market grows every year without you lifting a finger, and so does the number of competitors who noticed the same thing.',
  },
  {
    q: 'Who is the best SEO agency?',
    a: 'There is no single answer, and any list that claims one was either paid for or written by whoever ranked for the phrase. The best agency for you is the one that has done your specific job, in a market shaped like yours, and can show it with numbers instead of client logos. In Fargo that filter narrows fast. Ask a shortlist who has actually built a Moorhead service-area page and watch how many can answer.',
  },
  {
    q: 'Does SEO still exist?',
    a: 'Yes, and the question usually comes from someone who read a headline. Search volume has not gone anywhere. What changed is where the answer shows up: sometimes the map, sometimes the regular blue links, and increasingly an AI summary that names three businesses and skips everyone else. All three surfaces are fed by the same underlying work. So SEO exists, it just has more places to appear than it used to.',
  },
  {
    q: 'How much does the average local SEO cost?',
    a: 'There is no useful average, and anyone quoting one is quoting their own rate card. What actually drives the number for a Fargo business: how many cities you need to rank in, since a Fargo-only clinic is a different job than a contractor covering both states plus the radius towns, how contested your category already is, whether your current site can be built on or has to be repaired first, and how much content the plan ships each month. We scope those four on a free call and put your number in writing before you commit to anything.',
  },
  {
    q: 'Is local SEO worth it?',
    a: 'For a business selling to people within driving distance, it is usually the highest-return marketing available, because the traffic is already trying to buy. Someone searching for an emergency plumber in Fargo at nine at night is not browsing. The honest exception: if your customers do not search for what you sell, or you are a referral-only business already turning work away, put the money somewhere else. We will say so on the call.',
  },
  {
    q: 'Is SEO dead or evolving in 2026?',
    a: 'Evolving, and faster than at any point since search went mobile. What matters now is answer clarity and structure a machine can verify, because AI systems summarize the results before a human ever reads them. The old game of pushing a keyword into a page died a long time ago. The current game is being the source an answer engine trusts enough to name out loud. Nothing about that is dead, it is just much harder to fake.',
  },
  {
    q: 'Can I do local SEO myself?',
    a: 'Yes, and honestly you should do the first hour yourself. Claim and completely fill out your Google Business Profile, make your name, address, and phone identical everywhere they appear, add real photos, and start asking every happy customer for a review. That is most of the easy win and it costs time, not money. Where owners get stuck is the work that needs judgment or code: technical repairs, service-area architecture across two states, content that genuinely answers a question, and knowing which of fifty possible next steps is the right one. That is where hiring starts to pay.',
  },
  {
    q: 'Do small businesses need SEO?',
    a: 'If your customers search before they buy, yes. That is the whole test. A Fargo dentist, roofer, or parts dealer gets picked out of a search result far more often than off a billboard, and the businesses sitting in those results collect the calls whether or not they earned them on purpose. Our small business SEO services exist because the alternative for most owners is paying per click forever.',
  },
  {
    q: 'How much should SEO cost for a small business?',
    a: 'Less than a hire, and it should be scoped to what you actually need rather than to a tier name somebody invented. The drivers are the same for a two-person shop as for a fifty-person one: number of service areas, technical condition of the site, content volume, and whether you want AI search tracking on top of normal reporting. A small Fargo business usually needs a narrower scope than the one a national agency will try to sell it, and we will tell you which parts you can skip.',
  },
  {
    q: 'Why is SEO no longer relevant?',
    a: 'It still is. That belief usually traces to three real things: social and paid ads got louder, Google started answering more questions on its own results page, and a lot of owners got burned by low-effort SEO that never worked. All three are true. None of them mean search stopped. What they mean is that thin, keyword-stuffed pages stopped working, and the loudest voices saying SEO is dead are often the ones who bought exactly that.',
  },
  {
    q: 'Is doing local SEO worth it if I only serve Fargo?',
    a: 'More so than in a big city, because the field is so thin. Fargo’s own SEO search terms carry a keyword difficulty score of zero, and a large share of local businesses have never set up their Google Business Profile properly, so steady work shows in weeks rather than quarters. The honest catch is the ceiling. Fargo-only means a smaller pool of searches, so the plan has to be built around the map and the conversion rate, not around traffic volume.',
  },
  {
    q: 'What is the 80/20 rule in SEO?',
    a: 'Roughly a fifth of the work produces most of the result, and in local search that fifth is very predictable: a complete and actively managed Google Business Profile, a steady flow of recent reviews, a site that loads fast and is technically clean, and one good page per service per city you serve. Do those four properly and you are already ahead of most of this market. Everything else is refinement on a foundation that has to exist first.',
  },
  {
    q: 'What is an SEO salary?',
    a: 'We are not going to print a number, but the more useful frame is total cost against total output. Hiring in North Dakota at 2.8% unemployment means competing for a very small pool, waiting months to fill the seat, then waiting more months while that person learns your business. And one person rarely covers the whole job, which now needs technical, content, local, and AI-search skills at the same time. That arithmetic is what pushes most small and mid-sized Fargo businesses toward an outside team and keeps the headcount for revenue roles.',
  },
  {
    q: 'Is SEO a hard job?',
    a: 'It is not intellectually hard, it is hard to sustain. Any single task is learnable in an afternoon. Doing all of them every month for a year, while Google shifts the rules underneath you and nothing visible happens for the first six weeks, is where nearly everyone quits. That is really what you are buying when you hire someone: not secret knowledge, just the certainty that the work still happens in month four, after you have stopped thinking about it.',
  },
  {
    q: 'Is it worth paying an SEO company?',
    a: 'It is worth it when the company does work you genuinely cannot or will not do, and when you can see what that work was. It is not worth it when you are paying a retainer for a monthly PDF. Here is the test we would use if we were buying: ask for last month’s deliverable list for a real client with the name removed. A real agency has that file ready in about a minute. Ask us and we will send ours.',
  },
  {
    q: 'How much does an SEO agency typically cost?',
    a: 'Agencies price on scope and on how much of the work is senior time, so the only honest answer is that it depends on what your plan actually contains. The levers: number of cities and service areas, how much content ships monthly, whether technical repair is needed up front, and whether you want per-engine AI citation tracking alongside standard reporting. What we can commit to regardless is no setup fee, no long contract, and a written scope before you agree to anything.',
  },
  {
    q: 'How does Google Maps ranking work?',
    a: 'Three inputs: relevance, distance, and prominence. Relevance is whether your profile and website clearly say you do the thing being searched. Distance is how close you sit to the searcher or to the place they named. Prominence is how well known and well reviewed you are, and that is the part that compounds. You cannot move your building, but you can be far more specific about what you do and far more deliberate about reviews and mentions, and in a market this size those two carry most of the movement.',
  },
  {
    q: 'How do I get my listing at the top of Google Maps higher?',
    a: 'Start with completeness: correct primary category, every service listed out individually, real photos added regularly, hours right including holidays, and your name, address, and phone matching everywhere else online. Then review velocity, because a steady trickle of recent reviews beats a pile of old ones and replying to all of them is its own signal. Then the part most people skip: service-area pages on your own site for each city you cover, since Google cross-checks your profile against what your website claims. In Fargo that means building for Moorhead and Dilworth too, or the Minnesota searches quietly go to somebody else.',
  },
  {
    q: 'Why is my Google ranking so low?',
    a: 'Usually one of five things: the site is slow or has crawl problems, the Google Business Profile is incomplete or sits in the wrong category, your address and phone are inconsistent across directories, competitors simply have more and fresher reviews, or you are being weighed against a national site that outguns you on authority. There is a sixth possibility worth ruling out first, which is normal fluctuation. Positions bounce week to week, and chasing daily movement is how owners talk themselves into bad decisions. Read the monthly trend instead.',
  },
  {
    q: 'Can I pay Google to rank higher?',
    a: 'Not in the organic results or the map pack, no. You can pay for ads, which sit above and around them and are labeled as ads, and in some service categories you can pay for a Local Services Ad with the Google Guarantee badge. None of that moves your organic position, and Google is unusually direct about saying so. Anyone offering a paid shortcut into the map pack is describing something that does not exist.',
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
  { badge: '🌾', h: 'Agriculture and agtech', p: "The Red River Valley is one of the most productive farm regions in the country, and Fargo has turned that into a technology cluster: Grand Farm runs a 590-acre innovation campus with around 80 industry partners and was named program manager for the USDA's National Proving Grounds for agtech, picking up another round of state funding in late 2025. The suppliers, consultants, and software firms orbiting that ecosystem sell regionally and nationally, which means they need organic authority content, not just a map pin. Most have neither." },
  { badge: '🚜', h: 'Ag and construction equipment', p: 'Case IH builds equipment in Fargo and Bobcat is headquartered in West Fargo, with roughly 7,000 people working in equipment manufacturing across the metro. Around the big plants sits the SMB layer we actually serve: parts dealers, repair shops, attachment suppliers, and B2B distributors whose buyers search by part number, brand, and problem. These searches have almost no local competition and very high order values, and the ag calendar makes them seasonal and predictable. A dealer who ranks before planting season owns that season.' },
  { badge: '💾', h: 'Software and technology', p: "Microsoft's Fargo campus, the old Great Plains Software operation it acquired back in 2001, still employs about 1,600 people and seeded a generation of local software talent now spread across the Emerging Prairie startup scene. The B2B services around it, IT support, custom development, staffing, accounting for tech firms, are bought by people who research like engineers. They compare, they read, and increasingly they ask an AI assistant for a shortlist before they ever open a search results page." },
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

/* ── Answer-first: the four jobs, in plain words ── */

const JOBS: { mm: string; h: string; p: string }[] = [
  { mm: 'Job 01', h: 'Get found on the map', p: 'The three pinned results above everything else. Won with a complete Google Business Profile, the right primary category, recent reviews, and service areas that match what your website says.' },
  { mm: 'Job 02', h: 'Get found in the blue links', p: 'A fast, clean site with one honest page per service per city. Not a blog treadmill, just pages that answer the question a buyer actually typed.' },
  { mm: 'Job 03', h: 'Get found across the river', p: 'Moorhead and Dilworth are Minnesota. Different state, different local results. Ranking in Fargo alone hands half a metro to whoever bothered to build for the other side.' },
  { mm: 'Job 04', h: 'Get found in AI answers', p: 'ChatGPT, Gemini, Claude, and Google AI Overviews now name specific Fargo businesses. Structure and real mentions decide which names come up.' },
];

/* ── The districts a local would recognize, and how each one searches ── */

const DISTRICTS: { mm: string; h: string; p: string }[] = [
  {
    mm: 'District 01',
    h: 'Downtown and the Broadway blocks',
    p: 'Restaurants, breweries, salons, boutiques, and the design, legal, and accounting offices stacked above them. Search here is discovery, not comparison: somebody already parked two blocks away is deciding where to eat or who to walk into. That makes the Google Business Profile the real storefront, and photo freshness and recent reviews matter far more than any keyword. A downtown business with forty reviews from this year usually outranks one with two hundred from four years ago.',
  },
  {
    mm: 'District 02',
    h: '13th Avenue South and West Acres',
    p: 'The retail spine of the metro, running out to the mall at the interstate. If people drive to buy what you sell, this corridor is where the worth-the-drive searches land. Somebody in Fergus Falls or Wahpeton planning a Saturday trip searches the night before for hours, stock, and whether the specific thing they want is actually on the floor. That intent is real, almost nobody optimizes for it, and a slow mobile site loses the visit before the car starts.',
  },
  {
    mm: 'District 03',
    h: 'The medical corridor in south Fargo',
    p: 'Sanford anchors it, Essentia pulls from the other side of town, and a thick ring of independent practices sits around both: dental, physical therapy, chiropractic, home care, optometry, med spas. Patients drive in from two hours out and search the specialty plus the city name. A hospital system location page will never answer whether this clinic takes their plan and can see them this month. An independent practice that answers that in plain words takes the appointment.',
  },
  {
    mm: 'District 04',
    h: 'NDSU and the north side',
    p: 'The university sits just north of downtown with the research and technology park beyond it, and the economy around them runs on a calendar: rentals, storage, moving help, gyms, phone repair, and food spike in August and again in May. Gameday weekends move restaurant and hotel search hard. If you serve that side of town, your content should be seasonal on purpose rather than evergreen by accident, because the searches are.',
  },
  {
    mm: 'District 05',
    h: 'West Fargo, Sheyenne Street, and Horace',
    p: 'The fastest-growing corner of the metro, home to Bobcat and to whole neighborhoods that did not exist a decade ago, with Horace filling in just south. This is the single best local SEO opportunity in the region and almost nobody talks about it: thousands of households with no default dentist, plumber, vet, or gym yet, choosing from scratch, from a phone, using a near-me search. There is no incumbent relationship to break. There is just whoever shows up first.',
  },
  {
    mm: 'District 06',
    h: 'Moorhead, Dilworth, and Center Avenue',
    p: 'Eight minutes from downtown Fargo and a completely separate ranking problem. Different state, different sales tax, different school district, and its own local results, with MSUM and Concordia adding a second student economy on the Minnesota bank. Buyers treat Fargo and Moorhead as one town. Google does not. Most agencies pitching a Fargo business never build a single Moorhead page, which is exactly why that half of the metro is still winnable.',
  },
];

/* ── Real DataForSEO numbers for this market, pulled July 2026 ── */

const SERP_ROWS: { kw: string; vol: string; kd: string; note: string }[] = [
  { kw: 'seo company near me', vol: '14,800', kd: '24', note: 'Where the volume actually is. Google rewrites this as your city using the phone’s location, so you win it with the map, not with the word Fargo.' },
  { kw: 'local seo company near me', vol: '1,900', kd: '34', note: 'Harder, because national agencies fight for it in every market at once rather than in one.' },
  { kw: 'best seo company near me', vol: '1,000', kd: '41', note: 'The toughest term in the set. Review count and third-party mentions decide it more than page content does.' },
  { kw: 'seo marketing company near me', vol: '390', kd: '30', note: 'Buyers who want search and advertising handled by one team. A very common request in this metro.' },
  { kw: 'seo services company near me', vol: '110', kd: '34', note: 'Plural, and harder than the singular version. People typing it are usually comparing a shortlist rather than starting from scratch.' },
  { kw: 'top seo company near me', vol: '90', kd: '29', note: 'Mostly listicles and directories. Being on someone else’s list can beat publishing your own page.' },
  { kw: 'best local seo company near me', vol: '90', kd: '24', note: 'Easier than the non-local version, because the national brands optimize for the broader phrase and leave this one alone.' },
  { kw: 'seo fargo nd', vol: '50', kd: '0', note: 'A difficulty score of zero. Nobody is seriously contesting the city term.' },
  { kw: 'fargo seo', vol: '50', kd: '0', note: 'Same searchers, same handful of results. Worth owning, not worth building a strategy on.' },
  { kw: 'seo fargo', vol: '50', kd: '0', note: 'The third spelling of the same intent. All three together are a rounding error next to the near-me cluster.' },
  { kw: 'dental seo company near me', vol: '40', kd: '0', note: 'Vertical plus near-me at zero difficulty. The same open pattern holds for HVAC, roofing, PT, veterinary, and law.' },
  { kw: 'top local seo company near me', vol: '30', kd: '15', note: 'Small volume, but the intent is already local and already commercial. The least contested real buyer in this whole table.' },
];

/* ── Real competitors on these SERPs, named fairly ── */

const COMPETITORS: { name: string; dom: string; pos: string; p: string; kws: string[] }[] = [
  {
    name: 'Thrive Internet Marketing Agency',
    dom: 'thriveagency.com',
    pos: '11 appearances · avg position 3.8',
    p: 'The most visible name across this whole set of results, and genuinely good at scale. Look at what else they hold page one for and the picture gets clear: they rank at number one for German and French marketing terms as easily as English ones. That is a very large, very authoritative site winning on weight. What weight will not do is notice that Moorhead is in a different state, or build you a page for Wahpeton.',
    kws: ['agentur marketing #1 · 720/mo', 'agences marketing digital #1 · 590/mo', '5 star google rated #1 · 320/mo'],
  },
  {
    name: 'Charlotte SEO Firm',
    dom: 'charlotteseofirm.com',
    pos: '5 appearances · avg position 9.0',
    p: 'The single best argument for the strategy on this page, run by somebody else in another city. They hold number one for both "charlotte seo companies" and "charlotte seo company" at 880 searches a month each, plus "charlotte nc seo" at 320. One city, out-worked completely, compounding for years. We respect it openly because it is exactly what we are doing here for Fargo, from further back in the pack.',
    kws: ['charlotte seo companies #1 · 880/mo', 'charlotte seo company #1 · 880/mo', 'charlotte nc seo #1 · 320/mo'],
  },
  {
    name: 'Lesser Media',
    dom: 'lessermedia.com',
    pos: '4 appearances · avg position 11.8',
    p: 'The many-cities model, and it works well enough. Their page-one keywords read like a road trip: Springfield at four, Stamford at four, San Antonio for paid search at three, each around ninety to a hundred and ten searches a month. Breadth like that puts you in a dozen markets at once. The trade is depth. A page built from a template has no opinion about what the planting calendar does to a parts dealer’s traffic in April.',
    kws: ['seo springfield #4 · 110/mo', 'seo stamford #4 · 110/mo', 'ppc san antonio #3 · 90/mo'],
  },
  {
    name: 'Straight North',
    dom: 'straightnorth.com',
    pos: '3 appearances · avg position 9.0',
    p: 'A long-established national agency with a business-to-business lead generation focus and a reputation for disciplined process and reporting. If you are a manufacturer or distributor in the equipment economy around Case IH and Bobcat, they are a fair shortlist name. The difference you will feel is scale of attention: a large national roster means your Fargo account is one of many, and two-state local coverage is not the problem they were built to solve.',
    kws: ['national b2b lead gen focus'],
  },
  {
    name: 'TastyPlacement',
    dom: 'tastyplacement.com',
    pos: '2 appearances · avg position 2.0',
    p: 'Only turns up twice in this set, but when it does it sits at position two, the best average placement of anyone here. Worth pointing out because it breaks the assumption most owners bring to agency shopping: appearing often and appearing high are different achievements, and the second one is harder. A small, precise footprint can beat a large, scattered one.',
    kws: ['smallest footprint · highest placement'],
  },
  {
    name: 'Helium SEO',
    dom: 'helium-seo.com',
    pos: '3 appearances · avg position 11.7',
    p: 'Turns up three times across this set, sitting just outside page one on average. We have never worked opposite them on a pitch and we are not going to invent an opinion about their process. What we can say is what the data shows: they are competing in the same near-me results a Fargo business is trying to enter, from outside the market, which is the pattern for almost everyone on this list.',
    kws: ['competing from outside the market'],
  },
];

const OTHER_DOMAINS = ['elit-web.com', 'www.tiger29.com', 'synchronicitydesigns.com', 'www.builtinaustin.com'];

/* ── Areas covered, single source for the visible list and the ItemList schema ── */

const AREAS: string[] = [
  'Fargo, ND', 'West Fargo, ND', 'Moorhead, MN', 'Dilworth, MN', 'Horace, ND',
  'Casselton, ND', 'Wahpeton, ND', 'Valley City, ND', 'Grand Forks, ND',
  'Jamestown, ND', 'Detroit Lakes, MN', 'Fergus Falls, MN',
];

const SERVICE_LINKS: { href: string; label: string; note: string }[] = [
  { href: '/services/seo', label: 'SEO services', note: 'The full US program this Fargo engagement runs on.' },
  { href: '/services/local-seo', label: 'Local SEO services', note: 'Map pack, Google Business Profile, reviews, citations, service areas.' },
  { href: '/services/small-business-seo', label: 'Small business SEO', note: 'Narrower scope for owner-run shops that need calls, not dashboards.' },
  { href: '/services/seo-audit', label: 'SEO audit', note: 'The free thirty minute teardown, explained before you book it.' },
  { href: '/services/ai-seo', label: 'AI SEO and answer engine work', note: 'Getting named by ChatGPT, Gemini, Claude, and AI Overviews.' },
];

const CITY_LINKS: { href: string; label: string; note: string }[] = [
  { href: '/sioux-falls/seo', label: 'Sioux Falls SEO', note: 'The closest market shaped like this one: regional hub, wide rural draw, thin local results.' },
  { href: '/lincoln/seo', label: 'Lincoln SEO', note: 'Another university-and-agriculture metro where the near-me cluster carries the volume.' },
  { href: '/boise/seo', label: 'Boise SEO', note: 'Fast-growing western metro. Same new-household dynamic as West Fargo, at larger scale.' },
  { href: '/nashville/seo', label: 'Nashville SEO', note: 'Where we currently sit at position ten for "local seo nashville". A harder market, honestly reported.' },
  { href: '/austin/seo', label: 'Austin SEO', note: 'Position eight for "seo agency austin texas". The contrast case for how much competition changes the timeline.' },
];

/* ── JSON-LD: WebPage + Service (NO offers/pricing) + FAQPage (derived) ── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  dateModified: '2026-08-04',
  name: 'Fargo SEO Company | Local SEO Services in Fargo, ND',
  url: CANONICAL,
  description:
    'FactoryJet is a Fargo SEO company offering local SEO services across the two-state Fargo-Moorhead metro and its 100 mile trade radius: Google Business Profile, reviews, citations, technical SEO, content, and AI search optimization, with a free audit and month-to-month terms.',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'FactoryJet', url: 'https://factoryjet.com' },
  author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhaveshbarot/', jobTitle: 'Founder, FactoryJet' },
  about: { '@type': 'Thing', name: 'Local search engine optimization in Fargo, North Dakota' },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.fseo h1', '.fseo .answer-lead', '.fseo .fi h3'],
  },
};

const areaListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Cities and towns covered by FactoryJet SEO services from Fargo',
  description:
    'The Fargo-Moorhead metro plus the drive-in trade radius across North Dakota and Minnesota that a Fargo SEO plan has to cover.',
  numberOfItems: AREAS.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: AREAS.map((name, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
  })),
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
      <script id="fargo-seo-arealist-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaListSchema) }} />

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

        {/* 1B ANSWER-FIRST - who does SEO in Fargo and what the work is */}
        <section className="room-alt">
          <div className="wrap">
            <span className="eb">The short answer</span>
            <h2>Who does SEO in Fargo, ND, and what does the work <em>actually involve?</em></h2>
            <p className="answer-lead">Four kinds of people sell SEO to Fargo businesses. A handful of local marketing shops, most of which started in paid ads, print, or web design and added search later. A much larger group of out-of-state agencies that publish one Fargo page, swap the city name, and sell from a call center in another time zone. A thin layer of freelancers and in-house marketers doing it part time around other jobs. And engineering-led teams like ours, which treat local search as a build problem, work the whole two-state metro as one market, and report AI citations next to rankings.</p>
            <p className="body">The work itself is not mysterious and nobody should make it sound that way. It comes down to four jobs, repeated every month, with the boring ones mattering most.</p>
            <div className="del">
              {JOBS.map((j) => (
                <div className="dc" key={j.h}>
                  <span className="mm">{j.mm}</span>
                  <h3>{j.h}</h3>
                  <p>{j.p}</p>
                </div>
              ))}
            </div>
            <p className="body" style={{ marginTop: 24 }}>Two honest caveats before you read any further. First, nobody can promise a position, and any Fargo SEO company that guarantees you the top spot is selling something other than search. Second, the timeline here is genuinely shorter than in a big metro because the competition is thinner, but shorter still means weeks for map visibility and months for the contested organic terms. If you want the deeper mechanics, start with our <Link href="/services/local-seo">local SEO services</Link>, or book the free <Link href="/services/seo-audit">SEO audit</Link> and we will show you where you stand before you spend anything.</p>
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

        {/* 4B DISTRICTS - the local substance */}
        <section>
          <div className="wrap">
            <span className="eb">The search map, district by district</span>
            <h2>Fargo is not one market. It is six districts that <em>search differently.</em></h2>
            <p className="lead">Anyone who has driven Broadway on a Friday and 13th Avenue on a Saturday knows these are different economies. Search treats them differently too, and a plan that ignores that is a plan written for a city the author has never been to.</p>
            <div className="dist">
              {DISTRICTS.map((d) => (
                <div className="dcard" key={d.h}>
                  <span className="mm">{d.mm}</span>
                  <h3>{d.h}</h3>
                  <p>{d.p}</p>
                </div>
              ))}
            </div>
            <p className="body" style={{ marginTop: 26 }}>Two things follow from that map. The first is that a single Fargo page cannot serve all six, which is why service-area architecture matters more here than content volume does. The second is that the growth edge and the state line are the two places where the market is genuinely unclaimed. Everyone competes downtown. Almost nobody competes for the household that moved into a new West Fargo build last spring and has not picked a dentist yet, or for the Moorhead searcher whose results page Fargo businesses never appear on.</p>
            <p className="body">One more local reality worth naming: the Red River runs through the middle of this. Spring flood years reorder priorities for builders, insurers, restoration crews, and anyone selling into the housing stock, and search demand moves with them. If your business has a season, the Fargo season is unusually sharp, and rankings built in the quiet stretch are what let you catch it.</p>
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

        {/* 5B SERP REALITY - real keyword data */}
        <section className="room-alt">
          <div className="wrap">
            <span className="eb">An honest look at the numbers</span>
            <h2>How competitive is the Fargo search market, <em>really?</em></h2>
            <p className="lead">Not very, and that cuts both ways. Here is the actual search data for this market, pulled in July 2026. Difficulty runs from 0 to 100 and measures how much authority already sits behind the pages ranking there.</p>
            <div className="cmpwrap">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Search term</th>
                    <th scope="col">Searches / mo</th>
                    <th scope="col">Difficulty</th>
                    <th scope="col">What it tells you</th>
                  </tr>
                </thead>
                <tbody>
                  {SERP_ROWS.map((r) => (
                    <tr key={r.kw}>
                      <td>{r.kw}</td>
                      <td>{r.vol}</td>
                      <td>{r.kd}</td>
                      <td>{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="body" style={{ marginTop: 28 }}>Read that table the way we do. The three Fargo-named terms together carry a volume that would not fill a mid-size meeting room, and their difficulty is literally zero, which means the page you are reading can rank for them with ordinary effort. That is not the prize. The prize is the near-me cluster. &quot;Seo company near me&quot; alone pulls 14,800 US searches a month, and when a Fargo phone runs that search, Google quietly rewrites it as &quot;seo company in Fargo&quot; using the device location. Advertisers understand this, which is why they bid roughly five times more per click on the near-me phrase than on the Fargo phrase.</p>
            <p className="body">The same shape repeats for whatever you sell. &quot;Fargo plumber&quot; has a number attached to it. &quot;Plumber near me&quot; has a far bigger one, and you only enter that result if your Google Business Profile, your service areas, and your review flow tell Google you belong in that pin cluster. That is why most of a Fargo engagement goes into the map and into service-area coverage rather than into chasing the city keyword everybody assumes is the target.</p>
            <p className="body">Notice &quot;dental seo company near me&quot; sitting at zero difficulty. Vertical plus near-me is almost unguarded right across this market, and the same open pattern holds for HVAC, roofing, physical therapy, veterinary, and law. If you are in one of those categories, you are not walking into an SEO war. You are showing up to one nobody else entered.</p>
            <p className="body"><b>The caveat we would want if we were buying.</b> Low difficulty is not the same as free. Difficulty counts how many strong sites already point at the pages ranking there. It says nothing about how long Google takes to trust a new address, how many reviews the competitor down the road has already banked, or whether your own site loads. Those are the real constraints in Fargo, and two of the three are fixable within a quarter.</p>
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

        {/* 8B NAMED COMPETITORS */}
        <section className="room-alt">
          <div className="wrap">
            <span className="eb">Who else shows up</span>
            <h2>The agencies you will actually meet <em>on this results page.</em></h2>
            <p className="lead">We pulled the live US results for the search terms above and counted who appears. Almost none of them are from Fargo. Here is who they are, what each one is genuinely good at, and where we are different. No hatchet jobs: these are real firms doing real work, and you deserve to know why they rank.</p>
            <div className="comp">
              {COMPETITORS.map((c) => (
                <div className="cc" key={c.dom}>
                  <span className="pos">{c.pos}</span>
                  <h3>{c.name}</h3>
                  <div className="dom">{c.dom}</div>
                  <p>{c.p}</p>
                  <ul className="kw" aria-label={`Page one keywords for ${c.name}`}>
                    {c.kws.map((k) => (<li key={k}>{k}</li>))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="body" style={{ marginTop: 26 }}>Four more names round out the set: {OTHER_DOMAINS.join(', ')}. The last of those is not an agency at all. It is a jobs and news site whose best-agencies list ranks on its own, which is worth filing away, because sometimes the fastest route into a results page is earning a place on somebody else&apos;s list rather than publishing your own.</p>
            <div className="vquote">
              <b>Where we honestly stand.</b> FactoryJet has 44 referring domains. Coalition Technologies, a large US SEO agency, has somewhere around 2,800. We currently sit at position ten for <Link href="/nashville/seo">local seo nashville</Link> and position eight for <Link href="/austin/seo">seo agency austin texas</Link>. That is a challenger&apos;s position and we are not going to dress it up as anything else. What it means for you is straightforward: we win the city markets that large agencies treat as an afterthought, and Fargo, with a difficulty score of zero on its own name and a two-state problem nobody outside the region even sees, is exactly that kind of market. If you are a national brand chasing head terms, hire one of the firms above. If you are a Fargo business trying to own a metro of 267,793 people plus a hundred-mile radius, talk to us.
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

        {/* 12B INTERNAL LINKS + COVERAGE */}
        <section>
          <div className="wrap">
            <span className="eb">Where to go next</span>
            <h2>The rest of the toolkit, and the <em>other markets we run.</em></h2>
            <p className="lead">This page covers Fargo. The service pages below cover the mechanics in depth, and the city pages show how the same method plays out where the competition is heavier or the geography is different.</p>
            <div className="links">
              <div className="lcard">
                <h3>The services this plan draws on</h3>
                <ul>
                  {SERVICE_LINKS.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href}>{s.label}</Link>
                      <span>{s.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lcard">
                <h3>Other city markets we work</h3>
                <ul>
                  {CITY_LINKS.map((c) => (
                    <li key={c.href}>
                      <Link href={c.href}>{c.label}</Link>
                      <span>{c.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="body" style={{ marginTop: 26 }}>Already selling online, or thinking about it? The Fargo retail draw works the same way on a website as it does at West Acres, and our <Link href="/fargo/ecommerce-development">Fargo ecommerce development</Link> work is built on the same speed standard as the SEO.</p>
            <p className="areas"><b>Covered from Fargo:</b> {AREAS.join(' · ')}</p>
          </div>
        </section>

        {/* 13 FAQ */}
        <section className="room-alt">
          <div className="wrap">
            <span className="eb">Questions, answered straight</span>
            <h2>Fargo SEO <em>FAQ.</em></h2>
            <p className="lead">{FAQ_ITEMS.length} questions, including the ones people actually type into Google about this market, answered the way we would on a call: answer first, no hedging, no fine print.</p>
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
