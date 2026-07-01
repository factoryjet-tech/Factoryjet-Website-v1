'use client';

/**
 * CountUp: animates a number from 0 to its final value on first in-view.
 *
 * SSR-safe: the server renders the fully formatted final value as text
 * (value.toLocaleString() + suffix), so crawlers and no-JS visitors always
 * see the real number (e.g. "3,600"). On first intersection the component
 * counts up with an ease-out curve over ~1.2s. Animation is skipped entirely
 * under prefers-reduced-motion, leaving the final value in place.
 *
 * Anti-slop: plain ease-out, no bounce or spring.
 */

import { useEffect, useRef, useState } from 'react';

export interface CountUpProps {
  value: number;
  className?: string;
  suffix?: string;
}

export default function CountUp({ value, className, suffix = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const finalText = value.toLocaleString() + suffix;
  // Server + first client paint show the final value. Animation overrides it.
  const [display, setDisplay] = useState<string>(finalText);
  const doneRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || doneRef.current) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(finalText);
      return;
    }

    let raf = 0;
    let start: number | null = null;
    const duration = 1200;

    const run = () => {
      const step = (ts: number) => {
        if (start === null) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(Math.round(value * eased).toLocaleString() + suffix);
        if (p < 1) {
          raf = requestAnimationFrame(step);
        } else {
          doneRef.current = true;
          setDisplay(finalText);
        }
      };
      raf = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !doneRef.current) {
            setDisplay('0' + suffix);
            run();
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, suffix]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

export { CountUp };
