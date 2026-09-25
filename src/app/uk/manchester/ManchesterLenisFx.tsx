"use client";

import { useEffect } from "react";

// Lenis smooth scroll for /uk/manchester, split out of ManchesterPage on
// 2026-09-26 so ManchesterPage (and every section it renders) can be a server
// component. Renders nothing.
//
// Same Lenis settings as before. Two changes: it only starts on devices with a
// fine pointer that can hover (Lenis only smooths wheel scrolling, touch
// scrolling is native either way, so phones got the download and a permanent
// requestAnimationFrame loop for no visible effect), and the cleanup now
// cancels the real rAF id (an inner `let rafId` used to shadow the outer one,
// so the loop was never cancelled).
export default function ManchesterLenisFx() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let lenis: import("lenis").default | null = null;
    let rafId: number | null = null;
    let cancelled = false;

    async function initLenis() {
      const [{ default: Lenis }, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;

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
      cancelled = true;
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);

  return null;
}
