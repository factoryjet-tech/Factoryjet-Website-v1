"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

// ── Grain texture ─────────────────────────────────────────────────────────────
// SVG feTurbulence as a data URI — static CSS texture, zero animation.
const GRAIN_DATA_URI =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")";

// ── Hero ──────────────────────────────────────────────────────────────────────
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef   = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);
  const trustRef   = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      gsap.from(labelRef.current, {
        y: 20, autoAlpha: 0, duration: 0.5, ease: "power3.out", delay: 0,
      });
      gsap.from(headingRef.current, {
        y: 30, autoAlpha: 0, duration: 0.8, ease: "power3.out", delay: 0.15,
      });
      gsap.from(subheadRef.current, {
        y: 20, autoAlpha: 0, duration: 0.6, ease: "power3.out", delay: 0.4,
      });
      gsap.from(ctaRef.current, {
        y: 15, autoAlpha: 0, duration: 0.5, ease: "power3.out", delay: 0.6,
      });
      gsap.from(trustRef.current, {
        y: 15, autoAlpha: 0, duration: 0.5, ease: "power3.out", delay: 0.8,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen flex items-center justify-center"
      style={{ backgroundColor: "#111", overflow: "hidden" }}
    >
      {/* ── Layer 0: Background image ───────────────────────────────────── */}
      <Image
        src="/images/leeds/hero-people.jpg"
        alt="Leeds business professionals"
        fill
        priority
        quality={75}
        className="object-cover object-center"
        style={{ zIndex: 0 }}
      />

      {/* ── Layer 1: Warm dark gradient overlay ────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/65 via-black/55 to-black/75"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      />

      {/* ── Layer 2: Static grain texture ──────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          backgroundImage: GRAIN_DATA_URI,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          opacity: 0.03,
          mixBlendMode: "overlay",
        }}
        aria-hidden="true"
      />

      {/* ── Layer 10: Centered content ──────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center">

        {/* 1. Eyebrow label */}
        <p
          ref={labelRef}
          className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
          style={{ color: "#FF6B35" }}
        >
          Web Design Leeds
        </p>

        {/* 2. H1 */}
        <h1
          ref={headingRef}
          className="font-clash text-white font-semibold leading-tight mb-4 text-3xl md:text-4xl lg:text-5xl"
        >
          Web Design, E-Commerce & AI Solutions for Leeds Businesses — Built by FactoryJet
        </h1>

        {/* 3. Subheading */}
        <p
          ref={subheadRef}
          className="text-sm md:text-base text-white/70 max-w-xl mx-auto mb-6 leading-relaxed"
        >
          AI-native web design, e-commerce, AI agents & AI SEO for Leeds businesses — enterprise-grade quality at 50–60% below local agency rates. Delivered in 2–4 weeks, not 2–4 months.
        </p>

        {/* 4. CTA buttons */}
        <div
          ref={ctaRef}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <a
            href="#final-cta"
            className="px-6 py-3 rounded-lg text-white text-base font-semibold transition-colors duration-200 focus-visible:outline-offset-2"
            style={{ backgroundColor: "#FF6B35" }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e55a2b")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#FF6B35")}
          >
            Get Your Free Leeds Digital Audit →
          </a>
          <a
            href="#case-study"
            className="px-6 py-3 rounded-lg text-white text-base font-semibold border border-white/20 backdrop-blur-sm transition-colors duration-200 hover:bg-white/20"
            style={{ backgroundColor: "#1e293b" }}
          >
            View Our Work
          </a>
          <a
            href="https://wa.me/13391702199"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg text-white text-base font-semibold border border-white/20 backdrop-blur-sm transition-colors duration-200 hover:bg-white/20"
            style={{ backgroundColor: "#1e293b" }}
          >
            WhatsApp Us Now
          </a>
        </div>

        {/* 5. Trust pills */}
        <div
          ref={trustRef}
          className="flex flex-wrap justify-center gap-6 mt-4"
        >
          {[
            "Serving businesses across Leeds, West Yorkshire & the UK",
            "500+ projects delivered",
            "AI-native from day one",
            "Lighthouse Performance 92+ on every build",
            "Trusted by SMBs across the US, UK, UAE & India",
          ].map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-2 text-xs text-white/60"
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: "#10B981" }}
                aria-hidden="true"
              />
              {badge}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
