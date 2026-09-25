import Breadcrumbs from "@/components/v2/Breadcrumbs";
import MidPageCTA from "@/components/v2/MidPageCTA";
import { crumbs } from "./crumbs";

import Hero from "./sections/Hero";
import StatsBar from "./sections/StatsBar";
import MarqueeTicker from "./sections/MarqueeTicker";
import CityContext from "./sections/CityContext";
import ProblemStatement from "./sections/ProblemStatement";
import ServiceExplanation from "./sections/ServiceExplanation";
import SeoManchester from "./sections/SeoManchester";
import CompetitorComparison from "./sections/CompetitorComparison";
import ProcessTimeline from "./sections/ProcessTimeline";
import IndustriesGrid from "./sections/IndustriesGrid";
import CaseStudy from "./sections/CaseStudy";
import AIVisibility from "./sections/AIVisibility";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import SocialProof from "./sections/SocialProof";
import FinalCTA from "./sections/FinalCTA";
import LogoMarquee from "./sections/LogoMarquee";
import Footer from "@/app/uk/sections/Footer";
import ManchesterLenisFx from "./ManchesterLenisFx";

// 2026-09-26 (perf): server component. It used to be "use client" for the Lenis
// effect alone, which pulled every section below into the client bundle and
// hydrated all of them. Lenis now lives in the ./ManchesterLenisFx island.

export default function ManchesterPage({ children }: { children?: React.ReactNode }) {
  return (
    <main id="main-content">
      <ManchesterLenisFx />
      {/* Visible trail. Same `crumbs` array feeds the BreadcrumbList JSON-LD in
          layout.tsx, so the markup and the schema cannot drift apart. */}
      <Breadcrumbs items={crumbs} />

      {/* Section 1: Hero, light cream, asymmetric 7/5 split */}
      <Hero />

      {/* StatsBar, 4 Greater Manchester market stats, white bg */}
      <StatsBar />

      {/* Section 2: MarqueeTicker, Trust signals scrolling ticker */}
      <MarqueeTicker />

      {/* Section 3: CityContext: Editorial split layout */}
      <CityContext />

      {/* Section 4: ProblemStatement, Full-width dramatic typography */}
      <ProblemStatement />

      {/* Section 5: ServiceExplanation: Bento card grid */}
      <ServiceExplanation />

      {/* Section 6: SeoManchester, the "seo agency manchester" scope block */}
      <SeoManchester />

      {/* Mid-page CTA. Sits at roughly 40% of the page, well clear of both the
          hero and the closing CTA, and is a real anchor so it works without JS. */}
      <MidPageCTA
        headline="Want to know why you are not ranking in Manchester?"
        sub="Send us your website. We run the crawl, check your Google Business Profile, and come back with a short written list of what is holding you back and what we would fix first."
        label="Get a free site review"
        note="Bhavesh replies within one business day."
      />

      {/* Section 7: CompetitorComparison, Magazine-style editorial table */}
      <CompetitorComparison />

      {/* Section 8: ProcessTimeline: GSAP timeline, dark bg */}
      <ProcessTimeline />

      {/* Section 9: IndustriesGrid, Asymmetric bento with icons */}
      <IndustriesGrid />

      {/* Section 10: CaseStudy, Before/After split */}
      <CaseStudy />

      {/* Section 11: AIVisibility: GEO/AEO/SSR info cards */}
      <AIVisibility />

      {/* Section 12: Pricing, what each engagement includes */}
      <Pricing />

      {/* Section 13: FAQ: 24 questions, fully expanded, no accordions */}
      <FAQ />

      {/* Section 14: SocialProof: statistics and testimonials */}
      <SocialProof />

      {/* LogoMarquee 2: Industry logos, scrolls right at 45 s */}
      <LogoMarquee direction="right" speed={45} />

      {/* Everything page.tsx passes in. These blocks used to render AFTER the
          footer, which put them outside <main> and hid their links and lists
          from every crawler that respects landmarks. */}
      {children}

      {/* Section 15: FinalCTA, closing conversion section with embedded form */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
