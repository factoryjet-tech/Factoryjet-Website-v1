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
    factoryjet: "Fixed, quoted up front",
    competitor: "Priced by overhead",
  },
  {
    feature: "Post-Launch Support",
    factoryjet: "Included 90 days",
    competitor: "Paid from day 1",
  },
];

const COMPETITOR_CARDS = [
  {
    name: "Ascensor",
    specialty: "FULL-SERVICE AGENCY",
    description:
      "Award-winning Leeds agency (est. 2007). Strong rankings for 'web design Leeds'. WordPress and bespoke builds. ISO 27001 certified.",
  },
  {
    name: "Bolser",
    specialty: "ROI-DRIVEN AGENCY",
    description:
      "Leeds agency focused on ROI-driven web projects. Custom web development, app design, AI integration. Based at Marshall Court, LS11.",
  },
  {
    name: "Engage Interactive",
    specialty: "UX/UI LEADERS",
    description:
      "Certified B Corp. UX/UI specialists with strong design credentials. Focus on user experience and conversion optimisation.",
  },
  {
    name: "Splitpixel",
    specialty: "WORDPRESS / CRAFT CMS",
    description:
      "West Yorkshire agency est. 2008. 200+ websites built. WordPress and Craft CMS specialists. WCAG 2.2 AA accessibility focus.",
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

      const commonTrigger = {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      };

      // Header
      gsap.from(headerRef.current, {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: commonTrigger,
      });

      // Table rows stagger
      if (tableBodyRef.current) {
        gsap.from(tableBodyRef.current.querySelectorAll("tr"), {
          y: 10,
          autoAlpha: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tableBodyRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      // Competitor cards stagger
      if (cardsRef.current) {
        gsap.from(cardsRef.current.querySelectorAll(".competitor-card"), {
          y: 20,
          autoAlpha: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      // Callout box
      gsap.from(calloutRef.current, {
        y: 20,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: calloutRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
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
            How FactoryJet Compares to Local Web Design and Digital Agencies in Leeds
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
            Leeds has a dense digital agency market — over 200 agencies compete across web design, SEO, and digital marketing. The top-tier agencies include Ascensor, Bolser, Engage Interactive, and Show + Tell. But none of them offer AI agent development or generative engine optimisation as dedicated services. Here&apos;s how FactoryJet stacks up.
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
                  Typical Leeds Agency
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
            FactoryJet operates from Bengaluru, India with a senior engineering team that builds at the same technical level as London and Leeds agencies — but at India delivery economics. You get enterprise-grade Next.js development, GSAP animation, and conversion engineering at a fixed, transparent quote. No offshore compromises: direct communication with senior engineers, UK business hours availability, and the same quality benchmarks as any Park Row agency.
          </p>
        </div>

      </div>
    </section>
  );
}
