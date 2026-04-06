'use client';

import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Hero, SocialProof, EntityBlock, Problems, Solution } from './components/HeroAndIntro';
import { Services, Process, TechStack, Pricing, Industries } from './components/ServicesAndOfferings';
import { CaseStudies, Testimonials, FAQ, LocalSEO, FinalCTA } from './components/SocialProofAndFooter';
// import { CaseStudies, Testimonials, FAQ, LocalSEO, FinalCTA, Footer } from './components/SocialProofAndFooter'; // Commented out Footer - using global Footer instead
import { StickyWhatsApp, ExitIntentPopup } from './components/MarketingOverlays';

function HyderabadPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FactoryJet",
    "url": "https://factoryjet.com/services/web-design/hyderabad",
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
      "name": "Hyderabad"
    },
    "priceRange": "₹29,999 - ₹5,00,000+"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does website design cost in Hyderabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Website design costs vary based on complexity. At FactoryJet, we offer packages starting at ₹15,000 for basic websites to ₹5,00,000+ for enterprise solutions."
        }
      },
      {
        "@type": "Question",
        name: "How long does it take to build a website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our streamlined process typically delivers a website in 7 days. More complex projects may take 2-4 weeks."
        }
      },
      {
        "@type": "Question",
        name: "Do you provide e-commerce solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we specialize in e-commerce development with Shopify, WooCommerce, and custom platforms."
        }
      },
      {
        "@type": "Question",
        name: "Can you integrate payment gateways?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we integrate all major payment gateways including Razorpay, PayPal, Stripe for secure transactions."
        }
      },
      {
        "@type": "Question",
        name: "Will my website be mobile responsive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. All websites are fully responsive and optimized for all devices."
        }
      }
    ]
  };
  return (
    <main className="font-sans antialiased text-jet-navy bg-white w-full overflow-x-hidden">
      <Script
        id="hyderabad-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <Script
        id="hyderabad-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header variant="solid" />
      <Hero />
      <SocialProof />
      <EntityBlock />
      <Problems />
      <Solution />
      <Services />
      <Process />
      <TechStack />
      <Pricing />
      <Industries />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <LocalSEO />
      <FinalCTA />
      {/* <Footer /> */} {/* Commented out - using global Footer instead */}
      <Footer />
      <StickyWhatsApp />
      <ExitIntentPopup />
    </main>
  );
}

export default HyderabadPage;