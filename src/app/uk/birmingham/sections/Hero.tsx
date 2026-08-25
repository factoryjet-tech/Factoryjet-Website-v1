"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useContactModal } from "@/context/ContactModalContext";
import { trackButtonClick, trackCTAClick } from "@/utils/gtm";

// 2026-08-25: this hero was #0A0F1C with a WebGL mesh gradient, a full-bleed image at 40%
// overlay and a grain layer. Three problems. The brand rule is that the hero is never dark.
// White copy sat on an orange button below the large-text size, which fails contrast. And the
// LCP element was a decorative background image nobody reads. All three are gone. What is
// kept is the Birmingham skyline, which is real local drawing rather than stock AI artwork,
// recoloured as a light ink tint.

// Landmarks named in the trust strip, kept as data so the row cannot drift from the SVG.
const LANDMARKS = [
  "Colmore Business District",
  "Jewellery Quarter",
  "Digbeth",
  "Brindleyplace",
  "Bullring",
  "Curzon Street",
];

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
      aria-label="FactoryJet Birmingham, hero"
      className="relative flex w-full items-start justify-center overflow-hidden"
      style={{ backgroundColor: "#FAFAF7", maxWidth: "100vw" }}
    >
      <style>{`
        @keyframes bham-scroll-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>

      {/* Layer 1, Birmingham skyline SVG: Rotunda + Selfridges dome */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1600 200"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ height: 200, zIndex: 1, color: "rgba(26,26,26,0.06)" }}
      >
        <g ref={skylineRef} fill="currentColor">
          {/* Far left low buildings */}
          <rect x="0" y="155" width="45" height="45" />
          <rect x="48" y="145" width="30" height="55" />
          <rect x="81" y="158" width="40" height="42" />

          {/* Rotunda, Birmingham's iconic cylindrical tower */}
          {/* Circular tower approximated as rectangle with curved top */}
          <rect x="130" y="50" width="55" height="150" rx="6" />
          {/* Rotunda top dome/cylinder cap */}
          <ellipse cx="157" cy="50" rx="28" ry="10" />
          {/* Rotunda top spire */}
          <rect x="153" y="30" width="8" height="22" />

          {/* Buildings left of Bullring */}
          <rect x="195" y="95" width="38" height="105" />
          <rect x="236" y="110" width="30" height="90" />

          {/* Bullring Selfridges dome, iconic disc facade */}
          {/* Base building */}
          <rect x="275" y="75" width="120" height="125" rx="4" />
          {/* Selfridges dome, bulging organic form */}
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

          {/* Mid buildings, Colmore Business District-ish */}
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

          {/* Brindleyplace area, canalside low buildings */}
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

      {/* Layer 2, Content. Asymmetric 60/40, left aligned. */}
      <div
        className="relative mx-auto w-full max-w-[1120px] px-6 pt-14 pb-24 sm:px-8 md:pt-20"
        style={{ zIndex: 10 }}
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[58%_1fr] lg:gap-16">
          {/* Left, the pitch */}
          <div>
            {/* Eyebrow */}
            <p
              ref={labelRef}
              className="relative inline-flex flex-col items-start pb-2 font-fj-mono"
              style={{
                color: "#B23E13",
                fontWeight: 600,
                fontSize: 12.5,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              SEO agency, Birmingham and the West Midlands
              <span
                ref={labelRuleRef}
                aria-hidden="true"
                className="mt-2 block h-px w-24"
                style={{ backgroundColor: "#B23E13" }}
              />
            </p>

            {/* H1 */}
            <h1
              ref={headingRef}
              className="font-fj-display mt-6"
              style={{
                color: "#1A1A1A",
                fontWeight: 700,
                fontSize: "clamp(30px, 4.4vw, 54px)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                maxWidth: 800,
              }}
            >
              SEO agency in Birmingham for firms that need enquiries, not ranking screenshots
            </h1>

            {/* Sub-headline */}
            <div ref={subheadRef} className="mt-6">
              <p
                className="font-fj-body"
                style={{
                  maxWidth: 640,
                  color: "#4A4A45",
                  fontWeight: 400,
                  fontSize: "clamp(16px, 1.2vw, 18px)",
                  lineHeight: 1.65,
                }}
              >
                We fix what stops Google reading your site, get your Google Business Profile
                right, and build pages that answer what Birmingham buyers actually type. Then
                we report on the enquiries, not on a rankings graph.
              </p>
              <p
                className="font-fj-body mt-3"
                style={{
                  maxWidth: 620,
                  color: "#1A1A1A",
                  fontWeight: 600,
                  fontSize: "clamp(15px, 1.15vw, 17px)",
                  lineHeight: 1.5,
                }}
              >
                No account handler layer. No lock-in. You own every account from day one.
              </p>
            </div>

            {/* CTAs */}
            <div
              ref={ctaRef}
              className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            >
              <button
                type="button"
                onClick={() => {
                  trackCTAClick("free_birmingham_site_review", "hero", "primary");
                  trackButtonClick("free_birmingham_site_review", "hero");
                  openModal();
                }}
                className="font-fj-body w-full sm:w-auto rounded-lg px-7 py-3.5 text-[16px] font-semibold text-white transition-transform duration-200 will-change-transform hover:-translate-y-0.5"
                style={{ backgroundColor: "#B23E13", minHeight: 48 }}
              >
                Get a free Birmingham site review
              </button>
              <a
                href="#engagement"
                className="font-fj-body w-full sm:w-auto rounded-lg border px-7 py-3.5 text-center text-[16px] font-semibold transition-colors duration-200 hover:bg-white"
                style={{
                  borderColor: "#D9D9D2",
                  color: "#1A1A1A",
                  minHeight: 48,
                  lineHeight: "1.35",
                }}
              >
                See what the work covers
              </a>
            </div>

            {/* Trust bar */}
            <div
              ref={trustRef}
              className="font-fj-body mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[clamp(11.5px,1.2vw,13px)]"
              style={{ color: "#4A4A45", fontWeight: 500 }}
            >
              {LANDMARKS.map((item, i, arr) => (
                <span key={item} className="flex items-center gap-x-4">
                  <span>{item}</span>
                  {i < arr.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden h-3 w-px md:inline-block"
                      style={{ backgroundColor: "#D9D9D2" }}
                    />
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Right, what the free review contains */}
          <aside className="lg:pt-2">
            <div
              className="rounded-2xl border bg-white p-6 md:p-7"
              style={{ borderColor: "#D9D9D2" }}
            >
              <p className="font-fj-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B23E13]">
                The free review
              </p>
              <p className="font-fj-display mt-3 text-[19px] font-bold leading-snug text-fj-ink">
                What you get before you pay anything
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "The three faults costing you the most search traffic, named and ranked.",
                  "What your Google Business Profile is missing, and whether you can legally list your address.",
                  "The Birmingham search terms you already rank for, pulled from your own Search Console.",
                  "An honest read on which terms are winnable this year and which are not.",
                  "A written scope with fixed-price milestones, or a clear no if we are the wrong fit.",
                ].map((item) => (
                  <li
                    key={item}
                    className="font-fj-body flex gap-3 text-[14.5px] leading-[1.6]"
                    style={{ color: "#4A4A45" }}
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[8px] h-[5px] w-[5px] flex-shrink-0 rounded-full"
                      style={{ backgroundColor: "#B23E13" }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p
                className="font-fj-body mt-5 text-[13px] leading-[1.55]"
                style={{ color: "#4A4A45" }}
              >
                Sent as a short written summary, whether or not you go ahead.
              </p>
            </div>
          </aside>
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
          // #FF6B35 measured about 2.6:1 against the cream hero. Fine on the old dark
          // background, not on this one.
          color: "#B23E13",
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
