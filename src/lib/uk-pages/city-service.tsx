'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ArrowRight, CheckCircle } from 'lucide-react'
import { CityData, ServiceData } from '@/data/uk'

interface CityServicePageProps {
  city: CityData
  service: ServiceData
}

export default function CityServicePage({ city, service }: CityServicePageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      q: 'How can you build a website in just 7 days?',
      a: `We've engineered our entire process around speed without compromise. Our AI-assisted design tools and standardised build process means we work 3–4× faster than traditional agencies.`
    },
    {
      q: 'Is my website really custom, or is it a template?',
      a: '100% custom. We don\'t use WordPress themes, Wix, or any templates. Every design starts from a blank canvas built specifically for your business.'
    },
    {
      q: 'Do I need technical knowledge to manage my website after launch?',
      a: 'No. Every website includes a 30-minute training session and plain-English documentation. You\'ll be able to update content and make basic changes without any coding.'
    },
    {
      q: `Will my website rank on Google for ${city.name} searches?`,
      a: `We build every site with ${city.name} local SEO from the ground up — proper schema markup, optimised meta tags, and ${city.name}-specific keyword integration.`
    },
    {
      q: 'Do I have to sign a long-term contract?',
      a: 'Never. We don\'t believe in locking businesses into contracts. You pay for the build upfront, and you own everything — your domain, hosting, and website files.'
    }
  ]

  const testimonials = [
    {
      text: `FactoryJet delivered our ${service.name} in exactly ${service.deliveryWeeks.standard} days as promised. The result is outstanding — we've seen more enquiries in two weeks than the previous three months.`,
      author: `${city.name} Business Owner`,
      role: 'Professional Services'
    },
    {
      text: `As a small business owner, I couldn't justify the quotes from local agencies. FactoryJet gave me a better ${service.name} for £${service.pricingRange.min} in just ${service.deliveryWeeks.standard} days.`,
      author: 'Independent Business',
      role: `${city.region} area`
    },
    {
      text: 'The AI chatbot handles about 40% of initial customer enquiries automatically. It\'s like having a receptionist working overnight.',
      author: `${city.name} Service Business`,
      role: city.region
    }
  ]

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
            {service.heroHeadline.replace('{cityName}', city.name)}
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light max-w-2xl mx-auto">
            {service.shortDescription}
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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm text-gray-400 border-t border-gray-800 pt-8 mt-8">
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
            <div className="py-4">
              <div className="font-bold text-white mb-1">24/7</div>
              <div className="text-xs">AI-powered sites</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE BAND */}
      <section className="bg-[#111118] text-white py-6 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="text-lg font-medium px-4">
            {service.name.toUpperCase()} {city.name.toUpperCase()} · BUILT IN {service.deliveryWeeks.standard} DAYS · AI-POWERED · NO LOCK-INS · FROM £{service.pricingRange.min} ·
          </span>
          <span className="text-lg font-medium px-4">
            {service.name.toUpperCase()} {city.name.toUpperCase()} · BUILT IN {service.deliveryWeeks.standard} DAYS · AI-POWERED · NO LOCK-INS · FROM £{service.pricingRange.min} ·
          </span>
        </div>
      </section>

      {/* WHY FACTORYJET SECTION */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-[#0a0a0a]" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            Why {city.name} businesses choose FactoryJet for {service.name}
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl">
            {city.name} has always been a city that builds things that last. We bring that same philosophy to {service.name.toLowerCase()}.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Speed That Competes',
                description: `Most agencies take 6–12 weeks. We deliver in ${service.deliveryWeeks.standard} days. Our AI-assisted build process cuts development time by 80% while maintaining enterprise-quality standards.`
              },
              {
                title: 'Built for Local Search',
                description: `Every ${service.name.toLowerCase()} includes ${city.name}-specific SEO from day one — local schema markup, Google Business Profile integration, and optimized content.`
              },
              {
                title: 'Truly Affordable',
                description: `We don't believe ${city.name} small businesses should pay London agency rates. Our pricing starts at £${service.pricingRange.min} for professional ${service.name.toLowerCase()}.`
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

      {/* STATS SECTION */}
      <section className="bg-[#0a0a0a] text-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-8xl font-bold mb-2" style={{ fontFamily: 'Clash Display, sans-serif' }}>{service.deliveryWeeks.standard}</div>
              <div className="text-lg text-gray-400">Days — Average delivery time</div>
            </div>
            <div>
              <div className="text-8xl font-bold mb-2" style={{ fontFamily: 'Clash Display, sans-serif' }}>100%</div>
              <div className="text-lg text-gray-400">Custom builds, zero templates</div>
            </div>
            <div>
              <div className="text-8xl font-bold mb-2" style={{ fontFamily: 'Clash Display, sans-serif' }}>3×</div>
              <div className="text-lg text-gray-400">More leads with AI chatbot</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="bg-[#F8F9FA] py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-[#0a0a0a]" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            Transparent pricing for {service.name} in {city.name}
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

      {/* TESTIMONIALS */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-[#0a0a0a]" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            What {city.name} business owners say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <div key={i} className="bg-[#F8F9FA] p-8 rounded-xl">
                <p className="text-gray-700 mb-6 italic">"{test.text}"</p>
                <div>
                  <p className="font-bold text-[#0a0a0a]">{test.author}</p>
                  <p className="text-sm text-gray-500">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-[#F8F9FA] py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-[#0a0a0a]" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            Common questions from {city.name} businesses
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg border border-[#E9ECEF] overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-[#F8F9FA] transition-colors"
                >
                  <h3 className="font-bold text-[#0a0a0a] text-left">{faq.q}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-[#0052CC] transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 py-4 bg-[#F8F9FA] border-t border-[#E9ECEF]">
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL CREDIBILITY */}
      <section className="bg-[#0052CC] text-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-8" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            Built for {city.name}. Delivered globally.
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mb-12">
            {city.name}'s identity has always been built on making things well. We understand that {city.name} SMBs need a web presence that reflects professionalism and converts local traffic into real customers.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-5xl font-bold mb-2">{city.businesses.toLocaleString()}+</div>
              <div className="text-blue-100">Registered SMBs in {city.name}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">73%</div>
              <div className="text-blue-100">Research online before buying</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">34%</div>
              <div className="text-blue-100">Have mobile-optimised websites</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">3×</div>
              <div className="text-blue-100">More leads with AI chatbot</div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0a0a0a] text-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            Ready for {service.name} in {city.name}?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Get a free 30-minute consultation and transparent quote. No obligations.
          </p>

          <button className="bg-[#FF6B35] hover:bg-[#ff8255] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
            Get My Free Quote <ArrowRight size={20} />
          </button>

          <div className="mt-12 grid md:grid-cols-4 gap-8 text-left">
            <div>
              <p className="text-gray-400 text-sm mb-2">EMAIL</p>
              <p className="text-lg font-semibold">connect@factoryjet.com</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">WHATSAPP</p>
              <p className="text-lg font-semibold">+44 (0) 123 456 7890</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">WEBSITE</p>
              <p className="text-lg font-semibold">factoryjet.com</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">SERVICES</p>
              <Link href={`/uk/${city.slug}`} className="text-lg font-semibold hover:text-[#0052CC] transition-colors">
                View {city.name} Services →
              </Link>
            </div>
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
