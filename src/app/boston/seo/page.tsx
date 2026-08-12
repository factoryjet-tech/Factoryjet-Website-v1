import type { Metadata } from 'next';
import Link from 'next/link';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import SeoCityLinksUS from '@/components/v2/SeoCityLinksUS';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import CityContextSection from '@/components/v2/CityContextSection';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ComparisonTable from '@/components/v2/ComparisonTable';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

/* ─────────────────────────────────────────────────────────────────────────────
   /boston/seo :: Boston local-SEO city page. Built 2026-08-12.

   Research: pipeline/research/briefs/boston-seo.json
     target keyword "seo agency boston", 880/mo, KD 5, no AI Overview on the
     query as of 2026-08-12. Half of the live organic top 12 is directories and
     listicles (Yelp 1, Clutch 3, Built In Boston 4, Semrush Agencies 8,
     Radiant Elephant 10, DesignRush 12), which is the single most useful fact
     on this SERP and is said out loud on the page.

   Rules honoured: no em dashes, no currency figures anywhere, one dark section
   (StrategicDarkSection), FAQPage schema derived from BOSTON_FAQ_ITEMS rather
   than hand-written twice, canonical inline (no hreflangMap import), plain
   <img> with explicit width/height for the static-export target.

   External citations, each curl-verified for HTTP 200 and for the claim being
   present on the page, 2026-08-12:
     - support.google.com/business/answer/7091   relevance, distance, prominence
     - developers.google.com/search/docs/appearance/ai-features
         "There are no additional requirements to appear in AI Overviews or AI
          Mode, nor other special optimizations necessary."
     - masslifesciences.com  "#1 life sciences ecosystem in the world",
          "19 of the top 20 biopharma companies"
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/boston/seo';
const IMG = '/images/us/boston-seo';

export const metadata: Metadata = {
  title: 'Boston SEO Agency | Local SEO Services in Boston, MA | FactoryJet',
  description:
    'FactoryJet is an SEO agency for Boston businesses: Back Bay, Seaport, Kendall Square, the Financial District and the Longwood medical corridor. Google Business Profile, technical SEO and AI search visibility. Month to month, free audit first.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Boston SEO Agency | Local SEO Services in Boston, MA | FactoryJet',
    description:
      'An SEO agency built for how Boston actually searches: dense neighborhoods, separate cities across the Charles, and a page one that is half directories. Free audit, month to month.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boston SEO Agency | Local SEO Services in Boston, MA | FactoryJet',
    description:
      'An SEO agency built for how Boston actually searches. Free audit, month to month, you keep your accounts.',
  },
  robots: { index: true, follow: true },
};

/* ── Boston districts. Written for people who know these streets. ────────── */
const DISTRICTS: { tag: string; h: string; p: string }[] = [
  {
    tag: 'Back Bay',
    h: 'Back Bay, Copley and Newbury Street',
    p: 'Dentists, med spas, boutique fitness, law and wealth firms stacked three to a brownstone. Searches here happen on a phone within a few blocks of the door, so your primary category, your photos and your review count decide the outcome long before your blog does. Newbury retail also lives and dies on hours being right, including the ones you change for a holiday weekend.',
  },
  {
    tag: 'Seaport',
    h: 'Seaport, Fort Point and the waterfront',
    p: 'The newest part of the city and the one with the least search history behind it. Restaurants, hotels, offices and lab space all opened at once, which means Google has thin local signal to work with and a well-run Business Profile moves faster here than almost anywhere else in Boston. Convention traffic from the BCEC spikes demand in bursts you can plan around.',
  },
  {
    tag: 'Kendall Square',
    h: 'Cambridge, Kendall Square and MIT',
    p: 'Biotech, robotics and software, sitting one bridge from Boston but in a different city for Google purposes. These buyers scroll past ads on reflex and read your site the way they read a spec sheet. Site speed, clean structure and documentation-grade content do the selling. Vague agency language gets you closed in about four seconds.',
  },
  {
    tag: 'Financial District',
    h: 'Financial District and Downtown Crossing',
    p: 'Law, accounting, staffing, insurance and commercial services. The searches are typed at lunch, from a phone, by someone who will call one of the first three profiles they see. Firms here usually have the authority to rank and no profile worth ranking, which is the easiest gap on this list to close.',
  },
  {
    tag: 'Longwood',
    h: 'Longwood Medical Area and the Fenway',
    p: 'One of the densest concentrations of hospitals and specialist practices in the country. Patients search a condition first, then a location, then read reviews. Content that answers the questions people ask before booking, plus accurate profiles for every practitioner and every site, does more here than link building ever will.',
  },
  {
    tag: 'Allston to Quincy',
    h: 'Allston, Brighton, Somerville, Brookline and Quincy',
    p: 'Boston proper is small and the metro is a patchwork of separate cities. Somerville, Brookline, Newton and Quincy each generate their own Map Pack, and a business three miles away can be invisible in yours. Student neighborhoods also reset every September when leases turn over, so demand is seasonal in a way a national agency will not plan for.',
  },
];

/* ── Listicle. Numbered on purpose: it is the block AI engines lift. ─────── */
const MAP_PACK_STEPS: { n: string; h: string; p: string }[] = [
  {
    n: '01',
    h: 'Pick the most specific primary category you can',
    p: 'Not "Contractor" when "Kitchen remodeler" exists. Category is the strongest relevance signal on your profile and the one most Boston businesses set once, wrong, in a hurry.',
  },
  {
    n: '02',
    h: 'Fill in every field, including the boring ones',
    p: 'Services, attributes, opening hours, holiday hours, description, and the service area if you travel. Empty fields are not neutral. They are a reason for Google to prefer the profile that filled them in.',
  },
  {
    n: '03',
    h: 'Get your name, address and phone identical everywhere',
    p: 'Suite numbers, "St" versus "Street", the old phone number on an old directory listing. Boston businesses move offices often and the trail of stale listings is usually longer than the owner thinks.',
  },
  {
    n: '04',
    h: 'Earn reviews steadily, not in one push',
    p: 'Google names reviews as part of prominence. Thirty reviews arriving in a week reads differently to thirty arriving across a year. Ask after the work is done, every time, and reply to all of them.',
  },
  {
    n: '05',
    h: 'Add real photos of the real place',
    p: 'Your storefront in daylight, your team, your work. Stock imagery is obvious to customers and useless as a local signal. For retail and hospitality this alone changes how often the profile gets opened.',
  },
  {
    n: '06',
    h: 'Fix the site underneath the profile',
    p: 'Speed, crawlability, structured data, and a page that says what you do and which neighborhoods you serve. A slow or broken site will not hold a ranking no matter how good the profile is.',
  },
  {
    n: '07',
    h: 'Write a page for each thing you actually sell',
    p: 'One page per service, in plain language, with the Boston context that matters to it. Not one page listing eleven services in bullet points, which is what most local sites still ship.',
  },
  {
    n: '08',
    h: 'Give AI answers something clean to quote',
    p: 'Clear headings, direct answers near the top, and consistent business facts across your site and your profile. The same structure that helps a person skim helps a model cite you correctly.',
  },
];

/* ── Real rivals from the live organic top 12 for "seo agency boston". ───── */
const RIVAL_ROWS = [
  {
    feature: 'GreenBanana SEO',
    values: [
      'Boston based, ranks second organically for this query. Wide service menu: local SEO, paid media, programmatic display, geofencing and white label work for other agencies. Publishes a deep answer engine and AI search library.',
      'Also does AI search visibility work, but as part of one monthly SEO scope rather than a separate product line. We do not run paid media or white label.',
    ],
  },
  {
    feature: 'Boston Web Marketing',
    values: [
      'Local firm covering a very large footprint: dozens of Massachusetts towns plus Connecticut, Rhode Island, New Hampshire, New York and Florida, with named pages for trades from roofing to locksmiths.',
      'We publish far fewer city pages and write each one individually. If your trade is on their list, their vertical experience is real and worth a conversation.',
    ],
  },
  {
    feature: 'SEO.co',
    values: [
      'National agency serving Boston clients since 2010, with a documented audit process, link acquisition teams and Fortune 1000 clients alongside smaller ones.',
      'Smaller team, senior people only, no separate link building department. Better fit if you want one engineer accountable end to end.',
    ],
  },
  {
    feature: 'Coalition Technologies',
    values: [
      'Large national agency ranking on this SERP from outside Boston, with a much bigger backlink profile than ours and a deep design and development bench.',
      'We are the challenger on authority and we say so. What you get instead is direct access and month to month terms.',
    ],
  },
  {
    feature: 'Thrive Agency',
    values: [
      'National multi city operation that appears on more local SEO queries across the country than almost anyone. Genuinely impressive reach.',
      'At that scale the strategist who wins the pitch is rarely on your monthly call. With us, the person on the call did the work.',
    ],
  },
  {
    feature: 'Yelp, Clutch, Built In Boston, DesignRush',
    values: [
      'Not agencies. Directories and listicles holding half of page one. They rank because Google trusts the domains, not because they do SEO for anyone.',
      'Getting your business listed on pages like these is part of the job we do for you, rather than a fight to win.',
    ],
  },
];

/* ── FAQ. Grounded in the live People Also Ask set in the research brief. ── */
const FAQ_CATEGORIES = [
  { key: 'cost', label: 'What it costs' },
  { key: 'worth', label: 'Is it worth it' },
  { key: 'ai', label: 'SEO and AI' },
  { key: 'diy', label: 'Doing it yourself' },
  { key: 'local', label: 'Local SEO in Boston' },
  { key: 'basics', label: 'How SEO works' },
];

const BOSTON_FAQ_ITEMS = [
  {
    question: 'How much does an SEO agency charge in Boston?',
    answer:
      'It depends on how competitive your category is here, how many locations you serve, and how much repair your site needs before anything else can work. A single Back Bay practice and a nine location home services company are both doing local SEO and they are not the same job. We scope it after a free audit, month to month, and put the whole scope in writing before you commit.',
    category: 'cost',
  },
  {
    question: 'How much does it cost to hire an SEO agency?',
    answer:
      'Agencies price on effort, so the drivers are the same everywhere: number of locations, category competitiveness, technical debt on the site, how much content gets produced, and whether link work is included. Ask for two or three written scopes and compare them line by line. That comparison teaches you more than any published number will.',
    category: 'cost',
  },
  {
    question: 'How much should a small business spend on SEO?',
    answer:
      'Less than it brings in. Work out what one new customer is worth to you over a year, then ask how many extra customers a month would cover the work with room left over. If the answer is a handful, the scope fits. If the answer is dozens, start narrower: your profile, your reviews, and two or three pages that match what people type.',
    category: 'cost',
  },
  {
    question: 'How much does local SEO cost in the USA?',
    answer:
      'There is no useful national average, because the averages published online blend completely different jobs together. A one location restaurant and a multi location medical group are both counted in the same number. Ask instead what is included every month, who does it, and how you will know whether it worked.',
    category: 'cost',
  },
  {
    question: 'Why is SEO a monthly thing instead of one job?',
    answer:
      'Rankings are earned and then defended. Competitors keep optimizing, Google keeps shipping updates, and your profile needs ongoing posts, reviews and listing upkeep. A one time setup decays quietly and you find out about it six months later, usually when the phone gets slower.',
    category: 'cost',
  },
  {
    question: 'Is an SEO agency worth it?',
    answer:
      'It is worth it when people already search for what you sell and someone else is sitting above you. It is not worth much when nobody searches for your category at all. The common failure is not paying for SEO, it is paying for SEO with no way to tell whether it worked. Insist on reporting tied to calls, forms and bookings.',
    category: 'worth',
  },
  {
    question: 'Is SEO worth it for small businesses?',
    answer:
      'For most Boston small businesses, yes, because you are not trying to beat the internet. You are trying to beat the handful of businesses in your category within a couple of miles of you. That is a fight a normal owner can win, which is not true of most channels you could spend the same money on.',
    category: 'worth',
  },
  {
    question: 'Is paying someone to do SEO worth it?',
    answer:
      'Worth it if the work you would otherwise skip actually gets done. Most owners can claim a profile and ask for reviews. Far fewer will fix crawl errors, rewrite thin pages, clean up stale listings across directories, and keep doing it every month. Pay for the part that keeps not happening.',
    category: 'worth',
  },
  {
    question: 'Is doing local SEO worth it?',
    answer:
      'In a city where the Map Pack shows three businesses and Boston neighborhoods sit almost on top of each other, it is one of the few marketing levers with a visible finish line. You can see exactly who is above you, and usually why.',
    category: 'worth',
  },
  {
    question: 'Who is the best SEO agency in Boston?',
    answer:
      'The honest answer is that there is no single best one, only the best fit. Run every candidate through the same checklist: who physically does the work, is the scope written down before you sign, are the terms month to month, do your accounts and content stay yours, and is reporting tied to leads rather than ranking screenshots. Include us in that. If we are not the fit, we will say so.',
    category: 'worth',
  },
  {
    question: 'Is SEO replaced by AI?',
    answer:
      'No, and Google says so directly. Its guidance on AI features states there are no additional requirements to appear in AI Overviews or AI Mode and no special optimizations necessary, because the same SEO fundamentals apply. What changed is where the answer appears, not what earns it.',
    category: 'ai',
  },
  {
    question: 'Is SEO dead now with AI?',
    answer:
      'No. People still search, they just read a summary at the top more often than they used to. The work that gets you quoted in that summary is the same work that got you ranked: clear pages, real expertise, consistent business facts, and other credible sites referencing you. What died is the trick era.',
    category: 'ai',
  },
  {
    question: 'Can ChatGPT do SEO?',
    answer:
      'It can help with parts of it. It drafts quickly, clusters keywords, and spots gaps in an outline. It cannot look at your Google Business Profile, fix a crawl error, verify a claim, earn a review, or take responsibility for what it published. Used as a drafting assistant it saves real time. Used as the strategy it produces pages that sound like everyone else.',
    category: 'ai',
  },
  {
    question: 'What is replacing SEO?',
    answer:
      'Nothing is replacing it, it is widening. The same page now needs to rank in Google, hold up in the Map Pack, and be clean enough for ChatGPT or Perplexity to quote without mangling it. That last part is often called GEO or answer engine optimization. It is an extra requirement, not a replacement.',
    category: 'ai',
  },
  {
    question: 'Will SEO be replaced by AI?',
    answer:
      'Search behavior will keep shifting and some informational traffic is already going to AI answers. Local intent is the most durable part of search, because someone looking for a dentist near Copley still has to pick a real business with a real address. That is the part we build for first.',
    category: 'ai',
  },
  {
    question: 'Can I do SEO myself?',
    answer:
      'The first chunk, absolutely, and you should. Claim and fully complete your Google Business Profile, make your name, address and phone identical everywhere, add real photos, and ask every happy customer for a review. That alone moves plenty of businesses. It gets hard at technical repair, at content that has to outrank an established competitor, and at earning links from sites that matter.',
    category: 'diy',
  },
  {
    question: 'Can I do local SEO myself?',
    answer:
      'Yes, and the highest value part is free. Complete the profile, pick the most specific category, post occasionally, keep hours accurate including holidays, and reply to every review. Give it an hour a week for three months and check whether you have moved. If you have not, the blocker is usually the site, not the profile.',
    category: 'diy',
  },
  {
    question: 'Is SEO hard to learn?',
    answer:
      'Not intellectually brutal. Just wide. It asks for technical understanding, writing ability, patience, and a tolerance for slow feedback. The genuinely hard part is that you make a change and learn whether it worked weeks later, which makes it very easy to draw the wrong conclusion confidently.',
    category: 'diy',
  },
  {
    question: 'Can I learn SEO by myself?',
    answer:
      'Yes. Google Search Central documentation and the Google Business Profile help pages are free, accurate and better than most paid courses. Start there, apply it to your own site, and measure. The gap between people who have read about SEO and people who have done it is mostly reps.',
    category: 'diy',
  },
  {
    question: 'Is SEO work stressful?',
    answer:
      'It can be, mostly because you are judged on an outcome you only partly control and the feedback arrives late. That is why we bias toward fixes that are correct on their own merits, like speed, accurate business data and structured content, rather than experiments we cannot read the result of.',
    category: 'diy',
  },
  {
    question: 'What is local SEO versus SEO?',
    answer:
      'Local SEO is about appearing when someone nearby searches for what you sell, mostly through Google Maps and the three result Map Pack, and it leans heavily on your Business Profile and reviews. General SEO is about ranking your website pages regardless of where the searcher is. Most Boston businesses need both, with local first.',
    category: 'local',
  },
  {
    question: 'How do I do local SEO as a beginner?',
    answer:
      'In this order: claim the profile, choose the most specific category, complete every field, add real photos, get your name address and phone consistent everywhere, then ask for reviews steadily and reply to all of them. Only after that does it make sense to write new pages or think about links.',
    category: 'local',
  },
  {
    question: 'Do you work with businesses in Cambridge, Somerville and Brookline?',
    answer:
      'Yes, and it matters that they are separate cities. Someone standing in Kendall Square gets a different Map Pack to someone standing in Back Bay, even though it is a short walk across the bridge. We build for the municipalities you actually serve rather than treating Greater Boston as one blob.',
    category: 'local',
  },
  {
    question: 'How long does it take for SEO to kick in?',
    answer:
      'Profile and listing work can show up in weeks. Competitive organic terms usually take three to six months to move and six to twelve to stabilise. We deliberately win the low competition, high intent searches first, so leads start arriving while the bigger terms are still maturing.',
    category: 'local',
  },
  {
    question: 'What does an SEO agency do?',
    answer:
      'Four jobs. It fixes the technical condition of your site, it manages your Google Business Profile and local listings, it produces pages and content aimed at what your customers actually search, and it earns credible references from other sites. Everything else is a variation on one of those four.',
    category: 'basics',
  },
  {
    question: 'What are the four main types of SEO?',
    answer:
      'On page, which is your content and page structure. Technical, which is speed, crawlability and structured data. Off page, which is links and mentions elsewhere. And local, which is your Business Profile, reviews and listings. Local is the one that decides the Map Pack, and the one most sites underinvest in.',
    category: 'basics',
  },
  {
    question: 'What is the 80/20 rule in SEO?',
    answer:
      'The idea that a small slice of the work produces most of the result. For a local Boston business that slice is usually three things: a complete and correctly categorized Business Profile, a steady flow of genuine reviews, and a fast site that says clearly what you do and where. Get those right before anything clever.',
    category: 'basics',
  },
  {
    question: 'How do I know if my SEO is working?',
    answer:
      'Look at calls, form fills and bookings first, then Google Business Profile views and direction requests, then rankings last. Rankings move around during updates and testing, so read the trend across weeks. If your agency leads with a ranking screenshot and cannot tell you what happened to enquiries, that is the answer.',
    category: 'basics',
  },
];

/* FAQPage schema is DERIVED from the array above. There is deliberately no
   second FAQ literal anywhere in this file. */
const faqSchemaItems = BOSTON_FAQ_ITEMS.map((item) => ({
  '@type': 'Question' as const,
  name: item.question,
  acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
}));

const OTHER_CITIES: { name: string; path: string }[] = [
  { name: 'Providence SEO', path: '/providence/seo' },
  { name: 'Austin SEO', path: '/austin/seo' },
  { name: 'Charlotte SEO', path: '/charlotte/seo' },
  { name: 'Nashville SEO', path: '/nashville/seo' },
];

/* One graph, one script tag. Every schema object below is inside this const and
   this const is rendered exactly once, so nothing can be declared and dropped. */
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
      areaServed: [
        { '@type': 'City', name: 'Boston', containedInPlace: { '@type': 'State', name: 'Massachusetts' } },
        { '@type': 'City', name: 'Cambridge', containedInPlace: { '@type': 'State', name: 'Massachusetts' } },
        { '@type': 'City', name: 'Somerville', containedInPlace: { '@type': 'State', name: 'Massachusetts' } },
        { '@type': 'City', name: 'Brookline', containedInPlace: { '@type': 'State', name: 'Massachusetts' } },
        { '@type': 'City', name: 'Newton', containedInPlace: { '@type': 'State', name: 'Massachusetts' } },
        { '@type': 'City', name: 'Quincy', containedInPlace: { '@type': 'State', name: 'Massachusetts' } },
      ],
      knowsAbout: [
        'Local SEO',
        'Google Business Profile optimization',
        'Technical SEO',
        'Generative engine optimization',
      ],
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'SEO Services in Boston, MA',
      serviceType: 'Search engine optimization',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      url: CANONICAL,
      areaServed: { '@type': 'City', name: 'Boston', containedInPlace: { '@type': 'State', name: 'Massachusetts' } },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Boston SEO services',
        itemListElement: [
          { name: 'Google Business Profile optimization', description: 'Categories, services, attributes, hours, photos and posts on the profile the Map Pack is built from.' },
          { name: 'Local citations and listing cleanup', description: 'Consistent name, address and phone across the directories Google reads, with duplicates removed.' },
          { name: 'Review growth and response', description: 'A steady system for earning and answering reviews, which Google names as part of local prominence.' },
          { name: 'Technical SEO and Core Web Vitals', description: 'Speed, crawlability, structured data and internal linking, so a ranking holds through updates.' },
          { name: 'Local content and service pages', description: 'One page per service, written for the Boston neighborhoods the business actually serves.' },
          { name: 'AI search visibility and GEO', description: 'Answer-first structure and consistent entity data so AI answer engines cite the business correctly.' },
        ].map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name, description: s.description } })),
      },
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#mappack`,
      name: 'Eight things that decide whether a Boston business shows up in the Map Pack',
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: MAP_PACK_STEPS.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: s.h,
        description: s.p,
      })),
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
        { '@type': 'ListItem', position: 3, name: 'Boston', item: CANONICAL },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'Boston SEO Agency | Local SEO Services in Boston, MA',
      description:
        'What a Boston SEO agency does, how the local search competition really looks across Back Bay, the Seaport, Kendall Square and Longwood, and how FactoryJet compares to the firms holding page one.',
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
        cssSelector: ['[data-speakable]', 'h1', '[data-faq-answer]'],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: faqSchemaItems,
    },
  ],
};

export default function BostonSeoPage() {
  return (
    <>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="bg-fj-cream">
        <Hero
          eyebrow="SEO AGENCY · BOSTON, MA"
          headline="Boston SEO Built for the Block You Actually Sell On"
          lead="Boston is small, dense and split across separate cities. Someone standing in Kendall Square sees a different Map Pack to someone in Back Bay, three miles away. We build for the neighborhoods your customers search from, not for a generic Greater Boston."
          trustItems={['Month to month', 'Free audit first', 'Your accounts stay yours']}
          formSlot={<HeroInlineForm region="us" source="us_boston_seo_hero" submitLabel="Get my free SEO audit" />}
          rightSlot={
            <img
              src={`${IMG}/boston-seo-team.webp`}
              alt="Two colleagues reviewing a website layout together at a desk in a brick New England office"
              width={1264}
              height={896}
              fetchPriority="high"
              decoding="async"
              className="w-full rounded-2xl object-cover"
              style={{ display: 'block' }}
            />
          }
        />

        {/* ── ANSWER FIRST ─────────────────────────────────────────────── */}
        <section className="bg-fj-cream py-12 md:py-16">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <p className="fj-eyebrow">The short answer</p>
                <h2 className="fj-display font-fj-display mt-5 text-[1.375rem] font-semibold leading-[1.25] tracking-[-0.015em] text-fj-ink md:text-[1.625rem]">
                  What does a Boston SEO agency actually do?
                </h2>
                <p
                  data-speakable
                  className="mt-4 font-fj-body text-[1.25rem] leading-[1.55] text-fj-ink md:text-[1.4375rem]"
                >
                  A Boston SEO agency gets your business found by the people already searching for
                  what you sell, in Google Maps, in the regular results, and now inside AI answers.
                  The work is your Google Business Profile, technical repair on your site, reviews,
                  and pages written for what Boston actually types.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div
                  className="rounded-2xl bg-white p-7 md:p-8"
                  style={{ border: '1px solid rgba(26,23,18,.10)', borderLeft: '4px solid #F05A28' }}
                >
                  <p className="font-fj-body text-[0.9375rem] leading-[1.7] text-fj-neutral-600">
                    One thing worth knowing before you shortlist anyone. When we pulled the live
                    results for <b>seo agency boston</b> in August 2026, half of page one was not an
                    agency at all. Yelp held first, with Clutch, Built In Boston, the Semrush agency
                    directory and DesignRush filling six of the twelve slots. You are competing with
                    six firms and six lists, and getting onto the lists is part of the work.
                  </p>
                  <p className="mt-4 font-fj-body text-[0.9375rem] leading-[1.7] text-fj-neutral-600">
                    Roughly 880 people a month search that exact phrase (DataForSEO, August 2026),
                    and Google showed no AI Overview on it when we checked. For now this one is still
                    won on organic rank and on whether a human trusts the page they land on.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-10 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
              In practice the job splits four ways. First, your{' '}
              <Link href="/services/local-seo" className="underline decoration-1 underline-offset-2" style={{ color: '#B23E13' }}>Google Business Profile and local listings</Link>,
              which is what actually decides the three result Map Pack. Second, the technical
              condition of the site, which is where a free{' '}
              <Link href="/services/seo-audit" className="underline decoration-1 underline-offset-2" style={{ color: '#B23E13' }}>SEO audit</Link>{' '}
              starts, because a slow site will not hold a ranking however good the writing is. Third,
              pages that match what Boston genuinely types rather than what an agency guesses. Fourth,{' '}
              <Link href="/services/ai-seo" className="underline decoration-1 underline-offset-2" style={{ color: '#B23E13' }}>AI SEO and GEO</Link>:
              the structure and consistency that let ChatGPT, Perplexity and Google AI Overviews quote
              you instead of a competitor. Running a smaller operation? The shorter version lives at{' '}
              <Link href="/services/small-business-seo" className="underline decoration-1 underline-offset-2" style={{ color: '#B23E13' }}>small business SEO</Link>.
            </p>
          </div>
        </section>

        <LogoBar tagline="Trusted by 500+ businesses across the US, UK and UAE" />

        <CityContextSection
          eyebrow="BOSTON MARKET"
          headline="Boston Searches Like Six Cities, Not One"
          leadParagraphs={[
            'Boston proper is physically small, and the metro around it is a patchwork of separate municipalities that each generate their own local results. Cambridge, Somerville, Brookline, Newton and Quincy are not neighborhoods of Boston in Google’s eyes. They are their own cities, with their own Map Packs, and a competitor a short walk over the bridge can be completely invisible in yours.',
            'The industry mix pulls in different directions too. The Massachusetts Life Sciences Center calls the state the leading life sciences ecosystem in the world and counts 19 of the top 20 biopharma companies here, which shapes Kendall Square and increasingly the Seaport. Longwood packs hospitals and specialist practices into a few blocks. The Financial District runs on law, accounting and staffing. Back Bay is retail, wellness and professional services in brownstones. A single Boston SEO template cannot serve all of that, and the agencies that ship one usually have not walked any of it.',
          ]}
          stats={[
            {
              value: '#1',
              label: 'life sciences ecosystem in the world, per the state’s own life sciences agency',
              sourceUrl: 'https://www.masslifesciences.com/',
              sourceLabel: 'Massachusetts Life Sciences Center',
            },
            {
              value: '19 of 20',
              label: 'of the top 20 biopharma companies are counted in the Massachusetts ecosystem',
              sourceUrl: 'https://www.masslifesciences.com/',
              sourceLabel: 'Massachusetts Life Sciences Center',
            },
            {
              value: '1,700+',
              label: 'member organizations in the Massachusetts Biotechnology Council',
              sourceUrl: 'https://www.massbio.org/',
              sourceLabel: 'MassBio',
            },
          ]}
        />

        <ServiceExplanation
          eyebrow="WHAT WE ACTUALLY DO"
          headline="What an SEO Agency Does for a Boston Business, Week to Week"
          lead="Most of the value is unglamorous. Fix the site, fix the profile, publish pages that answer real questions, and keep doing it long enough for the compounding to show up. Here is what that looks like when the client is in Boston."
          body={
            <>
              <p>
                We start with the Google Business Profile, because that is what the Map Pack is built
                from. Google is unusually direct about how it ranks local results: it says they are
                mainly based on{' '}
                <a
                  href="https://support.google.com/business/answer/7091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-1 underline-offset-2"
                  style={{ color: '#B23E13' }}
                >
                  relevance, distance and prominence
                </a>
                . Distance you cannot change. Relevance is your categories, services and description.
                Prominence is reviews, mentions and links. Two of the three are yours to work on, and
                most Boston profiles we open have never had either touched properly.
              </p>
              <p>
                Then the site. Core Web Vitals, crawl errors, structured data, internal links, and a
                page for each service instead of one page listing eleven. This is the part that
                separates a ranking that holds from one that wobbles every time Google ships an
                update, and it is the part most local agencies quietly skip because it needs
                engineers rather than marketers.
              </p>
              <p>
                Then content, written for a specific Boston reader. A dentist near Copley and a
                contract research firm off Binney Street need completely different pages, in
                completely different registers. Finally we make the whole thing quotable: clear
                headings, direct answers near the top, consistent business facts everywhere, so an AI
                answer engine can cite you without garbling what you do. Founder Bhavesh Barot has
                been building sites and search programs for small businesses for over a decade, and
                on our own work the engineer who writes the fix is the person who explains it to you.
              </p>
            </>
          }
          rightSlot={
            <img
              src={`${IMG}/boston-seo-workshop.webp`}
              alt="Three colleagues reviewing printed page layouts and notes in a bright meeting room overlooking a Boston brick street"
              width={1216}
              height={704}
              loading="lazy"
              decoding="async"
              className="w-full rounded-2xl object-cover"
              style={{ display: 'block' }}
            />
          }
        />

        {/* ── DISTRICTS ────────────────────────────────────────────────── */}
        <section className="bg-fj-cream py-14 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="max-w-[760px]">
              <p className="fj-eyebrow">BOSTON, NEIGHBORHOOD BY NEIGHBORHOOD</p>
              <h2 className="fj-display font-fj-display mt-5 text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-fj-ink">
                Six Bostons, six different local SEO problems
              </h2>
              <p className="mt-5 font-fj-body text-[1.0625rem] leading-[1.65] text-fj-neutral-600">
                Search demand here splits along the same lines the city does. This is how we read the
                map before writing a single page, and it is the difference between a local page and a
                template with the city name swapped in.
              </p>
            </div>

            <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2" role="list">
              {DISTRICTS.map((d) => (
                <li
                  key={d.tag}
                  className="rounded-2xl bg-white p-7"
                  style={{ border: '1px solid rgba(26,23,18,.10)', boxShadow: '0 18px 38px -28px rgba(26,23,18,.28)' }}
                >
                  <p className="font-fj-mono text-[0.6875rem] font-bold uppercase tracking-[0.12em]" style={{ color: '#B23E13' }}>
                    {d.tag}
                  </p>
                  <h3 className="mt-3 font-fj-display text-[1.1875rem] font-semibold leading-[1.3] text-fj-ink">
                    {d.h}
                  </h3>
                  <p className="mt-3 font-fj-body text-[0.9375rem] leading-[1.7] text-fj-neutral-600">{d.p}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── LISTICLE ─────────────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-24">
                  <p className="fj-eyebrow">THE CHECKLIST</p>
                  <h2 className="fj-display font-fj-display mt-5 text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-fj-ink">
                    8 things that decide whether you show up in Boston&rsquo;s Map Pack
                  </h2>
                  <p className="mt-5 font-fj-body text-[1.0625rem] leading-[1.65] text-fj-neutral-600">
                    In order. Work down the list and stop when you hit the first one you have not
                    done, because that is almost always the thing holding you back.
                  </p>
                  <div className="mt-7">
                    <ModalCTAButton
                      label="Get your free Boston SEO audit"
                      region="us"
                      modalVariant="seo"
                      btnVariant="primary-light"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <ol className="space-y-0" role="list">
                  {MAP_PACK_STEPS.map((s) => (
                    <li key={s.n} className="border-t border-fj-neutral-200 py-6 first:border-t-0 first:pt-0">
                      <div className="flex gap-5">
                        <span
                          className="mt-0.5 font-fj-mono text-[0.875rem] font-bold"
                          style={{ color: '#B23E13' }}
                          aria-hidden="true"
                        >
                          {s.n}
                        </span>
                        <div>
                          <h3 className="font-fj-display text-[1.0625rem] font-semibold leading-[1.35] text-fj-ink">
                            {s.h}
                          </h3>
                          <p className="mt-2 font-fj-body text-[0.9375rem] leading-[1.7] text-fj-neutral-600">
                            {s.p}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ── MID PAGE CTA ─────────────────────────────────────────────── */}
        <section className="bg-fj-cream py-12 md:py-16">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div
              className="grid grid-cols-1 items-center gap-8 rounded-2xl bg-white p-8 md:p-10 lg:grid-cols-12"
              style={{ border: '1px solid rgba(26,23,18,.10)', borderTop: '3px solid #F05A28' }}
            >
              <div className="lg:col-span-7">
                <h2 className="font-fj-display text-[1.5rem] font-semibold leading-[1.25] text-fj-ink md:text-[1.75rem]">
                  Want to know which of those eight is costing you calls?
                </h2>
                <p className="mt-3 font-fj-body text-[1rem] leading-[1.65] text-fj-neutral-600">
                  The free audit opens your profile, your site and the competitors currently sitting
                  above you in your neighborhood, then tells you in plain language what to fix and in
                  what order. Yours to keep whether you hire us or not.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <ModalCTAButton
                    label="Get your free audit"
                    region="us"
                    modalVariant="seo"
                    btnVariant="primary-light"
                  />
                  <a
                    href={CALENDLY}
                    className="inline-flex items-center justify-center rounded-full px-6 py-3 font-fj-body text-[0.9375rem] font-semibold transition-colors hover:bg-fj-neutral-50"
                    style={{ border: '1px solid rgba(26,23,18,.20)', color: '#1A1712' }}
                  >
                    Talk to the founder
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5">
                <img
                  src={`${IMG}/boston-seo-consult.webp`}
                  alt="A shop owner and a visiting consultant talking at the counter of a bright Boston storefront"
                  width={1216}
                  height={704}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-2xl object-cover"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── THE ONE DARK SECTION ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="SEO AND AI SEARCH"
          headline="No, AI has not replaced SEO. It moved where the answer appears."
          lead={
            'We get this on every first call now, so here is the direct answer. Google publishes its own guidance on AI features and says plainly that there are no additional requirements to appear in AI Overviews or AI Mode, and no special optimizations necessary. What genuinely changed is that a summary now sits above the results for a lot of informational searches, so fewer people click through for a definition. Local intent held up best, because somebody looking for a dentist near Copley still has to pick a real business with a real address. That is the part we build for first, then we make the page clean enough to be quoted well.'
          }
          pillars={[
            {
              title: 'Same fundamentals',
              body: 'Clear pages, real expertise, consistent business facts, credible references elsewhere. That earned rankings before and it earns citations now.',
            },
            {
              title: 'Extra requirement',
              body: 'Answer near the top, honest headings, no burying the point. If a model has to guess what you do, it will guess wrong in front of your customer.',
            },
            {
              title: 'Local holds up',
              body: 'A summary cannot book a table or fix a boiler. Searches that end in a phone call are the most durable traffic you can own in Boston.',
            },
          ]}
        />

        <ComparisonTable
          eyebrow="THE SERP, HONESTLY"
          headline={<>Who you are actually up against for &ldquo;seo agency boston&rdquo;</>}
          lead="We pulled the live results in August 2026. Here is who holds page one, what each is genuinely good at, and where we sit. We are the challenger on this SERP and pretending otherwise would be the first reason not to hire us."
          columns={[
            { label: 'Who they are' },
            { label: 'FactoryJet', isFactoryJet: true },
          ]}
          rows={RIVAL_ROWS}
          footer={
            <>
              Source: live organic results for &ldquo;seo agency boston&rdquo;, pulled 2026-08-12.
              None of these firms are bad choices. Ask all of us the same three questions: who does
              the work, what happens if it does not move, and does anything leave with you. See the
              same approach applied elsewhere in{' '}
              <Link href="/providence/seo" className="underline decoration-1 underline-offset-2" style={{ color: '#B23E13' }}>Providence</Link>,{' '}
              <Link href="/austin/seo" className="underline decoration-1 underline-offset-2" style={{ color: '#B23E13' }}>Austin</Link>{' '}and{' '}
              <Link href="/charlotte/seo" className="underline decoration-1 underline-offset-2" style={{ color: '#B23E13' }}>Charlotte</Link>.
            </>
          }
        />

        <FAQ
          eyebrow="BOSTON SEO FAQ"
          headline="Questions people actually type before hiring an SEO agency"
          lead="These come from live People Also Ask data on this query, answered the way we would answer them on a call, including the money ones most agency sites skip."
          categories={FAQ_CATEGORIES}
          items={BOSTON_FAQ_ITEMS}
        />

        {/* id removed 2026-08-12: FinalCTA now carries #final-cta itself for all 146 pages
            that pair it with <FAQ />, so a local id here would duplicate it. */}
        <div>
          <FinalCTA
            variant="light"
            eyebrow="GET STARTED"
            headline="Find out where you stand in your Boston neighborhood"
            sub="Start with a free audit. We will show you where you sit in the Map Pack for the streets your customers search from, what is technically holding the site back, and exactly what we would fix first. Month to month, no setup fee, no pressure to continue."
            primaryCta={{ label: 'Get your free Boston SEO audit', modal: true, region: 'us' }}
            secondaryCta={{ label: 'Talk to the founder', href: CALENDLY }}
            objectionHandler="No long-term contract. Cancel with thirty days notice, and your profile, content and analytics accounts stay yours either way."
          />
        </div>

        {/* ── RELATED LINKS ────────────────────────────────────────────── */}
        <section className="bg-fj-cream py-10">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="font-fj-mono text-[0.6875rem] font-bold uppercase tracking-[0.12em]" style={{ color: '#B23E13' }}>
              Keep reading
            </p>
            <p className="mt-4 max-w-[900px] font-fj-body text-[0.9375rem] leading-[1.75] text-fj-neutral-600">
              Services:{' '}
              <Link href="/services/seo" className="underline decoration-1 underline-offset-2" style={{ color: '#B23E13' }}>SEO services</Link>,{' '}
              <Link href="/services/local-seo" className="underline decoration-1 underline-offset-2" style={{ color: '#B23E13' }}>local SEO</Link>,{' '}
              <Link href="/services/small-business-seo" className="underline decoration-1 underline-offset-2" style={{ color: '#B23E13' }}>small business SEO</Link>,{' '}
              <Link href="/services/seo-audit" className="underline decoration-1 underline-offset-2" style={{ color: '#B23E13' }}>SEO audit</Link>,{' '}
              <Link href="/services/ai-seo" className="underline decoration-1 underline-offset-2" style={{ color: '#B23E13' }}>AI SEO</Link>. Other
              cities:{' '}
              {OTHER_CITIES.map((c, i) => (
                <span key={c.path}>
                  <Link href={c.path} className="underline decoration-1 underline-offset-2" style={{ color: '#B23E13' }}>{c.name}</Link>
                  {i < OTHER_CITIES.length - 1 ? ', ' : '.'}
                </span>
              ))}
            </p>
          </div>
        </section>
        <SeoCityLinksUS currentCity="boston" />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
