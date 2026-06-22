'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { services, cities, externalLinks } from '@/data/seoConfig';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
// import Footer from './components/Footer'; // Commented out - using global Footer instead

interface ServiceLocationPageProps {
  params: {
    service: string;
    city: string;
  };
}

const ServiceLocationPage: React.FC<ServiceLocationPageProps> = ({ params }) => {
  const router = useRouter();
  const { service, city } = params;

  // Validate service and city slugs
  const serviceData = service ? services[service] : null;
  const cityData = city ? cities[city] : null;

  // Redirect to home if invalid
  useEffect(() => {
    if (!serviceData || !cityData) {
      router.push('/');
    }
  }, [serviceData, cityData, router]);

  if (!serviceData || !cityData) {
    return null;
  }

  const cityName = cityData.name;

  // Generate SEO content
  const primaryKeyword = serviceData.primaryKeyword(cityName);
  const secondaryKeywords = serviceData.secondaryKeywords(cityName);
  const semanticKeywords = serviceData.semanticKeywords(cityName);
  const metaDescription = serviceData.metaDescription(cityName);
  const h1Title = serviceData.h1(cityName);
  const h2Intro = serviceData.h2Intro(cityName);

  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FactoryJet",
    "url": `https://factoryjet.com/services/${service}/${city}`,
    "telephone": "+91 96999 77699",
    "email": "connect@factoryjet.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ITPL Main Rd, Tigalarpalya, Brookefield",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560037",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "Place",
      "name": cityName
    },
    "priceRange": "₹29,999 - ₹5,00,000+"
  };

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How long does it take to complete a project in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most projects are completed within 7 days. Complex projects may take 2-3 weeks. We provide detailed timelines during the consultation phase.",
        },
      },
      {
        "@type": "Question",
        name: "What is included in your service packages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All packages include custom design, development, SEO optimization, mobile responsiveness, hosting setup, and ongoing support for the first month.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide ongoing support after launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We offer 24/7 support and maintenance packages. The first month of support is included with all projects.",
        },
      },
      {
        "@type": "Question",
        name: "What is your payment structure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We follow a milestone-based payment structure: 40% advance, 30% on design approval, and 30% on completion. Flexible payment options available.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help with content and copywriting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! We have content specialists who can help with professional copywriting, product descriptions, and SEO-optimized content.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide SEO services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, basic on-page SEO is included in all projects. We also offer comprehensive SEO packages for long-term organic growth.",
        },
      },
    ],
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://factoryjet.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://factoryjet.com/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": serviceData.name,
        "item": `https://factoryjet.com/services/${service}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": cityName,
        "item": `https://factoryjet.com/services/${service}/${city}`
      }
    ]
  };

  // Update document title and meta on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service, city]);

  // Update document title dynamically
  useEffect(() => {
    document.title = `${primaryKeyword} | FactoryJet - Fast, Affordable & Results-Driven`;
  }, [primaryKeyword]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />
      <div className="min-h-screen bg-white">
        <Header variant="transparent" />

        {/* Hero Section with H1 */}
        <Hero
          h1={h1Title}
          h2={h2Intro}
          city={cityName}
          service={serviceData.name}
        />

        {/* Breadcrumb Navigation - SEO Enhancement */}
        <nav aria-label="Breadcrumb" className="bg-gray-50 py-3 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-jet-blue hover:text-jet-navy transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/#services" className="text-jet-blue hover:text-jet-navy transition-colors">
                  Services
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <span className="text-gray-600">{serviceData.name}</span>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <span className="text-gray-900 font-semibold">{cityName}</span>
              </li>
            </ol>
          </div>
        </nav>

        {/* Main Content with Semantic HTML */}
        <main>
          {/* Introduction Section - SEO Content with Keywords */}
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-jet-navy mb-6">
                  {h2Intro}
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    Looking for a trusted <strong>{primaryKeyword.toLowerCase()}</strong>?
                    FactoryJet is your go-to partner for {serviceData.name.toLowerCase()} solutions
                    that drive real business results. We specialize in creating high-performance,
                    conversion-focused digital solutions for businesses in {cityName} and across {cityData.state}.
                  </p>
                  <p>
                    As a leading <strong>{secondaryKeywords[0].toLowerCase()}</strong> provider,
                    we've helped over 150+ businesses transform their online presence. Whether you're
                    a startup looking to establish your digital footprint or an established enterprise
                    seeking to upgrade your technology stack, we deliver solutions tailored to your needs.
                  </p>

                  {/* Internal Links to Related Services */}
                  <div className="bg-blue-50 border-l-4 border-jet-blue p-6 rounded-r-lg mt-6">
                    <h3 className="text-xl font-bold text-jet-navy mb-3">
                      Related Services in {cityName}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {Object.entries(services)
                        .filter(([slug]) => slug !== service)
                        .slice(0, 4)
                        .map(([slug, svc]) => (
                          <Link
                            key={slug}
                            href={`/services/${slug}/${city}`}
                            className="text-jet-blue hover:text-jet-navy hover:underline font-medium flex items-center gap-2"
                          >
                            <span className="text-jetOrange">→</span>
                            {svc.name} in {cityName}
                          </Link>
                        ))
                      }
                    </div>
                  </div>

                  {/* External Links for E-E-A-T */}
                  <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-bold text-jet-navy mb-3">
                      Technologies & Partnerships
                    </h3>
                    <p className="text-gray-700 mb-3">
                      We work with industry-leading platforms and technologies to deliver
                      best-in-class solutions:
                    </p>
                    <ul className="space-y-2">
                      {service === 'shopify-development' && (
                        <li>
                          <a
                            href={externalLinks.shopify}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-jet-blue hover:underline font-medium"
                          >
                            Shopify
                          </a> - Official Shopify Partner for e-commerce solutions
                        </li>
                      )}
                      {(service === 'wordpress-development' || service === 'web-development') && (
                        <li>
                          <a
                            href={externalLinks.wordpress}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-jet-blue hover:underline font-medium"
                          >
                            WordPress
                          </a> - Trusted WordPress development experts
                        </li>
                      )}
                      {service === 'ecommerce-development' && (
                        <>
                          <li>
                            <a
                              href={externalLinks.woocommerce}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-jet-blue hover:underline font-medium"
                            >
                              WooCommerce
                            </a> - Certified WooCommerce developers
                          </li>
                          <li>
                            <a
                              href={externalLinks.razorpay}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-jet-blue hover:underline font-medium"
                            >
                              Razorpay
                            </a> - Integrated payment gateway solutions
                          </li>
                        </>
                      )}
                      {service === 'mobile-app-development' && (
                        <>
                          <li>
                            <a
                              href={externalLinks.reactNative}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-jet-blue hover:underline font-medium"
                            >
                              React Native
                            </a> - Cross-platform mobile development
                          </li>
                          <li>
                            <a
                              href={externalLinks.flutter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-jet-blue hover:underline font-medium"
                            >
                              Flutter
                            </a> - High-performance native apps
                          </li>
                        </>
                      )}
                      <li>
                        <a
                          href={externalLinks.googlePartner}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-jet-blue hover:underline font-medium"
                        >
                          Google Partner
                        </a> - Certified Google Partner for digital solutions
                      </li>
                    </ul>
                  </div>

                  {/* SEO Keyword-rich section */}
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-jet-navy mb-4">
                      Why Choose Our {serviceData.name} Services in {cityName}?
                    </h3>
                    <p>
                      When searching for <strong>{semanticKeywords[0].toLowerCase()}</strong>,
                      businesses need more than just technical expertise—they need a partner who
                      understands local market dynamics. Here's what makes us different:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-4 text-gray-700">
                      <li><strong>Local Expertise:</strong> Deep understanding of {cityName}'s business landscape</li>
                      <li><strong>Fast Delivery:</strong> Launch your project in as little as 7 days</li>
                      <li><strong>Affordable Pricing:</strong> Transparent pricing with no hidden costs</li>
                      <li><strong>Ongoing Support:</strong> 24/7 support and maintenance included</li>
                      <li><strong>Proven Results:</strong> 150+ successful projects delivered</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Services service={service!} city={cityName} />
          <Process service={service!} city={cityName} />
          <WhyUs service={service!} city={cityName} />
          <Portfolio service={service!} city={cityName} />
          <Testimonials city={cityName} />
          <Pricing service={service!} city={cityName} />
          <FAQ service={service!} city={cityName} />

          {/* SEO Content - Keyword Coverage Section */}
          <section className="py-12 md:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-jet-navy mb-8 text-center">
                Comprehensive {serviceData.name} Solutions in {cityName}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-jet-navy mb-3">
                    {secondaryKeywords[1]}
                  </h3>
                  <p className="text-gray-600">
                    Professional services tailored to your business needs in {cityName}.
                    We deliver custom solutions that align with your goals.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-jet-navy mb-3">
                    {secondaryKeywords[2] || semanticKeywords[0]}
                  </h3>
                  <p className="text-gray-600">
                    Work with experienced professionals who understand the {cityName} market
                    and deliver results that matter.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-jet-navy mb-3">
                    {secondaryKeywords[3] || semanticKeywords[1]}
                  </h3>
                  <p className="text-gray-600">
                    Get transparent pricing, clear timelines, and measurable results for your
                    {serviceData.name.toLowerCase()} project.
                  </p>
                </div>
              </div>

              {/* Local Areas Coverage */}
              <div className="mt-12 bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-jet-navy mb-4">
                  Serving Businesses Across {cityName}
                </h3>
                <p className="text-gray-700 mb-4">
                  We provide {serviceData.name.toLowerCase()} services to businesses across
                  all major areas in {cityName}, including:
                </p>
                <div className="flex flex-wrap gap-3">
                  {cityData.localKeywords.map((area, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-50 text-jet-blue rounded-full text-sm font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <CTA service={service!} city={cityName} />
        </main>

        {/* <Footer service={service!} city={cityName} /> */} {/* Commented out - using global Footer instead */}
        <Footer />
      </div>
    </>
  );
};

export default ServiceLocationPage;
