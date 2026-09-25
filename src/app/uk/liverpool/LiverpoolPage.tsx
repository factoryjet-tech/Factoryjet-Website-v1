"use client";

// Client shell for /uk/liverpool. Its only job is Lenis smooth scroll plus the
// <main> landmark. Every section is composed in page.tsx (a Server Component)
// and passed in as children, so sections that do not need browser APIs stay
// static and ship no JavaScript.
//
// Rebuilt 2026-08-25. The previous version rendered the site Footer INSIDE
// <main>, and page.tsx then rendered six more sections after it, so roughly a
// third of the page sat below the footer.

import { useEffect } from "react";

export default function LiverpoolPage({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Perf (2026-09-26): Lenis only smooths wheel scrolling; touch scrolling is
    // native either way. On phones and tablets it did nothing visible but still
    // downloaded Lenis and ScrollTrigger at hydration and ran a
    // requestAnimationFrame loop for the life of the page. It now starts only
    // on devices with a fine pointer that can hover (mouse or trackpad).
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

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
    <main id="main-content" className="bg-fj-cream">
      {children}
    </main>
  );
}
