"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { STEPS, type ProcessStep } from "../process-steps";

/*
 * ProcessTimeline.
 *
 * Two changes on 2026-08-25.
 *
 * 1. One card per step, not two. The old build rendered a mobile card AND a
 *    desktop card for every step, so every word of this section appeared twice
 *    in the HTML. Crawlers saw 500 words of duplicated copy. The card now lives
 *    in a single DOM node and flex `order` moves it to the left on desktop.
 *
 * 2. Light ground. The page brand anchor allows one dark band and the closing
 *    CTA already spends it.
 *
 * The step copy itself lives in ../process-steps.ts, not here. layout.tsx builds
 * the HowTo JSON-LD from that same array, and a server component cannot read a
 * plain export out of a "use client" module. One array, two consumers, so the
 * schema cannot describe a process the page does not show.
 */

const CARD_STYLE: React.CSSProperties = {
  background: "#FFFFFF",
  border: "1px solid #D9D9D2",
  borderRadius: "16px",
  padding: "28px",
  maxWidth: "480px",
  width: "100%",
};

function StepNode({ num }: { num: number }) {
  return (
    <div
      className="flex flex-none items-center justify-center rounded-full"
      style={{
        width: "56px",
        height: "56px",
        background: "#FFFFFF",
        border: "2px solid #F05A28",
        zIndex: 10,
        position: "relative",
      }}
      aria-hidden="true"
    >
      <span
        className="font-fj-display"
        style={{ fontSize: "24px", color: "#B23E13", lineHeight: 1, fontWeight: 700 }}
      >
        {num}
      </span>
    </div>
  );
}

function CardBody({ step }: { step: ProcessStep }) {
  return (
    <>
      <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#B23E13]">
        {step.days}
      </p>
      <h3 className="mt-2 mb-3 font-fj-display text-xl font-bold text-fj-ink">{step.title}</h3>
      <p className="font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
        {step.description}
      </p>
      <ul className="mt-4 grid gap-y-1.5 font-fj-body text-sm text-fj-neutral-600">
        {step.deliverables.map((d) => (
          <li key={d} className="flex gap-2">
            <span
              aria-hidden="true"
              className="mt-[8px] h-1.5 w-1.5 flex-none rounded-full bg-[#F05A28]"
            />
            <span>{d}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const desktopLineRef = useRef<HTMLDivElement>(null);
  const mobileLineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const prefersReduced =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      function animateLine(lineEl: Element | null) {
        if (!lineEl) return;
        gsap.fromTo(
          lineEl,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 30%",
              scrub: 1,
            },
          }
        );
      }

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        animateLine(desktopLineRef.current);

        stepRefs.current.forEach((stepEl, i) => {
          if (!stepEl) return;
          const card = stepEl.querySelector(".step-card");
          if (!card) return;

          gsap.from(card, {
            x: i % 2 === 0 ? -20 : 20,
            autoAlpha: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: stepEl,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });
        });
      });

      mm.add("(max-width: 767px)", () => {
        animateLine(mobileLineRef.current);

        stepRefs.current.forEach((stepEl) => {
          if (!stepEl) return;
          const card = stepEl.querySelector(".step-card");
          if (!card) return;

          gsap.from(card, {
            y: 20,
            autoAlpha: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: stepEl,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="process-timeline"
      className="bg-fj-cream"
      style={{ padding: "96px 0", overflow: "hidden" }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1200px" }}>

        <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#B23E13]">
          How we work
        </p>

        <h2 className="mt-3 mb-14 max-w-3xl font-fj-display text-3xl font-bold leading-tight text-fj-ink md:text-4xl">
          From brief to live in Manchester: our 5-step process
        </h2>

        <div className="relative">

          {/* Vertical line, desktop centre */}
          <div
            ref={desktopLineRef}
            className="pointer-events-none absolute inset-y-0 hidden md:block"
            style={{
              left: "calc(50% - 1px)",
              width: "2px",
              background: "#D9D9D2",
              transformOrigin: "top",
            }}
          />

          {/* Vertical line, mobile left, centred on the 56px node */}
          <div
            ref={mobileLineRef}
            className="pointer-events-none absolute inset-y-0 md:hidden"
            style={{
              left: "27px",
              width: "2px",
              background: "#D9D9D2",
              transformOrigin: "top",
            }}
          />

          {STEPS.map((step, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div
                key={step.title}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className="relative mb-10 md:mb-14"
              >
                <div className="flex items-start gap-5 md:items-center md:gap-0">
                  {/* Empty half, desktop only. Order flips so the single card
                      can sit on either side without a second copy in the DOM. */}
                  <div
                    className={`hidden flex-1 md:block ${isLeft ? "md:order-3 md:pl-10" : "md:order-1 md:pr-10"}`}
                  />

                  <div className="md:order-2">
                    <StepNode num={i + 1} />
                  </div>

                  <div
                    className={`flex-1 ${
                      isLeft
                        ? "md:order-1 md:flex md:justify-end md:pr-10"
                        : "md:order-3 md:pl-10"
                    }`}
                  >
                    <div className="step-card" style={CARD_STYLE}>
                      <CardBody step={step} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
