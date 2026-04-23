"use client";

import { useEffect } from "react";
import Hero from "./sections/Hero";
import DigitalLandscape from "./sections/DigitalLandscape";
import Services from "./sections/Services";
import Cities from "./sections/Cities";
import TechStack from "./sections/TechStack";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import FinalCTA from "./sections/FinalCTA";
import Footer from "@/app/uk/sections/Footer";

export default function LiverpoolPage() {
  useEffect(() => {
    let lenis: import("lenis").default | null = null;
    let rafId: number | null = null;

    async function initLenis() {
      const [{ default: Lenis }, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap/ScrollTrigger"),
      ]);

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
  );
}
