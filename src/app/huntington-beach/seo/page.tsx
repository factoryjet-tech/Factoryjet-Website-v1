/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import HeroInlineForm from '@/components/HeroInlineForm';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import './huntington-beach-seo.css';

// ─ Constants ────────────────────────────────────────────────────────────────
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/huntington-beach/seo';

// ─ Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Huntington Beach SEO Company | Small Business Local SEO | FactoryJet',
  description:
    'Huntington Beach SEO for small businesses: the Google map pack, local organic rankings and AI answers across Orange County. Real search volumes, named competitors, month to month, free audit.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Huntington Beach SEO Company | FactoryJet',
    description:
      'Local SEO for Huntington Beach businesses. Real DataForSEO volumes, the competitors you will actually meet on the results page, and an honest read on how hard the Surf City map pack really is.',
    url: CANONICAL,
    type: 'website',
  },
};

// ─ FAQ data (FAQPage schema is derived from this array so it cannot drift) ──
const FAQ_GROUPS: { id: string; label: string; items: { q: string; a: string }[] }[] = [
  {
    id: 'cost',
    label: 'Cost and commitment',
    items: [
      {
        q: 'How much does the average local SEO cost?',
        a: "There is no average worth quoting, and any agency that gives you one before looking at your site is guessing. What actually moves the number: how many locations you have, how many service categories you want to rank for, whether your Google Business Profile is claimed and clean or a mess of duplicate listings, whether your site can be fixed or needs rebuilding, how many citations are wrong across the web, and how far behind the incumbent map pack you currently sit. A single-location surf shop on Main Street and a five-truck HVAC company covering Huntington Beach plus Fountain Valley and Westminster are two very different jobs. We scope it on the free call and give you one flat monthly figure with nothing billed by the hour.",
      },
      {
        q: 'How much should SEO cost for a small business?',
        a: "Think of it as a share of what one new customer is worth, not as a line item. If your average job is a coastal roof replacement, one customer a quarter from search covers a lot. If you sell coffee on Main Street, the maths only works if search brings volume, and the honest answer might be that a great Google Business Profile plus reviews gets you eighty percent of the benefit without a full campaign. We will tell you that on the call if that is what we see. The scope drivers are the same as above: locations, categories, technical debt, and how contested your map pack is.",
      },
      {
        q: 'How much does an SEO agency typically cost?',
        a: "Agencies price three ways. Hourly, which punishes you for asking questions. Project based, which ends before rankings do. Or a monthly retainer, which is what almost everyone doing real local SEO uses because the work is continuous. We use a flat monthly fee, scoped once, with no add-ons layered on afterwards. What you should compare between proposals is not the number, it is what is inside it: is content included or extra, is Google Business Profile management included or extra, is reporting a dashboard login or an actual person explaining what moved.",
      },
      {
        q: 'Do I need a long-term contract?',
        a: "No. Every engagement is month to month. You can pause or cancel with thirty days notice. We would rather earn the next month than trap you in the current one, and frankly a twelve month lock-in tells you something about how confident the agency is in month three.",
      },
      {
        q: 'Is there a setup fee or any upfront cost?',
        a: "No setup fee. The technical and competitive audit we run at kickoff is part of the engagement, not billed separately. Your monthly fee covers strategy, content, link earning, Google Business Profile work, reporting and a live call.",
      },
    ],
  },
  {
    id: 'worth',
    label: 'Is it actually worth it',
    items: [
      {
        q: 'Is local SEO worth it?',
        a: "For a Huntington Beach business with a physical location or a service area, usually yes, and the reason is the map pack. Three businesses get shown above the organic results when someone searches for a service near them. Everyone else is below the fold on a phone. That is not a marketing opinion, it is a layout fact. If your category gets searched locally and you are not one of the three, you are invisible at the exact moment somebody decided to buy. Where it is not worth it: if nobody searches for what you sell, or if your entire business comes from referrals and you are already at capacity.",
      },
      {
        q: 'Is it worth paying an SEO company?',
        a: "It depends on whether you have time more than whether you have money. The work is not secret. It is claiming and filling out a profile properly, getting reviews consistently, fixing the site so Google can read it, writing pages that answer real questions, and getting other local sites to mention you. Any of that can be done in-house. Almost none of it gets done in-house, because it is the thing that slips every week when a customer calls. You are paying for it to actually happen on a schedule, and for someone to notice when a Google update moves your rankings before you notice the phone stopped ringing.",
      },
      {
        q: 'Do small businesses need SEO?',
        a: "If your customers search before they buy, yes. That covers almost every service business in Huntington Beach: roofers, dentists, lawyers, physios, HVAC, plumbers, med spas, surf schools, restaurants. It covers fewer wholesale and contract manufacturers, though the industrial blocks off Skylab and Graham are so under-optimised that the ones who bother tend to win quickly. The categories where SEO genuinely does not matter much are the ones where all buying happens through a distributor, a broker, or a personal network.",
      },
      {
        q: 'Can I do local SEO myself?',
        a: "Yes, and if budget is tight you should start. Claim your Google Business Profile, fill in every field including services and attributes, add real photos of your actual premises, ask every happy customer for a review and reply to all of them, make sure your name, address and phone number match exactly everywhere they appear online, and write one honest page for each service you sell. That is most of the value. Where people get stuck is the technical layer, link earning, and the discipline of doing it every month rather than for three weeks in January.",
      },
      {
        q: 'What is an SEO salary, and should I hire in-house instead?',
        a: "Salaries vary enormously by seniority and market, and Orange County is not a cheap place to hire, so we will not throw a figure at you. The more useful comparison is total cost of ownership. In-house means salary plus payroll costs plus the tool stack plus the months of ramp before that person produces anything, and if they leave you are back to zero. Agency means a fixed monthly cost and a team, but less availability and less product knowledge. Most Huntington Beach businesses under about twenty staff find the in-house maths does not work until search is already a major revenue channel.",
      },
      {
        q: 'Is SEO a hard job?',
        a: "The individual tasks are not hard. Holding a strategy steady for six months while the phone does not ring yet is hard. So is diagnosing why a page that ranked in March is on page three in July, which usually means a Google update, a competitor who got busy, or something your web developer changed without telling anyone. The skill is mostly pattern recognition and stubbornness, not cleverness.",
      },
    ],
  },
  {
    id: 'maps',
    label: 'Google Maps and the 3-pack',
    items: [
      {
        q: 'How does Google Maps ranking work?',
        a: "Three ingredients: relevance, distance and prominence. Relevance is how well your profile and website match what was typed. Distance is how far you are from the person searching, or from the place they named. Prominence is how well known and well reviewed you are, measured through reviews, links, mentions and general web presence. Distance is the one people underestimate in Huntington Beach, because the city is long and narrow. A searcher standing near Bella Terra and a searcher standing on the pier are getting materially different map results even though both typed the same thing.",
      },
      {
        q: 'How do I get my listing higher on Google Maps?',
        a: "In order of impact for most Huntington Beach businesses: pick the most accurate primary category and stop being clever about it, fill in every service with a real description, add genuine photos regularly rather than a stock set from three years ago, get a steady drip of reviews instead of twelve in one week, reply to every review, keep your name, address and phone identical across your site and every directory, post to the profile weekly, and answer the questions in the Q&A section yourself rather than leaving them to strangers. Then make the website behind the profile good, because Google reads it to decide relevance.",
      },
      {
        q: 'Why is my Google ranking so low?',
        a: "Usually one of six things. A core algorithm update moved the whole category. Someone changed the site, often a developer or a plugin, and broke something. Your profile has drifted: wrong hours, an old address, a duplicate listing nobody killed. A competitor got busy while you were not looking. Your reviews stalled. Or the results themselves are being tested, which is normal and looks alarming for a week or two. Rankings wobble by nature. The pattern over a quarter tells you the truth, a screenshot on a Tuesday does not.",
      },
      {
        q: 'Can I pay Google to rank higher?',
        a: "Not in the organic results or the standard map pack. You can pay for ads, which appear above and are labelled as ads, and you can pay for Local Services Ads with the Google Guaranteed badge in some categories, which sit right at the top. Neither buys you an organic position, and there is no way to pay Google to lift your normal ranking. If somebody tells you they have a relationship with Google that gets you ranked, that is the end of the conversation.",
      },
    ],
  },
  {
    id: 'market',
    label: 'The Huntington Beach market',
    items: [
      {
        q: 'How competitive is the Huntington Beach SEO market really?',
        a: "Less competitive than it feels, and the numbers say so. The city term itself is tiny: DataForSEO shows about fifty searches a month for huntington beach seo and the same again for seo huntington beach, both at a keyword difficulty of zero. The volume lives in the near me family instead, where seo company near me pulls roughly 14,800 searches a month nationally at a difficulty of 24 out of 100. Twenty-four is not a wall. The reason Huntington Beach results feel locked is not that the incumbents are strong, it is that most of them claimed a profile years ago and stopped. Consumer categories like restaurants, med spas and realtors are genuinely contested. Trades, marine services, B2B and industrial are wide open.",
      },
      {
        q: 'Which Huntington Beach neighbourhoods and districts matter for targeting?',
        a: "Downtown and Main Street in 92648 is the visitor-heavy core, and it is where restaurant and bar competition is hardest. Pacific City and the pier area capture people searching on foot with a phone in their hand. The Beach Boulevard corridor running up to Bella Terra and Edinger in 92647 is where residents actually shop, so the intent there is transactional rather than exploratory. Huntington Harbour and Sunset Beach in 92649 bring waterfront property, marine services and a resident base that hires locally. Southeast Huntington Beach in 92646 sits closest to the Fountain Valley and Costa Mesa line, which means the map pack there regularly serves businesses from another city. And the industrial blocks off Skylab, Graham and Bolsa are the quietest and least contested search surface in the whole city.",
      },
      {
        q: 'Do you work with businesses in Fountain Valley, Westminster and Seal Beach too?',
        a: "Yes, and in practice you cannot separate them. Google resolves near me searches from where the person is standing, not from city limits, so a Huntington Beach business already competes with Fountain Valley, Westminster, Costa Mesa, Seal Beach and Newport Beach businesses for the same queries whether it wants to or not. If your customers cross those lines, your service area content should too.",
      },
      {
        q: 'Does the tourist season and the US Open of Surfing change the strategy?',
        a: "For visitor-facing categories, a lot. The pier, Main Street, Pacific City and the state beaches pull people year-round, then the US Open of Surfing turns one week at the end of July into a crowd the size of a small city, all of them holding phones and searching for food, parking, gear and rentals. Content and profile posts for that surge need to be live in spring, not in July, because pages take time to earn their position. For year-round service businesses it works the opposite way: the quiet months are when you build the authority that pays off when demand returns.",
      },
      {
        q: 'What is the 80/20 rule in SEO, and what is the 20% in Huntington Beach?',
        a: "The idea is that a small slice of the work produces most of the result. Locally, that slice is unusually easy to name. A genuinely complete Google Business Profile, a steady review habit, correct and consistent business details everywhere, a site that loads fast on a phone, and one real page per service you sell. Do those five things properly and you will beat most of the businesses currently sitting in your map pack. Everything else we do, the content programme, the link earning, the AI answer work, is the remaining eighty percent of effort fighting for the last stretch, and it matters, but not before the basics are right.",
      },
      {
        q: 'Why does local SEO matter so much for Huntington Beach specifically?',
        a: "Two reasons that do not both apply in most cities. First, the visitor volume: millions of people a year arrive not knowing a single local business name, which means their choice is made entirely by whatever Google shows them. Second, the housing stock. Most of the city was built during the aerospace boom years, so a very large number of homes hit roofing, HVAC, plumbing and window replacement age at roughly the same time, and salt air near the coast accelerates all of it. That combination produces a home services search market that is both large and genuinely under-served.",
      },
    ],
  },
  {
    id: 'ai',
    label: 'SEO in 2026 and AI answers',
    items: [
      {
        q: 'Is SEO dead, or is it evolving in 2026?',
        a: "Evolving, and the evidence is boring rather than dramatic. People still search, businesses still get found, and the industry is still growing. What changed is the surface. A Google result page now often answers the question at the top before you scroll, and a decent share of buying research starts in ChatGPT or Perplexity instead. The underlying job did not change: be the clearest, most trustworthy answer to a specific question, and be verifiable. That is what earns a map pack spot, an AI citation and an organic click alike.",
      },
      {
        q: 'Why do people say SEO is no longer relevant?',
        a: "Mostly because AI answers and social ads got loud at the same time, and because a lot of people bought bad SEO in the past and concluded the discipline was the problem rather than the vendor. There is a real grain of truth in it: informational content that just restates the obvious now gets absorbed by AI summaries and earns nothing. Commercial and local intent is a completely different story. Somebody who searches for a plumber in Huntington Beach is not looking for an essay, they are looking for someone to call, and Google still has to hand them a business.",
      },
      {
        q: 'Do you optimise for Google AI Overviews, ChatGPT and Perplexity?',
        a: "Yes, and it is part of the same engagement rather than a separate product. In practice it means answer-first paragraphs so a machine can lift a clean response, FAQ and organisation schema so the entities are unambiguous, verifiable local facts with sources instead of vague claims, and enough third-party mentions that a model has something to cross-check. Then we actually check which engines cite you and report it. Very few Huntington Beach businesses have done any of this, which is exactly why the window is open.",
      },
      {
        q: 'How long until I see results?',
        a: "Google Business Profile work tends to show movement in about four to eight weeks because the profile updates fast. Organic rankings in a contested Orange County category usually take three to five months to shift meaningfully, longer if the site needed rebuilding first. AI citations can be quicker than either when your content directly answers a question nobody else answered well. Anyone promising page one in thirty days is either talking about a keyword nobody searches or is about to do something you will regret.",
      },
    ],
  },
  {
    id: 'process',
    label: 'Working with FactoryJet',
    items: [
      {
        q: 'What does FactoryJet actually do each month?',
        a: "Technical health checks including page speed, schema and crawl issues. One to two long-form content pieces aimed at your highest-value Huntington Beach queries. Google Business Profile management: photos, posts, service descriptions, Q&A and review strategy. Citation auditing and cleanup. Internal linking. Competitor monitoring. AI citation checks across the main engines. Then a written summary and a live call where somebody who did the work explains what moved and what happens next.",
      },
      {
        q: 'Do you manage the Google Business Profile as well?',
        a: "Yes, and for most local businesses it is the single fastest lever we have. We optimise every field, add real photos with descriptive filenames and alt text, write service descriptions that use the language customers actually type, publish posts tied to local events and seasonal demand, and keep the Q&A section answered rather than abandoned. Multi-location businesses get each location handled separately, because a shared description is a wasted relevance signal.",
      },
      {
        q: 'What does local link earning look like in Huntington Beach and Orange County?',
        a: "Realistically: the Huntington Beach Independent, the Orange County Register when there is a genuine story, the Chamber of Commerce, Visit Huntington Beach and the downtown business association, event and sponsorship pages, industry directories in surf, marine, trades and real estate, and reciprocal-in-spirit relationships with complementary local businesses. No paid link schemes and no private blog networks. Slower, but it does not evaporate the next time Google runs a spam update.",
      },
      {
        q: 'Who actually does the work?',
        a: "Senior people, and Bhavesh Barot, the founder, is in the strategy for every account. There is no layer of junior account managers between you and whoever is touching your site, which is a genuine advantage of being a smaller firm and worth weighing against the bigger agencies named on this page.",
      },
      {
        q: 'What happens to my accounts and data if I leave?',
        a: "You keep everything. Search Console, the Google Business Profile, Analytics, and every piece of content we wrote are yours. We add ourselves as contributors rather than owners specifically so that unwinding takes a few clicks. No data hostage situation, no rebuild tax.",
      },
      {
        q: 'How do you report results, and which numbers actually matter?',
        a: "Calls and form fills from organic first, because that is the only number that pays anyone. Then profile calls and direction requests, ranking movement on your priority Huntington Beach queries, AI citation checks, page speed status, and a note on what competitors did. Ranking screenshots on their own are a vanity artefact and we will not pad a report with them.",
      },
      {
        q: 'What does the free audit call actually cover?',
        a: "Thirty minutes on your Google Business Profile, your site's technical state, where you currently sit for your main local queries, and what the three businesses above you in the map pack are doing that you are not. You leave with a priority list whether or not you hire us. There is no deck and no pitch deck theatre.",
      },
      {
        q: 'How fast can you start, and do I need a new website first?',
        a: "Technical work can begin within about seven days of signing, profile and content work in week two once access is verified. You do not need a new website. We improve what you have, and if the site has a structural problem that cannot be worked around we will say so plainly rather than quietly billing around it. FactoryJet builds sites too, so if a rebuild is genuinely the right call you are not hunting for a second vendor.",
      },
      {
        q: 'I tried SEO before and it did not work. What would be different?',
        a: "Before the call, dig out three things: what was measured, what was published, and what was fixed. Nine times out of ten the answer is rankings were measured, generic blog posts were published, and nothing technical was fixed. If the content never mentioned Huntington Beach in a way a local would recognise, and if nobody ever touched the Google Business Profile, then it was not really local SEO. We will tell you honestly on the call whether the previous work left anything worth building on.",
      },
    ],
  },
];

// ─ Listicle ──────────────────────────────────────────────────────────────────
const LISTICLE: { n: string; h: string; p: string }[] = [
  {
    n: '01',
    h: 'Visitors are deciding on the pavement and you are not in the three results',
    p: 'Millions of people a year come to Huntington Beach without knowing a single business name here. They stand on Main Street or outside Pacific City, type something plus near me, and pick from three map results. Position four is a different business outcome to position three, not a slightly worse one.',
  },
  {
    n: '02',
    h: 'Your Google Business Profile was claimed once and never touched again',
    p: 'No posts since the year you claimed it, six photos, a primary category chosen in a hurry, half the services blank. This is the most common condition of a Huntington Beach profile and it is also the cheapest thing on this list to fix.',
  },
  {
    n: '03',
    h: 'You are losing searches to Fountain Valley and Westminster without realising',
    p: 'Google answers near me from where the person is standing. Southeast Huntington Beach sits close enough to the Fountain Valley and Costa Mesa line that residents there routinely get served businesses in another city. If your service area content does not cover the border, you are conceding it.',
  },
  {
    n: '04',
    h: 'You rank for your own business name and nothing else',
    p: 'Branded search only reaches people who already know you exist. Every genuinely new customer arrives through a category search. If you only show up for your own name, your search channel is a receipt, not a growth channel.',
  },
  {
    n: '05',
    h: 'The site is slow on a phone with one bar of signal near the water',
    p: 'People search here from the beach, from a parking lot on PCH, from a car. A heavy page loses them before it renders, and page speed feeds ranking as well as conversion. Both losses are invisible in your analytics because the visit never completed.',
  },
  {
    n: '06',
    h: 'Reviews stopped a while ago and nobody replies to them',
    p: 'Review count and recency both feed prominence, which is one third of how Google ranks maps results. In review-decided categories like dentistry, med spas and physical therapy, a competitor with fewer but fresher reviews will pass you.',
  },
  {
    n: '07',
    h: 'AI answers are recommending your competitors and you cannot see it happening',
    p: 'When somebody asks an AI assistant who the best option in Huntington Beach is, the answer is assembled from structured, verifiable content. Almost no local business has built that layer yet, which means the ones that do get cited by default, and you will not find out from your rankings report.',
  },
];

// ─ Comparison ────────────────────────────────────────────────────────────────
const COMPARE: { k: string; fj: string; alt: string; hl?: boolean }[] = [
  { k: 'Pricing model', fj: 'One flat monthly fee, scoped once', alt: 'Hourly, or a retainer with add-ons', hl: true },
  { k: 'Contract', fj: 'Month to month', alt: 'Six to twelve month lock-in' },
  { k: 'Who does the work', fj: 'Senior people, founder in the strategy', alt: 'Junior account manager as the interface' },
  { k: 'Kickoff time', fj: 'About seven days', alt: 'Three to six weeks of onboarding' },
  { k: 'Reporting', fj: 'Calls and form fills first', alt: 'Ranking screenshots' },
  { k: 'AI answer visibility', fj: 'Included and tracked per engine', alt: 'Rarely offered, often sold separately' },
  { k: 'Your data and accounts', fj: 'You own all of it', alt: 'Frequently held by the agency' },
  { k: 'Link profile strength', fj: 'Honest challenger, 44 referring domains', alt: 'Large national shops have far more' },
];

// ─ Real competitors on this SERP (DataForSEO, US, July 2026) ────────────────
const RIVALS: { d: string; seen: string; pos: string; note: string }[] = [
  { d: 'thriveagency.com', seen: '11', pos: '3.8', note: 'Large multi-office national agency' },
  { d: 'charlotteseofirm.com', seen: '5', pos: '9.0', note: 'Single-city specialist, owns Charlotte' },
  { d: 'lessermedia.com', seen: '4', pos: '11.8', note: 'City-by-city local SEO specialist' },
  { d: 'elit-web.com', seen: '3', pos: '7.0', note: 'International digital agency' },
  { d: 'straightnorth.com', seen: '3', pos: '9.0', note: 'B2B lead generation focus' },
  { d: 'helium-seo.com', seen: '3', pos: '11.7', note: 'Data-led SEO shop' },
  { d: 'tastyplacement.com', seen: '2', pos: '2.0', note: 'Small footprint, very high placement' },
  { d: 'builtinaustin.com', seen: '2', pos: '5.0', note: 'Directory listing, not an agency' },
  { d: 'tiger29.com', seen: '2', pos: '6.5', note: 'Boutique SEO firm' },
  { d: 'synchronicitydesigns.com', seen: '2', pos: '7.0', note: 'Design-led studio offering SEO' },
];

// ─ Real keyword data (DataForSEO, US market, pulled July 2026) ──────────────
const KEYWORDS: { kw: string; vol: string; kd: string; read: string }[] = [
  { kw: 'seo company near me', vol: '14,800', kd: '24', read: 'Where the volume actually is. Resolved by your location, so you compete for it daily.' },
  { kw: 'local seo company near me', vol: '1,900', kd: '34', read: 'Buyers who already know they want local, not national.' },
  { kw: 'best seo company near me', vol: '1,000', kd: '41', read: 'The hardest of the set. Comparison intent, usually a longer decision.' },
  { kw: 'seo marketing company near me', vol: '390', kd: '30', read: 'Broader intent, often businesses wanting more than search.' },
  { kw: 'top seo company near me', vol: '90', kd: '29', read: 'Low volume, high qualification. Worth owning.' },
  { kw: 'huntington beach seo', vol: '50', kd: '0', read: 'The city term. Small, uncontested, and worth having, but it is not a strategy.' },
  { kw: 'seo huntington beach', vol: '50', kd: '0', read: 'Same searchers, reversed word order. Zero difficulty.' },
];

// ─ Huntington Beach districts ───────────────────────────────────────────────
const DISTRICTS: { pill: string; h: string; p: string }[] = [
  {
    pill: '92648',
    h: 'Downtown and Main Street',
    p: 'The blocks running inland from Pacific Coast Highway, plus the Tuesday night street fair. The highest visitor share in the city and the hardest restaurant and bar competition anywhere in Huntington Beach. Searches here are made in the moment, by people who will walk to whoever appears first.',
  },
  {
    pill: '92648',
    h: 'Pacific City and the pier',
    p: 'Open-air retail sitting directly across the highway from the pier. Phone-in-hand searching at its purest. If your profile photos are stale or your hours are wrong, you lose the customer before they finish reading.',
  },
  {
    pill: '92647',
    h: 'Beach Boulevard, Bella Terra and Edinger',
    p: 'The retail and auto spine of the city running up Highway 39. This is where residents shop rather than visitors, so intent is transactional and repeat, and the categories are the everyday ones: service, repair, medical, food, fitness.',
  },
  {
    pill: '92649',
    h: 'Huntington Harbour and Sunset Beach',
    p: 'The canals, the waterfront homes, Peter’s Landing, and the coastal strip the city annexed in 2011. Marine services, high property values, and a resident base that hires local trades and pays properly for them.',
  },
  {
    pill: 'Coast',
    h: 'Bolsa Chica, Seacliff and the wetlands edge',
    p: 'State beach and ecological reserve traffic on one side, settled residential on the other. Activity searches such as lessons, rentals, tours and guided walks concentrate here, and they are specific enough to be genuinely winnable.',
  },
  {
    pill: '92646',
    h: 'Southeast HB, Adams and Brookhurst',
    p: 'Dense family residential closest to the Fountain Valley and Costa Mesa line. Because Google answers by proximity rather than city limits, the map pack here routinely serves businesses from the next city over. Border content matters more in this zip code than anywhere else in Huntington Beach.',
  },
  {
    pill: 'Industrial',
    h: 'The northwest blocks around Skylab, Graham and Bolsa',
    p: 'The Boeing and Cambro side of town, plus the machine shops, suppliers and contract manufacturers around them. Low search volume, high deal value, and close to zero SEO competition. The quietest opportunity in the city.',
  },
];

// ─ Local economy sectors ────────────────────────────────────────────────────
const SECTORS: { pill: string; h: string; p: string }[] = [
  {
    pill: 'Home services',
    h: 'Ageing tract housing plus salt air',
    p: 'Most of Huntington Beach went up during the aerospace boom years, which means a very large number of homes reach roof, duct, panel, window and sewer lateral age at roughly the same time. Add coastal air, which takes condensers, garage doors and exterior paint apart faster within a mile of the water than five miles inland, and you get the most reliably profitable local search category in the city. Every one of those jobs is decided in the map pack.',
  },
  {
    pill: 'Tourism',
    h: 'Visitor demand that peaks but never stops',
    p: 'The pier, Main Street, Pacific City and the state beaches pull people all year, and the US Open of Surfing turns one week in late July into a crowd the size of a small city. Restaurants, rentals, hotels and anything within walking distance of the highway live on near me searches made by someone deciding in under a minute.',
  },
  {
    pill: 'Aerospace and industry',
    h: 'The Boeing and Cambro side of the city',
    p: 'Boeing has had a campus here since the McDonnell Douglas era, Cambro builds foodservice equipment from a Huntington Beach headquarters, and the industrial blocks hold hundreds of suppliers, fabricators and contract manufacturers. This is B2B search: low volume, high value, and almost nobody in the category has optimised for it. It is the easiest surface in the city to take.',
  },
  {
    pill: 'Action sports',
    h: 'Surf City is a trademark, not just a slogan',
    p: 'The visitors bureau holds the Surf City USA mark, and the board, apparel and golf brands clustered around here sustain a whole layer of retail, repair, lessons and rentals. Category searches are unusually specific: soft top rental, wetsuit repair, surf lessons at a named beach. Specific is exactly what a smaller business can win.',
  },
  {
    pill: 'Health and wellness',
    h: 'An older, higher-income resident base',
    p: 'Huntington Beach skews older than Orange County overall and its residents have money, which shows up as steady demand for dentistry, physical therapy, dermatology, orthopaedics, med spas and elder care. These are review-decided categories: consistent, recent, replied-to reviews move the map pack here more than links do.',
  },
  {
    pill: 'Real estate',
    h: 'The one genuinely crowded category',
    p: 'Coastal Orange County transaction values mean a single closing justifies a year of search work, which is precisely why the agent category is the most contested local search market in the city. We usually steer agents away from a head-on fight for the city term and toward neighbourhood and property-type content, where the competition thins out fast.',
  },
];

// ─ Internal link cards ──────────────────────────────────────────────────────
const NEXT_LINKS: { href: string; h: string; p: string }[] = [
  { href: '/services/seo', h: 'US SEO services', p: 'The full national programme this page sits inside: technical work, content, links and reporting.' },
  { href: '/services/local-seo', h: 'Local SEO', p: 'Map pack mechanics, Google Business Profile management, citations and review systems in detail.' },
  { href: '/services/small-business-seo', h: 'Small business SEO', p: 'Scoped for owner-operated businesses where one person is also doing the sales and the invoicing.' },
  { href: '/services/seo-audit', h: 'SEO audit', p: 'What we look at before recommending anything, and what a real audit should contain.' },
  { href: '/services/ai-seo', h: 'AI SEO and GEO', p: 'Getting cited in AI Overviews, ChatGPT and Perplexity, and measuring it per engine.' },
];

// ─ JSON-LD (FAQ derived from FAQ_GROUPS so schema cannot drift from content) ─
const faqItems = FAQ_GROUPS.flatMap((g) =>
  g.items.map((it) => ({
    '@type': 'Question',
    name: it.q,
    acceptedAnswer: { '@type': 'Answer', text: it.a },
  }))
);

const AREAS = [
  'Downtown Huntington Beach',
  'Main Street',
  'Pacific City and the Pier',
  'Bella Terra and Beach Boulevard',
  'Huntington Harbour',
  'Sunset Beach',
  'Bolsa Chica',
  'Seacliff',
  'Southeast Huntington Beach',
  'Fountain Valley',
  'Westminster',
  'Costa Mesa',
  'Newport Beach',
  'Seal Beach',
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://factoryjet.com/#organization',
      name: 'FactoryJet',
      url: 'https://factoryjet.com',
      logo: 'https://factoryjet.com/images/factoryjet-logo.png',
      contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: 'connect@factoryjet.com' },
      sameAs: [
        'https://www.linkedin.com/company/factoryjet',
        'https://www.crunchbase.com/organization/factoryjet',
      ],
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Huntington Beach SEO and Local SEO Services',
      serviceType: 'Local SEO, Google Business Profile management, technical SEO, AI search optimisation',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: [
        {
          '@type': 'City',
          name: 'Huntington Beach',
          containedInPlace: { '@type': 'AdministrativeArea', name: 'Orange County, California' },
        },
        { '@type': 'City', name: 'Fountain Valley' },
        { '@type': 'City', name: 'Westminster' },
        { '@type': 'City', name: 'Seal Beach' },
        { '@type': 'City', name: 'Costa Mesa' },
        { '@type': 'City', name: 'Newport Beach' },
      ],
      audience: { '@type': 'BusinessAudience', name: 'Small and mid-sized businesses in Orange County, California' },
      description:
        'Local SEO for Huntington Beach businesses: Google Business Profile and map pack work, local organic rankings, technical SEO and AI answer visibility across Orange County. Month to month, senior delivery, free audit.',
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#areas`,
      name: 'Huntington Beach districts and neighbouring cities served',
      itemListOrder: 'https://schema.org/ItemListUnordered',
      numberOfItems: AREAS.length,
      itemListElement: AREAS.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: a,
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'SEO Services', item: 'https://factoryjet.com/services/seo' },
        { '@type': 'ListItem', position: 3, name: 'Huntington Beach SEO', item: CANONICAL },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#page`,
      url: CANONICAL,
      name: 'Huntington Beach SEO Company | FactoryJet',
      description:
        'Who does SEO in Huntington Beach, what the work involves, what the real local search volumes are, and who else you will meet on the results page.',
      isPartOf: { '@id': 'https://factoryjet.com/#site' },
      about: { '@id': `${CANONICAL}#service` },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.hbseo h1', '.hbseo .bluf'],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: faqItems,
    },
  ],
};

// Visibility sequence rows for the hero card
const FORECAST = [
  { day: 'Now', label: 'Where most profiles sit', pct: 22, badge: 'flat' as const },
  { day: 'Weeks 4-8', label: 'Profile and citations fixed', pct: 55, badge: 'fair' as const },
  { day: 'Months 3-5', label: 'Local organic moves', pct: 78, badge: 'prime' as const },
  { day: 'Ongoing', label: 'AI answers cite you', pct: 93, badge: 'prime' as const },
];

// ─ Component ─────────────────────────────────────────────────────────────────
export default function HuntingtonBeachSEO() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="hbseo">
        <SiteHeader />

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="hero">
          <div className="wrap hero-grid">
            {/* Left: copy */}
            <div>
              <div className="loc rise"><b />&nbsp;Huntington Beach, CA</div>
              <h1 className="rise d1">
                Huntington Beach <span className="it">SEO company</span><br />
                for businesses that need<br />the map pack, not a report.
              </h1>
              <p className="lead rise d2">
                We get Huntington Beach and Orange County businesses into Google's three
                map results and into the AI answers that increasingly sit above them.
                Month to month, senior people doing the work, free audit first.
              </p>
              <div className="hstat rise d3">
                <div className="n">
                  <span className="star">★</span>&nbsp;5.0
                  <span className="l">/ 500+ clients</span>
                </div>
                <div className="sep" />
                <div className="n">7 days<span className="l">&nbsp;to start</span></div>
                <div className="sep" />
                <div className="n">No<span className="l">&nbsp;setup fee</span></div>
              </div>
              <HeroInlineForm region="us" source="huntington_beach_seo_hero" submitLabel="Get my free SEO audit" />
              <div className="cta-row rise d4">
                <a className="btn btn-ghost" href={CALENDLY} target="_blank" rel="noopener noreferrer">
                  Talk to the founder
                </a>
              </div>
            </div>

            {/* Right: search visibility sequence card */}
            <div className="hero-vis float">
              {/* Floating chips */}
              <div className="schip ch1">
                <div className="k">"seo company near me"</div>
                <div className="v">14,800 / mo</div>
              </div>
              <div className="schip ch2">
                <div className="cdot" />
                <div className="ct2">Difficulty 24 / 100</div>
              </div>

              <div className="surfcard">
                {/* Header */}
                <div className="sc-head">
                  <div className="sc-title">HB visibility: the usual sequence</div>
                  <div className="sc-live">
                    <b />
                    <span>LIVE</span>
                  </div>
                </div>

                {/* Ocean area */}
                <div className="sc-ocean">
                  <div className="swellmark">
                    <div className="sw-val">Top 3</div>
                    <div className="sw-lbl">the only spot that pays</div>
                  </div>
                </div>

                {/* Sequence rows */}
                <div className="sc-forecast">
                  {FORECAST.map(({ day, label, pct, badge }) => (
                    <div className="sf-row" key={day}>
                      <div className="sf-day">{day}</div>
                      <div className="sf-label">{label}</div>
                      <div className="sf-bar-wrap">
                        <div className="sf-bar" style={{ width: `${pct}%` }} />
                      </div>
                      <div className={`sf-badge ${badge}`}>{badge === 'prime' ? 'PRIME' : badge === 'fair' ? 'GOOD' : 'NOW'}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ANSWER FIRST ─────────────────────────────────────────────── */}
        <section id="answer" style={{ paddingTop: 0, paddingBottom: '72px' }}>
          <div className="wrap">
            <div className="bluf rise">
              <p>
                <strong>Short answer:</strong> SEO in Huntington Beach is done by a handful of Orange County
                studios, several national agencies that publish a page for every city, and specialist firms
                like FactoryJet. The work itself is not mysterious. It is four jobs: make your Google Business
                Profile good enough to hold one of the three map spots that sit above everything else, publish
                pages that answer what Surf City customers actually type, fix the technical faults keeping those
                pages out of the index, and earn enough real Orange County mentions that Google treats you as
                an established business rather than a new listing. Nobody needs a contract to find out which
                of the four is broken. That takes about thirty minutes.
              </p>
            </div>

            <div className="grid2">
              <div className="ucard">
                <div className="pill">Job one</div>
                <h3>The map pack</h3>
                <p>
                  Three businesses appear above the organic results when somebody searches locally. Google picks
                  them on relevance, distance and prominence. Relevance and prominence are things you can change.
                  Distance is why a Main Street business and a Beach Boulevard business are effectively in two
                  different markets. <Link href="/services/local-seo">Local SEO</Link> is the work that moves the
                  first two.
                </p>
              </div>
              <div className="ucard">
                <div className="pill">Job two</div>
                <h3>The pages underneath</h3>
                <p>
                  Google reads your website to decide what your profile is even about. One honest page per service,
                  written the way a customer would describe the problem, does more than twenty thin blog posts.
                  This is also where border coverage lives: Fountain Valley, Westminster, Seal Beach.
                </p>
              </div>
              <div className="ucard">
                <div className="pill">Job three</div>
                <h3>The technical floor</h3>
                <p>
                  Speed on a phone, clean structure, schema, no crawl traps, no duplicate listings fighting each
                  other. None of it wins anything on its own, all of it can quietly cap everything else. Our{' '}
                  <Link href="/services/seo-audit">SEO audit</Link> exists to find out which of these applies to you.
                </p>
              </div>
              <div className="ucard">
                <div className="pill">Job four</div>
                <h3>Proof that you are real</h3>
                <p>
                  Reviews, local press, Chamber and association pages, sponsorships, supplier mentions. Prominence
                  is the slow ingredient and the one that keeps working. It is also what an AI engine checks when
                  it decides whether to name you in an answer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── DARK STATS (the page's only dark section) ─────────────────── */}
        <section className="dark">
          <div className="wrap">
            <div className="eyebrow">Real search data</div>
            <h2>What Huntington Beach search demand actually looks like.</h2>
            <p className="lead">
              Pulled from DataForSEO for the US market in July 2026. We are including the unflattering
              number as well as the encouraging ones.
            </p>
            <div style={{ margin: '40px 0', borderRadius: '20px', overflow: 'hidden' }}>
              <img
                src="/images/us/huntington-beach/seo/huntington-beach-seo-hero.webp"
                alt="Huntington Beach coastline and downtown, where beach visitor traffic meets an established Orange County resident market"
                width={1200}
                height={600}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="statgrid">
              <div className="scard">
                <div className="n">50 / mo</div>
                <div className="l">
                  Searches for "huntington beach seo", with "seo huntington beach" adding the same again.
                  The city term is small. A campaign built on it alone is the wrong campaign.
                </div>
                <div className="src">DataForSEO, US, July 2026</div>
              </div>
              <div className="scard">
                <div className="n">14,800</div>
                <div className="l">
                  Monthly searches for "seo company near me". This is where the volume genuinely sits, and
                  Google resolves it by location, so you compete for it without ever seeing the phrase.
                </div>
                <div className="src">DataForSEO, US, July 2026</div>
              </div>
              <div className="scard">
                <div className="n">24 / 100</div>
                <div className="l">
                  Keyword difficulty for that same term. Low for the volume behind it. Local intent stays
                  winnable because proximity resets the ranking rules in your favour.
                </div>
                <div className="src">DataForSEO keyword difficulty</div>
              </div>
              <div className="scard">
                <div className="n">11M+</div>
                <div className="l">
                  Visitors a year to Huntington Beach, most arriving with a phone and no idea which local
                  business to pick. Their entire shortlist is whatever Google shows them.
                </div>
                <div className="src">Visit Huntington Beach</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW HARD IS IT REALLY ────────────────────────────────────── */}
        <section>
          <div className="wrap">
            <div className="eyebrow">The honest read</div>
            <h2>How hard is it actually to rank in Huntington Beach?</h2>
            <p className="lead">
              Easier than it feels from where you are sitting, and here is the data behind that claim
              rather than a reassurance.
            </p>
            <div className="cmpwrap">
              <table className="data">
                <thead>
                  <tr>
                    <th>Keyword</th>
                    <th>Searches / month</th>
                    <th>Difficulty</th>
                    <th>What it means for you</th>
                  </tr>
                </thead>
                <tbody>
                  {KEYWORDS.map(({ kw, vol, kd, read }) => (
                    <tr key={kw}>
                      <td className="kw">{kw}</td>
                      <td className="num">{vol}</td>
                      <td className="num">{kd}</td>
                      <td className="mut">{read}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="note">Volumes and difficulty scores from DataForSEO, US market, pulled 26 July 2026.</p>
            <p className="body">
              Read the difficulty column again. Scores in the twenties and thirties, on a scale that runs to a
              hundred, are not a fortress. They are an unattended shop. The reason the Huntington Beach results
              feel immovable is not that the businesses holding those positions are formidable, it is that most
              of them optimised once, several years ago, and have not been challenged since. A profile with no
              posts and a website last touched in a previous decade holds its spot right up until somebody
              consistent shows up.
            </p>
            <p className="body">
              Note also what the city term is worth. Fifty searches a month at zero difficulty is worth owning,
              and we will own it, but nobody funds a business on it. The money is in the near me family, in
              category searches such as roofer, dentist, physio or surf lessons plus Huntington Beach, and in
              the questions people ask before they are ready to call. That is the keyword set we actually build
              toward, and it is why our <Link href="/services/seo">US SEO services</Link> lead with categories
              rather than city names.
            </p>
          </div>
        </section>

        {/* ── LOCAL ECONOMY ────────────────────────────────────────────── */}
        <section className="room-peach">
          <div className="wrap">
            <div className="eyebrow">The local economy</div>
            <h2>What actually pays the bills in Huntington Beach.</h2>
            <p className="lead">
              Search strategy that ignores how a city earns its money is just a template with the name
              swapped. Here is what drives demand here, and what that does to the search results.
            </p>
            <div className="grid3">
              {SECTORS.map(({ pill, h, p }) => (
                <div className="ucard" key={h}>
                  <div className="pill">{pill}</div>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
            <p className="body">
              The pattern across all six: the loud categories are contested and the quiet ones are not. Realtors
              and restaurants fight hard. Marine services, industrial suppliers, trades serving ageing coastal
              housing, and specialist B2B firms mostly do not fight at all, because their owners assume search
              is for consumer businesses. That assumption is worth money to whoever ignores it first. If you run
              an owner-operated business in one of those quiet categories, our{' '}
              <Link href="/services/small-business-seo">small business SEO</Link> scope is built for exactly that
              situation.
            </p>
          </div>
        </section>

        {/* ── GEOGRAPHY ────────────────────────────────────────────────── */}
        <section className="room-blue">
          <div className="wrap">
            <div className="eyebrow">Geography</div>
            <h2>The map does not respect city limits. Neither does Google.</h2>
            <p className="lead">
              Huntington Beach is long, narrow and pressed against the coast, and that shape has real
              consequences for who shows up in whose map pack.
            </p>
            <div style={{ margin: '36px 0', borderRadius: '20px', overflow: 'hidden' }}>
              <img
                src="/images/us/huntington-beach/seo/huntington-beach-oc-market.webp"
                alt="Huntington Beach business districts, from Main Street retail to the inland commercial corridors that serve Orange County residents"
                width={1200}
                height={600}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <p className="body">
              Google answers a near me search from wherever the person is standing. In a compact, round city that
              is a detail. In Huntington Beach, which stretches for miles along the coast across four zip codes,
              it is the whole game. Somebody standing at the pier and somebody standing at Bella Terra are getting
              materially different results for the same words. Meanwhile the southeast of the city sits closer to
              Fountain Valley and Costa Mesa businesses than to downtown ones, so residents there are routinely
              served a business in another city entirely. If your service area content stops at the city line,
              you have conceded that ground without being told.
            </p>
            <div className="grid3">
              {DISTRICTS.map(({ pill, h, p }) => (
                <div className="ucard" key={h}>
                  <div className="pill">{pill}</div>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
            <p className="districts">
              Border cities that show up in Huntington Beach map results and that we cover in the same
              engagement: <b>Fountain Valley</b>, <b>Westminster</b>, <b>Costa Mesa</b>, <b>Newport Beach</b>,
              <b> Seal Beach</b>, <b>Garden Grove</b> and <b>Los Alamitos</b>.
            </p>
          </div>
        </section>

        {/* ── WHO WE HELP ──────────────────────────────────────────────── */}
        <section>
          <div className="wrap">
            <div className="eyebrow">Who we work with</div>
            <h2>The categories where this actually pays in Surf City.</h2>
            <p className="lead">
              Not every business needs a search campaign. These are the ones where the map pack decides
              the month.
            </p>
            <div className="grid3">
              {[
                {
                  pill: 'Trades and home services',
                  h: 'Roofing, HVAC, plumbing, windows, solar',
                  p: 'The highest intent searches in the city and the fastest to convert. A homeowner near the water with a failing condenser in August is not researching, they are choosing from three map results. Ranking here is mostly profile quality, review velocity and honest service pages, not clever content.',
                },
                {
                  pill: 'Restaurants and hospitality',
                  h: 'Food, bars, hotels, vacation rentals',
                  p: 'The most contested category in Huntington Beach, so we avoid the head-on fight. The wins are in the sub-niches: specific cuisines, the harbour waterfront, the highway corridor away from Main Street, and the dietary and occasion searches that nobody has written a page for.',
                },
                {
                  pill: 'Health and wellness',
                  h: 'Dental, physio, chiropractic, dermatology, med spas',
                  p: 'Review-decided categories serving an older, higher-income resident base. We treat the review system as core infrastructure rather than an afterthought, because in these map packs it outweighs almost everything else.',
                },
                {
                  pill: 'Marine and coastal services',
                  h: 'Boat services, rentals, lessons, tours',
                  p: 'Huntington Harbour and the waterfront generate activity-specific searches that almost nobody has optimised for. Low volume, but the queries are so precise that a single good page can own one outright.',
                },
                {
                  pill: 'Professional services',
                  h: 'Law, accounting, financial advice, consulting',
                  p: 'Slower decisions and higher values, which means the content has to answer real questions rather than list credentials. This is also where AI answers matter most, because people increasingly ask an assistant before they ask a friend.',
                },
                {
                  pill: 'B2B and industrial',
                  h: 'Suppliers, fabricators, contract manufacturers',
                  p: 'The quietest search surface in the city. Buyers search in very specific technical language, competition is nearly absent, and one contract can be worth a year of everything else. Chronically overlooked because owners assume search is a consumer channel.',
                },
              ].map(({ pill, h, p }) => (
                <div className="ucard" key={h}>
                  <div className="pill">{pill}</div>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LISTICLE ─────────────────────────────────────────────────── */}
        <section className="room-peach">
          <div className="wrap">
            <div className="eyebrow">Warning signs</div>
            <h2>7 signs your Huntington Beach business is losing customers to search right now.</h2>
            <p className="lead">
              Each one is a direct revenue leak. Most can be closed inside the first sixty days.
            </p>
            <ul className="listicle-list">
              {LISTICLE.map(({ n, h, p }) => (
                <li key={n}>
                  <div className="li-n">{n}</div>
                  <div>
                    <div className="li-h">{h}</div>
                    <div className="li-p">{p}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── NAMED COMPETITORS ────────────────────────────────────────── */}
        <section>
          <div className="wrap">
            <div className="eyebrow">The other agencies</div>
            <h2>Who else turns up when you search for a Huntington Beach SEO company.</h2>
            <p className="lead">
              You are going to compare us against these firms, so here they are with their real numbers,
              described fairly. Several of them are good.
            </p>

            <div className="grid2">
              <div className="ucard">
                <div className="pill">Most visible</div>
                <h3>Thrive Internet Marketing Agency</h3>
                <p>
                  thriveagency.com is the most visible name across the results we sampled: eleven appearances at
                  an average position of 3.8. A large, multi-office agency with a page for what feels like every
                  city and service combination in the country, and they rank internationally too, holding first
                  place for "agentur marketing" at around 720 searches a month and "agences marketing digital"
                  at around 590. If you want a deep bench, formal account structure and a big brand name on the
                  invoice, they are a legitimate choice. The trade-off is that you are unlikely to have the
                  founder on your monthly call.
                </p>
              </div>
              <div className="ucard">
                <div className="pill">Closest in approach</div>
                <h3>Lesser Media</h3>
                <p>
                  lessermedia.com appears four times at an average position of 11.8, and they are a genuine
                  local specialist rather than a generalist. Their page-one keywords show the method: position 4
                  for "seo springfield" and "seo stamford" at roughly 110 searches a month each, position 3 for
                  "ppc san antonio" at around 90. That is patient, city-by-city work and it clearly functions.
                  Where we differ: we fold AI answer visibility into the same engagement rather than treating it
                  as a separate product, and we publish the underlying search data on the page, as here.
                </p>
              </div>
              <div className="ucard">
                <div className="pill">The benchmark</div>
                <h3>Charlotte SEO Firm</h3>
                <p>
                  charlotteseofirm.com is worth naming even though they are not in California, because they are
                  the clearest example of what owning a city looks like. Position 1 for both "charlotte seo
                  companies" and "charlotte seo company" at around 880 searches a month each, and position 1 for
                  "charlotte nc seo". One city, taken completely. When you evaluate any agency including us, that
                  is the question worth asking: show me a city you actually own, not a wall of logos.
                </p>
              </div>
              <div className="ucard">
                <div className="pill">The rest of the field</div>
                <h3>Straight North, Helium SEO, TastyPlacement and others</h3>
                <p>
                  Straight North is strong on B2B lead generation. Helium SEO leans on measurement.
                  TastyPlacement appears rarely but places very high when it does, at an average position of 2.0.
                  Elit-Web, Tiger29 and Synchronicity Designs round out the field. If paid search or pure lead
                  generation is your real requirement rather than local organic, some of these will fit you
                  better than we will, and we would rather say so now than three months in.
                </p>
              </div>
            </div>

            <div className="cmpwrap">
              <table className="data">
                <thead>
                  <tr>
                    <th>Domain</th>
                    <th>Times seen on these results</th>
                    <th>Average position</th>
                    <th>What they are</th>
                  </tr>
                </thead>
                <tbody>
                  {RIVALS.map(({ d, seen, pos, note }) => (
                    <tr key={d}>
                      <td className="kw">{d}</td>
                      <td className="num">{seen}</td>
                      <td className="num">{pos}</td>
                      <td className="mut">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="note">SERP appearance counts and average positions from DataForSEO, US market, July 2026.</p>

            <p className="body">
              <strong>Where FactoryJet actually stands.</strong> We are the challenger on this results page and
              pretending otherwise would be insulting. We have 44 referring domains. Coalition Technologies, one
              of the larger agencies competing in this space, has somewhere around 2,800. Our own best local
              positions right now are number 10 for "local seo nashville" and number 8 for "seo agency austin
              texas": one on page one, one knocking on the door. We are telling you this because it is the exact
              position most Huntington Beach businesses are in, and because the method currently moving those
              two pages is the same one we would run for you. If your priority is hiring the agency with the
              biggest link profile, that is not us. If your priority is senior people doing the work on a month
              to month agreement, with the data shown rather than summarised, that part we can back.
            </p>
          </div>
        </section>

        {/* ── WHAT IS INCLUDED ─────────────────────────────────────────── */}
        <section className="room-lav">
          <div className="wrap">
            <div className="eyebrow">What you get</div>
            <h2>One engagement, the whole stack, every month.</h2>
            <p className="lead">
              No package tiers, no feature gates, nothing important sitting behind an upgrade.
            </p>
            <div style={{ margin: '40px 0', borderRadius: '20px', overflow: 'hidden' }}>
              <img
                src="/images/us/shared/factoryjet-senior-engineer.webp"
                alt="A FactoryJet engineer reviewing technical SEO data, because senior people do the delivery rather than hand it to an account manager"
                width={1200}
                height={600}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="grid2">
              {[
                {
                  h: 'Technical SEO and site health',
                  p: 'Page speed on a phone, crawl and index issues, schema markup for local business, service and FAQ, internal linking, and the structured data that makes AI citation possible at all. This layer never wins on its own and always caps everything else when it is broken.',
                },
                {
                  h: 'Google Business Profile management',
                  p: 'Every field completed properly, real photos added on a schedule, service descriptions written in customer language, weekly posts tied to Huntington Beach events and seasonal demand, Q&A answered, and a review system that produces a steady drip rather than a suspicious burst.',
                },
                {
                  h: 'Local content that answers real questions',
                  p: 'One to two substantial pieces a month aimed at your highest-value Huntington Beach and Orange County queries, including the border coverage most local sites skip. Structured answer-first so it can be lifted into a featured snippet or an AI answer.',
                },
                {
                  h: 'Orange County link earning',
                  p: 'The Huntington Beach Independent, the Orange County Register where there is a real story, the Chamber, Visit Huntington Beach, the downtown business association, event and sponsorship pages, and category directories in surf, marine, trades and property. No paid schemes.',
                },
                {
                  h: 'AI answer visibility',
                  p: 'We structure the site so Google AI Overviews, ChatGPT and Perplexity can cite you, then check per engine whether they do and report it monthly. Detailed on our AI SEO service page, and included here rather than sold separately.',
                },
                {
                  h: 'Reporting and a live call',
                  p: 'Calls and form fills from organic, profile call volume and direction requests, ranking movement on your priority queries, AI citation status, technical health, and what competitors did. Then a conversation with someone who did the work, not a dashboard login.',
                },
              ].map(({ h, p }) => (
                <div className="ucard" key={h}>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────────────────────── */}
        <section>
          <div className="wrap">
            <div className="eyebrow">How it works</div>
            <h2>From audit to map pack in four steps.</h2>
            <div style={{ margin: '40px 0', borderRadius: '20px', overflow: 'hidden' }}>
              <img
                src="/images/us/shared/factoryjet-audit-call.webp"
                alt="A FactoryJet founder-led audit call, thirty minutes mapping the Huntington Beach search opportunity with no obligation"
                width={1200}
                height={600}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="grid4">
              {[
                {
                  n: '01',
                  h: 'Free audit call',
                  p: 'Thirty minutes on your profile, your site health, where you sit for your main local queries, and what the three businesses above you are doing that you are not. You keep the priority list either way.',
                },
                {
                  n: '02',
                  h: 'Scope and kickoff',
                  p: 'One flat monthly fee scoped to your category, your locations and your starting point. Access setup and the technical baseline take about a week. No extended onboarding theatre.',
                },
                {
                  n: '03',
                  h: 'Fix, publish, earn',
                  p: 'Technical faults in weeks one and two. Profile and citation work from week two. Content and local link earning from week three, then on a steady monthly rhythm that does not stop.',
                },
                {
                  n: '04',
                  h: 'Measure and adapt',
                  p: 'Monthly review against your actual Huntington Beach competitors, a written plan for the next thirty days, and a change of direction when the data says so rather than when the contract renews.',
                },
              ].map(({ n, h, p }) => (
                <div className="ucard" key={n}>
                  <div className="pill">{n}</div>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARISON ───────────────────────────────────────────────── */}
        <section className="room-peach">
          <div className="wrap">
            <div className="eyebrow">How we compare</div>
            <h2>FactoryJet against a traditional Orange County agency.</h2>
            <p className="lead">
              Including the row where we come off worse, because you would find it anyway.
            </p>
            <div className="cmpwrap">
              <table className="cmp">
                <thead>
                  <tr>
                    <th></th>
                    <th className="fjh">FactoryJet</th>
                    <th>Traditional Agency</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map(({ k, fj, alt, hl }) => (
                    <tr key={k}>
                      <td className="k">{k}</td>
                      <td className="fj">
                        {hl ? <span className="hl">{fj}</span> : fj}
                      </td>
                      <td className="alt">{alt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── PROOF ────────────────────────────────────────────────────── */}
        <section className="room-blue proof">
          <div className="wrap">
            <div className="eyebrow">What we can actually back</div>
            <h2>Senior delivery, founder-led strategy, results tracked to the phone.</h2>
            <p className="lead">
              We measure calls and form fills, not ranking screenshots, because only one of those two
              things pays a payroll.
            </p>
            <div className="quote">
              <p>
                "FactoryJet's team is as senior as any agency I've worked with, but they communicate like
                a partner, not a vendor. We saw profile call volume double in the first two months and organic
                leads follow in month four."
              </p>
              <div className="byline">
                <div className="avatar">B</div>
                <div>
                  <div className="nm">Ricky B, Belle Maison</div>
                  <div className="ti">Retail and home decor, US market</div>
                </div>
              </div>
            </div>
            <div style={{ margin: '32px 0 36px', borderRadius: '20px', overflow: 'hidden' }}>
              <img
                src="/images/us/huntington-beach/seo/huntington-beach-seo-results.webp"
                alt="A Huntington Beach business owner reviewing local search performance across the Orange County market"
                width={1200}
                height={600}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="clients">
              {['Belle Maison', 'Formative Concepts', 'Impulse Branding', '500+ businesses served'].map(
                (c) => <span key={c}>{c}</span>
              )}
            </div>
          </div>
        </section>

        {/* ── INTERNAL LINKS ───────────────────────────────────────────── */}
        <section>
          <div className="wrap">
            <div className="eyebrow">Go deeper</div>
            <h2>The rest of the detail, if you want it before you call.</h2>
            <p className="lead">
              Everything on this page is the Huntington Beach version of a wider programme. These pages
              go further into each part of it.
            </p>
            <div className="linkgrid">
              {NEXT_LINKS.map(({ href, h, p }) => (
                <Link className="linkcard" href={href} key={href}>
                  <div className="lh">{h}</div>
                  <div className="lp">{p}</div>
                  <span className="go">Read more</span>
                </Link>
              ))}
            </div>
            <p className="districts">
              Comparing markets? We publish the same depth for other US cities, including{' '}
              <Link href="/austin/seo">SEO in Austin</Link>, <Link href="/nashville/seo">SEO in Nashville</Link>{' '}
              and <Link href="/tampa/seo">SEO in Tampa</Link>. Austin and Nashville are the two markets where
              our own pages currently rank, which is why we point at them rather than at a case study we
              cannot show you.
            </p>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="room-peach">
          <div className="wrap">
            <div className="eyebrow">Questions answered</div>
            <h2>What Huntington Beach owners ask before they start.</h2>
            <p className="lead">
              These are the questions people actually search alongside local SEO, answered the way we
              would answer them on the phone.
            </p>
            <div className="faqgrid">
              <nav aria-label="FAQ categories">
                <div className="faqnav">
                  {FAQ_GROUPS.map((g) => (
                    <a href={`#faq-${g.id}`} key={g.id}>
                      {g.label}<span className="ct">{g.items.length}</span>
                    </a>
                  ))}
                </div>
                <p className="faqhelp">
                  Something not covered? <a href={CALENDLY} target="_blank" rel="noopener noreferrer">Book a free call</a> and
                  we will answer it live.
                </p>
              </nav>
              <div>
                {FAQ_GROUPS.map((g) => (
                  <div className="faqcat" key={g.id} id={`faq-${g.id}`}>
                    <div className="ch">{g.label}</div>
                    {g.items.map((it) => (
                      <details key={it.q}>
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

        {/* ── FINAL CTA ────────────────────────────────────────────────── */}
        <section className="final">
          <div className="wrap">
            <div className="eyebrow">Ready to start</div>
            <h2>
              Let's find out what is actually<br />
              <span className="it">holding your Huntington Beach listing back.</span>
            </h2>
            <p className="lead">
              A free thirty-minute audit. Where you stand, what your three map pack competitors are doing,
              and the three moves with the biggest effect. No obligation and no pressure.
            </p>
            <div className="cta-row">
              <ModalCTAButton
                label="Get your free SEO audit"
                region="us"
                modalVariant="seo"
                btnVariant="primary-light"
              />
              <a className="btn btn-ghost" href={CALENDLY} target="_blank" rel="noopener noreferrer">
                Talk to the founder
              </a>
            </div>
            <p className="fine">
              Month to month &middot; free audit &middot; no setup fee &middot; senior delivery &middot; serving Huntington Beach and Orange County
            </p>
          </div>
        </section>

        <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
      </div>
    </>
  );
}
