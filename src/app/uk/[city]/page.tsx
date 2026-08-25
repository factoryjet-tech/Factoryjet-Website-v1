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

  return {
    title: `Web Design & Digital Agency in ${city.name} | FactoryJet`,
    description: `FactoryJet serves ${city.name} businesses with web design, AI websites, ecommerce, SEO, and AI agents. ${city.businesses.toLocaleString()}+ local businesses. Free consultation.`,
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
