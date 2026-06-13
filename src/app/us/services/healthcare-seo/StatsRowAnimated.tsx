'use client';

/**
 * StatsRowAnimated — counter-animated version of the healthcare SEO stats row.
 * Uses IntersectionObserver + CSS transitions. Zero GSAP, zero deps.
 * Performance-safe: counter only runs once per page load, pauses off-screen.
 * Brand palette only. Per feedback_page_design_non_negotiables_2026 §8.
 */

import { useEffect, useRef, useState } from 'react';

type StatItem = {
  value: string;
  /** The numeric target to count up to. null = static (non-numeric). */
  countTo: number | null;
  suffix: string;
  label: string;
  body: string;
};

const STATS: StatItem[] = [
  {
    value: '500+',
    countTo: 500,
    suffix: 'businesses served',
    label: 'across 10+ industries including healthcare',
    body: 'We have worked with medical, dental, health tech, and healthcare staffing clients alongside our broader SMB portfolio — enough to know where generalist SEO agencies fall short in regulated verticals.',
  },
  {
    value: 'YMYL',
    countTo: null,
    suffix: 'specialist',
    label: 'E-E-A-T built in from the first draft',
    body: 'Healthcare content lives or dies on E-E-A-T. We build provider bylines, licensed citations, and verifiable credentials into every page from the start — not as a fix when rankings plateau after months of investment.',
  },
  {
    value: 'Google + AI',
    countTo: null,
    suffix: 'both covered',
    label: 'map pack + AI citations in one monthly report',
    body: 'Patients search Google Maps and ask ChatGPT for provider recommendations. We optimize for both and report both — map pack positions, organic rankings, and AI-engine citations side by side every month.',
  },
];

/** Eases count from 0 → target over ~1.8s using requestAnimationFrame */
function useCountUp(target: number | null, isVisible: boolean) {
  const [display, setDisplay] = useState(0);
  const raf = useRef<number | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!isVisible || target === null || started.current) return;
    started.current = true;

    const finalTarget = target; // capture non-null value for closure
    const duration = 1800;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out-cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * finalTarget));
      if (progress < 1) {
        raf.current = requestAnimationFrame(tick);
      }
    }

    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, [isVisible, target]);

  return target !== null ? display : null;
}

function StatCard({ stat }: { stat: StatItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const count = useCountUp(stat.countTo, visible);

  // Display logic:
  // - numeric with count: show count + "+"
  // - non-numeric: show static value
  const displayValue =
    count !== null
      ? `${count.toLocaleString()}+`
      : stat.value;

  return (
    <div ref={ref}>
      <div className="flex items-baseline gap-2">
        <p
          className="fj-display font-bold"
          style={{
            color: '#F05A28',
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            lineHeight: 1,
            letterSpacing: '-0.02em',
            // Prevent layout shift during count
            minWidth: stat.countTo !== null ? '4.5ch' : undefined,
            display: 'inline-block',
          }}
          aria-live={stat.countTo !== null ? 'polite' : undefined}
          aria-atomic="true"
        >
          {displayValue}
        </p>
        <p
          className="font-fj-body font-semibold"
          style={{
            color: '#0F0F12',
            fontSize: '1.0625rem',
            letterSpacing: '0.005em',
          }}
        >
          {stat.suffix}
        </p>
      </div>
      <p
        className="mt-1 font-fj-body"
        style={{
          color: 'rgba(15,15,18,0.55)',
          fontSize: '0.8125rem',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          fontWeight: 600,
        }}
      >
        {stat.label}
      </p>
      <p
        className="mt-4 font-fj-body"
        style={{
          color: 'rgba(15,15,18,0.72)',
          fontSize: '1rem',
          lineHeight: 1.6,
        }}
      >
        {stat.body}
      </p>
    </div>
  );
}

export default function StatsRowAnimated() {
  return (
    <section
      className="py-10 md:py-14"
      style={{
        backgroundColor: '#FAFAF7',
        borderTop: '1.5px solid rgba(240,90,40,0.20)',
        borderBottom: '1.5px solid rgba(240,90,40,0.20)',
      }}
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {STATS.map((stat) => (
            <StatCard key={stat.value} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
