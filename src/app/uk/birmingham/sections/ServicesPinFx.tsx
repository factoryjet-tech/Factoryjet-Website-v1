"use client";

import { useEffect } from "react";

// Desktop-only pinned horizontal scroll for ./Services.tsx (/uk/birmingham).
// Same code as the shared UK island (src/app/uk/sections/ServicesPinFx.tsx),
// only the dot colours differ: Birmingham's track is light, so the active dot
// is #B23E13 and idle dots are #D9D9D2, exactly what its old useGSAP version set.
//
// Services.tsx is a server component; this island renders nothing and wires the
// pin onto the server-rendered markup through data attributes. GSAP is loaded
// with a dynamic import ONLY when the viewport is 1024px or wider, so phones
// (where the panels simply stack) never download, parse or run GSAP for it.
// The timeline, dwell, dots and image scale are the same as the previous
// in-component useGSAP version.
export default function ServicesPinFx({
  sectionId,
  names,
}: {
  sectionId: string;
  names: string[];
}) {
  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const mq = window.matchMedia("(min-width: 1024px)");
    let cleanup: (() => void) | undefined;
    let cancelled = false;
    let loading = false;

    const setup = async () => {
      if (!mq.matches || cleanup || loading) return;
      loading = true;
      const { gsap, ScrollTrigger } = await import("@/lib/gsap");
      loading = false;
      if (cancelled || !mq.matches || cleanup) return;

      const pin = section.querySelector<HTMLElement>("[data-services-pin]");
      const track = section.querySelector<HTMLElement>("[data-services-track]");
      const dotsWrap = section.querySelector<HTMLElement>("[data-services-dots]");
      const activeName = section.querySelector<HTMLElement>(
        "[data-services-active]"
      );
      if (!pin || !track) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const ctx = gsap.context(() => {
        const panels = track.querySelectorAll<HTMLElement>("[data-panel]");
        const panelCount = panels.length;
        if (!panelCount) return;

        // xPercent from 0 to -((n-1)/n * 100) slides the track left by (n-1)
        // viewports (the track is n x 100vw wide).
        const xTarget = -((panelCount - 1) / panelCount) * 100;

        // One viewport of scroll per panel plus one trailing "dwell" viewport
        // parked on the last panel so it can be read before the section unpins.
        const dwellUnits = 1;
        const totalUnits = panelCount + dwellUnits;
        const moveFraction = panelCount / totalUnits;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pin,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            end: `+=${totalUnits * 100}%`,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const mapped = Math.min(1, self.progress / moveFraction);
              const idx = Math.min(
                panelCount - 1,
                Math.max(0, Math.round(mapped * (panelCount - 1)))
              );
              const dots =
                dotsWrap?.querySelectorAll<HTMLSpanElement>("[data-dot]");
              dots?.forEach((d, i) => {
                d.dataset.active = i === idx ? "true" : "false";
                d.style.backgroundColor =
                  i === idx ? "#B23E13" : "#D9D9D2";
                d.style.transform = i === idx ? "scale(1.25)" : "scale(1)";
              });
              if (activeName && names[idx]) {
                activeName.textContent = names[idx];
              }
            },
          },
        });
        tl.to(track, { xPercent: xTarget, ease: "none", duration: panelCount });
        tl.to({}, { duration: dwellUnits });

        // Image scale 0.9 to 1 as each panel enters horizontally.
        if (!prefersReduced) {
          panels.forEach((panel) => {
            const img = panel.querySelector<HTMLElement>("[data-panel-image]");
            if (!img) return;
            gsap.fromTo(
              img,
              { scale: 0.9, autoAlpha: 0.6 },
              {
                scale: 1,
                autoAlpha: 1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: panel,
                  containerAnimation: tl,
                  start: "left 80%",
                  end: "left 40%",
                  scrub: true,
                },
              }
            );
          });
        }
      }, section);

      // The pin adds scroll distance, so triggers created earlier or later
      // (e.g. the TechStack parallax further down) need fresh positions.
      ScrollTrigger.refresh();
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
  }, [sectionId, names]);

  return null;
}
