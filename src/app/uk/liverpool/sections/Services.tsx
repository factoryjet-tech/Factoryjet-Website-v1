"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

// ── Service data ─────────────────────────────────────────────────────────────
type Service = {
  id: string;
  number: string;
  name: string;
  heading: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  body: string[];
  imageSide: "left" | "right";
};

const SERVICES: Service[] = [
  {
    id: "local-seo",
    number: "01",
    name: "Local SEO",
    heading: "Get Into the Liverpool Map Results",
    image: "/images/uk/liverpool/service-ai-seo-liverpool.webp",
    imageAlt: "Local search results for a Liverpool business",
    imageSide: "right",
    featured: true,
    body: [
      "Google says three things decide the map results: relevance, distance and prominence. Distance you cannot change. The other two are the job. We rebuild your Google Business Profile properly, set the service area around where your customers actually are across Liverpool, Wirral, Sefton, Knowsley, St Helens and Halton, make your business name, address and phone number identical everywhere they appear, clear out the duplicate listings a previous agency left behind, and build a steady flow of genuine reviews. Then we write real area pages for the places you serve, rather than sixty thin ones for every postcode.",
    ],
  },
  {
    id: "seo",
    number: "02",
    name: "Search and content",
    heading: "The Pages You Are Missing, Written and Shipped",
    image: "/images/uk/liverpool/service-web-design-liverpool.webp",
    imageAlt: "Service pages laid out for a Liverpool website",
    imageSide: "left",
    body: [
      "Most Liverpool sites have three pages trying to do the work of fifteen. If you sell eight services and have one page listing all of them, you are competing for none of them. We do the keyword research against real search volume, separate out the terms you can realistically win, then build a page per service that answers the question in its first sentence. Existing pages get fixed before new ones get written, because a rewritten page that already has history will usually move faster than a brand new one.",
    ],
  },
  {
    id: "ai-seo",
    number: "03",
    name: "AI search",
    heading: "Getting Quoted Inside ChatGPT and Perplexity",
    image: "/images/uk/liverpool/service-ai-agents-liverpool.webp",
    imageAlt: "An AI answer citing a Liverpool business",
    imageSide: "right",
    body: [
      "AI answer tools do not rank you, they quote you. That rewards a different shape of page: a direct answer in the opening sentence, facts a machine can check, clean structured data, and the same business details everywhere the tool looks. It does not replace ordinary SEO and anybody selling it as a replacement is overselling. We treat it as a second surface on top of the same foundations, and we track which of your pages get cited, per query, across ChatGPT, Perplexity and Google AI Overviews, so you can see whether it is working rather than take our word for it.",
    ],
  },
  {
    id: "ecommerce-seo",
    number: "04",
    name: "E-commerce SEO",
    heading: "Category and Product Pages That Earn Their Traffic",
    image: "/images/uk/liverpool/service-ecommerce-liverpool.webp",
    imageAlt: "An online store category page structure",
    imageSide: "left",
    body: [
      "Online stores fail at search for predictable reasons. Filters generate thousands of near identical URLs. The same product sits in four collections and competes with itself. Category pages carry no text at all. Product structured data is missing or wrong, so nothing shows a price or a review in the results. We work on Shopify, Shopify Plus, WooCommerce and Magento, fix the crawl and duplication problems first, then build category pages that actually deserve to rank. Liverpool port proximity makes distribution cheap, and your store should be pulling demand rather than waiting for it.",
    ],
  },
];

// ── Single panel ─────────────────────────────────────────────────────────────
function Panel({ service }: { service: Service }) {
  const imageFirst = service.imageSide === "left";

  return (
    <div
      data-panel
      data-panel-id={service.id}
      className="relative flex w-full shrink-0 flex-col items-stretch overflow-hidden lg:h-screen lg:w-screen lg:flex-row lg:items-center"
    >
      {/* Image side */}
      <div
        className={[
          "relative flex items-center justify-center px-6 py-10 sm:px-10 lg:h-full lg:w-[45%] lg:px-14",
          imageFirst ? "lg:order-1" : "lg:order-2",
        ].join(" ")}
      >
        <div
          data-panel-image
          className="relative w-full rounded-xl aspect-[4/3]"
          style={{
            maxWidth: 560,
            aspectRatio: "4 / 3",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: service.featured
              ? "0 0 0 2px rgba(255,107,53,0.55), 0 30px 80px -20px rgba(255,107,53,0.35), 0 20px 60px -20px rgba(0,82,204,0.25)"
              : "0 30px 80px -20px rgba(0,82,204,0.15), 0 10px 40px -10px rgba(0,0,0,0.5)",
          }}
        >
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
          {service.featured && (
            <span
              className="absolute left-4 top-4 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em]"
              style={{
                backgroundColor: "#FF6B35",
                color: "#0A0F1C",
                letterSpacing: "0.12em",
                fontFamily: "var(--font-sans)",
              }}
            >
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Text side */}
      <div
        className={[
          "relative flex min-w-0 flex-col justify-center px-6 py-12 sm:px-10 lg:h-full lg:w-[55%] lg:px-14 lg:py-20 lg:pr-16",
          imageFirst ? "lg:order-2" : "lg:order-1",
        ].join(" ")}
      >
        <div
          className="min-w-0 lg:max-h-[calc(100vh-160px)] lg:overflow-y-auto lg:pr-8"
          style={{ maxWidth: 540, position: "relative" }}
        >
          <div
            className="flex items-center gap-3"
            style={{
              color: service.featured ? "#FF6B35" : "#93C5FD",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            <span>{service.number}</span>
            <span
              aria-hidden="true"
              className="inline-block h-px w-8"
              style={{
                backgroundColor: service.featured ? "#FF6B35" : "#93C5FD",
              }}
            />
            <span>{service.name}</span>
          </div>

          <h3
            className="font-clash mt-5 text-white"
            style={{
              fontWeight: 700,
              fontSize: "clamp(20px, 2.5vw, 32px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            {service.heading}
          </h3>

          <div
            className="mt-6 space-y-5"
            style={{
              color: "rgba(255,255,255,0.72)",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.05vw, 15.5px)",
              lineHeight: 1.75,
              position: "relative",
            }}
          >
            {service.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Section ──────────────────────────────────────────────────────────────────
export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const activeNameRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const mm = gsap.matchMedia();

      // ── Desktop: pinned horizontal scroll ──────────────────────────────
      mm.add("(min-width: 1024px)", () => {
        if (!pinRef.current || !trackRef.current) return;

        const panels =
          trackRef.current.querySelectorAll<HTMLElement>("[data-panel]");
        const panelCount = panels.length;
        if (!panelCount) return;

        const xTarget = -((panelCount - 1) / panelCount) * 100;

        const dwellUnits = 1;
        const totalUnits = panelCount + dwellUnits;
        const moveFraction = panelCount / totalUnits;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinRef.current,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            end: `+=${totalUnits * 100}%`,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const mapped = Math.min(1, self.progress / moveFraction);
              const idx = Math.min(
                panelCount - 1,
                Math.max(0, Math.round(mapped * (panelCount - 1)))
              );
              const dots =
                dotsRef.current?.querySelectorAll<HTMLSpanElement>(
                  "[data-dot]"
                );
              dots?.forEach((d, i) => {
                d.dataset.active = i === idx ? "true" : "false";
                d.style.backgroundColor =
                  i === idx ? "#FF6B35" : "rgba(255,255,255,0.25)";
                d.style.transform = i === idx ? "scale(1.25)" : "scale(1)";
              });
              if (activeNameRef.current) {
                activeNameRef.current.textContent = SERVICES[idx].name;
              }
            },
          },
        });
        tl.to(trackRef.current, {
          xPercent: xTarget,
          ease: "none",
          duration: panelCount,
        });
        tl.to({}, { duration: dwellUnits });

        const tween = tl;

        if (!prefersReduced) {
          panels.forEach((panel) => {
            const img = panel.querySelector<HTMLElement>("[data-panel-image]");
            if (!img) return;
            gsap.fromTo(
              img,
              { scale: 0.9, autoAlpha: 0.6 },
              {
                scale: 1,
                autoAlpha: 1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: panel,
                  containerAnimation: tween,
                  start: "left 80%",
                  end: "left 40%",
                  scrub: true,
                },
              }
            );
          });
        }
      });

      // ── Mobile: no pin. Panels stack vertically. ───────────────────────
      mm.add("(max-width: 1023px)", () => {
        // Plain vertical layout via CSS.
      });

      return () => {
        mm.revert();
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
      id="services"
      aria-label="Search services for Liverpool businesses"
      className="relative w-full"
      style={{ maxWidth: "100vw" }}
    >
      {/* Header (off-white, before the pin) */}
      <div style={{ backgroundColor: "#F8FAFC" }}>
        <div
          className="mx-auto flex w-full max-w-[1120px] flex-col items-start px-6 text-left sm:px-8"
          style={{
            paddingTop: "clamp(64px, 10vw, 120px)",
            paddingBottom: "clamp(64px, 8vw, 96px)",
          }}
        >
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
            What the work covers
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
            Four kinds of search work, run together, not sold separately.
          </h2>

          <span
            aria-hidden="true"
            className="mt-6 block"
            style={{ width: 48, height: 2, backgroundColor: "#FF6B35" }}
          />
        </div>
      </div>

      {/* Pinned horizontal scroll container (dark) */}
      <div
        ref={pinRef}
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#0A0F1C" }}
      >
        <div
          ref={trackRef}
          className="flex w-full flex-col lg:w-[400vw] lg:flex-row lg:flex-nowrap"
          style={{ willChange: "transform" }}
        >
          {SERVICES.map((s) => (
            <Panel key={s.id} service={s} />
          ))}
        </div>

        {/* Progress dots + active service name, desktop only */}
        <div
          className="pointer-events-none absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-5 lg:flex"
          aria-hidden="true"
        >
          <div ref={dotsRef} className="flex items-center gap-2.5">
            {SERVICES.map((s, i) => (
              <span
                key={s.id}
                data-dot
                data-active={i === 0 ? "true" : "false"}
                className="block h-2 w-2 rounded-full transition-transform duration-300"
                style={{
                  backgroundColor:
                    i === 0 ? "#FF6B35" : "rgba(255,255,255,0.25)",
                }}
              />
            ))}
          </div>
          <span
            className="inline-block h-4 w-px"
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          />
          <span
            ref={activeNameRef}
            className="text-[12px] uppercase tracking-[0.18em]"
            style={{
              color: "rgba(255,255,255,0.75)",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
            }}
          >
            {SERVICES[0].name}
          </span>
        </div>
      </div>
    </section>
  );
}
