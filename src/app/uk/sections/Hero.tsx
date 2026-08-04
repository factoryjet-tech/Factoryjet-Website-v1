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
  const openModal = () => openContactModal('uk', 'default');

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

      // 2. H1 — line-based stagger.
      const h1 = headingRef.current;
      if (h1) {
        // Wrap each word in a span.line-word for GSAP to stagger lines.
        // We split by words and then group into "lines" using getClientRects.
        const text = h1.textContent ?? "";
        h1.innerHTML = text
          .split(" ")
          .map(
            (w) =>
              `<span class="uk-word" style="display:inline-block;overflow:hidden;"><span class="uk-word-inner" style="display:inline-block;will-change:transform,opacity;">${w}&nbsp;</span></span>`
          )
          .join("");
        const inners = h1.querySelectorAll<HTMLSpanElement>(".uk-word-inner");
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

      // 4. CTAs — use fromTo so the final state is guaranteed even if the
      // tween is interrupted (dev HMR, fast refresh, StrictMode double-invoke).
      const ctaChildren = ctaRef.current
        ? Array.from(ctaRef.current.children)
        : [];
      if (ctaChildren.length) {
        // NOTE: opacity + transform only — no visibility toggle. This keeps
        // the animation fully compositor-driven (Lighthouse "non-composited
        // animations" audit flags autoAlpha because it writes `visibility`).
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
      aria-label="FactoryJet UK, hero"
      className="relative flex min-h-screen w-full items-start justify-center overflow-hidden"
      style={{ backgroundColor: "#0A0F1C", maxWidth: "100vw" }}
    >
      {/* Layer 1: WebGL mesh gradient (lazy, client only) */}
      <MeshGradient />

      {/* Layer 1b, Photographic hero image. Enhances the dark hero with
          warmth and texture without competing with text, low opacity,
          overlay blend mode, sits above the WebGL mesh but below the
          grain layer and content. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ zIndex: 0, opacity: 0.4, mixBlendMode: "overlay" }}
      >
        <Image
          src="/images/uk/hero-uk.webp"
          alt="British professionals collaborating in modern workspace"
          fill
          sizes="100vw"
          priority
          fetchPriority="high"
          loading="eager"
          quality={82}
          className="object-cover"
        />
      </div>

      {/* Layer 2, SVG cityscape silhouette */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1600 200"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ height: 200, zIndex: 1, color: "rgba(255,255,255,0.05)" }}
      >
        <g ref={skylineRef} fill="currentColor">
          {/* Same silhouette as CityscapeSVG but inlined so refs work */}
          <rect x="0" y="130" width="60" height="70" />
          <rect x="62" y="110" width="40" height="90" />
          <rect x="104" y="140" width="70" height="60" />
          <path d="M185 200 L185 120 L200 95 L215 120 L215 200 Z" />
          <rect x="220" y="135" width="55" height="65" />
          <rect x="278" y="115" width="42" height="85" />
          <rect x="330" y="90" width="28" height="110" />
          <path d="M324 90 L364 90 L358 74 L330 74 Z" />
          <rect x="360" y="130" width="90" height="12" />
          <rect x="452" y="90" width="28" height="110" />
          <path d="M446 90 L486 90 L480 74 L452 74 Z" />
          <rect x="490" y="120" width="50" height="80" />
          <rect x="544" y="100" width="36" height="100" />
          <rect x="582" y="130" width="60" height="70" />
          <rect x="644" y="90" width="42" height="110" />
          <path d="M700 200 L700 40 L728 20 L756 40 L756 200 Z" />
          <rect x="760" y="110" width="50" height="90" />
          <rect x="812" y="130" width="38" height="70" />
          <rect x="852" y="95" width="60" height="105" />
          <rect x="914" y="120" width="44" height="80" />
          <path d="M960 200 L960 70 Q982 40 1004 70 L1004 200 Z" />
          <rect x="1010" y="115" width="50" height="85" />
          <rect x="1062" y="90" width="36" height="110" />
          <rect x="1100" y="130" width="70" height="70" />
          <rect x="1178" y="85" width="22" height="115" />
          <path d="M1176 85 L1202 85 L1195 70 L1183 70 Z" />
          <rect x="1184" y="55" width="10" height="15" />
          <path d="M1184 55 L1194 55 L1189 44 Z" />
          <rect x="1208" y="120" width="60" height="80" />
          <rect x="1270" y="100" width="40" height="100" />
          <path d="M1316 200 L1316 110 Q1344 60 1372 110 L1372 200 Z" />
          <rect x="1340" y="55" width="8" height="55" />
          <rect x="1378" y="130" width="60" height="70" />
          <rect x="1440" y="95" width="44" height="105" />
          <rect x="1486" y="120" width="54" height="80" />
          <rect x="1542" y="140" width="58" height="60" />
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

      {/* Watermark "UK", desktop only */}
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
        UK
      </span>

      {/* Layer 4, Content. Tight vertical rhythm so the whole stack,
          eyebrow → H1 → sub → value prop → CTAs → trust bar → cityscape,
          fits within a single 1440×900 viewport without scrolling. */}
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
          The UK&rsquo;s AI-Native Digital Agency
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
          The UK&rsquo;s AI-Native Digital Agency: Web Design, E-Commerce, AI
          Agents &amp; AI SEO for British Businesses
        </h1>

        {/* Sub-headline, opener sentence only. Rest moved to Section 2. */}
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
            The way British businesses get found online changed fundamentally
            in 2025.
          </p>
          {/* Value prop one-liner */}
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
            Enterprise-grade web design, e-commerce, AI agents &amp; AI SEO,
            at a fixed, transparent quote.
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
              trackCTAClick('get_your_free_digital_audit', 'hero', 'primary');
              trackButtonClick('get_your_free_digital_audit', 'hero');
              openModal();
            }}
            className="w-full sm:w-auto rounded-lg px-7 py-3.5 text-[15px] font-semibold text-white transition-transform duration-200 will-change-transform hover:-translate-y-0.5"
            style={{
              backgroundColor: "#B23E13",
              fontFamily: "var(--font-sans)",
              minHeight: 48,
            }}
          >
            Get Your Free Digital Audit
          </button>
          <a
            href="/portfolio"
            className="w-full sm:w-auto text-center rounded-lg border border-white/25 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-[#0A0F1C]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            View Our Work
          </a>
          <a
            href="#cities"
            data-lenis-scroll
            className="text-[14px] font-medium text-white/70 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Find Your City ↓
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
            "500+ projects delivered globally",
            "Serving businesses in Leeds, Manchester, Birmingham, Sheffield, Bristol, Edinburgh & across the UK",
            "AI-native from day one",
            "Lighthouse 92+ on every build",
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

      {/* Scroll cue, sits low, overlapping the decorative cityscape */}
      <div
        ref={scrollCueRef}
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          bottom: 16,
          zIndex: 4,
          animation: "uk-scroll-bounce 2s ease-in-out infinite",
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
