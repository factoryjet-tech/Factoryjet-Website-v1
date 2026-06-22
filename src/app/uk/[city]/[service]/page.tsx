import { dynamicCities, services, getCityBySlug, getServiceBySlug } from '@/data/uk'
import { notFound } from 'next/navigation'
import CityServicePage from '@/lib/uk-pages/city-service'

// This tells Next.js: "Build a page for EVERY city + service combination"
export async function generateStaticParams() {
  return dynamicCities.flatMap(city =>
    services.map(service => ({
      city: city.slug,
      service: service.slug
    }))
  )
}

// This creates a unique title and description for each page
export async function generateMetadata({
  params
}: {
  params: Promise<{ city: string; service: string }>
}) {
  const { city: citySlug, service: serviceSlug } = await params
  const city = getCityBySlug(citySlug)
  const service = getServiceBySlug(serviceSlug)

  if (!city || !service) return {}

  return {
    title: `${service.name} in ${city.name} | FactoryJet — AI-Native Web Agency`,
    description: `Award-winning ${service.name.toLowerCase()} agency in ${city.name}. ${service.tagline}. 50-60% below local agency rates. Free quote today.`,
    alternates: {
      canonical: `https://factoryjet.com/uk/${city.slug}/${service.slug}`
    },
    openGraph: {
      title: `${service.name} ${city.name} | FactoryJet`,
      description: `AI-native ${service.name.toLowerCase()} for ${city.name} businesses.`,
      url: `https://factoryjet.com/uk/${city.slug}/${service.slug}`
    }
  }
}

// The actual page component
export default async function Page({
  params
}: {
  params: Promise<{ city: string; service: string }>
}) {
  const { city: citySlug, service: serviceSlug } = await params
  const city = getCityBySlug(citySlug)
  const service = getServiceBySlug(serviceSlug)

  // If the URL does not match any city or service, show 404
  if (!city || !service) notFound()

  return <CityServicePage city={city} service={service} />
}
