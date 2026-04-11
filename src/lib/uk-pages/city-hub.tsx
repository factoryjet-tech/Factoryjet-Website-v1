'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap } from 'lucide-react'
import { CityData, services } from '@/data/uk'

interface CityHubPageProps {
  city: CityData
}

export default function CityHubPage({ city }: CityHubPageProps) {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-center items-center px-4 md:px-8 overflow-hidden">
        {/* Decorative top line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#0052CC]"></div>

        {/* Faded city name background */}
        <div className="absolute inset-0 opacity-5 text-9xl font-bold text-white pointer-events-none flex items-center justify-center">
          {city.name.toUpperCase()}
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            Web Design & Digital Agency in {city.name}
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light max-w-2xl mx-auto">
            Enterprise-Grade Websites at Startup-Friendly Prices. AI-native. Fast. Built to convert.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-[#0052CC] hover:bg-[#1a6fff] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
              Get My Free Quote <ArrowRight size={20} />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              See Our Work
            </button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400 border-t border-gray-800 pt-8 mt-8">
            <div className="py-4">
              <div className="font-bold text-white mb-1">{city.businesses.toLocaleString()}+</div>
              <div className="text-xs">Local businesses</div>
            </div>
            <div className="py-4">
              <div className="font-bold text-white mb-1">{(city.population / 1000000).toFixed(1)}M</div>
              <div className="text-xs">Population</div>
            </div>
            <div className="py-4">
              <div className="font-bold text-white mb-1">5★</div>
              <div className="text-xs">Client rating</div>
            </div>
            <div className="py-4">
              <div className="font-bold text-white mb-1">7 Days</div>
              <div className="text-xs">Avg delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE BAND */}
      <section className="bg-[#111118] text-white py-6 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="text-lg font-medium px-4">
            {city.name.toUpperCase()} · WEB DESIGN · AI WEBSITES · ECOMMERCE · SEO · AI AGENTS · BUILT IN 7 DAYS · AI-POWERED · NO LOCK-INS ·
          </span>
          <span className="text-lg font-medium px-4">
            {city.name.toUpperCase()} · WEB DESIGN · AI WEBSITES · ECOMMERCE · SEO · AI AGENTS · BUILT IN 7 DAYS · AI-POWERED · NO LOCK-INS ·
          </span>
        </div>
      </section>

      {/* WHY FACTORYJET SECTION */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-[#0a0a0a]" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            Why {city.name} businesses choose FactoryJet
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl">
            We combine speed, design, and results to deliver what {city.name} businesses actually need.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Speed That Competes',
                description: `From discovery to deployment in 7 days. Our AI-assisted process means you don't wait months for results.`,
                icon: Zap
              },
              {
                title: 'Built for Local Search',
                description: `Every site includes {city.name}-specific SEO from day one — proper schema markup and optimised content.`,
                icon: TrendingUp
              },
              {
                title: 'Transparent Pricing',
                description: `No hidden costs. You know exactly what you're paying for. Starting from £1,500.`,
                icon: Users
              }
            ].map((card, i) => {
              const Icon = card.icon
              return (
                <div key={i} className="bg-[#F8F9FA] p-8 rounded-xl border border-[#E9ECEF]">
                  <Icon size={32} className="text-[#0052CC] mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-[#0a0a0a]">{card.title}</h3>
                  <p className="text-gray-700">{card.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-[#F8F9FA] py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-[#0a0a0a]" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            Services for {city.name} Businesses
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <Link
                key={service.slug}
                href={`/uk/${city.slug}/${service.slug}`}
                className="bg-white p-8 rounded-xl border border-[#E9ECEF] hover:border-[#0052CC] transition-all duration-300 hover:shadow-lg group"
              >
                <h3 className="text-2xl font-bold mb-3 text-[#0a0a0a] group-hover:text-[#0052CC] transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{service.shortDescription}</p>

                <div className="mb-6 space-y-2">
                  <p className="text-sm text-gray-500">
                    Price Range: <span className="font-bold text-[#0a0a0a]">£{service.pricingRange.min} – £{service.pricingRange.max}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Delivery: <span className="font-bold text-[#0a0a0a]">{service.deliveryWeeks.standard} days</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[#0052CC] font-semibold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CITY STATS SECTION */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-[#0a0a0a]" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            {city.name} Business Landscape
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#F8F9FA] p-8 rounded-xl">
              <p className="text-gray-500 mb-2 text-sm">Population</p>
              <p className="text-4xl font-bold text-[#0a0a0a] mb-2">{(city.population / 1000000).toFixed(2)}M</p>
              <p className="text-gray-600">People living in {city.name}</p>
            </div>

            <div className="bg-[#F8F9FA] p-8 rounded-xl">
              <p className="text-gray-500 mb-2 text-sm">Registered Businesses</p>
              <p className="text-4xl font-bold text-[#0a0a0a] mb-2">{(city.businesses / 1000).toFixed(0)}k+</p>
              <p className="text-gray-600">SMEs & enterprises seeking digital solutions</p>
            </div>

            <div className="bg-[#F8F9FA] p-8 rounded-xl">
              <p className="text-gray-500 mb-2 text-sm">GDP</p>
              <p className="text-4xl font-bold text-[#0a0a0a] mb-2">£{city.gdpBn}B</p>
              <p className="text-gray-600">Economic output annually</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white p-12 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Key Industries in {city.name}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {city.primaryIndustries.map((industry, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#10B981] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">{industry}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0a0a0a] text-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            Ready to Transform {city.name}?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Get a free 30-minute consultation. Learn which service is right for your business. No obligations.
          </p>

          <button className="bg-[#FF6B35] hover:bg-[#ff8255] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
            Get My Free Quote <ArrowRight size={20} />
          </button>

          <div className="mt-12 text-gray-300">
            <p className="mb-2">connect@factoryjet.com • factoryjet.com</p>
            <p className="text-sm">Serving {city.name}, {city.region}</p>
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
