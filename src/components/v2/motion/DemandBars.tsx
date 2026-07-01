'use client';

/**
 * DemandBars: search-demand rows with bars that fill on first in-view.
 *
 * All text (keyword, volume, difficulty) is server-rendered so crawlers read
 * the full data. The bars start at width 0 and animate to their target width
 * once the widget scrolls into view. Under prefers-reduced-motion the bars are
 * set to full width immediately, with no transition.
 */

import { useEffect, useRef, useState } from 'react';

export interface DemandRow {
  kw: string;
  v: string;
  kd: string;
  w: string;
}

export interface DemandBarsProps {
  rows: DemandRow[];
}

export default function DemandBars({ rows }: DemandBarsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInstant(true);
      setFilled(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFilled(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {rows.map((r) => (
        <div key={r.kw} className="drow">
          <div className="drow-top">
            <span className="drow-kw">{r.kw}</span>
            <span className="drow-v">{r.v}</span>
          </div>
          <div className="drow-bar">
            <i
              style={{
                width: filled ? r.w : '0%',
                transition: instant ? 'none' : 'width 1.1s cubic-bezier(.22,1,.36,1)',
              }}
            />
          </div>
          <div className="drow-kd">{r.kd}</div>
        </div>
      ))}
    </div>
  );
}

export { DemandBars };
