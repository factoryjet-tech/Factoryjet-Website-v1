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
import TestimonialsSection from '@/components/v2/TestimonialsSection'
import FAQ from '@/components/v2/FAQ'
import FinalCTA from '@/components/v2/FinalCTA'
import GetFreeQuoteCTA from '@/components/v2/GetFreeQuoteCTA';

export const metadata: Metadata = {
  title: 'Expert Web Design Company in Chennai | FactoryJet',
  description: 'Web design company in Chennai for auto, IT & manufacturing businesses. Fast, conversion-focused websites across OMR, Anna Nagar & Guindy. 7-day delivery.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Chennai | Professional Website Design Services',
    description: 'Award-winning Web Design Company in Chennai. Fast, conversion-focused websites for auto, IT & healthcare businesses. 7-day delivery, INR pricing.',
    url: 'https://factoryjet.com/web-design/chennai',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design Services in Chennai',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Chennai | FactoryJet',
    description: 'Award-winning Web Design Company in Chennai. Beautiful, conversion-focused websites with modern UI/UX.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
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

const CHN_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Chennai Agency' },
  { label: 'Freelancer' },
] as const;

const CHN_COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: ['₹25,000', '₹80,000+', '₹15,000–₹40,000'],
  },
  {
    feature: 'Delivery timeline',
    values: ['7 days', '6–12 weeks', '3–8 weeks'],
  },
  {
    feature: 'Lighthouse 100 score',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ca" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
    ],
  },
  {
    feature: 'B2B / Industrial expertise',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ca" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
    ],
  },
  {
    feature: 'Fixed-price guarantee',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ca" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
    ],
  },
  {
    feature: 'Post-launch support',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ca" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
    ],
  },
];

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
    serviceType: 'Web Design',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
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
    {
      '@type': 'Question',
      name: 'Who is the best web design agency in Chennai?',
      acceptedAnswer: { '@type': 'Answer', text: 'For small businesses, FactoryJet makes a strong case as the best web design company in Chennai: custom websites in 7 days, 100/100 Google speed scores, and a fixed written price. Any website design company in Chennai you compare should pass three checks: live websites you can test, speed scores you can verify, and a price that does not grow mid-project. That is the honest way to pick the best website design company in Chennai.' },
    },
    {
      '@type': 'Question',
      name: 'Should I hire web designer in Chennai or use an agency?',
      acceptedAnswer: { '@type': 'Answer', text: 'A freelancer can be right for a tiny one-page job. For a business website, a small senior team is usually faster and safer: design, code, SEO, and support in one place, at a fixed price. If you do hire web designer in Chennai directly, agree the scope and price in writing first.' },
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
    eyebrow: 'CHENNAI MARKET',
    headline: "India's Auto Capital and a Rising IT Powerhouse",
    leadParagraphs: [
      "Chennai is the undisputed automotive capital of India — home to Hyundai, Ford, BMW, and hundreds of Tier-1 and Tier-2 suppliers concentrated in Ambattur, Guindy, and Sriperumbudur. Simultaneously, the OMR IT corridor has made Chennai a top-5 software export city, with global MNCs and growing product startups calling it home.",
      "For businesses here, a weak website means lost RFQs, missed B2B partnerships, and invisible digital presence in a city that increasingly runs on credibility signals. Whether you're a component manufacturer needing a supplier portal or an IT firm targeting overseas clients, your website is your 24/7 sales representative.",
    ],
    stats: [
      { value: "$7B+", label: "IT Exports via OMR Corridor", sourceUrl: "https://nasscom.in/", sourceLabel: "NASSCOM" },
      { value: "India's Auto Capital", label: "Hyundai, Ford, BMW Manufacturing Hub", sourceUrl: "https://acma.in/", sourceLabel: "ACMA" },
      { value: "₹7L Cr+", label: "Greater Chennai GDP", sourceUrl: "https://mospi.gov.in/", sourceLabel: "MoSPI" },
    ],
  }



  const darkSectionProps = {
    eyebrow: 'WHY FACTORYJET',
    headline: 'Built for Chennai Businesses That Mean Business',
    pillars: [
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
      popular: true,
    },
    {
      name: 'Enterprise',
      priceRange: '₹1,00,000+',
      description: 'For established businesses needing custom portals, integrations, or complex web applications.',
      features: [
        'Pages scoped per project',
        'Custom web application',
        'ERP / CRM integrations',
        'Supplier or client portal',
        'Priority delivery & support',
        'Dedicated project manager',
      ],
      cta: { label: 'Contact Us', modal: true as const, region: 'in' as const },
    },
  ] as const

const CHN_FAQ_CATEGORIES = [  { key: 'process', label: 'Process' },
  { key: 'technical', label: 'Technical' },
  { key: 'ecommerce', label: 'E-Commerce' },
  { key: 'local', label: 'Chennai' },
] as const;

const CHN_FAQ_ITEMS = [
  { category: 'pricing', question: 'What does a website cost in Chennai?', answer: 'Our Chennai projects start at ₹25,000 for a 5-page site. Growth packages run ₹50,000 and enterprise custom work starts at ₹1,00,000. All prices are fixed — no surprise invoices.' },
  { category: 'pricing', question: 'Do you offer EMI or staged payment plans?', answer: 'Yes. We typically split payments 50% at project start and 50% on delivery. For larger projects we can structure 3-stage payments.' },
  { category: 'pricing', question: 'Are there any ongoing monthly fees?', answer: 'The website itself has no mandatory monthly fee. Hosting, domain, and optional maintenance plans are separate and clearly itemized before you sign.' },
  { category: 'pricing', question: 'Can I start with a small package and upgrade later?', answer: 'Absolutely. Many clients start with the Starter package and expand their site as revenue grows. We design with scalability in mind from day one.' },
  { category: 'process', question: 'How does the 7-day delivery work?', answer: 'After kickoff call and content submission, our team designs and builds in parallel. You receive a review link on day 5, we finalize revisions by day 6, and the site goes live on day 7.' },
  { category: 'process', question: 'What do I need to provide to get started?', answer: 'We need your brand assets (logo, colors if any), basic business information, and any existing content. We guide you through a simple brief that takes under 30 minutes.' },
  { category: 'process', question: 'How many revisions are included?', answer: 'Two rounds of revisions are included in all packages. Additional revisions are billed at a flat hourly rate communicated upfront.' },
  { category: 'process', question: 'Do you handle copywriting?', answer: 'Yes. All our packages include professional copywriting. You review and approve all text before the site goes live.' },
  { category: 'technical', question: 'Will my site rank on Google?', answer: 'We build every site with on-page SEO best practices — proper heading structure, meta tags, schema markup, and fast loading. For ongoing content SEO, we offer separate retainer packages.' },
  { category: 'technical', question: 'Is the site mobile-friendly?', answer: 'Every site is built mobile-first. We test across iOS and Android at multiple screen sizes before delivery.' },
  { category: 'technical', question: 'What technology do you use?', answer: 'Most sites are built on Next.js for performance or WordPress for client-editable content. We recommend the right stack for your needs and budget.' },
  { category: 'technical', question: 'Can I edit the site myself after launch?', answer: 'Yes. WordPress builds include a CMS training session. For Next.js builds, we provide a simple content editing workflow or can integrate a headless CMS.' },
  { category: 'ecommerce', question: 'Can you build an online store for my Chennai business?', answer: 'Yes. We build Shopify stores and custom e-commerce sites for retail, D2C, and B2B ordering. Prices start at ₹50,000.' },
  { category: 'ecommerce', question: 'Do you support Indian payment gateways?', answer: 'Yes — Razorpay, PayU, and CCAvenue integrations are standard. UPI and net banking are supported out of the box.' },
  { category: 'ecommerce', question: 'Can you build a B2B ordering portal for my manufacturing business?', answer: 'Yes. We build custom dealer/distributor portals with login-protected pricing, order tracking, and catalogue management.' },
  { category: 'ecommerce', question: 'Do you handle product photography or catalogue content?', answer: "We don't do in-house photography but can coordinate with Chennai-based product photographers. We handle layout, upload, and optimization of all product images." },
  { category: 'local', question: 'Do you serve businesses in Ambattur and Guindy industrial estates?', answer: "Yes. We have experience building supplier portals, company profiles, and product catalogues for manufacturing businesses across Ambattur, Guindy, Sriperumbudur, and Perungalathur." },
  { category: 'local', question: 'Can you build websites for IT companies on OMR?', answer: "Absolutely. From startup landing pages in Perungudi to established IT services firms in Sholinganallur, we design modern, credibility-focused websites for Chennai's tech corridor." },
  { category: 'local', question: 'Do you work with Tamil-language content or bilingual sites?', answer: "Yes. We can build bilingual (English + Tamil) websites for businesses targeting local consumers. Proper UTF-8 encoding and font rendering for Tamil script is included." },
  { category: 'local', question: 'Can you help a Chennai business target overseas clients?', answer: "Yes. Many of our Chennai clients — especially in IT services and manufacturing — use their websites to attract UK, US, and Middle East buyers. We design for international credibility while keeping INR pricing." },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best web design agency in Chennai?',
    answer:
      'For small businesses, FactoryJet makes a strong case as the best web design company in Chennai: custom websites in 7 days, 100/100 Google speed scores, and a fixed written price. Any website design company in Chennai you compare should pass three checks: live websites you can test, speed scores you can verify, and a price that does not grow mid-project. That is the honest way to pick the best website design company in Chennai.',
  },
  {
    category: 'pricing',
    question: 'Should I hire web designer in Chennai or use an agency?',
    answer:
      'A freelancer can be right for a tiny one-page job. For a business website, a small senior team is usually faster and safer: design, code, SEO, and support in one place, at a fixed price. If you do hire web designer in Chennai directly, agree the scope and price in writing first.',
  },
];


  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `https://factoryjet.com/web-design/chennai#howto`,
    name: `How FactoryJet builds your Chennai website in 7 days`,
    description: `Our 7-day process for delivering a professional, AI-powered website for Chennai businesses.`,
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
        text: `We learn your business, your Chennai market, your goals, and what you need the website to do.`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Day 2 — Strategy & Structure',
        text: `We map your site architecture, research your Chennai competitors, identify your top keywords, and write the first draft of your page copy.`,
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
        text: `Your approved design is built in code — fast, mobile-first, and SEO-optimised. Chennai local schema markup added. Google Analytics and Search Console connected.`,
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
    '@id': `https://factoryjet.com/web-design/chennai#webpage`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2:first-of-type'],
    },
    url: `https://factoryjet.com/web-design/chennai`,
  };

  const finalCTAProps = {
    headline: 'Ready to Build Your Chennai Business Online?',
    sub: "Join 500+ businesses that trust FactoryJet. Whether you're an auto components vendor in Ambattur or an IT firm on OMR, we deliver fast, credible websites that grow your business.",
    primaryCta: { label: 'Start Your Project', modal: true as const, region: 'in' as const },
    secondaryCta: { label: 'View Portfolio', href: '/portfolio' },
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
          { name: 'Chennai', url: 'https://factoryjet.com/web-design/chennai' },
        ]}
      />
      <Hero {...heroProps} />
      <HeroBrowserMockup />
      <LogoBar />
      <BigThreeTrustBlock />
      <CityContextSection {...cityContextProps} />
      <ServiceExplanation
          headline="Two Chennai Markets, One Design Partner"
          lead="Chennai's business landscape splits cleanly into industrial/B2B and IT/consumer segments — each needing a completely different web strategy. We design for both."
          rightSlot={
            <div className="w-full space-y-4 rounded-2xl border border-black/10 bg-white p-6 shadow-sm lg:p-8">
              <p className="font-fj-mono font-medium uppercase text-[#F05A28]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                What Your Buyers Care About
              </p>
              <div className="space-y-5">
                <div>
                  <p className="font-fj-display font-semibold text-[#0F0F12]" style={{ fontSize: '0.9375rem' }}>Auto &amp; Manufacturing (Ambattur / Guindy / Sriperumbudur)</p>
                  <p className="mt-1 font-fj-body text-sm text-[#525252]">B2B credibility, ISO certifications, product catalogues, RFQ forms, and supplier capability statements. Buyers here evaluate vendors rigorously — your website must project quality.</p>
                </div>
                <div>
                  <p className="font-fj-display font-semibold text-[#0F0F12]" style={{ fontSize: '0.9375rem' }}>IT &amp; Services / Consumer (OMR / Anna Nagar / Adyar)</p>
                  <p className="mt-1 font-fj-body text-sm text-[#525252]">Fast-loading SaaS landing pages, service portfolio sites, and D2C storefronts. These audiences expect modern design, instant mobile loading, and clear value propositions.</p>
                </div>
              </div>
            </div>
          }
        />
      <StrategicDarkSection {...darkSectionProps} />
      <ServiceJourneyRow eyebrow="OUR PROCESS" headline="How We Build Your Chennai Website in 7 Days" />
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
          headline="FactoryJet vs. Chennai Agency vs. Freelancer"
          lead="Not all web design options in Chennai deliver the same output. Here is the honest comparison — scope, price, timeline, and what you own after launch."
          pullQuote={{
            stat: '₹25,000',
            caption: 'starting price — same Figma-first design, Next.js engineering, technical SEO, and Lighthouse audit as a ₹80,000+ Chennai agency project.',
          }}
          columns={CHN_COMPARISON_COLUMNS}
          rows={CHN_COMPARISON_ROWS}
          footer="Prices reflect typical Chennai market ranges as of 2025. FactoryJet fixed-price contracts available for all tiers."
        />
      <IndustriesGrid />
        <GetFreeQuoteCTA />
      <TestimonialsSection />
      <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Common Questions from Chennai Businesses"
          lead="Everything Chennai businesses ask before starting a project — answered straight."
          categories={CHN_FAQ_CATEGORIES}
          items={CHN_FAQ_ITEMS}
        />
      <FinalCTA {...finalCTAProps} />
      <SiteFooter locale="in" />
    </>
  )
}
