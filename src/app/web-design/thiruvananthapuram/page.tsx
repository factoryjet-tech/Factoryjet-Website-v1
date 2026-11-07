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
  title: 'Web Design Company in Thiruvananthapuram | FactoryJet',
  description:
    'Web design company in Thiruvananthapuram (Trivandrum) for Technopark IT firms, government suppliers, Kovalam resorts and Ayurveda centres. 7-day delivery.',
  keywords: [
    'web design company in Thiruvananthapuram',
    'website design Trivandrum',
    'web development Thiruvananthapuram',
    'website design company Thiruvananthapuram',
    'Trivandrum website designer',
    'Technopark startup website design',
    'web design Trivandrum',
    'web design for startups Trivandrum',
    'Kerala Startup Mission website design',
    'KSUM startup website Thiruvananthapuram',
    'web design agency Thiruvananthapuram',
    'Next.js web development Trivandrum',
    'government contractor website design Thiruvananthapuram',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Thiruvananthapuram | FactoryJet',
    description:
      "Web design company in Trivandrum building fast Next.js sites for Technopark software teams, public sector suppliers and Kovalam tourism. 7-day delivery.",
    url: 'https://factoryjet.com/web-design/thiruvananthapuram',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet website design for Thiruvananthapuram businesses',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Thiruvananthapuram | FactoryJet',
    description:
      'Web design company in Thiruvananthapuram. Next.js sites, live in 7 days, SEO and GA4 set up.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/thiruvananthapuram',
    languages: {
      'en-IN': 'https://factoryjet.com/web-design/thiruvananthapuram',
      'x-default': 'https://factoryjet.com/web-design/thiruvananthapuram',
    },
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
  '@id': 'https://factoryjet.com/web-design/thiruvananthapuram#webpage',
  url: 'https://factoryjet.com/web-design/thiruvananthapuram',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const localBusinessSchema = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const TVM_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Who buys from you',
    description:
      "Trivandrum buyers range from a European client vetting a Technopark software vendor to a state department checking a contractor, a VSSC supplier's engineering lead, or a German guest choosing an Ayurveda retreat. We write down what each one needs to see, study the rival sites they compare you with and lock the page list.: Days 1–2",
  },
  {
    number: '02',
    title: 'Wireframes',
    description:
      'Each page is sketched for a phone screen, then widened for desktop. We decide where proof sits, where the enquiry or booking button goes and what a buyer reads first. You approve the wireframes before any build work.: Days 3–4',
  },
  {
    number: '03',
    title: 'Coding',
    description:
      "We code in Next.js and serve the site from Cloudflare so it opens fast on Kerala mobile data and on overseas connections. Tender and RFP enquiry forms, treatment or room booking requests, WhatsApp chat and the tools you already use get wired in here.: Days 5–6",
  },
  {
    number: '04',
    title: 'Copy and search setup',
    description:
      'Titles, meta descriptions, WebP images, LocalBusiness and FAQ schema, and internal links go in. The sitemap goes to Search Console. Copy and schema carry both city names, Thiruvananthapuram and Trivandrum, so you show up whichever one a searcher types.: Day 6–7',
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'Domain moved to Cloudflare, GA4 and Tag Manager running, Search Console verified. You get a recorded tour of how to manage the site, plus 30 days of free fixes.: Day 7+',
  },
];

const TVM_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Trivandrum Questions' },
  { key: 'support',   label: 'Support & Ownership' },
];

const TVM_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'What does a website cost for a Thiruvananthapuram business?',
    answer:
      "It depends on page count, features and how hard your search market is. A Vanchiyoor law practice with six pages costs less than a Kovalam resort with room requests in three currencies. After a free call you get one fixed written price, and the code is yours after launch.",
  },
  {
    category: 'pricing',
    question: 'How long does a Trivandrum website take?',
    answer:
      'Seven days once we have your logo, photos and core text. Research and planning run on days one and two, wireframes on three and four, coding on five and six, and launch on day seven.',
  },
  {
    category: 'pricing',
    question: 'Why choose FactoryJet over a Trivandrum agency with a big team?',
    answer:
      "You pay for design and engineering only. There are no account managers or sales layers on the bill. You still get Figma wireframes, a Next.js build and a Lighthouse audit before launch, all under one fixed quote.",
  },
  {
    category: 'pricing',
    question: 'What does the 7-day promise cover?',
    answer:
      'It covers the work we control: design, coding, content placement and launch. Time spent waiting on your approvals or material is outside the count. On our record, 97% of projects have launched on the promised date.',
  },

  /* ── What's Included ── */
  {
    category: 'included',
    question: "What comes with a Thiruvananthapuram web design project?",
    answer:
      'Page planning, Figma wireframes, Next.js code, starter copy, schema, a sitemap, GA4 tracking and 30 days of free fixes. On launch day the full source code moves into a GitHub account you own.',
  },
  {
    category: 'included',
    question: 'Do you write the website copy?',
    answer:
      'We write headlines, the hero section and short service text. Long search articles cost extra. Before coding starts we send a checklist of the facts, photos, licences and certificates we need from you.',
  },
  {
    category: 'included',
    question: 'Where is the site hosted?',
    answer:
      "On Cloudflare Pages, in an account registered to you. Most sites fit the free plan. We handle the setup and charge no monthly hosting fee.",
  },
  {
    category: 'included',
    question: 'Can my team change content later?',
    answer:
      'Yes. Growth and Custom tier builds include a Sanity or Contentful editor. A clinic can add a new therapy page or a startup can post a job without calling a developer.',
  },

  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'Will the site rank on Google?',
    answer:
      "Search basics ship with every build: schema, clean title and meta templates, passing mobile Core Web Vitals, internal links, a submitted sitemap and WebP images. Searches for your business name usually show the site within one to two weeks. Kerala buyers read a lot before they contact anyone, so useful content on the site keeps paying off.",
  },
  {
    category: 'technical',
    question: 'What is the tech stack?',
    answer:
      "Next.js served from Cloudflare's edge network. Pages usually load in under 1.5 seconds on Indian 4G, where a typical WordPress theme takes 4–6 seconds. Google uses that speed as part of Core Web Vitals.",
  },
  {
    category: 'technical',
    question: 'How does the site behave on a phone?',
    answer:
      'Phones come first. We lay out every page at 375px before desktop, and each build must hit Lighthouse 90+ on mobile with green Core Web Vitals before launch. Images load as WebP from Cloudflare, only when a visitor scrolls to them.',
  },
  {
    category: 'technical',
    question: 'Do you set up analytics?',
    answer:
      'Yes. GA4 and Tag Manager go live with the site. Enquiry form sends, WhatsApp taps and booking clicks are tracked as events from launch day, and Search Console is verified with the sitemap submitted.',
  },

  /* ── Trivandrum Local ── */
  {
    category: 'local',
    question: 'Should my site say Thiruvananthapuram or Trivandrum?',
    answer:
      'Use both. People search with both names. Trivandrum is the older English name that many residents, NRIs and established firms still use. Thiruvananthapuram is the official name used by government and institutions. We place both in your copy, meta tags and schema, so neither group of searchers misses you.',
  },
  {
    category: 'local',
    question: 'Do you build websites for Technopark IT companies and KSUM startups?',
    answer:
      "Yes. Technopark in Kazhakuttam was India's first IT park and is home to 450+ companies. Their clients are mostly abroad and shortlist vendors on the web. We build service pages, case studies, stack and certification sections and contact routes for enterprise buyers. KSUM is headquartered in the city, and its startups get product-led pages with proof an investor will look for.",
  },
  {
    category: 'local',
    question: 'Can you build sites for government suppliers and firms in the VSSC supply chain?',
    answer:
      "Yes. The city holds the Kerala Secretariat, most state departments and ISRO's Vikram Sarabhai Space Centre. Suppliers to these buyers, such as systems integrators, engineering consultants and component makers, need a site that reads like a capability statement: past projects, certifications, compliance papers and a clear route for tender or RFP enquiries.",
  },
  {
    category: 'local',
    question: "Do you know Thiruvananthapuram well enough to write local copy?",
    answer:
      "We map your patch during discovery: Technopark and Kazhakuttam for IT, Pattom and the Secretariat area for government work, Vanchiyoor for lawyers and professional firms, Kovalam and Varkala for tourism, and the NH 66 belt for new commercial space. Those details go into the copy and your LocalBusiness schema.",
  },
  {
    category: 'local',
    question: 'How is FactoryJet different from other Trivandrum web agencies?',
    answer:
      "Many local agencies quote late and deliver over weeks. We send a fixed quote before you commit, put the 7-day launch date in the agreement and hand you Next.js code that you own outright.",
  },
  {
    category: 'local',
    question: 'Do you build websites for Ayurveda centres and wellness retreats in Trivandrum?',
    answer:
      "Yes. The city and its coast have Ayurveda hospitals, traditional vaidya practices and retreats near Kovalam and Varkala that draw guests from Europe, the Gulf and the US. These sites need treatment pages, practitioner credentials, photo-led layouts, booking requests and English copy written for overseas searches.",
  },

  /* ── Support & Ownership ── */
  {
    category: 'support',
    question: 'Will I own the website?',
    answer:
      'Yes, all of it. The Next.js code goes into your GitHub on launch day with the Figma files and every login. No retainer is required and no closed platform holds your site hostage.',
  },
  {
    category: 'support',
    question: 'What support is there after launch?',
    answer:
      'Thirty days of free fixes and minor edits come with the build. After that, an optional monthly plan gives you same-day bug response, one engineer who knows your code, and a quarterly speed and Core Web Vitals review.',
  },
  {
    category: 'support',
    question: 'What if something stops working?',
    answer:
      'Inside the first 30 days we fix it free, usually within a day. Static files on Cloudflare remove the usual causes of outages, such as server overload and plugin clashes.',
  },
  {
    category: 'support',
    question: 'Can Trivandrum businesses keep FactoryJet on retainer?',
    answer:
      'Yes. A monthly retainer covers new pages, content edits, landing pages for campaigns or tenders, search fixes and upkeep. Retainer work is scheduled first and stays with the same engineer.',
  },
  {
    category: 'support',
    question: 'Can I manage the project while living abroad?',
    answer:
      "Yes. Plenty of Trivandrum firms are owned or funded by Keralites in the Gulf or Europe. Calls, previews, approvals and handover all run over video and shared links, and we plan around your time zone.",
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best web design agency in Thiruvananthapuram?',
    answer:
      'Judge any agency on evidence. For a small or mid-sized firm, FactoryJet is a sound choice for the best web design company in Thiruvananthapuram: a custom site in 7 days for one written price. Whoever you shortlist, ask for live sites to open, speed scores to test yourself and a quote that stays fixed.',
  },
  {
    category: 'pricing',
    question: 'Should I hire a freelance web designer in Thiruvananthapuram or an agency?',
    answer:
      'A freelancer suits a single page. A business site needs design, coding, search setup and support, which a small team can deliver together at a fixed price. If you hire a freelancer, write down the scope and fee first.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: TVM_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const TVM_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Kerala Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const TVM_COMPARISON_ROWS = [
  {
    feature: 'Launch time',
    values: ['7 days', '6–16 weeks', '3–12 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Bespoke Figma layouts',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ta" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Next.js build',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ta" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Search basics included',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ta" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 90+ on phones',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ta" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GA4 and Tag Manager set up',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ta" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Price fixed in writing',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ta" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Source code in your GitHub',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ta" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Live in 7 days',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ta" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `https://factoryjet.com/web-design/thiruvananthapuram#howto`,
  name: `Seven days from kickoff to a live Thiruvananthapuram website`,
  description: `The step-by-step FactoryJet build for Trivandrum IT, public sector, tourism and wellness businesses.`,
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 | First call',
      text: `We learn what you offer, who decides to buy it and the one action the site must get from them.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 | Structure',
      text: `We set the page list, review Trivandrum competitors, choose keywords under both city names and write first-draft copy.`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3–4 | Wireframes and design',
      text: 'A preview link shows the home page and inner pages. Changes you ask for come back within 24 hours.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5–6 | Code and search basics',
      text: `Approved designs are coded as a quick, phone-first site. Local schema goes in, and GA4 and Search Console are hooked up.`,
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7 | Go live',
      text: 'We test on five devices, launch, then hand over written notes and a 30-minute training call.',
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `https://factoryjet.com/web-design/thiruvananthapuram#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/thiruvananthapuram`,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function ThiruvananthapuramWebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="tvm-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        id="tvm-faq-schema"
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
          { name: 'Thiruvananthapuram', url: 'https://factoryjet.com/web-design/thiruvananthapuram' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Thiruvananthapuram', url: 'https://factoryjet.com/web-design/thiruvananthapuram' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="web_design_thiruvananthapuram_hero" />}
          eyebrow="WEB DESIGN · THIRUVANANTHAPURAM"
          headline="Website Design in Thiruvananthapuram for Technopark Firms, Public Sector Suppliers, Resorts and Ayurveda Centres"
          lead="Kerala's capital runs on software, government, space research and tourism. Technopark sits in Kazhakuttam, the Secretariat in the city centre, VSSC at Thumba and Kovalam on the coast. Buyers here read closely and search under two names, Thiruvananthapuram and Trivandrum. FactoryJet designs in Figma, builds in Next.js, covers both names and launches in 7 days. The code is yours."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '7-day delivery',
            '500+ businesses built',
          ]}
          rightSlot={<HeroBrowserMockup />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="500+ businesses across India, the US, the UK and the UAE use sites built by FactoryJet" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ websites built. 12 years of web engineering. 7-day delivery."
          description="Our sites serve Shopify merchants, B2B suppliers and consumer brands in four countries. Each project runs on a fixed price agreed in advance, ends with full code handover and launches in 7 days."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="THIRUVANANTHAPURAM MARKET"
          headline="What Trivandrum Buyers Look For Online"
          leadParagraphs={[
            "Thiruvananthapuram is a city of engineers, civil servants and researchers. Technopark opened here as India's first IT park, Kerala Startup Mission runs from the city, and VSSC builds launch vehicles at Thumba. People who work in these places know a fast, well-made site when they see one, and they judge vendors by it.",
            "The economy splits into distinct buyers. Software firms in Kazhakuttam sell to enterprise clients abroad. The Secretariat and state agencies buy from contractors and consultants. Tourists come for Kovalam, Varkala and the Padmanabhaswamy Temple. Ayurveda hospitals and retreats draw patients from Europe, the Gulf and the US. Each group asks different questions, so each needs a different site plan.",
            "One search detail matters more here than in most cities. People type both Thiruvananthapuram and Trivandrum. Formal and government searches use the first. Residents, NRIs and travellers often use the second. A site built for one name misses part of its audience, so we write both into titles, copy and schema.",
          ]}
          stats={[
            {
              value: '450+',
              label: "Companies at Technopark Trivandrum, India's first IT park, with 75,000+ people employed",
              sourceUrl: 'https://www.technopark.org/',
              sourceLabel: 'Technopark Kerala',
            },
            {
              value: '4,500+',
              label: "Startups backed by Kerala Startup Mission (KSUM), headquartered in Thiruvananthapuram",
              sourceUrl: 'https://startupmission.kerala.gov.in/',
              sourceLabel: 'Kerala Startup Mission',
            },
            {
              value: 'VSSC',
              label: "ISRO's Vikram Sarabhai Space Centre, a large employer at the centre of the city's space engineering work",
              sourceUrl: 'https://www.vssc.gov.in/',
              sourceLabel: 'ISRO VSSC',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · THIRUVANANTHAPURAM"
          headline="What a Trivandrum Website Needs to Do"
          lead="Four buyers drive most business here: enterprise IT clients, government departments, overseas tourists and Ayurveda patients. Each one judges a site on different proof. We pick the buyer first and design from there."
          body={
            <>
              <p>
                
                Technopark software firms sell to clients who rarely meet them before signing. The site has to prove capability with case studies, the stack, certifications and team depth, and then make it easy to start a conversation. KSUM startups need the same clarity plus product pages and the kind of proof an investor checks.
              </p>
              <p>
                
                Government contractors, VSSC suppliers and consultants to state agencies use the website as a capability statement. Procurement officers look for past projects, compliance documents and named expertise before a tender goes out. We build these sites around credentials and a simple enquiry route for RFPs.
              </p>
              <p>
                
                Kovalam and Varkala resorts, Ayurveda centres and city hotels sell to travellers who compare photos and reviews on a phone. We build image-led pages, short booking requests and copy written for guests from Europe, the Gulf and the US. Every Trivandrum project includes discovery, Figma wireframes, the Next.js build, search setup under both city names, GA4 and 30 days of free fixes.
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
                  
                  Four Trivandrum buyers. Four plans.
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    type: 'IT & Software (Technopark)',
                    need: 'Case studies + stack + enterprise contact route',
                    area: 'Technopark · Kazhakuttam · KSUM',
                    colour: '#F05A28',
                  },
                  {
                    type: 'Government & ISRO Ecosystem',
                    need: 'Capability statement + tender enquiry form',
                    area: 'Secretariat · VSSC · KSITIL · Pattom',
                    colour: '#0F0F12',
                  },
                  {
                    type: 'Tourism & Hospitality',
                    need: 'Photos + booking request + review section',
                    area: 'Kovalam · Varkala · Padmanabhaswamy',
                    colour: '#F05A28',
                  },
                  {
                    type: 'Ayurveda & Wellness',
                    need: 'Practitioner credentials + treatment booking + overseas reach',
                    area: 'Thiruvananthapuram wellness corridor · NRI & EU travellers',
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
                  
                  One build standard. A plan set by your buyer.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 6. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="What Trivandrum Businesses Get From FactoryJet"
          lead="Trivandrum buyers are educated, technical and well travelled, and they notice a slow or dated site. Many local agencies take weeks to quote and longer to deliver. We fix the price before you commit, write the 7-day date into the contract and build in Next.js, so pages load fast, plugin bills disappear and the code is yours."
          pillars={[
            {
              icon: '⚡',
              title: 'Seven days, in the contract.',
              body: "A Technopark team chasing a client pitch or a startup preparing for an investor meeting cannot wait three months for a site. We launch in 7 days and the date is written into the agreement. Across our projects, 97% have shipped on the agreed date.",
            },
            {
              icon: '🏗️',
              title: "Next.js speed for a technical audience.",
              body: "Engineers at Technopark and VSSC feel the difference between a quick site and a sluggish one. WordPress builds each page on request with PHP and dozens of database queries. Next.js serves finished files from Cloudflare, usually under 1.5 seconds on 4G against 4–6 seconds for WordPress. Visitors notice that gap, and so does Google.",
            },
            {
              icon: '📋',
              title: 'Price agreed once, before work begins.',
              body: "The quote is in writing before you commit. There is no discovery fee and no extra invoice after launch. Scope and cost are settled at the start.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How Your Trivandrum Website Is Built in 7 Days"
          lead="The buyer is agreed first, then phone layouts, then code. Analytics and search setup are ready before launch."
          stages={TVM_JOURNEY_STAGES}
          closingNote="FIVE STEPS · SEVEN DAYS · NEXT.JS ON CLOUDFLARE · GA4 AT LAUNCH · NO DOWNTIME"
        />

        {/* ── 8. PORTFOLIO ─────────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="Two builds for Indian clients."
          cards={[
            {
              industry: 'Wholesale Distribution · Commerceflo',
              title: 'Belle Maison | Mumbai',
              description:
                "A Mumbai wholesale supplier of artificial plants, flowers, flower runners, home décor and LED lighting. FactoryJet set up its B2B quote-to-cash store on Commerceflo, with tiered trade prices, a quote-to-order flow and account-based ordering.",
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Lighthouse 95+',
              stat2: 'Commerceflo · B2B',
            },
            {
              industry: 'MEP / BIM Consulting · SEO',
              title: 'Formative Concepts | Pune',
              description:
                'An MEP drafting and BIM consultancy. FactoryJet rebuilt its site on WordPress around B2B project enquiries, adding a credentials section, a project portfolio and technical SEO.',
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
          headline="FactoryJet, a Kerala Agency, a Freelancer or a Template Builder"
          lead="Trivandrum firms usually weigh four ways to get a website. Compare timeline, build quality, search setup and what you own after launch."
          pullQuote={{
            stat: '7 days',
            caption:
              'from first call to launch, with Figma design, Next.js code, search setup and a Lighthouse audit included.',
          }}
          columns={TVM_COMPARISON_COLUMNS}
          rows={TVM_COMPARISON_ROWS}
          footer="A fixed-price contract is available for any scope. We start with a free consultation and then send a written quote."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="THIRUVANANTHAPURAM × WEB DESIGN"
          headline="Websites for the Sectors That Run Trivandrum"
          lead="Software, government, space engineering, tourism, Ayurveda and education each bring a different buyer to your site. These are the six sectors we plan for most in Thiruvananthapuram."
          sectors={[
            {
              name: 'Software & IT (Technopark)',
              description:
                "Technopark was India's first IT park and now hosts 450+ companies, from global service firms to KSUM-backed product startups. Their clients sit overseas and research vendors online for weeks. IT sites need capability pages, case studies, the tech stack, team strength and a contact route that suits procurement.",
              example:
                'Product startups, outsourcing firms, SaaS teams and digital studios on the Technopark campus and along the Kazhakuttam stretch.',
            },
            {
              name: 'Government & Public Sector Suppliers',
              description:
                "The Kerala Secretariat, most state departments, KSITIL and many public sector undertakings are based in the city. Around them work contractors, systems integrators and consultants. Their sites act as capability statements: past work, team credentials, compliance records and a route for tender enquiries.",
              example:
                'IT contractors, systems integrators, engineering consultants and advisory firms that supply Kerala government bodies.',
            },
            {
              name: 'Space & Precision Engineering',
              description:
                "VSSC at Thumba develops ISRO's launch vehicles. A network of engineering firms, precision machine shops, test labs and research groups supplies it. Their sites must show technical depth, certifications and quality systems in a plain, institutional tone.",
              example:
                "Engineering firms, precision component makers, test laboratories and research groups working with ISRO and the space sector.",
            },
            {
              name: 'Beach & Heritage Tourism',
              description:
                "Kovalam's beaches, Varkala's cliffs and the Padmanabhaswamy Temple bring domestic and foreign visitors year round, along with NRI families home from the Gulf and Europe. Resorts and tour firms need photo-led pages, fast booking requests, WhatsApp chat and copy that reassures overseas guests.",
              example:
                "Beach resorts, heritage homestays, tour operators and travel agents in Kovalam, Varkala and the old city.",
            },
            {
              name: 'Ayurveda & Wellness',
              description:
                "Thiruvananthapuram is known for classical Ayurveda, with hospitals, vaidya families and retreats that treat patients from Europe, the Gulf and the US. These sites need treatment and practitioner pages, photo-led design, booking requests and English copy aimed at overseas searches.",
              example:
                'Ayurveda hospitals, Panchakarma centres, wellness retreats and vaidya practices serving local and overseas patients.',
            },
            {
              name: 'Education & Professional Firms',
              description:
                "The College of Engineering Trivandrum, the University of Kerala and many professional colleges keep the city full of graduates. That supports a strong base of chartered accountants, lawyers and consultants. Their sites need credentials, service pages, team profiles and a simple way to book a consultation.",
              example:
                "CA and CS firms, law practices, management consultants and HR firms serving government, IT and local business clients.",
            },
          ]}
        />

        <GetFreeQuoteCTA />
        {/* ── 12. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="Indian founders on working with FactoryJet"
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="What Trivandrum Businesses Ask Us"
          lead="Plain answers to the questions Thiruvananthapuram owners raise on a first call."
          categories={TVM_FAQ_CATEGORIES}
          items={TVM_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Start Your Trivandrum Website This Week"
          sub="Your next enterprise client, tender officer or overseas guest will check your site before they get in touch. In a city of careful readers, a slow or thin site sends them to a rival. Whether they type Thiruvananthapuram or Trivandrum, we make sure they land on you. Send a brief today and get a page plan within 72 hours."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price. Live in 7 days. Next.js build. Your code from day one."
        />

        {/* India web-design city cross-links (silo fix, 31 Jul 2026) */}

        <WebDesignCityLinksIN currentCity="thiruvananthapuram" />


      </main>

      <SiteFooter locale="in" />
    </>
  );
}
