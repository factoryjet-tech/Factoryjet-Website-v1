import type { Metadata } from 'next'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import ThankYouContent from './ThankYouContent'

/**
 * /thank-you — post-submission confirmation + conversion anchor.
 *
 * noindex, follow: the page must NOT be indexed (it carries no SEO value and,
 * if indexed, organic/direct hits would inflate the conversion count) but link
 * equity should still flow. It is intentionally excluded from every sitemap.
 * Self-referential canonical kept so the build guard's canonical==route check
 * passes; it does not override the noindex directive.
 */
export const metadata: Metadata = {
  title: 'Thank You | Your Request Reached FactoryJet',
  description: 'Thanks for reaching out to FactoryJet. We review every request personally and reply within 24 hours.',
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://factoryjet.com/thank-you',
  },
}

export default function Page() {
  return (
    <>
      <SiteHeader locale="us" />
      <main>
        <ThankYouContent />
      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  )
}
