"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

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
  keywords: string;
};

// 2026-08-25 rewrite. The previous copy in this array named Birmingham competitors and
// then asserted what they could not do ("what they haven't cracked is...", "is soft-
// positioning"), and carried four statistics with no source behind any of them: 500+ stores,
// 23% higher basket values, a 200+ law firm ecosystem, and 60-70% of intake automated.
// Unsourced numbers about ourselves are a claim we cannot defend, and unsourced numbers
// about named competitors are worse than that. Both are gone. Nothing below is a figure we
// cannot show the working for.
const SERVICES: Service[] = [
  {
    id: "seo",
    number: "01",
    name: "SEO",
    heading: "Search work that starts with what is broken, not with a content calendar",
    image: "/images/uk/birmingham/service-web-design-birmingham.webp",
    imageAlt: "Search Console data for a Birmingham business website",
    imageSide: "right",
    featured: true,
    body: [
      "Most Birmingham businesses that come to us are not missing content. They are carrying a site Google struggles to crawl, a Google Business Profile that has been wrong for two years, and a set of service pages competing with each other for the same search. Publishing more on top of that changes nothing.",
      "So the first month is repair. We crawl every page and list what errors, what redirects more than once and what Google is quietly ignoring. We claim the Business Profile, fix the categories and the service areas, and hunt down the wrong versions of your address sitting in old directories. Then we set up Search Console and Analytics properly, so everything after that is measured on your data rather than on somebody's estimate.",
      "Only then does content start, one service page at a time, each built to rank on its own rather than as a paragraph inside a page that lists everything you do. You approve every page before it goes live, and the monthly report opens with enquiries.",
    ],
    keywords:
      "seo agency Birmingham seo Birmingham local seo Birmingham technical seo Birmingham search engine optimisation Birmingham West Midlands",
  },
  {
    id: "ai-seo",
    number: "02",
    name: "AI SEO",
    heading: "Getting named when someone asks an assistant for a Birmingham recommendation",
    image: "/images/uk/birmingham/service-ai-seo-birmingham.webp",
    imageAlt: "AI search results naming local suppliers",
    imageSide: "left",
    body: [
      "Search is splitting in two. Some people still scroll a results page. Others type the question into ChatGPT, Perplexity or Google's AI answers and read the short reply that names three or four businesses. Being named in that reply is a different job from ranking tenth, and very few Birmingham firms have started on it.",
      "The work is less exotic than the name suggests. Clear factual pages that state what you do, where you do it and who you do it for. Structured data that matches what the page visibly says rather than describing a page that does not exist. Answer-first paragraphs an assistant can lift without rewriting. An llms.txt file at the site root. And a check that the AI crawlers are not being blocked by a robots rule somebody added years ago.",
      "It is not a replacement for ordinary search work and we will not sell it as one. It is a second front that is currently cheap to compete on because almost nobody local is competing.",
    ],
    keywords:
      "ai seo Birmingham generative engine optimisation Birmingham answer engine optimisation Birmingham GEO Birmingham AI search visibility",
  },
  {
    id: "web-design",
    number: "03",
    name: "Web Design",
    heading: "Rebuilds, but only when the platform is genuinely the thing holding you back",
    image: "/images/uk/birmingham/service-ai-agents-birmingham.webp",
    imageAlt: "A Birmingham business website being rebuilt for speed",
    imageSide: "right",
    body: [
      "We would rather fix your site than replace it. A rebuild resets whatever search history the old pages had earned, costs months, and is the wrong answer to most problems. So we only raise it when the platform itself blocks the work: when pages cannot have their own titles, when structured data cannot be added, when the site is unusable on a phone, or when it is so slow that no content fix will rescue it.",
      "When a rebuild is the right call, we build in Next.js with React and Tailwind, or inside WordPress, Shopify, Webflow or Framer if that is what your team can keep updated. Google publishes the pass marks for the three Core Web Vitals and we test against them on a real mobile connection, not on a fast office laptop.",
      "Every migration is planned around keeping what already ranks: a full URL map, single-hop redirects, and the old pages checked page by page before anything is switched over. The code goes to your own repository at the end.",
    ],
    keywords:
      "web design Birmingham website redesign Birmingham Next.js developer Birmingham WordPress developer Birmingham site migration",
  },
  {
    id: "ecommerce",
    number: "04",
    name: "E-Commerce",
    heading: "Product and category pages built to be found, not just to be browsed",
    image: "/images/uk/birmingham/service-ecommerce-birmingham.webp",
    imageAlt: "E-commerce product listing for a Birmingham retailer",
    imageSide: "left",
    body: [
      "Most e-commerce SEO problems are structural. Category pages with no text on them, product pages using the manufacturer's description word for word, filters generating thousands of near-identical URLs, and a search box that quietly creates a new indexable page for every query anyone types. None of that is fixed by writing a blog.",
      "We work on Shopify, WooCommerce, Magento, and on headless setups where the storefront is custom and the commerce platform sits behind it. The job is the same in each: get the category structure to match how people search, get product data into structured markup that reflects the page, control what is allowed to be indexed, and make the pages fast enough on a phone to survive the visit.",
      "For Birmingham businesses selling to trade and to the public at once, which is common across the Jewellery Quarter and the manufacturing corridors, that also means keeping the trade side out of the public index without hiding the pages you do want found.",
    ],
    keywords:
      "ecommerce seo Birmingham Shopify seo Birmingham WooCommerce Birmingham product page seo B2B ecommerce Birmingham",
  },
];

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
              ? "0 0 0 2px #B23E13, 0 18px 44px -22px rgba(26,26,26,0.28)"
              : "0 0 0 1px #D9D9D2, 0 18px 44px -22px rgba(26,26,26,0.18)",
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
              color: "#B23E13",
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
                backgroundColor: "#B23E13",
              }}
            />
            <span>{service.name}</span>
          </div>

          <h3
            className="font-clash mt-5"
            style={{
              color: "#1A1A1A",
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
              color: "#4A4A45",
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
            <span
              aria-hidden="true"
              style={{ fontSize: 0, position: "absolute", overflow: "hidden" }}
            >
              {service.keywords}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

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
                  i === idx ? "#B23E13" : "#D9D9D2";
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
      aria-label="Our services for Birmingham businesses"
      className="relative w-full"
      style={{ maxWidth: "100vw" }}
    >
      {/* Header */}
      <div style={{ backgroundColor: "#F8FAFC" }}>
        <div
          className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 text-center sm:px-8"
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
            What we do for Birmingham businesses
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
            Four things, in the order they usually need doing
          </h2>

          <span
            aria-hidden="true"
            className="mt-6 block"
            style={{ width: 48, height: 2, backgroundColor: "#B23E13" }}
          />
        </div>
      </div>

      {/* Pinned horizontal scroll container */}
      <div
        ref={pinRef}
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#FAFAF7" }}
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

        {/* Progress dots + active service name */}
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
                    i === 0 ? "#B23E13" : "#D9D9D2",
                }}
              />
            ))}
          </div>
          <span
            className="inline-block h-4 w-px"
            style={{ backgroundColor: "#D9D9D2" }}
          />
          <span
            ref={activeNameRef}
            className="text-[12px] uppercase tracking-[0.18em]"
            style={{
              color: "#4A4A45",
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
