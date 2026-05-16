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
  title: 'Expert Web Design Company in Chennai | FactoryJet',
  description: 'Professional web design company in Chennai building fast, conversion-focused websites for auto, IT, and manufacturing businesses across OMR, Anna Nagar & Guindy. 7-day delivery.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Chennai | Professional Website Design Services',
    description: 'Award-winning Web Design Company in Chennai. Fast, conversion-focused websites for auto, IT & healthcare businesses. 7-day delivery, INR pricing.',
    url: 'https://factoryjet.com/web-design/chennai',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Web Design Company in Chennai',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Chennai | FactoryJet',
    description: 'Award-winning Web Design Company in Chennai. Beautiful, conversion-focused websites with modern UI/UX.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/chennai',
    languages: webDesignCityAlternatesIN['chennai'],
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

export default function Page() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'FactoryJet Web Design Chennai',
    description: 'Professional web design company serving Chennai businesses across automotive, IT, healthcare, and manufacturing sectors.',
    url: 'https://factoryjet.com/web-design/chennai',
    telephone: '+91-XXXXXXXXXX',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'City', name: 'Chennai' },
      { '@type': 'City', name: 'Tambaram' },
      { '@type': 'City', name: 'Kancheepuram' },
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
        name: 'How much does a website cost in Chennai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Website projects in Chennai start from ₹25,000 for a professional 5-page site. E-commerce and custom web apps are priced higher depending on scope. We offer transparent, fixed pricing with no hidden costs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you serve automotive and manufacturing businesses in Chennai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We build B2B websites, supplier portals, and product catalogues for auto component manufacturers, Tier-1 vendors, and industrial businesses across Ambattur, Guindy, and Sriperumbudur.',
        },
      },
      {
        '@type': 'Question',
        name: 'How fast can you deliver a website for my Chennai business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We deliver 5-page websites in 7 days. Larger projects with custom features are scoped individually, but we maintain rapid turnarounds across all engagements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you build websites for IT and software companies on OMR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We specialize in product-focused websites for IT services, SaaS companies, and consulting firms on OMR and Perungudi. Our designs communicate technical credibility while converting visitors.',
        },
      },
    ],
  }

  const heroProps = {
    eyebrow: 'WEB DESIGN · CHENNAI',
    headline: "Chennai's Auto & IT Corridor Needs a Website That Performs",
    subheadline:
      "From Ambattur's manufacturing estates to OMR's IT corridor, Chennai businesses compete on a national and global stage. Your website should reflect that ambition — fast, credible, and built to convert.",
    primaryCTA: { label: 'Start Your Project', modal: true as const, region: 'in' as const },
    secondaryCTA: { label: 'View Our Work', href: '/portfolio' },
    stats: [
      { value: '7-Day', label: 'Delivery Guarantee' },
      { value: '500+', label: 'Businesses Served' },
      { value: '₹25K', label: 'Starting Price' },
    ],
  }

  const cityContextProps = {
    city: 'Chennai',
    headline: "India's Auto Capital and a Rising IT Powerhouse",
    body: "Chennai is the undisputed automotive capital of India — home to Hyundai, Ford, BMW, and hundreds of Tier-1 and Tier-2 suppliers concentrated in Ambattur, Guindy, and Sriperumbudur. Simultaneously, the OMR IT corridor has made Chennai a top-5 software export city, with global MNCs and growing product startups calling it home.",
    body2:
      "For businesses here, a weak website means lost RFQs, missed B2B partnerships, and invisible digital presence in a city that increasingly runs on credibility signals. Whether you're a component manufacturer needing a supplier portal or an IT firm targeting overseas clients, your website is your 24/7 sales representative.",
    stats: [
      { value: "$7B+", label: "IT Exports via OMR Corridor" },
      { value: "India's Auto Capital", label: "Hyundai, Ford, BMW Manufacturing Hub" },
      { value: "₹7L Cr+", label: "Greater Chennai GDP" },
    ],
  }

  const serviceExplanationProps = {
    headline: 'Two Chennai Markets, One Design Partner',
    body: "Chennai's business landscape splits cleanly into industrial/B2B and IT/consumer segments — each needing a completely different web strategy. We design for both.",
    rightSlot: {
      title: 'What Your Buyers Care About',
      items: [
        {
          label: 'Auto & Manufacturing (Ambattur / Guindy / Sriperumbudur)',
          description:
            'B2B credibility, ISO certifications, product catalogues, RFQ forms, and supplier capability statements. Buyers here evaluate vendors rigorously — your website must project quality.',
        },
        {
          label: 'IT & Services / Consumer (OMR / Anna Nagar / Adyar)',
          description:
            'Fast-loading SaaS landing pages, service portfolio sites, and D2C storefronts. These audiences expect modern design, instant mobile loading, and clear value propositions.',
        },
      ],
    },
  }

  const darkSectionProps = {
    eyebrow: 'WHY FACTORYJET',
    headline: 'Built for Chennai Businesses That Mean Business',
    points: [
      {
        title: '7-Day Delivery',
        body: 'We ship 5-page production-ready websites in 7 days. No months-long agency timelines. Just results.',
      },
      {
        title: 'INR Pricing, No Surprises',
        body: 'Fixed-price projects from ₹25,000. No hidden costs, no scope creep invoices.',
      },
      {
        title: 'B2B & Industrial Expertise',
        body: "We understand the RFQ-driven world of Chennai's manufacturing sector. Our sites communicate technical authority that enterprise buyers trust.",
      },
      {
        title: 'Lighthouse 100 Performance',
        body: 'Every site we build hits green Core Web Vitals. Fast on Chennai\'s 4G networks, faster on fibre.',
      },
    ],
    cta: { label: 'See Our Portfolio', href: '/portfolio' },
  }

  const journeySteps = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We learn your business, target customers, and goals in a focused 30-minute call.',
    },
    {
      step: '02',
      title: 'Strategy & Wireframe',
      description: 'We map your site structure and user flows — built around how Chennai buyers actually evaluate vendors.',
    },
    {
      step: '03',
      title: 'Design & Build',
      description: 'Full visual design and development happens in parallel. You see real progress daily.',
    },
    {
      step: '04',
      title: 'Review & Launch',
      description: 'You review, we refine, and your site goes live — typically within 7 days of kickoff.',
    },
  ]

  const comparisonRows = [
    {
      feature: 'Delivery Time',
      columns: [
        { label: 'FactoryJet', isFactoryJet: true, value: <CompareIcon type="text" text="7 days" /> },
        { label: 'Chennai Agency', value: <CompareIcon type="text" text="6–12 weeks" /> },
        { label: 'Freelancer', value: <CompareIcon type="text" text="3–8 weeks" /> },
      ],
    },
    {
      feature: 'Starting Price',
      columns: [
        { label: 'FactoryJet', isFactoryJet: true, value: <CompareIcon type="text" text="₹25,000" /> },
        { label: 'Chennai Agency', value: <CompareIcon type="text" text="₹80,000+" /> },
        { label: 'Freelancer', value: <CompareIcon type="text" text="₹15,000–₹40,000" /> },
      ],
    },
    {
      feature: 'Lighthouse 100 Score',
      columns: [
        { label: 'FactoryJet', isFactoryJet: true, value: <CompareIcon type="check" /> },
        { label: 'Chennai Agency', value: <CompareIcon type="cross" /> },
        { label: 'Freelancer', value: <CompareIcon type="partial" /> },
      ],
    },
    {
      feature: 'B2B / Industrial Expertise',
      columns: [
        { label: 'FactoryJet', isFactoryJet: true, value: <CompareIcon type="check" /> },
        { label: 'Chennai Agency', value: <CompareIcon type="partial" /> },
        { label: 'Freelancer', value: <CompareIcon type="partial" /> },
      ],
    },
    {
      feature: 'Fixed-Price Guarantee',
      columns: [
        { label: 'FactoryJet', isFactoryJet: true, value: <CompareIcon type="check" /> },
        { label: 'Chennai Agency', value: <CompareIcon type="cross" /> },
        { label: 'Freelancer', value: <CompareIcon type="cross" /> },
      ],
    },
    {
      feature: 'Post-Launch Support',
      columns: [
        { label: 'FactoryJet', isFactoryJet: true, value: <CompareIcon type="check" /> },
        { label: 'Chennai Agency', value: <CompareIcon type="partial" /> },
        { label: 'Freelancer', value: <CompareIcon type="cross" /> },
      ],
    },
  ]

  const industries = [
    {
      icon: '🏭',
      name: 'Automotive & Manufacturing',
      description: 'Supplier portals, product catalogues, and B2B capability sites for Tier-1 and Tier-2 auto component vendors.',
    },
    {
      icon: '💻',
      name: 'IT & Software',
      description: 'Modern websites for IT services companies, SaaS products, and software consultancies on OMR.',
    },
    {
      icon: '🏥',
      name: 'Healthcare & Medical Devices',
      description: 'Patient-friendly websites and product portals for hospitals, clinics, and medical device manufacturers.',
    },
    {
      icon: '🚢',
      name: 'Logistics & Ports',
      description: 'Corporate and operational websites for freight, shipping, and warehousing businesses near Chennai Port.',
    },
    {
      icon: '🛍️',
      name: 'Retail & D2C',
      description: 'Conversion-focused e-commerce and brand sites for retail and direct-to-consumer businesses.',
    },
    {
      icon: '🎓',
      name: 'Education',
      description: 'Lead-generating websites for coaching institutes, schools, and ed-tech companies targeting Tamil Nadu.',
    },
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      price: '₹25,000',
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
      price: '₹50,000',
      description: 'For growing businesses that need more content, better design, and stronger lead generation.',
      features: [
        'Up to 12 pages',
        'Custom UI design system',
        'Blog / news section',
        'WhatsApp & CRM integration',
        'Advanced SEO setup',
        '60-day support',
      ],
      cta: { label: 'Get Started', modal: true as const, region: 'in' as const },
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: '₹1,00,000+',
      description: 'For established businesses needing custom portals, integrations, or complex web applications.',
      features: [
        'Unlimited pages',
        'Custom web application',
        'ERP / CRM integrations',
        'Supplier or client portal',
        'Priority delivery & support',
        'Dedicated project manager',
      ],
      cta: { label: 'Contact Us', modal: true as const, region: 'in' as const },
    },
  ] as const

  const faqCategories = [
    {
      id: 'pricing',
      label: 'Pricing',
      questions: [
        {
          question: 'What does a website cost in Chennai?',
          answer: 'Our Chennai projects start at ₹25,000 for a 5-page site. Growth packages run ₹50,000 and enterprise custom work starts at ₹1,00,000. All prices are fixed — no surprise invoices.',
        },
        {
          question: 'Do you offer EMI or staged payment plans?',
          answer: 'Yes. We typically split payments 50% at project start and 50% on delivery. For larger projects we can structure 3-stage payments.',
        },
        {
          question: 'Are there any ongoing monthly fees?',
          answer: 'The website itself has no mandatory monthly fee. Hosting, domain, and optional maintenance plans are separate and clearly itemized before you sign.',
        },
        {
          question: 'Can I start with a small package and upgrade later?',
          answer: 'Absolutely. Many clients start with the Starter package and expand their site as revenue grows. We design with scalability in mind from day one.',
        },
      ],
    },
    {
      id: 'process',
      label: 'Process',
      questions: [
        {
          question: 'How does the 7-day delivery work?',
          answer: 'After kickoff call and content submission, our team designs and builds in parallel. You receive a review link on day 5, we finalize revisions by day 6, and the site goes live on day 7.',
        },
        {
          question: 'What do I need to provide to get started?',
          answer: 'We need your brand assets (logo, colors if any), basic business information, and any existing content. We guide you through a simple brief that takes under 30 minutes.',
        },
        {
          question: 'How many revisions are included?',
          answer: 'Two rounds of revisions are included in all packages. Additional revisions are billed at a flat hourly rate communicated upfront.',
        },
        {
          question: 'Do you handle copywriting?',
          answer: 'Yes. All our packages include professional copywriting. You review and approve all text before the site goes live.',
        },
      ],
    },
    {
      id: 'technical',
      label: 'Technical',
      questions: [
        {
          question: 'Will my site rank on Google?',
          answer: 'We build every site with on-page SEO best practices — proper heading structure, meta tags, schema markup, and fast loading. For ongoing content SEO, we offer separate retainer packages.',
        },
        {
          question: 'Is the site mobile-friendly?',
          answer: 'Every site is built mobile-first. We test across iOS and Android at multiple screen sizes before delivery.',
        },
        {
          question: 'What technology do you use?',
          answer: 'Most sites are built on Next.js for performance or WordPress for client-editable content. We recommend the right stack for your needs and budget.',
        },
        {
          question: 'Can I edit the site myself after launch?',
          answer: 'Yes. WordPress builds include a CMS training session. For Next.js builds, we provide a simple content editing workflow or can integrate a headless CMS.',
        },
      ],
    },
    {
      id: 'ecommerce',
      label: 'E-Commerce',
      questions: [
        {
          question: 'Can you build an online store for my Chennai business?',
          answer: 'Yes. We build Shopify stores and custom e-commerce sites for retail, D2C, and B2B ordering. Prices start at ₹50,000.',
        },
        {
          question: 'Do you support Indian payment gateways?',
          answer: 'Yes — Razorpay, PayU, and CCAvenue integrations are standard. UPI and net banking are supported out of the box.',
        },
        {
          question: 'Can you build a B2B ordering portal for my manufacturing business?',
          answer: 'Yes. We build custom dealer/distributor portals with login-protected pricing, order tracking, and catalogue management.',
        },
        {
          question: 'Do you handle product photography or catalogue content?',
          answer: "We don't do in-house photography but can coordinate with Chennai-based product photographers. We handle layout, upload, and optimization of all product images.",
        },
      ],
    },
    {
      id: 'local',
      label: 'Chennai',
      questions: [
        {
          question: 'Do you serve businesses in Ambattur and Guindy industrial estates?',
          answer: "Yes. We have experience building supplier portals, company profiles, and product catalogues for manufacturing businesses across Ambattur, Guindy, Sriperumbudur, and Perungalathur.",
        },
        {
          question: 'Can you build websites for IT companies on OMR?',
          answer: "Absolutely. From startup landing pages in Perungudi to established IT services firms in Sholinganallur, we design modern, credibility-focused websites for Chennai's tech corridor.",
        },
        {
          question: 'Do you work with Tamil-language content or bilingual sites?',
          answer: "Yes. We can build bilingual (English + Tamil) websites for businesses targeting local consumers. Proper UTF-8 encoding and font rendering for Tamil script is included.",
        },
        {
          question: 'Can you help a Chennai business target overseas clients?',
          answer: "Yes. Many of our Chennai clients — especially in IT services and manufacturing — use their websites to attract UK, US, and Middle East buyers. We design for international credibility while keeping INR pricing.",
        },
      ],
    },
  ]

  const finalCTAProps = {
    headline: 'Ready to Build Your Chennai Business Online?',
    subheadline:
      "Join 500+ businesses that trust FactoryJet. Whether you're an auto components vendor in Ambattur or an IT firm on OMR, we deliver fast, credible websites that grow your business.",
    primaryCTA: { label: 'Start Your Project', modal: true as const, region: 'in' as const },
    secondaryCTA: { label: 'View Portfolio', href: '/portfolio' },
  }

  return (
    <>
      <Script
        id="chn-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="chn-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Chennai', url: 'https://factoryjet.com/web-design/chennai' },
        ]}
      />
      <Hero {...heroProps} />
      <HeroBrowserMockup />
      <LogoBar />
      <BigThreeTrustBlock />
      <CityContextSection {...cityContextProps} />
      <ServiceExplanation {...serviceExplanationProps} />
      <StrategicDarkSection {...darkSectionProps} />
      <ServiceJourneyRow steps={journeySteps} />
      <PortfolioShowcase />
      <ComparisonTable rows={comparisonRows} />
      <IndustriesGrid industries={industries} city="Chennai" />
      <PricingTiers tiers={pricingTiers} />
      <TestimonialsSection />
      <FAQ categories={faqCategories} />
      <FinalCTA {...finalCTAProps} />
      <SiteFooter locale="in" />
    </>
  )
}
