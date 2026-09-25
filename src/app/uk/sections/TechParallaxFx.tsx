"use client";

import { useEffect } from "react";

// Desktop-only scroll parallax for the ./TechStack.tsx badges.
//
// TechStack.tsx is a server component; this island renders nothing. It loads
// GSAP with a dynamic import only at 1024px and wider and only without
// prefers-reduced-motion, exactly the conditions the old in-component useGSAP
// version ran under. Phones never download or run GSAP for it.
export default function TechParallaxFx({ sectionId }: { sectionId: string }) {
  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mq = window.matchMedia("(min-width: 1024px)");
    let cleanup: (() => void) | undefined;
    let cancelled = false;
    let loading = false;

    const setup = async () => {
      if (!mq.matches || cleanup || loading) return;
      loading = true;
      const { gsap } = await import("@/lib/gsap");
      loading = false;
      if (cancelled || !mq.matches || cleanup) return;

      const badges =
        section.querySelectorAll<HTMLElement>("[data-tech-badge]");
      if (!badges.length) return;

      const ctx = gsap.context(() => {
        badges.forEach((el) => {
          const amount = Number(el.getAttribute("data-parallax") ?? "0");
          gsap.fromTo(
            el,
            { y: -amount / 2 },
            {
              y: amount / 2,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              },
            }
          );
        });
      }, section);
      cleanup = () => ctx.revert();
    };

    const onChange = () => {
      if (mq.matches) {
        void setup();
      } else if (cleanup) {
        cleanup();
        cleanup = undefined;
      }
    };

    void setup();
    mq.addEventListener("change", onChange);
    return () => {
      cancelled = true;
      mq.removeEventListener("change", onChange);
      cleanup?.();
    };
  }, [sectionId]);

  return null;
}
