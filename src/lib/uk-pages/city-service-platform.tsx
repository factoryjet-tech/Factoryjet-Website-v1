'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { CityData, ServiceData } from '@/data/uk'

interface CityServicePlatformPageProps {
  city: CityData
  service: ServiceData
  platform: string
}

export default function CityServicePlatformPage({
  city,
  service,
  platform
}: CityServicePlatformPageProps) {
  const platformName = platform.charAt(0).toUpperCase() + platform.slice(1)

  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-center items-center px-4 md:px-8 overflow-hidden">
        {/* Decorative top line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#0052CC]"></div>

        {/* Faded platform name background */}
        <div className="absolute inset-0 opacity-5 text-9xl font-bold text-white pointer-events-none flex items-center justify-center">
          {platformName.toUpperCase()}
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            {platformName} Developer in {city.name}
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light max-w-2xl mx-auto">
            Expert {platformName} development for {city.name} businesses. Enterprise-grade solutions at startup-friendly prices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-[#0052CC] hover:bg-[#1a6fff] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
              Get My Free Quote <ArrowRight size={20} />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              See Projects
            </button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400 border-t border-gray-800 pt-8 mt-8">
            <div className="py-4">
              <div className="font-bold text-white mb-1">{service.deliveryWeeks.standard} Days</div>
              <div className="text-xs">Delivery time</div>
            </div>
            <div className="py-4">
              <div className="font-bold text-white mb-1">100%</div>
              <div className="text-xs">Custom builds</div>
            </div>
            <div className="py-4">
              <div className="font-bold text-white mb-1">5★</div>
              <div className="text-xs">Client rating</div>
            </div>
            <div className="py-4">
              <div className="font-bold text-white mb-1">£0</div>
              <div className="text-xs">Lock-in fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE BAND */}
      <section className="bg-[#111118] text-white py-6 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="text-lg font-medium px-4">
            {platformName.toUpperCase()} EXPERT IN {city.name.toUpperCase()} · {service.name.toUpperCase()} · BUILT IN {service.deliveryWeeks.standard} DAYS · AI-POWERED · NO LOCK-INS · FROM £{service.pricingRange.min} ·
          </span>
          <span className="text-lg font-medium px-4">
            {platformName.toUpperCase()} EXPERT IN {city.name.toUpperCase()} · {service.name.toUpperCase()} · BUILT IN {service.deliveryWeeks.standard} DAYS · AI-POWERED · NO LOCK-INS · FROM £{service.pricingRange.min} ·
          </span>
        </div>
      </section>

      {/* WHY THIS PLATFORM SECTION */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-[#0a0a0a]" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            Why {platformName} for {city.name} Businesses
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl">
            {platformName} is the ideal choice for {city.name} companies looking for reliable, scalable {service.name} solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: `${platformName} Expertise`,
                description: `Our team specializes in ${platformName} development with deep knowledge of best practices, performance optimization, and security.`
              },
              {
                title: 'Local Support',
                description: `Based in ${city.region}, we understand the unique needs of ${city.name} businesses and provide dedicated support.`
              },
              {
                title: 'Proven Results',
                description: `From small businesses to enterprises, we've delivered successful ${platformName} projects across ${city.name}.`
              }
            ].map((card, i) => (
              <div key={i} className="bg-[#F8F9FA] p-8 rounded-xl border border-[#E9ECEF]">
                <h3 className="text-xl font-bold mb-3 text-[#0a0a0a]">{card.title}</h3>
                <p className="text-gray-700">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="bg-[#F8F9FA] py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-[#0a0a0a]" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            {platformName} {service.name} Pricing
          </h2>

          <div className="bg-white p-8 rounded-xl border-2 border-[#0052CC]">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-500 mb-2">Price Range</p>
                <p className="text-4xl font-bold text-[#0a0a0a] mb-4">
                  £{service.pricingRange.min} – £{service.pricingRange.max}
                </p>
                <p className="text-gray-600 mb-6">{service.tagline}</p>
                <button className="bg-[#FF6B35] hover:bg-[#ff8255] text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-2">
                  Get a Custom Quote <ArrowRight size={18} />
                </button>
              </div>
              <div>
                <p className="text-gray-500 mb-2">Delivery & Tech Stack</p>
                <p className="text-2xl font-bold text-[#0a0a0a] mb-4">
                  {service.deliveryWeeks.standard} – {service.deliveryWeeks.express} days
                </p>
                <p className="text-gray-600 mb-6">
                  Standard: {service.deliveryWeeks.standard} days<br />
                  Express: {service.deliveryWeeks.express} days
                </p>
                <ul className="space-y-2">
                  {service.techStack.slice(0, 3).map((tech, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-[#10B981]" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0a0a0a] text-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            Ready for {platformName} Development in {city.name}?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Get a free 30-minute consultation with our {platformName} specialists. Learn how we can build your next project.
          </p>

          <button className="bg-[#FF6B35] hover:bg-[#ff8255] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
            Get My Free Quote <ArrowRight size={20} />
          </button>

          <div className="mt-12 text-gray-300">
            <p className="mb-2">connect@factoryjet.com • factoryjet.com</p>
            <Link href={`/uk/${city.slug}`} className="text-[#0052CC] hover:text-[#1a6fff] transition-colors">
              ← Back to {city.name} Services
            </Link>
          </div>
        </div>
      </section>

      {/* Add marquee animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </main>
  )
}
