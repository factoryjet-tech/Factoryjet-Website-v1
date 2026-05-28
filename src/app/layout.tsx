import type { Metadata, Viewport } from 'next'
import { Inter, Source_Serif_4, Fraunces, Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import '../index.css'
import { ContactModalProvider } from '../context/ContactModalContext'
import Script from 'next/script'
import ScrollToTop from '../components/ScrollToTop'
import ConditionalContactModal from '../components/ConditionalContactModal'

// Plus Jakarta Sans — primary display font (Sprint 8, replaces Clash Display).
// Geometric humanist sans: precise yet warm, professional for US SMB market.
// Used for all headings, hero text, and display-size copy site-wide.
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'optional',
  preload: true,
  weight: ['400', '500', '600', '700', '800'],
  fallback: ['system-ui', 'sans-serif'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'optional',
  weight: ['400', '500', '600', '700'],
  preload: true,
  fallback: ['system-ui', 'arial'],
})

// Source Serif 4 — reserved for editorial moments (display H1, pull quotes).
// Brand rule: "Inter for body and UI; Source Serif for editorial moments."
// Loaded as a CSS variable so Tailwind utilities resolve via --font-source-serif.
const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
  weight: ['400', '500', '600'],
  preload: false,
  fallback: ['Georgia', 'serif'],
})

// === FactoryJet Design System v2.0 fonts (M0 foundation) ===
// Fraunces — display family for v2 components. Per factoryjet.DESIGN.md §3.2,
// the tuned axes (opsz / SOFT / WONK / GRAD) are surfaced via the
// `.fj-display` utility class in src/index.css using font-variation-settings.
// next/font/google can pre-bake the opsz axis here.
const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
  preload: false,
})

// Cormorant Garamond — editorial serif for v3 homepage hero headlines.
// High-contrast thick/thin strokes at display sizes. Italic weight used
// for the orange accent conviction word (AxisFlow-style pattern).
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  preload: false,
  fallback: ['Georgia', 'serif'],
})


export const metadata: Metadata = {
  metadataBase: new URL('https://factoryjet.com'),
  title: 'World-Class Web & E-Commerce Development Company | FactoryJet',
  description: 'FactoryJet builds websites, Shopify stores & AI agents for India, US & UK businesses. 7-day delivery, Lighthouse 100, 500+ projects. Free consultation.',
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
    title: 'World-Class Web & E-Commerce Development Company | FactoryJet',
    description: 'FactoryJet delivers scalable web and eCommerce solutions for global businesses. Fast delivery, affordable pricing, 150+ successful projects.',
    url: 'https://factoryjet.com',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Web & E-Commerce Development Company',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World-Class Web & E-Commerce Development Company | FactoryJet',
    description: 'High-performance web and eCommerce solutions built for growth. Fast delivery, affordable pricing, 150+ successful projects.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#0052CC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} ${sourceSerif.variable} ${fraunces.variable} ${cormorant.variable} ${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        {/* Preconnect to critical origins */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Structured Data - Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "FactoryJet",
              "alternateName": "FactoryJet Digital Solutions",
              "url": "https://factoryjet.com",
              "logo": "https://factoryjet.com/FinalLogo.svg",
              "description": "FactoryJet is a leading web & eCommerce development company delivering scalable, secure, and high-performance digital solutions.",
              "email": "connect@factoryjet.com",
              "telephone": "+919699977699",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.linkedin.com/company/factoryjet",
                "https://www.instagram.com/factoryjet",
                "https://www.facebook.com/factoryjet",
                "https://twitter.com/factoryjet"
              ],
              "areaServed": [
                { "@type": "Country", "name": "United Kingdom" },
                { "@type": "Country", "name": "United States" },
                { "@type": "Country", "name": "United Arab Emirates" },
                { "@type": "Country", "name": "India" }
              ],
              "serviceType": [
                "Web Design & Development",
                "E-Commerce Development",
                "AI Agent Development",
                "AI SEO & GEO Optimization",
                "Shopify Development",
                "Digital Marketing"
              ],
              "priceRange": "₹₹-₹₹₹",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />

        {/* Structured Data - Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "FactoryJet",
              "url": "https://factoryjet.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://factoryjet.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="bg-white text-slate-900 antialiased">
        {/* Google Tag Manager - lazy load to minimize blocking / cookie impact */}
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PKWD8SHF');`}
        </Script>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PKWD8SHF"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Google Ads — dual-account gtag.js (AW-11127037244 + AW-18185532850).
            Loaded directly because GTM only manages AW-11127037244 internally.
            Both accounts must be configured so conversion events route correctly.
            lazyOnload chosen because trackFormSubmission() (src/utils/gtm.ts) only
            fires inside user form-submit handlers — always post window.load. Moves
            ~205 ms of main-thread time out of the TBT window. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18185532850"
          strategy="lazyOnload"
        />
        <Script id="gtag-dual-account-config" strategy="lazyOnload">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-11127037244');gtag('config','AW-18185532850');`}
        </Script>

        <ContactModalProvider>
          <ScrollToTop />
          {children}
          <ConditionalContactModal />
        </ContactModalProvider>
      </body>
    </html>
  )
}
