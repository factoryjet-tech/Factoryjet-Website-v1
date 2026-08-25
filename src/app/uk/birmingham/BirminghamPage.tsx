"use client";

import { useEffect } from "react";

/**
 * Client shell for /uk/birmingham. It owns two things only: the <main> landmark and the
 * Lenis smooth-scroll instance.
 *
 * It used to import and render every section itself, which forced all of them into the
 * client bundle and meant the sections after it in page.tsx rendered BELOW the footer.
 * Now the server component composes the page and passes it in as children, so the static
 * sections stay server-rendered and the running order is visible in one place.
 */
export default function BirminghamPage({
  children,
}: {
  children: React.ReactNode;
}) {
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
      // Without this guard we would create a Lenis instance and a rAF loop that the
      // cleanup above has already finished trying to tear down.
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
