'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollToTop: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Get hash from window.location if needed
    const hash = window.location.hash;

    // If there's a hash, scroll to that element
    if (hash) {
      // Retry function to handle lazy-loaded components
      const scrollToHash = (retries = 0) => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (retries < 10) {
          // Retry up to 10 times (1 second total)
          setTimeout(() => scrollToHash(retries + 1), 100);
        }
      };

      // Initial delay to let page render
      setTimeout(() => scrollToHash(), 300);
    } else {
      // Otherwise scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

    // NO page_view push here. Removed 2026-08-07.
    //
    // This used to call trackPageView(pathname), pushing {event:'page_view', …} into
    // window.dataLayer on every route change. Two reasons it had to go:
    //
    // 1. NOTHING CONSUMED IT. Audited every trigger in the live GTM container
    //    (GTM-PKWD8SHF): mailto, tel, WhatsApp, Calendly, All Pages, form_success and
    //    three lead_converted variants. Not one listens for a custom event named
    //    page_view, so this push has been dead weight the whole time.
    //
    // 2. window.dataLayer is SHARED with gtag.js, which the Google tag loads. Pushing
    //    a raw object whose event name collides with GA4's own reserved page_view
    //    into that shared queue is the one non-standard thing in an otherwise textbook
    //    setup, and page_view has not reached GA4 since 2026-07-05 while standalone
    //    event tags (generate_lead, book_call_click) never stopped.
    //
    // GA4 enhanced measurement is enabled on the stream and covers page views,
    // including SPA route changes via browser history events, so removing this loses
    // no coverage. See TRACKING.md.
  }, [pathname]);

  return null;
};

export default ScrollToTop;
