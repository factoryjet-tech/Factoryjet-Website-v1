import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import CityContextSection from '@/components/v2/CityContextSection';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import PortfolioShowcase from '@/components/v2/PortfolioShowcase';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import HeroBrowserMockup from '@/components/v2/HeroBrowserMockup';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import GetFreeQuoteCTA from '@/components/v2/GetFreeQuoteCTA';
import WebDesignCityLinksIN from '@/components/v2/WebDesignCityLinksIN';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Web Design Company in Kolkata | FactoryJet',
  description:
    'Web design company in Kolkata for jute and tea exporters, Sector V IT firms and Burrabazar traders. Custom websites, fixed price, 7-day delivery.',
  keywords: [
    'web design company in Kolkata',
    'website design Kolkata',
    'web development company Kolkata',
    'website design company Kolkata',
    'professional website design Kolkata',
    'web design Salt Lake Sector V',
    'web design Rajarhat New Town',
    'jute tea website design Kolkata',
    'logistics company website Kolkata',
    'Next.js web development Kolkata',
    'web design agency Kolkata',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Kolkata | FactoryJet',
    description:
      'Web design company in Kolkata building Next.js sites with SEO and GA4 set up. 7-day delivery for traders, IT firms and retailers across the city.',
    url: 'https://factoryjet.com/web-design/kolkata',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet website design work for Kolkata businesses',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Kolkata | FactoryJet',
    description:
      'Web design company in Kolkata. Next.js build, SEO and GA4 set up, 7-day delivery.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/kolkata',
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
const PAGE_MODIFIED = '2026-11-07';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/web-design/kolkata#webpage',
  url: 'https://factoryjet.com/web-design/kolkata',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
  '@id': 'https://factoryjet.com/web-design/kolkata#organization',
  name: 'FactoryJet',
  description:
    'Web design company in Kolkata. We build quick-loading, search-ready websites for jute and tea exporters, Sector V IT firms, port logistics and retail brands. 7-day delivery.',
  url: 'https://factoryjet.com/web-design/kolkata',
  email: 'connect@factoryjet.com',
  areaServed: [
    { '@type': 'City', name: 'Kolkata' },
    { '@type': 'City', name: 'Howrah' },
    { '@type': 'City', name: 'Salt Lake' },
  ],
  serviceType: 'Web Design and Development',
  
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Kolkata Website Design and Build',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Starter Website',
        description: 'Five-page site for a small Kolkata firm: works on any phone, basic search setup, enquiry form.',
      },
      {
        '@type': 'Offer',
        name: 'Growth Website',
        description: 'A 10–15 page site with a blog editor, lead forms, GA4 and fuller search work.',
      },
      {
        '@type': 'Offer',
        name: 'Custom Website',
        description: 'Bespoke Next.js build that can add online selling, bookings or AI features.',
      },
    ],
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const KOL_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Buyer and market mapping',
    description:
      "First we pin down who must trust your site. For a Kolkata firm that might be a European importer pricing jute bags, a tea buyer checking garden grades, a US client vetting a Sector V vendor, or a shopper near Park Street. We study the rivals they will compare you with, then fix the page list and copy plan.: Days 1–2",
  },
  {
    number: '02',
    title: 'Wireframes you sign off',
    description:
      'Layouts are drawn in Figma for a phone screen first, then widened for laptops. You see every button and form placed before coding begins, and nothing moves to build until you approve it.: Days 3–4',
  },
  {
    number: '03',
    title: 'Coding the site',
    description:
      'We code the pages in Next.js and serve them through Cloudflare\'s network, so they open quickly on mobile data. Enquiry forms, WhatsApp buttons, catalogue pages and any tools you already use get connected here. Page weight is checked on every change.: Days 5–6',
  },
  {
    number: '04',
    title: 'Copy and search setup',
    description:
      'Headings and body copy get polished, images are compressed to WebP, and each page receives its own title, meta text and structured data. We submit the sitemap to Search Console and add Kolkata place names where buyers would search for them.: Day 6–7',
  },
  {
    number: '05',
    title: 'Go-live and keys handed over',
    description:
      'We point your domain to Cloudflare, switch on GA4 and Tag Manager, and confirm Search Console. A recorded walkthrough shows your staff how to edit the site. Thirty days of fixes after launch come included.: Day 7+',
  },
];

const KOL_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Kolkata Local' },
  { key: 'support',   label: 'Support & Ownership' },
];

const KOL_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'What will a website cost my Kolkata business?',
    answer:
      "There is no fixed menu. Cost moves with page count, how crowded your search market is, and add-ons such as an online shop, bookings or AI tools. After a free call you get one written quote that does not change, and the code belongs to you once it is paid for.",
  },
  {
    category: 'pricing',
    question: 'How many days does the build take?',
    answer:
      'Seven days from kickoff to a live site. Days one and two cover research and layout, days three to six cover design and code, and day seven covers copy, search setup and launch. The count begins once your logo, photos and text are with us.',
  },
  {
    category: 'pricing',
    question: 'Why pick FactoryJet over a web agency in Kolkata?',
    answer:
      "You deal with the people who design and code your site, with no account layer in between. Every build gets a Figma design, Next.js code and a Lighthouse check before launch. The quote is fixed in writing, so the price you agree is the price you pay.",
  },
  {
    category: 'pricing',
    question: 'What sits inside the 7-day delivery promise?',
    answer:
      'It covers the work in our hands: design, build, copy and launch. Waiting on your content or approvals sits outside it. Our on-time record across all projects is 97%.',
  },

  /* ── What's Included ── */
  {
    category: 'included',
    question: "What do I get in a standard project?",
    answer:
      'Research, a Figma design, Next.js code, starter copy, search setup with schema, meta text and sitemap, GA4 tracking and thirty days of fixes after launch. The full code lands in your own GitHub account on the day the site goes live.',
  },
  {
    category: 'included',
    question: 'Will you write my website text?',
    answer:
      'We write the core copy: headlines, the hero block and service summaries. Longer search-focused articles can be added for a fee. Before coding starts you receive a short brief listing what we need from you.',
  },
  {
    category: 'included',
    question: 'Is hosting part of the deal?',
    answer:
      "Sites go live on Cloudflare Pages, which costs nothing for most business sites. The Cloudflare account is opened in your name and we set it up. We charge no monthly hosting fee.",
  },
  {
    category: 'included',
    question: 'Can my staff edit pages after launch?',
    answer:
      'Yes. Growth and Custom projects come with a headless CMS, Sanity or Contentful, so staff can change text and images without opening any code.',
  },

  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'Can the site rank on Google for Kolkata searches?',
    answer:
      'Search basics go into every build: schema markup, page titles and meta text, green Core Web Vitals on phones, internal links, a submitted sitemap and WebP images. Searches for your own brand name usually show the site within one to two weeks.',
  },
  {
    category: 'technical',
    question: 'Which technology do you use?',
    answer:
      "Next.js, served from Cloudflare's worldwide CDN. Pages load in under 1.5 seconds on Indian 4G, where a typical WordPress site takes 4–6 seconds. Google scores page speed through Core Web Vitals, so the faster site has an edge in rankings.",
  },
  {
    category: 'technical',
    question: 'Will it work well on phones?',
    answer:
      'Phones come first. We design at 375px wide before the laptop view, and every build must reach Lighthouse 90+ with green Core Web Vitals on mobile before launch. Images are WebP, served through Cloudflare and loaded only when scrolled into view.',
  },
  {
    category: 'technical',
    question: 'Will you connect Google Analytics and Search Console?',
    answer:
      'Yes. GA4 and Tag Manager go live before launch. We track the actions that matter to you, such as form sends, WhatsApp taps and enquiry clicks, from the first day. Search Console is verified and the sitemap submitted.',
  },

  /* ── Kolkata Local ── */
  {
    category: 'local',
    question: 'Do you make websites for Kolkata jute and tea exporters?',
    answer:
      "Yes. Exporters of jute goods and tea need a site an overseas buyer can vet without a phone call. We set out product ranges, grades, packing options and certificates, add a sample request form, and write the pages in English for buyers searching from Europe, the US, the Gulf and Southeast Asia.",
  },
  {
    category: 'local',
    question: 'Can you build sites for IT and BPO firms in Salt Lake Sector V?',
    answer:
      "Yes. Sector V and New Town hold a large share of Bengal's IT services, BPO and SaaS firms, and most of them sell to clients abroad. Their sites need clear service pages, delivery models, case study slots and a contact path suited to a long B2B sale.",
  },
  {
    category: 'local',
    question: "Do you understand Kolkata's business areas well enough to write about them?",
    answer:
      "Each project starts with research on where your buyers are. Kolkata's trade is spread out: offices around Dalhousie and BBD Bagh, wholesale lanes in Burrabazar, shops along Park Street and New Market, IT parks in Sector V and fresh offices in New Town. Naming the right areas in copy and schema helps your pages match nearby searches.",
  },
  {
    category: 'local',
    question: 'How do you differ from Kolkata web agencies?',
    answer:
      "Many agencies keep prices off their sites and quote long timelines. We send a fixed quote before you commit, write the 7-day delivery date into the agreement and build on Next.js instead of WordPress. You end up with a quicker site, sooner, and code that is yours.",
  },

  /* ── Support & Ownership ── */
  {
    category: 'support',
    question: 'Who owns the finished website?',
    answer:
      'You do, in full. The Next.js code goes to your GitHub on launch day, along with every Figma file and every account login. There is no retainer to sign and no platform that holds your site hostage.',
  },
  {
    category: 'support',
    question: 'What help do I get once the site is live?',
    answer:
      'The first thirty days of fixes and small edits cost nothing. After that you can choose a monthly maintenance plan with code changes, same-day replies on bugs and one engineer who knows your site. Maintenance plans also include a performance and Core Web Vitals check each quarter.',
  },
  {
    category: 'support',
    question: 'What if the site breaks after launch?',
    answer:
      'During the first thirty days we fix bugs free, usually within a day. Your site runs as static files on Cloudflare\'s network, so the usual server crashes behind downtime do not affect it.',
  },
  {
    category: 'support',
    question: 'Can Kolkata firms keep you on a monthly retainer?',
    answer:
      'Yes. A retainer pays for ongoing code work, text changes, new landing pages, search work and upkeep. Retainer clients are scheduled first and keep the same engineer.',
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best web design agency in Kolkata?',
    answer:
      'Judge any Kolkata agency, us included, on three things: live sites you can open and test, speed scores you can check yourself, and a written price that stays fixed. FactoryJet builds custom sites in 7 days at a fixed price, and our past work is open for you to test. Shortlist the agency that passes all three checks.',
  },
  {
    category: 'pricing',
    question: 'Should I hire web designer in Kolkata or use an agency?',
    answer:
      'A freelancer can handle a single-page site well. A business site with forms, tracking and search setup needs design, code and support together, and a small team covers that at a fixed price. If you hire web designer in Kolkata as a freelancer, get the scope and fee written down first.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: KOL_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const KOL_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Kolkata Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const KOL_COMPARISON_ROWS = [
  {
    feature: 'Time to launch',
    values: ['7 days', '6–16 weeks', '3–12 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Bespoke design in Figma',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ka" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Built on Next.js',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ka" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Search setup included',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ka" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Mobile Lighthouse 90+',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ka" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GA4 and Tag Manager set up',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ka" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Price fixed in writing',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ka" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Code handed to your GitHub',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ka" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Live in 7 days',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ka" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `https://factoryjet.com/web-design/kolkata#howto`,
  name: `How FactoryJet takes a Kolkata website live in 7 days`,
  description: `The seven-day plan we follow to design, build and launch a website for a Kolkata business.`,
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 | Kickoff call',
      text: `We hear how your firm sells, who buys from you in Kolkata and abroad, and what the site must achieve.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 | Page plan',
      text: `We set the page structure, check the Kolkata rivals your buyers compare you with, pick target search terms and draft first copy.`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3–4 | Visual design',
      text: 'Home and inner page designs go to you through a preview link. Your comments are worked in within a day.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5–6 | Code and search setup',
      text: `The signed-off design becomes quick, phone-first code. We add schema naming Kolkata, then connect Analytics and Search Console.`,
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7 | Go-live',
      text: 'Final checks on five devices, then launch. You get written handover notes and a 30-minute training call.',
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `https://factoryjet.com/web-design/kolkata#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/kolkata`,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function KolkataWebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="kol-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        id="kol-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Kolkata', url: 'https://factoryjet.com/web-design/kolkata' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Kolkata', url: 'https://factoryjet.com/web-design/kolkata' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="web_design_kolkata_hero" />}
          eyebrow="WEB DESIGN · KOLKATA"
          headline="Website Design in Kolkata for Jute and Tea Exporters, Sector V IT Firms and Burrabazar Traders"
          lead="Kolkata trades in old and new ways at once. Jute mills line the Hooghly, the tea auctions still set prices, Burrabazar moves goods across the east, and Sector V sells software to the world. Each of these buyers checks you online first. FactoryJet designs in Figma, codes in Next.js, hands you the full code and goes live in 7 days."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '7-day delivery',
            '500+ businesses built',
          ]}
          rightSlot={<HeroBrowserMockup />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="500+ businesses in India, the US, the UK and the UAE have a FactoryJet website" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ websites built. 12 years of web engineering. 7-day delivery."
          description="We have built sites for Shopify sellers, B2B suppliers and DTC brands in India, the US, the UK and the UAE. Every project has a fixed price, a 7-day delivery date and full code handover."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="KOLKATA MARKET"
          headline="What Kolkata Buyers Check Before They Call You"
          leadParagraphs={[
            "Kolkata is the business centre of eastern India, and the MoSPI figure below puts its metro economy above $150 billion. Old trade still runs through Burrabazar's wholesale lanes and the offices around BBD Bagh. Newer money sits in the IT parks of Salt Lake Sector V and New Town. The port on the Hooghly ships jute, tea and other goods from Bengal, the Northeast and the landlocked countries beyond.",
            "So one city produces very different website briefs. A jute bag maker supplying European retailers needs grades, certificates and a sample form. A Sector V software firm needs case studies a US buyer will believe. A freight forwarder near the port needs trade lanes and a quote form. A Park Street restaurant needs a menu that opens fast on a phone. We plan each site around the buyer who will judge it.",
            "Plenty of established Kolkata firms still run on referrals and an old website. Buyers from Delhi, Dubai or Hamburg now search before they phone, so a slow or dated site loses them before any conversation starts.",
          ]}
          stats={[
            {
              value: '$150B+',
              label: 'Kolkata metro economy, the largest in eastern India',
              sourceUrl: 'https://mospi.gov.in/',
              sourceLabel: 'MoSPI',
            },
            {
              value: 'Kolkata Port',
              label: 'India\'s oldest working port, shipping jute, tea and goods for the east',
              sourceUrl: 'https://www.kolkataporttrust.gov.in/',
              sourceLabel: 'Kolkata Port Trust',
            },
            {
              value: '5L+ MSMEs',
              label: 'MSMEs registered in West Bengal, one of the country\'s biggest small-business bases',
              sourceUrl: 'https://msme.gov.in/',
              sourceLabel: 'Ministry of MSME',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · KOLKATA"
          headline="What a Kolkata Business Needs From Its Website"
          lead="Kolkata firms sell to two kinds of buyer. Export and B2B buyers spend weeks comparing suppliers of jute, tea and engineered goods. Local shoppers decide in minutes on a phone. We plan the site around whichever buyer pays your bills."
          body={
            <>
              <p>
                
                Jute mills, tea exporters, commodity traders and Howrah fabricators sell to buyers they may never meet. Those buyers want proof before they write: certificates, product grades, capacity, packing details and a simple way to ask for a quote. We build these sites around a product catalogue, a credentials page and an RFQ form, written in English for importers in Europe, the US, the Gulf and Southeast Asia.
              </p>
              <p>
                
                IT and BPO firms in Sector V and New Town face a different test. Their clients in the US and UK compare a dozen vendors, so service pages, delivery models and case studies carry the sale. Freight forwarders near the port need lane coverage and document handling spelled out. Shops and food brands around Park Street and New Market need fast mobile pages and a clear order or call button.
              </p>
              <p>
                
                Each Kolkata project runs through research, Figma design, Next.js code, search setup, GA4 and thirty days of support. You keep the code, the design files and the accounts.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  
                  Who visits, and what they need.
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    type: 'B2B / Export & Trading',
                    need: 'Grades + certificates + quote form',
                    area: 'Burrabazar · Dalhousie · BBD Bagh · Port Trust Area',
                    colour: '#F05A28',
                  },
                  {
                    type: 'IT / Tech & Services',
                    need: 'Case studies + service pages + contact path',
                    area: 'Salt Lake Sector V · Rajarhat New Town · Eco Park',
                    colour: '#0F0F12',
                  },
                ].map((row) => (
                  <div key={row.type} className="px-7 py-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="h-2 w-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: row.colour }}
                        aria-hidden="true"
                      />
                      <p
                        className="font-fj-body font-semibold text-fj-ink"
                        style={{ fontSize: '0.9375rem' }}
                      >
                        {row.type}
                      </p>
                    </div>
                    <p
                      className="font-fj-body text-fj-neutral-500 mb-1"
                      style={{ fontSize: '0.875rem' }}
                    >
                      {row.need}
                    </p>
                    <p
                      className="font-fj-mono font-medium text-fj-neutral-400"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.06em' }}
                    >
                      {row.area}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden="true" />
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}
                >
                  
                  One build standard. Copy shaped around who buys.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 6. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Kolkata Firms Hire FactoryJet"
          lead="Many Kolkata agencies quote long timelines and keep prices off their sites. We give a fixed quote before you commit, write the 7-day date into the agreement and build on Next.js. That means quicker pages, no plugin bills each month and code you own."
          pillars={[
            {
              icon: '⚡',
              title: 'Seven days, written into the agreement',
              body: "Exporters plan around shipping seasons, and retailers plan around Durga Puja. A site that takes three months can miss both. We write the 7-day launch date into your agreement, and 97% of our projects have launched on time.",
            },
            {
              icon: '🏗️',
              title: 'Why we build on Next.js',
              body: 'A WordPress page runs PHP on a server and makes 40–60 database calls each time it loads. Next.js serves ready-made files from Cloudflare\'s network. On Indian 4G that means under 1.5 seconds against 4–6 seconds for typical WordPress, and Google counts that speed in Core Web Vitals.',
            },
            {
              icon: '📋',
              title: 'One price, set before work starts',
              body: "You get a fixed quote up front with no discovery fee and no vague estimates. Scope and price are agreed in writing, and no extra bill turns up after launch.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="Your Kolkata Website, Day by Day"
          lead="We agree on the buyer first, the phone layout second and the code third. Search and tracking go in before launch day."
          stages={KOL_JOURNEY_STAGES}
          closingNote="5 STEPS · 7 DAYS · NEXT.JS ON CLOUDFLARE · GA4 ON DAY ONE · LIVE WITHOUT DOWNTIME"
        />

        {/* ── 8. PORTFOLIO ─────────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="Two recent builds from our portfolio."
          cards={[
            {
              industry: 'Wholesale Distribution · Commerceflo',
              title: 'Belle Maison | Mumbai',
              description:
                "A Mumbai wholesaler of artificial plants and flowers, flower runners, home décor and LED lights. We built a B2B quote-to-cash store for them on Commerceflo, with tiered trade prices, quotes that convert to orders and per-account ordering.",
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Lighthouse 95+',
              stat2: 'Commerceflo · B2B',
            },
            {
              industry: 'MEP / BIM Consulting · SEO',
              title: 'Formative Concepts | Pune',
              description:
                'An MEP drafting and BIM consulting firm. We rebuilt their site on WordPress so engineers and contractors find their credentials, project portfolio and enquiry route quickly, with technical SEO aimed at B2B project leads.',
              imageSrc: '/images/portfolio/formative-concepts.webp',
              stat1: 'B2B authority site',
              stat2: 'SEO + Next.js',
            },
          ]}
          ctaHref="/portfolio"
          ctaLabel="View full portfolio"
        />

        {/* ── 9. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet Compared With a Kolkata Agency, a Freelancer and a Site Builder"
          lead="Kolkata buyers have four common ways to get a website. The table sets them side by side on time, price, quality checks and what you own at the end."
          pullQuote={{
            stat: '7 days',
            caption:
              'from kickoff to a live site, with Figma design, Next.js code, search setup and a Lighthouse check included.',
          }}
          columns={KOL_COMPARISON_COLUMNS}
          rows={KOL_COMPARISON_ROWS}
          footer="Every FactoryJet scope can be quoted at a fixed price. Book a free call and the written quote follows."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="KOLKATA × WEB DESIGN"
          headline="Websites for the Trades That Run Kolkata"
          lead="Jute and tea exporters, Sector V software firms, port forwarders, Howrah engineering units, hospitals and Park Street retail all sell to different buyers. Each needs a different site plan."
          sectors={[
            {
              name: 'Jute & Tea Trade',
              description:
                "Bengal's jute mills along the Hooghly make most of India's jute goods, and Kolkata's tea auctions handle a large share of North Indian tea. Buyers in Europe, the US and Southeast Asia want product grades, packing options, certificates and shipping terms on the page. We build catalogues with sample request forms and English copy those importers search for.",
              example:
                'Jute mills, jute bag makers and tea exporters around Burrabazar, Strand Road and the port area selling to overseas wholesale buyers.',
            },
            {
              name: 'IT & BPO',
              description:
                "Salt Lake Sector V and New Town hold most of Kolkata's IT services, BPO, KPO and SaaS firms. Their buyers in the US, UK and Europe shortlist vendors online. The site has to show services, delivery models, team strength and case studies, with a contact path suited to a long B2B deal.",
              example:
                'IT service firms, BPO units and software startups in Sector V, New Town and around Eco Park selling to clients abroad.',
            },
            {
              name: 'Logistics & Port Services',
              description:
                "The port on the Hooghly is India's oldest working port and a key route for goods to and from the Northeast, Nepal and Bhutan. Freight forwarders, customs brokers and transporters need pages that list trade lanes, licences, warehouse capacity and a quick quote form for shippers.",
              example:
                'Freight forwarders, customs brokers and transport firms working around the port and the eastern trade routes.',
            },
            {
              name: 'Retail & FMCG',
              description:
                "Kolkata shops hard around Durga Puja, and its sweet shops, sari houses and restaurants have loyal followings. Retail and food brands need pages that load fast on mobile, show products and menus clearly, and make ordering or calling one tap away. Brands selling online also need a checkout that works on cheap phones.",
              example:
                'Sari and apparel stores, sweet shops, restaurants and D2C brands around Park Street, New Market and Gariahat moving into online sales.',
            },
            {
              name: 'Healthcare & Education',
              description:
                "Patients from across eastern India and Bangladesh travel to Kolkata hospitals, and the city has a long tradition of schools and colleges. Hospitals, clinics, labs and coaching institutes need doctor and faculty profiles, facility pages, appointment or admission forms, and content that answers what patients and parents search for.",
              example:
                'Private hospitals, specialist clinics, diagnostic labs, schools and coaching institutes serving Kolkata and the wider east.',
            },
            {
              name: 'Manufacturing & Engineering',
              description:
                "Howrah's foundries and fabrication units are one of eastern India's oldest engineering bases, alongside printing, packaging and equipment makers across greater Kolkata. Procurement teams want specification sheets, machine lists, certificates and a clear enquiry form. We build catalogues sized for industrial buyers.",
              example:
                'Foundries, steel fabricators, equipment makers and packaging firms in Howrah and the industrial belts around Kolkata.',
            },
          ]}
        />

        <GetFreeQuoteCTA />
        {/* ── 12. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="Founders on what changed after launch"
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Kolkata Clients Ask Us These"
          lead="Straight answers to the points Kolkata owners raise on our first call."
          categories={KOL_FAQ_CATEGORIES}
          items={KOL_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Start Your Kolkata Website This Week"
          sub="Jute exporters, Sector V firms, port forwarders and Park Street retailers all compete for the same buyer searches. Each month on an old site hands those searches to a rival. Book a call today and you will have a page plan within 72 hours."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price. 7-day delivery. Next.js code. Every file is yours at launch."
        />

        {/* India web-design city cross-links (silo fix, 31 Jul 2026) */}

        <WebDesignCityLinksIN currentCity="kolkata" />


      </main>

      <SiteFooter locale="in" />
    </>
  );
}
