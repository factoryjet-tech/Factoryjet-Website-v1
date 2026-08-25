"use client";

import { useEffect } from "react";

/**
 * Client shell for /au/adelaide. It owns two things only: the <main> landmark and the
 * Lenis smooth-scroll instance.
 *
 * Same arrangement as /uk/birmingham: the server component composes the page and passes
 * the sections in as children, so the static sections stay server-rendered and the
 * running order is readable in one place in page.tsx.
 */
export default function AdelaidePage({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: import("lenis").default | null = null;
    let rafId: number | null = null;
    let cancelled = false;

    async function initLenis() {
      const [{ default: Lenis }, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap/ScrollTrigger"),
      ]);

      // The dynamic imports are async, so the component can unmount before they land.
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

  return <main id="main-content">{children}</main>;
}
