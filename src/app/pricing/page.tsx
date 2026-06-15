import type { Metadata } from 'next'
import { pricingAlternates } from '@/data/hreflangMap'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import Hero from '@/components/v2/Hero'
import FinalCTA from '@/components/v2/FinalCTA'
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns'

export const metadata: Metadata = {
  title: 'Custom Quotes for Web Design & Ecommerce | FactoryJet',
  description:
    'Every FactoryJet project is scoped and priced individually. Tell us what you\'re building — you\'ll have a fixed price in one conversation. No discovery fees.',
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
    title: 'Custom Quotes for Web Design & Ecommerce | FactoryJet',
    description:
      'Every FactoryJet project is scoped and priced individually. Tell us what you\'re building — you\'ll have a fixed price in one conversation.',
    url: 'https://factoryjet.com/pricing',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet — Fixed-price web design and ecommerce',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Quotes for Web Design & Ecommerce | FactoryJet',
    description:
      'Every FactoryJet project is scoped and priced individually. Fixed price agreed on the first call.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/pricing',
    languages: pricingAlternates,
  },
}

const SCOPE_FACTORS = [
  {
    label: 'Number of pages',
    detail:
      'A 5-page brochure site and a 15-page site with a blog CMS have different scopes. Both deliver in 7 days — the scope call establishes which tier fits your goals.',
  },
  {
    label: 'E-commerce features',
    detail:
      'Product catalog size, checkout customization, payment gateways, and inventory integrations each add to scope. We’ll identify exactly what you need on the first call.',
  },
  {
    label: 'Third-party integrations',
    detail:
      'CRM connections, booking systems, external APIs, and custom data feeds add meaningful development time and are scoped precisely, not estimated vaguely.',
  },
  {
    label: 'Content production',
    detail:
      'Every project includes copy for every page. Projects with more service lines, product categories, or locations need more content work — scoped before work starts.',
  },
  {
    label: 'Design complexity',
    detail:
      'Implementing your existing brand guidelines vs. building a full custom design system from scratch are materially different scopes. Both are in scope — just different tiers.',
  },
  {
    label: 'Timeline',
    detail:
      'Standard delivery is 7 days. Rush projects with tighter windows can be accommodated — priority scheduling is quoted on the call.',
  },
]

function ScopeFactorsSection() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <div className="max-w-[720px] mb-10">
          <p className="text-sm font-mono text-[#F05A28] uppercase tracking-widest mb-3">
            WHAT AFFECTS YOUR SCOPE
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            Six things we look at when scoping your project.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Every quote covers the complete project — discovery, design, development, content, SEO,
            and a 30-day support window. Here's what determines where your project lands.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCOPE_FACTORS.map((f) => (
            <div
              key={f.label}
              className="rounded-2xl border border-gray-100 p-7"
              style={{ backgroundColor: '#FAFAF7' }}
            >
              <p className="font-semibold text-gray-900 mb-2">{f.label}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{f.detail}</p>
            </div>
          ))}
        </div>

        {/* Reassurance row */}
        <div
          className="mt-12 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8"
          style={{ backgroundColor: '#FFF3EE', border: '1.5px solid rgba(240,90,40,0.20)' }}
        >
          <div className="flex-1">
            <p className="text-sm font-mono text-[#F05A28] uppercase tracking-widest mb-2">
              OUR COMMITMENT
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Fixed price. Agreed before a single line of code is written.
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We do not send discovery invoices. We do not deliver a quote three weeks after the
              first call. You tell us what you're building on the call, we scope it on the spot,
              and you leave with a number you can budget against — same day.
            </p>
          </div>
          <div className="flex-shrink-0 grid grid-cols-3 gap-6 text-center md:gap-8">
            {[
              { value: '500+', label: 'projects delivered' },
              { value: '7 days', label: 'standard delivery' },
              { value: '97%', label: 'on-time rate' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-[#F05A28]">{s.value}</p>
                <p className="text-xs text-gray-600 mt-1 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="bg-fj-cream">
        <Hero
          eyebrow="TRANSPARENT PRICING"
          headline="Your project is specific. Your quote should be too."
          lead="We scope every project individually and give you a fixed price on the first call — no discovery fees, no estimates that triple in the final invoice. A 30-minute conversation gets you a clear number for exactly what you need."
          primaryCta={{ label: 'Get My Custom Quote', modal: true, region: 'us' }}
          trustItems={[
            'Fixed price agreed upfront',
            '7-day delivery guarantee',
            '500+ projects delivered',
          ]}
        />
        <ScopeFactorsSection />
        <FinalCTA
          variant="dark"
          eyebrow="GET STARTED"
          headline="30 minutes. A clear scope. A fixed price."
          sub="Tell us what you're building and we'll scope it on the spot. No vague estimates, no bait-and-switch quotes. You leave with a number you can budget against."
          primaryCta={{ label: 'Get My Custom Quote', modal: true, region: 'us' }}
        />
      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  )
}
