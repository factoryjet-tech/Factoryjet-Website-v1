'use client';

import React, { useEffect, useState } from 'react';

export function StickyCallToAction() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' &&
        localStorage.getItem('sticky-cta-dismissed') === 'true') {
      setDismissed(true);
    }
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dismiss = () => {
    setDismissed(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sticky-cta-dismissed', 'true');
    }
  };

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0052CC] shadow-2xl">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
        <p className="text-white text-sm sm:text-base font-medium flex-1 min-w-0">
          Have a project in mind?
        </p>
        <a
          href="https://factoryjet.com/contact"
          className="shrink-0 bg-white text-[#0052CC] font-semibold text-sm px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
        >
          Book a free 30-min call →
        </a>
        <button
          onClick={dismiss}
          aria-label="Dismiss"
          className="shrink-0 ml-1 text-blue-200 hover:text-white transition-colors text-xl leading-none font-bold"
        >
          ×
        </button>
      </div>
    </div>
  );
}