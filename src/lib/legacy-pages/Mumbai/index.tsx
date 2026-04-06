import React from "react";
import { Helmet } from "react-helmet-async";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from "./components/Hero";
import {
  SocialProof,
  AboutSection,
  ProblemsSection,
  SolutionSection,
  ProcessSection,
  TechnologiesSection,
  LocalSEOSection,
  FinalCTA,
} from "./components/MainSections";
import {
  ServicesSection,
  PricingSection,
  IndustriesSection,
  CaseStudiesSection,
  TestimonialsSection,
  FaqSection,
} from "./components/DetailedSections";
// import Footer from "./components/Footer"; // Commented out - using global Footer instead
import ExitIntentModal from "./components/ExitIntentModal";
import { faqData } from "./data";
import { MessageCircle, Phone } from "lucide-react";

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "FactoryJet",
  "url": "https://factoryjet.com/locations/mumbai",
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
    "name": "Mumbai"
  },
  "priceRange": "₹29,999 - ₹5,00,000+"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

/* --- Sticky Mobile Bottom Bar --- */
const StickyMobileCTA = () => (
  <div className="fixed bottom-0 left-0 w-full z-50 md:hidden flex shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] font-sans">
    <a
      href="https://wa.me/919699977699"
      className="flex-1 bg-[#25D366] text-white py-3.5 flex items-center justify-center gap-2 font-bold text-sm active:bg-green-700"
    >
      <MessageCircle className="w-5 h-5" /> WhatsApp
    </a>
    <a
      href="tel:+919699977699"
      className="flex-1 bg-primary text-white py-3.5 flex items-center justify-center gap-2 font-bold text-sm active:bg-blue-800"
    >
      <Phone className="w-5 h-5" /> Call Now
    </a>
  </div>
);

function MumbaiPage() {
  return (
    <div className="font-sans antialiased text-navy bg-white pb-14 md:pb-0">
      <Helmet>
        <title>FactoryJet - Industrial Web Design Company Mumbai</title>
        <meta
          name="description"
          content="FactoryJet is a leading industrial web design company in Mumbai. We offer a wide range of services to help you create a professional and effective website for your business."
        />
      </Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header variant="solid" />

      {/* SECTION 1: HERO */}
      <Hero />

      {/* SECTION 2: SOCIAL PROOF */}
      <SocialProof />

      {/* SECTION 3: ENTITY BLOCK */}
      <AboutSection />

      {/* SECTION 4: PROBLEMS */}
      <ProblemsSection />

      {/* SECTION 5: SOLUTION */}
      <SolutionSection />

      {/* SECTION 6: SERVICES */}
      <ServicesSection />

      {/* SECTION 7: PROCESS */}
      <ProcessSection />

      {/* SECTION 8: TECHNOLOGIES */}
      <TechnologiesSection />

      {/* SECTION 9: PRICING & ROI CALCULATOR */}
      <PricingSection />

      {/* SECTION 10: INDUSTRIES */}
      <IndustriesSection />

      {/* SECTION 11: CASE STUDIES */}
      <CaseStudiesSection />

      {/* SECTION 12: TESTIMONIALS */}
      <TestimonialsSection />

      {/* SECTION 13: FAQS */}
      <FaqSection />

      {/* SECTION 14: LOCAL SEO */}
      <LocalSEOSection />

      {/* SECTION 15: FINAL CTA */}
      <FinalCTA />

      {/* SECTION 16: FOOTER */}
      {/* <Footer /> */} {/* Commented out - using global Footer instead */}
      <Footer />

      {/* MOBILE STICKY BAR */}
      <StickyMobileCTA />

      {/* EXIT INTENT POPUP */}
      <ExitIntentModal />
    </div>
  );
}

export default MumbaiPage;
