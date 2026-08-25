"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useContactModal } from "@/context/ContactModalContext";
import { trackButtonClick, trackCTAClick } from "@/utils/gtm";

// ── Hero ─────────────────────────────────────────────────────────────────────
//
// 2026-08-25: this hero used to be a full dark band (#0A0F1C) with a WebGL mesh
// gradient, a grain overlay and a photo in `mix-blend-mode: overlay`. That broke
// the house rule that the hero is always light, and the WebGL canvas was pure
// client cost on the first paint of the whole UK section. It is now a light
// cream hero on an asymmetric 7/5 split: copy left, photograph right. Every
// GSAP ref is unchanged, so the entrance animation still runs exactly as before.
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const labelRuleRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLUListElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);
  const skylineRef = useRef<SVGGElement>(null);
  const { openModal: openContactModal } = useContactModal();
  const openModal = () => openContactModal('uk', 'default');

  useGSAP(
    () => {
      const prefersReduced =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      // 1. Eyebrow rule draws in from the left
      gsap.fromTo(
        labelRuleRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          delay: 0.5,
          ease: "power2.out",
          transformOrigin: "0% 50%",
        }
      );
      gsap.from(labelRef.current, {
        y: 10,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power3.out",
      });

      // 2. H1, word-based stagger. Reads textContent, so keep the heading
      //    plain text with no nested elements.
      const h1 = headingRef.current;
      if (h1) {
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

      // 4. CTAs, fromTo so the final state is guaranteed even if the tween is
      //    interrupted (HMR, fast refresh, StrictMode double-invoke).
      const ctaChildren = ctaRef.current
        ? Array.from(ctaRef.current.children)
        : [];
      if (ctaChildren.length) {
        // Opacity + transform only, no visibility toggle, so the animation
        // stays compositor-driven. autoAlpha writes `visibility` and trips
        // the Lighthouse "non-composited animations" audit.
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

      // 7. Scroll cue fades as the reader leaves the hero
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
      className="relative flex w-full items-center overflow-hidden bg-fj-cream"
      style={{ maxWidth: "100vw", minHeight: "88vh" }}
    >
      {/* Decorative skyline, sits low and light so it never competes with copy */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1600 200"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 left-0 w-full"
        style={{ height: 160, zIndex: 0, color: "rgba(20,17,15,0.05)" }}
      >
        <g ref={skylineRef} fill="currentColor">
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

      {/* Content, asymmetric 7/5 split: copy left, photograph right */}
      <div
        className="relative mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-10 px-6 pb-24 pt-[13vh] sm:px-8 lg:grid-cols-12 lg:gap-14 lg:pb-28"
        style={{ zIndex: 10 }}
      >
        {/* Left column, 7 of 12 */}
        <div className="lg:col-span-7">
          {/* Eyebrow */}
          <p
            ref={labelRef}
            className="font-fj-mono relative inline-flex flex-col items-start pb-2"
            style={{
              color: "#B23E13",
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            AI-native digital agency, United Kingdom
            <span
              ref={labelRuleRef}
              aria-hidden="true"
              className="mt-2 block h-px w-24"
              style={{ backgroundColor: "#F05A28" }}
            />
          </p>

          {/* H1. Plain text only, the word-stagger reads textContent. */}
          <h1
            ref={headingRef}
            className="font-fj-display mt-5 text-fj-ink"
            style={{
              fontWeight: 700,
              fontSize: "clamp(30px, 4.4vw, 56px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 780,
            }}
          >
            Digital Agency UK: Web Design, E-Commerce, AI Agents and AI SEO
          </h1>

          <div ref={subheadRef} className="mt-5">
            <p
              className="font-fj-body text-fj-neutral-600"
              style={{
                maxWidth: 660,
                fontSize: "clamp(16px, 1.3vw, 18px)",
                lineHeight: 1.65,
              }}
            >
              One British-focused team builds the site, the shop, the AI agents
              and the search work, on the same stack every time. Pick a service
              hub or a city below and you land on the exact page for that job.
            </p>
            <p
              className="font-fj-body mt-3 text-fj-ink"
              style={{
                maxWidth: 640,
                fontWeight: 600,
                fontSize: "clamp(15px, 1.2vw, 17px)",
                lineHeight: 1.5,
              }}
            >
              Scoped in writing, quoted before work starts, delivered on
              fixed-price milestones.
            </p>
          </div>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <button
              type="button"
              onClick={() => {
                trackCTAClick('get_your_free_digital_audit', 'hero', 'primary');
                trackButtonClick('get_your_free_digital_audit', 'hero');
                openModal();
              }}
              className="font-fj-body w-full rounded-2xl px-7 py-3.5 text-[15px] font-semibold text-white transition-transform duration-200 will-change-transform hover:-translate-y-0.5 sm:w-auto"
              style={{ backgroundColor: "#B23E13", minHeight: 48 }}
            >
              Get your free UK digital audit
            </button>
            <a
              href="/portfolio"
              className="font-fj-body w-full rounded-2xl border border-fj-neutral-200 bg-white px-7 py-3.5 text-center text-[15px] font-semibold text-fj-ink transition-colors duration-200 hover:border-fj-ink sm:w-auto"
            >
              See UK work
            </a>
            <a
              href="#cities"
              data-lenis-scroll
              className="font-fj-body py-2 text-center text-[14px] font-medium text-fj-neutral-600 underline-offset-4 transition-colors duration-200 hover:text-fj-ink hover:underline"
            >
              Find your city
            </a>
          </div>

          {/* Trust bar */}
          <ul
            ref={trustRef}
            className="font-fj-body mt-7 flex list-none flex-wrap items-center gap-x-5 gap-y-2 p-0 text-[13px] text-fj-neutral-600"
          >
            {[
              "500+ projects delivered worldwide",
              "21 UK city hubs, 10 UK service hubs",
              "Lighthouse 92+ on every build",
              "Senior engineers, no account-manager layer",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: "#F05A28" }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column, 5 of 12 */}
        <div className="lg:col-span-5">
          <div
            className="relative w-full overflow-hidden rounded-2xl border border-fj-neutral-200"
            style={{ aspectRatio: "4 / 5" }}
          >
            <Image
              src="/images/uk/hero-uk.webp"
              alt="A UK team reviewing a website build together in a modern office"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
              fetchPriority="high"
              loading="eager"
              quality={82}
              className="object-cover"
            />
          </div>
          <p className="font-fj-body mt-3 text-[13px] leading-relaxed text-fj-neutral-600">
            We work with UK businesses remotely, from Southampton to Edinburgh,
            in your time zone and in plain English.
          </p>
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
          animation: "uk-scroll-bounce 2s ease-in-out infinite",
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
