"use client";

import { useEffect, useRef, type ReactNode } from 'react';

/** Native disclosure works before hydration; dismiss when focus leaves. */
export default function FooterRegionSwitcher({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const dismissOutside = (event: Event) => {
      const details = ref.current;
      if (details?.open && !details.contains(event.target as Node)) details.open = false;
    };
    document.addEventListener('pointerdown', dismissOutside);
    document.addEventListener('focusin', dismissOutside);
    return () => {
      document.removeEventListener('pointerdown', dismissOutside);
      document.removeEventListener('focusin', dismissOutside);
    };
  }, []);
  return (
    <details ref={ref} className="us-footer__region" onKeyDown={(event) => {
      if (event.key === 'Escape' && event.currentTarget.open) {
        event.preventDefault();
        event.stopPropagation();
        event.currentTarget.open = false;
        event.currentTarget.querySelector('summary')?.focus();
      }
    }}>
      {children}
    </details>
  );
}
