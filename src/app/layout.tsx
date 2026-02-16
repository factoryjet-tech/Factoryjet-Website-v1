import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import '../index.css'
import { ContactModalProvider } from '../context/ContactModalContext'
import Script from 'next/script'
import ScrollToTop from '../components/ScrollToTop'
import ConditionalContactModal from '../components/ConditionalContactModal'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: true,
  fallback: ['system-ui', 'arial'],
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['600', '700'],
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  title: 'World-Class Web & E-Commerce Development Company | FactoryJet',
  description: 'FactoryJet is a leading web & eCommerce development company delivering scalable, secure, and high-performance digital solutions. Fast delivery, affordable pricing, 150+ successful projects. Get a free consultation today!',
  authors: [{ name: 'FactoryJet' }],
  // keywords: ['web development', 'ecommerce development', 'digital solutions', 'FactoryJet'],
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
  themeColor: '#0052CC',
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
                { "@type": "City", "name": "Mumbai" },
                { "@type": "City", "name": "Pune" },
                { "@type": "City", "name": "Bangalore" },
                { "@type": "City", "name": "Ahmedabad" },
                { "@type": "City", "name": "Surat" }
              ],
              "serviceType": [
                "Web Development",
                "E-Commerce Development",
                "Mobile App Development",
                "Digital Marketing",
                "SEO Services"
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
        {/* Google Tag Manager - load after user interaction for better performance */}
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

        {/* Google Analytics - deferred to improve initial load */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11127037244"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11127037244', { 'send_page_view': false });
          `}
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
