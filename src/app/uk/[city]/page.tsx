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

  return {
    title: `Web Design & Digital Agency in ${city.name} | FactoryJet`,
    description: `FactoryJet serves ${city.name} businesses with web design, AI websites, ecommerce, SEO, and AI agents. ${city.businesses.toLocaleString()}+ local businesses. Free consultation.`,
    alternates: {
      canonical: `https://factoryjet.com/uk/${city.slug}`
    }
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
