"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { BarChart3, Zap, Globe, Code, Target, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SCHEMA_ITEMS = [
  "LocalBusiness Schema",
  "Service Schema",
  "FAQPage Schema",
  "BreadcrumbList",
  "HowTo Schema",
];

interface StandardCard {
  icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
  title: string;
  description: string;
  image?: { src: string; alt: string };
}

const STANDARD_CARDS: StandardCard[] = [
  {
    icon: Zap,
    title: "Next.js 15 Foundation",
    description:
      "Server-side rendered React that loads in under 1.5 seconds. The same framework Vercel, Notion, and TikTok use — now for Manchester businesses.",
    image: {
      src: "/images/manchester/mockup-responsive.webp",
      alt: "Responsive website design mockup showing desktop and mobile",
    },
  },
  {
    icon: Globe,
    title: "GSAP + Lenis Animation",
    description:
      "Smooth, butter-like scroll experiences and micro-interactions that signal quality without sacrificing performance.",
    image: {
      src: "/images/manchester/mockup-ecommerce.webp",
      alt: "E-commerce storefront design mockup",
    },
  },
  {
    icon: Code,
    title: "Tailwind CSS 4 Styling",
    description:
      "Every Manchester website ships with under 20KB of CSS — compared to 200–500KB typical of WordPress theme builders.",
  },
  {
    icon: Target,
    title: "Conversion-Engineered Forms",
    description:
      "Multi-step modal forms with auto-advance. Our Sheffield page shipped SEO 100, Performance 92.",
    image: {
      src: "/images/manchester/mockup-dashboard.webp",
      alt: "Web analytics dashboard showing traffic growth",
    },
  },
];

export default function ServiceExplanation() {
  const sectionRef      = useRef<HTMLElement>(null);
  const headerRef       = useRef<HTMLDivElement>(null);
  const featuredRef     = useRef<HTMLDivElement>(null);
  const standardGridRef = useRef<HTMLDivElement>(null);

  // ── GSAP: header + featured card reveals ─────────────────────────────────
  // Service cards are handled separately by IntersectionObserver below.
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

      gsap.from(headerRef.current, {
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: commonTrigger,
      });

      gsap.from(featuredRef.current, {
        y: 30, autoAlpha: 0, duration: 0.7, delay: 0.2, ease: "power3.out",
        scrollTrigger: commonTrigger,
      });
    },
    { scope: sectionRef }
  );

  // ── IntersectionObserver: stagger reveal for service cards ────────────────
  // Uses direct DOM manipulation so transition-delay doesn't bleed into hover.
  // Phase 1 (reveal): opacity 700ms ease-out + per-card transitionDelay.
  // Phase 2 (hover):  after animation settles, swap to 300ms hover transition.
  useEffect(() => {
    const el = standardGridRef.current;
    if (!el) return;

    const cards = Array.from(el.querySelectorAll<HTMLElement>(".service-card"));
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      // Show everything immediately — no animation
      cards.forEach((card) => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      });
      return;
    }

    // ── Set initial hidden state ──────────────────────────────────────────
    cards.forEach((card, i) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(24px)";
      card.style.transition = "opacity 700ms ease-out, transform 700ms ease-out";
      card.style.transitionDelay = `${i * 150}ms`;
    });

    const REVEAL_DURATION = 700; // ms — matches transition duration above

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        cards.forEach((card, i) => {
          const delay = i * 150;

          // Trigger the CSS transition
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";

          // After this card's animation fully settles, swap to hover transition
          const timerId = window.setTimeout(() => {
            card.style.transition =
              "transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease";
            card.style.transitionDelay = "0ms";
          }, REVEAL_DURATION + delay);

          // Clean up timer if component unmounts mid-animation
          card.dataset.revealTimer = String(timerId);
        });

        observer.disconnect();
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cards.forEach((card) => {
        const id = Number(card.dataset.revealTimer);
        if (id) window.clearTimeout(id);
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="service-explanation"
      style={{ background: "#F8FAFC", padding: "128px 0" }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1400px" }}>

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
            What We Build
          </p>

          <h2
            className="font-clash"
            style={{
              fontSize: "clamp(2rem, 1.7rem + 1.3vw, 3rem)",
              lineHeight: 1.15,
              color: "#0a0f1c",
              maxWidth: "700px",
              marginBottom: "16px",
            }}
          >
            AI-Native Web Design for Manchester Businesses That Refuse to Be
            Average
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
            FactoryJet doesn&apos;t build websites. We engineer digital revenue
            machines. Every Manchester project starts with conversion
            architecture — mapping the exact journey from first visit to
            qualified lead.
          </p>
        </div>

        {/* ── Bento grid ───────────────────────────────────────────────── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: "20px" }}
        >

          {/* FEATURED CARD — spans 2 columns */}
          <div
            ref={featuredRef}
            className="lg:col-span-2 rounded-xl"
            style={{
              background: "white",
              border: "1px solid #E5E7EB",
              padding: "32px",
            }}
          >
            <div className="flex flex-col lg:flex-row gap-10">

              {/* 60% — text side */}
              <div style={{ flex: "0 0 60%" }}>
                <div
                  className="flex items-center justify-center rounded-full mb-5"
                  style={{ width: "48px", height: "48px", background: "#EEF2FF" }}
                  aria-hidden="true"
                >
                  <BarChart3 size={22} color="#0052CC" strokeWidth={2} />
                </div>

                <p
                  className="font-clash"
                  style={{ fontSize: "24px", color: "#0a0f1c", marginBottom: "12px", fontWeight: 700, lineHeight: 1.2 }}
                >
                  Schema Stack for AI Visibility — GEO &amp; AEO Built In
                </p>

                <p style={{ fontSize: "16px", color: "#374151", lineHeight: 1.65 }}>
                  Every page ships with LocalBusiness, Service, FAQPage,
                  BreadcrumbList, and HowTo structured data. This is GEO and
                  AEO — when someone asks Claude or ChatGPT &ldquo;who does web
                  design in Manchester?&rdquo;, schema-rich pages are what get
                  cited.
                </p>
              </div>

              {/* 40% — checklist side */}
              <div
                className="flex flex-col justify-center"
                style={{ flex: "0 0 40%" }}
              >
                <ul className="flex flex-col" style={{ gap: "12px" }}>
                  {SCHEMA_ITEMS.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2
                        size={18}
                        style={{ color: "#10B981", flexShrink: 0 }}
                        aria-hidden="true"
                      />
                      <span style={{ fontSize: "15px", color: "#374151" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* STANDARD CARDS — 2×2 grid inside the 2-col outer grid */}
          <div
            ref={standardGridRef}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 items-start"
            style={{ gap: "20px" }}
          >
            {STANDARD_CARDS.map(({ icon: Icon, title, description, image }) => (
              <div
                key={title}
                className="service-card rounded-xl"
                style={{
                  background: "white",
                  border: "1px solid #E5E7EB",
                  padding: "24px",
                  cursor: "default",
                  alignSelf: "start",   // prevents grid from stretching this card to match taller neighbours
                  // opacity / transform / transition are set by the useEffect
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-3px)";
                  el.style.boxShadow =
                    "0 10px 25px -5px rgba(0,0,0,0.1), 0 4px 10px -2px rgba(0,0,0,0.05)";
                  el.style.borderColor = "#0052CC";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                  el.style.borderColor = "#E5E7EB";
                }}
              >
                {/* Icon */}
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{ width: "44px", height: "44px", background: "#EEF2FF" }}
                  aria-hidden="true"
                >
                  <Icon size={20} color="#0052CC" strokeWidth={2} />
                </div>

                <h3
                  className="font-clash"
                  style={{
                    fontSize: "20px",
                    color: "#0a0f1c",
                    marginTop: "20px",
                    marginBottom: "8px",
                  }}
                >
                  {title}
                </h3>

                <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.6 }}>
                  {description}
                </p>

                {/* ── Mockup image (data-driven cards) ─────────────────── */}
                {image && (
                  <div className="mt-4 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={225}
                      className="w-full h-auto hover:scale-[1.03] transition-transform duration-300 block"
                    />
                  </div>
                )}

                {/* ── Tailwind CSS card: mockup added directly (no image in data) */}
                {title === "Tailwind CSS 4 Styling" && (
                  <div className="mt-6 rounded-lg overflow-hidden">
                    <Image
                      src="/images/manchester/mockup-responsive.webp"
                      alt="Responsive website design across desktop, tablet and mobile devices"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
