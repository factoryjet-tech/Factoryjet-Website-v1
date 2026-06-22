"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";


const STATS = [
  { label: "Greater Manchester GVA", value: "£100B" },
  { label: "Tech sector annual output", value: "£30B+" },
  { label: "Digital ecosystem value", value: "£5B" },
  { label: "AI Cities Index rank", value: "#1" },
  { label: "Gigabit broadband coverage", value: "94%" },
  { label: "New companies registered (2024)", value: "13,202" },
];

const PARAGRAPHS = [
  "Manchester isn't just the second city — it's becoming the first choice for tech businesses that need proximity to talent, infrastructure, and capital without London's cost burden. The city topped the SAS AI Cities Index in both 2024 and 2025, ranking first nationally for AI job opportunities, innovation funding, and business activity. Neighbouring Salford rose to fifth in the same index, confirming the wider city-region's dominance.",
  "The numbers tell the story: Greater Manchester's tech sector generates over £30 billion annually. Research from Barclays Eagle Labs confirms that Manchester benefits economically from its tech businesses more than any other UK city outside London. A study from Capital Enterprise shows that decision-makers at UK tech firms consider Manchester the UK's top destination for starting a new tech business.",
  "Manchester's population has grown from 422,000 in 2000 to nearly 600,000 today, with forecasts pushing past 630,000 by the end of 2026. The city centre alone is projected to reach 100,000 residents. This growth is being absorbed around the core — Ancoats, the Northern Quarter, Salford Quays — exactly where businesses need high-converting websites to capture an audience that is young, digitally native, and spending.",
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

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // H2 → paragraphs → stats all in one timeline, no extra ScrollTrigger observers
      tl.from(headingRef.current, { y: 40, autoAlpha: 0, duration: 0.7, ease: "power3.out" })
        .from(
          parasRef.current ? parasRef.current.querySelectorAll(".body-para") : [],
          { y: 25, autoAlpha: 0, duration: 0.6, stagger: 0.12, ease: "power3.out" },
          "-=0.4"
        )
        .from(
          statsRef.current ? statsRef.current.querySelectorAll(".stat-row") : [],
          { x: 20, autoAlpha: 0, duration: 0.5, stagger: 0.08, ease: "power3.out" },
          "-=0.3"
        );
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
        src="/images/manchester/northern-quarter.webp"
        alt="Manchester Northern Quarter creative district"
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
          Manchester Market Context
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
          Manchester&apos;s Digital Economy Is Growing Faster Than Any UK City
          Outside London. Your Website Needs to Keep Up.
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
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.10)",
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
