"use client";

import Image from "next/image";

// ── Logo catalogue ─────────────────────────────────────────────────────────────
const LOGOS = [
  { src: "/images/leeds/logos/logo-tech.svg",          alt: "Technology sector" },
  { src: "/images/leeds/logos/logo-media.svg",         alt: "Media sector" },
  { src: "/images/leeds/logos/logo-finance.svg",       alt: "Finance sector" },
  { src: "/images/leeds/logos/logo-health.svg",        alt: "Health sector" },
  { src: "/images/leeds/logos/logo-manufacturing.svg", alt: "Manufacturing sector" },
  { src: "/images/leeds/logos/logo-retail.svg",        alt: "Retail sector" },
  { src: "/images/leeds/logos/logo-education.svg",     alt: "Education sector" },
  { src: "/images/leeds/logos/logo-logistics.svg",     alt: "Logistics sector" },
  { src: "/images/leeds/logos/logo-legal.svg",         alt: "Legal sector" },
  { src: "/images/leeds/logos/logo-analytics.svg",     alt: "Analytics sector" },
  { src: "/images/leeds/logos/logo-realestate.svg",    alt: "Real estate sector" },
  { src: "/images/leeds/logos/logo-food.svg",          alt: "Food & hospitality sector" },
] as const;

// ── Props ──────────────────────────────────────────────────────────────────────
interface LogoMarqueeProps {
  /** Scroll direction. Default: 'left'. */
  direction?: "left" | "right";
  /** Full-cycle duration in seconds. Default: 30. */
  speed?: number;
}

// ── Component ──────────────────────────────────────────────────────────────────
export default function LogoMarquee({
  direction = "left",
  speed = 30,
}: LogoMarqueeProps) {
  return (
    <>
      {/*
       * Keyframe + hover + reduced-motion rules injected once per instance.
       * Duplicate @keyframes marquee declarations are harmless — CSS simply
       * applies the last-written definition which is identical anyway.
       */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0%); }
          to   { transform: translateX(-50%); }
        }
        .logo-marquee-track {
          will-change: transform;
        }
        .logo-item {
          filter: grayscale(1) opacity(0.5);
          transition: filter 0.3s ease;
        }
        .logo-item:hover {
          filter: grayscale(0) opacity(1);
        }
        @media (prefers-reduced-motion: reduce) {
          .logo-marquee-track {
            animation-play-state: paused !important;
          }
        }
      `}</style>

      {/* ── Outer container ──────────────────────────────────────────────── */}
      <div
        className="overflow-hidden py-4 bg-white"
        style={{
          borderTop: "1px solid rgba(226,232,240,0.5)",
          borderBottom: "1px solid rgba(226,232,240,0.5)",
        }}
        aria-hidden="true"
      >
        {/*
         * Seamless loop mechanics:
         *   - Track contains 2 identical sets of logos side-by-side.
         *   - gap-16 (64 px) is uniform across all items including the
         *     set-1 → set-2 junction, so the seam is invisible.
         *   - Animating translateX(0 → -50%) moves exactly one set-width
         *     to the left, landing on the visual start of set 2 → loop.
         *   - direction="right" reverses the keyframe via animationDirection.
         */}
        <div
          className="logo-marquee-track flex items-center gap-12 w-max"
          style={{
            animation: `marquee ${speed}s linear infinite`,
            animationDirection: direction === "right" ? "reverse" : "normal",
          }}
        >
          {/* ── Set 1 ───────────────────────────────────────────────────── */}
          {LOGOS.map((logo) => (
            <div key={`a-${logo.src}`} className="logo-item flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={90}
                height={32}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}

          {/* ── Set 2 (identical duplicate, creates the seamless loop) ── */}
          {LOGOS.map((logo) => (
            <div key={`b-${logo.src}`} className="logo-item flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={90}
                height={32}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
