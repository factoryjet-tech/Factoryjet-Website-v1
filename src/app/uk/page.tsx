import type { Metadata } from "next";

import Hero from "./sections/Hero";
import AnswerFirst from "./sections/AnswerFirst";
import DigitalLandscape from "./sections/DigitalLandscape";
import Services from "./sections/Services";
import Cities from "./sections/Cities";
import Deliverables from "./sections/Deliverables";
import TechStack from "./sections/TechStack";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import FinalCTA from "./sections/FinalCTA";
import Footer from "./sections/Footer";
import AuthorCard from '@/components/v2/AuthorCard';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import MidPageCTA from '@/components/v2/MidPageCTA';
import WebDesignArchitectureBlueprint from '@/components/v2/WebDesignArchitectureBlueprint';
import WebDesignValueCalculator from '@/components/v2/WebDesignValueCalculator';
import RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard';
import CityLinksUK from '@/components/v2/CityLinksUK';

import { ukMetadata } from "./metadata";
import { ukSchemas, UK_CRUMBS } from "./schema";

// Last date the content of /uk actually changed. Matches the `UPDATED` const
// convention used by the UK hub pages (see src/app/uk/ai-agents/page.tsx).
const UPDATED = "2026-08-25";

export function generateMetadata(): Metadata {
  return ukMetadata;
}

export default function UKPage() {
  return (
    <div className="uk-page-root">
      {/* Skip-to-content, keyboard accessibility */}
      <a href="#main-content" className="uk-skip-link">
        Skip to main content
      </a>

      {/* LCP image preload, homepage hero only (moved out of the shared UK layout) */}
      <link rel="preload" as="image" type="image/webp" href="/images/uk/hero-uk.webp" fetchPriority="high" />
      {/* JetBrains Mono, used by the TechStack section on this page */}
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
            inLanguage: "en-GB",
            // 2026-08-03: /uk shipped without dateModified, one of the 293 URLs
            // the rendered audit flagged. Honest date: the footer city list and
            // the /uk/ecommerce service-schema URL both changed on this date.
            // Bump this only when the page actually changes; a build-date stamp
            // on unchanged content is a freshness lie, not a fix.
            dateModified: UPDATED,
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", "h2:first-of-type"],
            },
            url: "https://factoryjet.com/uk",
          }),
        }}
      />

      <main id="main-content" className="min-h-screen bg-white">
        {/* Visible trail. Same UK_CRUMBS array drives the BreadcrumbList JSON-LD
            above, so the two cannot drift. Wrapped in the cream band so it reads
            as part of the hero rather than a white strip above it. */}
        <div className="bg-fj-cream pb-1">
          <Breadcrumbs items={UK_CRUMBS} />
        </div>

        <Hero />
        <AnswerFirst />
        <DigitalLandscape />
        <Services />
        <Cities />
        <Deliverables />

        {/* Mid-page CTA, roughly halfway down. Before this the page had a hero
            CTA and a closing CTA and nothing in between. */}
        <MidPageCTA
          headline={'Want to know where your UK site stands right now?'}
          sub={'Send us the URL and we will run a free audit: technical issues, Google visibility, and whether ChatGPT and Perplexity can see you at all. You get the findings whether or not you hire us.'}
          label={'Get a free UK digital audit'}
          note={'Bhavesh replies within one business day.'}
        />

        <TechStack />
        <Pricing />
        <section className="sec-lg" style={{ backgroundColor: "#FFFFFF", padding: "48px 0 16px" }}>
          <div className="wrap" style={{ maxWidth: 1120, margin: "0 auto", padding: "0 16px" }}>
            <RegionalBenchmarkCard city="United Kingdom" vertical="web-design" />
          </div>
        </section>

        <div id="uk-architecture-blueprint">
          <WebDesignArchitectureBlueprint />
        </div>

        <WebDesignValueCalculator city="UK" region="uk" />

        <FAQ />

        <CityLinksUK />

        <section className="sec-lg" style={{ backgroundColor: "#F6F6F9", padding: "48px 0", borderTop: "1px solid #E6E6EC" }}>
          <div className="wrap" style={{ maxWidth: 1120, margin: "0 auto", padding: "0 16px" }}>
            <AuthorCard />
          </div>
        </section>
        <FinalCTA />
        <Footer />
      </main>
    </div>
  );
}
