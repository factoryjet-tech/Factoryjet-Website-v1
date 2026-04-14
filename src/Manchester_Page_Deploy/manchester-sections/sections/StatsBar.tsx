"use client";

import { useRef, useEffect, useState } from "react";

// ── CountUp ───────────────────────────────────────────────────────────────────
// rAF-based counter, easeOutExpo curve, fires once via IntersectionObserver.
interface CountUpProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

function CountUp({ value, prefix = "", suffix = "", duration = 2000 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const spanRef = useRef<HTMLSpanElement>(null);

  // Fire once when ≥80 % of the element enters the viewport
  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.8 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // rAF loop with easeOutExpo
  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.round(easeOutExpo(progress) * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, value, duration]);

  return (
    <span ref={spanRef}>
      {prefix}
      {count.toLocaleString("en-GB")}
      {suffix}
    </span>
  );
}

// ── Stats data ────────────────────────────────────────────────────────────────
const STATS = [
  {
    value: 10000,
    prefix: "",
    suffix: "+",
    label: "Creative, digital & tech businesses in Greater Manchester",
  },
  {
    value: 100,
    prefix: "£",
    suffix: "B",
    label: "Greater Manchester GVA — largest UK city-region outside London",
  },
  {
    value: 94,
    prefix: "",
    suffix: "%",
    label: "Gigabit broadband coverage across Greater Manchester",
  },
  {
    value: 1,
    prefix: "#",
    suffix: "",
    label: "UK's top destination for new tech business (SAS AI Cities Index)",
  },
] as const;

// ── StatsBar ──────────────────────────────────────────────────────────────────
export default function StatsBar() {
  return (
    <div className="bg-white py-8 border-b border-slate-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-clash text-3xl font-bold mb-1" style={{ color: "#0a0f1c" }}>
                <CountUp
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </p>
              <p className="text-sm text-gray-500 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
