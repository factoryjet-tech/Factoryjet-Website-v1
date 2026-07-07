"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useContactModal } from "@/context/ContactModalContext";
import { trackButtonClick, trackCTAClick } from "@/utils/gtm";

const MeshGradient = dynamic(() => import("@/components/MeshGradient"), {
  ssr: false,
});

const GRAIN_DATA_URI =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")";

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

      const h1 = headingRef.current;
      if (h1) {
        const text = h1.textContent ?? "";
        h1.innerHTML = text
          .split(" ")
          .map(
            (w) =>
              `<span class="bham-word" style="display:inline-block;overflow:hidden;"><span class="bham-word-inner" style="display:inline-block;will-change:transform,opacity;">${w}&nbsp;</span></span>`
          )
          .join("");
        const inners =
          h1.querySelectorAll<HTMLSpanElement>(".bham-word-inner");
        gsap.from(inners, {
          yPercent: 110,
          autoAlpha: 0,
          duration: 1.1,
          stagger: 0.035,
          ease: "expo.out",
          delay: 0.25,
        });
      }

      gsap.from(subheadRef.current, {
        y: 24,
        autoAlpha: 0,
        duration: 0.8,
        delay: 0.9,
        ease: "power3.out",
      });

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

      gsap.from(trustRef.current, {
        y: 14,
        autoAlpha: 0,
        duration: 0.6,
        delay: 1.45,
        ease: "power3.out",
      });

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
      aria-label="FactoryJet Birmingham — hero"
      className="relative flex min-h-screen w-full items-start justify-center overflow-hidden"
      style={{ backgroundColor: "#0A0F1C", maxWidth: "100vw" }}
    >
      <style>{`
        @keyframes bham-scroll-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>

      {/* Layer 1 — WebGL mesh gradient */}
      <MeshGradient />

      {/* Layer 1b — Hero image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ zIndex: 0, opacity: 0.4, mixBlendMode: "overlay" }}
      >
        <Image
          src="/images/uk/birmingham/hero-birmingham.webp"
          alt="Birmingham city skyline — AI web design agency backdrop"
          fill
          sizes="100vw"
          priority
          fetchPriority="high"
          loading="eager"
          quality={82}
          className="object-cover"
        />
      </div>

      {/* Layer 2 — Birmingham skyline SVG: Rotunda + Selfridges dome */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1600 200"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ height: 200, zIndex: 1, color: "rgba(255,255,255,0.05)" }}
      >
        <g ref={skylineRef} fill="currentColor">
          {/* Far left low buildings */}
          <rect x="0" y="155" width="45" height="45" />
          <rect x="48" y="145" width="30" height="55" />
          <rect x="81" y="158" width="40" height="42" />

          {/* Rotunda — Birmingham's iconic cylindrical tower */}
          {/* Circular tower approximated as rectangle with curved top */}
          <rect x="130" y="50" width="55" height="150" rx="6" />
          {/* Rotunda top dome/cylinder cap */}
          <ellipse cx="157" cy="50" rx="28" ry="10" />
          {/* Rotunda top spire */}
          <rect x="153" y="30" width="8" height="22" />

          {/* Buildings left of Bullring */}
          <rect x="195" y="95" width="38" height="105" />
          <rect x="236" y="110" width="30" height="90" />

          {/* Bullring Selfridges dome — iconic disc facade */}
          {/* Base building */}
          <rect x="275" y="75" width="120" height="125" rx="4" />
          {/* Selfridges dome — bulging organic form */}
          <ellipse cx="335" cy="75" rx="62" ry="32" />
          {/* Disc details on Selfridges (simplified circles) */}
          <circle cx="300" cy="85" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          <circle cx="320" cy="78" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          <circle cx="340" cy="75" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          <circle cx="360" cy="78" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          <circle cx="375" cy="88" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          <circle cx="310" cy="95" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
          <circle cx="350" cy="92" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />

          {/* Grand Central / New Street Station area */}
          <rect x="405" y="105" width="65" height="95" />
          <rect x="410" y="98" width="55" height="12" />

          {/* Mid buildings — Colmore Business District-ish */}
          <rect x="480" y="90" width="42" height="110" />
          <rect x="525" y="75" width="35" height="125" />
          {/* Tall office tower */}
          <rect x="563" y="55" width="28" height="145" />
          <rect x="559" y="50" width="36" height="10" />

          {/* More CBD towers */}
          <rect x="600" y="80" width="38" height="120" />
          <rect x="642" y="100" width="32" height="100" />
          <rect x="678" y="115" width="45" height="85" />

          {/* Arena Birmingham / ICC area */}
          <rect x="730" y="120" width="70" height="80" />
          <rect x="735" y="113" width="60" height="12" />

          {/* Brindleyplace area — canalside low buildings */}
          <rect x="808" y="135" width="50" height="65" />
          <rect x="862" y="125" width="42" height="75" />
          <rect x="908" y="118" width="35" height="82" />

          {/* Tall background tower */}
          <rect x="950" y="60" width="30" height="140" />
          <polygon points="950,60 965,40 980,60" />

          {/* Mid-right buildings */}
          <rect x="988" y="105" width="50" height="95" />
          <rect x="1042" y="118" width="38" height="82" />
          <rect x="1084" y="130" width="55" height="70" />

          {/* Paradise development area */}
          <rect x="1148" y="85" width="60" height="115" />
          <rect x="1153" y="78" width="50" height="12" />
          <rect x="1216" y="100" width="42" height="100" />

          {/* Right side background */}
          <rect x="1265" y="125" width="50" height="75" />
          <rect x="1320" y="112" width="42" height="88" />
          <rect x="1368" y="138" width="58" height="62" />
          <rect x="1432" y="120" width="48" height="80" />
          <rect x="1485" y="140" width="52" height="60" />
          <rect x="1542" y="150" width="58" height="50" />
        </g>
      </svg>

      {/* Layer 3 — Grain */}
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

      {/* Stat watermarks */}
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
          <span>£31.9bn GDP</span>
          <span>·</span>
          <span>60,000 businesses</span>
          <span>·</span>
          <span>2.6M+ metro population</span>
          <span>·</span>
          <span>£2.9bn+ regeneration</span>
        </div>
      </div>

      {/* Watermark "BHM" — desktop only */}
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
        BHM
      </span>

      {/* Layer 4 — Content */}
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
          Birmingham&rsquo;s AI-Native Digital Agency
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
          Birmingham&rsquo;s AI-Native Web Agency — Built for the Second City&rsquo;s Digital Decade
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
            Web design, e-commerce, AI agents and AI SEO for Birmingham&rsquo;s
            60,000 businesses — at a fixed, transparent quote you&rsquo;ve been
            quoted from Jewellery Quarter and Brindleyplace agencies.
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
              trackCTAClick("get_a_free_birmingham_quote", "hero", "primary");
              trackButtonClick("get_a_free_birmingham_quote", "hero");
              openModal();
            }}
            className="w-full sm:w-auto rounded-lg px-7 py-3.5 text-[15px] font-semibold text-white transition-transform duration-200 will-change-transform hover:-translate-y-0.5"
            style={{
              backgroundColor: "#F05A28",
              fontFamily: "var(--font-sans)",
              minHeight: 48,
            }}
          >
            Get Your Free Birmingham Quote
          </button>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto text-center rounded-lg border border-white/25 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-[#0A0F1C]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            View Our Work
          </a>
          <a
            href="https://wa.me/919699977699"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-medium text-white/70 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            WhatsApp Us ↓
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
            "HSBC UK HQ",
            "Paradise Quarter",
            "Brindleyplace",
            "Jewellery Quarter",
            "Digbeth",
            "HS2 Curzon Street",
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
          animation: "bham-scroll-bounce 2s ease-in-out infinite",
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
