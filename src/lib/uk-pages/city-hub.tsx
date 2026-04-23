'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, CheckCircle, ArrowRight } from 'lucide-react'
import { CityData, services } from '@/data/uk'

interface CityHubPageProps {
  city: CityData
}

export default function CityHubPage({ city }: CityHubPageProps) {
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
      text: `FactoryJet delivered our website in exactly 7 days as promised. The result is outstanding — we've seen more enquiries in two weeks than the previous three months.`,
      author: `${city.name} Business Owner`,
      role: 'Professional Services'
    },
    {
      text: 'As a small shop owner, I couldn\'t justify the quotes from local agencies asking £4,000+. FactoryJet gave me a better website for £799 in 5 days.',
      author: 'Independent Retailer',
      role: `${city.region} area`
    },
    {
      text: 'The AI chatbot handles about 40% of initial customer enquiries automatically. It\'s like having a receptionist working overnight.',
      author: `${city.name} Service Business Owner`,
      role: city.region
    }
  ]

  const pricing = [
    {
      name: 'Starter',
      price: '£799',
      duration: '5 days',
      description: 'Perfect for sole traders',
      features: ['5-page custom website', 'Mobile-first design', 'SEO setup', 'Contact form + Google Maps', '1× revision round'],
      featured: false
    },
    {
      name: 'Business',
      price: '£1,499',
      duration: '7 days',
      description: 'For established SMBs',
      features: ['Up to 10 pages', 'Custom design + animations', 'Full on-page SEO', 'Blog/news section', 'AI chatbot (basic)', 'Google Analytics + Search Console', '2× revision rounds'],
      featured: true
    },
    {
      name: 'E-Commerce',
      price: '£2,499',
      duration: '7 days',
      description: 'For online retailers',
      features: ['Shopify or WooCommerce build', 'Up to 50 products', 'Payment gateway integration', 'Delivery options setup', 'SEO-optimised product pages', 'AI chatbot for sales'],
      featured: false
    },
    {
      name: 'Enterprise',
      price: 'From £4,999',
      duration: '10-14 days',
      description: 'For complex projects',
      features: ['Complex multi-page builds', 'Custom functionality', 'AI agent integration', 'CRM/ERP connection', 'Dedicated project manager'],
      featured: false
    }
  ]

  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-center items-center px-4 md:px-8 overflow-hidden">
        {/* Decorative top line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#0052CC]"></div>
        {city.heroImage && (
          <Image src={city.heroImage} alt={`${city.name} cityscape`} fill className="object-cover opacity-20" priority />
        )}

        {/* Faded city name background */}
        <div className="absolute inset-0 opacity-5 text-9xl font-bold text-white pointer-events-none flex items-center justify-center">
          {city.name.toUpperCase()}
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            Web Design {city.name} — Built & Live in 7 Days
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light max-w-2xl mx-auto">
            AI-powered custom websites for {city.name} small businesses. Enterprise quality without the agency price tag.
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
              <div className="font-bold text-white mb-1">7 Days</div>
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
          <span className="text-lg font-medium px-4">WEB DESIGN {city.name.toUpperCase()} · BUILT IN 7 DAYS · AI-POWERED · NO LOCK-INS · FROM £799 · </span>
          <span className="text-lg font-medium px-4">WEB DESIGN {city.name.toUpperCase()} · BUILT IN 7 DAYS · AI-POWERED · NO LOCK-INS · FROM £799 · </span>
        </div>
      </section>

      {/* WHY FACTORYJET SECTION */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-[#0a0a0a]" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            Why {city.name} SMBs are switching to FactoryJet
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl">
            {city.name} has always been a city that builds things that last. We bring that same philosophy to web design.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Speed That Competes',
                description: 'Most agencies take 6–12 weeks. We deliver in 7 days. Our AI-assisted build process cuts development time by 80% while maintaining enterprise-quality standards.'
              },
              {
                title: 'Built for Local Search',
                description: `Every website includes ${city.name}-specific SEO from day one — local schema markup, Google Business Profile integration, and optimized content.`
              },
              {
                title: 'Truly Affordable',
                description: `We don't believe ${city.name} small businesses should pay London agency rates. Our pricing starts at £799 for a professional 5-page website.`
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

      {/* SERVICES SECTION */}
      <section className="bg-[#F8F9FA] py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-[#0a0a0a]" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            Web design & digital services for every {city.name} business
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Link
                key={i}
                href={`/uk/${city.slug}/${service.slug}`}
                className="bg-white p-8 rounded-xl border border-[#E9ECEF] hover:border-[#0052CC] transition-all duration-300"
              >
                {['web-design','ecommerce','ai-agents','ai-seo'].includes(service.slug) && (
                  <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <Image src={`/images/uk/${city.slug}/service-${service.slug}-${city.slug}.webp`} alt={`${service.name} ${city.name}`} fill className="object-cover" />
                  </div>
                )}
                <h3 className="text-xl font-bold mb-3 text-[#0a0a0a]">{service.name}</h3>
                <p className="text-gray-700 mb-4">{service.shortDescription}</p>
                <p className="text-sm text-gray-500">{service.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-[#0a0a0a] text-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-8xl font-bold mb-2" style={{ fontFamily: 'Clash Display, sans-serif' }}>7</div>
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

      {/* 7-DAY PROCESS */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-[#0a0a0a]" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            Your {city.name} website, live in 7 days
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { day: 'Day 1', title: 'Discovery Call', desc: 'We learn your business and goals' },
              { day: 'Day 2', title: 'Strategy & Structure', desc: 'Site architecture and keyword research' },
              { day: 'Day 3–4', title: 'Design', desc: 'Bespoke design with design preview link' },
              { day: 'Day 5–6', title: 'Development & SEO', desc: 'Built in code, fast, mobile-first' },
              { day: 'Day 7', title: 'Launch', desc: 'Final review, testing, and go-live' }
            ].map((step, i) => (
              <div key={i} className="bg-[#F8F9FA] p-6 rounded-lg border border-[#E9ECEF]">
                <div className="text-[#0052CC] font-bold text-sm mb-2">{step.day}</div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="bg-[#F8F9FA] py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-[#0a0a0a]" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            Transparent pricing for {city.name} businesses
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((pkg, i) => (
              <div
                key={i}
                className={`rounded-xl p-8 ${
                  pkg.featured
                    ? 'bg-white border-2 border-[#0052CC] shadow-lg'
                    : 'bg-white border border-[#E9ECEF]'
                }`}
              >
                {pkg.featured && (
                  <div className="bg-[#0052CC] text-white px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-1">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-gray-600 ml-2">{pkg.duration}</span>
                </div>
                <p className="text-sm text-gray-500 mb-6">{pkg.description}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={16} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                    pkg.featured
                      ? 'bg-[#FF6B35] text-white hover:bg-[#ff8255]'
                      : 'bg-[#F8F9FA] text-[#0a0a0a] hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
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
            Ready to get your {city.name} website built in 7 days?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join {city.name} businesses that have already made the switch. Get a free 30-minute consultation and transparent quote.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#FF6B35] hover:bg-[#ff8255] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2">
              Get My Free {city.name} Web Design Quote <ArrowRight size={20} />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all duration-300">
              Book a 30-Minute Consultation
            </button>
          </div>

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
              <Link href="/uk/services" className="text-lg font-semibold hover:text-[#0052CC] transition-colors">
                View All Services →
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
