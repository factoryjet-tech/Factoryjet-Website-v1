'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FactoryJetPricing from './components/FactoryJetPricing';

const App: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development & E-Commerce Pricing",
    "provider": {
      "@type": "Organization",
      "name": "FactoryJet",
      "url": "https://factoryjet.com",
      "telephone": "+91 96999 77699",
      "email": "connect@factoryjet.com"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Starter Website Package",
            "description": "5-page responsive website with WordPress or React basics"
          },
          "price": "29999",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Professional Website Package",
            "description": "10-page custom website with advanced features and SEO optimization"
          },
          "price": "59999",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enterprise Website Package",
            "description": "20-page enterprise website with custom integrations and advanced features"
          },
          "price": "99999",
          "priceCurrency": "INR"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen w-full bg-slate-50">
        <Header variant="solid" />
        <FactoryJetPricing />
        <Footer />
      </main>
    </>
  );
};

export default App;