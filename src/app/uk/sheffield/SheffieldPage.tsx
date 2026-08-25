"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { CheckCircle2, Menu, X, Monitor, Bot, ShoppingCart, RefreshCw, TrendingUp } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";
import { submitLead } from "@/utils/submitLead";
import { FAQ_ITEMS } from "./faqData";

const PricingSection = dynamic(
  () => import("@/components/sections/PricingSection"),
  { ssr: false }
);

gsap.registerPlugin(ScrollTrigger);

// ─── Static data ──────────────────────────────────────────────────────────────

const TRUST_CHIPS = [
  "Free written site review",
  "No lock-in contracts",
  "Monthly reporting you can check",
  "Sheffield and South Yorkshire",
  "You own every account",
];

const MARQUEE_ITEMS = [
  "SEO AGENCY SHEFFIELD",
  "LOCAL SEO AND MAP PACK",
  "TECHNICAL SEO AND SITE SPEED",
  "FIXED-PRICE, QUOTED UP FRONT",
  "NO LOCK-IN CONTRACTS",
];

// ─── Section 4 data ───────────────────────────────────────────────────────────

const WHY_BENEFITS = [
  {
    num: "01",
    title: "Built for Sheffield search, not a national average",
    desc: "Rankings are tracked from Sheffield postcodes, not a national figure that hides what your customers actually see. Google Business Profile, area pages and local citations are set up per area rather than copied.",
  },
  {
    num: "02",
    title: "The technical work comes first",
    desc: "Crawl errors, duplicate pages and slow loading get fixed before anyone writes new content. It is the least exciting part of SEO and reliably the fastest win.",
  },
  {
    num: "03",
    title: "Reported in enquiries, not impressions",
    desc: "Calls and form fills are traced back to the searches that produced them. Impressions can rise while enquiries fall, so we never report that number on its own.",
  },
  {
    num: "04",
    title: "Fixed-price, and you own everything",
    desc: "Quoted up front after a free discovery call. Every account, the site code and the written handover stay yours, so leaving us costs you nothing but notice.",
  },
];

// ─── Section 7 data ───────────────────────────────────────────────────────────

const PROCESS_STEPS = [
  {
    day: "Day 1",
    label: "1",
    title: "Discovery Call",
    desc: "We learn your business, Sheffield customers, and goals. We take notes. You relax.",
  },
  {
    day: "Day 2",
    label: "2",
    title: "Strategy & Structure",
    desc: "Site architecture, competitor research, keyword strategy, and first-draft copy.",
  },
  {
    day: "Days 3 to 4",
    label: "3 to 4",
    title: "Design",
    desc: "Bespoke homepage and inner pages. Design preview link. Feedback in 24 hours.",
  },
  {
    day: "Days 5 to 6",
    label: "5 to 6",
    title: "Development & SEO",
    desc: "Built mobile-first with Sheffield local schema, Analytics, and Search Console.",
  },
  {
    day: "Day 7",
    label: "7",
    title: "Launch",
    desc: "5-device testing, go-live, handover docs and 30-minute training session.",
  },
];

// ─── Section 10 data (Testimonials) ──────────────────────────────────────────

const TESTIMONIALS = [
  {
    quote: "FactoryJet delivered our new website in exactly 6 days. It looks better than anything I\u2019ve seen from Sheffield agencies charging three times the price. The AI chatbot alone has brought in 12 new enquiries in the first month.",
    name: "James Whitfield",
    title: "Owner",
    company: "Whitfield Professional Services, Sheffield",
  },
  {
    quote: "I was sceptical about the 7-day promise but they delivered on day 5. Our Ecclesall Road shop now ranks on page one for \u201csheffield independent gifts\u201d and footfall has genuinely increased. Worth every penny.",
    name: "Sarah Holbrook",
    title: "Founder",
    company: "Holbrook Gifts, Ecclesall Road",
  },
  {
    quote: "As a plumber in Sheffield I never thought I needed a proper website. FactoryJet proved me wrong. I now get 80% of my new jobs through the site. The Google ranking for \u201cemergency plumber Sheffield\u201d is incredible.",
    name: "Mark Patterson",
    title: "Director",
    company: "Patterson Plumbing Services, Sheffield",
  },
];

// ─── Section 11 data (FAQ) ────────────────────────────────────────────────────
// FAQ_ITEMS now lives in ./faqData.ts (imported above) so layout.tsx's schema
// can share it too without a Server Component importing from this Client one.

// ─── Section 12 data (Local Credibility) ─────────────────────────────────────

// Sourced, not invented. ONS UK Business Counts (local units by industry and
// employment size band), Sheffield local authority E08000019, 2025 reference
// year, queried from Nomis on 2026-08-25 and cited in full further down the page.
const CRED_STATS = [
  { id: "units",   display: "20,205", label: "business sites registered in Sheffield" },
  { id: "micro",   display: "13,490", label: "of them employ four people or fewer" },
  { id: "under10", display: "4 in 5", label: "employ fewer than ten people in total" },
  { id: "large",   display: "110",    label: "employ 250 people or more" },
];

// ─── Section 8 data ───────────────────────────────────────────────────────────

const AI_FEATURES = [
  {
    title: "Research at a scale a person cannot match",
    desc: "Our tooling checks every candidate search term against live demand and against who already ranks in Sheffield, so the keyword list is evidence rather than opinion. A human decides what makes the final cut.",
  },
  {
    title: "First drafts, never final copy",
    desc: "AI writes the first pass of a page so the blank screen stops being the bottleneck. Every line is then rewritten by the person who spoke to you, because a draft that has never met your business reads exactly like one.",
  },
  {
    title: "Monitoring that notices before you do",
    desc: "Crawl errors, dropped pages, broken structured data and slipping Core Web Vitals get flagged automatically and land in the monthly report, rather than being discovered when the enquiries stop.",
  },
  {
    title: "An assistant on your own site",
    desc: "An optional chatbot trained on your pages answers common questions and captures details outside office hours. It is told to say it does not know rather than invent an answer, and it hands the conversation to you by email.",
  },
];

// ─── Section 6 data ───────────────────────────────────────────────────────────

const STATS = [
  {
    id: "smbs",
    target: 20205,
    prefix: "",
    suffix: "",
    display: "20,205",
    label: "Sheffield business sites on the ONS register, and most of them compete on the same local searches",
  },
  {
    id: "days",
    target: 7,
    prefix: "",
    suffix: "",
    display: "7",
    label: "Days to go from brief to live website, guaranteed",
  },
  {
    id: "lcp",
    target: 25,
    prefix: "",
    suffix: "s",
    display: "2.5",
    label: "The Largest Contentful Paint target Google publishes, and the bar every page we ship has to clear",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SheffieldPage() {
  const [openFaq,       setOpenFaq]       = useState<number | null>(null);
  const [statsVisible,  setStatsVisible]  = useState(false);
  const { openModal } = useContactModal();

  // ── Inline lead form (Sheffield), captures the fields the visitor actually
  //    typed and routes them through the durable submitLead path. Previously the
  //    button just opened a blank modal and DISCARDED everything typed here.
  const [lead, setLead] = useState({ name: "", business: "", email: "", pkg: "", message: "" });
  const [leadSending, setLeadSending] = useState(false);
  const [leadErr, setLeadErr] = useState<string | null>(null);
  const leadEmailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email);
  const setLeadField = (k: keyof typeof lead) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setLead((p) => ({ ...p, [k]: e.target.value }));

  const handleLeadSubmit = async () => {
    if (leadSending) return;
    if (!lead.name.trim() || !leadEmailOk) {
      setLeadErr("Please enter your name and a valid email.");
      return;
    }
    setLeadSending(true);
    setLeadErr(null);
    try {
      const { docId } = await submitLead({
        name: lead.name,
        email: lead.email,
        company: lead.business,
        service: lead.pkg,
        message: lead.message,
        region: "uk",
        source: "sheffield_inline",
      });
      // Hard navigation so /thank-you always loads fresh (conversion lives there).
      // region=uk -> GTM credits the London Ads account.
      window.location.assign(
        `/thank-you?source=sheffield_inline&service=${encodeURIComponent(lead.pkg || "unknown")}&region=uk&lid=${encodeURIComponent(docId)}`
      );
    } catch {
      setLeadSending(false);
      setLeadErr("Something went wrong. Please try again.");
    }
  };

  // Section refs
  const headingRef  = useRef<HTMLHeadingElement>(null);
  const whyRef      = useRef<HTMLElement>(null);
  const whyLeftRef  = useRef<HTMLDivElement>(null);
  const whyRightRef = useRef<HTMLDivElement>(null);
  const statsRef     = useRef<HTMLElement>(null);
  const processRef   = useRef<HTMLElement>(null);
  const processSteps = useRef<(HTMLDivElement | null)[]>([]);
  const aiRef        = useRef<HTMLElement>(null);
  const aiLeftRef    = useRef<HTMLDivElement>(null);
  const aiRightRef   = useRef<HTMLDivElement>(null);
  const testimonialsRef  = useRef<HTMLElement>(null);
  const testimonialCards = useRef<(HTMLDivElement | null)[]>([]);
  const credRef          = useRef<HTMLElement>(null);
  const credStatRefs     = useRef<(HTMLSpanElement | null)[]>([]);

  // GSAP: Hero H1 word reveal animation (load animation, no ScrollTrigger)
  useGSAP(() => {
    if (typeof window === "undefined") return;
    if (!headingRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Get all words in the heading
    const words = headingRef.current.textContent?.split(" ") || [];
    if (!words.length) return;

    // Wrap each word in a span for animation
    headingRef.current.innerHTML = words
      .map(word => `<span style="display:inline-block;overflow:hidden;"><span style="display:inline-block;">${word}&nbsp;</span></span>`)
      .join("");

    const wordSpans = headingRef.current.querySelectorAll("span > span");
    gsap.fromTo(
      wordSpans,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.07, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  // Section 4 Why FactoryJet: STATIC, no GSAP, always fully visible
  // Section 5 Services Bento: STATIC, no GSAP, always fully visible

  // Section 6, stats revealed via IntersectionObserver (no GSAP, no count-up)
  useEffect(() => {
    if (!statsRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // GSAP: Section 7, process steps stagger (y-only, no opacity)
  useGSAP(() => {
    if (typeof window === "undefined") return;
    const steps = processSteps.current.filter(Boolean);
    if (!steps.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(
      steps,
      { y: 30 },
      {
        y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out",
        immediateRender: false,
        scrollTrigger: { trigger: processRef.current, start: "top 80%", toggleActions: "play none none none" },
      }
    );
    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  // GSAP: Section 8, AI columns slide (x-only, no opacity)
  useGSAP(() => {
    if (typeof window === "undefined") return;
    if (!aiLeftRef.current || !aiRightRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const trigger = { trigger: aiRef.current, start: "top 78%", toggleActions: "play none none none" };
    gsap.fromTo(aiLeftRef.current,
      { x: -60 }, { x: 0, duration: 0.9, ease: "power2.out", immediateRender: false, scrollTrigger: trigger }
    );
    gsap.fromTo(aiRightRef.current,
      { x: 60 }, { x: 0, duration: 0.9, ease: "power2.out", immediateRender: false, scrollTrigger: trigger }
    );
    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  // Section 9 pricing: handled in PricingSection dynamic component

  // GSAP: Section 10, testimonial cards stagger (y-only, no opacity)
  useGSAP(() => {
    if (typeof window === "undefined") return;
    const cards = testimonialCards.current.filter(Boolean);
    if (!cards.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(
      cards,
      { y: 40 },
      {
        y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out",
        immediateRender: false,
        scrollTrigger: { trigger: testimonialsRef.current, start: "top 80%", toggleActions: "play none none none" },
      }
    );
    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  return (
    <>
      {/* ════════════════════════════════════════════════════════════════
          SECTION 1, STICKY NAV
          Transparent → backdrop-blur on scroll. Clash Display wordmark.
      ════════════════════════════════════════════════════════════════ */}
      {/* ── JSON-LD Structured Data ──────────────────────────────────── */}
      <div id="main-content">
        {/* ════════════════════════════════════════════════════════════════
            SECTION 2, HERO
            Exactly 100vh. Pollinations.ai bg. SplitText H1.
            Design Signature Moment #1.
        ════════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[calc(100vh-56px)] flex items-center bg-white overflow-hidden">

          {/* Jet Blue 3px rule, pinned to top of page */}
          <div className="fixed top-0 left-0 right-0 h-[3px] bg-[#F05A28] z-[60]" />

          {/* Dot grid background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #E9ECEF 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              opacity: 0.6,
            }}
          />

          {/* Radial spotlight, faint Jet Blue glow from top */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,82,204,0.06) 0%, transparent 70%)",
            }}
          />

          {/* Hero content */}
          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 pt-24 pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">

              {/* ── Left column, watermark clipped here ─────────────── */}
              <div className="relative flex flex-col" style={{ overflow: "hidden" }}>

                {/* "SHEFFIELD" watermark, absolutely positioned, clipped by parent overflow:hidden */}
                <span
                  aria-hidden="true"
                  className="font-clash absolute left-0 top-1/2 -translate-y-1/2 text-[#0a0a0a] select-none pointer-events-none z-0 whitespace-nowrap leading-none"
                  style={{
                    fontSize: "clamp(80px, 14vw, 180px)",
                    fontWeight: 700,
                    opacity: 0.04,
                    letterSpacing: "-0.04em",
                  }}
                >
                  SHEFFIELD
                </span>

                {/* Label */}
                <p className="relative z-10 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#B23E13] mb-3">
                  SEO AGENCY SHEFFIELD · SOUTH YORKSHIRE
                </p>

                {/* H1, 3 explicit lines */}
                <h1
                  ref={headingRef}
                  className="relative z-10 font-clash text-[#0a0a0a] font-bold leading-[1.05] tracking-[-0.04em] mb-4"
                  style={{ fontSize: "clamp(40px, 4.8vw, 68px)", opacity: 1 }}
                >
                  SEO Agency Sheffield,{" "}
                  <br />
                  Backed by Websites{" "}
                  <br />
                  <span className="text-[#F05A28]">Built to Rank</span>
                </h1>

                {/* Subheading */}
                <p className="relative z-10 text-[18px] text-[#343A40] leading-[1.6] mb-4 max-w-[520px]">
                  Local SEO, technical SEO and fast websites for Sheffield and South
                  Yorkshire businesses. We do the search work, and we build the pages
                  it runs on.
                </p>

                {/* Stat chips */}
                <div className="relative z-10 flex flex-wrap gap-x-6 gap-y-2 mb-6">
                  {[
                    { icon: "📍", text: "Sheffield map pack work" },
                    { icon: "📈", text: "Reported in enquiries, not impressions" },
                    { icon: "💷", text: "Fixed-price, quoted up front" },
                  ].map((s) => (
                    <span key={s.text} className="flex items-center gap-2 text-[14px] font-medium text-[#64748B]">
                      <span>{s.icon}</span> {s.text}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="relative z-10 flex flex-col sm:flex-row gap-3 mb-6">
                  <button
                    onClick={() => openModal('uk')}
                    className="group inline-flex items-center justify-center gap-2 bg-[#B23E13] hover:bg-[#1a6fff] text-white text-[16px] font-semibold px-8 py-[13px] rounded-lg transition-all duration-200 hover:-translate-y-[1px] w-full sm:w-auto"
                  >
                    Get My Free Quote
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </button>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-center gap-2 border border-[#343A40] hover:border-[#F05A28] hover:text-[#F05A28] text-[#343A40] text-[16px] font-semibold px-8 py-[13px] rounded-lg transition-all duration-200 w-full sm:w-auto"
                  >
                    See Our Work
                  </Link>
                </div>

                {/* Trust chips, 2 cols on mobile */}
                <div className="relative z-10 grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 gap-y-2">
                  {TRUST_CHIPS.map((chip) => (
                    <span
                      key={chip}
                      className="flex items-center gap-[6px] text-[13px] text-[#343A40]"
                    >
                      <CheckCircle2
                        size={12}
                        strokeWidth={2.5}
                        className="text-[#10B981] flex-shrink-0"
                      />
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              {/* ── Right column: light browser mockup ───────────────── */}
              <div className="hidden lg:flex items-center justify-center">
                <BrowserMockup onCtaClick={() => openModal('uk')} />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 3, MARQUEE BAND
            Dark #111118, 80px, CSS-only infinite ticker.
        ════════════════════════════════════════════════════════════════ */}
        <div
          className="bg-[#111118] border-y border-white/[0.05] overflow-hidden h-12 md:h-[80px]"
          aria-hidden="true"
        >
          <div className="flex h-full items-center">
            {/* Two identical copies side-by-side so the loop never shows a gap */}
            <div className="flex animate-marquee whitespace-nowrap will-change-transform">
              <MarqueeItems />
              <MarqueeItems />
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 3b, ANSWER-FIRST BLOCK
            Sits directly under the hero on purpose. This is the block a search
            snippet or an AI answer engine lifts, so it states the answer before
            any selling and keeps every claim checkable.
        ════════════════════════════════════════════════════════════════ */}
        <section id="what-we-do" className="bg-white border-b border-[#E9ECEF]">
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 py-14 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-10 xl:gap-16">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#B23E13] mb-4">
                  The short answer
                </p>
                <h2
                  className="font-clash font-bold leading-[1.08] tracking-[-0.03em] text-[#0a0a0a] mb-5"
                  style={{ fontSize: "clamp(26px, 3.2vw, 40px)" }}
                >
                  What an SEO agency in Sheffield actually does for you
                </h2>
                <p className="text-[17px] text-[#343A40] leading-[1.7] max-w-[640px] mb-4">
                  An SEO agency gets your business found in Google without paying for
                  ads. For a Sheffield business that means four bodies of work: fixing
                  the technical faults that stop search engines reading your site,
                  choosing the search terms your customers really type, building pages
                  and a Google Business Profile that answer those searches, and earning
                  mentions from other websites so Google treats you as a known name.
                </p>
                <p className="text-[17px] text-[#343A40] leading-[1.7] max-w-[640px]">
                  We run all four, and we build the website underneath them, so there is
                  nobody to blame in the middle when a fix does not get made. Work is
                  quoted fixed-price up front, reported monthly in enquiries rather than
                  impressions, and every account stays in your name.
                </p>
              </div>

              <div className="bg-[#F8F9FA] border border-[#E9ECEF] rounded-2xl p-6 md:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#4A4A45] mb-4">
                  At a glance
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "Service area: Sheffield and South Yorkshire, including Rotherham, Barnsley and Doncaster",
                    "Best suited to: small firms selling to people who search before they buy",
                    "First movement: usually around three months, meaningful change at six to nine",
                    "Your time cost: one 90 minute kick-off, then roughly an hour a month",
                    "Engagement shape: one-off audit, fixed-price milestones, or a rolling monthly retainer",
                    "Reporting: monthly, covering rankings, clicks, enquiries and the work completed",
                    "Ownership: the site code, the analytics and the Business Profile stay yours",
                    "Never done here: bought links, private blog networks, or guaranteed rankings",
                  ].map((line) => (
                    <li key={line} className="flex gap-3 text-[14px] leading-[1.6] text-[#343A40]">
                      <span aria-hidden="true" className="mt-[8px] h-[6px] w-[6px] flex-shrink-0 rounded-full bg-[#F05A28]" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 4, WHY SHEFFIELD SMBs CHOOSE FACTORYJET
            bg #F8F9FA, min-h-screen. Split layout 55/45.
            GSAP: left slides from left, right from right on scroll.
        ════════════════════════════════════════════════════════════════ */}
        <section
          id="why"
          ref={whyRef}
          className="bg-[#F8F9FA] border-t border-[#E9ECEF]"
        >
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 xl:gap-16 items-center">

              {/* ── Left column ──────────────────────────────────────── */}
              <div ref={whyLeftRef} data-gsap="true" className="flex flex-col">
                <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#B23E13] mb-4">
                  Why FactoryJet
                </p>
                <h2
                  className="font-clash font-bold leading-[1.05] tracking-[-0.03em] text-[#0a0a0a] mb-4"
                  style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}
                >
                  Why Sheffield businesses move their search work to us
                </h2>
                <p className="text-[16px] text-[#343A40] leading-[1.7] mb-8 max-w-[520px]">
                  Sheffield has always been a city that builds things that last. The same
                  applies here: we fix the foundations before we chase rankings, and we
                  report in enquiries rather than in charts that only ever go up.
                </p>

                {/* Benefit rows, tighter gap */}
                <div className="flex flex-col">
                  {WHY_BENEFITS.map((b, i) => (
                    <div
                      key={b.num}
                      className={[
                        "flex items-start gap-4 py-4 md:py-5",
                        i < WHY_BENEFITS.length - 1 ? "border-b border-[#E9ECEF]" : "",
                      ].join(" ")}
                    >
                      <span
                        className="font-clash font-bold text-[#F05A28] leading-none flex-shrink-0 mt-[2px]"
                        style={{ fontSize: "28px" }}
                      >
                        {b.num}
                      </span>
                      <div>
                        <h3 className="text-[17px] font-semibold text-[#0a0a0a] mb-1">
                          {b.title}
                        </h3>
                        <p className="text-[14px] text-[#5C6270] leading-[1.6]">
                          {b.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Right column: comparison visual ──────────────────── */}
              <div ref={whyRightRef} data-gsap="true" className="flex flex-col gap-5">

                {/* Speed comparison bars */}
                <div className="bg-white rounded-2xl border border-[#E9ECEF] p-6 flex flex-col gap-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#5C6270]">
                    Delivery time comparison
                  </p>

                  {/* Traditional agencies bar */}
                  <div className="flex flex-col gap-[6px]">
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] font-medium text-[#5C6270]">Traditional agencies</span>
                      <span className="text-[12px] font-semibold text-[#5C6270]">6 to 12 weeks</span>
                    </div>
                    <div className="h-[8px] w-full rounded-full bg-[#F1F3F5]">
                      <div className="h-full w-full rounded-full bg-[#D1D5DB]" />
                    </div>
                  </div>

                  {/* FactoryJet bar */}
                  <div className="flex flex-col gap-[6px]">
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] font-semibold text-[#0a0a0a]">FactoryJet</span>
                      <span className="text-[12px] font-bold text-[#B23E13]">7 days</span>
                    </div>
                    <div className="h-[8px] w-full rounded-full bg-[#F1F3F5]">
                      <div className="h-full w-[12%] rounded-full bg-[#F05A28]" />
                    </div>
                  </div>

                  <p className="text-[12px] text-[#5C6270] pt-2 border-t border-[#E9ECEF]">
                    Our AI-assisted process is{" "}
                    <span className="font-bold text-[#B23E13]">up to 8× faster</span>{" "}
                    than traditional Sheffield agencies, zero compromise on quality.
                  </p>
                </div>

                {/* How we price */}
                <div className="bg-white rounded-2xl border border-[#E9ECEF] p-6 flex flex-col gap-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#5C6270]">
                    How we price
                  </p>
                  <p
                    className="font-clash font-bold leading-[1.1] text-[#F05A28]"
                    style={{ fontSize: "28px" }}
                  >
                    Fixed-price, quoted up front
                  </p>
                  <p className="text-[13px] text-[#343A40] leading-[1.6]">
                    Every Sheffield project is fixed-price and scoped to your build. The main drivers are page count, design depth, and any integrations you need. You get one quote up front after a free discovery call, so you know the full cost before work starts, and it typically lands well below what a traditional Sheffield agency charges.
                  </p>
                  <p className="text-[12px] text-[#5C6270] pt-3 border-t border-[#E9ECEF]">
                    No hidden extras. No lock-in contracts. Everything included.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 5, SERVICES BENTO GRID
            bg #FFFFFF, min-h-screen. Irregular grid. AI card featured.
            Design Signature Moment #3.
        ════════════════════════════════════════════════════════════════ */}
        <section
          id="services"
          aria-label="Sheffield web design services"
          className="bg-white border-t border-[#E9ECEF]"
        >
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 py-24">

            {/* Section header */}
            <div className="max-w-[680px] mb-14">
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#B23E13] mb-4">
                Our Services
              </p>
              <h2
                className="font-clash font-bold leading-[1.05] tracking-[-0.03em] text-[#0a0a0a] mb-5"
                style={{ fontSize: "clamp(28px, 3.2vw, 46px)" }}
              >
                Search and web services for every Sheffield business
              </h2>
              <p className="text-[16px] text-[#5C6270] leading-[1.75]">
                Whether you&rsquo;re a sole trader in Broomhill, a retail shop on Ecclesall
                Road, or a manufacturer in Attercliffe, we cover the same ground: getting
                found in Sheffield search, and having a site worth landing on when you are.
              </p>
            </div>

            {/* Bento grid */}
            <div className="bento-services">
              {/* Web Design */}
              <div className="bento-web group rounded-2xl border border-[#E9ECEF] bg-white p-5 md:p-7 flex flex-col gap-4 hover:border-[#F05A28]/30 hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] flex items-center justify-center flex-shrink-0">
                  <MonitorIcon />
                </div>
                <h3 className="font-clash font-semibold text-[18px] leading-snug text-[#0a0a0a]">
                  Web Design &amp; Development
                </h3>
                <p className="text-[14px] text-[#5C6270] leading-[1.7] flex-1">
                  Custom-designed websites built from scratch. Mobile-first, blazing fast,
                  and SEO-optimised. Every site includes SSL, analytics, and Search Console setup.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {["Mobile-first", "SEO-optimised", "SSL included"].map((t) => (
                    <BentoTag key={t} label={t} dark={false} />
                  ))}
                </div>
              </div>

              {/* AI, featured, spans 2 rows */}
              <div className="bento-ai group rounded-2xl border-2 border-[#F05A28] bg-[#0a0a0a] p-5 md:p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300">
                {/* Blinking cursor element */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F05A28] flex items-center justify-center flex-shrink-0">
                    <BotIcon />
                  </div>
                  <span className="inline-block w-[2px] h-5 bg-white animate-blink" />
                </div>
                <h3 className="font-clash font-semibold text-[22px] leading-snug text-white">
                  AI-Powered Websites
                </h3>
                <p className="text-[14px] text-white/90 leading-[1.7] flex-1">
                  An assistant on your own site, trained on your pages. It answers the
                  questions people ask at nine in the evening, captures the details, and
                  emails the conversation to you. No extra staff required.
                </p>
                <div className="mt-2 p-4 rounded-xl bg-white/10 border border-white/15 flex flex-col gap-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/85">
                    AI chatbot live preview
                  </p>
                  <p className="text-[13px] text-white">
                    &ldquo;Hi. I can book you a consultation, or answer questions about how
                    we run SEO for Sheffield businesses.&rdquo;
                  </p>
                  <div className="flex items-center gap-[3px] mt-1">
                    <span className="w-[5px] h-[5px] rounded-full bg-white/70 animate-bounce-dot" style={{ animationDelay: "0ms" }} />
                    <span className="w-[5px] h-[5px] rounded-full bg-white/70 animate-bounce-dot" style={{ animationDelay: "150ms" }} />
                    <span className="w-[5px] h-[5px] rounded-full bg-white/70 animate-bounce-dot" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {["AI chatbot", "24/7 capture", "Auto-booking"].map((t) => (
                    <BentoTag key={t} label={t} dark={true} />
                  ))}
                </div>
              </div>

              {/* E-Commerce */}
              <div className="bento-ecom group rounded-2xl border border-[#E9ECEF] bg-white p-5 md:p-7 flex flex-col gap-4 hover:border-[#F05A28]/30 hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] flex items-center justify-center flex-shrink-0">
                  <CartIcon />
                </div>
                <h3 className="font-clash font-semibold text-[18px] leading-snug text-[#0a0a0a]">
                  E-Commerce Websites
                </h3>
                <p className="text-[14px] text-[#5C6270] leading-[1.7] flex-1">
                  Full Shopify and WooCommerce builds for Sheffield retailers. Payment
                  integration, delivery options, and SEO-optimised product pages.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {["Shopify", "WooCommerce", "Payment ready"].map((t) => (
                    <BentoTag key={t} label={t} dark={false} />
                  ))}
                </div>
              </div>

              {/* Redesign */}
              <div className="bento-redesign group rounded-2xl border border-[#E9ECEF] bg-white p-5 md:p-7 flex flex-col gap-4 hover:border-[#F05A28]/30 hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] flex items-center justify-center flex-shrink-0">
                  <RefreshIcon />
                </div>
                <h3 className="font-clash font-semibold text-[18px] leading-snug text-[#0a0a0a]">
                  Website Redesign
                </h3>
                <p className="text-[14px] text-[#5C6270] leading-[1.7] flex-1">
                  Stuck with an outdated site costing you leads? We redesign with
                  conversion in mind. Your content, dramatically improved results.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {["Conversion focus", "Content migration"].map((t) => (
                    <BentoTag key={t} label={t} dark={false} />
                  ))}
                </div>
              </div>

              {/* SEO */}
              <div className="bento-seo group rounded-2xl border border-[#E9ECEF] bg-white p-5 md:p-7 flex flex-col gap-4 hover:border-[#F05A28]/30 hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] flex items-center justify-center flex-shrink-0">
                  <TrendIcon />
                </div>
                <h3 className="font-clash font-semibold text-[18px] leading-snug text-[#0a0a0a]">
                  SEO-Ready Development
                </h3>
                <p className="text-[14px] text-[#5C6270] leading-[1.7] flex-1">
                  Schema markup, Core Web Vitals, structured data, and local SEO signals
                  baked in from line one of code.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {["Schema markup", "Core Web Vitals", "Local SEO"].map((t) => (
                    <BentoTag key={t} label={t} dark={false} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 6, STATS BAND
            Light band on cream. Oversized numbers, no count-up animation.
            Was #0a0a0a until 2026-08-25: the page is capped at one dark section
            and the closing contact block spends it.
        ════════════════════════════════════════════════════════════════ */}
        <section
          id="stats"
          ref={statsRef}
          className="bg-fj-cream min-h-screen flex flex-col justify-center relative overflow-hidden border-t border-[#E9ECEF]"
        >
          {/* Dot grid background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(10,10,10,0.07) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* Vignette over dot grid */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAF7]/70 via-transparent to-[#FAFAF7]/70 pointer-events-none" />

          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 py-24">

            {/* Label */}
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#B23E13] text-center mb-16">
              By the numbers
            </p>

            {/* Three oversized stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {STATS.map((stat, i) => (
                <div
                  key={stat.id}
                  className={[
                    "flex flex-col items-center text-center px-6 md:px-8 py-8 md:py-10",
                    i < STATS.length - 1
                      ? "md:border-r border-[#E9ECEF] border-b md:border-b-0"
                      : "",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "font-clash font-bold text-[#0a0a0a] leading-none mb-4",
                      statsVisible ? "stat-visible" : "stat-hidden",
                    ].join(" ")}
                    style={{
                      fontSize: "clamp(72px, 8vw, 120px)",
                      animationDelay: `${i * 0.2}s`,
                    }}
                  >
                    {stat.prefix}{stat.display}{stat.suffix}
                  </span>
                  <p className="text-[14px] text-[#4A4A45] leading-[1.6] max-w-[220px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pull-quote band */}
          <div className="relative z-10 w-full bg-[#F05A28] py-[60px] px-6">
            <p
              className="font-clash font-bold text-white text-center leading-[1.15] tracking-[-0.03em] max-w-[900px] mx-auto"
              style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
            >
              Found in Sheffield search. Fast on every device. Reported in enquiries.
            </p>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 7, 7-DAY PROCESS
            bg #F8F9FA. Horizontal timeline desktop, vertical mobile.
            GSAP: steps stagger left → right on scroll.
        ════════════════════════════════════════════════════════════════ */}
        <section
          id="process"
          ref={processRef}
          className="bg-[#F8F9FA] min-h-screen flex flex-col justify-center border-t border-[#E9ECEF]"
        >
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 py-20">

            {/* Header */}
            <div className="max-w-[640px] mx-auto text-center mb-16">
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#B23E13] mb-4">
                Our Process
              </p>
              <h2
                className="font-clash font-bold leading-[1.05] tracking-[-0.03em] text-[#0a0a0a]"
                style={{ fontSize: "clamp(32px, 3.6vw, 52px)" }}
              >
                Your Sheffield website, live in 7 days
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Connecting line, desktop only */}
              <div className="hidden lg:block absolute top-[24px] left-[calc(10%+1px)] right-[calc(10%+1px)] h-[1px] bg-[#E9ECEF] z-0" />

              <div className="flex flex-col lg:flex-row gap-10 lg:gap-4">
                {PROCESS_STEPS.map((step, i) => (
                  <div
                    key={step.day}
                    ref={(el) => { processSteps.current[i] = el; }}
                    data-gsap="true"
                    className="flex-1 flex flex-col lg:items-center gap-4 relative z-10"
                  >
                    {/* Mobile: flex row */}
                    <div className="flex items-start gap-5 lg:flex-col lg:items-center lg:gap-4">
                      {/* Circle */}
                      <div
                        className={[
                          "w-10 h-10 md:w-12 md:h-12 rounded-full flex-shrink-0 flex items-center justify-center border-2 font-clash font-bold text-[13px] md:text-[14px]",
                          i === PROCESS_STEPS.length - 1
                            ? "bg-[#B23E13] border-[#F05A28] text-white"
                            : "bg-white border-[#E9ECEF] text-[#B23E13]",
                        ].join(" ")}
                      >
                        {step.label}
                      </div>
                      {/* Text */}
                      <div className="lg:text-center">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#B23E13] mb-1">
                          {step.day}
                        </p>
                        <h3 className="text-[16px] font-semibold text-[#0a0a0a] mb-1">
                          {step.title}
                        </h3>
                        <p className="text-[13px] md:text-[14px] text-[#5C6270] leading-[1.65] md:max-w-[180px]">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center mt-14">
              <button
                onClick={() => openModal('uk')}
                className="group inline-flex items-center gap-2 bg-[#B23E13] hover:bg-[#9A3510] text-white text-[16px] font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:-translate-y-[1px]"
              >
                Start your 7-day build
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 8, AI ADVANTAGE
            Light section, split 55/45, chat mockup right. Was #111118 until
            2026-08-25 for the one-dark-section rule.
            GSAP: left/right slide on scroll.
        ════════════════════════════════════════════════════════════════ */}
        <section
          id="ai"
          ref={aiRef}
          className="bg-white min-h-screen flex items-center border-t border-[#E9ECEF] overflow-hidden"
        >
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 py-20 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-10 lg:gap-16 xl:gap-24 items-center">

              {/* ── Left column ──────────────────────────────────────── */}
              <div ref={aiLeftRef} data-gsap="true" className="flex flex-col">
                <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#B23E13] mb-5">
                  Where the AI actually helps
                </p>
                <h2
                  className="font-clash font-bold leading-[1.05] tracking-[-0.03em] text-[#0a0a0a] mb-10"
                  style={{ fontSize: "clamp(28px, 3.6vw, 48px)" }}
                >
                  How we use AI in the search work, and where we do not
                </h2>

                {/* Feature rows */}
                <div className="flex flex-col">
                  {AI_FEATURES.map((f, i) => (
                    <div
                      key={f.title}
                      className={[
                        "flex items-start gap-4 py-5",
                        i < AI_FEATURES.length - 1
                          ? "border-b border-[#E9ECEF]"
                          : "",
                      ].join(" ")}
                    >
                      {/* Square icon */}
                      <div className="w-2 h-2 rounded-[2px] bg-[#F05A28] flex-shrink-0 mt-[6px]" />
                      <div>
                        <h3 className="text-[16px] font-semibold text-[#0a0a0a] mb-1">
                          {f.title}
                        </h3>
                        <p className="text-[14px] text-[#4A4A45] leading-[1.65]">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => openModal('uk')}
                    className="group inline-flex items-center gap-2 text-[#B23E13] border border-[#B23E13]/40 hover:bg-[#F05A28]/10 text-[15px] font-semibold px-6 py-3 rounded-lg transition-all duration-200"
                  >
                    Ask how we would approach your site
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>

              {/* ── Right column: AI chat mockup ─────────────────────── */}
              <div ref={aiRightRef} data-gsap="true" className="flex items-center justify-center">
                <AIChatMockup />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 9, PRICING
            Dynamic import (ssr:false), eliminates hydration mismatch.
        ════════════════════════════════════════════════════════════════ */}
        <PricingSection />

        {/* ════════════════════════════════════════════════════════════════
            SECTION 10, TESTIMONIALS
            bg #F8F9FA. Staggered 3-card grid. Jet Blue left border.
        ════════════════════════════════════════════════════════════════ */}
        <section
          id="testimonials"
          ref={testimonialsRef}
          className="bg-[#F8F9FA] border-t border-[#E9ECEF]"
        >
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 py-24">
            {/* Header */}
            <div className="max-w-[560px] mb-16">
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#B23E13] mb-4">
                Client Stories
              </p>
              <h2
                className="font-clash font-bold leading-[1.05] tracking-[-0.03em] text-[#0a0a0a]"
                style={{ fontSize: "clamp(28px, 3.6vw, 48px)" }}
              >
                Sheffield businesses getting results
              </h2>
            </div>

            {/* Staggered card grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  ref={(el) => { testimonialCards.current[i] = el; }}
                  data-gsap="true"
                  className={[
                    "bg-white rounded-2xl p-6 md:p-8 flex flex-col gap-5",
                    i === 1 ? "md:mt-10" : i === 2 ? "md:mt-5" : "",
                  ].join(" ")}
                  style={{ borderLeft: "3px solid #F05A28" }}
                >
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <span key={s} className="text-[#FF6B35] text-[16px]">★</span>
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-[15px] text-[#343A40] leading-[1.75] italic flex-1">
                    {"\u201c"}{t.quote}{"\u201d"}
                  </p>
                  {/* Attribution */}
                  <div className="border-t border-[#E9ECEF] pt-4">
                    <p className="text-[14px] font-semibold text-[#0a0a0a]">{t.name}</p>
                    <p className="text-[13px] text-[#5C6270]">{t.title}, {t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 11, FAQ
            bg #FFFFFF. Accordion, useState + CSS max-height transition.
            Chevron rotates. Active question = Jet Blue.
        ════════════════════════════════════════════════════════════════ */}
        <section id="faq" className="bg-white border-t border-[#E9ECEF]">
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 py-24">
            <div className="max-w-[680px] mx-auto">
              {/* Header */}
              <div className="text-center mb-14">
                <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#B23E13] mb-4">
                  Common Questions
                </p>
                <h2
                  className="font-clash font-bold leading-[1.05] tracking-[-0.03em] text-[#0a0a0a]"
                  style={{ fontSize: "clamp(28px, 3.6vw, 48px)" }}
                >
                  Sheffield SEO questions, answered straight
                </h2>
                <p className="mt-4 text-[15px] text-[#5C6270] leading-[1.7]">
                  The questions Sheffield business owners actually ask us, including the
                  awkward ones about cost, timescales and what happens if you stop.
                </p>
              </div>

              {/* Accordion */}
              <div className="flex flex-col divide-y divide-[#E9ECEF]">
                {FAQ_ITEMS.map((item, i) => (
                  <div key={i}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 py-4 min-h-[48px] text-left group"
                    >
                      <span
                        className={[
                          "text-[16px] font-semibold leading-snug transition-colors duration-200",
                          openFaq === i
                            ? "text-[#B23E13]"
                            : "text-[#0a0a0a] group-hover:text-[#F05A28]",
                        ].join(" ")}
                      >
                        {item.q}
                      </span>
                      <span
                        className="flex-shrink-0 w-6 h-6 rounded-full border border-[#E9ECEF] flex items-center justify-center transition-transform duration-300"
                        style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      style={{ maxHeight: openFaq === i ? "900px" : "0px" }}
                    >
                      <p className="pb-5 text-[15px] text-[#5C6270] leading-[1.75]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 12, LOCAL CREDIBILITY
            bg #F05A28 full-bleed. GSAP count-up on 4 stats.
            SHEFFIELD watermark.
        ════════════════════════════════════════════════════════════════ */}
        <section
          id="local"
          ref={credRef}
          className="bg-fj-cream border-t border-[#E9ECEF] overflow-hidden relative"
        >
          {/* SHEFFIELD watermark */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
            <span
              className="font-clash font-bold text-[#0a0a0a]/[0.04]"
              style={{ fontSize: "clamp(100px, 18vw, 220px)", letterSpacing: "-0.04em", whiteSpace: "nowrap" }}
            >
              SHEFFIELD
            </span>
          </div>

          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 py-24">
            {/* Header */}
            <div className="max-w-[640px] mb-16">
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#B23E13] mb-4">
                Sheffield by the numbers
              </p>
              <h2
                className="font-clash font-bold leading-[1.05] tracking-[-0.03em] text-[#0a0a0a] mb-6"
                style={{ fontSize: "clamp(28px, 3.6vw, 48px)" }}
              >
                Almost every business you compete with in Sheffield is a small one
              </h2>
              <p className="text-[16px] text-[#343A40] leading-[1.7]">
                That is the whole opportunity. The firms ranking above you are not
                national brands with large budgets, they are other local companies of
                under ten people running template websites. Figures below are from the
                official ONS business register for Sheffield, and the full citation is
                further down this page.
              </p>
            </div>

            {/* 4-stat grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {CRED_STATS.map((stat, i) => (
                <div key={stat.id} className="flex flex-col gap-2">
                  <span
                    ref={(el) => { credStatRefs.current[i] = el; }}
                    className="font-clash font-bold text-[#F05A28] leading-none"
                    style={{ fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.03em" }}
                  >
                    {stat.display}
                  </span>
                  <p className="text-[14px] text-[#4A4A45] leading-[1.5]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 13, FINAL CTA
            bg #0a0a0a. 50/50 split. Contact info + lead form.
            Jet Orange submit. SHEFFIELD watermark bottom-right.
        ════════════════════════════════════════════════════════════════ */}
        <section
          id="contact"
          className="bg-[#0a0a0a] relative overflow-hidden border-t border-white/[0.06]"
        >
          {/* Dot grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* SHEFFIELD watermark */}
          <div className="absolute bottom-0 right-0 select-none pointer-events-none overflow-hidden">
            <span
              className="font-clash font-bold text-white/[0.03]"
              style={{ fontSize: "clamp(120px, 18vw, 240px)", letterSpacing: "-0.04em", display: "block", lineHeight: 1 }}
            >
              SHEFFIELD
            </span>
          </div>

          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

              {/* ── Left: copy + contact ─────────────────────────── */}
              <div className="flex flex-col gap-8">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#F05A28] mb-5">
                    Get In Touch
                  </p>
                  <h2
                    className="font-clash font-bold leading-[1.05] tracking-[-0.03em] text-white mb-6"
                    style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
                  >
                    Get found by Sheffield customers.
                  </h2>
                  <p className="text-[16px] text-white/80 leading-[1.7]">
                    Tell us about your business and we{"\u2019"}ll send back a written plan
                    within 24 hours. No sales pressure, no hidden costs.
                  </p>
                </div>

                {/* Contact details */}
                <div className="flex flex-col gap-4">
                  {[
                    { label: "Email",     value: "connect@factoryjet.com",   href: "mailto:connect@factoryjet.com" },
                    { label: "WhatsApp",  value: "Message us on WhatsApp",   href: "https://wa.me/919699977699" },
                  ].map((c) => (
                    <a key={c.label} href={c.href} rel="noopener noreferrer" className="flex items-start gap-4 group">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#9CA3AF] w-[74px] flex-shrink-0 pt-[2px]">
                        {c.label}
                      </span>
                      <span className="text-[15px] text-white/70 group-hover:text-white transition-colors duration-200">
                        {c.value}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Trust chips */}
                <div className="flex flex-wrap gap-2">
                  {["7-day delivery", "No contracts", "Free consultation", "30 days support"].map((chip) => (
                    <span
                      key={chip}
                      className="text-[12px] font-semibold text-white/70 border border-white/[0.18] px-3 py-1 rounded-full"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              {/* ── Right: Lead form ──────────────────────────────── */}
              <div className="bg-[#111118] border border-white/[0.08] rounded-2xl p-8 flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[12px] font-semibold text-white/70 uppercase tracking-[0.08em]">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={lead.name}
                      onChange={setLeadField("name")}
                      className="bg-[#0a0a0a] border border-white/[0.1] rounded-lg px-4 py-3 text-[14px] text-white placeholder-white/50 focus:outline-none focus:border-[#F05A28]/60 transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="business" className="text-[12px] font-semibold text-white/70 uppercase tracking-[0.08em]">
                      Business
                    </label>
                    <input
                      id="business"
                      type="text"
                      placeholder="Business name"
                      value={lead.business}
                      onChange={setLeadField("business")}
                      className="bg-[#0a0a0a] border border-white/[0.1] rounded-lg px-4 py-3 text-[14px] text-white placeholder-white/50 focus:outline-none focus:border-[#F05A28]/60 transition-colors duration-200"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[12px] font-semibold text-white/70 uppercase tracking-[0.08em]">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={lead.email}
                    onChange={setLeadField("email")}
                    className="bg-[#0a0a0a] border border-white/[0.1] rounded-lg px-4 py-3 text-[14px] text-white placeholder-white/50 focus:outline-none focus:border-[#F05A28]/60 transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="package" className="text-[12px] font-semibold text-white/70 uppercase tracking-[0.08em]">
                    Package
                  </label>
                  <select
                    id="package"
                    value={lead.pkg}
                    onChange={setLeadField("pkg")}
                    className="bg-[#0a0a0a] border border-white/[0.1] rounded-lg px-4 py-3 text-[14px] text-white/60 focus:outline-none focus:border-[#F05A28]/60 transition-colors duration-200"
                  >
                    <option value="" disabled>Select a package</option>
                    <option value="starter">Starter</option>
                    <option value="business">Business</option>
                    <option value="ecom">E-Commerce</option>
                    <option value="enterprise">Enterprise</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[12px] font-semibold text-white/70 uppercase tracking-[0.08em]">
                    Tell us about your business
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="What does your business do? What are you looking to achieve with your website?"
                    value={lead.message}
                    onChange={setLeadField("message")}
                    className="bg-[#0a0a0a] border border-white/[0.1] rounded-lg px-4 py-3 text-[14px] text-white placeholder-white/50 focus:outline-none focus:border-[#F05A28]/60 transition-colors duration-200 resize-none"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleLeadSubmit}
                  disabled={leadSending}
                  className="group w-full bg-[#B23E13] hover:bg-[#9A3510] disabled:opacity-70 text-white text-[15px] font-semibold px-6 py-4 rounded-lg transition-all duration-200 hover:-translate-y-[1px] flex items-center justify-center gap-2"
                >
                  {leadSending ? "Sending…" : "Get My Free Proposal"}
                  {!leadSending && (
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                  )}
                </button>
                {leadErr && (
                  <p className="text-[12px] text-[#ff8255] text-center">{leadErr}</p>
                )}
                <p className="text-[12px] text-white/65 text-center">
                  We respond within 24 hours. No spam, ever.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  );
}

// ─── Browser mockup (pure CSS/divs, ~70vh tall) ──────────────────────────────

function BrowserMockup({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <div
      className="w-full max-w-[480px] rounded-2xl overflow-hidden border border-[#E9ECEF] bg-white flex flex-col"
      style={{
        height: "clamp(480px, 68vh, 680px)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)",
      }}
    >
      {/* ── Browser chrome bar ────────────────────────────────────── */}
      <div className="flex-shrink-0 h-11 bg-[#F8F9FA] flex items-center px-4 gap-3 border-b border-[#E9ECEF]">
        {/* Traffic lights */}
        <div className="flex gap-[6px] flex-shrink-0">
          <div className="w-[11px] h-[11px] rounded-full bg-[#FF6B35]/80" />
          <div className="w-[11px] h-[11px] rounded-full bg-yellow-400/70" />
          <div className="w-[11px] h-[11px] rounded-full bg-[#10B981]/70" />
        </div>
        {/* URL bar */}
        <div className="flex-1 h-[26px] bg-white border border-[#E9ECEF] rounded-md flex items-center px-3 gap-2">
          <div className="w-[7px] h-[7px] rounded-full bg-[#10B981] flex-shrink-0" />
          <span className="text-[11px] text-[#343A40]/50 font-mono tracking-tight">
            factoryjet.com/sheffield
          </span>
        </div>
      </div>

      {/* ── Page skeleton ─────────────────────────────────────────── */}
      <div className="flex-1 overflow-hidden p-5 flex flex-col gap-4 bg-white">

        {/* Miniature nav */}
        <div className="flex items-center gap-3 pb-3 border-b border-[#F1F3F5]">
          <div className="h-[8px] w-16 rounded bg-[#F05A28]" />
          <div className="flex-1" />
          <div className="h-[7px] w-8 rounded bg-[#343A40]/20" />
          <div className="h-[7px] w-8 rounded bg-[#343A40]/15" />
          <div className="h-[7px] w-8 rounded bg-[#343A40]/15" />
          <div className="h-7 w-20 rounded-lg bg-[#FF6B35] cursor-pointer" onClick={onCtaClick} />
        </div>

        {/* Hero skeleton area, light */}
        <div className="flex-1 rounded-xl bg-[#F8F9FA] border border-[#E9ECEF] relative overflow-hidden flex flex-col justify-center px-5 gap-3 min-h-[120px]">
          <div
            className="absolute inset-0 flex items-center justify-center font-clash font-bold text-[#0a0a0a]/[0.04] select-none pointer-events-none"
            style={{ fontSize: "80px", letterSpacing: "-0.04em" }}
          >
            SHEFFIELD
          </div>
          <div className="h-[4px] w-10 rounded bg-[#F05A28] relative z-10" />
          <div className="h-[10px] w-4/5 rounded bg-[#0a0a0a]/15 relative z-10" />
          <div className="h-[10px] w-3/5 rounded bg-[#0a0a0a]/10 relative z-10" />
          <div className="h-[8px] w-2/3 rounded bg-[#0a0a0a]/08 relative z-10" />
          <div className="flex gap-2 mt-1 relative z-10">
            <div className="h-8 w-[90px] rounded-lg bg-[#F05A28]" />
            <div className="h-8 w-[80px] rounded-lg border border-[#343A40]/20" />
          </div>
        </div>

        {/* Stats row, Jet Blue cards */}
        <div className="flex gap-3">
          {[
            { label: "7 Days", sub: "Delivery" },
            { label: "90+",    sub: "Lighthouse" },
            { label: "5★",     sub: "Rated" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex-1 rounded-xl bg-[#F05A28] flex flex-col items-center justify-center py-3 gap-[3px]"
            >
              <span className="font-clash text-[14px] font-bold text-white">
                {stat.label}
              </span>
              <span className="text-[10px] text-white/70 uppercase tracking-[0.08em]">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Feature cards row, light */}
        <div className="grid grid-cols-3 gap-3">
          {["⚡ Speed", "📍 Local SEO", "💷 Pricing"].map((label) => (
            <div
              key={label}
              className="rounded-xl bg-[#F8F9FA] border border-[#E9ECEF] p-3 flex flex-col gap-2"
            >
              <span className="text-[11px] text-[#343A40] font-semibold">{label}</span>
              <div className="h-[3px] rounded bg-[#0a0a0a]/10 w-full" />
              <div className="h-[3px] rounded bg-[#0a0a0a]/07 w-3/4" />
            </div>
          ))}
        </div>

        {/* Content skeleton rows */}
        <div className="flex flex-col gap-[6px]">
          <div className="h-[4px] rounded bg-[#0a0a0a]/08 w-full" />
          <div className="h-[4px] rounded bg-[#0a0a0a]/06 w-5/6" />
          <div className="h-[4px] rounded bg-[#0a0a0a]/05 w-3/4" />
        </div>

        {/* CTA skeleton */}
        <div
          onClick={onCtaClick}
          className="h-10 rounded-lg bg-[#FF6B35] hover:bg-[#ff8255] flex items-center justify-center cursor-pointer transition-colors duration-200"
        >
          <span className="text-[11px] font-bold text-white uppercase tracking-[0.08em]">
            Get My Free Quote →
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Marquee content (one copy, rendered twice so the loop never shows a gap) ─────────────

function MarqueeItems() {
  return (
    <span className="flex items-center">
      {MARQUEE_ITEMS.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="text-[12px] md:text-[15px] font-semibold uppercase tracking-[0.1em] text-white/90 px-4 md:px-8">
            {item}
          </span>
          <span className="w-[5px] h-[5px] rounded-full bg-[#F05A28] flex-shrink-0" />
        </span>
      ))}
    </span>
  );
}

// ─── Bento card tag pill ──────────────────────────────────────────────────────

function BentoTag({ label, dark }: { label: string; dark: boolean }) {
  return (
    <span
      className={[
        "text-[11px] font-semibold uppercase tracking-[0.06em] px-3 py-1 rounded-full",
        dark
          ? "bg-white/20 text-white"
          : "bg-[#F8F9FA] text-[#5C6270] border border-[#E9ECEF]",
      ].join(" ")}
    >
      {label}
    </span>
  );
}

// ─── Inline SVG icon wrappers (avoid prop type issues with Lucide) ────────────

function MonitorIcon() {
  return <Monitor size={20} strokeWidth={1.8} className="text-[#F05A28]" />;
}
function BotIcon() {
  return <Bot size={20} strokeWidth={1.8} className="text-white" />;
}
function CartIcon() {
  return <ShoppingCart size={20} strokeWidth={1.8} className="text-[#F05A28]" />;
}
function RefreshIcon() {
  return <RefreshCw size={20} strokeWidth={1.8} className="text-[#F05A28]" />;
}
function TrendIcon() {
  return <TrendingUp size={20} strokeWidth={1.8} className="text-[#F05A28]" />;
}

// ─── AI Chat Mockup (Section 8) ───────────────────────────────────────────────

function AIChatMockup() {
  return (
    <div
      className="w-full max-w-[400px] rounded-2xl overflow-hidden border border-white/10 bg-[#1a1a2e] flex flex-col"
      style={{
        boxShadow: "0 0 40px rgba(0,82,204,0.15), 0 24px 48px rgba(0,0,0,0.4)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06] bg-[#13132a]">
        <div className="w-8 h-8 rounded-full bg-[#F05A28] flex items-center justify-center flex-shrink-0">
          <Bot size={16} strokeWidth={2} className="text-white" />
        </div>
        <div>
          <p className="text-[13px] font-semibold text-white leading-none mb-[2px]">FactoryJet AI</p>
          <p className="text-[11px] text-[#10B981] flex items-center gap-1">
            <span className="w-[6px] h-[6px] rounded-full bg-[#10B981] inline-block" />
            Online now
          </p>
        </div>
      </div>

      {/* Chat body */}
      <div className="flex flex-col gap-4 p-5 flex-1">

        {/* AI message */}
        <div className="flex items-start gap-3 max-w-[85%]">
          <div className="w-6 h-6 rounded-full bg-[#F05A28] flex items-center justify-center flex-shrink-0 mt-1">
            <Bot size={12} strokeWidth={2} className="text-white" />
          </div>
          <div className="bg-[#F05A28] rounded-2xl rounded-tl-sm px-4 py-3">
            <p className="text-[13px] text-white leading-[1.6]">
              Hi! I&rsquo;m the FactoryJet AI. I can help you get a Sheffield website quote, answer questions, or book a consultation. What do you need?
            </p>
          </div>
        </div>

        {/* User message */}
        <div className="flex justify-end">
          <div className="bg-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
            <p className="text-[13px] text-[#0a0a0a] leading-[1.6]">
              How much does a 5-page website cost for my Sheffield plumbing business?
            </p>
          </div>
        </div>

        {/* AI reply */}
        <div className="flex items-start gap-3 max-w-[90%]">
          <div className="w-6 h-6 rounded-full bg-[#F05A28] flex items-center justify-center flex-shrink-0 mt-1">
            <Bot size={12} strokeWidth={2} className="text-white" />
          </div>
          <div className="bg-[#F05A28] rounded-2xl rounded-tl-sm px-4 py-3">
            <p className="text-[13px] text-white leading-[1.6]" suppressHydrationWarning>
              Great question! Our{" "}
              <span className="font-semibold">Starter package is fixed-price and quoted up front</span>
              {" "}, that{"\u2019"}s a full 5-page custom site, Sheffield local SEO,
              and delivered in 5 days. Want me to book a free 30-min call?
            </p>
          </div>
        </div>

        {/* Typing indicator */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-[#F05A28]/30 flex items-center justify-center flex-shrink-0">
            <Bot size={12} strokeWidth={2} className="text-[#F05A28]" />
          </div>
          <div className="bg-[#252540] rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-[5px]">
            <span className="w-[6px] h-[6px] rounded-full bg-white/50 animate-bounce-dot" style={{ animationDelay: "0ms" }} />
            <span className="w-[6px] h-[6px] rounded-full bg-white/50 animate-bounce-dot" style={{ animationDelay: "150ms" }} />
            <span className="w-[6px] h-[6px] rounded-full bg-white/50 animate-bounce-dot" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="px-4 py-3 border-t border-white/[0.06] flex items-center gap-3">
        <div className="flex-1 h-9 bg-white/[0.06] rounded-lg px-3 flex items-center">
          <span className="text-[12px] text-white/25">Type a message…</span>
        </div>
        <div className="w-9 h-9 rounded-lg bg-[#F05A28] flex items-center justify-center flex-shrink-0">
          <span className="text-white text-[14px]">↑</span>
        </div>
      </div>
    </div>
  );
}
