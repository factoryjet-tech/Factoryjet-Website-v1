import type { Metadata } from 'next'
import Script from 'next/script'
import { webDesignCityAlternatesIN } from '@/data/hreflangMap'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import Hero from '@/components/v2/Hero'
import HeroBrowserMockup from '@/components/v2/HeroBrowserMockup'
import LogoBar from '@/components/v2/LogoBar'
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock'
import CityContextSection from '@/components/v2/CityContextSection'
import ServiceExplanation from '@/components/v2/ServiceExplanation'
import StrategicDarkSection from '@/components/v2/StrategicDarkSection'
import ServiceJourneyRow from '@/components/v2/ServiceJourneyRow'
import PortfolioShowcase from '@/components/v2/PortfolioShowcase'
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable'
import IndustriesGrid from '@/components/v2/IndustriesGrid'
import PricingTiers from '@/components/v2/PricingTiers'
import TestimonialsSection from '@/components/v2/TestimonialsSection'
import FAQ from '@/components/v2/FAQ'
import FinalCTA from '@/components/v2/FinalCTA'

export const metadata: Metadata = {
  title: 'Professional Web Design Company in Madurai | FactoryJet',
  description: 'Web design company in Madurai for textile, engineering & retail businesses. Affordable, performance-focused websites. Serving Anna Nagar & KK Nagar. 7-day delivery.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Madurai | Professional Website Design Services',
    description: 'Award-winning Web Design Company in Madurai. Fast, conversion-focused websites for textile, engineering & healthcare businesses. 7-day delivery, INR pricing.',
    url: 'https://factoryjet.com/web-design/madurai',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design Services in Madurai',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Madurai | FactoryJet',
    description: 'Award-winning Web Design Company in Madurai. Beautiful, conversion-focused websites with modern UI/UX.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/madurai',
    languages: webDesignCityAlternatesIN['madurai'],
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
}

const MDU_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Madurai Agency' },
  { label: 'Freelancer' },
] as const;

const MDU_COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: ['₹25,000', '₹50,000+', '₹8,000–₹25,000'],
  },
  {
    feature: 'Delivery timeline',
    values: ['7 days', '6–10 weeks', '3–8 weeks'],
  },
  {
    feature: 'Lighthouse 100 score',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ma" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
    ],
  },
  {
    feature: 'SME / MSME expertise',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ma" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
    ],
  },
  {
    feature: 'Fixed-price guarantee',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ma" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
    ],
  },
  {
    feature: 'Post-launch support',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ma" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
    ],
  },
];

export default function Page() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'FactoryJet Web Design Madurai',
    description: 'Professional web design company serving Madurai businesses across textile, engineering, healthcare, education, and tourism sectors.',
    url: 'https://factoryjet.com/web-design/madurai',
    telephone: '+91-XXXXXXXXXX',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Madurai',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'City', name: 'Madurai' },
      { '@type': 'City', name: 'Dindigul' },
      { '@type': 'City', name: 'Virudhunagar' },
    ],
    priceRange: '₹₹',
    serviceType: 'Web Design',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does a website cost in Madurai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Website projects in Madurai start from ₹25,000 for a professional 5-page site. We offer transparent, fixed pricing with no hidden costs — ideal for Madurai SMEs and MSMEs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you serve textile and garment businesses in Madurai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We build product catalogue sites, export portals, and brand websites for Madurai\'s textile and garment manufacturers targeting domestic and export markets.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you build a website for a Madurai hospital or healthcare provider?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We build patient-friendly hospital websites, clinic pages, and specialist practice sites optimized for local search in Madurai and the surrounding districts.',
        },
      },
      {
        '@type': 'Question',
        name: 'How fast can you deliver a website for my Madurai business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We deliver 5-page websites in 7 days. Larger projects with custom features are scoped individually but we maintain rapid delivery for all standard engagements.',
        },
      },
    ],
  }

  const heroProps = {
    eyebrow: 'WEB DESIGN · MADURAI',
    headline: "Madurai's Growing Businesses Deserve a Website That Works as Hard as They Do",
    subheadline:
      "Tamil Nadu's second-largest city is a hub for textiles, engineering, healthcare, and one of India's most iconic temple tourism destinations. Your website should help you compete beyond city limits — and win.",
    primaryCTA: { label: 'Start Your Project', modal: true as const, region: 'in' as const },
    secondaryCTA: { label: 'View Our Work', href: '/portfolio' },
    stats: [
      { value: '7-Day', label: 'Delivery Guarantee' },
      { value: '500+', label: 'Businesses Served' },
      { value: '₹25K', label: 'Starting Price' },
    ],
  }

  const cityContextProps = {
    eyebrow: 'MADURAI MARKET',
    headline: "Tamil Nadu's Second City — Rich in Commerce, Heritage, and Ambition",
    leadParagraphs: [
      "Madurai is more than the temple city. It is a significant textile and garment manufacturing hub, a growing center for auto parts and engineering components, and home to some of Tamil Nadu's most reputed hospitals and medical colleges. The city's MSME sector — spanning trading, manufacturing, and services — employs hundreds of thousands and supplies markets across India and overseas.",
      "As digital adoption accelerates across South India, Madurai businesses that invest in credible websites gain outsized advantages: ranking on Google for district-wide searches, attracting out-of-city clients, and projecting the kind of professionalism that closes larger deals. A well-built website is the single best growth investment for a Madurai SME.",
    ],
    stats: [
      { value: "2nd Largest", label: "City in Tamil Nadu by Commerce & Population", sourceUrl: "https://censusindia.gov.in/", sourceLabel: "Census India" },
      { value: "₹80,000 Cr+", label: "Madurai District GDP", sourceUrl: "https://mospi.gov.in/", sourceLabel: "MoSPI" },
      { value: "Major Export Hub", label: "Textile, Garment & Engineering Exports", sourceUrl: "https://apeda.gov.in/", sourceLabel: "APEDA" },
    ],
  }



  const darkSectionProps = {
    eyebrow: 'WHY FACTORYJET',
    headline: 'Built for Madurai Businesses That Are Ready to Grow',
    pillars: [
      {
        title: '7-Day Delivery',
        body: 'Production-ready 5-page websites in 7 days. No waiting months for a local agency to deliver.',
      },
      {
        title: 'SME-Friendly INR Pricing',
        body: 'Projects start at ₹25,000 — affordable for Madurai MSMEs without compromising on quality or performance.',
      },
      {
        title: 'Tamil Nadu Market Expertise',
        body: "We understand how Tamil Nadu buyers research, evaluate, and decide. Our sites are designed with that buyer psychology in mind.",
      },
      {
        title: 'Lighthouse 100 Performance',
        body: 'Every site scores green on Core Web Vitals — fast on Madurai 4G networks, instant on broadband.',
      },
    ],
  }

  const journeySteps = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We learn your business, your customers, and your goals in a focused 30-minute call.',
    },
    {
      step: '02',
      title: 'Strategy & Wireframe',
      description: 'We map your site structure around how Madurai and Tamil Nadu buyers evaluate and act.',
    },
    {
      step: '03',
      title: 'Design & Build',
      description: 'Design and development run in parallel. Real progress every day — not sequential hand-offs.',
    },
    {
      step: '04',
      title: 'Review & Launch',
      description: 'Two rounds of revisions, then your site goes live — most standard projects within 7 days.',
    },
  ]

  const industries = [
    {
      icon: '🧵',
      name: 'Textile & Garments',
      description: 'Export-ready product sites and catalogues for Madurai\'s textile manufacturers, dyers, and garment exporters.',
    },
    {
      icon: '⚙️',
      name: 'Engineering & Auto Parts',
      description: 'B2B capability sites and supplier portals for engineering component manufacturers and auto parts vendors.',
    },
    {
      icon: '🏥',
      name: 'Healthcare & Hospitals',
      description: 'Patient-friendly websites for Madurai hospitals, specialist clinics, and diagnostic centres — built for local search.',
    },
    {
      icon: '🎓',
      name: 'Education',
      description: 'Lead-generating sites for engineering colleges, arts colleges, coaching institutes, and tutorial centres in Madurai.',
    },
    {
      icon: '🛒',
      name: 'Trading & Retail',
      description: 'Online presence and e-commerce sites for wholesale traders, retail stores, and FMCG distributors.',
    },
    {
      icon: '🕌',
      name: 'Tourism & Hospitality',
      description: 'Booking-focused websites for Madurai hotels, resorts, tour operators, and pilgrimage travel businesses.',
    },
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      priceRange: '₹25,000',
      description: 'For small Madurai businesses and solo operators needing a credible web presence quickly.',
      features: [
        '5 pages',
        'Mobile-first design',
        'Contact & enquiry form',
        '7-day delivery',
        'Basic SEO setup',
        '30-day support',
      ],
      cta: { label: 'Get Started', modal: true as const, region: 'in' as const },
    },
    {
      name: 'Growth',
      priceRange: '₹50,000',
      description: 'For growing Madurai businesses needing more pages, stronger design, and better lead generation.',
      features: [
        'Up to 12 pages',
        'Custom UI design system',
        'Blog / news section',
        'WhatsApp & CRM integration',
        'Advanced SEO setup',
        '60-day support',
      ],
      cta: { label: 'Get Started', modal: true as const, region: 'in' as const },
      popular: true,
    },
    {
      name: 'Enterprise',
      priceRange: '₹1,00,000+',
      description: 'For hospitals, colleges, or manufacturers needing custom portals or multi-location websites.',
      features: [
        'Pages scoped per project',
        'Custom web application',
        'Multi-location or multi-department',
        'Tamil + English bilingual',
        'Priority delivery & support',
        'Dedicated project manager',
      ],
      cta: { label: 'Contact Us', modal: true as const, region: 'in' as const },
    },
  ] as const

const MDU_FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Pricing' },
  { key: 'process', label: 'Process' },
  { key: 'technical', label: 'Technical' },
  { key: 'ecommerce', label: 'E-Commerce' },
  { key: 'local', label: 'Madurai' },
] as const;

const MDU_FAQ_ITEMS = [
  { category: 'pricing', question: 'What does a website cost for a Madurai business?', answer: 'Our Madurai projects start at ₹25,000 for a 5-page site. Growth packages run ₹50,000 and enterprise custom builds start at ₹1,00,000. All pricing is fixed — no surprise additions.' },
  { category: 'pricing', question: 'Do you offer installment payment options?', answer: 'Yes. Standard split is 50% at kickoff and 50% on delivery. For larger hospital or educational institution websites we can structure 3-stage payments.' },
  { category: 'pricing', question: 'Are there monthly fees after the website is built?', answer: 'No mandatory monthly fees. Hosting, domain, and optional maintenance are separate and clearly quoted before you sign.' },
  { category: 'pricing', question: 'Is the pricing affordable for small Madurai businesses?', answer: "Yes. Our Starter package at ₹25,000 is specifically designed for SMEs and MSMEs. We don't compromise on quality — we've built efficient processes that let us deliver premium websites at accessible prices." },
  { category: 'process', question: 'How does the 7-day website delivery work?', answer: 'After kickoff call and content submission, design and development happen in parallel. You receive a review link on day 5, we finalize revisions by day 6, and the site goes live on day 7.' },
  { category: 'process', question: 'What information do I need to provide to get started?', answer: 'Your business logo, basic information about your services, and any existing photos or content. We guide you through a structured brief that takes under 30 minutes.' },
  { category: 'process', question: 'How many revisions can I request?', answer: 'Two rounds of revisions are included in all packages. Additional revisions are billed at a flat rate communicated upfront.' },
  { category: 'process', question: 'Do you write the website content for me?', answer: 'Yes. Professional copywriting is included in all packages. We write in clear, professional English and you review and approve everything before launch.' },
  { category: 'technical', question: 'Will my Madurai business rank on Google?', answer: 'Every site is built with on-page SEO best practices — proper heading structure, meta tags, schema markup, Google Maps integration, and fast loading. For ongoing content SEO we offer separate retainer packages.' },
  { category: 'technical', question: 'Will the website work on mobile phones?', answer: 'All our builds are mobile-first. Given that most Madurai users browse on smartphones, this is non-negotiable. We test across iOS and Android at multiple screen sizes.' },
  { category: 'technical', question: 'Can the website support Tamil language content?', answer: 'Yes. We can build bilingual Tamil + English websites for businesses targeting local consumers. Proper Unicode rendering and font support for Tamil script is included.' },
  { category: 'technical', question: 'Can I update the website content myself?', answer: 'Yes. WordPress builds include a CMS training session so you can manage your own content. For Next.js builds we provide a simple editing workflow.' },
  { category: 'ecommerce', question: 'Can you build an online store for my Madurai retail business?', answer: 'Yes. We build Shopify and custom e-commerce sites for retail, D2C, and wholesale businesses. Prices start at ₹50,000 for a fully functional online store.' },
  { category: 'ecommerce', question: 'Do you support Indian payment gateways?', answer: 'Yes — Razorpay, PayU, and CCAvenue are standard. UPI and net banking supported out of the box.' },
  { category: 'ecommerce', question: 'Can you build an online booking system for my hotel or tour operator?', answer: 'Yes. We integrate booking forms, availability calendars, and WhatsApp booking flows for Madurai hospitality and tourism businesses.' },
  { category: 'ecommerce', question: 'Can you build a patient appointment booking system for a hospital?', answer: 'Yes. We build hospital websites with online appointment booking, department pages, doctor profiles, and patient enquiry forms — all optimized for local Madurai search.' },
  { category: 'local', question: 'Do you build websites for textile exporters in Madurai?', answer: "Yes. We build export-facing product catalogues, company profile sites, and B2B inquiry portals for Madurai's textile, garment, and dyeing industry — targeting domestic buyers and international importers." },
  { category: 'local', question: 'Can you build a website for a Madurai hospital or medical college?', answer: "Yes. We build comprehensive hospital websites with specialty department pages, doctor profiles, appointment booking, and local SEO optimized for searches across Madurai, Dindigul, and Virudhunagar districts." },
  { category: 'local', question: 'Do you support Tamil-language websites for local customers?', answer: "Yes. We build Tamil + English bilingual websites for businesses targeting local Madurai consumers. Our Enterprise tier includes full bilingual content support with proper Tamil script rendering." },
  { category: 'local', question: 'Can you help a Madurai business attract customers from other Tamil Nadu cities?', answer: "Absolutely. Many Madurai clients — especially hospitals, colleges, and manufacturers — use their websites to attract patients, students, and buyers from Tirunelveli, Dindigul, Ramanathapuram, and beyond. We design and optimize for that reach." },
];


  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `https://factoryjet.com/web-design/madurai#howto`,
    name: `How FactoryJet builds your Madurai website in 7 days`,
    description: `Our 7-day process for delivering a professional, AI-powered website for Madurai businesses.`,
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      minValue: '25000',
    },
    totalTime: 'P7D',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Day 1 — Discovery Call',
        text: `We learn your business, your Madurai market, your goals, and what you need the website to do.`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Day 2 — Strategy & Structure',
        text: `We map your site architecture, research your Madurai competitors, identify your top keywords, and write the first draft of your page copy.`,
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Days 3–4 — Design',
        text: 'Your bespoke design is created — homepage and inner pages. You get a design preview link. Feedback incorporated within 24 hours.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Days 5–6 — Development & SEO',
        text: `Your approved design is built in code — fast, mobile-first, and SEO-optimised. Madurai local schema markup added. Google Analytics and Search Console connected.`,
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Day 7 — Launch',
        text: 'Final review, testing across 5 devices, and go-live. You receive full handover documentation and a 30-minute training session.',
      },
    ],
  };

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://factoryjet.com/web-design/madurai#webpage`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2:first-of-type'],
    },
    url: `https://factoryjet.com/web-design/madurai`,
  };

  const finalCTAProps = {
    headline: "Ready to Put Madurai's Best Businesses Online?",
    sub: "Join 500+ businesses that trust FactoryJet. Whether you're a textile exporter, a hospital, an engineering manufacturer, or a retail brand — we deliver a world-class website in 7 days.",
    primaryCta: { label: 'Start Your Project', modal: true as const, region: 'in' as const },
    secondaryCta: { label: 'View Portfolio', href: '/portfolio' },
  }

  return (
    <>
      <Script
        id="mdu-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="mdu-faq-schema"
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
          { name: 'Madurai', url: 'https://factoryjet.com/web-design/madurai' },
        ]}
      />
      <Hero {...heroProps} />
      <HeroBrowserMockup />
      <LogoBar />
      <BigThreeTrustBlock />
      <CityContextSection {...cityContextProps} />
      <ServiceExplanation
          headline="Madurai Has Many Business Types — We Serve All of Them"
          lead="From MSME manufacturers in Kappalur to hospital chains in Anna Nagar, and from engineering exporters to temple tourism operators, Madurai's business diversity is its strength. We build websites that serve each segment's unique needs."
          rightSlot={
            <div className="w-full space-y-4 rounded-2xl border border-black/10 bg-white p-6 shadow-sm lg:p-8">
              <p className="font-fj-mono font-medium uppercase text-[#F05A28]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                What Your Buyers Care About
              </p>
              <div className="space-y-5">
                <div>
                  <p className="font-fj-display font-semibold text-[#0F0F12]" style={{ fontSize: '0.9375rem' }}>B2B / Manufacturing &amp; Export (Kappalur SIDCO / Mattuthavani)</p>
                  <p className="mt-1 font-fj-body text-sm text-[#525252]">Product specifications, export certifications, capacity statements, and professional imagery. B2B and international buyers form impressions from your website before ever calling you.</p>
                </div>
                <div>
                  <p className="font-fj-display font-semibold text-[#0F0F12]" style={{ fontSize: '0.9375rem' }}>Local / Retail, Healthcare &amp; Services (Anna Nagar / KK Nagar / SS Colony)</p>
                  <p className="mt-1 font-fj-body text-sm text-[#525252]">Google Maps optimization, patient or customer reviews, service menus, and clear contact CTAs. Local Madurai consumers search on mobile — your site must load fast and make it easy to act.</p>
                </div>
              </div>
            </div>
          }
        />
      <StrategicDarkSection {...darkSectionProps} />
      <ServiceJourneyRow eyebrow="OUR PROCESS" headline="How We Build Your Madurai Website in 7 Days" />
      <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="What India's businesses look like after FactoryJet."
          cards={[
            {
              industry: 'Interior Décor · Web Design',
              title: 'Belle Maison — Mumbai',
              description: 'FactoryJet built their v2 website on Next.js with a Figma-designed product showcase, WhatsApp inquiry flow, and SEO targeting high-value search queries.',
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Lighthouse 95+',
              stat2: 'Next.js · WhatsApp',
            },
            {
              industry: 'B2B · Commerceflo',
              title: 'Bombay Petals — Mumbai',
              description: 'B2B artificial plants and décor supplier. Dual-storefront solution — B2B wholesale portal with volume pricing and a D2C consumer store — on Commerceflo — an AI-native unified commerce platform.',
              imageSrc: '/images/portfolio/bombay-petals.webp',
              stat1: '7-day delivery',
              stat2: 'Razorpay integrated',
            },
            {
              industry: 'MEP / BIM Consulting · SEO',
              title: 'Formative Concepts — Pune',
              description: 'Authority-building website for an MEP drafting and BIM consulting firm — credentials display, project portfolio, and technical SEO for B2B project enquiries.',
              imageSrc: '/images/portfolio/formative-concepts.webp',
              stat1: 'B2B authority site',
              stat2: 'SEO + Next.js',
            },
          ]}
          ctaHref="/portfolio"
          ctaLabel="View full portfolio"
        />
      <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Madurai Agency vs. Freelancer"
          lead="Not all web design options in Madurai deliver the same output. Here is the honest comparison — scope, price, timeline, and what you own after launch."
          pullQuote={{
            stat: '₹25,000',
            caption: 'starting price — same Figma-first design, Next.js engineering, technical SEO, and Lighthouse audit as a ₹50,000+ Madurai agency project.',
          }}
          columns={MDU_COMPARISON_COLUMNS}
          rows={MDU_COMPARISON_ROWS}
          footer="Prices reflect typical Madurai market ranges as of 2025. FactoryJet fixed-price contracts available for all tiers."
        />
      <IndustriesGrid />
      <PricingTiers headline="Simple, Transparent Pricing for Madurai Businesses" tiers={pricingTiers} />
      <TestimonialsSection />
      <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Common Questions from Madurai Businesses"
          lead="Everything Madurai businesses ask before starting a project — answered straight."
          categories={MDU_FAQ_CATEGORIES}
          items={MDU_FAQ_ITEMS}
        />
      <FinalCTA {...finalCTAProps} />
      <SiteFooter locale="in" />
    </>
  )
}
