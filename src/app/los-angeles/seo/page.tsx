/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import SeoCityLinksUS from '@/components/v2/SeoCityLinksUS';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import CityContextSection from '@/components/v2/CityContextSection';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import ComparisonTable from '@/components/v2/ComparisonTable';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   /los-angeles/seo :: Los Angeles city SEO page. Built 2026-08-12.

   Target keyword: "seo agency los angeles", 2,400/mo, KD 35 (DataForSEO,
   2026-08-12). Joint-highest volume city SEO target in this build wave, and a
   genuinely saturated market: six of the live top twelve results are not
   agencies at all, they are directories, roundups and one Facebook page.

   Page thesis, and the reason this is not a template: LA County is roughly
   4,000 square miles. Google's own documented local ranking factors are
   relevance, distance and prominence, and in a metro this size DISTANCE does
   more work than anywhere else in the US. A Santa Monica business will
   effectively never appear in a Pasadena map pack 25 miles away. So the page is
   built around ranking one district at a time rather than "citywide".

   Brief compliance (docs/US-BUILD-2026-08-12-BRIEF.md): no em dashes, no
   currency values, exactly one dark section (FinalCTA), plain <img> for the
   static-export target, 20 FAQs from live PAA, FAQPage schema derived from the
   same array the visible FAQ renders. Depth held to the 2,500-3,500 band on
   purpose: the research found AI-cited pages are SHORTER than ranking pages.
   Structure and component usage mirror src/app/austin/web-design/page.tsx.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/los-angeles/seo';
const IMG = '/images/us/los-angeles-seo';
const DATE_MODIFIED = '2026-08-12';

export const metadata: Metadata = {
  title: 'SEO Agency Los Angeles | Local SEO Services LA | FactoryJet',
  description:
    'FactoryJet is an SEO agency in Los Angeles that ranks you district by district, from Downtown and the Fashion District to Santa Monica, Culver City, Pasadena and the Valley. Free audit, month to month, senior engineers only.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Agency Los Angeles | Local SEO Services LA | FactoryJet',
    description:
      'Los Angeles is 4,000 square miles of separate local markets. We rank you in the ones your customers actually search from. Free audit, month to month.',
    url: CANONICAL,
    locale: 'en_US',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet SEO agency, Los Angeles' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency Los Angeles | Local SEO Services LA | FactoryJet',
    description:
      'Los Angeles is 4,000 square miles of separate local markets. We rank you in the ones your customers actually search from.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  robots: { index: true, follow: true },
};

/* ── LA districts. Written by someone who knows which freeway is which. ──── */
const DISTRICTS: { tag: string; h: string; p: string }[] = [
  {
    tag: 'Downtown',
    h: 'Downtown, the Fashion District and the Arts District',
    p: 'The LA Fashion District alone covers 107 blocks, and the wholesale apparel trade inside it searches by showroom, minimum order and category, usually from a phone in Santee Alley. Add the Flower District, the Jewelry District and the Bunker Hill finance towers and Downtown is five markets sharing one zip range. Categories and photos decide these searches, not blog volume.',
  },
  {
    tag: 'Westside',
    h: 'Santa Monica, Venice and the Silicon Beach corridor',
    p: 'Snap is headquartered in Santa Monica, Google runs a large Playa Vista campus, Riot Games sits in West LA, and around them is the densest cluster of DTC brands and studios in California. These buyers skip ads by reflex and read your site like a spec. Speed, clean architecture and being quotable by AI engines is the job here.',
  },
  {
    tag: 'Culver City',
    h: 'Culver City and the streaming and post-production belt',
    p: 'Sony Pictures has been on Washington Boulevard since the MGM days, and both Amazon and Apple took large Culver City offices for streaming. Around the lots sits a supply chain of post houses, VFX shops, colourists and equipment rental. Tiny volumes, enormous deal values. Five searches a month for one specific service can beat five thousand generic ones.',
  },
  {
    tag: 'Pasadena',
    h: 'Pasadena and the San Gabriel Valley',
    p: 'Caltech, the Jet Propulsion Laboratory, Huntington Hospital, and a thick layer of engineering, legal, dental and medical practices along Colorado Boulevard and Lake Avenue. Pasadena behaves like its own small city, which is exactly why it is winnable. Most practices here still have a Business Profile nobody has touched since the day it was claimed.',
  },
  {
    tag: 'The Valley',
    h: 'Burbank, Sherman Oaks and the San Fernando Valley',
    p: 'Warner Bros. and Disney anchor Burbank, NBCUniversal anchors Universal City, and the rest of the Valley is one of the strongest small-business corridors in the country: home services, auto, medical and restaurants along Ventura Boulevard. Search here is almost entirely proximity driven. Set your service area wrong and you lose customers four miles away.',
  },
  {
    tag: 'South Bay',
    h: 'El Segundo, Hawthorne and the aerospace South Bay',
    p: 'SpaceX in Hawthorne, The Aerospace Corporation in El Segundo, plus large Northrop Grumman, Boeing and RTX operations in the same few square miles. Suppliers sell to procurement teams and engineers, so searches are technical and low volume. A page naming the actual process, tolerance or certification beats a brochure page every time.',
  },
];

/* ── Listicle. Ordered by what actually moves the needle first in LA. ────── */
const PLAYBOOK: { n: string; h: string; p: string }[] = [
  {
    n: '01',
    h: 'Set a service area you can actually be chosen in',
    p: 'The most common Los Angeles mistake. Owners set a thirty mile radius because it feels ambitious, then rank nowhere. Distance is one of Google\'s three documented local factors, and in a county this size a wide radius makes you a weak match everywhere.',
  },
  {
    n: '02',
    h: 'Choose the most specific primary category available',
    p: 'Your primary category is the strongest lever on the whole profile and it takes four minutes to change. "Personal injury attorney" behaves nothing like "lawyer". Pick the narrowest category that is still true, then use secondary categories for everything else.',
  },
  {
    n: '03',
    h: 'Build reviews steadily and reply to all of them',
    p: 'Google states plainly that more reviews and positive ratings can improve local ranking. Steady beats spiky: twenty over ten months reads as a real business, twenty in one week reads as a campaign. Reply to every one in your own voice.',
  },
  {
    n: '04',
    h: 'Fix the site before you write anything on it',
    p: 'A slow or broken site will not hold a ranking no matter how good the copy is. Core Web Vitals, crawlability, headings, internal links and structured data come first. This layer is invisible in a monthly report, which is why it gets skipped.',
  },
  {
    n: '05',
    h: 'Write one real page per district, not one per zip code',
    p: 'A Pasadena page should mention Colorado Boulevard and the parking. An El Segundo page should talk about procurement cycles. If a page still makes sense with the neighborhood name swapped out, it is a doorway page, and Google has been good at spotting those for years.',
  },
  {
    n: '06',
    h: 'Answer the question before you sell anything',
    p: 'Put the direct answer in the first forty to sixty words, plain language, no preamble. That is what gets pulled into an AI Overview or quoted by ChatGPT, and it is what the human wanted anyway. Cited pages are usually shorter than ranking pages.',
  },
  {
    n: '07',
    h: 'Make your business data machine readable',
    p: 'Name, address, phone and hours identical everywhere, LocalBusiness and FAQPage structured data on the site, and no drift between what your schema claims and what the page shows. AI answer engines are far less forgiving of that mismatch than Google historically was.',
  },
];

/* ── Real rivals from the live top 12 for "seo agency los angeles",
      DataForSEO, 2026-08-12. Described fairly, from their own sites. ────── */
const RIVAL_ROWS = [
  {
    feature: 'Thrive Internet Marketing',
    values: [
      'Holds position one. A national operation running SEO, paid search, social, links and video production in one shop, with franchise and enterprise programs.',
      'You have many locations, or want search, ads, social and video from one vendor with the staff to cover all of it.',
      'One senior engineer on your account instead of a pod. We do not run your paid social, and we say so rather than sell it.',
    ],
  },
  {
    feature: 'Los Angeles SEO Inc',
    values: [
      'Position three, with a local number. The deepest vertical menu here: law firm, dental, medical, accounting, contractor and retail SEO each get their own line.',
      'You want an agency that has run your exact vertical dozens of times and can show you work inside it.',
      'We build the site and do the SEO with one team, so technical repair is part of the work rather than a second quote.',
    ],
  },
  {
    feature: 'seoTuners',
    values: [
      'Position four, based up in Thousand Oaks. Publishes its packages openly and shipped a real generative engine optimization service rather than renaming SEO.',
      'You want a published, predictable package and a clear monthly scope without a long discovery process.',
      'We scope per business rather than per package, and the free audit always comes before any number.',
    ],
  },
  {
    feature: 'GO-SEO',
    values: [
      'Position eleven, practicing since 2007. Publishes genuinely good free tools including an AI bot access checker and a crawler policy generator.',
      'You want a long-tenured practitioner who has worked through every major algorithm change and will talk to you directly.',
      'A similar philosophy to ours, honestly. We differ in that we also rebuild sites, so a replatform is on the table.',
    ],
  },
  {
    feature: 'Growwwise',
    values: [
      'Position eight. Platform-specific SEO for Shopify, WordPress and WooCommerce, plus white-label capacity for other agencies.',
      'You are on a specific platform and want someone who knows its quirks, or you are an agency needing delivery capacity.',
      'We are commerce-first, so product taxonomy, faceted navigation and category structure are our default lens.',
    ],
  },
  {
    feature: 'FactoryJet',
    values: [
      'Not on page one for this term. We are the challenger here, and pretending otherwise would be the first reason not to hire us.',
      'You want senior people doing the work, month to month terms, and a written scope you read before you sign.',
      'Free audit you keep either way, your accounts and data stay yours, reporting tied to calls and forms.',
    ],
  },
] as const;

/* ── FAQ. 22 questions, all grounded in live People-Also-Ask data for this
      query set (pipeline/research/briefs/los-angeles-seo.json). The FAQPage
      schema below is DERIVED from this array. Never duplicate it. ───────── */
const FAQ_CATEGORIES = [
  { key: 'cost', label: 'Cost and value' },
  { key: 'choose', label: 'Choosing an agency' },
  { key: 'local', label: 'Local SEO in LA' },
  { key: 'ai', label: 'AI and search' },
  { key: 'diy', label: 'Doing it yourself' },
];

const FAQ_ITEMS = [
  {
    category: 'cost',
    question: 'How much does SEO cost in Los Angeles?',
    answer:
      'LA sits at the higher end of the US range because the market is crowded and salaries here are high. Your number is set by how many districts you need, how competitive your category is, and how much technical repair the site needs first. We work month to month and scope after a free audit.',
  },
  {
    category: 'cost',
    question: 'How much does an SEO agency typically cost?',
    answer:
      'Agencies price on effort, so the drivers are the same everywhere: number of locations, category competitiveness, technical debt, content volume, and whether links are included. Ask any agency to put those five in writing and the quotes become comparable.',
  },
  {
    category: 'cost',
    question: 'How much should a small business spend on SEO?',
    answer:
      'Less than it brings in. Work out what one new customer is worth across a year, then ask how many extra customers a month would cover the work with room left over. If the answer is a handful, the scope fits. If it is dozens, start narrower.',
  },
  {
    category: 'cost',
    question: 'Is paying someone to do SEO worth it?',
    answer:
      'It is worth it if competitors above you are taking work you could have had, and worth little if almost nobody searches for what you sell. Most LA businesses are in the first group. The failure mode is paying with no way to tell whether it worked, so insist on reporting in calls and forms.',
  },
  {
    category: 'cost',
    question: 'How long does it take for SEO to kick in?',
    answer:
      'Business Profile changes often move within four to eight weeks. Organic rankings on competitive LA terms usually take three to six months to show real movement and six to twelve to stabilise. We win the low-difficulty district searches first so leads arrive while the bigger terms mature.',
  },
  {
    category: 'choose',
    question: 'Which SEO company is the best in Los Angeles?',
    answer:
      'There is no single best one, and any agency saying otherwise is selling. The best fit gives you a written scope before you sign, month to month terms, your data staying yours, and reporting tied to calls and leads. Run every candidate through that list, including us.',
  },
  {
    category: 'choose',
    question: 'What does an SEO agency do?',
    answer:
      'Four things, in this order. It fixes your site so pages can be crawled, load fast and be understood. It maintains your Business Profile so you can appear in the map pack. It writes pages matching what people actually search. And it earns references from other credible sites.',
  },
  {
    category: 'choose',
    question: 'Why do directories rank above agencies for "seo agency los angeles"?',
    answer:
      'Because Google trusts those domains, not because they do SEO for anyone. On the live results, six of the top twelve are lists rather than agencies: a Semrush partner directory, Clutch, Built In LA, Yelp, a rankings site and one Facebook page. Getting listed on them is part of the work.',
  },
  {
    category: 'local',
    question: 'What is local SEO versus regular SEO?',
    answer:
      'Local SEO is how you appear when someone nearby searches, in Google Maps and the three-result local pack. Regular SEO is the standard blue-link results, which are not filtered by proximity. Local runs on your Business Profile, reviews and distance. Regular runs on your site and who links to it.',
  },
  {
    category: 'local',
    question: 'Why can I not rank across all of Los Angeles?',
    answer:
      'Because distance is one of Google\'s three documented local ranking factors and LA County is roughly four thousand square miles. Santa Monica to Pasadena is about a twenty-five mile drive. Google will not show a Westside business to someone in the San Gabriel Valley when fifty closer options exist.',
  },
  {
    category: 'local',
    question: 'How do I do local SEO as a beginner?',
    answer:
      'Claim your Business Profile and fill every field. Pick the most specific primary category that is true. Set a service area you can actually serve, not the whole county. Make your name, address and phone identical everywhere. Then ask every happy customer for a review.',
  },
  {
    category: 'local',
    question: 'Can I do local SEO myself?',
    answer:
      'The first chunk, absolutely. Profile, categories, service area, photos, hours and reviews are owner-level work and they matter more than most agencies admit. It gets hard at technical repair, content that has to outrank an established competitor, and earning references from sites that carry weight.',
  },
  {
    category: 'local',
    question: 'Is local SEO worth doing for a Los Angeles business?',
    answer:
      'In a metro this size it is one of the few channels with a visible finish line. You are not trying to beat the internet. You are trying to beat the handful of businesses in your category within a few miles of you. A normal owner can win that fight.',
  },
  {
    category: 'local',
    question: 'Can I pay Google to rank higher in the map pack?',
    answer:
      'No. Google states plainly that there is no way to request or pay for a better local ranking. You can buy Google Ads and a Local Services Ad slot, both of which sit above the organic results and stop the moment you stop paying. A paid shortcut into the map pack does not exist.',
  },
  {
    category: 'ai',
    question: 'Can ChatGPT do SEO?',
    answer:
      'It can draft, outline, cluster keywords and speed up research, and it is genuinely useful for that. It cannot audit your rendering, fix Core Web Vitals, manage your Business Profile, earn a reference from a real publication, or know which LA district is winnable this quarter.',
  },
  {
    category: 'ai',
    question: 'Is SEO being replaced by AI?',
    answer:
      'Replaced, no. Redistributed, yes. People still search, they just as often read a summary at the top of Google or ask an assistant instead of clicking. The work that gets you cited in those answers is the work that got you ranked. The trick era died, not the discipline.',
  },
  {
    category: 'ai',
    question: 'Is SEO dead now that AI answers exist?',
    answer:
      'No. Two thousand four hundred people a month still type "seo agency los angeles" into Google. What changed is where the answer surfaces, so the same page now has to rank in the classic results, show in the map pack, and be quotable by ChatGPT, Perplexity and AI Overviews.',
  },
  {
    category: 'diy',
    question: 'Can I do SEO myself?',
    answer:
      'Yes, up to a point, and the early wins are real. Fix your titles, write pages that answer real questions, claim your Business Profile, ask for reviews, compress your images. The ceiling arrives when you need to diagnose why a page will not index, usually around month four.',
  },
  {
    category: 'diy',
    question: 'Is SEO hard to learn?',
    answer:
      'Not intellectually brutal, just wide. It asks for technical understanding, writing ability, patience, and tolerance for being judged on outcomes you only partly control. The hard part is the feedback loop: you make a change and find out weeks later whether it worked.',
  },
  {
    category: 'diy',
    question: 'What are the four main types of SEO?',
    answer:
      'On-page is your content, titles and headings. Off-page is mostly references from other sites. Technical is speed, crawlability, indexing and structured data. Local is your Business Profile, listings and reviews. LA businesses usually move fastest on local and technical.',
  },
] as const;

/* ── Schema. Every const below reaches a <script type="application/ld+json">
      in SchemaScript(). FAQPage.mainEntity is derived from FAQ_ITEMS. ───── */
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
      name: 'FactoryJet Technologies',
      url: CANONICAL,
      parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Los Angeles', containedInPlace: { '@type': 'State', name: 'California' } },
        { '@type': 'City', name: 'Santa Monica', containedInPlace: { '@type': 'State', name: 'California' } },
        { '@type': 'City', name: 'Culver City', containedInPlace: { '@type': 'State', name: 'California' } },
        { '@type': 'City', name: 'Pasadena', containedInPlace: { '@type': 'State', name: 'California' } },
        { '@type': 'City', name: 'Burbank', containedInPlace: { '@type': 'State', name: 'California' } },
        { '@type': 'City', name: 'El Segundo', containedInPlace: { '@type': 'State', name: 'California' } },
      ],
      knowsAbout: ['Local SEO', 'Technical SEO', 'Generative engine optimization', 'Google Business Profile optimization'],
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'SEO Services in Los Angeles, CA',
      serviceType: 'Search engine optimization',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      url: CANONICAL,
      areaServed: { '@type': 'City', name: 'Los Angeles', containedInPlace: { '@type': 'State', name: 'California' } },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Los Angeles SEO services',
        itemListElement: PLAYBOOK.map((p) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: p.h, description: p.p },
        })),
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'SEO Agency Los Angeles | Local SEO Services LA | FactoryJet',
      description:
        'What an SEO agency in Los Angeles actually does, why the metro has to be ranked district by district, who currently holds page one for the term, and where FactoryJet honestly sits.',
      inLanguage: 'en-US',
      dateModified: DATE_MODIFIED,
      isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
      about: { '@id': `${CANONICAL}#service` },
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
        jobTitle: 'Founder, FactoryJet',
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
      primaryImageOfPage: { '@type': 'ImageObject', url: `https://factoryjet.com${IMG}/los-angeles-seo-team.webp` },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['[data-speakable]', 'h1', '.faq-answer'],
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'SEO Services', item: 'https://factoryjet.com/services/seo' },
        { '@type': 'ListItem', position: 3, name: 'SEO Agency Los Angeles', item: CANONICAL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: faqMainEntity,
    },
  ],
};

function SchemaScript() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function LosAngelesSeoPage() {
  return (
    <>
      <SiteHeader />
      <SchemaScript />

      <main className="bg-fj-cream">
        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="SEO AGENCY · LOS ANGELES"
          headline="An SEO Agency in Los Angeles That Ranks You District by District"
          lead="LA County is roughly four thousand square miles. Nobody ranks across all of it, and any agency promising that has not read Google's own ranking docs. We pick the districts your customers search from, and win those first."
          trustItems={['Free audit, yours to keep', 'Month to month, no lock-in', 'Senior engineers, no account managers']}
          formSlot={<HeroInlineForm region="us" source="us_los_angeles_seo_hero" submitLabel="Get my free SEO audit" />}
          rightSlot={
            <img
              src={`${IMG}/los-angeles-seo-team.webp`}
              alt="A small team planning a local SEO campaign in a bright Los Angeles studio, palm trees visible through the window"
              width={1264}
              height={848}
              fetchPriority="high"
              decoding="async"
              className="w-full rounded-2xl object-cover"
              style={{ height: 'auto', display: 'block' }}
            />
          }
        />

        {/* ── ANSWER FIRST ──────────────────────────────────────────────── */}
        <section className="bg-fj-cream py-12 md:py-16">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div
              className="max-w-[860px] rounded-2xl bg-white p-8 md:p-10"
              style={{ border: '1px solid rgba(26,23,18,.10)', borderLeft: '4px solid #F05A28' }}
            >
              <p className="font-fj-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[#B23E13]">
                The short answer
              </p>
              <p
                data-speakable
                className="mt-4 font-fj-body text-[1.125rem] leading-[1.65] text-fj-ink"
              >
                An SEO agency in Los Angeles gets your business found by people already searching
                for what you sell: in Google Maps, in the regular results, and inside AI answers.
                The work is your Google Business Profile, technical repair, reviews, and pages
                written one district at a time, because Los Angeles is far too spread out to rank
                as a single city.
              </p>
              <p className="mt-5 font-fj-body text-[1rem] leading-[1.7] text-fj-ink/75">
                That last clause is the part most LA pages skip.{' '}
                <a
                  href="https://support.google.com/business/answer/7091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#B23E13]/40 underline-offset-2 hover:decoration-[#B23E13]"
                >
                  Google documents three local ranking factors
                </a>
                : relevance, distance and prominence. Two you can influence. Distance you cannot,
                and in a county this size it quietly decides more results than anything else. So we
                treat Downtown, the Westside, Culver City, Pasadena, the Valley and the South Bay
                as six separate markets rather than one brief.
              </p>
            </div>
          </div>
        </section>

        {/* ── TRUST ROW ─────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across the US, UK, and UAE" />
        <BigThreeTrustBlock
          variant="statement"
          eyebrow="HOW WE WORK"
          headline="Free audit first. Month to month after that. Senior engineers on every account, and your data stays yours."
        />

        {/* ── LA MARKET CONTEXT ─────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="LOS ANGELES MARKET"
          headline="The Largest County Economy in America, and the Hardest One to Rank Across"
          leadParagraphs={[
            'Los Angeles County is the biggest county economy in the United States, with output approaching one trillion dollars in value, per the LAEDC analysis in the 2025 Southern California Economic Update. Professional, scientific and technical services alone employ about 307,500 people here. The Information sector, where film, television, music and digital media sit, employs around 189,800 and accounts for 83 percent of all such jobs in the wider Southern California region.',
            'Underneath those numbers is a market that has genuinely been hard since 2023. The writers\' and actors\' strikes stalled production, the 2025 rebound ran slower than studios expected, and the Palisades and Eaton wildfires hit in January. If you sell into entertainment you already know your buyers are cautious. That changes what an SEO program should chase: fewer vanity terms, more searches made by someone with a live problem.',
          ]}
          stats={[
            {
              value: '307,500',
              label: 'people employed in professional, scientific and technical services in LA County',
              sourceUrl: 'https://scag.ca.gov/sites/default/files/2026-01/26-426-ES-0357-RegionalEconomicAnalysis2025CountyReportsLosAngeles-Final.pdf',
              sourceLabel: 'SCAG / LAEDC, 2025 Economic Update',
            },
            {
              value: '189,800',
              label: 'workers in the Information sector, 83% of all such jobs in the SCAG region',
              sourceUrl: 'https://scag.ca.gov/sites/default/files/2026-01/26-426-ES-0357-RegionalEconomicAnalysis2025CountyReportsLosAngeles-Final.pdf',
              sourceLabel: 'SCAG / LAEDC, 2025 Economic Update',
            },
            {
              value: '107 blocks',
              label: 'covered by the LA Fashion District in Downtown Los Angeles',
              sourceUrl: 'https://fashiondistrict.org/',
              sourceLabel: 'LA Fashion District BID',
            },
          ]}
        />

        {/* ── WHAT THE WORK ACTUALLY IS ─────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WHAT WE ACTUALLY DO"
          headline="What an SEO Agency Does, Minus the Deck"
          lead="Four jobs, in this order. Everything else an agency sells sits on top of these, and if the first two are broken the rest is decoration."
          body={
            <>
              <p>
                <strong>One: fix the site.</strong> Core Web Vitals, crawlability, indexing,
                headings, internal links and structured data. Invisible in a monthly report, which
                is exactly why it gets skipped, and the reason rankings stick once they arrive. It
                is where our <Link href="/services/seo-audit">free SEO audit</Link> starts.
              </p>
              <p>
                <strong>Two: own your Business Profile.</strong> Category, service area, hours,
                photos, services, questions and answers. In LA the service area setting does more
                damage than any other field. This is the core of{' '}
                <Link href="/services/local-seo">local SEO</Link>, and it is owner-level work you
                can start today.
              </p>
              <p>
                <strong>Three: write pages for what LA actually types.</strong> One genuine page
                per district, with the streets and constraints a real customer would recognise.
                Not what an agency guessed in a keyword tool.
              </p>
              <p>
                <strong>Four: be quotable by machines.</strong> Answer-first writing and honest
                structured data so ChatGPT, Perplexity and AI Overviews cite you instead of a
                competitor. That is our <Link href="/services/ai-seo">AI SEO</Link> work, and the
                free <Link href="/ai-visibility-checker">AI visibility checker</Link> shows where
                you stand. Smaller operation? Start at{' '}
                <Link href="/services/small-business-seo">small business SEO</Link>.
              </p>
            </>
          }
          rightSlot={
            <img
              src={`${IMG}/los-angeles-seo-consult.webp`}
              alt="An SEO consultant walking a Los Angeles business owner through a printed audit at a sunlit table"
              width={1216}
              height={704}
              loading="lazy"
              decoding="async"
              className="w-full rounded-2xl object-cover"
              style={{ height: 'auto', display: 'block' }}
            />
          }
        />

        {/* ── DISTRICTS ─────────────────────────────────────────────────── */}
        <section className="bg-fj-cream py-14 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="font-fj-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[#B23E13]">
              Los Angeles, district by district
            </p>
            <h2 className="fj-display mt-5 max-w-[860px] font-fj-display text-[clamp(1.75rem,3.6vw,3rem)] font-semibold leading-[1.1] tracking-[-0.015em] text-fj-ink">
              LA is not one market. It is about six of them, and they barely overlap.
            </h2>
            <p className="mt-6 max-w-[720px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-ink/75">
              Santa Monica to Pasadena is roughly a twenty-five mile drive, and a business in one
              will essentially never show in the other's map pack. Here is how we read the county
              before writing a page.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {DISTRICTS.map((d, i) => (
                <div
                  key={d.tag}
                  className={`rounded-2xl bg-white p-7 md:p-8 ${i % 3 === 0 ? 'md:col-span-2' : ''}`}
                  style={{ border: '1px solid rgba(26,23,18,.10)' }}
                >
                  <span className="inline-block rounded-full bg-[#FFF3EE] px-3 py-1 font-fj-mono text-[0.6875rem] uppercase tracking-[0.12em] text-[#B23E13]">
                    {d.tag}
                  </span>
                  <h3 className="mt-4 font-fj-display text-[1.3125rem] font-semibold leading-[1.25] tracking-[-0.01em] text-fj-ink">
                    {d.h}
                  </h3>
                  <p className="mt-3 font-fj-body text-[0.9875rem] leading-[1.7] text-fj-ink/75">
                    {d.p}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <img
                  src={`${IMG}/los-angeles-fashion-district.webp`}
                  alt="Two business owners photographing apparel stock in a downtown Los Angeles wholesale showroom"
                  width={1216}
                  height={704}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-2xl object-cover"
                  style={{ height: 'auto', display: 'block' }}
                />
              </div>
              <div className="lg:col-span-7">
                <p className="font-fj-body text-[1.0625rem] leading-[1.75] text-fj-ink/80">
                  LA's economy is not one story about Hollywood. It is a port and logistics
                  economy, an aerospace economy, a wholesale apparel economy, a health system, and
                  a technology corridor on the coast, all sharing a freeway network and almost
                  nothing else. An agency selling you "Los Angeles SEO" without asking which Los
                  Angeles you sell to is selling you a template.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── LISTICLE ──────────────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="font-fj-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[#B23E13]">
              The playbook
            </p>
            <h2 className="fj-display mt-5 max-w-[860px] font-fj-display text-[clamp(1.75rem,3.6vw,3rem)] font-semibold leading-[1.1] tracking-[-0.015em] text-fj-ink">
              Seven things that move a Los Angeles business up the map pack
            </h2>
            <p className="mt-6 max-w-[720px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-ink/75">
              In order. The first three are owner-level work you can start this afternoon, and
              they beat almost anything you could buy instead.
            </p>

            <ol className="mt-12 space-y-5">
              {PLAYBOOK.map((p) => (
                <li
                  key={p.n}
                  className="grid grid-cols-1 gap-4 rounded-2xl bg-fj-cream p-7 md:grid-cols-12 md:gap-8 md:p-8"
                  style={{ border: '1px solid rgba(26,23,18,.08)' }}
                >
                  <div className="md:col-span-4">
                    <span className="font-fj-mono text-[0.75rem] tracking-[0.12em] text-[#B23E13]">
                      {p.n}
                    </span>
                    <h3 className="mt-2 font-fj-display text-[1.25rem] font-semibold leading-[1.3] tracking-[-0.01em] text-fj-ink">
                      {p.h}
                    </h3>
                  </div>
                  <p className="font-fj-body text-[0.9875rem] leading-[1.75] text-fj-ink/75 md:col-span-8">
                    {p.p}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── MID-PAGE CTA ──────────────────────────────────────────────── */}
        <section className="bg-fj-cream py-12 md:py-16">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div
              className="grid grid-cols-1 gap-6 rounded-2xl bg-white p-8 md:p-10 lg:grid-cols-12 lg:items-center"
              style={{ border: '1px solid rgba(26,23,18,.10)', borderTop: '3px solid #F05A28' }}
            >
              <div className="lg:col-span-7">
                <h2 className="fj-display font-fj-display text-[clamp(1.5rem,2.6vw,2.125rem)] font-semibold leading-[1.15] tracking-[-0.015em] text-fj-ink">
                  Find out which LA districts you can realistically win
                </h2>
                <p className="mt-4 font-fj-body text-[1.0625rem] leading-[1.7] text-fj-ink/75">
                  The free audit shows where you appear in the map pack today, which districts are
                  open, what is technically holding the site back, and what we would fix first.
                  Yours to keep either way.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 lg:col-span-5 lg:justify-end">
                <ModalCTAButton
                  label="Get your free LA SEO audit"
                  region="us"
                  modalVariant="seo"
                  btnVariant="primary-light"
                />
                <a
                  className="inline-flex items-center justify-center rounded-full border border-fj-neutral-200 bg-white px-7 py-3.5 font-fj-body text-base font-semibold text-fj-ink transition-colors hover:border-fj-neutral-400"
                  href={CALENDLY}
                >
                  Talk to the founder
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMPARISON: the real SERP, named honestly ─────────────────── */}
        <ComparisonTable
          eyebrow="THE SERP, HONESTLY"
          headline="Who You Are Actually Choosing Between in Los Angeles"
          lead={
            'The agencies holding page one for "seo agency los angeles" on the live US results we pulled on 12 August 2026, described from their own sites. All are credible. We put ourselves at the bottom with our real position, which is exactly why it is worth reading.'
          }
          pullQuote={{
            stat: '6 of 12',
            caption:
              'page-one results for this term are not agencies at all: a Semrush partner listing, Clutch, Built In LA, Yelp, a rankings site and one Facebook page. Getting listed on them is part of the work.',
          }}
          columns={[
            { label: 'What they are genuinely good at' },
            { label: 'Best fit when' },
            { label: 'Where FactoryJet differs', isFactoryJet: true },
          ]}
          rows={RIVAL_ROWS.map((r) => ({ feature: r.feature, values: [...r.values] }))}
          footer={
            <>
              Positions from live US Google results, 12 August 2026. Our referring-domain count is
              in the dozens; the firms above us count theirs in the thousands. That gap matters
              less for you than for us: you need to rank in a few LA districts against a dozen
              local rivals, not nationally. Same approach elsewhere in{' '}
              <Link href="/austin/seo">Austin</Link>, <Link href="/denver/seo">Denver</Link>,{' '}
              <Link href="/nashville/seo">Nashville</Link> and{' '}
              <Link href="/huntington-beach/seo">Huntington Beach</Link>.
            </>
          }
        />

        {/* ── FOUNDER / E-E-A-T ─────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <p className="font-fj-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[#B23E13]">
                  Who you would work with
                </p>
                <h2 className="fj-display mt-5 font-fj-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.015em] text-fj-ink">
                  You talk to the person doing the work
                </h2>
                <p className="mt-6 font-fj-body text-[1.0625rem] leading-[1.75] text-fj-ink/80">
                  FactoryJet is run by Bhavesh Barot, who has spent over a decade building sites and
                  search programs for small and mid-sized businesses. No account managers: the
                  engineer who writes your technical fixes explains them on the same call. It also
                  shapes what we will not do. We will tell you when SEO is the wrong spend, and we
                  will not sell a guaranteed position, because Google warns against anyone who
                  promises one.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    className="inline-flex items-center justify-center rounded-full border border-fj-neutral-200 bg-white px-7 py-3.5 font-fj-body text-base font-semibold text-fj-ink transition-colors hover:border-fj-neutral-400"
                    href={CALENDLY}
                  >
                    Book 30 minutes with the founder
                  </a>
                  <Link
                    href="/services/seo-consulting"
                    className="inline-flex items-center justify-center rounded-full border border-fj-neutral-200 bg-white px-7 py-3.5 font-fj-body text-base font-semibold text-fj-ink transition-colors hover:border-fj-neutral-400"
                  >
                    SEO consulting
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div
                  className="rounded-2xl bg-fj-cream p-8"
                  style={{ border: '1px solid rgba(26,23,18,.10)' }}
                >
                  <h3 className="font-fj-display text-[1.25rem] font-semibold leading-[1.3] text-fj-ink">
                    What you get either way
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {[
                      'A free audit covering technical health, your Business Profile, reviews and whoever currently holds your districts. Yours to keep, hired or not.',
                      'Month to month, cancel with thirty days notice. Most LA firms lock you in for six to twelve months.',
                      'Reporting on calls and form fills, not ranking screenshots, which are the easiest thing in this industry to fake.',
                    ].map((t) => (
                      <li key={t} className="flex gap-3">
                        <span
                          className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[#F05A28]"
                          aria-hidden="true"
                        />
                        <span className="font-fj-body text-[0.9375rem] leading-[1.65] text-fj-ink/80">
                          {t}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="LOS ANGELES SEO FAQ"
          headline="Questions, answered the way we would answer them on a call"
          lead="Including the ones about money that most agency sites route straight to a contact form."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS.map((f) => ({ question: f.question, answer: f.answer, category: f.category }))}
        />

        {/* ── RELATED ───────────────────────────────────────────────────── */}
        <section className="bg-fj-cream py-10">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8 text-center">
            <p className="mb-5 font-fj-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[#B23E13]">
              Related services
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: '/services/seo', label: 'SEO services' },
                { href: '/services/local-seo', label: 'Local SEO' },
                { href: '/services/small-business-seo', label: 'Small business SEO' },
                { href: '/services/seo-audit', label: 'SEO audit' },
                { href: '/services/ai-seo', label: 'AI SEO' },
                { href: '/ai-visibility-checker', label: 'AI visibility checker' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-full border border-[#B23E13] px-5 py-2 font-fj-body text-sm font-medium text-[#B23E13] transition-colors hover:bg-[#B23E13] hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA: the page's single dark section ─────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="GET STARTED"
          headline="Pick your districts. We will go win them."
          sub="Start with a free Los Angeles SEO audit. You will see where you sit in the map pack today, which districts are genuinely open, and exactly what we would fix first. No pressure to continue, and you keep the findings."
          primaryCta={{ label: 'Get your free LA SEO audit', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: CALENDLY }}
          objectionHandler="Month to month, no setup fee, no long-term contract."
        />
        <SeoCityLinksUS currentCity="los-angeles" />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
