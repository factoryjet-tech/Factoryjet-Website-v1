import type { Metadata } from "next";
import Script from "next/script";

import Hero from "./sections/Hero";
import DigitalLandscape from "./sections/DigitalLandscape";
import Services from "./sections/Services";
import Cities from "./sections/Cities";
import TechStack from "./sections/TechStack";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import FinalCTA from "./sections/FinalCTA";
import Footer from "./sections/Footer";
import LeadFormModal from "./components/LeadFormModal";

import { ukMetadata } from "./metadata";
import { ukSchemas } from "./schema";

export function generateMetadata(): Metadata {
  return ukMetadata;
}

export default function UKPage() {
  return (
    <div className="uk-page-root">
      {/* Skip-to-content — keyboard accessibility */}
      <a href="#main-content" className="uk-skip-link">
        Skip to main content
      </a>

      {/* JSON-LD: Organization, Service ×4, FAQPage, BreadcrumbList */}
      {ukSchemas.map((s) => (
        <Script
          key={s.id}
          id={s.id}
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s.data) }}
        />
      ))}

      {/* JSON-LD: WebPage + Speakable */}
      <Script
        id="ld-webpage-speakable"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://factoryjet.com/uk#webpage",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", "h2:first-of-type"],
            },
            url: "https://factoryjet.com/uk",
          }),
        }}
      />

      <main id="main-content" className="min-h-screen bg-white">
        <Hero />
        <DigitalLandscape />
        <Services />
        <Cities />
        <TechStack />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>

      <LeadFormModal />
    </div>
  );
}
