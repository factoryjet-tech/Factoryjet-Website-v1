import { cities, services, getCityBySlug, getServiceBySlug } from '@/data/uk'
import { notFound } from 'next/navigation'
import CityServicePlatformPage from '@/lib/uk-pages/city-service-platform'

// All platforms that have their own pages
const platforms = ['shopify', 'woocommerce', 'webflow', 'wordpress', 'nextjs', 'framer']

export async function generateStaticParams() {
  return cities.flatMap(city =>
    services.flatMap(service =>
      (service.platforms || [])
        .filter(p => platforms.includes(p))
        .map(platform => ({
          city: city.slug,
          service: service.slug,
          platform
        }))
    )
  )
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ city: string; service: string; platform: string }>
}) {
  const { city: citySlug, service: serviceSlug, platform } = await params
  const city = getCityBySlug(citySlug)
  const service = getServiceBySlug(serviceSlug)

  if (!city || !service) return {}

  const platformName = platform.charAt(0).toUpperCase() + platform.slice(1)

  return {
    title: `${platformName} Developer in ${city.name} | FactoryJet`,
    description: `Expert ${platformName} development in ${city.name}. ${service.tagline}. Get a free quote today.`,
    alternates: {
      canonical: `https://factoryjet.com/uk/${city.slug}/${service.slug}/${platform}`
    }
  }
}

export default async function Page({
  params
}: {
  params: Promise<{ city: string; service: string; platform: string }>
}) {
  const { city: citySlug, service: serviceSlug, platform } = await params
  const city = getCityBySlug(citySlug)
  const service = getServiceBySlug(serviceSlug)

  if (!city || !service) notFound()

  return <CityServicePlatformPage city={city} service={service} platform={platform} />
}
