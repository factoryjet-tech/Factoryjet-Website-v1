import type { Metadata } from 'next';
import Link from 'next/link';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import SeoCityLinksUS from '@/components/v2/SeoCityLinksUS';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import TrustBarUS from '@/components/v2/TrustBarUS';
import CityContextSection from '@/components/v2/CityContextSection';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ComparisonTable from '@/components/v2/ComparisonTable';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import Heading from '@/components/v2/Heading';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   /san-diego/seo :: San Diego city SEO page. Built 2026-08-12.

   Target keyword: "seo agency san diego", 2,400 searches/mo, KD 39.
   Research: pipeline/research/briefs/san-diego-seo.json (live PAA + organic
   top 12 pulled 2026-08-12).

   Rules this file is written against (docs/US-BUILD-2026-08-12-BRIEF.md):
   - no em dashes, no currency values anywhere
   - FAQPage schema is derived from FAQ_ITEMS, the same array <FAQ /> renders
   - exactly one dark section (StrategicDarkSection), hero stays light
   - three external citations, all curl-verified 2026-08-12 for HTTP 200 and
     for the claim actually appearing on the page:
       support.google.com/business/answer/7091   (relevance / distance /
         prominence, and "There's no way to request or pay for a better local
         ranking on Google")
       sandiegobusiness.org/about-the-region/life-sciences/  (2,064
         establishments, 59,980 jobs, top three US cluster per CBRE 2025)
       sdbeer.com  ("home to over 150 independent craft breweries")
   - alternates/canonical inline, hreflangMap deliberately NOT imported
   No invented clients, no invented rankings, no guarantees.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL = 'https://factoryjet.com/san-diego/seo';
const IMG = '/images/us/san-diego-seo';

const SRC_LIFESCI = 'https://www.sandiegobusiness.org/about-the-region/life-sciences/';
const SRC_BEER = 'https://www.sdbeer.com/';
const SRC_GOOGLE_LOCAL = 'https://support.google.com/business/answer/7091';

export const metadata: Metadata = {
  title: 'SEO Agency San Diego | Local SEO Company CA | FactoryJet',
  description:
    'FactoryJet is an SEO agency in San Diego built for a county of separate markets: Downtown, La Jolla, Sorrento Valley, Carlsbad and the South Bay. Free audit, month to month.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Agency San Diego | Local SEO Company CA | FactoryJet',
    description:
      'An SEO agency in San Diego built for a county of separate markets: Downtown, La Jolla, Sorrento Valley, Carlsbad and the South Bay. Free audit, month to month.',
    url: CANONICAL,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency San Diego | Local SEO Company CA | FactoryJet',
    description:
      'An SEO agency in San Diego built for a county of separate markets. Free audit, month to month, no lock-in.',
  },
  robots: { index: true, follow: true },
};

/* ── San Diego corridors. Written for people who drive these roads. ──────── */
const DISTRICTS: { tag: string; h: string; p: string }[] = [
  {
    tag: 'Downtown',
    h: 'Downtown, the Gaslamp Quarter and East Village',
    p: 'Law firms around the county and federal courthouses, plus the hotel and restaurant trade feeding the Convention Center and Petco Park. Nearly every search here happens on a phone, on a sidewalk or in a hotel lobby, and the caller picks from the three map results. Category and review count decide that.',
  },
  {
    tag: 'La Jolla',
    h: 'La Jolla, Torrey Pines and UTC',
    p: 'Specialist medicine around Scripps and UC San Diego Health, plus dentistry, cosmetic practice, wealth management and the boutiques on Prospect Street. One booking here beats a hundred clicks elsewhere, so the work is precision: a page per procedure, reviews that name the treatment, a profile accurate down to the parking.',
  },
  {
    tag: 'Sorrento Valley',
    h: 'Sorrento Valley, Torrey Pines Mesa and the biotech corridor',
    p: 'Illumina, Neurocrine Biosciences, ResMed, Dexcom, the Salk Institute and Scripps Research sit inside a few square miles. Buyers here are scientists who read a website the way they read a protocol. There is no map pack for most of what they search. It is organic results, technical depth, and whatever the AI answer says.',
  },
  {
    tag: 'North County',
    h: 'Carlsbad, Encinitas, Oceanside and the 78 corridor',
    p: 'Golf equipment, Viasat, Ionis Pharmaceuticals, medical devices and action-sports brands along Palomar Airport Road, plus LEGOLAND pulling family tourism into Carlsbad. North County is a separate search market. A business in Vista does not compete with one in Chula Vista, and one countywide service area ranks for nothing.',
  },
  {
    tag: 'Kearny Mesa',
    h: 'Kearny Mesa, Miramar and the Convoy District',
    p: 'Auto dealerships, trades, light industrial, the Convoy District restaurant strip, and the taproom belt that made this county the Capital of Craft. Near-me volume lives here. Accurate hours, real photos and one phone number that matches everywhere move a home services business faster than any content plan.',
  },
  {
    tag: 'South Bay',
    h: 'Chula Vista, National City and San Ysidro',
    p: 'The part of San Diego that outside agencies forget. San Ysidro is one of the busiest land border crossings in the hemisphere, a real share of searches happen in Spanish, and Tijuana clinics compete head on with San Diego dentists. If your customers are bilingual and your site is not, you are giving that traffic away.',
  },
];

/* ── The listicle. Ordered the way we actually run the work. ─────────────── */
const PLAYBOOK: { n: string; h: string; p: string }[] = [
  {
    n: '01',
    h: 'Fix the Google Business Profile before you touch the website',
    p: 'Claim it, fill every field, set real hours including holidays, add photos taken this year, and list service areas honestly. Most profiles we audit have not been opened since the day they were claimed. It is free and it outperforms the next six items combined.',
  },
  {
    n: '02',
    h: 'Choose the most specific primary category available',
    p: 'A La Jolla practice listed as Dentist competes with every dentist in the county. Listed as Cosmetic Dentist, it competes with a much shorter list for the searches that pay. Primary category is the single field that moves rankings most, and changing it takes a minute.',
  },
  {
    n: '03',
    h: 'Make the site fast on a phone with two bars',
    p: 'Your customer is on the 5 near Sorrento Valley or standing in a parking structure downtown. Compress the images, cut the render-blocking scripts, and paint the largest visible element in about a second. Speed here decides whether the page loads before they close it.',
  },
  {
    n: '04',
    h: 'Build one page per thing you sell, per area you serve',
    p: 'Not a page per zip code. A page per real combination somebody types, written by a person who knows the difference between Encinitas and El Cajon. Five honest pages beat forty cloned ones, and Google has been catching cloned location pages for years.',
  },
  {
    n: '05',
    h: 'Ask for reviews on a schedule instead of in bursts',
    p: 'A steady trickle reads as a working business. Forty reviews in one week reads as a campaign. Ask when the customer is happiest, make the link one tap, and reply to every review including the bad ones, because the reply is written for the next reader.',
  },
  {
    n: '06',
    h: 'Get onto the lists that already rank',
    p: 'For this exact search, four of the twelve results are directories and roundups rather than agencies. That pattern repeats across San Diego categories. Getting listed on the pages already sitting above you is usually faster than trying to outrank them.',
  },
  {
    n: '07',
    h: 'Write so an AI answer can quote you',
    p: 'ChatGPT, Perplexity and Google AI Overviews pull short, checkable statements. Answer the question in the first two sentences, use real numbers with real sources, and keep your business facts identical everywhere. Vague marketing copy gives a model nothing to lift.',
  },
];

/* ── Real rivals from the live organic top 12, pulled 2026-08-12. ─────────
   Characterised from their own page titles and public positioning only.
   No invented pricing, no invented client counts, no disparagement. ─────── */
const RIVAL_ROWS = [
  {
    feature: 'Ignite Visibility',
    values: [
      'Ranks 7th. The largest San Diego-headquartered name here, full service across paid, social and SEO.',
      'A small senior team. Whoever audits your site is whoever fixes it.',
      'Them for one vendor covering every channel. Us for fewer people, more of them senior.',
    ],
  },
  {
    feature: 'Saba SEO',
    values: [
      'Ranks 6th. A long-established San Diego firm carrying a Google Partner badge in its page title.',
      'Technical SEO, Core Web Vitals and schema sit in the base scope, never as an upsell.',
      'Them for the local track record. Us if the site has engineering problems under the marketing ones.',
    ],
  },
  {
    feature: 'Blue Media',
    values: [
      'Ranks 3rd. Positions itself as a growth firm and is the strongest local performer here.',
      'We say plainly that we do not hold page one for this term today.',
      'They are winning this search. If that is your proof standard, call them first.',
    ],
  },
  {
    feature: 'Krasovetz Consulting',
    values: [
      'Ranks 4th. A smaller San Diego consultancy pairing SEO with creative and design.',
      'Design and build are in house, so fixes ship instead of returning to your developer.',
      'A similar shape to us. Ask us both who physically does the work.',
    ],
  },
  {
    feature: 'Thrive Internet Marketing Agency',
    values: [
      'Ranks 1st. A national multi-city operation, also top of the Austin equivalent.',
      'One market at a time, because we do not have their link profile to lean on.',
      'Them for scale. Ask who is on your monthly call once the pitch is over.',
    ],
  },
  {
    feature: 'TechAlphonic',
    values: [
      'Ranks 8th here. Its own homepage title reads "Digital Marketing Company in India".',
      'Offshore delivery is not worse, it is a different purchase. Know which one you are making.',
      'Ask any firm ranking locally where the team sits and in which time zone.',
    ],
  },
  {
    feature: 'Clutch, Built In and Semrush directories',
    values: [
      'Rank 2nd, 5th, 9th and 10th. Not agencies. Lists Google trusts on domain strength.',
      'Getting you listed on them is part of the work, not an afterthought.',
      'A third of page one is a list. Read that as an opening, not as competition.',
    ],
  },
];

/* ── FAQ. Sourced from the live People-Also-Ask set in the research brief.
   Human phrasing kept as typed. Answers localised honestly. ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'cost', label: 'What it costs' },
  { key: 'local', label: 'Local SEO in San Diego' },
  { key: 'ai', label: 'SEO and AI' },
  { key: 'diy', label: 'Doing it yourself' },
  { key: 'basics', label: 'How SEO works' },
  { key: 'choosing', label: 'Choosing an agency' },
];

const FAQ_ITEMS = [
  /* ── cost ────────────────────────────────────────────────────────────── */
  {
    question: 'How much does an SEO agency cost?',
    answer:
      'Four things set the number: how competitive your category is in San Diego, how many areas you serve, how much technical repair the site needs, and how much content gets produced monthly. A figure quoted before anyone opens your site is fiction. The free audit gives you the real scope.',
    category: 'cost',
  },
  {
    question: 'How much does it cost to hire someone to do SEO?',
    answer:
      'A freelancer, an in-house hire and an agency are three different purchases. A freelancer is usually strong at one part of the job. An in-house hire is a full San Diego salary plus benefits plus tools, and rarely covers technical work, writing and local listings equally well.',
    category: 'cost',
  },
  {
    question: 'How much should a small business spend on SEO?',
    answer:
      'Less than it brings back. Work out what one new customer is worth across a year, then ask how many extra customers a month would cover the work with room left over. If the answer is a handful, the scope fits. If it is dozens, start narrower.',
    category: 'cost',
  },
  {
    question: 'Is paying someone to do SEO worth it?',
    answer:
      'Worth it if people already search for what you sell and competitors sit above you. Not worth much if nobody searches your category. The real failure is not paying for SEO, it is paying with no way to tell whether it worked. Insist on reporting tied to calls and bookings.',
    category: 'cost',
  },

  /* ── local ───────────────────────────────────────────────────────────── */
  {
    question: 'What is local SEO vs SEO?',
    answer:
      'Local SEO is showing up in Google Maps and the three-result local pack when somebody nearby searches. It runs on your Google Business Profile, reviews and directory consistency. General SEO is ranking your website pages in the regular results. Most San Diego businesses need both, and they are different work.',
    category: 'local',
  },
  {
    question: 'How do you do local SEO for beginners?',
    answer:
      'Claim your Google Business Profile, pick the most specific primary category, fill in every field, add real photos, and make your business name, address and phone identical everywhere they appear. Then ask happy customers for reviews and reply to all of them. None of that needs an agency.',
    category: 'local',
  },
  {
    question: 'How competitive is SEO in San Diego?',
    answer:
      'Harder than most Southern California cities and easier than Los Angeles. The city term is contested by genuine San Diego firms, national agencies servicing the city from elsewhere, an agency based overseas, and four directory pages. Niche and neighbourhood terms are far softer, and that gap is where the winnable work sits.',
    category: 'local',
  },
  {
    question: 'Do you work with businesses outside the city of San Diego?',
    answer:
      'Yes, across the county: Chula Vista, National City, La Mesa, El Cajon, Poway, Escondido, Carlsbad, Oceanside, Vista, San Marcos, Encinitas and Del Mar. Multi-location clients get every location page written individually rather than one page with the city name swapped, because Google has been catching that for years.',
    category: 'local',
  },
  {
    question: 'Do you handle SEO in Spanish for South Bay customers?',
    answer:
      'Yes, and in the South Bay it matters more than most agencies allow for. Around San Ysidro, National City and Chula Vista a real share of searches happen in Spanish, and a machine-translated page reads badly to people and to search engines. We scope it properly or say so.',
    category: 'local',
  },
  {
    question: 'Does SEO work for a biotech company in Sorrento Valley?',
    answer:
      'It works differently. There is no map pack for most of what a procurement scientist searches, so the job moves to organic results and AI answers: clear technical pages, real specifications, structured data, and content a model can quote without turning it into something untrue.',
    category: 'local',
  },

  /* ── ai ──────────────────────────────────────────────────────────────── */
  {
    question: 'Is SEO dead now with AI?',
    answer:
      'No, but where the answer appears has changed. People still search. They just as often read a summary at the top of Google or ask ChatGPT instead of clicking. The work that gets you named in those answers is the work that got you ranked: clear pages, real expertise, consistent business data.',
    category: 'ai',
  },
  {
    question: 'Will SEO be replaced by AI?',
    answer:
      'Replaced is the wrong word. Redistributed is closer. AI answers pull from indexed pages, so somebody still has to publish the page being quoted. What is dying is thin content written to hit a word count, because a model will cite the better source two results down instead.',
    category: 'ai',
  },
  {
    question: 'Can ChatGPT do SEO?',
    answer:
      'It drafts, outlines and spots patterns quickly. It cannot audit your crawl behaviour, verify what competitors actually rank for, fix a slow template, or know that Encinitas and El Cajon are different markets. As a drafting tool it saves real time. As the strategy it produces pages that read like every other page.',
    category: 'ai',
  },

  /* ── diy ─────────────────────────────────────────────────────────────── */
  {
    question: 'Can I do local SEO myself?',
    answer:
      'Absolutely, and plenty of San Diego owners do it well. Claim the profile, fill it completely, get the categories right, add photos every month, and build a habit of asking for reviews. Do only that and you will still pass most competitors, because most of them have not done it.',
    category: 'diy',
  },
  {
    question: 'Is SEO hard to learn?',
    answer:
      'Not intellectually brutal. Just wide. It asks for technical understanding, writing ability, patience, and a tolerance for being judged on outcomes you only partly control. Someone can learn enough to run their own local SEO in a few focused weekends. Competitive technical SEO takes years.',
    category: 'diy',
  },

  /* ── basics ──────────────────────────────────────────────────────────── */
  {
    question: 'What does an SEO agency do?',
    answer:
      'Four jobs. It repairs the technical condition of your site so pages load fast and can be crawled. It manages your local presence, meaning profile, listings and reviews. It builds pages matching what customers actually search. And it earns references from other credible sites. Everything else is reporting on those four.',
    category: 'basics',
  },
  {
    question: 'How long does it take for SEO to kick in?',
    answer:
      'Searches for your own business name usually settle within a couple of weeks. Neighbourhood and niche terms typically move in three to six months. Countywide head terms take longer and need links, not just pages. Anyone promising page one in thirty days is guessing or selling something else.',
    category: 'basics',
  },
  {
    question: 'What is the 80/20 rule in SEO?',
    answer:
      'The idea that a small slice of the work produces most of the result. Locally that slice is three things: a complete and correctly categorised Google Business Profile, a steady flow of genuine reviews, and a site that loads fast and says clearly what you do and where. Do those before anything clever.',
    category: 'basics',
  },
  {
    question: 'How does Google decide local rankings?',
    answer:
      'Google names three factors in its own documentation: relevance, distance and prominence. Relevance is how well your profile matches the search, which is why categories matter. Distance you cannot change. Prominence is how well known you are. Two of the three are in your hands.',
    category: 'basics',
  },

  /* ── choosing ────────────────────────────────────────────────────────── */
  {
    question: 'Who is the best SEO agency?',
    answer:
      'There is no single best one, and any agency saying otherwise is selling. The best for you gives you a written scope before you sign, month-to-month terms, your own data and accounts, and reporting tied to calls and leads rather than ranking screenshots. Run every candidate through that list, us included.',
    category: 'choosing',
  },
  {
    question: 'Is an SEO agency worth it?',
    answer:
      'Worth it when you have real search demand and no time to run the work yourself. Not worth it when nobody searches for what you sell, or when the free things are still undone. The audit tells you which situation you are in, even when that answer costs us the job.',
    category: 'choosing',
  },
  {
    question: 'Can you guarantee number one rankings in San Diego?',
    answer:
      'No. Google states plainly that there is no way to request or pay for a better local ranking, so anyone guaranteeing a position is guessing with your money. What we commit to is the work, full transparency about what was done, and your right to leave at the end of any month.',
    category: 'choosing',
  },
  {
    question: 'Do you require a long-term contract?',
    answer:
      'No. Month to month, cancel with thirty days notice. Your Google Business Profile, site content, citations and reporting access stay yours if you leave. Work that disappears when you walk away was rented rather than built, and it is worth asking every agency that before you sign.',
    category: 'choosing',
  },
];

/* FAQPage schema is derived from the SAME array <FAQ /> renders below.
   Do not hand-write a second list here. */
const faqMainEntity = FAQ_ITEMS.map((item) => ({
  '@type': 'Question' as const,
  name: item.question,
  acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
}));

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
        { '@type': 'City', name: 'San Diego', containedInPlace: { '@type': 'State', name: 'California' } },
        { '@type': 'City', name: 'Chula Vista', containedInPlace: { '@type': 'State', name: 'California' } },
        { '@type': 'City', name: 'Carlsbad', containedInPlace: { '@type': 'State', name: 'California' } },
        { '@type': 'City', name: 'Oceanside', containedInPlace: { '@type': 'State', name: 'California' } },
        { '@type': 'City', name: 'Escondido', containedInPlace: { '@type': 'State', name: 'California' } },
        { '@type': 'City', name: 'El Cajon', containedInPlace: { '@type': 'State', name: 'California' } },
        { '@type': 'City', name: 'Encinitas', containedInPlace: { '@type': 'State', name: 'California' } },
      ],
      knowsAbout: [
        'Local SEO',
        'Technical SEO',
        'Google Business Profile optimisation',
        'Generative engine optimisation',
      ],
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'SEO Services in San Diego, CA',
      serviceType: 'Search engine optimization',
      url: CANONICAL,
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'City', name: 'San Diego', containedInPlace: { '@type': 'State', name: 'California' } },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'San Diego SEO services',
        itemListElement: PLAYBOOK.map((p) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: p.h, description: p.p },
        })),
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'SEO Services', item: 'https://factoryjet.com/services/seo' },
        { '@type': 'ListItem', position: 3, name: 'San Diego SEO', item: CANONICAL },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'SEO Agency San Diego | Local SEO Company CA | FactoryJet',
      description:
        'What an SEO agency in San Diego actually does, how the local market splits by district, who currently holds page one for the city term, and how FactoryJet compares.',
      inLanguage: 'en-US',
      dateModified: '2026-08-12',
      isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
      about: { '@id': `${CANONICAL}#service` },
      primaryImageOfPage: `https://factoryjet.com${IMG}/hero.webp`,
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
        jobTitle: 'Founder, FactoryJet',
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['[data-answer-first]', '[data-faq-answer]'],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: faqMainEntity,
    },
  ],
};

export default function SanDiegoSeoPage() {
  return (
    <>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="bg-fj-cream">
        {/* ── HERO (light, never dark) ──────────────────────────────────── */}
        <Hero
          eyebrow="SEO AGENCY · SAN DIEGO, CA"
          headline="An SEO Agency in San Diego, Built for a County of Separate Markets"
          lead="Downtown law firms, La Jolla clinics, Sorrento Valley biotech, Carlsbad manufacturers and North Park taprooms all get found in completely different ways. We build the plan for the San Diego you actually sell to."
          formSlot={<HeroInlineForm region="us" source="us_san_diego_seo_hero" submitLabel="Get my free SEO audit" />}
          trustItems={['Free audit, yours to keep', 'Month to month', 'You talk to the engineer']}
          rightSlot={
            <img
              src={`${IMG}/hero.webp`}
              alt="A San Diego business owner and an SEO specialist reviewing a website layout together on a laptop"
              width={1200}
              height={800}
              fetchPriority="high"
              decoding="async"
              className="w-full rounded-2xl"
              style={{ height: 'auto', display: 'block' }}
            />
          }
        />

        {/* ── ANSWER-FIRST BLOCK ────────────────────────────────────────── */}
        <section className="bg-white py-12 md:py-16" style={{ borderTop: '1px solid rgba(15,33,56,0.08)' }}>
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <p className="fj-eyebrow">The short answer</p>
                <Heading as="h2" size="h3" className="mt-4 text-fj-ink">
                  What does an SEO agency in San Diego do?
                </Heading>
                <p
                  data-answer-first
                  className="mt-5 font-fj-body text-[1.125rem] leading-[1.65] text-fj-ink/80"
                >
                  A San Diego SEO agency gets your business found by people already searching for what
                  you sell, in Google Maps, in the regular results, and inside AI answers. The work is
                  four things: your Google Business Profile, technical repair on your site, pages that
                  match real local searches, and reviews earned steadily over time.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div
                  className="rounded-2xl bg-fj-cream p-7"
                  style={{ border: '1px solid rgba(15,33,56,0.10)', borderLeft: '4px solid #F05A28' }}
                >
                  <p className="font-fj-body text-[0.9375rem] leading-[1.7] text-fj-ink/75">
                    Where we sit, stated plainly: FactoryJet does not hold page one for &quot;seo agency san
                    diego&quot; today. We are the challenger here, doing a harder version of your job
                    every day, which is why the playbook below reads the way it does.
                  </p>
                  <div className="mt-5">
                    <ModalCTAButton
                      label="Get your free San Diego SEO audit"
                      region="us"
                      modalVariant="seo"
                      btnVariant="primary-light"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST ROW ─────────────────────────────────────────────────── */}
        <TrustBarUS />

        {/* ── CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="SAN DIEGO MARKET"
          headline="San Diego is four economies sharing one coastline"
          leadParagraphs={[
            'Most cities have one dominant industry and a search market that follows it. San Diego has four that barely overlap. Life sciences runs along Torrey Pines Mesa and Sorrento Valley. Defense is anchored by Naval Base San Diego, North Island, MCAS Miramar and Camp Pendleton, with General Atomics and Northrop Grumman feeding it. Tourism runs from the Gaslamp Quarter to Coronado. And craft brewing earned the county the nickname Capital of Craft.',
            'Those four buyers search nothing alike. A procurement engineer at a defense supplier never opens Google Maps. A visitor choosing dinner in Little Italy never reads a service page. Treat them as one audience and you rank for a term nobody buys from.',
          ]}
          stats={[
            { value: '2,064', label: 'life sciences establishments in San Diego', sourceUrl: SRC_LIFESCI, sourceLabel: 'San Diego Regional EDC' },
            { value: '59,980', label: 'life sciences jobs in the region', sourceUrl: SRC_LIFESCI, sourceLabel: 'San Diego Regional EDC' },
            { value: '150+', label: 'independent craft breweries in the county', sourceUrl: SRC_BEER, sourceLabel: 'San Diego Brewers Guild' },
          ]}
        />

        {/* ── SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="HOW IT ACTUALLY WORKS"
          headline="Two different games, played on the same results page"
          lead="Local SEO and organic SEO are not the same job, and most San Diego businesses need both. Knowing which pays first separates a plan that works in three months from one that works in eighteen."
          body={
            <>
              <p>
                The map results are the first game. Google states in its own documentation that local
                results are based mainly on{' '}
                <a
                  href={SRC_GOOGLE_LOCAL}
                  rel="nofollow noopener"
                  target="_blank"
                  style={{ color: '#B23E13', fontWeight: 600 }}
                >
                  relevance, distance and prominence
                </a>
                . Relevance is how well your profile matches the search, so your primary category does
                more work than any paragraph on your website. Distance is how close you are to the
                searcher, and nothing you buy changes it. The same page is explicit that there is no
                way to request or pay for a better local ranking, so treat any pitch offering a
                shortcut into the map results as selling something Google does not sell.
              </p>
              <p>
                The blue links underneath are the second game, and that is where the Sorrento Valley
                and Carlsbad buyers live. Nobody sourcing a medical device component opens Google
                Maps. They read pages. That work is{' '}
                <Link href="/services/seo-audit">technical repair</Link>, page structure, specificity,
                and increasingly whether an AI answer will quote you, which is what{' '}
                <Link href="/services/ai-seo">AI SEO</Link> covers.
              </p>
              <p>
                Both run off the same foundation: a fast site, business facts that match everywhere
                they appear, and pages written by somebody who knows the market. Start with{' '}
                <Link href="/services/local-seo">local SEO</Link> if customers come to you or you go
                to them. Start with <Link href="/services/seo">organic SEO</Link> if your buyer
                researches a purchase over weeks.
              </p>
            </>
          }
          rightSlot={
            <img
              src={`${IMG}/planning-session.webp`}
              alt="Three FactoryJet colleagues planning a website structure on a whiteboard"
              width={1216}
              height={704}
              loading="lazy"
              decoding="async"
              className="w-full rounded-2xl object-cover"
              style={{ display: 'block' }}
            />
          }
        />

        {/* ── DISTRICTS ─────────────────────────────────────────────────── */}
        <section className="bg-fj-cream py-14 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">SAN DIEGO, CORRIDOR BY CORRIDOR</p>
            <Heading as="h2" size="h3" className="mt-5 max-w-[20ch] text-fj-ink">
              Six San Diegos, six different search problems
            </Heading>
            <p className="mt-5 max-w-[620px] font-fj-body text-[1.0625rem] leading-[1.6] text-fj-neutral-600">
              Search demand splits the way the county does. Here is how we read the map before writing
              a page.
            </p>

            <ul className="mt-10 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-2">
              {DISTRICTS.map((d) => (
                <li
                  key={d.tag}
                  className="rounded-2xl bg-white p-6"
                  style={{ border: '1px solid rgba(15,33,56,0.10)' }}
                >
                  <p
                    className="font-fj-mono text-[0.6875rem] font-bold uppercase"
                    style={{ letterSpacing: '0.12em', color: '#B23E13' }}
                  >
                    {d.tag}
                  </p>
                  <Heading as="h3" size="h4" className="mt-3 text-fj-ink">
                    {d.h}
                  </Heading>
                  <p className="mt-3 font-fj-body text-[0.9375rem] leading-[1.7] text-fj-neutral-600">
                    {d.p}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-[760px] font-fj-body text-[0.9375rem] leading-[1.7] text-fj-neutral-600">
              Seasonality is not a rounding error here either. Comic-Con reshapes downtown demand in
              July and San Diego Beer Week moves the taproom calendar in November. Any agency selling
              you San Diego SEO without asking which San Diego you sell to is selling a template.
            </p>
          </div>
        </section>

        {/* ── LISTICLE ──────────────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">THE ORDER WE WORK IN</p>
            <Heading as="h2" size="h3" className="mt-5 max-w-[22ch] text-fj-ink">
              Seven things that move a San Diego business up, in order
            </Heading>
            <p className="mt-5 max-w-[620px] font-fj-body text-[1.0625rem] leading-[1.6] text-fj-neutral-600">
              Sequence matters more than effort. The first two are free and most businesses have not
              done them.
            </p>

            <ol className="mt-10 list-none space-y-0 p-0">
              {PLAYBOOK.map((p) => (
                <li
                  key={p.n}
                  className="grid grid-cols-1 gap-x-8 gap-y-2 py-7 md:grid-cols-12"
                  style={{ borderTop: '1px solid rgba(15,33,56,0.10)' }}
                >
                  <div className="md:col-span-1">
                    <span
                      className="font-fj-mono text-[1.125rem] font-bold"
                      style={{ color: '#F05A28' }}
                      aria-hidden="true"
                    >
                      {p.n}
                    </span>
                  </div>
                  <div className="md:col-span-5">
                    <Heading as="h3" size="h4" className="text-fj-ink">
                      {p.h}
                    </Heading>
                  </div>
                  <div className="md:col-span-6">
                    <p className="font-fj-body text-[0.9375rem] leading-[1.7] text-fj-neutral-600">
                      {p.p}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── MID-PAGE CTA ──────────────────────────────────────────────── */}
        <section className="bg-fj-cream py-12 md:py-16">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-6">
                <img
                  src={`${IMG}/taproom-local-search.webp`}
                  alt="A San Diego taproom manager checking her business listing on a phone behind the bar"
                  width={1024}
                  height={768}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-2xl"
                  style={{ height: 'auto', display: 'block' }}
                />
              </div>
              <div className="lg:col-span-6">
                <Heading as="h2" size="h3" className="text-fj-ink">
                  See what San Diego sees when it searches for you
                </Heading>
                <p className="mt-5 font-fj-body text-[1.0625rem] leading-[1.6] text-fj-neutral-600">
                  The free audit covers your Google Business Profile, technical health, the competitors
                  holding your spots, and whether AI answers name you. Plain language, no deck,
                  yours to keep either way.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <ModalCTAButton
                    label="Get your free San Diego SEO audit"
                    region="us"
                    modalVariant="seo"
                    btnVariant="primary-light"
                  />
                  <Link
                    href="/ai-visibility-checker"
                    className="inline-flex items-center justify-center rounded-full border border-fj-neutral-200 bg-white px-6 py-3 font-fj-body text-[0.9375rem] font-semibold text-fj-ink transition-colors hover:border-fj-neutral-400"
                  >
                    Check your AI visibility
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE ONE DARK SECTION ──────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE SERP, HONESTLY"
          headline="Page one for this search is not what you think it is"
          lead={
            'We pulled the live United States results for "seo agency san diego" on 12 August 2026. Four of the top twelve are not agencies: Clutch, the Semrush agency directory, Built In\'s list of seventeen companies, and an Onfolio roundup. One agency that does rank is headquartered in Texas, and one calls itself a digital marketing company in India on its own homepage.\n\nThat changes the brief. "Get us to number one" is not a plan when a third of page one is lists you can join in weeks.'
          }
          pillars={[
            {
              title: 'A third of page one is a list',
              body: 'Getting listed on the directories and roundups already ranking above you is usually faster and cheaper than beating them. We treat that as part of the work rather than as competition.',
            },
            {
              title: 'Proximity beats prestige in the map pack',
              body: 'Distance is one of the three factors Google names, and it is the one nobody can buy. A well run profile two miles from your customer beats a famous agency client twenty miles away. Plan service areas around that.',
            },
            {
              title: 'Nobody can sell you a shortcut',
              body: 'Google states there is no way to request or pay for better local ranking. Any pitch built on a guaranteed position, a secret method, or an inside track to the map results is selling something that does not exist.',
            },
          ]}
        />

        {/* ── COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="WHO ELSE YOU SHOULD CALL"
          headline="The agencies actually ranking for this search, and where we fit"
          lead="The real names holding the top twelve organic results on 12 August 2026, described by what each is genuinely strong at. We are one of the options, not the obvious one."
          columns={[
            { label: 'What they are strongest at' },
            { label: 'What FactoryJet does differently', isFactoryJet: true },
            { label: 'How to choose between us' },
          ]}
          rows={RIVAL_ROWS}
          footer="Positions come from one live United States desktop result set pulled on 12 August 2026 and they move constantly. Each firm is described from its own published positioning."
        />

        {/* ── FAQ (visible array is the schema source) ──────────────────── */}
        <FAQ
          eyebrow="SAN DIEGO SEO FAQ"
          headline="The questions San Diego owners actually type"
          lead="Taken from live People Also Ask data for this search, answered the way we would answer on a call."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── INTERNAL LINKS ────────────────────────────────────────────── */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="max-w-[860px] font-fj-body text-[0.9375rem] leading-[1.75] text-fj-neutral-600">
              The underlying services live at <Link href="/services/seo">SEO services</Link>,{' '}
              <Link href="/services/local-seo">local SEO</Link>,{' '}
              <Link href="/services/small-business-seo">small business SEO</Link>,{' '}
              <Link href="/services/seo-audit">SEO audit</Link>,{' '}
              <Link href="/services/seo-consulting">SEO consulting</Link> and{' '}
              <Link href="/services/ai-seo">AI SEO</Link>. Category playbooks:{' '}
              <Link href="/services/dental-seo">dental SEO</Link>,{' '}
              <Link href="/services/healthcare-seo">healthcare SEO</Link>,{' '}
              <Link href="/services/law-firm-seo">law firm SEO</Link> and{' '}
              <Link href="/services/ecommerce-seo">ecommerce SEO</Link>. Every city page is written
              one at a time, so check <Link href="/austin/seo">Austin</Link>,{' '}
              <Link href="/denver/seo">Denver</Link>, <Link href="/charlotte/seo">Charlotte</Link>,{' '}
              <Link href="/nashville/seo">Nashville</Link> and <Link href="/tampa/seo">Tampa</Link>.
            </p>
          </div>
        </section>

        {/* ── FINAL CTA (light: the dark budget is spent above) ───────────
            The local #final-cta wrapper this agent added has been removed: FinalCTA now
            carries the id itself (fixed 2026-08-12 for all 146 pages), so keeping it here
            would render a duplicate id and send the FAQ anchor to the wrong element. */}
        <div className="scroll-mt-24">
          <FinalCTA
            variant="light"
            eyebrow="GET STARTED"
            headline="Start with the audit, decide afterwards"
            sub="We will show you where you stand in the map results, what is holding the site back, which competitors hold your spots, and whether AI answers mention you."
            primaryCta={{ label: 'Get your free San Diego SEO audit', modal: true, region: 'us' }}
            secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
            objectionHandler="Month to month, no setup fee. Founder Bhavesh Barot reads every audit before it goes out."
          />
        </div>
        <SeoCityLinksUS currentCity="san-diego" />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
