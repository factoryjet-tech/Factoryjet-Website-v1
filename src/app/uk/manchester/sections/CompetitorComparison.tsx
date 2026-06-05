"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Check } from "lucide-react";


const TABLE_ROWS = [
  {
    feature: "Technology",
    factoryjet: "Next.js 15 + React",
    competitor: "WordPress / Craft CMS",
  },
  {
    feature: "Performance (Lighthouse)",
    factoryjet: "90+ guaranteed",
    competitor: "40–65 typical",
  },
  {
    feature: "SEO Score",
    factoryjet: "100 guaranteed",
    competitor: "70–85 typical",
  },
  {
    feature: "AI Search Visibility",
    factoryjet: "Full schema stack (GEO/AEO)",
    competitor: "None or basic",
  },
  {
    feature: "Mobile Experience",
    factoryjet: "Engineered, not responsive",
    competitor: "Responsive template",
  },
  {
    feature: "Delivery Timeline",
    factoryjet: "2–4 weeks",
    competitor: "6–12 weeks",
  },
  {
    feature: "Web Design Cost",
    factoryjet: "£1,500–£8,000",
    competitor: "£5,000–£25,000",
  },
  {
    feature: "Post-Launch Support",
    factoryjet: "Included 90 days",
    competitor: "Paid from day 1",
  },
];

const COMPETITOR_CARDS = [
  {
    name: "MadeByShape",
    specialty: "CRAFT CMS / SHOPIFY",
    description:
      "Award-winning Manchester agency (est. 2010). Design-first with strong branding credentials. Mid-to-premium positioning with a clean, modern portfolio.",
  },
  {
    name: "Pixel Kicks",
    specialty: "SHOPIFY / WOOCOMMERCE",
    description:
      "Manchester e-commerce specialist with a strong client roster including GMI Construction and UA92. Focused on established platform builds.",
  },
  {
    name: "Soap Media",
    specialty: "FULL-SERVICE AGENCY",
    description:
      "Established Manchester agency (est. 2005). Full-service digital: web design, PPC, SEO. Broad portfolio across industries and sectors.",
  },
  {
    name: "Supremo",
    specialty: "BRANDING / DESIGN",
    description:
      "Manchester boutique design agency with strong visual identity work and branding-led web design. Portfolio-focused with premium aesthetics.",
  },
];

export default function CompetitorComparison() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tableBodyRef = useRef<HTMLTableSectionElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const calloutRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(headerRef.current, { y: 40, autoAlpha: 0, duration: 0.8, ease: "power3.out" })
        .from(
          tableBodyRef.current ? tableBodyRef.current.querySelectorAll("tr") : [],
          { y: 10, autoAlpha: 0, duration: 0.5, stagger: 0.05, ease: "power2.out" },
          "-=0.4"
        )
        .from(
          cardsRef.current ? cardsRef.current.querySelectorAll(".competitor-card") : [],
          { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" },
          "-=0.3"
        )
        .from(calloutRef.current, { y: 20, autoAlpha: 0, duration: 0.7, ease: "power3.out" }, "-=0.3");
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="competitor-comparison"
      style={{ background: "#FFFFFF", padding: "128px 0" }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1400px" }}>

        {/* ── Header ───────────────────────────────────────────────────── */}
        <div ref={headerRef}>
          <p
            className="font-semibold uppercase"
            style={{ color: "#F05A28", fontSize: "13px", letterSpacing: "0.15em", marginBottom: "16px" }}
          >
            How We Compare
          </p>

          <h2
            className="font-clash"
            style={{
              fontSize: "clamp(2rem, 1.7rem + 1.3vw, 3rem)",
              lineHeight: 1.15,
              color: "#0a0f1c",
              maxWidth: "750px",
              marginBottom: "12px",
            }}
          >
            How FactoryJet Compares to Manchester&apos;s Established Web Design
            Agencies
          </h2>

          <p
            style={{
              fontSize: "17px",
              color: "#374151",
              maxWidth: "65ch",
              marginBottom: "48px",
              lineHeight: 1.7,
            }}
          >
            Manchester&apos;s agency scene is one of the densest in the UK —
            MadeByShape, Pixel Kicks, Soap Media, and Supremo among the most
            established. Here&apos;s how FactoryJet stacks up.
          </p>
        </div>

        {/* ── Comparison table ─────────────────────────────────────────── */}
        <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid #E5E7EB" }}>
          <table className="w-full" style={{ borderCollapse: "collapse", minWidth: "600px" }}>

            {/* Sticky header */}
            <thead>
              <tr style={{ position: "sticky", top: "72px", zIndex: 10 }}>
                {/* Feature col */}
                <th
                  className="text-left uppercase"
                  style={{
                    background: "#F8FAFC",
                    padding: "16px 24px",
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    color: "#4B5563",
                    fontWeight: 600,
                    width: "34%",
                    borderBottom: "1px solid #E5E7EB",
                  }}
                >
                  Feature
                </th>
                {/* FactoryJet col */}
                <th
                  className="text-left uppercase"
                  style={{
                    background: "#F05A28",
                    padding: "16px 24px",
                    fontSize: "13px",
                    letterSpacing: "0.08em",
                    color: "white",
                    fontWeight: 700,
                    width: "33%",
                    borderBottom: "1px solid #0047b3",
                  }}
                >
                  FactoryJet
                </th>
                {/* Competitor col */}
                <th
                  className="text-left uppercase"
                  style={{
                    background: "#F8FAFC",
                    padding: "16px 24px",
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    color: "#4B5563",
                    fontWeight: 600,
                    width: "33%",
                    borderBottom: "1px solid #E5E7EB",
                  }}
                >
                  Typical Manchester Agency
                </th>
              </tr>
            </thead>

            {/* Data rows */}
            <tbody ref={tableBodyRef}>
              {TABLE_ROWS.map(({ feature, factoryjet, competitor }, i) => (
                <tr
                  key={feature}
                  style={{ background: i % 2 === 0 ? "white" : "#FAFBFC" }}
                >
                  {/* Feature */}
                  <td
                    style={{
                      padding: "16px 24px",
                      fontSize: "14px",
                      color: "#374151",
                      fontWeight: 500,
                      borderBottom: "1px solid #F3F4F6",
                    }}
                  >
                    {feature}
                  </td>
                  {/* FactoryJet value */}
                  <td
                    style={{
                      padding: "16px 24px",
                      borderBottom: "1px solid #dbeafe",
                      background: i % 2 === 0 ? "#F5F8FF" : "#EEF4FF",
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <Check
                        size={15}
                        style={{ color: "#10B981", flexShrink: 0 }}
                        aria-hidden="true"
                      />
                      <span
                        style={{ fontSize: "14px", color: "#F05A28", fontWeight: 600 }}
                      >
                        {factoryjet}
                      </span>
                    </span>
                  </td>
                  {/* Competitor value */}
                  <td
                    style={{
                      padding: "16px 24px",
                      fontSize: "14px",
                      color: "#6B7280",
                      fontWeight: 400,
                      borderBottom: "1px solid #F3F4F6",
                    }}
                  >
                    {competitor}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* ── Competitor profile cards ──────────────────────────────────── */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12"
          style={{ gap: "16px" }}
        >
          {COMPETITOR_CARDS.map(({ name, specialty, description }) => (
            <div
              key={name}
              className="competitor-card rounded-xl"
              style={{
                background: "#F8FAFC",
                border: "1px solid #E5E7EB",
                padding: "20px",
              }}
            >
              <h3
                className="font-clash"
                style={{ fontSize: "18px", color: "#0a0f1c", marginBottom: "4px" }}
              >
                {name}
              </h3>
              <p
                className="font-medium uppercase"
                style={{
                  fontSize: "12px",
                  color: "#4B5563",
                  letterSpacing: "0.05em",
                  marginBottom: "8px",
                }}
              >
                {specialty}
              </p>
              <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.55 }}>
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* ── "Why the price difference?" callout ──────────────────────── */}
        <div
          ref={calloutRef}
          className="rounded-xl"
          style={{
            background: "#F0F4FF",
            padding: "32px",
            marginTop: "32px",
          }}
        >
          <h3
            className="font-clash"
            style={{ fontSize: "22px", color: "#0a0f1c", marginBottom: "12px" }}
          >
            Why the price difference?
          </h3>
          <p
            style={{
              fontSize: "16px",
              color: "#374151",
              maxWidth: "65ch",
              lineHeight: 1.7,
            }}
          >
            FactoryJet operates from Bengaluru, India with a senior engineering
            team that builds at the same technical level as London and Manchester
            agencies — but at India delivery economics. You get enterprise-grade
            Next.js development, GSAP animation, and conversion engineering at a fixed, published price. No offshore compromises: direct
            communication with senior engineers, UK business hours availability,
            and the same quality benchmarks as any Spinningfields agency.
          </p>
        </div>

      </div>
    </section>
  );
}
