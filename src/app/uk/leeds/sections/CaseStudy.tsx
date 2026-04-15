"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";


const BEFORE_METRICS = [
  { label: "Lighthouse Performance", value: "38 / 100" },
  { label: "Mobile load time", value: "6.2 seconds" },
  { label: "Contact form completion", value: "1.2%" },
  { label: "Local search ranking", value: "Not ranking" },
];

// Numeric values for count-up; null = text reveal only
const AFTER_METRICS = [
  { label: "Lighthouse Performance", display: "92 / 100", countTo: 92, suffix: " / 100" },
  { label: "Mobile load time", display: "Under 1.5s", countTo: null, suffix: "" },
  { label: "Form completion (target)", display: "8–12%", countTo: null, suffix: "" },
  { label: "AI search visibility", display: "GEO + AEO ready", countTo: null, suffix: "" },
];

// ── Before/After image slider ─────────────────────────────────────────────────
function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const clamp = (v: number) => Math.min(95, Math.max(5, v));

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    setPosition(clamp(((clientX - left) / width) * 100));
  }, []);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    isDragging.current = true;
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging.current) updatePosition(e.clientX);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (isDragging.current) updatePosition(e.touches[0].clientX);
    };
    const stopDrag = () => { isDragging.current = false; };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", stopDrag);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", stopDrag);
    };
  }, [updatePosition]);

  return (
    <div className="mt-16">
      {/* Slider container */}
      <div
        ref={containerRef}
        className="relative mx-auto rounded-2xl overflow-hidden shadow-lg select-none"
        style={{
          maxWidth: "900px",
          aspectRatio: "16 / 10",
          cursor: "col-resize",
          touchAction: "none",
        }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        aria-label="Before and after website comparison. Drag to compare."
        role="img"
      >
        {/* Layer 0 — BEFORE image (full width, base layer) */}
        <Image
          src="/images/leeds/case-before.webp"
          alt="Leeds financial advisory firm website before FactoryJet redesign — slow, outdated WordPress theme"
          fill
          quality={80}
          className="object-cover object-top"
          style={{ zIndex: 0 }}
          draggable={false}
        />

        {/* Layer 1 — AFTER image (clipped to reveal from left) */}
        <div
          className="absolute inset-0"
          style={{
            zIndex: 1,
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        >
          <Image
            src="/images/leeds/case-after.webp"
            alt="Leeds financial advisory firm website after FactoryJet redesign — fast, modern, conversion-engineered"
            fill
            quality={80}
            className="object-cover object-top"
            draggable={false}
          />
        </div>

        {/* Layer 2 — Vertical divider line */}
        <div
          className="absolute top-0 bottom-0 pointer-events-none"
          style={{
            zIndex: 2,
            left: `${position}%`,
            transform: "translateX(-50%)",
            width: "2px",
            background: "white",
            boxShadow: "0 0 8px rgba(0,0,0,0.4)",
          }}
          aria-hidden="true"
        />

        {/* Layer 3 — Drag handle */}
        <div
          className="absolute top-1/2 flex items-center justify-center rounded-full pointer-events-none"
          style={{
            zIndex: 3,
            left: `${position}%`,
            transform: "translate(-50%, -50%)",
            width: "44px",
            height: "44px",
            background: "white",
            boxShadow: "0 4px 16px rgba(0,0,0,0.35)",
            fontSize: "16px",
            color: "#0052CC",
            fontWeight: 700,
            letterSpacing: "-1px",
            userSelect: "none",
          }}
          aria-hidden="true"
        >
          ⟨⟩
        </div>

        {/* BEFORE badge — top-left */}
        <div
          className="absolute top-4 left-4 rounded-full px-3 py-1 pointer-events-none"
          style={{
            zIndex: 4,
            background: "rgba(239,68,68,0.9)",
            fontSize: "11px",
            fontWeight: 700,
            color: "white",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
          aria-hidden="true"
        >
          Before
        </div>

        {/* AFTER badge — top-right */}
        <div
          className="absolute top-4 right-4 rounded-full px-3 py-1 pointer-events-none"
          style={{
            zIndex: 4,
            background: "rgba(16,185,129,0.9)",
            fontSize: "11px",
            fontWeight: 700,
            color: "white",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
          aria-hidden="true"
        >
          After
        </div>
      </div>

      {/* Caption */}
      <p
        className="text-center mx-auto mt-4"
        style={{ fontSize: "14px", color: "#4B5563", maxWidth: "600px" }}
      >
        Drag to compare: A Leeds professional services firm before and after
        the FactoryJet redesign
      </p>
    </div>
  );
}

export default function CaseStudy() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const beforeCardRef = useRef<HTMLDivElement>(null);
  const afterCardRef = useRef<HTMLDivElement>(null);
  // Refs for each "after" metric value span — only the countable one matters
  const afterValueRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      const prefersReduced =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Header fade
      gsap.from(headerRef.current, {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Cards slide in from sides
      gsap.from(beforeCardRef.current, {
        x: prefersReduced ? 0 : -30,
        y: prefersReduced ? 20 : 0,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: beforeCardRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(afterCardRef.current, {
        x: prefersReduced ? 0 : 30,
        y: prefersReduced ? 20 : 0,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: afterCardRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      if (prefersReduced) return;

      // Count-up for Lighthouse score (index 0 in after metrics)
      const counterEl = afterValueRefs.current[0];
      if (counterEl) {
        const obj = { val: 0 };
        gsap.fromTo(
          obj,
          { val: 0 },
          {
            val: 92,
            duration: 1.8,
            ease: "power2.out",
            onUpdate() {
              counterEl.textContent = `${Math.round(obj.val)} / 100`;
            },
            scrollTrigger: {
              trigger: afterCardRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="case-study"
      style={{ background: "#F0F4FF", padding: "128px 0", overflow: "hidden" }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ maxWidth: "1200px" }}>

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
            What It Looks Like in Practice
          </p>

          <h2
            className="font-clash"
            style={{
              fontSize: "clamp(2rem, 1.7rem + 1.2vw, 2.8rem)",
              lineHeight: 1.15,
              color: "#0a0f1c",
              marginBottom: "16px",
            }}
          >
            A Leeds Business, Before and After FactoryJet
          </h2>

          <p
            className="mx-auto"
            style={{
              fontSize: "16px",
              fontStyle: "italic",
              color: "#6B7280",
              maxWidth: "700px",
              lineHeight: 1.7,
              marginBottom: "48px",
            }}
          >
            A financial advisory firm in the Leeds financial district near Park Row needed to replace a
            4-year-old WordPress site that scored 38 on Lighthouse Performance
            and ranked nowhere for &ldquo;financial advisor Leeds.&rdquo;
            Their site loaded in 6.2 seconds on mobile. Their contact form had
            a 1.2% completion rate.
          </p>
        </div>

        {/* ── Split cards ──────────────────────────────────────────────── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 text-left"
          style={{ gap: "24px" }}
        >

          {/* BEFORE card */}
          <div
            ref={beforeCardRef}
            className="rounded-xl"
            style={{
              background: "white",
              border: "1px solid #E5E7EB",
              padding: "32px",
            }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full mb-8"
              style={{ background: "#FEF2F2", padding: "4px 12px" }}>
              <span
                className="rounded-full flex-shrink-0"
                style={{ width: "8px", height: "8px", background: "#EF4444" }}
                aria-hidden="true"
              />
              <span
                className="font-semibold uppercase"
                style={{ fontSize: "12px", color: "#EF4444", letterSpacing: "0.05em" }}
              >
                Before FactoryJet
              </span>
            </div>

            {/* Metrics */}
            <div className="flex flex-col">
              {BEFORE_METRICS.map(({ label, value }, i) => (
                <div
                  key={label}
                  className="flex items-center justify-between"
                  style={{
                    padding: "16px 0",
                    borderBottom:
                      i < BEFORE_METRICS.length - 1
                        ? "1px solid #F3F4F6"
                        : "none",
                  }}
                >
                  <span style={{ fontSize: "15px", color: "#6B7280" }}>
                    {label}
                  </span>
                  <span
                    className="font-clash font-bold"
                    style={{ fontSize: "20px", color: "#EF4444" }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* AFTER card */}
          <div
            ref={afterCardRef}
            className="rounded-xl"
            style={{
              background: "white",
              border: "1px solid #E5E7EB",
              padding: "32px",
            }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full mb-8"
              style={{ background: "#ECFDF5", padding: "4px 12px" }}>
              <span
                className="rounded-full flex-shrink-0"
                style={{ width: "8px", height: "8px", background: "#10B981" }}
                aria-hidden="true"
              />
              <span
                className="font-semibold uppercase"
                style={{ fontSize: "12px", color: "#10B981", letterSpacing: "0.05em" }}
              >
                After FactoryJet
              </span>
            </div>

            {/* Metrics */}
            <div className="flex flex-col">
              {AFTER_METRICS.map(({ label, display, countTo }, i) => (
                <div
                  key={label}
                  className="flex items-center justify-between"
                  style={{
                    padding: "16px 0",
                    borderBottom:
                      i < AFTER_METRICS.length - 1
                        ? "1px solid #F3F4F6"
                        : "none",
                  }}
                >
                  <span style={{ fontSize: "15px", color: "#6B7280" }}>
                    {label}
                  </span>
                  <span
                    ref={(el) => {
                      afterValueRefs.current[i] = el;
                    }}
                    className="font-clash font-bold"
                    style={{ fontSize: "20px", color: "#10B981" }}
                    // Pre-fill display value; count-up overrides index 0 only
                    suppressHydrationWarning
                  >
                    {/* countTo=null means static; countTo set means GSAP will update */}
                    {countTo !== null ? "0 / 100" : display}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Before/After image comparison slider ─────────────────────── */}
        <BeforeAfterSlider />

      </div>
    </section>
  );
}
