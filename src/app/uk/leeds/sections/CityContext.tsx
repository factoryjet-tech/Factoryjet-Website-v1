"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";


const STATS = [
  { label: "Greater Leeds GVA", value: "£65B+" },
  { label: "Tech sector annual output", value: "£30B+" },
  { label: "SMEs driving local economy", value: "38,000" },
  { label: "HSBC UK jobs relocated", value: "2,500" },
  { label: "Digital growth YoY", value: "18%" },
  { label: "Tech jobs in Leeds", value: "12,000+" },
];

const PARAGRAPHS = [
  "Leeds is the economic engine of West Yorkshire and the largest financial centre in the UK outside London. With HSBC relocating its UK headquarters to the city centre — bringing 2,500 financial services jobs — and Channel 4's national HQ driving a creative and media boom, Leeds is experiencing a digital transformation unlike anywhere else in Northern England. The city's 38,000 small and medium businesses span financial services, legal, fashion, retail, healthcare, manufacturing, and the rapidly expanding digital and tech sector, which now accounts for over 12,000 jobs and is growing at 18% year-over-year.",
  "Yet the majority of Leeds businesses still rely on local web design agencies charging £4,500–£8,000 for standard websites and £1,200 per month for SEO services that ignore the most significant shift in search behaviour since mobile. In 2026, 54% of UK businesses are actively using AI, Google AI Overviews appear in 42% of UK searches, ChatGPT had 1.8 billion UK visits in the first eight months of 2025, and Perplexity AI processes 780 million queries every month.",
  "That is exactly what FactoryJet builds for. We are not another web design agency in Leeds — we are an AI-native digital partner that combines world-class web development, e-commerce expertise, custom AI agents, and generative engine optimisation into a single, cohesive growth engine for your business.",
];

export default function CityContext() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const parasRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      // H2 reveal
      gsap.from(headingRef.current, {
        y: 50,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Body paragraphs stagger
      if (parasRef.current) {
        gsap.from(parasRef.current.querySelectorAll(".body-para"), {
          y: 30,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.15,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      // Stat rows stagger from right
      if (statsRef.current) {
        gsap.from(statsRef.current.querySelectorAll(".stat-row"), {
          x: 30,
          autoAlpha: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="city-context"
      style={{ backgroundColor: "#0a0f1c", padding: "128px 0", overflow: "hidden", position: "relative" }}
    >
      {/* ── Layer 0: Background image ───────────────────────────────────── */}
      <Image
        src="/images/leeds/northern-quarter.webp"
        alt="Leeds Victoria Quarter shopping arcade"
        fill
        priority={false}
        quality={75}
        className="object-cover object-center"
        style={{ zIndex: 0 }}
      />

      {/* ── Layer 1a: Mobile solid overlay (hides below lg breakpoint) ──── */}
      <div
        className="absolute inset-0 pointer-events-none lg:hidden"
        style={{ zIndex: 1, backgroundColor: "rgba(10,15,28,0.88)" }}
        aria-hidden="true"
      />

      {/* ── Layer 1b: Desktop left-heavy gradient (lg+) ─────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block bg-gradient-to-r from-[#0a0f1c]/90 via-[#0a0f1c]/75 to-[#0a0f1c]/40"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      />

      {/* ── Layer 10: Content ───────────────────────────────────────────── */}
      <div
        className="relative mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "1400px", zIndex: 10 }}
      >
        {/* Section label */}
        <p
          className="font-semibold uppercase"
          style={{
            color: "#FF6B35",
            fontSize: "13px",
            letterSpacing: "0.15em",
            marginBottom: "24px",
          }}
        >
          LEEDS MARKET CONTEXT
        </p>

        {/* H2 */}
        <h2
          ref={headingRef}
          className="font-clash"
          style={{
            fontSize: "clamp(2rem, 1.7rem + 1.3vw, 3rem)",
            lineHeight: 1.15,
            color: "#ffffff",
            maxWidth: "700px",
            marginBottom: "40px",
          }}
        >
          Why Leeds Businesses Need a Smarter Digital Partner in 2026
        </h2>

        {/* 60 / 40 split */}
        <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-12 lg:gap-16 items-start">

          {/* LEFT: body text */}
          <div ref={parasRef} className="flex flex-col" style={{ gap: "24px" }}>
            {PARAGRAPHS.map((para, i) => (
              <p
                key={i}
                className="body-para"
                style={{
                  fontSize: "17px",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.90)",
                  maxWidth: "65ch",
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* RIGHT: sticky stat sidebar — sticky on desktop only */}
          <div
            ref={statsRef}
            className="flex flex-col lg:sticky lg:top-[120px]"
            style={{ gap: "12px" }}
          >
            {STATS.map(({ label, value }) => (
              <div
                key={label}
                className="stat-row flex items-center justify-between rounded-lg"
                style={{
                  padding: "16px 20px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span
                  style={{ fontSize: "15px", color: "rgba(255,255,255,0.60)" }}
                >
                  {label}
                </span>
                <span
                  className="font-clash font-bold"
                  style={{ fontSize: "1.5rem", color: "#ffffff" }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
