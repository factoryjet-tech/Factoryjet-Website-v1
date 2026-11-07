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
  title: 'Web Design Company in Ahmedabad | FactoryJet',
  description:
    'Web design company in Ahmedabad for textile, chemical and pharma exporters. Custom Next.js sites, fixed quote, 7-day delivery. Your code, your GitHub.',
  keywords: [
    'web design company in Ahmedabad',
    'website design Ahmedabad',
    'web development company Ahmedabad',
    'website design company Ahmedabad',
    'professional website design Ahmedabad',
    'web design SG Highway',
    'web design GIFT City',
    'textile website design Ahmedabad',
    'trading company website Ahmedabad',
    'Next.js web development Ahmedabad',
    'web design agency Ahmedabad',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Ahmedabad | FactoryJet',
    description:
      'Web design company in Ahmedabad for exporters, GIFT City firms and retail brands. Figma design, Next.js build, GA4 and SEO set up, 7-day delivery.',
    url: 'https://factoryjet.com/web-design/ahmedabad',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'Web design for Ahmedabad exporters and businesses by FactoryJet',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Ahmedabad | FactoryJet',
    description:
      'Web design in Ahmedabad: export-ready Next.js sites, 7-day delivery.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/ahmedabad',
    languages: webDesignCityAlternatesIN['ahmedabad'],
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
  '@id': 'https://factoryjet.com/web-design/ahmedabad#webpage',
  url: 'https://factoryjet.com/web-design/ahmedabad',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const localBusinessSchema = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const AMD_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Buyer map and sitemap',
    description:
      "First we decide who the site must convince. A cotton fabric buyer in Europe, a pharma procurement head, a GIFT City client and a Prahlad Nagar shopper all read a site differently. We study three or four Ahmedabad rivals and lock the page list.: Days 1–2",
  },
  {
    number: '02',
    title: 'Mobile layouts in Figma',
    description:
      'Layouts start at phone width and scale up to wide desktop. Enquiry buttons, catalogue grids and certificate blocks are placed before any code exists. Nothing moves to build until you sign off the design.: Days 3–4',
  },
  {
    number: '03',
    title: 'Code and integrations',
    description:
      'The approved design becomes a Next.js site on Cloudflare. We connect your WhatsApp number, enquiry forms, catalogue data and any tools you already run, and we check page weight as we go.: Days 5–6',
  },
  {
    number: '04',
    title: 'Copy, schema and search setup',
    description:
      'Page copy is tightened, images go out as WebP, and schema for your business and FAQs is added. The sitemap reaches Google Search Console with Ahmedabad search terms mapped to pages.: Day 6–7',
  },
  {
    number: '05',
    title: 'Go-live and handover',
    description:
      'Domain pointed to Cloudflare, GA4 and Tag Manager live, Search Console verified. You get a recorded walkthrough of how to edit the site, and 30 days of post-launch fixes.: Day 7+',
  },
];

const AMD_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Ahmedabad Questions' },
  { key: 'support',   label: 'Support & Ownership' },
];

const AMD_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'What will a website cost my Ahmedabad business?',
    answer:
      "It depends on scope. A ten-page exporter site with a product catalogue costs less than a store with payments or a dealer login. After a free call we send one fixed figure for the agreed pages and features, and the code you pay for stays yours.",
  },
  {
    category: 'pricing',
    question: 'How many days does a build take?',
    answer:
      'Seven days from kickoff, once your logo, photos and basic content are shared with us. Days one and two cover planning and layout, three to six cover design approval and code, and day seven is launch.',
  },
  {
    category: 'pricing',
    question: 'Why would I pick FactoryJet over a firm on SG Highway?',
    answer:
      "We run a small engineering team without a large sales layer. You talk to the people who design and code your site, the scope is written down, and the quote stays fixed. Your money goes into the build itself.",
  },
  {
    category: 'pricing',
    question: 'What sits inside the 7-day delivery promise?',
    answer:
      'The seven days cover the work in our hands: design, code, copy polish and launch. Delays caused by missing content pause the clock. Across all our projects, 97% shipped on time.',
  },

  /* ── What's Included ── */
  {
    category: 'included',
    question: "What do I get at the end of a project?",
    answer:
      'Planning, Figma design, a Next.js build, starter copy, schema and sitemap setup, GA4, and 30 days of fixes after launch. The full source code is pushed to a GitHub account in your name on launch day.',
  },
  {
    category: 'included',
    question: 'Will you write the text for my pages?',
    answer:
      'We write headlines, hero lines and short service blurbs as part of the build. Long-form SEO articles cost extra. Before code starts you get a short brief listing exactly what we need from you, such as certificates or product specs.',
  },
  {
    category: 'included',
    question: 'Who hosts the site?',
    answer:
      "Your site runs on Cloudflare Pages under an account you own. For most business sites the hosting tier is free. We set it up and you pay us nothing monthly for hosting.",
  },
  {
    category: 'included',
    question: 'Can my staff edit pages without a developer?',
    answer:
      'Yes. Growth and Custom tier builds come with a headless CMS, Sanity or Contentful, so your team can change text, products and photos from a browser.',
  },

  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'Can my Ahmedabad site show up on Google?',
    answer:
      'Each build ships with schema markup, clean title and meta tags, passing Core Web Vitals on mobile, an XML sitemap filed in Search Console, and compressed images. Searches for your company name usually start showing it within one to two weeks. Ranking for competitive service terms takes longer and needs content.',
  },
  {
    category: 'technical',
    question: 'Which technology do you use?',
    answer:
      "Next.js pages served from Cloudflare's network. Static pages load far faster on Indian 4G than a typical plugin-heavy WordPress install, and page speed is part of how Google scores sites competing for the same Ahmedabad searches.",
  },
  {
    category: 'technical',
    question: 'Will buyers on phones get a good experience?',
    answer:
      'We design the phone layout first. Before launch every build must score Lighthouse 90+ on mobile with green Core Web Vitals. Images are lazy-loaded WebP files served from the nearest Cloudflare location.',
  },
  {
    category: 'technical',
    question: 'Will I see where my enquiries come from?',
    answer:
      'Yes. GA4 and Tag Manager go live before launch, tracking form sends, WhatsApp taps and catalogue enquiry clicks as events. Search Console is verified and the sitemap is submitted the same day.',
  },

  /* ── Ahmedabad Local ── */
  {
    category: 'local',
    question: 'Do you build sites for Ahmedabad textile and yarn exporters?',
    answer:
      "Yes. Fabric mills, garment exporters, yarn traders and MSME manufacturers make up much of the Ahmedabad work we take on. Their sites need a clear product range, mill or factory photos, export certifications, a sample request form, and English pages written for buyers searching from Europe, the US and the Gulf.",
  },
  {
    category: 'local',
    question: 'Can you build a website for a GIFT City IFSC firm?',
    answer:
      "Yes. Firms in the IFSC at GIFT City usually need careful wording about licences, a clear list of regulated activities, team credentials and a contact flow for institutional clients. We build those pages with matching schema and keep claims inside what your licence allows.",
  },
  {
    category: 'local',
    question: "Will the copy reflect Ahmedabad's business areas?",
    answer:
      "We check where your buyers and rivals sit during planning. Naroda and Vatva for chemicals and engineering, the old city markets for cloth trade, SG Highway and Prahlad Nagar for offices, Gandhinagar for GIFT City. Area names go into copy and schema only where they match how buyers search.",
  },
  {
    category: 'local',
    question: 'How is FactoryJet different from a typical Ahmedabad web agency?',
    answer:
      "Many local agencies quote only after several meetings and plan builds over weeks. We send a fixed quote first, write the 7-day delivery date into the agreement, and build in Next.js. You leave with a faster site and the full code.",
  },

  /* ── Support & Ownership ── */
  {
    category: 'support',
    question: 'Who owns the finished site?',
    answer:
      'You do. The Next.js source lands in your GitHub repository on launch day, along with the Figma files and every login. There is no retainer to keep the site alive and no locked platform.',
  },
  {
    category: 'support',
    question: 'What help do I get once the site is live?',
    answer:
      'For 30 days after launch we fix bugs and make small changes free. After that you can take a monthly plan for new work, same-day bug response and an engineer who already knows your code.',
  },
  {
    category: 'support',
    question: 'What if the site breaks after launch?',
    answer:
      'Bugs reported within the first 30 days are fixed free, usually inside 24 hours. Because pages are static files on Cloudflare\'s network, there is no server or plugin stack to crash.',
  },
  {
    category: 'support',
    question: 'Can we keep FactoryJet on a monthly plan in Ahmedabad?',
    answer:
      'Yes. A monthly plan covers new pages, campaign landing pages ahead of trade fairs, SEO fixes, content edits and upkeep. Plan clients get first place in our schedule and one named engineer.',
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best web design agency in Ahmedabad?',
    answer:
      'Judge any Ahmedabad agency, us included, on three things. Live sites you can open on your own phone. Speed scores you can test yourself in PageSpeed Insights. A written price that does not change mid-build. FactoryJet offers custom sites in 7 days at a fixed price, and we are happy to be tested on all three.',
  },
  {
    category: 'pricing',
    question: 'Should I hire web designer in Ahmedabad as a freelancer or go with a team?',
    answer:
      'For a single landing page a freelancer can work well. A business site with a catalogue, enquiry tracking and SEO needs design, code and support from people who stay reachable. If you hire web designer in Ahmedabad on your own, get the page list and price signed before work starts.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: AMD_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const AMD_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Ahmedabad agency' },
  { label: 'Freelancer' },
  { label: 'DIY builder (Wix/Squarespace)' },
] as const;

const AMD_COMPARISON_ROWS = [
  {
    feature: 'Time to launch',
    values: ['7 days', '6–16 weeks', '3–12 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Design made in Figma for you',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Built in Next.js',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Schema, sitemap and meta done',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Mobile Lighthouse score 90+',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GA4 and Tag Manager live',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Price fixed before work starts',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Source code in your GitHub',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Launch inside 7 days',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `https://factoryjet.com/web-design/ahmedabad#howto`,
  name: `How an Ahmedabad business website gets built in 7 days`,
  description: `FactoryJet's seven-day plan for an Ahmedabad exporter, firm or retail brand website.`,
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1: Kickoff call',
      text: `We cover what you sell, who buys it, and which enquiries the Ahmedabad site must bring in.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2: Page plan and keywords',
      text: `We fix the page list, check the Ahmedabad firms you compete with, pick target search terms and draft first copy.`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3–4: Visual design',
      text: 'Homepage and inner page designs are shared on a preview link. Your comments are worked in within a day.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5–6: Build and search setup',
      text: `The signed-off design is coded mobile-first, with Ahmedabad business schema, GA4 and Search Console in place.`,
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7: Go live',
      text: 'We test on five devices, launch, and hand over written notes plus a 30-minute training call.',
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `https://factoryjet.com/web-design/ahmedabad#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/ahmedabad`,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function AhmedabadWebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="amd-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        id="amd-faq-schema"
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
          { name: 'Ahmedabad', url: 'https://factoryjet.com/web-design/ahmedabad' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Ahmedabad', url: 'https://factoryjet.com/web-design/ahmedabad' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="web_design_ahmedabad_hero" />}
          eyebrow="WEB DESIGN · AHMEDABAD"
          headline="Website Design in Ahmedabad for Exporters, Manufacturers and Growing Brands"
          lead="Ahmedabad sells cloth, chemicals and medicines to the world, and GIFT City is adding finance firms next door in Gandhinagar. Your buyers check your website before they call. FactoryJet designs it in Figma, builds it in Next.js and launches it in 7 days, and the code is yours."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '7-day delivery',
            '500+ businesses built',
          ]}
          rightSlot={<HeroBrowserMockup />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="500+ businesses in India, the US, the UK and the UAE run on sites we built" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ websites built. 12 years of web engineering. 7-day delivery."
          description="Our builds include Shopify stores, B2B catalogues and DTC brand sites for clients in India, the US, the UK and the UAE. Each one had a fixed quote, a 7-day delivery date and full code handover."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="AHMEDABAD MARKET"
          headline="Why Ahmedabad Buyers Judge You by Your Website"
          leadParagraphs={[
            "Ahmedabad built its name on textile mills and still trades cloth, yarn and garments at scale. Around that sit dyes and chemicals in Vatva and Naroda, a large pharma base, engineering units, and diamond and commodity traders. Gujarat sends a large share of India's exports abroad, and Ahmedabad is where much of that trade is run. GIFT City in Gandhinagar now adds banks, funds and fintech firms to the mix.",
            "Each of these buyers wants different proof. A yarn importer wants counts, certifications and sample terms. A pharma buyer wants GMP and product data. A GIFT City client wants licences and leadership. A shopper in Bodakdev wants fast pages and UPI checkout. One template cannot answer all four, so we plan each site around its own buyer.",
            "Plenty of Ahmedabad firms still run on a ten-year-old site or a single catalogue PDF. Overseas buyers read that as a risk. A fast, clear site with real product data is often the cheapest way to win a meeting against a rival who has not updated.",
          ]}
          stats={[
            {
              value: '18%',
              label: "Gujarat's share of India's total exports, much of it traded through Ahmedabad",
              sourceUrl: 'https://commerce.gov.in/',
              sourceLabel: 'Ministry of Commerce & Industry',
            },
            {
              value: 'GIFT City',
              label: "India's first International Financial Services Centre, in Gandhinagar, 12km from Ahmedabad",
              sourceUrl: 'https://www.giftgujarat.in/',
              sourceLabel: 'GIFT City',
            },
            {
              value: '₹3.5L Cr',
              label: "Estimated size of Ahmedabad's economy, the largest of any Gujarat city",
              sourceUrl: 'https://mospi.gov.in/',
              sourceLabel: 'MoSPI',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEBSITE DESIGN · AHMEDABAD"
          headline="What a Website Has to Do for an Ahmedabad Company"
          lead="Ahmedabad firms sell to two kinds of buyer. Overseas and trade buyers compare suppliers slowly and want proof. Local customers decide on a phone in seconds. We design for whichever one pays your bills, or both."
          body={
            <>
              <p>
                
                Exporters of fabric, yarn, dyes, chemicals and engineered parts need a site that does a sales rep&apos;s first job. It should show what you make, how much you can supply, which certifications you hold and who you already ship to. Then it should make asking for a quote or a sample easy. We build product catalogues, spec sheets and RFQ forms that send enquiries straight to your inbox and WhatsApp.
              </p>
              <p>
                
                GIFT City firms, consultancies around SG Highway and retail brands in Navrangpura and CG Road need something else. Finance firms need licence wording and leadership pages. Service firms need case pages and a booking path. Shops need fast product pages and a short checkout. Selling online?{' '}
                <a href="/services/ecommerce-development/ahmedabad" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">Read about ecommerce development in Ahmedabad</a>{' '}
                
                for Shopify builds, wholesale ordering for GIDC units and shipping to NRI customers.
              </p>
              <p>
                
                Every Ahmedabad project includes planning, Figma design, a Next.js build, search setup, GA4 and 30 days of fixes. You keep the code, the design files and the logins.
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
                  
                  Two kinds of buyer, two site plans.
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    type: 'B2B / Export & Trading',
                    need: 'Product range, certifications, RFQ form',
                    area: 'Vatva · Naroda · Changodar · GIFT City',
                    colour: '#F05A28',
                  },
                  {
                    type: 'D2C / Consumer & Retail',
                    need: 'Fast pages, phone layout, UPI checkout',
                    area: 'Bodakdev · Navrangpura · CG Road · Prahlad Nagar',
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
                  
                  One engineering standard, planned around who buys from you.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 6. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="What Ahmedabad Firms Get When They Hire FactoryJet"
          lead="You get a fixed quote before you agree to anything, a launch date written into the contract, and a Next.js site that loads quickly with no plugin bills. The code is handed over in full when the site goes live."
          pillars={[
            {
              icon: '⚡',
              title: 'Launch date in the contract.',
              body: "Export orders run to buying seasons and trade fair dates. A site that takes three months can miss the season it was meant for. We commit to 7 days in the agreement, and across all our projects 97% were delivered on time.",
            },
            {
              icon: '🏗️',
              title: 'Next.js for speed on Indian 4G.',
              body: 'A WordPress page often runs dozens of database queries and plugin scripts before it shows anything. Next.js serves prebuilt files from Cloudflare\'s edge, so pages appear quickly for a buyer in Surat or Stuttgart alike. Faster pages also score better on Google\'s Core Web Vitals.',
            },
            {
              icon: '📋',
              title: 'One price, written down first.',
              body: "No paid discovery phase and no open-ended estimate. We agree the scope, write the price into the quote, and that is what you pay. No extra invoice arrives after launch.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="Your Ahmedabad Website, Built in Seven Days"
          lead="We agree the buyer before design starts, approve the phone layout before code, and switch on search and analytics before launch."
          stages={AMD_JOURNEY_STAGES}
          closingNote="PLAN · DESIGN · BUILD · SEARCH SETUP · LAUNCH IN 7 DAYS"
        />

        {/* ── 8. PORTFOLIO ─────────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="Two recent builds for Indian B2B firms"
          cards={[
            {
              industry: 'Wholesale Distribution · Commerceflo',
              title: 'Belle Maison | Mumbai',
              description:
                "Mumbai wholesale distributor Belle Maison sells artificial plants and flowers, flower runners, home décor and LED lighting to trade buyers. We built its B2B store on Commerceflo, covering trade price tiers, the path from quote to order, and ordering by account.",
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Lighthouse 95+',
              stat2: 'Commerceflo · B2B',
            },
            {
              industry: 'MEP / BIM Consulting · SEO',
              title: 'Formative Concepts | Pune',
              description:
                'MEP drafting and BIM consultancy Formative Concepts needed a site that wins project enquiries from other firms. We rebuilt it on WordPress around their credentials, a project portfolio and technical SEO for B2B searches.',
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
          headline="FactoryJet vs. an Ahmedabad Agency, a Freelancer and a DIY Builder"
          lead="Four ways an Ahmedabad business can get a website, compared on time to launch, what is built and what you own afterwards."
          pullQuote={{
            stat: '7 days',
            caption:
              'from first call to a live site, with Figma design, Next.js code, search setup and a Lighthouse check included.',
          }}
          columns={AMD_COMPARISON_COLUMNS}
          rows={AMD_COMPARISON_ROWS}
          footer="Every FactoryJet scope comes with a fixed-price contract. The quote follows a free call."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="AHMEDABAD × WEB DESIGN"
          headline="Websites for Ahmedabad's Main Industries"
          lead="Cloth, chemicals, medicines, trading, property, startups and professional firms each sell differently. These are the site types we plan for Ahmedabad businesses."
          sectors={[
            {
              name: 'Textiles & Garments',
              description:
                "Mills, processors, garment makers and yarn traders sell to buyers who never visit the factory first. The site has to stand in for that visit: fabric and product range, GSM or count details, certifications, capacity and a sample request form, written in plain English for importers.",
              example:
                'Fabric mills, garment exporters and yarn traders around Narol, Saraspur and the old city markets.',
            },
            {
              name: 'Pharma & Chemicals',
              description:
                "Vatva and Naroda hold many dye, intermediate and speciality chemical units, and Gujarat is a major pharma base. Buyers here check compliance first. Sites need product lists with CAS or grade details, GMP and ISO documents, careful regulatory wording and an enquiry path for procurement teams.",
              example:
                'Dye and chemical makers, API producers and formulation units in Vatva, Naroda and Changodar.',
            },
            {
              name: 'Trading & Distribution',
              description:
                "Ahmedabad's trading houses deal in FMCG, agri commodities and wholesale goods. Their buyers want to see range, brands carried and order capacity at a glance. We build bulk enquiry forms, brand and category pages, and a dealer contact flow.",
              example:
                'FMCG stockists, commodity traders and wholesale distributors supplying Gujarat and beyond.',
            },
            {
              name: 'Real Estate & Construction',
              description:
                "Projects along SG Highway, Shela, South Bopal and towards Gandhinagar compete hard for site visits. Builders need project pages with galleries, floor plans, RERA numbers, location maps and a short visit booking form that works on a phone.",
              example:
                'Developers, channel partners and contractors working across Ahmedabad and Gandhinagar.',
            },
            {
              name: 'Startups & Tech',
              description:
                "IIM Ahmedabad, GUSEC and a growing founder community have produced SaaS, fintech, agritech and D2C startups. Their sites need clear product pages, a demo or waitlist flow, proof for investors and code that is easy to change every week.",
              example:
                "SaaS, fintech and D2C founders building out of Ahmedabad and Gandhinagar.",
            },
            {
              name: 'Professional Services',
              description:
                "CA firms, law chambers and consultancies serve Gujarat's large business base. A prospect usually checks the website before making a call. We build service pages, partner profiles and a consultation booking form that turns that check into a meeting.",
              example:
                "CA and CS practices, corporate lawyers, consultants and HR firms serving Ahmedabad companies.",
            },
          ]}
        />

        <GetFreeQuoteCTA />
        {/* ── 12. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="Founders we have built sites for, in their own words"
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Ahmedabad Website Questions, Answered"
          lead="Price, timing, ownership and local fit. These come up on almost every call with an Ahmedabad business."
          categories={AMD_FAQ_CATEGORIES}
          items={AMD_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Start Your Ahmedabad Website This Week"
          sub="Your overseas buyers, GIFT City clients and local customers are comparing you with rivals online right now. Send us your brief today. Within 72 hours you will have a sitemap, and seven days after kickoff, a live site."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="One fixed price. Live in 7 days. Built in Next.js. All code handed to you at launch."
        />

        {/* India web-design city cross-links (silo fix, 31 Jul 2026) */}

        <WebDesignCityLinksIN currentCity="ahmedabad" />


      </main>

      <SiteFooter locale="in" />
    </>
  );
}
