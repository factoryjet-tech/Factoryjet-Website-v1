import type { Metadata } from "next";

import Hero from "./sections/Hero";
import DigitalLandscape from "./sections/DigitalLandscape";
import Services from "./sections/Services";
import Cities from "./sections/Cities";
import TechStack from "./sections/TechStack";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import FinalCTA from "./sections/FinalCTA";
import Footer from "./sections/Footer";

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

      {/* LCP image preload — homepage hero only (moved out of the shared UK layout) */}
      <link rel="preload" as="image" type="image/webp" href="/images/uk/hero-uk.webp" fetchPriority="high" />
      {/* JetBrains Mono — used by the TechStack section on this page */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" />

      {/* JSON-LD: Organization, Service ×4, FAQPage, BreadcrumbList */}
      {ukSchemas.map((s) => (
        <script
          key={s.id}
          id={s.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s.data) }}
        />
      ))}

      {/* JSON-LD: WebPage + Speakable */}
      <script
        id="ld-webpage-speakable"
        type="application/ld+json"
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
    </div>
  );
}
