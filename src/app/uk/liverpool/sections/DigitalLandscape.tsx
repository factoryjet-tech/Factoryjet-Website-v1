"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

// ── Bento stat definition ────────────────────────────────────────────────────
type Stat = {
  value: string;
  label: string;
  ringPct: number;
  ringColor: string;
  span2?: boolean;
};

const STATS: Stat[] = [
  {
    value: "£43.3bn",
    label: "Liverpool City Region GDP",
    ringPct: 88,
    ringColor: "#0052CC",
    span2: true,
  },
  {
    value: "14,000",
    label: "Registered businesses, City of Liverpool",
    ringPct: 72,
    ringColor: "#FF6B35",
  },
  {
    value: "£11bn",
    label: "Active investment pipeline",
    ringPct: 95,
    ringColor: "#10B981",
  },
  {
    value: "45%",
    label: "UK-US trade via Peel Ports",
    ringPct: 45,
    ringColor: "#0052CC",
  },
];

// SVG progress ring constants
const R = 24;
const CIRC = 2 * Math.PI * R; // ~150.8

export default function DigitalLandscape() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const rings = sectionRef.current?.querySelectorAll<SVGCircleElement>(
        "circle[data-ring-fill]"
      );

      if (prefersReduced) {
        rings?.forEach((ring) => {
          const pct = Number(ring.dataset.ringFill ?? "100");
          ring.style.strokeDashoffset = String(CIRC - (CIRC * pct) / 100);
        });
        return;
      }

      // Progress rings draw on scroll entry
      rings?.forEach((ring) => {
        const pct = Number(ring.dataset.ringFill ?? "100");
        const target = CIRC - (CIRC * pct) / 100;
        const ringColor =
          ring.getAttribute("data-ring-color") ?? "#0052CC";
        gsap.fromTo(
          ring,
          { strokeDashoffset: CIRC },
          {
            strokeDashoffset: target,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ring.closest("[data-stat-card]") as Element,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
        ring.style.stroke = ringColor;
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => {
          if (t.trigger && sectionRef.current?.contains(t.trigger as Node)) {
            t.kill();
          }
        });
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="digital-landscape"
      aria-label="The Liverpool digital opportunity"
      className="relative w-full"
      style={{ backgroundColor: "#FFFFFF", maxWidth: "100vw" }}
    >
      <div
        className="mx-auto w-full max-w-[1200px] px-6 sm:px-8"
        style={{
          paddingTop: "clamp(64px, 10vw, 120px)",
          paddingBottom: "clamp(64px, 10vw, 120px)",
        }}
      >
        {/* Heading block */}
        <div className="flex flex-col items-center text-center">
          <p
            style={{
              color: "#FF6B35",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            The Liverpool Opportunity
          </p>

          <h2
            className="font-clash mt-5"
            style={{
              color: "#0A0F1C",
              fontWeight: 700,
              fontSize: "clamp(24px, 3.5vw, 44px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 900,
            }}
          >
            A Port City on the Verge of a Second Renaissance.
          </h2>

          <span
            aria-hidden="true"
            className="mt-6 block"
            style={{ width: 48, height: 2, backgroundColor: "#FF6B35" }}
          />
        </div>

        {/* Editorial two-column */}
        <div className="mt-16 flex flex-col gap-10 lg:grid lg:grid-cols-[55%_45%] lg:gap-14">
          {/* Prose */}
          <div className="order-2 lg:order-1">
            <div
              className="space-y-6"
              style={{
                maxWidth: 720,
                color: "#374151",
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: "clamp(15px, 1.1vw, 17px)",
                lineHeight: 1.8,
              }}
            >
              <p>
                Liverpool isn&rsquo;t just a city with a remarkable past. It&rsquo;s
                a city with an extraordinary digital present. The Liverpool City
                Region generates £43.3 billion in GDP — and with an £11 billion
                investment pipeline actively reshaping the waterfront, the
                Knowledge Quarter, and Bramley-Moore Dock, the businesses that
                own their digital presence right now will capture
                disproportionate growth over the next decade.
              </p>
              <p>
                The opening of Everton&rsquo;s 52,769-seat stadium at
                Bramley-Moore Dock in August 2025 is the headline act. But
                behind it sits a £5.5 billion Liverpool Waters regeneration
                scheme, a 450-acre Knowledge Quarter housing the city&rsquo;s
                life sciences and deep-tech sector, and the LCR Freeport —
                positioning Liverpool as the UK&rsquo;s premier Atlantic gateway
                once more. Peel Ports already handles approximately 45% of
                UK-US trade flows. JLR Halewood manufactures Range Rover Evoque
                and Discovery Sport for global export.
              </p>
              <p>
                For Liverpool&rsquo;s 14,000 businesses — from logistics
                operators in Merseyside to creative studios in the Baltic
                Triangle — the digital opportunity is enormous. And competition
                in AI web design, AI SEO, and AI agent development in Liverpool
                is, right now, effectively zero.
              </p>
            </div>

            {/* Pull quote */}
            <figure
              className="mt-10 border-l-4 pl-6 py-2"
              style={{ borderColor: "#0052CC" }}
            >
              <blockquote
                className="font-clash"
                style={{
                  color: "#0052CC",
                  fontWeight: 600,
                  fontSize: "clamp(18px, 1.8vw, 22px)",
                  lineHeight: 1.4,
                  letterSpacing: "-0.01em",
                }}
              >
                &ldquo;The businesses that digitise first in Liverpool&rsquo;s
                next chapter won&rsquo;t just grow. They&rsquo;ll compound.&rdquo;
              </blockquote>
            </figure>
          </div>

          {/* Bento stats grid */}
          <div className="order-1 lg:order-2">
            <div
              className="grid gap-5 grid-cols-1 sm:grid-cols-2"
              role="list"
              aria-label="Liverpool digital statistics"
            >
              {STATS.map((s) => (
                <div
                  key={s.label}
                  role="listitem"
                  data-stat-card
                  className={[
                    "group relative flex flex-col justify-between overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1",
                    s.span2 ? "sm:col-span-2" : "",
                  ].join(" ")}
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: 12,
                    borderLeft: s.span2
                      ? `3px solid ${s.ringColor}`
                      : "1px solid #E2E8F0",
                    minHeight: 180,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 1px 3px rgba(0,0,0,0.04)";
                  }}
                >
                  {/* Decorative progress ring — 80×80, top-right corner */}
                  <svg
                    aria-hidden="true"
                    width="80"
                    height="80"
                    viewBox="0 0 64 64"
                    style={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      width: 80,
                      height: 80,
                      zIndex: 0,
                      pointerEvents: "none",
                    }}
                  >
                    {/* Track */}
                    <circle
                      cx="32"
                      cy="32"
                      r={R}
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth="3"
                    />
                    {/* Fill — starts hidden, GSAP draws it in on scroll */}
                    <circle
                      data-ring-fill={s.ringPct}
                      data-ring-color={s.ringColor}
                      cx="32"
                      cy="32"
                      r={R}
                      fill="none"
                      stroke={s.ringColor}
                      strokeWidth="3"
                      strokeLinecap="round"
                      style={{
                        strokeDasharray: CIRC,
                        strokeDashoffset: CIRC,
                        transform: "rotate(-90deg)",
                        transformOrigin: "32px 32px",
                      }}
                    />
                  </svg>

                  {/* Text — relative + z-index:10 so it always sits above the ring */}
                  <div
                    className="font-clash"
                    style={{
                      color: s.ringColor,
                      fontWeight: 700,
                      fontSize: s.span2 ? 64 : 56,
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      position: "relative",
                      zIndex: 10,
                    }}
                  >
                    {s.value}
                  </div>
                  <p
                    className="mt-4"
                    style={{
                      color: "#6b7280",
                      fontFamily: "var(--font-sans)",
                      fontWeight: 400,
                      fontSize: 14,
                      letterSpacing: "0.02em",
                      position: "relative",
                      zIndex: 10,
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
