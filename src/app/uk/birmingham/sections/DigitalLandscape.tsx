"use client";

import { useRef } from "react";
import { Landmark, Building2, Users, TrendingUp } from "lucide-react";

type Stat = {
  value: string;
  label: string;
  sublabel: string;
  icon: React.ElementType<{ size?: number; strokeWidth?: number; className?: string }>;
  trend: string;
};

const STATS: Stat[] = [
  {
    value: "£31.9bn",
    label: "City Region GDP",
    sublabel: "West Midlands economic powerhouse",
    icon: Landmark,
    trend: "Tier 1 Metro",
  },
  {
    value: "60,000+",
    label: "Registered Businesses",
    sublabel: "Largest commercial base outside London",
    icon: Building2,
    trend: "High Growth",
  },
  {
    value: "2.6M+",
    label: "Metro Population",
    sublabel: "Median age 34.4 — native digital adopters",
    icon: Users,
    trend: "Youngest UK City",
  },
  {
    value: "£2.9bn+",
    label: "Active Regeneration",
    sublabel: "Paradise, Smithfield & HS2 Curzon",
    icon: TrendingUp,
    trend: "Infrastructure",
  },
];

export default function DigitalLandscape() {
  const sectionRef = useRef<HTMLElement>(null);

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
                West Midlands: Birmingham&rsquo;s economy is broader, deeper, and
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
                major UK city outside London, median age 34.4. Digital adoption
                is native, not adopted.&rdquo;
              </blockquote>
            </figure>
          </div>

          {/* Bento stats grid */}
          <div className="order-1 lg:order-2">
            <div
              className="grid gap-4 grid-cols-1 sm:grid-cols-2"
              role="list"
              aria-label="Birmingham digital statistics"
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
