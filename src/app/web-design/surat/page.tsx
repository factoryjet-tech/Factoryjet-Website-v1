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
  title: 'Web Design Company in Surat | Diamond & Textile Businesses | FactoryJet',
  description: 'Professional web design company in Surat building fast, export-ready websites for diamond, textile, and MSME businesses in Adajan, Vesu & GIDC Sachin. 7-day delivery.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Surat | Professional Website Design Services',
    description: 'Award-winning Web Design Company in Surat. Fast, conversion-focused websites for diamond, textile & trading businesses. 7-day delivery, INR pricing.',
    url: 'https://factoryjet.com/web-design/surat',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Web Design Company in Surat',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Surat | FactoryJet',
    description: 'Award-winning Web Design Company in Surat. Beautiful, conversion-focused websites with modern UI/UX.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/surat',
    languages: webDesignCityAlternatesIN['surat'],
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
    name: 'FactoryJet Web Design Surat',
    description: 'Professional web design company serving Surat businesses across diamond, textile, MSME manufacturing, and trading sectors.',
    url: 'https://factoryjet.com/web-design/surat',
    telephone: '+91-XXXXXXXXXX',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Surat',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'City', name: 'Surat' },
      { '@type': 'City', name: 'Navsari' },
      { '@type': 'City', name: 'Hazira' },
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
        name: 'How much does a website cost in Surat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Website projects in Surat start from ₹25,000 for a professional 5-page site. E-commerce catalogues for diamond or textile exporters are priced based on scope. Fixed pricing, no hidden costs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you build an export-focused website for a Surat diamond or textile business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We specialize in export-facing websites that communicate quality, certifications, and product range to international buyers in the US, Europe, and the Middle East.',
        },
      },
      {
        '@type': 'Question',
        name: 'How fast can you deliver a website for my Surat business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We deliver 5-page websites in 7 days. Product catalogue and e-commerce builds have a slightly longer timeline depending on the number of SKUs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you build websites for MSME manufacturers in GIDC Sachin?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We build company profile sites, product catalogues, and B2B inquiry portals for MSME manufacturers across GIDC Sachin, Hazira, and Pandesara industrial areas.',
        },
      },
    ],
  }

  const heroProps = {
    eyebrow: 'WEB DESIGN · SURAT',
    headline: "The World's Diamond Capital Needs an Online Presence to Match",
    subheadline:
      "Surat processes 90% of the world's diamonds and is one of India's fastest-growing cities. Your website should reflect the ambition of this market — polished, fast, and built to impress international buyers and local customers alike.",
    primaryCTA: { label: 'Start Your Project', modal: true as const, region: 'in' as const },
    secondaryCTA: { label: 'View Our Work', href: '/portfolio' },
    stats: [
      { value: '7-Day', label: 'Delivery Guarantee' },
      { value: '500+', label: 'Businesses Served' },
      { value: '₹25K', label: 'Starting Price' },
    ],
  }

  const cityContextProps = {
    city: 'Surat',
    headline: "India's Fastest-Growing City, Powered by Diamonds and Textiles",
    body: "Surat is a trading and manufacturing powerhouse unlike any other. Over 90% of the world's rough diamonds are cut and polished here. The city's textile industry supplies fabric to retail brands across India and exports to global markets. And with a young, entrepreneurial population and rising digital adoption, Surat's MSME ecosystem is one of the most dynamic in Gujarat.",
    body2:
      "Yet many Surat businesses — from diamond merchants on Varachha Road to textile exporters in GIDC Sachin — still rely on WhatsApp and word-of-mouth. A credible website turns that informal trust into scalable reach: international buyers, new city customers, and a digital presence that works 24/7.",
    stats: [
      { value: "90%", label: "World's Diamonds Cut & Polished Here" },
      { value: "Fastest-Growing", label: "One of India's Fastest-Growing Cities" },
      { value: "₹1.5L Cr+", label: "Surat District GDP" },
    ],
  }

  const serviceExplanationProps = {
    headline: 'Surat Businesses Sell Locally and Globally — We Design for Both',
    body: "Surat's economy spans high-value B2B export trades and a thriving local consumer market. The web strategy for a diamond exporter is completely different from a Vesu retail brand — we understand both.",
    rightSlot: {
      title: 'What Your Buyers Care About',
      items: [
        {
          label: 'B2B / Diamond & Textile Export (GIDC Sachin / Hazira / Ring Road)',
          description:
            'Credibility, certifications, product specifications, and professional imagery. International buyers research suppliers online before making contact — your website is your digital showroom.',
        },
        {
          label: 'D2C / Consumer & Retail (Adajan / Vesu / City Light)',
          description:
            'Clean design, fast mobile loading, and clear CTAs. Local Surat consumers respond to modern aesthetics, WhatsApp integration, and easy ways to enquire or buy.',
        },
      ],
    },
  }

  const darkSectionProps = {
    eyebrow: 'WHY FACTORYJET',
    headline: 'Built for Surat Businesses That Think Big',
    points: [
      {
        title: '7-Day Delivery',
        body: "5-page production-ready websites in 7 days. No waiting months for a local agency's availability.",
      },
      {
        title: 'Export-Ready Design',
        body: 'We know how international diamond and textile buyers evaluate suppliers online. Our designs build the credibility that closes deals.',
      },
      {
        title: 'INR Pricing, No Surprises',
        body: 'Projects start at ₹25,000. Fixed scope, fixed price — every rupee accounted for before you sign.',
      },
      {
        title: 'Lighthouse 100 Performance',
        body: 'Every site scores green on Core Web Vitals. Fast on Surat mobile networks, instant on broadband.',
      },
    ],
    cta: { label: 'See Our Portfolio', href: '/portfolio' },
  }

  const journeySteps = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We learn your business, target buyers (local or international), and competitive context in 30 minutes.',
    },
    {
      step: '02',
      title: 'Strategy & Wireframe',
      description: 'We map your site structure to how your specific buyers research and decide — B2B export or local consumer.',
    },
    {
      step: '03',
      title: 'Design & Build',
      description: 'Design and development in parallel. You see real progress, not wireframe hand-offs that stall.',
    },
    {
      step: '04',
      title: 'Review & Launch',
      description: 'Review, refine, and go live — all within 7 days of kickoff for standard projects.',
    },
  ]

  const comparisonRows = [
    {
      feature: 'Delivery Time',
      columns: [
        { label: 'FactoryJet', isFactoryJet: true, value: <CompareIcon type="text" text="7 days" /> },
        { label: 'Surat Agency', value: <CompareIcon type="text" text="6–10 weeks" /> },
        { label: 'Freelancer', value: <CompareIcon type="text" text="3–8 weeks" /> },
      ],
    },
    {
      feature: 'Starting Price',
      columns: [
        { label: 'FactoryJet', isFactoryJet: true, value: <CompareIcon type="text" text="₹25,000" /> },
        { label: 'Surat Agency', value: <CompareIcon type="text" text="₹60,000+" /> },
        { label: 'Freelancer', value: <CompareIcon type="text" text="₹10,000–₹35,000" /> },
      ],
    },
    {
      feature: 'Lighthouse 100 Score',
      columns: [
        { label: 'FactoryJet', isFactoryJet: true, value: <CompareIcon type="check" /> },
        { label: 'Surat Agency', value: <CompareIcon type="cross" /> },
        { label: 'Freelancer', value: <CompareIcon type="partial" /> },
      ],
    },
    {
      feature: 'Export / B2B Expertise',
      columns: [
        { label: 'FactoryJet', isFactoryJet: true, value: <CompareIcon type="check" /> },
        { label: 'Surat Agency', value: <CompareIcon type="partial" /> },
        { label: 'Freelancer', value: <CompareIcon type="cross" /> },
      ],
    },
    {
      feature: 'Fixed-Price Guarantee',
      columns: [
        { label: 'FactoryJet', isFactoryJet: true, value: <CompareIcon type="check" /> },
        { label: 'Surat Agency', value: <CompareIcon type="cross" /> },
        { label: 'Freelancer', value: <CompareIcon type="cross" /> },
      ],
    },
    {
      feature: 'Post-Launch Support',
      columns: [
        { label: 'FactoryJet', isFactoryJet: true, value: <CompareIcon type="check" /> },
        { label: 'Surat Agency', value: <CompareIcon type="partial" /> },
        { label: 'Freelancer', value: <CompareIcon type="cross" /> },
      ],
    },
  ]

  const industries = [
    {
      icon: '💎',
      name: 'Diamond & Jewellery',
      description: 'Export-facing websites and digital showrooms for diamond manufacturers, cutters, and jewellery exporters.',
    },
    {
      icon: '🧵',
      name: 'Textile & Apparel',
      description: "Product catalogue sites and export portals for Surat's synthetic fabric, embroidery, and saree manufacturers.",
    },
    {
      icon: '🏭',
      name: 'MSME & Manufacturing',
      description: 'B2B company profile sites for GIDC Sachin and Hazira manufacturers supplying domestic and export markets.',
    },
    {
      icon: '📦',
      name: 'Trading & Wholesale',
      description: 'Credibility-building websites for Surat's commodity traders, wholesalers, and import-export businesses.',
    },
    {
      icon: '🏢',
      name: 'Real Estate',
      description: 'Project launch sites, developer portfolios, and property inquiry pages for Surat real estate developers.',
    },
    {
      icon: '🤝',
      name: 'Professional Services',
      description: 'Clean, trust-building websites for CA firms, legal practices, and consulting businesses across Surat.',
    },
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      price: '₹25,000',
      description: 'For small businesses and traders needing a credible online presence quickly.',
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
      description: 'For exporters and growing businesses that need product catalogues and stronger lead generation.',
      features: [
        'Up to 12 pages',
        'Product catalogue section',
        'Custom UI design system',
        'WhatsApp & inquiry integration',
        'Advanced SEO setup',
        '60-day support',
      ],
      cta: { label: 'Get Started', modal: true as const, region: 'in' as const },
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: '₹1,00,000+',
      description: 'For large exporters or manufacturers needing custom portals, B2B ordering, or multi-language sites.',
      features: [
        'Unlimited pages',
        'Custom web application',
        'Multi-language (English + Gujarati)',
        'B2B ordering or dealer portal',
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
          question: 'What does a website cost in Surat?',
          answer: 'Our Surat projects start at ₹25,000 for a 5-page site. Growth packages including product catalogues run ₹50,000. Enterprise custom builds start at ₹1,00,000. All fixed pricing.',
        },
        {
          question: 'Do you offer payment in installments?',
          answer: 'Yes. Standard split is 50% at kickoff and 50% on delivery. For larger export portal builds we offer 3-stage payment plans.',
        },
        {
          question: 'Are there ongoing monthly fees?',
          answer: 'No mandatory monthly fees. Hosting and domain are separate and clearly quoted before you sign. Optional maintenance plans are available.',
        },
        {
          question: 'Do you charge extra for Gujarati language support?',
          answer: 'Multi-language Gujarati/English websites are available in our Enterprise tier. The additional cost depends on the amount of content to be translated.',
        },
      ],
    },
    {
      id: 'process',
      label: 'Process',
      questions: [
        {
          question: 'How does the 7-day delivery work for Surat?',
          answer: 'After kickoff call and content submission, design and development happen in parallel. Review link on day 5, revisions on day 6, live on day 7. Product catalogue projects may take longer depending on SKU count.',
        },
        {
          question: 'What do I need to provide to get started?',
          answer: 'Your company logo, product images (if applicable), and basic business information. We guide you through a simple brief that takes under 30 minutes to complete.',
        },
        {
          question: 'How many revisions are included?',
          answer: 'Two rounds of revisions in all packages. Additional revisions are billed at a flat rate quoted upfront.',
        },
        {
          question: 'Do you handle copywriting for export-facing content?',
          answer: 'Yes. We write professional English copy for all pages — including product descriptions crafted to appeal to international buyers.',
        },
      ],
    },
    {
      id: 'technical',
      label: 'Technical',
      questions: [
        {
          question: 'Will my website rank for international diamond or textile searches?',
          answer: 'We build every site with on-page SEO best practices including schema markup, fast loading, and keyword-optimized content. For sustained search rankings, we offer separate SEO retainer packages.',
        },
        {
          question: 'Is the site mobile-friendly?',
          answer: 'All builds are mobile-first. We test across iOS and Android at multiple screen sizes before delivery.',
        },
        {
          question: 'Can the website support multiple currencies or international pricing?',
          answer: 'Yes. For export-focused businesses we can display prices in USD, EUR, or AED alongside INR — or set up a contact-for-pricing model that works better for high-value B2B sales.',
        },
        {
          question: 'How fast will the website load internationally?',
          answer: 'We deploy to global CDN infrastructure (Cloudflare). Load times are under 1 second for visitors in the US, UK, UAE, and Europe.',
        },
      ],
    },
    {
      id: 'ecommerce',
      label: 'E-Commerce',
      questions: [
        {
          question: 'Can you build an online jewellery or fabric store?',
          answer: 'Yes. We build Shopify and custom e-commerce sites for jewellery and textile businesses — with proper product photography guidance, INR pricing, and Indian payment gateway integration.',
        },
        {
          question: 'Do you support Razorpay and Indian payment gateways?',
          answer: 'Yes — Razorpay, PayU, and CCAvenue are standard. International payment via Stripe or PayPal can also be integrated for export-facing stores.',
        },
        {
          question: 'Can you build a B2B wholesale ordering portal?',
          answer: 'Yes. Login-protected portals with dealer pricing, minimum order quantities, and catalogue downloads are available in our Enterprise tier.',
        },
        {
          question: 'Do you help with product photography or image editing?',
          answer: "We don't do in-house photography but we handle all image optimization, background removal, and layout for uploaded product images.",
        },
      ],
    },
    {
      id: 'local',
      label: 'Surat',
      questions: [
        {
          question: 'Can you build an export-facing website for a Surat diamond manufacturer?',
          answer: "Yes. We build digital showrooms and export-ready sites for diamond manufacturers and polishers that communicate quality, certifications (GIA, IGI), and product range to international buyers.",
        },
        {
          question: 'Do you serve textile exporters in GIDC Sachin?',
          answer: "Absolutely. We build product catalogues, exporter profile sites, and B2B inquiry portals for synthetic fabric, embroidery, and saree manufacturers in GIDC Sachin and Pandesara.",
        },
        {
          question: 'Can you build a Gujarati-English bilingual website?',
          answer: "Yes. Our Enterprise tier includes Gujarati language support with proper Devanagari rendering and locale-specific content for businesses targeting local Gujarat consumers.",
        },
        {
          question: 'Do you have experience with Surat real estate developers?',
          answer: "Yes. We build project launch sites and developer portfolio pages for Surat real estate businesses — with inquiry forms, virtual tour integrations, and location maps.",
        },
      ],
    },
  ]

  const finalCTAProps = {
    headline: 'Ready to Build a Website as Polished as Your Diamonds?',
    subheadline:
      "Join 500+ businesses that trust FactoryJet. Whether you're a diamond exporter in Varachha, a textile manufacturer in GIDC Sachin, or a retail brand in Adajan — we deliver in 7 days.",
    primaryCTA: { label: 'Start Your Project', modal: true as const, region: 'in' as const },
    secondaryCTA: { label: 'View Portfolio', href: '/portfolio' },
  }

  return (
    <>
      <Script
        id="srt-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="srt-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Surat', url: 'https://factoryjet.com/web-design/surat' },
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
      <IndustriesGrid industries={industries} city="Surat" />
      <PricingTiers tiers={pricingTiers} />
      <TestimonialsSection />
      <FAQ categories={faqCategories} />
      <FinalCTA {...finalCTAProps} />
      <SiteFooter locale="in" />
    </>
  )
}
