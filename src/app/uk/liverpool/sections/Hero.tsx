"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useContactModal } from "@/context/ContactModalContext";
import { trackButtonClick, trackCTAClick } from "@/utils/gtm";

// MeshGradient is a WebGL canvas — skip SSR entirely.
const MeshGradient = dynamic(() => import("@/components/MeshGradient"), {
  ssr: false,
});

// Inline SVG noise for grain pseudo-element. Kept tiny — ~0.3KB.
const GRAIN_DATA_URI =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")";

// ── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const labelRuleRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);
  const skylineRef = useRef<SVGGElement>(null);
  const { openModal: openContactModal } = useContactModal();
  const openModal = () => openContactModal("uk", "default");

  useGSAP(
    () => {
      const prefersReduced =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      // 1. Eyebrow label rule draws in from centre
      gsap.fromTo(
        labelRuleRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          delay: 0.5,
          ease: "power2.out",
          transformOrigin: "50% 50%",
        }
      );
      gsap.from(labelRef.current, {
        y: 10,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power3.out",
      });

      // 2. H1 — word-by-word stagger.
      const h1 = headingRef.current;
      if (h1) {
        const text = h1.textContent ?? "";
        h1.innerHTML = text
          .split(" ")
          .map(
            (w) =>
              `<span class="liv-word" style="display:inline-block;overflow:hidden;"><span class="liv-word-inner" style="display:inline-block;will-change:transform,opacity;">${w}&nbsp;</span></span>`
          )
          .join("");
        const inners =
          h1.querySelectorAll<HTMLSpanElement>(".liv-word-inner");
        gsap.from(inners, {
          yPercent: 110,
          autoAlpha: 0,
          duration: 1.1,
          stagger: 0.035,
          ease: "expo.out",
          delay: 0.25,
        });
      }

      // 3. Subhead
      gsap.from(subheadRef.current, {
        y: 24,
        autoAlpha: 0,
        duration: 0.8,
        delay: 0.9,
        ease: "power3.out",
      });

      // 4. CTAs
      const ctaChildren = ctaRef.current
        ? Array.from(ctaRef.current.children)
        : [];
      if (ctaChildren.length) {
        gsap.fromTo(
          ctaChildren,
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            delay: 1.15,
            ease: "power3.out",
            clearProps: "transform,opacity",
          }
        );
      }

      // 5. Trust bar
      gsap.from(trustRef.current, {
        y: 14,
        autoAlpha: 0,
        duration: 0.6,
        delay: 1.45,
        ease: "power3.out",
      });

      // 6. Skyline rise
      const buildings = skylineRef.current?.children;
      if (buildings && buildings.length) {
        gsap.from(buildings, {
          y: 20,
          autoAlpha: 0,
          duration: 0.9,
          stagger: 0.05,
          ease: "power3.out",
          delay: 0.2,
        });
      }

      // 7. Scroll cue — fades out as user scrolls past 100vh
      gsap.to(scrollCueRef.current, {
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="FactoryJet Liverpool, hero"
      className="relative flex min-h-screen w-full items-start justify-center overflow-hidden"
      style={{ backgroundColor: "#0A0F1C", maxWidth: "100vw" }}
    >
      <style>{`
        @keyframes liv-scroll-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>

      {/* Layer 1: WebGL mesh gradient (lazy, client only) */}
      <MeshGradient />

      {/* Layer 1b, Hero image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ zIndex: 0, opacity: 0.4, mixBlendMode: "overlay" }}
      >
        <Image
          src="/images/uk/liverpool/hero-liverpool.webp"
          alt="Liverpool waterfront and Albert Dock, digital agency backdrop"
          fill
          sizes="100vw"
          priority
          fetchPriority="high"
          loading="eager"
          quality={82}
          className="object-cover"
        />
      </div>

      {/* Layer 2, Liverpool skyline SVG: Liver Building + Albert Dock cranes */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1600 200"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ height: 200, zIndex: 1, color: "rgba(255,255,255,0.05)" }}
      >
        <g ref={skylineRef} fill="currentColor">
          {/* Left buildings, low rise waterfront */}
          <rect x="0" y="150" width="50" height="50" />
          <rect x="52" y="140" width="35" height="60" />
          <rect x="90" y="155" width="45" height="45" />

          {/* Liver Building, left tower with peaked top and clock face */}
          <rect x="145" y="60" width="52" height="140" />
          <polygon points="145,60 171,30 197,60" />
          <circle cx="171" cy="52" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="163" y="25" width="16" height="10" />

          {/* Liver Building, right tower */}
          <rect x="210" y="65" width="50" height="135" />
          <polygon points="210,65 235,35 260,65" />
          <circle cx="235" cy="57" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="227" y="30" width="16" height="10" />

          {/* Cunard Building */}
          <rect x="270" y="85" width="65" height="115" />
          <rect x="275" y="78" width="55" height="12" />

          {/* Port of Liverpool Building dome */}
          <rect x="345" y="90" width="60" height="110" />
          <ellipse cx="375" cy="90" rx="30" ry="18" />

          {/* Mid waterfront buildings */}
          <rect x="415" y="120" width="40" height="80" />
          <rect x="458" y="130" width="55" height="70" />
          <rect x="516" y="110" width="38" height="90" />

          {/* Albert Dock cranes, simple L-shaped forms */}
          {/* Crane 1 */}
          <rect x="565" y="100" width="8" height="100" />
          <rect x="540" y="100" width="60" height="8" />
          <rect x="540" y="100" width="8" height="20" />

          {/* Crane 2 */}
          <rect x="650" y="90" width="8" height="110" />
          <rect x="622" y="90" width="62" height="8" />
          <rect x="622" y="90" width="8" height="20" />

          {/* Crane 3 */}
          <rect x="740" y="95" width="8" height="105" />
          <rect x="712" y="95" width="62" height="8" />
          <rect x="712" y="95" width="8" height="20" />

          {/* More buildings */}
          <rect x="790" y="125" width="50" height="75" />
          <rect x="843" y="115" width="42" height="85" />
          <rect x="890" y="100" width="36" height="100" />

          {/* Crane 4 */}
          <rect x="940" y="85" width="8" height="115" />
          <rect x="912" y="85" width="62" height="8" />
          <rect x="912" y="85" width="8" height="20" />

          {/* Background buildings */}
          <rect x="990" y="120" width="55" height="80" />
          <rect x="1050" y="105" width="40" height="95" />
          <rect x="1095" y="130" width="60" height="70" />
          <rect x="1160" y="115" width="38" height="85" />

          {/* Crane 5 */}
          <rect x="1215" y="88" width="8" height="112" />
          <rect x="1188" y="88" width="62" height="8" />
          <rect x="1188" y="88" width="8" height="20" />

          {/* Right side buildings */}
          <rect x="1265" y="125" width="55" height="75" />
          <rect x="1325" y="110" width="44" height="90" />
          <rect x="1374" y="140" width="60" height="60" />
          <rect x="1440" y="120" width="50" height="80" />
          <rect x="1496" y="135" width="55" height="65" />
          <rect x="1553" y="148" width="47" height="52" />
        </g>
      </svg>

      {/* Layer 3, Grain */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          backgroundImage: GRAIN_DATA_URI,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          opacity: 0.03,
          mixBlendMode: "overlay",
        }}
      />

      {/* Stat watermarks, absolute atmospheric layer, z-index:0, never adds height */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden select-none lg:flex items-end justify-center"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: "50%",
          overflow: "hidden",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            color: "rgba(255,255,255,0.08)",
            fontFamily: "var(--font-clash), 'Clash Display', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(32px, 3.5vw, 48px)",
            letterSpacing: "-0.03em",
            paddingBottom: "12vh",
            display: "flex",
            flexWrap: "wrap",
            gap: "0 24px",
            justifyContent: "center",
          }}
        >
          <span>£43.3bn LCR GDP</span>
          <span>·</span>
          <span>14,000 businesses</span>
          <span>·</span>
          <span>£5.5bn Liverpool Waters</span>
          <span>·</span>
          <span>LCR Freeport</span>
        </div>
      </div>

      {/* Watermark "LIV", desktop only */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute hidden select-none lg:block font-clash"
        style={{
          right: "-5%",
          bottom: "10%",
          fontSize: 280,
          lineHeight: 0.8,
          fontWeight: 700,
          color: "rgba(255,255,255,0.02)",
          letterSpacing: "-0.04em",
          zIndex: 3,
        }}
      >
        LIV
      </span>

      {/* Layer 4, Content */}
      <div
        className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-6 pt-[18vh] pb-24 text-center sm:px-8"
        style={{ zIndex: 10 }}
      >
        {/* Eyebrow */}
        <p
          ref={labelRef}
          className="relative inline-flex flex-col items-center pb-2"
          style={{
            color: "#FF6B35",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 13,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Liverpool&rsquo;s AI-Native Digital Agency
          <span
            ref={labelRuleRef}
            aria-hidden="true"
            className="mt-2 block h-px w-24"
            style={{ backgroundColor: "#FF6B35" }}
          />
        </p>

        {/* H1 */}
        <h1
          ref={headingRef}
          className="font-clash mt-6 text-white"
          style={{
            fontWeight: 700,
            fontSize: "clamp(28px, 5vw, 56px)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            maxWidth: 1100,
            textShadow: "0 0 30px rgba(255,107,53,0.08)",
          }}
        >
          Liverpool&rsquo;s AI-Native Web Design Agency.
        </h1>

        {/* Sub-headline */}
        <div ref={subheadRef} className="mt-4">
          <p
            style={{
              maxWidth: 760,
              margin: "0 auto",
              color: "rgba(255,255,255,0.72)",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: "clamp(15px, 1.2vw, 17px)",
              lineHeight: 1.6,
            }}
          >
            From Albert Dock to the Baltic Triangle, we build websites, AI
            agents, and AI SEO systems that put Liverpool businesses ahead of
            the curve.
          </p>
          <p
            style={{
              maxWidth: 700,
              margin: "8px auto 0",
              color: "#FFFFFF",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: "clamp(15px, 1.3vw, 18px)",
              lineHeight: 1.45,
            }}
          >
            No committee. No bloat. No agency markup.
          </p>
        </div>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4"
        >
          <button
            type="button"
            onClick={() => {
              trackCTAClick("get_a_free_quote", "hero", "primary");
              trackButtonClick("get_a_free_quote", "hero");
              openModal();
            }}
            className="w-full sm:w-auto rounded-lg px-7 py-3.5 text-[15px] font-semibold text-white transition-transform duration-200 will-change-transform hover:-translate-y-0.5"
            style={{
              backgroundColor: "#B23E13",
              fontFamily: "var(--font-sans)",
              minHeight: 48,
            }}
          >
            Get a Free Quote
          </button>
          <a
            href="/portfolio"
            className="w-full sm:w-auto text-center rounded-lg border border-white/25 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-[#0A0F1C]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            View Our Work
          </a>
          <a
            href="tel:+919699977699"
            className="text-[14px] font-medium text-white/70 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Call Us ↓
          </a>
        </div>

        {/* Trust bar */}
        <div
          ref={trustRef}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[clamp(11px,1.2vw,13px)]"
          style={{
            color: "rgba(255,255,255,0.55)",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
          }}
        >
          {[
            "Lighthouse 95+",
            "Shopify Plus Partner",
            "AI-First Agency",
            "£11bn Pipeline City",
          ].map((item, i, arr) => (
            <span key={item} className="flex items-center gap-x-6">
              <span>{item}</span>
              {i < arr.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden h-3 w-px md:inline-block"
                  style={{ backgroundColor: "#333" }}
                />
              )}
            </span>
          ))}
        </div>

      </div>

      {/* Scroll cue */}
      <div
        ref={scrollCueRef}
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          bottom: 16,
          zIndex: 4,
          animation: "liv-scroll-bounce 2s ease-in-out infinite",
          color: "#FF6B35",
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
