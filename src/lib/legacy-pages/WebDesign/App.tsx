'use client';

import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Operations } from './components/Operations';
import { Process } from './components/Process';
import { Showcase } from './components/Showcase';
import { Analysis } from './components/Analysis';
import { Info } from './components/Info';
import { Locations } from './components/Locations';
import { FAQS } from './data';

function App() {
  // Smooth scroll behavior for anchor links if needed
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Design & Development Services",
    "description": "Professional web design and development services. Custom, responsive, mobile-first websites with SEO optimization and conversion-focused design.",
    "provider": {
      "@type": "Organization",
      "name": "FactoryJet",
      "url": "https://factoryjet.com",
      "logo": "https://factoryjet.com/FinalLogo.svg",
      "telephone": "+919699977699",
      "email": "connect@factoryjet.com"
    },
    "serviceType": "Web Design & Development",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Design Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Website Design",
            "description": "Bespoke website design tailored to your brand with modern UI/UX principles"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Responsive Web Development",
            "description": "Mobile-first, responsive websites that work flawlessly across all devices"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WordPress Development",
            "description": "Custom WordPress websites with theme development and plugin integration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "React & Next.js Development",
            "description": "High-performance web applications built with modern JavaScript frameworks"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-jet-orange/20 selection:text-jet-orange">

        <Hero />
        <Services />
        <Features />
        <Operations />
        <section id="process">
        <Process />
        </section>
        <Showcase />
        <Analysis />
        <Locations />
        <Info />

      </main>
    </>
  );
}

export default App;