import type { Metadata } from 'next'
import Script from 'next/script'
import { homeAlternates } from '@/data/hreflangMap'
import HomePageV2 from '@/components/homepage/HomePageV2'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'

export const metadata: Metadata = {
  title: 'Web Design & Ecommerce Development Agency | FactoryJet',
  description: 'FactoryJet builds websites, Shopify stores & AI agents for businesses in India, the US & UK. 7-day delivery on starter sites. 500+ businesses served. Free quote.',
  authors: [{ name: 'FactoryJet' }],
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
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design & Ecommerce Development Agency | FactoryJet',
    description: 'High-performance websites, Shopify stores, and AI SEO campaigns. 7-day delivery. 500+ businesses in India, the US, and the UK.',
    url: 'https://factoryjet.com',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Professional Website Design & E-Commerce Development',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FactoryJet - Website Design & E-Commerce Development Company',
    description: 'Professional web development services for growing Indian businesses. 7-day delivery!',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com',
    languages: homeAlternates,
  },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does FactoryJet do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet is an AI-native web design and development agency headquartered in Bengaluru, India. We build custom websites, Shopify e-commerce stores, and AI agents for businesses in India, the US, the UK, and globally. We deliver projects 50–70% cheaper than local agencies and guarantee delivery of standard 5-page websites within 7 business days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a website cost at FactoryJet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'US pricing: Starter (5 pages) from $1,500–$3,100; Growth (10–15 pages + CMS) from $3,100–$6,300; Scale (custom Next.js, e-commerce, AI) from $6,300–$15,000. UK pricing starts from £799. India pricing starts from ₹59,999. All tiers include strategy, design, development, SEO setup, and a 30-day post-launch support window.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast does FactoryJet deliver websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet guarantees delivery of standard 5-page websites within 7 business days of design sign-off. Larger projects (10–15 pages) typically complete in 10–14 business days. E-commerce stores and custom web applications take 3–5 weeks depending on scope and complexity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technology does FactoryJet use to build websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet builds on Next.js 15, React 19, TypeScript, and Tailwind CSS 4 for performance-critical sites. We use GSAP for animations, Cloudflare Pages for hosting, and Firebase for backend services. All sites achieve Lighthouse 100/100 Performance, Accessibility, Best Practices, and SEO scores and pass Core Web Vitals green on delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does FactoryJet build Shopify stores?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. FactoryJet builds custom Shopify and Shopify Plus stores, including custom theme development, store migrations from WooCommerce or Magento, headless commerce builds using Next.js with the Shopify Storefront API, and multi-currency/multi-language setups for international DTC brands.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who owns the website and code after the project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The client owns everything — 100%. FactoryJet transfers the complete Next.js codebase to the client\'s GitHub repository and delivers all Figma design files on launch day. There is no proprietary platform, no lock-in, and no monthly fee tied to the build. Clients can host anywhere or hand the codebase to any developer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is FactoryJet cheaper than US or UK web agencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet\'s engineering and design team is based in India, which means the same quality — Next.js expertise, Figma design, Lighthouse 100 performance — at significantly lower labor costs. There are no layers of account managers, sales reps, or project coordinators inflating invoices. FactoryJet publishes fixed prices upfront; no discovery call required for a number.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is AI-native web design?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI-native web design means AI tools are integrated throughout every stage of the project — design ideation, content generation, competitor research, SEO optimization, code review, and performance tuning. FactoryJet uses AI to deliver faster and at lower cost, while human designers and engineers own all final decisions and quality control.',
      },
    },
    {
      '@type': 'Question',
      name: 'What markets does FactoryJet serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet serves clients across the US (priority cities: Austin TX, Miami FL, Denver CO, Nashville TN, Portland OR, Charlotte NC, Raleigh NC, Tampa FL), the UK (London, Manchester, Birmingham, Leeds, Liverpool, Sheffield, Bristol, Edinburgh, Glasgow), India (Mumbai, Bangalore, Delhi, Pune, Chennai, Hyderabad, Ahmedabad, Surat), the UAE, Australia, Canada, and other global markets.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does FactoryJet offer SEO services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every FactoryJet website includes technical SEO as standard — proper heading structure, meta tags, canonical URLs, JSON-LD schema markup, sitemap, robots.txt, and Core Web Vitals optimization. FactoryJet also offers GEO (Generative Engine Optimisation) and AEO (Answer Engine Optimisation) to optimize content for AI-powered search results including ChatGPT, Perplexity, Google AI Overviews, and Claude.',
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <Script
        id="homepage-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <SiteHeader locale="in" />
      <main>
        <HomePageV2 />
      </main>
      <SiteFooter locale="in" />
    </>
  )
}
