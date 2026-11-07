import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import { webDesignCityAlternatesIN } from '@/data/hreflangMap';
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
  title: 'Web Design Company in Coimbatore | FactoryJet',
  description:
    'Web design company in Coimbatore for pump and motor makers, spinning mills, Tirupur garment exporters and Avinashi Road IT firms. Live in 7 days.',
  keywords: [
    'web design company in Coimbatore',
    'website design Coimbatore',
    'web development company Coimbatore',
    'website design company Coimbatore',
    'professional website design Coimbatore',
    'web design Avinashi Road',
    'web design Peelamedu',
    'textile website design Coimbatore',
    'engineering company website Coimbatore',
    'Next.js web development Coimbatore',
    'web design agency Coimbatore',
    'pump industry website Coimbatore',
    'IT company website design Coimbatore',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Coimbatore | FactoryJet',
    description:
      'Web design company in Coimbatore building Next.js sites for engineering exporters, textile mills and IT teams, with search setup and GA4. 7-day delivery.',
    url: 'https://factoryjet.com/web-design/coimbatore',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet website design for Coimbatore businesses',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Coimbatore | FactoryJet',
    description:
      'Web design company in Coimbatore. Next.js sites for pump, textile and IT firms, live in 7 days.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/coimbatore',
    languages: webDesignCityAlternatesIN['coimbatore'],
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
  '@id': 'https://factoryjet.com/web-design/coimbatore#webpage',
  url: 'https://factoryjet.com/web-design/coimbatore',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const localBusinessSchema = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const CBE_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Buyer research',
    description:
      "A Coimbatore site might need to convince a Gulf contractor buying monoblock pumps, a European brand sourcing knitwear, a Chennai company hiring an IT vendor or a family choosing a hospital. We name your main buyer, list what they check, compare the sites you compete with and settle the page plan.: Days 1–2",
  },
  {
    number: '02',
    title: 'Page layouts',
    description:
      'Pages are drawn at phone width and then at desktop width in Figma. We place product specs, certificates and the enquiry button where a buyer expects them. Coding waits until you approve.: Days 3–4',
  },
  {
    number: '03',
    title: 'Engineering',
    description:
      'Next.js code served through Cloudflare, so a buyer in Dubai or a dealer in Erode on mobile data gets a fast page. We add product catalogues with spec sheets, quote forms, WhatsApp chat and links to any software you run.: Days 5–6',
  },
  {
    number: '04',
    title: 'Search and copy',
    description:
      'Titles, meta text, WebP images, schema for your business, products and FAQs, and internal links. The sitemap is submitted to Search Console, and the copy targets the searches buyers use for Coimbatore suppliers.: Day 6–7',
  },
  {
    number: '05',
    title: 'Handover',
    description:
      'Domain on Cloudflare, GA4 and Tag Manager live, Search Console confirmed. A recorded walkthrough shows your team how to run the site. Fixes are free for 30 days.: Day 7+',
  },
];

const CBE_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Coimbatore Questions' },
  { key: 'support',   label: 'Support & Ownership' },
];

const CBE_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'What does a website cost for a Coimbatore business?',
    answer:
      "Price tracks the work. A pump maker with forty product models and spec sheets needs more than a clinic with six pages. After a free call we send one fixed written quote. It stays fixed, and you keep the code.",
  },
  {
    category: 'pricing',
    question: 'How fast can a Coimbatore website launch?',
    answer:
      'In 7 days once your logo, photos, product data and core text reach us. Days one and two are research and planning, three and four are layouts, five and six are the build, and day seven is launch.',
  },
  {
    category: 'pricing',
    question: 'Why FactoryJet instead of a larger Coimbatore agency?',
    answer:
      "Your budget pays for design and engineering. No account managers or sales layer sit between you and the builders. You still get Figma layouts, a Next.js build and a Lighthouse audit before launch, under one fixed price.",
  },
  {
    category: 'pricing',
    question: 'What is covered by the 7-day timeline?',
    answer:
      'Design, coding, content placement and launch, the parts we run ourselves. Days spent waiting for your approvals or product data do not count. Our record so far: 97% of projects launched on the agreed date.',
  },

  /* ── What's Included ── */
  {
    category: 'included',
    question: "What does a Coimbatore web design project include?",
    answer:
      'Page planning, Figma layouts, the Next.js build, starter copy, schema and a sitemap, GA4 tracking and 30 days of free fixes. On launch day the complete source code is pushed to a GitHub account you own.',
  },
  {
    category: 'included',
    question: 'Will you write the copy?',
    answer:
      'We write headlines, the hero section and short product or service text. Long search articles are extra. Before the build we send a list of what we need from you, such as model numbers, test certificates and plant photos.',
  },
  {
    category: 'included',
    question: 'Who hosts the website?',
    answer:
      "Cloudflare Pages, on an account in your company name. Most sites fit the free tier. We set it up and charge no monthly hosting.",
  },
  {
    category: 'included',
    question: 'Can we add products or pages ourselves?',
    answer:
      'Yes. Growth and Custom tier sites include a Sanity or Contentful editor, so your sales team can add a new pump model or a new fabric range without a developer.',
  },

  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'Will the site appear on Google?',
    answer:
      'Every build ships with schema, clean titles and meta, passing mobile Core Web Vitals, internal links, a submitted sitemap and WebP images. Searches for your company name usually find the site within one to two weeks. Ranking for product terms such as submersible pump manufacturer takes ongoing content.',
  },
  {
    category: 'technical',
    question: 'What technology do you build with?',
    answer:
      "Next.js on Cloudflare's network. Pages usually load in under 1.5 seconds on Indian 4G, against 4–6 seconds for a typical WordPress site. Google measures that speed through Core Web Vitals.",
  },
  {
    category: 'technical',
    question: 'Will it work well on phones?',
    answer:
      'Yes. Layouts start at 375px wide and every build has to pass Lighthouse 90+ on mobile with green Core Web Vitals before launch. Images load as WebP from Cloudflare when a visitor scrolls to them.',
  },
  {
    category: 'technical',
    question: 'Do you set up tracking?',
    answer:
      'Yes. GA4 and Tag Manager go live with the site, with quote requests, WhatsApp taps and catalogue downloads tracked as events from day one. Search Console is verified and the sitemap submitted.',
  },

  /* ── Coimbatore Local ── */
  {
    category: 'local',
    question: 'Do you build websites for Coimbatore pump makers and textile mills?',
    answer:
      "Yes. These are the firms Coimbatore is known for. Pump and motor makers need model pages with spec sheets, ISI and ISO marks, dealer enquiry routes and export pages. Spinning mills and Tirupur knitwear exporters need product ranges, GOTS or OEKO-TEX certificates, capacity details and quote forms written for buyers in the US, EU and the Middle East.",
  },
  {
    category: 'local',
    question: 'Can you build websites for IT companies on Avinashi Road and in Peelamedu?',
    answer:
      "Yes. Software and IT services firms cluster along Avinashi Road, in Peelamedu and around the TIDEL Park and other IT parks. Their clients are often in other cities or abroad. We build service pages, case studies and enquiry routes that suit a B2B buying process.",
  },
  {
    category: 'local',
    question: "Do you know Coimbatore well enough to write local copy?",
    answer:
      "We map your area during discovery: Avinashi Road and Peelamedu for IT, Ganapathy and Singanallur for engineering workshops, SIDCO and SIPCOT estates for factories, RS Puram and Gandhipuram for retail, and the road to Tirupur for knitwear. That local detail goes into the copy and your LocalBusiness schema.",
  },
  {
    category: 'local',
    question: 'How is FactoryJet different from other Coimbatore web agencies?',
    answer:
      "Many local agencies quote late and deliver over several weeks. We fix the price before you commit, write the 7-day launch date into the agreement and hand over Next.js code that belongs to you.",
  },

  /* ── Support & Ownership ── */
  {
    category: 'support',
    question: 'Do we own the site after launch?',
    answer:
      'Yes, completely. The Next.js code goes into your GitHub on launch day with the Figma files and every login. There is no retainer to sign and no closed platform holding your site.',
  },
  {
    category: 'support',
    question: 'What support do we get after launch?',
    answer:
      'Free fixes and small changes for 30 days. After that, a monthly maintenance plan is available with same-day bug response and one engineer who already knows your code.',
  },
  {
    category: 'support',
    question: 'What if the site breaks?',
    answer:
      'Within the first 30 days we fix it free, usually inside a day. The site runs as static files on Cloudflare, which removes most causes of downtime such as overloaded servers and plugin conflicts.',
  },
  {
    category: 'support',
    question: 'Can a Coimbatore firm keep FactoryJet on a monthly retainer?',
    answer:
      'Yes. A retainer covers new product pages, trade fair landing pages, content updates, search fixes and upkeep. Retainer clients get first place in the schedule and the same engineer each month.',
  },
  {
    category: 'support',
    question: 'Can you move our current Coimbatore website to Next.js?',
    answer:
      'Yes. We move sites from WordPress, Wix, Squarespace or custom code to Next.js on Cloudflare. Each move includes a search audit, 301 redirects for every old URL and speed work, so existing rankings carry over.',
  },
  {
    category: 'local',
    question: 'Do you build online stores for Coimbatore businesses?',
    answer:
      "Yes. A pump maker selling spares to dealers and a garment brand selling to consumers both need a store. We build on Shopify or Next.js with Razorpay and Shiprocket connected. The Growth tier includes a basic product catalogue, and the Custom tier covers full checkout with stock management.",
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best web design agency in Coimbatore?',
    answer:
      'Test any shortlist on proof. For a small or mid-sized firm, FactoryJet is a strong option for the best web design company in Coimbatore: a custom site in 7 days at one written price. Ask each agency for live sites to open, speed scores to check yourself and a quote that will not grow mid-project.',
  },
  {
    category: 'pricing',
    question: 'Should I hire a freelance web designer in Coimbatore or an agency?',
    answer:
      'A freelancer can handle a one-page site. A company site needs design, coding, search setup and support, and a small team can cover all four at a fixed price. If you choose a freelancer, agree scope and fee in writing first.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: CBE_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const CBE_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Coimbatore Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const CBE_COMPARISON_ROWS = [
  {
    feature: 'Time to go live',
    values: ['7 days', '4–12 weeks', '3–10 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Custom Figma layouts',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ca" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Coded in Next.js',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ca" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Search setup at launch',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ca" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 90+ on mobile phones',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ca" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GA4 and Tag Manager configured',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ca" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Written fixed price',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ca" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Code delivered to your GitHub',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ca" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Seven-day launch',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ca" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `https://factoryjet.com/web-design/coimbatore#howto`,
  name: `From first call to a live Coimbatore website in 7 days`,
  description: `The seven-day FactoryJet build for Coimbatore engineering, textile, IT and healthcare businesses.`,
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 | Intro call',
      text: `We learn what you make or offer, who buys it and what the site must get those buyers to do.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 | Site plan',
      text: `We fix the page list, check Coimbatore competitors, choose keywords and write draft copy.`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3–4 | Layouts',
      text: 'A preview link shows the home page and inner pages. We return your changes within 24 hours.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5–6 | Build and search setup',
      text: `Approved layouts are coded as a fast, phone-first site. Coimbatore business schema is added, and GA4 and Search Console are connected.`,
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7 | Launch',
      text: 'We test on five devices, publish the site and hand over written notes with a 30-minute training call.',
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `https://factoryjet.com/web-design/coimbatore#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/coimbatore`,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function CoimbatoreWebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="cbe-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        id="cbe-faq-schema"
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
          { name: 'Coimbatore', url: 'https://factoryjet.com/web-design/coimbatore' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Coimbatore', url: 'https://factoryjet.com/web-design/coimbatore' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="web_design_coimbatore_hero" />}
          eyebrow="WEB DESIGN · COIMBATORE"
          headline="Website Design in Coimbatore for Pump Makers, Textile Mills and Growing IT Firms"
          lead="Coimbatore builds pumps, motors and wet grinders, spins yarn for Tirupur's knitwear trade and runs a growing IT belt along Avinashi Road. The district has 25,000+ registered MSMEs and 262+ startups, and many still sell from an old or thin website. FactoryJet designs in Figma, builds in Next.js and launches in 7 days. You own the code."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '7-day delivery',
            '500+ businesses built',
          ]}
          rightSlot={<HeroBrowserMockup />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Sites built for 500+ businesses across India, the US, the UK and the UAE" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ websites built. 12 years of web engineering. 7-day delivery."
          description="Our work covers Shopify sellers, B2B manufacturers and direct-to-consumer brands in four countries. Each project has a fixed price agreed upfront, full code handover and 7-day delivery."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="COIMBATORE MARKET"
          headline="What Coimbatore Buyers Check Before They Enquire"
          leadParagraphs={[
            "Coimbatore is an engineering town first. Pump and motor makers in Ganapathy and Singanallur supply buyers across India and overseas, and the city's wet grinders carry a GI tag. Spinning mills feed the knitwear units of Tirupur next door. Thousands of small units make castings, parts and textile machinery. Most of their buyers find and compare suppliers online before they pick up the phone.",
            "Each of these buyers wants different proof. A Gulf contractor buying pumps wants model specs, test certificates and dealer support. A European apparel brand wants yarn counts, certifications and capacity. A Bengaluru client hiring an Avinashi Road IT firm wants case studies. A patient choosing a hospital in RS Puram wants doctors and timings. We plan each site around one of these buyers.",
            "Few local firms present themselves well online, so a clear, fast site still stands out in Coimbatore. The firms that fix their websites now will be the ones buyers find first when they search for a supplier.",
          ]}
          stats={[
            {
              value: '25,000+',
              label: "Registered MSMEs in Coimbatore district, one of the largest MSME bases in Tamil Nadu",
              sourceUrl: 'https://msme.gov.in/',
              sourceLabel: 'Ministry of MSME',
            },
            {
              value: 'Pump Capital',
              label: "Coimbatore makes over 30% of India's pumps, the largest pump manufacturing cluster in the world",
              sourceUrl: 'https://www.coimbatorepumps.com/',
              sourceLabel: 'Coimbatore Pumps & Motors Manufacturers Association',
            },
            {
              value: '262+',
              label: "Active startups in Coimbatore, part of a fast-growing founder community",
              sourceUrl: 'https://startuptn.in/',
              sourceLabel: 'StartupTN',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · COIMBATORE"
          headline="What a Coimbatore Website Has to Do"
          lead="Three kinds of buyer drive most enquiries here: overseas and domestic B2B buyers comparing manufacturers, companies choosing an IT or service partner, and local customers deciding on a phone. We choose the buyer first and design for them."
          body={
            <>
              <p>
                
                Pump makers, textile exporters, foundries and component units sell to buyers who check a supplier for weeks. The site has to show product range, specifications, certificates, plant capacity and export experience, then make a quote request easy. We build catalogue pages, spec sheet downloads and RFQ forms that suit long B2B buying cycles.
              </p>
              <p>
                
                IT companies on Avinashi Road and in Peelamedu, colleges and professional firms compete for clients and students who research before they commit. Their sites need clear service or course pages, case studies or results, and an enquiry form that is easy to finish.
              </p>
              <p>
                
                Every Coimbatore project includes discovery, Figma layouts, the Next.js build, search setup, GA4 and 30 days of free fixes. You walk away with code you own, a design file you keep and a site ready to rank.
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
                  
                  Three Coimbatore buyers. Three plans.
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    type: 'B2B / Export & Manufacturing',
                    need: 'Specs + certificates + quote form',
                    area: 'Singanallur · SIPCOT · Peelamedu · Tirupur corridor',
                    colour: '#F05A28',
                  },
                  {
                    type: 'IT & Professional Services',
                    need: 'Case studies + services + enquiry route',
                    area: 'Avinashi Road · Peelamedu IT Park · Saibaba Colony',
                    colour: '#0F0F12',
                  },
                  {
                    type: 'D2C / Consumer & Retail',
                    need: 'Fast pages + phone layout + one-tap contact',
                    area: 'RS Puram · Gandhipuram · Saibaba Colony · Race Course',
                    colour: '#6B7280',
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
                  
                  One build standard. A plan set by your buyer.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 6. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="What Coimbatore Businesses Get From FactoryJet"
          lead="Many local agencies take weeks to quote and longer to launch. We price the job before you commit, put the 7-day date in the contract and build in Next.js, so pages load faster, there are no plugin bills and the code is yours."
          pillars={[
            {
              icon: '⚡',
              title: 'Seven days, signed in the contract.',
              body: "Coimbatore factories run to delivery dates, and your website should too. A ten-week web project means a trade fair or export season passes with an old site. We launch in 7 days and write the date into the agreement. Across our projects, 97% have shipped on the agreed date.",
            },
            {
              icon: '🏗️',
              title: 'Next.js speed for overseas buyers.',
              body: 'A WordPress page runs PHP and dozens of database queries each time someone opens it. Next.js sends ready-built files from Cloudflare, which usually means under 1.5 seconds on Indian 4G against 4–6 seconds for WordPress. A buyer in Dubai or Hamburg gets the same quick page, and Google rewards it in Core Web Vitals.',
            },
            {
              icon: '📋',
              title: 'Price agreed before work starts.',
              body: "You see a written quote before you commit. There is no discovery fee and no surprise invoice after launch. Scope and cost are settled once.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How Your Coimbatore Website Gets Built in 7 Days"
          lead="Buyer first, phone layouts second, code third. Tracking and search setup are ready before launch."
          stages={CBE_JOURNEY_STAGES}
          closingNote="FIVE STEPS · SEVEN DAYS · NEXT.JS ON CLOUDFLARE · GA4 BUILT IN · LAUNCH WITHOUT DOWNTIME"
        />

        {/* ── 8. PORTFOLIO ─────────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="Two recent builds for Indian clients."
          cards={[
            {
              industry: 'Wholesale Distribution · Commerceflo',
              title: 'Belle Maison | Mumbai',
              description:
                "Belle Maison supplies artificial plants, flowers, flower runners, home décor and LED lighting to the trade from Mumbai. We built its B2B quote-to-cash store on Commerceflo, with trade price tiers, quote-to-order steps and ordering by account.",
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Lighthouse 95+',
              stat2: 'Commerceflo · B2B',
            },
            {
              industry: 'MEP / BIM Consulting · SEO',
              title: 'Formative Concepts | Pune',
              description:
                'An MEP drafting and BIM consulting business. We rebuilt its WordPress site for B2B project enquiries, with a credentials section, a project portfolio and technical SEO.',
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
          headline="FactoryJet, a Coimbatore Agency, a Freelancer or a Template Builder"
          lead="These are the four usual routes to a new website in Coimbatore. The table compares timeline, build method, search setup and what you own when the site goes live."
          pullQuote={{
            stat: '7 days',
            caption:
              'from first call to a live site, including Figma layouts, Next.js code, search setup and a Lighthouse audit.',
          }}
          columns={CBE_COMPARISON_COLUMNS}
          rows={CBE_COMPARISON_ROWS}
          footer="Any scope can run on a fixed-price contract. We begin with a free consultation and follow with a written quote."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="COIMBATORE × WEB DESIGN"
          headline="Websites for the Industries That Run Coimbatore"
          lead="Engineering, textiles, IT, education, healthcare and agri-processing each bring a different buyer to your site. These six sectors make up most of our Coimbatore planning work."
          sectors={[
            {
              name: 'Pumps, Motors & Engineering',
              description:
                "Coimbatore's pump and motor makers sell to farmers, builders, dealers and overseas contractors. Foundries and machine shops around them supply castings and parts to OEMs. Their sites need model pages, spec sheets, ISI, BIS and ISO marks, dealer and export enquiry routes and downloadable catalogues.",
              example:
                'Pump and motor makers, foundries, precision machine shops and engineering exporters selling to OEMs, dealers and contractors.',
            },
            {
              name: 'Yarn, Knitwear & Fabric',
              description:
                "Spinning mills around Coimbatore supply yarn to Tirupur, where knitwear is made for global brands. Fabric and garment exporters need sites that show yarn counts, fabric specs, GOTS or OEKO-TEX certificates, capacity and compliance, with a quote form a sourcing team can use.",
              example:
                'Spinning mills, knitwear exporters, hosiery units and fabric makers in Coimbatore and Tirupur selling to overseas brands and retailers.',
            },
            {
              name: 'IT & Software',
              description:
                "Software firms, SaaS startups and IT service companies have grown along Avinashi Road and in Peelamedu and Saravanampatti. They sell to clients across India and abroad. Their sites need service pages, case studies, team and stack details and an enquiry route that fits a B2B purchase.",
              example:
                'Product companies, IT service firms, SaaS startups and tech studios in the Avinashi Road, Peelamedu and Saravanampatti IT belt.',
            },
            {
              name: 'Colleges & Ed-Tech',
              description:
                "Coimbatore has a large number of engineering, arts and science and management colleges, plus a growing set of ed-tech startups. Colleges need clear course pages, faculty profiles, placement information and an admission enquiry flow for students and parents. Ed-tech firms need product pages, demo booking and online sign-up.",
              example:
                'Engineering colleges, arts and science colleges, training institutes and ed-tech startups serving students and working professionals.',
            },
            {
              name: 'Hospitals & Clinics',
              description:
                "Coimbatore hospitals draw patients from across western Tamil Nadu and nearby Kerala. Hospitals, clinics, labs and Ayurveda centres need doctor profiles, department pages, timings and quick appointment booking, written for patients searching on a phone.",
              example:
                'Multi-specialty hospitals, specialty clinics, diagnostic labs, dental practices and Ayurveda centres serving the Kongu region and the Kerala border.',
            },
            {
              name: 'Agri & Food Processing',
              description:
                "The district grows coconut, turmeric and cotton, and the city trades and processes much of it. Coconut oil makers, spice packers and agri exporters need product pages, FSSAI, APEDA or organic certificates, export details and enquiry forms for wholesale and overseas buyers.",
              example:
                'Coconut oil makers, spice packers, food processors, agri traders and APEDA-registered exporters selling at home and abroad.',
            },
          ]}
        />

        <GetFreeQuoteCTA />
        {/* ── 12. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="Founders across India on working with FactoryJet"
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="What Coimbatore Businesses Ask Us"
          lead="Clear answers to the questions Coimbatore owners raise on a first call."
          categories={CBE_FAQ_CATEGORIES}
          items={CBE_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Start Your Coimbatore Website This Week"
          sub="Your next distributor, sourcing manager or patient will look you up before they call. In Coimbatore, where many suppliers make similar products, the one with the clearer site often gets the enquiry. Send us a brief today and get a page plan within 72 hours."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price. Live in 7 days. Built in Next.js. The code is yours on launch day."
        />

        {/* India web-design city cross-links (silo fix, 31 Jul 2026) */}

        <WebDesignCityLinksIN currentCity="coimbatore" />


      </main>

      <SiteFooter locale="in" />
    </>
  );
}
