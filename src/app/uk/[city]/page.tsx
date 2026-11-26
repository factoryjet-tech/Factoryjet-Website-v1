import { dynamicCities, getCityBySlug } from '@/data/uk'
import { notFound } from 'next/navigation'
import CityHubPage from '@/lib/uk-pages/city-hub'

export async function generateStaticParams() {
  return dynamicCities.map(city => ({ city: city.slug }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ city: string }>
}) {
  const { city: citySlug } = await params
  const city = getCityBySlug(citySlug)

  if (!city) return {}

  const url = `https://factoryjet.com/uk/${city.slug}`
  const title =
    city.slug === 'cardiff'
      ? 'Web Design & SEO Agency in Cardiff | FactoryJet'
      : `Web Design & Digital Agency in ${city.name} | FactoryJet`
  const description =
    city.slug === 'cardiff'
      ? `FactoryJet serves Cardiff businesses with web design, SEO, AI search visibility, ecommerce, and AI agents. ${city.businesses.toLocaleString()}+ local businesses. Free consultation.`
      : `FactoryJet serves ${city.name} businesses with web design, AI websites, ecommerce, SEO, and AI agents. ${city.businesses.toLocaleString()}+ local businesses. Free consultation.`

  return {
    title,
    description,
    // Own Open Graph block: without it, every city inherited the /uk homepage's
    // og:url, title and description from src/app/uk/metadata.ts (Ahrefs, 2026-11-25).
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: 'FactoryJet',
      locale: 'en_GB',
      images: [
        {
          url: '/images/uk/hero-uk.webp',
          width: 1200,
          height: 630,
          alt: `FactoryJet, web design and digital agency serving ${city.name}`,
        },
      ],
    },
    alternates: {
      canonical: url,
      // These 15 city pages are UK-only: there is no India or US twin to point
      // at, so en-GB and x-default both resolve to the page itself. Do NOT
      // import hreflangMap here, which describes the multi-market service hubs.
      // Before this, all 15 shipped zero hreflang tags at all.
      languages: {
        'en-GB': url,
        'x-default': url,
      },
    },
  }
}

export default async function Page({
  params
}: {
  params: Promise<{ city: string }>
}) {
  const { city: citySlug } = await params
  const city = getCityBySlug(citySlug)

  if (!city) notFound()

  return <CityHubPage city={city} />
}
