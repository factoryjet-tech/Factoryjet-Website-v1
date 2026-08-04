"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { BarChart3, Zap, Globe, Code, Target, CheckCircle2 } from "lucide-react";


const SCHEMA_ITEMS = [
  "Next.js 15 + React",
  "WordPress & Headless CMS",
  "Tailwind CSS 4",
  "Mobile-first responsive",
  "Lighthouse 90+ guaranteed",
  "Fixed-price, quoted up front",
];

interface StandardCard {
  icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
  title: string;
  description: string;
  image?: { src: string; alt: string };
}

const STANDARD_CARDS: StandardCard[] = [
  {
    icon: Globe,
    title: "E-Commerce Development",
    description:
      "Shopify, Shopify Plus, WooCommerce, and headless commerce for Leeds retailers and DTC brands. Custom themes, payment gateway integration (Stripe, PayPal, Klarna), Royal Mail shipping, product SEO, and AI-powered recommendations. From Kirkgate Market independents to national fashion brands. We also build on WordPress with WooCommerce for businesses that prefer the WordPress ecosystem.",
    image: {
      src: "/images/leeds/mockup-ecommerce.webp",
      alt: "E-commerce storefront design mockup",
    },
  },
  {
    icon: Code,
    title: "AI Agent Development",
    description:
      "Custom AI agents that handle customer service 24/7, qualify leads, process documents, and automate workflows. GDPR compliant, integrated with your CRM and tools. For Leeds financial services, legal, healthcare, and retail businesses. ROI within 3–6 months.",
    image: {
      src: "/images/leeds/mockup-ai-agent.jpg",
      alt: "Hand holding a smartphone with AI chatbot app representing AI agent automation",
    },
  },
  {
    icon: Zap,
    title: "AI SEO | GEO, AEO & AI Search Visibility",
    description:
      "Your customers are asking ChatGPT, Perplexity, and Google AI Overviews for recommendations. We build citation-ready content, optimise for AI crawlers, and implement the schema markup that gets your Leeds business mentioned. No other Leeds agency offers this.",
    image: {
      src: "/images/leeds/mockup-seo.jpg",
      alt: "SEO analytics dashboard showing AI search visibility metrics",
    },
  },
  {
    icon: Target,
    title: "Conversion-Engineered Forms",
    description:
      "Multi-step forms with auto-advance, inline validation, and progress indicators. Every form tracks submissions as Google Ads conversions, so you know exactly which traffic sources generate leads, not just clicks.",
    image: {
      src: "/images/leeds/mockup-dashboard.webp",
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

    const REVEAL_DURATION = 700; // ms, matches transition duration above

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
              color: "#B23E13",
              fontSize: "13px",
              letterSpacing: "0.15em",
              marginBottom: "16px",
            }}
          >
            WHAT WE BUILD
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
            Everything Your Leeds Business Needs to Compete, and Win, Online
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
            FactoryJet designs and develops websites on Next.js 15, Tailwind CSS 4, and WordPress: the right technology for your business goals. Whether you need a modern React application or a WordPress site with advanced customisation, we deliver websites that score 90+ on Google Lighthouse Performance, load in under two seconds, and are built for both human visitors and AI crawlers.
          </p>
        </div>

        {/* ── Bento grid ───────────────────────────────────────────────── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: "20px" }}
        >

          {/* FEATURED CARD, spans 2 columns */}
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

              {/* 60%, text side */}
              <div style={{ flex: "0 0 60%" }}>
                <div
                  className="flex items-center justify-center rounded-full mb-5"
                  style={{ width: "48px", height: "48px", background: "#EEF2FF" }}
                  aria-hidden="true"
                >
                  <BarChart3 size={22} color="#F05A28" strokeWidth={2} />
                </div>

                <p
                  className="font-clash"
                  style={{ fontSize: "24px", color: "#0a0f1c", marginBottom: "12px", fontWeight: 700, lineHeight: 1.2 }}
                >
                  Web Design &amp; Development
                </p>

                <p style={{ fontSize: "16px", color: "#374151", lineHeight: 1.65 }}>
                  Whether you are a financial services firm near Leeds Trinity, a fashion brand in the Victoria Quarter, or a legal practice in the city centre, we build websites that convert visitors into clients. Next.js 15, Tailwind CSS 4, WordPress, and headless CMS builds. Mobile-first responsive, Lighthouse 90+ guaranteed. Every build is fixed-price and quoted up front after a free discovery call, so you know the full cost before work starts.
                </p>
              </div>

              {/* 40%, checklist side */}
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

          {/* STANDARD CARDS, 2×2 grid inside the 2-col outer grid */}
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
                  el.style.borderColor = "#F05A28";
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
                  <Icon size={20} color="#F05A28" strokeWidth={2} />
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
                  <div className="mt-4 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-[225px]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-300 block"
                    />
                  </div>
                )}

                {/* ── Tailwind CSS card: mockup added directly (no image in data) */}
                {title === "Tailwind CSS 4 Styling" && (
                  <div className="mt-6 rounded-lg overflow-hidden">
                    <Image
                      src="/images/leeds/mockup-responsive.webp"
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
