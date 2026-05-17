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
  title: 'Trusted Web Design Company in Pune | FactoryJet',
  description: 'Professional web design company in Pune building fast, conversion-focused websites for IT, automotive, and education businesses in Hinjewadi, Kharadi & Baner. 7-day delivery.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Pune | Professional Website Design Services',
    description: 'Award-winning Web Design Company in Pune. Fast, conversion-focused websites for IT, auto & education businesses. 7-day delivery, INR pricing.',
    url: 'https://factoryjet.com/web-design/pune',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Web Design Company in Pune',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Pune | FactoryJet',
    description: 'Award-winning Web Design Company in Pune. Beautiful, conversion-focused websites with modern UI/UX.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/pune',
    languages: webDesignCityAlternatesIN['pune'],
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

const PUN_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Pune Agency' },
  { label: 'Freelancer' },
] as const;

const PUN_COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: ['₹25,000', '₹75,000+', '₹15,000–₹40,000'],
  },
  {
    feature: 'Delivery timeline',
    values: ['7 days', '6–12 weeks', '3–8 weeks'],
  },
  {
    feature: 'Lighthouse 100 score',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="pa" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
    ],
  },
  {
    feature: 'IT & SaaS expertise',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="pa" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
    ],
  },
  {
    feature: 'Fixed-price guarantee',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="pa" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
    ],
  },
  {
    feature: 'Post-launch support',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="pa" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
    ],
  },
];

export default function Page() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'FactoryJet Web Design Pune',
    description: 'Professional web design company serving Pune businesses across IT, automotive, education, and manufacturing sectors.',
    url: 'https://factoryjet.com/web-design/pune',
    telephone: '+91-XXXXXXXXXX',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'City', name: 'Pune' },
      { '@type': 'City', name: 'Pimpri-Chinchwad' },
      { '@type': 'City', name: 'Hinjewadi' },
    ],
    priceRange: '₹₹',
    serviceType: 'Web Design',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does a website cost in Pune?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Website projects in Pune start from ₹25,000 for a professional 5-page site. E-commerce and custom web apps are priced higher depending on scope. We offer transparent, fixed pricing.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you serve IT companies in Hinjewadi and Kharadi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We build modern, performance-focused websites for IT services firms, SaaS products, and tech startups across Hinjewadi IT Park, Kharadi, and Wakad.',
        },
      },
      {
        '@type': 'Question',
        name: 'How fast can you deliver a website for my Pune business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We deliver 5-page websites in 7 days. Larger projects are scoped individually but we maintain rapid delivery across all engagements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you build websites for Pune educational institutes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Pune is the Oxford of the East — we build lead-generating websites for coaching institutes, colleges, and ed-tech companies that convert enquiries into admissions.',
        },
      },
    ],
  }

  const heroProps = {
    eyebrow: 'WEB DESIGN · PUNE',
    headline: "Pune's IT, Auto & Education Economy Deserves a World-Class Website",
    subheadline:
      "From Hinjewadi's tech parks to Chakan's automotive belt and Koregaon Park's startup scene, Pune runs on talent and ambition. Your website should match that energy — fast, professional, and built to grow.",
    primaryCTA: { label: 'Start Your Project', modal: true as const, region: 'in' as const },
    secondaryCTA: { label: 'View Our Work', href: '/portfolio' },
    stats: [
      { value: '7-Day', label: 'Delivery Guarantee' },
      { value: '500+', label: 'Businesses Served' },
      { value: '₹25K', label: 'Starting Price' },
    ],
  }

  const cityContextProps = {
    eyebrow: 'PUNE MARKET',
    headline: "The Oxford of the East, Now a Premier Tech & Auto Hub",
    leadParagraphs: [
      "Pune has transformed from a pensioner's paradise into one of India's most dynamic business cities. With 8,000+ technology companies in Hinjewadi and Kharadi, a massive automotive cluster in Chakan and Pimpri-Chinchwad, and over 50 engineering colleges, Pune sits at a unique intersection of talent, manufacturing, and innovation.",
      "In a city where competition is intense across every sector, your website is often the first — and sometimes only — impression you make on a potential client, partner, or hire. A slow, outdated site costs you business. A fast, well-designed one builds authority before a single call is made.",
    ],
    stats: [
      { value: "8,000+", label: "Tech Companies in Hinjewadi & Kharadi", sourceUrl: "https://nasscom.in/", sourceLabel: "NASSCOM" },
      { value: "₹5.5L Cr", label: "Pune Metro GDP", sourceUrl: "https://mospi.gov.in/", sourceLabel: "MoSPI" },
      { value: "Oxford of the East", label: "Premier Education & Research Hub", sourceUrl: "https://aicte-india.org/", sourceLabel: "AICTE" },
    ],
  }



  const darkSectionProps = {
    eyebrow: 'WHY FACTORYJET',
    headline: 'Built for Pune Businesses That Move Fast',
    pillars: [
      {
        title: '7-Day Delivery',
        body: 'Production-ready 5-page websites in 7 days. No months waiting for an agency to get started.',
      },
      {
        title: 'INR Pricing, Fixed Costs',
        body: 'Projects start at ₹25,000. Transparent scope, transparent pricing — no change order surprises.',
      },
      {
        title: 'IT & Manufacturing Expertise',
        body: "We've built for SaaS startups, auto component vendors, and EdTech platforms. We understand what Pune buyers expect.",
      },
      {
        title: 'Lighthouse 100 Performance',
        body: "Every site scores green on Core Web Vitals — fast on Pune's 4G networks, lightning on broadband.",
      },
    ],
  }

  const journeySteps = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We understand your business goals, target audience, and competitive landscape in a focused 30-minute call.',
    },
    {
      step: '02',
      title: 'Strategy & Wireframe',
      description: 'We map your site architecture around how Pune buyers evaluate and convert — not generic templates.',
    },
    {
      step: '03',
      title: 'Design & Build',
      description: 'Full visual design and development in parallel. Real progress, every day.',
    },
    {
      step: '04',
      title: 'Review & Launch',
      description: 'Two rounds of revisions, then live. Most sites ship within 7 days of kickoff.',
    },
  ]

  const industries = [
    {
      icon: '💻',
      name: 'IT & Software',
      description: 'Modern websites for IT services companies, SaaS products, and product startups in Hinjewadi and Kharadi.',
    },
    {
      icon: '🚗',
      name: 'Automotive & Engineering',
      description: 'B2B portals, supplier sites, and corporate pages for auto OEM suppliers and engineering firms in Chakan.',
    },
    {
      icon: '🎓',
      name: 'Education & EdTech',
      description: 'Lead-generating websites for coaching institutes, colleges, and ed-tech platforms targeting Pune and Maharashtra.',
    },
    {
      icon: '🏗️',
      name: 'Manufacturing & MSME',
      description: 'Credibility-first websites for Pimpri-Chinchwad manufacturers, MSME exporters, and industrial suppliers.',
    },
    {
      icon: '🏢',
      name: 'Real Estate',
      description: 'Project landing pages, developer websites, and property portfolio sites for Pune real estate firms.',
    },
    {
      icon: '🤝',
      name: 'Professional Services',
      description: 'Clean, trust-building websites for CA firms, law practices, HR consultancies, and management advisory businesses.',
    },
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      priceRange: '₹25,000',
      description: 'For small businesses and solo operators needing a credible online presence fast.',
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
      description: 'For growing Pune businesses that need richer content, stronger design, and better lead generation.',
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
      description: 'For established businesses needing custom portals, integrations, or complex web applications.',
      features: [
        'Unlimited pages',
        'Custom web application',
        'ERP / CRM integrations',
        'Client or dealer portal',
        'Priority delivery & support',
        'Dedicated project manager',
      ],
      cta: { label: 'Contact Us', modal: true as const, region: 'in' as const },
    },
  ] as const

const PUN_FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Pricing' },
  { key: 'process', label: 'Process' },
  { key: 'technical', label: 'Technical' },
  { key: 'ecommerce', label: 'E-Commerce' },
  { key: 'local', label: 'Pune' },
] as const;

const PUN_FAQ_ITEMS = [
  { category: 'pricing', question: 'What does a website cost in Pune?', answer: 'Our Pune projects start at ₹25,000 for a 5-page site. Growth packages run ₹50,000 and enterprise custom work starts at ₹1,00,000. All prices are fixed — no surprise invoices.' },
  { category: 'pricing', question: 'Do you offer staged payment plans?', answer: 'Yes. We split payments 50% at project start and 50% on delivery. For larger projects we can structure 3-stage payments.' },
  { category: 'pricing', question: 'Are there ongoing monthly fees?', answer: 'No mandatory monthly fees. Hosting, domain, and optional maintenance plans are separate and clearly itemized before you sign.' },
  { category: 'pricing', question: 'Can I start small and expand the site later?', answer: "Yes. We design for scalability from day one. Many Pune clients start with a Starter package and add pages and features as their business grows." },
  { category: 'process', question: 'How does the 7-day delivery work?', answer: 'After kickoff call and content submission, design and development happen in parallel. You receive a review link on day 5, we finalize revisions by day 6, and the site goes live on day 7.' },
  { category: 'process', question: 'What do I need to provide to get started?', answer: 'Your logo, brand colors (if any), and basic business information. We guide you through a structured brief that takes under 30 minutes.' },
  { category: 'process', question: 'How many revisions are included?', answer: 'Two rounds of revisions are included in all packages. Additional revisions are billed at a flat rate communicated upfront.' },
  { category: 'process', question: 'Do you handle copywriting?', answer: 'Yes. Professional copywriting is included in all packages. You review and approve all text before launch.' },
  { category: 'technical', question: 'Will my site rank on Google?', answer: 'Every site is built with on-page SEO best practices — headings, meta tags, schema markup, and fast loading. For ongoing content SEO we offer separate retainer packages.' },
  { category: 'technical', question: 'Is the site mobile-friendly?', answer: 'All our builds are mobile-first. We test across iOS and Android at multiple screen sizes before delivery.' },
  { category: 'technical', question: 'What technology stack do you use?', answer: 'Next.js for maximum performance or WordPress for client-editable content. We recommend the right stack for your specific needs.' },
  { category: 'technical', question: 'Can I edit the website myself after launch?', answer: 'Yes. WordPress builds include a CMS training session. For Next.js builds we provide a simple editing workflow or can integrate a headless CMS.' },
  { category: 'ecommerce', question: 'Can you build an online store for my Pune business?', answer: 'Yes. We build Shopify stores and custom e-commerce sites for retail, D2C, and B2B ordering. Prices start at ₹50,000.' },
  { category: 'ecommerce', question: 'Do you support Indian payment gateways?', answer: 'Yes — Razorpay, PayU, and CCAvenue are standard. UPI and net banking supported out of the box.' },
  { category: 'ecommerce', question: 'Can you build a dealer or distributor portal?', answer: 'Yes. We build login-protected B2B portals with custom pricing, order tracking, and product catalogue management.' },
  { category: 'ecommerce', question: 'Do you help with product listing and content?', answer: 'Yes. We handle product page layout, image optimization, and description copy as part of the project scope.' },
  { category: 'local', question: 'Do you serve IT companies in Hinjewadi IT Park?', answer: "Yes. We build modern websites for IT services firms, SaaS startups, and product companies across Hinjewadi Phase 1, 2, and 3 — and Kharadi's emerging tech cluster." },
  { category: 'local', question: 'Can you build websites for auto manufacturers in Chakan?', answer: "Absolutely. We design B2B supplier portals, capability websites, and product catalogues for Tier-1 and Tier-2 automotive component manufacturers in Chakan, Talegaon, and Pimpri-Chinchwad." },
  { category: 'local', question: 'Do you work with coaching institutes in Pune?', answer: "Yes. We build lead-generating websites for JEE/NEET coaching, MBA prep, and skill development institutes — optimized to capture enquiries and drive admissions." },
  { category: 'local', question: 'Can you help a Pune startup attract international clients?', answer: "Yes. Many of our Pune clients use their websites to target US, UK, and European buyers. We design for global credibility while keeping everything hosted and priced in India." },
];


  const finalCTAProps = {
    headline: 'Ready to Build a Website Pune Is Proud Of?',
    sub: "Join 500+ businesses that trust FactoryJet. Whether you're an IT firm in Hinjewadi, an auto supplier in Chakan, or an education brand targeting Maharashtra — we deliver in 7 days.",
    primaryCta: { label: 'Start Your Project', modal: true as const, region: 'in' as const },
    secondaryCta: { label: 'View Portfolio', href: '/portfolio' },
  }

  return (
    <>
      <Script
        id="pun-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="pun-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Pune', url: 'https://factoryjet.com/web-design/pune' },
        ]}
      />
      <Hero {...heroProps} />
      <HeroBrowserMockup />
      <LogoBar />
      <BigThreeTrustBlock />
      <CityContextSection {...cityContextProps} />
      <ServiceExplanation
          headline="Pune Has Two Speeds — We Design for Both"
          lead="Pune's business ecosystem spans enterprise IT services, fast-moving startups, industrial manufacturers, and a thriving education sector. Each needs a tailored web strategy."
          rightSlot={
            <div className="w-full space-y-4 rounded-2xl border border-black/10 bg-white p-6 shadow-sm lg:p-8">
              <p className="font-fj-mono font-medium uppercase text-[#F05A28]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                What Your Buyers Care About
              </p>
              <div className="space-y-5">
                <div>
                  <p className="font-fj-display font-semibold text-[#0F0F12]" style={{ fontSize: '0.9375rem' }}>B2B / IT &amp; Auto (Hinjewadi / Kharadi / Chakan)</p>
                  <p className="mt-1 font-fj-body text-sm text-[#525252]">Enterprise-grade design, clear service capabilities, case studies, and client logos. B2B buyers in Pune evaluate vendors with scrutiny — your site must communicate depth and reliability.</p>
                </div>
                <div>
                  <p className="font-fj-display font-semibold text-[#0F0F12]" style={{ fontSize: '0.9375rem' }}>D2C / Consumer &amp; Education (Baner / Aundh / Koregaon Park)</p>
                  <p className="mt-1 font-fj-body text-sm text-[#525252]">Conversion-focused design for consumer brands, coaching institutes, and lifestyle businesses. These audiences respond to clean aesthetics, fast load times, and clear calls to action.</p>
                </div>
              </div>
            </div>
          }
        />
      <StrategicDarkSection {...darkSectionProps} />
      <ServiceJourneyRow eyebrow="OUR PROCESS" headline="How We Build Your Pune Website in 7 Days" />
      <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="What India's businesses look like after FactoryJet."
          cards={[
            {
              industry: 'Interior Décor · Web Design',
              title: 'Belle Maison — Mumbai',
              description: 'FactoryJet built their v2 website on Next.js with a Figma-designed product showcase, WhatsApp inquiry flow, and SEO targeting high-value search queries.',
              imageSrc: '/images/ecommerce/mumbai/portfolio-belle-maison.webp',
              stat1: 'Lighthouse 95+',
              stat2: 'Next.js · WhatsApp',
            },
            {
              industry: 'B2B · Shopify E-Commerce',
              title: 'Bombay Petals — Mumbai',
              description: 'B2B artificial plants and décor supplier. Dual-storefront solution — B2B wholesale portal with volume pricing and a D2C consumer store — on a unified Shopify backend.',
              imageSrc: '/images/portfolio/formative-concepts.webp',
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
          headline="FactoryJet vs. Pune Agency vs. Freelancer"
          lead="Not all web design options in Pune deliver the same output. Here is the honest comparison — scope, price, timeline, and what you own after launch."
          pullQuote={{
            stat: '₹25,000',
            caption: 'starting price — same Figma-first design, Next.js engineering, technical SEO, and Lighthouse audit as a ₹75,000+ Pune agency project.',
          }}
          columns={PUN_COMPARISON_COLUMNS}
          rows={PUN_COMPARISON_ROWS}
          footer="Prices reflect typical Pune market ranges as of 2025. FactoryJet fixed-price contracts available for all tiers."
        />
      <IndustriesGrid />
      <PricingTiers headline="Simple, Transparent Pricing for Pune Businesses" tiers={pricingTiers} />
      <TestimonialsSection />
      <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Common Questions from Pune Businesses"
          lead="Everything Pune businesses ask before starting a project — answered straight."
          categories={PUN_FAQ_CATEGORIES}
          items={PUN_FAQ_ITEMS}
        />
      <FinalCTA {...finalCTAProps} />
      <SiteFooter locale="in" />
    </>
  )
}
