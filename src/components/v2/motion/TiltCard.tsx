'use client';

/**
 * TiltCard: subtle pointer-driven 3D tilt wrapper.
 *
 * On fine pointers (mouse) the child tilts a maximum of ~5deg on each axis
 * plus a small lift, tracking the cursor, and resets on mouse leave. It is a
 * no-op under prefers-reduced-motion or on coarse pointers (touch), so the
 * children always render normally and the effect is progressive enhancement.
 *
 * Children render as-is in SSR, so no content depends on JavaScript.
 */

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

export interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export default function TiltCard({ children, className }: TiltCardProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const onMove = (ev: MouseEvent) => {
      const r = inner.getBoundingClientRect();
      const x = (ev.clientX - r.left) / r.width - 0.5;
      const y = (ev.clientY - r.top) / r.height - 0.5;
      inner.style.transform =
        'rotateY(' + x * 5 + 'deg) rotateX(' + -y * 5 + 'deg) translateY(-2px)';
    };
    const onLeave = () => {
      inner.style.transform = '';
    };

    wrap.addEventListener('mousemove', onMove);
    wrap.addEventListener('mouseleave', onLeave);
    return () => {
      wrap.removeEventListener('mousemove', onMove);
      wrap.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div ref={wrapRef} className={className} style={{ perspective: 900 }}>
      <div
        ref={innerRef}
        style={{ transformStyle: 'preserve-3d', transition: 'transform .3s cubic-bezier(.22,1,.36,1)', willChange: 'transform' }}
      >
        {children}
      </div>
    </div>
  );
}

export { TiltCard };
