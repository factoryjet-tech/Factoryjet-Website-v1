import type { ReactNode } from 'react';
import MobileStickyCTA from '@/components/MobileStickyCTA';

/**
 * /us layout — passthrough that mounts the mobile sticky CTA across every /us
 * page (homepage, service, city). The root layout owns <html>/<body> and the
 * ContactModalProvider; this nested layout only adds the persistent mobile CTA.
 */
export default function USLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <MobileStickyCTA />
    </>
  );
}
