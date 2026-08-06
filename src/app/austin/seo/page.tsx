import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';

import HeroInlineForm from '@/components/HeroInlineForm';
import './austin-seo.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /austin/seo :: Austin local-SEO city page. Built 2026-06-07.
   "Signal vs. Noise" layout (fifth distinct city design), hero = "Glass Depth
   Stack": frosted-glass SERP cards in 3D perspective over brand mesh blooms
   (CSS only, no WebGL, no images).

   2026-07-26 depth pass (GSC + DataForSEO, US, pulled live):
   - page already ranks: "austin seo" pos ~19.6 / 1,284 impr per 90d,
     "austin seo consultant" pos 16.0, "seo agency austin texas" pos 8.
     Goal of this pass is page one, so the work is local substance + links.
   - added: district-level Austin section (6 real business corridors),
     named-competitor section with our own honest position, 17 new FAQs
     drawn from live PAA, internal links to 5 service hubs + 3 city pages.
   - corrected: demand chips and near-me stats now carry the real DataForSEO
     July 2026 volumes and difficulty scores (previous figures were stale).
   - removed: every currency figure, every published-pricing claim,
     next/image (plain img now), all em dashes.
   No fake LocalBusiness address, no self-serving Review schema, no guarantees.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/austin/seo';

export const metadata: Metadata = {
  title: 'Austin SEO Company | Local SEO Services TX | FactoryJet',
  description:
    'FactoryJet is an Austin SEO company and agency built for the most crowded market in Texas. Local SEO, technical SEO, and an Austin SEO consultant who talks to you directly. Free audit, no long-term contract.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Austin SEO Company | Local SEO Services TX | FactoryJet',
    description:
      'Austin SEO company and agency built for the most crowded market in Texas. Local SEO, technical SEO, and a consultant who talks to you directly. Free audit, no long-term contract.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const MOSAIC: { cls: string; n: string; t: React.ReactNode; src: string }[] = [
  { cls: 'm1', n: '42,000+', t: <>small businesses in the Austin area, all competing for the same three Map Pack spots in their category.</>, src: 'US Census via AustinTexas.gov' },
  { cls: 'm2', n: '#1', t: <>USA Today named Austin the <b>best US city to start a business</b> in 2025. Your next competitor moves here this month.</>, src: 'USA Today / UT McCombs' },
  { cls: 'm3', n: '5,500+', t: <>tech companies and startups in Silicon Hills.</>, src: 'BPM / Austin Technology Council' },
  { cls: 'm4', n: '4,400', t: <>monthly searches on <b>austin seo agency</b> and its fifteen near-identical variants. Demand is not the problem here.</>, src: 'DataForSEO, July 2026' },
  { cls: 'm5', n: '44%', t: <>of clicks go to the <b>top-3 Map Pack results</b>. In a crowded market, that gap is the whole game.</>, src: 'BrightLocal' },
  { cls: 'm6', n: '2.55M', t: <>people in the Austin metro, up ~11% since 2020. The city itself passed <b>one million residents</b> in 2025.</>, src: 'US Census Bureau' },
];

/* Real DataForSEO volumes, US location 2840, pulled 2026-07-26. */
const CHIPS: { kw: string; vol: string }[] = [
  { kw: 'seo company near me', vol: '14,800/mo' },
  { kw: 'austin seo agency', vol: '4,400/mo' },
  { kw: 'seo agency austin', vol: '4,400/mo' },
  { kw: 'austin seo company', vol: '4,400/mo' },
  { kw: 'seo companies austin', vol: '4,400/mo' },
  { kw: 'seo company austin texas', vol: '4,400/mo' },
  { kw: 'seo companies in austin', vol: '4,400/mo' },
  { kw: 'seo company austin tx', vol: '4,400/mo' },
  { kw: 'austin seo', vol: '3,600/mo' },
  { kw: 'seo austin texas', vol: '3,600/mo' },
  { kw: 'austin tx seo', vol: '3,600/mo' },
  { kw: 'seo marketing austin tx', vol: '3,600/mo' },
  { kw: 'austin seo optimization', vol: '3,600/mo' },
  { kw: 'seo in austin texas', vol: '3,600/mo' },
  { kw: 'local seo company near me', vol: '1,900/mo' },
  { kw: 'best seo company near me', vol: '1,000/mo' },
  { kw: 'austin seo services', vol: '590/mo' },
  { kw: 'seo services austin tx', vol: '590/mo' },
  { kw: 'austin seo consultant', vol: '390/mo' },
  { kw: 'seo consultant austin', vol: '390/mo' },
  { kw: 'austin seo consulting', vol: '390/mo' },
  { kw: 'austin seo expert', vol: '320/mo' },
  { kw: 'seo experts austin', vol: '320/mo' },
  { kw: 'best seo companies in austin', vol: '210/mo' },
  { kw: 'local seo austin', vol: '110/mo' },
  { kw: 'austin local seo', vol: '110/mo' },
  { kw: 'seo firm austin', vol: '90/mo' },
  { kw: 'seo services in austin', vol: '90/mo' },
];

const CONSULT_PTS: { h: string; p: string }[] = [
  { h: 'You talk to the person doing the work', p: 'No account managers. The Austin SEO expert on your account writes the fixes, then explains them in plain English.' },
  { h: 'Technical SEO is the floor, not an upsell', p: 'Core Web Vitals, schema, crawlability, and SEO optimization built into every month. Lighthouse 95+ is our own standard.' },
  { h: 'Free SEO audit, yours to keep', p: 'Every engagement starts with a full SEO audit. Austin businesses get the findings and the roadmap whether they hire us or not.' },
  { h: 'AI SEO and GEO included', p: 'Entity data and answer-first content so ChatGPT, Perplexity, and Google AI Overviews can find and cite you.' },
];

const QCARDS: { q: string; kd: string; h: string; p: string }[] = [
  { q: 'austin real estate seo company', kd: 'very low competition', h: 'Real estate & property', p: "One of America's hottest markets, and buyers start on Google. Neighborhood pages, listings visibility, and reviews that win the call." },
  { q: 'medical seo company austin', kd: 'very low competition', h: 'Doctors, surgeons & clinics', p: 'Patients pick from the Map Pack. Profile, reviews, and content that answers what they actually ask before booking.' },
  { q: 'austin attorney seo marketing', kd: 'low competition', h: 'Law firms', p: 'From family law to criminal defense, one case from search pays for years of SEO. Practice-area pages built to rank.' },
  { q: 'technical seo austin', kd: 'very low competition', h: 'Startups & SaaS', p: 'Silicon Hills companies live on organic. Site architecture, product page SEO, and content engineering that compounds.' },
  { q: 'franchise seo austin', kd: 'very low competition', h: 'Franchises & home services', p: "Multi-location visibility from Round Rock to San Marcos, with location pages that don't read like clones." },
  { q: 'video seo company austin', kd: 'low competition', h: 'Restaurants, music & hospitality', p: 'SoCo, Rainey Street, East Austin: discovery-driven businesses where photos, video, and reviews decide the night.' },
];

/* Austin corridors. Written for people who actually drive these roads. */
const DISTRICTS: { q: string; kd: string; h: string; p: string }[] = [
  {
    q: 'lawyer near me austin',
    kd: 'Downtown',
    h: 'Downtown and the Capitol corridor',
    p: 'Law firms, accountants, staffing, and the hospitality trade packed around Congress Avenue, Rainey Street and the Seaholm district. People here search on a phone, from an office or a hotel lobby, and they call one of the first three profiles they see. Your category settings and your review count decide that far more than any blog post ever will.',
  },
  {
    q: 'technical seo austin',
    kd: 'The Domain',
    h: 'The Domain, North Burnet and Parmer Lane',
    p: 'The north corridor along MoPac and 183 is where Apple sits on Parmer, where Dell anchors Round Rock next door, and where a few hundred smaller software firms rent floors around The Domain. These buyers skip ads on reflex and read your site the way they read a pull request. Architecture, page speed and documentation-grade content are the whole job.',
  },
  {
    q: 'best tacos east austin',
    kd: 'East Austin',
    h: 'East Austin, Mueller and Cesar Chavez',
    p: 'Restaurants, coffee, studios, barbers, tattoo shops, boutique fitness. Discovery here is visual and it happens in about eleven seconds. Fresh photos, correct hours, menu markup and a steady drip of new reviews beat a two thousand word service page every single time. We have watched businesses on this side of I-35 move up on photos alone.',
  },
  {
    q: 'boutique south congress',
    kd: 'SoCo and Zilker',
    h: 'South Congress, Zilker and Barton Springs',
    p: 'Retail and wellness businesses fighting for tourists and locals with the same shopfront. Demand does not sit flat: it spikes around SXSW in March, ACL in October, and the Formula 1 weekend out at Circuit of the Americas. If your profile and your seasonal pages are not ready by February, you have already given the year away.',
  },
  {
    q: 'dentist near me austin tx',
    kd: 'Northwest Hills',
    h: 'Northwest Hills, Arboretum and Great Hills',
    p: 'Dental, medical, veterinary and professional services strung along Loop 360 and 183. This is the most winnable pocket in Austin right now. The commercial value is high, the search difficulty on the niche terms sits near zero, and most practices still have a Google Business Profile nobody has touched since the day it was claimed.',
  },
  {
    q: 'ac repair round rock',
    kd: 'Williamson County',
    h: 'Round Rock, Cedar Park, Georgetown and Taylor',
    p: 'Home services and multi-location franchises north of the city, where Samsung is building in Taylor and residents keep arriving faster than the businesses that serve them. Multi-location SEO up here lives or dies on whether your location pages read like somebody has actually driven the route, or like a template with the city name swapped out.',
  },
];

/* Real page-one rivals from live US SERPs, DataForSEO 2026-07-26. Named fairly. */
const RIVALS: { q: string; kd: string; h: string; p: string }[] = [
  {
    q: 'tastyplacement.com',
    kd: 'avg. position 2',
    h: 'The local incumbent',
    p: 'An Austin firm that has held the top of this SERP for years, averaging position 2 across the queries we tracked. If you want an agency with a long local client list and references you can drive across town to meet, they are a fair call. We treat them as the benchmark, not a punching bag.',
  },
  {
    q: 'thriveagency.com',
    kd: '11 SERPs, avg. 3.8',
    h: 'The national machine',
    p: 'Thrive appears on more of these queries than anyone we measured, at an average position of 3.8, and ranks first for terms as far from Austin as agentur marketing (720/mo) and agences marketing digital (590/mo). That reach is genuinely impressive. It also tells you what you are buying: a large multi-city operation where the strategist who won the pitch is unlikely to be the person on your monthly call.',
  },
  {
    q: 'builtinaustin.com',
    kd: 'avg. position 5',
    h: 'A directory, not an agency',
    p: 'Built In Austin is a jobs and community site. It ranks because Google trusts the domain, not because it does SEO for anyone. Worth knowing before you count your competition: some of the page-one slots you are chasing are lists, and getting your business onto pages like that is part of the work rather than a fight to win.',
  },
  {
    q: 'straightnorth.com',
    kd: 'avg. position 9',
    h: 'The lead-gen specialist',
    p: 'Straight North sells SEO as a lead engine and reports on it that way, which is the right instinct and more than most agencies do. They are Chicago based and Austin is one market among many for them. Ask them how they attribute a phone call, then ask us the same question and compare the answers.',
  },
  {
    q: 'helium-seo.com',
    kd: 'avg. position 11.7',
    h: 'The data-forward challenger',
    p: 'Helium leans on testing and analytics and sits just off page one on average across these terms. Good fit for a company with enough traffic that experiments produce a readable signal. Below a certain volume, testing tells you almost nothing and fundamentals tell you almost everything, which is where most Austin SMBs actually live.',
  },
  {
    q: 'charlotteseofirm.com',
    kd: 'ranks #1 in its city',
    h: 'Proof that one city can be owned',
    p: 'Not an Austin rival, and the most useful name on this list. It holds position 1 for charlotte seo companies and charlotte seo company, 880 searches a month each, by being relentlessly about a single city. That is the playbook, and it is why we write city pages one at a time instead of stamping them out.',
  },
];

const LAYERS: { lt: string; h: string; p: string; base?: boolean }[] = [
  { lt: 'Layer 06', h: 'AI SEO and GEO', p: 'Entity data and answer-first content so AI search engines can find and cite your business.' },
  { lt: 'Layer 05', h: 'Local content', p: 'Service and neighborhood pages that earn rankings without reading like doorway pages.' },
  { lt: 'Layer 04', h: 'Review growth & response', p: 'A system to earn and answer reviews, the strongest local signal you control.' },
  { lt: 'Layer 03', h: 'Citations & NAP cleanup', p: 'Consistent listings across the directories Google trusts; duplicates removed.' },
  { lt: 'Layer 02', h: 'Google Business Profile', p: 'The Map Pack is built from your profile: categories, services, photos, posts, Q&A.' },
  { lt: 'Layer 01 · Foundation', h: 'Technical SEO & Core Web Vitals', p: 'Speed, schema, crawlability, SEO optimization. The layer most of the SEO companies in Austin skip, and the reason rankings stick.', base: true },
];

const DUEL: { k: string; a: React.ReactNode; b: string }[] = [
  { k: 'Scope and quote', a: 'Written scope you read before you sign', b: 'Quoted on a call' },
  { k: 'Contract', a: 'Month-to-month', b: '6-12 month lock-in' },
  { k: 'Who you talk to', a: 'The engineer doing the work', b: 'An account manager' },
  { k: 'Kickoff', a: '7 days', b: 'Weeks' },
  { k: 'Reporting', a: 'Calls & leads, monthly', b: 'Ranking screenshots' },
  { k: 'Technical plus AI SEO / GEO', a: 'Included', b: 'Rarely offered' },
  { k: 'Your data & accounts', a: 'You own them', b: 'Often locked to the firm' },
];

type FaqGroup = { id: string; label: string; items: { q: string; a: string }[] };
const FAQ_GROUPS: ReadonlyArray<FaqGroup> = [
  {
    id: 'faq-pricing',
    label: 'Pricing & timeline',
    items: [
      { q: 'How much does SEO cost in Austin?', a: 'SEO in Austin sits at the higher end of the Texas range because demand is high and the market is crowded. What actually sets your number is how competitive your category is here, how many locations you serve, how much technical repair the site needs before anything else can work, and how much content already exists that is worth keeping. FactoryJet bills month to month, starts with a free audit, and charges no setup fee. Book a call and we will walk the real scope for your business rather than reading you a rate card.' },
      { q: 'How do I compare quotes from Austin SEO companies?', a: 'Put the scopes side by side and read the deliverables, not the headline. Ask who physically does the work, how many hours actually land on your account, whether technical fixes are included or billed separately, and what happens to your content and your accounts if you walk away. Two quotes that look similar on the surface often differ by a factor of three in real work. The one that does nothing for six months is the expensive one, whatever it says on the invoice.' },
      { q: 'How long does SEO take in a market like Austin?', a: 'Longer than in a quiet market, and worth more when it lands. Expect early movement in three to six months and stable local-pack rankings in six to twelve. We win the low-competition searches first, your neighborhood and your specialty, so leads start arriving while the bigger terms are still maturing.' },
      { q: 'Why is local SEO a monthly fee instead of one-time?', a: 'Rankings are earned and then defended. Competitors optimize, Google ships algorithm updates, and your profile needs ongoing posts, reviews and citation upkeep. A one-time setup decays quietly and you find out six months later. That is why we work month to month instead of selling you a project that ends.' },
    ],
  },
  {
    id: 'faq-cost',
    label: 'What drives the cost',
    items: [
      { q: 'How much should I expect to pay for SEO?', a: 'The honest answer is that it depends on what you are trying to outrank, and any agency that quotes you before looking at that is guessing. The things that move the number are your number of locations, how competitive your category is in Austin, the technical condition of your site, how much content gets produced each month, and whether link building is part of the scope. Get two or three written scopes and compare them line by line. That comparison teaches you more than any published number would.' },
      { q: 'How much does the average local SEO cost?', a: 'There is no useful average, because the averages you find online are blending completely different jobs. A single-location dentist in Northwest Hills and a nine-location home services franchise across Williamson County are both doing local SEO, and they are not remotely the same work. Ask what is included every month, who does it, and how you will know whether it worked. Once you have that, the scope explains itself.' },
      { q: 'How much should SEO cost for a small business?', a: 'Less than it brings in. That sounds glib but it is the only test worth applying. Work out what one new customer is worth to you across a year, then ask how many extra customers a month would cover the work with room left over. If the answer is a handful, the scope fits. If the answer is dozens, the scope is too big for where you are today and you should start narrower: your profile, your reviews, and two or three pages that match what people actually type.' },
      { q: 'How much does an SEO agency typically cost?', a: 'Agencies price on effort, so the drivers are the same everywhere: locations, category competitiveness, technical debt on the site, content volume, and whether links are included. Ours is month to month with a free audit first, so the plan is on paper before you commit. We will not quote on a first call without opening the site, because a quote made that way is fiction and both of us would find out later.' },
      { q: 'Is it worth paying an SEO company?', a: 'It is worth it if you are already losing work to competitors sitting above you, and it is not worth much if nobody searches for what you sell. Most Austin businesses are firmly in the first group. The real failure mode is not paying for SEO, it is paying for SEO with no way to tell whether it is working. Insist on reporting in calls, forms and bookings. Ranking screenshots are the easiest thing in this industry to make look good.' },
      { q: 'Can I pay Google to rank higher?', a: 'Not in the organic results or the Map Pack, no. You can buy Google Ads and you can pay for a Local Services Ad slot, and both of those appear above the organic results, but they stop the moment you stop paying and Google is explicit that ad spend does not influence organic ranking. If somebody offers you a paid shortcut into the map results, they are selling something Google does not sell.' },
      { q: 'What is an SEO salary?', a: 'You are probably weighing an in-house hire against an agency, which is a sensible thing to compare. A full-time SEO in Austin is a real Austin salary plus benefits plus the tool stack, and one person rarely covers technical work, writing and local listings equally well. An agency spreads those skills across several people and sees far more sites and algorithm updates than any single hire will. The trade is depth of knowledge about your business against depth of knowledge about search. Plenty of companies eventually run both.' },
    ],
  },
  {
    id: 'faq-consult',
    label: 'Consultants & competition',
    items: [
      { q: 'What is the best SEO agency in Austin?', a: 'The best SEO agency in Austin is the one that treats your money like it is their own: a written scope you can read before signing, month-to-month terms, your data staying yours, and reporting tied to real business outcomes rather than ranking screenshots. Run every agency through that checklist. If we do not clear it for your situation, we will tell you plainly and point you at someone who does.' },
      { q: 'Do I need an Austin SEO consultant or an agency?', a: 'You need both jobs done: judgment and execution. A solo SEO consultant Austin businesses hire can diagnose well but rarely executes at depth. An agency executes but usually hides the expert behind an account manager. Here the consultant and the executor are the same senior engineer, which is the only reason a team our size can compete on this SERP at all.' },
      { q: 'How competitive is SEO in Austin?', a: 'The most competitive in Texas, honestly. The head terms are held by established firms like TastyPlacement locally and national operators like Thrive Agency and Straight North. Our strategy is sequence, not force: win the low-difficulty, high-intent searches first, the ones that score near zero difficulty like local seo austin and seo expert austin, build authority from those, then contest the head terms from a position of strength.' },
      { q: 'What is the best SEO company in Austin?', a: 'The best SEO company Austin can offer you is the one that shows its work: written deliverables, a scope you read before you sign, month-to-month terms, your data staying yours, and reporting tied to calls and leads. Run every candidate through that list, including us. We publish our own current search positions further up this page, which is not a comfortable thing to do and is exactly why we do it.' },
      { q: 'Do you offer one-time SEO consulting or audits?', a: 'Start with the free SEO audit. Austin businesses keep the findings and the roadmap either way, hired or not. If what you want is ongoing advice without anyone executing it, we will say so plainly if we are the wrong fit. We are built for doing the work, not for describing it in a deck.' },
    ],
  },
  {
    id: 'faq-worth',
    label: 'Is SEO still worth doing?',
    items: [
      { q: 'Is SEO dead or evolving in 2026?', a: 'Evolving, and it got more interesting. What changed is where the answer shows up. People still search, they just as often read a summary at the top of Google or ask ChatGPT instead of clicking anything. The work that gets you cited in those answers is the same work that got you ranked: clear pages, real expertise, consistent business data, and other credible sites referencing you. The trick era died. The discipline did not.' },
      { q: 'Why is SEO no longer relevant?', a: 'That story comes back every few years, usually after a big algorithm update or when a new channel gets loud. Social pulled attention away, then paid ads did, now AI answers have people assuming clicking is finished. Meanwhile the demand has not moved: 4,400 people a month still look for an SEO agency in Austin, and 14,800 type seo company near me. If your customers open Google before they buy, SEO is relevant to you no matter what the headline says.' },
      { q: 'Do small businesses need SEO?', a: 'If people search before they buy from you, yes. That covers dentists, lawyers, plumbers, restaurants, gyms and nearly every trade in this city. If you run entirely on referrals and repeat customers and you are happy with that, you may need nothing beyond an accurate Google Business Profile. The test is quick: search your own category plus near me and see whether you appear. If you do not, you are paying for that every week without seeing the bill.' },
      { q: 'Is local SEO worth it?', a: 'In a city where 42,000 small businesses compete for three Map Pack slots per category, it is one of the few marketing levers with a visible finish line. You are not trying to beat the internet. You are trying to beat the handful of businesses in your category within a few miles of you. That is a fight a normal owner can actually win, which is not true of most channels you could spend the same money on.' },
      { q: 'Can I do local SEO myself?', a: 'The first chunk, absolutely, and you should. Claim and completely fill out your Google Business Profile, make your name, address and phone identical everywhere they appear, add real photos rather than stock, post occasionally, and ask every happy customer for a review. That alone moves a lot of businesses up. Where it gets hard is technical repair, content that has to outrank an established competitor, and earning links from sites that matter. That is where it stops being a weekend job.' },
      { q: 'What is the 80/20 rule for SEO?', a: 'The idea that a small slice of the work produces most of the result. In local SEO that slice is usually three things: a complete and correctly categorised Google Business Profile, a steady flow of genuine reviews, and a site that loads fast and says clearly what you do and where you do it. Get those right before you spend anything on the clever stuff. We have seen the clever stuff fail on top of a broken foundation more times than we can count.' },
      { q: 'Is SEO a hard job?', a: 'Not intellectually brutal. Just wide. It asks for technical understanding, writing ability, patience, and a tolerance for being judged on outcomes you only partly control. The genuinely hard part is the feedback loop: you make a change and learn whether it worked weeks later. That is why we bias toward fixes that are correct on their own merits, like speed and structured data, over experiments we cannot read.' },
    ],
  },
  {
    id: 'faq-maps',
    label: 'Google Maps & rankings',
    items: [
      { q: 'How does Google Maps ranking work?', a: 'Three factors, in Google own words: relevance, distance and prominence. Relevance is how well your profile matches what was typed, which is why your categories and services matter so much. Distance is how close you are to the person searching, and you cannot change it. Prominence is how well known and well reviewed you are, and that is where most of the winnable work sits. Two of the three are in your hands.' },
      { q: 'How do I get my listing at the top of Google Maps higher?', a: 'Start with the boring completeness. Claim the profile, choose the most specific primary category available, fill in services and attributes, set accurate hours including holidays, add real photos, and make your name, address and phone identical on your site and in every directory. Then work reviews steadily rather than in bursts, and reply to all of them. Then build pages on your site that match what people search locally. In that order, not the other way round.' },
      { q: 'Why is my Google ranking so low?', a: 'Usually one of five things. Your profile is incomplete or in the wrong category. Your reviews stalled while a competitor kept going. Your site is slow or throwing errors Google keeps tripping over. Your content is thin for the thing you want to rank for. Or you simply have fewer credible sites linking to you than the people above you. Rankings also wobble on their own during algorithm updates and SERP tests, so read the trend across weeks rather than the number you checked this morning.' },
    ],
  },
  {
    id: 'faq-basics',
    label: 'Local SEO basics',
    items: [
      { q: 'What is local SEO?', a: 'Local SEO is how your business shows up when nearby Austin customers search for what you sell, in Google Maps, the local 3-pack, and near me results. Unlike general SEO, it targets high-intent buyers who are ready to call or drive over.' },
      { q: 'What is the Google Map Pack (local 3-pack)?', a: 'The Map Pack is the block of three businesses with a map at the top of local searches. It is generated entirely from Google Business Profiles and ranked by relevance, distance and prominence. Roughly 44% of clicks on those searches land inside it, which is why three slots per category is such a brutal number in a city this size.' },
      { q: 'What does an SEO audit in Austin include?', a: 'Ours covers technical health (speed, Core Web Vitals, crawlability, schema), your Google Business Profile, reviews and citations, content gaps against what Austin actually searches, and the competitors currently holding your spots. Plain English, free, and yours to keep whether you hire us or not.' },
      { q: 'Do tech-savvy Austin customers even click ads?', a: 'Less than almost anywhere. Engineer-heavy audiences skip ads on reflex and trust organic results and AI answers, which is exactly where SEO and GEO work. Ads still have a place. They just rent attention that organic search owns outright.' },
    ],
  },
  {
    id: 'faq-trust',
    label: 'Contracts & guarantees',
    items: [
      { q: 'Do you require a long-term contract?', a: 'No. FactoryJet local SEO is month to month: cancel any time with thirty days notice. Most Austin firms lock you in for six to twelve months. We would rather earn the next month than hold you to a document.' },
      { q: 'What happens to my work if I leave?', a: 'You keep everything. Your Google Business Profile, website content, citations and reporting access stay yours. Work that disappears when you leave was rented, not built, and you should ask every agency this question before you sign anything.' },
      { q: 'Can you guarantee #1 rankings in Austin?', a: 'No, and in this market especially, anyone who guarantees a position is guessing with your money. Google itself warns against SEOs who promise rankings. What we guarantee is the work, the transparency about what we did, and your right to leave at the end of any month.' },
      { q: 'How do I avoid SEO scams in Austin?', a: 'Look for transparent tactics, real Google Business Profile and review expertise, realistic timelines, and full access to your own data and accounts. Walk away from any SEO marketing Austin pitch built on guaranteed rankings, secret methods, or a one-size-fits-all package that never mentions your category.' },
    ],
  },
  {
    id: 'faq-fit',
    label: 'Fit & getting started',
    items: [
      { q: 'Does SEO work for real estate in Austin?', a: 'It is one of the strongest fits in this market. Buyers and sellers research agents, neighborhoods and listings on Google long before they call anybody. Agent profiles, neighborhood pages and reviews decide who gets that first conversation, and in a market that moves this fast, first conversations are most of the business.' },
      { q: 'Do you do SEO for doctors and medical practices?', a: 'Yes, and it is one of Austin least competitive niches right now. Patients choose from the Map Pack and read reviews before booking. Profile accuracy, review velocity and content that answers the questions people actually ask before an appointment do most of the heavy lifting.' },
      { q: 'Does local SEO work for startups and SaaS?', a: 'Differently, and yes. Startups win on organic and technical SEO: site architecture, product page SEO, and content engineering that compounds. We speak that language because we build software as well as market it, which matters more in this city than it would in most.' },
      { q: 'Do you serve Round Rock, Cedar Park and the suburbs?', a: 'Yes. We work across the entire Austin metro: Downtown, South Congress, East Austin, Mueller, The Domain, Round Rock, Cedar Park, Georgetown, Pflugerville, San Marcos and Taylor. Multi-location businesses get location pages written individually, because Google has been good at spotting cloned ones for years now.' },
    ],
  },
];

const faqSchemaItems = FAQ_GROUPS.flatMap((g) =>
  g.items.map((item) => ({
    '@type': 'Question' as const,
    name: item.q,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.a },
  }))
);

const OTHER_CITIES: { name: string; path: string }[] = [
  { name: 'Nashville SEO', path: '/nashville/seo' },
  { name: 'Charlotte SEO', path: '/charlotte/seo' },
  { name: 'Denver SEO', path: '/denver/seo' },
  { name: 'Tampa SEO', path: '/tampa/seo' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://factoryjet.com/austin/seo#webpage',
      url: 'https://factoryjet.com/austin/seo',
      // Freshness signal. Keep honest: bump when content actually changes.
      dateModified: '2026-08-04',
      isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
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
      name: 'Local SEO Services in Austin, TX',
      serviceType: 'Search engine optimization',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Austin', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Round Rock', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Cedar Park', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Georgetown', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Pflugerville', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'San Marcos', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Taylor', containedInPlace: { '@type': 'State', name: 'Texas' } },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Austin SEO services',
        itemListElement: LAYERS.map((l) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: l.h, description: l.p },
        })),
      },
      url: CANONICAL,
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
        { '@type': 'ListItem', position: 2, name: 'US SEO Services', item: 'https://factoryjet.com/services/seo' },
        { '@type': 'ListItem', position: 3, name: 'Austin', item: 'https://factoryjet.com/austin' },
        { '@type': 'ListItem', position: 4, name: 'SEO', item: CANONICAL },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Austin SEO Company & Agency | Local SEO Services in Austin, TX',
      description:
        'Who does SEO in Austin, TX, what the work involves, how competitive the local SERP really is, and how FactoryJet compares to the agencies currently holding page one.',
      inLanguage: 'en-US',
      isPartOf: { '@id': 'https://factoryjet.com/#organization' },
      about: { '@id': `${CANONICAL}#service` },
      author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/', jobTitle: 'Founder, FactoryJet' },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.blufsec .finder p', '.blufsec .bluf-support', '.faqcat details p'],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: faqSchemaItems,
    },
  ],
};

export default function AustinSeoPage() {
  return (
    <>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="aseo">
        {/* HERO: glass depth stack */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <span className="loc"><b />Austin, TX</span>
              <h1>Austin SEO for the most <span className="it">crowded</span> market in Texas</h1>
              <p className="lead">42,000 small businesses. 5,500 tech companies. Everyone here is good. The ones that grow are the ones <b>Google finds first</b>.</p>
              <HeroInlineForm region="us" source="austin_seo_hero" submitLabel="Get my free SEO audit" />
              <div className="cta-row">
                <a className="btn btn-ghost" href={CALENDLY}>Talk to the founder</a>
              </div>
            </div>
            <div className="scene" aria-hidden="true">
              <div className="gchip c1"><div className="k">Map-pack clicks</div><div className="v">44% ↑</div></div>
              <div className="gstack">
                <div className="gcard g1">
                  <div className="gq"><i />seo company austin</div>
                  <div className="nm">Your Business <span className="tag">#1 MAP PACK</span></div>
                  <div className="mt"><span className="star">★★★★★</span> 5.0 (141) · Austin, TX</div>
                </div>
                <div className="gcard g2">
                  <div className="nm">A competitor</div>
                  <div className="mt">★ 4.2 (33)</div>
                </div>
                <div className="gcard g3">
                  <div className="nm">Another competitor</div>
                  <div className="mt">★ 3.9 (12)</div>
                </div>
              </div>
              <div className="gchip c2"><div className="k">Calls</div><div className="v">Ringing again</div></div>
            </div>
          </div>
        </section>

        {/* FACTS BAR */}
        <div className="factsbar">
          <div className="wrap row">
            <div className="fact"><div className="v">No contract</div><div className="k">month-to-month, cancel anytime</div></div>
            <div className="fact"><div className="v">Free audit</div><div className="k">no setup fee, no pressure</div></div>
            <div className="fact"><div className="v">7-day</div><div className="k">kickoff, not weeks</div></div>
            <div className="fact"><div className="v"><span className="star">★</span> 4.9</div><div className="k">across 500+ projects</div></div>
          </div>
        </div>

        {/* BLUF: viewfinder + plain-language answer */}
        <section className="blufsec">
          <div className="wrap">
            <div className="finder">
              <span className="c tl" /><span className="c tr" /><span className="c bl" /><span className="c br" />
              <span className="tag">The short answer</span>
              <p>SEO in Austin means getting your business found by the people already searching for what you sell, in Google Maps, in the regular results, and now inside AI answers. FactoryJet does that work: Google Business Profile, technical repair, reviews, local content and AI search visibility. Month to month, free audit first, and you talk to the engineer doing the work rather than an account manager.</p>
            </div>
            <div className="bluf-support" style={{ maxWidth: '900px', margin: '30px auto 0' }}>
              <p className="districts" style={{ marginTop: 0, maxWidth: 'none' }}>
                In practice the job splits into four parts. First, your <Link href="/services/local-seo">Google Business Profile and local listings</Link>, which is what actually decides the three-result Map Pack. Second, the technical condition of your site, which is where a free <Link href="/services/seo-audit">SEO audit</Link> starts, because a slow or broken site will not hold a ranking no matter how good the content is. Third, pages that match what Austin genuinely types into Google, not what an agency guesses. Fourth, and newer, <Link href="/services/ai-seo">AI SEO and GEO</Link>: the structured data and answer-first writing that lets ChatGPT, Perplexity and Google AI Overviews quote you rather than a competitor. You can see where you stand on that last part in a couple of minutes with our free <Link href="/ai-visibility-checker">AI visibility checker</Link>, which scans whether ChatGPT, Perplexity and Google AI Overviews currently name your business at all.
              </p>
              <p className="districts" style={{ marginTop: '18px', maxWidth: 'none' }}>
                Who does it here? A mix. Two or three genuine Austin firms, several national agencies servicing Austin from other cities, a long tail of freelancers, and a few directory sites that outrank all of them without doing SEO for anyone. We break that down honestly further down this page, including where we currently sit. If you run a smaller operation, our <Link href="/services/small-business-seo">small business SEO</Link> approach is the shorter version of everything below, and <Link href="/services/seo">US SEO services</Link> covers the national picture.
              </p>
            </div>
          </div>
        </section>

        {/* CROWDED ROOM */}
        <section className="room">
          <div className="wrap">
            <span className="eyebrow">Why Austin is hard mode</span>
            <h2>Everyone in this city is good. That&apos;s the problem.</h2>
            <p className="lead">SEO in Austin is more competitive than anywhere else in Texas, because the city keeps winning. Ask any Austin SEO agency for a guarantee and you&apos;ll get one. Ask for their math and you won&apos;t. Here&apos;s ours.</p>
            <div className="mosaic">
              {MOSAIC.map((m) => (
                <div className={`mcell ${m.cls}`} key={m.cls}>
                  <div className="n">{m.n}</div>
                  <p className="t">{m.t}</p>
                  <span className="src">{m.src}</span>
                </div>
              ))}
            </div>
            <p className="closer">Being good is table stakes here. Austin shoppers are the <b>most loyal small-business customers in America</b>, but loyalty starts with discovery, and discovery happens on Google. The work is making sure it&apos;s you they discover.</p>
          </div>
        </section>

        {/* DEMAND CHIPS */}
        <div className="demand">
          <div className="wrap">
            <p className="dh">What Austin types into Google every month (DataForSEO, July 2026)</p>
            <div className="chips">
              {CHIPS.map((c) => (
                <span key={c.kw}><b>{c.kw}</b> {c.vol}</span>
              ))}
            </div>
          </div>
        </div>

        {/* DISTRICTS: real Austin substance */}
        <section className="verts">
          <div className="wrap">
            <span className="eyebrow">Austin, corridor by corridor</span>
            <h2>Austin is not one market. It is about six of them.</h2>
            <p className="lead">Search demand in this city splits along the same lines the city does. A dentist off Loop 360 and a taco trailer on East Cesar Chavez are both doing local SEO, and almost nothing about their strategy overlaps. Here is how we read the map before we write a single page.</p>
            <div className="qgrid">
              {DISTRICTS.map((d) => (
                <div className="qcard" key={d.q}>
                  <div className="qbar"><i />{d.q} <span className="kd">{d.kd}</span></div>
                  <div className="qbody"><h3>{d.h}</h3><p>{d.p}</p></div>
                </div>
              ))}
            </div>
            <p className="districts">
              There is a reason we lay it out this way. Austin&apos;s economy is not a single story about tech. It is the state capitol and everything that orbits it, the University of Texas and roughly fifty thousand students, a hospital system anchored by Dell Seton and Dell Medical School, a music and festival calendar that swings entire quarters, Tesla&apos;s plant out in Del Valle, Samsung&apos;s build in Taylor, Whole Foods headquartered downtown, and Dell up in Round Rock. Each of those pulls a different kind of business into orbit, and each of those businesses gets found in a different way. An agency that sells you &quot;Austin SEO&quot; without asking which Austin you sell to is selling you a template.
            </p>
          </div>
        </section>

        {/* NEAR-ME: local proximity search */}
        <section className="nearmesec">
          <div className="wrap">
            <div className="nmsinner">
              <div>
                <span className="eyebrow">Near-me searches</span>
                <h2>Your next customer is searching <span className="it">right now</span></h2>
                <p className="lead">Roughly 14,800 people a month type &quot;seo company near me&quot; into Google in the US, and another 1,900 look for &quot;local seo company near me&quot;. Those are national terms and they are genuinely hard: difficulty 24 and 34. The Austin versions are not. &quot;austin seo agency&quot; scores 4. &quot;seo expert austin&quot; and &quot;local seo austin&quot; score zero. That gap is the entire opportunity, and it closes a little every quarter.</p>
                <div className="nmstats">
                  <div className="nmstat"><div className="nv">14,800</div><div className="nk">&quot;seo company near me&quot; searches a month</div></div>
                  <div className="nmstat"><div className="nv">KD&thinsp;24</div><div className="nk">difficulty on that national term</div></div>
                  <div className="nmstat"><div className="nv">KD&thinsp;4</div><div className="nk">difficulty on &quot;austin seo agency&quot;</div></div>
                  <div className="nmstat"><div className="nv">KD&thinsp;0</div><div className="nk">&quot;local seo austin&quot; and &quot;seo expert austin&quot;</div></div>
                </div>
                <div className="cta-row" style={{ marginTop: '28px' }}>
                  <ModalCTAButton label="See where you rank near Austin" region="us" modalVariant="seo" btnVariant="primary-light" />
                </div>
              </div>
              <div className="nmimgwrap">
                <img
                  src="/images/us/austin/austin-local-seo-near-me.webp"
                  alt="Smartphone displaying Google Maps local search near me results for Austin Texas SEO businesses"
                  width={896}
                  height={704}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CONSULTANT + CALL CARD */}
        <section className="consult">
          <div className="wrap grid">
            <div>
              <h2>An Austin SEO consultant who can read a waterfall chart</h2>
              <p className="lead">This is the most engineer-dense city in Texas. Your customers notice slow sites and thin content, and so does Google. Our <Link href="/services/seo-consulting">SEO consulting</Link> starts where most agencies stop: in the code.</p>
              <div className="pts">
                {CONSULT_PTS.map((c) => (
                  <div className="cpt" key={c.h}><span className="tick" /><div><h3>{c.h}</h3><p>{c.p}</p></div></div>
                ))}
              </div>
            </div>
            <div className="callcard">
              <div className="avatar">BB</div>
              <div className="nm">Bhavesh Barot</div>
              <div className="ti">Founder, FactoryJet. 12+ years building for SMBs.</div>
              <p className="quotebit">&quot;Thirty minutes, no pitch deck. Bring your site and your toughest question.&quot;</p>
              <a className="btn" href={CALENDLY}>Book a call with the founder</a>
              <p className="micro">Calendly, 30 minutes, no commitment</p>
            </div>
          </div>
        </section>

        {/* VERTICALS: query cards */}
        <section className="verts">
          <div className="wrap">
            <span className="eyebrow">Who we help</span>
            <h2>Built for the searches your customers already make</h2>
            <p className="lead">These are real Austin queries from our keyword research. If one of them sounds like your business, the demand is already there. The question is who answers it.</p>
            <div className="qgrid">
              {QCARDS.map((q) => (
                <div className="qcard" key={q.q}>
                  <div className="qbar"><i />{q.q} <span className="kd">{q.kd}</span></div>
                  <div className="qbody"><h3>{q.h}</h3><p>{q.p}</p></div>
                </div>
              ))}
            </div>
            <p className="districts">One local SEO company in Austin for the whole metro: <b>Downtown, South Congress, East Austin, The Domain, Rainey Street, Mueller, Zilker</b>, plus <b>Round Rock, Cedar Park, Georgetown, Pflugerville, San Marcos, and Taylor</b>. Home services run on their own rules out here, where hail season rewrites the demand curve every spring, so <Link href="/services/roofing-seo">roofing SEO</Link> gets its own playbook rather than a shared one.</p>
          </div>
        </section>

        {/* SERVICES: the stack */}
        <section className="stacksec">
          <div className="wrap">
            <h2>Austin SEO services, built like software</h2>
            <p className="lead">Every Austin SEO service we run sits on an engineering foundation. One monthly scope, the whole stack, no add-on surprises halfway through.</p>
            <div className="stack">
              {LAYERS.map((l) => (
                <div className={l.base ? 'layer base' : 'layer'} key={l.lt}>
                  <span className="lt">{l.lt}</span>
                  <div><h3>{l.h}</h3><p>{l.p}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON: chip duel */}
        <section className="duel">
          <div className="wrap">
            <h2>FactoryJet vs. a typical Austin SEO firm</h2>
            <p className="lead">Same seven questions. Put every seo company in Austin you talk to through them, including us.</p>
            <div className="duelrows">
              <div className="duelhead"><span>What matters</span><span className="fjh">FactoryJet</span><span className="alth">Typical firm</span></div>
              {DUEL.map((d) => (
                <div className="drow" key={d.k}>
                  <span className="k">{d.k}</span>
                  <span className="pillA">{d.a}</span>
                  <span className="pillB">{d.b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE REAL SERP: named competitors + our honest position */}
        <section className="verts">
          <div className="wrap">
            <span className="eyebrow">The SERP, honestly</span>
            <h2>Who you are actually up against for &quot;austin seo&quot;</h2>
            <p className="lead">We pulled the live US results in July 2026. Here is who holds page one, what each of them is genuinely good at, and where we sit today. No spin: on this SERP we are the challenger, and pretending otherwise would be the first sign you should not hire us.</p>
            <div className="qgrid">
              {RIVALS.map((r) => (
                <div className="qcard" key={r.q}>
                  <div className="qbar"><i />{r.q} <span className="kd">{r.kd}</span></div>
                  <div className="qbody"><h3>{r.h}</h3><p>{r.p}</p></div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: '32px',
                background: '#FFFFFF',
                border: '1px solid rgba(26,23,18,.10)',
                borderLeft: '4px solid #F05A28',
                borderRadius: '18px',
                padding: '28px 30px',
                maxWidth: '860px',
                boxShadow: '0 22px 44px -24px rgba(26,23,18,.22)',
              }}
            >
              <h3 style={{ marginBottom: '10px' }}>Where FactoryJet actually stands, as of July 2026</h3>
              <p style={{ fontSize: '15px', color: '#56524A' }}>
                We hold position 8 for &quot;seo agency austin texas&quot;, and this page has been collecting roughly 1,300 impressions a quarter for &quot;austin seo&quot; from around position 19. We rank 10th for &quot;local seo nashville&quot; in another market. We have 44 referring domains. Coalition Technologies, one of the national firms competing on these same terms, has close to 2,800. We are not going to pretend that gap does not exist.
              </p>
              <p style={{ fontSize: '15px', color: '#56524A', marginTop: '14px' }}>
                Here is why it matters less for you than it does for us. Your business needs to rank in one city, for a handful of categories, against a dozen or so genuine local rivals. We are trying to rank nationally against firms with sixty times our link profile. The playbook that gets you there is well understood and it works on a normal timeline: a complete profile, real reviews, a technically clean site, and pages that answer what your customers actually search. The playbook that gets us there takes years. You get the benefit of us doing the harder version of the same job every day.
              </p>
              <p style={{ fontSize: '15px', color: '#56524A', marginTop: '14px' }}>
                Other names you will run into on these searches: Lesser Media, which quietly owns smaller city terms like &quot;seo springfield&quot; and &quot;seo stamford&quot; at position 4, plus Tiger29, Elit-Web and Synchronicity Designs. None of them are bad choices. Ask all of us the same three questions: who does the work, what happens if it does not move, and does anything leave with you.
              </p>
              <div className="cta-row" style={{ marginTop: '22px' }}>
                <ModalCTAButton label="Get your free Austin SEO audit" region="us" modalVariant="seo" btnVariant="primary-light" />
              </div>
            </div>

            <p className="districts">
              We write every city page one at a time for exactly the reason above. If you want to see the same approach applied elsewhere, read <Link href="/nashville/seo">Nashville SEO</Link>, <Link href="/charlotte/seo">Charlotte SEO</Link> or <Link href="/denver/seo">Denver SEO</Link>. The underlying services live at <Link href="/services/seo">SEO services</Link>, <Link href="/services/local-seo">local SEO</Link>, <Link href="/services/small-business-seo">small business SEO</Link>, <Link href="/services/seo-audit">SEO audit</Link> and <Link href="/services/ai-seo">AI SEO</Link>.
            </p>
          </div>
        </section>

        {/* PROOF */}
        <section className="proof">
          <div className="wrap">
            <div className="proofcard">
              <span className="mark" aria-hidden="true">&ldquo;</span>
              <blockquote><p>I started FactoryJet to do the opposite of what most agencies do: senior people doing the actual work, a scope you read before you sign, and no 12-month handcuffs. If our Austin SEO doesn&apos;t earn its keep, you leave the next month.</p></blockquote>
              <div className="byline"><div className="avatar">BB</div><div><div className="nm">Bhavesh Barot</div><div className="ti">Founder, FactoryJet. 12+ years building for SMBs.</div></div></div>
              <div className="clients">
                <span>Impulse Branding Solutions</span><span>Belle Maison</span><span>Shevva Car Driver Hire</span><span>Rukman Transport</span>
              </div>
              <p className="real">No stock screenshots, no invented case studies. These client builds are live right now. Open them and run PageSpeed yourself.</p>
            </div>
          </div>
        </section>

        {/* CITY VISUAL: Austin proof */}
        <section className="citysec">
          <div className="wrap">
            <div className="csinner">
              <div className="csimgwrap">
                <img
                  src="/images/us/austin/austin-skyline-seo.webp"
                  alt="Austin Texas downtown skyline, where FactoryJet serves businesses across the metro area"
                  width={1216}
                  height={704}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div>
                <span className="eyebrow">Austin metro</span>
                <h2>Serving every corner of Austin, Texas</h2>
                <p className="lead">From Silicon Hills startups to South Congress boutiques, FactoryJet builds local SEO that compounds month over month. One agency, the entire metro.</p>
                <div className="csstats">
                  <div className="csstat"><div className="csv">500+</div><div className="csk">businesses served across the US</div></div>
                  {/* "10+ yrs", not 25. PRODUCT.md fixes the experience framing at
                      decade-plus and rules out 25 years explicitly. */}
                  <div className="csstat"><div className="csv">10+ yrs</div><div className="csk">of building sites and SEO for SMBs</div></div>
                  <div className="csstat"><div className="csv">7 days</div><div className="csk">from audit to active campaign</div></div>
                </div>
                <div className="cta-row" style={{ marginTop: '28px' }}>
                  <ModalCTAButton label="Get your free Austin SEO audit" region="us" modalVariant="seo" btnVariant="primary-light" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq">
          <div className="wrap">
            <span className="eyebrow">Austin SEO FAQ</span>
            <h2>Questions, answered like a real call</h2>
            <p className="lead">Answer-first and honest: the same answers we would give you on the phone, including the ones about money that most agency sites skip.</p>
            <div className="faqgrid">
              <nav className="faqnav">
                {FAQ_GROUPS.map((g) => (
                  <a href={`#${g.id}`} key={g.id}>{g.label} <span className="ct">{g.items.length}</span></a>
                ))}
                <p className="faqnavhelp">Can&apos;t find your answer?<br /><a href={CALENDLY}>Talk to the founder →</a></p>
              </nav>
              <div>
                {FAQ_GROUPS.map((g) => (
                  <div className="faqcat" id={g.id} key={g.id}>
                    <p className="ch">{g.label}</p>
                    {g.items.map((it, i) => (
                      <details key={it.q} open={g.id === 'faq-pricing' && i === 0}>
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

        {/* FINAL */}
        <section className="final">
          <div className="wrap">
            <span className="eyebrow" style={{ color: '#F6A07E', justifyContent: 'center' }}>Get started</span>
            <h2>Ready to be the signal in Austin&apos;s noise?</h2>
            <p className="lead">Start with a free Austin SEO audit. We will show you where you stand in the Map Pack, what is technically holding you back, and exactly what we would fix, with zero pressure to continue.</p>
            <div className="cta-row">
              <ModalCTAButton label="Get your free Austin SEO audit" region="us" modalVariant="seo" btnVariant="primary-light" />
              <a className="btn btn-ghost" href={CALENDLY}>Talk to the founder</a>
            </div>
            <p className="fine">Austin TX SEO, month-to-month, free audit, no setup fee. Also in Austin: <Link href="/austin/web-design">web design</Link>, <Link href="/austin/ecommerce-development">e-commerce development</Link>, and <Link href="/austin/ai-agents">AI agents</Link>. Services: <Link href="/services/seo">SEO</Link>, <Link href="/services/local-seo">local SEO</Link>, <Link href="/services/small-business-seo">small business SEO</Link>, <Link href="/services/seo-audit">SEO audit</Link>, <Link href="/services/ai-seo">AI SEO</Link>. Other cities: <Link href="/nashville/seo">Nashville</Link>, <Link href="/charlotte/seo">Charlotte</Link>, <Link href="/denver/seo">Denver</Link>, <Link href="/tampa/seo">Tampa</Link>.</p>
          </div>
          <div className="eqmini" aria-hidden="true">
            {Array.from({ length: 30 }).map((_, i) => (
              <i key={i} className={i === 18 ? 'sig' : undefined} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
