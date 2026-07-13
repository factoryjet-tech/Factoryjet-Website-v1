"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

// ── City data ─────────────────────────────────────────────────────────────────
type City = {
  slug: string;
  name: string;
  industries: string;
  population: string;
  businesses: string;
  col: string;
  active?: boolean;
};

const CITIES: City[] = [
  // Row 1
  {
    slug: "leeds",
    name: "Leeds",
    industries: "Financial services, legal, fashion",
    population: "800,000",
    businesses: "42,000",
    col: "sm:col-span-2 lg:col-span-3",
  },
  {
    slug: "manchester",
    name: "Manchester",
    industries: "Tech, media, professional services",
    population: "2.8M metro",
    businesses: "98,000+",
    col: "sm:col-span-2 lg:col-span-3",
  },
  // Row 2
  {
    slug: "birmingham",
    name: "Birmingham",
    industries: "Manufacturing, retail, finance",
    population: "2.6M metro",
    businesses: "84,000+",
    col: "lg:col-span-2",
  },
  {
    slug: "sheffield",
    name: "Sheffield",
    industries: "Advanced manufacturing, digital",
    population: "590,000",
    businesses: "22,000+",
    col: "lg:col-span-2",
  },
  {
    slug: "bristol",
    name: "Bristol",
    industries: "Aerospace, tech startups, creative",
    population: "470,000",
    businesses: "25,000+",
    col: "lg:col-span-2",
  },
  // Row 3
  {
    slug: "edinburgh",
    name: "Edinburgh",
    industries: "Finance, tourism, technology",
    population: "540,000",
    businesses: "30,000+",
    col: "lg:col-span-2",
  },
  {
    slug: "liverpool",
    name: "Liverpool",
    industries: "Port/logistics, creative, hospitality",
    population: "500,000",
    businesses: "14,000",
    col: "lg:col-span-2",
    active: true,
  },
  {
    slug: "glasgow",
    name: "Glasgow",
    industries: "Energy, tech, professional services",
    population: "635,000",
    businesses: "28,000+",
    col: "lg:col-span-2",
  },
  // Row 4
  {
    slug: "newcastle",
    name: "Newcastle",
    industries: "Tech, health, education",
    population: "300,000",
    businesses: "15,000+",
    col: "lg:col-span-2 lg:col-start-2",
  },
  {
    slug: "nottingham",
    name: "Nottingham",
    industries: "Retail, healthcare, education",
    population: "330,000",
    businesses: "14,000+",
    col: "lg:col-span-2",
  },
];

// ── Card ─────────────────────────────────────────────────────────────────────
function CityCard({ city }: { city: City }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current;
    if (!card) return;
    if (!window.matchMedia("(hover: hover)").matches) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotY = (x - 0.5) * 10;
    const rotX = -(y - 0.5) * 10;
    card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
    if (imgRef.current) imgRef.current.style.transform = "scale(1.05)";
  };

  const onLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    if (imgRef.current) imgRef.current.style.transform = "scale(1)";
  };

  // Use albert-dock image for liverpool, fallback to city-liverpool.jpg
  const imageSrc =
    city.slug === "liverpool"
      ? "/images/uk/city-liverpool.jpg"
      : `/images/uk/city-${city.slug}.jpg`;

  return (
    <Link
      ref={cardRef}
      href={`/uk/${city.slug}`}
      data-city-card
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={[
        "group relative block overflow-hidden transition-shadow duration-300",
        "sm:col-span-1",
        city.col,
      ].join(" ")}
      style={{
        borderRadius: 12,
        aspectRatio: "4 / 3",
        transformStyle: "preserve-3d",
        willChange: "transform",
        transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
        ...(city.active
          ? { outline: "3px solid #F05A28", outlineOffset: "2px" }
          : {}),
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "0 20px 60px -15px rgba(0,82,204,0.45), 0 4px 12px rgba(0,0,0,0.08)";
      }}
      onFocus={(e) => {
        e.currentTarget.style.boxShadow =
          "0 20px 60px -15px rgba(0,82,204,0.45), 0 4px 12px rgba(0,0,0,0.08)";
      }}
      onBlur={(e) => {
        e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
      }}
    >
      {/* Photo background */}
      <div
        ref={imgRef}
        className="absolute inset-0"
        style={{
          transition: "transform 0.4s ease-out",
          willChange: "transform",
        }}
      >
        <Image
          src={imageSrc}
          alt={`${city.name} UK city skyline`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      {/* Dark gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(10,15,28,0.98) 0%, rgba(10,15,28,0.85) 40%, rgba(10,15,28,0.4) 100%)",
        }}
      />

      {/* "You are here" badge — Liverpool only */}
      {city.active && (
        <span
          className="absolute"
          style={{
            top: 20,
            left: 20,
            backgroundColor: "#B23E13",
            color: "#FFFFFF",
            fontSize: 10,
            letterSpacing: "0.1em",
            fontWeight: 600,
            borderRadius: 9999,
            padding: "4px 10px",
            fontFamily: "var(--font-sans)",
            textTransform: "uppercase",
            zIndex: 10,
          }}
        >
          YOU ARE HERE
        </span>
      )}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3
          className="font-clash text-white"
          style={{
            fontWeight: 700,
            fontSize: "clamp(18px, 2vw, 24px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          {city.name}
        </h3>

        <p
          className="mt-1.5"
          style={{
            color: "#FFFFFF",
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(12px, 1vw, 13.5px)",
            lineHeight: 1.5,
          }}
        >
          {city.industries}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold"
            style={{
              backgroundColor: "#0A0F1C",
              color: "#FFFFFF",
              border: "1px solid rgba(255,255,255,0.2)",
              fontFamily: "var(--font-sans)",
              letterSpacing: "0.02em",
            }}
          >
            Pop {city.population}
          </span>
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold"
            style={{
              backgroundColor: "#B23E13",
              color: "#FFFFFF",
              border: "1px solid #B23E13",
              fontFamily: "var(--font-sans)",
              letterSpacing: "0.02em",
            }}
          >
            {city.businesses} businesses
          </span>
        </div>
      </div>

      {/* Chevron cue */}
      <div
        aria-hidden="true"
        className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        style={{
          backgroundColor: "#F05A28",
          color: "#ffffff",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </div>
    </Link>
  );
}

// ── Section ──────────────────────────────────────────────────────────────────
export default function Cities() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      const cards =
        gridRef.current?.querySelectorAll<HTMLElement>("[data-city-card]");
      if (!cards || !cards.length) return;

      gsap.fromTo(
        cards,
        { y: 40, scale: 0.95, autoAlpha: 0 },
        {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      return () => {
        ScrollTrigger.getAll().forEach((t) => {
          if (t.trigger && sectionRef.current?.contains(t.trigger as Node)) {
            t.kill();
          }
        });
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="cities"
      aria-label="Cities we serve across the UK"
      className="relative w-full"
      style={{ backgroundColor: "#F8FAFC", maxWidth: "100vw" }}
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
            We Build Across the UK
          </p>

          <h2
            className="font-clash mt-5"
            style={{
              color: "#0A0F1C",
              fontWeight: 700,
              fontSize: "clamp(24px, 3.5vw, 44px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 960,
            }}
          >
            We Don&rsquo;t Just Serve Liverpool. We Own the UK.
          </h2>

          <span
            aria-hidden="true"
            className="mt-6 block"
            style={{ width: 48, height: 2, backgroundColor: "#FF6B35" }}
          />

          <div
            className="mt-8 space-y-5"
            style={{
              color: "#374151",
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(15px, 1.1vw, 17px)",
              lineHeight: 1.8,
              maxWidth: 760,
            }}
          >
            <p>
              FactoryJet builds and ranks city pages across 10 UK cities —
              each one a domain authority hub pointing search traffic back to
              your sector. The compounding effect of this network means that
              when you&rsquo;re a FactoryJet client in Liverpool, you&rsquo;re
              benefiting from national domain authority, not just local SEO.
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div
          ref={gridRef}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6"
        >
          {CITIES.map((city) => (
            <CityCard key={city.slug} city={city} />
          ))}
        </div>
      </div>
    </section>
  );
}
