import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import { seoHubAlternates } from '@/data/hreflangMap';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import HeroBrowserMockup from '@/components/v2/HeroBrowserMockup';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'SEO Company in India | AI-Native SEO Agency | FactoryJet',
  description:
    'SEO company in India helping small businesses show up on Google: the map, the normal results, and the new AI answers. No long contracts. Simple reports.',
  keywords: [
    'seo company in india',
    'seo agency india',
    'seo services india',
    'best seo company in india',
    'affordable seo services india',
    'ai seo agency india',
    'local seo services india',
    'technical seo company india',
    'seo agency mumbai bangalore pune',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Company in India | AI-Native SEO Agency | FactoryJet',
    description:
      'SEO company in India helping small businesses in Mumbai, Bangalore, Pune and 19 cities show up on Google: the map, the normal results, and the new AI answers. No long contracts. Simple reports. 500+ sites done.',
    url: 'https://factoryjet.com/seo',
    images: [
      {
        url: 'https://factoryjet.com/images/services/seo.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet SEO Services in India',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services in India | FactoryJet',
    description:
      'SEO company in India. No long contracts. Show up on the Google map, the normal results, and the new AI answers. Reports you can read. 500+ sites done.',
    images: ['https://factoryjet.com/images/services/seo.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/seo',
    languages: seoHubAlternates,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schemas
───────────────────────────────────────────────────────────────────────────── */

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-08-04';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo#webpage',
  url: 'https://factoryjet.com/seo',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/seo#service',
  serviceType: 'Search Engine Optimisation',
  name: 'SEO Services, FactoryJet',
  description:
    'SEO company in India for small businesses in Mumbai, Bangalore, Pune and 19 cities. We fix your site, write helpful content, get real links, look after your Google listing, and help you show up in the new AI answers. No long contracts.',
  url: 'https://factoryjet.com/seo',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet Technologies',
    url: 'https://factoryjet.com',
    telephone: '+919699977699',
  },
  areaServed: { '@type': 'Country', name: 'India' },
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/seo',
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const SEO_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Check',
    description:
      'We check your whole site: how fast it loads, whether Google can find and read every page, the links pointing to you, and how you stack up against the three rivals you keep losing to. You get it all in plain words. Week 1',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'We build a list of the searches that bring real buyers, not just lots of visitors, including the ones your rivals have missed. We plan the map, the normal results, and Google AI answers together. Week 1 to 2',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We fix the technical side first: speed, schema markup, the JSON-LD code that helps Google understand your site, and the links between your pages. Then we improve the pages that win you customers. We do it on your site or hand your developer a clear list. Week 2 to 4',
  },
  {
    number: '04',
    title: 'Content & Links',
    description:
      'We plan helpful content with AI, then a real editor writes it so it sounds human and answers what buyers ask. We earn real links from trusted sites. No spammy link tricks that get you punished later. Every piece targets a real search and a real buyer question. Ongoing',
  },
  {
    number: '05',
    title: 'Report',
    description:
      'One page a month, written for a business owner, not a tech expert: the searches that moved, the visits that turned into customers, the leads we can trace to Google, and the three things we will do next. No 40-page file you never open. Monthly',
  },
];

const SEO_FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost & Time' },
  { key: 'included', label: 'What You Get' },
  { key: 'technical', label: 'Tech & Google' },
  { key: 'choosing', label: 'Choosing an Agency' },
  { key: 'reporting', label: 'Reports & Ownership' },
];

const SEO_FAQ_ITEMS = [
  /* ── Cost & Time ── */
  {
    category: 'pricing',
    question: 'How much do SEO services cost in India?',
    answer:
      "We do not sell fixed packages. We look at what you need and only charge for work that actually moves you up Google. The price depends on how competitive your market is and how much work your site needs, and we give you an exact price after a free check. There is no long contract. You pay month to month and can stop with 30 days notice.",
  },
  {
    category: 'pricing',
    question: 'How long does SEO take to work?',
    answer:
      'Simple, local, and brand searches usually start moving in 30 to 60 days. Tougher searches, like a service plus a big city, take three to six months for a site that has had no SEO before. We show you early signs of progress from the first month, so you can see things heading the right way well before the sales arrive.',
  },
  {
    category: 'pricing',
    question: 'Why is FactoryJet cheaper than other Indian SEO agencies?',
    answer:
      'We are a small team that uses AI plus senior people, not a big agency with a sales floor and lots of managers to pay for. AI does the heavy lifting on research, content plans, and reports; experienced people do the strategy, writing, and technical work that actually moves rankings. You pay for the work, not the overheads.',
  },
  {
    category: 'pricing',
    question: 'Do I have to sign a long-term contract?',
    answer:
      'No. You pay month to month and can pause or stop with 30 days notice. We keep clients by showing real progress, not by tying them down. You keep everything we build.',
  },
  /* ── What You Get ── */
  {
    category: 'included',
    question: 'What does an SEO plan actually include?',
    answer:
      'Every plan covers the technical side (a fast site that Google can read easily), improving the pages that win you customers, and local SEO including your Google Business Profile. Bigger plans add helpful content, real links from trusted sites, and getting picked up by Google AI answers. You also get a monthly call and a report you can read in five minutes.',
  },
  {
    category: 'included',
    question: 'Do you write the content, or do I?',
    answer:
      'We do. AI builds the first outline; a real editor turns it into writing that sounds human and answers the buyer question directly. You read and approve every piece before it goes live. How much we write depends on the size of your plan.',
  },
  {
    category: 'included',
    question: 'Do you build links, and is it safe?',
    answer:
      'Yes, once the basics are in place. We only get real links: from genuine websites with real visitors, through PR, honest mentions, and helpful placements. No spammy link networks, no bought links, nothing that can get you punished by Google. It is slower, but it does not blow up six months later.',
  },
  {
    category: 'included',
    question: 'Can you do SEO for an online store?',
    answer:
      'Yes. For online stores we sort out your category and product pages, the hidden product details Google reads, big menus that can confuse Google, and helpful buying guides. We have done this on Shopify and on custom-built stores, so we work with whatever you already use.',
  },
  /* ── Tech & Google ── */
  {
    category: 'technical',
    question: 'Do you help me show up in Google AI answers and AI search?',
    answer:
      'Yes. Google, ChatGPT, and Perplexity now answer many searches with AI before anyone clicks. We lay out your content as clear questions and answers, add schema markup, the JSON-LD code that helps ChatGPT, Perplexity, Gemini and Google AI Overviews trust you, and write facts they can quote, so they point to your business. It is part of every plan, not an extra.',
  },
  {
    category: 'technical',
    question: 'What technical work do you handle?',
    answer:
      'We make sure Google can find and read every page, your site loads fast, your schema markup is correct, your XML sitemap and internal links are tidy, and the right pages show up instead of duplicates. We can do it on your site directly, or hand your developer a clear, ordered to-do list.',
  },
  {
    category: 'technical',
    question: 'Will SEO work on my WordPress, Shopify, or custom site?',
    answer:
      'Yes, we work with whatever you have. We know WordPress and Shopify inside out, and we can often work directly on modern custom sites too. Our first check finds anything about your setup that needs care, so there are no surprises later.',
  },
  {
    category: 'technical',
    question: 'Do you fix site speed?',
    answer:
      'Yes. A fast site helps you rank and helps more visitors turn into customers, so speed is part of the technical work. Most people in India search on a phone, so we make sure your site is quick on mobile. If the slowness is built into the site, we tell you honestly.',
  },
  {
    category: 'technical',
    question: "What's the difference between technical SEO and on-page SEO?",
    answer:
      'Technical SEO is the plumbing: a fast site that Google can read and trust. On-page SEO is what people see on each page, like the headings, the words, and the links between pages. You need both. A fast site with thin content will not rank, and great content on a broken site will not either. We fix the plumbing first, then improve the pages.',
  },
  /* ── Choosing an Agency ── */
  {
    category: 'choosing',
    question: 'How do I choose the best SEO agency in India?',
    answer:
      'Look past the ranking screenshots. The best SEO agency in India for you ties its work to real leads and sales, sends a report you can actually read, builds links the safe way, and never locks you into a year. Ask them to explain, in plain words, exactly what they will do in your first 90 days. If they cannot, keep looking.',
  },
  {
    category: 'choosing',
    question: 'Do I need an "SEO agency near me", or does location not matter?',
    answer:
      "For most businesses, location does not matter. SEO is done online, and Google decides your rankings, not where your agency sits. Searching \"SEO agency near me\" only helps if you want the odd face-to-face meeting. We work with businesses all over India through a shared workspace and a monthly call.",
  },
  {
    category: 'choosing',
    question: 'Should I hire an in-house SEO person in India or work with an agency?',
    answer:
      'A good in-house SEO person in India costs about ₹8 to 15 lakh a year plus tools, and one person rarely does the technical, content, and link work equally well. A team gives you all of it for far less, and you can grow or pause any time. Many clients start with FactoryJet and only hire in-house once SEO is clearly working.',
  },
  {
    category: 'choosing',
    question: 'Is cheap SEO worth it, or does it cause problems later?',
    answer:
      'Cheap SEO is cheap because it skips the parts that matter: real content, safe links, proper technical work. It often leans on bought links or copied text that can get you punished by Google months later. We are not the cheapest, and we are honest about why. The most expensive SEO is the kind you have to pay someone else to undo.',
  },
  /* ── Reports & Ownership ── */
  {
    category: 'reporting',
    question: 'What does your monthly report look like?',
    answer:
      'One page you can read in five minutes: the searches that moved and why, the visits that turned into customers (not just total visits), the leads we can trace to Google, and the three things we will do next month. The full numbers are there too if you want to dig in.',
  },
  {
    category: 'reporting',
    question: 'Do I own the content and links you create?',
    answer:
      'Yes, all of it. Every page, plan, and piece we make is yours and lives on your own website. The links point to your site. If you ever stop working with us, you keep everything. There is no special software you must keep paying for.',
  },
  {
    category: 'reporting',
    question: 'How do you measure success?',
    answer:
      'By leads and sales, not rankings for their own sake. We agree the searches that matter and what counts as a lead up front, set up Google’s free tools properly, and report on the numbers that map to your sales. A number-one ranking that brings no enquiries is just a vanity number, and we will say so.',
  },
  {
    category: 'reporting',
    question: 'Who works on my account?',
    answer:
      'A small, senior team, not a junior handed your account on day two. FactoryJet is founder-led, so you talk to the people doing the strategy and the technical work. AI handles the scale; people handle the judgement, the writing, and the relationship.',
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'choosing',
    question: 'Who is the best SEO company in India?',
    answer:
      'For small and mid-size businesses, FactoryJet makes a strong case: the same engineers who build fast websites do the SEO work, you get a clear monthly report, and there is no long contract. But the best SEO services company in India for you depends on what you sell: the best SEO services agency in India for a local shop is different from the right partner for a national brand. Whoever you compare, use three checks: do they explain the plan in simple words, do they show real results with numbers, and can you talk to the person doing the work? The best SEO experts in India, and the best SEO services in India generally, pass all three.',
  },
  {
    category: 'choosing',
    question: 'What are the top 10 SEO agencies in India?',
    answer:
      'Lists of the top 10 SEO agencies in India usually mix big national firms with small specialist teams, and most are written by the agencies themselves. FactoryJet competes in that set for small and mid-size businesses. The same advice applies to the top 10 SEO companies in India, the top 10 SEO services in India, and the top 10 local SEO services in India: treat any list as a starting point, then ask each name for one case study with real numbers and the price in writing.',
  },
  {
    category: 'pricing',
    question: 'How much does SEO cost in India?',
    answer:
      'SEO cost in India varies a lot depending on competition and scope; FactoryJet scopes a monthly plan to your site and gives you an exact price after a free check. If you ask an AI assistant to recommend an affordable SEO agency, it will name agencies that show proof, which is exactly how you should shortlist too. Be careful with rock-bottom quotes: very cheap SEO is usually copied templates with new logos.',
  },
  {
    category: 'included',
    question: 'Do you also handle local SEO, ecommerce SEO, technical SEO, and link building?',
    answer:
      'Yes: all four live inside one FactoryJet plan. The best local SEO services in India manage your Google Business Profile every week, not once a quarter, that is also the test for any best local SEO company in India claim. The best ecommerce SEO agency in India works on product and category pages, not just blogs: the same test applies to best ecommerce SEO services in India claims. The best technical SEO agency in India shows you crawl data and speed scores. And the best link building services in India earn real mentions in real publications, not bulk paid links.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: SEO_FAQ_ITEMS.map((it) => ({
    '@type': 'Question',
    name: it.question,
    acceptedAnswer: { '@type': 'Answer', text: it.answer },
  })),
};

const SEO_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Local SEO Agency' },
  { label: 'Freelancer' },
  { label: 'DIY' },
] as const;

const SEO_COMPARISON_ROWS = [
  {
    feature: 'Long contracts',
    values: ['None, monthly', '6 to 12 months typical', 'Varies', 'N/A'],
  },
  {
    feature: 'Gets you into Google AI answers',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Fast site Google can read',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Real links, no spammy tricks',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Reports you can actually read',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'You keep all content & links',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="diy" kind="yes" />,
    ],
  },
  {
    feature: 'Run by senior people, founder-led',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function SeoHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="seo-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="seo-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="seo_hero" />}
          eyebrow="SEO COMPANY IN INDIA"
          headline="The SEO Company in India That Brings Leads, Not Just Rankings"
          lead="Most SEO companies in India still chase the old Google. But Google now shows an AI answer right at the top, and 'near me' searches own the local map. FactoryJet uses AI plus senior people to help Indian small businesses show up in all three: the map, the normal results, and the AI answers. Then we prove it in a report you can read in five minutes. No long contracts, and you keep every page, link, and ranking we build."
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          trustItems={[
            "Picked up by Google AI answers",
            'No long contracts',
            '500+ sites done',
          ]}
          rightSlot={<HeroBrowserMockup badgeLabel="Fast site" badgeCity="India" />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          variant="statement"
          eyebrow="BY THE NUMBERS"
          headline="India's Trusted SEO Company, 500+ Sites, 4.9 Google Review Rating"
        />

        {/* ── 4. WHAT SEO INCLUDES ─────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="WHAT'S INCLUDED"
          headline="What We Actually Do When We Do Your SEO"
          lead="SEO is not one thing. It is six jobs that have to work together. A perfect, fast site with no content will not show up. Great content on a slow site Google cannot read will not show up either. We do all six."
          sectors={[
            {
              name: 'Technical SEO',
              description:
                'Making your site fast and easy for Google to read: quick loading, your schema markup (the JSON-LD code that explains your pages to Google), a tidy XML sitemap, and no duplicate or missing pages. This is the base everything else sits on.',
              example: 'Speed, clean code, easy for Google to read.',
              linkLabel: 'Explore Technical SEO',
              linkHref: '/seo/technical-seo',
            },
            {
              name: 'On-Page SEO',
              description:
                'Getting each page right: the title, the headings, the words that match what people search, enough useful detail, and links to the pages that win you customers.',
              example: 'Better pages + smart internal links.',
            },
            {
              name: 'Off-Page / Link Building',
              description:
                'Earning real links from genuine websites with real visitors, through PR and honest mentions. No spammy link networks, no bought links, nothing that risks a punishment from Google.',
              example: 'Real links from trusted sites.',
              linkLabel: 'Explore Link Building',
              linkHref: '/seo/link-building',
            },
            {
              name: 'Local SEO + Google Business Profile',
              description:
                'Getting you into the top three on the map for "near me" searches: your Google Business Profile (the free listing) set up and looked after, your details matching everywhere, and a plan for reviews. Vital for shops and local services.',
              example: 'Top of the map + Google listing.',
              linkLabel: 'Explore Local SEO',
              linkHref: '/seo/local-seo',
            },
            {
              name: 'Content SEO',
              description:
                'Helpful pages and guides, planned with AI and written by a real editor, that build trust around what you do. Every piece targets a real search and a real buyer question.',
              example: 'Guides that answer buyer questions.',
            },
            {
              name: 'AI Overviews Optimisation',
              description:
                'Setting up your content so Google AI answers, ChatGPT, and Perplexity point to your business: clear questions and answers, the right hidden code, and facts they can quote.',
              example: 'Get named by AI, not skipped.',
              linkLabel: 'Explore AI SEO',
              linkHref: '/ai-seo',
            },
          ]}
        />

        {/* ── 5. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Small Businesses Pick FactoryJet for SEO"
          lead="Most Indian SEO agencies sell you a 12-month contract, a junior manager, and a 40-page report nobody reads. We are different: we use AI plus senior people, we are founder-led, we work month to month, and we are honest about what SEO can and cannot do for your business."
          pillars={[
            {
              icon: '🤖',
              title: 'AI plus real people, not AI spam.',
              body: 'We use AI where it truly helps, like research, content plans, and reports, and put experienced people on the strategy, writing, and technical work that actually moves rankings. You get the speed of AI with the judgement of a senior team, at a price a big agency cannot match.',
            },
            {
              icon: '🛡️',
              title: 'No dodgy tricks. Ever.',
              body: 'No spammy link networks, no bought links, no throwaway pages, nothing that ranks you for six months and then gets you punished. We build SEO the slow, lasting way: solid basics, real content, real links, because we want you ranking next year, not just next month.',
            },
            {
              icon: '📊',
              title: 'Reports in plain words.',
              body: 'One page a month: the searches that moved, the visits that turned into customers, the leads we can trace to Google, and the three things we will do next. No vanity numbers, no jargon, no lock-in. We keep clients by showing progress, not by trapping them.',
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR SEO PROCESS"
          headline="How We Run Your SEO, Step by Step"
          lead="We check before we plan. We fix the basics before we add content. And we report from week one, so you always know what we are doing and why."
          stages={SEO_JOURNEY_STAGES}
          closingNote="5 STEPS · AI PLUS REAL PEOPLE · MONTH TO MONTH · NO SPAMMY LINKS · REPORTS YOU'LL READ"
        />

        {/* ── 7. RECENT WORK (coming soon) ─────────────────────────────────── */}
        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.5]"
            aria-hidden="true"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p
              className="font-fj-mono font-medium uppercase text-[#B23E13]"
              style={{ fontSize: '11px', letterSpacing: '0.14em' }}
            >
              RECENT WORK
            </p>
            <h2
              className="fj-display mt-3 font-semibold text-fj-ink"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
            >
              SEO results are on the way
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              We are putting together real SEO results, with rankings, visits, and leads, from live FactoryJet work. For now, it all sits on the same work behind 500+ websites we have built: solid basics, real content, and a 4.9 average Google review rating.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]"
                style={{ fontSize: '0.9375rem' }}
              >
                See our website portfolio →
              </a>
            </div>
          </div>
        </section>

        {/* ── 8. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Local Agency vs. Freelancer vs. DIY"
          lead="There are four ways to do SEO in India. Here is the honest comparison: price, contracts, what you actually get, and what you keep at the end."
          pullQuote={{
            stat: 'No lock-in',
            caption:
              'the same AI SEO that local agencies sell on a rigid 12-month deal, run month to month. Cancel any time, and you keep every page, link, and ranking we build.',
          }}
          columns={SEO_COMPARISON_COLUMNS}
          rows={SEO_COMPARISON_ROWS}
          footer="Prices reflect typical Indian SEO rates as of 2025. FactoryJet plans run month to month, with 30 days notice to pause or stop."
        />

        {/* ── 9. CITIES WE SERVE ───────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="CITIES WE SERVE"
          headline="SEO Built for Your City"
          lead="Competition, how people search, and the searches that bring buyers are different in every city. We build city-by-city SEO for India's toughest markets, and add more cities as we grow."
          sectors={[
            {
              name: 'SEO Agency in Mumbai',
              description:
                "India's toughest SEO market. Online brands in BKC, banks and finance in Nariman Point, exporters in Lower Parel. We build a Mumbai-specific plan for the map, the normal results, and Google AI answers.",
              example: 'Explore SEO in Mumbai',
              linkLabel: 'Explore SEO in Mumbai',
              linkHref: '/seo/mumbai',
            },
            {
              name: 'SEO Agency in Delhi',
              description:
                'Three markets in one city. Handicraft and jewellery exporters selling to the US and Europe, the Nehru Place and Sadar Bazaar trade supplying all of India, and coaching that draws students nationwide.',
              example: 'Explore SEO in Delhi',
              linkLabel: 'Explore SEO in Delhi',
              linkHref: '/seo/delhi',
            },
            {
              name: 'SEO Agency in Bangalore',
              description:
                'SEO that ranks against well-funded rivals. Software firms in Koramangala, IT in Whitefield, online brands in Indiranagar. Built to win at home and abroad.',
              example: 'Explore SEO in Bangalore',
              linkLabel: 'Explore SEO in Bangalore',
              linkHref: '/seo/bangalore',
            },
            {
              name: 'SEO Company in Ahmedabad',
              description:
                'An export and factory city. Pharma and denim exporters selling to 100+ countries, chemical and engineering makers supplying India, and local services across the city.',
              example: 'Explore SEO in Ahmedabad',
              linkLabel: 'Explore SEO in Ahmedabad',
              linkHref: '/seo/ahmedabad',
            },
            {
              name: 'SEO Agency in Pune',
              description:
                "Built for Pune. IT in Hinjewadi, car-part makers in Chakan and PCMC, premium online brands in Koregaon Park. Strong on factory and B2B searches, plus the local map.",
              example: 'Explore SEO in Pune',
              linkLabel: 'Explore SEO in Pune',
              linkHref: '/seo/pune',
            },
            {
              name: 'SEO Company in Noida',
              description:
                'North India’s tech and media hub. IT and software in the Sector 62 area, online brands along the Expressway, ranking sharper than well-funded rivals.',
              example: 'Explore SEO in Noida',
              linkLabel: 'Explore SEO in Noida',
              linkHref: '/seo/noida',
            },
            {
              name: 'SEO Company in Jaipur',
              description:
                'An export city wrapped in tourism. Gem, jewellery, and handicraft exporters selling to the US and Europe, hotels serving travellers, and IT at Mahindra World City.',
              example: 'Explore SEO in Jaipur',
              linkLabel: 'Explore SEO in Jaipur',
              linkHref: '/seo/jaipur',
            },
            {
              name: 'SEO Agency in Vadodara',
              description:
                'Heavy industry and exports. Power equipment, petrochemicals, and pharma selling to power companies, big contractors, and buyers worldwide. The least crowded market on this list.',
              example: 'Explore SEO in Vadodara',
              linkLabel: 'Explore SEO in Vadodara',
              linkHref: '/seo/vadodara',
            },
            {
              name: 'SEO Agency in Chennai',
              description:
                'A making-and-exporting city with a large IT belt. Car and parts makers in Sriperumbudur, IT along OMR, and hospitals that draw patients from across South India and abroad.',
              example: 'Explore SEO in Chennai',
              linkLabel: 'Explore SEO in Chennai',
              linkHref: '/seo/chennai',
            },
            {
              name: 'SEO Agency in Kolkata',
              description:
                'The trading centre of East India. Tea and jute exporters, engineering suppliers in Howrah, IT in Salt Lake Sector V, and a large education market that searches year round.',
              example: 'Explore SEO in Kolkata',
              linkLabel: 'Explore SEO in Kolkata',
              linkHref: '/seo/kolkata',
            },
          ]}
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="INDUSTRIES WE SERVE"
          headline="SEO Services for Every Major Indian Business Sector"
          lead="Different industries compete on different searches and different buyer journeys. We have done SEO across all of these."
          sectors={[
            {
              name: 'Online Stores & Brands',
              description:
                'Category and product pages, the hidden product details Google reads, big menus kept tidy, and buying guides that bring buyers, not just browsers. On Shopify or custom stores.',
              linkLabel: 'Explore Ecommerce SEO',
              linkHref: '/seo/ecommerce-seo',
            },
            {
              name: 'Professional Services',
              description:
                'CA firms, lawyers, consultants, and agencies. Trust-building content and a strong spot on the local map that turn research into booked meetings.',
            },
            {
              name: 'Healthcare',
              description:
                'Clinics, labs, and health apps. Local SEO, appointment-ready searches, and trustworthy, careful content.',
            },
            {
              name: 'Retail',
              description:
                'Shops with many branches. Top-of-the-map across every branch, Google listings looked after, and store-finder pages.',
            },
            {
              name: 'Restaurants & Hospitality',
              description:
                'Win "near me" searches, look great on Google Maps, build reviews, and make menus and bookings easy to find, where the map is the whole game.',
            },
            {
              name: 'Real Estate',
              description:
                'Pages for each project and area, searches tuned to small local markets, content that follows the rules, and forms that send enquiries to the right team.',
            },
          ]}
        />

        {/* ── PRICING removed 2026-05-29 (Bhavesh), price appears only in the FAQ ── */}

        {/* ── 12. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What India's founders say about working with FactoryJet"
          region="in"
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="SEO Questions, Answered Simply"
          lead="The questions every business owner asks before starting SEO, answered here in plain words."
          categories={SEO_FAQ_CATEGORIES}
          items={SEO_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Rank on Google and Get Named by AI?"
          sub="Google search is changing faster than it has in years. The businesses that win in 2026 are the ones getting ready for AI answers and local searches now, while their rivals are still buying links. Start with a free check, and we will show you exactly where you stand and what the first 90 days look like."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          objectionHandler="No long contracts. You keep everything we build. Reports you'll actually read in five minutes."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
