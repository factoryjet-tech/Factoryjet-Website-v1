'use client';

import React from 'react';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero, { HeroDetailedText } from './components/Hero';
import { SocialProof, About, ProblemSection, SolutionSection } from './components/ContentBlocks';
import { Services, Process, Technologies, Pricing } from './components/ServiceBlocks';
import { Industries, CaseStudies } from './components/IndustryBlocks';
import { Testimonials, FAQ, LocalSEO, FinalCTA } from './components/TrustBlocks';
import { MobileStickyCTA } from './components/MobileStickyCTA';

const BangalorePage = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FactoryJet - Website Design Company Bangalore",
    "image": "https://www.factoryjet.com/images/factoryjet-bangalore.jpg",
    "url": "https://factoryjet.com/services/web-design/bangalore",
    "telephone": "+91 96999 77699",
    "email": "connect@factoryjet.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Koramangala, Bangalore",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560034",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9352",
      "longitude": "77.6245"
    },
    "priceRange": "₹15,000 - ₹5,00,000+",
    "openingHours": ["Mo-Fr 09:00-19:00", "Sa 10:00-16:00"],
    "areaServed": ["Bangalore", "Whitefield", "Koramangala", "Indiranagar", "Bellandur", "HSR Layout", "Jayanagar", "BTM Layout"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    },
    "sameAs": [
      "https://www.facebook.com/factoryjet",
      "https://www.linkedin.com/company/factoryjet",
      "https://twitter.com/factoryjet"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does website design cost in Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our pricing is structured by technology: Business Lead-Gen sites start at ₹29,999, Custom WordPress/CMS sites start at ₹39,999, and Shopify Stores start at ₹59,999. For Complex Enterprise or Multi-vendor Marketplaces, pricing starts at ₹99,999. All prices are exclusive of 18% GST."
        }
      },
      {
        "@type": "Question",
        name: "How long does it take to build a website in Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We move fast. A standard business site takes 7 to 10 days. E-commerce stores take about 3 to 4 weeks. If you need a custom web app, plan for 4 to 8 weeks."
        }
      },
      {
        "@type": "Question",
        name: "Do you provide SEO optimization for websites in Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, every site has the basics built-in. We handle meta tags, keywords, and speed tweaks. If you want to show up on Google or AI tools like ChatGPT, we have extra plans for that too."
        }
      },
      {
        "@type": "Question",
        name: "Should I choose WordPress or Shopify for my Bangalore business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on what you do. WordPress is best for service businesses or blogs because it is very flexible. Shopify is the top choice if you just want to sell products online. We work with both and can help you pick."
        }
      },
      {
        "@type": "Question",
        name: "What happens after my Bangalore website is launched?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You aren't on your own. We give you 30 to 90 days of support for any small fixes. After that, we offer yearly plans to keep your site fast, safe, and updated."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="bangalore-new-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <Script
        id="bangalore-new-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header variant="solid" />
      <main className="min-h-screen w-full overflow-x-hidden font-sans">
        <Hero />
        <HeroDetailedText />
        <SocialProof />
        <About />
        <ProblemSection />
        <SolutionSection />
        <Services />
        <Process />
        <Technologies />
        <Pricing />
        <Industries />
        <CaseStudies />
        <Testimonials />
        <FAQ />
        <LocalSEO />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
};

export default BangalorePage;
