"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { CheckCircle2 } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";
import { trackButtonClick, trackCTAClick } from "@/utils/gtm";


const PRICING_ROWS = [
  {
    service: "Business Website (Next.js 15)",
    factoryjet: "£1,500–£5,000",
    average: "£4,500–£8,000",
    saving: "Up to 67%",
  },
  {
    service: "E-Commerce Store (Shopify/WooCommerce)",
    factoryjet: "£2,000–£8,000",
    average: "£8,000–£15,000",
    saving: "Up to 75%",
  },
  {
    service: "Monthly SEO Retainer",
    factoryjet: "£500–£1,500/mo",
    average: "£1,000–£2,000/mo",
    saving: "Up to 50%",
  },
  {
    service: "AI Agent Development",
    factoryjet: "From £3,000",
    average: "Not available locally",
    saving: "New capability",
  },
  {
    service: "AI SEO (GEO / AEO / AIO)",
    factoryjet: "Included in SEO plans",
    average: "Not available locally",
    saving: "New capability",
  },
  {
    service: "Annual Website Maintenance",
    factoryjet: "From £99/mo",
    average: "£200–£400/mo",
    saving: "Up to 75%",
  },
  {
    service: "Pay Monthly Website",
    factoryjet: "Custom quote available",
    average: "£49–£85/mo",
    saving: "Flexible",
  },
];

const INCLUDES = [
  "Next.js 15 build",
  "Lighthouse 90+ guaranteed",
  "Full schema stack",
  "90-day post-launch support",
  "Mobile-first responsive",
  "GSAP animations",
  "Core Web Vitals",
  "Google Search Console setup",
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableSectionElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const { openModal: openContactModal } = useContactModal();
  const openModal = () => openContactModal('uk', 'default');

  useGSAP(
    () => {
      const prefersReduced =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const trigger = {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      };

      gsap.from(headerRef.current, {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: trigger,
      });

      if (tableRef.current) {
        gsap.from(tableRef.current.querySelectorAll("tr"), {
          y: 10,
          autoAlpha: 0,
          duration: 0.5,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tableRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      gsap.from(footerRef.current, {
        y: 20,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
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
      id="pricing"
      style={{ background: "#F8FAFC", padding: "128px 0 32px" }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1200px" }}>

        {/* ── Header ───────────────────────────────────────────────────── */}
        <div ref={headerRef}>
          <p
            className="font-semibold uppercase"
            style={{
              color: "#0052CC",
              fontSize: "13px",
              letterSpacing: "0.15em",
              marginBottom: "16px",
            }}
          >
            Transparent Pricing
          </p>

          <h2
            className="font-clash"
            style={{
              fontSize: "clamp(2rem, 1.7rem + 1.3vw, 3rem)",
              lineHeight: 1.15,
              color: "#0a0f1c",
              maxWidth: "750px",
              marginBottom: "16px",
            }}
          >
            How Much Does Web Design, E-Commerce &amp; AI Development Cost in Leeds?
          </h2>

          <p
            style={{
              fontSize: "17px",
              color: "#374151",
              lineHeight: 1.7,
              maxWidth: "65ch",
              marginBottom: "48px",
            }}
          >
            Local agencies typically charge £4,500–£8,000 for a standard business website, £8,000–£15,000 for an e-commerce store, and £1,000–£2,000 per month for SEO. FactoryJet delivers superior technology at significantly lower price points because our AI-augmented workflow and global delivery model eliminate the overhead that inflates UK agency pricing.
          </p>
        </div>

        {/* ── Pricing table ─────────────────────────────────────────────── */}
        <div
          className="overflow-x-auto rounded-xl"
          style={{ border: "1px solid #E5E7EB" }}
        >
          <table
            className="w-full"
            style={{ borderCollapse: "collapse", minWidth: "560px" }}
          >
            <thead>
              <tr>
                {/* Service */}
                <th
                  className="text-left uppercase"
                  style={{
                    background: "#F8FAFC",
                    padding: "14px 20px",
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    color: "#4B5563",
                    fontWeight: 600,
                    width: "34%",
                    borderBottom: "1px solid #E5E7EB",
                  }}
                >
                  Service
                </th>
                {/* FactoryJet — highlighted */}
                <th
                  className="text-left uppercase"
                  style={{
                    background: "#0052CC",
                    padding: "14px 20px",
                    fontSize: "13px",
                    letterSpacing: "0.08em",
                    color: "white",
                    fontWeight: 700,
                    width: "22%",
                    borderBottom: "1px solid #0047b3",
                  }}
                >
                  FactoryJet
                </th>
                {/* Leeds Avg */}
                <th
                  className="text-left uppercase"
                  style={{
                    background: "#F8FAFC",
                    padding: "14px 20px",
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    color: "#4B5563",
                    fontWeight: 600,
                    width: "27%",
                    borderBottom: "1px solid #E5E7EB",
                  }}
                >
                  Leeds Avg
                </th>
                {/* Saving */}
                <th
                  className="text-left uppercase"
                  style={{
                    background: "#F8FAFC",
                    padding: "14px 20px",
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    color: "#047857",
                    fontWeight: 700,
                    width: "17%",
                    borderBottom: "1px solid #E5E7EB",
                  }}
                >
                  Your Saving
                </th>
              </tr>
            </thead>

            <tbody ref={tableRef}>
              {PRICING_ROWS.map(({ service, factoryjet, average, saving }, i) => (
                <tr
                  key={service}
                  style={{ background: i % 2 === 0 ? "white" : "#FAFBFC" }}
                >
                  {/* Service */}
                  <td
                    style={{
                      padding: "14px 20px",
                      fontSize: "14px",
                      color: "#374151",
                      fontWeight: 500,
                      borderBottom: "1px solid #F3F4F6",
                    }}
                  >
                    {service}
                  </td>
                  {/* FactoryJet value */}
                  <td
                    style={{
                      padding: "14px 20px",
                      borderBottom: "1px solid #dbeafe",
                      background: i % 2 === 0 ? "#F5F8FF" : "#EEF4FF",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#0052CC",
                        fontWeight: 600,
                      }}
                    >
                      {factoryjet}
                    </span>
                  </td>
                  {/* Leeds Avg */}
                  <td
                    style={{
                      padding: "14px 20px",
                      fontSize: "14px",
                      color: "#6B7280",
                      borderBottom: "1px solid #F3F4F6",
                    }}
                  >
                    {average}
                  </td>
                  {/* Saving */}
                  <td
                    style={{
                      padding: "14px 20px",
                      borderBottom: "1px solid #F3F4F6",
                    }}
                  >
                    <span
                      className="font-clash font-bold"
                      style={{ fontSize: "15px", color: "#10B981" }}
                    >
                      {saving}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Footer: includes box + CTA ───────────────────────────────── */}
        <div ref={footerRef}>

          {/* What's included */}
          <div
            className="rounded-xl"
            style={{
              background: "white",
              border: "1px solid #E5E7EB",
              padding: "24px",
              marginTop: "32px",
              marginBottom: "40px",
            }}
          >
            <p
              className="font-semibold uppercase"
              style={{
                color: "#0052CC",
                fontSize: "12px",
                letterSpacing: "0.12em",
                marginBottom: "16px",
              }}
            >
              Every Project Includes
            </p>

            <div className="flex flex-wrap" style={{ gap: "12px 24px" }}>
              {INCLUDES.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2"
                  style={{ fontSize: "14px", color: "#374151" }}
                >
                  <CheckCircle2
                    size={15}
                    style={{ color: "#10B981", flexShrink: 0 }}
                    aria-hidden="true"
                  />
                  {item}
                </span>
              ))}
            </div>

            <p
              className="font-medium"
              style={{
                fontSize: "13px",
                color: "#6B7280",
                marginTop: "16px",
              }}
            >
              No hidden fees. No &ldquo;Phase 2&rdquo; upsells. No monthly
              hosting lock-in.
            </p>
          </div>

          {/* CTA row */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                trackCTAClick('get_your_free_quote', 'leeds_pricing', 'primary');
                trackButtonClick('get_your_free_quote', 'leeds_pricing');
                openModal();
              }}
              className="px-8 py-4 rounded-lg text-white font-semibold text-center transition-all duration-200 hover:brightness-110"
              style={{ background: "#FF6B35", fontSize: "15px" }}
            >
              Get Your Free Quote →
            </button>
            <a
              href="https://wa.me/919699977699"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-semibold text-center transition-all duration-200"
              style={{
                border: "1px solid #E5E7EB",
                color: "#374151",
                fontSize: "15px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#0052CC";
                (e.currentTarget as HTMLAnchorElement).style.color = "#0052CC";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E5E7EB";
                (e.currentTarget as HTMLAnchorElement).style.color = "#374151";
              }}
            >
              WhatsApp Us Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
