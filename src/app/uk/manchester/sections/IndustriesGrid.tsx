"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";


interface Industry {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
}

const INDUSTRIES: Industry[] = [
  {
    name: "Tech & SaaS Companies",
    description:
      "Product landing pages, marketing sites and developer portals for the city's digital sector.",
    image: "/images/manchester/industry-tech.webp",
    imageAlt: "Tech and SaaS businesses in Manchester",
  },
  {
    name: "Financial & Professional Services",
    description:
      "Advisers, law firms and consultancies that need a site conveying trust and compliance.",
    image: "/images/manchester/industry-finance.webp",
    imageAlt: "Financial services businesses in Manchester",
  },
  {
    name: "Creative & Media Agencies",
    description:
      "MediaCityUK hosts the BBC, ITV and dock10. Your site is your portfolio's portfolio.",
    image: "/images/manchester/industry-media.webp",
    imageAlt: "Creative and media agencies in Manchester",
  },
  {
    name: "E-Commerce & Retail",
    description:
      "From the Arndale to the Northern Quarter independents. Beat template stores on speed.",
    image: "/images/manchester/industry-hospitality.webp",
    imageAlt: "E-commerce and retail businesses in Manchester",
  },
  {
    name: "Manufacturing & Engineering",
    description:
      "B2B pages that pull RFQs and rank for the long-tail terms buyers actually use.",
    image: "/images/manchester/industry-manufacturing.webp",
    imageAlt: "Manufacturing and engineering businesses in Manchester",
  },
  {
    name: "Health & Life Sciences",
    description:
      "Accessible, fast sites built to WCAG 2.2 AA for health-tech and research teams.",
    image: "/images/manchester/industry-health.webp",
    imageAlt: "Health and life sciences businesses in Manchester",
  },
];

export default function IndustriesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);
  const gridRef    = useRef<HTMLUListElement>(null);

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
              color: "#B23E13",
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
            Web Design for Every Industry Driving Manchester&apos;s £100
            Billion Economy
          </h2>
        </div>

        {/* ── Photography grid ─────────────────────────────────────────── */}
        <ul
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
            <li
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
                className="object-cover will-change-transform transition-transform duration-500 group-hover:scale-[1.05]"
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
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
