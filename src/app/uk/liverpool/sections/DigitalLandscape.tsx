"use client";

import { useRef } from "react";
import { Landmark, Building2, TrendingUp, Ship } from "lucide-react";

// ── Bento stat definition ────────────────────────────────────────────────────
type Stat = {
  value: string;
  label: string;
  sublabel: string;
  icon: React.ElementType<{ size?: number; strokeWidth?: number; className?: string }>;
  trend: string;
};

const STATS: Stat[] = [
  {
    value: "£43.3bn",
    label: "City Region GDP",
    sublabel: "Liverpool City Region economic output",
    icon: Landmark,
    trend: "Key Growth Hub",
  },
  {
    value: "14,000+",
    label: "Registered Businesses",
    sublabel: "Rapidly expanding tech & creative cluster",
    icon: Building2,
    trend: "Fast Expanding",
  },
  {
    value: "£11bn",
    label: "Active Investment",
    sublabel: "Commercial & waterfront pipeline",
    icon: TrendingUp,
    trend: "Major Pipeline",
  },
  {
    value: "45%",
    label: "UK-US Trade Volume",
    sublabel: "Handled through Peel Ports Liverpool",
    icon: Ship,
    trend: "Atlantic Gateway",
  },
];

export default function DigitalLandscape() {
  const sectionRef = useRef<HTMLElement>(null);

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
              color: "#B23E13",
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
                Region generates £43.3 billion in GDP, and with an £11 billion
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
                life sciences and deep-tech sector, and the LCR Freeport,
                positioning Liverpool as the UK&rsquo;s premier Atlantic gateway
                once more. Peel Ports already handles approximately 45% of
                UK-US trade flows. JLR Halewood manufactures Range Rover Evoque
                and Discovery Sport for global export.
              </p>
              <p>
                For Liverpool&rsquo;s 14,000 businesses, from logistics
                operators in Merseyside to creative studios in the Baltic
                Triangle: the digital opportunity is enormous. And competition
                in AI web design, AI SEO, and AI agent development in Liverpool
                is, right now, effectively zero.
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
                  color: "#F05A28",
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
              className="grid gap-4 grid-cols-1 sm:grid-cols-2"
              role="list"
              aria-label="Liverpool digital statistics"
            >
              {STATS.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    role="listitem"
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5622]/40 hover:shadow-xl hover:shadow-[#F05A28]/5"
                    style={{
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                      minHeight: 180,
                    }}
                  >
                    {/* Header: Clean Icon Badge + Trend Pill */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FEEFEA] border border-[#F3C9B6] text-[#F05A28] transition-transform duration-300 group-hover:scale-105">
                        <Icon size={18} strokeWidth={2} />
                      </div>
                      <span className="inline-flex items-center rounded-full bg-[#F6F6F9] border border-[#E6E6EC] px-2.5 py-0.5 font-fj-mono text-[11px] font-semibold text-[#141414]">
                        {s.trend}
                      </span>
                    </div>

                    {/* Big Number Headline */}
                    <div>
                      <div
                        className="font-clash"
                        style={{
                          fontSize: "clamp(30px, 2.5vw, 38px)",
                          fontWeight: 700,
                          color: "#F05A28",
                          lineHeight: 1.1,
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {s.value}
                      </div>
                      <div
                        className="mt-2 font-fj-body text-[13.5px] font-semibold leading-snug text-[#0A0F1C]"
                      >
                        {s.label}
                      </div>
                      <p
                        className="mt-0.5 font-fj-body text-[11.5px] leading-relaxed text-[#6b7280]"
                      >
                        {s.sublabel}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
