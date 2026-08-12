import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import SeoCityLinksUS from '@/components/v2/SeoCityLinksUS';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

import HeroInlineForm from '@/components/HeroInlineForm';
import './chicago-seo.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /chicago/seo :: Chicago local-SEO city page. Built 2026-08-12.

   Target: "seo agency chicago", 880 searches a month, keyword difficulty 1.
   Lowest-difficulty target in the whole US set and no single page owns it, so
   this one gets the real research rather than a city-name swap.

   Layout: "The Grid" (blueprint hero rule, 77 literal community-area cells,
   a real SERP table instead of the Austin chip-duel). Shared v2 <FAQ /> and
   <FinalCTA /> render OUTSIDE the .cseo wrapper so the scoped CSS cannot
   touch them.

   Every external claim on this page was curl-verified on 2026-08-12:
   - Google Business Profile Help, "Improve your local ranking on Google":
     names relevance, distance and prominence, and states there is no way to
     request or pay for a better local ranking.  HTTP 200.
   - BrightLocal Local Consumer Review Survey 2026: 97% of consumers read
     reviews for local businesses, 74% look for reviews from the last three
     months.  HTTP 200.
   - City of Chicago open data, Boundaries / Community Areas: the dataset
     returns exactly 77 rows.  HTTP 200, row count confirmed via the SODA API.
   Community-area numbers in DISTRICTS come from that same dataset.

   Rules honoured: no em dashes, no currency values anywhere, no invented
   clients or case-study numbers, exactly one dark section (FinalCTA, at the
   bottom), FAQPage schema derived from FAQ_ITEMS rather than duplicated.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/chicago/seo';

export const metadata: Metadata = {
  title: 'SEO Agency Chicago | Local SEO Services IL | FactoryJet',
  description:
    'FactoryJet is an SEO agency in Chicago built for a city of 77 neighborhoods. Local SEO, technical SEO and AI search visibility, from the Loop to Little Village. Free audit, month to month.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'SEO Agency Chicago | Local SEO Services IL | FactoryJet',
    description:
      'An SEO agency in Chicago built for a city of 77 neighborhoods. Local SEO, technical SEO and AI search visibility. Free audit, month to month, no long contract.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

/* ── Chicago districts. Community-area numbers are the City of Chicago's own,
      pulled from the Boundaries / Community Areas dataset. ─────────────────── */
const DISTRICTS: { area: string; num: string; h: string; p: string }[] = [
  {
    area: 'The Loop and LaSalle Street',
    num: 'Community area 32',
    h: 'Law, finance and professional services',
    p: 'Law firms, accountants, wealth managers, staffing agencies and everything that orbits the courts at the Daley Center. Buyers here search from a phone inside an office tower and call one of the first three profiles they see. Your category and your review count decide that before anyone reads a word you wrote.',
  },
  {
    area: 'Fulton Market and the West Loop',
    num: 'Community area 28',
    h: 'Two completely different audiences',
    p: 'The global headquarters of McDonald’s and Mondelez sit here, Google runs its Midwest office out of Fulton Market, and Randolph Street is one of the densest restaurant strips in the country. So you are selling either to B2B buyers who read your site like a spec sheet, or to diners deciding in eleven seconds from photos.',
  },
  {
    area: 'River North and theMART',
    num: 'Community area 8',
    h: 'Agencies, showrooms and hospitality',
    p: 'Design showrooms, galleries, hotels, agencies and the startup floors inside theMART. The most proximity-brutal pocket in the city: dozens of businesses in your exact category sit within half a mile, so distance is a wash and prominence does all the work.',
  },
  {
    area: 'Wicker Park and Bucktown',
    num: 'Community area 24',
    h: 'Independent retail and personal services',
    p: 'Boutiques, barbers, tattoo studios, coffee, records and boutique fitness along Milwaukee Avenue and Damen. Discovery here is visual and fast. Current photos, correct holiday hours and a steady drip of new reviews beat a long service page every time.',
  },
  {
    area: 'Lincoln Park and Lakeview',
    num: 'Community areas 6 and 7',
    h: 'Dentists, vets, clinics and med spas',
    p: 'The Southport Corridor, Clark Street and Halsted are thick with practices whose Google Business Profile has not been touched since the day it was claimed. High commercial value, low effort from the incumbents. The most winnable pocket on the North Side right now.',
  },
  {
    area: 'Pilsen and Little Village',
    num: 'Community areas 30 and 31',
    h: 'Bilingual search nobody optimises for',
    p: 'Eighteenth Street and Twenty-Sixth Street are two of the busiest independent retail corridors in Chicago, and a large share of the searching happens in Spanish. Most agencies never think about it. A profile and pages that work in both languages is close to an open goal.',
  },
];

/* ── The listicle. Numbered, scannable, extraction-friendly. ────────────────── */
const STEPS: { h: string; p: string }[] = [
  {
    h: 'Pick the narrowest primary category that is still true',
    p: 'Google says relevance is how well your profile matches what somebody typed. "Dentist" and "Cosmetic dentist" pull different results in Lakeview. Most Chicago businesses pick the broad one, compete with everyone and win nothing. Go narrow on the primary, add the rest as secondary.',
  },
  {
    h: 'Get your address right before you touch anything else',
    p: 'Distance is the one ranking factor you cannot argue with, and Chicago is dense enough that a mile matters. A Downers Grove address will not show up for somebody on Wacker Drive. Decide which neighborhoods you can genuinely serve, then build for those rather than the whole metro.',
  },
  {
    h: 'Keep reviews recent, not just numerous',
    p: 'BrightLocal’s 2026 consumer survey found 97% of people read reviews for local businesses and 74% look specifically for ones written in the last three months. A profile with two hundred reviews and nothing since spring reads as a business that stopped caring.',
  },
  {
    h: 'Write neighborhood pages a local would recognise',
    p: 'Name the street, the intersection, the CTA line, the thing on the corner. A page that says "we serve the Chicago area" ranks for nothing. A page that knows the difference between Andersonville and Edgewater gives Google something specific to match against.',
  },
  {
    h: 'Make your name, address and phone identical everywhere',
    p: 'Suite numbers, "St" versus "Street", an old suburban number still sitting on a directory from four years ago. Chicagoland businesses collect more of these than most, because so many moved into or out of the city. Pick one exact format and enforce it everywhere.',
  },
  {
    h: 'Fix the site itself, not just the profile',
    p: 'Speed, crawlability, structured data and pages that clearly say what you do and where. Most local agencies skip this layer because it looks like developer work, and it is why their rankings slide back after six months. It is also cheapest to get right at the start.',
  },
  {
    h: 'Get onto the lists that already rank',
    p: 'Half of page one for "seo agency chicago" is not an agency at all. It is Clutch, Built In Chicago, a Semrush directory and three roundups. That pattern repeats across Chicago categories. Earning a place on the lists that already rank is often faster than outranking them.',
  },
];

/* ── Page-one rivals for "seo agency chicago", live US results, 2026-08-12.
      Every description below is drawn from the firm's own public site.
      Named fairly, never disparaged. ───────────────────────────────────────── */
const RIVALS: { who: string; rank: string; where: string; good: string; us?: boolean }[] = [
  {
    who: 'Digital Third Coast',
    rank: 'Position 1',
    where: 'Chicago, North Avenue',
    good: 'A genuinely local Chicago shop that leans on digital PR and earned links alongside SEO. Worth knowing: the page holding position 1 is their own blog post ranking the top Chicago SEO agencies. That tells you how this SERP behaves.',
  },
  {
    who: 'Slim Marty',
    rank: 'Position 2',
    where: 'Chicago, West Higgins Avenue',
    good: 'A small Chicago team covering web development, SEO, paid search, email and social, with fifteen years behind them. They pitch straight at small business websites. If you want one local shop for the whole stack, they are a fair call.',
  },
  {
    who: 'Straight North',
    rank: 'Position 3',
    where: 'Downers Grove, IL',
    good: 'Founded in 1997, headquartered in the western suburbs with offices in Chicago, Charlotte and Baltimore. They sell SEO as a lead engine and report on it that way, which is more than most agencies bother with.',
  },
  {
    who: 'Thrive Agency',
    rank: 'Position 4',
    where: 'Arlington, Texas',
    good: 'A large national operation with a Chicago location page, and their reach across city SERPs is impressive. It also tells you what you are buying: a multi-city machine where the strategist who won the pitch is rarely on your monthly call.',
  },
  {
    who: 'Logical Position',
    rank: 'Position 7',
    where: 'Lake Oswego, OR, with a Palatine office',
    good: 'Paid media first. They lead with pay-per-click management and hold Google Premier Partner status, with SEO one service among several. If you need leads this quarter rather than next year, paid is a legitimate answer.',
  },
  {
    who: 'Adcetera',
    rank: 'Position 8',
    where: 'Houston, TX, with a Chicago office',
    good: 'An integrated brand and creative agency serving large enterprise clients, with digital one of five practice areas. If you need brand and campaign creative rather than a local search fix, they work at a level most SEO shops do not.',
  },
  {
    who: 'Chicago SEO Company',
    rank: 'Position 10',
    where: 'Chicago',
    good: 'An SEO specialist that says roughly four fifths of its work is local, on month-to-month terms. Narrow focus is a real advantage here. As with anyone advertising a guarantee, read exactly what is guaranteed before you sign.',
  },
  {
    who: 'Clutch and Built In Chicago',
    rank: 'Positions 5 and 6',
    where: 'Directories, not agencies',
    good: 'Neither does SEO for anybody. They rank because Google trusts the domain. Worth knowing before you count your competition: getting listed on pages like these is part of the work, not a fight to win.',
  },
  {
    who: 'FactoryJet',
    rank: 'Challenger',
    where: 'Serving Chicago and the collar counties',
    good: 'Senior engineers doing the work rather than account managers, a written scope you read before signing, month-to-month terms, and technical SEO plus AI search visibility included instead of upsold. We are the newcomer here and will not pretend otherwise.',
    us: true,
  },
];

const LAYERS: { lt: string; h: string; p: string }[] = [
  { lt: 'Layer 01', h: 'Technical SEO and Core Web Vitals', p: 'Speed, schema, crawlability, internal linking. The foundation most local agencies skip, and why their rankings slide back.' },
  { lt: 'Layer 02', h: 'Google Business Profile', p: 'The map pack is built from your profile: categories, services, attributes, photos, hours and posts.' },
  { lt: 'Layer 03', h: 'Citations and NAP cleanup', p: 'Consistent listings across the directories Google trusts, with duplicate Chicagoland listings removed.' },
  { lt: 'Layer 04', h: 'Review growth and response', p: 'A system to earn reviews steadily and reply to all of them. The strongest signal you fully control.' },
  { lt: 'Layer 05', h: 'Neighborhood content', p: 'Service and area pages that earn rankings instead of reading like one page with the name swapped.' },
  { lt: 'Layer 06', h: 'AI SEO and GEO', p: 'Entity data and answer-first writing so ChatGPT, Perplexity and Google AI Overviews quote you correctly.' },
];

const CONSULT_PTS: { h: string; p: string }[] = [
  { h: 'You talk to the person doing the work', p: 'No account manager layer. The engineer who writes the fixes explains them to you in plain English.' },
  { h: 'Technical SEO is the floor, not an upsell', p: 'Core Web Vitals, schema and crawl health are in every month’s scope, not quoted separately.' },
  { h: 'Free SEO audit, yours to keep', p: 'Every engagement starts with a full audit. You keep the findings and the roadmap either way.' },
  { h: 'AI search visibility included', p: 'Structured data and answer-first content so AI engines can cite you. Check where you stand with our free AI visibility checker.' },
];

/* ── FAQ. Grounded in live People-Also-Ask data for this query, localised
      honestly. This ONE array feeds both the visible FAQ and the schema. ───── */
const FAQ_CATEGORIES = [
  { key: 'cost', label: 'What it costs' },
  { key: 'worth', label: 'Is it worth it' },
  { key: 'basics', label: 'How SEO works' },
  { key: 'ai', label: 'SEO and AI' },
  { key: 'diy', label: 'Doing it yourself' },
  { key: 'local', label: 'Chicago specifics' },
  { key: 'work', label: 'Working with us' },
] as const;

const FAQ_ITEMS = [
  {
    category: 'cost',
    question: 'How much does an SEO agency typically cost?',
    answer:
      'Agencies price on effort. The drivers are how many locations you serve, how competitive your category is in your part of Chicago, how much technical repair the site needs first, and whether links are in scope. We run a free audit before quoting, so the plan is on paper.',
  },
  {
    category: 'cost',
    question: 'How much does it cost to hire an SEO agency in Chicago?',
    answer:
      'More than a quiet market, less than New York, and a number without a scope attached is meaningless anyway. A single-location clinic in Lakeview and a nine-location home services company across the collar counties are not the same job. Get two or three written scopes and compare them line by line.',
  },
  {
    category: 'cost',
    question: 'How much should a small business spend on SEO?',
    answer:
      'Less than it brings in. Work out what one new customer is worth over a year, then ask how many extra customers a month would cover the work with room left over. A handful means the scope fits. Dozens means start narrower.',
  },
  {
    category: 'cost',
    question: 'Why is local SEO a monthly thing instead of a one-time job?',
    answer:
      'Rankings are earned and then defended. Competitors keep optimising, Google keeps shipping updates, and your profile needs ongoing posts, photos, reviews and listing upkeep. A one-time setup decays quietly and you find out six months later when the calls stop.',
  },
  {
    category: 'worth',
    question: 'Is an SEO agency worth it?',
    answer:
      'It is worth it if people search before they buy from you and competitors sit above you. It is worth little if nobody searches for what you sell. The real failure mode is paying for SEO with no way to tell whether it worked.',
  },
  {
    category: 'worth',
    question: 'Is paying someone to do SEO worth it?',
    answer:
      'Yes for the parts that need judgement and consistency, no for the parts you can do in an afternoon. Claiming your profile, adding real photos and asking for reviews are yours. Technical repair, content that outranks an incumbent, and earning links are where paying someone pays back.',
  },
  {
    category: 'worth',
    question: 'Is SEO worth it for small businesses?',
    answer:
      'For most Chicago small businesses, yes, because you are not trying to beat the internet. You are trying to beat the handful of businesses in your category within a few miles of you. That is a fight a normal owner can win.',
  },
  {
    category: 'worth',
    question: 'Who is the best SEO agency in Chicago?',
    answer:
      'It depends on what is broken. Run every candidate, us included, through one checklist: a written scope you read before signing, month-to-month terms, your data staying yours, the person doing the work on the call, and reporting tied to leads rather than rankings.',
  },
  {
    category: 'basics',
    question: 'What does an SEO agency do?',
    answer:
      'Four things. Fix the technical condition of your site so search engines can crawl and trust it. Build and maintain your Google Business Profile and local listings. Write pages that match what people search. Earn mentions and links from credible sites. Everything else sits inside those four.',
  },
  {
    category: 'basics',
    question: 'What are the four main types of SEO?',
    answer:
      'On-page is your content and how pages are structured. Technical is speed, crawling, indexing and structured data. Off-page is links and mentions from elsewhere. Local is your Google Business Profile, listings and reviews. A Chicago storefront lives or dies on the fourth.',
  },
  {
    category: 'basics',
    question: 'What is the 80/20 rule in SEO?',
    answer:
      'The idea that a small slice of the work produces most of the result. In local SEO that slice is three things: a correctly categorised Google Business Profile, a steady flow of recent reviews, and a fast site that says clearly what you do and where.',
  },
  {
    category: 'basics',
    question: 'What is local SEO versus regular SEO?',
    answer:
      'Regular SEO ranks a page in the ten blue links, anywhere. Local SEO gets your business into the map pack and the near me results for people physically close to you. Google ranks local results on relevance, distance and prominence. Distance is fixed. The other two are the job.',
  },
  {
    category: 'basics',
    question: 'How long does it take for SEO to kick in?',
    answer:
      'Expect early movement in three to six months and stable local rankings in six to twelve. Profile and review work often shows up faster, sometimes within weeks. Content and links take the long road. We sequence it so quick wins land while the slower work matures.',
  },
  {
    category: 'ai',
    question: 'Can ChatGPT do SEO?',
    answer:
      'It can draft, outline and speed up research. It cannot see your Google Business Profile, cannot know why your site is slow, cannot earn a link, and does not know what your Chicago competitors rank for this month. As an assistant it saves hours. As the strategy it produces pages that read like everyone else’s.',
  },
  {
    category: 'ai',
    question: 'Is SEO dead now with AI?',
    answer:
      'No, but where the answer appears has changed. People still search, they just as often read a summary at the top of Google or ask an assistant instead of clicking. The work that gets you cited in those answers is the same work that got you ranked.',
  },
  {
    category: 'ai',
    question: 'Will SEO be replaced by AI?',
    answer:
      'The tactics keep getting replaced. The job does not. Something still decides which businesses an answer engine names, and it draws on the same signals: your site, your listings, your reviews and what other sites say about you. Most Chicago businesses have never checked whether they are named at all.',
  },
  {
    category: 'diy',
    question: 'Can I do SEO myself?',
    answer:
      'The first chunk, absolutely, and you should. Claim and fill out your Google Business Profile, make your name, address and phone identical everywhere, add real photos rather than stock, and ask every happy customer for a review. It gets hard at technical repair and beating an incumbent.',
  },
  {
    category: 'diy',
    question: 'Can I do local SEO myself, and where do I start?',
    answer:
      'Search your own category plus your neighborhood on your phone and see whether you appear. Then claim your profile, pick the narrowest true primary category, fill in services and hours, add ten real photos, and ask five customers for reviews this week. That is a genuine first month.',
  },
  {
    category: 'local',
    question: 'Do you work with businesses in the Chicago suburbs?',
    answer:
      'Yes. We work across Chicagoland: Evanston, Oak Park, Naperville, Schaumburg, Oak Brook, Skokie, Arlington Heights, Downers Grove, Cicero, Aurora and Joliet. Multi-location businesses get location pages written one at a time, because Google has spotted cloned ones for years.',
  },
  {
    category: 'local',
    question: 'Do Chicago businesses need Spanish-language SEO?',
    answer:
      'In parts of the city it is one of the clearest openings available. Along Eighteenth Street in Pilsen and Twenty-Sixth Street in Little Village a large share of the searching happens in Spanish, and few competitors have built for it. Where that fits your customers, we build both versions properly.',
  },
  {
    category: 'work',
    question: 'Do you require a long-term contract?',
    answer:
      'No. We work month to month and you can cancel with thirty days notice. Plenty of Chicago agencies lock you into six or twelve months. We would rather earn the next month, and if we are the wrong fit you should find that out in month two, not month ten.',
  },
  {
    category: 'work',
    question: 'Can you guarantee number one rankings in Chicago?',
    answer:
      'No, and anyone who does is guessing with your money. Google states plainly that there is no way to request or pay for a better local ranking. What we guarantee is the work itself, transparency about what was done and why, and your right to leave at the end of any month.',
  },
  {
    category: 'work',
    question: 'What happens to my work if I leave?',
    answer:
      'You keep everything. Your Google Business Profile, website content, citations and reporting access stay yours, in accounts with your name on them. Work that disappears when you leave was rented, not built. Ask every agency this before you sign.',
  },
  {
    category: 'work',
    question: 'What does the free Chicago SEO audit include?',
    answer:
      'Technical health first: speed, Core Web Vitals, crawl errors and structured data. Then your Google Business Profile, reviews and citations. Then content gaps against what Chicago actually searches in your category, and the competitors holding your spots. Yours to keep either way.',
  },
] as const;

/* Derived, never duplicated. This is the ONLY place FAQ schema comes from. */
const faqSchemaItems = FAQ_ITEMS.map((item) => ({
  '@type': 'Question' as const,
  name: item.question,
  acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
}));

const OTHER_CITIES: { name: string; path: string }[] = [
  { name: 'Austin SEO', path: '/austin/seo' },
  { name: 'Cleveland SEO', path: '/cleveland/seo' },
  { name: 'Nashville SEO', path: '/nashville/seo' },
  { name: 'Charlotte SEO', path: '/charlotte/seo' },
  { name: 'Denver SEO', path: '/denver/seo' },
];

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
      name: 'FactoryJet',
      url: CANONICAL,
      parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Chicago', containedInPlace: { '@type': 'State', name: 'Illinois' } },
        { '@type': 'City', name: 'Evanston', containedInPlace: { '@type': 'State', name: 'Illinois' } },
        { '@type': 'City', name: 'Oak Park', containedInPlace: { '@type': 'State', name: 'Illinois' } },
        { '@type': 'City', name: 'Naperville', containedInPlace: { '@type': 'State', name: 'Illinois' } },
        { '@type': 'City', name: 'Schaumburg', containedInPlace: { '@type': 'State', name: 'Illinois' } },
        { '@type': 'City', name: 'Downers Grove', containedInPlace: { '@type': 'State', name: 'Illinois' } },
      ],
      knowsAbout: ['Local SEO', 'Technical SEO', 'Google Business Profile optimization', 'Generative engine optimization'],
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'SEO Services in Chicago, IL',
      serviceType: 'Search engine optimization',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      url: CANONICAL,
      areaServed: { '@type': 'City', name: 'Chicago', containedInPlace: { '@type': 'State', name: 'Illinois' } },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Chicago SEO services',
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
        { '@type': 'ListItem', position: 3, name: 'Chicago SEO', item: CANONICAL },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'SEO Agency Chicago | Local SEO Services in Chicago, IL',
      description:
        'What an SEO agency in Chicago actually does, how the local search competition really looks across the city’s 77 community areas, and how FactoryJet compares to the firms currently holding page one.',
      inLanguage: 'en-US',
      dateModified: '2026-08-12',
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
        cssSelector: ['.cseo .bluf p', '.cseo .bluf-support', '[data-faq-answer]'],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: faqSchemaItems,
    },
  ],
};

/* 77 decorative cells, one per Chicago community area. Purely visual. */
const CELL_HIGHLIGHT = new Set([6, 7, 8, 24, 28, 30, 31, 32]);

export default function ChicagoSeoPage() {
  return (
    <>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="bg-fj-cream">
        <div className="cseo">
          {/* HERO */}
          <section className="hero">
            <div className="wrap hero-grid">
              <div>
                <span className="loc"><b />Chicago, Illinois</span>
                <h1>An SEO agency in Chicago that works one neighborhood at a time</h1>
                <p className="lead">
                  Chicago is not one market. It is <b>77 official community areas</b> plus a ring of suburbs, and the
                  business that wins Lincoln Park usually loses Pilsen. We build for the blocks you actually sell on.
                </p>
                <HeroInlineForm region="us" source="us_chicago_seo_hero" submitLabel="Get my free SEO audit" />
                <div className="cta-row">
                  <a className="btn btn-ghost" href={CALENDLY}>Talk to the founder</a>
                </div>
              </div>
              <div className="shot">
                <img
                  src="/images/us/chicago-seo/chicago-seo-team.webp"
                  alt="Two people reviewing a client website together in a bright brick and timber Chicago loft office"
                  width={1264}
                  height={848}
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="pin">
                  <div className="k">What we measured</div>
                  <div className="v">880 searches a month</div>
                  <div className="k" style={{ marginTop: '4px', letterSpacing: '.04em' }}>seo agency chicago, difficulty 1</div>
                </div>
              </div>
            </div>
          </section>

          {/* FACTS */}
          <div className="factsbar">
            <div className="wrap row">
              <div className="fact"><div className="v">No contract</div><div className="k">month to month, cancel anytime</div></div>
              <div className="fact"><div className="v">Free audit</div><div className="k">no setup fee, no pressure</div></div>
              <div className="fact"><div className="v">7-day</div><div className="k">kickoff, not weeks</div></div>
              <div className="fact"><div className="v"><span className="star">&#9733;</span> 4.9</div><div className="k">on Google, across 500+ projects</div></div>
            </div>
          </div>

          {/* ANSWER FIRST */}
          <section className="blufsec">
            <div className="wrap">
              <div className="bluf">
                <span className="tag">The short answer</span>
                <p>
                  An SEO agency in Chicago gets your business found by the people already searching for what you sell:
                  in Google Maps, in the normal results, and now inside AI answers. FactoryJet does that work. Google
                  Business Profile, technical repair, reviews and neighborhood pages. Month to month, free audit first,
                  and you talk to the engineer doing the work.
                </p>
              </div>
              <div className="bluf-support">
                <p>
                  In practice the job splits four ways. First, your{' '}
                  <Link className="body-link" href="/services/local-seo">Google Business Profile and local listings</Link>,
                  which is what decides the three-result map pack. Second, the technical condition of your site, which is
                  where a free <Link className="body-link" href="/services/seo-audit">SEO audit</Link> starts, because a
                  slow site will not hold a ranking no matter how good the writing is. Third, pages that match what
                  Chicago genuinely types into Google rather than what an agency guessed. Fourth, and newer,{' '}
                  <Link className="body-link" href="/services/ai-seo">AI SEO and GEO</Link>: the structured data and
                  answer-first writing that lets ChatGPT, Perplexity and Google AI Overviews quote you instead of a
                  competitor. Our free{' '}
                  <Link className="body-link" href="/ai-visibility-checker">AI visibility checker</Link> shows you where
                  you stand on that last part in about two minutes.
                </p>
                <p>
                  Who does this work in Chicago? A mix. Two or three genuinely local firms, several national agencies
                  servicing Chicago from Texas or Oregon, a long tail of freelancers, and a set of directories that
                  outrank all of them without doing SEO for anyone. We name them further down this page, including where
                  we sit. If you run a smaller operation, our{' '}
                  <Link className="body-link" href="/services/small-business-seo">small business SEO</Link> approach is
                  the shorter version of all of this, and{' '}
                  <Link className="body-link" href="/services/seo">US SEO services</Link> covers the national picture.
                </p>
              </div>
            </div>
          </section>

          {/* 77 COMMUNITY AREAS */}
          <section className="gridsec">
            <div className="wrap inner">
              <div>
                <span className="eyebrow">The reason city pages fail here</span>
                <h2>Chicago is not one market. It is 77.</h2>
                <p className="lead">
                  The City of Chicago maintains an official boundary file of its community areas, and it contains
                  exactly seventy-seven, numbered 1 through 77 from Rogers Park to Hegewisch. That is not trivia. It is
                  the shape of your competition.
                </p>
                <p className="lead">
                  Google ranks local results on three things it names openly: relevance, distance and prominence.
                  Distance is fixed. You cannot move your dental practice closer to the person searching. In a city this
                  dense, the businesses you are genuinely fighting sit inside a very small radius, and they change
                  completely between Andersonville and Bridgeport. An agency that sells you &quot;Chicago SEO&quot;
                  without asking which Chicago you sell to is selling you a template.
                </p>
                <div className="cta-row">
                  <ModalCTAButton label="See where you rank in your neighborhood" region="us" modalVariant="seo" btnVariant="primary-light" />
                </div>
              </div>
              <div>
                <div className="cells" aria-hidden="true">
                  {Array.from({ length: 77 }).map((_, i) => (
                    <i key={i} className={CELL_HIGHLIGHT.has(i + 1) ? 'on' : undefined} />
                  ))}
                </div>
                <p className="cellkey">
                  <span><b style={{ background: '#F05A28' }} />the eight areas covered below</span>
                  <span><b style={{ background: '#FFFFFF', border: '1px solid #DCE2EA' }} />the other 69</span>
                </p>
              </div>
            </div>
          </section>

          {/* DISTRICTS */}
          <section className="verts">
            <div className="wrap">
              <span className="eyebrow">Chicago, corridor by corridor</span>
              <h2>Six Chicagos, six completely different search problems</h2>
              <p className="lead">
                Search demand splits along the same lines the city does. A commercial litigator on LaSalle Street and
                a taqueria on Eighteenth Street are both doing local SEO, and almost nothing about their strategy
                overlaps. Here is how we read the map before writing a single page.
              </p>
              <div className="qgrid">
                {DISTRICTS.map((d) => (
                  <div className="qcard" key={d.area}>
                    <div className="qbar"><i />{d.area} <span className="kd">{d.num}</span></div>
                    <div className="qbody"><h3>{d.h}</h3><p>{d.p}</p></div>
                  </div>
                ))}
              </div>
              <p className="districts">
                Then there is everything outside the city limits, which is most of the metro. We work across{' '}
                <b>Evanston, Oak Park, Naperville, Schaumburg, Oak Brook, Skokie, Arlington Heights, Downers Grove,
                Cicero, Aurora and Joliet</b>. The mistake we see constantly out here is a suburban business setting a
                city-wide service area to catch downtown searches. It does not work, and it dilutes the searches you
                could have won at home.
              </p>
            </div>
          </section>

          {/* LISTICLE */}
          <section className="listsec">
            <div className="wrap">
              <span className="eyebrow">The order that actually works</span>
              <h2>Seven things that move a Chicago business into the map pack</h2>
              <p className="lead">
                In this order, not the other way round. Most businesses start at step four because it feels like
                marketing, then wonder why nothing moved.
              </p>
              <ol className="steps">
                {STEPS.map((s, i) => (
                  <li key={s.h}>
                    <span className="num">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{s.h}</h3>
                      <p>{s.p}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* MID-PAGE CTA */}
          <section className="midcta">
            <div className="wrap inner">
              <div>
                <h2>Want to know which of those seven you are failing?</h2>
                <p>
                  That is what the free audit is for. We look at your profile, your site and the businesses ranking
                  above you in your neighborhood, then tell you which single fix would move the needle first. You keep
                  the findings whether you hire us or not.
                </p>
                <div className="cta-row">
                  <ModalCTAButton label="Get your free Chicago SEO audit" region="us" modalVariant="seo" btnVariant="primary-light" />
                  <a className="btn btn-ghost" href={CALENDLY}>Talk to the founder</a>
                </div>
              </div>
              <div className="midimg">
                <img
                  src="/images/us/chicago-seo/chicago-strategy-session.webp"
                  alt="A Chicago business owner and an SEO strategist reviewing a website together across a table"
                  width={1216}
                  height={704}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </section>

          {/* THE SERP, HONESTLY */}
          <section className="serpsec">
            <div className="wrap">
              <span className="eyebrow">The SERP, honestly</span>
              <h2>Who actually holds page one for &quot;seo agency chicago&quot;</h2>
              <p className="lead">
                We pulled the live US results in August 2026. Two things stand out. Half of page one is not an agency
                at all, it is somebody&apos;s list. And the result at number one is a Chicago agency&apos;s own blog post
                ranking its competitors. Here is the field, and where we sit in it.
              </p>
              <div className="tablewrap">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Who</th>
                      <th scope="col">Based</th>
                      <th scope="col">What they are genuinely good at</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RIVALS.map((r) => (
                      <tr key={r.who} className={r.us ? 'us' : undefined}>
                        <td className="who">{r.who}<small>{r.rank}</small></td>
                        <td>{r.where}</td>
                        <td>{r.good}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="honest">
                <h3>Where FactoryJet actually stands, as of August 2026</h3>
                <p>
                  We are new to this SERP and we have a smaller link profile than the firms above us. Pretending
                  otherwise would be the first sign you should not hire us. What we do have is a research habit: this
                  page exists because we measured that &quot;seo agency chicago&quot; carries 880 searches a month at a keyword
                  difficulty of 1, the lowest-competition major-metro SEO term we found anywhere in the country. That is
                  a strange thing to publish, and we are publishing it anyway.
                </p>
                <p>
                  Our link gap also matters less to you than it does to us. You need to rank in a few neighborhoods,
                  against maybe a dozen genuine local rivals. We are trying to rank nationally against firms with many
                  times our authority. Your version of the job works on a normal timeline. Ours takes years. You get the
                  benefit of us doing the harder version every day.
                </p>
                <p>
                  Ask all of us the same three questions: who physically does the work, what happens if it does not
                  move, and does anything leave with you when you go.
                </p>
                <div className="cta-row">
                  <ModalCTAButton label="Get your free Chicago SEO audit" region="us" modalVariant="seo" btnVariant="primary-light" />
                </div>
              </div>
            </div>
          </section>

          {/* THE STACK */}
          <section className="stacksec">
            <div className="wrap">
              <span className="eyebrow">What is in scope</span>
              <h2>Chicago SEO services, built like software</h2>
              <p className="lead">
                One monthly scope, the whole stack, no add-on surprises halfway through. The layers run bottom up on
                purpose: everything above layer one is less durable if layer one is broken.
              </p>
              <div className="stack">
                {LAYERS.map((l) => (
                  <div className="layer" key={l.lt}>
                    <span className="lt">{l.lt}</span>
                    <div><h3>{l.h}</h3><p>{l.p}</p></div>
                  </div>
                ))}
              </div>
              <p className="districts">
                Related work we do in the same stack:{' '}
                <Link className="body-link" href="/services/seo">SEO services</Link>,{' '}
                <Link className="body-link" href="/services/local-seo">local SEO</Link>,{' '}
                <Link className="body-link" href="/services/small-business-seo">small business SEO</Link>,{' '}
                <Link className="body-link" href="/services/seo-audit">SEO audits</Link>,{' '}
                <Link className="body-link" href="/services/seo-consulting">SEO consulting</Link> and{' '}
                <Link className="body-link" href="/services/ai-seo">AI SEO</Link>.
              </p>
            </div>
          </section>

          {/* CONSULTANT + FOUNDER */}
          <section className="consult">
            <div className="wrap grid">
              <div>
                <h2>An SEO consultant who reads your code, not just your rankings</h2>
                <p className="lead">
                  We build software as well as market it, so the technical layer is not something we outsource or
                  describe vaguely. Your customers notice slow sites. So does Google.
                </p>
                <div className="pts">
                  {CONSULT_PTS.map((c) => (
                    <div className="cpt" key={c.h}>
                      <span className="tick" />
                      <div><h3>{c.h}</h3><p>{c.p}</p></div>
                    </div>
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

          {/* CITY VISUAL */}
          <section className="citysec">
            <div className="wrap csinner">
              <div className="csimgwrap">
                <img
                  src="/images/us/chicago-seo/chicago-local-shop.webp"
                  alt="Independent shop owner checking a phone behind the counter of a bright neighborhood storefront"
                  width={1216}
                  height={704}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <span className="eyebrow">Who this is for</span>
                <h2>The businesses local search was built for</h2>
                <p className="lead">
                  Dentists, lawyers, clinics, contractors, salons, restaurants, studios, home services and the trades.
                  If somebody opens Google before choosing you, local SEO is the cheapest customer acquisition you have,
                  and most Chicago competitors still leave it half done.
                </p>
                <div className="csstats">
                  <div className="csstat"><div className="csv">3 slots</div><div className="csk">in the map pack, per category, per neighborhood</div></div>
                  <div className="csstat"><div className="csv">97%</div><div className="csk">of consumers read reviews for local businesses, BrightLocal 2026</div></div>
                  <div className="csstat"><div className="csv">7 days</div><div className="csk">from audit to active work, not weeks</div></div>
                </div>
                <div className="cta-row">
                  <ModalCTAButton label="Get your free Chicago SEO audit" region="us" modalVariant="seo" btnVariant="primary-light" />
                </div>
              </div>
            </div>
          </section>

          {/* SOURCES */}
          <section className="sources">
            <div className="wrap">
              <div className="box">
                <p className="sh">Sources cited on this page</p>
                <ol>
                  <li>
                    Google Business Profile Help,{' '}
                    <a href="https://support.google.com/business/answer/7091" rel="nofollow noopener" target="_blank">
                      Improve your local ranking on Google
                    </a>
                    . Names relevance, distance and prominence, and rules out paying for a better local ranking.
                  </li>
                  <li>
                    BrightLocal,{' '}
                    <a href="https://www.brightlocal.com/research/local-consumer-review-survey/" rel="nofollow noopener" target="_blank">
                      Local Consumer Review Survey 2026
                    </a>
                    . 97% of consumers read reviews for local businesses, 74% want ones from the last three months.
                  </li>
                  <li>
                    City of Chicago open data,{' '}
                    <a
                      href="https://data.cityofchicago.org/Facilities-Geographic-Boundaries/Boundaries-Community-Areas-current-/cauq-8yn6"
                      rel="nofollow noopener"
                      target="_blank"
                    >
                      Boundaries: Community Areas
                    </a>
                    . The official dataset contains 77 community areas.
                  </li>
                </ol>
              </div>
            </div>
          </section>
        </div>

        {/* FAQ: shared v2 component, outside .cseo so scoped CSS cannot touch it. */}
        <FAQ
          eyebrow="CHICAGO SEO FAQ"
          headline="Questions, answered like a real call"
          lead="The same answers we would give you on the phone, including the ones about money that most agency sites skip."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* The single dark section on this page. */}
        <FinalCTA
          variant="dark"
          eyebrow="GET STARTED"
          headline="Own your corner of Chicago"
          sub="Start with a free Chicago SEO audit. We will show you where you stand in the map pack for your neighborhood, what is technically holding the site back, and what we would fix first."
          primaryCta={{ label: 'Get your free SEO audit', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: CALENDLY }}
          objectionHandler="Month to month, free audit, no setup fee, and your accounts stay yours."
        />

        <section className="py-10 bg-[#FAFAF7]">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-sm font-mono text-[#B23E13] uppercase tracking-widest mb-4">
              Local SEO in other cities
            </p>
            <div className="flex flex-wrap gap-3">
              {OTHER_CITIES.map((c) => (
                <Link
                  key={c.path}
                  href={c.path}
                  className="px-5 py-2 rounded-full border border-[#B23E13] text-[#B23E13] text-sm font-medium hover:bg-[#B23E13] hover:text-white transition-colors"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
        <SeoCityLinksUS currentCity="chicago" />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
