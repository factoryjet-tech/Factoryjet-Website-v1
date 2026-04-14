"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

gsap.registerPlugin(ScrollTrigger);

const BODY_PARAGRAPHS = [
  "Google still drives the majority of web traffic. But in 2026, a rapidly growing share of business discovery happens through AI systems: ChatGPT Search, Perplexity, Google AI Overviews, and Claude. When a Manchester business owner asks Perplexity \"who's the best web design agency in Manchester?\", the answer isn't pulled from Google rankings — it's synthesised from structured data, schema markup, E-E-A-T signals, and content quality.",
  "Most Manchester web agencies have no strategy for this. Their websites are invisible to AI crawlers because they use JavaScript-heavy frameworks without server-side rendering, hide content behind accordions and tabs, lack structured data, and have no schema markup beyond basic meta tags.",
  "FactoryJet builds every Manchester website for dual visibility: Google organic search AND AI-powered discovery. This means full LocalBusiness and Service schema on every page, FAQPage structured data targeting \"People Also Ask\" boxes, expanded visible content (never hidden in accordions — AI crawlers can't execute JavaScript), BreadcrumbList and HowTo schema for rich result eligibility, and server-side rendered Next.js pages that AI crawlers can parse in milliseconds.",
];

const INFO_CARDS = [
  {
    badge: "GEO",
    title: "Generative Engine Optimisation",
    description:
      "Full LocalBusiness and Service schema on every page. Your business gets cited when AI systems answer \"who does web design in Manchester?\"",
  },
  {
    badge: "AEO",
    title: "Answer Engine Optimisation",
    description:
      "FAQPage structured data targeting \"People Also Ask\" boxes. All content fully visible and expanded — never hidden in JS toggles.",
  },
  {
    badge: "SSR",
    title: "Server-Side Rendering",
    description:
      "Next.js pages rendered on the server. AI crawlers parse your content in milliseconds — zero JavaScript execution required.",
  },
];

export default function AIVisibility() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const trigger = {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      };

      // Left column fades in
      gsap.from(leftRef.current, {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: trigger,
      });

      // Right cards stagger from right
      if (cardsRef.current) {
        gsap.from(cardsRef.current.querySelectorAll(".info-card"), {
          x: 30,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: trigger,
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="ai-visibility"
      style={{ background: "#111827", padding: "128px 0 96px", overflow: "hidden" }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1400px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-start">

          {/* ── LEFT: body text ──────────────────────────────────────────── */}
          <div ref={leftRef}>
            <p
              className="font-semibold uppercase"
              style={{
                color: "#FF6B35",
                fontSize: "13px",
                letterSpacing: "0.15em",
                marginBottom: "16px",
              }}
            >
              AI Search Visibility
            </p>

            <h2
              className="font-clash text-white"
              style={{
                fontSize: "clamp(1.8rem, 1.5rem + 1.2vw, 2.6rem)",
                lineHeight: 1.2,
                marginBottom: "32px",
              }}
            >
              Why AI Search Visibility Is the Biggest Opportunity Manchester
              Businesses Are Missing
            </h2>

            <div className="flex flex-col" style={{ gap: "20px" }}>
              {BODY_PARAGRAPHS.map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "17px",
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: 1.7,
                    maxWidth: "55ch",
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

          </div>

          {/* ── RIGHT: info cards ────────────────────────────────────────── */}
          <div
            ref={cardsRef}
            className="flex flex-col"
            style={{ gap: "16px" }}
          >
            {INFO_CARDS.map(({ badge, title, description }) => (
              <div
                key={badge}
                className="info-card rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "24px",
                }}
              >
                {/* Badge */}
                <span
                  className="font-bold inline-block rounded-md"
                  style={{
                    background: "#0052CC",
                    color: "white",
                    fontSize: "12px",
                    padding: "4px 8px",
                    letterSpacing: "0.05em",
                  }}
                >
                  {badge}
                </span>

                {/* Title */}
                <h3
                  className="font-clash text-white"
                  style={{ fontSize: "20px", marginTop: "12px", marginBottom: "8px" }}
                >
                  {title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.65,
                  }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
