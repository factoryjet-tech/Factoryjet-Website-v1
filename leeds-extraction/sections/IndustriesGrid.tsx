"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

gsap.registerPlugin(ScrollTrigger);

interface Industry {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
}

const INDUSTRIES: Industry[] = [
  {
    name: "Financial Services & FinTech",
    description:
      "With HSBC's UK headquarters, First Direct, and a growing FinTech cluster, Leeds is the UK's largest financial centre outside London. We build secure, FCA-compliant websites and AI-powered customer service agents for financial services firms across the Northern Square Mile.",
    image: "/images/leeds/industry-finance.webp",
    imageAlt: "Financial services and FinTech businesses in Leeds",
  },
  {
    name: "Legal & Professional Services",
    description:
      "Leeds has the largest legal sector outside London — Eversheds Sutherland, Addleshaw Goddard, DLA Piper, and hundreds of smaller practices. We build authority-establishing websites that generate new client enquiries and develop AI document analysis agents that save solicitors hours of manual contract review.",
    image: "/images/leeds/industry-legal.jpg",
    imageAlt: "Legal and professional services firms in Leeds",
  },
  {
    name: "Fashion & Retail",
    description:
      "From the independent boutiques of Victoria Quarter to national brands headquartered in the city, Leeds' fashion and retail sector demands beautiful, high-converting e-commerce experiences. Custom Shopify themes, AI-powered product recommendations, and product SEO that ranks in both Google Shopping and AI search results.",
    image: "/images/leeds/industry-hospitality.webp",
    imageAlt: "Fashion and retail businesses in Leeds",
  },
  {
    name: "Digital & Technology",
    description:
      "Leeds' tech sector is growing at 18% year-over-year with 12,000 jobs, anchored by Sky Betting & Gaming, NHS Digital, and a vibrant startup ecosystem. We build the performant React and Next.js applications that tech companies demand.",
    image: "/images/leeds/industry-tech.webp",
    imageAlt: "Digital and technology companies in Leeds",
  },
  {
    name: "Healthcare & Health-Tech",
    description:
      "With NHS Digital headquartered in Leeds and a growing cluster of health-tech businesses, the city is a healthcare innovation hub. We develop WCAG-compliant, accessible websites and deploy AI agents that handle patient enquiries, appointment scheduling, and triage.",
    image: "/images/leeds/industry-health-new.jpg",
    imageAlt: "Healthcare and health-tech businesses in Leeds",
  },
  {
    name: "Education",
    description:
      "The University of Leeds, Leeds Beckett, and Leeds Arts University draw over 60,000 students annually. We build dynamic, student-focused web platforms and AI chatbots that handle admissions queries and student support at scale.",
    image: "/images/leeds/industry-education.jpg",
    imageAlt: "Education institutions in Leeds",
  },
];

export default function IndustriesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

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

      if (gridRef.current) {
        gsap.from(gridRef.current.querySelectorAll(".industry-card"), {
          y: 30,
          autoAlpha: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="industries-grid"
      style={{ background: "#FFFFFF", padding: "128px 0" }}
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
            Industries We Serve
          </p>

          <h2
            className="font-clash"
            style={{
              fontSize: "clamp(2rem, 1.7rem + 1.3vw, 3rem)",
              lineHeight: 1.15,
              color: "#0a0f1c",
              maxWidth: "750px",
              marginBottom: "48px",
            }}
          >
            Digital Solutions Built for Every Major Leeds Industry
          </h2>
        </div>

        {/* ── Photography grid ─────────────────────────────────────────── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {INDUSTRIES.map(({ name, description, image, imageAlt }) => (
            /*
             * Each card is a self-contained photo tile:
             *  - position:relative + overflow:hidden clips the scaled image on hover
             *  - min-h-[240px] guarantees a readable card height
             *  - .industry-card class kept for GSAP stagger compatibility
             *  - group enables Tailwind group-hover on the fill <Image>
             */
            <div
              key={name}
              className="industry-card group relative overflow-hidden rounded-xl h-[200px] md:h-[280px]"
              style={{ cursor: "default" }}
            >
              {/* ── Background photo ──────────────────────────────────── */}
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority={false}
                quality={75}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                style={{ zIndex: 0 }}
              />

              {/* ── Dark gradient overlay ──────────────────────────────── */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                style={{ zIndex: 1 }}
                aria-hidden="true"
              />

              {/* ── Text content ──────────────────────────────────────── */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{ zIndex: 2 }}
              >
                <h3
                  className="font-clash text-white font-bold text-xl mb-1"
                >
                  {name}
                </h3>
                <p className="text-white/70 text-sm mt-1 line-clamp-2 leading-snug">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
