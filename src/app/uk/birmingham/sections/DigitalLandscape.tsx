"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type Stat = {
  value: string;
  label: string;
  ringPct: number;
  ringColor: string;
  span2?: boolean;
};

const STATS: Stat[] = [
  {
    value: "£31.9bn",
    label: "Birmingham city region GDP",
    ringPct: 88,
    ringColor: "#F05A28",
    span2: true,
  },
  {
    value: "60,000",
    label: "Registered businesses",
    ringPct: 72,
    ringColor: "#FF6B35",
  },
  {
    value: "2.6M+",
    label: "West Midlands metro population",
    ringPct: 95,
    ringColor: "#10B981",
  },
  {
    value: "£2.9bn+",
    label: "Active regeneration investment (Paradise + Smithfield)",
    ringPct: 65,
    ringColor: "#F05A28",
  },
];

const R = 24;
const CIRC = 2 * Math.PI * R;

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

      rings?.forEach((ring) => {
        const pct = Number(ring.dataset.ringFill ?? "100");
        const target = CIRC - (CIRC * pct) / 100;
        const ringColor =
          ring.getAttribute("data-ring-color") ?? "#F05A28";
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
      aria-label="The Birmingham digital opportunity"
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
              color: "#B23E13",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            The Birmingham Opportunity
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
            The £31.9bn Economy That Rewrites Itself Every Decade
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
                Birmingham has always been a city of transformation. From the
                Jewellery Quarter&rsquo;s 700 independent craftspeople to Goldman
                Sachs engineers coding in Brindleyplace, from Deutsche Bank&rsquo;s
                2,000-strong technology hub to JLR&rsquo;s design studios in the
                West Midlands — Birmingham&rsquo;s economy is broader, deeper, and
                faster-moving than most agency websites acknowledge.
              </p>
              <p>
                The £1bn Paradise regeneration at Three Chamberlain Square added
                1.4 million sq ft of commercial space. The £1.9bn Smithfield
                masterplan is remaking the city&rsquo;s core. HS2&rsquo;s Curzon
                Street terminus will make Birmingham a 45-minute commute from
                London by 2033. Every one of these projects brings 500 new
                businesses into the city region.
              </p>
              <p>
                What that means for your website: buyers arrive well-informed.
                They&rsquo;ve compared three agencies before they contact you.
                Your digital presence is your proposal before you ever get in
                the room.
              </p>
            </div>

            {/* Pull quote */}
            <figure
              className="mt-10 border-l-4 pl-6 py-2"
              style={{ borderColor: "#F05A28" }}
            >
              <blockquote
                className="font-clash"
                style={{
                  color: "#B23E13",
                  fontWeight: 600,
                  fontSize: "clamp(18px, 1.8vw, 22px)",
                  lineHeight: 1.4,
                  letterSpacing: "-0.01em",
                  fontStyle: "italic",
                }}
              >
                &ldquo;Birmingham has the youngest average population of any
                major UK city outside London — median age 34.4. Digital adoption
                is native, not adopted.&rdquo;
              </blockquote>
            </figure>
          </div>

          {/* Bento stats grid */}
          <div className="order-1 lg:order-2">
            <div
              className="grid gap-5 grid-cols-1 sm:grid-cols-2"
              role="list"
              aria-label="Birmingham digital statistics"
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
                    <circle
                      cx="32"
                      cy="32"
                      r={R}
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth="3"
                    />
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
