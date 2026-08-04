"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";


const STEPS = [
  {
    days: "DAYS 1–2",
    title: "Discovery & Conversion Mapping",
    description:
      "We audit your current Manchester digital presence, map your customer journey from search query to conversion, identify keyword gaps against local competitors, and define the technical architecture. You get a documented brief covering target keywords, page structure, schema requirements, and conversion goals.",
  },
  {
    days: "DAYS 3–5",
    title: "Content Architecture & SEO Engineering",
    description:
      "Every page is structured for both human readers and AI systems. We write conversion copy, define H1–H6 hierarchy, build FAQ schema content, and map internal linking. All content is optimised for \"web design Manchester\" and 20+ secondary keywords before a single pixel is designed.",
  },
  {
    days: "DAYS 6–10",
    title: "UI/UX Design & Animation Choreography",
    description:
      "Design in code, not Figma. Every section is built as a React component with responsive breakpoints, GSAP scroll animations, and Lenis smooth scroll. You see the actual website in a staging environment, not a static mockup that looks nothing like the final product.",
  },
  {
    days: "DAYS 11–18",
    title: "Development, Testing & Performance Tuning",
    description:
      "Full build in Next.js 15 with Tailwind CSS 4. Schema injection, sitemap generation, robots.txt configuration, Open Graph meta, and Core Web Vitals optimisation. We test across Chrome, Safari, Firefox, Edge, iOS Safari, and Android Chrome. Every page must score Lighthouse 90+ before deployment.",
  },
  {
    days: "DAY 19+",
    title: "Launch, Indexing & 90-Day Support",
    description:
      "Deploy to your domain, submit to Google Search Console, configure analytics, and begin monitoring indexation. You get 90 days of post-launch support including bug fixes, content updates, and performance monitoring, included, not invoiced separately.",
  },
];

const CARD_STYLE: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "12px",
  padding: "32px",
  maxWidth: "480px",
  width: "100%",
};

function StepNode({ num }: { num: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-full flex-shrink-0"
      style={{
        width: "64px",
        height: "64px",
        background: "rgba(0,82,204,0.2)",
        border: "2px solid #F05A28",
        zIndex: 10,
        position: "relative",
      }}
      aria-hidden="true"
    >
      <span
        className="font-clash"
        style={{ fontSize: "28px", color: "#F05A28", lineHeight: 1 }}
      >
        {num}
      </span>
    </div>
  );
}

function CardBody({ step }: { step: (typeof STEPS)[0] }) {
  return (
    <>
      <p
        className="font-semibold uppercase"
        style={{
          color: "#FF6B35",
          fontSize: "13px",
          letterSpacing: "0.08em",
        }}
      >
        {step.days}
      </p>
      <h3
        className="font-clash text-white"
        style={{ fontSize: "22px", marginTop: "8px", marginBottom: "12px" }}
      >
        {step.title}
      </h3>
      <p
        style={{
          fontSize: "15px",
          color: "rgba(255,255,255,0.75)",
          lineHeight: 1.65,
        }}
      >
        {step.description}
      </p>
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

      // ── Desktop: Z-pattern, x-direction reveals ─────────────────────
      mm.add("(min-width: 768px)", () => {
        animateLine(desktopLineRef.current);

        stepRefs.current.forEach((stepEl, i) => {
          if (!stepEl) return;
          const isLeft = i % 2 === 0;
          const card = stepEl.querySelector(
            isLeft ? ".desktop-left-card" : ".desktop-right-card"
          );
          if (!card) return;

          gsap.from(card, {
            x: isLeft ? -20 : 20,
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

      // ── Mobile: left-line, y-direction reveals ───────────────────────
      mm.add("(max-width: 767px)", () => {
        animateLine(mobileLineRef.current);

        stepRefs.current.forEach((stepEl) => {
          if (!stepEl) return;
          const card = stepEl.querySelector(".mobile-card");
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
      style={{ background: "#0a0f1c", padding: "160px 0", overflow: "hidden" }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1200px" }}>

        {/* ── Header ─────────────────────────────────────────────────── */}
        <p
          className="font-semibold uppercase"
          style={{
            color: "#FF6B35",
            fontSize: "13px",
            letterSpacing: "0.15em",
            marginBottom: "16px",
          }}
        >
          How We Work
        </p>

        <h2
          className="font-clash text-white"
          style={{
            fontSize: "clamp(2rem, 1.7rem + 1.3vw, 3rem)",
            lineHeight: 1.15,
            maxWidth: "700px",
            marginBottom: "64px",
          }}
        >
          From Brief to Live in Manchester: Our 5-Step Process
        </h2>

        {/* ── Timeline ───────────────────────────────────────────────── */}
        <div className="relative">

          {/* Vertical line, desktop center */}
          <div
            ref={desktopLineRef}
            className="hidden md:block absolute inset-y-0 pointer-events-none"
            style={{
              left: "calc(50% - 1px)",
              width: "2px",
              background: "rgba(255,255,255,0.1)",
              transformOrigin: "top",
            }}
          />

          {/* Vertical line, mobile left (centered on 64px node) */}
          <div
            ref={mobileLineRef}
            className="md:hidden absolute inset-y-0 pointer-events-none"
            style={{
              left: "31px",
              width: "2px",
              background: "rgba(255,255,255,0.1)",
              transformOrigin: "top",
            }}
          />

          {/* Steps */}
          {STEPS.map((step, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div
                key={i}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className="relative mb-10 md:mb-16"
              >
                {/* ── MOBILE layout ─────────────────────────────────── */}
                <div className="flex items-start gap-5 md:hidden">
                  <StepNode num={i + 1} />
                  <div className="mobile-card flex-1" style={CARD_STYLE}>
                    <CardBody step={step} />
                  </div>
                </div>

                {/* ── DESKTOP layout (Z-pattern) ────────────────────── */}
                <div className="hidden md:flex items-center">
                  {/* Left zone */}
                  <div className="flex-1 flex justify-end pr-10">
                    {isLeft && (
                      <div className="desktop-left-card" style={CARD_STYLE}>
                        <CardBody step={step} />
                      </div>
                    )}
                  </div>

                  {/* Node */}
                  <StepNode num={i + 1} />

                  {/* Right zone */}
                  <div className="flex-1 pl-10">
                    {!isLeft && (
                      <div className="desktop-right-card" style={CARD_STYLE}>
                        <CardBody step={step} />
                      </div>
                    )}
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
