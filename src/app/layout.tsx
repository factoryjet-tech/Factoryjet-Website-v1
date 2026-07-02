import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans, Geist_Mono } from 'next/font/google'
// GeistSans intentionally NOT imported: it was preloaded (~70KB, High priority)
// but no `font-geist-sans` utility exists in the codebase — pure render-path
// waste racing the CSS on throttled mobile. Body font is Inter.
// GeistMono switched from the `geist` package to next/font/google with
// preload:false (2026-06-06, perf playbook lever 2): it's an eyebrow/label
// font only and must not race critical CSS on throttled mobile. Same
// --font-geist-mono variable, so no call-site changes.
import '../index.css'
import { ContactModalProvider } from '../context/ContactModalContext'
import Script from 'next/script'
import ScrollToTop from '../components/ScrollToTop'
import MobileStickyCTA from '../components/MobileStickyCTA'
import ConditionalContactModal from '../components/ConditionalContactModal'
import ProductionAnalytics from '../components/ProductionAnalytics'

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

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
  preload: false,
  fallback: ['ui-monospace', 'Consolas', 'monospace'],
})

// Source Serif 4 / Fraunces / Cormorant Garamond REMOVED (2026-06-06, perf
// playbook lever 2): zero live usage — only consumers were the Tailwind
// `font-serif`/`font-display` utilities rendered solely on the noindexed
// /dev/component-gallery, which now falls back to Georgia via the fontFamily
// fallback chain. Removing them trims their @font-face rules from the global
// CSS bundle on every page. Verified 2026-06-06 (grep: 0 usages of
// --font-source-serif / --font-fraunces / --font-cormorant outside layout).


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
  themeColor: '#F05A28',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} ${geistMono.variable}`}>
      <head>
        {/* Preconnect to critical origins */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* dataLayer stub — defines window.dataLayer + window.gtag BEFORE hydration
            so any dataLayer push (e.g. /thank-you's `lead_converted` event) queues
            safely before the GTM container finishes loading. It only DEFINES the
            queue; it does NOT load gtm.js/gtag.js or send any pings, so it is
            harmless on *.pages.dev previews. The actual container LOADING +
            host-gating lives in <ProductionAnalytics />. GTM (GTM-PKWD8SHF) is the
            single source of truth for every conversion + GA4 event. */}
        <Script
          id="gtag-stub"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html:
              'window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=window.gtag||gtag;',
          }}
        />

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
        {/* Analytics (GTM + Google Ads) — loads on the production hostname only
            so Cloudflare *.pages.dev preview deploys don't pollute GA4/Ads. */}
        <ProductionAnalytics />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PKWD8SHF"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>


        <ContactModalProvider>
          <ScrollToTop />
          {children}
          <ConditionalContactModal />
          <MobileStickyCTA />
        </ContactModalProvider>
      </body>
    </html>
  )
}
