"use client";

import { useEffect } from "react";

import Hero from "./sections/Hero";
import StatsBar from "./sections/StatsBar";
import MarqueeTicker from "./sections/MarqueeTicker";
import CityContext from "./sections/CityContext";
import ProblemStatement from "./sections/ProblemStatement";
import ServiceExplanation from "./sections/ServiceExplanation";
import CompetitorComparison from "./sections/CompetitorComparison";
import MidPageCTA from "./sections/MidPageCTA";
import ProcessTimeline from "./sections/ProcessTimeline";
import IndustriesGrid from "./sections/IndustriesGrid";
import CaseStudy from "./sections/CaseStudy";
import AIVisibility from "./sections/AIVisibility";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import SocialProof from "./sections/SocialProof";
import FinalCTA from "./sections/FinalCTA";
import LogoMarquee from "./sections/LogoMarquee";
import Footer from "./sections/Footer";

export default function LeedsPage() {
  useEffect(() => {
    let lenis: import("lenis").default | null = null;
    let rafId: number | null = null;

    async function initLenis() {
      const [{ default: Lenis }, { ScrollTrigger }] =
        await Promise.all([
          import("lenis"),
          import("gsap/ScrollTrigger"),
        ]);

      // Lenis with optimized settings for smooth scroll
      lenis = new Lenis({
        lerp: 0.05,
        wheelMultiplier: 0.8,
        touchMultiplier: 1.2,
        infinite: false,
        duration: 1.2,
      });

      lenis.on("scroll", ScrollTrigger.update);

      function raf(time: number) {
        lenis!.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    }

    initLenis();

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <main id="main-content">
      {/* Section 1: Hero — Dark, immersive, cinematic */}
      <Hero />

      {/* StatsBar — 4 animated market stats, white bg, immediately below hero */}
      <StatsBar />

      {/* Section 2: MarqueeTicker — Trust signals scrolling ticker */}
      <MarqueeTicker />

      {/* Section 3: CityContext — Editorial split layout, Blue-50 bg */}
      <CityContext />

      {/* Section 4: ProblemStatement — Full-width dramatic typography */}
      <ProblemStatement />

      {/* Section 5: ServiceExplanation — Bento card grid, Gray-50 bg */}
      <ServiceExplanation />

      {/* Section 6: CompetitorComparison — Magazine-style editorial table */}
      <CompetitorComparison />

      {/* MidPageCTA — Jet Blue full-width band */}
      <MidPageCTA />

      {/* Section 7: ProcessTimeline — Signature GSAP horizontal scroll, dark bg */}
      <ProcessTimeline />

      {/* Section 8: IndustriesGrid — Asymmetric bento with icons */}
      <IndustriesGrid />

      {/* Section 9: CaseStudy — Before/After split with animated counters */}
      <CaseStudy />

      {/* Section 10: AIVisibility — Dark section, GEO/AEO/SSR info cards */}
      <AIVisibility />

      {/* Section 11: Pricing — Clean table with highlighted FactoryJet column */}
      <Pricing />

      {/* Section 12: FAQ — Fully expanded, no accordions */}
      <FAQ />

      {/* Section 13: SocialProof — Dark, statistics and testimonials */}
      <SocialProof />

      {/* LogoMarquee 2 — Industry logos, scrolls right at 45 s */}
      <LogoMarquee direction="right" speed={45} />

      {/* Section 14: FinalCTA — Dark conversion section with embedded form */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
